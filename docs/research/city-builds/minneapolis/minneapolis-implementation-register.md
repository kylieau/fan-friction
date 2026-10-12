# Minneapolis–St. Paul implementation register

Oct 12, 2026 · Cursor Cloud Agent. Research answers are unchanged (`minneapolis-city-type-answer.md`, `minneapolis-venue-table-answer.md`). **Not a Kylie city-build approval.** Milwaukee (K14) is the only city she has approved this way. This pass follows the Milwaukee checklist and the merged Philadelphia, Boston and Tampa builds, and it waits for her OK.

Boundary: the seven-county Met Council core (Anoka, Carver, Dakota, Hennepin, Ramsey, Scott, Washington). The MSA edge and Wisconsin venues stay out. City type is **`hub`**. Display name is **Minneapolis–St. Paul**. Metro code is **MSP**. Time zone `America/Chicago`. Map center `[-93.2, 44.96]`, zoom 10.4.

## Active fixed rooms (25)

No venue car share is stored. The city-type figures stay in this register as open questions, and every room uses the hub fallback (0.85), the same rule as Milwaukee and Tampa. No capacity was filled in where the research had no sourced figure.

| App ID | Room | Selected capacities | Evidence and limits |
|---|---|---|---|
| `us-bank-stadium` | U.S. Bank Stadium | 66,200 / 66,860 / 66,467 / 66,202 football by year | Reported Wikipedia timeline. Official "66,400+" is a floor, not stored. Expandable 73,000 is not the regular figure. **No concert capacity** was published, so none is stored. Research car share 0.72, not wired. Source: venue table A01 |
| `huntington-bank-stadium` | Huntington Bank Stadium | 50,805 football | Reported. Renamed from TCF Bank Stadium on 2021-06-29. Research car share 0.72, not wired. Source: A02 |
| `target-field` | Target Field | 39,504 baseball from 2010; 38,544 from 2021 | Opening figure reported; 2021 figure official. Research car share 0.70, not wired. Source: A03 |
| `target-center` | Target Center | 18,798 basketball; 17,500 hockey; 20,500 concert | Reported. A 2025 crowd of 18,978 sat above the basketball list. Research car share 0.75, not wired. Source: A04 |
| `grand-casino-arena` | Grand Casino Arena | 18,064 hockey to 2011; 17,954 from 2012; concerts 12,999 then 20,554 | Renamed from Xcel Energy Center on 2025-09-03. The two concert rows are mutually exclusive. The shared capacity rule uses the **last** concert row (centre stage, 20,554). No measured car share in the research. Source: A05 |
| `allianz-field` | Allianz Field | 19,400 soccer | Official, including safe standing. A corner expansion is a proposal only. Research car share 0.55, not wired. Source: A06 |
| `mystic-lake-amphitheater` | Mystic Lake Amphitheater | 19,000 concert | Official. Opened June 20, 2026. Covered bowl plus lawn; the split was not published. Research car share 0.97, not wired. Source: A07 |
| `williams-arena` | Williams Arena | 14,625 basketball from 1997 | Official. "The Barn…" is kept as a search name. Same building as Maturi, listed as its own room. Source: A08 |
| `state-fair-grandstand` | Minnesota State Fair Grandstand | 13,000 concert | Reported "about 13,000." Nested inside fair admission. Research car share **0.93 is the fair's 2023 arrival split**, not a grandstand-only survey, and it is not wired. Coordinate is approximate (OpenStreetMap's Grandstand Ramp). The fairgrounds themselves are not a room. Source: A09 |
| `mariucci-arena` | 3M Arena at Mariucci | 9,700 hockey from 1997; 10,257 from 2023 | Official. Rename day in July 2017 was not published; the app uses 2017-07-01. Source: A10 |
| `minneapolis-armory` | The Armory | 8,400 concert | Reported, mostly standing. Source: A11 |
| `chs-field` | CHS Field | 7,210 baseball | Official, seats plus berm and standing. Published crowds have gone above this. Source: A13 |
| `tco-stadium` | TCO Stadium | 5,500 soccer | Reported base seating. Wikipedia's 6,000 and a 2023 temporary sellout of 6,987 are not stored. Coordinate is the Vikings training complex, not a surveyed bowl. A railing section collapsed after a high-school game on Sept 3, 2026. Source: A14 |
| `maturi-pavilion` | Maturi Pavilion | 5,700, no setup | Reported volleyball seating. Conflicts with 5,500 and a "5,000-seat" line. Threshold-sensitive. Rename month is August 2017; the app uses 2017-08-01. Coordinate is Williams Arena's point (same building; no separate map point). Source: A15 |
| `roy-wilkins-auditorium` | Roy Wilkins Auditorium | 5,800, no setup | Reported general seated figure. 5,844 also reported. Configuration was not specified. A $40M renovation was funded May 2026; no timeline. Source: A16 |
| `nsc-stadium` | National Sports Center Stadium | **none (`capacity: []`)** | Wikipedia 5,500 vs FotMob 10,350, and no official figure. Left unknown rather than choosing one. Source: A17 |
| `anderson-arena` | Lee & Penny Anderson Arena | 4,000 hockey; 5,300 basketball; 6,000 concert | Hockey and basketball reported (Stadium Business). Concert figure is Stadium Journey only. Opened Oct 24, 2025. Source: A18 |
| `ridder-arena` | Ridder Arena | 3,400 hockey | Official. A recorded crowd of 3,539 is above this. Address sources differ; the map point is 1815 SE 4th. Source: A19 |
| `northrop-auditorium` | Northrop | 2,868 concert | Reported. Source: A20 |
| `palace-theatre-saint-paul` | Palace Theatre | 2,800 concert | Reported. 2,500 also reported. Source: A21 |
| `orpheum-theatre-minneapolis` | Orpheum Theatre | 2,579 concert | Reported. Source: A22 |
| `state-theatre-minneapolis` | State Theatre | 2,181 concert | Reported. Source: A23 |
| `fillmore-minneapolis` | The Fillmore Minneapolis | 1,850 concert | Reported. Planned February 2020 opening was not re-verified. Source: A24 |
| `first-avenue` | First Avenue | 1,550 concert | Reported standing capacity of the main room. 7th St Entry (250) is not listed. Source: A25 |
| `pantages-theatre-minneapolis` | Pantages Theatre | 1,014 concert | Reported. At the about-1,000 pre-list line. Source: A26 |

