<!-- Pasted by Kylie in the Oct 12, 2026 Claude Code session, answering docs/research/city-builds/houston/houston-city-type-prompt.md. Saved in full, unedited below this line. Not a product lock: fold into the city settings by the checklist. -->

# Houston city-type answer: how people reach event venues

**Research date:** 11 October 2026 (public web sources only; every numeric claim links to the page it came from).
**Scope:** Houston and its surrounding metro, starting from Harris, Fort Bend and Montgomery counties, with Galveston, Brazoria and farther venues treated as edges.
**Question:** Which existing Fan/Friction city setting (`sprawl`, `hub`, `transit`) best fits event travel in Houston, and what car shares does the public evidence support for individual venue and event rows?

> **Companion venue answer:** it was not available to me, so venues were enumerated independently below (row IDs R1–S3, E1–E4). Gaps are listed in section 9.

---

## 1. Short answer

| Item | Finding |
|---|---|
| Recommended city type | **`sprawl`** (driving). Fallback car share 0.85 applies. |
| Main reason | Every Houston event figure that can be derived from public data for a recurring event, including at the region's best-served transit venue (Reliant Park on the Red Line), points to roughly 0.88–0.95 car-involved travel. Suburban venues (The Woodlands, Sugar Land) have no fixed-route event transit found and very high parking provision. |
| Strongest contrary evidence | The FIFA World Cup 2026 matches at the stadium, where METRO estimated [25,000–30,000 post-match rail riders](https://www.fwc26houston.com/post/fifa-world-cup-2026-houston-host-committee-reports-operational-attendance-and-transportation-metri) after one match of [68,777](https://www.fwc26houston.com/post/fifa-world-cup-2026-houston-host-committee-reports-operational-attendance-and-transportation-metri) (≈36–44% by rail on egress). This was a one-off with mostly out-of-town ticket buyers and very expensive parking, and it has ended. The second contrary point is the dense **downtown cluster** (Daikin Park, Toyota Center, Shell Energy Stadium, Theater District, 713 Music Hall), whose shared parking and approaches are a spill argument for `hub`. |
| Does the choice change car share? | No. `sprawl` and `hub` share the same 0.85 default; the choice only changes spill between nearby crowds. |
| Evidence quality | No public venue travel survey or mode-split study was found for any Houston venue. All values below are **derived** from transit ridership and operations data, or **estimated** from structural evidence. None is a directly **measured** mode split. |

---

## 2. Name and status changes found during verification

These affect row names in the companion brief.

| Item | Status (verified) | Source |
|---|---|---|
| NRG Stadium / NRG Park | Renamed **Reliant Stadium / Reliant Park** effective **1 Aug 2026** (complex includes Reliant Stadium, Center, Arena, Astrodome). | [Visit Houston](https://www.visithoustontexas.com/blog/post/nrg-park-is-now-reliant-park/); [ABC13, 15 Apr 2026](https://abc13.com/post/nrg-stadium-home-houston-texans-rodeo-renamed-reliant-august-2026-company-announces/18893525/) |
| World Cup stadium name | The same stadium was called "Houston Stadium" during the tournament because of FIFA naming rules. | [FOX 26](https://www.fox26houston.com/news/houston-reliant-stadium-returning-nrg) |
| Rice Stadium | Renamed **First Community Stadium** (20-year deal, Oct 2026); capacity drops from 47,000 to about 30,000 in a renovation. | [MarketScale summary of Chronicle/SBJ](https://www.marketscale.com/industries/sports-entertainment/first-community-credit-union-names-rices-stadium-for-20-years-ahead-of-120m-rebuild) |
| Metro statistical area name | Now **Houston–Pasadena–The Woodlands** (OMB 2023), 10 counties. The brief's "Houston–The Woodlands–Sugar Land" is the older name. | [BLS](https://www.bls.gov/regions/southwest/news-release/areaemployment_houston.htm) |
| Daikin Park | Former Minute Maid Park; current name confirmed. | [Wikipedia](https://en.wikipedia.org/wiki/Daikin_Park) |

---

## 3. Method

**Search order used.** I looked for venue travel plans, planning reviews, organizer surveys, municipal and regional studies, transit event ridership, and parking or event operations reports. What turned up was transit agency releases, host-committee reports, organizer attendance pages, and venue parking and shuttle pages. No venue intercept survey or travel plan was found publicly for any Houston venue.

**Rules applied.**

- People are distinguished from vehicles. Parking spaces are reported as supply only; they are never converted to a mode share.
- Attendance types are kept separate: paid performance attendance, daily grounds visits, ticket buyers, and rail "riders" or boardings.
- **Park-and-ride counts as car-involved.** Anyone who drove to Fannin South (rail), Maxey Road (METRO shuttle), the Rodeo's own satellite lots, or The Woodlands Express lot made a car trip, even though the final leg was rail or shuttle.
- Ordinary commuting data (ACS) is labelled **background only**.

**Ridership inference.** Where I convert boardings into an attendee share, the box in section 5 shows the baseline subtracted, the attendance denominator, the round-trip assumption, and why the result is uncertain. Transfers (for example Green/Purple Line riders changing to the Red Line) add extra boardings per person, so "incremental boardings ÷ 2" is an **upper bound** on rail-using attendees.

**Evidence labels used in the tables.**

- **Measured:** a directly observed mode split. None was found.
- **Derived:** computed from observed counts such as ridership and attendance, with stated assumptions.
- **Estimated:** inferred from structural evidence such as no event transit and large free parking, or from a comparison.
- **Unknown:** no defensible estimate; the current fallback is named.

---

## 4. Venue and event travel table

Shares are **person shares of attendees** unless stated. "Car" means private car, carpool, drop-off and rideshare/taxi, plus park-and-ride where the attendee drove to the lot. The "Sums to 100%?" column states whether the listed components close; any remainder is shown as unclassified.

### 4a. Reliant Park cluster (Houston, Harris County; I-610 / Kirby Dr / SH-288; Red Line Stadium Park/Astrodome station)

| ID | Verified name and setup | Date or season represented | Car (incl. P&R) | Public bus/rail, no car leg | Dedicated event shuttle, no car leg | Walk/bike/other | Unclassified | Sums to 100%? | Recommended car share (range, confidence) | Evidence type |
|---|---|---|---|---|---|---|---|---|---|---|
| R1 | Reliant Stadium: Houston Texans (NFL). Capacity [72,220](https://digital-release.rochesterfirst.com/?p=95624) vs [71,995](https://static.clubs.nfl.com/image/upload/titans/o8xwkbsq2rgxz4ljyi43) (conflict). 2025 regular-season home crowds about [70,400–71,600](https://profootballarchives.com/2025nflhou.html). | Fall/winter, mostly Sunday daytime | ~90% | ~8% | ~0% | ~1% | ~1% | Yes (estimated components) | **0.90** (0.85–0.95), low–moderate | Derived (2011 rail boardings; see 5b) |
| R2 | Reliant Stadium: RODEOHOUSTON performance (rodeo plus concert). 2026 crowds ranged [53,063–80,203](https://houstonseagle.com/1734037/attendance-rodeohouston-2026); the 80,203 concert-only final night set a [stadium concert record](https://www.rodeohouston.com/houston-livestock-show-and-rodeo-rewrites-the-record-books-includes-1-5-million-grand-champion-steer-and-all-time-nrg-stadium-attendance/). | **2027 run: Tue 2 Mar – Sun 21 Mar 2027** ([RodeoHouston](https://www.rodeohouston.com/?p=349732)); weekday evening and weekend afternoon/evening; late winter | ~90% | ~7% | ~0% | ~1% | ~2% | Yes (estimated components) | **0.90** (0.85–0.95), low–moderate | Derived (rail increments; see 5a) |
| R3 | Reliant Park grounds: HLSR open-site daily visits (carnival, livestock, expos). This is not a fixed-capacity room. The 2026 daily totals for all activities on the grounds peaked at [185,785 on Sat 14 Mar](https://www.rodeohouston.com/houston-livestock-show-and-rodeo-rewrites-the-record-books-includes-1-5-million-grand-champion-steer-and-all-time-nrg-stadium-attendance/). Season total about [2.6 million](https://www.kwbu.org/news-from-across-texas/2026-03-24/cody-johnson-sets-concert-attendance-record-to-conclude-2026-houston-rodeo), including the BBQ contest. | 2–21 Mar 2027 | Same pool as R2 | — | — | — | — | Not split separately | Use **0.90** (0.85–0.95), low | Derived (shares the R2 pool) |
| R4 | Reliant Park: World's Championship Bar-B-Que Contest. 2026 attendance was [49,058 / 81,587 / 100,659](https://www.rodeohouston.com/about-us/attendance/) on Thu/Fri/Sat (231,304 total). These are daily visits. | 2027 dates **not confirmed**; a radio station infers [25–27 Feb 2027](https://93qcountry.com/1705006/2027-houston-livestock-show-and-rodeo-dates/) | — | — | — | — | — | No | **Unknown.** Provisional `sprawl` fallback 0.85. Rodeo shuttles run for WCBBQ ([lot hours](https://www.rodeohouston.com/plan-your-visit/park-and-ride/)). | Unknown |
| R5 | Reliant ("Houston") Stadium: FIFA World Cup 2026, seven matches, average [68,598](https://www.fwc26houston.com/post/more-than-one-million-participants-highlight-houston-s-fifa-world-cup-2026-success-story). **Historical, ended 4 Jul 2026.** | Jun–Jul 2026, summer heat | ~70% | ~25% | ~0% | ~3% (fan walks) | ~2% | Yes (estimated components) | **0.70** (0.55–0.83), low; **do not use as a recurring default** | Derived (conflicting methods; see 5c) |
| R6 | Reliant Arena: fixed seating [5,800](https://en.wikipedia.org/wiki/NRG_Park), or "5,700+" on the [venue site](https://www.nrgpark.com/?p=151) | Year-round mixed events | — | — | — | — | — | No | **Unknown.** Provisional 0.85. Same lots and rail as R1–R2. | Unknown |
| R7 | Reliant Center: exhibit halls (no fixed seats; conventions) | Year-round | — | — | — | — | — | No | **Unknown.** Provisional 0.85. | Unknown (gap) |

**Operations shared by R1–R7.**

- **Parking:** about [26,000 spaces](https://www.nrgpark.com/?p=151) on a 350-acre site.
- **Fannin South park-and-ride:** $25–50 per car during the Rodeo, Texans games and stadium concerts, including round-trip Red Line wristbands for every passenger; Reliant Park is [one stop away](https://website-cdn-prod.azureedge.us/riding-metro/houston-attractions/reliant-park).
- **Rodeo shuttles (car-involved, 2026):** Rodeo-run lots at OST, Reed Road, West Loop and Monroe; METRO's Maxey Road lot (over 1,000 vehicles); and The Woodlands Express from the Sawdust Park & Ride (reservations required) ([Rodeo park-and-ride](https://www.rodeohouston.com/plan-your-visit/park-and-ride/); [METRO rodeo page](https://website-cdn-prod.azureedge.us/riding-metro/houston-livestock-show-and-rodeo), canonical ridemetro.org).
- **Local buses:** routes 14, 60 and 84 stop near the park.
- **Paratransit:** METROLift drops off at Gate 11.

**Start/end service (2026 Rodeo).**

- Red Line ran every 6–18 minutes.
- **Last northbound train from Stadium Park/Astrodome: 1:30 a.m. Mon–Sat, but 11:24 p.m. Sunday.** Sunday concerts can therefore end close to the last train.
- The last shuttle to satellite lots left at 1 a.m. Sun–Thu and 2 a.m. Fri–Sat.
- The last shuttle *to* the park left at 9 p.m.
- Satellite shuttles start at 5 p.m. on weekdays but 9 a.m. on weekends, so weekday and weekend access differ ([Rodeo park-and-ride](https://www.rodeohouston.com/plan-your-visit/park-and-ride/)).

**Texans service:** METRO runs Special Event Service on game days with more frequent Red Line trains ([KPRC, Aug 2025](https://gmg-kprc-prod.cdn.arcpublishing.com/news/local/2025/08/15/houston-metro-providing-additional-routes-for-texans-game-days)).

**Rodeo record structure.** The evidence supports three separate event records rather than one:

1. **R2:** the stadium performance, which is a seated, ticketed peak crowd.
2. **R3:** the grounds, which have open-site daily visits.
3. **R4:** the BBQ contest, which happens on the days before the run.

The daily totals for the grounds include stadium ticket holders, so R2 and R3 overlap and must not be added. **No published peak-concurrent figure for the grounds was found.** Daily totals are visits across the day, not a simultaneous crowd.

### 4b. Downtown and EaDo cluster (Houston, Harris County)

| ID | Verified name and setup | Season | Car | Bus/rail, no car | Shuttle | Walk/bike/other | Unclassified | Sums? | Recommended car share | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| D1 | Daikin Park: Houston Astros. Capacity [41,168](https://en.wikipedia.org/wiki/Daikin_Park), but AP used [40,963](https://www.ajc.com/news/2026/09/sparse-crowd-empty-seats-greet-500-astros-for-wild-card-opener-vs-white-sox/) (conflict). 2026 regular-season average [30,519](https://www.ajc.com/news/2026/09/sparse-crowd-empty-seats-greet-500-astros-for-wild-card-opener-vs-white-sox/). | Apr–Sep (Oct postseason); night and day games | — | — | — | — | — | No | **Unknown.** Provisional 0.85. Direction of evidence is ≥0.85: about [25,000 spaces within walking distance](https://en.wikipedia.org/wiki/Daikin_Park), and the nearest station (Convention District) averaged only about [246 / 218 weekday riders](https://en.wikipedia.org/wiki/Convention_District_station) on Green/Purple (May 2025). | Unknown |
| D2 | Toyota Center: Rockets (basketball [18,104](https://en.wikipedia.org/wiki/Toyota_Center)) or concerts (19,000). These are mutually exclusive configurations. | Oct–Apr NBA; year-round concerts | — | — | — | — | — | No | **Unknown.** Provisional 0.85. Parking includes a [2,500-space attached garage plus about 10,000 nearby spaces](https://parkmobile.io/resource-center/blog/where-to-park-for-houston-rockets-games-at-toyota-center). | Unknown |
| D3 | Shell Energy Stadium: Dynamo (MLS), Dash (NWSL), TSU football. Capacity [22,039](https://meetstadium.com/stadiums/shell-energy-stadium/) vs [20,656](https://khou.com/article/news/local/shell-energy-stadium-houston-bag-policy-parking-banned-items/285-0a5a87c4-fb9d-46ea-b2e0-11a4ca49e48f.html) (conflict). | Feb–Nov | — | — | — | — | — | No | **Unknown.** Provisional 0.85. This is the downtown venue most likely to fall below 0.85: the EaDo/Stadium rail stop is adjacent and rail is reportedly free with a match ticket ([guide](https://meetstadium.com/stadiums/shell-energy-stadium/), not an official METRO source). | Unknown |
| D4 | 713 Music Hall (POST Houston), capacity [5,000](https://houstontx.gov/events/713-music-hall.html) | Year-round concerts | — | — | — | — | — | No | **Unknown.** Provisional 0.85. | Unknown |
| D5 | Theater District rooms. Jones Hall [2,912](https://exhibitcitynews.com/?p=56496), also cited as [2,883](https://catastrophictheatre.com/press/citys-theater-district-among-the-best/) (conflict). Wortham Brown [2,423](https://catastrophictheatre.com/press/citys-theater-district-among-the-best/), also [2,405](https://www.houstoniamag.com/arts-and-culture/2022/01/where-to-go-houston-theater-district) (conflict). Wortham Cullen 1,100. Hobby Center Sarofim 2,650. | Sep–May seasons, evening and matinee | — | — | — | — | — | No | **Unknown.** Provisional 0.85. | Unknown |
| D6 | FIFA Fan Festival (EaDo), open site. The best day drew [24,407](https://www.fwc26houston.com/post/more-than-one-million-participants-highlight-houston-s-fifa-world-cup-2026-success-story); total was 551,313 over 39 days, including Dynamo celebration events. **Ended.** | Jun–Jul 2026 | — | — | — | — | — | No | **Unknown.** Historical only. | Unknown |

**Shared approaches and audiences (downtown).** D1–D5 sit within the downtown grid and share I-45, I-69/US-59 and I-10 ramps and a common pool of downtown garages. A ticketing guide warns Dash/Dynamo fans to [arrive early when the Astros also play](https://www.koobit.com/dash-vs-spirit-e139207) because of parking demand. This is weak, non-official evidence of real spill between D1 and D3.

### 4c. University venues (Houston, Harris County)

| ID | Name and setup | Season | Recommended car share | Evidence and notes |
|---|---|---|---|---|
| U1 | TDECU Stadium (University of Houston football), [40,000 seats](https://www.dlrgroup.com/work/tdecu-stadium) | Sep–Nov Saturdays | **Unknown.** Provisional 0.85. | The Purple Line stops near Gate 3, and campus lots require paid permits ([UH gameday guide](https://uhcougars.com/sports/2025/11/6/football-gameday-guide)). Student walk-ups are plausibly significant, but no data was found. |
| U2 | Fertitta Center (UH basketball), [7,035](https://en.wikipedia.org/wiki/Fertitta_Center) vs 7,100 (minor conflict) | Nov–Mar | **Unknown.** Provisional 0.85. | Same campus approaches as U1. |
| U3 | First Community Stadium (formerly Rice Stadium), about [47,000 now, about 30,000 after renovation](https://www.marketscale.com/industries/sports-entertainment/first-community-credit-union-names-rices-stadium-for-20-years-ahead-of-120m-rebuild) | Fall; also high-school playoffs | **Unknown.** Provisional 0.85. | Configuration changes during 2027 construction (section 8). |
| U4 | Tudor Fieldhouse (Rice), [5,208](https://riceowls.com/facilities/tudor-fieldhouse/4) | Nov–Mar | **Unknown.** Provisional 0.85. | — |

### 4d. Suburban venues

| ID | Name, municipality, setup | Season | Car | Bus/rail | Shuttle | Walk/bike | Unclassified | Sums? | Recommended car share | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| S1 | Cynthia Woods Mitchell Pavilion, The Woodlands (unincorporated CDP, Montgomery County). Amphitheater: [16,500](https://en.wikipedia.org/wiki/Cynthia_Woods_Mitchell_Pavilion) total, made up of 6,500 covered seats and about 10,000 lawn. | Spring–fall concerts, mostly evenings | ~97% | ~0% | ~0% | ~2% | ~1% | Yes (estimated) | **0.97** (0.93–0.99), moderate | Estimated. Free parking in [four monitored lots](https://blog.ticketmaster.com/venue-faq-cynthia-woods-mitchell-pavilion-woodlands-tx/) plus a garage built in [2002](https://en.wikipedia.org/wiki/Cynthia_Woods_Mitchell_Pavilion). No fixed-route event-hour transit found. Walk share comes from nearby hotels and residences and is unmeasured. |
| S2 | Smart Financial Centre, Sugar Land (Fort Bend County). Movable-wall theater, [1,900–6,400](https://www.atgentertainment.com/aka_venues/smart-financial-centre/). | Year-round | ~96% | ~0% | ~0% | ~2% | ~2% | Yes (estimated) | **0.96** (0.92–0.99), moderate | Estimated. Has [2,500 guest parking spaces](https://communityimpact.com/sugar-land-missouri-city/arts-entertainment/new-leisure-developments-opening-soon-sugar-land/); no event transit found. |
| S3 | Constellation Field, Sugar Land: Space Cowboys (AAA). Capacity [7,500](https://www.mlb.com/news/featured/constellation-field-home-of-the-sugar-land-space-cowboys), but another source lists [8,606](https://aws.baseball-reference.com/bullpen/Constellation_Field) (conflict). 2025 average [3,706](https://www.statscrew.com/venues/v-2623). | Apr–Sep | ~96% | ~0% | ~0% | ~2% | ~2% | Yes (estimated) | **0.96** (0.92–0.99), moderate | Estimated. More than [2,000 spaces](https://www.sugarlandskeeters.com/directions) at $5–10 per vehicle. |

### 4e. Event rows: races, festivals and edge events

| ID | Event | Date | Crowd measure | Recommended car share | Notes |
|---|---|---|---|---|---|
| E1 | Chevron Houston Marathon and Aramco Half, downtown start and finish | Race weekend **13–17 Jan 2027**; races **Sun 17 Jan 2027** | About [40,000 participants expected](https://abc13.com/story/chevron-houston-marathon-aramco-half-sold-organizers-say/19625067/) (record). Spectators are not counted. | **Unknown.** Provisional 0.85. | This is mainly a **road-closure** event: the closure list was [13 pages long](https://www.click2houston.com/weather/2026/01/07/2026-chevron-houston-marathon-traffic-and-weather-guide) in 2026. Crowd pressure is spread along the course, not at one venue. |
| E2 | Mardi Gras! Galveston (**edge**, Galveston County) | 2026 ran Feb 6–17 over two weekends plus Fat Tuesday ([Galveston Daily News](https://www.galvnews.com/news/mardi-gras-to-bring-large-crowds-street-closures-to-galveston/article_c2880e73-0139-5b83-b7b1-4eeb80c2d6b2.html)) | No reliable official crowd figure found; a widely repeated 400,000 figure comes only from low-quality sites. | **Unknown.** Provisional 0.85. | Separate island market reached by I-45. Treat as an edge record. |
| E3 | METRO/World Cup "Green Corridor" fan walks | Jun–Jul 2026 (ended) | About [55,000 fan-walk participants](https://www.fwc26houston.com/post/more-than-one-million-participants-highlight-houston-s-fifa-world-cup-2026-success-story) | n/a | Historical only. These are participants in organized walks, not a measured walk-to-stadium mode share. |
| E4 | Sugar Land Town Square World Cup watch parties | 2026 (ended) | About [8,000 combined](https://www.fwc26houston.com/post/fifa-world-cup-2026-houston-host-committee-reports-operational-attendance-and-transportation-metri) | n/a | Shows Fort Bend residents taking part in Houston-centred events. |

---

## 5. Ridership inference workings

### 5a. Rodeo (R2/R3)

**Source A: METRO, 2014.**

- METRO reported the average for a typical rodeo-concert day at about [62,000 rail trips](https://content.govdelivery.com/accounts/TXMETRO/bulletins/abe38b).
- Typical Thursdays earlier that year averaged about [43,800](https://content.govdelivery.com/accounts/TXMETRO/bulletins/abe38b).
- The record day was [71,054](https://content.govdelivery.com/accounts/TXMETRO/bulletins/abe38b), and METRO linked it to both the Rodeo and spring break.

**Source B: an undated METRO blog post quoted by BlogHouston.** The weekday stated suggests 2007. It estimated that [18,367 of 64,448 boardings](https://www.bloghouston.com/?p=1682) on the then-record day were rodeo trips.

| Step | Value | Note |
|---|---|---|
| Baseline subtraction | 62,000 − 43,800 ≈ **18,200** incremental boardings per rodeo-concert day (2014) | Includes some spring-break and non-rodeo growth, so this is an upper bound. Source B independently gives about 18,400. |
| Return trips | ÷ 2 → **≤ 9,100** rail-using attendees per day | Transfers make the true person count lower. |
| Car leg | Some of these drove to Fannin South (car-involved) | Fannin South volume is not published, so the share is unknown. |
| Denominator | 2026 daily grounds totals ranged from about 100,000 to [185,785](https://www.rodeohouston.com/houston-livestock-show-and-rodeo-rewrites-the-record-books-includes-1-5-million-grand-champion-steer-and-all-time-nrg-stadium-attendance/) | **Year mismatch:** 2014 rail data against 2026 attendance. 2014 daily attendance was not retrieved. |
| Result | Rail with no car leg ≈ **5–9%** of daily attendance; local bus small | |
| Rest of the crowd | Mostly on-site parking, satellite-lot shuttles and rideshare, all car-involved | |
| Recommended | **Car-involved ≈ 0.90** (0.85–0.95) | Low–moderate confidence. Needs current METRO station data. |

### 5b. Texans (R1)

- A 2011 Texans release states that METRORail averaged about [15,194 boardings on a typical Texans game day](https://www.houstontexans.com/news/reliant-offers-free-metrorail-rides-on-gamedays-5944176).
- **Definitional ambiguity:** the release does not say whether this is game-related boardings or total system boardings that day.
- If it is game-related: ÷ 2 ≈ 7,600 attendees, which is about 11% of a roughly 70,000 crowd. Fannin South parkers within that figure are car-involved, so the rail share with no car leg is about 6–10%.
- If it is a system total, game-related rail use is lower.
- **Recommended car-involved share: 0.90** (0.85–0.95). The evidence is 15 years old, and service has changed since (Special Event Service, 2025).

### 5c. FIFA World Cup 2026 (R5): two methods that conflict

**Method 1: egress counts.**

| Match | Rail egress | Attendance | Rail share on egress |
|---|---|---|---|
| Germany–Curaçao (14 Jun) | More than [20,000 expected](https://www.houstonchronicle.com/news/houston-texas/article/houston-metro-world-cup-22305522.php) (a police forecast, not a count) | [68,021](https://www.fwc26houston.com/post/fifa-world-cup-2026-houston-host-committee-reports-operational-attendance-and-transportation-metri) | ≈ 29% |
| Portugal–Uzbekistan (23 Jun) | METRO estimated 25,000–30,000 | 68,777 | ≈ **36–44%** |

**Method 2: incremental daily boardings.**

- About [500,000 METRORail riders over seven matchdays](https://www.fwc26houston.com/post/more-than-one-million-participants-highlight-houston-s-fifa-world-cup-2026-success-story), which averages about 71,400 per matchday.
- The Host Committee called this nearly 50% above normal daily ridership. That implies a baseline of about 47,600, so the increment is about 23,800 boardings per matchday.
- ÷ 2 gives ≤ 11,900 attendees, which is about **17%** of the 68,598 average crowd.
- Cross-check: 2025 METRORail ridership was [12.65 million](https://en.wikipedia.org/wiki/METRORail), about 37,700 per weekday (Q2 2026). On that lower baseline the increment is larger, but the matchday totals also include Fan Festival riders.

**Why the methods differ.**

- "Riders" may not mean the same thing as boardings.
- The tournament baseline already included Fan Festival and downtown trips.
- Egress figures are crowd estimates.
- Some rail riders parked at Fannin South, so they were car-involved.

**Why this event is unrepresentative.**

- [81% of ticket buyers traveled from outside the Houston area](https://www.fwc26houston.com/post/more-than-one-million-participants-highlight-houston-s-fifa-world-cup-2026-success-story).
- Stadium parking was reported at [$100–175](https://www.fox26houston.com/news/houston-fifa-world-cup-2026-travel-transportation-metro-guide).
- METRO ran 6-minute Red Line service on weekends and late nights under a [temporary plan, 7 Jun–11 Jul](https://content.govdelivery.com/accounts/TXMETRO/bulletins/41a6d3c/).
- Rail capacity was the binding constraint: one reporter described fans waiting about [two hours to board](https://www.houstonchronicle.com/news/houston-texas/article/houston-metro-world-cup-22305522.php) after the first match.

**Recommended car-involved share: 0.70** (0.55–0.83), low confidence, **historical only**.

---

## 6. Regional weighting

**Rules.** Each physical room is counted once at one configuration (Reliant Stadium enters once, not as Texans plus Rodeo plus World Cup). Multi-day totals and daily grounds visits are excluded.

### 6a. Capacity-weighted car share (5,000+ fixed configurations)

| Venue (configuration) | Capacity weight | Car share used | Basis |
|---|---|---|---|
| Reliant Stadium (football) | 72,220 | 0.90 | Derived |
| Cynthia Woods Mitchell Pavilion | 16,500 | 0.97 | Estimated |
| Smart Financial Centre (max) | 6,400 | 0.96 | Estimated |
| Constellation Field | 7,500 | 0.96 | Estimated |
| **Subtotal with evidence** | **102,620** | **0.919** | |
| Daikin Park | 41,168 | unknown | — |
| Toyota Center (concert) | 19,000 | unknown | — |
| Shell Energy Stadium | 22,039 | unknown | — |
| TDECU Stadium | 40,000 | unknown | — |
| First Community (Rice) Stadium | 47,000 | unknown | — |
| Fertitta Center | 7,035 | unknown | — |
| Reliant Arena | 5,800 | unknown | — |
| 713 Music Hall | 5,000 | unknown | — |
| Tudor Fieldhouse | 5,208 | unknown | — |
| **Unknown subtotal** | **192,250** | | |

**Results.**

- **(i) Venues with evidence only:** 94,347 ÷ 102,620 = **0.92**. This covers 35% of the listed capacity.
- **(ii) Unknowns set to the 0.85 fallback:** 257,760 ÷ 294,870 = **0.87**.
- **(iii) Stress test, unknowns at 0.75:** 238,535 ÷ 294,870 = **0.81**.

Even if every unmeasured urban venue were well below the fallback, the regional figure stays far above the `transit` default (0.40).

### 6b. Typical-attendance-weighted car share

| Event row | Typical attendance | Car share | Source |
|---|---|---|---|
| R1 Texans | 70,669 (mean of six 2025 home games) | 0.90 | [Pro Football Archives](https://profootballarchives.com/2025nflhou.html) |
| R2 RODEOHOUSTON performance | 66,251 (mean of 21 performances in 2026) | 0.90 | [93Q list](https://houstonseagle.com/1734037/attendance-rodeohouston-2026) (secondary source) |
| S3 Space Cowboys | 3,706 (2025 average) | 0.96 | [StatsCrew](https://www.statscrew.com/venues/v-2623) |
| D1 Astros (sensitivity only) | 30,519 (2026 average) | 0.85 fallback | [AP](https://www.ajc.com/news/2026/09/sparse-crowd-empty-seats-greet-500-astros-for-wild-card-opener-vs-white-sox/) |

**Results.**

- **R1 + R2 + S3:** **0.90**.
- **Adding Astros at the fallback:** **0.89**.

**Coverage and caveats.**

- Typical attendance was not found for the Pavilion, Smart Financial Centre, Toyota Center, Shell Energy Stadium or the university venues.
- These figures weight each event row once. They are not frequency-weighted by number of events per year.
- The World Cup is excluded because it was a one-off and has ended.

### 6c. Do the huge outlying venues hide the downtown pattern?

Partly, yes.

- Reliant Park alone carries 72,220 of the 102,620 seats with evidence. Its surface lots of [26,000 spaces](https://www.nrgpark.com/?p=151) make it structurally car-oriented, even though it has its own rail station.
- Downtown (D1–D5) totals about 100,000 seats across overlapping rooms but has **no** venue-level mode data. It has rail on three lines, walkable hotels and paid garage parking.
- The downtown share could be lower than Reliant Park's. There is no evidence that it reaches the `transit` level: background commuting transit share is [1.7%](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access), and Convention District station ridership is very low.

---

## 7. Clusters, shared roads and shared audiences

These are separate findings. They do not propose a new distance rule or any manual flags.

| Cluster | Members | Shared approaches | Overlap evidence |
|---|---|---|---|
| Reliant Park | R1–R7 | I-610 South Loop, Kirby Dr, SH-288, Fannin/Main; Red Line; Fannin South park-and-ride | The Rodeo occupies the whole site for three weeks. Texans and Rodeo seasons do not overlap. The stadium, arena and center can run events at the same time. |
| Downtown / EaDo | D1–D6 (also George R. Brown, Discovery Green) | I-45, I-69/US-59, I-10, SH-288 ramps; shared garages; all three rail lines | Astros and Dash/Dynamo parking spill noted above. EaDo visits during the World Cup rose [177% year over year](https://www.fwc26houston.com/post/fifa-world-cup-2026-houston-host-committee-reports-operational-attendance-and-transportation-metri) (Jun 11–22). |
| UH / TSU / Third Ward | U1, U2, TSU venues | I-45/I-69 and SH-288 edges; Purple Line | Football Saturdays can coincide with other events. |
| Rice / Hermann Park / TMC | U3, U4 | Main St, Red Line; next to Texas Medical Center traffic | Lies on the same Red Line as Reliant Park, so rail capacity is shared. |
| The Woodlands | S1 | I-45 North, Hardy Toll Rd, Woodlands Pkwy, Lake Robbins Dr | The Rodeo runs The Woodlands Express lot, which shows an audience shared with Reliant Park. |
| Sugar Land | S2, S3, Sugar Land Town Square | I-69/US-59, SH-6, US-90A | The venues are about a mile apart, so same-night events are possible. |
| Galveston (edge) | E2 | I-45 South only | Separate market. |

**Shared corridor note.** The I-45 corridor links Galveston, downtown and The Woodlands. The Red Line links downtown, Rice/TMC and Reliant Park, so a crowd on any one segment uses rail capacity shared with the others. Rail capacity binding during the World Cup is direct evidence of this.

---

## 8. Confirmed transport and venue changes through 2028

| Change | Date | Status | Suggested re-check |
|---|---|---|---|
| NRG Park / Stadium renamed Reliant Park / Stadium | 1 Aug 2026 | **Done** | None |
| METRO World Cup service boost (6-minute Red Line on weekends and late; 12-minute Green/Purple; seven-day park-and-ride) | 7 Jun – 11 Jul 2026 | **Ended as scheduled.** As of late June 2026 there was [no commitment to make it permanent](https://www.houstonchronicle.com/news/houston-texas/transportation/article/metro-riders-fifa-world-cup-22320385.php). METRO said it would present official ridership to its board. | Check METRO board minutes and service changes in **Nov 2026** and **Jan 2027** |
| Main Street Promenade (pedestrian-only seven blocks along the Red Line) | Completed before the World Cup ([Host Committee](https://www.fwc26houston.com/post/more-than-one-million-participants-highlight-houston-s-fifa-world-cup-2026-success-story)) | **Done** | None |
| Red Line signal priority | Removed Sep 2025, [restored Nov 2025](https://en.wikipedia.org/wiki/METRORail_Red_Line) | **Done** | None |
| Bellaire Quickline (limited-stop bus) ended | [20 Feb 2026](https://en.wikipedia.org/wiki/Quickline) | **Done** | None |
| University Corridor BRT | [Shelved Jun 2024](https://www.houstonpublicmedia.org/articles/news/transportation/2024/06/18/491065/metro-shelves-university-corridor-bus-rapid-transit-project-once-touted-as-transformational/) | **Not funded.** Could be revived later. | Annual |
| Inner Katy BRT | [Scaled back to HOV / managed-lane use](https://www.houstonlanding.org/metro-budget-plan-reduces-inner-katy-brt-to-hov-lane-further-signaling-shift-in-priorities/) (FY2025 budget) | **Proposal**, tied to TxDOT I-10 work | Annual |
| First Community (Rice) Stadium renovation to about 30,000 | Starts after the 2026 season; the team plays amid construction in 2027; completion is targeted [before the 2028 season](https://attheroost.com/2025/11/06/rice-university-gateway-rice-stadium/). Another source says construction may run [through 2028](https://www.thestadiumbusiness.com/2025/11/07/rice-stadium-set-for-reimagining-under-gateway-project/) and is subject to change. | **Scheduled and funded** (naming deal signed) | **Jan 2027**, **Aug 2028** |
| WNBA Houston Comets return to Toyota Center | [2027](https://en.wikipedia.org/wiki/Toyota_Center) (from a Wikipedia infobox only) | **Unconfirmed by an official source here** | **Mar 2027** |
| 2027 Rodeo | [2–21 Mar 2027](https://www.rodeohouston.com/?p=349732) | **Scheduled** | **Jan 2027** (shuttle lots and METRO plan) |
| 2027 Marathon | [17 Jan 2027](https://abc13.com/story/chevron-houston-marathon-aramco-half-sold-organizers-say/19625067/) | **Scheduled** | **Dec 2026** (closures) |

---

## 9. Data gaps, model limits, conflicts and inaccessible sources

**Gaps in evidence.**

- No public mode-split survey was found for any Houston venue, including the Texans, Astros, Rockets, Dynamo, Rodeo, Pavilion and Smart Financial Centre.
- Station-level event ridership for METRO (Stadium Park/Astrodome, EaDo/Stadium, Convention District) for 2025–26 was not retrieved. METRO's monthly ridership PDFs are the likely source.
- Volumes at Fannin South park-and-ride and on the Rodeo satellite shuttles are not published, so the car-involved part of rail and shuttle use cannot be separated.
- Rideshare and drop-off shares are unknown everywhere.
- Parking occupancy is unknown. Space counts cannot be turned into person shares.
- No peak-concurrent figure exists for the Rodeo grounds.
- County-to-county commuting flows (Census LEHD/ACS) were not retrieved, so the boundary rests on population and event-operations evidence only.

**Venues not verified (fixed rooms of 1,000+, or major crowds).**

- George R. Brown Convention Center events
- Bayou Music Center (an old source says about 2,400 seats; current figure unverified)
- White Oak Music Hall
- House of Blues Houston
- TSU H&PE Arena
- Berry Center and other large ISD stadiums, such as Woodforest Bank Stadium
- Houston Open (Memorial Park)
- Texas Renaissance Festival (Todd Mission, Grimes County, outside the metro area)
- Galveston Island Convention Center
- Pride and holiday parades
- Reliant Center exhibitions (OTC and others)

**Source conflicts kept as found.**

| Venue | Conflicting figures |
|---|---|
| Reliant Stadium | 72,220 vs 71,995 |
| Daikin Park | 41,168 vs 40,963 |
| Shell Energy Stadium | 22,039 vs 20,656 |
| Constellation Field | 7,500 vs 8,606 |
| Jones Hall | 2,912 vs 2,883 |
| Wortham Brown Theater | 2,423 vs 2,405 |
| Reliant Arena | 5,800 vs 5,700+ |
| World Cup rail share | About 17% (incremental boardings) vs 29–44% (egress estimates) |

- The Fort Bend population figure of 958,434 is labelled 2025 by [citypopulation.de](https://citypopulation.de/en/usa/texas/48157__fort_bend/) but 2024 by [FRED](https://fred.stlouisfed.org/series/TXFORT5POP).
- Several official METRO and Rodeo pages were retroactively relabelled "Reliant Park" while describing 2026 events held under the NRG name.

**Model limitations.**

- `sprawl` and `hub` have identical car defaults, so the evidence here cannot separate them on car share. Only the spill behavior differs, and I do not know its internal definition.
- Event-specific operations, such as $25 rail wristbands or a 9 p.m. last inbound shuttle, are not represented by a city-type setting.
- Road-closure events such as the marathon are not crowd-at-venue events.

**Inaccessible or partially accessed sources.**

- Houston Chronicle articles were read only through search snippets; full text may be paywalled.
- Statista attendance pages are paywalled.
- METRO ResourceSpace ridership PDFs were not fetched.
- No access control was bypassed.

---

## 10. Required closing items

### 1. Recommended existing city type and rationale; strongest contrary evidence

**Recommend `sprawl`.**

Rationale:

- At Reliant Park, the region's largest venue and its best-served by rail, recurring events derive to about 0.90 car-involved travel.
- Suburban venues estimate at 0.96–0.97.
- Capacity weighting gives 0.87–0.92, and the stress case stays at about 0.81.
- Background commuting shows [71.8% drive alone and 11.0% carpool, against 1.7% transit](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access) (ACS 2024, metro). This is background only.

Strongest contrary evidence:

- The World Cup egress estimates of 36–44% by rail for one match. This was a one-off.
- The unmeasured downtown cluster, where rail, walkable hotels and shared garages make `hub` defensible on spill grounds.

### 2. Car-share values keyed to venue rows

| Row | Value | Range | Label |
|---|---|---|---|
| R1 Texans | 0.90 | 0.85–0.95 | **Derived** (2011 boardings) |
| R2 RODEOHOUSTON performance | 0.90 | 0.85–0.95 | **Derived** (2014 and c.2007 rail increments) |
| R3 HLSR grounds | 0.90 | 0.85–0.95 | **Derived** (shared pool with R2) |
| R5 World Cup 2026 | 0.70 | 0.55–0.83 | **Derived, historical only** |
| S1 Pavilion | 0.97 | 0.93–0.99 | **Estimated** |
| S2 Smart Financial Centre | 0.96 | 0.92–0.99 | **Estimated** |
| S3 Constellation Field | 0.96 | 0.92–0.99 | **Estimated** |
| R4, R6, R7, D1–D6, U1–U4, E1, E2 | Unknown | — | Provisional `sprawl` fallback **0.85** applies |

- **Measured:** none.
- **Projected:** none found. No venue environmental or traffic study with a mode-split projection was located.

### 3. Boundary recommendation and inconsistencies between briefs

**Core market:** Harris, Fort Bend and Montgomery counties.

| County | Population | Source |
|---|---|---|
| Harris | 5,045,026 (2025) | [nchstats summary of Census](https://nchstats.com/houston-population/) |
| Fort Bend | About 958,000 | [FRED](https://fred.stlouisfed.org/series/TXFORT5POP) |
| Montgomery | 781,194 (2025) | [Wikipedia / Census](https://en.wikipedia.org/wiki/Montgomery_County,_Texas) |
| **Core total** | **About 6.78 million, about 86% of the metro's [7,904,627](https://www.citypopulation.de/en/usa/metro/26420__houston_pasadena_the_/)** | |

The three counties were the three fastest-growing Texas counties in the metro in 2024–25 ([FOX 4 / Census](https://www.fox4news.com/news/texas-metros-make-up-4-top-10-latest-us-census-growth-data)). Event evidence ties them together: the Rodeo's Woodlands shuttle and the Sugar Land watch parties.

**Edge municipalities, to be listed separately:**

- **Pearland:** straddles Brazoria, Harris and Fort Bend ([citypopulation](https://citypopulation.de/en/usa/texas/48157__fort_bend/)).
- **Galveston and League City:** Galveston County, [372,207](https://www.census.gov/quickfacts/galvestoncountytexas).
- **Conroe**
- **Katy:** Harris, Fort Bend and Waller counties.
- **Baytown:** Harris and Chambers counties.
- **Todd Mission:** Texas Renaissance Festival, outside the metro.

Do **not** treat the full 10-county metro as one event market. Galveston events (E2) use separate approaches (I-45 South only) and rarely share audiences at the same time with Houston venues.

**Inconsistencies between briefs:**

- The metro area is now named Houston–Pasadena–The Woodlands.
- "NRG" venues are now "Reliant".
- Rice Stadium is now First Community Stadium.
- The companion venue answer was unavailable, so rows were enumerated independently.

### 4. Important gaps, limitations, conflicts and inaccessible sources

See section 9. The most important items are:

1. No measured split anywhere.
2. No current station-level METRO event ridership.
3. Unknown park-and-ride and shuttle volumes.
4. The downtown cluster is entirely unmeasured.
5. The two World Cup rail methods conflict.

### 5. Transport and venue changes through 2028

See section 8.

- **Scheduled or funded:** the Rice stadium renovation (about 30,000 seats by 2028), the 2027 Rodeo (2–21 Mar), and the 2027 Marathon (17 Jan).
- **Done:** the Reliant renaming (Aug 2026), the World Cup service ending (11 Jul 2026), the Bellaire Quickline ending, and the restored Red Line signal priority.
- **Proposals or unconfirmed:** Inner Katy as HOV/managed lanes, any revival of University BRT, any permanent post-World Cup frequency, and the Comets returning in 2027.

**Re-check dates:** Nov 2026, Dec 2026, Jan 2027, Mar 2027 and Aug 2028.
