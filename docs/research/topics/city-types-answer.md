# City type for every metro — research answer

Prepared 12 October 2026 for Fan/Friction. Answers `city-types-prompt.md` in the order it asks for.

## How to read this

Every figure carries one of three labels:

- **measured** — counted or surveyed (turnstile or tap counts, intercept surveys, agency trip counts).
- **announced** — stated by a team, venue, city or transit agency without a published method, or a forecast/target. Forecasts are marked **announced (projection)**.
- **estimated** — my own arithmetic or judgment. Every city-level default drive share in this file is estimated, because no source I found gives a region-wide fan drive share for any of the 26 metros.

"Drive share" here means the share of attendees who arrive in a private car that is parked (driver plus passengers). Rideshare/taxi is excluded unless a source lumps it in (the UW Husky Stadium survey does; I note it). Note that drive share is **not** 100 minus transit share: walking, rideshare and charter buses take a real slice, especially downtown.

Where a cell says "none found", I searched and came up empty. That is not proof nothing exists.

---

## 1. A type per city

### Proposed type set (a small change, not a replacement)

The three types work, but they are fuzzy at the edges and they mix two separate things the friction model needs: how many people bring a car, and where those cars go. I suggest:

1. **Keep the three types, but pin them to drive-share bands** so they are testable: **transit hub** = default drive share under 40%; **mixed** = 40–74%; **car-first** = 75% or more. A city's type is set by the midpoint of its default range.
2. **Add a second field, `parking_pattern`**, because two car-first cities can have very different exit behaviour:
   - `onsite_lots` — cars concentrate in venue lots and leave through a few gates (Arrowhead, NRG, Levi's).
   - `dispersed_garages` — fans park in downtown garages up to a mile out and walk (Nashville's Nissan Stadium, most downtown arenas).
   - `remote_shuttle` — little on-site parking, remote lots plus shuttle or rideshare (Q2 Stadium, Dodger Stadium Express).
   - `walk_from_hotels` — a large visitor share walks from hotels (Las Vegas Strip venues, likely New Orleans).

Why: Las Vegas does not fit any of the three types on its own. Its drive share is low because tourists walk from hotels, not because of transit; and Nashville's Titans fans mostly drive but park across the river downtown, so road friction there looks nothing like Arrowhead's. The second field captures that without inventing more types.

### Type by metro

| Metro | Type | One-line reason |
|---|---|---|
| Atlanta | mixed | MARTA serves Mercedes-Benz Stadium and State Farm Arena; Truist Park is car-only |
| Austin | car-first | Q2 Stadium is parking-constrained but transit share is small |
| Bay Area | mixed | SF venues around half non-auto; Levi's mostly cars |
| Boston | mixed (leans hub) | Fenway/TD Garden on transit; Gillette is car-first; no modern measured split |
| Chicago | mixed | Wrigley is transit-heavy; Soldier Field is about a mile from the nearest CTA stop |
| Columbus | car-first | no measured data found |
| Dallas–Fort Worth | car-first | no measured data found; AT&T Stadium area has no rail |
| Houston | car-first | most NRG fans park on site (2004 team figure) |
| Kansas City | car-first | one daily bus line near Arrowhead; no game shuttles |
| Las Vegas | mixed (`walk_from_hotels`) | about a third of Allegiant crowds expected to walk from the Strip |
| Los Angeles | car-first | Dodger Stadium, SoFi, Rose Bowl are car venues |
| Mexico City | transit hub | Tren Ligero planned to carry about half of Azteca crowds |
| Milwaukee | car-first | no measured data found |
| Minneapolis–St. Paul | mixed | about 20–25% transit at Target Field and U.S. Bank Stadium |
| Montreal | transit hub | Bell Centre sits on the metro/REM; no measured split found |
| Nashville | car-first (`dispersed_garages`) | Titans fans park in garages within a mile and walk |
| New Orleans | mixed (low confidence) | no data; downtown venues with heavy hotel walk-up assumed |
| New York | transit hub | MSG/Barclays majority transit or walk; MetLife is the big exception |
| Philadelphia | mixed | roughly a fifth to a quarter of Eagles crowds on SEPTA |
| Phoenix | car-first | about 2,000 light-rail riders per arena event |
| Sacramento | car-first | up to 11% light rail at Golden 1 Center |
| San Diego | mixed | about 20–24% trolley at Petco Park |
| Seattle | mixed | Husky Stadium only 37% car; Climate Pledge 25% transit |
| Tampa Bay (built as "Tampa", code TPA) | car-first | no measured data found |
| Toronto | transit hub | officials describe transit as the main mode; few lots near venues |
| Vancouver | mixed (could be hub) | SkyTrain-served stadium district; no measured split found |

---

## 2. Evidence: measured and announced mode figures by venue

Grouped by metro. A percentage appears only where the source gives one or where I computed one (labeled estimated, with the assumption stated in the self-audit).

| Metro | Venue | Year | Figure | Label | Source |
|---|---|---|---|---|---|
| New York | Madison Square Garden (Knicks/Rangers) | 2003 | 52% arrived by transit or on foot | announced (reported; original study not located) | [Streetsblog NYC](https://old.nyc.streetsblog.org/?p=259598) |
| New York | Barclays Center (Nets) | c. 2013 | about a quarter of ~15,000 fans arrived by car (Sam Schwartz analysis, relayed second-hand) | announced (second-hand) | [Patch community post](https://patch.com/new-york/prospectheights/transportation-perception-management-part-2) |
| New York | Barclays Center | 2012 | forecast: just under half by subway, about six in ten by transit or walking | announced (projection) | [Streetsblog NYC](https://old.nyc.streetsblog.org/2012/10/01/barclays-center-opening-weekend-traffic-not-a-total-disaster) |
| New York | MetLife Stadium | 2010 | ~10,500 Jets and ~8,000 Giants fans per game by train; just over 10% overall | measured (NJ Transit trip counts, as reported) | [Second Ave Sagas](https://secondavenuesagas.com/2010/11/10/in-year-2-meadowlands-train-ridership-up-50-percent/) |
| New York | MetLife Stadium | 2014 | about 8,000 rail riders at an average Giants/Jets game | announced | [NBC New York](https://www.nbcnewyork.com/news/local/super-bowl-transit-train-problems-crowds-metlife/776339/) |
| New York | Meadowlands (pre-rail) | 2004 | 95% of surveyed Jets season-ticket holders drove | measured (survey) | [NYC Dept. of City Planning release](https://www.nyc.gov:443/assets/planning/download/pdf/about/press-releases/pr062204.pdf) |
| Chicago | Wrigley Field | 2013 | 36.7% drove | your prior figure; **not re-verified** (see self-audit) | — |
| Chicago | Ryan Field concert | — | 58% drive | your prior figure; projection; not re-verified | — |
| Chicago | Soldier Field | 2026 | nearest CTA station about a mile away; Metra Electric stop adjacent | qualitative | [Streetsblog Chicago](https://chi.streetsblog.org/2026/01/07/the-future-of-soldier-field-is-bear-ish-without-transit-investment) |
| Boston | Fenway Park | 1996 | 68% drove | announced (APTA presentation, reported; 30 years old) | [Streetsblog NYC](https://old.nyc.streetsblog.org/?p=259598) |
| Philadelphia | Lincoln Financial Field (Eagles) | 2025 | ~15,000–17,000 fans take SEPTA per game | announced (SEPTA, based on turnstile counts) | [Philadelphia Inquirer](https://www.inquirer.com/eagles/septa-service-cuts-broad-street-line-sports-complex-20250816.html) |
| Philadelphia | Lincoln Financial Field | Jan 2023 | 19,822 Broad Street Line riders, single-game record at the time | measured | [CBS Philadelphia](https://www.cbsnews.com/amp/philadelphia/news/free-rides-on-septa-broad-street-line-after-eagles-49ers-nfc-championship-game) |
| Philadelphia | South Philly sports complex | Jan 2008 | about a quarter of fans used SEPTA (multi-event day) | announced (SEPTA GM) | [BLET reprint](https://blet.org/news/24000-fans-use-septa-to-south-philadelphia-sports-complex-on-saturday/) |
| Philadelphia | Lincoln Financial Field | 2025 | ≈22–25% transit, using ~69,000 capacity | estimated (capacity from memory) | derived from rows above |
| Bay Area | Oracle Park (then Pac Bell) | 2000 | 50% non-auto in first season | announced (FHWA case study) | [FHWA](https://ops-dr.fhwa.dot.gov/publications/mitig_traf_cong/pac_bell_case.htm) |
| Bay Area | Oracle Park | current | nearly half of Peninsula/South Bay fans arrive by Caltrain | announced (Giants) | [Giants transportation page](https://www.mlb.com/giants/ballpark/transportation/peninsula-and-south-bay) |
| Bay Area | Levi's Stadium | 2014 | up to 25% of fans on transit | announced (projection) | [CBS SF](https://www.cbsnews.com/sanfrancisco/news/levis-stadium-first-sporting-event-ready-for-its-closeup-san-jose-earthquakes-seattle-sounders-match-to-test-traffic-and-stadium-systems) |
| Bay Area | Levi's Stadium (Taylor Swift) | 2023 | VTA expected 7,500 riders each way per show; ≈11% of 68,500 seats | announced (projection) / share estimated | [NBC Bay Area](https://www.nbcbayarea.com/news/local/south-bay/how-to-get-to-taylor-swift-shows/3279375/) |
| Seattle | Husky Stadium (UW football) | 2022 | car 36.7% (incl. 4.9% rideshare), transit 45.1%, walk 14.4%, bike ~2% | measured (intercept survey, n=1,195, ±2.2–2.8%) | [UW 2022 TMP report](https://transportation.uw.edu/files/media/husky-stadium-2022-tmp-report-final.pdf) |
| Seattle | Husky Stadium | 2021 / 2019 | car 48.9% both years | measured | same report, Table 6 |
| Seattle | Climate Pledge Arena (Kraken/Storm) | 2022–23 | 25% of fans used transit | announced (arena; ticket-linked transit passes) | [Athletic Business](https://www.athleticbusiness.com/facilities/stadium-arena/article/15305235/climate-pledge-arena-offers-free-public-transit-for-all-ticketed-events); [King County Metro](https://kingcountymetro.blog/2023/10/13/dont-get-caught-behind-the-lines-score-a-goal-using-transit-to-get-to-kraken-games-at-climate-pledge-arena/) |
| Seattle | Climate Pledge Arena | 2021 | SDOT expected 63% private vehicle + 15% ridehail at opening | announced (projection) | [The Urbanist](https://www.theurbanist.org/2021/08/06/uptown-streetscape-changes-come-together-in-advance-of-arenas-reopening/) |
| Minneapolis–St. Paul | Target Field (Twins) | c. 2010 | 25% Metro Transit mode share | announced (MnDOT) | [MnDOT](https://www.dot.state.mn.us/abcramps/projects/target-field.html) |
| Minneapolis–St. Paul | Target Field | 2010 | over 20% transit, up from 11% at the Metrodome | announced | [America's Transportation Awards](https://americastransportationawards.org/past-projects/2010-2/mn-destination-target-field-ballpark-project/) |
| Minneapolis–St. Paul | Target Field | 2012 | about 12% on average, between 1 in 10 and 1 in 5 depending on opponent | announced (Metro Transit) | [Metro Magazine](https://metromag.epubxp.com/i/123617/9) |
| Minneapolis–St. Paul | U.S. Bank Stadium (Vikings) | 2017 | typically 20–23% use transit | announced (Metro Transit) | [Star Tribune](https://www.startribune.com/local/413627623.html) |
| Atlanta | Georgia Dome (Falcons, predecessor of MBS) | 2013 | ~14,000 MARTA riders ≈ 19.6% of capacity | announced (MARTA research office) | [AJC](https://www.ajc.com/news/the-news/nXYrmihS3AVjVXpHboRlvJ) |
| Atlanta | Turner Field (Braves, predecessor of Truist Park) | 2013 | about 6% MARTA | announced (MARTA) | same AJC item |
| Atlanta | Mercedes-Benz Stadium (Atlanta United) | 2023 | average 17,000 MARTA riders per home match | announced (MARTA) — share left blank, attendance not verified here | [MARTA](https://itsmarta.com/marta-atlanta-united-form-partnership.aspx) |
| Houston | NRG (then Reliant) Stadium | 2004 | more than 65,000 of 71,525 fans park on the Reliant Park property | announced (Texans SVP) | [Houston Texans](https://www.houstontexans.com/news/metrorail-plans-detailed-2669312) |
| Houston | NRG Stadium | c. 2012 | ~15,194 METRORail boardings per Texans game day ≈ 11% of capacity if each rider makes two boardings | announced / share estimated | [Houston Texans](https://www.houstontexans.com/news/reliant-offers-free-metrorail-rides-on-gamedays-5944176) |
| Kansas City | Arrowhead | c. 2023 | only one daily bus line runs near the stadium; KCATA says federal rules bar it from running game shuttles | announced (KC Star editorial citing KCATA) | [KC Star via AOL](https://www.aol.com/kansas-city-fans-affordable-transportation-101200095.html) |
| Kansas City | Arrowhead | 2009 | game-day express bus routes cancelled after the 2008 season | reported | [The Pitch](https://www.thepitchkc.com/?p=67432) |
| Las Vegas | Allegiant Stadium | 2021 | team survey: about a third of fans (≈22,000 of 65,000) expected to walk from the Strip | announced (projection from team survey) | [Las Vegas Sun](https://lasvegassun.com/news/2021/jun/03/raiders-will-learn-from-every-event-in-getting-fan/); [LVSportsBiz](https://lvsportsbiz.com/2021/06/03/with-allegiant-stadium-moving-to-100-percent-capacity-raiders-outline-parking-strategy-thursday/) |
| Las Vegas | Allegiant Stadium | c. 2017 | parking study: about half of a sellout from out of town; nearly 20,000 walking from hotels | announced (projection; second-hand) | [Las Vegas Advisor](https://www.lasvegasadvisor.com/question/raiders-stadium-parking/) |
| Los Angeles | Dodger Stadium | 2024 | Dodger Stadium Express carried 304,133 riders in the season (2019 record 307,124) | measured (Metro counts, as reported) — share left blank, attendance not verified here | [MSRC](https://www.cleantransportationfunding.org/node/2925) |
| Los Angeles | Dodger Stadium | 2011 | 56,000 seats, 20,000 parking spaces | announced | [MSRC](https://www.cleantransportationfunding.org/node/794) |
| Mexico City | Estadio Azteca / Banorte | 2026 | Tren Ligero target ~45,000 per World Cup match = 51.4% of 87,500 capacity | announced (projection, STE director) | [El Imparcial](https://www.elimparcial.com/mundo/2026/04/22/tren-ligero-de-cdmx-busca-mover-a-mas-de-45-mil-personas-por-partido-durante-el-mundial-2026-en-el-estadio-azteca/) |
| Mexico City | Estadio Azteca / Banorte | Mar 2026 | no parking inside the stadium for the reopening match | reported | [Publimetro](https://www.publimetro.com.mx/deportes/2026/03/28/el-azteca-esta-listo-para-la-reapertura-asi-se-vive-el-ambiente-previo-al-mexico-vs-portugal/) |
| Toronto | BMO Field ("Toronto Stadium") | 2026 | city expected more than 80% of World Cup spectators to use transit, walk or cycle | announced (projection) | [CTV News](https://www.ctvnews.ca/toronto/article/fifa-world-cup-reality-check-will-torontos-transit-first-mobility-plan-deliver/) |
| Toronto | Scotiabank Arena, Rogers Centre | c. 2016 | very few parking lots around the stadiums; transit described as the main way fans arrive | qualitative | [Spacing](https://spacing.ca/toronto/?p=60271) |
| Montreal | Bell Centre | 2026 | connected to REM Bonaventure station; playoff run lifted REM ridership | qualitative, no share | [Castanet / Canadian Press](https://www.castanetkamloops.net/news/Canada/614742/Canadiens-playoff-run-has-increased-ridership-on-Montreal-s-light-rail-network) |
| Vancouver | BC Place | 2026 | SkyTrain stations near BC Place averaged 54% more boardings on World Cup match days | measured (TransLink), no share | [TransLink](https://www.translink.ca/news/2026/july/how%20vancouvers%20fifa%20world%20cup%20experience%20was%20powered%20by%20transit) |
| San Diego | Petco Park | 2004 | trolley carried about 24% of fans per game (27% in opening month) | announced (trolley operator) | [Progressive Railroading](https://progressiverailroading.com/rail_industry_trends/news/San-Diego-Trolley-scores-big-with-baseball-park-service--11563) |
| San Diego | Petco Park | 2025 | average 8,000 trolley riders on sellout dates | announced (MTS) | [MTS](https://www.sdmts.com/inside-mts/media-center/news-releases/boosted-trolley-service-makes-getting-petco-park-easier) |
| Sacramento | Golden 1 Center | 2016–17 | up to 11% of attendees by light rail | announced (SacRT GM) | [Sacramento City Express](https://sacramentocityexpress.com/2017/10/16/sacrt-offers-free-ride-day-for-kings-season-opener/) |
| Phoenix | Footprint Center (then US Airways Center) | 2015 | about 2,000 light-rail riders per arena event night ≈ 12% of a ~17,000 Suns crowd | announced (City of Phoenix) / share estimated | [Cronkite News](https://cronkitenews.azpbs.org/2015/09/03/phoenix-city-council-renews-valley-metro-event-day-program-u-s-airways-center-partnership/) |
| Austin | Q2 Stadium (Austin FC) | 2021 | CapMetro estimated a 15% transit mode share | announced (projection) | [City of Austin / CapMetro slides](https://www.austintexas.gov/sites/default/files/files/ACE/Q2_2021_0608_Neighbors_ACE_Meeting_final.pdf) |
| Austin | Q2 Stadium | 2024 | 750 on-site parking spaces vs. 20,738 average attendance | announced (club president) | [Community Impact](https://editions.communityimpact.com/view/923840014/24) |
| Austin | Q2 Stadium | 2025 | McKalla Station averages upwards of 830 riders on event days | announced (CapMetro) | [Community Impact](https://communityimpact.com/northwest-austin/transportation/mckalla-station-averages-over-800-austin-fc-game-day-riders-one-year-after-opening/) |
| Nashville | Nissan Stadium | 2025 | only a couple hundred cars park at the stadium; drivers use ~20,000 spaces within a mile; WeGo buses free on game days | announced (Titans) | [WSMV](https://www.wsmv.com/2025/09/08/parking-lots-out-land-around-new-nissan-stadium-be-developed-with-green-space-housing-retail-hotels-more) |
| Dallas–Fort Worth | — | — | none found | — | — |
| Columbus | — | — | none found | — | — |
| Milwaukee | — | — | none found | — | — |
| New Orleans | — | — | none found | — | — |
| Tampa Bay | — | — | none found | — | — |

**Things to notice in this evidence**

- Much of it is old (Fenway 1996, MSG 2003, Petco 2004, Houston 2004, Atlanta 2013). Rideshare did not exist for most of it, and post-2020 transit use is lower in many US systems. Treat pre-2016 figures as an upper bound on transit share.
- Agency "riders" and "boardings" are not the same as fans. Boardings usually count both directions; some riders are not ticket holders. I only converted where the source made the unit clear.
- World Cup 2026 figures (Toronto, Mexico City, Vancouver, MetLife) describe special operations with road closures and tourist-heavy crowds. They overstate what a normal league night looks like.

---

## 3. Exceptions: venues that break from their city's type

Only venues I have some basis for. "Direction" says whether the venue drives more or less than its city type implies.

| Metro (type) | Venue | Direction | Basis | Label |
|---|---|---|---|---|
| New York (hub) | MetLife Stadium | far more driving | just over 10% by train in 2010; about 8,000 rail riders per game in 2014 | measured / announced |
| Chicago (mixed) | Wrigley Field | less driving | your 36.7% prior (unverified); Red Line at the gate | your prior |
| Chicago (mixed) | Soldier Field | more driving | nearest CTA about a mile away; large lakefront lots | qualitative / estimated |
| Boston (mixed) | Gillette Stadium (Foxborough) | far more driving | suburban stadium with limited event rail; **no source pulled in this pass** | estimated |
| Bay Area (mixed) | Oracle Park | less driving | 50% non-auto in 2000 | announced |
| Bay Area (mixed) | Levi's Stadium | more driving | transit planned at up to 25%; VTA expected ~11% for a sellout concert | announced (projection) |
| Seattle (mixed) | Husky Stadium | less driving | 36.7% car incl. rideshare, 45.1% transit (2022) | measured |
| Atlanta (mixed) | Truist Park | more driving | predecessor ballpark had ~6% MARTA; Truist has no rail station (not sourced here) | announced / estimated |
| Dallas–Fort Worth (car-first) | American Airlines Center | less driving | DART and TRE stop at Victory Station by the arena; no share found | qualitative |
| Houston (car-first) | downtown arena and ballpark | less driving (probably) | downtown garages and METRORail; no share found | estimated |
| Phoenix (car-first) | Footprint Center | slightly less driving | ~2,000 light-rail riders per event (≈12%) | announced / estimated |
| Sacramento (car-first) | Golden 1 Center | slightly less driving | up to 11% light rail | announced |
| Austin (car-first) | Q2 Stadium | same driving, different pattern | only 750 on-site spaces; use `remote_shuttle` | announced |
| Nashville (car-first) | Nissan Stadium | same driving, different pattern | drivers park within a mile and walk; use `dispersed_garages` | announced |
| Los Angeles (car-first) | Dodger Stadium | slightly less driving | ~304,000 Dodger Stadium Express riders per season | measured |
| Las Vegas (mixed) | Allegiant Stadium, T-Mobile Arena | less driving via walking | about a third walk from the Strip (Allegiant projection); T-Mobile not sourced | announced (projection) |
| Mexico City (hub) | none identified | — | — | — |

---

## 4. A default drive share per city

No source gives a region-wide fan drive share for any of these metros, so **every default below is an estimated range**. Where a venue has a measured figure, the app should use that venue figure and ignore the city default.

How I built each range: start from the best venue evidence in section 2, subtract transit and a walk/rideshare allowance (larger downtown, smaller at suburban lots), then widen the range to reflect how thin and old the evidence is. Cities with no evidence get a wide range set by analogy to cities with similar transit and venue geography, and they are flagged as guesses in the self-audit.

| Metro | Default drive share | Anchor |
|---|---|---|
| New York | 20–35% | MSG 52% transit/walk (2003); Barclays ~25% car |
| Toronto | 25–45% | qualitative only |
| Montreal | 25–45% | qualitative only (analogy to Toronto) |
| Mexico City | 25–45% | World Cup projection of ~51% on Tren Ligero alone |
| Boston | 35–55% | Fenway 68% drove in 1996, transit has grown since |
| Vancouver | 35–55% | qualitative only |
| Las Vegas | 35–55% | about a third walk from the Strip (projection) |
| Chicago | 40–60% | Wrigley 36.7% and Ryan Field 58% (your priors, unverified) |
| Seattle | 40–60% | Husky 36.7% (measured); Climate Pledge 25% transit |
| Bay Area | 45–65% | Oracle 50% non-auto; Levi's mostly cars |
| Atlanta | 55–75% | MARTA ~20% at Georgia Dome; Braves ~6% |
| New Orleans | 60–80% | guess (no data) |
| Philadelphia | 65–78% | SEPTA ≈22–25% at the sports complex |
| Minneapolis–St. Paul | 65–78% | transit 20–25% at Target Field and U.S. Bank Stadium |
| San Diego | 65–80% | trolley ~20–24% at Petco |
| Austin | 70–85% | 15% transit projected at Q2 |
| Nashville | 70–85% | guess anchored on Titans' description |
| Sacramento | 75–88% | up to 11% light rail at Golden 1 |
| Houston | 80–90% | >65,000 of 71,525 park on site at NRG (2004) |
| Los Angeles | 80–90% | Dodger Stadium has 20,000 spaces for 56,000 seats (implies 2.5+ per car, so high drive share is consistent) |
| Phoenix | 80–90% | ≈12% light rail at the arena |
| Columbus | 80–92% | guess (no data) |
| Dallas–Fort Worth | 85–95% | guess (no data) |
| Milwaukee | 85–95% | guess (no data) |
| Tampa Bay | 85–95% | guess (no data) |
| Kansas City | 88–97% | one daily bus near Arrowhead; no game shuttles |

---

## 5. Output table

| City | Type | Default drive share | Measured/estimated | Exception venues | Sources | Confidence |
|---|---|---|---|---|---|---|
| Atlanta | mixed | 55–75% | estimated (anchored on announced MARTA figures) | Truist Park (more driving) | [AJC](https://www.ajc.com/news/the-news/nXYrmihS3AVjVXpHboRlvJ), [MARTA](https://itsmarta.com/marta-atlanta-united-form-partnership.aspx) | medium-low |
| Austin | car-first | 70–85% | estimated (anchored on a projection) | Q2 Stadium (`remote_shuttle`) | [CapMetro slides](https://www.austintexas.gov/sites/default/files/files/ACE/Q2_2021_0608_Neighbors_ACE_Meeting_final.pdf), [Community Impact](https://editions.communityimpact.com/view/923840014/24) | low |
| Bay Area | mixed | 45–65% | estimated | Oracle Park (less), Levi's Stadium (more) | [FHWA](https://ops-dr.fhwa.dot.gov/publications/mitig_traf_cong/pac_bell_case.htm), [CBS SF](https://www.cbsnews.com/sanfrancisco/news/levis-stadium-first-sporting-event-ready-for-its-closeup-san-jose-earthquakes-seattle-sounders-match-to-test-traffic-and-stadium-systems) | medium |
| Boston | mixed (leans hub) | 35–55% | estimated (only a 1996 figure) | Gillette Stadium (more, unsourced) | [Streetsblog NYC](https://old.nyc.streetsblog.org/?p=259598) | low |
| Chicago | mixed | 40–60% | estimated (your priors, unverified) | Wrigley (less), Soldier Field (more) | your priors; [Streetsblog Chicago](https://chi.streetsblog.org/2026/01/07/the-future-of-soldier-field-is-bear-ish-without-transit-investment) | low-medium |
| Columbus | car-first | 80–92% | estimated (guess) | none identified | none found | low |
| Dallas–Fort Worth | car-first | 85–95% | estimated (guess) | American Airlines Center (less) | none found for shares | low |
| Houston | car-first | 80–90% | estimated (anchored on an announced 2004 figure) | downtown arena/ballpark (probably less) | [Texans 2004](https://www.houstontexans.com/news/metrorail-plans-detailed-2669312), [Texans c. 2012](https://www.houstontexans.com/news/reliant-offers-free-metrorail-rides-on-gamedays-5944176) | medium |
| Kansas City | car-first | 88–97% | estimated | none identified | [KC Star via AOL](https://www.aol.com/kansas-city-fans-affordable-transportation-101200095.html), [The Pitch](https://www.thepitchkc.com/?p=67432) | medium-low |
| Las Vegas | mixed (`walk_from_hotels`) | 35–55% | estimated (anchored on a projection) | Allegiant, T-Mobile Arena (walk-heavy) | [Las Vegas Sun](https://lasvegassun.com/news/2021/jun/03/raiders-will-learn-from-every-event-in-getting-fan/), [LVSportsBiz](https://lvsportsbiz.com/2021/06/03/with-allegiant-stadium-moving-to-100-percent-capacity-raiders-outline-parking-strategy-thursday/) | medium-low |
| Los Angeles | car-first | 80–90% | estimated | Dodger Stadium (slightly less) | [MSRC 2024](https://www.cleantransportationfunding.org/node/2925), [MSRC 2011](https://www.cleantransportationfunding.org/node/794) | medium-low |
| Mexico City | transit hub | 25–45% | estimated (anchored on a World Cup projection) | none identified | [El Imparcial](https://www.elimparcial.com/mundo/2026/04/22/tren-ligero-de-cdmx-busca-mover-a-mas-de-45-mil-personas-por-partido-durante-el-mundial-2026-en-el-estadio-azteca/), [Publimetro](https://www.publimetro.com.mx/deportes/2026/03/28/el-azteca-esta-listo-para-la-reapertura-asi-se-vive-el-ambiente-previo-al-mexico-vs-portugal/) | low |
| Milwaukee | car-first | 85–95% | estimated (guess) | none identified | none found | low |
| Minneapolis–St. Paul | mixed | 65–78% | estimated (anchored on announced transit shares) | none identified | [MnDOT](https://www.dot.state.mn.us/abcramps/projects/target-field.html), [Star Tribune](https://www.startribune.com/local/413627623.html) | medium |
| Montreal | transit hub | 25–45% | estimated (guess) | none identified | qualitative only | low |
| Nashville | car-first (`dispersed_garages`) | 70–85% | estimated (guess) | Nissan Stadium (park-and-walk) | [WSMV](https://www.wsmv.com/2025/09/08/parking-lots-out-land-around-new-nissan-stadium-be-developed-with-green-space-housing-retail-hotels-more) | low |
| New Orleans | mixed (`walk_from_hotels`, low confidence) | 60–80% | estimated (guess) | none identified | none found | low |
| New York | transit hub | 20–35% | estimated (anchored on announced figures) | MetLife Stadium (far more) | [Streetsblog NYC](https://old.nyc.streetsblog.org/?p=259598), [Patch](https://patch.com/new-york/prospectheights/transportation-perception-management-part-2), [Second Ave Sagas](https://secondavenuesagas.com/2010/11/10/in-year-2-meadowlands-train-ridership-up-50-percent/) | medium |
| Philadelphia | mixed | 65–78% | estimated (anchored on SEPTA counts) | none identified | [Inquirer](https://www.inquirer.com/eagles/septa-service-cuts-broad-street-line-sports-complex-20250816.html), [CBS](https://www.cbsnews.com/amp/philadelphia/news/free-rides-on-septa-broad-street-line-after-eagles-49ers-nfc-championship-game) | medium |
| Phoenix | car-first | 80–90% | estimated | Footprint Center (slightly less) | [Cronkite News](https://cronkitenews.azpbs.org/2015/09/03/phoenix-city-council-renews-valley-metro-event-day-program-u-s-airways-center-partnership/) | low-medium |
| Sacramento | car-first | 75–88% | estimated | Golden 1 Center (slightly less) | [Sacramento City Express](https://sacramentocityexpress.com/2017/10/16/sacrt-offers-free-ride-day-for-kings-season-opener/) | low-medium |
| San Diego | mixed | 65–80% | estimated (anchored on announced trolley shares) | none identified | [Progressive Railroading](https://progressiverailroading.com/rail_industry_trends/news/San-Diego-Trolley-scores-big-with-baseball-park-service--11563), [MTS](https://www.sdmts.com/inside-mts/media-center/news-releases/boosted-trolley-service-makes-getting-petco-park-easier) | medium |
| Seattle | mixed | 40–60% | estimated (one measured venue: Husky 36.7% incl. rideshare) | Husky Stadium (less) | [UW 2022](https://transportation.uw.edu/files/media/husky-stadium-2022-tmp-report-final.pdf), [Athletic Business](https://www.athleticbusiness.com/facilities/stadium-arena/article/15305235/climate-pledge-arena-offers-free-public-transit-for-all-ticketed-events) | medium |
| Tampa Bay (TPA) | car-first | 85–95% | estimated (guess) | none identified | none found | low |
| Toronto | transit hub | 25–45% | estimated | none identified | [CTV](https://www.ctvnews.ca/toronto/article/fifa-world-cup-reality-check-will-torontos-transit-first-mobility-plan-deliver/), [Spacing](https://spacing.ca/toronto/?p=60271) | low-medium |
| Vancouver | mixed (could be hub) | 35–55% | estimated (guess) | none identified | [TransLink](https://www.translink.ca/news/2026/july/how%20vancouvers%20fifa%20world%20cup%20experience%20was%20powered%20by%20transit) | low |

### Cities whose provisional type I would change

- **Chicago: hub → mixed.** The only hard number is Wrigley, which is Chicago's most transit-friendly big venue, and I could not re-verify it. Soldier Field is about a mile from the nearest CTA station, and your own Ryan Field projection (58% driving) sits squarely in "mixed". Both prior answers already hedged on region-wide car share; the evidence supports that hedge rather than "hub".

The brief only lists Chicago's provisional type, so I can't diff the other 25. If your list differs from my column, these are the calls most likely to clash with a first guess, with the reason:

- **Seattle: mixed, not hub.** Husky Stadium is genuinely transit-heavy, but Climate Pledge sits at 25% transit and SDOT planned for 63% private vehicles there.
- **Atlanta: mixed, not car-first.** MARTA carries a real share to Mercedes-Benz Stadium, even though Truist Park is car-only.
- **Las Vegas: mixed, not car-first.** Low drive share comes from tourists walking, not transit; that is why I propose the `walk_from_hotels` pattern.
- **Boston and Vancouver: mixed, not hub.** Probably closer to hub than the range suggests, but I found no modern measured split, so I would not commit to "hub" yet.
- **New Orleans: mixed, not car-first.** Pure judgment on downtown hotel walk-up; easy to flip if you find data.

---

## Self-audit

### Claims that rest on thin evidence

1. **Every city default drive share is an estimate**, and none is backed by a city-wide source. The narrowest ranges (Houston, Philadelphia, Minneapolis) are still built from one venue each.
2. **Wrigley 36.7%.** I could not find the source. Note that 36.7% is exactly the 2022 automobile share (including rideshare) at UW's Husky Stadium in Seattle, in a report that turned up in the same searches. That may be coincidence, but check that the Wrigley figure didn't get crossed with the Husky one. Check by hand: open the [UW 2022 report](https://transportation.uw.edu/files/media/husky-stadium-2022-tmp-report-final.pdf), page 6, Table 1, then find the original Wrigley study.
3. **Ryan Field 58%** is your prior; I did not re-find it.
4. **Barclays "about a quarter by car"** comes from a community contributor's post describing a consultant's analysis. Check by hand: [Patch post](https://patch.com/new-york/prospectheights/transportation-perception-management-part-2); then look for the Empire State Development / Sam Schwartz TDM effectiveness report it refers to.
5. **MSG 2003 (52%) and Fenway 1996 (68% drove)** are reported in a 2000s Streetsblog piece; the underlying studies were not located. Check: [Streetsblog NYC](https://old.nyc.streetsblog.org/?p=259598).
6. **Houston "65,000 of 71,525 park on site"** is a 2004 statement by a team executive, before rideshare and before METRORail matured. Check: [Texans 2004](https://www.houstontexans.com/news/metrorail-plans-detailed-2669312).
7. **Climate Pledge 25% transit** is the arena's own figure from ticket-linked pass use, not an independent survey. Check: [Athletic Business](https://www.athleticbusiness.com/facilities/stadium-arena/article/15305235/climate-pledge-arena-offers-free-public-transit-for-all-ticketed-events).
8. **Las Vegas "a third walk"** is a 2021 projection from a team survey, not a post-opening count. The parking-study figure (nearly 20,000 walkers) is second-hand from a Q&A column. Check: [Las Vegas Sun](https://lasvegassun.com/news/2021/jun/03/raiders-will-learn-from-every-event-in-getting-fan/), [Las Vegas Advisor](https://www.lasvegasadvisor.com/question/raiders-stadium-parking/).
9. **Mexico City** rests on a World Cup target (45,000 on Tren Ligero) and a reopening-day parking closure. Normal Liga MX nights may look quite different. Check: [El Imparcial](https://www.elimparcial.com/mundo/2026/04/22/tren-ligero-de-cdmx-busca-mover-a-mas-de-45-mil-personas-por-partido-durante-el-mundial-2026-en-el-estadio-azteca/).
10. **Toronto and Montreal "hub"** rest on qualitative statements and venue geography, not a measured split.
11. **Pre-2016 data** (Fenway, MSG, Petco 2004, Houston 2004, Georgia Dome/Turner Field 2013) predates rideshare and the post-2020 transit dip.

### Things I computed or guessed

- **Computed shares** (estimated): Philadelphia ≈22–25% (uses ~69,000 Lincoln Financial Field capacity **from memory**); Houston ≈11% (assumes each METRORail rider makes two boardings); Phoenix ≈12% (uses the ~17,000 Suns crowd figure reported by [KTAR](https://ktar.com/arizona-news/with-diamondbacks-suns-both-playing-downtown-phoenix-traffic-will-be-downright-scary-on-halloween)); Levi's ≈11% (7,500 riders ÷ 68,500 seats).
- **Left blank on purpose**: Atlanta United's 17,000 MARTA riders and the Dodger Stadium Express's 304,133 season riders, because I did not verify the attendance denominators. You can compute these once you pull official attendance.
- **Pure guesses** (no evidence found): default ranges for Columbus, Dallas–Fort Worth, Milwaukee, Tampa Bay, New Orleans, Nashville, Montreal, Vancouver. Their types follow venue geography and analogy.
- **Unsourced exceptions**: Gillette Stadium as car-first and Truist Park as rail-less are things I believe but did not pull a source for in this pass.
- **The `parking_pattern` proposal** is my design suggestion, not a finding.

### What to check by hand, with something to open

| Check | Open this |
|---|---|
| Husky Stadium mode split table (the strongest measured source here) | [UW 2022 TMP report](https://transportation.uw.edu/files/media/husky-stadium-2022-tmp-report-final.pdf), pp. 6 and 18–19 |
| SEPTA Eagles ridership and how it's counted | [Inquirer, Aug 2025](https://www.inquirer.com/eagles/septa-service-cuts-broad-street-line-sports-complex-20250816.html) |
| Metro Transit share at U.S. Bank Stadium | [Star Tribune](https://www.startribune.com/local/413627623.html) |
| MetLife rail share | [Second Ave Sagas, 2010](https://secondavenuesagas.com/2010/11/10/in-year-2-meadowlands-train-ridership-up-50-percent/) |
| Petco trolley share | [Progressive Railroading, 2004](https://progressiverailroading.com/rail_industry_trends/news/San-Diego-Trolley-scores-big-with-baseball-park-service--11563) |
| Oracle Park 50% non-auto | [FHWA case study](https://ops-dr.fhwa.dot.gov/publications/mitig_traf_cong/pac_bell_case.htm) |
| Nashville parking pattern | [WSMV, Sep 2025](https://www.wsmv.com/2025/09/08/parking-lots-out-land-around-new-nissan-stadium-be-developed-with-green-space-housing-retail-hotels-more) |
| Golden 1 Center light-rail share | [Sacramento City Express, 2017](https://sacramentocityexpress.com/2017/10/16/sacrt-offers-free-ride-day-for-kings-season-opener/) |

### Best next sources to look for (not found in this pass)

- UW publishes a Husky Stadium report every year; newer editions (2023–2025) would give a trend. Search `transportation.uw.edu husky stadium tmp report`.
- Event transportation management plans filed with cities often contain intercept surveys: Chase Center (San Francisco), Climate Pledge Arena (Seattle), Golden 1 Center (Sacramento), Allegiant Stadium (Clark County), the new Nissan Stadium (Nashville), and the Bears' stadium plans (Chicago).
- Transit agencies' post-event ridership reports for World Cup 2026 (TransLink, Metrolinx/TTC, SEPTA, NJ Transit, MARTA, METRO Houston, DART, CDMX) may publish per-match boardings that, combined with official attendance, give a measured transit share for one stadium per city.
