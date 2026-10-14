# Answer: city type in plain words, and the copy for it

Answer to `city-type-plain-words-prompt` (build 5, review item N1/B1). Written Oct 14, 2026.

Two notes before the answer. The mock `city-type-plain-words-mock.png` was not attached to the conversation, so placement advice works from the written description of the map key, not the image. Sources were found by web search on Oct 14, 2026; where no source turned up for a city, the cell says so instead of filling it from memory.

Figure labels used throughout: **measured** (counted or surveyed), **announced** (a number an agency or team stated, method not published), **estimated** (a projection, or my own division of two published numbers).

## Short answer

- Don't name the types on screen. Describe them: "most fans drive to events", "most fans drive to events; some take transit", "most fans take transit or walk to events".
- Skip city-specific details (road names, rail lines) in the map key. One template per type, same words in all 40 cities.
- Today, sprawl and hub feed the read identically (85% by car, 15% spillover). Only the **transit** line changes a number. So the checks that matter most are on the hub vs. transit line, and **New York** is the strongest candidate for a wrong type.
- Copy-truth flags (type numbers barely matter, but the sentence would be wrong): **Atlanta** (sprawl → hub), **Ottawa–Gatineau** (hub → lean sprawl), **Las Vegas** (needs its own line), **Bay Area** (venues split).
- Map key: agree. Also carry the line in "How estimates work". Not in Settings. Only a short tag in Compare, and only when the two cities differ.

## 1. Plain names for the three types

| Set | sprawl | hub | transit | Why it does or doesn't work |
|---|---|---|---|---|
| **A (lean, if a tag is ever needed)** | Mostly drive | Mostly drive, some transit | Mostly transit | No new word to learn; the tag *is* the description. Says the hub truth ("mostly driving") that "hub" hid. |
| B | Drive city | Mixed | Transit city | Short, but "Mixed" reads as half and half. That overstates transit for Austin or Portland (about 1 in 10 fans by transit, see §3), and repeats the "hub" mistake in a new word. |
| C | Car-first | Car + transit | Transit-first | Compact, but "-first" is planner talk, not fan talk. |

**Named or described?** Described. A name asks the reader to decode a category; a description answers the question they actually have ("how do people get there?"). Naming also invites "what's the difference between Drive city and Mixed?", and today the honest answer is "nothing in the number". Keep the three internal names in code and use set A only where space forces a tag (see §4, Compare).

## 2. Copy templates

### Lean templates

| Type | Template | Length with the longest current name (Minneapolis–St. Paul) |
|---|---|---|
| sprawl | `{City}: most fans drive to events.` | 48 |
| hub | `{City}: most fans drive to events; some take transit.` | 67 |
| transit | `{City}: most fans take transit or walk to events.` | 63 |

"To events" matters: city commute data is not event data, and the Yankee Stadium and Eagles numbers in §3 show event travel differs from how a city commutes. "Transit or walk" for the transit type matches what the formula assumes (40% by car, so 60% arrive some other way, on foot included).

I dropped the "so big crowds share the freeways" clause from the placeholder. The line sits directly under "…gridlock…", so the consequence is already implied, and keeping it for sprawl but not the others breaks consistency. If Kylie wants it back for sprawl only: `{City}: most fans drive, so big crowds share the roads.` (69 with the longest name; "roads", not "freeways", so it stays true in cities without them).

### Filled for three real cities each

| Type | Filled |
|---|---|
| sprawl | Los Angeles: most fans drive to events. |
| sprawl | Houston: most fans drive to events. |
| sprawl | Phoenix: most fans drive to events. |
| hub | Philadelphia: most fans drive to events; some take transit. |
| hub | Austin: most fans drive to events; some take transit. |
| hub | Minneapolis–St. Paul: most fans drive to events; some take transit. |
| transit | Toronto: most fans take transit or walk to events. |
| transit | Vancouver: most fans take transit or walk to events. |
| transit | Mexico City: most fans take transit or walk to events. |

### Is a city-specific detail worth it?

**No, not in the map key.** Four reasons. Every new city would need a sourced line before launch. A named road or rail line reads like a live condition ("I-405" invites "is it bad right now?"), which brushes against the no-live-traffic rule. The 70-character budget is already tight for long names. And I found a sourced detail for only about a quarter of the 40 cities (listed in the §5 table), so the rest would fall back to the template anyway, making the line inconsistent across cities.

