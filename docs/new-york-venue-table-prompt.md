# Research prompt: every New York venue of 5,000 or more, with capacity by setup

Copy everything below the line into a research model. Paste the answer back to Claude to check and fold into `src/data/venues.ts`. Drafted Oct 6, 2026, from the Los Angeles, San Diego and Seattle prompts; New York is the next city on `docs/new-city-checklist.md`, with Montreal after it. Scope, as before: 5,000+ only.

Boundary set by Kylie, Oct 6: the five boroughs, northern New Jersey and Long Island, with Rutgers and central New Jersey out. The county rule below is Claude's reading of that instruction, so the researcher enumerates rather than working from a list of venues we happened to think of.

---

# Research brief: New York venues that hold 5,000 or more

## What this is for
Fan/Friction is a personal log of live sports and concerts, with a "friction" read computed for each night from public schedules: how many big events share a date, how close their start times are, and whether their crowds hit the same roads. The read sizes each event by its building, so the app keeps its own capacity table. Only rooms of about **5,000 or more** feed the read, so that is the list I need for New York: complete, with capacity **by setup** (an arena holds a different number for basketball, hockey or a concert), and with sources.

A missing building makes a busy night look quiet. A wrong capacity makes an event look bigger or smaller than it was. Completeness first, then accuracy, then polish.

## Boundaries
**The five boroughs**, plus the ring that shares New York's roads and trains:
- **Westchester County.**
- **Nassau and Suffolk counties**, west of about Stony Brook.
- **Northern New Jersey**: Bergen, Hudson, Essex, Union and Passaic counties.

Include **PNC Bank Arts Center** in Holmdel (Monmouth County) as a satellite shed, the way the Los Angeles table includes Coachella's polo grounds and the Seattle table includes the Gorge Amphitheatre.

