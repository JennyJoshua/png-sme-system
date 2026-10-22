# Backup, recovery and export: decisions needed before real data

Nothing here is implemented in Batch 1.

Open decisions for the owner (with ChatGPT review):
1. Backup source of truth: confirmed free-plan backup terms, or a scheduled export (e.g. CSV/SQL dump to storage the owner controls), or a paid plan (needs explicit approval; none is authorised).
2. Keep-alive: how to avoid the Supabase 7-day inactivity pause for a real business (regular genuine use, an approved scheduled check, or upgrade).
3. Restore drill: restore a backup into a fresh project and verify before real records are entered.
4. Data export (D-008): CSV export of all business-owned tables for the owner; format and scope to define in Batch 2+.
5. Account/business deletion: Batch 1 grants clients no DELETE. Define retention/deletion behaviour.
6. Money representation: choose integer toea vs `numeric(14,2)`, and rounding rules (D-014); no floating-point money. Not decided here.
7. Ownership recovery: what happens if the only owner loses their account.
