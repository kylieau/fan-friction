# Crowd sizes for open-site and free events: research answer

Researched 12 October 2026 for Fan/Friction. Answers `open-site-crowds-prompt.md`.

**Labels used on every figure**

- **measured**: a count of people (chip-timed finishers, gate scans, ridership taps).
- **announced**: a figure published by the organizer, or by a government body that hosts or co-hosts the event.
- **estimated**: an independent figure (researchers, media, police) or one the app computes (marked *estimated (app)*).

A figure being precise (602,231) does not make it measured. If the organizer publishes it and no one else can check it, it is **announced**.

**Short version.** Fenced, ticketed festivals (Outside Lands, ACL, Lollapalooza, Summerfest) publish a daily cap or count, and those figures are stable enough to map. Truly open events (parades, marathon spectators, free plaza concerts) are different. Their official figures are often projections that later get repeated as results. In every documented case I found, they ran about 2–3× higher than a density check.

---

## 1. Methods

### 1.1 Summary table

| Method | Data it needs | Where the data lives | Typical accuracy | Can it be automated? | Field it feeds |
|---|---|---|---|---|---|
| **Ticket / wristband cap** | Daily capacity inside the fence; sell-out status | Organizer press releases, local news, city contracts (e.g. Lollapalooza's [city contract cap](https://www.recorderonline.com/features/entertainment_news/lollapalooza-posts-2026-schedule-by-day/article_846cd201-1fc2-52e3-b537-24defb34ef0c.html)) | A good upper bound for people inside the fence. It says nothing about spillover outside, and it is not a count. | Partly. Caps rarely change, so one manual entry per event per year, plus a news check, is enough. I found no standard feed. | **Announced** |
| **Permit / contract attendance limit** | Permit application or approved cap; site polygon | City permit offices, park commission agendas, open-data portals. The [Chicago Park District event permits dataset](https://catalog-beta.data.gov/dataset/chicago-park-district-event-permits) includes an estimated-attendees field. Seattle publishes a [special events permits dataset](https://catalog.data.gov/dataset/special-events-permits) (I did not check its fields). | The applicant's own estimate, or a ceiling the regulator negotiated. It is useful as a ceiling, not as a turnout figure. | Yes, where a city publishes a portal (Socrata-style APIs). I verified Chicago only. | **Announced**, tagged `basis: permit`. The number comes from or is agreed with the organizer. |
| **Prior-year announced figure** | Last edition's published attendance | Organizer year-end releases, e.g. [Summerfest 2025](https://biztimes.com/summerfest-attendance-up-8-3-this-year/) | Good for recurring gated events. Summerfest's announced totals moved −11.0%, +8.3% and −5.6% across 2024–2026 *(app arithmetic on announced figures)*. Weather and lineup drive the swings. | Yes, once a source is mapped per event. | **Announced**, tagged `prior_year` |
| **Police / transit estimates** | Police statements; transit ridership for the day | News reports; transit agency recaps (e.g. [SEPTA ridership after the 2025 Eagles parade](https://inquirer.com/transportation/septa-crowds-fifa-world-cup-mlb-all-star-250-anniversary-us-20250304.html)) | Police figures rarely state a method. Ridership is a firm **lower bound** for the transit share only, and is usually published days or weeks later. | Low. It means parsing news text. Ridership is not real-time in the sources I found. | **Estimated** |
| **Crowd density (area × people/m²)** | Footprint polygon of the crowd area; a density assumption; ideally the share of the area that was filled | Festival site maps, permit maps, OpenStreetMap park and plaza polygons, published plaza areas (e.g. the Zócalo is [46,800 m²](https://www.unotv.com/estados/ciudad-de-mexico/capacidad-zocalo-cdmx-personas-estadios-azteca/)). The [Jacobs method](https://cmfr-phil.org/media-ethics-responsibility/ethics/estimating-crowd-size/) supplies the density values. | The best independent check. Experts call area times density the standard approach ([CJR, quoting Steve Doig](https://www.cjr.org/analysis/how-many-marched-protests-hong-kong-how-guess-crowd-size.php)). The error comes mostly from the assumed fill and from drawing the area wrong. | **Yes for a ceiling** (area × maximum density). Actual fill needs photos or judgment. | **Estimated** (app or researcher) |

### 1.2 Density reference values

These are the Jacobs rule-of-thumb values. The m² conversions are mine.

| Crowd type | Jacobs value | People per m² (converted) | Basis |
|---|---|---|---|
| Loose (arm's length) | 10 sq ft per person | ≈1.1 | estimated (rule of thumb) |
| Dense | 4.5 sq ft per person | ≈2.4 | estimated (rule of thumb) |
| "Mosh pit" | 2.5 sq ft per person | ≈4.3 | estimated (rule of thumb) |

Source for the square-foot values: [CMFR, quoting Poynter](https://cmfr-phil.org/media-ethics-responsibility/ethics/estimating-crowd-size/).

Corroborating figures:

- The peak density measured on part of the 2018 Philadelphia parade route was **5.5 people/m²** (estimated, researchers) ([Inquirer](https://inquirer.com/philly/super-bowl-lii/eagles-parade-attendance-crowd-estimate-philadelphia-super-bowl-20180208.html)).
- A Mexico City outlet uses **4 people/m²** as the practical maximum for a standing concert ([Uno TV](https://www.unotv.com/estados/ciudad-de-mexico/capacidad-zocalo-cdmx-personas-estadios-azteca/)).

### 1.3 Notes that apply to every method

- **Daily total versus peak.** Festivals announce daily admissions. Not everyone is on site at once. ACL told reporters its crowd peaks between 2 and 5 p.m. ([FOX 7](https://fox7austin.com/news/city-prepares-2025-acl-music-festival)). Road friction depends on arrivals and departures, so a daily figure is probably the right unit for the app. Store it as per-day, never as a multi-day total.
- **Participants versus spectators.** For races, the participant count is a real measurement (chip timing). The spectator figure is a round organizer number spread along 26.2 miles.
- **Who is the organizer?** When a city hosts the event (a Zócalo concert, a championship parade), the city's figure is **announced**, not independent.

---

## 2. A rule for putting an open-site event on the map

This is my recommendation. It is a design proposal, not an industry standard.

### Tier A: map it, sized normally

The event meets one of these conditions:

- It has a **Final** figure (gate scans or chip-timed count, published).
- It is **fenced and ticketed**, and has an **Announced** daily cap or count from the organizer or a city contract. The figure must be dated to this year or last year.

Examples: Outside Lands, ACL, Lollapalooza, Summerfest, and marathon *participants*.

### Tier B: map it, flagged as estimated

The event is unfenced, but both of these hold:

1. A crowd **footprint polygon** exists, from a permit map, route map, or OSM park or plaza.
2. There is an **Estimated** figure, either independent or app-computed. App-computed means footprint × at most 2.4 people/m² for a sustained crowd.

If only an Announced figure exists, map the event but cap the size used in friction scoring at **footprint × 4.3 people/m²** (the physical ceiling).

Examples: championship parades, pride marches, free plaza concerts.

### Tier C: stay on `docs/reference/unsized-events.md`

The event lands here if any of these apply:

- There is no footprint and no cap.
- The only figure is an organizer projection.
- The Announced figure is more than 2× the density ceiling and no independent estimate exists. The figure can still be shown, but it should not drive scoring.

### One conflict with the current display order

Your display order is Final → Announced → Estimated. For open sites, that order puts the least reliable figure above the more careful one. In the Zócalo example below, the announced figure is about twice the ceiling.

I suggest keeping the display order but scoring on a separate value: `min(display figure, density ceiling)`. Alternatively, for unfenced events only, rank Estimated above Announced.

---

## 3. Worked examples

All figures are per day unless stated. "App calc" rows are my arithmetic on the cited inputs.

### 3.1 Outside Lands: Bay Area (Golden Gate Park), August 2025

| Method | Figure | Basis | Source |
|---|---|---|---|
| Ticket cap / expected daily | 75,000 per day | announced (organizer, via media) | [KQED](https://www.kqed.org/news/12094244/outside-lands-is-upon-us-where-does-all-that-trash-go) |
| Weekend total | 225,000+ (3 days) | announced (promoters, via media) | [ABC7](https://abc7news.com/amp/post/outside-lands-2025-3-day-music-festival-kicks-off-golden-gate-park-featuring-marriage-good-eats/17476698/) |
| Permit cap (comparison) | 65,000 per day cap proposed for *separate* follow-on concerts at the Polo Fields | announced (city permit proposal) | [Funcheap SF](https://sf.funcheap.com/?p=1455106) |
| Prior year | Not found as a separate figure | — | — |
| Density | Not computed. I did not find a site-area figure. | — | — |

Tier A. Use 75,000 per day, Announced.

### 3.2 Hardly Strictly Bluegrass: Bay Area (Golden Gate Park), October 2025 (free)

| Method | Figure | Basis | Source |
|---|---|---|---|
| Ticket / permit cap | None found. The event is free and unticketed. | — | — |
| Commonly repeated total | 750,000+ over 3 days | announced? The origin is unclear. It appears on an events-listing site, not an organizer release I could find. | [Funcheap SF](https://sf.funcheap.com/?p=1414381) |
| Implied daily | ≈250,000 per day | estimated (app arithmetic) | — |
| Plausibility check | Outside Lands holds about 75,000 per day in the same park, using several of the same meadows (Hellman Hollow, Marx Meadow) plus the Polo Field. | estimated (app reasoning) | [KRON4 venue list](https://digital-release.kron4.com/news/bay-area/outside-lands-music-festival-2025/amp/) |

Tier C until you find an organizer or police figure and a site map. The repeated 750,000 figure implies about 3× Outside Lands' daily crowd on a footprint that looks smaller. I could not resolve this.

### 3.3 Austin City Limits: Austin (Zilker Park), October 2025

| Method | Figure | Basis | Source |
|---|---|---|---|
| Ticket cap / expected daily | 75,000 per day | announced (organizers) | [FOX 7](https://www.fox7austin.com/news/2025-acl-music-festival-travelers-flocking-austin-from-across-country) |
| Season total | 450,000 (6 days) | announced (via Wikipedia, citing coverage) | [Wikipedia](https://en.wikipedia.org/wiki/Austin_City_Limits_Music_Festival) |
| Transit side-signal | Airport expected about 35,000 arriving passengers on peak days | estimated (airport projection) | [FOX 7](https://fox7austin.com/news/city-prepares-2025-acl-music-festival) |
| Density (app calc) | Site of about 46 acres ≈ 186,000 m², so 75,000 ÷ 186,000 ≈ **0.40 people/m²** averaged over the site | estimated (app) | Site area from [Patch](https://patch.com/texas/downtownaustin/austin-city-limits-music-festival-logistical-guide-attendees) |

Tier A. The density check passes easily, because 0.4/m² is far below loose-crowd density. Caveat: the 46-acre figure comes from an older article, about the 2017 edition.

### 3.4 Lollapalooza: Chicago (Grant Park), July–August 2025

| Method | Figure | Basis | Source |
|---|---|---|---|
| Contract cap | 115,000 per day, a limit set in the city contract extension after the 2022 festival | announced (city contract, via Chicago Tribune) | [Tribune via Recorder](https://www.recorderonline.com/features/entertainment_news/lollapalooza-posts-2026-schedule-by-day/article_846cd201-1fc2-52e3-b537-24defb34ef0c.html) |
| Post-event figure | About 115,000 per day | announced (organizers) | [Digital Music News](https://www.digitalmusicnews.com/?p=326312) |
| Implied total | 460,000 (4 days) | estimated (app arithmetic) | — |

Tier A. The post-event figure equals the cap exactly. That is consistent with a sell-out, but it also shows the "attendance" figure is probably the cap restated, not a count.

### 3.5 Summerfest: Milwaukee (Henry Maier Festival Park), June–July 2026

| Method | Figure | Basis | Source |
|---|---|---|---|
| Season figure, 2026 | 568,711 (9 days) | announced (Milwaukee World Festival). The figure is precise but not independently verified. | [BizTimes](https://biztimes.com/summerfest-attendance-dipped-5-6-this-year-for-nine-day-festival/?amp=1) |
| Prior year, 2025 | 602,231 (9 days) | announced | [BizTimes](https://biztimes.com/summerfest-attendance-up-8-3-this-year/) |
| Daily average, 2026 | ≈63,190 per day | estimated (app arithmetic) | — |

Tier A. Note that the grounds are permanent and gated. This is closer to a venue than an open site.

### 3.6 Chicago Marathon: Chicago, October 2025

| Method | Figure | Basis | Source |
|---|---|---|---|
| Finishers | 54,383 | measured (chip timing, as published by organizers) | [AIMS](https://aims-worldrunning.org/articles/2968-chicago-marathon-worth-755-million-for-city.html) |
| Participants, from an economic-impact study | 55,744 | announced (organizer-commissioned study) | [NBC Chicago](https://www.nbcchicago.com/news/sports/chicago-marathon/2025-chicago-marathon-broke-record-for-economic-impact-study-finds/3907605/?amp=1) |
| Pre-race expected field | More than 53,000 | announced | [MarathonGuide release](https://www.marathonguide.com/pressreleases/event-record-160000-people-apply-for-the-2025-bank-of-america-chicago-marathon) |
| Spectators | 1.7 million | announced (sponsor release boilerplate) | [Bank of America newsroom](https://newsroom.bankofamerica.com/content/newsroom/press-releases/2025/10/chicago-cements-its-title-as-the-city-of-records.html) |
| Spectators | Nearly 1.5 million | announced (via NBC Chicago) | [NBC Chicago](https://www.nbcchicago.com/news/sports/chicago-marathon/2025-bank-of-america-chicago-marathon-results-full-list-of-winners-in-each-group/3837606/?amp=1) |
| Spectators | More than a million | announced (sponsor release boilerplate) | [Bank of America alumni page](https://alumni.bankofamerica.com/home/articles/2025-chicago-marathon-record) |

Tier A for participants. Spectator figures range from 1.0 to 1.7 million, all from organizer-side sources. Do not score on them.

### 3.7 Boston Marathon: Boston, April 2025

| Method | Figure | Basis | Source |
|---|---|---|---|
| Field cap | 30,000 | announced (BAA) | [Boston Globe](https://www.bostonglobe.com/2024/09/24/sports/boston-marathon-2025-acceptances/) |
| Finishers | 28,487 | measured (BAA) | [BAA](https://www.baa.org/races/boston-marathon/celebrate-2025) |
| Spectators | About half a million | estimated? The student-paper source does not say who estimated it. | [Berkeley Beacon](https://berkeleybeacon.com/heres-everything-you-need-to-know-for-marathon-monday-2025) |

Tier A for participants. A secondary statistics page gives 28,284 finishers. I treated the BAA's own page as authoritative (see the self-audit).

### 3.8 NYC Pride March: New York, June 2025

| Method | Figure | Basis | Source |
|---|---|---|---|
| Pre-event projection | About a million expected | announced/projection (via NBC New York; the source of the projection is not named) | [NBC New York](https://www.nbcnewyork.com/news/local/nyc-pride-parade-route-2025-start-time/6318442/?amp=1) |
| Post-event | More than a million | announced? (ABC7, a sponsor of the event; method not stated) | [ABC7](https://abc7ny.com/16797700) |
| Blog claim | 2.5 million spectators, 75,000 marchers | unclear origin | [The Homo Culture](https://thehomoculture.com/nyc-pride-2025-unstoppable-celebration/) |
| Density | Not computed. A route polygon and a fill assumption are needed. | — | — |

Tier B once you draw the route footprint. Until then, Tier C.

### 3.9 Eagles championship parade: Philadelphia, February 2025 (with the 2018 benchmark)

| Method | Figure | Basis | Source |
|---|---|---|---|
| City projection, 2025 | More than 1 million expected | announced (city) | [6abc](https://6abc.com/amp/post/when-is-philadelphia-eagles-super-bowl-parade-2025-team-drops-hint-social-media/15887194/) |
| Transit, 2025 | About 320,000 riders on the Broad Street and Market-Frankford lines | measured (SEPTA). Riders may mean trips, which could double-count round trips. | [Inquirer](https://inquirer.com/transportation/septa-crowds-fifa-world-cup-mlb-all-star-250-anniversary-us-20250304.html) |
| Transit, 2025 | More than 400,000 moved "in and out" | measured/announced (SEPTA). It is unclear whether this counts people or trips. | same |
| Transit, 2025 | PATCO expected about 80,000 riders | estimated (agency projection) | [PhillyVoice](https://phillyvoice.com/septa-eagles-super-bowl-championship-parade-regional-rail-broad-street-market-frankford-patco) |
| Retrospective, 2025 | SEPTA's year-end page says estimates put attendance over one million | announced (agency; repeats the projection) | [SEPTA](https://wwww.septa.org/news/25-in-2025/) |
| Density, 2018 parade | Close to 700,000, versus 2 million in unofficial projections | estimated (Manchester Metropolitan University researchers) | [Inquirer](https://inquirer.com/philly/super-bowl-lii/eagles-parade-attendance-crowd-estimate-philadelphia-super-bowl-20180208.html) |

Tier B. The 2018 density study is the strongest independent anchor in this whole set. I found no independent density study for 2025.

### 3.10 Shakira at the Zócalo: Mexico City, 1 March 2026 (free)

| Method | Figure | Basis | Source |
|---|---|---|---|
| Official figure | 400,000. The Head of Government said the crowd stretched from the Zócalo to the Monumento a la Revolución. | announced (city government, co-organizer with Grupo Modelo) | [Posta](https://www.posta.com.mx/cdmx/shakira-rompe-record-en-el-zocalo-cdmx-mas-de-400-mil-fans-vibran-en-concierto-historico/vl2171271), [Merca2.0](https://www.merca20.com/?p=12556527) |
| Density ceiling, plaza only | 46,800 m² × 4/m² = 187,200 | estimated (media calculation) | [Uno TV](https://www.unotv.com/estados/ciudad-de-mexico/capacidad-zocalo-cdmx-personas-estadios-azteca/) |
| Density ceiling, plaza plus adjacent streets | About 220,000 | estimated (media calculation) | same |
| Prior-year comparison | Los Fabulosos Cadillacs 2023: 300,000. Grupo Firme 2022: 280,000. | announced (city) | [Uno TV list](https://www.unotv.com/estados/ciudad-de-mexico/eventos-mas-asistentes-zocalo-cdmx/) |

Tier B, with the scoring size capped near 187,000–220,000 *unless* you can map the claimed screen corridor to the Monumento. I did not verify that corridor's area.

---

## 4. Disagreements

### 4.1 Documented gaps

| Event | Organizer or official figure | Independent or density figure | Ratio | Basis of the independent side |
|---|---|---|---|---|
| Eagles parade 2018 (Philadelphia) | 2 million (unofficial projections) | Close to 700,000 | ≈2.9× | estimated (university researchers) ([Inquirer](https://inquirer.com/philly/super-bowl-lii/eagles-parade-attendance-crowd-estimate-philadelphia-super-bowl-20180208.html)) |
| Grupo Firme 2022 (Zócalo) | 280,000 | Implies about 6 people/m² over the plaza; ceiling 187,000–220,000 | ≈1.3–1.5× | estimated (media) ([N+](https://www.nmas.com.mx/ciudad-de-mexico/cuantas-personas-caben-en-el-zocalo-cdmx-asi-se-puede-calcular-en-2023/), [Uno TV](https://www.unotv.com/estados/ciudad-de-mexico/capacidad-zocalo-cdmx-personas-estadios-azteca/)) |
| Shakira 2026 (Zócalo) | 400,000 | Ceiling 187,000–220,000 | ≈1.8–2.1× | estimated (media ceiling). The claimed area was larger and is unmeasured. |
| Eagles parade 2025 | More than 1 million (city) | About 320,000 transit riders on two lines | Not a ratio. It is a partial lower bound only. | measured (SEPTA) |

Counterpoint: in its own hands-on test, N+ packed 7.25 people/m² into a marked square of the plaza. A plaza-wide crowd at that density would exceed the official figures. Density ceilings are therefore sensitive to the value you pick. The 4/m² ceiling is a safety-oriented norm, not a physical maximum ([N+](https://www.nmas.com.mx/ciudad-de-mexico/cuantas-personas-caben-en-el-zocalo-cdmx-asi-se-puede-calcular-en-2023/)).

### 4.2 Recurring patterns

These are my synthesis of the cases above.

1. **Projections become results.** The Eagles 2025 figure was a pre-event projection, and the agency's year-end page later restated it as an estimate. The KC Chiefs 2024 parade was reported the same way: city officials said the crowd *could* top 1 million ([Sports Business Daily, citing AP](https://www.sportsbusinessdaily.com/Daily/Closing-Bell/2024/02/14.aspx)).
2. **The same organizer gives different numbers.** Chicago Marathon spectators appear as more than 1 million, nearly 1.5 million and 1.7 million in organizer and sponsor material for the same race. That is a 70% spread with no independent check.
3. **The area grows.** The Shakira figure covered a corridor well beyond the plaza. Any density check needs the same area the claim uses.
4. **Fenced events agree, but only because nobody checks.** For Lollapalooza, ACL and Outside Lands, the announced daily figure equals the cap or the pre-event expectation. I found no independent count to compare. Agreement here means no conflicting source exists. It does not confirm the count.
5. **Free events in the same space.** Hardly Strictly's repeated 250,000 per day is about 3× Outside Lands' fenced 75,000 per day in the same park. No independent count exists for either.

**How big are the gaps?** In the small set of open-site cases with an independent check, official figures ran about 1.3× to 3× the density-based figure. Five cases is too few to generalize from, so treat 2× as a working prior, not a measured rate.

---

## Self-audit

### Thin evidence or guesses

| # | Claim | Why it is thin | Check here |
|---|---|---|---|
| 1 | The tier rule and the 2.4/m² and 4.3/m² thresholds | My design proposal, built on Jacobs rules of thumb, not a validated standard | [CMFR on Jacobs](https://cmfr-phil.org/media-ethics-responsibility/ethics/estimating-crowd-size/) |
| 2 | "Official figures run 1.3–3× density figures" | Based on 3–4 cases only | Section 4 links |
| 3 | Hardly Strictly's 750,000 figure | Origin unknown. Found only on an events-listing site. I found no organizer release or police estimate. | [Funcheap SF](https://sf.funcheap.com/?p=1414381). Also search hardlystrictlybluegrass.com for any attendance statement. |
| 4 | Hardly Strictly's footprint being smaller than Outside Lands' | My inference from the venue lists, not from measured areas | Compare the official 2025 maps for both festivals |
| 5 | ACL site of 46 acres | From an older article, about the 2017 edition. The site may have changed. | [Patch](https://patch.com/texas/downtownaustin/austin-city-limits-music-festival-logistical-guide-attendees) |
| 6 | Outside Lands' 75,000 per day being a permit cap | Sources say "expected" or "attend". I did not find the permit text itself. The 65,000 cap I found applies to *other* concerts. | [Funcheap SF](https://sf.funcheap.com/?p=1455106). Search SF Rec & Park Commission agendas. |
| 7 | ACL's 75,000 per day being a contractual cap | Wikipedia lists it as "capacity". I did not see it in the 2025 city contract. | [Axios on the contract](https://www.axios.com/local/austin/2026/10/04/acl-fest-zilker-mud-austin) |
| 8 | Lollapalooza's 115,000 cap | Reported via a syndicated Chicago Tribune story, not the contract | [Recorder (Tribune syndication)](https://www.recorderonline.com/features/entertainment_news/lollapalooza-posts-2026-schedule-by-day/article_846cd201-1fc2-52e3-b537-24defb34ef0c.html) |
| 9 | SEPTA's 320,000 and 400,000+ | Unclear whether these are people or trips (a round trip may count twice) | [Inquirer](https://inquirer.com/transportation/septa-crowds-fifa-world-cup-mlb-all-star-250-anniversary-us-20250304.html) |
| 10 | SEPTA URL with four w's (`wwww.septa.org`) | Reproduced exactly as the search index returned it. It may be a redirect or a typo. Try `https://www.septa.org/news/25-in-2025/` if it fails. | [SEPTA](https://wwww.septa.org/news/25-in-2025/) |
| 11 | Boston finishers: 28,487 versus 28,284 | The BAA page and a secondary statistics page disagree. I used the BAA page. | [BAA](https://www.baa.org/races/boston-marathon/celebrate-2025) |
| 12 | Boston's "half a million spectators" | Student paper, no stated estimator | [Berkeley Beacon](https://berkeleybeacon.com/heres-everything-you-need-to-know-for-marathon-monday-2025) |
| 13 | NYC Pride's 2.5 million | Blog, unclear source. The ABC7 figure comes from an event sponsor. | [The Homo Culture](https://thehomoculture.com/nyc-pride-2025-unstoppable-celebration/), [ABC7](https://abc7ny.com/16797700) |
| 14 | The area of the Zócalo-to-Monumento corridor | Not measured. That is why the Shakira ratio is a range against the plaza ceiling, not a true comparison. | [Uno TV](https://www.unotv.com/estados/ciudad-de-mexico/capacidad-zocalo-cdmx-personas-estadios-azteca/) |
| 15 | Permit open data | Verified only that Chicago's dataset description includes estimated attendees. Seattle's fields are unchecked. Other metros not searched. | [Chicago (data.gov)](https://catalog-beta.data.gov/dataset/chicago-park-district-event-permits), [Seattle](https://catalog.data.gov/dataset/special-events-permits) |
| 16 | Summerfest figures being gate counts | Precise but organizer-published. I found no statement of method. | [BizTimes 2026](https://biztimes.com/summerfest-attendance-dipped-5-6-this-year-for-nine-day-festival/?amp=1) |

### Gaps in coverage

- The 10 examples cover 7 of your 26 metros: Bay Area, Austin, Chicago, Milwaukee, Boston, New York, Philadelphia and Mexico City. Kansas City appears only in Section 4.
- I did not research Toronto, Vancouver, Montreal, New Orleans (Mardi Gras), Las Vegas (New Year's Eve), or the remaining US metros.
- **Final** headcounts: I found none for any open-site event. The marathon finisher counts are Final only for participants.

### Example to open in a browser first

Start with the [2018 Inquirer story on the Eagles parade count](https://inquirer.com/philly/super-bowl-lii/eagles-parade-attendance-crowd-estimate-philadelphia-super-bowl-20180208.html). It is the clearest case of an independent density estimate set against an official-style claim. Then compare it with the [Uno TV Zócalo capacity calculation](https://www.unotv.com/estados/ciudad-de-mexico/capacidad-zocalo-cdmx-personas-estadios-azteca/).