Leave out: **Rutgers and everything else in central New Jersey** (SHI Stadium, Jersey Mike's Arena, TD Bank Ballpark); **West Point** (Michie Stadium is fifty miles up the Hudson and its traffic never reaches the city); Philadelphia, Trenton, Hartford, New Haven, Albany, Bethel Woods and the Poconos.

Say so if you think a building just outside these lines belongs in. Do not add it silently.

## What counts
Every venue that holds **about 5,000 or more people in at least one setup**, and that hosts public ticketed or free events. Categories, with examples to start from — **the examples are not the list, so enumerate the boundary properly and add what they miss**:

- **Stadiums and ballparks:** Yankee Stadium, Citi Field (Shea Stadium's replacement, not Shea), MetLife Stadium, Sports Illustrated Stadium in Harrison (Red Bull Arena until December 2024 — one building, two names, so give it one row), Icahn Stadium on Randall's Island, Columbia's Lawrence A. Wien Stadium, Hofstra's James M. Shuart Stadium, Stony Brook's Kenneth P. LaValle Stadium, Maimonides Park on Coney Island, the Staten Island ballpark (Richmond County Bank Ballpark, then SIUH Community Park — give the rename dates). Note whether **Etihad Park** in Queens (NYCFC's own ground) has opened or is still under construction, with its date.
- **Arenas:** Madison Square Garden, Barclays Center, Prudential Center, UBS Arena at Belmont Park, Nassau Coliseum (**and whether it still hosts events at all** — say what its 2025–2026 status is), Westchester County Center, St. John's Carnesecca Arena, Hofstra's Mack Sports Complex, the Armory in Washington Heights (track meets), Fordham's Rose Hill Gym (likely under the bar; say so).
- **Amphitheaters and outdoor concert venues:** Northwell at Jones Beach Theater (Wantagh), PNC Bank Arts Center (Holmdel), Forest Hills Stadium (Queens), the Ford Amphitheater at Coney Island, the Brooklyn Mirage at Avant Gardner (around the bar; say which side), SummerStage at Rumsey Playfield in Central Park (around the bar; say which side), Pier 17's rooftop (likely under; say so).
- **Theaters of 5,000+:** Radio City Music Hall, the Theater at Madison Square Garden. The Beacon, Kings Theatre, United Palace and the Hammerstein Ballroom are probably under the bar — list them in the near-the-line section with their figures rather than leaving them unmentioned.
- **Tennis:** the USTA Billie Jean King National Tennis Center — **Arthur Ashe Stadium and Louis Armstrong Stadium as separate rows**, and then, separately, the **US Open's daily grounds attendance**, which is the number that actually hits the roads and is several times Ashe's capacity. Flag that gap explicitly; it is the kind of thing this table gets wrong.
- **College venues of 5,000+:** Columbia, St. John's, Hofstra, Stony Brook, Fordham, Seton Hall (which plays at Prudential Center, so say so rather than giving Seton Hall its own building), Iona, Manhattan, Wagner, LIU.
- **Racetracks:** Belmont Park (and **where the Belmont Stakes actually ran in 2024, 2025 and 2026** during the rebuild, plus the new grandstand's capacity and opening date), Aqueduct, Meadowlands Racetrack. Monmouth Park is outside the line.
- **Festival grounds:** Randall's Island (Governors Ball, Electric Zoo), Flushing Meadows Corona Park, Liberty State Park, Forest Hills.
- **Convention centers:** the Javits Center. It is not a seated venue, but New York Comic Con and the auto show put six figures onto the West Side over a weekend. **Give its per-day attendance for its biggest events and say whether you would treat it as a venue for a crowd read.** We have not decided; your reasoning helps.

Leave out: rooms under 5,000 in every setup; private spaces; buildings demolished or closed before 2016, except as history inside a current row (Shea Stadium, the old Yankee Stadium and the old Madison Square Garden are history, not rows).

**Not venues, but tell us the dates:** the New York City Marathon, the Thanksgiving Day parade, the Pride march and New Year's Eve in Times Square are the largest crowd days of the year and have no building. List them separately with their dates and crowd estimates. Do not put them in the venue table.

## For each venue
| Field | What I need |
|---|---|
| Name today | Official name in 2026 |
| Earlier names | Every name since 2016, each with the date it changed. The app matches old names to current ones. |
| City or neighborhood | Borough, or town and county |
| Coordinates | Decimal latitude and longitude of the building |
| Capacity by setup | A number for each setup the venue actually uses: baseball, football, soccer, basketball, hockey, tennis, concert (end-stage), festival or in-the-round, and anything else. If a figure changed since 2016, give old and new with the year. |
| Roof | Open-air, covered (roof but open sides), retractable, or indoor. Arthur Ashe's and Louis Armstrong's retractable roofs matter for the weather rule. |
| Site access | Whether it is a single-road, island, peninsula or causeway site that is always harder to get in and out of. A yes/no and one sentence. Jones Beach, Randall's Island, Belmont and the Meadowlands are the ones to think hardest about. |
| Home teams or regular tenants | Including shared tenancies (Gotham FC and the Red Bulls share Harrison; the Liberty and the Nets share Barclays; the Knicks and the Rangers share the Garden) |
| Source for each capacity | A link. Prefer the venue's own site, the team's media guide, or the league. Wikipedia is fine as a pointer but cite where its number came from. |

## Rules
- **Label every number.** Official (the venue or team says so), reported (a reputable outlet), or estimated (your best figure when nothing official exists). Never give a bare number.
- **Where sources disagree, give both** and say which you'd use and why. Known traps:
  - MetLife Stadium 82,500 vs 82,566 — and whether the 2026 World Cup pitch widening changed the seated figure permanently or only for that tournament.
  - Yankee Stadium 46,537 vs 47,309 for baseball, and a different number again for concerts and soccer.
  - Madison Square Garden 19,500 vs 20,789 concert, with separate hockey and basketball figures.
  - Barclays Center 17,732 basketball vs 19,000 concert, and the smaller hockey figure from the Islanders years.
  - Citi Field 41,922 vs 41,800, and a different concert figure.
  - UBS Arena 17,255 hockey vs about 19,000 concert.
  - Prudential Center 16,514 hockey vs 18,711 basketball or concert.
  - Nassau Coliseum 13,900 after the renovation vs 16,170 before it.
  - Jones Beach 15,000 vs the reduced figure after it was reconfigured.
- Note **standing-room or festival** figures separately from seated ones. This matters more in New York than in Seattle: Randall's Island and Liberty State Park have no seats at all.
- Say which venues you **could not confirm** rather than guessing.

## What the app already has (check it)
Citi Field, 41,922 baseball, listed capacity, at 40.7571, -73.8458. It is the only New York building in the app today, carried over from a single logged night. Confirm or correct it, with the source.

## Output
One table, one row per venue, sorted by capacity, largest first, with the columns above. Then:
1. A short list of near-the-line venues you left out and why (4,000–5,000 rooms).
2. A list of anything you could not confirm.
3. The big crowd dates with no building (marathon, parades).
4. Your answer on the Javits Center.

Tables beat prose. Links for every capacity.
