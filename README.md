# PNG SME System — Project Control

This repository contains PNG SME opportunity reports and planning documents for **Wantok Business Manager**.

## Current project decision
Build one mobile-first business management application for small businesses in Papua New Guinea. Initial scope: customer records, cashbook, customer credit tracking, quotations, invoices and business summaries.

This direction is based on practical product judgment and existing opportunity reports. It is **not validated demand**: no customer interviews, paid pilots or user testing have been completed.

## Project documents
- [Project requirements](docs/PROJECT_REQUIREMENTS.md)
- [Architecture and technical decisions](docs/DECISIONS.md)
- [Implementation handover](docs/handoff.md)
- [Change log](docs/CHANGELOG.md)
- [Review and approval checklist](docs/REVIEW.md)

## Existing research
- [PNG SME operations and latent needs](PNG_SME_OPERATIONS_AND_LATENT_NEEDS_RESEARCH.md)
- [Existing solutions and opportunity gap analysis](PNG_SME_EXISTING_SOLUTIONS_AND_OPPORTUNITY_GAP_ANALYSIS.md)
- [Field validation and customer discovery plan](PNG_SME_FIELD_VALIDATION_AND_CUSTOMER_DISCOVERY.md)

The field-validation report is retained as background only. The current instruction is to proceed with an intuition-led product specification rather than block planning on interviews.

## Current status
**Phase 0 — Specification and handover:** documentation prepared for owner review.  
**Phase 1 — Foundation:** not approved and not started.

No application code, database, hosting, or production service is being created by this planning update. Do not begin implementation until the owner explicitly approves the Phase 0 documents and authorizes Phase 1.

## Working rules
1. Keep work suitable for free-tier tools and avoid paid APIs.
2. Do not claim customer demand is proven.
3. Do not add features outside the approved scope without recording a decision.
4. Protect financial data with database-enforced authorization and tests.
5. Preserve exportability and plan backups before real businesses depend on the product.
6. Report actual tests, commits, deployments and limitations; never invent evidence.
