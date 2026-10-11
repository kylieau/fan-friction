# Milwaukee city-type answer — event travel evidence for Fan/Friction

Prepared **October 11, 2026** from public sources only. Every number links to its source; access date for all links is 2026-10-11 unless a publication date is given.

**Coverage warning up front:** the companion venue answer was not available to me, so the venue list below was enumerated independently (Section 2) and gaps are listed explicitly. No Milwaukee venue or festival publishes an observed attendee mode-split survey that I could find. Every car-share value below is therefore either a **transparent estimate** or **unknown with a provisional default** — none is "measured." The single strongest quantitative evidence is Summerfest transit ridership reported by MCTS, which supports an event-day inference (Section 4.1).

---

## 0. Short answer

- **Recommended city type: `hub` (in between).** Milwaukee is car-dominant everywhere it can be checked, but it has a genuine downtown/lakefront core where many 1,000–23,000-seat rooms share garages, the Marquette Interchange/I-794/I-43 approaches and The Hop. Its two largest crowds (Brewers, State Fair) sit together on the I-94 west corridor outside downtown.
- Because `sprawl` and `hub` both default to 0.85 car share in the current implementation, the choice between them does not change fallback car share — only spill behaviour. Nothing in the evidence supports `transit` (0.4): the highest-transit event (Summerfest) is estimated at roughly 0.75 car.
- **Capacity-weighted regional car share ≈ 0.87**, but 64% of that capacity sits in rooms with no defensible venue value (provisional 0.85). **Typical-event-weighted ≈ 0.85.** Details in Section 5.

---

## 1. Method and accounting rules

