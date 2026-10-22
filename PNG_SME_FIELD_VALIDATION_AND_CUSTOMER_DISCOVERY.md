# PNG SME Field Validation and Customer Discovery

**Stage:** 3 — Field Validation Planning  
**Date:** 23 October 2026  
**Prepared for:** Research owner / field researcher in PNG  
**Status:** Planning document. No interviews, artefact reviews or paid pilots have yet been conducted. No product decision is recommended.  
**Repository:** https://github.com/JennyJoshua/png-sme-system  
**New file to add:** `PNG_SME_FIELD_VALIDATION_AND_CUSTOMER_DISCOVERY.md`  
**GitHub write access:** Not available in this research environment; no commit was made. The full Markdown below can be copied into the repository without altering the two earlier reports.

---

## 1. Executive Summary

This report converts the first two research stages into a practical, low-cost field-validation programme. Its purpose is to determine whether customer credit, quotation/job management, or bookkeeping/loan-readiness problems are frequent, financially meaningful, poorly solved, and worth paying to fix.

The strongest national evidence supports starting with **customer credit and receivables** and **bookkeeping/loan readiness**, while treating **quotation and job management** as a parallel but smaller test among contractors, tradespeople and mechanics.

Key evidence from the 2024 PNG MSME and Informal Sector Study:

- **Cash flow and access to finance are central constraints.** The study identifies cash-flow issues and access to formal financing as major financial obstacles; finance is often used to sustain operations rather than grow. [page:4]
- **Credit difficulty is worse outside urban centres.** Access to loans and credit is described as a major challenge, particularly for businesses operating outside urban centres; some MSMEs struggle to meet funding requirements. [page:4]
- **The sector is micro-dominated.** Micro-businesses make up 67% of the MSME marketplace, implying limited administrative capacity and high owner dependence. [page:4]
- **Digital demand exists but access is uneven.** 58% of MSMEs do not use but would like to use a website or social-media page; 33% do not use the internet but would like to; 33% want mobile banking or electronic money transfers. [page:4]
- **Geographic inequality is material.** Access to business infrastructure and financial services is most limited in rural and remote communities. [page:4]
- **Women face additional barriers.** More than 80% of surveyed women said they face additional challenges because of their gender, including perceived marginalisation from financial assistance and business services. [page:4]

**Recommended first focus:** a paid, manual **credit-book clean-up and weekly receivables summary** for trade stores, transport operators and small service businesses. This can be tested without an app, uses low-cost tools, and directly tests whether owners will pay to reduce a recurring cash-flow problem.

**Do not build software yet.** A manual service must first show repeat payment, repeat use and referral before any digital product is considered.

---

## 2. Research Objectives

The field study must answer seven questions:

1. Which operational problems occur repeatedly, not just occasionally?
2. Which business categories experience each problem most intensely?
3. How do owners currently manage the problem?
4. What does the problem cost in money, time, lost sales or stress?
5. What existing tools, people or services already address it?
6. Will owners pay for a practical, low-cost service?
7. Which customer group and location should be used for the first pilot?

The study is **exploratory**, not statistically representative. Its purpose is to identify a viable customer segment and problem, not to estimate national market size.

---

## 3. Findings from Existing PNG Evidence

### 3.1 National evidence relevant to the three opportunities

