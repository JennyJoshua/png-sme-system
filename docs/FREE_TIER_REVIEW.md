# Free-tier review (checked 2026-10-23)

No cloud projects were created. Terms change; re-check before deploying.

## Render (web service)
Sources: https://render.com/docs/free , https://docs.render.com/free
- Free web services spin down after 15 minutes without inbound traffic; spin-up takes up to about a minute, so the first page load can hang.
- 750 free instance hours per workspace per month; if exhausted, free services are suspended until next month. Bandwidth and build minutes also have monthly allotments.
- Ephemeral filesystem (lost on redeploy/restart/spin-down). Render may restart a free service at any time. No SMTP ports (25/465/587) outbound.
- Free Render Postgres expires 30 days after creation and has no backups: do not use it for records (matches D-013).
- Caveat for this product: cold starts over slow mobile networks, and a service that sleeps, are a real usability cost for a shop owner.

## Supabase (Postgres + Auth)
Sources: https://supabase.com/docs/guides/platform/free-project-pausing , https://supabase.com/docs/guides/platform/billing-on-supabase , https://supabase.com/docs/guides/platform/manage-your-usage/egress
- Free plan projects with low activity over 7 days are paused (warning email about a week before). A paused project can be restored in the dashboard within 90 days per the current page version. Note: an older cached version of that page said 1 year; confirm in the dashboard.
- Free quotas (official billing page): 500 MB database per project, 5 GB egress, 1 GB storage, 50,000 MAU. Free plan has no overage billing: past quota you get a notice and a grace period (see Fair Use Policy).
- Max 2 active free projects.
- Backups: the official pages I could read did not state free-plan backup terms. Secondary sources say the Free plan has no automatic daily backups or point-in-time recovery. UNVERIFIED against official pricing/backups docs; treat as "no backups" until confirmed.

## Compatibility
Node >= 22.12 (Vitest 5, PGlite); Next.js 16.4.2 requires >= 20.9. Render's Node version must be set to a compatible version at deploy time (not tested here).

## Conclusion (not a decision)
Both free tiers are suitable for a controlled test, not for real business records: inactivity pause, sleep/cold start, and no confirmed backups all conflict with record-keeping. See `docs/BACKUP_RECOVERY.md`.
