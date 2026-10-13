# Edmonton metro: event travel evidence and city-type assessment for Fan/Friction Gridlock

**Research date:** Monday, October 12, 2026. Sources were retrieved on this date; event figures are dated individually.
**Scope:** City of Edmonton and its surrounding event metro. Calgary and distant Alberta destinations are excluded.
**Purpose reminder:** This assesses the existing settings (`sprawl` 0.85, `hub` 0.85, `transit` 0.4 car share) against public evidence of how people reach event venues. It does not propose new constants, tune against personal ratings, or provide app code.

---

## 0. Headline findings

1. **No public, measured, event-specific mode-split survey was found for any Edmonton venue.** The best evidence is one transit-agency statement about Commonwealth Stadium, one pre-opening parking projection for Rogers Place, and extensive operational evidence (park & ride, ticket-as-fare, parking bans, no-parking festival sites).
2. **Recommended existing city type: `hub`.** `transit` (0.4) is not supported anywhere in the evidence. Between the two 0.85 types, `hub` better describes Edmonton's event geography: the large crowds concentrate in a few LRT-linked clusters (ICE District/downtown, the Commonwealth–Exhibition Lands corridor, Old Strathcona/river valley) whose approaches and transit lines are shared.
3. **The 0.85 fallback probably overstates car involvement at the two largest fixed venues** (estimated ~0.62 at Commonwealth Stadium and ~0.75 at Rogers Place, both low-to-moderate confidence), and probably understates it at outlying car-only sites such as Century Mile. These argue for venue-specific overrides, not a different city type.

---

## 1. Regional background (not event travel)

These are ordinary commuting statistics and are **background only**. They are not event mode shares.

