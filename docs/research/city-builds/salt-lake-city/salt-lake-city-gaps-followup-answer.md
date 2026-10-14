# Salt Lake City: follow-up on city-build gaps

**Answer date:** Tuesday, October 13, 2026; **second pass Oct 14, 2026** (prepared in America/Los_Angeles; Salt Lake City runs on Mountain Time).
**Scope:** public web sources only. This is research, not approval of a city build.

**Inputs**
- Brief: `salt-lake-city-gaps-followup-prompt.md` (drafted Oct 13, 2026).
- Venue answer: [salt-lake-city-venue-table-answer.md](salt-lake-city-venue-table-answer.md) (Oct 12, 2026). Row IDs `SLC-1` to `SLC-21` in this file are the row numbers 1–21 from that file's summary table (section 2a).
- **The city-type answer (`salt-lake-city-city-type-answer.md`) was not provided for this pass.** Fan-mode splits and car shares were not re-checked; that work was not redone.

**Coverage limit for this pass (read first).** Partway through, the per-turn web search limit (shared by every agent working in the same turn) ran out after 13 searches. After that, the only pages fetched were ones already linked from the venue answer or returned by the earlier searches. No URLs were guessed or built from memory, and no blocked page was retrieved another way. So:
- **Ticketmaster IDs** were checked for the largest concert rooms only.
- **Free schedule feeds (item 3) and team colors (item 6) are not researched.** Every cell is marked "gap," and the pages to check next are listed.
- **Attendance (item 5)** is partial. It comes from the official Utah Utes stadium page, plus Wikipedia (labeled secondary) and news pages already in hand.

A follow-up run with a fresh search budget should start with sections 3 and 6.

