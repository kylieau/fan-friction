# Research prompt: Mexico City city type and event travel

Drafted Oct 12, 2026 (America/Los_Angeles) as part of the proposed next-ten city queue. This is research only: it does not approve a city build or lock a boundary, city type, car share, or formula change.

Copy the brief below into a research model. Save the full answer beside this prompt as `mexico-city-city-type-answer.md`; a second model's answer may use `-claude` or `-codex` before `.md`. Companion research: [Mexico City venue table](mexico-city-venue-table-prompt.md). Keep the prompt and answers together.

---

## Delivery
Deliver a downloadable Markdown file named `mexico-city-city-type-answer.md`, with headings, pipe tables and inline source links. If unavailable, provide complete Markdown in chat. Do not provide a PDF or summary only. Date the research and link every numeric claim directly to public evidence.

## Purpose and existing settings
Fan/Friction is a personal log of attended live sports and concerts. Its Gridlock read estimates pressure from overlapping event crowds; it is not navigation, live traffic, or a trip planner. We need public evidence of how people actually reach event venues in Mexico City, not ordinary commute percentages presented as event travel.

The existing city settings are driving (`sprawl`), in between (`hub`), and transit-dominant (`transit`). They affect fallback driving shares and spill between nearby crowds. Current defaults are 0.85 car share for `sprawl` and `hub`, and 0.4 for `transit`; venue-specific shares override them. Assess these settings against evidence; do not fit evidence to a desired setting, propose new constants, or tune against personal ratings.

## Scope
Use Mexico City and its surrounding metro. Starting search area: Mexico City (CDMX) and connected parts of the State of Mexico as a working boundary. Assess scope using sourced commuting, event audiences, transit networks and shared access roads; treat Toluca, Puebla and Querétaro as edge cases rather than automatically including them. This is a research boundary, not a locked inclusion rule. Recommend a defensible scope and identify edge-case municipalities separately.

Cover every fixed room around 1,000+ in the companion venue research, prioritizing each 5,000+ configuration and major event crowds. If the venue answer is unavailable, enumerate venues independently and name the gaps. Include event-specific rows for major festival, fair, race, stadium-district, or open-site crowds; these are not fixed-capacity venue records. Starting leads (verify; none is a claim of current name, capacity, activity or coverage): Estadio Banorte (formerly Estadio Azteca), Estadio Olímpico Universitario, Estadio Ciudad de los Deportes, Arena CDMX, Palacio de los Deportes, Estadio GNP Seguros and Autódromo Hermanos Rodríguez grounds, Auditorio Nacional, Estadio Alfredo Harp Helú, Liga MX and LMB venues, major arenas/theatres, university venues, the Mexico City Grand Prix, marathons and large festivals/open-site events. Verify current sponsor names, tenants, capacities by setup, local ticketing, and how to avoid duplicate ground/room listings. Search in Spanish and English, preserve official Spanish names, and verify effective dates for venue renames.

## Venue and event travel table
For each venue/event, identify the verified current name, municipality, exact setup/event and date or season represented; person share by private car/carpool/rideshare; public bus/rail and dedicated event shuttle share separately where possible; walk/bike/other and unclassified share; one recommended car-share value with range, confidence and uncertainty; evidence type/date/event type; parking supply and remote arrangements; event operations, route/closure changes and start/end service; access constraints and other crowds sharing approaches; direct sources/method. State whether each split sums to 100% and explain any missing mode. Distinguish people from vehicles and attendees from ticket buyers, boardings or daily visits.

Treat a car trip to remote parking plus a shuttle as a car-involved trip. Explain park-and-ride treatment. Do not count a shuttle ride as wholly non-car when the attendee drove to it. Distinguish event transit from regular service and verify service at event start and end.

## Evidence method
Search public venue travel plans, environmental/planning reviews, organizer/team surveys, city and metropolitan studies, Metro/Metrobús and other transit agencies' event ridership, and official parking/event-operation reports. Search Spanish and English, prioritizing primary local sources. Report whether current app schedule sources actually cover local leagues and events; do not assume MLB/ESPN/Ticketmaster coverage extends to Liga MX, LMB or local ticketing platforms. Prefer observed event travel over projections. Separate sports, concerts, festivals, theaters and suburban destinations; distinguish weekday/weekend, winter/summer, and event setup where evidence differs. Label ordinary commuting data as background only.

Where a measured split is absent, give a transparent estimate only when local public evidence or a relevant comparison makes one defensible; show assumptions, range and confidence. Otherwise say unknown and identify which current fallback would provisionally apply. For ridership inference, show baseline subtraction, attendance denominator, return trips, and uncertainty. Never turn raw boardings or parking spaces into a mode share without a defensible method. Preserve material source conflicts; reconcile small definitional gaps plainly.

## Regional conclusion
Recommend one existing city type and explain the strongest contrary evidence and venue exceptions. Where evidence permits, show capacity-weighted and typical-attendance-weighted car shares, naming the exact events, configurations, weights and missing coverage. Never add mutually exclusive configurations or count a multi-day total as one simultaneous crowd. Explain whether a few huge outlying venues obscure the downtown pattern. Identify venue clusters, shared roads and shared audiences as separate findings; do not invent a new distance rule or manual hard-access flags.

## End with
1. Recommended existing city type and rationale; strongest contrary evidence.
2. Car-share values keyed to the exact venue rows in the companion answer; separate measured, projected and estimated values.
3. Boundary recommendation and inconsistencies between briefs.
4. Important data gaps, model limitations, source conflicts and inaccessible sources.
5. Confirmed transport or venue changes through 2028, with dates and suggested re-check dates; distinguish scheduled/funded changes from proposals.

Use public data only. Search Spanish and English, preserve source titles in their original language, and state local calendar, time-zone, naming and data-rights coverage issues based on evidence. Do not infer feed coverage from a team appearing in search results. Do not provide app code, hand flags, personal ratings, or cost commitments. Flag a source that cannot be accessed normally; do not bypass access controls.
