/**
 * Browser-safe Supabase configuration. Only NEXT_PUBLIC_* values are read.
 * Privileged keys (service role / secret) are deliberately never read by this app.
 */
export type SupabaseConfig = { url: string; key: string };

const PLACEHOLDER = /^your-.*-here$/i;

export function readSupabaseConfig(
  env: Record<string, string | undefined> = {
    // Literal property access is required so Next.js can inline NEXT_PUBLIC_* values.
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
): SupabaseConfig | null {
  const url = env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = (env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? env.NEXT_PUBLIC_SUPABASE_ANON_KEY)?.trim();
  if (!url || !key || PLACEHOLDER.test(url) || PLACEHOLDER.test(key)) return null;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.hostname !== "localhost" && parsed.hostname !== "127.0.0.1") {
      return null;
    }
  } catch {
    return null;
  }
  return { url, key };
}
