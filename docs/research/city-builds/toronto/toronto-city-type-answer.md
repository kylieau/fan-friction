<!-- Pasted by Kylie in the Oct 12, 2026 Claude Code session, answering docs/research/city-builds/toronto/toronto-city-type-prompt.md. Saved in full, unedited below this line. Not a product lock: fold into the city settings by the checklist. -->

# Toronto city-type answer: event travel evidence for Fan/Friction Gridlock

**Research date:** 12 October 2026 (public web sources only; every figure links to its source).
**Scope:** City of Toronto plus Peel, York, Durham and Halton as the working boundary, with Hamilton and Oshawa treated as edge cases.
**Companion venue answer:** not available to this research pass. Venues were enumerated independently. Row IDs (`TOR-xx`, `EVT-xx`, `EDGE-xx`) are local to this file and should be re-keyed to the companion answer's row IDs when it becomes available.

---

## 0. Headline

- **Recommended existing city type: `transit`** (fallback car share 0.4). Confidence is low to medium.
- **No public source gives a measured person-level mode split for any Toronto venue.** Every value below is one of four kinds:
  - a city projection;
  - an operator claim;
  - a dated parking model;
  - a transparent estimate built from ridership counts and parking supply.
- **The estimated car share for the large city venues is about 0.40.**
  - Capacity-weighted, with one configuration per venue: 0.40 (low–high bounds 0.29–0.55).
  - Typical-attendance-weighted: 0.40.
  - That 0.40 matches the existing `transit` constant. This report did not tune toward it, and the uncertainty band is wide.
  - The `hub`/`sprawl` value of 0.85 sits outside the plausible range for every large Toronto venue examined.
- **The strongest contrary evidence:**
  - the absence of any measured split;
  - Exhibition Place's parking demand and stakeholder testimony that many visitors drive regardless of transit;
  - Rogers Stadium's large park-and-ride supply;
  - suburban venues (Mississauga, Brampton, Oshawa, Markham Indy) that are plausibly car-dominant.

---

## 1. Evidence classes used

| Class | Meaning in this file |
|---|---|
| **Measured** | Observed person-level mode split for attendees of a named event. *None was found for any Toronto venue.* |
| **Operator-reported** | Venue or promoter states a share without publishing the method. |
| **Projected** | Pre-event plan or forecast by a public body. |
| **Modelled** | Consultant parking or traffic model (vehicles, not people). |
| **Ridership-inferred** | Transit agency counts converted to an attendee share, with the arithmetic shown. |
| **Estimated** | Analyst estimate from the above plus comparison. Assumptions are stated. |
| **Background** | Ordinary commuting or all-trip travel surveys. Never treated as event travel. |

**Conventions**
- "Car share" = private car + carpool + taxi/rideshare, per person-trip to the event.
- A car trip to remote or park-and-ride parking followed by a shuttle or subway ride counts as **car-involved**.

---

## 2. Background only: ordinary travel (not event travel)

