import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "./actions";
import { BusinessForm } from "./business-form";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const supabase = await createClient();

  if (!supabase) {
    return (
      <section className="card">
        <h1>Setup needed</h1>
        <p>The database connection is not configured. Copy <code>.env.example</code> to <code>.env.local</code> and add your Supabase project values. See <code>docs/SETUP.md</code>.</p>
      </section>
    );
  }

  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) {
    return (
      <section className="card">
        <h1>Welcome</h1>
        <p>Sign in to see your business dashboard.</p>
        <Link className="button" href="/login">Sign in or create account</Link>
      </section>
    );
  }

  // RLS limits this to businesses the signed-in user belongs to.
  const { data: businesses, error } = await supabase.from("businesses").select("id, name, currency").order("name");

  return (
    <>
      <section className="card">
        <h1>Dashboard</h1>
        <p className="muted">Placeholder only. Customers, cashbook, credit book, quotations, invoices and reports are not built yet.</p>
      </section>
      <section className="card">
        <h2>Your businesses</h2>
        {error ? (
          <p role="alert" className="error">Could not load your businesses. Please refresh and try again.</p>
        ) : businesses && businesses.length > 0 ? (
          <ul>
            {businesses.map((b) => (
              <li key={b.id}>{b.name} <span className="badge">{b.currency}</span></li>
            ))}
          </ul>
        ) : (
          <p className="muted">You have no business yet. Create one below.</p>
        )}
        <BusinessForm />
      </section>
      <form action={signOut}>
        <button type="submit" className="secondary">Sign out</button>
      </form>
    </>
  );
}
