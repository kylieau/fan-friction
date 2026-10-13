# St. Louis event-travel evidence and city-type assessment (Fan/Friction Gridlock)

**Research date:** Monday, October 12, 2026. All sources were public and accessed on this date. Re-check dates are given in §8.5.

**Scope reminder.** This assesses the three existing settings only — `sprawl` (car share 0.85), `hub` (0.85) and `transit` (0.40) — against public evidence of how people reach St. Louis event venues. It proposes no new constants, no distance rules and no hand flags.

---

## 1. Bottom line

- **Recommended existing city type: `hub`.** No St. Louis venue has a published, measured event mode split. Every defensible estimate puts car-involved travel at roughly 0.79–0.97, so `transit` (0.40) is clearly wrong and the fallback car share is the same whichever of `sprawl`/`hub` is chosen. The choice therefore turns on spill: four large downtown rooms sit on one light-rail spine and share garages, MetroLink stations and approach roads, and Metro itself plans for overlapping exits (details in §6). That clustered core is better described by "in between" than by pure `sprawl`.
- **Strongest contrary evidence:** the region's commuting is among the most car-reliant in the U.S. (73.7% drive alone, 8.3% carpool, 1.7% transit in the 2024 ACS for the St. Louis MO-IL metro, [newgeography table of ACS 2024 1-year data](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access)), and the biggest single crowds outside downtown (NASCAR at Madison, Ill.; Maryland Heights amphitheatre; St. Charles arena) are almost entirely car-borne. If the app's `hub` spill materially exceeds what a clustered-but-car-heavy downtown produces, `sprawl` is the fallback alternative.
- **Weighted car-involved share (estimates, §7):** capacity-weighted ≈ **0.90** across ten fixed rooms (downtown/Forest Park core ≈ 0.86; outlying ≈ 0.96); typical-attendance-weighted ≈ **0.85** for four downtown tenants, ≈ **0.90** when the NASCAR race is added.

---

## 2. Evidence standard and labels used in this answer

| Label | Meaning |
|---|---|
| **Measured** | An observed count or survey of attendees at this venue/event. **None was found for any St. Louis venue.** |
| **Projected** | A planning forecast for a venue (none located for St. Louis venues; one out-of-region projection is used only as a comparator). |
| **Estimated** | This answer's transparent estimate from local evidence (parking supply, transit operations, attendance) plus a stated comparator. Ranges are wide on purpose. |
| **Background** | Ordinary commuting or park-visit data. Never used as an event share. |

