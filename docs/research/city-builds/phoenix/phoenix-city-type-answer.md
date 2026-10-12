<!-- Pasted by Kylie in the Oct 12, 2026 Claude Code session, answering docs/research/city-builds/phoenix/phoenix-city-type-prompt.md. Saved in full, unedited below this line. Not a product lock: fold into the city settings by the checklist. -->

# Phoenix metro — event-travel evidence and city-type assessment for Fan/Friction Gridlock

**Research date:** Sunday, October 11, 2026. All sources were read on this date unless noted. Values can change; re-check dates are in section E5.

**Scope of this answer:** evidence about how people actually reach large event venues and event sites in the Phoenix metro, assessed against the three existing city settings (`sprawl` 0.85, `hub` 0.85, `transit` 0.4). No new constants are proposed. Ordinary commuting data appears only in a clearly labelled background section.

**Companion venue research:** not available to me in this conversation. Venues were enumerated independently (section 4). Row IDs below (`PHX-01` … `PHX-30`) are my own keys; map them to the companion answer's rows when it is available.

---

## 1. Headline

- **No measured, published event mode split was found for any Phoenix-area venue or event.** Every car-share value below is either a transparent ridership inference, a structural estimate, or "unknown → fallback."
- **Downtown Phoenix (Chase Field, Mortgage Matchup Center)** is the only part of the metro where rail plausibly carries a noticeable event share. Ridership inference from Valley Metro's World Series figures puts rail-riding attendees at roughly **8–12%** of a sellout crowd, which leaves a car-involved share of roughly **0.82–0.92**.
- **Every other large venue** (Glendale/Westgate, Avondale, Scottsdale, the ten Cactus League parks, the West Phoenix amphitheatre) has no rail and only ordinary or event-specific bus/shuttle service; car-involved shares are estimated at **0.93–0.99**.
- **Recommended existing setting: `sprawl`.** `transit` (0.4) is contradicted everywhere. `hub` is defensible only for the downtown Phoenix cluster, which holds about a fifth of large-venue capacity.

---

## 2. Method and definitions

| Term | Meaning in this answer |
|---|---|
| Person share | Share of attendees (people), not vehicles, not tickets sold, not boardings. |
| Car-involved | Any trip whose access includes a private car, carpool, taxi or ride-hail (including driverless ride-hail). **A car trip to a remote lot or park-and-ride followed by a shuttle, bus or light rail is car-involved.** |
| Transit-only | Bus/rail access with no car leg. Cannot be separated from park-and-ride rail riders in any public Phoenix data found, so it is reported as an upper bound. |
| Event shuttle | Organizer-run shuttle (e.g., WM Phoenix Open remote lots). Reported separately, but counted inside car-involved when riders drove to the shuttle lot. |
| Boardings → people | One attendee riding both ways = 2 boardings. Event-day excess boardings are divided by 2. One-way riders (rail in, ride-hail home) make this an underestimate of people touched by rail; non-attendee riders (watch parties, nightlife) make it an overestimate. |
| Evidence labels | **M** measured; **P** projected; **E-rid** estimated from ridership; **E-str** structural estimate from what service exists; **U** unknown → fallback. |

**Ridership inference formula (used in section 6):** attendee rail share ≈ (event-day rail boardings − baseline boardings) ÷ 2 ÷ attendance.

**What raw counts are not used for:** parking-space counts and raw boardings are never converted directly into a mode share. Parking is used only as a consistency check.

---

## 3. Boundary recommendation

