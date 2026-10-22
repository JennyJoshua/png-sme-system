# Schema and RLS (Batch 1)

Migration: `supabase/migrations/20261023000001_business_foundation.sql`

## Tables
- `businesses(id, name, currency='PGK', created_by, created_at, updated_at)`: currency fixed to PGK (D-014).
- `business_members(business_id, user_id, role in ('owner','helper'))`: the only source of authorization. `helper` is reserved for later; in this batch helpers are read-only and no client path can create one.

Rationale: every later business-owned table will carry `business_id` and reuse `has_business_role(business_id, roles)`. Complex transaction tables are deliberately not created yet.

## Policies and privileges
| Table | Client (authenticated) can | Client cannot |
|---|---|---|
| businesses | SELECT if member (owner/helper); UPDATE `name` only, if owner | INSERT, DELETE, change id/created_by/currency |
| business_members | SELECT own rows; owners SELECT all rows of their business | INSERT, UPDATE, DELETE (invitations/role changes are a later approved batch) |
| both | | anon has no privileges at all |

- RLS is ENABLED and FORCED on both tables.
- `create_business(name)` (SECURITY DEFINER, pinned `search_path`) is the only way to create a business; it makes the caller the owner atomically and refuses unauthenticated callers.
- `has_business_role` is SECURITY DEFINER to avoid recursive policy evaluation.
- Authorization never reads JWT `user_metadata`/`app_metadata` (tested with spoofed claims).

## How cross-business access is tested (`tests/rls.test.ts`)
Real migration SQL on PostgreSQL 18 (PGlite). A small stub supplies `auth.users`, `auth.uid()` (reads the JWT `sub` claim like Supabase) and the `anon`/`authenticated` roles. Each test switches to a non-bypassing role and sets JWT claims. Alice and Bob each own a business; tests assert Alice cannot read, update, delete, join or promote herself in Bob's business, anon is denied, helpers are read-only, and RLS is enabled/forced on every public table. Weakening a policy or disabling RLS was confirmed to make tests fail.

## Limits of this evidence
This is not a test against a live Supabase project. Differences between the stub and Supabase (extra grants, PostgREST behaviour, default privileges on new tables, Auth internals) are untested. Run the integration check in `docs/SETUP.md` against a real project before relying on it.
