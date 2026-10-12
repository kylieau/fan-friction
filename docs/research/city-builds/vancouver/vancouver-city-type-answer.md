# Vancouver city-type answer — event travel evidence for Fan/Friction Gridlock

**Research date:** 12 October 2026 (web sources accessed 12 Oct 2026; "current" means as of that date).
**Question:** Which existing city setting (`sprawl`, `hub`, `transit`) best fits how people actually reach event venues in Metro Vancouver, and what car share should apply to each venue/event row?
**Existing defaults assessed (not changed):** car share 0.85 for `sprawl` and `hub`, 0.40 for `transit`; venue-specific shares override them.

---

## 0. Short answer

- **Recommended existing setting: `transit`**, with low confidence and mandatory venue overrides for suburban/outlying venues.
- **No measured attendee mode-split survey was found for any Metro Vancouver venue or event.** Every car share below is either an *estimate* derived from transit-agency ridership data, parking/operations evidence and one out-of-region comparison, or *unknown*. Nothing here is a measured split.
- The downtown stadium district (BC Place + Rogers Arena) holds about 64% of the fixed 5,000+ capacity in the recommended boundary, and its best-evidenced car share (~0.45) is close to the `transit` fallback (0.40) and far from the 0.85 fallback. Capacity-weighted regional estimate ≈ **0.54** (range 0.42–0.69); typical-attendance-weighted ≈ **0.52**. Both sit closer to 0.40 than to 0.85.
- **Strongest contrary evidence:** regional commuting is still about [70% car](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm) (background only), the Hastings Park venues have no rapid transit, and Langley/Abbotsford venues are parking-led; those rows need overrides near or above 0.85.

---

## 1. Scope, sources and method

