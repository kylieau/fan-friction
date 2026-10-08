# Research prompt: every Bay Area venue of 5,000 or more, with capacity by setup

Copy everything below the line into a research model. Save the answer in full as `docs/archive/research/bay-area-venue-table-answer.md` and paste it to Claude to check and fold into `src/data/venues.ts`. Drafted Oct 7, 2026, from the New York prompt; the Bay Area is second on `docs/new-city-checklist.md` by Kylie's Oct 7 order (Atlanta, Bay Area, Chicago, Dallas–Fort Worth, Montreal). Scope, as before: 5,000+ only.

Boundary: **one metro**, as the next-cities research recommended (`docs/archive/research/next-cities-research-answer.md` §3): San Francisco, the East Bay, the Peninsula and the South Bay together, Sacramento separate. The point of one metro is to expose the distance flaw (a Giants game and a Stanford game an hour apart count as one crowd today), so do not split it.

**This answer may be used months after it is written.** Date every figure ("as of Oct 2026"), and list anything scheduled to open, close, rename or change capacity through 2028, with dates. The Bay Area has more of this in motion than any covered city: the Coliseum sale, the Roots' lease, the A's in Sacramento, the Warriors' and Valkyries' calendar at Chase.

---

## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/archive/research/bay-area-venue-table-answer.md`**. Do not make it a PDF, a Word file or a rendered page that can only be saved as a PDF. Inside the file use Markdown headings, pipe tables (`| a | b |`) and inline links. If you cannot create a file, reply in plain Markdown text in the chat instead, and if that is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: Bay Area venues that hold 5,000 or more

## What this is for
Fan/Friction is a personal log of live sports and concerts, with a "friction" read computed for each night from public schedules: how many big events share a date, how close their start times are, and whether their crowds hit the same roads. The read sizes each event by its building, so the app keeps its own capacity table. Only rooms of about **5,000 or more** feed the read, so that is the list I need for the Bay Area: complete, with capacity **by setup**, and with sources.

A missing building makes a busy night look quiet. A wrong capacity makes an event look bigger or smaller than it was. Completeness first, then accuracy, then polish.

## Boundaries
**San Francisco; the East Bay** (Alameda and Contra Costa counties: Oakland, Berkeley, Concord); **the Peninsula** (San Mateo County, Stanford, Mountain View); **the South Bay** (Santa Clara County: Santa Clara, San Jose). Leave out Sacramento (the A's temporary home; a separate metro later), Napa and Sonoma (BottleRock and Sonoma Raceway are worth a line in the "outside the line" list with their crowd figures, not a row), Santa Cruz and Monterey. Say so if you'd move the line.

## What counts
Every venue that holds **about 5,000 or more people in at least one setup** and hosts public ticketed or free events. Categories, with examples — **the examples are not the list; enumerate the boundary and add what they miss**:

- **Stadiums and ballparks:** Oracle Park (AT&T Park until 2019; one row), Levi's Stadium (49ers; the standard figure and the expanded one, and whether the 2026 World Cup changed anything), the Oakland Coliseum (RingCentral Coliseum until the name lapsed; give the A's-era tarped figure, the untarped one, the football one, and **its 2026 status**: the Roots' lease, the site sale, the Ballers), PayPal Park (Avaya Stadium until 2021; Earthquakes and Bay FC), California Memorial Stadium (Cal; the post-2012 figure), Stanford Stadium, CEFCU Stadium (Spartan Stadium until 2016; San José State), Kezar Stadium (around the bar; say which side), Raimondi Park (Oakland Ballers; under; say so), Excite Ballpark (San Jose Giants; under; say so).
- **Arenas:** Chase Center (Warriors and Valkyries; basketball and concert figures), SAP Center (Sharks; hockey and concert), Oakland Arena (Oracle Arena until 2019; no tenant now, so say what it still hosts), the Cow Palace (Daly City; its status and what it hosts), Haas Pavilion (Cal), Maples Pavilion (Stanford), Provident Credit Union Event Center (San José State; around the bar), Bill Graham Civic Auditorium (standing and seated figures), the Event Center at San José State.
- **Amphitheaters and outdoor concert venues:** Shoreline Amphitheatre (Mountain View), Concord Pavilion (Toyota Pavilion at Concord; give the sponsor names and dates), the Greek Theatre (Berkeley), Frost Amphitheater (Stanford), Stern Grove (free concerts; around the bar), the Mountain Winery (under; say so), the Fox Theater Oakland and the Warfield (under; near-the-line section).
- **Festival grounds:** Golden Gate Park's Polo Field and Hellman Hollow (Outside Lands, Hardly Strictly Bluegrass), Civic Center Plaza, Lake Merritt, Discovery Meadow and Downtown San José (SAP Center's neighbor), Treasure Island (its festival history and current status).
- **Convention centers:** Moscone Center (Dreamforce, Game Developers Conference) and the San Jose McEnery Convention Center (FanimeCon). **Give per-day attendance for their biggest events and say whether you would treat either as a venue for a crowd read.**
- **College venues of 5,000+:** Cal, Stanford, San José State, Saint Mary's (UCU Pavilion; around the bar), Santa Clara (Leavey Center; around the bar), USF (War Memorial; under).
- **Racetracks and motorsport:** Golden Gate Fields (closed 2024; history only), Sonoma Raceway (outside the line; a line in that list).

