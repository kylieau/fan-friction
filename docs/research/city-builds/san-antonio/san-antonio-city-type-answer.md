# San Antonio — City Type Answer for Fan/Friction Gridlock

**Research date:** Monday, October 12, 2026 (public web sources only; all access dates are this date).
**Scope:** San Antonio and its event metro, Bexar County core, with New Braunfels/Comal, Seguin/Guadalupe and Boerne/Kendall assessed as edges. Austin is a separate research candidate and is only cross-referenced.
**Companion venue answer:** not available to this pass. Venues were enumerated independently; coverage gaps are named in §6 and §9.

---

## 1. Bottom line

**Recommended existing city type: `sprawl` (driving).**

No public intercept survey, travel plan or environmental review with a measured attendee mode split was found for any San Antonio venue. The best local event-travel evidence is VIA Metropolitan Transit's published special-event Park & Ride (P&R) ride counts. Those counts are **car-involved** trips (attendees drive to a remote lot, then ride a bus), so even San Antonio's highest-ever event transit use does not reduce the car-involved share; it only moves parking away from the venue. At the four biggest measured downtown events, P&R carried roughly 12–21% of attendees (method in §4), and no evidence was found of a meaningful non-car share outside walkers in the downtown hotel district.

The `sprawl` and `hub` settings share the same 0.85 fallback car share, so this choice matters mainly for crowd spill. San Antonio's large venues are dispersed (east side, northeast, west side, southwest, and a rural Comal County amphitheater), with one genuine downtown cluster around the Alamodome. That pattern fits `sprawl` better than `hub` through 2028.

**Strongest contrary evidence:** the downtown Alamodome–Convention Center–Hemisfair cluster has walkable hotels, a dense parking stock, coordinated multi-event operations, and is the planned site of the Spurs arena; the city is now explicitly favoring behavior change over new event parking there (§8). Those facts point toward `hub` after the Missions (2029) and Spurs (≈2031–32) moves, not before.

---

## 2. Background only: ordinary commuting (not event travel)

