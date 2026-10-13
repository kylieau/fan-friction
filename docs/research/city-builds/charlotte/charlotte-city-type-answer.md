# Charlotte — City Type and Event Car-Share Answer

**Research date:** Tuesday, October 13, 2026
**Scope:** Charlotte and its NC/SC event metro, for Fan/Friction's Gridlock read (event-crowd pressure, not navigation or trip planning).
**Bottom line:** No measured, venue-level fan mode split was found for any Charlotte venue. Recommend the existing **`hub`** type with low-to-moderate confidence. Three venue rows get **estimated** car shares; everything else stays on the city default (0.85).

---

## 1. Method and evidence standard

Searches covered: CATS event/game-day ridership and service notices; venue parking and operations pages (Bank of America Stadium, Charlotte Motor Speedway, UNC Charlotte); team/organizer statements; city/county transit plans; Census/OSBM population; ACS commuting (background only); and local press (Axios Charlotte, WFAE, WSOC, WCNC, WBTV, CBJ syndication).

Evidence ranking used: observed event travel > official operating data (parking supply, service levels) > organizer projections > commuting background. Raw boardings and parking counts were **not** converted into mode shares except in the one ridership inference shown in §4, where every step is disclosed.

Definitions used throughout:

- **Car-involved share** = people (not vehicles) arriving by private car, carpool, rideshare/taxi, or by car to a park-and-ride lot followed by rail, bus or shuttle. This follows the brief's rule that a car trip to remote parking plus a shuttle is car-involved.
- **Non-car transit** = rail/bus trips where the rider did not drive to the boarding point. No Charlotte source separates these from park-and-ride rail riders, so this split is always estimated.
- **Attendee-visits** = sum of daily attendance; a multi-day festival total is never treated as one simultaneous crowd.

