# Batch 1 delivery report (2026-10-23)

**Status:** Ready for ChatGPT review. Stopped at the Batch 1 gate.
**Engine:** Claude Sonnet 5.5 (the handover names no required engine).
**Repository:** `JennyJoshua/wantok-business-manager` returned HTTP 404 from an unauthenticated check (does not exist, or is private). I have no GitHub write access, so nothing was committed and there is no commit SHA. Delivered as a source ZIP; app code was not placed in `png-sme-system`.

## Commands actually run (clean copy, `npm ci`) and results
- `npm run lint`: pass, no findings
- `npm run typecheck`: pass
- `npm test`: 3 files, 26 tests, all pass (17 RLS, 6 env/error, 3 secret-scan)
- `npm run build` (Next.js 16.4.2): compiled successfully
- Mutation check: making the businesses SELECT policy `using (true)` failed 5 RLS tests; disabling RLS on `business_members` failed 4. Restored, 26 pass.
- Bundle scan: no JWT-like tokens or `sb_secret_` keys in `.next`. The string `sb_secret_` appears once in a client chunk as supabase-js's own key-prefix check (library code, not a key).
- `npm audit`: 0 vulnerabilities in production dependencies; 5 high in dev tooling (eslint-config-next -> braces ReDoS chain). The only offered fix is a breaking downgrade; not applied.

## NOT tested / not done
- No live Supabase project: sign-up, sign-in, email confirmation, `create_business` through PostgREST, and the browser UI were not exercised. Requirements 8.2 ("auth and business setup work in the agreed test environment") is therefore NOT verified.
- Stub vs real Supabase differences (see `docs/RLS_AND_SCHEMA.md`).
- No Render deploy; Node version setting on Render untested.
- Not tested in a browser or on a phone; PWA installability unverified; no service worker.
- No accessibility audit beyond semantic labels.

## Contradictions / flags found in the source documents
1. Requirements 8.2 needs a working auth test environment, but Batch 1 forbids creating cloud projects. Needs an owner decision on when a test project is created.
2. The handover names no required engine/model, though the governing rules say each handover must.
3. Supabase docs show different paused-project restore windows (1 year vs 90 days) across page versions; free-plan backup terms not confirmed from official docs.
4. `docs/handoff.md` and `docs/CLAUDE_PHASE1_BATCH1.md` in the planning repo are identical duplicates.
5. Money representation and rounding (D-014) are still undecided; no money code was written.

## Unresolved decisions
See `docs/BACKUP_RECOVERY.md` (7 items) and the `.github` CI step in `docs/SETUP.md`.

## Recommended next action
ChatGPT reviews this evidence; owner decides repo creation, test-project timing, and whether to approve Batch 2.
