# Research prompt: Milwaukee venues and large crowd events

Drafted Oct 11, 2026, Codex. Kylie approved Milwaukee plus its surrounding metro and preparation of the two research prompts (Oct 11, 2026). The precise outer boundary remains a research recommendation for her review. This is research preparation, not approval to add venues or change the app.

Copy the brief below into a research model. Save the full answer beside this prompt as `milwaukee-venue-table-answer.md` (a second model's answer takes a `-claude` or `-codex` suffix). Keep the prompt next to its answer until the answer has been reviewed and folded into decisions; the documentation hook handles archiving later.

---

## Delivery
Deliver a downloadable Markdown file named `milwaukee-venue-table-answer.md`, using headings, pipe tables and inline source links. If file creation is unavailable, provide complete plain Markdown in chat, continuing at clean breaks as needed. Do not substitute a PDF or a summary for the full answer.

## Purpose and thresholds
Fan/Friction is a personal log of live sports and concerts, with a friction read from public event schedules and overlapping crowds. Research Milwaukee so it can join the existing city system without hand-tuning rules for this city.

Anything can be logged by hand. Events around **1,000+** are pre-listed; only events of **5,000+** feed friction. Include public event venues with at least one setup around 1,000 or more. A building's size is not evidence that a particular event attracts that crowd. Small rooms belong in listings and on the map, muted, without their own friction label.

## Boundary
Start with Milwaukee and its surrounding metro. Use Milwaukee, Waukesha, Ozaukee and Washington counties as a **working search area**, not a locked inclusion rule. Recommend the final boundary from commuting, audience catchment and shared event travel evidence. Identify any useful edge cases separately, including the Racine/Kenosha corridor. Do not automatically include Madison, Green Bay, Chicago or distant Wisconsin destination venues.

Explain proposed additions or exclusions with sources. Keep both briefs on the same boundary and distinguish regional audience overlap from crowds actually sharing roads. Do not stretch the area merely to include a famous building.

## Search coverage
Enumerate the area; examples below are **unverified search leads**, not an exhaustive list or claims about current names, capacity, operation or tenants:

- Major league buildings: the Brewers' ballpark and the Bucks' arena.
- Other sports: Admirals and Wave homes; Marquette and UW–Milwaukee men's and women's programs; other public college, minor-league and independent venues meeting the listing threshold. Include shared and former home buildings where relevant since 2016.
- Concerts and theater: the Summerfest campus and its distinct performance spaces, the Rave/Eagles Club complex, Riverside, Pabst, Turner Hall, Miller High Life Theatre, the Wisconsin State Fair site and regional outdoor rooms.
- Search beyond those examples for theaters, arenas, amphitheaters, ballparks and seasonal spaces around 1,000+, including standing configurations.
- Search separately for festivals, fairs, convention events, races, parades and other large crowd dates without a fixed-capacity room.

## Table A: fixed venues and distinct rooms
Give one row per distinct room or building, sorted largest first. For a multi-room campus, show parent site and room relationship so simultaneous shows can be matched without duplicating a crowd.

| Field | Required detail |
|---|---|
| Current name and aliases | Official name as of research date, ticketing/feed names, earlier names since 2016 and rename dates |
| Place and scope | Neighborhood, municipality and county; core or proposed edge inclusion |
| Coordinates | Decimal latitude and longitude at the building; map/source link and precision; verify against OpenStreetMap when available |
| Capacity by setup | Every supported sport, concert end-stage, in-the-round, seated and standing configuration; source and official/reported/estimated label for each figure |
| Historical capacity | Changes since 2016 with effective dates; separate standing admission from seats |
| Roof and season | Indoor, open-air, covered or retractable; seasonal operating limits |
| Tenants | Current teams and programs, men/women separately; dated former homes |
| Public schedules | Official calendar and ticketing links; MLB/ESPN/Ticketmaster coverage if verified, otherwise unknown; exact source venue names and IDs only if verified |
| Crowd evidence | Published attendance or concert averages, if available, separate from capacity; no invented sellout assumption |
| Access | Sourced site constraints, parking and shared approaches; descriptive evidence, not a manual hard-access flag |
| Status | Active, closed, planned or temporary; opening/closing dates and announced changes through 2028 |
| As of and sources | Research date and linked evidence for each fact, not a single unspecific citation for a whole row |

Do not merge neighboring rooms just because they share a ticketing name. Call out package listings, parking tickets, suites and other listings that could duplicate an event. Verify any ambiguity between stadium concerts and a smaller stage on the same grounds.

## Table B: open sites and event-specific crowds
Festival grounds, convention halls and open sites without a meaningful fixed event capacity are **not fixed venue rows**. List their events separately with coordinates, official schedule links, dates, daily crowd or simultaneous crowd evidence, attendance kind and source.

Investigate Summerfest and other major Milwaukee festivals, the Wisconsin State Fair, major convention events and large street or race events. Verify each lead's current status and dates. Separate a fixed amphitheater from the surrounding festival grounds. Explain how to avoid counting its audience twice. Multi-day totals, turnstile visits and peak concurrent attendance measure different things: name the measure, never divide a total into equal days without evidence. If no defensible crowd exists, leave that crowd field unknown.

## Evidence rules
Use publicly available sources, preferring venues, teams, leagues, public planning documents and official event organizers. Link directly to supporting pages. Date every figure and distinguish confirmed announcements from proposals. Do not bypass an inaccessible source; identify the gap.

Reconcile small differences with judgment: give the sensible selected figure and its basis; retain materially different setups or definitions. Leave a field unknown only when evidence is missing or the conflict changes the answer. Label capacity evidence official/reported/estimated; label attendance announced/reported/estimated. Do not convert capacity into observed attendance.

## End with
1. Boundary recommendation and disputed edge venues.
2. Rooms around 1,000 or 5,000 whose classification needs care, and smaller rooms considered but excluded.
3. Teams/programs and their actual current home venues; verified feed coverage and gaps.
4. Unconfirmed fields, conflicting names, duplicate risks and inaccessible sources.
5. Announced openings, closures, renames and capacity changes through 2028.

Do not add app code, hand ratings or propose formula constants. Supply evidence for review.
