# Research prompt: every Dallas–Fort Worth venue of 5,000 or more, with capacity by setup

Copy everything below the line into a research model. Save the answer in full as `docs/archive/research/dallas-fort-worth-venue-table-answer.md` and paste it to Claude to check and fold into `src/data/venues.ts`. Drafted Oct 7, 2026, from the New York prompt; Dallas–Fort Worth is fourth on `docs/new-city-checklist.md` by Kylie's Oct 7 order (Atlanta, Bay Area, Chicago, Dallas–Fort Worth, Montreal). Scope, as before: 5,000+ only.

Boundary: Claude's reading of the next-cities research (`docs/archive/research/next-cities-research-answer.md`): the DFW–Arlington core. Kylie has not set it by hand; say so if a building just outside belongs in. The region is the largest venue table yet (the research estimated ~20 rooms).

**This answer may be used months after it is written.** Date every figure ("as of Oct 2026"), and list anything scheduled to open, close, rename or change capacity through 2028, with dates. Live ones: the Wings' move to Dallas Memorial Arena (2026), Toyota Stadium's renovation, the Mavericks' arena plans, the 2026 World Cup at AT&T Stadium.

---

## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/archive/research/dallas-fort-worth-venue-table-answer.md`**. Do not make it a PDF, a Word file or a rendered page that can only be saved as a PDF. Inside the file use Markdown headings, pipe tables (`| a | b |`) and inline links. If you cannot create a file, reply in plain Markdown text in the chat instead, and if that is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: Dallas–Fort Worth venues that hold 5,000 or more

## What this is for
Fan/Friction is a personal log of live sports and concerts, with a "friction" read computed for each night from public schedules: how many big events share a date, how close their start times are, and whether their crowds hit the same roads. The read sizes each event by its building, so the app keeps its own capacity table. Only rooms of about **5,000 or more** feed the read, so that is the list I need for Dallas–Fort Worth: complete, with capacity **by setup**, and with sources.

A missing building makes a busy night look quiet. A wrong capacity makes an event look bigger or smaller than it was. Completeness first, then accuracy, then polish.

## Boundaries
**Dallas, Fort Worth, Arlington, Grand Prairie, Irving, Frisco, Plano, Allen, Denton** and the rest of Dallas, Tarrant, Collin and Denton counties. Leave out Waco, Oklahoma, Tyler and Austin. Say so if you'd move the line.

## What counts
Every venue that holds **about 5,000 or more people in at least one setup** and hosts public ticketed or free events. Categories, with examples — **the examples are not the list; enumerate the boundary and add what they miss**:

