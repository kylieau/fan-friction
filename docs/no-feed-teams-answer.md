# Free schedule feeds for the teams Fan/Friction can't see: the research answer

Kylie's research, pasted Oct 8, 2026. Prompt: `docs/no-feed-teams-prompt.md`. Saved verbatim. What the app does with it: `docs/no-feed-teams-proposal.md`.

---

# Free schedule feeds for the teams Fan/Friction can't see

Research answer, 7 October 2026. Prepared for the Fan/Friction venue gap.

## Read this first: three findings that change the plan

1. **You already hold the most useful key.** Ticketmaster's Discovery API (which you use for concerts) filters by `venueId`, returns `localDate` and `localTime`, and carries a default quota of 5,000 calls a day at 5 per second ([summary of the developer terms](https://freeapihub.com/apis/ticketmaster-discovery)). A sweep of your own venue table with `classificationName=Sports` will pick up any game, rodeo performance or race ticketed through Ticketmaster, whatever the league. It has no attendance and won't see buildings ticketed elsewhere, but it is the only option here that is fully official, keyed to you, and league-agnostic.
2. **ESPN's site API carries more of your gap than you'd think** — the G League, UFL, USL Super League, NLL, CFL, IndyCar and the NCAA "other" sports all have league slugs. But your current ESPN use already sits under the Disney Terms of Use, which (in every language version I could find) bar accessing or copying Disney services, ESPN included, with a robot, spider, scraper or other automated means without written permission ([Disney Terms of Use](https://disneytermsofuse.com)). That clause applies to the feed you already run. Extending it widens the exposure; it doesn't create it. Decide on ESPN once, for everything.
3. **Two facts in your table are out of date or need a caveat.** The Dallas Sidekicks sat out the 2025–26 MASL season ([Wikipedia](https://en.wikipedia.org/wiki/Dallas_Sidekicks_(2012%E2%80%93present))) and I found nothing confirming a 2026–27 return. And Major League Cricket runs a caravan schedule: Grand Prairie hosted 15 matches over nine days in 2026 regardless of which team was "home" ([MLC announcement](https://usacricketers.com/?p=52575)), with 12 more at the Oakland Coliseum and 7 at Pomona ([2026 MLC season](https://en.wikipedia.org/wiki/2026_Major_League_Cricket_season)). So MLC touches your Bay Area and Los Angeles tables too, and "home team" is the wrong key for it. Key it by building.

Two leagues missing from your table belong in it: the **PWHL** (Seattle Torrent at Climate Pledge Arena: 13 home dates, a 16,014 opener and a 17,335 sellout ([PWHL schedule release](https://www.thepwhl.com/en/teams/seattle-torrent/news/2025/october/1/pwhl-seattle-unveils-inaugural-season-schedule), [PWHL release](https://thepwhl.com/en/news/2026/february/27/seattle-torrent-break-u-s-arena-attendance-record-with-17-335-fans))) and **WHL junior hockey** in the Seattle metro. Both sit on the same feed as the AHL.

**Evidence labels used below.** *Docs* = confirmed in official documentation or in open-source code that calls the endpoint. *Community* = documented by third-party projects but not live-tested by me. *Unverified* = my best understanding; treat as a lead. I could not make live requests to ESPN, MLB, HockeyTech or Ticketmaster from my environment, so **no URL below is live-tested**. Section 5 lists what to paste into a browser.

---

## 1. A source per league

### Summary

| League | Best free source | Building + local time | Attendance | Key needed | Terms posture | Evidence |
|---|---|---|---|---|---|---|
| Minor-league baseball (affiliated) | MLB Stats API, `sportId` 11–14 | Yes (venue; UTC time) | Yes | No | MLBAM notice: personal, non-commercial, non-bulk | Docs |
| Independent baseball (AA, Frontier, Atlantic) | MLB Stats API, `sportId=23` | Probably | Probably | No | Same MLBAM notice | Unverified coverage |
| AHL | HockeyTech (LeagueStat) feed | Yes (venue; local ISO time with offset) | Yes, in game reports | Public key embedded in theahl.com | No published API terms found | Community + code |
| ECHL | HockeyTech, `client_code=echl` | Yes | Yes | Same pattern | Same | Community + code |
| PWHL *(added)* | HockeyTech, `client_code=pwhl` | Yes | Yes | Same pattern | Same | Community + code |
| WHL / CHL *(added)* | HockeyTech, `client_code=whl` | Yes | Yes | Same pattern | Same | Community + code |
| NBA G League | ESPN `basketball/nba-development` | Yes (UTC time) | Often | No | Disney ToU | Community |
| UFL | ESPN `football/ufl` | Yes | Often | No | Disney ToU | Community |
| USL Super League | ESPN `soccer/usa.w.usl.1` | Yes | Sometimes | No | Disney ToU | Community |
| USL Championship / League One | ESPN `usa.usl.1` / `usa.usl.l1` | Yes | Sometimes | No | Disney ToU | Community (you already use it) |
| MLS Next Pro | **None found** | — | — | — | — | — |
| Major League Cricket | **No clean free feed** | — | — | — | — | — |
| MASL | **No documented feed** | — | — | — | — | — |
| NASCAR | NASCAR's own `cf.nascar.com` JSON | Track + time | No (NASCAR doesn't announce crowds) | No | Not checked | Code |
| IndyCar | ESPN `racing/irl` | Yes | No | No | Disney ToU | Community |
| NCAA (baseball, softball, volleyball, soccer, hockey) | ESPN slugs; school calendar exports | Yes | Sometimes | No | Disney ToU / school site terms | Community |
| NLL lacrosse *(added)* | ESPN `lacrosse/nll` | Yes | Sometimes | No | Disney ToU | Community |
| Rodeo, stock show, PBR | **None**; Ticketmaster sweep where ticketed | TM: yes | No | Your TM key | TM developer terms | Docs (TM) |
| **Any ticketed event at your venues** | **Ticketmaster Discovery, by `venueId`** | **Yes (local date + time)** | No | Your existing key | Official API | Docs |

### Minor-league baseball (affiliated): Frisco, Tacoma, Everett, Brooklyn, Rancho Cucamonga, Lake Elsinore, Gwinnett

- **Source.** The MLB Stats API you already call. Affiliated levels are separate `sportId`s: 11 Triple-A, 12 Double-A, 13 High-A, 14 Single-A ([baseballr sport ID table](https://search.r-project.org/CRAN/refmans/baseballr/html/mlb_sports.html); the open-source [Teamarr schema](https://github.com/Pharaoh-Labs/teamarr) maps MiLB the same way).
- **Example requests** (look up the team ID first, then pull the season):
  - `https://statsapi.mlb.com/api/v1/teams?sportId=12&season=2027`
  - `https://statsapi.mlb.com/api/v1/schedule?sportId=12&teamId={TEAM_ID}&startDate=2027-04-01&endDate=2027-09-30`
- **Returns.** The same JSON shape as your MLB calls: `gameDate` (UTC), `officialDate`, `venue.name`/`venue.id`, home and away teams. Convert UTC to local with the time zone already in your venue table. Horizon: the full season once MiLB publishes it, usually many months ahead.
- **Attendance.** In the game feed after the game (`/api/v1.1/game/{gamePk}/feed/live`, under `gameData.gameInfo`) and in the boxscore info lines. *Unverified field path; check one game.*
- **Terms.** Responses point to MLBAM's notice at [gdx.mlb.com/components/copyright.txt](http://gdx.mlb.com/components/copyright.txt), which reads: "Only individual, non-commercial, non-bulk use of the Materials is permitted." This is the same notice your MLB feed already lives under; adding MiLB does not change your position, though it does increase volume, which bears on "non-bulk". No key.
- **Stability.** High. This is MLB's own production service for its apps.

### Independent baseball: Chicago Dogs, Schaumburg Boomers, Staten Island FerryHawks (and Kane County, Long Island Ducks)

- **Source.** The American Association, Atlantic League and Frontier League are MLB Partner Leagues ([MLB glossary](https://www.mlb.com/glossary/miscellaneous/partner-leagues)), and the Stats API has an "Independent Leagues" `sportId` of 23 ([baseballr](https://search.r-project.org/CRAN/refmans/baseballr/html/mlb_sports.html)).
- **Example request:** `https://statsapi.mlb.com/api/v1/teams?sportId=23&season=2026`, then `.../schedule?sportId=23&teamId={TEAM_ID}&startDate=...&endDate=...`
- **Caveat.** I confirmed the sport ID exists, not that it carries full schedules for all three leagues. If the teams call returns the Dogs, Boomers and FerryHawks, you're done; if it's empty, fall back to Ticketmaster (if the club tickets there) or a hand-entered season.
- **Terms, attendance, stability.** As above if it works.

### AHL: Chicago Wolves, San Jose Barracuda, Ontario Reign, San Diego Gulls, Coachella Valley Firebirds

- **Status check.** The Wolves are still in the AHL at Allstate Arena for 2025–26 ([Wolves schedule release](https://www.chicagowolves.com/2025/07/10/rivalries-old-and-new-on-tap-for-wolves/)).
- **Source.** The AHL's stats run on HockeyTech's LeagueStat platform at `lscluster.hockeytech.com/feed/`. The site's own pages call it with a client key embedded in the page code. Open-source projects document the parameters (`feed=modulekit`, `view=schedule`, `key`, `client_code=ahl`, `fmt=json`, `lang=en`) and parse `GameDateISO8601` (local time with offset), `venue_name` and `venue_location` ([Teamarr HockeyTech docs](https://www.mintlify.com/Pharaoh-Labs/teamarr/reference/provider-hockeytech)).
- **Example request** (key and IDs left as placeholders on purpose; see Terms):
  `https://lscluster.hockeytech.com/feed/?feed=modulekit&view=schedule&key={KEY}&client_code=ahl&season_id={SEASON_ID}&team_id={TEAM_ID}&fmt=json&lang=en`
  *The `season_id` and `team_id` parameter names are unverified.* `view=seasons` and `view=teamsbyseason` are the usual lookups.
- **Horizon.** Full season once released (the AHL publishes in July).
- **Attendance.** HockeyTech's official game reports, e.g. `https://lscluster.hockeytech.com/game_reports/text-game-report.php?client_code=ahl&game_id={GAME_ID}&lang_id=1` (URL pattern documented by the [ahl_scraper gem](https://www.rubydoc.info/gems/ahl_scraper/file/README.md)). These normally print attendance; a game-summary view in the JSON feed should too. *Unverified that attendance is present.*
- **Terms.** This is the weak point. The key is not issued to you: it's the AHL website's client key, published in open-source projects. I found no HockeyTech API terms and could not reach theahl.com's terms page in search. The keys also rotate: two open-source projects list different PWHL keys ([Teamarr](https://www.mintlify.com/Pharaoh-Labs/teamarr/reference/provider-hockeytech) vs [fastRhockey](https://github.com/sportsdataverse/fastRhockey)). Under your own rules, read theahl.com's Terms of Use (footer link) and, if it's silent or prohibitive, email the league's communications office or HockeyTech for permission before wiring it.
- **Stability.** Medium-high for the platform (it has powered these leagues for years), low for any given key.

### ECHL: Allen Americans (and Atlanta Gladiators)

Same platform, `client_code=echl` ([Teamarr](https://www.mintlify.com/Pharaoh-Labs/teamarr/reference/provider-hockeytech)). Everything in the AHL entry applies, including the terms caveat. Also covers the Atlanta Gladiators at Gas South Arena in your Atlanta table.

### PWHL *(added)*: Seattle Torrent, New York Sirens

Same platform, `client_code=pwhl`. A packaged client exists ([pwhl-client on PyPI](https://pypi.org/project/pwhl-client/)), which describes the API as the undocumented backend behind thepwhl.com. Seattle: 13 home dates at Climate Pledge Arena in 2025–26 ([PWHL](https://www.thepwhl.com/en/teams/seattle-torrent/news/2025/october/1/pwhl-seattle-unveils-inaugural-season-schedule)). Confirm the Sirens' home building for 2026–27 before you map it.

### WHL / CHL junior hockey *(added)*: Seattle Thunderbirds (Kent), Everett Silvertips

Same platform, `client_code=whl` (OHL and QMJHL also covered, for Canadian metros) ([Teamarr](https://www.mintlify.com/Pharaoh-Labs/teamarr/reference/provider-hockeytech)). Worth adding if your Seattle venue table includes the Kent and Everett arenas.

### NBA G League: Texas Legends, Windy City Bulls, Santa Cruz Warriors, South Bay Lakers

- **Source.** ESPN site API, slug `basketball/nba-development` ([community ESPN docs](https://github.com/pseudo-r/Public-ESPN-API)).
- **Example requests:**
  - `https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/scoreboard?dates=20261101-20261130`
  - `https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams/{TEAM_ID}/schedule`
- **Returns.** `events[].date` in UTC, `competitions[0].venue.fullName` and address, competitors with `homeAway`. ESPN usually loads the full season.
- **Attendance.** `competitions[0].attendance` is populated after many ESPN games; check G League coverage on a recent final.
- **Terms.** Disney ToU (see the top of this file). No key.
- **Also in your metros:** Long Island Nets (Nassau Coliseum) and the San Diego Clippers (Oceanside), if those buildings are in your table.

### UFL: Dallas Renegades

ESPN slug `football/ufl` ([community docs](https://github.com/pseudo-r/Public-ESPN-API); also configured in [Teamarr](https://github.com/Pharaoh-Labs/teamarr)). Example: `https://site.api.espn.com/apis/site/v2/sports/football/ufl/scoreboard?dates=20270301-20270630`. Same fields and terms as the G League entry. I did not check theufl.com for its own feed or terms.

### USL Super League: Dallas Trinity FC

ESPN slug `soccer/usa.w.usl.1` ([community docs](https://github.com/pseudo-r/Public-ESPN-API)). Example: `https://site.api.espn.com/apis/site/v2/sports/soccer/usa.w.usl.1/scoreboard?dates=20261001-20261231`. **This answers your question directly: ESPN does list the USL Super League** (community-documented, not live-tested). Same fields and terms as above.

### USL Championship / League One: Oakland Roots, Atlético Dallas (from 2027)

You already read `usa.usl.1`. USL League One is `usa.usl.l1`. Atlético Dallas will appear once ESPN loads the 2027 season. I couldn't tell what "Loudoun-style second teams" refers to in your table; if you mean MLS clubs' reserve sides, those play in MLS Next Pro now (below).

### MLS Next Pro: North Texas SC, Golden City FC

- **No free machine-readable source found.** ESPN's community-documented soccer slugs don't include it ([community docs](https://github.com/pseudo-r/Public-ESPN-API)). The schedules on mlssoccer.com club pages are script-rendered, with no documented feed, and I did not find MLS terms permitting automated access. The commercial providers that carry it are paid (e.g. [TheStatsAPI](https://www.thestatsapi.com/football/league/mls-next-pro), from $50 a month), so they're out.
- **Fallback.** Hand-enter the season (about 14 home dates a team) when it's released. See section 4.

### Major League Cricket: Texas Super Kings (and Grand Prairie, Oakland, Pomona as buildings)

- **No clean free feed.** The cricket data ESPN exposes comes from ESPNcricinfo through a region-flavoured personalized endpoint ([community docs](https://github.com/pseudo-r/Public-ESPN-API)), under the same Disney terms and less stable. TheSportsDB lists MLC (league 5401), but its useful endpoints need a paid key (below).
- **Fallback.** One short season (June–July), announced in March, with about 34 matches across three buildings. Hand-enter it by building, including doubleheader days, when the schedule drops.

### MASL indoor soccer: Dallas Sidekicks (and Empire Strykers, San Diego Sockers, Tacoma Stars)

- **Status.** The Sidekicks didn't play in 2025–26 ([Wikipedia](https://en.wikipedia.org/wiki/Dallas_Sidekicks_(2012%E2%80%93present))). League average attendance that season was 2,870; the season high was 7,861 at Toyota Arena in Ontario ([2025–26 MASL season](https://en.wikipedia.org/wiki/2025%E2%80%9326_Major_Arena_Soccer_League_season)). That makes Empire Strykers games at Toyota Arena the MASL nights that matter to you.
- **Source.** The league stats live in a script-driven app at [maslsoccer.com/stats](https://www.maslsoccer.com/stats). The asset URLs suggest a DigitalShift platform, but I found no documented feed. Treat it as no feed: use Ticketmaster if the arena tickets there, or hand entry.

### NASCAR and IndyCar: Texas Motor Speedway, Chicagoland Speedway, EchoPark Speedway

- **NASCAR.** NASCAR serves its race lists as public JSON: Cup at `https://cf.nascar.com/cacher/{year}/1/race_list_basic.json`, the second and third series at `https://cf.nascar.com/cacher/{year}/race_list_basic.json`. The pattern is taken from open-source code that calls it ([Teamarr NASCAR provider](https://github.com/Pharaoh-Labs/teamarr)). Fields include the track and scheduled start; *exact field names unverified*. I didn't read NASCAR.com's terms.
- **IndyCar.** ESPN slug `racing/irl` ([community docs](https://github.com/pseudo-r/Public-ESPN-API)), under Disney terms.
- **Honest recommendation.** These are one to three weekends a year per track. Hand-entering them in January costs ten minutes, avoids two more terms surfaces, and lets you add the practice and qualifying days that also load the roads. Use the feeds only to catch date changes.

### NCAA beyond football and basketball

- **ESPN slugs** ([community docs](https://github.com/pseudo-r/Public-ESPN-API)): `baseball/college-baseball`, `baseball/college-softball`, `volleyball/womens-college-volleyball`, `volleyball/mens-college-volleyball`, `soccer/usa.ncaa.w.1`, `soccer/usa.ncaa.m.1`, `hockey/mens-college-hockey`, `hockey/womens-college-hockey`, `lacrosse/mens-college-lacrosse`. The same docs note that NCAA scoreboards truncate unless you pass `groups=50&limit=500`.
- **School calendar exports.** Most Division I athletics sites run on a common vendor platform with a "sync calendar" / ICS button on each sport's schedule page. These are the cleanest free feeds for a single team. I couldn't verify the URL pattern, so I won't give one; copy the link from the button.
- **Reality check.** Very few of these games reach 5,000 in your eight metros. Filter to venues already in your table and don't build a general NCAA ingest.

### NLL lacrosse *(added)*: San Diego Seals (Pechanga Arena), Georgia Swarm (Gas South Arena)

ESPN slug `lacrosse/nll` ([community docs](https://github.com/pseudo-r/Public-ESPN-API); also in [Teamarr](https://github.com/Pharaoh-Labs/teamarr)). About nine home dates a team, winter to spring. Same terms.

### Other leagues worth a look

Major League Rugby is on ESPN as `rugby/289262` per [Teamarr's config](https://github.com/Pharaoh-Labs/teamarr), but check which franchises are still active before mapping. The CFL is `football/cfl` on ESPN, for any Canadian metros you add later.

### Rodeo, stock shows, PBR: Fort Worth Stock Show & Rodeo, Dickies Arena, Will Rogers

No league feed exists. The Ticketmaster venue sweep below will list any performance ticketed through Ticketmaster at Dickies Arena; whether Dickies and the Stock Show sell there is *unverified*. Otherwise hand-enter the run each autumn when it's announced.

### Cross-cutting: Ticketmaster Discovery venue sweep (recommended)

- **Example requests:**
  - Find the venue ID: `https://app.ticketmaster.com/discovery/v2/venues.json?keyword=Allstate%20Arena&stateCode=IL&apikey={YOUR_KEY}`
  - List its sports events: `https://app.ticketmaster.com/discovery/v2/events.json?venueId={VENUE_ID}&classificationName=Sports&startDateTime=2026-10-07T00:00:00Z&size=200&sort=date,asc&apikey={YOUR_KEY}`
- **Returns.** Events with `dates.start.localDate` and `localTime`, the embedded venue, and embedded "attractions" (usually the two teams) ([API summary](https://skills.sh/aeonbridge/ab-anthropic-claude-skills/ticketmaster-api)). Horizon is whatever is on sale; full sports seasons usually go on sale early, but single-game releases can trail. Deep paging stops at 1,000 results, which won't matter per venue.
- **Gaps.** No attendance. Buildings ticketed through other sellers won't appear: affiliated MiLB uses MLB's own ticketing, and some arenas use other vendors. Team-sold group or season inventory can also be missing.
- **Terms.** The developer terms you already accepted. Quota is 5,000 calls a day at 5 per second ([summary](https://freeapihub.com/apis/ticketmaster-discovery)). A daily sweep of a few hundred venues fits.
- **Use it two ways:** as the primary source for leagues with no feed (MASL, MLS Next Pro if ticketed there, rodeo, PBR, UFL), and as a cross-check that catches events no league feed knows about.

### "Free in name only": excluded

| Service | Why it doesn't meet your rules |
|---|---|
| Sportradar | Trials last 30 days with 1,000 requests per rolling 30 days, and production access is reserved for paying customers ([Sportradar docs](https://developer.sportradar.com/getting-started/docs/your-account)). Free to evaluate, not to run. |
| TheSportsDB | The free key (`123`) is publicly documented, but its endpoints are heavily capped (the docs show team search limited to a single example team) ([TheSportsDB docs](https://www.thesportsdb.com/documentation)). Full event coverage needs a paid key; one open-source integrator dropped its free tier for that reason ([Teamarr TSDB notes](https://www.mintlify.com/Pharaoh-Labs/teamarr/reference/provider-tsdb)). |
| TheStatsAPI and similar | Paid plans with a trial ([example](https://www.thestatsapi.com/football/league/mls-next-pro)). |
| Bell Media / TSN widget API | Open-source code uses it for the AHL, PWHL and CHL ([Teamarr](https://github.com/Pharaoh-Labs/teamarr)), but it's a Canadian broadcaster's undocumented widget backend with unknown terms. Not worth the risk when HockeyTech is the source of record. |

---

## 2. Ranking

How I scored it: **annual load** (nights × typical crowd × number of your buildings) and **spike size** (the biggest single night, which drives road conflicts). Crowd figures marked "≈" are my rough estimates, not looked up; replace them with real announced crowds once you have them (section 3).

| Rank | League | Your buildings (examples) | Typical crowd | Home nights / team / yr | Why it ranks here |
|---|---|---|---|---|---|
| 1 | Affiliated MiLB | Riders Field, Tacoma, Everett, Brooklyn, Rancho, Lake Elsinore, Gwinnett | 7,000–10,000 at Frisco (your figure); ≈3,000–9,000 elsewhere | ≈65–75 | Most nights by far, in every metro you cover, summer evenings |
| 2 | AHL | Allstate, SAP Center (some), Toyota Arena, Pechanga, Acrisure | ≈4,000–9,000 | 36 | Five clubs, winter weekends, arena-district traffic |
| 3 | PWHL | Climate Pledge Arena | 16,014–17,335 in Seattle ([PWHL](https://thepwhl.com/en/news/2026/february/27/seattle-torrent-break-u-s-arena-attendance-record-with-17-335-fans)) | 13 | Few nights, NHL-size crowds in a building already busy with the Kraken and Storm |
| 4 | NASCAR / IndyCar | Texas Motor, Chicagoland, EchoPark | ≈tens of thousands | 1–3 weekends / track | Tiny count, largest spikes in the whole set |
| 5 | Fort Worth Stock Show & Rodeo | Dickies Arena, Will Rogers | ≈arena-capacity performances | Multi-week run | Dense block of nights in one DFW corridor |
| 6 | Independent baseball | Impact Field, Wintrust Field, Staten Island | ≈3,000 (Dogs, your figure) to ≈6,000 | ≈48–60 | Many nights, modest crowds |
| 7 | ECHL | Allen, Gas South Arena | ≈3,000–7,000 | 36 | Two clubs in your metros |
| 8 | WHL | Kent, Everett | ≈4,000–6,000 | 34 | Only if those arenas are in your Seattle table |
| 9 | MLC | Grand Prairie, Oakland Coliseum, Pomona | Grand Prairie markets sellouts ([MLC](https://usacricketers.com/?p=52575)) | 15 / 12 / 7 matches per building in 2026 | Short burst with doubleheaders |
| 10 | UFL | Toyota Stadium | ≈8,000–15,000 | ≈5 | Few dates, decent crowds |
| 11 | NLL | Pechanga, Gas South | ≈5,000–9,000 | ≈9 | Winter weekends |
| 12 | G League | Comerica Center, NOW Arena, others | ≈1,000–4,000 | 24 | Mostly small rooms |
| 13 | USL Super League | Cotton Bowl | ≈a few thousand in a huge stadium | ≈14 | Building far exceeds crowd |
| 14 | MASL | Toyota Arena (Empire), others | 2,870 league average; 7,861 peak ([Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Major_Arena_Soccer_League_season)) | 12 | Dallas absent; Ontario is the one that matters |
| 15 | MLS Next Pro | Mansfield, Kezar | ≈under 3,000 | ≈14 | Small crowds |
| 16 | NCAA other sports | Campus venues | Rarely 5,000+ | Varies | Filter to your venue table only |

### Wire these three first

1. **MLB Stats API, extended to `sportId` 11, 12, 13, 14 and 23.** It's the code you already have with a parameter change, it covers rank 1 and rank 6, it carries venue and attendance, and it adds no new terms surface (the MLBAM notice already governs you). Highest yield per hour of work by a wide margin.
2. **Ticketmaster Discovery venue sweep.** Also a key you already hold, under terms you've already accepted. It's league-agnostic, so it covers AHL, ECHL, PWHL, rodeo, PBR, UFL and MASL wherever those buildings sell on Ticketmaster, and it gives local date and time directly. It's the only clean answer to "the building is in my table but its events are invisible", which is exactly your problem.
3. **HockeyTech, after permission.** One client covers AHL, ECHL, PWHL and WHL (ranks 2, 3, 7, 8) with venue, local time and official attendance. I rank it third, not second, only because the key isn't yours and I found no terms; send the email first, then wire it.

In parallel, not a "source": keep a **hand-entered annual events file** for NASCAR, IndyCar, the Stock Show, PBR and MLC, about 40–60 rows a year. These sit at ranks 4, 5 and 9 for spike size, and none has a clean feed.

ESPN slug extension (G League, UFL, USL Super League, NLL) is the cheapest change of all, but it rides on the Disney terms question. Settle that for your existing ESPN feed first; if you keep ESPN, add these slugs the same day.

---

## 3. Attendance

| League | Where announced crowds appear | Machine-readable? | Evidence |
|---|---|---|---|
| Affiliated MiLB | Stats API game feed and boxscore | Yes (JSON) | Docs for the API; field path unverified |
| Independent baseball | Stats API if `sportId=23` carries games; otherwise league and team box scores | Yes if covered | Unverified |
| AHL / ECHL / PWHL / WHL | HockeyTech official game reports and game summaries | Yes (JSON summary; text report) | Report URL documented; attendance field unverified |
| G League, UFL, USL, NLL, NCAA | ESPN `competitions[].attendance` on completed events | Yes, when populated | Community; population varies by league |
| PWHL (headline nights) | League press releases | No (prose) | [PWHL release](https://thepwhl.com/en/news/2026/february/27/seattle-torrent-break-u-s-arena-attendance-record-with-17-335-fans) |
| MASL | Season summaries (secondary sources) | No | [Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Major_Arena_Soccer_League_season) |
| MLC | Match reports and press releases, inconsistently | No | Unverified |
| MLS Next Pro | Match reports on club and league sites | No | Unverified |
| NASCAR | Not announced (NASCAR stopped publishing crowd estimates years ago) | — | From memory; verify |
| IndyCar | Occasional track or press estimates | No | Unverified |
| Rodeo / Stock Show | Season-total press releases | No | Unverified |
| Ticketmaster sweep | Never | — | Docs |

**Implication for sizing.** MiLB, the HockeyTech leagues and (where ESPN fills the field) the G League, UFL and USL can be sized from past announced crowds. MLC, MASL, MLS Next Pro, motorsport and rodeo should be sized by building capacity times a hand-set fill factor (e.g. 0.6 for MLS Next Pro at Kezar, 1.0 for an MLC weekend at Grand Prairie), revised by hand once a season.

---

## 4. What does not exist

Plainly: **no free, machine-readable schedule that meets your rules exists, as far as I could find, for**:

| League | Fallback |
|---|---|
| MLS Next Pro | Hand-enter the season when released (≈14 home dates per club); also try the Ticketmaster sweep for Mansfield Stadium and Kezar |
| Major League Cricket | Hand-enter by building each March (≈34 matches, three buildings) |
| MASL | Ticketmaster sweep for Toyota Arena and the Kent arena; otherwise hand-enter (12 home dates); confirm whether the Sidekicks return |
| Fort Worth Stock Show & Rodeo, PBR | Ticketmaster sweep if ticketed there; otherwise hand-enter the run in autumn |
| NASCAR / IndyCar | Feeds exist, but hand entry is simpler and safer for 1–3 weekends a track |
| Independent baseball, if `sportId=23` is empty | Ticketmaster sweep, then hand entry (≈50 dates per club, so ask the club for a CSV) |

**Fallback ladder, in order of preference:**

1. **Ticketmaster venue sweep**: official, already keyed.
2. **A team's ICS / "add to calendar" export**: use it only if it's a plain public link. Many pro teams' "sync" buttons go through calendar-subscription vendors that require an email sign-up and have their own terms; avoid those for an app.
3. **Ask.** A short email to a team's media relations office ("Can I read your published schedule into a non-commercial personal app?") usually gets a schedule CSV or a yes. Keep the reply on file.
4. **Hand-enter from the team's PDF or press release** once a season, with a "last checked" date on each row and a quarterly re-check for moved dates.
5. **Scrape a league calendar page once a season** only with written permission, and only if the site's terms don't forbid it.

---

## 5. Self-audit

### Claims resting on thin evidence or my own judgement

| Claim | Basis | Risk |
|---|---|---|
| ESPN slugs `nba-development`, `ufl`, `usa.w.usl.1`, `nll`, `irl`, NCAA slugs work | Community docs and one open-source config; not live-tested | Slug renamed or empty for the current season |
| ESPN `attendance` populated for these leagues | Common for major leagues; unconfirmed for these | Field present but empty |
| `sportId=23` carries AA, Frontier and Atlantic schedules | Sport ID exists; coverage unconfirmed | May return nothing |
| MiLB attendance path (`gameData.gameInfo.attendance`) | My recollection | Wrong path |
| HockeyTech parameter names `season_id`, `team_id` | My recollection; the other parameters come from open-source code | Wrong names |
| HockeyTech reports include attendance | My recollection of the report format | Missing |
| No HockeyTech or AHL terms forbid this | **I didn't find terms at all**; absence of evidence | They may forbid it |
| NASCAR JSON field names; NASCAR doesn't announce crowds | Code comment; memory | Changed |
| Which venues sell on Ticketmaster | Not checked per venue | Some rooms invisible to the sweep |
| All "≈" crowd figures in section 2 | My estimates | Ranking order could shift between neighbours |
| Golden City FC at Kezar, Atlético Dallas 2027, Dallas Renegades at Toyota Stadium, Dallas Trinity at the Cotton Bowl | Your brief; I didn't verify | Team or building changes |
| Sidekicks absent for 2026–27 | Only that they sat out 2025–26 | They may return |
| NY Sirens' home building | Not checked | Mis-mapped venue |
| Disney ToU clause wording in English | Read in several translated versions; English text not fetched | Wording differs slightly |

### Paste-into-browser checks before wiring anything

| # | Request | What to look for |
|---|---|---|
| 1 | `https://statsapi.mlb.com/api/v1/teams?sportId=12&season=2026` | Frisco RoughRiders and their `id` |
| 2 | `https://statsapi.mlb.com/api/v1/schedule?sportId=12&teamId={id}&startDate=2026-04-01&endDate=2026-09-30` | `gameDate`, `venue.name`; a `copyright` field in the response |
| 3 | `https://statsapi.mlb.com/api/v1/teams?sportId=23&season=2026` | Chicago Dogs, Schaumburg Boomers, Staten Island FerryHawks |
| 4 | `https://statsapi.mlb.com/api/v1.1/game/{gamePk}/feed/live` (a finished Frisco game) | An attendance value under `gameData.gameInfo` |
| 5 | `https://site.api.espn.com/apis/site/v2/sports/soccer/usa.w.usl.1/scoreboard` | Dallas Trinity events with venue |
| 6 | `https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/scoreboard?dates=20261115` | G League games; `attendance` on finals |
| 7 | `https://site.api.espn.com/apis/site/v2/sports/football/ufl/scoreboard` | UFL events (off-season may be empty) |
| 8 | `https://site.api.espn.com/apis/site/v2/sports/lacrosse/nll/scoreboard` | NLL events |
| 9 | `https://app.ticketmaster.com/discovery/v2/venues.json?keyword=Dickies%20Arena&apikey={YOUR_KEY}` | Venue ID; then events with `classificationName=Sports` |
| 10 | Same as 9 for Allstate Arena, Toyota Arena (Ontario), Pechanga Arena, Climate Pledge Arena, Credit Union of Texas Event Center, Toyota Stadium, Grand Prairie Stadium | Which buildings the sweep can see |
| 11 | Open theahl.com, open your browser's network tab, load the schedule page | The `lscluster.hockeytech.com/feed/` request and its exact parameters |
| 12 | `https://lscluster.hockeytech.com/game_reports/text-game-report.php?client_code=ahl&game_id={GAME_ID}&lang_id=1` | An attendance line |
| 13 | `https://cf.nascar.com/cacher/2026/1/race_list_basic.json` | Texas, Chicagoland, EchoPark races and their fields |

### Terms pages to read by hand

| Source | Where |
|---|---|
| MLB Stats API (MiLB, partner leagues) | [gdx.mlb.com/components/copyright.txt](http://gdx.mlb.com/components/copyright.txt), plus MLB.com's Terms of Use |
| ESPN site API | [disneytermsofuse.com](https://disneytermsofuse.com), English version; look for the automated-access clause |
| HockeyTech leagues | Terms of Use links in the footers of theahl.com, echl.com, thepwhl.com, whl.ca; if none covers the feed, email the league |
| Ticketmaster | The terms on Ticketmaster's developer portal (you accepted them for your key; re-read the caching and display clauses for sports) |
| NASCAR | NASCAR.com Terms of Use |
| USL, UFL, MLC, MASL, MLS | Footer terms on each league site (I didn't check any of them) |
| School athletics sites | Each school's site terms, before using a calendar export |
