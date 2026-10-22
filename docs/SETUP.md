# Setup guide

## 1. Local checks (no cloud account needed)
```
npm install
npm run lint && npm run typecheck && npm test && npm run build
```
The RLS tests run the real migration on an in-process PostgreSQL (PGlite). They need no credentials.

## 2. Connect your own Supabase project (later, owner action)
Not done in Batch 1. Before creating a project, read `docs/FREE_TIER_REVIEW.md` and `docs/BACKUP_RECOVERY.md`.
1. Create a Supabase project (Free plan) in your own account.
2. Apply `supabase/migrations/20261023000001_business_foundation.sql` (SQL Editor, or the Supabase CLI `supabase db push`). Re-running on an existing database will fail because tables already exist; migrations are applied once, in filename order.
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (browser-safe key only).
4. Never put a service-role/secret key in this app, in `.env.local`, in Render settings for the web app, or in the repo.
5. `npm run dev`, open the app, create an account, create a business.

Email confirmation behaviour depends on your Supabase Auth settings. Without a custom SMTP provider Supabase limits auth emails; check current Auth docs before relying on email sign-up.

## 3. CI (manual step)
`docs/ci.yml` is a ready workflow (lint, typecheck, test, build; no secrets). Copy it to `.github/workflows/ci.yml` in the repository yourself.

## Error and session behaviour
- Missing/placeholder env values: the home page shows a "Setup needed" card; nothing crashes.
- Sign-in errors are mapped to short plain messages (`lib/auth/errors.ts`); raw provider text is never shown.
- `proxy.ts` refreshes the session cookie using `auth.getUser()` (validated against the Auth server). It makes no authorization decisions; the database does.
- Expired session on a server action returns "Your session has ended. Please sign in again."
- Network failure on sign-in shows "No internet connection".
