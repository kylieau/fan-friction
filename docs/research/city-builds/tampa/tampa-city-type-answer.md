# Tampa Bay — Event-Travel Evidence and City-Type Assessment for Fan/Friction Gridlock

**Research date:** Sunday, October 11, 2026 (public web sources only; all links accessed on this date)
**Scope:** Tampa, St. Petersburg and Clearwater core; Hillsborough and Pinellas counties; Pasco, Hernando, Polk, Sarasota/Manatee assessed as edges.
**Settings assessed (not changed):** `sprawl` (0.85 car share), `hub` (0.85), `transit` (0.40).

---

## 0. Read this first — what the evidence can and cannot support

1. **No measured, published person-mode split was found for any Tampa Bay venue or event.** I searched venue travel pages, team/organizer material, city event pages, transit-agency releases and stadium-planning coverage. No public intercept survey, travel-plan monitoring report or environmental review with an attendee mode split surfaced. Every car-share value below is therefore an **estimate**, labeled as such, with assumptions shown.
2. **Two ridership-inference checks were possible** (Tropicana Field, Benchmark International Arena). Both point to transit carrying only low single-digit percentages of a major crowd. They are shown with baseline subtraction and denominators in §4.
3. **The companion venue answer was not available in this conversation.** Venues were enumerated independently; row IDs below (e.g., `TPA-ARENA-NHL`) are proposed keys. Gaps are listed in §7.
4. **Park-and-ride is common and counted as car-involved.** The arena, Gasparilla, the Grand Prix, Rays games and the Clearwater amphitheater all promote "park remotely, then ride a streetcar/shuttle." Those riders drove, so they are counted in the car share, not the transit share.

---

## 1. Background only — ordinary commuting (not event travel)

