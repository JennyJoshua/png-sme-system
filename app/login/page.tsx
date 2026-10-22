"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { friendlyAuthError } from "@/lib/auth/errors";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return; // guard against double submission
    setBusy(true);
    setError(null);
    setNotice(null);
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    try {
      const supabase = createClient();
      if (mode === "signin") {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) return setError(friendlyAuthError(err));
        router.push("/");
        router.refresh();
      } else {
        const { data, error: err } = await supabase.auth.signUp({ email, password });
        if (err) return setError(friendlyAuthError(err));
        if (data.session) {
          router.push("/");
          router.refresh();
        } else {
          setNotice("Check your email to confirm your account, then sign in.");
        }
      }
    } catch (e) {
      setError(friendlyAuthError({ message: e instanceof Error ? e.message : "" }));
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="card">
      <h1>{mode === "signin" ? "Sign in" : "Create account"}</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required minLength={8} autoComplete={mode === "signin" ? "current-password" : "new-password"} />
        <button type="submit" disabled={busy}>{busy ? "Please wait..." : mode === "signin" ? "Sign in" : "Create account"}</button>
        {error ? <p role="alert" className="error">{error}</p> : null}
        {notice ? <p role="status">{notice}</p> : null}
      </form>
      <button type="button" className="secondary" onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); setNotice(null); }}>
        {mode === "signin" ? "I need an account" : "I already have an account"}
      </button>
    </section>
  );
}