| Area | Evidence | Recommendation |
|---|---|---|
| Maricopa County | 4,787,790 residents on July 1, 2025 ([MAG 2025 estimates](https://azmag.gov/portals/0/Maps-Data/Population-Housing/Municipality-Population-and-Housing-Unit-Estimates-2025.pdf)); 97.8% of resident workers worked in-county in the 2006–2010 Census commuting report ([Tucson Sentinel](https://www.tucsonsentinel.com/local/report/031113_pinal_commute/)). All ten Cactus League parks, both NFL/MLB stadiums, both large arenas, the raceway and the WM Phoenix Open site are here. | **Core boundary.** Include tribal land inside the county that hosts venues or remote event parking (Salt River Pima-Maricopa Indian Community: Salt River Fields, also a WM Phoenix Open remote lot). |
| Avondale | Phoenix Raceway is in Avondale, about 30 minutes west of Phoenix ([Fox News/FOX Sports](https://www.foxnews.com/sports/nascar-championship-weekend-returning-to-phoenix-in-2025)). Avondale is missing from the brief's starting city list. | **Include** (inconsistency noted in E3). |
| Pinal County, contiguous East Valley edge (Queen Creek's Pinal portion, San Tan Valley, Apache Junction) | Pinal had about 539,000 residents in the Census 2025 estimate; San Tan Valley incorporated with over 100,000 residents; Queen Creek is mostly in Maricopa with growth extending into Pinal ([Axios Phoenix, Aug 2026](https://www.axios.com/local/phoenix/2026/08/10/pinal-county-population-boom-transformation)). Only 46.7% of Pinal resident workers worked in-county in 2006–2010, with about 57,000 commuting out daily, mostly to Maricopa ([Tucson Sentinel](https://www.tucsonsentinel.com/local/report/031113_pinal_commute/)). | **Include as audience-origin area**, not as a venue area (no 5,000+ fixed venues identified there). |
| City of Maricopa / Casa Grande (Pinal) | Nearly 80% of Maricopa city residents work outside the city ([InMaricopa](https://inmaricopa.com/maricopa-long-commute-pinal-county-census/)), but Axios reports Casa Grande and Maricopa stay separated from the Valley by the Gila River Indian Community buffer ([Axios](https://www.axios.com/local/phoenix/2026/08/10/pinal-county-population-boom-transformation)). | **Edge case:** audience origin yes; venue boundary no. |
| Florence (Pinal) — Country Thunder | Four-day festival at Canyon Moon Ranch; about 35,000 people/day and 8,000 campers were expected in 2021 ([12News](https://12news.com/article/entertainment/country-thunder-returns-to-arizona-for-the-first-time-since-the-beginning-of-the-pandemic/75-4193f453-39f2-4ffc-b03b-f9d68df40348)). | **Edge case, treat as a distant destination site**: list as an event row (PHX-29) but it does not share approaches with Valley venue crowds. |
| Tucson, other distant destinations | Per brief. | **Outside.** |

**Source conflict (Pinal population):** the state/MAG series gives Pinal 502,071 on July 1, 2025 ([MAG](https://azmag.gov/portals/0/Maps-Data/Population-Housing/Municipality-Population-and-Housing-Unit-Estimates-2025.pdf)) while the Census 2025 estimate cited by Axios is about 539,000 ([Axios](https://www.axios.com/local/phoenix/2026/08/10/pinal-county-population-boom-transformation)). These are different estimate programs; the gap does not change the boundary recommendation.

---

## 4. Venue and event inventory (independent enumeration)

Capacities are configuration-specific. Mutually exclusive configurations of the same building are listed on one row and are never added.

| Row | Verified current name (former) | Municipality | Config / capacity used | Source(s) |
|---|---|---|---|---|
| PHX-01 | Chase Field | Phoenix (downtown) | Baseball 48,330 (another listing: 48,519) | [Meet Stadium](https://meetstadium.com/stadiums/chase-field/); [Stadium Journey](https://www.stadiumjourney.com/stadiums/chase-field-s2) |
| PHX-02 | **Mortgage Matchup Center** (Footprint Center 2021–25; PHX Arena 2025) | Phoenix (downtown) | Basketball 17,071; in-round concert 17,716; end-stage concert 12,565; theatre 4,379 | [Wikipedia](https://en.wikipedia.org/wiki/Mortgage_Matchup_Center); renaming: [ABC15](https://www.abc15.com/entertainment/events/the-arena-for-the-phoenix-suns-and-phoenix-mercury-is-now-called-the-mortgage-matchup-center) |
| PHX-03 | Arizona Financial Theatre (Comerica, then Arizona Federal Theatre) | Phoenix (downtown) | 5,000 seats; 275,000+ fans/year | [KTAR](https://ktar.com/arizona-news/heres-the-new-name-of-arizona-federal-theatre-in-downtown-phoenix) |
| PHX-04 | State Farm Stadium | Glendale (Westgate) | 63,400 (older New Times listing) | [Phoenix New Times](https://www.phoenixnewtimes.com/?p=40542556) |
| PHX-05 | Desert Diamond Arena (Gila River Arena) | Glendale (Westgate) | Hockey/indoor football 17,125; basketball 18,300; concert ~19,000 | [Wikipedia](https://en.wikipedia.org/wiki/Desert_Diamond_Arena) |
| PHX-06 | Talking Stick Resort Amphitheatre (Ak-Chin Pavilion) | Phoenix (Maryvale) | 20,106 | [Wikipedia](https://en.wikipedia.org/wiki/Talking_Stick_Resort_Amphitheatre) |
| PHX-07 | Mountain America Stadium (Sun Devil Stadium) | Tempe | 53,599 | [Wikipedia](https://en.wikipedia.org/wiki/Mountain_America_Stadium) |
| PHX-08 | Phoenix Raceway | Avondale | Grandstand capacity disputed (see E4) | [Wikipedia](https://en.wikipedia.org/wiki/2025_NASCAR_Cup_Series_Championship_Race) |
| PHX-09–18 | Ten Cactus League parks | Mesa ×2, Glendale, Scottsdale ×2, Peoria, Surprise, Phoenix, Goodyear, Tempe | See section 7 | [Cronkite News 2026 guide](https://cronkitenews.azpbs.org/2026/02/11/cactus-league-guide-spring-training/) |

**"Footprint?" lead resolved:** there is no separate Footprint venue. Footprint Center was the 2021–2025 name of the downtown Suns/Mercury arena, which is now Mortgage Matchup Center under a 10-year deal ([National Mortgage News](https://www.nationalmortgagenews.com/news/uwm-inks-deal-to-name-phoenix-suns-mercury-arena)).

**Enumerated but not verified in this pass (named gaps):** Desert Financial Arena and Mullett Arena (ASU, Tempe), Phoenix Symphony Hall, Orpheum Theatre, Celebrity Theatre, The Van Buren, Marquee Theatre (Tempe), ASU Gammage, Mesa Arts Center, GCU Arena, Phoenix Rising's stadium, Phoenix Municipal Stadium, Veterans Memorial Coliseum (used for a sold-out 2025 State Fair concert per the [Arizona State Fair](https://azstatefair.com/know-before-you-go-the-format/)), Phoenix Convention Center halls, WestWorld (Barrett-Jackson). No capacity or travel figures are asserted for these; rooms that are confirmed at 1,000+ would provisionally take the `sprawl`/`hub` fallback of 0.85 (or the downtown estimate if downtown).

---

## 5. Venue / event travel table

### 5a. Mode split and recommended value

Columns: car = private car, carpool, taxi, ride-hail (car-involved, including drive-to-shuttle); transit-only = bus/rail without a car leg; shuttle = organizer shuttle (shown separately but **inside** car-involved where riders drove to it); walk/bike/other; unclassified.

| Row | Venue / event | Setup & period represented | Car-involved | Transit-only | Event shuttle | Walk/bike/other | Unclassified | Σ=100%? | **Recommended car share (range)** | Confidence | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| PHX-01a | Chase Field | World Series G3–G5, weeknights Oct 30–Nov 1, 2023, sellouts | ~85–90% | ≤8–12% (upper bound; includes park-and-ride rail riders) | none | ~1–4% (not measured) | residual | Only by construction | **0.87 (0.82–0.92)** | Low–medium | E-rid (section 6) |
| PHX-01b | Chase Field | Regular season, ~28,000 average crowd (2026) | Assumed ≥ PHX-01a | Unknown; likely ≤ sellout share | none | Unknown | — | No | **0.87 (0.82–0.92)**, provisional | Low | E-rid transferred from sellouts + 2009 opener |
| PHX-02 | Mortgage Matchup Center | Suns game, Tue Oct 31, 2023 (Halloween, same day as WS G4) | ~83–90% | ≤16–17% (upper bound, Halloween confounded) | none | Unknown | residual | No | **0.87 (0.80–0.92)** | Low | E-rid |
| PHX-03 | Arizona Financial Theatre | Concerts/touring theatre, any season | Unknown | Unknown | none | Unknown | 100% | No | **Unknown → `hub`/`sprawl` fallback 0.85** | — | U |
| PHX-04a | State Farm Stadium | Cardinals regular season (Sundays, Sept–Jan) | ~95–99% | ≤1–2% (Route 70 only) | none routinely | ~1–3% (Westgate hotels/residents) | residual | No | **0.97 (0.93–0.99)** | Medium | E-str |
| PHX-04b | State Farm Stadium | Mega-events (Super Bowl LVII Feb 12, 2023; Men's Final Four Apr 6 & 8, 2024) | ~93–98% | ≤2–5% (enhanced bus from light rail) | enhanced Valley Metro bus | small | residual | No | **0.96 (0.92–0.99)** | Low–medium | E-str |
| PHX-05 | Desert Diamond Arena | Concerts, Rattlers, PBR; any season | ~95–99% | ≤1–2% | none | ~1–3% | residual | No | **0.97 (0.93–0.99)** | Medium | E-str |
| PHX-06 | Talking Stick Resort Amphitheatre | Summer/fall concerts (outdoor) | ~95–99% | ≤1–2% | none found | small | residual | No | **0.97 (0.93–0.99)** | Medium | E-str |
| PHX-07 | Mountain America Stadium | ASU football, fall Saturdays (often evening) | ~65–85% | ~5–15% (light rail and streetcar adjacent) | ASU inter-campus shuttles | ~10–20% (on/near-campus students) | residual | No | **0.75 (0.65–0.85)** | Low | E-str + ASU employee commute comparison (background) |
| PHX-08 | Phoenix Raceway | NASCAR spring race weekend; fall Round-of-8 race (2026) | ~97–99% | ~0% | not verified | camping/other small | residual | No | **0.98 (0.95–0.99)** | Medium | E-str |
| PHX-09–18 | Cactus League parks (each a separate row, section 7) | Feb 19–late Mar 2027 schedule | ~92–98% (Scottsdale Stadium ~85–95%) | ~0–2% | some team/hotel shuttles, unquantified | Scottsdale Stadium: Old Town walk-ins | residual | No | **0.95 (0.90–0.98)**; Scottsdale Stadium **0.90 (0.85–0.95)** | Low | E-str |
| PHX-19 | WM Phoenix Open, TPC Scottsdale | Tournament week Feb 2–8, 2026 (open site; daily crowds not published) | ~95–99% | <1% | **Majority of GA arrivals likely via free remote-lot shuttles (unmeasured), counted inside car-involved** | <2% (bike parking provided) | residual | No | **0.97 (0.93–0.99)** | Medium | E-str |
| PHX-20 | Arizona State Fair | Thu–Sun, Oct 1–Nov 1, 2026 (multi-week; daily attendance not found) | ~88–96% | ~3–8% (local bus; rail is not adjacent) | free park-and-ride shuttles (car-involved) | small | residual | No | **0.92 (0.85–0.96)** | Low | E-str |
| PHX-21 | Downtown free fan festivals (Hance Park, Convention Center) — e.g., Final Four weekend Mar 31–Apr 2, 2017 | Multi-day open site | Unknown, likely lowest in the metro | ≈11% illustrative (very weak denominator) | none | Unknown | — | No | **Unknown → 0.85 fallback**; illustrative inference only | Very low | E-rid (section 6) |
| PHX-29 | Country Thunder, Florence (Pinal edge case) | Apr 9–12, 2026; campers + day visitors | ~97–99% | ~0% | paid festival shuttle (car-involved) | camping on site | residual | No | **0.98 (0.95–0.99)** | Medium | E-str |
| PHX-30 | Spring-training/arena exhibitions at Chase Field | Occasional | as PHX-01 | as PHX-01 | — | — | — | No | as PHX-01b | Low | U |

**Why no row sums to a measured 100%:** no Phoenix source splits event attendees by mode. Each estimate was built as "car-involved" plus residual categories; the residuals are unmeasured.

### 5b. Parking, operations, access constraints, shared approaches

| Row | Parking supply & remote arrangements | Event operations, closures, start/end service | Access constraints & crowds sharing approaches | Sources / method |
|---|---|---|---|---|
| PHX-01 / PHX-02 / PHX-03 | Downtown Phoenix had 60,254 spaces in 2022, about 65% in garages ([Downtown Phoenix Comprehensive Parking Study 2022](https://www.investinphoenix.com/Documents/Downtown-Phoenix-Comprehensive-Parking-Study_2022_FINAL.pdf)). On the Friday Mar 4, 2022 survey night (Suns game + M3F festival + First Friday) on-street occupancy was ~95% while off-street was ~37% (same study). The study's takeaway: off-street facilities are typically underused even during events. An older team-sourced figure: about 33,000 spaces within a 15-minute walk and roughly 15,000 needed for a sellout ([Now Hitting, undated](https://nowhitting.com/index.php/stadiums/chase-field/ballpark-parking)). Valley Metro cited $50+ garage prices during the 2023 World Series ([Cronkite News via YourValley](https://www.yourvalley.net/stories/phoenix-businesses-airport-valley-metro-prepare-for-world-series-visitors,457057)). | Light rail stops at 3rd St/Jefferson (eastbound) and 3rd St/Washington (westbound) ([Wikipedia](https://en.wikipedia.org/wiki/Mortgage_Matchup_Center)). Normal full service ends around 11 p.m. with partial service to about 1 a.m., and trains every 20 minutes after 8 p.m. ([Wikipedia](https://en.wikipedia.org/wiki/Valley_Metro_Rail)). Event-specific post-game holds for 2026 were **not verified**; an older guide says trains ran 45 minutes after the final out ([Now Hitting](https://nowhitting.com/index.php/stadiums/chase-field/ballpark-parking)). The city's "Sunburst" event traffic plan dates from the 1990s and was recommended for update ([Parking Study](https://www.investinphoenix.com/Documents/Downtown-Phoenix-Comprehensive-Parking-Study_2022_FINAL.pdf)). | Chase Field and the arena sit about a block apart and share garages, I-10/I-17 ramps and 7th St; the Oct 31, 2023 double-header (WS + Suns) is the documented example. Theatre, Convention Center and Hance Park events share the same approaches. | Ridership inference (section 6); parking as consistency check only. |
| PHX-04 / PHX-05 | Cardinals game-day parking sits throughout Sportsman's Park, digital passes only ([New Orleans Saints travel guide](https://www.neworleanssaints.com/fans/travelguide/arizona-travelguide)). Ride-hail zone in the Black Lot south of the stadium ([Arizona Sports](https://arizonasports.com/nfl/arizona-cardinals/what-to-know-if-youre-attending-sundays-cardinals-vs-lions-game)). **Conflict:** low-quality guides give 14,000 spaces ([The Stadium Reviews](https://thestadiumreviews.com/resources/parking/state-farm-stadium/)) vs "over 24,000" ([Koobit](https://www.koobit.com/zach-bryan-e123110)); neither is authoritative. | Lots open four hours pre-kickoff; city traffic control center with ADOT/DPS; ticket-specific routing maps ([ABC15](https://www.abc15.com/news/region-west-valley/glendale/glendales-transportation-team-works-to-mitigate-game-day-traffic)). Super Bowl LVII closed northbound Loop 101 on-ramps from Cardinals Way and Camelback ([azfamily](https://www.azfamily.com/2023/02/12/live-what-super-bowl-fans-should-know-about-traffic-getting-into-glendale)). Final Four 2024: light rail does not reach the stadium; enhanced bus from the 19th Ave light rail station to Westgate ([azfamily](https://www.azfamily.com/2024/04/01/score-free-rides-final-four-events-using-valley-metro)); Route 70 to games ([KJZZ](https://www.kjzz.org/2024-03-20/content-1874750-valley-metro-offers-free-rides-ncaa-final-four-events)). | State Farm Stadium and Desert Diamond Arena share Westgate lots, Loop 101 and Glendale Ave/Cardinals Way. Camelback Ranch (PHX-11) is nearby on the Loop 101 corridor in spring. Glendale's council stopped downtown-Glendale light rail planning in 2017 ([Wikipedia](https://en.wikipedia.org/wiki/Capitol/I-10_West_Extension)). | Structural estimate from absence of rail and only one regular bus route. |
| PHX-06 | 8,000 pavilion seats plus 12,000 lawn ([Ticketmaster blog](https://blog.ticketmaster.com/?p=40068)); on-site lot counts not found. | No event transit found. | Located near 83rd Ave and I-10. **Small location conflict:** "83rd Avenue and Encanto" ([FOX 10](https://www.fox10phoenix.com/news/phoenix-music-venue-ak-chin-pavilion-talking-stick)) vs "83rd Avenue and McDowell Road" ([New Times](https://www.phoenixnewtimes.com/music/every-talking-stick-resort-amphitheatre-concert-announced-for-2026-so-far-40661434/)); both describe the same site. Shares I-10 West with Phoenix Raceway traffic. | Structural estimate. |
| PHX-07 | General game-day lots and structures $20/vehicle ([Sun Devil Athletics](https://thesundevils.com/facilities-venues/mountain-america-stadium)). | Light rail at Veterans Way/College Ave; Tempe Streetcar at Marina Heights (same source). | Shares Rio Salado Pkwy, University Dr, Loop 202 and Mill Ave with Tempe Town Lake events and Tempe Diablo Stadium (spring only). | Structural estimate; **background comparison only:** ASU employees in a 2017 TRP-based report were 66% drive-alone, 10% carpool, 13% walk/bike, 10% transit/shuttle ([AASHE STARS](https://reports.aashe.org/institutions/arizona-state-university-az/report/2017-02-27/OP/transportation/OP-17/)) — employees, not fans. |
| PHX-08 | Not verified. | $178M renovation completed in 2018 ([Fox News](https://www.foxnews.com/sports/nascar-championship-weekend-returning-to-phoenix-in-2025)). Championship weekend moved to Homestead for 2026; Phoenix keeps two weekends, the fall date in the Round of 8 ([Frontstretch](https://frontstretch.com/2025/05/06/nascar-moving-championship-weekend-back-homestead-2026)). | I-10 West / Loop 101 / Loop 202 South Mountain; overlaps Talking Stick Resort Amphitheatre and Goodyear/AmFam spring traffic if dates coincide. | Structural estimate. |
| PHX-19 | Free general parking with shuttles at WestWorld lots A/B/C and Salt River Fields; Lot R for ride-hail; on-site lots reserved for ADA/credentialed passes ([WMPO parking page, update Jan 30, 2026](https://wmphoenixopen.com/?p=48814)). Weather once cost about 3,000 grass spaces ([GOLF.com](https://golf.com/news/wm-phoenix-open-explains-controversial-course-closure-decision/?amp=1)). Bike parking at a City of Scottsdale pavilion ([InBusinessPHX](https://inbusinessphx.com/?p=185023)). | Free shuttle Wed–Sun, 9 a.m.–6 p.m. ([Experience Scottsdale](https://experiencescottsdale.com/stories/post/an-insiders-guide-to-the-waste-management-phoenix-open)). 2026: Hayden Rd closed between Frank Lloyd Wright Blvd and Princess Dr ([Arizona Republic via Yahoo](https://www.yahoo.com/news/articles/police-target-drunken-drivers-around-231614068.html)); Loop 101 exits at Hayden and Scottsdale Rd reserved for ADA/credentialed parking ([WMPO](https://wmphoenixopen.com/?p=48814)). | Shares Loop 101 (Pima/Bell/Frank Lloyd Wright) with WestWorld events and Salt River Fields. Attendance has not been officially reported since 2018, when more than 700,000 attended over the week ([GOLF.com](https://golf.com/news/wm-phoenix-open-explains-controversial-course-closure-decision/?amp=1)); media figures range from 500,000+ ([Experience Scottsdale](https://experiencescottsdale.com/stories/post/an-insiders-guide-to-the-waste-management-phoenix-open)) to 700,000 ([azfamily 2025](https://www.azfamily.com/2025/02/05/where-park-wm-phoenix-open)). **Weekly totals are not a simultaneous crowd.** | Structural estimate; shuttle riders counted as car-involved. |
| PHX-20 | Two official lots at $15; free park-and-ride at Phoenix College with the last shuttle leaving the fairgrounds at 11 p.m. ([Arizona State Fair](https://azstatefair.com/?p=27509)); a State Capitol lot shuttle was also offered in 2025 ([State Fair concert page](https://azstatefair.com/know-before-you-go-the-format/)). | 2026 dates Thu–Sun, Oct 1–Nov 1 ([Arizona State Fair](https://azstatefair.com/?p=27509)). | 19th Ave/McDowell/Grand Ave; shares I-10/I-17 approaches with downtown events. | Structural estimate. |
| PHX-29 | Charges for camping, parking and shuttle ([YourValley](https://www.yourvalley.net/stories/expect-heavy-traffic-to-country-thunder-2025,574565)). | Florence PD, Pinal County Sheriff and ADOT traffic coordination (same source). | Distant site; approaches via US-60/SR-79, not Valley venue roads. | Structural estimate. |

---

## 6. Ridership inference — worked examples

### 6.1 Chase Field, 2023 World Series (PHX-01a)

Valley Metro reported 40,340 rides (Mon Oct 30), 46,253 (Tue Oct 31, also Halloween and a Suns home game) and 40,800 (Wed Nov 1), against a typical ~29,000 daily rides ([KTAR](https://ktar.com/arizona-news/valley-metro-saw-boom-in-light-rail-ridership-with-d-backs-in-world-series/5550811/); [Metro Magazine](https://www.metro-magazine.com/10211164/valley-metro-reveals-ridership-numbers-from-world-series)). Denominator: Chase Field capacity 48,330 ([Meet Stadium](https://meetstadium.com/stadiums/chase-field/)), assuming sellouts.

| Day | Rides | Baseline A: 29,000 (published all-day typical) | People (÷2) | Share of 48,330 | Baseline B: 33,000 (**my assumption** for a weekday; unsourced, sensitivity only) | People | Share |
|---|---|---|---|---|---|---|---|
| Oct 30 | 40,340 | 11,340 | 5,670 | 11.7% | 7,340 | 3,670 | 7.6% |
| Nov 1 | 40,800 | 11,800 | 5,900 | 12.2% | 7,800 | 3,900 | 8.1% |
| Oct 31 | 46,253 | excluded: Suns game + Halloween confound | — | — | — | — | — |

**Reading:** rail touched roughly 8–12% of attendees. That figure is an **upper bound for transit-only**, because some of those riders drove to light rail park-and-rides (car-involved under the brief) and some excess riders were downtown for watch parties rather than the game. One-way riders push the other way. Car-involved therefore ≈ 0.85–0.90 for this event; the recommended 0.87 with 0.82–0.92 range covers both baselines and the park-and-ride uncertainty.

**Corroboration (independent, weaker):** the April 5, 2009 season opener set a then-record 55,679 boardings while April's average weekday was 44,932 ([Progressive Railroading](https://www.progressiverailroading.com/passenger_rail/article/Phoenixs-Valley-Metro-sets-sights-on-expansion-a-loss-of-state-funding-notwithstanding--23535)). Excess 10,747 → ~5,370 people → ~11% of a 48,519 sellout ([Stadium Journey capacity](https://www.stadiumjourney.com/stadiums/chase-field-s2)). The April average includes the opener itself, so this is slightly understated.

**Parking consistency check (not a mode share):** the team's older estimate of ~15,000 spaces for a sellout ([Now Hitting](https://nowhitting.com/index.php/stadiums/chase-field/ballpark-parking)) at an assumed 2.5–3.0 people per parked car would cover 37,500–45,000 people, i.e., 77–93% of 48,519, before counting ride-hail drop-offs. This is consistent with the 0.82–0.92 range.

### 6.2 Mortgage Matchup Center, Suns game on Oct 31, 2023 (PHX-02)

Incremental rides on Oct 31 over the two World-Series-only weeknights: 46,253 − 40,800 = 5,453 and 46,253 − 40,340 = 5,913 ([KTAR](https://ktar.com/arizona-news/valley-metro-saw-boom-in-light-rail-ridership-with-d-backs-in-world-series/5550811/)). Divided by 2 → 2,730–2,960 people → 16–17% of a 17,071 basketball capacity ([Wikipedia](https://en.wikipedia.org/wiki/Mortgage_Matchup_Center)). Halloween nightlife inflates this, so it is a ceiling. Valley Metro separately noted an influx of riders for Suns playoff games in 2023 without numbers ([YourValley/Cronkite](https://www.yourvalley.net/stories/phoenix-businesses-airport-valley-metro-prepare-for-world-series-visitors,457057)).

### 6.3 Downtown festival weekend, Final Four 2017 (PHX-21) — illustrative only

Valley Metro served about 220,000 riders Mar 31–Apr 2, 2017, 68% above an average weekend ([Mass Transit](https://www.masstransitmag.com/rail/press-release/12322144/valley-metro-valley-metro-rail-connects-220000-riders-to-final-four-weekend-events)) → implied baseline ~130,950, excess ~89,050 boardings → ~44,500 people. The mayor's office estimated 400,000 people downtown that weekend ([KTAR](https://ktar.com/arizona-news/valley-metro-serves-more-than-200000-riders-during-final-four-weekend)) → ~11%. The denominator is a political estimate that likely counts daily visits multiple times, and the excess includes a Diamondbacks opener, a Suns game, Phoenix Pride and Tempe's arts festival; **not used for a recommended value.**

### 6.4 Not inferable

- **Super Bowl LVII (Feb 2023):** 250,000 rail riders over six days, 60% above average ([Mass Transit](https://www.masstransitmag.com/rail/press-release/21296164/valley-metro-valley-metro-rail-serves-250000-people-during-super-bowl-week)). The game was in Glendale, which rail does not reach; the surge reflects downtown fan events. No stadium mode share can be inferred.
- **2024 Men's Final Four:** the city reports more than 130,000 light rail users, and on the same page 275,000 weekly riders and a record 127,000 on Saturday ([City of Phoenix major events](https://phoenix.gov/majorevents)). **Material conflict in phrasing, preserved;** in either case the riders were mostly downtown fan-fest attendees, not stadium attendees.

---

## 7. Cactus League — each park separately, 2027 schedule

**Schedule status:** MLB announced the 2027 spring schedule; all 30 teams open Feb 19, regular season begins Mar 24 ([MLB.com](https://www.mlb.com/news/mlb-spring-training-2026-schedule-released)). The Cactus League lists 229 games, Feb–Mar 2027 ([cactusleague.com](https://cactusleague.com/)). **Labor risk:** reporting notes owners are expected to lock out players and the 2027 schedule may not start on time ([FOX 11](https://fox11online.com/sports/brewers-and-mlb/milwaukee-2027-spring-training-cactus-league-exhibition-game-schedule)). Full game-by-game list: [Cactus League schedule](https://cactusleague.com/schedule.php).

**Travel context common to all parks:** 2025 drew 1,695,480 fans across 224 games ([Arizona Sports](https://arizonasports.com/?p=3579433)) (the league page says 221 games — small definitional conflict ([Cactus League](https://cactusleague.com/economic-impact.php))). Six of ten attendees came from out of state in the 2026 ASU survey of 3,999 visitors ([KTAR](https://ktar.com/?p=5910603)); out-of-area parties had a median size of 3 in the 2018 study ([KJZZ](https://www.kjzz.org/2020-03-02/content-1466526-whats-economic-impact-arizona-cactus-league-baseball-season)). No ballpark is on light rail. Rental cars and hotel shuttles are plausible but unquantified. **All Cactus values are E-str, low confidence.**

| Row | Park (municipality) | Tenants | Capacity used (conflicts) | 2027 schedule facts verified | Typical crowd evidence | Car share (range) | Parking / shared approaches |
|---|---|---|---|---|---|---|---|
| PHX-09 | Sloan Park (Mesa) | Cubs | 15,000 ([Cronkite](https://cronkitenews.azpbs.org/2026/02/11/cactus-league-guide-spring-training/)) | Opening day not at Sloan (Cubs at Athletics, Hohokam) ([Cactus League](https://cactusleague.com/schedule.php)); Brewers close spring at the Cubs Mar 22–23 ([FOX 11](https://fox11online.com/sports/brewers-and-mlb/milwaukee-2027-spring-training-cactus-league-exhibition-game-schedule)) | 12,969 average in 2026 ([KTAR](https://ktar.com/?p=5910603)); record 16,161 single game in 2025 ([New Times](https://www.phoenixnewtimes.com/arts-culture/cactus-league-attendance-rises-again-fuels-710m-in-revenue-21507308/)) | 0.95 (0.90–0.98) | Loop 202/Dobson; shares Loop 202 with Tempe/ASU traffic |
| PHX-10 | Hohokam Stadium (Mesa) | Athletics | 10,500 ([Cronkite](https://cronkitenews.azpbs.org/2026/02/11/cactus-league-guide-spring-training/)) | Feb 19: Cubs at Athletics ([Cactus League](https://cactusleague.com/schedule.php)) | League avg only | 0.95 (0.90–0.98) | On-site parking (same Cronkite guide) |
| PHX-11 | Camelback Ranch (Glendale) | Dodgers, White Sox | 13,000 ([Cronkite](https://cronkitenews.azpbs.org/2026/02/11/cactus-league-guide-spring-training/)); 13,583 elsewhere ([UF](https://springtraining.jou.ufl.edu/2025/05/06/spring-training-scorecard-grading-arizonas-cactus-league-venues/)) | Feb 19: White Sox at Dodgers; Dodgers play 17 of 30 Cactus games there, home 4 of 5 weekends ([Dodger Blue](https://dodgerblue.com/2027-dodgers-spring-training-schedule-cactus-league-opener-against-white-sox/2026/09/04/)) | Dodgers 11,065 avg in 2025 ([Arizona Sports](https://arizonasports.com/?p=3579433)) | 0.95 (0.90–0.98) | Free parking behind stadium ([Cronkite](https://cronkitenews.azpbs.org/2026/02/11/cactus-league-guide-spring-training/)); Loop 101 corridor shared with Westgate |
| PHX-12 | Salt River Fields at Talking Stick (SRPMIC, Scottsdale address) | Diamondbacks, Rockies | 11,000 ([Cronkite](https://cronkitenews.azpbs.org/2026/02/11/cactus-league-guide-spring-training/)) | Feb 19: Rockies at Diamondbacks (split squad) ([Cactus League](https://cactusleague.com/schedule.php)) | D-backs 11,440 avg in 2025, mixed SRF and Chase ([Arizona Sports](https://arizonasports.com/?p=3579433)) | 0.95 (0.90–0.98) | Also a WMPO remote shuttle lot in February; Loop 101/Pima |
| PHX-13 | Scottsdale Stadium (Scottsdale) | Giants | 12,000 ([Cronkite](https://cronkitenews.azpbs.org/2026/02/11/cactus-league-guide-spring-training/)) | Feb 19: Diamondbacks (split squad) at Giants ([Cactus League](https://cactusleague.com/schedule.php)) | League avg only | **0.90 (0.85–0.95)** — Old Town walk-ins | Public parking at Civic Center library garage ([Cronkite](https://cronkitenews.azpbs.org/2026/02/11/cactus-league-guide-spring-training/)) |
| PHX-14 | Peoria Sports Complex (Peoria) | Padres, Mariners | 12,399 ([Cronkite](https://cronkitenews.azpbs.org/2026/02/11/cactus-league-guide-spring-training/)); 12,339 ([ESPN](https://www.espn.com/mlb/story/_/id/43801583/every-mlb-spring-training-location)); 11,333 ([UF](https://springtraining.jou.ufl.edu/2025/05/06/spring-training-scorecard-grading-arizonas-cactus-league-venues/)) | Feb 19: Padres at Mariners ([Cactus League](https://cactusleague.com/schedule.php)) | Padres +835/game in 2025 ([New Times](https://www.phoenixnewtimes.com/arts-culture/cactus-league-attendance-rises-again-fuels-710m-in-revenue-21507308/)) | 0.95 (0.90–0.98) | Loop 101 West |
| PHX-15 | Surprise Stadium (Surprise) | Royals, Rangers | 10,500 ([UF](https://springtraining.jou.ufl.edu/2025/05/06/spring-training-scorecard-grading-arizonas-cactus-league-venues/)) | 30 games; Feb 19 Rangers vs Royals, then daily home games through at least Mar 6 ([Signals AZ](https://www.signalsaz.com/articles/2027-spring-training-schedule-released/)) | League avg only | 0.95 (0.90–0.98) | Loop 303 / Bell Rd |
| PHX-16 | American Family Fields of Phoenix (Phoenix, Maryvale) | Brewers | 10,000 ([Cronkite](https://cronkitenews.azpbs.org/2026/02/11/cactus-league-guide-spring-training/)); 8,000 ([Wikipedia ACL list](https://en.wikipedia.org/wiki/List_of_Arizona_Complex_League_stadiums)) | 15 home games; opener Feb 19 vs Angels; home starts 1:10 p.m. except 6:10 p.m. Mar 19 vs Padres ([FOX 11](https://fox11online.com/sports/brewers-and-mlb/milwaukee-2027-spring-training-cactus-league-exhibition-game-schedule)) | League avg only | 0.95 (0.90–0.98) | Loop 101 / I-10 West Valley |
| PHX-17 | Goodyear Ballpark (Goodyear) | Reds, Guardians | 9,500 ([Cronkite](https://cronkitenews.azpbs.org/2026/02/11/cactus-league-guide-spring-training/)); 10,311 ([Dodger Blue](https://dodgerblue.com/mlb-spring-training-cactus-league-stadiums-guide/2023/03/22/amp/)) | Feb 19: Guardians at Reds ([Cactus League](https://cactusleague.com/schedule.php)) | League avg only | 0.95 (0.90–0.98) | I-10 West; Loop 303 |
| PHX-18 | Tempe Diablo Stadium (Tempe) | Angels | 9,558 ([UF](https://springtraining.jou.ufl.edu/2025/05/06/spring-training-scorecard-grading-arizonas-cactus-league-venues/)); 9,785 ([Wikipedia ACL list](https://en.wikipedia.org/wiki/List_of_Arizona_Complex_League_stadiums)) | Feb 20: Guardians at Angels ([Cactus League](https://cactusleague.com/schedule.php)) | League avg only | 0.95 (0.90–0.98) | I-10/US-60 "Broadway curve" area |

**Peak overlap example:** the largest single-day Cactus attendance in 2025 was 80,887 across all parks on Mar 8 ([Arizona Sports](https://arizonasports.com/?p=3579433)). That is a sum of separate crowds at different parks, **not one crowd**.

---

## 8. Regional conclusion

### 8.1 Weighted car shares (estimates only — built from the section 5 point values)

Set: one configuration per venue — State Farm Stadium 63,400; Mountain America Stadium 53,599; Chase Field 48,330; Talking Stick Resort Amphitheatre 20,106; Desert Diamond Arena 18,300 (basketball); Mortgage Matchup Center 17,071 (basketball); Arizona Financial Theatre 5,000; ten Cactus League parks (capacities as in section 7, Cronkite values preferred). Total capacity 339,263. Phoenix Raceway excluded from the base case because its capacity is disputed.

| Weighting | Result | Notes |
|---|---|---|
| Capacity-weighted, all rows | **0.906** | Using point estimates. |
| Low / high ends of ranges | 0.850 / 0.949 | Unlisted Cactus parks set to 0.90 (low) and 0.98 (high). |
| Capacity-weighted, excluding Mountain America Stadium | 0.935 | ASU's low-confidence 0.75 is the single largest drag. |
| Downtown Phoenix cluster only (Chase, MMC, AFT; 70,401 seats) | **0.869** | ~21% of base-set capacity. |
| Everything outside downtown (268,862 seats) | **0.915** | ~79% of base-set capacity. |
| Sensitivity: add Phoenix Raceway at 67,000 seats ([Wikipedia](https://en.wikipedia.org/wiki/2025_NASCAR_Cup_Series_Championship_Race)) and 0.98 | 0.918 | Capacity figure disputed. |
| "Typical-crowd" weighting (partial) | **0.905** | Chase Field 28,254 (2026 total 2,288,586 ÷ 81 home dates, [Arizona Sports](https://arizonasports.com/?p=3632581); two "home" games were in Mexico City per [Tucson.com](https://tucson.com/sports/d-backs/article_1dfaecfd-89d8-41f9-ba9b-854d92ac1ad9.html)); Sloan 12,969 ([KTAR](https://ktar.com/?p=5910603)); Camelback 11,065 ([Arizona Sports](https://arizonasports.com/?p=3579433)); other Cactus parks the 2025 league average 7,569 (1,695,480 ÷ 224). **No sourced typical crowds were found for State Farm, MMC, Desert Diamond, the amphitheatre or ASU, so those use capacity**; treat this row as capacity-dominated. |

**Do the huge outlying venues obscure downtown?** Partly. The downtown cluster (~0.87) is close to the 0.85 fallback; the region as a whole sits higher (~0.91) because four-fifths of large-venue capacity is at freeway-served suburban sites with no rail. Mountain America Stadium cuts the other way: it is outlying in the sense of being outside downtown Phoenix, but it is the most transit- and walk-accessible large venue in the metro, and its estimate is the least certain.

### 8.2 Clusters, shared roads, shared audiences (separate findings; no distance rule implied)

| Finding type | Cluster | Members | Evidence |
|---|---|---|---|
| Venue cluster | Downtown Phoenix | Chase Field, Mortgage Matchup Center, Arizona Financial Theatre, Convention Center, Hance Park festivals | Same garages and light rail stations; documented same-night double-header Oct 31, 2023 ([KTAR](https://ktar.com/arizona-news/valley-metro-saw-boom-in-light-rail-ridership-with-d-backs-in-world-series/5550811/)) |
| Venue cluster | Westgate, Glendale | State Farm Stadium, Desert Diamond Arena; Camelback Ranch nearby in spring | Shared Sportsman's Park/Westgate lots and Loop 101 ramps ([azfamily](https://www.azfamily.com/2023/02/12/live-what-super-bowl-fans-should-know-about-traffic-getting-into-glendale)) |
| Shared remote parking | North Scottsdale / SRPMIC | WM Phoenix Open, Salt River Fields, WestWorld | Salt River Fields and WestWorld serve as WMPO remote lots ([WMPO](https://wmphoenixopen.com/?p=48814)) |
| Shared road | I-10 West | Talking Stick Resort Amphitheatre, Phoenix Raceway, American Family Fields, Goodyear Ballpark | Geography; no event-overlap study found |
| Shared road | Loop 202 / Rio Salado, Tempe–Mesa | Mountain America Stadium, Tempe Diablo, Sloan Park, Hohokam | Geography; Loop 101/202 study funded by Prop 479 ([KTAR](https://ktar.com/arizona-news/traffic-study)) |
| Shared audience | Spring visitors | All Cactus parks, WMPO (early Feb), Scottsdale nightlife | 60% out-of-state Cactus attendees ([KTAR](https://ktar.com/?p=5910603)); 22% planned to visit elsewhere in Arizona in 2023 ([Cactus League](https://www.cactusleague.com/dugout-post.php?cID=658)) |

---

## 9. Background only — ordinary commuting (not event travel)

| Measure | Value | Source |
|---|---|---|
| Maricopa County commute mode (ACS 2020 5-year, as reported) | Drove alone 73.7%, carpool 10.7%, transit 1.8%, walk 1.5%, worked from home 9.8% | [Stacker](https://stacker.com/stories/8176/counties-most-super-commuters-arizona) |
| Maricopa County solo commuting, 2014 (TRP) | 73% | [T4America](https://t4america.org/maps-tools/local-successes/phoenix-trip-reduction) |
| Light rail weekday ridership, Q1 2026 | 36,400; 11.1 million annual rides in 2025 | [Wikipedia citing APTA](https://en.wikipedia.org/wiki/Valley_Metro_Rail) |
| Bus weekday ridership, Q1 2026 | 98,000 | [Wikipedia citing APTA](https://en.wikipedia.org/wiki/Valley_Metro_Bus) |

These describe work trips and system-wide transit use, not event access. They are consistent with, but do not establish, the event estimates above.

---

## E. End matter

### E1. Recommended existing city type and rationale

**Recommend `sprawl`.**

Rationale: (1) About 79% of large-venue capacity in the base set sits outside downtown Phoenix at freeway-served sites with no rail and, at most, one regular bus route or an organizer shuttle that people drive to. (2) Even the best-served downtown venues show rail reaching only ~8–12% of a sellout crowd by inference (section 6.1), so car-involved access remains roughly 0.82–0.92 there. (3) Large crowds are dispersed across several separate clusters (downtown Phoenix, Westgate, Tempe, north Scottsdale, Avondale, ten spring parks) rather than concentrated in one core. (4) The region's ordinary commute transit share is under 2% (background, section 9).

**Strongest contrary evidence (for `hub`):** Downtown Phoenix has two major venues a block apart, both at light rail stations, with 60,254 downtown parking spaces that were underused on a multi-event night ([Parking Study 2022](https://www.investinphoenix.com/Documents/Downtown-Phoenix-Comprehensive-Parking-Study_2022_FINAL.pdf)), and rail surges of ~40% on World Series nights ([Metro Magazine](https://www.metro-magazine.com/10211164/valley-metro-reveals-ridership-numbers-from-world-series)). Tempe's stadium also sits on rail and streetcar. If the model's spill behavior for `hub` is meant to capture exactly this kind of shared-approach downtown cluster, the downtown pair is a real example — but it is the exception, not the regional pattern.

**`transit` (0.4):** contradicted at every venue examined; no row's plausible range goes below 0.65.

**Venue exceptions worth overriding (using the existing per-venue mechanism, not new constants):** Mountain America Stadium (lower car share, low confidence); State Farm Stadium, Desert Diamond Arena, Talking Stick Resort Amphitheatre, Phoenix Raceway, WMPO, Country Thunder (higher than the 0.85 fallback).

### E2. Car-share values keyed to rows — separated by evidence type

| Category | Rows and values |
|---|---|
| **Measured** | **None found.** No public survey, travel plan or counted split for any Phoenix-area event. |
| **Projected** | **None relevant found.** A traffic study for the rejected Tempe Entertainment District arena was reported in the press but was not accessed (see E4). |
| **Estimated — ridership inference (E-rid)** | PHX-01a Chase Field WS 0.87 (0.82–0.92); PHX-01b Chase regular season 0.87 (0.82–0.92), provisional; PHX-02 Mortgage Matchup Center 0.87 (0.80–0.92); PHX-21 downtown festivals — illustrative only, not a recommended value |
| **Estimated — structural (E-str)** | PHX-04a State Farm 0.97 (0.93–0.99); PHX-04b State Farm mega-events 0.96 (0.92–0.99); PHX-05 Desert Diamond 0.97 (0.93–0.99); PHX-06 Talking Stick Amphitheatre 0.97 (0.93–0.99); PHX-07 Mountain America 0.75 (0.65–0.85); PHX-08 Raceway 0.98 (0.95–0.99); PHX-09–12, 14–18 Cactus parks 0.95 (0.90–0.98); PHX-13 Scottsdale Stadium 0.90 (0.85–0.95); PHX-19 WMPO 0.97 (0.93–0.99); PHX-20 State Fair 0.92 (0.85–0.96); PHX-29 Country Thunder 0.98 (0.95–0.99) |
| **Unknown → fallback** | PHX-03 Arizona Financial Theatre and all section-4 "not verified" rooms → 0.85 (`sprawl`/`hub` fallback) |

### E3. Boundary recommendation and inconsistencies between briefs

**Boundary:** all of Maricopa County including Avondale and tribal communities hosting venues or remote event parking; contiguous Pinal edge communities (Queen Creek's Pinal portion, San Tan Valley, Apache Junction) as audience origins; City of Maricopa and Casa Grande as audience-origin edge cases; Country Thunder (Florence) as a distant destination event row; Tucson outside (section 3).

**Inconsistencies found:**

1. The brief's "Footprint?" lead refers to the former name of Mortgage Matchup Center; there is no separate venue.
2. The brief's starting city list omits **Avondale** (Phoenix Raceway) and the **Salt River Pima-Maricopa Indian Community** (Salt River Fields, a WMPO remote lot).
3. The City of Phoenix's major-events page still calls the arena "PHX Arena" for the 2026 Women's Final Four ([phoenix.gov](https://phoenix.gov/majorevents)).
4. The companion venue answer was not available, so row keys here are provisional.
5. Talking Stick Resort Amphitheatre is in west Phoenix, not at the Talking Stick resort area in Scottsdale/SRPMIC — an easy mix-up given the naming history ([FOX 10](https://www.fox10phoenix.com/news/phoenix-music-venue-ak-chin-pavilion-talking-stick)).

### E4. Data gaps, model limitations, source conflicts, inaccessible sources

**Data gaps**

- No measured event mode split anywhere in the metro; no organizer, team or agency survey found for Cardinals, Suns, Mercury, Diamondbacks, ASU, WMPO or Cactus League attendee access mode (the ASU Cactus studies survey spending, not mode).
- No station-level event-day boardings; only system-wide daily totals on a few headline dates.
- No Route 70 or enhanced-bus counts for State Farm Stadium events; no WMPO shuttle counts.
- No 2026 confirmation of post-event light rail holds or extra trains for regular games.
- No authoritative parking counts for State Farm/Westgate, Phoenix Raceway or the amphitheatre.
- No typical attendance for State Farm, MMC, Desert Diamond, the amphitheatre, ASU football, the State Fair or WMPO daily crowds.
- Section-4 rooms (theatres, ASU arenas, GCU Arena, Phoenix Rising) not verified.

**Model limitations**

- Ridership inference cannot separate park-and-ride rail riders (car-involved) from transit-only riders, so "transit-only" is always an upper bound.
- Baseline choice moves the Chase Field estimate by about 4 points (section 6.1); the higher weekday baseline is my assumption.
- 2023 World Series crowds and fares are not typical regular-season conditions; transferring to a ~28,000 regular crowd is an assumption.
- The 2025 two-line rail reconfiguration may change transfer counting in future comparisons.
- Weighted results in 8.1 inherit every estimate's uncertainty and are not measured values.

**Source conflicts (preserved)**

| Topic | Values | Sources |
|---|---|---|
| Chase Field capacity | 48,330 vs 48,519 | [Meet Stadium](https://meetstadium.com/stadiums/chase-field/); [Stadium Journey](https://www.stadiumjourney.com/stadiums/chase-field-s2) |
| State Farm parking | 14,000 vs 24,000+ (both low-quality) | [The Stadium Reviews](https://thestadiumreviews.com/resources/parking/state-farm-stadium/); [Koobit](https://www.koobit.com/zach-bryan-e123110) |
| Phoenix Raceway capacity | ~67,000 grandstand claim on Wikipedia; no official current figure found | [Wikipedia](https://en.wikipedia.org/wiki/2025_NASCAR_Cup_Series_Championship_Race) |
| 2027 NASCAR championship site | Phoenix "in contention" for rotation vs "confirmed not Phoenix or Miami" | [Frontstretch](https://frontstretch.com/2025/05/06/nascar-moving-championship-weekend-back-homestead-2026); [Oval Insider](https://www.ovalinsider.com/nascar-news/nascar-cup-series-championship-race-huge-announcement-homestead-miami-1049152/) |
| WMPO attendance | 500,000+ / 600,000 / 700,000 weekly; no official count since 2018 | [Experience Scottsdale](https://experiencescottsdale.com/stories/post/an-insiders-guide-to-the-waste-management-phoenix-open); [Visit Phoenix](https://www.visitphoenix.com/things-to-do/outdoors/golf/wmpo/); [azfamily](https://www.azfamily.com/2025/02/05/where-park-wm-phoenix-open); [GOLF.com](https://golf.com/news/wm-phoenix-open-explains-controversial-course-closure-decision/?amp=1) |
| 2024 Final Four rail use | 130,000+ users vs 275,000 weekly riders (same city page) | [phoenix.gov](https://phoenix.gov/majorevents) |
| Cactus League 2025 games | 224 vs 221 | [Arizona Sports](https://arizonasports.com/?p=3579433); [Cactus League](https://cactusleague.com/economic-impact.php) |
| Chase Field funding bill number | HB 2704 vs "HB 2047" (likely typo) | [FOX 10](https://fox10phoenix.com/news/gov-hobbs-sign-chase-field-funding-bill-sept-3); [Arizona Sports](https://arizonasports.com/mlb/arizona-diamondbacks/diamondbacks-didnt-think-chase-field-lease-extension-would-be-so-difficult) |
| Capitol Extension status | Valley Metro calls it a "shift in project sequencing" vs reports of abandonment | [azfamily](https://www.azfamily.com/2026/01/28/phoenix-council-votes-against-capitol-light-rail-extension-shifts-focus-west/); [KJZZ](https://www.kjzz.org/politics/2026-01-29/business-owners-share-concerns-over-new-light-rail-route-at-10-hour-phoenix-council-meeting) |
| Pinal population 2025 | 502,071 vs ~539,000 | [MAG](https://azmag.gov/portals/0/Maps-Data/Population-Housing/Municipality-Population-and-Housing-Unit-Estimates-2025.pdf); [Axios](https://www.axios.com/local/phoenix/2026/08/10/pinal-county-population-boom-transformation) |

**Not accessed / not found (no access controls were bypassed)**

- Arizona Republic/azcentral coverage of the Tempe Entertainment District traffic study (paywalled; not read).
- Full ASU Seidman 2025/2026 Cactus League reports (only summaries found).
- Valley Metro ridership dashboards and board packets with event-day station counts (not located in this pass).
- Glendale and Scottsdale event traffic management plans (not located publicly).

### E5. Confirmed transport or venue changes through 2028

| Change | Status | Date(s) | Suggested re-check | Source |
|---|---|---|---|---|
| South Central Extension/Downtown Hub light rail; two-line A/B system | **Opened** | June 7, 2025 | Done; use post-2025 ridership baselines | [City of Phoenix](https://www.phoenix.gov/newsroom/public-transit-news/south-central-downtown-hub-light-rail-extension-opens-june-7--.html) |
| Capitol Extension halted; West Phoenix (Indian School Rd) corridor prioritized | **Council decision** (7–2), Jan 27, 2026; design could begin by 2029, construction 2031 | No new west-side rail before 2028 | Jan 2027 | [KJZZ](https://www.kjzz.org/politics/2026-01-29/business-owners-share-concerns-over-new-light-rail-route-at-10-hour-phoenix-council-meeting); [Bisnow](https://www.bisnow.com/phoenix/news/transportation/phoenix-alters-light-rail-plan-halting-extension-to-capitol-132978) |
| Chase Field renovation (first construction phase) | **Funded** ($500M public cap, $250M team) ([FOX 10](https://fox10phoenix.com/news/gov-hobbs-sign-chase-field-funding-bill-sept-3)); first phase **targeted** for the 2026–27 offseason on a 5-year timeline ([JLL, Mar 2026](https://www.mcid.maricopa.gov/DocumentCenter/View/118169)); lease expires 2027 and talks ongoing ([Arizona Sports](https://arizonasports.com/mlb/arizona-diamondbacks/diamondbacks-didnt-think-chase-field-lease-extension-would-be-so-difficult)); capacity reduction not a priority ([Arizona Sports](https://arizonasports.com/?p=3594788)) | 2026–2031 | Dec 2026 and before 2027 home opener | as cited |
| 2027 NBA All-Star Game at Mortgage Matchup Center | **Scheduled** | Feb 2027 | Jan 2027 (operations, closures) | [National Mortgage News](https://www.nationalmortgagenews.com/news/uwm-inks-deal-to-name-phoenix-suns-mercury-arena) |
| 2027 Cactus League | **Scheduled**, at labor risk | Feb 19–late Mar 2027 | Dec 2026 and Jan 2027 | [MLB.com](https://www.mlb.com/news/mlb-spring-training-2026-schedule-released); [FOX 11](https://fox11online.com/sports/brewers-and-mlb/milwaukee-2027-spring-training-cactus-league-exhibition-game-schedule) |
| NASCAR championship rotation | **Confirmed** move away from Phoenix for 2026; 2027 host unresolved (conflict) | 2026–2027 | When 2027 schedule is released | [Frontstretch](https://frontstretch.com/2025/05/06/nascar-moving-championship-weekend-back-homestead-2026) |
| Desert Diamond Arena $42M renovation | **Completed** (reveal planned spring 2025) | 2025 | Done | [Business Wire](https://www.businesswire.com/news/home/20241213997294/en) |
| Prop 479 regional transportation tax continuation; Loop 101/202 interchange study | **Approved** Nov 2024; study **funded**, ~2 years | Study to ~2027 | 2027 | [City of Phoenix](https://www.phoenix.gov/newsroom/public-transit-news/south-central-downtown-hub-light-rail-extension-opens-june-7--.html); [KTAR](https://ktar.com/arizona-news/traffic-study) |
| Tempe Streetcar Rio East–Dobson extension into Mesa | **Proposal/planning**; no date found | — | 2027 | [Wikipedia](https://en.wikipedia.org/wiki/Capitol/I-10_West_Extension) |
| Arizona State Fair 2026 | **In progress** | Oct 1–Nov 1, 2026 | Nov 2026 | [Arizona State Fair](https://azstatefair.com/?p=27509) |
| WM Phoenix Open 2027 parking plan | Not yet published | Expected early Feb 2027 | Jan 2027 | [WMPO](https://wmphoenixopen.com/?p=48814) |
| Country Thunder 2027 | Listed Apr 8–11, 2027 by a third-party site (unverified) | Apr 2027 | Jan 2027 | [Frontstage](https://www.frontstagefestivals.com/festival/country-thunder-music-festival-arizona-2026) |
