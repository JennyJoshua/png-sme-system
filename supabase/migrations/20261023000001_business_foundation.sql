-- Wantok Business Manager - Phase 1 Batch 1
-- Foundation only: businesses + business_members, with RLS and least-privilege access.
-- Authorization comes ONLY from rows in public.business_members (trusted, server-controlled),
-- never from user-editable JWT user_metadata.
--
-- Supabase supplies: schema "auth", auth.users, auth.uid(), roles "anon" and "authenticated".

create table public.businesses (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(btrim(name)) between 2 and 100),
  currency    text not null default 'PGK' check (currency = 'PGK'),   -- D-014: PGK only in V1
  created_by  uuid not null references auth.users (id) on delete restrict,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table public.business_members (
  business_id uuid not null references public.businesses (id) on delete cascade,
  user_id     uuid not null references auth.users (id) on delete cascade,
  role        text not null check (role in ('owner', 'helper')),
  created_at  timestamptz not null default now(),
  primary key (business_id, user_id)
);

create index business_members_user_id_idx on public.business_members (user_id);

-- Every exposed table: RLS on, and forced so even the table owner is subject to policies.
alter table public.businesses        enable row level security;
alter table public.businesses        force  row level security;
alter table public.business_members  enable row level security;
alter table public.business_members  force  row level security;

-- Helper functions. SECURITY DEFINER lets policies consult business_members without
-- recursive policy evaluation; search_path is pinned to avoid hijacking.
create function public.has_business_role(p_business_id uuid, p_roles text[])
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.business_members m
    where m.business_id = p_business_id
      and m.user_id = auth.uid()
      and m.role = any (p_roles)
  );
$$;

-- Atomic business creation: the creator becomes the owner. Direct INSERTs on both
-- tables are denied to clients (no INSERT policy), so this is the only creation path.
create function public.create_business(p_name text)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := auth.uid();
  v_id  uuid;
begin
  if v_uid is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  insert into public.businesses (name, created_by)
  values (btrim(p_name), v_uid)
  returning id into v_id;
  insert into public.business_members (business_id, user_id, role)
  values (v_id, v_uid, 'owner');
  return v_id;
end;
$$;

create function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger businesses_set_updated_at
  before update on public.businesses
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------- policies
-- businesses: members read; owners may rename. No client INSERT/DELETE (deferred decisions).
create policy businesses_select_member on public.businesses
  for select to authenticated
  using (public.has_business_role(id, array['owner', 'helper']));

create policy businesses_update_owner on public.businesses
  for update to authenticated
  using (public.has_business_role(id, array['owner']))
  with check (public.has_business_role(id, array['owner']));

-- business_members: a user sees their own rows; owners see all members of their business.
-- No client INSERT/UPDATE/DELETE: invitations and role changes are a later, approved batch.
create policy business_members_select on public.business_members
  for select to authenticated
  using (user_id = auth.uid() or public.has_business_role(business_id, array['owner']));

-- ---------------------------------------------------------------- privileges
revoke all on public.businesses       from public, anon, authenticated;
revoke all on public.business_members from public, anon, authenticated;

grant select on public.businesses       to authenticated;
grant update (name) on public.businesses to authenticated;   -- column-level: id/created_by/currency are immutable to clients
grant select on public.business_members to authenticated;

revoke all on function public.has_business_role(uuid, text[]) from public, anon;
revoke all on function public.create_business(text)           from public, anon;
grant execute on function public.has_business_role(uuid, text[]) to authenticated;
grant execute on function public.create_business(text)           to authenticated;
