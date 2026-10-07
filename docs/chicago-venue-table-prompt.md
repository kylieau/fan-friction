# Research prompt: every Chicago venue of 5,000 or more, with capacity by setup

Copy everything below the line into a research model. Save the answer in full as `docs/chicago-venue-table-answer.md` and paste it to Claude to check and fold into `src/data/venues.ts`. Drafted Oct 7, 2026, from the New York prompt; Chicago is third on `docs/new-city-checklist.md` by Kylie's Oct 7 order (Atlanta, Bay Area, Chicago, Dallas–Fort Worth, Montreal). Scope, as before: 5,000+ only.

Boundary: Claude's reading of the next-cities research (`docs/next-cities-research-answer.md`): Cook County and the collar suburbs that share the city's roads and trains (Rosemont, Evanston, Tinley Park, Highland Park, Bridgeview, Hoffman Estates), Northwest Indiana and South Bend out. Kylie has not set it by hand; say so if a building just outside belongs in.

**This answer may be used months after it is written.** Date every figure ("as of Oct 2026"), and list anything scheduled to open, close, rename or change capacity through 2028, with dates. Chicago has two live ones: the new Ryan Field (opened Oct 2, 2026) and whatever the Bears decide about Arlington Heights or the lakefront.

---

# Research brief: Chicago venues that hold 5,000 or more

## What this is for
Fan/Friction is a personal log of live sports and concerts, with a "friction" read computed for each night from public schedules: how many big events share a date, how close their start times are, and whether their crowds hit the same roads. The read sizes each event by its building, so the app keeps its own capacity table. Only rooms of about **5,000 or more** feed the read, so that is the list I need for Chicago: complete, with capacity **by setup**, and with sources.

A missing building makes a busy night look quiet. A wrong capacity makes an event look bigger or smaller than it was. Completeness first, then accuracy, then polish.

## Boundaries
**The City of Chicago and Cook County**, plus the collar towns whose venues draw from the city and sit on its expressways or Metra lines: Rosemont, Evanston, Tinley Park, Highland Park, Bridgeview, Hoffman Estates, Arlington Heights. Leave out Northwest Indiana (Gary, Hammond), South Bend, Joliet (Chicagoland Speedway, closed to racing), Milwaukee, Rockford and Champaign. Say so if you'd move the line.

## What counts
Every venue that holds **about 5,000 or more people in at least one setup** and hosts public ticketed or free events. Categories, with examples — **the examples are not the list; enumerate the boundary and add what they miss**:

