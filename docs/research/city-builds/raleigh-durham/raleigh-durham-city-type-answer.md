# Raleigh–Durham (the Triangle): city-type assessment for Fan/Friction Gridlock

**Research date:** Monday, October 12, 2026. All sources were accessed on this date unless a source date is given. Public data only.

**Bottom line:** keep the Triangle on the existing **`sprawl`** (driving) setting. No measured event mode split was found for any Triangle venue or event; every car-share value below is a labelled estimate built from public parking, shuttle and transit-service evidence. Those estimates put most large venues above the current 0.85 fallback, with the UNC and Duke campus venues as the main exceptions below it.

---

## 1. Scope, evidence rules and definitions

- **People, not vehicles.** Shares below are shares of attending *people*. Parking-space counts, lot counts and vehicle queues are reported as operations context only and are never converted into a mode share.
- **Car-involved trip.** Private car (driver or passenger), carpool, taxi, rideshare, drop-off/pick-up, *and* any trip where the attendee drove to a remote lot or park-and-ride and then rode a shuttle or bus. This follows the brief: Tar Heel Express park-and-ride riders, State Fair satellite-lot shuttle riders and GoRaleigh fair park-and-ride riders are all counted as car-involved.
- **Public bus/rail (non-car).** Regular or special transit reached on foot, by bike or by another transit trip.
- **Dedicated event shuttle (non-car).** Event shuttles boarded without first driving. Kept separate where any evidence exists; in practice the Triangle evidence almost never separates these from park-and-ride riders.
- **Evidence labels.** *Measured* = observed counts or surveys of this event's attendees. *Projected* = a planning-study assumption for a future venue/event. *Estimated* = this answer's own transparent estimate. **No Triangle row is measured or projected; all are estimated.** The only local observed count found is a raw rail boarding/alighting figure for the State Fair (row E01), used as a bounding input, not as a mode share.
- **Companion venue research.** The companion venue answer was **not available** to this research. Venues were enumerated independently and given the row IDs below (`V01`…, `E01`…). Map these IDs to the companion rows before loading values.

---

## 2. Boundary recommendation

### 2.1 Recommended app metro

