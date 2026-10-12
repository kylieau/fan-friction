<!-- Pasted by Kylie in the Oct 12, 2026 Claude Code session, answering docs/research/city-builds/sacramento/sacramento-city-type-prompt.md. Saved in full, unedited below this line. Not a product lock: fold into the city settings by the checklist. -->

# Sacramento city-type answer — event travel evidence for Fan/Friction Gridlock

**Research date:** Monday, October 12, 2026 (public web sources only; every figure below links to its source).
**Question:** Which existing city setting — `sprawl` (driving), `hub` (in between) or `transit` (transit-dominant) — best fits how people actually reach event venues in the Sacramento region, and what venue-specific car shares does public evidence support?
**Existing defaults assessed (not changed):** car share 0.85 for `sprawl` and `hub`, 0.40 for `transit`; venue-specific shares override.
**Companion venue answer:** not available to this research. Venues were enumerated independently (Section 3); row IDs (V01…, E01…) are this document's own and need mapping to the companion rows.

---

## 1. Short answer

Recommend **`hub`**. Every Sacramento venue or event with usable evidence is car-dominant: estimated person car shares run from roughly 0.77 (UC Davis football) to 0.97 (Wheatland amphitheatre), and the only downtown arena figures available (a 15% walk/bike/transit projection and a light-rail share of "up to 11%") put Golden 1 Center near 0.85. Nothing supports `transit` (0.40). Because `sprawl` and `hub` share the same 0.85 car fallback, the choice between them rests on clustering: the downtown/riverfront core and the Cal Expo grounds both host several large crowds that share bridges, freeways, garages, lots and light-rail stations, which fits the in-between setting better than pure sprawl. The strongest contrary evidence is the region's very low transit commuting and the large share of capacity at self-parked suburban or exurban sites (Section 8.1).

No measured, published event mode split was found for any Sacramento venue. All car-share values in this document are **projected** or **estimated**, never measured (Section 8.2).

---

## 2. Method and definitions

| Term | Definition used here |
|---|---|
| Car share | Share of **people** (not vehicles, not ticket buyers) whose trip to the event involves a private car, carpool, taxi/rideshare or drop-off at any stage. |
| Park-and-ride / remote lot + shuttle | Counted as **car-involved**. A shuttle leg does not make a trip non-car when the attendee drove to the lot. |
| Public transit | Regular or supplemental bus/light rail/rail where the attendee reached it without driving (access mode usually unknown; flagged). |
| Dedicated event shuttle | Event-only bus (e.g., Roseville Game Day Express). Access mode to the pickup point is usually unknown and is flagged. |
| Unclassified | Charter/party buses, hotel shuttles, unknown modes, and rounding. |
| Evidence ranking | Observed survey/counts > agency/team statements of observed use > environmental-review projections > estimates from local operating facts and peer comparisons. |
| Multi-day events | Daily average used as the crowd; multi-day totals are never treated as one simultaneous crowd. |
| Mutually exclusive configurations | Never added (e.g., Kings vs. concert at Golden 1 Center; Athletics vs. River Cats at Sutter Health Park). |

Searches covered environmental reviews (City of Sacramento EIRs), transit agencies (SacRT, Yolobus, Unitrans, Roseville Transit), team/venue/organizer pages, news reports, and peer-venue mode-split compilations. Raw boardings and parking spaces were converted only through the worked methods in Section 6, and only as bounds.

### Background only — ordinary commuting (not event travel)

For context, the 2024 ACS one-year commute shares for the Sacramento metro were drive alone 67.5%, carpool 9.2%, work from home 16.8%, transit 1.8%, bicycle 1.0%, taxi/other 1.6% and walk 2.1% ([newgeography summary of ACS 2024](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access)). Among workers who actually travel, that implies roughly 92% by car and about 2% by transit. This describes commuting and is **not** used as an event split anywhere below.

---

## 3. Venue and event inventory (independent enumeration)

Status, capacity and configuration verified as of the research date. "≥5k" = fixed configuration of 5,000 or more.

