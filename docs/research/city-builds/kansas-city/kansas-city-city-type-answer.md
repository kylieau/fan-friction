# Kansas City: event-travel evidence and city-type assessment

**Research date:** Monday, October 12, 2026
**Scope:** Kansas City, MO–KS metropolitan area (Lawrence and Columbia treated separately)
**Purpose:** Assess Fan/Friction's existing city settings (`sprawl`, `hub`, `transit`) against public evidence of how people actually reach event venues. This is not navigation, live traffic or trip planning.

**Current settings being assessed (from the brief):** fallback car share 0.85 for `sprawl` and `hub`, 0.40 for `transit`; venue-specific shares override.

---

## 0. Headline answer

- **Recommended existing city type: `sprawl`.** Every recurring large venue with usable evidence has an estimated person car share at or above the 0.85 fallback, and most sit around 0.95. The one large, measured counter-example (the 2026 World Cup at Arrowhead) was a one-off operation with restricted parking and still came out car-involved for roughly 80% of attendees once park-and-ride is counted as car-involved.
- **The 0.85 fallback understates car use** at the big outlying venues (Arrowhead, Kauffman, Village West, Bonner Springs, Independence). Venue-specific overrides, keyed to the rows below, matter more than the city type itself.
- **A downtown spine is the real exception** (T-Mobile Center, CPKC Stadium, Union Station/Liberty Memorial, the planned Crown Center ballpark), served by a free streetcar that now runs from UMKC to the riverfront. Its estimated car share is roughly 0.80, still near the fallback, not near the `transit` value of 0.40.
- **No public, observed, survey-based mode split exists for any recurring Kansas City venue** that I could find. Measured numbers come from World Cup operations; the best projection comes from the Royals' Crown Center transportation screening. Everything else is a labelled estimate.

---

## 1. Evidence classes used

| Class | What it means here | Examples |
|---|---|---|
| **Measured** | Observed counts from an operator or organizer, for a specific event | ConnectKC26 Stadium Direct passengers per World Cup match; streetcar monthly trips |
| **Derived** | Measured counts combined with stated assumptions to infer a share | World Cup car-involved share; Fan Festival streetcar share |
| **Projected** | Consultant/planning estimates for a future or hypothetical operation | Royals Crown Center ballpark mode assumptions |
| **Estimated** | My transparent estimate from local service facts and comparisons; no count exists | Chiefs regular season, Kauffman, Children's Mercy Park, etc. |
| **Background only** | Ordinary commuting data, not event travel | American Community Survey journey-to-work |

