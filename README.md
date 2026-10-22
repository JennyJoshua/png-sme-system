# Wantok Business Manager

Mobile-first PWA for small businesses in Papua New Guinea (customers, cashbook, credit book, quotations/invoices, reports, export).

**Status: Phase 1, Batch 1 (foundation only).** This is an unvalidated product hypothesis, not proven demand. It is a test build: do not enter real business or customer financial records. Not production ready.

Planning and decisions live in the separate repository `JennyJoshua/png-sme-system`.

## What exists in Batch 1
- Next.js + TypeScript app shell, placeholder dashboard, sign-in/sign-up page, installable-app manifest (no service worker, no offline support)
- Supabase migration for `businesses` and `business_members` with RLS (see `docs/RLS_AND_SCHEMA.md`)
- Automated tests: RLS allowed/forbidden access on a real local PostgreSQL, env/auth-error unit tests, secret scan
- Docs: `docs/SETUP.md`, `docs/FREE_TIER_REVIEW.md`, `docs/BACKUP_RECOVERY.md`, `docs/BATCH1_REPORT.md`

## Commands
```
npm install
npm run lint
npm run typecheck
npm test
npm run build
npm run dev
```
Requires Node >= 22.12. See `docs/SETUP.md` for connecting your own Supabase project.

## Not built yet (needs ChatGPT review + explicit owner approval for Batch 2)
Customer records, cashbook, credit book, quotations/invoices, dashboard reports, export, offline sync.
