# Calgary — city type and event car-share answer (Fan/Friction Gridlock)

**Research date:** 13 October 2026. All sources are public web pages retrieved on this date. Every number links to its source. Where no source was found, the cell says **gap** and the gaps section says what was searched.

**Scope reminder.** Gridlock estimates pressure from overlapping event crowds. It is not navigation or live traffic. This answer looks for evidence of how people actually reach Calgary events. Ordinary commuting data appears only as labelled background.

---

## 0. Bottom line

- **Recommended city type: `hub` (in between).** It is the best fit, but on thin evidence.
- **No measured event mode split was found for any Calgary venue or event.** Searches covered Stampede guest surveys, Flames/Stampeders transport information, City and CMLC planning documents, and Calgary Transit releases.
- **The single best quantitative evidence is Calgary Transit's Stampede Parade Day count for 2026.** It shows [229,000 CTrain boardings on Parade Day against an average of 128,000 on June Fridays](https://globalnews.ca/news/11960103/calgary-mayor-24-7-stampede-transit-service-year-round/). Section 5 converts that into a bounded transit-share inference.
- **The four large venues and grounds in the Stampede Park / Culture + Entertainment (C+E) District share one CTrain station area and one set of approach roads.** I give them one **estimated** car share of **0.65 (range 0.50–0.80, low confidence)**. Everything else stays on the city fallback.
- **The current `transit` setting (0.40 car share) is not supported.** Even the City's all-purpose downtown cordon count records [58.5% of inbound people over 16 hours travelling by passenger vehicle](https://www.calgary.ca/planning/transportation/data/combined.html).
- **Sprawl versus hub.** Both carry the same 0.85 fallback car share in the app. Calgary's choice therefore mainly affects spill between nearby crowds. Calgary's biggest crowds sit in one tight cluster on shared approaches, which is the `hub` pattern.

---

## 1. Name, short form, code and coverage (Gap item 1)