| Topic | Finding from 2024 PNG MSME and Informal Sector Study | Relevance | Evidence label |
|---|---|---|---|
| Cash flow | Cash-flow issues are identified as a major financial obstacle; finance is commonly used to sustain operations rather than scale. [page:4] | Supports testing credit/receivables and bookkeeping | DOCUMENTED |
| Access to finance | Access to loans and credit is a major challenge, especially outside urban centres; some businesses struggle to meet funding requirements. [page:4] | Supports loan-readiness testing, but does not prove records are the binding constraint | DOCUMENTED |
| Business scale | Micro-businesses are 67% of the MSME marketplace. [page:4] | Supports simple, low-cost, human-assisted services | DOCUMENTED |
| Digital demand | 58% want a website/social-media page; 33% want internet; 33% want mobile banking/electronic transfers. [page:4] | Supports mobile-friendly, low-data service delivery, but not automatic app demand | DOCUMENTED |
| Rural access | Business infrastructure and financial services are most limited in rural/remote communities. [page:4] | Supports starting where density and repeat access are feasible, then designing for expansion | DOCUMENTED |
| Women in business | Over 80% of women surveyed report gender-related additional challenges; perceived marginalisation from finance and business services is reported. [page:4] | Include women-owned businesses deliberately in the sample | DOCUMENTED |
| Transport | Limited transport options hamper interprovincial trade; compliance, transport and customs expenses reduce export revenue. [page:4] | Supports later testing of freight coordination, but not as the first pilot | DOCUMENTED |
| Formalisation | The study includes detailed tables on formalisation barriers and intent. [page:4] | Useful context for loan-readiness work; does not by itself prove demand for registration help | DOCUMENTED |

### 3.2 What the evidence does **not** establish

- It does **not** quantify customer-credit defaults, overdue balances or collection time.
- It does **not** show that poor bookkeeping is the main reason loans are declined.
- It does **not** measure quotation errors, lost tenders or unprofitable jobs.
- It does **not** prove that owners will pay for any new service.
- It does **not** establish that a mobile app is preferred over a human-delivered service.

These remain **FIELD VALIDATION REQUIRED**.

---

## 4. Remaining Knowledge Gaps

| Uncertainty | Why it matters | How to test |
|---|---|---|
| Frequency and value of credit defaults | Determines whether receivables management is a serious problem | Credit-book review and recent-incident interviews |
| Whether owners track partial payments | Determines service design | Ask owner to reconstruct a recent partial payment |
| Main cause of loan difficulty | Avoids blaming records when collateral, price or risk appetite is the real barrier | Interview owners and, later, lenders |
| Quotation frequency and error cost | Determines whether quote support has enough volume | Review last 3 quotes and job outcomes |
| Whether job profitability is known | Tests need for job-costing support | Ask owner to reconstruct last completed job |
| Current spending on help | Tests whether owners already pay for solutions | Ask about accountants, staff, relatives, consultants |
| Trust and data privacy | Determines whether owners will share records | Test with a small, consent-based artefact review |
| Location feasibility | Determines pilot cost and repeat access | Compare Port Moresby, Lae and one smaller town |

---

## 5. Comparison of Business Categories

| Category | Customer credit frequency | Quotes/job records importance | Financial-record likely practice | Main pain-point hypothesis | Ability to pay | Interview access | Pilot suitability | Evidence status |
|---|---|---|---|---|---|---|---|---|
| Trade stores / small retailers | Likely high | Low–medium | Notebook, memory, cash box | Credit leakage, stock and cash control | Low–medium | High | **High** | HYPOTHESIS for credit; cash reliance documented [page:4] |
| Hardware / building materials | Medium–high | High | Invoices, supplier accounts, some records | Quotes, contractor credit, delivery | Medium | Medium–high | Medium–high | HYPOTHESIS |
| Contractors / tradespeople | Medium | Very high | Quotes, receipts, memory | Costing, job profitability, payment follow-up | Medium | Medium | **High** | HYPOTHESIS |
| Mechanics / repair workshops | Medium | High | Job cards, parts records | Estimates, parts, warranties | Low–medium | Medium | Medium | HYPOTHESIS |
| Transport / delivery operators | Medium–high | Medium | Trip sheets, fuel records | Trip profitability, collections, maintenance | Medium | Medium | **High** | HYPOTHESIS; transport constraints documented [page:4] |
| Wholesalers / distributors | High | Medium | Ledgers, invoices, sales reps | Receivables, route delivery, stock | Medium–high | Medium | Medium | HYPOTHESIS |
| Market vendors / informal traders | Low–medium | Low | Cash, memory | Perishability, transport, daily cash | Low | High | Medium | HYPOTHESIS; informal sector documented [page:4] |
| Food / hospitality | Low–medium | Low–medium | Daily cash, supplier accounts | Ingredients, waste, staff, daily sales | Low–medium | High | Medium | HYPOTHESIS |
| Agricultural producers / traders | Medium | Low–medium | Buyer records, cash | Buyer access, transport, spoilage, payment | Low–medium | Medium | Medium | HYPOTHESIS; transport constraints documented [page:4] |
| Professional / service firms | Medium | High | Invoices, appointments | Receivables, scheduling, client records | Medium–high | Medium | Medium | HYPOTHESIS |