**Second pass (Oct 14, 2026).** A second run with a fresh budget (about 33 searches) filled the cells that were marked "gap" or "not verified." Nothing already sourced on Oct 13 was redone. What changed:
- **Section 3 / End-with 3:** free schedule feeds verified by fetching the ESPN site API, the MLB Stats API and the NHL API; team IDs recorded.
- **Section 6 / End-with 3:** colors. Official hex codes for Utah (brand.utah.edu) and BYU (BYU Marriott brand page). Official color *names* for the Jazz, Mammoth, Stars and Bees from team or league pages, with ESPN hex codes labeled "secondary." No hex was invented.
- **Section 2 / End-with 2:** 9 more Ticketmaster venue IDs found via Ticketmaster venue URLs; only one venue page could be fetched (America First Field); the rest are "ID from Ticketmaster venue URL in search results; page fetch blocked."
- **Section 5 / End-with 5:** season averages and playoff crowds added for the Jazz, Utah HC/Mammoth, RSL, Royals, Bees and Utes football (mostly Wikipedia season pages, labeled secondary; Bees from a KSL report).
- **Section 4 / End-with 4:** 2027 NHL Winter Classic at Rice-Eccles (a Mammoth home game away from the Delta Center), BYU and Utah basketball games at the Delta Center, Utes bowl games.
- **Section 1:** "SLC" sources added (city domain SLC.gov; ESPN's abbreviation for the Stars).
- **Bonus:** two official capacities that the venue answer lacked: Zions Bank Stadium "seats 5,000" ([rsl.com, Monarchs 2026 schedule](https://www.rsl.com/monarchs/news/real-monarchs-unveil-2026-regular-season-schedule)) and SLCC Bruin Arena "3,000 seat special events arena" ([lovb.com venue page](https://www.lovb.com/teams/lovb-salt-lake-volleyball/venues/salt-lake-community-college-bruin-arena)). The 3,000 figure confirms Bruin Arena is a sub-5,000 room.

**Labels.** *Official* = team, league, university, venue or government page. *Secondary* = encyclopedia, aggregator or news report of a figure. "Gap" = not found; the text says what was searched or fetched.

---

## Build-rule notes (for whoever turns this into app data)

1. **Unique IDs across all cities.** Every venue ID and team ID must be unique across all cities. `giants`, `jets`, `rangers`, `kings` and `cardinals` were already taken, so add a city prefix. For Salt Lake City, the generic nicknames `royals` (Utah Royals) and `stars` (Salt Lake City Stars) are the likeliest to collide with teams elsewhere, so prefix every SLC team and venue ID. This file uses `SLC-n` venue row IDs so it joins to the venue answer.
2. **No per-city opponents file.** Don't make a separate per-city opponents file. Opponent draws go into `expectedDrawIndex` like every other city.
3. **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list. In this city that includes Zions Bank Stadium (5,000, reported only), SLCC Bruin Arena (5,000 vs a 3,006 sell-out) and the Delta Center concert figure (pre-renovation) from the venue answer.
4. **Car shares.** Wire measured car shares. Wire sourced estimates marked "estimated." Leave the rest on the city default. The city-type answer, which holds these, was not provided for this pass.
5. **Attendance is not capacity.** Several crowds below exceed the official configured capacity (Utes football; Utah Hockey Club's first game). Store them as attendance and don't overwrite capacity with them.
6. **Ticketing provider is not the same as Ticketmaster coverage.** The Delta Center's official ticketer has been SeatGeek since October 11, 2023 ([Delta Center](https://www.deltacenter.com/news/seatgeek-is-now-the-ticketing-provider-at-delta-center/)). America First Field appears on AXS, yet its Ticketmaster venue page (246832) lists 17 RSL 2026 home games and no Royals games (second pass). The Eccles Theater sells Broadway through ArtTix but has a Ticketmaster venue ID (246872) for touring shows. A Ticketmaster venue ID can exist and still carry few or no primary-sale events (see section 2).

---

## 1. Name and code

### Findings

| Item | Finding | Source / status |
|---|---|---|
| Federal metro name | "Salt Lake City-Murray, UT MSA" = Salt Lake County + Tooele County (2023 delineation) | [EDCUtah, Jan 26, 2024](https://edcutah.org/recent-news/research-minute-updates-to-utahs-core-based-statistical-areas) (official-sourced summary) |
| Ogden | Separate "Ogden, UT MSA" = Davis, Weber, Morgan counties | [EDCUtah](https://edcutah.org/recent-news/research-minute-updates-to-utahs-core-based-statistical-areas) |
| Provo / BYU | Separate "Provo-Orem-Lehi, UT MSA" = Utah County + Juab County | [EDCUtah](https://edcutah.org/recent-news/research-minute-updates-to-utahs-core-based-statistical-areas) |
| What top-level teams call themselves | **"Utah"**: Utah Jazz, Utah Mammoth (Utah Hockey Club in 2024–25), Utah Royals, Utah Utes; the 2028 UFL team is referred to as "the Utah team" | Team names as cited in the [venue answer](salt-lake-city-venue-table-answer.md) §3; UFL wording in [Salt Lake Tribune, Sept 23, 2026](https://www.sltrib.com/sports/2026/09/23/ufl-expansion-team-is-coming-utah/) |
| What other teams call themselves | **"Salt Lake"**: Real Salt Lake, Salt Lake Bees, Salt Lake City Stars, LOVB Salt Lake | Same venue answer §3; [LOVB](https://www.lovb.com/news/2026-lovb-pro-schedule-announced) |
| How media name the market | The Deseret News MLB-expansion story mainly says "Salt Lake City" and uses "Utah" for the state-level bid; "Wasatch Front" is not used | [Deseret News, Feb 28, 2026](https://www.deseret.com/sports/2026/02/28/is-salt-lake-city-emerging-as-a-leader-contender-for-mlb-expansion/) |
| Three-letter code "SLC" in team/media use | **Second pass.** The city government itself uses SLC: its website moved from Slcgov.com to **SLC.gov** ([KUTV, June 22, 2018](https://kutv.com/news/local/salt-lake-city-launches-new-web-presence-with-slcgov)). ESPN's abbreviation for the Salt Lake City Stars is **SLC** ([ESPN G League teams API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams)). Top-level teams use *state* codes instead: ESPN uses **UTAH** for the Jazz, Mammoth and Utes; the NHL API uses **UTA** for the Mammoth ([api-web.nhle.com](https://api-web.nhle.com/v1/standings/now)); ESPN uses **UTA** for the Royals; the MLB Stats API uses **SL** for the Bees ([statsapi.mlb.com](https://statsapi.mlb.com/api/v1/teams?sportId=11)). | SLC is a city code (city government, G League). No top-level team uses it as its own code. |

### Interpretation (judgment, not a sourced fact)

- **It is not like Tampa Bay.** In Tampa Bay, a metro name ("Tampa Bay") stretches past the city. Here, the big-league teams use the *state* name "Utah." That branding does not by itself show that fans travel from Provo or Ogden. The venue answer found no event-travel evidence for merging the Wasatch Front, and the federal grouping keeps Ogden and Provo–Orem as separate MSAs.
- **Suggested display name:** "Salt Lake City." **Suggested short form:** "Salt Lake," which four local teams use in their names (above). **Code:** keep the brief's lead, **SLC**. It is the city government's own short form (SLC.gov) and ESPN's code for the Stars; the big-league teams use UTAH/UTA, which is a state code and would not be unique if other Utah markets were ever added.
- **Covered area:** Salt Lake County (core), with Tooele County as a flagged edge (one venue, West Desert, `SLC-11`), per the venue answer.
  - **Utah County (Provo, BYU): out.** Separate MSA.
  - **Ogden / Weber / Davis: out.** Separate MSA.
- **Exception:** a Provo or Ogden team's game played inside Salt Lake County still belongs to the SLC venue row. The reverse also applies: some LOVB Salt Lake "home" matches in 2025 were listed at BYU's Smith Fieldhouse in Provo (section 4), outside the covered area.

---

## 2. Ticketmaster venue IDs

**Method.** The ID is the number in a `ticketmaster.com/.../venue/NNNNN` URL. It counts as verified when that page was fetched and named the venue, or when a page that links to it was fetched. No Discovery API key was used.

### Notes on the verified IDs

- **Delta Center (`SLC-5`):** the direct fetch of venue page 246072 failed with a fetch error. The ID is confirmed from Ticketmaster's own blog, which links to `ticketmaster.com/vivint-arena-tickets-salt-lake-city/venue/246072`. The slug still uses the old "Vivint Arena" name.
  - Since Oct 11, 2023, SeatGeek is the official ticketing provider for the Jazz and "all events, comedians and concerts at the arena" ([Delta Center](https://www.deltacenter.com/news/seatgeek-is-now-the-ticketing-provider-at-delta-center/)).
  - **Expect a Ticketmaster feed to carry few or no Delta Center primary events.** This is the biggest concert-coverage risk in the city.
- **Maverik Center (`SLC-8`):** the fetched page listed events from February–March 2026, including Utah Grizzlies games. Those are now stale, because the team relocated after April 12, 2026 (venue answer).
- **Jon M. Huntsman Center (`SLC-6`):** the fetched page showed one event (PFL MMA) and no dates.
- **Rice-Eccles Stadium (`SLC-1`):** the fetched page listed George Strait, Luke Combs, Supercross, Monster Jam and Utah Football, with no dates shown.

### Rooms that sell through another ticketer

| Room | Ticketer seen | Status |
|---|---|---|
| America First Field (`SLC-4`) | AXS venue page `axs.com/venues/102028/america-first-field-sandy-tickets`, in search results only, not fetched | Ticketmaster not verified |
| Days of '47 Arena (`SLC-9`) | SeatGeek venue page in search results ([seatgeek.com](https://seatgeek.com/venues/days-of-47-arena/seating-chart)) | Ticketmaster not verified |
| Eccles Theater (`SLC-16`) | Broadway at the Eccles sells individual tickets through **ArtTix**, not Ticketmaster ([Broadway in Salt Lake City help page](https://saltlakecity.broadway.com/help/individual-tickets)) | Ticketmaster not verified |
| Kingsbury Hall (`SLC-18`) | Search returned University of Utah arts-ticketing pages (`artstickets.utah.edu`), not a Ticketmaster page | Ticketmaster not verified |
| Abravanel Hall (`SLC-15`) and Capitol Theatre (`SLC-19`) | Searches returned resale and listing sites only, no Ticketmaster venue URL | Ticketmaster not verified |

**Not searched (search limit reached):** Smith's Ballpark, The Ballpark at America First Square, West Desert, Zions Bank Stadium, SLCC Bruin Arena, Grand Building, Promontory Hall, America First Ballpark. The Conference Center and Tabernacle use free church ticketing, so Ticketmaster is not expected there (venue answer §2b).

**Second pass (Oct 14, 2026).** Ticketmaster-only searches returned venue URLs for nine more rooms. **Ticketmaster blocked almost every page fetch** (client error), so only America First Field's venue page was actually read. For the rest, the ID comes from a `ticketmaster.com/<venue-slug>/venue/NNNNN` URL whose slug names the venue and city; these are labeled "URL seen; page not fetched" rather than "fetched." Findings:
- **America First Field (`SLC-4`): 246832, fetched.** The page lists 17 Real Salt Lake 2026 home games (Feb 28 vs Seattle through Apr 22 vs Inter Miami in the first five) and **no Utah Royals games** ([Ticketmaster](https://www.ticketmaster.com/america-first-field-tickets-sandy/venue/246832)). So RSL does sell on Ticketmaster despite the AXS page seen earlier; Royals coverage there is unconfirmed. A separate child room exists: **"Beddy's Plaza at America First Field," venue 247095** ([URL](https://www.ticketmaster.com/beddys-plaza-at-america-first-field-tickets-sandy/venue/247095)); keep plaza events off the stadium row.
- **Zions Bank Stadium (`SLC-12`): 246992** ([URL](https://www.ticketmaster.com/zions-bank-stadium-tickets-herriman/venue/246992)); a Premier Lacrosse League event dated Sep 7, 2026 in Herriman also appeared ([event](https://www.ticketmaster.com/event/1E006390AE03641C)).
- **Smith's Ballpark (`SLC-7`): 246576** ([URL](https://www.ticketmaster.com/smiths-ballpark-tickets-salt-lake-city/venue/246576)). Inactive room; any Bees events here are pre-2025.
- **Abravanel Hall (`SLC-15`): 246474** ([URL](https://www.ticketmaster.com/Abravanel-Hall-tickets-Salt-Lake-City/venue/246474)); a Celtic Woman event dated Dec 2, 2025 in Salt Lake City appeared in the same search.
- **Eccles Theater (`SLC-16`): 246872** ([URL](https://www.ticketmaster.com/Eccles-Theater-tickets-Salt-Lake-City/venue/246872)). Broadway subscriptions still run through ArtTix; touring concerts and comedy appear on Ticketmaster.
- **Kingsbury Hall (`SLC-18`): 246858** ([URL](https://www.ticketmaster.com/kingsbury-hall-salt-lake-city-tickets-salt-lake-city/venue/246858)).
- **Utah State Fairpark (parent of `SLC-9`, `SLC-17`, `SLC-21`): two IDs — "Utah State Fairpark" 246986** ([URL](https://www.ticketmaster.com/utah-state-fairpark-tickets-salt-lake-city/venue/246986)) **and "Utah State Fair" 246773** ([URL](https://www.ticketmaster.com/Utah-State-Fair-tickets-Salt-Lake-City/venue/246773)). Neither names the Days of '47 Arena, Grand Building or Promontory Hall. Rodeo and concert events are sold at the grounds level, e.g. [2026 Days of '47 Rodeo, Jul 21, 2026](https://www.ticketmaster.com/2026-utah-days-of-47-rodeo-salt-lake-city-07-21-2026/event/Z7r9jZ1A7-98p) and [Lynyrd Skynyrd, Sep 16, 2026](https://www.ticketmaster.com/event/Z7r9jZ1A7PeQd) (event pages could not be fetched to confirm which of the two venue IDs they use). **Treat both IDs as the Fairpark parent; the child rooms have no Ticketmaster ID of their own.**
- **The Ballpark at America First Square (`SLC-10`): events exist, ID not found.** Ticketmaster lists Bees home games in South Jordan, UT for 2025 and 2026 (e.g. [Aug 18, 2026 vs Reno](https://www.ticketmaster.com/event/1E006434E965A0EF), [Aug 20, 2025 vs Reno](https://www.ticketmaster.com/salt-lake-bees-vs-reno-aces-south-jordan-utah-08-20-2025/event/1E00624CE7FA410F)), but no `/venue/NNNNN` URL for the ballpark came back and the event pages could not be fetched. **Not verified.**
- **Capitol Theatre (`SLC-19`): events exist, ID not found.** Ballet West's Nutcracker is on Ticketmaster ([Dec 27, 2025](https://www.ticketmaster.com/ballet-west-w-the-nutcracker-salt-lake-city-12-27-2025/event/Z7r9jZ1A7jVGN)), but a Ticketmaster venue URL for the Salt Lake Capitol Theatre did not surface (results were Capitol Theatres in Wheeling, WV and Davenport, IA). **Not verified.**
- **West Desert (`SLC-11`):** a Ticketmaster-only search for "Utah Motorsports Campus Grantsville" returned no links. **Not verified.**
- **SLCC Bruin Arena (`SLC-13`):** LOVB's official venue page names no ticketing provider ([lovb.com](https://www.lovb.com/teams/lovb-salt-lake-volleyball/venues/salt-lake-community-college-bruin-arena)); only resale listings (Gametime, Expedia) appeared. **Not verified.**
- Also seen but outside the venue table: "The Union" venue 246906 ([URL](https://www.ticketmaster.com/the-union-tickets-salt-lake-city/venue/246906)), one of the venue answer's unverified ~1,000–3,000 leads.

**Count after second pass:** 6 IDs fetched (`SLC-1`, `SLC-2`, `SLC-4`, `SLC-5` via blog link, `SLC-6`, `SLC-8`); 6 more IDs from venue URLs, page not fetched (`SLC-7`, `SLC-12`, `SLC-15`, `SLC-16`, `SLC-18`, and the Fairpark parent covering `SLC-9`/`SLC-17`/`SLC-21`); 7 rooms still with no ID (`SLC-3`, `SLC-10`, `SLC-11`, `SLC-13`, `SLC-14`, `SLC-19`, `SLC-20`).

**If a room has no ID, the city ships with no concerts there.** On current evidence, that would include **The Ballpark at America First Square** and the **Capitol Theatre** (both have Ticketmaster events but no verified venue ID), plus the church rooms, West Desert, Bruin Arena and America First Ballpark. The Days of '47 Arena resolves only to the Fairpark parent.

---

## 3. Free schedule feed per team

**Status (Oct 13): not researched.** The search limit was reached before this item.

**Second pass (Oct 14, 2026): researched.** Each feed below was fetched directly and the team entry read. "Verified" means the API response named the team.

| Team | Feed | Team ID | Verification | Notes |
|---|---|---|---|---|
| Utah Jazz | ESPN site API, `basketball/nba` | **26** | [teams list](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams) names "Utah Jazz," abbreviation UTAH | — |
| Utah Mammoth | ESPN site API, `hockey/nhl` | **129764** | [teams/129764](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/129764) names "Utah Mammoth," venue Delta Center | The NHL teams list page was too long for the fetch tool to reach the Utah entry; the direct team endpoint worked |
| Utah Mammoth (second feed) | NHL API, `api-web.nhle.com` | tricode **UTA** | [standings/now](https://api-web.nhle.com/v1/standings/now) names "Utah Mammoth"; [club-schedule-season/UTA/now](https://api-web.nhle.com/v1/club-schedule-season/UTA/now) returns the 2026-27 schedule | Schedule feed carries venue per game and a `neutralSite` flag. In the first 40 games read, every home game was at Delta Center and no game was flagged neutral; the list was cut off before Dec 31, so the Winter Classic (section 4) was not seen in the feed |
| Real Salt Lake | ESPN site API, `soccer/usa.1` | **4771** | [teams list](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams) names "Real Salt Lake," abbreviation RSL | — |
| Utah Royals | ESPN site API, `soccer/usa.nwsl` | **19141** | [teams list](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams) names "Utah Royals," abbreviation UTA | — |
| Salt Lake Bees | MLB Stats API, `sportId=11` | **561** | [teams?sportId=11](https://statsapi.mlb.com/api/v1/teams?sportId=11) names "Salt Lake Bees," venue "The Ballpark at America First Square" (venue id **6135**), Pacific Coast League, parent Los Angeles Angels | [2025 schedule](https://statsapi.mlb.com/api/v1/schedule?sportId=11&teamId=561&season=2025&gameType=R,F,D,L,W) returned 150 games; every visible home game at venue 6135; **no `attendance` field** in the schedule records (would need per-game boxscore/linescore calls) |
| Utah Utes football | ESPN site API, `football/college-football` | **254** | [teams/254](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/254) names "Utah Utes," venue Rice-Eccles Stadium | — |
| Utah Utes men's basketball | ESPN site API, `basketball/mens-college-basketball` | **254** | [teams/254](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/254) names "Utah Utes," venue Jon M. Huntsman Center | Same ID across ESPN college sports; women's basketball, gymnastics and volleyball not fetched |
| Salt Lake City Stars | ESPN site API, `basketball/nba-development` | **19** | [teams list](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams) names "Salt Lake City Stars," abbreviation SLC | — |
| BYU (football) | ESPN site API, `football/college-football` | **252** | [teams/252](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/252) names "BYU Cougars," venue LaVell Edwards Stadium | Out of area; useful only for BYU games played inside Salt Lake County |
| Real Monarchs | No ESPN feed checked | — | Official schedule page: [rsl.com Monarchs 2026 schedule](https://www.rsl.com/monarchs/news/real-monarchs-unveil-2026-regular-season-schedule) (14 home matches, all at Zions Bank Stadium, first Mar 1, 2026) | **No free feed verified.** An ESPN MLS NEXT Pro endpoint was not guessed |
| LOVB Salt Lake | No ESPN feed | — | Official page: [lovb.com schedule](https://www.lovb.com/news/2026-lovb-pro-schedule-announced), [venues](https://www.lovb.com/teams/lovb-salt-lake-volleyball/venues) | **No free feed verified** |
| UFL Utah | n/a until 2028 | — | — | — |

**Teams with no free feed verified:** Real Monarchs, LOVB Salt Lake. Utes women's basketball, gymnastics and volleyball were not fetched (likely on ESPN under the same team ID 254, but not checked).

What was seen on Oct 13:
- The Bees' full schedule "can be found online at slbees.com" ([ABC4, Aug 13, 2024](https://www.abc4.com/sports/local-sports/bees-2025-schedule-daybreak/amp)).
- LOVB publishes its schedule on lovb.com ([LOVB, Nov 6, 2025](https://www.lovb.com/news/2026-lovb-pro-schedule-announced)).
- utahutes.com is the Utes' official schedule source (venue answer §3).

These are official schedule pages. They have not been verified as feeds.

**Remaining next checks (after second pass):** an MLS NEXT Pro feed for the Real Monarchs; a LOVB feed; ESPN women's college sports endpoints for Utah (ID 254 expected).

The full team table is in section 3 of "End with" below.

---

## 4. Games away from the home venue (2025 on)

See section 4 of "End with" below for the table. Notes:

- **The venue answer's BYU-at-Delta-Center citation does not support the claim.** Its link (`kslsports.com/?p=524580`) redirects to a Sept 4, 2024 KSL story on Big 12 football stadium capacities. That story does not mention the Delta Center ([KSL Sports](https://sports.ksl.com/ncaa/byu/byu-football-big-12-stadium-rankings-capacity-2024-season/524580)). **Second pass: now verified from BYU's own schedule releases** — BYU men's basketball played three 2025-26 games at the Delta Center (Oct 24 vs North Carolina, Nov 21 vs Wisconsin, Dec 3 vs Cal Baptist; BYU's page says Delta Center games "are considered neutral-site games") ([byucougars.com, Jul 22, 2025](https://byucougars.com/news/2025/7/22/byu-2025-26-non-conference-schedule)) and has two more in 2026-27 (Nov 2, 2026 vs Ohio State; Dec 5, 2026 vs Northwestern) ([byucougars.com, Jul 20, 2026](https://byucougars.com/news/2026/07/20/byu-mbb-announces-2026-27-non-conference-schedule)). These belong on the Delta Center row (`SLC-5`) as neutral-site events, not to Provo.
- **Utah Mammoth:** no relocated, neutral-site or international home game *through 2025-26* was found.
  - The Delta Center stayed the home site through renovations. Phase 1 finished for the Oct 2, 2025 preseason opener ([Wikipedia, secondary](https://en.wikipedia.org/wiki/Delta_Center)). The Sept 26, 2026 preseason finale vs Colorado was at home ([Deseret News](https://www.deseret.com/sports/2026/09/25/delta-center-renovations-2026-27-utah-mammoth/)).
  - A preseason game in Las Vegas (Sept 2026, date not stated) was a *road* game, not a displaced home game.
  - **Second pass — one 2026-27 home game is away from the Delta Center:** the **2027 NHL Winter Classic, Dec 31, 2026, Utah vs Colorado at Rice-Eccles Stadium (`SLC-1`)**. The team's schedule release counts "41 home games at Delta Center, plus the Winter Classic" ([nhl.com/utah, Jul 16, 2026](https://www.nhl.com/utah/news/utah-mammoth-announce-2026-27-regular-season-schedule-release-7-16-26); [key home dates](https://www.nhl.com/utah/news/key-home-dates-for-the-2026-27-season-feature-7-16-26); [KUTV](https://kutv.com/news/local/mammoth-avalanche-to-face-off-in-new-years-eve-nhl-winter-classic-in-salt-lake)). No Global Series or other neutral-site game is in the release. The NHL API schedule read (section 3) cut off before Dec 31, so the feed's venue string for that game was not seen; a build must not let it resolve to the Delta Center.
- **Utah Jazz:** none found. The Sept 25, 2026 Deseret story mentions no Jazz games away from the Delta Center ([Deseret News](https://www.deseret.com/sports/2026/09/25/delta-center-renovations-revealed-for-2026-2027-utah-jazz-season/)), and the Aug 13, 2026 Deseret schedule preview names no neutral-site or international game ([Deseret News](https://www.deseret.com/sports/2026/08/13/utah-jazz-2026-27-schedule-best-games/)). The full 2026-27 schedule was only an image in that article, so this is "none found," not "none exist."
- **Utah Utes basketball:** one designated home game off campus — **Dec 13, 2025 vs Mississippi State at the Delta Center** ("Salt Lake Showcase"), listed by Utah as "vs," i.e. a Utah home game, and lost 74-82 ([utahutes.com, Dec 10, 2025](https://utahutes.com/news/2025/12/10/mens-basketball-runnin-utes-welcome-mississippi-state-into-town-saturday-night-inside-delta-center); [Delta Center](https://www.deltacenter.com/news/salt-lake-showcase-december-13-2025/) — the Delta Center page says "Friday, December 13, 2025," but Dec 13, 2025 was a Saturday and the Utah page says Saturday; use Saturday). Utah's 2025-26 release also lists Nov 25, 2025 vs Grand Canyon in Palm Desert, Calif. (Acrisure Series, neutral) ([utahutes.com, Aug 11, 2025](https://utahutes.com/news/2025/8/11/mens-basketball-runnin-utes-finalize-non-conference-schedule)). Note: that page now mixes in 2026-27 listings, so dates were cross-checked with the Dec 10, 2025 preview.
- **Utah Utes football bowls (neutral site):** Dec 23, 2023 Las Vegas Bowl vs Northwestern, Allegiant Stadium, 20,897 ([Wikipedia 2023 season](https://en.wikipedia.org/wiki/2023_Utah_Utes_football_team), secondary); no bowl in 2024 ([Wikipedia 2024 season](https://en.wikipedia.org/wiki/2024_Utah_Utes_football_team)); Dec 31, 2025 Las Vegas Bowl vs Nebraska, Allegiant Stadium, 38,879 ([Wikipedia 2025 season](https://en.wikipedia.org/wiki/2025_Utah_Utes_football_team), secondary).
- **RSL, Royals, Bees, Monarchs 2025 on:** no relocated home game found. The MLB Stats API shows every visible 2025 Bees home game at venue 6135 (section 3); the Monarchs' 2026 schedule has all 14 home matches at Zions Bank Stadium ([rsl.com](https://www.rsl.com/monarchs/news/real-monarchs-unveil-2026-regular-season-schedule)). RSL's 2025 playoff match was a true road game at Portland (section 5).

---

## 5. Postseason and past crowds

See section 5 of "End with" below for the tables.
- **Range covered:** 2023 to Oct 2026, where sources were found.
- Postseason and regular season are kept separate.
- Most professional teams had **no season attendance series** on Oct 13. Only Utah football had official season averages (through 2023).
- **Second pass:** season averages were added for the Jazz (2023-24, 2024-25), Utah HC (2024-25), RSL (2023–2025), Royals (2025, 2026 partial) and Bees (2025), plus playoff crowds for the Mammoth (2026) and RSL (2023–2025) and per-game Utes football crowds for 2024–2025. Nearly all are **secondary** (Wikipedia season pages, KSL, Deseret); the sources are named in each row. Still missing: Jazz 2025-26 average, Mammoth 2025-26 average, RSL 2026, Bees 2024 and 2026, Stars, Utes basketball.
- Like the Tampa Bay precedent, feeds return no counts (the MLB Stats API schedule had no attendance field; ESPN match pages fetched empty), so this history came from encyclopedias and news, not feeds.

---

## 6. Team colors

**Status (Oct 13): not researched (search limit reached).** Wikipedia's Real Monarchs page lists "home colors" and "away colors" with no hex values or sources ([Wikipedia](https://en.wikipedia.org/wiki/Real_Monarchs)).

**Second pass (Oct 14, 2026).** Rule applied: official team/university brand page first; where the official source names colors but gives no hex, the ESPN API `color`/`alternateColor` values are used and labeled **secondary**. No hex was guessed.

| Team | Official color names (source) | Official hex? | Hex used (source) |
|---|---|---|---|
| Utah Utes (all sports) | Utah Red, Black, White; "Zion Cinder Cone" grey is also a core color | **Yes** | Utah Red **#BE0000**, Black **#000000**, White #FFFFFF ([brand.utah.edu colors](https://brand.utah.edu/branding/colors/), official). ESPN agrees: color be0000, alternate ffffff |
| BYU | Navy (dominant), White; Royal is a secondary/athletics accent ([brand.byu.edu/colors](https://brand.byu.edu/colors), names only) | **Yes** (BYU Marriott School brand page) | Navy **#002E5D**, White #FFFFFF; Royal **#003DA5** secondary ([marriott.byu.edu](https://marriott.byu.edu/brand/identity/color-palette), official university unit page). ESPN differs on the primary: color 0047ba, alternate 002e5d (secondary) |
| Utah Jazz | "purple, black, yellow and white" at the June 2022 rebrand ([KSL, Jun 17, 2022](https://www.ksl.com/article/sports/utah-jazz/utah-jazz-officially-reveal-their-new-rebrand/50425014), reported). The affiliate Stars' 2025 rebrand names "Mountain Purple, Sky Blue, and Midnight Black" ([Stars site](https://saltlakecity.gleague.nba.com/news/slc-stars-unveil-rebrand), official G League page) | No official hex found | **4e008e** primary, **79a3dc** alternate ([ESPN NBA teams API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams), **secondary**) |
| Utah Mammoth | "Rock Black," "Salt White," "Mountain Blue" ([nhl.com, May 7, 2025](https://www.nhl.com/news/mammoth-unveiled-as-utah-nickname), league-official; [Delta Center](https://www.deltacenter.com/?p=6903), official) | No official hex found | **000000** primary ([ESPN NHL teams/129764](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/129764), **secondary**); ESPN gives no alternateColor for this team, so **secondary hex = gap** (Mountain Blue has no sourced hex) |
| Real Salt Lake | Claret, cobalt and gold are the long-standing names, but no official hex page was found in this pass | No | **a32035** primary, **daa900** alternate ([ESPN MLS teams API](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams), **secondary**) |
| Utah Royals | The club's "how the new brand came to be" page names no colors or hex ([rsl.com](https://www.rsl.com/utahroyals/news/how-the-utah-royals-new-brand-came-to-be)) | No | **ae122a** primary, **fdb71a** alternate ([ESPN NWSL teams API](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams), **secondary**) |
| Salt Lake Bees | Black and gold kept; red added; cream alternate, per the Nov 2024 refresh ([KSL, Nov 25, 2024](https://www.ksl.com/article/51195702/how-salt-lake-bees-picked-new-colors-jerseys-and-logos-as-part-of-major-brand-refresh), reported) | No | **gap** — no hex source found (MLB Stats API team record carries no colors) |
| Salt Lake City Stars | "Mountain Purple, Sky Blue, and Midnight Black" ([Stars site, 2025 rebrand](https://saltlakecity.gleague.nba.com/news/slc-stars-unveil-rebrand), official) | No | **002B5C** primary, **F9A01B** alternate ([ESPN G League teams API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams), **secondary**). **Conflict:** ESPN's navy/orange values look pre-rebrand; the 2025 official names are purple/sky blue/black. Flag for re-check |
| Real Monarchs | Wikipedia names only; rsl.com Monarchs pages fetched name no colors | No | **gap** |
| LOVB Salt Lake | Logo described as "a vibrant shade of yellow" ([KSL, Dec 5, 2023](https://www.ksl.com/article/50808636/a-first-look-at-salt-lakes-pro-volleyball-team-that-will-begin-play-in-2024), reported); league jersey article gives no colors ([SportsLogos.net](https://news.sportslogos.net/2024/09/30/league-one-volleyball-unveils-jerseys-for-all-6-teams-in-inaugural-season/other/)) | No | **gap** |
| UFL Utah | not yet announced | — | n/a |

**Counts:** official hex for 2 programs (Utah, BYU); official color *names* with ESPN secondary hex for 5 (Jazz, Mammoth primary only, RSL, Royals, Stars); hex still gap for Mammoth secondary, Bees, Monarchs, LOVB Salt Lake.

---

# End with

## 1. Name, short form, code and covered area

| Field | Value | Basis |
|---|---|---|
| Display name | Salt Lake City | Judgment; the market name used by [Deseret News](https://www.deseret.com/sports/2026/02/28/is-salt-lake-city-emerging-as-a-leader-contender-for-mlb-expansion/) and the core of the federal MSA name ["Salt Lake City-Murray"](https://edcutah.org/recent-news/research-minute-updates-to-utahs-core-based-statistical-areas) |
| Short form | Salt Lake | Used in team names: Real Salt Lake, Salt Lake Bees, Salt Lake City Stars, LOVB Salt Lake (venue answer §3) |
| Code | SLC | City government's own short form, SLC.gov ([KUTV, 2018](https://kutv.com/news/local/salt-lake-city-launches-new-web-presence-with-slcgov)); ESPN's code for the Salt Lake City Stars ([ESPN](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams)). Big-league teams use state codes (ESPN UTAH; NHL UTA), not a market code |
| Covered area | Salt Lake County (core) + Tooele County (flagged edge, `SLC-11` only) | [EDCUtah MSA definition](https://edcutah.org/recent-news/research-minute-updates-to-utahs-core-based-statistical-areas); venue answer §1 |
| Utah County (Provo, BYU) | **Not in** | Separate Provo-Orem-Lehi MSA ([EDCUtah](https://edcutah.org/recent-news/research-minute-updates-to-utahs-core-based-statistical-areas)) |
| Ogden (Weber/Davis/Morgan) | **Not in** | Separate Ogden MSA ([EDCUtah](https://edcutah.org/recent-news/research-minute-updates-to-utahs-core-based-statistical-areas)) |

## 2. Ticketmaster venue IDs

| Venue row ID | Room | Ticketmaster venue ID | Verification link (or "not verified") |
|---|---|---|---|
| SLC-1 | Rice-Eccles Stadium | 246158 | [ticketmaster.com/…/venue/246158](https://www.ticketmaster.com/riceeccles-stadium-tickets-salt-lake-city/venue/246158) (fetched; names Rice-Eccles Stadium) |
| SLC-2 | Utah First Credit Union Amphitheatre | 246771 | [ticketmaster.com/…/venue/246771](https://www.ticketmaster.com/utah-first-credit-union-amphitheatre-billets-west-valley-city/venue/246771) (fetched; West Valley City; 2026 shows) |
| SLC-3 | Conference Center (Temple Square) | — | not verified (free church ticketing; not searched) |
| SLC-4 | America First Field | 246832 | [ticketmaster.com/…/venue/246832](https://www.ticketmaster.com/america-first-field-tickets-sandy/venue/246832) (fetched Oct 14; 17 RSL 2026 home games, no Royals games). Child room "Beddy's Plaza at America First Field" = [247095](https://www.ticketmaster.com/beddys-plaza-at-america-first-field-tickets-sandy/venue/247095) (URL seen; not fetched). AXS venue 102028 also seen earlier |
| SLC-5 | Delta Center | 246072 | Linked from [Ticketmaster blog](https://blog.ticketmaster.com/step-inside-delta-center-salt-lake-city-ut/) (old "vivint-arena" slug); direct page fetch failed. **SeatGeek is the official ticketer since Oct 11, 2023** ([Delta Center](https://www.deltacenter.com/news/seatgeek-is-now-the-ticketing-provider-at-delta-center/)) |
| SLC-6 | Jon M. Huntsman Center | 246507 | [ticketmaster.com/…/venue/246507](https://www.ticketmaster.com/jon-m-huntsman-center-tickets-salt-lake-city/venue/246507) (fetched) |
| SLC-7 | Smith's Ballpark | 246576 | [ticketmaster.com/…/venue/246576](https://www.ticketmaster.com/smiths-ballpark-tickets-salt-lake-city/venue/246576) (URL seen in search; page fetch blocked). Inactive room |
| SLC-8 | Maverik Center | 246774 | [ticketmaster.com/…/venue/246774](https://www.ticketmaster.com/maverik-center-billets-west-valley-city/venue/246774?page=2) (fetched; West Valley City) |
| SLC-9 | Days of '47 Arena | — (parent only) | No arena-level ID. Fairpark parent IDs: "Utah State Fairpark" [246986](https://www.ticketmaster.com/utah-state-fairpark-tickets-salt-lake-city/venue/246986) and "Utah State Fair" [246773](https://www.ticketmaster.com/Utah-State-Fair-tickets-Salt-Lake-City/venue/246773) (URLs seen; pages not fetched). Rodeo and concert events are sold at grounds level ([Jul 21, 2026 rodeo](https://www.ticketmaster.com/2026-utah-days-of-47-rodeo-salt-lake-city-07-21-2026/event/Z7r9jZ1A7-98p)). SeatGeek listing also seen earlier |
| SLC-10 | The Ballpark at America First Square | — | not verified. Bees home games are on Ticketmaster in South Jordan ([Aug 18, 2026](https://www.ticketmaster.com/event/1E006434E965A0EF)), but no venue URL surfaced and event pages could not be fetched |
| SLC-11 | West Desert | — | not verified (Ticketmaster-only search returned no links) |
| SLC-12 | Zions Bank Stadium | 246992 | [ticketmaster.com/…/venue/246992](https://www.ticketmaster.com/zions-bank-stadium-tickets-herriman/venue/246992) (URL seen in search; page fetch blocked) |
| SLC-13 | SLCC Bruin Arena | — | not verified (LOVB venue page names no ticketer; only resale listings found) |
| SLC-14 | Salt Lake Tabernacle | — | not verified (free church ticketing; not searched) |
| SLC-15 | Maurice Abravanel Hall | 246474 | [ticketmaster.com/…/venue/246474](https://www.ticketmaster.com/Abravanel-Hall-tickets-Salt-Lake-City/venue/246474) (URL seen in search; page fetch blocked) |
| SLC-16 | Eccles Theater | 246872 | [ticketmaster.com/…/venue/246872](https://www.ticketmaster.com/Eccles-Theater-tickets-Salt-Lake-City/venue/246872) (URL seen in search; page fetch blocked). Broadway series still sells via ArtTix ([Broadway SLC](https://saltlakecity.broadway.com/help/individual-tickets)) |
| SLC-17 | Grand Building (Fairpark) | — (parent only) | No room-level ID; see SLC-9 parent IDs |
| SLC-18 | Kingsbury Hall | 246858 | [ticketmaster.com/…/venue/246858](https://www.ticketmaster.com/kingsbury-hall-salt-lake-city-tickets-salt-lake-city/venue/246858) (URL seen in search; page fetch blocked). University ticketing also exists |
| SLC-19 | Capitol Theatre | — | not verified. Ballet West's Nutcracker is on Ticketmaster ([Dec 27, 2025](https://www.ticketmaster.com/ballet-west-w-the-nutcracker-salt-lake-city-12-27-2025/event/Z7r9jZ1A7jVGN)), but no Salt Lake Capitol Theatre venue URL surfaced |
| SLC-20 | Charlie Monfort Field at America First Ballpark | — | not verified (not searched; college baseball, university ticketing expected) |
| SLC-21 | Promontory Hall (Fairpark) | — (parent only) | No room-level ID; see SLC-9 parent IDs |

## 3. Teams: league, home venue, free feed, colors

Filled in the second pass (Oct 14, 2026). Feed IDs were verified by fetching the API (section 3). Hex labeled **(secondary)** comes from the ESPN API; **(official)** from a university brand page. Color-name sources are in section 6.

| Team | League | Home venue row ID | Free feed and ID | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| Utah Jazz | NBA | SLC-5 | ESPN `basketball/nba` team **26** ([API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams)) | 4e008e (secondary) | 79a3dc (secondary) | Names "purple, black, yellow and white" ([KSL, 2022](https://www.ksl.com/article/sports/utah-jazz/utah-jazz-officially-reveal-their-new-rebrand/50425014)); hex from ESPN |
| Utah Mammoth (Utah Hockey Club 2024–25) | NHL | SLC-5; **Dec 31, 2026 Winter Classic at SLC-1** | ESPN `hockey/nhl` team **129764** ([API](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/129764)); NHL API tricode **UTA** ([schedule feed](https://api-web.nhle.com/v1/club-schedule-season/UTA/now)) | 000000 (secondary) | gap (ESPN gives none; "Mountain Blue" has no sourced hex) | Names "Rock Black, Salt White, Mountain Blue" ([nhl.com](https://www.nhl.com/news/mammoth-unveiled-as-utah-nickname), official); hex from ESPN |
| Real Salt Lake | MLS | SLC-4 | ESPN `soccer/usa.1` team **4771** ([API](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams)) | a32035 (secondary) | daa900 (secondary) | ESPN only; no official hex page found |
| Utah Royals | NWSL | SLC-4 | ESPN `soccer/usa.nwsl` team **19141** ([API](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams)) | ae122a (secondary) | fdb71a (secondary) | ESPN only; club brand page names no colors ([rsl.com](https://www.rsl.com/utahroyals/news/how-the-utah-royals-new-brand-came-to-be)) |
| Salt Lake Bees | MiLB Triple-A (PCL) | SLC-10 (from Apr 8, 2025); SLC-7 before | MLB Stats API `sportId=11` team **561**, venue **6135** ([API](https://statsapi.mlb.com/api/v1/teams?sportId=11)); official page slbees.com ([ABC4](https://www.abc4.com/sports/local-sports/bees-2025-schedule-daybreak/amp)) | gap | gap | Names black, gold, red (added 2024), cream alternate ([KSL, Nov 25, 2024](https://www.ksl.com/article/51195702/how-salt-lake-bees-picked-new-colors-jerseys-and-logos-as-part-of-major-brand-refresh)); no hex source |
| Utah Utes football | NCAA FBS (Big 12) | SLC-1 | ESPN `football/college-football` team **254** ([API](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/254)); official page utahutes.com | #BE0000 (official) | #000000 (official; white #FFFFFF also core) | [brand.utah.edu](https://brand.utah.edu/branding/colors/) (official) |
| Utah Utes basketball / gymnastics / volleyball | NCAA | SLC-6; **Dec 13, 2025 men's game at SLC-5** | ESPN `basketball/mens-college-basketball` team **254** ([API](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/254)); women's sports not fetched | #BE0000 (official) | #000000 (official) | [brand.utah.edu](https://brand.utah.edu/branding/colors/) (official) |
| Utah Utes baseball | NCAA | SLC-20 (2026–); SLC-7 to May 2025 | ESPN college baseball not fetched; team ID 254 expected | #BE0000 (official) | #000000 (official) | [brand.utah.edu](https://brand.utah.edu/branding/colors/) (official) |
| Salt Lake City Stars *(added)* | NBA G League | SLC-8 | ESPN `basketball/nba-development` team **19**, abbreviation SLC ([API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams)) | 002B5C (secondary; **likely pre-2025 rebrand**) | F9A01B (secondary; same caveat) | Official names "Mountain Purple, Sky Blue, Midnight Black" ([Stars, 2025](https://saltlakecity.gleague.nba.com/news/slc-stars-unveil-rebrand)); ESPN hex conflicts, flag |
| Real Monarchs *(added)* | MLS NEXT Pro | SLC-12 | **no feed verified**; official schedule [rsl.com](https://www.rsl.com/monarchs/news/real-monarchs-unveil-2026-regular-season-schedule) | gap | gap | gap (Wikipedia gives no hex) |
| LOVB Salt Lake *(added)* | LOVB Pro | SLC-13 (2026) | **no feed verified**; official page lovb.com ([LOVB](https://www.lovb.com/news/2026-lovb-pro-schedule-announced)) | gap | gap | gap ("vibrant shade of yellow" logo per [KSL](https://www.ksl.com/article/50808636/a-first-look-at-salt-lakes-pro-volleyball-team-that-will-begin-play-in-2024); no hex) |
| UFL Utah (unnamed) *(added; from 2028)* | UFL | SLC-4 | n/a until 2028; name and colors not yet announced ([SLTrib](https://www.sltrib.com/sports/2026/09/23/ufl-expansion-team-is-coming-utah/)) | n/a | n/a | n/a |
| BYU | NCAA (Big 12) | Out of area (Provo); men's basketball games at SLC-5 (section 4) | ESPN `football/college-football` team **252** ([API](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/252)) | #002E5D Navy (official) | #FFFFFF White (official; Royal #003DA5 is the athletics accent) | [BYU Marriott brand page](https://marriott.byu.edu/brand/identity/color-palette) (official); [brand.byu.edu](https://brand.byu.edu/colors) names only. ESPN differs (0047ba / 002e5d) |

**Departed (do not wire):**
- Utah Grizzlies (ECHL): final game Apr 12, 2026 ([Deseret](https://www.deseret.com/sports/2026/04/12/utah-grizzlies-final-game/)).
- Utah Warriors (MLR): suspended Nov 2025 (venue answer).

**Unconfirmed:** Utah Great 8's (IAL), per the venue answer.

**Teams with no free feed verified (second pass):** Real Monarchs and LOVB Salt Lake. Every other active team has an ESPN, MLB Stats API or NHL API entry verified above.

## 4. Games away from the home venue (2025 on)

| Team | Date | Actual site | Type | Source |
|---|---|---|---|---|
| LOVB Salt Lake | 2025 season (dates gap) | Maverik Center (SLC-8) and BYU Smith Fieldhouse, Provo (out of area) | "Home" matches away from the main home venue | [Wikipedia LOVB Pro](https://en.wikipedia.org/wiki/LOVB_Pro), [Wikipedia LOVB Salt Lake](https://en.wikipedia.org/wiki/LOVB_Salt_Lake) (secondary) |
| LOVB Salt Lake | February 2026 (exact date not announced in source) | Municipal Arena, Kansas City, MO (LOVB Classic) | Neutral site | [LOVB, Nov 6, 2025](https://www.lovb.com/news/2026-lovb-pro-schedule-announced) (official) |
| LOVB Salt Lake | Apr 10 and Apr 12, 2026 | Louisville, KY | Postseason semifinal, neutral site | [LOVB, Apr 2026](https://lovb.com/news/260404-salt-lake-clinches-playoff-seat) (official) |
| LOVB Salt Lake | April 2026 (date gap; cited article dated Apr 18, 2026) | Long Beach, CA | Championship, neutral site; lost to LOVB Austin | [Wikipedia LOVB Pro](https://en.wikipedia.org/wiki/LOVB_Pro) (secondary) |
| **Utah Mammoth** | **Dec 31, 2026** | **Rice-Eccles Stadium (SLC-1)**, vs Colorado | **2027 NHL Winter Classic; a Mammoth home game away from the Delta Center** (team counts "41 home games at Delta Center, plus the Winter Classic") | [nhl.com/utah schedule release](https://www.nhl.com/utah/news/utah-mammoth-announce-2026-27-regular-season-schedule-release-7-16-26), [key home dates](https://www.nhl.com/utah/news/key-home-dates-for-the-2026-27-season-feature-7-16-26) (official); [KUTV](https://kutv.com/news/local/mammoth-avalanche-to-face-off-in-new-years-eve-nhl-winter-classic-in-salt-lake) |
| Utah Mammoth | 2025–26 | — | None found (preseason in Las Vegas, Sept 2026, was a road game). NHL API shows no neutral-site flag in the first 40 games of 2026-27 | [Deseret](https://www.deseret.com/sports/2026/09/25/delta-center-renovations-2026-27-utah-mammoth/); [NHL API](https://api-web.nhle.com/v1/club-schedule-season/UTA/now) |
| Utah Jazz | 2025–26, 2026–27 | — | None found in schedule coverage; full 2026-27 schedule seen only as an image | [Deseret, Aug 13, 2026](https://www.deseret.com/sports/2026/08/13/utah-jazz-2026-27-schedule-best-games/) |
| BYU men's basketball (out-of-area team, in-area site) | Oct 24, 2025; Nov 21, 2025; Dec 3, 2025 | Delta Center (SLC-5) vs North Carolina, Wisconsin, Cal Baptist | Neutral-site per BYU; attach to SLC-5 | [byucougars.com, Jul 22, 2025](https://byucougars.com/news/2025/7/22/byu-2025-26-non-conference-schedule) (official) |
| BYU men's basketball | Nov 2, 2026; Dec 5, 2026 | Delta Center (SLC-5) vs Ohio State, Northwestern | Neutral-site; attach to SLC-5 | [byucougars.com, Jul 20, 2026](https://byucougars.com/news/2026/07/20/byu-mbb-announces-2026-27-non-conference-schedule) (official) |
| Utah Utes men's basketball | Dec 13, 2025 | Delta Center (SLC-5) vs Mississippi State ("Salt Lake Showcase"; L 74-82) | Utah-designated home game off campus; do not place at Huntsman Center | [utahutes.com](https://utahutes.com/news/2025/12/10/mens-basketball-runnin-utes-welcome-mississippi-state-into-town-saturday-night-inside-delta-center) (official); [Delta Center](https://www.deltacenter.com/news/salt-lake-showcase-december-13-2025/) (says "Friday"; date was a Saturday) |
| Utah Utes men's basketball | Nov 25, 2025 | Palm Desert, Calif. (Acrisure Series) vs Grand Canyon | Neutral site, out of area | [utahutes.com, Aug 11, 2025](https://utahutes.com/news/2025/8/11/mens-basketball-runnin-utes-finalize-non-conference-schedule) (official) |
| Utah Utes football | Dec 31, 2025 | Allegiant Stadium, Las Vegas (Las Vegas Bowl) vs Nebraska, 38,879 | Postseason, neutral site | [Wikipedia 2025 season](https://en.wikipedia.org/wiki/2025_Utah_Utes_football_team) (secondary) |
| Real Salt Lake | Oct 22, 2025 | Providence Park, Portland (MLS Wild Card), 16,243 | True road playoff game, not a displaced home game | [timbers.com](https://www.timbers.com/news/mls-cup-playoffs-recap-portland-timbers-beat-real-salt-lake-3-1-in-wild-wild-card-game-to-advance-in-the-audi-mls-cup-playoffs) (official) |
| RSL, Royals, Bees, Monarchs | 2025–26 | — | No relocated home games found (Bees: MLB Stats API venue 6135 on every visible 2025 home game; Monarchs: all 14 2026 home matches at Zions Bank Stadium) | [MLB Stats API](https://statsapi.mlb.com/api/v1/schedule?sportId=11&teamId=561&season=2025&gameType=R,F,D,L,W); [rsl.com](https://www.rsl.com/monarchs/news/real-monarchs-unveil-2026-regular-season-schedule) |

**Pre-2025 context, outside the requested range:** the Utah Warriors played at America First Field on Jun 28, 2024 rather than at their Zions Bank Stadium home, drawing 10,906 in the attendance table (the article text says 10,900) ([Wikipedia](https://en.wikipedia.org/wiki/America_First_Field), secondary).

## 5. Postseason and past crowds per team

**Range covered:** 2023 to Oct 13, 2026. Postseason and regular season are separate tables. Tables are labeled by team; the row IDs are from the venue answer.

### Utah Mammoth / Utah Hockey Club (SLC-5)

**Postseason**

| Season | Date | Opponent | Announced attendance | Source |
|---|---|---|---|---|
| 2025–26 | Apr 24, 2026 (Game 3, first playoff home game) | Vegas Golden Knights | 12,478 | [Wikipedia Delta Center](https://en.wikipedia.org/wiki/Delta_Center) (secondary); date and site confirmed by [Deseret caption](https://www.deseret.com/sports/2026/09/25/delta-center-renovations-2026-27-utah-mammoth/) |
| 2025–26 | Apr 27, 2026 (Game 4) | Vegas Golden Knights | 12,478 (L 4–5 OT) | [Wikipedia 2025–26 Mammoth season](https://en.wikipedia.org/wiki/2025%E2%80%9326_Utah_Mammoth_season) (secondary); Delta Center game per [SLTrib caption](https://www.sltrib.com/sports/utah-hockey-club/2026/05/09/delta-center-renovations-begin/) |
| 2025–26 | May 1, 2026 (Game 6) | Vegas Golden Knights | 12,478 (L 1–5; series lost in six) | [Wikipedia 2025–26 Mammoth season](https://en.wikipedia.org/wiki/2025%E2%80%9326_Utah_Mammoth_season) (secondary) |
| 2024–25 | — | — | Did not qualify (eliminated Apr 9, 2025) | [Wikipedia 2024–25 Utah HC season](https://en.wikipedia.org/wiki/2024%E2%80%9325_Utah_Hockey_Club_season) (secondary) |

Note: every 2025–26 playoff crowd equals the 12,478 full-view capacity; the Wikipedia page says "attendances at Delta Center are measured by full-view seats only," so these are capacity-capped counts, not turnstile counts.

**Regular season**

| Season | Figure | Source |
|---|---|---|
| 2024–25 | First game, Oct 8, 2024 vs Chicago: 16,020 (exceeds the 11,131 official hockey capacity because obstructed-view seats were sold) | [Wikipedia](https://en.wikipedia.org/wiki/Delta_Center) (secondary) |
| 2024–25 | Average 11,131 (= official full-view capacity); "sold out all 41 home games"; 4,889 obstructed-view seats sold on top of the 11,131 | [Wikipedia 2024–25 season](https://en.wikipedia.org/wiki/2024%E2%80%9325_Utah_Hockey_Club_season) (secondary); [Deseret, Apr 22, 2025](https://www.deseret.com/sports/2025/04/22/utah-hockey-club-nhl-attendance-records/) (reported) |
| 2025–26 | Per-game figures mostly 12,478 (full-view capacity); season average/total not stated | [Wikipedia 2025–26 season](https://en.wikipedia.org/wiki/2025%E2%80%9326_Utah_Mammoth_season) (secondary) |
| 2026–27 | In progress; capacity 14,111 full-view | gap |

### Utah Jazz (SLC-5)

**Postseason:** none. The Jazz did not qualify for the playoffs or play-in in 2023–24 (31–51), 2024–25 (17–65) or 2025–26 (22–60; "eliminated from playoff contention for the fourth consecutive season") ([Wikipedia 2023–24](https://en.wikipedia.org/wiki/2023%E2%80%9324_Utah_Jazz_season), [2024–25](https://en.wikipedia.org/wiki/2024%E2%80%9325_Utah_Jazz_season), [2025–26](https://en.wikipedia.org/wiki/2025%E2%80%9326_Utah_Jazz_season), all secondary).

**Regular season**

| Season | Figure | Source |
|---|---|---|
| 2023–24 | Average 18,206 over 41 home games; total 746,446 | [Wikipedia](https://en.wikipedia.org/wiki/2023%E2%80%9324_Utah_Jazz_season) (secondary) |
| 2024–25 | Average 18,174 (14th in NBA) | [Wikipedia](https://en.wikipedia.org/wiki/2024%E2%80%9325_Utah_Jazz_season) (secondary) |
| 2025–26 | No average given; game log lists 18,186 for most home games, 20,122 on Oct 22, 2025 vs the Clippers (home opener) | [Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Utah_Jazz_season) (secondary). The repeated 18,186 equals the pre-renovation capacity figure, so treat as capacity-capped |
| 2026–27 | In progress; capacity 17,867 | gap |

### Real Salt Lake (SLC-4)

**Postseason (home games only at America First Field; road games listed for completeness)**

| Season | Date | Opponent / round | Site | Announced attendance | Source |
|---|---|---|---|---|---|
| 2023 | Nov 6, 2023 | Houston Dynamo, Round One Game 2 (1–1, RSL won 5–4 on PKs) | America First Field (home) | 20,251 | Venue per [rsl.com](https://www.rsl.com/news/real-salt-lake-host-houston-in-do-or-die-game-two-of-best-of-three-playoff-serie) (official); crowd per [Wikipedia 2023 season](https://en.wikipedia.org/wiki/2023_Real_Salt_Lake_season) (secondary) |
| 2023 | Oct 29 and Nov 11, 2023 | Houston, Games 1 and 3 | Shell Energy Stadium, Houston (road) | 17,508; 16,374 | same |
| 2024 | Oct 29, 2024 | Minnesota United, Round One Game 1 (lost on PKs) | America First Field (home) | 19,195 | Venue per [rsl.com](https://www.rsl.com/news/real-salt-lake-hosts-minnesota-united-fc-on-tuesday-oct-29-at-7-00p-mt-in-2024-audi-mls-cup-playoff-opener) (official); crowd per [Wikipedia 2024 season](https://en.wikipedia.org/wiki/2024_Real_Salt_Lake_season) (secondary) |
| 2024 | Nov 2, 2024 | Minnesota United, Game 2 (L 1–3) | Allianz Field, St. Paul (road) | 19,912 | same |
| 2025 | Oct 22, 2025 | Portland Timbers, Wild Card (L 1–3) | Providence Park, Portland (road) | 16,243 | [timbers.com](https://www.timbers.com/news/mls-cup-playoffs-recap-portland-timbers-beat-real-salt-lake-3-1-in-wild-wild-card-game-to-advance-in-the-audi-mls-cup-playoffs) (official) |
| 2026 | — | — | — | gap (season in progress) | — |

**Regular season (individual large crowds; not season averages)**

| Season | Notable crowds (date, opponent, attendance) | Source |
|---|---|---|
| 2023 | Aug 26 vs Houston 21,471; Oct 7 vs Sporting KC 21,205 | [Wikipedia](https://en.wikipedia.org/wiki/America_First_Field) (secondary) |
| 2024 | Jun 22 vs LA Galaxy 21,570; Jul 3 vs Houston 21,522; Aug 24 vs San Jose 21,015 | same |
| 2025 | gap on individual crowds | — |
| 2026 | Apr 22 vs Inter Miami 21,512 | same |

**Season averages (home league matches)**

| Season | Average | Source |
|---|---|---|
| 2023 | 19,429 | [Wikipedia 2023 season](https://en.wikipedia.org/wiki/2023_Real_Salt_Lake_season) (secondary) |
| 2024 | 20,048 ([MLS attendance table](https://en.wikipedia.org/wiki/Major_League_Soccer_attendance) says 20,295; conflict preserved) | [Wikipedia 2024 season](https://en.wikipedia.org/wiki/2024_Real_Salt_Lake_season) (secondary) |
| 2025 | 19,775 ([MLS attendance table](https://en.wikipedia.org/wiki/Major_League_Soccer_attendance) says 19,776; rounding) | [Wikipedia 2025 season](https://en.wikipedia.org/wiki/2025_Real_Salt_Lake_season) (secondary) |
| 2026 | gap (in progress) | — |

### Utah Royals (SLC-4)

**Postseason:** none through 2025. The Royals did not qualify in 2025 (12th; 6-7-13) ([Wikipedia 2025 season](https://en.wikipedia.org/wiki/2025_Utah_Royals_season), secondary). In 2026 they sat 3rd after 23 matches with seven to play, so qualification was not confirmed at the time of the page read ([Wikipedia 2026 season](https://en.wikipedia.org/wiki/2026_Utah_Royals_season), secondary). 2024: gap (not checked).

**Regular season (individual crowds)**

| Season | Notable crowds (date, opponent, attendance) | Source |
|---|---|---|
| 2024 | Mar 16 vs Chicago 20,370 (opener of the revived club); Aug 23 vs Bay FC 14,539 | [Wikipedia](https://en.wikipedia.org/wiki/America_First_Field) (secondary) |
| 2025 | Apr 18 vs Chicago 17,085; May 23 vs Orlando 11,668 | same |
| 2025 (season) | Total 84,653 over the 9 home matches with a listed figure, about 9,406 average (several home matches have no figure, so this is **not** a full-season average). Listed: Mar 15 10,624; Apr 11 5,051; Apr 18 17,085; May 3 7,371; May 23 11,668; Aug 15 6,299; Sep 19 8,426; Oct 11 8,959; Nov 2 9,170 | [Wikipedia 2025 season](https://en.wikipedia.org/wiki/2025_Utah_Royals_season) (secondary) |
| 2026 (through Sep 4) | 11 home matches, total 100,117, about 9,101 average. Largest: May 23 19,274. Others: Mar 22 9,778; Apr 3 7,244; May 6 6,789; May 17 6,514; Jul 10 10,014; Jul 18 9,591; Jul 29 9,538; Aug 2 6,243; Aug 14 7,020; Sep 4 8,112 | [Wikipedia 2026 season](https://en.wikipedia.org/wiki/2026_Utah_Royals_season) (secondary; season in progress) |

### Salt Lake Bees (SLC-10; SLC-7 before 2025)

- **Postseason:** gap (no PCL playoff home game found; not confirmed either way).
- **Regular season:**

| Season | Figure | Source |
|---|---|---|
| 2024 (Smith's Ballpark, SLC-7) | 13 crowds above 9,500, including 14,455 on July 4; per-game average 1,070 higher than 2025 (so about 6,344; derived, not stated) | [KSL, Oct 12, 2025](https://www.ksl.com/article/51386725/how-did-the-salt-lake-bees-fare-in-first-season-at-their-new-ballpark-) (reported) |
| 2025 (Ballpark at America First Square, SLC-10) | Total **395,534**, average **5,274** per game (PCL average 5,359); peak 7,679 on July 4; 412 season-ticket accounts covering 1,778 seats per game | same |
| 2026 | gap | — |

The MLB Stats API schedule feed carries no `attendance` field (section 3); per-game counts would need a different endpoint. [MLB.com, Oct 24, 2025](https://www.mlb.com/news/baseball-traveler-salt-lake-bees-2025) and [ABC4](https://www.abc4.com/sports/local-sports/bees-2025-schedule-daybreak/amp) give capacity only.

### Utah Utes football (SLC-1)

**Postseason:** bowl games are neutral-site (not at SLC-1). Dec 23, 2023 Las Vegas Bowl vs Northwestern, Allegiant Stadium, 20,897; no bowl in 2024 (5–7); Dec 31, 2025 Las Vegas Bowl vs Nebraska, Allegiant Stadium, 38,879 ([Wikipedia 2023](https://en.wikipedia.org/wiki/2023_Utah_Utes_football_team), [2024](https://en.wikipedia.org/wiki/2024_Utah_Utes_football_team), [2025](https://en.wikipedia.org/wiki/2025_Utah_Utes_football_team), secondary). No home playoff game.

**Regular season**

| Season | Figure | Source |
|---|---|---|
| 2023 | Season average **52,499** (school record) | [utahutes.com](https://utahutes.com/facilities/detail/3) (official) |
| 2023 | Florida 53,644 (then stadium record); Oregon 53,586; UCLA 52,919; California 52,115; Arizona State 52,104 | same |
| 2023 | Also Weber State 51,532 (Sep 16); Colorado 51,595 (Nov 25) | [Wikipedia 2023 season](https://en.wikipedia.org/wiki/2023_Utah_Utes_football_team) (secondary) |
| 2024 | "83 straight home sellouts" dating back to the 2010 opener, stated as of the 2024 season | [utahutes.com](https://utahutes.com/facilities/detail/3) (official) |
| 2024 | Six home games: Southern Utah 52,210 (Aug 29); Baylor 52,827 (Sep 7); Arizona 52,898 (Sep 28); TCU 53,299 (Oct 19); **BYU 54,383 (Nov 9) — new stadium record**; Iowa State 52,152 (Nov 23) | [Wikipedia 2024 season](https://en.wikipedia.org/wiki/2024_Utah_Utes_football_team), [Rice–Eccles Stadium](https://en.wikipedia.org/wiki/Rice%E2%80%93Eccles_Stadium) (secondary). Season average not stated; derived mean of the six is about 52,962 (derived) |
| 2025 | Six home games: Cal Poly 51,463 (Sep 6); Texas Tech 52,236 (Sep 20); Arizona State 51,444 (Oct 11); Colorado 51,949 (Oct 25); Cincinnati 51,672 (Nov 1); Kansas State 51,444 (Nov 22) | [Wikipedia 2025 season](https://en.wikipedia.org/wiki/2025_Utah_Utes_football_team) (secondary). Season average not stated; derived mean about 51,701 (derived). Two games list exactly the 51,444 capacity |
| 2026 | gap (in progress). A Sept 2026 report quotes the UFL president citing "98 straight sellouts" (reported quote, not an official count) | [SLTrib, Sept 23, 2026](https://www.sltrib.com/sports/2026/09/23/ufl-expansion-team-is-coming-utah/) |

### Utes basketball, gymnastics, volleyball (SLC-6); Utes baseball (SLC-20)

- **Postseason:** gap.
- **Regular season:** gap.

### Salt Lake City Stars (SLC-8) and Real Monarchs (SLC-12)

- **Salt Lake City Stars:** postseason gap; regular season gap.
- **Real Monarchs:** postseason gap. The Wikipedia season table shows "N/A" attendance for 2022 and 2023 ([Wikipedia](https://en.wikipedia.org/wiki/Real_Monarchs), secondary).

### LOVB Salt Lake (SLC-13)

**Postseason:** no home postseason match. The 2026 postseason was at neutral sites (section 4).

**Regular season**

| Date | Venue | Attendance | Source |
|---|---|---|---|
| Jan 22, 2025 (first home match) | SLCC Bruin Arena | 3,006 (sold out) | [Wikipedia](https://en.wikipedia.org/wiki/LOVB_Salt_Lake) (secondary) |
| Apr 4, 2026 (regular-season home finale vs Madison) | Bruin Arena | gap; "filled" per the team, no number | [LOVB](https://lovb.com/news/260404-salt-lake-clinches-playoff-seat) |

### Departed and out-of-area teams (context only)

| Team | Date | Figure | Source |
|---|---|---|---|
| Utah Warriors (postseason) | June 2025 home playoff, Zions Bank Stadium (SLC-12). The photo caption says Jun 15; the article was posted Jun 14, 2025 | "More than 4,000" (no exact figure) | [KSL](https://www.ksl.com/article/sports/utah-warriors-to-host-major-league-rugbys-west-final-after-holding-off-seattle-23-21/51330307) |
| Utah Grizzlies | Final game, Apr 12, 2026, Maverik Center | gap (no attendance reported) | [Deseret](https://www.deseret.com/sports/2026/04/12/utah-grizzlies-final-game/) |
| BYU football (out of area) | Sep 1, 2024 vs Southern Illinois | 63,712 (official figure as quoted from a reporter's post) | [KSL Sports](https://sports.ksl.com/ncaa/byu/byu-football-big-12-stadium-rankings-capacity-2024-season/524580) (secondary) |

---

## Biggest gaps and the next checks

*Updated after the second pass (Oct 14, 2026). Struck items are filled; what follows each is what remains.*

1. ~~Free schedule feeds for every team.~~ **Filled** for 9 teams/programs (ESPN, MLB Stats API, NHL API). Remaining: Real Monarchs and LOVB Salt Lake have no free feed verified; Utes women's sports endpoints not fetched.
2. ~~Team colors for every team.~~ **Partly filled.** Official hex: Utah, BYU. Official names + ESPN secondary hex: Jazz, Mammoth (primary only), RSL, Royals, Stars (ESPN hex conflicts with the 2025 rebrand names). Still no hex: Mammoth secondary, Bees, Monarchs, LOVB Salt Lake.
3. ~~Ticketmaster IDs for 16 of 21 rooms.~~ **Partly filled.** 12 IDs now (6 fetched, 6 from venue URLs that Ticketmaster blocked from fetching). Still no ID: **The Ballpark at America First Square** and **Capitol Theatre** (both have Ticketmaster events, so an ID exists but was not surfaced), West Desert, Bruin Arena, America First Ballpark, the two church rooms. Fairpark child rooms resolve only to the parent IDs 246986 / 246773. The Delta Center ID may carry little primary inventory, because SeatGeek is the official ticketer.
4. ~~Season attendance series.~~ **Partly filled** (mostly secondary sources). Still missing: Jazz 2025-26 average, Mammoth 2025-26 average, RSL 2026, Bees 2024 (derived only) and 2026, Stars (all), Utes basketball (all), Royals 2024 average.
5. ~~Postseason crowds.~~ **Filled** for the Mammoth (3 home games, 2026), RSL (2023–2025) and Utes bowls; Jazz and Royals confirmed as no postseason through 2025-26 / 2025. Remaining: Royals 2024 and 2026, Bees, Stars, Monarchs, Utes basketball.
6. ~~Neutral-site and international games.~~ **Filled** for what was found: the Dec 31, 2026 Winter Classic at Rice-Eccles (Mammoth), BYU and Utah basketball at the Delta Center, Utes bowls. Jazz: none found but the 2026-27 schedule was only an image. Full NHL feed read cut off before Dec 31, so the Winter Classic venue string in the feed is unconfirmed.
7. ~~The "SLC" code.~~ **Filled**: city government's SLC.gov; ESPN's SLC for the Stars. Big-league teams use state codes.
8. **New:** the Royals do not appear on the America First Field Ticketmaster page; their ticketer was not confirmed.

### Inaccessible or failed sources

- `ticketmaster.com/vivint-arena-tickets-salt-lake-city/venue/246072`: WebFetch returned a client error (Oct 13). Not retrieved another way; the ID was confirmed via the Ticketmaster blog link instead.
- **Oct 14:** Ticketmaster venue and event pages for Zions Bank Stadium (246992), Smith's Ballpark (246576), Abravanel Hall (246474), Eccles Theater (246872), the Bees' Aug 18, 2026 and Aug 20, 2025 events, the Jul 21, 2026 rodeo event and the Ballet West Dec 27, 2025 event all returned client errors. Only `america-first-field-tickets-sandy/venue/246832` loaded. Nothing was retrieved another way.
- **Oct 14:** ESPN match pages (gameIds 722591, 760058, 689611) fetched as empty pages; venue and crowd facts for those matches came from rsl.com, timbers.com and Wikipedia instead.
- **Oct 14:** the ESPN NHL teams list and college-football teams list were too long for the fetch tool to reach the Utah/BYU entries; the direct `teams/{id}` endpoints were used and the team names confirmed.
- **Web search limit:** the Oct 13 pass hit the per-turn limit after 13 searches. The Oct 14 pass used about 33 searches and did not hit the limit.
