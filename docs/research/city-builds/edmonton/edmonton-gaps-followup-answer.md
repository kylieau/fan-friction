# Edmonton follow-up on city-build gaps

**As of:** Tuesday, October 13, 2026 (America/Los_Angeles); **second pass Oct 14, 2026** filled earlier gaps (sources added in the second pass were accessed Oct 14, 2026). Event dates are local Edmonton time (Mountain Time).
**Follows:** [edmonton-gaps-followup-prompt.md](edmonton-gaps-followup-prompt.md). Venue row IDs (A01–A20) come from [edmonton-venue-table-answer.md](edmonton-venue-table-answer.md).
**Research only:** this answer does not approve a city build.

> **Note on inputs:** the brief also refers to a "city type" answer (`edmonton-city-type-answer.md`). That file was **not provided** for this pass. Its scope (fan mode splits, car shares) is not redone here.

### How this pass was limited (read first)

- **Web search ran out partway through.** After about 17 searches, the shared web-search limit for this turn was used up. I didn't search after that; everything after that point comes only from pages I fetched directly. Items I couldn't reach are marked **gap**, with what I tried.
- **Some fetches were refused.** The fetch proxy rate-limited these pages (HTTP 429) and said not to retry, so I didn't: `bearsandpandas.ca` (U of A athletics), `sgsaints.ca` (Spruce Grove Saints), `riverhawksbaseball.com/remax-field` (Riverhawks) and `teamcolorcodes.com/edmonton-elks-color-codes/`.
- **Other pages failed:** `thestingers.ca` refused automated fetching (its robots rules disallow it). `ticketmaster.ca/venue/139314` and a `hockeydb.com` attendance page returned fetch errors. I didn't try to reach any of these another way.
- **Second pass (Oct 14, 2026):** this pass only filled cells marked gap, not verified or not checked. It added about 46 searches and didn't reach the search limit. Anything sourced in the first pass wasn't re-verified. Newly blocked pages are listed at the end.
- **No Ticketmaster Discovery API key was used.** Each Ticketmaster ID below is checked against the public Ticketmaster venue page for that ID, or against an official venue site that links to it.

Labels: **Official** = a team, league, venue or operator page or feed. **Secondary** = Wikipedia or a third-party site. **Computed** = arithmetic I did on the per-game figures in the cited source.

---

## 1. Name, short form, code and covered area

