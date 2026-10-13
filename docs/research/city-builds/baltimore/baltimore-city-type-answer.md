# Baltimore — city type and event car-share research

**Research date:** 13 October 2026 (web sources read 13 Oct 2026; source dates shown per row).
**Scope:** Baltimore City and the Baltimore–Columbia–Towson metro; Columbia, Annapolis and Laurel assessed as edge cases.
**Companion venue answer:** not available in this session (no file supplied). Venue rows below were enumerated independently; the hand-off section gives provisional keys a builder must reconcile against the companion answer before wiring.

**Bottom line:** No public source gives a measured person-mode split for any Baltimore venue. The best evidence is MTA and team ridership counts for Ravens games, which put documented non-car modes at roughly 10–17% of a sold-out crowd. Recommended type: **`hub`** (in between). Every car share below is **estimated**, never measured.

---

## 1. Background only: ordinary travel data (not event travel)

| Measure | Value | Period | Source |
|---|---|---|---|
| Baltimore City residents commuting by public transit | 12.8% | ACS 2018–2022 | [BNIA Vital Signs 22](https://storymaps.arcgis.com/stories/e2865454aa12482eb7cb5e78a0ad767a) |
| Baltimore City drove alone to work | 57.5% (down from 60.0%) | ACS 2018–2022 vs 2013–2017 | [BNIA Vital Signs 22](https://storymaps.arcgis.com/stories/e2865454aa12482eb7cb5e78a0ad767a) |
| Baltimore City carpool / walk to work | 7.7% / 5.5% | ACS 2018–2022 | [BNIA Vital Signs 22](https://storymaps.arcgis.com/stories/e2865454aa12482eb7cb5e78a0ad767a) |
| Share of all Baltimore-region trips (any purpose) by transit | 2.9% (Baltimore City 9.7%) | BMC household travel survey, presented Dec 2021 | [Baltimore Metropolitan Council](https://baltometro.org/sites/default/files/bmc_documents/committee/presentations/tc/TC211207pres_Travel-Survey-Daily-Travel.pdf) |
| Light RailLink weekday ridership | ~17,600 | Q2 2026 | [Wikipedia (Light RailLink)](https://en.wikipedia.org/wiki/Baltimore_Light_RailLink) |

These describe residents' commutes and all-purpose trips, not event audiences. They are context only and are not used as venue mode shares.

---

## 2. Venue and event inventory (independent enumeration)

Capacities are listed only where a source states one; conflicts are preserved. Per build rules, a conflicting or range-only figure is flagged for the gaps list rather than resolved by guessing.

| Provisional key | Verified current name | Municipality / county | Setup | Capacity (source) | Conflict / note |
|---|---|---|---|---|---|
| `bal-mt-bank-stadium` | M&T Bank Stadium | Baltimore City | NFL (Ravens) | 70,745 ([Wikipedia](https://en.wikipedia.org/wiki/M%26T_Bank_Stadium)) | Conflict: 71,008 per [Governor's office, 2024](https://governor.maryland.gov/news/press-releases/governor-moore-attends-ravens-training-camp-and-tours-mt-bank-stadium-improvements-ahead-2024-2025) and [MSA](https://mdstad.com/node/154). A $489M renovation [finished before the 2026 preseason](https://www.wmar2news.com/local/ravens-unveil-completed-stadium-renovations-ahead-of-preseason-opener); post-renovation capacity not found → **gap**. |
| `bal-oriole-park` | Oriole Park at Camden Yards | Baltimore City | MLB (Orioles) | 44,970 ([MLB.com](https://www.mlb.com/news/featured/camden-yards-guide-capacity-seating-chart-parking-and-more)) | Conflict: 45,971 per [CBS Baltimore, 2024](https://www.cbsnews.com/amp/baltimore/news/guide-oriole-park-camden-yards-baltimore-orioles) (likely pre-2022 wall change; unverified) → **gap until reconciled**. |
| `bal-navy-marine-corps-stadium` | Navy–Marine Corps Memorial Stadium (Jack Stephens Field) | Annapolis, Anne Arundel Co. (edge) | College football (Navy) | 34,000 ([Wikipedia](https://en.wikipedia.org/wiki/Navy%E2%80%93Marine_Corps_Memorial_Stadium)) | Record crowd above capacity reported (38,225, 2013) per [secondary wiki](https://military-history.fandom.com/wiki/Navy-Marine_Corps_Memorial_Stadium). |
| `bal-merriweather` | Merriweather Post Pavilion | Columbia, Howard Co. (edge) | Amphitheater, pavilion + lawn | 19,319 ([Wikipedia](https://en.wikipedia.org/wiki/Merriweather_Post_Pavilion)) | ~19,000 in a [county advisory panel report](https://frankhecker.com/assets/texts/citizens-advisory-panel-on-merriweather-post-pavilion-final-report.pdf), which also says the maximum is seldom used. |
| `bal-cfg-bank-arena` | CFG Bank Arena | Baltimore City | Arena, concerts | 14,000 ([OVG via IAVM](https://blog.iavm.org/cfg-bank-acquires-naming-rights-to-baltimore-arena/); [Baltimore Fishbowl](https://baltimorefishbowl.com/stories/baltimore-arena-to-be-renamed-cfg-bank-arena-expected-to-open-in-february-2023/)) | Conflict: "15,000-seat" per [Clark Construction](https://clarkconstruction.com/our-work/projects/cfg-bank-arena); configuration list (13,300 center stage, 13,000 end stage, 11,183 basketball) only on [Wikipedia](https://en.wikipedia.org/wiki/CFG_Bank_Arena) → **gap by configuration**. |
| `bal-johnny-unitas-stadium` | Johnny Unitas Stadium | Towson, Baltimore Co. | College football | 11,198 ([Stadium Journey](https://stadiumjourney.com/stadiums/johnny-unitas-stadium-towson-tigers-lacrosse); [The Towerlight](https://thetowerlight.com/an-empty-feeling-in-secu-arena/)) | Towson University says "over 11,000" ([Towson](https://www.towson.edu/campus/planningevents/venues.html)). |
| `bal-umbc-arena` | Chesapeake Employers Insurance Arena | Baltimore Co. (address Baltimore, MD 21250) | Concerts / basketball | 5,500 concerts; 4,654 basketball ([Wikipedia](https://en.wikipedia.org/wiki/Chesapeake_Employers_Insurance_Arena)) | Conflict: UMBC says up to 6,000 for performances ([UMBC](https://umbc.edu/about/visit/on-campus-destinations/)); one web page claiming 14,000 is unreliable and excluded. |
| `bal-secu-arena` | SECU Arena (Towson University) | Towson, Baltimore Co. | Basketball / concerts | 5,200 ([Wikipedia](https://en.wikipedia.org/wiki/TU_Arena)) | Towson says up to 4,800 guests ([Towson](https://www.towson.edu/campus/planningevents/venues.html)); 3,580 for Baltimore Blast. Name returned to SECU in May 2025. |
| `bal-pier-six` | Pier Six Pavilion | Baltimore City (Inner Harbor) | Outdoor pavilion | **blank** — range only | Roughly 4,400 per [The Banner, 2026](https://www.thebanner.com/culture/music/pier-six-pavilion-finn-group-OZMSFDBXQBHI7LLL73PDX6AJAI/); 4,341 after the 1991 rebuild per [Wikipedia](https://en.wikipedia.org/wiki/Pier_Six_Pavilion); other listings say 4,000–4,600. New operators in 2026. |
| `bal-lyric` | The Lyric (Modell Performing Arts Center) | Baltimore City | Theater | 2,564 ([Visit Baltimore](https://baltimore.org/what-to-do/where-to-see-live-music-in-baltimore/)) | — |
| `bal-meyerhoff` | Joseph Meyerhoff Symphony Hall | Baltimore City | Concert hall | 2,443 ([Wikipedia](https://en.wikipedia.org/wiki/Joseph_Meyerhoff_Symphony_Hall)) | — |
| `bal-hippodrome` | Hippodrome Theatre (France-Merrick PAC) | Baltimore City | Theater | **blank** — conflict | 2,286 ([Cinema Treasures](https://www.cinematreasures.org/theaters/1264)) vs 2,300 ([Wikipedia](https://en.wikipedia.org/wiki/Hippodrome_Theatre_(Baltimore))) vs 2,200 ([Fisher Dachs](https://www.fisherdachs.com/portfolio/france-merrick-performing-arts-center-hippodrome-theatre/)). |
| `bal-fairgrounds` | Maryland State Fairgrounds | Timonium, Baltimore Co. | Open site (fair) | n/a (not fixed-capacity) | Event row below. |
| `bal-pimlico` | Pimlico Race Course | Baltimore City | Racetrack (rebuilding) | **gap** | Under a $400M rebuild; Preakness returns in 2027 ([Baltimore Sun](https://www.baltimoresun.com/2026/05/16/preakness-2026-what-you-need-know/)). |
| `bal-laurel-park` | Laurel Park | Laurel (edge; Anne Arundel/Howard line) | Racetrack | 2026 Preakness capped at 4,800 ([TDN](https://www.thoroughbreddailynews.com/admission-to-preakness-at-laurel-will-be-limited-to-4800/)) | Slated to close to live racing and become a training center ([Wikipedia](https://en.wikipedia.org/wiki/Laurel_Park_(race_track))). |

**Coverage gaps (not verified in this pass):** Hughes Stadium (Morgan State), Homewood Field (Johns Hopkins), Ripken Stadium (Aberdeen, Harford Co.), Rams Head Live, Baltimore Soundstage, Baltimore Convention Center event halls, and any Carroll County venue. These rooms' names, capacities, activity and feed coverage were not checked.

### Event rows (not fixed-capacity records)

| Event | Place / date | Crowd evidence | Note |
|---|---|---|---|
| Artscape | Downtown (War Memorial Plaza and surrounding streets), 23–24 May 2026 | 2025 daily attendance averaged ~60,000 ([Mayor's office](https://mayor.baltimorecity.gov/news/press-releases/2026-01-08-mayor-brandon-m-scott-announces-roots-and-stephanie-mills-artscape)) | Daily average, not simultaneous peak. Moved downtown in 2025. |
| Maryland State Fair | Timonium; 27–30 Aug, 3–7 Sep, 10–13 Sep 2026 ([The Banner](https://www.thebanner.com/culture/things-to-do/maryland-state-fair-JLNNU7XN3BFLPDOZFA64EJFLMI/)) | Attendance **gap** (searched "Maryland State Fair 2025 attendance") | Multi-weekend total must not be treated as one crowd. |
| Preakness / Black-Eyed Susan | Laurel Park 2026; Pimlico from 2027 | 2025 two-day estimate 63,000 at Pimlico; 2026 capped at 4,800 ([TDN](https://www.thoroughbreddailynews.com/admission-to-preakness-at-laurel-will-be-limited-to-4800/)) | The 63,000 is a two-day total, not a simultaneous crowd. |
| Ravens + Orioles same-day doubleheader | Camden Yards complex, Sunday 20 Sep (2026 by weekday; page undated) | Ravens kickoff 1:05 PM; no lot entry 3:30–5:30 PM; Orioles lots open 5:30 PM ([Orioles/MLB](https://www.mlb.com/orioles/ballpark/transportation/september-20-parking)) | Billed as the first same-day regular-season pair at the complex ([Ravens](https://www.baltimoreravens.com/fans/ravens-orioles-gameday/)). Key overlap case. |
| Other city festivals | AFRAM 19–22 Jun 2026; Caribbean Carnival 11–12 Jul; Book Festival 12–13 Sep; Charm City Live 19 Sep ([Fox Baltimore](https://foxbaltimore.com/newsletter-daily/2026-dates-baltimore-festivals-events-mayor-brandon-scott)) | Attendance **gap** | — |

---

## 3. Venue and event travel table

All shares are **people**, not vehicles. "Car" means private car, carpool or rideshare. Per the brief, a car trip to a remote lot plus an event shuttle counts as car-involved.

**Park-and-ride treatment (method choice).** Event shuttles from remote lots are counted as car. Regular light rail boarded at a suburban park-and-ride lot (for example North Linthicum or Timonium) is counted as transit in the recommended value, because the car trip ends outside the venue's approach roads. A car-involved upper bound is noted where relevant.

### 3a. Ravens at M&T Bank Stadium — strongest evidence in the region

| Mode | People | Share of 70,745 | Year / source |
|---|---|---|---|
| Light rail | ~5,000 | 7.1% | 2007 season average, MTA via [Daily Record, 2008](https://thedailyrecord.com/2008/09/02/ravens-buses-are-back-at-a-higher-price/) |
| Light rail (newer) | "up to 10,000 riders" per game day | up to 14.1% if people; ~7.1% if this counts both directions | MDOT spokesperson, Dec 2023, via [The Banner](https://www.thebanner.com/sports/ravens-nfl/baltimore-ravens-traffic-weather-XYCCEYIXQJEYTKFQXSKVFSRNWA/). Unit ambiguous; no baseline subtraction published. |
| Metro SubwayLink | ~500 | 0.7% | 2007, [Daily Record](https://thedailyrecord.com/2008/09/02/ravens-buses-are-back-at-a-higher-price/) |
| Private charter buses | ~1,500 | 2.1% | Ravens spokesman, 2008, [Daily Record](https://thedailyrecord.com/2008/09/02/ravens-buses-are-back-at-a-higher-price/) |
| MTA park-and-ride event shuttles (car-involved) | ~2,550 | 3.6% → counted as car | 2007; cancelled before 2008 and replaced by team-contracted buses at $20–25 per game ([Daily Record](https://thedailyrecord.com/2008/09/02/ravens-buses-are-back-at-a-higher-price/)). Current status **gap**. |
| Local bus, walk, bike | not counted | unclassified | — |

**Derivation.**
- Documented non-car modes (light rail, Metro and charter) total **9.9%–16.9%** of capacity.
- The unclassified residual (local bus, walk, bike) is unknown; this answer allows 0–10% for it.
- That gives a car share of **0.73–0.90**. The recommended value is the midpoint, **0.82**.
- The denominator assumes a near-capacity crowd. Ravens typical attendance was not found (**gap**); a smaller crowd raises the transit share.
- Car-involved upper bound: some light rail riders drive to suburban lots. A season-ticket holder told The Banner the North Linthicum lot is usually full on game days ([The Banner](https://www.thebanner.com/sports/ravens-nfl/baltimore-ravens-traffic-weather-XYCCEYIXQJEYTKFQXSKVFSRNWA/)). This is not quantified.

**Operations.**
- All stadium lots are sold to permit holders, and the team steers other drivers to SpotHero garages ([Ravens](https://baltimoreravens.com/stadium/directions-parking)).
- Lots open 4.5 hours before kickoff, so arrivals spread out more than for the Orioles.
- The city enforces residential permit parking and posted detours on game days ([Ravens/BCDOT](https://www.baltimoreravens.com/news/traffic-advisory-m-t-bank-stadium-on-game-day-7744981)).
- MTA typically adds a light rail car on game days ([Baltimore Sun, 2017](https://www.baltimoresun.com/2017/04/24/light-rails-promise-remains-unfulfilled-except-on-game-days/)).
- In Dec 2023 the whole light rail system was suspended. MTA ran 30 bridge buses plus 20 game-day express buses ([CBS Baltimore](https://cbsnews.com/baltimore/news/ravens-game-prompts-mta-to-prepare-for-public-transportation-demands-ahead-of-sunday)). Transit reliability is a real constraint.
- Fans come from out of state: riders quoted in The Banner were from York, PA and Dover, DE.

### 3b. Full travel table

| Key | Event / season represented | Car | Bus / rail | Event shuttle | Walk / bike / other | Unclassified | Sums to 100%? | Recommended car share | Evidence type |
|---|---|---|---|---|---|---|---|---|---|
| `bal-mt-bank-stadium` | Ravens NFL, Sundays, autumn–winter; 2007 counts and 2023 statement | 73–90% (implied) | light rail 7–14%, Metro 0.7% | MTA shuttles 3.6% (2007, counted as car); charter 2.1% (other) | not counted | residual | **No**: partial counts; residual inferred | **0.82 estimated** (0.73–0.90), low confidence | Observed ridership counts (agency and team), old and ambiguous |
| `bal-oriole-park` | Orioles MLB, Apr–Sep; 2026 average 22,583 per game ([Fox Baltimore](https://foxbaltimore.com/sports/sports-unlimited/baltimore-orioles-2026-attendance-ranks-bottom-10-mlb-second-straight-season)) | unknown | light rail from 32 stops ([MTA, 2023](https://www.mta.maryland.gov/articles/372)); MARC Camden Line weekday only | none found | unknown | all | **No** | **0.82 estimated** (0.70–0.90) by analogy to the adjacent Ravens figures; very low confidence | Comparison only. Same station, lots and roads; weekday evening games add downtown walk-ins (unquantified). |
| `bal-cfg-bank-arena` | Concerts | unknown | Light rail (Baltimore Arena stop) and Metro (Charles Center) nearby | none | unknown | all | No | **default** (`hub` 0.85) | No split found. Searched "CFG Bank Arena parking transit". |
| `bal-merriweather` | Summer concerts | most; free parking in "over a dozen" lots ([Merriweather](https://merriweathermusic.com/parking/)) | no rail link found | ADA lot shuttle only | small (Merriweather District has 852 nearby homes per [leasing brochure](https://hrretail.com/wp-content/uploads/2019/01/Merriweather-District-MB-01-26-26eAP.pdf)) | small | No | **0.95 estimated** (0.88–0.98), low confidence | Inferred: free parking, no rail, and 90% of attendees from outside Howard County ([Wikipedia](https://en.wikipedia.org/wiki/Merriweather_Post_Pavilion)) |
| `bal-navy-marine-corps-stadium` | Navy football, Saturdays, autumn; Military Bowl in Dec | most; presold lots and paid lots at nearby schools | Annapolis Transit free with ticket (2005 policy, [Navy](https://navysports.com/news/2005/10/5/navy_football_parking_faq.aspx)) | free Truman Park & Ride shuttle (counted as car) | walk from Annapolis/USNA (unquantified) | yes | No | **0.90 estimated** (0.80–0.97), low confidence | Operations evidence only ([Navy gameday guide](https://navysports.com/sports/2018/7/23/sports-m-footbl-spec-rel-17-gameday-guide-html?path=me); [Military Bowl](https://militarybowl.org/bowl-home/parking-transportation)) |
| `bal-johnny-unitas-stadium` / `bal-secu-arena` | Towson football / basketball / concerts | unknown; free lots ([Stadium Journey](https://stadiumjourney.com/stadiums/johnny-unitas-stadium-towson-tigers-lacrosse)) | no rail at campus found | none | on-campus students (unquantified) | all | No | **default** | No split found |
| `bal-umbc-arena` | Basketball / concerts | unknown | CityLink Yellow, UMBC Transit ([Wikipedia](https://en.wikipedia.org/wiki/Chesapeake_Employers_Insurance_Arena)) | none | students (unquantified) | all | No | **default** | No split found |
| `bal-pier-six` | Summer concerts | unknown | unknown | none | unknown | all | No | **default** | No split found |
| Theaters (`bal-lyric`, `bal-meyerhoff`, `bal-hippodrome`) | Evening shows | unknown | Light rail / Metro nearby | none | unknown | all | No | **default** | No split found |
| `bal-fairgrounds` (State Fair) | Late Aug–Sep weekends | unknown; $15 on-site lot plus free park & ride and garage walk-ins ([State Fair](https://marylandstatefair.com/directions/)) | Fairgrounds light rail stop at a gate; bus 93 | none (free lots are walk-in, counted as car) | unknown | all | No | **default** | Operations only |
| Artscape | Memorial Day weekend, downtown | unknown | downtown light rail / Metro | unknown | unknown | all | No | **default** | No split found |
| Preakness at Pimlico (2027+) | May | unknown | Cold Spring Lane light rail with a track shuttle historically ([MTA brochure](https://s3.amazonaws.com/mta-website-staging/mta-website-staging/files/Routes%20Schedules/LIGHT%20RAILLINK.pdf)) | historical shuttle; 2027 plan **gap** | unknown | all | No | **default**; re-check for the 2027 plan | — |

**Start and end service.** MTA's 2023 Orioles notice says light rail runs every 15–30 minutes depending on time and destination ([MTA](https://www.mta.maryland.gov/articles/372)). A secondary guide claims 8–15 minutes on game days ([MeetStadium](https://meetstadium.com/stadiums/oriole-park-at-camden-yards/)); this is an unverified conflict. Postgame frequency and last-train times were not found (**gap**). MARC to the opener used a special midday train, with the return on the regular 6:15 PM train ([MTA](https://www.mta.maryland.gov/articles/372)). Penn Station–Camden light rail resumed in June 2025 after a bus bridge that began in 2019 ([Wikipedia](https://en.wikipedia.org/wiki/Baltimore_Light_RailLink)).

**Parking supply.** The Orioles cite over 30,000 garage and lot spaces within a short walk of Camden Yards ([CBS Baltimore](https://www.cbsnews.com/amp/baltimore/news/guide-oriole-park-camden-yards-baltimore-orioles)). This is supply, not a mode share. Warner Street between the casino and the ballpark is closed to vehicles, which affects Lots F, G, H, K, L, N and O ([Orioles](https://www.mlb.com/orioles/ballpark/transportation)).

---

## 4. Regional conclusion

**Recommended existing type: `hub` (in between).**

- Downtown's two largest venues share one light rail spine with measurable game-day ridership. Documented non-car shares are about 10–17% at Ravens games. That is well above suburban venues, but far below a `transit` city: the implied car share of 0.73–0.90 is nowhere near the 0.4 default.
- Downtown has a dense cluster of large rooms (Section 5). Nearby crowds plausibly spill into one another, which is what distinguishes `hub` from `sprawl`.
- The `sprawl` and `hub` defaults both use a 0.85 car share, so this choice changes spill behavior, not the fallback car share.

**Strongest contrary evidence (for `sprawl`).**
- Only 2.9% of all regional trips use transit ([BMC](https://baltometro.org/sites/default/files/bmc_documents/committee/presentations/tc/TC211207pres_Travel-Survey-Daily-Travel.pdf)).
- The light rail system was fully suspended in Dec 2023.
- Every large venue outside downtown (Merriweather, Navy, Towson, the Fairgrounds) is car-dominant and surrounded by free or presold parking.

**Weighted car shares (estimated venues only).** Distinct venues, single configurations, no multi-day totals.

| Venue | Configuration | Capacity weight | Car share (est.) |
|---|---|---|---|
| M&T Bank Stadium | NFL | 70,745 | 0.82 |
| Oriole Park | MLB | 44,970 | 0.82 |
| Navy–Marine Corps Memorial Stadium | Football | 34,000 | 0.90 |
| Merriweather Post Pavilion | Amphitheater | 19,319 | 0.95 |
| **Capacity-weighted** | | 169,034 | **≈0.85** |
| Downtown only (Ravens + Orioles) | | 115,715 | **0.82** |

Missing from these weights: CFG Bank Arena (conflict), Unitas, SECU, UMBC, Pier Six, the theaters and all events.

**Typical-attendance weighting** cannot be computed. Only the Orioles figure is sourced (22,583 per game in 2026); Ravens, Navy and Merriweather typical crowds are **gaps**. Because both downtown venues carry the same estimate, any weighting between them still gives 0.82.

**Do outlying venues obscure the downtown pattern?** Yes, modestly. Adding Navy and Merriweather lifts the weighted figure from 0.82 to about 0.85, and both are edge-of-boundary sites with DC-facing audiences.

---

## 5. Clusters, shared roads and shared audiences (separate findings)

1. **Camden Yards / west downtown.** Oriole Park, M&T Bank Stadium, CFG Bank Arena, the Hippodrome, the Convention Center and Horseshoe Casino. They share I-395, Russell Street and the Howard Street light rail. The documented Ravens–Orioles same-day event closes stadium lots between games ([MLB](https://www.mlb.com/orioles/ballpark/transportation/september-20-parking)).
2. **Inner Harbor east.** Pier Six Pavilion and the Harbor East streets and garages ([Bayside guide](https://baysidelimo.com/pier-six-pavilion-concerts/) notes garages fill on show nights; secondary source).
3. **I-83 / York Road north.** Timonium Fairgrounds (on light rail) and Towson's Unitas Stadium and SECU Arena (off I-695 per [Stadium Journey](https://www.stadiumjourney.com/stadiums/secu-arena-s1862)). The fair and Towson football can overlap on September weekends; the overlap was not verified.
4. **Columbia / US-29.** Merriweather. The eastbound Broken Land Parkway ramp to southbound US-29 has been closed since 7 Jul 2026 ([Merriweather](https://merriweathermusic.com/parking/)).
5. **Annapolis / US-50 and Rowe Boulevard.** Navy football, the Military Bowl and its parade route ([Military Bowl](https://militarybowl.org/?p=5393)).
6. **Shared audiences.** Orioles and Ravens audiences overlap statewide and into PA and DE. Merriweather draws regionally, with 90% of attendees from outside Howard County.

---

## 6. Confirmed and proposed changes through 2028

| Change | Status | Date | Suggested re-check |
|---|---|---|---|
| M&T Bank Stadium renovation | Complete ([Ravens](https://www.baltimoreravens.com/news/ravens-renovation-project-mt-bank-stadium-complete-north-plaza-gate-a)) | 2026 preseason | Capacity: Jan 2027 |
| Orioles 30-year Camden Yards lease | Signed Dec 2023 ([MLB.com](https://www.mlb.com/news/featured/camden-yards-guide-capacity-seating-chart-parking-and-more)) | — | — |
| Preakness returns to rebuilt Pimlico | Scheduled ([Baltimore Sun](https://www.baltimoresun.com/2026/05/16/preakness-2026-what-you-need-know/)). One report says the grandstand won't be used until the following spring ([Spokesman-Review](https://www.spokesman.com/stories/2026/may/15/preakness-2026-at-laurel-park-will-be-tremendously/)); this is unresolved. | May 2027 | Feb 2027 |
| Laurel Park ends live racing; becomes a training center | Planned, state-purchased ([Fox Baltimore](https://foxbaltimore.com/news/local/preakness-stakes-maryland-horse-racing-laurel-park-race-track-triple-crown-baltimore-anne-arundel-national-harbor-dinners-thoroughbred-industry-curry-national-harbor-events)) | After Pimlico reopens | 2027 |
| Light Rail Modernization (new vehicles, signals, stations) | Funded ([MTA](https://www.mta.maryland.gov/modern-lr)) | Vehicles 2027–2029; stations 2027–2030 | Mid-2027 |
| Metro SubwayLink new railcars (78) | Funded and in delivery ([MTA](https://www.mta.maryland.gov/articles/524)) | Full fleet 2027 | 2027 |
| Red Line | **Proposal**: planning phase, with light rail vs BRT still being weighed ([BMC, May 2026](https://baltometro.org/wp-content/uploads/BRTC260501pres_Red-Line-Briefing-R1.pdf)). The draft six-year plan funds $96M, which keeps it in planning ([Mass Transit](https://www.masstransitmag.com/management/news/55409127/md-mdot-plan-includes-96m-for-red-line-no-dedicated-bmore-bus-funding)). | No construction through 2028 | Jan 2027 (final CTP) |
| Key Bridge (I-695) rebuild | Funded, delayed; a contractor was dropped from Phase 2 ([Fox Baltimore](https://foxbaltimore.com/spotlight-on-maryland/key-bridge-turmoil-contractor-out-timeline-and-costs-unclear)) | Late 2030 ([WMAR](https://www.wmar2news.com/keybridgecollapse/schedule-for-key-bridge-rebuild-already-pushed-back-with-construction-costing-billions-more-per-the-mdta)) | 2027 |
| Pier Six Pavilion new operators | In effect ([The Banner](https://www.thebanner.com/culture/music/pier-six-pavilion-finn-group-OZMSFDBXQBHI7LLL73PDX6AJAI/)) | 2026 season | Spring 2027 |
| New UMBC arena tenant (Baltimore Starlings) | Listed only ([Wikipedia](https://en.wikipedia.org/wiki/Chesapeake_Employers_Insurance_Arena)); unverified | 2027 | Early 2027 |

---

## 7. Boundary recommendation

- **Core:** Baltimore City plus Baltimore, Anne Arundel, Howard, Harford and Carroll counties. This is the OMB Baltimore–Columbia–Towson MSA, which also includes Queen Anne's County and had about 2.86 million people in 2025 ([FRED/Census](https://fred.stlouisfed.org/series/BTMPOP)). Columbia, Towson and Annapolis are listed principal municipalities of the MSA ([Wikipedia](https://en.wikipedia.org/wiki/Baltimore_metropolitan_area)).
- **Columbia (Merriweather) and Annapolis (Navy): include in Baltimore** as named edge municipalities. Both sit in MSA counties; mark them in the DC queue as "owned by Baltimore" so they are not duplicated.
- **Laurel Park: edge, Baltimore-owned.** The 2026 Preakness was held there, but live racing is planned to end, so it is low priority.
- **Queen Anne's County:** in the MSA, but no 1,000+ venue was found; leave it out of venue search.

**Inconsistencies between briefs.**
1. The brief asks to "assess Columbia/Annapolis separately" while also saying not to duplicate the DC queue. OMB places both in Baltimore, so ownership must be set explicitly.
2. The starting county list omits Queen Anne's, which is in the MSA.
3. The companion venue answer referenced for the hand-off was not supplied.
4. `sprawl` and `hub` share the 0.85 default, so the type choice only changes spill behavior.

---

## 8. Gaps, limitations, conflicts and inaccessible sources

**Gaps**
- No measured person-mode split was found for any venue. Searches covered Camden Yards and Ravens surveys, MSA studies and MTA event ridership.
- Ravens light rail counts are old (2007) or ambiguous ("riders" in 2023). No baseline subtraction was published.
- Typical attendance is missing for Ravens, Navy and Merriweather.
- Not found: State Fair attendance; Pimlico 2027 capacity and transport plan; post-renovation M&T capacity; postgame last-train times; current Ravens team-bus program.

**Conflicts preserved**
- M&T Bank Stadium: 70,745 vs 71,008.
- Oriole Park: 44,970 vs 45,971.
- CFG Bank Arena: 14,000 vs 15,000.
- SECU Arena: 5,200 vs 4,800.
- UMBC arena: 5,500 vs 6,000.
- Hippodrome: 2,200 vs 2,286 vs 2,300.
- Light rail game-day headway: 15–30 min (MTA) vs 8–15 min (secondary guide).

**Model limitations**
- A single car share hides the wait between arrival and departure: Ravens lots open 4.5 hours early, while departures are compressed after the game.
- Charter buses are counted as non-car, though they still add vehicles to approach roads.

**Access notes**
- The Baltimore Sun and The Banner are metered; The Banner article fetched normally.
- The Statista attendance series is paywalled and was not used.

---

## 9. Answers to "Gaps from the first 26 city builds"

1. **Name and code.**
   - Display name: **Baltimore**. Short form: **Baltimore** (already short; "Charm City" is a nickname, as in [the Mayor's statement](https://foxbaltimore.com/newsletter-daily/2026-dates-baltimore-festivals-events-mayor-brandon-scott), not a display name).
   - Code: **BAL**, the abbreviation ESPN uses for Baltimore's teams ([ESPN](https://africa.espn.com/mlb/recap/_/gameId/401766969)).
   - Unlike Tampa Bay, local teams use the city name, so no regional rename is needed.
   - Coverage: Baltimore City, Baltimore County (Towson, Timonium), Anne Arundel (**Annapolis in**, Laurel Park edge), Howard (**Columbia in**), Harford and Carroll.
2. **City type.** **`hub`.** The only measured fan-mode data are MTA and team counts for the Ravens (NFL, M&T Bank Stadium): light rail ~5,000, Metro ~500, MTA shuttles ~2,550 and charter buses ~1,500 in the 2007 season ([Daily Record](https://thedailyrecord.com/2008/09/02/ravens-buses-are-back-at-a-higher-price/)), plus light rail "up to 10,000" in 2023 ([The Banner](https://www.thebanner.com/sports/ravens-nfl/baltimore-ravens-traffic-weather-XYCCEYIXQJEYTKFQXSKVFSRNWA/)). No other venue has a measured split.
3. **Car share per venue.** All values are **estimated**:
   - Ravens 0.82
   - Orioles 0.82
   - Navy 0.90
   - Merriweather 0.95
   - All others stay on the city default.
4. **Hand-off.** Keys are provisional because the companion answer was unavailable. Match each key to the companion venue row by verified name and address before wiring.

| Key | Car share | Status | Wire? |
|---|---|---|---|
| `bal-mt-bank-stadium` | 0.82 | estimated | yes, flag estimated |
| `bal-oriole-park` | 0.82 | estimated (analogy) | yes, flag estimated |
| `bal-navy-marine-corps-stadium` | 0.90 | estimated | yes, flag estimated |
| `bal-merriweather` | 0.95 | estimated | yes, flag estimated |
| all other `bal-*` rows | — | unknown | no; city default |

Measured values: **none**. Projected values: **none found**.

### Build notes (for whoever turns this into app data)

- Every venue and team ID must be unique across all cities. The app's existing ID list was not available to check, so prefix everything with `bal-` (for example `bal-orioles`, `bal-ravens`, `bal-navy`, `bal-towson`, `bal-umbc`, `bal-blast`).
- Do not create a per-city opponents file. Opponent draws go into `expectedDrawIndex` as for every other city.
- Never guess a capacity. Leave blank and add to the city gaps list: Pier Six (range only), Hippodrome (conflict), Pimlico 2027 (unknown), and CFG Bank Arena by configuration (conflict). Resolve the M&T Bank Stadium and Oriole Park conflicts before wiring their capacities.
- Car shares: there are no measured values to wire. Wire the four sourced estimates marked estimated, and leave the rest on the city default.
