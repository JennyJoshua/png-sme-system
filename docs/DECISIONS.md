# Wantok Business Manager — Decisions

**Status:** Owner approved for Phase 1 foundation work  
**Last updated:** 2026-10-23

This file records decisions so implementers do not invent requirements. Any material change to scope, data model, authentication, hosting, permissions, or financial calculations must be recorded here with its reason and impact.

## D-001 — One combined product
**Status:** Approved  
Build Wantok Business Manager as one product. Include customer records, cashbook, customer credit tracking, quotations/invoices, dashboard/reports and export. Do not maintain three separate apps for these overlapping workflows.

## D-002 — Mobile-first PWA
**Status:** Approved  
Use a responsive Progressive Web App before considering a native Android application. Installation and offline behaviour vary by browser and must be tested. PWA does not automatically mean that financial workflows work offline.

## D-003 — Application stack
**Status:** Approved in principle  
Use Next.js + TypeScript for the app, Supabase PostgreSQL and Supabase Auth for data/authentication, and GitHub for source control. Confirm compatible versions and current service limits before relying on cloud services. No paid API dependency for core functionality.

## D-004 — No paid API dependency
**Status:** Approved  
Core workflows must function without paid AI or other paid APIs. No paid service or plan is authorized without explicit owner approval.

## D-005 — Security is database-enforced
**Status:** Required  
All business-owned data must be isolated using database-level authorization/RLS, supported by automated access-control tests. Hiding UI elements is not authorization.

## D-006 — Record-keeping, not full accounting
**Status:** Approved scope boundary  
V1 provides useful records and summaries but does not claim to replace a qualified accountant, provide tax advice, or produce certified financial statements.

## D-007 — Financial event integrity
**Status:** Required  
Sales, credit balances, invoice amounts, cash receipts and expenses are separate concepts. Quotation conversion, payment retries and offline sync must not duplicate financial events.

## D-008 — Exportability
**Status:** Required  
Users should be able to export records in a practical portable format. Data portability is part of user trust, not a paid lock-in feature.

## D-009 — Offline capability is incremental
**Status:** Approved  
Implement offline support only for workflows with clearly defined local storage, sync, retry, idempotency and conflict rules. Do not claim all screens work offline until tested. Batch 1 does not include offline financial writes.

## D-010 — No customer interviews as a planning blocker
**Status:** Owner instruction  
Proceed with an intuition-led specification rather than requiring the owner to conduct customer interviews before planning. The product must still be described as an unvalidated hypothesis, not proven demand.

## D-011 — Repository strategy
**Status:** Approved direction; execution depends on access  
Keep `JennyJoshua/png-sme-system` as the planning/research repository. Use a separate app repository named `JennyJoshua/wantok-business-manager`. Check whether it exists first. If the implementer cannot create/access it, do not place app code in the planning repo by default; report the blocker and provide a clean source ZIP or exact next steps.

## D-012 — Existing projects and overlap
**Status:** Review started; no reuse/merge approved

### png-materials-marketplace
The existing Next.js/TypeScript/Supabase/Prisma PWA project is a marketplace for buyers and providers. Its README says quotations, orders and bookings are planned but not yet implemented. It may provide useful technical patterns, but its marketplace is a different product and its implementation status has known outstanding verification work. Do not merge Wantok Business Manager into it or assume its code is production-ready without a separate technical review.

### TenderReady-PNG
The existing offline-first native Android project already includes a business profile, capability statement, quotation builder, PDF export and tender/readiness checklists. It overlaps with document creation, especially quotations, but it is not a cashbook/credit-book system. It may remain a separate focused app. Do not duplicate its quotation feature blindly; decide later whether to reuse a specification, data rules or design ideas, not necessarily its Android code.

### Resulting recommendation
Keep Wantok Business Manager separate and focused on recurring business records and money tracking. Do not modify either existing project as part of this implementation without explicit approval.

## D-013 — Hosting and database
**Status:** Approved direction; free-tier verification required  
Target **Render for the Next.js web service** and **Supabase for PostgreSQL + Auth + RLS**. Do not use Render's free PostgreSQL as the permanent production database because its free database is time-limited. Before creating or relying on services, check current official free-tier terms, sleep/inactivity behaviour, usage limits, build/runtime compatibility, backups/recovery, data retention, and what happens if a quota is exceeded. Free tiers can change and do not guarantee permanent zero cost. Do not deploy publicly or create cloud projects in Batch 1.

## D-014 — Currency and localisation
**Status:** Approved  
Use Papua New Guinea kina (PGK/K) as the default display currency for V1. Store amounts in a consistent decimal-safe representation and define rounding rules. Do not support multi-currency accounting without a separate decision.

## D-015 — Roles
**Status:** Approved foundation  
Begin with a business owner and a secure membership model that can support future authorised helpers. Do not add broad staff permissions until requirements are approved.

## Decision change process
Any material change to scope, data model, authentication, hosting, permissions, or financial calculations must be recorded here with the reason and impact before implementation proceeds.
