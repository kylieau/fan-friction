# Pittsburgh city-type answer: event travel evidence for Fan/Friction Gridlock

**Research date:** Monday, October 12, 2026. All sources were reached through public web pages on that date. Figures are only as current as the linked source; dates are given wherever the source states them.

**Scope of this file:** public evidence on how people actually reach event venues in the Pittsburgh metro, assessed against the three existing city settings (`sprawl`, `hub`, `transit`) and the existing defaults (0.85 car share for `sprawl` and `hub`, 0.4 for `transit`). No new constants, distance rules or hand flags are proposed. Ordinary commuting data appears only in a clearly labelled background section.

**Companion venue research:** the companion venue answer was not available in this conversation, so venues were enumerated independently. Row IDs below (PGH-xx for fixed rooms, EVT-xx for event/open-site crowds) are this file's own keys; coverage gaps are named in Section 4 of the closing list.

---

## Contents

1. Headline finding
2. Method and definitions
3. Background only: ordinary commuting data
4. Venue and event identity table
5. Mode split table
6. Parking, operations and access table
7. Row-by-row evidence and estimation notes
8. Weighted car shares
9. Clusters, shared roads and shared audiences
10. Boundary assessment
11. Closing list (required items 1–5)

---

## 1. Headline finding

The evidence supports keeping Pittsburgh as **`hub`**. The core venues (North Shore and Downtown) see real transit use, sometimes very large in absolute terms, but the share of attendees whose trip involves a car still appears to sit around 0.75–0.90 for regular sports events, because a large part of the transit use is drive-then-ride: fans park in Downtown garages, Station Square or suburban park-and-ride lots and then take the free or cheap last leg. No public evidence for any Pittsburgh event supports a car share near the `transit` default of 0.4. Outlying venues (Star Lake, remote-parked golf, county fairs) are close to fully car-dependent. No measured, survey-based mode split was found for any Pittsburgh venue; every non-fallback value below is an estimate built from ridership counts, parking arrangements or service availability.

---

## 2. Method and definitions

**People versus vehicles.** All shares in this file are shares of people (attendees), not vehicles. Parking-space counts are never converted into mode shares.

**Car-involved trip.** A trip counts as car-involved if any leg used a private car, carpool, taxi or rideshare. This includes: driving to a Downtown garage and walking or riding the free T to the North Shore; driving to a park-and-ride lot and taking a bus or light rail; driving to Station Square and taking the Gateway Clipper boat; and driving to a remote lot and taking an event shuttle. A shuttle or T ride is counted as non-car only where the rider reached it without a car (for example Pitt students boarding a campus shuttle in Oakland).

**Park-and-ride treatment.** Park-and-ride riders are counted as car-involved. This matters most for PRT's 2026 NFL Draft "Football Flyer" routes, which ran from park-and-ride locations ([Mass Transit](https://www.masstransitmag.com/management/news/55377682/pittsburgh-regional-transit-prt-prt-earns-12-million-in-new-revenue-from-2026-nfl-draft)), and for the long-standing pattern of fans parking Downtown and riding the T, which teams and parking operators actively recommend ([MLB press release, Sept. 14 parking](https://mlb.com/press-release/press-release-north-shore-parking-information-announced-for-september-14-pirates-and-pitt-games)).

**Ridership inference.** Where a transit count is used, this file shows: the raw figure, the baseline subtracted (if any), whether the count is one-way rides or people, the attendance denominator, and the round-trip adjustment (two rides per attendee who uses transit both ways).

**Attendees versus tickets versus visits.** Stadium figures are tickets or turnstile counts; festival and Draft figures are organizer crowd estimates, often summed over several days, and are treated as attendance-visits, not unique people. A multi-day total is never treated as one simultaneous crowd.

**Evidence labels.** Each value is labelled **Measured** (direct survey or count of attendee modes — none found), **Projected** (planning forecast), **Estimated** (derived in this file from public counts and stated assumptions) or **Fallback** (no defensible estimate; the existing `hub` default of 0.85 would provisionally apply).

---

## 3. Background only: ordinary commuting data

These figures describe residents' trips to work. They are **not event travel** and are not used as event mode shares.