| Rule | How it is applied here |
|---|---|
| Unit | **Person share** of attendees, not vehicles. Vehicle counts are only discussed where a source gives parking stalls; stalls never establish attendance or mode share. |
| Car | Private car, carpool, taxi and rideshare together. |
| Drive + streetcar inside the core | Someone who parks in a downtown garage and rides The Hop or walks to Henry Maier Festival Park is counted as **car**, because the car trip ends inside the same pressure area. |
| Remote park-and-ride shuttle | MCTS Summerfest shuttles run from College Avenue, Brown Deer and Hales Corners park-and-ride lots ([Urban Milwaukee press release, May 13 2026](https://urbanmilwaukee.com/pressrelease/mcts-and-summerfest-announce-shuttle-service-for-2026-and-convenient-transit-options/)). Riders are shown in a **separate "P&R shuttle" column**, excluded from the recommended venue-area car share but added back in a "car-involved" figure. They are never treated as wholly non-car. |
| Bar/hotel shuttles | Private, not public transit. Shown under "other"; half are assumed car-involved (patrons often drive to the bar) — an assumption, not sourced. |
| Ridership → people | Transit "rides" reported "to and from" an event are treated as one-way boardings; people ≈ rides ÷ 2. |
| Denominator | Organiser gate/turnstile totals. These include free-promotion entries (about 20% at Summerfest 2025 per [Spectrum News, Jul 15 2025](https://spectrumnews1.com/wi/milwaukee/news/2025/07/15/summerfest-2026-dates)) and are daily totals, **not concurrent crowds**. |
| Commute data | Background only. Milwaukee metro ACS 2020 5-year: 86.8% drive (including 7.6% carpool), 2.9% transit ([Stacker/Census, Jul 7 2022](https://stacker.com/stories/wisconsin/milwaukee/see-what-average-commute-milwaukee)). Not used as an event share. |
| Estimates vs unknown | An estimate is given only where local quantitative evidence exists (event ridership, absence/presence of event transit, parking scale, fan origin). Otherwise "unknown" with the existing default named. |

---

## 2. Venue inventory and coverage (independent enumeration)

One configuration per room is used for weighting; mutually exclusive configurations are listed but never summed.

| ID | Venue (municipality) | Configuration used | Capacity | Status / note | Source |
|---|---|---|---|---|---|
| V1 | American Family Field (Milwaukee) | Brewers baseball | 41,900 | Open; 2026 regular-season avg 34,431 | [meetstadium (2026)](https://meetstadium.com/stadiums/american-family-field/); [BizTimes (Sep 2026)](https://biztimes.com/?p=642805) |
| V2 | Fiserv Forum (Milwaukee) | Basketball (Bucks, Marquette) | 17,385 (hockey/indoor football 15,178) | Open | [Ticketmaster (2026)](https://blog.ticketmaster.com/step-inside-fiserv-forum-milwaukee-wi/) |
| V3 | American Family Insurance Amphitheater (Henry Maier Festival Park) | Concert | 23,000 | Open | [BizTimes (Jul 2026)](https://biztimes.com/?p=638297) |
| V4 | BMO Pavilion (Henry Maier Festival Park) | Concert | ~10,000 | Open; capacity from 2012 opening release | [BMO newsroom (Jun 27 2012)](https://usnewsroom.bmo.com/2012-06-27-Its-Time-to-Play-the-Music-BMO-Harris-Pavilion-Turns-Up-the-Volume-at-Summerfest) |
| V5 | UW–Milwaukee Panther Arena (Milwaukee) | Hockey (Admirals) | 9,652 (basketball ~11,000) | Open; future studied, historic designation in effect | [AHL arena list](https://en.wikipedia.org/wiki/List_of_American_Hockey_League_arenas); [Daily Reporter](https://dailyreporter.com/?p=546030) |
| V6 | Landmark Credit Union Live (Milwaukee, Deer District) | Concert | 4,500 | **Opened Feb 2026** | [Wikipedia (Feb 2026 refs)](https://en.wikipedia.org/wiki/Landmark_Credit_Union_Live) |
| V7 | Miller High Life Theatre (Milwaukee) | Seated theatre | 4,087 | Open; replacement by hotel **proposed** | [Pabst Theater Group rentals](https://pabsttheatergroup.com/rentals/ticketed-event-rentals) |
| V8 | Franklin Field (Franklin) | Milkmen baseball | 4,000 | Open; 2025 avg 1,685 | [Wikipedia](https://en.wikipedia.org/wiki/Franklin_Field_(Wisconsin)); [Stats Crew](https://www.statscrew.com/venues/v-3091) |
| V9 | Eagles Ballroom, The Rave complex (Milwaukee) | GA concert | ~4,000 | **Current capacity/status not verified**; source is an undated older magazine piece | [Milwaukee Magazine (undated)](https://www.milwaukeemag.com/RockAroundtheClock/) |
| V10 | Riverside Theater (Milwaukee) | Theatre/concert | 2,480 | Open | [PTG rentals](https://pabsttheatergroup.com/rentals/ticketed-event-rentals) |
| V11 | Uihlein Hall, Marcus Performing Arts Center (Milwaukee) | Theatre | 2,125 (≈2,100 after 2021 reseat) | Open | [Wikipedia](https://en.wikipedia.org/wiki/Marcus_Center); [FOX6 (2021)](https://fox6now.com/news/uihlein-hall-at-the-marcus-center-gets-renovation) |
| V12 | Allen-Bradley Hall, Bradley Symphony Center (Milwaukee) | Concert hall | 1,650 | Open | [BizTimes (Feb 2020)](https://biztimes.com/milwaukee-symphony-unveils-name-of-new-home/) |
| V13 | Rave Hall, The Rave complex (Milwaukee) | GA concert | ~1,500 | Status not verified; same building as V9 | [Milwaukee Magazine (undated)](https://www.milwaukeemag.com/RockAroundtheClock/) |
| V14 | Pabst Theater (Milwaukee) | Theatre | 1,339 | Open | [PTG rentals](https://pabsttheatergroup.com/rentals/ticketed-event-rentals) |
| V15 | Turner Hall Ballroom (Milwaukee) | GA ballroom | 987 (borderline "around 1,000") | Open | [Pollstar (Apr 21 2022)](https://news.pollstar.com/2022/04/21/living-the-milwaukee-high-life-pabst-theater-group-expands-portfolio-with-miller-high-life-theatre/) |

**Event/open-site rows (not fixed-capacity records):**

| ID | Event / site | Attendance basis | Source |
|---|---|---|---|
| E1 | Summerfest 2026, Henry Maier Festival Park (9 days, Jun 18–20, 25–27, Jul 2–4) | 568,711 gate total (avg ≈ 63,190/day; not concurrent) | [BizTimes (Jul 2026)](https://biztimes.com/?p=638297); dates [MCTS](https://www.ridemcts.com/routes-schedules/summerfest-other-festival-service) |
| E2 | Wisconsin State Fair 2026, State Fair Park, West Allis (11 days, Aug 6–16) | 925,749 (avg ≈ 84,159/day; not concurrent) | [Milwaukee Record (Aug 25 2026)](https://milwaukeerecord.com/city-life/wisconsin-state-fair-announces-2026-attendance-of-925749/) |
| E3 | Other lakefront festivals (PrideFest, Polish, Festa, German, Black Arts, Irish, Mexican Fiesta) | PrideFest 2025: 46,168 over 3 days; Irish Fest ~100,000–130,000+ over 4 days (sources conflict) | [FOX6 (Jun 2025)](https://www.fox6now.com/news/milwaukee-pridefest-2025-sees-record-breaking-turnout); [MCTS lakefront page](https://www.ridemcts.com/routes-schedules/summerfest-other-festival-service/lakefront-festivals); [Urban Milwaukee (May 2022)](https://urbanmilwaukee.com/2022/05/10/murphys-law-how-are-ethnic-festivals-doing/) |
| E4 | IndyCar weekend, Milwaukee Mile (State Fair Park) | 2024: 42,000 over two days (~21,000/day); 2026 held Aug 28–30 | [RACER via Yahoo (Sep 2024)](https://autos.yahoo.com/indycar-jazzed-influx-42-000-012011619.html); [WSFP release (Feb 23 2026)](https://urbanmilwaukee.com/pressrelease/tickets-for-the-2026-snap-on-indycar-weekend-at-milwaukee-mile-begin-tomorrow/) |
| E5 | Non-festival stadium-scale concerts at Henry Maier (e.g., two Garth Brooks shows, 2026) | 44,764 across two shows | [BizTimes (Jul 2026)](https://biztimes.com/?p=638297) |
| E6 | USGA championships at Erin Hills (Town of Erin, Washington County) — historical | 2017 U.S. Open planned for up to 35,000/day; 2025 U.S. Women's Open estimated 40,000–60,000 over 4 days | [Journal Sentinel via PressReader (Jun 11 2017)](https://www.pressreader.com/usa/milwaukee-journal-sentinel/20170611/281492161295878); [WPR (May 2025)](https://wpr.org/news/us-womens-open-golf-championship-erin-hills-wisconsin-lpga) |

**Known coverage gaps:** Deer District plaza watch parties, Milwaukee Air & Water Show, lakefront July 3 fireworks, Brewers concerts at American Family Field, Waukesha/Ozaukee/Washington county fairs, Waukesha County Expo Center, Marquette and UWM smaller venues, Baird Center (convention use, excluded), Iron District stadium (not built). Bucks average attendance was not found, so Fiserv Forum typical crowd uses capacity as a flagged proxy.

---

## 3. Venue travel table

### 3a. Mode split and recommended values

Car includes rideshare/taxi. "P&R shuttle" = drove to a remote lot, then event shuttle (car-involved). Shares are person shares; each row is checked to sum to 100%.

| ID | Venue/event (setup) | Car | Public transit | P&R / event shuttle | Walk/bike/other | Sum | **Recommended car share** (range) | Car-involved | Evidence kind; date; confidence |
|---|---|---|---|---|---|---|---|---|---|
| V1 | American Family Field — Brewers regular season, 2026 | 0.90 | 0.02 | 0.00 (no MCTS game service) | 0.08 (bar/hotel shuttles ~0.06, walk/bike ~0.02) | 1.00 | **0.90** (0.85–0.95) | ~0.93 | Transparent estimate from parking scale, transit availability and fan origin (2020 study); 2026 ops; **medium** |
| V2 | Fiserv Forum — Bucks/concerts | — | — | 0.00 | — | n/a | **Unknown → provisional 0.85** (plausible 0.72–0.90) | — | No survey or projection found; downtown parking/transit context only; **low** |
| V3 | AFI Amphitheater — non-Summerfest concerts | — | — | 0.00 (shuttles are Summerfest-only) | — | n/a | **Unknown → provisional 0.85** (0.72–0.90) | — | Context only; **low** |
| V4 | BMO Pavilion — non-Summerfest concerts | — | — | 0.00 | — | n/a | **Unknown → provisional 0.85** (0.72–0.90) | — | Context only; **low** |
| V5 | Panther Arena — Admirals/Wave/UWM | — | — | 0.00 | — | n/a | **Unknown → provisional 0.85** (0.72–0.90) | — | Context only; **low** |
| V6–V7, V9–V15 | Downtown theatres, ballrooms, LCU Live | — | — | 0.00 | — | n/a | **Unknown → provisional 0.85** (0.72–0.90) | — | Context only; **low** |
| V8 | Franklin Field — Milkmen | 0.95 | 0.01 | 0.00 | 0.04 | 1.00 | **0.95** (0.90–0.98) | ~0.95 | Transparent estimate (suburban site, small crowd, no event transit found); **medium-low** |
| E1 | Summerfest 2026 (festival days) | 0.75 | 0.05 | 0.05 | 0.15 (walk/bike/scooter ~0.11, bar shuttles ~0.04) | 1.00 | **0.75** (0.62–0.84) | ~0.82 | Transparent estimate from MCTS event ridership (2023/2014/2000) + 2026 service; **medium** (Section 4.1) |
| E2 | Wisconsin State Fair 2026 | 0.90 | 0.03 | 0.00 (no MCTS shuttle in 2026) | 0.07 (independent shuttles ~0.03, walk/bike ~0.04) | 1.00 | **0.90** (0.85–0.95) | ~0.92 | Transparent estimate from 2026 transit withdrawal + large on-site parking; **medium-low** |
| E3 | Other lakefront festivals 2026 | 0.80 | 0.06 | 0.00 (no special shuttle) | 0.14 | 1.00 | **0.80** (0.70–0.88) | ~0.82 | Transparent estimate by analogy to E1 minus P&R shuttles; **low** |
| E4 | IndyCar weekend, Milwaukee Mile | 0.92 | 0.02 | 0.00 | 0.06 | 1.00 | **0.92** (0.85–0.97) | ~0.93 | Transparent estimate by analogy to E2 (same site, no event transit found); **low** |
| E5 | Stadium concerts at Henry Maier (non-festival) | — | — | 0.00 | — | n/a | **Unknown → provisional 0.85** | — | Context only; **low** |
| E6 | Erin Hills USGA events (historical) | 2025: ~0.98 | ~0 | 2017: most attendees via remote P&R | — | n/a | Not active through 2028 (no event found) | ~1.00 | Reported operations only; **n/a** |

Missing categories: where a row shows "—", no defensible split exists and only the default is stated; the remainder is unallocated rather than invented.

### 3b. Parking, operations, constraints and sources

| ID | Parking (verified supply) | Event operations (effective dates) | Constraints / shared roads | Sources |
|---|---|---|---|---|
| V1 | More than 12,000 stalls across 16 lots (Brewers); FOX6 reports 13,000 | No dedicated MCTS service since the Brewers Line was cancelled (not run since 2020; confirmed absent 2022). Fans directed to CONNECT 1 BRT (Wisconsin & 44th) and Route 18 (National & 43rd); approved bar/hotel shuttles; rideshare lot in Molitor Lot; Bublr station. 2026 postseason crowds 41,683–42,843 (Oct 2026). | I-94 East-West construction: WisDOT runs a Brewers-specific route planner for the 2026 season; westbound I-94 cut to two lanes between Stadium Interchange and 70th St (from Nov 2025). Shares I-94/Hwy 175 corridor with State Fair Park (~3 mi). | [Brewers lots](https://www.mlb.com/brewers/ballpark/events/outdoor/parking-lots); [FOX6](https://www.fox6now.com/news/brewers-beer-district-stadium-funding); [Urban Milwaukee (Apr 22 2022)](https://urbanmilwaukee.com/2022/04/22/transportation-no-mcts-brewers-bus-line-in-2022/); [Brewers alt. transport](https://www.mlb.com/brewers/ballpark/transportation/alternate-transportation); [Brewers traffic](https://www.mlb.com/brewers/ballpark/transportation/traffic); [WISN (Nov 2025)](https://www.wisn.com/article/motorists-beware-i-94-closures-begin-nov-3-as-part-of-east-west-project/69195480); [BizTimes NLDS](https://biztimes.com/?p=643280) |
| V2 | Adjacent: 5th Street Structure 1,243 stalls (other sources say 1,250 or 1,300) + Highland Structure 738; plus Isaac's Garage, Brewery Structure, meters. No tailgating. | MCTS high-frequency routes nearby (GreenLine, 15, 18, 19, 80 per Wikipedia); The Hop does **not** reach the arena — extension engineered but unfunded; Lyft is official rideshare partner. | Shares Vel R. Phillips/Juneau/McKinley and I-43 ramps with Panther Arena, LCU Live and High Life Theatre (all within ~2 blocks). | [Fiserv Forum parking](https://www.fiservforum.com/parking); [Urban Milwaukee building](https://urbanmilwaukee.com/buildings/new-bucks-arena-parking-garage); [GRAEF](https://graef-usa.com/?p=2761); [TMJ4](https://www.tmj4.com/sports/basketball/milwaukee-bucks/milwaukee-bucks-downtown-parking-garage-to-open-this-week); [Hunzinger](https://hunzinger.com/timeline/highland-parking-garage-upgrades-renovation/); [Wikipedia](https://en.wikipedia.org/wiki/Fiserv_Forum); [WUWM (late 2025)](https://www.wuwm.com/future-hop-milwaukee-streetcar) |
| V3–V4, E1, E3, E5 | Festival lots plus downtown garages; Summerfest promotes three downtown lots (777 N. Milwaukee, 721 and 840 N. Broadway) with Hop connection. Total supply not published. | Summerfest 2026: three MCTS P&R shuttles every ~15 min, $18 round trip cashless, free lot parking; CONNECT 1 stop at The Couture; Hop free, all cars served lakefront through Aug 31, running to 1 a.m.; rideshare zone at North Gate. Other festivals: local routes only, no special shuttle (2026). | Clybourn Street Bridge emergency repairs changed 2026 Summerfest access; I-794/Lincoln Memorial approaches shared with downtown core. 2026: Irish Fest (Aug 13–16) overlapped State Fair (Aug 6–16) — shared metro audience, **different** roads. | [Summerfest 2026 PR](https://urbanmilwaukee.com/pressrelease/getting-to-summerfest-2026-transportation-options-for-festivalgoers/); [MCTS 2026 PR](https://urbanmilwaukee.com/pressrelease/mcts-and-summerfest-announce-shuttle-service-for-2026-and-convenient-transit-options/); [FOX6 (Jun 2026)](https://www.fox6now.com/news/summerfest-2026-planning-guide-what-you-need-know); [TMJ4 (Jun 2026)](https://www.tmj4.com/news/local-news/in-your-community/milwaukee-county/your-complete-guide-to-getting-to-summerfest-shuttles-rideshare-bikes-and-more); [MCTS festivals](https://www.ridemcts.com/routes-schedules/summerfest-other-festival-service) |
| V5–V7 | No venue-specific supply found; shares downtown garages with V2. | Panther Arena and High Life Theatre owned by Wisconsin Center District; consultant recommended replacing the theatre (not the arena) with a convention hotel (Jan 2026) — **proposal**. | Same downtown approaches as V2. | [BizTimes (Jan 29 2026)](https://biztimes.com/study-recommends-replacing-miller-high-life-theatre-with-convention-hotel/); [Daily Reporter tag page](https://dailyreporter.com/tag/miller-high-life-theatre/) |
| V8 | Not verified. | No event transit found. Ballpark Commons mixed-use site. | Outlying (Franklin, south Milwaukee County); no shared approach with other 5,000+ venues identified. | [Wikipedia](https://en.wikipedia.org/wiki/Franklin_Field_(Wisconsin)) |
| V9–V15 | Not verified per venue. | Downtown/Westown; local MCTS; Hop serves East Town/Third Ward theatres (Pabst, Marcus) more than Westown. | Shared downtown approaches; theatre district concurrency with arena events is plausible but unmeasured. | Capacity sources in Section 2 |
| E2, E4 | "Over half" of State Fair Park is parking (operator statement; stall count not published). 2026 general parking $18 Mon–Thu / $22 Fri–Sun. | 2026: **no MCTS park-and-ride shuttles**; Routes 18 and 33 only; independent private shuttles; Transit Plus paratransit. A third-party site reports the Waukesha County fair shuttle did not run in 2026 (driver shortage) — **not verified** with an official source. Earlier years had an MCTS shuttle from Watertown Plank P&R and Freeway Flyers (2017 report). | Right-turn-only entries; I-94 construction with WisDOT dedicated fair routing site (2026). Shares I-94 west corridor with American Family Field. | [State Fair KBYG PDF (Jul 2026)](https://wistatefair.com/fair/wp-content/uploads/2026/07/2026-Wisconsin-State-Fair-Know-Before-You-Go-1.pdf); [TMJ4 (Aug 2026)](https://www.tmj4.com/news/local-news/in-your-community/milwaukee-county/2026-wisconsin-state-fair-know-before-you-go); [MCTS State Fair page](https://www.ridemcts.com/routes-schedules/summerfest-other-festival-service/wisconsin-state-fair); [usahousinginformation (unverified)](https://usahousinginformation.com/wisconsin-state-fair-2026/); [CBS58 (2017)](https://www.cbs58.com/news/parking-and-transportation-at-wisconsin-state-fair) |
| E6 | 2017: two remote lots (Jackson, Summit) with free shuttles, ~30–35 min ride, no-parking on nearby roads; 2025: on-site parking. | Rural roads far from interstates — the constraint that drove 2017's P&R plan. | Washington County, outlying; no shared roads with core. | [PressReader (Jun 11 2017) — may require access](https://www.pressreader.com/usa/milwaukee-journal-sentinel/20170611/281492161295878); [WTMJ (Feb 18 2025)](https://wtmj.com/sports/2025/02/18/truly-the-one-they-want-to-win-the-most-erin-hills-golf-course-now-100-days-out-from-2025-u-s-womens-open) |

---

## 4. Evidence detail

### 4.1 Summerfest: event-day ridership inference

P&R shuttle ridership is event-dedicated, so no baseline subtraction is needed. CONNECT 1 festival rides were reported by MCTS without a disclosed method (it is unclear whether a weekday baseline was subtracted). Local-route and Hop rides to the festival were not published.

| Year | Reported rides | Ride → people | Attendance denominator | Share of attendance | Notes | Source |
|---|---|---|---|---|---|---|
| 2000 | Downtown shuttle 100,000 rides; Freeway Flyers 300,000 riders from 13 P&R lots | — | ~1 million over 11 days | **~25% used bus** (stated by FHWA) | 11-day format; FHWA also notes ~45% of attendees were out-of-town | [FHWA case study](https://ops-dr.fhwa.dot.gov/publications/mitig_traf_cong/summerfest_case.htm) |
| 2014 | 283,446 total (243,576 Freeway Flyer + 39,892 shuttle) | ÷2 = 141,723 | 851,879 | **16.6%** (P&R + shuttle only; local routes excluded) | 11-day format | [FOX6 (Jul 2014)](https://fox6now.com/news/despite-fog-rain-colder-weather-summerfest-attendance-is-up-for-2014) |
| 2019 | Not found | — | 718,144 | — | MCTS ran 10 P&R shuttles with 70 buses | [Urban Milwaukee (Apr 30 2024)](https://urbanmilwaukee.com/2024/04/30/transportation-mcts-expands-summerfest-service/) |
| 2023 | ~45,000 shuttle rides (2 lots, 15 buses) + 17,000 CONNECT; MCTS total "≈67,000" | ÷2 = 33,500 | 624,407 | **5.4%** (shuttle alone 3.6%; CONNECT 1.4%) | Rides include some seasonal employees; local routes and Hop not reported | [Urban Milwaukee (Jul 28 2023)](https://urbanmilwaukee.com/2023/07/28/transportation-mcts-reports-45000-summerfest-shuttle-rides/); [FOX6](https://www.fox6now.com/news/summerfest-2024-attendance-555k-entered-gates) |
| 2026 | Not published; three P&R shuttles (since 2024) | — | 568,711 | **Estimated 8–17%** all public modes | See assumptions below | [BizTimes (Jul 2026)](https://biztimes.com/?p=638297) |

**2026 assumptions (labelled, not sourced):** shuttle rides 45,000–75,000 (three lots vs two in 2023); CONNECT 15,000–25,000; local routes + Hop festival trips 30,000–90,000 (Hop carried 65,382 rides system-wide in all of July 2026, which caps its contribution — [Urban Milwaukee (Aug 28 2026)](https://urbanmilwaukee.com/2026/08/28/the-hop-changes-tracks-to-two-route-configuration/)). Total 90,000–190,000 rides → 45,000–95,000 people → 7.9%–16.7% of gate total. Central split used: 5% P&R shuttle + 5% other public transit. Walk/bike/scooter (~11%) reflects downtown/Third Ward residents and hotel guests — 48% of 2026 ticket purchasers came from outside Wisconsin ([BizTimes](https://biztimes.com/?p=638297)), though purchasers are not unique attendees. Remainder is car, including drive-and-Hop from downtown garages.

**Uncertainty:** the gate denominator includes free-promo and repeat-day visitors; rides include staff; the walk share is the least-evidenced component. Hence the wide 0.62–0.84 range around 0.75.

**What it shows:** Summerfest's transit share has fallen from roughly a quarter (2000) to roughly a tenth or less, tracking MCTS fleet and service shrinkage. It is the only Milwaukee event with evidence of transit materially below a 0.85 car share.

### 4.2 American Family Field

- A 2020 CSL study commissioned by MMAC found about 22% of attendees live in the city, 38% in Milwaukee County (another outlet reports 34%), 86% in Wisconsin and 14% out of state ([WPR (Feb 2020)](https://wpr.org/study-miller-park-has-generated-2-5b-economic-impact-wisconsin); [Athletic Business](https://www.athleticbusiness.com/facilities/stadium-arena/article/15158839/study-brewers-stadium-makes-25b-economic-impact)). With most fans from outside the county and no dedicated transit, a high car share is the defensible reading.
- Illustration only (assumption, not sourced): at 2.5 people per car, 12,000 on-site stalls would carry about 87% of a 34,431 average crowd, before private lots — consistent with a 0.85–0.95 range.
- Low-quality guide sites still describe a Brewers bus line; official Brewers and Urban Milwaukee sources show it does not run. Official sources are used.

### 4.3 Wisconsin State Fair and Milwaukee Mile

The 2026 transit offer was weaker than in earlier years: MCTS states it does not offer park-and-ride shuttles to the fair ([MCTS](https://www.ridemcts.com/routes-schedules/summerfest-other-festival-service/wisconsin-state-fair)), versus an MCTS shuttle and Freeway Flyers in 2017 ([CBS58](https://www.cbs58.com/news/parking-and-transportation-at-wisconsin-state-fair)). With most of the site given to parking, 0.90 is used. IndyCar uses the same site and parking without event transit; 0.92 by analogy, low confidence.

### 4.4 Downtown fixed venues

No mode survey, transportation demand study or projection was found for Fiserv Forum or any downtown theatre. Searches for the arena's traffic study surfaced only parking guides. Adjacent arena parking (~1,981 stalls) covers a small fraction of a 17,385 crowd, so most attendees use the wider downtown garage stock, walk, ride transit or use rideshare — but proportions are unknowable from public data. Provisional 0.85 stands; values as low as ~0.72 are plausible and would matter (Section 5).

---

## 5. Regional conclusion and weighting

### 5.1 Capacity-weighted (fixed rooms, one configuration each)

| Venue | Capacity | Car share used | Basis |
|---|---|---|---|
| American Family Field | 41,900 | 0.90 | Estimate |
| AFI Amphitheater | 23,000 | 0.85 | Provisional default |
| Fiserv Forum (basketball) | 17,385 | 0.85 | Provisional default |
| BMO Pavilion | 10,000 | 0.85 | Provisional default |
| Panther Arena (hockey) | 9,652 | 0.85 | Provisional default |
| Landmark CU Live | 4,500 | 0.85 | Provisional default |
| Miller High Life Theatre | 4,087 | 0.85 | Provisional default |
| Eagles Ballroom | 4,000 | 0.85 | Provisional default (status unverified) |
| Franklin Field | 4,000 | 0.95 | Estimate |
| Riverside | 2,480 | 0.85 | Provisional default |
| Uihlein Hall | 2,125 | 0.85 | Provisional default |
| Allen-Bradley Hall | 1,650 | 0.85 | Provisional default |
| Rave Hall | 1,500 | 0.85 | Provisional default |
| Pabst | 1,339 | 0.85 | Provisional default |
| Turner Hall | 987 | 0.85 | Provisional default |
| **Total / weighted** | **128,605** | **0.869** | 64% of capacity is provisional |

Sensitivity: if all provisional rooms were really 0.72, the weighted value falls to 0.79; at 0.75 → 0.81; at 0.90 → 0.90. **The downtown/lakefront rooms, not the ballpark, decide the regional figure — and they are the least evidenced.**

### 5.2 Typical-attendance-weighted (single typical event day)

| Crowd | Typical size | Car share | Note |
|---|---|---|---|
| Brewers game | 34,431 | 0.90 | 2026 average |
| Summerfest day | 63,190 | 0.75 | Daily gate average, **not concurrent** |
| State Fair day | 84,159 | 0.90 | Daily gate average, not concurrent |
| IndyCar day | 21,000 | 0.92 | 2024 average day |
| PrideFest day | 15,389 | 0.80 | 2025 daily average |
| Franklin Field game | 1,685 | 0.95 | 2025 average |
| Fiserv Forum event | 17,385 | 0.85 | Capacity as proxy (attendance not found) |
| **Weighted** | | **0.852** | Without Fiserv proxy: 0.852; non-festival crowds only: 0.895 |

Missing from typical weighting: all theatre/ballroom crowds, amphitheater/BMO non-festival shows, Panther Arena tenants, other lakefront festivals. Festival daily totals overstate concurrent load because visitors arrive and leave across 10–14 open hours.

### 5.3 Does a large site hide a downtown pattern?

Partly. The single largest fixed room (American Family Field) and the largest event (State Fair) are both car-heavy and outside downtown, which pulls regional averages toward 0.90. Summerfest is the one place where downtown/lakefront travel visibly differs (~0.75). For fixed downtown rooms the data cannot say whether they look like Summerfest or like the ballpark — that is the key unresolved question.

### 5.4 Clusters and relationships (no new distance rule)

| Cluster | Members | Shared roads (sourced/structural) | Shared audience |
|---|---|---|---|
| Downtown Westown/Deer District | Fiserv Forum, LCU Live, Panther Arena, High Life Theatre, Riverside, Turner Hall, Bradley Symphony Center, Rave/Eagles | Vel R. Phillips/Juneau/Kilbourn, I-43 and Marquette Interchange ramps, downtown garages | Concert and sports audiences overlap |
| Downtown East Town / lakefront | Pabst, Marcus Center, Henry Maier (Summerfest, amphitheater, BMO, festivals) | I-794/Lincoln Memorial, Third Ward garages, The Hop | Strong in summer |
| I-94 west corridor | American Family Field, State Fair Park (Milwaukee Mile) | I-94 East-West work zone; WisDOT runs separate route sites for each | Large statewide audiences |
| Outlying | Franklin Field; Erin Hills (historical) | Local roads | Weak |

A shared audience (e.g., Irish Fest and State Fair, Aug 13–16, 2026) is not shared roads: those two use different freeway approaches. American Family Field and State Fair Park genuinely share I-94 approaches; Brewers home dates during the fair should be checked each year.

---

## End matter

### 1. Recommended city type and strongest contrary evidence

**Recommend `hub`.** Reasons: a dense downtown/lakefront core with many rooms sharing garages and freeway approaches; non-trivial (though shrinking) transit and walk shares at core events, best documented for Summerfest; outlying crowds that are clearly car-dependent, which `hub` already tolerates via the 0.85 default.

**Strongest contrary evidence (for `sprawl`):** every estimated value is ≥0.75; the two largest crowds are outside downtown and ~0.90 car; Summerfest transit collapsed from ~25% (2000) to ~5% (2023 reported modes); there is no Brewers bus and no State Fair shuttle; and MCTS proposes a further 25% service cut for 2027. If the model's `hub` spill behaviour assumes meaningful transit relief at core venues, `sprawl` could be argued. **No evidence supports `transit`.** I cannot see how the implementation's spill logic differs between `sprawl` and `hub`, so this recommendation rests on geography, not model internals.

### 2. Car-share values by venue

Keyed to the IDs in Section 2 (independent enumeration; the companion answer was unavailable).

| Kind | Rows | Value |
|---|---|---|
| **Measured** | None found | — |
| **Projected** (official pre-opening) | None found | — |
| **Estimated** | V1 American Family Field | 0.90 (0.85–0.95) |
| | V8 Franklin Field | 0.95 (0.90–0.98) |
| | E1 Summerfest | 0.75 (0.62–0.84); car-involved ~0.82 |
| | E2 Wisconsin State Fair | 0.90 (0.85–0.95) |
| | E3 Other lakefront festivals | 0.80 (0.70–0.88) |
| | E4 IndyCar, Milwaukee Mile | 0.92 (0.85–0.97) |
| **Unknown → provisional default 0.85** | V2–V7, V9–V15, E5 | Plausible 0.72–0.90 |

### 3. Boundary recommendation and inconsistencies

**Recommend the four-county Milwaukee–Waukesha MSA: Milwaukee, Waukesha, Ozaukee, Washington** ([Wisconsin DWD statistical areas, May 2025](https://jobcenterofwisconsin.com/wisconomy/wits_info/downloads/maps/pdf/MSA_BOS_Map2025.pdf)). It matches the brief's working area, and every 5,000+ room found lies in Milwaukee County; Washington County contributes only the historical Erin Hills events.

- **Racine/Kenosha:** keep as edge cases. They are separate statistical areas (Kenosha is shown as its own MSA in the 2025 DWD file but inside the Chicago MSA on an older DWD page — [geography page](https://www.jobcenterofwisconsin.com/wisconomy/pub/geography)). No qualifying venue there was researched. Racine was part of the 1990s five-county ballpark tax district ([WPR](https://wpr.org/study-miller-park-has-generated-2-5b-economic-impact-wisconsin)) — evidence of shared audience, not shared roads.
- **Walworth (Alpine Valley):** excluded per brief; FHWA documents it as a historically severe rural-access event site ([FHWA](https://ops-dr.fhwa.dot.gov/publications/mitig_traf_cong/summerfest_case.htm)).
- **Inconsistency between briefs:** cannot be checked because the companion venue answer was not available. Reconcile its venue IDs and capacities against Section 2 (especially Panther Arena 9,652 vs ~11,000, Turner Hall's sub-1,000 rating, and Rave/Eagles status).

### 4. Model limitations, gaps and source conflicts

**Limitations**
- No observed mode survey exists for any venue; all values are estimates or defaults.
- Car share is a person share; vehicle load depends on occupancy, which is unknown here.
- Remote P&R users load freeways near the lots, not the venue. The model's single car share cannot represent this; the "car-involved" column records it.
- Rideshare is counted as car but loads curbs differently from parking.
- Transit availability is seasonal and event-specific: Summerfest shuttles run only during Summerfest; the Hop sends every streetcar via the lakefront only through Aug 31.
- Festival daily totals are not concurrent crowds.
- Postseason, weather (2024 rain at Summerfest; 2025 State Fair flood closure) and construction shift behaviour year to year.

**Source conflicts**

| Item | Conflict | Choice |
|---|---|---|
| American Family Field capacity | 41,900 vs "over 45,000" ([WPR](https://wpr.org/sea-parking-could-land-around-milwaukee-brewers-stadium-be-home-future-development)) | 41,900 |
| AmFam parking | 12,000+ vs 13,000 | "12,000–13,000" |
| Brewers fans from Milwaukee County | 38% vs 34% | Both shown; immaterial to conclusion |
| 5th Street Structure | 1,243 / 1,250 / 1,300 stalls | 1,243 (specific count) |
| State Fair 2026 change | BizTimes headline says +36.7%; 925,749 vs 892,968 is +3.7% | 3.7% (arithmetic) |
| Irish Fest attendance | ~100,000 (2022) vs 130,000+ (MCTS page) | Range; not used in weighting |
| Panther Arena | 9,652 hockey vs ~11,000 | 9,652 for weighting |
| Riverside / Turner Hall / Uihlein | 2,400–2,500 / 987–1,200 / 2,100–2,125 | Operator figures |
| MCTS 2023 Summerfest rides | 45,000 + 17,000 = 62,000 vs stated ≈67,000 | 67,000 (agency total) |
| Summerfest 2026 dates | One 2025 article gives Jun 19–21 etc.; MCTS/organiser give Jun 18–20 etc. | Jun 18–20, 25–27, Jul 2–4 |
| I-94 East-West completion | "Late 2028" (whole project, Daily Reporter) vs 2032 (BizTimes) vs 2033 (WISN) | West Leg late 2028; full project 2032–33 |

**Access flags:** the 2017 Erin Hills parking article is on PressReader and may not load normally; the Waukesha County fair-shuttle cancellation comes only from a low-quality site and needs official confirmation.

### 5. Confirmed changes through 2028 and re-check dates

| Change | Status | Effective dates | Source |
|---|---|---|---|
| Landmark Credit Union Live (4,500) opened in Deer District | **Done** | Feb 2026 | [Wikipedia](https://en.wikipedia.org/wiki/Landmark_Credit_Union_Live) |
| I-94 East-West West Leg (70th St–Zablocki Dr) | **Funded/under way** | Nov 2025 → late 2028 | [WisDOT (Oct 15 2025)](https://wisconsindot.gov/Pages/about-wisdot/newsroom/news-rel/101525se-94ewbegins.aspx) |
| I-94 Early East Leg (27th St / St. Paul Ave) | **Funded/under way** | Feb 2, 2026 → 2028 | [WisDOT (Jan 21 2026)](https://wisconsindot.gov/Pages/about-wisdot/newsroom/news-rel/012126se-94eel.aspx) |
| Stadium Interchange rebuild (diverging diamond) | **Scheduled, later** | ~2029–2033 | [Roads & Bridges](https://roadsbridges.com/highway-construction/news/55326905/major-i-94-upgrade-kicks-off-in-milwaukee) |
| MCTS service cuts | 2026 cuts **implemented** ($9.3M); 25% cut for 2027 **proposed**, County Board vote expected January | 2027 | [Urban Milwaukee (Jul 15 2026)](https://urbanmilwaukee.com/2026/07/15/transportation-bus-system-plans-25-service-cut/); [CBS58](https://www.cbs58.com/news/mcts-proposes-25-service-reduction-beginning-in-2027-amid-funding-shortfall) |
| The Hop extension to Fiserv Forum | **Proposal, unfunded** | — | [WUWM](https://www.wuwm.com/future-hop-milwaukee-streetcar); [FOX6 (Jan 2025)](https://www.fox6now.com/news/milwaukee-streetcar-extension-hop-expansion-possibly-derailed) |
| Miller High Life Theatre → convention hotel | **Proposal** (study recommendation; financing being explored; historic designation in effect) | — | [BizTimes (Jan 29 2026)](https://biztimes.com/study-recommends-replacing-miller-high-life-theatre-with-convention-hotel/); [Daily Reporter](https://dailyreporter.com/tag/miller-high-life-theatre/) |
| Panther Arena | Retained in study; UWM lease to July 2029 | — | [Stadium Journey (Sep 2025)](https://www.stadiumjourney.com/stadiums/uw-milwaukee-panther-arena-could-be-redeveloped) |
| Iron District 8,000-seat stadium | **Proposal; no groundbreaking** as of July 2026 | — | [Wikipedia](https://en.wikipedia.org/wiki/Milwaukee_Pro_Soccer) |
| IndyCar at Milwaukee Mile | Agreed through 2026; 2027 **not confirmed** in sources found | — | [BizTimes (2024)](https://biztimes.com/ntt-indycar-indy-nxt-return-to-milwaukee-after-decade) |
| Summerfest 2027 / State Fair 2027 dates | **Scheduled** | Jun 24–26, Jul 1–3, Jul 8–10 / Aug 5–15 | [BizTimes](https://biztimes.com/?p=638297); [BizTimes](https://biztimes.com/wisconsin-state-fair-attendance-up-36-7-this-year/) |

**Suggested re-check dates**
- **Late January 2027:** MCTS 2027 service plan vote. Revisit downtown provisional values and E1/E3 transit components.
- **May 2027:** Summerfest/MCTS transit announcement. Confirm P&R shuttles still run.
- **Late July 2027:** request or search MCTS Summerfest ridership (none published for 2024–26).
- **Early August 2027:** State Fair transportation guide. Confirm whether any MCTS shuttle returns.
- **Spring 2027:** Iron District, IndyCar 2027 and Miller High Life Theatre decisions.
- **Late 2028:** I-94 West Leg completion.
- **Any time:** if the Bucks, Wisconsin Center District or MCTS publish arena attendee surveys or event ridership, replace the downtown provisional values first — they dominate the regional figure.
