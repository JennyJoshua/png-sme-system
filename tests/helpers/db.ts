import { PGlite } from "@electric-sql/pglite";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

/**
 * Local stand-in for the parts of Supabase the migrations rely on:
 * schema "auth", auth.users, auth.uid() (reads the JWT "sub" claim like Supabase does),
 * and the roles "anon" / "authenticated". Everything else is the real migration SQL run
 * on real PostgreSQL (PGlite). This is NOT a test against a live Supabase project.
 */
const SUPABASE_STUB = `
  create role authenticated nologin;
  create role anon nologin;
  create schema auth;
  create table auth.users (id uuid primary key, email text);
  create function auth.uid() returns uuid language sql stable as $$
    select coalesce(
      nullif(current_setting('request.jwt.claim.sub', true), ''),
      nullif((nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub'), '')
    )::uuid
  $$;
  grant usage on schema auth to authenticated, anon;
  grant usage on schema public to authenticated, anon;
  grant execute on function auth.uid() to authenticated, anon;
`;

export async function createTestDb(): Promise<PGlite> {
  const db = new PGlite();
  await db.exec(SUPABASE_STUB);
  const dir = join(process.cwd(), "supabase", "migrations");
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".sql")).sort()) {
    await db.exec(readFileSync(join(dir, file), "utf8"));
  }
  return db;
}

export type Actor = { sub: string | null; role: "authenticated" | "anon"; claims?: Record<string, unknown> };

/** Run a callback as a given user: sets the JWT claims and switches to a non-bypassing DB role. */
export async function asActor<T>(db: PGlite, actor: Actor, fn: () => Promise<T>): Promise<T> {
  const claims = JSON.stringify({ ...(actor.sub ? { sub: actor.sub } : {}), role: actor.role, ...(actor.claims ?? {}) });
  await db.query("select set_config('request.jwt.claims', $1, false), set_config('request.jwt.claim.sub', $2, false)", [claims, actor.sub ?? ""]);
  await db.exec(`set role ${actor.role}`);
  try {
    return await fn();
  } finally {
    await db.exec("reset role");
    await db.query("select set_config('request.jwt.claims', '', false), set_config('request.jwt.claim.sub', '', false)");
  }
}
