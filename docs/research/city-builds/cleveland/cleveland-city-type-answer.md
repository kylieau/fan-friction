# Cleveland event-travel evidence and city-type assessment

**Research date:** October 12, 2026 (sources accessed October 12, 2026; source publication dates given inline).
**Scope:** Cleveland and its surrounding event metro, assessed against Fan/Friction's existing Gridlock settings (`sprawl` 0.85, `hub` 0.85, `transit` 0.40 fallback car share). Public data only. No app code, constants, hand flags or personal ratings.

---

## 0. Summary

| Item | Finding |
|---|---|
| Recommended existing city type | **`hub`** (in between), for the current period through the 2028 NFL season |
| Measured event mode splits found | **None.** No public Cleveland venue travel survey or event mode-split study was found for any venue or event. |
| Observed transit counts found | Waterfront Line game-day rides for Browns games (2023 season and c. 2008); no Red Line or bus event counts |
| Capacity-weighted car-involved share (core venues, estimated) | **0.89** (bounds 0.82–0.95); downtown only 0.885; suburban/edge 0.96 |
| `transit` setting | Not supported by any evidence for Cleveland |
| Biggest change ahead | Browns leave the downtown lakefront for a domed stadium in Brook Park, planned to open for the 2029 season |

All car-share values in this answer are **estimates** unless labelled otherwise. "Car-involved" includes private car, carpool, rideshare/taxi, and park-and-ride trips where the attendee drove to a station or remote lot.

---

## 1. Boundary

### 1.1 Statistical background