| Field | Recommendation | Evidence |
|---|---|---|
| Display name | **Calgary** | Every major team uses the city name. Examples: Calgary Flames, Calgary Stampeders, Calgary Wranglers, Calgary Wild FC, Cavalry FC. Unlike the Tampa Bay case, no regional brand replaces the city name. |
| Short form | **Calgary** (or "YYC" in tight UI) | The airport authority branded the airport "YYC" publicly in 2008. Civic and media use is documented in the [2017 renaming announcement](https://skiesmag.com/press-releases/calgary-international-airport-renamed-yyc-calgary-international-airport/). |
| Three-letter code | **YYC** | YYC is the [official IATA code, now part of the airport's legal name](https://skiesmag.com/press-releases/calgary-international-airport-renamed-yyc-calgary-international-airport/). The same release records that the City, civic groups, Tourism Calgary and the media use it. This matches the TPA precedent, which is an airport code rather than a team code. |
| Contrary evidence on code | Teams use **CGY** | NHL scoring and statistics sites use CGY for the Flames ([Hockey-Reference](https://www.hockey-reference.com/teams/CGY/history.html), [ESPN](https://africa.espn.com/nhl/video/_/gameId/401803251)). The AHL Wranglers are also listed as CGY in a [third-party AHL database](https://ahl-data.ryancheley.com/my_database/franchise_history/9). The CFL code for the Stampeders was not verified (**gap**). If the app's code is meant to match team abbreviations rather than airports, use CGY. |
| Covered municipalities (core) | City of Calgary plus the rest of the Statistics Canada Calgary CMA | The City describes the CMA as [Calgary, Airdrie, Rocky View County, Cochrane, Chestermere, Crossfield, Tsuut'ina Nation, Irricana and Beiseker](https://www.calgary.ca/csps/cns/research-and-strategy/calgary-data.html). |
| Airdrie | **In** | In the CMA (same source). |
| Cochrane | **In** | In the CMA (same source). |
| Chestermere, Rocky View County | **In** | In the CMA (same source). |
| Tsuut'ina Nation | **In** | In the CMA (same source). This matters because Grey Eagle Event Centre is located there. |
| Okotoks | **Out (edge case)** | Okotoks is not a CMA component in the City's list above. It is listed without a CMA note in [Alberta census tables](https://en.wikipedia.org/wiki/Demographics_of_Alberta). Foothills County towns are often treated informally as part of metro Calgary ([Calgary Metropolitan Region overview](https://en.wikipedia.org/wiki/Calgary_Metropolitan_Region)). |
| Foothills County venue exception | **Spruce Meadows / ATCO Field in, flagged as edge** | ATCO Field and Spruce Meadows are [in Foothills County](https://en.wikipedia.org/wiki/Cavalry_FC) but carry a [Calgary SW mailing address](https://www.showpass.com/masters-general-admission-2/). Cavalry FC runs its fan shuttle from a Calgary CTrain station ([CBC](https://www.cbc.ca/news/canada/calgary/cavalry-soccer-club-fan-accesss-spruce-meadows-1.5126832)). The event catchment is Calgary even though the municipality is not. |

---

## 2. Boundary recommendation

**Recommended event metro:**

- **Core:** the Calgary CMA as listed above.
- **One named edge venue group:** Spruce Meadows, including ATCO Field, in Foothills County.

**Separate edge cases, not in the core:**

- Okotoks and the rest of Foothills County, including Okotoks' Seaman Stadium (capacity **gap**).
- Banff and Canmore. No event-catchment evidence was found tying them to Calgary venue crowds.
- Edmonton. It is a separate destination. The only shared item found is the 2028 World Cup of Hockey, split between [Scotia Place (round robin) and Rogers Place (semis/final)](https://globalnews.ca/news/11887553/calgary-scotia-place-project-update-june/amp/).

**Why:**

- About [70% of 2026 Stampede attendees in the first half of the event were from the Calgary area](https://cfweradio.ca/?p=42041). This is consistent with a metro-scale audience. "Calgary area" was not defined in the source, which is a small definitional gap.
- No population, commuting or event-audience source was found that would pull Okotoks or the mountain towns into the core.

---

## 3. What evidence exists (and what does not)

| Evidence type searched | Found? | Notes |
|---|---|---|
| Measured fan mode split, any Calgary venue | **No** | Searched: Stampede guest survey results, Flames/Saddledome transit share, Stampeders/McMahon, Event Centre/Scotia Place transportation study, Rivers District Master Plan. Stampede surveys are public only for satisfaction measures, e.g. [91% met or exceeded expectations](https://livewirecalgary.com/2026/07/12/calgary-stampede-says-experience-not-attendance-is-the-focal-point/). No mode question results were published. |
| Projected split from a venue travel plan | **No (not public)** | No Scotia Place transportation impact assessment with mode assumptions was found publicly. A 1984 ITE paper on Saddledome transport planning and modal split exists, but only its [TRID abstract](https://trid.trb.org/View/209996) is accessible. Treated as inaccessible and too old. |
| Transit agency event ridership | **Partly** | Stampede Parade Day 2026 boardings versus a June baseline ([Global News](https://globalnews.ca/news/11960103/calgary-mayor-24-7-stampede-transit-service-year-round/)). One Cavalry FC shuttle count from 2019 ([CBC](https://www.cbc.ca/news/canada/calgary/cavalry-soccer-club-fan-accesss-spruce-meadows-1.5126832)). Nothing for Flames, Stampeders or concerts. |
| Official parking supply counts | **No** | Lot names and rules were found (see Table C). Space counts were not. |
| Municipal person-trip mode data (background) | **Yes** | Downtown cordon count 2024 ([City of Calgary](https://www.calgary.ca/planning/transportation/data/combined.html)). Census/LFS commuting ([Statistics Canada](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm)). |

---

## 4. Background only — ordinary travel data (not event travel)

These figures are **not** event mode shares. They are used only to bound estimates.

| Measure | Car | Transit | Walk | Bike | Unit / note | Source |
|---|---|---|---|---|---|---|
| Calgary CMA main commuting mode, May 2025 | 78.9% | 13.5% | 6.0% (active, combined; flagged "E" = use with caution) | (in active) | % of commuters. Does not sum to 100%; "other" omitted by source. | [StatCan Table 2](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm) |
| Calgary CMA main commuting mode, May 2021 (pandemic census) | 84.4% | 7.9% | 4.8% (active) | (in active) | % of commuters | [StatCan Table 2](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm) |
| Downtown cordon, 16-hour inbound (6 a.m.–10 p.m.), 2024 | 58.5% passenger vehicles | 30.1% | 9.6% | 1.8% | % of **people** crossing the CBD cordon; sums to 100%; total 311,000 | [City cordon page](https://www.calgary.ca/planning/transportation/data/combined.html) |
| Downtown cordon, PM peak inbound (5–6 p.m.), 2024 | 54.8% | 32.2% | 11.1% | 1.9% | % of people; sums to 100%; total 24,000 | [City cordon page](https://www.calgary.ca/planning/transportation/data/combined.html) |

**Caveats on this background data:**

- The City warns that cordon data is collected for municipal planning and may not suit other uses ([same page](https://www.calgary.ca/planning/transportation/data/combined.html)).
- The cordon's southern edge is the railway. **Stampede Park and the Saddledome sit just outside it**, south of the tracks.
- The City's [2025 Mobility Status Report](https://www.calgary.ca/content/dam/www/transportation/roads/documents/2025-mobility-status-report.pdf) shows downtown in-bound splits of 26% / 34% / 30% transit and 63% / 55% / 59% auto across three unlabeled years. Those figures differ from the cordon page because they appear to use a different time window.
- I treat this as a small definitional gap and use the cordon page, which states its windows explicitly.

---

## 5. Ridership inference — Stampede Parade Day, Friday 3 July 2026

**Inputs:**

| Input | Value | Source |
|---|---|---|
| CTrain boardings, Parade Day 2026 | 229,000 | [Global News, citing Calgary Transit](https://globalnews.ca/news/11960103/calgary-mayor-24-7-stampede-transit-service-year-round/) |
| Baseline: average June 2026 Friday CTrain boardings | 128,000 | same |
| Stampede Park gate admissions that day | 155,518 (gate count, includes free "Parade to Park" entries) | [LiveWire Calgary](https://livewirecalgary.com/2026/07/04/calgary-stampede-2026-day-one-wraps-with-records-and-rodeo-thrills/) |
| Parade spectators (organizer estimate, not a count) | ~315,000 | same |

**Calculation:**

1. **Baseline subtraction.** 229,000 − 128,000 = **101,000 excess boardings**.
2. **Return trips.** A round trip is at least 2 boardings, so at most **50,500 people** made event round trips by CTrain. This assumes no line transfers and no one-way trips.
3. **Denominators.** Parade and park crowds overlap by an unknown amount. People present at either event number between 315,000 and 470,518.
4. **Implied transit share.** 50,500 ÷ 470,518 = **10.7%** up to 50,500 ÷ 315,000 = **16.0%** of everyone at either event. If all excess riders were park visitors, the share would be 50,500 ÷ 155,518 = **32.5%** of park visitors.

**Uncertainty, in both directions:**

- *Upward bias in true transit use.* The June baseline includes ordinary commuters. Parade Day is a summer Stampede Friday when many downtown workers do not commute, so the true event ridership is probably **higher** than 101,000.
- *Downward bias.* Boardings may include transfers, and some riders were not attending either event.
- *Park-and-ride riders* who drove to a CTrain station are counted as transit here. They cannot be separated in this data.

**Result.** Roughly **one in ten to one in three** event attendees used the CTrain that day. That is a wide range. It shows heavy event use of rail in absolute terms, but it is far from a transit-majority crowd.

This is a single day, a weekday, in summer, with a parade, so it is **not** directly transferable to a winter hockey night.

---

## 6. Estimation method for the C+E District cluster

**Applies to:** Saddledome, Scotia Place (from opening), GMC Stadium, BMO Centre, Big Four Roadhouse, Nutrien Western Event Centre, and the Stampede Park grounds.

**Shared access.** All of these sit on the same grounds or within two blocks. City construction notices tell visitors that [all major venues are within walking distance of Victoria Park/Stampede LRT](https://www.calgary.ca/major-projects/scotia-place/construction/project-updates/july-2025-scotia-place-newsletter.html).

**Estimate (person shares, illustrative midpoints):**

| Mode | Share | Sum |
|---|---|---|
| Car-involved (private, carpool, rideshare, taxi, charter, drop-off) | 65% | |
| Public transit | 25% | |
| Walk / bike / other | 10% | **= 100%** |

- **Recommended car share: 0.65, range 0.50–0.80.**
- **Confidence: low.**
- **Label: estimated.**

**Assumptions and anchors:**

- **Transit range 20–35%.** This takes the upper part of the Section 5 range (Stampede Park–only attribution) and allows for the baseline under-subtraction.
- **Walk/bike range about 5–12%.** This is anchored to the cordon's PM inbound walk + bike share of 13.0% ([City cordon page](https://www.calgary.ca/planning/transportation/data/combined.html)). It is reduced for winter events and for venues sitting just outside the cordon.
- **Car-involved is the remainder.** It is bounded above by the CMA commuting car share of [78.9%](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm) for audiences beyond walk or LRT reach.
- **Operational evidence that event travel leans toward transit:**
  - The Flames tell fans to take the CTrain and encourage transit and park-and-ride ([Flames game-day guide](https://www.nhl.com/flames/fans/game-day-guide)).
  - The City adds extra transit on playoff nights ([CBC, 2022](https://amp.cbc.ca/news/canada/calgary/calgary-flames-city-celebrations-dallas-stars-playoffs-1.6439921)).
  - Construction closures around Scotia Place reduce road access to the grounds ([June 2026 newsletter](https://www-prd.calgary.ca/major-projects/scotia-place/construction/project-updates/June-2026-scotia-place-newsletter.html)).

**Park-and-ride treatment:**

- Per the brief, a drive to *dedicated event* remote parking plus a shuttle counts as **car-involved**.
- Regular CTrain park-and-ride cannot be separated in any Calgary data found. In Section 5 it is counted as transit, which biases transit **up** and car **down** relative to the brief's definition.
- The upper end of the car range (0.80) is set to allow for this.

**What would change the estimate:** any published Calgary Transit ridership for a Flames game, a Saddledome concert, or a non-parade Stampede day, with a stated baseline.

---

## 7. Venue and event tables

**Notes on the tables:**

- Row keys are **proposed**. The companion venue answer was not provided with this brief, so venues were enumerated independently. See the hand-off note in Section 9.
- Capacities are per configuration. Mutually exclusive configurations are never added together.

### Table A — identity, configuration and capacity

| Row key | Verified current name | Municipality | Setup / event and date represented | Capacity (configuration) | Status, Oct 2026 |
|---|---|---|---|---|---|
| `yyc-scotiabank-saddledome` | Scotiabank Saddledome | City of Calgary (Stampede Park) | NHL hockey (Flames), 2025-26 regular season. Also Wranglers, Hitmen, Roughnecks. | 19,289 hockey ([Ticketmaster](https://blog.ticketmaster.com/step-inside-scotiabank-saddledome-calgary-ab/); sellout attendance of [19,289](https://africa.espn.com/nhl/video/_/gameId/401803251) matches) | Active. 2026-27 is the [announced farewell season](https://en.wikipedia.org/wiki/2025%E2%80%9326_Calgary_Flames_season). [To be demolished after Scotia Place opens](https://canada.constructconnect.com/?p=422175). |
| `yyc-scotia-place` | Scotia Place | City of Calgary (C+E District, east Victoria Park) | NHL hockey from 2027-28; concerts | [18,400 hockey](https://www.nhl.com/news/calgary-flames-unveil-plans-for-new-arena). [20,000 concerts (trade press)](https://canada.constructconnect.com/?p=422175). [1,000-seat community rink](https://www.nhl.com/news/calgary-flames-unveil-plans-for-new-arena) (separate room). | Under construction. [Keys to tenant fall 2027, opening for the 2027/28 NHL season](https://www.calgary.ca/major-projects/scotia-place/frequently-asked-questions.html). |
| `yyc-mcmahon-stadium` | McMahon Stadium | City of Calgary (University of Calgary land, NW) | CFL (Stampeders), Dinos football, [NSL Calgary Wild FC](https://3downnation.com/2026/08/27/calgary-seeking-bids-for-new-stadium-study-report/); 113th Grey Cup on 15 Nov 2026 | [35,400 seated; 46,020 with temporary seating](https://fbschedules.com/?p=207680). **Conflict:** [Stadium Journey lists 35,650](https://www.stadiumjourney.com/stadiums/mcmahon-stadium-s1246). | Active. City is [seeking a stadium study consultant](https://3downnation.com/2026/08/27/calgary-seeking-bids-for-new-stadium-study-report/). |
| `yyc-gmc-stadium` | GMC Stadium (renamed from the Grandstand in 2022) | City of Calgary (Stampede Park) | Stampede rodeo, chuckwagons, evening show (July) | [17,000 seated + 8,000 standing](https://www.ctvnews.ca/calgary/article/calgary-stampede-renames-iconic-grandstand-to-gmc-stadium/) | Active. Expansion is in the [Stampede 20-year master plan](https://livewirecalgary.com/2026/03/18/calgary-stampede-sets-forth-on-20-year-master-plan-to-reshape-the-park/), which is unfunded. |
| `yyc-bmo-centre` | BMO Centre at Stampede Park | City of Calgary (Stampede Park) | Champions Ballroom standing events; convention and consumer shows | [Champions Ballroom 5,000 standing](https://calgarymlc.ca/articles/bmo-centre-expansion-progress-2023). Building-wide [theatre-style 24,000](https://www.visitcalgary.com/venues-and-suppliers/bmo-centre-at-stampede-park) is a combined-hall configuration, mutually exclusive with the ballroom figure. | Expansion opened 2024. The expansion [demolished the Stampede Corral and Hall A](https://www.calgary.ca/pda/pd/big-four-capital-projects/bmo-centre-expansion.html). |
| `yyc-big-four-roadhouse` | The Big Four Roadhouse (Big Four Building) | City of Calgary (Stampede Park) | Concerts, especially Stampede nights | [4,300 (secondary list)](https://en.wikipedia.org/wiki/List_of_music_venues_in_Canada). Official figure **gap**. | Active. [Replacement proposed in master plan](https://www.ctvnews.ca/calgary/article/calgary-stampede-shares-a-look-at-the-future-stampede-park/). |
| `yyc-nutrien-western-event-centre` | Nutrien Western Event Centre | City of Calgary (Stampede Park) | Agricultural and western events | **gap** | Active ([hosted 2026 Stampede agricultural finals](https://www.westernstandard.news/alberta/calgary-stampede-2026-wraps-with-record-crowds-and-275-noise-complaints/74969)) |
| `yyc-stampede-park-grounds` (event) | Calgary Stampede, Stampede Park grounds | City of Calgary | 10-day fair, 3–12 July 2026 | Not fixed. [1,411,954 gate admissions over 10 days](https://globalnews.ca/news/11964142/calgary-stampede-attendance-down-again-2026/). Daily range seen: [122,559 (last day)](https://globalnews.ca/news/11964142/calgary-stampede-attendance-down-again-2026/) to [163,550 (Family Day)](https://livewirecalgary.com/2026/07/06/calgary-stampede-2026-big-crowd-on-day-three-pushes-attendance-to-a-half-million/). These are daily gate counts, not simultaneous crowds. | Annual |
| `yyc-stampede-parade` (event) | Calgary Stampede Parade | City of Calgary (downtown streets) | 3 July 2026 | [~315,000 spectators (organizer estimate)](https://livewirecalgary.com/2026/07/04/calgary-stampede-2026-day-one-wraps-with-records-and-rodeo-thrills/) | Annual |
| `yyc-atco-field` | ATCO Field at Spruce Meadows | **Foothills County** (edge) | CPL soccer (Cavalry FC) | [6,000 seated; record 7,052 at the 2024 CPL final](https://en.wikipedia.org/wiki/Cavalry_FC) | Active. A [12,000-seat replacement](https://amp.cbc.ca/news/canada/calgary/cavalryfc-spruce-meadows-calgary-foothills-county-1.5287416) is a long-range area-plan concept. |
| `yyc-spruce-meadows-grounds` (event) | Spruce Meadows tournaments | **Foothills County** (edge) | 'Masters', [9–13 Sep 2026](https://www.showpass.com/masters-general-admission-2/); summer series | No fixed capacity verified. [Just under 30,000 on one 2018 summer-series day](https://www.pressreader.com/canada/calgary-herald/20180709/281487867109792) (PressReader, may be access-limited). | Annual |
| `yyc-jubilee-auditorium` | Southern Alberta Jubilee Auditorium | City of Calgary (NW) | Ballet, opera, touring theatre | [2,366 fixed; 2,523 maximum with pit and portable seats](https://www.jubileeauditorium.com/sites/default/files/2025-09/SAJA%20Technical%20Specifications%2018.08.25.pdf) | Active |
| `yyc-jack-singer-concert-hall` | Jack Singer Concert Hall, Werklund Centre | City of Calgary (downtown) | Orchestra, concerts | [Up to 1,797 (venue rental page)](https://werklundcentre.ca/rentals). **Conflict:** [1,197 per Avenue Calgary](https://www.avenuecalgary.com/things-to-do/large-scale-arts-venues-in-calgary). | Active |
| `yyc-grey-eagle-event-centre` | Grey Eagle Event Centre | Tsuut'ina Nation (in CMA) | Concerts, comedy | [2,511 reserved / 3,000 GA (secondary list)](https://en.wikipedia.org/wiki/List_of_music_venues_in_Canada) | Active (not independently verified) |
| `yyc-winsport-event-centre` | WinSport Event Centre | City of Calgary (Canada Olympic Park) | Concerts, sports | [4,000 (secondary list)](https://en.wikipedia.org/wiki/List_of_music_venues_in_Canada) | Not independently verified |
| `yyc-folk-fest` (event) | Calgary Folk Music Festival, Prince's Island Park | City of Calgary (downtown) | [23–26 July 2026](https://www.calgaryfolkfest.com/folk-fest/faq) | [Daily audiences around 13,000](https://visitcalgary.com/things-to-do/festivals/calgary-folk-music-festival) | Annual |
| `yyc-country-thunder` (event) | Country Thunder Alberta, Confluence Parkland and Historic Site | City of Calgary | 2026 edition [cancelled 24 June 2026](https://livewirecalgary.com/2026/06/24/country-thunder-cancels-weekend-calgary-festival/) | **gap** | [Contract reported in place through 2027](https://livewirecalgary.com/2026/06/24/country-thunder-cancels-weekend-calgary-festival/) |
| `yyc-foothills-stadium` | Foothills Stadium | City of Calgary | — | Formerly [6,000](https://en.wikipedia.org/wiki/Foothills_Stadium) | **Retired.** [Demolished](https://www.ctvnews.ca/calgary/article/work-begins-on-foothills-athletic-park-redevelopment/); the site is part of the [Foothills Fieldhouse project](https://www.calgary.ca/pda/pd/big-four-capital-projects/foothills-fieldhouse.html). Do not create a row. |
| `yyc-stampede-corral` | Stampede Corral | City of Calgary | — | — | **Retired** ([demolished for BMO Centre expansion](https://www.calgary.ca/pda/pd/big-four-capital-projects/bmo-centre-expansion.html)). Do not create a row. |

**Not researched in this pass (coverage gaps):**

- University of Calgary rooms other than McMahon (Jack Simpson Gym, Olympic Oval, MacEwan Hall).
- Calgary Marathon, GlobalFest, Sled Island, and the Stampede off-site tents such as the Cowboys Music Festival.
- Seaman Stadium in Okotoks (edge).

### Table B — mode split and recommended car share

All values are **person** shares. No row has a measured split.

| Row key | Car / carpool / rideshare | Public bus / rail | Dedicated event shuttle | Walk / bike / other | Unclassified | Sums to 100%? | Recommended car share (range) | Type | Confidence | Evidence type, date, event type |
|---|---|---|---|---|---|---|---|---|---|---|
| `yyc-scotiabank-saddledome` | 65% est. | 25% est. | none known | 10% est. | — | Yes (estimate) | **0.65 (0.50–0.80)** | **estimated** | Low | Section 5/6 method. Same station as Stampede Park. Winter evening sport, so walk/bike is likely at the low end. |
| `yyc-scotia-place` | 65% est. | 25% est. | none known | 10% est. | — | Yes (estimate) | **0.65 (0.50–0.80)** | **estimated** (pre-opening) | Low | Same district, two blocks from the Saddledome ([Construct Connect](https://canada.constructconnect.com/?p=422175)). No public projection found. Re-check at opening. |
| `yyc-gmc-stadium` | 65% est. | 25% est. | Stampede express buses exist (see Table C) | 10% est. | — | Yes (estimate) | **0.65 (0.50–0.80)** | **estimated** | Low | Crowd is a subset of Stampede Park admissions. Do not add it to the grounds. |
| `yyc-bmo-centre` | 65% est. | 25% est. | none known | 10% est. | — | Yes (estimate) | **0.65 (0.50–0.80)** | **estimated** | Low | Public and concert events. Weekday conventions with hotel-based delegates may differ (**gap**). |
| `yyc-big-four-roadhouse` | 65% est. | 25% est. | none known | 10% est. | — | Yes (estimate) | **0.65 (0.50–0.80)** | **estimated** | Low | Same grounds |
| `yyc-nutrien-western-event-centre` | 65% est. | 25% est. | none known | 10% est. | — | Yes (estimate) | **0.65 (0.50–0.80)** | **estimated** | Low | Same grounds. Capacity is blank, so this row cannot be weighted. |
| `yyc-stampede-park-grounds` | 65% est. | 25% est. | some (routes 504/507 in 2024) | 10% est. | — | Yes (estimate) | **0.65 (0.50–0.80)** | **estimated** | Low | Parade Day 2026 ridership inference (Section 5). Summer, weekday and weekend, daytime to late night. |
| `yyc-stampede-parade` | unknown | ≈11–16% of the union crowd (Section 5) | — | unknown, likely large (downtown) | remainder | No (car and walk not separable) | **Fallback 0.85 (hub)**, likely overstated | unknown | — | Boardings inference only |
| `yyc-mcmahon-stadium` | unknown | unknown | Express shuttles used during [2023 CTrain closures](https://www.stampeders.com/?p=453467) | unknown | 100% | No | **Fallback 0.85 (hub)**, likely overstated | unknown | — | Qualitative only. Adjacent CTrain station; permit-only lots; Grey Cup ticket accepted as fare (2019). |
| `yyc-atco-field` | unknown, likely high | Shuttle from Somerset-Bridlewood CTrain | [About 500 riders on one 2019 match day](https://www.cbc.ca/news/canada/calgary/cavalry-soccer-club-fan-accesss-spruce-meadows-1.5126832); match attendance not reported | unknown | remainder | No | **Fallback 0.85** | unknown | — | One 2019 data point with no denominator. Some shuttle riders may have used park-and-ride (car-involved). |
| `yyc-spruce-meadows-grounds` | unknown, likely ≥0.85 | no regular service verified | historic shuttle mentioned in [2018 coverage](https://www.pressreader.com/canada/calgary-herald/20180709/281487867109792) | unknown | 100% | No | **Fallback 0.85**, possibly understated | unknown | — | [Free parking for all official events](https://www.sprucemeadows.com/parking/) |
| `yyc-jubilee-auditorium` | unknown | unknown | — | unknown | 100% | No | **Fallback 0.85** | unknown | — | none |
| `yyc-jack-singer-concert-hall` | unknown | unknown | — | unknown | 100% | No | **Fallback 0.85**, likely overstated | unknown | — | Downtown, inside the cordon. Has its own underground parking ([Avenue Calgary](https://www.avenuecalgary.com/things-to-do/large-scale-arts-venues-in-calgary)). |
| `yyc-grey-eagle-event-centre` | unknown | unknown | — | unknown | 100% | No | **Fallback 0.85** | unknown | — | none |
| `yyc-winsport-event-centre` | unknown | unknown | — | unknown | 100% | No | **Fallback 0.85** | unknown | — | none |
| `yyc-folk-fest` | unknown | unknown | — | organizer says many walk, ride transit or bike ([FAQ](https://www.calgaryfolkfest.com/folk-fest/faq)) | 100% | No | **Fallback 0.85**, likely overstated | unknown | — | Qualitative only |
| `yyc-country-thunder` | unknown | unknown | — | unknown | 100% | No | Fallback 0.85 | unknown | — | Event cancelled in 2026 |

**Why the C+E rows share one value.** They share one station area, the same approach roads, and the same parking pool. No source distinguishes their audiences' modes. Giving them different numbers would be false precision.

### Table C — parking, operations, access and shared approaches

| Row key | Parking supply and remote arrangements | Event operations, closures, start/end service | Access constraints and other crowds sharing approaches |
|---|---|---|---|
| C+E cluster (Saddledome, Scotia Place, GMC, BMO, Big Four, Nutrien WEC, grounds) | Permit and season lots: [Lot A, Parkades 1–3, Lot 2](https://www.nhl.com/flames/fans/game-day-guide). City suggests the [Platform Innovation Centre parkade on 9 Ave SE](https://www.calgary.ca/major-projects/scotia-place/construction/project-updates/july-2025-scotia-place-newsletter.html). Stampede had [three Uber zones in 2025](https://content.goldenwestapps.com/node/181669). Space counts **gap**. | [24-hour CTrain service during Stampede, with some trains lengthened to four cars](https://content.goldenwestapps.com/node/181669). In 2024, [express routes 504 (North Pointe) and 507 (McKenzie Towne / Douglas Glen) ran to Erlton every 10–15 minutes](https://globalnews.ca/news/10613492/calgary-stampede-ctrain-capacity/amp/). Flames regular-season extra service not verified (**gap**). Playoff extra service: [2022](https://amp.cbc.ca/news/canada/calgary/calgary-flames-city-celebrations-dallas-stars-playoffs-1.6439921). | Scotia Place construction closures, e.g. [1–26 June 2026, with access rerouted via Stampede Trail](https://www-prd.calgary.ca/major-projects/scotia-place/construction/project-updates/June-2026-scotia-place-newsletter.html). 17 Ave SE renamed [Flores LaDue Parade](https://www.calgary.ca/major-projects/scotia-place/construction/project-updates/july-2025-scotia-place-newsletter.html). Shared: Macleod Trail, Victoria Park/Stampede and Erlton/Stampede stations. Convention traffic overlaps hockey nights. |
| `yyc-mcmahon-stadium` | [On-site lots are permit-only](https://club.calgarywildfc.com/matchday/). [No stadium parking on Grey Cup day in 2019](https://newsroom.calgary.ca/calgary-is-ready-for-2019-grey-cup-game-and-festivities/). Space counts **gap**. | [2019 Grey Cup: game ticket accepted as transit fare; Banff Trail NW closed at the station](https://newsroom.calgary.ca/calgary-is-ready-for-2019-grey-cup-game-and-festivities/). 2026 Grey Cup operations plan not yet found (**gap**; re-check early Nov 2026). | Crowchild Trail; Red Line NW. Shares approaches with the Jubilee and UCalgary/Foothills Athletic Park. The [2026 Grey Cup festival runs 8–15 Nov at McMahon and Stampede grounds](https://www.ctvnews.ca/calgary/article/out-of-mcmahon-back-on-campus-dinos-propose-new-multi-sport-stadium/), so both clusters are loaded in the same week. |
| `yyc-atco-field` / `yyc-spruce-meadows-grounds` | [Free parking; Lots 7 and 8 (west), Lot 2 (east) opened intermittently](https://www.sprucemeadows.com/parking/). Space counts **gap**. | [Free Cavalry shuttle from Somerset-Bridlewood CTrain station (2019)](https://www.cbc.ca/news/canada/calgary/cavalry-soccer-club-fan-accesss-spruce-meadows-1.5126832). Current (2026) shuttle status not verified (**gap**). | Highway 22X and the SW ring road. A former intersection access [was removed by ring road works](https://www.cbc.ca/news/canada/calgary/cavalry-soccer-club-fan-accesss-spruce-meadows-1.5126832). Tournament days and Cavalry home matches share one site. |
| `yyc-folk-fest` / Prince's Island Park | [Street parking and pay lots nearby; bike lock-up on site](https://www.calgaryfolkfest.com/folk-fest/faq) | [About a 15-minute walk from 3 St SW station (free fare zone)](https://www.calgaryfolkfest.com/folk-fest/faq) | Canada Day uses the same park, with a [free inter-site shuttle and free on-street ParkPlus parking](https://www.calgary.ca/events/canada-day.html?ivpg=1). |
| `yyc-jubilee-auditorium` | **gap** | **gap** | Red Line NW / 16 Ave NW, shared with the McMahon cluster |

---

## 8. Regional conclusion

### Capacity-weighted car share (fixed rooms ≥ 5,000, current as of Oct 2026)

**Method.** One largest standard configuration per venue, as rooms, not simultaneous crowds. Scotia Place is excluded because it is not yet open. The BMO building-wide 24,000 configuration is excluded; the Champions Ballroom figure is used instead.

| Venue (configuration) | Capacity | Car share used | Type |
|---|---|---|---|
| McMahon Stadium (seated) | 35,400 | 0.85 | fallback |
| Scotiabank Saddledome (hockey) | 19,289 | 0.65 | estimated |
| GMC Stadium (seated only) | 17,000 | 0.65 | estimated |
| ATCO Field | 6,000 | 0.85 | fallback |
| BMO Centre Champions Ballroom (standing) | 5,000 | 0.65 | estimated |
| **Total / weighted** | **82,689** | **0.750** | mixed |

- **Sensitivity A.** If McMahon took the C+E estimate (0.65) instead of the fallback, the weighted share would be **0.665**.
- **Sensitivity B.** The central cluster alone (Saddledome + GMC + BMO = 41,289) is **0.65**.

**Do outlying venues hide the downtown pattern?** Yes, partly.

- McMahon is the largest fixed venue. Its share is unknown and sits on the fallback, which pulls the capacity weight from 0.65 to 0.75.
- Spruce Meadows is genuinely car-based. Its open-site tournament crowds have no fixed capacity, so they are excluded from capacity weighting.

### Typical-attendance-weighted car share

**Not computable with adequate coverage (gap).**

- Flames attendance is available only as a sample of eight 2025-26 home games. These were 16,278 to 19,289, averaging about 17,983 ([16,278](https://www.espn.in/nhl/video/_/gameId/401802814), [17,137](https://africa.espn.com/nhl/video/_/gameId/401803005), [17,287](https://www.espn.com/nhl/video/_/gameId/401803467), [17,358](https://africa.espn.com/nhl/video/_/gameId/401803107), [18,490](https://africa.espn.com/nhl/video/_/gameId/401803214), [18,739](https://africa.espn.com/nhl/video/_/gameId/401802981), [19,289](https://africa.espn.com/nhl/video/_/gameId/401803251), [19,289](https://www.espn.in/nhl/video/_/gameId/401803236)).
- Stampeders and Cavalry season averages were not retrieved.
- The Stampede daily average (1,411,954 ÷ 10 = 141,195) is a daily gate count, not a simultaneous crowd. It would dominate any weighting.
- With only C+E rows covered, the result is trivially 0.65.

### City type recommendation

**`hub`.**

**Why hub rather than sprawl:**

- The largest crowds sit in one tight district on shared approaches and one LRT station area.
- Those approaches are Macleod Trail, Olympic Way, Flores LaDue Parade, and Victoria Park/Stampede and Erlton stations.
- This cluster-and-spill structure is what distinguishes `hub` in the app.
- The fallback car share is the same (0.85) under either setting.

**Why not `transit`:**

- No Calgary evidence comes near a 0.40 car share.
- Even the downtown all-purpose cordon is [58.5% passenger vehicles](https://www.calgary.ca/planning/transportation/data/combined.html).
- Parade Day rail use implies roughly 11–33% transit.

**Strongest contrary evidence toward `sprawl`:**

- No measured event split exists anywhere.
- Regional commuting is [78.9% car](https://www150.statcan.gc.ca/n1/daily-quotidien/250826/t002a-eng.htm).
- The largest fixed venue (McMahon) has no transit data.
- Major outdoor show-jumping crowds at Spruce Meadows rely on [free parking](https://www.sprucemeadows.com/parking/) outside the city.

**Strongest contrary evidence toward `transit`:**

- Stampede nearly doubles a normal Friday's CTrain boardings ([229,000 vs 128,000](https://globalnews.ca/news/11960103/calgary-mayor-24-7-stampede-transit-service-year-round/)).
- Every venue of 15,000+ is beside a CTrain station.

**Venue exceptions:**

- The C+E cluster runs below the fallback (estimated 0.65).
- Spruce Meadows / ATCO Field and Grey Eagle are likely at or above it.

### Clusters, shared roads and shared audiences (separate findings)

**1. Clusters.**

- **C+E District.** Saddledome, Scotia Place from 2027, BMO Centre, GMC Stadium, Big Four, Nutrien WEC.
- **Downtown core.** Werklund Centre, Prince's Island Park.
- **NW corridor.** McMahon, Jubilee, Foothills Athletic Park.
- **South edge.** Spruce Meadows / ATCO Field.
- **Southwest.** Grey Eagle (Tsuut'ina).

**2. Shared roads and stations.**

- C+E: Macleod Trail, Olympic Way, Stampede Trail, Flores LaDue Parade, Victoria Park/Stampede and Erlton stations.
- NW: Crowchild Trail and the Red Line NW.
- South edge: Highway 22X / SW ring road, and Somerset-Bridlewood station for shuttles.

**3. Shared audiences.**

- The Flames, Wranglers, Hitmen and Roughnecks share one owner and one building, so they never overlap.
- The Stampeders, Dinos and Wild FC share McMahon.
- The Grey Cup week of 8–15 Nov 2026 loads McMahon and Stampede grounds at the same time.
- BMO Centre shows can overlap with Saddledome events.

---

## 9. Hand-off and build notes

**Hand-off.**

- The companion venue answer was not attached, so row keys above are proposed.
- A builder must map each `yyc-*` key to the companion answer's venue rows before wiring.
- If the companion answer splits the BMO Centre into rooms, apply 0.65 (estimated) to each public-event room and leave convention-only rooms on the fallback.
- If it lists GMC Stadium and the Stampede grounds separately, do not add them; GMC attendees are inside the grounds count.

**Build rules (for whoever turns this answer into app data):**

- **Unique IDs.** Every venue ID and team ID must be unique across all cities; check for collisions.
  - `giants`, `jets`, `rangers`, `kings` and `cardinals` were already taken.
  - Use a city prefix throughout, e.g. `yyc-flames`, `yyc-stampeders`, `yyc-wranglers`, `yyc-hitmen`, `yyc-roughnecks`, `yyc-cavalry`, `yyc-dinos`.
  - **`wild` is a likely collision** (Minnesota Wild), so Calgary Wild FC must be `yyc-wild-fc`.
- **No per-city opponents file.** Opponent draws go into `expectedDrawIndex` like every other city.
- **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list.
  - Blank here: Nutrien WEC, Country Thunder site, Spruce Meadows grounds.
  - Use the official figure where sources conflict, and log the conflict: McMahon 35,400 vs 35,650; Jack Singer 1,797 vs 1,197.
- **Car shares.**
  - Wire measured values (none exist for Calgary).
  - Wire the C+E estimates marked **estimated**.
  - Leave all other rows on the city default.
- **Do not wire retired venues.** Foothills Stadium and the Stampede Corral are demolished.

---

## End with

### 1. Recommended existing city type and rationale; strongest contrary evidence

**`hub`.** Calgary's biggest event crowds concentrate in one LRT-served district with shared approaches, and that is the spill pattern `hub` represents.

The sprawl and hub fallback car shares are identical (0.85). The decision therefore rests on clustering, not on car share. The `transit` setting (0.40) is contradicted by all local evidence found.

- **Strongest contrary evidence (toward sprawl).** There are no measured event splits. CMA commuting is 78.9% car. McMahon, the largest venue, has no transit data. Spruce Meadows crowds rely on free parking.
- **Strongest contrary evidence (toward transit).** Parade Day CTrain boardings ran about 1.8× a normal June Friday.

### 2. Car-share values keyed to venue rows

| Category | Rows | Value |
|---|---|---|
| Measured | none | — |
| Projected | none found publicly | — |
| Estimated | `yyc-scotiabank-saddledome`, `yyc-scotia-place`, `yyc-gmc-stadium`, `yyc-bmo-centre`, `yyc-big-four-roadhouse`, `yyc-nutrien-western-event-centre`, `yyc-stampede-park-grounds` | 0.65 (0.50–0.80), low confidence |
| Unknown → city fallback (hub, 0.85) | `yyc-mcmahon-stadium`, `yyc-atco-field`, `yyc-spruce-meadows-grounds`, `yyc-jubilee-auditorium`, `yyc-jack-singer-concert-hall`, `yyc-grey-eagle-event-centre`, `yyc-winsport-event-centre`, `yyc-folk-fest`, `yyc-stampede-parade`, `yyc-country-thunder` | 0.85 provisional |

### 3. Boundary recommendation and inconsistencies between briefs

**Boundary:**

- **Core:** the Calgary CMA, which includes Airdrie, Chestermere, Cochrane, Rocky View County and Tsuut'ina.
- **Named edge venue group:** Spruce Meadows / ATCO Field in Foothills County.
- **Separate edge cases:** Okotoks and the rest of Foothills County.
- **Separate destinations:** Banff, Canmore, Edmonton.

**Inconsistencies found:**

- **Spruce Meadows boundary.** The brief lists Spruce Meadows as a Calgary venue lead and also says Foothills municipalities are edge cases. Spruce Meadows is *in* Foothills County, so it needs an explicit exception.
- **Foothills Stadium** (listed lead) has been **demolished**.
- **The Stampede Corral** (implied under Stampede Park buildings) has been **demolished**.
- **"University venues"** overlaps McMahon, which is owned by the University of Calgary.
- **Name and code.** Gap item 1 suggests YYC; team abbreviations use CGY. Pick one convention app-wide.
- **Companion venue answer** referenced by the brief was not provided.

### 4. Data gaps, model limitations, source conflicts and inaccessible sources

**Gaps, with what was searched:**

- **No measured event mode split anywhere.** Searched: Stampede survey, Saddledome/Flames transit share, Event Centre transportation study, Rivers District Master Plan, McMahon/Stampeders transit, Grey Cup ridership.
- **No Calgary Transit ridership for Flames or Stampeders games.**
- **No parking space counts** for Stampede Park, McMahon or Spruce Meadows.
- **No 2026 Grey Cup transit plan yet.**
- **Capacities missing:** Nutrien WEC, Big Four (official), university rooms, Seaman Stadium.
- **Attendance missing:** Stampeders and Cavalry season averages.
- **CFL code** for the Stampeders not verified.

**Model limitations:**

- The C+E estimate rests on one summer weekday's boardings and on all-purpose cordon data.
- Park-and-ride cannot be separated from transit.
- Winter evening hockey may differ from summer Stampede.
- Weekend two-car CTrain service was piloted in 2025. [Three-car trains returned on Saturdays and longer trains run for major events](https://transit-prd.calgary.ca/plans---projects/two-car-trains.html), so event capacity varies by day.

**Source conflicts:**

- **McMahon capacity:** 35,400 (CFL / Canadian Press coverage) vs 35,650 (Stadium Journey).
- **Jack Singer capacity:** 1,797 (venue) vs 1,197 (Avenue).
- **Jubilee capacity:** 2,523 maximum (venue spec sheet) vs "just over 2,700" (Avenue) and 2,731 historically ([Canadian Encyclopedia](https://thecanadianencyclopedia.ca/en/article/alberta-jubilee-auditoriums-emc)). The venue figure is used.
- **Stampede 2025 total:** Global gives [1,470,288](https://globalnews.ca/news/11964142/calgary-stampede-attendance-down-again-2026/). A LiveWire recap's figures [appear garbled](https://livewirecalgary.com/2025/07/13/stampede-2025-closes-on-record-setting-year/). Global is used.
- **Downtown splits:** the cordon page and the Mobility Status Report differ, likely a time-window difference.

**Inaccessible or partly accessible sources:**

- The 1984 ITE Saddledome transportation paper (abstract only).
- The Calgary Herald 2018 article via PressReader (snippet only).
- The cordon Excel summary was not opened.

### 5. Confirmed transport or venue changes through 2028

| Change | Status | Date | Suggested re-check |
|---|---|---|---|
| Scotia Place opens (18,400 hockey); Flames, Wranglers, Hitmen, Roughnecks move | **Scheduled and funded, under construction**. [On time and on budget as of June 2026](https://globalnews.ca/news/11887553/calgary-scotia-place-project-update-june/amp/). | [Fall 2027, 2027/28 season](https://www.calgary.ca/major-projects/scotia-place/frequently-asked-questions.html) | Mar 2027 (opening month); Sep 2027 |
| Saddledome final season, then demolition | **Scheduled** ([farewell season](https://en.wikipedia.org/wiki/2025%E2%80%9326_Calgary_Flames_season); [demolition after Scotia Place opens](https://canada.constructconnect.com/?p=422175)) | 2026-27 season; demolition after fall 2027 | Oct 2027 |
| New 6 Street SE crossing and 11/12 Avenue SE connections around Scotia Place | **Under construction** ([June 2026 newsletter](https://www-prd.calgary.ca/major-projects/scotia-place/construction/project-updates/June-2026-scotia-place-newsletter.html)) | With Scotia Place | Sep 2027 |
| 113th Grey Cup and festival | **Scheduled** | [8–15 Nov 2026](https://www.ctvnews.ca/calgary/article/out-of-mcmahon-back-on-campus-dinos-propose-new-multi-sport-stadium/) | Early Nov 2026 (transit plan) |
| 2028 World Cup of Hockey round robin at Scotia Place | **Scheduled** ([Global](https://globalnews.ca/news/11887553/calgary-scotia-place-project-update-june/amp/)) | 2028 | Late 2027 |
| Green Line LRT SE segment | **Funded, under construction since June 2025.** [LRVs ready for service in 2031](https://www.calgary.ca/green-line/green-line-news/article-engine/where-youll-see-green-line-construction-in-2026.html), i.e. **after 2028**. | 2031 | — |
| Green Line downtown segment | **Planning.** [Functional plan due end of 2026; construction possibly from 2027](https://www.tunnelsandtunnelling.com/news/calgary-city-council-approves-green-line-lrt-construction/). | — | Jan 2027 |
| McMahon Stadium replacement / Stampeders to GMC Stadium | **Proposal only.** [Stampede master-plan concept](https://www.ctvnews.ca/calgary/article/calgary-stampede-shares-a-look-at-the-future-stampede-park/) with no costing; [City procuring a study](https://3downnation.com/2026/08/27/calgary-seeking-bids-for-new-stadium-study-report/). | none | Q1 2027 |
| UCalgary Dinos varsity stadium / fieldhouse near McMahon | **Proposal.** [3,500–7,000 seats sought](https://3downnation.com/2026/04/10/university-of-calgary-pursuing-on-campus-replacement-for-mcmahon-stadium-not-fit-for-stampeders); [design from fall 2026](https://www.ctvnews.ca/calgary/article/out-of-mcmahon-back-on-campus-dinos-propose-new-multi-sport-stadium/). | none | Mid 2027 |
| Stampede 20-year master plan: live-events zone on the Saddledome site, Big Four replacement, GMC expansion | **Proposal, unfunded** ([LiveWire](https://livewirecalgary.com/2026/03/18/calgary-stampede-sets-forth-on-20-year-master-plan-to-reshape-the-park/)) | after Saddledome demolition | 2028 |
| Foothills Multisport Fieldhouse | **Design stage, partly funded** ([City](https://www.calgary.ca/pda/pd/big-four-capital-projects/foothills-fieldhouse.html)) | none | 2027 |
| Spruce Meadows 12,000-seat soccer stadium | **Long-range concept** ([CBC](https://amp.cbc.ca/news/canada/calgary/cavalryfc-spruce-meadows-calgary-foothills-county-1.5287416)) | none | 2028 |
| Country Thunder Alberta | 2026 cancelled; [contract reportedly through 2027](https://livewirecalgary.com/2026/06/24/country-thunder-cancels-weekend-calgary-festival/) | 2027 TBD | Spring 2027 |

### 6. "Gaps from the first 26 city builds" — every item

1. **Name and code.**
   - Display name: "Calgary". Short form: "Calgary" (or "YYC"). Code: **YYC** (airport-code convention, matching the TPA precedent). Teams use CGY; see Section 1.
   - Covers the City of Calgary plus the CMA. **Airdrie: in. Cochrane: in. Okotoks: out (edge).**
   - Spruce Meadows in Foothills County is a flagged edge inclusion. No name change is needed; unlike Tampa Bay, teams use the city name.
2. **City type.**
   - **Mixed / `hub`.**
   - Measured fan mode splits: **none exist** for any venue, year or event type (gap; searches listed in item 4 above).
   - The nearest quantitative evidence is Stampede Parade Day, 3 July 2026, a fair/parade: boardings imply about 11–33% transit ([source](https://globalnews.ca/news/11960103/calgary-mayor-24-7-stampede-transit-service-year-round/)).
3. **Car share per venue.**
   - None measured.
   - **Estimated** 0.65 (0.50–0.80) for the seven C+E District rows, with sources and method in Sections 5–6.
   - All other rows stay on the city default. No number is given without a source.
4. **Hand-off.**
   - Keyed to the proposed `yyc-*` row keys in Tables A–B.
   - The companion venue answer was not provided, so a builder must map keys to it before wiring (Section 9).

**Build rules:** included as notes in Section 9.
