# Research prompt: Baltimore city type and event travel

Drafted Oct 12, 2026 (America/Los_Angeles) as part of the additional ten-city research batch. This is research only: it does not approve a city build or lock a boundary, city type, car share, or formula change.

Copy the brief below into a research model. Save the full answer beside this prompt as `baltimore-city-type-answer.md`; a second model's answer may use `-claude` or `-codex` before `.md`. Companion research: [Baltimore venue table](baltimore-venue-table-prompt.md). Keep the prompt and answers together.

---

## Delivery
Deliver a downloadable Markdown file named `baltimore-city-type-answer.md`, with headings, pipe tables and inline source links. If unavailable, provide complete Markdown in chat. Do not provide a PDF or summary only. Date the research and link every numeric claim directly to public evidence.

## Purpose and existing settings
Fan/Friction is a personal log of attended live sports and concerts. Its Gridlock read estimates pressure from overlapping event crowds; it is not navigation, live traffic, or a trip planner. We need public evidence of how people actually reach event venues in Baltimore, not ordinary commute percentages presented as event travel.

The existing city settings are driving (`sprawl`), in between (`hub`), and transit-dominant (`transit`). They affect fallback driving shares and spill between nearby crowds. Current defaults are 0.85 car share for `sprawl` and `hub`, and 0.4 for `transit`; venue-specific shares override them. Assess these settings against evidence; do not fit evidence to a desired setting, propose new constants, or tune against personal ratings.

## Scope
Use Baltimore and its surrounding metro. Starting search area: Baltimore city and its surrounding event metro, including Baltimore, Anne Arundel, Howard, Harford and Carroll counties as search leads. Assess Columbia, Annapolis and other DC-facing sites separately; do not duplicate the Washington, DC queue. Treat this as a research boundary, not a locked inclusion rule. Recommend a defensible boundary from sourced population, commuting, event audiences and event-travel evidence; identify edge municipalities separately.

Cover every fixed room around 1,000+ in the companion venue research, prioritizing each 5,000+ configuration and major event crowds. If that answer is unavailable, enumerate venues independently and name coverage gaps. Include event-specific rows for major festival, fair, race, stadium-district and open-site crowds; these are not fixed-capacity venue records. Starting leads (verify; none is a claim of current name, capacity, activity or feed coverage): Oriole Park at Camden Yards; M&T Bank Stadium; CFG Bank Arena; Towson and UMBC venues; Maryland State Fairgrounds; Pier Six Pavilion; Columbia and Annapolis venues as boundary cases; major harbor, festival and convention events. Verify disputed boundaries and each room's identity before treating it as part of this metro. Verify current names, tenants, capacities by configuration, local ticketing and feed coverage; these are search leads only.

## Venue and event travel table
For each venue/event, identify the verified current name, municipality, exact setup/event and date or season represented; person share by private car/carpool/rideshare; public bus/rail and dedicated event shuttle share separately where possible; walk/bike/other and unclassified share; one recommended car-share value with range, confidence and uncertainty; evidence type/date/event type; parking supply and remote arrangements; event operations, route/closure changes and start/end service; access constraints and other crowds sharing approaches; direct sources/method. State whether each split sums to 100% and explain any missing mode. Distinguish people from vehicles and attendees from ticket buyers, boardings or daily visits.

Treat a car trip to remote parking plus a shuttle as a car-involved trip. Explain park-and-ride treatment. Do not count a shuttle ride as wholly non-car when the attendee drove to it. Distinguish event transit from regular service and verify service at event start and end.

## Evidence method
Search public venue travel plans, environmental/planning reviews, organizer/team surveys, municipal/regional studies, transit agencies' event ridership, and official parking/event-operation reports. Prefer observed event travel over projections. Separate sports, concerts, festivals, theaters and suburban destinations; distinguish weekday/weekend, winter/summer, and event setup where evidence differs. Label ordinary commuting data as background only.

Where a measured split is absent, give a transparent estimate only when local public evidence or a relevant comparison makes one defensible; show assumptions, range and confidence. Otherwise say unknown and identify which current fallback would provisionally apply. For ridership inference, show baseline subtraction, attendance denominator, return trips, and uncertainty. Never turn raw boardings or parking spaces into a mode share without a defensible method. Preserve material source conflicts; reconcile small definitional gaps plainly.

## Regional conclusion
Recommend one existing city type and explain the strongest contrary evidence and venue exceptions. Where evidence permits, show capacity-weighted and typical-attendance-weighted car shares, naming the exact events, configurations, weights and missing coverage. Never add mutually exclusive configurations or count a multi-day total as one simultaneous crowd. Explain whether a few huge outlying venues obscure the downtown pattern. Identify venue clusters, shared roads and shared audiences as separate findings; do not invent a new distance rule or manual hard-access flags.

## Gaps from the first 26 city builds (answer every item)

These came out of the first 26 city builds (Oct 2026). Each one cost a city something when the research skipped it. Give a source link for every fact. If you can't find a source, write "gap" and say what you searched. Never make up a number.

1. **Name and code.** The display name for Baltimore, a short form, and a three-letter code (lead: BAL; verify against what local teams and media use). List which cities and suburbs it covers (Baltimore City and County, Anne Arundel, Howard; say whether Annapolis and Columbia are in). Tampa Bay is the precedent: locals and every team say "Tampa Bay" and it covers St. Pete and Clearwater, so the name changed while the code stayed TPA.
2. **City type.** Transit hub, mixed, or car-first, based on measured fan mode splits at each major venue. For every split give the year, venue, event type and source.
3. **Car share per venue.** Measured if possible. If not, give a sourced estimate and label it **estimated**. Estimates now go into the app marked as estimated. Never give a number without a source.
4. **Hand-off.** Key every car share to the venue rows in the companion venue answer, so a builder can wire them without guessing which room you meant.

**Build rules (for whoever turns this answer into app data; put these in the answer as notes):**
- Every venue ID and team ID must be unique across all cities. Check for collisions: `giants`, `jets`, `rangers`, `kings` and `cardinals` were already taken, so add a city prefix.
- Don't make a separate per-city opponents file. Opponent draws go into `expectedDrawIndex` like every other city.
- Never guess a capacity. A missing or range-only figure stays blank and goes on the city gaps list.
- Car shares: wire measured ones; wire sourced estimates marked estimated; leave the rest on the city default.

## End with
1. Recommended existing city type and rationale; strongest contrary evidence.
2. Car-share values keyed to the exact venue rows in the companion answer; separate measured, projected and estimated values.
3. Boundary recommendation and inconsistencies between briefs.
4. Important data gaps, model limitations, source conflicts and inaccessible sources.
5. Confirmed transport or venue changes through 2028, with dates and suggested re-check dates; distinguish scheduled/funded changes from proposals.
6. Every item under "Gaps from the first 26 city builds", answered or marked as a gap.

Use public data only. Do not provide app code, hand flags, personal ratings, or cost commitments. Flag a source that cannot be accessed normally; do not bypass access controls.
