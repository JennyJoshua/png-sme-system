# Claude Handover — Wantok Business Manager

**Recipient:** Claude implementation assistant  
**Prepared by:** ChatGPT  
**Date:** 2026-10-23  
**Status:** OWNER APPROVED — Phase 1 Batch 1 foundation work is authorized

## 1. Owner decision and scope
The owner has approved the Phase 0 planning documents and instructed Claude handover to proceed. Implement **Batch 1 only** for Wantok Business Manager. Do not proceed to Batch 2 until ChatGPT has reviewed Batch 1 and the owner explicitly agrees.

Product: a mobile-first PWA for small PNG businesses. Read `docs/PROJECT_REQUIREMENTS.md` and `docs/DECISIONS.md` as the requirements baseline.

V1 planned modules:
1. Customer records
2. Cashbook (recorded income/expenses, with cash actually received kept distinct)
3. Customer Credit Book (credit sales, payments, balances/statements)
4. Quotations and invoices
5. Dashboard/reports
6. Exportable records

This is an intuition-led product hypothesis. Do not claim market demand has been validated.

## 2. Approved technical direction
- Front end/application: Next.js + TypeScript, mobile-first PWA.
- Hosting target: Render web service, subject to a current free-tier/compatibility check before deployment.
- Database and authentication: Supabase PostgreSQL + Supabase Auth, with Row Level Security (RLS).
- Source control: GitHub.
- Currency: PGK/K by default.
- Offline capability is a later, explicitly tested batch; do not claim it works just because the app is a PWA.

Do not use Render's free PostgreSQL as the permanent production database. Do not create a cloud project, deploy, or rely on a service tier until its current terms/limits and any inactivity, backup, data-retention, and usage restrictions have been checked. No paid plan or paid API is authorized.

## 3. Repository handling
Planning repository: `JennyJoshua/png-sme-system`.

The intended app repository is `JennyJoshua/wantok-business-manager`, separate from the planning repository. First check whether it already exists and report the result. If it does not exist and Claude has permission to create repositories, create it as a separate repository and document the result. If Claude cannot create it, do not silently put application code in the planning repository: return a clean source ZIP and exact GitHub steps for the owner, or ask for the missing permission/destination.

Do not modify or merge into `png-materials-marketplace` or `TenderReady-PNG`. They are separate projects and have not been approved as the app base.

## 4. Batch 1 — foundation only
Deliver only the foundation needed to demonstrate a secure, buildable starting point:
- Next.js + TypeScript app structure with documented, compatible package versions.
- Responsive shell and a minimal, clearly labelled placeholder landing/dashboard; do not implement business modules yet.
- Environment-variable example file with names and safe placeholders only; no secrets.
- Supabase client setup using only values safe for the browser where appropriate; never expose service-role or other privileged keys.
- Initial database schema/migrations for business profile and membership/ownership foundations only, with a documented rationale. Avoid premature complex transaction schemas.
- RLS enabled for every exposed table and least-privilege policies.
- Automated tests that demonstrate allowed access and forbidden cross-business access. If tests need a real Supabase project or credentials, provide a local/mock test where useful and clearly mark any integration test not run; do not fabricate results.
- Authentication/session error handling and a setup guide.
- A CI workflow if it is straightforward and does not require secrets.
- A brief note on backup/recovery and data export requirements still to be completed before real business data is used.

Do not create production data, add real customer information, configure paid resources, deploy publicly, or claim production readiness.

## 5. Financial integrity and security rules
- Business data isolation must be enforced at database level, not only by UI.
- Never trust client-editable user metadata as an authorization source.
- Every exposed business-owned table needs RLS and tests.
- No privileged secrets in browser code, repository files, ZIPs, logs or screenshots.
- Later financial workflows must keep credit sales, invoice totals, cash receipts, expenses and quotation records distinct. For example, a K500 credit sale is not K500 cash received; if K200 is later paid, outstanding debt is K300.
- Use safe monetary precision; do not use floating-point arithmetic for money calculations.
- Do not add offline financial writes in Batch 1.

## 6. Required workflow and stopping gate
1. Inspect the current planning documents and report any contradictions before coding.
2. Check app-repository existence and current Render/Supabase free-tier suitability. Report current source links and relevant limits; do not create cloud projects as part of this check.
3. Implement Batch 1 only.
4. Run the documented install, lint/type-check/build and tests that are available.
5. Review for security and scope errors.
6. Deliver results and STOP. Do not start Batch 2 without review and explicit owner approval.

If Claude cannot access GitHub or create a repository, do not claim that files were committed. Provide a ZIP/source output and report the exact blocker.

## 7. Required delivery report
Return:
1. Summary and whether app repository creation was possible.
2. Exact repository and branch, or exact ZIP filename and contents.
3. Exact files created/changed.
4. Commands actually run and real pass/fail results.
5. Commit SHA only if a real commit exists.
6. RLS policies and how cross-business access was tested.
7. Free-tier review with current official source links and caveats.
8. Known limitations, unresolved decisions, and anything not tested.

Do not say “complete,” “secure,” “deployed,” or “tests passed” unless supported by actual evidence. Stop at the Batch 1 approval gate.
