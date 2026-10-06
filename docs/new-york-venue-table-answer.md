# New York venues of 5,000+ — research answer

Run Oct 6, 2026 on `docs/new-york-venue-table-prompt.md` (five boroughs, Westchester, Nassau, Suffolk west of ~Stony Brook, Bergen/Hudson/Essex/Union/Passaic, plus PNC Bank Arts Center as satellite). Pasted by Kylie. Kept as returned; Claude's checks are at the bottom.

**The model split the answer into two tables, against the brief, and gave its reason:** Table A is buildings with a fixed capacity; Table B is open grounds whose crowd depends on the event, not the building. That split is right, and it matches what `docs/unsized-events.md` already says about fan zones and festivals.

**Labels:** **[O]** official (venue, team, league, or operator), **[R]** reported (reputable outlet or reference work), **[E]** estimated (the model's figure, or one it could not trace this round).

**Coordinates:** figures marked † came from a source; the rest are approximate building centroids — verify before shipping.

---

## Table A — Venues with a fixed capacity (largest setup first)

| # | Name today (2026) | Earlier names since 2016 | Where | Lat, Lon | Capacity by setup | Roof | Hard-access site? | Tenants |
|---|---|---|---|---|---|---|---|---|
| 1 | **MetLife Stadium** | — | East Rutherford, Bergen Co., NJ | 40.8135, -74.0745 | Football **82,500** [R]; NFL record 83,367 [R]. World Cup 2026 soccer **74,895** [R, bid-book]. 82,566: could not confirm. Concert: not confirmed. | Open-air | **Yes.** Meadowlands wetland complex, reached by Rt 3/120 and the Turnpike; rail is a single spur from Secaucus. | Giants, Jets. Hosted the 2026 World Cup final (Jul 19, 2026). |
| 2 | **Yankee Stadium** | — | Bronx | 40.8296, -73.9262 | Baseball **46,537** [O, team media guide]. Soccer **28,743** standard, expandable to **47,309** [R]. Football **54,251** [R]. Concert: not confirmed. | Open-air | No. | Yankees; NYCFC (through the 2027 transition season). |
| 3 | **Belmont Park** (racetrack) | Old grandstand demolished 2023; rebuilt track reopened to racing Sept 2026 | Elmont, Nassau | 40.7144, -73.7226 | Grounds, big-day configuration **~50,000** [R]. New grandstand **~10,000** once floors 3–5 are fitted out, expected Q1 2027 [R]. | Open-air (covered grandstand) | **Shared site** with UBS Arena: same Hempstead Tpke / Cross Island Pkwy access and Elmont LIRR station. | NYRA. **The Belmont Stakes ran at Saratoga in 2024, 2025 and 2026** (Jun 6, 2026) — outside the boundary, so those three runnings should not count here. Returns to Belmont 2027; Breeders' Cup Oct 29–30, 2027. Winter meet opens Dec 10, 2026. |
| 4 | **Citi Field** | — | Flushing, Queens | 40.7571, -73.8458 | Baseball **41,922** since 2012 [O]; **41,800** 2009–2011 [R]. 45,000+ with standing room [R]; record 45,186 (2013 All-Star Game) [R]. Concert: not confirmed. | Open-air | No, but **shared cluster** with the USTA centre and (from 2027) Etihad Park: same 7 train, LIRR station and Willets Point lots. | Mets; NYCFC (some matches through 2027). |
| 5 | **Aqueduct Racetrack** — *closed to live racing Jun 28, 2026* | — | South Ozone Park, Queens | 40.6720, -73.8303 | Listed **17,000 seated / 40,000 total** [R] — historic, and badly overstated for modern use: the grandstand is now a casino, and the final race day drew **6,866** [R]. Model suggests an end date of 2026-06-28 and a realistic racing-day figure of ~7,000 [E]. | Open-air | No. | NYRA (racing moved to Belmont). Resorts World casino remains. |
| 6 | **Sports Illustrated Stadium** | Red Bull Arena (2010 – Dec 11, 2024) | Harrison, Hudson Co., NJ | 40.7368, -74.1503 | Soccer **25,000** [O/R]. Concert: not confirmed. | Covered (roof over seats, open bowl) | No (PATH Harrison station). | NY Red Bulls; Gotham FC (moving to Etihad Park in 2028). |
| 7 | **Etihad Park** — *not open yet* | — | Willets Point, Queens | 40.7577, -73.8411 | Soccer **25,000** [O]. **Opens Jul 17, 2027** [R]. Under construction since Dec 2024. | Open-air (TBC) | Shared cluster with Citi Field / USTA. | NYCFC from 2027–28; Gotham FC from 2028. |
| 8 | **Arthur Ashe Stadium** (USTA Billie Jean King NTC) | — | Flushing Meadows, Queens | 40.7498, -73.8465 | Tennis **23,771** [O/R]. Finals have drawn ~28,000 with standing room [R]. | **Retractable** | Shared cluster. | US Open. |
| 9 | **Madison Square Garden** | — | Midtown Manhattan | 40.7505, -73.9934 | Basketball **19,812** [R]; hockey **18,006** [R]; boxing/MMA **20,789** [R]; concert end-stage **~19,500–20,000** [R], up to 22,000 in the round [R]. **Model's recommendation:** 20,789 is the centre-ring maximum, not a concert figure — use 19,500 for end-stage. | Indoor | No (sits on Penn Station). | Knicks, Rangers; St. John's men (most Big East home games); Big East tournament. |
| 10 | **UBS Arena** | — | Elmont, Nassau | 40.7110, -73.7259 | Hockey **17,255** (infobox) vs **17,250** (text) [R]; concert **19,000** [R]. | Indoor | Shared site with Belmont Park. | Islanders; occasional PWHL games. |
| 11 | **Barclays Center** | — | Prospect Heights, Brooklyn | 40.6827, -73.9752 † | Basketball **17,732** [O]; hockey **15,795** [O] (Islanders 2015–2020; older 15,813); concert **up to 19,000** [O, AEG] vs **20,000** [R]; boxing 16,000–18,000 [R]. Use 19,000. | Indoor | No (Atlantic Av hub). | Nets, Liberty. |
| 12 | **Prudential Center** | — | Newark, Essex Co., NJ | 40.7336, -74.1711 † | Hockey **16,514** since 2015 [O] (16,592 in 2013–15; 17,625 before). Basketball **18,711** [O, Seton Hall]. Concert **17,000–17,500** [R] vs **19,500** [R, SeatGeek]. Unresolved; model would use 17,500 end-stage. | Indoor | No (two blocks from Newark Penn). | Devils; **Seton Hall men's basketball plays here** (no separate Seton Hall row); NY Sirens (PWHL) since 2024–25. |
| 13 | **PNC Bank Arts Center** (satellite) | — | Holmdel, Monmouth Co., NJ | 40.3934, -74.1756 † | Concert **17,500** = 7,000 seats + ~10,500 lawn [R]. | Covered seats + open lawn | Single exit (GSP Exit 116); no rail except shuttles. | Live Nation summer season. |
| 14 | **Robert K. Kraft Field at Lawrence A. Wien Stadium** | — | Inwood, Manhattan | 40.8722, -73.9149 | Football **17,000** [O]. | Open-air | No. | Columbia football, women's lacrosse. |
| 15 | **Meadowlands Racetrack** | — | East Rutherford, Bergen Co., NJ | 40.8158, -74.0716 | Grandstand seats only **2,200** [R], but **Hambletonian Day drew 16,465** in 2024 [O, NJ AG]. Model as one big day a year (Aug 8 in 2026). Whether the Hambletonian stays after 2026 is open. | Indoor grandstand + open apron | **Yes** — same Meadowlands complex as MetLife. | Harness racing. |
| 16 | **Nassau Veterans Memorial Coliseum** — *still open, lightly used* | NYCB Live (naming ended 2020) | Uniondale, Nassau | 40.7229, -73.5904 | Post-2017 renovation **~14,000** [R, amNY] vs **16,000** [R, NY Post]. Neither gives a setup. Use ~14,000 [E]. (16,170 is pre-renovation.) | Indoor | No. | **Status 2025–26:** open; LI Nets (G League) and NY Riptide (NLL), plus a handful of concerts a year. Las Vegas Sands dropped its casino bid Apr 23, 2025; the building's long-term future is undecided. |
| 17 | **Northwell at Jones Beach Theater** | Northwell Health at Jones Beach Theater (2017–2024); Nikon at Jones Beach Theater (2006–2016) | Wantagh, Nassau | 40.6010, -73.5023 † | Concert **15,000** [R] vs **14,000** [O, Live Nation 2017] vs 14,500 [R]. Use **14,000** — the operator's own number. Separate **Bay Stage: 5,000 GA** [R]. | Open-air | **Yes** — barrier island, reached only by the Wantagh / Meadowbrook / Ocean parkways. Worst exit in the region. | Live Nation summer season. |
| 18 | **Forest Hills Stadium** | — | Forest Hills, Queens | 40.7197, -73.8481 | Concert **14,000** [R]; some guides 14,000–16,000. | Open-air | No (residential streets; E/F/LIRR). | Summer concert series. |
| 19 | **Louis Armstrong Stadium** (USTA) | Rebuilt 2018 | Flushing Meadows, Queens | 40.7484, -73.8466 | Tennis **~14,000** [R]. The 14,069 figure: could not confirm. | **Retractable** | Shared cluster. | US Open. |
| 20 | **Kenneth P. LaValle Stadium** | — | Stony Brook, Suffolk | 40.9170, -73.1240 | **12,300** since 2017 = 10,300 seats + 2,000 standing [O]; 10,300 in 2002–16. | Open-air | No. | Stony Brook football, soccer, lacrosse. |
| 21 | **James M. Shuart Stadium** | — | Hempstead, Nassau | 40.7158, -73.5964 † | **11,929** since 2013 [R]. | Open-air | No. | Hofstra lacrosse. |
| 22 | **Maimonides Park** | MCU Park (2010–2021) | Coney Island, Brooklyn | 40.5745, -73.9845 | Baseball **7,000** seats + up to **2,500** standing [O]. Before 2016: 7,500 + 2,500. | Open-air | Soft yes — end of the line at Coney Island; shares the boardwalk with the Ford Amphitheater. | Brooklyn Cyclones; Brooklyn FC. |
| 23 | **USTA Grandstand** | Opened 2016 | Flushing Meadows, Queens | ~40.7480, -73.8450 | Tennis **~8,000** [E — not sourced this round]. | Open-air | Shared cluster. | US Open. |
| 24 | **SIUH Community Park** | Richmond County Bank Ballpark (until Apr 2022) | St. George, Staten Island | 40.6453, -74.0768 | Baseball **7,171** [R]. | Open-air | Island; ferry-terminal site. | Staten Island FerryHawks; Wagner baseball. |
| 25 | **Fairfield Properties Ballpark** | Bethpage Ballpark (2010–2020) | Central Islip, Suffolk | 40.7957, -73.1958 | Baseball **6,002** [O]. | Open-air | No (2.5 mi from LIRR). | Long Island Ducks. |
| 26 | **Pacha New York** | The Brooklyn Mirage (2017–2025, at Avant Gardner) | East Williamsburg, Brooklyn | 40.7105, -73.9268 | **~6,000** [E — the Mirage's widely cited figure; Pacha has not published one]. **Status:** closed all of 2025 after failing inspection; owner went bankrupt; reopened as Pacha **Jun 2026**, seasonal June–October. | Open-air | No. | Pacha / FIVE Holdings. |
| 27 | **Radio City Music Hall** | — | Midtown Manhattan | 40.7600, -73.9800 | Theater **5,960** [R]; some listings 6,015. | Indoor | No. | MSG Entertainment. |
| 28 | **Carnesecca Arena** | — | Jamaica, Queens (St. John's) | 40.7225, -73.7948 | Basketball **5,602** [O] vs 5,260 [R]. Use 5,602. | Indoor | No. | St. John's women; St. John's men (non-conference). |
| 29 | **Infosys Theater at Madison Square Garden** | The Theater at MSG (2023 – Feb 2, 2026); Hulu Theater at MSG (2018–2023); The Theater at MSG (before 2018) | Midtown Manhattan (inside MSG) | 40.7505, -73.9934 | **2,000–5,600** depending on setup [O/R]. | Indoor | No. | MSG Entertainment. **Same building as MSG — two events can stack on one night.** |
| 30 | **SummerStage, Rumsey Playfield** | — | Central Park, Manhattan | 40.7726, -73.9708 | **5,000** [O, City Parks Foundation] vs **5,500** [R, post-2019]. Over the bar either way. | Open-air | No. | City Parks Foundation summer season. |
| 31 | **Icahn Stadium** | — | Randall's Island, Manhattan | 40.7955, -73.9241 | **5,000** seated [O, USATF], "with the capability to expand". Designed with 5,000 more on bleachers [R]. | Covered (cantilevered canopy) | **Yes** — island (RFK Bridge, footbridge, ferry). | Track meets; USATF Outdoor Championships Jul 23–26, 2026. |
| 32 | **Ford Amphitheater at Coney Island** | — | Coney Island, Brooklyn | 40.5729, -73.9834 | **5,000** [R]. Exactly on the bar. | Covered | Soft yes — Coney Island peninsula, as Maimonides. | Live Nation; free Seaside concert series. |
| 33 | **Westchester County Center** | — | White Plains, Westchester | 41.0296, -73.7704 | **5,000** basketball and concert [R] vs **4,264** [R, Bandsintown]. On the bar; flag it. | Indoor | No. | Westchester Knicks (G League). |

## Table B — Grounds with no fixed capacity (model per event)

| Site | Where | Lat, Lon | Crowd figures | Access |
|---|---|---|---|---|
| **US Open — USTA grounds, daily** | Flushing Meadows, Queens | 40.7498, -73.8460 | Single-day record **73,201** (2023) [R]. 2025 three-week total 1,144,562 including Fan Week [R]. **This is ~3× Arthur Ashe's 23,771.** The app must use grounds attendance, not Ashe, for US Open days. | Shared cluster with Citi Field |
| **Central Park Great Lawn** | Manhattan | 40.7812, -73.9665 | Global Citizen Festival: **60,000** a year [O, organizer]. | No |
| **Bethpage State Park (Black Course)** | Farmingdale, Nassau/Suffolk line | 40.7448, -73.4560 | 2025 Ryder Cup: ~50,000/day expected [R]; 225,000–250,000 for the week [R]. More PGA majors scheduled in the next decade [R]. | **Yes** — no public parking; shuttle only |
| **Flushing Meadows Corona Park (Gov Ball)** | Queens | 40.7400, -73.8407 | Governors Ball here since 2023; 2026 ran **Jun 5–7** [O]. Per-day attendance: **could not confirm** (commonly cited around 50,000/day [E]). | Shared cluster; no festival parking |
| **Randall's Island Park (festival fields)** | Manhattan | 40.7932, -73.9214 | Electric Zoo drew 100,000+ over Labor Day weekend at its peak [R], but has **no 2026 edition** [R]. No current major festival confirmed. | **Yes** — island |
| **Liberty State Park** | Jersey City, Hudson Co., NJ | 40.7034, -74.0532 | The planned FIFA Fan Festival (Jun 11 – Jul 19, 2026) was **cancelled Feb 19, 2026** over crowd-management concerns [R]. No standing large event confirmed. | **Yes** — waterfront, few roads in |
| **Javits Center** | Hell's Kitchen / Hudson Yards, Manhattan | 40.7577, -74.0022 | NY Comic Con 2025: **250,000+ over Oct 9–12** [O, RX] → ~62,500/day [E]. **NYCC 2026 runs Oct 8–11.** Auto show: could not confirm. | No (7 train Hudson Yards) |

## 1. Near-the-line venues left out (4,000–5,000, or recently fell below)

| Venue | Figure | Why out |
|---|---|---|
| The Armory (Washington Heights) | ~5,000 seats; ~8,000 across two Millrose sessions [R] | Sources say "just under 5,000." Borderline — add it for Millrose Games day. |
| Hofstra Mack Sports Complex | Was **5,023**; Hofstra's own page now says **"nearly 3,800"** [O] | Reduced; now under the bar. |
| Jones Beach Bay Stage | 5,000 GA [R] | Second stage at Jones Beach; fold into the Jones Beach row. |
| Beacon Theatre | ~2,900 [E] | Under. |
| Kings Theatre | ~3,000 [E] | Under. |
| United Palace | ~3,400 [E] | Under. |
| Hammerstein Ballroom | ~3,500 [E] | Under. |
| Pier 17 rooftop | ~3,400 [E] | Under. |
| Fordham Rose Hill Gym | ~3,200 [E] | Under. |

The theater figures marked [E] are from the model's memory; not sourced this round.

## 2. Could not confirm

- **Concert capacities** for MetLife, Yankee Stadium and Citi Field.
- MetLife **82,566**. Only 82,500 turned up. The World Cup seat removal was **tournament-only**: the 1,740 corner seats were replaced with modular sections restoring the NFL count, so 82,500 still stands for football.
- **Prudential Center concert** figure (17,000 vs 19,500).
- **Nassau Coliseum** post-renovation figure (14,000 vs 16,000; the brief's 13,900 did not appear).
- **Louis Armstrong** 14,069 and the **USTA Grandstand** figure.
- **Pacha New York** capacity.
- **Gov Ball per-day** attendance.
- **Belmont Park reopening date.** A Sep 18 article says "Thursday," which would be Sep 17, 2026.
- Whether the **Hambletonian** leaves the Meadowlands after 2026.
- **Fordham's Jack Coffey Field** (football). Possibly around 7,000, which would put it **over** the bar — check it.
- **Wagner, Iona, Manhattan and LIU** venues. Likely all under 5,000; not verified.
- **Coordinates** without a † are approximate.

**Boundary note from the model:** Rockland County isn't in the county list but borders Bergen and shares the Palisades/Tappan Zee corridor. Worth a check for any 5,000+ venue. No buildings outside the line clearly belong in.

## 3. Big crowd dates with no building (not venues)

| Event | Next / recent date | Crowd |
|---|---|---|
| NYC Marathon | **Sun Nov 1, 2026** | 59,226 finishers in 2025 (world record) [O, NYRR]; ~2M spectators [R] |
| Macy's Thanksgiving Parade | **Thu Nov 26, 2026** | ~3.5M expected [R]; ~1M at the balloon inflation the night before [R] |
| New Year's Eve, Times Square | **Thu Dec 31, 2026** | ~1M [R] (some years claimed 2M) |
| NYC Pride March | Sun Jun 28, 2026 | 2M+ [O, organizer] vs "more than a million" [R]; 75,000 marchers |
| Macy's July 4 Fireworks | Jul 4 | ~3M [R, organizer claim] |
| West Indian American Day Carnival | Labor Day (Mon Sep 7, 2026) | Up to ~3M over the carnival [R] |
| St. Patrick's Day Parade | Mar 17 | ~2M [R] |

**The model's own caution:** parade crowd figures are organizer-driven and almost certainly inflated. Treat them as "the whole city is busy," not as a number to add.

## 4. Javits Center — should it be a venue?

The model's answer: **yes, but as an event venue, not a capacity venue.** Give it no fixed capacity. Feed it only the few public consumer shows that put real crowds on the street — NY Comic Con (~62,500/day [E]) and the auto show once confirmed — with per-day attendance.

Most Javits days are trade shows whose attendees arrive over the whole day and don't move like a concert crowd. A fixed capacity would make every trade-show day look like a stadium night.

Comic Con's crowd does matter: it loads the same 7 train and West Side streets as MSG and Penn Station, and NYCC 2026 (Oct 8–11) overlaps the hockey and basketball season openers. Bethpage, the Great Lawn and the festival parks have the same shape, which is why they sit in Table B.

## Check on the app's existing row

**Citi Field — 41,922, baseball, at 40.7571, -73.8458: confirmed.** 41,922 is the official figure since 2012 (41,800 in 2009–11), and the coordinates are on the building. Optionally add the 45,000+ standing-room note.

---

## Claude's checks (Oct 6, 2026)

- **Table A / Table B is the right call and the model argued it well.** It matches `docs/unsized-events.md`: a building has a capacity, open grounds have a per-event crowd. Table B should be modelled the way the FIFA Fan Festival and Union Station fan zone already are — listed, sized only when a real per-event figure exists.
- **The US Open gap the prompt asked about is confirmed and large:** 73,201 on the grounds against Arthur Ashe's 23,771. Sizing an Open day by Ashe would understate it threefold.
- **Several rows are about status, not capacity, and the app has no way to say "closed" today.** Aqueduct stopped live racing Jun 28, 2026; Etihad Park does not open until Jul 17, 2027; Liberty State Park's fan festival was cancelled; Electric Zoo has no 2026 edition; Pacha reopened Jun 2026 after a year dark. `venues.ts` has `fromYear` on a capacity but no "out of use from" date. See `BACKLOG.md`.
- **The Belmont Stakes trap:** it ran at Saratoga in 2024, 2025 and 2026, outside the boundary. Seeding a Belmont Stakes night in New York for any of those years would be wrong.
- **Two name changes to carry:** Red Bull Arena → Sports Illustrated Stadium (Dec 11, 2024), and The Theater at MSG → Infosys Theater at MSG (Feb 2, 2026).
- **MSG and its theater are one building.** The model flags that two events can stack there on one night. The theater rule (a 5,000–8,000 room counts when a big event is on in the same building or zone) already covers this, the way YouTube Theater and Intuit Dome do in LA.
- **Hofstra's arena dropped below the bar** (5,023 → ~3,800 on Hofstra's own page). Shuart Stadium at 11,929 stays.
- **Open to check before seeding:** Fordham's Jack Coffey Field may be over 5,000, and Rockland County was outside the brief's county list.