| Indicator | Value | Date | Source |
|---|---|---|---|
| Edmonton CMA population | 1,418,118 | 2021 Census | [Wikipedia: Edmonton Metropolitan Region (citing StatCan)](https://en.wikipedia.org/wiki/Edmonton_Metropolitan_Region) |
| CMA land area | 9,400 km² (largest of all CMAs) | 2016 Census | [StatCan Census in Brief](https://www12.statcan.gc.ca/census-recensement/2016/as-sa/98-200-x/2016029/98-200-x2016029-eng.cfm) |
| Share of CMA population outside the City of Edmonton | 29.4% | 2016 Census | [StatCan Census in Brief](https://www12.statcan.gc.ca/census-recensement/2016/as-sa/98-200-x/2016029/98-200-x2016029-eng.cfm) |
| Commute by car, truck or van (CMA) | 85.9% | May 2025 (LFS) | [StatCan Table 2, Aug 26 2025](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm) |
| Commute by public transit (CMA) | 8.1% (StatCan flags "E", use with caution) | May 2025 | [StatCan Table 2](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm) |
| Commute by car / transit, pre-pandemic | 82.4% / 11.4% | May 2016 | [StatCan Table 2, Aug 26 2024](https://www150.statcan.gc.ca/n1/daily-quotidien/240826/t002a-eng.htm) |
| Average weekday LRT boardings (Capital + Metro) | 110,786 | Fall 2018 | [City of Edmonton 2018 LRT Passenger Count](https://www.edmonton.ca/transportation/PDF/2018-LRT-Passenger-Count-Report.pdf) |

The 2018 LRT count notes that special-event riders are sometimes blended into the counts and that ridership can vary 10% or more day to day, so it cannot be used to back out event ridership ([same report](https://www.edmonton.ca/transportation/PDF/2018-LRT-Passenger-Count-Report.pdf)).

---

## 2. Venue coverage and identity checks

The companion venue research answer was **not available** in this session (no upload found), so venues were enumerated independently. Rows marked "gap" were identified but not researched enough to verify name, capacity or travel.

| Lead | Verified current identity / status (Oct 2026) | Municipality | In scope? | Source |
|---|---|---|---|---|
| Rogers Place | Active; Oilers (NHL) and Oil Kings (WHL); 18,347 hockey; 20,734 concert (HOK states 20,147 for concerts; conflict preserved) | Edmonton | Yes | [Edify](https://edifyedmonton.com/?p=8010); [HOK](https://www.hok.com/projects/view/rogers-place-and-the-ice-district/); [Wikipedia](https://en.wikipedia.org/wiki/Rogers_Place) |
| Commonwealth Stadium | Active; Elks (CFL); upper bowl closed to ticket sales since before 2024, lower bowl 31,025; full capacity cited as 55,000 in 2021; stadium concerts in 2026 | Edmonton | Yes | [3DownNation, Jul 28 2026](https://3downnation.com/2026/07/28/were-gonna-need-em-cody-fajardo-hopes-edmonton-elks-draw-big-crowd-against-riders/); [Daily Hive, Aug 18 2026](https://dailyhive.com/edmonton/edmonton-elks-uptick-attendance-compared-last-season); [CBC 2021](https://www.cbc.ca/1.6131593) |
| Edmonton EXPO Centre — Hall D | Renamed The Flair Airlines Hangar; up to 4,200 spectators; Stingers (CEBL). A secondary listing claims 7,000 in-the-round (conflict) | Edmonton | Yes, but below 5,000 on the operator's figure | [EXPO Centre](https://edmontonexpocentre.com/plan-your-event/sporting-events); [CME](https://www.cmeexpo.ca/news/flair-airlines-acquires-naming-rights-of-hall-d-at-edmonton-expo-centre); [Venue Coalition](https://venuecoalition.com/?p=4245) |
| Edmonton EXPO Centre — halls and grounds | K-Days site (open-site crowd, event row below) | Edmonton | Yes (event row) | [CTV](https://www.ctvnews.ca/edmonton/article/overall-kdays-attendance-increases-to-783000-in-2026/) |
| RE/MAX Field | Name unchanged; 9,200 capacity; Riverhawks (WCL) | Edmonton (Rossdale) | Yes | [Wikipedia](https://en.wikipedia.org/wiki/RE/MAX_Field); [Daily Hive, Jul 28 2026](https://dailyhive.com/edmonton/how-riverhawks-record-setting-edmonton-team) |
| Horse racing | **Century Mile Racetrack & Casino**, next to Edmonton International Airport; racing at Northlands Park ended after 2016 | Leduc County (outside the City) | Yes, as an edge venue | [Wikipedia](https://wikipedia.com/wiki/Century_Mile); [Discover Leduc](https://discoverleduc.ca/attractions-1/discover-century-mile-racetrack-casino/) |
| Northlands Coliseum | Closed since 2018; demolition planned to start summer 2026, about two years | Edmonton | **No** (inactive) | [Global News](https://globalnews.ca/news/11346613/demolition-edmonton-northlands-coliseum-summer-2026) |
| Edmonton Spectrum (former Northlands Park) | Being demolished, completion expected summer 2026 | Edmonton | No | [City of Edmonton](https://www.edmonton.ca/projects_plans/edmonton-exhibition-lands/spectrum-demolition) |
| Clarke Stadium | Active (Elks 2026 preseason moved there); final capacity unclear | Edmonton | Gap | [3DownNation](https://dev.3downnation.com/?p=200955) |
| Gallagher Park (Folk Fest), Hawrelak Park (Heritage Festival), Old Strathcona (Fringe), Churchill Square (Taste of Edmonton), ICE District Fan Park | Open sites, event rows below | Edmonton | Yes (event rows) | See section 3 |
| Edmonton Convention Centre; Northern Alberta Jubilee Auditorium (2,538); Winspear Centre (1,932) | Capacities only from a low-quality aggregator; not verified with operators | Edmonton | Gap (1,000+ rooms) | [catchmovement](https://catchmovement.com/guides/biggest-event-venues-edmonton) |
| University and community arenas (e.g., Clare Drake Arena, Universiade Pavilion), suburban arenas (St. Albert, Strathcona County, Leduc, Spruce Grove), River Cree (Enoch Cree Nation) | Not verified this session | Various | Gap | — |
| ICE District Event Park (future) | Under procurement; up to 7,000 outdoors and 4,000 indoors; completion scheduled 2029 | Edmonton | Future only | [CanadaBuys](https://canadabuys.canada.ca/en/tender-opportunities/tender-notice/ab-2026-04767); [CTV](https://www.ctvnews.ca/edmonton/article/just-as-excited-for-the-next-10-edmontons-rogers-place-hits-double-digits/) |

Local ticketing and feed coverage were not verifiable from public sources in this pass and are left to the companion venue research.

---

## 3. Venue and event travel tables

Definitions used throughout:

- **Car-involved share** is the share of attending *people* whose trip includes a private car, carpool, taxi or rideshare leg. Per the brief, a car trip to remote parking or a park & ride lot followed by a shuttle or LRT ride **counts as car-involved**. This is the value recommended for the Gridlock car share.
- **Car-at-venue share** (shown where it differs) excludes park & ride users, because their vehicles stop at remote lots rather than on venue approaches.
- **Event transit** means dedicated park & ride shuttles or added trains; **regular transit** means scheduled ETS bus or LRT service.

### 3a. Identity, setup and evidence

| ID | Venue / event | Municipality | Setup and date/season represented | Evidence type and date | Evidence class |
|---|---|---|---|---|---|
| E1 | Rogers Place — Oilers game | Edmonton | Hockey, 18,347; winter weeknights/weekends, Oct–Apr plus playoffs | City projection of event parking demand, pre-opening (c. 2016) | Projected |
| E2 | Rogers Place — arena concert | Edmonton | Concert, 20,734 (HOK: 20,147); year-round | Same projection (described as a "major event", not split by event type) | Projected (by extension) |
| E3 | Commonwealth Stadium — Elks game | Edmonton | Lower bowl, 31,025; 2025 average 19,050; summer–fall evenings | ETS statement on historical transit use at stadium events (Jul 2025) | Agency statement + estimate |
| E4 | Commonwealth Stadium — stadium concert | Edmonton | Full stadium; 54,200 tickets for The Weeknd, Jul 19 2025; 2026: Post Malone Jul 24–25, AC/DC Aug 9, Guns N' Roses Aug 26 | Same ETS statement; City concert travel pages | Agency statement + estimate |
| E5 | RE/MAX Field — Riverhawks | Edmonton | 9,200 capacity; 5,260 average (2026 season); summer | Team and City operational pages, 2026 | Qualitative only |
| E6 | EXPO Centre — Flair Airlines Hangar | Edmonton | Up to 4,200; Stingers (summer), concerts | Operator page | Qualitative only |
| E7 | K-Days, EXPO Centre halls and grounds | Edmonton | 783,000 visits over 10 days, Jul 17–26 2026 | News report of organizer figures; parking/transit guides | Qualitative only |
| E8 | Edmonton Folk Music Festival, Gallagher Park | Edmonton | About 100,000 attendees over four days, Aug 2026 | News reports; access guidance | Qualitative only |
| E9 | Edmonton Heritage Festival, Hawrelak Park | Edmonton | Three days, Aug 1–3 2026 (returned to Hawrelak); 330,000 attendance reported for 2023 | Festival and ETS operational info; news | Qualitative only |
| E10 | Edmonton Fringe, Old Strathcona | Edmonton | 825,000 site visits and 142,000 tickets over 11 days, Aug 13–23 2026 | Organizer figures via news | Qualitative only |
| E11 | Taste of Edmonton, Churchill Square | Edmonton | 250,000 visits, July 2026 | Organizer figure via news | Qualitative only |
| E12 | Oilers playoff watch parties, ICE District | Edmonton | About 12,000 capacity across watch areas (2024 playoffs) | Downtown Business Association estimate via news | Qualitative only |
| E13 | Century Mile — live racing / Canadian Derby | Leduc County | Racing season from May 2 2026; Canadian Derby Aug 22 2026 | Operator and tourism pages | Qualitative only |

Sources for 3a: [Edify](https://edifyedmonton.com/?p=8010), [HOK](https://www.hok.com/projects/view/rogers-place-and-the-ice-district/), [Transforming Edmonton](https://transforming.edmonton.ca/when-rogers-place-opens-parking-downtown/), [3DownNation](https://3downnation.com/2026/07/28/were-gonna-need-em-cody-fajardo-hopes-edmonton-elks-draw-big-crowd-against-riders/), [3DownNation 2025 attendance](https://dev.3downnation.com/?p=197172), [Taproot, Jul 31 2025](https://edmonton.taproot.news/pulse/2025/07/31), [Post Malone page](https://www.edmonton.ca/node/10843), [AC/DC page](https://www.edmonton.ca/commonwealth_stadium/ac-dc-pwr-up-tour), [Guns N' Roses page](https://www.edmonton.ca/attractions_events/commonwealth_stadium/guns-n-roses-world-tour), [Daily Hive Riverhawks](https://dailyhive.com/edmonton/how-riverhawks-record-setting-edmonton-team), [EXPO Centre](https://edmontonexpocentre.com/plan-your-event/sporting-events), [CTV K-Days](https://www.ctvnews.ca/edmonton/article/overall-kdays-attendance-increases-to-783000-in-2026/), [Daily Hive K-Days](https://dailyhive.com/edmonton/kdays-edmonton-2026), [Taproot arts roundup](https://edmonton.taproot.news/roundups/arts/2026/08/13), [The Griff](https://thegriff.ca/?p=36450), [Heritage Festival](https://www.heritagefest.ca/2026festival), [CTV 2024 Heritage](https://edmonton.ctvnews.ca/city-promises-stronger-parking-enforcement-for-neighbourhoods-near-heritage-festival-1.6985126), [CTV Fringe](https://www.ctvnews.ca/edmonton/article/fringe-attracts-825000-to-festival-sites-as-it-wraps-up-for-2026/), [Global News watch parties](https://globalnews.ca/news/10538369/edmonton-oilers-downtown-businesses/), [Discover Leduc](https://discoverleduc.ca/events/97th-running-of-the-canadian-derby/), [CTV Century Mile](https://www.ctvnews.ca/edmonton/article/competitive-horse-racing-back-for-2026-season-at-century-mile-racetrack/).

Multi-day totals (E7–E11) are cumulative visits, not simultaneous crowds. Simple daily means are about 78,300 for K-Days (783,000 ÷ 10), 75,000 for Fringe site visits (825,000 ÷ 11) and 25,000 for Folk Fest (100,000 ÷ 4). These are arithmetic means of visits, not peak on-site crowds, and the sources do not say whether repeat visitors are counted once or per day.

### 3b. Mode split and recommended car share

| ID | Private car / carpool / rideshare | Public bus/rail (regular) | Dedicated event shuttle | Walk/bike/other | Unclassified | Sums to 100%? | Recommended car-involved share (range) | Confidence | Value class |
|---|---|---|---|---|---|---|---|---|---|
| E1 | Parked-car persons ≈ 63–85% (see method M1) | Not reported | None (regular service only) | Not reported | Rideshare, drop-off, walk-ins | No; only the parked-car component is estimated | **0.75 (0.60–0.88)** | Low | Estimated from a projection |
| E2 | Assumed similar to E1 | Not reported | None | Not reported | All | No | **0.75 (0.60–0.88)**, provisional | Low | Estimated (borrowed from E1) |
| E3 | Non-transit ≈ 50% (car, rideshare, walk, bike combined) | ≈ 50% combined with shuttle | Included in the ≈ 50% | Inside the non-transit half | Split of the transit half between P&R and walk-up LRT | Only as a two-way transit vs non-transit split | **0.62 (0.46–0.80)**; car-at-venue ≈ 0.45 (0.35–0.53) | Low–moderate | Estimated from agency statement (M2) |
| E4 | As E3 | As E3 | As E3; no parking at the stadium for 2026 concerts | As E3 | As E3 | As E3 | **0.62 (0.46–0.80)** | Low–moderate | Estimated (M2) |
| E5 | Unknown | Unknown; team called past transit service spotty | New 2026 ETS shuttle pilot from Churchill Square | Bike parking provided | All | No data | Unknown; provisional fallback **0.85** (`hub`). Qualitative direction: high, likely 0.70–0.90 | Very low | Unknown |
| E6 | Unknown | LRT (Coliseum station) adjacent | None found | Unknown | All | No data | Unknown; provisional fallback 0.85 | Very low | Unknown |
| E7 | Unknown; on-site parking $20/vehicle/day | LRT adjacent | Free P&R lots (fare applies) | Unknown | All | No data | Unknown; provisional fallback 0.85 | Very low | Unknown |
| E8 | Unknown; no on-site parking, designated drop-off zones | Valley Line SE (two stops at site) | P&R from Davies and Capital Line lots | Supervised bike lock-up | All | No data | Unknown; car-at-venue likely well below 0.85, car-involved unknown | Very low | Unknown |
| E9 | Unknown; no personal-vehicle parking at Hawrelak in 2026 | Routes 51 and 902, extended evenings | Just under 200 buses ran P&R | Unknown | All | No data | Unknown; car-at-venue very low by design, car-involved unknown | Very low | Unknown |
| E10 | Unknown | Regular bus | Free Fringe shuttle (Old Strathcona–French Quarter, internal only) | Bike lock-up | All | No data | Unknown; provisional fallback 0.85, likely overstates | Very low | Unknown |
| E11 | Unknown | Downtown LRT hub | None found | Unknown | All | No data | Unknown; treat like downtown cluster | Very low | Unknown |
| E12 | Unknown | Regular downtown service | None | Unknown | All | No data | Unknown | Very low | Unknown |
| E13 | Unknown; free parking, 1,700+ stalls | Indirect only (ETS route 747 to airport, Leduc Transit route 10) | None found | Negligible expected | All | No data | Unknown; provisional fallback 0.85 likely **understates**; qualitative direction ≥0.90 | Low | Unknown |

Sources for 3b: [Transforming Edmonton](https://transforming.edmonton.ca/when-rogers-place-opens-parking-downtown/), [CBC 2016](https://amp.cbc.ca/news/canada/edmonton/city-lays-out-traffic-plans-for-rogers-place-opening-1.3678162), [Taproot, Jul 31 2025](https://edmonton.taproot.news/pulse/2025/07/31), [Post Malone page](https://www.edmonton.ca/node/10843), [Taproot business roundup, Apr 3 2026](https://edmonton.taproot.news/roundups/business/2026/04/03), [Riverhawks shuttle](https://riverhawksbaseball.com/news/2026-shuttle-service), [Daily Hive K-Days](https://dailyhive.com/edmonton/kdays-edmonton-2026), [CTV Folk Fest](https://www.ctvnews.ca/edmonton/article/folk-fest-starts-tonight-heres-how-to-get-to-gallagher-park/), [Heritage Festival P&R](https://www.heritagefest.ca/copy-of-getting-to-the-festival), [CTV ETS review](https://www.ctvnews.ca/edmonton/article/ets-reviewing-park-and-ride-performance-after-heritage-festival-bottleneck/), [Fringe FAQs](https://www.fringetheatre.ca/festival/faqs/), [Century Casinos release](https://www.test3.thehorses.com/news/news-archives/item/download/1782_6edc95acea24364f8417ea4f6a719a8e), [Jockeys Canada](https://www.jockeyscanada.com/?p=1196).

### 3c. Parking, operations and access

| ID | Parking supply and remote arrangements | Event operations, closures, start/end service | Access constraints and shared approaches | Sources |
|---|---|---|---|---|
| E1/E2 | No dedicated arena parking lot; City said 18,000+ stalls within a 10-minute walk and expected a major event to use about 6,000 (CBC reported 5,800 needed). Event street-parking rates apply when expected attendance is 5,000+ | Regular fares on game days; ETS steers crowds to Bay/Enterprise Square because MacEwan station's concourse holds about 100 people; post-event Capital Line transfers | 40+ bus routes and 5 LRT stations within walking distance; Valley Line West roadwork and 102 Ave closure (107–102 St) for the 2026 season; shares approaches with ICE District watch parties, Churchill Square festivals and downtown commuters | [Transforming Edmonton](https://transforming.edmonton.ca/when-rogers-place-opens-parking-downtown/); [CBC](https://amp.cbc.ca/news/canada/edmonton/city-lays-out-traffic-plans-for-rogers-place-opening-1.3678162); [City event parking](https://www.edmonton.ca/transportation/driving_carpooling/event-parking); [City playoffs page](https://www.edmonton.ca/attractions_events/schedule_festivals_events/stanley-cup-playoffs); [Edify](https://edifyedmonton.com/?p=8010); [Rogers Place](https://www.rogersplace.com/getting-to-the-arena/); [Valley Line West](https://edmonton.ca/valleylinewest) |
| E3 | Football P&R lots: Eaux Claires, Lewis Farms (limited by construction), NAIT A/B/D ($6), Nakî Transit Centre (St. Albert); Stadium P&R lot closes 2 hours pre-game | Ticket to Ride: Elks ticket is fare 2 hours before and after; P&R shuttles start 2 hours before and run until the stadium clears; Capital Line at regular frequency with multi-car trains; route 3 detoured | Residential parking ban on signed streets from 2 hours before until game end; permits required within 800 m during large events; shares the Capital Line and 112/118 Ave approaches with EXPO Centre/K-Days | [ETS Football P&R](https://www.edmonton.ca/ets/football-park-ride.aspx); [Global News 2024](https://globalnews.ca/news/10553852/edmonton-transit-parking-commonwealth-stadium) |
| E4 | No parking at the stadium; Commonwealth LRT lot closes at 5 pm on show days; P&R from Nakî; park at Clareview or Belvedere and ride the Capital Line | Concert ticket is fare 2 hours before and after; P&R buses run until the venue clears; $1.50 ETS surcharge on big-name concert tickets since July 2025 | As E3; two-night runs (Post Malone, Jul 24–25 2026) are separate crowds, not one | [Post Malone page](https://www.edmonton.ca/node/10843); [GNR page](https://www.edmonton.ca/attractions_events/commonwealth_stadium/guns-n-roses-world-tour); [Taproot](https://edmonton.taproot.news/pulse/2025/07/31) |
| E5 | Lots A–D at the ballpark (stall count not found); main lot north of the park slated for housing under River Crossing phase 1 | Free ETS shuttle from Churchill Square with game ticket (pilot, 2026); event parking restrictions from 2 hours before to 3 hours after start (max 11 pm); Canada Day shuttles held until fireworks road closures lift | Rossdale resident-only parking; river-valley road access; shares Canada Day fireworks closures | [Riverhawks getting here](https://riverhawksbaseball.com/fan-experience/getting-here); [City event parking](https://www.edmonton.ca/transportation/driving_carpooling/event-parking); [Riverhawks Canada Day](https://riverhawksbaseball.com/news/canada-day-sellout-2026); [Taproot](https://edmonton.taproot.news/roundups/business/2026/04/03) |
| E6/E7 | EXPO paid lots ($20/day during K-Days); Concordia University lot nearby; free ETS P&R lots | Regular LRT; P&R | Coliseum demolition (from summer 2026) and Exhibition Lands works on the same site; shares approaches with Commonwealth | [Daily Hive](https://dailyhive.com/edmonton/kdays-edmonton-2026); [Global News](https://globalnews.ca/news/11346613/demolition-edmonton-northlands-coliseum-summer-2026) |
| E8 | No on-site parking; free P&R at Davies, Clareview, Belvedere, Stadium | Valley Line SE serves Muttart and Strathearn stops; drop-off zones on 98 Ave and 95 Ave; bike lock-up open until 11:30 pm–12:30 am | Connors Road construction affected drop-offs (retrieved article is undated) | [CTV](https://www.ctvnews.ca/edmonton/article/folk-fest-starts-tonight-heres-how-to-get-to-gallagher-park/) |
| E9 | No personal-vehicle parking at Hawrelak (lot used for bus staging); P&R from Davies, Eaux Claires, Health Sciences, Meadows, Lewis Farms, plus paid university lots | P&R every 10 minutes; regular fares; just under 200 buses; bottleneck on the final day after two weather-closure days | Groat Road and university-area approaches | [Heritage Festival](https://www.heritagefest.ca/copy-of-getting-to-the-festival); [CTV](https://www.ctvnews.ca/edmonton/article/ets-reviewing-park-and-ride-performance-after-heritage-festival-bottleneck/) |
| E10 | Street and lot parking in Old Strathcona (supply not found) | Free internal shuttle | 37 venues spread across Old Strathcona, French Quarter, 124 St and downtown | [Fringe FAQs](https://www.fringetheatre.ca/festival/faqs/) |
| E13 | Free parking, 1,700+ stalls | No event service found | Highway 2 / airport approach; distinct from all Edmonton clusters | [Century Casinos release](https://www.test3.thehorses.com/news/news-archives/item/download/1782_6edc95acea24364f8417ea4f6a719a8e); [Discover Leduc](https://discoverleduc.ca/attractions-1/discover-century-mile-racetrack-casino/) |

### 3d. Estimation methods

**M1 — Rogers Place (E1), parking-projection inference.**

- Inputs: the City expected a major Rogers Place event to use about 6,000 stalls ([Transforming Edmonton](https://transforming.edmonton.ca/when-rogers-place-opens-parking-downtown/)); CBC reported 5,800 ([CBC](https://amp.cbc.ca/news/canada/edmonton/city-lays-out-traffic-plans-for-rogers-place-opening-1.3678162)). These are **vehicles, projected, pre-opening**, not observed.
- Denominator: 18,347 hockey attendees ([Edify](https://edifyedmonton.com/?p=8010)).
- **Assumption (no local source found):** 2.0–2.6 attendees per parked vehicle.
- Arithmetic: 5,800 × 2.0 ÷ 18,347 ≈ 0.63; 6,000 × 2.6 ÷ 18,347 ≈ 0.85.
- Adjustments by judgment: add a few points for taxi/rideshare/drop-off (not parked), and recognize that staff parking and pre-pandemic, pre-Valley Line SE assumptions push in opposite directions.
- Result: 0.75, range 0.60–0.88, low confidence.
- Unverified contrary hint: a forum post claims transit use fell about 15% versus the old Coliseum. It gives no source and is **not used** ([SkyriseCities forum](https://edmonton.skyrisecities.com/forum/goto/post?id=1211789)).

**M2 — Commonwealth Stadium (E3/E4), agency-statement inference.**

- Input: an ETS director said that historically about half of people attending Commonwealth Stadium events take transit; ETS did not track concert-ticket fare use ([Taproot, Jul 31 2025](https://edmonton.taproot.news/pulse/2025/07/31)). This is a **statement, not a published survey**, and it does not separate park & ride from walk-up LRT, or games from concerts.
- **Assumptions (judgment):** transit share 0.45–0.55; walk/bike/other 0.02–0.10; 20–60% of transit riders drove to a P&R or LRT lot (P&R shuttles are car-access by design, but LRT riders may start from home or regular buses).
- Formula: car-involved = (1 − transit − walk/bike) + transit × share-who-drove-to-transit.
- Central: (1 − 0.50 − 0.05) + 0.50 × 0.35 ≈ 0.62. Low: (1 − 0.55 − 0.10) + 0.55 × 0.20 ≈ 0.46. High: (1 − 0.45 − 0.02) + 0.45 × 0.60 ≈ 0.80.
- Car-at-venue (excluding P&R users) ≈ 0.45 (0.35–0.53).
- No ridership baseline subtraction was possible because no event-day boardings were published.

**Park & ride treatment.** Any attendee who drove to a park & ride lot is counted as car-involved in the recommended values. Shuttle seat counts (e.g., about 200 Heritage Festival buses) and stall counts are supply measures and were **not** converted into mode shares.

---

## 4. Regional conclusion

### 4a. Recommended city type: `hub`

- **For `hub` over `sprawl`.** Edmonton's large event crowds are concentrated in a small number of central, LRT-linked clusters, and the City runs them as connected systems: shared park & ride lots, ticket-as-fare programs, residential parking bans and LRT crowd routing. Rogers Place was deliberately sited without its own parking, relying on downtown stalls and transit ([Transforming Edmonton](https://transforming.edmonton.ca/when-rogers-place-opens-parking-downtown/)). The two biggest fixed venues have estimated car-involved shares of roughly 0.62 and 0.75, below either 0.85 default.
- **Against `transit`.** No Edmonton venue shows a car share near 0.4. Even at Commonwealth, the most transit-oriented large venue, roughly half of attendees do not use transit and many transit users start by car (M2). Metro commuting is about 86% car ([StatCan](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm)).
- **Strongest contrary evidence (for `sprawl`).** The CMA is the largest by land area in Canada, with 29.4% of residents outside the city and limited transit between most outer municipalities ([StatCan](https://www12.statcan.gc.ca/census-recensement/2016/as-sa/98-200-x/2016029/98-200-x2016029-eng.cfm)). Event transit relies heavily on drive-to-park & ride, which keeps car involvement high. Outlying venues like Century Mile are car-only. Because `sprawl` and `hub` share the same 0.85 fallback, the choice mainly affects spill between nearby crowds, and the clustering evidence favours `hub`.
- **Venue exceptions.** Commonwealth Stadium (E3/E4) and Rogers Place (E1/E2) should carry venue-specific overrides below 0.85. No-parking festival sites (Folk Fest, Heritage Festival) are unknown on a car-involved basis but clearly low on car-at-venue. Century Mile (E13) likely sits above 0.85.

### 4b. Weighted car shares (rows with estimates only)

Only E1–E4 have defensible estimates. Each scenario uses one configuration per venue, so no mutually exclusive configurations are added together. The two venues are distinct and can run on the same night.

| Scenario | Rows and weights | Weighted car-involved share (range) |
|---|---|---|
| Capacity-weighted, sports configuration | E3 Elks lower bowl 31,025 + E1 Oilers 18,347 | 0.67 (0.51–0.83) |
| Capacity-weighted, concert configuration | E4 Commonwealth concert 54,200 tickets (The Weeknd, Jul 2025) + E2 Rogers Place concert 20,734 | 0.66 (0.50–0.82) |
| Typical-attendance-weighted | E3 Elks 2025 average 19,050 + E1 Oilers at 18,347 (capacity used as a sellout proxy; regular-season sellout status not verified) | 0.68 (0.53–0.84) |

Weights from: [3DownNation lower bowl](https://3downnation.com/2026/07/28/were-gonna-need-em-cody-fajardo-hopes-edmonton-elks-draw-big-crowd-against-riders/), [3DownNation 2025 average](https://dev.3downnation.com/?p=197172), [Taproot](https://edmonton.taproot.news/pulse/2025/07/31), [Edify](https://edifyedmonton.com/?p=8010).

**Missing coverage.** RE/MAX Field, EXPO Hall D, theatres, the Convention Centre, suburban arenas, Century Mile, and all festival rows are excluded because no defensible estimate exists. Including car-heavy outlying venues would push the weighted share up; including no-parking festivals would pull the car-at-venue figure down.

**Do huge venues obscure the downtown pattern?** Commonwealth dominates any capacity weighting. Its estimate (0.62) is lower than downtown Rogers Place (0.75), largely because of extensive drive-to-park & ride. Commonwealth therefore makes Edmonton look more transit-oriented on a person basis than its downtown arena, while still being heavily car-involved.

### 4c. Clusters, shared roads and shared audiences (separate findings)

- **Cluster A — Downtown/ICE District:** Rogers Place, ICE District watch parties (about 12,000 capacity in 2024), Churchill Square festivals, Convention Centre, Winspear, Citadel. Shared approaches include 104 Ave, 101–109 St and the downtown LRT stations. Event parking rates apply between 97–109 St and Jasper–107 Ave. Sources: [Global News](https://globalnews.ca/news/10538369/edmonton-oilers-downtown-businesses/), [City event parking](https://www.edmonton.ca/transportation/driving_carpooling/event-parking).
- **Cluster B — Commonwealth / Exhibition Lands:** Commonwealth Stadium, Clarke Stadium, EXPO Centre (Hall D, halls, K-Days grounds). Both sit on the Capital Line about one station apart (Stadium and Coliseum). Elks P&R users at the Stadium lot must leave 2 hours before kickoff, which collides with other users of that lot ([ETS Riverhawks page](https://www.edmonton.ca/ets/riding-ets/getting-to-a-riverhawks-game)).
- **Cluster C — River valley and south side:** RE/MAX Field, Gallagher Park, Hawrelak Park, Old Strathcona/Fringe. These share river-valley roads, bridges and summer dates (Canada Day fireworks and Riverhawks; Folk Fest, Heritage and Fringe in August).
- **Shared park & ride network:** Nakî (St. Albert), Eaux Claires, Lewis Farms, Davies and Clareview serve several events, sometimes on the same weekend. ETS noted the Heritage Festival weekend also required Elks park & ride service ([CTV](https://www.ctvnews.ca/edmonton/article/ets-reviewing-park-and-ride-performance-after-heritage-festival-bottleneck/)).
- **Outlier — Century Mile (Leduc County):** separate road system (Highway 2/airport) with no shared approach to Clusters A–C.

---

## 5. Required end sections

### 5.1 Recommended existing city type and rationale

**`hub`.** Large Edmonton crowds concentrate in LRT-linked central clusters with shared approaches and a city-run event transit system; the major fixed venues show car-involved shares below 0.85 but nowhere near 0.4. **Strongest contrary evidence:** about 86% car commuting, a very large CMA with 29.4% of residents outside the city, heavy reliance on drive-to-park & ride, and car-only outlying venues, all of which support `sprawl`. Both types share the 0.85 fallback, so the decision affects spill rather than default car share.

### 5.2 Car-share values keyed to venue rows

The companion answer's row IDs were unavailable; values are keyed to this document's IDs.

| Row | Value (range) | Class |
|---|---|---|
| E1 Rogers Place — Oilers | 0.75 (0.60–0.88) | **Projected** input (2016 parking demand), converted to an **estimate** |
| E2 Rogers Place — concert | 0.75 (0.60–0.88), provisional | **Estimated** (borrowed from E1) |
| E3 Commonwealth — Elks | 0.62 (0.46–0.80); car-at-venue 0.45 | **Estimated** from an agency statement |
| E4 Commonwealth — concert | 0.62 (0.46–0.80) | **Estimated** from an agency statement |
| E5–E13 | Unknown; provisional `hub` fallback 0.85, with qualitative direction noted in 3b | — |
| **Measured** | **None found** for any venue | — |

### 5.3 Boundary recommendation and inconsistencies between briefs

**Recommended boundary:** the 2021 Edmonton CMA, with the City of Edmonton as core. Inner ring: St. Albert and Strathcona County (Sherwood Park). Edge municipalities assessed separately: Leduc, Leduc County, Beaumont, Spruce Grove, Stony Plain, Parkland County, Sturgeon County and Fort Saskatchewan.

Evidence:
- St. Albert's Nakî Transit Centre is a standing ETS park & ride for Elks games and stadium concerts ([ETS Football P&R](https://www.edmonton.ca/ets/football-park-ride.aspx)).
- Strathcona County ran a direct shuttle to the 2024 Heritage Festival, and St. Albert and Strathcona commuter passes are accepted on festival park & ride ([Heritage Festival 2024](https://heritagefest.ca/getting-to-the-festival-2024)).
- Century Mile, in Leduc County, is the region's only horse-racing venue.
- 2021 city populations: St. Albert 68,232; Spruce Grove 37,645; Leduc 34,094; Beaumont 20,888 ([Wikipedia list](https://en.wikipedia.org/wiki/List_of_cities_in_Alberta)).
- Strathcona County and Stony Plain 2021 populations were **not verified**: a second Wikipedia table gives lower figures for the same municipalities that look like a different census year ([Demographics of Alberta](https://en.wikipedia.org/wiki/Demographics_of_Alberta)).
- Enoch Cree Nation (River Cree) is a likely edge case whose CMA status was not verified.

**Inconsistencies with the brief's leads:**
- The "actual horse-racing site" is outside the City (Leduc County), and the former Northlands racing site is being demolished.
- "RE/MAX Field and any rename": no rename found.
- "EXPO Centre rooms": Hall D is now branded the Flair Airlines Hangar, and its capacity is disputed (4,200 by the operator versus 7,000 in-the-round in a secondary listing). One aggregator attributes a "Hall D ~5,500" to the Convention Centre, which looks like a conflation.
- The companion venue research was unavailable, so row keys cannot be cross-referenced.

### 5.4 Data gaps, model limitations, source conflicts and inaccessible sources

**Gaps:**
- No published event mode survey for any Edmonton venue.
- No published Ticket-to-Ride or park & ride boardings by event (ETS stated it did not track concert-ticket fare use).
- No vehicle-occupancy data for events.
- No stall counts for RE/MAX Field lots or downtown event-night utilization.
- No Century Mile race-day attendance.
- No Clarke Stadium capacity.
- No theatre or suburban arena travel data.
- No winter-versus-summer or weekday-versus-weekend split for any venue.

**Model limitations:**
- The Gridlock car share mixes two different pressures. Park & ride users are car-involved (per the brief) but put their vehicles on approaches to remote lots, not venue approaches. A single scalar cannot represent both.
- The M1 and M2 estimates depend on stated, unsourced assumptions.

**Source conflicts (preserved):**
- Rogers Place concert capacity: 20,734 ([Edify](https://edifyedmonton.com/?p=8010)) versus 20,147 ([HOK](https://www.hok.com/projects/view/rogers-place-and-the-ice-district/)).
- Rogers Place event parking demand: 6,000 stalls ([City](https://transforming.edmonton.ca/when-rogers-place-opens-parking-downtown/)) versus 5,800 ([CBC](https://amp.cbc.ca/news/canada/edmonton/city-lays-out-traffic-plans-for-rogers-place-opening-1.3678162)), a small gap.
- ICE District Event Park capacity: 6,000 outdoor / 3,000 indoor in an earlier listing ([ConstructConnect](https://projects.constructconnect.com/details/7011916-ice-district-event-park&find_loc=-T5J-4Y8)) versus 7,000 / 4,000 in the tender ([CanadaBuys](https://canadabuys.canada.ca/en/tender-opportunities/tender-notice/ab-2026-04767)).
- Capital Line South opening: an older target of 2028 ([CTV](https://www.ctvnews.ca/edmonton/article/edmonton-proposes-changes-to-capital-line-south-lrt-project-to-cut-costs/)) versus about five years from the May 2025 groundbreaking ([Edmonton Journal via Railway Suppliers](https://railwaysuppliers.ca/news/edmonton-breaks-ground-on-13b-capital-line-south-lrt-expansion-2025-06-03)).
- Elks attendance figures are team self-reported and cannot be independently verified ([3DownNation](https://dev.3downnation.com/?p=197172)).

**Access notes:**
- No paywalled or access-controlled source was bypassed.
- A direct script download of the City's 2019 LRT Passenger Count PDF failed because of this research environment's network allowlist, not because of an access control. The 2018 report was read instead.
- The Folk Fest access article (CTV) carried no visible date in the retrieved copy.
- Some search results came from scraped or AI-generated mirror sites. These were **not used** as evidence.

### 5.5 Confirmed transport and venue changes through 2028

| Change | Status | Dates | Suggested re-check | Source |
|---|---|---|---|---|
| Northlands Coliseum demolition | Funded ($35M set aside); major work from summer 2026, about two years | 2026–c. 2028 | Jun 2027 | [Global News](https://globalnews.ca/news/11346613/demolition-edmonton-northlands-coliseum-summer-2026) |
| Edmonton Spectrum demolition | Underway; completion expected summer 2026 | Early–summer 2026 | Dec 2026 (confirm complete) | [City](https://www.edmonton.ca/projects_plans/edmonton-exhibition-lands/spectrum-demolition) |
| Valley Line West LRT (downtown–Lewis Farms) | Funded, under construction; construction complete 2028, then testing (opening date not set, likely after 2028) | 102 Ave closed 107–102 St for the 2026 season | Apr 2027 and Q4 2028 | [City](https://edmonton.ca/valleylinewest) |
| Valley Line SE operations moving from TransEd to ETS | Scheduled transition over 1–2 years from June 2026 | 2026–2028 | Jun 2027 | [City](https://www.edmonton.ca/projects_plans/transit/valley-line-lrt-mill-woods-to-lewis-farms.aspx) |
| ICE District Event Park (replaces Fan Park east of Rogers Place) | Funded agreement; construction-manager contract for 44 months from Sep 14 2026; completion scheduled 2029; construction will affect Rogers Place approaches during 2027–2028 | 2026–2029 | Mar 2027 | [CanadaBuys](https://canadabuys.canada.ca/en/tender-opportunities/tender-notice/ab-2026-04767); [CTV](https://www.ctvnews.ca/edmonton/article/city-council-approves-400m-deal-to-build-downtown-event-park-housing-near-rogers-place/); [CTV](https://www.ctvnews.ca/edmonton/article/just-as-excited-for-the-next-10-edmontons-rogers-place-hits-double-digits/) |
| Village at ICE District housing | First units scheduled for the second half of 2028 | 2028 | Q1 2028 | [CTV](https://www.ctvnews.ca/edmonton/article/just-as-excited-for-the-next-10-edmontons-rogers-place-hits-double-digits/) |
| Capital Line South extension (Century Park–Ellerslie) | Funded, under construction since May 2025; opening date conflicted (see 5.4) | 2025–c. 2030 | Q2 2027 | [Railway Suppliers](https://railwaysuppliers.ca/news/edmonton-breaks-ground-on-13b-capital-line-south-lrt-expansion-2025-06-03) |
| River Crossing phase 1 (housing on the RE/MAX Field parking lot) | Council vote set for Apr 15 2026 (outcome not verified here); site staging could limit parking from fall 2026; lot sales targeted late 2027 | 2026–2027 | Before the 2027 Riverhawks season (May 2027) | [Taproot](https://edmonton.taproot.news/roundups/business/2026/04/03) |
| Riverhawks ETS shuttle | Pilot for 2026; continuation not confirmed | 2026 season | Apr 2027 | [Riverhawks](https://riverhawksbaseball.com/news/2026-shuttle-service) |
| Commonwealth upper bowl | Closed to ticket sales since before 2024; reopened for the Aug 1 2026 Roughriders game | Ongoing | Each CFL season | [Daily Hive](https://dailyhive.com/edmonton/edmonton-elks-uptick-attendance-compared-last-season) |
| ETS concert-ticket transit surcharge | In effect since July 2025 | Ongoing | Annually | [Taproot](https://edmonton.taproot.news/pulse/2025/07/31) |
| New 115 Ave LRT station and relocated Coliseum station (Exhibition Lands) | **Proposal** in the planning framework; no funded schedule found | — | With Exhibition Lands updates | [CBC](https://www.cbc.ca/lite/story/1.5383330); [Global News](https://globalnews.ca/news/11346613/demolition-edmonton-northlands-coliseum-summer-2026) |
| Hawrelak Park reopening | Completed; Heritage Festival returned Aug 2026 | 2026 | — | [CTV](https://www.ctvnews.ca/edmonton/article/ets-reviewing-park-and-ride-performance-after-heritage-festival-bottleneck/) |
| Metro Line NW Phase 1 (NAIT/Blatchford Market station) | Completed Dec 2023 | — | — | [Mass Transit](https://www.masstransitmag.com/management/company/11315595/city-of-edmonton) |
