# Miami follow-up on city-build gaps — research answer

**Answer date:** Tuesday, October 13, 2026 (America/Los_Angeles); **second pass Oct 14, 2026** (new facts marked "(2nd pass)"). All "as of" statements are this retrieval date unless a source date is given.
**Brief:** [miami-gaps-followup-prompt.md](miami-gaps-followup-prompt.md). **Joins to:** [miami-venue-table-answer.md](miami-venue-table-answer.md) by venue row ID (A01–A21 core, E01–E04 Palm Beach edge).
**City-type answer not provided.** The brief refers to `miami-city-type-answer.md`, but that file was not given to this pass. Nothing here repeats the city-type work (fan modes, car shares).
**Scope:** public sources only. No app code, personal ratings or cost commitments. Anything marked **PROPOSAL** is a suggestion, not a sourced finding.

**Source labels.** *Official* means a team, league, university, venue, or Ticketmaster page or feed. *Secondary* means Wikipedia, Sports-Reference sites (Hockey-Reference, Basketball-Reference) or Team Color Codes. Season totals marked *computed* are sums I made from the per-game figures on the linked page. The page itself does not print them.

**Research limits in this pass (read first).**
- WebSearch hit its shared per-turn limit early, so some Ticketmaster checks could not be run. The affected rows are marked "not verified" with the reason.
- Late in the pass the fetch proxy rate-limited requests (HTTP 429). I did not read these pages and did not retry them another way: the [NHL schedule API for FLA](https://api-web.nhle.com/v1/club-schedule-season/FLA/now), the ESPN men's college basketball entries for [Miami (2390)](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2390) and [FIU (2229)](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2229), [Basketball-Reference's 2026-27 Heat schedule](https://www.basketball-reference.com/teams/MIA/2027_games.html) and the [official Inter Miami Nu Stadium page](https://www.intermiamicf.com/nu-stadium/).
- Other inaccessible pages: [brand.miami.edu](https://brand.miami.edu/) (robots.txt disallows), [fau.edu/brand](https://www.fau.edu/brand/) (fetch error), [Basketball-Reference Heat attendance index](https://www.basketball-reference.com/teams/MIA/attendance.html) (fetch error) and the ESPN NFL attendance pages, e.g. [2025](https://www.espn.com/nfl/attendance/_/year/2025) (they returned empty, apparently script-rendered). No bypass was attempted.
- **Second pass (Oct 14, 2026):** about 31 web searches used; the search limit was not hit. The [Ticketmaster event page](https://www.ticketmaster.com/event/0D00644BB1727EF8) for A12 returned a fetch error and was not retried another way. Still open after this pass: Ticketmaster IDs for 15 rooms; official hex for the Dolphins, Heat, Marlins, Panthers, Inter Miami and Miami FC; crowd history for Miami FC, Inter Miami II and Hurricanes women's basketball.

---

## 1. Name, short form, code and covered area

### Findings

| Item | Finding | Source |
|---|---|---|
| Team naming | Four of the five major-league teams use "Miami": Miami Dolphins, Miami Heat, Miami Marlins, Inter Miami CF. The NHL team is "Florida Panthers". | ESPN feeds: [Dolphins](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/mia), [Heat](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/mia), [Marlins](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/mia), [Inter Miami](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams/20232), [Panthers](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/fla) |
| Three-letter code used by teams and feeds | **MIA** for the Dolphins, Heat, Marlins, Inter Miami, Miami Hurricanes and Miami FC on ESPN; **FLA** for the Panthers. | ESPN: [Dolphins](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/mia), [Heat](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/mia), [Marlins](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/mia), [Inter Miami](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams/20232), [Hurricanes](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2390), [Miami FC](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams), [Panthers](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/fla) |
| League feed code | MLB Stats API gives the Marlins the abbreviation **MIA** (team 146). | [MLB Stats API](https://statsapi.mlb.com/api/v1/teams/146) |
| Airport code | The venue answer places Nu Stadium "near MIA airport". | [Wikipedia: Nu Stadium](https://en.wikipedia.org/wiki/Nu_Stadium) (secondary, cited in the venue answer) |
| Metro definition | The official MSA is Miami–Fort Lauderdale–West Palm Beach (Broward, Miami-Dade, Palm Beach). BLS splits it into three metropolitan divisions, one per county. | [BLS](https://www.bls.gov/regions/southeast/news-release/2023/areaemployment_miami_20231101.htm) |
| Where the home venues are | Every major-league home venue is in Miami-Dade or Broward. Hard Rock Stadium (A01) is in Miami Gardens, about 15 miles north of the City of Miami. The Panthers' arena (A05) is in Sunrise, Broward. | [venue answer §1](miami-venue-table-answer.md); [Miami New Times](https://www.miaminewtimes.com/news/fifa-world-cup-2026-in-miami-what-to-know-40553973/) |
| Local media name for the region (e.g. "South Florida") | (2nd pass) "South Florida" is the common regional name: the metro "is also known as the South Florida metropolitan area", also "SoFlo, SoFla, the Gold Coast, the Tri-County Area, or Greater Miami". The broadcast market is **Miami-Fort Lauderdale** (Miami-Dade, Broward and the Keys); Palm Beach is the separate West Palm Beach market, though the two markets "cross over". Station example: WPLG is "a television station in Miami" in the "Miami–Fort Lauderdale market", branded "Local 10", and refers to "South Florida". Not checked: a systematic count of outlet usage | [Wikipedia: Miami metropolitan area](https://en.wikipedia.org/wiki/Miami_metropolitan_area) (secondary); [Nielsen 2024 DMA ranks via methodshop](https://methodshop.com/2024-nielsen-dma-rankings/) (secondary: Miami-Fort Lauderdale #18, West Palm Beach-Fort Pierce #39); [Wikipedia: WPLG](https://en.wikipedia.com/wiki/WPLG) (secondary) |

### PROPOSAL — name and code

- **Display name: "Miami".** **Short form: "Miami".** **Code: MIA.**
- **Covered area: Miami-Dade + Broward.** That includes the cities and suburbs that host home venues: City of Miami, Miami Gardens, Miami Beach, Coral Gables, unincorporated Miami-Dade (FIU), Homestead, Fort Lauderdale, Sunrise and Hollywood. **Palm Beach is not in the core.** It stays an edge tier (E01–E04), as the venue answer proposes, because BLS treats it as a separate division.
- **Contrast with the Tampa Bay precedent.** In Tampa Bay the regional name replaced the city name. Here the teams mostly use "Miami", so the name does not need to change. The one exception is the Panthers ("Florida", code FLA). They stay under the Miami city entry because their arena is in Broward. A broader name such as "South Florida" is in common use (2nd pass, see the table above), but four of five pro teams and the broadcast market name both use "Miami", so "Miami" still fits; the TV-market split also backs leaving Palm Beach out of the core.

---

## 2. Ticketmaster venue IDs for every concert room

**Method.** An ID counts as verified only if the number appears in a `ticketmaster.com/.../venue/NNNNN` URL that is either (a) on a Ticketmaster page fetched for its venue name, or (b) linked from Ticketmaster's own venue guide for that room. The Discovery API was not used; no key was available.

Findings by row are in the table in **End with §2** below. Summary:
- **Verified (9):** A01, A03, A04, A05, A06 (2nd pass: 107138), A07, A10, A11, A19.
- **Not verified:** A02, A08, A09, A12–A18, A20, A21 and E01–E04. 2nd pass found the ticketer for several of these (see the note under the End with §2 table). A14 (Miami Marine Stadium) is closed, so it has no ID by design.
- **Rooms that use other ticketers:**
  - **A17 James L. Knight Center** sells through AXS: [AXS venue 102221](https://www.axs.com/venues/102221/james-l-knight-center-miami-tickets). That is an AXS ID, not a Ticketmaster ID.
  - **A20/A21 Arsht Center** sells through its own box office. The [venues page](https://arshtcenter.org/about-us/venues) names only its own box office phone and email. No Ticketmaster link was found.
- **A12 Hard Rock Live (Hollywood)** sells through Ticketmaster. The [official events page](https://casino.hardrock.com/hollywood/entertainment/hard-rock-live) links Ticketmaster event [0D00644BB1727EF8](https://www.ticketmaster.com/event/0D00644BB1727EF8), but no `/venue/` URL was found. Not verified.
- **A18 Fillmore Miami Beach.** Ticketmaster's [venue guide](https://blog.ticketmaster.com/?p=48460) links only `/artist/2760037` (valet parking), which is not a venue ID. Not verified.
- **E02 iTHINK.** Ticketmaster's [venue guide](https://blog.ticketmaster.com/venue-faq-ithink-financial-amphitheatre-west-palm-beach-fl/) links Live Nation venue `KovZpZAEkvEA` (alphanumeric). It is not a numeric Ticketmaster venue page. Not verified.
- If a room has no ID, the city ships with no concerts there, per the brief.

---

## 3. Free schedule feed per team

Feed IDs come from the free, keyless ESPN site API and the MLB Stats API. Each team ID was confirmed by fetching the team endpoint, linked in the **End with §3** table. ESPN venue IDs where returned:

| Team | ESPN venue ID | Source |
|---|---|---|
| Dolphins | Hard Rock Stadium = 3948 | [ESPN](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/mia) |
| Heat | Kaseya Center = 3438 | [ESPN](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/mia) |
| Panthers | Amerant Bank Arena = 1840 | [ESPN](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/fla) |
| Marlins | loanDepot park = 4223 (ESPN) / 4169 (MLB) | [ESPN](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/mia); [MLB](https://statsapi.mlb.com/api/v1/teams/146) |
| Inter Miami | Nu Stadium, no venue ID returned | [ESPN](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams/20232) |
| FIU | Pitbull Stadium, no venue ID returned | [ESPN](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2229) |
| Miami Hurricanes | no venue listed | [ESPN](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2390) |

**Teams with no verified free feed:**
- **Inter Miami CF II** (MLS Next Pro): no ESPN league slug was confirmed. Searching was impossible after the limit was reached.
- **Fort Lauderdale United FC** (USL Super League): same reason.
- **Hurricanes and FIU basketball:** (2nd pass) verified. ESPN men's college basketball uses the same IDs as football: [2390](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2390) and [2229](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2229).
- **Panthers on the NHL's own API:** rate-limited, so not verified. ESPN covers the Panthers.

---

## 4. Games away from the home venue (2025 on)

Full list in **End with §4**. Key points:
- **Dolphins.** The Nov 16, 2025 game vs Washington was played at Santiago Bernabéu, Madrid, with Miami listed as the home team ([Wikipedia 2025 season](https://en.wikipedia.org/wiki/2025_Miami_Dolphins_season), secondary). The 2026 schedule as of this date has no international or neutral-site game ([Wikipedia 2026 season](https://en.wikipedia.org/wiki/2026_Miami_Dolphins_season)).
- **Inter Miami.**
  - Chase Stadium (A06) through the 2025 season, including MLS Cup on Dec 6, 2025 ([Wikipedia: MLS Cup 2025](https://en.wikipedia.org/wiki/MLS_Cup_2025)).
  - Nu Stadium (A04) from Apr 4, 2026 ([venue answer](miami-venue-table-answer.md)).
  - A March 2026 CONCACAF Champions Cup match was played back at A06. The exact date is not confirmed ([Wikipedia: Inter Miami CF Stadium](https://en.wikipedia.org/wiki/Inter_Miami_CF_Stadium)).
  - The 2025 Club World Cup opener was at A01 (Hard Rock Stadium).
- **Panthers.** The Jan 2, 2026 Winter Classic home game was at loanDepot park (A03). Attendance was 36,153 ([Hockey-Reference](https://www.hockey-reference.com/teams/FLA/2026_games.html), secondary; matches the AP figure cited in the venue answer).
- **Miami Hurricanes.** The CFP National Championship on Jan 19, 2026 was at A01 as a neutral-site game, not a home game ([Wikipedia](https://en.wikipedia.org/wiki/2025_Miami_Hurricanes_football_team)).
- **Orange Bowl.** The Jan 1, 2026 game was at A01 ([Wikipedia](https://en.wikipedia.org/wiki/2026_Orange_Bowl)).

---

## 5. Postseason and past crowds

**Range covered.** NFL, MLB, MLS and college football: the 2023 through 2026 seasons. NBA and NHL: the 2022-23 postseason (spring 2023) through the 2025-26 season, plus the first 2026-27 game. Postseason and regular season are kept separate. Tables are in **End with §5**.

**Contrast with the Tampa Bay precedent.**
- For the **Marlins**, the free league feed (MLB Stats API) returns announced season totals and averages directly, so the Marlins have a feed-backed crowd history ([2025 example](https://statsapi.mlb.com/api/v1/attendance?teamId=146&season=2025)).
- For the other teams, the per-game figures here come from secondary reference sites (Wikipedia, Hockey-Reference, Basketball-Reference). The ESPN team feeds checked here returned no attendance, and ESPN's attendance pages returned empty.

---

## 6. Team colors

- **Official hex sources:** FIU ([brand.fiu.edu colors](https://brand.fiu.edu/visual-styles/colors/index.html)); 2nd pass added the University of Miami ([webcomm.miami.edu](https://webcomm.miami.edu/resources/identity/color/index.html)) and FAU ([fau.edu style guide](https://www.fau.edu/styleguide/colors/)).
- 2nd pass: official color **names** without hex were found for the Marlins ([MLB.com](https://www.mlb.com/marlins/news/marlins-unveil-new-team-logo-colors/c-300802538)), Panthers ([NHL.com](https://nhl.com/news/florida-panthers-to-unveil-new-logo-280756642)) and Miami FC ([USL](https://www.uslchampionship.com/news_article/show/1260907)). No official hex was found for the Dolphins, Heat or Inter Miami (searches returned only fan/aggregator color sites).
- For the pro teams, no official brand page with hex was found. WebSearch's limit stopped further searching. Their colors are therefore **secondary**: Team Color Codes, which says it is not affiliated with any team, cross-checked against the hex values in each team's ESPN feed.
- Where the two secondary sources disagree, both are shown in §3 of End with.

---

## 7. Capacities still open

See **End with §6**.
- **Nu Stadium:** 26,700 has two independent sources, both reported, not official. The 25,000 figure is an earlier plan.
- **Kaseya Center concerts and Waterfront Theater:** these exist only as ranges, so they stay **gaps**.

---

## Build-rule notes (for whoever turns this into app data)

- **Unique IDs.** Every venue ID and team ID must be unique across all cities. `giants`, `jets`, `rangers`, `kings` and `cardinals` were already taken, so add a city prefix. Bare names likely to collide in Miami:
  - `panthers`: there are three teams by that name. The Florida Panthers (NHL), the FIU Panthers and the NFL's Carolina Panthers, who played at A01 on Oct 15, 2023 ([Wikipedia 2023 Dolphins](https://en.wikipedia.org/wiki/2023_Miami_Dolphins_season)).
  - `hurricanes`: the Miami Hurricanes and the NHL's Carolina Hurricanes, Panthers playoff opponents in 2023 and 2025 ([Hockey-Reference 2025](https://www.hockey-reference.com/teams/FLA/2025_games.html)).
  - `marlins`, `heat`, `dolphins` and `owls` (FAU): no collision checked.
  - **PROPOSAL:** prefix every Miami team and venue ID, e.g. `mia-` or `fla-` for the Panthers.
- **No per-city opponents file.** Opponent draws go into `expectedDrawIndex` like every other city.
- **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list. That applies to the A07 concert and A07 Waterfront Theater figures in §6 below.
- **Car shares.** Wire measured shares; wire sourced estimates marked as estimated; leave the rest on the city default. The city-type answer was not provided, so no car shares are restated here.
- **Feed venue IDs differ by source.** loanDepot park is 4223 on ESPN and 4169 on the MLB Stats API. Map both to A03, not to two rooms.
- **Neutral-site games at a team's own home venue.** The Jan 19, 2026 CFP final at A01 is listed as a neutral game, not a Hurricanes home game. Store it as an A01 event.
- **Relocated home games** must carry the actual site's row ID, not the team's usual home row (see §4 below).

---

# End with

## 1. Name, short form, code and covered area

| Field | Value | Basis |
|---|---|---|
| Display name | **Miami** (PROPOSAL) | Four of five major-league teams use "Miami" ([ESPN feeds](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/mia)) |
| Short form | **Miami** (PROPOSAL) | Same |
| Code | **MIA** | ESPN abbreviation for the Dolphins, Heat, Marlins, Inter Miami and Hurricanes ([ESPN](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/mia)); MLB Stats API ([MLB](https://statsapi.mlb.com/api/v1/teams/146)). The Panthers use **FLA** ([ESPN](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/fla)) |
| Covered area | **Miami-Dade + Broward** (PROPOSAL): City of Miami, Miami Gardens, Miami Beach, Coral Gables, unincorporated Miami-Dade (FIU), Homestead, Fort Lauderdale, Sunrise, Hollywood | Every pro home venue is in these two counties ([venue answer](miami-venue-table-answer.md)) |
| Palm Beach | **Not in core.** Edge tier only (E01–E04) | BLS treats it as a separate metropolitan division ([BLS](https://www.bls.gov/regions/southeast/news-release/2023/areaemployment_miami_20231101.htm)) |
| Local media regional name | (2nd pass) "South Florida" is the common regional name; the TV market is "Miami-Fort Lauderdale" (Miami-Dade, Broward, Keys), with Palm Beach in a separate West Palm Beach market. This supports Miami-Dade + Broward as the core and Palm Beach as the edge | [Wikipedia](https://en.wikipedia.org/wiki/Miami_metropolitan_area) (secondary); [methodshop DMA list](https://methodshop.com/2024-nielsen-dma-rankings/) (secondary) |

## 2. Ticketmaster venue IDs

| Venue row ID | Room | Ticketmaster venue ID | Verification link (or "not verified") |
|---|---|---|---|
| A01 | Hard Rock Stadium | **106734** | [ticketmaster.com/hard-rock-stadium-tickets-miami/venue/106734](https://www.ticketmaster.com/hard-rock-stadium-tickets-miami/venue/106734), linked from Ticketmaster's [venue guide](https://blog.ticketmaster.com/step-inside-hard-rock-stadium-miami-gardens-fl/) |
| A02 | Homestead-Miami Speedway | — | not verified (2nd pass). The [official Championship page](https://www.homesteadmiamispeedway.com/events/champ/) sells through Ticketmaster **Account Manager** (`am.ticketmaster.com/hms/...` quick-buy links) and by phone, 866-409-7223. No numeric `/venue/` page was found |
| A03 | loanDepot park | **107636** | [ticketmaster.com/loandepot-park-tickets-miami/venue/107636](https://www.ticketmaster.com/loandepot-park-tickets-miami/venue/107636), linked from the [venue guide](https://blog.ticketmaster.com/step-inside-loandepot-park-miami-fl/) |
| A04 | Nu Stadium | **107834** | [ticketmaster.com/nu-stadium-tickets-miami/venue/107834](https://www.ticketmaster.com/nu-stadium-tickets-miami/venue/107834), linked from the [venue guide](https://blog.ticketmaster.com/step-inside-nu-stadium-miami-fl/) |
| A05 | Amerant Bank Arena | **107150** | [ticketmaster.com/amerant-bank-arena-tickets-sunrise/venue/107150](https://www.ticketmaster.com/amerant-bank-arena-tickets-sunrise/venue/107150), linked from the [venue guide](https://blog.ticketmaster.com/step-inside-amerant-bank-arena-sunrise-fl) |
| A06 | Inter Miami CF Stadium (ex-Chase Stadium) | **107138** (2nd pass) | [ticketmaster.com/chase-stadium-tickets-fort-lauderdale/venue/107138](https://www.ticketmaster.com/chase-stadium-tickets-fort-lauderdale/venue/107138), linked from Ticketmaster's [venue guide](https://blog.ticketmaster.com/step-inside-chase-stadium-ft-lauderdale-fl/) ("Home of Inter Miami CF II"; 21,550 for soccer). The Ticketmaster slug still uses the Chase Stadium name |
| A07 | Kaseya Center (incl. Waterfront Theater setup) | **106601** | [ticketmaster.com/kaseya-center-tickets-miami/venue/106601](https://www.ticketmaster.com/kaseya-center-tickets-miami/venue/106601), linked from the [venue guide](https://blog.ticketmaster.com/step-inside-kaseya-center). The Waterfront Theater is a setup inside the same ID, not its own room |
| A08 | Pitbull Stadium | — | not verified for Ticketmaster (2nd pass). **AXS venue 130552** lists Miami FC and FIU football home games at 11310 SW 17th St ([AXS](https://www.axs.com/de/venues/130552/pitbull-stadium-miami-tickets)). That is an AXS ID, not a Ticketmaster ID |
| A09 | Miami Open Stadium Court (inside A01) | — | not verified; child of A01. Do not map to 106734 without event-level evidence. 2nd pass: Ticketmaster lists Miami Open under an **artist** page, [artist/2043748](https://www.ticketmaster.com/miami-open-tennis-tickets/artist/2043748?page=3), with venue shown as "Hard Rock Stadium - Miami"; no court-level venue ID |
| A10 | FPL Solar Amphitheater at Bayfront Park | **106510** | [ticketmaster.com/fpl-solar-amphitheater-at-bayfront-park-billets-miami/venue/106510](https://www.ticketmaster.com/fpl-solar-amphitheater-at-bayfront-park-billets-miami/venue/106510). The page shows FPL Solar Amphitheater at Bayfront Park, 301 N Biscayne Blvd |
| A11 | Watsco Center | **107166** | [ticketmaster.com/watsco-center-at-the-university-of-billets-coral-gables/venue/107166](https://www.ticketmaster.com/watsco-center-at-the-university-of-billets-coral-gables/venue/107166). The page shows Watsco Center at the University of Miami, 1245 Dauer Dr, Coral Gables |
| A12 | Hard Rock Live (Hollywood) | — | not verified. Sold via Ticketmaster per the [official page](https://casino.hardrock.com/hollywood/entertainment/hard-rock-live), but only event links were found. 2nd pass: the [events page](https://casino.hardrock.com/hollywood/hard-rock-live-events.htm) links only `/event/` URLs; the Ticketmaster event page returned a fetch error; no Ticketmaster venue guide found |
| A13 | Beyond Bancard Field at NSU | — | not verified (2nd pass). Fort Lauderdale United FC tickets are digital via **SquadUp** plus a game-day box office ([FTL UTD](https://www.ftlutd.com/?p=1690)); no Ticketmaster link found |
| A14 | Miami Marine Stadium | — | n/a. Closed since 1992 ([venue answer](miami-venue-table-answer.md)) |
| A15 | Ocean Bank Convocation Center | — | not verified (2nd pass). FIU home games sell through FIU's own site, [fiutickets.com](https://fiutickets.com/tickets/events), and 305-FIU-GAME ([FIU Athletics](https://fiusports.com/news/2023/1/15/mens-basketball-fiu-mens-hoops-returns-to-host-north-texas.aspx)); no Ticketmaster link found |
| A16 | Grandstand at Hard Rock Stadium | — | not verified; child of A01 grounds. See A09 note (2nd pass): Miami Open is on a Ticketmaster artist page, not a court-level venue page |
| A17 | James L. Knight Center | — | not verified. Sells via AXS ([AXS venue 102221](https://www.axs.com/venues/102221/james-l-knight-center-miami-tickets)); no Ticketmaster page found |
| A18 | The Fillmore Miami Beach at the Jackie Gleason Theater | — | not verified. The [Ticketmaster venue guide](https://blog.ticketmaster.com/?p=48460) links only `/artist/2760037` (valet parking). 2nd pass: Ticketmaster's [Miami concert venues post](https://blog.ticketmaster.com/concert-venues-miami/) names the room but links no `/venue/` page |
| A19 | Broward Center: Au-Rene Theater | **106543** | [ticketmaster.com/venue/106543](https://www.ticketmaster.com/venue/106543?page=1). The page shows "Au-Rene Theater at the Broward Center" |
| A20 | Arsht Center: Ziff Ballet Opera House | — | not verified. Own box office ([Arsht](https://arshtcenter.org/about-us/venues)) |
| A21 | Arsht Center: Knight Concert Hall | — | not verified. Own box office ([Arsht](https://arshtcenter.org/about-us/venues)) |
| E01 | Flagler Credit Union Stadium (edge) | — | not verified (2nd pass). FAU sells through Ticketmaster **Account Manager** ([am.ticketmaster.com/fau/buy](https://am.ticketmaster.com/fau/buy)) and 1-866-FAU-OWLS, per the [FAU ticket office](https://fausports.com/sports/2019/5/20/tickets-sport-1.aspx); no numeric `/venue/` page found |
| E02 | iTHINK Financial Amphitheatre (edge) | — | not verified. Only Live Nation ID `KovZpZAEkvEA` was found ([Ticketmaster venue guide](https://blog.ticketmaster.com/venue-faq-ithink-financial-amphitheatre-west-palm-beach-fl/)) |
| E03 | CACTI Park (edge) | — | not verified (2nd pass). Sells through MLB.com / tickets.com (`mlb.tickets.com`) and a Turnstyle flex plan per [MLB.com CACTI Park tickets](https://www.mlb.com/tickets/spring-training/cacti-park-at-the-palm-beaches); no Ticketmaster link found |
| E04 | Roger Dean Chevrolet Stadium (edge) | — | not verified (2nd pass). The [Cardinals' ballpark page](https://www.mlb.com/cardinals/spring-training/ballpark) names a stadium ticket office and tickets.com (for parking); no Ticketmaster link found |

**Count (after 2nd pass):** 9 verified (A01, A03, A04, A05, **A06**, A07, A10, A11, A19). 15 not verified (A02, A08, A09, A12, A13, A15–A18, A20, A21, E01–E04). A14 is n/a (closed).
**Other ticketers found (2nd pass):** A08 AXS 130552; A15 FIU's own fiutickets.com; A13 SquadUp; E03 MLB.com/tickets.com; A02 and E01 Ticketmaster Account Manager only (no numeric venue page); A17 AXS 102221 and A20/A21 own box office (1st pass).

## 3. Teams: league, home row, free feed, colors

| Team | League | Home venue row ID | Free feed and ID (or "no feed") | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| Miami Dolphins | NFL | A01 | ESPN NFL team **15** ([feed](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/mia)) | #008E97 (Aqua) | #FC4C02 (Orange) | **Secondary:** [Team Color Codes](https://teamcolorcodes.com/miami-dolphins-color-codes/); matches the ESPN feed (008e97 / fc4c02) |
| Miami Heat | NBA | A07 | ESPN NBA team **14** ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/mia)) | #98002E (Red) | #F9A01B (Yellow) | **Secondary:** [Team Color Codes](https://teamcolorcodes.com/miami-heat-color-codes/). The ESPN alternate is 000000 (black) |
| Miami Marlins | MLB | A03 | MLB Stats API team **146** ([feed](https://statsapi.mlb.com/api/v1/teams/146)); ESPN MLB team **28** ([feed](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/mia)) | #00A3E0 (Miami Blue) | #EF3340 (Caliente Red) | **Secondary:** [Team Color Codes](https://teamcolorcodes.com/miami-marlins-color-codes/). The ESPN feed gives 00a3e0 / 000000. 2nd pass: the official names are "Caliente Red, Miami Blue, Midnight Black and Slate Grey" ([MLB.com, Nov 16, 2018](https://www.mlb.com/marlins/news/marlins-unveil-new-team-logo-colors/c-300802538)); that article gives no hex, so hex stays secondary |
| Florida Panthers | NHL | A05 | ESPN NHL team **26** ([feed](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/fla)). NHL API not verified (rate-limited) | #C8102E (Red) | #041E42 (Navy) | **Secondary:** [Team Color Codes](https://teamcolorcodes.com/florida-panthers-color-codes/) (navy, red, tan; which one is primary is not stated). **Conflict:** the ESPN feed gives e51937 and no alternate. 2nd pass: [NHL.com (May 20, 2016)](https://nhl.com/news/florida-panthers-to-unveil-new-logo-280756642) names the colors "red, navy and gold" but gives no hex; hex stays secondary |
| Inter Miami CF | MLS | A04 from Apr 4, 2026 (A06 2020–2025) | ESPN soccer usa.1 team **20232** ([feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams/20232)) | #F7B5CD (Pink) | #231F20 (Black) | **Secondary:** [Team Color Codes](https://teamcolorcodes.com/inter-miami-cf-color-codes/); matches ESPN (231f20 / f7b5cd; ESPN lists black first) |
| Miami Hurricanes football | NCAA FBS (ACC) | A01 | ESPN college football team **2390** ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2390)) | #F47321 (Orange) | #005030 (Green) | **Official (2nd pass):** UM's [web communications color page](https://webcomm.miami.edu/resources/identity/color/index.html): "Hexadecimal colors for digital media are orange (#f47321) and green (#005030)" (Pantone 158 / 3435; #C35009 for typeset orange). Matches [Team Color Codes](https://teamcolorcodes.com/miami-hurricanes-color-codes/). ESPN gives f47423 / 035131. [brand.miami.edu](https://brand.miami.edu/) was blocked by robots.txt |
| Miami Hurricanes basketball (M/W) | NCAA | A11 | ESPN men's college basketball team **2390** (2nd pass; [feed](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2390): "Miami Hurricanes", MIA, f47423 / 035131; no venue in team object) | as above | as above | as above |
| FIU Panthers football | NCAA FBS | A08 | ESPN college football team **2229** ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2229)) | #081E3F (FIU Blue) | #D1A644 (FIU Gold) | **Official:** [brand.fiu.edu](https://brand.fiu.edu/visual-styles/colors/index.html). ESPN differs (091f3f / c3993f) |
| FIU basketball | NCAA | A15 | ESPN men's college basketball team **2229** (2nd pass; [feed](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2229): "Florida International Panthers", FIU, 091f3f / c3993f; no venue in team object) | #081E3F | #D1A644 | Official, as above |
| FAU Owls football (edge) | NCAA FBS | E01 | ESPN college football team **2226** ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2226)) | #003366 (FAU Blue) | #CC0000 (FAU Red) | **Official (2nd pass):** [FAU style guide colors](https://www.fau.edu/styleguide/colors/) lists FAU Blue #003366 and FAU Red #CC0000 in the primary palette (with Dark Gray #4D4C55 and Gray #CCCCCC). Matches [ESPN](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2226) |
| Miami FC (added) | USL Championship | A08 (2026) | ESPN soccer usa.usl.1 team **18159** ([feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)) | #F05123 | #263895 | **Secondary (feed only):** ESPN. 2nd pass: the [USL Championship](https://www.uslchampionship.com/news_article/show/1260907) calls teal "the club's primary color" (2023 kit, orange diamond pattern) but gives no hex. **Conflict:** ESPN's 263895 is blue, not teal; no official hex found |
| Inter Miami CF II (added) | MLS Next Pro | A06 | **no feed** verified | gap | gap | gap |
| Fort Lauderdale United FC (added) | USL Super League | A13 | **no feed** verified | gap | gap | gap |

**Teams without a verified free feed:**
- Inter Miami CF II and Fort Lauderdale United FC: no feed found.
- Hurricanes and FIU basketball: (2nd pass) now verified on ESPN men's college basketball, IDs 2390 and 2229 (same IDs as football). Women's basketball feeds not checked.

## 4. Games away from the home venue (2025 on)

| Date | Team | Event | Usual home | Actual site (row ID if in table) | Attendance | Source |
|---|---|---|---|---|---|---|
| 2025-06-14 (one source says 06-15) | Inter Miami | FIFA Club World Cup opener vs Al Ahly | A06 | Hard Rock Stadium (**A01**) | 60,927 | [Wikipedia 2025 season](https://en.wikipedia.org/wiki/2025_Inter_Miami_CF_season) (secondary) |
| 2025-06-19 / 2025-06-23 | Inter Miami | Club World Cup vs Porto / Palmeiras | A06 | **gap.** Venue not stated in the fetched sources | 31,783 / 60,914 | [Wikipedia Group A](https://en.wikipedia.org/wiki/2025_FIFA_Club_World_Cup_Group_A) |
| 2025-01-18 | Inter Miami | Preseason friendly vs Club América | A06 | Allegiant Stadium, Las Vegas | 45,262 | [Wikipedia 2025 season](https://en.wikipedia.org/wiki/2025_Inter_Miami_CF_season) |
| 2025-02-14 | Inter Miami | Preseason friendly vs Orlando City | A06 | Raymond James Stadium, Tampa | not stated | same |
| 2025-04-27 | Inter Miami | MLS vs Columbus | A06 | **Conflict:** the table lists it as a home match (20,727), but a cited headline mentions Cleveland Browns Stadium. Unresolved | 20,727 | same |
| 2025-11-16 | Dolphins | NFL vs Washington (Miami designated home) | A01 | Santiago Bernabéu, Madrid, Spain | 78,610 | [Wikipedia 2025 Dolphins](https://en.wikipedia.org/wiki/2025_Miami_Dolphins_season) |
| 2025-12-06 | Inter Miami | MLS Cup final (last match as A06 tenant) | A06 | Chase Stadium (**A06**), at home | 21,556 | [Wikipedia MLS Cup 2025](https://en.wikipedia.org/wiki/MLS_Cup_2025) |
| 2025-12-26 | FIU | First Responder Bowl vs UTSA | A08 | Gerald J. Ford Stadium, Dallas | 8,671 | [Wikipedia 2025 FIU](https://en.wikipedia.org/wiki/2025_FIU_Panthers_football_team) |
| 2025-12-31 | Hurricanes | Cotton Bowl (CFP QF) vs Ohio State | A01 | AT&T Stadium, Arlington TX | 71,323 (table only) | [Wikipedia 2025 Hurricanes](https://en.wikipedia.org/wiki/2025_Miami_Hurricanes_football_team) |
| 2026-01-01 | (event) | Orange Bowl, CFP QF: Oregon vs Texas Tech | — | **A01** | 65,021 | [Wikipedia 2026 Orange Bowl](https://en.wikipedia.org/wiki/2026_Orange_Bowl) |
| 2026-01-02 | Panthers | NHL Winter Classic vs NY Rangers (Panthers home) | A05 | loanDepot park (**A03**) | 36,153 | [Hockey-Reference](https://www.hockey-reference.com/teams/FLA/2026_games.html). That site lists the location as "Sunrise, FL" in error; loanDepot park is in Miami ([venue answer](miami-venue-table-answer.md)) |
| 2026-01-08 | Hurricanes | Fiesta Bowl (CFP SF) vs Ole Miss | A01 | State Farm Stadium, Glendale AZ | 67,928 | [Wikipedia 2025 Hurricanes](https://en.wikipedia.org/wiki/2025_Miami_Hurricanes_football_team) |
| 2026-01-19 | Hurricanes | CFP National Championship vs Indiana (neutral designation) | A01 | **A01** as a neutral event | 67,227 | same |
| 2026-02-26 | Inter Miami | Preseason friendly | A04/A06 | Bayamón, Puerto Rico | 12,500 | [Wikipedia 2026 season](https://en.wikipedia.org/wiki/2026_Inter_Miami_CF_season) |
| 2026-03 (date not confirmed; 2026-03-18 is the likely match, 17,263) | Inter Miami | CONCACAF Champions Cup "home" match after the move to A04 was announced | A04 | Inter Miami CF Stadium (**A06**) | 17,263 if 03-18 (home status not stated) | [Wikipedia: Inter Miami CF Stadium](https://en.wikipedia.org/wiki/Inter_Miami_CF_Stadium); [Wikipedia 2026 season](https://en.wikipedia.org/wiki/2026_Inter_Miami_CF_season) |
| 2026-04-04 → | Inter Miami | Home moves to Nu Stadium | A06 → **A04** | A04 | 26,412 (opener) | [Wikipedia 2026 season](https://en.wikipedia.org/wiki/2026_Inter_Miami_CF_season); [venue answer](miami-venue-table-answer.md) |

**Checked and found none:**
- **Dolphins 2026:** no international or neutral game ([Wikipedia](https://en.wikipedia.org/wiki/2026_Miami_Dolphins_season)).
- **Heat 2025-26:** no neutral-site game ([Basketball-Reference](https://www.basketball-reference.com/teams/MIA/2026_games.html)).
- **Panthers 2026-27:** no special-site game listed as of Oct 13, 2026 ([Hockey-Reference](https://www.hockey-reference.com/teams/FLA/2027_games.html)).
- **Marlins 2025 and 2026:** no home game away from loanDepot park in the MLB schedule feed, but the feed output was truncated, so only through late May was checked ([2025](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=146&season=2025&gameType=R&hydrate=venue), [2026](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=146&season=2026&gameType=R)). **2nd pass: the rest of both seasons is now checked, and every Marlins regular-season home game was at loanDepot park (venue 4169).** Date-range queries, each read in full:
  - 2025: May 16–31, 8 home games ([feed](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=146&gameType=R&startDate=2025-05-15&endDate=2025-05-31&hydrate=venue)); Jun 1–Aug 6, 29 ([feed](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=146&gameType=R&startDate=2025-06-01&endDate=2025-09-30&hydrate=venue), read to Aug 6); Aug 6–Sep 28 (season end), 23 ([feed](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=146&gameType=R&startDate=2025-08-06&endDate=2025-10-05&hydrate=venue)).
  - 2026: May 18–24, 7 ([feed](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=146&gameType=R&startDate=2026-05-15&endDate=2026-05-31&hydrate=venue)); Jun 5–Jul 29, 24 ([feed](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=146&gameType=R&startDate=2026-06-01&endDate=2026-09-30&hydrate=venue), read to Aug 7); Aug 7–Sep 27 (season end), 24 ([feed](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=146&gameType=R&startDate=2026-08-07&endDate=2026-10-05&hydrate=venue)).
- **Hurricanes 2026, FAU 2025:** none ([Wikipedia](https://en.wikipedia.org/wiki/2026_Miami_Hurricanes_football_team), [Wikipedia](https://en.wikipedia.org/wiki/2025_Florida_Atlantic_Owls_football_team)).
- **Heat 2026-27:** not checked (rate-limited).

**Pre-2025 context, outside the brief's window:**
- The Panthers' Nov 2, 2024 home game vs Dallas was played in Tampere, Finland, at 12,807 ([Hockey-Reference](https://www.hockey-reference.com/teams/FLA/2025_games.html)).
- The Heat's Nov 2, 2024 game vs Washington is marked neutral-site ([Basketball-Reference](https://www.basketball-reference.com/teams/MIA/2025_games.html)).

## 5. Postseason and past-crowd tables per team

### Miami Dolphins (NFL), A01

| Season | Regular-season home crowds | Postseason home games |
|---|---|---|
| 2023 | 8 of 9 home games listed: total **527,012**, average 65,876 (computed); Jan 7 vs Bills not listed ([Wikipedia](https://en.wikipedia.org/wiki/2023_Miami_Dolphins_season)) | None at home. Wild Card at Kansas City, Jan 13, 2024: 71,492 (same source) |
| 2024 | 8 home games: total **525,150**, average 65,644 (computed); range 65,291–66,341 ([Wikipedia](https://en.wikipedia.org/wiki/2024_Miami_Dolphins_season)) | None; did not qualify (same) |
| 2025 | 8 home games at A01, attendance listed for 5: 65,848; 65,592; 66,132; 66,030; 63,864. Madrid "home" game 78,610 (neutral, not A01) ([Wikipedia](https://en.wikipedia.org/wiki/2025_Miami_Dolphins_season)) | None; did not qualify (same) |
| 2026 | In progress; no attendance in source ([Wikipedia](https://en.wikipedia.org/wiki/2026_Miami_Dolphins_season)) | — |

### Miami Heat (NBA), A07 (secondary: Basketball-Reference game logs)

| Season | Regular-season home crowds | Postseason home games (announced) |
|---|---|---|
| 2022-23 (postseason only) | not covered | Play-in: Apr 11, 2023 vs ATL 19,662; Apr 14 vs CHI 19,678. Playoffs: Apr 22 MIL 19,734; Apr 24 MIL 19,614; May 6 NYK 19,927; May 8 NYK 19,769; May 12 NYK 19,737; May 21 BOS 20,088; May 23 BOS 20,147; May 27 BOS 20,201; Jun 7 DEN 20,019; Jun 9 DEN 20,184 ([BBRef](https://www.basketball-reference.com/teams/MIA/2023_games.html)) |
| 2023-24 | 41 games: total **809,743**, average 19,750 (computed from 42 listed home games minus the Apr 19 play-in, 19,600) ([BBRef](https://www.basketball-reference.com/teams/MIA/2024_games.html)) | Play-in Apr 19, 2024 vs CHI 19,600. Playoffs: Apr 27 BOS 20,092; Apr 29 BOS 19,600 (same) |
| 2024-25 | 41 games: total **808,337**, average 19,716 (computed) ([BBRef](https://www.basketball-reference.com/teams/MIA/2025_games.html)) | Playoffs: Apr 26, 2025 CLE 19,600; Apr 28 CLE 19,600 (same) |
| 2025-26 | 41 games: total **808,063**, average 19,709 (computed) ([BBRef](https://www.basketball-reference.com/teams/MIA/2026_games.html)) | None at home. Play-in at Charlotte, Apr 14, 2026 (same) |

### Miami Marlins (MLB), A03 (official: MLB Stats API attendance endpoint)

| Season | Regular season (81 home dates) | Postseason home games |
|---|---|---|
| 2023 | Total **1,162,819**; average 14,356; high 35,043 (Aug 13); low 7,232 (Jun 5) ([MLB API](https://statsapi.mlb.com/api/v1/attendance?teamId=146&season=2023)) | None at home. Wild Card at Philadelphia, Oct 3 (45,662) and Oct 4 (45,738) ([Wikipedia](https://en.wikipedia.org/wiki/2023_Miami_Marlins_season)) |
| 2024 | Total **1,087,455**; average 13,425; high 32,564 (Mar 28); low 6,156 (Sep 4) ([MLB API](https://statsapi.mlb.com/api/v1/attendance?teamId=146&season=2024)) | No postseason record in the API (same) |
| 2025 | Total **1,157,888**; average 14,295; high 35,609 (Sep 27); low 5,894 (Jun 2) ([MLB API](https://statsapi.mlb.com/api/v1/attendance?teamId=146&season=2025)) | No postseason record in the API (same) |
| 2026 | Total **1,231,018**; average 15,198; high 36,060 (Sep 25); low 6,505 (Apr 1) ([MLB API](https://statsapi.mlb.com/api/v1/attendance?teamId=146&season=2026)) | None. The 2026 postseason schedule returned 0 games ([MLB API](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=146&season=2026&gameType=F,D,L,W)) |

### Florida Panthers (NHL), A05 (secondary: Hockey-Reference game logs)

| Season | Regular-season home crowds | Postseason home games (announced) |
|---|---|---|
| 2022-23 (postseason only) | not covered | 9 games: Apr 21, 2023 BOS 19,910; Apr 23 BOS 19,771; Apr 28 BOS 18,911; May 7 TOR 19,911; May 10 TOR 19,868; May 22 CAR 19,873; May 24 CAR 20,065; Jun 8 VGK 19,735; Jun 10 VGK 19,986. Total 178,030 (computed) ([H-Ref](https://www.hockey-reference.com/teams/FLA/2023_games.html)) |
| 2023-24 | 41 games: total **763,931**, average 18,632 (computed) ([H-Ref](https://www.hockey-reference.com/teams/FLA/2024_games.html)) | 13 games: Apr 21 TBL 19,356; Apr 23 TBL 19,484; Apr 29 TBL 19,750; May 6 BOS 19,275; May 8 BOS 19,789; May 14 BOS 20,004; May 26 NYR 19,780; May 28 NYR 19,754; Jun 1 NYR 19,865; Jun 8 EDM 19,543; Jun 10 EDM 19,673; Jun 18 EDM 19,956; Jun 24 EDM 19,939. Total 256,168 (computed) (same) |
| 2024-25 | 40 games at A05: total **768,622**, average 19,216 (computed). Plus the Tampere "home" game, 12,807 ([H-Ref](https://www.hockey-reference.com/teams/FLA/2025_games.html)) | 10 games: Apr 26 TBL 19,587; Apr 28 TBL 19,551; May 9 TOR 19,842; May 11 TOR 19,894; May 16 TOR 19,797; May 24 CAR 19,836; May 26 CAR 19,897; Jun 9 EDM 19,863; Jun 12 EDM 19,994; Jun 17 EDM 19,983. Total 198,244 (computed) (same) |
| 2025-26 | 40 games at A05: total **776,550**, average 19,414 (computed). Plus the Winter Classic at A03, 36,153 ([H-Ref](https://www.hockey-reference.com/teams/FLA/2026_games.html)) | None; missed playoffs (same) |
| 2026-27 | Oct 10, 2026 vs MIN: 19,856 ([H-Ref](https://www.hockey-reference.com/teams/FLA/2027_games.html)) | — |

### Inter Miami CF (MLS), A06 → A04 (secondary: Wikipedia)

| Season | Regular-season home crowds | Postseason home games (announced) |
|---|---|---|
| 2023 (A06, then DRV PNK Stadium) | (2nd pass) 17 home matches; stated average **17,698**; range 14,072 (Jul 4)–20,452 (Aug 30). Summing the listed figures gives 301,601 / 17,741 (computed), which does not match the stated average; Oct 7 and Oct 18 both show 20,344, possibly a copy error ([Wikipedia](https://en.wikipedia.org/wiki/2023_Inter_Miami_CF_season), secondary) | (2nd pass) None; did not qualify (14th in the East). Leagues Cup (won) and U.S. Open Cup matches are listed there without home/away or venue per match, so not tabulated (same) |
| 2024 | Average **20,979**; no total given ([Wikipedia](https://en.wikipedia.org/wiki/2024_Inter_Miami_CF_season)) | Round One vs Atlanta. Game 1 (home): Oct 25, 2024, 20,673. Game 3 (home): Nov 9, 2024, 20,813. Game 2 at Atlanta: 68,455. Home status follows the higher seed hosting Games 1 and 3 ([Wikipedia 2024 playoffs](https://en.wikipedia.org/wiki/2024_MLS_Cup_playoffs)) |
| 2025 | 17 games: average **20,410**; high 21,550 (Oct 4); low 16,888 (Oct 11) ([Wikipedia](https://en.wikipedia.org/wiki/2025_Inter_Miami_CF_season)) | Round One G1 Oct 24, 2025 vs Nashville: 21,398. Round One G3 vs Nashville: 19,049 (date not stated). Conference final vs NYCFC (home): **gap**. MLS Cup Dec 6, 2025 vs Vancouver at A06: 21,556 ([Wikipedia 2025 playoffs](https://en.wikipedia.org/wiki/2025_MLS_Cup_playoffs); [MLS Cup 2025](https://en.wikipedia.org/wiki/MLS_Cup_2025)) |
| 2026 (A04, through Sep 5) | 11 of 12 played home MLS matches listed: 26,412; 26,277; 26,609; 26,684; 26,715; 26,649; 25,123; 25,922; 26,654; 26,066; 26,635. Total 289,746, average 26,341 (computed). Sep 12 not listed ([Wikipedia](https://en.wikipedia.org/wiki/2026_Inter_Miami_CF_season)). The May 17 figure, 26,715, is above the 26,700 capacity figure | Season in progress |

### Miami Hurricanes football (NCAA), A01 (secondary: Wikipedia)

| Season | Regular-season home crowds | Postseason |
|---|---|---|
| 2023 | 7 games: total **347,999**, average 49,714 (computed); range 40,077–58,503 ([Wikipedia](https://en.wikipedia.org/wiki/2023_Miami_Hurricanes_football_team)) | No home game. Pinstripe Bowl, Yankee Stadium, Dec 28: 35,314 |
| 2024 | 6 games: total **359,588**, average 59,931 (computed) ([Wikipedia](https://en.wikipedia.org/wiki/2024_Miami_Hurricanes_football_team)) | No home game. Pop-Tarts Bowl, Orlando, Dec 28: 38,650 |
| 2025 | 8 games: total **510,673**, average 63,834 (computed) ([Wikipedia](https://en.wikipedia.org/wiki/2025_Miami_Hurricanes_football_team)) | No home game. At Texas A&M (104,122); Cotton Bowl (71,323); Fiesta Bowl (67,928); CFP final at A01 as a neutral game (67,227) |
| 2026 | So far: Sep 10 vs FAMU 63,618; Sep 26 vs Central Michigan 65,338 ([Wikipedia](https://en.wikipedia.org/wiki/2026_Miami_Hurricanes_football_team)) | — |

### FIU football (NCAA), A08 (secondary: Wikipedia)

| Season | Regular-season home crowds | Postseason |
|---|---|---|
| 2024 | 6 games: total **76,889**, average 12,815 (computed). Sam Houston is 10,625 in the schedule vs 10,626 in the summary ([Wikipedia](https://en.wikipedia.org/wiki/2024_FIU_Panthers_football_team)) | None |
| 2025 | 6 games: total **83,181**, average 13,864 (computed) ([Wikipedia](https://en.wikipedia.org/wiki/2025_FIU_Panthers_football_team)) | No home game. First Responder Bowl, Dallas, Dec 26: 8,671 |
| 2023 | (2nd pass) 6 games at Riccardo Silva Stadium (A08): 16,878; 15,754; 17,437; 14,872; 14,074; 12,724. Total **91,739**, average 15,290 (computed) ([Wikipedia](https://en.wikipedia.org/wiki/2023_FIU_Panthers_football_team), secondary) | None (4–8, no bowl) (same) |

### FAU football (NCAA, edge), E01 (secondary: Wikipedia)

| Season | Regular-season home crowds | Postseason |
|---|---|---|
| 2024 | 6 games: total **116,997**, average 19,500 (computed) ([Wikipedia](https://en.wikipedia.org/wiki/2024_Florida_Atlantic_Owls_football_team)) | None |
| 2025 | 6 games: total **106,002**, average 17,667 (computed) ([Wikipedia](https://en.wikipedia.org/wiki/2025_Florida_Atlantic_Owls_football_team)) | None |
| 2023 | (2nd pass) 6 games at FAU Stadium (E01): 20,893; 17,934; 21,077; 17,241; 17,532; 15,871. Total **110,548**, average 18,425 (computed) ([Wikipedia](https://en.wikipedia.org/wiki/2023_Florida_Atlantic_Owls_football_team), secondary) | None; no bowl listed (same) |

### Miami Hurricanes men's basketball (NCAA), A11 (secondary: Wikipedia) (2nd pass)

| Season | Regular-season home crowds | Postseason |
|---|---|---|
| 2024-25 | 17 games: total **90,061**, average 5,298 (computed); range 2,541 (Mar 8, NC State)–7,801 (Feb 25, Duke). Exhibition Oct 30 vs Saint Leo, 1,242, excluded ([Wikipedia](https://en.wikipedia.org/wiki/2024%E2%80%9325_Miami_Hurricanes_men%27s_basketball_team)) | None; did not qualify (same) |
| 2025-26 | 18 games: total **95,283**, average 5,294 (computed); range 3,751–7,972 (Mar 7, Louisville; equals the 7,972 capacity) ([Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Miami_Hurricanes_men%27s_basketball_team)) | No home game. ACC tournament, Spectrum Center, Charlotte: Mar 12, 11,722; Mar 13, 17,711. NCAA, Enterprise Center, St. Louis: Mar 20, 17,726; Mar 22, 16,348 (same) |

Women's basketball: not researched (gap).

### FIU men's basketball (NCAA), A15 (secondary: Wikipedia) (2nd pass)

| Season | Regular-season home crowds | Postseason |
|---|---|---|
| 2024-25 | 560–1,535 per game (from the venue answer) ([Wikipedia](https://en.wikipedia.org/wiki/2024%E2%80%9325_FIU_Panthers_men%27s_basketball_team)) | not checked |
| 2025-26 | 18 home games; 17 with attendance: total **11,161**, average 657 (computed); range 194–1,735. Feb 14 vs Louisiana Tech not listed ([Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_FIU_Panthers_men%27s_basketball_team)) | No home game. C-USA first round, Propst Arena, Huntsville, Mar 10, 2026: 2,509 (same) |

### Teams with no crowd history gathered in this pass (gaps)

- **Miami FC (A08), Inter Miami CF II (A06), Hurricanes women's basketball:** not researched (2nd pass prioritized the listed gaps).
- **Fort Lauderdale United FC (A13):** only the venue answer's 2025–26 average of 2,030 ([Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Fort_Lauderdale_United_FC_season)).

## 6. Capacities still open (item 7)

| Row | Room / setup | Sourced figure(s), side by side | Status |
|---|---|---|---|
| A04 | Nu Stadium, soccer | **26,700**: Ticketmaster venue guide says "total seating capacity of 26,700" ([Ticketmaster](https://blog.ticketmaster.com/step-inside-nu-stadium-miami-fl/)). 26,700: [NBC6](https://www.nbcmiami.com/news/sports/inter-miami/nu-stadium-what-to-know-about-inter-miamis-new-home-in-freedom-park/3778759/). **25,000**: earlier plan ([MLS, 2024](https://www.mlssoccer.com/news/inter-miami-stadium-miami-freedom-park-to-open-in-2026)) | **Use 26,700 (reported, two sources).** 25,000 is a pre-opening plan figure. The official club page was not read (rate-limited). An announced crowd of 26,715 on May 17, 2026 ([Wikipedia](https://en.wikipedia.org/wiki/2026_Inter_Miami_CF_season)) slightly exceeds it. Re-check against the club page |
| A04 | Nu Stadium, concert | none found (the Ticketmaster guide gives one total only) | **gap** |
| A07 | Kaseya Center, concerts | only the range 5,000–20,021 ([Wikipedia](https://en.wikipedia.org/wiki/Kaseya_Center)); the [Kaseya Center FAQ](https://www.kaseyacenter.com/guest-services/faqs) was not read | **gap.** Range only; leave blank |
| A07 | Kaseya Waterfront Theater (setup inside A07) | only the range 3,000–5,800 ([lz.lv mirror of Wikipedia](https://lz.lv/lv/sport/stadions/kaseya-center)) | **gap.** Range only; straddles 5,000; leave blank |
| A01 | Hard Rock Stadium, concert | none found ([venue answer](miami-venue-table-answer.md)) | **gap** |

**Rooms near 5,000.** Each counts on its sourced figure alone; conflicting sources are listed, none new this pass:

| Row | Figures | Note |
|---|---|---|
| A10 FPL Solar Amphitheater | 8,500 (city/CVB) / 5,000 (Songkick) / 1,646 (Ticketmaster) / 5,828 lawn standing + 125 seated (Vendry) | Sources in the [venue answer](miami-venue-table-answer.md) |
| A15 Ocean Bank Convocation Center | 5,000 | [Wikipedia](https://en.wikipedia.org/wiki/Ocean_Bank_Convocation_Center) |
| A16 Grandstand | 5,000, mostly general admission | [Miami Open](https://www.miamiopen.com/faq-items/how-many-seats-does-the-grandstand-court-have/) |
| A17 James L. Knight Center | 4,569 / 4,646 / 4,500 / 5,000 | Sources in the [venue answer](miami-venue-table-answer.md) |

Other conflicts (not ranges) are carried forward unchanged from the venue answer: A02, A08, A09 and E02.

*End of answer: October 13, 2026; second pass October 14, 2026.*
