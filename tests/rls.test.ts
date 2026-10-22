import { describe, it, expect, beforeAll, afterAll } from "vitest";
import type { PGlite } from "@electric-sql/pglite";
import { createTestDb, asActor } from "./helpers/db";

const ALICE = "11111111-1111-4111-8111-111111111111";
const BOB = "22222222-2222-4222-8222-222222222222";
const HELPER = "33333333-3333-4333-8333-333333333333";

let db: PGlite;
let bizA: string;
let bizB: string;

const alice = { sub: ALICE, role: "authenticated" as const };
const bob = { sub: BOB, role: "authenticated" as const };

async function rejects(p: Promise<unknown>) {
  let err: unknown;
  try {
    await p;
  } catch (e) {
    err = e;
  }
  expect(err, "expected the statement to be rejected").toBeDefined();
  return String((err as Error).message);
}

beforeAll(async () => {
  db = await createTestDb();
  await db.query("insert into auth.users (id, email) values ($1,'alice@test.invalid'),($2,'bob@test.invalid'),($3,'helper@test.invalid')", [ALICE, BOB, HELPER]);
  bizA = await asActor(db, alice, async () => (await db.query<{ id: string }>("select public.create_business('Alice Trade Store') as id")).rows[0].id);
  bizB = await asActor(db, bob, async () => (await db.query<{ id: string }>("select public.create_business('Bob Transport') as id")).rows[0].id);
});

afterAll(async () => {
  await db.close();
});

describe("harness sanity", () => {
  it("without RLS context (superuser) both businesses exist, so isolation below is meaningful", async () => {
    const r = await db.query("select count(*)::int as n from public.businesses");
    expect(r.rows[0]).toEqual({ n: 2 });
  });
});

describe("RLS is enabled on every exposed table", () => {
  it("all public tables have RLS enabled and forced", async () => {
    const r = await db.query<{ relname: string; relrowsecurity: boolean; relforcerowsecurity: boolean }>(
      `select c.relname, c.relrowsecurity, c.relforcerowsecurity
         from pg_class c join pg_namespace n on n.oid = c.relnamespace
        where n.nspname = 'public' and c.relkind = 'r'`,
    );
    expect(r.rows.map((x) => x.relname).sort()).toEqual(["business_members", "businesses"]);
    for (const row of r.rows) {
      expect(row.relrowsecurity, `${row.relname} RLS enabled`).toBe(true);
      expect(row.relforcerowsecurity, `${row.relname} RLS forced`).toBe(true);
    }
  });

  it("every public table has at least one policy and anon has no table privileges", async () => {
    const p = await db.query<{ tablename: string }>("select distinct tablename from pg_policies where schemaname='public'");
    expect(p.rows.map((x) => x.tablename).sort()).toEqual(["business_members", "businesses"]);
    const g = await db.query("select * from information_schema.role_table_grants where table_schema='public' and grantee in ('anon','PUBLIC')");
    expect(g.rows).toEqual([]);
  });
});

describe("permitted access", () => {
  it("creator becomes owner and can read own business and membership", async () => {
    await asActor(db, alice, async () => {
      const b = await db.query<{ id: string; name: string; currency: string }>("select id, name, currency from public.businesses");
      expect(b.rows).toEqual([{ id: bizA, name: "Alice Trade Store", currency: "PGK" }]);
      const m = await db.query<{ role: string }>("select role from public.business_members where business_id = $1", [bizA]);
      expect(m.rows).toEqual([{ role: "owner" }]);
    });
  });

  it("owner can rename their own business", async () => {
    await asActor(db, alice, async () => {
      const r = await db.query("update public.businesses set name = 'Alice General Store' where id = $1", [bizA]);
      expect(r.affectedRows).toBe(1);
    });
  });
});

