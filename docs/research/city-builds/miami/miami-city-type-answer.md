# Fan/Friction — Miami–South Florida city-type answer

**Research date:** 12 October 2026 (web sources accessed this date; nothing after this date is reflected).
**Question:** Which existing city setting — `sprawl` (driving), `hub` (in between) or `transit` (transit-dominant) — best fits how people actually reach event venues in Miami–South Florida, and what venue-level car shares does public evidence support?
**Current defaults being assessed (not changed here):** `sprawl` 0.85 car share, `hub` 0.85, `transit` 0.40; venue-specific shares override them.

> **Bottom line.** Public evidence points to **`sprawl`**. Every venue row with evidence lands at an estimated 0.78–0.95 person car-involved share, and the capacity-weighted value across the core's large fixed venues is about **0.88 (range 0.80–0.94)**. No row comes close to the `transit` default of 0.40. The strongest contrary evidence is the downtown Miami cluster (Kaseya Center, Bayfront Park, Arsht Center, loanDepot park nearby) and the new rail-adjacent Nu Stadium, which argue for `hub`-like spill behaviour in one sub-area — but almost all *measured* transit numbers are small, and nearly all of the region's biggest crowds sit at isolated, drive-in sites.

---

## 1. How to read this answer

**Companion venue research was not available in this conversation.** Venues were therefore enumerated independently (Section 4). Row IDs (`V01`, `E01`, `P01`…) are this answer's own keys; if the companion answer uses different keys, map by venue name + configuration.

**Evidence classes used throughout**

| Class | Meaning in this answer |
|---|---|
| Measured | An observed count from an operator or agency (e.g., train rides on an event day, share of fans on a shuttle). Even here, a *mode share* usually requires an added step. |
| Derived | A measured count turned into a share with an explicit method (baseline subtraction, round-trip halving, attendance denominator). Assumptions shown. |
| Projected | A planning-stage figure (e.g., parking need stated before opening). |
| Estimated | A judgement range built from local operating facts (parking rules, shuttle design, transit adjacency) and the derived/projected anchors. No survey behind it. |
| Unknown | No defensible venue-specific value; the current fallback is named. |
| Background | Ordinary commuting (ACS) data. **Never** used as an event share. |

**Car-involved trip definition used.** A person counts as *car* if any leg used a private car, carpool, taxi or rideshare — including driving or being dropped at a remote lot and then riding an event shuttle (park-and-ride). A shuttle counts as *non-car* only when the person reached the shuttle hub by rail, bus or on foot. Shares are **people**, not vehicles; parking-space counts and ride counts are never treated as people without the conversion being shown.

---

## 2. Scope and boundary

### 2.1 Population and commuting background (not event travel)

