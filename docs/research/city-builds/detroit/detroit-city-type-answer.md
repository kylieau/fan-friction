# Detroit city-type answer: how people reach event venues

**Research date:** 12 October 2026 (public web sources only; no paid or login-gated material accessed).
**Purpose:** assess Fan/Friction's existing city types (`sprawl`, `hub`, `transit`) for the Detroit region against public evidence of *event* travel. Ordinary commuting data appears only where labelled **background**.
**Existing settings assessed (not changed):** fallback car share 0.85 for `sprawl` and `hub`, 0.40 for `transit`; venue-specific shares override.

---

## 1. Bottom line

- **Recommended existing type: `sprawl`.** No public source found for any Detroit-region venue shows a measured event car share. Every piece of indirect evidence (transit ridership spikes, parking supply, operator advice, regional commute background) points to private cars carrying the large majority of attendees at every recurring venue, with transit visible only at one-off mega-events and still dwarfed by car arrivals.
- **Strongest contrary evidence (for `hub`):** the compact downtown cluster (Ford Field, Comerica Park, Little Caesars Arena, Fox Theatre and several theatres within walking distance of each other) shares parking and freeway exits, and the 2024 NFL Draft showed downtown circulators can move very large volumes when run free and frequently. That is evidence of *crowd overlap*, not of transit-dominant access.
- **No evidence supports `transit` (0.40)** for any venue or event in the region.
- Because `sprawl` and `hub` share the same 0.85 fallback, the type choice changes only the spill behaviour, not the fallback car share.
- **The 0.85 fallback sits inside the estimated range for downtown venues** (estimate ≈0.88) **but below the estimated range for the suburban amphitheatres** (≈0.95–0.97). Venue-specific overrides therefore matter most outside downtown. No new constant is proposed.

---

## 2. Definitions used throughout

| Term | Meaning in this document |
|---|---|
| Car-involved trip | Any trip in which the attendee travelled by private car, carpool, taxi or rideshare for any leg, **including** driving to remote parking and then riding a shuttle, the QLINE or the People Mover. |
| Park-and-ride | Counted as **car-involved**. Shuttle or streetcar boardings from a park-and-ride lot are never counted as non-car. |
| Non-car transit | Bus or rail where the attendee reached the boarding point on foot, by bike or by another transit leg. |
| Rides / boardings | Vehicle boardings reported by an operator. One attendee making a round trip produces at least two boardings; circulators (QLINE, People Mover) also carry the same person several times. **Boardings are never treated as attendees.** |
| Attendance | Reported visits or tickets. Multi-day totals (e.g., a three-day festival) are **visit counts, not one simultaneous crowd**, and may count the same person more than once. |
| Ticket buyers | Not used as a denominator anywhere; no source reported buyers separately. |
| Vehicles vs people | Parking spaces are vehicles. They are converted to people only as a plausibility check (assumed occupancy shown), never as a mode share. |
| Evidence label | **M** measured event split; **P** projected (planning study); **E** transparent estimate from local evidence plus comparators; **F** unknown, current fallback provisionally applies. |

---

## 3. Background only: ordinary commuting (not event travel)

These figures describe journeys to work and are shown only to characterise the region. They are **not** used as event mode shares.

