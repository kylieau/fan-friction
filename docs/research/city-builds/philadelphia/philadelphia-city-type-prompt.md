# Research prompt: Philadelphia city type and event travel

Drafted Oct 11, 2026 (America/Los_Angeles) as part of the proposed next-ten city queue. This is research only: it does not approve a city build or lock a boundary, city type, car share, or formula change.

Copy the brief below into a research model. Save the full answer beside this prompt as `philadelphia-city-type-answer.md`; a second model's answer may use `-claude` or `-codex` before `.md`. Companion research: [Philadelphia venue table](philadelphia-venue-table-prompt.md). Keep the prompt and answers together.

---

## Delivery
Deliver a downloadable Markdown file named `philadelphia-city-type-answer.md`, with headings, pipe tables and inline source links. If unavailable, provide complete Markdown in chat. Do not provide a PDF or summary only. Date the research and link every numeric claim directly to public evidence.

## Purpose and existing settings
Fan/Friction is a personal log of attended live sports and concerts. Its Gridlock read estimates pressure from overlapping event crowds; it is not navigation, live traffic, or a trip planner. We need public evidence of how people actually reach event venues in Philadelphia, not ordinary commute percentages presented as event travel.

The existing city settings are driving (`sprawl`), in between (`hub`), and transit-dominant (`transit`). They affect fallback driving shares and spill between nearby crowds. Current defaults are 0.85 car share for `sprawl` and `hub`, and 0.4 for `transit`; venue-specific shares override them. Assess these settings against evidence; do not fit evidence to a desired setting, propose new constants, or tune against personal ratings.

## Scope
Use Philadelphia and its surrounding metro. Starting search area: Philadelphia and its connected inner suburbs across Pennsylvania and South Jersey; begin with Philadelphia, Camden, Chester/Delaware County, and Villanova as search leads. Test whether the boundary should include other nearby counties or exclude far-edge venues; keep Atlantic City outside unless evidence says otherwise. Treat that as a research boundary, not a locked inclusion rule. Recommend a defensible boundary from sourced population, commuting, event audience and event-travel evidence; identify edge-case municipalities separately.

Cover every fixed room around 1,000+ in the companion venue research, prioritizing each 5,000+ configuration and major event crowds. If the venue answer is unavailable, enumerate venues independently and name the gaps. Include event-specific rows for major festival, fair, race, stadium-district, or open-site crowds; these are not fixed-capacity venue records. Starting leads (verify; none is a claim of current name, capacity, activity or coverage): Lincoln Financial Field, Citizens Bank Park, Xfinity Mobile Arena, Temple and Villanova venues, Subaru Park, Mann Center, Freedom Mortgage Pavilion, Liacouras Center, Penn Relays, Army–Navy when hosted locally, marathon and major park/festival events. These are leads only; verify names, active use, capacities, and location.

## Venue and event travel table
For each venue/event, identify the verified current name, municipality, exact setup/event and date or season represented; person share by private car/carpool/rideshare; public bus/rail and dedicated event shuttle share separately where possible; walk/bike/other and unclassified share; one recommended car-share value with range, confidence and uncertainty; evidence type/date/event type; parking supply and remote arrangements; event operations, route/closure changes and start/end service; access constraints and other crowds sharing approaches; direct sources/method. State whether each split sums to 100% and explain any missing mode. Distinguish people from vehicles and attendees from ticket buyers, boardings or daily visits.

Treat a car trip to remote parking plus a shuttle as a car-involved trip. Explain park-and-ride treatment. Do not count a shuttle ride as wholly non-car when the attendee drove to it. Distinguish event transit from regular service and verify service at event start and end.

## Evidence method
Search public venue travel plans, environmental/planning reviews, organizer/team surveys, municipal/regional studies, transit agencies' event ridership, and official parking/event-operation reports. Prefer observed event travel over projections. Separate sports, concerts, festivals, theaters and suburban destinations; distinguish weekday/weekend, winter/summer, and event setup where evidence differs. Label ordinary commuting data as background only.

Where a measured split is absent, give a transparent estimate only when local public evidence or a relevant comparison makes one defensible; show assumptions, range and confidence. Otherwise say unknown and identify which current fallback would provisionally apply. For ridership inference, show baseline subtraction, attendance denominator, return trips, and uncertainty. Never turn raw boardings or parking spaces into a mode share without a defensible method. Preserve material source conflicts; reconcile small definitional gaps plainly.

## Regional conclusion
Recommend one existing city type and explain the strongest contrary evidence and venue exceptions. Where evidence permits, show capacity-weighted and typical-attendance-weighted car shares, naming the exact events, configurations, weights and missing coverage. Never add mutually exclusive configurations or count a multi-day total as one simultaneous crowd. Explain whether a few huge outlying venues obscure the downtown pattern. Identify venue clusters, shared roads and shared audiences as separate findings; do not invent a new distance rule or manual hard-access flags.

## End with
1. Recommended existing city type and rationale; strongest contrary evidence.
2. Car-share values keyed to the exact venue rows in the companion answer; separate measured, projected and estimated values.
3. Boundary recommendation and inconsistencies between briefs.
4. Important data gaps, model limitations, source conflicts and inaccessible sources.
5. Confirmed transport or venue changes through 2028, with dates and suggested re-check dates; distinguish scheduled/funded changes from proposals.

Use public data only. Do not provide app code, hand flags, personal ratings, or cost commitments. Flag a source that cannot be accessed normally; do not bypass access controls.