If details come back later, the better home is the "How estimates work" sheet on a specific event, where the venue is known (see §4).

### French and Spanish (if localised later)

French, Quebec usage ("partisans", "auto", "autobus"; space before the colon per Quebec typography, check with the translator):

| Type | French | Filled | Length |
|---|---|---|---|
| sprawl | `{Ville} : la plupart des partisans y vont en auto.` | Ottawa–Gatineau : la plupart des partisans y vont en auto. | 58 |
| hub | `{Ville} : la plupart y vont en auto, certains en autobus.` | Ottawa–Gatineau : la plupart y vont en auto, certains en autobus. | 65 |
| transit | `{Ville} : la plupart des partisans y vont sans auto.` | Montréal : la plupart des partisans y vont sans auto. | 52 |

"Sans auto" (without a car) is shorter than "en transport collectif ou à pied" and says exactly what the formula assumes. If Ottawa–Gatineau moves to sprawl (§3), use the sprawl line.

Spanish (Mexico):

| Type | Spanish | Filled | Length |
|---|---|---|---|
| sprawl | `{Ciudad}: la mayoría de la afición llega en auto.` | (for future Mexican cities) | — |
| hub | `{Ciudad}: la mayoría va en auto; algunos en transporte público.` | (for future Mexican cities; 71 with "Ciudad de México", fine for shorter names) | — |
| transit | `{Ciudad}: la mayoría va en transporte público o a pie.` | Ciudad de México: la mayoría va en transporte público o a pie. | 62 |

"Auto" is understood in Mexico; "coche" or "carro" are also common. A native reviewer should pick one.

## 3. Fact check of the current assignments

### What changes the read and what doesn't

Sprawl and hub feed the read the same numbers today. So a sprawl/hub mistake only makes the *sentence* wrong; a hub/transit mistake changes gridlock by a lot (85% vs. 40% by car). Effort should go to the hub/transit line first.

### Hub vs. transit line