Leave out: rooms under 5,000 in every setup; private spaces; buildings demolished or closed before 2016 except as history inside a current row (Candlestick Park is history).

**Not venues, but tell us the dates:** Bay to Breakers, the San Francisco Marathon, Pride, Fleet Week (the air show over the Marina), Chinese New Year Parade, the Oakland Running Festival, and the 2026 World Cup dates at Levi's. List them separately with dates and crowd estimates.

## For each venue
| Field | What I need |
|---|---|
| Name today | Official name in 2026 |
| Earlier names | Every name since 2016, each with the date it changed |
| City or neighborhood | City, neighborhood and county |
| Coordinates | Decimal latitude and longitude of the building |
| Capacity by setup | A number for each setup the venue actually uses: baseball, football, soccer, basketball, hockey, concert (end-stage), festival or in-the-round, and anything else. If a figure changed since 2016, give old and new with the year. |
| Roof | Open-air, covered, retractable, or indoor |
| Site access | Whether it is a single-road, waterfront, island or bridge-dependent site. Treasure Island, Shoreline (one road off 101), the Coliseum and Levi's are the ones to think hardest about. A yes/no and one sentence. |
| Home teams or regular tenants | Including shared tenancies (Warriors and Valkyries; Earthquakes and Bay FC) |
| As of | The date the figure was true, and anything scheduled to change it through 2028 |
| Source for each capacity | A link. Prefer the venue's own site, the team's media guide, or the league. |

## Rules
- **Label every number.** Official, reported, or estimated. Never a bare number.
- **Where sources disagree, give both** and say which you'd use and why. Known traps: Levi's 68,500 vs 75,000 expanded; Oracle Park 41,915 vs 41,331; SAP Center 17,562 hockey vs 17,435 vs ~19,000 concert; the Coliseum 46,847 tarped vs 56,782 vs 63,132 football; Chase Center 18,064 basketball vs its concert figure; Memorial Stadium 62,467 vs the pre-2012 figure; Bill Graham 8,500 standing vs ~7,000 seated; Shoreline 22,500 vs 22,000.
- Note **standing-room or festival** figures separately from seated ones. The Polo Field has no seats at all.
- Say which venues you **could not confirm** rather than guessing.

## What the app already has (check it)
Nothing. The Bay Area is not in the app today.

## Output
In the .md file: one table, one row per venue, sorted by capacity, largest first, with the columns above. Then:
1. Near-the-line venues you left out and why (4,000–5,000 rooms).
2. Anything you could not confirm.
3. The big crowd dates with no building.
4. Your answer on Moscone and the San Jose convention center.
5. Everything scheduled to open, close, rename or change through 2028 (the Coliseum and the Roots first).

Tables beat prose. Links for every capacity.
