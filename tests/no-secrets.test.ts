import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const SKIP = new Set(["node_modules", ".next", ".git", "package-lock.json"]);

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(process.cwd()).filter((f) => /\.(ts|tsx|js|mjs|json|sql|md|css|svg|yml|yaml|example)$/.test(f) || f.endsWith(".env.example"));

describe("repository secret scan (heuristic, not a substitute for a real secret scanner)", () => {
  it("contains no JWT-like tokens, Supabase secret keys or private keys", () => {
    const patterns: [string, RegExp][] = [
      ["JWT-like token", /eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/],
      ["Supabase secret key", /sb_secret_[A-Za-z0-9_-]+/],
      ["private key block", /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
    ];
    const hits: string[] = [];
    for (const f of files) {
      const text = readFileSync(f, "utf8");
      for (const [label, re] of patterns) if (re.test(text)) hits.push(`${label}: ${relative(process.cwd(), f)}`);
    }
    expect(hits).toEqual([]);
  });

  it("app and lib code never references a service-role key", () => {
    const code = files.filter((f) => /[\\/](app|lib)[\\/]|proxy\.ts$/.test(f) && /\.(ts|tsx)$/.test(f));
    const offenders = code.filter((f) => /service[_-]?role/i.test(readFileSync(f, "utf8"))).map((f) => relative(process.cwd(), f));
    expect(offenders).toEqual([]);
  });

  it("no NEXT_PUBLIC variable is named like a secret", () => {
    const offenders = files.filter((f) => /NEXT_PUBLIC_[A-Z_]*(SECRET|SERVICE_ROLE|PRIVATE)/.test(readFileSync(f, "utf8")) && !f.endsWith("no-secrets.test.ts")).map((f) => relative(process.cwd(), f));
    expect(offenders).toEqual([]);
  });
});