### 5.1 Priority categories

1. **Trade stores / small retailers** — best for testing credit and cash-flow problems.
2. **Transport operators** — strong for credit, trip costs and collections.
3. **Contractors / tradespeople** — best for testing quotation and job-management support.

Hardware suppliers, mechanics and small wholesalers should be included in a second wave.

---

## 6. Recommended Interview Sample

### Phase 1: Initial discovery — 12 interviews

| # | Business type | Formal/informal | Owner gender target | Location | Primary test |
|---|---|---|---|---|---|
| 1 | Trade store | Either | Female preferred | Accessible urban or peri-urban area | Credit, cash, stock |
| 2 | Trade store | Either | Male | Same area | Credit, supplier purchasing |
| 3 | Trade store | Informal | Female | Market or settlement area | Cash, informal credit |
| 4 | Transport owner-operator | Either | Male or female | Urban/provincial town | Trip costs, collections |
| 5 | Transport owner-operator | Either | Male or female | Same area | Bookings, fuel, maintenance |
| 6 | Contractor / builder | Either | Male | Urban area | Quotes, job costs |
| 7 | Tradesperson | Informal | Male or female | Urban or peri-urban | Quotes, materials, payment |
| 8 | Mechanic / repair workshop | Either | Male | Urban or provincial town | Job cards, parts, estimates |
| 9 | Hardware retailer | Formal | Either | Urban area | Contractor credit, quotes |
| 10 | Small wholesaler | Formal | Either | Urban area | Receivables, delivery |
| 11 | Food business / small restaurant | Either | Female preferred | Urban area | Daily sales, expenses, staff |
| 12 | Agricultural trader or producer | Either | Either | Accessible rural/provincial area | Buyer payment, transport |

**Why 12?** Twelve interviews across at least six categories are enough to identify repeated patterns, compare formal/informal practices, and select one problem for a paid pilot. They are **not** enough to claim national representativeness.

### 6.1 Sampling safeguards

- Do not interview only friends, relatives or technology enthusiasts.
- Recruit through at least three different channels: direct premises visits, one business association/chamber, and referrals.
- Ask each interviewee for one referral to a **different type** of business, not a similar one.
- Include at least four women-owned or women-managed businesses.
- Include at least three informal businesses.
- Exclude businesses where the researcher has a financial or family interest.
- Record refusals and reasons; do not replace refusals only with enthusiastic volunteers.

---

## 7. Recruitment and Consent Plan

### 7.1 Recruitment channels

| Channel | How to use | Caution |
|---|---|---|
| Direct premises visits | Visit during quiet trading hours; introduce yourself clearly | Do not interrupt peak sales periods |
| Business associations / chambers | Request permission to share a short participant information note | Do not assume endorsement or cooperation |
| Market and trade-store networks | Approach stallholders or store owners through a known local contact | Avoid pressuring informal traders |
| Referrals | Ask each participant for one relevant referral | Avoid referral bubbles |
| Phone / WhatsApp | Use for scheduling and follow-up, not as the first trust-building contact where possible | Confirm identity and consent clearly |
| SME support organisations | Use only to identify public programmes or general referral pathways | Do not imply government endorsement |

### 7.2 Introduction script