- **Stadiums and ballparks:** Wrigley Field (Cubs; and the concert figure), Rate Field (Guaranteed Rate Field until 2025, U.S. Cellular Field before 2016; one row with the rename dates and any upper-deck reductions), Soldier Field (Bears and the Fire; the football, soccer and concert figures, and **the Bears' status**: any announced move with its dates), SeatGeek Stadium in Bridgeview (Toyota Park until 2019; the Fire left in 2020, so say what it hosts now, and whether the Chicago Stars still play anywhere there), **Martin Stadium** (Northwestern's temporary lakefront field, 2024–2025: give it as history or a row depending on whether anything still plays there), **the new Ryan Field** (opened Oct 2, 2026; capacity, and whether it hosts concerts), Impact Field (Rosemont; around the bar), Ozinga Field (Crestwood; under; say so), Gately Stadium.
- **Arenas:** United Center (Bulls and Blackhawks; basketball, hockey and concert figures), Wintrust Arena (Sky and DePaul), Allstate Arena (Rosemont; basketball, hockey and concert figures, and its scheduled closure or replacement if any), NOW Arena (Hoffman Estates; Sears Centre until 2019), Credit Union 1 Arena (UIC Pavilion until 2018), Welsh-Ryan Arena (Northwestern), Gentile Arena (Loyola; under; say so), the Chicago Stadium is history.
- **Amphitheaters and outdoor concert venues:** Huntington Bank Pavilion at Northerly Island (FirstMerit, then Huntington; give the sponsor names and dates, and its reduced seated figure), Credit Union 1 Amphitheatre in Tinley Park (Hollywood Casino Amphitheatre until 2023), Ravinia Festival in Highland Park (pavilion and lawn separately), the Salt Shed (around the bar; indoor and outdoor), the Pritzker Pavilion in Millennium Park (free; seated and lawn), the Aragon and the Riviera (under; near-the-line section), the Auditorium Theatre and the Chicago Theatre (under; say so).
- **Festival grounds:** Grant Park (Lollapalooza; per-day cap), Union Park (Pitchfork; its status), Douglass Park (Riot Fest; whether it moved), Humboldt Park, Northerly Island.
- **Convention centers:** McCormick Place (the Auto Show, C2E2, Fan Expo). **Give per-day attendance for its biggest events and say whether you would treat it as a venue for a crowd read.** The Wintrust Arena is on its campus; say how they interact.
- **College venues of 5,000+:** Northwestern, DePaul (at Wintrust), UIC, Loyola, Chicago State (under; say so).
- **Racetracks:** Hawthorne Race Course (Stickney; grandstand figure and its casino plans), Arlington Park (closed 2021; history, and the Bears' plans for the site).

Leave out: rooms under 5,000 in every setup; private spaces; buildings demolished or closed before 2016 except as history inside a current row.

**Not venues, but tell us the dates:** the Chicago Marathon, the Air and Water Show, Pride, the St. Patrick's Day parade and river dyeing, Taste of Chicago, the Thanksgiving parade, the Chicago Half, and the Bud Billiken Parade. List them separately with dates and crowd estimates.

## For each venue
| Field | What I need |
|---|---|
| Name today | Official name in 2026 |
| Earlier names | Every name since 2016, each with the date it changed |
| City or neighborhood | Neighborhood, or town and county |
| Coordinates | Decimal latitude and longitude of the building |
| Capacity by setup | A number for each setup the venue actually uses: baseball, football, soccer, basketball, hockey, concert (end-stage), festival or in-the-round, and anything else. If a figure changed since 2016, give old and new with the year. |
| Roof | Open-air, covered, retractable, or indoor |
| Site access | Whether it is a single-road, peninsula or otherwise constrained site. Northerly Island (one road, Solidarity Drive) and Soldier Field's museum campus are the ones to think hardest about. A yes/no and one sentence. |
| Home teams or regular tenants | Including shared tenancies (Bulls and Blackhawks; Sky and DePaul) |
| As of | The date the figure was true, and anything scheduled to change it through 2028 |
| Source for each capacity | A link. Prefer the venue's own site, the team's media guide, or the league. |

## Rules
- **Label every number.** Official, reported, or estimated. Never a bare number.
- **Where sources disagree, give both** and say which you'd use and why. Known traps: United Center 20,917 basketball vs 19,717 hockey vs ~23,500 concert; Soldier Field 61,500 vs 63,500 vs 62,000; Wrigley 41,649 vs 41,374; Rate Field 40,615 vs 40,241 and any 2026 reduction; Allstate Arena 18,500 vs 16,692 hockey vs 17,500; Northerly Island 30,000 vs the reduced seated figure; Ravinia's lawn (no fixed figure; give the fire-code or sellout count).
- Note **standing-room or festival** figures separately from seated ones. Grant Park has a per-day cap, not a capacity.
- Say which venues you **could not confirm** rather than guessing.

## What the app already has (check it)
Wintrust Arena, 10,387, is the only Chicago building in the app today, carried over from a logged night. Confirm or correct it, with the source and coordinates.

## Output
One table, one row per venue, sorted by capacity, largest first, with the columns above. Then:
1. Near-the-line venues you left out and why (4,000–5,000 rooms).
2. Anything you could not confirm.
3. The big crowd dates with no building.
4. Your answer on McCormick Place.
5. Everything scheduled to open, close, rename or change through 2028 (the Bears first).

Tables beat prose. Links for every capacity.
