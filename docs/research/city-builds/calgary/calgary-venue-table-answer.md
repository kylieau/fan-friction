# Calgary (YYC) — Fan/Friction venue, team and crowd research

**As of:** Tuesday, October 13, 2026 (all "current" statements are as of this date unless a different as-of date is given in the row).
**Time zone:** America/Edmonton (Mountain Time) — [rundida race page](https://rundida.com/ja/marathon/calgary/).
**Method:** public web sources only. Every figure is linked to the page it came from. Where no public source was found, the cell says **gap** and the gaps list says what was searched. Nothing below is estimated or inferred from capacity. Proposals are labelled **PROPOSAL**; confirmed construction is labelled **SCHEDULED/UNDER CONSTRUCTION**.

**Source-quality legend:** **O** = official (venue, team, league, government, university, organizer); **R** = reported (news, trade press); **W** = Wikipedia/aggregator (used only where no official page was reached; flagged for re-check); **F** = forum/unverified (shown only to expose a conflict; never used as the build figure).

---

## 1. Recommended boundary and edge venues

**Recommendation: use the Statistics Canada Calgary CMA as the core, plus one named edge venue (Spruce Meadows) and one separately-flagged edge venue (Seaman Stadium, Okotoks).**

| Area | Recommended treatment | Reasoning (sourced) |
|---|---|---|
| City of Calgary | **In (core)** | Contains every pro venue except Spruce Meadows. |
| Airdrie, Chestermere, Cochrane, Rocky View County, Crossfield, Irricana, Beiseker | **In (core)** | All are components of the Calgary CMA per the City of Calgary's census page ([calgary.ca population profile](https://www.calgary.ca/research/population-profile.html)). No 1,000+ fixed rooms were found in these municipalities during this pass (see gaps list, item G-14). |
| Tsuut'ina Nation (Tsuu T'ina 145) | **In (core)** | Listed as a CMA component ([calgary.ca](https://www.calgary.ca/research/population-profile.html)). Hosts the Grey Eagle Event Centre, which markets itself as a Calgary concert venue ([Grey Eagle](https://greyeagleresortandcasino.ca/?p=9588)). |
| Spruce Meadows (Foothills County) | **In as named edge venue** | Not in the CMA ([calgary.ca](https://www.calgary.ca/research/population-profile.html)); ATCO Field is legally in Foothills County ([CPL 2026 season table](https://en.wikipedia.org/wiki/2026_Canadian_Premier_League_season), W) but uses a Calgary SW mailing address ([Showpass/Spruce Meadows](https://www.showpass.com/preview-to-the-masters/)) and is home to Calgary's CPL team, Cavalry FC. Event catchment is Calgary. |
| Okotoks (Foothills County) | **Separate edge case — recommend include, flag as Okotoks** | Not in CMA. Seaman Stadium is 18 km south of Calgary and the Dawgs were the Calgary Dawgs until 2005 ([Okotoks Dawgs](https://en.wikipedia.org/wiki/Okotoks_Dawgs), W). The Dawgs ticket office uses a Calgary 403-262 number ([dawgsbaseball.ca](https://dawgsbaseball.ca/news/2025-03-19-dawgs-to-host-brooks-energy-city-home-games)). Calgary Metropolitan Region Board boundaries include Okotoks ([CMR page](https://wikipedia.com/wiki/Calgary_Region), W). |
| Other Foothills municipalities (High River, Diamond Valley) | **Out** unless a venue ≥1,000 is identified | None found. |
| Banff, Canmore, Edmonton | **Out (separate destinations)** | No event-catchment evidence found tying them to Calgary venues. The PWHL Takeover Tour treated Calgary and Edmonton as separate markets ([PWHL notebook Apr 13 2026](https://www.thepwhl.com/en/news/2026/april/13/pwhl-weekly-notebook-apr-13-2026)). |

**Uncertain edge venues:** Spruce Meadows (county line), Seaman Stadium (Okotoks), Grey Eagle Event Centre (First Nation land inside the CMA). All three should keep their actual municipality in the `municipality` field so the scope decision is reversible.

---

## 2. Gap item 1 — Name and code

| Field | Recommendation | Evidence |
|---|---|---|
| Display name | **Calgary** | Every team in scope uses "Calgary" (Flames, Stampeders, Wranglers, Hitmen, Roughnecks, Surge, Wild FC; see Table C). Cavalry FC uses no city word in its name but is presented as Calgary's club ([CPL preview](https://www.cplsoccer.com/news/preview-cavalry-fc-vs-atletico-ottawa-april-12-2026)). Unlike Tampa Bay, no regional brand name is in use. |
| Short form | **Calgary** (or "YYC" as a casual tag) | — |
| Three-letter code | **YYC** | YYC is Calgary International Airport's code ([Spruce Meadows press release via World of Showjumping](https://www.worldofshowjumping.com/Scripts/Index.aspx?id=137685)), matching the airport-code precedent (TPA). **Caution:** leagues abbreviate the teams as **CGY**, not YYC — e.g. ESPN NHL box scores ([ESPN](https://www.espn.com/nhl/video/_/gameId/401803467)) and the NSL match page ([nsl.ca](https://www.nsl.ca/games/calgary-ottawa-2025-05-11)). Do not use YYC to match team abbreviations in feeds. |
| Covers | City of Calgary + CMA components + Spruce Meadows (+ Okotoks if accepted) | See Section 1. Airdrie and Cochrane **in** (CMA); Okotoks **edge, flagged**. |

---

## 3. Table A — fixed venues and rooms (largest first)

Capacity column format: *figure — configuration — label (official/reported/estimated) — source*. Each configuration is a separate figure; none are combined.

### A1. Venues with a setup at or above 5,000

| # | Current official name / aliases (rename dates) | Parent / grounds | Municipality & scope | Coordinates (precision) | Capacity by configuration | Dated capacity changes | Roof | Tenants by date | Schedule / ticketing / feed | Observed attendance (not capacity) | Access & parking | Status through 2028 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A1-1 | **McMahon Stadium** | Owned by University of Calgary, operated by McMahon Stadium Society ([CP24](https://www.cp24.com/news/sports/2024/11/08/calgary-stampeders-to-host-cfl-grey-cup-championship-in-2026/)) | City of Calgary (NW). **In.** | gap | 35,400 seated — football — R ([CP24](https://www.cp24.com/news/sports/2024/11/08/calgary-stampeders-to-host-cfl-grey-cup-championship-in-2026/)); expandable to 46,020 with temporary seats — football (Grey Cup) — R ([FBSchedules](https://fbschedules.com/?p=207680)). Concert configuration: **gap**. | Earlier figure "around 35,000" (2018) ([Red Deer Advocate](https://www.reddeeradvocate.com/sports/olympics-would-mean-big-revamp-to-calgarys-aging-football-stadium-bid-corp/)); a 34,000 figure appears in a 2026-Olympic bid quote (F, [SkyriseCities](https://calgary.skyrisecities.com/forum/goto/post?id=1307037)). Same building; differences reflect date and rounding, do not change classification. | Open | Stampeders (CFL); Dinos football (U Sports); Calgary Wild FC (NSL, 2025–) ([3DownNation](https://3downnation.com/2026/04/10/university-of-calgary-pursuing-on-campus-replacement-for-mcmahon-stadium-not-fit-for-stampeders)) | Ticketmaster venue ID: **gap (not verified)**. Feeds: see Table C. | Stampeders 2025 avg 22,295 ([2025 CFL season](https://en.wikipedia.org/wiki/2025_CFL_season), W; matches [3DownNation](https://dev.3downnation.com/?p=197172), R). Wild FC home opener 8,552 on 2025-05-11 ([nsl.ca](https://www.nsl.ca/games/calgary-ottawa-2025-05-11), O). | gap | **113th Grey Cup scheduled Nov 15, 2026** ([FBSchedules](https://fbschedules.com/?p=207680)); Grey Cup Festival Nov 8–15 at McMahon and Stampede Grounds ([CTV](https://www.ctvnews.ca/calgary/article/out-of-mcmahon-back-on-campus-dinos-propose-new-multi-sport-stadium/)). **PROPOSAL:** U of C seeking bids for a smaller on-campus "fit-for-varsity" replacement ([3DownNation](https://3downnation.com/2026/04/10/university-of-calgary-pursuing-on-campus-replacement-for-mcmahon-stadium-not-fit-for-stampeders)). Re-check: Dec 2026. |
| A1-2 | **BMO Centre** (Western Canada's largest convention centre). Expansion opened June 2024 ([calgary.ca FAQ](https://www.calgary.ca/major-projects/big-four-faq.html); [World Construction Network](https://worldconstructionnetwork.com/?p=28765)). | **Stampede Park** | City of Calgary (Victoria Park / Stampede Park). **In.** | gap | 33,000 = maximum **building occupancy** across all halls — O ([calgary.ca](https://calgary.ca/major-projects/bmo-centre.html)). **This is not an event capacity.** Per-hall concert/standing figures: **gap**. A Tourism Calgary listing shows theatre 24,000 / reception 19,236 and per-hall banquet/reception figures (e.g. Hall B reception 3,947) ([Visit Calgary](https://www.visitcalgary.com/venues-and-suppliers/bmo-centre-at-stampede-park)) but the hall list appears to pre-date the expansion (Hall A was demolished per [calgary.ca FAQ](https://www.calgary.ca/major-projects/big-four-faq.html)). Treat as **gap** for build. | Hall A and Stampede Corral demolished for expansion ([calgary.ca FAQ](https://www.calgary.ca/major-projects/big-four-faq.html)); Hall F built 2020 ([WCN](https://worldconstructionnetwork.com/?p=28765)). | Indoor | Conventions; Stampede exhibits (BMO Market) ([CFWE Radio](https://cfweradio.ca/?p=42041)) | Stampede venue site ([venues.calgarystampede.com](https://venues.calgarystampede.com/venues/)) | n/a | Victoria Park/Stampede LRT | Open. Re-check hall configurations Q1 2027. |
| A1-3 | **Scotiabank Saddledome**. Aliases: Olympic Saddledome (1983–1995/96), Canadian Airlines Saddledome (1995/96–2000), Pengrowth Saddledome (2000–2010); renamed Scotiabank Saddledome Oct 2010 ([NHL fandom](https://thenhl.fandom.com/wiki/Scotiabank_Saddledome?oldid=4571); [simple wiki](https://simple.wikipedia.com/wiki/Scotiabank_Saddledome), W). NLL floor branding: "WestJet Field at Scotiabank Saddledome" ([2026 NLL season](https://en.wikipedia.org/wiki/2026_NLL_season), W). No renames since 2016. | On **Stampede Park** grounds ([Stadium Journey](https://www.stadiumjourney.com/stadiums/scotiabank-saddledome-s51)) | City of Calgary (Victoria Park). **In.** | 51.03750, −114.05194 (arc-second, W) ([simple wiki](https://simple.wikipedia.com/wiki/Scotiabank_Saddledome)) | 19,289 — ice hockey (total incl. suites, clubs, press, alumni lounge) — O-adjacent ([Ticketmaster blog](https://blog.ticketmaster.com/step-inside-scotiabank-saddledome-calgary-ab/)). Lacrosse listed at same 19,289 ([2026 NLL season](https://en.wikipedia.org/wiki/2026_NLL_season), W). Concert end-stage / centre-stage: **gap**. | 16,605 (1983–88) → 20,240 (1988–95) → 19,289 (1995–present) ([simple wiki](https://simple.wikipedia.com/wiki/Scotiabank_Saddledome), W). | Indoor | Flames (NHL), Hitmen (WHL), Roughnecks (NLL), Wranglers (AHL, 2022–) — through 2026-27 ([World Construction Network](https://worldconstructionnetwork.com/?p=102446)) | Ticketmaster venue ID: **gap (not verified)**. | See Table C. Sellout example 19,289 on 2026-02-03 ([ESPN](https://www.espn.in/nhl/video/_/gameId/401803236)). PWHL neutral site 16,150 on 2026-04-01 ([PWHL](https://www.thepwhl.com/en/news/2026/april/02/toronto-takes-down-ottawa-2-1-in-pwhl-s-calgary-debut)). | Limited pay parking on grounds; LRT advised ([Consequence venue page](https://concerts.consequence.net/venues/scotiabank-saddledome)). | **Farewell season announced Mar 20, 2026** ([2025–26 Flames season](https://en.wikipedia.org/wiki/2025%E2%80%9326_Calgary_Flames_season), W). Tenants move to Scotia Place for 2027-28 ([WCN](https://worldconstructionnetwork.com/?p=102446)). City has two years after Scotia Place opens to demolish; Stampede expects demolition complete 2029 or 2030 ([CTV](https://www.ctvnews.ca/calgary/article/calgary-stampede-shares-a-look-at-the-future-stampede-park/)). Re-check: Jun 2027. |
| A1-4 | **Scotia Place** (main bowl). Planning name "Calgary Event Centre" ([Wikipedia](https://en.wikipedia.org/wiki/Scotia_Place), W). | Event Centre block, east Victoria Park, north of Stampede Park | City of Calgary. **In.** | 51.03972, −114.05222 (arc-second, W) ([Wikipedia](https://en.wikipedia.org/wiki/Scotia_Place)) | 18,400 — hockey — O ([NHL.com](https://www.nhl.com/news/calgary-flames-unveil-plans-for-new-arena)). One outlet says "18,000-seat" ([WCN](https://worldconstructionnetwork.com/?p=102446)) — rounding; use 18,400. Concert configs: **gap**. | — | Indoor | Scheduled: Flames, Hitmen, Roughnecks, Wranglers from 2027-28 ([WCN](https://worldconstructionnetwork.com/?p=102446)) | Not yet ticketing. | n/a | 450-stall parkade ([Yahoo/CBC](https://ca.news.yahoo.com/motoring-along-scotia-place-construction-215133980.html)); 6 St SE underpass under construction ([calgary.ca Aug 2026](https://www.calgary.ca/major-projects/scotia-place/construction/project-updates/august-2026-newsletter.html)) | **UNDER CONSTRUCTION**; on time and on budget as of June 2, 2026 ([Global News](https://globalnews.ca/news/11887553/calgary-scotia-place-project-update-june/)); fall 2027 opening. Re-check monthly from Mar 2027. |
| A1-5 | **GMC Stadium**. Alias: Stampede Grandstand (renamed June 2022) ([CTV](https://www.ctvnews.ca/calgary/article/calgary-stampede-renames-iconic-grandstand-to-gmc-stadium/)). | **Stampede Park** | City of Calgary. **In.** | gap | 17,000 seated — O ([Stampede venues](https://venues.calgarystampede.com/event-spaces/gmc-stadium)). Additional 8,000 standing room — O (same page). **Do not add standing to seated.** Grandstand-show configuration loses approx. 2,500 seats — F only ([SkyriseCities quote of 2026 bid doc](https://calgary.skyrisecities.com/forum/goto/post?id=1307037)); treat as **gap** pending primary bid document. | — | Open (partially covered seating per F) | Stampede rodeo, Rangeland Derby, Grandstand Show; Monster Jam (Sep 13, 2026) ([TicketSmarter](https://www.ticketsmarter.com/venues/gmc-stadium)) | Ticketmaster ID: **gap**. | "Over 350,000" pass through during Stampede (cumulative, O-quoted release) ([CTV](https://calgary.ctvnews.ca/calgary-stampede-renames-iconic-grandstand-to-gmc-stadium-1.5944594)) — **cumulative, not a single-event crowd**. | gap | **PROPOSAL:** expansion and possible future Stampeders home in 2026 Stampede master plan ([CTV](https://www.ctvnews.ca/calgary/article/calgary-stampede-shares-a-look-at-the-future-stampede-park/)). Re-check: 2027. |
| A1-6 | **ATCO Field** (at Spruce Meadows). Built on the "Meadows on the Green" ring ([Ticketmaster team page](https://www.ticketmaster.com/cavalry-fc-tickets/artist/2557303?page=1)). | **Spruce Meadows** grounds | Foothills County. **Edge — include.** | gap | 6,000 seated — soccer — R/W ([CPL 2026 season](https://en.wikipedia.org/wiki/2026_Canadian_Premier_League_season); [Ticketmaster team page](https://www.ticketmaster.com/cavalry-fc-tickets/artist/2557303?page=1)). | 2019: club said adding 2,000 seats would take it to around 6,000 ([CBC](https://amp.cbc.ca/news/canada/calgary/cavalryfc-spruce-meadows-calgary-foothills-county-1.5287416)). | Open | Cavalry FC (CPL, 2019–) | Ticketmaster artist page exists for Cavalry ([Ticketmaster](https://www.ticketmaster.ca/cavalry-fc-tickets/artist/2557303?page=4)); venue ID **gap**. | 2026 league avg 4,018; high 6,012; low 3,001 ([2026 Cavalry season](https://en.wikipedia.org/wiki/2026_Cavalry_FC_season), W). | Free parking; **shuttle service discontinued** ([Showpass/Spruce Meadows](https://www.showpass.com/preview-to-the-masters/)). | Open. **PROPOSAL (2019, 30-year plan):** 12,000-seat stadium on the All-Canada Ring ([CTV](https://calgary.ctvnews.ca/new-12-000-seat-soccer-stadium-part-of-spruce-meadows-future-plan-1.4599320)). 2026 CPL playoff home match at ATCO Field (Oct 31–Nov 22 window) ([OurSports Central](https://www.oursportscentral.com/services/releases/playoff-soccer-returns-to-atco-field/n-6412751)). |
| A1-7 | **Seaman Stadium** (Okotoks) | Dawgs complex (with Tourmaline Field, Duvernay Fieldhouse) | Town of Okotoks. **Edge — flagged.** | gap | 5,200 — baseball — **includes stadium and berm seating** — O ([dawgsbaseball.ca](https://dawgsbaseball.ca/facilities/seaman-stadium/)). Seated-only figure: **gap**. | 2024: more grandstand seats but "overall capacity hasn't changed" ([Western Wheel](https://westernwheel.ca/local-news/dawgs-to-host-wcbl-all-star-games-announce-stadium-additions-7737116)). 2026: new section adds 180 fans per team ([dawgsbaseball.ca](https://dawgsbaseball.ca/news/2025-12-02-2026-dawgs-schedule-officially-released)) vs 160 seats per a preview ([Alberta Dugout Stories](https://albertadugoutstories.com/2026/04/28/2026-okotoks-dawgs-season-preview/)). Whether 5,200 includes the 2026 section: **gap**. | Open | Okotoks Dawgs (WCBL, 2007–) | Dawgs ticketing (tickets.dawgsbaseball.ca) — not Ticketmaster ([dawgsbaseball.ca](https://dawgsbaseball.ca/news/2025-12-02-2026-dawgs-schedule-officially-released)). | 2023 avg 4,558 regular season; 5,462 avg over four playoff games ([Alberta Dugout Stories](https://albertadugoutstories.com/2024/05/01/okotoks-dawgs-2024-season-preview/)). | gap | Open. |
| A1-8 | **Stampede Park — open grounds** (parent record only) | Parent of A1-2, A1-3, A1-5, A2-2, A2-5 | City of Calgary | gap | No fixed capacity. Gate counts in Table B. | — | Open | Calgary Stampede (organizer) | — | Table B | Victoria Park/Stampede LRT | 20-year master plan (2026) proposes Big Four replacement, ag building upgrade ([CTV](https://www.ctvnews.ca/calgary/article/calgary-stampede-shares-a-look-at-the-future-stampede-park/)). |
| A1-9 | **Spruce Meadows — International Ring and grounds** (parent record) | Parent of A1-6 | Foothills County. **Edge.** | gap | International Ring spectator capacity: **gap**. GA tickets do not guarantee International Ring seating ([Showpass](https://www.showpass.com/fr/masters-general-admission-2)). | — | Open | Show jumping tournaments | Showpass (not Ticketmaster) ([Showpass](https://www.showpass.com/fr/masters-general-admission-2)) | Table B | Free parking ([Showpass](https://www.showpass.com/preview-to-the-masters/)) | Open. |

### A2. Rooms between about 1,000 and 4,999 (pre-listed, muted, no friction label)

| # | Current official name / aliases | Parent | Municipality & scope | Coordinates | Capacity by configuration | Changes | Roof | Tenants | Ticketing / feed | Observed attendance | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A2-1 | **Jack Simpson Gymnasium** ("the Jack") | University of Calgary kinesiology complex (shares lobby with Olympic Oval) ([Stadium Journey](https://stadiumjourney.com/stadiums/jack-simpson-gymnasium-calgary-dinos)) | City of Calgary. **In.** | 51.07778, −114.13361 (arc-second, W) ([Wikipedia](https://en.wikipedia.org/wiki/Jack_Simpson_Gymnasium)) | 3,454 — basketball — W/R ([Wikipedia](https://en.wikipedia.org/wiki/Jack_Simpson_Gymnasium); [Stadium Journey](https://stadiumjourney.com/stadiums/jack-simpson-gymnasium-calgary-dinos)) | — | Indoor | Dinos basketball and volleyball (1987–) | godinos.com (link listed on [Wikipedia](https://en.wikipedia.org/wiki/Jack_Simpson_Gymnasium)); no Ticketmaster ID found | "Pack the Jack" draws around 2,000 ([Stadium Journey](https://stadiumjourney.com/stadiums/jack-simpson-gymnasium-calgary-dinos), R) | Open. |
| A2-2 | **Southern Alberta Jubilee Auditorium** ("the Jube") | Government of Alberta ([IBDB](https://www.ibdb.com/touring-theatre/southern-alberta-jubilee-auditorium-675)) | City of Calgary. **In.** | gap | **Conflict (does not change classification):** 2,538 ([list of Canadian music venues](https://en.wikipedia.org/wiki/List_of_music_venues_in_Canada), W) vs approx. 2,713 ([IBDB](https://www.ibdb.com/touring-theatre/southern-alberta-jubilee-auditorium-675), R) vs "just over 2,700" ([Avenue Calgary](https://www.avenuecalgary.com/things-to-do/large-scale-arts-venues-in-calgary), R). All are fixed-seat theatre counts. | Renovated 2004–2005 ([IBDB](https://www.ibdb.com/touring-theatre/southern-alberta-jubilee-auditorium-675)) | Indoor | Alberta Ballet, Calgary Opera, Broadway Across Canada ([Avenue Calgary](https://www.avenuecalgary.com/things-to-do/large-scale-arts-venues-in-calgary)) | Ticketmaster ID: **gap** | n/a | Open. |
| A2-3 | **WinSport Event Centre**. Alias: WinSport Arena (renamed 2022) ([CTV](https://calgary.ctvnews.ca/winsport-puts-arena-name-on-ice-in-favour-of-event-centre-1.6057381)). The PWHL still called it "WinSport Arena" in March 2026 ([PWHL](https://www.thepwhl.com/en/news/2026/march/30/pwhl-weekly-notebook-mar-30-2026)). | Markin MacPhail Centre, Canada Olympic Park | City of Calgary. **In.** | gap | End-stage concert 3,100 — R (booking network) ([Venue Coalition](https://venuecoalition.com/winsport-event-centre/)); in-the-round 4,240 (includes floor) — R (same). Basketball: 3,200 per team ([CBC](https://amp.cbc.ca/news/canada/calgary/calgary-surge-home-game-saddledome-1.7038611)) vs 2,900 ([TicketSmarter](https://www.ticketsmarter.com/p/calgary-surge-tickets), resale — not usable) vs ~3,000 curling ([World Curling](https://worldcurling.org/2025/01/calgary-to-host-wwcc2026/), O). | — | Indoor | Calgary Surge (CEBL, 2023–) ([CEBL](https://www.cebl.ca/calgary-surge-announce-three-marquee-games-across-alberta-this-summer)) | **Ticketmaster venue ID 140559 — verified** on the Ticketmaster venue page ([ticketmaster.ca](https://ticketmaster.ca/winsport-event-centre-tickets-calgary/venue/140559)). | Surge attendance: **gap** | Open. Hosted World Women's Curling Mar 14–22, 2026 ([World Curling](https://worldcurling.org/2025/01/calgary-to-host-wwcc2026/)). |
| A2-4 | **Grey Eagle Event Centre** (Grey Eagle Resort & Casino) | Grey Eagle resort | Tsuut'ina Nation (in CMA). **In.** | gap | 2,952 general admission — O ([Grey Eagle](https://greyeagleresortandcasino.ca/?p=9588)); 2,511 theatre — O (same). Venue capacity sheet lists 2,600 theatre/reception ([AMTA-hosted PDF](https://amta.ca/wp-content/uploads/2026/02/Grey_Eagle_Event_Room_Capacities-003.pdf)) — conflicting; below threshold either way. | Opened for concerts 2014 ([Grey Eagle](https://greyeagleresortandcasino.ca/?p=9588)) | Indoor | Concerts, trade shows | Ticketmaster ID: **gap** | n/a | Open. |
| A2-5 | **Nutrien Western Event Centre**. Alias: Agrium Western Event Centre (opened June 2014) ([Avenue Calgary](https://www.avenuecalgary.com/things-to-do/inside-the-new-agrium-western-event-centre)). Rename date: **gap**. | **Stampede Park** | City of Calgary. **In.** | gap | 2,500 — arena seating (rodeo/show floor) — O ([Stampede venues](https://venues.calgarystampede.com/nutrien-western-event-centre/)) | — | Indoor | Stampede agriculture competitions ([Western Standard](https://www.westernstandard.news/alberta/calgary-stampede-2026-wraps-with-record-crowds-and-275-noise-complaints/74969)) | gap | n/a | Open. |
| A2-6 | **Max Bell Centre — Ken Bracko Arena** (Arena 1). Renamed Sept 2017 from Max Bell Arena 1 ([Ice Hockey Wiki](https://icehockey.fandom.com/wiki/Ken_Bracko_Arena)). | Max Bell Centre (with Perry Cavanagh Arena #2) ([calgary.ca](https://www.calgary.ca/csps/recreation/arenas.html)) | City of Calgary. **In.** | 51.0422, −114.0036 (4 dp, W/DBpedia) ([DBpedia](https://dbpedia.org/page/Max_Bell_Centre_(Calgary))) | 2,121 seated — hockey — W ([Wikipedia](https://en.wikipedia.org/wiki/Max_Bell_Centre_(Calgary))); "over 3,000" standing — W (same; range-like, **not a build figure**). Another listing says 3,100 ([Elite Prospects](https://www.eliteprospects.com/arena/1049/max-bell-centre)) — unclear measure. | $14M renovation completed 2022 ([Wikipedia](https://en.wikipedia.org/wiki/Max_Bell_Centre_(Calgary))) | Indoor | Calgary Canucks (AJHL) | gap | n/a | Open. Hosted 2025 Centennial Cup ([Adrenalin](https://adrenalinmag.ca/articles/calgary-alberta)). |
| A2-7 | **Jack Singer Concert Hall** in **Werklund Centre**. Werklund Centre aliases: Arts Commons (Dec 2014–June 2024), EPCOR Centre for the Performing Arts (before) ([Wikipedia](https://en.wikipedia.org/wiki/Werklund_Centre)). | Werklund Centre (multi-room) | City of Calgary (downtown). **In.** | gap | 1,800 ([Wikipedia](https://en.wikipedia.org/wiki/Werklund_Centre), W) vs 1,797 ([music venues list](https://en.wikipedia.org/wiki/List_of_music_venues_in_Canada), W) vs 1,197 ([Avenue Calgary](https://avenuecalgary.com/Things-to-Do/Large-Scale-Arts-Venues-in-Calgary), R — likely an error). The 1,197 figure would still be ≥1,000; no classification change. | — | Indoor | Calgary Philharmonic ([CPO](https://calgaryphil.com/?p=391)) | gap | n/a | **UNDER CONSTRUCTION next door:** new 1,000-seat theatre (Werklund Centre Transformation phase one) ([calgary.ca FAQ](https://www.calgary.ca/major-projects/big-four-faq.html)); Olympic Plaza fenced off (R, [Cities Insider](https://citiesinsider.com/country/canada/calgary/theatres-&-performing-arts/en)). Opening date: **gap**. |
| A2-8 | **Father David Bauer Arena** | City of Calgary arena | City of Calgary. **In.** | gap | 1,750 viewer seats — O ([calgary.ca arenas](https://www.calgary.ca/csps/recreation/arenas.html)) | — | Indoor | Tenants: **gap** | gap | n/a | Open. |
| A2-9 | **Esso Community Arena** at Scotia Place | **Child of Scotia Place** (A1-4) — separate room | City of Calgary | gap | 1,000 — O-quoted ([NHL.com](https://www.nhl.com/news/calgary-flames-unveil-plans-for-new-arena); [CTV](https://calgary.ctvnews.ca/calgary-s-new-event-centre-will-be-named-scotia-place-1.6973161)). Name per City newsletter ([Discover Airdrie](https://discoverairdrie.com/articles/scotia-place-structure-rising-as-work-accelerates-downtown)). | — | Indoor | Not announced | n/a | n/a | **UNDER CONSTRUCTION**, fall 2027. |
| A2-10 | **Big Four Building / Big Four Roadhouse** | **Stampede Park** | City of Calgary | gap | Event capacity: **gap** (118,000 sq ft, two levels — older O page via archive ([Library and Archives Canada web archive](https://bac-lac.wayback.archive-it.org/web/20120716152514/http://venues.calgarystampede.com/facilities))) | — | Indoor | Stampede concerts (Big Four Roadhouse) ([LiveWire](https://livewirecalgary.com/2026/07/04/calgary-stampede-2026-day-one-wraps-with-records-and-rodeo-thrills/)) | gap | n/a | **PROPOSAL:** demolition and replacement in master plan ([CTV](https://www.ctvnews.ca/calgary/article/calgary-stampede-shares-a-look-at-the-future-stampede-park/)). |

### A3. Closed, demolished or proposed (do not route new events here)

| Name | Status | Last capacity (for history only) | Source |
|---|---|---|---|
| Foothills Stadium (formerly Burns Stadium) | **Demolished late 2024**; diamond kept until construction | 6,000 baseball (W) | [calgary.ca Fieldhouse](https://www.calgary.ca/fieldhouse); [Wikipedia](https://en.wikipedia.org/wiki/Foothills_Stadium) |
| Stampede Corral | **Demolished Dec 2020–2021** | 6,475 seated plus standing (W) | [Wikipedia](https://www.wikipedia.com/wiki/Stampede_Corral); [CBC](https://www.cbc.ca/news/canada/calgary/stampede-corral-demolition-history-1.5653056) |
| Foothills Multisport Fieldhouse | **PROPOSAL / design stage 2026**; partially funded | 10,000 spectators (2019 plan figure, R) | [calgary.ca](https://www.calgary.ca/fieldhouse); [Global News](https://globalnews.ca/news/6245871/calgary-fieldhouse-construction-plans-go-ahead) |
| U of C on-campus Dinos stadium | **PROPOSAL** (bids sought 2026) | Range 3,500–7,000 only (**range — gap for build**) | [CTV](https://www.ctvnews.ca/calgary/article/out-of-mcmahon-back-on-campus-dinos-propose-new-multi-sport-stadium/); [3DownNation](https://3downnation.com/2026/04/10/university-of-calgary-pursuing-on-campus-replacement-for-mcmahon-stadium-not-fit-for-stampeders) |
| Spruce Meadows 12,000-seat stadium | **PROPOSAL** (30-year area plan, 2019) | 12,000 | [CTV](https://calgary.ctvnews.ca/new-12-000-seat-soccer-stadium-part-of-spruce-meadows-future-plan-1.4599320) |
| GMC Stadium expansion / Stampeders move | **PROPOSAL** (2026 master plan) | — | [CTV](https://www.ctvnews.ca/calgary/article/calgary-stampede-shares-a-look-at-the-future-stampede-park/) |

---

## 4. Gap items 2 and 3 — capacity care and rooms around the thresholds

**Rooms between about 4,500 and 5,500** (each counts on its own figure):

| Room | Sourced figure | Treatment | Why care is needed |
|---|---|---|---|
| Seaman Stadium (Okotoks) | **5,200** incl. berm ([dawgsbaseball.ca](https://dawgsbaseball.ca/facilities/seaman-stadium/)) | **Counts (≥5,000)** if Okotoks is accepted | Figure mixes fixed seats and lawn berm; no seated-only figure; 2026 seat addition (160 vs 180, see A1-7) may not be reflected. |
| WinSport Event Centre, in-the-round | **4,240** ([Venue Coalition](https://venuecoalition.com/winsport-event-centre/)) | **Under the line** | Includes floor standing; must not be treated as seated. |
| GMC Stadium, Grandstand-show setup | 17,000 minus ~2,500 per F source only | **gap** for that setup; 17,000 seated stands | Forum quote only. |

No other room in scope has a sourced figure between 4,500 and 5,500.

**Rooms near 1,000:** Esso Community Arena (1,000, not yet open), new Werklund 1,000-seat theatre (not yet open), Father David Bauer Arena (1,750), Jack Singer Concert Hall (three conflicting figures, all ≥1,000).

**Range-only or non-capacity figures that must stay blank:** BMO Centre per-hall concert capacity (33,000 is building occupancy); Max Bell "over 3,000" standing; U of C stadium 3,500–7,000; Saddledome concert configurations; McMahon concert configuration; Scotia Place concert configurations; Spruce Meadows International Ring.

---
## 5. Table B — open sites and dated crowd events (event records, not rooms)

Count types: **gate** = turnstile/gate admissions (organizer); **announced** = organizer press figure; **estimated** = organizer or police crowd estimate; **participants** = registered runners (not spectators). These are never converted into one another.

| Event | Organizer | Dates | Map point / footprint | Daily count | Peak concurrent | Multi-day total | Count type | Schedule source | Status | Overlap / dedup with fixed rooms |
|---|---|---|---|---|---|---|---|---|---|---|
| **Calgary Stampede 2026** | Calgary Exhibition & Stampede | Sneak-a-Peek Thu Jul 2; run Fri Jul 3 – Sun Jul 12, 2026 | Stampede Park (A1-8) | Sneak-a-Peek 32,024; Day 1 155,518 (gate, both from [LiveWire](https://livewirecalgary.com/2026/07/04/calgary-stampede-2026-day-one-wraps-with-records-and-rodeo-thrills/) and [Western Standard](https://www.westernstandard.news/alberta/calgary-stampede-2026-wraps-with-record-crowds-and-275-noise-complaints/74969)); Day 3 (Family Day) 163,550 ([LiveWire](https://livewirecalgary.com/2026/07/06/calgary-stampede-2026-big-crowd-on-day-three-pushes-attendance-to-a-half-million/)); Day 4 100,977 ([LiveWire](https://livewirecalgary.com/2026/07/07/calgary-stampede-2026-day-4-attendance-holds-rodeo-pool-swap/)); Day 10 122,559 ([LiveWire](https://livewirecalgary.com/2026/07/12/calgary-stampede-says-experience-not-attendance-is-the-focal-point/)). Days 2, 5–9: **gap** (not collected in this pass). | **unknown** (not published) | 1,411,954 (gate) ([Global News](https://globalnews.ca/news/11964142/calgary-stampede-attendance-down-again-2026/)); 2025: 1,470,288; record 1,477,953 (2024) (same source) | gate (announced) | calgarystampede.com | Completed. **2027: Jul 9–18** ([LiveWire](https://livewirecalgary.com/2026/07/12/calgary-stampede-says-experience-not-attendance-is-the-focal-point/)) | Gate admission covers the grounds. GMC Stadium (rodeo, derby), Saddledome (2026 Stampede Powwow debut, Jul 6 — [LiveWire](https://livewirecalgary.com/2026/07/07/calgary-stampede-2026-day-4-attendance-holds-rodeo-pool-swap/)), Nutrien WEC, BMO Centre, Big Four Roadhouse and the Coca-Cola Stage ([CFWE](https://cfweradio.ca/?p=42041)) sit **inside** this gate. Log a ticketed room event only if separately ticketed; never sum it with the gate count. Surge game at Saddledome Jul 9, 2026 during Stampede ([TicketSmarter](https://www.ticketsmarter.com/p/calgary-surge-tickets); [CEBL](https://www.cebl.ca/calgary-surge-announce-three-marquee-games-across-alberta-this-summer)) is a separate ticketed room event. |
| **Calgary Stampede Parade 2026** | Calgary Stampede | Fri Jul 3, 2026 | Downtown Calgary route (footprint: gap) | — | — | 315,000 spectators | **estimated** ([LiveWire](https://livewirecalgary.com/2026/07/04/calgary-stampede-2026-day-one-wraps-with-records-and-rodeo-thrills/)) | calgarystampede.com | Completed | Not inside Stampede Park gate; do not add to gate total. |
| **Spruce Meadows 'Masters' 2026** (CSIO5*) | Spruce Meadows | Wed Sep 9 – Sun Sep 13, 2026; Labour Day preview Mon Sep 7 | Spruce Meadows grounds / International Ring (A1-9) | **unknown — unsized** | unknown | unknown | — | [Showpass](https://www.showpass.com/masters-general-admission-2) / [Spruce Meadows release](https://jumpernews.com/2026/09/09/the-worlds-best-a-5-million-cpkc-international-presented-by-rolex-pursuit-of-history-at-the-spruce-meadows-masters/) | Completed | ATCO Field (Cavalry) is on the same grounds; check for date clashes. Showpass sells separate hospitality packages (e.g. Champagne Garden) that include tournament entry ([Showpass](https://www.showpass.com/the-champagne-garden-at-the-masters)) — **duplicate-listing risk**. |
| **Spruce Meadows summer tournaments 2026** | Spruce Meadows | Jun 3–7, Jun 9–14, Jun 24–28, Jun 30–Jul 5 (as printed in prize list) ([Spruce Meadows PDF](https://www.sprucemeadows.com/data_assets/content/files/sp-a2ece2c1-83a2-4c41-b08a-d7eb5b769149-260603.pdf)) | Spruce Meadows | **unsized** | unknown | unknown | — | Spruce Meadows prize list | Completed | Same as above. **Conflict:** the same PDF prints a 'Masters' line "Sept 2–7, 2026" while the organizer release says Sep 9–13 ([release](https://jumpernews.com/2026/09/09/the-worlds-best-a-5-million-cpkc-international-presented-by-rolex-pursuit-of-history-at-the-spruce-meadows-masters/)); use the release. |
| **Calgary Folk Music Festival 2026** (47th) | Calgary Folk Music Festival | Thu Jul 23 – Sun Jul 26, 2026 ([Bandsintown](https://www.bandsintown.com/e/108235319); [Setline](https://setlineapp.com/festivals/calgary-folk-music-festival-2026)) | Prince's Island Park | **unknown — unsized** | unknown | unknown | — | calgaryfolkfest.com | Completed | No fixed room. **Ticketing is on AXS** (Prince's Island Park venue 130541 on [AXS](https://www.axs.com/au/venues/130541)), not Ticketmaster. Same park hosts Great Outdoors Comedy Festival Aug 28–30, 2026 (same AXS page) — separate event, also unsized. |
| **Servus Calgary Marathon Weekend 2026** | Calgary Marathon Society (Run Calgary) | Sat May 23 – Sun May 24, 2026 ([Showpass](https://www.showpass.com/calgary-marathon-weekend-2026/)); full marathon Sun May 24, 6:45 a.m. ([rundida](https://rundida.com/marathon/calgary/)) | Start/finish Stampede Park; half-marathon finish at Enmax Park ([calgarymarathon.com](https://calgarymarathon.com/races/half-marathon/)) | Half-marathon "over 4000 participants annually" — **participants, not spectators** ([calgarymarathon.com](https://calgarymarathon.com/races/half-marathon/)) | Spectators: **unsized** | unknown | participants | calgarymarathon.com | Completed. 2027 date unconfirmed (May 23, 2027 listed as possible — [MarathonGuide](https://www.marathonguide.com/races/run/calgary-marathon-28/2027/details/)) | Uses Stampede Park outside Stampede dates; no room overlap. |
| **Country Thunder Alberta 2026** | Country Thunder | Announced Fri Jun 26 – Sun Jun 28, 2026 ([Curiocity](https://curiocity.com/country-thunder-calgary-2026/)) | The Confluence Historic Site & Parkland ("Burnswest Theatre") ([Songkick](https://songkick.com/venues/3907679-burnswest-theatre-the-confluence)) | **unsized** | unknown | unknown | — | countrythunder.com | **CONFLICT — status unverified:** one site says the 2026 edition was cancelled ([Front Porch Music](https://frontporchmusic.ca/country-thunder-alberta-festival-lineup/)); a June 2026 preview says it is returning ([Curiocity](https://curiocity.com/country-thunder-calgary-2026/)). Older listings show Aug 21–23, 2026 ([Holler](https://holler.country/festivals/country-thunder-alberta/)) — superseded by the June move ([CTV](https://www.ctvnews.ca/calgary/article/country-thunder-brings-its-2026-festival-to-calgary-in-june)). Re-check with organizer before logging. | Open site. |
| **Cenovus Energy 2026 Grey Cup Festival** | Calgary Stampeders / CFL | Nov 8–15, 2026; game Sun Nov 15 ([CTV](https://www.ctvnews.ca/calgary/article/out-of-mcmahon-back-on-campus-dinos-propose-new-multi-sport-stadium/); [FBSchedules](https://fbschedules.com/?p=207680)) | McMahon Stadium (game) + Stampede Grounds (festival) | festival: **unsized** | unknown | unknown | — | cfl.ca | **SCHEDULED** | The game is a room event at McMahon (temporary seating up to 46,020 possible per [FBSchedules](https://fbschedules.com/?p=207680) — use announced attendance after the game, not this capacity). The festival on Stampede Grounds is a separate open-site record. |

**Unsized list (no public size found — do not estimate):** Spruce Meadows 'Masters' and summer tournaments, Calgary Folk Music Festival, Great Outdoors Comedy Festival, Country Thunder Alberta, Grey Cup Festival, Calgary Marathon spectators, Stampede daily peak-concurrent counts.

---

## 6. Gap item 5 — Teams, home venues by date, feeds (Table C)

| Team | League | Home venue by date | Free schedule feed (verified?) | Attendance in feed? |
|---|---|---|---|---|
| Calgary Flames | NHL | Saddledome through 2026-27 ([WCN](https://worldconstructionnetwork.com/?p=102446)); Scotia Place from 2027-28 (scheduled). Outdoor home game: 2011 Heritage Classic at McMahon, Feb 20, 2011 ([NHL.com](https://www.nhl.com/sv/news/winnipeg-jets-stalls-mot-montreal-canadiens-i-2026-heritage-classic)). | **ESPN — verified** (box scores carry venue and attendance, e.g. [ESPN game 401803467](https://www.espn.com/nhl/video/_/gameId/401803467)) | Yes |
| Calgary Stampeders | CFL | McMahon Stadium | cfl.ca schedule and game notes exist ([CFL PDF](https://static.cfl.ca/wp-content/uploads/sites/4/251101-Cgy-BC-gamenotes-WSF.pdf)); **free machine-readable feed: not verified — gap** | Self-reported by teams, "cannot be independently verified" ([3DownNation](https://dev.3downnation.com/?p=197172)) |
| Calgary Wranglers | AHL | Saddledome (2022–); 36 home dates in 2026-27 ([FlamesNation](https://flamesnation.ca/news/calgary-wranglers-2026-27-ahl-schedule)); Scotia Place from 2027-28 (scheduled, [WCN](https://worldconstructionnetwork.com/?p=102446)) | **No verified free feed — gap** | — |
| Calgary Hitmen | WHL | Saddledome; Scotia Place from 2027-28 (scheduled) | chl.ca/whl-hitmen news pages ([CHL](https://chl.ca/whl-hitmen/article/preview-game-1-vs-brandon-03-27-26/)); **free feed not verified — gap** | — |
| Calgary Roughnecks | NLL | Saddledome ("WestJet Field") ([2026 NLL season](https://en.wikipedia.org/wiki/2026_NLL_season), W); Scotia Place from 2027-28 (scheduled) | **No verified free feed — gap** | — |
| Cavalry FC | CPL | ATCO Field, Spruce Meadows (Foothills County), 2019– | cplsoccer.com ([CPL](https://www.cplsoccer.com/news/preview-cavalry-fc-vs-inter-toronto-april-25-2026)); **free feed not verified — gap** | — |
| Calgary Surge | CEBL | WinSport Event Centre (2023–) ([CEBL](https://www.cebl.ca/calgary-surge-announce-three-marquee-games-across-alberta-this-summer)); see Section 7 for away-from-home games | **No verified free feed — gap** | — |
| Calgary Wild FC | NSL (women's) | McMahon Stadium (2025–) ([NSL 2026](https://en.wikipedia.org/wiki/2026_Northern_Super_League_season), W) | **ESPN — verified** (match page shows venue and attendance, e.g. [ESPN 401859875](https://global.espn.com/football/match/_/gameId/401859875)); nsl.ca match pages also carry attendance ([nsl.ca](https://www.nsl.ca/games/calgary-halifax-2025-06-05)) | Yes |
| Calgary Dinos (football; basketball/volleyball) | U Sports | Football at McMahon; basketball/volleyball at Jack Simpson Gym ([Wikipedia](https://en.wikipedia.org/wiki/Jack_Simpson_Gymnasium)) | **No verified free feed — gap** | — |
| Okotoks Dawgs (edge) | WCBL | Seaman Stadium (2007–) | **No verified free feed — gap** | — |
| Calgary Canucks | AJHL | Max Bell Centre (Ken Bracko Arena) | below-threshold room; **gap** | — |

**Possible misses (searched only partially):** Mount Royal University Cougars (venue and capacity not found), Dinos hockey (venue not confirmed), Calgary rugby/other minor-pro clubs. Listed under gaps G-15.

**Teams with no verified free feed:** Stampeders (machine feed), Wranglers, Hitmen, Roughnecks, Cavalry FC, Surge, Dinos, Dawgs, Canucks.

---

## 7. Gap item 6 — Games away from the home venue

| Date | Team | Actual site | Type | Source |
|---|---|---|---|---|
| Feb 20, 2011 | Flames (home) vs Canadiens | McMahon Stadium | NHL Heritage Classic (outdoor home game) | [NHL.com](https://www.nhl.com/sv/news/winnipeg-jets-stalls-mot-montreal-canadiens-i-2026-heritage-classic) |
| Oct 26, 2019 | Flames (road) at Jets | Mosaic Stadium, Regina | Heritage Classic (Jets home) | [NHL.com](https://www.nhl.com/sv/news/winnipeg-jets-stalls-mot-montreal-canadiens-i-2026-heritage-classic) |
| Oct 29, 2023 | Flames (road) at Oilers | Commonwealth Stadium, Edmonton | Heritage Classic (Oilers home) | [NHL.com (de)](https://www.nhl.com/de/news/winnipeg-jets-empfangen-montreal-canadiens-beim-heritage-classic-2026) |
| 2026-27 | Flames | **None scheduled** — the Oct 25, 2026 Heritage Classic is Jets vs Canadiens in Winnipeg | — | [NHL Jets page](https://www.nhl.com/jets/fans/heritageclassic) |
| 2024 home opener | Surge | Saddledome | relocated home game | [CBC](https://amp.cbc.ca/news/canada/calgary/calgary-surge-home-game-saddledome-1.7038611) |
| Jul 9, 2026 | Surge vs Vancouver Bandits | Saddledome (during Stampede) | relocated home game | [CEBL](https://www.cebl.ca/calgary-surge-announce-three-marquee-games-across-alberta-this-summer); [TicketSmarter](https://www.ticketsmarter.com/p/calgary-surge-tickets) |
| 2026 (dates: gap) | Surge | Lethbridge and Red Deer | neutral-site "marquee" games — **do not place in Calgary** | [CEBL](https://www.cebl.ca/calgary-surge-announce-three-marquee-games-across-alberta-this-summer) |
| Apr 1, 2026 | PWHL Toronto vs Ottawa (no Calgary team) | Saddledome | neutral-site Takeover Tour | [PWHL](https://www.thepwhl.com/en/news/2026/april/02/toronto-takes-down-ottawa-2-1-in-pwhl-s-calgary-debut) |
| Jul 3, 2025 | Stampeders vs Blue Bombers | McMahon (home) | "Stampede Bowl" branding, not relocated | [2025 CFL season](https://en.wikipedia.org/wiki/2025_CFL_season), W |
| 2025 | Dawgs (edge) | Seaman Stadium hosted 2 Brooks and 2 Energy City **home** games vs Okotoks | relocated opponent home games — venue is Okotoks even though the listed home team is not | [dawgsbaseball.ca](https://dawgsbaseball.ca/news/2025-03-19-dawgs-to-host-brooks-energy-city-home-games) |

**Temporary home during new-arena build:** none. All four Saddledome tenants stay at the Saddledome until Scotia Place opens ([WCN](https://worldconstructionnetwork.com/?p=102446)). **CFL neutral-site games involving Calgary in 2026:** none found (searched CFL 2026 Calgary neutral site; gap if any exist).

---
## 8. Gap item 7 — Postseason and past announced crowds

| Team | Recent seasons (announced attendance) | Postseason | Source |
|---|---|---|---|
| Flames | 2024-25 avg 17,655 over 41 home dates (reported tally of announced crowds); 2025-26 per-game announced crowds on ESPN (e.g. 19,289 on Feb 3, 2026; 16,278 on Dec 9, 2025; preseason 15,923 on Oct 4, 2025). 2025-26 season average: **gap** (not compiled). | 2025-26: missed playoffs (34–39–9) | [FlamesNation](https://flamesnation.ca/news/despite-sluggish-economy-hockey-attendance-inched-upward-at-saddledome-in-2024-25); [ESPN](https://www.espn.in/nhl/video/_/gameId/401803236); [ESPN](https://www.espn.in/nhl/video/_/gameId/401802814); [ESPN](https://www.espn.com.sg/nhl/video/_/gameId/401794790); [2025–26 season](https://en.wikipedia.org/wiki/2025%E2%80%9326_Calgary_Flames_season) |
| Stampeders | 2025 avg 22,295 (9 home games, total 200,655); per-game 2025 crowds from 15,531 to 28,295 | 2025: lost West Semi-Final **at BC Place, Vancouver** on Nov 1, 2025 (not a Calgary home game). 2026: season in progress — re-check after Oct 2026. | [2025 CFL season](https://en.wikipedia.org/wiki/2025_CFL_season); [Pro Football Archives](https://www.profootballarchives.com/2025cflcal.html); [CFL game notes](https://static.cfl.ca/wp-content/uploads/sites/4/251101-Cgy-BC-gamenotes-WSF.pdf) |
| Wranglers | 2024-25 avg 4,099 (36 dates). 2025-26 avg 3,126 appears only in a forum post (F) — **gap** for build. | 2025-26: missed playoffs, first time since moving to Calgary | [FlamesNation](https://flamesnation.ca/news/despite-sluggish-economy-hockey-attendance-inched-upward-at-saddledome-in-2024-25); [FlamesNation](https://flamesnation.ca/news/calgary-wranglers-2026-27-ahl-schedule); F: [SkyriseCities](https://skyrisecities.com/forum/goto/post?id=2325776) |
| Hitmen | 2024-25 avg 4,577 (34 dates). 2025-26 avg 3,817 forum-only (F) — **gap**. | 2026: beat Brandon in round 1 (home Game 1 Mar 27 at Saddledome), swept by Medicine Hat Apr 10–15. Playoff attendance per game: **gap**. | [FlamesNation](https://flamesnation.ca/news/despite-sluggish-economy-hockey-attendance-inched-upward-at-saddledome-in-2024-25); [CHL preview](https://chl.ca/whl-hitmen/article/preview-game-1-vs-brandon-03-27-26/); [CHL recap](https://chl.ca/whl-hitmen/article/recap-hitmen-eliminated-from-playoffs-in-5-2-loss-to-tigers/) |
| Roughnecks | 2026 avg 11,650 over 9 home games (total 104,489); finale 15,340 on Apr 18, 2026; 2023 single-game league high 17,444 (Mar 17) | 2026: 6–12, missed playoffs | [2026 NLL season](https://en.wikipedia.org/wiki/2026_NLL_season); [OurSports Central](https://www.oursportscentral.com/services/releases/roughnecks-edge-out-mammoth-in-thrilling-9-8-finale/n-6350682); [Two Row Times](https://tworowtimes.com/sports/lacrosse/nll-completes-regular-season-with-over-1-million-in-attendance/) |
| Cavalry FC | 2026 league avg 4,018; high 6,012 (Sep 25 vs FC Supra); low 3,001 (Apr 25) | 2025: lost CPL Final 2–1 (extra time) at TD Place, Ottawa (away). 2026: clinched playoffs; home playoff match at ATCO Field in Oct 31–Nov 22 window | [2026 Cavalry season](https://en.wikipedia.org/wiki/2026_Cavalry_FC_season); [CPL matchweek 4 preview](https://www.cplsoccer.com/news/what-to-watch-cpl-matchweek-4-preview); [OurSports Central](https://www.oursportscentral.com/services/releases/playoff-soccer-returns-to-atco-field/n-6412751) |
| Calgary Wild FC | 2025 opener 8,552; 2026 per-game examples 2,342 (May 16), 2,847 (May 24), 3,735 (Jun 13); club average around 3,300 over two seasons (R) | 2026: 6th of 6 as of Oct 4 — no playoffs | [nsl.ca](https://www.nsl.ca/games/calgary-ottawa-2025-05-11); [ESPN](https://global.espn.com/football/match/_/gameId/401859875); [2026 Wild season](https://en.wikipedia.org/wiki/2026_Calgary_Wild_FC_season); [Calgary Journal](https://calgaryjournal.ca/2026/06/01/a-dedicated-crowd-gets-behind-calgary-wild-fc/) |
| Surge | **gap** (no announced crowds found) | **gap** | searched CEBL and team releases |
| Okotoks Dawgs (edge) | 2023 avg 4,558; 2024 total 113,825, avg "more than 4,200" (R); team claims 4,700 avg (2025 release) | 2023 playoffs avg 5,462 over 4 games | [Alberta Dugout Stories](https://albertadugoutstories.com/2024/05/01/okotoks-dawgs-2024-season-preview/); [OkotoksOnline](https://okotoksonline.com/articles/dawgs-set-new-attendance-mark); [dawgsbaseball.ca](https://dawgsbaseball.ca/news/2025-03-19-dawgs-to-host-brooks-energy-city-home-games) |

---

## 9. Gap item 4 — Ticketmaster venue IDs

| Concert room | Ticketmaster venue ID | Verified? |
|---|---|---|
| WinSport Event Centre | **140559** | **Yes** — Ticketmaster venue page [ticketmaster.ca/.../venue/140559](https://ticketmaster.ca/winsport-event-centre-tickets-calgary/venue/140559) |
| Scotiabank Saddledome | gap | No — searched the Ticketmaster venue URL pattern; only resale/aggregator pages surfaced |
| McMahon Stadium | gap | No |
| GMC Stadium | gap | No (Vivid Seats uses its own ID 4515 — **not a Ticketmaster ID** — [Vivid Seats](https://www.vividseats.com/calgary-stampede-grandstand-tickets/venue/4515)) |
| Southern Alberta Jubilee Auditorium | gap | No |
| Jack Singer Concert Hall (Werklund Centre) | gap | No |
| Grey Eagle Event Centre | gap | No |
| BMO Centre halls | gap | No |
| Big Four Roadhouse | gap | No |
| ATCO Field / Spruce Meadows | gap (Cavalry has a Ticketmaster **artist** page 2557303 — [Ticketmaster](https://www.ticketmaster.ca/cavalry-fc-tickets/artist/2557303?page=4) — not a venue ID); Spruce Meadows tournaments sell on Showpass | No |
| Seaman Stadium | not on Ticketmaster (team ticketing) | n/a |
| Prince's Island Park (Folk Fest) | not Ticketmaster — AXS venue 130541 ([AXS](https://www.axs.com/au/venues/130541)) | n/a |

**Consequence under the build rule:** only WinSport Event Centre ships with concerts until the other IDs are verified against the Discovery API. The Discovery API needs a key, so it was not called in this pass.

---

## 10. Gap item 9 — Team colours

No official team or league brand-guide page with hex values was found for any team. **All colours are gap.** Unofficial colour sites disagree with each other — for the Flames alone, red is given as #CE1126 ([US Team Colors](https://usteamcolors.com/calgary-flames-team-colors/)), #C8102E ([Design Your Way](https://www.designyourway.net/blog/calgary-flames-colors/), which itself says no official guide locks these), #D2001C ([TeamColorCodes](https://teamcolorcodes.com/calgary-flames-color-codes/)) and #D42604 ([Code of Colors](https://codeofcolors.com/calgary-flames-colors.html)). None is used.

| Team | Primary hex | Secondary hex | Status |
|---|---|---|---|
| Flames, Stampeders, Wranglers, Hitmen, Roughnecks, Cavalry FC, Surge, Wild FC, Dinos, Dawgs | gap | gap | Searched team sites and "brand guidelines" queries; only fan/aggregator colour sites returned. |

---

## 11. Conflicts, duplicate/matching risks, inaccessible sources, changes through 2028

### Conflicting sources (preserved)
| Item | Conflict | Changes classification? |
|---|---|---|
| Jubilee Auditorium | 2,538 vs ~2,713 vs "just over 2,700" (A2-2) | No |
| Jack Singer Concert Hall | 1,800 vs 1,797 vs 1,197 (A2-7) | No |
| Grey Eagle theatre | 2,511 vs 2,600 (A2-4) | No |
| WinSport basketball | 3,200 (team, via CBC) vs ~3,000 (World Curling) vs 2,900 (resale) | No |
| Scotia Place | 18,400 vs "18,000-seat" | No |
| Seaman Stadium 2026 addition | 180 vs 160 seats | **Possibly** — base 5,200 already ≥5,000; addition only matters if berm is excluded |
| Country Thunder 2026 | cancelled vs returning | Yes for event record — re-check |
| Spruce Meadows 'Masters' dates | Sep 2–7 (prize-list PDF) vs Sep 9–13 (release) | Date only |
| PWHL Calgary crowd rank | "sixth highest" vs "seventh highest" of season ([PWHL Apr 2](https://www.thepwhl.com/en/news/2026/april/02/toronto-takes-down-ottawa-2-1-in-pwhl-s-calgary-debut); [PWHL Apr 6](https://www.thepwhl.com/en/news/2026/april/06/pwhl-weekly-notebook-apr-6-2026)) | No (16,150 agreed) |

### Duplicate and matching risks
- **Stampede Park** is one gate wrapping GMC Stadium, Saddledome, BMO Centre, Nutrien WEC, Big Four Roadhouse and the Coca-Cola Stage. During Stampede, a room event inside the gate must not be summed with gate attendance; outside Stampede, these are independent rooms. Treat the Saddledome and Scotia Place as separate rooms even though both border the grounds.
- **Scotia Place vs Esso Community Arena:** separate rooms under one building; the 1,000-seat community rink must not inherit the 18,400 bowl figure.
- **Spruce Meadows:** ATCO Field vs International Ring vs grounds. Showpass lists hospitality packages and general admission separately for the same tournament day.
- **WinSport Event Centre on Ticketmaster** lists curling "Full Event Package", "Opening Weekend Package" and daily packs as separate entries for one championship ([ticketmaster.ca](https://ticketmaster.ca/winsport-event-centre-tickets-calgary/venue/140559)) — collapse to one event per draw/day.
- **Name drift:** "WinSport Arena" still used by PWHL and resale sites; "Grandstand"/"Calgary Stampede Grandstand" still used by resale sites for GMC Stadium ([Magpie](https://platform.magpie.travel/things-to-do/calgary-stampede-rodeo-at-gmc-stadium/86677ebc-405e-4591-af2e-2e5a969b9da4)); "Arts Commons" still used colloquially for Werklund Centre; "WestJet Field" = Saddledome floor for NLL.
- **Abbreviation trap:** feeds use CGY; the city code is YYC.
- **Parking/suite/add-on listings:** resale sites sell GMC Stadium parking passes and suite tickets as separate items ([Vivid Seats](https://www.vividseats.com/calgary-stampede-grandstand-tickets/venue/4515)) — filter out.

### Inaccessible / not reached
- Ticketmaster Discovery API (requires key — not used). Ticketmaster venue pages for rooms other than WinSport did not surface in search; not fetched by guessing URLs.
- calgarystampede.com official daily attendance releases were not fetched directly; daily figures come from LiveWire/Western Standard/Global News reporting of Stampede releases.
- Official team brand guides: not found.

### Confirmed / scheduled changes through 2028, and proposals
| Change | Type | Date | Re-check |
|---|---|---|---|
| Scotia Place opens; Flames, Hitmen, Roughnecks, Wranglers move | SCHEDULED / UNDER CONSTRUCTION | Fall 2027 (2027-28 season) | Monthly from Mar 2027 |
| Esso Community Arena (1,000) opens | SCHEDULED | Fall 2027 | Mar 2027 |
| Saddledome final season | Announced | 2026-27 | Jun 2027 |
| Saddledome demolition | Scheduled window (2 years after Scotia Place opens); Stampede expects 2029–2030 | After 2028 | 2028 |
| Grey Cup at McMahon | SCHEDULED | Nov 15, 2026 | Nov 16, 2026 (log announced attendance) |
| Werklund Centre new 1,000-seat theatre | UNDER CONSTRUCTION | Opening date gap | Q2 2027 |
| Foothills Stadium | DEMOLISHED (late 2024) | — | — |
| Foothills Multisport Fieldhouse | PROPOSAL (design 2026, partially funded) | city says five-year build once funding is secured ([CTV](https://www.ctvnews.ca/calgary/article/work-begins-on-foothills-athletic-park-redevelopment/)) | 2027 |
| U of C Dinos stadium | PROPOSAL | — | 2027 |
| GMC Stadium expansion / Stampeders move | PROPOSAL | — | 2027 |
| Big Four Building replacement | PROPOSAL | — | 2027 |
| Spruce Meadows 12,000-seat stadium | PROPOSAL (30-year plan) | — | 2028 |
| Stampede 2027 | SCHEDULED | Jul 9–18, 2027 | Jun 2027 |

---

## 12. Build rules (notes for whoever turns this into app data)

- **Unique IDs across all cities.** Prefix every Calgary venue and team ID with `cgy-` (feed abbreviation) or `yyc-` (city code) — pick one and apply consistently, e.g. `yyc-flames`, `yyc-stampeders`, `yyc-wranglers`, `yyc-saddledome`, `yyc-scotia-place`. Check for collisions with existing IDs (`giants`, `jets`, `rangers`, `kings`, `cardinals` are taken; "wranglers" and "wild" are plausible future collisions).
- **No per-city opponents file.** Opponent draws go into `expectedDrawIndex` like every other city.
- **Never guess a capacity.** Missing or range-only figures stay blank and go on the city gaps list (Section 13). Building occupancy (BMO Centre 33,000) and standing add-ons (GMC Stadium +8,000) are not seated capacity.
- **Car shares:** no measured or sourced car-share figures were found for any Calgary venue in this pass, so all venues stay on the city default. The only access facts found: Spruce Meadows free parking with shuttle discontinued; Saddledome limited parking with LRT advised; Scotia Place 450-stall parkade.
- **Scope field:** keep the real municipality (Foothills County, Okotoks, Tsuut'ina Nation) on each venue so the boundary decision can be reversed without re-research.

---

## 13. City gaps list (what was searched)

| ID | Gap | Searched |
|---|---|---|
| G-1 | Coordinates for McMahon, BMO Centre, GMC Stadium, ATCO Field, Seaman, Jubilee, WinSport, Grey Eagle, Nutrien WEC, Werklund, Father David Bauer | Venue pages and Wikipedia snippets returned no coordinates |
| G-2 | Concert configurations: Saddledome, McMahon, Scotia Place, BMO halls, GMC Stadium | Venue and promoter pages |
| G-3 | GMC Stadium Grandstand-show seated figure | Only a forum quote of a bid document |
| G-4 | Seaman Stadium seated-only figure; whether 5,200 includes 2026 seats | Dawgs facility and news pages |
| G-5 | Ticketmaster IDs for all rooms except WinSport | Ticketmaster venue URL searches |
| G-6 | Free machine-readable feeds for CFL, AHL, WHL, NLL, CPL, CEBL, U Sports, WCBL | League sites; only ESPN (NHL, NSL) verified |
| G-7 | Surge attendance and 2026 Lethbridge/Red Deer dates | CEBL release, TicketSmarter |
| G-8 | Hitmen and Wranglers 2025-26 averages from an official source | Only a forum post |
| G-9 | Flames 2025-26 season average | ESPN per-game only |
| G-10 | Stampede days 2 and 5–9 daily gate counts; any peak-concurrent figure | LiveWire daily reports |
| G-11 | Sizes for Folk Fest, Masters, Country Thunder, Grey Cup Festival, marathon spectators | Organizer and news pages |
| G-12 | All team hex colours from official sources | Team sites, brand-guide queries |
| G-13 | Nutrien WEC rename date (from Agrium) | Stampede venue page |
| G-14 | 1,000+ rooms in Airdrie, Chestermere, Cochrane, Rocky View County | Not found in this pass — run a dedicated search before shipping |
| G-15 | Mount Royal Cougars venue/capacity; Dinos hockey venue; Spruce Meadows International Ring capacity; Big Four event capacity | Partial searches only |
| G-16 | Stampeders 2026 postseason | Season in progress on Oct 13, 2026 |

---

## 14. End-of-answer checklist (required order)

1. **Recommended boundary and uncertain edge venues** — Section 1. Core = Calgary CMA (incl. Tsuut'ina, Airdrie, Chestermere, Cochrane, Rocky View); edge = Spruce Meadows (include), Seaman Stadium/Okotoks (flag); out = Banff, Canmore, Edmonton.
2. **Complete table and threshold rooms** — Sections 3 and 4. Only Seaman Stadium (5,200 incl. berm) sits near 5,000; WinSport in-the-round (4,240, includes floor) stays under.
3. **Teams, dated home venues, feed coverage** — Sections 6–8. Verified free feeds only for Flames and Wild FC (ESPN).
4. **Open sites/events** — Section 5, with an unsized list. No totals invented.
5. **Conflicts, duplicates, inaccessible sources, changes through 2028** — Section 11.
6. **Gaps from the first 26 builds:**
   - 1 Name/code — answered (Section 2).
   - 2 One sourced figure per setup — answered where found; conflicts side by side; rest are gaps (Sections 3, 11, 13).
   - 3 Rooms 4,500–5,500 — answered (Section 4).
   - 4 Ticketmaster IDs — 1 verified (WinSport 140559); rest gap (Section 9).
   - 5 Teams and feeds — answered; feedless teams listed (Section 6).
   - 6 Away-from-home games — answered (Section 7).
   - 7 Postseason/past crowds — answered where public; gaps noted (Section 8).
   - 8 Open-site events — answered; unsized list (Section 5).
   - 9 Team colours — **all gap** (Section 10).