> “Hello, my name is [name]. I am conducting independent research with small businesses in PNG to understand everyday business challenges. I am not from the government, a bank, a tax office, or a utility company. I am not selling anything today. I would like to ask about how your business handled a recent problem, such as customer credit, quotations, or record-keeping. The interview takes about 30–45 minutes. Participation is voluntary, you can stop at any time, and I will not share your name or business details without your permission. Would you be willing to speak with me?”

### 7.3 Consent rules

- Obtain verbal consent before starting.
- Explain purpose, voluntary participation, confidentiality and the right to stop.
- Ask separate permission before photographing, copying or reviewing any business record.
- Do not collect customer names, phone numbers, bank details, ID numbers or full financial statements unless essential and explicitly consented.
- Anonymise notes immediately: use codes such as `TS01`, `TR02`, `CT03`.
- Store notes securely; delete identifiable details that are not needed.
- Do not promise loans, tax advice, debt collection, government support or business registration outcomes.

### 7.4 Language

- Conduct interviews in Tok Pisin, Hiri Motu, English or another appropriate local language, according to owner preference.
- Use simple, concrete questions about recent events.
- Avoid technical terms such as “receivables”, “working capital” or “cash-flow statement” unless the owner uses them first.

---

## 8. Interview Guide: Credit and Receivables

**Use for:** trade stores, retailers, wholesalers, transport operators, hardware suppliers, service businesses.

1. Tell me about your business’s sales yesterday. How did you record them?
2. When a customer wants to buy now and pay later, what do you usually do?
3. Tell me about the last customer who bought on credit. What happened?
4. How do you remember who owes you money?
5. Tell me about the last time a customer paid only part of what they owed. What did you do?
6. How do you know when someone is overdue?
7. Tell me about the last customer who failed to pay on time. What happened?
8. How much time did you spend following up that customer?
9. Did that problem cost you money, stock, time or a future sale? How?
10. Do you ever refuse credit now because of past problems? Why?
11. Have you ever had a dispute about how much a customer owed? What happened?
12. Who helps you manage credit or collect payments?
13. Have you used a notebook, phone, WhatsApp, bank service, or anyone paid to help with this?
14. What have you tried that did not work?
15. If someone could help you keep track of who owes what, what would need to happen for you to trust them?

**Do not ask:** “Would you use an app to track credit?” or “Would you pay for an app?”

---

## 9. Interview Guide: Quotations and Job Management

**Use for:** contractors, tradespeople, mechanics, hardware suppliers, maintenance businesses.

1. Tell me about the last job you quoted for. How did you prepare the price?
2. How did you work out the cost of materials?
3. How did you work out labour or your own time?
4. How long did the quotation take to prepare?
5. Did the customer accept, negotiate, or change the job after you quoted?
6. Tell me about the last time a job cost more than you expected. What happened?
7. How do you record materials bought for a job?
8. How do you know whether the last job you completed made a profit?
9. Tell me about the last invoice you issued. How did you track whether it was paid?
10. What happens when a customer delays payment after a job is finished?
11. How do you keep track of jobs you are working on now?
12. Who helps you prepare quotes, buy materials or follow up payments?
13. Have you used paper, a calculator, WhatsApp, Excel, or someone paid to help?
14. What is the most difficult part of quoting or managing a job?
15. If someone helped you prepare quotes or track job costs, what would need to be true for you to trust them?

**Do not ask:** “Would you pay for a quoting app?”

---

## 10. Interview Guide: Bookkeeping and Loan Readiness

**Use for:** any business, especially those seeking finance or formalisation.

1. Tell me how you recorded business money last week.
2. How do you separate business money from household money?
3. How do you know how much profit the business made last month?
4. Tell me about the last time you needed money for the business. What did you do?
5. Did you apply for a loan or ask a lender for credit? What happened?
6. What documents or information did the lender ask for?
7. Which of those were difficult to provide? Why?
8. Tell me about the last time you tried to organise your business records. What happened?
9. Do you use a notebook, mobile money record, bank statement, spreadsheet, or someone else’s help?
10. Have you paid an accountant, bookkeeper, consultant or staff member to help with records?
11. What did that person do, and was it worth it?
12. What records would you need to feel confident applying for finance?
13. If someone helped organise your sales, expenses and debts, what would concern you?
14. What would make the help worthwhile?
15. What would make you stop using the help after one month?