| Item | Value | Source |
|---|---|---|
| City of Pittsburgh workers who drive to work (2024 ACS 1-year) | about 56% | [BikePGH, Jan. 2026](https://bikepgh.org/2026/01/06/our-annual-analysis-of-commuting-habits-in-the-60-largest-us-cities-shows-a-comeback-for-active-transportation/) |
| City workers working from home (2024 vs 2019) | about 18% vs about 7% | [BikePGH, Jan. 2026](https://bikepgh.org/2026/01/06/our-annual-analysis-of-commuting-habits-in-the-60-largest-us-cities-shows-a-comeback-for-active-transportation/) |
| City workers commuting by transit (2019 vs latest at Jan. 2025) | 17.3% vs 13.6% | [BikePGH, Jan. 2025](https://bikepgh.org/2025/01/02/were-only-now-seeing-how-the-shock-of-the-pandemic-changed-pittsburgh-commuting-habits/) |

Caveat: these are city-resident figures only; they exclude the suburban and exurban residents who make up most of the event audience across an eight-county metro.

---

## 4. Venue and event identity table

Capacities are by configuration. Alternative configurations of the same room are mutually exclusive and are never added together.

| Row | Verified current name | Municipality | Category | Setup / event represented | Date or season | Capacity or attendance | Sources |
|---|---|---|---|---|---|---|---|
| PGH-01 | Acrisure Stadium | Pittsburgh (North Shore) | Sports, stadium | Steelers NFL game | Fall–winter, mostly Sundays | 68,400 seats | [Wikipedia](https://en.wikipedia.org/wiki/Acrisure_Stadium) |
| PGH-02 | Acrisure Stadium | Pittsburgh (North Shore) | Sports, stadium | Pitt football, reduced configuration | From 2026 season (fall Saturdays) | 51,416 (upper east/west sides closed); 2025 average 51,845 | [CNHI News](https://www.cnhinews.com/pennsylvania/sports/article_193fa8f9-7e9d-5ced-b4b2-ba7c481a788c.html) |
| PGH-03 | Acrisure Stadium | Pittsburgh (North Shore) | Concert, stadium | Taylor Swift Eras Tour, two nights | June 16–17, 2023 (Fri/Sat, summer) | 73,117 (record ticketed event) | [Populous](https://populous.com/projects/heinz-field) |
| PGH-04 | PNC Park | Pittsburgh (North Shore) | Sports, ballpark | Pirates MLB game | April–Sept.; many weeknights plus weekday day games | 38,747 or 38,362 (sources conflict); 2025 average 18,827 | [SI](https://www.si.com/mlb/pirates/news/pittsburgh-pirates-fan-attendance-ranks-near-bottom-mlb); [VisitPittsburgh](https://www.visitpittsburgh.com/things-to-do/pittsburgh-sports-teams/) |
| PGH-05 | PPG Paints Arena | Pittsburgh (Downtown/Lower Hill) | Sports and concerts, arena | Penguins NHL game (primary config) | Oct.–April, mostly weeknights | Hockey 18,187; basketball 19,000; end-stage concert 14,536; center-stage 19,758 | [PPG Paints Arena FAQ](https://www.ppgpaintsarena.com/ppg-paints-arena/faqs) |
| PGH-06 | Petersen Events Center | Pittsburgh (Oakland) | Sports, campus arena | Pitt basketball | Nov.–March | 12,508 basketball; 9,000 end-stage concert | [Pitt Athletics](https://pittsburghpanthers.com/sports/2017/6/17/facilities-pitt-facilities-petersen-html); [Wikipedia](https://en.wikipedia.org/wiki/Petersen_Events_Center) |
| PGH-07 | Stage AE | Pittsburgh (North Shore) | Concert | Outdoor amphitheater (indoor hall is a separate, smaller config) | Outdoor: warm months | Outdoor 5,500; indoor hall 2,400 | [VisitPittsburgh](https://www.visitpittsburgh.com/directory/stage-ae/) |
| PGH-08 | F.N.B. Stadium (Highmark Stadium until April 2026) | Pittsburgh (Station Square, South Shore) | Sports, soccer stadium | Riverhounds SC (USL Championship) | Spring–fall | 5,000 seats | [Mondo Stadia](https://www.mondostadia.com/?p=26419); [Wikipedia](https://en.wikipedia.org/wiki/F.N.B._Stadium_(Pittsburgh)) |
| PGH-09 | Heinz Hall | Pittsburgh (Cultural District) | Theater / concert hall | Pittsburgh Symphony and touring shows | Year-round | 2,661 seats | [Pitt PSTP](https://pstp.pitt.edu/pittsburgh/neighborhoods/downtown) |
| PGH-10 | Benedum Center | Pittsburgh (Cultural District) | Theater | Touring Broadway, opera, ballet | Year-round | Nearly 2,900 (one source); about 2,800 elsewhere — unverified | [CBS Pittsburgh](https://www.cbsnews.com/pittsburgh/news/best-hot-spots-in-pittsburghs-cultural-district/) |
| PGH-11 | UPMC Events Center | Moon Township | Sports, campus arena (suburban) | Robert Morris basketball/volleyball | Nov.–March | 4,000 | [RMU Athletics](https://rmucolonials.com/facilities/upmc-events-center/30) |
| PGH-12 | The Pavilion at Star Lake | Near Burgettstown, Washington County | Concert, suburban amphitheater | Touring concert, sold-out | Summer | About 23,000 | [Wikipedia](https://en.wikipedia.org/wiki/The_Pavilion_at_Star_Lake) |
| EVT-01 | 2026 NFL Draft | Pittsburgh (North Shore + Point State Park) | Open-site mega-event | Three-day draft and fan experience | April 23–25, 2026 (Thu–Sat) | 805,000 attendance over three days; 320,000 on Day 1 | [VisitPittsburgh](https://www.visitpittsburgh.com/media/press-releases/pittsburgh-delivers-historic-success-during-the-2026-nfl-draft/) |
| EVT-02 | Picklesburgh | Pittsburgh (Downtown riverfront, bridges) | Open-site festival | Street festival | July; 3 days in 2025, 4 days in 2026 | 2025: more than 208,000 over the run | [Picklesburgh](https://www.picklesburgh.com/2026picklesburghfootprint/) |
| EVT-03 | Anthrocon | Pittsburgh (convention center) | Convention | Multi-day convention | July 4th weekend 2026 | 20,618 members (2026) | [Wikipedia](https://en.wikipedia.org/wiki/Anthrocon); [WPXI](https://www.wpxi.com/news/local/visitpittsburgh-hopes-major-events-throughout-2026-will-grow-interest-steel-city/DW44NAZKTBBZ7LMHDL376O3MA4/) |
| EVT-04 | 2025 U.S. Open | Oakmont Borough | Open-site sports event (suburban) | Golf championship with remote fan parking | June 2025 | USGA projection: 18,000–20,000 on first practice day, about 40,000 peak days, up to about 200,000 for the week | [CBS Pittsburgh](https://www.cbsnews.com/pittsburgh/news/us-open-oakmont-traffic-parking-restrictions) |
| EVT-05 | Big Butler Fair | Prospect / Franklin Township, Butler County | County fair | Nine-day fair | June 27–July 5, 2025 | Over 100,000 for the run; about 15,000 on a record single day (year inferred as 2015) | [VisitPittsburgh](https://visitpittsburgh.com/events/big-butler-fair); [Butler Eagle](https://www.butlereagle.com/?p=189581) |
| EVT-06 | Washington County Agricultural Fair | Washington, Washington County | County fair | Week-long fair | August (Aug. 9–16, 2025) | Average over 60,000 (secondary source, weak) | [Mon Valley Independent](https://www.monvalleyindependent.com/2025/08/01/washington-county-offers-fair-preview); [WorldAtlas](https://worldatlas.com/places/the-best-summer-county-fairs-in-pennsylvania.html) |
| EVT-07 | Westmoreland Fair | Greensburg, Westmoreland County | County fair | Fair | Summer | No public attendance figure found | [VisitPittsburgh fair guide](https://www.visitpittsburgh.com/blog/fairs) |
| EVT-08 | North Shore same-day doubleheader | Pittsburgh (North Shore) | Stadium-district overlap | Pirates 1:05 p.m. + Pitt vs. West Virginia 3:30 p.m. | Sept. 14, 2024 (Saturday) | Component crowds of PGH-04 and PGH-02 (pre-2026 config) | [MLB press release](https://mlb.com/press-release/press-release-north-shore-parking-information-announced-for-september-14-pirates-and-pitt-games); [cfbtrack](https://www.cfbtrack.com/venues/3752-acrisure-stadium) |

---

## 5. Mode split table

All shares are of people. "Transit (non-car)" excludes riders who drove to a garage or park-and-ride first; those are inside "Car-involved". Ranges are shown in Section 7. "Sums to 100%" refers to the central values.

| Row | Car-involved (private car, carpool, rideshare, incl. drive-to-transit) | Public bus/rail (non-car) | Dedicated event shuttle (non-car) | Walk/bike/other | Unclassified | Sums to 100%? | Recommended car share | Range | Confidence | Label |
|---|---|---|---|---|---|---|---|---|---|---|
| PGH-01 Steelers | 86% | 8% | 0% (no dedicated non-car shuttle; Gateway Clipper riders counted as car) | 6% | 0% | Yes (estimated central values) | **0.86** | 0.78–0.92 | Low–medium | Estimated |
| PGH-02 Pitt football | 76% | 4% | 14% (Pitt student shuttle from Oakland) | 6% | 0% | Yes (estimated) | **0.76** | 0.66–0.84 | Low | Estimated |
| PGH-03 Eras Tour | 72% | 15% | 0% | 13% | 0% | Yes (estimated) | **0.72** | 0.60–0.85 | Low | Estimated |
| PGH-04 Pirates | 80% | 8% | 0% | 12% | 0% | Yes (estimated) | **0.80** | 0.70–0.90 | Low | Estimated |
| PGH-05 Penguins | — | — | — | — | 100% | No split available | **0.85** | Not estimable | — | Fallback (`hub`) |
| PGH-06 Pitt basketball | — | — | — | — | 100% | No split available | **0.85** | Not estimable (likely lower for student-heavy games) | — | Fallback (`hub`) |
| PGH-07 Stage AE | — | — | — | — | 100% | No split available | **0.85** | Not estimable | — | Fallback (`hub`) |
| PGH-08 Riverhounds | — | — | — | — | 100% | No split available | **0.85** | Not estimable | — | Fallback (`hub`) |
| PGH-09 Heinz Hall | — | — | — | — | 100% | No split available | **0.85** | Not estimable | — | Fallback (`hub`) |
| PGH-10 Benedum | — | — | — | — | 100% | No split available | **0.85** | Not estimable | — | Fallback (`hub`) |
| PGH-11 RMU arena | 92% | 1% | 0% | 7% (campus residents) | 0% | Yes (estimated) | **0.92** | 0.85–0.97 | Low | Estimated |
| PGH-12 Star Lake | 97% | 0% | 2% (private coach; partly car-involved, see notes) | 1% | 0% | Yes (estimated) | **0.97** | 0.93–0.99 | Medium | Estimated |
| EVT-01 NFL Draft | 60% | 8% | 0% (Football Flyers were park-and-ride, counted as car) | 2% river boat + walk/other inside unclassified | 30% | Yes, but 30% unclassified | **0.60** | 0.45–0.80 | Low | Estimated |
| EVT-02 Picklesburgh | — | — | — | — | 100% | No split available | **0.85** | Not estimable (likely lower) | — | Fallback (`hub`) |
| EVT-03 Anthrocon | — | — | — | — | 100% | No split available | **0.85** | Not estimable (likely much lower for daily movement) | — | Fallback (`hub`) |
| EVT-04 U.S. Open | 96% | 0% | 0% (all general shuttles fed from car lots) | 2% | 2% | Yes (estimated) | **0.96** | 0.90–0.99 | Medium | Estimated |
| EVT-05 Big Butler Fair | — | — | — | — | 100% | No split available | **0.85** | Not estimable (likely higher) | — | Fallback |
| EVT-06 Washington Co. Fair | — | — | — | — | 100% | No split available | **0.85** | Not estimable (likely higher) | — | Fallback |
| EVT-07 Westmoreland Fair | — | — | — | — | 100% | No split available | **0.85** | Not estimable (likely higher) | — | Fallback |
| EVT-08 Doubleheader | Use PGH-04 and PGH-02 components | — | — | — | — | — | Component values | — | — | Composite |

Why fallback rows show 100% unclassified: no public event-specific count, survey or service constraint was found that would support a defensible split. The "likely higher/lower" notes are directional judgements only and are not used in any calculation.

---

## 6. Parking, operations and access table

| Row | Parking supply and remote arrangements | Event operations, closures, start/end service | Access constraints and crowds sharing approaches |
|---|---|---|---|
| PGH-01 Steelers | About 8,000 North Shore spaces (surface plus garages), with about 3,000 fewer surface spaces than in 2001 ([TribLive](https://naviga.triblive.com/?p=3313944)); Champions Garage 441 spaces and Nova Place about 3,000 ([CBS Pittsburgh](https://www.cbsnews.com/amp/pittsburgh/news/steelers-pirates-games-parking-pittsburgh-north-shore)); more than 20,000 Downtown spaces used as remote parking ([Pirates parking page](https://www.mlb.com/pirates/ballpark/transportation/parking)); Station Square plus Gateway Clipper boat. | T is free between Downtown and North Shore stops ([TribLive](https://triblive.com/local/all-abord-nfl-draft-draws-thousands-onto-pittsburghs-t/)); PRT pauses construction closures for Steelers home games ([WPXI via Yahoo](https://www.yahoo.com/news/construction-causing-delays-adjustments-travel-232514398.html)); a rider reports roughly 45 minutes to clear post-game T crowds ([TribLive](https://triblive.com/local/all-abord-nfl-draft-draws-thousands-onto-pittsburghs-t/)). Standard operations plan exists (Langan) but is not public. | Shares lots, T stations and bridges with PNC Park, Stage AE, Rivers Casino and Carnegie Science Center. Lots are largely presold; forced parking used when lots are tight ([TribLive](https://naviga.triblive.com/?p=3313944)). |
| PGH-02 Pitt football | Same North Shore supply as PGH-01; student parking passes in a limited lot ([Pitt Athletics](https://pittsburghpanthers.com/sports/2022/8/30/student-gameday-information)). | Free Pitt shuttle from University Place starting 3.5 hours before kickoff; returns from halftime through end of game ([Pitt Mobility](https://www.pc.pitt.edu/mobility/shuttle-services/acrisure-stadium-shuttle)); students ride PRT free with ID. | Same-day overlaps with Pirates (see EVT-08). |
| PGH-03 Eras Tour | Same North Shore and Downtown supply; lots opened 1:30 p.m. ([WESA](https://www.wesa.fm/economy-business/2023-06-15/taylor-swift-pittsburgh-eras-tour)). | PRT ran 60 extra light-rail trips Friday and 62 Saturday on top of regular service ([PRT release](https://rideprt.org/link/8f00007d4cdd4627b40bb36a0207c206.aspx)). | Very large non-ticketed crowd: about 191,781 and 208,866 visitors to the stadium area on the two days, per Pittsburgh Downtown Partnership data ([CBS Pittsburgh](https://www.cbsnews.com/pittsburgh/news/taylor-swift-weekend-in-pittsburgh-brought-over-400000-to-north-shore/)). Juneteenth events Downtown the same weekend ([PRT release](https://rideprt.org/link/8f00007d4cdd4627b40bb36a0207c206.aspx)). |
| PGH-04 Pirates | Same North Shore lots; Downtown garages recommended for most fans ([Pirates parking page](https://www.mlb.com/pirates/ballpark/transportation/parking)). | Roberto Clemente Bridge closed to vehicles before and after games for walkers and cyclists ([Sean Marshall](https://seanmarshall.ca/2024/06/17/a-walk-to-the-ballpark/)). North Side T station one block away. | Shares approaches with Steelers/Pitt (EVT-08), Stage AE and casino traffic. |
| PGH-05 Penguins | Arena garage of 644 spaces ([Graves Design Group](https://gravesdesigngroup.com/ppg-paints-arena-garage)); surrounding surface lots and Downtown garages. | Steel Plaza T station nearby ([Wikipedia](https://en.wikipedia.org/wiki/PPG_Paints_Arena)); no event-specific service data found. | Shares Downtown streets and garages with Cultural District shows and weekday commuters. |
| PGH-06 Pitt basketball | Campus lots; no verified public count. | No event-specific service data found. | Oakland corridor affected by University Line construction (through late 2027) and the July 10–Aug. 3, 2026 Parkway East detour onto Fifth/Forbes ([Pittwire](https://www.pittwire.pitt.edu/announcements-and-updates/2026/05/28/pittsburgh-parkway-east-closure-oakland-detour)). |
| PGH-07 Stage AE | North Shore supply (as PGH-01). | Allegheny station nearby; no event-specific counts found. | Built on former stadium parking lots, so its crowds compete directly for North Shore parking ([TribLive archive](https://archive.triblive.com/news/new-stage-ae-to-focus-on-music)). |
| PGH-08 Riverhounds | Station Square lots and garage: about 3,500 spaces (undated, probably stale) ([ESA page](https://esa.org/pittsburgh/parkings.php)). | Station Square T station ([Wikipedia](https://en.wikipedia.org/wiki/F.N.B._Stadium_(Pittsburgh))). | Station Square lots double as remote parking for North Shore events via boat or T ([MLB press release](https://mlb.com/press-release/press-release-north-shore-parking-information-announced-for-september-14-pirates-and-pitt-games)). |
| PGH-09/10 Theaters | Downtown garages (more than 20,000 Downtown spaces per [Pirates parking page](https://www.mlb.com/pirates/ballpark/transportation/parking)). | No event-specific data found. | Shares Downtown with PPG Paints Arena and festivals. |
| PGH-11 RMU arena | Limited but free parking ([Stadium Journey](https://stadiumjourney.com/stadiums/upmc-events-center-robert-morris-colonials)). | Only transit is the 21 bus from Downtown, about 50 minutes ([Stadium Journey](https://stadiumjourney.com/stadiums/upmc-events-center-robert-morris-colonials)). | I-376 / airport corridor. |
| PGH-12 Star Lake | General parking free with ticket; lots open ahead of gates; paid early entry and premium parking ([Table Magazine](https://pittsburgh.tablemagazine.com/?p=126780); [CBS Pittsburgh](https://www.cbsnews.com/pittsburgh/news/pavilion-at-star-lake-traffic-alert-eric-church)). | No direct public transit routes ([Table Magazine](https://pittsburgh.tablemagazine.com/?p=126780)); a private operator ran a 44-seat coach from the Duquesne Incline lower lot ([TribLive](https://emergency.triblive.com/?p=3523102)). Shows can end near 11:30 p.m. ([TribLive](https://emergency.triblive.com/?p=3523102)). | Pinch point where four-lane Route 18 feeds the two-lane Star Lake Lane near the US 22/30 junction ([TribLive](https://emergency.triblive.com/?p=3523102)); a sold-out opener left ticket holders unable to park ([WPXI](https://www.wpxi.com/news/local/traffic-delays-cause-problems-concert-goers-pavilion-star-lake/FZW4NG3CWBFGTH66MXXUCDA5XI/)). Venue warned of a same-night stadium show at Acrisure ([CBS Pittsburgh](https://www.cbsnews.com/pittsburgh/news/pavilion-at-star-lake-traffic-alert-eric-church)). |
| EVT-01 NFL Draft | Park-and-ride lots across Allegheny County fed four Football Flyer routes ([Mass Transit](https://www.masstransitmag.com/management/news/55377682/pittsburgh-regional-transit-prt-prt-earns-12-million-in-new-revenue-from-2026-nfl-draft)). | Saturday-level service systemwide April 23–25, weekday-level on key corridors, extra light rail and airport service ([VisitPittsburgh transport plan](https://www.visitpittsburgh.com/media/press-releases/pittsburgh-unveils-comprehensive-regional-transportation-plan-for-2026-nfl-draft/)); Red and Blue Lines every 15 minutes ([TribLive](https://triblive.com/local/all-abord-nfl-draft-draws-thousands-onto-pittsburghs-t/)); Flyers, light rail and Mon Incline fare-free ([Axios](https://www.axios.com/local/pittsburgh/2026/05/19/pittsburgh-transit-surge-nfl-draft)); 74 Gateway Clipper trips ([VisitPittsburgh](https://www.visitpittsburgh.com/media/press-releases/pittsburgh-delivers-historic-success-during-the-2026-nfl-draft/)). | City schools remote and many people working from home ([PublicSource](https://www.publicsource.org/how-are-things-going-with-the-nfl-draft-in-pittsburgh/)); Pirates games kept North Shore access ([VisitPittsburgh transport plan](https://www.visitpittsburgh.com/media/press-releases/pittsburgh-unveils-comprehensive-regional-transportation-plan-for-2026-nfl-draft/)). |
| EVT-02 Picklesburgh | Downtown garages. | 2026 footprint: Clemente and Warhol bridges, Allegheny Landing, Allegheny Riverfront Park, westbound Fort Duquesne Blvd., PPG Plaza, Sixth St., Market Square, Arts Landing ([Picklesburgh](https://www.picklesburgh.com/2026picklesburghfootprint/)). | 2025 route was about 1.2 miles ([CBS Pittsburgh](https://www.cbsnews.com/pittsburgh/news/picklesburgh-festival-popularity)); bridge closures overlap North Shore approaches. |
| EVT-04 U.S. Open | No fan parking in Oakmont or Plum; two remote lots (Hartwood Acres, Monroeville Mall) ([USGA](https://www.usopen.com/2025/fan-information-guide.html); [TribLive](https://naviga.triblive.com/?p=3804709)). | More than 130 free shuttle buses from 5:30 a.m., about a 25-minute ride, Turnpike service-gate access ([WPXI](https://www.wpxi.com/news/local/traffic-parking-guidelines-2025-us-open-championship-oakmont/HCFGWCZNZ5GPVGNZPUDAXYSKNM/)); rideshare drop-off half a mile from the gate ([WTOV](https://wtov9.com/news/local/usga-enhances-oakmont-us-open-with-experiences-conveniences)). | Hulton Road congestion and borough no-parking zones. |
| EVT-05 Big Butler Fair | On-site fair parking; organizers noted parking concerns on the record day ([Butler Eagle](https://www.butlereagle.com/?p=189581)). | No transit evidence found. | I-79 Butler exit ([WorldAtlas](https://worldatlas.com/places/the-best-summer-county-fairs-in-pennsylvania.html)). |
| EVT-08 Doubleheader | All North Shore parking reserved-only, no game-day sales, on-street parking prohibited, forced parking; non-holders sent to Downtown garages (free T) or Station Square (boat) ([MLB press release](https://mlb.com/press-release/press-release-north-shore-parking-information-announced-for-september-14-pirates-and-pitt-games)). | Lots opened 10:00 a.m. for both games. | Direct evidence that the two venues share one parking pool and one set of approaches. |

---

## 7. Row-by-row evidence and estimation notes

### PGH-01 Acrisure Stadium, Steelers (Estimated 0.86, range 0.78–0.92)

Evidence: in 2013, the county executive said more than 5,000 people left the North Shore by T within an hour of a Pirates game, and about double that after a Steelers game the same day, when about 70,000 attended ([CBS Pittsburgh, 2013](https://www.cbsnews.com/pittsburgh/news/officials-say-theyre-happy-with-t-performance-during-weekend-games/)). Before opening, the Steelers cited an estimate of about 8,000 game-day T riders cleared by 24 two-car trains in about 94 minutes ([Steelers.com, 2012](https://www.steelers.com/news/north-shore-connector-a-plus-for-steelers-fans-7090453)) — that is a projection.

Method: take 10,000–15,000 post-game T riders (people, one-way) against 68,400 seats, giving 15–22% of attendees using the T. Assume 40–70% of those reached the T by car (Downtown garages, South Hills park-and-ride), consistent with teams and Alco steering fans to Downtown garages plus the free T. That leaves 5–13% non-car transit. Walk/bike/other 3–8%. Car-involved = 79–92%; central 0.86. Uncertainties: the 2013 figures are an official's spoken approximation, pre-pandemic, and only the first post-game hour.

### PGH-02 Acrisure Stadium, Pitt football (Estimated 0.76, range 0.66–0.84)

Evidence: the 2026 configuration is 51,416 with 10,000 student seats ([CNHI News](https://www.cnhinews.com/pennsylvania/sports/article_193fa8f9-7e9d-5ced-b4b2-ba7c481a788c.html)); free student shuttles from Oakland and free PRT rides with ID ([Pitt Mobility](https://www.pc.pitt.edu/mobility/shuttle-services/acrisure-stadium-shuttle)).

Method: assume 6,000–10,000 students attend and 70–95% travel without a car (mainly the Pitt shuttle or free PRT service, since the stadium is several miles from Oakland). Non-students behave like Steelers fans (0.85–0.90). Central case: 8,000 students × 15% car + 43,416 non-students × 0.87 ≈ 0.76. Student attendance is the dominant unknown.

### PGH-03 Acrisure Stadium, Eras Tour (Estimated 0.72, range 0.60–0.85)

Evidence: PRT estimated it carried 48,000 fans to and from Friday's show and 37,000 Saturday, about 85,000 in total and nearly four times normal Friday–Saturday light-rail use ([PRT release](https://rideprt.org/link/8f00007d4cdd4627b40bb36a0207c206.aspx)).

Method and conflict: PRT's wording ("to and from") is ambiguous between people and one-way rides. If read as people, Friday's figure would be about 66% of 73,117 ticket holders, which the extra-trip counts make implausible. This file reads the figures as one-way rides: about 24,000 people Friday and 18,500 Saturday, at most 33% and 25% of ticket holders. Even that overstates ticket-holder use, because large non-ticketed crowds gathered around the stadium ([CBS Pittsburgh](https://www.cbsnews.com/pittsburgh/news/taylor-swift-weekend-in-pittsburgh-brought-over-400000-to-north-shore/)). Assuming 30–60% of riders drove to a garage or park-and-ride first, non-car transit is roughly 10–23%; walking (hotels, nearby neighborhoods) 5–15%. Car-involved 0.62–0.85, central 0.72. This is a one-off peak, not a typical concert.

### PGH-04 PNC Park, Pirates (Estimated 0.80, range 0.70–0.90)

Evidence: more than 5,000 T departures within an hour of a roughly 40,000-fan game in 2013 ([CBS Pittsburgh](https://www.cbsnews.com/pittsburgh/news/officials-say-theyre-happy-with-t-performance-during-weekend-games/)); the Clemente Bridge closes to cars on game days ([Sean Marshall](https://seanmarshall.ca/2024/06/17/a-walk-to-the-ballpark/)); the Pirates recommend Downtown garages for most fans ([Pirates parking page](https://www.mlb.com/pirates/ballpark/transportation/parking)).

Method: T use of at least 12.5% in the 2013 case, of which a large part is Downtown-garage parkers. Weekday day games add Downtown workers who walk. Smaller 2025 crowds (18,827 average) fit more easily in North Shore lots, which pushes car share up. Central 0.80; low confidence because no Pirates-specific current count exists.

### PGH-05 to PGH-10 Downtown/Oakland/South Shore rooms (Fallback 0.85)

No event-specific ridership, survey or parking-occupancy data was found for PPG Paints Arena, Petersen Events Center, Stage AE, F.N.B. Stadium, Heinz Hall or the Benedum Center. Each has a nearby T station or frequent bus service and Downtown garage supply, so the `hub` fallback of 0.85 provisionally applies. For student-heavy Petersen games the true share is probably lower, but no public number supports a specific value.

### PGH-11 UPMC Events Center (Estimated 0.92, range 0.85–0.97)

Evidence: the only transit is a roughly 50-minute bus from Downtown, with free (limited) parking ([Stadium Journey](https://stadiumjourney.com/stadiums/upmc-events-center-robert-morris-colonials)). Campus residents can walk; their share is unknown. Below the 5,000 priority threshold.

### PGH-12 The Pavilion at Star Lake (Estimated 0.97, range 0.93–0.99)

Evidence: no direct public transit; options are driving, taxi/rideshare and occasional shuttles ([Table Magazine](https://pittsburgh.tablemagazine.com/?p=126780)); a private 44-seat coach from the South Side ([TribLive](https://emergency.triblive.com/?p=3523102)); the venue itself urges carpooling and rideshare ([CBS Pittsburgh](https://www.cbsnews.com/pittsburgh/news/pavilion-at-star-lake-traffic-alert-eric-church)). Rideshare counts as car. Private coach riders who drove to the Incline lot are car-involved; those who walked or rode transit there are not, so coach share (at most a few buses per show) is split. Medium confidence: the near-total car dependence follows directly from the service constraint.

### EVT-01 2026 NFL Draft (Estimated 0.60, range 0.45–0.80)

Evidence: 485,387 PRT rides over April 23–25 (182,707 Thu; 188,154 Fri; 114,525 Sat) ([Pittsburgh Magazine](https://www.pittsburghmagazine.com/how-many-people-rode-the-bus-during-the-2026-nfl-draft/)), 51% above the average of two typical March weekdays plus one Saturday ([Mass Transit](https://www.masstransitmag.com/management/news/55377682/pittsburgh-regional-transit-prt-prt-earns-12-million-in-new-revenue-from-2026-nfl-draft)); about 60,000 Football Flyer rides and 128,000 T rides; 26,500 Gateway Clipper passengers; 805,000 attendance; 43% of attendees from beyond 50 miles ([VisitPittsburgh](https://www.visitpittsburgh.com/media/press-releases/pittsburgh-delivers-historic-success-during-the-2026-nfl-draft/)).

Baseline subtraction: baseline = 485,387 ÷ 1.51 ≈ 321,400 rides; incremental ≈ 164,000 rides. This is a **lower bound**, because the Draft days ran Saturday-level service and had remote schools and heavy work-from-home, which suppressed normal commuter riding. An upper reference is to treat all Flyer and T rides as event rides: about 188,000.

Round trips and denominator: 164,000–188,000 rides ÷ 2 ≈ 82,000–94,000 transit attendance-visits. Football Flyer riders (≈30,000 visits) came from park-and-ride lots and are car-involved, leaving ≈52,000–64,000 non-car transit visits, or about 6.5–8% of 805,000. Clipper passengers (≈13,000 visits if counted as boardings) are about 1.6%, many from Station Square parking.

What is left (about 86%) is walking from hotels and Downtown, driving, rideshare and other, and cannot be split from public data. Organizers urged car-free arrival and reporters observed many complying ([PublicSource](https://www.publicsource.org/how-are-things-going-with-the-nfl-draft-in-pittsburgh/)), but many out-of-region visitors would have driven into the region even if they walked once there. Hence a wide, low-confidence range. The attendance figure's counting method is not published, so it is treated as visits, not unique people.

Key takeaway for the city-type decision: even with fare-free light rail and Flyers, sponsored service and official pleas, non-car transit carried well under a fifth of Draft visits.

### EVT-02 Picklesburgh and EVT-03 Anthrocon (Fallback 0.85)

No public mode data found. Picklesburgh's 208,000+ is a multi-day total and must not be treated as one crowd ([Picklesburgh](https://www.picklesburgh.com/2026picklesburghfootprint/)). Anthrocon's figure is a multi-day membership count ([Wikipedia](https://en.wikipedia.org/wiki/Anthrocon)). Both probably have below-fallback car shares for daily movement, but no public number supports a value.

### EVT-04 2025 U.S. Open (Estimated 0.96, range 0.90–0.99)

Evidence: all general fan parking was at two remote lots with coach shuttles; no fan parking in Oakmont or Plum; rideshare and drop-off at an elementary school half a mile away ([USGA](https://www.usopen.com/2025/fan-information-guide.html); [WTOV](https://wtov9.com/news/local/usga-enhances-oakmont-us-open-with-experiences-conveniences)). Every shuttle rider drove to the lot, so shuttle riders are car-involved. Non-car arrivals are limited to borough residents walking in and any unrecorded transit use. Attendance figures are USGA projections, not counts.

### EVT-05 to EVT-07 County fairs (Fallback 0.85)

No transit service evidence and no mode data were found. The fallback probably understates car share for rural fairgrounds, but absence of evidence is not treated as evidence. Multi-day fair totals are not simultaneous crowds; the best single-day Big Butler figure (about 15,000) is the relevant crowd size ([Butler Eagle](https://www.butlereagle.com/?p=189581)). The Butler Eagle article does not give its year in the extract; the "159th" fair numbering and the 170th fair in 2026 ([VisitPA](https://www.visitpa.com/blog/post/pennsylvania-county-fairs-0/)) imply 2015.

### EVT-08 North Shore doubleheader (Composite)

No separate car share is assigned; the row exists to document operations. The joint parking plan shows that PNC Park and Acrisure crowds draw on one parking pool and one set of approaches, and that excess demand is pushed to Downtown garages and Station Square ([MLB press release](https://mlb.com/press-release/press-release-north-shore-parking-information-announced-for-september-14-pirates-and-pitt-games)).

---

## 8. Weighted car shares

Configurations used (one per venue, primary tenant configuration; mutually exclusive configurations such as Pitt football at Acrisure or concert layouts at PPG Paints Arena are excluded): Acrisure (Steelers) 68,400; PNC Park 38,747 (the higher of two conflicting figures); Star Lake 23,000; PPG Paints Arena hockey 18,187; Petersen basketball 12,508; Stage AE outdoor 5,500; F.N.B. Stadium 5,000. Rooms under 5,000 and event rows are excluded from weighting.

| Weighting | Venues included | Weights | Car share |
|---|---|---|---|
| Capacity-weighted, all 5,000+ rooms (fallback 0.85 used for unknowns) | All seven above | Capacity (total 171,342) | **0.86** |
| Capacity-weighted, estimated rows only | Acrisure, PNC Park, Star Lake | Capacity (total 130,147) | **0.86** |
| Capacity-weighted, core urban estimated rows only | Acrisure, PNC Park | Capacity (total 107,147) | **0.84** |
| Capacity-weighted, all rooms excluding Star Lake | Six urban rooms | Capacity (total 148,342) | **0.84** |
| Typical-attendance-weighted | Steelers (68,400, sellouts per [Wikipedia](https://en.wikipedia.org/wiki/Acrisure_Stadium)) and Pirates (18,827 2025 average per [SI](https://www.si.com/mlb/pirates/news/pittsburgh-pirates-fan-attendance-ranks-near-bottom-mlb)) | Typical per-event attendance | **0.85** |

Arithmetic (capacity, all rooms): (68,400×0.86 + 38,747×0.80 + 23,000×0.97 + 18,187×0.85 + 12,508×0.85 + 5,500×0.85 + 5,000×0.85) ÷ 171,342 ≈ 0.86.

Missing coverage: typical attendance for Star Lake, Penguins, Petersen, Stage AE and F.N.B. Stadium is not published as a season average in the sources found (sampled 2025–26 Penguins games ranged roughly 13,300–18,400 per the [season game log](https://en.wikipedia.org/wiki/2025%E2%80%9326_Pittsburgh_Penguins_season)), so attendance weighting covers only two venues.

Do huge outlying venues obscure the downtown pattern? Only slightly. Removing Star Lake moves the capacity-weighted figure from 0.86 to 0.84. The bigger effect is the opposite: Pirates games are numerous but now small, so weighting by season dates (81 home dates versus a handful of Steelers dates) would pull the regional figure toward the Pirates estimate of about 0.80. Because three of the seven inputs are fallbacks, these weighted figures partly echo the default and should not be read as independent confirmation of it.

---

## 9. Clusters, shared roads and shared audiences (separate findings)

**Venue clusters**

- North Shore: Acrisure Stadium, PNC Park, Stage AE, plus casino and science center. One parking pool of about 8,000 spaces, two T stations, the Clemente Bridge walk, and coordinated same-day parking plans.
- Downtown / Lower Hill: PPG Paints Arena, Heinz Hall, Benedum Center, convention center, Point State Park, Market Square and Arts Landing festival sites. Downtown's 20,000+ garage spaces also serve as remote parking for the North Shore, so Downtown and North Shore crowds compete for the same garages.
- South Shore: F.N.B. Stadium at Station Square, whose lots also serve as remote parking for North Shore events via boat and T.
- Oakland: Petersen Events Center; the origin of Pitt's student shuttle flows to the North Shore.

**Shared roads (not shared approaches)**

- Star Lake and Acrisure Stadium share only regional corridors (I-376 / US 22) and can load them on the same night, as Star Lake's own traffic alert noted ([CBS Pittsburgh](https://www.cbsnews.com/pittsburgh/news/pavilion-at-star-lake-traffic-alert-eric-church)).
- The East End (Oakmont's remote lots at Monroeville Mall, Petersen, Downtown) shares I-376 Parkway East, which carries about 100,000 vehicles daily ([Axios](https://www.axios.com/local/pittsburgh/2026/03/05/parkway-east-closure-commercial-street-bridge-july-2026)).

**Shared audiences**

- Steelers and Pitt football share a stadium, a parking operator and much of a fan base.
- Mega-events draw far beyond the metro: 43% of Draft attendees came from more than 50 miles away ([VisitPittsburgh](https://www.visitpittsburgh.com/media/press-releases/pittsburgh-delivers-historic-success-during-the-2026-nfl-draft/)), and Eras Tour visitors came from Ohio, New York, D.C. and North Carolina metros ([CBS Pittsburgh](https://www.cbsnews.com/pittsburgh/news/taylor-swift-weekend-in-pittsburgh-brought-over-400000-to-north-shore/)).

---

## 10. Boundary assessment

The current federal definition of the Pittsburgh MSA has **eight** counties: Allegheny, Armstrong, Beaver, Butler, Fayette, Lawrence, Washington and Westmoreland ([UCSUR, March 2026](https://ucsur.pitt.edu/sites/default/files/Census%20Reports/UCSUR_CensusEstimates_Brief_March262026.pdf)); Lawrence was newly added in 2025 ([Allegheny Institute](https://www.alleghenyinstitute.org/population-and-employment-change-in-the-pittsburgh-metro-area/)). Some federal statistical tables still use the older seven-county list without Lawrence ([BLS](https://www.bls.gov/regions/mid-atlantic/data/xg-tables/ro3fx9529.htm)). The eight counties contain 485 municipalities ([UCSUR municipal brief](https://ucsurlib.pitt.edu/files/census/Pittsburgh_MSA_Municipal_Population_Brief_May2026.html)). Allegheny County holds about 1.2 million people, more than half the region ([Mon Valley Independent](https://www.monvalleyindependent.com/2026/03/28/region-saw-a-slight-population-decline-last-year/)).

**Recommended boundary:** the eight-county MSA, with Allegheny County as the core. Venues in Washington (Star Lake, Washington fair), Butler (Big Butler Fair) and Westmoreland (Westmoreland Fair) are inside and should be assessed with the regional city type, while recognising that their individual car shares (where estimable) are much higher than the core.

**Edge areas, assessed separately:** Lawrence County (New Castle area) — inside the MSA since 2025 but omitted from the brief's county list; Greene County (Waynesburg fair) — outside the MSA; the Weirton–Steubenville side of the wider combined area in West Virginia and Ohio — outside unless event-catchment evidence is found. No public event-catchment study was found to justify including any of these.

---

## 11. Closing list

### 1. Recommended existing city type and rationale; strongest contrary evidence

**Recommendation: `hub`.**

Rationale: (a) Estimated car-involved shares for regular core-venue sports cluster at 0.76–0.86 (Steelers 0.86, Pirates 0.80, Pitt football 0.76), consistent with the existing 0.85 default and far from `transit`'s 0.4. (b) The core has dense, interacting clusters: North Shore and Downtown crowds share one garage pool, T stations and bridges, and operators coordinate parking across simultaneous events. (c) Even the most transit-favourable event on record, the fare-free, heavily promoted 2026 Draft, moved well under a fifth of visits by non-car transit.

Strongest contrary evidence:

- Toward `transit`: absolute transit surges are large — about 85,000 Eras Tour light-rail trips over two nights ([PRT](https://rideprt.org/link/8f00007d4cdd4627b40bb36a0207c206.aspx)) and 485,387 Draft rides ([Pittsburgh Magazine](https://www.pittsburghmagazine.com/how-many-people-rode-the-bus-during-the-2026-nfl-draft/)). City residents drive to work at only about 56% ([BikePGH](https://bikepgh.org/2026/01/06/our-annual-analysis-of-commuting-habits-in-the-60-largest-us-cities-shows-a-comeback-for-active-transportation/)) (background data only).
- Toward `sprawl`: the largest outlying venue and events (Star Lake, remote-parked golf, county fairs) are effectively car-only, and much core transit use is itself drive-then-ride.

Venue exceptions: Star Lake (0.97) and the U.S. Open (0.96) sit well above the default; Pitt football (0.76) and the Eras Tour (0.72) sit below it.

### 2. Car-share values keyed to rows

Row keys refer to this file (the companion answer's row keys were not available).

| Type | Rows and values |
|---|---|
| **Measured** | None found for any Pittsburgh venue or event. |
| **Projected** | No projected attendee mode share found. The only projection is a ridership count (about 8,000 T riders per Steelers game, 2012) used as an input to PGH-01. |
| **Estimated** | PGH-01 Steelers 0.86 (0.78–0.92); PGH-02 Pitt football 0.76 (0.66–0.84); PGH-03 Eras Tour 0.72 (0.60–0.85); PGH-04 Pirates 0.80 (0.70–0.90); PGH-11 RMU 0.92 (0.85–0.97); PGH-12 Star Lake 0.97 (0.93–0.99); EVT-01 NFL Draft 0.60 (0.45–0.80); EVT-04 U.S. Open 0.96 (0.90–0.99). |
| **Fallback (`hub` 0.85 provisionally applies)** | PGH-05 Penguins/PPG Paints Arena; PGH-06 Petersen; PGH-07 Stage AE; PGH-08 F.N.B. Stadium; PGH-09 Heinz Hall; PGH-10 Benedum; EVT-02 Picklesburgh; EVT-03 Anthrocon; EVT-05 Big Butler Fair; EVT-06 Washington County Fair; EVT-07 Westmoreland Fair. |

### 3. Boundary recommendation and inconsistencies between briefs

Boundary: the eight-county Pittsburgh MSA with Allegheny as core; Lawrence and Greene counties and the West Virginia/Ohio side as separately assessed edges (see Section 10).

Inconsistencies found:

- The brief lists six surrounding counties and omits Lawrence, which joined the MSA in 2025.
- "Highmark Stadium" was renamed F.N.B. Stadium effective April 23, 2026 ([Mondo Stadia](https://www.mondostadia.com/?p=26419)).
- "Star Lake amphitheater" is officially The Pavilion at Star Lake ([Wikipedia](https://en.wikipedia.org/wiki/The_Pavilion_at_Star_Lake)).
- "Robert Morris venues": the main arena seats 4,000, below the 5,000 priority line ([RMU Athletics](https://rmucolonials.com/facilities/upmc-events-center/30)).
- Acrisure Stadium has two materially different football configurations from 2026 (68,400 Steelers; 51,416 Pitt).
- The companion venue answer referenced by the brief was not supplied.

### 4. Data gaps, model limitations, source conflicts and inaccessible sources

**Data gaps**

- No intercept survey or published attendee mode split exists in public sources for any Pittsburgh venue.
- PRT does not publish per-game ridership; the only event counts found are for the 2023 Eras Tour and 2026 Draft, plus a 2013 spoken estimate.
- No public parking-occupancy data by event.
- No travel data for PPG Paints Arena, Petersen, Stage AE, F.N.B. Stadium or the theaters.
- Attendance figures not found for the Westmoreland Fair, the 2026 Three Rivers Arts Festival (which moved to Arts Landing per [WPXI](https://www.wpxi.com/news/local/visitpittsburgh-hopes-major-events-throughout-2026-will-grow-interest-steel-city/DW44NAZKTBBZ7LMHDL376O3MA4/)) and the Pittsburgh Marathon.
- Coverage gaps (fixed rooms around 1,000+ not verified in this research): Byham Theater, Carnegie Music Hall, UPMC Cooper Fieldhouse (Duquesne), Fitzgerald Field House, David L. Lawrence Convention Center halls, Roxian Theatre, Palace Theatre (Greensburg), Washington Wild Things ballpark, Rivers Casino event space, Joe Walton Stadium (RMU), and the Stage AE indoor hall as a separate record.

**Model limitations**

- Three of seven weighted inputs are fallbacks, so the weighted results partly restate the default.
- The 0.85 default is shared by `sprawl` and `hub`, so the evidence mainly informs crowd-spill behaviour rather than fallback share.
- Estimates depend on an assumed fraction of T riders who drove first; no public data measures that fraction.

**Source conflicts**

- PNC Park capacity: 38,747 ([SI](https://www.si.com/mlb/pirates/news/pittsburgh-pirates-fan-attendance-ranks-near-bottom-mlb)) versus 38,362 ([VisitPittsburgh](https://www.visitpittsburgh.com/things-to-do/pittsburgh-sports-teams/)).
- PPG Paints hockey capacity: 18,187 on the arena's own FAQ versus 18,387 on VisitPittsburgh's sports page; the official figure is used.
- PPG garage: 644 spaces ([Graves](https://gravesdesigngroup.com/ppg-paints-arena-garage)) versus 642 in secondary sources — trivial.
- Benedum capacity about 2,800 versus nearly 2,900 — unresolved.
- Eras Tour ridership: "fans" versus one-way rides — read as rides here, with reasoning shown.
- Draft attendance (805,000) versus PRT daily totals: different counting bases; neither is unique people.
- Station Square parking count (about 3,500) is undated and probably stale.

**Inaccessible or limited sources**

- Langan's Acrisure Stadium standard operations plan and North Shore transportation master plan update are described publicly but not published ([Langan](https://www.langan.com/portfolio/heinz-field-standard-operations-plan-north-shore-transportation-master-plan-update)).
- PRT's Draft ridership breakdown is an image infographic; figures were taken from text reports quoting it.
- Some TribLive and Post-Gazette articles may be metered or paywalled; where used, figures come from publicly visible text.
- No access controls were bypassed.

### 5. Confirmed transport or venue changes through 2028

| Change | Status | Dates | Suggested re-check | Source |
|---|---|---|---|---|
| PRT FY2027 budget preserves current service and fares (July 2026–June 2027) | Scheduled and funded | Adopted May 29, 2026 | May–June 2027 (FY2028 budget) | [WESA](https://www.wesanews.org/development-transportation/2026-05-29/pittsburgh-regional-transit-budget-no-fare-hikes-service-cuts) |
| PRT operating reserve expected to be exhausted by FY2029; prior proposals would have cut 35% of service, ended service after 11 p.m. and eliminated extra event service | Risk / proposal, not adopted | FY2029 (from July 2028) | Each annual budget; next major check spring 2027 | [WPXI](https://www.wpxi.com/news/local/prt-2027-budget-avoids-fare-hikes-service-cuts-funding-struggles-still-loom-over-future/EXG3BQIKZVCAZEFQ3E7UTCSGCQ/); [Metro Magazine](https://www.metro-magazine.com/news/pittsburgh-regional-transit-faces-proposed-cuts-releases-final-public-comment-re) |
| University Line BRT: Downtown loop open since July 2025; Uptown–Oakland section completing late 2027 | Funded, under construction | Late 2027 | January 2028 | [Axios](https://www.axios.com/local/pittsburgh/2025/07/28/bus-rapid-transit-university-line-launch-pittsburgh); [Union Progress](https://www.unionprogress.com/2025/01/08/work-on-pittsburgh-regional-transits-university-line-will-begin-on-forbes-avenue-in-oakland/) |
| Acrisure Stadium Pitt football capacity reduced to 51,416 | Confirmed | From 2026 season | Before 2027 season | [CNHI News](https://www.cnhinews.com/pennsylvania/sports/article_193fa8f9-7e9d-5ced-b4b2-ba7c481a788c.html) |
| Station Square stadium renamed F.N.B. Stadium; renovation and expansion described as upcoming | Rename confirmed; expansion planned, scope and dates unconfirmed | Rename April 23, 2026 | Early 2027 | [Mondo Stadia](https://www.mondostadia.com/?p=26419) |
| I-376 Parkway East full closure for Commercial Street Bridge replacement | Scheduled; reported as started | July 10–Aug. 3, 2026 | Confirm reopening now (Oct. 2026) | [PRT](https://www.rideprt.org/commercialstbridge); [Axios](https://www.axios.com/local/pittsburgh/2026/03/05/parkway-east-closure-commercial-street-bridge-july-2026) |
| Parkway East Squirrel Hill interchange redesign | Planned, starts after 2028 | 2029 | 2028 | [Axios](https://www.axios.com/local/pittsburgh/2026/03/05/parkway-east-closure-commercial-street-bridge-july-2026) |
| Picklesburgh expanded to four days and a larger footprint | Confirmed (2026) | July 16–19, 2026 | Spring 2027 for 2027 plans | [Picklesburgh](https://www.picklesburgh.com/2026picklesburghfootprint/) |
| Lawrence County added to Pittsburgh MSA | Confirmed | 2025 delineation | Next OMB update | [UCSUR](https://ucsur.pitt.edu/sites/default/files/Census%20Reports/UCSUR_CensusEstimates_Brief_March262026.pdf) |