- **Stadiums and ballparks:** AT&T Stadium (Cowboys; the seated figure, the standing-room expansion, and the 2026 World Cup figure), Globe Life Field (Rangers; opened 2020; retractable roof), Choctaw Stadium (Globe Life Park until 2020; the Rangers' old park, now ~25,000 for the Renegades, Dallas Trinity FC and concerts; give the old and new figures), the Cotton Bowl (Red River Showdown, the State Fair Classic, and any soccer figures), Toyota Stadium in Frisco (FC Dallas; before and after the 2025–2026 renovation), Amon G. Carter Stadium (TCU), Gerald J. Ford Stadium (SMU), DATCU Stadium (UNT; Apogee Stadium until 2023), Riders Field (Frisco RoughRiders; Dr Pepper Ballpark until 2021), Globe Life, Texas Motor Speedway (Fort Worth; its reduced grandstand figure and race dates).
- **Arenas:** American Airlines Center (Mavericks and Stars; basketball, hockey and concert figures, and the Mavericks' stated plans to leave), Dickies Arena (Fort Worth; opened 2019; the Stock Show rodeo figure separately), **Dallas Memorial Arena** (the Wings from 2026; part of the Kay Bailey Hutchison Convention Center; give the arena's figure and the convention center's status, since the center is being rebuilt), College Park Center (Arlington; the Wings' home through 2025), Comerica Center (Frisco; Stars practice, concerts), Credit Union of Texas Event Center (Allen; Allen Event Center until 2023), Fair Park Coliseum, Moody Coliseum (SMU), Schollmaier Arena (TCU), the UNT Coliseum (the Super Pit), Will Rogers Coliseum (Fort Worth), the Curtis Culwell Center (Garland), Ford Center at The Star (Frisco; Cowboys practice; around the bar).
- **Amphitheaters and outdoor concert venues:** Dos Equis Pavilion at Fair Park (Starplex, then Gexa, then Dos Equis; give the names and dates), the Pavilion at Toyota Music Factory (Irving; indoor and open-air figures), the Panther Island Pavilion (Fort Worth; around the bar), Billy Bob's Texas (under; say so), the Bomb Factory and South Side Ballroom (under; near-the-line section).
- **Fairgrounds:** **Fair Park and the State Fair of Texas** (24 days each fall; daily attendance, the Cotton Bowl games inside it, and whether you'd treat the fair as a daily event for a crowd read), the Fort Worth Stock Show grounds (Will Rogers Memorial Center, with Dickies Arena).
- **Convention centers:** the Kay Bailey Hutchison Convention Center (Dallas; its rebuild timeline), the Fort Worth Convention Center (its expansion), the Irving Convention Center. **Give per-day attendance for their biggest events and say whether you would treat any as a venue for a crowd read.**
- **College venues of 5,000+:** TCU, SMU, UNT, UT Arlington (College Park Center), Dallas Baptist (under; say so).
- **Racetracks:** Lone Star Park (Grand Prairie; grandstand figure and racing dates), Texas Motor Speedway.

Leave out: rooms under 5,000 in every setup; private spaces; buildings demolished or closed before 2016 except as history inside a current row (Reunion Arena and Texas Stadium are history).

**Not venues, but tell us the dates:** the Dallas Marathon, the Cowtown Marathon, the Fort Worth Stock Show parade, Dallas Pride, Main Street Arts Festival, the Red River Showdown weekend (the game is at the Cotton Bowl inside the running State Fair, a double crowd), Thanksgiving at AT&T Stadium, and the 2026 World Cup dates at AT&T. List them separately with dates and crowd estimates.

## For each venue
| Field | What I need |
|---|---|
| Name today | Official name in 2026 |
| Earlier names | Every name since 2016, each with the date it changed |
| City or neighborhood | City and county |
| Coordinates | Decimal latitude and longitude of the building |
| Capacity by setup | A number for each setup the venue actually uses: baseball, football, soccer, basketball, hockey, rodeo, concert (end-stage), festival or in-the-round, and anything else. If a figure changed since 2016, give old and new with the year. |
| Roof | Open-air, covered, **retractable** (AT&T Stadium and Globe Life Field both; this is the main reason the region is on the list, since the heat rule needs to know whether the roof was closed), or indoor |
| Site access | Whether it is a single-road or otherwise constrained site. Arlington's entertainment district (two stadiums, one road grid, no rail) is the one to think hardest about. A yes/no and one sentence. |
| Home teams or regular tenants | Including shared tenancies (Mavericks and Stars; the Cotton Bowl's rotating games) |
| As of | The date the figure was true, and anything scheduled to change it through 2028 |
| Source for each capacity | A link. Prefer the venue's own site, the team's media guide, or the league. |

## Rules
- **Label every number.** Official, reported, or estimated. Never a bare number.
- **Where sources disagree, give both** and say which you'd use and why. Known traps: AT&T Stadium 80,000 seated vs 100,000+ with standing room vs the record 105,121; Globe Life Field 40,300 vs 40,518; American Airlines Center 19,200 basketball vs 18,532 hockey vs ~20,000 concert; the Cotton Bowl 92,100 vs 92,000 vs smaller soccer figures; Toyota Stadium 20,500 vs 19,096 vs the post-renovation figure; Dos Equis Pavilion 20,111 vs 20,000; Dickies Arena 14,000 vs 13,300 for hockey vs 9,300 rodeo.
- Note **standing-room or festival** figures separately from seated ones.
- Say which venues you **could not confirm** rather than guessing.

## What the app already has (check it)
Nothing. Dallas–Fort Worth is not in the app today.

## Output
In the .md file: one table, one row per venue, sorted by capacity, largest first, with the columns above. Then:
1. Near-the-line venues you left out and why (4,000–5,000 rooms).
2. Anything you could not confirm.
3. The big crowd dates with no building, and the State Fair's daily figures.
4. Your answer on the convention centers and on the State Fair as a daily event.
5. Everything scheduled to open, close, rename or change through 2028.

Tables beat prose. Links for every capacity.
