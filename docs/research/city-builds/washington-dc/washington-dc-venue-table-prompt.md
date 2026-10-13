# Research prompt: Washington, DC venue and major-event table

Drafted Oct 12, 2026 (America/Los_Angeles) as part of the additional ten-city research batch. Research only: this does not approve a city build, venue inclusion, or a formula change.

Copy the brief below into a research model. Save the full answer beside this prompt as `washington-dc-venue-table-answer.md`; a second model's answer may use `-claude` or `-codex` before `.md`. Companion research: [Washington, DC event-travel and city-type prompt](washington-dc-city-type-prompt.md). Keep prompts and answers together.

---

## Delivery
Deliver a downloadable Markdown file named `washington-dc-venue-table-answer.md`, using headings, pipe tables, and inline links. If unavailable, provide complete Markdown in chat. Do not provide a PDF or summary only. Date the answer and link every numeric claim directly to a public source.

## Purpose and thresholds
Fan/Friction is a personal log of live sports and concerts. Anything can be logged by hand; events around 1,000+ are pre-listed; only 5,000+ feed friction. Rooms under about 5,000 may be listed and muted but have no friction label. Venue capacity is not event attendance. This research should fit the existing city model, not redesign it or tune to personal ratings.

## Boundary
Research Washington, DC. Starting boundary: the District of Columbia and its immediate Maryland and Northern Virginia event suburbs; assess Prince George's, Montgomery, Arlington, Alexandria, Fairfax and Loudoun separately. Baltimore is a separate candidate, not automatically part of this scope. This is a working search area, not a locked boundary. Recommend final scope with sourced reasoning about the metro and event catchment. Separate useful edge cases and do not automatically include distant destinations because they share a state, province or marketing label.

## Search coverage and leads
Enumerate every active fixed public venue with at least one room or setup around 1,000+; prioritize all 5,000+ setups. Check the entire boundary, including university, minor-league, women’s, independent, motorsport, fair, concert and theatre venues that meet the threshold. Search for venue changes, temporary homes, renamed rooms and openings through 2028. Starting leads are unverified; confirm current name, activity, location, tenant, configuration and scope: Capital One Arena; Nationals Park; Audi Field; CareFirst Arena; the Commanders' actual dated home and any proposed replacement; George Mason, Georgetown and Maryland university venues; Merriweather Post Pavilion and Wolf Trap as boundary cases; conventions, festivals and National Mall events. Verify disputed boundaries and each room's identity before treating it as part of this metro. Verify local teams, capacities, ticketing and feed coverage; do not treat leads as confirmed findings.

Also list major event-specific crowds at festivals, fairs, races, parades, conventions, open grounds and stadium districts. These are event records, not fixed-capacity rooms. Separate them from buildings. Distinguish daily attendance, multi-day totals, ticket scans and peak simultaneous crowds; do not convert one measure into another without evidence.

## Table A — fixed venues and rooms
One row per distinct room/building, largest capacities first. For multi-room grounds, make parent/room relationships clear enough to avoid duplicate events. Include: current official name and aliases since 2016 with rename dates; neighborhood/municipality and recommended scope; decimal coordinates and source precision; capacity by each actual sport/concert/seating/standing configuration with source and official/reported/estimated label; dated capacity changes; roof type; current/former tenants by date; official schedule links and verified feed/listing coverage or unknown; observed attendance if published (separate from capacity); access and parking facts; status/opening/closure/temporary-home changes through 2028; as-of date and direct source for each material fact.

Do not combine alternative setups, count movable standing layouts as seated capacity, infer attendance from capacity, or merge neighboring rooms because a ticketing platform groups them. Flag suite, parking, package, duplicate-ground, and small-stage listings that could double-count an event. For stadiums with a separate park/stage or complex, distinguish building from grounds.

## Table B — open sites and dated crowd events
For each major event without a meaningful fixed-room capacity: event name, organizer, exact date(s), map point/footprint, daily and peak-concurrent counts separately if available, count type (announced/reported/estimated), public schedule source, status, and source/method. Give unknown rather than inventing size. Explain overlap/deduplication with fixed rooms on the same grounds.

