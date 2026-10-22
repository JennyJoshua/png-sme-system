# Wantok Business Manager — Review and Approval

**Status:** Phase 0 approved; Phase 1 Batch 1 authorized  
**Current phase:** Phase 1 — Foundation (Batch 1 only)

## Owner decision recorded
On 2026-10-23, the owner approved the Phase 0 planning documents and instructed that the Claude handover proceed.

## Approved product and technical direction
- [x] Combined product: Wantok Business Manager.
- [x] Intuition-led target hypotheses; market demand is not claimed as validated.
- [x] V1 scope: customer records, cashbook, credit book, quotations/invoices, dashboard/reports and export.
- [x] Explicit V1 exclusions and financial-integrity rules.
- [x] Mobile-first PWA.
- [x] Next.js + TypeScript with Supabase PostgreSQL/Auth/RLS.
- [x] PGK/K as default currency.
- [x] Staged offline approach; sync must be explicitly implemented and tested.
- [x] Security baseline: RLS, business isolation, least privilege and no secrets in client code.
- [x] Render web service + Supabase database/auth as the target hosting architecture, subject to current free-tier verification before cloud setup/deployment.
- [x] Separate app repository direction: JennyJoshua/wantok-business-manager; planning stays in JennyJoshua/png-sme-system.

## Current authorization
- [x] Phase 1 Batch 1 foundation work is authorized.
- [ ] Batch 1 has been implemented and reviewed.
- [ ] Owner approval to start Batch 2.

## Conditions and restrictions
- Check whether the app repository exists and report access/creation limits.
- Do not create cloud projects, deploy publicly, add paid services, or use real customer financial data in Batch 1.
- Check current official free-tier terms before relying on Render/Supabase.
- Do not modify or merge png-materials-marketplace or TenderReady-PNG.
- ChatGPT reviews Batch 1 before the owner decides whether Batch 2 can start.

## Reviewer notes
- Product/scope changes:
- Technical changes:
- Repository destination:
- Other concerns:
