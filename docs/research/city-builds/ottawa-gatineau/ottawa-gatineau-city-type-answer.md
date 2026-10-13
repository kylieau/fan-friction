# Ottawa–Gatineau: event travel evidence and city-type assessment

**Research date:** 12 October 2026 (sources accessed 12 October 2026).
**Purpose:** assess Fan/Friction's existing city settings (`sprawl`, `hub`, `transit`) and fallback car shares (0.85 / 0.85 / 0.4) against public evidence of how people actually reach event venues in Ottawa–Gatineau. No new constants, flags, code or personal-rating tuning are proposed.
**Companion venue answer:** not available in this conversation. Venues were enumerated independently below, and coverage gaps are named.

### How to read the numbers

| Label | Meaning |
|---|---|
| **Measured** | Observed counts or surveys of event attendees (or ticket holders) at that venue. |
| **Derived** | Arithmetic on a measured figure (shown step by step). |
| **Projected** | Consultant/agency forecasts for a future condition. |
| **Estimated** | My transparent estimate from local evidence or a comparison; assumptions, range and confidence are shown. |
| **Unknown** | No defensible basis; the current fallback that would provisionally apply is named. |
| **Background** | Ordinary daily travel (not event travel). Never used directly as an event split. |

**Car-involved share** (the recommended value) counts private car, carpool, drop-off, taxi/rideshare, *and* trips where the attendee drove to a remote lot or park-and-ride and then rode a shuttle or bus. **Car-to-venue share** (vehicles arriving at the venue's own approaches) is shown separately where it differs, because Gridlock pressure near the venue depends more on the second figure. All shares are of *people* (attendees or ticket holders as stated), not vehicles, unless labelled otherwise.

---

## 1. Background travel context (not event travel)

The TRANS 2022 Origin-Destination Survey (Fall 2022, weekday 24-hour diaries, 69,480 people, 162,243 trips) is the best regional baseline. It is **background only**.

| Indicator (Fall 2022 weekday, population 5+) | Value | Source |
|---|---|---|
| Study area population (City of Ottawa + Gatineau CMA) | ~1,365,600 (Ottawa ~1,014,400; Gatineau CMA ~351,200) | [TRANS 2022 Preview Report, Table 1](http://www.ncr-trans-rcn.ca/wp-content/uploads/2024/10/TRANS_2022_OD_Preview_Report_EN.pdf) |
| Auto driver share of all daily trips | 56% | [TRANS 2022 Preview, §5.1](http://www.ncr-trans-rcn.ca/wp-content/uploads/2024/10/TRANS_2022_OD_Preview_Report_EN.pdf) |
| Auto passenger share | 15% (auto total 71%) | same |
| Public transit share | 8% (down from 13% in 2011) | same |
| Walk + bike/micromobility | 17% | same |
| Households with ≥1 vehicle | 86% Ottawa, 92% Gatineau CMA | [TRANS 2022 Preview, Table 5](http://www.ncr-trans-rcn.ca/wp-content/uploads/2024/10/TRANS_2022_OD_Preview_Report_EN.pdf) |
| Jobs per resident worker, Gatineau CMA | 0.90 (net exporter of workers to Ottawa) | [TRANS 2022 Preview, Table 4](http://www.ncr-trans-rcn.ca/wp-content/uploads/2024/10/TRANS_2022_OD_Preview_Report_EN.pdf) |

Two method notes matter for this answer:

1. TRANS assigns any trip involving transit to the transit mode, even if the person drove to a park-and-ride ([TRANS 2022 Preview, footnote 34](http://www.ncr-trans-rcn.ca/wp-content/uploads/2024/10/TRANS_2022_OD_Preview_Report_EN.pdf)). That is the opposite of the car-involved rule required here, so TRANS transit shares overstate non-car travel in Fan/Friction terms.
2. The survey covers weekdays only, while many events are evenings and weekends. Recreation trips are a minority of trips (recreation, dining and social combined were about 13% of all trips), so the 71% auto figure describes commuting-heavy weekday travel, not event crowds.

---

## 2. Boundary analysis

### 2.1 What the evidence supports

| Geography | Status | Evidence |
|---|---|---|
| City of Ottawa (incl. Kanata, Orléans, Nepean, Barrhaven) | **Core** | Kanata, Orléans, Nepean and Barrhaven are parts of the amalgamated City of Ottawa, not separate municipalities. CTC event routes run from Orléans (405) and Barrhaven (406) ([OC Transpo CTC page](https://octranspo.com/en/ottawa-destinations/canadian-tire-centre)). |
| Ville de Gatineau (incl. Hull, Aylmer, Gatineau sectors) | **Core** | Hull and Aylmer are sectors of the merged Ville de Gatineau. Redblacks tickets include free STO travel ([Redblacks transportation](https://www.ottawaredblacks.com/redblacks-transportation/)); the 2014 Lansdowne plan ran STO shuttles from five Gatineau points ([OSEG 2014 plan](https://www.ottawaredblacks.com/2014/06/16/the-game-plan-to-get-down-to-lansdowne-transportation-plans-for-fans-unveiled/)); 5 of 17 free Redblacks park-and-ride lots were in Gatineau in 2014 ([CBC 2014](https://www.cbc.ca/news/canada/ottawa/how-to-get-to-td-place-on-redblacks-game-night-1.2710238)); Bluesfest sells a shuttle from a lot on rue Eddy in Hull ([Ottawa Citizen via Yahoo, 2026](https://www.yahoo.com/news/articles/ottawa-bluesfest-2026-know-080000515.html)). |
| MRC des Collines-de-l'Outaouais (Chelsea, Cantley, La Pêche, L'Ange-Gardien, Pontiac, Val-des-Monts) | **Core (commuting)** | Part of the TRANS study area since before 2011 ([TRANS 2022 Preview §1.1](http://www.ncr-trans-rcn.ca/wp-content/uploads/2024/10/TRANS_2022_OD_Preview_Report_EN.pdf)). No event-audience data found. |
| Rest of Gatineau CMA (Thurso, Val-des-Bois, Bowman, etc.) | **Edge** | Added to TRANS in 2022; about 0.6% of study-area population ([TRANS 2022 Preview](http://www.ncr-trans-rcn.ca/wp-content/uploads/2024/10/TRANS_2022_OD_Preview_Report_EN.pdf)). |
| Ontario NCR edge: Mississippi Mills (Almonte), Carleton Place, Russell | **Edge** | Inside the NCR but excluded from the TRANS study area ([TRANS 2022 Preview, footnote 4](http://www.ncr-trans-rcn.ca/wp-content/uploads/2024/10/TRANS_2022_OD_Preview_Report_EN.pdf)). |
| Ottawa Valley (Arnprior, Renfrew, Pembroke) | **Edge, audience only** | Reported as a CTC-oriented fan base in coverage of the LeBreton deal ([The Hockey News, 2024](https://thehockeynews.com/nhl/ottawa-senators/latest-news/report-ottawa-senators-have-reached-an-agreement-with-the-ncc-to-build-a-new-arena-at-lebreton-flats)) — commentary, not data. |
| Counties (Lanark, Renfrew, Prescott-Russell, Leeds-Grenville; MRC Papineau, MRC Pontiac) | **Not assessed with data** | No public event-audience or event-travel evidence found; treat as outside the combined event metro pending evidence. |

### 2.2 Cross-river test

The evidence supports treating Ottawa and Gatineau as one event pool **for major Ottawa-side events**: ticket-integrated STO fares, Gatineau shuttle lots and bridge closures for LeBreton events (Canada Day 2026 closed Chaudière and Portage bridges to traffic and the Alexandra Bridge southbound — [CBC, 2026](https://www.cbc.ca/news/canada/ottawa/canada-day-ottawa-open-closed-change-road-business-9.7244058)) show organizers plan for Quebec-origin attendees and cross-river approaches.

The reverse direction is **weaker**. Olympiques tickets include free STO travel only, with no OC Transpo integration found ([STO](https://sto.ca/en/useful-information/events/olympiques-de-gatineau)). No attendee-origin data was found for any Gatineau venue. Recommendation: one combined metro, but expect Gatineau venues to draw a more local audience.

**Recommended boundary:** City of Ottawa + Ville de Gatineau + MRC des Collines-de-l'Outaouais (the pre-2022 TRANS area; the 2022 area, which adds only ~0.6% more population, covers roughly 97–99% of NCR population per [TRANS 2022 Preview §1.2](http://www.ncr-trans-rcn.ca/wp-content/uploads/2024/10/TRANS_2022_OD_Preview_Report_EN.pdf)). Edge, not core: the rest of the Gatineau CMA, Mississippi Mills, Carleton Place, Russell, and Ottawa Valley towns.

---

## 3. Venue and event inventory (independently enumerated)

Capacities are by configuration and are **not additive** across configurations of the same room.

| ID | Verified current name | Municipality / sector | Configuration(s) | Capacity | Status Oct 2026 | Source |
|---|---|---|---|---|---|---|
| V1 | Canadian Tire Centre (CTC) | Ottawa (Kanata) | NHL hockey / concert | ~18,600 / ~20,500 (conflict: 20,000) | Active; Senators, Black Bears (NLL) | [613today](https://613today.ca/places/canadian-tire-centre); [Senators 2026 additions](https://www.ctvnews.ca/ottawa/article/its-going-to-take-some-time-sens-owner-says-lebreton-flats-arena-is-moving-along-slowly-but-surely/) |
| V2 | TD Place Stadium | Ottawa (Glebe, Lansdowne) | CFL football | ~24,000 (north stands 14,028) | Active; north stands to be demolished after the 2027 season | [613today](https://www.613today.ca/things-to-do/best-sports-venues-ottawa); [Momentum TIA via OOECA](https://ottawaeast.ca/report/lansdowne-2025-02/); [3DownNation](https://3downnation.com/2025/11/07/ottawa-city-council-approves-lansdowne-2-0-north-side-stand-revitalization-for-redblacks/) |
| V3 | TD Place Arena | Ottawa (Lansdowne) | Hockey/basketball/concert | 9,500 (conflict: 9,800) | Active; to be replaced | [613today](https://www.613today.ca/things-to-do/best-sports-venues-ottawa); [OOECA](https://ottawaeast.ca/report/lansdowne-2025-02/) |
| V4 | Lansdowne 2.0 event centre (name TBD) | Ottawa (Lansdowne) | Hockey / concert | 6,600 / 7,000+ (conflicts: 5,500 seats + 1,000 standing; 5,850) | Under construction; target July 2028 | [City of Ottawa, Nov 2025](https://www.ottawa.ca/en/city-hall/city-news/newsroom/council-approves-lansdowne-20-redevelopment-plan); [Capital Current](https://capitalcurrent.ca/ottawa-approves-lansdowne-2-0-development-in-narrow-city-council-vote/); [CBC](https://www.cbc.ca/news/canada/ottawa/lansdowne-2-0-approved-whats-next-9.6973944) |
| V5 | Ottawa Stadium | Ottawa (Overbrook) | Baseball / concert | 10,278 (conflict: 10,332) / 15,000 | Active; Ottawa Titans | [Wikipedia](https://en.wikipedia.org/wiki/Ottawa_Stadium) (secondary) |
| V6 | Centre Slush Puppie | Gatineau (Gatineau sector) | QMJHL hockey | 4,000 (conflict: 4,080) | Active; Olympiques | [Architecture49](https://architecture49.com/en/portfolio/projects/complexe-4-glaces/); [QMJHL Arena Guide](https://qmjhlarenaguide.com/olympiques.htm) |
| V7 | Hard Rock LIVE (Hard Rock Hotel & Casino Ottawa) | Ottawa (Albion Rd, south) | Seated / standing | 1,900 / 2,200 (conflicts: 1,800; 2,000) | Opened July 2025 | [USITT/Scéno Plus](https://www.usitt.org/news/sceno-plus-design-new-theatre-hard-rock-hotel-casino-ottawa); [Hard Rock](https://casino.hardrock.com/ottawa/newsroom/2025/06/hard-rock-hotel-and-casino-ottawa-announces-iconic-canadian-lineup-for-grand-opening-weekend) |
| V8 | Théâtre du Casino du Lac-Leamy | Gatineau (Hull) | Theatre | ~1,100 | Not independently verified | [613today](https://www.613today.ca/places/hard-rock-live) (secondary) |
| E1 | Ottawa Bluesfest | Ottawa (LeBreton Flats) | Multi-stage open site | 290,000 total over 9 nights (2026) | 9–19 July 2026 | [Wikipedia](https://en.wikipedia.org/wiki/Ottawa_Bluesfest) (secondary); [City of Ottawa](https://ottawa.ca/en/city-hall/city-news/newsroom/take-transit-ottawa-bluesfest-and-avoid-traffic-impacts-1) |
| E2 | Canada Day (national programming) | Ottawa (LeBreton Flats, Parliament area) + Hull street party | Open site | No reliable attendance found | 1 July annually | [CBC 2026](https://www.cbc.ca/news/canada/ottawa/canada-day-ottawa-open-closed-change-road-business-9.7244058) |
| E3 | Festival de montgolfières de Gatineau | Gatineau (Parc de la Baie) | Open site | 200,000 total (2025, multi-day) | 2–6 Sept 2026 | [FMG 2025 bilan](https://montgolfieresgatineau.com/wp-content/uploads/2025/12/09.-CMQ-Bilan-2025_FMG_FR.pdf) |

**Below threshold or unverified (coverage gaps):** Meridian Theatres Mainstage (954 seats) and Bronson Centre (900+), both under 1,000 ([613today](https://www.613today.ca/places/hard-rock-live)); NAC Southam Hall, Shaw Centre, EY Centre, Algonquin Commons Theatre, university venues (uOttawa, Carleton), Ottawa Race Weekend, CityFolk, Escapade, Winterlude and the Hull Canada Day party were **not verified** in this research. No 1,000+ venue was identified in the CTC area besides the arena itself.

---

## 4. Venue and event travel tables

### 4.1 Evidence and splits

"Sums to 100?" refers to the person split shown. Where only the car-involved figure is estimated, the component split is left unknown rather than invented.

| ID / setup represented | Private car, carpool, rideshare | Public bus/rail | Dedicated event shuttle | Walk/bike/other | Unclassified | Sums to 100? | Evidence type / date |
|---|---|---|---|---|---|---|---|
| **V1a** CTC, Senators regular season (winter evenings, mixed weekday/weekend) | ~91 (est.) | ~4: **3.2 derived (1999–2000)**, upper bound ~8 (2018) | ~3 private bar/charter shuttles (est.) | ~1 (est.) | ~1 | Yes (estimated components) | Measured ridership, 1999–2000 season ([RMOC report, Sept 2000](https://app06.ottawa.ca/calendar/ottawa/archives/rmoc/Regional_Transit/20Sep00/fncorel.pdf)); service cut 2018 ([CBC](https://amp.cbc.ca/lite/story/1.4894528)) |
| **V1b** CTC, major concerts | ~89 (est.) | ~5: **4.6 derived (1999–2000)** | ~2 (est.) | ~2 (est.) | ~2 | Yes (estimated components) | Same RMOC report |
| **V1c** CTC, family shows / smaller events; Black Bears (NLL) by analogy | ~94 (est.) | ~2: **2.2 derived (1999–2000)** | ~1 (est.) | ~1 (est.) | ~2 | Yes (estimated components) | Same RMOC report; NLL has no data |
| **V2a** TD Place Stadium, Redblacks (summer–fall; Thu–Sun) | ~30 direct to site (est.) | ~38 (est.; observed up to 41) | ~17 park-and-shuttle (est.; ≤ ~20 derived) | ~15 (est.) | 0 | Yes. **Bus + shuttle = 55 measured (2014 season avg)** | Ticket holders, 2014 inaugural season, reported to Transportation Committee ([Ottawa Citizen, reposted](https://www.mulmerservices.ca/post/redblacks-fans-embrace-shuttle-buses-to-go-to-the-games)) |
| **V2b** TD Place Stadium, other events (Atlético Ottawa, concerts) | Unknown | Unknown | Unknown | Unknown | — | No | No event-specific evidence; free transit applies to TD Place ticket holders ([OC Transpo](https://www.octranspo.com/en/our-services/bus-network)) |
| **V3** TD Place Arena (67's, Charge, BlackJacks; winter) | Unknown | Unknown | None found | Unknown | — | No | No measured split found |
| **V4** Lansdowne event centre (from 2028) | Not accessed | Not accessed | — | Not accessed | — | — | **Projected** TIA exists but full text not accessed; consultant says no new demand ([Momentum TIA via OOECA](https://ottawaeast.ca/report/lansdowne-2025-02/)) |
| **V5** Ottawa Stadium, Titans (summer) | Unknown | Unknown | None | Unknown | — | No | No data |
| **V6** Centre Slush Puppie, Olympiques (winter) | Unknown | Unknown | None | Unknown | — | No | No data |
| **V7** Hard Rock LIVE (concerts) | Unknown | Unknown | None found | Unknown | — | No | No data |
| **V8** Lac-Leamy theatre | Unknown | Unknown | — | Unknown | — | No | No data |
| **E1** Bluesfest (July evenings, 9 nights) | Unknown | Unknown | Hull lot shuttle (paid) | Unknown | — | No | No survey found |
| **E2** Canada Day (1 July) | Unknown | 246,000 Line 1 trips (2025) — boardings, not a share | P&R shuttles reported (2026) | Unknown | — | No | [Yahoo/CTV, 2025](https://ca.news.yahoo.com/o-train-set-single-day-193241718.html) |
| **E3** Festival de montgolfières | Unknown | Unknown | Unknown | Unknown | — | No | No data; paid on-site parking listed ([Bonjour Québec](https://www.bonjourquebec.com/fr-ca/repertoire/evenements/festival-de-montgolfieres-de-gatineau/0onn)) |

### 4.2 Recommended car-share values

| ID | Recommended car-involved share | Range | Confidence | Car-to-venue share | Value type | Basis |
|---|---|---|---|---|---|---|
| V1a | **0.92** | 0.85–0.96 | Medium (direction), low (precision) | ~0.91 | Estimated from measured + derived | §5.1 |
| V1b | **0.90** | 0.83–0.95 | Low–medium | ~0.89 | Estimated from measured + derived | §5.1 |
| V1c | **0.94** | 0.88–0.97 | Low | ~0.94 | Estimated (family: derived; NLL: analogy) | §5.1 |
| V2a | **0.52** | 0.40–0.65 | Low–medium | ~0.30 | Estimated from a measured 2014 aggregate | §5.2 |
| V2b | **0.55** | 0.40–0.70 | Low | Unknown | Estimated by local comparison with V2a | No shuttle lots documented; garage policy differs |
| V3 | **0.60** | 0.45–0.75 | Low | Unknown | Estimated by local comparison with V2a | Free transit with ticket; 1,000+ garage spaces open on non-Redblacks days ([TD Place](https://tdplace.ca/parking)) |
| V4 | Unknown | — | — | — | Projected TIA not accessed | V3 value provisionally, as the TIA says it replaces V3 programming |
| V5 | Unknown | (plausibly 0.70–0.90) | — | — | Unknown | Fallback for chosen type (0.85 under `hub`) |
| V6 | Unknown | (plausibly 0.65–0.90) | — | — | Unknown | Fallback 0.85; adjacent Rapibus station and free STO with ticket point lower |
| V7 | **0.93** | 0.85–0.98 | Low | ~0.93 | Estimated | Rural-edge site on Albion Rd; no event transit found in this research |
| V8 | Unknown | — | — | — | Unknown | Fallback 0.85 |
| E1 | **0.35** | 0.20–0.50 | Low | Lower than 0.35 (Hull lot is remote) | Estimated | No public parking at the site, LRT-adjacent, fare included ([Citizen via Yahoo](https://www.yahoo.com/news/articles/ottawa-bluesfest-2026-know-080000515.html)) |
| E2 | Unknown | — | — | — | Unknown | Fallback would be 0.85 (`hub`) or 0.40 (`transit`); evidence points below either but supports no number |
| E3 | Unknown | — | — | — | Unknown | Fallback 0.85 |

### 4.3 Parking, operations and access constraints

| ID | Parking supply and remote arrangements | Event operations, route/closure changes, start/end service | Access constraints and other crowds on approaches |
|---|---|---|---|
| V1 | About 7,000 cars in 9 lots ([Ottawa Citizen, 2020](https://www.pressreader.com/canada/ottawa-citizen/20200404/281539408067437)); conflicting figure 6,500 ([Structurae](https://structurae.net/fr/ouvrages/centre-canadian-tire)). Event lot prices published by the team ([Senators](https://www.nhl.com/senators/arena/parking)). | Routes 404 (Tunney's Pasture), 405 (Orléans), 406 (Barrhaven) run for major events only at regular fare; returns leave ~15 min after the event; regular routes 62/162 are detoured off-site from ~1 h before major events ([OC Transpo](https://octranspo.com/en/ottawa-destinations/canadian-tire-centre)). Senators decline to fund extra service, about $432,000/yr at the time reported ([OBJ](https://obj.ca/?p=62864)). | Two Hwy 417 interchanges (Terry Fox, Palladium) ([Senators](https://www.nhl.com/senators/arena/parking)); ~23 km from Parliament Hill ([CBC](https://www.cbc.ca/lite/story/1.7605973)). Few competing crowds nearby. |
| V2 | Underground garage of 1,000+ spaces ([TD Place](https://tdplace.ca/parking)). **Conflict:** TD Place says the garage closes for Redblacks games; the Redblacks' 2026 page says it is reserved for prepaid passes ([Redblacks](https://www.ottawaredblacks.com/redblacks-transportation/)). Shuttle lots: 17 in 2014 ([CBC](https://www.cbc.ca/news/canada/ottawa/how-to-get-to-td-place-on-redblacks-game-night-1.2710238)); City Hall and Canada Post Riverside in 2024 ([CAA](https://caaneo.ca/magazine/shop/what-know-your-first-ottawa-redblacks-game/)). | Ticket includes OC Transpo, LRT, STO and Para Transpo 3 h before to 3 h after; 450-series routes and shuttles run 2 h before to 90 min after ([Redblacks](https://www.ottawaredblacks.com/redblacks-transportation/)). | Not on LRT; Billings Bridge is the closest station cited by advocates ([Capital Current](https://capitalcurrent.ca/disability-advocates-welcome-plan-for-lansdowne-2-0-event-centre-but-transit-remains-a-hurdle/)). Bank St, Queen Elizabeth Driveway, Glebe streets. Shares approaches with V3 and, from 2028, V4. |
| V3/V4 | Same garage; Lansdowne 2.0 adds event-centre parking by end of 2033 ([City of Ottawa](https://ottawa.ca/en/city-hall/city-news/newsroom/committee-approves-lansdowne-20-redevelopment-plan)). | Free transit for TD Place ticket holders ([OC Transpo](https://www.octranspo.com/en/our-services/bus-network)). | Construction staging 2025–2033. |
| V5 | On-site lots plus overflow across the street; prepaid parking disabled for the May 2026 sellout ([Titans](https://www.ottawatitans.com/getting-here)). | No event routes found. Tremblay Station is a 450 m walk ([Titans](https://www.ottawatitans.com/getting-here)). | Vanier Parkway/Hwy 417 exit 117; shares Line 1 with downtown events. |
| V6 | 800-space garage adjacent ([Architecture49](https://architecture49.com/en/portfolio/projects/complexe-4-glaces/)). | Free STO with Olympiques ticket from 5 p.m. weekdays/all day weekends; not valid for other events; next to Station de la Cité ([STO](https://sto.ca/en/useful-information/events/olympiques-de-gatineau)). | Shares district with Parc de la Baie (E3) in early September. |
| E1 | Lack of site parking; paid shuttle from Hull ([Citizen via Yahoo](https://www.yahoo.com/news/articles/ottawa-bluesfest-2026-know-080000515.html)). | Free transit 3 h before to 2 h after; Pimisi and Bayview stations; more frequent evening Line 1; special westbound buses from Albert at Booth ([City of Ottawa](https://ottawa.ca/en/city-hall/city-news/newsroom/take-transit-ottawa-bluesfest-and-avoid-traffic-impacts-1)); Lines 1 and 2 until midnight on Sundays ([OC Transpo](https://www.octranspo.com/en/news/article/127925-ottawa-bluesfest-127925/)). | Kichi Zībī Mīkan closed between Parkdale and Booth/Portage ([CTV](https://www.ctvnews.ca/ottawa/article/heres-what-you-need-to-know-about-ottawa-bluesfest-at-lebreton-flats/)). Same site as E2 and future Senators arena. |
| E2 | Downtown closures from 6 a.m.; bridge closures ([CBC](https://www.cbc.ca/news/canada/ottawa/canada-day-ottawa-open-closed-change-road-business-9.7244058)). | Free OC Transpo for 24 h from 3 a.m. (2026); in 2025 Line 1 ran about every 3 min after fireworks with ~120 buses on Albert St ([Yahoo/CTV](https://ca.news.yahoo.com/o-train-set-single-day-193241718.html)). | Highest-pressure single day; overlaps Hull festivities. |
| E3 | Paid on-site parking ([Bonjour Québec](https://www.bonjourquebec.com/fr-ca/repertoire/evenements/festival-de-montgolfieres-de-gatineau/0onn)). | Not found. | Gatineau-sector streets near V6. |

---

## 5. Worked inferences

### 5.1 CTC: ridership to share (V1a–V1c)

**Source:** the Sept 2000 regional transit report on the Corel Centre (now CTC) covering the 12 months to 31 May 2000 ([RMOC report](https://app06.ottawa.ca/calendar/ottawa/archives/rmoc/Regional_Transit/20Sep00/fncorel.pdf)).

| Step | Hockey | Major concerts | Family / open house |
|---|---|---|---|
| Reported average passengers "to/from" per event | 1,120 | 1,365 | 160 |
| Reported share of attendance | 3.2% | 4.6% | 2.2% |
| Implied denominator (passengers ÷ share) | ~35,000 | ~29,700 | ~7,300 |
| Interpretation | ~2 × a 17,500 crowd → the 1,120 is **trips both ways**, and 3.2% is a share of attendee trips | ~2 × ~14,800 | ~2 × ~3,600 |
| Person share if riders return by bus | ≈ 3.2% | ≈ 4.6% | ≈ 2.2% |

Cross-check: 51,500 annual hockey trips ÷ 1,120 per game ≈ 46 games, consistent with a regular season plus a few extra dates. Baseline subtraction is not needed because these were dedicated event routes; regular route 62/162 riders are not included, which adds some uncertainty upward.

**Is it still valid?** Partly. The 2018 review cut service from 26 to 19 bus trips per game because ridership did not support it ([CBC](https://amp.cbc.ca/lite/story/1.4894528)). If those were trips per direction and each bus carried at most ~75 people (assumption), the 2018 ceiling is ~1,400 riders, about 10% of the ~14,100 average crowd that season (same source). Line 1 opened in 2019, Senators attendance rebounded to an average of 17,123 in 2025–26 ([Wikipedia, secondary](https://en.wikipedia.org/wiki/2025%E2%80%9326_Ottawa_Senators_season)), and the parking supply (~7,000 cars) at an assumed 2.3–2.7 people per car could carry ~16,000–19,000 people, essentially a full house. Every line of evidence points to car use around or above 90%.

**Park-and-ride treatment:** the 400 routes were designed around free park-and-ride lots ([RMOC report](https://app06.ottawa.ca/calendar/ottawa/archives/rmoc/Regional_Transit/20Sep00/fncorel.pdf)), so some bus riders drove first. Assuming a quarter did (no measurement exists) adds about 1 point to the car-involved figure; it does not change the car-to-venue figure.

### 5.2 TD Place Stadium, Redblacks (V2a)

**Source:** the 2014 inaugural-season review reported to the City's Transportation Committee. OSEG targeted 36% park-and-shuttle and 20% OC Transpo; the season average was 55% of **ticket holders** arriving by shuttle or conventional bus, conventional transit reached as high as 41% on some nights, and shuttle trips fell from 186 on opening day to 81 at the final game. OSEG proposed cutting off-site parking from 4,200 to 2,000 spaces, which was still more than the average used ([Ottawa Citizen article, reposted by a shuttle operator](https://www.mulmerservices.ca/post/redblacks-fans-embrace-shuttle-buses-to-go-to-the-games)). The original committee report could not be retrieved; this is a secondary repost of a news article.

| Step | Value | Basis |
|---|---|---|
| Shuttle + conventional bus | 55% | Measured (2014 average) |
| Shuttle-lot vehicles | < 2,000 on average | Derived from the parking reduction statement |
| Shuttle persons | < ~4,000–5,200 at 2.0–2.6 per car (assumption) → ≤ ~17–21% of a ~24,000 crowd | Derived |
| Conventional transit | 55 − shuttle ≈ 34–41% | Derived; consistent with "as high as 41%" |
| Walk + bike | 10–20% (central 15) | Estimated: walkable Glebe, 285 bike rings ([TD Place](https://www.tdplace.ca/getting-here-td-place/)) |
| Direct car, drop-off, taxi/rideshare | 100 − 55 − walk/bike ≈ 25–35% (central 30) | Estimated remainder |
| Transit riders who drove to park-and-ride | 10–20% of transit riders (≈ 4–8 points) | Assumption; 12 Ottawa + 5 Gatineau free lots existed in 2014 ([CBC](https://www.cbc.ca/news/canada/ottawa/how-to-get-to-td-place-on-redblacks-game-night-1.2710238)) |
| **Car-involved** | 30 + 17 + ~5 ≈ **52%** (range 40–65%) | Estimated |
| Car-to-venue | ≈ 30% | Estimated |

Upward risks for 2026: fewer shuttle lots documented, a garage now reportedly sold to prepaid holders on game days, and lower average crowds (18,136 in 2025, [CFL attendance](https://en.wikipedia.org/wiki/2025_CFL_season); figures are team-reported, [3DownNation](https://dev.3downnation.com/?p=197172)). Before the first game, a survey suggested only 4 in 10 fans planned to use the free services ([CBC 2014](https://www.cbc.ca/news/canada/ottawa/free-buses-shuttles-among-lansdowne-park-traffic-plans-1.2676789)), a plan-vs-observed gap worth noting.

### 5.3 Canada Day: why boardings do not become a share (E2)

Line 1 carried about 246,000 customer trips on Canada Day 2025 ([Yahoo/CTV](https://ca.news.yahoo.com/o-train-set-single-day-193241718.html)). There is no attendance denominator, the count includes non-attendees and transfers, each attendee may make two or more trips, and service was free all day. No baseline (a normal July holiday) was published. Turning this into a mode share would be indefensible, so E2 stays **unknown**.

---

## 6. Regional weighting

Only one configuration per room is used. Multi-day festival totals are excluded from crowd weights. Values use §4.2; where §4.2 says "unknown", the `hub` fallback 0.85 is substituted and flagged.

### 6.1 Capacity-weighted (5,000+ principal configurations)

| Venue / configuration | Weight (capacity) | Car-involved share | Product |
|---|---|---|---|
| V1 CTC, hockey | 18,600 | 0.92 | 17,112 |
| V2 TD Place Stadium, football | 24,000 | 0.52 | 12,480 |
| V3 TD Place Arena | 9,500 | 0.60 | 5,700 |
| V5 Ottawa Stadium, baseball | 10,278 | 0.85 (fallback) | 8,736 |
| **Total** | 62,378 | **≈ 0.71** | 44,028 |

- Excluding the fallback row (V5): **≈ 0.68**.
- Excluding CTC: **≈ 0.61**.
- Adding 1,000+ rooms (V6 4,000 at fallback 0.85, V7 2,200 at 0.93, V8 1,100 at fallback 0.85): ≈ 0.72.

### 6.2 Typical-attendance-weighted

| Event | Weight (typical attendance) | Car-involved share | Product |
|---|---|---|---|
| Senators, 2025–26 average | 17,123 ([Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Ottawa_Senators_season)) | 0.92 | 15,753 |
| Redblacks, 2025 average | 18,136 ([CFL](https://en.wikipedia.org/wiki/2025_CFL_season)) | 0.52 | 9,431 |
| Titans, 2026 average | ~2,400 ([Stadium Journey](https://www.stadiumjourney.com/stadiums/raymond-chabot-grant-thornton-park-ottawa-titans)) | 0.85 (fallback) | 2,040 |
| **Total** | 37,659 | **≈ 0.72** | 27,224 |

- Excluding CTC: **≈ 0.56**.
- Missing: TD Place Arena tenants, CTC concerts, Atlético Ottawa, Olympiques, all theatres; attendance figures are tickets distributed, not people present.

### 6.3 Sensitivity: annual exposure

Senators (41 home games × 17,123) and Redblacks (9 × 18,136 = 163,224 total, [CFL](https://en.wikipedia.org/wiki/2025_CFL_season)) give about 865,000 attendee-visits, of which ≈ **0.84** are car-involved. This is not a crowd and must not be treated as one; it shows that frequency, not size, is what makes CTC dominate the region's event travel.

### 6.4 Does one outlying venue obscure the downtown pattern?

Yes. CTC is the single largest and most frequent fixed crowd and sits at ~0.9, while every downtown or Lansdowne crowd with evidence sits at 0.35–0.60. Removing CTC moves both weighted averages from ~0.71 to ~0.56–0.61. The region is bimodal, and a single average describes neither mode well.

---

## 7. Clusters, shared roads and shared audiences (separate findings)

| Finding type | Finding | Evidence |
|---|---|---|
| Cluster | **LeBreton / downtown / Hull core:** Bluesfest and Canada Day use the same site; the proposed Senators arena is planned there; Hull lot serves Bluesfest. | §3, §4.3 |
| Cluster | **Lansdowne:** stadium + arena now; stadium + event centre from 2028. | [City of Ottawa](https://www.ottawa.ca/en/city-hall/city-news/newsroom/council-approves-lansdowne-20-redevelopment-plan) |
| Cluster | **Kanata (CTC):** isolated; no other 1,000+ room verified nearby. | §3 |
| Cluster | **Gatineau sector:** Centre Slush Puppie and Parc de la Baie. | §3 |
| Shared road | Hwy 417 serves CTC (two interchanges) and Ottawa Stadium (exit 117). | [Senators](https://www.nhl.com/senators/arena/parking); [Titans](https://www.ottawatitans.com/getting-here) |
| Shared road | Kichi Zībī Mīkan, Booth St, Portage/Chaudière bridges serve LeBreton events and cross-river trips. | [CTV](https://www.ctvnews.ca/ottawa/article/heres-what-you-need-to-know-about-ottawa-bluesfest-at-lebreton-flats/); [CBC](https://www.cbc.ca/news/canada/ottawa/canada-day-ottawa-open-closed-change-road-business-9.7244058) |
| Shared transit spine | Line 1 serves Bluesfest (Pimisi/Bayview), Canada Day, CTC Route 404 (Tunney's Pasture) and Ottawa Stadium (Tremblay). | §4.3 |
| Shared audience | OSEG teams share Lansdowne (Redblacks, Atlético, 67's); OSEG is a Titans owner. Senators and Black Bears share CTC. | [Stadium Journey](https://www.stadiumjourney.com/stadiums/raymond-chabot-grant-thornton-park-ottawa-titans); [613today](https://613today.ca/places/canadian-tire-centre) |

No new distance rule or hard-access flags are proposed; these are descriptive.

---

## End 1. Recommended existing city type and rationale

**Recommend `hub` (in between).**

Rationale: Ottawa–Gatineau's event travel is car-dominant overall (weighted car-involved ≈ 0.71–0.72) but has a real transit-and-walk core where Lansdowne and LeBreton crowds fall to roughly 0.35–0.60. The region is not transit-dominant: background travel is 71% auto, and the biggest, most frequent venue is ~0.9. It is not pure sprawl either: its downtown event sites are planned around transit, closures and integrated fares, and they cluster on shared approaches (bridges, Booth St, Bank St, Line 1), which is the spill behaviour `hub` represents.

Because `hub` and `sprawl` share the 0.85 fallback, the choice mainly affects spill. The 0.85 fallback is consistent with suburban rooms (CTC 0.90–0.94, Hard Rock ~0.93) but too high for downtown and Lansdowne crowds; venue-specific overrides (§End 2) are what keep the model honest there.

**Strongest contrary evidence:**

- *For `sprawl`:* CTC dominates annual exposure (≈ 0.84 car-involved for Senators + Redblacks visits); Gatineau vehicle ownership is rising; the downtown Senators arena remains a proposal with no construction date.
- *For `transit`:* Redblacks crowds were 55% bus or shuttle in 2014; Bluesfest has essentially no site parking; Canada Day set a Line 1 record. But much shuttle use is car-involved, and none of these produce a measured car share near 0.4 except, plausibly, Bluesfest and Canada Day.

**Venue exceptions:** V2a, V2b, V3, E1 and E2 should never fall back to 0.85.

## End 2. Car-share values keyed to venue rows

The companion answer's row IDs were not available, so values are keyed to the IDs in §3.

| Row | Value | Range | Type |
|---|---|---|---|
| V1a CTC Senators | 0.92 | 0.85–0.96 | Estimated from **measured** 1999–2000 ridership (derived 3.2%) |
| V1b CTC concerts | 0.90 | 0.83–0.95 | Estimated from **measured** (derived 4.6%) |
| V1c CTC family / Black Bears | 0.94 | 0.88–0.97 | Estimated from **measured** (derived 2.2%) + analogy |
| V2a TD Place Stadium, Redblacks | 0.52 | 0.40–0.65 | Estimated from **measured** 2014 aggregate (55% bus + shuttle) |
| V2b TD Place Stadium, other events | 0.55 | 0.40–0.70 | Estimated (comparison) |
| V3 TD Place Arena | 0.60 | 0.45–0.75 | Estimated (comparison) |
| V4 Lansdowne event centre (2028+) | Use V3 provisionally | — | **Projected** TIA exists; not accessed |
| V5 Ottawa Stadium | Unknown → 0.85 fallback | — | Unknown |
| V6 Centre Slush Puppie | Unknown → 0.85 fallback | — | Unknown |
| V7 Hard Rock LIVE | 0.93 | 0.85–0.98 | Estimated |
| V8 Lac-Leamy theatre | Unknown → 0.85 fallback | — | Unknown |
| E1 Bluesfest | 0.35 | 0.20–0.50 | Estimated |
| E2 Canada Day | Unknown → fallback (0.85 under `hub`) | — | Unknown; fallback known to be too high |
| E3 Festival de montgolfières | Unknown → 0.85 fallback | — | Unknown |

No value in this answer is a directly measured car share; the closest are V1 (measured transit share, 26 years old) and V2a (measured bus-plus-shuttle aggregate, 12 years old).

## End 3. Boundary recommendation and inconsistencies between briefs

**Boundary:** City of Ottawa + Ville de Gatineau + MRC des Collines-de-l'Outaouais as the combined event metro. Edge municipalities identified separately: the rest of the Gatineau CMA, Mississippi Mills (Almonte), Carleton Place, Russell, and Ottawa Valley towns (audience only). Cross-river grouping is supported for Ottawa-side major events; Gatineau-side venues likely draw more local audiences (no origin data).

**Inconsistencies and conflicts found:**

- The brief lists Kanata, Orléans, Nepean, Hull and Aylmer as places to examine; they are sectors of the City of Ottawa (amalgamated) and Ville de Gatineau (merged), not municipalities.
- The companion venue answer was unavailable, so row keys could not be matched.
- "Canadian Tire Centre-area venues": none at 1,000+ were verified.
- Capacity conflicts: CTC concert 20,500 vs 20,000; TD Place Arena 9,500 vs 9,800; event centre 6,600/7,000+ vs 5,500 seats + 1,000 standing vs 5,850; new north stands 12,400 vs 11,200/12,100; Hard Rock LIVE 1,800 vs 1,900 vs 2,000 seats; Ottawa Stadium 10,278 vs 10,332; Centre Slush Puppie 4,000 vs 4,080; CTC parking 7,000 vs 6,500 cars; Bluesfest 290,000 vs an average over 250,000 ([Charlatan](https://charlatan.ca/bluesfest-2026-what-to-know/)).
- Policy conflict: TD Place garage closed vs reserved for prepaid holders on Redblacks game days (§4.3).

## End 4. Data gaps, limitations, source conflicts and inaccessible sources

**Data gaps**

- No current (post-2019, post-LRT) observed mode split for any Ottawa–Gatineau venue was found.
- No attendee-origin data (Ottawa vs Gatineau vs edge) for any venue.
- No event data for TD Place Arena, Ottawa Stadium, Centre Slush Puppie, Hard Rock LIVE, Lac-Leamy, Bluesfest, Canada Day or the balloon festival.
- Theatres, convention halls, universities, Race Weekend, CityFolk, Escapade and Winterlude not verified.
- No weekday vs weekend or winter vs summer splits at any single venue; differences across rows are confounded with venue location.

**Model limitations**

- Car-involved and car-to-venue shares diverge sharply where park-and-shuttle exists (V2a: ~0.52 vs ~0.30). A single car-share value cannot represent both regional driving and near-venue pressure.
- Weighted averages hide bimodality (§6.4).

**Source conflicts and quality**

- See End 3 for capacity and policy conflicts.
- V2a rests on a news article reposted by a shuttle company; the original committee report was not retrieved.
- Several capacities come from Wikipedia or aggregator sites (flagged as secondary in §3).

**Inaccessible or not retrieved**

- Lansdowne 2.0 Event Centre TIA (Momentum, Aug 2024): quoted only via a community association ([OOECA](https://ottawaeast.ca/report/lansdowne-2025-02/)); full text not accessed.
- 2015 Lansdowne Transportation Monitoring committee report and Traffic Services data summaries: listed by a community association ([OSCA](https://oldottawasouth.ca/news/2015/04/20/transportation-around-lansdowne-one-year-in/)), not retrieved.
- Ottawa Citizen originals (paywalled); reposts used instead.
- TRANS 2022 full Travel Analysis Report and 2013 Special Generator Survey: listed on the TRANS site ([TRANS](https://www.ncr-trans-rcn.ca/preview-report-2022-origin-destination-household-travel-survey/)) but not examined.
- No access controls were bypassed.

## End 5. Confirmed transport and venue changes through 2028

| Change | Status | Dates | Suggested re-check |
|---|---|---|---|
| O-Train Line 1 East Extension (Blair–Trim, 5 stations) | **Funded, built, delayed.** Substantial completion 4 Mar 2026; pre-trial running moved to Nov 2026 over a train-control software fix ([CTV](https://www.ctvnews.ca/ottawa/article/oc-transpo-delaying-o-train-east-extension-pre-trial-running-until-november/); [OC Transpo memo](https://glengower.ca/information/memo-update-on-o-train-east-extension/)). At least ~5 weeks from pre-trial start to opening ([CBC](https://www.cbc.ca/news/canada/ottawa/ottawa-east-lrt-otrain-extension-launch-testing-9.7367176)). | Opening no earlier than about Dec 2026 | Dec 2026 and Feb 2027 (watch Route 405 to CTC and 450-series changes) |
| Line 1 west to Algonquin + new Line 3 to Moodie | **Funded, under construction, delayed** to Q3 2027 ([CTV, Mar 2026](https://www.ctvnews.ca/ottawa/article/o-train-east-extension-still-waiting-on-spalling-issue-west-extension-launch-delayed-to-summer-2027/)) | July–Sept 2027 | Jun 2027 (watch CTC Route 404 restructuring) |
| Lansdowne 2.0 Phase 1: event centre replaces TD Place Arena | **Approved and funded** by Council 15–10 on 7 Nov 2025 ([CBC](https://www.cbc.ca/news/canada/ottawa/lansdowne-2-0-approved-in-final-council-vote-9.6969378)); Nov 2025–Jul 2028 ([City of Ottawa](https://www.ottawa.ca/en/city-hall/city-news/newsroom/council-approves-lansdowne-20-redevelopment-plan)) | Opening ~Jul 2028 | After the 2026 municipal election (critics aimed to make it an issue, [CBC](https://www.cbc.ca/news/canada/ottawa/lansdowne-2-0-approved-whats-next-9.6973944)); Q2 2028 |
| Lansdowne 2.0 Phase 2: north stands rebuilt | **Approved.** Nov 2028–Nov 2030; reduced stadium capacity during works ([City of Ottawa](https://www.ottawa.ca/en/city-hall/city-news/newsroom/council-approves-lansdowne-20-redevelopment-plan)) | Starts after 2027 season / Nov 2028 | Q3 2028 (temporary configuration for 2029 season) |
| Hard Rock LIVE (new 1,900/2,200 room) | **Open** since July 2025 ([Hard Rock](https://casino.hardrock.com/ottawa/newsroom/2025/06/hard-rock-hotel-and-casino-ottawa-announces-iconic-canadian-lineup-for-grand-opening-weekend)) | — | Annually |
| Senators arena at LeBreton Flats | **Proposal.** Land purchase agreement signed Aug 2025; zoning, design, approvals and decontamination still to come ([CBC](https://www.cbc.ca/lite/story/1.7605973)); owner said on 8 Oct 2026 progress is slower than he expected ([CTV](https://www.ctvnews.ca/ottawa/article/its-going-to-take-some-time-sens-owner-says-lebreton-flats-arena-is-moving-along-slowly-but-surely/)). Team said initial on-site parking would be needed ([CTV 2024](https://ottawa.ctvnews.ca/ottawa-senators-national-capital-commission-agree-to-build-a-new-arena-at-lebreton-flats-1.7045764)). | No construction or opening date | Oct 2027 |
| Gatineau–Ottawa tramway (TramGO) | **Proposal / planning.** Project office transferred from STO to Mobilité Infra Québec in Feb 2026 ([La Presse](https://www.lapresse.ca/actualites/politique/2026-02-17/gatineau/le-projet-de-tramway-deraille.php)); opening dates of 2032–2035 cited in secondary sources ([Wikipedia](https://en.wikipedia.org/wiki/Gatineau_tramway)) | Not before 2028 | Feb 2027 |