| Item | Finding | Source / status |
|---|---|---|
| Display name | **Edmonton** | Every pro and major junior team in the venue answer uses "Edmonton" in its name: [Oilers](https://en.wikipedia.org/wiki/Edmonton_Oilers), [Elks](https://en.wikipedia.org/wiki/Edmonton_Elks), [Oil Kings](https://en.wikipedia.org/wiki/Edmonton_Oil_Kings) and [Stingers](https://en.wikipedia.org/wiki/Edmonton_Stingers) (secondary). Unlike Tampa Bay, no team uses a wider regional name, so the display name doesn't need to change. |
| Short form | **Edmonton** (no shorter form needed); league feeds use **EDM** | The NHL schedule API keys the Oilers as [`EDM`](https://api-web.nhle.com/v1/club-schedule-season/EDM/now) (official). ESPN's NHL feed gives abbreviation [`EDM`](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/edm). ESPN's CFL feed gives the Elks [`EES`](https://site.api.espn.com/apis/site/v2/sports/football/cfl/teams/81), so league abbreviations aren't consistent. |
| Three-letter code | **YEG** (airport code; recommended) vs **EDM** (league feeds) | **Second pass, sourced:** Edmonton International Airport added "YEG" to its official name, and its spokesperson said "the Edmonton Metro Region has used YEG as an identifier for many years" ([CTV News](https://edmonton.ctvnews.ca/eia-rebranding-to-add-yeg-to-official-name-1.6047110)). Local use: the #yeg hashtag dates to 2008–09, with "nearly 1 million tweets posted by Edmontonians" using it in 2012, and it appears in company names such as "YEG Live" ([Mastermaq blog, Jun 20, 2013](https://blog.mastermaq.ca/2013/06/20/yeg-turns-five/), secondary). The spokesperson called YEG a *regional* identifier, which fits the EMRB coverage area. No team was found using YEG in its name or branding (one search). EDM stays the feed abbreviation (NHL/ESPN above). |
| Covered area | City of Edmonton **plus** the Edmonton Metropolitan Region Board (EMRB) footprint the venue answer recommends | The venue answer scopes the region to the [EMRB's 13 municipalities](https://edmonton.ca/city_government/city_organization/metropolitan-region-board). |
| St. Albert | **In.** It's an EMRB member and has a venue row (A12, Servus Credit Union Place). | [EMRB list](https://edmonton.ca/city_government/city_organization/metropolitan-region-board) |
| Sherwood Park | **In.** It's in Strathcona County, an EMRB member, and has a venue row (A14). | [EMRB list](https://edmonton.ca/city_government/city_organization/metropolitan-region-board); [Strathcona County](https://www.strathcona.ca/recreation-events/recreation-centres/sherwood-park-arena-and-sports-centre/) |
| Other covered rows | Spruce Grove (A16) and Leduc County (A04, A18). Enoch Cree Nation (A19) is an edge case, labelled separately. | Venue answer §1 |

---

## 2. Build-rule notes (for whoever turns this into app data)

- **IDs must be unique across all cities.** `giants`, `jets`, `rangers`, `kings` and `cardinals` are already taken, so add a city prefix. For Edmonton, prefix every team and venue ID, for example `edm-oilers`, `edm-elks`, `edm-oil-kings` and `edm-stingers`. `oil-kings` is close to the taken `kings`, and `stingers` and `elks` haven't been checked against other cities.
- **No per-city opponents file.** Opponent draws go into `expectedDrawIndex`, as for every other city.
- **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list. From the venue answer, that includes A01 concert, A18, A19 and the A06 5,000 vs 6,000 conflict.
- **Car shares:** wire measured shares; wire sourced estimates marked as estimated; leave everything else on the city default. The city-type answer wasn't provided, so no car shares are restated here.
- **Feeds don't mark relocated home games.** The NHL feed's `neutralSite` flag was `false` for every Oilers game checked, and the 2023 Heritage Classic (a home game at Commonwealth) wasn't in a checked window. Set each game's venue from the source's venue field, never from the team's home row.
- **The Ticketmaster EXPO Centre ID covers the complex.** ID 139303 is "Edmonton EXPO Centre" with no hall named. Events in the Hall D arena (A07) will probably arrive under that ID, so don't create a second ID for A07 without evidence.

---

## 3. Ticketmaster venue IDs

**How verified:** an ID counts as **verified** when its Ticketmaster venue page loaded and showed the matching venue name in Edmonton, or when the venue's official site links to that Ticketmaster venue URL. The fetched Ticketmaster pages listed events from late 2025 and early 2026, so their content may be cached. The ID-to-venue match still holds.

**Concert rooms** (rows the venue answer shows hosting concerts or touring shows): A01, A02, A03, A05, A06, A07, A08, A11, A13, A15 and A19. Rows A12 and A14 are mainly hockey rinks. The other rows are sports, racing or closed venues; they're listed for completeness.

| Venue row ID | Room | Concert room? | Ticketmaster venue ID | Verification link (or "not verified") |
|---|---|---|---|---|
| A01 | Commonwealth Stadium | Yes | **139309** | **Verified:** the [Ticketmaster.ca venue page](https://www.ticketmaster.ca/commonwealth-stadium-stade-du-commonwealth-tickets-edmonton/venue/139309) loads as "Commonwealth Stadium / Stade du Commonwealth", Edmonton, AB |
| A02 | Rogers Place | Yes | **140602** | **Verified:** the [official Rogers Place site](https://www.rogersplace.com) links to [ticketmaster.ca/Rogers-Place-tickets-Edmonton/venue/140602](https://www.ticketmaster.ca/Rogers-Place-tickets-Edmonton/venue/140602), and its [ticketing page](https://www.rogersplace.com/arena-guide/ticketing-and-sales/) names Ticketmaster.ca as "our only authorized ticket partner". A direct fetch of the Ticketmaster page was rate-limited (429). |
| A03 | RE/MAX Field | Occasional | 139314 (from a 2016 citation) | **Not verified.** The [Ticketmaster venue/139314 page](https://www.ticketmaster.ca/venue/139314) returned a fetch error, and the search found no current Ticketmaster page. The venue answer flagged this ID as stale ("Telus Field"). A second-pass search ("ticketmaster.ca RE/MAX Field Edmonton venue tickets") returned only resale sites (Vivid Seats venue 23530, TickPick). |
| A04 | RAD Torque Raceway | No | — | **Not verified** (not searched before the search limit was reached) |
| A05 | Edmonton EXPO Centre (halls) | Yes | **139303** | **Verified:** the [Ticketmaster.ca venue page](https://www.ticketmaster.ca/edmonton-expo-centre-billets-edmonton/venue/139303) loads as "Edmonton EXPO Centre", Edmonton, Alberta (also indexed at [ticketmaster.com/venue/139303](https://www.ticketmaster.com/venue/139303?page=1)) |
| A07 | EXPO Centre Arena (Hall D) | Yes | No separate ID found | **Not verified.** Probably sold under A05's 139303 (see build notes); no Hall D-specific Ticketmaster page was found. |
| A06 | Clarke Stadium | Yes | — | **Not verified (Ticketmaster).** The search found no Ticketmaster page. Second pass: the [AXS 102233 page](https://www.axs.com/sg/venues/102233/clarke-stadium-edmonton-tickets) loads as "Clarke Stadium, Edmonton". **Caution:** its only listed event is "Winnipeg Blue Bombers at Edmonton Elks", Oct 16, 2026. That game is at **Commonwealth (A01)** per the [2026 Elks season page](https://en.wikipedia.org/wiki/2026_Edmonton_Elks_season) and a [TickPick listing](https://www.tickpick.com/buy-edmonton-elks-vs-winnipeg-blue-bombers-tickets-commonwealth-stadium-edmonton-10-16-26-7pm/7616124/), and the Elks sell through Ticketmaster ([goelks.com](https://www.goelks.com/mobileticketing/)). So the AXS listing looks like a resale or mapping error; don't use AXS 102233 to place events. |
| A08 | Edmonton Convention Centre | Yes | **139305** | **Verified:** the [Ticketmaster.ca venue page](https://www.ticketmaster.ca/edmonton-convention-centre-boletos-edmonton/venue/139305) loads as "Edmonton Convention Centre", Edmonton, Alberta. The page doesn't say which hall. |
| A09 | Foote Field | No | — | **Not verified** (not searched; bearsandpandas.ca rate-limited) |
| A10 | Clare Drake Arena | No | **139652** | **Verified (second pass):** the [Ticketmaster.ca venue page](https://www.ticketmaster.ca/clare-drake-arena-billets-edmonton/venue/139652) loads as "Clare Drake Arena" (University of Alberta), with 2025–26 Golden Bears and Pandas games. The room is closed for renovation through about March 2027 (see §5). |
| A11 | Northern Alberta Jubilee Auditorium | Yes | **139306** | **Verified:** the [Ticketmaster.ca venue page](https://www.ticketmaster.ca/northern-alberta-jubilee-auditorium-billets-edmonton/venue/139306) loads as "Northern Alberta Jubilee Auditorium", Edmonton, Alberta |
| A12 | Servus Credit Union Place (St. Albert) | Mainly a rink | — | **Not verified.** A search for "ticketmaster.ca Servus Place St. Albert venue" returned no Ticketmaster page; the top results were Wikipedia and City of St. Albert pages. |
| A13 | Francis Winspear Centre for Music | Yes | None (not a Ticketmaster room) | **No Ticketmaster ID; other ticketers verified (second pass).** The [official site](https://www.winspearcentre.com/) sells through its own box office ([winspearcentre.com/tickets](https://www.winspearcentre.com/tickets/), my.winspearcentre.com), with no Ticketmaster or AXS links. The [AXS venue 125355 page](https://www.axs.com/venues/125355/winspear-centre-edmonton-tickets) loads as "Winspear Centre, Edmonton" with 58 upcoming events (e.g., Oct 16 and 17, 2026). A second Ticketmaster search found no page. Per the brief's rule, A13 ships with no concerts unless an AXS or own-box-office source is accepted. |
| A14 | Sherwood Park Arena (Randy Rosen Rink) | Mainly a rink | — | **Not verified** (not searched) |
| A15 | Midway Music Hall | Yes | — | **Not verified (Ticketmaster); AXS verified (second pass).** The [AXS venue 130239 page](https://www.axs.com/venues/130239/midway-music-hall-edmonton-tickets) loads as "Midway Music Hall, Edmonton" with 33 upcoming events (e.g., Oct 16 and 17, 2026). A second Ticketmaster search found only Songkick listings. The [official shows page](https://www.midwaymusichall.com/shows) carries a Live Nation copyright but didn't load ticket links. |
| A16 | Thompson Family Arena, Heavy Metal Place | No | — | **Not verified** (not searched) |
| A17 | Downtown Community Arena | No | — | **Not verified** (not searched) |
| A18 | Century Mile Racetrack and Casino | No | — | **Not verified** (not searched) |
| A19 | River Cree Resort & Casino (concerts) | Yes | — | **Not verified.** The search found only aggregator listings ([Songkick 35636](https://www.songkick.com/venues/35636-river-cree-resort-and-casino)) and no Ticketmaster page. A second-pass search ("ticketmaster.ca River Cree Resort Casino Enoch venue") again returned only resale and aggregator sites. |
| A20 | Coliseum (closed) | — | — | Not applicable: closed |

**Counts (second pass):** 6 Ticketmaster IDs are now verified: A01, A02, A05, A08, A11, and **A10 (139652, new)**. The second pass also verified two AXS venue pages: A13 Winspear (125355; the venue also runs its own box office) and A15 Midway (130239). A06's AXS page (102233) is unreliable (see row). Ticketmaster is still unverified for the concert rooms A03, A06, A07, A13, A15 and A19.

**Counts (first pass):** 5 IDs verified (A01, A02, A05, A08, A11). Among concert rooms, 6 are not verified (A03, A06, A07, A13, A15, A19). A07 probably shares A05's ID. A13 and A15 may be sold mainly through AXS rather than Ticketmaster; this wasn't confirmed. Under the brief's rule, **A03, A06, A13, A15 and A19 ship with no concerts** until an ID is confirmed.

---

## 4. Teams: league, home venue, free schedule feed and colours

A "free feed" here means a keyless public endpoint (ESPN site API, NHL web API, a public calendar file) or a public league schedule page. Brand colours come from official team or league brand sources where I found one. **Neither pass found any**, so every hex value below is secondary or a gap.

| Team | League | Home venue row ID | Free feed and ID (or "no feed") | Primary hex | Secondary hex | Colour source |
|---|---|---|---|---|---|---|
| Edmonton Oilers | NHL | A02 | **NHL web API**, club code `EDM`: [club-schedule-season/EDM/now](https://api-web.nhle.com/v1/club-schedule-season/EDM/now) returns the 2026–27 season with venue names and a `neutralSite` flag (official). **ESPN** NHL team id **6**, ESPN venue id 5282 ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/edm)). | #041E42 (secondary) | #FF4C00 (secondary) | [teamcolorcodes.com](https://teamcolorcodes.com/edmonton-oilers-color-codes/): **secondary**; it says it isn't affiliated with any team. Second pass: ESPN's feed `color` is `00205b`, with no `alternateColor` field ([ESPN](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/edm), secondary). [brandcolorcode.com](https://www.brandcolorcode.com/edmonton-oilers) gives navy #00205B and an orange-red #D14520 (secondary; it names no source for the hex values). **Official brand hex: still a gap.** Second-pass searches for an Oilers or OEG brand or style guide found only third-party colour sites. |
| Edmonton Elks | CFL | A01 (A06 for one preseason game, May 29, 2026) | **ESPN** CFL team id **81**, abbreviation `EES` ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/football/cfl/teams/81)). Second pass: the ESPN schedule endpoint for team 81 [`/teams/81/schedule`](https://site.api.espn.com/apis/site/v2/sports/football/cfl/teams/81/schedule) returned **no events** (it defaulted to the 2023 off-season), so it's **not usable** without more work. Adding `?season=2026` didn't help: it still returned the 2023 off-season with no events ([link](https://site.api.espn.com/apis/site/v2/sports/football/cfl/teams/81/schedule?season=2026)). The ESPN CFL scoreboard for the Elks' Oct 16, 2026 home date also returned no events and a 2023 calendar ([link](https://site.api.espn.com/apis/site/v2/sports/football/cfl/scoreboard?dates=20261016)). **ESPN's CFL data looks frozen at 2023, so treat it as no working ESPN feed.** The official CFL API at api.cfl.ca needs an API key ([public-api.org listing](https://public-api.org/api/1179/canadian-football-league-cfl), secondary), so it isn't a free keyless feed. **Result: no free machine feed verified for the Elks.** The fallback is the CFL/Elks schedule web pages; the Elks point to CFL.ca for the complete schedule ([Elks/CFL release](https://www.goelks.com/?p=423055)). | gap | gap | Colour names only: green, gold and white ([Wikipedia](https://en.wikipedia.org/wiki/Edmonton_Elks), secondary). Second pass: the ESPN CFL team record has no `color` field ([ESPN](https://site.api.espn.com/apis/site/v2/sports/football/cfl/teams/81)). [logotyp.us](https://logotyp.us/logo/edmonton-elks/) gives one logo colour, #FDB61C (secondary, unsourced; one colour only, so not wired). The [teamcolorcodes Elks page](https://teamcolorcodes.com/edmonton-elks-color-codes/) returned a fetch error on Oct 14. **Official hex: gap.** |
| Edmonton Oil Kings | WHL | A02 | **League site page** (CHL/WHL): [chl.ca/whl-oilkings/schedule/228/295](https://chl.ca/whl-oilkings/schedule/228/295/?view=grid). Team ID **228**, season ID 295 = 2026–27 regular season. The [team page](https://chl.ca/whl-oilkings/) shows no calendar (ICS) or API link. ESPN coverage not checked. | #00549B (secondary, **unconfirmed**) | #C52034 (secondary, **unconfirmed**) | Colour names: red, royal blue, gold and white ([Wikipedia](https://en.wikipedia.org/wiki/Edmonton_Oil_Kings), secondary). Second pass: [teamcolorcodes.com](https://teamcolorcodes.com/edmonton-oil-kings-color-codes/) lists blue #00549B, red #C52034, yellow #FFC42A, green #048743 and white (secondary; no source given). Its green doesn't match any colour name Wikipedia gives, so treat the whole set as unconfirmed. The primary/secondary order above is my choice from the Wikipedia names, not stated by the source. **Official hex: gap.** |
| Edmonton Stingers | CEBL | A07 | **League-wide public calendar file** linked from [cebl.ca/games](https://www.cebl.ca/games): [CEBL Google Calendar ICS](https://calendar.google.com/calendar/ical/cebl.ca_kcit876jdf791sora73e69jbfs%40group.calendar.google.com/public/basic.ics). It has no team filter, so Edmonton games must be picked out by name. Team stats page: [cebl.ca/stats/edmonton](https://www.cebl.ca/stats/edmonton). The team site [thestingers.ca](https://www.thestingers.ca/) refused automated fetching (robots rules). | gap | gap | Colour names: yellow, blue and white ([Wikipedia](https://en.wikipedia.org/wiki/Edmonton_Stingers), secondary) |
| CPL club | CPL | — | Not applicable: there is no Edmonton CPL club. FC Edmonton folded for 2023 ([CBC](https://www.cbc.ca/lite/story/1.7379029), cited in the venue answer). | — | — | — |
| U of A Golden Bears & Pandas | U Sports (Canada West) | A10 (hockey; **but 2026–27 home games are at Silent Ice Center, Nisku**, see §5); A09 (football, soccer) | **Team site schedule pages (Sidearm), second pass:** men's hockey [bearsandpandas.ca/sports/mens-ice-hockey/schedule](https://bearsandpandas.ca/sports/mens-ice-hockey/schedule), with a [grid view](https://bearsandpandas.ca/sports/mens-ice-hockey/schedule/2026-27?grid=true) that names the venue for every game and a [print view](https://bearsandpandas.ca/sports/mens-ice-hockey/schedule?print=true). The page also links a text export, [schedule_txt.ashx?schedule=408](https://bearsandpandas.ca/services/schedule_txt.ashx?schedule=408) (schedule ID **408** = men's hockey 2026–27), but that file is disallowed by robots rules for automated fetching, so its contents weren't checked. No ICS link appears on the page. **League page:** Canada West [men's](https://www.canadawest.org/sports/mice/2026-27/schedule) and [women's](https://www.canadawest.org/sports/wice/2026-27/schedule) hockey schedules, linked from the [Canada West release](https://canada-west.prezly.com/canada-west-unveils26-27-hockey-slate). The canadawest.org page returned a fetch error, so it isn't verified. Pandas hockey and football schedule IDs: **gap**. ESPN: no U Sports coverage found. | #275D38 (secondary) | #FECB00 (secondary) | Second pass: [brandcolorcode.com](https://www.brandcolorcode.com/alberta-golden-bears-and-pandas) gives green #275D38, yellow #FECB00 and white (secondary). It cites the ualberta.ca visual identity page as its source. The official [U of A brand toolkit](https://ualberta.ca/toolkit) names the colours "Green+Gold" but shows no hex, and says the visual identity section "will be updated soon". **Official hex: gap.** |
| MacEwan Griffins (hockey) | U Sports (Canada West) | A17 | **League page:** the same [Canada West men's hockey schedule](https://www.canadawest.org/sports/mice/2026-27/schedule) (fetch error, not verified). **Team site:** [macewangriffins.ca](https://macewangriffins.ca/sports/mice/2026-27/releases/20260625imd2r6) (PrestoSports-style URLs). Its 2026–27 schedule release confirms home games at the Downtown Community Arena, but the fetched text didn't include the schedule URL or any calendar link. Feed ID: **gap**. | #9A253B (secondary) | #000000 (secondary) | Second pass: [brandcolorcode.com](https://www.brandcolorcode.com/macewan-griffins) lists maroon #9A253B, black, beige #E9D8BE, browns, yellow #FFD727 and red #C8586B (secondary; it doesn't say whether the hex values are official). The Griffins rebrand was announced May 29, 2025 ([MacEwan news release PDF](https://www.macewan.ca/c/documents/news_release_%20athletics_logo.pdf)), and that release gives no colour values. **Official hex: gap.** |
| Edmonton Riverhawks | WCL | A03 | **League stats site, second pass:** the WCL links its schedule at [wclstats.com/sports/bsb/2026/schedule](https://wclstats.com/sports/bsb/2026/schedule) (HTML, PrestoSports-style path) and a [2026 schedule PDF](https://westcoastleague.com/wp-content/uploads/2026/01/2026-WCL-Schedule-Jan-8.pdf) ([WCL](https://westcoastleague.com/west-coast-league-expands-to-edmonton/)). wclstats.com was **blocked for fetching** (permission prompt not answered), so the team ID and any calendar export weren't checked. **Team page:** [riverhawksbaseball.com/schedule/schedule](https://riverhawksbaseball.com/schedule/schedule) ("2026 Schedule", linked from the [About page](https://riverhawksbaseball.com/team/about-us)); no ICS link on the About page. | gap | gap | Second pass: colour names are navy, Carolina blue and Vegas gold ([Wikipedia](https://en.wikipedia.org/wiki/Edmonton_Riverhawks), secondary). The [team About page](https://riverhawksbaseball.com/team/about-us) gives no colour values. **Hex: gap.** |
| Edmonton Collegiate Hawks | CCBC | A03 | **No feed verified** (not checked) | gap | gap | gap |
| Spruce Grove Saints | BCHL | A16 (from Sept 19, 2025) | **League schedule page (HockeyTech-style), second pass:** BCHL team ID **89**. The Saints' 2025–26 schedule release links [bchl.ca/stats/schedule/89/66/all-months/homeaway?league=1](https://bchl.ca/stats/schedule/89/66/all-months/homeaway?league=1) (season 66 = 2025–26) and [sgsaints.ca/stats/schedule/89/72](https://www.sgsaints.ca/stats/schedule/89/72) ([Saints](https://www.sgsaints.ca/news-bchl-announces-regular-season-schedule-for-2025-26-season-new-division-and-playoff-alignment)). Team ID 89 also matches the [BCHL roster URL](https://bchl.ca/stats/roster/89) ([BCHL](https://bchl.ca/2026-rogers-bchl-playoffs-recap-april-12)). bchl.ca stats pages were **blocked for fetching** (permission prompt not answered), so the 2026–27 season ID and any calendar export weren't checked. | gap | gap | Second pass: colour names are navy blue, baby blue, white and gold ([Wikipedia](https://en.wikipedia.org/wiki/Spruce_Grove_Saints), secondary). A search for hex values found nothing for this team. **Hex: gap.** |
| Sherwood Park Crusaders | BCHL | A14 | **League schedule page, second pass:** BCHL team ID **88**, from the [BCHL roster URL](https://bchl.ca/stats/roster/88) and box score [game-center/14234](https://bchl.ca/stats/game-center/14234) ([BCHL playoffs recap](https://bchl.ca/2026-rogers-bchl-playoffs-recap-april-12)). League schedule: [bchl.ca/stats/schedule/all-teams/](https://bchl.ca/stats/schedule/all-teams/). By analogy with the Saints' URL, the team URL would be `bchl.ca/stats/schedule/88/<season>/…`; this isn't verified, because bchl.ca was blocked for fetching. | gap | gap | Second pass: colour names are green and white ([Wikipedia](https://en.wikipedia.org/wiki/Sherwood_Park_Crusaders), secondary). The [team schedule release](https://www.spcrusaders.com/sherwood-park-crusaders-announce-2025-2026-regular-season-schedule) gives no colours. **Hex: gap.** |
| Energy City Cactus Rats | WCBL | Unresolved (Spruce Grove ballpark unfinished per venue answer) | **No feed verified** (not checked) | gap | gap | gap |
| Edmonton Huskies (**added**; possibly missed by the venue answer's team list) | CJFL (Prairie Football Conference) | **No venue row.** The 2026 home opener (Aug 8 vs Calgary Colts) was at **J.P. Bowl**, not A06 ([3DownNation](https://3downnation.com/2026/03/17/cjfl-prairie-conference-unveils-2026-schedule)) | **League PDF only:** [PFC 2026 schedule PDF](https://cdn1.sportngin.com/attachments/document/8fd3-3545729/PFC-Schedule-2026.pdf) (via 3DownNation). No machine feed found. | gap | gap | gap |
| Edmonton Wildcats (**added**, second pass) | CJFL (PFC) | **No venue row.** The 2026 home opener (Aug 9 vs Regina Thunder) was at **Emerald Hills Park** ([3DownNation](https://3downnation.com/2026/03/17/cjfl-prairie-conference-unveils-2026-schedule)) | League PDF only (same as Huskies) | gap | gap | gap |

**Feeds (updated in second pass):**
- **Machine-readable free feeds:** Oilers (NHL API and ESPN) and Stingers (league ICS file).
- **League or team schedule pages with an ID:** Oil Kings (CHL/WHL team 228), Spruce Grove Saints (BCHL team 89), Sherwood Park Crusaders (BCHL team 88; schedule URL inferred, not fetched), Golden Bears men's hockey (Sidearm schedule ID 408) and Riverhawks (WCL stats site; team ID not checked).
- **No usable feed:** the Elks. ESPN CFL data is stuck at 2023, and the official CFL API needs a key.
- **No feed or ID verified:** MacEwan Griffins and Pandas/football (Canada West page failed to fetch), Collegiate Hawks (CCBC), Cactus Rats (WCBL), Huskies and Wildcats (CJFL, PDF only). Collegiate Hawks and Cactus Rats weren't searched.

**Colours (updated in second pass):** **0 official** hex sets found. The second pass searched for Oilers/OEG, Elks, U of A and MacEwan brand guides. U of A's official toolkit names "Green+Gold" but gives no hex.
- **Secondary hex pairs, 4 teams:** Oilers (teamcolorcodes; conflicts with ESPN and brandcolorcode), Oil Kings (teamcolorcodes; conflicts with Wikipedia colour names), Golden Bears & Pandas (brandcolorcode, which cites ualberta.ca) and MacEwan Griffins (brandcolorcode).
- **Colour names only:** Elks, Stingers, Riverhawks, Saints and Crusaders.
- **Nothing found:** Collegiate Hawks, Cactus Rats, Huskies and Wildcats.

---

## 5. Games away from the home venue (2025 onward)

| Team | Date | Game | Actual site (row ID) | Listed home team | Attendance | Source |
|---|---|---|---|---|---|---|
| Edmonton Elks | Fri, May 29, 2026 | Preseason vs Calgary Stampeders | **Clarke Stadium (A06)**, moved from Commonwealth (A01) because of the World Cup exhibition held there (Canada vs Uzbekistan, June 1, 2026) | Elks | 3,771 | [Wikipedia, 2026 Elks season](https://en.wikipedia.org/wiki/2026_Edmonton_Elks_season) (secondary); [Elks announcement](https://www.goelks.com/2026/02/19/elks-announce-night-at-the-knothole/) (official, from venue answer) |
| Edmonton Elks | Sat, July 4, 2026 | Elks at BC Lions | Apple Bowl, Kelowna (outside Edmonton) | **BC Lions** (Elks away) | not captured | [Wikipedia, 2026 Elks season](https://en.wikipedia.org/wiki/2026_Edmonton_Elks_season). Listed so it isn't placed in Edmonton. |
| Edmonton Oilers | 2025–26 season | None found | — | — | — | [Wikipedia, 2025–26 Oilers season](https://en.wikipedia.org/wiki/2025–26_Edmonton_Oilers_season) lists no neutral, outdoor or international games. The [NHL API season file](https://api-web.nhle.com/v1/club-schedule-season/EDM/20252026) shows `neutralSite: false` for every game it returned (only through Dec 13, 2025). |
| Edmonton Oilers | 2026–27 regular season (Oct 2026–Apr 10, 2027) | None found | — | — | — | NHL API ([season](https://api-web.nhle.com/v1/club-schedule-season/EDM/now) through Dec 12, 2026; months [Dec](https://api-web.nhle.com/v1/club-schedule/EDM/month/2026-12), [Jan](https://api-web.nhle.com/v1/club-schedule/EDM/month/2027-01), [Feb](https://api-web.nhle.com/v1/club-schedule/EDM/month/2027-02), [Mar](https://api-web.nhle.com/v1/club-schedule/EDM/month/2027-03), [Apr](https://api-web.nhle.com/v1/club-schedule/EDM/month/2027-04)): every Oilers home game is at Rogers Place, and `neutralSite` is false throughout. |
| Edmonton Oil Kings | 2026–27, through Nov 1, 2026 | None found | — | — | — | [CHL schedule](https://chl.ca/whl-oilkings/schedule/228/295/?view=grid): every listed home game is at Rogers Place. Later dates and the 2025–26 season weren't checked. |
| Edmonton Stingers | 2025 season | None found | — | — | — | Second pass: the 2025 schedule had 12 home games at the Edmonton EXPO Centre, opening May 11, 2025 vs Calgary. The article names no other venue ([CTV](https://edmonton.ctvnews.ca/edmonton-stingers-announce-expanded-2025-schedule-1.7135016)). The [2025 CEBL season page](https://en.wikipedia.org/wiki/2025_CEBL_season) names no Edmonton game at a non-home venue (secondary). The CEBL calendar file wasn't parsed, so this isn't exhaustive. |
| Edmonton Stingers | 2026 season | None found | — | — | — | The [2026 CEBL season page](https://en.wikipedia.org/wiki/2026_CEBL_season) lists one neutral-site game, Vancouver vs Saskatoon at Prospera Place, Kelowna, June 6, 2026, which didn't involve Edmonton. No Edmonton neutral-site game is listed (secondary). |
| **Golden Bears & Pandas hockey** | **Whole 2026–27 season** (17 Golden Bears home dates, Oct 3, 2026–Feb 20, 2027) | All Canada West home games | **Silent Ice Center (Hatch Arena), Nisku, AB.** No venue row exists; it's south of Edmonton. The second pass didn't verify its municipality or capacity. | U of A | gap | [Bears & Pandas grid schedule](https://bearsandpandas.ca/sports/mens-ice-hockey/schedule/2026-27?grid=true) (official) lists every home game at Hatch Arena, Nisku. The [U of A announcement, Oct 22, 2025](https://bearsandpandas.ca/news/2025/10/22/golden-bears-and-pandas-hockey-to-play-2026-27-season-at-silent-ice-center.aspx) says the move is temporary, for Clare Drake Arena (A10) maintenance. A $10.9M slab, sanitary-line and ice-plant project is expected to finish in March 2027 ([Daily Hive, Oct 8, 2026](https://dailyhive.com/edmonton/clare-drake-arena-renovation-university-alberta-edmonton)). **Don't place 2026–27 U of A hockey at A10.** The Pandas' dates weren't listed in this pass. |
| Spruce Grove Saints | Oct 15 & 16, 2025 | 2025 BCHL Showcase: at Cowichan Valley (Oct 15); vs Chilliwack (Oct 16) | Chilliwack Coliseum (Oct 15); Abbotsford Centre (Oct 16), BC | Cowichan Valley / Saints | gap | [BCHL 2025 Showcase](https://bchl.ca/2025-bchl-showcase) (official) |
| Sherwood Park Crusaders | Oct 14 & 16, 2025 | 2025 BCHL Showcase: vs Prince George (Oct 14); at Langley (Oct 16) | Abbotsford Centre, BC (both) | Crusaders / Langley | gap | [BCHL 2025 Showcase](https://bchl.ca/2025-bchl-showcase) (official) |
| Spruce Grove Saints | Oct 12 & 13, 2026 | 2026 BCHL Showcase: vs Alberni Valley (Oct 12, 7 p.m.); at Cowichan Valley (Oct 13, 5:45 p.m.) | Silent Ice Center (Oct 12); Silent Ice – Hesco Arena (Oct 13), **Nisku, AB** | Saints / Cowichan Valley | gap | [BCHL, Aug 26, 2026](https://bchl.ca/bchl-announces-2026-showcase-event-in-nisku-alberta) (official). Regular-season games; all 20 BCHL teams played two each, Oct 11–14, 2026. |
| Sherwood Park Crusaders | Oct 12 & 13, 2026 | 2026 BCHL Showcase: vs Victoria (Oct 12, 4 p.m.); at Surrey (Oct 13, 7 p.m.) | Silent Ice Center, **Nisku, AB** | Crusaders / Surrey | gap | [BCHL, Aug 26, 2026](https://bchl.ca/bchl-announces-2026-showcase-event-in-nisku-alberta) (official) |
| Spruce Grove (host) | Jan 16–18, 2026 | BCHL All-Star weekend (event, not a Saints home game) | Thompson Family Arena, Heavy Metal Place (A16) | BCHL | gap | [OneFM, Oct 24, 2025](https://www.onefm.ca/parkland/news/parkland-news/spruce-grove-to-host-2026-bchl-all-star-weekend/). That article calls A16 a "1,665-seat arena", a third figure beside the venue answer's 1,400 and 1,700. |
| Riverhawks, MacEwan Griffins, Collegiate Hawks, Cactus Rats, Huskies, Wildcats | 2025– | **Gap** | — | — | — | Not checked in either pass. The MacEwan 2026–27 hockey release confirms DCA (A17) as home and names no other site ([MacEwan](https://macewangriffins.ca/sports/mice/2026-27/releases/20260625imd2r6)). |

**Silent Ice Center, Nisku, is a recurring off-row site (second pass):** it hosts U of A hockey for all of 2026–27, the 2026 BCHL Showcase, and in 2024 it was the listed site for a possible Crusaders playoff Game 6 (May 24, 2024; [Brooks Bandits](https://www.brooksbandits.net/schedule-released-for-bchl-alberta-final-featuring-bandits-and-crusaders)). Consider adding a venue row for it. Capacity and municipality weren't verified, so it goes on the gaps list.

**Context (before 2025, outside the requested window):** the Oilers hosted the **2023 Heritage Classic** against Calgary at **Commonwealth Stadium (A01)** on **Oct 29, 2023**, with 55,411 attending ([Wikipedia](https://en.wikipedia.org/wiki/2023_Heritage_Classic), secondary, no citation for attendance). That's the precedent for an Oilers home game held at A01.

**Calendar note:** during the 2027 World Juniors at Rogers Place (Dec 26, 2026–Jan 5, 2027, per the venue answer), the Oilers are on the road from Dec 27 to Jan 5. Their next home game is Jan 7, 2027 ([NHL API Dec](https://api-web.nhle.com/v1/club-schedule/EDM/month/2026-12); [Jan](https://api-web.nhle.com/v1/club-schedule/EDM/month/2027-01)), so the two schedules don't clash.

**Upcoming Elks playoff game, not yet confirmed:** the 2026 season page lists a possible home playoff game at Commonwealth on Oct 31 or Nov 7, opponent TBD ([Wikipedia](https://en.wikipedia.org/wiki/2026_Edmonton_Elks_season)). It isn't confirmed as of this date.

---

## 6. Postseason and past crowds, by team

**Range covered:** the 2023–24 through 2025–26 NHL seasons, the 2023 through 2026 CFL seasons (2026 through Sept 26), and 2022–23 through 2025–26 WHL playoff results. Postseason and regular-season figures are kept apart. Attendance is the **announced** figure as listed on Wikipedia season pages (**secondary**). I didn't cross-check it against league box scores in this pass, and the per-game figures were read off those pages by an automated page reader. Treat any outlier as unconfirmed until checked against the league box score.

### 6.1 Edmonton Oilers (NHL), Rogers Place (A02)

**Postseason home games**

| Season | Round / game | Date | Opponent | Announced attendance | Source |
|---|---|---|---|---|---|
| 2023–24 | R1 G1 | Apr 22, 2024 | Los Angeles | 18,347 | [Wikipedia 2023–24](https://en.wikipedia.org/wiki/2023–24_Edmonton_Oilers_season) |
| 2023–24 | R1 G2 | Apr 24, 2024 | Los Angeles | 18,347 | same |
| 2023–24 | R1 G5 | May 1, 2024 | Los Angeles | 18,347 | same |
| 2023–24 | R2 G3 | May 12, 2024 | Vancouver | 18,347 | same |
| 2023–24 | R2 G4 | May 14, 2024 | Vancouver | 18,347 | same |
| 2023–24 | R2 G6 | May 18, 2024 | Vancouver | 18,347 | same |
| 2023–24 | R3 G3 | May 27, 2024 | Dallas | 18,347 | same |
| 2023–24 | R3 G4 | May 29, 2024 | Dallas | 18,347 | same |
| 2023–24 | R3 G6 | Jun 2, 2024 | Dallas | 18,347 | same |
| 2023–24 | Final G3 | Jun 13, 2024 | Florida | 18,347 | same |
| 2023–24 | Final G4 | Jun 15, 2024 | Florida | 18,347 | same |
| 2023–24 | Final G6 | Jun 21, 2024 | Florida | 18,347 | same |
| 2024–25 | R1 G3 | Apr 25, 2025 | Los Angeles | 18,347 | [Wikipedia 2024–25](https://en.wikipedia.org/wiki/2024–25_Edmonton_Oilers_season) |
| 2024–25 | R1 G4 | Apr 27, 2025 | Los Angeles | 18,347 | same |
| 2024–25 | R1 G6 | May 1, 2025 | Los Angeles | 18,347 | same |
| 2024–25 | R2 G3 | May 10, 2025 | Vegas | 18,347 | same |
| 2024–25 | R2 G4 | May 12, 2025 | Vegas | 18,347 | same |
| 2024–25 | R3 G3 | May 25, 2025 | Dallas | 18,347 | same |
| 2024–25 | R3 G4 | May 27, 2025 | Dallas | 18,347 | same |
| 2024–25 | Final G1 | Jun 4, 2025 | Florida | 18,347 | same |
| 2024–25 | Final G2 | Jun 6, 2025 | Florida | 18,347 | same |
| 2024–25 | Final G5 | Jun 14, 2025 | Florida | 18,347 | same |
| 2025–26 | R1 G1 | Apr 20, 2026 | Anaheim | 18,347 | [Wikipedia 2025–26](https://en.wikipedia.org/wiki/2025–26_Edmonton_Oilers_season) |
| 2025–26 | R1 G2 | Apr 22, 2026 | Anaheim | 18,347 | same |
| 2025–26 | R1 G5 | Apr 28, 2026 | Anaheim | 18,347 | same |

Total: 12 + 10 + 3 = 25 postseason home games. Each is listed at 18,347, the widely reported hockey capacity (the official Rogers Place figure is 18,500; see the venue answer, A2).

**Regular-season crowds**

| Season | Home games | Announced crowd | Notes | Source |
|---|---|---|---|---|
| 2023–24 | gap | Average **18,267** (as given; the page doesn't say whether it is home-only) | The page doesn't say whether this average includes the Oct 29, 2023 Heritage Classic at **A01** (55,411). Log the Heritage Classic against A01, not A02. | [Wikipedia 2023–24](https://en.wikipedia.org/wiki/2023–24_Edmonton_Oilers_season); [2023 Heritage Classic](https://en.wikipedia.org/wiki/2023_Heritage_Classic) |
| 2024–25 | gap | Average **18,347** | No total given | [Wikipedia 2024–25](https://en.wikipedia.org/wiki/2024–25_Edmonton_Oilers_season) |
| 2025–26 | 41 | Per game: 36 at 18,347; others 18,247 (Nov 10), 19,173 (Dec 2), 17,496 (Dec 4), 17,622 (Dec 9) and 18,144 (Jan 15). Range 17,496–19,173. **Computed** mean 18,321. | 19,173 is above the listed 18,347 and needs checking against the NHL box score | [Wikipedia 2025–26](https://en.wikipedia.org/wiki/2025–26_Edmonton_Oilers_season) |

### 6.2 Edmonton Elks (CFL), Commonwealth Stadium (A01)

**Postseason:** no home playoff games from 2023 to 2025. The Elks didn't qualify in [2023](https://en.wikipedia.org/wiki/2023_Edmonton_Elks_season), [2024](https://en.wikipedia.org/wiki/2024_Edmonton_Elks_season) or [2025](https://en.wikipedia.org/wiki/2025_Edmonton_Elks_season). For 2026, a home playoff game is listed but not confirmed (Oct 31 or Nov 7, opponent TBD) ([Wikipedia](https://en.wikipedia.org/wiki/2026_Edmonton_Elks_season)). The last home playoff crowd before 2023 is a **gap** (not checked).

**Regular-season home crowds (announced)**

| Season | Date | Opponent | Attendance |
|---|---|---|---|
| 2023 | Jun 11 | Saskatchewan | 32,233 |
| 2023 | Jun 25 | Toronto | 20,817 |
| 2023 | Jul 13 | Hamilton | 21,173 |
| 2023 | Jul 29 | BC | 24,613 |
| 2023 | Aug 10 | Winnipeg | 19,921 |
| 2023 | Aug 27 | Ottawa | 23,825 |
| 2023 | Sep 9 | Calgary | 32,422 |
| 2023 | Sep 22 | BC | 25,144 |
| 2023 | Oct 14 | Montreal | 22,822 |
| 2024 | Jun 8 | Saskatchewan | 20,681 |
| 2024 | Jun 14 | Montreal | 15,790 |
| 2024 | Jul 14 | Ottawa | 18,362 |
| 2024 | Jul 28 | Hamilton | 17,079 |
| 2024 | Aug 11 | BC | 18,447 |
| 2024 | Sep 7 | Calgary | 32,144 |
| 2024 | Sep 21 | Winnipeg | 22,605 |
| 2024 | Oct 5 | Saskatchewan | 24,317 |
| 2024 | Oct 25 | Toronto | 15,069 |
| 2025 | Jun 19 | Montreal | 14,389 |
| 2025 | Jul 6 | Ottawa | 16,588 |
| 2025 | Jul 13 | BC | 17,559 |
| 2025 | Aug 2 | Hamilton | 18,337 |
| 2025 | Aug 15 | Toronto | 16,526 |
| 2025 | Sep 6 | Calgary | 28,365 |
| 2025 | Sep 27 | Saskatchewan | 30,053 |
| 2025 | Oct 11 | Winnipeg | 15,013 |
| 2025 | Oct 24 | Calgary | 14,621 |
| 2026 | Jun 20 | Montreal | 14,664 |
| 2026 | Jul 9 | Ottawa | 15,898 |
| 2026 | Jul 17 | BC | 20,020 |
| 2026 | Aug 1 | Saskatchewan | 31,757 |
| 2026 | Aug 15 | Toronto | 22,583 |
| 2026 | Aug 21 | Winnipeg | 22,805 |
| 2026 | Sep 12 | Calgary | 31,531 |
| 2026 | Sep 26 | Hamilton | 20,036 |
| 2026 | Oct 16 | Winnipeg | scheduled (not yet played) |

Sources: Wikipedia season pages for [2023](https://en.wikipedia.org/wiki/2023_Edmonton_Elks_season), [2024](https://en.wikipedia.org/wiki/2024_Edmonton_Elks_season), [2025](https://en.wikipedia.org/wiki/2025_Edmonton_Elks_season) and [2026](https://en.wikipedia.org/wiki/2026_Edmonton_Elks_season) (secondary).

**Season summary (computed from the rows above)**

| Season | Home games | Total | Mean | Min | Max |
|---|---|---|---|---|---|
| 2023 | 9 | 222,970 | 24,774 | 19,921 | 32,422 |
| 2024 | 9 | 184,494 | 20,499 (matches the venue answer's cited average) | 15,069 | 32,144 |
| 2025 | 9 | 171,451 | 19,050 | 14,389 | 30,053 |
| 2026 (8 of 9 played) | 8 | 179,294 | 22,412 | 14,664 | 31,757 |

**Preseason (kept separate):** 2023 (May 27, vs Winnipeg) and 2024 (May 25, vs Saskatchewan) listed as N/A. 2025: May 30 vs BC, 12,769 at A01. 2026: May 29 vs Calgary, 3,771 at **A06** (same Wikipedia sources).

### 6.3 Edmonton Oil Kings (WHL), Rogers Place (A02)

| Season | Postseason result | Home playoff dates / attendance | Regular-season crowds |
|---|---|---|---|
| 2022–23 | Did not qualify | — | gap (not checked in second pass) |
| 2023–24 | Did not qualify | — | 34 home games; total 251,728; average 7,403 ([Wikipedia 2023–24 WHL season](https://en.wikipedia.org/wiki/2023%E2%80%9324_WHL_season), secondary) |
| 2024–25 | Lost conference quarterfinal 3–4 to the Prince Albert Raiders | 3 home games; total 15,105; average 5,035 ([Wikipedia 2024–25 WHL season](https://en.wikipedia.org/wiki/2024%E2%80%9325_WHL_season), secondary). Per-game dates: gap | 34 home games; total 255,923; average 7,527 (same source) |
| 2025–26 | Lost conference quarterfinal 3–4 to the Saskatoon Blades | 4 home games; total 20,901; average 5,225 ([Wikipedia 2025–26 WHL season](https://en.wikipedia.org/wiki/2025%E2%80%9326_WHL_season), secondary). Per-game dates: gap | 34 home games; total 259,946; average 7,645 (same source) |

League context: the WHL reported more than 3.2 million regular-season fans in 2025–26, an average of 4,144 per game ([WHL/CHL, June 2026](https://chl.ca/whl-rebels/?p=30131), official). Playoff averages (about 5,000 to 5,200) are below regular-season averages (about 7,400 to 7,600), so don't assume a playoff bump at A02 for this team.

Source for results: [Wikipedia, Edmonton Oil Kings](https://en.wikipedia.org/wiki/Edmonton_Oil_Kings) (secondary; it gives no attendance). Second pass: attendance comes from the WHL season pages above. What I searched: the [CHL team page](https://chl.ca/whl-oilkings/) and [2026–27 schedule](https://chl.ca/whl-oilkings/schedule/228/295/?view=grid), which show no attendance. A hockeydb attendance page returned a fetch error. Box scores on chl.ca (game IDs e.g. 1023118) may carry attendance; not checked.

### 6.4 Edmonton Stingers (CEBL), EXPO Centre Arena (A07)

| Season | Postseason result | Home playoff attendance | Regular-season crowds |
|---|---|---|---|
| 2023 | Lost play-in game to Vancouver 68–75, Aug 4, 2023 ([2023 CEBL season](https://en.wikipedia.org/wiki/2023_CEBL_season)) | Not a confirmed Edmonton home game; the source doesn't name the site. The figures on the page (1,654 and 10,580) can't be assigned to this game. **gap** | Total 34,736; average 3,859 (same source, secondary) |
| 2024 | Lost quarterfinal to Vancouver, Aug 4, 2024 (score unclear in source) ([2024 CEBL season](https://en.wikipedia.org/wiki/2024_CEBL_season)) | The site isn't confirmed, and the game's attendance can't be assigned. **gap** | Total 34,222; average 3,422 (same source, secondary) |
| 2025 | Playoff game probably Aug 14, 2025 (a Stingers player appears in that box score) | 2,776 announced for the Aug 14 game ([2025 CEBL season](https://en.wikipedia.org/wiki/2025_CEBL_season), secondary). **Unconfirmed** that Edmonton played or hosted it. | Total 35,318; average 2,943; high 3,421; low 2,017 (as of Aug 10, 2025, same source) |
| 2026 | Lost Western semifinal 83–92 **at** Vancouver (Edmonton was the 4th seed and Vancouver the 1st) ([2026 CEBL season](https://en.wikipedia.org/wiki/2026_CEBL_season)) | No home playoff game, inferred from the seeding (not stated) | Total 35,139; average 2,928 (as of Aug 3, 2026, same source) |

Source: [Wikipedia, Edmonton Stingers](https://en.wikipedia.org/wiki/Edmonton_Stingers) (secondary; no attendance or game-by-game detail). [cebl.ca/games](https://www.cebl.ca/games) and [cebl.ca/stats/edmonton](https://www.cebl.ca/stats/edmonton) loaded without game data, and [thestingers.ca](https://www.thestingers.ca/) refused fetching. The only CEBL attendance figure seen was a league record of 12,519 for the 2026 Finals **in Winnipeg** ([cebl.ca](https://www.cebl.ca)), not an Edmonton crowd.

### 6.5 Other teams

**Edmonton Riverhawks (WCL), RE/MAX Field (A03)**, second pass

| Season | Postseason | Regular-season crowds |
|---|---|---|
| 2023 | Did not qualify | Total 104,378; 3,880 per game; led the league |
| 2024 | Wildcard; lost North Divisional Series 1–2 to Bellingham (first playoff win Aug 10). Home playoff attendance: gap | Total 116,871; 4,675 per game; led the league |
| 2025 | Beat Victoria 2–1 in the North Divisional Series, then lost the North Division Championship Game 2–5 to Bellingham. Home playoff attendance: gap | Total 131,966; 4,888 per game; led the league |
| 2026 | Did not qualify | "More than 140,000" at RE/MAX Field in 2026 ([Riverhawks About page](https://riverhawksbaseball.com/team/about-us), official). Per-game figure: gap |

Source for 2023–2025 and playoffs: [Wikipedia, Edmonton Riverhawks](https://en.wikipedia.org/wiki/Edmonton_Riverhawks) (secondary). The team says it set the WCL season attendance record four years running ([Riverhawks](https://riverhawksbaseball.com/team/about-us)).

**Spruce Grove Saints and Sherwood Park Crusaders (BCHL)**, second pass

| Team | Season | Postseason result | Home playoff crowds | Regular-season crowds |
|---|---|---|---|---|
| Saints | 2023–24 | Lost Alberta division play-in 0–3 to Okotoks ([Wikipedia](https://en.wikipedia.org/wiki/Spruce_Grove_Saints)) | gap | gap |
| Saints | 2024–25 | Did not qualify (same source) | — | gap |
| Saints | 2025–26 | Lost Interior East semifinal 0–4 to Brooks ([2025–26 BCHL season](https://en.wikipedia.org/wiki/2025%E2%80%9326_BCHL_season)) | gap | gap |
| Crusaders | 2023–24 | Reached the BCHL Alberta Division Final vs Brooks; G1 and G2 at Randy Rosen Rink (A14), May 10–11, 2024 ([Brooks Bandits](https://www.brooksbandits.net/schedule-released-for-bchl-alberta-final-featuring-bandits-and-crusaders)) | gap | gap |
| Crusaders | 2024–25 | Beat Salmon Arm 4–0, then lost 0–4 to Brooks ([Wikipedia](https://en.wikipedia.org/wiki/Sherwood_Park_Crusaders)) | gap | gap |
| Crusaders | 2025–26 | Beat Blackfalds 4–2 (clinched Apr 2026; [BCHL](https://bchl.ca/2026-rogers-bchl-playoffs-recap-april-12)), then lost the division final 3–4 to Brooks ([2025–26 BCHL season](https://en.wikipedia.org/wiki/2025%E2%80%9326_BCHL_season)) | gap | gap |

Attendance: the BCHL season pages on Wikipedia have no per-team figures; the [2024–25 page](https://en.wikipedia.org/wiki/2024%E2%80%9325_BCHL_season) gives only a league total of 732,585. bchl.ca box scores (such as [game 14234](https://bchl.ca/stats/game-center/14234)) may show attendance, but bchl.ca stats pages were blocked for fetching. **Gap.**

**Golden Bears & Pandas (U Sports)**, second pass
- **Football (A09):** the 2025 season opener "sold out Foote Field with over 4,500" ([Bears & Pandas, Aug 18, 2026](https://bearsandpandas.ca/news/2026/8/18/golden-bears-football-gears-up-for-ambitious-2026-campaign.aspx), official, approximate). That's above the venue answer's 3,500 bleacher figure, so standing or temporary capacity is likely. Other games and seasons: gap. 2026 home dates: Sept 4 (vs Regina, Foote Field), Sept 18, Oct 2 and Oct 31; the source doesn't name the venue for the last three.
- **Hockey (A10, and Nisku in 2026–27):** no announced crowds found. A search of bearsandpandas.ca and Canada West turned up none, and the schedule page shows blank attendance fields. **Gap.**

**MacEwan Griffins, Collegiate Hawks, Cactus Rats, Huskies, Wildcats:** **gap** (not searched). Like Tampa Bay, these will ship with no crowd history unless filled later.

---

## Biggest gaps (for the city gaps list)

*Updated in the second pass, Oct 14, 2026.*

1. **Official brand hex colours.** None of the teams has one. Secondary hex pairs exist for the Oilers, Oil Kings, U of A and MacEwan (all conflicting or unconfirmed). Colour names only for the Elks, Stingers, Riverhawks, Saints and Crusaders.
2. **Ticketmaster IDs** are still unverified for the concert rooms A03, A06, A07, A13, A15 and A19. A13 (own box office plus AXS) and A15 (AXS) are confirmed as AXS rooms. A10 is now verified (139652).
3. **Elks feed.** ESPN's CFL data is stuck at 2023, and the official CFL API needs a key, so no free machine feed is verified.
4. **Crowd history:** per-game Oil Kings playoff dates; Stingers playoff crowds; all BCHL per-team attendance (bchl.ca stats blocked); U of A hockey and most football; MacEwan, Collegiate Hawks, Cactus Rats, Huskies and Wildcats.
5. **Silent Ice Center, Nisku** needs a venue row: U of A hockey's 2026–27 home and the 2026 BCHL Showcase site. Its capacity and municipality aren't verified.
6. **Feeds not verified:** MacEwan and Pandas schedule IDs; the Canada West site (fetch error); wclstats.com (blocked); CCBC, WCBL and CJFL (PDF only).
7. **Stingers away games:** none found in 2025–26, but the CEBL ICS still wasn't parsed.
8. **A16 capacity conflict:** a third figure, 1,665 seats ([OneFM](https://www.onefm.ca/parkland/news/parkland-news/spruce-grove-to-host-2026-bchl-all-star-weekend/)), sits beside 1,400 and 1,700. Leave it blank per the build rules.

### Sources that couldn't be accessed

| Source | Why | Effect |
|---|---|---|
| bearsandpandas.ca | Rate-limited (HTTP 429); not retried | U of A feed, colours and crowds are gaps |
| sgsaints.ca | Rate-limited (HTTP 429); not retried | Saints feed and colours are gaps |
| riverhawksbaseball.com/remax-field | Rate-limited (HTTP 429); not retried | Riverhawks feed and colours are gaps |
| teamcolorcodes.com (Elks page) | Rate-limited (HTTP 429); not retried | Elks hex is a gap (it would have been secondary anyway) |
| ticketmaster.ca, Rogers Place venue page (140602) | Rate-limited (HTTP 429) | ID still verified through the official rogersplace.com link |
| thestingers.ca | Refused automated fetching (robots rules) | Stingers schedule and colours are gaps |
| ticketmaster.ca/venue/139314 | Fetch error | A03 ID not verified |
| hockeydb.com attendance page | Fetch error | Oil Kings crowds are a gap |
| Web search | Shared per-turn search limit reached after about 17 searches | No further discovery searches. A follow-up session could continue. |
| **Second pass (Oct 14):** bchl.ca/stats/* (schedule/all-teams, game-center/14234) | Fetch blocked (permission request not answered); not retried | BCHL feed IDs come from the URLs only; per-team attendance is a gap. bchl.ca news pages did load. |
| **Second pass:** wclstats.com/sports/bsb/2026/schedule | Fetch blocked (permission request not answered); not retried | Riverhawks feed team ID not checked |
| **Second pass:** canadawest.org/sports/mice/2026-27/schedule | Fetch error | Canada West feed not verified |
| **Second pass:** bearsandpandas.ca/services/schedule_txt.ashx | Robots rules disallow fetching | U of A text export contents not checked (bearsandpandas.ca HTML pages did load this time) |
| **Second pass:** teamcolorcodes.com Elks page | Fetch error | Elks hex is still a gap |
| **Second pass:** search limit | Not reached; about 46 searches used | — |
