# Handover — Wantok Business Manager

**Recipient:** Claude implementation assistant  
**Prepared by:** ChatGPT  
**Date:** 2026-10-23  
**Status:** Phase 0 draft — do not implement until owner approval

## 1. Objective
Prepare for a mobile-first PWA for small PNG businesses. V1 scope: customer records, cashbook, customer credit tracking, quotations, invoices and clear business summaries. Read docs/PROJECT_REQUIREMENTS.md for complete requirements and acceptance criteria.

## 2. Current instruction
This handover is documentation only. The owner asked to begin Phase 0, not coding. Do not create application code, database projects, cloud resources, paid accounts, deployments or migrations yet.

Wait until the owner explicitly approves the Phase 0 documents and authorizes Phase 1.

## 3. Required reading
1. README.md
2. docs/PROJECT_REQUIREMENTS.md
3. docs/DECISIONS.md
4. docs/CHANGELOG.md
5. docs/REVIEW.md
6. Existing opportunity reports at the repository root.

## 4. Existing repository context
Planning repository: JennyJoshua/png-sme-system. It contains three reports about PNG SME operations, existing solutions/opportunity gaps, and a proposed field-validation/customer-discovery plan.

Related repositories identified:
- JennyJoshua/png-materials-marketplace — an existing Next.js/TypeScript/Supabase/Prisma-style web application for a PNG building-materials marketplace. Do not assume its code is reusable without reviewing architecture, schema, auth and tests.
- JennyJoshua/TenderReady-PNG — an existing Android-oriented TenderReady project. It may contain reusable document/workflow ideas, but it is not the same product and must not be modified as part of this handover.

Do not assume the owner has approved a new application repository name or destination. Propose a dedicated repository named wantok-business-manager for approval before implementation, unless the owner chooses otherwise.

## 5. Non-negotiable requirements
- No paid API dependency for core functionality.
- Do not claim demand has been validated.
- No cross-business data access.
- RLS and authorization tests for every exposed business-owned table.
- Do not trust client-supplied role metadata for permissions.
- Do not expose privileged keys.
- Keep credit sales, cash receipts, expenses, quotations and invoices conceptually separate.
- Protect against duplicate payment submissions and offline-sync retries.
- Preserve exportability.
- Document backup and recovery before real businesses rely on the service.
- Do not claim deployment, tests or commits that have not actually happened.

## 6. Proposed implementation batches after approval

### Batch 1 — Foundation only
- Create the approved app repository or work in the approved destination.
- Set up the Next.js/TypeScript app with documented package versions.
- Configure environment variable examples without secrets.
- Define schema/migrations and business membership.
- Configure Supabase Auth and RLS.
- Add tests for authorization and basic setup.
- Provide exact files changed, commands run, actual test output, commit SHA or ZIP contents, and unresolved issues.

Do not start Batch 2 until ChatGPT reviews Batch 1 and the owner agrees to proceed.

### Batch 2 — Customer records and cashbook
Implement only after Batch 1 is accepted. Include calculations and tests.

### Batch 3 — Credit Book
Implement payment allocation, balance calculations and duplicate-payment protection with tests.

### Batch 4 — Quotations and invoices
Implement totals, status transitions, safe conversion and payment tracking.

### Batch 5 — Dashboard, export and reports
Verify each displayed metric against known test data.

### Batch 6 — Offline capability
Only after online flows are correct. Define queue format, idempotency, conflict rules, sign-out behaviour and recovery tests before implementation.

## 7. Required delivery format
Return:
1. Short summary.
2. Exact files created/changed.
3. Tests and commands actually run, with pass/fail counts.
4. Commit SHA if a real commit exists; otherwise say no commit was made.
5. Known limitations and decisions needed.
6. A ZIP when using the owner's ZIP workflow; include source and required files, exclude .env, secrets, node_modules, build caches and unrelated files.

Do not say “complete” if any acceptance criterion is unmet. Stop at approval gates and ask before making scope-changing decisions.
