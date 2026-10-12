# Las Vegas — City-Type Evidence for Fan/Friction Gridlock

**Research date:** 12 October 2026 (all sources accessed this date).
**Scope:** Las Vegas Valley / Clark County working boundary; Pahrump and other edge places assessed separately.
**Status of companion venue research:** not available to this answer. Venue rows below are enumerated independently and given IDs (`LV-xx`, `EV-xx`) that must be mapped to the companion answer's row keys before use. Coverage gaps are listed in §6.

---

## 0. Bottom line

| Item | Finding |
|---|---|
| Recommended existing city type | **`hub`** (moderate-low confidence) |
| Why not `transit` | Public transit and event buses carry a small minority of event crowds even at the best-served event (an estimated 4–12% at Raiders games via RTC Game Day Express, which is itself mostly park-and-ride). The non-car share in Las Vegas comes from **walking from Strip hotel rooms**, not from transit. |
| Why not `sprawl` | The core event venues sit in one dense resort corridor that shares freeway ramps, arterials and hotel-based audiences — the spill-between-crowds behaviour `hub` represents. Suburban venues alone would read `sprawl`. |
| Main caveat | `hub` and `sprawl` share the same 0.85 fallback. That fallback **overstates** car share at every Strip venue with evidence (estimated/projected 0.48–0.79). Venue-specific overrides are needed for Strip rows. |
| Capacity-weighted car share (10 fixed rooms, primary configuration) | ≈ **0.69** (≈0.66 excluding rows that use the fallback) |
| Typical-attendance-weighted (rows with sourced typical attendance) | ≈ **0.72** (≈0.68 excluding the fallback row) |
| Measured event mode splits found | **None.** Every split below is a consultant projection, a planning-document derivation, or a transparent estimate. |

---

## 1. Method and definitions