**Do not assume** that better records will produce loan approval. The interview must distinguish documentation gaps from collateral, affordability, credit history, lender risk appetite and process barriers.

---

## 11. Business-Artefact Review Protocol

### 11.1 Artefacts to request, with permission

| Artefact | What to observe | What not to record |
|---|---|---|
| Credit book / debt list | Structure, updating frequency, partial payments, aging, disputes | Customer names, phone numbers, exact balances unless aggregated |
| Receipts / invoices | Whether issued, numbered, filed, reconciled | Customer personal details |
| Quotations | Format, costing method, time indicators, follow-up | Client identity |
| Job cards | Labour/material recording, completion, payment status | Employee personal data |
| Sales/expense records | Consistency, completeness, separation from household money | Bank account numbers |
| Loan documents/checklists | Document types requested, gaps, process steps | Full loan agreements or ID documents |

### 11.2 Recording method

- Ask: “May I look at how you record this? I do not need to copy customer details.”
- Record structure and process, not confidential values.
- Use a standard observation form: artefact type, maintained by whom, update frequency, missing fields, errors observed, workarounds, owner’s own assessment.
- If photographing is necessary, obtain explicit permission, obscure names/numbers, and delete images after transferring key observations to anonymised notes.
- Never retain customer lists, ID documents, bank details or full financial statements.

---

## 12. Customer-Validation Scorecard

Score each problem **per business category**, not as a vague national average.

### 12.1 Scoring scale

| Score | Meaning | Evidence required |
|---|---|---|
| 0 | No evidence | Assumption only |
| 1 | Weak / single anecdote | One owner mention, no consequence demonstrated |
| 2 | Repeated anecdote | Two or more independent owners describe it |
| 3 | Documented operational impact | Owner shows records, lost sale, time cost or financial consequence |
| 4 | Demonstrated willingness to act | Owner already pays someone, changes behaviour, or accepts a paid pilot |
| 5 | Demonstrated repeat payment | Owner pays more than once or commits to a recurring paid service |

### 12.2 Scorecard

| Criterion | Weight | Evidence required for a high score |
|---|---:|---|
| Severity | 15% | Owner demonstrates financial, stock or sales loss |
| Frequency | 15% | Problem occurred recently and repeatedly |
| Financial loss / cost | 15% | Quantified or clearly estimated by owner from records |
| Time wasted | 10% | Owner estimates time and shows the activity |
| Current dissatisfaction | 5% | Owner actively complains or has tried alternatives |
| Failure of existing alternatives | 10% | Owner explains why notebook/relative/software did not work |
| Existing spending | 10% | Owner currently pays someone or something to address it |
| Willingness to pay | 10% | Owner accepts a real paid pilot or makes a concrete commitment |
| Ease of reaching customers | 5% | Multiple reachable owners in one location |
| Ease of manual delivery | 5% | Researcher can deliver service with low cost and time |
| Repeat-purchase potential | 5% | Problem recurs weekly/monthly |
| Competition / duplication risk | 5% | Existing solution is weak or does not address workflow |
| Operational complexity | 5% | Service can be delivered without heavy logistics |
| Connectivity fit | 5% | Service works with phone, WhatsApp, paper or intermittent internet |
| Expansion potential | 5% | Same problem appears across locations/categories |

**Maximum: 100.** A score above 70 justifies a paid manual pilot only if it includes **actual payment** or a firm paid commitment. Verbal enthusiasm alone cannot produce a high willingness-to-pay score.

### 12.3 Handling contradictions

- If one owner reports a severe problem but others do not, treat it as an anecdote until repeated.
- If owners say a problem matters but refuse to pay or share records, downgrade willingness-to-pay.
- If an owner praises a solution but does not use or pay for it, treat adoption as unproven.
- Record contradictions explicitly; do not average them away.