describe("forbidden cross-business access (Alice vs Bob's business)", () => {
  it("cannot read the other business or its members", async () => {
    await asActor(db, alice, async () => {
      expect((await db.query("select * from public.businesses where id = $1", [bizB])).rows).toEqual([]);
      expect((await db.query("select * from public.business_members where business_id = $1", [bizB])).rows).toEqual([]);
    });
  });

  it("cannot update the other business (0 rows affected)", async () => {
    await asActor(db, alice, async () => {
      const r = await db.query("update public.businesses set name = 'Hijacked' where id = $1", [bizB]);
      expect(r.affectedRows).toBe(0);
    });
    const check = await db.query<{ name: string }>("select name from public.businesses where id = $1", [bizB]);
    expect(check.rows[0].name).toBe("Bob Transport");
  });

  it("cannot delete the other business or her own (no DELETE privilege)", async () => {
    await asActor(db, alice, async () => {
      await rejects(db.query("delete from public.businesses where id = $1", [bizB]));
      await rejects(db.query("delete from public.businesses where id = $1", [bizA]));
    });
  });

  it("cannot insert a membership into the other business or promote herself", async () => {
    await asActor(db, alice, async () => {
      await rejects(db.query("insert into public.business_members (business_id, user_id, role) values ($1,$2,'owner')", [bizB, ALICE]));
      await rejects(db.query("update public.business_members set role = 'owner' where business_id = $1", [bizA]));
      await rejects(db.query("delete from public.business_members where business_id = $1", [bizA]));
    });
  });

  it("cannot insert businesses directly (only via create_business)", async () => {
    await asActor(db, alice, async () => {
      await rejects(db.query("insert into public.businesses (name, created_by) values ('Direct', $1)", [ALICE]));
    });
  });

  it("cannot change immutable columns (created_by, currency, id) on her own business", async () => {
    await asActor(db, alice, async () => {
      await rejects(db.query("update public.businesses set created_by = $1 where id = $2", [BOB, bizA]));
      await rejects(db.query("update public.businesses set currency = 'PGK' where id = $1", [bizA]));
      await rejects(db.query("update public.businesses set id = gen_random_uuid() where id = $1", [bizA]));
    });
  });

  it("user_metadata claims in the JWT do not grant access (authorization uses membership rows only)", async () => {
    const spoof = { sub: ALICE, role: "authenticated" as const, claims: { user_metadata: { business_id: bizB, role: "owner" }, app_metadata: { business_id: bizB } } };
    await asActor(db, spoof, async () => {
      expect((await db.query("select * from public.businesses where id = $1", [bizB])).rows).toEqual([]);
      const r = await db.query("update public.businesses set name = 'Spoofed' where id = $1", [bizB]);
      expect(r.affectedRows).toBe(0);
    });
  });
});

describe("signed-out and edge cases", () => {
  it("anon role has no access to either table", async () => {
    await asActor(db, { sub: null, role: "anon" }, async () => {
      await rejects(db.query("select * from public.businesses"));
      await rejects(db.query("select * from public.business_members"));
    });
  });

  it("authenticated role with no usable user id sees nothing and cannot create a business", async () => {
    await asActor(db, { sub: null, role: "authenticated" }, async () => {
      expect((await db.query("select * from public.businesses")).rows).toEqual([]);
      const msg = await rejects(db.query("select public.create_business('Ghost Co')"));
      expect(msg).toContain("not_authenticated");
    });
  });

  it("create_business rejects invalid names", async () => {
    await asActor(db, alice, async () => {
      await rejects(db.query("select public.create_business('x')"));
      await rejects(db.query("select public.create_business('   ')"));
    });
  });
});

describe("helper role (reserved for later; read-only in this foundation)", () => {
  it("a helper added by an admin process can read but not modify the business", async () => {
    // Simulates a future, approved invitation flow: inserted as superuser, not by a client.
    await db.query("insert into public.business_members (business_id, user_id, role) values ($1,$2,'helper')", [bizA, HELPER]);
    await asActor(db, { sub: HELPER, role: "authenticated" }, async () => {
      expect((await db.query("select id from public.businesses")).rows).toEqual([{ id: bizA }]);
      // helper sees only their own membership row, not the owner's
      const m = await db.query<{ user_id: string }>("select user_id from public.business_members");
      expect(m.rows).toEqual([{ user_id: HELPER }]);
      const r = await db.query("update public.businesses set name = 'Helper Edit' where id = $1", [bizA]);
      expect(r.affectedRows).toBe(0);
    });
  });

  it("owner can see all members of their own business, and Bob still sees nothing of it", async () => {
    await asActor(db, alice, async () => {
      const m = await db.query<{ user_id: string }>("select user_id from public.business_members where business_id = $1 order by role", [bizA]);
      expect(m.rows.map((x) => x.user_id).sort()).toEqual([ALICE, HELPER].sort());
    });
    await asActor(db, bob, async () => {
      expect((await db.query("select * from public.business_members where business_id = $1", [bizA])).rows).toEqual([]);
    });
  });
});
