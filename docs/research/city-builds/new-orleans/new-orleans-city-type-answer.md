# New Orleans: Event-Travel Evidence and City-Type Assessment for Fan/Friction Gridlock

**Research date:** Monday, October 12, 2026 (sources accessed this date; event data through the 2026 Jazz Fest, Essence Fest and the 2025 NFL / 2025–26 NBA seasons).
**Scope:** New Orleans (Orleans Parish) plus connected Jefferson Parish East and West Bank communities as the working boundary; St. Tammany and more distant destinations assessed separately.
**Companion venue research:** *Not provided with this brief.* Venues were enumerated independently below; coverage gaps are listed in §9.

---

## 1. Bottom line

- **Recommended existing city type: `hub` (in between).** No public source measures how people reach any New Orleans event venue. Transparent estimates built from local parking, shuttle, transit-operations and commuting evidence put the capacity-weighted car-involved share of fixed 1,000+ venues at about **0.80** (scenario range 0.69–0.89), close to the existing 0.85 fallback and far from the 0.40 `transit` value.
- **Why `hub` rather than `sprawl`:** the two carry the same 0.85 fallback, so the choice turns on spill. The largest crowds are concentrated in one downtown cluster where the Superdome, Smoothie King Center and Champions Square share one set of garages and approaches, with theaters and the French Quarter nearby. That is a hub pattern, not dispersed suburban destinations.
- **Strongest contrary evidence (toward `transit`):** Orleans Parish has 17% of households with no vehicle and about 12% of workers commuting by transit, bike or walking ([RPC ACS 2019–2023](https://www.norpc.org/wp-content/uploads/2025/11/RPCTransModeNoVehTravTime_ACS5Yr2019thru2023.pdf)); Jazz Fest has no general on-site parking ([Jazz Fest FAQ](https://www.nojazzfest.com/faq/)); visitor-heavy Superdome events draw from walkable hotels.
- **Strongest evidence against `transit`:** RTA *withdraws* rail service from the biggest crowds rather than scaling it up. On Super Bowl LIX Sunday buses were cut back short of downtown and one streetcar line was pulled from service ([RTA](https://norta.com/superbowl/sunday)); in Mardi Gras 2026 the Canal and St. Charles streetcars were suspended from Feb 12 through Mardi Gras Day ([WWL](https://www.wwltv.com/article/entertainment/events/mardi-gras/rta-announces-mardi-gras-2026-transit-changes-streetcars-suspended-during-carnival/289-decee258-d806-4373-a01f-bdc59c2a7f79)).

---

## 2. Definitions used throughout

| Term | Meaning in this answer |
|---|---|
| Car-involved share | Persons arriving by private car, carpool, rideshare/taxi, **or** driving to a remote lot and riding a shuttle. This is the value comparable to the app's car share. |
| Park-and-ride (P&R) | Counted as car-involved, never as non-car, because the attendee drove. |
| Dedicated event shuttle (non-car) | Only where the attendee reached the pickup without driving (e.g., walked from a downtown hotel). Valet-parking at a hotel pickup is counted as P&R. |
| Regular transit | RTA bus/streetcar/ferry, including enhanced or extra trips. |
| People vs vehicles | Parking figures are vehicle spaces; no space count is converted to a person share in this answer. |
| Attendance | Team "announced" attendance = tickets distributed, not turnstile scans. Festival totals = admissions summed over all days, not one crowd. Placer.ai "visits" = device-based visits, not unique people. RTA ridership = boardings (a round trip is two). |
| Measured / projected / estimated | **No row in this answer is measured.** No projection (planning-study forecast) was found either. All shares are **estimates** with stated inputs. |

---

## 3. Background only: ordinary commuting (not event travel)

ACS 2019–2023 five-year journey-to-work, from the [Regional Planning Commission table](https://www.norpc.org/wp-content/uploads/2025/11/RPCTransModeNoVehTravTime_ACS5Yr2019thru2023.pdf):

| Parish | Drove alone | Carpool | Transit | Taxi | Bike | Walk | Work from home | HH with no vehicle |
|---|---|---|---|---|---|---|---|---|
| Orleans | 63.19% | 8.73% | 4.51% | 0.55% | 1.94% | 5.65% | 13.67% | 17.11% |
| Jefferson | 77.31% | 11.25% | 0.85% | 0.42% | 0.19% | 1.71% | 7.40% | 7.37% |
| St. Tammany | 77.43% | 7.63% | 0.12% | 0.11% | 0.10% | 0.83% | 12.40% | 4.04% |

Derived (my arithmetic from the table above; car + carpool + taxi as a share of workers who travel): Orleans ≈ 84%, Jefferson ≈ 96%, St. Tammany ≈ 97%. **This is commuting, not event travel**, and is used only to bound the estimates.

**Source defect:** the same RPC file's "New Orleans-Metairie MSA" mode row reports 94.17% drove alone plus 11.78% carpool, which exceeds 100%; the row is unusable. Its footnotes also disagree on whether the MSA contains 7 or 8 parishes.

---

## 4. Venue and event rows: identity, recommended value, confidence

Car-involved values are **estimates** (none measured). "Fallback" = the current app default that would apply without a venue override.

| # | Verified current name | Municipality | Setup / event represented | Date or season | Size basis | Recommended car-involved share | Range | Confidence | Evidence type |
|---|---|---|---|---|---|---|---|---|---|
| V1 | Caesars Superdome | New Orleans (CBD) | NFL Saints regular season | 2025 season | 2025 avg announced attendance 70,036 ([ESPN](https://www.espn.com/nfl/attendance/_/year/2025/)) | **0.82** | 0.72–0.90 | Low | Estimate from parking, transit-ops, commute data |
| V2 | Caesars Superdome | New Orleans | Visitor-heavy marquee football: Super Bowl, CFP title, Sugar Bowl CFP quarterfinal | Feb 2025; Jan 2026; Jan 2028 scheduled | Sugar Bowl Jan 2025 attendance 57,267 ([Sugar Bowl](https://s3.us-east-2.amazonaws.com/sidearm.nextgen.sites/sugarbowl.sidearmsports.com/documents/2025/10/7/SUGAR_BOWL_Partnership_Information_2025_JU.pdf)) | **0.65** | 0.50–0.80 | Low | Estimate; transit-ops evidence |
| V3 | Caesars Superdome | New Orleans | Essence Festival nightly stadium concerts | Jul 3–5, 2026 | "Tens of thousands" nightly; no official count found ([Fox 8](https://www.fox8live.com/2026/07/07/essence-fest-ends-negotiations-new-city-contract-continue/)) | **0.65** | 0.50–0.80 | Low | Estimate |
| V4 | Caesars Superdome | New Orleans | Stadium concert (non-festival) | Any season | Configuration-dependent; no current concert capacity verified | **0.78** | 0.65–0.88 | Low | Estimate |
| V5 | Smoothie King Center | New Orleans (CBD) | NBA Pelicans | 2025–26 season | Sampled Nov 2025 announced attendance 13,757–19,397, median 16,690 ([Wikipedia game log](https://en.wikipedia.org/wiki/2025%E2%80%9326_New_Orleans_Pelicans_season)) | **0.85** | 0.75–0.92 | Low | Estimate |
| V6 | Smoothie King Center | New Orleans | Arena concert | Any | Up to 17,805 center-stage (secondary: [Thrillzing](https://thrillzing.com/music-venues/smoothie-king-center-new-orleans/)) | **0.82** | 0.70–0.90 | Low | Estimate |
| V7 | Yulman Stadium (Tulane) | New Orleans (Uptown) | NCAA football | 2025 season | Capacity 30,000 ([Stadium Journey](https://stadiumjourney.com/stadiums/yulman-stadium-s2110)) | **0.70** | 0.55–0.82 | Low | Estimate; P&R evidence |
| V8 | UNO Lakefront Arena | New Orleans (Lakefront) | Basketball / concert | Current | 8,785 basketball; 1,500 to 10,000+ concert ([UNO](https://unoprivateers.com/facilities/?id=3)) | **0.92** | 0.85–0.97 | Low–Med | Estimate; parking supply |
| V9 | Saenger Theatre | New Orleans (Canal St) | Broadway / concert | Current | 2,600 ([ATG](https://www.atgentertainment.com/?p=1349)) | **0.75** | 0.60–0.88 | Low | Estimate |
| V10 | Mahalia Jackson Theater for the Performing Arts | New Orleans (Tremé/Armstrong Park) | Opera / ballet / Broadway | Current | 2,100–2,243 (conflict, §8) | **0.75** | 0.60–0.88 | Low | Estimate |
| V11 | The Fillmore New Orleans | New Orleans (Canal St casino) | Concert | Current | 2,000–2,220 (conflict, §8) | **0.75** | 0.60–0.88 | Low | Estimate |
| V12 | Pontchartrain Center | Kenner | Sports / concert; G League from 2026–27 | Current | 3,600 sports, 3,700 concert ([Wikipedia](https://en.wikipedia.org/wiki/Pontchartrain_Center)) | **0.95** | 0.90–0.98 | Low–Med | Estimate; suburban site |
| V13 | Shrine on Airline (also "Gold Mine on Airline") | Metairie | **Closed for renovation**; reopens June 2027 | 2026–27 | 10,000 seats pre-renovation ([Wikipedia](https://en.wikipedia.org/wiki/Gold_Mine_on_Airline)) | 0.95 when reopened (not active now) | 0.90–0.98 | Low | Estimate |
| E1 | New Orleans Jazz & Heritage Festival | New Orleans (Fair Grounds Race Course, Gentilly) | Festival footprint, 8 days | Apr 23–May 3, 2026 | 475,000 total admissions ([Biz New Orleans](https://bizneworleans.com/jazz-fest-2026-draws-475000-fans/)); ≈59,375/day average (derived) | **0.62** | 0.50–0.75 | Low | Estimate; ops evidence |
| E2 | Mardi Gras parade routes | New Orleans (Uptown, Mid-City, CBD) | Open-site route crowds | Feb 2026 season | 2.2 million downtown device **visits** ([Tulane Hullabaloo / DDD / Placer.ai](https://tulanehullabaloo.com/73359/news/mardi-gras-brings-over-2-million-visitors-to-the-city-10-increase-from-last-year/)) | **Unknown** | — | — | No defensible split; provisional fallback 0.85 under `hub` |
| E3 | French Quarter Festival | New Orleans (French Quarter, riverfront) | Free open-site festival, 4 days | Apr 16–19, 2026 | No attendance count; "one million in town" is a visitor estimate, not attendance ([Fox 8](https://www.fox8live.com/2026/04/20/french-quarter-fest-wraps-after-four-days-record-crowds/)) | **Unknown** | — | — | Provisional fallback 0.85 |
| E4 | Zurich Classic of New Orleans (TPC Louisiana) | Avondale (Jefferson, West Bank) | Golf tournament, multi-day | Apr 2025 | 123,000 for the week ([Fox 8](https://www.fox8live.com/2025/05/05/visitors-head-home-folding-chairs-tow-after-8-days-jazz-fest-fun/)) | **0.95** | 0.90–0.99 | Low | Estimate; no transit evidence found |

---

## 5. Mode splits (persons), with sum check

All values are central **estimates** in percent of attendees, not measurements. Car-involved = private/carpool + rideshare/taxi + P&R.

| # | Private car / carpool | Rideshare / taxi | P&R (drove, then shuttle) | **Car-involved** | Regular transit (RTA) | Dedicated shuttle, non-car | Walk / bike | Other / charter | Unclassified | Sums to 100%? |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 Saints | 72 | 9 | 1 | **82** | 5 | 0 | 10 | 2 | 1 | Yes |
| V2 Marquee football | 45 | 18 | 2 | **65** | 5 | 5 | 23 | 0 | 2 | Yes |
| V3 Essence concerts | 45 | 18 | 2 | **65** | 5 | 3 | 25 | 0 | 2 | Yes |
| V4 Dome concert | 62 | 14 | 2 | **78** | 5 | 0 | 14 | 0 | 3 | Yes |
| V5 Pelicans | 74 | 10 | 1 | **85** | 4 | 0 | 9 | 0 | 2 | Yes |
| V6 Arena concert | 68 | 13 | 1 | **82** | 4 | 0 | 11 | 0 | 3 | Yes |
| V7 Tulane football | 30 | 10 | 30 | **70** | 5 | 0 | 23 | 0 | 2 | Yes |
| V8 Lakefront Arena | 85 | 7 | 0 | **92** | 2 | 0 | 4 | 0 | 2 | Yes |
| V9–V11 Downtown theaters | 55 | 19 | 1 | **75** | 5 | 0 | 18 | 0 | 2 | Yes |
| V12 Pontchartrain Center | 90 | 5 | 0 | **95** | 1 | 0 | 2 | 0 | 2 | Yes |
| E1 Jazz Fest | 25 | 25 | 12 | **62** | 10 | 6 | 20 | 0 | 2 | Yes |
| E4 Zurich Classic | 88 (incl. P&R) | 7 | — | **95** | 0 | 0 | 0 | 0 | 5 | Yes |
| E2 Mardi Gras / E3 FQF | — | — | — | Unknown | — | — | — | — | 100 | No split possible |

**Why no mode is "missing":** every row carries an explicit unclassified bucket (1–5%) for modes not evidenced (ferry, pedicab, charter beyond V1). Rideshare is not separated from taxi anywhere because no source distinguishes them.

---

## 6. Row-by-row evidence, assumptions and operations

### V1–V4 Caesars Superdome (1500 Sugar Bowl Dr)

**Capacity by configuration (conflicting):** 74,295 for NFL ([Ticketmaster](https://blog.ticketmaster.com/step-inside-caesars-superdome-new-orleans-la/)); 73,208 seats ([TheStadiumBusiness](https://www.thestadiumbusiness.com/?p=47968)); "up to 73,000 plus" flexible configurations ([venue spec sheet](https://www.caesarssuperdome.com/assets/doc/SpecsAndFloorplan-ASM-FinalUpdate-2023-3a480f1188.pdf)); 68,400 for the Jan 2025 Sugar Bowl ([Sugar Bowl](https://allstatesugarbowl.org/news/2024/9/5/sold-out.aspx)). Capacity weighting below uses 73,208.

**Attendance:** Saints 2025 home average 70,036 over 8 games ([ESPN](https://www.espn.com/nfl/attendance/_/year/2025/)) vs 70,012 ([Wikipedia](https://en.wikipedia.org/wiki/2025_New_Orleans_Saints_season)) — small definitional gap, immaterial.

**Parking supply (vehicles):** the spec sheet lists 4,600 spaces in attached garages plus 2,100 in Champions Garage ([spec sheet](https://www.caesarssuperdome.com/assets/doc/SpecsAndFloorplan-ASM-FinalUpdate-2023-3a480f1188.pdf)); the Sugar Bowl describes seven garages and two surface lots holding about 7,000 vehicles, shared across the Superdome, Smoothie King Center and Champions Square, with bike racks in Lot 3 ([Sugar Bowl parking](https://allstatesugarbowl.org/sports/2023/11/1/superdome-parking.aspx)). Event parking is sold through JustPark EventPass ([Superdome parking](https://www.caesarssuperdome.com/parking)).
*Illustration only, not a mode share:* 7,000 spaces at an assumed 2.5–3.0 persons per car would hold 17,500–21,000 people, roughly a quarter to a third of a Saints crowd. The rest of the car-involved crowd must use off-complex CBD garages, rideshare or street parking, which are not counted in any public source.

**Transit:** the Superdome and Smoothie King Center share a Poydras Street stop on the 46 Rampart–Loyola streetcar ([New Orleans & Company](https://www.neworleans.com/plan/itineraries/new-orleans-game-day-itinerary/)). No published game-day ridership exists. RTA's 2025 network carried 13,501,100 boardings ([Wikipedia](https://en.wikipedia.org/wiki/New_Orleans_Regional_Transit_Authority)), but no event subtraction is possible without daily data.

**Event operations and closures:**
- Super Bowl LIX (Feb 9, 2025): closures on LaSalle, Poydras, Girod and Canal on Feb 9–10 ([WWL](https://www.wwltv.com/article/news/local/rta-roll-to-the-bowl-in-new-orleans/289-ec12d6bf-5e1a-478a-bf0e-2afe20ae4795)); buses from Bywater, Gentilly, Mid-City and New Orleans East turned back at the Main Library hub, the St. Charles streetcar stopped at Harmony Circle, the 46 streetcar was out of service and Canal cars stopped at S. Liberty ([RTA](https://norta.com/superbowl/sunday)). **Start/end transit to the door was deliberately curtailed.**
- Saints "Domecoming" (Oct 2026): NOPD parking restrictions on blocks of Julia, Girod, Poydras, Perdido, Tulane, LaSalle and S. Claiborne ([WWL](https://www.wwltv.com/article/sports/nfl/saints/saints-domecoming-game-brings-parking-restrictions-in-new-orleans-nopd-says-football-gameday-car-traffic/289-47209286-9307-473c-a453-c7f2525df15a)).
- Sugar Bowl Jan 1, 2025 was postponed a day after the Bourbon Street attack ([NBC](https://www.nbcnewyork.com/news/sports/when-is-the-sugar-bowl-2025-new-date-time-tv-and-streaming-channels-georgia-notre-dame-cfb-playoff/6091903/?amp=1)).

**Estimate method (V1):** start from the Orleans/Jefferson commute bounds (84–96% car among travelers, §3), then adjust for (a) a regional season-ticket audience that drives in from the suburbs and beyond, (b) downtown hotel guests and CBD/French Quarter residents who walk, and (c) a streetcar stop at the gate. Walk 10% and transit 5% are judgment calls; no local survey supports either. **Range 0.72–0.90.**
**V2/V3 adjustment:** marquee and Essence crowds are majority out-of-town (Essence attendees interviewed came from Arkansas, Pensacola, Mississippi and Texas — anecdotal, [Fox 8](https://www.fox8live.com/2026/07/06/essence-festival-2026-wraps-new-orleans-contract-expires-mayor-eyes-renewal/)), so a large walk-from-hotel share is assumed. A visitor who drove to New Orleans and walked from the hotel is counted as walk for the venue trip.

**Other crowds sharing approaches:** Smoothie King Center and Champions Square share the garages; Essence also uses the Convention Center ([Fox 8](https://www.fox8live.com/2026/07/07/essence-fest-ends-negotiations-new-city-contract-continue/)); Super Bowl 2025 ran into the Mardi Gras season ("Super Gras", [RTA 2025 Annual Report](https://www.norta.com/RTA/media/PDF-Documents/Annual%20Reports/RTA-2025-Annual-Report.pdf)).

**Ticketing/feed:** Ticketmaster is the official verified resale platform for the Sugar Bowl ([Superdome event page](https://www.caesarssuperdome.com/events/detail/2025-allstatesugarbowl)); Saints ticketing was not verified from a primary source. Feed coverage for the app was not tested.

### V5–V6 Smoothie King Center (1500 Dave Dixon Dr)

**Capacity (conflicting):** current ≈18,310, rising to ≈19,963 under a proposed master plan ([Hoodline](https://hoodline.com/2026/03/pelicans-plot-smoothie-king-center-gut-job-as-lease-clock-ticks/)); 16,867 NBA regular season and 17,805 center-stage concert per a secondary guide ([Thrillzing](https://thrillzing.com/music-venues/smoothie-king-center-new-orleans/)). An announced crowd of 19,397 on Nov 22, 2025 ([Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_New_Orleans_Pelicans_season)) exceeds both, consistent with announced figures counting tickets distributed. Capacity weighting below uses 16,867.
**Parking/transit:** shares the ≈7,000-space complex and the Poydras streetcar stop with the Superdome (sources above). Weeknight local crowds arrive closer to tip-off.
**Estimate method:** same inputs as V1 with a more local, weeknight audience → slightly higher car share. **0.85, range 0.75–0.92.**
**Status:** renovation is a proposal; the lease runs through June 2029 and changes would need state legislative action ([Hoodline](https://hoodline.com/2026/03/pelicans-plot-smoothie-king-center-gut-job-as-lease-clock-ticks/); [Fox 8](https://www.fox8live.com/2026/03/25/smoothie-king-center-renovation-plan-aims-keep-new-orleans-venue-competitive/)).

### V7 Yulman Stadium (Tulane, Uptown)

**Capacity:** 30,000 ([Stadium Journey](https://stadiumjourney.com/stadiums/yulman-stadium-s2110)).
**Parking and remote arrangements:** most parking is off-site; the operator secured more than 7,000 off-site spaces and runs 35 circulating buses ([SP+ case study](https://server2.spplus.com/es/case_study/tulane-university)). Lots used include Loyola's garage, Ursuline Academy and St. Rita, with shuttles starting hours before kickoff ([Tulane, 2023](https://governmentrelations.tulane.edu/sites/default/files/2023-09/2023_Sept_NeighborNews.html)). For the Dec 5, 2025 conference title game, only pre-paid permit holders could enter campus after 4 p.m. and roads around the stadium were pedestrian-only ([Tulane Athletics](https://tulanegreenwave.com/news/2025/12/5/football-parking-traffic-reminders-for-tonights-american-conference-championship-game)). For the 2023 Ole Miss game, Tulane ran a shuttle from a Superdome garage ([The Rebel Walk](https://therebelwalk.com/2023/09/ole-miss-at-tulane-gameday-information-for-saturdays-road-opener-in-new-orleans)) — **a direct link between Uptown and CBD parking supply.**
**Park-and-ride treatment:** every shuttle rider from these lots drove, so they are counted car-involved (30% P&R in §5). Illustration only: 7,000 spaces × 2.5 persons = 17,500 people if every space were filled; the 30% P&R share (≈9,000 people) assumes about half are used. Students and neighbors walking are assumed at ~23%; no enrollment-based calculation was done because no attendance-by-group data exists.
**Estimate: 0.70, range 0.55–0.82.** The low end reflects possible heavy student walk-in at well-attended games.

### V8 UNO Lakefront Arena

**Capacity:** 8,785 for basketball; 1,500 to over 10,000 for concerts ([UNO](https://unoprivateers.com/facilities/?id=3)); the GM called it a 10,000-capacity facility and reported replacement of the Ida-damaged ceiling ([Pollstar, Oct 2024](https://news.pollstar.com/2024/10/15/2024-venuesnow-all-stars-marco-perez/)).
**Parking:** roughly 4,000 car spaces per an older athletics page ([UNO, 2011 page](https://unoprivateers.com/sports/2011/2/13/lakefrontarena.aspx)). At an assumed 2.5 persons per car that is about 10,000 people, roughly matching capacity — consistent with a drive-in design, not a mode share.
**Estimate: 0.92, range 0.85–0.97.** Lakefront location with no special event transit found.

### V9–V11 Downtown theaters and halls

Saenger 2,600 (2,613 after restoration) ([ATG](https://www.atgentertainment.com/?p=1349)); Mahalia Jackson 2,153 seats per ATG text but 2,243 in ATG's capacity field ([ATG](https://www.atgentertainment.com/aka_venues/mahalia-jackson-theater-for-the-performing-arts/)), 2,100 per [Wikipedia](https://en.wikipedia.org/wiki/Mahalia_Jackson_Theater_of_the_Performing_Arts); Fillmore 2,000 per [Live Nation](https://www.livenationentertainment.com/?p=25322) vs 2,220 per [OffBeat](https://offbeat.com/news/fillmore-new-orleans). The Fillmore opened inside the Harrah's casino; the casino's current branding should be re-verified.
**Estimate: 0.75, range 0.60–0.88.** Rationale: Canal Street and Armstrong Park adjacency to hotels and the French Quarter raises walking; evening rideshare is assumed high. No venue-specific parking or survey data found. The Orpheum (~1,500, unverified) is a coverage gap.

### V12 Pontchartrain Center (Kenner)

Capacity 3,600 sports / 3,700 concert ([Wikipedia](https://en.wikipedia.org/wiki/Pontchartrain_Center)); one directory lists 5,820 theater-style in the exhibit hall and 1,400 parking spaces ([Meetings & Conventions](https://www.meetings-conventions.com/Meeting-Event-Venues/Kenner-LA/Convention-Center/The-Pontchartrain-Center-an-SMG-Managed-Facility-p53220460)). The Pelicans' G League affiliate (Laketown Squadron) moves here from the 2026–27 season ([Wikipedia citing NBA.com](https://en.wikipedia.org/wiki/Pontchartrain_Center)).
**Estimate: 0.95, range 0.90–0.98.** Jefferson commute car share ≈96% (§3) is a reasonable bound for a suburban arena.

### V13 Shrine on Airline (Metairie)

10,000 seats pre-renovation ([Wikipedia](https://en.wikipedia.org/wiki/Gold_Mine_on_Airline)). NOLA Gold rugby set a club record of 5,000+ in 2024 ([Stadium Journey](https://www.stadiumjourney.com/stadiums/shrine-on-airline-nola-gold)) and then withdrew from MLR for 2026 ([Axios](https://www.axios.com/local/new-orleans/2025/08/08/nola-gold-rugby-shrine-airline-leaves-major-league)). A $28.5 million renovation is under way with completion due by June 2027; initial use is high-school football ([Fox 8](https://www.fox8live.com/2026/06/22/shrine-airline-renovation-could-bring-soccer-team-metro-new-orleans/); [Crescent City Sports](https://crescentcitysports.com/?p=303773)). **Excluded from current weights.**

### E1 Jazz Fest (Fair Grounds Race Course, 1751 Gentilly Blvd)

**Attendance:** 475,000 total in 2026, about 6% over 2025 ([Biz New Orleans](https://bizneworleans.com/jazz-fest-2026-draws-475000-fans/)); 460,000 in 2025 ([Fox 8](https://www.fox8live.com/2025/05/05/visitors-head-home-folding-chairs-tow-after-8-days-jazz-fest-fun/)). Derived daily averages: 59,375 (2026), 57,500 (2025). Saturday May 2, 2026 was the festival's first daytime sellout ([WWL/Audacy](https://www.audacy.com/wwl/news/local/jazz-fest)). **The 8-day total is never treated as one crowd.**
**Parking:** on-site parking only with VIP packages ([Jazz Fest FAQ](https://www.nojazzfest.com/faq/)); city parking enforcement and NOPD vehicle restrictions around the site ([City of New Orleans, 2023](https://ready.nola.gov/Events/Jazz-Fest-2023/Jazz-Fest-2023)); neighbors, churches and schools sell parking informally ([WWOZ](https://wwoz.org/blog/3653)).
**Shuttle:** Jazz Fest Express runs 10:30 a.m.–7:30 p.m. from four pickups: Sheraton and Hyatt Regency (valet parking extra), the Steamboat Natchez dock (paid surface lot), and the City Park Wisner lot (free parking with shuttle ticket) ([Jazz Fest](https://www.nojazzfest.com/patrons-with-disabilities)). Riders from the Wisner and Natchez lots and hotel valet are **car-involved**; hotel guests who walk to the Sheraton/Hyatt pickups are non-car shuttle riders.
**Transit:** 2024 adjustments ran the 47/48 Canal streetcars from the CBD to the City Park circle near the Fair Grounds ([WWL](https://wwltv.com/article/news/local/new-orleans-jazz-and-heritage-festibal-2024-what-you-need-to-know/289-7fbd67f6-626d-4568-bff5-4deb732a50d9)). No ridership was published.
**Bike:** bike parking beside the Gentilly and Sauvage pedestrian entrances ([City](https://ready.nola.gov/Events/Jazz-Fest-2023/Jazz-Fest-2023)).
**Estimate: 0.62, range 0.50–0.75.** Shuttle ridership, RTA boardings and bike counts are all unpublished, so no ridership inference was possible.

### E2 Mardi Gras parade routes (open site)

Placer.ai data analyzed by the Downtown Development District counted 2.2 million **visits** downtown from Krewe of Cleopatra (Feb 6) to Mardi Gras Day, up 10% ([Tulane Hullabaloo](https://tulanehullabaloo.com/73359/news/mardi-gras-brings-over-2-million-visitors-to-the-city-10-increase-from-last-year/)). These are device visits over ~12 days, not unique people or a simultaneous crowd. Canal and St. Charles streetcars were suspended Feb 12 through Mardi Gras Day with 24-hour replacement buses; Rampart streetcar suspended from Feb 14; buses detour two hours before parades ([WWL](https://www.wwltv.com/article/entertainment/events/mardi-gras/rta-announces-mardi-gras-2026-transit-changes-streetcars-suspended-during-carnival/289-decee258-d806-4373-a01f-bdc59c2a7f79)). Tulane's Weiss study surveyed parade attendees, but published summaries report spending, not travel mode ([Tulane](https://liberalarts.tulane.edu/newsletter/tulane-economics-professor-studies-fiscal-benefit-mardi-gras)).
**Unknown.** Provisional fallback: 0.85 under `hub`. The direction of bias is probably an overstatement (large walk-in share near the routes), but it cannot be quantified from public data.

### E3 French Quarter Festival

Free, 20 stages, expanded to the new Governor Nicholls riverfront park in 2026 ([Fox 8](https://www.fox8live.com/2026/04/20/french-quarter-fest-wraps-after-four-days-record-crowds/)). No attendance or mode data. **Unknown; provisional fallback 0.85.**

### E4 Zurich Classic (TPC Louisiana, Avondale)

123,000 attendance over the 2025 tournament week ([Fox 8](https://www.fox8live.com/2025/05/05/visitors-head-home-folding-chairs-tow-after-8-days-jazz-fest-fun/)) — a weekly total, not a daily crowd. No parking or shuttle documents were found; the estimate rests on the site's West Bank exurban location and Jefferson commute bounds. **0.95, range 0.90–0.99.** Note the shared late-April window with Jazz Fest.

---

## 7. Regional conclusion and weighting

### 7.1 Capacity-weighted car-involved share (fixed venues active Oct 2026)

One configuration per building; no mutually exclusive configurations added. Shrine on Airline (closed), the Orpheum (capacity unverified) and all festival/open-site rows are excluded.

| Row | Configuration used | Weight | Central | Low | High |
|---|---|---|---|---|---|
| V1 Superdome | NFL seats | 73,208 | 0.82 | 0.72 | 0.90 |
| V5 Smoothie King Center | NBA | 16,867 | 0.85 | 0.75 | 0.92 |
| V7 Yulman | Football | 30,000 | 0.70 | 0.55 | 0.82 |
| V8 Lakefront Arena | Basketball | 8,785 | 0.92 | 0.85 | 0.97 |
| V12 Pontchartrain Center | Sports | 3,600 | 0.95 | 0.90 | 0.98 |
| V9 Saenger | Theater | 2,600 | 0.75 | 0.60 | 0.88 |
| V10 Mahalia Jackson | Theater | 2,100 | 0.75 | 0.60 | 0.88 |
| V11 Fillmore | Concert | 2,000 | 0.75 | 0.60 | 0.88 |
| **Total / weighted** | | **139,160** | **0.80** | **0.69** | **0.89** |

Without the Superdome (which is 53% of the capacity weight): **0.79**. So the region's largest venue is *downtown*; no huge outlying venue is masking a downtown pattern. The reverse concern applies: the downtown dome dominates, and its own share is only an estimate.

### 7.2 Typical-attendance-weighted

| Basis | Inputs | Result |
|---|---|---|
| Teams with published attendance | Saints 70,036 × 0.82; Pelicans median sampled 16,690 × 0.85 | **0.83** (range 0.73–0.90) |
| Adding Jazz Fest daily average as an event row | + 59,375 × 0.62 (2026 total ÷ 8 days) | **0.74** (range 0.63–0.84) |

Yulman, Lakefront and the theaters lack published typical attendance and are excluded (missing coverage). The Jazz Fest row is a daily average of a festival that does not run simultaneously with Saints or Pelicans games; it is shown only to illustrate how festival crowds pull the regional figure down.

### 7.3 Assessment against existing settings

- `transit` (0.40): every fixed-venue estimate and the Jazz Fest estimate exceed 0.50. Even Orleans commuting is ≈84% car among travelers. Not supported.
- `sprawl` vs `hub` (both 0.85): the weighted estimates (0.80 capacity, 0.83 typical-attendance) bracket the 0.85 fallback within their ranges. The deciding factor is spill: the downtown cluster below shares garages, streets and transit, which matches `hub`.
- **Venue exceptions:** E1 Jazz Fest (0.62) and V2/V3 visitor-heavy Superdome events (0.65) sit well below any fallback; V8, V12, E4 sit above 0.90.

### 7.4 Clusters, shared roads and shared audiences (separate findings; no distance rule proposed)

**Clusters**
1. **LSED/CBD complex:** Superdome, Smoothie King Center and Champions Square share the same ≈7,000-space garage set ([Sugar Bowl](https://allstatesugarbowl.org/sports/2023/11/1/superdome-parking.aspx)) and one streetcar stop. Saenger, Fillmore and the Convention Center (Essence daytime) are a short walk away.
2. **Gentilly/Mid-City:** Fair Grounds (Jazz Fest) and City Park, which is a Jazz Fest shuttle parking origin and the streetcar terminus used for the festival.
3. **Uptown:** Yulman/Tulane, which has also drawn on Superdome garages for shuttles.
4. **Lakefront:** UNO Lakefront Arena, standalone.
5. **Jefferson East Bank:** Pontchartrain Center (Kenner) and Shrine on Airline (Metairie, reopening 2027), separate sites.
6. **West Bank:** TPC Louisiana (Avondale).

**Shared roads/approaches:** Poydras, Loyola, Girod, LaSalle and Canal around the dome (closure lists above); Claiborne Avenue as Yulman's shuttle loading zone ([Tulane](https://governmentrelations.tulane.edu/sites/default/files/2023-09/2023_Sept_NeighborNews.html)) and a Superdome-area parking restriction street; Gentilly Blvd and Esplanade near the Fair Grounds; St. Charles and Canal as both parade routes and streetcar corridors.

**Shared audiences and calendars:** Jazz Fest and the Zurich Classic in the same late-April fortnight; Jazz Fest "Daze Between" concerts at Mahalia Jackson on the mid-week off days ([Live for Live Music](https://liveforlivemusic.com/news/new-orleans-jazz-fest-2025-daily-schedule-cubes)); Super Bowl 2025 running into Carnival; Sugar Bowl at New Year's.

---

## 8. Source conflicts preserved

| Item | Conflict | Treatment |
|---|---|---|
| Superdome capacity | 74,295 / 73,208 / 73,000+ / 68,400 (Sugar Bowl) | Used 73,208 for weighting; event-specific counts where available |
| Smoothie King Center capacity | ≈18,310 vs 16,867; announced crowds up to 19,397 | Used 16,867; announced figures are tickets distributed |
| Jazz Fest 2024 attendance | 500,000 ([Fox 8](https://www.fox8live.com/2025/05/05/visitors-head-home-folding-chairs-tow-after-8-days-jazz-fest-fun/)) vs 450,000 ([OffBeat](https://www.offbeat.com/news/2026-jazz-fest-attendees/)) | Not used in weighting; 2026 figure used |
| Jazz Fest 2026 expectation | Fox 8 reported organizers expected about 400,000 on the final day ([Gulf Coast Weekend/WVUE](https://www.gulfcoastweekend.com/2026/05/04/jazz-fest-2026-wraps-with-final-day-sunshine-music-food/)) vs final 475,000 | Final announced figure used |
| Mahalia Jackson / Fillmore capacity | 2,100–2,243; 2,000–2,220 | Lower figures used |
| Essence attendance | 500,000 "predicted" by a commercial forecaster ([PredictHQ](https://www.predicthq.com/major-events/top-events/essence-festival)) vs no official count | Not used; multi-day and unofficial |
| Sugar Bowl 2027–28 date | Quarterfinal reported for Dec 31, 2027 ([KPLC](https://www.kplctv.com/2026/07/09/new-orleans-lands-more-college-football-playoff-games-sugar-bowl/)) vs Jan 1 in another outlet | Re-check |
| 49 streetcar | A parking guide says the 49 Loyola–Riverfront line was discontinued ([ParkingAccess](https://parkingaccess.com/superdome-parking)); RTA's Feb 2025 plan still listed it ([RTA](https://norta.com/superbowl/sunday)) | Unverified; re-check with RTA |
| Superdome rideshare pickup | Two official sites give pickup on opposite sides of Loyola, per [ParkingAccess](https://parkingaccess.com/superdome-parking) | Unverified secondary claim |

---

## 9. Final answers

### 9.1 Recommended existing city type and rationale

**`hub`.** Capacity-weighted estimated car-involved share ≈0.80 (0.69–0.89); typical-attendance-weighted ≈0.83 for team sports. Downtown concentration and shared garages/approaches justify hub-level spill. **Strongest contrary evidence:** high no-vehicle household share and non-car commuting in Orleans; Jazz Fest's no-parking design; walkable hotel base for visitor-heavy dome events. These support venue-level exceptions rather than a `transit` city type, because RTA curtails service to the largest crowds.

### 9.2 Car-share values keyed to venue rows

The companion answer's row IDs were not available; keys below are this document's IDs.

| Category | Rows and values |
|---|---|
| **Measured** | None found for any row. |
| **Projected** (planning forecasts) | None found. |
| **Estimated** | V1 0.82 · V2 0.65 · V3 0.65 · V4 0.78 · V5 0.85 · V6 0.82 · V7 0.70 · V8 0.92 · V9 0.75 · V10 0.75 · V11 0.75 · V12 0.95 · V13 0.95 (closed until June 2027) · E1 0.62 · E4 0.95 |
| **Unknown → provisional fallback** | E2 Mardi Gras, E3 French Quarter Fest: 0.85 under `hub` |

### 9.3 Boundary recommendation and inconsistencies

**Recommendation:** use **Orleans Parish plus Jefferson Parish (East Bank: Metairie, Kenner; West Bank: Gretna, Harvey, Marrero, Westwego, Avondale)** as the core boundary. It contains every active 1,000+ fixed venue identified here and the West Bank Zurich Classic site. 2024 estimates: Orleans 362,701; Jefferson 427,253 ([citypopulation.de from Census](https://citypopulation.de/en/usa/louisiana)).
**Edge municipalities (separate):** Chalmette/Arabi (St. Bernard), Belle Chasse (Plaquemines), LaPlace (St. John), Luling/Destrehan (St. Charles) — Census MSA parishes with no 1,000+ venue identified. **St. Tammany** (Slidell, Mandeville, Covington; 277,615 in 2024, same source) is an audience origin but was removed from the official New Orleans metro definition in 2023 ([The Data Center](https://www.datacenterresearch.org/?p=49)); keep it outside the venue boundary. Baton Rouge and Hammond are separate markets.
**Inconsistencies:** (1) the companion venue brief was not supplied, so row alignment could not be checked; (2) the brief's "Jefferson/West Bank" working boundary is narrower than the Census MSA (7 parishes) and the RPC's 5- and 9-parish regions; (3) the RPC table's own MSA row is internally invalid (§3).

### 9.4 Data gaps, model limitations, conflicts, inaccessible sources

- **No measured event mode split exists in public sources** for any New Orleans venue or festival. No RTA event-day ridership, no Jazz Fest Express ridership, no LSED parking transaction counts were found.
- **No ridership inference was performed**: without daily boardings, a baseline subtraction cannot be done honestly.
- Venues not verified (capacity/current status): Champions Square (outdoor), Orpheum Theater, House of Blues, Joy Theater, Tipitina's, Tad Gormley Stadium (City Park), Fair Grounds horse-racing grandstand, Alario Center (Westwego), Castine Center (St. Tammany). Events not verified: Bayou Classic, Voodoo Fest status, Louisiana Derby.
- Placer.ai visits and "in town" tourism figures cannot be converted to attendance.
- Paywalled Times-Picayune/NOLA.com and The Advocate articles were not accessed beyond public snippets; their content is not relied on except where quoted by other outlets.
- Model limitation: a single fallback per city type cannot represent the two-sided New Orleans pattern (visitor-walk crowds downtown vs fully car-dependent suburban rooms); venue overrides carry most of the signal.

### 9.5 Confirmed transport or venue changes through 2028

| Change | Status | Date | Suggested re-check |
|---|---|---|---|
| Shrine on Airline renovation, reopening as multi-use stadium ([Fox 8](https://www.fox8live.com/2026/06/22/shrine-airline-renovation-could-bring-soccer-team-metro-new-orleans/)) | Scheduled, funded, under construction | By June 2027 | July 2027 |
| Laketown Squadron (G League) at Pontchartrain Center ([Wikipedia/NBA.com](https://en.wikipedia.org/wiki/Pontchartrain_Center)) | Scheduled | 2026–27 season | Dec 2026 |
| Saints home game moved to Paris ([The Advocate](https://www.theadvocate.com/baton_rouge/sports/saints/saints-france-game-season-ticket-adjustment/article_9110482a-fc62-586a-94b8-5bf3a86e65eb.html)) | Scheduled | Oct 25, 2026 | — |
| Jazz Fest 2027 ([Biz New Orleans](https://bizneworleans.com/jazz-fest-2026-draws-475000-fans/)) | Scheduled | Apr 22–25 & Apr 29–May 2, 2027 | Mar 2027 |
| CFP National Championship at Superdome ([CBS Sports](https://www.cbssports.com/college-football/news/college-football-playoff-locations-new-orleans-set-to-host-cfp-national-championship-in-2028)) | Scheduled | Jan 24, 2028 | Oct 2027 (transit plan) |
| Essence Festival ([Fox 8](https://www.fox8live.com/2026/07/06/essence-festival-2026-wraps-new-orleans-contract-expires-mayor-eyes-renewal/)) | Contract expired after 2026; renewal under negotiation | — | Jan 2027 |
| Smoothie King Center renovation ([Hoodline](https://hoodline.com/2026/03/pelicans-plot-smoothie-king-center-gut-job-as-lease-clock-ticks/)) | **Proposal**; needs lease and legislative action; lease ends June 2029 | — | After 2027 legislative session |
| RTA East–West Bank Bus Rapid Transit ([Bus-News](https://bus-news.com/new-orleans-rta-approves-design-contract-for-bus-rapid-transit/); [Mass Transit](https://www.masstransitmag.com/bus/infrastructure/news/55337044/la-new-orleans-moves-a-step-closer-to-its-first-rapid-transit-bus-system-but-barriers-remain)) | In preliminary design ($5.7M contract, Nov 2025); construction funding not secured | No delivery date | Mid-2027 |
| RTA Downtown Transit Center ([RTA, $24.8M grant](https://norta.com/news-list/new-orleans-rta-receives-$24-million-in-federal-funding-for-downtown-transit-center-1); [RTA project page](https://norta.com/current-projects/downtown-transit-hub)) | Federal grant awarded 2023, but RTA's project page still lists environmental review and funding as next steps; no opening date found | — | Q1 2027 |
| Algiers Service Improvement Plan ([CB Insights summarizing RTA release](https://www.cbinsights.com/company/new-orleans-regional-transit-authority)) | Scheduled for 2026 implementation | 2026 | Dec 2026 |

---

*Public data only. No app code, hand flags, personal ratings or cost commitments are included. All shares are estimates unless explicitly labeled otherwise; none should be read as measured event travel.*
