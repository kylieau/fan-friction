# Push Pilot's review of the plan (Oct 6, 2026)

Kylie's Cursor bot reviewed `docs/big-picture-plan-oct6.md` and sent an engineering brief. Pasted here in summary; Claude's read and the decision follow. Kylie approved the reordered plan the same day.

## The brief, in short
- Compare before more catalog depth is soft: side-by-side on thin LA-only data would feel toy-like; stress-test the checklist and the formula with a second city first, unless Kylie prioritizes Compare for product reasons.
- Gridlock debt compounds: the ×1.25 hard-access factor is a placeholder; label Gridlock as draft on screen, or land a minimal honest rule, before heavy Compare use.
- Accounts and catalog are inverted: accounts live in Supabase, events are still repo JSON. Nightly jobs, a second city and concerts will hurt. Build a catalog write path (shared truth) before Ticketmaster volume.
- Ticketmaster is a cliff, not a checkbox: split into terms and key with a one-metro dry run, matching and dedupe into the catalog, then UI. One city that works beats three half-seeded.
- Platform tax: the ~1.3 MB map bundle on every tab; code-split before the step-5 pile-on.
- Parked items that bite later: the 30-minute forecast capture (stamps are "latest daily snapshot"), un-hand-checked Famous nights, example friends once real users exist.
- Keep: the logging bar, Review and With only typed, auto-Attended, LA hand-built only plus the checklist, propose-then-build, free Ticketmaster only with no later obligation.
- Recommended order: egress docs then rule; catalog write path; map code-split and a Gridlock draft label; one second city (San Diego first, then Seattle, New York last); Ticketmaster in slices; Compare when she says go; then the rest.

## Claude's read
- Already done when the brief arrived: the egress research is finished and the cars-per-lane rule was shelved on the evidence (`docs/archive/research/venue-egress-answer.md`); Gridlock reads already say "Formula v4 · placeholder numbers until tuned" on screen.
- Agree, and it matters: the catalog write path is the biggest real engineering debt; the map code-split is cheap; Ticketmaster in slices; San Diego first as the cheapest proof of the checklist.
- Pushed back: Compare is not blocked by data (Kylie's own log spans eight cities and ten years; only "dates on the same tour" needs concerts), so it is a product call, hers. And inventing a Gridlock rule from patchy OpenStreetMap lane tags would be less honest than the labeled placeholder.

## Decision (Kylie, Oct 6)
The reordered plan in `docs/big-picture-plan-oct6.md`: map code-split → catalog write path (proposal first) → San Diego via the checklist → Compare whenever she wants it → Ticketmaster in slices → the rest.
