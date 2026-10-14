# St. Louis: follow-up on city-build gaps

**Answer date:** Tuesday, October 13, 2026 (America/Los_Angeles). The last fetches finished early on Oct 14, 2026. **Second pass Oct 14, 2026:** gap cells filled in that pass are marked "(2nd pass)". All facts are as found then unless a different date is shown.
**Inputs:** [st-louis-gaps-followup-prompt.md](st-louis-gaps-followup-prompt.md) and [st-louis-venue-table-answer.md](st-louis-venue-table-answer.md). Venue row IDs (A1–A20) come from the venue answer.
**Missing input:** The brief names a city-type answer (`st-louis-city-type-answer.md`), but it was **not provided** for this pass. Fan-mode splits and car shares were not re-checked or redone here.
**Scope:** This is research only and does not approve a city build.

### How this pass ran, and what was cut short

- **Search budget:** The shared web-search budget ran out after the first round of searches. Everything after that comes from pages already found, pages linked from them, and direct fetches of public team, league and reference pages. Gaps below say where a further search would go.
- **Rate limiting:** The fetch proxy rate-limited several pages (HTTP 429). As instructed, they were **not retried by any other route**:
  - `statsapi.mlb.com/api/v1/sports`
  - `statsapi.mlb.com/api/v1/teams?sportId=1&season=2026`
  - Wikipedia [2026 St. Louis Battlehawks season](https://en.wikipedia.org/wiki/2026_St._Louis_Battlehawks_season)
  - Wikipedia [St. Louis Battlehawks](https://en.wikipedia.org/wiki/St._Louis_Battlehawks)
  - [STLPR Feb 23, 2026 Battlehawks article](https://www.stlpr.org/sports/2026-02-23/new-ufl-owner-battlehawks-ditching-dome-energizer-park)
  - Wikipedia [Busch Stadium](https://en.wikipedia.org/wiki/Busch_Stadium)
- **Second pass (Oct 14, 2026):** It used about 22 web searches plus direct fetches, and did not hit the search limit. The 2026 Battlehawks season page and the MLB Stats API `sports` endpoint loaded this time. In the second pass, the Ticketmaster venue pages for The Factory (270545) and America's Center (49735) and a Ticketmaster event page returned fetch errors, and they were not retrieved any other way. ESPN's college-soccer team lists were cut off by the fetch tool before "S".
- **Other inaccessible pages:**
  - Several Ticketmaster `/event/` pages and the Busch Stadium Ticketmaster venue page returned a generic fetch error.
  - stereoboard.com is disallowed by robots.txt.
  - The [ESPN MLB attendance page](https://www.espn.com/mlb/attendance/_/year/2025) came back empty because it is script-rendered.
- **Label key:**
  - **Official** means a team, league, venue or its operator states it.
  - **Secondary** means a reference site (Baseball-Reference, Hockey-Reference, Wikipedia) or a data feed's own values, such as ESPN colors.
  - **Computed** means a sum or average I calculated from per-game figures on a cited page. The method is shown each time.

---

## 1. Name, short form, code and covered area

| Item | Recommendation | Evidence |
|---|---|---|
| Display name | **St. Louis** | Every major team carries "St. Louis" in its name: [Cardinals (MLB Stats API)](https://statsapi.mlb.com/api/v1/teams/138), [Blues (ESPN)](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/19), [St. Louis CITY SC (ESPN)](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams/21812) and [St. Louis Battlehawks (ESPN)](https://site.api.espn.com/apis/site/v2/sports/football/ufl/teams). No team found uses a regional name (the Tampa Bay pattern), so **no rename is needed**. |
| Short form | **STL** | This is the abbreviation the leagues and feeds use for all four pro teams: [MLB Stats API team 138, "STL"](https://statsapi.mlb.com/api/v1/teams/138), [ESPN NHL "STL"](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/19), [ESPN MLS "STL"](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams/21812) and [ESPN UFL "STL"](https://site.api.espn.com/apis/site/v2/sports/football/ufl/teams). Local public radio also uses it in its own domain ([stlpr.org](https://www.stlpr.org/)). |
| Three-letter code | **STL** | Same sources as the short form. The airport's code was **not sourced** in this pass (gap: search budget exhausted). |
| Collision check | Whether any other city in the app already uses `STL` was not checked, because the app's city list wasn't provided. Arizona's NFL team's feed abbreviation was not fetched (gap). | — |

**Covered area.** This follows the venue answer's "core" tier, which is where every 5,000+ room sits ([venue answer §1.1](st-louis-venue-table-answer.md)):

| Covered | Includes (venue rows) |
|---|---|
| St. Louis city (independent city) | Downtown, Downtown West, Midtown, Grand Center and Forest Park: A1, A3, A4, A5, A7, A8, A11, A14, A18 |
| St. Louis County, MO | Maryland Heights (A6, A15) and Chesterfield (A20) |
| St. Charles County, MO | St. Charles (A9, A10, A19) and O'Fallon (A13) |
| Metro East, IL: Madison County | Madison (A2) and Edwardsville (A16, A17) |
| Metro East, IL: St. Clair County | Sauget (A12) |
| Also inside the planning core (nothing large found) | Jefferson County, MO and Monroe County, IL |

How this compares with Tampa Bay:
- Locals and teams already say "St. Louis" for the whole metro, including the Illinois side. For example, WWTR in Madison, IL markets itself as a St. Louis Metro East venue ([WWTR](https://wwtraceway.com/start-times-announced-for-2026-nascar-weekend-at-world-wide-technology-raceway/)).
- So both the name and the code stay as **St. Louis / STL**.

---

## 2. Ticketmaster venue IDs by room

**Method:**
- A Discovery API key was not available, so none was used.
- **Verified (TM page)** means the Ticketmaster `/venue/NNNNN` page was fetched and showed the right venue name and city.
- **Verified (linking page)** means the venue, its operator, or Ticketmaster's own blog links to that exact `/venue/NNNNN` URL, but the Ticketmaster page itself was not fetched or would not load.
- Rooms that sell through another platform are noted. The brief says that if a room has no Ticketmaster ID, **the city ships with no concerts there**.

| Venue row ID | Room | Ticketmaster venue ID | Verification link | Status / notes |
|---|---|---|---|---|
| A1 | The Dome at America's Center | **49621** | [ticketmaster.com/…/venue/49621](https://www.ticketmaster.com/the-dome-at-americas-center-tickets-st-louis/venue/49621), linked as "Buy Tickets" from [Explore St. Louis's Dome page](https://explorestlouis.com/the-dome-at-americas-center/) | Verified (linking page). Explore St. Louis is the America's Center operator's site. |
| A1-a | Ferrara Theatre (America's Center) | not verified | — | Gap. (2nd pass) A Ticketmaster-only search for "Ferrara Theatre" found no room-level page. It returned only a separate complex-level venue, **"America's Center – Saint Louis, MO", ID 49735** ([TM search result](https://www.ticketmaster.com/americas-center-tickets-saint-louis/venue/49735)), whose page failed to fetch. Whether Ferrara events list under 49735 is unconfirmed, so don't map 49735 to A1-a without checking. |
| A1-b | America's Center ballroom / exhibit halls | not verified | — | Convention space, not a concert room. Not researched. |
| A2 | World Wide Technology Raceway | none; sells through **TIXR** | [WWTR 2026 ticketing via TIXR](https://wwtraceway.com/10th-annual-bommarito-automotive-group-500-is-back-in-prime-time-for-2026/) (from venue answer) | No Ticketmaster ID, so no Ticketmaster concerts (this includes the Confluence Music Festival). |
| A3 | Busch Stadium | **50442** | [ticketmaster.com/busch-stadium-tickets-saint-louis/venue/50442](https://www.ticketmaster.com/busch-stadium-tickets-saint-louis/venue/50442?ac_link=BLOG_step-inside-busch-stadium), linked from [Ticketmaster blog "Step Inside: Busch Stadium"](https://blog.ticketmaster.com/step-inside-busch-stadium-st-louis-mo/) | Verified (linking page, Ticketmaster's own blog). A direct fetch of the venue page returned an error. The [Cardinals concerts page](https://www.mlb.com/cardinals/tickets/concerts) names only SeatGeek (in its menu, for Cardinals resale) and links no Ticketmaster pages, so whether stadium concerts are sold on Ticketmaster is **unconfirmed**. |
| A3-x | Ballpark Village / Cardinals Nation | not verified | — | Not researched. Keep separate from A3. |
| A4 | Energizer Park | not verified | — | CITY SC tickets go through **SeatGeek** ([SportCal](https://www.sportcal.com/newsletters/st-louis-city-sc-finally-find-stadium-naming-partner-with-energizer), from venue answer). No Ticketmaster venue page found. |
| A5 | Enterprise Center | **49678** | [ticketmaster.com/enterprise-center-tickets-st-louis/venue/49678](https://www.ticketmaster.com/enterprise-center-tickets-st-louis/venue/49678), linked from the [venue's ticket-options page](https://enterprisecenter.com/events/ticket-options), the [Ticketmaster venue page](https://www.ticketmaster.com/enterprise-center-boletos-saint-louis/venue/49678?page=4) and the [Ticketmaster blog](https://blog.ticketmaster.com/step-inside-st-louis-enterprise-center/) | **Verified (TM page + venue site).** |
| A6 | Hollywood Casino Amphitheatre | **49672** | [ticketmaster.ca/…/venue/49672](https://www.ticketmaster.ca/hollywood-casino-amphitheatre-st-louis-mo-tickets-maryland-heights/venue/49672), and the same ID on [ticketmaster.com in Ticketmaster's blog](https://blog.ticketmaster.com/?p=57039) | **Verified (TM page + TM blog).** |
| A7 | The Muny | not verified | — | Not researched (search budget). Closed for seat replacement until summer 2027 ([venue answer](st-louis-venue-table-answer.md)). |
| A8 | Chaifetz Arena | **50351** | [ticketmaster.com/…/venue/50351](https://www.ticketmaster.com/chaifetz-arena-billets-saint-louis/venue/50351), also linked from [chaifetzarena.com](https://chaifetzarena.com) | **Verified (TM page + venue site).** |
| A8-a | Chaifetz Pavilion | not verified | — | Hand-log room (800 seats), not a concert room. |
| A9 | Family Arena | **50622** (2nd pass) | (2nd pass) [ticketmaster.com/family-arena-tickets-saint-charles/venue/50622](https://www.ticketmaster.com/family-arena-tickets-saint-charles/venue/50622) loaded and shows the venue as "Family Arena", listing St. Louis Ambush home games (e.g. vs. Milwaukee Wave, Dec 14, 2025). Also linked as `venueId=50622` from the [Family Arena homepage](https://familyarena.com/). | **Verified (TM page + venue site)** (2nd pass). The page doesn't print the city, but the Ambush games tie it to St. Charles. The fetched page showed Dec 2025 events, so it may have been a cached copy. |
| A10 | Harlen C. Hunter Stadium | not verified | — | Sports venue. Not researched. |
| A11 | Hermann Stadium | not verified | — | Sports venue. Not researched. |
| A12 | Arsenal BG Ballpark | not verified | — | Not researched. |
| A13 | CarShield Field | not verified | — | Not researched. |
| A14 | Fabulous Fox Theatre | none; sells through **MetroTix** | [Fox "Where to Buy"](https://www.fabulousfox.com/events-tickets/where-to-buy): "MetroTix is the only authorized ticket seller for The Fabulous Fox." | No Ticketmaster ID, so no Ticketmaster concerts at the Fox. |
| A15 | Saint Louis Music Park | **50732** | [ticketmaster.com/saint-louis-music-park-tickets-maryland-heights/venue/50732](https://www.ticketmaster.com/saint-louis-music-park-tickets-maryland-heights/venue/50732), linked from the [venue's box-office page](https://www.centenecommunityicecenter.com/saint-louis-music-park/box-office-ticketing) | Verified (linking page, official). Different ID from A6, so the two can't be confused. |
| A16 | First Community Arena (SIUE) | not verified | — | Not researched. |
| A17 | Ralph Korte Stadium (SIUE) | not verified | — | Sports venue. Not researched. |
| A18 | Stifel Theatre | **50474** | [ticketmaster.com/stifel-theatre-tickets-saint-louis/venue/50474](https://www.ticketmaster.com/stifel-theatre-tickets-saint-louis/venue/50474?page=1) | **Verified (TM page).** The [venue's SLSO page](https://www.stifeltheatre.com/events/st-louis-symphony-orchestra) also directs single tickets to ticketmaster.com. Different ID from A5 next door. |
| A19 | Robert F. Hyland Performance Arena | not verified | — | Not researched. |
| A20 | The Factory | not verified | The [venue FAQ](https://thefactorystl.com/faq/) calls Ticketmaster its "ticketing partner". The [homepage](https://www.thefactorystl.com/) links only `/event/` pages (e.g. [event 210064BBF8694692](https://www.ticketmaster.com/taste-of-chaos-tour-saint-louis-missouri-10-14-2026/event/210064BBF8694692)). | Ticketmaster is confirmed as the seller. **(2nd pass) Likely 270545:** a Ticketmaster-only search returned "The Factory – Saint Louis, MO" at [ticketmaster.com/the-factory-tickets-chesterfield/venue/270545](https://www.ticketmaster.com/the-factory-tickets-chesterfield/venue/270545?page=3). Both fetches of that page returned an error, so it is **not verified**. Confirm with a Discovery API lookup before use. |

**Count:**
- **8 verified (2nd pass):** A1, A3, A5, A6, A8, **A9 (2nd pass)**, A15, A18. Five of these were checked on the Ticketmaster page itself (A5, A6, A8, A9, A18) and three through a linking page (A1, A3, A15).
- **Concert-capable rooms not verified:** A1-a (complex-level ID 49735 seen, not room-level), A4, A7, A20 (likely 270545, from a search result only).
- **No Ticketmaster ID by design:** A2 (TIXR) and A14 (MetroTix).

---

## 3. Free schedule feeds by team

**Method:**
- An ESPN ID counts as "verified" only when the public ESPN site API returned that team's record. Each link below is the endpoint fetched.
- The MLB Stats API team record for the Cardinals was fetched. The league-wide MLB Stats API calls were rate-limited (see top).
- "No feed" means no free machine-readable feed was found. Most of those teams do publish an official web schedule page, which is listed.

| Team | League | Home venue row ID | Free feed and ID |
|---|---|---|---|
| St. Louis Cardinals | MLB | A3 | **MLB Stats API team 138** (venue ID 2889, "Busch Stadium", abbr STL), [statsapi.mlb.com/api/v1/teams/138](https://statsapi.mlb.com/api/v1/teams/138). Also **ESPN MLB 24**, [ESPN](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/stl). |
| St. Louis Blues | NHL | A5 | **ESPN NHL 19** (venue "Enterprise Center"), [ESPN](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/19). The NHL's own API was not checked (gap). |
| St. Louis CITY SC | MLS | A4 | **ESPN soccer `usa.1` 21812** (venue "Energizer Park"), [ESPN](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams/21812) |
| St. Louis CITY2 | MLS NEXT Pro | A4 (2026) | **No feed found** (confirmed 2nd pass). A search for ESPN coverage of MLS NEXT Pro found none; only club and league news pages came back (e.g. [mlsnextpro.com](https://mlsnextpro.com/news/st-louis-city2-hosts-rny-fc-in-inaugural-mls-next-pro-match)). No public machine-readable feed was found. Official 2026 schedule page: [CITY SC](https://www.stlcitysc.com/news/st-louis-city2-unveils-2026-mls-next-pro-schedule-with-continuing-commitment-to-create-family-focused-matchday-experiences) |
| St. Louis Battlehawks | UFL | A1 (through the 2026 season; 2027 TBD) | **ESPN football `ufl` 112651**, [ESPN UFL teams](https://site.api.espn.com/apis/site/v2/sports/football/ufl/teams) |
| Saint Louis Billikens men's basketball | NCAA D-I, A-10 | A8 | **ESPN men's college basketball 139** (abbr SLU), [ESPN](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/139) |
| Saint Louis Billikens women's basketball | NCAA D-I, A-10 | A8 | **(2nd pass) ESPN women's college basketball 139** (abbr SLU), [ESPN](https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/teams/139) |
| Saint Louis Billikens soccer (M/W) | NCAA D-I | A11 | **(2nd pass) League covered, team ID not found.** ESPN has NCAA men's soccer (`usa.ncaa.m.1`, [teams list](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.ncaa.m.1/teams)) and NCAA women's soccer (`usa.ncaa.w.1`, [teams list](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.ncaa.w.1/teams)). Both lists were cut off alphabetically before "Saint Louis" by the fetch tool. ESPN soccer team IDs are global, so `soccer/…/teams/139` returns Ajax Amsterdam, not SLU. Find the SLU soccer IDs before wiring. Official site: slubillikens.com (per venue answer) |
| Saint Louis Billikens volleyball | NCAA D-I | A8-a (hand-log) | **(2nd pass) ESPN women's college volleyball 139** (abbr SLU; next event listed as Oct 16, 2026 at Fordham), [ESPN](https://site.api.espn.com/apis/site/v2/sports/volleyball/womens-college-volleyball/teams/139). Official: [2026 schedule](https://slubillikens.com/news/2026/6/17/billikens-announce-2026-volleyball-schedule.aspx) |
| SIUE Cougars men's basketball | NCAA D-I, OVC | A16 | **ESPN men's college basketball 2565** (abbr SIUE), [ESPN](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2565) |
| SIUE Cougars soccer | NCAA D-I | A17 | **(2nd pass) League covered, team ID not found.** This is the same situation as SLU soccer: ESPN `usa.ncaa.m.1` / `usa.ncaa.w.1` lists were cut off before "SIU Edwardsville". |
| Lindenwood Lions football | NCAA D-I FCS, OVC | A10 | **ESPN college football 2815** (abbr LIN), [ESPN](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2815) |
| Lindenwood Lions men's basketball | NCAA D-I, OVC | A19 | **ESPN men's college basketball 2815**, [ESPN](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2815) |
| St. Louis Ambush | MASL | A9 | **No feed found** (2nd pass: a search turned up no ESPN or other feed for the MASL). League site: [maslsoccer.com](https://www.maslsoccer.com/news/st-louis-ambush-host-milwaukee-wave-sunday) |
| Gateway Grizzlies | Frontier League | A12 | **(2nd pass) Listed in the MLB Stats API, but with no games.** The team is **id 1875**, Frontier League (league id 442), under sportId 23 "Independent Leagues" ([teams?sportId=23&season=2026](https://statsapi.mlb.com/api/v1/teams?sportId=23&season=2026); [sports list](https://statsapi.mlb.com/api/v1/sports)). Its venue is "TBD" (id 401), and the schedule endpoint returned **0 games** for both [2026](https://statsapi.mlb.com/api/v1/schedule?sportId=23&teamId=1875&season=2026) and [2025](https://statsapi.mlb.com/api/v1/schedule?sportId=23&teamId=1875&season=2025). Treat this as **no usable feed**. Team schedule: [2026 schedule release](https://www.gatewaygrizzlies.com/sports/bsb/2024-25/releases/20251006gu6lhl) |
| O'Fallon Hoots | Prospect League | A13 | **No feed found** (2nd pass: not in the MLB Stats API sportId 23 team list; no ESPN coverage found). League site: [prospectleague.com](https://prospectleague.com/sports/bsb/2024-25/releases/Schedule) |
| St. Louis Surge | Women's pro basketball | none (gym-sized; hand-log) | **No feed found** |

ESPN college IDs are shared across sports at one school (for example, 2815 is Lindenwood in both football and basketball). Team IDs in the app still need to be unique per sport.

**Teams with a verified free feed (10, 2nd pass):** Cardinals, Blues, CITY SC, Battlehawks, SLU men's basketball, **SLU women's basketball (2nd pass)**, **SLU volleyball (2nd pass)**, SIUE men's basketball, Lindenwood football, Lindenwood men's basketball.
**Teams with no feed found:** CITY2, Ambush, Grizzlies (Stats API team with no games), Hoots and Surge.
**League covered, team ID not found:** SLU soccer and SIUE soccer (2nd pass).

---

## 4. Games away from the home venue (2025 on)

**Naming:**
- Our team id `cardinals` is **St. Louis (MLB)** and needs a city prefix (see build rules).
- Arizona's NFL team is `arizona-cardinals`. It is a different team in a different city. None of its games were researched here, and none should be mapped to St. Louis venues.

| Team | Window checked | Away-from-home games found | Source |
|---|---|---|---|
| St. Louis Cardinals (MLB) | 2025, 2026 and announced 2027 | **None.** The 2025 MLB World Tour games were Dodgers–Cubs in Tokyo (Mar 18–19, 2025). The 2026 game was Padres–Diamondbacks in Mexico City (Apr 25–26, 2026). No 2027 games are listed. The Cardinals' only recent international series was the 2023 London Series vs. the Cubs, which is before the window. | [Wikipedia: MLB World Tour](https://en.wikipedia.org/wiki/MLB_World_Tour) (secondary). Season game logs show every home game at Busch: [2025](https://en.wikipedia.org/wiki/2025_St._Louis_Cardinals_season), [2026](https://en.wikipedia.org/wiki/2026_St._Louis_Cardinals_season) (log only through Sep 11). |
| St. Louis Blues (NHL) | Outdoor games 2025 through Feb 2027 | **None.** 2025+ outdoor games: Stadium Series in Columbus (Mar 1, 2025), Winter Classic in Miami (Jan 2, 2026), Stadium Series in Tampa (Feb 1, 2026), Heritage Classic in Winnipeg (Oct 25, 2026), Winter Classic in Salt Lake City (Dec 31, 2026) and Stadium Series in Arlington (Feb 20, 2027). The Blues are in none of them. Their last outdoor game was the **Dec 31, 2024 Winter Classic at Wrigley Field, Chicago, as the away team** (40,933). | [Wikipedia: NHL outdoor games](https://en.wikipedia.org/wiki/NHL_outdoor_games) (secondary). [Hockey-Reference 2025–26 game log](https://www.hockey-reference.com/teams/STL/2026_games.html) has no venue notes on any home game. |
| St. Louis Blues: NHL Global Series (international) | 2025 on | **(2nd pass) None found.** Listed 2025+ Global Series games: Nashville vs. Pittsburgh in Stockholm (Nov 14 and 16, 2025), Carolina vs. Seattle in Helsinki (Nov 12 and 14, 2026) and Ottawa vs. Chicago in Düsseldorf (Dec 18 and 20, 2026), per Wikipedia. The 2027 Germany series has Boston at SAP Garden, Munich and Edmonton at Lanxess Arena, Cologne. **Opponents and dates are not yet announced** ("later in the 2026/27 season"), so re-check that the Blues aren't named. | [Wikipedia: NHL Global Series](https://en.wikipedia.org/wiki/NHL_Global_Series) (secondary); [NHL.com (German), 2027 Germany series](https://www.nhl.com/de/news/nhl-global-series-germany-2027-spiele-in-muenchen-und-koeln) (official) |
| St. Louis CITY SC (MLS) | 2025–2026 | **None documented.** Leagues Cup, U.S. Open Cup and CONCACAF venues are not named on the source page. | [Wikipedia: St. Louis City SC](https://en.wikipedia.org/wiki/St._Louis_City_SC) (secondary) |
| St. Louis Battlehawks (UFL) | 2025–2027 | **None in 2025.** All six home games and the Jun 8, 2025 conference final were at The Dome (A1). **2027 home venue undecided.** The Dome lease runs through the 2026 season. A move to Energizer Park (A4) is only a proposal. | [2025 season](https://en.wikipedia.org/wiki/2025_St._Louis_Battlehawks_season) (secondary); [Spectrum News, Feb 23, 2026](https://spectrumlocalnews.com/mo/st-louis/news/2026/02/23/st-louis-ufl-owner-battlehawks-2026) (via venue answer) |
| Saint Louis Billikens men's basketball | 2024–25, 2025–26 | **No home games away from Chaifetz found.** All postseason games were neutral or away (see §5). | [2024–25](https://en.wikipedia.org/wiki/2024%E2%80%9325_Saint_Louis_Billikens_men%27s_basketball_team), [2025–26](https://en.wikipedia.org/wiki/2025%E2%80%9326_Saint_Louis_Billikens_men%27s_basketball_team) (secondary) |
| Neutral-site college events at Enterprise Center (A5) | Recurring | "Braggin' Rights" (Illinois vs. Missouri) and the MVC tournament ("Arch Madness") are **neutral-site events, not home games** for any St. Louis team. Map them to A5 as events. | [Venue answer §3](st-louis-venue-table-answer.md) |
| Other teams (CITY2, Ambush, Grizzlies, Hoots, SIUE, Lindenwood) | — | **Gap.** Not checked. | — |

---

## 5. Postseason and past crowds per team

**Seasons covered:**
- MLB: 2023–2026.
- NHL: 2023–24 through 2025–26.
- MLS: 2023–2026.
- UFL: 2024–2026.
- College: 2024–25 and 2025–26 postseason only.

Postseason and regular-season figures are kept in separate tables.

### 5.1 St. Louis Cardinals (MLB), A3

**Postseason home games**

| Season | Postseason? | Home games and attendance | Source |
|---|---|---|---|
| 2023 | No | — | 2025 season page notes 2025 was "the third straight season" out of contention ([Wikipedia](https://en.wikipedia.org/wiki/2025_St._Louis_Cardinals_season)) |
| 2024 | No (eliminated Sep 20) | — | [Wikipedia 2024 season](https://en.wikipedia.org/wiki/2024_St._Louis_Cardinals_season) |
| 2025 | No (eliminated Sep 24; 78–84) | — | [Wikipedia 2025 season](https://en.wikipedia.org/wiki/2025_St._Louis_Cardinals_season) |
| 2026 | No. Not among the 12 qualifiers listed. | — | [Wikipedia 2026 MLB postseason](https://en.wikipedia.org/wiki/2026_Major_League_Baseball_postseason) (page still had unresolved slots when fetched) |
| 2022 (outside range) | Wild Card Series at Busch | **Gap:** attendance not fetched | — |

**Regular-season home attendance** (secondary: [Baseball-Reference attendance page](https://www.baseball-reference.com/teams/STL/attend.shtml))

| Season | Total | Per game |
|---|---|---|
| 2022 | 3,320,551 | 40,994 |
| 2023 | 3,241,091 | 40,013 |
| 2024 | 2,878,115 | 35,532 |
| 2025 | 2,250,007 | 27,778 |
| 2026 | 2,233,902 | 27,579 |

Cross-check for 2025: ESPN's average of 27,777, cited on [Wikipedia](https://en.wikipedia.org/wiki/2025_St._Louis_Cardinals_season), is within 1 of Baseball-Reference. Single 2026 data point: Opening Day, Mar 26, 2026 vs. Tampa Bay drew **45,037** ([Wikipedia 2026 game log](https://en.wikipedia.org/wiki/2026_St._Louis_Cardinals_season)).

### 5.2 St. Louis Blues (NHL), A5

**Postseason home games**

| Season | Result | Home games: date, opponent, attendance | Source |
|---|---|---|---|
| 2022–23 | No playoffs | — | [Hockey-Reference history](https://www.hockey-reference.com/teams/STL/history.html) |
| 2023–24 | No playoffs | — | same |
| 2024–25 | Lost First Round 4–3 to Winnipeg | G3 Apr 24, 2025: **18,096**; G4 Apr 27, 2025: **18,096**; G6 May 2, 2025: **18,096** | [Hockey-Reference 2024–25 game log](https://www.hockey-reference.com/teams/STL/2025_games.html) (secondary; box-score figures) |
| 2025–26 | No playoffs (37–33–12) | — | [Hockey-Reference history](https://www.hockey-reference.com/teams/STL/history.html) |

**Regular-season home attendance** (computed: the 41 per-game home figures on each Hockey-Reference game log were summed and averaged; secondary)

| Season | Home games | Total (computed) | Per game (computed) | Source |
|---|---|---|---|---|
| 2023–24 | 41 | 741,461 | 18,084 | [2024 game log](https://www.hockey-reference.com/teams/STL/2024_games.html) |
| 2024–25 | 41 | 726,700 | 17,724 | [2025 game log](https://www.hockey-reference.com/teams/STL/2025_games.html) |
| 2025–26 | 41 | 731,714 | 17,847 | [2026 game log](https://www.hockey-reference.com/teams/STL/2026_games.html) |

The per-game figures were pulled by an automated page reader. Spot-check them before wiring. 18,096 matches the hockey capacity in the venue answer. 2022–23 was not covered.

### 5.3 St. Louis CITY SC (MLS), A4

**Postseason home games**

| Season | Result | Home games and attendance | Source |
|---|---|---|---|
| 2023 | Lost Round One (best-of-3) to Sporting KC | Game 1 at CITYPARK (A4), lost 4–1. **(2nd pass) Date: Oct 29, 2023** local, per the [club's match report](https://www.stlcitysc.com/news/match-report-st-louis-city-sc-falls-to-sporting-kc-in-game-one-of-mls-cup-playof) (official; Wikipedia's "Oct 30" is the UTC date, and ESPN gives kickoff as 2023-10-30T02:00Z). **(2nd pass) Attendance: 22,423** per the [ESPN match summary feed, event 689601](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/summary?event=689601) (secondary). The club report gives no attendance. 22,423 equals the listed capacity, so the same low-confidence caveat as the averages below applies. | [Wikipedia 2023 season](https://en.wikipedia.org/wiki/2023_St._Louis_City_SC_season) (secondary) |
| 2024 | Did not qualify | — | [Wikipedia club page](https://en.wikipedia.org/wiki/St._Louis_City_SC) |
| 2025 | Did not qualify | — | same |
| 2026 | **Gap.** Source table was dated "as of July 24, 2026". | — | same |

**Regular-season home attendance**

| Season | Average | Source / caveat |
|---|---|---|
| 2023 | 22,423 | [Wikipedia 2023 season infobox](https://en.wikipedia.org/wiki/2023_St._Louis_City_SC_season) |
| 2024 | 22,423 | [Wikipedia club page](https://en.wikipedia.org/wiki/St._Louis_City_SC) |
| 2025 | 22,423 | same |
| 2026 (partial) | 22,423 | same |

Every season shows exactly the listed capacity (22,423). That fits the reported [sellout streak](https://www.mlssoccer.com/news/st-louis-city-sc-stadium-renamed-energizer-park), but it may be a capacity figure rather than counted attendance. **Treat it as low-confidence** until per-match box scores are checked.

### 5.4 St. Louis Battlehawks (UFL), A1

**Postseason home games**

| Season | Game | Date | Site | Attendance | Source |
|---|---|---|---|---|---|
| 2024 | XFL Conference Championship vs. San Antonio (L 15–25) | Jun 9, 2024 | The Dome (A1) | **30,237** | [Wikipedia 2024 season](https://en.wikipedia.org/wiki/2024_St._Louis_Battlehawks_season) (secondary) |
| 2025 | XFL Conference Championship vs. DC Defenders | Jun 8, 2025 | The Dome (A1) | **27,589** | [Wikipedia 2025 season](https://en.wikipedia.org/wiki/2025_St._Louis_Battlehawks_season) (secondary) |
| 2026 | (2nd pass) UFL semifinal vs. Louisville Kings (L 20–29) | Jun 7, 2026 | The Dome (A1) | **18,111** | [Wikipedia 2026 season](https://en.wikipedia.org/wiki/2026_St._Louis_Battlehawks_season) (secondary, 2nd pass). The page also confirms the five regular-season crowds below. |

**Regular-season home crowds**

| Season | Per-game crowds | Average (computed) | Source |
|---|---|---|---|
| 2024 | 40,317; 31,757; 32,969; 32,403; 34,379 | 34,365 (5 games) | [Wikipedia 2024 season](https://en.wikipedia.org/wiki/2024_St._Louis_Battlehawks_season) |
| 2025 | 32,115; 30,014; 30,406; 26,684; 30,114; 27,890 | 29,537 (6 games) | [Wikipedia 2025 season](https://en.wikipedia.org/wiki/2025_St._Louis_Battlehawks_season). STLPR's "about 30,000" (via venue answer) agrees. |
| 2026 | 31,191 (Mar 28); 20,209 (Apr 12); 18,563 (May 8); 21,609 (May 16); 24,621 (May 29) | 23,239 (5 games) | [Wikipedia 2026 season](https://en.wikipedia.org/wiki/2026_St._Louis_Battlehawks_season). (2nd pass) Re-fetched and confirmed, with dates. |
| 2023 | (2nd pass) 38,310 (Mar 12); 35,868 (Mar 18); 35,167 (Apr 8); 33,142 (Apr 16); 33,034 (Apr 22) | 35,104 (5 games) (2nd pass) | [Wikipedia 2023 season](https://en.wikipedia.org/wiki/2023_St._Louis_Battlehawks_season) (secondary). XFL season; no postseason. |

### 5.5 Saint Louis Billikens men's basketball, A8

**Postseason**

| Season | Postseason games | Home postseason games |
|---|---|---|
| 2024–25 | A-10 tournament in Washington, D.C. (Mar 13: 6,203; Mar 14: 8,153). NIT first round **at** Arkansas State, Jonesboro (Mar 18, 2025: 3,143). | **None** ([Wikipedia](https://en.wikipedia.org/wiki/2024%E2%80%9325_Saint_Louis_Billikens_men%27s_basketball_team), secondary) |
| 2025–26 | A-10 tournament in Pittsburgh (Mar 13–14, 2026; attendance not listed). NCAA tournament in Buffalo (Mar 19: 17,213; Mar 21: 17,499). | **None** ([Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Saint_Louis_Billikens_men%27s_basketball_team), secondary) |

**Regular-season home attendance (2nd pass)** (computed: sum and average of the per-game Chaifetz Arena crowds printed in each Wikipedia schedule table; secondary; exhibitions excluded)

| Season | Home games with a crowd listed | Total (computed) | Per game (computed) | Range | Source |
|---|---|---|---|---|---|
| 2024–25 | 17 (Nov 10, 2024 – Mar 8, 2025) | 101,421 | 5,966 | 3,679 (Wofford) to 9,819 (Dayton) | [Wikipedia 2024–25](https://en.wikipedia.org/wiki/2024%E2%80%9325_Saint_Louis_Billikens_men%27s_basketball_team) |
| 2025–26 | 18 of 19 (the Mar 4, 2026 Loyola Chicago game has no crowd listed) | 121,495 | 6,750 | 3,522 (Chicago State) to 10,277 (Dayton, Jan 30, 2026) | [Wikipedia 2025–26](https://en.wikipedia.org/wiki/2025%E2%80%9326_Saint_Louis_Billikens_men%27s_basketball_team) |

These are box-score crowds as transcribed on Wikipedia, read by an automated page reader. Spot-check against the NCAA's official attendance report before wiring (not fetched). SLU women's basketball crowds were not checked.

### 5.6 Other teams

| Team | Postseason home games | Regular-season crowds |
|---|---|---|
| SIUE Cougars men's basketball (A16) | **(2nd pass) None in 2024–25 or 2025–26.** 2024–25: OVC tournament at Ford Center, Evansville (Mar 7–8, 2025) and NCAA first round vs. Houston at Intrust Bank Arena, Wichita (Mar 20, 2025: 14,355) ([Wikipedia 2024–25](https://en.wikipedia.org/wiki/2024%E2%80%9325_SIU_Edwardsville_Cougars_men%27s_basketball_team)). 2025–26: OVC first round at Ford Center, Evansville (Mar 4, 2026) ([Wikipedia 2025–26](https://en.wikipedia.org/wiki/2025%E2%80%9326_SIU_Edwardsville_Cougars_men%27s_basketball_team)). | **(2nd pass, computed from per-game crowds on Wikipedia, secondary):** 2024–25: 15 home games, total 23,661, **1,577 per game** (range 984–2,751). 2025–26: 14 of 15 home games with a crowd listed (Feb 28, 2026 not listed), total 23,935, **1,710 per game** (range 1,004–2,482). Exhibitions excluded. Record crowd 4,157 (Jan 21, 2012, [SIUE](https://siuecougars.com/facilities/first-community-arena/1)). SIUE soccer and women's basketball: gap. |
| Lindenwood Lions football (A10) | **(2nd pass) None.** The team was ineligible for FCS postseason play during its transition from Division II ([2024](https://en.wikipedia.org/wiki/2024_Lindenwood_Lions_football_team), [2025](https://en.wikipedia.org/wiki/2025_Lindenwood_Lions_football_team)); the 2025 page says eligibility begins in 2026. | **(2nd pass, computed from per-game crowds on Wikipedia, secondary):** 2024: 6 home games (4,668; 3,825; 3,103; 2,765; 3,697; 5,108), total 23,166, **3,861 per game** ([2024](https://en.wikipedia.org/wiki/2024_Lindenwood_Lions_football_team)). 2025: 5 home games (Sep 20: 4,716; Oct 4: 3,116; Oct 18: 2,737; Oct 25: 4,502; Nov 15: 4,968), total 20,039, **4,008 per game** ([2025](https://en.wikipedia.org/wiki/2025_Lindenwood_Lions_football_team)). 2023 and 2026: gap. Lindenwood basketball (A19): gap. |
| St. Louis CITY2 (A4) | Gap (not reached in 2nd pass) | Gap (not reached in 2nd pass) |
| St. Louis Ambush (A9) | **(2nd pass)** 2022–23 and 2023–24: did not qualify. 2024–25: lost in the quarterfinals; date, site and attendance not on the [2024–25 MASL season page](https://en.wikipedia.org/wiki/2024%E2%80%9325_Major_Arena_Soccer_League_season) (gap). 2025–26: finished 4th of 8 (top 6 qualify), but no playoff games are listed on the [2025–26 season page](https://en.wikipedia.org/wiki/2025%E2%80%9326_Major_Arena_Soccer_League_season) (gap). | **(2nd pass)** Average attendance, from [Wikipedia's Ambush year-by-year table](https://en.wikipedia.org/wiki/St._Louis_Ambush_(2013)) (secondary): 2022–23: **2,450**; 2023–24: **2,510**; 2024–25: **2,101**. 2025–26: not listed (gap). |
| Gateway Grizzlies (A12) | **(2nd pass)** 2023: lost first round 2–1 to Evansville; 2024: lost East Division wild-card game to Lake Erie ([Wikipedia](https://en.wikipedia.org/wiki/Gateway_Grizzlies)); sites and crowds for those games: gap. **2025 home playoff games at Arsenal BG Ballpark: Sep 3, 2025 vs. Washington (W 6–5) and Sep 12, 2025 vs. Schaumburg (L 2–4); attendance not listed** ([Wikipedia 2025 Frontier League season](https://en.wikipedia.org/wiki/2025_Frontier_League_season); Sep 3 home site confirmed by the [team release](https://www.gatewaygrizzlies.com/sports/bsb/2024-25/releases/20250831xunhre)). 2026: did not qualify ([Wikipedia](https://en.wikipedia.org/wiki/Gateway_Grizzlies)). | **(2nd pass)** From [Stats Crew's ballpark page](https://www.statscrew.com/venues/v-2471) (secondary): 2023: total **80,453**, average **1,642**; 2024: **87,388**, **1,821**; 2025: **92,195**, **2,004**. The 2025 total matches [The Baseball Cube](https://thebaseballcube.com/content/minor_summary/2025~Frontier/). 2026: not posted (gap). The 2025 regular-season finale drew a "season-best crowd of 6,122" ([Grizzlies](https://www.gatewaygrizzlies.com/sports/bsb/2024-25/releases/20250831xunhre)). |
| O'Fallon Hoots (A13) | **(2nd pass)** 2023 and 2024: did not qualify. 2025: lost the South Division championship to Cape, 0–1 postseason record ([Wikipedia](https://en.wikipedia.org/wiki/O%27Fallon_Hoots)); the site of that game was not stated (gap). 2026: no postseason data. | **(2nd pass)** From [Ballpark Digest](https://ballparkdigest.com/2023/09/05/2023-summer-collegiate-attendance-by-league) (reported): 2023: total **28,370**, 24 openings, **1,182** per opening. [Ballpark Digest 2024](https://ballparkdigest.com/2024/10/28/2024-summer-collegiate-attendance-by-league/): total **28,544**, 25 openings, **1,142** per opening. 2025–2026: gap (no 2025 Ballpark Digest table was found, and the [2025 Prospect League season page](https://en.wikipedia.org/wiki/2025_Prospect_League_season) lists none). |

---

## 6. Team colors

**No official team or league brand page with hex codes was reached in this pass**, because the search budget ran out before brand pages could be found. The hex values below are the **ESPN feed's own values** for each team. They are **secondary**, not official brand specs. Use them only as placeholders until each is checked against an official brand source.

**(2nd pass)** Official university brand pages were found for **SLU, SIUE and Lindenwood**, and their rows now use official hex values. No official hex page was found for the Cardinals, Blues, CITY SC, CITY2, Battlehawks, Ambush, Grizzlies or Hoots (MLB, NHL, MLS and UFL don't publish team hex codes on public pages found in this pass), so those stay secondary or gap.

| Team | Primary hex | Secondary hex | Color source |
|---|---|---|---|
| St. Louis Cardinals | #BE0A14 | #001541 | Secondary: [ESPN MLB team 24](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/stl) |
| St. Louis Blues | #0070B9 | #FCB514 (yellow) (2nd pass) | Secondary: primary from [ESPN NHL team 19](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/19). (2nd pass) ESPN gives no secondary, so the yellow is from [TeamColorCodes](https://teamcolorcodes.com/st-louis-blues-color-codes/) (third-party, cites no source; it lists Blue #002F87, Yellow #FCB514, Navy #041E42, White). Note that its blue (#002F87) differs from ESPN's (#0070B9). No official Blues/NHL hex page was found. |
| St. Louis CITY SC | #EC1458 | #001544 | Secondary: [ESPN MLS team 21812](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams/21812). Official color *names* ("City Red", "River Blue", "Energy Yellow", "Arch Steel Gray"), with no hex: [MLS](https://www.mlssoccer.com/news/st-louis-city-sc-mls-expansion-club-unveils-name-crest-and-colors). Wikipedia says only CITY Red is still used ([Wikipedia](https://en.wikipedia.org/wiki/St._Louis_City_SC)). |
| St. Louis CITY2 | #001837 (blue) (2nd pass) | #DD004A (red) (2nd pass) | Secondary (2nd pass): [BrandColorCode, St. Louis City SC 2](https://www.brandcolorcode.com/st-louis-city-sc-2) (third-party, cites no source; lists Blue #001837, White #FFFFFF, Red #DD004A in that order; primary vs. secondary is not designated, so the order here follows the listing). No official club hex page was found. |
| St. Louis Battlehawks | #002677 | #A2AAAD | Secondary: [ESPN UFL team 112651](https://site.api.espn.com/apis/site/v2/sports/football/ufl/teams). (2nd pass) Same values, with names "Deep Sky" (PMS 2147 C) and "Jet Gray" (PMS 429 C), on [TruColor's UFL colors page](https://trucolor.net/portfolio/united-football-league-official-colors-2024-through-present) (third-party; cites no league style guide). No official UFL/team hex page was found. |
| Saint Louis Billikens | **#003DA5** (SLU Blue) (2nd pass) | **#C8C9C7** (College Church Gray) (2nd pass) | **Official** (2nd pass): [SLU Marketing & Communications, Colors and Fonts](https://slu.edu/marcom/branding-and-identity/colors-fonts.php). The primary palette is SLU Blue 003DA5, College Church Gray C8C9C7 and Iris White FFFFFF; Grand Blue 00244D and others are secondary accents "to be used sparingly". This is the university palette; no separate athletics palette was found. ESPN's values (#00539C / #EBEBEB) differ. |
| SIUE Cougars | **#E5182D** (SIUE Red, PMS 186 C) (2nd pass) | **#000000** (Black) (2nd pass) | **Official** (2nd pass): [SIUE Visual Identity Requirements & Brand Guidelines PDF](https://www.siue.edu/marketing-and-communications/pdf/siue-brand-guidelines.pdf), p. 25 "University Colors" (primary red and black; secondary PMS 465 #B9975B and PMS 427 #CDD0CF). ESPN's values (#EB1C23 / #080808) differ slightly. |
| Lindenwood Lions | **#B5A36A** (Lindenwood Gold) (2nd pass) | **#000000** (Black) (2nd pass) | **Official** (2nd pass): [Lindenwood Branding and Identity Guidelines PDF](https://www.lindenwood.edu/files/resources/brand-guidelines-lindenwood.pdf) (updated Nov 2022): primary Gold #B5A36A, Black #000000, White #FFFFFF. A newer [July 2026 online guide](https://www.lindenwood.edu/brand-identity-guidelines/11-12/) names Gold, Black and White logo versions but showed no hex on the page fetched, so re-check the gold value against it. ESPN's #000000 alone is replaced. |
| St. Louis Ambush | gap | gap | (2nd pass) Wikipedia's infobox has a colors label but [no colors listed](https://en.wikipedia.org/wiki/St._Louis_Ambush_(2013)); a search found no team or MASL color page. Still gap. |
| Gateway Grizzlies | gap (names only) | gap (names only) | (2nd pass) Color **names only**, no hex: "Navy, Grizzlie orange, white, black, green, gray" ([Wikipedia](https://en.wikipedia.org/wiki/Gateway_Grizzlies), secondary). No team hex source found. |
| O'Fallon Hoots | gap (names only) | gap (names only) | (2nd pass) Color **names only**, no hex: "Black, dark gray, gold, white" ([Wikipedia](https://en.wikipedia.org/wiki/O%27Fallon_Hoots), secondary). No team hex source found. |

---

## Build-rule notes (for whoever turns this into app data)

- **Unique IDs across all cities.** `giants`, `jets`, `rangers`, `kings` and **`cardinals`** are already taken, so St. Louis team IDs need a city prefix. A suggested pattern is `stl-cardinals`, `stl-blues`, `stl-city-sc`, `stl-city2`, `stl-battlehawks`, `stl-ambush`, `slu-…`, `siue-…` and `lindenwood-…`. Keep Arizona's NFL team as `arizona-cardinals`. Venue IDs need the same prefix (for example, ESPN, the MLB Stats API and Ticketmaster all give Busch Stadium different IDs: MLB venue 2889, Ticketmaster 50442).
- **No per-city opponents file.** Opponent draws go into `expectedDrawIndex`, as for every other city.
- **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list. From the venue answer, that list includes CarShield Field seats vs. lawn, the Muny after renovation, Busch Stadium for concerts, Saint Louis Music Park (low-confidence 4,500) and the America's Center rooms.
- **Car shares.** Wire measured ones, wire sourced estimates marked as estimated, and leave the rest on the city default. The city-type answer was not provided for this pass, so no car-share figures are given here.
- **Ticketing.** CITY SC sells through **SeatGeek** and WWTR through **TIXR**. The Fox (A14) is **MetroTix-only**. A Ticketmaster-only feed will show no events at A2 or A14 and probably none for CITY SC at A4.
- **Attendance labels.** The CITY SC averages equal capacity, so don't treat them as counted crowds. Blues and Battlehawks averages here are computed from per-game figures, so label them that way.

---

# End-of-answer summary

## 1. Name, short form, code and covered area

- **Name:** St. Louis
- **Short form:** STL
- **Code:** STL
- **Covered area:**
  - St. Louis city and St. Louis County, MO
  - St. Charles County, MO
  - Metro East, IL: Madison County (Madison, Edwardsville) and St. Clair County (Sauget)
  - Also inside the planning core: Jefferson County, MO and Monroe County, IL

No rename is needed, because teams and venues already use "St. Louis" for the whole metro, including the Illinois side. Sources are in §1.

## 2. Ticketmaster venue IDs

| Venue row ID | Room | Ticketmaster venue ID | Verification link |
|---|---|---|---|
| A1 | The Dome at America's Center | 49621 | [TM venue page](https://www.ticketmaster.com/the-dome-at-americas-center-tickets-st-louis/venue/49621) via [Explore St. Louis](https://explorestlouis.com/the-dome-at-americas-center/) |
| A1-a | Ferrara Theatre | not verified | not verified |
| A1-b | America's Center ballroom / halls | not verified | not verified |
| A2 | World Wide Technology Raceway | none (TIXR) | not verified (not on Ticketmaster) |
| A3 | Busch Stadium | 50442 | [TM venue page](https://www.ticketmaster.com/busch-stadium-tickets-saint-louis/venue/50442?ac_link=BLOG_step-inside-busch-stadium) via [TM blog](https://blog.ticketmaster.com/step-inside-busch-stadium-st-louis-mo/) |
| A3-x | Ballpark Village / Cardinals Nation | not verified | not verified |
| A4 | Energizer Park | not verified (SeatGeek for CITY SC) | not verified |
| A5 | Enterprise Center | 49678 | [TM venue page](https://www.ticketmaster.com/enterprise-center-tickets-st-louis/venue/49678) and [venue site](https://enterprisecenter.com/events/ticket-options) |
| A6 | Hollywood Casino Amphitheatre | 49672 | [TM venue page](https://www.ticketmaster.ca/hollywood-casino-amphitheatre-st-louis-mo-tickets-maryland-heights/venue/49672) and [TM blog](https://blog.ticketmaster.com/?p=57039) |
| A7 | The Muny | not verified | not verified |
| A8 | Chaifetz Arena | 50351 | [TM venue page](https://www.ticketmaster.com/chaifetz-arena-billets-saint-louis/venue/50351) and [venue site](https://chaifetzarena.com) |
| A8-a | Chaifetz Pavilion | not verified | not verified |
| A9 | Family Arena | 50622 (2nd pass) | [TM venue page](https://www.ticketmaster.com/family-arena-tickets-saint-charles/venue/50622) and `venueId=50622` on [familyarena.com](https://familyarena.com/) |
| A10 | Harlen C. Hunter Stadium | not verified | not verified |
| A11 | Hermann Stadium | not verified | not verified |
| A12 | Arsenal BG Ballpark | not verified | not verified |
| A13 | CarShield Field | not verified | not verified |
| A14 | Fabulous Fox Theatre | none (MetroTix-only) | [Fox where-to-buy](https://www.fabulousfox.com/events-tickets/where-to-buy) |
| A15 | Saint Louis Music Park | 50732 | [TM venue page](https://www.ticketmaster.com/saint-louis-music-park-tickets-maryland-heights/venue/50732) via [venue box office](https://www.centenecommunityicecenter.com/saint-louis-music-park/box-office-ticketing) |
| A16 | First Community Arena (SIUE) | not verified | not verified |
| A17 | Ralph Korte Stadium | not verified | not verified |
| A18 | Stifel Theatre | 50474 | [TM venue page](https://www.ticketmaster.com/stifel-theatre-tickets-saint-louis/venue/50474?page=1) |
| A19 | Hyland Performance Arena | not verified | not verified |
| A20 | The Factory | not verified (likely 270545, 2nd pass) | [TM search result](https://www.ticketmaster.com/the-factory-tickets-chesterfield/venue/270545?page=3) (page did not load); [venue FAQ](https://thefactorystl.com/faq/) confirms Ticketmaster |

## 3. Teams, feeds and colors

| Team | League | Home venue row ID | Free feed and ID | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| St. Louis Cardinals (`stl-cardinals`; not Arizona's `arizona-cardinals`) | MLB | A3 | MLB Stats API team 138 ([link](https://statsapi.mlb.com/api/v1/teams/138)); ESPN MLB 24 | #BE0A14 | #001541 | ESPN feed (secondary) |
| St. Louis Blues | NHL | A5 | ESPN NHL 19 ([link](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/19)) | #0070B9 | #FCB514 (2nd pass) | ESPN feed (secondary); yellow from [TeamColorCodes](https://teamcolorcodes.com/st-louis-blues-color-codes/) (secondary, 2nd pass) |
| St. Louis CITY SC | MLS | A4 | ESPN `usa.1` 21812 ([link](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams/21812)) | #EC1458 | #001544 | ESPN feed (secondary); official names only at [MLS](https://www.mlssoccer.com/news/st-louis-city-sc-mls-expansion-club-unveils-name-crest-and-colors) |
| St. Louis CITY2 | MLS NEXT Pro | A4 | no feed | #001837 (2nd pass) | #DD004A (2nd pass) | [BrandColorCode](https://www.brandcolorcode.com/st-louis-city-sc-2) (secondary, 2nd pass) |
| St. Louis Battlehawks | UFL | A1 (through 2026; 2027 TBD) | ESPN `ufl` 112651 ([link](https://site.api.espn.com/apis/site/v2/sports/football/ufl/teams)) | #002677 | #A2AAAD | ESPN feed (secondary) |
| Saint Louis Billikens men's basketball | NCAA A-10 | A8 | ESPN MCB 139 ([link](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/139)) | #003DA5 (2nd pass) | #C8C9C7 (2nd pass) | **Official** [SLU colors page](https://slu.edu/marcom/branding-and-identity/colors-fonts.php) (2nd pass; replaces ESPN #00539C / #EBEBEB) |
| Saint Louis Billikens women's basketball | NCAA A-10 | A8 | ESPN WCB 139 ([link](https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/teams/139)) (2nd pass) | #003DA5 (school) | #C8C9C7 (school) | Official SLU (2nd pass) |
| Saint Louis Billikens soccer | NCAA | A11 | ESPN `usa.ncaa.m.1` / `usa.ncaa.w.1` cover the league; team ID not found (2nd pass) | as above | as above | Official SLU (2nd pass) |
| Saint Louis Billikens volleyball | NCAA | A8-a (hand-log) | ESPN women's college volleyball 139 ([link](https://site.api.espn.com/apis/site/v2/sports/volleyball/womens-college-volleyball/teams/139)) (2nd pass) | as above | as above | Official SLU (2nd pass) |
| SIUE Cougars men's basketball | NCAA OVC | A16 | ESPN MCB 2565 ([link](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2565)) | #E5182D (2nd pass) | #000000 (2nd pass) | **Official** [SIUE brand guidelines p. 25](https://www.siue.edu/marketing-and-communications/pdf/siue-brand-guidelines.pdf) (2nd pass; replaces ESPN #EB1C23 / #080808) |
| SIUE Cougars soccer | NCAA | A17 | ESPN college soccer covers the league; team ID not found (2nd pass) | as above | as above | Official SIUE (2nd pass) |
| Lindenwood Lions football | NCAA FCS OVC | A10 | ESPN CFB 2815 ([link](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2815)) | #B5A36A (2nd pass) | #000000 (2nd pass) | **Official** [Lindenwood brand guidelines PDF, Nov 2022](https://www.lindenwood.edu/files/resources/brand-guidelines-lindenwood.pdf) (2nd pass) |
| Lindenwood Lions men's basketball | NCAA OVC | A19 | ESPN MCB 2815 ([link](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2815)) | #B5A36A (2nd pass) | #000000 (2nd pass) | Official Lindenwood (2nd pass) |
| St. Louis Ambush | MASL | A9 | no feed | gap | gap | — |
| Gateway Grizzlies | Frontier League | A12 | no usable feed: MLB Stats API team 1875 exists but returns 0 games for 2025 and 2026 (2nd pass) | gap (names only: navy, Grizzlie orange) | gap | [Wikipedia](https://en.wikipedia.org/wiki/Gateway_Grizzlies) names only (2nd pass) |
| O'Fallon Hoots | Prospect League | A13 | no feed | gap (names only: black, dark gray, gold) | gap | [Wikipedia](https://en.wikipedia.org/wiki/O%27Fallon_Hoots) names only (2nd pass) |

**Teams with no feed (2nd pass):** CITY2, Ambush, Grizzlies (Stats API team with no games), Hoots and Surge (no venue row). For SLU soccer and SIUE soccer, ESPN covers the league but the team IDs were not found.

## 4. Games away from the home venue (2025 on)

- **St. Louis Cardinals (MLB):** none in 2025 or 2026, and none announced for 2027 ([MLB World Tour](https://en.wikipedia.org/wiki/MLB_World_Tour)).
- **Blues:** no outdoor games from 2025 through Feb 2027 ([NHL outdoor games](https://en.wikipedia.org/wiki/NHL_outdoor_games)). The last one was the Dec 31, 2024 Winter Classic at Wrigley Field, Chicago, as the away team. Global Series (2nd pass): none for the Blues in 2025 or 2026 ([Wikipedia](https://en.wikipedia.org/wiki/NHL_Global_Series)). The 2027 Germany opponents are not yet announced ([NHL.com](https://www.nhl.com/de/news/nhl-global-series-germany-2027-spiele-in-muenchen-und-koeln)), so re-check this.
- **CITY SC:** none documented ([Wikipedia](https://en.wikipedia.org/wiki/St._Louis_City_SC)).
- **Battlehawks:** none in 2025, with all games at The Dome ([2025 season](https://en.wikipedia.org/wiki/2025_St._Louis_Battlehawks_season)). The **2027 home venue is undecided**: the Dome lease ends after 2026, and Energizer Park is only a proposal.
- **Arizona Cardinals (`arizona-cardinals`, NFL):** not a St. Louis team and not researched.
- **Neutral-site events at A5:** "Braggin' Rights" and Arch Madness are events, not home games.

## 5. Postseason and past crowds

See §5.1–5.6 for full tables. In short:

| Team | Postseason home games (range) | Regular-season crowds (range) |
|---|---|---|
| Cardinals | None 2023–2026 | 2022–2026 per-game averages: 40,994 / 40,013 / 35,532 / 27,778 / 27,579 ([B-Ref](https://www.baseball-reference.com/teams/STL/attend.shtml)) |
| Blues | 2025 R1 G3, G4 and G6: 18,096 each ([H-Ref](https://www.hockey-reference.com/teams/STL/2025_games.html)); none in 2023, 2024 or 2026 | Computed averages: 2023–24: 18,084; 2024–25: 17,724; 2025–26: 17,847 |
| CITY SC | 2023 Round One G1, Oct 29, 2023: 22,423 per ESPN (2nd pass; equals capacity); none in 2024 or 2025; 2026 gap | Listed average 22,423 every season (equals capacity, low confidence) |
| Battlehawks | Jun 9, 2024: 30,237; Jun 8, 2025: 27,589; **Jun 7, 2026 semifinal: 18,111 (2nd pass)** | Computed averages: **2023: 35,104 (2nd pass)**; 2024: 34,365; 2025: 29,537; 2026: 23,239 |
| SLU men's basketball | None in 2025 or 2026 (all neutral or away) | **(2nd pass, computed)** 2024–25: 5,966 (17 games); 2025–26: 6,750 (18 games) |
| SIUE men's basketball | None in 2025 or 2026 (2nd pass) | **(2nd pass, computed)** 2024–25: 1,577; 2025–26: 1,710 |
| Lindenwood football | None; ineligible during its D-II transition (2nd pass) | **(2nd pass, computed)** 2024: 3,861; 2025: 4,008 |
| Ambush | 2024–25 quarterfinal and 2025–26 playoffs: site and crowd gap (2nd pass) | **(2nd pass)** Averages 2022–23: 2,450; 2023–24: 2,510; 2024–25: 2,101 (Wikipedia) |
| Grizzlies | **(2nd pass)** 2025 home playoff games Sep 3 and Sep 12, 2025 at A12, crowds not listed; 2023 and 2024 sites gap | **(2nd pass)** Averages 2023: 1,642; 2024: 1,821; 2025: 2,004 (Stats Crew) |
| Hoots | **(2nd pass)** 2025 South Division final vs. Cape, site gap; did not qualify in 2023 or 2024 | **(2nd pass)** 2023: 1,182; 2024: 1,142 per opening (Ballpark Digest) |
| CITY2 | Gap | Gap |

**Biggest remaining gaps (updated 2nd pass):**
1. Official hex codes for the Cardinals, Blues, CITY SC, CITY2, Battlehawks, Ambush, Grizzlies and Hoots. SLU, SIUE and Lindenwood are now official; the rest are ESPN or third-party values, or color names only.
2. Ticketmaster IDs: A20 The Factory (likely 270545, not loaded), A1-a Ferrara Theatre (only complex-level 49735 seen) and A7 The Muny. A9 is now verified as 50622.
3. CITY SC per-match counted attendance (the feed shows capacity, 22,423).
4. CITY2 crowds; Ambush and Hoots 2025–26 figures; playoff-game crowds for the Grizzlies, Ambush and Hoots.
5. ESPN team IDs for SLU and SIUE soccer.
6. The 2027 NHL Global Series opponents (re-check for the Blues).
7. The city-type answer (not provided).