---

## 13. Low-Cost Paid Pilot Experiments

### Experiment A: Credit-book clean-up and weekly receivables summary

| Item | Detail |
|---|---|
| Target customer | Trade stores, transport operators, service businesses |
| Problem tested | Untracked credit, partial payments, overdue debts |
| Exact service | Reconstruct the owner’s customer-credit book into a simple private ledger; produce a weekly aging summary and follow-up list |
| Researcher tasks | Consent; review credit records; build ledger; classify debts; produce weekly summary; agree follow-up approach |
| Time | Initial clean-up: 2–4 hours per business; weekly update: 30–60 minutes |
| Direct costs | Notebook/printout, phone credit, transport |
| Payment test | Charge a clearly stated setup fee and a weekly update fee; owner pays before or at delivery |
| Success | At least 3 of 5 pilot customers pay for a second week; owner reports recovered payment, reduced dispute or time saved |
| Failure | Owners accept free help but refuse to pay; records cannot be reconstructed; owner will not share data |
| Risks / safeguards | Do not collect customer names unnecessarily; do not act as a debt collector; obtain written/verbal consent; keep data private |
| Next step | If successful, expand to 10 paying customers and test a simple mobile-friendly record format |

### Experiment B: Quotation and job-cost pack

| Item | Detail |
|---|---|
| Target customer | Contractors, tradespeople, mechanics |
| Problem tested | Slow/inaccurate quotes and unknown job profitability |
| Exact service | Prepare one real quotation using a standard template; create a job-cost worksheet; after completion, prepare a simple job-profit summary |
| Researcher tasks | Gather job requirements; price materials/labour with owner; prepare quote; track actual costs; produce profit summary |
| Time | 1–3 hours per quote/job |
| Direct costs | Printing, phone credit, transport |
| Payment test | Charge per quotation or per completed job pack |
| Success | Owner pays for a second quote or asks for recurring job-cost support; quote is submitted and owner can explain profitability |
| Failure | Owner will not provide cost information; quotes are too infrequent; owner will not pay |
| Risks / safeguards | Do not guarantee job success; do not provide regulated construction/engineering advice; keep client details confidential |
| Next step | If successful, test a monthly quote/job-support retainer |

### Experiment C: Loan-readiness record pack

| Item | Detail |
|---|---|
| Target customer | Micro/small businesses seeking finance |
| Problem tested | Missing or unusable financial records for loan applications |
| Exact service | Organise sales/expense records; prepare a basic cash-flow summary; assemble a document checklist; review lender requirements |
| Researcher tasks | Consent; collect/organise records; prepare summary; map lender checklist; identify gaps |
| Time | 3–6 hours per business |
| Direct costs | Printing, phone credit, transport |
| Payment test | Charge a fixed fee for the record pack |
| Success | Owner pays; lender accepts/uses the pack; owner reports clearer application process |
| Failure | Lender requires collateral/history rather than records; owner will not pay; records cannot be reconstructed |
| Risks / safeguards | Do not guarantee approval; do not provide tax, legal or credit advice; verify lender requirements directly; protect financial data |
| Next step | Interview 3–5 lenders/agents before scaling |

### Pricing test

Use a transparent, small-scale price test with clearly defined options, for example:

- **Basic one-off clean-up:** fixed fee.
- **Weekly update:** lower recurring fee.
- **Monthly bundle:** clean-up plus four weekly updates.

Do not publish invented “market prices.” Start with two or three price points, record accept/reject decisions, and treat the result as directional evidence only.

---

## 14. Geographic and Recruitment Strategy

### 14.1 Location comparison

