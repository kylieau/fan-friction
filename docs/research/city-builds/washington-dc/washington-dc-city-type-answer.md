# Washington, DC — Fan/Friction city-type evidence answer

**Research date:** Monday, October 12, 2026
**Scope:** District of Columbia plus Prince George's, Montgomery, Arlington, Alexandria, Fairfax and Loudoun, with edge cases identified separately. Baltimore is treated as a separate candidate.
**Model settings assessed (not changed):** `sprawl` 0.85, `hub` 0.85, `transit` 0.40 fallback car share. Venue-specific shares override these.

> **How to read this file.** Every number is linked to a public source. Where a number is my own arithmetic on linked inputs, the row says "calc" and shows the inputs. Values are labelled **Measured** (observed event travel), **Projected** (planning study or applicant forecast), or **Estimated** (my transparent estimate from local evidence). "Car" in this file means any car-involved person trip: driver, carpool passenger, taxi/rideshare, and drive-to-remote-parking-then-shuttle. Ordinary commuting data appears only in the clearly labelled background section.

> **Companion venue research:** not available in this conversation. Venues below were enumerated independently. Row IDs (`V-xx`, `E-xx`) are this file's own keys; coverage gaps are listed in section 9.

---

## 1. Headline

The Washington region is **bimodal**: downtown DC venues sit at roughly 0.35–0.50 car share, while suburban stadiums and amphitheatres sit at roughly 0.85–0.97. A capacity-weighted average across the core 5,000+ venues lands at about **0.64**, but that figure is pulled up heavily by one outlying stadium (Northwest Stadium, ~41% of core capacity) that hosts few dates and is scheduled to be replaced by a transit-first stadium in 2030.

**Recommended existing city type: `transit`**, with low-to-moderate confidence and mandatory venue-specific overrides for the suburban venues. `hub` is the close alternative (reasoning in section 7).

---

## 2. Boundary evidence

### 2.1 Population (2025 Census estimates, as tabulated)

