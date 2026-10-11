# Research prompt: how Milwaukee event crowds travel

Drafted Oct 11, 2026, Codex. Kylie approved Milwaukee plus its surrounding metro and preparation of the two research prompts (Oct 11, 2026). The precise outer boundary remains a research recommendation for her review. No Milwaukee city type or venue car shares have been chosen.

Copy the brief below into a research model. Save the full answer as `docs/milwaukee-city-type-answer.md`. Companion brief: [Milwaukee venues](milwaukee-venue-table-prompt.md). Keep this prompt in the research queue until reviewed and incorporated.

---

## Delivery
Deliver a downloadable Markdown file named `milwaukee-city-type-answer.md`, with pipe tables and inline source links. If unavailable, deliver complete plain Markdown in chat. No PDF or summary-only answer.

## Purpose
Fan/Friction is a personal log of live sports and concerts. Its gridlock read estimates pressure from overlapping event crowds; it does not provide navigation or live traffic. We need public evidence of how attendees actually reach Milwaukee venues, rather than applying Los Angeles assumptions or treating ordinary commute statistics as event travel.

The existing city settings are **driving (`sprawl`)**, **in between (`hub`)**, and **transit-dominant (`transit`)**. They affect fallback driving shares and spill between nearby crowds. In the current implementation, driving and hub both default to 0.85 car share, and transit defaults to 0.4; venue-specific shares override these. These are existing settings to assess against evidence, not targets to fit. Do not recommend new constants or tune against personal ratings.

## Scope
Use Milwaukee and its surrounding metro, consistent with the companion venue research. Milwaukee, Waukesha, Ozaukee and Washington counties are a working search area, subject to a sourced boundary recommendation. Assess Racine/Kenosha only as edge cases; do not automatically include Madison, Green Bay, Chicago or distant destination venues.

Cover **every fixed room around 1,000+** from the venue answer, prioritizing all 5,000+ configurations and larger event crowds. If that answer is not yet available, enumerate venues independently and explicitly identify missing coverage. Include event-specific rows for major festival/fair/open-site crowds; these are not fixed-capacity venue records.

## Venue travel table
| Field | Required detail |
|---|---|
| Venue/event | Current verified name, municipality, exact event or setup represented |
| Car share | Fraction arriving by private car, carpool, taxi or rideshare together; distinguish person share from vehicle count |
| Transit share | Public bus/rail and dedicated event shuttles, separated where possible; actual availability at event start and finish |
| Walk/bike/other | Remaining modes; explain treatment of mixed-mode trips and remote parking shuttles |
| Recommended value | One defensible car-share value for implementation, with range and uncertainty; unknown if no defensible basis |
| Evidence kind | Observed survey/count, official projection, reported study or transparent estimate; source date and event type |
| Parking | Verified supply and off-site arrangements; parking spaces alone do not establish attendance or mode share |
| Event operations | Special service, closures and seasonal/weekend differences, with effective dates |
| Constraints/shared roads | Sourced access constraints and nearby events using the same approaches; no manual hard-access flags |
| Sources | Direct links for each numeric claim and method |

For each mode split, show whether shares sum to 100% and explain any missing category. Do not count a person driving to a remote lot and taking its shuttle as wholly non-car. Distinguish transit park-and-ride and explain the rule used. Avoid equating station boardings, vehicles, ticket buyers and unique attendees.

## Research method
Search public venue transport plans, environmental/planning reviews, team/organizer surveys, municipal and regional studies, transit agencies' event ridership and official parking reports. Possible Milwaukee-area agencies and venue documents are search leads: verify their relevance, current routes and dates before citing them.

Prefer observed event travel over pre-opening projections. Separate downtown sports, ballpark events, lakefront festivals, theaters and suburban venues; a city average cannot replace a venue figure. Distinguish weekday versus weekend, sports versus concerts and winter versus summer when the evidence changes the answer.

Where no measured split exists, offer a transparent **estimated** value only if defensible from public local evidence or a relevant comparison. Give assumptions, range, comparison and confidence. Otherwise say unknown and explain which existing default would apply provisionally. Do not force a precise number for every row.

For ordinary commute data, label it background only. For event-day ridership inference, show baseline subtraction, attendance denominator, return-trip handling and uncertainty. Do not infer an event share from raw ridership alone.

## Regional conclusion
Recommend one existing city type, with evidence and exceptions. Show both capacity-weighted and, where defensible, typical-attendance-weighted regional car shares, naming the venues, configurations, weights and missing coverage. Never combine all a building's mutually exclusive capacities or treat a festival's weekend total as one concurrent crowd. Explain whether a few very large sites hide a different downtown pattern.

Identify core clusters, outlying venues and crowd travel relationships without inventing a new per-city distance rule. A shared audience and shared roads are different facts. This research should support the existing model and flag its limits, not redesign it.

## End with
1. Recommended city type and why; strongest contrary evidence.
2. Car-share values keyed to the exact venues in the companion answer, separating measured, projected and estimated rows.
3. Boundary recommendation and any inconsistency between the two briefs.
4. Important model limitations, gaps and source conflicts.
5. Confirmed transport or venue changes through 2028 and suggested re-check dates; distinguish proposals from funded/scheduled work.

Use only public data. Link and date every numeric claim. Reconcile small source gaps with a stated sensible choice; preserve conflicts that materially affect the answer. If a source cannot be fetched normally, flag it without bypassing access. Do not supply app code, hand flags, personal ratings or cost commitments.
