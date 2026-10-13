# Salt Lake City — Event-Travel Evidence and City-Type Assessment (Fan/Friction Gridlock)

**Research date:** Monday, October 12, 2026 (web sources accessed this day; evidence dated individually below).
**Scope:** Salt Lake City and surrounding Salt Lake County event suburbs, with Davis County, Ogden, Provo/Orem and Park City assessed separately as edge cases.
**Status of companion venue research:** Not available to this answer. Venues were enumerated independently; row IDs below (V##, E##, X##) are local to this document and need mapping to the companion answer's row keys.

---

## 0. Summary up front

- **No venue in this metro has a published, measured event mode split** (survey, travel plan, or counted share) that I could find. The single best quantitative anchor is a Utah Transit Authority (UTA) estimate that about **20% of fans inside Rice-Eccles Stadium for the November 2024 BYU–Utah game rode TRAX** ([FOX13, Nov 2024](https://fox13now.com/news/driven-to-change/how-officials-are-working-to-limit-traffic-impacts-of-the-new-daybreak-ballpark)). Everything else is a transparent estimate from structural evidence (parking supply, rail proximity, fare programs, operations).
- The evidence places every major venue in a **car-dominant band (roughly 0.75–0.95 car share)**, far from the `transit` default of 0.4. Downtown/university venues sit at about 0.75–0.82; suburban venues at about 0.88–0.95.
- **Recommended existing city type: `hub`** (in between). The car-share evidence is consistent with either `hub` or `sprawl` (both default to 0.85), so the choice rests on crowd geography: a real downtown–Fairpark–university cluster sharing rail lines and arterials, plus a dispersed ring of suburban, car-only venues. Strongest contrary evidence and venue exceptions are in §5.

---

## 1. Method and evidence rules applied

1. **Event travel only.** Ordinary commute data is labelled *background* and never used as an event split.
2. **People, not vehicles; attendees, not boardings.** Boardings are not converted to shares unless a denominator, baseline and return-trip treatment can be stated.
3. **Car share** = private car + carpool + rideshare/taxi + drop-off. **A car trip to remote parking followed by a shuttle counts as car.**
4. **Park-and-ride treatment.** A fan who drives to a suburban TRAX/FrontRunner park-and-ride and rides rail to the venue is reported as *transit for venue-approach purposes* (the car does not load the venue's approach roads) but is flagged as *car-involved*. Where possible I give both a venue-approach car share (the recommended value) and a car-involved upper bound. No public source gives the share of event rail riders who drove to a station, so the car-involved figure always rests on a stated assumption.
5. **Evidence classes used in tables:** **M** = measured/counted share (none found); **A** = agency/operator estimate of a share; **P** = projection; **E** = this document's estimate from structural evidence; **U** = unknown (fallback applies).
6. Estimated splits sum to 100% by construction; any residual is shown as "unclassified".

### Background only — ordinary commuting (not event travel)

| Geography | Drove alone | Public transit | Source | Notes |
|---|---|---|---|---|
| Salt Lake County | 66.8% | 2.1% | [Visit Salt Lake facts page](https://www.visitsaltlake.com/press-research/facts-info/) (cites Census/UTA; vintage not stated) | Commute only |
| Salt Lake County | 68.6% | — | [Stacker, ACS 2022 county data](https://stacker.com/stories/utah/lonely-road-counties-utah-where-people-drive-work-alone-most) | Commute only |
| Utah (state) | 68.0% (2023) | — | [Stacker](https://stacker.com/stories/utah/lonely-road-counties-utah-where-people-drive-work-alone-most) | Commute only |

These confirm a car-oriented region but say nothing directly about event crowds, which are evening/weekend, group-based, and often served by special transit.

---

## 2. Boundary recommendation

**Recommended Gridlock boundary: Salt Lake County.** Every fixed 5,000+ venue verified here is in Salt Lake County (Salt Lake City, West Valley City, Sandy, South Jordan), and the county's TRAX network ties the core venues together. Salt Lake County population is listed at 1,185,238 and Salt Lake City at 199,723 ([Visit Salt Lake](https://www.visitsaltlake.com/press-research/facts-info/)).

The same source aggregates Davis, Salt Lake, Utah and Weber counties into a "Wasatch Front/Salt Lake Area" of 2,382,918 people ([Visit Salt Lake](https://www.visitsaltlake.com/press-research/facts-info/)). That aggregate is a population/marketing frame, not event-travel evidence, and was **not** used to merge the edge areas.

| Edge area | Recommendation | Evidence basis |
|---|---|---|
| **Provo/Orem (Utah County)** | Separate market; exclude | LaVell Edwards Stadium (62,073) is served by its own UVX bus rapid transit at a BYU Stadium station, with FrontRunner connections at Provo/Orem ([Wikipedia](https://en.wikipedia.org/wiki/LaVell_Edwards_Stadium); [KSL Sports travel tips](https://kslsports.com/?p=467780)). Its approaches (University Parkway, I-15 in Utah County) do not overlap Salt Lake County venue approaches. Its audience overlaps Utah fans only on rivalry games. |
| **Park City (Summit County)** | Exclude | The festival that created the largest recurring Park City crowd ended its Utah run with the January 22–February 1, 2026 edition and moves to Boulder in 2027 ([AV Club](https://www.avclub.com/sundance-film-festival-2026-dates); [KSL](https://www.ksl.com/article/51584258/sundance-film-festival-is-officially-moving-to-boulder-colorado-in-2027)). Mountain access via I-80 is separate from valley venue approaches. |
| **Davis County** | Exclude as a venue area; treat as an audience origin | No fixed 5,000+ event venue was verified there in this pass (gap). Davis residents reach SLC venues via I-15 and FrontRunner. |
| **Ogden (Weber County)** | Exclude; not researched | Weber State and Ogden venues were not researched in this pass (gap). |
| **Draper, adjacent south-valley cities** | Include (inside county) | No fixed 5,000+ venue verified in Draper; it matters as a TRAX origin (UTA runs special direct Draper–stadium trains for Utah football: [KUTV](https://kutv.com/news/local/utes-tickets-double-as-uta-passes-on-game-day)). |
| **Magna (Great Saltair)** | Include, low priority | Indoor shows up to 4,000 ([Provo Music Magazine](https://provomusicmagazine.com/2025/11/25/smith-entertainment-group-announces-new-venue-in-slc/)); travel evidence not found. |

---

## 3. Venue and event inventory (identity, configuration, operations)

All capacities verified against the sources linked; conflicts preserved.

### 3a. Fixed venues 5,000+ (priority)

| ID | Verified current name | Municipality | Setup / configuration represented | Capacity (config) | Season / date represented | Rail access | Parking supply & arrangements |
|---|---|---|---|---|---|---|---|
| V01 | Delta Center | Salt Lake City | NBA Utah Jazz | 17,867 for 2026-27 ([Deseret News, Sep 25 2026](https://www.deseret.com/sports/2026/09/25/delta-center-renovations-revealed-for-2026-2027-utah-jazz-season/)) | Oct–Apr, mostly weekday/weekend evenings, winter | TRAX Blue/Green, Arena station at the door; station is in the Free Fare Zone and has no park-and-ride lot ([Wikipedia](https://en.wikipedia.org/wiki/Arena_station_(Utah_Transit_Authority))) | Venue states >10,000 spaces within a two-block radius ([Utah Jazz](https://www.nba.com/jazz/arena/parking)). Until 2026 the arena had no on-site public parking ([Salt Lake Tribune](https://www.sltrib.com/news/2025/08/12/delta-center-renovations-plans/)). New garage has 439 spaces for season-ticket and premium holders ([Deseret News](https://www.deseret.com/sports/2026/09/25/delta-center-renovations-2026-27-utah-mammoth/)). |
| V02 | Delta Center | Salt Lake City | NHL Utah Mammoth | 14,111 official for 2026-27, excluding obstructed-view seats ([Deseret News](https://www.deseret.com/sports/2026/09/25/delta-center-renovations-2026-27-utah-mammoth/)); was 12,478 in 2025-26 ([KUTV](https://kutv.com/news/local/utah-mammoth-fans-get-more-room-as-delta-centers-first-renovation-phase-wraps)) | Oct–Apr evenings, winter | Same as V01 | Same as V01 |
| V03 | Delta Center | Salt Lake City | Concerts / large shows | Operator describes 12,000–19,000 attendees ([Delta Center press release](https://www.deltacenter.com/news/seg-livenation-venue/)) | Year-round | Same as V01 | Same as V01 |
| V04 | Rice-Eccles Stadium | Salt Lake City (University of Utah) | Utah Utes football | 51,444 official ([Utah Athletics](https://utahutes.com/facilities/?id=3)); record 54,383 for BYU–Utah, Nov 9 2024 ([Thrillzing summary](https://thrillzing.com/stadiums/rice-eccles-stadium-salt-lake-city/)) | Sept–Nov Saturdays; some weekday (e.g., Thursday) games | TRAX Red Line, Stadium station | Paid fan lots (e.g., $20/game in 2021) and RV lots; campus lots cleared before games ([U of U stadium page, 2021](https://www.stadium.utah.edu/uncategorized/transportation-impacts-options-on-football-game-days/)) |
| V05 | Rice-Eccles Stadium | Salt Lake City | Stadium concert | Not verified for concert configuration | Summer | Same as V04 | Same as V04 |
| V06 | Jon M. Huntsman Center | Salt Lake City (U of U) | Red Rocks gymnastics (largest regular draw); basketball, volleyball | 15,000 ([Wikipedia](https://en.wikipedia.org/wiki/Jon_M._Huntsman_Center)); upper bowl curtained for basketball at 8,500 from 2020-21 ([Salt Lake Tribune, 2020](https://sltrib.com/sports/utah-utes/2020/04/17/university-utahs-huntsman)) | Jan–Mar gymnastics; winter basketball | TRAX Red Line (campus stations) | Public free parking at Rice-Eccles next to TRAX, per university ([Deseret News, Feb 2026](https://www.deseret.com/sports/2026/02/10/utah-utes-renovating-huntsman-center-mark-harlan)); athletics director called parking the top issue (same source) |
| V07 | America First Field | Sandy | Real Salt Lake (MLS), Utah Royals (NWSL) | 20,213 soccer ([Wikipedia](https://en.wikipedia.org/wiki/America_First_Field); [Utah Sports Commission](https://utahsportscommission.com/venues/america-first-field/)) | Feb–Oct, mostly Saturday evenings | TRAX Blue Line, Sandy Expo station ([UTA Event Service](https://www.rideuta.com/Rider-Info/Event-Service)) | Game-day lots ~$10–$20 ([Stadium Journey](https://www.stadiumjourney.com/stadiums/america-first-field-real-salt-lake)); a resale site says parking is bundled in tickets and assigned by seat ([Gametime](https://gametime.co/america-first-field-tickets/venues/rio_tinto_stadium)) — conflict, unverified |
| V08 | America First Field | Sandy | Concert | Over 25,000 for concerts ([Wikipedia](https://en.wikipedia.org/wiki/America_First_Field)) | Summer | Same as V07 | Same as V07 |
| V09 | Utah First Credit Union Amphitheatre (formerly USANA) | West Valley City | Concerts | **Conflict:** 25,000 (7,000 fixed + 18,000 lawn) per [Wikipedia](https://en.wikipedia.org/wiki/Utah_First_Credit_Union_Amphitheatre); 20,000 (7,000 reserved + 13,000 lawn) per [Ticketmaster venue FAQ](https://blog.ticketmaster.com/venue-faq-usana-amphitheatre-west-valley-city-ut/) | May/June–Oct ([Wikipedia](https://en.wikipedia.org/wiki/Utah_First_Credit_Union_Amphitheatre)) | None nearby verified | General lots open at noon on show days; dedicated carpool lot ([Ticketmaster](https://blog.ticketmaster.com/venue-faq-usana-amphitheatre-west-valley-city-ut/)) |
| V10 | Maverik Center | West Valley City | Utah Grizzlies (ECHL) hockey; concerts | Hockey 10,100; concerts up to 12,000; max 12,600 ([Wikipedia](https://en.wikipedia.org/wiki/Maverik_Center); [Utah Sports Commission](https://utahsportscommission.com/venues/maverik-center/)) | Oct–Apr hockey | TRAX Green Line, Decker Lake station across the street ([event guide PDF](https://www.utfrc.utah.edu/wp-content/uploads/sites/128/2023/02/Utah-Regional-Team-Event-Guide-2023-1.pdf); [UTA Event Service](https://www.rideuta.com/Rider-Info/Event-Service)) | Large on-site lots; $6 hockey parking reported ([Stadium Journey](https://www.stadiumjourney.com/stadiums/maverik-center-s899)); "free and ample" for a 2023 event ([event guide PDF](https://www.utfrc.utah.edu/wp-content/uploads/sites/128/2023/02/Utah-Regional-Team-Event-Guide-2023-1.pdf)) |
| V11 | The Ballpark at America First Square | South Jordan (Daybreak) | Salt Lake Bees (Triple-A), **current home since April 8, 2025** | 8,000 total, 6,500 fixed seats ([baseballparks.com](https://baseballparks.com/indepth/america-first-square/page-2/)) | Apr–Sept evenings | TRAX Red Line, South Jordan Downtown station, opened March 2025 ([UTA 2026 budget](https://www.rideuta.com/-/media/Files/About-UTA/Budget/2026_Final_Budget_Book_2025_12_12.pdf); [MiLB release](https://www.milb.com/app-firstpitch/salt-lake/news/first-game-press-release)) | Paid lots $10 weeknights / $15 Fri–Sat ([baseballparks.com](https://baseballparks.com/indepth/america-first-square/page-2/)); new access from Mountain View Corridor and "Utah U" turnarounds ([FOX13](https://fox13now.com/news/driven-to-change/how-officials-are-working-to-limit-traffic-impacts-of-the-new-daybreak-ballpark)) |
| V12 | Smith's Ballpark (**former** Bees home 1994–2024) | Salt Lake City | Historical only — no current 5,000+ tenant | **Conflict:** 14,511 ([Wikipedia](https://en.wikipedia.org/wiki/Smith%27s_Ballpark)) vs 15,400 ([Salt Lake Tribune](https://www.sltrib.com/news/2025/01/18/south-jordan-previews-bees/)) | Bees left after 2024; Utes baseball through 2025; city approved redevelopment plans late 2025 ([Wikipedia](https://en.wikipedia.org/wiki/Smith%27s_Ballpark)) | TRAX Ballpark station | Not relevant going forward |
| V13 | Days of '47 Arena, Utah State Fairpark | Salt Lake City | Days of '47 Rodeo; other arena events | Over 10,000 stadium-style seats ([AXS](https://www.axs.com/teams/1109673)) | July rodeo week; other events | TRAX Green Line, Fairpark station ([Utah State Fair](https://utahstatefair.com/p/thefair/plan-your-visit/getting-to-the-fair1)) | Fairpark lots; Fairpark parking described as a major concern in board minutes ([Fairpark board minutes](https://www.utah.gov/pmn/files/1222367.pdf)) |

### 3b. Fixed rooms ~1,000–5,000 (coverage, lower priority)

| ID | Venue | Municipality | Capacity | Source | Travel evidence |
|---|---|---|---|---|---|
| R01 | Eccles Theater | Salt Lake City | 2,500 | [Provo Music Magazine](https://provomusicmagazine.com/2025/11/25/smith-entertainment-group-announces-new-venue-in-slc/) | None found (U) |
| R02 | The Union Event Center | Salt Lake City | ~3,500 | same | None found (U) |
| R03 | The Complex | Salt Lake City | ~3,000 | same | None found (U) |
| R04 | Red Butte Garden Amphitheatre | Salt Lake City | ~3,000 | same | None found (U) |
| R05 | The Great Saltair | Magna | 4,000 indoor | same | None found (U) |
| R06 | Abravanel Hall, Capitol Theatre, Rose Wagner, Mid-Valley PAC | SLC / Midvale | Not verified | UTA lists them as served venues without ticket-as-fare ([UTA Event Service](https://www.rideuta.com/Rider-Info/Event-Service)) | None found (U) |

**Coverage gaps:** Conference Center (capacity not verified in this pass), Salt Palace Convention Center events, Mountain America Expo Center, Zions Bank Stadium (Herriman), Kingsbury Hall, and Utah Motorsports Campus (Tooele County) were not verified.

### 3c. Event-specific rows (not fixed-capacity records)

| ID | Event | Site | Crowd size and denominator | Date / season | Transit arrangement |
|---|---|---|---|---|---|
| E01 | Utah State Fair | Utah State Fairpark, SLC | 300,967 total over the 2024 fair ([Legislature presentation, Jan 2025](https://le.utah.gov/interim/2025/pdf/00000313.pdf)); 300,000+ over 11 days in 2025 ([ABC4](https://www.abc4.com/news/wasatch-front/utah-state-fairpark-2025-economic-impact/amp/)). **Multi-day total, not a simultaneous crowd**; simple daily mean ≈ 27,000 (300,000 ÷ 11). | September (2025: Sept 4–14) | TRAX Green Line Fairpark station; bus routes; **remote lot with shuttle** used by 1,700+ vehicles in 2024 ([Legislature presentation](https://le.utah.gov/interim/2025/pdf/00000313.pdf)) |
| E02 | Kilby Block Party | Utah State Fairpark | **Conflict:** 25,000+ per day in 2024 ([KSL](https://www.ksl.com/article/51203047/lineup-announced-for-2025-kilby-block-party-as-it-expands-to-4-nights-of-music)); 15,000–20,000 per day expected in 2025 ([KSL NewsRadio](https://kslnewsradio.com/utah/kilby-block-party/2213470/)); ~30,000 per day expected in 2026 ([Deseret News](https://www.deseret.com/utah/2026/05/14/kilby-block-party-2026-what-to-expect/)). Per-day figures; do not sum across days. | Mid-May | **Ticket-as-fare on all UTA services**; bike valet ([Deseret News](https://www.deseret.com/utah/2026/05/14/kilby-block-party-2026-what-to-expect/)) |
| E03 | Days of '47 Rodeo | Days of '47 Arena (V13) | At least 48,000 fans expected over the 2026 rodeo week ([Utah News Dispatch](https://newsletters.utahnewsdispatch.com/p/the-days-of-47-rodeo-is-riding-high-here-s-why)); 2025 attendance ~70–75% of capacity ([Fairpark minutes](https://www.utah.gov/pmn/files/1339473.pdf)). Five nightly performances in 2026 ([AXS](https://www.axs.com/teams/1109673)) → ≈9,600 per night (48,000 ÷ 5). | July | TRAX Green Line |
| E04 | General Conference (Church of Jesus Christ of Latter-day Saints) | Conference Center / Temple Square, SLC | More than 100,000 attendees across each twice-yearly conference ([ABC4](https://www.abc4.com/news/religion/general-conference-is-this-weekend-what-to-expect-if-youre-heading-to-salt-lake-city/amp/)). **Weekend total across five sessions**; per-session crowd not published. | First weekends of April and October | Ticket-as-fare; extra Blue Line cars and trains; North Temple closures before sessions ([ABC4](https://www.abc4.com/news/religion/general-conference-is-this-weekend-what-to-expect-if-youre-heading-to-salt-lake-city/amp/)) |
| E05 | Salt Lake City Marathon | Open course | Not found | April | Race bibs and volunteer credentials accepted as TRAX fare; early service ([UTA, 2017](https://www.rideuta.com/News/2017/04/UTA-is-Your-Ride-to-Spring-Sports)) |
| E06 | Multi-event peak day | Downtown, U of U, Fairpark, Sandy | On Sept 11, 2015, a Utah football game, Jazz game, Salt Palace event, State Fair, RSL game, a church conference and an Abravanel Hall event coincided; TRAX carried 100,293 people that day ([UTA](https://rideuta.com/News/2019/11/TRAX-20th-Anniversary)) | One day | Systemwide total including regular riders — **not convertible to a share** |
| E07 | Utah Arts Festival, Twilight Concert Series, Pride, open-site plaza parties | Downtown SLC | Not researched in this pass | Summer | Gap |

---

## 4. Mode-share table and recommended car-share values

"Car" = private car + carpool + rideshare + drop-off (+ remote-lot shuttle where applicable). "Transit" = scheduled and event-augmented UTA bus/rail. "Shuttle" = dedicated event shuttle not counted elsewhere. All E-class splits are estimates; ranges carry the real uncertainty.

| ID | Venue / event (config) | Car | Public transit | Dedicated event shuttle | Walk / bike / other | Unclassified | Sums to 100%? | **Recommended car share (range)** | Class | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|
| V01 | Delta Center – Jazz | 0.80 | 0.13 | 0 | 0.07 | 0 | Yes (by construction) | **0.80 (0.70–0.88)** | E | Low |
| V02 | Delta Center – Mammoth | 0.80 | 0.13 | 0 | 0.07 | 0 | Yes | **0.80 (0.70–0.88)** | E | Low |
| V03 | Delta Center – concert | 0.82 | 0.11 | 0 | 0.07 | 0 | Yes | **0.82 (0.72–0.90)** | E | Low |
| V04 | Rice-Eccles – Utah football | 0.75 | 0.20 (TRAX, agency estimate) + ~0.01–0.03 bus | Special direct buses folded into transit | ~0.03–0.08 | Residual absorbed in ranges | Yes, with ranges | **0.75 (0.68–0.82)**; car-involved incl. park-and-ride ≈ 0.81–0.87 | A (transit) → E (car) | Medium |
| V05 | Rice-Eccles – stadium concert | 0.80 | ~0.15 | Unknown | ~0.05 | — | Yes | **0.80 (0.70–0.88)** provisional | E | Low |
| V06 | Huntsman Center – gymnastics/basketball | 0.82 (incl. park-at-Rice-Eccles + TRAX hop) | 0.10 | 0 | 0.08 | 0 | Yes | **0.82 (0.72–0.90)** | E | Low |
| V07 | America First Field – soccer | 0.88 | 0.09 | 0 | 0.03 | 0 | Yes | **0.88 (0.80–0.94)** | E | Low |
| V08 | America First Field – concert | 0.90 | 0.08 | 0 | 0.02 | 0 | Yes | **0.90 (0.82–0.95)** | E | Low |
| V09 | Utah First CU Amphitheatre – concert | 0.95 | ~0.01 | Unknown | ~0.01 | ~0.03 | Yes | **0.95 (0.90–0.98)** | E | Medium-low |
| V10 | Maverik Center – hockey/concert | 0.92 | 0.06 | 0 | 0.02 | 0 | Yes | **0.92 (0.85–0.96)** | E | Low |
| V11 | Ballpark at America First Square – Bees | 0.88 | 0.08 | 0 | 0.04 | 0 | Yes | **0.88 (0.80–0.94)** | E | Low |
| V12 | Smith's Ballpark (former) | — | — | — | — | — | n/a | **No active crowd; exclude** | — | — |
| V13 / E03 | Days of '47 Arena – rodeo | 0.88 | 0.09 | 0 | 0.03 | 0 | Yes | **0.88 (0.80–0.94)** | E | Low |
| E01 | Utah State Fair (per day) | 0.85 (incl. remote-lot shuttle) | 0.11 | Remote shuttle counted as car | 0.04 | 0 | Yes | **0.85 (0.75–0.92)** | E | Low |
| E02 | Kilby Block Party (per day) | 0.70 | 0.22 | 0 | 0.08 | 0 | Yes | **0.70 (0.55–0.82)** | E | Low |
| E04 | General Conference (per session) | 0.75 | 0.20 | 0 | 0.05 | 0 | Yes | **0.75 (0.60–0.85)** | E | Low |
| E05 | Salt Lake City Marathon | — | — | — | — | 1.00 | No data | **Unknown → `hub` fallback 0.85 provisionally** (open course; poor fit for a single share) | U | — |
| E07 | Arts Festival / Twilight / Pride | — | — | — | — | 1.00 | No data | **Unknown → fallback 0.85** | U | — |
| R01–R06 | Theaters and 1,000–5,000 rooms | — | — | — | — | 1.00 | No data | **Unknown → fallback 0.85** (downtown theaters likely below this) | U | — |

### 4a. Derivations, row by row

**V04 Rice-Eccles football — the anchor row.**
- *Transit:* UTA estimated about 20% of fans inside the stadium for the BYU–Utah game took TRAX, and reported 40–50% more passengers on Utes game days ([FOX13, Nov 2024](https://fox13now.com/news/driven-to-change/how-officials-are-working-to-limit-traffic-impacts-of-the-new-daybreak-ballpark)). That game set the stadium record of 54,383 ([Thrillzing](https://thrillzing.com/stadiums/rice-eccles-stadium-salt-lake-city/)), implying roughly 0.20 × 54,383 ≈ 10,900 TRAX riders. The 20% is an agency estimate, likely rounded, for a peak rivalry game; it is an attendee share (the "fans inside" denominator), not a boardings count.
- *Cross-checks (older, consistent):* University Commuter Services once anticipated 6,000–8,000 TRAX riders for a game expected to draw about 40,000, i.e., 15–20% ([Daily Utah Chronicle, undated](https://dailyutahchronicle.com/?p=58022)). UTA said in 2019 that TRAX typically clears 7,500 football fans from the stadium in 15 minutes ([UTA](https://rideuta.com/News/2019/11/TRAX-20th-Anniversary)) — a post-game clearance figure, not a total share.
- *Bus/shuttle:* UTA runs special direct buses from Salt Lake Central and overflow buses from 400 South TRAX stations ([KUTV](https://kutv.com/news/local/utes-tickets-double-as-uta-passes-on-game-day)); no counts found → assumed 1–3%.
- *Walk/bike:* campus housing and adjacent neighborhoods; free bike parking is promoted ([U of U stadium page](https://www.stadium.utah.edu/uncategorized/transportation-impacts-options-on-football-game-days/)) → assumed 3–8%.
- *Car:* 1 − 0.20 − (0.01 to 0.03) − (0.03 to 0.08) = **0.69 to 0.76**; recommended 0.75 with a widened 0.68–0.82 range because the 20% anchor is a single-game estimate.
- *Park-and-ride:* UTA runs special Draper–stadium trains, so many TRAX riders start from suburban stations. If 30–60% of TRAX riders drove to a station (assumption, no source), car-involved = 0.75 + 0.20 × (0.30 to 0.60) = **0.81 to 0.87**. Use 0.75 for venue-approach pressure.
- *Vehicles vs people:* Commuter Services said average occupancy rises to about 3.5 people per car on BYU–Utah game day ([Daily Utah Chronicle](https://dailyutahchronicle.com/?p=58022)). Illustration only: 54,383 × 0.75 ÷ 3.5 ≈ 11,650 vehicles; at an assumed 2.5 per car it would be ≈ 16,300.
- *Operations:* Ticket doubles as UTA fare on game day; extended Red Line and FrontRunner late service after night games ([KUTV](https://kutv.com/news/local/utes-tickets-double-as-uta-passes-on-game-day)). For 2025 games, Guardsman Way closed for hours around kickoff and the university said TRAX would be affected only by extra riders ([U of U, Oct 2025](https://attheu.utah.edu/facultystaff/impacts-of-the-utah-football-home-opener/); [U of U, Sept 2025](https://attheu.utah.edu/announcements/impacts-of-the-upcoming-football-game-at-rice-eccles-stadium/)). For the Thursday 2025 opener, UTA added 7–10 trains to normal service and the university urged staff and students to ride TRAX and allowed classes to go online ([U of U](https://attheu.utah.edu/?p=125491)). In 2021, a 500 South lane closed from 6 a.m. on game days and all lanes closed for an hour after games ([U of U stadium page](https://www.stadium.utah.edu/uncategorized/transportation-impacts-options-on-football-game-days/)).
- *Weekday vs weekend:* Weekday evening games overlap campus and commute traffic; the university's response (transit push, online classes) suggests a higher transit share is plausible on those days, but none was measured.

**V01–V03 Delta Center — estimated by comparison with V04.**
- Structural differences from Rice-Eccles that point to a *lower* transit share: Jazz and Mammoth games are explicitly *not* ticket-as-fare events ([UTA Event Service](https://www.rideuta.com/Rider-Info/Event-Service)); parking is abundant (>10,000 spaces within two blocks per the [Jazz](https://www.nba.com/jazz/arena/parking)); no special direct trains are documented.
- Differences pointing to a *higher* non-car share: Arena station sits at the front door on two lines and is inside the Free Fare Zone ([Wikipedia](https://en.wikipedia.org/wiki/Arena_station_(Utah_Transit_Authority))), so downtown hotel guests and residents ride or walk free.
- Estimate: transit 8–18% (central 13%), walk/bike 4–10% (central 7%), car 72–88% (central 80%). Concerts set slightly higher car (0.82) because no team-transit habit exists and audiences are more regional.
- Parking check, not a share conversion: at 17,867 attendees × 0.80 ÷ an assumed 2.5 per car ≈ 5,700 vehicles, well within the >10,000 nearby spaces, so parking does not constrain driving.
- Hockey and basketball configurations are mutually exclusive; the two teams never host on the same night even when both play that date (25 shared dates in 2025-26 per [KSL Sports](https://kslsports.com/?p=554843)).
- Start/end service: in 2017 UTA said late TRAX service would run after games if needed, with riders asked to reach Arena station within 30 minutes of the end ([UTA](https://www.rideuta.com/News/2017/04/UTA-is-Your-Ride-to-Spring-Sports)); a current equivalent statement was not found. Re-verify.

**V06 Huntsman Center.** Free public parking at Rice-Eccles next to TRAX ([Deseret News](https://www.deseret.com/sports/2026/02/10/utah-utes-renovating-huntsman-center-mark-harlan)) creates drive-then-short-TRAX-hop trips, which are counted as car under the remote-parking rule. Students walk. Typical gymnastics crowd 12,207 average in 2025 ([Salt Lake Tribune](https://sltrib.com/sports/utah-utes/2025/03/14/would-new-arena-impact-attendance)); 11,191 at the 2026 opener ([Utah Athletics](https://utahutes.com/news/2026/1/2/gymnastics-no-5-red-rocks-packed-jon-m-huntsman-center-to-open-2026-season)). Estimate car 0.82.

**V07–V08 America First Field.** Suburban site beside I-15 with large lots; TRAX Blue Line at Sandy Expo; not ticket-as-fare per UTA's list ([UTA Event Service](https://www.rideuta.com/Rider-Info/Event-Service)). UTA historically lengthened Blue Line trains when RSL and other events coincided ([UTA, 2017](https://www.rideuta.com/News/2017/04/UTA-is-Your-Ride-to-Spring-Sports)). Estimate car 0.88 (soccer), 0.90 (concert).

**V09 Utah First Credit Union Amphitheatre.** No rail service verified; carpool lot incentive ([Ticketmaster](https://blog.ticketmaster.com/venue-faq-usana-amphitheatre-west-valley-city-ut/)). Car share is structurally near-total; rideshare is counted as car. Estimate 0.95.

**V10 Maverik Center.** Decker Lake TRAX station across the street, but large inexpensive on-site parking and a regional ECHL audience. Estimate 0.92.

**V11 Ballpark at America First Square.** New Red Line station feet from the entrance, trails for bikes and scooters, but plentiful paid lots and new Mountain View Corridor access ([FOX13](https://fox13now.com/news/driven-to-change/how-officials-are-working-to-limit-traffic-impacts-of-the-new-daybreak-ballpark); [MiLB](https://www.milb.com/app-firstpitch/salt-lake/news/first-game-press-release)). It is about 45 minutes by TRAX from downtown ([Stadium Journey](https://www.stadiumjourney.com/stadiums/the-ballpark-at-america-first-square-salt-lake-bees)). Estimate 0.88.

**E01 Utah State Fair.** Remote parking at the State Tax Commission lot with a shuttle served 1,700+ vehicles in 2024 ([Legislature presentation](https://le.utah.gov/interim/2025/pdf/00000313.pdf); [Fairpark minutes](https://www.utah.gov/pmn/files/1222367.pdf)). Illustrative lower bound only: at an assumed 2.5–3.0 people per vehicle, 4,250–5,100 people ≈ 1.4–1.7% of 300,967 attendees used remote parking plus shuttle (car-involved). Estimate total car 0.85.

**E02 Kilby Block Party.** Ticket-as-fare across all UTA modes, TRAX stop across from the Fairpark, bike valet, younger and partly out-of-town audience ([Deseret News](https://www.deseret.com/utah/2026/05/14/kilby-block-party-2026-what-to-expect/)). Estimate car 0.70 — the lowest in the region, but still well above the `transit` default.

**E04 General Conference.** Ticket-as-fare and organizer encouragement to ride transit, plus Temple Square renovation constraints through 2027 ([ABC4](https://www.abc4.com/news/religion/general-conference-is-this-weekend-what-to-expect-if-youre-heading-to-salt-lake-city/amp/)). Estimate car 0.75 with a wide range.

### 4b. Ridership figures that cannot be converted to shares (shown so they are not misused)

| Figure | Source | Why not convertible |
|---|---|---|
| 57,300 riders over one 2024 weekend with an air show, arts festival and a stadium concert at Rice-Eccles | [UTA board minutes, Feb 2025](https://rideuta.legistar.com/View.ashx?GUID=144B03B8-FCAF-445A-81CC-0707136CD6B1&ID=13779278&M=F) | Several events combined; no baseline subtraction; boardings not people |
| +171,000 ridership vs the prior week during 2023 NBA All-Star | [UTA board minutes, Mar 2023](https://www.utah.gov/pmn/files/958599.pdf) | Multi-day, multi-venue; no attendance denominator |
| 100,293 TRAX riders on the Sept 11, 2015 multi-event day | [UTA](https://rideuta.com/News/2019/11/TRAX-20th-Anniversary) | Includes all regular riders |
| 40–50% more passengers on Utes game days | [FOX13](https://fox13now.com/news/driven-to-change/how-officials-are-working-to-limit-traffic-impacts-of-the-new-daybreak-ballpark) | Unclear base (line vs system) |

---

## 5. Regional conclusion

### 5a. Recommended city type: `hub`

**Car-share evidence rules out `transit`.** The only agency-grounded share (Rice-Eccles, ~20% TRAX at the region's most transit-oriented event) implies about 0.75 car. No venue or event plausibly reaches the 0.6 non-car share that the 0.4 `transit` default assumes.

**Between `sprawl` and `hub`, the evidence favors `hub`.** Both carry the same 0.85 fallback, so the decision is about crowd spill, not driving share:
- A core cluster exists: Delta Center, Conference Center/Temple Square and downtown theaters; the Fairpark (Days of '47 Arena, State Fair, Kilby) on North Temple west of downtown; and the university (Rice-Eccles, Huntsman) east of downtown. These share TRAX lines (Green Line serves both Arena and Fairpark; Blue Line serves Arena and Temple Square) and downtown approaches.
- Overlap is real and documented: the 2015 seven-event day ([UTA](https://rideuta.com/News/2019/11/TRAX-20th-Anniversary)) and the 2024 weekend combining a Rice-Eccles concert with downtown festivals ([UTA minutes](https://rideuta.legistar.com/View.ashx?GUID=144B03B8-FCAF-445A-81CC-0707136CD6B1&ID=13779278&M=F)).
- Rail meaningfully reduces car share at core events (roughly 0.70–0.82) versus suburban venues (0.88–0.95).

**Strongest contrary evidence (toward `sprawl`):**
1. About 38% of 5,000+ fixed capacity (58,313 of 152,624 in §5b) sits in dispersed, near-car-only suburban venues (Utah First Amphitheatre, America First Field, Maverik Center, the Daybreak ballpark), with no shared approaches with downtown.
2. Even downtown, parking supply is abundant (>10,000 spaces around the Delta Center) and the teams do not offer ticket-as-fare.
3. Background commuting is heavily drive-alone (about 67–69%).
4. Every core-venue split except Rice-Eccles is an estimate, so the "hub" contrast leans on judgment.

**Venue exceptions to the `hub` fallback:** Utah First Amphitheatre (0.95), Maverik Center (0.92), America First Field (0.88–0.90) and the Daybreak ballpark (0.88) should carry venue-specific shares above 0.85; Rice-Eccles football (0.75), Kilby (0.70) and General Conference (0.75) below it.

### 5b. Weighted car shares

Weights use one configuration per venue (no mutually exclusive configurations added), single-event crowds only (no multi-day totals). Car shares are this document's values from §4, so the weighted results inherit their uncertainty; only V04 is agency-grounded.

**Capacity-weighted (largest regular configuration per fixed 5,000+ venue):**

| Venue (config) | Weight | Car share | Product |
|---|---|---|---|
| Rice-Eccles (football) | 51,444 | 0.75 | 38,583 |
| Delta Center (Jazz) | 17,867 | 0.80 | 14,294 |
| Utah First Amphitheatre (conservative 20,000) | 20,000 | 0.95 | 19,000 |
| America First Field (soccer) | 20,213 | 0.88 | 17,787 |
| Huntsman Center | 15,000 | 0.82 | 12,300 |
| Maverik Center (hockey) | 10,100 | 0.92 | 9,292 |
| Days of '47 Arena | 10,000 | 0.88 | 8,800 |
| Ballpark at America First Square | 8,000 | 0.88 | 7,040 |
| **Total** | **152,624** | — | **127,096** → **0.83** |

- Using the 25,000 amphitheatre figure instead: 131,846 ÷ 157,624 = **0.84**.
- Core venues only (Rice-Eccles, Delta Center, Huntsman, Days of '47): 73,977 ÷ 94,311 = **0.78**.
- Suburban venues only (amphitheatre, America First Field, Maverik, ballpark): 53,119 ÷ 58,313 = **0.91**.
- Excluding Rice-Eccles: 88,513 ÷ 101,180 = **0.87**.

**Typical-attendance-weighted (only venues with a sourced typical crowd):**

| Venue | Typical crowd used | Source | Car | Product |
|---|---|---|---|---|
| Rice-Eccles football | 51,444 (season averages have exceeded capacity for 15 straight campaigns) | [Utah Athletics](https://utahutes.com/facilities/?id=3) | 0.75 | 38,583 |
| Huntsman gymnastics | 12,207 (2025 average) | [Salt Lake Tribune](https://sltrib.com/sports/utah-utes/2025/03/14/would-new-arena-impact-attendance) | 0.82 | 10,010 |
| America First Field | 17,181 (85%, the midpoint of a reviewer's "80–90% of capacity") | [Stadium Journey](https://www.stadiumjourney.com/stadiums/america-first-field-real-salt-lake) | 0.88 | 15,119 |
| Days of '47 Arena | 9,600 (48,000 ÷ 5 nights, 2026) | [Utah News Dispatch](https://newsletters.utahnewsdispatch.com/p/the-days-of-47-rodeo-is-riding-high-here-s-why) | 0.88 | 8,448 |
| Ballpark at AFS | 4,069 (first 2025 homestand average — weak) | [Stadium Journey](https://www.stadiumjourney.com/stadiums/the-ballpark-at-america-first-square-salt-lake-bees) | 0.88 | 3,581 |
| **Total** | **94,501** | — | — | **75,741** → **0.80** |

Missing from typical weighting: Delta Center, Utah First Amphitheatre and Maverik Center (no sourced typical attendance found). Adding the amphitheatre would raise the figure; adding the Delta Center would leave it about the same.

**Do huge outlying venues obscure the downtown pattern?** Partly, in both directions. The 20,000–25,000-capacity amphitheatre and America First Field pull the regional average up toward 0.85, masking a core near 0.78. Conversely, the single largest venue (Rice-Eccles, the lowest car share) pulls the average down; without it the region reads 0.87. Reporting core and suburban values separately is more informative than one regional number.

### 5c. Clusters, shared roads and shared audiences (separate findings)

**Venue clusters**
- *Downtown:* Delta Center, Conference Center/Temple Square, Eccles Theater and other downtown rooms, Salt Palace. The planned 6,000-capacity venue would add to this cluster ([Delta Center](https://www.deltacenter.com/news/seg-livenation-venue/)).
- *Fairpark:* Days of '47 Arena, State Fair, Kilby Block Party; the proposed Power District stadium site is adjacent ([Utah News Dispatch](https://utahnewsdispatch.com/2025/10/27/power-district-starts-construction-still-awaiting-mlb-decision/)).
- *University:* Rice-Eccles Stadium and Huntsman Center.
- *Dispersed suburban:* Maverik Center and Utah First Amphitheatre (West Valley City), America First Field (Sandy), Ballpark at America First Square (South Jordan).

**Shared roads and rail (observed in sources)**
- North Temple is closed intermittently for General Conference ([ABC4](https://www.abc4.com/news/religion/general-conference-is-this-weekend-what-to-expect-if-youre-heading-to-salt-lake-city/amp/)) and is the Fairpark's front street ([Utah State Fair](https://utahstatefair.com/p/thefair/plan-your-visit/getting-to-the-fair1)).
- 300 West between the arena and convention center is under discussion for re-treatment ([KSL](https://www.ksl.com/article/51303888/smith-unveils-plans-for-redesigned-delta-center-450-stall-parking-garage-outside)); the new arena garage exits onto 400 West with a one-lane exit condition ([Building Salt Lake](https://buildingsaltlake.com/delta-center-parking-garage-details-emerge-at-planning-commission/)).
- 500 South and Guardsman Way carry university event closures ([U of U](https://www.stadium.utah.edu/uncategorized/transportation-impacts-options-on-football-game-days/)).
- TRAX Green Line is shared by Arena and Fairpark crowds; Blue Line by Arena, Temple Square and Sandy Expo; Red Line by the university and the Daybreak ballpark.

**Shared audiences**
- Utah Jazz and Utah Mammoth (same owner and building; never simultaneous home games).
- Utah athletics fans across Rice-Eccles and Huntsman.
- Regional concert audiences split among the Delta Center, amphitheatre, America First Field and Fairpark festivals.
- Rivalry crowds that travel between Salt Lake County and Provo on I-15 (edge case).

---

## 6. End-of-brief answers

### 6.1 Recommended existing city type and rationale; strongest contrary evidence

**`hub` (in between).** Car shares run about 0.75–0.82 at core downtown/university events and 0.88–0.95 at suburban venues; capacity-weighted ≈ 0.83, typical-attendance-weighted ≈ 0.80 (§5b). That supports the 0.85-class defaults and rules out `transit` (0.4). `hub` over `sprawl` because of the documented downtown–Fairpark–university cluster with shared rail and arterials and recurring overlapping crowds.

**Strongest contrary evidence:** about 38% of 5,000+ capacity is in dispersed car-only suburban venues; downtown parking is abundant and the pro teams do not offer ticket-as-fare; only one venue has an agency-grounded share. If the Gridlock model treats `hub` spill as requiring dense walkable crowds rather than a mixed rail/car core, `sprawl` would be defensible.

### 6.2 Car-share values keyed to rows (separate classes)

Keys are this document's row IDs; map to companion row keys when that answer is available.

| Class | Rows and values |
|---|---|
| **Measured (M)** | None found for any venue or event. |
| **Agency estimate–derived (A → E)** | V04 Rice-Eccles football **0.75** (0.68–0.82); transit anchor = UTA's ~20% estimate for BYU–Utah, Nov 2024. Car-involved incl. park-and-ride 0.81–0.87. |
| **Projected (P)** | None found (no travel plan or environmental review with event mode assumptions was located for any venue, including the Daybreak ballpark or the Delta Center district). |
| **Estimated (E)** | V01 0.80 · V02 0.80 · V03 0.82 · V05 0.80 · V06 0.82 · V07 0.88 · V08 0.90 · V09 0.95 · V10 0.92 · V11 0.88 · V13/E03 0.88 · E01 0.85 · E02 0.70 · E04 0.75 |
| **Unknown → fallback** | E05, E07, R01–R06 → `hub` fallback 0.85 provisionally. V12 Smith's Ballpark: exclude (no active crowd). |

### 6.3 Boundary recommendation and inconsistencies between briefs

**Boundary:** Salt Lake County, including Sandy, Draper, South Jordan, West Valley City and Magna. Provo/Orem, Park City, Davis County and Ogden are separate edge cases, excluded from this metro's crowd pool (§2).

**Inconsistencies / issues to reconcile:**
1. The companion venue research was unavailable, so rows could not be keyed to its IDs; venues were enumerated independently.
2. The brief's lead list names Draper among event suburbs, but no fixed 5,000+ venue was verified in Draper; it functions as a transit origin.
3. Because `sprawl` and `hub` share the 0.85 default, the city-type choice here does not change the fallback share; if the companion brief assumed a different type for spill reasons, that should be reconciled explicitly.
4. Visitor-industry sources merge four counties as the "Salt Lake Area"; this answer does not.
5. Capacity labels differ across sources (e.g., Rice-Eccles: 51,444 official seating vs 54,383 record attendance, which Wikipedia lists as current capacity — [Wikipedia](https://en.wikipedia.org/wiki/Rice%E2%80%93Eccles_Stadium) vs [Utah Athletics](https://utahutes.com/facilities/?id=3)). Use 51,444 as the configuration capacity and 54,383 only as a peak-crowd observation.

### 6.4 Data gaps, model limitations, source conflicts, inaccessible sources

**Data gaps**
- No measured event mode split anywhere in the metro; no venue travel plan, organizer survey or environmental review with event-mode data was found.
- No station-level UTA event boardings with baseline subtraction were found publicly; UTA board materials report only aggregates.
- No share of event rail riders who drove to park-and-ride lots.
- No typical attendance found for Delta Center events, Utah First Amphitheatre or Maverik Center.
- Not researched: Ogden/Weber venues, Davis County venues, Utah Arts Festival, Twilight Concert Series, Pride, Salt Palace/FanX, Conference Center capacity, Zions Bank Stadium, Utah Motorsports Campus.
- Seasonal evidence is thin: no winter-vs-summer or weekday-vs-weekend split was found for any venue.

**Model limitations**
- Most recommended values are structural estimates calibrated against a single agency-estimated game; treat ranges as the real information.
- Peak rivalry games (the anchor) may have higher transit share than typical games; ordinary games could be closer to 0.78–0.80 car.
- Rideshare is counted as car but loads curbs differently from parking; no rideshare share was found.

**Source conflicts (preserved)**
| Item | Conflict | Treatment |
|---|---|---|
| Utah First Amphitheatre capacity | 25,000 ([Wikipedia](https://en.wikipedia.org/wiki/Utah_First_Credit_Union_Amphitheatre)) vs 20,000 ([Ticketmaster](https://blog.ticketmaster.com/venue-faq-usana-amphitheatre-west-valley-city-ut/)) | Used 20,000 in base weighting; 25,000 shown as sensitivity |
| Kilby Block Party daily crowd | 25,000+ (2024, [KSL](https://www.ksl.com/article/51203047/lineup-announced-for-2025-kilby-block-party-as-it-expands-to-4-nights-of-music)) vs 15,000–20,000 expected (2025, [KSL NewsRadio](https://kslnewsradio.com/utah/kilby-block-party/2213470/)) vs ~30,000 expected (2026, [Deseret News](https://www.deseret.com/utah/2026/05/14/kilby-block-party-2026-what-to-expect/)) | Not used in weighting |
| Smith's Ballpark capacity | 14,511 vs 15,400 | Venue retired; not used |
| Delta Center hockey capacity, 2025-26 | 12,478 official ([KUTV](https://kutv.com/news/local/utah-mammoth-fans-get-more-room-as-delta-centers-first-renovation-phase-wraps)) vs "approximately 17,000" ([KSL Sports](https://kslsports.com/?p=558669)) | 17,000 is the long-term target after all phases ([Utah News Dispatch](https://utahnewsdispatch.com/2025/04/30/smith-entertainment-group-unveils-one-of-a-kind-vision-for-delta-center-remodel/)); current official is 14,111 for 2026-27 |
| Delta Center Jazz capacity | 18,206 pre-renovation ([Utah News Dispatch](https://utahnewsdispatch.com/2025/04/30/smith-entertainment-group-unveils-one-of-a-kind-vision-for-delta-center-remodel/)) vs 17,867 for 2026-27 ([Deseret News](https://www.deseret.com/sports/2026/09/25/delta-center-renovations-revealed-for-2026-2027-utah-jazz-season/)) | Used 17,867 (current) |
| America First Field parking | Bundled in ticket ([Gametime](https://gametime.co/america-first-field-tickets/venues/rio_tinto_stadium)) vs $10–$20 paid ([Stadium Journey](https://www.stadiumjourney.com/stadiums/america-first-field-real-salt-lake)) | Unresolved; does not change estimate materially |
| FrontRunner double-track opening | Late 2028 ([FTA profile, FY24](https://www.transit.dot.gov/sites/fta.dot.gov/files/2024-03/UT-Salt-Lake-City-FrontRunner-Strategic-Double-Track-Project-Profile-FY24_0-AR25.pdf)) vs as early as 2030 pending a $2.4B federal request ([KSL, June 2026](https://www.ksl.com/article/51512887/utah-awaits-24b-rail-expansion-decision-but-its-not-the-only-transit-opportunity)) | Treat 2030 as current expectation |

**Inaccessible / not fully read sources**
- No paywalled or login-gated sources were bypassed. Several primary documents (UTA board packets on Legistar and utah.gov, the UTA 2026 budget book, the Legislature Fairpark presentation, Fairpark board minutes) were read via search extracts rather than full documents; full reads could surface station-level data. Recommended next reads: UTA 2024 and 2025 annual ridership reports, and any UTA "special services" event reports.

### 6.5 Confirmed transport or venue changes through 2028

| Change | Status | Date | Effect on event travel | Suggested re-check |
|---|---|---|---|---|
| Delta Center Phase 2 complete: hockey 14,111, Jazz 17,867; SME garage with 439 spaces for season/premium holders | **Completed** | Sept 2026 ([Deseret News](https://www.deseret.com/sports/2026/09/25/delta-center-renovations-2026-27-utah-mammoth/); [Deseret News](https://www.deseret.com/sports/2026/09/25/delta-center-renovations-revealed-for-2026-2027-utah-jazz-season/)) | Larger hockey crowds; small on-site parking added | Oct 2027 |
| Delta Center Phase 3: all hockey seats full-ice view by 2027-28 | **Scheduled** (privately funded within the district deal) | Summer 2027 ([Deseret News, May 2026](https://www.deseret.com/sports/2026/05/08/delta-center-renovations-2026-2027-utah-jazz-utah-mammoth/)) | Hockey capacity likely rises toward the ~17,000 target | Sept 2027 |
| SEG / Live Nation ~6,000-capacity downtown venue | **Announced, timeline not set**; demolition expected to begin 2027 at earliest | ([KSL](https://www.ksl.com/article/51362733/downtown-slc-revitalization-project-begins-to-take-shape-with-concert-venue-announcement); [KUTV/KMYU](https://kmyu.tv/news/local/new-downtown-music-venue-receives-mixed-reactions-from-salt-lake-community)) | New downtown crowd source, unlikely open by 2028 | Mid-2027 |
| 300 West treatment beside the arena | **Proposal / under discussion** | ([KSL](https://www.ksl.com/article/51303888/smith-unveils-plans-for-redesigned-delta-center-450-stall-parking-garage-outside)) | Could alter arena approaches | 2027 legislative session |
| Midvalley Express (MVX) BRT, Murray Central – SLCC – West Valley Central | **Opened** | April 2026 ([UTA newsroom](https://rideuta.com/Rider-Info/Digital-Newsroom); [UTA budget](https://www.rideuta.com/-/media/Files/About-UTA/Budget/2026_Final_Budget_Book_2025_12_12.pdf)) | Improves east–west access toward West Valley venues | — |
| S-Line streetcar extension | **Under construction** (began May 2026) | ([UTA newsroom](https://rideuta.com/Rider-Info/Digital-Newsroom)) | Minor for event venues | Mid-2027 |
| FrontRunner double-track ("FrontRunner 2X") | **Partly funded** ($300M state; federal request pending); construction start on Draper segment/Bluffdale station expected late 2026 | Full 15-minute service as early as 2030 ([KSL](https://www.ksl.com/article/51512887/utah-awaits-24b-rail-expansion-decision-but-its-not-the-only-transit-opportunity); [KUTV](https://kutv.com/news/utahs-growing-pains/utah-plans-major-transportation-upgrades-in-2026-to-address-rapid-growth); [UTA](https://rideuta.com/About-UTA/Active-Projects/FrontRunner-Forward)) | Could raise regional rail access to downtown events, after 2028 | Each FTA CIG announcement; Jan 2027 |
| Fourth TRAX line | **Proposal** | ([KSL](https://www.ksl.com/article/51512887/utah-awaits-24b-rail-expansion-decision-but-its-not-the-only-transit-opportunity)) | None by 2028 | 2027 |
| Huntsman Center "renovation-plus" (~9,000 seats) instead of a new arena | **Proposal** presented to trustees; not shown as approved/funded | Feb 2026 ([Deseret News](https://www.deseret.com/sports/2026/02/10/utah-utes-renovating-huntsman-center-mark-harlan)) | Would cut a 15,000-seat room to ~9,000 | Spring 2027 |
| Power District MLB stadium | **Proposal**, contingent on MLB expansion; MLB decision indicated by 2029; state district funding contingent on a team by 2032 | ([FOX13](https://www.fox13now.com/news/local-news/northern-utah/ground-broken-at-slc-power-district-project-slated-for-possible-mlb-stadium); [TownLift](https://townlift.com/2026/06/utah-on-deck-salt-lake-city-emerges-as-front-runner-for-mlb-expansion/)) | Would create a large Fairpark-adjacent crowd; not by 2028 | After MLB labor deal / expansion news |
| Sundance leaves Utah | **Confirmed**; final Utah edition Jan 22–Feb 1, 2026 | ([KSL](https://www.ksl.com/article/51584258/sundance-film-festival-is-officially-moving-to-boulder-colorado-in-2027)) | Removes the main Park City edge crowd | — |
| Smith's Ballpark retired; Bees at Daybreak since 2025 | **Confirmed** | ([Wikipedia](https://en.wikipedia.org/wiki/Smith%27s_Ballpark); [MiLB](https://www.milb.com/app-firstpitch/salt-lake/news/first-game-press-release)) | Ballpark crowd moved from central SLC to the south-west suburbs | — |
| Days of '47 Rodeo contract: event days 10 → 13 | **Approved** (six rodeo years) | June 2026 ([Fairpark minutes](https://www.utah.gov/pmn/files/1474843.pdf)) | Longer Fairpark event period | July 2027 |
| Temple Square renovations | **Ongoing**, expected to finish 2027 | ([ABC4](https://www.abc4.com/news/religion/general-conference-is-this-weekend-what-to-expect-if-youre-heading-to-salt-lake-city/amp/)) | Affects General Conference access | Oct 2027 |

---

*Public data only. No app code, hand flags, personal ratings or cost commitments are included. All shares labelled E are estimates and should be replaced by measured values if a venue survey, travel plan, or UTA station-level event count becomes available.*
