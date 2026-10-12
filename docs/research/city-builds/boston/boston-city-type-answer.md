# Boston city-type answer: event travel evidence for Fan/Friction Gridlock

**Research date:** 11 October 2026 (public web sources only; every figure links to the page it came from).
**Scope used:** Greater Boston plus the Foxborough/Mansfield corridor, with Lowell, Providence/Pawtucket, Worcester and New Hampshire treated as edge cases.
**Companion venue answer:** not available to this pass, so venues were enumerated independently. Row IDs below (V01…V18) are this document's own keys; map them to the companion rows when that file is available.

---

## 1. Bottom line

Recommended existing city type: **`hub`**. The measured and projected evidence does not support a regional car share near the `transit` default of 0.4, and the largest single crowd source (Gillette Stadium) is strongly car-dominated outside the 2026 World Cup. At the same time, the downtown venues sit on top of or beside rail stations and have little or no parking, so spill between nearby crowds in the Kenmore/Fenway, North Station and Allston clusters matters more than in a `sprawl` region. Because `hub` and `sprawl` share the same 0.85 fallback, the choice between them turns on spill behaviour, not on car share. The 0.85 fallback fits the outlying venues reasonably and almost certainly overstates car use at downtown venues, so venue-specific overrides carry most of the weight.

The evidence base is thin. Only one observed, event-specific transit count with a known attendance denominator was found (World Cup trains). Everything else is a projection, a secondary claim, or an estimate.

---

## 2. Definitions used

| Term | Meaning in this document |
|---|---|
| Car share | People arriving by private car, carpool, taxi or rideshare, **plus** people who drove to a remote/satellite lot and rode a shuttle. |
| Park-and-ride via MBTA | A person who drives to an MBTA station garage and rides the T is counted as **car-involved** per the brief. This conflicts with Gridlock's purpose (those cars are not on venue approach roads), so it is flagged separately wherever it appears. |
| Event transit | Service that exists only for the event (e.g., World Cup "Boston Stadium Trains"). |
| Regular transit | Scheduled MBTA service that also carries event-goers; needs baseline subtraction. |
| People vs vehicles | Parking spaces and lots are vehicles; boardings and train counts are people; tickets sold are not riders. |

---

## 3. Background only: ordinary commuting (not event travel)

These numbers describe journeys to work and are **not** event mode shares.