| Tier | Area | Recommendation | Evidence |
|---|---|---|---|
| Core | Wake, Durham and Orange counties (Raleigh, Cary, Durham, Chapel Hill/Carrboro and their suburbs) | **One app metro** | OMB combines the Raleigh–Cary and Durham–Chapel Hill metros into the Raleigh–Durham–Cary CSA; a CSA requires an employment interchange rate of at least 15% between the component areas ([NC statistical areas, Wikipedia summary of OMB rules](https://en.wikipedia.org/wiki/North_Carolina_statistical_areas)). The 2020 census put the CSA at 2,242,324 people ([Research Triangle, Wikipedia](https://en.wikipedia.org/wiki/Research_Triangle)). Event audiences cross county lines: Raleigh–Durham is the #1 market for State Fair visitors ([NCDA fairgoer insights report](https://www.ncagr.gov/ncsf-nc-state-fair-fairgoer-insights-report/open)). |
| Outer, same metro areas | Johnston and Franklin (Raleigh–Cary MSA); Chatham, Granville and Person (Durham–Chapel Hill MSA) | Treat as **audience-origin counties** inside the app metro, but with no verified 5,000+ venue | County membership per [reference.org summary of OMB delineation](https://reference.org/facts/Research_Triangle/HE5PQFhE). No fixed 5,000+ room was verified in these counties in this pass (gap, section 9). |
| CSA edge | Harnett, Lee and Vance (micropolitan areas added to the CSA in the 2023 delineation) | **Exclude** from the event metro; note as edge | The 2023 CSA has two metropolitan and three micropolitan areas totalling ten counties ([Research Triangle, Wikipedia](https://en.wikipedia.org/wiki/Research_Triangle)). Micro-area names (Henderson, Anderson Creek, Sanford) come from a [community forum post](https://community.dtraleigh.com/t/raleigh-and-statistical-area-population/555?page=90) — low-quality source; verify against OMB Bulletin 23-01. |
| Keep distinct | Charlotte, Greensboro/Winston-Salem (Triad), Fayetteville | Separate metros | Fayetteville anchors its own CSA ([NC OSBM 2023 CBSA maps](https://www.osbm.nc.gov/facts-figures/geography/core-based-statistical-area-reference-maps/2023-core-based-statistical-area-maps)). Triad, Fayetteville and Charlotte appear as separate source markets in fair data ([NCDA](https://www.ncagr.gov/ncsf-nc-state-fair-fairgoer-insights-report/open)). |

### 2.2 Should Raleigh, Durham, Chapel Hill and Cary share one app metro?

**Yes, for audiences and boundary purposes; no, for physical crowd spill between cities.**

- *For one metro:* the CSA commuting test (≥15% interchange), a single TV market, shared university fan bases, and statewide/regional audiences at the largest events (68% of fairgoers live within 100 miles, [NCDA](https://www.ncagr.gov/ncsf-nc-state-fair-fairgoer-insights-report/open)).
- *Against treating it as one dense crowd field:* the major venues sit in separate clusters (West Raleigh; downtown Raleigh; Cary; downtown Durham; Duke West Campus; UNC campus) using different approach roads. Documented crowd interactions are *within* the West Raleigh cluster (section 6), not between cities.

Population context (2025 Census estimates via [citypopulation.de](https://www.citypopulation.de/en/usa/cities/northcarolina/?admid=440)): Raleigh 506,306; Durham 305,561; Cary 183,582. 2023 metro estimates: Raleigh–Cary 1,509,231; Durham–Chapel Hill 608,879 ([List of NC metro areas, Wikipedia, citing Census](https://en.wikipedia.org/wiki/List_of_metropolitan_areas_of_North_Carolina)).

### 2.3 Edge municipalities

| Municipality | County | Why it is an edge case |
|---|---|---|
| Zebulon | Wake | Hosts Five County Stadium (6,500 listed, [Wikipedia venue list](https://en.wikipedia.org/wiki/List_of_sports_venues_in_North_Carolina)); inside Wake, so inside the boundary, but far east of other clusters. |
| Holly Springs, Wake Forest, Garner | Wake | Inside boundary; Garner hosted the 2025 GoRaleigh fair park-and-ride ([NCDA 2025](https://www.ncagr.gov/news/press-releases/2025/10/14/tips-getting-fair)). |
| Pittsboro | Chatham | Durham–Chapel Hill MSA member; no 5,000+ venue verified. |
| Hillsborough | Orange | Inside Orange; no 5,000+ venue verified. |
| Smithfield, Clayton | Johnston | Raleigh–Cary MSA member; no 5,000+ venue verified. |

---

## 3. Background only: ordinary commuting (not event travel)

These figures describe journeys to work, **not** event trips. They are shown only to explain why event estimates start from a car-dominant baseline.

| Area | Car | Work from home | Transit | Walk | Source |
|---|---|---|---|---|---|
| Raleigh city (ACS 2023) | 71.2% | 23.6% | 1.3% | 1.8% | [ACS via interactive-map-ai](https://interactive-map-ai.com/explore/us/NC/raleigh-city/commute) (secondary aggregator) |
| Orange County (ACS 2023) | 64.4% | 24.2% | 4.2% | 4.0% | [ACS via interactive-map-ai](https://interactive-map-ai.com/explore/us/NC/orange-county/commute) (secondary aggregator) |

Annual bus ridership 2025 (all trips, not events): GoRaleigh 7,991,200 ([Wikipedia](https://en.wikipedia.org/wiki/GoRaleigh)); GoDurham 6,741,500 ([Wikipedia](https://en.wikipedia.org/wiki/GoDurham)); Chapel Hill Transit 4,305,300 ([Wikipedia](https://en.wikipedia.org/wiki/Chapel_Hill_Transit)). Chapel Hill Transit has been fare-free since 2002 (same source). There is no light rail or commuter rail in the region; the Durham–Orange light rail project was cancelled ([Wikipedia](https://en.wikipedia.org/wiki/Durham%E2%80%93Orange_Light_Rail_Transit)).

---

## 4. Venue and event identity

Fixed venues are prioritised at 5,000+; DPAC is included as the largest verified sub-5,000 room. Event rows (E-prefix) are *not* fixed-capacity venue records.

| ID | Verified current name | Municipality | Setup / event represented | Date or season | Capacity by configuration | Tenants / status | Sources |
|---|---|---|---|---|---|---|---|
| V01 | Lenovo Center (renamed from PNC Arena, Sept 2024) | Raleigh (West) | Hurricanes hockey; NC State men's basketball; arena concerts | Oct–Jun sports; year-round concerts | Hockey 18,680; concert 180° 13,000 / 270° 14,000 / 360° 19,000 / in-the-round 19,500; theatre 3,500–10,000 | Hurricanes, NC State MBB; renovation through Dec 2027 | [Stadium Journey](https://www.stadiumjourney.com/stadiums/lenovo-center-carolina-hurricanes); [Arena Network](https://arenanetwork.net/properties/lenovo-center/); [WRAL](https://www.wral.com/story/21632429/); [Raleigh Magazine](https://raleighmag.com/2025/06/lenovo-center-district-development-project/) |
| V02 | Wayne Day Family Field at Carter–Finley Stadium | Raleigh (West) | NC State football; stadium concerts | Aug–Nov football; summer/fall concerts | Football 56,919 (conflict: 57,583 and 58,000 also published) | NC State football | [Wikipedia](https://en.wikipedia.org/wiki/Carter%E2%80%93Finley_Stadium); [venue list](https://en.wikipedia.org/wiki/List_of_sports_venues_in_North_Carolina); [cfbtrack](https://www.cfbtrack.com/venues/3670-carter-finley-stadium) |
| V03 | Kenan Memorial Stadium | Chapel Hill | UNC football; occasional soccer friendlies | Aug–Nov | 50,500 | UNC football | [venue list](https://en.wikipedia.org/wiki/List_of_sports_venues_in_North_Carolina) |
| V04 | Dean E. Smith Center | Chapel Hill | UNC men's basketball | Nov–Mar | "Well over 21,000" (exact current figure not verified) | UNC MBB | [Daily Tar Heel](https://dailytarheel.com/article/2020/02/cameron-dean-dome-rivalry-challenge) |
| V05 | Carmichael Arena | Chapel Hill | UNC women's basketball | Nov–Mar | 8,010 | UNC WBB | [venue list](https://en.wikipedia.org/wiki/List_of_sports_venues_in_North_Carolina) |
| V06 | Cameron Indoor Stadium | Durham (Duke West Campus) | Duke men's/women's basketball | Nov–Mar | 9,314 | Duke basketball, volleyball, wrestling | [GoDuke](https://goduke.com/facilities/cameron-indoor-stadium/11) |
| V07 | Brooks Field at Wallace Wade Stadium | Durham (Duke West Campus) | Duke football; commencement | Aug–Nov; May | 35,018 since 2024 (was 40,004) | Duke football | [Wikipedia](https://en.wikipedia.org/wiki/Wallace_Wade_Stadium) |
| V08 | Durham Bulls Athletic Park | Durham (downtown) | Durham Bulls Triple-A baseball | Apr–Sep | 10,000 | Durham Bulls | [Wikipedia](https://en.wikipedia.org/wiki/Durham_Bulls_Athletic_Park) |
| V09 | DPAC (Durham Performing Arts Center) | Durham (downtown) | Touring theatre/concerts | Year-round | 2,712 | — | [Duke Arts](https://arts.duke.edu/places/dpac-durham-performing-arts-center) |
| V10 | Coastal Credit Union Music Park at Walnut Creek | Raleigh (Southeast) | Amphitheatre concerts | Apr–Oct | 20,601 (6,847 seats + 13,653 lawn) | Live Nation operator | [Wikipedia](https://en.wikipedia.org/wiki/Coastal_Credit_Union_Music_Park); [Ticketmaster](https://blog.ticketmaster.com/venue-faq-coastal-credit-union-music-park-walnnut-creek-raleigh-nc/) |
| V11 | Red Hat Amphitheater — original site (500 S. McDowell St.) | Raleigh (downtown) | Amphitheatre concerts | **2026 is the final season**, ending late Oct 2026 | ~6,000 | Demolition after 2026 season | [Visit Raleigh](https://www.visitraleigh.com/plan-a-trip/visitraleigh-insider-blog/post/red-hat-amphitheater-venue-raleigh-schedule-new-location-2027/) |
| V12 | Red Hat Amphitheater — new site (one block south) | Raleigh (downtown) | Amphitheatre concerts | Opens spring 2027 | Over 6,500 targeted (exact not published in sources found) | Under construction; steel topped out May 2026 | [ABC11](https://abc11.com/amp/post/red-hat-amphitheater-nc-raleigh-leaders-marked-major-downtown-development-project-steel-beam-topping-ceremony/19176378/); [ABC11 2024](https://abc11.com/post/raleigh-convention-center-expansion-relocation-red-hat-amphitheater/14937016/) |
| V13 | Koka Booth Amphitheatre | Cary | Concerts, festivals, symphony | Apr–Jan | 7,000 | Town of Cary venue | [Booth Amphitheatre](https://www.boothamphitheatre.com/about-koka-booth) |
| V14 | First Horizon Stadium at WakeMed Soccer Park (complex keeps the WakeMed name) | Cary | NC Courage (NWSL) | Mar–Nov | 10,000 | NCFC (men) on hiatus 2026–27 | [First Horizon PR](https://ir.firsthorizon.com/press-releases/press-release-details/2024/NORTH-CAROLINA-COURAGE-ANNOUNCES-FIRST-HORIZON-BANK-AS-STADIUM-NAMING-PARTNER/default.aspx); [CBS17](https://www.cbs17.com/sports/deeply-difficult-decision-north-carolina-fc-will-not-field-a-pro-soccer-team-in-2026/amp/) |
| V15 | Dorton Arena (State Fairgrounds) | Raleigh (West) | Non-fair arena events | Year-round | 7,610 | — | [venue list](https://en.wikipedia.org/wiki/List_of_sports_venues_in_North_Carolina) |
| V16 | Reynolds Coliseum | Raleigh (NC State campus) | NC State women's basketball | Nov–Mar | 5,500 | NC State WBB | [venue list](https://en.wikipedia.org/wiki/List_of_sports_venues_in_North_Carolina) |
| V17 | Five County Stadium | Zebulon | Minor-league baseball | Apr–Sep | 6,500 (current tenant/capacity not re-verified) | Listed tenant Carolina Mudcats | [venue list](https://en.wikipedia.org/wiki/List_of_sports_venues_in_North_Carolina) |
| E01 | N.C. State Fair | Raleigh (West) | 11-day fair, open site plus fairgrounds | 2025: Oct 16–26; **2026: Oct 15–25** | 2025 total gate count 946,811 visits; daily 41,287–116,462 | — | [NCDA report](https://www.ncagr.gov/ncsf-nc-state-fair-fairgoer-insights-report/open); [ABC11](https://abc11.com/amp/post/nc-2025-state-fair-attendance-hits-almost-950k-dropping-slightly-2024/18077537/) |
| E02 | Dreamville Festival (2025, final edition) / successor festival at Dorothea Dix Park | Raleigh (downtown edge) | 2-day open-site music festival | Early April | 2025: more than 104,000 over two days | Four-year successor agreement from 2026; 2026 edition not verified | [ABC11](https://abc11.com/post/2025-dreamville-music-festival-more-104000-fans-attended-final-event/16154774/); [Spectrum](https://spectrumlocalnews.com/nc/charlotte/news/2025/04/04/dreamville-festival-is-ending-but-the-music-is-staying-behind) |
| E03 | West Raleigh stacked-event days (fair + Lenovo Center and/or Carter–Finley concert) | Raleigh (West) | Overlap scenario, not a separate crowd | October | Sum only of simultaneously present people; see section 6 | — | [WRAL 2025](https://www.wral.com/news/local/busy-traffic-concerts-state-fair-raleigh-october-2025/); [CBS17](https://www.cbs17.com/news/local-news/wake-county-news/sea-of-red-taillights-at-nc-state-fair-and-lenovo-center/) |
| E04 | Downtown Raleigh open-site watch parties (e.g., Moore Square Stanley Cup Final watch parties) | Raleigh (downtown) | Open-site viewing crowd | Playoff season | Unknown | — | Mentioned on [Visit Raleigh](https://www.visitraleigh.com/plan-a-trip/visitraleigh-insider-blog/post/red-hat-amphitheater-venue-raleigh-schedule-new-location-2027/); crowd size not found |

---

## 5. Travel-mode table (people shares)

All values are **estimated** (no measured or projected local splits exist). Each split sums to 100% by construction. "Bus/rail" = non-car public transit; "Event shuttle (non-car)" = shuttles boarded without driving; "Unclass." = share not assignable on current evidence. Car-involved includes rideshare, drop-off and drive-to-shuttle.

| ID | Car-involved | Bus/rail | Event shuttle (non-car) | Walk/bike/other | Unclass. | Sum | **Recommended car share** | Range | Confidence | Why (assumptions) |
|---|---|---|---|---|---|---|---|---|---|---|
| V01 Lenovo Center (hockey 18,680) | 95% | 2% | 0% | 3% | 0% | 100% | **0.95** | 0.92–0.98 | Low–medium | Freeway site with surface lots on all sides ([ParkMobile](https://parkmobile.io/parking/locations/nc/raleigh-parking/parking-lot/general-parking)); only regular GoRaleigh Route 26 listed by the venue, no event transit found ([Lenovo Center](https://lenovocenter.com/plan-your-visit/parking-guide/transportation)); rideshare counted as car. |
| V01 Lenovo Center (concert 19,000–19,500) | 96% | 1% | 0% | 3% | 0% | 100% | **0.96** | 0.92–0.98 | Low | Same access; concert audiences travel from farther (out-of-state attendees reported in [CBS17](https://www.cbs17.com/news/local-news/wake-county-news/heavy-traffic-at-nc-state-fair-sabrina-carpenter-concert-at-lenovo-center-in-raleigh/)). Configurations are mutually exclusive with hockey. |
| V02 Carter–Finley (football 56,919) | 91% | 2% | 0% | 5% | 2% | 100% | **0.91** | 0.85–0.95 | Low | Permit and paid lots dominate ([GoPack](https://gopack.com/sports/2023/9/5/football-tailgating-and-parking)); campus park-and-ride on Route 60 was closed on at least one game day ([NC State News, 2021](https://news.ncsu.edu/?p=525769)); some student walking assumed; student shuttle status unknown → 2% unclassified. |
| V03 Kenan Stadium (football 50,500) | 75% | 5% | 0% | 20% | 0% | 100% | **0.75** | 0.60–0.85 | Low | Tar Heel Express runs from park-and-ride lots (car-involved) ([Town of Chapel Hill](https://www.chapelhillnc.gov/Transportation-and-Parking/Park-and-Ride/Tar-Heel-Express)); campus-embedded stadium in a walkable town with fare-free buses; student walk share unmeasured. |
| V04 Dean Smith Center (MBB, 21,000+) | 80% | 5% | 0% | 15% | 0% | 100% | **0.80** | 0.68–0.90 | Low | THX from park-and-rides and (basketball only) downtown ([Town of Chapel Hill](https://www.chapelhillnc.gov/Transportation-and-Parking/Park-and-Ride/Tar-Heel-Express)); farther from Franklin St. than Kenan. Downtown THX boardings are non-car only if riders walked to them — unknown. |
| V05 Carmichael Arena (8,010) | 75% | 5% | 0% | 20% | 0% | 100% | **0.75** | 0.60–0.88 | Low | Central-campus arena; no event-specific evidence. |
| V06 Cameron Indoor (9,314) | 70% | 5% | 0% | 25% | 0% | 100% | **0.70** | 0.55–0.85 | Low | Large on-campus student section; Duke Transit and GoDurham serve campus ([Duke](https://commencement.duke.edu/plan-your-visit/parking-transportation)). |
| V07 Wallace Wade (35,018) | 87% | 3% | 0% | 10% | 0% | 100% | **0.87** | 0.78–0.93 | Low | Pass-only lots near stadium plus free remote lots with shuttles (car-involved) ([Stadium Journey](https://stadiumjourney.com/stadiums/wallace-wade-stadium-s494), secondary). |
| V08 Durham Bulls Athletic Park (10,000) | 85% | 3% | 0% | 12% | 0% | 100% | **0.85** | 0.75–0.92 | Low | Downtown decks around American Tobacco Campus ([Stadium Journey](https://www.stadiumjourney.com/stadiums/durham-bulls-athletic-park-s193)); walkable downtown residents assumed. |
| V09 DPAC (2,712) | 88% | 2% | 0% | 10% | 0% | 100% | **0.88** | 0.80–0.94 | Low | Adjacent parking structure ([Duke Arts](https://arts.duke.edu/places/dpac-durham-performing-arts-center)); older theatre audience. |
| V10 Coastal CU Music Park (20,601) | 97% | 1% | 0% | 2% | 0% | 100% | **0.97** | 0.93–0.99 | Medium–low | Nine on-site lots with parking bundled into the ticket ([Ticketmaster](https://blog.ticketmaster.com/venue-faq-coastal-credit-union-music-park-walnnut-creek-raleigh-nc/)); no event transit found. |
| V11 Red Hat Amphitheater, original (~6,000) | 85% | 3% | 0% | 12% | 0% | 100% | **0.85** | 0.75–0.92 | Low | Downtown site; downtown businesses depend on show foot traffic ([Axios](https://www.axios.com/local/raleigh/2024/07/24/raleigh-red-hat-amphitheater-concerts-relocation-jeopardy)). Final season 2026. |
| V12 Red Hat Amphitheater, new (6,500+) | — | — | — | — | — | — | **Provisionally 0.85 (as V11)** | 0.75–0.92 | Low | Not yet open; same downtown block context. |
| V13 Koka Booth Amphitheatre (7,000) | 96% | 1% | 0% | 3% | 0% | 100% | **0.96** | 0.92–0.99 | Low | Suburban Cary park setting; no transit/parking evidence retrieved. |
| V14 First Horizon Stadium (10,000) | 96% | 1% | 0% | 3% | 0% | 100% | **0.96** | 0.92–0.99 | Low | Suburban 158-acre complex near I-40 ([First Horizon PR](https://ir.firsthorizon.com/press-releases/press-release-details/2024/NORTH-CAROLINA-COURAGE-ANNOUNCES-FIRST-HORIZON-BANK-AS-STADIUM-NAMING-PARTNER/default.aspx)). |
| V15 Dorton Arena (7,610, non-fair) | 95% | 2% | 0% | 3% | 0% | 100% | **0.95** | 0.90–0.98 | Low | Same West Raleigh access as V01. |
| V16 Reynolds Coliseum (5,500) | 75% | 5% | 0% | 20% | 0% | 100% | **0.75** | 0.60–0.88 | Low | Main-campus arena. No event evidence. |
| V17 Five County Stadium (6,500) | 98% | 0% | 0% | 2% | 0% | 100% | **0.98** | 0.95–0.99 | Low | Exurban site; no transit evidence. Tenant/capacity to re-verify. |
| E01 N.C. State Fair (per day) | 95% | 1.5% | 0% | 3.5% | 0% | 100% | **0.95** | 0.90–0.98 | Low–medium | See inference box below; park-and-ride and satellite-lot shuttles counted as car-involved. |
| E02 Dix Park festival (per day) | 85% | 3% | 0% | 12% | 0% | 100% | **0.85** | 0.72–0.92 | Low | No on-site parking in 2019 plan; parking at Centennial Campus plus walk, shuttles from Blount St., rideshare partner ([ABC11 2019](https://abc11.com/post/dreamville-fest-shuttles-parking-and-everything-you-need-to-know/5235845/)). 2025 operations not retrieved. |
| E04 Downtown watch parties | — | — | — | — | — | — | **Unknown → `sprawl` fallback 0.85** | — | None | No crowd or travel data. |

### Ridership inference: NC By Train at the State Fair (E01)

- **Raw count:** in 2018, 3,176 passengers got on or off trains at the special fairgrounds stop ([NCDOT Rail Division report, Dec 2018](https://connect.ncdot.gov/resources/Rail-Division-Resources/Documents/2018.12%20Monthly%20Rail%20Report.pdf)).
- **Baseline subtraction:** the fairgrounds stop exists only during the fair, so baseline at that stop = 0.
- **Return trips:** boardings + alightings at one stop. If every rider made a round trip, persons ≈ 3,176 ÷ 2 = 1,588; if every rider made a one-way trip, persons ≤ 3,176.
- **Denominator:** 2018 attendance was not retrieved. As a proxy, the 20-year average is 937,672 visits ([NCDA](https://www.ncagr.gov/ncsf-nc-state-fair-fairgoer-insights-report/open)). Gate counts are visits, not unique people.
- **Result:** rail ≈ 1,588 ÷ 937,672 ≈ 0.17% (upper bound ≈ 0.34%). Trains stop only four times a day; the last 2025 westbound stop was 5:48 p.m. ([NCDOT 2025](https://www.ncdot.gov/news/press-releases/Pages/2025/2025-09-22-ride-iconic-fall-events-train.aspx)), so rail serves only daytime visitors.
- **What is not counted:** GoRaleigh fair park-and-ride (car-involved by definition) and GoRaleigh/GoDurham special routes ([Spectrum](https://spectrumlocalnews.com/nc/triangle-sandhills/news/2025/10/14/n-c--state-fair-driving-parking-bus-)) — no ridership published. The 1.5% bus/rail share in E01 is therefore an estimate, with rail contributing well under half a point.

### Non-local comparison (contrast only)

A 2024 Philadelphia arena traffic review averaged peer arenas at 37% auto plus 7% taxi/ride-hail ([City of Philadelphia TIA review](https://www.phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf)). This is a *projection* for a rail-served downtown and is not used for any Triangle value; it only illustrates the kind of venue the `transit` default (0.40) describes, which no Triangle venue resembles.

---

## 6. Operations, parking and shared approaches

| ID | Parking supply and remote arrangements | Event operations, closures, start/end service | Access constraints and shared approaches |
|---|---|---|---|
| V01 | Twelve general lots shared with Carter–Finley ([ParkMobile](https://parkmobile.io/parking/locations/nc/raleigh-parking/parking-lot/general-parking)); premier lots 1000 East and 6000 West ([ParkMobile](https://parkmobile.io/parking/locations/nc/raleigh-parking/parking-lot/premier-parking)). Total space count not published in sources found. Two planned decks: 733 and 1,062 spaces ([WRAL](https://www.wral.com/story/21684409/)); during deck construction cars expected to shift to Carter–Finley and fairgrounds lots ([Raleigh Magazine](https://raleighmag.com/2025/06/lenovo-center-district-development-project/)). | Rideshare via Gate C on Trinity Rd; taxis at VIP entrance; GoRaleigh Route 26 stops across the street ([Lenovo Center](https://lenovocenter.com/plan-your-visit/parking-guide/transportation)). End-of-event Route 26 service not verified. About 150 ticketed nights a year ([NSJ](https://nsjonline.com/article/2025/05/raleigh-approves-1b-for-sports-entertainment-district/)); over 1.5 million guests a year ([Lenovo Center](https://www.lenovocenter.com/arena-info)) ≈ 10,000 guests per event on average (derived). | Edwards Mill Rd, Trinity Rd, Wade Ave, I-40/I-440 shared with V02, V15, E01. Police advised using Wade Ave rather than Trinity Rd on a 2025 fair/concert day ([CBS17](https://www.cbs17.com/news/local-news/wake-county-news/sea-of-red-taillights-at-nc-state-fair-and-lenovo-center/)). Cardinal Gibbons High School traffic concerns ([CBS17](https://www.cbs17.com/news/local-news/wake-county-news/raleigh-entertainment-district-closer-to-reality-after-clearing-crucial-step/)). |
| V02 | Mostly donor-permit lots; limited day-of-game paid parking ([GoPack](https://gopack.com/sports/2023/9/5/football-tailgating-and-parking)). Shares lots with V01. | Halftime pass-outs to cars allowed ([Stadium Journey](https://www.stadiumjourney.com/stadiums/carter-finley-stadium-s400)). Wolfline Route 60 park-and-ride closed for a 2021 game ([NC State News](https://news.ncsu.edu/?p=525769)). | Same West Raleigh roads as V01. A weekday Carter–Finley concert at rush hour generated mass complaints ([WRAL](https://www.wral.com/news/local/north-carolina-state-fair-billie-eilish-concerts-east-raleigh-traffic-october-2025/)). |
| V03 / V04 / V05 | Rams Club reserved lots plus paid public lots ($5–$10 in 2015–2018, dated) ([UNC Move](https://move.unc.edu/calendar/unc-football-vs-nc-state-2018)). Free parking at THX lots ([UNC Move](https://move.unc.edu/events/mens-basketball/)). | THX from Friday Center (football from 3 h before) and Southern Village (2 h); downtown service basketball season only; buses every 10–15 min; service ends about 45 min after the game; return during the game not guaranteed ([Town of Chapel Hill](https://www.chapelhillnc.gov/Transportation-and-Parking/Park-and-Ride/Tar-Heel-Express)). Fare conflict: $10 round trip ([UNC Move](https://move.unc.edu/events/mens-basketball/)) vs. $5 round trip ([Daily Tar Heel 2022](https://dailytarheel.com/article/2022/08/city-chapel-hill-transit-overview)). | US 15-501, NC 54/Raleigh Rd (Friday Center), South Rd/Skipper Bowles Dr drop-offs. Kenan and Smith Center events do not normally overlap in season. |
| V06 / V07 | Pass-only lots by the stadium; free remote lots with shuttle buses (secondary source, [Stadium Journey](https://stadiumjourney.com/stadiums/wallace-wade-stadium-s494)). | Regular routes altered for large campus events such as commencement ([Duke](https://commencement.duke.edu/plan-your-visit/parking-transportation)); football-specific shuttle schedule not retrieved. | Cameron and Wallace Wade are adjacent; same-day overlap possible but not documented. |
| V08 / V09 | Multiple decks around the American Tobacco Campus; parking tight when DPAC has a show ([Stadium Journey](https://stadiumjourney.com/stadiums/durham-bulls-athletic-park-duke-blue-devils)). | No event transit found. | NC 147 (Durham Freeway) and downtown Durham streets shared by V08 and V09. |
| V10 | Nine lots; parking included in ticket; premier parking extra ([Ticketmaster](https://blog.ticketmaster.com/venue-faq-coastal-credit-union-music-park-walnnut-creek-raleigh-nc/); [Cat's Cradle](https://catscradle.com/venue/coastal-credit-union-music-park/)). | No event transit found. | Rock Quarry Rd / I-40 / I-440; isolated from other large venues. |
| V11 / V12 | Downtown decks and streets (inventory not retrieved). | New site requires permanent closure of South St. between McDowell and Dawson ([ABC11](https://abc11.com/post/raleigh-convention-center-expansion-relocation-red-hat-amphitheater/14937016/)). | Shares downtown approaches with the convention center and Martin Marietta Center. |
| V13, V14, V17 | Not retrieved (gap). | No event transit found. | Cary: I-40 / Cary Pkwy / US 1 corridors; Zebulon: US 64/264. |
| E01 | Free fair parking on fairgrounds, Carter–Finley and Lenovo Center lots; two satellite lots with free shuttles (Dogwood Lot, Hwy 54 Cardinal Lot) ([NCDA](https://www.ncagr.gov/divisions/nc-state-fair/plan-your-visit/getting-here-parking)). Lenovo lots closed to fairgoers on Lenovo event days ([Spectrum](https://spectrumlocalnews.com/nc/triangle-sandhills/news/2025/10/14/n-c--state-fair-driving-parking-bus-)). | 2026 GoRaleigh park-and-ride: Dix Park Hunt Drive Lot A to Gate 1, every 30 min, 8:30 a.m. to closing, $5 round trip ([NCDA](https://www.ncagr.gov/divisions/nc-state-fair/plan-your-visit/getting-here-parking)). Rideshare/drop-off at Gate 1 on Hillsborough St ([NCDA 2025](https://www.ncagr.gov/news/press-releases/2025/10/14/tips-getting-fair)). | Trinity Rd, Blue Ridge Rd, Hillsborough St, Edwards Mill Rd, Wade Ave — shared with V01/V02/V15. |
| E02 | No on-site parking (2019 plan); Centennial Campus parking and walk ([ABC11 2019](https://abc11.com/post/dreamville-fest-shuttles-parking-and-everything-you-need-to-know/5235845/)). | Shuttles from Blount St.; rideshare partner (2019). 2025/2026 plans not retrieved. | Downtown Raleigh streets near Western Blvd / Lake Wheeler Rd. |

### Cluster, road and audience findings (separate)

1. **Venue cluster — West Raleigh.** Lenovo Center, Carter–Finley, Dorton Arena and the fairgrounds share lots, roads and police traffic operations. On 2025 fair days the arena hosted Billie Eilish on back-to-back nights, NBA YoungBoy and Tate McRae ([WRAL](https://www.wral.com/news/local/busy-traffic-concerts-state-fair-raleigh-october-2025/)); the NBA YoungBoy show was reported as a 20,000-person sellout on top of fair attendance ([CBS17](https://www.cbs17.com/news/local-news/wake-county-news/sea-of-red-taillights-at-nc-state-fair-and-lenovo-center/)). This is the strongest observed evidence of crowd spill in the region.
2. **Shared roads.** West Raleigh: Edwards Mill, Trinity, Blue Ridge, Wade, I-40/I-440. Downtown Durham: NC 147. Chapel Hill: US 15-501 and NC 54. No evidence was found of large-event spill *between* these corridors.
3. **Shared audiences.** Hurricanes and NC State basketball share V01; Wolfpack fans span V01/V02/V16; fair audiences are statewide (68% within 100 miles; Greenville-East, Triad, Fayetteville and Charlotte DMAs in the top five, [NCDA](https://www.ncagr.gov/ncsf-nc-state-fair-fairgoer-insights-report/open)).
4. **Correct overlap arithmetic for E03.** A fair day is a gate count spread over 9 a.m.–midnight, not a simultaneous crowd; only people present at the same time should be added to a concurrent arena crowd. No source gives hourly fair occupancy.

---

## 7. Regional conclusion

### 7.1 Recommended existing city type: `sprawl`

The evidence describes a car-access region: every major venue except the UNC/Duke campus rooms and downtown amphitheatre/ballpark sits on large surface lots by a freeway; no venue has rail access; event transit is limited to park-and-ride shuttles that start with a car trip; and the one observed transit count (fair rail) is a fraction of one percent. `hub` would be defensible only if the app's spill behaviour is meant to model a single dense centre, which the Triangle lacks; its documented spill is concentrated in one suburban cluster.

**Strongest contrary evidence:**
- Campus venues (V03–V07, V16) plausibly have 20–30% non-car attendance from students and walkable college towns; Orange County's commute transit share (4.2%) is several times the state's (background only).
- Downtown Durham (V08/V09) and downtown Raleigh (V11/V12, E02) have meaningful walk-up audiences.
- Even so, none approaches the `transit` default of 0.40.

### 7.2 Weighted car shares (estimated)

**Capacity-weighted, all fixed venues (largest non-overlapping configuration per venue, each counted once):** V02 56,919; V03 50,500; V07 35,018; V04 21,000 (conservative); V10 20,601; V01 18,680 (hockey); V08 10,000; V14 10,000; V06 9,314; V05 8,010; V15 7,610; V13 7,000; V11 6,000; V16 5,500; V09 2,712. Total capacity 268,864. Sum of capacity × recommended share ≈ 230,854. **Weighted car share ≈ 0.86.** V12 (not open) and V17 (edge, unverified) excluded.

**Excluding UNC and Duke campus venues (V03–V07):** capacity 145,022, weighted car ≈ 133,186 → **≈ 0.92**.

**Typical-attendance weighting:** not defensible across the set — typical attendance is published for very few venues. Partial evidence: Lenovo Center averages roughly 10,000 guests per event (derived from 1.5M/150); NCFC averaged 2,550 per game in 2025 before its hiatus ([ESPN](https://africa.espn.com/football/story/_/id/46846918/north-carolina-fc-leaves-usl-championship-join-usl-d1-2028)). Sensitivity: adding the fair's *average day* (946,811 ÷ 11 ≈ 86,074 visits) at 0.95 to the capacity-weighted set gives ≈ 0.88. This uses a per-day gate count, not a simultaneous crowd, and should not be summed with arena crowds.

**Do huge outlying venues obscure the downtown pattern?** Partly the reverse: the two biggest rooms are Carter–Finley (suburban, high car) and Kenan (campus, lower car). Kenan and the Duke venues pull the weighted figure down toward 0.85; the suburban West Raleigh, Cary and Walnut Creek venues pull it up. Downtown venues are small (≤10,000) and do not change the regional answer.

**Assessment of the current fallback:** 0.85 sits at the low end of the weighted estimates (0.86–0.92). It is probably slightly low for suburban venues and slightly high for campus venues — which is why venue-specific overrides for V03–V07 and V16 matter more than the city type.

---

## 8. Required conclusions

### 8.1 Recommended city type and rationale

**`sprawl`.** Car-dominant access at nearly every large venue; no rail; event transit mostly park-and-ride (car-involved); rail at the fair under 0.5%. Strongest contrary evidence: walkable, fare-free-transit campus venues at UNC and Duke, and downtown walk-up audiences in Durham and Raleigh — real, but nowhere near the 0.40 `transit` assumption.

### 8.2 Car-share values keyed to rows

| Category | Rows and values |
|---|---|
| Measured | **None.** |
| Projected | **None** for the Triangle (Philadelphia comparison is a non-local projection, unused). |
| Estimated | V01 0.95 (hockey) / 0.96 (concert); V02 0.91; V03 0.75; V04 0.80; V05 0.75; V06 0.70; V07 0.87; V08 0.85; V09 0.88; V10 0.97; V11 0.85; V12 provisional 0.85; V13 0.96; V14 0.96; V15 0.95; V16 0.75; V17 0.98; E01 0.95; E02 0.85 |
| Unknown → `sprawl` fallback 0.85 | E04; any unverified theatre or convention row (section 9) |

### 8.3 Boundary recommendation and inconsistencies between briefs

- **Boundary:** Wake + Durham + Orange as the core app metro; Johnston, Franklin, Chatham, Granville, Person as outer audience counties inside it; Harnett, Lee, Vance as CSA edge, excluded; Charlotte, Triad and Fayetteville separate. Edge municipalities in section 2.3.
- **Inconsistencies:** (1) the companion venue answer was unavailable, so row IDs here are independent and must be mapped; (2) "WakeMed Soccer Park" is the complex name — the stadium is First Horizon Stadium at WakeMed Soccer Park; (3) Red Hat Amphitheater is two rows (original site through Oct 2026; new site from 2027); (4) the brief's four-city starting area omits the outer MSA counties that OMB includes.

### 8.4 Data gaps, limitations, conflicts and access issues

**Gaps:** no measured mode split for any Triangle venue/event; no published Tar Heel Express, GoRaleigh fair shuttle or GoDurham fair ridership; no total parking space counts for Lenovo/Carter–Finley, Kenan, Duke, Koka Booth or First Horizon Stadium; whether a 2026 Dix Park successor festival took place and its operations; NC State and Duke game-day shuttle details; typical attendance for most venues. **Unverified 1,000+ rooms (coverage gap):** Martin Marietta Center (Memorial Auditorium and other halls), Carolina Theatre (Durham), UNC Memorial Hall, Duke's Page Auditorium, Raleigh and Durham convention centers, The Ritz, Cary Arts Center; major races (e.g., Tar Heel 10 Miler) and other festivals (Hopscotch, Brewgaloo) not researched.

**Model limitations:** `sprawl` and `hub` share the same 0.85 car default, so the choice mainly changes spill behaviour; the strongest spill evidence is intra-cluster (West Raleigh), not regional. Gate counts are visits, not unique people or simultaneous crowds.

**Source conflicts:** Carter–Finley 56,919 vs. 57,583 vs. 58,000; Wallace Wade 35,018 (2024–) vs. older 40,004 pages; Coastal CU 20,601 vs. 20,500 vs. 20,000; THX fare $10 vs. $5 round trip and differing start times; Red Hat ~6,000 now vs. "over 6,500" target; New Bern BRT completion end-2028 vs. spring 2030; convention center expansion 2028 vs. 2029; GoRaleigh fair park-and-ride site changed each year (Triangle Town Center 2024 per [ABC11](https://abc11.com/post/events-snarl-traffic-around-lenovo-center-raleigh/15445210/), Garner 2025, Dix Park 2026).

**Access:** no source required login or bypass. Commute shares come from a secondary ACS aggregator; verify against data.census.gov tables S0801/B08301. Some figures rely on Wikipedia or Stadium Journey and are flagged as secondary.

### 8.5 Confirmed and proposed changes through 2028

| Change | Status | Date(s) | Re-check |
|---|---|---|---|
| 2026 N.C. State Fair, Oct 15–25, GoRaleigh park-and-ride moved to Dix Park | Scheduled | Oct 15–25, 2026 ([ABC11](https://abc11.com/amp/post/nc-2025-state-fair-attendance-hits-almost-950k-dropping-slightly-2024/18077537/); [NCDA](https://www.ncagr.gov/divisions/nc-state-fair/plan-your-visit/getting-here-parking)) | Early Nov 2026 (final attendance) |
| Red Hat Amphitheater final season at original site; new site opens | Scheduled / under construction | Old site closes late Oct 2026; new opens spring 2027 ([Visit Raleigh](https://www.visitraleigh.com/plan-a-trip/visitraleigh-insider-blog/post/red-hat-amphitheater-venue-raleigh-schedule-new-location-2027/); [ABC11](https://abc11.com/amp/post/red-hat-amphitheater-nc-raleigh-leaders-marked-major-downtown-development-project-steel-beam-topping-ceremony/19176378/)) | Mar 2027 |
| Raleigh Convention Center expansion | Funded (>$387M package) | Opening 2029 per 2026 source; 2028 per 2024 source ([WRAL](https://www.wral.com/story/21449323/)) | Mid-2027 |
| Lenovo Center renovation | Under way | Completion targeted Dec 2027 ([Raleigh Magazine](https://raleighmag.com/2025/06/lenovo-center-district-development-project/)) | Jan 2027, Jan 2028 |
| Lenovo district Phase 1A: two decks (733 + 1,062 spaces), 4,300-seat Live Nation venue | Planned; garage groundbreaking was targeted Dec 2025 ([WRAL](https://www.wral.com/story/21684409/)) | Not confirmed in this pass | Jan 2027 |
| NCFC (men) hiatus; application to USL Division One with a new Raleigh stadium (15,000-seat minimum per USL) | Hiatus confirmed; stadium is a proposal | 2026–27 hiatus; 2028 target ([ABC11](https://abc11.com/amp/post/usl-division-1-north-carolina-football-club-suspending-operations-hopes-going-new-league/18112560/)) | Mid-2027 |
| Wake BRT New Bern Ave | Under construction | End-2028 per Oct 2025 city news ([Raleigh](https://raleighnc.gov/government/news/raleigh-city-council-awards-second-construction-contract-wake-brt-new-bern-avenue)) vs. spring 2030 per Sept 2026 project map ([StoryMap](https://storymaps.arcgis.com/stories/b2bf35d4a90e4b818f350d6021396b3c)) | Apr 2027 |
| Wake BRT Southern (to Garner) / Western (to Cary) | In design; Western construction anticipated 2030 ([Raleigh](https://raleighnc.gov/projects/wake-brt-western-design-and-construction)) | Not before 2028 | 2027 |
| Chapel Hill North–South BRT | Partly funded; construction 2027, service 2029 targeted ([Town of Chapel Hill](https://townofchapelhill.org/government/departments-services/transit/nsbrt)) | Not before 2028 | Mid-2027 |
| Greater Triangle commuter rail | Proposal/study only ([GoTriangle feasibility release](https://www.goforwardnc.org/?p=776)) | No funded opening date found | 2027 |
| Dix Park spring festival successor (four-year agreement from 2026) | Agreement announced; 2026 edition unverified ([Spectrum](https://spectrumlocalnews.com/nc/charlotte/news/2025/04/04/dreamville-festival-is-ending-but-the-music-is-staying-behind)) | Each April 2026–2029 | Feb 2027 |

None of the transit projects scheduled through 2028 adds rail or event-scale transit to any major venue, so no change before 2029 would argue for moving off `sprawl`.
