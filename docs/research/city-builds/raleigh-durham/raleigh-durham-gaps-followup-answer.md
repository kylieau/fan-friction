# Raleigh–Durham: follow-up on city-build gaps

**Answer date:** Tuesday, October 13, 2026 (America/Los_Angeles); **second pass Oct 14, 2026** (gap-filling only; new facts marked "(2nd pass)"). Research only; this does not approve a city build.

**Inputs:** the [venue table answer](raleigh-durham-venue-table-answer.md) (source of venue row IDs R01–R27 and the team list). **The city-type answer (`raleigh-durham-city-type-answer.md`) was not provided for this pass.** This answer doesn't redo that work and wires no car shares or fan-mode splits from it.

**Source labels:** **Official** = team, league, university or owner page or feed. **Feed** = a free public data feed (ESPN site API, NHL web API, MLB Stats API). **Secondary** = reference or compilation site (Wikipedia, Hockey-Reference). Every number below is copied from the linked source. Nothing was filled from memory.

### Access limits this pass (read first)

- **Web search budget used up.** The shared web-search limit ran out partway through the Ticketmaster checks. Everything after that came from direct fetches of public pages and feeds. Items that needed a search are marked **gap**, with what was tried.
- **Rate-limited and not retried (HTTP 429 from the fetch proxy):** `site.api.espn.com/.../college-football/teams/nccu`, `site.api.espn.com/.../mens-college-basketball/teams/153`, `www.nhl.com/hurricanes/`, `www.rdu.com/`. After these, the proxy said further pages might be refused, so fetching stopped.
- **Rendered empty (JavaScript-only):** ESPN NHL attendance pages ([2024](https://www.espn.com/nhl/attendance/_/year/2024), [2025](https://www.espn.com/nhl/attendance/_/year/2025), [2026](https://www.espn.com/nhl/attendance/_/year/2026)). No season averages could be taken from them.
- **Fetch error:** `site.api.espn.com/.../college-football/teams/ncst` (client error). The numeric form [`teams/152`](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/152) worked.
- **Truncated by the fetch tool:** the ESPN and NHL full-season schedule feeds were cut off partway (noted where it matters).
- **No paywalls or access controls were bypassed.** No archives or mirrors were used.
- **(2nd pass, Oct 14, 2026):** search worked throughout; 27 searches were used and the limit was not hit. rdu.com and the ESPN NCCU and UNC basketball feeds loaded this time. **Fetch errors (not retried another way):** ticketmaster.com venue pages 368657 (Dorton) and 369187 (Booth), and one Ticketmaster event page. Hockey-Reference season pages carry no attendance totals.

---

## Build rules (notes for whoever turns this into app data)

- **Unique IDs across all cities.** Every venue ID and team ID must be unique across all cities. `giants`, `jets`, `rangers`, `kings` and `cardinals` are already taken, so add a city prefix. Several names here are generic or shared across metros ("Carolina", "North Carolina", "Bulls", "Courage", "Wolfpack", "Tar Heels", "Blue Devils", "Eagles"), so prefix every Raleigh–Durham team and venue ID with the city code once it's confirmed (e.g. an `rdu` prefix, if RDU is confirmed).
- **No per-city opponents file.** Opponent draws go into `expectedDrawIndex` like every other city.
- **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list. Dorton Arena (§6) follows this rule.
- **Car shares.** Wire measured ones. Wire sourced estimates marked as estimated. Leave the rest on the city default. **This answer adds no car shares.** The city-type answer that holds them wasn't provided for this pass.
- **Concert rooms without a verified Ticketmaster ID ship with no concerts** (R17; R12 and R13 until their 2nd-pass IDs are confirmed), unless another sourced feed is added later. Treat R24 and R25 as one complex-level ID until rooms can be told apart.
- **Games away from the home venue (§4) must be placed at the actual site**, never at the team's usual home row.

## Biggest open gaps (for the city gaps list)

1. **Name and code:** ~~unverified~~ **(2nd pass) resolved:** "Triangle" and **RDU** both confirmed (§1).
2. **Ticketmaster IDs:** **(2nd pass)** R04 verified (368652). R12 (368657) and R13 (369187) found only as search-result titles because page fetches failed; confirm before wiring. R13 also sells through ETIX. R17 (new Red Hat, not open) remains unverified. R24 and R25 share one complex-level ID (369155).
3. **Feeds:** **(2nd pass) resolved.** NCCU (ESPN 2428) and Shaw (ESPN 2551) have feeds; the six summer, amateur and junior-college teams have no free feed.
4. **Colors:** **(2nd pass)** NCCU now has official values; UNC athletics #7BAFD4 is secondary-sourced. The Hurricanes and Bulls have official color **names** but no official hex; the Courage has no official source. Smaller teams' colors remain gap.
5. **Crowds:** **(2nd pass)** NHL season averages added (2023–24 official; others secondary). The Courage's 2023 and 2024 playoff venues aren't confirmed. College basketball before 2024–25 and Olympic sports weren't covered.
6. **Dorton Arena:** the stage-set figure conflicts within the same agency (7,000 vs 6,500), and floor or standing setups are unsourced. **(2nd pass)** Still unresolved: neither NCDA page is dated (§6).

---

## 1. Name, short form, code and covered area

### What the sources show

| Question | Finding | Source / status |
|---|---|---|
| Federal name for the combined area | "Raleigh-Durham-Cary" Combined Statistical Area (CSA). It contains the Raleigh-Cary MSA (Wake, Johnston, Franklin) and the Durham-Chapel Hill MSA (Durham, Orange, Chatham, Person). | [NC OSBM 2023 CBSA maps](https://www.osbm.nc.gov/facts-figures/geography/core-based-statistical-area-reference-maps/2023-core-based-statistical-area-maps), [NC Commerce](https://www.commerce.nc.gov/news/the-lead-feed/north-carolinas-changing-msas) (cited in the venue answer; not re-fetched today) |
| What the pro teams call themselves | Each uses the **state, not a metro name**: "Carolina Hurricanes" (ESPN abbreviation `CAR`), "North Carolina Courage" (ESPN abbreviation `NC`), "North Carolina FC". | [ESPN NHL feed](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/car); [ESPN NWSL feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams); [CBS17 on NCFC](https://www.cbs17.com/sports/deeply-difficult-decision-north-carolina-fc-will-not-field-a-pro-soccer-team-in-2026/amp/) |
| Shared local name like "Tampa Bay" | **No team uses a shared metro name** comparable to "Tampa Bay". **(2nd pass) "The Triangle" / "Research Triangle Region" is confirmed as the local regional name:** the airport calls its area the ["Research Triangle Region"](https://www.rdu.com/travel-info/area-information), covering "Raleigh, as well as … Durham, Chapel Hill and Cary"; the regional economic partnership uses both "the Research Triangle" and "the Triangle" ([RTRP regional profile, Jan 2022](https://researchtriangle.org/wp-content/uploads/2022/02/RTRP_Regional_Profile_1.25.22.pdf)); local media use "the Triangle" for Hurricanes fandom ([CBS17, May 4, 2019](https://digital-release.cbs17.com/sports/carolina-hurricanes/fans-come-together-as-hurricanes-surge-into-3rd-round-of-nhl-playoffs/amp); [AOL-syndicated Stadium Series story, Feb 2023](https://www.aol.com/triangle-fans-proved-plenty-sunshine-041455953.html)) and for the Courage's founding ("bring an NWSL team to the Triangle", [Soccer Stadium Digest](https://soccerstadiumdigest.com/2017/01/new-for-2017-north-carolina-courage/)). | **Confirmed (2nd pass) as a media/regional term.** No team was found using "Triangle" in its own name. Note the RTRP's 12-county "Research Triangle Region" (Chatham, Durham, Franklin, Granville, Harnett, Johnston, Lee, Nash, Person, Wake, Warren, Wilson, as returned by the fetch; Orange did not appear in the extract) is an economic-development footprint, **wider than the app metro**; don't adopt it as the boundary. |
| Three-letter code | **RDU** is the brief's lead (Raleigh-Durham International Airport). | **(2nd pass) Confirmed:** the airport's own site uses "RDU" for Raleigh-Durham International Airport ("When you arrive at RDU", [rdu.com area information](https://www.rdu.com/travel-info/area-information)). Team feed codes (`CAR`, `NC`, `NCSU`) are team codes, not metro codes. |

### Recommendation (for confirmation)

- **Display name:** "Raleigh–Durham". It matches the federal CSA's lead names and the venue answer. No team uses a competing metro name, so the Tampa Bay case (where every team said "Tampa Bay") doesn't apply.
- **Short form:** "Triangle". **(2nd pass) Verified** as the regional/media term (airport, regional partnership, CBS17; sources in the table above). Teams themselves use "Carolina"/"North Carolina", not "Triangle".
- **Code:** **RDU**. **(2nd pass) Verified** on the airport's own site ([rdu.com](https://www.rdu.com/travel-info/area-information)). Like Tampa Bay/TPA, the code is the airport's.
- **(2nd pass) Cary and Chapel Hill** are both named by the airport as cities of its region ([rdu.com](https://www.rdu.com/travel-info/area-information)), consistent with the venue answer's boundary.
- **Covered area (from the venue answer's boundary):** core is **Wake, Durham and Orange counties**.
  - **Chapel Hill is in** (Orange County; R02, R04, R15, R19, R20).
  - **Cary is in** (Wake County; R09, R13).
  - Also in: Raleigh, Durham, Holly Springs (R26) and Zebulon (R27).
  - Johnston, Franklin, Chatham and Person counties are in scope but have no venues listed yet. Harnett, Lee and Vance are edge cases, excluded by default. Wilson (the Mudcats' new home) is excluded.

---

## 2. Ticketmaster venue IDs for concert rooms

**Method:** an ID counts as verified only when it appears in a `ticketmaster.com/.../venue/NNNNN` URL that was fetched and showed the matching venue, or when a fetched page (Ticketmaster's own blog, or the venue's own site) links to that URL. No Discovery API key was used.

**Rooms checked:** the venue answer's rows that host or have hosted concerts or live shows: R01, R04, R05, R06, R12, R13, R16, R17, R23, R24, R25. Sports-only rows aren't listed.

| Venue row ID | Room | Ticketmaster venue ID | Verification link | Notes |
|---|---|---|---|---|
| R01 | Carter-Finley Stadium | **368711** | [ticketmaster.com/.../venue/368711](https://www.ticketmaster.com/carter-finley-stadium-billets-raleigh/venue/368711) | Fetched page shows "Carter Finley Stadium", Raleigh, NC, **4700 Trinity Road**. The venue answer gave 4600 Trinity Rd from a secondary source, so the addresses conflict. |
| R04 | Dean E. Smith Center | **368652 (2nd pass)** | [ticketmaster.com/.../venue/368652](https://ticketmaster.com/Dean-E-Smith-Center-tickets-Chapel-Hill/venue/368652) | Fetched page shows "Dean E Smith Center", Chapel Hill, NC, 300 Skipper Bowles Drive; "No Upcoming Events" on Oct 14, 2026. The venue answer says the last concert was 2008. |
| R05 | Lenovo Center | **369049** | [Ticketmaster blog "Step Inside: Lenovo Center"](https://blog.ticketmaster.com/step-inside-pnc-arena-in-raleigh-north-carolina) links to `ticketmaster.com/lenovo-center-tickets-raleigh/venue/369049` | Verified through Ticketmaster's own linking page. The venue page itself wasn't fetched. |
| R06 | Coastal Credit Union Music Park at Walnut Creek | **368715** | [ticketmaster.com/.../venue/368715](https://www.ticketmaster.com/coastal-credit-union-music-park-at-boletos-raleigh/venue/368715) | Fetched page shows this venue in Raleigh, NC. |
| R12 | J.S. Dorton Arena | **368657 (2nd pass; partly verified)** | [ticketmaster.com/.../venue/368657](https://www.ticketmaster.com/dorton-arena-tickets-raleigh/venue/368657) | Found as a ticketmaster.com search result titled "Dorton Arena - Raleigh, NC". **The page fetch failed (client error)** and wasn't retried another way, so the page content wasn't seen. The [NCDA booking page](https://www.ncagr.gov/divisions/ncstatefair/bookyourevent/dortonarena) has no ticketing links. Confirm via Discovery API before wiring. |
| R13 | Koka Booth Amphitheatre | **369187 (2nd pass; partly verified)** | [ticketmaster.com/.../venue/369187](https://www.ticketmaster.com/carys-booth-amphitheatre-tickets-cary/venue/369187) | Found as a ticketmaster.com search result titled "Cary's Booth Amphitheatre - Cary, NC". Ticketmaster search results also list 2026 Cary events (e.g. [Ella Langley, Jul 24, 2026](https://www.ticketmaster.com/ella-langley-cary-07-24-2026/event/Z7r9jZ1A7OUOs); [ZZ Top, May 22, 2026](https://www.ticketmaster.com/zz-top-cary-05-22-2026/event/Z7r9jZ1A7r8v4)). **All three page fetches failed (client error)** and weren't retried another way. **Vendor conflict:** the venue's [box office page](https://www.boothamphitheatre.com/box-office) names **ETIX** as its seller, so Ticketmaster may carry only some (promoter-sold) shows. Treat 369187 as a partial feed; confirm via Discovery API. |
| R16 | Red Hat Amphitheater (current site) | **369612** | [ticketmaster.com/.../venue/369612](https://www.ticketmaster.com/red-hat-amphitheater-boletos-raleigh/venue/369612?page=4) | Fetched page shows "Red Hat Amphitheater", Raleigh, NC. Events seen were "The Rink at Red Hat Amphitheater" (Dec 28, 2025–Jan 2, 2026). Those are winter rink sessions, not concerts, so filter them. |
| R17 | Red Hat Amphitheater (new site, from spring 2027) | **not verified** | — | Not open yet. Whether it will reuse 369612 is unknown. **Key by site, not name** (venue answer A3). Re-check before spring 2027. |
| R23 | DPAC (Durham Performing Arts Center) | **369510** | [ticketmaster.com/.../venue/369510](https://ticketmaster.com/dpac-durham-performing-arts-center-tickets-durham/venue/369510) | Fetched page shows "DPAC - Durham Performing Arts Center", Durham, NC. |
| R24 | Raleigh Memorial Auditorium (Martin Marietta Center) | **369155 (complex-level only)** | [ticketmaster.com/.../venue/369155](https://www.ticketmaster.com/martin-marietta-center-for-the-performing-tickets-raleigh/venue/369155?page=1); linked from [martinmariettacenter.com/tickets](https://martinmariettacenter.com/tickets) | The venue's site says Ticketmaster is "the only official online ticketing service". The ID covers the whole **Martin Marietta Center**. The fetched page didn't separate events by room. **No room-level ID was verified.** |
| R25 | Meymandi Concert Hall (Martin Marietta Center) | **369155 (complex-level only)** | Same as R24 | Same ID as R24. Meymandi isn't named on the fetched page. Room matching inside the complex is **not verified**. |

**Counts (updated 2nd pass):**
- **Verified, room-level (6):** R01, R05, R06, R16, R23, **R04 (368652)**.
- **Verified at complex level only (1 ID shared by 2 rows):** R24 and R25 (369155).
- **Partly verified (2; search-result title only, page fetch failed):** R12 (368657), R13 (369187; venue also sells through ETIX).
- **Not verified (1):** R17 (not open).

**Matching notes:**
- The four Martin Marietta rooms (Memorial Auditorium, Meymandi, Fletcher, Kennedy) share one Ticketmaster venue ID. Room assignment for R24 and R25 therefore needs event-level parsing or another source. Don't assign every 369155 event to R24.
- The R16 listing includes non-concert products ("The Rink"). The venue answer's add-on and parking flags still apply to R01, R05 and R06.
- A Live Nation page for Carter-Finley uses the key `KovZpZAEvltA` ([Live Nation](https://www.livenation.com/venue/KovZpZAEvltA/carter-finley-stadium-events)). It **wasn't checked as a Discovery API ID**, so don't use it as one.

---


## 3. Teams: league, home venue, free schedule feed and colors

**Feed IDs** come from fetched public feeds:
- ESPN site API: [NHL](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/car), [NWSL](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams), [USL Championship](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams), college football ([152](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/152), [UNC](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/unc), [Duke](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/duke))
- NHL web API ([club schedule](https://api-web.nhle.com/v1/club-schedule-season/CAR/20262027))
- MLB Stats API ([Triple-A teams](https://statsapi.mlb.com/api/v1/teams?sportId=11))

ESPN gives one team ID per college. Only the **college-football** endpoint was checked for each school. Other sports' endpoints (basketball, baseball, soccer) weren't, and the UNC basketball check was rate-limited.

**Colors:** **Official** means the team or university brand page. **Secondary (feed)** means the `color` / `alternateColor` fields in ESPN's feed. Those are a data vendor's values, not a brand source.

| Team | League | Home venue row ID | Free feed and ID | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| Carolina Hurricanes | NHL | R05 | **ESPN** NHL team id `7`, abbr `CAR` ([feed](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/car)); **NHL web API** club code `CAR` ([feed](https://api-web.nhle.com/v1/club-schedule-season/CAR/20262027)) | #E30426 | gap | **Secondary (feed)**: [ESPN](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/car) `color`; ESPN has no `alternateColor` for this team. **(2nd pass)** Official color **names** only: red, black (primary home color from 2022) and silver trim, per [NHL.com, Sep 15, 2022](https://nhl.com/news/carolina-announces-new-red-alternate-uniforms-for-2022-2023-335570616). No official hex found; only fan/color-code sites published hex values (not used). Official hex remains **gap**. |
| North Carolina Courage | NWSL | R09 | **ESPN** `usa.nwsl` team id `15366`, abbr `NC` ([feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams)) | #AB0033 | #00416B | **Secondary (feed)**: [ESPN](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams). Official brand source **still gap (2nd pass)**: the [club homepage](https://www.nccourage.com/?p=9812) gives no colors; launch coverage says only that the colors mirror NCFC's ([Soccer Stadium Digest](https://soccerstadiumdigest.com/2017/01/new-for-2017-north-carolina-courage/); [WUNC, Jan 9, 2017](https://www.wunc.org/sports/2017-01-09/pro-womens-soccer-returns-to-north-carolina)). Keep ESPN as secondary. |
| North Carolina FC | USL Championship; **inactive in 2026** | R09 (through 2025) | **No feed for 2026.** Not among the 25 teams in ESPN's 2026 USL Championship list ([feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)). Club suspended for 2026 ([CBS17](https://www.cbs17.com/sports/deeply-difficult-decision-north-carolina-fc-will-not-field-a-pro-soccer-team-in-2026/amp/)). | gap | gap | — |
| Durham Bulls | MiLB Triple-A, International League (parent: Tampa Bay Rays) | R08 | **MLB Stats API** team id `234`, sportId `11`, venue id `2541` "Durham Bulls Athletic Park" ([feed](https://statsapi.mlb.com/api/v1/teams?sportId=11)) | gap | gap | MLB Stats API has no colors. **(2nd pass)** Official color **names** only: royal blue, Texas tan and orange (with black drop shadows), per the Bulls' current-look announcement on [MiLB.com, Nov 25, 2013](https://milb.com/news/gcs-64204768). No official hex or PMS found; ESPN doesn't carry MiLB. Hex remains **gap**. |
| NC State Wolfpack | ACC (NCAA Division I) | R01 football; R05 men's basketball; R18 women's basketball, volleyball, gymnastics, wrestling (and occasional men's games, §4); R22 baseball | **ESPN** college team id `152`, abbr `NCSU` ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/152)) | #CC0000 (Wolfpack Red) | #000000 (Wolfpack Black) | **Official**: [NC State brand "core palette"](https://brand.ncsu.edu/color/). The page says "core", not "primary". ESPN feed also gives `cc0000`. |
| North Carolina Tar Heels (UNC) | ACC (NCAA Division I) | R02 football; R04 men's basketball; R15 women's basketball and others; R19 soccer and lacrosse; R20 baseball | **ESPN** college team id `153`, abbr `UNC` ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/unc)) | #4B9CD3 (Carolina Blue) | #13294B (PMS 2767) | **Official (university-wide)**: [UNC identity color palette](https://identity.unc.edu/brand/color-palette/). The page doesn't cover athletics. ESPN's feed uses **#7BAFD4** / #13294B, so athletics may use a different Carolina Blue. **(2nd pass)** Athletics uses **#7BAFD4** (PMS 542 C), citing the 2015 *Carolina Athletics Brand Identity Guidelines*, per [Wikipedia "Carolina blue"](https://en.wikipedia.org/wiki/Carolina_blue) (**secondary**; the guidelines PDF itself was not fetched). UNC's own 2015 athletics rebrand release confirms Carolina Blue + white primary and navy/black/metallic silver secondary but gives no hex ([UNC, Apr 2015](https://www.unc.edu/?p=39220); [GoHeels, Apr 21, 2015](https://goheels.com/news/2015/4/21/210036117)). **For athletics teams, prefer #7BAFD4 (secondary-sourced) over the university web value.** |
| Duke Blue Devils | ACC (NCAA Division I) | R03 football; R10 basketball and volleyball; R14 soccer and lacrosse | **ESPN** college team id `150`, abbr `DUKE` ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/duke)) | #012169 (Duke Navy Blue) | #00539B (Duke Royal Blue) | **Official**: [Duke brand colors](https://brand.duke.edu/colors). Both are listed as "Official Duke Blue". ESPN feed gives `00539b` / `ffffff`. |
| NC Central (NCCU) Eagles | MEAC (per venue answer) | R07 football; R21 basketball and volleyball | **(2nd pass) ESPN** college team id `2428`, abbr `NCCU`, same id in the [college-football](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/nccu) and [men's basketball](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2428) feeds. ESPN `color` 880023 matches the official maroon; ESPN `alternateColor` c2c3c0 differs from the official gray. | #880023 (NCCU Maroon, PMS 202 C) | #8E9093 (NCCU Gray, PMS 423 C) | **(2nd pass) Official**: [NCCU graphic standards manual (© 2005)](https://static.nccueaglepride.com/custompages/Files/Athletics/NCCU_graphic_standards2.pdf) gives PMS and RGB (136/0/35; 142/144/147); hex here is converted directly from those official RGB values. Manual is old (2005); third color is black. |
| Shaw University | NCAA Division II, **CIAA** (2nd pass, [Shaw, Jan 28, 2026](https://shawbears.com/news/2026/1/28/shaw-announces-2026-football-schedule.aspx)) | R11 | **(2nd pass) ESPN** college-football team id `2551` ([ESPN schedule feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2551/schedule); [ESPN team page](https://www.espn.com/college-football/team/_/id/2551/shaw-bears)). **Venue conflict:** Shaw's own release puts all five 2026 home games (Sep 12, 19, 26; Oct 17, 31) at **Durham County Memorial Stadium (R11)**, but ESPN's feed labels them "George Williams Athletic Complex, Raleigh" with attendance 0. Use the official venue (R11); don't take venue from ESPN. | gap | gap | not checked |
| Holly Springs Salamanders | Coastal Plain League (summer collegiate) | R26 | **(2nd pass) No free API feed found.** The 2026 CPL schedule is published only as a PDF ([via Asheboro ZooKeepers, Oct 23, 2025](https://zookeepersbaseball.com/news/2026-cpl-schedule-announced/)); team page: [salamandersbaseball.com](https://salamandersbaseball.com/ting-stadium). Treat as **no feed**. | gap | gap | — |
| Zebulon Devil Dogz | Coastal Plain League (East); first game May 22, 2026 ([Wikipedia](https://en.wikipedia.org/wiki/Zebulon_Devil_Dogz), secondary) | R27 | **(2nd pass) No free API feed found** (same CPL PDF as above). Team site per Wikipedia: zebulondevildogz.com (not fetched). Treat as **no feed**. | gap | gap | Wikipedia lists red, white, black and blue (names only; secondary) |
| Wake FC | USL League Two | R26 | **(2nd pass) No free schedule feed found.** Not an ESPN-covered league in this check; 2026 results appear only on betting/score aggregators ([BetExplorer](https://www.betexplorer.com/football/team/wake-fc/nZUrmS5s), not a feed). Treat as **no feed**. | gap | gap | — |
| Tobacco Road FC | USL League Two (South Atlantic; 9th in 2026, no playoffs) | R11 | **(2nd pass) No free schedule feed found**; home "Durham County Stadium" and site tobaccoroadfc.com per [Wikipedia](https://en.wikipedia.org/wiki/Tobacco_Road_FC) (secondary). Treat as **no feed**. | gap | gap | — |
| Carolina Flyers | UFA | R11 | **(2nd pass) League site only**, no API: [watchufa.com](https://www.watchufa.com/node/8106) (2026 home opener preview, May 7, 2026, "Durham County Stadium"). Treat as **no feed** for automated ingest. | gap | gap | — |
| Wake Tech | NJCAA Division II, Region 10 (baseball) ([Wake Tech, May 2026](https://waketechsports.com/sports/bsb/2025-26/releases/20260506r2wv7t)) | R27 | **(2nd pass) No free API feed**; schedules on the college's PrestoSports site ([waketechsports.com](https://www.waketechsports.com/sports/beachvball/index)) and [Region 10 site](https://www.region10sports.com/sports/bsb/2025-26/diitourn). Home field at Nomaco Park **not confirmed** by the fetched page. Treat as **no feed**. | gap | gap | — |

**Feed coverage:**
- **Free feed confirmed (8 after 2nd pass):** Hurricanes, Courage, Durham Bulls, NC State, UNC, Duke, **NCCU (ESPN 2428)**, **Shaw (ESPN 2551; venue field wrong)**. UNC's id `153` is now confirmed in the [men's basketball feed](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/153) too (2nd pass).
- **No feed (7):** North Carolina FC (no 2026 team); **(2nd pass)** Salamanders, Devil Dogz (CPL schedule is a PDF), Wake FC, Tobacco Road FC (USL2), Carolina Flyers (UFA league site only), Wake Tech (PrestoSports pages only).
- ~~Feed status not checked (8)~~ resolved in the 2nd pass.
- **Missed teams:** none could be added this pass. Searches for other Triangle pro or semi-pro teams were not possible (search limit).

**Feed quality note:** ESPN's announced football attendance for NC State and UNC equals the published capacity at many games (§5). Treat those figures as "announced", not as a scan count.

---

## 4. Games away from the home venue (2025 on)

Place each of these at the **actual site**, not the team's usual home row. Games at sites outside the metro need no venue row; they only need to stay off the home row.

| Team | Date | Game | Actual site | Usual home row | Type | Source |
|---|---|---|---|---|---|---|
| Carolina Hurricanes | **Sep 24, 2026** | Preseason, CAR (home) vs Nashville, game `2026010044` | **First Horizon Coliseum, Greensboro**: outside metro | R05 | Relocated home game (preseason); NHL feed flags `neutralSite: true` | [NHL schedule feed](https://api-web.nhle.com/v1/club-schedule-season/CAR/20262027); [game landing](https://api-web.nhle.com/v1/gamecenter/2026010044/landing) |
| Carolina Hurricanes | **Nov 12, 2026** | Regular season, Seattle (home) vs CAR, game `2026020309` | **Veikkaus Arena** (international) | — (CAR is away) | International, neutral site | [NHL schedule feed](https://api-web.nhle.com/v1/club-schedule-season/CAR/20262027) |
| Carolina Hurricanes | **Nov 14, 2026** | Regular season, **CAR (home)** vs Seattle, game `2026020321` | **Veikkaus Arena, Helsinki** | R05 | **International relocated home game.** This confirms the venue answer's unverified "home game abroad" flag. | [NHL schedule feed](https://api-web.nhle.com/v1/club-schedule-season/CAR/20262027); [game landing](https://api-web.nhle.com/v1/gamecenter/2026020321/landing) (venueLocation "Helsinki") |
| Carolina Hurricanes | 2025–26 season | None found among the 41 games the feed returned (through Dec 20, 2025). The rest of the season was cut off by the fetch tool. | — | R05 | **Partly checked.** Games after Dec 20, 2025 weren't checked. | [NHL schedule feed 2025–26](https://api-web.nhle.com/v1/club-schedule-season/CAR/20252026) |
| UNC football | **Aug 29, 2026** | vs TCU, Aer Lingus College Football Classic | **Aviva Stadium, Dublin, Ireland** | R02 | International neutral site. ESPN lists it as "North Carolina at TCU", with TCU as the designated home team. | [Wikipedia 2026 UNC football](https://en.wikipedia.org/wiki/2026_North_Carolina_Tar_Heels_football_team) (secondary); [ESPN UNC feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/unc) |
| NC State football | **Aug 29, 2026** | at Virginia | **Scott Stadium, Charlottesville, VA** | R01 | Away game. Wikipedia says it was originally planned for Rio de Janeiro and then moved. | [Wikipedia 2026 NC State football](https://en.wikipedia.org/wiki/2026_NC_State_Wolfpack_football_team) (secondary) |
| NC State football | Dec 19, 2025 | Gasparilla Bowl vs Memphis | Raymond James Stadium, Tampa, FL | R01 | Bowl (neutral) | [Wikipedia 2025 NC State football](https://en.wikipedia.org/wiki/2025_NC_State_Wolfpack_football_team) (secondary) |
| Duke football | Dec 6, 2025 | ACC Championship vs Virginia | Bank of America Stadium, Charlotte | R03 | Conference title game (neutral) | [Wikipedia 2025 Duke football](https://en.wikipedia.org/wiki/2025_Duke_Blue_Devils_football_team) (secondary) |
| Duke football | Dec 31, 2025 | Sun Bowl vs Arizona State | Sun Bowl, El Paso, TX | R03 | Bowl (neutral) | same |
| NC State men's basketball | **Dec 17, 2025** | vs Texas Southern (home) | **Reynolds Coliseum (R18)** | R05 | **Home game moved to a different in-metro room**; attendance 5,500 | [Wikipedia 2025–26 NC State MBB](https://en.wikipedia.org/wiki/2025%E2%80%9326_NC_State_Wolfpack_men%27s_basketball_team) (secondary) |
| NC State men's basketball | Nov 24–26, 2025 | Maui Invitational (Seton Hall, Boise State, Texas) | Lahaina Civic Center, Lahaina, HI | R05 | Neutral site | same |
| NC State men's basketball | Dec 21, 2025 | vs Ole Miss | First Horizon Coliseum, Greensboro | R05 | Neutral site. The page lists attendance as 212, which looks doubtful, so it isn't used. | same |
| UNC men's basketball | Oct 24, 2025 (exhibition); Nov 25 and 27, 2025; Dec 20, 2025 | vs BYU; vs St. Bonaventure and Michigan State; vs Ohio State | Delta Center, Salt Lake City; Suncoast Credit Union Arena, Fort Myers; State Farm Arena, Atlanta | R04 | Neutral sites | [Wikipedia 2025–26 UNC MBB](https://en.wikipedia.org/wiki/2025%E2%80%9326_North_Carolina_Tar_Heels_men%27s_basketball_team) (secondary) |
| Duke men's basketball | Nov 4, 2025; Nov 18, 2025; Nov 27, 2025; Dec 20, 2025; Feb 21, 2026 | vs Texas; Kansas; Arkansas; Texas Tech; Michigan | Spectrum Center, Charlotte; Madison Square Garden; United Center; Madison Square Garden; Capital One Arena | R10 | Neutral sites | [Wikipedia 2025–26 Duke MBB](https://en.wikipedia.org/wiki/2025%E2%80%9326_Duke_Blue_Devils_men%27s_basketball_team) (secondary) |
| Duke men's basketball | Feb 22, 2025 | vs Illinois | Madison Square Garden, New York | R10 | Neutral site | [Wikipedia 2024–25 Duke MBB](https://en.wikipedia.org/wiki/2024%E2%80%9325_Duke_Blue_Devils_men%27s_basketball_team) (secondary) |
| NC State women's basketball | Oct 26, 2025 (exhibition); Nov 4, 2025; Nov 9, 2025 | vs Maryland; vs Tennessee; vs USC | First Horizon Coliseum, Greensboro (×2); Spectrum Center, Charlotte | R18 | Neutral sites | [Wikipedia 2025–26 NC State WBB](https://en.wikipedia.org/wiki/2025%E2%80%9326_NC_State_Wolfpack_women%27s_basketball_team) (secondary) |
| UNC baseball | Feb 22, 2025; Mar 25, 2025 | vs East Carolina; vs South Carolina | **Durham Bulls Athletic Park (R08)**; Truist Field, Charlotte | R20 | Neutral; the first is **inside the metro at R08** | [Wikipedia 2025 UNC baseball](https://en.wikipedia.org/wiki/2025_North_Carolina_Tar_Heels_baseball_team) (secondary) |
| UNC baseball | Feb 21, 2026 | Game at DBAP (opponent not captured) | **Durham Bulls Athletic Park (R08)** | R20 | Neutral, in metro | [Wikipedia 2026 UNC baseball](https://en.wikipedia.org/wiki/2026_North_Carolina_Tar_Heels_baseball_team) (secondary) |

**Neutral-site events held inside the metro** (log them at the room, not as any team's home game):
- **NCAA men's tournament, first and second rounds, at Lenovo Center (R05):** Mar 21, 2025 (Duke vs Mount St. Mary's, attendance 19,180) and Mar 23, 2025 (Duke vs Baylor, 19,244). Source: [Wikipedia 2024–25 Duke MBB](https://en.wikipedia.org/wiki/2024%E2%80%9325_Duke_Blue_Devils_men%27s_basketball_team) (secondary).
- **ACC baseball tournament at Durham Bulls Athletic Park (R08):** May 2025 (UNC played May 23–25, 2025). Source: [Wikipedia 2025 UNC baseball](https://en.wikipedia.org/wiki/2025_North_Carolina_Tar_Heels_baseball_team) (secondary). The 2026 ACC tournament was at Truist Field, Charlotte ([Wikipedia 2026 UNC baseball](https://en.wikipedia.org/wiki/2026_North_Carolina_Tar_Heels_baseball_team)).
- The 2023 NHL Stadium Series at Carter-Finley (R01) is already covered in the venue answer and isn't repeated here.

**Not checked (gap):**
- NC Courage, Durham Bulls (beyond the Sep–Oct windows used in §5), NCCU, Shaw and the summer and amateur teams.
- Duke and NC State baseball beyond the 2025 pages.
- Olympic sports at all three schools.

---

## 5. Postseason and past crowds, by team

**Range covered:** the 2023 seasons (NHL 2022–23) through Oct 13, 2026, for the NHL, MiLB, NWSL and college football. College basketball covers **2024–25 and 2025–26 only**. College baseball covers UNC 2024–2026, Duke 2025 and NC State 2025. Postseason and regular season are kept apart. All figures are **announced** numbers as published. Per-game logs from Wikipedia and Hockey-Reference are **secondary** sources. Season averages are given only where a source states them. None were calculated here.

### 5.1 Carolina Hurricanes (NHL), home R05

**Postseason home games** (source: [Hockey-Reference](https://www.hockey-reference.com/teams/CAR/2023_games.html), secondary; season pages linked per row)

| Season | Date | Opponent | Announced attendance | Source |
|---|---|---|---|---|
| 2022–23 | Apr 17, 2023 | NY Islanders | 18,680 | [HR 2023](https://www.hockey-reference.com/teams/CAR/2023_games.html) |
| 2022–23 | Apr 19, 2023 | NY Islanders | 18,680 | same |
| 2022–23 | Apr 25, 2023 | NY Islanders | 18,680 | same |
| 2022–23 | May 3, 2023 | New Jersey | 18,735 | same |
| 2022–23 | May 5, 2023 | New Jersey | 18,982 | same |
| 2022–23 | May 11, 2023 | New Jersey | 18,841 | same |
| 2022–23 | May 18, 2023 | Florida | 18,680 | same |
| 2022–23 | May 20, 2023 | Florida | 18,854 | same |
| 2023–24 | Apr 20, 2024 | NY Islanders | 18,825 | [HR 2024](https://www.hockey-reference.com/teams/CAR/2024_games.html) |
| 2023–24 | Apr 22, 2024 | NY Islanders | 18,905 | same |
| 2023–24 | Apr 30, 2024 | NY Islanders | 18,874 | same |
| 2023–24 | May 9, 2024 | NY Rangers | 18,959 | same |
| 2023–24 | May 11, 2024 | NY Rangers | 19,074 | same |
| 2023–24 | May 16, 2024 | NY Rangers | 19,124 | same |
| 2024–25 | Apr 20, 2025 | New Jersey | 18,895 | [HR 2025](https://www.hockey-reference.com/teams/CAR/2025_games.html) |
| 2024–25 | Apr 22, 2025 | New Jersey | 18,910 | same |
| 2024–25 | Apr 29, 2025 | New Jersey | 18,933 | same |
| 2024–25 | May 10, 2025 | Washington | 19,174 | same |
| 2024–25 | May 12, 2025 | Washington | 19,138 | same |
| 2024–25 | May 20, 2025 | Florida | 18,944 | same |
| 2024–25 | May 22, 2025 | Florida | 18,971 | same |
| 2024–25 | May 28, 2025 | Florida | 18,994 | same |
| 2025–26 | Apr 18, 2026 | Ottawa | 18,588 | [HR 2026](https://www.hockey-reference.com/teams/CAR/2026_games.html) |
| 2025–26 | Apr 20, 2026 | Ottawa | 18,591 | same |
| 2025–26 | May 2, 2026 | Philadelphia | 18,620 | same |
| 2025–26 | May 4, 2026 | Philadelphia | 18,647 | same |
| 2025–26 | May 21, 2026 | Montreal | 18,723 | same |
| 2025–26 | May 23, 2026 | Montreal | 18,819 | same |
| 2025–26 | May 29, 2026 | Montreal | 18,931 | same |
| 2025–26 | Jun 2, 2026 | Vegas | 18,738 | same |
| 2025–26 | Jun 4, 2026 | Vegas | 18,710 | same |
| 2025–26 | Jun 11, 2026 | Vegas | 18,761 | same |

**Regular season, home** (per-game logs; no season total or average is published on these pages. ESPN's attendance pages rendered empty. **Season averages added in the 2nd pass below the table.**)

| Season | Home games | Lowest announced (date) | Highest announced (date) | Source |
|---|---|---|---|---|
| 2022–23 | 41 | 16,211 (Oct 31, 2022) | 18,965 at the usual arena (Mar 5, 2023); 56,961 at Carter-Finley (R01), Stadium Series, Feb 18, 2023 | [HR 2023](https://www.hockey-reference.com/teams/CAR/2023_games.html) |
| 2023–24 | 41 | 18,700 (11 dates, e.g. Oct 27, 2023) | 18,997 (Feb 10, 2024) | [HR 2024](https://www.hockey-reference.com/teams/CAR/2024_games.html) |
| 2024–25 | 41 | 18,700 (18 dates, e.g. Oct 15, 2024) | 19,005 (Feb 8, 2025) | [HR 2025](https://www.hockey-reference.com/teams/CAR/2025_games.html) |
| 2025–26 | 41 | 18,299 (18 dates, e.g. Oct 28, 2025) | 18,581 (Mar 18, 2026) | [HR 2026](https://www.hockey-reference.com/teams/CAR/2026_games.html) |
| 2026–27 | in progress | — | — | ESPN and NHL feeds show `attendance` = 0 for games not yet played ([ESPN schedule](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/7/schedule)) |

**(2nd pass) Season averages, regular season, home** (stated by the source; nothing calculated here):

| Season | Stated average | Total | Label | Source / caveat |
|---|---|---|---|---|
| 2022–23 | 19,526 | not stated | Secondary (uncited) | [Wikipedia 2022–23 season](https://en.wikipedia.org/wiki/2022%E2%80%9323_Carolina_Hurricanes_season) "Team information" box; no citation and doesn't say whether the 56,961 Stadium Series game at R01 is included. Every arena game on Hockey-Reference was ≤18,965, so this average **likely includes the outdoor game**. Don't use it as an R05 figure. |
| 2023–24 | **18,798** (100.5% of capacity) | 770,736 over 41 games (secondary) | **Official** (team) for the average | [Hurricanes/NHL.com, Apr 8, 2024](https://nhl.com/hurricanes/news/canes-end-regular-season-having-sold-out-each-home-game): "averaged 18,798 fans per game"; first season with every game sold out. Total from [Wikipedia NHL attendance list](https://en.wikipedia.org/wiki/List_of_National_Hockey_League_attendance_figures) row "PNC Arena, 41, 18,798, 770,736, 100.5%" (table season unlabeled in the fetch; matched by the official average). |
| 2024–25 | 18,795 | not stated | Secondary | [Wikipedia 2024–25 season](https://en.wikipedia.org/wiki/2024%E2%80%9325_Carolina_Hurricanes_season) (reference list cites hockeyDB's 2024–25 attendance page). The team reached its 100th consecutive regular-season or playoff sellout on Mar 6, 2025 ([CBS17](https://www.cbs17.com/sports/carolina-hurricanes/carolina-hurricanes-reach-100-consecutive-sellouts-for-regular-season-or-playoff-home-games/amp)). |
| 2025–26 | 18,373 (10th of 32) | not stated | Secondary (weak; source not named) | [BetMGM blog, Jul 20, 2026](https://sports.betmgm.com/en/blog/nhl/best-and-worst-nhl-attendance-bm30/). Consistent with the 18,299–18,581 per-game range above, but **re-check against ESPN/NHL** before wiring. |

The repeated floors (18,700, then 18,299) look like a listed capacity reported as the announced crowd. The 18,299 figure matches the prior-season capacity in the venue answer's forum compilation. Use these as announced crowds, not as measured counts.

### 5.2 Durham Bulls (MiLB Triple-A), home R08

| Season | Home openings | Total home attendance | Average | High (date) | Low (date) | Source |
|---|---|---|---|---|---|---|
| 2023 | 73 | 491,757 | 6,736 | 11,090 (Jul 4) | 3,730 (Aug 31) | [MLB Stats API](https://statsapi.mlb.com/api/v1/attendance?teamId=234&season=2023) |
| 2024 | 75 | 496,715 | 6,623 | 11,183 (Jul 4) | 2,742 (Apr 3) | [MLB Stats API](https://statsapi.mlb.com/api/v1/attendance?teamId=234&season=2024) |
| 2025 | 75 | 485,021 | 6,467 | 10,943 (Jul 4) | 2,806 (Jul 9) | [MLB Stats API](https://statsapi.mlb.com/api/v1/attendance?teamId=234&season=2025) |
| 2026 | 75 | 453,064 | 6,041 | 10,184 (Jul 4) | 3,074 (Jul 29) | [MLB Stats API](https://statsapi.mlb.com/api/v1/attendance?teamId=234&season=2026) |

**Postseason:**
- **2023:** the Bulls played the International League Championship on Sep 26–28, 2023, **all at Harbor Park, Norfolk**, so there were **no home postseason games** ([MLB Stats API schedule](https://statsapi.mlb.com/api/v1/schedule?sportId=11&teamId=234&startDate=2023-09-15&endDate=2023-10-15&hydrate=venue)).
- **2024, 2025 and 2026:** no postseason games appear in the September–October schedule windows checked ([2024](https://statsapi.mlb.com/api/v1/schedule?sportId=11&teamId=234&startDate=2024-09-15&endDate=2024-10-15&hydrate=venue), [2025](https://statsapi.mlb.com/api/v1/schedule?sportId=11&teamId=234&startDate=2025-09-15&endDate=2025-10-15&hydrate=venue), [2026](https://statsapi.mlb.com/api/v1/schedule?sportId=11&teamId=234&startDate=2026-09-10&endDate=2026-10-13&hydrate=venue)).
- The attendance feed returned regular-season records only.

### 5.3 North Carolina Courage (NWSL), home R09

All figures are from Wikipedia season pages (**secondary**; the 2025 page says its match table comes from NWSLsoccer.com).

| Season | Home league matches with attendance | Stated average | Lowest (date) | Highest (date) | Source |
|---|---|---|---|---|---|
| 2023 | 11 | 4,800 | 4,000 (Aug 27) | 10,434 (Oct 7) | [Wikipedia 2023](https://en.wikipedia.org/wiki/2023_North_Carolina_Courage_season) |
| 2024 | 13 | 6,363 | 4,528 (May 17) | 10,026 (Nov 2) | [Wikipedia 2024](https://en.wikipedia.org/wiki/2024_North_Carolina_Courage_season) |
| 2025 | 13 | 7,684 | 6,235 (Apr 26) | 11,170 (Nov 2) | [Wikipedia 2025](https://en.wikipedia.org/wiki/2025_North_Carolina_Courage_season) |
| 2026 (to Aug 26) | 11 with figures (12 listed) | not stated | 7,013 (Mar 28) | 10,031 (May 2) | [Wikipedia 2026](https://en.wikipedia.org/wiki/2026_North_Carolina_Courage_season). Home or away was inferred from table position, so treat as partial. |

Note: 11,170 (Nov 2, 2025) and 10,031 (May 2, 2026) are above the official 10,000 capacity. This repeats the conflict already flagged in the venue answer.

**Postseason:**

| Season | Date | Match | Site | Attendance | Status |
|---|---|---|---|---|---|
| 2023 | Oct 22, 2023 | Playoff first round | **not confirmed** | 4,612 | The page doesn't name the teams or venue, so it isn't confirmed as a home game ([Wikipedia 2023](https://en.wikipedia.org/wiki/2023_North_Carolina_Courage_season)). **gap** |
| 2024 | Nov 9, 2024 | Quarterfinal loss to Kansas City Current | **not confirmed** | not listed | [Wikipedia 2024](https://en.wikipedia.org/wiki/2024_North_Carolina_Courage_season); ESPN postseason feed returned no events. **gap** |
| 2025 | — | No playoffs (finished ninth) | — | — | [Wikipedia 2025](https://en.wikipedia.org/wiki/2025_North_Carolina_Courage_season) |
| 2026 | — | Season in progress | — | — | — |

### 5.4 North Carolina FC (USL Championship), home R09 through 2025

**gap.** No crowd or postseason data was gathered (search limit). There's no 2026 season.

### 5.5 NC State football (R01), UNC football (R02) and Duke football (R03): regular-season home crowds

All figures are from Wikipedia season pages (**secondary**). "Cap." means the announced figure equals the listed capacity (NC State 56,919; UNC 50,500; Duke 35,018 from 2024, per the venue answer).

| Team | Season | Home games: announced attendance | Source |
|---|---|---|---|
| NC State | 2023 | 7 games, all 56,919 (cap.) | [Wikipedia](https://en.wikipedia.org/wiki/2023_NC_State_Wolfpack_football_team) |
| NC State | 2024 | 7 games, all 56,919 (cap.) | [Wikipedia](https://en.wikipedia.org/wiki/2024_NC_State_Wolfpack_football_team) |
| NC State | 2025 | 7 games, all 56,919 (cap.) | [Wikipedia](https://en.wikipedia.org/wiki/2025_NC_State_Wolfpack_football_team); also shown in the [ESPN feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/152/schedule?season=2025) |
| NC State | 2026 (to date) | Sep 11 Richmond 56,919 (cap.); later home games not yet listed | [Wikipedia](https://en.wikipedia.org/wiki/2026_NC_State_Wolfpack_football_team) |
| UNC | 2023 | Appalachian St 50,500; Minnesota 50,500; Syracuse 50,500; Miami 50,500; Virginia 50,500; Campbell 47,667; Duke 50,500 | [Wikipedia](https://en.wikipedia.org/wiki/2023_North_Carolina_Tar_Heels_football_team) |
| UNC | 2024 | Charlotte 48,431; NC Central 45,491; James Madison 50,500; Pittsburgh 46,033 (game summary says 46,003, a conflict); Georgia Tech 44,482; Wake Forest 48,364; NC State 50,500 | [Wikipedia](https://en.wikipedia.org/wiki/2024_North_Carolina_Tar_Heels_football_team) |
| UNC | 2025 | 6 games, all 50,500 (cap.) | [Wikipedia](https://en.wikipedia.org/wiki/2025_North_Carolina_Tar_Heels_football_team); also shown in the [ESPN feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/153/schedule?season=2025) |
| UNC | 2026 (to date) | Not listed on the source | [Wikipedia](https://en.wikipedia.org/wiki/2026_North_Carolina_Tar_Heels_football_team) |
| Duke | 2023 | Clemson 31,638; Lafayette 17,481; Northwestern 18,141; Notre Dame 40,768; NC State 31,833; Wake Forest 18,277; Pittsburgh 17,639 | [Wikipedia](https://en.wikipedia.org/wiki/2023_Duke_Blue_Devils_football_team) |
| Duke | 2024 | Elon 18,466; UConn 20,174; UNC 35,018 (cap.); Florida State 30,735; SMU 30,241; Virginia Tech 22,462 | [Wikipedia](https://en.wikipedia.org/wiki/2024_Duke_Blue_Devils_football_team) |
| Duke | 2025 | Elon 15,677; Illinois 23,893; NC State 30,022; Georgia Tech 27,846; Virginia 27,215; Wake Forest 21,045 | [Wikipedia](https://en.wikipedia.org/wiki/2025_Duke_Blue_Devils_football_team) |
| Duke | 2026 (to date) | Tulane 16,113; Stanford 19,139; William & Mary 22,003 | [Wikipedia](https://en.wikipedia.org/wiki/2026_Duke_Blue_Devils_football_team) |

**Football postseason home games: none.** All bowls and the ACC title game were at neutral sites:
- NC State: Pop-Tarts Bowl, Dec 28, 2023, 31,111; vs East Carolina at Navy–Marine Corps Memorial Stadium, Annapolis, Dec 28, 2024, 23,981 (bowl name not captured); Gasparilla Bowl, Dec 19, 2025, 13,336.
- UNC: Duke's Mayo Bowl, Dec 27, 2023, 42,925; Fenway Bowl, Dec 28, 2024, 27,900; no bowl in 2025.
- Duke: Birmingham Bowl, Dec 23, 2023, 20,023; Gator Bowl, Jan 2, 2025, 31,290; ACC Championship, Dec 6, 2025, 41,672; Sun Bowl, Dec 31, 2025, 44,975.
- Sources: the season pages linked above.

### 5.6 College basketball: regular-season home crowds and postseason home games

**Men's, regular season** (Wikipedia, secondary)

| Team (home row) | Season | Home games | Lowest (date) | Highest (date) | Source |
|---|---|---|---|---|---|
| UNC (R04) | 2024–25 | 15 (plus 1 exhibition) | 17,242 (Nov 4, 2024) | 21,750 (8 games, cap.) | [Wikipedia](https://en.wikipedia.org/wiki/2024%E2%80%9325_North_Carolina_Tar_Heels_men%27s_basketball_team) |
| UNC (R04) | 2025–26 | 18 (plus 1 exhibition at 15,332) | 16,079 (Nov 3, 2025) | 21,750 (5 games, cap.) | [Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_North_Carolina_Tar_Heels_men%27s_basketball_team) |
| Duke (R10) | 2024–25 | 17 (plus 2 exhibitions) | 9,314 (all games, cap.) | 9,314 | [Wikipedia](https://en.wikipedia.org/wiki/2024%E2%80%9325_Duke_Blue_Devils_men%27s_basketball_team) |
| Duke (R10) | 2025–26 | 15 (plus 1 exhibition) | 9,314 (all games, cap.) | 9,314 | [Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Duke_Blue_Devils_men%27s_basketball_team) |
| NC State (R05; one game at R18) | 2024–25 | 17 at Lenovo Center + 1 at Reynolds (Dec 10, 2024, Coppin State, 5,500) | 10,029 (Feb 12, 2025) | 19,500 (Jan 11, 2025, vs UNC) | [Wikipedia](https://en.wikipedia.org/wiki/2024%E2%80%9325_NC_State_Wolfpack_men%27s_basketball_team) |
| NC State (R05; one game at R18) | 2025–26 | 16 at Lenovo Center + 1 at Reynolds (Dec 17, 2025, 5,500) | 14,515 (Dec 10, 2025) | 19,367 (Feb 17 and Mar 2, 2026) | [Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_NC_State_Wolfpack_men%27s_basketball_team) |

**Men's postseason home games: none** in 2024–25 or 2025–26 for any of the three schools. The ACC tournament was in Charlotte and the NCAA games were at neutral sites (pages above). NC State played no postseason in 2024–25.

**Women's NCAA tournament home games** (Wikipedia, secondary)

| Team (room) | Date | Round, opponent | Attendance | Source |
|---|---|---|---|---|
| NC State (R18 Reynolds) | Mar 22, 2025 | First round, Vermont | 5,500 | [Wikipedia 2024–25 NC State WBB](https://en.wikipedia.org/wiki/2024%E2%80%9325_NC_State_Wolfpack_women%27s_basketball_team) |
| NC State (R18) | Mar 24, 2025 | Second round, Michigan State | 4,694 | same |
| UNC (R15 Carmichael) | Mar 22, 2025 | First round, Oregon State | 5,363 | [Wikipedia 2024–25 UNC WBB](https://en.wikipedia.org/wiki/2024%E2%80%9325_North_Carolina_Tar_Heels_women%27s_basketball_team) |
| UNC (R15) | Mar 24, 2025 | Second round, West Virginia | 4,271 | same |
| Duke (R10 Cameron) | Mar 21, 2025 | First round, Lehigh | 4,280 | [Wikipedia 2024–25 Duke WBB](https://en.wikipedia.org/wiki/2024%E2%80%9325_Duke_Blue_Devils_women%27s_basketball_team) |
| Duke (R10) | Mar 23, 2025 | Second round, Oregon | 3,461 | same |
| UNC (R15) | Mar 20, 2026 | First round, Western Illinois | 2,390 | [Wikipedia 2025–26 UNC WBB](https://en.wikipedia.org/wiki/2025%E2%80%9326_North_Carolina_Tar_Heels_women%27s_basketball_team) |
| UNC (R15) | Mar 22, 2026 | Second round, Maryland | 2,470 | same |
| Duke (R10) | Mar 20, 2026 | First round, Charleston | 3,435 | [Wikipedia 2025–26 Duke WBB](https://en.wikipedia.org/wiki/2025%E2%80%9326_Duke_Blue_Devils_women%27s_basketball_team) |
| Duke (R10) | Mar 22, 2026 | Second round, Baylor | 3,907 | same |

NC State women didn't host in 2026; they played at Crisler Center, Ann Arbor ([Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_NC_State_Wolfpack_women%27s_basketball_team)).

**Women's, regular season** (lowest and highest announced; Wikipedia, secondary)

| Team | Season | Lowest (date) | Highest (date) |
|---|---|---|---|
| NC State (R18) | 2024–25 | 4,206 (Nov 21, 2024) | 5,500 (13 games, cap.) |
| NC State (R18) | 2025–26 | 4,432 (Dec 18, 2025) | 5,500 (7 games, cap.) |
| UNC (R15) | 2024–25 | 2,211 (Dec 21, 2024) | 6,319 (Feb 16, 2025) |
| UNC (R15) | 2025–26 | 467 (Jan 25, 2026) | 6,336 (Nov 3, 2025) |
| Duke (R10) | 2024–25 | 1,137 (Nov 4, 2024) | 7,010 (Feb 27, 2025) |
| Duke (R10) | 2025–26 | 2,140 (Nov 12, 2025) | 9,314 (Feb 15, 2026) |

Sources: the women's season pages linked in the table above.

### 5.7 College baseball: NCAA postseason home games

| Team (room) | Season | Date | Round, opponent | Attendance | Source |
|---|---|---|---|---|---|
| UNC (R20 Boshamer) | 2024 | May 31 | Regional, LIU | 3,802 | [Wikipedia 2024 UNC baseball](https://en.wikipedia.org/wiki/2024_North_Carolina_Tar_Heels_baseball_team) |
| UNC (R20) | 2024 | Jun 1 | Regional, LSU | 3,919 | same |
| UNC (R20) | 2024 | Jun 2 | Regional, LSU | 4,098 | same |
| UNC (R20) | 2024 | Jun 3 | Regional, LSU | 4,026 | same |
| UNC (R20) | 2024 | Jun 7 | Super Regional, West Virginia | 4,139 | same |
| UNC (R20) | 2024 | Jun 8 | Super Regional, West Virginia | 4,491 | same |
| UNC (R20) | 2025 | May 30 | Regional, Holy Cross | 4,005 | [Wikipedia 2025 UNC baseball](https://en.wikipedia.org/wiki/2025_North_Carolina_Tar_Heels_baseball_team) |
| UNC (R20) | 2025 | May 31 | Regional, Oklahoma | 4,029 | same |
| UNC (R20) | 2025 | Jun 1 | Regional, Oklahoma | 4,001 | same |
| UNC (R20) | 2025 | Jun 2 | Regional, Oklahoma | not listed | same |
| UNC (R20) | 2025 | Jun 6 | Super Regional, Arizona | 4,045 | same |
| UNC (R20) | 2025 | Jun 7 | Super Regional, Arizona | 4,032 | same |
| UNC (R20) | 2025 | Jun 8 | Super Regional, Arizona | 4,013 | same |
| UNC (R20) | 2026 | May 29 | Regional, VCU | 3,982 | [Wikipedia 2026 UNC baseball](https://en.wikipedia.org/wiki/2026_North_Carolina_Tar_Heels_baseball_team) |
| UNC (R20) | 2026 | May 30 | Regional, East Carolina | 4,254 | same |
| UNC (R20) | 2026 | May 31 | Regional, East Carolina | 4,022 | same |
| UNC (R20) | 2026 | Jun 5 | Super Regional, USC | 3,847 | same |
| UNC (R20) | 2026 | Jun 6 | Super Regional, USC | 3,951 | same |
| UNC (R20) | 2026 | Jun 7 | Super Regional, USC | 3,913 | same |
| Duke (Jack Coombs Field; **no venue row**, it's a venue-answer A5 lead) | 2025 | Jun 7 | Super Regional, Murray State | 2,686 | [Wikipedia 2025 Duke baseball](https://en.wikipedia.org/wiki/2025_Duke_Blue_Devils_baseball_team) |
| Duke (Jack Coombs) | 2025 | Jun 8 | Super Regional, Murray State | 2,689 | same |
| Duke (Jack Coombs) | 2025 | Jun 9 | Super Regional, Murray State | 2,782 | same |

The 2026 UNC page's introduction mentions losing to Arizona in the Super Regional, but its game log and header show a series win over USC. The game log is used here.

NC State 2025 played the Auburn Regional away, with no home games ([Wikipedia](https://en.wikipedia.org/wiki/2025_NC_State_Wolfpack_baseball_team)). Regular-season baseball crowds weren't gathered: **gap**.

### 5.8 Teams with no crowd history gathered (gap)

- **NCCU, Shaw, Salamanders, Devil Dogz, Wake FC, Tobacco Road FC, Carolina Flyers, Wake Tech:** no crowd or postseason data found this pass (search limit).
- **Women's basketball 2023–24**, **men's basketball 2023–24**, NC State and Duke baseball for 2024 and 2026, and all Olympic sports: not checked.

---

## 6. Capacities still open: Dorton Arena (R12)

One sourced figure per setup. Where sources disagree, they're listed side by side and not combined.

| Setup | Figure | Label | Source (fetched Oct 13, 2026 unless noted) | Status |
|---|---|---|---|---|
| Permanent seats | **5,000** | Official | [NCDA Dorton Arena booking page](https://www.ncagr.gov/divisions/ncstatefair/bookyourevent/dortonarena): "5,000 permanent or 7,000 w/ portable seats"; "Seating capacity: 5,000 permanent seats (7,000 with portable seats used with stage)" | **Sourced. Confirmed exactly 5,000.** |
| Permanent seats (same agency, other page) | 4,750 permanent seats **and** 360 box seats | Official (older history page) | [NCDA Dorton Arena history page](https://www.ncagr.gov/divisions/ncstatefair/bookyourevent/dortonarena/history): "There are 4,750 permanent seats and 360 box seats." | **Conflict.** The page doesn't give a combined figure. Don't add them up. |
| Stage set with portable seats | **7,000** | Official | [NCDA booking page](https://www.ncagr.gov/divisions/ncstatefair/bookyourevent/dortonarena) | Sourced |
| Stage set (same agency, other page) | 6,500 | Official (older history page) | [NCDA history page](https://www.ncagr.gov/divisions/ncstatefair/bookyourevent/dortonarena/history): "Seating capacity when used with a stage is 6,500." | **Conflict** with 7,000 |
| Unspecified setup | 7,610 | Reported (tourism bureau) | [Visit Raleigh](https://www.visitraleigh.com/listing/north-carolina-state-fairgrounds/61023/) (from venue answer; not re-fetched) | Setup not stated; don't use for classification |
| Unspecified setup | 9,150 | Reported (encyclopedia) | [NCpedia](https://www.ncpedia.org/dorton-arena) (from venue answer; not re-fetched) | Setup not stated; don't use for classification |
| Floor-only, GA standing, or other setups | — | — | The booking page gives no separate floor-seat or standing figure; the arena floor is listed only by area. | **gap** |
| Arena football / hockey; basketball | 5,110; 7,610 | Secondary (uncited) | [Wikipedia "Dorton Arena"](https://en.wikipedia.org/wiki/Dorton_Arena) infobox (2nd pass); no citation or date | Don't use for classification |

**(2nd pass) 7,000 vs 6,500 conflict: not resolved.** Both NCDA pages were re-fetched Oct 14, 2026. Neither shows a publication or "last updated" date, and the history page doesn't say what year its 6,500 refers to. A Feb 27, 2026 report on the arena's planned makeover ([Hoodline, citing Triangle Business Journal](https://hoodline.com/2026/02/dorton-arena-makeover-aims-to-put-raleigh-back-in-the-spotlight/)) gives only floor area (about 25,000 sq ft), with no seat count. No dated official source exists, so keep both figures side by side.

**For the build:**
- **Permanent seats:** use **5,000** from the current NCDA booking page. Under the brief, this room counts on that sourced figure alone. Note that the agency's own history page gives a split (4,750 + 360 box seats) that conflicts with it.
- **Stage set:** keep 7,000 (booking page) and 6,500 (history page) side by side. If the app needs one figure, the current booking page is the agency's primary booking source. Record the conflict on the city gaps list.
- **Other setups:** leave blank and add them to the city gaps list.