Coordinates are OpenStreetMap Nominatim hits from Oct 12, 2026, except the three approximate points named above.

## Excluded

- **CPAC Upper Harbor amphitheater (A12):** under construction; scheduled summer 2027. Not activated.
- **Canterbury Park grandstand:** capacity unknown.
- **Outside the seven-county core:** Somerset (Wisconsin), The Ledge (St. Cloud), Treasure Island, Grand Casino Hinckley, Brainerd, Duluth.
- **Held for a conflict that changes the class:** Surly Festival Field (7,500 vs a bit under 5,000).
- **Not researched in the venue pass:** Orchestra Hall, Ordway, Guthrie, O'Shaughnessy Stadium, Siebert Field, Jane Sage Cowles Stadium, RiverCentre halls, TRIA Rink, Uptown Theater, Elko Speedway, Myth Live, Weesner amphitheater. No St. Thomas football team, because O'Shaughnessy was not researched.
- **Table B open sites are not rooms:** State Fair grounds, Twin Cities Pride, Twin Cities Marathon, Minnesota Yacht Club, Renaissance Festival. No dated one-off was seeded.
- **Same building, separate rooms:** Williams Arena and Maturi Pavilion stay two ids. Mariucci and Ridder share a tunnel and one Gridlock zone name, not one room.

## Gridlock zones

Rooms within about 1.25 miles share a zone. Named clusters: Downtown East (U.S. Bank, Armory), Downtown West (Target Field, Target Center, First Avenue, Fillmore, the three theatres), University of Minnesota (Huntington, Williams, Mariucci, Ridder, Maturi, Northrop), Downtown Saint Paul (Grand Casino, Roy Wilkins, Palace, CHS Field), then Midway, State Fairgrounds, Shakopee, Eagan, Blaine and St. Thomas. No broad-team flags were added. The research notes shared Vikings, Twins and Gophers audiences; that is not a 20% resident poll.

## Teams and feeds (checked Oct 12, 2026)

22 home teams. A team record is not a claim that a schedule is connected.

| Team | Source | What the feed returned |
|---|---|---|
| Twins | MLB team 142, venue 3312 Target Field | 412 home games, all at Target Field |
| Saints | MLB team 1960, sport 11, venue 5472 CHS Field | 374 home games, all at CHS Field |
| Vikings | ESPN NFL 16 | 43 games, all at U.S. Bank |
| Timberwolves | ESPN NBA 16 | 191 games, all at Target Center |
| Lynx | ESPN WNBA 8 | 118 games, all at Target Center |
| Wild | ESPN NHL 30 | 188 games, all at Grand Casino Arena |
| Minnesota United | ESPN MLS 17362 | 79 games, all at Allianz Field |
| Gophers football | ESPN college football 135 | 33 games: 32 at Huntington, 1 at Yankee Stadium (ESPN listed it as home) |
| Gophers men's and women's basketball | ESPN 135 | 74 and 75 games. Almost all at Williams. One men's game at United Center; two women's games at Target Center |
| Gophers men's hockey | ESPN men's college hockey 135 | Schedule works. **Attendance came back as 0**, so the file is an empty stub. Upcoming games still map to Mariucci |
| St. Thomas men's and women's basketball | ESPN 2900 | 14 and 18 games, all at Anderson (2026). Earlier seasons saved nothing at that building |
| St. Thomas men's hockey | ESPN 2900 | Same as Gophers hockey: attendance 0, empty stub. Games map to Anderson |
| Frost | HockeyTech PWHL id 2 | 48 games: 47 at Grand Casino Arena (including the Xcel name), 1 at Allstate Arena |
| Gophers and St. Thomas women's hockey, Gophers volleyball, MNUFC2, Aurora, Forge, LOVB Minnesota | Team records only | No ESPN path was found for women's college hockey, USL W, MLS Next Pro, college volleyball, MLV or LOVB. No adapter was invented |