**New York (hub): contradicted, check first.** MTA figures reported by WNYC put about 37% of Yankees fans on the subway and about 45% on any transit, and 25–30% of Mets fans on the subway, not counting LIRR ([WNYC](https://wnyc.org/story/283116-more-fans-look-to-take-transit-to-see-yankees-than-mets/); announced, and over a decade old). If 45% take transit, at most 55% can be arriving by car, far from the 85% the hub type assumes; 40% (transit type) is closer for Yankee Stadium. MetLife Stadium is in New Jersey and likely car-heavy (from memory, no source found in this pass). Two fixes: move New York to transit and give MetLife its own figure, or keep hub and give Yankee Stadium, Citi Field and Madison Square Garden their own figures. Either way, "most fans drive to events" is not a sentence to show New Yorkers.

**Chicago (hub): fine.** Venue figures already exist (Wrigley 42.1% by car, United Center 86.9%) and override the type. Not re-researched.

**Washington DC (hub): fits, thin.** WMATA said Metro carried over 21,000 people to the first game at Nationals Park in 2008 ([via Wikipedia's citation of WMATA](https://en.wikipedia.org/wiki/Navy_Yard%E2%80%93Ballpark_station); announced), against 41,339 seats, so roughly half (estimated). Metro said about a quarter of fans took the train home after the 2019 Wild Card game ([DCist](https://dcist.com/story/19/10/22/a-guide-to-getting-to-nats-park-for-the-world-series/); announced). A quarter to a half by Metro sits between the two types. Keep hub; a Nationals Park venue figure would do more than a type change.

**Boston (hub): no share found.** The Red Sox strongly encourage transit and say parking near Fenway is very limited ([Red Sox](https://www.mlb.com/redsox/fans/fenway-fest/transportation-and-parking)), but that is guidance, not a count. Gillette Stadium in Foxborough is likely drive-heavy (from memory). Keep hub; thin evidence.

**Toronto (transit): fits, medium.** Metrolinx reported about 30,000 GO and UP Express riders per World Cup match day, 51% above the 2025 World Series average ([Global News](https://globalnews.ca/news/11961077/toronto-world-cup-metrolinx-ridership/); announced). That count is regional rail only (no TTC) and isn't limited to ticket holders. No regular-season share found.

**Montreal (transit): no share found.** The Canadiens and STM run a long-standing partnership, with boosted metro service on game days and two metro stations by the Bell Centre ([Canadiens, Vert le but](https://www.nhl.com/fr/canadiens/community/vert-le-but/transport); [STM](https://www.stm.info/fr/offres-et-sorties/sorties/canadiens-de-montreal)). Plausible, but the type rests on reputation, not a count.

**Vancouver (transit): fits, medium.** TransLink reported ridership at SkyTrain stations near BC Place up 54% on World Cup match days, the highest there since the 2010 Olympics ([TransLink](https://www.translink.ca/news/2026/july/how%20vancouvers%20fifa%20world%20cup%20experience%20was%20powered%20by%20transit); announced, preliminary). It's an increase, not a share.

**Mexico City (transit): fits for World Cup, thin otherwise.** The city planned for the Tren Ligero to carry 60,000–70,000 people before each World Cup match ([Proceso](https://www.proceso.com.mx/nacional/cdmx/2026/6/1/asi-se-podra-llegar-al-estadio-banorte-el-dia-de-la-inauguracion-del-mundial-372999.html); announced plan), and officials said 25,000 people were cleared by Tren Ligero in about an hour and a half after the Mexico–Portugal reopening match ([Excélsior](https://www.excelsior.com.mx/deportes/tren-ligero-mundial-2026-ruta-mas-rapida-para-llegar-estadio-banorte-cdmx); announced). Against roughly 87,000 seats, that is about 3 in 10 on the light rail alone (estimated). World Cup matches had a closed perimeter and remote parking, so normal Liga MX dates may be more car-heavy. Keep transit; check a non-World-Cup figure.

### Sprawl vs. hub line

**Austin (hub): fits.** CapMetro counted 4,500 bus and train riders to Q2 Stadium on 2024's opening day and says it can move a little over 2,000 per match day by bus and rail ([Austin Free Press](https://austinfreepress.org/transit-goals-thousands-ride-buses-and-rails-to-austin-fc-games/); announced), against a capacity of about 20,500. That is roughly 1 to 2 in 10 (estimated): "mostly drive, some transit" is right.

**Denver (hub): no share found.** RTD runs game-day rail and bus service to Empower Field and closes a nearby station for crowds ([RTD](https://www.rtd-denver.com/community/news/2025/rtd-provides-service-and-connections-to-nov-6-broncos-vs-raiders-game)), but publishes no share. Thin.

**Las Vegas (hub): the sentence needs its own wording.** The stadium's own guidance leads with walking from the Strip over the Hacienda bridge, plus rideshare and the Strip bus ([Allegiant Stadium](https://www.allegiantstadium.com/plan-your-visit/directions-parking)). Neither "drive" nor "transit" describes that well. No share found. The type number can stay (rideshare is still cars on roads), but use the exception line in §5.

**Sacramento (hub): no source found** in this pass.

**Portland (hub): fits, weak.** TriMet expected about 10% of a half-capacity Blazers crowd to ride in 2021 ([KGW](https://www.kgw.com/article/news/local/blazers-game-fans-return-rose-quarter/283-8943a455-623b-40cb-b88d-957cb2c9ed14); estimated, pandemic-era). Consistent with "mostly drive".

### Other flags

**Atlanta (sprawl → hub).** In a 2014 Falcons fan survey, about 35% of fans took public transportation to the Georgia Dome ([SaportaReport](https://saportareport.com/marta-to-help-drive-success-of-new-falcons-stadium/sections/abcarticles/maria_saporta/); measured survey, as reported). A third by transit is hub territory, and "most fans drive to events" alone undersells MARTA. No number changes; the sentence gains "some take transit".

**Bay Area (sprawl): split metro.** Caltrain carried nearly 7,000 fans to a World Cup match at Levi's Stadium ([Metro Magazine](https://www.metro-magazine.com/news/fifa-world-cup-matches-are-driving-record-transit-ridership-nationwide); announced), so Santa Clara is mostly driving. Oracle Park and Chase Center in San Francisco are served by Muni, BART connections, Caltrain and ferries ([Giants](https://www.mlb.com/giants/ballpark/transportation/taking-transit)), but no share was found. The city type can't be right for both; give the San Francisco venues their own figures when found.

**Ottawa–Gatineau (hub → lean sprawl).** The main arena is in suburban Kanata, and OC Transpo cut game-day bus trips from 26 to 19 per game after a ridership review found too few fans using them ([CBC](https://www.cbc.ca/news/canada/ottawa/oc-transpo-ottawa-senators-bus-1.4894528); announced, 2018). No number changes either way; the sprawl sentence is the truer one.

**Minneapolis–St. Paul (hub): fits.** Metro Transit estimated 27% of Vikings fans used light rail at the old stadium, with the team expecting more downtown, and 14% of Twins fans ([WCCO/CBS](https://www.cbsnews.com/amp/minnesota/news/minn-sports-teams-counting-on-mass-transit-to-get-fans-to-games); estimated, pre-2016).

**Philadelphia (hub): fits.** SEPTA put a typical Eagles game at about 16,000 Broad Street Line riders ([KYW](https://www.audacy.com/kywnewsradio/news/local/septa-world-cup-game-1-fan-transportation); announced), about a quarter of a 67,000-plus crowd (estimated).

**Seattle (hub):** Husky Stadium's measured 37% by car already overrides. Sound Transit runs Link, Sounder and ST Express to Lumen Field ([Sound Transit](https://www.soundtransit.org/seahawks)) but no share was found for Lumen Field or Climate Pledge Arena.

**The other 22 cities** (the remaining sprawl cities plus Pittsburgh, Cleveland, Sacramento, New Orleans, Salt Lake City, Edmonton, St. Louis): no event mode-share source turned up in this pass. The types look plausible but rest on reputation, not counts.

## 4. Placement

| Place | Verdict | One reason |
|---|---|---|
| Map key ("?" on Explore) | **Agree** | It's the one spot that already explains the read and has a city on screen, so one line answers "why is gridlock high here?" without a new surface. |
| "How estimates work" (event page) | **Yes, same line** | That's where someone checks a specific date's gridlock, and it's the only place that knows the venue: when the venue has its own figure, add a second line saying so, otherwise the city line misleads at Wrigley (42.1% by car under a "most fans drive" city). |
| Settings › cities | **No** | Picking cities isn't about how fans travel; 40 travel sentences in a list is reading nobody asked for. |
| Compare › Gridlock row | **Short tag only, only when the cities differ** | Compare is scanned, not read; a sentence per column would wrap, but "Mostly drive" vs. "Mostly transit" under the row explains a gap at a glance. When both cities share a type, show nothing. |

## 5. Output table

Plain sentences follow the lean templates (all ≤70 characters, checked). "Detail" lists a sourced detail where one turned up, for later use outside the map key; "template" means none was found or needed.

| City | Current type | Plain sentence (≤70) | City-specific detail | Source | Confidence | Change the type? |
|---|---|---|---|---|---|---|
| Los Angeles | sprawl | Los Angeles: most fans drive to events. | template | none found this pass | low | no |
| San Diego | sprawl | San Diego: most fans drive to events. | template | none found this pass | low | no |
| Atlanta | sprawl | Atlanta: most fans drive to events; some take transit. | MARTA | [SaportaReport](https://saportareport.com/marta-to-help-drive-success-of-new-falcons-stadium/sections/abcarticles/maria_saporta/): ~35% by public transport, 2014 Falcons survey (measured, as reported) | medium | yes → hub |
| Bay Area | sprawl | Bay Area: most fans drive to events. | Caltrain (Levi's) | [Metro Magazine](https://www.metro-magazine.com/news/fifa-world-cup-matches-are-driving-record-transit-ridership-nationwide): ~7,000 Caltrain riders to a World Cup match (announced) | low | check (venue split; SF venues need own figures) |
| Dallas–Fort Worth | sprawl | Dallas–Fort Worth: most fans drive to events. | template | none found this pass | low | no |
| Detroit | sprawl | Detroit: most fans drive to events. | template | none found this pass | low | no |
| Milwaukee | sprawl | Milwaukee: most fans drive to events. | template | none found this pass | low | no |
| Tampa Bay | sprawl | Tampa Bay: most fans drive to events. | template | none found this pass | low | no |
| Miami | sprawl | Miami: most fans drive to events. | template | none found this pass | low | no |
| Columbus | sprawl | Columbus: most fans drive to events. | template | none found this pass | low | no |
| Nashville | sprawl | Nashville: most fans drive to events. | template | none found this pass | low | no |
| Phoenix | sprawl | Phoenix: most fans drive to events. | template | none found this pass | low | no |
| Kansas City | sprawl | Kansas City: most fans drive to events. | template | none found this pass | low | no |
| Houston | sprawl | Houston: most fans drive to events. | template | none found this pass | low | no |
| Indianapolis | sprawl | Indianapolis: most fans drive to events. | template | none found this pass | low | no |
| San Antonio | sprawl | San Antonio: most fans drive to events. | template | none found this pass | low | no |
| Raleigh–Durham | sprawl | Raleigh–Durham: most fans drive to events. | template | none found this pass | low | no |
| Seattle | hub | Seattle: most fans drive to events; some take transit. | Link light rail | [Sound Transit](https://www.soundtransit.org/seahawks) (service, no share); Husky Stadium 37% by car already measured | medium | no |
| New York | hub | New York: most fans take transit or walk to events. | subway | [WNYC](https://wnyc.org/story/283116-more-fans-look-to-take-transit-to-see-yankees-than-mets/): Yankees ~45% transit, Mets 25–30% subway (announced, MTA, old) | medium | check (lean transit; give MetLife own figure) |
| Chicago | hub | Chicago: most fans drive to events; some take transit. | template | venue figures already measured (Wrigley, United Center) | high | no |
| Boston | hub | Boston: most fans drive to events; some take transit. | template | [Red Sox](https://www.mlb.com/redsox/fans/fenway-fest/transportation-and-parking) (guidance, no share) | low | check |
| Philadelphia | hub | Philadelphia: most fans drive to events; some take transit. | Broad Street Line | [KYW](https://www.audacy.com/kywnewsradio/news/local/septa-world-cup-game-1-fan-transportation): ~16,000 riders per Eagles game (announced) | medium | no |
| Pittsburgh | hub | Pittsburgh: most fans drive to events; some take transit. | template | none found this pass | low | no |
| Cleveland | hub | Cleveland: most fans drive to events; some take transit. | template | none found this pass | low | no |
| Austin | hub | Austin: most fans drive to events; some take transit. | Red Line rail | [Austin Free Press](https://austinfreepress.org/transit-goals-thousands-ride-buses-and-rails-to-austin-fc-games/): 4,500 riders on 2024 opener; ~2,000 typical capacity (announced) | medium | no |
| Sacramento | hub | Sacramento: most fans drive to events; some take transit. | template | none found this pass | low | no |
| Las Vegas | hub | Las Vegas: many fans walk over from the Strip; most others drive. | walk from the Strip | [Allegiant Stadium](https://www.allegiantstadium.com/plan-your-visit/directions-parking) (guidance, no share) | low | no (copy exception; check) |
| Minneapolis–St. Paul | hub | Minneapolis–St. Paul: most fans drive to events; some take transit. | light rail | [WCCO/CBS](https://www.cbsnews.com/amp/minnesota/news/minn-sports-teams-counting-on-mass-transit-to-get-fans-to-games): Vikings 27%, Twins 14% by light rail (estimated, pre-2016) | medium | no |
| New Orleans | hub | New Orleans: most fans drive to events; some take transit. | template | none found this pass | low | no |
| Ottawa–Gatineau | hub | Ottawa–Gatineau: most fans drive to events. | template | [CBC](https://www.cbc.ca/news/canada/ottawa/oc-transpo-ottawa-senators-bus-1.4894528): game buses cut 26 → 19 trips after low ridership (announced, 2018) | medium | check (lean sprawl) |
| Salt Lake City | hub | Salt Lake City: most fans drive to events; some take transit. | template | none found this pass | low | no |
| Edmonton | hub | Edmonton: most fans drive to events; some take transit. | template | none found this pass | low | no |
| Washington DC | hub | Washington DC: most fans drive to events; some take transit. | Metro | [DCist](https://dcist.com/story/19/10/22/a-guide-to-getting-to-nats-park-for-the-world-series/): ~1 in 4 rode Metro home, 2019 Wild Card (announced); 21,000+ at 2008 opener (announced) | medium | no (add Nationals Park figure) |
| Portland | hub | Portland: most fans drive to events; some take transit. | MAX light rail | [KGW](https://www.kgw.com/article/news/local/blazers-game-fans-return-rose-quarter/283-8943a455-623b-40cb-b88d-957cb2c9ed14): ~10% expected by TriMet, 2021 (estimated) | low | no |
| St. Louis | hub | St. Louis: most fans drive to events; some take transit. | template | none found this pass | low | no |
| Denver | hub | Denver: most fans drive to events; some take transit. | light rail | [RTD](https://www.rtd-denver.com/community/news/2025/rtd-provides-service-and-connections-to-nov-6-broncos-vs-raiders-game) (service, no share) | low | no |
| Montreal | transit | Montreal: most fans take transit or walk to events. | métro | [Canadiens](https://www.nhl.com/fr/canadiens/community/vert-le-but/transport) (partnership, no share) | low | no (thin) |
| Vancouver | transit | Vancouver: most fans take transit or walk to events. | SkyTrain | [TransLink](https://www.translink.ca/news/2026/july/how%20vancouvers%20fifa%20world%20cup%20experience%20was%20powered%20by%20transit): +54% at BC Place stations on match days (announced) | medium | no |
| Mexico City | transit | Mexico City: most fans take transit or walk to events. | Tren Ligero | [Excélsior](https://www.excelsior.com.mx/deportes/tren-ligero-mundial-2026-ruta-mas-rapida-para-llegar-estadio-banorte-cdmx): 25,000 cleared after a match (announced) | low | no (check a non-World-Cup date) |
| Toronto | transit | Toronto: most fans take transit or walk to events. | GO trains | [Global News](https://globalnews.ca/news/11961077/toronto-world-cup-metrolinx-ridership/): ~30,000 GO/UP riders per World Cup match day (announced) | medium | no |

## Self-audit

**Thin evidence (type rests on reputation, not a count):** 15 of 17 sprawl cities, Pittsburgh, Cleveland, Sacramento, New Orleans, Salt Lake City, Edmonton, St. Louis, Boston, Denver, Montreal. None of these contradicts its type; none is confirmed either.

**Old or special-event figures:** the New York figures (MTA via WNYC) are over a decade old. Minneapolis shares predate the current stadium. Toronto, Vancouver and Mexico City figures are World Cup match days, with road closures and heavy promotion, so they likely overstate a normal date. Portland's figure is pandemic-era.

**My own arithmetic (estimated):** Washington ~half at the 2008 opener (21,000 ÷ 41,339); Philadelphia ~a quarter (16,000 ÷ ~67,000); Austin 1–2 in 10 (2,000–4,500 ÷ ~20,500); Mexico City ~3 in 10 on light rail (25,000 ÷ ~87,000). Seat counts come from the same search results; ridership numerators may include people who weren't at the event.

**From memory, not a source:** MetLife Stadium being in New Jersey and car-heavy; Gillette Stadium being in Foxborough and car-heavy; Quebec typography (space before the colon); "auto" vs. "coche"/"carro" in Mexican Spanish; that fans in the US and Canada read "transit" as public transport.

**What Kylie should check by hand:**

- New York type, the one change that would move numbers: re-read the MTA figures in [WNYC](https://wnyc.org/story/283116-more-fans-look-to-take-transit-to-see-yankees-than-mets/) and look for a newer MTA or team figure.
- Atlanta's 35%: open [SaportaReport](https://saportareport.com/marta-to-help-drive-success-of-new-falcons-stadium/sections/abcarticles/maria_saporta/) and, if possible, the underlying Falcons survey.
- Ottawa–Gatineau: [CBC](https://www.cbc.ca/news/canada/ottawa/oc-transpo-ottawa-senators-bus-1.4894528) is from 2018; check whether OC Transpo's game service has changed since.
- Las Vegas exception line: [Allegiant Stadium transportation](https://www.allegiantstadium.com/plan-your-visit/directions-parking) gives no share; "many fans walk" is my reading of the guidance.
- Mexico City outside the World Cup: [Proceso](https://www.proceso.com.mx/nacional/cdmx/2026/6/1/asi-se-podra-llegar-al-estadio-banorte-el-dia-de-la-inauguracion-del-mundial-372999.html) describes the World Cup plan only.
- Toronto ridership scope (match-goers vs. all riders): [Global News](https://globalnews.ca/news/11961077/toronto-world-cup-metrolinx-ridership/).
- French and Spanish lines: a native Quebec and Mexican reviewer.
- The mock: confirm the map key has room for a 67-character line at phone width for Minneapolis–St. Paul.