* **Car-involved trip** = private car/carpool parked by the attendee + rideshare/taxi/limo + any trip that drove to a remote lot or casino and then boarded a shuttle/bus (park-and-ride). The RTC Game Day Express departs suburban casino parking lots ([KTNV pickup list](https://www.ktnv.com/sports/rtc-game-day-express-4-round-trip-rides-to-allegiant-stadium-t-mobile-arena-for-raiders-vgk-and-unlv-games)), so its riders are treated as car-involved. Hotel-to-venue free shuttles (e.g., NFR Express from host hotels) are treated as non-car because riders start at their lodging.
* **Walk from hotel** = non-car for the event trip, even if the visitor drove to Las Vegas days earlier, because that car is not on the event approach roads at event time.
* **People vs vehicles:** parking-space and vehicle counts are converted to people only with a stated occupancy range (below). Raw boardings are never treated as mode share without a denominator.
* **Vehicle occupancy assumption (persons per parked car), 2.1–3.2:**
  * 2.1 = MGM's projected 60% drive share at hockey × 17,500 seats ÷ ~5,000 projected vehicles ([MGM analysis via RJ](https://develop.reviewjournal.com/?p=1181821); [RTC vehicle projection via RJ](https://www.reviewjournal.com/?p=1190278)).
  * 3.2 = Kimley-Horn A's study: 17,191 park-and-walk fans ÷ 5,370 spaces ([RJ](https://www.reviewjournal.com/sports/athletics/going-to-as-games-in-las-vegas-you-should-have-lots-of-local-company-3365231/)).
  * Both inputs are projections; the range is wide on purpose.
* **Evidence classes used in §7:** *Projected* (consultant/operator forecast of a split), *Estimated* (derived here from planning data or a named comparison), *Fallback* (no defensible number; current default would provisionally apply).

### Background only — not event travel

| Indicator | Value | Source | Use |
|---|---|---|---|
| Las Vegas metro commuting 2024 (ACS 1-yr): drive alone / carpool / WFH / transit / walk / bike / taxi-other | 69.8% / 12.0% / 11.4% / 2.3% / 1.5% / 0.2% / 2.6% | [Demographia/NewGeography table derived from ACS 2024](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access) (secondary tabulation) | Background; shows region-wide car dominance and very low transit |
| Visitors arriving by ground transport (2024) | 54% | [LVCVA 2024 Visitor Profile](https://epubs.nsla.nv.gov/statepubs/epubs/442242-2024.pdf) | Background |
| Visitors who drove own vehicle during visit / used rideshare / taxi (2024, multi-response) | 48% / 31% / 16% | [LVCVA 2024 Visitor Profile](https://epubs.nsla.nv.gov/statepubs/epubs/442242-2024.pdf) | Background; responses overlap, do not sum |
| Visitors using monorail / bus (2023, multi-response) | 5% / 4% | [LVCVA 2023 Visitor Profile](https://assets.simpleviewcms.com/simpleview/image/upload/v1/clients/lasvegas/2023_Las_Vegas_Visitor_Profile_Study_78fb04dd-7437-4058-99f9-f2addc5d43a9.pdf) | Background |
| Monorail average weekday load | ~10,000 passengers/day (Jan 2025 statement) | [LVCVA CEO via Las Vegas Sun/CDC Gaming](https://cdcgaming.com/brief/las-vegas-tourism-chief-talks-monorails-future-another-super-bowl-and-convention-attendance) | Background; not event-specific |

---

## 2. Venue and event travel table (summary)

Percentages are **share of attendees (people)**. "Car" = private car/carpool parked + rideshare/taxi (excluding event shuttle column). "Event shuttle" is shown separately even when it is car-involved. "Sums to 100%?" explains how closure was achieved.

| ID | Verified current name / municipality / cluster | Setup & date represented | Basis attendance | Car (parked + rideshare/taxi) | Public bus/rail (regular) | Dedicated event shuttle | Walk / bike / other | Unclassified | Sums to 100%? | **Recommended car-involved share** (range) | Confidence | Evidence type |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| LV-01a | Allegiant Stadium — Paradise (unincorp. Clark Co.) — Strip South | Raiders NFL home game, Aug–Jan, mostly Sunday; 2023 study, 2024 report | 54,697 avg ([RJ](https://www.reviewjournal.com/news/news-columns/road-warrior/allegiant-stadium-vegas-loop-station-to-nix-200-on-site-parking-spots-3205892/)) | 48–68% | in remainder | 4–12% (GDE, park-and-ride → car-involved) | remainder ≈20–48% | regular transit, Deuce, monorail folded into remainder | Yes, by remainder construction | **0.65** (0.50–0.80) | Low-medium | Estimated from planning parking need |
| LV-01b | Allegiant Stadium | Stadium concert, avg of events to 2023 | 44,955 avg ([RJ](https://www.reviewjournal.com/news/news-columns/road-warrior/allegiant-stadium-vegas-loop-station-to-nix-200-on-site-parking-spots-3205892/)) | 47–67% | in remainder | none (GDE serves Raiders/UNLV/VGK only) | remainder ≈33–53% | as above | Yes, by remainder | **0.57** (0.45–0.70) | Low | Estimated |
| LV-01c | Allegiant Stadium | UNLV football | 15,107 avg ([RJ](https://www.reviewjournal.com/news/news-columns/road-warrior/allegiant-stadium-vegas-loop-station-to-nix-200-on-site-parking-spots-3205892/)) | unknown | unknown | UNLV-campus GDE only ([FOX5](https://www.fox5vegas.com/2026/08/11/rtcs-game-day-express-returns-2026-27-sports-season/)) | unknown | 100% | n/a | **Fallback 0.85** | — | Unknown |
| LV-01d | Allegiant Stadium | Other one-off sports (e.g., soccer) | 33,302 avg ([RJ](https://www.reviewjournal.com/news/news-columns/road-warrior/allegiant-stadium-vegas-loop-station-to-nix-200-on-site-parking-spots-3205892/)) | unknown | unknown | unknown | unknown | 100% | n/a | **Fallback 0.85** (likely high) | — | Unknown |
| LV-02a | T-Mobile Arena — Paradise — Strip South | Vegas Golden Knights NHL, Oct–Apr (+ playoffs) | 17,500 seats ([RJ](https://www.reviewjournal.com/?p=1190278)) | 75% (60 drive + 8 ride-hail + 7 taxi) | 0% | 4% (RTC express, mostly park-and-ride) | 21% walk | 0% | Yes, 100% as published | **0.79** (0.70–0.85) | Medium-low | Projected (MGM consultant, 2017) |
| LV-02b | T-Mobile Arena | Concerts | ~17,500–20,000 | 48% (31 drive + 10 ride-hail + 7 taxi) | 0% | 0% | 52% walk | 0% | Yes, 100% as published | **0.48** (0.35–0.60) | Low-medium | Projected (MGM consultant, 2016–17) |
| LV-03 | Sphere — Paradise — Strip East (behind Venetian) | Residency concerts / immersive film | 17,600 seated; 20,000 with floor ([Wikipedia](https://en.wikipedia.org/wiki/Sphere_(venue))) | ≈40–70% | in remainder | none known | remainder | regular transit folded in | Yes, by remainder | **0.55** (0.40–0.70) | Low | Estimated by comparison with LV-02b |
| LV-04a | Thomas & Mack Center — Paradise (UNLV campus) — UNLV/East | Wrangler NFR, 10 nights, early Dec 2025 | 17,584 avg/night; 175,846 total over 10 nights ([LVSportsBiz](https://lvsportsbiz.com/2025/12/13/national-finals-rodeo-wraps-up-ten-day-run-saturday-friday-attendance-was-top-night-at-17820/); [NFR](https://aws.nfrexperience.com/news/read/553)) | unknown | unknown | NFR Express free hotel shuttles exist; ridership unpublished ([NFR](https://aws.nfrexperience.com/news/read/526)) | unknown | 100% | n/a | **Fallback 0.85** (probably overstated) | — | Unknown |
| LV-04b | Thomas & Mack Center | UNLV basketball, NBA Summer League, Monster Jam, concerts | not sourced | unknown | unknown | unknown | unknown | 100% | n/a | **Fallback 0.85** | — | Unknown |
| LV-05 | MGM Grand Garden Arena — Paradise — Strip South | Boxing/UFC up to 16,800; end-stage concerts 10,000–15,000 ([MGM fact sheet, Jan 2026](https://filecache.mediaroom.com/mr5mr_mgmresorts/182005/download/MGM%20Grand%20Garden%20Arena%20Fact%20Sheet%20FINAL%201.15.26.pdf)) | 16,800 max | ≈35–65% | in remainder | none known | remainder | folded in | Yes, by remainder | **0.50** (0.35–0.65) | Low | Estimated by comparison with LV-02b |
| LV-06 | Michelob ULTRA Arena (Mandalay Bay) — Paradise — Strip South | Las Vegas Aces WNBA, May–Sep/Oct | 12,000 ([Wikipedia](https://en.wikipedia.org/wiki/Michelob_Ultra_Arena)) | ≈60–85% | in remainder | none known | remainder | folded in | Yes, by remainder | **0.75** (0.60–0.85) | Low | Estimated by comparison with LV-02a |
| LV-07a | Las Vegas Ballpark — Summerlin South (unincorp.) — Suburban West | Las Vegas Aviators AAA, Apr–Sep 2025 | 6,559 avg ([StatsCrew](https://www.statscrew.com/venues/v-3088)); 10,000 capacity ([Wikipedia](https://en.wikipedia.org/wiki/Las_Vegas_Ballpark)) | ≈85–97% | negligible | none | small | — | Yes, by remainder | **0.92** (0.85–0.97) | Low-medium | Estimated |
| LV-07b | Las Vegas Ballpark | Athletics MLB "Las Vegas series," 8–10 & 12–14 June 2026 ([MLB](https://mlb.com/athletics/las-vegas-series/ballpark/a-z-guide)) | ≤10,000 | as LV-07a | — | — | — | — | — | **0.92** (0.85–0.97) | Low | Estimated (same site) |
| LV-08 | Orleans Arena — Paradise (off-Strip west) — Off-Strip local | Arena football, concerts, events | ~9,000 (2016 list, [Meetings Today](https://www.meetingstoday.com/articles/137891/vegas-celebrates-great-indoors)) | unknown | unknown | unknown | unknown | 100% | n/a | **Fallback 0.85** | — | Unknown |
| LV-09 | Lee's Family Forum — Henderson — Suburban SE | Henderson Silver Knights AHL; end-stage concerts | 5,567 seats; 6,000 end-stage ([Venue Coalition](https://venuecoalition.com/lees-family-forum/)) | unknown | unknown | unknown | unknown | 100% | n/a | **Fallback 0.85** (probably understated) | — | Unknown |
| LV-10 | Dolby Live (Park MGM) — Paradise — Strip South | Concerts/residencies | ~5,200 (as Park Theater, 2016, [Meetings Today](https://www.meetingstoday.com/articles/137891/vegas-celebrates-great-indoors)); current figure unverified | ≈35–65% | folded in | none | remainder | — | Yes, by remainder | **0.50** (0.35–0.65) | Low | Estimated by comparison with LV-02b (adjacent site) |
| LV-11 | Las Vegas Motor Speedway — NE valley — Outlying | NASCAR Cup weekends (spring Mar 2026; fall 4 Oct 2026) | capacity conflict: ~80,000 ([News 3, 2021](https://www.news3lv.com/news/local/nascar-fans-drivers-excited-to-be-back-at-las-vegas-motor-speedway-amid-pandemic)) vs 123,000 published spec ([TicketFairy profile](https://www.ticketfairy.com/events-in-las-vegas--nevada--us/las-vegas-motor-speedway)) | unknown | none | reserved shuttles from Strip/downtown have operated (same profile) | unknown | 100% | n/a | **Fallback 0.85** | — | Unknown |
| LV-12 (future) | Athletics ballpark, Tropicana site — Paradise — Strip South | MLB sell-out (98% = 29,400), opening 2028 season | 29,400 ([RJ](https://www.reviewjournal.com/sports/athletics/going-to-as-games-in-las-vegas-you-should-have-lots-of-local-company-3365231/)) | 76.6% (17,191 park-and-walk + 5,301 taxi/ride-hail + 22 limo) | — | 0.7% (195 bus/shuttle) | 22.8% (6,691 walk from resorts) | 0% | Yes: 29,400 of 29,400 | **0.77** (0.65–0.85) | Medium-low | Projected (Kimley-Horn) |
| EV-01 | Formula 1 Las Vegas Grand Prix — Strip street circuit, Paradise | 3 nights in Nov; 2026 edition 19–21 Nov | attendance conflict (see §3.4) | ≈30–65% | monorail (folded in) | none dedicated | remainder | — | Yes, by remainder | **0.45** (0.30–0.65) | Low | Estimated by comparison with LV-02b |
| EV-02 | EDC Las Vegas — LVMS — Outlying | 3 nights, 15–17 May 2026 | 500,000 3-day total (2026); 175,000 all-stage capacity ([Wikipedia](https://en.wikipedia.org/wiki/Electric_Daisy_Carnival)) | unknown | none | official paid shuttles + free park-and-ride (car-involved) | ≥~11% camp on site (20,000+ ÷ 175,000) | most | No usable split | **Fallback 0.85** (treat as upper bound) | — | Unknown |
| EV-03 | Sick New World — Las Vegas Festival Grounds, Winchester — Strip North | One-day festival, 25 Apr 2026 ([Wikipedia](https://en.wikipedia.org/wiki/Sick_New_World)) | 60,000-capacity site; 2025 edition had sold 20,000 before cancellation ([Blabbermouth](https://blabbermouth.net/news/its-official-system-of-a-down-to-headline-2026-editions-of-sick-new-world-in-las-vegas-and-texas)) | unknown | unknown | unknown | unknown | 100% | n/a | **Fallback 0.85** (likely high) | — | Unknown |
| EV-04 | Life Is Beautiful — downtown Las Vegas | Not held in 2025 ([Casino.org](https://www.casino.org/news/vegas-music-festival-life-is-beautiful-dies/)); 2026 edition not verified | — | — | — | — | — | — | — | No value (inactive/unverified) | — | — |

---

## 3. Row detail: parking, operations, constraints, sources

### 3.1 LV-01 Allegiant Stadium

| Field | Evidence |
|---|---|
| Capacity / configuration | 65,000-fan capacity referenced in county parking filings ([RJ](https://www.reviewjournal.com/business/stadium/allegiant-stadium-vegas-loop-station-location-revealed-200-parking-spots-at-risk-3015927/)). Hosts Raiders, UNLV, concerts, WrestleMania 41/42, CFP championship scheduled 2027 ([Wikipedia](https://en.wikipedia.org/wiki/Allegiant_Stadium)). |
| Audience origin | 66% tourists / 34% residents at Raiders games (2023 Kimley-Horn study as reported, [RJ](https://www.reviewjournal.com/news/news-columns/road-warrior/allegiant-stadium-vegas-loop-station-to-nix-200-on-site-parking-spots-3205892/)); 68% from out of town in a later season per Stadium Authority data ([RJ](https://www.reviewjournal.com/sports/athletics/going-to-as-games-in-las-vegas-you-should-have-lots-of-local-company-3365231/)). Across all events since opening, 54% said they travelled for the event ([Senate testimony, Aug 2023](https://www.commerce.senate.gov/index.php/services/files/83B5FF56-6290-4FF3-92D9-6575C0F842D2)). The 66% vs 68% gap is definitional/seasonal and small. |
| Parking supply | County code would require 16,550 on-site spaces; a 2017 waiver cut this to 2,375, and a later request sought 2,175 ([RJ](https://www.reviewjournal.com/business/stadium/allegiant-stadium-vegas-loop-station-location-revealed-200-parking-spots-at-risk-3015927/)). 2023 study counts 21,560 spaces available in the vicinity (2,375 on-site + 19,185 off-site/resort). Typical Raiders demand ≈8,600 spaces; concerts ≈6,900 ([RJ](https://www.reviewjournal.com/news/news-columns/road-warrior/allegiant-stadium-vegas-loop-station-to-nix-200-on-site-parking-spots-3205892/)). Wikipedia cites 35,000+ spaces within a mile ([Wikipedia](https://en.wikipedia.org/wiki/Allegiant_Stadium)) — a supply figure, not demand. |
| Remote arrangements | Four-lot satellite parking plan within ~5 miles approved 2018 ([RJ](https://www.reviewjournal.com/business/stadium/raiders-off-site-las-vegas-stadium-parking-proposal-accepted/)). |
| Event operations / closures | Hacienda Avenue bridge over I-15 closed to cars on event days for pedestrians; rideshare zone in Lot N ([Allegiant Stadium](https://www.allegiantstadium.com/plan-your-visit/directions-parking)). |
| Event transit start/end | RTC Game Day Express, $4 round trip; first departures ~3 h before kickoff, last 1 h before; returns leave immediately after the game and up to 40 min after ([RTC 2025](https://www.rtcsnv.com/news/rtc-game-day-express-service-returns-for-las-vegas-raiders-vegas-golden-knights-unlv-football-home-games-3/); [FOX5 2026-27](https://www.fox5vegas.com/2026/08/11/rtcs-game-day-express-returns-2026-27-sports-season/)). Pickups at suburban casinos (Red Rock, Green Valley Ranch, Santa Fe Station, Sam's Town, Aliante, M Resort) ([KTNV](https://www.ktnv.com/sports/rtc-game-day-express-4-round-trip-rides-to-allegiant-stadium-t-mobile-arena-for-raiders-vgk-and-unlv-games)). |
| Event-transit ridership | Planning assumption was a max of 1,277 passengers per direction; first Raiders home game carried ~3,250 passengers ([RJ, 2021](https://www.reviewjournal.com/news/news-columns/road-warrior/game-day-express-for-raiders-games-to-be-operated-heavily-off-subsidies-2452540/)) — the article does not say whether this counts persons or boardings in both directions. 2023 study: 12% of "Las Vegas game attendees" use GDE ([RJ](https://www.reviewjournal.com/news/news-columns/road-warrior/allegiant-stadium-vegas-loop-station-to-nix-200-on-site-parking-spots-3205892/)) — ambiguous between 12% of residents and 12% of all fans. |
| Access constraints / shared approaches | I-15 interchanges at Russell Rd and Tropicana Ave; Hacienda pedestrian corridor through Mandalay Bay/Luxor; shares south-Strip garages and I-15 with T-Mobile, Michelob ULTRA, MGM Grand Garden and the future A's ballpark. Same-day doubleheaders occur (2021: Raiders GDE ~3,250 vs Golden Knights GDE ~383 later that day, [RJ](https://www.reviewjournal.com/news/news-columns/road-warrior/game-day-express-for-raiders-games-to-be-operated-heavily-off-subsidies-2452540/)). |

**Derivation — LV-01a (Raiders).**

| Step | Low | Central | High | Basis |
|---|---|---|---|---|
| Parked vehicles | 8,600 | 8,600 | 8,600 | 2023 study demand |
| × occupancy | 2.1 | 2.65 | 3.2 | §1 assumption |
| = parked-car persons | 18,060 | 22,790 | 27,520 | |
| ÷ 54,697 attendance | 33.0% | 41.7% | 50.3% | |
| + rideshare/taxi (comparison) | 15% | 16.5% | 18% | T-Mobile hockey 15%, concerts 17% ([RJ](https://develop.reviewjournal.com/?p=1181821)); A's 18.0% = 5,301/29,400 ([RJ](https://www.reviewjournal.com/sports/athletics/going-to-as-games-in-las-vegas-you-should-have-lots-of-local-company-3365231/)) |
| + GDE (park-and-ride, car-involved) | 4.1% | 8% | 12% | 12% × 34% residents × 54,697 ≈ 2,232 ≈ 4.1%; or 12% of all |
| **Car-involved total** | **52%** | **66%** | **80%** | Rounded recommendation 0.65 |
| Walk/other remainder | 48% | 34% | 20% | Mostly Strip-hotel walkers; includes Deuce/regular transit, unclassified |

**LV-01b (concerts)** uses 6,900 spaces ÷ 44,955 → parked 32.2–49.1%, + rideshare/taxi 15–18%, no GDE → 47–67%; central ≈57%.

*Caveat:* the 8,600/6,900 figures are a consultant's planning demand estimates reported by the Review-Journal, not observed occupancy counts. The original study was not accessible (§9).

### 3.2 LV-02 T-Mobile Arena

| Field | Evidence |
|---|---|
| Split source | MGM-hired traffic analyst: concerts 52% walk, 31% drive, 10% ride-hail, 7% taxi; hockey 60% drive, 21% walk, 8% ride-hail, 7% taxi, 4% RTC shuttle ([RJ](https://develop.reviewjournal.com/?p=1181821)). Pre-season projection, 2017. Note: URL is a Review-Journal "develop" mirror; canonical article not retrieved. |
| Vehicle corroboration | RTC projected ~5,000 vehicles, mostly residents, for the first home game; ~500 vehicles were reported for a local-heavy George Strait concert ([RJ](https://www.reviewjournal.com/?p=1190278)). 500 vehicles × 2.1–3.2 ≈ 1,050–1,600 people, far below the 31% concert drive projection — **unresolved conflict** (the count may cover only some garages). |
| Audience | Team expected 85–90% local fans before launch ([Las Vegas Sun, 2017](https://lasvegassun.com/news/2017/feb/22/up-all-knight-hockey-open-house-gives-fans-a-sneak/)). |
| Parking | No dedicated arena garage; reserved event parking at Park MGM, New York-New York and Aria; rideshare drop at NYNY garage ground level; RTC VGK express routes; monorail; walking from NYNY, Aria, Park MGM, Excalibur ([T-Mobile Arena](https://www.t-mobilearena.com/plan-your-visit/directions-parking)). |
| Event transit start/end | VGK Game Day Express: first departure 2 h before puck drop, last 1 h before ([FOX5](https://www.fox5vegas.com/2026/08/11/rtcs-game-day-express-returns-2026-27-sports-season/)). |
| Shared approaches | Tropicana Ave, Frank Sinatra Dr, Park Ave, Las Vegas Blvd, I-15 ([RJ](https://www.reviewjournal.com/?p=1190278)); shares garages and audiences with MGM Grand Garden, Dolby Live, Allegiant and (from 2028) the A's ballpark. |

RTC express riders are counted car-involved (casino park-and-ride), giving 75% + 4% = 79% for hockey.

### 3.3 LV-03 Sphere

| Field | Evidence |
|---|---|
| Parking | Clark County let the venue count ~12,101 Venetian/Palazzo/Expo garage spaces plus 304 on-site spaces toward a requirement of over 13,900 ([Las Vegas Sun](https://m.lasvegassun.com/news/2018/feb/21/planned-sphere-arena-to-use-existing-casino-parkin/); [KTNV](https://www.ktnv.com/news/new-state-of-the-art-concert-venue-in-las-vegas-hopes-to-blow-your-mind)); one analysis computed a ~1,505-space shortfall even with those garages ([Casino.org/Vital Vegas](https://www.casino.org/vitalvegas/plans-reveal-msg-sphere-inner-workings-and-parking-challenges/)). |
| Pedestrian access | Bridge linking Sphere to the Venetian, designed to support park-and-walk ([Kimley-Horn](https://www.kimley-horn.com/project/sphere-reshapes-las-vegas-skyline-futuristic-entertainment/)). Planned monorail station was put on hold in 2020 ([Wikipedia](https://en.wikipedia.org/wiki/Sphere_(venue))). |
| Estimate basis | No published split. Comparison: tourist-heavy Strip concert venue relying on resort garages (LV-02b, 48%). Sphere sits farther from the main Strip walking spine than T-Mobile and has no transit station, so the central value is set above 0.48. |

### 3.4 EV-01 Formula 1 Las Vegas Grand Prix

| Field | Evidence |
|---|---|
| Attendance (multi-day, not simultaneous) | 2023: 315,000 ([Wikipedia](https://en.wikipedia.org/wiki/2023_Las_Vegas_Grand_Prix)); 2024: 306,000 ([Wikipedia](https://en.wikipedia.org/wiki/2024_Las_Vegas_Grand_Prix)); 2025: sold out, over 300,000 ([Formula 1](https://www.formula1.com/en/latest/article/formula-1s-record-breaking-2025-season-in-numbers.irq7aR8PcyAw7ysO72vJn)). |
| Source conflict | For 2024, LVMPD reported 139,000 over three nights (32,000 Thu, 50,000 Fri, 57,000 Sat); F1 said police counted only scanned tickets in F1-operated zones and kept its 306,000 figure ([8 News Now](https://www.8newsnow.com/investigators/f1-says-306k-attended-las-vegas-race-police-report-lower-number/amp/)). **Peak simultaneous crowd: use the single-night figure (57,000 LVMPD-scanned, upper bound unknown), never the 3-day total.** |
| Operations | Road closures and ticket-checked access zones; official guidance recommends rideshare or monorail to designated drop-offs ([Visit Las Vegas](https://www.visitlasvegas.com/f1-las-vegas-grand-prix/)). Monorail ran continuously 18–24 Nov 2025 ([LV Monorail](https://www.lvmonorail.com/ultimate-las-vegas-formula-1-guide/)); in 2023 it ran continuously with trains every 5–12 min ([LVCVA](https://press.lvcva.com/news-releases/las-vegas-monorail-provides-convenient-strip-transportation-over-f1-weekend/s/861ae3aa-9c33-4316-a668-04fb92bd4401)). |
| Transit capacity check | Monorail ~3,000 passengers/hour/direction at peak ([LV Monorail](https://www.lvmonorail.com/ultimate-las-vegas-formula-1-guide/)): even a 2-hour, both-direction peak (~12,000) is a minority of a ~57,000 night. |
| Estimate basis | Comparison to LV-02b (tourist-heavy Strip event, majority walk). Range is wide because closures suppress private-car access but rideshare demand is heavy. |

### 3.5 LV-04 Thomas & Mack Center / NFR

NFR contract runs through at least 2035 ([UNLV](https://www.unlv.edu/news/article/tip-cowboy-hat-thomas-mack)). Free NFR Express shuttles run from the Convention Center (Cowboy Christmas) and official host hotels; 2025 performances started 5:45 p.m.; prior years' releases state pickups begin at 4 p.m. and **no service runs during the performance** ([NFR 2025](https://aws.nfrexperience.com/news/read/526); [NFR 2024](https://aws.nfrexperience.com/news/read/491)). Organizers say fans have increasingly used it, but publish no counts. Cowboy Christmas drew 347,571 over the same ten days at the Convention Center ([LVSportsBiz](https://lvsportsbiz.com/2025/12/13/national-finals-rodeo-wraps-up-ten-day-run-saturday-friday-attendance-was-top-night-at-17820/)) — a cumulative visit count, not a simultaneous crowd, but it shares the Convention Center–UNLV corridor. Current seating capacity: the renovation reduced capacity ([NFR](https://aws.nfrexperience.com/news/read/553)); the pre-renovation 19,522 figure ([Meetings Today 2016](https://www.meetingstoday.com/articles/137891/vegas-celebrates-great-indoors)) should not be used. Observed 2025 nightly peak 17,855 is used as the NFR configuration.

### 3.6 LV-07 Las Vegas Ballpark

Three surface lots holding ~2,500 cars, free, plus overflow retail lots ([StubHub venue page](https://stubhub.com/_V-61646) — secondary/commercial; verify with operator). Check: 2,500 × 2.1–3.2 = 5,250–8,000 people, consistent with the 6,559 average almost entirely by car before overflow. No dedicated event transit found.

### 3.7 EV-02 EDC Las Vegas and LV-11 Las Vegas Motor Speedway

| Field | Evidence |
|---|---|
| Crowd size | 525,000 record over 3 days (2023); 500,000 (2026); 175,000 all-stage capacity ([Wikipedia](https://en.wikipedia.org/wiki/Electric_Daisy_Carnival)). 2017: ~135,000 per night per organizers ([Nevada Taxicab Authority report](https://taxi.nv.gov/uploadedFiles/taxinvgov/content/About_Us/ALL/BoardMeetings/2017/EDC_Post_Event_Packet.pdf)). |
| Non-commuting on-site campers | Camp EDC houses more than 20,000 people ([EDM Maniac](https://edmmaniac.com/festival-report-card-edc-las-vegas-2026/)) ≈ ≥11% of a 175,000 night. |
| Event transport | Paid official shuttles on organizer-secured routes; free park-and-ride from Craig Ranch Park lots with 100+ buses in a prior edition ([EDM Maniac](https://edmmaniac.com/free-park-ride-service-for-edc-las-vegas)) — **car-involved**. 2026: main shuttle/limo route reportedly closed, causing I-15 standstills ([EDM Maniac](https://edmmaniac.com/festival-report-card-edc-las-vegas-2026/)); exodus congests southbound I-15 toward downtown ([News 3](https://news3lv.com/news/local/edc-traffic-annual-las-vegas-music-festival-ending-monday-motor-speedway-northeast-i-15-california-travel-commute)). |
| Why no estimate | No shuttle or parking counts are public. Fallback 0.85 is an upper bound once campers are excluded. |

### 3.8 Other rows (brief)

* **LV-05 MGM Grand Garden Arena:** owned by Las Vegas Arena Company (AEG/MGM); configurations above ([fact sheet](https://filecache.mediaroom.com/mr5mr_mgmresorts/182005/download/MGM%20Grand%20Garden%20Arena%20Fact%20Sheet%20FINAL%201.15.26.pdf)). MGM Grand hosts the monorail's southern terminus, shared with T-Mobile and the future A's ballpark.
* **LV-06 Michelob ULTRA Arena:** Aces primary tenant ([Wikipedia](https://en.wikipedia.org/wiki/Michelob_Ultra_Arena)); shares Mandalay Bay garages and the Hacienda corridor with Allegiant.
* **LV-09 Lee's Family Forum:** paid parking ~$10 prepaid ([Stadium Journey](https://www.stadiumjourney.com/stadiums/lees-family-forum-henderson-silver-knights)); suburban Green Valley site.
* **LV-12 A's ballpark:** 30,000 fixed seats + 3,000 standing; 70% local expected; ~2,500-space on-site garage; ~40,000 spaces within walking distance ([RJ](https://www.reviewjournal.com/sports/athletics/going-to-as-games-in-las-vegas-you-should-have-lots-of-local-company-3365231/)). County code would require far more (one report cites 7,500–8,250 vs 2,470 proposed, [Casino.org](https://www.casino.org/news/as-come-up-short-on-las-vegas-stadium-parking-spaces/)).

---

## 4. Regional conclusion

### 4.1 Weighted car shares

Rules: one configuration per venue; no multi-day totals; LVMS and open-site events excluded from fixed-room weights (no verified capacity/config; shown separately).

**Capacity-weighted (fixed rooms, primary configuration):**

| ID | Configuration used | Weight (capacity) | Car share | Class |
|---|---|---|---|---|
| LV-01a | Raiders | 65,000 | 0.65 | Estimated |
| LV-02a | Hockey | 17,500 | 0.79 | Projected |
| LV-03 | Seated | 17,600 | 0.55 | Estimated |
| LV-04a | NFR observed peak | 17,855 | 0.85 | Fallback |
| LV-05 | Boxing/center-stage | 16,800 | 0.50 | Estimated |
| LV-06 | Aces | 12,000 | 0.75 | Estimated |
| LV-07a | Ballpark | 10,000 | 0.92 | Estimated |
| LV-08 | Arena | 9,000 | 0.85 | Fallback |
| LV-09 | End-stage | 6,000 | 0.85 | Fallback |
| LV-10 | Theater | 5,200 | 0.50 | Estimated |
| **Total** | | **176,955** | **0.694** | |

| Variant | Result |
|---|---|
| Excluding the three fallback rows (weight 144,100) | **0.659** |
| Concert configuration at Allegiant (0.57) and T-Mobile (0.48) instead of sports | **0.634** |
| Adding LVMS at 80,000 × fallback 0.85 | 0.743 (illustrates outlying-venue pull; not recommended) |

**Typical-attendance-weighted (only rows with a sourced typical attendance):**

| ID | Attendance weight | Car share | Product |
|---|---|---|---|
| LV-01a Raiders avg | 54,697 | 0.65 | 35,553 |
| LV-04a NFR avg/night | 17,584 | 0.85 (fallback) | 14,946 |
| LV-07a Aviators avg | 6,559 | 0.92 | 6,034 |
| **Result** | 78,840 | | **0.717** |

Without the NFR fallback: 0.679. Using Allegiant concerts (44,955 × 0.57) instead of Raiders: 0.674. Missing from this weighting: T-Mobile, Sphere, MGM Grand Garden, Michelob ULTRA, Orleans, Lee's (no sourced typical attendance found).

### 4.2 Clusters (separate findings)

| Cluster | Rows | Capacity-weighted car share | Notes |
|---|---|---|---|
| Strip resort corridor | LV-01a, 02a, 03, 05, 06, 10 (+ future LV-12, EV-01) | **0.64** (weight 134,100) | Dense, hotel-walk-dominated non-car share |
| UNLV / Paradise east | LV-04 | fallback 0.85 | Hotel shuttles likely lower it; unmeasured |
| Off-Strip / suburban local | LV-07a, 08, 09 | **0.88** (weight 25,000) | Free/cheap surface parking; local audiences |
| Outlying NE | LV-11, EV-02 | unknown | Very large crowds; I-15 north single corridor |
| Downtown (Fremont/Cashman) | — | no data | See §6 gaps |

**Do huge outlying venues obscure the downtown pattern?** In Las Vegas the relevant dense core is the Strip resort corridor, not City of Las Vegas downtown. The single largest room (Allegiant) is inside that core, so it pulls the regional average *down*, not up. The outlying risk runs the other way: if LVMS (or EDC) were added at the fallback, the average would rise to ~0.74 and mask the Strip's ~0.64. Downtown proper has no usable event-travel evidence.

**Shared roads:** I-15 (all Strip venues; LVMS/EDC to the north), Tropicana Ave (T-Mobile, MGM Grand Garden, A's site, Thomas & Mack), Hacienda Ave (Allegiant/Mandalay Bay), Frank Sinatra Dr (T-Mobile), Las Vegas Blvd (F1 closures).
**Shared audiences:** south-Strip hotel guests (Allegiant, T-Mobile, Michelob ULTRA, MGM Grand Garden, Dolby Live, A's); local season-ticket bases (VGK, Aces, Aviators, Silver Knights); NFR fans also attend Cowboy Christmas.

---

## 5. Answers required by the brief

### 5.1 Recommended existing city type and rationale; strongest contrary evidence

**Recommendation: `hub`.**

1. Every Strip venue with evidence has a car-involved share well below the 0.85 fallback (0.48–0.79), but far above `transit`'s 0.4 for sports; even concerts (≈0.48–0.57) sit above 0.4. Non-car travel is overwhelmingly walking from hotels.
2. Dedicated event transit is small and mostly park-and-ride (GDE ≈4–12% at Raiders; 4% projected at hockey; 0.7% projected at the A's).
3. The core rooms cluster within about a mile on shared approaches and hotel audiences, which is the overlapping-crowd behaviour the `hub` setting is meant to capture.

**Strongest contrary evidence (for `sprawl`):** region-wide commuting is car-dominant (81.8% drive alone + carpool, 2.3% transit in 2024 — background only); 54% of visitors arrive by ground and 48% drive their own vehicle during their visit; suburban venues sit ≈0.88+; and the Strip estimates rest on projections and reported planning studies, not observed surveys. Because `hub` and `sprawl` share the 0.85 fallback, the choice matters only for spill behaviour — the Strip venue overrides matter more than the type choice.

**Venue exceptions:** concert configurations at Allegiant, T-Mobile, Sphere, MGM Grand Garden and Dolby Live (≈0.48–0.57); F1 (≈0.45, low confidence).

### 5.2 Car-share values keyed to rows

| Class | Rows and values |
|---|---|
| Measured (observed event mode split) | **None found.** |
| Projected (consultant/operator forecast) | LV-02a 0.79; LV-02b 0.48; LV-12 0.77 (opening 2028) |
| Estimated (derived here) | LV-01a 0.65; LV-01b 0.57; LV-03 0.55; LV-05 0.50; LV-06 0.75; LV-07a/b 0.92; LV-10 0.50; EV-01 0.45 |
| Fallback (unknown; current 0.85 provisionally applies) | LV-01c, LV-01d, LV-04a/b, LV-08, LV-09, LV-11, EV-02 (upper bound), EV-03 |

These IDs must be mapped to the companion answer's venue keys; they are not the companion's keys.

### 5.3 Boundary recommendation and inconsistencies

* **Recommend:** the contiguous Las Vegas Valley urban area within Clark County (City of Las Vegas, Henderson, North Las Vegas, and unincorporated Paradise, Winchester, Enterprise, Spring Valley, Summerlin South, Sunrise Manor), including LVMS in the north-east valley. This matches where all 5,000+ rooms and major event crowds found here are located. The ACS metro used for background is the Las Vegas–Henderson–North Las Vegas MSA (Clark County; verify against the current Census delineation file).
* **Edge places, assess separately:** Pahrump (Nye County) — about 60 miles away over the Spring Mountains ([Nevada Real Estate Group](https://www.nevadarealestategroup.com/blog/pahrump-vs-las-vegas-price-arbitrage-commute-2026/)), with a long-standing commuter link (2,551 Nye-to-Clark commuters in 2000, [Las Vegas Sun](https://lasvegassun.com/news/2003/mar/06/commuters-from-out-of-county-increase/); 19.3% of Nye workers commute 60+ min, [Stacker/ACS 2020](https://stacker.com/stories/8197/counties-most-super-commuters-nevada)). No 1,000+ event room in Pahrump was verified. Also Boulder City, Mesquite, Laughlin, Primm/Jean: Clark County but outside the valley; not searched for venues.
* **Inconsistencies between briefs:** (a) the brief's "downtown" framing does not fit Las Vegas, where the event core is the unincorporated Strip, not City of Las Vegas downtown; (b) "Clark County" as a boundary sweeps in distant towns (Laughlin, Mesquite) that share no event approaches; (c) the companion venue answer was unavailable, so row keys and the 1,000+ coverage cannot be reconciled here.

### 5.4 Data gaps, model limitations, source conflicts, inaccessible sources

**Data gaps:** no observed intercept survey of event mode for any Las Vegas venue; no GDE ridership by game; no NFR Express, EDC shuttle or F1 monorail event counts; no typical attendance for T-Mobile, Sphere, MGM Grand Garden, Michelob ULTRA, Orleans, Lee's; no LVMS current capacity confirmation; no downtown venue data.

**Model limitations:** `hub` and `sprawl` have identical fallbacks, so the city type cannot express the Strip's lower car share — only venue overrides can. Weekday/weekend and summer/winter differences are not separable in the evidence (Raiders mostly Sunday; NFR December; Aviators summer). Rideshare is counted car-involved but produces drop-off/pick-up surges rather than parked cars — a different road-load profile.

**Source conflicts preserved:** F1 306,000 vs LVMPD 139,000 (2024); T-Mobile concert drive projection 31% vs ~500 vehicles at a local-heavy concert; GDE "12%" ambiguity (residents vs all); GDE 3,250 "passengers" (persons vs both-direction boardings); LVMS 80,000 vs 123,000 vs ticket-site 131,000 capacity; Raiders tourists 66% vs 68% (small, definitional); Thomas & Mack pre- vs post-renovation capacity.

**Inaccessible / not directly read (flagged, not bypassed):** Kimley-Horn 2023 Allegiant parking study; MGM T-Mobile traffic analysis; Kimley-Horn A's parking demand study — all known only through Review-Journal reporting. Two RJ articles were reached via `develop.reviewjournal.com` mirror URLs. LVCVA 2025 Visitor Profile listed but not read (2024 used). Clark County land-use application files not retrieved. Several venue capacities rely on secondary or commercial pages (StubHub, TicketFairy, concerts.vegas) and should be re-verified with operators.

### 5.5 Confirmed transport or venue changes through 2028

| Change | Status | Date | Suggested re-check |
|---|---|---|---|
| A's ballpark (Tropicana site), 33,000 capacity | **Under construction; county development agreement approved Oct 2025** ([CDC Gaming/RJ](https://cdcgaming.com/brief/las-vegas-as-ballpark-development-approved-clearing-clark-county-regulatory-hurdle/)); reported on schedule ([CBS/AP](https://www.cbsnews.com/sacramento/news/athletics-las-vegas-stadium-on-track-for-2028-opening-officials-say/)) | Opening for 2028 season | Jan 2027; Jan 2028 (final traffic plan) |
| EDC splits into two weekends with reduced per-weekend capacity | **Announced by organizer; on sale** ([EDM Identity](https://edmidentity.com/2026/05/19/edc-las-vegas-2027-two-weekends/); [FOX5](https://fox5vegas.com/2026/05/20/edc-las-vegas-announces-dusk-till-dawn-2027-spanning-2-weekends)) | 14–16 and 21–23 May 2027 | Feb 2027 (capacity, shuttle plan) |
| F1 Las Vegas Grand Prix 2026 | Scheduled (secondary sources, [Oversteer48](https://oversteer48.com/las-vegas-f1-schedule/)) | 19–21 Nov 2026 | Early Nov 2026 (closures); confirm contract term beyond 2027 |
| RTC Game Day Express 2026–27 | **Running** ([FOX5](https://www.fox5vegas.com/2026/08/11/rtcs-game-day-express-returns-2026-27-sports-season/)) | Season from Aug 2026 | Aug 2027 |
| Vegas Loop: 14 stations operating; Virgin Hotels and Paradise/Tropicana (opposite Thomas & Mack) stops "opening soon" | Operator statement, no date ([FOX5, Sep 2026](https://www.fox5vegas.com/2026/09/15/boring-company-expansion-pushes-vegas-loop-toward-paradise-road/)) | TBD | Jan 2027 |
| Vegas Loop station at Allegiant Stadium (Lot B) | **Proposal/filing** (Oct 2024, [RJ](https://www.reviewjournal.com/news/news-columns/road-warrior/allegiant-stadium-vegas-loop-station-to-nix-200-on-site-parking-spots-3205892/)) | TBD | Mid-2027 |
| Las Vegas Monorail end of service life | Statement only: ~8–10 years remaining as of Jan 2025 ([CDC Gaming](https://cdcgaming.com/brief/las-vegas-tourism-chief-talks-monorails-future-another-super-bowl-and-convention-attendance)); no funded replacement found | — | Annually |
| NFR at Thomas & Mack | **Contracted through at least 2035** ([UNLV](https://www.unlv.edu/news/article/tip-cowboy-hat-thomas-mack)) | — | Dec each year |
| When We Were Young (Festival Grounds) | Paused 2026; organizer says return Oct 2027 ([Live For Live Music](https://liveforlivemusic.com/news/when-we-were-young-taking-2026-off-2027-return)) | Oct 2027 | Spring 2027 |
| CFP National Championship at Allegiant | Scheduled ([Wikipedia](https://en.wikipedia.org/wiki/Allegiant_Stadium)) | Jan 2027 | Dec 2026 |
| Brightline West high-speed rail | Under construction; completion now **late 2029** — outside this window ([Trains](https://www.trains.com/pro/passenger/high-speed/brightline-west-now-aims-for-completion-in-late-2029/)) | Late 2029 | Mid-2027 |

---

## 6. Coverage gaps (rooms ~1,000+ not given rows)

Not independently verified for current name, capacity by configuration, or activity; each would provisionally take the 0.85 fallback, and Strip theaters would plausibly sit nearer the LV-02b comparison:

* Planet Hollywood theater (listed as AXIS, 7,000, in 2016, [Meetings Today](https://www.meetingstoday.com/articles/137891/vegas-celebrates-great-indoors)) — current name unverified.
* The Colosseum (Caesars Palace); BleauLive Theater (Fontainebleau); Pearl Concert Theater (Palms); The Theater at Virgin Hotels; Encore Theater; The Chelsea (Cosmopolitan); House of Blues (Mandalay Bay); Resorts World Theatre; Westgate International Theater.
* South Point Arena (4,600 in 2016 list).
* Cashman Field (Las Vegas Lights FC, downtown) — capacity not sourced.
* Downtown Las Vegas Events Center and Fremont Street stages; Las Vegas Festival Grounds capacity conflict (60,000 vs 85,000 in the 2016 list).
* Las Vegas Convention Center as an event crowd (Cowboy Christmas, CES) — exhibition, not a seated room.
* Pahrump and other edge-town venues — not searched in depth.
