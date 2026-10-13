# Research prompt: every Seattle venue of 5,000 or more, with capacity by setup

Copy everything below the line into a research model. Paste the answer back to Claude to check and fold into `src/data/venues.ts`. Drafted Oct 6, 2026, from the Los Angeles and San Diego prompts; Seattle is the next city on `docs/reference/new-city-checklist.md`. Scope, as before: 5,000+ only.

---

## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/research/city-builds/seattle/seattle-venue-table-answer.md`**. Do not make it a PDF, a Word file or a rendered page that can only be saved as a PDF. Inside the file use Markdown headings, pipe tables (`| a | b |`) and inline links. If you cannot create a file, reply in plain Markdown text in the chat instead, and if that is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: Seattle venues that hold 5,000 or more

## What this is for
Fan/Friction is a personal log of live sports and concerts, with a "friction" read computed for each night from public schedules: how many big events share a date, how close their start times are, and whether their crowds hit the same roads. The read sizes each event by its building, so the app keeps its own capacity table. Only rooms of about **5,000 or more** feed the read, so that is the list I need for Seattle: complete, with capacity **by setup** (an arena holds a different number for basketball, hockey or a concert), and with sources.

A missing building makes a busy night look quiet. A wrong capacity makes an event look bigger or smaller than it was. Completeness first, then accuracy, then polish.