| Indicator | Value | Source |
|---|---|---|
| Southeast Michigan commuters driving alone, 2023 | 73.8% | [SEMCOG commute dashboard](https://maps.semcog.org/EconomicDashboard/chart/ei_work_travel_mode.html) |
| Carpool, 2023 | 7.9% | [SEMCOG](https://maps.semcog.org/EconomicDashboard/chart/ei_work_travel_mode.html) |
| Work from home, 2023 | 14.2% | [SEMCOG](https://maps.semcog.org/EconomicDashboard/chart/ei_work_travel_mode.html) |
| Public transit, 2023 | 1.1% | [SEMCOG](https://maps.semcog.org/EconomicDashboard/chart/ei_work_travel_mode.html) |
| SEMCOG 2026 access report finding | Driving is by far the dominant way residents reach core services | [Michigan Public, 23 Jan 2026](https://www.michiganpublic.org/transportation-infrastructure/2026-01-23/semcog-report-metro-detroit-remains-car-dependent-transit-challenges-persist) |

---

## 4. Boundary

### 4.1 Working boundary and recommendation

| Area | Population | Status recommended | Reasoning |
|---|---|---|---|
| Detroit–Warren–Dearborn MSA (Wayne, Oakland, Macomb, Livingston, St. Clair, Lapeer) | 4,390,913 (2025 est.) per [Michigan statistical areas](https://en.wikipedia.org/wiki/Michigan_statistical_areas); 4,400,578 (2024) per [FRED/Census](https://fred.stlouisfed.org/data/DWLPOP) | **Core region** | Contains the downtown cluster and all three 313 Presents suburban amphitheatres, which share one promoter and one regional audience. |
| Washtenaw County (Ann Arbor, Ypsilanti) | In the Detroit–Warren–Ann Arbor CSA ([Metro Detroit](https://en.wikipedia.org/wiki/Metro_Detroit)) | **Edge sub-region, assess separately** | Michigan Stadium (107,601) would be over a third of regional fixed capacity and has a campus walk-in pattern unlike Detroit's; it would distort a region-wide weighted share (see §8). A dedicated Ann Arbor–Detroit event bus (D2A2) exists, showing some audience exchange. |
| Windsor, Ontario | Not researched for population | **Edge, cross-border; venues not covered** | Cross-border public event transit ended with Transit Windsor's special-events bus on 20 Dec 2025 ([CTV](https://www.ctvnews.ca/windsor/article/end-of-the-road-windsor-detroit-tunnel-bus-service-ends/)); a private Linq Tunnel Bus began in October 2025 ([bus-news](https://bus-news.com/windsor-detroit-tunnel-bus-shows-border-mobility-is-more-than-trucks-and-cars/)). Windsor audiences reach Detroit venues, but Windsor venues were not enumerated. |
| Monroe and Genesee (Flint) counties | CSA members ([Metro Detroit](https://en.wikipedia.org/wiki/Metro_Detroit)) | Outside; edge municipalities | No major event venues identified in this research. |

**Evidence limits on the boundary:** no public ticket-origin, attendee-postcode or event-travel survey was found for any Detroit venue. The boundary recommendation therefore rests on population, statistical-area definitions, the location of venues, and service evidence (D2A2 and tunnel bus), not on observed audience catchments.

### 4.2 Edge municipalities to flag

Ypsilanti (EMU Convocation Center, Washtenaw); Ann Arbor (Michigan Stadium, Crisler Center, Hill Auditorium, Michigan Theater); Hamtramck (Keyworth Stadium, inside MSA but a separate city); Independence Township/Clarkston (Pine Knob, inside MSA, ~I-75 exit 89); Windsor (cross-border).

---

## 5. Venue coverage list (fixed rooms ≈1,000+)

The companion venue answer was **not available**, so venues were enumerated independently. The main enumeration source is a **2017** Crain's list ([Crain's Detroit, 24 Oct 2017](https://prod.crainsdetroit.com/article/20171024/news/643081/metro-detroits-major-entertainment-venues)); capacities from it are flagged as not re-verified for 2026 unless a newer source is cited. Feed coverage and local ticketing were **not verified** for any venue.

| ID | Current name (verified?) | Municipality | Capacity / configuration | Capacity source | Travel row |
|---|---|---|---|---|---|
| V1 | Ford Field (verified) | Detroit | ~65,000 football; expandable to 70,000 football / 80,000 basketball | [Ford Field](https://wikipedia.com/wiki/Ford_Field) | D1, D2 |
| V2 | Comerica Park → **Fifth Third Park from the 2027 season** (verified) | Detroit | 41,297 (2017) | [Crain's 2017](https://prod.crainsdetroit.com/article/20171024/news/643081/metro-detroits-major-entertainment-venues); rename: [MLB.com, 21 Sep 2026](https://www.mlb.com/milb/news/tigers-ballpark-name-changed-to-fifth-third-park) | D3 |
| V3 | Little Caesars Arena (verified) | Detroit | ~20,000 | [Fox 2](https://fox2detroit.com/news/first-inside-look-of-detroits-little-caesars-arena); [313 Presents](https://www.313presents.com/venue) | D4 |
| V4 | Fox Theatre | Detroit | 5,174 (2017) | [Crain's 2017](https://prod.crainsdetroit.com/article/20171024/news/643081/metro-detroits-major-entertainment-venues) | D5 |
| V5 | Masonic Temple (Masonic Theatre main room) | Detroit | 4,650 main room; 8,266 across all rooms (2017) | [Crain's 2017](https://prod.crainsdetroit.com/article/20171024/news/643081/metro-detroits-major-entertainment-venues) | Fallback |
| V6 | Chene Park Amphitheatre (current name **not verified**) | Detroit (riverfront) | 6,000 (2017) | [Crain's 2017](https://prod.crainsdetroit.com/article/20171024/news/643081/metro-detroits-major-entertainment-venues) | D6 |
| V7 | Fillmore Detroit | Detroit | 2,888 (2017) | Same | Fallback |
| V8 | Detroit Opera House | Detroit | 2,700 (2017) | Same | Fallback |
| V9 | Sound Board, MotorCity Casino | Detroit | 2,405 (2017) | Same | Fallback |
| V10 | Fisher Theatre | Detroit | 2,089 (2017) | Same | Fallback |
| V11 | Orchestra Hall (Max M. Fisher Music Center) | Detroit | 2,000 (2017) | Same | Fallback |
| V12 | Harpos Concert Theatre | Detroit | 2,000 (2017) | Same | Fallback |
| V13 | Music Hall Center | Detroit | 1,730 (2017) | Same | Fallback |
| V14 | Majestic Theatre | Detroit | 1,550 (2017) | Same | Fallback |
| V15 | Saint Andrew's Hall | Detroit | 1,000 main hall (2017) | Same | Fallback |
| V16 | Keyworth Stadium (verified current DCFC home through 2027) | Hamtramck | 7,900 | [DBusiness](https://www.dbusiness.com/daily-news/detroit-city-fc-unveils-plans-for-new-soccer-stadium-in-corktown/) | D7 |
| V17 | AlumniFi Field (under construction; opening spring 2028) | Detroit (Corktown/Mexicantown) | ~15,000 planned | [WXYZ](https://www.wxyz.com/sports/detroit-city-fc-pushes-back-opening-of-new-stadium-to-spring-of-2028) | D8 |
| V18 | Pine Knob Music Theatre (verified; formerly DTE Energy Music Theatre) | Independence Twp (Clarkston) | 15,274 (7,202 pavilion, 8,072 lawn; 2017) | [Crain's 2017](https://prod.crainsdetroit.com/article/20171024/news/643081/metro-detroits-major-entertainment-venues) | S1 |
| V19 | Meadow Brook Amphitheatre (verified) | Rochester Hills | 7,700 (2,819 pavilion, 4,882 lawn = 7,701) | [313 Presents](https://313presents.com/MeadowBrook); [Meadow Brook](https://en.wikipedia.org/wiki/Meadow_Brook_Amphitheatre) | S2 |
| V20 | Michigan Lottery Amphitheatre at Freedom Hill (verified) | Sterling Heights | 7,200 (4,200 pavilion, 3,000 lawn) **or** 7,300 (conflict, both 313 Presents) | [313 Presents venue list](https://www.313presents.com/venue); [313 Presents venue page](https://www.313presents.com/michigan-lottery-amphitheatre) | S3 |
| V21 | Royal Oak Music Theatre | Royal Oak | 1,700 (2017) | [Crain's 2017](https://prod.crainsdetroit.com/article/20171024/news/643081/metro-detroits-major-entertainment-venues) | Fallback |
| V22 | Macomb Center for the Performing Arts | Clinton Twp | 1,271 (2017) | Same | Fallback |
| V23 | The Crofoot | Pontiac | 1,100 (2017) | Same | Fallback |
| V24 | Michigan Stadium (edge) | Ann Arbor | 107,601 | [MGoBlue](https://mgoblue.com/sports/2017/6/16/facilities-michigan-stadium-html) | A1 |
| V25 | Crisler Center (edge) | Ann Arbor | 12,707 (2017) | [Crain's 2017](https://prod.crainsdetroit.com/article/20171024/news/643081/metro-detroits-major-entertainment-venues) | A2 |
| V26 | EMU Convocation Center (edge; current name not verified) | Ypsilanti | 8,824 (2017) | Same | A3 |
| V27 | Hill Auditorium (edge) | Ann Arbor | 3,528 (2017) | Same | Fallback |
| V28 | Michigan Theater (edge) | Ann Arbor | 1,710 (2017) | Same | Fallback |

**Coverage gaps (not enumerated or not verified):** Huntington Place (convention centre) event halls; Wayne State University venues (no Wayne State room of 5,000+ was confirmed); University of Detroit Mercy arena; Oakland University arena; Yost Ice Arena; Windsor venues (e.g., casino and municipal arenas); any venue opened since 2017 that the Crain's list misses. The 2017 list's statuses (open, renamed, closed) were not individually re-checked except where a newer source is cited.

---

## 6. Venue and event travel table

### 6.1 Mode split and recommended car share

All percentages are **people**, not vehicles. "Car" means car-involved (car, carpool, taxi, rideshare, park-and-ride). Where a cell says "n/m", that mode was not measured by any public source.

| Row | Venue/event, municipality | Setup, date or season | Car / carpool / rideshare | Public bus/rail (non-car) | Event shuttle (non-car) | Walk/bike/other | Unclassified | Sums to 100%? | **Recommended car share (range)** | Label, confidence |
|---|---|---|---|---|---|---|---|---|---|---|
| D1 | Ford Field, Detroit | Lions NFL regular season, mostly Sunday, Sep–Jan; ~65,000 | ~88% est. | ≤~4.5% est. upper bound for QLINE (§7.2); DDOT/SMART n/m | None identified (Wayne State Lot 12 QLINE park-and-ride is car-involved) | n/m | Remainder | Yes, only because "unclassified" absorbs unmeasured walk/bus | **0.88 (0.80–0.94)** | E, low |
| D2 | Ford Field, Detroit | Non-football: NCAA Final Four 3 and 5 Apr 2027 (scheduled); stadium concerts | n/m | n/m | n/m | n/m | 100% | No split exists | **Unknown → fallback 0.85** | F |
| D3 | Comerica Park (Fifth Third Park from 2027), Detroit | Tigers MLB, Apr–Sep, many weekday evenings; ~41,000 | ~88% est. | n/m (QLINE stop at Grand Circus Park) | n/m | n/m | Remainder | Yes via unclassified | **0.88 (0.80–0.94)** | E, low |
| D4 | Little Caesars Arena, Detroit | Red Wings and Pistons (Oct–Apr), concerts year-round; ~20,000 | ~88% est. | n/m (QLINE stop adjacent) | n/m | n/m | Remainder | Yes via unclassified | **0.88 (0.80–0.93)** | E, low |
| D5 | Fox Theatre, Detroit | Theatre/concerts, year-round; 5,174 | n/m | n/m | n/m | n/m | 100% | No split exists | **0.88 (0.78–0.94)** by analogy with D4 (same block, same parking pool) | E, very low |
| D6 | Chene Park Amphitheatre, Detroit riverfront | Summer concerts; 6,000 | n/m | n/m | n/m | n/m | 100% | No split exists | **Unknown → fallback 0.85** | F |
| D7 | Keyworth Stadium, Hamtramck | Detroit City FC (USL), spring–autumn, through 2027; 7,900 | ~78% est. | n/m | n/m | n/m (supporter walk-ins likely but unmeasured) | Remainder | Yes via unclassified | **0.78 (0.60–0.90)** | E, low |
| D8 | AlumniFi Field, Detroit | DCFC from spring 2028 (planned); ~15,000 | No projection found | n/m | n/m | n/m | 100% | No split exists | **Unknown → fallback 0.85** (re-check when a traffic study is published) | F |
| S1 | Pine Knob Music Theatre, Independence Twp | Summer amphitheatre concerts; 15,274 | ~97% est. | None identified | None identified | Negligible (freeway-exit site) | Remainder | Yes via unclassified | **0.97 (0.93–0.99)** | E, medium |
| S2 | Meadow Brook Amphitheatre, Rochester Hills | Summer concerts on Oakland University campus; 7,700 | ~95% est. | n/m | None identified | Small campus walk-in possible | Remainder | Yes via unclassified | **0.95 (0.88–0.98)** | E, low–medium |
| S3 | Michigan Lottery Amphitheatre, Sterling Heights | Summer concerts; 7,200–7,300 | ~96% est. | n/m | None identified | n/m | Remainder | Yes via unclassified | **0.96 (0.92–0.99)** | E, low–medium |
| A1 | Michigan Stadium, Ann Arbor (edge) | U-M football, Saturdays Sep–Nov; 107,601 | ~80% est. | n/m | FootballRide ≤~2–4% of attendances, partly car-involved (§7.3) | n/m; campus walk-in is the key unknown | Remainder | Yes via unclassified | **0.80 (0.65–0.90)** | E, low |
| A2 | Crisler Center, Ann Arbor (edge) | U-M basketball, concerts; 12,707 | n/m | n/m | n/m | n/m | 100% | No split exists | **Unknown → fallback 0.85** (campus walk-in may lower it) | F |
| A3 | EMU Convocation Center, Ypsilanti (edge) | EMU sports; 8,824 | n/m | n/m | n/m | n/m | 100% | No split exists | **Unknown → fallback 0.85** | F |
| E1 | 2024 NFL Draft, downtown Detroit (historical, one-off) | 25–27 Apr 2024; 775,000 cumulative three-day visits (not simultaneous) | ~75% est. | D2A2 2,169 riders ≈0.3% of visits (§7.1) | SMART park-and-ride 29,000 riders are **car-involved** | Large but n/m (hotel guests, residents) | Large | Yes via unclassified | **0.75 (0.60–0.90)** | E, low |
| E2 | Detroit Grand Prix, downtown street circuit | 29–31 May 2026; ~156,000 three-day visits in 2025 (not simultaneous); more than half the track free | n/m | n/m | n/m | n/m | 100% | No split exists | **Unknown → fallback 0.85** | F |
| E3 | Movement festival, Hart Plaza | Memorial Day weekend; "100,000+" across three days (low-reliability source) | n/m | n/m | n/m | n/m | 100% | No split exists | **Unknown → fallback 0.85** | F |
| E4 | Thanksgiving Day downtown: parade + Turkey Trot + Lions game | Late Nov (annual) | n/m | QLINE does **not** operate (parade on Woodward) | n/m | n/m | 100% | No split exists | Use D1 for the game; **parade unknown → fallback 0.85** | F |
| E5 | Lions playoff games at Ford Field | Jan 2024 (two games) | n/m | Transit used but delayed by gridlock | n/m | n/m | 100% | No split exists | Use D1 | F |
| E6 | Woodward Dream Cruise, Michigan State Fair, Detroit Jazz Festival, other open-site crowds | Various | Not researched | — | — | — | — | — | **Unknown → fallback 0.85** | Gap |

**Why every split relies on an "unclassified" remainder:** no public source measures walk, bike, regular-route bus or rideshare separately for any venue. Splits sum to 100% only because the unmeasured share is placed in "unclassified". This is stated rather than hidden.

### 6.2 Evidence, parking, operations, constraints and sources

| Row | Evidence type / date | Parking supply and remote arrangements | Event operations, closures, start/end service | Access constraints and shared crowds | Direct sources and method |
|---|---|---|---|---|---|
| D1 | No survey. Transit ridership bounds (2017–2024); comparator surveys (1994–2019); operator advice (2023–2026) | No official supply figure found. Lions sell parking via ParkWhiz and promote alternate freeway routes. Wayne State Lot 12 ($5) with QLINE for the 2024 opener (car-involved) | 2024 home opener: QLINE open until midnight; People Mover closed for track replacement until mid-November. For an 8:20 pm kickoff, a midnight QLINE close leaves little post-game margin | Backups expected at I-75 Grand River and I-375 Madison exits; shares approaches and parking with Comerica Park and LCA | [Lions traffic page](https://www.detroitlions.com/game-day/traffic-and-parking); [ClickOnDetroit, 8 Sep 2024](https://clickondetroit.com/news/local/2024/09/08/navigating-tailgating-in-downtown-detroit-ahead-of-lions-home-opener); comparators in [Philadelphia JMT peer review](https://phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf); QLINE bound in §7.2 |
| D2 | Schedule only | As D1 | Final Four dates 3 and 5 Apr 2027 | Spring weekend; overlaps possible with Tigers home games | [Ford Field](https://wikipedia.com/wiki/Ford_Field) |
| D3 | No survey. Comparators | Shares downtown pool with Ford Field and LCA (no venue-specific figure found) | QLINE to Grand Circus Park is promoted for Ford Field and Comerica Park | Weekday evening games overlap the PM commute; Memorial Day weekend overlaps with Movement and Grand Prix setup | [SeatGeek guide (QLINE stop)](https://seatgeek.com/blog/detroit-lions-fan-guide-best-ford-field-seats-food-and-more-game-tips); [WXYZ Memorial Day](https://www.wxyz.com/news/detroit-braces-for-massive-memorial-day-weekend-crowds-with-movement-tigers-and-the-weeknd-downtown) |
| D4 | No survey. Philadelphia's independent review listed LCA among researched peers but published **no** LCA split | At opening (2017): ~8,000 spaces within a 10-minute walk incl. 2,500 new ([Fox 2](https://fox2detroit.com/news/first-inside-look-of-detroits-little-caesars-arena)), or 2,600 new + 7,000 existing ([WDIV](https://www.clickondetroit.com/news/traffic-jams-limited-parking-expected-as-little-caesars-arena-opens)); now 32 parking locations ([313 Presents](https://313presents.com/ArenaParking)) | Pre-booked parking via District Detroit; QLINE stop adjacent | Shares parking with Fox Theatre, Comerica Park, Ford Field. **Plausibility only:** 8,000 spaces × 2.3–2.6 people/car (assumed) ≈ 18,400–20,800 people, so supply alone could serve a near-full arena by car; this is **not** a mode share | [JMT peer review](https://phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf) |
| D5 | None venue-specific | Same pool as D4 | n/m | Same block as LCA; simultaneous LCA + Fox events share garages | Analogy to D4 |
| D6 | None | n/m | n/m | Riverfront; shares Jefferson Ave with Grand Prix footprint | — |
| D7 | Indirect only: the club has said parking is a feature missing at Keyworth | No dedicated parking at Keyworth per club | n/m | Neighbourhood stadium; no transit or walk data | [CBS Detroit](https://www.cbsnews.com/detroit/news/detroit-city-fc-new-corktown-stadium); estimate reflects likely higher walk/bike share than downtown pro venues, unmeasured |
| D8 | Planning documents (2025–2026); no mode projection found | Community benefits agreement requires 2,500 spaces around the stadium ([WXYZ](https://www.wxyz.com/news/region/detroit/detroit-city-fc-stadium-moves-closer-to-reality-with-2-million-community-benefits-deal)); on-site 680 ([StadiumDB](https://stadiumdb.com/news/2025/11/usa_green_light_for_the_new_detroit_city_fc_stadium)) or 685 ([WXYZ](https://www.wxyz.com/news/region/detroit/detroit-city-football-club-reveals-timeline-renderings-for-new-corktown-soccer-stadium)); separate 421-space deck ([City CBO deck](https://detroitmi.gov/sites/detroitmi.localhost/files/2025-09/DCFC%20CBO_Community%20Meeting2_FINAL%20UPDATED_08.28.2025.pdf)) | Club says traffic studies will continue after opening | Site beside the I-75/I-96 interchange ([CBS](https://www.cbsnews.com/detroit/news/detroit-city-fc-new-corktown-stadium)) | — |
| S1 | Operator advisories (2019, 2024); FHWA case study (undated) | Large on-site lots; a parking fee was bundled into tickets in the FHWA-documented era ([FHWA](https://ops-dr.fhwa.dot.gov/publications/fhwaop04010/fig_l7_longdesc.htm)); premium close-in parking sold as an add-on from 2024 ([Free Press via AOL](https://www.aol.com/summer-pine-knob-revs-nearly-230404793.html)) | Lots open ~3 hours before showtime; directed egress to Sashabaw Rd, Waldon Rd, Clarkston Rd/M-15; rideshare zone added 2019 | Two-to-three exits only; I-75 construction repeatedly flagged | [313 Presents 2019 advisory](https://www.313presents.com/news/detail/traffic-advisory-new-exit-to-grass-lot-and-rideshare-zone-added-at-dte-energy-music-theatre); no transit service found, hence high estimate |
| S2 | Operator page | n/m; accessible lot beside VIP lot | Two entrances (Walton Blvd, Adams Rd); rideshare point at Meadow Brook Rd/Festival Dr | Campus location | [313 Presents](https://313presents.com/MeadowBrook) |
| S3 | Operator page | South Lot accessible parking | Rideshare drop-off at the banquet centre; gates open 90 minutes before show | — | [313 Presents](https://www.313presents.com/michigan-lottery-amphitheatre) |
| A1 | Shuttle ridership (undated, ~season total); operator pages (2024–2025) | Permit-heavy lots, golf-course and school lots, private lawn parking; free park-and-ride lots (Plymouth Rd, Miller Rd) feed FootballRide (car-involved) | FootballRide every ~20 min from 2 h before kickoff, returns for ~1 h after; Main St one-way southbound to I-94 after games; vehicle-free zone around stadium | Shares Main St/Stadium Blvd with Crisler Center and campus traffic | [U-M DPSS](https://api2.dpss.umich.edu/services/parking-and-transportation/football-game-day-parking); [TheRide 2025](https://theride.org/about/news/take-therides-football-shuttle-uofm-home-games-season); [MGoBlue parking](https://mgoblue.com/news/2019/7/10/Parking_Information_for_Football_Game_Days); [Concentrate](https://concentratemedia.com/footballride0377/) |
| A2–A3 | None | n/m | n/m | Crisler shares the Michigan Stadium athletic campus | — |
| E1 | Operator ridership totals (Apr–May 2024) | SMART park-and-ride shuttles; QLINE park-and-ride in New Center/Midtown | People Mover 24 hours, trains up to every 5 min; QLINE free with extra frequency; QLINE overwhelmed, bus shuttles sent to clear platforms; DDOT routes terminated at Bricktown and Rosa Parks | Three secure entry points; street parking restricted; People Mover the only cross-downtown link | [City of Detroit](https://detroitmi.gov/node/79466); [Free Press via AOL](https://www.aol.com/news/775-000-people-moved-within-134824494.html); [Crain's](https://prod.crainsdetroit.com/node/899041); [Axios](https://www.axios.com/local/detroit/2024/05/03/qline-ridership-breaks-records-during-nfl-draft); method in §7.1 |
| E2 | Organiser attendance (2025); operator notices (2026) | Only the Franklin Garage open inside the footprint, booked in person ([Fox 2](https://fox2detroit.com/news/detroit-grand-prix-parking-transportation-guide)); park-and-ride via QLINE (car-involved) | Closures from 26 May 2026; People Mover 5 am–midnight (29–30 May) and to 11 pm (31 May); DDOT/SMART normal schedules with detours | Jefferson Ave/riverfront closed for a week; tunnel access only from I-375 | [City of Detroit](https://detroitmi.gov/node/107706); [DBusiness](https://www.dbusiness.com/daily-news/detroit-grand-prix-returns-2026-attendance-broadcast-gains/); [WXYZ](https://www.wxyz.com/sports/2026-chevrolet-detroit-grand-prix-everything-you-need-to-know) |
| E3 | Secondary guide only | n/m | n/m | Same weekend as Tigers games and downtown concerts; city expected 150,000+ downtown across events (2024) | [Outdoorsy guide](https://www.outdoorsy.com/guide/movement-detroit) (low reliability); [WXYZ](https://www.wxyz.com/news/detroit-braces-for-massive-memorial-day-weekend-crowds-with-movement-tigers-and-the-weeknd-downtown) |
| E4 | Team notices (2023, 2024) | Fans told to exit freeways on their parking side of Woodward | QLINE not operating; People Mover 6 am–7 pm (2023) and 36 hours non-stop (2024) | Turkey Trot from 7:30 am, parade from 8:45 am, kickoff 12:30 pm (2024) | [Lions 2023](https://www.detroitlions.com/news/detroit-lions-fans-should-expect-additional-traffic-on-thanksgiving-day-x2119); [Lions 2024](https://www.detroitlions.com/news/detroit-lions-fans-should-expect-additional-traffic-on-thanksgiving) |
| E5 | News (Jan 2024) | n/m | Post-game gridlock delayed QLINE and buses, and some fans switched to walking or ride-hailing | Gridlock affected transit as well as cars | [Free Press via AOL](https://www.aol.com/detroit-lions-playoff-games-offer-212814727.html) |

---

## 7. Ridership inference, shown step by step

### 7.1 2024 NFL Draft (E1)

| Step | Value | Source / note |
|---|---|---|
| Attendance denominator | 775,000 three-day visits | [Free Press via AOL](https://www.aol.com/news/775-000-people-moved-within-134824494.html). **Conflict:** WDET reported about 750,000 ([WDET](https://wdet.org/2024/05/08/detroit-people-mover-gave-70000-rides-during-nfl-draft/)). Visits, not unique people. |
| QLINE draft rides | 68,377 (22,792/day) | [Axios](https://www.axios.com/local/detroit/2024/05/03/qline-ridership-breaks-records-during-nfl-draft) |
| QLINE baseline | ~3,300/day typical (Axios) or 3,185/day (2024 annual report figure) | [Axios](https://www.axios.com/local/detroit/2024/05/03/qline-ridership-breaks-records-during-nfl-draft); [Crain's](https://prod.crainsdetroit.com/node/908471) |
| QLINE event increment | 68,377 − 3 × 3,185 ≈ 58,800 rides | Baseline subtraction |
| Convert to people | ÷2 for round trips ≈ 29,400; fewer if people rode several times | Upper bound on people |
| Share of visits | ≈3.8% upper bound | 29,400 ÷ 775,000 |
| But… | QLINE marketed discounted park-and-ride lots in New Center/Midtown ([WXYZ](https://www.wxyz.com/news/nfl-draft/watch-at-12-45-mayor-officials-to-detail-transportation-plan-ahead-of-nfl-draft-in-detroit)) | An unknown part of this 3.8% is car-involved |
| People Mover | 69,211 rides | [Free Press via AOL](https://www.aol.com/news/775-000-people-moved-within-134824494.html); WDET's "roughly 70,000" is rounding. Downtown circulation; many riders were already downtown, so not an access mode |
| SMART park-and-ride | 29,000 people "ushered into the city" ≈3.7% of visits | Same source. **Car-involved** (drove to suburban lots). Unclear whether this counts people or one-way boardings |
| D2A2 Ann Arbor bus | 2,169 riders ≈0.3% of visits | Same source. Crain's quotes "almost 3,000" for the same period ([Crain's](https://prod.crainsdetroit.com/node/899041)); small definitional conflict |
| Micromobility | 1,577 MoGo rides; Lime single-day record 6,033 (Thursday) | Same source; trips, not people |
| **Conclusion** | Clearly identifiable non-car regional access is well under 5% of visits; park-and-ride (car-involved) at least as large; QLINE and People Mover were mostly internal circulation. Walk-in from hotels and downtown homes is large but unmeasured | Supports E1 estimate 0.75 (0.60–0.90), low confidence |

**Correction of a published ratio:** Axios described the QLINE as moving about 9% of the draft crowd. That divides **rides** (68,377) by **visits** (775,000); after round trips and baseline subtraction the people share is at most ~3.8%, partly car-involved.

### 7.2 Upper bound on QLINE contribution for a regular Lions game (D1)

| Step | Value | Source / note |
|---|---|---|
| Highest single-day QLINE ridership before the draft | 9,095 (2017) | [Crain's](https://prod.crainsdetroit.com/node/908471) |
| Typical daily ridership | 3,185 | Same |
| Maximum plausible event increment on a non-draft day | ≤ 9,095 − 3,185 = 5,910 rides | Assumes a Lions game day did not exceed the pre-draft record |
| People (round trips) | ≤ ~2,955 | ÷2 |
| Share of a 65,000 crowd | ≤ ~4.5% | Some riders used the $5 Wayne State park-and-ride, so even this ceiling is partly car-involved |

No game-day QLINE, People Mover, DDOT or SMART counts for a regular Lions, Tigers or arena event were found. The People Mover averaged about 3,900 rides/day in 2024 ([Crain's](https://prod.crainsdetroit.com/node/903276)), but event-day increments are unpublished.

### 7.3 FootballRide at Michigan Stadium (A1)

| Step | Value | Source / note |
|---|---|---|
| Season ridership | "Close to 30,000 people" per season (article undated) | [Concentrate](https://concentratemedia.com/footballride0377/) |
| Home games | Seven in the 2021 season (varies by year) | [TheRide 2021](https://www.theride.org/about/news/take-therides-footballride-um-home-football-games) |
| Season capacity | 7 × 107,601 ≈ 753,000 | [MGoBlue capacity](https://mgoblue.com/sports/2017/6/16/facilities-michigan-stadium-html) |
| Share if 30,000 = people | ≈4.0% | 30,000 ÷ 753,000 |
| Share if 30,000 = boardings | ≈2.0% | Round trips halve it |
| Car-involved part | Free park-and-ride lots and parking structures feed several routes | [annarbor.com](https://www.annarbor.com/news/footballride-shuttle-service-to-michigan-stadium-starts-this-saturday-with-first-wolverines-home-gam/) |
| **Conclusion** | Non-car shuttle use is at most ~2–4%. The unknown that drives A1 is **walking** from campus and central Ann Arbor, not transit | Estimate 0.80 (0.65–0.90), low confidence |

### 7.4 Comparator values used for downtown estimates (D1, D3, D4)

From the City of Philadelphia's independent peer review ([JMT, 2024](https://phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf)): Oakland Coliseum 70% auto (2017); Seattle's baseball park 82% auto (2001); Seattle's football stadium 57.1% auto with 27.6% transit (2010); a 1994 NFL survey of central-business-district stadiums 87% auto. These peers have rail systems Detroit lacks, except the 1994 NFL set. **Source inconsistency preserved:** that 1994 row lists 87% auto and 21% transit, which exceeds 100%; it is used only as a rough indicator. The review also lists Little Caesars Arena and SMART among venues and agencies it researched but publishes no Detroit split, implying none was available to it.

---

## 8. Weighted car shares

### 8.1 Capacity-weighted (fixed venues ≥5,000, one configuration each)

Configurations: Ford Field football (65,000); Comerica Park baseball (41,297); LCA (20,000); Pine Knob full (15,274); Keyworth (7,900); Meadow Brook (7,700); Freedom Hill lower figure (7,200); Chene Park (6,000, fallback 0.85); Fox Theatre (5,174). Masonic Temple is excluded because its largest single room is 4,650 and summing its rooms would add configurations that may not run together. No mutually exclusive configurations are added; no multi-day totals are used.

| Set | Capacity | Weighted car-people | **Capacity-weighted car share** | Envelope (all low / all high) |
|---|---|---|---|---|
| Downtown Detroit (Ford, Comerica, LCA, Fox, Chene) | 137,471 | 120,794 | **0.88** | — |
| Suburban amphitheatres (Pine Knob, Meadow Brook, Freedom Hill) | 30,174 | 29,043 | **0.96** | — |
| Whole MSA set above (9 venues) | 175,545 | 155,999 | **0.89** | 0.81–0.94 |
| MSA set + Ann Arbor/Ypsilanti edge (adds Michigan Stadium 0.80, Crisler 0.85 fallback, EMU 0.85 fallback) | 304,677 | 260,381 | **0.85** | — |

Arithmetic: e.g., MSA set = (65,000×0.88 + 41,297×0.88 + 20,000×0.88 + 15,274×0.97 + 7,900×0.78 + 7,700×0.95 + 7,200×0.96 + 6,000×0.85 + 5,174×0.88) ÷ 175,545 = 155,999 ÷ 175,545 = 0.889. The envelope sets every venue to its range low or range high at once, so it is wider than any realistic combined uncertainty.

### 8.2 Typical-attendance-weighted

**Not computed.** No sourced average attendance per event, or count of event days per season, was gathered for any venue in this research. Weighting by capacity therefore stands in, and over-weights venues that rarely sell out. Missing: per-game attendance for Lions, Tigers, Red Wings, Pistons, DCFC and U-M football; number of shows per season at each amphitheatre.

### 8.3 Do huge outlying venues obscure the downtown pattern?

- **Within the MSA, no.** Downtown venues are 78% of the capacity set (137,471 ÷ 175,545). The amphitheatres raise the weighted share only from 0.88 to 0.89.
- **Adding Ann Arbor, yes.** Michigan Stadium alone is 35% of the expanded set (107,601 ÷ 304,677) and pulls the weighted share from 0.89 to 0.85, driven by an assumed campus walk-in share, not by transit. This is the main reason to treat Ann Arbor as a separate edge sub-region.

---

## 9. Clusters, shared roads and shared audiences (separate findings)

**Venue cluster.** Ford Field, Comerica Park, Little Caesars Arena, Fox Theatre, the Fillmore and Masonic Temple sit in one downtown/Midtown band served by the same QLINE stops (Grand Circus Park and the LCA stop) and the same District Detroit and stadium parking pool ([313 Presents](https://313presents.com/ArenaParking); [SeatGeek guide](https://seatgeek.com/blog/detroit-lions-fan-guide-best-ford-field-seats-food-and-more-game-tips)).

**Shared roads.** Downtown venues share the I-75 Grand River and I-375 Madison exits, the M-10 Lodge, and Woodward Ave ([ClickOnDetroit](https://clickondetroit.com/news/local/2024/09/08/navigating-tailgating-in-downtown-detroit-ahead-of-lions-home-opener); [Lions routes](https://www.detroitlions.com/game-day/traffic-and-parking)). Woodward is also the QLINE route, so a Woodward parade or closure removes the streetcar entirely (Thanksgiving). The riverfront (Hart Plaza, Jefferson Ave, Chene Park) shares closures with the Grand Prix. Pine Knob depends on I-75 exit 89 and Sashabaw Rd. In Ann Arbor, Michigan Stadium and Crisler Center share Main St and Stadium Blvd.

**Recurring crowd overlaps documented.** Thanksgiving (parade, Turkey Trot, Lions game); Memorial Day weekend (Movement, Tigers, downtown concerts, Grand Prix setup; city expected 150,000+ downtown in 2024 per [WXYZ](https://www.wxyz.com/news/detroit-braces-for-massive-memorial-day-weekend-crowds-with-movement-tigers-and-the-weeknd-downtown)); Lions plus Jonas Brothers concert on 23 Nov 2025, for which the People Mover extended hours ([Mass Transit](https://www.masstransitmag.com/rail/maintenance/news/55329615/co-detroit-people-mover-closes-for-track-maintenance)).

**Shared audiences.** 313 Presents books LCA, Pine Knob, Meadow Brook and Freedom Hill and sells tickets for the amphitheatres at the LCA box office ([313 Presents venues](https://www.313presents.com/venue)), indicating one regional concert audience. Windsor fans historically used the tunnel event bus to Ford Field, Comerica Park and LCA ([CBC](https://amp.cbc.ca/lite/story/1.6851880)).

No new distance rule or manual hard-access flag is proposed.

---

## 10. Required closing items

### 1. Recommended existing city type and rationale; strongest contrary evidence

**`sprawl`.** Rationale: (a) no Detroit venue or event has evidence of transit carrying more than a few percent of people, even at the record 2024 NFL Draft once park-and-ride and circulator double-counting are removed (§7.1); (b) regular-game transit is bounded to ≤~4.5% on the QLINE (§7.2); (c) suburban amphitheatres have no event transit and are freeway-exit sites; (d) regional commuting background shows 1.1% transit ([SEMCOG](https://maps.semcog.org/EconomicDashboard/chart/ei_work_travel_mode.html)). Capacity-weighted car share for the MSA set is 0.89 (envelope 0.81–0.94), consistent with a driving region.

**Strongest contrary evidence:** the downtown cluster's walkable shared parking and stops, and the demonstrated (free, high-frequency) circulator capacity during the Draft, could justify `hub` if `hub`'s spill behaviour is meant for co-located crowds rather than for an intermediate mode share. Because both types use 0.85, the choice should follow how Fan/Friction defines spill, which public evidence cannot settle. **Venue exceptions:** Keyworth Stadium (likely higher walk share, estimate 0.78) and Michigan Stadium (campus walk-in, estimate 0.80) sit below the fallback; the amphitheatres (0.95–0.97) sit above it.

### 2. Car-share values keyed to rows

No companion-answer row IDs were available, so keys are this document's row IDs and venue IDs (§5).

| Value type | Rows and values |
|---|---|
| **Measured** (observed event split) | **None found** for any venue or event. |
| **Projected** (planning study) | **None found.** AlumniFi Field (D8) has parking commitments but no published mode projection. |
| **Estimated** (transparent, this document) | D1 Ford Field Lions 0.88 (0.80–0.94); D3 Comerica/Fifth Third Park 0.88 (0.80–0.94); D4 LCA 0.88 (0.80–0.93); D5 Fox 0.88 (0.78–0.94); D7 Keyworth 0.78 (0.60–0.90); S1 Pine Knob 0.97 (0.93–0.99); S2 Meadow Brook 0.95 (0.88–0.98); S3 Freedom Hill 0.96 (0.92–0.99); A1 Michigan Stadium 0.80 (0.65–0.90); E1 2024 NFL Draft 0.75 (0.60–0.90) |
| **Unknown → fallback 0.85 provisionally** | D2 Ford Field non-football; D6 Chene Park; D8 AlumniFi Field; A2 Crisler; A3 EMU Convocation; E2 Grand Prix; E3 Movement; E4 Thanksgiving parade; E6 other open-site events; all fallback venues in §5 |

### 3. Boundary recommendation and inconsistencies between briefs

**Boundary:** model the Detroit–Warren–Dearborn MSA as the core region; treat Washtenaw (Ann Arbor/Ypsilanti) as a separately assessed edge sub-region; treat Windsor as a cross-border edge with venues not yet covered (§4).

**Inconsistencies found:**
- The companion venue answer referenced by the brief was unavailable; venues were enumerated independently from a 2017 list plus newer verification.
- "Comerica Park" becomes **Fifth Third Park** from the 2027 season ([MLB.com](https://www.mlb.com/milb/news/tigers-ballpark-name-changed-to-fifth-third-park)).
- "Detroit City FC venues": the new stadium opens **spring 2028**, not 2027; DCFC plays 2027 at Keyworth ([Fox 2](https://www.fox2detroit.com/news/detroit-city-fc-delays-opening-future-stadium-alumnifi-field)).
- "Wayne State venues": no Wayne State room of 5,000+ was confirmed.
- "Pine Knob Music Theatre" is the current name; older sources call it DTE Energy Music Theatre.
- The brief's "cross-border access" lead: public Transit Windsor event buses ended 20 Dec 2025; yet the City of Detroit's May 2026 Grand Prix notice still listed Transit Windsor as an option ([City of Detroit](https://detroitmi.gov/node/107706)). Likely stale wording; re-check.

### 4. Data gaps, model limitations, source conflicts and inaccessible sources

**Data gaps:** no fan travel survey (Lions, Tigers, Olympia/313 Presents, U-M, DCFC); no event-day ridership for regular games (QLINE, People Mover, DDOT, SMART); no official parking inventories for Ford Field or Comerica Park; no attendance averages (prevents typical-attendance weighting); Dream Cruise, State Fair, Jazz Festival, parade attendance not researched; Windsor venues not covered; feed coverage and local ticketing not verified for any venue.

**Model limitations:** "unclassified" absorbs walk, bike and regular-route bus everywhere; estimates for downtown rely on comparators from cities with rail; capacity weighting over-weights rarely sold-out venues; seasonal service gaps (People Mover closures, no QLINE on Thanksgiving) are not reflected in single annual values.

**Source conflicts (preserved):**

| Topic | Conflict | Sources |
|---|---|---|
| NFL Draft attendance | 775,000 vs about 750,000 | [Free Press via AOL](https://www.aol.com/news/775-000-people-moved-within-134824494.html); [WDET](https://wdet.org/2024/05/08/detroit-people-mover-gave-70000-rides-during-nfl-draft/) |
| D2A2 draft ridership | 2,169 vs "almost 3,000" | [Free Press via AOL](https://www.aol.com/news/775-000-people-moved-within-134824494.html); [Crain's](https://prod.crainsdetroit.com/node/899041) |
| QLINE draft share | "about 9%" is rides ÷ visits; corrected ≤~3.8% people | [Axios](https://www.axios.com/local/detroit/2024/05/03/qline-ridership-breaks-records-during-nfl-draft); §7.1 |
| People Mover annual ridership | 1.32 million in 2025 vs 250,000 riders in FY 2024–25 (possibly different measures); 2024 average ~3,900 rides/day implies ~1.4 million/yr | [Hoodline](https://hoodline.com/2026/09/water-square-people-mover-stop-begins-6-month-facelift-next-week/); [Outlier Media](https://outliermedia.org/?p=54402); [Crain's](https://prod.crainsdetroit.com/node/903276) |
| Freedom Hill capacity | 7,200 vs 7,300 (both operator), 7,500 (2017) | [313 Presents list](https://www.313presents.com/venue); [313 Presents page](https://www.313presents.com/michigan-lottery-amphitheatre); [Crain's 2017](https://prod.crainsdetroit.com/article/20171024/news/643081/metro-detroits-major-entertainment-venues) |
| LCA parking at opening | ~8,000 within 10 min vs 2,600 new + 7,000 existing | [Fox 2](https://fox2detroit.com/news/first-inside-look-of-detroits-little-caesars-arena); [WDIV](https://www.clickondetroit.com/news/traffic-jams-limited-parking-expected-as-little-caesars-arena-opens) |
| AlumniFi parking | 680 vs 685 on-site; 421-space deck vs "400+" deck | §6.2 D8 sources |
| 1994 NFL comparator | 87% auto + 21% transit exceeds 100% | [JMT](https://phila.gov/media/20240731112508/Traffic-Impact-Analysis-FINAL_ENG_7.2024.pdf) |

**Small definitional gaps reconciled:** People Mover draft rides "roughly 70,000" vs 69,211 (rounding); Meadow Brook 7,700 vs 7,701 (rounding of 2,819 + 4,882).

**Inaccessible or limited sources:** Detroit Free Press originals were read via syndicated copies on AOL; some Crain's articles were read on its public mirror; no paywall or login was bypassed. The Lions' traffic page publishes no parking supply. Philadelphia's peer review researched LCA but published no Detroit data. Several venue facts come from low-reliability secondary pages (Movement guide, SeatGeek, a dining blog) and are labelled where used.

### 5. Confirmed transport or venue changes through 2028

| Change | Status | Date(s) | Suggested re-check | Source |
|---|---|---|---|---|
| Gordie Howe International Bridge (Detroit I-75 to Ontario Hwy 401) | **Completed/opened** | Opened to traffic 27 Jul 2026 | Jun 2027 (border-crossing patterns for Windsor audiences) | [ClickOnDetroit, 24 Jul 2026](https://www.clickondetroit.com/news/local/2026/07/24/heres-when-the-gordie-howe-international-bridge-will-open-to-traffic/) |
| Comerica Park renamed Fifth Third Park | **Scheduled** | From the 2027 season; signage changed in 2026–27 offseason | Mar 2027 | [MLB.com](https://www.mlb.com/milb/news/tigers-ballpark-name-changed-to-fifth-third-park); [Newsweek](https://www.newsweek.com/sports/mlb/one-mlb-stadium-is-about-to-be-renamed-after-26-years-12469959) |
| AlumniFi Field (DCFC, ~15,000) | **Under construction, funded privately** | Groundbreaking Jul 2026; opening spring 2028; DCFC at Keyworth through 2027 | Jan 2027 and Jan 2028 | [WXYZ](https://www.wxyz.com/sports/detroit-city-fc-pushes-back-opening-of-new-stadium-to-spring-of-2028); [World Construction Network](https://www.worldconstructionnetwork.com/newsletters/dcfc-breaks-ground-alumnifi-field) |
| NCAA Final Four at Ford Field | **Scheduled** | 3 and 5 Apr 2027 | Jan 2027 (operations plan) | [Ford Field](https://wikipedia.com/wiki/Ford_Field) |
| I-375 freeway-to-boulevard | **Scheduled, partly funded** (federal grant awarded 2022); paused Aug 2025, FHWA traffic approval Jul 2026 | Full freeway closure and main construction 2027, completion 2029; I-75/I-375 interchange rebuild **unfunded** | Spring 2027 | [Interstate Guide](https://www.interstate-guide.com/i-375-mi/); [WXYZ](https://www.wxyz.com/news/voices/i-375-project-to-reconnect-detroit-communities-begins-this-fall-set-to-be-finished-in-2029); [MDOT](https://www.michigan.gov/mdot/news-outreach/pressreleases/2025/11/07/reminder-mdot-hosting-community-meeting-thursday-nov-13-on-next-steps-with-the-i-375-project) |
| People Mover fleet replacement (16 refurbished Toronto cars) | **Budgeted** (FY 2027 hearing) | Timing not stated | Q1 2027 | [Outlier Media](https://outliermedia.org/?p=54402) |
| People Mover Water Square station renovation | **Under way** | From Sep 2026, ~6 months, with intermittent two-day shutdowns; complete by spring 2027 | Apr 2027 | [Hoodline](https://hoodline.com/2026/09/water-square-people-mover-stop-begins-6-month-facelift-next-week/); [Outlier Media](https://outliermedia.org/?p=54402) |
| People Mover system study / expansion | **Proposal only**; expansion would need outside funding | Recommendations expected spring 2026 (publication not confirmed) | Dec 2026 | [WDET](https://wdet.org/2026/02/04/detroit-transportation-corporation-looks-into-how-to-get-the-people-mover-on-track/) |
| People Mover service interruptions | **Occurred** | Closed ~11 weeks Sep–Nov 2024; ~2 weeks Nov 2025; 13 Mar to ~early May 2026 | Before each Lions/Tigers season | [Crain's](https://prod.crainsdetroit.com/node/903276); [Mass Transit 2025](https://www.masstransitmag.com/rail/maintenance/news/55329615/co-detroit-people-mover-closes-for-track-maintenance); [Mass Transit 2026](https://www.masstransitmag.com/rail/news/55375987/mi-detroits-elevated-train-is-moving-again-after-being-shuttered-for-nearly-two-months) |
| QLINE operating subsidy | **Funded**: state $5M/yr through 2039; RTA operator since Oct 2024 | Ongoing | Annually | [Axios](https://www.axios.com/local/detroit/2024/05/03/qline-ridership-breaks-records-during-nfl-draft); [QLINE](https://www.qlinedetroit.com/2024/12/20/qline-surpasses-1-million-riders-in-2024) |
| Transit Windsor tunnel/event bus | **Ended**; private Linq Tunnel Bus replaced regular service, with buses for special events, from Oct 2025 | Regular ended 31 Aug 2025; event bus ended 20 Dec 2025 | Mar 2027 (confirm Linq still operating and event service) | [CTV](https://www.ctvnews.ca/windsor/article/end-of-the-road-windsor-detroit-tunnel-bus-service-ends/); [AM800](https://www.am800cklw.com/news/the-linq-tunnel-bus-now-operating-in-windsor-detroit.html) |

---

*Prepared from public sources accessed on or before 12 October 2026. No app code, hand flags, personal ratings or cost commitments are included.*