| Location type | Advantages | Disadvantages | Best use |
|---|---|---|---|
| Port Moresby | Researcher access, business density, variety of categories, easier repeat visits | Higher competition, possibly higher owner expectations, security/time costs | Good for first multi-category discovery if researcher is based there |
| Lae | Strong trade/logistics concentration; useful for wholesale, transport and hardware testing | Travel/accommodation cost if researcher is not based there | Strong second location for credit/freight validation |
| Provincial town | Lower competition; may reveal service-access gaps | Lower business density; travel and support costs | Use only after a repeatable service model exists |
| District / rural area | Tests connectivity, access and informal-business realities | High travel cost, low density, harder repeat service | Later validation, not first pilot |

### 14.2 Recommended approach

If the researcher is based in Port Moresby, begin there for **discovery**, but deliberately include businesses serving provincial customers or sourcing from outside the city. Do not claim Port Moresby findings represent PNG.

If the researcher is based elsewhere, begin in their own accessible town: lower cost, better repeat access and more realistic delivery testing. Before final selection, record:

- Number of reachable businesses by category.
- Travel time and cost per interview.
- Mobile coverage and power reliability.
- Presence of associations, markets, transport hubs and supplier clusters.
- Willingness of owners to meet more than once.

---

## 15. Decision Rules

| Stage | Rule | Action |
|---|---|---|
| Continue investigating | At least 3 independent owners in a category describe the same recent problem with a concrete consequence | Add 3–5 more interviews in that category |
| Run paid manual pilot | At least 3 owners accept a clearly priced, manually delivered service | Run a 4-week pilot with 5 customers |
| Change target category | Problem is real but the first category will not pay or is hard to reach | Test the same service with a different category |
| Investigate different problem | Existing alternatives already solve the problem, or owners will not pay | Shift to the next-highest scorecard opportunity |
| Stop pursuing | Fewer than 3 owners report the problem, no consequence is demonstrated, and no one accepts a paid pilot | Stop and document why |
| Consider software later | At least 5 paying customers use a manual service repeatedly, and the researcher cannot scale manually without quality loss | Only then assess a simple digital workflow |

**Do not treat a positive answer to “Would you use this?” as demand.** Demand is demonstrated by payment, repeat use, referral, or a concrete commitment with a date and amount.

---

## 16. Risks, Ethics and Privacy

| Risk | Safeguard |
|---|---|
| Owner fears government, tax or bank inspection | Clear verbal introduction; no logos or official claims; state that nothing is being sold or enforced |
| Confidential financial data exposure | Collect only what is necessary; anonymise immediately; do not retain customer lists or bank details |
| Debt-collection conflict | Do not contact customers or act as a debt collector; only help the owner organise their own records and follow-up plan |
| False expectations about loans | Never promise approval; distinguish record preparation from lending advice |
| Tax/legal misinformation | Do not provide tax or legal advice; direct owners to IRC/IPA or qualified professionals |
| Security risk during fieldwork | Meet in public/business premises during daylight; avoid carrying cash or sensitive documents; follow local safety advice |
| Pressure on informal traders | Keep interviews short; avoid peak selling hours; make participation clearly voluntary |
| Researcher bias | Use structured guides, record refusals, include negative cases, and avoid leading questions |

---

## 17. Recommended Fieldwork Schedule

| Week | Activity | Output |
|---|---|---|
| 1 | Prepare consent script, interview guides, observation forms, scorecard and pilot offer | Fieldwork pack |
| 2 | Conduct 12 discovery interviews across at least 6 categories | Interview notes; initial scorecard |
| 3 | Conduct 3–5 follow-up interviews in the strongest category; review artefacts with consent | Problem-specific evidence |
| 4 | Select one pilot; recruit 5 paying customers; deliver first service cycle | Payment and delivery evidence |
| 5–7 | Run weekly service cycles; record time, cost, issues, repeat payment and referrals | Pilot results |
| 8 | Score results; decide continue, pivot, or stop | Field-validation decision memo |

---

## 18. Evidence and Source Register

