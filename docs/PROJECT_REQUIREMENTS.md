# Wantok Business Manager — Project Requirements

**Status:** Owner approved for staged implementation  
**Phase:** 1 — Foundation (Batch 1 authorized)  
**Product owner:** Jenny Joshua  
**Market focus:** Papua New Guinea  
**Decision basis:** Product intuition informed by existing PNG SME opportunity reports. Demand and willingness to pay remain unvalidated.

## 1. Product vision
Wantok Business Manager is a simple, affordable, mobile-first business management application that helps small PNG businesses organise customer records, money received and spent, customer credit, quotations, invoices and basic business summaries. It should work well on a phone and be designed for unreliable internet access.

## 2. Intended users
- Small shops and trade stores.
- Contractors and tradespeople.
- Transport operators.
- Other small owner-operated businesses that need basic transaction and customer records.

These are target hypotheses, not confirmed customer segments. Version 1 must not assume every group has identical workflows.

## 3. Problems to address
Help an owner answer:
1. How much income and expense have I recorded for a selected period?
2. How much money have I actually received?
3. Which customers owe the business money?
4. Which invoices remain unpaid?
5. What transactions explain the figures shown on the dashboard?

This is a record-keeping aid, not a certified accounting, tax, lending or financial-advice product.

## 4. Version 1 scope

### 4.1 Business and account foundation
- Register and sign in using the selected authentication provider.
- Create and edit a business profile.
- Associate each record with a business.
- Establish a secure business-membership model, even if V1 initially supports one owner per business.
- Support account recovery through the provider's supported mechanisms.

### 4.2 Customer records
- Create, view, edit and archive customer records.
- Store necessary details such as customer/business name, phone, optional email and notes.
- Show relevant transactions, credit balance and invoices for a customer.
- Validate input and prevent accidental duplicate submissions where practical.

### 4.3 Cashbook
- Record income and expense entries with date, amount, category, description and optional reference.
- Show transaction history and date-filtered summaries.
- Calculate totals with one documented currency precision rule.
- Support corrections through a traceable edit/void approach rather than silently losing financial history.
- Clearly distinguish cash received from sales recorded on credit.

### 4.4 Customer credit book
- Record a credit sale against a customer.
- Record one or more payments against that sale.
- Calculate outstanding balance from the original amount and valid recorded payments.
- Show customer balance and transaction statement.
- Reject negative amounts and payments that exceed the balance unless an approved refund/overpayment workflow is added.
- Prevent a payment from being counted more than once.

### 4.5 Quotations and invoices
- Create a quotation with customer, issue date, optional expiry date, line descriptions, quantities, unit prices and calculated totals.
- Track quotation status: draft, sent, accepted, rejected or expired.
- Convert an accepted quotation into an invoice without duplicating the underlying sale or allowing repeated conversion.
- Track invoice status and payment records.
- Show outstanding balance based on invoice amount less valid payments.
- Print or download a readable document without requiring a paid API.

### 4.6 Dashboard and reports
Show, with clear labels and date ranges:
- Recorded sales/income for the period.
- Actual cash received.
- Recorded expenses.
- Cashbook net movement or balance, with its calculation explained.
- Outstanding customer credit.
- Outstanding invoices.
- Monthly income/expense summaries.

Do not label simple income-minus-expense calculations as audited profit. Credit sales, invoice status, cash receipts and cashbook movements must remain conceptually separate.

### 4.7 Export
- Allow the owner to export records in a portable format such as CSV.
- Provide printable statements and business documents.
- Let a business retain its data without remaining subscribed to the service.

## 5. Non-functional requirements

### Mobile usability
- Mobile-first layout and touch-friendly controls.
- Readable on small Android screens.
- Minimise unnecessary data use and heavy assets.
- Use clear language, useful empty states and understandable error messages.