| Measure | Value | Source | Use here |
|---|---|---|---|
| Miami–Fort Lauderdale–West Palm Beach MSA population (2024 ACS 1-yr) | 6,457,988 | [Social Explorer / ACS](https://www.socialexplorer.com/profiles/essential-report/miami-fort-lauderdale-west-palm-beach-fl-metro-area.html) | Region size |
| County populations (2017, Palm Beach TPA) | Miami-Dade 2.75M; Broward 1.95M; Palm Beach 1.5M | [Palm Beach TPA overview](https://palmbeachtpa.org/wp-content/uploads/2022/08/TPA_Overview.pdf) | Relative weight of Palm Beach |
| Miami-Dade commuters: drove alone / carpool / transit | 74.5% / 8.8% / 3.6% | [Miami Today, ACS column](https://www.miamitodaynews.com/?p=76248) | Background only |
| Broward commuters: drive / carpool / transit; worked outside county | 87.3% / 9.0% / 2.4%; 21.9% | [Stacker (ACS)](https://stacker.com/stories/florida/broward-county-fl/see-what-average-commute-broward-county-fl) | Background only |
| City of Miami transit commuters (2024 ACS) | 7.7% | [Wikipedia ACS table](https://en.wikipedia.org/wiki/List_of_U.S._cities_with_high_transit_ridership) | Background; densest core |
| Broward residents commuting to Miami-Dade (2013) | 126,000+, Florida's largest inter-county flow; ~10% carpool, ~2.5% transit | [SFRPC / AP](https://sfregionalcouncil.org/?p=1948) | Evidence that Miami-Dade + Broward behave as one market |

### 2.2 Boundary recommendation

**Core event metro: Miami-Dade + Broward.** The 126,000+ Broward→Miami-Dade commuter flow ([SFRPC](https://sfregionalcouncil.org/?p=1948)), shared event shuttles (Broward County Transit ran a World Cup shuttle from Amerant Bank Arena in Sunrise to the Miami Gardens stadium — [WSVN](https://wsvn.com/sports/miami-dade-county-broward-county-officials-reveal-plans-for-public-transit-ahead-of-fifa-world-cup-matches/)), the Heat's game-day bus from Broward ([Heat parking page](https://www.nba.com/heat/parking)) and the Dolphins' Lot 70 park-and-ride at the Seminole Hard Rock in Broward ([Dolphins 2025](https://www.miamidolphins.com/news/miami-dolphins-announce-hard-rock-stadium-transportation-options-for-2025-season)) all show event crowds crossing this county line routinely.

**Palm Beach County: separate edge, not core.** It is inside the Census MSA, and rail links (Tri-Rail, Brightline) carry some event fans south — e.g., Tri-Rail said its World Cup service would bring fans from Palm Beach and Broward into Miami ([Miami Today](https://www.miamitodaynews.com/2026/06/10/tri-rail-ridership-kicks-into-high-gear-as-world-cup-crowds-near/)). But Palm Beach has its own large venues (P01–P02) whose audiences were not shown to overlap the core's on the same approaches, and no public study found measures Palm Beach residents' share of core event audiences. Keep Palm Beach rows separate; treat them as edge crowds that only rarely share roads with core crowds (I-95/Turnpike long-distance flows).

**Edge municipalities to flag separately:** Miami Gardens (Hard Rock Stadium; city on Miami-Dade/Broward line); Sunrise (Amerant Bank Arena; far-west Broward); Hollywood (Hard Rock Live, on Seminole tribal land — not a municipal venue strictly); Boca Raton and West Palm Beach area (Palm Beach edge). Homestead (south Miami-Dade) is an unresearched edge — see gaps.

---

## 3. Method notes for ridership inference

**Nu Stadium / Tri-Rail (V08) — worked example of the only defensible ridership-to-share conversion found.**

1. Event-day totals (systemwide Tri-Rail rides): 9,131 on Sat 4 Apr 2026 and 9,668 on Sat 11 Apr ([Progressive Railroading](https://progressiverailroading.com/passenger_rail/news/BART-Tri-Rail-reach-ridership-highs--76749)); 9,854 on Sat 25 Apr and 8,600+ on Sun 17 May ([Miami Today](https://www.miamitodaynews.com/2026/06/10/tri-rail-ridership-kicks-into-high-gear-as-world-cup-crowds-near/)).
2. Baseline: Q1 2025 averages of about 8,000 Saturday and 7,000 Sunday rides ([Progressive Railroading](https://www.progressiverailroading.com/passenger_rail/news/Tri-Rail-logs-2-increase-in-Q1-ridership--74287)).
3. Increment: +1,131 / +1,668 / +1,854 (Saturdays); +1,600 (Sunday).
4. Return trips: divide by 2 → about 565–925 attendees per match.
5. Denominator: capacity 26,700 ([Nu Stadium, Wikipedia](https://en.wikipedia.org/wiki/Nu_Stadium)); actual attendance not found, so this is a capacity denominator.
6. Result: **Tri-Rail ≈ 2.1%–3.5% of a full house.** Cross-check: Tri-Rail said "more than 1,000" fans used its special event trains across the opening home games ([Progressive Railroading](https://progressiverailroading.com/passenger_rail/news/BART-Tri-Rail-reach-ridership-highs--76749)), consistent in magnitude.
7. Uncertainty: the baseline is from a different year and season (2026 growth would shrink the increment); not every increment rider is a fan; some fans ride one way only (raises the share if so); Metrorail and Metrobus riders are **not** in these numbers.

**F1 / Brightline (V04).** Brightline said nearly 15,000 fans travelled from its Aventura station to the 2024 race ([Porthole, quoting Brightline](https://porthole.com/free-brightline-shuttles-to-hard-rock-stadium-for-f1-weekend/)) against a reported 275,000 weekend attendance ([GP Destinations](https://gpdestinations.com/miami-grand-prix-travel-guide-archive/)). If 15,000 counts people-days, that is 5.5% of weekend attendance; if it counts one-way trips, about 2.7%. The definition is not stated, so both are shown. Weekend attendance is a three-day total and is **not** treated as one crowd.

**Ultra / Tri-Rail (E01).** Ultra 2024 set the prior Tri-Rail single-day record of 8,400 rides ([Miami Today](https://www.miamitodaynews.com/2026/06/10/tri-rail-ridership-kicks-into-high-gear-as-world-cup-crowds-near/)), against weekend baselines that were nearing 8,000 in February 2024 ([Metro Magazine](https://www.metro-magazine.com/10217946/floridas-tri-rail-hits-ridership-milestone)). The increment is too small and the baseline too close to estimate an Ultra share from Tri-Rail; Metrorail/Metromover event counts were not found.

**Hard Rock Stadium park-and-ride (V01).** "Nearly 10%" of Dolphins fans used the 2024 park-and-ride shuttle ([AOL / local report](https://www.aol.com/articles/everything-know-monday-dolphins-jets-214010827.html)). These riders parked (or were dropped) at Lot 70 or Lot 95 first ([Dolphins 2025](https://www.miamidolphins.com/news/miami-dolphins-announce-hard-rock-stadium-transportation-options-for-2025-season)), so they are counted as **car-involved**, not as transit.

---

## 4. Venue and event inventory (independently enumerated)

Capacities are by configuration; mutually exclusive configurations of one site are listed but never added together. "Feed coverage" (whether these events appear in the app's event feed) and local ticketing could not be verified from public pages and are marked as gaps.

### 4.1 Core fixed venues, 5,000+ configurations (Miami-Dade + Broward)

| ID | Verified current name (2026) | Municipality | Setup represented | Capacity (config) | Season / days | Name & capacity sources |
|---|---|---|---|---|---|---|
| V01 | Hard Rock Stadium | Miami Gardens | Miami Dolphins NFL | 64,767 (football) | Sep–Jan, mostly Sun | [Wikipedia](https://en.wikipedia.org/wiki/Hard_Rock_Stadium) |
| V02 | Hard Rock Stadium (branded "Miami Stadium" for the tournament) | Miami Gardens | FIFA World Cup 2026, 7 matches, 15 Jun–18 Jul | 64,478 (World Cup) | Summer 2026 only | [Wikipedia](https://en.wikipedia.org/wiki/Hard_Rock_Stadium); [Miami-Dade mobility](https://www.miamidade.gov/sites/initiative/worldcup/mobility.page) |
| V03 | Hard Rock Stadium campus | Miami Gardens | Miami Open tennis (stadium court + campus) | 14,000 tennis stadium; record single-match crowd 17,391 (2026) | ~2 weeks in March | [Wikipedia](https://en.wikipedia.org/wiki/Hard_Rock_Stadium); [BizBash](https://www.bizbash.com/sporting-events/how-the-record-breaking-2026-miami-open-surprised-and-delighted-fans) |
| V04 | Miami International Autodrome (temporary circuit around Hard Rock Stadium) | Miami Gardens | F1 Miami Grand Prix (Fri–Sun) | No fixed seat count published; ~275,000 weekend total (2024, 2025) | Early May (1–3 May 2026) | [Wikipedia](https://en.wikipedia.org/wiki/Hard_Rock_Stadium); [GP Destinations](https://gpdestinations.com/miami-grand-prix-travel-guide-archive/); [Local10](https://www.local10.com/sports/local/2026/04/30/formula-1-miami-grand-prix-releases-transportation-and-entry-details-ahead-of-race-weekend/) |
| V05 | Kaseya Center | Miami (downtown) | Miami Heat NBA | ~19,600 (basketball, secondary source) | Oct–Apr (+playoffs) | [Wikipedia](https://en.wikipedia.org/wiki/Kaseya_Center); capacity per [Thrillzing](https://thrillzing.com/stadiums/kaseya-center-miami/) |
| V06 | Kaseya Center | Miami (downtown) | Center-stage concert | 19,146 | Year-round | [Wikipedia](https://en.wikipedia.org/wiki/Kaseya_Center) |
| V07 | loanDepot park | Miami (Little Havana) | Miami Marlins MLB (also WBC, Caribbean Series) | 36,742 (baseball) | Apr–Sep | [Ticketmaster](https://blog.ticketmaster.com/step-inside-loandepot-park-miami-fl/) |
| V08 | Nu Stadium at Miami Freedom Park | Miami (near MIA/MIC) | Inter Miami CF MLS | 26,700 (Wikipedia) vs 25,000 (earlier plans) | Opened 4 Apr 2026; Feb/Mar–Oct | [Nu Stadium](https://en.wikipedia.org/wiki/Nu_Stadium); [Miami Freedom Park page](https://en.wikipedia.org/wiki/Miami_Freedom_Park) |
| V09 | Amerant Bank Arena | Sunrise | Florida Panthers NHL | 19,250 (hockey) | Oct–Apr (+playoffs) | [Wikipedia](https://en.wikipedia.org/wiki/Amerant_Bank_Arena) |
| V10 | Amerant Bank Arena | Sunrise | Concerts | 15,207–22,457 depending on stage | Year-round | [Wikipedia mirror](https://wikipedia.com/wiki/BB%26T_Center) |
| V11 | Pitbull Stadium (South Dade Kia Field) | Unincorporated Miami-Dade (FIU Modesto Maidique campus) | FIU football | 20,000 | Sep–Nov | [Wikipedia](https://en.wikipedia.org/wiki/Pitbull_Stadium); [FIU trustees minutes](https://trustees.fiu.edu/_assets/docs/2024/august-6-2024/approved_full-board-mtg-minutes_8.6.24.pdf) |
| V12 | FPL Solar Amphitheater at Bayfront Park | Miami (downtown) | Concerts | ~8,500 seated, expandable onto lawn | Mostly Oct–May | [FIU Caplin News](https://caplinnews.fiu.edu/?p=45528) |
| V15 | Hard Rock Live (Seminole Hard Rock Hotel & Casino) | Hollywood area (Seminole tribal land) | Concerts/comedy | 7,000 | Year-round | [Ticketmaster](https://blog.ticketmaster.com/concert-venues-miami/) |

### 4.2 Core fixed venues, ~1,000–5,000 (coverage incomplete)

| ID | Name | Municipality | Capacity (config) | Source / status |
|---|---|---|---|---|
| V13a | Adrienne Arsht Center — Ziff Ballet Opera House | Miami (downtown) | 2,400 (fact sheet) vs 2,300 (rental brochure) | [Arsht fact sheet](https://www.arshtcenter.org/about-us/our-organization/); [2025 brochure](https://www.arshtcenter.org/contentassets/344e94de36ee40f59d8ed53aaa5a1b42/facility-rentals-brochure-2025.pdf) |
| V13b | Adrienne Arsht Center — Knight Concert Hall | Miami (downtown) | 2,200 vs 2,100 | Same as above |
| V14 | The Fillmore Miami Beach at Jackie Gleason Theater | Miami Beach | 2,200 (Ticketmaster) vs 2,462 seated / 2,713 reception (BizBash) | [Ticketmaster](https://blog.ticketmaster.com/concert-venues-miami/); [BizBash](https://www.bizbash.com/event-venues/10-biggest-venues-for-events-and-meetings-in-miami-south-florida) |
| V16 | Inter Miami CF Stadium (formerly DRV PNK Stadium, then Chase Stadium) | Fort Lauderdale | Not verified this pass | Inter Miami's last MLS home game there was 6 Dec 2025; now Inter Miami II ([Wikipedia](https://en.wikipedia.org/wiki/Inter_Miami_CF_Stadium)) |
| V17 | Watsco Center (University of Miami) | Coral Gables | Not verified this pass | Gap |
| — | Broward Center for the Performing Arts; James L. Knight Center; Pompano Beach Amphitheater; Revolution Live; Miami-Dade County Auditorium; Olympia Theater; Miami Beach Convention Center halls | Various | Not verified this pass | **Coverage gap** |

### 4.3 Palm Beach edge (kept separate)

| ID | Name | Municipality | Capacity | Source |
|---|---|---|---|---|
| P01 | iTHINK Financial Amphitheatre at the South Florida Fairgrounds | West Palm Beach area (unincorporated Palm Beach County) | 20,000 | [Wikipedia](https://en.wikipedia.org/wiki/ITHINK_Financial_Amphitheatre) |
| P02 | FAU Stadium | Boca Raton | 29,419 | [CFB Track](https://www.cfbtrack.com/venues/3715-fau-stadium) |
| — | Kravis Center; CACTI Park / Roger Dean Chevrolet Stadium (spring training); South Florida Fair | Palm Beach County | Not verified | Gap |

### 4.4 Event-specific (open-site / festival / district) rows — not fixed-capacity venues

| ID | Event | Site / municipality | Size evidence | Notes |
|---|---|---|---|---|
| E01 | Ultra Music Festival | Bayfront Park, Miami | 165,000 over three days (2024) ≈ 55,000/day average | [NBC Miami](https://www.nbcmiami.com/news/local/miami-music-week-2024-see-the-events-leading-up-to-ultras-grand-finale/3262321/?amp=1). Daily figure is a simple average, not a measured peak. |
| E02 | FIFA Fan Festival 2026 | Bayfront Park, Miami | 23 days, 13 Jun–5 Jul 2026; county expected 600,000+ visitors over the 38-day tournament period overall | [Miami-Dade mobility](https://www.miamidade.gov/sites/initiative/worldcup/mobility.page). The 600,000 figure is not a Fan Fest daily crowd. |
| E03 | Orange Bowl / college bowl and playoff games | Hard Rock Stadium | Stadium football capacity as V01 | Orange Bowl is a game hosted at Hard Rock Stadium, not a separate venue ([Wikipedia](https://en.wikipedia.org/wiki/Hard_Rock_Stadium)). Treated as V01 setup. |
| E04 | Miami Open (multi-day total) | Hard Rock Stadium campus | 420,000+ over two weeks (2026); 405,448 (2025) | [BizBash](https://www.bizbash.com/sporting-events/how-the-record-breaking-2026-miami-open-surprised-and-delighted-fans); [Ministry of Sport](https://ministryofsport.com/miami-open-attendance-hits-400k-for-the-first-time/). Two-week total — never one crowd; see V03 for per-session. |
| E05 | F1 Miami GP weekend total | Miami International Autodrome | ~275,000 weekend | See V04; three-day total. |
| — | Art Basel Miami Beach, Calle Ocho, Coconut Grove Arts Festival, Miami-Dade County Youth Fair, Miami & Fort Lauderdale boat shows, Miami Marathon, Homestead-Miami Speedway events, Rolling Loud/III Points | Various | Not researched | **Coverage gap** |

---

## 5. Venue/event travel table — person mode shares

All splits are **people arriving**, central values summing to 100%. "Car" includes private car, carpool, taxi/rideshare and park-and-ride shuttles reached by car. "Transit" includes public rail/bus and event shuttles reached by rail/bus. Ranges and confidence apply to the recommended car share.

| ID | Car (incl. rideshare & car-origin shuttle) | Transit (public + rail-origin event shuttle) | Walk/bike/other | Unclassified | Sums to 100%? | **Recommended car share** (range) | Confidence | Evidence class | Key anchors |
|---|---|---|---|---|---|---|---|---|---|
| V01 HRS – Dolphins | 93 (of which ~10 via HRS Express park-and-ride) | 4 (Brightline-Aventura shuttle, Metrobus) | 1 | 2 | Yes | **0.93** (0.88–0.97) | Medium-low | Estimated, one measured anchor | ~10% used park-and-ride in 2024 ([AOL](https://www.aol.com/articles/everything-know-monday-dolphins-jets-214010827.html)); no rail near venue ([Miami New Times](https://www.miaminewtimes.com/news/heres-how-to-get-to-miami-world-cup-matches-without-losing-your-mind-40560887/)) |
| V02 HRS – World Cup 2026 | 80 (drive/rideshare direct, or to a hub then shuttle) | 15 (Metrorail/Tri-Rail/Brightline to a hub, then shuttle) | 1 | 4 | Yes | **0.80** (0.65–0.92) | Low | Estimated; shuttle ridership not published | ~200 buses, 4 hubs ([WLRN](https://www.wlrn.org/transportation/2026-06-05/miami-dades-transit-system-prepares-to-transport-hundreds-of-thousands-of-world-cup-fans)); two hubs offer parking ([Miami New Times](https://www.miaminewtimes.com/news/heres-how-to-get-to-miami-world-cup-matches-without-losing-your-mind-40560887/)) |
| V03 HRS – Miami Open (per session) | 93 | 3 | 1 | 3 | Yes | **0.93** (0.85–0.97) | Low | Estimated by analogy to V01 (same site, same road access) | Parking advised in advance ([NBC Miami](https://www.nbcmiami.com/news/sports/tennis/guide-2026-miami-open-schedule-tickets-parking/3783822)); no Miami Open–specific transit count found |
| V04 Autodrome – F1 (per day) | 92 (incl. rideshare and parked-car shuttles) | 5 (Brightline-Aventura shuttle; derived 2.7–5.5%) | 1 | 2 | Yes | **0.92** (0.88–0.96) | Low-medium | Derived rail anchor + estimate | Brightline ~15,000 (2024) ([Porthole](https://porthole.com/free-brightline-shuttles-to-hard-rock-stadium-for-f1-weekend/)); shuttles free to anyone dropped/parked at lots ([Local10](https://www.local10.com/sports/local/2026/04/30/formula-1-miami-grand-prix-releases-transportation-and-entry-details-ahead-of-race-weekend/)) |
| V05 Kaseya – Heat | 78 | 14 (Metromover free, Metrorail via Government Center, Brightline/Tri-Rail at MiamiCentral, trolley, bus) | 6 | 2 | Yes | **0.78** (0.65–0.88) | Low | Estimated; no counts | Only 939 on-site spaces, reserved for premium holders ([Wikipedia](https://en.wikipedia.org/wiki/Kaseya_Center)); free Metromover one block away ([Heat](https://www.nba.com/heat/parking)) |
| V06 Kaseya – concerts | 80 | 12 | 6 | 2 | Yes | **0.80** (0.65–0.90) | Low | Estimated by analogy to V05 | Lots lost to new buildings; off-site Worldcenter parking ([New Times mirror](https://mia-experimental.voicemediagroup.com/?p=40473739)) |
| V07 loanDepot – Marlins | 85 | 8 (Metrorail ~1 mi + transfer; Brightline HOME RUNNER shuttle; bus/trolley) | 3 | 4 | Yes | **0.85** (0.75–0.92) | Low-medium | Projected (derived from pre-opening parking need) | 11,000 spaces said to be needed at a full house of ~37,000 ([Miami Today 2011](https://www.miamitodaynews.com/?p=5375)); at 2.5–3.0 people/vehicle → 74–89% car |
| V08 Nu Stadium – Inter Miami | 86 | 9 (Tri-Rail derived 2.1–3.5%; Metrorail/bus unmeasured, assumed ~6) | 3 | 2 | Yes | **0.86** (0.80–0.92) | Low-medium | Derived (Tri-Rail) + estimate | Section 3 calculation; ~10-min walk from Miami Airport station ([Moovit](https://news.moovitapp.com/en/news/tri-rail-sees-record-soccer-crowd-at-stadium-debut_742_2026-04-09_1775750411076)); club offered $10 vouchers to transit riders ([Axios](https://www.axios.com/local/miami/2026/04/05/inter-miami-fans-public-transit-metrorail-tri-rail)) |
| V09 Amerant – Panthers | 95 | 1 (BCT buses near Sawgrass Mills) | 1 | 3 | Yes | **0.95** (0.92–0.98) | Medium-low | Estimated | 7,045 total spaces ([Wikipedia](https://en.wikipedia.org/wiki/Amerant_Bank_Arena)); no rail |
| V10 Amerant – concerts | 95 | 1 | 1 | 3 | Yes | **0.95** (0.92–0.98) | Medium-low | Estimated by analogy to V09 | Same site |
| V11 Pitbull Stadium – FIU | — | — | — | 100 | n/a | **Unknown → `sprawl` 0.85 applies** | — | Unknown | On-campus walking could lower car share; no evidence found |
| V12 FPL Solar Amphitheater | 78 (transferred) | 14 | 6 | 2 | Yes | **0.78** (0.65–0.88) provisional | Very low | Transfer of V05 (same transit stations, ~0.5 mi) | No venue-specific evidence |
| V13a/b Arsht Center | — | — | — | 100 | n/a | **Unknown → fallback 0.85** | — | Unknown | Has its own Metromover station ([Wikipedia](https://en.wikipedia.org/wiki/Adrienne_Arsht_Center_for_the_Performing_Arts)) |
| V14 Fillmore Miami Beach | — | — | — | 100 | n/a | **Unknown → fallback 0.85** | — | Unknown | No rail on Miami Beach |
| V15 Hard Rock Live | — | — | — | 100 | n/a | **Unknown → fallback 0.85** (likely an understatement) | — | Unknown | Casino resort; no rail |
| V16 Inter Miami CF Stadium (Ft. Lauderdale) | — | — | — | 100 | n/a | **Unknown → fallback 0.85** | — | Unknown | Now hosts smaller Inter Miami II crowds |
| V17 Watsco Center | — | — | — | 100 | n/a | **Unknown → fallback 0.85** | — | Unknown | Capacity unverified |
| P01 iTHINK Amphitheatre (edge) | — | — | — | 100 | n/a | **Unknown → fallback 0.85** (likely an understatement) | — | Unknown | Fairgrounds site, no rail |
| P02 FAU Stadium (edge) | — | — | — | 100 | n/a | **Unknown → fallback 0.85** | — | Unknown | Campus site |
| E01 Ultra (per day) | 65 (heavy rideshare) | 22 | 10 | 3 | Yes | **0.65** (0.45–0.80) provisional | Very low | Estimated; transit counts unavailable | Rail extended to 2 a.m. Fri/Sat ([WLRN 2025](https://www.wlrn.org/news-in-brief/2025-03-27/metrorail-metromover-services-expanded-ultra-music-festival)); Uber lounge set up ([New Times 2016](https://www.miaminewtimes.com/?p=40455118)); fans from 90 countries ([NBC](https://www.nbcmiami.com/news/local/miami-music-week-2024-see-the-events-leading-up-to-ultras-grand-finale/3262321/?amp=1)) |
| E02 FIFA Fan Fest (per day) | — | — | — | 100 | n/a | **Unknown → fallback 0.85** (likely an overstatement downtown) | — | Unknown | Metromover extended to midnight ([Miami-Dade](https://www.miamidade.gov/sites/initiative/worldcup/mobility.page)) |
| E03 Orange Bowl / bowls | as V01 | | | | | **0.93** (0.85–0.97) | Low | Analogy to V01 | Operating plan for bowls not verified |

**Missing modes explained.** No row has a public mode survey, so "unclassified" (2–4 points) is a deliberate reserve for modes not evidenced (boat, scooters, charter coaches, hotel shuttles). For unknown rows the whole split is unclassified. Carpool vs drive-alone vs rideshare cannot be separated for any row; they are all inside "car". No vehicle counts were turned into person counts except V07's projection, whose occupancy assumption is stated.

**People vs other units.** Tri-Rail and Brightline numbers are rides/trips (V04, V08, E01); attendance numbers are turnstile/announced attendance, not tickets sold (V03/E04, V04/E05, E01); parking figures are spaces (V01, V07, V08, V09). None was used directly as a share.

---

## 6. Venue/event travel table — parking, operations and access

| ID | Parking supply & remote arrangements | Event operations, closures, route changes | Event-transit service at start **and end** (verified?) | Access constraints; other crowds on same approaches |
|---|---|---|---|---|
| V01 HRS – Dolphins | On-site supply reported as 24,000+ ([Koobit](https://www.koobit.com/miami-dolphins-vs-new-york-jets-e184196)) vs 26,718 ([Primo blog](https://blog.primowater.com/lifestyle/sports/50-facts-about-hard-rock-stadium)) — both weak secondary sources, conflict unresolved. No on-site parking sold on game day; only remote Lot 70 (Seminole Hard Rock) and Lot 95 (Golden Glades garage) sold day-of ([Dolphins 2025](https://www.miamidolphins.com/news/miami-dolphins-announce-hard-rock-stadium-transportation-options-for-2025-season)). | HRS Express shuttles use the Florida Turnpike to bypass local congestion; rideshare zone moved to Lot 44 in 2025 (was Lot 30 in 2024) ([Dolphins 2025](https://www.miamidolphins.com/news/miami-dolphins-announce-hard-rock-stadium-transportation-options-for-2025-season); [HRS 2024](https://hardrockstadium.com/?p=14946)). | HRS Express runs from 3 h before kickoff to 75 min after the game ([Dolphins 2025](https://www.miamidolphins.com/news/miami-dolphins-announce-hard-rock-stadium-transportation-options-for-2025-season)). Brightline shuttle tied to designated train times ([HRS 2024](https://hardrockstadium.com/?p=14946)). Regular Metrobus end-of-game service not verified. | Metrorail, Tri-Rail and Brightline do not run near the venue ([Miami New Times](https://www.miaminewtimes.com/news/heres-how-to-get-to-miami-world-cup-matches-without-losing-your-mind-40560887/)). Shared approaches: Turnpike, I-95/Palmetto, NW 27th Ave; Lot 70 is shared with Hard Rock Live (V15) crowds. |
| V02 HRS – World Cup | Stadium parking limited; fans reported gridlock despite paying $100+ for passes at an early match ([Miami New Times](https://www.miaminewtimes.com/news/heres-how-to-get-to-miami-world-cup-matches-without-losing-your-mind-40560887/)). Hubs: MLK Jr. Plaza Metrorail, Golden Glades/Tri-Rail, Aventura Brightline, Seminole Hard Rock; plus BCT shuttle from Amerant Bank Arena ([WSVN](https://wsvn.com/sports/miami-dade-county-broward-county-officials-reveal-plans-for-public-transit-ahead-of-fifa-world-cup-matches/)). | Ticket-only, first-come shuttles ([Miami-Dade release](https://www.miamidade.gov/global/release.page?Mduid_release=rel1778186731781337)). A test ride Golden Glades→stadium took just over 32 min ([CBS Miami](https://www.cbsnews.com/miami/news/miami-dade-provides-a-shuttle-service-to-help-fans-navigate-fifa-world-cup-traffic-its-really-efficient/)). | Start: shuttles from 3.5 h before kickoff ([Miami-Dade mobility](https://www.miamidade.gov/sites/initiative/worldcup/mobility.page)). End: continuous until fans returned ([WLRN](https://www.wlrn.org/transportation/2026-06-05/miami-dades-transit-system-prepares-to-transport-hundreds-of-thousands-of-world-cup-fans)); Metrorail extended to 1 a.m. on 27 Jun and 3 Jul ([Miami FWC26](https://miamifwc26.com/miami-game-day-express-shuttle/)); Tri-Rail special train ~1 h after match ([Miami Today](https://www.miamitodaynews.com/2026/06/10/tri-rail-ridership-kicks-into-high-gear-as-world-cup-crowds-near/)). Verified as *planned*; post-event performance data not found. | One-off; overlapped Fan Fest (E02) on match days. |
| V03 HRS – Miami Open | Limited; advance purchase advised ([NBC Miami](https://www.nbcmiami.com/news/sports/tennis/guide-2026-miami-open-schedule-tickets-parking/3783822)). | Campus layout; day and night sessions. | Not verified. | Same approaches as V01; six weeks before F1 ([Local10 ES](https://www.local10.com/espanol/2026/03/10/hard-rock-stadium-se-transforma-para-albergar-el-miami-open/)). |
| V04 Autodrome – F1 | No on-site parking without pre-purchased pass; shuttle lots for parkers and drop-offs ([Local10](https://www.local10.com/sports/local/2026/04/30/formula-1-miami-grand-prix-releases-transportation-and-entry-details-ahead-of-race-weekend/)). | Circuit occupies roads around stadium; rideshare directed to shuttle lots ([Local10](https://www.local10.com/sports/local/2026/04/30/formula-1-miami-grand-prix-releases-transportation-and-entry-details-ahead-of-race-weekend/)). | Brightline shuttle departs Aventura 10 min after each train; returns 1 h before train departures (2025) ([Porthole](https://porthole.com/free-brightline-shuttles-to-hard-rock-stadium-for-f1-weekend/)). | Multi-day; Fri/Sat/Sun crowds each separate. |
| V05/V06 Kaseya | 939 on-site spaces, premium only for Heat ([Wikipedia](https://en.wikipedia.org/wiki/Kaseya_Center)); Bayside and Worldcenter garages off-site ([New Times mirror](https://mia-experimental.voicemediagroup.com/?p=40473739)). | Road closures/traffic pattern changes around arena on event nights ([Heat](https://www.nba.com/heat/parking)). | Metromover free; HEAT Gameday Express bus from Broward ([Heat](https://www.nba.com/heat/parking)). Late-night Metromover/Metrorail hours for ordinary games not verified. | Downtown cluster: shares Biscayne Blvd, I-395, MacArthur Causeway with Bayfront (V12, E01, E02), Arsht (V13). Documented overlap: Ultra opening night and a Heat game on the same evening in 2016 ([New Times](https://www.miaminewtimes.com/?p=40455118)). |
| V07 loanDepot | 4,713 garage + 826 surface spaces cited pre-opening; ~4,000 off-site lawn/driveway spaces ([Miami Today 2011](https://www.miamitodaynews.com/?p=5375)); today 4 garages + 6 lots ([Marlins](https://www.mlb.com/marlins/ballpark/transportation/parking)); $15 park-and-ride offered for WBC ([Marlins WBC](https://www.mlb.com/marlins/ballpark/events/entertainment-sports/world-baseball-classic/2026/parking-and-transportation?source=ev)). | Free-flow licence-plate parking ([Marlins](https://www.mlb.com/marlins/ballpark/transportation)). | Brightline HOME RUNNER shuttle: arrivals ~10 min after train, departures ~45 min before train ([Marlins](https://www.mlb.com/marlins/ballpark/transportation)). Metrorail stations within a mile ([Marlins](https://www.mlb.com/marlins/ballpark/transportation/parking)); end-of-game rail frequency not verified. | Within ~2–3 mi of downtown cluster; shares I-95/SR 836 approaches with Nu Stadium and downtown. |
| V08 Nu Stadium | Garage: 3,725 stalls (builder) vs 4,900 (2022 site plan) — conflict ([Finfrock](https://finfrock.com/project/miami-freedom/); [Miami Today 2022](https://www.miamitodaynews.com/2022/07/05/city-board-tells-freedom-park-to-break-up-vast-4900-car-garage/)). Parking pre-purchase only, $45+ ([Moovit](https://news.moovitapp.com/en/news/tri-rail-sees-record-soccer-crowd-at-stadium-debut_742_2026-04-09_1775750411076)); residents sold lawn parking at $40–$50 ([AOL](https://www.aol.com/articles/inter-miami-pregame-traffic-bigger-020102975.html)). | Police blocked westbound side streets near NW 37th Ave on opening day ([AOL](https://www.aol.com/articles/inter-miami-pregame-traffic-bigger-020102975.html)). | Tri-Rail late trains ~45 min after final whistle for weekend home games ([Axios](https://www.axios.com/local/miami/2026/04/05/inter-miami-fans-public-transit-metrorail-tri-rail)). Verified for weekends only. | Shares LeJeune Rd / SR 836 / NW 37th Ave with Miami International Airport traffic ([AOL](https://www.aol.com/articles/inter-miami-pregame-traffic-bigger-020102975.html)). |
| V09/V10 Amerant | 7,045 spaces; 4,446 general ([Wikipedia mirror](https://wikipedia.com/wiki/BB%26T_Center)); lots open 2 h before, close 1 h after ([Panthers FAQ](https://www.nhl.com/panthers/news/faq-arena-and-game-day)). | Directions route drivers off Pat Salerno Drive straight into Gates 1/2 ([Amerant](https://www.amerantbankarena.com/directions-parking)). | No event transit identified. | Shares Sawgrass Expressway / I-595 / Sunrise Blvd with Sawgrass Mills shoppers. |
| V12, V13, E01, E02 (Bayfront/Arsht) | Downtown garages; Metrorail-station parking used as park-and-ride for Ultra in past years ([Miami-Dade 2015](https://miamidade.gov/transit/releases/15-03-25-ultra.asp)). | Police traffic re-routes around Bayfront during Ultra ([New Times](https://www.miaminewtimes.com/?p=40455118)). | Ultra: Metrorail/Metromover 5 a.m.–2 a.m. Fri/Sat, to midnight Sun, Metrorail every 30 min ([WLRN 2025](https://www.wlrn.org/news-in-brief/2025-03-27/metrorail-metromover-services-expanded-ultra-music-festival)). Fan Fest: Metromover to midnight ([Miami-Dade](https://www.miamidade.gov/sites/initiative/worldcup/mobility.page)). | Same cluster as V05/V06. |
| V15 Hard Rock Live | Resort garages (count not verified). | — | — | Shares Lot 70 / SR 7 area with HRS park-and-ride on Dolphins days. |
| P01/P02 (edge) | Not researched. | — | — | Not shared with core crowds except long-distance I-95/Turnpike flows. |

---

## 7. Regional conclusion

### 7.1 Weighted car shares (core, fixed venues ≥ ~5,000, one configuration per site)

Configurations used (never summed with an exclusive alternative): V01 Dolphins 64,767; V07 Marlins 36,742; V08 Inter Miami 26,700; V11 FIU football 20,000; V05 Heat 19,600; V09 Panthers 19,250; V12 amphitheater 8,500; V15 Hard Rock Live 7,000. Excluded: V02–V04 and V06/V10 (alternate configurations of the same sites), V13/V14/V16/V17 (under 5,000 or unverified), Palm Beach P01–P02, and all multi-day totals.

| Weighting set | Total capacity | Car share (central) | Low–high |
|---|---|---|---|
| All eight core configurations (unknown rows at 0.85 fallback, range 0.75–0.95) | 202,559 | **0.877** | 0.80–0.94 |
| Only rows with an estimate or anchor (V01, V05, V07, V08, V09) | 167,059 | 0.886 | 0.82–0.94 |
| Excluding Hard Rock Stadium | 137,792 | 0.852 | 0.76–0.93 |
| Urban core only (V05, V07, V08, V12) | 91,542 | 0.831 | 0.73–0.91 |
| Outlying only (V01, V09, V11, V15) | 111,017 | 0.914 | 0.86–0.97 |

**Typical-attendance weighting was not computed.** Season-average attendance for the Marlins, Heat, Panthers, FIU and Inter Miami (2026) was not gathered from primary sources in this pass; substituting capacities would just repeat the table above. This is listed as a gap.

**Do the huge outlying venues hide the downtown pattern?** Partly. Hard Rock Stadium alone is ~32% of the weighted capacity and pulls the regional figure up by about 0.025. The urban-core subset (0.83) is lower than the outlying subset (0.91), but even the urban core sits near the existing 0.85 default and far above `transit`'s 0.40.

### 7.2 Clusters, shared roads and shared audiences (separate findings)

**Clusters (proximity):** (a) Downtown/Bayfront — Kaseya Center, FPL Solar Amphitheater/Bayfront Park, Arsht Center, with loanDepot park nearby; (b) Airport/Grapeland — Nu Stadium beside Miami International Airport; (c) Miami Gardens — Hard Rock Stadium/Autodrome campus (one site, exclusive configurations); (d) Sunrise — Amerant Bank Arena alone; (e) Hollywood — Hard Rock Live.
**Shared roads (documented):** I-395/Biscayne Blvd/MacArthur Causeway for cluster (a), with a documented Ultra + Heat same-night overlap ([New Times](https://www.miaminewtimes.com/?p=40455118)); LeJeune Rd/NW 37th Ave/SR 836 shared by Nu Stadium and airport traffic ([AOL](https://www.aol.com/articles/inter-miami-pregame-traffic-bigger-020102975.html)); Florida's Turnpike used by HRS Express shuttles ([Dolphins 2025](https://www.miamidolphins.com/news/miami-dolphins-announce-hard-rock-stadium-transportation-options-for-2025-season)).
**Shared audiences/infrastructure:** Lot 70 at the Seminole Hard Rock is both a Dolphins park-and-ride and the Hard Rock Live campus; Golden Glades is a park-and-ride for Dolphins games and was a World Cup hub; Brightline Aventura serves HRS events of all types. These are infrastructure overlaps, not proof of simultaneous crowds.

No distance rule or manual access flag is proposed.

---

## 8. Answers in the requested order

### 8.1 Recommended existing city type: **`sprawl`**

**Rationale.** (1) Every row with any evidence has an estimated car-involved share of 0.78–0.95, and the capacity-weighted core value is ~0.88 (Section 7.1). (2) The best measured transit anchors are small: Tri-Rail carried roughly 2–3.5% of a full Nu Stadium (Section 3), Brightline perhaps 3–5% of F1 attendance, and about 10% of Dolphins fans used a shuttle that they *drove* to. (3) The largest crowds — Hard Rock Stadium/Autodrome (up to ~65,000 per event) and Amerant Bank Arena — sit at isolated sites with no rail and large surface lots ([Miami New Times](https://www.miaminewtimes.com/news/heres-how-to-get-to-miami-world-cup-matches-without-losing-your-mind-40560887/); [Amerant, Wikipedia](https://en.wikipedia.org/wiki/Amerant_Bank_Arena)). (4) Event capacity is spread across at least five separate clusters in two counties rather than concentrated on one core, and the shared roads are regional expressways (Turnpike, I-95, SR 836, Sawgrass) more than a single downtown grid. (5) Background commuting is car-dominated (Miami-Dade transit 3.6%, Broward 2.4%) — used only as context.

**Note on what the choice changes.** Because `sprawl` and `hub` share the same 0.85 fallback, the evidence above does not distinguish them on car share; the practical difference is the spill-between-crowds behaviour, whose internal formula is not described in the brief. The recommendation rests on the dispersed, multi-cluster geography, not on the car-share figure.

**Strongest contrary evidence (for `hub`).** The downtown cluster — Kaseya Center with only 939 on-site spaces and a free Metromover stop one block away ([Wikipedia](https://en.wikipedia.org/wiki/Kaseya_Center); [Heat](https://www.nba.com/heat/parking)), Bayfront Park with extended rail service for Ultra ([WLRN](https://www.wlrn.org/news-in-brief/2025-03-27/metrorail-metromover-services-expanded-ultra-music-festival)), the Arsht Center with its own Metromover station — plus a documented same-night Ultra/Heat overlap ([New Times](https://www.miaminewtimes.com/?p=40455118)) and the new Nu Stadium visibly drawing rail riders ([Axios](https://www.axios.com/local/miami/2026/04/05/inter-miami-fans-public-transit-metrorail-tri-rail)). If the app's spill concept is mostly about a dense central cluster, this sub-area behaves more like a `hub`. **Venue exceptions** to watch: V05/V06/V12 (estimated 0.78–0.80) and E01 Ultra (provisional 0.65) should carry venue-specific values rather than any fallback.

### 8.2 Car-share values keyed to rows

| Row | Value (range) | Type |
|---|---|---|
| — | *No row has a fully measured mode split.* | — |
| V08 Nu Stadium – Inter Miami | 0.86 (0.80–0.92) | **Derived** (measured Tri-Rail rides → 2.1–3.5%) + estimate for other modes |
| V04 Autodrome – F1 (per day) | 0.92 (0.88–0.96) | **Derived** (operator-reported Brightline count → 2.7–5.5%) + estimate |
| V01 HRS – Dolphins | 0.93 (0.88–0.97) | **Estimated** with a measured anchor (~10% park-and-ride, car-involved) |
| V07 loanDepot – Marlins | 0.85 (0.75–0.92) | **Projected** (2011 parking-need statement + occupancy assumption) |
| V02 HRS – World Cup | 0.80 (0.65–0.92) | Estimated |
| V03 HRS – Miami Open | 0.93 (0.85–0.97) | Estimated (analogy to V01) |
| E03 Orange Bowl / bowls | 0.93 (0.85–0.97) | Estimated (analogy to V01) |
| V05 Kaseya – Heat | 0.78 (0.65–0.88) | Estimated |
| V06 Kaseya – concerts | 0.80 (0.65–0.90) | Estimated |
| V09/V10 Amerant | 0.95 (0.92–0.98) | Estimated |
| V12 FPL Solar Amphitheater | 0.78 (0.65–0.88) | Estimated, provisional transfer from V05 |
| E01 Ultra (per day) | 0.65 (0.45–0.80) | Estimated, provisional, very low confidence |
| V11, V13a/b, V14, V15, V16, V17, E02, P01, P02 | Unknown | Current `sprawl` fallback 0.85 provisionally applies (if `hub` were chosen, also 0.85) |

### 8.3 Boundary recommendation and inconsistencies between briefs

**Boundary:** Miami-Dade + Broward as the core event metro; Palm Beach as a separate edge with its own rows (P01, P02). Edge municipalities: Miami Gardens, Sunrise, Hollywood/Seminole land (core-edge); Boca Raton and the West Palm Beach area (Palm Beach edge); Homestead (unresearched south edge).

**Inconsistencies found in the brief's starting leads**
- "DRV PNK Stadium" is outdated: it became Chase Stadium in 2024 and reverted to Inter Miami CF Stadium after Inter Miami moved; the first team's last MLS home game there was 6 Dec 2025 ([Wikipedia](https://en.wikipedia.org/wiki/Inter_Miami_CF_Stadium)). The relevant 5,000+ venue is now Nu Stadium (opened 4 Apr 2026) ([Wikipedia](https://en.wikipedia.org/wiki/Nu_Stadium)).
- "Orange Bowl" and "Miami Open" are events at Hard Rock Stadium, and "Miami International Autodrome" is a temporary circuit on the same campus — all mutually exclusive configurations of one site, not separate venues ([Wikipedia](https://en.wikipedia.org/wiki/Hard_Rock_Stadium)).
- The companion venue answer referenced by this brief was not available, so row keys are this answer's own.
- The brief's Palm Beach question is answered as "edge", although Palm Beach is inside the Census MSA ([Social Explorer](https://www.socialexplorer.com/profiles/essential-report/miami-fort-lauderdale-west-palm-beach-fl-metro-area.html)); statistical-area membership and event-market membership are different tests.

### 8.4 Data gaps, model limitations, source conflicts and inaccessible sources

**Gaps**
- No public event mode-split survey, transportation-management-plan monitoring report, or environmental review with observed event splits was found for any venue.
- World Cup 2026 Game Day Express ridership has not been located as of the research date; this is the single most valuable missing dataset (seven near-capacity crowds, defined hubs). Re-check Miami-Dade DTPW and FIFA host-committee after-action reporting.
- Metrorail/Metromover event-day counts for Heat, Marlins, Ultra and Inter Miami were not found.
- Season-average attendance for typical-attendance weighting not gathered.
- Capacities unverified: Watsco Center, Inter Miami CF Stadium (current), Broward Center, James L. Knight Center, Pompano Beach Amphitheater, Revolution Live, Kravis Center, others in 4.2/4.3.
- Unresearched events: Art Basel Miami Beach, Calle Ocho, Coconut Grove Arts Festival, Miami-Dade County Youth Fair, boat shows, Miami Marathon, Homestead-Miami Speedway, South Florida Fair.
- Local ticketing and app feed coverage could not be verified from public sources.

**Model limitations**
- Car share alone cannot separate `sprawl` from `hub` (same 0.85 default); the decision leans on geography.
- Park-and-ride shuttles move cars off local approaches but not off regional roads; a single car share does not capture that relocation of pressure (relevant to V01, V02, V04).
- Weekday vs weekend and winter vs summer differences could not be measured for any venue; the Tri-Rail anchor is weekend-only.

**Source conflicts (preserved)**
- Hard Rock Stadium parking: 24,000+ vs 26,718 spaces (both secondary).
- Nu Stadium: capacity 26,700 vs 25,000; garage 3,725 vs 4,900 stalls.
- Arsht Center: 2,400/2,200 (fact sheet) vs 2,300/2,100 (rental brochure) — likely seated vs rental configuration.
- Fillmore Miami Beach: 2,200 vs 2,462 seated / 2,713 reception.
- Brightline F1 "15,000 fans": unit (people vs one-way trips) unstated → 2.7% vs 5.5%.
- WLRN's two versions of the World Cup story give hub opening as 4 h vs 5 h before kickoff ([WLRN](https://www.wlrn.org/light/transportation/2026-06-05/miami-dades-transit-system-prepares-to-transport-hundreds-of-thousands-of-world-cup-fans) vs [WLRN](https://www.wlrn.org/transportation/2026-06-05/miami-dades-transit-system-prepares-to-transport-hundreds-of-thousands-of-world-cup-fans)); the county page says lines may form no earlier than 5 h before ([Miami-Dade](https://www.miamidade.gov/sites/initiative/worldcup/mobility.page)).
- Tri-Rail state funding: a May 2026 report said lawmakers proposed restoring $60M ([CBS12](https://cbs12.com/news/local/tri-rail-could-stay-on-track-thanks-to-proposed-60m-state-funding-boost-service-cuts-state-budget-train-rider-may-27-2026)), but a September 2026 report described the $60M as stalled ([WFLX](https://www.wflx.com/2026/09/03/tri-rail-funding-crisis-60-million-shortfall-threatens-south-florida-commuter-service-potential-cuts-loom/)). Treated as unresolved.

**Source-quality and access notes**
- Several capacity/parking figures come from ticketing blogs or aggregators (Koobit, Primo, Thrillzing, CFB Track, Ticketmaster blog); they are flagged where used.
- One link is a mirror of a Miami New Times article (voicemediagroup domain); the original URL was not retrieved.
- The Miami Freedom Park traffic study referenced on the City of Miami's SAP page ([City of Miami](https://www.miami.gov/My-Government/Departments/Planning/Urban-Design-Main-Landing-Page/Special-Area-Plans-SAPs/Approved-Miami-Freedom-Park)) was not found as a public document; it may contain projected mode splits and should be requested.
- No paywalled or access-controlled source was bypassed.

### 8.5 Confirmed transport/venue changes through 2028

| Change | Status | Date | Suggested re-check |
|---|---|---|---|
| Nu Stadium opened; Inter Miami left Fort Lauderdale | **Done** | Opened 4 Apr 2026 ([Wikipedia](https://en.wikipedia.org/wiki/Nu_Stadium)) | Mar 2027 (season start; look for club/Tri-Rail ridership releases) |
| Tri-Rail weekend late trains for Inter Miami | **In operation** (2026 season partnership) | 2026 ([Axios](https://www.axios.com/local/miami/2026/04/05/inter-miami-fans-public-transit-metrorail-tri-rail)) | Mar 2027 |
| Tri-Rail funding: reserves said to last to July 2027; fares +10% from October 2026 | **Unresolved / at risk**; weekend service named as first cut if unfunded ([WFLX](https://www.wflx.com/2026/09/03/tri-rail-funding-crisis-60-million-shortfall-threatens-south-florida-commuter-service-potential-cuts-loom/); [Boca Raton Tribune](https://www.bocaratontribune.com/bocaratonnews/2026/02/lifeline-coming-tri-rail-navigates-existential-funding-gap/)) | Decision point before Jul 2027 | Jan 2027 and Jun 2027 — directly affects V08's transit share |
| Northeast Corridor commuter rail (MiamiCentral–Aventura, 5 new stations) | **Funded locally (Sep 2025), in design**; 100% plans due Apr 2027; FTA full funding grant expected Jan 2027; opening year 2032 — **not before 2028** ([GovMarketNews](https://govmarketnews.com/miami-dade-northeast-rapid-transit-corridor-927m-rail-project/); [FTA profile](https://www.transit.dot.gov/sites/fta.dot.gov/files/2024-10/FL-Miami-Dade-Northeast-Corridor-Rapid-Transit-Profile-Eng.pdf)); state funding stalled in early 2026 ([Miami Today](https://www.miamitodaynews.com/2026/02/25/funding-train-wreck-for-northeast-corridor-and-tri-rail/)) | Opening ~2032 | Feb 2027 (FFGA) |
| Hard Rock Stadium game-day transport (HRS Express, Brightline shuttle, no day-of on-site parking) | **In operation**, revised each season ([Dolphins 2025](https://www.miamidolphins.com/news/miami-dolphins-announce-hard-rock-stadium-transportation-options-for-2025-season)) | 2024 → 2025 | Each September |
| F1 Miami GP contract | **Confirmed long-term**, reported through at least 2041 ([GP Destinations](https://gpdestinations.com/miami-grand-prix-travel-guide-archive/)) | — | Each April |
| Brightline financial condition / Tri-Rail on FEC tracks | **Proposal / risk only** ([Biscayne Times](https://www.biscaynetimes.com/news/off-the-rails/)) | — | Quarterly |
| South Dade TransitWay BRT, Metromover/Metrorail changes, venue renovations | **Not verified in this pass** | — | Next research pass |

---

*Public data only. No app code, hand flags, personal ratings, new constants or cost commitments are included. Every figure above links to the page it came from; estimates show their assumptions in Sections 3 and 5.*