| Geography | Definition | Source |
|---|---|---|
| Brief's working search area | Cuyahoga, Lake, Geauga, Lorain, Medina | Brief |
| Former Cleveland-Elyria MSA (2010–2020 delineations) | Same five counties | [Cuyahoga County Planning Commission](https://www.countyplanning.us/?p=12426) |
| Current Cleveland, OH MSA (OMB Bulletin 23-01, July 2023) | The five counties **plus Ashtabula (added)** | [Ohio LMI map of 2023 delineations](https://prod-ohlmi.mt.gov/_docs/Maps/MetroMicro2025.pdf) |
| Cleveland MSA 2025 population estimate | 2,165,775 (Cuyahoga 1,232,925) | [Ohio statistical areas](https://en.wikipedia.org/wiki/Ohio_statistical_areas) |
| Cleveland–Akron–Canton CSA 2025 estimate | 3,743,802 | [Ohio statistical areas](https://en.wikipedia.org/wiki/Ohio_statistical_areas) |
| Akron MSA | Portage, Summit (701,780 in 2025) | [Ohio LMI](https://prod-ohlmi.mt.gov/_docs/Maps/MetroMicro2025.pdf), [Ohio statistical areas](https://en.wikipedia.org/wiki/Ohio_statistical_areas) |
| Canton–Massillon MSA | Carroll, Stark | [Ohio LMI](https://prod-ohlmi.mt.gov/_docs/Maps/MetroMicro2025.pdf) |

### 1.2 Recommendation

Use the **current six-county Cleveland MSA** (the brief's five counties plus Ashtabula) as the population and commuting frame, but treat the **event metro** as Cuyahoga plus the inner portions of Lake, Lorain, Medina and Geauga where the fixed venues and county fairs actually sit. Ashtabula contains no fixed room of 5,000+ identified in this research, so adding it changes the statistical frame without adding venue rows.

**Edge municipalities and venues, assessed separately:**

| Edge case | Location | Recommendation | Reason |
|---|---|---|---|
| Blossom Music Center | Cuyahoga Falls, Summit County (Akron MSA) | Keep as an **edge row with its own override**, excluded from the core regional weighting and shown separately | It is about 25 miles south of Cleveland inside Cuyahoga Valley National Park and is the Cleveland Orchestra's summer home ([Cleveland Orchestra](https://clevelandorchestra.com/attend/directions-and-parking)); it is operated by Live Nation's Ohio team alongside House of Blues ([Axios Cleveland, Mar 2026](https://www.axios.com/local/cleveland/2026/03/02/new-amphitheater-live-nation-aeg)). Audience is Cleveland-market but the roads and municipality are Summit County. |
| Akron venues (InfoCision Stadium, Canal Park, Akron Civic) | Summit County | **Exclude**; separate metro | Separate OMB MSA; not researched in venue detail here. |
| Canton (Tom Benson Hall of Fame Stadium, Enshrinement events) | Stark County | **Exclude**; separate metro | Separate OMB MSA; not researched in venue detail here. |
| Kent (Dix Stadium) | Portage County | **Exclude**; separate metro | Akron MSA; not researched. |
| MGM Northfield Park Center Stage | Northfield, Summit County | Edge; not researched | Appears in Cleveland concert listings ([Songkick](https://songkick.com/concerts/43119244-gavin-adcock-at-jacobs-pavilion)); capacity not verified. |
| Brook Park (future Browns stadium) | Cuyahoga County | **Inside** | Inner-ring suburb next to Cleveland Hopkins. |

---

## 2. Background (not event travel)

Ordinary commuting data is included **only as background**; it is not used as an event mode share.

| Measure | Value | Source |
|---|---|---|
| Cleveland metro workers who drive to work (2020 5-yr ACS) | 87.2% (carpool 7.4%) | [Stacker, citing Census ACS](https://stacker.com/ohio/cleveland/see-what-average-commute-cleveland) |
| Cleveland metro workers using public transit (same) | 2.8% | [Stacker](https://stacker.com/ohio/cleveland/see-what-average-commute-cleveland) |
| City of Cleveland drive-alone / transit (ACS 2022, secondary aggregator) | 68% / 9% | [MoveNumbers](https://movenumbers.com/neighborhoods/cleveland-oh) — secondary source, lower reliability |
| GCRTA weekday boardings, all modes (Q1 2026) | about 79,600 | [GCRTA overview](https://en.wikipedia.org/wiki/Greater_Cleveland_Regional_Transit_Authority) |
| Rapid transit (Red Line) weekday boardings (Q4 2025) | about 8,200 | [RTA Rapid Transit, citing APTA](https://en.wikipedia.org/wiki/RTA_Rapid_Transit) |
| Light rail (Blue/Green/Waterfront) weekday boardings (Q4 2025) | about 2,400 | [RTA Rapid Transit, citing APTA](https://en.wikipedia.org/wiki/RTA_Rapid_Transit) |

Scale check (my inference, not a mode share): a full Browns crowd is about eight times the entire Red Line's typical weekday boardings, so even a single-digit transit share at one stadium event is a large surge for the rail system.

---

## 3. Evidence inventory

| Evidence | Type | Date | Event type | What it supports | What it does **not** support |
|---|---|---|---|---|---|
| Waterfront Line: 5,918 rides on Sept 10, 2023; about 2,400 riders per average Browns Sunday in the 2023 season; about 7,300 per game c. 2008 | Observed RTA counts reported by press | Feb 2024 article | NFL regular season | Lower bound on rail use for Browns games ([Cleveland Scene](https://www.clevescene.com/news/rta-waterfront-lines-browns-sunday-resurgence-kicks-up-questions-about-next-phase-43724907/)) | Red Line/Blue/Green riders who walk from Tower City; direction; whether "rides" means boardings or persons |
| Brook Park preliminary parking report: 12,000 on-site spaces, 10,000-space game-day shortfall | Consultant report via public-records request | Aug 2025 | Projected NFL/major events | Vehicle parking need for future stadium ([News 5](https://www.news5cleveland.com/sports/browns/report-says-browns-short-10-000-game-day-parking-spaces-in-brook-park-nearby-businesses-could-be-a-solution)) | Mode split (not published); vehicle occupancy |
| Osborn Engineering draft feasibility study (1,600+ pages) filed with ODOT | Projection | Sept 2025 | NFL, concerts, major events | Congestion locations and road closures ([News 5](https://www.news5cleveland.com/sports/browns/draft-study-reveals-more-about-traffic-impacts-game-day-plans-for-browns-brook-park-stadium)) | Mode split; **study itself not accessed** |
| NOACA staff request for transit/rideshare split estimate | Planning agency review | Aug–Oct 2025 | Projected | Confirms no public mode split existed ([NEOtrans](https://neo-trans.blog/2025/10/07/brook-park-stadium-public-infrastructure-costs-rise-to-122-million/)) | — |
| Rocket Arena: two on-site garages for 3,300 cars; dual-event pre-sale-only rule | Venue operations page | Undated (pre-2025 name) | NBA/AHL/concerts | Parking supply and Gateway shared-garage conflict ([Rocket Arena directions](https://rocketmortgagefieldhouse.com/directions-parking)) | Mode split |
| Downtown parking survey: 123 lots in 2024 vs 128 in 2018; more than 3,000 spaces lost; event parking excluded | Private real-estate survey via press | Oct 2024 | Background | Downtown supply trend ([Cleveland 19](https://www.cleveland19.com/2024/10/04/downtown-cleveland-parking-study-shows-major-changes-parking-spot-costs), [News 5](https://www.news5cleveland.com/news/local-news/if-you-think-downtown-cleveland-parking-has-gotten-more-expensive-youre-right)) | Event demand |
| RTA event service notices (Guardians openers, Browns, Air Show, HBF concerts) | Agency operations | 2013–2026 | Various | Service exists, park-and-ride promoted, start/end windows | Ridership |

---

## 4. Park-and-ride and shuttle treatment

1. RTA's event promotions consistently tell fans to park free at Rapid stations and ride in; 2025 and 2026 home-opener passes were sold specifically at Brookpark, Puritas, Triskett and Tower City ([RTA 2025](https://www.riderta.com/news/let-gcrta-take-me-out-ballgame), [RTA 2026](https://www.riderta.com/news/take-gcrta-guardians-home-opener-ballgame)). Brookpark station alone has 1,283 east-side and 322 west-side spaces, and Puritas has 558 ([Brookpark station](https://en.wikipedia.org/wiki/Brookpark_station), [Puritas station](https://en.wikipedia.org/wiki/Puritas%E2%80%93West_150th_station)).
2. Therefore an attendee who drove to a Rapid station is counted as **car-involved** in this answer and appears in the "park-and-ride" column. That column is added to "car to venue" to give the recommended car-involved share.
3. No source splits rail riders by access mode. I assume, as an explicit assumption, that roughly 30–60% of event rail riders drove to a station, given where passes are sold. This is the main reason transit-only shares are smaller than total rail use.
4. The Waterfront Line is regular RTA rail that operates only on event days; it is classed as public rail, not a dedicated private shuttle. No dedicated organizer-run event shuttle was found for any current venue except remote-lot arrangements planned for Brook Park.
5. Remote parking plus a pedestrian bridge (Brook Park plan) or plus a shuttle is car-involved.

---

## 5. Venue and event travel table

### 5.1 Identity, setup and recommended value

Row IDs are my own (the companion venue answer was not available to key against; see §9).

| Row | Verified current name | Municipality | Setup / event represented | Capacity (configuration) | Recommended car-involved share | Range | Confidence | Value type |
|---|---|---|---|---|---|---|---|---|
| C01 | Huntington Bank Field | Cleveland (lakefront) | Browns regular season, Sundays Sept–Jan, 2026–2028 seasons | 67,431 football ([Wikipedia](https://en.wikipedia.org/wiki/Huntington_Bank_Field)) | **0.90** | 0.84–0.95 | Low | Estimated, anchored on observed Waterfront counts |
| C01b | Huntington Bank Field | Cleveland | Stadium concerts and soccer (e.g., May 9 concert, June 6 Brazil–Egypt match, June 25 Post Malone, 2026) | Not verified per configuration | **0.89** | 0.82–0.95 | Low | Estimated; mutually exclusive with C01 |
| C02 | Progressive Field | Cleveland (Gateway) | Guardians regular season, Apr–Sep | 33,530 official as of 2026 ([Wikipedia](https://en.wikipedia.org/wiki/Progressive_Field)); 34,820 also published ([Stadium Journey, Sept 2025](https://stadiumjourney.com/stadiums/progressive-field-s8)) | **0.87** | 0.78–0.93 | Low | Estimated |
| C03 | Rocket Arena (renamed from Rocket Mortgage FieldHouse on Feb 18, 2025) | Cleveland (Gateway) | Cavaliers, Oct–Apr/May | 19,432 basketball ([Wikipedia](https://en.wikipedia.org/wiki/Rocket_Arena), [Stadium Journey](https://www.stadiumjourney.com/stadiums/rocket-arena-cleveland-cavaliers)) | **0.86** | 0.77–0.93 | Low | Estimated |
| C03b | Rocket Arena | Cleveland | Monsters (AHL) and concerts | Hockey up to 18,926 ([Wikipedia](https://en.wikipedia.org/wiki/Rocket_Arena)); concerts up to about 19,000 ([Pollstar](https://news.pollstar.com/2025/08/08/clevelands-rocket-arena-welcomes-new-wnba-team-debuts-upgrades/)) | **0.87** | 0.78–0.93 | Low | Estimated; mutually exclusive with C03 |
| C04 | Wolstein Center | Cleveland (CSU campus) | Public concerts/special events **until Nov 7, 2026** | 13,610 ([Wikipedia](https://en.wikipedia.org/wiki/Wolstein_Center)) | **0.88** | 0.80–0.94 | Low | Estimated; row expires |
| C04b | Wolstein Center | Cleveland | CSU basketball (athletics-only from Jan 1, 2027) | About 8,500 basketball configuration ([Wikipedia](https://en.wikipedia.org/wiki/Wolstein_Center)) | **0.85** | 0.75–0.92 | Low | Estimated |
| C05 | Public Auditorium (Public Hall) | Cleveland (lakefront/Mall) | Cleveland Charge (G League), concerts, events | 10,000 Public Hall; 2,800 Music Hall ([Wikipedia](https://en.wikipedia.org/wiki/Public_Auditorium)) | **0.88** | 0.80–0.94 | Low | Estimated |
| C06 | Jacobs Pavilion | Cleveland (Flats West Bank) | Outdoor concerts, May–Sep | 5,000 GA / 4,100 fully seated ([AEG venue page](https://www.aegsev.com/jacobs-pavilion)) | **0.90** | 0.82–0.95 | Low | Estimated |
| C07 | KeyBank State Theatre (Playhouse Square) | Cleveland | Broadway series, concerts; year-round evenings/matinees | 3,200 ([Playhouse Square](https://www.playhousesquare.org/venues/detail/state-theatre)) | **0.90** | 0.83–0.95 | Low | Estimated |
| C08 | Connor Palace (Playhouse Square) | Cleveland | Same | 2,800 ([Cleveland Arts Events](https://www.clevelandartsevents.com/print/venue/2795)) | **0.90** | 0.83–0.95 | Low | Estimated |
| C09 | Classic Auto Group Park | Eastlake (Lake Co.) | Lake County Captains (High-A), Apr–Sep | 6,500 permanent seats; total capacity above 10,000 per team ([MiLB](https://www.milb.com/lake-county/ballpark/guide-to-classic-auto-group-park)); 7,273 stated elsewhere ([MLB.com, Mar 2026](https://www.mlb.com/guardians/news/featured/explore-classic-park-home-of-the-lake-county-captains)) | **0.95** | 0.90–0.98 | Low–medium | Estimated |
| C10 | ForeFront Field | Avon (Lorain Co.) | Lake Erie Crushers; Lorain County Leviathan FC from 2026 | 5,000 ([Wikipedia](https://en.wikipedia.org/wiki/ForeFront_Field)) | **0.96** | 0.91–0.99 | Low–medium | Estimated |
| E01 | Blossom Music Center | Cuyahoga Falls (Summit Co.) — **edge** | Live Nation concerts and Cleveland Orchestra summer season, May–Oct | About 19,000 ([WKYC/Akron Beacon Journal via AOL](https://www.aol.com/know-heading-tonights-hozier-concert-175440591.html)) vs 23,000 ([Ticketmaster venue guide](https://origin-blog.ticketmaster.com/venue-faq-blossom-music-center-cuyahoga-falls-oh)) — conflict preserved | **0.97** | 0.94–0.99 | Medium | Estimated from structural evidence |
| EV1 | Cleveland National Air Show | Cleveland (Burke Lakefront Airport) | Labor Day weekend; Sept 5–7, 2026 | Organizer cites 60,000–100,000 visitors (multi-day; daily split not given) ([Air Show release, June 2026](https://www.clevelandairshow.com/wp-content/uploads/2026/06/26AirShowTicketsOnSale-1.pdf)) | **0.88** | 0.80–0.94 | Low | Estimated; **not a simultaneous crowd** |
| EV2 | Cuyahoga County Fair | Berea (Cuyahoga Co.) | Six-day fair, Aug 11–16, 2026 per one listing ([WTAM](https://wtam.iheart.com/calendar/content/2026-08-11-the-cuyahoga-county-fair/)) | Attendance **unknown** (only an unreliable aggregator figure found) | **0.92** | 0.85–0.97 | Low | Estimated |
| EV3 | Great Geauga County Fair | Burton (Geauga Co.) | Labor Day weekend fair; Aug 28–Sep 1, 2025 ([fair tickets](https://tickets.geaugafair.com/tickets), [listing](https://accrue.com/events/the-great-geauga-county-fair-4CVUY6sjMSH2kyrt47)) | Attendance **unknown** | **0.97** | 0.93–0.99 | Low–medium | Estimated |
| P01 | New Huntington Bank Field (project name) | Brook Park (Cuyahoga Co.) | Browns and major events from 2029 (planned) | 67,500 seats; up to 75,000 for concerts ([WKYC](https://www.wkyc.com/article/sports/nfl/browns/cleveland-browns-new-stadium-brook-park-huntington-bank-field-work-underway-cuyahoga-county-haslam-sports-group/95-29e16dc9-c80e-4d9a-a015-07ab6bb901e0)) | **0.93** | 0.85–0.97 | Low | Estimated for a future venue; **not current** |

### 5.2 Person-share splits (central estimates)

All splits are **persons attending**, not vehicles, ticket buyers or boardings. Every row sums to 100% by construction; "Other/unclassified" holds charter/party buses, tour coaches, boats and unknowns. "Car to venue" includes private car, carpool, rideshare and taxi. No row has a measured split.

| Row | Car to venue | Park-and-ride (car + transit) | Public rail/bus, non-car | Dedicated event shuttle | Walk/bike | Other/unclassified | Sum | Car-involved |
|---|---|---|---|---|---|---|---|---|
| C01 | 88 | 2 | 3 | 0 | 4 | 3 | 100 | 90 |
| C01b | 87 | 2 | 3 | 0 | 5 | 3 | 100 | 89 |
| C02 | 84 | 3 | 4 | 0 | 7 | 2 | 100 | 87 |
| C03 | 82 | 4 | 5 | 0 | 7 | 2 | 100 | 86 |
| C03b | 83 | 4 | 5 | 0 | 6 | 2 | 100 | 87 |
| C04 | 85 | 3 | 4 | 0 | 6 | 2 | 100 | 88 |
| C04b | 82 | 3 | 4 | 0 | 9 | 2 | 100 | 85 |
| C05 | 85 | 3 | 4 | 0 | 6 | 2 | 100 | 88 |
| C06 | 88 | 2 | 1 | 0 | 5 | 4 | 100 | 90 |
| C07 | 87 | 3 | 3 | 0 | 5 | 2 | 100 | 90 |
| C08 | 87 | 3 | 3 | 0 | 5 | 2 | 100 | 90 |
| C09 | 95 | 0 | 1 | 0 | 2 | 2 | 100 | 95 |
| C10 | 96 | 0 | 0 | 0 | 2 | 2 | 100 | 96 |
| E01 | 97 | 0 | 0 | 0 | 0.5 | 2.5 | 100 | 97 |
| EV1 | 84 | 4 | 5 | 0 | 4 | 3 | 100 | 88 |
| EV2 | 92 | 0 | 2 | 0 | 3 | 3 | 100 | 92 |
| EV3 | 97 | 0 | 0 | 0 | 1 | 2 | 100 | 97 |
| P01 | 89 | 4 | 3 | 0 (remote-lot walk bridge counted as car) | 1 | 3 | 100 | 93 |

### 5.3 Row notes: parking, operations, constraints, method

**C01 Huntington Bank Field — Browns.**
*Ridership inference (shown in full).* Baseline: since Dec 7, 2025 the Waterfront Line runs only for Browns home games and select stadium events ([RTA alert](https://www.riderta.com/riders-alerts/waterfront-line-service-20251207)), and in 2023 it reopened solely for Browns games ([Cleveland Scene](https://www.clevescene.com/news/rta-waterfront-lines-browns-sunday-resurgence-kicks-up-questions-about-next-phase-43724907/)), so baseline non-event ridership on those days is taken as approximately zero; tailgaters at South Harbor/Muni Lot who do not enter the stadium cannot be removed. Counts: about 2,400 average Waterfront riders per Sunday in 2023; about 7,300 per game c. 2008 ([same](https://www.clevescene.com/news/rta-waterfront-lines-browns-sunday-resurgence-kicks-up-questions-about-next-phase-43724907/)). Denominator: Browns averaged more than 67,000 per game in 2022 and 2023 ([Stadium Journey](https://www.stadiumjourney.com/stadiums/huntington-bank-field-cleveland-browns)) — reported attendance, which may reflect tickets distributed rather than people present. Return trips: if 2,400 counts every boarding, Waterfront persons are about 1,200 (round trip); if it counts one direction, about 2,400. Result: Waterfront persons ≈ 1.8–3.6% of attendance. Red/Blue/Green riders who walk from Tower City are unmeasured; RTA has stated the Tower City–stadium walk is comparable to 3,000 feet ([News 5](https://www.news5cleveland.com/sports/browns/report-says-browns-short-10-000-game-day-parking-spaces-in-brook-park-nearby-businesses-could-be-a-solution)), so many rail riders likely skip the transfer. Assumed total rail persons 2–9%, of whom 30–60% drove to a station. Walk/bike from downtown homes and hotels assumed 2–6%; coaches/party buses 1–3%. Car-involved = 100 − non-car rail (1–6) − walk/bike (2–6) − other (1–3) ≈ 85–96, central 90.
*Parking:* Muni Lot (free, tailgating), North Coast Harbor and downtown garages ([Event Tickets Center](https://www.eventticketscenter.com/huntington-bank-field-cleveland-tickets/73688/e)); no public total space count found.
*Operations/service:* For 1 p.m. games RTA has run Red Line every 15 minutes with three-car trains ([RTA, 2021](https://www.riderta.com/news/rta-offers-browns-game-day-service-plan)); a 2013 notice guaranteed rail home for at least 90 minutes after the game ([RTA, 2013](https://www.riderta.com/news/are-you-browns-fan-be-rta-fan-too)) — **current post-game guarantee not verified**. Tower City East Portals work keeps shifting tracks and platforms on event days ([RTA, June 2026](https://www.riderta.com/riders-alerts/all-rail-riders-tower-city-trackwork-service-adjustments)).
*Access constraints / shared approaches:* Shoreway, West 3rd and East 9th; shares the Muni Lot and lakefront approaches with the Air Show (EV1), Rock Hall/Science Center and Public Hall (C05).
*Tenure:* Lease expires after the 2028 season, with year-to-year renewal possible through 2030 ([Cleveland 19](https://www.cleveland19.com/2025/12/01/clock-ticking-cleveland-city-council-vote-100m-browns-stadium-deal/)).

**C01b HBF concerts/soccer.** Waterfront ran for a May 9 concert, the June 6 Brazil–Egypt match and the June 25, 2026 Post Malone show (service from 4:30 p.m. for that concert) ([RTA May 2026](https://www.riderta.com/riders-alerts/tower-city-trackwork-service-adjustments-0), [RTA June 2026](https://www.riderta.com/riders-alerts/all-rail-riders-tower-city-trackwork-service-adjustments), [RTA June 21–26](https://www.riderta.com/riders-alerts/all-rail-riders-tower-city-trackwork-service-adjustments-0)). No counts. Late-night end-of-show rail service **not verified**. Estimate assumes fewer tailgaters, more rideshare (still car) than NFL.

**C02 Progressive Field.** RTA directs riders to Tower City and the enclosed Walkway through Rocket Arena; for the 2026 opener the Walkway opened four hours early ([RTA](https://www.riderta.com/news/take-gcrta-guardians-home-opener-ballgame)). Team partners with SpotHero for nearby parking ([Stadium Journey](https://stadiumjourney.com/stadiums/progressive-field-s8)). No ridership counts. Estimate: downtown residents, office workers on weekday evenings and Walkway access lift walk/transit modestly above C01; most fans regionwide still drive.

**C03/C03b Rocket Arena.** Best transit access in the metro (direct Walkway to Tower City, cited above). Two on-site garages hold 3,300 cars; when the arena and Progressive Field have events at the same time, Gateway East accepts only pre-purchased passes ([Rocket Arena](https://rocketmortgagefieldhouse.com/directions-parking)). Gateway is one of the tightest downtown parking areas ([News 5](https://www.news5cleveland.com/news/local-news/if-you-think-downtown-cleveland-parking-has-gotten-more-expensive-youre-right)). Monsters crowds are often far below capacity; a 10,025 figure is listed for Monsters games ([Stadium Journey](https://www.stadiumjourney.com/stadiums/rocket-arena-cleveland-monsters)) — this conflicts with the 18,926 hockey maximum and appears to be a curtained configuration.

**C04/C04b Wolstein Center.** CSU announced on Aug 14, 2026 that Nov 7, 2026 is the last public special event and the building becomes athletics-only on Jan 1, 2027, citing age and condition ([CSU](https://csu2.0.csuohio.edu/presidents-office/wolstein-center-transition), [Cleveland 19](https://www.cleveland19.com/2026/08/14/cleveland-state-convert-wolstein-center-into-dedicated-athletics-facility/)). Higher walk share assumed for CSU games (campus). About 1 km from Gateway; shares Prospect/Carnegie approaches with C02/C03.

**C05 Public Auditorium.** Charge moved here in 2024 ([Wikipedia](https://en.wikipedia.org/wiki/Public_Auditorium)). No parking or ridership data found. Shares lakefront/Mall approaches with C01 and EV1.

**C06 Jacobs Pavilion.** AEG operates it under a 10-year deal from 2022 ([HITS](https://m.hitsdailydouble.com/news&id=327959&title=AEG-PRESENTS-SAYS-HELLO--CLEVELAND)); on-site parking listed ([AEG](https://www.aegsev.com/jacobs-pavilion)). Waterfront Line does not currently serve West Bank events. Capacity sources conflict (4,100 seated, 4,153, 4,500, 5,000 GA) ([AEG](https://www.aegsev.com/jacobs-pavilion), [Cleveland Magazine](https://clevelandmagazine.com/articles/bedrock-reveals-riverfront-amphitheater-plans/), [Songkick](https://detour.songkick.com/venues/45552-jacobs-pavilion)).

**C07/C08 Playhouse Square.** Both theaters connect to the Playhouse Square garage via the KeyBank Concourse ([Playhouse Square](https://www.playhousesquare.org/venues/detail/state-theatre)). These rooms can run **simultaneously**, so they are separate rows, not configurations. The Allen Theatre was reconfigured for Cleveland Play House ([Playhouse Square timeline](https://www.playhousesquare.org/assets/doc/11x17-Timeline2015.pdf)); its current capacity was not verified and it is not listed as a 1,000+ room here.

**C09/C10 suburban ballparks.** Freeway-oriented suburban sites; no evidence of meaningful transit use was found. Values rest on site context, not counts.

**E01 Blossom.** Ticketmaster's venue guide says it is not close to public transportation, with free grass lots and paid paved lots ([Ticketmaster](https://origin-blog.ticketmaster.com/venue-faq-blossom-music-center-cuyahoga-falls-oh)); Uber is the official ride and oversized lots exist for party buses ([Ticketmaster venue page](https://ticketmaster.ca/Blossom-Music-Center-tickets-Cuyahoga-Falls/venue/40964)). The site has only three entrances and sold-out exits can take about two hours ([Cleveland Scene](https://www.clevescene.com/news/the-worst-of-cleveland-parking-and-entering-blossom-music-center-30362193)). The Steels Corners bridge closure in 2024 detoured departing traffic ([WKYC](https://wkyc.com/article/entertainment/music/red-hot-chili-peppers-blossom-music-center-cuyahoga-falls-concert-monday-july-22/95-1996bbb3-1b39-48c8-b0d5-2bd378f6c525)). Medium confidence because the absence of transit is structural.

**EV1 Air Show.** On-site parking sold in advance only and rideshare not allowed in the on-site lot ([Air Show directions](https://www.clevelandairshow.com/guest-info/directions-and-parking/)); RTA runs the Waterfront to South Harbor 8:30 a.m.–5:30 p.m. against 9–4 show hours, Sept 5–7, 2026 ([RTA](https://www.riderta.com/news/ride-gcrta-cleveland-national-air-show)) — start and end service verified for 2026. The 60,000–100,000 figure is an organizer claim across the weekend and must not be treated as one simultaneous crowd.

**EV2 Cuyahoga County Fair.** Free parking every day ([WTAM 2024](https://wtam.iheart.com/content/2024-07-31-cuyahoga-county-fair-information-candyce-traci-bill-wills-interview/)). Located on East Bagley Road off I-71 — the same Bagley/I-71 area the Brook Park feasibility study flags for event congestion (see §7). Event-date sources conflict (Aug 11–16 vs Aug 5–10, 2026).

**EV3 Great Geauga County Fair.** Rural Burton; no transit evidence; attendance unknown.

**P01 New Huntington Bank Field (Brook Park).** Groundbreaking April 30, 2026; total cost reported at $2.6 billion with $600 million from the state ([Cleveland 19](https://www.cleveland19.com/2026/04/30/browns-hold-official-groundbreaking-new-brook-park-dome/)). Parking: plans for 12,000 on-site spaces with a 10,000-space shortfall ([News 5, Aug 2025](https://www.news5cleveland.com/sports/browns/report-says-browns-short-10-000-game-day-parking-spaces-in-brook-park-nearby-businesses-could-be-a-solution)); city mandate of 13,000, which the team now seeks to cut and ultimately reduce to 8,000 game-day spaces in the district ([News 5, Oct 2026](https://www.news5cleveland.com/news/local-news/browns-want-to-slash-parking-requirements-for-their-new-stadium-district-in-brook-park)); Brook Park lining up more than 10,000 off-site spaces and a pedestrian bridge over Engle Road ([News 5, Oct 2026](https://www.news5cleveland.com/news/local-news/brook-park-lays-groundwork-to-seize-land-for-pedestrian-bridge-to-new-browns-stadium-site)). NEOtrans's independent acreage estimate is under 9,000 on-site spaces, and at standing capacity Red Line trains could carry about 10% of maximum attendance ([Cleveland Magazine/NEOtrans](https://clevelandmagazine.com/articles/why-the-browns-proposed-brook-park-stadium-could-face-a-lambeau-style-parking-crunch/)) — a **capacity ceiling, not a mode share**. Brookpark Rapid station is about 3,000 feet away per RTA, and RTA will not fund a new stadium station ([News 5](https://www.news5cleveland.com/sports/browns/report-says-browns-short-10-000-game-day-parking-spaces-in-brook-park-nearby-businesses-could-be-a-solution)). Road closures on Hummel and Engle are planned for events ([News 5](https://www.news5cleveland.com/sports/browns/draft-study-reveals-more-about-traffic-impacts-game-day-plans-for-browns-brook-park-stadium)). Estimate assumes rail use similar to or slightly above the lakefront because of station proximity, offset by heavier park-and-ride and fewer walkers.

### 5.4 Coverage gaps (fixed rooms ~1,000+ not given full rows)

| Venue | Status in this answer | Provisional fallback |
|---|---|---|
| Agora (about 2,000) ([Live for Live Music](https://liveforlivemusic.com/news/aeg-cleveland-globe-iron-venue-opening-2025/)) | Capacity from secondary source; no travel evidence | `hub` 0.85 |
| Globe Iron (1,200, opened 2025) ([same](https://liveforlivemusic.com/news/aeg-cleveland-globe-iron-venue-opening-2025/)) | No travel evidence | `hub` 0.85 |
| House of Blues Cleveland | Capacity not verified | `hub` 0.85 |
| Severance Music Center (University Circle) | Capacity not verified; matinee shuttle from a Cleveland Heights church lot exists ([Cleveland Orchestra](https://clevelandorchestra.com/attend/directions-and-parking)) — car-involved | `hub` 0.85 |
| Public Auditorium Music Hall (2,800) | Sub-room of C05 | Use C05 |
| Huntington Convention Center, I-X Center, MGM Northfield Park Center Stage | Not researched | `hub` 0.85 (Northfield: `sprawl` 0.85) |
| Cleveland Marathon, St. Patrick's parade, Pride in the CLE, Rock Hall induction (when held in Cleveland) | Not researched | `hub` 0.85 |
| Lorain, Medina and Lake county fairs | Not researched | `sprawl` 0.85 |

Local ticketing and app feed coverage were **not verified** for any row. Known ticketing only: Blossom via Ticketmaster ([Ticketmaster](https://ticketmaster.ca/Blossom-Music-Center-tickets-Cuyahoga-Falls/venue/40964)); Browns season tickets via Ticketmaster Account Manager ([PSL Source](https://www.pslsource.com/cleveland_browns/huntington_bank_field)); Guardians use StubHub as preferred resale ([Stadium Journey](https://stadiumjourney.com/stadiums/progressive-field-s8)).

---

## 6. Regional weighting

### 6.1 Capacity-weighted car-involved share

Weights are the **single largest non-exclusive configuration per room** in §5.1 (C01 67,431; C02 33,530; C03 19,432; C04 13,610; C05 10,000; C06 5,000; C07 3,200; C08 2,800; C09 7,273; C10 5,000; E01 19,000). Mutually exclusive configurations (C01b, C03b, C04b) are excluded. Multi-day events (EV1–EV3) are excluded because a weekend or week total is not a simultaneous crowd and daily figures are unknown. P01 is excluded (future).

| Set | Total capacity | Central | Low bound | High bound |
|---|---|---|---|---|
| Core (C01–C10) | 167,276 | **0.890** | 0.818 | 0.945 |
| Core + Blossom (E01) | 186,276 | 0.899 | 0.830 | 0.949 |
| Core after Nov 7, 2026 (no Wolstein public events) | 153,666 | 0.891 | 0.820 | 0.945 |
| Downtown only (C01–C08) | 155,003 | 0.885 | 0.811 | 0.942 |
| Downtown without Huntington Bank Field | 87,572 | 0.874 | 0.789 | 0.935 |
| Suburban + edge (C09, C10, E01) | 31,273 | 0.964 | 0.926 | 0.988 |

Computed from the §5.1 values; bounds weight each row's low or high end, so they are not a joint confidence interval.

### 6.2 Typical-attendance weighting

**Not computed — evidence does not permit it.** The only sourced typical attendance is Browns (more than 67,000 average in 2022–2023, essentially capacity) ([Stadium Journey](https://www.stadiumjourney.com/stadiums/huntington-bank-field-cleveland-browns)). Guardians, Cavaliers, Monsters, theater and concert averages were not verified in this research. Directionally, attendance weighting would raise the weight of the downtown stadiums (which sell near capacity) relative to suburban parks and to Monsters games, which would move the regional figure slightly toward the downtown value (about 0.885).

### 6.3 Do huge outlying venues obscure the downtown pattern?

No. Adding Blossom raises the core figure by under one point (0.890 → 0.899). The larger distortion runs the other way: Huntington Bank Field alone is about 40% of core capacity, and removing it lowers the downtown figure to 0.874. When the Browns move to Brook Park (planned 2029), the region's largest crowd shifts from the downtown cluster to an inner-ring suburban site with estimated car-involved share around 0.93.

---

## 7. Clusters, shared roads and shared audiences (separate findings)

| Finding | Type | Evidence |
|---|---|---|
| Gateway cluster: Progressive Field + Rocket Arena share garages and the Tower City Walkway; dual events trigger pre-sold-only parking at Gateway East | Venue cluster, shared parking | [Rocket Arena](https://rocketmortgagefieldhouse.com/directions-parking), [RTA](https://www.riderta.com/news/take-gcrta-guardians-home-opener-ballgame) |
| Gateway–CSU–Playhouse Square corridor: Wolstein (2000 Prospect) and Playhouse Square sit on the Prospect/Carnegie/Euclid grid east of Gateway | Shared roads | [Wolstein](https://en.wikipedia.org/wiki/Wolstein_Center), [Playhouse Square](https://www.playhousesquare.org/venues/detail/state-theatre) |
| Lakefront cluster: Huntington Bank Field, Muni Lot, Burke Lakefront (Air Show), Public Auditorium share the Shoreway and lakefront lots; Air Show spectators using the Muni Lot enter by the Plaza gate | Shared roads and lots | [Air Show](https://www.clevelandairshow.com/guest-info/directions/) |
| Flats cluster: Jacobs Pavilion, Globe Iron and the proposed 6,200-seat Bedrock/Live Nation amphitheater at West 3rd and Stones Levee (less than a mile apart) | Future venue cluster | [Cleveland Magazine](https://clevelandmagazine.com/articles/bedrock-announces-plans-for-a-6-200-capacity-outdoor-music-venue-in-downtown-cleveland), [Cleveland Magazine](https://clevelandmagazine.com/articles/bedrock-reveals-riverfront-amphitheater-plans/) |
| Southwest cluster (2029+): Brook Park stadium, Hopkins airport traffic and the Cuyahoga County Fair; the feasibility study flags Bagley and Engle roads in Middleburg Heights on Sundays and weeknights, and the fair is on Bagley off I-71 | Shared roads (future) | [News 5](https://www.news5cleveland.com/sports/browns/draft-study-reveals-more-about-traffic-impacts-game-day-plans-for-browns-brook-park-stadium), [WTAM](https://wtam.iheart.com/content/2024-07-31-cuyahoga-county-fair-information-candyce-traci-bill-wills-interview/) |
| Airport parking spill risk: NOACA notes cheaper airport parking could be overwhelmed by stadium visitors | Shared parking (future) | [NEOtrans](https://neo-trans.blog/2025/10/07/brook-park-stadium-public-infrastructure-costs-rise-to-122-million/) |
| Shared audiences: Live Nation (Blossom, House of Blues, planned amphitheater) vs AEG (Jacobs Pavilion, Agora, Globe Iron); Cleveland Orchestra (Severance and Blossom); Guardians and their Lake County affiliate | Shared audiences | [Axios](https://www.axios.com/local/cleveland/2026/03/02/new-amphitheater-live-nation-aeg), [MLB.com](https://www.mlb.com/guardians/news/featured/explore-classic-park-home-of-the-lake-county-captains) |

No distance rule or hard-access flag is proposed.

---

## 8. Conclusions requested

### 8.1 Recommended existing city type and rationale

**`hub`.** Every estimated row falls between about 0.85 and 0.97 car-involved, and the capacity-weighted core is about 0.89 — close to the existing 0.85 fallback shared by `hub` and `sprawl` and far above the `transit` value of 0.40. Because `hub` and `sprawl` carry the same fallback, the choice turns on spill between nearby crowds. Cleveland's largest rooms are tightly clustered downtown: the Gateway pair shares garages and a walkway, and the lakefront, Playhouse Square and CSU sit within about a mile and a half on shared approaches. That clustering is the defining feature of the current event geography and fits `hub`.

**Strongest contrary evidence (for `sprawl`):**
- Regional commuting is about 87% car with under 3% transit (background only) ([Stacker](https://stacker.com/ohio/cleveland/see-what-average-commute-cleveland)).
- Observed event rail use is small: about 2,400 Waterfront riders against crowds of more than 67,000.
- All suburban and edge venues sit at 0.95–0.97.
- From 2029 the Browns relocate to Brook Park and Wolstein stops hosting public events after Nov 7, 2026, thinning the downtown cluster. If the Browns move proceeds as planned, `sprawl` should be reassessed at that time.

**Venue exceptions:** Blossom (0.97, edge), Classic Auto Group Park (0.95), ForeFront Field (0.96), and the future Brook Park stadium (0.93) are better served by venue-specific values than by any city default.

### 8.2 Car-share values by row

| Row | Measured | Projected (published) | Estimated (this answer) |
|---|---|---|---|
| C01 HBF Browns | — | — | 0.90 (0.84–0.95), anchored on observed Waterfront counts |
| C01b HBF concerts/soccer | — | — | 0.89 (0.82–0.95) |
| C02 Progressive Field | — | — | 0.87 (0.78–0.93) |
| C03 Rocket Arena (Cavs) | — | — | 0.86 (0.77–0.93) |
| C03b Rocket Arena (Monsters/concerts) | — | — | 0.87 (0.78–0.93) |
| C04 Wolstein public events (until Nov 7, 2026) | — | — | 0.88 (0.80–0.94) |
| C04b Wolstein CSU basketball | — | — | 0.85 (0.75–0.92) |
| C05 Public Auditorium | — | — | 0.88 (0.80–0.94) |
| C06 Jacobs Pavilion | — | — | 0.90 (0.82–0.95) |
| C07 KeyBank State Theatre | — | — | 0.90 (0.83–0.95) |
| C08 Connor Palace | — | — | 0.90 (0.83–0.95) |
| C09 Classic Auto Group Park | — | — | 0.95 (0.90–0.98) |
| C10 ForeFront Field | — | — | 0.96 (0.91–0.99) |
| E01 Blossom (edge) | — | — | 0.97 (0.94–0.99) |
| EV1 Air Show | — | — | 0.88 (0.80–0.94) |
| EV2 Cuyahoga County Fair | — | — | 0.92 (0.85–0.97) |
| EV3 Great Geauga County Fair | — | — | 0.97 (0.93–0.99) |
| P01 Brook Park stadium (2029+) | — | None published; NOACA requested one | 0.93 (0.85–0.97) |

### 8.3 Boundary recommendation and inconsistencies between briefs

- Recommended frame: current six-county Cleveland MSA for population/commuting; event rows drawn from Cuyahoga and inner Lake, Lorain, Medina and Geauga; Blossom as a separately reported edge; Akron, Canton and Kent excluded as separate MSAs.
- **Inconsistency:** the brief's five-county area matches the pre-2023 Cleveland-Elyria MSA; OMB's July 2023 delineation added Ashtabula ([Ohio LMI](https://prod-ohlmi.mt.gov/_docs/Maps/MetroMicro2025.pdf)).
- **Inconsistency:** Blossom is listed as a lead for this metro but lies in Summit County (Akron MSA).
- **Inconsistency:** the brief asks for values keyed to "the companion answer," which was not provided; rows here use their own IDs (C/E/EV/P) and should be mapped manually.

### 8.4 Data gaps, model limitations, source conflicts, inaccessible sources

**Gaps**
- No measured event mode split for any Cleveland venue or event.
- No RTA counts for Red Line, Blue/Green or bus riders on event days; Waterfront counts lack definition (boardings vs persons, direction).
- Typical attendance not verified except for the Browns.
- Daily attendance unknown for the Air Show and both county fairs.
- No public event parking inventory for downtown.
- Post-event late-night rail service not verified for concerts.

**Model limitations**
- A person car share ignores vehicle occupancy; parking spaces and vehicles cannot be converted to persons without an occupancy assumption.
- Park-and-ride is counted as car-involved, but those vehicles load roads near Rapid stations, not near the venue.
- Rideshare generates empty repositioning trips not captured by person shares.
- Estimates rely on stated assumptions (rail access-mode split, walk share) that no source measures.

**Source conflicts preserved**
- Progressive Field capacity: 33,530 vs 34,820.
- Blossom capacity: about 19,000 vs 23,000.
- Jacobs Pavilion: 4,100 seated / 4,153 / 4,500 / 5,000 GA.
- Rocket Arena hockey: 18,926 maximum vs 10,025 listed for Monsters (configuration difference).
- Classic Auto Group Park: 6,157 / 6,500 / 7,273 / above 10,000.
- Brook Park on-site parking: 12,000 (HSG/consultants) vs under 9,000 (NEOtrans estimate) vs 13,000 city mandate vs 8,000 requested.
- Brook Park stadium cost: $2.4 billion (Oct 2025) vs $2.6 billion (Apr 2026).
- Cuyahoga County Fair 2026 dates: Aug 11–16 vs Aug 5–10.

**Inaccessible or not accessed**
- Osborn Engineering's 1,600+ page draft feasibility study (filed with ODOT) — known only through press summaries.
- The preliminary HSG traffic and parking report — obtained by News 5 through a public-records request; not publicly posted.
- NOACA staff summaries and RTA board ridership tables for event days — not located in public form.
- The Cleveland.com articles referenced by other sources were not opened; no access controls were bypassed.

### 8.5 Confirmed transport and venue changes through 2028

| Change | Date | Status | Suggested re-check |
|---|---|---|---|
| Wolstein Center: last public special event; then athletics-only | Nov 7, 2026; Jan 1, 2027 | **Scheduled** (CSU announcement) ([CSU](https://csu2.0.csuohio.edu/presidents-office/wolstein-center-transition)) | Dec 2026 |
| Waterfront Line limited to Browns games and select HBF events during Tower City East Portals work | Since Dec 7, 2025, until further notice | **In effect** ([RTA](https://www.riderta.com/riders-alerts/waterfront-line-service-20251207)) | Each NFL season start |
| Red Line platform extenders installed; east and west halves shut down in back-to-back weeks | Summer 2027 | **Scheduled** ([NEOtrans](https://neo-trans.blog/2026/08/31/gcrtas-first-new-train-arrives-cleveland/)) | Spring 2027 (exact dates) |
| New Siemens S200 railcars in Red Line service | August 2027 per board; "summer 2027" per RTA | **Scheduled and largely funded** — about $422M of $435M funded as of June 29, 2026 ([RTA board, Mar 2026](https://www.riderta.com/sites/default/files/2026-03/2026-03-24BoardPackage.pdf), [WKYC](https://www.wkyc.com/article/news/community/transportation/greater-cleveland-rta-railcar-new-fleet-435-million-siemens-red-line-green-blue-testing-rail-system-replacement-program/95-912db4cc-aa09-4aff-9099-8bfc08e379df)) | Sept 2027 |
| New railcars on Blue, Green and Waterfront | August/summer 2028 | **Scheduled** ([RTA](https://www.riderta.com/rcrp)) | Sept 2028 |
| Browns' final scheduled lakefront season; lease extension option through 2030 | 2028 season | **Contracted** ([Cleveland 19](https://www.cleveland19.com/2025/12/01/clock-ticking-cleveland-city-council-vote-100m-browns-stadium-deal/)) | Q2 2028 |
| Brook Park domed stadium opening | 2029 season (planned) | **Under construction, funded** (beyond 2028 window) ([Cleveland 19](https://www.cleveland19.com/2026/04/30/browns-hold-official-groundbreaking-new-brook-park-dome/)) | Annually |
| Brook Park I-71/Snow Road ramps, flyover, Engle widening, pedestrian bridge | Funding approved 2026; build dates not confirmed | **Partly funded**: $35M TRAC (Apr 2026) + $25M federal BUILD (Jul 2026) toward a ~$51M I-71 project ([WKYC](https://www.wkyc.com/article/sports/nfl/browns/odot-approves-35m-infrastructure-improvements-cleveland-browns-domed-stadium-brook-park/95-c1ca947b-5ec6-4442-8911-1063e6cb9cf9), [Cleveland 19](https://www.cleveland19.com/2026/07/10/25m-headed-brook-park-i-71-improvements/)) | Q1 2027 |
| New Rapid station at Brook Park stadium (~$40M) | — | **Proposal; unfunded**, RTA declines to pay ([News 5](https://www.news5cleveland.com/sports/browns/draft-study-reveals-more-about-traffic-impacts-game-day-plans-for-browns-brook-park-stadium)) | Q4 2027 |
| Brook Park district parking cut to 8,000 game-day spaces | — | **Proposal** before planning commission (Oct 2026) ([News 5](https://www.news5cleveland.com/news/local-news/browns-want-to-slash-parking-requirements-for-their-new-stadium-district-in-brook-park)) | Jan 2027 |
| Bedrock/Live Nation 6,200-seat riverfront amphitheater | First act summer 2028, pending city approvals | **Proposal** ([Cleveland 19](https://www.cleveland19.com/2026/02/26/new-outdoor-concert-venue-coming-downtown-cleveland/)) | Q1 2028 |
| 3,000–4,000 capacity music venue in Brook Park district (Lincoln Property) | — | **Proposal** ([News 5](https://www.news5cleveland.com/news/local-news/bedrock-plans-6-200-seat-outdoor-concert-venue-on-downtown-clevelands-riverfront)) | 2027 |
| 10,000-seat South Gateway soccer stadium (Cleveland Soccer Group) | Originally targeted 2026 | **Proposal** ([NEOtrans via UrbanOhio](https://urbanohio.com/topic/15800-cleveland-sc-soccer-stadium/page/18)) | Q2 2027 |
| USL stadium on Wolstein site | — | **Proposal, reported on hold** (Mar 2026) ([UrbanOhio, citing NEOtrans](https://urbanohio.com/topic/15800-cleveland-downtown-forest-city-cleveland-stadium/page/21/)) | Q2 2027 |
| WNBA expansion team at Rocket Arena | Start season not verified here | **Announced** ([Pollstar](https://news.pollstar.com/2025/08/08/clevelands-rocket-arena-welcomes-new-wnba-team-debuts-upgrades/)) | Q1 2027 |

---

*Prepared from public sources only. All car-share values are estimates or bounds derived from cited evidence; none is a measured event mode split.*