| Measure | Value | Source | Use |
|---|---|---|---|
| San Antonio commuters driving alone (ACS 2016) | 79% | [San Antonio Report](https://sanantonioreport.org/census-data-almost-80-of-san-antonians-drive-to-work-alone/) | Background only |
| San Antonio commuters who drove (any car) / transit / walked (ACS 2016) | 90% / 3% / 2% | [San Antonio Report](https://sanantonioreport.org/census-data-almost-80-of-san-antonians-drive-to-work-alone/) | Background only |
| VIA annual ridership (2025) | 30,665,700 boardings (another source says more than 31 million) | [Wikipedia, VIA](https://en.wikipedia.org/wiki/VIA_Metropolitan_Transit); [TPR, Aug 2026](https://www.tpr.org/news/2026-08-05/via-service-improvements-higher-gas-prices-inflation-drive-record-ridership) | Background only; small definitional conflict |
| VIA weekday ridership (Q1 2026) | ~99,000 | [Wikipedia, VIA](https://en.wikipedia.org/wiki/VIA_Metropolitan_Transit) | Background only |

The ACS figures are a decade old and describe work trips, not event trips. They are shown only to confirm that San Antonio has no rail and a low transit base; they are **not** used as event mode shares.

---

## 3. Evidence inventory

| Evidence type | Found? | Notes |
|---|---|---|
| Venue travel plan / TDM plan with observed split | No | None public for Alamodome, Frost Bank Center, Toyota Field, Wolff Stadium or Tech Port. |
| Environmental / planning review with event mode split | No (projected parking only) | Downtown parking study (Walker Consultants, released March 2026) and Pape-Dawson Project Marvel infrastructure study are known only through press summaries; full documents not located. |
| Organizer / team attendee surveys | No | None public. |
| Transit agency event ridership | **Yes, partial** | VIA's top-four special-event P&R totals since Oct 2013 ([VIA, Oct 30 2025](https://www.viainfo.net/park-ride-record/)). No per-game Spurs, rodeo or Fiesta counts found. |
| Official parking / event operations reports | Partial | Alamodome lot capacities (2015 guide), P&R schedules, rideshare zones, rodeo remote parking. |

---

## 4. Ridership inference method (VIA Park & Ride)

VIA reports "rides to and from" a venue station. Method used:

1. **Baseline subtraction:** none needed. Special-event P&R routes run only for the event, so there is no regular-service baseline on those trips. Regular fixed-route riders are **not** included in these counts and remain unmeasured.
2. **Return trips:** central case assumes each P&R user rode in and out, so persons = rides ÷ 2. Upper case assumes some users rode only one leg, persons = rides ÷ 1.6.
3. **Denominator:** announced attendance (tickets distributed or turnstile, as published), not ticket buyers.
4. **Mode treatment:** P&R users are counted as **car-involved** (they drove to the lot). A small number may have reached the lot on foot or by fixed-route bus; that is unmeasured and treated as negligible.

| Event (date) | P&R rides | Persons (central–upper) | Attendance | P&R share of attendees | Source |
|---|---|---|---|---|---|
| Valero Alamo Bowl, Texas vs Oregon (Dec 30, 2013) | [21,762](https://www.viainfo.net/park-ride-record/) | 10,881–13,601 | [65,918](https://www.alamobowl.com/wp-content/uploads/2014/11/2013-GAME-RECAP.pdf) (conflict: [65,981](https://www.alamobowl.com/wp-content/uploads/2022/09/VAB-2013-Game-Notes.pdf)) | **16.5–20.6%** | Measured rides; derived share |
| USA vs Mexico friendly (Apr 15, 2015) | [16,982](https://www.viainfo.net/park-ride-record/) | 8,491–10,614 | [64,369](https://sanantonioreport.org/usa-spanks-mexico-2-0-at-the-alamodome/) | **13.2–16.5%** | Measured rides; derived share |
| Muertos Fest + Paul McCartney at Alamodome (Oct 25, 2025) | [23,254](https://www.viainfo.net/park-ride-record/) | 11,627–14,534 | Officials estimated [well over 100,000](https://www.viainfo.net/park-ride-record/) downtown across events | **≤11.6–14.5%** (upper bound because denominator is "more than") | Measured rides; combined events; systemwide fares were [free that day](https://www.ksat.com/news/local/2025/10/30/via-park-ride-hits-10-year-ridership-high-due-to-busy-downtown-weekend/) |
| Spurs vs Warriors at Alamodome (Jan 13, 2023) | Not in VIA's top four, so below [16,800](https://www.viainfo.net/park-ride-record/) | below 8,400–10,500 | [68,323](https://www.ksat.com/sports/2023/01/14/warriors-top-spurs-144-113-before-nba-record-crowd-of-68323/) | **<12.3–15.4%** | Bound only |
| Spurs Championship Celebration (June 2014) | [16,800](https://www.viainfo.net/park-ride-record/) | 8,400–10,500 | Not found | Unknown | Denominator missing |
| Fiesta Flambeau parade | No single Fiesta event in VIA's top four, so below [16,800](https://www.viainfo.net/park-ride-record/) | below 8,400–10,500 | [~600,000](https://en.wikipedia.org/wiki/Fiesta_San_Antonio) (2011 crowd estimate) | **<1.4–1.75%** | Bound only; crowd estimate soft and from a different year |

**Interpretation:** dedicated event transit in San Antonio is overwhelmingly park-and-ride. Even the record turnout leaves the car-involved share at or above the share of people who drove to venue-area parking, plus everyone using rideshare. These figures describe peak, heavily promoted events; typical games will be lower.

---

## 5. Venue and event travel table — mode split

Column notes: "Car" is persons by private car, carpool or rideshare to the venue area. "P&R" is the dedicated event bus from a remote lot; it is a **subset of car-involved trips** and is added to "Car" in the recommended value. "Sums to 100%?" says whether a complete split exists.

| # | Verified current name (municipality) | Setup / event and date represented | Car (direct) | Event P&R (car-involved) | Regular transit | Dedicated non-car shuttle | Walk / bike / other | Unclassified | Sums to 100%? | **Recommended car-involved share** (range; confidence) | Evidence type / date |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **Alamodome** (San Antonio, downtown) | Stadium configuration, mega-events: 2013 Alamo Bowl, 2015 USA–Mexico | Unknown | 13–21% (§4) | Unknown | None | Unknown (downtown hotel walkers) | ~79–87% | No — only P&R measured | **0.87** (0.80–0.93; low) | Measured P&R rides 2013/2015; estimate |
| 1a | Alamodome | UTSA football, 2025–26 seasons | Unknown | VIA P&R operated for [UTSA vs Navy, Oct 17 2026](https://www.viainfo.net/park-ride-events/) | Unknown | Free campus-to-dome student shuttle in [2025](https://goutsa.com/news/2025/09/4/utsatexas-state-football-game-fan-information-2025) (car-involved only if rider drove to campus) | Unknown | 100% | No | **0.87** (0.80–0.93; low) — same as row 1 pending data | Operations notices only |
| 1b | Alamodome | Spurs 50th-anniversary game, Jan 13 2023 | Unknown | <12.3–15.4% (bound) | Unknown | None | Unknown | — | No | Covered by row 1 | Bound only |
| 2 | **Frost Bank Center** (San Antonio, east side) | Spurs basketball, 2025–26 season | Unknown | Spurs P&R offered from two lots in past seasons ([2019–20](https://www.viainfo.net/2019/10/04/via-park-ride-service-offers-convenient-travel-options-to-spurs-games/)); 2026–27 service not yet listed on [VIA's events page](https://www.viainfo.net/park-ride-events/) | Unknown | None | Negligible (no walk catchment) | 100% | No | **0.95** (0.92–0.98; low) | Estimate from site, parking supply, P&R pattern |
| 3 | **San Antonio Stock Show & Rodeo grounds** (Frost Bank Center + Freeman Coliseum grounds) | 2026 run, Feb 12–Mar 1 (18 days) | Unknown | Remote-lot parking includes a shuttle ([KSAT 2025](https://www.ksat.com/news/local/2025/02/05/what-to-know-about-the-2025-san-antonio-stock-show-rodeo/)); VIA weekend P&R ran in [2019](https://www.viainfo.net/2019/02/05/ride-via-to-the-rodeo-every-weekend-in-february/) | Unknown | None found | Unknown | 100% | No | **0.95** (0.90–0.98; low) | Estimate; multi-day crowd, not simultaneous |
| 4 | **Freeman Coliseum** (San Antonio, same grounds) | Non-rodeo concerts / expos | Unknown | None found | Unknown | None | Negligible | 100% | No | **0.95** by same-site analogy (0.90–0.98; very low); else `sprawl` fallback 0.85 | Capacity not verified (gap) |
| 5 | **Toyota Field** (San Antonio, far northeast) | San Antonio FC, 2026 USL season | Unknown | None found | Unknown | None | Negligible | 100% | No | **0.96** (0.92–0.99; low) | Estimate |
| 6 | **Nelson W. Wolff Municipal Stadium** (San Antonio, west side) | Missions baseball, through 2028 season | Unknown | None found | Unknown | None | Negligible | 100% | No | **0.95** (0.90–0.98; low) | Estimate |
| 7 | **Boeing Center at Tech Port** (San Antonio, Port San Antonio) | Concerts / boxing / esports, 2023–26 | Unknown | None found | Unknown | None | Negligible | 100% | No | **0.95** (0.90–0.98; low) | Estimate |
| 8 | **Whitewater Amphitheater** (New Braunfels area, Comal County — edge) | Summer concert season 2026 | Unknown | Off-site lots with shuttles (car-involved) ([Saving Country Music](https://savingcountrymusic.com/beloved-whitewater-amphitheater-files-for-chapter-11-sale-pending/)) | None | Private group shuttles only | Negligible | 100% | No | **0.98** (0.95–0.99; moderate) | Estimate; rural site |
| 9 | **Fiesta parades** — Battle of Flowers, Fiesta Flambeau (downtown streets; open site) | April 2026 (Fiesta P&R ran Apr 17–25) | Unknown | <1.4–1.75% of Flambeau crowd (bound) | Unknown | None | Unknown, likely material for central residents | ~98% | No | **Unknown** — provisional `sprawl` fallback 0.85 (plausible 0.65–0.90; very low) | Bound only |
| 10 | **NIOSA** (La Villita / Hemisfair, downtown) | Four nights during Fiesta | Unknown | VIA P&R to Convention Way drop-off ([KSAT 2025](https://www.ksat.com/news/local/2025/04/23/via-to-offer-park-and-ride-services-for-fiesta-events)) | Unknown | None | Unknown | 100% | No | **Unknown** — provisional fallback 0.85 | No ridership data |
| 11 | **Downtown multi-event day** (Alamodome concert + Muertos Fest) | Oct 25, 2025 | Unknown | ≤11.6–14.5% | Unknown (fixed route was fare-free) | None | Unknown | — | No | Not a venue row; see Alamodome and clusters | Measured P&R rides; combined denominator |
| 12 | **Missions downtown ballpark** (San Antonio, NW downtown) — *dated replacement for row 6* | Opening April 2029 | — | — | — | — | — | — | — | Not in service through 2028; no projected split found | Projected parking only |
| 13 | **Spurs downtown arena** (Hemisfair, San Antonio) — *proposed* | ≈2031–32 | — | — | — | — | — | — | — | Not in service through 2028; no projected split found | Projected parking only |

**People vs vehicles:** every share above is persons. No vehicle counts were converted. Parking-space totals in §6 are supply, not demand, and were not turned into shares.

**Missing modes:** rideshare (car) is unmeasured at every venue but is inside "car-involved". Bike/scooter is unmeasured everywhere.

---

## 6. Venue and event operations table

| # | Venue / event | Capacity by configuration (verified) | Parking supply and remote arrangements | Event operations, closures, start/end service | Access constraints and crowds sharing approaches | Sources / method |
|---|---|---|---|---|---|---|
| 1 | Alamodome | [65,000 stadium seats; 8,000–35,000 arena](https://www.alamodome.com/assets/doc/Event_Guide_11-20-15.pdf) (2015 guide) | On-site Lots A, B, C total [2,750 spaces](https://www.alamodome.com/assets/doc/Event_Guide_11-20-15.pdf), including [127 accessible spaces in Lot A](https://www.alamodome.com/parking-tailgating/). A full stadium therefore depends on downtown garages, rideshare (Lot D zone, west of I-37, per [Alamo Colleges guide](https://alamo.edu/link/401127267a1d481c8c6af83536363761.aspx)) and P&R. | P&R for the [Dec 2025 Alamo Bowl](https://www.sacurrent.com/arts/things-to-do/via-offering-park-and-rise-to-2025-valero-alamo-bowl-next-week/) ran from four lots for three hours before kickoff and one hour after the final whistle; [UTSA vs Navy (Oct 17 2026)](https://www.viainfo.net/park-ride-events/) service runs 4–7 p.m. and returns for one hour after. Inbound sales end at event start. | Northbound Cherry St may close at César E. Chávez Blvd at peaks ([guide](https://alamo.edu/link/401127267a1d481c8c6af83536363761.aspx)). Shares I-37 and downtown streets with Convention Center, Hemisfair, Fiesta and River Walk crowds. | Official guide, VIA, press |
| 1a | Alamodome — UTSA | UTSA home record [56,743](https://goutsa.com/news/2025/09/4/utsatexas-state-football-game-fan-information-2025) (2011); [10,035 season tickets sold in 2024](https://goutsa.com/news/2025/01/21/roadrunners-on-the-rise-utsa-once-again-sets-fall-attendance-records). Typical game attendance not verified. | Season parking passes in Lots A–C tied to donor levels | Free campus shuttle began 11:30 a.m. for the 2025 opener | Weekend daytime/evening fall games | Team notices |
| 2 | Frost Bank Center | Basketball [18,418](https://en.wikipedia.org/wiki/Frost_Bank_Center) | More than [7,000 on-site spaces](https://www.koobit.com/spurs-vs-pistons-e232707) in Lots 1–7 (secondary aggregator — flag); general Spurs parking from [$15](https://itinerantfan.com/stadium-guide/frost-bank-center/) | Historic Spurs P&R: inbound from one hour before tip until 30 minutes before; return for 30 minutes after ([VIA 2017](https://www.viainfo.net/2017/10/06/via-offers-convenient-special-event-park-ride-service-spurs-games/)). Lot 1 also serves as a P&R origin for Alamodome events. | Isolated east-side site, I-35 / I-10 access; arena moved [3.1 miles](https://www.news4jax.com/sports/2023/01/14/spurs-set-attendance-record-with-6500-plus-against-warriors/) from the Alamodome in 2002. Shares lots and approaches with Freeman Coliseum and rodeo. | Wikipedia, secondary guides, VIA |
| 3 | Rodeo grounds | Organizer cites [~1.5 million visitors](https://www.foxsanantonio.com/news/local/2026-san-antonio-stock-show-rodeo-live-music-entertainment-food-drinks-and-more) over the 18-day run; PredictHQ predicted [1.3 million](https://www.predicthq.com/major-events/top-events/san-antonio-stock-show-and-rodeo-2025) for 2025. **Multi-day totals, not a simultaneous crowd.** | Lots around grounds by organizer and private vendors; shuttles included; north Gold Lot [$20](https://www.ksat.com/news/local/2025/02/05/what-to-know-about-the-2025-san-antonio-stock-show-rodeo/); carnival occupies a lot northeast of the arena, reducing supply | Evening rodeo + concert in arena on top of daytime grounds crowd | Arena show crowd overlaps grounds visitors on the same lots | Press, organizer figures |
| 4 | Freeman Coliseum | **Not verified** (gap) | Shares grounds lots | — | Same site as rows 2–3 | — |
| 5 | Toyota Field | Soccer [8,296](https://en.wikipedia.org/wiki/Toyota_Field); concerts/festivals 13,000 (same source); 2026 SAFC league average [6,071](https://en.wikipedia.org/wiki/2026_San_Antonio_FC_season) | On-site surface lots (count not verified) | No VIA P&R found | Isolated northeast site | Wikipedia |
| 6 | Wolff Stadium | About [9,200](https://www.ksat.com/news/local/2024/08/06/downtown-baseball-stadium-for-san-antonio-missions-expected-to-open-by-2028-letter-to-mlb-says/) (KSAT) vs [6,200 fixed + 3,000 lawn](https://www.tpr.org/news/2026-03-27/san-antonio-missions-release-first-renderings-of-upcoming-downtown-baseball-stadium) (MLB.com via TPR) — consistent | Surface lots (count not verified) | None found | About [8 miles west of downtown](https://en.wikipedia.org/wiki/Nelson_W._Wolff_Municipal_Stadium) on US-90 | Press, Wikipedia |
| 7 | Boeing Center at Tech Port | [3,100](https://en.wikipedia.org/wiki/Port_San_Antonio) | Paid on-site parking (count not verified) | First year: roughly [40 events and ~50,000 total attendance](https://www.sacurrent.com/music/boeing-center-at-tech-port-will-host-even-more-concerts-over-the-next-year-ceo-says-31954173/) | Southwest industrial campus | Wikipedia, press |
| 8 | Whitewater Amphitheater (edge) | [5,600](https://www.whitewaterrocks.com/venue-info/) | Prepaid lot likely to sell out; off-site parking with shuttles after loss of the lot across the road | Reached from I-35 exit 191 via FM 306, about [11 miles](https://www.whitewaterrocks.com/plan-your-visit) | Rural two-lane approach; shared I-35 corridor with Austin-bound traffic. Operator filed [Chapter 11](https://mycanyonlake.com/?p=94802) in 2026; shows continuing. | Venue site, press |
| 9 | Fiesta (citywide) | Total Fiesta attendance about [2.5 million](https://www.ksat.com/news/local/2022/03/17/fiesta-by-the-numbers/) (UTSA economic-impact study) — **multi-day, multi-site** | P&R from Crossroads and other lots to Convention Way drop-off ([2025](https://www.ksat.com/news/local/2025/04/23/via-to-offer-park-and-ride-services-for-fiesta-events)); 2026 P&R ran [Apr 17–25](https://www.ksat.com/news/local/2026/04/10/via-announces-ride-schedule-for-upcoming-fiesta-events/) | Parade-route closures downtown (Broadway / Alamo area) | A March 2026 downtown parking study reportedly found parking available even at Fiesta peaks ([Axios](https://www.axios.com/local/san-antonio/2026/03/23/downtown-san-antonio-parking-study-spurs-arena)) | Press |

**Coverage gaps (fixed rooms ≈1,000+ not verified in this pass):** Majestic Theatre, Tobin Center, Aztec Theatre, Lila Cockrell Theatre, Sunken Garden Theater, Freeman Coliseum capacity, UTSA Convocation Center, Alamo Stadium, Heroes Stadium, Henry B. González Convention Center halls, Floore's Country Store (Helotes), Gruene Hall (New Braunfels), and any Seguin or Boerne rooms. These should be taken from the companion venue answer when available.

---

## 7. Regional weighting

### 7a. Capacity-weighted car-involved share (Bexar County core)

One configuration per venue, none mutually exclusive, no multi-day totals:

| Venue | Configuration used | Weight | Central / low / high |
|---|---|---|---|
| Alamodome | Stadium, 65,000 | 65,000 | 0.87 / 0.80 / 0.93 |
| Frost Bank Center | Basketball, 18,418 | 18,418 | 0.95 / 0.92 / 0.98 |
| Wolff Stadium | Baseball, ~9,200 | 9,200 | 0.95 / 0.90 / 0.98 |
| Toyota Field | Soccer, 8,296 | 8,296 | 0.96 / 0.92 / 0.99 |
| Boeing Center at Tech Port | Arena, 3,100 | 3,100 | 0.95 / 0.90 / 0.98 |
| **Total** | | **104,014** | **0.90 / 0.84 / 0.95** |

Excluding the Alamodome (39,014 seats), the weighted value is **0.95** (0.91–0.98). Adding Whitewater (edge, 5,600 at 0.98) moves the total to 0.905. Excluded for missing capacity: Freeman Coliseum and theaters. Excluded as not simultaneous: rodeo grounds and Fiesta totals.

### 7b. Typical-attendance weighting

Not computable with sourced data: only SAFC's 2026 average (6,071) is verified; Spurs, UTSA, Missions and concert typical crowds were not found. **Sensitivity only (not an estimate):** if the Alamodome's typical crowd were half its stadium capacity, the weighted value would rise to about 0.915, because the only lower-car venue would carry less weight.

### 7c. Does a huge venue obscure the pattern?

Yes, but in the opposite direction to the usual case: the single largest venue (Alamodome) is the **downtown** one and is the only venue with a plausible non-car share. It pulls the regional average down toward 0.90. Every outlying venue is estimated at 0.95 or above.

---

## 8. Clusters, shared roads and shared audiences (separate findings)

**Clusters**
- **Downtown / Hemisfair / Alamodome:** Alamodome, Convention Center, Hemisfair, La Villita (NIOSA), Fiesta parade route, and the planned Spurs arena across I-37 from the Alamodome. The Oct 25, 2025 coordination (city, VIA, Alamodome, police, Centro) for more than 100,000 downtown attendees is the clearest example of overlapping crowds sharing approaches ([VIA](https://www.viainfo.net/park-ride-record/)).
- **East side grounds:** Frost Bank Center, Freeman Coliseum and rodeo grounds share Lots 1–7 and the I-35 / I-10 approaches.
- **Isolated singles:** Toyota Field (northeast), Wolff Stadium (west, through 2028), Boeing Center (southwest), Whitewater (Comal County).

**Shared roads**
- I-37 between the Alamodome and Hemisfair; Cherry St, Montana St and César E. Chávez Blvd for Alamodome lots.
- I-35 and I-10 East for the east-side grounds.
- I-35 north to New Braunfels for Whitewater (also an Austin-bound corridor).

**Shared infrastructure and audiences**
- P&R lots link clusters: Frost Bank Center Lot 1 and Crossroads are reused as P&R origins for Alamodome events ([SA Current](https://www.sacurrent.com/arts/things-to-do/via-offering-park-and-rise-to-2025-valero-alamo-bowl-next-week/)).
- The Spurs played two home games at Austin's Moody Center in February 2026 ([Ticketmaster listing](https://www.ticketmaster.ca/san-antonio-spurs-billets/artist/806012?page=1)) — a shared audience to cross-reference with the Austin answer, not duplicate.

No distance rule or hard-access flag is proposed.

---

## 9. Required closing items

### 9.1 Recommended existing city type and rationale; strongest contrary evidence

**`sprawl`.** Rationale: (a) no rail and a ~3% transit commute background; (b) the largest measured event transit flows are park-and-ride, which are car-involved; (c) on-site Alamodome parking is small relative to capacity, but the shortfall is absorbed by downtown garages, rideshare and P&R rather than by non-car modes; (d) all outlying venues are car-only by site. Because `sprawl` and `hub` share the 0.85 fallback, the evidence-implied venue values (mostly 0.95+, Alamodome ~0.87) are what most affect Gridlock reads; the type choice mainly governs spill.

**Contrary evidence:** the downtown cluster's walkability and hotel base; record-setting P&R use and a city policy shift toward mode change for events ([TPR, Oct 5 2026](https://www.tpr.org/economy-and-labor/2026-10-05/city-scraps-plans-for-parking-garage-as-part-of-project-marvel-improvements-in-2027-bond)); and future downtown moves of the Missions and Spurs. **Venue exceptions:** Alamodome mega-events (lower car share, high spill with downtown crowds); Fiesta open-site crowds (unknown split).

### 9.2 Car-share values keyed to venue rows

Companion row IDs were unavailable; values are keyed to this document's rows.

| Row | Venue / event | Value | Class |
|---|---|---|---|
| — | P&R share, 2013 Alamo Bowl | 16.5–20.6% of attendees | **Measured** rides, derived share |
| — | P&R share, 2015 USA–Mexico | 13.2–16.5% | **Measured** rides, derived share |
| — | P&R share, Oct 25 2025 downtown | ≤11.6–14.5% | **Measured** rides, bounded share |
| 1, 1a, 1b | Alamodome | 0.87 (0.80–0.93) | **Estimated** |
| 2 | Frost Bank Center | 0.95 (0.92–0.98) | **Estimated** |
| 3 | Rodeo grounds | 0.95 (0.90–0.98) | **Estimated** |
| 4 | Freeman Coliseum | 0.95 analogy, else 0.85 fallback | **Estimated** (very low) |
| 5 | Toyota Field | 0.96 (0.92–0.99) | **Estimated** |
| 6 | Wolff Stadium | 0.95 (0.90–0.98) | **Estimated** |
| 7 | Boeing Center at Tech Port | 0.95 (0.90–0.98) | **Estimated** |
| 8 | Whitewater Amphitheater (edge) | 0.98 (0.95–0.99) | **Estimated** |
| 9, 10 | Fiesta parades, NIOSA | Unknown → `sprawl` fallback 0.85 | — |
| 12, 13 | Missions ballpark (2029), Spurs arena (proposed) | None | **No projected split found**; only projected parking supply/deficit |

No measured full mode split exists for any row.

### 9.3 Boundary recommendation and inconsistencies between briefs

**Recommendation:** treat **Bexar County** as the core. Include as edges, flagged separately: **Comal County / New Braunfels** (population [209,166](https://editions.communityimpact.com/view/879076202/24/) in 2025, up from 163,608 in 2020; contains Whitewater), **Guadalupe County / Seguin–Schertz–Cibolo** ([201,111](https://editions.communityimpact.com/view/879076202/24/) in 2025), and **Kendall County / Boerne** (no verified 5,000+ venue found). For scale, Bexar had about [2,087,679](https://gmg-ksat-prod.cdn.arcpublishing.com/news/local/2024/09/15/comal-guadalupe-counties-among-15-fastest-growing-in-texas) residents in 2023. New Braunfels sits on the I-35 corridor shared with Austin; assign Whitewater to San Antonio as an edge destination and cross-reference rather than duplicate it in the Austin answer.

**Inconsistencies:**
- The brief assumes a companion venue answer; it was not available, so row keys here are independent.
- The brief lists "Wolff Stadium and any dated replacement" within a 2028 window; the replacement is now dated to **2029**, outside that window.
- The brief treats "Freeman Coliseum and rodeo grounds separately"; done, but Freeman's capacity could not be verified.
- The brief lists Austin as separate; the Spurs' 2026 Austin games blur the audience boundary.

### 9.4 Data gaps, limitations, source conflicts, inaccessible sources

**Gaps:** no observed mode split for any venue; no per-event VIA counts for Spurs, rodeo, UTSA or Fiesta; no rideshare data; typical attendance missing for Spurs, UTSA, Missions and concerts; theater and Freeman capacities unverified.

**Model limitations:** the P&R person conversion assumes round trips; the Fiesta bound uses a 2011 crowd estimate; estimated venue shares rest on site context and parking supply, not counts.

**Source conflicts:**
- 2013 Alamo Bowl attendance: 65,918 vs 65,981 (§4). Effect on share is under 0.1 point.
- 2025 VIA ridership: 30,665,700 vs "more than 31 million" (§2).
- Green Line opening: [August 2027](https://sanantonioreport.org/via-green-line-bus-rapid-transit-construction-timeline/) vs [late 2027 or early 2028](https://www.tpr.org/government-politics/2024-12-18/via-lands-federal-grant-to-fully-fund-rapid-transit-corridor-from-the-airport-to-the-missions) vs the latest [April 22, 2028](https://sanantonioreport.org/?p=5439096). The latest is used.
- Missions ballpark capacity: [4,500 fixed / 7,500 total](https://www.tpr.org/news/2026-03-27/san-antonio-missions-release-first-renderings-of-upcoming-downtown-baseball-stadium) vs [about 8,000](https://www.ksat.com/news/local/2024/08/06/downtown-baseball-stadium-for-san-antonio-missions-expected-to-open-by-2028-letter-to-mlb-says/) (2024).
- Spurs arena opening: initial 2028 assumption vs [summer 2032](https://www.ksat.com/news/local/2025/11/06/bexar-county-voters-approved-funding-for-spurs-arena-but-when-will-it-open/) vs "visible in 2031" ([KSAT, Aug 2026](https://www.ksat.com/news/local/2026/08/18/san-antonio-council-expected-to-get-project-marvel-update-in-october-as-arena-plans-move-forward/)).
- Rodeo attendance: 1.5 million (organizer) vs 1.3 million (PredictHQ prediction).
- A student-newspaper source claims 3.5 million Fiesta attendees; the 2.5 million UTSA-study figure is used instead.

**Inaccessible or not located (no access controls bypassed):** full Walker Consultants downtown parking study (March 2026); Pape-Dawson Project Marvel infrastructure study; Walker Project Marvel mobility and access study (pending); AECOM I-37 connectivity study (due January 2027); VIA board-level special-event ridership reports. Frost Bank Center's parking total comes from a secondary aggregator. One 2023 VIA notice was found only on a third-party host ([via.madcollective.com](https://via.madcollective.com/?p=287220)) and is corroborated by [SA Current](https://www.sacurrent.com/?p=234305).

### 9.5 Confirmed transport or venue changes through 2028

| Change | Status | Date | Effect | Suggested re-check |
|---|---|---|---|---|
| VIA Rapid **Green Line** (airport–downtown–Mission Reach) | **Scheduled and funded** ([$268M FTA grant; fully funded](https://www.tpr.org/government-politics/2024-12-18/via-lands-federal-grant-to-fully-fund-rapid-transit-corridor-from-the-airport-to-the-missions)) | Service planned [April 22, 2028](https://sanantonioreport.org/?p=5439096) | Adds a frequent north–south spine through downtown; does not serve the east-side grounds | Jan 2028 |
| VIA Rapid **Silver Line** (west side–downtown–Frost Bank Center) | Funded in part; in design | Construction by mid-2027, completion after 2030 ([SA Report](https://sanantonioreport.org/?p=5439096)) | Not in service through 2028 | Mid-2027 |
| **Wolff Stadium** remains Missions home | Confirmed | Through 2028 season ([KSAT, Jul 2026](https://ksat.com/news/local/2026/07/31/city-leaders-react-to-san-antonio-missions-downtown-ballpark-opening-delay)) | No change in window | Q1 2027 |
| **Missions downtown ballpark** | Scheduled; construction start 2027 | Opening April 2029 ([TPR](https://www.tpr.org/economy-and-labor/2026-07-31/season-opener-at-planned-new-baseball-stadium-downtown-gets-delayed-to-2029)) | Outside window; adds to downtown cluster | Q1 2027 |
| **Spurs downtown arena** | Funding framework approved (Prop B, [52%](https://www.ksat.com/news/local/2026/08/18/san-antonio-council-expected-to-get-project-marvel-update-in-october-as-arena-plans-move-forward/)); [17,000–18,500 seats](https://www.kens5.com/article/news/local/project-marvel/spurs-arena-funding-election-whats-next-timeline-san-antonio-texas/273-95674735-5ba8-40a5-bf22-51187f6f3532) | Construction ≈2027; opening ≈2031–32 | Spurs stay at Frost Bank Center through 2028 | After the October 2026 council update; early 2027 |
| **Project Marvel infrastructure** | **Proposal** in the 2027 bond; the Alamodome garage and highway connection were dropped | 2027 bond election | City favors mode change over event parking downtown | 2027 bond call |
| **East-side grounds renovation** (year-round rodeo) | Voter-approved funding, about [$200M](https://spectrumlocalnews.com/tx/san-antonio/news/2026/02/20/year-round-rodeo-on-the-horizon-for-san-antonio) | Schedule not found | May change grounds parking and event frequency | 2027 |
| **Whitewater Amphitheater** | Operator in Chapter 11; sale pending | 2026 | Possible operator or schedule change | Before 2027 season |
| **Spurs P&R for 2026–27** | Not yet listed on VIA's events page (Oct 12, 2026) | — | If discontinued, Frost Bank Center car share stays at the top of its range | Late Oct 2026 |