| Measure | Value | Source | Use |
|---|---|---|---|
| Hillsborough commute: drove alone / carpool / transit / walk / WFH | 76.8% / 9.1% / 1.2% / 1.5% / 9.5% | [995 QYK listicle summarizing ACS](https://995qyk.com/listicle/which-tampa-bay-county-has-the-longest-commute/) (secondary; ACS vintage not stated) | Background only |
| City of Tampa transit participation (official estimate) | about 2% | [WUSF, Jan 2024, quoting Tampa mobility director](https://www.wusf.org/transportation/2024-01-05/commuters-made-comeback-downtown-tampa-2023) | Background only |
| Tampa MSA transit commute share, 2009 ACS (historic) | 1.4% | [Forum repost of Transport Politic ACS table](https://forum.skyscraperpage.com/showthread.php?p=5016017) (low quality, historic) | Trend context only |

These describe work trips, not event trips, and are **not** used to set any venue value.

---

## 2. Boundary recommendation

### 2.1 Sourced population and statistical-area evidence

| Area | Official grouping | Population | Source |
|---|---|---|---|
| Tampa–St. Petersburg–Clearwater MSA | Hernando, Hillsborough, Pasco, Pinellas | 3,403,788 (2025 est., Florida EDR) | [Florida EDR MSA 2025 estimates (PDF)](https://edr.state.fl.us/Content/population-demographics/data/MSA-2025Estimate.pdf) |
| Same MSA, alternate estimate | same | 3,418,895 (2025 est.) | [Wikipedia: Florida statistical areas](https://en.wikipedia.org/wiki/Florida_statistical_areas) |
| Pasco County | inside MSA | 648,369 (EDR 2025) | [EDR PDF](https://edr.state.fl.us/Content/population-demographics/data/MSA-2025Estimate.pdf) |
| Hernando County | inside MSA | 212,849 (EDR 2025) | [EDR PDF](https://edr.state.fl.us/Content/population-demographics/data/MSA-2025Estimate.pdf) |
| Polk County | separate Lakeland–Winter Haven MSA | 846,896 (EDR 2025) vs 874,790 (Wikipedia 2025) | [EDR PDF](https://edr.state.fl.us/Content/population-demographics/data/MSA-2025Estimate.pdf); [Wikipedia](https://en.wikipedia.org/wiki/Florida_statistical_areas) |
| Manatee + Sarasota | separate MSA (North Port–Bradenton–Sarasota) | not retrieved | [Florida Realtors MSA definitions (PDF)](https://www.floridarealtors.org/sites/default/files/2023-11/October-2023-Fla-MSA-summary.pdf) |

The MSA county list comes from the 2023 OMB delineations as tabulated by [Florida Realtors](https://www.floridarealtors.org/sites/default/files/2023-11/October-2023-Fla-MSA-summary.pdf) and [Florida EDR](https://edr.state.fl.us/content/population-demographics/data/MSA-2024-2023Delineation.pdf). The Wikipedia table lists the Tampa MSA with no combined statistical area, i.e., OMB does not group Polk or Sarasota/Manatee with it.

**Conflict preserved:** EDR (state, BEBR-based) and the Wikipedia table (likely Census Vintage 2025) differ by about 15,000 for the MSA and about 28,000 for Polk. The gap is definitional (estimate program), not material to the boundary.

### 2.2 Recommendation

- **Venue/event core:** Hillsborough + Pinellas. Every fixed 5,000+ room verified in this pass sits in these two counties.
- **Audience-origin ring (not venue core):** Pasco + Hernando. They are in the MSA and feed crowds via I-275, I-75, the Veterans/Suncoast and US-19, but no 5,000+ fixed venue was verified there.
- **Edges, keep separate:** Polk (own MSA; Lakeland's Detroit Tigers spring park, [8,500 capacity](https://en.wikipedia.org/wiki/List_of_Major_League_Baseball_spring_training_ballparks)) and Sarasota/Manatee (own MSA; Pirates, Orioles, Braves spring parks per [Visit St. Pete/Clearwater](https://www.visitstpeteclearwater.com/things-to-do/baseball-spring-training-st-peteclearwater)). Treat their spring-training crowds as **Florida-wide spring-training travel**, not metro membership.
- **Edge-case municipalities to flag individually:** Dunedin (TD Ballpark — inside Pinellas, but small-grid walkable downtown); Plant City (Hillsborough, festival site not researched); Lakeland and Winter Haven (Polk); Bradenton and North Port (separate MSA); Wesley Chapel/Zephyrhills (Pasco, no verified 5,000+ room).
- **Event-audience evidence:** No public origin data (ZIP-code ticketing, survey) was found for any venue, so the boundary rests on statistical-area and venue-location evidence only. The [Royal Rumble/Gasparilla weekend coverage](https://ilovetheburg.com/sunrunner-tpa-ridership) notes visitors from at least 15 countries and 43 states — a reminder that large events draw well beyond any metro line.

---

## 3. Venue and event travel table (summary)

**Legend.** *Car* = private car, carpool, rideshare/taxi, and any remote-parking-plus-shuttle or park-and-ride trip. *Transit* = public bus/streetcar/BRT accessed without a car. *Shuttle* = dedicated event shuttle or charter bus accessed without a car. *Walk/bike/other* includes ferry and scooter. All values are **people** (attendees), not vehicles, ticket buyers or boardings. "Sums to 100" is by construction for estimates; no row is measured.

| Row ID | Verified current name / municipality | Setup & date represented | Car | Transit | Shuttle | Walk/bike/other | Unclass. | Rec. car share (range) | Conf. | Type |
|---|---|---|---|---|---|---|---|---|---|---|
| `TPA-ARENA-NHL` | Benchmark International Arena, Tampa | Lightning NHL, 2025–26 season, hockey config | 88 | 3 | 0 | 9 | 0 | **0.88** (0.80–0.94) | Low | Estimate + ridership check |
| `TPA-ARENA-CONCERT` | same | Touring concerts (config not verified) | 88 | 3 | 0 | 9 | 0 | **0.88** (0.80–0.94) | Low | Estimate (same as NHL) |
| `TPA-RJS-NFL` | Raymond James Stadium, Tampa | Buccaneers NFL, 2026 season | 95 | 1 | 2 | 2 | 0 | **0.95** (0.90–0.98) | Low–Med | Estimate |
| `TPA-RJS-USF` | same | USF football through 2026 season | 95 | 1 | 1 | 3 | 0 | **0.95** (0.90–0.98) | Low | Estimate |
| `TPA-RJS-CONCERT` | same | Stadium concerts / festivals | 95 | 1 | 2 | 2 | 0 | **0.95** (0.90–0.98) | Low | Estimate |
| `STP-TROP-MLB` | Tropicana Field, St. Petersburg | Rays MLB, 2026 season (return from April) | 91 | 2 | 1 | 6 | 0 | **0.91** (0.85–0.95) | Low | Estimate + ridership check |
| `STP-TROP-RUMBLE24` | same | WWE Royal Rumble, Jan 27, 2024 (historic, full config) | — | 0.9–2.2 (SunRunner only) | — | — | rest | n/a (event-specific) | Low | Ridership inference |
| `TPA-GMS-SPRING` | George M. Steinbrenner Field, Tampa | Yankees spring training (Feb–Mar) | 95 | 1 | 1 | 3 | 0 | **0.95** (0.90–0.98) | Low | Estimate |
| `TPA-GMS-RAYS25` | same | Rays MLB 2025 (historic, not active in 2026) | 95 | 1 | 1 | 3 | 0 | 0.95 (0.90–0.98) | Low | Estimate |
| `TPA-AMPH-CONCERT` | MIDFLORIDA Credit Union Amphitheatre, Tampa (Fairgrounds) | Summer concert season 2026 | 97 | 1 | 0 | 2 | 0 | **0.97** (0.93–0.99) | Low | Estimate |
| `TPA-FAIR-2026` | Florida State Fair, Florida State Fairgrounds | Feb 5–16, 2026 (multi-day) | 94 | 1 | 3 | 2 | 0 | **0.94** (0.88–0.98) | Low | Estimate |
| `TPA-GASP-PIRATE` | Gasparilla Pirate Fest (open site), Tampa | Jan 31, 2026 | 85 | 3 | 1 | 11 | 0 | **0.85** (0.75–0.92) | Very low | Estimate |
| `TPA-GASP-CHILD` | Children's Gasparilla Parade, Tampa | Jan 24, 2026 | — | — | — | — | 100 | unknown → fallback | None | No evidence |
| `STP-GP-INDY` | Firestone Grand Prix of St. Petersburg (street circuit) | Feb 27–Mar 1, 2026 (multi-day) | 88 | 4 | 0 | 8 | 0 | **0.88** (0.78–0.94) | Very low | Estimate |
| `CLW-SOUND` | BayCare Sound at Coachman Park, Clearwater | Concerts, 9,000 incl. lawn | 92 | 1 | 0 | 7 | 0 | **0.92** (0.86–0.96) | Low | Estimate |
| `CLW-BAYCARE-SPRING` | BayCare Ballpark, Clearwater | Phillies spring training | 97 | 1 | 0 | 2 | 0 | **0.97** (0.93–0.99) | Low | Estimate |
| `DUN-TD-SPRING` | TD Ballpark, Dunedin | Blue Jays spring training | 93 | 1 | 0 | 6 | 0 | **0.93** (0.87–0.97) | Low | Estimate |
| `STP-ALLANG-USL` | Al Lang Stadium, St. Petersburg | Rowdies USL, 2026 season | 87 | 2 | 1 | 10 | 0 | **0.87** (0.78–0.93) | Low | Estimate |
| `TPA-USF-STADIUM-27` | USF on-campus stadium, Tampa | Projected, from Sept 2027 | 80 | 2 | 1 | 17 | 0 | 0.80 (0.68–0.90) | Very low | Projection-style estimate (not active) |

---

## 4. Ridership inference (the only quantitative transit evidence)

### 4.1 Tropicana Field — WWE Royal Rumble, Saturday Jan 27, 2024

| Step | Value | Source / assumption |
|---|---|---|
| SunRunner boardings that day (all purposes) | 3,406 | [I Love the Burg, citing PSTA](https://ilovetheburg.com/sunrunner-tpa-ridership) |
| Baseline daily boardings | ~1,650 (low) to ~2,500 (high, Saturday uplift) | >50,000 rides/month after fares ([Bay News 9](https://baynews9.com/fl/tampa/news/2024/01/25/sunrunner-ridership-down-since-fare-implemented)) ÷ 30.4 days ≈ 1,650; PSTA says SunRunner ridership peaks on weekends ([ABC Action News](https://abcactionnews.com/news/region-pinellas/psta-board-of-directors-approves-the-purchase-of-three-new-sunrunner-buses)), so a higher Saturday baseline is assumed |
| Incremental boardings | 906–1,756 | subtraction |
| Attendees (assume 2 boardings per round trip) | 453–878 | ÷ 2 |
| Denominator | 48,044 (record attendance) or ~40,000 (PSTA pre-event estimate) | [Wikipedia: Tropicana Field](https://en.wikipedia.org/wiki/Tropicana_Field); [Bay News 9](https://baynews9.com/fl/tampa/news/2024/01/25/sunrunner-ridership-down-since-fare-implemented) (printed with a typo as "40,0000") |
| **SunRunner share of attendees** | **≈0.9%–2.2%** | |

Uncertainty: PSTA added buses and a $3 promo day pass for this event ([Bay News 9](https://baynews9.com/fl/tampa/news/2024/01/25/sunrunner-ridership-down-since-fare-implemented)), so a regular Rays game likely sees less. Free Downtown Looper riders are not counted. Some riders may have parked along the corridor (car-involved). One-way riders would raise the person count. This is a wrestling event in full-stadium configuration, not a Rays game.

### 4.2 Benchmark International Arena (then Amalie/Times Forum) — 2015 NCAA Women's Final Four

| Step | Value | Source / assumption |
|---|---|---|
| Streetcar trips on game days | 1,362 (Apr 5 semis), 2,028 (Apr 7 final) | [Mass Transit, HART release, Apr 2015](https://www.masstransitmag.com/rail/press-release/12065513/hillsborough-area-regional-transit-authority-hart-teco-line-streetcar-system-reaps-increased-ridership-during-special-events) |
| Baseline | 712 trips/day (FY2015 average) | same source |
| Incremental trips | 650–1,316 | subtraction |
| Attendees (2 trips each) | 325–658 | ÷ 2 |
| Denominator (capacity proxy, attendance not retrieved) | 20,500 basketball capacity | [Galaxy Shows venue guide](https://galaxyshows.com/?p=1335) (secondary) |
| **Streetcar share** | **≈1.6%–3.2%** (lower bound if attendance < capacity) | |

Uncertainty: this predates fare-free service (fares ended in 2018 per [That's So Tampa](https://thatssotampa.com/tampa-streetcar-all-time-annual-ridership-record)) and Water Street's residential growth, so today's share is probably higher. Many streetcar riders park in Ybor or Channel District garages first, which the arena itself encourages ([arena transportation page](https://www.benchmarkintlarena.com/directions-transportation/)) — those are **car-involved**, so streetcar boardings overstate non-car access.

### 4.3 Other ridership numbers that **cannot** be converted to shares

- SunRunner weekend ridership exceeded 10,000 during the Grand Prix, Localtopia and Halloween on Central ([ABC Action News](https://abcactionnews.com/news/region-pinellas/psta-board-of-directors-approves-the-purchase-of-three-new-sunrunner-buses)) — but this was during the free-fare period, mixes many trip purposes, and no Grand Prix attendance figure was published.
- SunRunner's highest days were Localtopia 2023 (5,168) and Pride 2023 (5,044) ([I Love the Burg](https://ilovetheburg.com/sunrunner-tpa-ridership)) — festival denominators unknown.
- TECO Line monthly records (e.g., 107,956 trips in March 2022, [City of Tampa](https://www.tampa.gov/index%2ephp/news/teco-line-streetcar-hits-highest-monthly-ridership-ever-95821)) are attributed partly to events, but no per-event split exists.

---

## 5. Venue and event detail

### `TPA-ARENA-NHL` / `TPA-ARENA-CONCERT` — Benchmark International Arena, Tampa

| Item | Evidence |
|---|---|
| Name / status | Renamed from Amalie Arena in August 2025 ([Galaxy Shows](https://galaxyshows.com/?p=1335), secondary) |
| Capacity | 19,092 hockey; 20,500 basketball; concert configuration not verified ([Galaxy Shows](https://galaxyshows.com/?p=1335)) |
| Parking | Arena controls no downtown parking; recommended garages sit 0.1–0.4 mi away, the farther ones with a free streetcar option ([arena parking page](https://www.benchmarkintlarena.com/plan-your-visit/parking)). Pam Iorio Garage listed at 1,450 spaces ([Parkopedia](https://en.parkopedia.com/parking/garage/pam_iorio_garage/33602/tampa), secondary); Convention Center garage 465 spaces ([City of Tampa](https://www.tampa.gov/tcc/blog/guide-to-parking)) |
| Event transit | Streetcar runs until midnight Sun–Thu on Lightning/arena event nights; frequency stated as every 15 min ([Ybor City Development Corp.](https://www.ybor.org/?p=55433)) vs every 20 min ([That's So Tampa](https://thatssotampa.com/tampa-streetcar-ranks-second-in-the-nation-for-overall-ridership-has-record-breaking-march)) — **conflict, re-check** |
| Other modes | Free bike valet at all ticketed events; free Alert Cab rides for impaired guests ([arena transportation page](https://www.benchmarkintlarena.com/directions-transportation/)) |
| Fare status | Fare-free funded through FY2025 by Tampa CRA ([WUSF, Mar 2025](https://www.wusf.org/transportation/2025-03-13/money-approved-keep-tampa-streetcar-free)); an aggregator says a further CRA backfill covers FY2026 ([Tampa Transportation tracker](https://tampatransportation.org/projects/teco-streetcar-extension/)) — **not confirmed by a primary source** |
| Shared approaches | Convention Center, Water Street, cruise terminals, Sparkman Wharf share Channelside Dr and the same garages ([City of Tampa garage guide](https://www.tampa.gov/tcc/blog/guide-to-parking)); Gasparilla uses Pam Iorio garage as event parking ([City of Tampa 2025 parking PDF](https://www.tampa.gov/sites/default/files/document/2025/2025-pirate-fest-parking-information_1.pdf)) |
| Estimate method | Transit (non-car access) 3% = §4.2 result (1.6–3.2%) nudged up for fare-free service and growth, then partly offset by park-and-ride reclassification. Walk/bike 9% reflects downtown/Channel District/Water Street residents and hotel guests plus bike valet; no count exists. Rideshare is car. Remainder car. |
| Missing | Any attendee survey; garage occupancy on event nights; concert configuration |

### `TPA-RJS-*` — Raymond James Stadium, Tampa

| Item | Evidence |
|---|---|
| Capacity (conflict) | 69,218 since 2022, expandable to 75,000 ([Wikipedia](https://en.wikipedia.org/wiki/Raymond_James_Stadium)) vs 65,890 ([ReliaQuest Bowl stadium page](https://reliaquestbowl.com/sports/2024/8/6/about-the-stadium.aspx)) vs 65,000 ([ReliaQuest Bowl alternate page](https://www.reliaquestbowl.com/stadium)) vs 65,618 ([My Sports Tourist](https://mysportstourist.com/?p=7086)). Weighting below uses 65,618; using 69,218 shifts the regional weighted share by <0.002. |
| Parking | 10,000 on-site spaces ([ReliaQuest Bowl](https://reliaquestbowl.com/sports/2024/8/6/about-the-stadium.aspx)); ~15,000 more off-site ([My Sports Tourist](https://mysportstourist.com/?p=7086); [Parking Access](https://parkingaccess.com/raymond-james-stadium-parking), secondary). Overflow at Al Lopez Park and Jesuit High School; rideshare pickup at Steinbrenner Field lots ([ReliaQuest Bowl directions](https://reliaquestbowl.com/sports/2024/8/6/directions-parking.aspx)). Lots open 3.5 hours before kickoff ([Buccaneers](https://www.buccaneers.com/stadium/parking)). Spaces are **not** converted to a mode share. |
| Event transit (conflict) | One secondary source says HART publishes no game-day express or park-and-ride and that routes 4, 7, 32, 36, 45 detour during events ([Parking Access](https://parkingaccess.com/raymond-james-stadium-parking)); another claims HART runs a downtown game-day shuttle ([Sportskeeda](https://sportskeeda.com/nfl/raymond-james-capacity)). Neither is HART itself — **re-check with HART**. |
| Private shuttles | Charter services (e.g., Rally Bus per the [Saints travel guide](https://www.neworleanssaints.com/fans/travelguide/tampabay-travelguide); a Water Street shuttle advertised on [Ticket Tailor](https://www.tickettailor.com/events/senatetransportationflorida/1785646)) exist; volume unknown. |
| USF crowds | USF averaged 37,944 in 2023 ([USF Oracle](https://www.usforacle.com/?p=84929)); USF leaves after 2026 (see §8). |
| Shared approaches | Same lots serve Steinbrenner Field across Dale Mabry; a Rays game and Bucs opener overlapped on Sept 21, 2025 ([SI](https://www.si.com/mlb/rays/schedules/schedule-nightmare-tampa-bay-rays-final-home-game-tampa-bay-buccaneers-home-opener-both-on-september-21)); stadium lots closed for Country Thunder setup pushed Rays fans to lots 5 and 7 with shuttles ([MLB/Rays release](https://www.mlb.com/press-release/press-release-rays-return-to-george-m-steinbrenner-field-in-tampa-for-a-three-game-homestand)). Airport traffic shares Dale Mabry/Spruce. |
| Estimate method | No rail; bus service is regular routes, some detoured. Car 95% (includes rideshare and charter-to-remote-lot users who drove). Shuttle 2% for charter buses from hotels/bars. Walk 2% for Drew Park/Westshore neighbors and hotels. |

### `STP-TROP-MLB` — Tropicana Field, St. Petersburg

| Item | Evidence |
|---|---|
| Status | Rays return for 2026 after playing 2025 at Steinbrenner; home opener planned April 6 ([NBC Sports/AP](https://www.nbcsports.com/mlb/news/tampa-bay-rays-to-return-to-tropicana-field-in-2026-after-hurricane-repairs)). Opener completion not separately verified. |
| Capacity | 25,000 with upper deck tarped (since 2019) ([Itinerant Fan](https://itinerantfan.com/stadium-guide/tropicana-field/)); 42,735 full / 25,025 tarped ([Baseball Bucket List](https://baseballbucketlist.com/ballpark-guides/tropicana-field/)). **Whether the post-repair 2026 configuration matches is not verified.** |
| Parking | Official lots plus overflow throughout downtown when prepaid lots sell out ([Rays information guide](https://www.mlb.com/rays/ballpark/information/guide)); ~7,000 official spaces per an older guide ([Stadium Parking Guides](https://stadiumparkingguides.com/tropicana-field-parking-guide/), 2020-era, secondary) |
| Event transit | SunRunner stops on the north side, every 15 min 6 a.m.–8 p.m. and every 30 min to midnight ([Ticketmaster blog](https://blog.ticketmaster.com/step-inside-tropicana-field-st-petersburg-fl/)); weekend "SunRunner After Dark" runs every 15 min to midnight Fri–Sat ([995 QYK](https://995qyk.com/2025/01/14/psta-opens-new-downtown-sunrunner-station-expands-night-service/)). Free Baseball Looper trolley from downtown ([Rays guide](https://www.mlb.com/rays/ballpark/information/guide)). End-of-game service: weeknight games ending after 10 p.m. fall in the 30-minute window — a real constraint. |
| Estimate method | SunRunner ~1–2% from §4.1 (wrestling event with boosted service; Rays games likely lower). Looper riders are a mix of downtown residents/hotel guests (non-car) and people who parked downtown (car) — 1% non-car assigned. Walk 6% from downtown and EDGE District bars/residents. Car remainder. |
| Shared approaches | I-175/I-275 interchange; Grand Prix uses Trop lots for park-and-ride ([Grand Prix release](https://gpstpete.com/news-head/news/367-new-and-expanded-enhancements-elevate-the-fan-experience-for-the-firestone-grand-prix-of-st-petersburg)); Tampa-side fans cross the bay (Howard Frankland/Gandy). |

### `TPA-GMS-*` — George M. Steinbrenner Field, Tampa

| Item | Evidence |
|---|---|
| Capacity (conflict) | 11,076 ([Florida Grapefruit League](https://floridagrapefruitleague.com/teams/new-york-yankees/)) vs 11,026 ([Wikipedia FSL list](https://en.wikipedia.org/wiki/List_of_Florida_State_League_stadiums)) vs 11,000 ([Wikipedia spring list](https://en.wikipedia.org/wiki/List_of_Major_League_Baseball_spring_training_ballparks)) — definitional, negligible |
| 2025 Rays season (historic) | 786,750 fans over 81 games (avg ≈9,713), 61 sellouts ([NBC Sports/AP](https://www.nbcsports.com/mlb/news/tampa-bay-rays-to-return-to-tropicana-field-in-2026-after-hurricane-repairs)) |
| Parking | Most spaces are Raymond James lots across Dale Mabry, plus a limited adjacent lot ([DRaysBay](https://www.draysbay.com/2024/12/9/24317212/rays-share-information-on-steinbrenner-field-agreement)); pedestrian bridge over Dale Mabry ([Itinerant Fan](https://itinerantfan.com/stadium-guide/steinbrenner-field/)) |
| Transit | Four HART lines stop nearby ([DRaysBay](https://www.draysbay.com/2025/4/19/24412121/want-to-see-the-rays-dont-want-to-pay-for-parking)); no event service found |
| Note | Spring-training crowds include many out-of-state visitors (rental cars): keep these distinct from metro-resident behavior. |

### `TPA-AMPH-CONCERT` — MIDFLORIDA Credit Union Amphitheatre (Florida State Fairgrounds)

| Item | Evidence |
|---|---|
| Capacity | ~20,000 ([Songkick](https://labs.songkick.com/venues/562791-midflorida-credit-union-amphitheatre), secondary) |
| Status | Roof redesign delayed, but a full 2026 season is scheduled ([MIDFLORIDA](https://www.midflorida.com/amphitheatre.aspx)) |
| Access | Parking sold separately; general entry via US-301 or MLK Blvd; Uber is the official rideshare ([Ticketmaster venue page](https://www.ticketmaster.com/midflorida-credit-union-amphitheatre-at-the-billets-tampa/venue/107257)) |
| Shared approaches | I-4/US-301 interchange; Hard Rock casino opposite; fairgrounds events |
| Estimate method | Suburban, freeway-oriented, no event transit found → car 97%. |

### `TPA-FAIR-2026` — Florida State Fair

| Item | Evidence |
|---|---|
| Dates | Feb 5–16, 2026 ([Tradefest listing](https://tradefest.io/en/event/florida-state-fair)) |
| Attendance (conflict) | "Nearly 400,000," down 3% ([Carnival Warehouse quoting the fair's director](https://carnivalwarehouse.com/newsserver/florida-state-fair-semi-quincentennial-programming-overcomes-weather-and-economic-challenge-1776643200)) vs "more than 350,000" ([HCSO release](https://teamhcso.com/News/PressRelease/af4c019c-7115-43ef-aaf3-1ec6a2c9e5f0/26-19)); 2025 was 397,992 ([Wikipedia](https://en.wikipedia.org/wiki/Florida_State_Fair)). **This is a 12-day total — never a simultaneous crowd.** |
| Parking | Paid parking introduced in 2026 ([Carnival Warehouse](https://carnivalwarehouse.com/newsserver/florida-state-fair-semi-quincentennial-programming-overcomes-weather-and-economic-challenge-1776643200)) |
| Estimate method | Same site logic as amphitheater; Family Day brings thousands of students ([HCSO](https://teamhcso.com/News/PressRelease/af4c019c-7115-43ef-aaf3-1ec6a2c9e5f0/26-19)), some likely by school bus → shuttle 3% (assumption). |
| Related | Florida RV SuperShow: ~70,000 unofficial, multi-day ([RV News](https://www.rvnews.com/exclusive-florida-rv-supershow-draws-large-crowd)) — same fairgrounds, not separately rowed. |

### `TPA-GASP-PIRATE` / `TPA-GASP-CHILD` — Gasparilla (open-site events)

| Item | Evidence |
|---|---|
| Crowd | City expects 300,000+ spectators; Children's Parade Jan 24, 2026, Pirate Fest Jan 31, 2026 ([City of Tampa](https://www.tampa.gov/Gasparilla)). **Organizer/city expectation, not a count.** |
| Event transit 2026 | Free streetcar from Ybor from 8:30 a.m., back until 2 a.m.; free HART shuttle from Ybor/Channelside 9:30 a.m.–7 p.m.; no direct service from Marion Transit Center ([HART 2026 patron PDF](https://www.tampa.gov/sites/default/files/document/2026/2026-pirate-fest-hart-patron-information.pdf)) |
| Parking | 2025: $30 event parking at downtown garages and Selmon lots; $20 Ybor garages linked to streetcar/shuttle ([City of Tampa 2025 PDF](https://www.tampa.gov/sites/default/files/document/2025/2025-pirate-fest-parking-information_1.pdf)); neighborhood permit-only zones ([City of Tampa](https://www.tampa.gov/Gasparilla)) |
| Park-and-ride treatment | Ybor-garage-to-streetcar/shuttle riders are **car-involved**. Rideshare is car (Lyft/Uber staging reported by [ABC Action News](https://www.abcactionnews.com/news/region-hillsborough/safe-ways-to-get-to-gasparilla-without-worrying-about-parking-or-driving)). Shared e-scooters/e-bikes are banned in a no-ride zone ([Spectrum News](https://mynews13.com/fl/orlando/news/2025/01/08/gasparilla-2025-event-information-guide)). |
| Estimate method | Walk share is the main uncertainty (South Tampa, Hyde Park, Davis Islands and downtown residents can walk) → 11% (5–18). Car 85% (75–92). Very low confidence. |
| Children's parade | No transit/parking specifics retrieved → **unknown; `sprawl`/`hub` 0.85 fallback would provisionally apply.** |

### `STP-GP-INDY` — Firestone Grand Prix of St. Petersburg

| Item | Evidence |
|---|---|
| Dates / site | Race Mar 1, 2026 on a 1.8-mile temporary street circuit including an airport runway ([Wikipedia](https://en.wikipedia.org/wiki/2026_Firestone_Grand_Prix_of_St._Petersburg)); 2025 drew "record crowds" with no number given ([IndyCar](https://www.indycar.com/news/2025/05/05-01-stpete-2026date)) |
| Remote parking | Tropicana Lots 6 and 7 at $30/day with free shuttle ([Grand Prix release](https://gpstpete.com/news-head/news/367-new-and-expanded-enhancements-elevate-the-fan-experience-for-the-firestone-grand-prix-of-st-petersburg)); city garages $25/day ([Bay News 9](https://baynews9.com/fl/tampa/news/2026/02/06/2026-firestone-grand-prix-of-st--petersburg-guide)) — **car-involved** |
| Closures | Downtown waterfront streets converted to track; Mahaffey Theater and Dalí Museum historically close race weekend ([ABC Action News](https://abcactionnews.com/news/region-south-pinellas/st-petersburg/firestone-grand-prix-of-st-petersbrug-everything-you-need-to-know)) |
| Estimate | Transit 4% (SunRunner weekend uplift, §4.3), walk 8% (downtown hotels/residents). Attendance unknown → cannot validate. |

### `CLW-SOUND` — BayCare Sound at Coachman Park, Clearwater

| Item | Evidence |
|---|---|
| Capacity | 4,000 covered + 5,000 lawn = 9,000 ([Visit St. Pete/Clearwater](https://www.visitstpeteclearwater.com/profile/coachman-park/139272)) |
| Usage | 150,000+ fans over ~50 events in year one ([Bay News 9](https://baynews9.com/fl/tampa/news/2024/08/25/the-baycare-sound-s-first-year)) → ~3,000 average per event (division of reported totals) |
| Parking (conflict) | About 3,000 spaces within five to six blocks, plus a downtown parking shuttle loop ([Visit St. Pete/Clearwater](https://www.visitstpeteclearwater.com/profile/coachman-park/139272)) vs "over 2,000" garage spots per the operator ([Bay News 9](https://baynews9.com/fl/tampa/news/2024/08/25/the-baycare-sound-s-first-year)) — likely garages-only vs all lots |
| Other modes | Clearwater Ferry drop-off near the entrance; Pinellas Trail adjacent ([995 QYK](https://995qyk.com/2023/06/15/parking-tips-for-the-sound-at-coachman-park/)) |
| Shared approaches | Memorial Causeway to Clearwater Beach; downtown Cleveland St |

### `CLW-BAYCARE-SPRING`, `DUN-TD-SPRING` — Pinellas spring-training parks

Both list 8,500 capacity ([Wikipedia spring list](https://en.wikipedia.org/wiki/List_of_Major_League_Baseball_spring_training_ballparks); TD Ballpark expansion from 5,500 to 8,500 per [UF journalism project](https://springtraining.jou.ufl.edu/2020/03/08/a-new-and-improved-ballpark/)). BayCare Ballpark is on US-19 (suburban arterial) → 0.97. TD Ballpark sits in Dunedin's small street grid near the Pinellas Trail → modestly lower 0.93. No transit or parking counts retrieved. Florida-wide spring travel applies.

### `STP-ALLANG-USL` — Al Lang Stadium, St. Petersburg

| Item | Evidence |
|---|---|
| Capacity | 7,227 ([Rowdies](https://www.rowdiessoccer.com/?p=4689)); club sometimes exceeds listed capacity ([St Pete Catalyst](https://stpetecatalyst.com/rowdies-gain-another-year-at-al-lang/)) |
| Tenure | Rowdies at Al Lang until at least November 2026 ([St Pete Catalyst](https://stpetecatalyst.com/rowdies-gain-another-year-at-al-lang/)) |
| Access | Lot A pass-holders only; free Downtown Looper stops nearby ([Rowdies](https://www.rowdiessoccer.com/?p=4689)) |
| Shared approaches | Mahaffey Theater, Dalí Museum, Grand Prix circuit, Saturday Morning Market (uses Al Lang lots per [St Pete Catalyst](https://stpetecatalyst.com/rowdies-will-remain-at-al-lang-for-foreseeable-future)) |
| Estimate | Downtown, walkable, loyal local base → walk/bike 10%; car 87%. |

---

## 6. Regional conclusion

### 6.1 Weighted car shares (estimates only)

One configuration per venue (no mutually exclusive configurations added; no multi-day totals). Weights = verified capacity: Raymond James 65,618 (NFL), Benchmark 19,092 (hockey), Tropicana 25,000 (tarped MLB), MIDFLORIDA 20,000, Steinbrenner 11,026 (spring), BayCare Sound 9,000, BayCare Ballpark 8,500, TD Ballpark 8,500, Al Lang 7,227. Total 173,963. Sources for each capacity are in §5.

| Weighting set | Capacity | Point | Low | High |
|---|---|---|---|---|
| All nine fixed venues | 173,963 | **0.934** | 0.878 | 0.969 |
| Excluding Raymond James | 108,345 | 0.924 | 0.865 | 0.963 |
| Downtown venues only (Benchmark, Tropicana, Al Lang, BayCare Sound) | 60,319 | **0.897** | 0.827 | 0.946 |
| Suburban/freeway venues (Raymond James, MIDFLORIDA, Steinbrenner, BayCare Ballpark, TD Ballpark) | 113,644 | 0.954 | 0.905 | 0.982 |

*Low/high columns apply every venue's low (or high) bound simultaneously — an outer envelope, not a confidence interval.*

**Typical-attendance weighting: not computed.** Defensible current typical attendance was found for only one historic configuration (Rays at Steinbrenner 2025) and one outgoing tenant (USF 2023). Bucs, Lightning, 2026 Rays, Rowdies and concert averages were not retrieved. Missing coverage: all theaters, Yuengling Center, Gasparilla and Grand Prix (no counts).

**Do huge outlying venues obscure the downtown pattern?** Partly. Raymond James is 38% of weighted capacity and lifts the regional figure by about one point (0.924 → 0.934). The downtown cluster still estimates at ~0.90 — above both non-transit fallbacks (0.85) and far above `transit` (0.40). Even downtown, car access dominates because the streetcar and trolleys largely function as park-and-ride distributors.

### 6.2 Clusters, shared roads and shared audiences (separate findings)

1. **Dale Mabry cluster (Tampa):** Raymond James + Steinbrenner share the same lots, rideshare zones and Dale Mabry approaches; a same-day Rays/Bucs overlap occurred on Sept 21, 2025 ([SI](https://www.si.com/mlb/rays/schedules/schedule-nightmare-tampa-bay-rays-final-home-game-tampa-bay-buccaneers-home-opener-both-on-september-21)). The approved Rays ballpark site is directly across from Raymond James ([Florida YIMBY](https://floridayimby.com/2026/08/tampa-bay-rays-reach-definitive-agreement-for-2-3-billion-stadium-in-tampa.html)), adjacent to Tampa International Airport traffic ([Hillsborough County](https://hcfl.gov/newsroom/2026/08/28/hillsborough-bocc-approves-development-and-funding-agreement-guaranty-and-team-non-relocation-agreement-to-bring-tampa-bay-rays-to-hillsborough-county)).
2. **Downtown Tampa/Channel District:** arena, Convention Center, cruise port, Water Street and Gasparilla share garages, Channelside Dr and the streetcar.
3. **Downtown St. Petersburg:** Tropicana, Al Lang, Mahaffey, Grand Prix circuit share I-175, downtown garages, the Looper and SunRunner; Trop lots double as Grand Prix park-and-ride.
4. **East Tampa fairgrounds:** amphitheater, fair and RV show share I-4/US-301 and the same lots (not simultaneous in practice: fair in Feb, concerts mostly summer).
5. **Cross-bay audience:** Tampa-side fans to the Trop and Pinellas-side fans to Tampa venues share the Howard Frankland, Gandy and Courtney Campbell; the new Howard Frankland span opened in 2025 ([83 Degrees](https://83degreesmedia.com/howard-frankland-opens-streetcar-stays-free-tampa-union-staton-busiest-in-florida/)).

No new distance rule or hard-access flag is proposed.

---

## 7. Data gaps (venues/events not rowed)

| Venue/event | Why not rowed | Provisional fallback |
|---|---|---|
| Yuengling Center (USF) | Capacity not verified in this pass | `sprawl`/`hub` 0.85 |
| Straz Center, Mahaffey Theater, Ruth Eckerd Hall, Hard Rock Event Center, Tampa Theatre | Capacities not verified (likely under 5,000 per room) | 0.85 |
| Tampa Convention Center large events | No attendance/mode data | 0.85 |
| Raymond James concerts (e.g., Country Thunder, May 2–4, 2025 per [Bay News 9](https://baynews9.com/fl/tampa/news/2025/04/29/parking-changes-announced-for-rays-royals-series-at-steinbrenner)) | Multi-day festival; no attendance | Use `TPA-RJS-CONCERT` estimate or 0.85 |
| Riverfront/other soccer venues (e.g., Tampa Bay Sun) | Not verified | 0.85 |
| Plant City festival grounds, Clearwater Jazz Holiday, Pride, Localtopia | No counts | 0.85 |
| Polk/Sarasota/Manatee spring parks | Edge; Florida-wide travel | Out of metro scope |

---

## 8. End matter

### 8.1 Recommended existing city type: **`sprawl`**

**Rationale.** (a) No rail; event transit is regular bus/BRT plus a 2.7-mile streetcar, and both quantitative checks put transit at roughly 1–3% of a big crowd (§4). (b) The streetcar, trolleys and shuttles are explicitly marketed as park-and-ride, so they convert car trips rather than remove them. (c) The largest capacity sits at freeway/arterial sites with large surface lots. (d) Background commuting is overwhelmingly car-based (§1). The `transit` setting (0.40) is contradicted by every piece of evidence found.

**Assessment of the 0.85 fallback.** Every currently active estimated row lands at 0.85 or above (range of point estimates 0.85–0.97; capacity-weighted ~0.93); only the not-yet-open USF stadium estimates lower. The shared 0.85 fallback is therefore at the **low end** of what the evidence suggests for unverified Tampa Bay venues; venue-specific overrides carry the real signal. (Assessment only — no new constant proposed.)

**Strongest contrary evidence (for `hub`).** Tampa Bay has two genuine downtown event cores (Tampa Channel District; downtown St. Pete) plus Clearwater, each with free or frequent circulators, walkable residential growth, and real crowd overlap on shared garages and approaches (§6.2). Downtown venues estimate ~0.90, closer to 0.85, and Gasparilla's point estimate sits right at 0.85. If the app's `hub` setting is meant to capture strong spill between clustered crowds rather than lower car share, the downtown clusters and the Dale Mabry cluster are an argument for it. Since `sprawl` and `hub` share the same 0.85 car fallback, the choice between them hinges on spill semantics, which this research did not define.

**Venue exceptions:** Gasparilla (open site, higher walking), Al Lang and Tropicana (downtown walk-ins), and the future USF on-campus stadium (student walk-ins).

### 8.2 Car-share values keyed to rows

| Row ID | Measured | Projected | Estimated |
|---|---|---|---|
| `TPA-ARENA-NHL` | — | — | 0.88 (0.80–0.94) |
| `TPA-ARENA-CONCERT` | — | — | 0.88 (0.80–0.94) |
| `TPA-RJS-NFL` | — | — | 0.95 (0.90–0.98) |
| `TPA-RJS-USF` | — | — | 0.95 (0.90–0.98) |
| `TPA-RJS-CONCERT` | — | — | 0.95 (0.90–0.98) |
| `STP-TROP-MLB` | — | — | 0.91 (0.85–0.95) |
| `STP-TROP-RUMBLE24` | SunRunner 0.9–2.2% (inferred, not a car share) | — | — |
| `TPA-GMS-SPRING` | — | — | 0.95 (0.90–0.98) |
| `TPA-GMS-RAYS25` | — | — | 0.95 (historic) |
| `TPA-AMPH-CONCERT` | — | — | 0.97 (0.93–0.99) |
| `TPA-FAIR-2026` | — | — | 0.94 (0.88–0.98) |
| `TPA-GASP-PIRATE` | — | — | 0.85 (0.75–0.92) |
| `TPA-GASP-CHILD` | — | — | unknown → 0.85 fallback |
| `STP-GP-INDY` | — | — | 0.88 (0.78–0.94) |
| `CLW-SOUND` | — | — | 0.92 (0.86–0.96) |
| `CLW-BAYCARE-SPRING` | — | — | 0.97 (0.93–0.99) |
| `DUN-TD-SPRING` | — | — | 0.93 (0.87–0.97) |
| `STP-ALLANG-USL` | — | — | 0.87 (0.78–0.93) |
| `TPA-USF-STADIUM-27` | — | — (no public travel projection found) | 0.80 (0.68–0.90), not active until 2027 |

No row has a **measured** car share. No **projected** share from a public travel study was found.

### 8.3 Boundary recommendation and brief inconsistencies

- **Recommend:** venue core = Hillsborough + Pinellas; audience ring = Pasco + Hernando (MSA members); Polk and Sarasota/Manatee as separate edges; spring training as Florida-wide travel (§2).
- **Inconsistencies noticed:** (1) The brief names Pasco as an "edge," but OMB places it inside the MSA, while Hernando (in the MSA) is not mentioned. (2) The brief's lead "Amalie-area rooms" refers to a name retired in August 2025. (3) "Raymond James/USF venues" conflates Raymond James (USF's current football home) with the on-campus stadium opening 2027. (4) The companion venue answer was not available, so row keys here are proposals.

### 8.4 Data gaps, model limitations, conflicts and inaccessible sources

- **Gaps:** no attendee survey anywhere; no origin/ZIP data; no typical attendance for most rows; no Grand Prix or Gasparilla counts; no HART event-ridership reports; no garage occupancy data.
- **Model limitations:** person-shares do not convert to vehicles without occupancy data (not found); park-and-ride means car share ≠ cars arriving at the venue's own lots; multi-day events cannot be treated as one crowd.
- **Source conflicts preserved:** Raymond James capacity (65,000–69,218); Steinbrenner capacity (11,000–11,076); streetcar event frequency (15 vs 20 min); HART game-day shuttle (exists vs not); streetcar FY2026 fare funding (primary source only confirms FY2025); fair attendance (350,000+ vs ~400,000); Coachman parking (2,000+ vs ~3,000); MSA and Polk population (EDR vs Census-based).
- **Inaccessible / not reached:** Tampa Bay Times articles appear in results but are typically metered; I relied on accessible summaries and did not attempt to bypass any paywall. HART and PSTA do not publish per-event ridership in sources found. No Tampa Sports Authority parking or operations report surfaced.

### 8.5 Confirmed transport/venue changes through 2028

| Change | Date | Status | Re-check |
|---|---|---|---|
| Arena renamed Benchmark International Arena | Aug 2025 | Done ([Galaxy Shows](https://galaxyshows.com/?p=1335)) | — |
| SunRunner downtown station + weekend late service | Jan 10, 2025 | Done ([995 QYK](https://995qyk.com/2025/01/14/psta-opens-new-downtown-sunrunner-station-expands-night-service/)) | Annually |
| New Howard Frankland span open | 2025 | Done ([83 Degrees](https://83degreesmedia.com/howard-frankland-opens-streetcar-stays-free-tampa-union-staton-busiest-in-florida/)) | — |
| Rays return to Tropicana Field | From April 2026 | Scheduled ([NBC Sports/AP](https://www.nbcsports.com/mlb/news/tampa-bay-rays-to-return-to-tropicana-field-in-2026-after-hurricane-repairs)) | Nov 2026 (2026 config/attendance) |
| Florida State Fair paid parking | Feb 2026 | Done ([Carnival Warehouse](https://carnivalwarehouse.com/newsserver/florida-state-fair-semi-quincentennial-programming-overcomes-weather-and-economic-challenge-1776643200)) | Jan 2027 |
| TECO streetcar fare-free funding | FY2025 confirmed; FY2026 claimed | Funded year-to-year ([WUSF](https://www.wusf.org/transportation/2025-03-13/money-approved-keep-tampa-streetcar-free); [tracker](https://tampatransportation.org/projects/teco-streetcar-extension/)); city intends to keep it free ([From Common Ground, Mar 2026](https://fromcommonground.com/tampas-growth-adds-urgency-to-streetcar-expansion-discussion/)) | **Now** (FY2027 began Oct 1, 2026) |
| TECO streetcar extension/modernization | No opening date | Partly funded proposal: $67.3M FDOT award against ~$235M estimate; alignment pending ([tracker](https://tampatransportation.org/projects/teco-streetcar-extension/)) | Mid-2027 |
| Rowdies at Al Lang | Through at least Nov 2026 | Lease extension ([St Pete Catalyst](https://stpetecatalyst.com/rowdies-gain-another-year-at-al-lang/)); Al Lang redevelopment floated in 2025 ([Axios](https://www.axios.com/local/tampa-bay/2025/05/05/al-lang-stadium-demolition-st-petersburg)) — proposal | Dec 2026 |
| MIDFLORIDA amphitheater roof redesign | Delayed | In progress ([MIDFLORIDA](https://www.midflorida.com/amphitheatre.aspx)) | Spring 2027 |
| USF on-campus stadium (~35,000) opens; USF leaves Raymond James | First game Sept 4, 2027 | Funded, under construction ([FOX 13](https://www.fox13news.com/news/usf-approves-updated-football-stadium-plan-heres-timeline-construction)); 8,000+ student section ([WUSF](https://wusf.org/university-beat/2024-09-20/usf-releases-plans-student-section-on-campus-football-stadium)) | Spring 2027 (parking/transport plan) |
| Rays Dale Mabry ballpark (~$2.36B) | Target April 2029 | County approved development/funding agreement 5–2 on Aug 28, 2026; license, community-benefits and trust agreements still pending ([Hillsborough County](https://hcfl.gov/newsroom/2026/08/28/hillsborough-bocc-approves-development-and-funding-agreement-guaranty-and-team-non-relocation-agreement-to-bring-tampa-bay-rays-to-hillsborough-county); [Florida YIMBY](https://floridayimby.com/2026/08/tampa-bay-rays-reach-definitive-agreement-for-2-3-billion-stadium-in-tampa.html)). Construction through 2028 sits beside Raymond James lots — impact on event parking unknown | Quarterly |
| Tropicana Field / Gas Plant future after Rays leave | Beyond 2028 | Undecided; council and mayor split on next steps ([WTSP](https://www.wtsp.com/article/news/local/pinellascounty/st-pete-historic-gas-plant-district-tropicana-field-rays-leaving/67-9d309173-2ee7-4e05-b188-dfed3489650a)) | Early 2027 |
| HART structure/funding | 2026–27 | FY2026 operating budget $126.4M adopted ([HART PDF](https://www.gohart.org/Style%20Library/goHART/pdfs/trans/Budget/FY2026_Budget_Summary_9225_Final.pdf)); state bill to shift HART assets to a Tampa-focused agency was being drafted — proposal ([Yahoo/TBT](https://www.yahoo.com/news/articles/more-transit-tampa-less-others-165932212.html)); Tampa council leaning toward $1.5M for Route 1 ([WUSF, Sept 2026](https://www.wusf.org/transportation/2026-09-11/focus-route-1-tampa-city-council-leaning-hart-funding-increase)) | After 2027 legislative session |

---

*Method note: estimates use local public evidence on service, parking, park-and-ride design and site context; no personal ratings were used and no values were tuned toward a preferred setting. Copyrighted sources are paraphrased.*
