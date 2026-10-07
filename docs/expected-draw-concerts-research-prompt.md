# Research brief: estimated crowd size for upcoming concerts and other non-sports events

You are an outside reviewer. You do **not** have the Fan/Friction repo. Use only the context below. Be skeptical of fake precision. Prefer “no estimate” over inventing crowds. Tables beat prose.

Drafted Oct 6, 2026 by Push Pilot for Claude chat (objectivity). Answers go back to Claude Code for proposal → Kylie OK → build. Pair with `docs/expected-draw-sports-research-prompt.md`. Do not implement from this file alone.

## Product context (Fan/Friction)

Fan/Friction is a personal log of live sports and concerts. Nights get a **friction read** from public schedules (overlapping big events, start proximity, shared roads). Size matters: wrong size makes a night look busier or quieter than it was.

Rules that constrain you:

- Log anything by hand; ~1,000+ pre-listed; only **~5,000+** feeds friction. Rooms under ~5k stay off the map for friction.
- Label every number **announced**, **reported**, or **estimated**. Never a bare invented count.
- Sports already have (or will have) expected draws from **past announced team attendance**. That path does **not** exist for most concerts.
- Concerts/shows are listed from **Ticketmaster Discovery** (facts only: name, date, start, venue, performers, id). No ticket-sold counts, no capacity in the API payload the app keeps.
- Venues in the app have **capacity by setup** (e.g. concert end-stage vs in-the-round), from researched venue tables, with sources.
- Owner (Kylie) is frugal; hates luxury fake accuracy. Multi-day festival totals may be averaged per day when **labeled estimated** (she locked that Oct 7, 2026).
- **Out of scope here:** marathons/parades/route closures (formula would use them wrong); sports expected draws; retuning friction formula constants.

Covered cities today: LA, San Diego, Seattle, New York. Unknown small rooms are dropped from Ticketmaster pulls; only known 5k+ venues are kept.

## What’s broken today

Upcoming concerts often show **no crowd / no expected draw**. Friction may fall back to full venue concert capacity (implicit sellout) or leave them weak. Both are bad: sellout assumption overstates many weeknight shows; blank understates a packed MSG night.

## Self-audit (before the research question)

1. Search how industry, promoters, cities, and researchers **estimate concert / festival / theater attendance** when ticket scans aren’t public (capacity × load factor, historical sell-through, genre, day of week, residency, on-sale speed, secondary market — note what’s public vs proprietary).
2. Add anything the starter list missed. Flag paid/ToS-hostile sources.
3. Write an **Addenda**: promote to v1 / park / reject. Then answer the research question.

## Starter list (incomplete)

- Venue concert capacity by setup (end-stage vs in-the-round vs festival grounds)
- Day of week / month / holiday
- Artist / tour fame tiers (how to define without inventing?)
- Historical announced or reported crowds for **same artist in same building** (or same metro)
- Sellout / scarce indicators that are public (e.g. “tickets unavailable” — fragile)
- Genre / residency / run-of-nights (multiple dates same week)
- Support acts / package tours
- Outdoor vs indoor; weather (outdoor only — watch double-count with Conditions)
- Festival daily averages from published multi-day totals
- Theater / comedy / family shows vs headliner concerts
- Standing-room / GA vs seated configs

## Research question

Design a **v1 estimated size rule** for **upcoming non-sports listings** at known venues ≥ ~5k so they can feed friction honestly.

Answer:

1. **Default when we only know venue + date + performer?** (e.g. capacity × occupancy band; or “capacity as ceiling, estimate only if …”)
2. **When is same-artist / same-venue history usable?** Minimum N, how far back, what if the room was renovated or renamed.
3. **Occupancy bands:** how to set them without circular “feels famous”? Prefer data-backed tiers or a single conservative default.
4. **Sellout assumption:** ever OK? When must we refuse and show no estimate?
5. **Runs / residencies:** size each night the same or taper?
6. **Festivals / grounds / Comic Con–style halls:** per-day average rules vs one peak day.
7. **Arts & theatre / miscellaneous Ticketmaster segments:** same rule as Music or stricter?
8. **Labeling copy principles** so estimate ≠ announced.
9. **Evaluation** after the night (when a reported crowd appears in press) without tuning friction to someone’s ratings.
10. **Bias risks:** overstating megastars, understating local acts, punishing cities with big rooms.

## Output

1. Addenda
2. Recommended v1 rule + edge cases
3. Parked list
4. Evaluation plan
5. Product locks only where Kylie must decide

No code. No paid APIs. Mark illustrative numbers clearly.

## Success

A rule an implementer can apply: upcoming concerts/other shows get **labeled** sizes grounded in venue capacity and whatever public history is defensible — or stay unsized when they shouldn’t guess.