Important park-and-ride caveat: the LYNX Blue Line has [11 park-and-ride stations along its 18.6-mile route](https://pats.charlotte.edu/transportation/light-rail/), and the CATS Game Day Express buses originate exclusively at [park-and-ride lots in south Charlotte, Matthews and the north Mecklenburg towns](https://www.wsoctv.com/news/local/panthers-cats-team-up-gameday-public-transit-option/5X2EFCWIUVEDFOFDRUXDQ7KTEQ/). A meaningful but unmeasured fraction of Charlotte event transit riders therefore drove first. Under the brief's definition these are car-involved trips; they do not, however, add vehicles to the venue's immediate approaches. **Gap:** no source gives the park-and-ride share of event rail riders.

---

## 2. Background only — ordinary commuting (not event travel)

| Measure | Value | Source | Use |
|---|---|---|---|
| City of Charlotte workers, 2023 ACS | 505,000 workers; 286,000 drove alone; 9,272 public transit (≈1.8%, computed) | [WFAE, Oct 2024](https://www.wfae.org/business/2024-10-15/charlotte-is-almost-the-work-from-home-queen-of-the-united-states) | Background only |
| City of Charlotte work-from-home, 2023 | 29.7% | [WFAE, Oct 2024](https://www.wfae.org/business/2024-10-15/charlotte-is-almost-the-work-from-home-queen-of-the-united-states) | Background only |
| Mecklenburg transit commute share, 2019 | 2.9% | [WFAE, Nov 2023](https://www.wfae.org/business/2023-11-02/how-charlottes-commutes-are-changing-shorter-later-and-fewer) | Background only |
| Uptown workers (CCCP, c. 2021) | ~57% drive, 29% walk, ~10% telecommute, 2.9% transit | [WFAE, Jun 2021](https://www.wfae.org/business/2021-06-26/back-to-work-conundrum-where-to-park) | Background only |
| CATS system, 2025 | ~15.68M boardings; ~64% of pre-pandemic; ~50,700 weekday riders by mid-2026 | [Hoodline citing Carolina Public Press, Oct 2026](https://hoodline.com/2026/10/cats-app-crashes-citywide-one-day-after-charlotte-s-new-fall-transit-overhaul/) | Context for transit capacity |
| Blue Line, March 2026 vs March 2025 | −9.4% (Gold Line −23%) despite equal Hornets/Charlotte FC home-game counts | [Queen City News via AOL, 2026](https://www.aol.com/news/cats-reports-decline-light-rail-031558584.html) | Context: event days do not dominate monthly totals |

These figures describe work trips, not event trips, and are not used to set any car share.

---

## 3. Venue and event travel table

Companion venue answer: **not available to this research.** Venues below were enumerated independently; proposed row keys are in §8 for the builder to match. Capacities shown are sourced; where sources conflict, the conflict is shown and the app capacity field should stay blank per the build rules.

### 3a. Fixed venues

| Proposed row key | Verified current name | Municipality / county | Setup / event represented | Capacity (source) | Car-involved | Non-car transit | Event shuttle | Walk/bike/other | Unclassified | Sums to 100%? | Recommended car share (range, confidence) | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `clt-bofa-stadium` | Bank of America Stadium | Charlotte / Mecklenburg | NFL Sunday (Panthers), 2025–26 season | Conflicting: [75,037](https://meetstadium.com/stadiums/bank-of-america-stadium/), [~74,000](https://www.webull.ca/zh-hant/news-detail/14161732318692352), [75,525](https://thevendry.com/venues/search/usa/nc/charlotte?p=240); record crowd [74,532](https://en.wikipedia.org/wiki/Bank_of_America_Stadium) | 80% (est.) | 14% (est.) | Included in car-involved (Game Day Express is park-and-ride only) | 6% (est.) | 0% | Yes (estimate) | **0.80** (0.70–0.90, low) | **Estimated** |
| `clt-bofa-stadium` (MLS config) | Bank of America Stadium | Charlotte / Mecklenburg | Charlotte FC MLS match | Reduced to [~38,000 for most matches](https://en.wikipedia.org/wiki/Charlotte_FC) | — | — | — | — | — | No data | Use same 0.80 estimate only if the builder keys by venue; no MLS-specific evidence | Estimated (inherits) |
| `clt-spectrum-center` | Spectrum Center | Charlotte / Mecklenburg | Hornets NBA / arena concerts, post-Oct 2025 renovation | [19,444 total](https://www.axios.com/local/charlotte/2025/10/17/charlotte-spectrum-center-reopens-renovation-hornets-concert-tickets) (older figure [19,077 basketball](https://www.Wikipedia.com/wiki/Spectrum_Center) predates renovation) | Unknown | Unknown | None found | Unknown | 100% | No | Default 0.85 | **Unknown → default** |
| `clt-truist-field` | Truist Field | Charlotte / Mecklenburg | Charlotte Knights (AAA) | Conflicting: [10,200 stated](https://www.baseball-reference.com/bullpen/Truist_Field) vs [10,000 (CRVA)](https://www.charlottemeetings.com/event-venues/truist-field) | Unknown | Unknown | None found | Unknown | 100% | No | Default 0.85 | Unknown → default |
| `clt-memorial-stadium` | American Legion Memorial Stadium | Charlotte / Mecklenburg | Carolina Ascent (USL Super League), rugby, high school | [10,500](https://en.wikipedia.org/wiki/American_Legion_Memorial_Stadium) | Unknown | Unknown | None found | Unknown | 100% | No | Default 0.85 | Unknown → default |
| `clt-bojangles-coliseum` | Bojangles Coliseum | Charlotte / Mecklenburg | Charlotte Checkers (AHL); 180° concert config separately | [8,600 fixed seating; 10,829 max; 7,000 in 180° config](https://boplex.com/booking/promoter-guide) | Unknown | Unknown | None found | Unknown | 100% | No | Default 0.85 | Unknown → default |
| `clt-ovens-auditorium` | Ovens Auditorium | Charlotte / Mecklenburg | Touring theater/concerts | [2,447](https://boplex.com/booking/promoter-guide) | Unknown | Unknown | None found | Unknown | 100% | No | Default 0.85 | Unknown → default |
| `clt-skyla-amphitheatre` | Skyla Credit Union Amphitheatre | Charlotte / Mecklenburg | Outdoor concerts (AvidXchange Music Factory) | Conflicting: [~5,000](https://www.axs.com/category/cities/4460243/charlotte-nc?page=8) vs [3,000](https://blog.ticketmaster.com/?p=40496) | Unknown | Unknown | None found | Unknown | 100% | No | Default 0.85 | Unknown → default; capacity blank |
| `clt-pnc-music-pavilion` | PNC Music Pavilion | Charlotte (University City) / Mecklenburg | Summer amphitheater concert | [18,000 total; 8,658 seated; parking for 6,800 cars](https://charlottemeetings.com/event-venues/pnc-music-pavilion) | 95% (est.) | 0–2% (est.) | None found | 0–2% (est.) | 3% | Yes (estimate) | **0.95** (0.90–0.99, low-moderate) | **Estimated** |
| `clt-jerry-richardson-stadium` | Jerry Richardson Stadium | Charlotte (UNC Charlotte campus) / Mecklenburg | Charlotte 49ers football, 2025–26 (construction) | [15,314 listed; record 19,233 on Sep 6, 2025](https://en.wikipedia.org/wiki/Jerry_Richardson_Stadium); temporary [~17,700](https://inside.charlotte.edu/2025/08/29/expansion-begins-on-jerry-richardson-stadium/) | Unknown | Unknown | Niner Transit shuttle from UNC Charlotte Main station ([PATS](https://pats.charlotte.edu/?p=613)) | Unknown (large on-campus student walk share likely but unquantified) | 100% | No | Default 0.85 | Unknown → default |
| `clt-halton-arena` | Dale F. Halton Arena | Charlotte (UNC Charlotte) / Mecklenburg | 49ers basketball | [9,105; typical 4,000–5,000](https://stadiumjourney.com/stadiums/dale-f-halton-arena-s673) (secondary source) | Unknown | Unknown | None found | Unknown | 100% | No | Default 0.85 | Unknown → default |
| `clt-motor-speedway` | Charlotte Motor Speedway (1.5-mi oval; Roval layout on same grounds) | Concord / Cabarrus | Coca-Cola 600, Memorial Day weekend | [95,000 facility (official)](https://charlottemotorspeedway.com/fans/track-facts); [79,000 seats](https://www.wsoctv.com/news/local/speedway-motorsports-execs-revved-up-over-ticket-sales-coca-cola-600/R2QGJL53PRAJFEU2PDYZPQHPD4/) | 97% (est.) | 0% found | On-site lot shuttles only (car-involved) | ~0% | 3% | Yes (estimate) | **0.97** (0.93–0.99, moderate) | **Estimated** |
| `clt-dirt-track` | The Dirt Track at Charlotte | Concord / Cabarrus | World of Outlaws / dirt events | Range-only blog figure ["just over 14,000"](https://speedwayreport.com/?p=274) — leave blank | Same access as speedway | 0% found | None found | — | — | — | Default 0.85 unless builder accepts complex-level estimate (see §5) | Unknown → default; capacity gap |
| `clt-zmax-dragway` | zMAX Dragway | Concord / Cabarrus | NHRA Four-Wide Nationals | Blog figure ["around 30,000"](https://speedwayreport.com/?p=274) — leave blank | Same access as speedway | 0% found | None found | — | — | — | Default 0.85 (same note) | Unknown → default; capacity gap |
| `clt-atrium-health-ballpark` | Atrium Health Ballpark | Kannapolis / county not verified in sources | Kannapolis Cannon Ballers (Single-A) | [4,930 (3,218 seated)](https://en.wikipedia.org/wiki/Atrium_Health_Ballpark); 2025 average [2,935](https://www.statscrew.com/venues/v-3139) | Unknown | Unknown | None found | Unknown | 100% | No | Default 0.85 | Unknown → default |

### 3b. Event-specific rows (not fixed-capacity records)

| Proposed row key | Event | Site / municipality | Date represented | Attendance (people, not tickets) | Car-involved | Non-car transit | Walk/other | Sums to 100%? | Recommended car share | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| `clt-evt-lovin-life` | Lovin' Life Music Fest | First Ward Park, Uptown Charlotte | May 3–5, 2024 (3 days) | Conflicting: [more than 86,000](https://www.axios.com/local/charlotte/2025/04/28/uptown-weekend-lovin-life-music-festival-kendrick-lamar-sza) vs [80,000+](https://clttoday.6amcity.com/city-guide/play/ultimate-guide-lovin-life-music-fest-2025-charlotte-nc) attendee-visits; ≈28,700/day average (computed from 86,000) | 75% (est.) | 18% (est.) | 7% (est.) | Yes (estimate) | **0.75** (0.60–0.85, low) | **Estimated** (inferred from ridership; §4) |
| `clt-evt-coke-600-weekend` | Coca-Cola 600 race day | Charlotte Motor Speedway, Concord | Memorial Day Sunday (2023 sellout context) | Grandstands sold out (79,000 seats); up to 95,000 with infield/SRO ([WSOC/CBJ](https://www.wsoctv.com/news/local/speedway-motorsports-execs-revved-up-over-ticket-sales-coca-cola-600/R2QGJL53PRAJFEU2PDYZPQHPD4/)) | 97% (est.) | 0% found | ~0% | Yes (estimate) | 0.97 (inherits venue) | Estimated |
| `clt-evt-uptown-multi` | Multi-event Uptown days (finding, not a row to wire) | Uptown | Oct 26, 2024 | [266,000 Uptown visits](https://www.axios.com/local/charlotte/2025/04/28/uptown-weekend-lovin-life-music-festival-kendrick-lamar-sza) (device-based visits, not attendees) on Concert for Carolina + Hornets opener day | — | — | — | — | Do not wire | Evidence of crowd overlap only |

### 3c. Operations, parking and access notes per venue

| Row | Parking supply / remote arrangements | Event operations, closures, start/end service | Shared approaches and other crowds |
|---|---|---|---|
| Bank of America Stadium | More than 30,000 spaces within a 15-minute walk ([WCNC, 2023](https://wcnc.com/article/entertainment/beyonce-renaissance-concert-charlotte-parking/275-f95a1e7e-8e36-4298-8a36-7971f3b409f2)); Lot 1 and Lot 99 are stadium-operated decks ([prked guide](https://prked.com/post/panthers-vs-seahawks-bank-of-america-stadium-parking-2027), secondary) | CATS Game Day Express (routes 61x, 64x, 177) for every Panthers Sunday home game: three inbound trips starting 2.5 hours before kickoff, three outbound trips starting 30 minutes after the game, $3 each way, park-and-ride parking included ([CATS, Oct 2026](https://www.charlottenc.gov/CATS/News/104-Game-Day-Express-Details-Ride-CATS-to-the-Panthers%E2%80%99-Home-Game)). Gold Line runs to 1 a.m. after Sunday night games ([CATS](https://www.charlottenc.gov/CATS/News/Sunday-Night-Football-Ride-CATS-to-the-Panthers%E2%80%99-Home-Game)). Drop-off is about a half mile from the stadium ([WSOC via Yahoo](https://sports.yahoo.com/articles/panthers-cats-team-gameday-public-202724226.html)). For the 2023 Beyoncé concert CATS added 2–3 Blue Line trains and road closures began at 9 a.m. ([WSOC](https://wsoctv.com/news/local/fans-excited-economic-impact-beyonc-queen-city/3R6IM3FEHZGVTNRHFHXTK7XUGY)) | Two blocks from Truist Field ([Baseball-Reference](https://www.baseball-reference.com/bullpen/Truist_Field)); shares Mint St / Graham St closures, Blue Line stations and Uptown decks with Spectrum Center, Truist Field, convention center |
| Spectrum Center | Shares Uptown supply (see conflict in §6) | Blue and Gold line stops adjacent ([QCN via AOL](https://www.aol.com/news/cats-reports-decline-light-rail-031558584.html)); no published event-specific service found | Uptown cluster; First Ward festival site nearby |
| PNC Music Pavilion | 6,800 car spaces on site ([CRVA](https://charlottemeetings.com/event-venues/pnc-music-pavilion)) | No CATS event service found (gap) | University City; shares broad I-85 corridor with UNC Charlotte venues (relationship not quantified) |
| Charlotte Motor Speedway complex | Numerous lots with shuttles to entrances; complimentary ADA shuttle from Entrance T ([WCNC](https://www.wcnc.com/article/sports/motor/nascar/coca-cola-600-charlotte-motor-speedway-2024-tickets-parking-race-information-kyle-larson-ryan-blaney-william-byron/275-1f42c570-042f-413a-a854-5ab2c2c7381f); [CMS FAQ](https://www.charlottemotorspeedway.com/events/bank-of-america-400/faq)) | After races, Highway Patrol turns all lanes of U.S. 29 and outbound Bruton Smith Blvd toward I-85 away from the track ([WCNC](https://www.wcnc.com/article/sports/motor/nascar/coca-cola-600-charlotte-motor-speedway-2024-tickets-parking-race-information-kyle-larson-ryan-blaney-william-byron/275-1f42c570-042f-413a-a854-5ab2c2c7381f)); no public transit found | Oval, Dirt Track and zMAX share Bruton Smith Blvd / U.S. 29; a blog reports NHRA-day queues on Bruton Smith ([Speedway Report](https://speedwayreport.com/?p=274), low reliability) |
| Jerry Richardson Stadium | Game-day permit decks; gates open 3 h (weekday) / 8 h (weekend) before kickoff ([PATS](https://pats.charlotte.edu/?p=613)) | Niner Transit shuttle from UNC Charlotte Main station; Mac Everett Way South bus route suspended and Gate 2 closed during construction ([UNC Charlotte](https://inside.charlotte.edu/?p=70723)) | Halton Arena on same campus |
| American Legion Memorial Stadium | Not found | Short walk from CPCC Gold Line stop ([CATS](https://www.charlottenc.gov/CATS/News/Carolina-Ascent-kicks-off-their-season-with-CATS)) | Near Uptown/Elizabeth |
| Atrium Health Ballpark | Small $5 lot plus free street and municipal parking ([Stadium Journey](https://www.stadiumjourney.com/stadiums/atrium-health-ballpark-kannapolis-cannon-ballers)) | Not found | I-85 corridor shared with Concord motorsport traffic (not quantified) |
| Lovin' Life | Parking near First Ward Park limited by festival construction ([CLTtoday](https://clttoday.6amcity.com/city-guide/play/ultimate-guide-lovin-life-music-fest-2025-charlotte-nc)) | 2024: $9 three-day CATS pass ([Axios](https://www.axios.com/local/charlotte/2024/01/22/lovin-life-music-charlotte-nc-things-to-know-tickets-parking-schedule-lineup)). 2025: post-concert express buses to University City Blvd, JW Clay and I-485 park-and-rides ([Axios](https://www.axios.com/local/charlotte/2025/04/28/uptown-weekend-lovin-life-music-festival-kendrick-lamar-sza)) | 2024 Saturday overlapped a Charlotte FC home match ([Axios](https://www.axios.com/local/charlotte/2024/05/16/quote-du-jour-lovin-life-effect)); 2025 weekend overlapped Kendrick Lamar at BofA Stadium and Knights games ([Axios](https://www.axios.com/local/charlotte/2025/04/28/uptown-weekend-lovin-life-music-festival-kendrick-lamar-sza)) |

---

## 4. The one ridership inference (Lovin' Life 2024)

**Evidence:** CATS' interim CEO said Blue Line ridership rose about 50% during the Lovin' Life weekend, with about 70,000 more riders than a normal weekend, and noted a Charlotte FC game the same Saturday ([Axios, May 2024](https://www.axios.com/local/charlotte/2024/05/16/quote-du-jour-lovin-life-effect)).

| Step | Value | Basis |
|---|---|---|
| Baseline subtraction | +70,000 vs "a normal weekend" | CATS statement; baseline weekend and exact days not disclosed (**gap**) |
| Unit | Treated as boardings | CATS reports ridership as boardings ([Hoodline/CPP](https://hoodline.com/2026/10/cats-app-crashes-citywide-one-day-after-charlotte-s-new-fall-transit-overhaul/)) |
| Return trips | ÷2 → ≤35,000 event round trips | Assumes each event rider boards in and out |
| Denominator A (Fri–Sun) | 86,000 festival attendee-visits + ~34,335 Charlotte FC crowd ≈ 120,000 | [Axios](https://www.axios.com/local/charlotte/2025/04/28/uptown-weekend-lovin-life-music-festival-kendrick-lamar-sza); CLTFC 2024 season-to-date average used as proxy ([Axios](https://www.axios.com/local/charlotte/2024/08/22/charlotte-fc-raises-2025-season-ticket-prices)); actual match attendance is a **gap** |
| Denominator B (Sat–Sun only) | ≈57,300 + 34,335 ≈ 91,600 | Two-thirds of festival total (assumption) |
| Upper-bound rail share | ≤29% (A) to ≤38% (B) | Upper bound because the increment also contains non-event Uptown trips |
| Park-and-ride adjustment | Unknown share of those riders drove to a P&R lot | Counted as car-involved under the brief |

**Result:** rail carried at most roughly 30–40% of the combined crowd on Uptown's most transit-friendly weekend (no event parking, discounted transit pass, young festival audience). After subtracting park-and-ride drivers and non-event riders, the non-car transit share is plausibly 15–30%, giving a car-involved share near 0.75 (0.60–0.85). Confidence is low. If "riders" were unique people rather than boardings, the rail share could be roughly double; that reading is considered unlikely.

---

## 5. Estimate rationale for wired values

**Bank of America Stadium (NFL) — 0.80, estimated, low confidence.** The festival inference sets a ceiling: an NFL Sunday has far more drive-friendly conditions than Lovin' Life — more than 30,000 spaces within a 15-minute walk ([WCNC](https://wcnc.com/article/entertainment/beyonce-renaissance-concert-charlotte-parking/275-f95a1e7e-8e36-4298-8a36-7971f3b409f2)), stadium decks, and a regional two-state fan base. The only dedicated event service (Game Day Express) is park-and-ride and therefore car-involved. Illustrative check (assumption, not evidence): 30,000 walk-zone spaces at an assumed 2–3 people per car could hold 60,000–90,000 people, so walk-zone parking alone could absorb most of a sellout. The estimate is close to the 0.85 default; the evidence does not justify moving further.

**PNC Music Pavilion — 0.95, estimated.** 18,000 capacity against 6,800 on-site car spaces ([CRVA](https://charlottemeetings.com/event-venues/pnc-music-pavilion)) implies about 2.6 people per parked car at a sellout if everyone parked on site — consistent with near-universal car arrival (including rideshare drop-off). No transit service was found. Remaining uncertainty is rideshare share and any unlisted shuttles.

**Charlotte Motor Speedway — 0.97, estimated, moderate confidence.** Official operations describe only lot parking with on-site shuttles, ADA shuttles, and a post-race highway traffic plan ([WCNC](https://www.wcnc.com/article/sports/motor/nascar/coca-cola-600-charlotte-motor-speedway-2024-tickets-parking-race-information-kyle-larson-ryan-blaney-william-byron/275-1f42c570-042f-413a-a854-5ab2c2c7381f); [CMS FAQ](https://www.charlottemotorspeedway.com/events/bank-of-america-400/faq)). Campers arrive by car/RV. The residual 3% covers unverified charter/tour buses. The same access logic applies to the Dirt Track and zMAX Dragway, but they have no verified capacity, so the builder should leave them on default unless the companion answer treats the complex as one row.

---

## 6. Regional conclusion

### Recommendation: existing type `hub`

Rationale:

1. **Not `transit`.** The most transit-friendly observed event (Lovin' Life 2024) reached at most ~30–40% rail, and some of that was park-and-ride (§4). Transit's commuting share is under 3% ([WFAE](https://www.wfae.org/business/2023-11-02/how-charlottes-commutes-are-changing-shorter-later-and-fewer)), CATS is at ~64% of pre-pandemic boardings ([Hoodline/CPP](https://hoodline.com/2026/10/cats-app-crashes-citywide-one-day-after-charlotte-s-new-fall-transit-overhaul/)), and no Charlotte venue has evidence near the 0.4 transit default.
2. **`hub` over `sprawl`.** Both carry the same 0.85 fallback, so the choice turns on spill between nearby crowds. Charlotte's largest regular crowds (BofA Stadium, Spectrum Center, Truist Field, First Ward festival site) sit within a few Uptown blocks, share the same Blue/Gold Line stations, decks and street closures, and repeatedly coincide: 266,000 Uptown visits on Oct 26, 2024 for a stadium concert plus the Hornets opener ([Axios](https://www.axios.com/local/charlotte/2025/04/28/uptown-weekend-lovin-life-music-festival-kendrick-lamar-sza)), and festival weekends overlapping Charlotte FC, Kendrick Lamar and Knights games (same source). That clustered, shared-approach pattern is the "in between" case.

**Strongest contrary evidence (for `sprawl`):** the region's single largest venue (Charlotte Motor Speedway, 95,000) and its biggest amphitheater (PNC, 18,000) are fully car-dependent; Uptown has tens of thousands of event-usable parking spaces; and every Uptown venue still lands at or near 0.80–0.85 car-involved. If the app's `hub` spill logic assumes substantial transit-mediated dispersal, `sprawl` would be the safer choice. Confidence in `hub`: low-to-moderate.

### Weighted car shares (one configuration per venue; no multi-day totals)

| Weighting | Venues and weights | Result | Notes |
|---|---|---|---|
| Capacity-weighted, all rows with a usable capacity | BofA 75,037 (×0.80); CMS 95,000 (×0.97); Spectrum 19,444; PNC 18,000 (×0.95); Jerry Richardson 15,314; Memorial 10,500; Truist 10,200; Halton 9,105; Bojangles 8,600; Atrium Health Ballpark 4,930; Ovens 2,447 (unlisted multipliers = 0.85 default) | **0.885** | 70% of capacity weight is estimated, 30% default, 0% measured. BofA weight uses one of three conflicting figures. Excludes Skyla, Dirt Track, zMAX (capacity unverified) |
| Capacity-weighted, excluding the speedway | Same list without CMS | **0.839** | Shows how one outlying venue lifts the regional figure |
| Capacity-weighted, Uptown cluster | BofA, Spectrum, Truist | **0.814** | Downtown pattern |
| Typical-attendance-weighted | Panthers 2023 average 71,635 ([CLTtoday](https://clttoday.6amcity.com/city-guide/play/guide-charlotte-nc-sports)) ×0.80; Coke 600 ~79,000 (sold-out seats, lower bound) ×0.97; Cannon Ballers 2,935 ×0.85; Halton 4,500 (midpoint of a 4,000–5,000 range, assumption) ×0.85 | **0.887** | Missing typical attendance for Hornets, Knights, Checkers, PNC, UNC football, Memorial Stadium (**gaps**). Charlotte FC excluded to avoid double-counting the same venue |

**Do outlying venues obscure the downtown pattern?** Yes, modestly. The speedway alone moves the capacity-weighted figure from ~0.84 to ~0.885. The Uptown cluster sits near 0.81. None of these differences is large relative to estimate uncertainty, and none supports a non-default type.

### Separate findings (not new rules)

- **Clusters:** (1) Uptown — BofA Stadium, Spectrum Center, Truist Field, First Ward Park, convention center; Memorial Stadium and Bojangles/Ovens nearby to the east. (2) University City — UNC Charlotte venues and PNC Music Pavilion. (3) Concord motorsport complex — oval, Dirt Track, zMAX.
- **Shared roads/approaches:** Mint/Graham St closures around BofA Stadium; Bruton Smith Blvd and U.S. 29 for the speedway complex; Blue Line stations shared by all Uptown venues and UNC Charlotte.
- **Shared audiences:** Panthers and Charlotte FC share owner and stadium; Checkers share the Bojangles complex with Ovens; festivals overlap Uptown team schedules (see above).

---

## 7. Boundary recommendation

| County | 2024 pop. (OSBM / other) | Assessment |
|---|---|---|
| Mecklenburg, NC | [1,233,383](https://en.wikipedia.org/wiki/North_Carolina_statistical_areas) (table labelled 2025 est.; vintage unclear) | Core; all Uptown and University City venues |
| Cabarrus, NC | [246,683](https://www.osbm.nc.gov/facts-figures/population-demographics/state-demographer/county-population-estimates/certified-county-population-estimates) | **Include.** Concord hosts the speedway complex, the region's largest crowd |
| Gaston, NC | [244,800](https://www.osbm.nc.gov/facts-figures/population-demographics/state-demographer/county-population-estimates/certified-county-population-estimates) | Include. No 1,000+ venue verified (CaroMont Health Park not verified — gap) |
| Union, NC | [266,672](https://www.osbm.nc.gov/facts-figures/population-demographics/state-demographer/county-population-estimates/certified-county-population-estimates) | Include as audience source; no venue verified |
| Iredell, NC | [211,798](https://en.wikipedia.org/wiki/North_Carolina_statistical_areas) | Include; future Red Line target ([Charlotte Post](https://www.thecharlottepost.com/news/2025/11/05/local-state/mecklenburg-voters-put-1-transit-sales-tax-on-track/)) |
| Lincoln, NC | [96,207](https://www.osbm.nc.gov/facts-figures/population-demographics/state-demographer/county-population-estimates/certified-county-population-estimates) | Include as audience source; MSA membership not shown in retrieved excerpts (verify) |
| York, SC | [306,887](https://en.wikipedia.org/wiki/North_Carolina_statistical_areas) | Include; Rock Hill an **edge municipality** (no venue verified) |
| Rowan, Lancaster (SC), Chester (SC), Anson | [155,096 / 114,296 / 33,001 / 21,758](https://en.wikipedia.org/wiki/North_Carolina_statistical_areas) | In the metro definition but not in the brief's list; treat as edge counties |

The Charlotte-Concord-Gastonia MSA had [2,938,830 residents in 2025](https://fred.stlouisfed.org/series/CGRPOP). Recommend the MSA as the boundary, with Concord included and Rock Hill/Kannapolis flagged as edge municipalities. Raleigh–Durham, the Triad and Asheville stay separate markets. **Unlike the brief's framing, Charlotte Motor Speedway is not a distant motorsport destination** — it is inside Cabarrus County and must stay in-metro.

---

## 8. Hand-off and build notes

### Name and code

| Field | Value | Basis |
|---|---|---|
| Display name | **Charlotte** | Local teams split between "Charlotte" (Hornets, Charlotte FC, Knights, Checkers) and "Carolina" (Panthers, Ascent) per [CLTtoday](https://clttoday.6amcity.com/city-guide/play/guide-charlotte-nc-sports). "Carolina" is two-state team branding, not a metro name, so the Tampa Bay precedent does not apply |
| Short form | **CLT** | Used for the airport ([Cleartrip](https://www.cleartrip.sa/tourism/airports/charlotte-airport.html)) and by Charlotte FC as "CLTFC" ([Wikipedia](https://en.wikipedia.org/wiki/Bank_of_America_Stadium)) |
| Three-letter code | **CLT** | IATA code of Charlotte Douglas International ([Cleartrip](https://www.cleartrip.sa/tourism/airports/charlotte-airport.html)) |
| Coverage | Mecklenburg, Cabarrus (incl. Concord), Gaston, Union, Iredell, Lincoln, York SC (Rock Hill = edge) | §7 |

### Car shares keyed to proposed rows

| Row key | Value to wire | Class |
|---|---|---|
| `clt-bofa-stadium` | 0.80 | Estimated |
| `clt-pnc-music-pavilion` | 0.95 | Estimated |
| `clt-motor-speedway` | 0.97 | Estimated |
| `clt-evt-lovin-life` | 0.75 | Estimated (event row) |
| `clt-evt-coke-600-weekend` | 0.97 | Estimated (inherits venue) |
| All other rows in §3a | City default 0.85 | Unknown |
| Any row | — | **Measured: none.** **Projected: none** |

Because the companion venue answer was unavailable, a builder must confirm each key matches the companion's room identity (for example, whether the speedway row means the oval only or the whole complex) before wiring.

### Build rules (notes for whoever turns this into app data)

- Every venue ID and team ID must be unique across all cities. Use a `clt-` prefix everywhere. Specific collision risks: `panthers` (Florida Panthers exist — they are the Checkers' NHL parent, per [CLTtoday](https://clttoday.6amcity.com/city-guide/play/guide-charlotte-nc-sports)), `49ers` (UNC Charlotte vs San Francisco), `knights`, `fc`. Already-taken IDs reported by earlier builds: `giants`, `jets`, `rangers`, `kings`, `cardinals`.
- Do not create a per-city opponents file. Opponent draws go into `expectedDrawIndex` like every other city.
- Never guess a capacity. Leave blank and add to the city gaps list: Bank of America Stadium (three conflicting figures), Truist Field (10,200 vs 10,000), Skyla Credit Union Amphitheatre (5,000 vs 3,000), Dirt Track and zMAX Dragway (blog-only figures), Jerry Richardson Stadium after 2027 (18,100 vs 18,170).
- Car shares: wire measured ones (none); wire sourced estimates marked estimated (table above); leave the rest on the city default.

---

## 9. End-of-answer summary

### 1. Recommended city type
`hub`, low-to-moderate confidence. Strongest contrary evidence: the speedway and PNC are wholly car-dependent, Uptown parking is plentiful, and every Uptown estimate is still ~0.80 car-involved — `sprawl` is defensible if the app's hub spill assumes transit dispersal.

### 2. Car-share values
Measured: none. Projected: none. Estimated: BofA Stadium 0.80, PNC 0.95, Speedway 0.97, Lovin' Life 0.75, Coke 600 0.97. All others: default 0.85.

### 3. Boundary and brief inconsistencies
Use the Charlotte-Concord-Gastonia MSA, Concord in, Rock Hill and Kannapolis as edges. Inconsistencies: the brief lists Charlotte Motor Speedway as a lead yet also says distant motorsport is a separate market (CMS is in-metro); the brief's county list omits Rowan, Lancaster, Chester and Anson, which are in the metro definition; the companion venue answer referenced by the brief was not available.

### 4. Gaps, limitations, conflicts, inaccessible sources
- **No measured fan mode split anywhere in the metro.** No team, venue, CRVA or CATS survey of event arrival mode was found.
- No per-event CATS ridership releases beyond the Lovin' Life remark; CATS monthly reports to the MTC were not retrieved.
- Park-and-ride share of event riders unknown; this blurs every car-involved estimate.
- Coverage gaps (not verified or not searched): Charlotte Convention Center, The Fillmore, Belk Theater, Winthrop Coliseum (Rock Hill), CaroMont Health Park (Gastonia), Belk Arena (Davidson), Carowinds (daily visits, not a fixed room), Rock Hill Sports & Event Center, the 4,400-capacity BofA entertainment venue (future).
- Typical attendance missing for Hornets, Knights, Checkers, PNC, UNC football.
- **Source conflicts:** Lovin' Life 2024 attendance 86,000+ vs 80,000+; Charlotte FC 2025 average [28,975](https://en.wikipedia.org/wiki/2025_Charlotte_FC_season) vs [30,664](https://en.wikipedia.org/wiki/List_of_Charlotte_FC_seasons); transit referendum [52.13%](https://spectrumlocalnews.com/nc/charlotte/news/2025/11/05/transit-tax-mecklenburg-county) vs [54%](https://www.thecharlottepost.com/news/2025/11/05/local-state/mecklenburg-voters-put-1-transit-sales-tax-on-track/); speedway capacity 95,000 (official) vs [135,000](https://www.vividseats.com/charlotte-motor-speedway-tickets/venue/1932) (ticket reseller, disregarded) vs 93,000 (blog). Uptown parking [~55,000 managed spaces](https://www.wfae.org/business/2021-06-26/back-to-work-conundrum-where-to-park) / [50,000+](https://www.wccbcharlotte.com/?p=221566) vs [30,000+](https://uptowncharlotte.com/post/the-uptown-parking-playbook) — reconciled as definitional: the 30,000+ figure matches the count within a 15-minute walk of the stadium ([WCNC](https://wcnc.com/article/entertainment/beyonce-renaissance-concert-charlotte-parking/275-f95a1e7e-8e36-4298-8a36-7971f3b409f2)), while ~55,000 is total professionally managed Uptown supply.
- **Inaccessible:** Charlotte Observer and Charlotte Business Journal originals were not accessed directly (likely paywalled); syndicated versions were used. No access controls were bypassed.
- **Model limitation:** a single car share per venue cannot represent the difference between weekday arena nights and weekend stadium days, or between drive-to-P&R and drive-to-venue trips.

### 5. Confirmed changes through 2028

| Change | Date | Status | Re-check |
|---|---|---|---|
| Spectrum Center renovation complete; capacity 19,444 | Reopened Oct 19, 2025 ([Axios](https://www.axios.com/local/charlotte/2025/10/17/charlotte-spectrum-center-reopens-renovation-hornets-concert-tickets)) | Done | Before 2027 NCAA first/second rounds ([CLTtoday](https://clttoday.6amcity.com/real-estate/development/spectrum-center-welcomes-guests-renovations-charlotte-nc)) |
| CATS Game Day Express for Panthers Sundays | 2026 season ([WSOC](https://www.wsoctv.com/news/local/panthers-cats-team-up-gameday-public-transit-option/5X2EFCWIUVEDFOFDRUXDQ7KTEQ/)) | Operating | Aug 2027 (renewal for next season) |
| BofA Stadium renovation Phase 1 (500-level seats, West End) | 2027; Phase 2 2028–29; final 2029–30 ([Axios](https://www.axios.com/local/charlotte/2026/02/23/charlotte-bank-of-america-stadium-800-million-renovation-uptown-panthers-charlotte-fc-2045-deal)); stadium stays open ([StadiumDB](https://stadiumdb.com/news/2025/11/usa_bank_of_america_stadium_in_charlotte_will_undergo_a_650_million_renovation)); capacity not expected to change much ([StadiumDB](https://stadiumdb.com/designs/usa/bank_of_america_stadium)) | Scheduled and funded ($650M city bonds approved) | Spring 2027 |
| Expanded $1.3B scope incl. 4,400-capacity entertainment venue, completion by 2030 | Reported Jul 2026 ([Fantasy Nerds citing FOX Sports](https://www.fantasynerds.com/news/story/2026/07/23/panthers-bank-of-america-stadium-set-for-$13-billion-renovation-1578847)) | Announced; secondary source only | Q1 2027 — confirm with team/city |
| Jerry Richardson Stadium expansion to ~18,100 | 2027 season ([Axios](https://www.axios.com/local/charlotte/2025/08/27/jerry-richardson-stadium-groundbreaking-construction-football-49ers)); 18,170 per [UNC Charlotte](https://inside.charlotte.edu/?p=19983); construction done spring 2027 ([UNC Charlotte](https://inside.charlotte.edu/?p=70723)) | Funded, under construction | Aug 2027 |
| Mecklenburg 1-cent transportation sales tax | Approved Nov 4, 2025 ([WFAE](https://www.wfae.org/politics/2025-11-04/transit-and-transportation-sales-tax-leads-in-early-voting-mecklenburg-results-show)) | Funding source approved | Annually |
| Red Line commuter rail (Uptown–Lake Norman) | Expected in 8–10 years, contingent on FTA grants ([WFAE](https://www.wfae.org/politics/2025-11-04/transit-and-transportation-sales-tax-leads-in-early-voting-mecklenburg-results-show)) | **Not by 2028**; funded in part, federally contingent | 2027 |
| Silver Line (Airport–Bojangles Coliseum), Blue Line to Pineville, Gold Line extension | In adopted 2055 plan ([CATS](https://www.charlottenc.gov/CATS/Plans-Projects/2055-Transit-System-Plan)); Red Line must be 50% complete first ([Spectrum News](https://spectrumlocalnews.com/nc/charlotte/news/2025/11/05/transit-tax-mecklenburg-county)) | **Proposal-stage for this horizon; not before 2028** | 2028 |
| CATS fall 2026 service changes | Rolled out early Oct 2026 ([Hoodline](https://hoodline.com/2026/10/cats-app-crashes-citywide-one-day-after-charlotte-s-new-fall-transit-overhaul/)) | In effect; details not retrieved (gap) | Nov 2026 |

### 6. "Gaps from the first 26 city builds"

1. **Name and code — answered.** Charlotte / CLT / CLT. Coverage: Mecklenburg, Cabarrus (Concord **in**), Gaston, Union, Iredell, Lincoln, York SC (Rock Hill **in as edge**). Name does not change (unlike Tampa Bay) because no single regional name is used by every team.
2. **City type — answered with caveat.** `hub` (transit hub = no; mixed = yes; car-first = arguable). No measured fan mode split exists for any venue; the only event-specific transit evidence is the Lovin' Life 2024 ridership remark (May 2024, festival + MLS match, [Axios](https://www.axios.com/local/charlotte/2024/05/16/quote-du-jour-lovin-life-effect)).
3. **Car share per venue — answered.** Measured: none. Estimated (labelled): BofA Stadium 0.80, PNC 0.95, Speedway 0.97, Lovin' Life 0.75, Coke 600 0.97. All others: **gap** — searched CATS news, venue pages, team/organizer releases and local press; no venue-specific split found; city default applies.
4. **Hand-off — partially answered.** Values are keyed to the proposed `clt-` row keys in §8. **Gap:** the companion venue answer was not available, so keys must be matched to its rows before wiring.
