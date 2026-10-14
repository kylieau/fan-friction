# Pittsburgh: follow-up on city-build gaps

**Answer dated:** Tuesday, October 13, 2026; **second pass Oct 14, 2026** (research done in America/Los_Angeles; game times below are US Eastern unless marked UTC). Facts added in the second pass are marked **(2nd pass)**.
**Scope:** Research only. This does not approve a city build. It covers only the "What to research" items in [pittsburgh-gaps-followup-prompt.md](pittsburgh-gaps-followup-prompt.md). Venue row IDs (A01–A30, P1–P2, B01–B15) come from [pittsburgh-venue-table-answer.md](pittsburgh-venue-table-answer.md).

> **Missing input:** the brief refers to a "city-type answer" (`pittsburgh-city-type-answer.md`). It was **not provided** for this pass, so this answer doesn't use it or cross-check against it. City type, fan mode splits and car shares were not redone here.

**Labels used**

- **Official** = team, league, university, or league/team data feed (MLB Stats API, NHL web API, Ticketmaster's own site or blog).
- **Secondary** = reference site (Pro-Football-Reference, Baseball-Reference, Hockey-Reference) or a third-party data feed used for display (ESPN). ESPN team colors are display values in a data feed, **not** a brand guide.
- **Derived** = arithmetic on figures from one cited source (method stated).
- **Gap** = not found in a public source in this pass (what was tried is stated).

**Access limits in this pass (please read)**

- **Web search budget was used up partway through.** The shared search limit ran out after the first Ticketmaster lookups. Everything after that came from direct fetches of pages already found, or official data endpoints. Rooms and facts that needed a new search are marked "not verified" or "gap".
- **ticketmaster.com venue pages could not be fetched** (the fetch tool returned a client error on [the Acrisure Stadium page](https://www.ticketmaster.com/acrisure-stadium-tickets-pittsburgh/venue/180306?ac_link=blog)). IDs were confirmed from Ticketmaster's own venue-page URLs, either as returned (with venue titles) by a search restricted to ticketmaster.com, or as linked from Ticketmaster's own blog. The page bodies were not opened. No other route was used.
- **Rate limiting (HTTP 429) from the fetch proxy** blocked these pages, which were not retried: [Wikipedia: Pittsburgh Riverhounds SC](https://en.wikipedia.org/wiki/Pittsburgh_Riverhounds_SC); ESPN Riverhounds schedule feeds for [2024](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams/17827/schedule?season=2024) and [2023](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams/17827/schedule?season=2023); MLB Stats API Pirates schedules for [2025](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=134&season=2025&gameType=R) and [2026](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=134&season=2026&gameType=R).
- **Blocked or failed:** NHL logo asset server ([assets.nhle.com](https://assets.nhle.com/logos/nhl/svg/PIT_dark.svg)) refused by robots.txt. [MLB logo SVG](https://www.mlbstatic.com/team-logos/134.svg) returned a server error. Robert Morris brand page (`rmu.edu/brand`) returned an error. Duquesne `duq.edu/about/brand` returned a 404. ESPN's NFL, MLB and NHL attendance pages returned empty content (script-rendered). ESPN's full NHL team list was cut off before the Penguins entry.
- **Second pass (Oct 14, 2026):** used about 25 web searches, plus direct fetches. The search limit was not hit. NCAA official attendance files were unreadable ([fs.ncaa.org PDF](http://fs.ncaa.org/Docs/stats/m_basketball_RB/2024/Attend.pdf): redirect loop; current PDF blocked by robots.txt; [stats.ncaa.org](https://stats.ncaa.org/reports/attendance?id=22597): client error), so college crowds come from Wikipedia (secondary). The fetch tool cuts long feeds at about 77–82K characters, so the NHL full-season and MLB full-season schedules were read in parts (date windows for MLB). Ticketmaster pages were still not opened.

---

## Build-rule notes (for whoever turns this into app data)

These are copied from the brief so they travel with the data:

1. **Every venue ID and team ID must be unique across all cities.** `giants`, `jets`, `rangers`, `kings` and `cardinals` are already taken, so add a city prefix. For Pittsburgh, this matters for generic nicknames such as `pirates`, `penguins`, `panthers` (Pitt), `dukes` (Duquesne), `colonials` (RMU) and `riverhounds`. A prefix like `pit-` keeps them unique. Note that ESPN uses **PIT** for the four pro teams but **PITT** for the University of Pittsburgh ([ESPN college-football team 221](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/221)), so the code alone won't tell pro and college apart.
2. **Don't make a separate per-city opponents file.** Opponent draws go into `expectedDrawIndex`, like every other city.
3. **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list. This applies to every threshold case in section 2c of the venue answer (A09, A11, A12, A13, A14, A15, A16, A19, A26).
4. **Car shares:** wire measured ones; wire sourced estimates marked "estimated"; leave the rest on the city default. (The city-type answer that holds these was not provided for this pass.)
5. **Extra matching cautions found in this pass:**
   - Ticketmaster has **one venue ID for "STAGE AE"** ([180952](https://www.ticketmaster.com/stage-ae-tickets-pittsburgh/venue/180952)), not separate IDs for the outdoor (A12) and indoor (A25) rooms. A Ticketmaster event can't be assigned to A12 or A25 from the venue ID alone.
   - Ticketmaster's F.N.B. Stadium page still uses the old **"highmark-stadium" URL slug** ([180985](https://www.ticketmaster.com/highmark-stadium-tickets-pittsburgh/venue/180985)), and ESPN's 2025 Riverhounds playoff records name the venue "Highmark Stadium" ([ESPN event 760866](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/summary?event=760866)). Match on venue ID, not name.
   - Feeds can mark an abroad game as a **home game**. ESPN lists the Steelers as home for the Dublin game but sets `neutralSite: true` ([ESPN 2025 schedule](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/pit/schedule?season=2025)). Hockey-Reference lists the Penguins' Stockholm game as a home game with only a note ([2025-26 game log](https://www.hockey-reference.com/teams/PIT/2026_games.html)). Season home-attendance totals from reference sites **include** these abroad games (see section 5).

---

## 1. Name, short form, code and covered area

### Display name: "Pittsburgh"

Unlike Tampa Bay, there is **no regional rename**. Every major team uses "Pittsburgh" in its display name in league and data feeds:

| Team | Display name in feed | Abbreviation in feed | Source |
|---|---|---|---|
| Steelers (NFL) | Pittsburgh Steelers | PIT | [ESPN NFL team 23](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/pit) |
| Pirates (MLB) | Pittsburgh Pirates | PIT | [MLB Stats API team 134](https://statsapi.mlb.com/api/v1/teams/134) (official); [ESPN MLB team 23](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/pit) |
| Penguins (NHL) | Pittsburgh Penguins | PIT | [ESPN NHL team 16](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/pit); NHL's own API keys the club schedule on `PIT` ([NHL web API](https://api-web.nhle.com/v1/club-schedule-season/PIT/now)) |
| Riverhounds SC (USL Championship) | Pittsburgh Riverhounds | PIT | [ESPN USL Championship teams](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams) |
| Pitt Panthers (NCAA) | Pittsburgh Panthers | **PITT** | [ESPN college-football team 221](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/221) |

### Short form

**2nd pass:** Wikipedia's "Name of Pittsburgh" article says "**PGH** is a common three-letter abbreviation for the city name, for example as the Amtrak code for Union Station", and it notes uses such as the Pirates' City Connect jersey and the WPGH-TV call sign. It gives "Da 'Burgh" as an affectionate local nickname ([Wikipedia: Name of Pittsburgh](https://en.wikipedia.org/wiki/Name_of_Pittsburgh), secondary). So the sourced local short form is **"PGH"** (written "Pgh" in running text), with "the 'Burgh" as an informal nickname. Whether to display "PGH" or keep "Pittsburgh" (already short) is a build choice; it isn't decided here.

### Three-letter code: **PIT**

The lead code is supported: the NFL, MLB, NHL and USL Championship teams all carry **PIT** in ESPN's feed, and both MLB's and the NHL's own APIs use **PIT** (sources in the table above). PIT is also the IATA code for Pittsburgh International Airport ([Wikipedia: Name of Pittsburgh](https://en.wikipedia.org/wiki/Name_of_Pittsburgh), 2nd pass). Don't use "PGH" as the code: it is the Amtrak station code (same source).

### Covered area

Use the **eight-county Pittsburgh Metropolitan Statistical Area** that the venue answer recommends:

- **Allegheny** (core county)
- **Armstrong**
- **Beaver**
- **Butler**
- **Fayette**
- **Lawrence**, added in the [July 2023 OMB delineation](https://businessjournaldaily.com/?p=202071)
- **Washington: in**
- **Westmoreland: in**

The eight-county definition is used by BLS in its [May 2025 occupational release](https://www.bls.gov/regions/mid-atlantic/news-release/2026/occupationalemploymentandwages_pittsburgh_20260710.htm). The venue answer's rows already span all eight counties (for example, A03 Star Lake and A15 EQT Park are in Washington County; A11 Westmoreland Fairgrounds is in Westmoreland).

**Naming caution inside the area:** the Washington Wild Things (A15) are named after Washington, PA (Washington County), not Washington, DC ([Ticketmaster EQT Park, Washington, PA](https://www.ticketmaster.com/eqt-park-tickets-washington/venue/180442)). Feed matching on the team or city name "Washington" could pull in DC teams.

---

## 2. Ticketmaster venue IDs for concert rooms

**Method:** an ID is "verified" only if it appears in a Ticketmaster venue-page URL (`ticketmaster.com/.../venue/NNNNNN`), either:

- returned with a matching venue title by a search restricted to ticketmaster.com, or
- linked from Ticketmaster's own blog page about that venue.

The ticketmaster.com pages themselves could not be opened (fetch error; see access limits above), so event-level room matching was **not** tested. No Discovery API key was used.

**Rule from the brief:** a room with no verified ID ships with no concerts there.

| Venue row ID | Room | Ticketmaster venue ID | Verification link | How confirmed |
|---|---|---|---|---|
| A01 | Acrisure Stadium | **180306** | [ticketmaster.com/acrisure-stadium-tickets-pittsburgh/venue/180306](https://www.ticketmaster.com/acrisure-stadium-tickets-pittsburgh/venue/180306?ac_link=blog) | Linked from Ticketmaster's [Acrisure Stadium blog guide](https://blog.ticketmaster.com/step-inside-acrisure-stadium-pittsburgh-pa/) |
| A02 | PNC Park | **180453** | [ticketmaster.com/pnc-park-tickets-pittsburgh/venue/180453](https://www.ticketmaster.com/pnc-park-tickets-pittsburgh/venue/180453?ac_link=BLOG_step-inside-pnc-park) | Linked from Ticketmaster's [PNC Park blog guide](https://blog.ticketmaster.com/step-inside-pnc-park-home-of-the-pittsburgh-pirates) |
| A03 | The Pavilion at Star Lake | **180232** | [ticketmaster.com/the-pavilion-at-star-lake-tickets-burgettstown/venue/180232](https://www.ticketmaster.com/the-pavilion-at-star-lake-tickets-burgettstown/venue/180232) | Ticketmaster venue page in search, titled "The Pavilion at Star Lake - Burgettstown, PA" |
| A04 | PPG Paints Arena | **180938** | [ticketmaster.com/ppg-paints-arena-tickets-pittsburgh/venue/180938](https://www.ticketmaster.com/ppg-paints-arena-tickets-pittsburgh/venue/180938) | Linked from Ticketmaster's [PPG Paints Arena blog guide](https://blog.ticketmaster.com/step-inside-ppg-paints-arena) |
| A05 | Petersen Events Center | **180764** | [ticketmaster.com/petersen-events-center-tickets-pittsburgh/venue/180764](https://www.ticketmaster.com/petersen-events-center-tickets-pittsburgh/venue/180764) | Ticketmaster venue page in search, titled "Petersen Events Center - Pittsburgh, PA" |
| A12 | Stage AE — Outdoor Amphitheater | **180952 (shared with A25; room not separated)** | [ticketmaster.com/stage-ae-tickets-pittsburgh/venue/180952](https://www.ticketmaster.com/stage-ae-tickets-pittsburgh/venue/180952) | Ticketmaster venue page titled "STAGE AE - Pittsburgh, PA". **No separate outdoor ID found** (a search for one was blocked by the search budget). The room can't be matched from the venue ID alone |
| A13 | F.N.B. Stadium | **180985** | [ticketmaster.com/highmark-stadium-tickets-pittsburgh/venue/180985](https://www.ticketmaster.com/highmark-stadium-tickets-pittsburgh/venue/180985) | Ticketmaster venue page titled "F.N.B. Stadium - Pittsburgh, PA". The URL slug still says "highmark-stadium" |
| A15 | EQT Park | **180442** | [ticketmaster.com/eqt-park-tickets-washington/venue/180442](https://www.ticketmaster.com/eqt-park-tickets-washington/venue/180442) | Ticketmaster venue page titled "EQT Park - Washington, PA" |
| A16 | Citizens Live at The Wylie | **181242** | [ticketmaster.com/citizens-live-at-the-wylie-tickets-pittsburgh/venue/181242](https://www.ticketmaster.com/citizens-live-at-the-wylie-tickets-pittsburgh/venue/181242?page=1) | Ticketmaster venue page titled "Citizens Live at The Wylie - Pittsburgh, PA" |
| A23 | Benedum Center | **180228** | [ticketmaster.com/benedum-center-tickets-pittsburgh/venue/180228](https://www.ticketmaster.com/benedum-center-tickets-pittsburgh/venue/180228) | Ticketmaster venue page titled "Benedum Center - Pittsburgh, PA" |
| A24 | Heinz Hall | **180234** | [ticketmaster.com/heinz-hall-tickets-pittsburgh/venue/180234](https://www.ticketmaster.com/heinz-hall-tickets-pittsburgh/venue/180234) | Ticketmaster venue page titled "Heinz Hall - Pittsburgh, PA" |
| A25 | Stage AE — Indoor Music Hall | **180952 (shared with A12; room not separated)** | [ticketmaster.com/stage-ae-tickets-pittsburgh/venue/180952](https://www.ticketmaster.com/stage-ae-tickets-pittsburgh/venue/180952) | Same as A12. The 300-capacity club has its own ID, [180958 "The Club at Stage AE"](https://www.ticketmaster.com/the-club-at-stage-ae-tickets-pittsburgh/venue/180958), but it is below threshold and not a venue row |
| A28 | Roxian Theatre | **181090** | [ticketmaster.com/roxian-theatre-tickets-pittsburgh/venue/181090](https://www.ticketmaster.com/roxian-theatre-tickets-pittsburgh/venue/181090?tab=seatingCharts?ac_link=blog) | Linked from Ticketmaster's [Roxian blog guide](https://blog.ticketmaster.com/step-inside-roxian-theatre-pittsburgh-pa/) |
| A29 | Byham Theater | **180229** | [ticketmaster.com/byham-theater-tickets-pittsburgh/venue/180229](https://www.ticketmaster.com/byham-theater-tickets-pittsburgh/venue/180229) | Ticketmaster venue page titled "Byham Theater - Pittsburgh, PA" |
| A09 | PennWest California Convocation Center | **180979** (2nd pass) | [ticketmaster.com/convocation-center-at-california-university-of-tickets-california/venue/180979](https://www.ticketmaster.com/convocation-center-at-california-university-of-tickets-california/venue/180979) | Ticketmaster venue page in search, titled "Convocation Center at California University of Pennsylvania - California, PA" (pre-2022 university name) |
| A11 | Westmoreland Fairgrounds grandstand | **180256** (2nd pass; fairgrounds-level, not grandstand-specific) | [ticketmaster.com/westmoreland-fairgrounds-tickets-latrobe/venue/180256](https://www.ticketmaster.com/westmoreland-fairgrounds-tickets-latrobe/venue/180256) | Ticketmaster venue page in search, titled "Westmoreland Fairgrounds - **Latrobe**, PA". Caution: the venue answer places the fairgrounds in Mt. Pleasant Twp (123 Blue Ribbon Lane), so the city label differs; the ID covers the whole fairgrounds, so the grandstand room can't be confirmed from it |
| A14 | Fayette County Fairgrounds grandstand | not verified | not verified | 2nd pass: two searches (one restricted to ticketmaster.com/livenation.com) found **no Ticketmaster venue page**. Only SeatGeek venue pages appeared ([SeatGeek](https://seatgeek.com/venues/fayette-county-fairgrounds-1/tickets)), which aren't Ticketmaster IDs |
| A22 | Scottish Rite Cathedral, New Castle | **180317** (2nd pass) | [ticketmaster.com/scottish-rite-cathedral-tickets-new-castle/venue/180317](https://www.ticketmaster.com/scottish-rite-cathedral-tickets-new-castle/venue/180317) | Ticketmaster venue page in search, titled "Scottish Rite Cathedral - New Castle, PA". Don't confuse it with Reading (16707) or Harrisburg (16464) Scottish Rite venues |
| A27 | Carnegie Music Hall (Oakland) | **180276** (2nd pass) | [ticketmaster.com/carnegie-music-hall-of-oakland-tickets-pittsburgh/venue/180276](https://www.ticketmaster.com/carnegie-music-hall-of-oakland-tickets-pittsburgh/venue/180276) | Ticketmaster venue page in search, titled "Carnegie Music Hall of Oakland - Pittsburgh, PA". Don't confuse it with Carnegie Library Music Hall of **Homestead** ([180840](https://www.ticketmaster.com/carnegie-library-music-hall-of-homestead-tickets-homestead/venue/180840)), which is not a venue row |

**Totals (updated in 2nd pass):**

- **Verified:** 18 room rows, using **17 distinct IDs** (A12 and A25 share one; A11's ID is fairgrounds-level).
- **Not verified:** 1 room (A14). The 2nd-pass IDs were confirmed the same way as the first pass (Ticketmaster venue-page URL and title in search results). The pages themselves weren't opened.

**Not checked (sports or racing rooms with no concert use recorded in the venue answer):** A06, A07, A08, A10, A17, A18, A19, A20, A21, A26, A30. A19 (UPMC Cooper Fieldhouse) was described at opening as [not hosting concerts](https://nextpittsburgh.com/city-design/upmc-cooper-fieldhouse-opens-as-state-of-the-art-sporting-venue-at-duquesne-university/). Ticketmaster also has a page for Headliners, a small venue that is not a venue row ([180271](https://www.ticketmaster.com/headliners-tickets-pittsburgh/venue/180271)).

**Open issue for A12 and A25:** with one Ticketmaster ID for both Stage AE rooms, the build can't tell whether a show is outdoors (A12) or indoors (A25). Options are to keep both rows with no concerts, or to map the shared ID to one row and record it on the gaps list. Which to choose is a build decision; it isn't decided here.

---

## 3. Free schedule feeds per team

"Verified" means the feed endpoint was fetched in this pass and returned the team. ESPN's site API is public but unofficial (secondary). MLB Stats API and the NHL web API are the leagues' own feeds.

| Team | League | Home venue row ID | Free feed and ID | Verified? |
|---|---|---|---|---|
| Pittsburgh Steelers | NFL | A01 | ESPN NFL team **23** (abbr PIT): [team](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/pit), [schedule](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/pit/schedule?season=2026&seasontype=2) | Yes |
| Pittsburgh Pirates | MLB | A02 | MLB Stats API team **134**, venue **31** (PNC Park) ([team](https://statsapi.mlb.com/api/v1/teams/134)). Also ESPN MLB team **23** ([team](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/pit)) | Yes |
| Pittsburgh Penguins | NHL | A04 | NHL web API club code **PIT** ([schedule](https://api-web.nhle.com/v1/club-schedule-season/PIT/now)). Also ESPN NHL team **16** ([team](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/pit)) | Yes |
| Pittsburgh Riverhounds SC | USL Championship | A13 | ESPN soccer league `usa.usl.1`, team **17827** ([teams list](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams), [2025 schedule](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams/17827/schedule?season=2025)) | Yes |
| Pitt Panthers football | NCAA FBS (ACC per venue answer) | A01 | ESPN college-football team **221** (abbr PITT) ([team](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/221)) | Yes |
| Pitt men's and women's basketball | NCAA D-I | A05 | ESPN team **221** (abbr PITT) in both men's ([team](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/221)) and women's ([team](https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/teams/221)) college basketball; both list Petersen Events Center for the next home event (2nd pass) | **Yes (2nd pass)** |
| Pitt volleyball (women) | NCAA D-I | A17; A05 for larger and NCAA matches | ESPN `volleyball/womens-college-volleyball` team **221** (abbr PITT) ([team](https://site.api.espn.com/apis/site/v2/sports/volleyball/womens-college-volleyball/teams/221)). Caution: on Oct 14, 2026 its "next event" was still the Aug 23, 2026 match vs Kentucky at Fiserv Forum, Milwaukee, so the team endpoint's next-event field looked stale (2nd pass) | **Yes (2nd pass)**; freshness not tested |
| Duquesne Dukes basketball | NCAA D-I (A-10 per venue answer) | A19 | ESPN men's college basketball team **2184** (abbr DUQ) ([team](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2184)) | Yes (men's basketball only) |
| Duquesne football | NCAA D-I FCS | A26 | ESPN college-football team **2184** (abbr DUQ), conference group 25; standing summary "2nd in NEC" ([team](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2184)) (2nd pass) | **Yes (2nd pass)** |
| Robert Morris Colonials basketball | NCAA D-I (conference not sourced in this pass) | A18 | ESPN men's college basketball team **2523** (abbr RMU) ([team](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2523)) | Yes (men's basketball only) |
| Robert Morris football | NCAA D-I | A21 | ESPN college-football team **2523** (abbr RMU), conference group 25; standing summary "1st in NEC"; home games list Joe Walton Stadium ([team](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2523)) (2nd pass) | **Yes (2nd pass)** |
| Robert Morris hockey | NCAA D-I | A30; Three Rivers Classic at A04 | ESPN `hockey/mens-college-hockey` team **2523** (abbr RMU); next event Oct 15, 2026 at Miami (OH), Goggin Ice Center ([team](https://site.api.espn.com/apis/site/v2/sports/hockey/mens-college-hockey/teams/2523)) (2nd pass). Women's hockey not checked | **Yes, men's (2nd pass)** |
| Pittsburgh Riveters SC (added) | USL W League | A13 | No API feed found. Schedule only as club pages and per-match PDF reports on [riveterssc.com](https://www.riveterssc.com/wp-content/uploads/sites/151/2026/07/070326-vs-Louisville-CCS.pdf) (e.g. July 3, 2026 vs Louisville at F.N.B. Stadium) (2nd pass) | **No feed** (2nd pass: confirmed none found) |
| Pittsburgh Thunderbirds (added) | AUDL, now branded UFA | A13 | No API feed found. Team schedule page on the league site: [watchufa.com/thunderbirds/schedule](https://watchufa.com/thunderbirds/schedule) (listings didn't render in the fetch). League schedule: [watchufa.com/league/schedule](https://watchufa.com/league/schedule) ([source of links](https://watchufa.com/node/6078)) (2nd pass) | **No feed** (league web page only) |
| Riverhounds 2 (added) | USL League Two | A13 | None found (not re-searched in 2nd pass) | **No feed** (none verified) |
| Washington Wild Things (added) | Frontier League | A15 | MLB Stats API lists the team: **team 1978**, Frontier League **league 442**, sport 23 "Independent Leagues", venue shown as "TBD" (401) ([teams, sportId 23](https://statsapi.mlb.com/api/v1/teams?sportId=23)). But the schedule endpoint returned **0 games** for both [2026](https://statsapi.mlb.com/api/v1/schedule?sportId=23&teamId=1978&season=2026) and [2025](https://statsapi.mlb.com/api/v1/schedule?sportId=23&teamId=1978&season=2025) (2nd pass) | **No usable feed** (team ID exists, schedule empty) |
| PennWest California (added) | NCAA D-II | A08, A09, A15 | Not checked | **No feed** (none verified) |
| Slippery Rock (added) | NCAA D-II | A07, A20 | Not checked | **No feed** (none verified) |
| Geneva College football (added) | NCAA D-III | A10 | Not checked | **No feed** (none verified) |

**Teams with no free feed verified** (updated in 2nd pass: Pitt basketball and volleyball, Duquesne football, RMU football and men's hockey now have ESPN IDs and are removed from this list):

- Riveters SC
- Thunderbirds
- Riverhounds 2
- Washington Wild Things
- PennWest California
- Slippery Rock
- Geneva

Each of these still has the official schedule page listed in the venue answer, section 3.

**Feed quirk to handle:** ESPN's NFL team schedule only returned games through 2026 Week 6 (Oct 18) when fetched on Oct 13, 2026 ([ESPN 2026 regular season](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/pit/schedule?season=2026&seasontype=2)). Its ticket links still point to a "Heinz Field" venue page. Use the event's `venue` object, not the ticket link.

---

## 4. Games away from the home venue (2025 on)

| Team | Date | Matchup (designated home team) | Actual site | Home venue it must **not** be placed at | Crowd (label) | Source |
|---|---|---|---|---|---|---|
| Steelers | Sun Sep 28, 2025 (9:30 AM ET) | Vikings at **Steelers** (Steelers home) | **Croke Park, Dublin, Ireland** | A01 | 74,512 (Secondary, Pro-Football-Reference box score) | [PFR box score](https://www.pro-football-reference.com/boxscores/202509280pit.htm); ESPN flags `neutralSite: true` ([ESPN 2025](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/pit/schedule?season=2025)); kick time from [PFR 2025 schedule](https://www.pro-football-reference.com/teams/pit/2025.htm) |
| Penguins | Fri Nov 14, 2025 | Penguins at **Predators** (Nashville home) | **Avicii Arena, Stockholm, Sweden** | n/a (road game) | 12,766 (Secondary) | [Hockey-Reference 2025-26 game log](https://www.hockey-reference.com/teams/PIT/2026_games.html) |
| Penguins | Sun Nov 16, 2025 | Predators at **Penguins** (Penguins home) | **Avicii Arena, Stockholm, Sweden** | A04 | 12,723 (Secondary) | [Hockey-Reference 2025-26 game log](https://www.hockey-reference.com/teams/PIT/2026_games.html) |
| Riverhounds | Nov 22, 2025 (UTC date) | **Riverhounds** at FC Tulsa; ESPN labels it "Final" | **ONEOK Field, Tulsa, OK** | n/a (road game) | Not retrieved | [ESPN 2025 schedule](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams/17827/schedule?season=2025) |
| Steelers (2nd pass) | Sun Oct 25, 2026 (9:30 AM ET) | Steelers at **Saints** (Saints designated home) | **Stade de France, Paris, France** (first NFL game in Paris) | n/a (road game; not A01) | Upcoming | [NFL.com 2026 international games](https://www.nfl.com/news/2026-nfl-schedule-release-nine-international-games-dates-times-matchups); kick time on [PFR 2026 schedule](https://www.pro-football-reference.com/teams/pit/2026.htm) |
| Duquesne men's basketball (2nd pass) | Mar 12–13, 2026 | A-10 tournament (neutral; Duquesne vs Rhode Island, then vs VCU) | **PPG Paints Arena (A04)**, not Duquesne's A19 | A19 | Not shown | [Wikipedia 2025-26 Duquesne](https://en.wikipedia.org/wiki/2025%E2%80%9326_Duquesne_Dukes_men%27s_basketball_team) (secondary) |

**Checked with no relocated home games found:**

- **Steelers, 2026 through Week 6 (Oct 18, 2026):** all games have `neutralSite: false`; home games are at Acrisure Stadium ([ESPN](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/pit/schedule?season=2026&seasontype=2)).
- **Steelers, 2026 Weeks 7–18 (2nd pass):** home games are Week 8 Nov 1 (Browns), Week 12 Fri Nov 27 (Broncos), Week 13 Dec 6 (Texans), Week 15 Dec 20 (Ravens) and Week 16 Dec 27 (Panthers); bye in Week 9 ([PFR 2026 schedule](https://www.pro-football-reference.com/teams/pit/2026.htm), secondary). None of these is on the NFL's list of nine 2026 international games; the only Steelers international game is the Week 7 **road** game in Paris ([NFL.com](https://www.nfl.com/news/2026-nfl-schedule-release-nine-international-games-dates-times-matchups)). **No relocated Steelers home game in 2026.** PFR does not print the venue for home games, so A01 is inferred from the absence of any international or neutral note.
- **Penguins, 2026-27 through Dec 15, 2026:** no home games away from PPG Paints Arena and every game has `neutralSite: false` ([NHL web API](https://api-web.nhle.com/v1/club-schedule-season/PIT/now)). Re-checked in the 2nd pass with the [full-season endpoint](https://api-web.nhle.com/v1/club-schedule-season/PIT/20262027): same result, but the fetch tool's text cut off at the Dec 15, 2026 game again, so later games could not be read from the feed.
- **Penguins after Dec 15, 2026 (2nd pass):** the NHL's 2026-27 schedule release lists all special events: Heritage Classic (Jets vs Canadiens, Winnipeg, Oct 25, 2026), Global Series Finland (Hurricanes vs Kraken, Helsinki, Nov 12 and 14), Global Series Germany (Senators vs Blackhawks, Düsseldorf, Dec 18 and 20), Winter Classic (Mammoth vs Avalanche, Rice-Eccles Stadium, Salt Lake City, Dec 31, 2026) and Stadium Series (Stars vs Golden Knights, AT&T Stadium, Arlington, Feb 20, 2027). **None involves the Penguins** ([NHL.com 2026-27 schedule release](https://www.nhl.com/news/nhl-announces-2026-27-regular-season-schedule); Winter Classic also on [Wikipedia](https://en.wikipedia.org/wiki/2027_NHL_Winter_Classic)). So **no Penguins home game away from A04 is announced for 2026-27.** Watch item: the 2027 Global Series games in Munich (Bruins) and Cologne (Oilers) are in the **2027-28** season and their opponents haven't been named ([NHL.com](https://www.nhl.com/news/2027-nhl-global-series-germany-features-boston-edmonton)).
- Hockey-Reference's 2025-26 game log has no venue notes other than Stockholm, so no Penguins outdoor game took place in 2025-26 ([Hockey-Reference](https://www.hockey-reference.com/teams/PIT/2026_games.html)).
- **Pirates 2025 and 2026 (2nd pass):** every Pirates home game is at PNC Park (venue 31), with no neutral or special-event venues, in the MLB Stats API regular-season schedule. Checked in date windows because the full-season response was cut off: 2025 [full season to May 30](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=134&season=2025&gameType=R) (29 home games), [May 31 – Jul 30](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=134&startDate=2025-05-31&endDate=2025-07-31&gameType=R) (27), [Aug 1 – Sep 28](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=134&startDate=2025-07-31&endDate=2025-10-05&gameType=R) (25): 81 in all, which matches the 81 home openings in section 5b. 2026: [to May 29](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=134&season=2026&gameType=R), [May 29 – Jul 31](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=134&startDate=2026-05-29&endDate=2026-07-31&gameType=R), [Jul 31 – Sep 27](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=134&startDate=2026-07-31&endDate=2026-10-05&gameType=R). The 2026 windows overlap by a day at each boundary, so their counts aren't summed. **No Pirates home games away from A02 in 2025–2026.**

**Gaps:**
- **College neutral-site games:** partly filled in the 2nd pass. Pitt bowl sites for 2024 and 2025 and the Pitt, Duquesne and RMU men's basketball tournament sites are now in section 5e. No Pitt–Duquesne City Game at A04 appears in the Pitt men's 2023-24 to 2025-26 schedules. Still not retrieved: RMU's Three Rivers Classic dates and Pitt volleyball matches moved from A17 to A05. These are known patterns from the venue answer (section 3 there), so each game needs its own venue match.

---

## 5. Postseason and past crowds per team

**Range covered:** 2023 through Oct 13, 2026 for MLB and NFL. 2022-23 through 2026-27 (to date) for the NHL. 2025 only for the Riverhounds. **Postseason and regular season are kept separate.** All counts are announced attendance as reported by the cited source.

### 5a. Pittsburgh Steelers (NFL), A01

**Regular season, home attendance by season** (Secondary: Pro-Football-Reference attendance tables)

| Season | Home total | Home games | Notes | Source |
|---|---|---|---|---|
| 2023 | 602,796 | Not retrieved | — | [PFR 2023 attendance](https://www.pro-football-reference.com/years/2023/attendance.htm) |
| 2024 | 535,045 | Not retrieved | — | [PFR 2024 attendance](https://www.pro-football-reference.com/years/2024/attendance.htm) |
| 2025 | 604,923 | 9 designated home games ([PFR schedule](https://www.pro-football-reference.com/teams/pit/2025.htm): weeks 2, 4, 6, 8, 9, 11, 13, 15, 18) | **Includes the Dublin game (74,512).** Acrisure-only total: 530,411 across 8 games (Derived: 604,923 − 74,512) | [PFR 2025 attendance](https://www.pro-football-reference.com/years/2025/attendance.htm); [Dublin box score](https://www.pro-football-reference.com/boxscores/202509280pit.htm) |
| 2026 (to date) | Gap | — | Season in progress | — |

**Postseason**

| Season | Result | Home playoff game(s) | Announced attendance | Source |
|---|---|---|---|---|
| 2023 | Lost Wild Card | Site not retrieved (PFR index shows only "Lost WC") | — | [PFR team index](https://www.pro-football-reference.com/teams/pit/) |
| 2024 | Lost Wild Card | Site not retrieved (as above) | — | [PFR team index](https://www.pro-football-reference.com/teams/pit/) |
| 2025 | Lost Wild Card | **Mon Jan 12, 2026, Texans at Steelers, Acrisure Stadium (A01), L 6–30** (ESPN event 401772976) | **67,297** (ESPN feed) | [ESPN 2025 postseason](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/pit/schedule?season=2025&seasontype=3); result also on [PFR](https://www.pro-football-reference.com/teams/pit/2025.htm) |

### 5b. Pittsburgh Pirates (MLB), A02

**Regular season** (Official: MLB Stats API attendance endpoint, gameType R)

| Season | Home openings | Home total | Home average | High (date) | Low (date) | Source |
|---|---|---|---|---|---|---|
| 2023 | 81 | 1,630,624 | 20,131 | 39,167 (2023-04-07) | 8,594 (2023-09-06) | [MLB Stats API 2023](https://statsapi.mlb.com/api/v1/attendance?teamId=134&season=2023) |
| 2024 | 81 | 1,720,361 | 21,239 | 39,530 (2024-07-19) | 8,461 (2024-04-22) | [MLB Stats API 2024](https://statsapi.mlb.com/api/v1/attendance?teamId=134&season=2024) |
| 2025 | 81 | 1,525,025 | 18,827 | 38,041 (2025-07-19) | 8,250 (2025-04-07) | [MLB Stats API 2025](https://statsapi.mlb.com/api/v1/attendance?teamId=134&season=2025) |
| 2026 | 81 | 1,704,229 | 21,040 | 39,105 (2026-07-25) | 8,446 (2026-04-06) | [MLB Stats API 2026](https://statsapi.mlb.com/api/v1/attendance?teamId=134&season=2026) |

Season totals match [Baseball-Reference](https://www.baseball-reference.com/teams/PIT/) (Secondary). The 2025 figure also matches the venue answer.

**Postseason:** **none, 2022–2026.** The playoffs column is blank for every season on [Baseball-Reference](https://www.baseball-reference.com/teams/PIT/), and the 2026 record was 82-80 (3rd of 5). No home postseason crowds exist for this range.

### 5c. Pittsburgh Penguins (NHL), A04

**Regular season** (Secondary: Hockey-Reference game logs. Totals and averages are Derived by summing the per-game "Att." column for games without an "@")

| Season | Home games | Home total | Home average | Notes | Source |
|---|---|---|---|---|---|
| 2022-23 | 41 | 730,458 | 17,816 | — | [H-R 2022-23 games](https://www.hockey-reference.com/teams/PIT/2023_games.html) |
| 2023-24 | 41 | 734,252 | 17,909 | — | [H-R 2023-24 games](https://www.hockey-reference.com/teams/PIT/2024_games.html) |
| 2024-25 | 41 | 682,035 | 16,635 | — | [H-R 2024-25 games](https://www.hockey-reference.com/teams/PIT/2025_games.html) |
| 2025-26 | 41 (incl. Stockholm) | 695,956 | 16,975 | **At PPG Paints Arena only: 40 games, 683,233, average 17,081** (excludes the Nov 16, 2025 Stockholm game, 12,723) | [H-R 2025-26 games](https://www.hockey-reference.com/teams/PIT/2026_games.html) |
| 2026-27 (to Oct 10, 2026) | 3 | 54,341 | 18,114 | Oct 3: 18,382; Oct 5: 17,767; Oct 10: 18,192 | [H-R 2026-27 games](https://www.hockey-reference.com/teams/PIT/2027_games.html) |

**Postseason**

| Season | Result | Home playoff games | Announced attendance | Source |
|---|---|---|---|---|
| 2022-23 | No playoff result shown (finished 5th in Metropolitan) | None found | — | [H-R 2022-23](https://www.hockey-reference.com/teams/PIT/2023.html) |
| 2023-24 | No playoff result shown (5th in Metropolitan) | None found | — | [H-R 2023-24](https://www.hockey-reference.com/teams/PIT/2024.html) |
| 2024-25 | No playoff result shown (7th in Metropolitan) | None found | — | [H-R 2024-25](https://www.hockey-reference.com/teams/PIT/2025.html) |
| 2025-26 | Lost First Round 2–4 to Philadelphia (41-25-16, 2nd in Metropolitan) | Game 1, Apr 18, 2026 | 18,346 | [H-R 2025-26](https://www.hockey-reference.com/teams/PIT/2026.html); [game log](https://www.hockey-reference.com/teams/PIT/2026_games.html) |
| | | Game 2, Apr 20, 2026 | 18,308 | same |
| | | Game 5, Apr 27, 2026 | 18,343 | same |

For 2022-23 to 2024-25, the Hockey-Reference season pages show no playoff result. That is consistent with no home playoff games, but an explicit "missed playoffs" source was not retrieved.

### 5d. Pittsburgh Riverhounds SC (USL Championship), A13

**Postseason** (ESPN feed `gameInfo.attendance`. Venue named "Highmark Stadium", which is A13 before its April 2026 rename)

| Season | Round | Date | Opponent | Result | Announced attendance | Source |
|---|---|---|---|---|---|---|
| 2025 | Eastern Conference Quarterfinal | Nov 1, 2025 (UTC date) | Hartford Athletic | 0–0, won 4–2 on penalties | 4,932 | [ESPN event 760204](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/summary?event=760204) |
| 2025 | Eastern Conference Semifinal | Nov 8, 2025 local (Nov 9, 00:30 UTC) | Detroit City FC | 0–0, won 4–3 on penalties | 6,220 | [ESPN event 760613](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/summary?event=760613) |
| 2025 | Eastern Conference Final | Nov 15, 2025 | Rhode Island FC | Won 1–0 | 6,745 (matches the A13 record in the venue answer) | [ESPN event 760866](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/summary?event=760866) |
| 2025 | Final (road game) | Nov 22, 2025 (UTC date) | at FC Tulsa, ONEOK Field | 0–0, won 5–3 on penalties | Not retrieved (not a home game) | [ESPN 2025 schedule](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams/17827/schedule?season=2025) |
| 2023 | Eastern Conference Quarterfinal (2nd pass) | Oct 21, 2023 (UTC date) | Detroit City FC | Lost 0–1 | **6,123** (home, "Highmark Stadium" = A13) | [ESPN event 689305](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/summary?event=689305); listed in [ESPN 2023 schedule](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams/17827/schedule?season=2023) |
| 2024 | Eastern Conference Quarterfinal (2nd pass) | Nov 2, 2024 (UTC date) | at Charleston Battery, Patriots Point, Mount Pleasant, SC | Lost 0–1 | **No home playoff game** (road game; attendance not retrieved) | [ESPN 2024 schedule, event 722852](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams/17827/schedule?season=2024) |
| 2026 | — | — | — | — | Season in progress; no postseason games yet in the [ESPN 2026 feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams/17827/schedule?season=2026) (2nd pass) | — |

**Regular season (2nd pass)** (Secondary: Wikipedia year-by-year table, "Average attendance (league)" column; regular-season basis per the table heading, not independently confirmed)

| Season | Average home attendance | Playoff result (same table) | Source |
|---|---|---|---|
| 2023 | 5,077 | R1 | [Wikipedia: Pittsburgh Riverhounds SC](https://en.wikipedia.org/wiki/Pittsburgh_Riverhounds_SC) |
| 2024 | 5,089 | R1 | same |
| 2025 | 4,965 | W (champions) | same |
| 2026 | Gap (no row yet; season in progress) | — | same |

The 2023 and 2024 averages above 5,000 match the venue answer's note that averages beat the 5,000 capacity using standing room ([VisitPittsburgh](https://www.visitpittsburgh.com/blog/insiders-guide-pittsburgh-riverhounds)). Season totals and game counts were not retrieved. All four 2026 home games returned by the ESPN feed (Aug 8 – Sep 12, 2026) are at "Highmark Stadium" (A13), so no relocated home games were found; the fetch summary said the list may have been cut off.

### 5e. College and other teams

**Second-pass college crowd tables (2nd pass).** Source for all of these: Wikipedia season pages (**Secondary**), which list the announced attendance per game in the schedule table. Totals and averages are **Derived** (sum of listed home-game figures divided by the number of games with a figure; exhibitions excluded). Official NCAA attendance reports could not be read: [fs.ncaa.org men's basketball PDF](http://fs.ncaa.org/Docs/stats/m_basketball_RB/2024/Attend.pdf) got stuck in an HTTP/HTTPS redirect, the current-season PDF was blocked by robots.txt, and [stats.ncaa.org attendance report](https://stats.ncaa.org/reports/attendance?id=22597) returned a client error. Not retried another way.

**Pitt football at A01 (regular season)**

| Season | Home games with figure | Total (derived) | Average (derived) | High (date) | Postseason | Source |
|---|---|---|---|---|---|---|
| 2023 | 6 | 288,733 | 48,122 | 57,557 vs Florida State (Nov 4) | None (3–9) | [Wikipedia 2023](https://en.wikipedia.org/wiki/2023_Pittsburgh_Panthers_football_team) |
| 2024 | 7 | 371,539 | 53,077 | 66,087 vs West Virginia (Sep 14) | GameAbove Sports Bowl, Ford Field, Detroit: 26,219 (neutral, not a home game) | [Wikipedia 2024](https://en.wikipedia.org/wiki/2024_Pittsburgh_Panthers_football_team) |
| 2025 | 7 | 362,917 | 51,845 | 68,400 vs Notre Dame (Nov 15) | Military Bowl vs East Carolina, Dec 27, Navy–Marine Corps Memorial Stadium, Annapolis: 17,016 (neutral) | [Wikipedia 2025](https://en.wikipedia.org/wiki/2025_Pittsburgh_Panthers_football_team) |
| 2026 (to Oct 14) | 2 | 89,855 | 44,928 | Sep 5 vs Miami (OH) 43,929; Sep 12 vs UCF 45,926 | Season in progress | [Wikipedia 2026](https://en.wikipedia.org/wiki/2026_Pittsburgh_Panthers_football_team) |

Caution: the 2026 games use the reduced 51,416 setup (venue answer, A01); 2023–2025 used the full stadium.

**Pitt men's basketball at A05 (regular season)**

| Season | Home games with figure | Total (derived) | Average (derived) | High | Home postseason | Source |
|---|---|---|---|---|---|---|
| 2023-24 | 18 | 157,535 | 8,752 | 12,094 vs Virginia Tech (Feb 24, 2024) | None. ACC Tournament games at Capital One Arena, Washington, DC | [Wikipedia 2023-24](https://en.wikipedia.org/wiki/2023%E2%80%9324_Pittsburgh_Panthers_men%27s_basketball_team) |
| 2024-25 | 17 | 136,054 | 8,003 | 11,277 vs North Carolina (Jan 28, 2025) | None. ACC first round at Spectrum Center, Charlotte | [Wikipedia 2024-25](https://en.wikipedia.org/wiki/2024%E2%80%9325_Pittsburgh_Panthers_men%27s_basketball_team) |
| 2025-26 | 18 | 103,363 | 5,742 | 10,804 vs Duke (Feb 10, 2026) | None. ACC first and second rounds at Spectrum Center, Charlotte | [Wikipedia 2025-26](https://en.wikipedia.org/wiki/2025%E2%80%9326_Pittsburgh_Panthers_men%27s_basketball_team) |

No Pitt men's home game away from A05 is listed in these three seasons (no City Game at A04 shown). Pitt women's basketball crowds were not checked (gap).

**Duquesne men's basketball at A19 (regular season)**

| Season | Home games with figure | Total (derived) | Average (derived) | High | Postseason (all neutral or away unless stated) | Source |
|---|---|---|---|---|---|---|
| 2023-24 | 16 (of 17; Nov 13 vs Stony Brook has no figure) | 41,029 | 2,564 | 3,724 vs Dayton (Jan 12, 2024) | A-10 tournament at Barclays Center, Brooklyn (6,432; 6,327; 8,037; 7,805; won title). NCAA at CHI Health Center, Omaha (vs BYU no figure; vs Illinois 17,387) | [Wikipedia 2023-24](https://en.wikipedia.org/wiki/2023%E2%80%9324_Duquesne_Dukes_men%27s_basketball_team) |
| 2024-25 | 16 | 38,610 | 2,413 | 3,218 vs Dayton (Jan 21, 2025) | A-10 second round at Capital One Arena, Washington, DC (no figure) | [Wikipedia 2024-25](https://en.wikipedia.org/wiki/2024%E2%80%9325_Duquesne_Dukes_men%27s_basketball_team) |
| 2025-26 | 18 | 40,673 | 2,260 | 2,956 vs Dayton (Jan 13, 2026) | **A-10 tournament at PPG Paints Arena (A04), Pittsburgh**: Mar 12, 2026 vs Rhode Island (W); Mar 13, 2026 vs VCU (L). Attendance not shown. Neutral-site conference games, not Duquesne home games | [Wikipedia 2025-26](https://en.wikipedia.org/wiki/2025%E2%80%9326_Duquesne_Dukes_men%27s_basketball_team) |

**Robert Morris men's basketball at A18 (regular season)**

| Season | Home games with figure | Total (derived) | Average (derived) | High | Home postseason (announced) | Source |
|---|---|---|---|---|---|---|
| 2023-24 | 16 | 14,791 | 924 | 1,555 vs Cleveland State (Feb 25, 2024) | None. Horizon first round at Fort Wayne (959) | [Wikipedia 2023-24](https://en.wikipedia.org/wiki/2023%E2%80%9324_Robert_Morris_Colonials_men%27s_basketball_team) |
| 2024-25 | 17 | 18,106 | 1,065 | 1,611 vs Milwaukee (Feb 23, 2025) | **Mar 6, 2025, Horizon quarterfinal vs Wright State, A18: 4,058.** Later rounds in Indianapolis; NCAA first round at Rocket Arena, Cleveland | [Wikipedia 2024-25](https://en.wikipedia.org/wiki/2024%E2%80%9325_Robert_Morris_Colonials_men%27s_basketball_team) |
| 2025-26 | 15 (of 16; Nov 28 vs Southern Utah has no figure) | 20,456 | 1,364 | 1,921 vs Wright State (Feb 4, 2026) | **Mar 4, 2026, Horizon first round vs Youngstown State, A18: 3,537.** Semifinal in Indianapolis | [Wikipedia 2025-26](https://en.wikipedia.org/wiki/2025%E2%80%9326_Robert_Morris_Colonials_men%27s_basketball_team) |

Note: RMU's two home postseason crowds (4,058 and 3,537) are near A18's 4,000 capacity, far above its regular-season averages.

**Duquesne football at A26 and Robert Morris football at A21 (regular season, 2nd pass)**

| Team | Season | Home games | Total (derived) | Average (derived) | High | Home postseason | Source |
|---|---|---|---|---|---|---|---|
| Duquesne | 2023 | 4 | 7,289 | 1,822 | 3,052 vs Saint Francis (Oct 21) | None. FCS first round was at Youngstown State | [Wikipedia 2023](https://en.wikipedia.org/wiki/2023_Duquesne_Dukes_football_team) |
| Duquesne | 2024 | 5 | 10,146 | 2,029 | 2,956 vs LIU (Oct 5) | None | [Wikipedia 2024](https://en.wikipedia.org/wiki/2024_Duquesne_Dukes_football_team) |
| Duquesne | 2025 | 6 | 9,486 | 1,581 | 2,965 vs Saint Francis (Oct 11) | None listed | [Wikipedia 2025](https://en.wikipedia.org/wiki/2025_Duquesne_Dukes_football_team) |
| Robert Morris | 2023 | 6 | 13,453 | 2,242 | 3,412 vs Saint Francis (Sep 9) | None | [Wikipedia 2023](https://en.wikipedia.org/wiki/2023_Robert_Morris_Colonials_football_team) |
| Robert Morris | 2024 | 7 | 14,673 | 2,096 | 3,581 vs Edinboro (Sep 7) | None | [Wikipedia 2024](https://en.wikipedia.org/wiki/2024_Robert_Morris_Colonials_football_team) |
| Robert Morris | 2025 | 5 | 11,736 | 2,347 | 2,789 vs Central Connecticut (Oct 11) | None listed | [Wikipedia 2025](https://en.wikipedia.org/wiki/2025_Robert_Morris_Colonials_football_team) |

Duquesne's 3,052 (2023) and 2,956/2,965 crowds exceed A26's 2,200 seats but fit its 4,500 total capacity (venue answer, A26). RMU's 3,412 and 3,581 crowds exceed A21's listed 3,000. Duquesne's 2025 opener was away at Pitt (A01, 53,006 per the Pitt table above). 2026 seasons were not checked.

| Team | Regular-season crowds | Postseason home games and crowds | What was tried |
|---|---|---|---|
| Pitt football (A01) | **Filled (2nd pass), see table above** | No home postseason; bowls are neutral (above) | — |
| Pitt basketball (A05) | **Men's filled (2nd pass), see table above.** Women's: gap | Men's: none at home 2023-24 to 2025-26 | Women's not checked |
| Pitt volleyball (A17 / A05) | Gap. The venue answer has a program record of 11,800 at A05 ([SI](https://www.si.com/college/pittsburgh/news/pitt-volleyball-changing-location-ncaa-tournament-matches)) | Gap. NCAA tournament home matches move to A05 | Search budget used up |
| Duquesne (A19, A26) | **Men's basketball and football 2023–2025 filled (2nd pass), see tables above.** Women's basketball, volleyball: gap | Men's basketball: no home postseason games; 2026 A-10 tournament games at A04 were neutral. Football: none | Women's sports not checked |
| Robert Morris (A18, A21, A30) | **Men's basketball and football 2023–2025 filled (2nd pass), see tables above.** Hockey, women's basketball: gap | Men's basketball: 2025 and 2026 Horizon home games (above). Football: none | Hockey not checked |
| Riveters SC, Thunderbirds, Riverhounds 2 (A13) | Gap. Riveters' first-season average of 4,690 is in the venue answer (newsletter source) | Gap | Search budget used up |
| Washington Wild Things (A15) | Gap. The venue answer has an undated average of about 2,000 | Gap | Search budget used up |
| PennWest California, Slippery Rock, Geneva | Gap | Gap | Search budget used up |

---

## 6. Team colors

No official team or league brand page with hex codes was reachable for the pro teams in this pass:

- The NHL asset server was blocked by robots.txt.
- The MLB logo file returned a server error.
- The Steelers and Riverhounds brand pages could not be found because the search budget was used up. The Riverhounds stadium release has no colors ([Riverhounds](https://www.riverhounds.com/news/2026/04/22/fnb-stadium-announcement/)).

So the pro-team values below are **Secondary**: ESPN feed display colors, which ESPN labels `color` and `alternateColor`. These may not match brand-guide hex codes exactly. **Pitt** and (2nd pass) **Robert Morris** are the only teams with an official hex source (their university brand sites).

| Team | Primary hex | Secondary hex | Color source |
|---|---|---|---|
| Pittsburgh Steelers | #000000 | #FFB612 | **Secondary:** [ESPN NFL team 23](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/pit) |
| Pittsburgh Pirates | #000000 | #FDB827 | **Secondary:** [ESPN MLB team 23](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/pit) |
| Pittsburgh Penguins | #000000 | **#FCB514** "Yellow" (2nd pass; low-tier secondary). ESPN's `/teams/16` endpoint still has no `alternateColor` ([ESPN](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/16), 2nd pass) | **Secondary:** primary from [ESPN NHL team 16](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/pit); secondary from [TeamColorCodes](https://teamcolorcodes.com/pittsburgh-penguins-color-codes/), which lists Black #000000, Gold #CFC493, Yellow #FCB514 (PMS 1235 C), White #FFFFFF and says it "is not affiliated with any teams or leagues" (2nd pass) |
| Pittsburgh Riverhounds SC | #E8D035 | #000000 | **Secondary:** [ESPN USL teams](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams). Club officially names its colors only as "black and gold" ([riverhounds.com/club](https://www.riverhounds.com/club/), 2nd pass; no hex). A second secondary site gives a different gold, #FFC72A ([BrandColorCode](https://www.brandcolorcode.com/pittsburgh-riverhounds-sc), 2nd pass), so the gold hex is unsettled |
| Pitt Panthers (all sports) | #003594 (Pitt Royal Blue) | #FFB81C (Pitt Gold) | **Official:** [University of Pittsburgh brand, color palettes](https://www.brand.pitt.edu/brand-elements/color-palettes) (university-wide palette; no athletics-specific guidance on that page). ESPN matches ([team 221](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/221)) |
| Duquesne Dukes | #002D62 | #B90B2E | **Secondary:** [ESPN team 2184](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2184). Official athletics rebrand FAQ names "Primary brand colors: navy, red and white" plus electric blue and silver, **with no hex/PMS** ([GoDuquesne 2019 rebrand FAQ](https://goduquesne.com/sports/2019/5/10/rebrand-faqs.aspx), 2nd pass) |
| Robert Morris Colonials | **#14234B** (Robert Morris University Blue, PMS 282) | **#E51937** (Robert Morris University Red, PMS 186) | **Official (2nd pass):** [RMU Brand Toolkit, Logos and Identity](https://www.rmu.edu/about/news/brand-toolkit/logos-and-identity) (university-wide; also lists RMU Gray PMS 421 #B2B1AE). This replaces ESPN's display values (#00214D / #A21D2B, [ESPN team 2523](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2523)), which differ |
| Pittsburgh Riveters SC | Gap (hex) | Gap (hex) | 2nd pass: official named colors only, "black and yellow" ([Riverhounds release, Sept 18, 2024](https://www.riverhounds.com/?p=24164); [Riveters SC](https://www.riveterssc.com/?p=1031)). No hex found |
| Pittsburgh Thunderbirds | Gap (hex) | Gap (hex) | 2nd pass: Wikipedia infobox gives "black, charcoal grey, and gold" ([Wikipedia](https://en.wikipedia.org/wiki/Pittsburgh_Thunderbirds), secondary). No hex found |
| Riverhounds 2, Wild Things, PennWest California, Slippery Rock, Geneva | Gap | Gap | Not checked (outside the second pass's priority list) |

**Second-pass search for official pro-team hex codes (2nd pass):** no official Steelers, Pirates or Penguins brand page with hex values was found. A search limited to steelers.com, nfl.com, mlb.com, nhl.com and penguins.com returned only shop pages and news ([e.g. MLB.com, "Why Pittsburgh's teams all wear black and gold"](https://www.mlb.com/news/why-pittsburgh-s-teams-all-wear-black-and-gold)). Open web results for Steelers hex were all unaffiliated color sites. The ESPN values above stay as the secondary source.

---

# End with

## E1. Name, short form, code and covered area

| Field | Value | Basis |
|---|---|---|
| Display name | **Pittsburgh** | All four pro teams use "Pittsburgh" in league and data feeds (section 1). No regional rename like Tampa Bay |
| Short form | **PGH** / "Pgh" is the sourced local abbreviation (2nd pass, [Wikipedia](https://en.wikipedia.org/wiki/Name_of_Pittsburgh)); "Pittsburgh" stays usable as-is | Section 1 |
| Code | **PIT** | ESPN, MLB Stats API and NHL web API abbreviations for the pro teams, and the airport's IATA code (section 1). Pitt is PITT on ESPN |
| Covered area | Eight-county MSA: Allegheny, Armstrong, Beaver, Butler, Fayette, Lawrence, **Washington (in)**, **Westmoreland (in)** | [OMB 2023 via Business Journal Daily](https://businessjournaldaily.com/?p=202071); [BLS 2026](https://www.bls.gov/regions/mid-atlantic/news-release/2026/occupationalemploymentandwages_pittsburgh_20260710.htm) |

## E2. Venue row ID → Ticketmaster venue ID

| Venue row ID | Room | Ticketmaster venue ID | Verification link |
|---|---|---|---|
| A01 | Acrisure Stadium | 180306 | [link](https://www.ticketmaster.com/acrisure-stadium-tickets-pittsburgh/venue/180306?ac_link=blog) (via [TM blog](https://blog.ticketmaster.com/step-inside-acrisure-stadium-pittsburgh-pa/)) |
| A02 | PNC Park | 180453 | [link](https://www.ticketmaster.com/pnc-park-tickets-pittsburgh/venue/180453?ac_link=BLOG_step-inside-pnc-park) (via [TM blog](https://blog.ticketmaster.com/step-inside-pnc-park-home-of-the-pittsburgh-pirates)) |
| A03 | The Pavilion at Star Lake | 180232 | [link](https://www.ticketmaster.com/the-pavilion-at-star-lake-tickets-burgettstown/venue/180232) |
| A04 | PPG Paints Arena | 180938 | [link](https://www.ticketmaster.com/ppg-paints-arena-tickets-pittsburgh/venue/180938) (via [TM blog](https://blog.ticketmaster.com/step-inside-ppg-paints-arena)) |
| A05 | Petersen Events Center | 180764 | [link](https://www.ticketmaster.com/petersen-events-center-tickets-pittsburgh/venue/180764) |
| A09 | PennWest California Convocation Center | 180979 (2nd pass) | [link](https://www.ticketmaster.com/convocation-center-at-california-university-of-tickets-california/venue/180979) |
| A11 | Westmoreland Fairgrounds grandstand | 180256 (2nd pass; fairgrounds-level, titled "Latrobe, PA") | [link](https://www.ticketmaster.com/westmoreland-fairgrounds-tickets-latrobe/venue/180256) |
| A12 | Stage AE — Outdoor | 180952 (shared with A25) | [link](https://www.ticketmaster.com/stage-ae-tickets-pittsburgh/venue/180952) |
| A13 | F.N.B. Stadium | 180985 | [link](https://www.ticketmaster.com/highmark-stadium-tickets-pittsburgh/venue/180985) |
| A14 | Fayette County Fairgrounds grandstand | not verified (2nd pass: no Ticketmaster page found) | not verified |
| A15 | EQT Park | 180442 | [link](https://www.ticketmaster.com/eqt-park-tickets-washington/venue/180442) |
| A16 | Citizens Live at The Wylie | 181242 | [link](https://www.ticketmaster.com/citizens-live-at-the-wylie-tickets-pittsburgh/venue/181242?page=1) |
| A22 | Scottish Rite Cathedral, New Castle | 180317 (2nd pass) | [link](https://www.ticketmaster.com/scottish-rite-cathedral-tickets-new-castle/venue/180317) |
| A23 | Benedum Center | 180228 | [link](https://www.ticketmaster.com/benedum-center-tickets-pittsburgh/venue/180228) |
| A24 | Heinz Hall | 180234 | [link](https://www.ticketmaster.com/heinz-hall-tickets-pittsburgh/venue/180234) |
| A25 | Stage AE — Indoor | 180952 (shared with A12) | [link](https://www.ticketmaster.com/stage-ae-tickets-pittsburgh/venue/180952) |
| A27 | Carnegie Music Hall (Oakland) | 180276 (2nd pass) | [link](https://www.ticketmaster.com/carnegie-music-hall-of-oakland-tickets-pittsburgh/venue/180276) |
| A28 | Roxian Theatre | 181090 | [link](https://www.ticketmaster.com/roxian-theatre-tickets-pittsburgh/venue/181090?tab=seatingCharts?ac_link=blog) (via [TM blog](https://blog.ticketmaster.com/step-inside-roxian-theatre-pittsburgh-pa/)) |
| A29 | Byham Theater | 180229 | [link](https://www.ticketmaster.com/byham-theater-tickets-pittsburgh/venue/180229) |

## E3. Teams: league, home venue, feed, colors

| Team | League | Home venue row ID | Free feed and ID | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| Steelers | NFL | A01 | ESPN NFL 23 | #000000 | #FFB612 | Secondary (ESPN) |
| Pirates | MLB | A02 | MLB Stats API 134 (venue 31); ESPN MLB 23 | #000000 | #FDB827 | Secondary (ESPN) |
| Penguins | NHL | A04 | NHL web API `PIT`; ESPN NHL 16 | #000000 | #FCB514 (2nd pass) | Secondary (ESPN primary; TeamColorCodes secondary, unaffiliated) |
| Riverhounds SC | USL Championship | A13 | ESPN `usa.usl.1` 17827 | #E8D035 | #000000 | Secondary (ESPN) |
| Pitt football | NCAA FBS | A01 | ESPN CFB 221 | #003594 | #FFB81C | Official (Pitt brand) |
| Pitt basketball | NCAA D-I | A05 | ESPN MBB and WBB 221 (2nd pass) | #003594 | #FFB81C | Official (Pitt brand) |
| Pitt volleyball | NCAA D-I | A17 (A05 for big matches) | ESPN women's college volleyball 221 (2nd pass; next-event field looked stale) | #003594 | #FFB81C | Official (Pitt brand) |
| Duquesne basketball | NCAA D-I | A19 | ESPN MBB 2184 | #002D62 | #B90B2E | Secondary (ESPN); official names only "navy, red and white", no hex ([GoDuquesne](https://goduquesne.com/sports/2019/5/10/rebrand-faqs.aspx)) |
| Duquesne football | NCAA D-I FCS (NEC) | A26 | ESPN CFB 2184 (2nd pass) | #002D62 | #B90B2E | Secondary (ESPN) |
| RMU basketball | NCAA D-I | A18 | ESPN MBB 2523 | #14234B (2nd pass) | #E51937 (2nd pass) | **Official** ([RMU Brand Toolkit](https://www.rmu.edu/about/news/brand-toolkit/logos-and-identity)) |
| RMU football | NCAA D-I FCS (NEC) | A21 | ESPN CFB 2523 (2nd pass) | #14234B | #E51937 | Official (RMU Brand Toolkit) |
| RMU hockey | NCAA D-I | A30 | ESPN men's college hockey 2523 (2nd pass) | #14234B | #E51937 | Official (RMU Brand Toolkit) |
| Riveters SC | USL W League | A13 | No feed (2nd pass confirmed; club pages/PDFs only) | Gap (named "black and yellow") | Gap | Official names only ([Riverhounds 2024](https://www.riverhounds.com/?p=24164)) |
| Thunderbirds | AUDL / UFA | A13 | No feed (league web page [watchufa.com/thunderbirds/schedule](https://watchufa.com/thunderbirds/schedule)) | Gap (named black, charcoal grey, gold) | Gap | Secondary names only ([Wikipedia](https://en.wikipedia.org/wiki/Pittsburgh_Thunderbirds)) |
| Riverhounds 2 | USL League Two | A13 | No feed | Gap | Gap | — |
| Washington Wild Things | Frontier League | A15 | MLB Stats API team 1978 exists, but schedule returns 0 games (2nd pass): no usable feed | Gap | Gap | — |
| PennWest California | NCAA D-II | A08 / A09 / A15 | No feed | Gap | Gap | — |
| Slippery Rock | NCAA D-II | A07 / A20 | No feed | Gap | Gap | — |
| Geneva College | NCAA D-III | A10 | No feed | Gap | Gap | — |

## E4. Games away from the home venue

| Team | Date | Game | Actual site | Do not place at |
|---|---|---|---|---|
| Steelers | Sep 28, 2025 | Vikings at Steelers (Steelers home) | Croke Park, Dublin ([PFR](https://www.pro-football-reference.com/boxscores/202509280pit.htm)) | A01 |
| Penguins | Nov 14, 2025 | Penguins at Predators | Avicii Arena, Stockholm ([H-R](https://www.hockey-reference.com/teams/PIT/2026_games.html)) | — (road) |
| Penguins | Nov 16, 2025 | Predators at Penguins (Penguins home) | Avicii Arena, Stockholm ([H-R](https://www.hockey-reference.com/teams/PIT/2026_games.html)) | A04 |
| Riverhounds | Nov 22, 2025 (UTC) | Final at FC Tulsa | ONEOK Field, Tulsa ([ESPN](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams/17827/schedule?season=2025)) | — (road) |
| Steelers (2nd pass) | Oct 25, 2026 | Steelers at Saints (Saints home) | Stade de France, Paris ([NFL.com](https://www.nfl.com/news/2026-nfl-schedule-release-nine-international-games-dates-times-matchups)) | — (road) |
| Duquesne MBB (2nd pass) | Mar 12–13, 2026 | A-10 tournament (neutral) | PPG Paints Arena, A04 ([Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Duquesne_Dukes_men%27s_basketball_team)) | A19 |
| Checked, none found (2nd pass) | — | Steelers 2026 home games Weeks 7–18; Penguins 2026-27 (no Penguins special events announced); Pirates 2025–2026 (all home games at venue 31) | — | — |
| Still a gap | — | Pitt volleyball matches moved A17→A05; RMU Three Rivers Classic dates; women's basketball neutral sites | **Gap** | — |

## E5. Postseason and past-crowd tables per team

Full tables are in section 5. Summary:

| Team | Regular-season home crowds (range) | Postseason home games (announced) |
|---|---|---|
| Steelers | 2023: 602,796; 2024: 535,045; 2025: 604,923 incl. Dublin (530,411 at A01, derived) ([PFR](https://www.pro-football-reference.com/years/2025/attendance.htm)) | Jan 12, 2026 vs HOU at A01: 67,297 ([ESPN](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/pit/schedule?season=2025&seasontype=3)). 2023 and 2024 Wild Card sites not retrieved |
| Pirates | 2023: 1,630,624 / 20,131; 2024: 1,720,361 / 21,239; 2025: 1,525,025 / 18,827; 2026: 1,704,229 / 21,040 ([MLB Stats API](https://statsapi.mlb.com/api/v1/attendance?teamId=134&season=2026)) | None 2022–2026 ([B-Ref](https://www.baseball-reference.com/teams/PIT/)) |
| Penguins | 2022-23: 17,816 avg; 2023-24: 17,909; 2024-25: 16,635; 2025-26: 17,081 at A04 (16,975 incl. Stockholm); 2026-27 to date: 18,114 (3 games) (derived from [H-R](https://www.hockey-reference.com/teams/PIT/2026_games.html)) | 2026 R1 vs PHI: Apr 18 18,346; Apr 20 18,308; Apr 27 18,343 |
| Riverhounds | 2023: 5,077; 2024: 5,089; 2025: 4,965 avg (2nd pass, [Wikipedia](https://en.wikipedia.org/wiki/Pittsburgh_Riverhounds_SC), secondary) | 2023: Oct 21 vs Detroit City 6,123 ([ESPN](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/summary?event=689305), 2nd pass); 2024: no home playoff game (lost away at Charleston); 2025: Nov 1 4,932; Nov 8 6,220; Nov 15 6,745 ([ESPN](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/summary?event=760866)) |
| Pitt football (2nd pass) | Avg 2023: 48,122; 2024: 53,077; 2025: 51,845; 2026 to date: 44,928 (derived from Wikipedia) | None at home (bowls neutral) |
| Pitt MBB (2nd pass) | Avg 2023-24: 8,752; 2024-25: 8,003; 2025-26: 5,742 (derived) | None at home |
| Duquesne MBB (2nd pass) | Avg 2023-24: 2,564; 2024-25: 2,413; 2025-26: 2,260 (derived) | None at home |
| RMU MBB (2nd pass) | Avg 2023-24: 924; 2024-25: 1,065; 2025-26: 1,364 (derived) | Mar 6, 2025: 4,058; Mar 4, 2026: 3,537 (Horizon, at A18) |
| Duquesne / RMU football (2nd pass) | Duquesne avg 2023: 1,822; 2024: 2,029; 2025: 1,581. RMU avg 2023: 2,242; 2024: 2,096; 2025: 2,347 (derived) | None at home |
| Pitt WBB and volleyball, Duquesne and RMU women's sports, RMU hockey, Riveters (beyond 2025 avg), Thunderbirds, Riverhounds 2, Wild Things, D-II/D-III | Gap | Gap |

**Biggest gaps to fill next (updated in 2nd pass):**

1. Ticketmaster ID for A14 (none found on Ticketmaster), plus decisions on the shared Stage AE ID (A12/A25) and the fairgrounds-level A11 ID.
2. Official brand hex codes for the Steelers, Pirates, Penguins, Riverhounds, Riveters, Thunderbirds and Duquesne (none published with hex; secondary values used or gap).
3. Pitt volleyball and women's basketball crowds; RMU hockey crowds; Riveters, Thunderbirds and Wild Things crowds.
4. Riverhounds season totals and game counts (only averages are sourced).
5. Free-feed checks for USL League Two and D-II/D-III programs.