| Geography | Drive alone | Carpool | Transit | Work from home | Source |
|---|---|---|---|---|---|
| Boston, MA-NH metro (ACS 2024 1-yr) | 58.3% | 7.5% | 9.8% | 16.2% | [Newgeography table (mirror)](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access) |
| Providence, RI-MA metro (ACS 2024 1-yr) | 72.2% | 8.8% | 2.5% | 11.1% | [same](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access) |
| City of Boston, transit commuters (ACS 2024) | — | — | 25.3% | — | [Wikipedia list from ACS](https://en.wikipedia.org/wiki/List_of_U.S._cities_with_high_transit_ridership) |
| City of Cambridge, transit commuters (ACS 2024) | — | — | 19.2% | — | [same](https://en.wikipedia.org/wiki/List_of_U.S._cities_with_high_transit_ridership) |

Excluding work-from-home, Boston-metro commuters are about 78% car ((58.3 + 7.5) / 83.8, from the [ACS table](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access)) and about 12% transit (9.8 / 83.8). The Providence metro is markedly more car-dependent than Boston's. The Newgeography figures were read from a mirror domain; check them against the Census table before relying on them.

---

## 4. Venue and event rows

### 4a. Identity, setup and status

| ID | Verified current name | Municipality | Setup / event represented | Date or season | Capacity in that setup | Status note |
|---|---|---|---|---|---|---|
| V01 | Gillette Stadium | Foxborough | NFL Patriots regular season | Fall | [64,628 football (2023–present)](https://en.wikipedia.org/wiki/Gillette_Stadium) | Active |
| V02 | Gillette Stadium, branded "Boston Stadium" | Foxborough | FIFA World Cup 2026, 7 matches (event row) | 13 Jun – 9 Jul 2026 | [64,146 announced full house, 13 Jun](https://boston25news.com/news/local/scotland-vs-haiti-live-updates-boston-stadium-hosts-1st-2026-fifa-world-cup-match-tonight/KRJAY27KHZFSHOITQFKAV3CVCA); [99.6% average fill](https://inside.fifa.com/news/boston-stadium-world-cup-2026-haaland-scotland-dembele) | Completed; atypical operations |
| V03 | Gillette Stadium | Foxborough | Stadium concerts | Summer | Not verified for concert configuration | Active |
| V04 | Gillette Stadium | Foxborough | Boston Legacy FC (NWSL), part of 2026 season | Mar–2026 season | Crowd size not verified | [8 Legacy home games at Gillette in 2026](https://en.wikipedia.org/wiki/Boston_Legacy_FC); Legacy leaves Gillette in 2027 |
| V05 | Fenway Park | Boston (Fenway–Kenmore) | Red Sox MLB | Apr–Oct | [37,755](https://meetstadium.com/stadiums/fenway-park/) | Active |
| V06 | MGM Music Hall at Fenway | Boston (Fenway–Kenmore) | Concerts, full-venue | Year-round | [5,000](https://www.axs.com/venues/128548/mgm-music-hall-at-fenway-boston-tickets) | Active |
| V07 | TD Garden | Boston (West End) | Celtics / Bruins / concerts | Oct–Jun sports; year-round concerts | [19,156 basketball](https://www.stadiumjourney.com/stadiums/td-garden-s93); [17,850 hockey](https://www.stadiumjourney.com/stadiums/td-garden-s36) (secondary sources) | Active |
| V08 | Leader Bank Pavilion | Boston (Seaport) | Outdoor concerts | May–Oct | [5,000](https://www.leaderbank.com/about/leader-bank-pavilion) | Active |
| V09 | Agganis Arena | Boston (BU, Comm. Ave.) | BU hockey; Boston Fleet (PWHL) from 2026–27; concerts | Fall–spring; concerts year-round | [6,150 hockey](https://www.agganisarena.com/files/2026/07/AgganisArenaPromotersGuide_Summer2026_Final.pdf); concerts [up to 8,000 center stage](https://en.wikipedia.org/wiki/Agganis_Arena) | Active; [Fleet moving here from Tsongas](https://www.boston.com/sports/sports-news/2026/07/07/boston-fleet-agganis-arena/) |
| V10 | Tsongas Center | Lowell | UMass Lowell hockey / basketball, concerts | Fall–spring | [6,500 hockey, up to 7,800 concerts](https://arena-guide.com/arena/tsongas-center/) (conflicts with older [6,003 / 7,000](https://goriverhawks.com/sports/2014/7/18/general_0718141249.aspx?id=174)) | Active; loses Fleet tenancy |
| V11 | Xfinity Center | Mansfield | Amphitheater concerts | May–Sep | [19,900](https://www.boston.com/news/the-boston-globe/2025/12/10/mansfields-xfinity-center-undergoing-biggest-renovation-in-its-nearly-40-year-history/) | Renovated for 2026, capacity unchanged |
| V12 | Alumni Stadium (Boston College) | Newton (Chestnut Hill) | BC football | Fall | [44,500](https://stadiumjourney.com/stadiums/alumni-stadium-s380) | Active |
| V13 | White Stadium | Boston (Franklin Park) | Boston Legacy FC game days (projected) | From 2028 | [10,519 seats](https://en.wikipedia.org/wiki/White_Stadium); plan assumes [11,000 incl. staff](https://www.dotnews.com/2026/03/18/gameday-parking-restrictions-a-flashpoint-for-white-stadium-plans/) | Under renovation; [Legacy moves in 2028](https://bostonlegacyfc.com/blogs/press/boston-legacy-fc-announces-centreville-bank-stadium-as-2027-venue-ahead-of-move-home-to-white-stadium-in-2028) |
| V14 | Harvard Athletic Complex — Boston Calling (event row) | Boston (Allston) | 3-day music festival | Late May through 2025; [hiatus 2026; returns 4–6 Jun 2027](https://www.bostonglobe.com/2025/06/20/arts/boston-calling-canceled-2026/) | [40,000 (Sunday 2024 estimate)](https://en.wikipedia.org/wiki/Boston_Calling_Music_Festival) | Not running in 2026 |
| V15 | Head of the Charles Regatta (event row) | Boston / Cambridge riverbanks | 3-day regatta, open site | [16–18 Oct 2026](https://www.meetboston.com/events/festivals-and-special-events/head-of-the-charles/) | [Over 250,000 spectators across 3 days](https://www.mass.gov/doc/head-of-the-charles-regatta-meeting-presentation-5222024/download) (multi-day total, not simultaneous) | Next edition in 5 days |
| V16 | Boston Marathon (event row) | Hopkinton → Boston, 26.2-mile linear course | Marathon Monday | April | Spectators not counted; a 2015 press preview [expected over a million](https://www.wbur.org/2015/04/18/spectators-guide-boston-marathon) | Annual |
| V17 | Matthews Arena → new Northeastern athletics complex | Boston (Fenway/Symphony edge) | College hockey/basketball | — | Old arena [held nearly 5,000](https://www.cdrecycler.com/news/demolition-of-northeastern-university-historic-matthews-arena-begins); new arena [4,050 hockey / 5,300 basketball](https://www.bostonglobe.com/2025/03/06/sports/matthews-arena-northeastern/) | [Demolition began March 2026; new arena due fall 2028](https://www.cdrecycler.com/news/demolition-of-northeastern-university-historic-matthews-arena-begins) |
| V18 | Centreville Bank Stadium (edge case) | Pawtucket, RI | Boston Legacy FC 2027 home season | 2027 | [10,500 seats](https://www.boston.com/sports/boston-legacy-football-club/2026/08/27/boston-legacy-fc-wont-play-at-white-stadium-until-2028) | [All 2027 Legacy home matches here](https://bostonlegacyfc.com/blogs/press/boston-legacy-fc-announces-centreville-bank-stadium-as-2027-venue-ahead-of-move-home-to-white-stadium-in-2028) |

**Named enumeration gaps (fixed rooms of roughly 1,000+ not researched in this pass; no figures asserted):** Harvard Stadium (as a football venue), Conte Forum (BC), Bright-Landry Hockey Center, Symphony Hall, Boch Center Wang Theatre, Citizens House of Blues, Roadrunner, Big Night Live, MGM Music Hall-adjacent Lansdowne clubs, Orpheum, Emerson Colonial and other Theater District houses, Lowell Memorial Auditorium, Encore Boston Harbor event spaces, and fairs such as Topsfield or Marshfield. The DCU Center (Worcester), Amica Mutual Pavilion (Providence) and NH arenas are edge-case venues not researched.

### 4b. Person mode split (people, not vehicles)

| ID | Private car / carpool / rideshare (incl. remote lot + shuttle) | Public bus / rail | Dedicated event shuttle or coach (non-car origin) | Walk / bike / other | Unclassified | Sums to 100%? | Evidence type |
|---|---|---|---|---|---|---|---|
| V01 | Not measured | Patriots Train: [1,500–2,200 riders per game (2015)](https://www.bostonglobe.com/lifestyle/2015/10/07/mbta-patriots-express-everyone-fan-almost/oPDm9MFPiNxF7QWWvycSVM/story.html), about **2.3–3.3%** of the [65,878 capacity then in force](https://en.wikipedia.org/wiki/Gillette_Stadium) | Charter coaches not counted | Negligible (rural site; not measured) | Remainder | No | Observed rail count, old; no full split |
| V02 | Not measured; parking cut to [about 5,000 spaces](https://www.boston25news.com/news/local/world-cup-gridlock-tuesdays-match-boston-stadium-is-expected-test-rush-hour-traffic/JXBNMJJPIRCU3CMTSJ32L7MVII/) from a normal [~20K](https://www.mass.gov/doc/world-cup-update-presented-to-the-massdot-board-on-february-25-2026/download) | Event trains: **15.6–27.0%** by match, mean **21.1%** (method below) | Boston Stadium Express coaches from [20 pickup points](https://www.nbcboston.com/world-cup/boston-world-cup-game-transportation-cost/3933798/); ridership not published | Negligible | Remainder | No | **Observed** (MBTA counts) + observed attendance |
| V03 | Not measured | Event trains offered for selected 2023 shows at [$20 round trip](https://www.bostonglobe.com/2023/03/17/metro/mbta-offer-train-service-gillette-stadium-concerts-this-summer); ridership not published | Unknown | Negligible | All | No | Service evidence only |
| V04 | Not measured | Commuter rail to Mansfield + [free club shuttle to Lot 2](https://bostonlegacyfc.com/blogs/press/boston-legacy-fc-announces-free-shuttle-service-from-mansfield-commuter-rail-station-to-gillette-stadium-beginning-march-28); ridership not published | — | — | All | No | Service evidence only |
| V05 | "Nearly two-thirds" (~65%) drive or use Uber/Lyft — **secondary, unsourced claim** ([Franklin Park Defenders](https://www.franklinparkdefenders.com/post/white-stadium-transportation-plan-full-of-holes-according-to-transportation-expert-and-local-reside); [WBZ NewsRadio](https://wbznewsradio.iheart.com/content/boston-residents-share-concerns-over-plans-to-renovate-white-stadium/)) | "Barely 23%" transit (same secondary sources) | None | Not stated | ~12% implied residual (my arithmetic) | Only by inference | Secondary claim by stadium opponents; original survey not found |
| V06 | Not measured; venue [owns no parking](https://www.ticketmaster.com/mgm-music-hall-at-fenway-tickets-boston/venue/9407) | Not measured | None | — | All | No | None |
| V07 | Not measured | Not measured; North Station [11,186 commuter rail daily boardings (2024)](https://en.wikipedia.org/wiki/North_Station) is all-purpose, not event | None | — | All | No | None found (see §7) |
| V08 | Not measured | Not measured | None | — | All | No | None |
| V09 | Not measured; [over 1,400 event spaces](https://www.agganisarena.com/files/2026/07/AgganisArenaPromotersGuide_Summer2026_Final.pdf) | Not measured | None | — | All | No | Parking supply only |
| V10 | Not measured; on-site garage + [three lots](https://goriverhawks.com/sports/2014/7/18/general_0718141249.aspx?id=174) | Not measured | None | — | All | No | Parking evidence only |
| V11 | Not measured; parking [free with paid upgrades](https://blog.ticketmaster.com/venue-faq-xfinity-center-mansfield-ma) | No event transit found | None found | — | All | No | Parking evidence only |
| V12 | Not measured; on-campus parking [permit-only](https://www.bc.edu/content/bc-web/offices/aux-services/sites/transportation-parking/parking/vistors/athletic-event-parking.html), others use [satellite lots with shuttles](https://www.ticketmaster.com/alumni-stadium-tickets-chestnut-hill/venue/9013) | Green Line B/C/D, not measured | Satellite shuttles (car-involved) | — | All | No | Operations evidence only |
| V13 | **50%** = satellite-lot shuttle 40% + rideshare 10% | **40%** = MBTA-station shuttle 20% + walk from MBTA 20% | (MBTA-station shuttles counted in transit) | **10%** bike/walk | 0% | **Yes (100%)** | **Projected** ([City/BLFC April 2025](https://www.boston.gov/sites/default/files/file/2025/04/FINAL_%20Transportation%20Update%20April%202025.pdf)) |
| V14 | Not measured; [no on-site or street parking](https://support.bostoncalling.com/hc/en-us/articles/22008596963476); [dedicated rideshare lot](https://support.bostoncalling.com/hc/en-us/articles/22009533912084-Community) | Not measured | None | — | All | No | Operations evidence only |
| V15 | Not measured; [about 500 event parking spaces](https://www.cbsnews.com/boston/news/head-of-the-charles-course-map-watch-road-closures) + Alewife garage park-and-ride ([2,733 spaces](https://www.meetboston.com/events/festivals-and-special-events/head-of-the-charles/)) | Not measured | None | [Over 50% of spectators live within 5 miles](https://www.mass.gov/doc/head-of-the-charles-regatta-meeting-presentation-5222024/download) (origin, not mode) | All | No | Organizer audience data |
| V16 | Not measured | 2024: [~30,000 Worcester Line riders, more than double a normal Monday](https://news.keolisna.com/ridership-spike-on-marathon-monday-worcester-commuter-rail-line-and-green-line-see-major-ridership-boost); [~150,000 Green Line boardings](https://www.masstransitmag.com/management/news/55019452/ma-marathon-monday-was-a-boon-for-ridership-numbers-on-mbtas-green-line) | Runner buses (not counted) | — | All | No | Observed boardings, no denominator |
| V17 | Closed until fall 2028 | — | — | — | — | — | — |
| V18 | Not researched | Not researched | — | — | All | No | Edge case |

**Why most splits do not sum:** only V13 has a complete split, and it is a projection. Every other row is missing at least the car share because no public, event-specific survey was found.

### 4c. Recommended car-share value per row

Type key: **M** = measured, **P** = projected, **E** = estimate by this pass, **U** = unknown (fallback applies).

| ID | Type | Recommended car share | Range | Confidence | Basis and main uncertainty |
|---|---|---|---|---|---|
| V01 | E | **0.92** | 0.85–0.97 | Low–medium | Train share ~2–3% (old count); assumes 2–8% charter coach and ~0% walk; coach share unverified; normal parking [~20K](https://www.mass.gov/doc/world-cup-update-presented-to-the-massdot-board-on-february-25-2026/download). |
| V02 | M (train) / U (car) | **Do not use as typical**; car-involved plausibly 0.45–0.75 | 0.45–0.80 | Low | Train share measured; coach, rideshare and private-yard parking unmeasured. Atypical restrictions (ticket-linked parking, [$175–600 parking](https://www.nbcboston.com/world-cup/boston-world-cup-game-transportation-cost/3933798/)). |
| V03 | E | 0.92 (same as V01) | 0.85–0.97 | Low | No concert-specific counts. |
| V04 | U | Fallback | — | — | Small, temporary; drops out in 2027. |
| V05 | E (from secondary claim) | **0.65** | 0.50–0.75 | Low | Only figure is an advocacy claim with no traceable survey; park-and-ride via T would raise car-involved share further. |
| V06 | U | Fallback (likely below it; not quantifiable) | — | — | Shares Fenway approaches; no parking of its own. |
| V07 | U | Fallback (likely below it; not quantifiable) | — | — | Rail directly beneath; no event split found. |
| V08 | U | Fallback | — | — | No data. |
| V09 | U | Fallback | — | — | Parking for 1,400 vehicles vs 6,150–8,000 people; Green Line adjacent. |
| V10 | U | Fallback | — | — | Suburban garage + lots. |
| V11 | E | **0.95** | 0.90–0.99 | Low | Free parking included, no event transit found; amphitheater [about 30 miles southwest of Boston](https://thrillzing.com/music-venues/xfinity-center-mansfield/). |
| V12 | U | Fallback | — | — | Satellite shuttles count as car-involved; transit share unknown. |
| V13 | P | **0.50** | 0.45–0.65 | Low | Planner projection; critics dispute; first Legacy match 2028. |
| V14 | U | Fallback | — | — | No parking; rideshare lot; no counts. |
| V15 | U | Fallback (likely well below it; not quantifiable) | — | — | Majority-local audience, ~500 spaces; multi-day. |
| V16 | U | Fallback | — | — | Linear open course; no denominator. |
| V17 | — | n/a until 2028 | — | — | Closed. |
| V18 | U | Fallback | — | — | Edge case outside recommended boundary. |

### 4d. Operations, parking, access and shared crowds

| ID | Parking supply and remote arrangements | Event operations, closures, start/end service | Access constraints; other crowds on approaches |
|---|---|---|---|
| V01 | Normal parking [~20K](https://www.mass.gov/doc/world-cup-update-presented-to-the-massdot-board-on-february-25-2026/download) | Patriots Train from South Station and Providence ([2015 description](https://www.bostonglobe.com/lifestyle/2015/10/07/mbta-patriots-express-everyone-fan-almost/oPDm9MFPiNxF7QWWvycSVM/story.html)); [Foxboro station permanent high-level platform finished June 2026](https://www.mbta.com/projects/foxboro-station-improvements) | Route 1 congestion ([MeetBoston](https://www.meetboston.com/fifa-world-cup-2026/transportation/)); Patriot Place retail on the same site |
| V02 | [~5,000 spaces](https://www.boston25news.com/news/local/world-cup-gridlock-tuesdays-match-boston-stadium-is-expected-test-rush-hour-traffic/JXBNMJJPIRCU3CMTSJ32L7MVII/), [pre-paid and match-ticket-only](https://www.mass.gov/info-details/transportation-during-the-world-cup); parking passes from [$149.99](https://www.bostonglobe.com/2026/03/06/metro/world-cup-foxborough-parking/) | [14 express trains per match, $80, only MBTA mode to stadium](https://www.mass.gov/news/mbta-announces-service-updates-and-mticket-availability-for-world-cup-2026-matches); return trains ran after the final whistle with queues of [~21 minutes average at Foxboro](https://mass.streetsblog.org/2026/07/01/smooth-rides-no-hooliganism-a-review-of-the-mbtas-world-cup-service) | Coaches from Providence at [$95](https://turnto10.com/news/local/boston-stadium-express-offers-only-direct-route-to-world-cup-games-from-providence-fifa-foxborough-june-26-2026); [weekday 6 p.m. match coincided with evening rush hour](https://www.boston25news.com/news/local/world-cup-gridlock-tuesdays-match-boston-stadium-is-expected-test-rush-hour-traffic/JXBNMJJPIRCU3CMTSJ32L7MVII/) |
| V05 | Parking ["extremely limited"](https://www.mlb.com/redsox/fans/fenway-fest/transportation-and-parking); [$100 fine in residential district on event days](https://www.mlb.com/redsox/fans/fenway-fest/transportation-and-parking); Red Sox promote [park-and-ride at MBTA stations](https://mlb.com/redsox/ballpark/transportation) (car-involved) | Green Line at Kenmore/Fenway; Lansdowne commuter rail; last Kenmore train noted at [12:10 a.m.](https://updates.moovit.com/?p=20253) (old secondary source; re-verify) | Shares Lansdowne St / Brookline Ave with MGM Music Hall and Kenmore crowds |
| V06 | [No venue parking](https://www.ticketmaster.com/mgm-music-hall-at-fenway-tickets-boston/venue/9407) | Same transit as V05 | Driving directions route via [Storrow Drive and Brookline Ave](https://crossroadspresents.com/pages/mgm-fenway-music-hall-inner), the same approaches as Fenway Park |
| V07 | Garage on site (spaces not verified) | Last Green/Orange trains [around 12:45 a.m.](https://www.mbta.com/destinations/td-garden) | North Station commuter flows; Hub on Causeway |
| V09 | [Over 1,400 event spaces](https://www.agganisarena.com/files/2026/07/AgganisArenaPromotersGuide_Summer2026_Final.pdf) | Green Line B (subject to [GLTPS shutdowns in 2026](https://www.boston.gov/es/node/16380266)) | Comm. Ave; Green Line B corridor |
| V12 | Permit-only on campus; [Brighton lot limited to 750](https://bceagles.com/sports/2025/8/20/GEN_0819150224); Newton and Needham satellites with shuttles | [Shuttles start 2.5 h before kickoff and end 2 h after](https://www.ticketmaster.com/alumni-stadium-tickets-chestnut-hill/venue/9013) | Neighborhood parking prohibited; Beacon St / Comm. Ave |
| V13 | [No on-site spectator parking](https://www.boston.gov/sites/default/files/file/2025/04/FINAL_%20Transportation%20Update%20April%202025.pdf); satellite lots outside the city | Shuttles [2 h before to 1 h after](https://www.boston.gov/sites/default/files/file/2025/04/FINAL_%20Transportation%20Update%20April%202025.pdf); Walnut Ave capped at 40 shuttle trips | Franklin Park Zoo and golf users share park roads |
| V14 | [No parking](https://support.bostoncalling.com/hc/en-us/articles/22008596963476) | [N. Harvard St closed from 9 p.m.](https://support.bostoncalling.com/hc/en-us/articles/22009533912084-Community) | Shares Allston riverfront with HOCR finish area and Harvard athletics |
| V15 | [~500 spaces at Harvard Stadium](https://www.cbsnews.com/boston/news/head-of-the-charles-course-map-watch-road-closures) | Memorial Drive partially closed (same source) | Three MBTA stations within walking distance (same source) |
| V16 | Hopkinton State Park free parking ([2015](https://www.wbur.org/2015/04/18/spectators-guide-boston-marathon)) | Extra Worcester Line trips: [four inbound, five outbound (2024)](https://news.keolisna.com/ridership-spike-on-marathon-monday-worcester-commuter-rail-line-and-green-line-see-major-ridership-boost) | Course crosses multiple municipalities; overlap with other same-day crowds not verified |

---

## 5. Method notes for the inferred numbers

### World Cup train share (V02)

The MBTA published per-match counts ([Streetsblog table, MBTA source](https://mass.streetsblog.org/2026/07/01/smooth-rides-no-hooliganism-a-review-of-the-mbtas-world-cup-service)). Event trains carried only ticket holders and were the only MBTA mode to the stadium on match days ([MBTA release](https://www.mass.gov/news/mbta-announces-service-updates-and-mticket-availability-for-world-cup-2026-matches)), so **no baseline subtraction** is needed. The attendance denominator is the [64,146 announced for 13 June](https://boston25news.com/news/local/scotland-vs-haiti-live-updates-boston-stadium-hosts-1st-2026-fifa-world-cup-match-tonight/KRJAY27KHZFSHOITQFKAV3CVCA), applied to all matches because FIFA reported [99.6% average fill](https://inside.fifa.com/news/boston-stadium-world-cup-2026-haaland-scotland-dembele); per-match attendance for the other matches was not verified (±1 point).

| Match | Train tickets sold | Riders to Foxboro | Riders back | Inbound share of 64,146 |
|---|---|---|---|---|
| Haiti–Scotland, 13 Jun | 19,900 | 17,300 | 17,300 | 27.0% |
| Iraq–Norway, 16 Jun | 11,545 | 10,400 | 10,300 | 16.2% |
| Scotland–Morocco, 19 Jun | 19,107 | 15,300 | 15,700 | 23.9% |
| England–Ghana, 23 Jun | 16,213 | 13,500 | 14,000 | 21.0% |
| Norway–France, 26 Jun | 17,759 | 14,700 | 15,800 | 22.9% |
| Round of 32, 29 Jun | 10,747 | 10,000 | 9,900 | 15.6% |

All counts from the [Streetsblog/MBTA table](https://mass.streetsblog.org/2026/07/01/smooth-rides-no-hooliganism-a-review-of-the-mbtas-world-cup-service); the quarter-final was not reported there. Return counts closely match inbound counts, so riders are round-trip people, not separate trips; counting both would double-count. Tickets sold exceed riders, showing why ticket sales should not be used as a mode share. The 13 June figure was nearly double the previous Gillette event-train record of [8,504 from Boston plus 2,373 from Providence at the 2023 Army–Navy game](https://www.masstransitmag.com/technology/fare-collection/news/55389644/ma-with-one-match-remaining-how-close-has-the-mbta-come-to-selling-out-world-cup-trains); that record would be about 17% of the [64,628 capacity](https://en.wikipedia.org/wiki/Gillette_Stadium) if the game was sold out (attendance not verified).

**Why the car share is not derived from parking:** roughly 5,000 spaces is a vehicle count; converting it to people needs an occupancy figure that no source gave. It is not used.

### Fenway estimate (V05)

The 23% transit / "nearly two-thirds" car claim appears only in material from stadium opponents ([Franklin Park Defenders](https://www.franklinparkdefenders.com/post/white-stadium-transportation-plan-full-of-holes-according-to-transportation-expert-and-local-reside)), described as "data" without a citation. The 0.65 value follows that claim; the wide range reflects that the underlying survey, its date and its treatment of park-and-ride could not be checked.

### Gillette NFL estimate (V01)

Train share from the [2015 count](https://www.bostonglobe.com/lifestyle/2015/10/07/mbta-patriots-express-everyone-fan-almost/oPDm9MFPiNxF7QWWvycSVM/story.html) (likely paywalled; flag) against the [then-capacity of 65,878](https://en.wikipedia.org/wiki/Gillette_Stadium) gives 2.3–3.3%. Assumed charter/coach 2–8% (no source) and near-zero walking. Car share = 100% − rail − coach ≈ 89–96%; recommended 0.92.

---

## 6. Regional conclusion

### Weighted car shares (only rows with a value)

Configurations are one per venue (no mutually exclusive configurations added); multi-day event totals (V15, V14) are excluded.

| Weighting set | Rows and weights | Car share |
|---|---|---|
| Capacity-weighted, current | V01 64,628 × 0.92; V05 37,755 × 0.65; V11 19,900 × 0.95 | **0.84** |
| Same, with 2028 White Stadium | adds V13 10,519 × 0.50 | **0.81** |
| Excluding Gillette | V05 + V11 | **0.75** |
| Downtown only (rows with any value) | V05 alone | **0.65** |

Capacities from the linked rows in §4a. Typical-attendance weighting could not be computed: published typical attendance was found only for a few rows (for example BC football averaged [about 32,000 in 2016](https://stadiumjourney.com/stadiums/alumni-stadium-s380), and the Fleet averaged [5,238 at Agganis](https://www.boston.com/sports/sports-news/2026/07/07/boston-fleet-agganis-arena/)), and those rows have no car share.

**Missing coverage** in these weights: TD Garden, MGM Music Hall, Leader Bank Pavilion, Agganis, Tsongas, Alumni Stadium, and all theaters — the downtown and university venues most likely to sit below 0.85. The weighted 0.84 is therefore biased upward by what is measurable.

### Do the outlying venues obscure the downtown pattern?

Yes. Gillette and Xfinity together supply about 69% of the capacity in the weighted set (84,528 of 122,283 seats, from §4a capacities) and are the most car-dependent. Removing Gillette drops the weighted share by about nine points; the one downtown venue with any figure sits near 0.65. The region looks like 0.85 mostly because its biggest venues are suburban.

### Strongest contrary evidence

- **Against `hub`, toward `transit`:** the MBTA moved [17,300 people to one match](https://mass.streetsblog.org/2026/07/01/smooth-rides-no-hooliganism-a-review-of-the-mbtas-world-cup-service), downtown venues have little or no parking, and the Head of the Charles draws a [majority-local crowd](https://www.mass.gov/doc/head-of-the-charles-regatta-meeting-presentation-5222024/download) with about 500 event spaces. But even the World Cup's best match reached only 27% rail, and the only Fenway figure is near two-thirds car.
- **Against `hub`, toward `sprawl`:** the capacity-weighted share (0.84) is at the shared 0.85 fallback, and commuter background is about [78% car among non-remote workers](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access). The case for `hub` over `sprawl` rests on spill within dense downtown clusters, which this evidence supports qualitatively but does not measure.

### Venue exceptions that need overrides under `hub`

V05 Fenway (0.65), V13 White Stadium from 2028 (0.50), and — once evidence exists — TD Garden, MGM Music Hall, Head of the Charles and Boston Calling, which are all likely below 0.85.

### Clusters, shared roads and shared audiences (separate findings)

| Finding type | Cluster | Evidence |
|---|---|---|
| Venue cluster / shared roads | Fenway Park + MGM Music Hall (Lansdowne St, Brookline Ave, Storrow Drive) | [MGM driving directions](https://crossroadspresents.com/pages/mgm-fenway-music-hall-inner); [Red Sox parking page](https://www.mlb.com/redsox/fans/fenway-fest/transportation-and-parking) |
| Venue cluster / shared transit | Kenmore Green Line serves Fenway, MGM and the Agganis side of Comm. Ave; [B and C branch GLTPS shutdowns in 2026](https://www.boston.gov/es/node/16380266) | MBTA/City notices |
| Venue cluster | Allston riverfront: Harvard Athletic Complex (Boston Calling), HOCR finish at Herter Park | [DCR HOCR deck](https://www.mass.gov/doc/head-of-the-charles-regatta-meeting-presentation-5222024/download); [Boston Calling community page](https://support.bostoncalling.com/hc/en-us/articles/22009533912084-Community) |
| Corridor | Foxborough–Mansfield: Gillette and Xfinity; Legacy used a [Mansfield station shuttle](https://bostonlegacyfc.com/blogs/press/boston-legacy-fc-announces-free-shuttle-service-from-mansfield-commuter-rail-station-to-gillette-stadium-beginning-march-28) to Gillette. Shared highway approaches not verified. | Club release |
| Shared audience | Boston Fleet moved from Lowell to Agganis; 2025 coverage framed Agganis games as reaching city and southern fans for whom the Lowell trip was difficult ([The Ice Garden](https://theicegarden.com/pwhl-boston-fleet-to-play-two-games-at-boston-university-agganis-arena)) | News coverage |
| Shared audience | Boston Legacy season-ticket members renew for [Pawtucket 2027 and White Stadium 2028](https://www.boston.com/sports/boston-legacy-football-club/2026/08/27/boston-legacy-fc-wont-play-at-white-stadium-until-2028); Providence fans used [direct coaches to Gillette](https://turnto10.com/news/local/boston-stadium-express-offers-only-direct-route-to-world-cup-games-from-providence-fifa-foxborough-june-26-2026) | Club / news |

No distance rule or hard-access flag is proposed.

---

## 7. Data gaps, model limitations, conflicts and access problems

**Gaps.** No public event mode survey was found for TD Garden, Fenway (original), MGM Music Hall, Leader Bank Pavilion, Agganis, Tsongas, Xfinity Center, BC football, Boston Calling, Head of the Charles or the Marathon. Planning documents that would likely hold TD Garden and MGM Music Hall splits (the Hub on Causeway and Fenway Theater/Article 80 transportation studies) were not located in this pass. Event-coach ridership for the World Cup Boston Stadium Express was not published. No weekday/weekend or winter/summer split exists for any venue.

**Model limitations.** The brief's rule that MBTA park-and-ride counts as car-involved conflicts with Gridlock's purpose, because those cars never reach venue approaches; Red Sox park-and-ride promotion means the Fenway car-involved share can be high while local car pressure is lower. The two-value city setting cannot represent a region whose largest crowds are suburban and car-bound while its densest clusters are transit-served.

**Source conflicts.**

| Item | Conflict | Handling |
|---|---|---|
| World Cup 13 June riders | [About 20,000 per Boston 25](https://www.boston25news.com/news/local/world-cup-gridlock-tuesdays-match-boston-stadium-is-expected-test-rush-hour-traffic/JXBNMJJPIRCU3CMTSJ32L7MVII/) vs [17,300 per MBTA table](https://mass.streetsblog.org/2026/07/01/smooth-rides-no-hooliganism-a-review-of-the-mbtas-world-cup-service) (19,900 tickets sold) | Use MBTA rider count; 20,000 tracks tickets sold |
| Agganis capacity | [6,150 hockey (promoter guide)](https://www.agganisarena.com/files/2026/07/AgganisArenaPromotersGuide_Summer2026_Final.pdf) vs [6,300 / 7,200 (athletics page)](https://goterriers.com/facilities/?id=11) vs [8,000 center-stage concert](https://en.wikipedia.org/wiki/Agganis_Arena) | Use the 2026 promoter guide for hockey |
| Tsongas capacity | [6,500 / 7,800](https://arena-guide.com/arena/tsongas-center/) vs [6,003 / 7,000 (2014)](https://goriverhawks.com/sports/2014/7/18/general_0718141249.aspx?id=174) | Unresolved; likely reconfiguration |
| White Stadium crowd | [10,519 seats](https://en.wikipedia.org/wiki/White_Stadium) vs [11,000 planning figure incl. staff](https://www.dotnews.com/2026/03/18/gameday-parking-restrictions-a-flashpoint-for-white-stadium-plans/) | Definitional: seats vs people on site |
| White Stadium transit share | Plan projects 40% transit; critics say a mile-distant station makes this unrealistic ([Franklin Park Defenders](https://www.franklinparkdefenders.com/post/white-stadium-transportation-plan-full-of-holes-according-to-transportation-expert-and-local-reside)) | Preserved; projection marked low confidence |

**Access problems.** Boston Globe articles (2015 Patriots Train; 2025–2026 coverage) may be paywalled. The ACS metro table was read from a Newgeography mirror domain; verify against Census. No access controls were bypassed.

---

## 8. Changes through 2028

| Change | Status | Date | Suggested re-check |
|---|---|---|---|
| Boston Legacy plays all 2027 home matches at Centreville Bank Stadium, Pawtucket | Confirmed by club | [Announced 27 Aug 2026](https://bostonlegacyfc.com/blogs/press/boston-legacy-fc-announces-centreville-bank-stadium-as-2027-venue-ahead-of-move-home-to-white-stadium-in-2028) | When 2027 NWSL schedule is released |
| Boston Legacy moves to White Stadium | Scheduled; legal path cleared by SJC ruling | [2028 season](https://bostonlegacyfc.com/blogs/press/boston-legacy-fc-announces-centreville-bank-stadium-as-2027-venue-ahead-of-move-home-to-white-stadium-in-2028) | Early 2028; then after the [post-10-game traffic report](https://www.cbsnews.com/boston/news/boston-legacy-fans-tickets-white-stadium-transportation/) |
| Boston Fleet moves primary home from Tsongas to Agganis | Confirmed | [2026–27 season](https://www.boston.com/sports/sports-news/2026/07/07/boston-fleet-agganis-arena/) | When PWHL schedule is released |
| Boston Calling returns to Harvard Athletic Complex | Announced | [4–6 Jun 2027](https://www.bostonglobe.com/2025/06/20/arts/boston-calling-canceled-2026/) | March 2027 (transport page) |
| New Northeastern arena replaces Matthews Arena | Under construction | [Fall 2028](https://www.cdrecycler.com/news/demolition-of-northeastern-university-historic-matthews-arena-begins) | Mid-2028 |
| Green Line E bypasses Symphony station (affects Symphony Hall area) | Scheduled | [6 Jun 2026 – 18 May 2029](https://boston.gov/departments/transportation/boston-mbta-shutdowns-2026) | Quarterly |
| Foxboro station permanent accessible high-level platform | Complete | [Substantially complete, open June 2026](https://www.mbta.com/projects/foxboro-station-improvements) | After 2026 NFL season for event-train counts |
| New Green Line Type 10 vehicles | Scheduled (vendor/agency timeline) | [Arriving 2027](https://mass.streetsblog.org/category/transit/page/13) | Mid-2027 |
| Head of the Charles 2026 | Scheduled | [16–18 Oct 2026](https://www.meetboston.com/events/festivals-and-special-events/head-of-the-charles/) | Late Oct 2026 for any MBTA ridership release |
| New England Revolution stadium, Everett | **Proposal** in MEPA review; [likely opening about 2030](https://www.bostonglobe.com/2026/07/20/business/new-england-revs-stadium-world-cup/); [no more than 75 parking spots under Everett agreement](https://www.cbsnews.com/boston/news/everett-soccer-stadium-new-england-revolution/?ftag=CNM-00-10aab4i) | Beyond 2028 | At each MEPA milestone |

---

## 9. End summary

1. **City type:** `hub`. Downtown venues are rail-adjacent and parking-starved, so spill between nearby crowds matters; car shares there are probably below 0.85 but are largely unmeasured. **Strongest contrary evidence:** capacity-weighted share of 0.84 driven by Gillette and Xfinity (points toward `sprawl`'s behaviour), and World Cup rail capacity (points toward `transit`, but peaked at 27%).
2. **Car-share values keyed to rows:** measured — none complete (V02 rail share 15.6–27.0% only); projected — V13 0.50; estimated — V01 0.92, V03 0.92, V05 0.65, V11 0.95; unknown with `hub` fallback 0.85 — V04, V06–V10, V12, V14–V16, V18.
3. **Boundary:** include Boston, Cambridge, Newton/Chestnut Hill, Foxborough and Mansfield (Gillette draws crowds on [South Station event trains](https://www.mass.gov/news/mbta-announces-service-updates-and-mticket-availability-for-world-cup-2026-matches) and Greater Boston coaches; Xfinity sits in the same corridor), and Lowell as an inside edge (the Fleet's audience overlapped Lowell and Boston until 2026). Treat Providence/Pawtucket as outside the region but flag Legacy's 2027 Pawtucket season as a temporary shared-audience exception; its metro is much more car-dependent ([72.2% drive alone](https://mail.newgeography.com/content/008668-annual-us-report-means-work-access)). Worcester and New Hampshire: not supported by event evidence found; exclude pending research. **Brief inconsistencies:** the starting leads list White Stadium as Legacy's venue (not until 2028), include Tsongas as the Fleet's venue (moved), list Boston Calling (no 2026 edition) and omit Pawtucket, where Legacy actually plays; the companion venue answer was unavailable.
4. **Gaps and conflicts:** see §7.
5. **Changes through 2028:** see §8.