| Jurisdiction | 2025 pop. | Status in this answer | Source |
|---|---|---|---|
| District of Columbia | 693,645 | Core | [Wikipedia, Virginia statistical areas](https://en.wikipedia.org/wiki/Virginia_statistical_areas) |
| Fairfax County, VA | 1,167,873 | Core suburb | [same table](https://en.wikipedia.org/wiki/Virginia_statistical_areas) |
| Montgomery County, MD | 1,074,582 | Core suburb | [Wikipedia, Maryland statistical areas](https://en.wikipedia.org/wiki/Maryland_statistical_areas) |
| Prince George's County, MD | 970,374 | Core suburb | [same table](https://en.wikipedia.org/wiki/Maryland_statistical_areas) |
| Loudoun County, VA | 449,749 (Census) / 455,193 (county estimate) | Core suburb (outer) | [Census via Wikipedia](https://en.wikipedia.org/wiki/Virginia_statistical_areas); [Loudoun OMB](https://www.loudoun.gov/DocumentCenter/View/216521/Population-Estimates-2025) |
| Arlington County, VA | 243,931 | Core suburb | [Wikipedia](https://en.wikipedia.org/wiki/Virginia_statistical_areas) |
| City of Alexandria, VA | 160,662 | Core suburb | [Wikipedia](https://en.wikipedia.org/wiki/Virginia_statistical_areas) |
| Prince William County, VA | 502,966 | **Edge** (Jiffy Lube Live) | [Wikipedia](https://en.wikipedia.org/wiki/Virginia_statistical_areas) |
| Howard County, MD | 339,183 | **Edge** (Merriweather); sits in the Baltimore MSA | [Wikipedia](https://en.wikipedia.org/wiki/Virginia_statistical_areas) |
| Washington–Arlington–Alexandria MSA | 6,465,724 | Context | [Wikipedia](https://en.wikipedia.org/wiki/Maryland_statistical_areas) |

The Loudoun gap (Census vs county) is a definitional/methodology difference, not a material conflict.

### 2.2 Event-audience evidence relevant to boundary

| Evidence | What it shows | Source |
|---|---|---|
| Kimley-Horn used developer-supplied 2022–23 Capitals/Wizards ticket distribution for arena trip distribution | Arena audiences are region-wide; the extracted slide shows nine directional shares (5.2%–16.9%) but labels did not survive text extraction, so they cannot be keyed to counties here | [Virginia CTB, Feb 2024](https://ctb.virginia.gov/media/ctb/agendas-and-meeting-minutes/2024/feb/pres/Potomac-Presentation.pdf) |
| Merriweather draws about 90% of concert attendees from outside Howard County | A boundary venue whose audience is regional (DC + Baltimore) rather than local | [Wikipedia (citing local planning sources)](https://en.wikipedia.org/wiki/Merriweather_Post_Pavilion) |
| Nats post-game Metro exits rank end-of-line suburban stations highly | Downtown venue audiences include outer suburbs | [Greater Greater Washington](https://ggwash.org/view/29003/where-do-nats-fans-ride-metro-after-games) |

### 2.3 Background only — ordinary commuting (NOT event travel)

| Metric | Value | Source |
|---|---|---|
| Regional workers driving alone (2019 State of the Commute) | 58.3% | [Maryland Matters](https://www.marylandmatters.org/2019/09/18/survey-shows-fewer-d-c-area-commuters-are-driving-solo/) |
| Regional transit commute share (2019) | 24.1% | same |
| Drive-alone share, workers employed in the Inner Core | 38% | same |
| Drive-alone share, workers employed in Montgomery / Prince George's / Fairfax | 78% | same |

The commute gradient (inner core vs. suburbs) mirrors the event-venue gradient below, but these numbers are **not** used as event mode shares anywhere in this file.

---

## 3. Venue and event identity table

| ID | Verified current name | Municipality / jurisdiction | Setup represented | Capacity (by config, as sourced) | Status / notes |
|---|---|---|---|---|---|
| V-01 | Capital One Arena | Washington, DC | NBA/NHL, concerts; Georgetown men's basketball | 20,282 basketball ([Stadium Journey](https://www.stadiumjourney.com/stadiums/capital-one-arena-s102)); hockey/concert configs not verified | Under phased renovation; Capitals, Wizards, Georgetown MBB and some Mystics games ([MSE via YSBR, Aug 2026](https://youthsportsbusinessreport.com/the-new-capital-one-arena-will-host-250-events-youth-sports-could-fill-the-gaps/)) |
| V-02 | Nationals Park | Washington, DC (Navy Yard) | MLB regular season | 41,339 seats ([Ticketmaster](https://www.ticketmaster.com/washington-nationals-billets/artist/948674?page=2)) | Active |
| V-03 | Audi Field | Washington, DC (Buzzard Point) | MLS/NWSL/UFL matches, concerts | ~19,000 (as planned, [2016 CTR](https://app.dcoz.dc.gov/Exhibits/2010%5CZC%5C16-02/Exhibit51.pdf)); current figure not re-verified | Active; DC United, Spirit, Defenders per [2024 TOPP](https://ddot.dc.gov/sites/default/files/dc/sites/ddot/page_content/attachments/Audi%20Field%20%2B%20Nats%20Park%202024%20TOPP%2C%20April%2025%2C%202024.pdf) |
| V-04 | Northwest Stadium (formerly FedExField) | Landover, Prince George's County, MD | NFL regular season | 64,000 ([Wikipedia](https://en.wikipedia.org/wiki/Northwest_Stadium)) | Commanders' actual dated home until RFK replacement |
| V-05 | New Commanders stadium at RFK Campus (project name) | Washington, DC | NFL (projected) | ~65,000 ([WUSA9](https://www.wusa9.com/article/traffic/mission-metro/no-new-metro-station-at-rfk-stadium-wmata/65-a40e5d6d-aff4-475c-aa02-ba5afbd7a3ab)) | **Projected**; target opening summer/fall 2030 ([Axios](https://www.axios.com/local/washington-dc/2026/09/24/rfk-stadium-development-commanders)) |
| V-06 | EagleBank Arena (formerly Patriot Center) | Fairfax, VA (George Mason campus) | Mason basketball, concerts | 10,000 ([Stadium Journey](https://www.stadiumjourney.com/stadiums/eaglebank-arena-s684)) | Active |
| V-07 | SECU Stadium | College Park, Prince George's County, MD | Maryland football | **Conflict:** 46,185 ([UMD Athletics](https://umterps.com/facilities/secu-stadium/1)) vs 51,802 ([Stadium Journey](https://www.stadiumjourney.com/stadiums/secu-stadium-maryland-terrapins)) | Active; official figure preferred |
| V-08 | Xfinity Center (UMD) | College Park, MD | Maryland basketball | **Not verified this pass** | Coverage gap |
| V-09 | Merriweather Post Pavilion | Columbia, Howard County, MD | Summer amphitheatre concerts | **Conflict:** 19,319 ([Wikipedia](https://en.wikipedia.org/wiki/Merriweather_Post_Pavilion)) vs ~15,000 ([Bandsintown](https://www.bandsintown.com/v/10003008)) | **Boundary/edge** case |
| V-10 | Filene Center, Wolf Trap National Park for the Performing Arts | Vienna, Fairfax County, VA | Summer amphitheatre | **Not verified this pass** | Inside Fairfax County, so inside scope (see section 8 inconsistency) |
| V-11 | Jiffy Lube Live | Bristow, Prince William County, VA | Amphitheatre concerts | 25,000 (≈10,000 pavilion + 15,000 lawn) ([Frank Hecker](https://frankhecker.com/2014/03/29/parking-at-venues-comparable-to-merriweather-post-pavilion/)) | **Edge** case (outside listed counties) |
| V-12 | The Anthem | Washington, DC (The Wharf) | Concerts; DC Flight volleyball | 2,500–6,000 variable; 2,300–3,200 fully seated ([Wikipedia](https://en.wikipedia.org/wiki/The_Anthem_%28music_venue%29)) | Active |
| V-13 | Echostage | Washington, DC (NE) | Club concerts | ~6,000 per two secondary sources ([Parklife DC](https://parklifedc.com/2017/01/25/around-town-grand-opening-the-anthem-101217/), [NoVA Magazine 2016](https://northernvirginiamag.com/culture/2016/07/18/summer-concert-venue-guide/)); not venue-verified | Active (not re-verified) |
| V-14 | CareFirst Arena (formerly Entertainment and Sports Arena) | Washington, DC (Congress Heights) | WNBA, G League, concerts | 4,200 (concert 4,119; basketball 4,111) ([Wikipedia](https://en.wikipedia.org/wiki/CareFirst_Arena)) | Below 5,000; included as 1,000+ room |
| V-15 | John F. Kennedy Center for the Performing Arts | Washington, DC | Concert Hall / Opera House | Room capacities not verified this pass | **Operating status uncertain**: board voted to close most of the venue for renovation on Sept 15, 2026, after a court blocked adding a name to the facade ([AP via CDA Press](https://cdapress.com/news/2026/sep/15/kennedy-center-will-close-for-renovations-after-judge-blocks-returning-trumps-name-to-building/)) |

---

## 4. Venue travel table — mode splits (people, not vehicles)

All percentages are person trips unless stated. "Sums to 100%?" explains whether a split is complete.

| ID | Event / date represented | Car (incl. carpool, TNC, drive+shuttle) | Public bus/rail | Dedicated event shuttle | Walk/bike/other | Unclassified | Sums to 100%? | Evidence type & date |
|---|---|---|---|---|---|---|---|---|
| V-01 | 2008 DDOT comparison row for MCI Center (now Capital One Arena) | 20–40% (second column; header lost) | 60–80% (first column; header lost) | n/a | not separated | — | Yes (two columns sum to 100%) but **column labels did not survive PDF extraction**; I read them as non-auto / auto | Cited comparison in DDOT ballpark TMP, Mar 2008 ([DCOZ Exhibit](https://app.dcoz.dc.gov/Exhibits/2010/ZC/07-08A/Exhibit-07-08A-17.pdf)); not a dated survey; pre-dates rideshare |
| V-02 | 2014 MLB season, 81 home games | Not measured | **Metrorail 34% (Measured)**; season range ~30–40%; Friday 38%, Wednesday 32% | RFK shuttle in 2008 only | Not measured | ~66% not classified by WMATA | No — only Metrorail measured | WMATA ridership above baseline at Navy Yard and Capitol South ([PlanItMetro](https://planitmetro.com/?p=10004)) |
| V-02 (projection) | 2008 forecast, weeknight games | 35% (4th column) | 52% / 3% (1st / 2nd columns) | — | 10% (3rd column) | — | Yes (52+3+10+35=100), **labels lost**; read as Metro / bus / walk-other / auto | DDOT TMP comparison table ([DCOZ](https://app.dcoz.dc.gov/Exhibits/2010/ZC/07-08A/Exhibit-07-08A-17.pdf)) |
| V-03 | Sell-out MLS match, 19,000 attendees (2016 forecast) | **31–51% parked-car persons (calc)**, 34–61% incl. drop-off (calc) | Majority of trips expected non-auto (not split) | ADA shuttle only | not split | 39–66% non-car residual | Yes by construction (car + non-car residual) | Applicant CTR forecast of 2,715–3,450 patron cars ([2016 CTR](https://app.dcoz.dc.gov/Exhibits/2010%5CZC%5C16-02/Exhibit51.pdf)); see method below |
| V-04 | NFL home game | **Not measured** | Metro via Morgan Blvd / Downtown Largo (≥20-minute walk) | None found for current season | — | All | No | Operations only ([Commanders/WMATA](https://www.commanders.com/news/metro-and-washington-commanders-partner-to-provide-extended-service-after-sunday-night-game-against-falcons)) |
| V-05 | Sold-out NFL game, 2030 (Projected) | ~25,000 people by car = 38% (calc) + part of 5,000–6,000 TNC/bike/walk | 26,000–38,000 by Metrorail + Metrobus = 40–58% (WMATA); ~35,000 by Metro (team) | Gold Line BRT planned | part of 5,000–6,000 | — | Team figures ≈ 65,000–66,000 ≈ capacity, so ≈100% | WMATA study and team testimony ([WUSA9](https://www.wusa9.com/article/traffic/mission-metro/no-new-metro-station-at-rfk-stadium-wmata/65-a40e5d6d-aff4-475c-aa02-ba5afbd7a3ab); [WUSA9, NCPC hearing](https://www.wusa9.com/article/sports/nfl/washington-commanders/new-commander-stadium-rfk-campus-plans-could-change-tailgating/65-fe8dc367-cad0-4143-a331-09ccff26b471)) |
| V-06 | Mason basketball / concerts | Not measured | No transit departs the arena after events | None | Students on campus | All | No | Venue directions page ([EagleBank Arena](https://www.eaglebankarena.com/visit/directions-parking)) |
| V-07 | Maryland football | Not measured | Green Line to College Park + Shuttle-UM | North/South game-day shuttles from College Park Metro | Students on campus | All | No | UMD football parking/shuttle map ([UMD DOTS](https://transportation.umd.edu/sites/default/files/2024-08/FootballMap_2024.pdf)) |
| V-09 | Summer concerts | Not measured | No general venue shuttle found | None confirmed | — | All | No | Venue parking page ([Merriweather](https://merriweathermusic.com/parking/)) |
| V-10 | Filene Center summer performances | Not measured | Fairfax Connector 480 from McLean Metro (drive-to-McLean then bus counts as car) | Route 480 is a dedicated event route | — | All | No | ([Wolf Trap](https://www.wolftrap.org/directions); [Fairfax Connector](https://www.fairfaxcounty.gov/connector/node/508)) |
| V-11 | Amphitheatre concerts | Not measured | None found | None found | — | All | No | Ticketing/parking notes ([Consequence venue page](https://concerts.consequence.net/venues/jiffy-lube-live-1-tickets)) |
| V-12–V-15 | Various | Not measured | Metro-adjacent to varying degrees | Echostage: free shuttle from Metro (2016) | — | All | No | See section 6 |

### Method notes for derived rows

**V-02 Nationals Park (Measured Metro share).** WMATA counted game-time station activity above typical baseline at Navy Yard–Ballpark and Capitol South, giving ~890,000 riders over 81 games (~11,000/game) against average attendance of 31,000 ([PlanItMetro](https://planitmetro.com/?p=10004)). My check: 890,000 ÷ 81 ≈ 10,988; ÷ 31,000 ≈ 35.4%, versus WMATA's published 34%. The ~1-point gap is a rounding/denominator definition difference (attendance is announced tickets, not turnstile counts) and is not material. Return trips: ridership *to* games ran about 8% higher than *from* games, so some fans used another mode home ([same source](https://planitmetro.com/?p=10004)). The denominator is announced attendance (ticket-based), so the true per-attendee share may be somewhat higher.

**V-03 Audi Field (calc from vehicles to people).** Inputs: 2,715 patron cars (high-transit weeknight) to 3,450 (low-transit weekend) at a 19,000 sell-out ([2016 CTR](https://app.dcoz.dc.gov/Exhibits/2010%5CZC%5C16-02/Exhibit51.pdf)). **Assumption (unsourced, flagged):** 2.2–2.8 persons per parked car. People in parked cars: 2,715 × 2.2 = 5,973 (31%) up to 3,450 × 2.8 = 9,660 (51%). **Assumption:** TNC/taxi/drop-off adds 3–10 points (not in the parking forecast). Car-involved range 34–61%. This is a projection-derived estimate, not observed travel.

**V-05 RFK (people vs vehicles cross-check).** The team expects ~25,000 car arrivals at 3–4 people per vehicle ([WUSA9](https://www.wusa9.com/article/sports/nfl/washington-commanders/new-commander-stadium-rfk-campus-plans-could-change-tailgating/65-fe8dc367-cad0-4143-a331-09ccff26b471)), i.e. 6,250–8,333 vehicles (calc), consistent with ~8,000 planned spaces (6,000 garage + 2,000 surface) ([NCPC public comments, Sept 30, 2026](https://www.ncpc.gov/files/projects/2026/8812_RFK_Campus_New_Stadium_Parking_Garages_Public_Comments_2_Oct2026.pdf)). **Source conflict:** Axios describes the stadium as planned with "just 6,000 parking spaces" ([Axios](https://www.axios.com/local/washington-dc/2026/09/24/rfk-stadium-development-commanders)); the difference is whether the ~2,000 interim surface spaces are counted.

---

## 5. Recommended car-share values (one value per row)

| ID | Venue / event | Recommended car share | Range | Confidence | Value type | Basis and main uncertainty |
|---|---|---|---|---|---|---|
| V-01 | Capital One Arena (NBA/NHL/concerts) | **0.35** | 0.25–0.50 | Low | Estimated (from 2008 cited comparison) | 2008 DDOT row shows 20–40% auto; I widen upward because rideshare did not exist then and column labels are unverified. No current survey found. |
| V-02 | Nationals Park (MLB) | **0.50** | 0.40–0.60 | Low–moderate | Estimated, anchored on Measured Metro 34% (2014) | Observed Metro (34%) is 18 points below the 2008 forecast (52%); I assign part of that gap to car (2008 forecast car 35%) and part to walk/bike as Navy Yard densified, then add TNC. 2014 data are 12 years old. |
| V-03 | Audi Field (MLS sell-out) | **0.45** | 0.35–0.60 | Low | Estimated from Projected parking demand | Vehicle-to-person conversion relies on an unsourced occupancy assumption. |
| V-04 | Northwest Stadium (NFL) | **0.85** | 0.75–0.92 | Low | Estimated | No measured split. ~22,000 spaces for a 64,000-seat stadium ([WUSA9](https://www.wusa9.com/article/news/investigations/commanders-stadium/take-a-look-at-the-proposed-rfk-stadium-parking-garages-commanders/65-164c7759-1a68-475a-bf6f-7f2e2b9796a5)) shows supply sized for near-universal car access (this is a supply indicator, **not** converted into a share). Nearest Metro is a 20+ minute walk. Comparison: even the transit-first RFK plan assumes ~38% car. The `hub`/`sprawl` fallback (0.85) would provisionally apply and happens to match. |
| V-05 | New Commanders stadium, RFK (2030) | **0.42** | 0.38–0.50 | Moderate (as a projection) | Projected | WMATA and team forecasts; lower bound = parked-car persons only, upper bound adds rideshare. Not current; outside the 2028 horizon. |
| V-06 | EagleBank Arena | **0.88** | 0.75–0.95 | Low | Estimated | Parking is bundled into ticket price and no transit leaves the arena after events ([venue](https://www.eaglebankarena.com/visit/directions-parking)); Vienna Metro is ~5 miles away ([Stadium Journey](https://www.stadiumjourney.com/stadiums/eaglebank-arena-s684)). On-campus students lower the share for Mason games. |
| V-07 | SECU Stadium | **Unknown** | — | — | — | Shuttles exist but no split found; student walk-ins likely significant. Current fallback provisionally applies. |
| V-08 | Xfinity Center | **Unknown** | — | — | — | Not researched; fallback provisionally applies. |
| V-09 | Merriweather Post Pavilion (edge) | **0.95** | 0.90–0.98 | Moderate | Estimated | Free parking across more than a dozen lots, no reservation needed ([venue](https://merriweathermusic.com/parking/)); ~90% of attendees from outside Howard County; no general shuttle found. |
| V-10 | Wolf Trap Filene Center | **0.90** | 0.85–0.95 | Low | Estimated | Free but limited parking; the Route 480 shuttle from McLean Metro runs every ~20 min from two hours before showtime ([NPS](https://www.nps.gov/wotr/planyourvisit/publictransportation.htm)). Riders who drive to the McLean garage are car-involved. Ridership on Route 480 not found. |
| V-11 | Jiffy Lube Live (edge) | **0.97** | 0.93–0.99 | Moderate | Estimated | Parking fee added to every ticket; lots adjacent ([Consequence](https://concerts.consequence.net/venues/jiffy-lube-live-1-tickets)); no transit service found. |
| V-12 | The Anthem | **Unknown** | — | — | — | Wharf parking often sells out ([DC Music Review](https://dcmusicreview.com/venue-review-anthem-washington-d-c)); Waterfront Metro ~4 blocks. Fallback provisionally applies. |
| V-13 | Echostage | **Unknown** | — | — | — | Fallback provisionally applies. |
| V-14 | CareFirst Arena | **Unknown** | — | — | — | Metro station adjacent (~3-min walk), limited paid lot ([Koobit event page](https://www.koobit.com/mystics-vs-tempo-e142475)). Fallback provisionally applies. |
| V-15 | Kennedy Center | **Unknown** | — | — | — | Operating status uncertain. |
| E-01–E-06 | Open-site events (section 6) | **Unknown** | — | — | — | No attendance denominators that would support a share. |

---

## 6. Venue operations, parking and access

| ID | Parking supply & remote arrangements | Event operations / closures | Start/end transit service verified? | Access constraints & shared approaches |
|---|---|---|---|---|
| V-01 | Garages bookable in advance; no venue lot | Street closures used during 2018 Stanley Cup run; Monumental paid ~$100,000 for an extra hour of Metro after a 2018 watch party ([MyMCMedia](https://archive.mymcmedia.org/tag/metro-trains/)) | Event-specific extensions occur (e.g., 2024 playoff late trains from Gallery Place/Metro Center, [WUSA9](https://www.wusa9.com/article/sports/nhl/capitals/metro-extends-train-service-for-caps-playoff-game-3-and-four/65-5ab2e91c-6a74-49ca-980d-96f9c55c9952)); regular-season end-time service not separately verified | Sits over Gallery Place (Red/Yellow/Green) with Metro Center, Judiciary Sq, Archives nearby ([WMATA events page](https://wmata.com/rider-guide/events)); shares stations with Mall events and the Convention Center; construction entrances changing through 2027 |
| V-02 | Limited team lots; DDOT curb management; charter bus staging on 1st/2nd St SE | Annual DDOT TOPP covers closures, TCOs, signal timing and Metro times ([2024 TOPP](https://ddot.dc.gov/sites/default/files/dc/sites/ddot/page_content/attachments/Audi%20Field%20%2B%20Nats%20Park%202024%20TOPP%2C%20April%2025%2C%202024.pdf)) | WMATA runs special game-day Green Line trains ([PlanItMetro](https://planitmetro.com/?p=10004)) | Shares South Capitol St, M St SE/SW and Navy Yard station with Audi Field |
| V-03 | 3,750 spaces secured in garages within 15–20 min walk; ~600–850 metered on-street spaces possible ([2016 CTR](https://app.dcoz.dc.gov/Exhibits/2010%5CZC%5C16-02/Exhibit51.pdf)); team suggests parking at Anacostia Metro | First St closed up to 6 hours pre-event | Covered by joint TOPP; Navy Yard preferred | DDOT's 2014 SE/SW study found simultaneous weeknight events at all venues would exceed road and transit capacity ([same CTR](https://app.dcoz.dc.gov/Exhibits/2010%5CZC%5C16-02/Exhibit51.pdf)); team committed to avoid overlapping Nationals dates |
| V-04 | ~22,000 spaces; tailgating culture | $15 special-event parking fee at Morgan Blvd / Downtown Largo for non-riders ([WMATA](https://wmata.com/rider-guide/events)) | Extended service verified for a 2025 Sunday-night game, entry only at the two nearest stations ([Commanders](https://www.commanders.com/news/metro-and-washington-commanders-partner-to-provide-extended-service-after-sunday-night-game-against-falcons)) | Beltway access; walk to Metro 20+ minutes; Blue/Silver Line shared with RFK area in future |
| V-05 | ~8,000 planned (see conflict above) | Tailgating to migrate to garage roofs as surface lots redevelop | Stadium-Armory expansion (funded) + Gold Line BRT (design only) | Kingman Park residential edge; existing station would need >2 hours to clear a crowd without upgrades ([WUSA9](https://www.wusa9.com/article/news/investigations/commanders-stadium/ward-7-residents-pushback-against-plan-to-not-build-a-new-metro-station-at-the-rfk-site-kingman-park/65-cd447e91-afa8-46f6-9558-745966444078)) |
| V-06 | Parking included in ticket; Shenandoah deck opened for events | Campus traffic advisories on event nights ([GMU](https://construction.sitemasonry.gmu.edu/news/2024-11/fairfax-campus-notice-parking-and-traffic-advisory-nov-20-21)) | No | Braddock Rd approach shared with campus traffic |
| V-07 | Lots 1/Z; Stadium Drive Garage at $3/hour ([UMD](https://umterps.com/facilities/secu-stadium/1)) | Game-day lot restrictions | Shuttle-UM from College Park Metro on game days | US-1 / Route 193; Purple Line campus stops from late 2027 |
| V-09 | Free, 12+ lots, ADA lots 2 and 4 | Eastbound Broken Land Pkwy ramp to southbound US-29 closed from July 7, 2026 ([venue](https://merriweathermusic.com/parking/)) | No general service | US-29 corridor; shares Columbia Town Center/mall roads |
| V-10 | Free, limited; McLean garage $2 for 2 hours | — | Yes for Filene summer shows: last bus out departs 20 min after show, cap 11:15 pm Sun–Thu, midnight Fri–Sat ([Wolf Trap](https://www.wolftrap.org/directions)); no service for Barns or holiday sing-along | Trap Rd / Dulles Toll Rd |
| V-11 | Adjacent lots, fee in ticket | — | No | I-66 corridor |
| V-12 | Wharf garage, ~$45 for 4+ hours (2019) ([DC Music Review](https://dcmusicreview.com/venue-review-anthem-washington-d-c)) | — | Not verified | Maine Ave; shares Wharf crowds; near Nats/Audi cluster |
| V-14 | Limited paid Green Lot | Rideshare zone on Oak Dr | Not verified | Congress Heights Green Line |

---

## 7. Regional conclusion

### 7.1 Capacity-weighted car share (one configuration per venue; no mutually exclusive configs added)

Weights are the single sourced capacity in section 3. Venues with **Unknown** shares or **unverified** capacities (SECU, Xfinity, Wolf Trap, Anthem, Echostage, CareFirst, Kennedy Center) are excluded and listed as missing coverage.

| Set | Venues & weights | Weighted car share (central) | Range (using row ranges) |
|---|---|---|---|
| A. DC only | V-01 20,282; V-02 41,339; V-03 19,000 | **0.45** (36,318 ÷ 80,621) | 0.35–0.57 |
| B. Recommended core (A + inner suburbs) | A + V-04 64,000 + V-06 10,000 | **0.64** (99,518 ÷ 154,621) | 0.54–0.74 |
| C. Core without Northwest Stadium | A + V-06 | **0.50** (45,118 ÷ 90,621) | — |
| D. Core + edge venues | B + V-09 19,319 + V-11 25,000 | **0.71** (142,121 ÷ 198,940) | — |
| E. Post-2030 scenario (projection) | B with V-04 replaced by V-05 65,000 @ 0.42 | **0.47** (72,418 ÷ 155,621) | — |

All weighted values are my arithmetic on the linked capacities and the row values in section 5.

### 7.2 Typical-attendance-weighted car share (partial)

| Venue | Typical attendance used | Source | Car share |
|---|---|---|---|
| V-01 | 13,183 (calc: 65% average occupancy across all events × 20,282) | Occupancy from [Kimley-Horn/CTB](https://ctb.virginia.gov/media/ctb/agendas-and-meeting-minutes/2024/feb/pres/Potomac-Presentation.pdf) | 0.35 |
| V-02 | 31,000 (2014 average; dated) | [PlanItMetro](https://planitmetro.com/?p=10004) | 0.50 |
| **Result** | 44,183 | — | **0.46** (calc) |

Typical attendance for Audi Field, Northwest Stadium, EagleBank Arena and the amphitheatres was **not found**, so this weighting covers only two venues and should be treated as indicative.

### 7.3 Do huge outlying venues obscure the downtown pattern?

Yes. Northwest Stadium alone is ~41% of the core capacity weight (64,000 of 154,621, calc) and moves the core average from 0.50 to 0.64. It hosts a small number of NFL dates per year, compared with a renovated Capital One Arena targeting about 250 events annually ([MSE via YSBR](https://youthsportsbusinessreport.com/the-new-capital-one-arena-will-host-250-events-youth-sports-could-fill-the-gaps/)) and an 81-game MLB home schedule ([PlanItMetro](https://planitmetro.com/?p=10004)). Adding the edge amphitheatres pushes the average to 0.71, but those are seasonal, suburban and partly in another metro's orbit.

### 7.4 Recommendation and strongest contrary evidence

**Recommended: `transit`** (fallback 0.40), confidence low–moderate.

Why: the DC-only capacity-weighted share (0.45), the partial typical-attendance share (0.46), the core-without-outlier share (0.50) and the post-2030 projection (0.47) all sit much nearer 0.40 than 0.85. The venues most likely to fall back on the default are the many smaller DC rooms near Metro (Anthem, Echostage, CareFirst, theatres), for which an 0.85 default would roughly double the plausible car share.

**Strongest contrary evidence (for `hub`):**
- The core capacity-weighted share including Northwest Stadium is 0.64, slightly closer to 0.85 than to 0.40, and 0.71 with edge venues included.
- Every suburban 5,000+ venue estimated here (Northwest Stadium, EagleBank, Wolf Trap, Merriweather, Jiffy Lube Live) sits at 0.85–0.97.
- Even at Nationals Park, the best-measured downtown venue, Metro carried only about a third of fans, and my central car estimate (0.50) is above the `transit` default.
- The direct evidence is old (2008 comparison table, 2014 ridership) and mostly not a person-level survey.

**Venue exceptions that must carry overrides under `transit`:** V-04 (0.85), V-06 (0.88), V-10 (0.90), V-09 (0.95, if included), V-11 (0.97, if included). If the app's fallback in practice applies mainly to suburban rooms outside DC, `hub` would be the better choice.

### 7.5 Clusters, shared roads and shared audiences (separate findings)

| Cluster | Members | Shared approaches | Evidence |
|---|---|---|---|
| Navy Yard / Buzzard Point / Wharf | V-02, V-03, V-12 | South Capitol St, M St SE/SW, SE Freeway, Navy Yard & Waterfront stations | Joint DDOT TOPP; 2014 SE/SW finding that simultaneous events exceed capacity ([CTR](https://app.dcoz.dc.gov/Exhibits/2010%5CZC%5C16-02/Exhibit51.pdf)) |
| Downtown / Penn Quarter / Mall | V-01, Mall events, Freedom 250 course, 2027 NFL Draft | Gallery Place, Metro Center, Judiciary Sq, Archives, Smithsonian, Federal Triangle | Station guidance for Grand Prix and July 4 ([FOX 5](https://www.fox5dc.com/news/freedom-250-indycar-rides-metro-ahead-dcs-grand-prix-weekend-service-info-detours); [WMATA](https://www.wmata.com/news/metro-announces-july-4-service-plans.html)) |
| Same-day Mall + ballpark overlap | July 4 Mall + Nationals game | Green Line / downtown core | ~20,000 midday entries/exits at Navy Yard on July 4, 2023, alongside 60,000 at Smithsonian ([PoPville quoting WMATA](https://www.popville.com/2023/07/410000-folks-rode-metro-on-july-4th-a-level-not-seen-since-2015/)); cherry blossoms + Caps game drove an 877,890-trip day in 2010 ([Progressive Railroading](https://progressiverailroading.com/passenger_rail/news/WMATAs-daily-ridership-reaches-new-No-2-mark-on-alltimehigh-list--22924)) |
| East / Blue-Silver-Orange corridor | V-04 now; V-05 from 2030 | Blue/Silver Line; Benning Rd / H St (future Gold Line) | WMATA RFK study |
| College Park | V-07, V-08 | US-1, Green Line; Purple Line from late 2027 | UMD DOTS; Purple Line schedule |
| Northern Virginia suburban | V-06, V-10, V-11 | Braddock Rd; Dulles Toll Rd/Silver Line; I-66 | Venue pages |
| Shared audiences | Capitals/Wizards region-wide ticket base | — | Kimley-Horn trip distribution (labels unrecoverable) |

---

## 8. Event-specific rows (not fixed-capacity venues)

| ID | Event & date | Crowd figure (type) | Transit evidence | Car share | Operations |
|---|---|---|---|---|---|
| E-01 | July 4, 2026 — America 250 on the National Mall (Great American State Fair, fireworks) | Attendance denominator **not found** | **Conflict:** WMATA's GM cited >866,000 bus + rail trips Saturday into Sunday, incl. >120,000 after midnight ([WTOP](https://wtop.com/tracking-metro-24-7/2026/07/metro-set-ridership-records-july-fourth-wmata-says/)); Washingtonian reported a preliminary 667,652 passengers ([Washingtonian](https://washingtonian.com/2026/07/06/what-people-are-saying-about-those-crazy-july-4-metro-lines/)). WTOP notes the counting method was unclear because rides were fare-free | Unknown | Fencing, airport-style checkpoints, road closures; fare-free after 5 pm; free Metro parking; some stations exit-only after 5 pm and entry-only after 9 pm ([WMATA](https://www.wmata.com/news/metro-announces-july-4-service-plans.html)) |
| E-02 | July 4, 2023 — Mall fireworks + Nationals game | Not found | ~410,000 rail riders; Smithsonian 60,000 entries+exits ([PoPville/WMATA](https://www.popville.com/2023/07/410000-folks-rode-metro-on-july-4th-a-level-not-seen-since-2015/)) | Unknown | Fare-free after 5 pm |
| E-03 | Freedom 250 Grand Prix (IndyCar street race), Aug 22–23, 2026 | Organizer expectation ~140,000 spectators/day (**projection**, not a count) ([NoVA Magazine](https://northernvirginiamag.com/news/2026/07/31/what-to-know-about-the-freedom-250-grand-prix-in-dc/)); two days must not be summed into one crowd | Normal weekend service with extra trains on standby; bus detours ([FOX 5](https://www.fox5dc.com/news/freedom-250-indycar-rides-metro-ahead-dcs-grand-prix-weekend-service-info-detours)) | Unknown | Free general admission via ticketed access; billed as a one-off, not confirmed as recurring ([Reuters via The Star](https://www.thestar.com.my/sport/motorsport/2026/08/21/motor-racing-indycar-takes-to-washington-streets-for-landmark-freedom-250)) |
| E-04 | 2027 NFL Draft, Apr 29–May 1, 2027 (scheduled) | Precedent only: Pittsburgh 2026 drew >805,000 **over three days** ([NFL/AP via WTOP](https://wtop.com/washington-commanders/2026/06/nfl-releases-dates-and-details-for-the-2027-nfl-draft-to-be-held-on-national-mall-in-washington/)); not a simultaneous crowd | Not yet published | Unknown | Theater on the Mall facing the Capitol; fan festival on Pennsylvania Ave NW, 3rd–7th Sts ([NFL](https://www.nfl.com/news/nfl-announces-dates-for-2027-draft-in-washington-d-c)) |
| E-05 | 2014 club soccer match at FedExField (now Northwest Stadium), July 29, 2014 | Attendance not given in source | ~7,500 boarded Metro at Morgan Blvd after the match ([PlanItMetro](https://planitmetro.com/?p=9525)) | Cannot be derived (no denominator) | Base service at Morgan Blvd had just doubled with the Silver Line |
| E-06 | Marine Corps Marathon, Cherry Blossom Festival, Smithsonian Folklife, county fairs | — | Not researched in this pass | Unknown | Coverage gap |

**Park-and-ride treatment.** Anyone who drove to a Metro garage (free on July 4 and weekends) or to McLean for the Wolf Trap shuttle is car-involved. WMATA's event ridership counts do not separate park-and-ride riders from walk-up riders, so Metro boardings overstate wholly non-car travel by an unknown amount.

---

## End matter

### 1. Recommended existing city type and rationale

**`transit`**, low–moderate confidence. DC-only (0.45), core-without-outlier (0.50), partial typical-attendance (0.46) and post-2030 (0.47) car shares cluster near 0.40. Strongest contrary evidence: core capacity-weighted 0.64 (0.71 with edge venues), every suburban large venue at 0.85–0.97, and a Nationals Park central estimate of 0.50. `hub` is the close alternative. Suburban overrides are required either way.

### 2. Car-share values keyed to rows

| Row | Measured | Projected | Estimated (recommended) |
|---|---|---|---|
| V-01 Capital One Arena | — | — | 0.35 (0.25–0.50) |
| V-02 Nationals Park | Metrorail 34% (2014) | 2008 forecast auto 35% (labels unverified) | 0.50 (0.40–0.60) |
| V-03 Audi Field | — | 2,715–3,450 patron cars at sell-out | 0.45 (0.35–0.60) |
| V-04 Northwest Stadium | — | — | 0.85 (0.75–0.92) |
| V-05 RFK stadium (2030) | — | 0.42 (0.38–0.50) | — |
| V-06 EagleBank Arena | — | — | 0.88 (0.75–0.95) |
| V-09 Merriweather (edge) | — | — | 0.95 (0.90–0.98) |
| V-10 Wolf Trap Filene Center | — | — | 0.90 (0.85–0.95) |
| V-11 Jiffy Lube Live (edge) | — | — | 0.97 (0.93–0.99) |
| V-07, V-08, V-12–V-15, E-01–E-06 | — | — | Unknown → current fallback applies provisionally |

### 3. Boundary recommendation and inconsistencies between briefs

**Recommended boundary:** DC + Arlington, Alexandria, Montgomery, Prince George's, Fairfax (including the independent cities of Fairfax and Falls Church) and Loudoun. **Edge, assess separately:** Prince William (Jiffy Lube Live) and Howard (Merriweather; Baltimore MSA). Baltimore remains a separate candidate.

**Inconsistencies:**
- The brief lists **Wolf Trap** as a boundary case, but it is in Fairfax County, which the brief itself places in scope. The real edge cases are Merriweather (Howard County) and Jiffy Lube Live (Prince William County), and the latter is not mentioned in the brief despite being the largest amphitheatre found.
- **Georgetown** basketball's main venue is Capital One Arena, so it is not a separate venue row.
- **CareFirst Arena** is below the 5,000 priority threshold (4,200).
- The **companion venue answer** was unavailable; row keys here are this file's own.
- **Commanders:** the "actual dated home" is Northwest Stadium; the RFK replacement is a projection for 2030, beyond the 2028 window.

### 4. Data gaps, model limitations, source conflicts, inaccessible sources

**Gaps:** no current (post-2019) person-level mode survey for any DC venue; no measured split for Capital One Arena, Audi Field, Northwest Stadium, SECU Stadium or any amphitheatre; capacities not verified for Xfinity Center, Wolf Trap Filene Center, Kennedy Center rooms, Walter E. Washington Convention Center, DAR Constitution Hall, Warner Theatre, Strathmore, MGM National Harbor theater, Segra Field (Loudoun), Capital One Hall (Tysons) and Show Place Arena; no attendance denominators for Mall events; Route 480 and Shuttle-UM event ridership not found; no evidence separating winter/summer or weekday/weekend beyond the 2014 Nationals day-of-week split.

**Model limitations:** the brief's settings use one regional fallback for a bimodal region; venue overrides carry most of the accuracy. Metro boardings don't distinguish park-and-ride. 2014 Nationals data predate rideshare growth, post-pandemic travel changes and Navy Yard's residential build-out.

**Conflicts preserved:** SECU capacity (46,185 vs 51,802); Merriweather capacity (19,319 vs ~15,000); RFK parking (~8,000 vs 6,000); July 4, 2026 ridership (866,000 bus+rail trips vs 667,652 passengers); Nationals Metro share (published 34% vs my 35.4% recomputation — definitional, minor).

**Inaccessible / incomplete sources:** WMATA board PDF "3B-Transit-Improvements-to-Support-RFK-Development" returned **HTTP 404** on fetch; I used its search snippet and a related WMATA board PDF snippet only. The 2008 DDOT TMP PDF's table column headers did not survive text extraction. The full Kimley-Horn report and DC United TMP attachments were not retrieved. ACS tables were not pulled directly.

### 5. Confirmed transport or venue changes through 2028

| Change | Date | Status | Suggested re-check |
|---|---|---|---|
| Capital One Arena renovation (six phases; DC $515M + Monumental $285M) completes before 2027–28 NBA/NHL seasons ([FOX 5](https://fox5dc.com/news/515-million-capital-one-arena-reconstruction-underway-pictures-show-futuristic-design)); MSE now cites >$1B and ~250 events/yr ([YSBR citing MSE](https://youthsportsbusinessreport.com/the-new-capital-one-arena-will-host-250-events-youth-sports-could-fill-the-gaps/)) | Fall 2027 | **Scheduled & funded** | Oct 2027 |
| Purple Line light rail (Bethesda–New Carrollton, incl. UMD campus) | Late 2027 (Dec 2027 target); latest early 2028 per MTA ([Mass Transit](https://www.masstransitmag.com/rail/infrastructure/article/55375912/the-mdot-mta-purple-line-nearly-two-decades-in-the-making); [Washingtonian](https://washingtonian.com/2026/04/03/the-latest-on-marylands-upcoming-purple-line/)) | **Scheduled & funded**, under construction | Jun 2027, Jan 2028 |
| Stadium-Armory station expansion, up to $300M approved by DC Council; WMATA funding agreement July 2026 ([WJLA](https://wjla.com/news/local/dc-council-gold-line-emergency-money-funding-transportation-bus-stadium-armory-rfk-stadium-site-h-street-benning-environment-washington-metro-kingman-park-allen)) | Construction within window; completion targeted before 2030 | **Funded** | Mid-2027 |
| Gold Line BRT (Union Station–RFK) — only $5M for planning/30% design | Design phase | **Proposal / partially funded** | Mid-2027 |
| RFK stadium district utility work begins ([Axios](https://www.axios.com/local/washington-dc/2026/01/20/development-project-news-2026)); stadium opens 2030 | 2026 start; 2030 open | Scheduled (beyond window) | Annually |
| 2027 NCAA Men's Frozen Four and 2028 NCAA Women's Basketball Regional at Capital One Arena ([YSBR citing MSE](https://youthsportsbusinessreport.com/the-new-capital-one-arena-will-host-250-events-youth-sports-could-fill-the-gaps/)) | 2027; 2028 | **Scheduled events** | Early 2027 |
| 2027 NFL Draft on the Mall | Apr 29–May 1, 2027 | **Scheduled event** | Feb 2027 |
| Kennedy Center closure for renovation, contingent on litigation | Board vote Sept 15, 2026 | **Uncertain** | Dec 2026 |
| Merriweather access: Broken Land Pkwy EB → US-29 SB ramp closed | From July 7, 2026 | In effect | Before 2027 season |
| Potomac Yard arena (Alexandria) | — | **Dead proposal**; teams stay at Capital One Arena under 2024 DC deal ([NCPC](https://www.ncpc.gov//docs/actions/2025July/8617_Capital_One_Arena_Improvements_Staff_Report_Jul2025.pdf)) | None needed |

*Public data only. No app code, hand flags, personal ratings or cost commitments are included.*