1. **PNG Micro, Small and Medium Enterprises and Informal Sector Study — Detailed Findings Report** — Tebbutt Research for the Australia–PNG Economic Partnership, September 2024.  
   https://www.dfat.gov.au/sites/default/files/png-micro-sme-sector-study-detailed-findings-report.pdf  
   Establishes cash-flow and finance constraints, micro-business dominance, digital-service demand gaps, rural access limitations, transport constraints, and gender-related barriers. [page:4]

2. **PNG MSME and Informal Sector Study — study page** — Australian Government / APEP.  
   https://www.dfat.gov.au/geo/papua-new-guinea/papua-new-guinea-micro-small-and-medium-enterprises-and-informal-sector-study  
   Provides study context and access to the detailed report. [web:1]

3. **SME Corporation — MSME Growth & Development** — SME Corporation PNG, 12 May 2025.  
   https://smecorp.gov.pg/financial-advisory/  
   Documents training, formalisation pathway, IPA registration support and registration-fee subsidy for eligible participants. [web:22]

4. **Investment Promotion Authority — Business Entities Registry** — IPA.  
   https://www.ipa.gov.pg/corp/index.aspx  
   Documents online registry, public search and online filing/payment. [web:19]

5. **Bank South Pacific — Merchant Fee Schedule** — BSP, effective 1 June 2022.  
   https://www.bsp.com.pg/help/merchant-fee-schedule/  
   Documents merchant payment fees, including BSP Pay and EFTPOS rates. [web:20]

6. **PNGPOS** — PNGPOS.  
   https://pngpos.com/  
   Documents POS/inventory offering, offline selling and K75/month Core pricing; marketing claims, not independently verified adoption. [web:23]

7. **Wantok POS System** — Cloudcode PNG.  
   https://cloudcode.com.pg/wantok-pos-system/  
   Documents offline-first POS positioning and integration claims; adoption not independently verified. [web:21]

8. **First-stage report:** `PNG_SME_OPERATIONS_AND_LATENT_NEEDS_RESEARCH.md`.  
   https://github.com/JennyJoshua/png-sme-system/blob/main/PNG_SME_OPERATIONS_AND_LATENT_NEEDS_RESEARCH.md

9. **Second-stage report:** `PNG_SME_EXISTING_SOLUTIONS_AND_OPPORTUNITY_GAP_ANALYSIS.md`.  
   https://github.com/JennyJoshua/png-sme-system/blob/main/PNG_SME_EXISTING_SOLUTIONS_AND_OPPORTUNITY_GAP_ANALYSIS.md

---

## 19. Unanswered Questions

1. What proportion of credit sales become overdue, and what is the typical value and age of unpaid debts?
2. Do owners track partial payments accurately, and what disputes arise?
3. Is lack of records, collateral, affordability, credit history or lender process the main barrier to finance?
4. How often do contractors and tradespeople prepare quotes, and how often do quoting errors or scope changes cause losses?
5. Can owners reconstruct the profitability of their last completed job?
6. Which owners already pay someone for bookkeeping, quotations, collections or admin support?
7. What price, if any, would owners accept for a weekly receivables or job-record service?
8. Which location provides the best combination of business density, repeat access and low delivery cost?
9. Will owners share credit books and financial records with an independent, non-government service provider?
10. Does a manual service create enough repeat demand to justify a simple digital workflow later?

---

## 20. Final Recommendation

Begin with a **12-interview discovery study**, weighted toward trade stores, transport operators and contractors/tradespeople. Use the three interview guides above, review artefacts only with explicit consent, and score each problem using the validation scorecard.

Then run **one paid manual pilot**: preferably the **credit-book clean-up and weekly receivables summary**. It directly tests the most plausible recurring cash-flow problem, can be delivered with a notebook, phone and spreadsheet, requires no software development, and produces a clear continue/stop signal based on real payment and repeat use.

**Continue** if at least 3 of 5 pilot customers pay for a second service cycle and report a concrete benefit.  
**Stop or pivot** if owners will not pay, will not share records, or if existing alternatives already solve the problem adequately.  
**Do not begin software development** until a manual service demonstrates repeat paid demand.