## Boundaries
**King, Snohomish and Pierce counties**: Seattle, Bellevue, Redmond, Kent, Auburn, Tacoma, Everett, Puyallup. Include **the Gorge Amphitheatre** in George, WA as a satellite (Seattle's festival ground, three hours out), the way the Los Angeles table includes Coachella's polo grounds. Leave out Portland and Vancouver.

## What counts
Every venue that holds **about 5,000 or more people in at least one setup**, and that hosts public ticketed or free events:
- Stadiums and ballparks: Lumen Field (include CenturyLink Field and its rename date), T-Mobile Park (Safeco Field), Husky Stadium.
- Arenas: Climate Pledge Arena (KeyArena, with the 2018–2021 rebuild and the capacity change), Alaska Airlines Arena at Hec Edmundson Pavilion, angel of the winds Arena in Everett (Xfinity Arena), Tacoma Dome, ShoWare Center in Kent (accesso ShoWare Center), the Pacific Coliseum is Vancouver so leave it out.
- Amphitheaters and outdoor concert venues: the Gorge, White River Amphitheatre (Auburn), Marymoor Park concerts (Redmond), Chateau Ste. Michelle if it reaches the bar (it may not; say so), Remlinger Farms, Woodland Park Zoo's ZooTunes (under the bar; say so).
- Theaters of 5,000+: WaMu Theater at Lumen Field Event Center, the Paramount (under; say so).
- College venues of 5,000+: UW's, Seattle U's (Climate Pledge for some games), Pacific Lutheran and Puget Sound if any reach the bar.
- Fairgrounds and festival grounds: Washington State Fair in Puyallup (grandstand concerts), Seattle Center grounds (Bumbershoot), the Gorge's campgrounds, Marymoor.
- Minor-league grounds of 5,000+: Cheney Stadium (Tacoma Rainiers), Funko Field (Everett AquaSox), Starfire Sports if it reaches the bar.

Leave out: rooms under 5,000 in every setup; private spaces; buildings demolished before 2016 (but include KeyArena's history inside Climate Pledge Arena's row).

## For each venue
| Field | What I need |
|---|---|
| Name today | Official name in 2026 |
| Earlier names | Every name since 2016, each with the date it changed. The app matches old names to current ones. |
| City or neighborhood | |
| Coordinates | Decimal latitude and longitude of the building |
| Capacity by setup | A number for each setup the venue actually uses: baseball, football, soccer, basketball, hockey, concert (end-stage), festival or in-the-round, and anything else. If a figure changed since 2016, give old and new with the year. |
| Roof | Open-air, covered (roof but open sides), retractable, or indoor. T-Mobile Park's retractable roof matters for the weather rule. |
| Site access | Whether it is a single-road or hillside site that is always harder to get in and out of. A yes/no and one sentence. |
| Home teams or regular tenants | |
| Source for each capacity | A link. Prefer the venue's own site, the team's media guide, or the league. Wikipedia is fine as a pointer but cite where its number came from. |

## Rules
- **Label every number.** Official (the venue or team says so), reported (a reputable outlet), or estimated (your best figure when nothing official exists). Never give a bare number.
- **Where sources disagree, give both** and say which you'd use and why. Known traps: Lumen Field 68,740 vs 69,000 vs 72,000 (expanded); Climate Pledge Arena 17,100 hockey vs 18,100 basketball vs 17,200 concert; T-Mobile Park 47,929 vs 47,943; the Gorge 20,000 vs 27,500.
- Note **standing-room or festival** figures separately from seated ones.
- Say which venues you **could not confirm** rather than guessing.

## What the app already has (check it)
T-Mobile Park 47,929 baseball (listed). Confirm or correct, with the source.

## Gaps from the first 26 city builds (answer every item)

These came out of the first 26 city builds (Oct 2026). Each one cost a city something when the research skipped it. Give a source link for every fact. If you can't find a source, write "gap" and say what you searched. Never make up a number.

Fill in the city-specific leads in brackets when you copy this prompt for a new city.

1. **Name and code.** The display name for [city], a short form, and a three-letter code. List which cities and suburbs it covers. Tampa Bay is the precedent: locals and every team say "Tampa Bay" and it covers St. Pete and Clearwater, so the name changed while the code stayed TPA.
2. **Capacity: one sourced figure per setup.** A range on its own ("1,300–3,000") or a figure from a resale site isn't enough. Mark it as a gap. When sources disagree, list them side by side with links and say what each one measures. Never invent a figure.
3. **Rooms around 5,000.** For each room between about 4,500 and 5,500, give its sourced figure. Each room counts on that figure alone, so 4,774 stays under the line and 5,000 counts.
4. **Ticketmaster venue ID for every concert room**, checked against the Ticketmaster venue page or Discovery API (give the link). If a room has no ID, the city ships with no concerts there. Say which rooms you couldn't verify.
5. **Every team** ([teams]; verify, and add any missed): league, home venue by date, and whether a free schedule feed covers it (ESPN, MLB Stats API, or a league site). List the teams that have no feed.
6. **Games away from the home venue.** Neutral-site, international and relocated home games (for example the Saints' Oct 25, 2026 Paris game, or Cardinals road games stored as the wrong team), with dates and the actual site, so none get placed at the home venue.
7. **Postseason and past crowds.** Postseason games and announced attendance per team for recent seasons, plus past announced crowds for each team's regular season (box scores or league pages). Tampa Bay is the precedent: the feeds returned no counts, so the city had no crowd history.
8. **Open-site events** ([festivals, marathons, parades]): dates, place, and any sizing source with the count type. If nobody publishes a size, list the event for the unsized list. Don't estimate one.
9. **Team colors.** Primary and secondary hex colors for every team, from an official team or league brand source.

**Build rules (for whoever turns this answer into app data; put these in the answer as notes):**
- Every venue ID and team ID must be unique across all cities. Check for collisions: `giants`, `jets`, `rangers`, `kings` and `cardinals` were already taken, so add a city prefix.
- Don't make a separate per-city opponents file. Opponent draws go into `expectedDrawIndex` like every other city.
- Never guess a capacity. A missing or range-only figure stays blank and goes on the city gaps list.
- Car shares: wire measured ones; wire sourced estimates marked estimated; leave the rest on the city default.

## Output
In the .md file: one table, one row per venue, sorted by capacity, largest first, with the columns above. Then a short list of near-the-line venues you left out and why (4,000–5,000 rooms), and a list of anything you could not confirm. Tables beat prose. Links for every capacity.
