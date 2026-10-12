# Nashville city-type answer — event travel evidence for the Gridlock read

**Research date:** 12 October 2026. All sources were public web pages read on or before this date. Sources that appeared to be paywalled were read only through public syndication or not at all (see §E4).

**What this is:** an evidence review of how people actually reach event venues in Nashville and Middle Tennessee, assessed against the three existing Fan/Friction city settings (`sprawl` = driving, `hub` = in between, `transit` = transit‑dominant; current fallback car share 0.85 / 0.85 / 0.4). It proposes no new constants, no app code, no hand flags and no tuning against personal ratings.

**Companion venue research:** the brief refers to a companion venue answer, but it was not provided with this brief. Venues were therefore enumerated independently (§4); row IDs below (V01…, E01…) are this document's own and need mapping to the companion answer when it is available.

---

## 1. Short answer

- **Recommended existing city type: `sprawl`.** The only measured event-transit figure found for any Nashville venue (a 2024 Titans game, the best-served venue in the region) is roughly 1.6% of paid attendance on all WeGo bus and train services combined, and much of that was itself car-involved (drive to a park-and-ride or downtown garage, then ride). Every large outlying venue is effectively car-only.
- **Strongest contrary evidence:** a dense, walkable downtown/East Bank cluster (Bridgestone Arena, Nissan Stadium, Ascend, Ryman, Municipal Auditorium, First Horizon Park, CMA Fest, July 4th) that shares one parking pool, the same river bridges and the same interstate loop, and whose walk share from downtown hotels has **never been measured**. If the `hub` setting is meant to represent that kind of shared-core spill rather than a mid-level transit share, this cluster is the case for it.
- **Car-share evidence does not discriminate `sprawl` from `hub`**, because both currently fall back to 0.85. The evidence clearly rules out `transit`.

---

## 2. Method and definitions

| Term | Meaning in this document |
|---|---|
| Car-involved trip | Any trip where the attendee or their party used a private car, carpool, taxi or rideshare for any leg — including driving to a park-and-ride lot, a WeGo Star station, a downtown garage, or a satellite lot and then riding a bus, train or shuttle. Per the brief, these are **not** counted as non-car. |
| Non-car trip | Walk, bike, scooter, or transit reached without a car leg. |
| Measured | A count or survey of actual event travel (e.g., WeGo automated passenger counts, tickets sold for an event train). |
| Projected | A planning study's forecast. |
| Estimated | This document's own transparent estimate, with assumptions and range. |
| Unknown → fallback | No defensible estimate; the current fallback (0.85 for `sprawl`/`hub`) would provisionally apply. |
| People vs vehicles | Parking supply is counted in **vehicles**; attendance and ridership in **people**. No parking count is converted to a mode share. |
| Attendees vs ticket buyers | NFL "paid attendance" is tickets distributed, not turnstile scans; scanned attendance is lower by an unpublished no-show margin. Multi-day festival totals are visits, not a simultaneous crowd. |

Search order followed the brief: venue/organizer travel plans, planning reviews, transit-agency event ridership, municipal studies, then news and venue guides for capacities and operations. **No attendee mode-split survey, traffic impact study with an event mode split, or event-specific transportation management plan with measured shares was found for any Nashville-area venue.** Metro's own East Bank travel-demand work explicitly models daily development trips and [excludes special-event traffic](https://nashville.gov/sites/default/files/2025-06/East-Bank-Boulevard-FAQ-250625.pdf?ct=1750939512), so its 35% transit target is not an event figure and is not used here.

---

## 3. Boundary recommendation