| ID | Verified current name | Municipality (county) | Configuration represented | Capacity | Status / notes |
|---|---|---|---|---|---|
| V01 | Golden 1 Center | Sacramento (Sacramento) | Sacramento Kings NBA, Oct–Apr | [17,608](https://blog.ticketmaster.com/step-inside-golden-1-center-sacramento-ca/) (EIR design: [17,500](https://www.cityofsacramento.gov/content/dam/portal/cdd/Planning/Environmental-Impact-Reports/ESC/ESC_Certified_EIR_Vol_2.pdf)) | Active; ≥5k |
| V02 | Golden 1 Center | Sacramento | Concerts / special events | up to [19,000](https://blog.ticketmaster.com/step-inside-golden-1-center-sacramento-ca/) | Active; mutually exclusive with V01 |
| V03 | Sutter Health Park | West Sacramento (Yolo) | Athletics MLB, 2025–2027 (Mar–Sep, mostly evenings) | [14,014 total; 10,624 fixed seats](https://en.wikipedia.org/wiki/Sutter_Health_Park) | Temporary tenant through 2027 per [MLB announcement](https://www.mlb.com/amp/press-release/press-release-sutter-health-park-in-west-sacramento-to-host-a-s-for-2025-2027-seasons.html); ≥5k |
| V04 | Sutter Health Park | West Sacramento | Sacramento River Cats (AAA) | same as V03 | Active; mutually exclusive with V03 |
| V05 | Heart Health Park (Cal Expo grounds) | Sacramento | Sacramento Republic FC (USL), Mar–Oct | [11,569](https://en.wikipedia.org/wiki/Heart_Health_Park) | Active until club moves to Railyards ([planned 2028](https://www.sacrepublicfc.com/?p=45831)); ≥5k |
| V06 | Hornet Stadium (Sacramento State) | Sacramento | Sac State football, FBS/MAC from 2026 | [21,195](https://hornetsports.com/facilities/hornet-stadium/1) | Active; replacement proposals pending (Section 8.5); ≥5k |
| V07 | UC Davis Health Stadium | Davis area (Yolo) | UC Davis football, Sep–Nov | [10,743](https://en.wikipedia.org/wiki/UC_Davis_Health_Stadium) (record crowd 17,217) | Active; ≥5k |
| V08 | University Credit Union Center (UC Davis) | Unincorporated Yolo (UC Davis campus) | Basketball/volleyball | [6,003 (athletics)](https://ucdavisaggies.com/facilities/?id=5) | Active; ≥5k; capacity conflict (Section 8.4) |
| V09 | Toyota Amphitheatre | Wheatland area (Yuba) | Outdoor concerts, warm season | [18,500 (8,000 fixed seats + lawn)](https://www.hellermanus.com/toyota-amphitheatre) | Active; ≥5k; outside the MSA, inside the CSA |
| V10 | The Venue at Thunder Valley | Lincoln (Placer) | Indoor concerts | [4,500](https://www.thundervalleyresort.com/faq) | Active; replaced the former 5,000-seat outdoor amphitheatre, which ran [2011–2022](https://www.comstocksmag.com/web-only/venue-makes-its-debut) |
| V11 | Hard Rock Live (Hard Rock Hotel & Casino Sacramento at Fire Mountain) | Wheatland (Yuba) | Indoor concerts | [2,500 seated / 3,500 GA](https://seminoletribune.org/?p=43708) | Active |
| V12 | SAFE Credit Union Performing Arts Center | Sacramento | Theater/Broadway | [2,193 after renovation](https://sacramentocityexpress.com/2021/09/15/newly-renovated-safe-credit-union-performing-arts-center-opens-with-the-sacramento-premiere-of-hamilton/) | Active; capacity conflict (Section 8.4) |
| V13 | Sacramento Memorial Auditorium | Sacramento | Concerts, graduations | [3,867](https://en.wikipedia.org/wiki/Sacramento_Convention_Center_Complex) | Active |
| V14 | Hornet Pavilion (Sacramento State) | Sacramento | Basketball | [3,000, opened Nov 2025](https://www.stadiumjourney.com/stadiums/hornet-pavilion-sacramento-state-hornets) | Active |
| V15 | Ace of Spades | Sacramento | Club concerts | [1,000](https://sactoday.6amcity.com/city-guide/live/live-music-venues-sacramento-ca) | Active |
| V16 | SAFE Credit Union Convention Center | Sacramento | Conventions (e.g., SacAnime, [21,000 in summer 2018, multi-day](https://en.wikipedia.org/wiki/SacAnime)) | n/a (exhibit space) | Active; not a fixed seating room |
| E01 | California State Fair (Cal Expo) | Sacramento | 17-day fair; 2026 ran Jul 17–Aug 2 | [>650,000 total in 2026](https://www.cbsnews.com/sacramento/news/final-summer-california-state-fair-2026-numbers/) | Moves to [Sep 17–Oct 3 from 2027](https://www.capradio.org/articles/2025/12/15/ca-state-fair-announces-new-fall-dates-by-2027/) |
| E02 | Aftershock Festival (Discovery Park) | Sacramento | 4-day festival; 2026 ran Oct 1–4 | [>164,000 total in 2025](https://www.capradio.org/articles/2026/09/29/5-things-to-know-about-the-14th-annual-aftershock/) | Annual, early October |
| E03 | California International Marathon | Folsom → Sacramento | Point-to-point race, early December | [11,000 runners expected in 2025](https://www.abridged.org/news/sacramentos-annual-marathon-is-this-weekend-heres-what-to-know/) | Annual; linear course |
| E04 | Republic Stadium at The Railyards (future) | Sacramento | Republic FC + concerts | [20,000+, opening 2028](https://www.sacrepublicfc.com/?p=45831) | Under construction |

**Not verified in this pass (gaps):** Mondavi Center, Crest Theatre, Wells Fargo Pavilion (Music Circus), Channel 24, Hughes Stadium (Sacramento City College), Cal Expo's other concert spaces, Placer County Fair (Roseville), Yolo County Fair (Woodland), and GoldenSky/Sol Blume festivals at Discovery Park. Each may host 1,000+ crowds; none had capacities or travel evidence confirmed here.

**Starting-lead corrections:** "Thunder Valley Amphitheatre" is no longer active — the indoor 4,500-seat Venue replaced it ([Comstock's](https://www.comstocksmag.com/web-only/venue-makes-its-debut)). The Athletics' Sutter Health Park arrangement covers 2025–2027 with an option for a fourth year, and the club played [75 home games at Sutter Health Park and six in Las Vegas in 2026](https://en.wikipedia.org/wiki/2026_Athletics_season).

---

## 4. Venue and event travel table — person mode splits

All splits are **people**. "Sum" confirms the row totals 100%. "Type" distinguishes measured / projected / estimated. Rows with no defensible estimate show the provisional fallback.

| ID | Setup / date or season | Car, carpool, rideshare, drop-off (incl. park-and-ride) | Public bus/rail | Dedicated event shuttle | Walk/bike/other | Unclassified | Sum | Recommended car share (range) | Confidence | Evidence type, date, event type |
|---|---|---|---|---|---|---|---|---|---|---|
| V01 | Kings regular season, 2016–present | 84.5 | 8 | 0.5 | 6 | 1 | 100 | **0.85** (0.78–0.90) | Low–medium | Team projection (2016) + transit-agency claim of observed use (2016–17) + ridership inference (2017); NBA |
| V02 | Golden 1 Center concerts | 88 | 6 | 0 | 4 | 2 | 100 | **0.88** (0.80–0.93) | Low | Estimate adjusted from V01 (no Game Day Express; wider catchment); concert |
| V03 | Athletics 2025–2027 | 88 | 4 | 0 | 6 | 2 | 100 | **0.88** (0.82–0.94) | Low | Estimate from operating facts (surface lots, limited late bus, bridge walk); MLB |
| V04 | River Cats | 88 | 4 | 0 | 6 | 2 | 100 | **0.88** (0.82–0.94) | Low | No separate evidence; V03 applied; AAA baseball |
| V05 | Republic FC at Heart Health Park, through 2027 | 93 | 2 | 0 | 2 | 3 | 100 | **0.93** (0.88–0.97) | Low | Estimate from fairground lot supply, no rail; soccer |
| V06 | Sac State football 2026 | 86 | 4 | 0 | 8 | 2 | 100 | **0.86** (0.78–0.92) | Low | Estimate: campus lots, light rail ~walking distance, student walk/bike; college football |
| V07 | UC Davis football | 77 | 5 | 0 (Lot 53 shuttle counted as car) | 16 | 2 | 100 | **0.77** (0.65–0.88) | Very low | Estimate from anecdotal bike-rack count + campus shuttle facts; college football |
| V08 | UC Davis basketball | — | — | — | — | — | — | **Unknown → provisional fallback 0.85** | n/a | No travel evidence found |
| V09 | Toyota Amphitheatre concerts | 97 | 0 | 0 | 0 | 3 (charter/party bus, RV) | 100 | **0.97** (0.94–0.99) | Medium | Structural estimate: no transit found; parking bound (Section 6); concert |
| V10 | The Venue at Thunder Valley | 97 | 0 | 0 | 0 | 3 | 100 | **0.97** (0.93–0.99) | Low–medium | Structural estimate: casino parking structure, no transit evidence; concert |
| V11 | Hard Rock Live, Wheatland | 97 | 0 | 0 | 0 | 3 | 100 | **0.97** (0.93–0.99) | Low–medium | Structural estimate (exurban casino); concert |
| V12 | SAFE CU Performing Arts Center | — | — | — | — | — | — | **Unknown → provisional fallback 0.85** | n/a | No travel evidence; downtown, light-rail adjacent |
| V13 | Memorial Auditorium | — | — | — | — | — | — | **Unknown → provisional fallback 0.85** | n/a | No travel evidence |
| V14 | Hornet Pavilion | — | — | — | — | — | — | **Unknown → provisional fallback 0.85** | n/a | No travel evidence |
| V15 | Ace of Spades | — | — | — | — | — | — | **Unknown → provisional fallback 0.85** | n/a | No travel evidence |
| V16 | Convention Center events | — | — | — | — | — | — | **Unknown → provisional fallback 0.85** | n/a | No travel evidence |
| E01 | State Fair 2026 (summer) / 2027+ (fall) | 90 | 3 | 0 | 2 | 5 (charter/group bus, RV park) | 100 | **0.90** (0.85–0.95) | Low | Estimate: very large lots, special bus service; fair |
| E02 | Aftershock 2025–2026 | 85 | 7 | 0 (Cal Expo park-and-ride counted as car) | 3 | 5 (party/charter bus, hotel shuttles) | 100 | **0.85** (0.75–0.92) | Low | Estimate: no on-site parking, park-and-ride, free transit with wristband; festival |
| E03 | CIM, early December | — | — | 100% of runners ride official start buses | — | — | — | **Unknown → provisional fallback 0.85**; crowd is linear and time-staggered | n/a | Organizer rule on buses; spectators unmeasured; race |
| E04 | Republic Stadium (2028) | — | — | — | — | — | — | **Projected split exists in 2016 SEIR but not extracted; fallback 0.85 until checked** | n/a | Environmental review (projection); soccer/concert |

**Missing-mode explanations.** Transit shares for V09–V11 are zero because no scheduled service or event transit to those sites was found, not because it was measured as zero. Walk/bike at exurban sites is assumed negligible. For V07, the Lot 53 shuttle is a park-and-ride leg and is counted inside car. For E02, the Cal Expo park-and-ride shuttle is counted inside car; SacRT's free downtown-to-park bus is counted as transit, although its riders' access mode to downtown is unknown.

---

## 5. Venue and event travel table — operations, parking and sources

| ID | Parking supply and remote arrangements | Event transit and start/end service | Route/closure changes; access constraints; crowds sharing approaches | Direct sources / method |
|---|---|---|---|---|
| V01 | On-site Downtown Commons parking capped at [no more than 3,418 spaces](https://www.cityofsacramento.gov/content/dam/portal/cdd/Planning/Environmental-Impact-Reports/ESC/ESC_Certified_EIR_Vol_2.pdf) under the EIR; remaining demand uses downtown garages. 2012 average vehicle occupancy at the predecessor Sleep Train Arena was [2.27 persons](https://www.phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf) (cited from the 2016 Golden 1 Center TMP). | SacRT adds [six supplemental trains, about 10 trains post-event for one hour; a four-car train carries 600–800](https://www.sacrt.com/services/golden1center.aspx); event group pass $14 for up to four, daily pass $7 (same page). Light rail ends roughly 11 p.m.–midnight; one train per direction is held up to an hour. Roseville Transit's [Game Day Express](https://www.roseville.ca.gov/public_works/transit/services_schedules/game_day_express.php) runs non-stop for Kings regular-season games only (round trip [from $6.50](https://www.roseville.ca.us/news/what_s_happening_in_roseville/riding_with_roseville_transit_is_a_slam_dunk) for residents). | Eastbound Gold Line riders cannot board at 7th & Capitol on event nights ([SacRT](https://www.sacrt.com/services/golden1center.aspx)). 2018 rideshare zones on J, I and 4th streets ([City Express, 2018](https://sacramentocityexpress.com/2018/10/17/dont-miss-tip-off-5-easy-ways-to-get-to-the-kings-home-opener/)) — re-verify. Shares I-5/US-50/Business 80 ramps and downtown garages with V12–V16 and E04. | Kings president's [2016 estimate of ~15% walk/bike/transit](https://inhabitat.com/photos-sacramento-kings-new-leed-platinum-solar-powered-arena/); SacRT's [claim of up to 11% by light rail in 2016–17](https://sacramentocityexpress.com/2017/10/16/sacrt-offers-free-ride-day-for-kings-season-opener/); [1,700 rail riders on some nights](https://www.govtech.com/fs/Is-Uber-Stealing-Sacramento-Calif-Transits-Ridership.html). Inference in Section 6. |
| V02 | As V01. | As V01 (supplemental trains for major arena events); no Game Day Express. | Later finishes approach end of regular rail service. | Estimate; no concert-specific data. |
| V03/V04 | ACE preferred lots near the ballpark open [2 hours before and remain open 90 minutes after](https://www.mlb.com/athletics/ballpark/transportation); fans also park in Old Sacramento and walk across Tower Bridge ([Visit Yolo](https://visityolo.com/an-insiders-guide-to-an-as-game/)) — counted as car. Lot shuttles serve accessible parking. Space counts not published. | Yolobus local Route 40's last post-game departures are [10:11 p.m. weekdays, 6:11 p.m. Saturdays, 5:11 p.m. Sundays](https://yolobus.com/baseball/); Route 42A serves Woodland and the airport. Light rail reaches downtown, then a 10–15 minute walk. No dedicated event transit found. | West Sacramento closes roads to all vehicles from [30 minutes before to 60 minutes after the end of the game](https://www.cityofwestsacramento.org/i-want/game-day). Tower Bridge and I Street Bridge approaches shared with downtown crowds (V01, V12–V16). | Estimate from operating facts. Attendance: Athletics 2025 [768,464 total, 9,487 average](https://www.statscrew.com/baseball/stats/t-ATH/y-2025); River Cats [~4,200 average in 2025 (partial season)](https://www.cbsnews.com/sacramento/news/river-cats-final-homestand-welcomes-fans-through-weekend-average). |
| V05 | Cal Expo lots; Republic FC parking [$15](https://castatefair.com/faq/). Cal Expo total reported as [15,000 spaces](https://rvshare.com/events/fairs/california-state-fair) by a commercial secondary source (unconfirmed). | Rideshare drop-off at Cal Expo Main Gate per a secondary summary of the club's guide ([charter-bus site](https://rosevillepartybuscompany.com/blog/rent-a-bus-to-cal-expo/)); no rail. | Shares Exposition Blvd and Business 80 with E01 and with the Aftershock park-and-ride hub (E02). | Estimate. 2025 league average [9,829](https://en.wikipedia.org/wiki/2025_Sacramento_Republic_FC_season). |
| V06 | Event parking in Lots 7, 8 and Parking Structure III ([Sac State](https://hornetsports.com/facilities/hornet-stadium/1)). | University/65th St light rail station listed as the stadium's transit stop ([Wikipedia](https://en.wikipedia.org/wiki/Hornet_Stadium_(Sacramento))); no event service found. | Shares US-50 and J Street; about two miles from Cal Expo per a [stadium feasibility report](https://www.stadiumjourney.com/stadiums/sacramento-state-hornets-stadium-dilemma-renovation-vs-new-construction). 2026 home crowds [18,523; 13,322; 11,007](https://en.wikipedia.org/wiki/2026_Sacramento_State_Hornets_football_team). | Estimate. |
| V07 | Designated grass lot plus campus lots; Unitrans runs fare-free [pre-game shuttles from Lot 53](https://unitrans.ucdavis.edu/es/node/531) with no post-game return trip. | No direct bus lines; Unitrans stops ~10-minute walk ([UC Davis Athletics](https://ucdavisaggies.com/facilities/?id=6)). Special evening V-line service on some event days ([Unitrans](https://unitrans.ucdavis.edu/es/node/526)). | I-80 Yolo Causeway shared with Sacramento-bound traffic; Causeway Classic alternates with V06. | Estimate; bike observation in Section 6. |
| V09 | [6,720 spaces](https://www.visitsacramento.com/listing/toyota-amphitheatre/6831/) (designer cites [7,000+](https://www.hellermanus.com/toyota-amphitheatre)); parking described as free by Visit Sacramento but as [$20 advance / $25 day-of in 2026](https://karlobag.eu/en/music/news/whiskey-myers-wheatland-at-toyota-amphitheatre-tickets-4h1fx/) by a secondary source (conflict). Bus/RV spaces in Lot A ([Ticketmaster](https://www.ticketmaster.com/venue/229440?tab=addOns)). | None found; Uber named official rideshare (same page). | About [35 miles from downtown Sacramento](https://www.visitsacramento.com/listing/toyota-amphitheatre/6831/); single rural approach area also serving V11 (inference). | Structural estimate + parking bound. |
| V10 | [3,700-space parking structure](https://www.thundervalleyresort.com/faq) plus surface lots. | None found. | Lincoln, Placer County; SR 65 corridor (inference). | Structural estimate. |
| V11 | Casino property parking (count not found). | None found. | Wheatland; [35 miles north of Sacramento](https://seminoletribune.org/?p=43708). | Structural estimate. |
| E01 | Cal Expo lots, [$15 for the fair](https://castatefair.com/faq/); 15,000-space figure unconfirmed (see V05). | SacRT special stops on Routes 67/68 near the Main Gate per a [secondary source](https://rosevillepartybuscompany.com/blog/rent-a-bus-to-cal-expo/) (verify with SacRT). | Daily attendance historically [20,000–60,000](https://en.wikipedia.org/wiki/California_State_Fair) (2018); 2026 averaged ~38,200/day (650,000 ÷ 17 days, a floor because the published total is "more than"). From 2027 the fair overlaps early-October events (Section 7.3). | Estimate. |
| E02 | No on-site parking except ADA; limited paid lots; official [park-and-ride from Cal Expo](https://aftershockfestival.com/getting-here/) ($30/day, $115 four-day in 2026; service from 60 minutes before gates to 75 minutes after close — [State Hornet](https://statehornet.com/2026/09/what-you-need-to-know-aftershock-2026/)). | SacRT free with wristband and supplemental bus from downtown ([CapRadio](https://www.capradio.org/articles/2026/09/29/5-things-to-know-about-the-14th-annual-aftershock/); [organizer](https://aftershockfestival.com/getting-here/)). Rideshare drop on Bercut Drive (CapRadio). | Hotel demand reported from Davis to Lincoln ([CBS Sacramento](https://www.cbsnews.com/sacramento/news/aftershock-festival-sacramento-2025-details)). I-5/Jibboom approach; park-and-ride hub at Cal Expo shares lots with V05/E01. Daily average 2025 ≈ 41,000 (164,000 ÷ 4). | Estimate. |
| E03 | Runners must use official start buses ([SRA](https://runsra.org/?p=10666)). | Bus-only start access. | Closures from Folsom to the Capitol; downtown closures Dec 5–7, 2025 ([City Express](https://sacramentocityexpress.com/2025/12/04/streets-are-closing-dec-5-7-for-the-california-international-marathon-heres-where/amp)). | Organizer facts; no split. |
| E04 | Stadium site adjacent to Sacramento Valley Station; the 2016 SEIR analyzed an MLS stadium of [19,621 initial, expandable to 25,000](https://www.cityofsacramento.gov/content/dam/portal/cdd/Planning/Environmental-Impact-Reports/Railyards-Specific-Plan/Railyards-Final-SEIR_October-2016.pdf), with a draft event TMP appendix. | Not yet operating. | Will form a downtown cluster with V01 (inference). | [SEIR transportation chapter](https://www.cityofsacramento.gov/content/dam/portal/cdd/Planning/Environmental-Impact-Reports/Railyards-Specific-Plan/412Transportation.pdf) accessible; mode split not extracted in this pass. |

---

## 6. Worked inferences (bounds, not measured shares)

### 6.1 Golden 1 Center light-rail ridership (V01)

| Step | Value | Basis |
|---|---|---|
| Reported rail riders on some arena nights (2017) | 1,700 | [Sacramento Bee via GovTech](https://www.govtech.com/fs/Is-Uber-Stealing-Sacramento-Calif-Transits-Ridership.html); unclear whether persons or boardings, gross or incremental |
| Attendance denominator | 17,500 | EIR design capacity; actual attendance on those nights not published |
| If 1,700 = persons, gross | 9.7% | 1,700 ÷ 17,500 |
| If 1,700 = boardings (arrival + return) | 4.9% | 850 persons ÷ 17,500 |
| Baseline subtraction | Unknown for typical nights | Opening-day tweet compared 3,000 riders with a usual [500](https://x.com/RideSacRT) for the same window, but Oct 1, 2016 was an opening celebration, not a typical ticketed event — excluded |
| If ~500 of the 1,700 were background riders | 3.4%–6.9% | (1,700 − 500) as boardings or persons |
| Agency ceiling | "up to 11%" in 2016–17 | [SacRT via City Express](https://sacramentocityexpress.com/2017/10/16/sacrt-offers-free-ride-day-for-kings-season-opener/) — a maximum, not an average |
| Supply check | 6,000–8,000 seats in the post-event hour (34%–46% of 17,500) | 10 trains × 600–800 ([SacRT](https://www.sacrt.com/services/golden1center.aspx)); capacity is not the binding constraint |
| Trend caution | Light rail ridership fell from 9.7M (2018) to 7.41M (2025) | [Wikipedia, SacRT light rail](https://en.wikipedia.org/wiki/SacRT_light_rail); event shares may be lower than 2016–17 |

Result used: public transit ≈ 8% (range ~3%–11%). Combined with the team's 15% non-car projection, the car-involved share is ~0.85 (range 0.78–0.90). The predecessor arena's [2.27 persons per vehicle](https://www.phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf) means a full 17,500 crowd at 0.85 car share implies ~6,550 vehicles before rideshare deadheading — vehicle pressure is higher than the person share suggests.

### 6.2 Toyota Amphitheatre parking bound (V09)

6,720 spaces × 2.27–2.7 persons per vehicle = 15,254–18,144 people, i.e., 82%–98% of an 18,500 sellout (7,000+ spaces gives 15,890–18,900). This only shows parking can carry nearly all attendees; the 0.97 estimate rests on the absence of any transit or event shuttle, not on the space count.

### 6.3 UC Davis bike observation (V07)

A reviewer counted over 1,000 occupied bike spots at a 2012 game at roughly 80% of capacity (~8,600 people) — at least ~12% by bike ([Stadium Journey](https://www.stadiumjourney.com/stadiums/uc-davis-health-stadium-uc-davis-aggies); anecdotal). Bike parking is roughly fixed, so at the 2025 record crowd of 17,217 the same 1,000 bikes would be ~5.8%. Car share therefore likely rises with crowd size: ~0.70–0.75 for typical games, ~0.80–0.88 for sellouts. One value (0.77) is recommended with a wide range.

### 6.4 Peer comparison anchor

A 2024 Philadelphia peer review lists Oakland Coliseum (BART-served) at [70% auto / 24% transit / 7% other](https://www.phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf) for a 2017 weekday evening game and Seattle's T-Mobile Park at 82% auto (2001). Sacramento venues have much weaker rail access than BART-served Oakland, so car shares above 0.70 everywhere and near 0.85 at the best-served downtown arena are consistent with peers.

---

## 7. Regional conclusion

### 7.1 Weighted car shares

**Capacity-weighted (fixed ≥5,000 configurations; one configuration per venue).** Kings configuration used for Golden 1 Center; Athletics for Sutter Health Park; athletics capacity for University Credit Union Center.

| Venue (config) | Weight (capacity) | Car share used | Type |
|---|---|---|---|
| V01 Golden 1 Center (Kings) | 17,608 | 0.85 | Estimated |
| V03 Sutter Health Park (Athletics) | 14,014 | 0.88 | Estimated |
| V05 Heart Health Park | 11,569 | 0.93 | Estimated |
| V06 Hornet Stadium | 21,195 | 0.86 | Estimated |
| V07 UC Davis Health Stadium | 10,743 | 0.77 | Estimated |
| V08 University Credit Union Center | 6,003 | 0.85 | Fallback (unknown) |
| V09 Toyota Amphitheatre (Wheatland, outside MSA) | 18,500 | 0.97 | Estimated |
| **All seven** | **99,632** | **0.879** | |
| **Excluding Toyota (MSA only)** | **81,132** | **0.859** | |
| **Sensitivity: all at low end / high end of ranges** | 99,632 | **0.817 / 0.930** | |

**Typical-attendance-weighted.** Weights: Kings 16,372 (mean of seven [early 2025–26 home games](https://en.wikipedia.org/wiki/2025%E2%80%9326_Sacramento_Kings_season), not a season average); Athletics 9,487 (2025 season average); Republic FC 9,829 (2025 league average); Sac State 13,348 ([2023 season average](https://en.wikipedia.org/wiki/Sacramento_State_Hornets_football)); UC Davis 13,755 (mean of the four [2025 games listed](https://en.wikipedia.org/wiki/UC_Davis_Health_Stadium), biased high toward record crowds). University Credit Union Center and Toyota Amphitheatre are excluded (no attendance data).

| Set | Total weight | Weighted car share |
|---|---|---|
| Five fixed venues | 62,791 | **0.852** |
| Plus State Fair (38,235/day × 0.90) and Aftershock (41,000/day × 0.85) as separate event rows | 142,026 | **0.864** |

The event rows are not simultaneous with each other in a normal year, and multi-day totals were converted to daily averages.

### 7.2 Do huge outlying venues obscure the downtown pattern?

Not materially. The downtown riverfront pair (Golden 1 Center and Sutter Health Park) capacity-weights to **0.863**; adding all other ≥5k venues moves the figure to 0.859 without Toyota and 0.879 with it. The single largest outlying room raises the regional figure by about two points; UC Davis pulls it down by a similar amount. Even the best-served downtown arena sits near 0.85, so the regional pattern is genuinely car-dominant rather than a downtown transit pattern hidden by exurban amphitheatres.

### 7.3 Clusters, shared roads and shared audiences (separate findings)

**Venue clusters.**
1. *Downtown / riverfront / Railyards:* Golden 1 Center, SAFE Credit Union district (V12, V13, V16), Sutter Health Park across Tower Bridge, and Republic Stadium from 2028. Shared downtown garages and light-rail stations; A's fans also park in Old Sacramento ([Visit Yolo](https://visityolo.com/an-insiders-guide-to-an-as-game/)).
2. *Cal Expo grounds:* Heart Health Park, State Fair, Cal Expo events, the Aftershock park-and-ride hub, and a possible future Sac State stadium on the former racetrack grandstand ([CBS Sacramento](https://www.cbsnews.com/sacramento/news/sac-state-new-hornet-stadium-cal-expo-horse-racing-track/)). Shared lots and gates.
3. *Wheatland:* Toyota Amphitheatre and Hard Rock Live, both about 35 miles north of Sacramento in Yuba County.

**Shared roads and approaches.** Tower Bridge and I Street Bridge (V03 ↔ downtown); I-5 and Jibboom Street (E02 ↔ downtown); Business 80/Exposition Blvd (V05, E01, E02 park-and-ride); US-50/J Street (V06); I-80 Yolo Causeway (V07 ↔ Sacramento).

**Calendar overlap risk from 2027.** The fair's move to Sep 17–Oct 3 ([CapRadio](https://www.capradio.org/articles/2025/12/15/ca-state-fair-announces-new-fall-dates-by-2027/)) places it alongside the Athletics' final scheduled West Sacramento homestand (last home game [Sep 26, 2027](https://en.wikipedia.org/wiki/Sutter_Health_Park)), Republic FC's late season at Heart Health Park (same lots), college football, Kings preseason, and — if Aftershock keeps its early-October slot — a festival whose park-and-ride hub is Cal Expo itself. Aftershock 2027 dates are not yet published; re-check.

**Shared audiences.** The Causeway Classic alternates between V06 and V07 ([2025 at UC Davis: 14,590](https://en.wikipedia.org/wiki/UC_Davis_Health_Stadium); [2024 at Hornet Stadium: 16,239](https://en.wikipedia.org/wiki/2024_Sacramento_State_Hornets_football_team)). Kings fans from Placer County use the Roseville Game Day Express. Aftershock draws out-of-region visitors who fill hotels across the region. No evidence was found for a shared event audience with the Bay Area.

---

## 8. Required closing items

### 8.1 Recommended existing city type and rationale; strongest contrary evidence

**Recommendation: `hub`.**

- *Car share:* All evidence points to person car shares of roughly 0.82–0.93 (sensitivity range of the capacity-weighted figure), with point estimates of 0.85–0.88. The existing 0.85 fallback for `hub` is consistent with this; the 0.40 `transit` fallback is roughly half of any defensible Sacramento value.
- *Spill:* Two real venue clusters (downtown/riverfront and Cal Expo) share bridges, freeway ramps, garages, lots and light-rail stations, and their calendars will overlap more from 2027. That supports the in-between setting's treatment of spill over pure sprawl.

**Strongest contrary evidence (toward `sprawl`).** Regional commuting is ~92% by car among travelers and ~2% by transit (background only); over half of ≥5k capacity sits at sites with their own large lots and little or no transit (Cal Expo, Sac State, UC Davis, Wheatland, Lincoln); and the predecessor arena's 2012 occupancy of 2.27 persons per vehicle shows a car-centered regional habit.

**Strongest contrary evidence (toward `transit`).** Golden 1 Center was built under SB 743 VMT targets with five nearby light-rail stations and event-night supplemental trains; SacRT reported up to 11% by rail in its first season. Even at that ceiling the arena remains far above 0.40 car share.

**Venue exceptions (override the fallback).** Toyota Amphitheatre, The Venue at Thunder Valley and Hard Rock Live (~0.97); Heart Health Park (~0.93); UC Davis Health Stadium (~0.77, lower than the fallback).

### 8.2 Car-share values keyed to venue rows

No row has a **measured** value. Companion-row mapping is pending because the companion answer was unavailable.

| ID | Value | Category | Basis |
|---|---|---|---|
| V01 | 0.85 (0.78–0.90) | Projected + estimated | 2016 team projection (projected); SacRT claim and ridership inference (estimated) |
| V02 | 0.88 (0.80–0.93) | Estimated | Adjusted V01 |
| V03 | 0.88 (0.82–0.94) | Estimated | Operating facts |
| V04 | 0.88 (0.82–0.94) | Estimated | V03 applied |
| V05 | 0.93 (0.88–0.97) | Estimated | Operating facts |
| V06 | 0.86 (0.78–0.92) | Estimated | Operating facts |
| V07 | 0.77 (0.65–0.88) | Estimated | Anecdotal bike count + shuttle facts |
| V08, V12–V16 | 0.85 | Fallback (unknown) | No evidence |
| V09 | 0.97 (0.94–0.99) | Estimated | Structural + parking bound |
| V10, V11 | 0.97 (0.93–0.99) | Estimated | Structural |
| E01 | 0.90 (0.85–0.95) | Estimated | Operating facts |
| E02 | 0.85 (0.75–0.92) | Estimated | Operating facts |
| E03 | 0.85 | Fallback (unknown) | Linear course |
| E04 | 0.85 until SEIR checked | Projection exists, not extracted | 2016 SEIR |

### 8.3 Boundary recommendation and inconsistencies between briefs

**Recommended boundary:** the Sacramento-Roseville-Folsom MSA — El Dorado, Placer, Sacramento and Yolo counties ([OMB 2023 delineation, 2025 population ~2.48M](https://en.wikipedia.org/wiki/California_statistical_areas)) — with Wheatland (Yuba County) included as a named edge municipality because two of its venues serve the Sacramento market. Sacramento County (~1.62M) plus West Sacramento is the core. OMB's delineations rest on commuting ties, which supports the MSA as the outer ring; county-to-county commute flows were not separately retrieved.

| Edge case | Treatment | Evidence |
|---|---|---|
| West Sacramento (Yolo) | **Core, not edge** | Hosts Sutter Health Park, across Tower Bridge from downtown |
| Davis / Woodland (Yolo) | Inside boundary (MSA) | Causeway Classic link with Sac State; Yolobus 42A connects Woodland to the ballpark |
| Roseville / Lincoln (Placer) | Inside boundary (MSA) | Roseville Game Day Express to Kings games; The Venue at Thunder Valley |
| Wheatland (Yuba) | Edge — include as named exception | Outside the MSA but inside the [7-county CSA](https://en.wikipedia.org/wiki/Sacramento_metropolitan_area); Toyota Amphitheatre and Hard Rock Live market to Sacramento |
| Folsom (Sacramento) / El Dorado | Inside | CIM starts at Folsom Dam; El Dorado is in the MSA |
| Bay Area | Separate metro | No public evidence of a shared event-crowd relationship found |

**Inconsistencies between briefs.** (1) The starting area treats Yolo as an edge, but West Sacramento holds a ≥5k venue contiguous with downtown. (2) Wheatland is in Yuba County, outside both the stated core and the Placer/Yolo edges, yet the brief asks for it explicitly. (3) El Dorado County is in the MSA but is not named in the brief. (4) "Thunder Valley Amphitheatre" is a defunct venue. (5) The companion venue answer was not available, so row keys do not yet align.

### 8.4 Data gaps, model limitations, source conflicts and inaccessible sources

**Data gaps.**
- No public intercept survey or measured event mode split was found for any Sacramento venue or event.
- Golden 1 Center EIR Volume 1, Table 4.10-7 (projected external mode split) is listed in the [EIR contents](https://www.cityofsacramento.gov/content/dam/portal/cdd/Planning/Environmental-Impact-Reports/ESC/ESC_Certified_EIR_Vol_2.pdf), but Volume 1 was not located online in this pass.
- The September 2016 Golden 1 Center Transportation Management Plan (Fehr & Peers) and any SB 743 monitoring reports were not found publicly; the team has publicized a [20% cut in miles per attendee and 36% cut in travel GHG per attendee](https://www.architectmagazine.com/technology/the-sacramento-kings-golden-1-center-sets-a-green-paradigm_o/), which are VMT/emissions metrics, not mode shares.
- The Railyards SEIR transportation chapter and its draft MLS event TMP appendix are accessible but their mode split was not extracted.
- SacRT does not publish per-event ridership; the only figures are from 2016–17.
- Parking space counts not found for Sutter Health Park, Sac State and Hard Rock; the Cal Expo 15,000-space figure is from commercial secondary sites.
- Kings season-average attendance not retrieved (seven-game sample used).
- County fairs, several 1,000–3,000 rooms, and GoldenSky/Sol Blume were not covered.

**Model limitations.**
- Person car share understates vehicle pressure where occupancy is low and where rideshare vehicles make empty repositioning trips.
- Post-event departures are sharper than arrivals; a single share does not capture timing.
- Linear events (CIM) and multi-day festivals do not behave like single fixed crowds.
- Summer-to-fall moves (State Fair) change heat, daylight and school-day overlap; no evidence on how splits shift.

**Source conflicts (preserved).**

| Item | Values | Handling |
|---|---|---|
| Golden 1 Center capacity | 17,500 (EIR); 17,608 (Kings); up to 19,000 (special events) | Configuration-specific; 17,608 used for Kings |
| Sutter Health Park | 14,014 total vs 10,624 fixed seats | Total used (includes lawn/standing) |
| SAFE CU Performing Arts Center | [2,193 post-renovation](https://sacramentocityexpress.com/2021/09/15/newly-renovated-safe-credit-union-performing-arts-center-opens-with-the-sacramento-premiere-of-hamilton/); [2,452](https://en.wikipedia.org/wiki/Sacramento_Convention_Center_Complex); [~2,326](https://www.ibdb.com/touring-theatre/safe-credit-union-performing-arts-center-653); [2,400](https://info.safecu.org/hubfs/SAFE-Credit-Union-Convention-Center-and-Performing-Arts-District.pdf) | City's 2021 post-renovation figure preferred; others likely pre-renovation |
| University Credit Union Center | [5,575 concert](https://ces.ucdavis.edu/ucenter); [6,003 athletics](https://ucdavisaggies.com/facilities/?id=5); [7,600](https://en.wikipedia.org/wiki/University_Credit_Union_Center); [8,000](https://ces.ucdavis.edu/node/141) | 6,003 used for athletics configuration |
| Toyota Amphitheatre parking | 6,720 vs 7,000+ spaces; free vs $20/$25 | Lower count used for the bound; price conflict unresolved |
| UC Davis record crowd date | Wikipedia lists both Sep 20 and Sep 22, 2025 | Athletic director's note confirms it was the [season opener](https://www.davisenterprise.com/sports/aggie-roundup-ucd-fans-filling-stadium/article_f2ef6457-8e5a-4c6f-b295-7086f245ac94.html) |
| Republic Stadium opening | [2027 (Aug 2025)](https://www.sacrepublicfc.com/news/2025/08/18/republic-fc-opens-new-stadium-deposit-campaign-following-groundbreaking-ceremony/) vs [2028 (Mar 2026)](https://www.sacrepublicfc.com/?p=45831) | Newer 2028 date used |
| Sac State stadium | [Campus rebuild, 25,000 by 2028](https://aol.com/sacramento-state-announces-plan-25-191253512.html) vs [Cal Expo grandstand option](https://www.cbsnews.com/sacramento/news/sac-state-new-hornet-stadium-cal-expo-horse-racing-track/) | Treated as unresolved proposal |

**Inaccessible or not-accessed sources.** Sacramento Bee originals were not accessed directly (likely paywalled); the 2017 ridership figure comes from a syndicated copy. No access controls were bypassed. ESC EIR Volume 1 and the 2016 Golden 1 Center TMP could not be located through normal public search.

### 8.5 Confirmed transport or venue changes through 2028

| Change | Status | Date | Suggested re-check |
|---|---|---|---|
| SacRT S700 low-floor trains in service | **Completed** | [Sep 1, 2024](https://x.com/RideSacRT) | — |
| Folsom 15-minute weekday light rail | **Completed** (weekends remain 30 min) | [Jan 5, 2025](https://www.folsom.ca.us/Home/Components/News/News/3880/211?fsiteid=1&npage=9) | Mid-2027 (reliability) |
| Blue Line platform conversions with temporary station closures | **Scheduled/under way** | [Through 2027](https://www.sacrt.com/modernization/) | Quarterly through 2027 |
| Hornet Pavilion (3,000) opened | **Completed** | [Nov 2025](https://www.stadiumjourney.com/stadiums/hornet-pavilion-sacramento-state-hornets) | — |
| Sac State football in FBS (MAC) | **Completed** | [2026 season](https://en.wikipedia.org/wiki/2026_Sacramento_State_Hornets_football_team) | — |
| State Fair moves to fall (Sep 17–Oct 3) | **Board decision, described as permanent** | [From 2027](https://www.capradio.org/articles/2025/12/15/ca-state-fair-announces-new-fall-dates-by-2027/) | Spring 2027 (dates, transit plan) |
| Athletics leave Sutter Health Park | **Scheduled**; Las Vegas ballpark [on schedule as of May 2026](https://www.espn.com/mlb/story/_/id/48840195/a-2b-las-vegas-stadium-remains-schedule-open-2028); option year exists | Final scheduled home game Sep 26, 2027 | Jan 2027 and Sep 2027 |
| Republic Stadium at The Railyards (20,000+) | **Under construction** (groundbreaking Aug 18, 2025; site prep completed late 2025) | [Opening 2028](https://www.sacrepublicfc.com/?p=45831) | Q2 2027, Q1 2028 |
| Heart Health Park loses primary tenant | **Follows Republic Stadium opening** | 2028 | Q1 2028 |
| Sac State new football stadium | **Proposal** (site undecided) | Campus option targeted 2028; Cal Expo work could begin 2027 | Mid-2027 |
| UC Davis Health Stadium renovation | **Announced** ([$50 million, Nov 2025](https://en.wikipedia.org/wiki/UC_Davis_Health_Stadium)); schedule not found | Unknown | Early 2027 |
| Aftershock 2027 dates (overlap with fall fair) | **Not announced** | Early October pattern | Spring 2027 |
