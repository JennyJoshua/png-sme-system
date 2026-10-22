# Wantok Business Manager — Decisions

**Status:** Draft for owner approval  
**Last updated:** 2026-10-23

This file records decisions so implementers do not invent requirements. Items marked **Proposed** require owner approval or may be revised with an explicit decision.

## D-001 — One combined product
**Status:** Proposed  
Build Wantok Business Manager as one product. Add credit-book and contractor-friendly workflows as modules rather than maintaining three separate applications. One shared customer, transaction and document model should reduce duplicated work.

## D-002 — Mobile-first PWA
**Status:** Proposed  
Use a responsive Progressive Web App before considering a native Android application. This reduces distribution friction and allows one codebase for supported mobile and desktop browsers. Installation and offline behaviour vary by browser and must be tested.

## D-003 — Initial stack
**Status:** Proposed  
Next.js + TypeScript, Supabase PostgreSQL and Supabase Auth, with GitHub source control. This is not final until the owner approves and current free-tier limits, project setup and compatibility are checked.

## D-004 — No paid API dependency
**Status:** Proposed  
Core workflows must function without paid AI or other paid APIs.

## D-005 — Security is database-enforced
**Status:** Required principle  
All business-owned data must be isolated using database-level authorization/RLS, supported by automated access-control tests. Hiding UI elements is not authorization.

## D-006 — Record-keeping, not full accounting
**Status:** Required scope boundary  
V1 provides useful records and summaries but does not claim to replace a qualified accountant, provide tax advice, or produce certified financial statements.

## D-007 — Financial event integrity
**Status:** Required principle  
Sales, credit balances, invoice amounts, cash receipts and expenses are separate concepts. Quotation conversion, payment retries and offline sync must not duplicate financial events.

## D-008 — Exportability
**Status:** Required principle  
Users should be able to export records in a practical portable format. Data portability is part of user trust, not a paid lock-in feature.

## D-009 — Offline capability is incremental
**Status:** Proposed  
Implement offline support only for workflows with clearly defined local storage, sync, retry, idempotency and conflict rules. Do not claim all screens work offline until tested.

## D-010 — No customer interviews as a planning blocker
**Status:** Owner instruction  
Proceed with an intuition-led specification rather than requiring the owner to conduct customer interviews before planning. The product must still be described as an unvalidated hypothesis, not proven demand.

## D-011 — Repository strategy
**Status:** Proposed  
Use JennyJoshua/png-sme-system as the planning/research repository during Phase 0. Before implementation, decide whether to create a dedicated application repository or use another explicitly approved destination. Do not put app code into the research repository by default.

## D-012 — Existing projects must not be duplicated
**Status:** Required review step  
Review the existing png-materials-marketplace and TenderReady-PNG projects for reusable patterns or overlap before implementation. Reuse must be deliberate; do not merge unrelated applications or change either project without approval.

## D-013 — Deployment
**Status:** Deferred  
No production host or domain selected. Compare current free-tier terms, sleep/usage limitations, build requirements, data location and export/backup needs before deployment. Never imply free hosting is permanent.

## D-014 — Currency and localisation
**Status:** Proposed  
Use Papua New Guinea kina (PGK/K) as the default display currency for V1. Store amounts in a consistent decimal-safe representation and define rounding rules. Do not support multi-currency accounting without a separate decision.

## D-015 — Roles
**Status:** Proposed  
Begin with a business owner and a secure membership model that can support future authorised helpers. Do not add broad staff permissions until requirements are approved.

## Decision change process
Any material change to scope, data model, authentication, hosting, permissions, or financial calculations must be recorded here with the reason and impact before implementation proceeds.