### Reliability and offline use
- Remain usable for explicitly supported tasks during temporary connection loss.
- Store offline writes locally as pending and synchronise when connectivity returns.
- Use unique operation IDs or equivalent idempotency protection to prevent duplicate transactions during retries.
- Show pending, synchronised and failed states.
- Define conflict behaviour; do not silently overwrite financial records.
- Scope local data to the signed-in user/business, protect it on shared devices, and handle it appropriately at sign-out.
- Do not promise full offline capability until implementation and recovery tests pass. Offline financial writes are not part of Batch 1.

### Security and privacy
- Enforce business isolation at database level, not only in the UI.
- Enable Row Level Security on all exposed tables.
- Use least-privilege policies and test permitted and forbidden access.
- Derive permissions from trusted database records, not user-editable metadata.
- Never expose privileged database/service keys in client code.
- Validate inputs at the server/database boundary.
- Avoid collecting unnecessary personal data.
- Document backup, recovery, account deletion and data-export behaviour before production use.

### Accessibility and maintainability
- Semantic forms and labels, visible focus, adequate contrast and useful validation messages.
- TypeScript and consistent code organisation.
- Automated tests for financial calculations, authorization and core flows.
- Document environment variables without committing secrets.

### Cost and hosting
- Target Render for the Next.js web service and Supabase for PostgreSQL, authentication and RLS.
- Do not use Render's free PostgreSQL as the permanent production database.
- Verify current official service limits and terms, inactivity/sleep behaviour, data retention, backup/recovery options and build/runtime compatibility before cloud setup or deployment.
- Prefer free-tier services and open-source tooling. Free tiers can change and do not guarantee permanent zero cost.
- No paid API or plan is authorized without explicit owner approval.

## 6. Explicitly out of scope for Version 1
- Full inventory, purchasing and warehouse management.
- Payroll and employee rostering.
- Full double-entry accounting or certified financial statements.
- Automated tax determination or tax filing.
- Lending, credit scoring, loan approval or credit guarantees.
- Bank integrations or payment gateway integration.
- Marketplace, supplier directory or freight booking.
- Multi-currency accounting unless separately approved.
- AI features dependent on paid APIs.
- Advanced team permissions beyond the minimum secure business-membership foundation.

## 7. Core data concepts
The implementation must distinguish business/user membership, customers, financial transactions, credit sales and payment allocations, quotations, invoices and invoice payments, correction history where needed, and offline sync operations if offline writes are enabled.

Do not duplicate the same economic event as multiple income entries. Converting a quotation to an invoice must not create cash received, and recording a credit sale must not increase cash on hand until payment is received.

## 8. Acceptance criteria for Phase 1 foundation
1. The app builds using documented commands.
2. Authentication and business setup work in the agreed test environment.
3. Database migrations are repeatable and documented.
4. Every business-owned table has an appropriate RLS policy.
5. Automated tests demonstrate that an account cannot read or modify another business's records.
6. Secrets are absent from committed code and browser bundles.
7. Error states and account/session behaviour are documented.
8. The reviewer reports actual test results and limitations.
9. No production deployment is described as complete unless verified.

## 9. Release principles
- Start with a controlled test release, not an unsupported claim of production readiness.
- Test calculations with explicit examples and edge cases.
- Keep a backup/export path available.
- Do not use real customer financial records until access controls, backup/recovery and data handling have been reviewed.
- Do not claim market validation, legal compliance, accounting certification or guaranteed profitability.

## 10. Provisional success measures
Engineering measures:
- All agreed critical tests pass.
- No known cross-business data-access defect.
- Financial calculations match documented test cases.
- Exported records are readable and complete.
- Offline sync tests do not silently lose or duplicate transactions.

Future product evaluation ideas:
- Can a first-time user record a transaction without assistance?
- Can the owner identify a customer balance and explain its calculation?
- Can the owner export records?
- Do actual users return to use it, and are any willing to pay for additional value?

These are future evaluation ideas, not results already obtained.
