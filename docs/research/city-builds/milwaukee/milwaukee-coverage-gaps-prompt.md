# Research prompt: Milwaukee coverage gaps — open sites and school gyms

Drafted Oct 11, 2026 · Codex. This brief follows the approved initial Milwaukee build. Its findings may be incorporated where they meet the existing evidence threshold; do not invent attendance, schedules, feeds or coordinates.

When running this prompt, attach the Milwaukee implementation register and both original venue-table answers. Save each full answer beside this prompt as `milwaukee-coverage-gaps-answer-<model>.md` (for example, `milwaukee-coverage-gaps-answer-claude.md` or `milwaukee-coverage-gaps-answer-codex.md`). Preserve each complete answer for comparison.

---

## Delivery

Deliver a downloadable Markdown file named `milwaukee-coverage-gaps-answer-<model>.md`, with headings, pipe tables and direct inline source links. If file creation is unavailable, provide complete plain Markdown in chat. Do not replace it with a PDF or summary.

## Purpose and existing limits

Fan/Friction is a personal log of live sports and concerts. Its friction read estimates pressure from overlapping event crowds; it does not provide navigation or live traffic. Public schedules drive pre-listings. Events around 1,000 attendees are the working listing threshold; only events around 5,000 or more affect friction. A room's capacity does not establish the crowd at a particular event.

The approved first build covers Milwaukee, Waukesha, Ozaukee and Washington counties. Racine/Kenosha are edge cases for context only; do not expand the build into them. Do not add distant destination venues. The implementation register contains 38 selected rooms and known exclusions. The Codex venue answer identified 57 school-gym candidates that were not activated because the exact room, point, schedule or availability was uncertain. Flexible festival, fair, convention and open-site crowds also need event-specific evidence. This research should resolve those gaps without repeating already verified rows.

## Questions to answer

1. Which of the 57 school-gym candidates are identifiable, active competition rooms with a public schedule and an event setup around 1,000 or more? Account for every candidate in the attached Codex answer. A school name alone is not a room. Separate a verified room, a candidate needing more evidence and a researched exclusion. Do not infer a crowd from listed seats.
2. Which recurring events at Milwaukee-area festival grounds, fairs, convention sites, race or parade routes, and other flexible open spaces have a verifiable event-specific footprint and public crowd evidence? Prioritize large dates and overlapping concurrent crowds. Reconcile against the attached answers and register; do not repeat events already represented adequately.
3. For every recommended new candidate, is there enough evidence to identify the exact room or event, its location, its current status and the crowd measure? Recommend “add for listings,” “add only as a dated event,” “keep excluded,” or “unknown,” with reasons. These are research recommendations, not changes to the app.

## Tables

### Fixed rooms, including school gyms

One row per distinct room. Include all 57 gym leads in an accounting table, even when the outcome is exclusion or unresolved.

| Field | Required detail |
|---|---|
| Candidate and recommendation | Current room name, school/operator, municipality and county; add for listings, keep excluded or unknown |
| Exact room and location | Building/room identity; decimal coordinates and their source; say when only a campus point is available |
| Capacity and setup | Verified setup-specific capacity, source date and official/reported/estimated status; do not treat seating capacity as attendance |
| Public use | Current official schedule, actual event types and evidence of public access; distinguish team practice from a ticketed/public event |
| Crowd evidence | Dated reported or announced attendance for representative events, if available; identify the measure and denominator |
| Schedule coverage | Official calendar and any verified existing feed; never guess an adapter or source ID |
| Decision and uncertainty | Why it clears or fails the listing threshold; what evidence is missing |
| Sources | Direct links beside each claim |

### Flexible sites and dated events

Do not make these generic fixed-capacity venue rows unless a distinct permanent room has a supported capacity. One row per event/date/setup:

| Field | Required detail |
|---|---|
| Event and date | Verified current name, date(s), organizer and status |
| Footprint | Mappable site, route or stage; separate stages or simultaneous events when their crowds can overlap |
| Crowd | Exact announced/reported/estimated measure, number, source date and method; distinguish daily attendance, peak concurrent attendance, ticket scans, tickets sold and multi-day totals |
| Repeat schedule | Public official calendar or evidence that this event recurs; do not infer next year's date |
| Friction relevance | Whether a defensible individual crowd reaches the approximate 5,000 threshold; never turn a weekend total into one concurrent crowd |
| Recommendation | Dated event candidate, fixed-room candidate, exclude or unknown |
| Sources and gaps | Direct links and unresolved conflicts |

Include relevant leads from the attached reports, such as the State Fair, Summerfest grounds and its separate stages, county fair/Expo sites, convention events, street festivals and large races. Verify each lead before including it; this is not an instruction to list every event in the metro.

## Research rules

- Use public sources only. Prefer venue, school, league, government, organizer and planning documents. Search official schedules, facility rental specifications, site maps, post-event reports and public attendance reports.
- Use the four-county area above. Identify edge cases separately without recommending a boundary expansion.
- Label each numeric crowd as announced, reported or estimated, and link the method. Capacity, tickets sold, entry scans, unique attendees, traffic counts and transit boardings measure different things.
- For estimates, give assumptions, range and confidence. If the public evidence cannot support a defensible figure, say unknown.
- Distinguish projects that are open, funded/scheduled, proposed and speculative through 2028. Cite effective dates; do not describe proposals as committed work.
- If a page is inaccessible through normal means, report that and continue with other public evidence. Do not bypass access controls.
- Do not research attendee mode shares for this prompt. Do not propose car-share overrides, new formula values, hand flags, code, personal ratings or cost commitments.

## End with

1. A complete disposition of the 57 school-gym candidates and the strongest evidence for any that qualify.
2. A concise list of flexible-site events with defensible dates, footprints and crowd measures, separating fixed rooms from event-only crowds.
3. The recommended additions and the entries that remain unresolved or excluded, with concrete evidence gaps.
4. Any material disagreement with the existing Milwaukee reports/register and any changes confirmed through 2028, clearly separating scheduled work from proposals.

Keep the output evidence-led. An empty attendance field is better than a capacity or cumulative total presented as an event crowd.
