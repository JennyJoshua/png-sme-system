import { createBrowserClient } from "@supabase/ssr";
import { readSupabaseConfig } from "@/lib/env";

/** Browser client. Uses only the browser-safe publishable key; access is limited by RLS. */
export function createClient() {
  const config = readSupabaseConfig();
  if (!config) throw new Error("SUPABASE_NOT_CONFIGURED");
  return createBrowserClient(config.url, config.key);
}
