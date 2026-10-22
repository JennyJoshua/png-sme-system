import { describe, it, expect } from "vitest";
import { readSupabaseConfig } from "@/lib/env";
import { friendlyAuthError } from "@/lib/auth/errors";

describe("readSupabaseConfig", () => {
  it("returns null when values are missing or still placeholders", () => {
    expect(readSupabaseConfig({})).toBeNull();
    expect(readSupabaseConfig({ NEXT_PUBLIC_SUPABASE_URL: "your-project-url-here", NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "your-publishable-key-here" })).toBeNull();
  });
  it("accepts https URL with publishable key, or legacy anon key", () => {
    expect(readSupabaseConfig({ NEXT_PUBLIC_SUPABASE_URL: "https://abc.supabase.co", NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "pk" })).toEqual({ url: "https://abc.supabase.co", key: "pk" });
    expect(readSupabaseConfig({ NEXT_PUBLIC_SUPABASE_URL: "https://abc.supabase.co", NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon" })).toEqual({ url: "https://abc.supabase.co", key: "anon" });
  });
  it("rejects insecure remote URLs but allows localhost", () => {
    expect(readSupabaseConfig({ NEXT_PUBLIC_SUPABASE_URL: "http://example.com", NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "pk" })).toBeNull();
    expect(readSupabaseConfig({ NEXT_PUBLIC_SUPABASE_URL: "http://127.0.0.1:54321", NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "pk" })).not.toBeNull();
  });
  it("never reads a service-role or secret variable", () => {
    expect(readSupabaseConfig({ SUPABASE_SERVICE_ROLE_KEY: "secret", NEXT_PUBLIC_SUPABASE_URL: "https://abc.supabase.co" })).toBeNull();
  });
});

describe("friendlyAuthError", () => {
  it("maps known failures to plain messages", () => {
    expect(friendlyAuthError({ code: "invalid_credentials", message: "Invalid login credentials" })).toMatch(/incorrect/);
    expect(friendlyAuthError({ message: "Email not confirmed" })).toMatch(/confirm/);
    expect(friendlyAuthError({ status: 429, message: "x" })).toMatch(/Too many/);
    expect(friendlyAuthError({ message: "JWT expired" })).toMatch(/sign in again/);
    expect(friendlyAuthError({ message: "Failed to fetch" })).toMatch(/internet/);
    expect(friendlyAuthError({ message: "SUPABASE_NOT_CONFIGURED" })).toMatch(/not connected/);
  });
  it("does not leak raw provider text for unknown errors", () => {
    const msg = friendlyAuthError({ message: "pg internal: relation secret_table failed" });
    expect(msg).not.toContain("secret_table");
    expect(friendlyAuthError(null)).toMatch(/try again/);
  });
});