## Evidence rules
Prefer venue, team, league, government, university, organizer and planning sources. Link each figure to the supporting page and date it. Reconcile small differences by stating what is being measured; preserve conflicts that change classification. If a page cannot be fetched normally, flag it and continue without bypassing access. Treat Ticketmaster/feed matches as verified only when exact room identity is supported; proximity alone may be ambiguous. For international markets, state local naming, time zone, event-calendar, and data-rights issues as factual coverage findings.

## Gaps from the first 26 city builds (answer every item)

These came out of the first 26 city builds (Oct 2026). Each one cost a city something when the research skipped it. Give a source link for every fact. If you can't find a source, write "gap" and say what you searched. Never make up a number.

1. **Name and code.** The display name for Washington, D.C., a short form, and a three-letter code (lead: DC; verify against what local teams and media use). List which cities and suburbs it covers (D.C. plus Northern Virginia and suburban Maryland; say whether Annapolis and Baltimore are out). Tampa Bay is the precedent: locals and every team say "Tampa Bay" and it covers St. Pete and Clearwater, so the name changed while the code stayed TPA.
2. **Capacity: one sourced figure per setup.** A range on its own ("1,300–3,000") or a figure from a resale site isn't enough. Mark it as a gap. When sources disagree, list them side by side with links and say what each one measures. Never invent a figure.
3. **Rooms around 5,000.** For each room between about 4,500 and 5,500, give its sourced figure. Each room counts on that figure alone, so 4,774 stays under the line and 5,000 counts.
4. **Ticketmaster venue ID for every concert room**, checked against the Ticketmaster venue page or Discovery API (give the link). If a room has no ID, the city ships with no concerts there. Say which rooms you couldn't verify.
5. **Every team** (Commanders (NFL), Nationals (MLB), Capitals (NHL), Wizards (NBA), Mystics (WNBA), D.C. United (MLS), Spirit (NWSL), Georgetown, Maryland, George Mason; verify, and add any missed): league, home venue by date, and whether a free schedule feed covers it (ESPN, MLB Stats API, or a league site). List the teams that have no feed.
6. **Games away from the home venue.** Neutral-site, international and relocated home games (leads: Commanders' home by date (Northwest Stadium, any new RFK-site stadium); international games; outdoor NHL games), with dates and the actual site, so none get placed at the home venue.
7. **Postseason and past crowds.** Postseason games and announced attendance per team for recent seasons, plus past announced crowds for each team's regular season (box scores or league pages). Tampa Bay is the precedent: the feeds returned no counts, so the city had no crowd history.
8. **Open-site events** (National Mall events (July 4, inauguration, marches), Marine Corps Marathon, Cherry Blossom Festival): dates, place, and any sizing source with the count type. If nobody publishes a size, list the event for the unsized list. Don't estimate one.
9. **Team colors.** Primary and secondary hex colors for every team, from an official team or league brand source.

**Build rules (for whoever turns this answer into app data; put these in the answer as notes):**
- Every venue ID and team ID must be unique across all cities. Check for collisions: `giants`, `jets`, `rangers`, `kings` and `cardinals` were already taken, so add a city prefix.
- Don't make a separate per-city opponents file. Opponent draws go into `expectedDrawIndex` like every other city.
- Never guess a capacity. A missing or range-only figure stays blank and goes on the city gaps list.
- Car shares: wire measured ones; wire sourced estimates marked estimated; leave the rest on the city default.

## End with
1. Recommended boundary and uncertain edge venues.
2. Complete table, plus rooms around the 1,000/5,000 thresholds whose treatment needs care.
3. Teams/programs, their actual dated home venues, and verified schedule/attendance/ticketing feed coverage and gaps.
4. Open sites/events needing manual dates or a separate crowd record; no invented totals.
5. Conflicting sources, duplicate/matching risks, inaccessible sources, and confirmed changes through 2028 with re-check dates.
6. Every item under "Gaps from the first 26 city builds", answered or marked as a gap.

Use public data only. Do not supply app code, hand-access flags, new formula constants, personal ratings, or cost commitments. Mark proposals separately from confirmed or scheduled changes.