**Car-involved rule (as the brief requires).** A person who drives to a MetroLink Park-Ride lot or a remote shuttle lot and then rides transit is counted as car-involved. In the splits below, transit riders are shown as a separate column, and the recommended car-share value adds the assumed driven-access portion of those riders back in. Because no St. Louis survey of event riders' access mode exists, this answer assumes **50% of event MetroLink riders drove to a Park-Ride lot (range 30–70%)**. The basis is that Metro's own event messaging is built around free Park-Ride lots — 21 lots per [Metro's sports page](https://www.metrostlouis.org/sports/), 24 per the [Cardinals' transportation page](https://www.mlb.com/cardinals/ballpark/transportation/rideshare), with "nearly 10,000" free spaces cited in the [MVC's Enterprise Center guide](https://mvc-sports.com/sports/2017/5/12/ARCH_0512173814.aspx) — and that the largest lots are big (North Hanley about 1,700, Fairview Heights about 850, Emerson Park about 800 spaces per [Citizens for Modern Transit](https://cmt-stl.org/take-metro-to-fair-st-louis)). The lot count differs by source (21 vs 24); both are reported.

**Recommended value formula:** car-involved = direct car/carpool/rideshare + (transit share × driven-access fraction) + driven-to-shuttle share.

---

## 3. Background (not event travel)

| Indicator | Value | Source | Use here |
|---|---|---|---|
| St. Louis MO-IL metro, commute mode 2024 | Drive alone 73.7%, carpool 8.3%, WFH 13.3%, transit 1.7%, bike 0.3%, taxi 1.1%, walk 1.6% | [newgeography, ACS 2024 1-yr](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access) | Background only. Metro ranks 15th-highest of 57 large metros for drive-alone share. |
| City of St. Louis transit commuting, 2024 | 7.9% (9.4% in 2015) | [Wikipedia list from ACS](https://en.wikipedia.org/wiki/List_of_U.S._cities_with_high_transit_ridership) | Background; shows city residents use transit far more than the metro average. |
| Forest Park visitors arriving by car | 88% (all visits, not events) | [WashU *Common Reader* essay](https://commonreader.wustl.edu/gate-debate-forest-park-the-power-of-peripheries/) (secondary; original study not located) | Background for The Muny and Forest Park festivals. Daily visits, not attendees. |
| Forest Park car arrivals via Hampton Ave (2008 traffic study) | 60% | [NextSTL summary of 2016 mobility study](https://nextstl.com/2016/08/forest-park-connectivity-and-mobility-study/) | Approach concentration, not mode share. |
| Comparator: Minneapolis Twins (Target Field) | Light rail about 14% of Twins fans (Metro Transit estimate); total transit 25% per MnDOT; about 2.5 fans per car (team estimate) | [CBS/WCCO](https://www.cbsnews.com/minnesota/news/minn-sports-teams-counting-on-mass-transit-to-get-fans-to-games/), [MnDOT](https://www.dot.state.mn.us/abcramps/projects/target-field.html), [MPR 2010](https://www.mprnews.org/story/2010/03/26/targetfield-traffic) | Comparator for downtown stadiums with light rail at the gate. Twin Cities metro transit commuting is 2.1% vs St. Louis 1.7% ([same ACS table](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access)), so it is a reasonably similar market. The two Minnesota figures (14% vs 25%) differ in definition (light rail only vs all transit). |
| Comparator projection: Minnesota United (St. Paul) | Team expected half of fans by transit (projection) | [CBS/WCCO](https://www.cbsnews.com/minnesota/news/minn-sports-teams-counting-on-mass-transit-to-get-fans-to-games/) | Projection only; treated as an upper-bound signal for soccer, not used directly. |

**Why the comparator matters.** Event transit shares in a car-heavy metro can be several times the commute share when rail stops at the gate and parking is priced. That is why downtown St. Louis estimates below assume transit well above 1.7%, but well below the `transit` setting.

---

## 4. Venue and event inventory (identity, configuration, capacity)

The companion venue answer was **not available** to this research, so rooms were enumerated independently. Row IDs below are this answer's own; map them to the companion rows when available. Mutually exclusive configurations of one room carry the same room code with a suffix and are never added together.

| Row | Verified current name | Municipality / county | Setup represented | Season / date represented | Capacity used | Identity notes and sources |
|---|---|---|---|---|---|---|
| V01 | Busch Stadium | St. Louis city | Cardinals MLB regular season | 2025 season | 46,000 (KMOV) — conflicts with about 45,500 | [KMOV via Matrix Midwest](https://www.matrixmidwest.com/2025/04/01/cardinals-attendance-during-angels-game-was-lowest-stadium-history/); [baseballbiographies](https://www.baseballbiographies.com/busch-stadium-travel-guide/). Concerts at Busch not assessed. |
| V02 | Energizer Park | St. Louis city (Downtown West) | St. Louis CITY SC MLS | 2025 season | 22,423 | Renamed from CityPark effective Jan 1, 2025; earlier Centene Stadium (Feb–Oct 2022) — [Wikipedia](https://en.wikipedia.org/wiki/Energizer_Park), [MLS](https://www.mlssoccer.com/news/st-louis-city-sc-stadium-renamed-energizer-park). The "Energizer Park alias lead" in the brief is in fact the current name. Address given as 2100 Market St. by [Stadium Journey](https://www.stadiumjourney.com/stadiums/citypark-st-louis-city-sc) and 2019 Market St. by [MeetStadium](https://meetstadium.com/stadiums/energizer-park/) (minor conflict). |
| V03a | Enterprise Center | St. Louis city | Blues NHL | Season (year of average unclear) | 18,096 hockey | [Wikipedia](https://en.wikipedia.org/wiki/Enterprise_Center); Stadium Journey lists 19,022 ([page](https://www.stadiumjourney.com/stadiums/enterprise-center-st-louis-blues)) — conflict. |
| V03b | Enterprise Center | St. Louis city | Concert configuration | Any | 22,000 | [Wikipedia](https://en.wikipedia.org/wiki/Enterprise_Center). Mutually exclusive with V03a. |
| V04a | The Dome at America's Center | St. Louis city | Battlehawks UFL (spring) | 2026 regular season | 67,000 room; 2026 crowds 18,563–31,191 | [Pollstar](https://news.pollstar.com/2024/04/25/dome-at-americas-center-gears-up-for-ufl-championship/); [2026 season results](https://en.wikipedia.org/wiki/2026_St._Louis_Battlehawks_season). |
| V04b | The Dome at America's Center | St. Louis city | Full stadium (concert/major event) | Occasional | 67,000 | [Pollstar](https://news.pollstar.com/2024/04/25/dome-at-americas-center-gears-up-for-ufl-championship/). Mutually exclusive with V04a. |
| V04c | Ferrara Theatre (America's Center) | St. Louis city | Fixed-seat theatre | Any | 1,411 | [Cvent listing](https://www-eur.cvent.com/venues/st-louis/9/america-s-center/venue-e3ce2326-ade2-4706-96a9-854fc3ad122f). Below 5,000; convention halls are not fixed-capacity rooms. |
| V05 | Chaifetz Arena (Saint Louis University) | St. Louis city (Midtown) | SLU basketball / concerts | Winter season | 10,600 | [SLU Athletics](https://slubillikens.com/facilities/chaifetz-arena-basketball-/6). |
| V06 | The Muny | St. Louis city (Forest Park) | Outdoor musical theatre | Mid-June to mid-August | about 11,000 incl. about 1,450 free seats | [Expedia attraction page](https://www.expedia.com/The-Muny-Theater.d6064093.Vacation-Attraction) (secondary; official capacity page not located). |
| V07 | Hollywood Casino Amphitheatre | Maryland Heights (St. Louis County) | Outdoor concerts (pavilion + lawn) | Summer | 20,000 | [Ticketmaster venue guide](https://blog.ticketmaster.com/step-inside-hollywood-casino-amphitheater-st-louis-mo/). |
| V08 | St. Louis Music Park (at Centene Ice per 2020 report) | Maryland Heights | Outdoor concerts | Summer | 7,000 | [KSDK 2020](https://ksdk.com/article/news/health/coronavirus/new-covid-19-restriction-rollbacks-st-louis-county/63-6b276c74-7665-4112-844d-631d62980c73). **Current name and capacity not re-verified.** |
| V09 | Family Arena | St. Charles (St. Charles County) | Concerts / events | Year-round | 10,000 in-the-round; 7,750 end-stage; 3,800 theatre | [Venue Coalition](https://venuecoalition.com/family-arena/). Configurations mutually exclusive; 10,000 used for weighting. |
| V10 | World Wide Technology Raceway | Madison, Ill. (Madison County) | NASCAR Cup "Enjoy Illinois 300" | Sun., Sept. 13, 2026 (sold out) | 57,000 grandstand seats, plus 1,200+ campsites | [WWTR 2023 release](https://wwtraceway.com/wwtr-announces-second-consecutive-sellout-of-enjoy-illinois-300-presented-by-ticketsmarter-nascar-cup-series-race/); [Jayski 2026 sellout](https://www.jayski.com/2026/09/13/world-wide-technology-raceway-announces-fifth-consecutive-cup-sellout/). Other listings say 58,000 ([Rivers & Routes](https://www.riversandroutes.com/directory/world-wide-technology-raceway-sports-venues/)) or "nearly 80,000" ([Outdoorsy](https://www.outdoorsy.com/guide/world-wide-technology-raceway), low reliability) — conflict preserved; the track's own 57,000 seat figure is used. |
| V11 | First Community Arena at Vadalabene Center (SIUE) | Edwardsville, Ill. | SIUE basketball | Winter | slightly above 4,000 | [SIUE Athletics](https://siuecougars.com/facilities/first-community-arena/1). Below 5,000. |
| E01 | Fair Saint Louis / "Celebrate Saint Louis" | St. Louis city (Gateway Arch grounds) | Open-site Fourth of July festival, free | July 3–4, 2026 (per listing) | Not a fixed room; 300,000 predicted (multi-day total) | [PredictHQ listing](https://www.predicthq.com/major-events/top-events/fair-saint-louis) (commercial prediction, low reliability). Returned to the Arch in 2018 after four years in Forest Park ([KTRS](https://ktrs.com/?p=62791)). |
| E02 | Downtown civic mega-events (parades, championship rallies) | St. Louis city | Open-site | Irregular | Not a fixed room | Ridership evidence only (§5.3). |

**Coverage gaps.** Fixed rooms between 1,000 and 5,000 were not individually verified (for example the Fabulous Fox Theatre, Stifel Theatre, The Pageant, university theatres, Saint Louis University's soccer stadium). Stifel Theatre is confirmed as an event venue only through Metro's event bus detours ([Metro rider alerts](https://www.metrostlouis.org/rider-alerts/)). Local ticketing platform per venue and the app's feed coverage were **not assessed** because the feed definitions were not provided; the only confirmations gathered are Ticketmaster listings for Chaifetz Arena ([Ticketmaster](https://www.ticketmaster.com/chaifetz-arena-billets-saint-louis/venue/50351)) and WWTR selling tickets and parking only in advance online ([WWTR 2022](https://wwtraceway.com/thank-you-race-fans-our-inaugural-nascar-cup-series-race-is-sold-out/)).

---

## 5. Venue and event travel tables

### 5.1 Person mode split (all values are **estimated**; none is measured)

Shares are of **people attending**, not vehicles, ticket buyers or boardings. "Transit" combines MetroLink and MetroBus because no source separates them for events. Every row sums to 100%; "unclassified" is 0 because each estimate assigns all attendees, but the uncertainty is carried in the ranges.

| Row | Direct car / carpool / rideshare | Public bus + rail | Dedicated event shuttle | Walk / bike / other | Unclassified | Sum | **Recommended car-involved share (range)** | Confidence |
|---|---|---|---|---|---|---|---|---|
| V01 Busch – Cardinals | 78% (68–86) | 15% (8–22) | 3% (1–5) | 4% (2–8) | 0% | 100% | **0.88 (0.78–0.94)** | Low–moderate |
| V02 Energizer Park – CITY SC | 68% (55–78) | 22% (12–32) | 0% | 10% (5–15) | 0% | 100% | **0.79 (0.65–0.86)** | Low |
| V03a/b Enterprise Center – Blues / concerts | 78% (68–86) | 14% (8–20) | 0% | 8% (4–12) | 0% | 100% | **0.85 (0.74–0.92)** | Low (lower for concerts) |
| V04a/b The Dome – Battlehawks / full events | 82% (72–90) | 10% (5–16) | 0% | 8% (4–12) | 0% | 100% | **0.87 (0.77–0.94)** | Low (very low for V04b) |
| V05 Chaifetz Arena | 85% (75–92) | 7% (3–12) | 0% | 8% (4–12) | 0% | 100% | **0.88 (0.78–0.94)** | Low |
| V06 The Muny | 82% (72–90) | 8% (4–14), incl. free shuttle from MetroLink | (included in transit) | 10% (5–15) | 0% | 100% | **0.86 (0.76–0.93)** | Low |
| V07 Hollywood Casino Amphitheatre | 96% (90–99) | 1% (0–3) | 0% | 3% (1–7) | 0% | 100% | **0.96 (0.90–0.99)** | Moderate |
| V08 St. Louis Music Park | 95% (88–99) | 1% (0–3) | 0% | 4% (1–9) | 0% | 100% | **0.95 (0.88–0.99)** | Low (identity unverified) |
| V09 Family Arena | 95% (88–99) | 1% (0–3) | 0% | 4% (1–9) | 0% | 100% | **0.95 (0.88–0.99)** | Moderate |
| V10 WWTR – NASCAR Cup | 90% (82–95), incl. RVs | 3% (1–6) via MetroLink-connected shuttle | 6% (3–10) remote-lot shuttles | 1% (0–2) | 0% | 100% | **0.97 (0.92–0.99)** | Moderate |
| V11 SIUE arena | 95% (88–99) | 1% (0–3) | 0% | 4% (1–9) | 0% | 100% | **0.95 (0.88–0.99)** | Low (below 5,000) |
| E01 Fair Saint Louis (Arch grounds) | 60% (45–75) | 25% (12–38) | 0% | 15% (8–22) | 0% | 100% | **0.72 (0.56–0.83)** | Very low |

**Arithmetic for the recommended values** (car-involved = direct + transit × 0.5 + driven-to-shuttle; ranges recombine the low/high ends with 30%/70% driven access):

- V01: 78 + 15 × 0.5 + 3 = 88.5 → 0.88. Redbird Express riders are counted as driven-to-shuttle because they park at a Belleville lot ([KMOX 2026](https://www.audacy.com/kmox/news/local/metro-east-s-redbird-bus-service-changes-departure-spot-for-2026-cardinals-season)).
- V02: 68 + 22 × 0.5 = 79 → 0.79. V03: 78 + 7 = 85. V04: 82 + 5 = 87. V05: 85 + 3.5 = 88.5 → 0.88. V06: 82 + 4 = 86.
- V10: 90 + 6 + 3 × 0.6 = 97.8 → 0.97 (the 0.6 reflects that the Emerson Park shuttle stop is itself a free Park-Ride lot, per [Metro 2024](https://www.metrostlouis.org/news-release/catch-a-free-shuttle-to-nascars-enjoy-illinois-300-race-at-world-wide-technology-raceway-this-weekend/)).
- E01: 60 + 25 × 0.5 = 72.5 → 0.72.

**If the app's car share should mean "cars arriving at the venue area" instead of "any car involvement",** use the direct-car column (for example 0.78 for Busch, 0.68 for Energizer Park). That reading is not what the brief specifies, so it is shown only as context; it would still not approach the `transit` value of 0.40.

### 5.2 Basis for each estimate (method, evidence type and date)

| Row | Key local evidence | Comparator / assumption | Why the range is wide |
|---|---|---|---|
| V01 | Stadium MetroLink station sits across from the ballpark; free Park-Ride lots and a $5 day pass are promoted ([Cardinals transport page](https://www.mlb.com/cardinals/ballpark/transportation/rideshare)). Redbird Express peaks at about 2,000 riders on Opening Day or Cubs games ([2023 report](https://www.aol.com/redbird-express-returns-2023-cardinals-190816848.html)), about 4.3% of a 46,000 sellout. 2025 average crowd 27,777 ([Wikipedia](https://en.wikipedia.org/wiki/2025_St._Louis_Cardinals_season)). | Twins light rail about 14%, total transit about 25% (MnDOT) — St. Louis set lower (15%) because the regional commute transit share is lower and parking is plentiful. | No ridership per game, no stadium parking-supply figure found, attendance fell sharply in 2025 (lowest since 1995 per [SI](https://www.si.com/mlb/cardinals/st-louis-cardinals-news/bill-dewitt-iii-drops-message-for-cardinals-fans-on-attendance-woes-pat3)). |
| V02 | Union Station MetroLink station is a short walk; the club built 173 bike spaces and runs "Ride to the Match" promotions ([CITY SC](https://www.stlcitysc.com/news/energizer-park-continues-to-set-standard-for-sustainable-sports-venues), [CMT](https://cmt-stl.org/ride-to-the-match-with-cmt/)). Planned on-site parking was a modest 700–900 spaces ([Post-Dispatch, paywalled](https://www.stltoday.com/news/local/metro/mls-stadium-will-go-north-of-market-street-include-practice/article_c452cf5a-cee8-56a8-b50e-1cbdde830bb4.html)); a fan guide reports a $40 matchday rate at the club garage ([STL Soccer News](https://stlsoccernews.com/away-fans-guide/)). Every 2025 match at capacity ([MLS attendance table](https://en.wikipedia.org/wiki/Major_League_Soccer_attendance)). | Twins/Vikings light-rail share (14–27%); Minnesota United projection (50%) treated as an upper signal only. | Built parking supply not verified; no ridership data; free street parking on Sundays and evenings per the fan guide pulls the other way. |
| V03 | Civic Center MetroLink station across the street; about 6,500 spaces within 1,800 ft including a 1,270-car garage ([MVC guide, 2017](https://mvc-sports.com/sports/2017/5/12/ARCH_0512173814.aspx)). Capacity check: 6,500 spaces × 2.5 people per car (Twins figure, cross-city assumption) ≈ 16,250 people ≈ 90% of an 18,096 crowd — but those spaces are shared with Union Station and downtown users, and more garages lie beyond 1,800 ft. This is a supply check, not a mode share. | Same comparator, slightly below Busch for transit because winter weeknight games are less walk/transit-friendly. | Concerts draw a different, more regional crowd (unmeasured). |
| V04 | Convention Center MetroLink station ([Metro sports page](https://www.metrostlouis.org/sports/)). Team president said tailgating outside the Dome is central to the football culture ([STLPR Feb 2026](https://www.stlpr.org/sports/2026-02-23/new-ufl-owner-battlehawks-ditching-dome-energizer-park)), which implies heavy car arrival. | Downtown stadium comparator, transit set lower than Busch. | Full-stadium events (V04b) are rare and unobserved. |
| V05 | Adjacent Olive/Compton garage is the designated event parking ([Ticketmaster](https://www.ticketmaster.com/chaifetz-arena-billets-saint-louis/venue/50351)); $15 prepaid / $20 day-of for basketball ([Stadium Journey](https://stadiumjourney.com/stadiums/chaifetz-arena-s765)). Nearest MetroLink station and walking distance **not verified** in sources gathered. | On-campus student walk share assumed in "other". | Transit access unverified. |
| V06 | Free parking around the theatre and on surrounding park streets; a free all-electric shuttle runs from the DeBaliviere MetroLink station from 7 p.m. on show nights ([Muny 2025 subscriber newsletter](https://muny.org/wp-content/uploads/2025/05/SUBSCRIBER-NEWSLETTER-2025_NOCrops.pdf)). Forest Park background car share 88% (non-event). | Free parking pushes car share up; free seats and adjacent neighbourhoods push walk-ups up. | No attendance or shuttle ridership published. |
| V07 | Parking is included with each ticket ([Ticketmaster facts](https://blog.ticketmaster.com/?p=40290)); six on-site lots; one mile west of the I-270/I-70 interchange ([Ticketmaster guide](https://blog.ticketmaster.com/step-inside-hollywood-casino-amphitheater-st-louis-mo/)). A historic Post-Dispatch caption reports 3,400 cars filling half the lots ([stltoday gallery](https://www.stltoday.com/news/local/history/collection_17aaebdd-b23f-5be4-966b-b379b86f774d.html)), implying about 6,800 car spaces; at 2.5 people per car that serves about 17,000 people (85% of 20,000) before rideshare and buses. Caption date not shown; vehicles ≠ people. | None needed. | Lot count may have changed. |
| V08, V09, V11 | Suburban sites with no rail; SIUE lists free parking ([Rivers & Routes](https://www.riversandroutes.com/directory/vadalabene-center-siue-route-66)). | Same as V07. | Identity (V08) and rideshare share unverified. |
| V10 | General parking included with each ticket; rideshare drop at a single address; Madison County Transit and St. Clair County Transit District run bus service from off-site lots; free shuttle from Emerson Park ([WWTR 2025 traffic release](https://wwtraceway.com/enjoy-illinois-300-sept-5-7-traffic-and-travel-impacts/)). 1,200+ campsites ([WWTR](https://wwtraceway.com/wwtr-announces-second-consecutive-sellout-of-enjoy-illinois-300-presented-by-ticketsmarter-nascar-cup-series-race/)); a 2024 report counted about 380 camper spots west of the track and 58 infield ([WKRN](https://digital-release.wkrn.com/?p=1802653)) — the difference is likely definitional (campsites vs RV spots). | Shuttle shares assumed; no ridership published by either transit district. | Campers arrive days early, spreading road load across the weekend. |
| E01 | Downtown open site with several MetroLink stations; Metro adds trains each evening and staffs stations; Arch Parking Facility available ([Metro](https://metrostlouis.org/news-release/metro-transit-service-for-fair-saint-louis)). | Downtown stadium comparator raised for a free, family festival with fireworks exits. | Multi-day total (300,000 predicted, commercial) is not a simultaneous crowd; 2014 organizers expected 35,000–50,000 per day in Forest Park ([STLPR](https://news.stlpublicradio.org/post/fair-st-louis-organizers-tout-plan-new-venue)). |

### 5.3 Ridership inference: what the published counts can and cannot support

| Event | Raw count | Baseline subtraction | Denominator | Result |
|---|---|---|---|---|
| Blues Stanley Cup parade, Sat. June 15, 2019 (E02) | 100,000+ MetroLink boardings ([Progressive Railroading](https://www.progressiverailroading.com/passenger_rail/news.aspx?id=57850)) | Typical June Saturday about 25,000 → excess ≥ 75,000 boardings | No official crowd count in sources gathered | Each round trip is at least 2 boardings (more with transfers), so ≤ about 37,500 distinct event riders. **No share can be computed.** Not a ticketed event. |
| 2011 World Series Game 7 | 86,000+ boardings ([Metro](https://www.metrostlouis.org/news-release/metrolink-saw-record-number-of-boardings-on-stanley-cup-championship-parade-and-rally-day/)) | 2011 weekday baseline not found | Busch capacity ≈ 46,000, but downtown watch crowds also rode | Event riders ≈ (86,000 − baseline) ÷ 2 at most; **unknown** without a sourced baseline, and riders include non-ticket holders. |
| Redbird Express (Cardinals) | Up to about 2,000 riders on peak games ([2023](https://www.aol.com/redbird-express-returns-2023-cardinals-190816848.html)) | Not needed (dedicated service) | ≈ 46,000 sellout | ≈ 4.3% of a sellout on peak days; riders drove to the pickup lot → **car-involved**. |

### 5.4 Parking, operations, access constraints and shared crowds

| Row | Parking supply and remote arrangements | Event operations, route/closure changes, start/end service | Access constraints and crowds sharing approaches |
|---|---|---|---|
| V01 | Stadium parking supply not found (gap). Park-Ride via MetroLink; Redbird Express from Belleville Transit Center on Friday/Saturday home games ([KMOX 2026](https://www.audacy.com/kmox/news/local/metro-east-s-redbird-bus-service-changes-departure-spot-for-2026-cardinals-season)). | Rideshare drop-offs on 8th St. and Broadway, pickups on Broadway ([Cardinals](https://www.mlb.com/cardinals/ballpark/transportation/rideshare)). MetroLink normally runs to midnight and keeps running until the downtown platform clears if a game runs late ([Cardinals gameday guide](https://www.mlb.com/cardinals/ballpark/information/guide/gameday)). Redbird leaves 60–90 min before first pitch; returns up to 45 min after the final out. | Shares Stadium/Civic Center stations and the Civic Center Transit Center with V02–V04; Metro warned of larger crowds when fireworks and baseball crowds exit together ([Metro Fair release](https://metrostlouis.org/news-release/metro-transit-service-for-fair-saint-louis)). |
| V02 | Club garage plus surface lots; free street parking at certain times ([STL Soccer News](https://stlsoccernews.com/away-fans-guide/)). | Metro added security for the 2023 playoff match ([Metro](https://metrostlouis.org/news-release/ride-on-to-the-mls-cup-playoffs-on-metrolink)); no official extra-train commitment found. **Union Station tunnel single-tracking** on some weekday evenings (6 p.m. to end of service) cuts Blue Line service to Forest Park–Shrewsbury only ([Metro rider alert, Mar–Apr 2026](https://www.metrostlouis.org/rider-alert/blue-line-service-between-shrewsbury-forest-park-only-2/)). | Shares Union Station/Civic Center stations, Market St. and I-64 approaches with V03 and V01. |
| V03 | About 6,500 spaces within 1,800 ft; 1,270-car attached garage ([MVC](https://mvc-sports.com/sports/2017/5/12/ARCH_0512173814.aspx)); Union Station and lots along Clark/Spruce toward Busch ([Itinerant Fan](https://itinerantfan.com/stadium-guide/enterprise-center/)). | MetroBus routes 4, 10, 11 and 40 detour for Enterprise Center/Stifel Theatre events through Dec 31, 2026 ([Metro rider alerts](https://www.metrostlouis.org/rider-alerts/)). Same single-tracking exposure as V02. | Shares the parking pool between itself and Busch; Stifel Theatre next door. |
| V04 | Not found (gap). | Not found. | Convention traffic shares the same streets on weekdays; Dome hosts about 600,000 guests a year ([KMOV](https://www.firstalert4.com/2026/02/24/ufl-exploring-move-battlehawks-home-games-energizer-park/)). |
| V05 | Olive/Compton garage. | Not found. | I-64 corridor shared with downtown traffic. |
| V06 | Free lots and park streets; accessible-only Lower Muny Lot ([Muny newsletter](https://muny.org/wp-content/uploads/2025/05/SUBSCRIBER-NEWSLETTER-2025_NOCrops.pdf)). | Free shuttle from DeBaliviere MetroLink from 7 p.m.; the older Metro trolley returned riders for about 20 minutes after the show ([Metro 2017](https://www.metrostlouis.org/nextstop/the-muny-trolley-is-your-ticket-to-summer-shows); current return window not verified). | Shares Forest Park roads with the Zoo and museums; park draws over 15.5 million visits a year ([Forest Park Forever](https://www.forestparkforever.org/visit)). |
| V07/V08 | Six on-site lots at V07; parking bundled with tickets. | Doors 1–2 hours before shows. | Same I-70/I-270 interchange and exit 231A ([Ticketmaster](https://blog.ticketmaster.com/step-inside-hollywood-casino-amphitheater-st-louis-mo/)); casino traffic shares the approach. |
| V09/V11 | On-site. | Not found. | V09 off I-70 in St. Charles. |
| V10 | Parking adjacent and bundled with each ticket ([Speedway Digest](https://speedwaydigest.com/?p=78303)); remote lots with MCT/SCCTD shuttles, including the Gateway Convention Center Park & Ride ([SCCTD 2025](https://scctd.org/shuttle-service-available-for-sundays-enjoy-illinois-300-nascar-cup-series-event/)). | IL-203 between Bend Rd. and the interstate restricted to vehicles showing a pass, ticket or credential ([WWTR 2025](https://wwtraceway.com/enjoy-illinois-300-sept-5-7-traffic-and-travel-impacts/)). In 2024, shuttles began at 8 a.m. and the last left 30 minutes after the final concert ([Metro 2024](https://www.metrostlouis.org/news-release/catch-a-free-shuttle-to-nascars-enjoy-illinois-300-race-at-world-wide-technology-raceway-this-weekend/)); 2026 times not verified. | Fairview Heights/Washington Park MetroLink single-tracking through Dec 31, 2026 affects the Illinois Park-Ride path ([Metro rider alerts](https://www.metrostlouis.org/rider-alerts/)). |
| E01 | Arch Parking Facility plus Park-Ride lots ([Metro](https://metrostlouis.org/news-release/metro-transit-service-for-fair-saint-louis)). | Additional evening trains; staffed stations. Forest Park editions used 10-minute service on part of the line ([Metro 2016](https://metrostlouis.org/news-release/ride-metro-to-the-veiled-prophet-parade-in-downtown-st-louis-and-to-fair-saint-louis-in-forest-park)) and about 500 police officers ([STLPR 2014](https://www.stlpr.org/2014-06-05/fair-st-louis-in-forest-park-presents-unique-challenges-for-st-louis-police)). 2026 Arch-grounds plan not located. | Can coincide with a Cardinals home game (Metro explicitly planned for this). |

---

## 6. Clusters, shared roads and shared audiences (separate findings)

1. **Downtown spine cluster (V01–V04, E01, Stifel Theatre).** All four big rooms have their own MetroLink stop on the same two-line trunk (Stadium, Civic Center, Union Station, Convention Center per [Metro](https://www.metrostlouis.org/sports/)), share the Civic Center Transit Center bus hub, and draw on one downtown garage pool ([Itinerant Fan](https://itinerantfan.com/stadium-guide/enterprise-center/)). Overlap is real and planned for: Metro staged extra service for simultaneous fireworks and baseball exits ([Metro](https://metrostlouis.org/news-release/metro-transit-service-for-fair-saint-louis)), and MoDOT has adjusted ramps and closures around Cardinals playoff games ([Cardinals 2012](https://www.mlb.com/cardinals/news/nlds-details/c-39522988)).
2. **Maryland Heights cluster (V07, V08, casino).** Two outdoor concert venues plus a casino feed the same I-70/I-270 area.
3. **Forest Park cluster (V06, Zoo, museums).** Concentrated on a few entrances; 60% of car arrivals used Hampton Ave in a 2008 study ([NextSTL](https://nextstl.com/2016/08/forest-park-connectivity-and-mobility-study/)).
4. **Metro East (V10, V11).** WWTR is about five minutes from downtown per [Rivers & Routes](https://www.riversandroutes.com/directory/world-wide-technology-raceway-sports-venues/); race day uses Illinois-side approaches and IL-203 controls.
5. **Shared audiences.** No public data on overlapping season-ticket bases or event-goer origins was found. Not assessed.

**Do a few huge outlying venues obscure the downtown pattern?** Yes, somewhat. WWTR alone is about 21% of the capacity weight in §7, and outlying rooms average about 0.96 versus about 0.86 for the core. But even the core estimate stays near the existing 0.85 default, so the outliers do not change the type recommendation; they argue for venue-specific overrides.

---

## 7. Weighted car-involved shares (estimated)

One configuration per room; mutually exclusive configurations are not added; multi-day totals (E01) and below-5,000 rooms (V04c, V11) are excluded. These weights describe room size, not how often each room fills.

**Capacity-weighted (10 rooms):**

| Row | Configuration and capacity | Car-involved | Capacity × share |
|---|---|---|---|
| V01 | Baseball, 46,000 | 0.88 | 40,480 |
| V02 | Soccer, 22,423 | 0.79 | 17,714 |
| V03a | Hockey, 18,096 | 0.85 | 15,382 |
| V04b | Full Dome, 67,000 | 0.87 | 58,290 |
| V05 | Arena, 10,600 | 0.88 | 9,328 |
| V06 | Theatre, 11,000 | 0.86 | 9,460 |
| V07 | Amphitheatre, 20,000 | 0.96 | 19,200 |
| V08 | Outdoor, 7,000 | 0.95 | 6,650 |
| V09 | In-the-round, 10,000 | 0.95 | 9,500 |
| V10 | Grandstand, 57,000 | 0.97 | 55,290 |
| **Total** | **269,119** | | **241,294 → 0.90** |
| Core (V01–V06) | 175,119 | | 150,654 → **0.86** |
| Outlying (V07–V10) | 94,000 | | 90,640 → **0.96** |

**Typical-attendance-weighted (rows with a sourced typical crowd):**

| Row | Typical crowd used | Car-involved | Weighted |
|---|---|---|---|
| V01 | 27,777 (2025 average) — [Wikipedia](https://en.wikipedia.org/wiki/2025_St._Louis_Cardinals_season); consistent with 2,250,007 total over 81 dates ([SI](https://www.si.com/mlb/cardinals/st-louis-cardinals-news/bill-dewitt-iii-drops-message-for-cardinals-fans-on-attendance-woes-pat3)) | 0.88 | 24,444 |
| V02 | 22,423 (2025 average) — [MLS table](https://en.wikipedia.org/wiki/Major_League_Soccer_attendance) | 0.79 | 17,714 |
| V03a | 18,049 (Blues average, season year unstated) — [Stadium Journey](https://www.stadiumjourney.com/stadiums/enterprise-center-st-louis-blues) | 0.85 | 15,342 |
| V04a | 23,239 (mean of five 2026 regular-season home games: 31,191; 20,209; 18,563; 21,609; 24,621) — [Wikipedia](https://en.wikipedia.org/wiki/2026_St._Louis_Battlehawks_season) | 0.87 | 20,218 |
| **Downtown subtotal** | **91,488** | | **77,718 → 0.85** |
| V10 | 57,000 (sold-out grandstand, Sept. 13, 2026) — [Jayski](https://www.jayski.com/2026/09/13/world-wide-technology-raceway-announces-fifth-consecutive-cup-sellout/) | 0.97 | 55,290 |
| **With NASCAR** | **148,488** | | **133,008 → 0.90** |

Missing from attendance weighting: V05–V09 and E01 (no sourced typical crowds). Attendance conflicts: Cardinals 2025 average also reported as 27,581 ([Forbes via MEXC](https://www.mexc.com/news/121476)) and 28,660 mid-season ([Bleacher Nation](https://www.bleachernation.com/?p=2074723)); the full-season 27,777 is used.

---

## 8. End matter

### 8.1 Recommended existing city type and rationale; strongest contrary evidence

- **Recommendation: `hub`.** Rationale: (a) every venue estimate is car-dominant, so `transit` is rejected; (b) the downtown core's car-involved share (≈ 0.85–0.86 by either weighting) matches the existing 0.85 default, so no override of the fallback value is implied; (c) the downtown spine creates genuine shared-approach and shared-parking spill that a pure `sprawl` setting would under-represent.
- **Strongest contrary evidence:** metro commuting is 73.7% drive-alone and 1.7% transit ([ACS 2024 via newgeography](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access)); MetroLink weekday ridership is modest (about 21,800 in Q1 2026 per a secondary transit-map site, [Mapa Metro](https://mapa-metro.com/pt/estados-unidos/st-louis/st-louis-metrolink-mapa.htm); not confirmed against Metro's own reports); the largest outlying crowds are about 0.95–0.97 car-involved. This answer does not know exactly how the app computes `hub` versus `sprawl` spill; if `hub` spill assumes walking or transit interchange between crowds well beyond what four car-heavy downtown rooms produce, choose `sprawl`.
- **Venue exceptions worth overriding:** V02 Energizer Park (≈ 0.79, lower) and E01 Fair Saint Louis (≈ 0.72, very low confidence); V07–V11 (≈ 0.95–0.97, higher).

### 8.2 Car-share values keyed to rows

| Row | Value | Type | Range |
|---|---|---|---|
| V01 Busch – Cardinals | 0.88 | Estimated | 0.78–0.94 |
| V02 Energizer Park – CITY SC | 0.79 | Estimated | 0.65–0.86 |
| V03a/b Enterprise Center | 0.85 | Estimated | 0.74–0.92 |
| V04a/b The Dome | 0.87 | Estimated | 0.77–0.94 |
| V04c Ferrara Theatre | Unknown → provisional fallback 0.85 | — | — |
| V05 Chaifetz Arena | 0.88 | Estimated | 0.78–0.94 |
| V06 The Muny | 0.86 | Estimated | 0.76–0.93 |
| V07 Hollywood Casino Amphitheatre | 0.96 | Estimated | 0.90–0.99 |
| V08 St. Louis Music Park | 0.95 | Estimated | 0.88–0.99 |
| V09 Family Arena | 0.95 | Estimated | 0.88–0.99 |
| V10 WWTR – NASCAR | 0.97 | Estimated | 0.92–0.99 |
| V11 SIUE arena | 0.95 | Estimated | 0.88–0.99 |
| E01 Fair Saint Louis | 0.72 | Estimated | 0.56–0.83 |
| Unverified 1,000–5,000 rooms | Unknown → provisional fallback 0.85 | — | — |

**Measured values: none. Projected values: none for St. Louis venues.**

### 8.3 Boundary recommendation and inconsistencies between briefs

- **Recommended boundary:** the East-West Gateway planning region — St. Louis city and St. Louis, St. Charles, Jefferson and Franklin counties in Missouri; Madison, St. Clair and Monroe counties in Illinois (county list as used in [EWG's *Where We Stand*](https://www.ewgateway.org/wp-content/uploads/2018/06/wws7edno8.pdf), which also reports a 15-county MSA). Every verified 5,000+ room sits inside St. Louis city, St. Louis County, St. Charles County or Madison County, so the boundary choice does not change the venue set.
- **Edge areas to treat separately:** outer MSA counties (for example Lincoln and Warren in Missouri; Jersey, Clinton, Macoupin and Bond in Illinois) — no event audience or event travel data found for them. No public origin data for event audiences was found to refine the boundary further.
- **Inconsistencies:** (1) the brief lists Energizer Park as an "alias lead"; it is the current name. (2) The brief groups racing with "distant" destinations; WWTR is minutes from downtown in Madison County and belongs in the core. (3) The companion venue answer was not available, so row keys here are provisional. (4) Fair Saint Louis's 2026 date/location comes from a commercial listing, not the organizer.

### 8.4 Data gaps, model limitations, source conflicts, inaccessible sources

- **Gaps:** no measured event mode split for any St. Louis venue; Metro does not publish per-event ridership (only records); no Busch Stadium or Dome parking-supply figure; no access-mode survey of Park-Ride users; no shuttle ridership for WWTR or The Muny; no event-goer origin data; 1,000–5,000 rooms unverified.
- **Model limitations:** a single car share cannot separate cars that reach the venue area from cars that stop at a remote Park-Ride lot; this matters most downtown. Capacity weights ignore event frequency (81 Cardinals dates vs one Cup race). Weekday/weekend and winter/summer differences could not be quantified from St. Louis evidence.
- **Conflicts preserved:** Busch capacity 46,000 vs about 45,500; Enterprise Center 18,096 vs 19,022; WWTR 57,000 vs 58,000 vs "nearly 80,000"; Park-Ride lots 21 vs 24; Cardinals 2025 average 27,777 vs 27,581 vs 28,660; WWTR campsites 1,200+ vs about 438 RV spots; MidAmerica extension opening "early to mid-September" ([Metro, June 2026](https://www.metrostlouis.org/news-release/metro-to-launch-next-generation-fare-collection-system-and-security-gates-on-july-6/)) vs "in the coming months" ([Progressive Railroading, Oct. 7, 2026](https://www.progressiverailroading.com/passenger_rail/news/St-Louis-MetroLink-completes-airport-extension-project--77895)).
- **Inaccessible / weak sources:** St. Louis Post-Dispatch articles (stltoday.com) are paywalled and were used only through search snippets — not bypassed; the original Forest Park visitor survey behind the 88% figure was not located; PredictHQ is a commercial forecast; several capacity figures come from secondary guides (flagged inline).

### 8.5 Confirmed transport or venue changes through 2028

| Change | Status | Date | Relevance | Re-check |
|---|---|---|---|---|
| MetroLink fare gates / next-generation fare system | **Done/in rollout.** Phase One at 13 stations from July 6, 2026, covering about 91% of fare sales ([Metro](https://www.metrostlouis.org/news-release/metro-to-launch-next-generation-fare-collection-system-and-security-gates-on-july-6/)); gates installed at all other 38 platforms per [STLPR, Oct. 5, 2026](https://www.stlpr.org/economy-business/2026-10-05/metrolink-5-mile-extension-midamerica-airport) | 2026 | Post-event platform throughput at Stadium/Civic Center/Union Station | Jan 2027 (phases 2–3) |
| Union Station tunnel rehabilitation | **Scheduled/funded, ongoing.** Work expected until winter 2028 with intermittent evening single-tracking ([Metro projects](https://www.metrostlouis.org/projects)) | Through winter 2028 | Evening service at Energizer Park and Enterprise Center | Quarterly |
| Fairview Heights / Washington Park single-track | **Scheduled.** Mar 16, 2025 – Dec 31, 2026 ([Metro rider alerts](https://www.metrostlouis.org/rider-alerts/)) | Through Dec 2026 | Illinois Park-Ride access | Jan 2027 |
| MidAmerica Airport extension (5.2 mi) | **Built; awaiting revenue service** ([Progressive Railroading](https://www.progressiverailroading.com/passenger_rail/news/St-Louis-MetroLink-completes-airport-extension-project--77895)) | Late 2026 (date unconfirmed) | Minor for venues | Dec 2026 |
| Green Line | **Light rail cancelled Sept. 2025; BRT is a proposal** under study ([Railway Age](https://www.railwayage.com/passenger/light-rail/reports-st-louis-light-rail-expansion-project-to-be-sidelined/), [FOX 2 via AOL](https://www.aol.com/articles/green-line-feature-buses-instead-044334351.html)); about $90 million in city sales tax collected, use may need voter approval ([Post-Dispatch via Mass Transit](https://www.masstransitmag.com/management/news/55319325/mo-st-louis-mayor-green-lines-demise-could-lead-to-better-project)) | Not scheduled | Would serve Energizer Park area if built | Mid-2027 |
| MetroLink railcar replacement | **Funded:** $196 million federal grant to replace 48 cars ([STLPR](https://news.stlpublicradio.org/term/metrolink?page=3)); arrival from 2027 per a secondary source only | 2027+ | Event capacity per train | Mid-2027 |
| Battlehawks home venue for 2027 | **Unresolved.** Dome contract runs through 2026 season; Energizer Park discussed ([Spectrum News](https://spectrumlocalnews.com/mo/st-louis/news/2026/02/23/st-louis-ufl-owner-battlehawks-2026)) | Decision pending | Would move a spring crowd from V04a to V02 | Jan 2027 |
| NASCAR at WWTR | **Scheduled:** returns in August 2027 per track announcement (exact date truncated in source) ([Jayski](https://www.jayski.com/2026/09/13/world-wide-technology-raceway-announces-fifth-consecutive-cup-sellout/)) | Aug 2027 | V10 date shift from September | Feb 2027 |
| America's Center expansion | **Completed** late 2024 ([HVS via Hotel Online](https://www.hotel-online.com/news/development-drives-st-louis-hotel-outlook)) | Done | Convention crowds near V04 | — |

---

*Public data only. No app code, hand flags, personal ratings or cost commitments are included.*