| Area | Recommendation | Evidence |
|---|---|---|
| **Nashville–Davidson–Murfreesboro–Franklin MSA (14 counties)** | **Use as the research boundary.** | OMB defines the MSA around commuting integration; it [includes Davidson and 13 other counties](https://en.wikipedia.org/wiki/Nashville_metropolitan_area) and had an estimated [2,197,416 residents in July 2025](https://fred.stlouisfed.org/data/NVLPOP). The surrounding CSA was estimated at [2,452,592](https://en.wikipedia.org/wiki/Tennessee_statistical_areas). |
| **Murfreesboro (Rutherford Co.)** | **Inside** the boundary, but keep its venue rows separate. | It is a [principal city of the MSA](https://en.wikipedia.org/wiki/Nashville_metropolitan_area). Event-travel evidence links it to Nashville crowds: WeGo runs a [Route 84 express from Murfreesboro park-and-rides to Nashville SC weekend matches](https://www.nashvillesc.com/news/nashville-sc-wego-public-transit-renew-partnership-2026). Its own venues (MTSU) draw a separate campus audience. |
| **Lebanon / Mt. Juliet (Wilson Co.)** | Inside. | WeGo's [Titans Express train starts at Lebanon](https://wegotransit.com/titans) and the [CMA Fest train also runs Lebanon–downtown](https://www.wegotransit.com/wego-star-to-offer-rides-to-cma-fest-concert-/); Nashville Superspeedway and the State Fair are in Lebanon. |
| **Gallatin / Hendersonville (Sumner Co.), Franklin / Cool Springs (Williamson Co.), Bellevue** | Inside. | Titans game-day [express buses serve Bellevue, Gallatin, Hendersonville, Hickory Hollow and Cool Springs](https://www.newschannel5.com/news/titans-wego-expand-free-bus-service-for-home-games-with-new-park-ride-options). |
| **Clarksville (Montgomery Co.)** | **Edge municipality — assess separately, outside the core.** | No Nashville event-transit link was found. Its arena serves a local audience at a [6,000 concert / 5,500 basketball / 5,000 hockey](https://letsgopeay.com/facilities/?id=1025) scale. Whether its metro area sits inside the Nashville CSA was **not verified**; check the OMB delineation file. |
| **Manchester (Coffee Co.)** | **Edge municipality — event-only, outside the core.** | Its only large crowd is Bonnaroo, a national camping festival; there will be [no Bonnaroo in 2027](https://loudwire.com/why-bonnaroo-canceled-2027/). |

---

## 4. Background only — ordinary commuting (not event travel)

| Measure | Value | Source |
|---|---|---|
| Nashville metro work trips, 2024 ACS 1-year: drive alone / carpool / work from home / transit / walk | 70.5% / 9.2% / 16.8% / 0.8% / 1.0% | [Demographia summary of ACS 2024](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access) |

These commuting shares are shown only to establish regional context. They are **not** used as event mode shares anywhere below.

---

## 5. Venue inventory (fixed rooms ~1,000+, and 5,000+ configurations)

Capacities are by configuration. Mutually exclusive configurations of the same room are **never added**.

| ID | Verified current name | Municipality | Capacity by configuration | Status (Oct 2026) | Source / conflicts |
|---|---|---|---|---|---|
| V01 | Nissan Stadium (current) | Nashville | ~69,143 football | Active; to be replaced in 2027 | [Titans release](https://www.tennesseetitans.com/news/green-bay-packers-vs-tennessee-titans-how-to-watch-listen-and-live-stream) |
| V03 | New Nissan Stadium | Nashville (East Bank) | ~60,000, enclosed | Under construction; completion slated [February 2027](https://www.yahoo.com/news/articles/titans-stadium-construction-nears-major-110324976.html) | Opening also described as [summer 2027](https://fbschedules.com/?p=226216) — small conflict, see §E4 |
| V04 | Bridgestone Arena | Nashville | 17,159 hockey; 18,500 basketball; up to 20,000 concert; ~5,145 Music City Theater | Active | [Ticketmaster](https://blog.ticketmaster.com/?p=62408); [roadtrippers](https://roadtrippers.com/places/64303/edit) lists 17,113 hockey and 19,395 basketball — conflict |
| V05 | GEODIS Park | Nashville (Wedgewood‑Houston) | 30,000 soccer; ~27,000 concert | Active | [Soccer Stadium Digest](https://soccerstadiumdigest.com/2022/05/an-inside-look-at-geodis-park-new-nashville-sc-home/) |
| V06 | FirstBank Stadium | Nashville (Vanderbilt) | 35,000 after 2022–25 renovation | Active | [Stadium Journey](https://www.stadiumjourney.com/stadiums/vanderbilt-stadium-s491) |
| V07 | First Horizon Park | Nashville (Germantown) | 8,500 fixed; 10,000 with berm | Active | [Wikipedia](https://en.wikipedia.org/wiki/First_Horizon_Park) |
| V08 | Nashville Municipal Auditorium | Nashville | 9,700 | Active | [NASHtoday](https://nashtoday.6amcity.com/city-guide/play/live-music-venues-nashville-tn) |
| V09 | Ascend Amphitheater | Nashville | 6,800 (about 2,300 seated + 4,500 lawn) | Active | [Axios](https://www.axios.com/local/nashville/2025/02/19/metros-ascend-amphitheater-contract-is-up-in-the-air); [airmeet](https://www.airmeet.com/hub/blog/discover-top-event-venues-in-nashville/) |
| V10 | The Pinnacle | Nashville | 4,500 | Active | [Nashville Go](https://nashvillego.com/calendar/nashville-concerts-the-complete-guide) |
| V11 | Grand Ole Opry House | Nashville | ~4,000 | Active | [NASHtoday](https://nashtoday.6amcity.com/city-guide/play/live-music-venues-nashville-tn) says 4,000; [Ticketmaster](https://blog.ticketmaster.com/concert-venues-nashville) says more than 4,300 — conflict |
| V12 | Ryman Auditorium | Nashville | 2,362 | Active | [NASHtoday](https://nashtoday.6amcity.com/city-guide/play/live-music-venues-nashville-tn) |
| V13 | Schermerhorn Symphony Center | Nashville | 1,844 | Active | [airmeet](https://www.airmeet.com/hub/blog/discover-top-event-venues-in-nashville/) |
| V14 | Brooklyn Bowl Nashville | Nashville | up to ~1,200 | Active | [NASHtoday](https://nashtoday.6amcity.com/city-guide/play/live-music-venues-nashville-tn) (listing implies this venue; verify) |
| V15 | Cannery complex (largest room) | Nashville | ~1,000 | Verify current name/capacity | [older guide](https://musiccitymike.net/nashville-music-venues/) — may be out of date |
| V16 | FirstBank Amphitheater | Franklin | up to 7,500 | Active | [NASHtoday](https://nashtoday.6amcity.com/city-guide/play/live-music-venues-nashville-tn) |
| V17 | Nashville Superspeedway | Lebanon | ~25,000 permanent; temporary seating reported at [38,000 in 2023](https://en.wikipedia.org/wiki/Nashville_Superspeedway) | Active; NASCAR weekend | Other figures (30,000; 40,000; 150,000) also circulate — conflict |
| V18 | Johnny "Red" Floyd Stadium | Murfreesboro | 27,303 | Active; $16M west-side seating work [after the 2026 season, through Aug 2027](https://goblueraiders.com/news/2026/9/3/football-mtsu-athletics-announces-16-million-west-side-seating-upgrade-to-floyd-stadium) | [MTSU](https://goblueraiders.com/facilities/johnny-"red"-floyd-stadium/32) vs [32,000 in visitor guide](https://www.sportsdestinations.com/spotlights/tennessee/its-always-game-rutherford-county-36622) — conflict |
| V19 | Murphy Center (Monte Hale Arena) | Murfreesboro | 11,520 | Active; renovation planned | [Wikipedia](https://en.wikipedia.org/wiki/Murphy_Center) vs [10,000 in visitor guide](https://www.sportsdestinations.com/spotlights/tennessee/its-always-game-rutherford-county-36622) — conflict |
| V20 | F&M Bank Arena | Clarksville | 6,000 concert; 5,500 basketball; 5,000 hockey | Active since July 2023 | [Austin Peay](https://letsgopeay.com/facilities/?id=1025) |
| V21 | Nashville Fairgrounds Speedway | Nashville | Current capacity not verified; a renovation plan called for [~30,000 seats](https://newschannel5.com/news/nascar-races-closer-to-returning-to-the-nashville-fairgrounds-speedway) | Renovation unresolved; politics still contested in [August 2026](https://tennesseelookout.com/2026/08/25/nashville-state-lawmakers-enter-fray-over-fight-for-fairground-speedway/) | Proposal only |

**Coverage gaps (not verified in this pass):** TPAC halls, Vanderbilt Memorial Gymnasium, Marathon Music Works, current Cannery Hall configuration, Austin Peay football stadium, Lipscomb/Belmont/TSU arenas and stadiums, Music City Center event halls, Wilson County Expo Center, and Franklin festival sites. Local ticketing systems and data-feed coverage were **not** verified for any venue.

---

## 6. Venue and event travel table

### 6a. Mode split and recommended car share

"Car-involved" includes private car, carpool, taxi/rideshare, and any drive-to-transit or drive-to-shuttle trip (§2). Where only part of a split is measured, the row says so; no split below is a complete measured 100%.

| ID | Venue / event — setup, date or season represented | Car-involved (incl. rideshare, drive‑to‑transit) | Public bus / rail | Dedicated event shuttle | Walk / bike / other | Unclassified | Sums to 100%? | Recommended car share (range; confidence; type) | Evidence type, date, event type |
|---|---|---|---|---|---|---|---|---|---|
| V01 | Nissan Stadium — Titans NFL regular season; Sunday noon kickoff, 22 Sep 2024 (warm, weekend) | Est. 79–96% | **Measured ≈1.6% of paid attendance** (≈440 bus + 650 train ≈ 1,090 inbound people ÷ 67,322); of this, non-car bus is at most ≈0.65% because train riders board at stations with free parking and some bus riders parked downtown first | Gray Line park‑and‑ride shuttles exist; ridership not published (car‑involved by definition) | Est. 3–20% (no count) | — | Yes, by construction (car + non‑car bus + walk/bike = 100%); only transit is measured | **0.88** (0.79–0.96; low–medium; **estimated** from measured transit + assumed walk) | WeGo automated passenger count and event-train sales, observed single game, Sep 2024; NFL. See §7 for method. |
| V02 | Nissan Stadium — stadium concerts and CMA Fest night shows (summer, evenings) | Unknown | Only fragment: one CMA Fest train with a 380‑ticket allotment (see E01) | CMA Fest shuttle circulates downtown↔stadium (intra‑festival) | Unknown; likely higher than V01 because no stadium parking is sold during CMA Fest | All | No | **Unknown → fallback 0.85** | No measured split; organizer operations notices 2025 |
| V03 | New Nissan Stadium — from 2027 | Unknown | Unknown; continuation of free game‑day WeGo fares was [not yet decided](https://newschannel9.com/sports/new-nissan-stadium-parking-plan-what-fans-need-to-know) | Unknown | Unknown | All | No | **Unknown → fallback 0.85** (no projection published) | None; no public event mode‑split projection found |
| V04 | Bridgestone Arena — Predators hockey (17,159) and arena concerts (up to 20,000), evenings, Oct–Apr for hockey | Unknown | Unknown | Free Nissan Stadium lot with two‑way shuttle (car‑involved) | Unknown; adjacent to Lower Broadway hotels, so likely the highest walk share in the region | All | No | **Unknown → fallback 0.85** (directional evidence points lower, unquantified) | No measured split found |
| V05 | GEODIS Park — Nashville SC MLS, mostly weekend evenings, Feb–Oct | Est. 80–97% | Not measured; free Routes 52/77 and $2 Route 84 express from Murfreesboro/Antioch park‑and‑rides (express is car‑involved) | Satellite lot shuttles (car‑involved) | Est. 2–15%; neighborhood walk‑ins from Wedgewood‑Houston, no hotel district adjacent | — | By construction | **0.90** (0.80–0.97; low; **estimated** by analogy to V01: same agency, less transit, smaller walk catchment) | Club and WeGo service notices 2022–2026; no ridership published |
| V06 | FirstBank Stadium — Vanderbilt SEC football, fall Saturdays | Unknown | Unknown (Route 3 West End corridor) | Unknown | Unknown; on‑campus student walk share likely material | All | No | **Unknown → fallback 0.85** | No measured split found |
| V07 | First Horizon Park — Nashville Sounds Triple‑A, spring–summer evenings | Unknown | Unknown | — | Unknown; ~1 mile walk from Broadway | All | No | **Unknown → fallback 0.85** | No measured split found |
| V08–V15 | Municipal Auditorium, Ascend, Pinnacle, Opry House, Ryman, Schermerhorn, Brooklyn Bowl, Cannery — concerts/theater, evenings, year‑round (Ascend outdoor season) | Unknown | Unknown | — | Unknown (downtown rooms likely higher walk; Opry House, beside Opry Mills, likely lower) | All | No | **Unknown → fallback 0.85** each | No measured split found |
| V16 | FirstBank Amphitheater (Franklin) — summer concerts | Unknown | None found | Unknown | Unknown | All | No | **Unknown → fallback 0.85** (directional: likely higher) | No measured split found |
| V17 | Nashville Superspeedway — NASCAR Cup weekend, late May/early June | Est. 92–100% (includes RV campers, who drive in) | None found in searches (absence not verified) | None found | Est. 0–8% (charter coaches, campground walk‑ups) | — | By construction | **0.97** (0.92–1.00; medium; **estimated**) | Track operations notices 2022–2025; no count |
| V18 | Floyd Stadium (Murfreesboro) — MTSU football, fall | Unknown | Unknown | Unknown | Unknown; student walk share likely material | All | No | **Unknown → fallback 0.85** | None |
| V19 | Murphy Center (Murfreesboro) — MTSU basketball, winter | Unknown | Unknown | — | Unknown | All | No | **Unknown → fallback 0.85** | None |
| V20 | F&M Bank Arena (Clarksville) — APSU basketball, concerts | Unknown | Unknown | — | Unknown | All | No | **Unknown → fallback 0.85** (edge municipality) | None |
| E01 | CMA Fest — 4 days, early June, downtown stages + Nissan Stadium nights (5–8 Jun 2025) | Unknown | Fragment: ≤380 train riders on one day ≈0.4% of one day's ~90,000 (many drive to stations) | Festival shuttles 9 am–1 am (intra‑festival) | Unknown; heavy out‑of‑town audience staying downtown | All | No | **Unknown → fallback 0.85** (directional: lower; not quantifiable) | Organizer/WeGo notices 2025 |
| E02 | Let Freedom Sing July 4th — open site, all day + fireworks, downtown riverfront | Unknown | Unknown (WeGo on a holiday schedule; event train) | — | Unknown | All | No | **Unknown → fallback 0.85** | Police/organizer notices 2022–2026 |
| E03 | Wilson County–Tennessee State Fair — 10 days, mid‑August, Lebanon | Est. 88–99% (free on‑site parking; satellite shuttles are car‑involved) | None found | Free satellite‑lot shuttles (car‑involved) | Est. 1–12% | — | By construction | **0.95** (0.88–0.99; low; **estimated**) | Fair operations notices 2025–2026 |
| E04 | Bonnaroo — 4‑day camping festival, June, Manchester (edge) | Est. 85–99% | None found | Not verified | Unknown | — | By construction | **0.95** (0.85–0.99; low; **estimated**); **no 2027 edition** | News and TDOT‑attributed estimate 2026 |

### 6b. Parking, operations, access constraints and sources

| ID | Parking supply and remote arrangements (vehicles) | Event operations, closures, start/end service | Access constraints and crowds sharing approaches | Direct sources |
|---|---|---|---|---|
| V01 | Titans report [20,000 spaces within a mile](https://newschannel9.com/sports/new-nissan-stadium-parking-plan-what-fans-need-to-know); on‑site parking is [limited and must be pre‑purchased](https://nissan.hortongroup.com/transportation/); Gray Line park‑and‑ride shuttles and free bike valet are offered ([Nissan Stadium](https://nissanstadium.com/news/titans-wego-extend-partnership-for-free-bus-rides-on-titans-home-gamedays)). | Four WeGo routes stop at 1st & Woodland [only on event days](https://wegotransit.com/titans); **all local fares free on home game days** since 2024 ([WeGo 2025](https://www.wegotransit.com/-wego-titans-to-provide-free-bus-fare-system-wide-on-titans-home-gamedays/)); express buses from Bellevue, Gallatin, Hendersonville and later [Hickory Hollow and Cool Springs](https://www.newschannel5.com/news/titans-wego-expand-free-bus-service-for-home-games-with-new-park-ride-options); express departures [slide if the game runs long](https://whitehousechamber.org/wego-public-transit-media-release/); Titans Express train [returns one hour after the game](https://wegotransit.com/titans). Start and end service verified for this event type. | East Bank site reached by river bridges (the stadium lists [three bridges with walking paths](https://nissan.hortongroup.com/transportation/)) and the interstate; shares lots and approaches with Bridgestone events, July 4th and CMA Fest; 2022 GEODIS overflow used [Nissan lots](https://wpln.org/?p=132270). | WeGo release with counts: [Sep 2024](https://www.wegotransit.com/wego-ridership-up-significantly-for-titans-home-games/); paid attendance: [NFL gamebook](https://static.clubs.nfl.com/image/upload/titans/z5gazvdgwfsxcvox9ycd) |
| V02 | [No parking sold on‑site at Nissan during CMA Fest](https://www.wsmv.com/2025/05/29/shuttle-your-way-cma-fest-2025); limited passes via Ticketmaster. | CMA Fest shuttles 9 am–1 am; rideshare zones on Korean Veterans Blvd and 7th Ave N; train returns [one hour after the event](https://www.wegotransit.com/wego-star-to-offer-rides-to-cma-fest-concert-/). | Same as V01 plus downtown festival closures. | As cited |
| V03 | Fewer on‑site spaces than today under the new lease; Metro must provide [at least 2,000 game‑day spaces](https://newschannel9.com/sports/new-nissan-stadium-parking-plan-what-fans-need-to-know). Old stadium to be [demolished from February 2027](https://www.on3.com/teams/kentucky-wildcats/news/nashville-officially-awarded-2030-super-bowl/). | Pedestrian bridge connector work aimed at [late 2027](https://www.wkrn.com/news/local-news/nashville/east-bank-development-update-new-stadium-access-tpac-and-oracle-projects-progress/amp/); East Bank Boulevard transit lanes not before [late 2030](https://www.wkrn.com/news/local-news/nashville/very-tight-nashvilles-east-bank-faces-40-month-deadline-to-prepare-for-super-bowl-lxiv/amp/). | Two to three years of demolition and East Bank construction around the site. | As cited |
| V04 | Arena garage of [310 spaces](https://www.woldae.com/portfolio/bridgestone-arena); partner garages and [free Nissan parking with two‑way shuttle](https://blog.ticketmaster.com/?p=62408). | No event‑specific transit service found; regular downtown WeGo routes. | Lower Broadway crowds; shares downtown garages and Nissan lots with V01/E01/E02. | As cited |
| V05 | About [5,000 club‑controlled spaces](https://newschannel5.com/news/on-the-rise/metro-police-to-increase-staffing-to-help-with-traffic-ahead-of-geodis-park-inaugural-match) for 30,000 seats, including lots at the neighboring speedway ([SSD](https://soccerstadiumdigest.com/2022/05/an-inside-look-at-geodis-park-new-nashville-sc-home/)); satellite lots about [1.2 miles away](https://www.nashvillescene.com/news/pithinthewind/how-to-get-to-nashville-scs-home-opener-at-geodis-park/article_d1577646-8887-50b0-a828-bad5a9f690dd.html); rideshare zone, bike valet ([club](https://www.nashvillesc.com/news/make-your-plan-available-parking-and-transportation-to-nashville-sc-s-geodis-par)). | Free Routes 52/77 all day on home match days; Route 84 express returns [30 minutes after the game](https://nashvillesc.com/wego), with weather‑delay holds; 2022 opener used [48 extra officers](https://newschannel5.com/news/on-the-rise/metro-police-to-increase-staffing-to-help-with-traffic-ahead-of-geodis-park-inaugural-match) at I‑65/Wedgewood and Nolensville Pike posts. | Shares Fairgrounds campus (Expo Center, Speedway) and the I‑65/Wedgewood and Nolensville Pike approaches. | As cited |
| V06 | Two on‑campus decks at [$20–40](https://www.stadiumjourney.com/stadiums/vanderbilt-stadium-s491); flat lots by advance pass ([Vanderbilt](https://vucommodores.com/under-construction/)). | No event transit service found. | West End corridor; hosts FCS title game in [2026 and 2027](https://www.stadiumjourney.com/stadiums/vanderbilt-stadium-s491). | As cited |
| V07 | Team claims [6,000 spaces within a half‑mile](https://stadiumjourney.com/stadiums/first-tennessee-park-2396). | None found. | Germantown; ~1 mile from Broadway. | As cited |
| V09 | Downtown garages. | Ascend drew [154,000 fans in 2024](https://www.axios.com/local/nashville/2025/02/19/metros-ascend-amphitheater-contract-is-up-in-the-air) (season total, not one crowd). | Riverfront; overlaps CMA Fest and July 4th footprints. | As cited |
| V17 | On‑site parking fees dropped and [2,600 spaces added on 20 acres](https://speedsport.com/nascar/nascar-cup-series/nashville-superspeedway-ironing-out-wrinkles) after 2021 traffic problems; camping. | Cup race reported [sold out in each of the prior two years](https://nashvillesuperspeedway.com/media/news/limited-premium-camping-options-remain-available-for-nashville-superspeedways-nascar-weekend.html) (2025 notice). | Rural Wilson County road network; same county as E03 (different dates). | As cited |
| V18–V19 | Lots beside Murphy Center ([Stadium Journey](https://stadiumjourney.com/stadiums/murphy-center-s633)). | None found. | Floyd and Murphy are adjacent on campus. | As cited |
| V20 | APSU lots opened for paid event parking ([Clarksville Now](https://clarksvillenow.com/?p=436730)); garage [completed 2025](https://en.wikipedia.org/wiki/F%26M_Bank_Arena). | None found. | Downtown Clarksville. | As cited |
| E01 | Daily attendance about [90,000 per day in 2024](https://www.wsmv.com/2025/05/29/shuttle-your-way-cma-fest-2025) (CMA via WSMV); shuttle provider cites [over 90,000 each day](https://www.tms.com/?p=1425) for 2025; a radio recap says [95,000 over four days](https://93qcountry.com/1548610/cma-fest-2025-draws-95000-fans-over-four-days-of-country-music) — conflict (§E4). | Shuttles, rideshare zones, one Saturday train. | Uses Nissan Stadium, Ascend, Riverfront Park and downtown streets simultaneously. | As cited |
| E02 | Nissan lots and downtown garages ([NewsChannel 5](https://newschannel5.com/news/navigating-nashvilles-extravagant-july-4th-party)). | WeGo last buses at [11:15 pm in 2025](https://hoodline.com/2025/07/nashville-police-boost-security-for-let-freedom-sing-july-4th-event-urge-vigilance-among-250-000-expected-attendees/); event train returns one hour after fireworks ([WSMV 2026](https://www.wsmv.com/2026/07/02/heres-what-know-about-rideshares-parking-road-closures-nashvilles-july-4th-celebration/)); police egress plan. | Record [355,000 in 2024](https://www.yahoo.com/news/crowds-fill-downtown-nashville-let-234946766.html); [343,000 across a two‑day 2026 event](https://digital-release.wkrn.com/?p=115604) — a multi‑day total, not one simultaneous crowd. | As cited |
| E03 | Free general parking, $10 preferred, free shuttles from [Cumberland University and First Baptist Church](https://www.wsmv.com/2026/08/12/what-know-before-visiting-2026-wilson-countytennessee-state-fair/). | Ten‑day run. | Record [861,425 visits over 10 days](https://digital-release.wkrn.com/?p=1901643) (2024; multi‑day total); [opening night 2025: 33,592](https://digital-release.wkrn.com/?p=2284532). The "Tennessee State Fairgrounds" lead in the brief is stale: the state fair is now held in **Lebanon**. | As cited |
| E04 | Camping site; [hours‑long exit queues reported in 2025](https://edmmaniac.com/whats-new-bonnaroo-guide-to-improved-experience/). | — | 2026 attendance expected around [45,000 per TDOT](https://www.digitalmusicnews.com/?p=347176). | As cited |

---

## 7. Worked ridership inference (V01, Titans game, 22 Sep 2024)

| Step | Value | Notes |
|---|---|---|
| Bus passengers to the stadium | ≈440 | WeGo's [automated passenger count estimate](https://www.wegotransit.com/wego-ridership-up-significantly-for-titans-home-games/). |
| Baseline subtraction | ≈0 | The stadium stops at 1st & Woodland are served [on event days](https://wegotransit.com/titans), so normal background riders there are negligible. The published system‑wide uplift (+10% and +18% for the first two games) has no absolute baseline, so it **cannot** be converted to attendees and is not used. |
| Event train riders | 650 people | Sold out at 650 tickets; one round‑trip ticket per person, so this is people, not boardings. |
| Return trips | Not double counted | Counts are inbound; bus returns were not reported. |
| Denominator | 67,322 paid | [NFL gamebook](https://static.clubs.nfl.com/image/upload/titans/z5gazvdgwfsxcvox9ycd). Scanned attendance unpublished; if 85–95% of paid tickets were used, the transit share rises to ≈1.7–1.9%. |
| Transit share of paid attendance | ≈1.6% | (440 + 650) ÷ 67,322. |
| Car‑involved part of transit | Most of the 650; some of the 440 | Outlying Star stations have [free parking](https://www.wegotransit.com/wego-star-to-offer-rides-to-cma-fest-concert-/); WeGo markets [park downtown and ride](https://wegotransit.com/titans). Non‑car transit therefore ≤ ≈0.65%. |
| Walk / bike / other | Assumed 3–20% | No count exists. The low end reflects nearby residents; the high end reflects downtown hotel guests walking the pedestrian bridge. **This assumption drives most of the range.** |
| Car‑involved share | 0.79–0.96, midpoint ≈0.88 | 1 − (≤0.0065) − (0.03 to 0.20). |
| Uncertainty | High | One early‑season game; promotional free fares; 2025 expansions have no published counts; parking (in vehicles) was **not** converted to a mode share. |

---

## 8. Regional conclusion and weighting

### 8a. Capacity‑weighted car share (fixed rooms with a 5,000+ configuration, inside the recommended boundary)

One configuration per room (the largest regular one); no mutually exclusive configurations added. "F" = unknown, fallback 0.85 used as a placeholder.

| ID | Room and configuration | Weight (seats) | Car share used | Type |
|---|---|---|---|---|
| V01 | Nissan Stadium, football | 69,143 | 0.88 | Estimated |
| V06 | FirstBank Stadium, football | 35,000 | 0.85 | F |
| V05 | GEODIS Park, soccer | 30,000 | 0.90 | Estimated |
| V18 | Floyd Stadium, football | 27,303 | 0.85 | F |
| V17 | Nashville Superspeedway, permanent seats | 25,000 | 0.97 | Estimated |
| V04 | Bridgestone Arena, end‑to‑end concert | 20,000 | 0.85 | F |
| V19 | Murphy Center | 11,520 | 0.85 | F |
| V07 | First Horizon Park, with berm | 10,000 | 0.85 | F |
| V08 | Municipal Auditorium | 9,700 | 0.85 | F |
| V16 | FirstBank Amphitheater | 7,500 | 0.85 | F |
| V09 | Ascend Amphitheater | 6,800 | 0.85 | F |
| | **Total** | **251,966** | | |

| Result | Value | Fallback share of weight |
|---|---|---|
| All rows | **0.876** | 50.7% |
| Estimated rows only (V01, V05, V17) | **0.903** | 0% |
| Downtown cluster only (V01, V04, V07, V08, V09) | 0.868 | 40% |
| Excluding Murfreesboro rows | 0.881 | — |
| Superspeedway at 38,000 (temporary seating) | 0.881 | — |

### 8b. Typical‑attendance weighting (per event, one crowd each)

| ID | Event | Typical crowd used | Car share | Source / note |
|---|---|---|---|---|
| V01 | Titans game | 67,322 | 0.88 | Paid attendance, one game ([NFL](https://static.clubs.nfl.com/image/upload/titans/z5gazvdgwfsxcvox9ycd)) |
| V05 | Nashville SC match | ~28,000 | 0.90 | Average ["over 28,000"](https://www.stadiumjourney.com/stadiums/geodis-park-nashville-sc) — secondary source |
| V17 | NASCAR Cup race | ~38,000 | 0.97 | Inference: reported sellouts × reported temporary capacity; no published attendance |
| V07 | Sounds game | ~7,500 | 0.85 (F) | Average ["over 7,500"](https://stadiumjourney.com/stadiums/first-tennessee-park-2396) — secondary source |

Result: **0.907** (fallback 5% of weight). **Missing coverage:** Bridgestone, Vanderbilt, MTSU, all theaters, all concerts. Multi‑day festival totals (CMA Fest, July 4th, State Fair) are excluded because they are not one simultaneous crowd.

### 8c. Interpretation

- Half the capacity weight rests on the fallback itself, so these averages **cannot validate** 0.85; they only show that **every evidence‑based row is at or above 0.88**.
- **Do outlying venues obscure the downtown pattern?** Partly. The Superspeedway and suburban/campus rows pull the regional average up. But the only downtown measurement (V01) is still strongly car‑involved, and the unmeasured downtown walk share is the main thing that could pull the downtown cluster below 0.85. That downtown walk share is the largest single unknown.
- **City type:** `sprawl` fits the mode evidence. `transit` is ruled out. `hub` is supported only by spatial clustering and shared access, not by transit use.

---

## 9. Clusters, shared roads and shared audiences (separate findings)

| Finding | What is shared | Evidence |
|---|---|---|
| Downtown/East Bank cluster | Nissan Stadium, Bridgestone, Ascend, Ryman, Municipal Auditorium, Schermerhorn, Pinnacle; CMA Fest and July 4th footprints | One parking pool: Nissan lots serve [Bridgestone](https://blog.ticketmaster.com/?p=62408), [July 4th](https://newschannel5.com/news/navigating-nashvilles-extravagant-july-4th-party) and, in 2022, [GEODIS overflow](https://wpln.org/?p=132270); WeGo Central serves all downtown riders. |
| Fairgrounds/Wedgewood‑Houston cluster | GEODIS Park, Fairgrounds Speedway, Expo Center | Shared lots and the I‑65/Wedgewood and Nolensville Pike traffic posts ([NewsChannel 5](https://newschannel5.com/news/on-the-rise/metro-police-to-increase-staffing-to-help-with-traffic-ahead-of-geodis-park-inaugural-match)). |
| Lebanon | Superspeedway and State Fair | Same county; different seasons, so not simultaneous. |
| Vanderbilt/West End | FirstBank Stadium and Memorial Gym | Shared campus parking. |
| MTSU | Floyd Stadium and Murphy Center | [Adjacent](https://stadiumjourney.com/stadiums/murphy-center-s633). |
| Shared suburban audiences | Sumner, Williamson, Wilson and Rutherford fans | Express bus and train service for Titans and Nashville SC (cited in §3). |

No new distance rule or manual hard‑access flag is proposed.

---

## E. End sections

### E1. Recommended existing city type and rationale

**`sprawl`.** Measured event transit at the region's best‑served venue is about 1.6% of paid attendance, mostly car‑involved; regional commuting transit is 0.8% (background only); every outlying venue is car‑based. **Strongest contrary evidence:** the dense downtown cluster sharing parking, bridges and the interstate loop, and its unmeasured walk share from downtown hotels. **Venue exceptions to watch:** Bridgestone Arena, Ascend, Ryman, CMA Fest and July 4th (likely lower car share); Superspeedway, State Fair and Bonnaroo (likely higher).

### E2. Car‑share values keyed to rows

| Category | Rows and values |
|---|---|
| **Measured** | None complete. Measured component only: V01 transit ≈1.6% of paid attendance; E01 train ≤380 riders. |
| **Projected** | None found for any event. |
| **Estimated** | V01 0.88 (0.79–0.96); V05 0.90 (0.80–0.97); V17 0.97 (0.92–1.00); E03 0.95 (0.88–0.99); E04 0.95 (0.85–0.99). |
| **Unknown → fallback 0.85** | V02, V03, V04, V06, V07, V08–V15, V16, V18, V19, V20, E01, E02. |

### E3. Boundary and inconsistencies between briefs

- **Boundary:** the 14‑county MSA, including Murfreesboro and Lebanon; Clarksville and Manchester as edge municipalities.
- **Inconsistencies:** (1) the brief asks to assess Murfreesboro "separately", but it is an official principal city of the MSA, so it is kept inside the boundary with separate rows; (2) the "Tennessee State Fairgrounds" lead is stale because the state fair now runs in Lebanon; (3) the companion venue answer referenced for row keys was not provided.

### E4. Data gaps, model limitations, source conflicts, inaccessible sources

- **Gaps:** no attendee mode‑split survey for any venue; no WeGo ridership for GEODIS Park, Bridgestone, CMA Fest buses or any 2025–26 Titans games; no scanned (vs paid) NFL attendance; no event traffic impact study with a mode split; State Fair and festival splits unmeasured.
- **Model limitations:** the V01 range is driven mainly by an assumed walk share; the weighted averages are half fallback.
- **Conflicts kept as found:** Bridgestone hockey 17,159 vs 17,113; Opry House 4,000 vs over 4,300; Floyd 27,303 vs 32,000; Murphy 11,520 vs 10,000; Superspeedway expanded capacity 30,000 / 38,000 / 40,000 / 150,000; CMA Fest ~90,000 per day vs 95,000 over four days; Bonnaroo historic peak ~80,000 ([DMN](https://www.digitalmusicnews.com/?p=347176)) vs 100,000 ([Loudwire](https://loudwire.com/why-bonnaroo-canceled-2027/)); new stadium cost $2.1B vs $2.2B; opening February 2027 (completion) vs summer 2027 (first events) — likely a definitional difference.
- **Inaccessible:** Nashville Business Journal and Tennessean articles are paywalled; only public syndicated copies were used. No access controls were bypassed.

### E5. Confirmed transport and venue changes through 2028

| Change | Date | Status | Suggested re‑check |
|---|---|---|---|
| New Nissan Stadium opens (60,000, enclosed) | Completion [Feb 2027](https://www.yahoo.com/news/articles/titans-stadium-construction-nears-major-110324976.html); 2027 season | Funded, under construction | Mar 2027 and Aug 2027 |
| Old Nissan Stadium demolition | From Feb 2027, cleared within a year | Scheduled | Mar 2027 |
| Game‑day WeGo free fares at new stadium | Undecided | Proposal | Jul 2027 |
| Seigenthaler Bridge connector / Music City Mile | Targeted late 2027 | Scheduled (EBDA) | Dec 2027 |
| East Bank Boulevard transit lanes | Construction late 2030 | Planned; **not before 2028** | Annually |
| Choose How You Move service expansions | [Jul 2025 and Jan 2026](https://www.nashville.gov/featured-initiatives/transit/one-year-progress) done; more planned | Funded (½‑cent sales tax) | Each WeGo service change |
| Nolensville Pike All‑Access Corridor (serves GEODIS) | [Design in 2026](https://www.wsmv.com/2026/06/26/nashvilles-nolensville-pike-become-citys-first-all-access-corridor/) | Funded program, timeline unconfirmed | Jun 2027 |
| West End curbside bus lane pilot (serves Vanderbilt) | Design/engagement | Funded program, timeline unconfirmed | Jun 2027 |
| Floyd Stadium west‑side seating | After 2026 season to Aug 2027 | Funded | Aug 2027 |
| Bonnaroo | No 2027 edition | Confirmed hiatus | Early 2028 |
| Fairgrounds Speedway renovation (~30,000 seats) | Unresolved | Proposal | Next Metro/charter vote |
| [WrestleMania 2028 bid](https://www.on3.com/teams/kentucky-wildcats/news/nashville-officially-awarded-2030-super-bowl/); [Super Bowl LXIV](https://www.tennesseetitans.com/news/nashville-to-host-super-bowl-lxiv-at-new-nissan-stadium-in-2030) (Feb 2030) | 2028 bid; 2030 game | Bid (proposal); Super Bowl confirmed but outside window | Mid‑2027 |