**Definition of "car share" in this answer:** share of *people* whose trip to the event involved a private car, carpool, rideshare or taxi, **including** people who drove to remote parking and then rode a shuttle or the streetcar (the brief's rule). Motorcoach charters and dedicated event shuttles are counted as shuttle, not car, unless the rider drove to the shuttle. Where useful, I also note the share of people arriving **by car at the venue's own approaches**, which is lower when park-and-ride is heavy.

---

## 2. Background only: ordinary commuting (not event travel)

| Measure | Value | Source | Note |
|---|---|---|---|
| Kansas City MO–KS metro, 2024 ACS 1-year: drive alone / carpool / transit / walk / work from home | 73.4% / 8.1% / 0.6% / 1.4% / 14.7% | [New Geography summary of 2024 ACS](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access) | Secondary compilation of Census data; workers, not event attendees |
| MARC planning region, 2017–2021 ACS: drive alone / public transit | 79.9% / 0.4% | [MARC Transportation Fact Sheet](https://www.marc.org/sites/default/files/2023-05/Transportation-Fact-Sheet.pdf) | Read from an extracted fact-sheet text; layout ambiguity possible |

These numbers describe weekday work trips and are **not** used as event mode shares anywhere below. They only show that the region has very little everyday transit habit to draw on.

---

## 3. Boundary recommendation

**Recommend:** use the **Kansas City, MO–KS Metropolitan Statistical Area** as the city boundary for the city-type decision, crossing the state line, with **Lawrence (Douglas County) and Columbia handled as separate cities**.

| Fact | Value | Source |
|---|---|---|
| Kansas City MO–KS MSA population, 2025 estimate | 2,270,592 (938,193 on the Kansas side) | [Wikipedia: Kansas statistical areas (Census estimates)](https://en.wikipedia.org/wiki/Kansas_statistical_areas) |
| Same MSA, 2024 estimate | 2,253,579 | [FRED / Census, KNCPOP](https://fred.stlouisfed.org/series/KNCPOP) |
| MSA county count | 14 counties | [Platte County EDC](https://www.plattecountyedc.com/demographics/) |
| Kansas counties in the KC MSA (federal statistical mapping) | Johnson, Leavenworth, Linn, Miami, Wyandotte | [BLS OEWS county list](https://www.bls.gov/oes/current/ks_counties.htm) |
| Douglas County (Lawrence) | Its own Lawrence, KS MSA | [BLS OEWS county list](https://www.bls.gov/oes/current/ks_counties.htm) |
| Combined statistical area, 2025 estimate | 2,609,823 | [Wikipedia: Kansas statistical areas](https://en.wikipedia.org/wiki/Kansas_statistical_areas) |

**Why the MSA, across the state line:** three of the biggest event clusters sit on the Kansas side or straddle it (Village West in Kansas City, Kansas; Azura in Bonner Springs; the planned Chiefs stadium in Wyandotte County), and Overland Park's Oak Park Mall was a World Cup Stadium Direct park-and-ride site ([KSHB](https://www.kshb.com/sports/world-cup/kc2026-shares-connectkc26-transportation-fares)). A Missouri-only boundary would cut the event audience in half.

**Edge municipalities (identify separately):**

| Place | Status | Reason |
|---|---|---|
| Bonner Springs, KS | Inside MSA; include | Hosts Azura Amphitheater (18,000) |
| Independence, MO | Inside MSA; include | Hosts Cable Dahmer Arena; I-70 corridor shared with Truman Sports Complex |
| North Kansas City, MO | Inside MSA; include | World Cup Stadium Direct park-and-ride ([KCUR](https://www.kcur.org/sports/2026-04-16/kansas-city-world-cup-buses-transit-shuttle-game-transportation)); streetcar northward extension only at study stage ([KCUR tag page](https://www.kcur.org/tags/kc-streetcar-authority)) |
| Lawrence, KS | Separate city | Separate MSA; was a World Cup Region Direct hub ([KCUR](https://www.kcur.org/sports/2026-04-16/kansas-city-world-cup-buses-transit-shuttle-game-transportation)), showing shared audiences, but its university venues serve a distinct crowd |
| Columbia, MO | Separate city | Outside the KC statistical areas; not researched here |

This is a research boundary, not an inclusion rule. Audience origin data by ZIP or county (e.g., ticket-buyer billing addresses, which the Royals' consultant used for highway distribution) was not published in usable form ([Royals transportation screening](https://bikewalkkc.org/wp-content/uploads/2026/07/Royals-Transporation-Assessment_06-29-26_v1.pdf)).

---

## 4. Venue coverage and gaps

The companion venue answer was **not provided** with this brief, so venues were enumerated independently. Row IDs below (KC-xx) are this answer's own keys; map them to the companion rows when available.

**5,000+ configurations covered:** Arrowhead (Chiefs and World Cup configurations), Kauffman Stadium, Kansas Speedway, T-Mobile Center, Children's Mercy Park, Azura Amphitheater, CPKC Stadium, Starlight Theatre, Cable Dahmer Arena.

**Coverage gaps (not verified in this pass; no numbers asserted):** Legends Field (Kansas City, KS); Municipal Auditorium; Kauffman Center for the Performing Arts halls; Midland and Uptown theatres; Memorial Hall (KCK); other 1,000–5,000 rooms; University of Missouri–Kansas City venues; Lawrence (KU) and Columbia (Mizzou) venues; recurring festivals such as Boulevardia, Plaza Art Fair, KC Irish Fest, KC Pride, the Renaissance Festival, the American Royal and marathon/half-marathon courses. Local ticketing platform and feed coverage were **not verified** for any venue except a mention that CPKC parking passes run through the KC Current app or SeatGeek ([FOX4](https://digital-release.fox4kc.com/?p=3331511)).

---

## 5. Venue and event travel table

### 5a. Summary table

| Row | Venue / event (verified name) | Municipality | Setup and date represented | Capacity / crowd | Car share (rec.) | Range | Evidence type | Confidence | Split sums to 100%? |
|---|---|---|---|---|---|---|---|---|---|
| KC-01 | Arrowhead Stadium, Chiefs regular season | Kansas City, MO | NFL game, 2025–26 seasons | 76,416 ([Wikipedia](https://en.wikipedia.org/wiki/Arrowhead_Stadium)) | **0.95** | 0.92–0.98 | Estimated | Medium | Yes, by construction (estimate) |
| KC-02 | Arrowhead as "Kansas City Stadium", FIFA World Cup 2026 | Kansas City, MO | 6 matches, Jun 16–Jul 11, 2026 | 69,045 configuration; 413,169 total ([KCTV](https://www.kctv5.com/2026/07/16/kc2026-says-fan-festival-saw-over-400000-visitors/)) | **0.80** | 0.72–0.89 | Measured shuttle + derived | Low–medium | No: 64.9% unclassified (see 5b) |
| KC-03 | Kauffman Stadium, Royals | Kansas City, MO | MLB game, current seasons | 37,903 ([MeetStadium](https://meetstadium.com/stadiums/kauffman-stadium/)) | **0.95** | 0.92–0.98 | Estimated | Medium | Yes (estimate) |
| KC-04 | T-Mobile Center | Kansas City, MO | Arena concert / basketball | 19,252 concert; 18,972 basketball ([Wikipedia](https://en.wikipedia.org/wiki/T-Mobile_Center)) | **0.82** | 0.72–0.90 | Estimated from local projection | Low | Yes (estimate) |
| KC-05 | Children's Mercy Park, Sporting KC | Kansas City, KS | MLS match | 18,467 ([MeetStadium](https://meetstadium.com/stadiums/childrens-mercy-park/)) | **0.96** | 0.92–0.98 | Estimated | Medium–low | Yes (estimate) |
| KC-06 | Azura Amphitheater | Bonner Springs, KS | Summer amphitheatre concert | 18,000 ([Unified Government tech pack](https://purchasing.wycokck.org/eProcurement/bids/R43141/2026%20Tech%20Pack%20-%20Azura%20Amphitheater.pdf)) | **0.97** | 0.94–0.99 | Estimated | Medium–low | Yes (estimate) |
| KC-07 | CPKC Stadium, KC Current | Kansas City, MO | NWSL match, after streetcar opened May 18, 2026 | 11,500 ([KC Mom Collective](https://kansascitymomcollective.com/moms-guide-to-kc-current-games-at-cpkc-stadium)) | **0.80** | 0.65–0.90 | Estimated | Low | Yes (estimate) |
| KC-08 | Kansas Speedway | Kansas City, KS | NASCAR weekends (Apr and Sep 2026) | 48,000 ([KCUR/HPPR, 2020](https://www.hppr.org/post/kansas-speedway-readies-nascar-without-fans-track)); conflicting 72,000 listing ([American Arenas](https://americanarenas.com/venue/kansas-speedway/)) | **0.97** | 0.94–0.99 | Estimated | Medium–low | Yes (estimate) |
| KC-09 | Starlight Theatre | Kansas City, MO | Summer Broadway/concert | 7,739 ([Starlight tech specs](https://kcstarlight.com/?p=217)); 7,958 elsewhere ([Clio](https://theclio.com/entry/146133)) | **0.95** | 0.90–0.98 | Estimated | Low | Yes (estimate) |
| KC-10 | Cable Dahmer Arena | Independence, MO | ECHL/MASL game or concert | 5,800 fixed; up to 7,000 events ([Wikipedia](https://en.wikipedia.org/wiki/Cable_Dahmer_Arena)) | **0.97** | 0.94–0.99 | Estimated | Low | Yes (estimate) |
| KC-11 | FIFA Fan Festival, National WWI Museum and Memorial | Kansas City, MO | Open-site festival, Jun 11–Jul 2026 | 25,000 site capacity ([KCTV](https://www.kctv5.com/2026/05/20/royals-kc2026-partner-shuttle-buses-between-kauffman-stadium-fifa-fan-festival/)); 400,000+ visits over the run ([KCTV](https://www.kctv5.com/2026/07/16/kc2026-says-fan-festival-saw-over-400000-visitors/)) | **0.55** | 0.35–0.75 | Measured ridership + derived | Low | No: majority unclassified |
| KC-12 | NFL Draft 2023, Union Station / WWI Memorial | Kansas City, MO | 3-day open site, Apr 2023 | 312,000 over 3 days ([NFL](https://www.nfl.com/news/more-than-54-million-fans-watch-2023-nfl-draft)); peak 125,000 Thursday ([SBJ](https://sbj.net/stories/nfl-draft-in-kc-records-300k-in-attendance,84449)) | **Unknown** | — | None found | — | No split exists; fallback applies |
| KC-13 | Royals ballpark at Crown Center (planned) | Kansas City, MO | Projected game, target opening 2030 | 34,000 seated planning case ([screening](https://bikewalkkc.org/wp-content/uploads/2026/07/Royals-Transporation-Assessment_06-29-26_v1.pdf)) | **0.82** weekday / **0.79** weekend | — | Projected | Medium (as a projection) | Yes |

Lawrence and Columbia rows are deliberately excluded (separate cities).

### 5b. Row detail: modes, parking, operations, method

#### KC-01 Arrowhead Stadium, Chiefs regular season (estimated)

- **Split (persons):** car/carpool/rideshare/charter-by-car ~95%; public bus (Route 47) and private charter coaches ≤3%; walk/bike/other ≤2%. Sums to 100% by construction. No dedicated public event shuttle exists.
- **Why:** Federal charter rules have barred KCATA from running game-day shuttles since 2008, leaving one daily bus line near the stadium ([Kansas City Star opinion via AOL](https://www.aol.com/kansas-city-fans-affordable-transportation-101200095.html); [The Pitch](https://www.thepitchkc.com/?p=67432)). Route 47 historically ran hourly in the evening with last westbound trips around 11:15 p.m. ([RideKC, 2015](https://ridekc.org/news/metro_route_47_broadway_serves_the_k)); current schedule not re-verified after 2026 service changes. Parking was $50 per regular vehicle ([AOL](https://www.aol.com/kansas-city-fans-affordable-transportation-101200095.html)) and lots are built around tailgating.
- **Parking supply:** conflicting figures: "over 16,000" shared spaces ([Prked guide](https://prked.com/post/post-malone-kauffman-stadium-parking-2026), commercial) versus 26,000 ([Royals Review, summarizing city filings](https://www.royalsreview.com/kansas-city-royals-news/101472/new-documents-reveal-details-on-downtown-stadium-development)). Unresolved; no Sports Complex Authority inventory found.
- **Operations:** I-70 serves gates 1–4 and I-435 serves gates 5–7; surrounding routes may be adjusted ([Chiefs](https://chiefs.com/news/chiefs-parking-procedures-13392498)).
- **Shared approaches:** Kauffman Stadium (same lots), Cable Dahmer Arena (four exits east on I-70; [KC Comets](https://www.kccomets.com/venue)).
- **Fallback note:** the 0.85 fallback would understate this venue; use the override.

#### KC-02 Arrowhead, FIFA World Cup 2026 (measured shuttle, derived car share)

- **Measured:** ConnectKC26 Stadium Direct carried 145,000 passes to the stadium over six matches ([Axios](https://www.axios.com/local/kansas-city/2026/07/29/kc-world-cup-transit-ridership-records)); total attendance was 413,169 ([KCTV](https://www.kctv5.com/2026/07/16/kc2026-says-fan-festival-saw-over-400000-visitors/)).
- **Unit check (passes vs people):** a pass is one person's round trip per match. Axios reports about 19,000 passes for the first match ([Axios](https://www.axios.com/local/kansas-city/2026/07/29/kc-world-cup-transit-ridership-records)); KCTV reports 18,900 passengers for the same match ([KCTV](https://www.kctv5.com/2026/06/22/how-kansas-citys-world-cup-transit-compared-across-both-match-days/)). The fare was $15 per round trip ([KCUR](https://www.kcur.org/sports/2026-04-16/kansas-city-world-cup-buses-transit-shuttle-game-transportation)). So passes are not double-counted boardings.
- **Shuttle share:** 145,000 ÷ 413,169 = **35.1%** of attendees. By match: 18,900 of about 69,000 at match 1 ≈ 27% ([FOX4 attendance](https://fox4kc.com/sports/fans-report-travel-nightmares-to-and-from-world-cup-match-at-arrowhead-stadium/)); 21,500 of 68,598 at match 2 ≈ 31% ([KCTV](https://www.kctv5.com/2026/06/22/how-kansas-citys-world-cup-transit-compared-across-both-match-days/)); remaining four matches ≈ 104,600 ÷ 275,571 ≈ 38% (derived by subtraction).
- **Unclassified remainder:** 64.9% arrived some other way: on-site parking (limited, priced from $125–150 for group matches to $225 for the quarterfinal per FIFA's site as reported by [KCUR](https://www.kcur.org/sports/2026-04-16/kansas-city-world-cup-buses-transit-shuttle-game-transportation)), rideshare to Lot O ([KC2026 guide](https://kansascityfwc26.com/transportation/)), Route 47, or walking from off-site parking. No split of this remainder was published; Uber and Lyft declined to give totals ([Axios](https://www.axios.com/local/kansas-city/2026/07/29/kc-world-cup-transit-ridership-records)).
- **Park-and-ride treatment:** Stadium Direct boarded at four park-and-ride lots (Highway 40, Graceway, North Kansas City, Oak Park Mall) plus Fan Festival/Bus Mall and the Plaza, the last two without designated parking ([KC2026 guide](https://kansascityfwc26.com/getting-around-kc/)). The rider split by boarding site was not published.
- **Derived car-involved share:** (64.9% × share of the remainder that used a car) + (35.1% × share of shuttle riders who drove to a park-and-ride).
  - Low: 64.9% × 0.95 + 35.1% × 0.30 = 72%
  - Central: 64.9% × 0.97 + 35.1% × 0.50 = 80.5%
  - High: 64.9% × 0.99 + 35.1% × 0.70 = 89%
  - The 30–70% park-and-ride assumption reflects four of six boarding locations having designated parking; it is an assumption, not a count.
- **Car arriving at stadium approaches:** roughly 62–64% of people (the remainder minus non-car), substantially below Chiefs games.
- **Operations:** Stadium Direct ran from 3 hours before to 2 hours after each match ([FOX4](https://digital-release.fox4kc.com/?p=4296261)); only Gates 2 and 6 were used for entry ([KCTV](https://www.kctv5.com/2026/06/22/how-kansas-citys-world-cup-transit-compared-across-both-match-days/)). At the first match, many fans abandoned shuttles and rideshares and walked miles to the stadium ([KCUR](https://www.kcur.org/housing-development-section/2026-06-19/traffic-issues-kansas-city-world-cup-stadium-fifa)). Royals games shared the complex with lots E and D closed ([KCTV](https://www.kctv5.com/2026/06/18/parking-changes-royals-fans-truman-sports-complex/)).
- **Use:** only for a logged World Cup match; not representative of Chiefs games.

#### KC-03 Kauffman Stadium, Royals (estimated)

- **Split:** car ~95%; Route 47 and charters ≤3%; walk/other ≤2%. Same regulatory and service context as KC-01. During the World Cup only, a Region Direct shuttle linked Fan Festival and Independence Center to Lot L every 20 minutes, from two hours before first pitch to one hour after the final out, for 13 home games ([KCTV](https://www.kctv5.com/2026/05/20/royals-kc2026-partner-shuttle-buses-between-kauffman-stadium-fifa-fan-festival/)); ridership was not published.
- **Lease and change:** the Royals' lease ends after the 2030 season ([MLB.com](https://www.mlb.com/royals/news/kansas-city-mayor-2026-stadium-deal-royals)); see KC-13.

#### KC-04 T-Mobile Center (estimated from local projection)

- **Basis:** no event split published. The closest local evidence is the Royals' Crown Center screening for a site about one mile south, which assumes 82% car-involved on weekdays (67% driving + 15% rideshare), 8% streetcar/bus and 10% bike/walk ([screening](https://bikewalkkc.org/wp-content/uploads/2026/07/Royals-Transporation-Assessment_06-29-26_v1.pdf)). T-Mobile Center sits even closer to the streetcar (Power & Light stop) and downtown hotels ([Wikipedia](https://en.wikipedia.org/wiki/T-Mobile_Center)), so I use the same central value with a wider low side.
- **Split (estimate):** car 82%; streetcar/bus 8%; walk/bike 10%. Sums to 100%. No dedicated event shuttle.
- **Parking:** "more than 20,000" spaces within 10 blocks per a ticket-reseller page ([Koobit](https://www.koobit.com/eric-clapton-e173179)), low-quality source; unverified.
- **Variation:** Big 12 tournament crowds with many out-of-town visitors staying downtown plausibly fall toward the low end; suburban-audience concerts toward the high end. Not measured.

#### KC-05 Children's Mercy Park (estimated)

- **Split:** car ~96%; Unified Government bus (routes 101/116 per a reseller page, [Koobit](https://www.koobit.com/sporting-kc-vs-st-louis-e121402), unverified) ≤2%; walk/other ≤2%.
- **Context:** large surface lots in Village West and no direct regional transit ([MeetStadium](https://meetstadium.com/stadiums/childrens-mercy-park/)).
- **Shared approaches:** Kansas Speedway, Legends Field (gap), the planned Chiefs stadium district at 126th and State Avenue ([KCTV](https://www.kctv5.com/2026/02/06/wyandotte-county-approves-star-bonds-chiefs-stadium/)), and Azura via State Avenue/K-7.

#### KC-06 Azura Amphitheater (estimated)

- **Split:** car ~97%; other ~3%. Exurban site; no evidence of event transit.
- **Operations:** for large shows police have closed North 130th Street from K-7 and routed general admission via State Avenue, with rideshare entering the VIP lot from State Avenue ([FOX4](https://digital-release.fox4kc.com/?p=2860951)).

#### KC-07 CPKC Stadium (estimated)

- **Context:** on-site parking is limited (about 2,000 spaces per [KC Mom Collective](https://kansascitymomcollective.com/moms-guide-to-kc-current-games-at-cpkc-stadium), unofficial); the Riverfront streetcar stop opened May 18, 2026 and the team ended its shuttle ([CPKC Stadium](https://cpkcstadium.com/news/kansas-city-current-announces-matchday-parking-and-transportation-updates-for-cpkc-stadium); [KCTV](https://www.kctv5.com/2026/05/19/kc-current-shuttle-service-end-with-streetcar-extension-opening/)). Streetcar service is boosted on match days; post-match boarding uses marked lanes, about 150 passengers per departing car ([KCTV](https://www.kctv5.com/2026/05/23/kc-streetcar-run-regular-memorial-day-weekend-hours-extra-service-planned-kc-current-match-day/)).
- **Bound, not a mode share:** if all ~2,000 on-site spaces fill at 2.5 persons per vehicle (the Crown Center weeknight occupancy assumption, [screening](https://bikewalkkc.org/wp-content/uploads/2026/07/Royals-Transporation-Assessment_06-29-26_v1.pdf)), at most about 5,000 people (≈43% of 11,500) park on site. The rest use rideshare, downtown parking plus streetcar or walk, bike or transit.
- **Why the car-involved share is still high:** the team and streetcar authority explicitly market downtown parking plus streetcar as park-and-ride ([FOX4](https://digital-release.fox4kc.com/?p=3331511)). Under the brief's rule those are car-involved trips.
- **Split (estimate):** car-involved 80% (on-site parking ≤43%, rideshare and downtown park-and-ride the rest); streetcar/bus from non-car origins 10%; walk/bike 10%. Sums to 100%. Streetcar ridership by match was not published.
- **Car arriving at riverfront approaches:** materially lower than 0.80, likely below half, because of the parking cap.

#### KC-08 Kansas Speedway (estimated)

- **Split:** car/RV ~97%; other ~3%. NASCAR weekends were April 18–19 and September 25–27, 2026 ([Visit KC](https://www.visitkc.com/de/listings/kansas-speedway/)). Capacity conflict preserved: 48,000 (2020 public-radio report) vs 72,000 (reseller listing).
- **Multi-day caution:** a race weekend total is not one simultaneous crowd.

#### KC-09 Starlight Theatre (estimated)

- **Split:** car ~95%; other ~5%. Swope Park site; on-site lawn/paved parking with shuttles from parking areas for accessibility ([StubHub venue page](https://stubhub.com/_V-3326)). Capacity conflict preserved (7,739 official tech specs vs 7,958 historical).

#### KC-10 Cable Dahmer Arena (estimated)

- **Split:** car ~97%; other ~3%. About 2,000–2,200 on-site spaces off I-70 ([KC Comets](https://www.kccomets.com/venue)).

#### KC-11 FIFA Fan Festival (measured ridership, derived share)

- **Attendance:** 201,262 visits through the group stage ([Spectrum News / KC2026](https://spectrumlocalnews.com/mo/kansas-city/news/2026/07/01/kansas-city-and-kc2026-share-updates-as-world-cup-and-fifa-fan-fest-show-successful-numbers-in-kc-metro)); 400,000+ for the whole run ([KCTV](https://www.kctv5.com/2026/07/16/kc2026-says-fan-festival-saw-over-400000-visitors/)). These are visits, not unique people. Early attendance was 52% local, 33% domestic visitors and 15% international ([KSHB](https://www.kshb.com/sports/world-cup/kc2026-178-countries-represented-during-first-stretch-of-fifa-fan-festival)), so this crowd is unusually hotel-based.
- **Streetcar inference (unlinked trips, not people):**
  1. June 2026 streetcar trips: 698,705 ([Axios](https://www.axios.com/local/kansas-city/2026/07/29/kc-world-cup-transit-ridership-records)).
  2. About a quarter of June trips touched Union Station and Crown Center, the stops nearest the festival (same source): ≈174,676.
  3. Baseline: the pre-tournament 2026 daily average was 8,829 ([KBIA](https://www.kbia.org/missouri-news/2026-03-17/kansas-city-streetcars-riverfront-extension-aims-to-open-before-the-world-cup-heres-what-we-know)); November 2025 averaged 11,397 ([Mass Transit](https://www.masstransitmag.com/rail/news/55339017/mo-number-of-riders-doubles-in-first-month-of-kc-streetcar-extension-whats-next)). A 30-day June baseline is therefore about 264,870–341,910 trips. (June 2025 is not a valid baseline because the Main Street extension opened in October 2025.)
  4. Baseline use of those two stops is unknown; Union Station alone was above 9% of trips in November 2025 (Mass Transit). Assume 12–20% of baseline: 31,784–68,382 trips.
  5. Festival-attributable trips ≈ 174,676 − (31,784 to 68,382) = 106,294–142,892.
  6. If every streetcar visitor rode both ways: 53,147–71,446 visits (26–36% of 201,262). If every streetcar visitor rode one way: 106,294–142,892 visits (53–71%).
- **Other modes:** Streetcar Link buses added 100,000+ trips along Main Street ([Axios](https://www.axios.com/local/kansas-city/2026/07/29/kc-world-cup-transit-ridership-records)), not split by destination; Region Direct ran from 15 sites, several with park-and-ride ([KSHB](https://www.kshb.com/sports/world-cup/how-to-get-around-kansas-city-during-fifa-world-cup-using-public-transit-options)).
- **Recommended:** car-involved 0.55 (0.35–0.75). Many streetcar riders parked downtown first (car-involved under the brief's rule) and many walked from hotels. The majority of the split remains unclassified.

#### KC-12 NFL Draft 2023 (unknown)

- No published mode split, streetcar count or parking count was found. Pre-event guidance steered fans to park along the streetcar and Main MAX corridors and closed the Union Station streetcar stop ([Missouri Independent](https://missouriindependent.com/2023/04/11/what-you-need-to-know-about-the-2023-nfl-draft-in-kansas-city/)). **Unknown; the city fallback (0.85 under `sprawl`) would provisionally apply.** The 312,000 figure is a three-day total and must not be treated as one crowd.

#### KC-13 Royals ballpark at Crown Center (projected; not current)

- **Projected split (persons, seated capacity 34,000):** driving 67% weekday / 64% weekend; rideshare 15%; streetcar/bus 8%; bike/walk 10%; charter bus 0% weekday / 3% weekend. Both columns sum to 100% ([screening](https://bikewalkkc.org/wp-content/uploads/2026/07/Royals-Transporation-Assessment_06-29-26_v1.pdf)). Car-involved = 82% weekday, 79% weekend.
- **Vehicles vs people:** 9,000 weekday / 7,700 weekend parking demand at 85% capacity; 2.5 (weeknight) and 2.8 (weekend) persons per vehicle; 18,257 spaces inventoried; no new parking proposed ([screening](https://bikewalkkc.org/wp-content/uploads/2026/07/Royals-Transporation-Assessment_06-29-26_v1.pdf); [KSHB](https://www.kshb.com/news/local-news/stadium-plan/no-new-parking-in-initial-filings-royals-sent-to-city-for-future-downtown-stadium)).
- **Consistency check:** the 2024 Crossroads proposal assumed 70% drive, 10% streetcar/bus, 10% rideshare and 10% walk/bike/scooter ([AOL / KC Star](https://www.aol.com/news/royals-manage-parking-38-000-161300679.html); [Flatland](https://flatlandkc.org/news-issues/kansas-city-royals-ballpark-plan-sparks-parking-debate/)), i.e., 80% car-involved. Two consultant cycles agree on roughly 80% for a downtown ballpark.
- **Shared approaches:** the screening calls for an operations playbook for overlapping events with the Kauffman Center, T-Mobile Center, First Fridays and conventions, and flags hospital access at Children's Mercy ([screening](https://bikewalkkc.org/wp-content/uploads/2026/07/Royals-Transporation-Assessment_06-29-26_v1.pdf)).
- **Source caveat:** accessed via a copy hosted by BikeWalkKC, an advocacy group, not the city's record system; treat as the filed document pending confirmation.

---

## 6. Regional conclusion

### 6a. Recommended city type: `sprawl`

The region's large recurring crowds are spread across three widely separated car-oriented clusters, served by almost no event transit, and the regional bus system is contracting. That is the `sprawl` pattern. `hub` would be defensible only if the downtown spine dominated the event calendar, and by capacity it does not.

### 6b. Capacity-weighted car share (recurring fixed venues)

One configuration per venue (the largest regular configuration), no mutually exclusive configurations added, and no multi-day totals. Shares are the recommended values above.

| Row | Venue / configuration | Weight (capacity) | Car share | Weight × share |
|---|---|---|---|---|
| KC-01 | Arrowhead, NFL | 76,416 | 0.95 | 72,595 |
| KC-03 | Kauffman, MLB | 37,903 | 0.95 | 36,008 |
| KC-04 | T-Mobile Center, concert | 19,252 | 0.82 | 15,787 |
| KC-05 | Children's Mercy Park, MLS | 18,467 | 0.96 | 17,728 |
| KC-06 | Azura, concert | 18,000 | 0.97 | 17,460 |
| KC-07 | CPKC Stadium, NWSL | 11,500 | 0.80 | 9,200 |
| KC-09 | Starlight | 7,739 | 0.95 | 7,352 |
| KC-10 | Cable Dahmer, fixed seats | 5,800 | 0.97 | 5,626 |
| | **Total (excluding Speedway)** | **195,077** | **0.932** | 181,756 |
| KC-08 | Kansas Speedway (added) | 48,000 | 0.97 | 46,560 |
| | **Total (including Speedway)** | **243,077** | **0.939** | 228,316 |

- **Sensitivity (excluding Speedway):** all venues at the low end of their ranges gives 0.886; all at the high end gives 0.969. The fallback of 0.85 sits below the entire range.
- **Downtown only (KC-04 + KC-07):** (15,787 + 9,200) ÷ (19,252 + 11,500) = **0.81**.
- **Excluded:** KC-02 (one-off World Cup configuration, mutually exclusive with KC-01), KC-11 and KC-12 (open-site, multi-day), KC-13 (future).

### 6c. Typical-attendance weighting

Not computed. I found no sourced, current typical-attendance figures per venue that would support it. Capacity weighting overstates the influence of venues that rarely fill; because the largest venues (Arrowhead) are also the highest car share, attendance weighting would most likely move the result only slightly. This is a data gap, not a finding.

### 6d. Do huge outlying venues obscure the downtown pattern?

Yes. The Truman Sports Complex alone accounts for 114,319 of 195,077 weighted seats (59%), pulling the regional figure to 0.93 while the downtown spine is about 0.81. The downtown spine is a real, separate pattern that venue overrides should capture; it does not change the regional city type.

### 6e. Strongest contrary evidence

1. **World Cup 2026:** 35% of attendees used a dedicated stadium shuttle, and the streetcar's five busiest days ever all fell during the tournament ([Axios](https://www.axios.com/local/kansas-city/2026/07/29/kc-world-cup-transit-ridership-records)). This shows Kansas City crowds will use transit when parking is restricted and shuttles are provided. But it required 200–300 extra buses ([Yahoo/KSHB](https://www.yahoo.com/news/transit-leaders-discuss-world-cup-033728017.html)), ended with the tournament, and was still about 80% car-involved.
2. **The downtown shift is under way:** the streetcar now spans UMKC to the riverfront and the Royals have chosen Crown Center. Even so, the Royals' own consultant projects about 80% car-involved there.
3. **Fan Festival:** plausibly 25–70% of visits involved the streetcar, but its audience was unusually visitor- and hotel-based.

### 6f. Venue exceptions to flag for overrides

- Above fallback (override upward): KC-01, KC-03, KC-05, KC-06, KC-08, KC-09, KC-10.
- Near fallback: KC-04, KC-07 (downtown spine).
- Event-specific, below fallback: KC-11 (Fan Festival-style open sites downtown).

### 6g. Clusters, shared roads and shared audiences (separate findings)

| Cluster | Members | Shared roads / approaches | Shared audiences and conflicts |
|---|---|---|---|
| Truman Sports Complex | Arrowhead, Kauffman; Cable Dahmer four exits east | I-70, I-435, Blue Ridge Cutoff; shared lots | World Cup and Royals overlapped June 18–21, 2026 with lots closed ([KCTV](https://www.kctv5.com/2026/06/18/parking-changes-royals-fans-truman-sports-complex/)); I-70 closure in 2027 (Section 9) |
| Village West / western Wyandotte | Children's Mercy Park, Kansas Speedway, Legends Field (gap), planned Chiefs stadium; Azura nearby | State Avenue, I-435, I-70, K-7, 130th Street | Future Chiefs crowds would join an existing soccer/racing cluster (after 2028) |
| Downtown spine | T-Mobile Center, CPKC Stadium, Union Station/Liberty Memorial open sites, Kauffman Center (gap), planned Crown Center ballpark | KC Streetcar; I-35, I-670, US-71; Gillham Road and 27th Street flagged over capacity for the ballpark ([KSHB](https://www.kshb.com/news/local-news/stadium-plan/no-new-parking-in-initial-filings-royals-sent-to-city-for-future-downtown-stadium)) | Streetcar capacity shared across events (Fan Festival and Arrowhead match days drove records simultaneously) |

---

## 7. End-of-brief answers

### 7.1 Recommended existing city type and rationale; strongest contrary evidence

**`sprawl`.** Capacity-weighted car share of recurring venues is 0.93 (0.89–0.97 sensitivity), above the 0.85 fallback in every case; big crowds sit in dispersed, parking-rich clusters with almost no regular event transit; KCATA is cutting service. Strongest contrary evidence: the World Cup's 35% shuttle use and record streetcar ridership, and the growing downtown spine (Section 6e).

### 7.2 Car-share values keyed to rows

| Class | Row | Value | Notes |
|---|---|---|---|
| **Measured (component only)** | KC-02 | Stadium Direct shuttle = 35.1% of attendees | Counted passengers ÷ attendance |
| **Derived** | KC-02 | 0.80 (0.72–0.89) car-involved | Assumes 30–70% of shuttle riders drove to park-and-ride |
| **Derived** | KC-11 | 0.55 (0.35–0.75) car-involved | Streetcar baseline subtraction; majority unclassified |
| **Projected** | KC-13 | 0.82 weekday / 0.79 weekend | Royals consultant, June 29, 2026 |
| **Estimated** | KC-01 | 0.95 (0.92–0.98) | |
| **Estimated** | KC-03 | 0.95 (0.92–0.98) | |
| **Estimated** | KC-04 | 0.82 (0.72–0.90) | Anchored on KC-13 projection |
| **Estimated** | KC-05 | 0.96 (0.92–0.98) | |
| **Estimated** | KC-06 | 0.97 (0.94–0.99) | |
| **Estimated** | KC-07 | 0.80 (0.65–0.90) | Park-and-ride via streetcar counted as car |
| **Estimated** | KC-08 | 0.97 (0.94–0.99) | |
| **Estimated** | KC-09 | 0.95 (0.90–0.98) | |
| **Estimated** | KC-10 | 0.97 (0.94–0.99) | |
| **Unknown** | KC-12 | Provisional fallback (0.85 under `sprawl`) | No evidence |

### 7.3 Boundary recommendation and inconsistencies between briefs

- **Boundary:** Kansas City MO–KS MSA (14 counties, both states); Lawrence and Columbia separate (Section 3).
- **Inconsistencies and issues:**
  - The companion venue answer was not available, so row keys (KC-xx) are this answer's own and must be reconciled.
  - **Arrowhead's name:** the brief uses "GEHA Field at Arrowhead Stadium"; Wikipedia lists that name as a *former* name spanning 2021–2026 ([Wikipedia](https://en.wikipedia.org/wiki/Arrowhead_Stadium)), while 2026 secondary sources still use it. Current naming is unresolved; re-check with the Chiefs.
  - The brief's working boundary ("Kansas City, Missouri–Kansas metro") is consistent with the MSA; Lawrence is outside the MSA but showed event-travel ties during the World Cup.
  - Capacity conflicts exist for Kansas Speedway, Starlight and T-Mobile Center (Section 8).

### 7.4 Data gaps, model limitations, source conflicts and inaccessible sources

**Data gaps**
- No observed, survey-based event mode split for any recurring Kansas City venue.
- No per-boarding-site breakdown of World Cup Stadium Direct riders (needed to split park-and-ride from non-car origins).
- No streetcar ridership by CPKC match or T-Mobile Center event.
- No current Route 47 schedule verified after the 2026 service changes.
- No authoritative Truman Sports Complex parking inventory.
- Typical attendance per venue; audience origin by county; festivals and 1,000–5,000 rooms (Section 4).
- Ticketing platform and feed coverage per venue.

**Model limitations**
- A single regional fallback cannot represent both the downtown spine (~0.81) and the outlying clusters (~0.95+); venue overrides carry most of the accuracy.
- Person car share is not the same as vehicles arriving at a venue's approaches; at CPKC and at the World Cup, park-and-ride moves vehicles away from the venue even though trips remain car-involved.
- World Cup operations (restricted parking, temporary shuttles) are not repeatable baselines.

**Source conflicts (preserved)**

| Item | Value A | Value B |
|---|---|---|
| Truman Sports Complex parking | 16,000+ ([Prked](https://prked.com/post/post-malone-kauffman-stadium-parking-2026)) | 26,000 ([Royals Review](https://www.royalsreview.com/kansas-city-royals-news/101472/new-documents-reveal-details-on-downtown-stadium-development)) |
| Kansas Speedway capacity | 48,000 ([HPPR/KCUR](https://www.hppr.org/post/kansas-speedway-readies-nascar-without-fans-track)) | 72,000 ([American Arenas](https://americanarenas.com/venue/kansas-speedway/)) |
| Starlight capacity | 7,739 ([Starlight](https://kcstarlight.com/?p=217)) | 7,958 ([Clio](https://theclio.com/entry/146133)) |
| T-Mobile Center concert capacity | 19,252 ([Wikipedia](https://en.wikipedia.org/wiki/T-Mobile_Center)) | 18,972 with floor GA ([AFFiNE guide](https://affine.pro/blog/t-mobile-center-seating-chart)); 18,972 is the basketball figure in Wikipedia, so this looks definitional |
| Royals Crown Center projection | 82%/79% car (2026 screening) | 80% car (2024 Crossroads plan) — consistent within ~2 points |

**Inaccessible or weak sources**
- Kansas City Star articles were read only via syndicated copies (AOL/Yahoo).
- FIFA's parking site was not accessed directly; prices come via KCUR.
- The Royals screening was read from an advocacy-group copy, not the city's filing system.
- Several capacities and parking figures come from reseller or guide sites (Koobit, Prked, MeetStadium, KC Mom Collective); treat as unverified.
- An October 9, 2026 lawsuit by Wyandotte County over the Chiefs stadium law was seen only as a headline ([KCTV](https://www.kctv5.com/2026/10/09/not-stop-stadium-wyandotte-county-lawsuit-says-chiefs-stadium-law-strips-leaders-local-control/)); contents not reviewed.
- Uber and Lyft declined to release World Cup trip totals ([Axios](https://www.axios.com/local/kansas-city/2026/07/29/kc-world-cup-transit-ridership-records)).

### 7.5 Confirmed transport and venue changes through 2028

| Change | Status | Date(s) | Effect on rows | Suggested re-check |
|---|---|---|---|---|
| KC Streetcar Main Street extension (Union Station–UMKC) | **Done** | Opened Oct 24, 2025 ([Missouri Public Transit Assn.](https://mopublictransit.org/2025/10/29/kc-streetcar-celebrates-grand-opening-of-main-street-extension/)) | KC-04, KC-11, KC-13 | — |
| KC Streetcar Riverfront extension to CPKC | **Done** | Opened May 18, 2026 ([Northeast News](https://northeastnews.net/pages/riverfront-extension-to-open-to-streetcar-riders-on-may-18/)) | KC-07 (team shuttle ended) | Spring 2027 season start |
| KCATA route cuts planned for Sept 6, 2026 | **Deferred** by $8.3M city funding; funding secured through April 30, 2027 ([KCUR](https://www.kcur.org/housing-development-section/2026-08-17/kansas-city-kcata-transportation-bus-routes-cuts); [KSHB](https://www.kshb.com/news/local-news/transportation/i-dont-know-how-id-get-around-for-kcata-riders-bus-service-is-more-than-transportation)) | Through Apr 30, 2027 | KC-01, KC-03 (Route 47 status unverified) | May 2027 |
| I-70 closure, Paseo to Van Brunt (MoDOT) | **Scheduled** | January 2027, about 11 months; MoDOT advises stadium traffic to use I-435 loops ([KCTV](https://www.kctv5.com/2026/10/09/where-will-traffic-go-i-70-closure-just-months-away/)) | KC-01, KC-03, KC-10 approaches | December 2026, then monthly in 2027 |
| Royals ballpark at Crown Center | **Approved by City Council; $600M city commitment** ([Ballpark Digest](https://ballparkdigest.com/2026/08/25/kansas-city-council-approves-new-crown-center-ballpark-for-royals/); [Ballpark Digest](https://ballparkdigest.com/2026/08/18/kc-committee-commits-600m-to-crown-center-royals-ballpark/)); further traffic study phase due December 2026 ([screening](https://bikewalkkc.org/wp-content/uploads/2026/07/Royals-Transporation-Assessment_06-29-26_v1.pdf)) | Target opening 2030 ([Wikipedia](https://en.wikipedia.org/wiki/New_Kansas_City_Royals_Stadium)) | KC-03 remains active through 2028; construction may affect downtown approaches | January 2027 (Phase 2B results) |
| Chiefs domed stadium, Wyandotte County (126th & State) | **Approved district and state incentives; not built**; state may redraw the district ([KSHB](https://www.kshb.com/news/local-news/kansas/wyandotte-county/wyandotte-county-residents-sound-alarm-as-kansas-weighs-expanding-chiefs-stadium-star-bond-district)); county lawsuit filed Oct 2026 (headline only) | Opening targeted for 2031 ([WIBW/KCTV](https://www.wibw.com/2026/02/06/kansas-city-kansas-mayor-responds-mixed-reactions-over-chiefs-stadium-star-bonds/)) | KC-01 remains active through 2028; Village West construction traffic possible | Quarterly; next January 2027 |
| Truman Sports Complex redevelopment framework | **Proposal (concepts only)** | Released Oct 6, 2026 ([Jackson County](https://content.govdelivery.com/accounts/MOJACKSONCO/bulletins/42e2a22)); teams expected to leave by 2031 ([KCUR](https://www.kcur.org/housing-development-section/2026-10-06/jackson-county-truman-sports-complex-phil-levota-task-force)) | None before 2028 | Annually |
| Kansas Speedway 2027 NASCAR weekends | **Scheduled** | May 8–9 and Oct 1–3, 2027 ([Jayski](https://www.jayski.com/2026/08/19/kansas-speedway-announced-2027-dates/)) | KC-08 | Early 2027 |
| Streetcar extension to North Kansas City | **Study only** ([KCUR tag page](https://www.kcur.org/tags/kc-streetcar-authority)) | None | None | Annually |

---

## 8. Method notes

- **Ridership inference** (KC-02, KC-11) shows the attendance denominator, return-trip treatment, baseline subtraction and ranges explicitly. No raw boardings or parking counts were converted to a mode share without a stated method; the CPKC parking figure is used only as an upper bound on on-site car arrivals.
- **Estimates** (KC-01, 03–10) rest on local service facts: the federal charter restriction on KCATA game-day service, Route 47 frequency, site location and parking design, plus the local Crown Center projection for downtown sites. They are not fitted to any desired setting, and no new constants are proposed.
- **No personal ratings, app code, hand flags or cost commitments** are included.