| Item | Value | Source |
|---|---|---|
| Auto-driver share, all trips starting and ending in the City of Toronto (TTS 2022) | 45.3% | [City of Toronto TTS 2022 charts, summarised by B. Donnelly](https://brandondonnelly.com/toronto-isnt-as-car-oriented-as-you-might-think); original charts in [City report](https://www.toronto.ca/legdocs/mmis/2024/cc/bgrd/backgroundfile-250546.pdf) |
| Transit share, all trips from Toronto to downtown (TTS 2022) | 40.4% (non-car modes near 75%) | [same](https://brandondonnelly.com/toronto-isnt-as-car-oriented-as-you-might-think) |
| Transit share, home-based work trips to downtown | 48.7% | [same](https://brandondonnelly.com/toronto-isnt-as-car-oriented-as-you-might-think) |

These figures describe ordinary weekday travel by residents. They are not event travel. They are used only as a sanity bound: downtown is a place where most people already arrive without a car.

---

## 3. Boundary evidence and recommendation

| Geography | 2021 population | Source |
|---|---|---|
| City of Toronto | 2,794,356 | [City of Toronto 2021 Census backgrounder](https://www.toronto.ca/wp-content/uploads/2022/02/92e3-City-Planning-2021-Census-Backgrounder-Population-Dwellings-Backgrounder.pdf) |
| Toronto CMA | 6,202,225 | [Durham Region census report](https://www.durham.ca/en/regional-government/resources/Documents/Council/CIP/CIP-2022/CIP-04082022.pdf) |
| GTHA (Toronto, Peel, York, Durham, Halton, Hamilton) | 7,281,694 | [City of Toronto backgrounder](https://www.toronto.ca/wp-content/uploads/2022/02/92e3-City-Planning-2021-Census-Backgrounder-Population-Dwellings-Backgrounder.pdf) |
| City of Hamilton | 569,353 | [Sean Marshall, from StatCan](https://seanmarshall.ca/tag/greater-toronto/) |
| GTA (derived: GTHA minus City of Hamilton) | 6,712,341 (derived); a [commonly cited extrapolation](https://en.wikipedia.org/wiki/Greater_Toronto_Area) gives 6,711,985 | arithmetic from the rows above |
| Hamilton CMA | 785,131 | [Canadian Suburbs project, StatCan tract data](https://www.canadiansuburbs.ca/wp-content/uploads/2023/08/POP-CMA-2021.pdf) |
| Oshawa CMA | 415,311 | [same](https://www.canadiansuburbs.ca/wp-content/uploads/2023/08/POP-CMA-2021.pdf) |

**Recommendation**
- **Use the GTA as the city.** That is Toronto, Peel, York, Durham and Halton.
  - It contains every large venue and event considered here except Hamilton's.
  - It is the standard regional planning unit; the GTA is larger than the Toronto CMA ([Wikipedia summary of StatCan geography](https://en.wikipedia.org/wiki/Greater_Toronto_Area)).
- **Keep Hamilton separate.**
  - It is its own CMA of about 785,000.
  - It now has its own reopened 18,000-capacity arena ([TD Coliseum](https://en.wikipedia.org/wiki/TD_Coliseum), reopened 21 November 2025).
  - Its large-event calendar does not share approach roads or transit hubs with Toronto venues on the same night.
- **Do not treat the Golden Horseshoe as one city.** Niagara is a separate market reached only by limited weekend GO service: four trips per direction on Saturdays and Sundays for Blue Jays fans ([Blue Jays/GO](https://www.mlb.com/bluejays/ballpark/transportation/train)).

**Edge-case municipalities (identify separately)**
- **Oshawa, Whitby, Clarington.** In Durham (GTA) but form the separate Oshawa CMA. They host the Tribute Communities Centre (`EDGE-02`). Recommendation: inside the city boundary for audience, but the venue is a suburban exception.
- **Burlington.** In Halton (GTA) but grouped with the Hamilton CMA in StatCan geography (see the CMA columns in the [GTA geography table](https://en.wikipedia.org/wiki/Greater_Toronto_Area)). No 5,000+ venue was identified there. It is a shared-audience corridor via GO Lakeshore West.
- **Simcoe County growth municipalities** (e.g., Bradford West Gwillimbury, New Tecumseth). Outside the GTHA but fast-growing commuter areas ([Sean Marshall](https://seanmarshall.ca/tag/greater-toronto/)). These are audience origins only; no venue rows.
- **Markham.** Inside the GTA (York). It is now home to the IndyCar race (`EVT-04`), which left Toronto in 2026.
- **Shared audience across the Hamilton boundary.** The Toronto Rock lacrosse team returned to Hamilton's arena in 2025–26 ([GPSmyCity summary](https://www.gpsmycity.com/attractions/copps-coliseum-(td-coliseum)-45978.html); [Tourism Hamilton](https://tourismhamilton.com/td-coliseum-reopens-a-new-era-for-hamiltons-legendary-live-music-venue/)). A Toronto-branded crowd therefore now gathers outside the recommended boundary.

---

## 4. Venue and event inventory

### 4a. Identity, setup, date represented and crowd size

| ID | Verified current name | Municipality | Setup / event represented | Date or season represented | Capacity / crowd (people unless stated) |
|---|---|---|---|---|---|
| TOR-01 | Rogers Centre | Toronto (downtown) | Blue Jays MLB regular season | 2025 season (81 home dates) | Baseball capacity 39,150 ([Wikipedia](https://en.wikipedia.org/wiki/Rogers_Centre)) vs "just under 42,000" ([Daily Hive](https://dailyhive.com/toronto/toronto-blue-jays-mlb-attendance)), a **conflict**. 2025 average 35,184 ([2025 season](https://en.wikipedia.org/wiki/2025_Toronto_Blue_Jays_season)) |
| TOR-02 | Rogers Centre | Toronto | Blue Jays 2025 postseason incl. World Series | Oct–1 Nov 2025 | Count and attendance of home postseason games not verified in this pass (gap) |
| TOR-03 | Rogers Centre | Toronto | Stadium concerts | Summer | 49,282 ([Billboard Canada](https://ca.billboard.com/business/touring/rogers-centre-rbc-amphitheatre-top-music-venues)); range 10,000–55,000 by configuration ([Wikipedia](https://en.wikipedia.org/wiki/Rogers_Centre)) |
| TOR-04 | Rogers Stadium (temporary; YZD / former Downsview Airport lands) | Toronto (North York) | Outdoor stadium concerts | May–Sep 2026 (second season) | 50,000. 482,000 fans at 10 shows by late July 2026, about 48,200 per show ([Pollstar](https://news.pollstar.com/2026/07/30/rogers-stadium-evolves-as-torontos-semi-permanent-large-scale-concert-venue-in-second-season/)) |
| TOR-05 | Scotiabank Arena | Toronto (downtown) | Maple Leafs (NHL) / Raptors (NBA) | Oct–Apr/Jun; mostly weekday winter evenings | Hockey 18,819; basketball 20,511 ([StadiumScene](https://www.stadiumscene.tv/stadium/Scotiabank-Arena)) vs "19,800-seat" ([fan guide](https://concertsremembered.app/venues/scotiabank-arena)), a **conflict**; verify in companion |
| TOR-06 | Scotiabank Arena | Toronto | Concerts; 3 Toronto Tempo WNBA games (27 Jun, 30 Jul, 18 Aug 2026) | 2026 | As TOR-05 ([Tempo schedule](https://wnba-toronto.prezly.com/toronto-tempo-to-tip-off-inaugural-2026-season-may-8-at-coca-cola-coliseum)) |
| TOR-07 | BMO Field, branded "Toronto Stadium" for FIFA | Toronto (Exhibition Place) | FIFA World Cup 2026, 6 matches, temporary expansion | 12 Jun–2 Jul 2026 | 45,736 temporary capacity ([Wikipedia](https://en.wikipedia.org/wiki/BMO_Field)) |
| TOR-08 | BMO Field | Toronto | Toronto FC (MLS), standard configuration | 2025 season | 28,351 ([Wikipedia](https://en.wikipedia.org/wiki/BMO_Field)); about 30,000 elsewhere. 2025 average 21,374; range 14,018–28,855 ([CP24](https://www.cp24.com/news/sports/2025/10/17/bmo-field-a-work-in-progress-as-the-curtain-falls-on-toronto-fcs-mls-season/)) |
| TOR-09 | BMO Field | Toronto | Toronto Argonauts (CFL) | Jun–Nov | Capacity per TOR-08; CFL attendance not verified from a primary source (gap) |
| TOR-10 | Coca-Cola Coliseum | Toronto (Exhibition Place) | Toronto Tempo (15 WNBA games), Marlies (AHL), Sceptres (PWHL) | 2026 | 8,500. Tempo opener sold out at 8,210 on 8 May 2026 ([Wikipedia](https://en.wikipedia.org/wiki/Toronto_Tempo)) |
| TOR-11 | RBC Amphitheatre (formerly Budweiser Stage) | Toronto (Ontario Place) | Outdoor amphitheatre concerts, about 80 shows | 21 May–9 Oct 2026 | 16,000 ([City TMP report](https://www.toronto.ca/legdocs/mmis/2026/te/bgrd/backgroundfile-286598.pdf)); "now-15,000" ([Billboard](https://ca.billboard.com/business/touring/rogers-centre-rbc-amphitheatre-top-music-venues)); "18,000-ish" summer total ([CHCH/CP](https://www.chch.com/?p=176034)). **Conflict preserved**; City figure used for weights |
| TOR-12 | Sobeys Stadium (York University) | Toronto (North York) | National Bank Open tennis sessions (multi-day); "The Bowl" concerts | August (tennis); Aug–Oct concerts | 12,500 stadium court; 11,000–14,000 concerts ([Wikipedia](https://en.wikipedia.org/wiki/Sobeys_Stadium)); net capacity 10,876 on one listing ([Consequence](https://concerts.consequence.net/events/national-bank-open-wta-women-s-tennis)). Which 2026 draw (WTA or ATP) played in Toronto conflicts between low-quality sources (gap) |
| EDGE-01 | Paramount Fine Foods Centre | Mississauga (Peel) | Raptors 905, OHL Steelheads, concerts | Year-round | Basketball 5,400; hockey 5,420; concerts up to 7,000 ([Wikipedia](https://en.wikipedia.org/wiki/Paramount_Fine_Foods_Centre)); City lists 3,000–6,000 for concerts ([City of Mississauga](https://www.mississauga.ca/arts-and-culture/locations/paramount-fine-foods-centre-main-bowl/)) |
| EDGE-02 | Tribute Communities Centre | Oshawa (Durham; Oshawa CMA) | OHL Generals, concerts | Year-round | 5,180 hockey; 7,300 maximum ([list of arenas](https://en.wikipedia.org/wiki/List_of_indoor_arenas_in_Canada)) |
| EDGE-03 | CAA Centre | Brampton (Peel) | OHL / CEBL | Year-round | 5,000 ([list of arenas](https://en.wikipedia.org/wiki/List_of_indoor_arenas_in_Canada)) |
| TOR-13 | History; Danforth Music Hall; other 1,000–5,000 rooms | Toronto | Concert rooms and theatres | Year-round | History about 2,500; Danforth Music Hall about 1,500 ([Billboard Canada](https://ca.billboard.com/fyi/live-nation-plan-calls-all-season-ontario-place-music-venue)). Other rooms (Massey Hall, Meridian Hall, Roy Thomson Hall, Queen Elizabeth Theatre, Mattamy Athletic Centre, Varsity, Lamport Stadium, Woodbine, Canada's Wonderland) **not verified in this pass** (gap) |
| EVT-01 | Canadian National Exhibition (CNE) | Toronto (Exhibition Place, about 260 acres in fair mode) | 18-day fair, open site | 2025 run represented; 2026 ran 21 Aug–7 Sep ([City report](https://www.toronto.ca/legdocs/mmis/2026/te/bgrd/backgroundfile-288489.pdf)) | 1.42 million visits over 18 days in 2025 ([CNE](https://www.theex.com/wp-content/uploads/2025/09/2025-CNE-Final-Attendance.pdf)), about 78,900 visits per day (derived). 2024 Labour Day weekend about 450,000 over 4 days ([CNE 2024](https://theex.com/wp-content/uploads/2024/09/2024-CNE-Final-Attendance_FINAL.pdf)). **Visits, not a simultaneous crowd** |
| EVT-02 | Toronto Caribbean Carnival Grand Parade | Toronto (Exhibition Place / Lake Shore Blvd W) | Open-route parade from 8 a.m. | 1 Aug 2026 ([Toronto Police](https://www.tps.ca/media-centre/news-releases/66545/)) | No primary attendance figure found. "500,000+" appears only on a [tourism listicle](https://www.torontotourism.org/caribana-toronto-guide/) (unverified) |
| EVT-03 | TCS Toronto Waterfront Marathon | Toronto (downtown / waterfront) | 5K, half and full marathon; road race | 2025 represented (18–19 Oct); 2026 scheduled 17–18 Oct ([RaceRaves](https://raceraves.com/races/scotiabank-toronto-waterfront-marathon-half-marathon/)) | About 30,000 participants plus 100,000+ spectators over the weekend ([organizer](https://www.torontowaterfrontmarathon.com/blog/)). Multi-day |
| EVT-04 | Ontario Honda Dealers Indy at Markham (moved from Exhibition Place) | Markham (York) | Temporary street circuit at Unionville GO | 14–16 Aug 2026; multi-year deal through 2030 ([NOW](https://nowtoronto.com/news/honda-indy-markham-2026-schedule-road-closures/)) | Projections only: 140,000+ ([Motorsport.com](https://www.motorsport.com/indycar/news/indycar-moves-race-from-toronto-to-markham-starting-in-2026/10755973/)) or 150,000 ([City estimate via CP](https://www.pentictonherald.ca/spare_news/article_9739a1b7-0bd3-550e-a703-638900d239de.html)), **3-day totals** |
| EVT-05 | FIFA Fan Festival 2026 | Toronto (near Exhibition Place / Fort York) | One-off open site | Jun–Jul 2026 | Not recurring; included only because its riders are mixed into the TOR-07 counts |
| EDGE-04 | TD Coliseum | Hamilton | Concerts; Toronto Rock lacrosse | Since Nov 2025 | 18,000 for concerts ([Wikipedia](https://en.wikipedia.org/wiki/TD_Coliseum)). **Outside the recommended boundary** |

### 4b. Person mode split by venue or event

People, not vehicles. "Unclassified" is the share not covered by any evidence.

| ID | Car / carpool / rideshare | Public bus / rail | Dedicated event shuttle | Walk / bike / other | Unclassified | Sums to 100%? |
|---|---|---|---|---|---|---|
| TOR-01 | Unknown | GO Transit and UP Express only: about 13–31% (ridership-inferred; §5b). TTC unknown | None (regular service plus added trips) | Unknown | Remainder | **No.** Only the GO/UP component is evidenced |
| TOR-02 | Unknown | GO/UP about 19,800 riders per World Series game (derived; §5b) | None | Unknown | Remainder | **No** |
| TOR-03 | Unknown | Unknown | None | Unknown | 100% | No evidence |
| TOR-04 | Car-involved implied 0–50%; see note | "More than half" chose public transit (operator-reported, 2026) | Free shuttle from Wilson station; free post-show TTC and GO ([CTV](https://www.ctvnews.ca/toronto/article/no-go-train-service-at-downsview-park-station-for-bruno-mars-concert-this-weekend/)) | Unknown | Unknown | **No.** Operator method unpublished. Park-and-ride riders may be counted as "transit" (§6) |
| TOR-05/06 | Unknown | Unknown | None | Unknown | 100% | No evidence |
| TOR-07 | Projected under 20% | Ridership-inferred: TTC surface about 15% or less; GO/UP about 33% (§5a) | TTC "Fleet Hub" event service on routes 509, 511 and 829 (counted as public) | Bike share valets about 2,000 rides per match day; pedestrian activity +70% to +140% | About 30–50% walk, car, charter or other (residual) | **Projected only.** City expected over 80% transit, walk or cycle ([CP24](https://www.cp24.com/local/toronto/2026/06/02/fifa-world-cup-reality-check-will-torontos-transit-first-mobility-plan-deliver/)). Ridership components leave a residual |
| TOR-08/09 | Unknown (modelled vehicle demand only; §5c) | Unknown | None | Unknown | 100% | No evidence |
| TOR-10 | Unknown | Unknown | None | Unknown | 100% | No evidence |
| TOR-11 | Unknown; includes heavy rideshare pick-up activity (§4d) | Unknown | None | Unknown | 100% | No evidence |
| TOR-12 | Unknown | Unknown | Route 106 bus links the subway to the stadium ([Wikipedia](https://en.wikipedia.org/wiki/Sobeys_Stadium)) | Unknown | 100% | No evidence |
| EDGE-01–03 | Unknown | Unknown | None | Unknown | 100% | No evidence |
| EVT-01 | Unknown | Unknown | None | Unknown | 100% | No evidence |
| EVT-02 | Unknown | Unknown | None | Unknown | 100% | No evidence |
| EVT-03 | Unknown | Unknown | None | Unknown | 100% | No evidence |
| EVT-04 | Unknown. Remote lots (IBM lot, Markham Civic Centre) plus shuttle count as **car-involved** ([ToDoCanada](https://www.todocanada.ca/2026-indy-toronto/)) | GO Stouffville line to Unionville; VIVA | Shuttles from remote lots (car-involved) | Unknown | 100% | No evidence |

### 4c. Recommended car-share value per row

| ID | Recommended car share | Range | Confidence | Evidence type / date / event type | Value class |
|---|---|---|---|---|---|
| TOR-01 | **0.35** | 0.25–0.50 | Low | Metrolinx 2025 ridership (sports); no on-site stadium lot; downtown background | Estimated |
| TOR-02 | 0.35 | 0.20–0.50 | Low | Metrolinx World Series comparison (2025; sports, postseason) | Estimated |
| TOR-03 | 0.35 | 0.25–0.55 | Low | By comparison with TOR-01 (same building and access); operator urges transit ([Blue Jays concerts page](https://www.mlb.com/bluejays/tickets/health-and-safety/rogers-centre/concerts)) | Estimated |
| TOR-04 | **0.45** (car-involved) | 0.35–0.60 | Low–medium | Operator claim, July 2026 (concerts, outlying site) | Operator-reported, adjusted for park-and-ride |
| TOR-05 | 0.35 | 0.25–0.50 | Low | No event data. Comparison with TOR-01 (Union Station adjacency, PATH link) | Estimated |
| TOR-06 | 0.35 | 0.25–0.55 | Low | As TOR-05 | Estimated |
| TOR-07 | **0.15** | 0.10–0.25 | Medium-low | City projection plus TTC and Metrolinx counts (June–July 2026; mega-event, no general parking) | Projected, partly ridership-corroborated |
| TOR-08 | **0.40** | 0.30–0.55 | Low | WSP parking model (2016, vehicles) plus parking supply | Modelled / estimated |
| TOR-09 | 0.40 | 0.30–0.55 | Low | As TOR-08; no Argonauts-specific evidence | Estimated |
| TOR-10 | 0.45 | 0.30–0.65 | Low | Same-site comparison with TOR-08; smaller crowds can find on-site parking more easily | Estimated |
| TOR-11 | 0.40 (incl. rideshare) | 0.25–0.55 | Low | City TMP (April 2026): no general public parking on site; documented rideshare stopping problem | Estimated |
| TOR-12 | Unknown | — | — | No evidence. Provisional fallback = city type (0.4 under `transit`); likely too low (§6) | Unknown |
| EDGE-01–03 | Unknown | — | — | No evidence. Provisional fallback 0.4 under `transit`. Plausibly car-dominant; venue-specific values need sources | Unknown |
| EVT-01 | Unknown | — | — | Parking bound only (§5d) | Unknown |
| EVT-02 | Unknown | — | — | Road closures and police transit advice only | Unknown |
| EVT-03 | Unknown | — | — | Road closures; subway starts at 8 a.m. on race Sunday | Unknown |
| EVT-04 | Unknown | — | — | GO adjacency but remote car parks; organizer projections only | Unknown |
| EDGE-04 | Out of scope (Hamilton) | — | — | — | — |

### 4d. Parking, operations and shared approaches

| ID | Parking supply and remote arrangements | Event operations, closures, start/end service | Access constraints and crowds sharing approaches |
|---|---|---|---|
| TOR-01–03 | No dedicated stadium lot; city and private garages. Game-day rates roughly $20–45 ([BleacherBound](https://bleacherbound.com/ballparks/rogers-centre/transit/), secondary source) | Standard closures and reduced lanes on Bremner Blvd for concerts ([Blue Jays](https://www.mlb.com/bluejays/tickets/health-and-safety/rogers-centre/concerts)). Extra GO trips for the postseason. World Series Game 7 ended near the last-train window, leaving fans stranded ([Global News](https://globalnews.ca/news/11508883/toronto-blue-jays-transit-chaos)) | Shares Union Station and Gardiner/Spadina approaches with Scotiabank Arena (about a 10-minute walk apart). Jays games overlapped FIFA match days (e.g., 12 Jun, 23 Jun, 26 Jun 2026) per the [TTC board update](https://www.toronto.ca/legdocs/mmis/2026/ttc/bgrd/backgroundfile-289746.pdf) |
| TOR-04 | About 11,000 parking spaces along Line 1 and at York University ([Billboard Canada](https://ca.billboard.com/business/touring/rogers-stadium-toronto-stray-kids)); drivers directed to station lots and York U commuter parking ([CTV](https://www.ctvnews.ca/toronto/article/no-go-train-service-at-downsview-park-station-for-bruno-mars-concert-this-weekend/)) | Free post-show TTC from Downsview Park, Sheppard West and Wilson; added Line 1 and 2 service ([blogTO](https://www.blogto.com/music/2026/05/ttc-free-rides-rogers-stadium/)). No GO at Downsview Park on three Bruno Mars dates (23, 24, 30 May 2026) due to track closure ([CTV](https://www.ctvnews.ca/toronto/article/no-go-train-service-at-downsview-park-station-for-bruno-mars-concert-this-weekend/)). Exit time cut from about an hour to at most 45 minutes in 2026 ([Pollstar](https://news.pollstar.com/2026/07/30/rogers-stadium-evolves-as-torontos-semi-permanent-large-scale-concert-venue-in-second-season/)). Last GO train around 12:30 a.m. after a 2025 show ([CBC](https://www.cbc.ca/news/canada/toronto/rogers-stadium-crowds-1.7579366)) | Station "safety queuing" when TTC capacity is reached. Shares Line 1 and York U parking with Sobeys Stadium (TOR-12) |
| TOR-05/06 | "Over 13,000" public spaces within walking distance ([Ticketmaster blog](https://blog.ticketmaster.com/step-inside-scotiabank-arena-toronto-on/), secondary source; not verified) | Metrolinx "Get Home With GO" campaign for Leafs and Raptors fans ([Metrolinx Nov 2025](https://assets.metrolinx.com/image/upload/v1763754635/Documents/Metrolinx/Item_11_-_Enjoy_the_Ride_-_FINAL_ENG_Mx.pdf)) | PATH link to Union. On 20 Jun 2026 a Scotiabank Arena concert overlapped a FIFA match ([TTC](https://www.toronto.ca/legdocs/mmis/2026/ttc/bgrd/backgroundfile-289746.pdf)) |
| TOR-07 | Only one large lot, for ticket holders with accessibility needs ([CP24](https://www.cp24.com/local/toronto/2026/06/02/fifa-world-cup-reality-check-will-torontos-transit-first-mobility-plan-deliver/)) | 4,250+ bus and streetcar trips during ingress and egress; RapidTO priority lanes on Bathurst and Dufferin; command centre at Union ([TTC](https://www.toronto.ca/legdocs/mmis/2026/ttc/bgrd/backgroundfile-289746.pdf)). About 30% more GO trips than normal ([Global](https://globalnews.ca/news/11961077/toronto-world-cup-metrolinx-ridership/)) | Nine fan marches of up to 10,000 people disrupted streetcars for 30–90 minutes. FIFA Fan Festival ran concurrently ([TTC](https://www.toronto.ca/legdocs/mmis/2026/ttc/bgrd/backgroundfile-289746.pdf)) |
| TOR-08–10 | Exhibition Place reported nearly 6,000 spaces, but observed usable supply averaged about 3,600 (range 1,500–5,300) in 2015. Base future supply 5,408 (no Festival Plaza event). About 2,500 off-site spaces along Lake Shore and in Liberty Village ([WSP 2016](https://www.explace.on.ca/files/file/58b608e96a880/Item-16-New-Parking-Structure-Appendix-A(2).pdf)). Game-day rates $30 TFC / $25 Argonauts ([BMO Field](https://bmofield.com/plan-your-visit/direction-parking)) | Extra GO service to Exhibition station on match days | Single pedestrian tunnel at Exhibition GO is a known crush point. Exhibition Place lots were tied up for FIFA until late fall 2026 ([Global](https://globalnews.ca/news/11095621/ford-government-move-ontario-place-parking-canvass-new-sites)). A 2025 midweek TFC low of 14,018 coincided with Leafs and Jays games ([CP24](https://www.cp24.com/news/sports/2025/10/17/bmo-field-a-work-in-progress-as-the-curtain-falls-on-toronto-fcs-mls-season/)) |
| TOR-11 | All general public parking on Ontario Place grounds eliminated by redevelopment; accessible parking only ([City TMP](https://www.toronto.ca/legdocs/mmis/2026/te/bgrd/backgroundfile-286598.pdf); [Ontario Place](https://ontarioplace.com/visit-us/)). Live Nation to seek Exhibition Place parking on key dates | Fencing on Lake Shore Blvd W to stop illegal stopping; temporary right-turn pick-up/drop-off lane; enforcement against rideshare soliciting and price-gouging; City traffic support about $64,000 for 80 concerts ([City TMP](https://www.toronto.ca/legdocs/mmis/2026/te/bgrd/backgroundfile-286598.pdf)) | 14 concerts overlapped FIFA Fan Festival dates. Shares Lake Shore Blvd W and Exhibition GO with TOR-07–10 and EVT-01/02 |
| TOR-12 | "7,700+" campus spaces ([low-quality guide](https://canadianopentennis.com/how-to-get-to-sobeys-stadium-in-toronto/); unverified) | Paid campus parking for most events ([venue listing](https://concerts.consequence.net/events/national-bank-open-wta-women-s-tennis)) | Shares York U parking with Rogers Stadium overflow |
| EVT-01 | On-site supply fell to about 3,861 (65% of formal supply) during the 2015 CNE; over half of CNE parking was on grass overflow ([WSP 2016](https://www.explace.on.ca/files/file/58b608e96a880/Item-16-New-Parking-Structure-Appendix-A(2).pdf)). Daily rate $40–45 in 2025 ([Curiocity](https://curiocity.com/what-to-know-guide-cne-toronto-2025/)) | Temporary 24-hour permit parking and turn bans on nearby streets ([City 2026](https://www.toronto.ca/legdocs/mmis/2026/te/bgrd/backgroundfile-288489.pdf)) | Overlaps TFC games and RBC Amphitheatre concerts. The CNE named both as crowd sources for Labour Day weekend 2025 ([CNE](https://www.theex.com/wp-content/uploads/2025/08/2025-CNE-Attendance-Update_FINAL.pdf)) |
| EVT-02 | None specific | Lake Shore Blvd W closed from Fort York Blvd to Colborne Lodge Dr; Gardiner ramp closures ([TPS](https://www.tps.ca/media-centre/news-releases/66545/)) | Same Exhibition Place / Lake Shore cluster |
| EVT-03 | None specific | Closures Friday 7 p.m. to Sunday; TTC surface diversions ([TTC](https://www.ttc.ca/riding-the-ttc/Updates/TCS-Toronto-Waterfront-Marathon-Diversions)). Subway does not start until 8 a.m. on race Sunday ([CP24](https://www.cp24.com/local/toronto/2025/10/16/toronto-waterfront-marathon-brings-citywide-celebrations-several-road-closures/)) | Downtown and waterfront roads; overlaps Rogers Centre and Scotiabank events on October weekends |
| EVT-04 | Over 300 Unionville GO spaces plus the east overflow lot closed for construction ([CP](https://www.pentictonherald.ca/spare_news/article_9739a1b7-0bd3-550e-a703-638900d239de.html)). Remote lots with shuttles from 8 a.m. ([ToDoCanada](https://www.todocanada.ca/2026-indy-toronto/)) | Friday 14 Aug 2026 track activity cancelled because the promoter had not completed the track, including a pedestrian bridge linking parking to the spectator area ([TSN/AP](https://www.tsn.ca/motorsports/article/indycar-calls-off-opening-day-in-markham-after-promoter-fails-to-complete-track/)) | Hwy 404/407. GO station sits inside the circuit |

---

## 5. Ridership inference and modelling (method shown)

### 5a. FIFA World Cup at Toronto Stadium (TOR-07)

**TTC surface counts**

- **Source.** [TTC board update, 22 Jul 2026](https://www.toronto.ca/legdocs/mmis/2026/ttc/bgrd/backgroundfile-289746.pdf).
- **What was counted.** Boardings plus alightings at stops serving the stadium **and** the Fan Festival, from 5 hours before kick-off to 3 hours after the match ended.
- **Per-match counts.**

  | Match date (2026) | Count |
  |---|---|
  | 12 Jun | 13,960 |
  | 17 Jun | 12,150 |
  | 20 Jun | 18,600 |
  | 23 Jun | 13,860 |
  | 26 Jun | 12,400 |
  | 2 Jul | 13,220 |
  | **Mean** | **14,032** |

- **Return trips.** A round-tripping attendee produces one alighting and one boarding, so about 7,016 person-equivalents per match.
- **Denominator.** 45,736 temporary capacity ([Wikipedia](https://en.wikipedia.org/wiki/BMO_Field)), assuming near-sell-outs. A **gap**: per-match attendance was not sourced.
- **Result.** About 15% is an upper bound for stadium attendees using these stops.
  - The share is lower because Fan Festival riders are mixed in.
  - It is higher for attendees who used uncounted stops and walked.
- **Baseline subtraction.** Not possible at stop level. The source gives no 2025 per-stop baseline.
  - At corridor level, six match days carried 1.14 million rides versus 802,000 in the same period of 2025 ([Global News](https://globalnews.ca/news/11961077/toronto-world-cup-metrolinx-ridership/)).
  - That is about 56,000 extra rides per match day, but it includes Fan Festival visitors and transfers. It is not an attendee count.

**GO and UP Express**

- About 30,000 passengers per match day ([TorontoToday](https://www.torontotoday.ca/local/transportation-infrastructure/go-transit-up-express-ridership-fifa-world-cup-games-toronto-12532620)).
- Metrolinx did not define whether this counts one-way trips or persons, or how event riders were separated from commuters.
  - If one-way trips: about 15,000 attendees, or about 33% of 45,736.
  - If persons: about 66%. That is implausible alongside the other components, so the trip reading is preferred.

**Bike Share**

- About 2,000 valet rides per match day ([CBC](https://www.cbc.ca/news/canada/toronto/toronto-world-cup-match-day-transit-9.7261526)).
- That is about 1,000–2,000 persons, or 2–4%.

**Walking**

- Pedestrian activity near the stadium rose 70% to 140% on the matches analysed.
- Expressway traffic was 10–30% below normal on the three days analysed ([Toronto Life summarising CBC](https://torontolife.com/city/people-walked-biked-and-took-transit-a-lot-more-than-usual-during-the-world-cup/)).
- TTC saw fans choose to walk rather than board after the 20 June match ([Globe and Mail](https://www.theglobeandmail.com/canada/article-fifa-world-cup-transit-canada-toronto-vancouver/)).

**Residual and result**

- About 48–66% is accounted for by public modes and bikes. The 34–52% residual covers walking (including the fan marches), private car, rideshare, charter coaches and the accessible lot.
- This is consistent with the City's projection of a car share under 20%.
- **Recommended: 0.15 (0.10–0.25).**
- This is a **closed-loop mega-event with no general parking**. It does not represent ordinary BMO Field operations.

### 5b. Blue Jays GO/UP share (TOR-01/02)

- **Ridership.** Metrolinx "served 881K Blue Jays fans in 2025 (regular and postseason)", up from 666K in 2024 ([Metrolinx board, Nov 2025](https://assets.metrolinx.com/image/upload/v1763754635/Documents/Metrolinx/Item_11_-_Enjoy_the_Ride_-_FINAL_ENG_Mx.pdf)).
  - Whether "fans served" means persons or one-way trips is **not stated**.
- **Denominator.**
  - Regular season: 35,184 × 81 = 2,849,904 (derived; [average attendance](https://en.wikipedia.org/wiki/2025_Toronto_Blue_Jays_season)).
  - Postseason home attendance was not sourced. The assumption is about 0.40–0.45 million (about 10 home dates at 40,000–45,000), giving a total of about 3.25–3.30 million.
- **Result.**
  - If 881K counts persons: about 27% (31% if the postseason assumption is wrong and only regular-season attendance is used).
  - If it counts one-way trips (440,500 round-trippers): about 13–15%.
  - **GO/UP share is about 13–31%.** That range spans the definitional uncertainty, not sampling error.
- **World Series comparison.** FIFA GO/UP ridership was 51% above the average 2025 World Series game, implying about 19,900 GO/UP riders per World Series game (30,000 ÷ 1.51; derived) ([TorontoToday](https://www.torontotoday.ca/local/transportation-infrastructure/go-transit-up-express-ridership-fifa-world-cup-games-toronto-12532620)).
  - Metrolinx also reported that the World Series run lifted GO ridership 92% and UP 125% versus non-event days ([Metrolinx board, Feb 2026](https://assets.metrolinx.com/image/upload/v1770414300/Documents/corporate/Item_11.4_-_Marketing_-_FINAL_ENG_Mx.pdf)). The geographic scope is unclear.
- **TTC and walking shares are unknown.**
- **Estimate.**
  - GO/UP at 13–31%, plus TTC (no data, but Union Station and streetcars sit adjacent), plus walking from downtown offices and homes (no data).
  - The downtown background (about 75% non-car for trips to downtown) suggests non-car modes are the majority.
  - A regional audience pulls the car share above the downtown background. The 2024 to 2025 growth in GO-served fans shows a large out-of-Toronto audience.
  - **Car share 0.35 (0.25–0.50).** This is an estimate, not a measurement.

### 5c. BMO Field ordinary operations (TOR-08/09): parking model, not a mode share

- **The model.** WSP's 2016 study forecast a "TFC" day type with total daily vehicle demand of 6,417.
  - 4,588 of those were on Exhibition Place and 1,829 in third-party lots.
  - The forecast covers **all** site activity that day, not only TFC ([WSP 2016](https://www.explace.on.ca/files/file/58b608e96a880/Item-16-New-Parking-Structure-Appendix-A(2).pdf)).
  - This is modelled vehicles, from a 2016 future-year model.
- **Illustrative bound only.** The assumption is 2.0–2.5 persons per vehicle. That occupancy is not sourced and is a key uncertainty.
  - Result: 12,800–16,000 car-arriving people on a TFC day, all purposes.
  - Against a sell-out of about 28,000–30,000, that is at most about 43–57% if every vehicle were TFC-related.
  - Against the 2025 average of 21,374, it would exceed 60%, which is implausible because non-TFC users share the lots.
- **Parking supply check.** Base on-site supply of about 5,400, plus about 2,500 nearby off-site spaces.
  - Even at 2.5 persons per vehicle, that serves about 19,750 people, before other site users.
  - This caps car arrivals; it is not a mode share.
- **Estimate: car share 0.40 (0.30–0.55).** No TTC or GO counts specific to ordinary BMO Field games were found.

### 5d. CNE (EVT-01): parking bound only

- On-site supply during the 2015 CNE was about 3,861 spaces.
- Average daily visits in 2025 were about 78,900.
- Without turnover and occupancy data, these numbers cannot be converted into a mode share. **The car share is unknown.**
- Directionally, on-site parking can serve only a minority of daily visits even with generous assumptions. Most visitors therefore arrive by transit, by walking, from off-site parking, or by drop-off.

### 5e. Rogers Stadium (TOR-04): operator claim with park-and-ride adjustment

- **The claim.** "More than half of concertgoers are now choosing public transit" ([Pollstar, 30 Jul 2026](https://news.pollstar.com/2026/07/30/rogers-stadium-evolves-as-torontos-semi-permanent-large-scale-concert-venue-in-second-season/)). Method unpublished.
- **The park-and-ride problem.** Drivers are steered to about 11,000 spaces at subway stations and York University. A driver who parks at Sheppard West and rides one stop is car-involved under this brief's rules, but may be counted as a transit user by the operator.
- **Adjustment.** Treat the claim as transit-final-leg of 50–60%. Assume an unknown fraction of that, perhaps 0–10 percentage points, arrived by car.
  - Result: car-involved share of about 0.40–0.60.
  - **Recommended 0.45 (0.35–0.60).**

---

## 6. Regional conclusion

### 6a. Weighted car shares

These include only rows with an estimate. Each venue enters once, in its main configuration, so mutually exclusive configurations are never added. Multi-day totals are excluded.

| Row (configuration) | Capacity weight | Typical-attendance weight | Car share (low–high) |
|---|---|---|---|
| TOR-01 Rogers Centre, baseball | 39,150 | 35,184 (2025 average) | 0.35 (0.25–0.50) |
| TOR-04 Rogers Stadium, concert | 50,000 | 48,200 (2026 average to late July) | 0.45 (0.35–0.60) |
| TOR-05 Scotiabank Arena, hockey | 18,819 (rounded 18,800) | 18,800 (*capacity proxy; typical attendance not sourced*) | 0.35 (0.25–0.50) |
| TOR-08 BMO Field, TFC | 28,351 | 21,374 (2025 average) | 0.40 (0.30–0.55) |
| TOR-11 RBC Amphitheatre | 16,000 | 16,000 (*capacity proxy*) | 0.40 (0.25–0.55) |
| TOR-10 Coca-Cola Coliseum | 8,500 | 8,210 (*single-game proxy*) | 0.45 (0.30–0.65) |
| **Capacity-weighted** (total 160,801) | | | **0.40** (low 0.29, high 0.55) |
| **Typical-attendance-weighted** (total 147,768) | | | **0.40** |
| Downtown only, capacity-weighted (excl. Rogers Stadium) | 110,801 | | **0.38** |
| Sensitivity: add TOR-12 Sobeys (12,500), EDGE-01 (5,400), EDGE-02 (5,180), EDGE-03 (5,000) at an assumed 0.85 | 188,881 | | **0.47** |

**Missing coverage**
- TOR-02, TOR-03, TOR-06, TOR-07, TOR-09 (alternate configurations, deliberately excluded).
- TOR-12 and EDGE-01–03 (no evidence; included only in the sensitivity row).
- All events EVT-01–05.
- The 1,000–5,000-seat rooms.

**Do huge outlying venues obscure the downtown pattern?** Slightly, but not decisively.
- Rogers Stadium, the one 50,000-seat venue outside downtown, raises the capacity-weighted figure from 0.38 to 0.40.
- Even assuming every unknown suburban arena runs at 0.85, the result is 0.47. That is still far closer to 0.4 than to 0.85.

### 6b. Why `transit` and not `hub`

- **What `hub` would require.** The 0.85 fallback would need roughly five of every six attendees at the downtown venues to arrive by car.
- **What the evidence shows instead:**
  - The largest venues either have no on-site public parking (Rogers Centre, RBC Amphitheatre) or have parking for only a fraction of a sell-out (Exhibition Place, §5c).
  - GO/UP alone carries an estimated 13–31% of Blue Jays fans (§5b).
  - The only stadium-scale operator claim, from Rogers Stadium, puts transit above half.
  - The City planned the FIFA matches for under 20% car (projected; §5a).
- **Conclusion.** `transit` is the closest existing setting.

### 6c. Strongest contrary evidence

1. **No measured split exists.** Every value is projected, modelled, operator-reported or estimated. The ±0.15 ranges are judgement, not statistics.
2. **Exhibition Place stakeholders say many visitors drive.** In 2020 consultation, tenants said visitors from outside Toronto will drive regardless of transit, that parking shortfalls depress attendance, and that the master plan should not assume a transit-only scenario ([City consultation summary](https://www.toronto.ca/legdocs/mmis/2020/ex/bgrd/backgroundfile-147818.pdf)).
   - Observed peak demand reached 4,353 parked vehicles, about 90% of available supply, at the 2015 Royal Winter Fair ([WSP](https://www.explace.on.ca/files/file/58b608e96a880/Item-16-New-Parking-Structure-Appendix-A(2).pdf)).
3. **FIFA is not representative.** It ran with no general parking (§5a).
4. **Rogers Stadium's car-involved share may be higher.** The operator's "transit" figure may include park-and-ride riders, so the car-involved share could approach 0.60 (§5e).
5. **The audience is regional.** GTA-wide travel, late finishes and last-train cut-offs push toward cars. The World Series Game 7 stranding is an example ([Global News](https://globalnews.ca/news/11508883/toronto-blue-jays-transit-chaos)).
6. **Background driving is still large.** The all-trip auto-driver share within Toronto is 45.3% (TTS 2022, background).

### 6d. Venue exceptions

These rows should carry venue-specific values once sourced, rather than inheriting 0.4.

| Row | Why it is an exception |
|---|---|
| EDGE-01 Paramount Fine Foods Centre (Mississauga) | Suburban site |
| EDGE-02 Tribute Communities Centre (Oshawa) | Suburban site |
| EDGE-03 CAA Centre (Brampton) | Suburban site |
| EVT-04 Indy at Markham | Remote car parks with shuttles |
| TOR-12 Sobeys Stadium | Large campus parking supply despite two adjacent subway stations |
| Canada's Wonderland, Woodbine | Not researched; likely car-dominant |

**Model limitation.** Under `transit`, these unknown rows provisionally inherit 0.4. That is likely too low. Venue-specific overrides need public evidence that this pass did not find.

### 6e. Clusters, shared roads and shared audiences

These are separate findings, not distance rules.

| Cluster | Members | Shared approaches |
|---|---|---|
| **Exhibition Place / Ontario Place** | TOR-07–11, EVT-01, EVT-02, the Fan Festival | Lake Shore Blvd W, Gardiner/Jameson/Strachan ramps, Exhibition GO and its single tunnel, streetcar routes 509 and 511, bus 29/929 |
| **Union Station** | TOR-01–03, TOR-05/06 | Union Station, PATH, Gardiner and Spadina/York ramps, streetcar routes 509 and 510 |
| **Line 1 north (North York)** | TOR-04 Rogers Stadium, TOR-12 Sobeys Stadium | Line 1 between Wilson and Pioneer Village; York University parking (overflow for Rogers Stadium) |
| **Markham Centre** | EVT-04 | Hwy 404 and 407, Stouffville GO line |

**Documented overlaps**
- RBC Amphitheatre concerts overlapped 14 FIFA Fan Festival dates.
- Jays games and Scotiabank Arena events overlapped FIFA matches.
- A 2012 TFC match coincided with peak Home Show attendance and produced Exhibition Place's maximum parking day.

**Shared audiences**
- GO Lakeshore West links Hamilton and Burlington fans to both Union and Exhibition stations.
- Toronto Rock fans now travel to Hamilton.

---

## 7. Required closing answers

### 1. Recommended city type and rationale; strongest contrary evidence

- **Recommendation: `transit`.**
  - Capacity-weighted and attendance-weighted car-share estimates for the six large city venues are both about 0.40 (0.29–0.55).
  - They stay at or below 0.47 even if unknown suburban arenas are assumed to run at 0.85.
- **Contrary evidence:**
  - no measured splits;
  - Exhibition Place stakeholder and parking-demand evidence;
  - Rogers Stadium's park-and-ride ambiguity;
  - suburban venue exceptions;
  - FIFA's unrepresentative closed-loop design (§6c).

### 2. Car-share values keyed to rows

Re-key these to the companion answer when it becomes available.

| Class | Rows and values |
|---|---|
| **Measured** | None |
| **Projected** | TOR-07 FIFA 2026: 0.15 (0.10–0.25), from the City's over-80% non-car projection, partly corroborated by TTC and Metrolinx counts |
| **Operator-reported (adjusted)** | TOR-04 Rogers Stadium: 0.45 (0.35–0.60) |
| **Modelled / estimated** | TOR-08 TFC: 0.40 (0.30–0.55); TOR-09 Argonauts: 0.40 (0.30–0.55) |
| **Estimated** | TOR-01 Rogers Centre Jays: 0.35 (0.25–0.50); TOR-02 postseason: 0.35 (0.20–0.50); TOR-03 Rogers Centre concerts: 0.35 (0.25–0.55); TOR-05 Scotiabank Arena sports: 0.35 (0.25–0.50); TOR-06 Scotiabank Arena concerts: 0.35 (0.25–0.55); TOR-10 Coca-Cola Coliseum: 0.45 (0.30–0.65); TOR-11 RBC Amphitheatre: 0.40 (0.25–0.55) |
| **Unknown** (provisional fallback 0.4 under `transit`; flagged as likely too low for suburban rows) | TOR-12, TOR-13, EDGE-01–03, EVT-01–05 |
| **Out of scope** | EDGE-04 (Hamilton) |

### 3. Boundary recommendation and inconsistencies between briefs

- **Boundary.** GTA (Toronto, Peel, York, Durham, Halton).
  - Hamilton separate; Golden Horseshoe not merged.
  - Edge cases: Oshawa CMA municipalities, Burlington, Simcoe growth municipalities, Markham (§3).
- **Inconsistencies between this brief's leads and current facts:**
  - "Honda Indy Toronto" moved to Markham in 2026 under a multi-year deal ([IndyCar](https://www.indycar.com/news/2025/09/09-03-markham-2026)).
  - "Toronto Marathon": the large race is the TCS Toronto Waterfront Marathon.
  - The lead list omits Rogers Stadium, which at 50,000 rivals Rogers Centre as the largest venue.
  - Budweiser Stage is now RBC Amphitheatre.
  - The Toronto Rock now play in Hamilton.
  - BMO Field's 45,736 configuration was temporary, for FIFA only.
  - TOR-12: sources conflict on which 2026 tennis draw played in Toronto.
- **Capacity conflicts preserved:** Rogers Centre baseball (39,150 vs about 42,000); Scotiabank Arena (18,819/20,511 vs 19,800); RBC Amphitheatre (15,000 / 16,000 / about 18,000); Paramount concert capacity (3,000–6,000 vs 7,000).
- **The companion venue answer was unavailable.** Venues were enumerated independently. The 1,000–5,000 room tier is largely unverified.

### 4. Data gaps, model limitations, source conflicts and inaccessible sources

**Gaps**
- No venue travel survey published for any Toronto venue.
- Exhibition Place commissioned visitor transportation surveys in 2011 ([2009–2012 strategic plan](https://www.explace.on.ca/files/file/58c7eecc3dfa1/Item-35-Stratatt(1).pdf)), but the results were not found online.
- No per-stop TTC baselines for ordinary games.
- Metrolinx does not define "fans served" (persons vs trips).
- No postseason attendance totals were sourced.
- No 2026 CNE final attendance found.
- No primary Caribbean Carnival attendance figure.
- No Indy Markham actual attendance or mode data.
- No Scotiabank Arena or Argonauts attendance from primary sources.
- No weekday/weekend or winter/summer split evidence for any venue.

**Model limitations**
- Car-occupancy assumptions (2.0–2.5) are unsourced.
- Capacity proxies were used where typical attendance was missing.
- Unknown suburban rows inherit 0.4 under `transit`.
- A single regional type cannot represent both the downtown cluster and suburban arenas.

**Source conflicts**
- Capacity conflicts as listed in answer 3.
- GO/UP FIFA riders (one-way trips vs persons).

**Inaccessible or not yet published**
- Statista Blue Jays attendance series (paywalled; not used).
- The full TTC FIFA report, due to the TTC Board in early 2027 ([TTC](https://www.toronto.ca/legdocs/mmis/2026/ttc/bgrd/backgroundfile-289746.pdf)).
- No access controls were bypassed.

### 5. Confirmed transport and venue changes through 2028

| Change | Status | Date | Suggested re-check |
|---|---|---|---|
| Line 6 Finch West opened | Done | 7 Dec 2025 ([Transit Toronto](https://transittoronto.ca/streetcar/4124.shtml)) | — |
| Line 5 Eglinton opened (Mount Dennis–Kennedy); full service promised later in 2026 | Done; full service scheduled | 8 Feb 2026 ([Transit Toronto](https://transittoronto.ca/streetcar/4124.shtml); [Sean Marshall](https://seanmarshall.ca/2026/02/03/line-5-a-quiet-opening-for-a-troubled-project/)) | Jan 2027 |
| Mount Dennis GO/UP and Confederation GO stations opened | Done | By Nov 2025 ([Metrolinx](https://assets.metrolinx.com/image/upload/v1763754635/Documents/Metrolinx/Item_11_-_Enjoy_the_Ride_-_FINAL_ENG_Mx.pdf)) | — |
| RapidTO transit lanes on Bathurst and Dufferin (serve Exhibition Place) | Done | Completed May 2026 ([TTC](https://www.toronto.ca/legdocs/mmis/2026/ttc/bgrd/backgroundfile-289746.pdf)) | Check permanence, Q1 2027 |
| RBC Amphitheatre operates 2026–27; closes fall 2027; reopens spring 2029 outdoors; year-round by summer 2030 | Scheduled; privately funded | Fall 2027 closure ([CHCH/CP](https://www.chch.com/?p=176034)) | Jun 2027 |
| Ontario Place parking garage, up to 3,500 spaces | Funded; contract awarded | 11 Jun 2026; Ontario Place opening hoped for 2029 ([CHCH/CP](https://www.chch.com/?p=188994); [Global](https://globalnews.ca/news/11258853/ontario-place-renderings-parking-confirmed)) | Dec 2027 |
| Rogers Stadium continues | Scheduled (five-year temporary lease from 2025; three summers left after 2026) | Through about 2029 ([Pollstar](https://news.pollstar.com/2026/07/30/rogers-stadium-evolves-as-torontos-semi-permanent-large-scale-concert-venue-in-second-season/)) | Spring 2027 |
| BMO Field rooftop terrace (+1,000–1,200 general admission) | Scheduled | 2027 season ([CP24](https://www.cp24.com/news/sports/2025/10/17/bmo-field-a-work-in-progress-as-the-curtain-falls-on-toronto-fcs-mls-season/)) | Mar 2027 |
| Indy at Markham | Scheduled (multi-year agreement) | Through 2030 ([NOW](https://nowtoronto.com/news/honda-indy-markham-2026-schedule-road-closures/)) | Jul 2027 |
| Ontario Line (Exhibition terminus) | Under construction; affects Exhibition station access through 2028; **opening beyond 2028** ("early 2030s") | ([CP24](https://www.cp24.com/politics/queens-park/2026/02/18/province-breaks-ground-on-elevated-stretch-of-ontario-line-with-possible-opening-date-of-early-2030s/)) | Annually |
| Hamilton TD Coliseum (outside boundary; competes for arena tours) | Done | Reopened 21 Nov 2025 ([Wikipedia](https://en.wikipedia.org/wiki/TD_Coliseum)) | — |
| TCS Toronto Waterfront Marathon 2026 | Scheduled | 17–18 Oct 2026 | Nov 2026, for the 2026 participant count |
| Full TTC FIFA report | Scheduled publication | Early 2027 | Mar 2027 |
