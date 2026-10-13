# Denver metro — event travel evidence and city-type assessment for Fan/Friction Gridlock

**Research date:** 12 October 2026 (web sources checked that day; publication dates given per source).
**Scope:** Denver and surrounding Front Range; how people actually reach event venues. Ordinary commuting data appears only as labelled background.
**Settings assessed (not tuned):** `sprawl` (car 0.85), `hub` (car 0.85), `transit` (car 0.40). Venue-specific shares override these.

> **Bottom line:** Recommend **`hub`**. No Denver venue has a measured or defensible car share near 0.40. The best-evidenced venue, Empower Field, is estimated at about 0.72. The capacity-weighted regional estimate is about **0.78**, with a plausible range of **0.66–0.86**. The tight downtown cluster (Empower Field, Ball Arena and Coors Field) shares roads, parking and a rail hub, which fits an in-between setting better than `sprawl`. Outlying venues behave like `sprawl`. Nearly every number below is an **estimate**. The single study with measured Denver event auto mode shares is paywalled (see §4).

---

## 1. Evidence base and method

### 1.1 What was found

| Evidence type | Denver examples found | Usable for mode share? |
|---|---|---|
| Observed event ridership (transit agency) | RTD: [nearly 27,000 light rail boardings at the Empower Field platform "before and after" each 2024–25 Broncos home game; nearly 38,000 at the Oct 2024 Raiders game](https://www.rtd-denver.com/community/news/2025/rtd-doubles-down-on-efforts-to-improve-service-and-enhance-the-customer-experience) | Yes, with inference (see §2.1, row D1) |
| Observed dedicated event shuttle ridership | BroncosRide averaged [about 6,700 riders per game over ten years (Broncos)](https://www.denverbroncos.com/news/broncos-encourage-fans-to-make-alternative-transportation-plans-on-game-day-with), or [about 6,400 (Denverite, 2026)](https://denverite.com/2026/06/24/broncosride-bus-returns-rtd/) | Historical only. The service is suspended. |
| Peer-reviewed event survey (Denver) | [Henao & Marshall 2013, TRR 2359](https://doi.org/10.3141/2359-03). It covers event auto modal share, occupancy and parking at four Denver pro venues. | **Inaccessible** (paywall). Only the abstract figures are usable. |
| Parking supply | Empower Field [about 10,000 spaces](https://denversports.com/nfl/denver-broncos/parking-plan-burnham-yard); Coors Field Lots A+B [more than 4,300](https://www.pressreader.com/usa/the-denver-post/20180406/281479276983648) | Bounds only. Never converted directly to mode share. |
| Venue/agency operations | RTD [high-volume events page](https://www.rtd-denver.com/high-volume-events), RTD game-day releases, venue parking pages | Context, not shares |
| Comparison venues | Minneapolis Metro Transit estimates of [14% of Twins fans and 27% of Vikings fans by light rail](https://www.cbsnews.com/amp/minnesota/news/minn-sports-teams-counting-on-mass-transit-to-get-fans-to-games); UW Husky Stadium survey [31.2% transit in 2016](https://transportation.uw.edu/files/media/husky-report-2016.pdf) | Analogy for bounding only |
| Commuting (background only) | Downtown Denver employees: [transit 13.1% of commute trips in 2024](https://www.downtowndenver.com/_files/ugd/ff2361_5a0ecb09f94f40a79f7cad88daf2627b.pdf) | **Not event travel.** Context only. |

**Not found despite searching:** any public venue travel plan, team or organizer intercept survey, or environmental review with an observed event mode split for any Denver venue. That covers Coors Field, Ball Arena, Red Rocks, Fiddler's Green, Dick's Sporting Goods Park, the Convention Center and the National Western Center. The Ball Arena and Burnham Yard mobility studies were referenced but not located in public form (see §4).

### 1.2 Rules applied

- **People, not vehicles.** All shares are shares of attendees (persons). Parking spaces are converted to persons only as a plausibility check. That check uses the occupancy range of 2.2–3.0 persons per vehicle observed at Denver venues by [Henao & Marshall (abstract)](https://doi.org/10.3141/2359-03).
- **Attendees vs tickets.** Rockies figures are [tickets sold](https://www.purplerow.com/rockies-news/75544/rockies-attendance-continued-to-decline-in-2025-but-not-as-much-as-you-might-think). Broncos games are [sold out](https://en.wikipedia.org/wiki/Empower_Field_at_Mile_High), but the PA announces no-shows, so turnstile attendance is lower than tickets. I assume 90–100% of tickets attend where needed and show this explicitly.
- **Car-involved trips.** Dedicated remote event parking plus a shuttle (for example, the Stock Show's Coors Field lot shuttle) is counted as **car**.
- **Park-and-ride treatment.** Driving to a general RTD Park-n-Ride and riding scheduled rail or bus is counted as **public transit** in the split. The car leg does not use the venue's approach roads, and no source separates it. This understates car involvement. Where it matters, I flag a car-involved upper bound. A dedicated event bus from a Park-n-Ride (historic BroncosRide) is listed as **dedicated shuttle**, with the same caveat.
- **Event vs regular service.** As of the 2025–26 season, RTD serves Broncos and Rockies games with regularly scheduled service plus added rail cars, [not special shuttles](https://www.rtd-denver.com/community/news/2026/rtd-provides-service-and-connections-to-broncos-game-on-friday). RTD permanently discontinued BroncosRide and similar special shuttles [citing FTA charter rules](https://www.rtd-denver.com/community/news/rtd-prepared-to-support-denver-broncos-fans-attending-home-games-service-and).

---

## 2. Venue and event travel tables

Row IDs (D = downtown cluster, S = suburban/outlying, E = event/open-site, X = edge metro) are the keys used in §6. **The companion venue research was not available to me**, so these IDs need mapping to its rows (see §7).

### 2.1 Identity, setup and evidence

| ID | Verified current name; municipality | Setup / season represented | Capacity used (single configuration) | Evidence type and date | Ticketing / feed |
|---|---|---|---|---|---|
| D1 | Empower Field at Mile High; Denver | Broncos NFL home games, Aug–Jan; mostly Sunday afternoons, some Monday/Thursday nights | [76,125 (football)](https://en.wikipedia.org/wiki/Empower_Field_at_Mile_High); RTD lists [75,000](https://www.rtd-denver.com/high-volume-events) | Observed RTD platform boardings, 2024–25 season (published [Oct 2025](https://www.rtd-denver.com/community/news/2025/rtd-doubles-down-on-efforts-to-improve-service-and-enhance-the-customer-experience)); historic BroncosRide counts | Not verified; feed coverage not assessed |
| D2 | Empower Field at Mile High; Denver | Stadium concerts, summer (e.g., Zach Bryan, [13–14 Aug 2026](https://www.rtd-denver.com/community/news/rtd-ramps-up-transit-thursday-saturday-for-major-events-across-downtown)) | [85,000+ (concerts)](https://en.wikipedia.org/wiki/Empower_Field_at_Mile_High) | No concert-specific data; estimate by analogy to D1 | Not verified |
| D3 | Coors Field; Denver | Rockies MLB, Apr–Sep; weekday evenings and weekend afternoons | [46,897 (Purple Row)](https://www.purplerow.com/rockies-news/75544/rockies-attendance-continued-to-decline-in-2025-but-not-as-much-as-you-might-think) vs [50,000 (RTD)](https://www.rtd-denver.com/high-volume-events): conflict | Estimate from network position, parking and comparison venue; no Denver survey accessible | Not verified |
| D4 | Ball Arena; Denver | Nuggets (basketball configuration), Oct–Jun evenings; Avalanche use the hockey configuration | [19,520 basketball / 18,007 hockey / 21,000 concerts](https://en.wikipedia.org/wiki/Ball_Arena); weighting uses basketball only | Estimate; no survey accessible | Not verified |
| D5 | Ball Arena; Denver | Arena concerts, year-round | [21,000](https://en.wikipedia.org/wiki/Ball_Arena) | Estimate (as D4) | Not verified |
| D6 | Colorado Convention Center (incl. its theatre); Denver | Conventions and consumer shows | [20,000+ (RTD)](https://www.rtd-denver.com/high-volume-events): building-wide, not one crowd | None found | Not verified |
| D7 | Denver Performing Arts Complex; Denver | Multi-theatre complex | [10,000 (RTD)](https://www.rtd-denver.com/high-volume-events): combined across theatres, not one room | None found | Not verified |
| S1 | Dick's Sporting Goods Park; Commerce City | Colorado Rapids MLS, Feb–Oct | ["a little over 18,000"](https://www.denvergazette.com/fans-turn-up-the-heat-for-summit-fcs-first-home-game-at-new-stadium/); 18,000 used | Estimate from parking supply and no rail; aggregators only for transit | Not verified |
| S2 | Dick's Sporting Goods Park; Commerce City | Field concerts (e.g., Phish, [Labor Day weekend](https://www.dickssportinggoodspark.com/stadium/parking-directions)); multi-night | Not verified | Estimate (as S1) | Not verified |
| S3 | Fiddler's Green Amphitheatre; Greenwood Village | Summer concerts | [18,000 (RTD)](https://www.rtd-denver.com/high-volume-events) | Estimate; light rail within a [10-minute walk](https://www.fiddlersgreenamp.com/directions) | AXS for tickets and pre-paid parking ([venue page](https://www.fiddlersgreenamp.com/directions)) |
| S4 | Red Rocks Amphitheatre; near Morrison (Jefferson County; Denver-owned park) | Concerts, roughly Apr–Oct | [9,525 seats](https://ridearion.com/red-rocks-shuttle-vs-private-car/) (commercial source; official figure not retrieved) | Estimate; no public transit service; venue says most attendees drive ([official](https://www.redrocksonline.com/plan-your-visit/getting-here/)) | Not verified |
| S5 | Centennial Stadium (interim); Centennial | Denver Summit FC (NWSL) from [18 Jul 2026](https://gazette.com/?p=2033960) through the [2027 season](https://www.koaa.com/sports/denver-summit-fcs-centennial-stadium-wont-be-ready-for-start-of-season) | [12,372](https://www.denvergazette.com/fans-turn-up-the-heat-for-summit-fcs-first-home-game-at-new-stadium/) | Estimate; RTD bus about [16 minutes from Arapahoe at Village Center](https://www.rtd-denver.com/high-volume-events) | Not verified |
| E1 | National Western Stock Show; Denver (National Western Center) | 16-day run, [10–25 Jan 2026](https://nationalwestern.com/press-release-denver-celebrates-the-119th-national-western-stock-show-with-downtown-parade-to-kick-off-the-best-16-days-in-january/); winter | Complex: [10,000 (RTD)](https://www.rtd-denver.com/high-volume-events). Multi-day total, **not** a simultaneous crowd. | Estimate; operations from organizer and press | Not verified |
| E2 | Great American Beer Festival; Denver (Levitt Pavilion, from 2026) | October; multi-session; [moved outdoors to Levitt Pavilion in 2026](https://www.westword.com/food-drink/2026-great-american-beer-festival-is-moving-to-levitt-pavilion-40836282/) | 2019 at the Convention Center: [60,000+ attendees over four sessions](https://www.denvergazette.com/?p=573626), so about 15,000 per session (computed). The 2026 site differs. | None for the new site | Not verified |
| E3 | Downtown parades and Civic Center festivals (e.g., Stock Show parade, team championship parades) | Open-site, irregular | Not verified | None found | — |
| X1 | Folsom Field, CU Boulder; Boulder (edge) | CU football, fall | Not verified | Operations only ([CU parking page](https://www.colorado.edu/pts/special-events/football)) | Not verified |

### 2.2 Person mode split (attendees)

All values are **estimates** unless marked. "Car" includes private car, carpool, rideshare/taxi and hired SUVs or vans. "Dedicated shuttle" means event-only motorcoach or bus service.

| ID | Car / carpool / rideshare | Public bus / rail (scheduled) | Dedicated event shuttle | Walk / bike / scooter / other | Unclassified | Sums to 100%? | Basis (detail in §2.5) |
|---|---|---|---|---|---|---|---|
| D1 | **72%** (55–79) | 24% (18–40) | 0% in 2025–26; ~8–9% historically | 4% (2–6) | 0 | Yes (central values) | Ridership inference from RTD platform boardings |
| D2 | **72%** (60–82) | 24% (15–35) | 0% | 4% | 0 | Yes | By analogy to D1; RTD [adds rail cars](https://www.rtd-denver.com/community/news/rtd-ramps-up-transit-thursday-saturday-for-major-events-across-downtown) |
| D3 | **75%** (65–85) | 17% (10–25) | 0% (RockiesRide not operating) | 8% (5–12) | 0 | Yes | Comparison (Target Field) plus parking check |
| D4 | **78%** (68–88) | 15% (8–25) | 0% | 7% (3–10) | 0 | Yes | Own light rail station; weaker downtown walk link |
| D5 | **78%** (68–88) | 15% (8–25) | 0% | 7% | 0 | Yes | As D4 |
| D6 | Unknown | Unknown | Unknown | Unknown | 100% | No (unknown) | Very transit-rich site, but no event data |
| D7 | Unknown | Unknown | Unknown | Unknown | 100% | No (unknown) | As D6 |
| S1 | **93%** (88–97) | 2% (0–5) | 0–3% (supporter buses) | 2% (1–3) | 0 | Yes | Free on-site parking, no rail station |
| S2 | **93%** (85–97) | 2% | 0–5% (charters allowed on site) | 2% | 0 | Yes | As S1; [shuttles and limos may stay on site](https://www.dickssportinggoodspark.com/stadium/parking-directions) |
| S3 | **83%** (75–90) | 12% (6–20) | 0% | 5% (2–8) | 0 | Yes | Light rail nearby; free or paid office-park lots |
| S4 | **88%** (80–95) | 0% (no RTD service) | 10% (5–15) commercial shuttles and charters | 2% | 0 | Yes | Structural: no transit, venue-reported driving |
| S5 | **90%** (85–95) | 5% (2–10) | Unknown | 5% | 0 | Yes | Bus link only; [parking challenges reported](https://www.stadiumjourney.com/stadiums/centennial-stadium-denver-summit-fc) |
| E1 | **90%** car-involved (80–95) | 7% (N Line, bus 48) | Coors-lot shuttle counted as car | 3% | 0 | Yes | Remote lot plus shuttle is car-involved by rule |
| E2 | Unknown | Unknown | Unknown | Unknown | 100% | No | New site in 2026; no data |
| E3 | Unknown | Unknown | Unknown | Unknown | 100% | No | — |
| X1 | Unknown | Unknown | Unknown | Unknown | 100% | No | Edge metro; no data |

### 2.3 Recommended car share per row

| ID | Recommended car share | Range | Confidence | Value type | Main uncertainty |
|---|---|---|---|---|---|
| D1 | **0.72** | 0.55–0.79 | Medium-low | **Estimated from observed ridership** | What RTD's boarding count measures (one direction or both) |
| D2 | **0.72** | 0.60–0.82 | Low | Estimated (analogy) | Concert audiences differ from NFL crowds; often multi-night |
| D3 | **0.75** | 0.65–0.85 | Low | Estimated (comparison) | No Denver measurement accessible; varies with season and day of week |
| D4 | **0.78** | 0.68–0.88 | Low | Estimated | No measurement; winter weeknights |
| D5 | **0.78** | 0.68–0.88 | Low | Estimated | As D4 |
| D6 | Unknown → **`hub` 0.85** provisionally | — | — | Fallback | Convention attendees are often hotel-based (walk), so 0.85 is probably high |
| D7 | Unknown → **`hub` 0.85** provisionally | — | — | Fallback | As D6 |
| S1 | **0.93** | 0.88–0.97 | Medium-low | Estimated (structural) | Transit route conflict between sources |
| S2 | **0.93** | 0.85–0.97 | Low | Estimated | Charter share unknown |
| S3 | **0.83** | 0.75–0.90 | Low | Estimated | Light rail share unmeasured |
| S4 | **0.88** | 0.80–0.95 | Medium-low | Estimated (structural) | Commercial shuttle share unmeasured |
| S5 | **0.90** | 0.85–0.95 | Low | Estimated | New venue; no data |
| E1 | **0.90** | 0.80–0.95 | Low | Estimated | N Line use unmeasured |
| E2 | Unknown → **`hub` 0.85** provisionally | — | — | Fallback | New site |
| E3 | Unknown → do not model with the venue fallback | — | — | — | Open-site crowds; transit-heavy in practice but unmeasured |
| X1 | Unknown → **`hub` 0.85** provisionally | — | — | Fallback | Edge metro |

**No row has a measured car share.** D1 is the only row anchored on observed Denver event ridership.

### 2.4 Parking, operations, start/end service and shared approaches

| ID | Parking supply and remote arrangements | Transit at start and end | Operations, closures and route changes | Access constraints; crowds sharing approaches |
|---|---|---|---|---|
| D1/D2 | About [10,000 stadium spaces](https://denversports.com/nfl/denver-broncos/parking-plan-burnham-yard). Ball Arena lots have been sold for Broncos game parking ([CBS, 2019](https://www.cbsnews.com/colorado/news/denver-broncos-nuggets-pepsi-center/)). A 4+ occupant carpool lot existed in [2021](https://www.denverbroncos.com/news/broncos-encourage-fans-to-make-alternative-transportation-plans-on-game-day-with) (current status not verified). | E and W lines serve Empower Field station; W serves Decatur-Federal; A, B, G and N reach Union Station ([RTD, Jan 2026](https://www.rtd-denver.com/community/news/rtd-provides-service-and-connections-sunday-to-broncos-vs-chargers-game)). C, E and W listed for [Aug 2026](https://www.rtd-denver.com/community/news/2026/rtd-provides-service-and-connections-to-broncos-game-on-friday). Bus routes 1, 15L, 16, 30, 31. Both stations are about an [8-minute walk](https://visitdenver.com/blog/post/ultimate-guide-empower-field-at-mile-high/). | Auraria West station is often closed on game days to consolidate crowds ([Wikipedia](https://en.wikipedia.org/wiki/Empower_Field_at_Mile_High_station)). During 2025 E Line disruptions RTD ran bus shuttles until 45 minutes after games ([RTD](https://www.rtd-denver.com/community/news/2025/rtd-provides-service-and-connections-sunday-to-broncos-vs-jaguars-game)). | I-25 (Colfax and 17th Ave exits), Federal Blvd. Shares rail lines and Union Station with D3 and D4. On 14 Aug 2026 a Zach Bryan night overlapped a sold-out Savannah Bananas game at Coors Field ([RTD](https://www.rtd-denver.com/community/news/rtd-ramps-up-transit-thursday-saturday-for-major-events-across-downtown)). |
| D3 | Lots A+B [more than 4,300 spaces (2018)](https://www.pressreader.com/usa/the-denver-post/20180406/281479276983648), plus downtown garages. Lots open 9 a.m. on Opening Day ([Denverite](https://denverite.com/2026/04/02/rockies-opening-day-2026/)). Nearby lots have charged [$60+ on opening days](https://www.9news.com/video/news/local/scooters-were-a-popular-way-to-get-to-lodo-for-rockies-home-opener/73-b5401016-dfa5-4ffc-8998-afa5aea13105). | Union Station (A, B, E, G, N, W) is a few blocks away. Buses 8, 38, 52, 120X and RX stop at the ballpark ([Denverite](https://denverite.com/2026/04/02/rockies-opening-day-2026/)). RTD adds D, E and W capacity for openers ([RTD, Mar 2026](https://www.rtd-denver.com/community/news/rtd-is-ready-for-april-3-rockies-home-opener-outreach-teams-will-provide-assistance)). | RTD outreach teams at Union Station on big days | Shares Union Station and downtown streets with D1/D4 crowds and convention traffic. Attendance swings widely: 2026 games ranged from a [16,301 low to 39,718](https://denversports.com/mlb/colorado-rockies/rockies-crowd-4726). |
| D4/D5 | Surface lots are being redeveloped. A 64-acre rezoning was approved [21 Oct 2024](https://en.wikipedia.org/wiki/Ball_Arena) with a 25-year buildout. Rideshare zone is in the 4Runner Lot West ([Oct 2026 guide](https://holler.country/news/general/kacey-musgraves-2026-ball-arena-show-in-denver-colorado-everything-you-need-to-know/)). | Ball Arena–Elitch Gardens station (E, W; C in some 2026 releases) on the arena's west side ([RTD](https://www.rtd-denver.com/high-volume-events)) | Rezoning backers expect more light rail, walking and rideshare over time ([Denver Gazette](https://denvergazette.com/news/business/denver-gives-green-light-to-ball-arena-redevelopment/article_1b621e68-8ff8-11ef-9b91-e3b91ff54def.html)) | Speer Blvd, Auraria Pkwy, I-25. Shared parking and rail with D1. |
| S1/S2 | 15 paved lots of [nearly 5,000 spaces plus dirt overflow (aggregator)](https://www.koobit.com/colorado-vs-san-jose-e121524). Parking free with Rapids tickets; concerts charge $20 general and $60 for shuttles and limos staying on site ([official](https://www.dickssportinggoodspark.com/stadium/parking-directions)). | No rail station. Bus route conflict: [route 88](https://www.koobit.com/colorado-vs-san-jose-e121524) vs [route 62](https://meetstadium.com/stadiums/dicks-sporting-goods-park/) (both aggregators; unverified). | Four entrances, some closed for some events ([official](https://www.dickssportinggoodspark.com/stadium/parking-directions)) | Quebec St, 56th/60th/64th Ave approaches; Denver Summit FC also played here in [spring 2026](https://www.denvergazette.com/fans-turn-up-the-heat-for-summit-fcs-first-home-game-at-new-stadium/) |
| S3 | Multiple surrounding public and private lots; AXS pre-paid parking ([venue](https://www.fiddlersgreenamp.com/directions)). The station park-and-ride has [817 spaces](https://en.wikipedia.org/wiki/Arapahoe_at_Village_Center_station), across I-25. | E and R lines at Arapahoe at Village Center, about a 10-minute walk ([venue](https://www.fiddlersgreenamp.com/directions)) | — | I-25 Arapahoe Rd and Orchard Rd exits in the Denver Tech Center. Shares the station with S5's bus link. |
| S4 | Parking free with most tickets. The overflow Jurassic Lot is about a mile from the South Gate ([official FAQ](https://www.redrocksonline.com/plan-your-visit/faq/)). One commercial source claims [~1,500 spaces](https://ridearion.com/red-rocks-shuttle-vs-private-car/); **unverified**. Groups of 24+ in vehicles at least 85% full may reserve Upper North ([commercial guide](https://ridearion.com/blog/the-complete-red-rocks-transportation-guide/)). | No RTD service (not among RTD's [transit-adjacent venues](https://www.rtd-denver.com/high-volume-events)). Commercial shuttles leave as they fill; the last leaves 30 minutes after the show ([Red Rocks Shuttle](https://redrocksshuttle.com/faq)). | Lots open 2 hours before doors. Pickup is restricted to the Jurassic Lot; in-park courtesy shuttles run ([official](https://www.redrocksonline.com/plan-your-visit/getting-here/)). | Hwy 93, Hwy 74, I-70 and C-470 approaches. Mountain roads with few alternatives. |
| S5 | On-site; [parking challenges reported](https://www.stadiumjourney.com/stadiums/centennial-stadium-denver-summit-fc) | Route 153, about 16 minutes from Arapahoe at Village Center ([RTD](https://www.rtd-denver.com/high-volume-events)) | Interim venue through 2027 | E Fremont Ave and Arapahoe Rd corridor; shares the Arapahoe at Village Center feeder with S3 |
| E1 | Coliseum lot and Lot F parking included in grounds admission ([Westword](https://www.westword.com/arts-culture/national-western-stock-show-denver-guide-40827040/)). Organizers steer drivers to free remote parking at the Coors Field lot with a shuttle every 15 minutes from 8 a.m. ([Cowgirl](https://cowgirlmagazine.com/the-2026-national-western-stock-show-kicks-off-january-10/); [Denverite](https://denverite.com/2026/01/07/denver-stock-show-2026-tickets-parking/)). | N Line to 48th & Brighton•National Western Center; bus 48 ([RTD](https://www.rtd-denver.com/high-volume-events)). The walk to some facilities is long ([Westword](https://www.westword.com/arts-culture/national-western-stock-show-denver-guide-40827040/)). | The kickoff parade pauses downtown light rail ([Denver Gazette, 2025](https://www.denvergazette.com/2025/01/07/another-year-another-rodeo-the-national-western-stock-show-returns-eb5f2ac6-cac6-11ef-bdac-bf25d5941e7e)) | I-70 and Brighton Blvd. The remote shuttle runs from the Coors Field lot, sharing the D3 area (off-season for baseball). |
| E2 | Not found for Levitt Pavilion | Not verified | New outdoor site in 2026 | Not assessed |
| X1 | Campus and Research Park lots with Buff Bus shuttles. Expect up to 60-minute exits ([CU](https://www.colorado.edu/pts/special-events/football)). | RTD regional buses. BuffRide historically ran from Denver-area Park-n-Rides ([CU, 2016](https://www.colorado.edu/police/2016/11/01/campus-parking-will-be-limited-nov-3-football-game)); current status not verified. | — | US-36 corridor; separate from the Denver cluster |

### 2.5 Method notes for the estimated rows

**D1 — Empower Field, Broncos (ridership inference, shown step by step)**

1. **Observed count:** RTD recorded [nearly 27,000 light rail boardings at the stadium platform before and after each 2024–25 home game, and nearly 38,000 for the October 2024 Raiders game](https://www.rtd-denver.com/community/news/2025/rtd-doubles-down-on-efforts-to-improve-service-and-enhance-the-customer-experience). RTD said 2025–26 was trending similarly.
2. **Definitional problem:** It is unclear whether the count is post-game boardings only (≈ one count per rail-using attendee) or both directions (≈ two counts per round-trip attendee). RTD describes service as regular schedules plus added cars. Clearing 27,000+ people from one platform after a game on regular schedules would be very demanding. My inference is that the two-direction reading is more plausible, but **RTD does not say so**.
3. **Baseline subtraction:** Empower Field station is primarily an event station. I subtract ≤1,000 non-event boardings (assumption, unsourced, small either way).
4. **Denominator:** [76,125 tickets (sold out)](https://en.wikipedia.org/wiki/Empower_Field_at_Mile_High); attendees assumed to be 90–100% of that (68,500–76,125).
5. **Result:**
   - Two-direction reading: about 13,000–13,500 people, or **17–20%** of attendees.
   - One-direction reading: about 26,000 people, or **34–38%**.
6. **Unmeasured transit additions:** Decatur-Federal (W Line), bus routes 1, 15L, 16, 30 and 31, and riders who alight at Union Station or Colfax at Auraria and walk ([RTD advises the walk for D and H riders](https://www.rtd-denver.com/community/news/rtd-provides-service-and-connections-sunday-to-broncos-vs-chargers-game)). I add +2 to +8 points.
7. **Transit total:** central 24%, range 18–40%. Walk/bike/other is 4% (Sun Valley, Jefferson Park and Highland neighbours, plus scooters from LoDo). **Car = 72% (55–79%).**
8. **Plausibility check:** 10,000 stadium spaces × 2.2–3.0 persons per vehicle = 22,000–30,000 people. That is 29–39% of 76,125, against an estimated ~55,000 car attendees. The remainder must park off-site (Ball Arena lots, Auraria and downtown garages, neighbourhood streets) or arrive by rideshare. Off-site parking at Ball Arena for Broncos games is documented ([CBS](https://www.cbsnews.com/colorado/news/denver-broncos-nuggets-pepsi-center/)). The check is consistent; it does not prove the split.
9. **Park-and-ride caveat:** Some rail riders drove to a Park-n-Ride, and no source gives that share. A car-*involved* figure would therefore be higher than 0.72, possibly approaching 0.80. A car-*on-venue-approach* figure is 0.72.
10. **Historic shuttle:** BroncosRide carried 6,400–6,700 per game ([Denverite](https://denverite.com/2026/06/24/broncosride-bus-returns-rtd/); [Broncos](https://www.denverbroncos.com/news/broncos-encourage-fans-to-make-alternative-transportation-plans-on-game-day-with)), or 8.4–8.8% of 76,125 (computed). A third source claims [over 10,000 per game in 2019 (13.5% of capacity)](https://feeds.milehighsports.com/rtd-announces-theyre-canceling-broncosride-bus-route-to-denver-broncos-games). That conflict is preserved: the 10-year average and the single-season figure are different measures. RTD estimated a revived pilot could serve [6,500 additional train and 3,870 additional bus riders per event](https://denverite.com/2026/06/24/broncosride-bus-returns-rtd/). That is a **projection** and is not used in the current value.

**D3 — Coors Field.** No accessible Denver measurement exists. RTD's report that [just under 51,000 people used the rail system on Opening Day 2019](https://9news.com/article/sports/mlb/colorado-rockies/rtd-surge-in-riders-opening-day/73-866c276a-0998-49e4-9e81-5af1320a0ead) is systemwide, has no baseline, and is **not convertible** to a ballpark share.

The estimate rests on two things. First, Coors Field sits a few blocks from the region's main rail hub. Second, a comparison: Target Field in Minneapolis has [about 14% of fans arriving by light rail](https://www.cbsnews.com/amp/minnesota/news/minn-sports-teams-counting-on-mass-transit-to-get-fans-to-games), with stronger at-the-gate rail than Coors Field but a similar downtown setting. I use transit 17% (10–25%) to allow for Denver's commuter rail and bus, and walk/bike/scooter 8% for LoDo residents and downtown workers. That gives **car 75%**.

Parking check: [30,058 average tickets in 2025](https://www.purplerow.com/rockies-news/75544/rockies-attendance-continued-to-decline-in-2025-but-not-as-much-as-you-might-think) × 0.75 ÷ 2.2–3.0 ≈ 7,500–10,250 vehicles (computed). That is against [4,300+ spaces in Lots A and B](https://www.pressreader.com/usa/the-denver-post/20180406/281479276983648) plus downtown garages, which is plausible. Expect higher car shares on cold April weeknights and lower ones on summer weekends (direction only; unmeasured).

**D4 — Ball Arena.** The arena has a dedicated rail station but sits across Speer Blvd and Auraria Pkwy from the CBD ([Bisnow](https://www.bisnow.com/news/denver/construction-development/kroenke-seeks-redevelopment-of-parking-lots-around-ball-arena-in-downtown-denver-112858)). Its season is mostly winter evenings. I therefore set transit slightly below Coors Field and car at 78%. Low confidence.

**S1, S4 — structural estimates.** These depend on the absence of rail or any public transit (S4), free bundled parking, and venue statements. For example, Red Rocks says many concertgoers drive and promotes carpools and private buses ([official](https://www.redrocksonline.com/plan-your-visit/getting-here/)). Under 2025–26 conditions, no plausible evidence would put either venue below about 0.80.

---

## 3. Regional conclusion

### 3.1 Weighted car shares (exact inputs)

Inputs: one configuration per venue (no mutually exclusive configurations added), and no multi-day totals. E1 and E2 are excluded. Unknown rows D6, D7, E3 and X1 are excluded and listed as missing coverage.

| Venue (row) | Capacity weight | Typical-attendance weight | Car share used |
|---|---|---|---|
| Empower Field, football (D1) | [76,125](https://en.wikipedia.org/wiki/Empower_Field_at_Mile_High) | 76,125 (sold out; tickets, not turnstile) | 0.72 |
| Coors Field (D3) | [46,897](https://www.purplerow.com/rockies-news/75544/rockies-attendance-continued-to-decline-in-2025-but-not-as-much-as-you-might-think) | [30,058 (2025 average tickets)](https://www.purplerow.com/rockies-news/75544/rockies-attendance-continued-to-decline-in-2025-but-not-as-much-as-you-might-think) | 0.75 |
| Ball Arena, basketball (D4) | [19,520](https://en.wikipedia.org/wiki/Ball_Arena) | 19,520 (**capacity proxy**; average not verified) | 0.78 |
| Dick's Sporting Goods Park (S1) | [18,000](https://www.denvergazette.com/fans-turn-up-the-heat-for-summit-fcs-first-home-game-at-new-stadium/) | 18,000 (proxy) | 0.93 |
| Fiddler's Green (S3) | [18,000](https://www.rtd-denver.com/high-volume-events) | 18,000 (proxy) | 0.83 |
| Red Rocks (S4) | [9,525](https://ridearion.com/red-rocks-shuttle-vs-private-car/) | 9,525 (proxy) | 0.88 |
| Centennial Stadium (S5) | [12,372](https://www.denvergazette.com/fans-turn-up-the-heat-for-summit-fcs-first-home-game-at-new-stadium/) | 12,372 (sold-out opener, proxy) | 0.90 |

**Results (computed from the table):**

| Weighting | Car share | Low-end inputs | High-end inputs |
|---|---|---|---|
| Capacity-weighted, all seven | **0.780** | 0.664 | 0.856 |
| Typical-attendance-weighted, all seven | **0.783** | — | — |
| Downtown cluster only (D1, D3, D4), capacity-weighted | **0.738** | — | — |
| Outlying only (S1, S3, S4, S5), capacity-weighted | **0.884** | — | — |

Low- and high-end figures apply every venue's range bound at once. They are a deliberately wide envelope.

### 3.2 Recommendation and contrary evidence

**Recommended existing city type: `hub` (in between).**

- **Why not `transit` (0.40):** No venue's estimate falls below 0.55 even at its low bound. The regional envelope (0.66–0.86) never approaches 0.40. Even the downtown cluster is about 0.74. RTD itself frames event service as regular service with extra cars, not a transit-dominant event system ([RTD](https://www.rtd-denver.com/high-volume-events)).
- **Why `hub` over `sprawl`:** Both carry the same 0.85 fallback, so the choice turns on spill between nearby crowds. Empower Field, Ball Arena and Coors Field form a compact cluster. They share I-25 interchanges and Speer Blvd, the Union Station rail hub and the C/E/W lines, and even parking (Ball Arena lots used for Broncos games, [CBS](https://www.cbsnews.com/colorado/news/denver-broncos-nuggets-pepsi-center/)). RTD explicitly plans around simultaneous events, such as the [14 Aug 2026 stadium concert plus sold-out Coors Field game](https://www.rtd-denver.com/community/news/rtd-ramps-up-transit-thursday-saturday-for-major-events-across-downtown). That is in-between behaviour: meaningful but minority transit, and strong overlap on shared approaches.
- **Strongest contrary evidence (for `sprawl`):**
  1. Every outlying large venue (S1, S3, S4, S5) estimates at 0.83–0.93, and the outlying group averages about 0.88. That is at or above the 0.85 fallback and sprawl-like.
  2. RTD has run no dedicated event shuttles since 2020 and declared them [permanently discontinued](https://www.rtd-denver.com/community/news/rtd-prepared-to-support-denver-broncos-fans-attending-home-games-service-and). The BroncosRide revival is [delayed to 2027](https://denverite.com/2026/06/24/broncosride-bus-returns-rtd/).
  3. Even the downtown cluster's car share (~0.74) sits much closer to 0.85 than to 0.40.
- **Venue exceptions:** D1 (0.72), D3 (0.75) and D4/D5 (0.78) should carry venue-specific overrides below the 0.85 fallback. S1/S2 (0.93), S4 (0.88) and S5 (0.90) should carry overrides above it. The regional fallback of 0.85 is roughly right only as an average for unknown suburban rooms. It is likely too high for unknown central rooms (D6, D7, Colfax and downtown clubs).

### 3.3 Do huge outlying venues obscure the downtown pattern?

No, the reverse is closer to true. The single largest venue, Empower Field, is downtown-adjacent and has the lowest car share. The outlying venues are mid-sized (9,525–18,000) and raise the regional figure only modestly, from 0.738 (downtown only) to 0.780 (all seven). The bigger distortion risk is in the other direction. If Empower Field's one-direction reading is right, the downtown pattern would be more transit-heavy (car ~0.60) than the regional fallback suggests.

### 3.4 Clusters, shared roads and shared audiences (separate findings)

- **Cluster A, downtown/Central Platte Valley:** Empower Field, Ball Arena, Coors Field, plus the Convention Center and DCPA via Union Station and the 16th St corridor. Shared roads: I-25 (17th, Colfax, Speer and 20th/23rd exits), Speer Blvd, Auraria Pkwy. Shared rail: C/E/W lines and Union Station. Shared parking: Ball Arena lots, Auraria and downtown garages.
- **Cluster B, Denver Tech Center / Arapahoe Rd:** Fiddler's Green and Centennial Stadium. They share the Arapahoe at Village Center station feeder and the I-25/Arapahoe Rd corridor.
- **Isolated:** Red Rocks (foothills highways) and Dick's Sporting Goods Park (Commerce City arterials). The National Western Center borrows Cluster A parking via the Coors Field lot shuttle in January.
- **Shared audiences:** RTD's 2026 BroncosRide candidate pickup list reaches Boulder High School, Longmont, US-36 stations, Evergreen, Parker and Highlands Ranch ([Denverite](https://denverite.com/2026/06/24/broncosride-bus-returns-rtd/)). This is evidence that the Broncos audience spans the MSA plus Boulder County.

---

## 4. Data gaps, model limits, conflicts and inaccessible sources

**Inaccessible:**
- [Henao & Marshall 2013, "Parking at Sporting Event Stadiums in Denver, Colorado"](https://doi.org/10.3141/2359-03) is paywalled. It reports event auto modal share at four Denver venues (Coors Field, Ball Arena under its earlier name, Empower Field under an earlier name, and Dick's Sporting Goods Park). It is the most relevant source and could replace estimates D1, D3, D4 and S1 with measurements, though dated around 2011–12. I did not bypass access controls.
- Not located publicly: the Ball Arena redevelopment mobility study, the Burnham Yard mobility study (required but [not yet complete](https://denverite.com/2025/11/05/broncos-burnham-yard-plan-vibrant-denver-bond/)), and the RTD high-volume events plan submitted to the Board ([planned Feb 2026](https://www.rtd-denver.com/high-volume-events)).

**Source conflicts (preserved):**
- **Capacity.** Empower Field: [76,125](https://en.wikipedia.org/wiki/Empower_Field_at_Mile_High) vs [75,000 (RTD)](https://www.rtd-denver.com/high-volume-events). Coors Field: [46,897](https://www.purplerow.com/rockies-news/75544/rockies-attendance-continued-to-decline-in-2025-but-not-as-much-as-you-might-think) vs [50,000 (RTD)](https://www.rtd-denver.com/high-volume-events). Ball Arena: [20,000 (RTD)](https://www.rtd-denver.com/high-volume-events) vs configuration-specific figures. These gaps are small and definitional (rounded agency figures vs current seating).
- **BroncosRide riders per game.** 6,400 vs 6,700 vs "over 10,000" (sources in §2.5). These are different measures: a ten-year average vs one season.
- **Dick's Sporting Goods Park bus route.** 88 vs 62. Both sources are aggregators, and the official page names no route.
- **Red Rocks parking supply.** ~1,500 spaces from a commercial operator only. No official count was retrieved.
- **RTD Empower Field boardings.** The count's definition (one direction or both) moves D1 between 0.55 and 0.79.

**Model limitations:**
- Commercial shuttles (S4) and charters (S2) are buses on the same approach roads. Counting their riders as non-car is correct per person, but they still add vehicles.
- Rideshare is inside "car". It produces about two approach trips per attendee group (drop-off and empty return), which per-person shares do not capture.
- Weather and season effects (winter Broncos and Nuggets vs summer Rockies) are directional only.
- Concerts (D2, D5, S2) have no Denver data and use sports analogies.
- Ticketing and feed coverage were verified only for Fiddler's Green (AXS). Fan/Friction feed coverage could not be assessed from public sources.

**Coverage gaps (fixed rooms ~1,000+ not researched; no capacities verified here):**
- Denver: Mission Ballroom, Fillmore Auditorium, Paramount Theatre, Ogden Theatre, Gothic Theatre, Denver Coliseum, the Bellco Theatre inside the Convention Center, Levitt Pavilion (now E2's venue), University of Denver's Magness Arena.
- Metro: 1STBANK Center (Broomfield; status unverified), CU Events Center (Boulder).
- Edge metros: Folsom Field (X1), Canvas Stadium (Fort Collins), Blue Arena and Budweiser Events Center (Loveland), and Colorado Springs venues (Ford Amphitheater, Broadmoor World Arena, Falcon Stadium).
- Provisional rule for these: apply the `hub` 0.85 fallback, with the caveat that central Denver rooms on Colfax and downtown are probably below it.

---

## 5. Boundary recommendation

- **Core event metro:** the **Denver–Aurora–Centennial MSA**. It has 10 counties ([OMB 2023 definitions](https://en.wikipedia.org/wiki/Denver_metropolitan_area)) and [3,092,037 residents in 2025](https://en.wikipedia.org/wiki/Colorado_statistical_areas). All seven weighted venues sit inside it.
- **Edge municipalities (include for audiences and spill; flag separately):** Boulder, Louisville, Longmont and the US-36 corridor. They lie in the separate Boulder MSA but inside the [Denver–Aurora–Greeley CSA (3,799,023 in 2025)](https://en.wikipedia.org/wiki/Colorado_statistical_areas). Evidence: Broncos audience pickup points (§3.4). Folsom Field (X1) shares no approach roads with Cluster A, so treat its crowds as non-overlapping with Denver venues.
- **Separate metros:** Fort Collins–Loveland and Colorado Springs. Each is a separate MSA with its own venues and no shared approaches within crowd-overlap range. The 2029 Colorado Connector will link Fort Collins and Denver with only [three daily round trips](https://railmarket.com/news/passenger-rail/59858-coco-colorado-connector-plans-to-launch-denver-to-fort-collins-passenger-rail-by-2029), too few to merge event metros. Greeley is a CSA member but an edge case with no major venue researched.

**Inconsistencies between briefs:**
1. The working boundary is called "Denver–Aurora–Lakewood". OMB renamed it **Denver–Aurora–Centennial** in 2023 ([source](https://en.wikipedia.org/wiki/Colorado_statistical_areas)). The boundary is otherwise equivalent.
2. DRCOG's planning region is a different footprint, described as ["9¼ counties, 3.3 million"](https://www.law.du.edu/sites/default/files/2023-11/Spotts%2C%20Robert%20-%20Looking%20Forward-%20The%20Future%20of%20Transporation%20Infrastructure.pdf) in an older presentation. Do not mix its commute statistics with MSA population.
3. The companion venue answer was unavailable, so row keys here need mapping.
4. RTD's "capacity" figures are building-wide for the Convention Center and DCPA. They are not single-crowd capacities and should not enter crowd weighting.

---

## 6. Car-share values keyed to rows

| Row | Value | Type |
|---|---|---|
| D1 Empower Field, Broncos | 0.72 (0.55–0.79) | **Estimated** from observed ridership |
| D2 Empower Field, concerts | 0.72 (0.60–0.82) | Estimated (analogy) |
| D3 Coors Field, Rockies | 0.75 (0.65–0.85) | Estimated (comparison) |
| D4 Ball Arena, NBA/NHL | 0.78 (0.68–0.88) | Estimated |
| D5 Ball Arena, concerts | 0.78 (0.68–0.88) | Estimated |
| S1 Dick's Sporting Goods Park, MLS | 0.93 (0.88–0.97) | Estimated (structural) |
| S2 Dick's Sporting Goods Park, concerts | 0.93 (0.85–0.97) | Estimated |
| S3 Fiddler's Green | 0.83 (0.75–0.90) | Estimated |
| S4 Red Rocks | 0.88 (0.80–0.95) | Estimated (structural) |
| S5 Centennial Stadium | 0.90 (0.85–0.95) | Estimated |
| E1 National Western Stock Show | 0.90 car-involved (0.80–0.95) | Estimated |
| D6, D7, E2, X1 | Unknown; `hub` 0.85 provisional | Fallback |
| E3 open-site parades and festivals | Unknown; do not apply the venue fallback | — |

**Measured values:** none. **Projected values:** only RTD's BroncosRide pilot ridership estimate (§2.5), which is not used in any current value.

---

## 7. Confirmed and proposed changes through 2028 (with re-check dates)

| Change | Status | Date | Effect on rows | Re-check |
|---|---|---|---|---|
| BroncosRide pilot (dedicated game buses from ~33 sites) | **Board-approved pilot (9–5), not yet operating**; about $2.1M cost; delayed from 2026 ([Denverite](https://denverite.com/2026/06/24/broncosride-bus-returns-rtd/)) | Stakeholder planning Jan 2027; target 2027 season | D1 transit and shuttle share up and car share down if launched | Feb 2027; Aug 2027 |
| RTD high-volume events plan | Board resolution 28 Oct 2025; plan due Feb 2026; service changes from May 2026 **if adopted** ([RTD](https://www.rtd-denver.com/high-volume-events)). Adoption outcome not verified. | 2026 | D1–D5 transit capacity | Nov 2026 |
| Denver Summit FC moves | Interim Centennial Stadium through 2027 ([KOAA](https://www.koaa.com/sports/denver-summit-fcs-centennial-stadium-wont-be-ready-for-start-of-season)). **Ground broken** on a 14,500-seat Santa Fe Yards stadium at I-25 & Broadway, opening planned 2028 ([Denver7](https://www.denver7.com/sports/denver-summit-fc/home-sweet-home-denver-summit-fc-officially-breaks-ground-on-new-stadium-at-santa-fe-yards)) | 2028 season | Retire S5; add a new central row (rail-adjacent, likely well below 0.90) | Jan 2028 |
| East Colfax BRT | **Funded, under construction.** Center bus lanes Broadway–Colorado Blvd from fall 2026; full BRT late 2027/early 2028 ([RTD](https://www.rtd-denver.com/community/news/2026/east-colfax-avenue-bus-rapid-transit-brt-investment-update-sept-8-2026); [RTD](https://www.rtd-denver.com/community/news/2026/colfax-reopens-from-broadway-to-colorado-blvd-this-fall)) | 2026–2028 | Colfax-corridor rooms (coverage gap) | Mar 2028 |
| GABF relocation | **Done:** moved to Levitt Pavilion for 2026 ([Westword](https://www.westword.com/food-drink/2026-great-american-beer-festival-is-moving-to-levitt-pavilion-40836282/)) | Oct 2026 | E2 site changed; old Convention Center data obsolete | Oct 2027 |
| Ball Arena lot redevelopment | Rezoned Oct 2024; 25-year phased buildout ([Wikipedia](https://en.wikipedia.org/wiki/Ball_Arena)) | Ongoing | D4/D5 and D1 off-site parking gradually reduced | Annually (Oct) |
| New Broncos stadium, Burnham Yard | **Proposal / pre-construction.** Permits targeted Jan 2027; opening targeted 2031 ([KOAA](https://www.koaa.com/sports/denver-broncos-fans-raise-tailgating-parking-concerns-over-new-burnham-yard-stadium-renderings); [Denverite](https://denverite.com/2025/11/05/broncos-burnham-yard-plan-vibrant-denver-bond/)). Phase 1 parking about equal to today's ~10,000 ([Denver Sports](https://denversports.com/nfl/denver-broncos/parking-plan-burnham-yard)). Small Area Plan expected late 2026 ([City of Denver](https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development/Planning/Plans-in-Progress/Burnham-Yard-Community-Planning)). | After 2028 | None through 2028; D1 unchanged | Jan 2027 (permits); Dec 2026 (plan) |
| Colorado Connector passenger rail | **Funded starter service**, Denver–Fort Collins, 2029 ([Railmarket](https://railmarket.com/news/passenger-rail/59858-coco-colorado-connector-plans-to-launch-denver-to-fort-collins-passenger-rail-by-2029)). Southern expansion depends on a [Nov 2026 tax vote](https://www.spartnerships.com/colorado-connector-plan-outlines-4-7b-front-range-rail-buildout/). | 2029 (outside window) | Boundary unchanged through 2028 | Nov 2026 (vote result) |
| RTD fare and app changes | Tap-n-Ride launched Nov 2025; merged Next Ride app planned mid-2026 ([RTD](https://www.rtd-denver.com/community/news/2025/rtd-doubles-down-on-efforts-to-improve-service-and-enhance-the-customer-experience)) | 2025–2026 | Minor | Not needed |

**Suggested full re-check:** February 2027 (BroncosRide decision, RTD event plan outcome, Burnham Yard permits), then January 2028 (Summit FC move, Colfax BRT opening).