### 1.1 What was searched
Transit agency event ridership releases (TransLink), host-committee and venue access pages, municipal reports and plans (City of Vancouver, Hastings Park/PNE Master Plan), team/venue parking pages, Statistics Canada commuting and population tables, and news reporting that quotes agency figures. One out-of-region comparison (Seattle's Climate Pledge Arena) is used only to bound estimates.

### 1.2 Companion venue research
The companion venue answer referenced in the brief was **not provided** in this conversation. Venues were enumerated independently (Section 4) and gaps are named (Section 4.3). Row IDs (V1…, E1…) are defined here so a companion answer can be keyed to them later.

### 1.3 Definitions used throughout
- **Car-involved** = private car (driver or passenger), carpool, taxi/rideshare drop-off, and **any** trip that used a car for part of the journey (drive to Park & Ride then SkyTrain, drive to remote lot then shuttle). A shuttle or SkyTrain ride after driving is *not* counted as non-car.
- **Transit** = scheduled bus/SkyTrain/SeaBus/West Coast Express (WCE) reached on foot, by bike or by transit.
- **Event shuttle** = dedicated event routes (e.g., the #16 PNE bus, the temporary #11 FIFA Fan Festival express, post-concert "Swift" shuttles), reported separately where possible.
- **People vs counts:** a *boarding* is each time someone boards any vehicle ([TransLink definition](https://www.translink.ca/news/2026/july/how%20vancouvers%20fifa%20world%20cup%20experience%20was%20powered%20by%20transit)); a *trip* is an origin-to-destination journey including transfers. *Attendance* figures are announced or gate counts and may be ticket-based; PNE figures are multi-day gate visits, not a simultaneous crowd.

### 1.4 Evidence hierarchy applied
1. Observed attendee mode split (survey/count) — **none found locally**.
2. Observed event-day ridership with a stated baseline — used for inference with explicit arithmetic (Section 3).
3. Operations/parking evidence (closures, parking supply/price, service levels) — used to bound estimates.
4. Out-of-region comparison — used only as a bound.
5. Ordinary commuting data — **background only**, never presented as event travel.

---

## 2. Background only: commuting and population (not event travel)

| Metric | Value | Source |
|---|---|---|
| Vancouver CMA main commute mode, car/truck/van, May 2025 | 70.1% | [StatCan LFS table](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm) |
| Vancouver CMA main commute mode, public transit, May 2025 | 21.5% | [StatCan LFS table](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm) |
| Vancouver CMA car share, May 2021 (pandemic-affected) | 74.7% | [StatCan LFS table](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm) |
| Vancouver CMA population, 1 July 2025 | 3,088,036 | [StatCan Table 17-10-0148-01 via todocanada](https://www.todocanada.ca/top-100-population-centres-in-canada-how-the-population-has-changed/amp/) (secondary reproduction; primary table not fetched) |
| Victoria CMA population, 1 July 2025 | 445,090 | [same](https://www.todocanada.ca/top-100-population-centres-in-canada-how-the-population-has-changed/amp/) |
| Abbotsford–Mission CMA population, 1 July 2025 | 223,828 | [same](https://www.todocanada.ca/top-100-population-centres-in-canada-how-the-population-has-changed/amp/); [citypopulation.de](https://www.citypopulation.de/php/canada-metro.php) |

Commuting data describe work trips by workers, measured in May. They say nothing direct about evening/weekend event trips, visitor travel, or trips to venues with closed roads and surge parking prices. They are listed only to show the regional context that the event evidence is set against.

---

## 3. Event-travel evidence and ridership inference

### 3.1 Observed event-day transit data (Metro Vancouver)

| Evidence | Event / date | What was observed | What it cannot tell us |
|---|---|---|---|
| TransLink post-tournament release ([Jul 13 2026](https://www.translink.ca/news/2026/july/how%20vancouvers%20fifa%20world%20cup%20experience%20was%20powered%20by%20transit)) | 7 FIFA World Cup matches at BC Place, Jun 13–Jul 7 2026 | +87,000 boardings on an average match day (+8.1% vs a modelled "typical day"); SkyTrain stations around BC Place +54% on match days; system +600,000 boardings across 7 match days; non-match days +4.2% | No attendee survey; increments mix match-goers, fan-zone visitors, displaced regular riders; preliminary data |
| Daily Hive summary of TransLink data ([Jul 14 2026](https://dailyhive.com/vancouver/fifa-world-cup-translink-metro-vancouver-ridership-increase-summary)) | Same | 8.16M boardings vs 7.55M expected over match days; SkyTrain 412,000 → 487,000/day; bus 640,000 → 646,000; ~44,000 extra boardings on non-match days; June 24: ~1.4M boardings = 860,000 trips | Station boardings listed for "starting stations" are ambiguous (station totals vs BC Place-bound trips) — not used numerically |
| TransLink origin analysis ([Jul 13 2026](https://www.translink.ca/news/2026/july/how%20vancouvers%20fifa%20world%20cup%20experience%20was%20powered%20by%20transit)) | SkyTrain trips to stadium district, 4 h before kickoff | Excluding downtown: Vancouver+UBC 24%, Burnaby 18%, Surrey 13%, Richmond 13%, Tri-Cities 6%, North Shore 5%, New Westminster 5% | Shares of transit trips only; car trips' origins unknown |
| TransLink Eras Tour release ([Dec 10 2024](https://www.translink.ca/news/2024/december/record-breaking%20ridership%20on%20taylor%20swift%20concert%20days)) | Taylor Swift, BC Place, Dec 6–8 2024 | Stadium–Chinatown Station 33,500 boardings on Friday, +119% over comparable Fridays; 108 extra "Swift" shuttle buses; SeaBus ~70,000 boardings over 3 days | Other events in the area that weekend; only one station's Friday figure quoted numerically here |
| TransLink Buzzer ([Oct 2008](https://buzzer.translink.ca/2008/10/skytrain-weekend-advisories-track-replacement-plus-a-perfect-storm-of-lions-and-canucks-fans/)) | Canucks + BC Lions home games same Saturday, Oct 25 2008 | SkyTrain expected ~12,000 more customers than a usual Saturday night | Forecast, pre-Canada Line, 18 years old — historical context only |
| PNE Fair 2026 ([CTV](https://vancouverisland.ctvnews.ca/vancouver/article/pne-attendance-up-in-2026-but-still-below-pre-pandemic-levels/); [TransLink Buzzer](https://buzzer.translink.ca/2026/08/pne-fair-2026)) | Aug 22–Sep 7 2026 | 642,000+ gate visits; #16 PNE express every 15 minutes from 29th Avenue/Renfrew stations; 2-for-1 admission for first 5,000 transit users on two Fridays | No ridership or mode figures published |

### 3.2 Worked inference A — FIFA World Cup match days (BC Place, Jun–Jul 2026)

Inputs (all linked above): average extra boardings per match day **87,000**; non-match-day extra boardings **44,000**; boardings-to-trips ratio on June 24 = 1.38–1.4M boardings ÷ **860,000** trips ≈ **1.6**; match configuration capacity **52,497** ([BC Place article](https://en.wikipedia.org/wiki/BC_Place); configuration capacity, not scanned attendance).

| Step | Upper case (all match-day increment = match-goers) | Lower case (subtract non-match-day fan-zone lift) |
|---|---|---|
| Extra boardings attributed to match | 87,000 | 87,000 − 44,000 = 43,000 |
| ÷ 1.6 boardings per trip = extra trips | ≈ 54,400 | ≈ 26,900 |
| ÷ 2 (arrival + return) = persons | ≈ 27,200 | ≈ 13,400 |
| ÷ 52,497 attendance denominator | ≈ 52% | ≈ 26% |

Uncertainty and bias: (i) the June 24 ratio is a single-day system ratio applied to a match-specific increment; (ii) attendees who would have ridden transit anyway (e.g., weekday commuters, visitors already riding) are invisible in an increment, biasing transit share **down**; (iii) residents avoiding downtown on match days lower the baseline, also biasing **down**; (iv) Park & Ride/WCE users are car-involved but appear as boardings, biasing transit share **up**; (v) the official host page stated there was [no vehicle parking at BC Place](https://vancouverfwc26.ca/know-before-you-go/getting-to-bc-place-vancouver) and that Stadium–Chinatown and Yaletown–Roundhouse would [not give stadium access](https://www.translink.ca/news/2026/march/translink%20unveils%20game%20plan%20for%20fifa%20world%20cup%202026%20vancouver). **Conclusion:** transit (incl. shuttle) roughly 30–60% of match-goers; car-involved likely 15–45%; this is an atypical, heavily managed event.

### 3.3 Worked inference B — Taylor Swift, Friday Dec 6 2024 (BC Place)

Inputs: Stadium–Chinatown boardings **33,500**, **+119%** over comparable Fridays ([TransLink](https://www.translink.ca/news/2024/december/record-breaking%20ridership%20on%20taylor%20swift%20concert%20days)); expected attendance **160,000** across three sold-out shows ([CBC/CP](https://www.cbc.ca/lite/story/1.7399778)).

| Step | Value |
|---|---|
| Baseline = 33,500 ÷ 2.19 | ≈ 15,300 boardings |
| Increment = 33,500 − 15,300 | ≈ 18,200 boardings |
| Attendance per show = 160,000 ÷ 3 | ≈ 53,300 (expected, ticket-based) |
| Increment ÷ attendance | ≈ 34% of attendees boarded at this one station (mostly return leg) |

Uncertainty: the increment includes non-attendees at other area events; it excludes attendees who left via Yaletown–Roundhouse, Waterfront (via the shuttles), Main Street, buses, or who walked. Roads around the stadium were closed noon to midnight and nearby reserved parking cost about [$151.90](https://www.cbc.ca/lite/story/1.7399778). **Conclusion:** transit share plausibly 35–60%; car-involved roughly 25–50%.

### 3.4 Out-of-region comparison (bound only)

Seattle's Climate Pledge Arena (free transit pass with every ticket, monorail investment) reported Year-2 transit use of [17% overall, 11% concerts, 21% hockey](https://climatepledgearena.com/?p=433) on one metric set, and a later figure of [about 27%](https://news.pollstar.com/2026/05/29/sustainability-matters-venues-go-the-extra-mile-toward-greener-transportation-transportation-special-2026/). This shows (a) concert crowds tend to use transit less than hockey crowds, and (b) an arena with no adjacent rapid-transit station can sit near 75–85% non-transit. Rogers Arena differs materially (station adjacent; arena parkade closed to the public on Canucks nights per a [tourism guide](https://www.vancouvertourism.org/rogers-arena-guide/) — secondary, verify with the venue).

---

## 4. Venue and event travel table

### 4.1 Mode split and recommended car share

All splits are **estimated** unless marked. "Sum = 100%?" refers to the central estimate; where a mode cannot be separated it is folded into "unclassified" and explained.

| ID | Verified current name; municipality | Setup / event; date or season represented | Car-involved (car, carpool, rideshare, P&R) | Transit bus/rail | Event shuttle | Walk/bike/other | Unclassified | Sum = 100%? | **Recommended car share** (range; confidence; type) |
|---|---|---|---|---|---|---|---|---|---|
| V1a | BC Place; Vancouver | CFL BC Lions / stadium concerts, full bowl [54,500](https://en.wikipedia.org/wiki/BC_Place); regular season | ~45% | ~40% | ~0% (concert shuttles occasional) | ~15% | 0% | Yes (estimate) | **0.45** (0.35–0.60; low; estimated from 3.2–3.3, adjusted up for normal non-closure operations) |
| V1b | BC Place; Vancouver | MLS Whitecaps, lower bowl [22,120](https://en.wikipedia.org/wiki/BC_Place); Feb–Oct | ~40% | ~45% | 0% | ~15% | 0% | Yes (estimate) | **0.40** (0.30–0.55; low; estimated) |
| V1c / E1 | BC Place ("BC Place Vancouver" during tournament); Vancouver | FIFA World Cup, [52,497](https://en.wikipedia.org/wiki/BC_Place) config; Jun 13–Jul 7 2026 | ~30% | ~45% (SkyTrain dominant) | incl. in transit | ~25% | 0% | Yes (estimate) | **0.30** (0.15–0.45; low; estimated, inference A). Historical/special operations — not representative |
| E6 | BC Place; Vancouver | Taylor Swift Eras Tour, ~53,300/show; Dec 6–8 2024 | ~35% | ~45% | ~5% (post-show shuttles) | ~15% | 0% | Yes (estimate) | **0.35** (0.25–0.50; low; estimated, inference B) |
| V2a | Rogers Arena; Vancouver | NHL Canucks, ~[19,000](https://www.castanetkamloops.net/news/Metro-Vancouver/622455/Vancouver-s-live-music-scene-entering-new-era-of-venue-upgrades); Oct–Apr (winter, weeknights common) | ~45% | ~40% | 0% | ~15% | 0% | Yes (estimate) | **0.45** (0.35–0.60; low; estimated: station adjacent, shares stadium-district evidence) |
| V2b | Rogers Arena; Vancouver | Arena concerts, ~19,000; year-round | ~50% | ~35% | 0% | ~15% | 0% | Yes (estimate) | **0.50** (0.40–0.65; low; estimated; concerts below hockey per 3.4) |
| V3 | Pacific Coliseum; Vancouver (Hastings Park) | PWHL Goldeneyes, sell-out [14,958](https://thehockeynews.com/news/latest-news/pwhl-home-openers-show-league-continues-to-grow), avg [11,235](https://en.wikipedia.org/wiki/2025%E2%80%9326_Vancouver_Goldeneyes_season); Nov–Apr | ~70% | ~25% | 0% (none added per [Vancity Lookout](https://www.vancitylookout.com/p/how-will-people-get-to-and-from-the-growing-pne)) | ~5% | 0% | Yes (estimate) | **0.70** (0.55–0.85; low; estimated: bus-only access, $25 event lots, long car exit queues) |
| V4 | Freedom Mobile Arch (PNE Amphitheatre); Vancouver (Hastings Park) | Outdoor concerts, cap. [10,000](https://www.pne.ca/?p=57895); opened Jun 5 2026, summer–fall | ~65–70% | ~25% | varies | ~5–10% | 0% | Yes (estimate) | **0.68** (0.50–0.85; very low; estimated by analogy to V3; no event data yet) |
| E2 | FIFA Fan Festival at PNE/Freedom Mobile Arch; Vancouver | Fan zone, capacity [25,000/day](https://www.vancitylookout.com/p/how-will-people-get-to-and-from-the-growing-pne); 28 open days, Jun–Jul 2026 | ~50% | ~20% | ~25% (#11 express from Renfrew/29th Ave) | ~5% | 0% | Yes (estimate) | **0.50** (0.35–0.70; very low; estimated; dedicated express ran [2 h before opening to 2 h after close](https://dailyhive.com/vancouver/fifa-world-cup-translink-metro-vancouver-ridership-increase-summary)) |
| E3 | PNE Fair; Vancouver (Hastings Park) | [642,000+](https://vancouverisland.ctvnews.ca/vancouver/article/pne-attendance-up-in-2026-but-still-below-pre-pandemic-levels/) visits over the Aug 22–Sep 7 2026 fair (multi-day total, not simultaneous) | ~65% | ~15% | ~15% (#16 PNE) | ~5% | 0% | Yes (estimate) | **0.65** (0.50–0.80; low; estimated). Unknown measured split |
| V5 | Langley Events Centre (main arena); Township of Langley | WHL Giants, cap. [5,276](https://www.langleyadvancetimes.com/news/vancouver-giants-move-to-langley-events-centre-comes-to-fruition-2485917)/[~5,300](https://dailyhive.com/vancouver/vancouver-giants-surrey-city-centre-arena-new-renderings), avg ~3,700; Sep–Mar | ~88% | ~5% | 0% | ~7% | 0% | Yes (estimate) | **0.88** (0.80–0.95; low–moderate; estimated: free parking, [limited transit](https://dailyhive.com/vancouver/vancouver-giant-surrey-city-centre-arena-langley-township-reaction)). Current 0.85 fallback is consistent |
| V6 | Scotiabank Field at Nat Bailey Stadium; Vancouver | High-A Canadians; capacity conflicted (5,132–6,500, see §8); Apr–Sep | ~65% | ~25% | 0% | ~10% | 0% | Yes (estimate) | **0.65** (0.50–0.80; low; estimated: [15-min walk from Canada Line, limited lot](https://milb.com/vancouver/ballpark/directions-to-the-nat)) |
| V7 | Swangard Stadium; Burnaby | Soccer (Whitecaps FC 2; one Whitecaps match Jul 8 2026), ~[5,000](https://en.wikipedia.org/wiki/Swangard_Stadium); summer | ~60% | ~30% | 0% | ~10% | 0% | Yes (estimate) | **0.60** (0.45–0.75; very low; estimated: Expo Line Patterson station nearby, per [same](https://en.wikipedia.org/wiki/Swangard_Stadium)) |
| V8 | Rogers Forum (formerly Abbotsford Centre, renamed [Nov 13 2025](https://en.wikipedia.org/wiki/Rogers_Forum)); Abbotsford — **outside boundary** | AHL Abbotsford Canucks, [7,000](https://en.wikipedia.org/wiki/Rogers_Forum) hockey, avg [3,800+](https://www.stadiumjourney.com/stadiums/rogers-forum-abbotsford-canucks); Oct–Apr | ~92% | ~3% | 0% | ~5% | 0% | Yes (estimate) | **0.92** (0.85–0.97; moderate; estimated: highway-oriented, paid + free lots) |
| V9 | Save-On-Foods Memorial Centre; Victoria — **outside boundary** | WHL Royals, [7,006 hockey / 9,000 concerts](https://en.wikipedia.org/wiki/Save-On-Foods_Memorial_Centre) | — | — | — | — | 100% | n/a | **Unknown.** Separate region; if logged, assess as its own city |
| V10 | Queen Elizabeth Theatre; Vancouver | Theatre/concerts, [2,765](https://www.castanetkamloops.net/news/Metro-Vancouver/622455/Vancouver-s-live-music-scene-entering-new-era-of-venue-upgrades) seats | — | — | — | — | 100% | n/a | **Unknown**; downtown, near Stadium–Chinatown. Fallback under recommended setting: 0.40 |
| V11 | Orpheum; Vancouver | Concert hall, [2,672](https://www.castanetkamloops.net/news/Metro-Vancouver/622455/Vancouver-s-live-music-scene-entering-new-era-of-venue-upgrades) seats | — | — | — | — | 100% | n/a | **Unknown**; downtown on Granville. Fallback: 0.40 |
| E4 | BMO Vancouver Marathon; Vancouver (QE Park start, downtown finish) | [25,000 registrations](https://miss604.com/2026/04/bmo-vancouver-marathon-route-map-road-closures-2026/), May 3 2026 (Sunday morning) | — | — | — | — | 100% | n/a | **Unknown.** Mostly participants arriving early morning across a linear course; main Gridlock effect is road closure, not parking demand. Fallback 0.40 would apply but is not evidenced |
| E5 | English Bay fireworks ("Summer Lights in English Bay", Jul 31 2026; Celebration of Light in prior years); Vancouver | Free open-site crowd, size not quantified in sources found | — | — | — | — | 100% | n/a | **Unknown.** Qualitatively transit/walk-heavy: full West End road closures and SkyTrain every [2–3 min](https://dailyhive.com/vancouver/vancouver-fireworks-road-closures). Fallback 0.40 is directionally closer than 0.85 |

### 4.2 Operations, parking, access and sources by row

| ID | Parking supply and remote arrangements | Event operations, closures, start/end service | Access constraints and other crowds sharing approaches | Direct sources / method |
|---|---|---|---|---|
| V1a/b | Surface lots and parkades near the stadium at event rates; no stall count found | No standing route changes found for regular games; extra SkyTrain/bus service not documented for ordinary games | Shares Stadium–Chinatown and Pacific Blvd/Georgia approaches with Rogers Arena; occasional same-night overlap (e.g., [2009 Canucks + Monster Jam + theatres + MissionsFest](https://buzzer.translink.ca/2009/01/transit-riders-take-note-saturday-night-will-be-busy/)) | Inference A/B, [BC Place capacities](https://en.wikipedia.org/wiki/BC_Place) |
| V1c/E1 | [No vehicle parking at BC Place](https://vancouverfwc26.ca/know-before-you-go/getting-to-bc-place-vancouver); bike valet at Main St–Science World | SkyTrain every 2–2.5 min before/after; extended hours on late matches; empty trains staged at Main St after matches; Stadium–Chinatown/Yaletown no stadium access ([TransLink plan](https://www.translink.ca/news/2026/march/translink%20unveils%20game%20plan%20for%20fifa%20world%20cup%202026%20vancouver); [Buzzer](https://buzzer.translink.ca/2026/06/fifa-world-cup-2026-vancouver-everything-you-need-to-know-about-the-stadium-chinatown-exit-closure/)); special WCE trips Jun 13 & 21 | Secure perimeter; fan zones (Granville pedestrian zone, Jack Poole Plaza, PNE) drew concurrent crowds | [TransLink Jul 13](https://www.translink.ca/news/2026/july/how%20vancouvers%20fifa%20world%20cup%20experience%20was%20powered%20by%20transit); [Daily Hive Jul 14](https://dailyhive.com/vancouver/fifa-world-cup-translink-metro-vancouver-ridership-increase-summary) |
| E6 | Nearby reserved stall ~$151.90; ride-hail surge reported | Roads closed noon–midnight; 108 post-show shuttles to Waterfront; WCE "Midnight" train Dec 7 ([TransLink](https://translink.ca/news/2024/november/translink%20adds%20service%20for%20taylor%20swift%20concerts)); Park & Ride promoted in rider guide | Ticket-holder-only perimeter; multiple other events that weekend ([City of Vancouver](https://vancouver.ca/news-calendar/long-story-short-expect-traffic-delays-this-weekend-dec-2024.aspx)) | Inference B; [CBC/CP](https://www.cbc.ca/lite/story/1.7399778) |
| V2a/b | Arena parkade reportedly closed to public on Canucks nights ([secondary guide](https://www.vancouvertourism.org/rogers-arena-guide/)); downtown parkades | No standing event service documentation found for 2025–26 season | Stadium–Chinatown adjacent; shares district with V1, V10 | Estimate; no Canucks/CSE survey located |
| V3 | Event parking $25; long exit queues after Goldeneyes games; residents sell driveway space during the Fair ([Vancity Lookout](https://www.vancitylookout.com/p/how-will-people-get-to-and-from-the-growing-pne)) | No extra transit for Goldeneyes games (as of Dec 2025); R5 RapidBus on Hastings + routes 4/16 | No rapid transit; shares Hastings/Renfrew, Hwy 1/Cassiar and lots with V4, E2, E3, Playland | Estimate; capacity conflict in §8 |
| V4 | Shares Hastings Park lots; ~[1,000 internal stalls lost during Fair setup](https://vancouver.ca/files/cov/HastingsParkPNE-doco-MasterPlan.pdf) (2010 plan) | Designed for 75+ performances/yr and [~340,000 guests/yr](https://www.houle.ca/projects/pne-freedom-mobile-arch) (projection) | As V3 | Estimate by analogy |
| E2 | As V3/V4 | Temporary #11 express (29th Ave → Renfrew → Coliseum), articulated buses, 28 days | Overlapped with BC Place match days | [Daily Hive Jul 14](https://dailyhive.com/vancouver/fifa-world-cup-translink-metro-vancouver-ridership-increase-summary) |
| E3 | [Onsite parking limited, not guaranteed](https://pne.ca/guest-services/fair-faq) | #16 PNE every 15 min from Expo/Millennium line stations ([TransLink](https://buzzer.translink.ca/2026/08/pne-fair-2026)); summer night concerts in the Arch | Playland, Arch concerts and Coliseum events stack on the same site | Estimate; gate visits ≠ people |
| V5 | Free parking; ~800 stalls added after early problems (per 2016 [owner quote](https://www.langleyadvancetimes.com/news/vancouver-giants-move-to-langley-events-centre-comes-to-fruition-2485917)); new underground garage with the [five-arena expansion](https://rdharch.com/langley-arena-complex) | No event transit found | 200 Street/Hwy 1 shared with Willoughby Community Park (Vancouver FC), the new [1,000-seat](https://rdharch.com/langley-arena-complex) arena and tournaments | Estimate |
| V6 | Limited paid stadium lot plus ~[200 spaces at Queen Elizabeth Park](https://www.destinationvancouver.com/inspirations/events/vancouver-canadians-baseball-games); strict residential enforcement | Transit-pass ticket discount ([club page](https://milb.com/vancouver/ballpark/contact-us)) | Residential area; shares QE Park approaches with marathon start (E4) once a year | Estimate |
| V7 | Not documented | Not documented | Central Park/Kingsway area | Estimate, very low confidence |
| V8 | Pay lots ($15), free lot by King Connector ([Ticketmaster venue page](https://www.ticketmaster.ca/rogers-forum-tickets-abbotsford/venue/140426)); lots shared with University of the Fraser Valley | Historic park-and-ride shuttle mentioned in an [older guide](https://arenadigest.com/201012013140/in-the-arena/visits/abbotsford-entertainment-a-sports-centre) — **car-involved** if used | Hwy 1 McCallum exit | Estimate |
| V9 | $15 event lot ([SOFMC](https://sofmc.com/directions-parking/)) | — | Separate metro | Not estimated |
| E4 | Participant parking not documented | Rolling closures May 2–3; UBC roads reopen by noon ([UBC advisory](https://planning.ubc.ca/sites/default/files/2026-04/OUTDOOR%20EVENT%20ADVISORY%20-%20BMO%20Vancouver%20International%20Marathon-KF.pdf)); bus detours ([TransLink](https://buzzer.translink.ca/2026/05/your-transit-guide-to-the-2026-bmo-vancouver-marathon/)) | Course crosses downtown, West End, Kitsilano, UBC | Counts conflict (§8) |
| E5 | Stanley Park west of Pipeline Rd restricted | Full West End closures from 6 pm; SkyTrain 2–3 min; bus reroutes | Pride weekend overlap in 2026 | [Daily Hive Jul 29 2026](https://dailyhive.com/vancouver/vancouver-fireworks-road-closures) |

### 4.3 Coverage gaps (venues/events not verified)

Not verified for current name, capacity by configuration, tenant or travel evidence, so no row was created: Commodore Ballroom; Vogue Theatre; Vancouver Playhouse; Chan Centre, Doug Mitchell Thunderbird Sports Centre and Thunderbird Stadium (UBC "university venues" in the brief); Vancouver Convention Centre (a convention site counting daily visits, not a fixed-capacity room); Malkin Bowl; Richmond Olympic Oval; casino show theatres (River Rock, Hard Rock/Starlight); Bell Performing Arts Centre (Surrey); Willoughby Community Park (Vancouver FC); Vancouver Folk Music Festival and other open-site festivals; Surrey Fusion/Canada Day; Richmond Night Market. Each would provisionally take the fallback of the recommended setting (0.40) unless suburban and parking-led, in which case an override near 0.85 is more consistent with the evidence pattern above.

---

## 5. Regional weighting

### 5.1 Capacity-weighted (fixed venues ≥5,000, inside recommended boundary; one configuration per venue, no stacking)

| Row | Configuration used | Weight | Central car share | Weight × share |
|---|---|---|---|---|
| V1a | BC Place full bowl | 54,500 | 0.45 | 24,525 |
| V2a | Rogers Arena hockey | 18,910* | 0.45 | 8,510 |
| V3 | Pacific Coliseum PWHL sell-out | 14,958 | 0.70 | 10,471 |
| V4 | Freedom Mobile Arch | 10,000 | 0.68 | 6,800 |
| V6 | Nat Bailey (nominal, conflicted) | 6,000 | 0.65 | 3,900 |
| V5 | LEC main arena | 5,276 | 0.88 | 4,643 |
| V7 | Swangard | 5,000 | 0.60 | 3,000 |
| **Total** | | **114,644** | | **61,849 → 0.54** |

\*Rogers Arena is cited only as "approximately 19,000" ([BIV via Castanet](https://www.castanetkamloops.net/news/Metro-Vancouver/622455/Vancouver-s-live-music-scene-entering-new-era-of-venue-upgrades)); 18,910 is used as a working hockey figure and should be verified. Using each row's low/high range gives **0.42–0.69**. Downtown pair alone (V1a+V2a) = **0.45**; all other rows = **0.70**. Excluded: V1b/V1c/E6 (mutually exclusive BC Place configurations), V8/V9 (outside boundary), festivals and the PNE Fair (multi-day totals are not simultaneous crowds).

### 5.2 Typical-attendance-weighted

| Row | Typical figure | Weight | Share | Weight × share |
|---|---|---|---|---|
| V1b | Whitecaps lower bowl (config, not avg attendance) | 22,120 | 0.40 | 8,848 |
| V2a | Canucks (capacity proxy; no attendance source found) | 18,910 | 0.45 | 8,510 |
| V3 | Goldeneyes 2025–26 average | 11,235 | 0.70 | 7,865 |
| V4 | Projected 340,000 ÷ 75 events | 4,533 | 0.68 | 3,082 |
| V5 | Giants average, last three seasons | 3,700 | 0.88 | 3,256 |
| **Total** | | **60,498** | | **31,561 → 0.52** |

Missing: Nat Bailey and Swangard (no sourced typical attendance), BC Lions average attendance, concert-night attendance.

### 5.3 Do outlying venues obscure the downtown pattern?
The opposite. One very large downtown venue (BC Place) dominates both weightings. Outlying venues are small (LEC ~5,300; Rogers Forum 7,000 and outside the boundary). The Hastings Park cluster is the material middle case: about 25,000 of simultaneous capacity (Coliseum + Arch) at ~0.70, without rapid transit.

### 5.4 Clusters, shared roads and shared audiences (separate findings; no distance rule implied)
1. **Stadium district** — BC Place, Rogers Arena, with Queen Elizabeth Theatre and the downtown core nearby. Shared Stadium–Chinatown station, Pacific Blvd, Georgia/Dunsmuir viaducts. Documented same-night overlaps ([2008](https://buzzer.translink.ca/2008/10/skytrain-weekend-advisories-track-replacement-plus-a-perfect-storm-of-lions-and-canucks-fans/), [2009](https://buzzer.translink.ca/2009/01/transit-riders-take-note-saturday-night-will-be-busy/), [Dec 2024](https://vancouver.ca/news-calendar/long-story-short-expect-traffic-delays-this-weekend-dec-2024.aspx)).
2. **Hastings Park** — Pacific Coliseum, Freedom Mobile Arch, PNE Fair/Playland, Fan Festival in 2026, possible future Whitecaps stadium. Shared Hastings St/Renfrew St, Hwy 1/Cassiar, onsite lots, #16/#11 shuttles from Renfrew/29th Avenue.
3. **Langley/Willoughby** — LEC main arena, new arena complex, Willoughby Community Park. Shared 200 Street and Hwy 1.
4. **Shared audiences** — hockey fans across Canucks, Goldeneyes, Giants and Abbotsford Canucks; the WC origin data show stadium-district transit riders drawn region-wide, with Surrey and Richmond each 13%.

---

## 6. Boundary recommendation

- **Recommended boundary: the Vancouver CMA / Metro Vancouver regional area** (Burnaby, Coquitlam, Delta, both Langleys, Maple Ridge, New Westminster, North Shore, Pitt Meadows, Port Coquitlam, Port Moody, Richmond, Surrey, Vancouver, White Rock, etc., per the [StatCan CMA definition](https://www150.statcan.gc.ca/n1/pub/71-543-g/2016001/appendix-appendice1-eng.htm)). This matches the TransLink service area that generated the event-ridership evidence, and the WC origin data show stadium-district trips drawn from across it.
- **Edge municipalities (inside, but car-led for events):** Township of Langley (LEC), Maple Ridge/Pitt Meadows, and South Surrey/White Rock. Keep them inside the boundary but override venue shares rather than relying on the regional fallback.
- **Abbotsford (Fraser Valley): exclude as a separate city.** It is its own CMA ([~224,000](https://www.todocanada.ca/top-100-population-centres-in-canada-how-the-population-has-changed/amp/)), outside TransLink's SkyTrain network, and Rogers Forum is parking-led. A shared hockey audience with the Canucks is not, by itself, evidence of shared travel behaviour. If logged, treat as `sprawl`-like with a venue override around 0.92.
- **Victoria: exclude.** It is a separate CMA ([~445,000](https://www.todocanada.ca/top-100-population-centres-in-canada-how-the-population-has-changed/amp/)) separated by ferry; event crowds cannot overlap with Vancouver crowds on roads.

---

## 7. Changes through 2028 (and just beyond)

| Change | Status | Date | Relevance | Suggested re-check |
|---|---|---|---|---|
| Pattullo replacement (stal̕əw̓asəm Bridge) | **Complete**; all four lanes open Feb 14 2026 ([New Westminster](https://www.newwestcity.ca/planning-building-and-development/roadworks/sb_expander_articles/1700.php)); ramp/closure works continuing through fall 2026 ([project memo](https://www.pattullobridgereplacement.ca/app/uploads/sites/637/2026/08/PBR-TIC-COM-MEMO-20260825-New-Westminster-Traffic-Changes.pdf)) | 2026 | Surrey–New West road access | Jan 2027 |
| Freedom Mobile Arch | **Open** Jun 5 2026 | 2026 | New 10,000 venue at Hastings Park | After 2027 season |
| LEC five-arena expansion | **Opening** (scheduled [Sep 2026](https://rdharch.com/langley-arena-complex)) | 2026 | Adds tournament crowds/garage at LEC | Jan 2027 |
| Expo Line service pattern changes (Production Way, Lougheed, Braid, Sapperton) | **In effect until late 2027** ([TransLink](https://www.translink.ca/plans-and-projects/projects/rapid-transit-projects/skytrain-expansion-program)) | to late 2027 | Affects eastbound event returns | Quarterly |
| Broadway Subway (Millennium Line to Arbutus) | **Funded, under construction**; trackwork complete, opening late 2027 ([Daily Hive Sep 2026](https://dailyhive.com/vancouver/broadway-subway-surrey-langley-skytrain-construction-update-september-2026)) | late 2027 | Improves Millennium Line reach; no direct stadium-district change | Dec 2027 |
| R2 RapidBus extension to Metrotown via Hastings Park | **Scheduled/conflicting**: planned "starting in 2027" per [Vancity Lookout](https://www.vancitylookout.com/p/how-will-people-get-to-and-from-the-growing-pne); a late-Aug 2026 headline suggested a one-seat Park Royal–Metrotown ride. Not verified | 2026–27 | Only planned rapid bus stop at Hastings Park | Nov 2026 |
| North Shore–Metrotown BRT | **Proposal, unfunded** ([Vancity Lookout](https://www.vancitylookout.com/p/how-will-people-get-to-and-from-the-growing-pne)) | — | Would change V3/V4 | Annually |
| Whitecaps stadium at Hastings Racecourse | **Proposal**; MOU with negotiation deadline end of 2026 ([Daily Hive](https://dailyhive.com/vancouver/vancouver-whitecaps-gastown-railyard-waterfront-stadium)) | decision by end 2026 | Would move MLS crowds from V1b to a non-rapid-transit site | Jan 2027 |
| Surrey–Langley SkyTrain | **Funded, under construction**; opening **late 2029** ([CTV](https://www.ctvnews.ca/vancouver/article/cost-of-surrey-langley-skytrain-extension-balloons-to-6b/)) — beyond 2028 | 2029 | Nearest station would still not reach LEC directly | 2028 |
| Surrey City Centre Arena (10,000) / Giants move | **Announced/planned**; Giants to move for [2030–31](https://langleymonitor.com/2026/07/09/giants-surrey-move-and-langley-events-centres-next-chapter/) | 2030 | Would shift V5 crowd to a SkyTrain-adjacent site | 2028 |

---

## 8. Source conflicts (preserved)

| Item | Conflicting values | Handling |
|---|---|---|
| Pacific Coliseum capacity | [14,958 PWHL sell-out](https://thehockeynews.com/news/latest-news/pwhl-home-openers-show-league-continues-to-grow); [15,000](https://dailyhive.com/vancouver/vancouver-giants-surrey-city-centre-arena-new-renderings); [16,281](https://www.eliteprospects.com/team/44455/vancouver-goldeneyes/2026-2027); [17,500](https://www.castanetkamloops.net/news/Metro-Vancouver/622455/Vancouver-s-live-music-scene-entering-new-era-of-venue-upgrades) | Likely different configurations; weighted with the observed PWHL sell-out |
| Nat Bailey capacity | [5,132 / 6,013](https://www.stadiumjourney.com/stadiums/nat-bailey-stadium-vancouver-canadians); [6,413](https://audiala.com/hi/%e0%a4%95%e0%a4%a8%e0%a4%be%e0%a4%a1%e0%a4%be/%e0%a4%b5%e0%a5%88%e0%a4%82%e0%a4%95%e0%a5%82%e0%a4%b5%e0%a4%b0/%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%8b%e0%a4%9f%e0%a4%bf%e0%a4%af%e0%a4%be%e0%a4%ac%e0%a5%88%e0%a4%82%e0%a4%95-%e0%a4%ab%e0%a5%80%e0%a4%b2%e0%a5%8d%e0%a4%a1-%e0%a4%8f%e0%a4%9f-%e0%a4%a8%e0%a5%88%e0%a4%9f-%e0%a4%ac%e0%a5%87%e0%a4%b2%e0%a5%80-%e0%a4%b8%e0%a5%8d%e0%a4%9f%e0%a5%87%e0%a4%a1%e0%a4%bf%e0%a4%af%e0%a4%ae); [6,500](https://gothunderbirds.ca/sports/2009/10/26/facil-nat-bailey.aspx?id=34) | Unresolved; nominal 6,000 used for weighting only |
| LEC main arena | [5,276](https://www.langleyadvancetimes.com/news/vancouver-giants-move-to-langley-events-centre-comes-to-fruition-2485917) vs [~5,300](https://dailyhive.com/vancouver/vancouver-giants-surrey-city-centre-arena-new-renderings) | Rounding difference; 5,276 used |
| Save-On-Foods Memorial Centre | [7,006 hockey / 9,000 concerts](https://en.wikipedia.org/wiki/Save-On-Foods_Memorial_Centre) vs [7,000 / 8,883](https://sofmc.com/venue-info) | Definitional; outside boundary |
| Marathon size | [25,000 registrations](https://miss604.com/2026/04/bmo-vancouver-marathon-route-map-road-closures-2026/) vs [8,500 maximum participants](https://planning.ubc.ca/sites/default/files/2026-04/OUTDOOR%20EVENT%20ADVISORY%20-%20BMO%20Vancouver%20International%20Marathon-KF.pdf) (UBC advisory, likely only the full-marathon field passing UBC) | Different scopes; neither is spectators |
| Climate Pledge transit use | [17% (Year 2)](https://climatepledgearena.com/?p=433) vs [~27%](https://news.pollstar.com/2026/05/29/sustainability-matters-venues-go-the-extra-mile-toward-greener-transportation-transportation-special-2026/) | Different periods/metrics; used only as a bound |
| WC "starting station" boardings | Daily Hive lists station boardings "for trips to BC Place", but values look like station totals | Not used numerically |

---

## End with

### 1. Recommended existing city type and rationale; strongest contrary evidence
**`transit`.** The most evidenced and largest venues (BC Place, Rogers Arena) have inferred car-involved shares of roughly 0.30–0.50, and the capacity-weighted (0.54) and typical-attendance-weighted (0.52) regional estimates are closer to 0.40 than to 0.85. Choosing `hub` or `sprawl` would apply 0.85 to any downtown row lacking an override, overstating car arrivals by roughly a factor of two.
**Strongest contrary evidence:** (a) no measured attendee survey exists, so the `transit` fit rests on inference from two extraordinary, heavily managed events with closed roads; (b) regional commuting is [70% car](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm); (c) Hastings Park (~0.70) and Langley (~0.88) venues are car-led and need overrides; (d) if the app's `transit` spill logic assumes rail-served venue clusters, Hastings Park does not fit it. `hub` is the closest alternative if the recommended per-venue overrides cannot be maintained.

### 2. Car-share values keyed to rows
- **Measured:** none.
- **Projected:** none from an official travel plan. V4's typical-attendance weight is a projected capacity figure, not a mode share.
- **Estimated (ridership inference):** V1c/E1 0.30 (0.15–0.45); E6 0.35 (0.25–0.50).
- **Estimated (inference + operations analogy):** V1a 0.45; V1b 0.40; V2a 0.45; V2b 0.50.
- **Estimated (operations/parking evidence only):** V3 0.70; V4 0.68; E2 0.50; E3 0.65; V5 0.88; V6 0.65; V7 0.60; V8 0.92 (outside boundary).
- **Unknown (fallback 0.40 provisionally under `transit`):** V10, V11, E4, E5, and all §4.3 gap venues. V9 is unknown and outside the boundary.

### 3. Boundary recommendation and inconsistencies between briefs
Use the Vancouver CMA / Metro Vancouver area; treat Langley Township, Maple Ridge/Pitt Meadows and South Surrey/White Rock as inside-but-overridden; keep Abbotsford and Victoria as separate cities.
Inconsistencies found: the companion venue answer was not supplied; "Abbotsford Centre" is now **Rogers Forum**; the Vancouver Convention Centre is a daily-visit convention site rather than a fixed event room; "university venues" was unspecified; `sprawl` and `hub` share the same 0.85 fallback, so choosing between them changes only spill behaviour, which this research cannot assess.

### 4. Data gaps, model limitations, source conflicts, inaccessible sources
- **Gaps:** no attendee mode survey from PavCo/BC Place, Canucks Sports & Entertainment, PNE, Whitecaps, Lions or Canadians; no TransLink Trip Diary event breakdown found; no stall counts for downtown event parking; no Canucks or Lions attendance figures captured; BC Place regular-season ridership not published.
- **Model limitations:** the ridership inference cannot separate Park & Ride (car-involved) from walk-access transit, and increments hide habitual riders; event-type differences (weekday winter hockey vs. summer weekend concerts) are only partially evidenced.
- **Conflicts:** see §8.
- **Inaccessible sources:** none were blocked. The 2010 Hastings Park/PNE Master Plan appendices (parking/circulation inventory) and the StatCan primary population table were not fetched; reproductions were used for population figures.

### 5. Confirmed changes through 2028 and re-check dates
Completed: stal̕əw̓asəm Bridge (Feb 2026); Freedom Mobile Arch (Jun 2026); LEC expansion (Sep 2026, scheduled). Scheduled/funded: Broadway Subway late 2027; Expo Line service-pattern disruptions until late 2027; R2 extension (timing conflicting, re-check Nov 2026). Proposals: Whitecaps Hastings Park stadium (decision due end 2026), North Shore–Metrotown BRT (unfunded). Beyond 2028: Surrey–Langley SkyTrain (late 2029), Surrey City Centre Arena/Giants move (2030–31). **Re-check this whole answer by Jan 2027** (Whitecaps decision; final TransLink World Cup figures) and again by Dec 2027 (Broadway Subway opening).