Ticketmaster sports listings are allowlisted at `nsc-stadium`, `tco-stadium`, `ridder-arena`, `maturi-pavilion` and `anderson-arena`, the rooms a league feed does not already cover. Grand Casino Arena is not on that sweep; NHL and PWHL already cover it. **No Ticketmaster key was available in this environment**, so room ids were not verified and the Oct 12 archive has no Ticketmaster events.

Home-venue names mapped for ESPN and the attendance collector: U.S. Bank Stadium, Huntington Bank Stadium, TCF Bank Stadium, Target Center, Grand Casino Arena, Xcel Energy Center, Allianz Field, The Barn by Blue Cross and Blue Shield of Minnesota, Williams Arena, 3M Arena at Mariucci, Mariucci Arena, Lee & Penny Anderson Arena, Lee and Penny Anderson Arena.

## Collected data

- **Attendance:** `data/attendance/minneapolis/` — the counts above. College hockey files are empty on purpose (the feed's attendance field is 0, same shape as an empty Tampa file).
- **Expected draws:** appended only, inside `expectedDrawIndex.ts`. 193 regular rows, 2 season levels (Gophers football 2026 at 0.953 over 4 games; Minnesota United 2026 at 0.997 over 8 games), 155 opponent ratios, 13 postseason rows. Phoenix, Vancouver, Sacramento, Mexico City, Las Vegas, Kansas City, Houston and Toronto landed on main after the first Minneapolis commit. Their rows, and every earlier metro's rows, stay byte-for-byte as on main and in the same order. Minneapolis rows are appended after them. No full re-calibrate was committed, and there is no separate opponents file.
- **Hard access:** 16 rooms at or above 5,000 seats were measured. None meet the strained rule (at least 40 m of relief and no more than 4 streets within 250 m). Anderson Arena has 51 m of relief but 8 streets, so it is not flagged. NSC Stadium was not measured because it has no capacity. Rooms under 5,000 were not measured.
- **Archive:** `data/schedule-archive/minneapolis/2026-10-12.json`. Window Oct 12–26. 11 events, all ESPN: Wild (3), Timberwolves (2), Minnesota United, Gophers hockey (2, titled "Minnesota"), St. Thomas hockey (titled "St Thomas"), Gophers football (no start time), Vikings. MLB 0, HockeyTech 0, seed 0.
- **Results:** Oct 9 and Oct 10, three finals (St. Thomas hockey twice, Minnesota United once). No attendance on those rows.
- **Weather:** 15 day files under `data/weather/minneapolis/`, index rows appended.

## Judgment calls (not locks)

- **Hub, with no venue car shares wired.** Milwaukee and Tampa left estimates in the research. This build does the same. The figures that are not stored: U.S. Bank 0.72, Huntington 0.72, Target Field 0.70, Target Center 0.75, Allianz 0.55, Mystic Lake 0.97, State Fair grandstand 0.93 (the whole fair's arrival split, not a grandstand survey). Grand Casino Arena has no measured split. Whether to wire any of these is still open.
- **NSC Stadium capacity stays blank.** Both published figures are in this register. Neither is in the app.
- **U.S. Bank concerts have no seating number.** If a concert asks for a capacity, the shared rule falls back to the first football row that fits the year (66,200 from 2016), not the current 66,202. That function was not changed.
- **Grand Casino concerts use 20,554** (centre stage), not the 12,999 end-stage figure stored above it.
- **Display name** is Minneapolis–St. Paul, with the en dash, and the code is MSP. She may prefer "Minneapolis."
- **Schedule titles** for Gophers hockey and St. Thomas hockey say "Minnesota" and "St Thomas." The shared title rule matches a program only when our full name equals ESPN's display name, and it does not. The title rule was not changed.
- **Three "home" games at other cities' buildings** were kept as the feed sent them: Gophers football at Yankee Stadium, Gophers men's basketball at United Center, Frost at Allstate Arena.

## Open for her

- Approve or hold this city the way she approved Milwaukee.
- Whether any of the unwired car shares should be stored later, especially 0.93 on the grandstand (the whole fair's split).
- NSC capacity once an official figure exists; Roy Wilkins configuration; Maturi's 5,700 vs 5,500 vs 5,000; Palace 2,800 vs 2,500; whether TCO's temporary 6,987 should ever be a setup.
- Fillmore's actual opening date; Mariucci and Maturi rename days (the app uses the 1st of the published month).
- Approximate map points: grandstand ramp, TCO complex, Maturi = Williams.
- College hockey attendance (ESPN returns 0). Women's hockey, Aurora, MNUFC2, Forge, LOVB and Gophers volleyball still have no schedule feed. Ticketmaster room ids are unverified.
- Green Line Extension (June 12, 2027) and the Roy Wilkins renovation may change travel and capacity later. CPAC stays out until it opens.
- No broad-team poll. State Fair, Pride, the Renaissance Festival, the marathon and Yacht Club are not hand-listed.
