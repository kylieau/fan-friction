# Denver: follow-up on city-build gaps (research answer)

**Dated:** Tuesday, October 13, 2026 (America/Los_Angeles); **second pass Oct 14, 2026** (gap-filling only; new facts are marked "(2nd pass)"). Public sources only. This is research, not approval of a city build.

**Inputs used:** [denver-gaps-followup-prompt.md](denver-gaps-followup-prompt.md) (brief) and [denver-venue-table-answer.md](denver-venue-table-answer.md) (venue row IDs and team list). **The city-type answer (`denver-city-type-answer.md`) was not provided, so I didn't use it or redo its work.**

## How to read this file

- **Row IDs.** Row IDs **A1–A11** come from the venue answer (§2a, core 5,000+ rooms). That answer gives no row IDs for its §2c (1,000–5,000) or §2d (edge) rooms. Those rooms are marked "no row ID (§2c)" or "no row ID (§2d, edge)", and I didn't make up IDs.
- **Source labels.**
  - *Official*: team, league, venue or university page, or the league's own data API (MLB Stats API, NHL API).
  - *Secondary*: ESPN's public site API, Wikipedia, Sports Reference sites (Pro-Football-Reference, Basketball-Reference), ticket marketplaces. ESPN is a broadcaster and data provider, not the team's brand owner, so ESPN colors are labeled **secondary**.
- **Ticketmaster verification.** "Verified" means one of two things. I fetched a `ticketmaster.com/.../venue/NNNNN` page and it named the room, or a Ticketmaster-owned page linked to that URL for the room. I didn't use a Discovery API key.
- **Research limits in this pass. These caused several gaps.**
  - **Web search hit its per-turn limit** partway through the Ticketmaster checks. After that I used direct fetches only (ESPN site API, MLB Stats API, NHL API, Wikipedia, Sports Reference). Items that needed a fresh search are marked "gap" with what I had searched.
  - **Two official color pages were inaccessible.** The fetch proxy returned HTTP 429 (rate limited) for the [DU colors page](https://www.du.edu/university-relations/style-guides/visual/colors) and the [CU Boulder visual identity page](https://www.colorado.edu/imc/cu-boulder-brand/visual-identity). Following the rule, I didn't retry them and didn't use any other route to reach them.
  - **Two pages returned a fetch error:** `coloradorapids.com/club/brand` and the hockeydb NHL attendance page.
  - **ESPN attendance pages returned no content.** `espn.com/{nhl,nba,nfl,mlb}/attendance` came back empty because the pages are script-rendered.
  - **(2nd pass, Oct 14, 2026)** About 27 web searches plus direct fetches; the search limit was **not** hit. Fetch errors this pass: `du.edu/university-relations/style-guides/visual/colors` (server error; the newer `du.edu/brand/visual/colors` loaded), `coloradorapids.com/club/brand` (client error again), and ESPN `soccer/usa.mlsnextpro/teams` (client error). None were retried by another route.
  - **ESPN schedule responses were cut off.** ESPN team-schedule JSON was truncated partway through a season, so I used per-date scoreboard calls to confirm specific games.

---

## 1. Name, short form, code and covered area

### What teams and sources use

| Signal | "Denver" | "Colorado" | Source |
|---|---|---|---|
| Airport code | **DEN** (IATA and FAA LID; ICAO KDEN) | — | [Wikipedia: Denver International Airport](https://en.wikipedia.org/wiki/Denver_International_Airport) |
| Broncos (NFL) | ESPN location "Denver", abbreviation **DEN** | — | [ESPN API](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/den) |
| Nuggets (NBA) | location "Denver", **DEN** | — | [ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/den) |
| Summit FC (NWSL) | **DEN** | — | [ESPN API](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams) |
| DU Pioneers | location "Denver", **DEN** | — | [ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2172) |
| Denver Outlaws (PLL) | name "Denver"; abbreviation **OUT** | — | [ESPN API](https://site.api.espn.com/apis/site/v2/sports/lacrosse/pll/teams) |
| Avalanche (NHL) | — | location "Colorado", **COL** | [ESPN API](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/col) |
| Rockies (MLB) | MLB `locationName` "Denver" | team name "Colorado", **COL** | [MLB Stats API](https://statsapi.mlb.com/api/v1/teams/115); [ESPN API](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/col) |
| Rapids (MLS) | — | **COL** | [ESPN API](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams) |
| Mammoth (NLL) | — | **COL** | [ESPN API](https://site.api.espn.com/apis/site/v2/sports/lacrosse/nll/teams) |
| CU Buffaloes (edge) | — | **COLO** | [ESPN API](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/38) |
| City nickname | "The Mile High City" | — | [Wikipedia: Denver](https://en.wikipedia.org/wiki/Denver) |
| Local media (outlet names only) | Denver Gazette, Denver7, Denverite, Denver Post | — | Outlet names as cited in the [venue answer](denver-venue-table-answer.md). I didn't run a dedicated media-usage survey (gap: search budget exhausted) |

**Reading.** Unlike Tampa Bay, Denver's teams don't share one umbrella name. Four big teams (Avalanche, Rockies, Rapids, Mammoth) use the *state* name "Colorado"; the others use "Denver". "Colorado" covers the whole state, including Colorado Springs and Fort Collins, which the venue answer excludes. So "Colorado" would overstate the coverage area and clash with the separate Colorado Springs and Fort Collins metros. The Tampa Bay change happened because every team used the regional name, and that isn't true here.

### Recommendation (for the builder to confirm)

| Field | Value | Basis |
|---|---|---|
| Display name | **Denver** | MSA name ([Colorado statistical areas](https://en.wikipedia.org/wiki/Colorado_statistical_areas)); used by Broncos, Nuggets, Summit FC and DU (table above) |
| Short form | **Denver** (already short). Optional tagline "Mile High" from the [city nickname](https://en.wikipedia.org/wiki/Denver); no team uses it as a location name | — |
| Code | **DEN** | Airport IATA ([source](https://en.wikipedia.org/wiki/Denver_International_Airport)); Broncos, Nuggets, Summit and DU abbreviation. **Don't use COL**: four teams use it as a *team* abbreviation, and it reads as the state |
| Covered area (core) | **Denver–Aurora–Centennial MSA**, 10 counties: Denver, Arapahoe, Jefferson, Adams, Douglas, Broomfield, Elbert, Park, Clear Creek, Gilpin; 2025 estimate 3,092,037 ([source](https://en.wikipedia.org/wiki/Colorado_statistical_areas)). The brief's "Denver–Aurora–Lakewood" is the pre-2023 name of the same MSA (see venue answer §1) | — |
| Boulder | **Not in core.** Boulder MSA is part of the Denver–Aurora–Greeley CSA ([source](https://en.wikipedia.org/wiki/Colorado_statistical_areas)). Venue answer recommends an optional edge tier, off by default | — |
| Fort Collins / Loveland | **Out.** Separate MSA, not in the CSA ([source](https://en.wikipedia.org/wiki/Colorado_statistical_areas)) | — |
| Colorado Springs | **Out.** Separate MSA, no CSA link ([source](https://en.wikipedia.org/wiki/Colorado_statistical_areas)) | — |
| Greeley | **Out for now.** In the CSA, but the venue answer found no 5,000+ fixed room | — |

---

## 2. Ticketmaster venue IDs (concert rooms)

**Main finding:** Denver's city-owned venues, and the AEG-run rooms, sell through **AXS, not Ticketmaster**.

- **Denver-owned venues.** Red Rocks' official ticketing page says "[AXS is the ticketing provider for Red Rocks and other City of Denver venues](https://www.redrocksonline.com/?p=7123)". A Dec 4, 2019 CBS Colorado report says Council made AXS the exclusive seller for city-owned venues, naming Red Rocks, Bellco Theatre, Denver Coliseum, McNichols, Buell Theatre and Ellie Caulkins Opera House ([CBS Colorado](https://www.cbsnews.com/colorado/news/axs-denver-owned-venues)). The Colorado Convention Center confirms "[AXS is the only trusted event ticket provider for the Bellco Theatre](https://denverconvention.com/attend-an-event/event-tickets)".
- **Consequence.** Under the brief's rule ("no ID → no concerts there"), **Red Rocks, Fiddler's Green, Bellco, Denver Coliseum, Mission Ballroom and the city theatres would ship with no concerts.** That's the largest gap in this file.
- **AXS IDs below are listed for reference only.** They are not Ticketmaster IDs.

| Venue row ID | Room | Ticketmaster venue ID | Verification link (or "not verified") | Notes |
|---|---|---|---|---|
| A1 | Empower Field at Mile High | **246376** | [ticketmaster.com/…/venue/246376](https://www.ticketmaster.com/empower-field-at-mile-high-boletos-denver/venue/246376); page names "Empower Field At Mile High", Denver, CO. Also linked from [Ticketmaster blog](https://blog.ticketmaster.com/step-inside-ball-arena-denver-co/) | Verified |
| A2 | Coors Field | **246126** | Linked from Ticketmaster's own [Coors Field guide](https://blog.ticketmaster.com/step-inside-coors-field-denver-co) (`ticketmaster.com/coors-field-tickets-denver/venue/246126`). The venue page itself wasn't fetched | Verified via Ticketmaster-owned linking page |
| A3 | Ball Arena | **246112** | [ticketmaster.com/venue/246112](https://www.ticketmaster.com/venue/246112?page=2); page names "Ball Arena". Also linked from [Ticketmaster blog](https://blog.ticketmaster.com/step-inside-ball-arena-denver-co/) | Verified |
| A4 | Dick's Sporting Goods Park | **246830** | [ticketmaster.com/…/venue/246830](https://ticketmaster.com/dicks-sporting-goods-park-boletos-commerce-city/venue/246830); page names "DICK'S Sporting Goods Park", Commerce City | Verified |
| A5 | Fiddler's Green Amphitheatre | not verified | Not verified. Search found only AXS venue [100869](https://www.axs.com/venues/100869) (AEG-operated per venue answer) | Likely no TM ID; needs AXS or manual feed |
| A6 | Centennial Stadium | not verified | Not verified. Club FAQ says tickets are sold via the club app and site, with no third-party seller named ([Summit FC FAQ](https://www.denversummitfc.com/?p=152)) | Sports-only room; concerts unlikely |
| A7 | Denver Coliseum | not verified | Not verified. City venue on AXS ([CBS Colorado](https://www.cbsnews.com/colorado/news/axs-denver-owned-venues)); AXS venue [100887](https://www.axs.com/venues/100887) | No TM ID expected |
| A8 | Red Rocks Amphitheatre | not verified | Not verified. Official site says AXS is the provider; AXS venue [101164](https://www.axs.com/venues/101164/red-rocks-amphitheatre-morrison-tickets) ([Red Rocks ticketing info](https://www.redrocksonline.com/?p=7123)) | **No TM ID; Red Rocks would ship with no concerts** |
| A9 | Levitt Pavilion Denver | not verified | Not verified. Search found only resale listings (e.g. [Vivid Seats 16452](https://www.vividseats.com/levitt-pavilion-denver-tickets/venue/16452)). Gap: a search for Levitt's own ticketing provider was blocked by the search limit. **(2nd pass) Provider:** a dated Apr 15, 2019 CBS Colorado report says "Tickets can be purchased at Ticketmaster.com or levittdenver.org" ([CBS Colorado](https://www.cbsnews.com/colorado/news/50-free-concerts-denvers-levitt-pavilion-releases-summer-schedule/)). **Not confirmed for 2026:** [levittdenver.org](https://levittdenver.org) names no ticketer; [Axios, Mar 19, 2026](https://www.axios.com/local/denver/2026/03/19/levitt-pavilion-s-free-concerts-in-2026) says free shows need no tickets (RSVP encouraged) and premium tickets exist, but names no seller; [Songkick](https://www.songkick.com/venues/4634336-levitt-pavilion-denver) shows no vendor. No `ticketmaster.com/.../venue/NNNNN` page found | Ticketmaster per 2019 report (dated); TM venue ID still gap |
| A10 | Magness Arena | not verified | Not verified. Live Nation lists it as venue **KovZpZAFa7lA** ("University of Denver - Magness Arena") ([livenation.com](https://www.livenation.com/venue/KovZpZAFa7lA/university-of-denver-magness-arena-events)), an alphanumeric ID with no numeric TM link on the page. AXS venue [101054](https://www.axs.com/de/venues/101054/magness-arena-denver-tickets) also exists | The KovZ… form looks like a Discovery API venue ID, but I didn't check it against the API |
| A11 | Bellco Theatre | not verified | Not verified. AXS only ([CCC](https://denverconvention.com/attend-an-event/event-tickets)); AXS venue [124669](https://www.axs.com/us/venues/124669/bellco-theatre-denver-tickets) | No TM ID expected |
| no row ID (§2c) | Paramount Theatre | **245776** | [ticketmaster.com/…/venue/245776](https://www.ticketmaster.com/paramount-theatre-boletos-denver/venue/245776); page names "Paramount Theatre", 400 15th Street, Denver | Verified |
| no row ID (§2c) | Fillmore Auditorium | not verified | Not verified. Ticketmaster's [venue guide](https://origin-blog.ticketmaster.com/venue-faq-fillmore-auditorium-denver-co) links only to Live Nation venue **KovZpZAE6eJA** ([livenation.com](https://www.livenation.com/venue/KovZpZAE6eJA/fillmore-auditorium-denver-events)), whose TM links are event pages, not a venue page. **(2nd pass) still not found:** re-fetched the Live Nation page (address 1510 Clarkson, Denver, CO 80218; every ticketmaster.com link is an event page, none contains `/venue/`) and the [Ticketmaster venue guide](https://origin-blog.ticketmaster.com/?p=48452) (only the Live Nation link); searches `ticketmaster.com "Fillmore Auditorium" Denver venue tickets` and `"ticketmaster.com" "fillmore-auditorium" denver "venue/"` returned no venue page | Live Nation room; TM numeric ID very likely exists but wasn't found |
| no row ID (§2c) | Mission Ballroom | not verified | Not verified. AXS venue [127278](https://www.axs.com/venues/127278) (AEG) | — |
| no row ID (§2c) | Ogden Theatre | not verified | Not verified. Gap: one combined Ogden/Gothic search returned only Gothic AXS events. **(2nd pass):** AXS venue [101141](https://www.axs.com/venues/101141) = "Ogden Theatre", 935 East Colfax Avenue, Denver, CO 80218; search `Ogden Theatre Denver tickets official site ticketing AXS` returned only AXS event pages, no Ticketmaster page | AXS room (AEG); no TM ID expected |
| no row ID (§2c) | Gothic Theatre | not verified | Not verified. AXS events seen (e.g. [axs.com/events/1315388](https://www.axs.com/events/1315388)) | — |
| no row ID (§2c) | Buell Theatre; Ellie Caulkins Opera House | not verified | Not verified. City venues on AXS ([CBS Colorado](https://www.cbsnews.com/colorado/news/axs-denver-owned-venues)) | — |
| no row ID (§2c) | Boettcher Concert Hall | not verified | Not verified. Not named in the AXS article. Gap: no search run (search limit). **(2nd pass) Ticketer:** the Denver Performing Arts Complex ticketing page says the resident companies "are the only authorized ticket providers for their events" (Colorado Symphony's box office is in Boettcher) and other events are "ticketed by AXS.com" ([artscomplex.com](https://www.artscomplex.com/events/ticketing-info)). AXS venue [124737](https://www.axs.com/venues/124737) = "Boettcher Concert Hall", 1400 Curtis Street, Denver | Symphony sells its own; other events AXS. No TM ID expected |
| no row ID (§2d, edge) | Folsom Field | not verified | Not verified. CU sends concert buyers to a CU eVenue store ([cubuffs.com](https://cubuffs.com/sports/2025/6/10/folsom-field-concert-information)); Live Nation venue **KovZpZA1EvaA** ([livenation.com](https://www.livenation.com/en-ca/venue/KovZpZA1EvaA/folsom-field-events)) | Edge |
| no row ID (§2d, edge) | Ford Amphitheater | not verified | Not verified. AXS venue [129476](https://www.axs.com/venues/129476) | Edge |
| no row ID (§2d, edge) | Blue Arena | not verified | Not verified. Exclusive AXS deal ([TREC news](https://www.treventscomplex.com/news/detail/blue-arena-and-axs-announce-exclusive-ticketing-agreement)) | Edge |
| no row ID (§2d, edge) | Broadmoor World Arena | not verified | Not verified. Box office page names AXS ([source](https://www.broadmoorworldarena.com/events-tickets/box-office)) | Edge |
| no row ID (§2d, edge) | CU Events Center, Weidner Field, Moby Arena, Canvas Stadium, Falcon Stadium | not verified | Not checked. Gap: search budget exhausted | Edge |

**Count:** 5 Ticketmaster IDs verified (A1, A2, A3, A4, Paramount). Every other room is not verified: 7 core rows (A5–A11), 7 §2c rooms (Fillmore, Mission, Ogden, Gothic, Buell, Ellie Caulkins, Boettcher) and all edge rooms.

**Searches run for the unverified rooms:** "ticketmaster.com Fiddler's Green Amphitheatre Greenwood Village venue"; "ticketmaster.com Red Rocks Amphitheatre Morrison venue tickets"; "ticketmaster.com Bellco Theatre Denver venue"; "ticketmaster.com Magness Arena Denver venue"; "\"ticketmaster.com\" \"fillmore auditorium\" denver \"venue/\""; "ticketmaster Levitt Pavilion Denver venue page"; "Mission Ballroom Denver tickets AXS venue"; "Denver Coliseum tickets AXS venue"; "Ogden Theatre Gothic Theatre tickets AXS venue Denver"; and edge equivalents. None returned a `ticketmaster.com/.../venue/NNNNN` page for those rooms.

---

## 3. Teams: league, home row, free schedule feed, colors

**Feed notes**
- **ESPN** = ESPN public site API (`site.api.espn.com/apis/site/v2/sports/{sport}/{league}/teams/{id}`). It's free and needs no key, but it is unofficial and undocumented (secondary). ESPN team IDs are unique only *within a league*: Broncos (NFL) and Nuggets (NBA) are both ESPN id **7**.
- **MLB Stats API** and **NHL API** (`api-web.nhle.com`) are the leagues' own free endpoints.

**Color notes**
- Every hex below is from ESPN's API and is labeled **secondary**.
- I found no reachable official team or league brand page with hex codes in this pass:
  - DU and CU official color pages: HTTP 429.
  - `coloradorapids.com/club/brand`: fetch error.
  - The Summit FC homepage lists no hex codes ([source](https://www.denversummitfc.com/)).
  - Other team brand pages: gap, because the search budget was exhausted.
- Treat these hexes as placeholders until an official source confirms them.
- **(2nd pass) Official color sources found:**
  - **DU:** official brand colors page lists primary "DU CRIMSON" **#BA0C2F** and "DU GOLD" **#A89968** (plus black/white) ([du.edu/brand/visual/colors](https://www.du.edu/brand/visual/colors); same values in the [DU Style Guide 2025 PDF](https://www.du.edu/sites/default/files/2025-12/DU-StyleGuide2025-121925.pdf), PMS 200 / 7503). The old style-guide URL still errors; the new URL above loaded. ESPN's #98002E / #A8996E differ, so ESPN is now secondary for DU.
  - **CU Boulder (edge):** official visual identity page lists primary "CU Gold" **#CFB87C** and "Black" **#000000** (also CU Dark Gray #565A5C, CU Light Gray #A2A4A3) ([colorado.edu visual identity](https://www.colorado.edu/imc/cu-boulder-brand/visual-identity)). Matches ESPN.
  - **Summit FC:** the club's launch page names the palette as "green and white" (paying homage to Colorado license plates) but gives no hex ([denversummitfc.com](https://www.denversummitfc.com/?p=39)). ESPN's gold secondary (#E4B83E) is **not** in the club's stated palette; flag it. The [NWSL launch article](https://www.nwslsoccer.com/news/denver-summit-fc-unveil-name-colors-and-crest) carries no color text (only embedded posts).
  - **Mammoth:** the club's [About page](https://coloradomammoth.com/about/) states no colors.
  - **Still no official hex:** Broncos, Nuggets, Avalanche, Rockies, Rapids, Mammoth. Searches run: "Denver Broncos official brand colors hex style guide"; "site:denverbroncos.com Broncos orange navy official team colors"; "Denver Nuggets brand guidelines Mile High Blue Sunshine Yellow Flatirons Red official"; "Colorado Avalanche official colors burgundy blue hex NHL brand guidelines PMS"; "site:mlb.com Rockies official team colors purple black silver"; "Colorado Rapids brand guidelines colors burgundy blue hex official"; "Colorado Mammoth NLL official colors brand". Results were fan/aggregator color sites only (e.g. teamcolorcodes.com, usteamcolors.com), which aren't official and weren't used. `coloradorapids.com/club/brand` errored again (2nd pass). ESPN values stay as secondary for these teams.

| Team | League | Home venue row ID | Free feed and ID (or "no feed") | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| Denver Broncos | NFL | A1 | ESPN NFL id **7**, abbr DEN ([link](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/den)) | #0A2343 | #FC4C02 | ESPN API, secondary ([link](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/den)) |
| Denver Nuggets | NBA | A3 | ESPN NBA id **7**, abbr DEN ([link](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/den)) | #0E2240 | #FEC524 | ESPN API, secondary |
| Colorado Avalanche | NHL | A3 | NHL API club **COL** ([schedule](https://api-web.nhle.com/v1/club-schedule-season/COL/now)); ESPN NHL id **17** ([link](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/col)) | #860038 | #005EA3 | ESPN API, secondary |
| Colorado Rockies | MLB | A2 | MLB Stats API teamId **115**, venueId 19 ([link](https://statsapi.mlb.com/api/v1/teams/115)); ESPN MLB id 27 ([link](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/col)) | #33006F | #000000 | ESPN API, secondary |
| Colorado Rapids | MLS | A4 | ESPN `soccer/usa.1` id **184** ([link](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams)) | #8A2432 | #8AB7E9 | ESPN API, secondary |
| Colorado Mammoth | NLL | A3 | ESPN `lacrosse/nll` id **125422** ([teams](https://site.api.espn.com/apis/site/v2/sports/lacrosse/nll/teams); [schedule](https://site.api.espn.com/apis/site/v2/sports/lacrosse/nll/teams/125422/schedule)) | #8A2432 | #A3AAAE | ESPN API, secondary. Wikipedia lists "Burgundy and Black" ([source](https://en.wikipedia.org/wiki/Colorado_Mammoth)), which conflicts with ESPN's grey secondary |
| Denver Summit FC | NWSL | A6 (from Jul 18, 2026); also A1, A4 in 2026, see §4 | ESPN `soccer/usa.nwsl` id **131563**, abbr DEN ([link](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams)) | #20604E | #E4B83E | ESPN API, secondary. (2nd pass) Club states its palette is "green and white", no hex ([denversummitfc.com](https://www.denversummitfc.com/?p=39)); ESPN's gold secondary conflicts |
| University of Denver Pioneers | NCAA (NCHC hockey; Summit League basketball not verified here) | A10 | ESPN men's college basketball id **2172** ([link](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2172)). Men's college hockey id **2172** also resolves ([link](https://site.api.espn.com/apis/site/v2/sports/hockey/mens-college-hockey/teams/2172)), but the hockey teams list didn't show Denver in the visible part | **#BA0C2F** (2nd pass) | **#A89968** (2nd pass) | **Official** DU brand page ([du.edu/brand/visual/colors](https://www.du.edu/brand/visual/colors)) (2nd pass). ESPN secondary values #98002E / #A8996E conflict |
| Colorado Buffaloes *(edge)* | NCAA (Big 12) | no row ID (§2d: Folsom Field, CU Events Center) | ESPN college football id **38**, abbr COLO ([link](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/38)) | #CFB87C | #000000 | **Official** CU Boulder visual identity page ([colorado.edu](https://www.colorado.edu/imc/cu-boulder-brand/visual-identity)) (2nd pass); matches ESPN |
| Denver Outlaws | PLL (touring) | no row ID (§2c: Peter Barton Lacrosse Stadium, host weekend only) | ESPN `lacrosse/pll` id **122896**, abbr OUT ([link](https://site.api.espn.com/apis/site/v2/sports/lacrosse/pll/teams)) | #FF4D00 | #B3B3B3 | ESPN API, secondary |
| Colorado Rapids 2 | MLS Next Pro | A4 **and** University of Denver Soccer Stadium (no row ID) in 2026 (2nd pass; see §4) | **(2nd pass) No free machine feed found.** ESPN `soccer/usa.mlsnextpro/teams` returned a fetch error (league slug unconfirmed). Club schedule page exists ([coloradorapids.com/rapids2/schedule/matches](https://www.coloradorapids.com/rapids2/schedule/matches)) but rendered no fixtures and no ICS link; it links to [mlsnextpro.com](https://www.mlsnextpro.com) for streams only. Treat as **no feed** (manual schedule from club news) | gap | gap | No official hex found (2nd pass) |
| Colorado Eagles *(edge)* | AHL | no row ID (§2d: Blue Arena) | **(2nd pass) No confirmed free feed ID.** Club schedule page [coloradoeagles.com/schedule](https://www.coloradoeagles.com/schedule) (has a "Sync" calendar link and [printable PDF](https://www.coloradoeagles.com/assets/doc/2026-27-ColoEa-Printable-1dd7ce6a7d.pdf)); league page [theahl.com/stats/schedule](https://theahl.com/stats/schedule). The club links a theahl.com stats URL with path `/419/81`, but the fetched page didn't confirm 419 = Eagles, so no ID is given. ESPN doesn't list the AHL (not tested) | gap | gap | — |
| Colorado Springs Switchbacks, UFL Colorado, CSU Rams, Air Force *(edge)* | USL / UFL / NCAA | no row ID (§2d) | Not checked (gap) | gap | gap | — |

**(2nd pass) Teams with no free feed:** **Colorado Rapids 2** (no ESPN/league feed found; club page only) and **Colorado Eagles** (edge; club and theahl.com pages, no confirmed feed ID). Other edge teams (Switchbacks, UFL Colorado, CSU, Air Force) remain unchecked.

**Teams with no free feed (pass 1):** none of the core teams. Each core team (Broncos, Nuggets, Avalanche, Rockies, Rapids, Mammoth, Summit FC, DU) has a free feed with an ID. **Not confirmed:** Colorado Rapids 2 and all edge teams except CU and the Outlaws. These weren't tested, so they're "unknown" rather than confirmed "no feed".

**Missed-team check:** no NWSL club besides Denver Summit FC. NWSL's 16-team list on ESPN contains only that Denver club ([ESPN](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams)).

---

## 4. Games away from the home venue (2025 on)

These rows must not be placed at the team's usual home room. Dates are local unless noted.

| Team | Date | Game | Actual site (row ID) | Designated home | Attendance | Source |
|---|---|---|---|---|---|---|
| Denver Summit FC | Mar 28, 2026 | vs Washington Spirit (NWSL) | Empower Field at Mile High (**A1**) | Summit | 63,004 | [ESPN NWSL scoreboard, event 401854045](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/scoreboard?dates=20260328) |
| Denver Summit FC | Apr 25, 2026 | vs San Diego Wave | Dick's Sporting Goods Park (**A4**) | Summit | 16,932 | [ESPN, event 401854049](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/scoreboard?dates=20260425) |
| Denver Summit FC | May 16, 2026 | vs Orlando Pride | **A4** | Summit | 16,974 | [ESPN, event 401854056](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/scoreboard?dates=20260516) |
| Denver Summit FC | Jul 3, 2026 | vs Kansas City Current | **A4** | Summit | 16,833 | [ESPN, event 401854061](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/scoreboard?dates=20260703) |
| Denver Summit FC | Jul 12, 2026 | vs Houston Dash | **A4** | Summit | 15,131 | [ESPN, event 401854064](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/scoreboard?dates=20260712) |
| Colorado Rapids | Apr 18, 2026 | vs Inter Miami CF (MLS) | Empower Field at Mile High (**A1**) | Rapids | 75,824 | [ESPN MLS scoreboard, event 761546](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard?dates=20260418); attendance also on [Wikipedia 2026 Rapids season](https://en.wikipedia.org/wiki/2026_Colorado_Rapids_season) |
| DU Pioneers (hockey) | Nov 29, 2025 | vs Minnesota (US Hockey Hall of Fame Game) | Ball Arena (**A3**) | DU | 12,228 | [Wikipedia 2025–26 DU hockey season](https://en.wikipedia.org/wiki/2025%E2%80%9326_Denver_Pioneers_men%27s_ice_hockey_season) (secondary) |
| Avalanche (preseason) | Sep 21, 2025 | Utah Mammoth vs Avalanche (split-squad) | Magness Arena (**A10**) | Utah listed as home; NHL feed flags neutral site | 6,315 | [NHL API 2025–26](https://api-web.nhle.com/v1/club-schedule-season/COL/20252026); [Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Colorado_Avalanche_season). The other split-squad game that day was at Ball Arena (12,869) |
| Nuggets (preseason) | Oct 4, 2025 | vs Minnesota | Pechanga Arena (San Diego) | Nuggets (no "@" in log) | 12,096 | [Wikipedia 2025–26 Nuggets](https://en.wikipedia.org/wiki/2025%E2%80%9326_Denver_Nuggets_season) (secondary) |
| Nuggets (preseason, pre-2025 context) | Oct 4, 2024 | vs Boston | Etihad Arena (Abu Dhabi) | Nuggets | 12,002 | [Wikipedia 2024–25 Nuggets](https://en.wikipedia.org/wiki/2024%E2%80%9325_Denver_Nuggets_season) |
| Broncos | Oct 12, 2025 | Broncos at New York Jets (international) | Tottenham Hotspur Stadium, London | **Jets** (neutral site); not a Broncos home game | 61,155 | [ESPN NFL scoreboard, event 401772634](https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=20251012) |
| Rockies | Jun 14, 2026 | Rockies at Athletics | Las Vegas Ballpark | Athletics; not a Rockies home game | not collected | [Wikipedia 2026 Rockies](https://en.wikipedia.org/wiki/2026_Colorado_Rockies_season) |
| Colorado Rapids 2 (2nd pass) | Apr 19, May 3, Jun 6, Jun 27, Sep 20, 2026 | Home vs Minnesota United FC 2; Houston Dynamo FC 2; St. Louis CITY2; Whitecaps FC 2; North Texas SC | **University of Denver Soccer Stadium** (DU campus; **no row ID**, not in venue answer) | Rapids 2 (default assumed A4) | not collected | [coloradorapids.com, R2 venue announcement](https://www.coloradorapids.com/rapids2/news/colorado-rapids-2-announce-venues-for-remaining-2026-home-matches) (official; undated page). Same page: May 10, May 13, Jun 20, Aug 8, Aug 23, Aug 28 at DSG Park (A4, field not named); Jul 11 vs North Texas SC venue **TBD**. The intro says six DU matches but the table lists five |
| Colorado Eagles (edge, 2nd pass) | 2026–27 | Home opener Oct 9, 2026 at Blue Arena | Blue Arena (edge) | Eagles | — | [Eagles 2026–27 schedule release, Jul 9, 2026](https://www.coloradoeagles.com/news/detail/eagles-announce-2026-27-season-schedule) (official). No other home site listed. The club schedule page also links a "Colorado Eagles Arena at Cascadia" FAQ ([coloradoeagles.com/schedule](https://www.coloradoeagles.com/schedule)); opening date not checked (gap) |
| DU Pioneers (NCAA tournament) | Mar 27 & 29, 2026 | NCAA Regional vs Cornell; vs Western Michigan | Blue Arena, Loveland (edge, no row ID) | Neutral | not listed | [Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Denver_Pioneers_men%27s_ice_hockey_season) |
| DU Pioneers (Frozen Four) | Apr 9 & 11, 2026 | vs Michigan; vs Wisconsin | T-Mobile Arena, Las Vegas | Neutral | not listed | [Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Denver_Pioneers_men%27s_ice_hockey_season) |

**Checked, none found:**

| Team | Result | Source / limits |
|---|---|---|
| Avalanche (Stadium Series and outdoor games) | No Avalanche home game away from Ball Arena and no neutral or international game in 2025–26. Same for 2026–27 through Dec 27, 2026 | [NHL API now](https://api-web.nhle.com/v1/club-schedule-season/COL/now); [2025–26](https://api-web.nhle.com/v1/club-schedule-season/COL/20252026). **Gap:** the 2026–27 feed was truncated after Dec 27, 2026, so Jan–Apr 2027 (when outdoor games usually happen) wasn't checked. **(2nd pass) Jan–Apr 2027 now checked:** every Avalanche home game is at Ball Arena and no game has `neutralSite` true or a special-event name (Jan 2 – Apr 10, 2027; no Avalanche games Jan 31 – Feb 8, 2027). Official NHL API by month: [Jan](https://api-web.nhle.com/v1/club-schedule/COL/month/2027-01), [Feb](https://api-web.nhle.com/v1/club-schedule/COL/month/2027-02), [Mar](https://api-web.nhle.com/v1/club-schedule/COL/month/2027-03), [Apr](https://api-web.nhle.com/v1/club-schedule/COL/month/2027-04). So no regular-season 2026–27 Avalanche game sits away from A3 |
| Broncos 2025 | Every home game at Empower | [Wikipedia 2025 Broncos](https://en.wikipedia.org/wiki/2025_Denver_Broncos_season) |
| Broncos 2026 | Weeks 1–6 have no neutral-site game | [ESPN](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/den/schedule?season=2026&seasontype=2). Feed truncated after Week 6 (**gap**) |
| Rockies 2025 | No relocated home game | [Wikipedia 2025 Rockies](https://en.wikipedia.org/wiki/2025_Colorado_Rockies_season) |
| Rapids 2024–2025 | No home match away from DSG Park seen in ESPN data | Venues weren't named on the Wikipedia season pages |
| Mammoth | None found | Weak source coverage |
| CU football 2025 | No neutral-site game | [Wikipedia](https://en.wikipedia.org/wiki/2025_Colorado_Buffaloes_football_team) |

---

## 5. Postseason and past crowds

**Range covered:**
- NFL, MLB and MLS: **2023–2026** seasons.
- NBA and NHL: **2023–24 to 2025–26**.
- NLL: **2023–2026**.
- NWSL: **2026** (inaugural season).
- DU hockey: **2025–26** only.
- CU football: **2025** only.

Postseason and regular season are kept separate. The source label is on each row.

### 5a. Denver Broncos (NFL), A1

**Postseason home games**

| Season | Round | Date | Opponent | Site | Attendance | Source |
|---|---|---|---|---|---|---|
| 2023 | No playoffs | — | — | — | — | [Wikipedia list of seasons](https://en.wikipedia.org/wiki/List_of_Denver_Broncos_seasons) |
| 2024 | Wild Card (away, at Bills; lost 7–31) | — | — | Away | — | [same](https://en.wikipedia.org/wiki/List_of_Denver_Broncos_seasons) |
| 2025 | Divisional (W 33–30 OT) | Jan 17, 2026 | Buffalo Bills | A1 | 77,043 | [ESPN API, event 401772982](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/den/schedule?season=2025&seasontype=3) (secondary) |
| 2025 | AFC Championship (L 7–10) | Jan 25, 2026 | New England Patriots | A1 | 76,862 | [ESPN API, event 401772986](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/den/schedule?season=2025&seasontype=3) (secondary) |

**Regular-season home crowds**

| Season | Home total | Notes | Source |
|---|---|---|---|
| 2023 | 687,498 | — | [Pro-Football-Reference 2023](https://www.pro-football-reference.com/years/2023/attendance.htm) (secondary) |
| 2024 | 515,265 (PFR, as captured in pass 1) | **(2nd pass) PFR figure is incomplete.** 2024 had 8 Broncos home games, all at A1, none neutral. Wikipedia lists 7 of them (Sep 15 Steelers 74,215; Oct 6 Raiders 72,825; Oct 13 Chargers 70,743; Oct 27 Panthers 76,135; Dec 2 Browns 68,306; Dec 15 Colts 76,496; Jan 5 Chiefs 76,489; sum 515,209) and omits the Nov 17 Falcons game ([Wikipedia 2024 Broncos](https://en.wikipedia.org/wiki/2024_Denver_Broncos_season), secondary). ESPN gives Nov 17, 2024 vs Falcons at Empower: **76,545** ([ESPN scoreboard, event 401671748](https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=20241117), secondary). **8-game total: 591,754** (Wikipedia 7 + ESPN 1; both secondary). PFR's 515,265 is 56 above the Wikipedia 7-game sum, an unexplained small conflict | [PFR 2024](https://www.pro-football-reference.com/years/2024/attendance.htm) (secondary) |
| 2025 | 687,500 | Per-game: Sep 7 Titans 73,747; Sep 29 Bengals 75,673; Oct 19 Giants 75,788; Oct 26 Cowboys 75,877; Nov 6 Raiders 74,692 ([Wikipedia](https://en.wikipedia.org/wiki/2025_Denver_Broncos_season)). Later home games weren't listed there | [PFR 2025](https://www.pro-football-reference.com/years/2025/attendance.htm) (secondary) |

### 5b. Denver Nuggets (NBA), A3

**Postseason home games** (all at Ball Arena; source: Wikipedia season pages, secondary)

| Season | Date | Round / game | Opponent | Attendance |
|---|---|---|---|---|
| [2023–24](https://en.wikipedia.org/wiki/2023%E2%80%9324_Denver_Nuggets_season) | Apr 20, 2024 | R1 G1 | LA Lakers | 19,731 |
| 2023–24 | Apr 22, 2024 | R1 G2 | LA Lakers | 19,711 |
| 2023–24 | Apr 29, 2024 | R1 G5 | LA Lakers | 19,861 |
| 2023–24 | May 4, 2024 | R2 G1 | Minnesota | 19,915 |
| 2023–24 | May 6, 2024 | R2 G2 | Minnesota | 19,942 |
| 2023–24 | May 14, 2024 | R2 G5 | Minnesota | 19,992 |
| 2023–24 | May 19, 2024 | R2 G7 | Minnesota | 20,022 |
| [2024–25](https://en.wikipedia.org/wiki/2024%E2%80%9325_Denver_Nuggets_season) | Apr 19, 2025 | R1 G1 | LA Clippers | 19,973 |
| 2024–25 | Apr 21, 2025 | R1 G2 | LA Clippers | 19,989 |
| 2024–25 | Apr 29, 2025 | R1 G5 | LA Clippers | 20,005 |
| 2024–25 | May 3, 2025 | R1 G7 | LA Clippers | 19,995 |
| 2024–25 | May 9, 2025 | R2 G3 | Oklahoma City | 19,993 |
| 2024–25 | May 11, 2025 | R2 G4 | Oklahoma City | 19,995 |
| 2024–25 | May 15, 2025 | R2 G6 | Oklahoma City | 19,998 |
| [2025–26](https://en.wikipedia.org/wiki/2025%E2%80%9326_Denver_Nuggets_season) | Apr 18, 2026 | R1 G1 | Minnesota | 19,796 |
| 2025–26 | Apr 20, 2026 | R1 G2 | Minnesota | 19,692 |
| 2025–26 | Apr 27, 2026 | R1 G5 | Minnesota | 19,907 |

**Regular-season home crowds**

| Season | Home total (rank) | Source | Notes |
|---|---|---|---|
| 2023–24 | 807,062 (6th of 30) | [Basketball-Reference](https://www.basketball-reference.com/teams/DEN/2024.html) (secondary) | — |
| 2024–25 | 811,211 (4th of 30) | [Basketball-Reference](https://www.basketball-reference.com/teams/DEN/2025.html) (secondary) | Wikipedia gives an average of 19,783 ([source](https://en.wikipedia.org/wiki/2024%E2%80%9325_Denver_Nuggets_season)). 19,783 × 41 = 811,103, a small conflict with BR's total |
| 2025–26 | 812,868 (2nd of 30) | [Basketball-Reference](https://www.basketball-reference.com/teams/DEN/2026.html) (secondary) | — |

### 5c. Colorado Avalanche (NHL), A3

**Postseason home games** (all at Ball Arena; source: Wikipedia season pages, secondary)

| Season | Date | Round | Opponent | Attendance |
|---|---|---|---|---|
| [2023–24](https://en.wikipedia.org/wiki/2023%E2%80%9324_Colorado_Avalanche_season) | Apr 26, 2024 | R1 | Winnipeg | 18,124 |
| 2023–24 | Apr 28, 2024 | R1 | Winnipeg | 18,129 |
| 2023–24 | May 11, 2024 | R2 | Dallas | 18,131 |
| 2023–24 | May 13, 2024 | R2 | Dallas | 18,123 |
| 2023–24 | May 17, 2024 | R2 | Dallas | 18,126 |
| [2024–25](https://en.wikipedia.org/wiki/2024%E2%80%9325_Colorado_Avalanche_season) | Apr 23, 2025 | R1 G3 | Dallas | 18,109 |
| 2024–25 | Apr 26, 2025 | R1 G4 | Dallas | 18,129 |
| 2024–25 | May 1, 2025 | R1 G6 | Dallas | 18,099 |
| [2025–26](https://en.wikipedia.org/wiki/2025%E2%80%9326_Colorado_Avalanche_season) | Apr 19, 2026 | R1 | LA Kings | 18,101 |
| 2025–26 | Apr 21, 2026 | R1 | LA Kings | 18,142 |
| 2025–26 | May 3, 2026 | R2 | Minnesota | 18,148 |
| 2025–26 | May 5, 2026 | R2 | Minnesota | 18,154 |
| 2025–26 | May 13, 2026 | R2 | Minnesota | 18,159 |
| 2025–26 | May 20, 2026 | Conf. Final | Vegas | 18,109 |
| 2025–26 | May 22, 2026 | Conf. Final | Vegas | 18,147 |

**Regular-season home crowds**

| Season | Average | Source |
|---|---|---|
| 2023–24 | 18,102 | [Wikipedia](https://en.wikipedia.org/wiki/2023%E2%80%9324_Colorado_Avalanche_season) (secondary) |
| 2024–25 | 18,067 | [Wikipedia](https://en.wikipedia.org/wiki/2024%E2%80%9325_Colorado_Avalanche_season) (secondary) |
| 2025–26 | **gap** | Wikipedia states no average; Hockey-Reference team and league pages have no attendance line; hockeydb fetch errored; ESPN attendance page empty. **(2nd pass) still gap:** the Wikipedia game log is garbled (only ~12 dated home rows readable, 16,406–18,145, several conflicting with the page's own references), so no average can be computed from it ([Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Colorado_Avalanche_season)). Searches "Colorado Avalanche 2025-26 average home attendance Ball Arena sellout streak" and "NHL 2025-26 attendance by team average final regular season" returned only game-video pages |

### 5d. Colorado Rockies (MLB), A2

**Postseason:** none in 2023 (59–103), 2024 (61–101) or 2025 (43–119) ([Wikipedia list of seasons](https://en.wikipedia.org/wiki/List_of_Colorado_Rockies_seasons)). None in 2026 either: they were eliminated from contention on Sep 6, 2026 ([Wikipedia 2026 season](https://en.wikipedia.org/wiki/2026_Colorado_Rockies_season)). The last postseason was 2018 (same list).

**Regular-season home crowds** (official [MLB Stats API attendance](https://statsapi.mlb.com/api/v1/attendance?teamId=115&years=2023,2024,2025,2026))

| Season | Home dates | Total | Average | High (date) | Low (date) |
|---|---|---|---|---|---|
| 2023 | 81 | 2,607,935 | 32,197 | 48,632 (2023-07-15) | 18,511 (2023-04-19) |
| 2024 | 81 | 2,540,195 | 31,360 | 48,750 (2024-09-27) | 18,311 (2024-04-10) |
| 2025 | 81 | 2,404,613 | 30,058 | 48,064 (2025-07-04) | 18,593 (2025-05-08) |
| 2026 | 81 | 2,245,426 | 27,721 | 48,635 (2026-07-04) | 11,155 (2026-05-06) |

### 5e. Colorado Rapids (MLS), A4

**Postseason home games**

| Season | Date | Round | Opponent | Site | Attendance | Source |
|---|---|---|---|---|---|---|
| 2023 | Did not qualify (14th West) | — | — | — | — | [Wikipedia](https://en.wikipedia.org/wiki/2023_Colorado_Rapids_season) |
| 2024 | Nov 1, 2024 (local; feed 2024-11-02T01:30Z) | Round One G2 (L 1–4) | LA Galaxy | A4 | 16,010 | [ESPN API](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams/184/schedule?season=2024) (secondary). G1 was away at Dignity Health Sports Park (24,537) |
| 2025 | Did not qualify | — | — | — | — | [Wikipedia](https://en.wikipedia.org/wiki/2025_Colorado_Rapids_season) |
| 2026 | TBD; 8th West, wild-card spot as of Oct 10, 2026 | — | — | — | — | [Wikipedia](https://en.wikipedia.org/wiki/2026_Colorado_Rapids_season) |

**Regular-season home crowds (league matches)**

| Season | Average | Source / notes |
|---|---|---|
| 2023 | 15,409 | [Wikipedia](https://en.wikipedia.org/wiki/2023_Colorado_Rapids_season) |
| 2024 | 15,336 | [Wikipedia](https://en.wikipedia.org/wiki/2024_Colorado_Rapids_season) |
| 2025 | 15,890 | [Wikipedia](https://en.wikipedia.org/wiki/2025_Colorado_Rapids_season) |
| 2026 | gap (no average stated) | Includes the Apr 18 Empower Field match (75,824), which should be stored against A1, not A4. **(2nd pass, partial season, computed):** the [Wikipedia 2026 Rapids season](https://en.wikipedia.org/wiki/2026_Colorado_Rapids_season) match log (secondary) lists 13 home matches Feb 28 – Sep 19, 2026 with attendance (16,113; 14,568; 15,102; 75,824; 16,028; 17,142; 15,109; 16,922; 15,088; 15,986; 16,094; 15,091; 17,092). Sum 266,159. **Computed** mean of the 12 matches excluding the A1 game: **15,861** (190,335 / 12). The log doesn't name opponents or stadiums, and the Aug 29 row is internally inconsistent; four home matches (Oct 10 – Oct 31) had no attendance listed. Not an official season average |

### 5f. Colorado Mammoth (NLL), A3

**Postseason**

| Season | Result | Home games and attendance | Source |
|---|---|---|---|
| 2023 | Lost NLL Final | **Home/away not determinable.** The bracket text is garbled. Mammoth-linked playoff crowds were May 20, 2023 (8,251), May 27 (14,260), May 29 (10,686) and Jun 3, 2023 Final decider (18,296), but the page doesn't say which were in Denver | [Wikipedia 2023 NLL season](https://en.wikipedia.org/wiki/2023_NLL_season) (secondary) |
| 2024 | Did not qualify | — | [Wikipedia](https://en.wikipedia.org/wiki/Colorado_Mammoth) |
| 2025 | Did not qualify | — | [Wikipedia](https://en.wikipedia.org/wiki/Colorado_Mammoth) |
| 2026 | Lost quarterfinal | Apr 25, 2026: 8,991. Home at A3 is **inferred**, not stated. (2nd pass) Now stated: playoff table lists Colorado home, Ball Arena | [Wikipedia 2026 NLL season](https://en.wikipedia.org/wiki/2026_NLL_season) (secondary) |

**(2nd pass) 2023 playoffs:** the 2023 NLL season page's playoff home-attendance table gives Colorado **2 home playoff games, total 18,869, average 9,435** ([Wikipedia 2023 NLL season](https://en.wikipedia.org/wiki/2023_NLL_season), secondary). Dates of those two home games still not determinable (no pair of the four crowds above sums to 18,869). **(2nd pass) 2026 QF:** the 2026 NLL page's playoff table lists Colorado as home with one game, 8,991, at Ball Arena (A3), so the Apr 25, 2026 home row is now sourced, not inferred ([Wikipedia 2026 NLL season](https://en.wikipedia.org/wiki/2026_NLL_season), secondary).

**Regular-season home crowds (2nd pass; previously gap).** All at Ball Arena (A3).

| Season | Home games | Total | Average | Source |
|---|---|---|---|---|
| 2023 | 9 | 89,099 | 9,900 | Club **official** [About page](https://coloradomammoth.com/about/) attendance table |
| 2023 (conflict) | 9 | 89,748 | 9,972 | [Wikipedia 2023 NLL season](https://en.wikipedia.org/wiki/2023_NLL_season) (secondary). Differs from the club figure; prefer the club's |
| 2024 | 9 | 93,416 | 10,380 | Club [About page](https://coloradomammoth.com/about/) (official); identical in [Wikipedia 2024 NLL season](https://en.wikipedia.org/wiki/2024_NLL_season) |
| 2025 | 9 | 88,870 | 9,874 | [Wikipedia 2025 NLL season](https://en.wikipedia.org/wiki/2025_NLL_season) (secondary). Not on the club page |
| 2026 | 9 | 86,391 | 9,599 | [Wikipedia 2026 NLL season](https://en.wikipedia.org/wiki/2026_NLL_season) (secondary). Not on the club page |

The club page also gives a season-by-season table back to 2003 (e.g. 2003 average 16,488) if older history is wanted.

### 5g. Denver Summit FC (NWSL), A1, A4, A6 (2026 inaugural season)

**Postseason:** none yet. The club was 10th as of Oct 3, 2026, and only 8th place was marked "Playoffs" ([Wikipedia](https://en.wikipedia.org/wiki/2026_Denver_Summit_FC_season)).

**Regular-season home crowds, 2026.** Attendance is from the [Wikipedia season page](https://en.wikipedia.org/wiki/2026_Denver_Summit_FC_season). That page lists every venue as Centennial Stadium, which is **wrong** for the first five matches, so venues come from ESPN (§4).

| Date | Venue (row ID) | Attendance | Venue source |
|---|---|---|---|
| Mar 28 | A1 | 63,004 | ESPN |
| Apr 25 | A4 | 16,932 | ESPN |
| May 16 | A4 | 16,974 | ESPN |
| Jul 3 | A4 | 16,833 | ESPN |
| Jul 12 | A4 | 15,131 | ESPN |
| Jul 18 | A6 | 12,372 | Venue answer |
| Aug 2 | A6 | 12,380 | Venue answer |
| Aug 5 | A6 | 11,008 | Venue answer |
| Aug 8 | A6 | 12,380 | Venue answer |
| Aug 29 | A6 | 12,372 | Venue answer |
| Sep 6 | A6 | 12,372 | Venue answer |
| Sep 16 | A6 | 11,571 | Venue answer |
| Sep 19 | A6 | 12,272 | Venue answer |

Season average: not computed here. Several Centennial crowds equal the reported 12,372 seat count, so they are announced sellouts, not counts.

### 5h. University of Denver Pioneers hockey (NCAA), A10, 2025–26 only

Source: [Wikipedia 2025–26 DU hockey season](https://en.wikipedia.org/wiki/2025%E2%80%9326_Denver_Pioneers_men%27s_ice_hockey_season) (secondary).

**Postseason**

| Date | Round | Opponent | Site as listed | Attendance |
|---|---|---|---|---|
| Mar 6, 2026 | NCHC QF G1 | Miami | A10 | 5,974 |
| Mar 7, 2026 | NCHC QF G2 | Miami | A10 | 6,550 |
| Mar 14, 2026 | NCHC SF | "at #4 Western Michigan" | A10 | 6,327 |
| Mar 21, 2026 | NCHC Championship | "at #6 Minnesota Duluth" | A10 | 6,506 |
| Mar 27 & 29, 2026 | NCAA Regional | Cornell; Western Michigan | Blue Arena, Loveland | not listed |
| Apr 9 & 11, 2026 | Frozen Four | Michigan; Wisconsin | T-Mobile Arena, Las Vegas | not listed |

The page says "at" an opponent for the NCHC semifinal and final but lists Magness Arena as the site. **Verify the site before wiring.**

**Regular-season home crowds at A10:** 17 home games from 5,031 to 7,082 (exhibition Oct 3: 6,044). The Nov 29 game at Ball Arena drew 12,228 (see §4). Earlier seasons: gap. DU basketball: not collected.

### 5i. Colorado Buffaloes football *(edge)*, Folsom Field, 2025 only

Source: [Wikipedia 2025 CU football](https://en.wikipedia.org/wiki/2025_Colorado_Buffaloes_football_team) (secondary). No postseason (3–9).

| Date | Opponent | Attendance |
|---|---|---|
| Aug 29 | Georgia Tech | 52,868 |
| Sep 6 | Delaware | 50,341 |
| Sep 20 | Wyoming | 53,442 |
| Sep 27 | BYU | 52,265 |
| Oct 11 | Iowa State | 52,698 |
| Nov 1 | Arizona | 48,322 |
| Nov 22 | Arizona State | 43,348 |

2023 and 2024: gap.

### 5j. Not covered

Denver Outlaws (PLL host weekend at a ~2,000-seat room), Colorado Rapids 2, PWHL neutral-site games and all other edge teams. Gap: search budget exhausted.

---

## 6. Build-rule notes (for whoever turns this into app data)

- **IDs must be unique across all cities.** `giants`, `jets`, `rangers`, `kings` and `cardinals` are already taken, so add a city prefix. Denver collisions to watch:
  - **`mammoth`.** The NLL Colorado Mammoth and the NHL **Utah Mammoth** (they appear as "Utah (Mammoth)" in the Avalanche's NHL feed) would collide. Use e.g. `den-mammoth`.
  - **`outlaws`** (Denver Outlaws) and **`pioneers`** (DU) are generic and likely to collide; prefix them.
  - **Abbreviation `COL`** is shared by the Avalanche, Rockies, Rapids and Mammoth across leagues, so never key a team on the abbreviation alone.
  - **ESPN team id `7`** is both the Broncos (NFL) and the Nuggets (NBA). Store feed IDs as (league, id) pairs.
- **Venue IDs.** Use A1–A11 from the venue answer. The §2c and §2d rooms (Paramount, Fillmore, Mission, Folsom etc.) have **no row ID** in the venue answer. Assign them in the venue file first, then join this file's rows.
- **No per-city opponents file.** Opponent draws (e.g. Inter Miami at Empower, 75,824) go into `expectedDrawIndex` like every other city.
- **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list. Sold-out crowds that equal a seat count (Centennial 12,372) are not new capacity evidence.
- **Car shares.** Wire measured ones. Wire sourced estimates marked estimated. Leave the rest on the city default. (The city-type answer, which holds these, was not provided to this pass.)
- **Relocated home games (§4)** must be stored with the actual row ID (A1 for the Rapids and Summit at Empower; A4 for Summit spring matches; A3 for DU at Ball Arena; A10 for the Avalanche–Utah preseason), not the team's default home room.
- **(2nd pass) New room without a row ID:** University of Denver Soccer Stadium hosted five Rapids 2 home matches in 2026 ([club](https://www.coloradorapids.com/rapids2/news/colorado-rapids-2-announce-venues-for-remaining-2026-home-matches)). It isn't in the venue answer; capacity not researched, so leave it blank and add a row ID in the venue file first.
- **AXS rooms.** Red Rocks, Fiddler's Green, Bellco, Denver Coliseum, Mission Ballroom and the city theatres have no verified Ticketmaster ID. Under the current rule they ship with no concerts. That is a product decision, not a data fix.

---

## 7. End-of-answer summary

### 7.1 Name, short form, code and covered area

| Field | Value |
|---|---|
| Display name | **Denver** |
| Short form | **Denver** (optional tagline "Mile High") |
| Code | **DEN** |
| Covered area | Denver–Aurora–Centennial MSA (10 counties: Denver, Arapahoe, Jefferson, Adams, Douglas, Broomfield, Elbert, Park, Clear Creek, Gilpin). Boulder is an optional edge tier, off by default. Fort Collins/Loveland, Colorado Springs and Greeley are out. Sources in §1 |

### 7.2 Ticketmaster venue IDs

| Venue row ID | Room | Ticketmaster venue ID | Verification link |
|---|---|---|---|
| A1 | Empower Field at Mile High | 246376 | [ticketmaster.com/…/venue/246376](https://www.ticketmaster.com/empower-field-at-mile-high-boletos-denver/venue/246376) |
| A2 | Coors Field | 246126 | [Ticketmaster blog link to venue/246126](https://blog.ticketmaster.com/step-inside-coors-field-denver-co) |
| A3 | Ball Arena | 246112 | [ticketmaster.com/venue/246112](https://www.ticketmaster.com/venue/246112?page=2) |
| A4 | Dick's Sporting Goods Park | 246830 | [ticketmaster.com/…/venue/246830](https://ticketmaster.com/dicks-sporting-goods-park-boletos-commerce-city/venue/246830) |
| A5 | Fiddler's Green Amphitheatre | — | not verified (AXS) |
| A6 | Centennial Stadium | — | not verified (club ticketing) |
| A7 | Denver Coliseum | — | not verified (AXS) |
| A8 | Red Rocks Amphitheatre | — | not verified (AXS) |
| A9 | Levitt Pavilion Denver | — | not verified (Ticketmaster named as seller in a 2019 report; no TM venue page found; 2nd pass) |
| A10 | Magness Arena | — | not verified (Live Nation ID KovZpZAFa7lA seen) |
| A11 | Bellco Theatre | — | not verified (AXS) |
| no row ID (§2c) | Paramount Theatre | 245776 | [ticketmaster.com/…/venue/245776](https://www.ticketmaster.com/paramount-theatre-boletos-denver/venue/245776) |
| no row ID (§2c) | Fillmore Auditorium | — | not verified (Live Nation ID KovZpZAE6eJA seen) |
| no row ID (§2c) | Mission Ballroom, Ogden, Gothic, Buell, Ellie Caulkins, Boettcher | — | not verified. (2nd pass) Ogden = AXS venue 101141; Boettcher = Colorado Symphony box office or AXS (venue 124737); no TM ID expected for either |
| no row ID (§2d) | Edge rooms | — | not verified |

### 7.3 Teams

Colors are ESPN API values, labeled **secondary**, except DU and CU, which now come from official university brand pages (2nd pass; see §3 color notes).

| Team | League | Home venue row ID | Free feed and ID | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| Broncos | NFL | A1 | ESPN NFL 7 | #0A2343 | #FC4C02 | ESPN API (secondary) |
| Nuggets | NBA | A3 | ESPN NBA 7 | #0E2240 | #FEC524 | ESPN API (secondary) |
| Avalanche | NHL | A3 | NHL API COL; ESPN NHL 17 | #860038 | #005EA3 | ESPN API (secondary) |
| Rockies | MLB | A2 | MLB Stats API 115; ESPN MLB 27 | #33006F | #000000 | ESPN API (secondary) |
| Rapids | MLS | A4 | ESPN usa.1 184 | #8A2432 | #8AB7E9 | ESPN API (secondary) |
| Mammoth | NLL | A3 | ESPN nll 125422 | #8A2432 | #A3AAAE | ESPN API (secondary; conflicts with Wikipedia "Burgundy and Black") |
| Summit FC | NWSL | A6 (A1, A4 in 2026) | ESPN usa.nwsl 131563 | #20604E | #E4B83E | ESPN API (secondary); club says "green and white" only, so the gold conflicts (2nd pass) |
| DU Pioneers | NCAA | A10 | ESPN NCAA 2172 | #BA0C2F | #A89968 | Official DU brand page (2nd pass) |
| CU Buffaloes (edge) | NCAA | no row ID (§2d) | ESPN CFB 38 | #CFB87C | #000000 | Official CU brand page (2nd pass); matches ESPN |
| Denver Outlaws | PLL | no row ID (§2c) | ESPN pll 122896 | #FF4D00 | #B3B3B3 | ESPN API (secondary) |
| Rapids 2 | MLS Next Pro | A4 + DU Soccer Stadium (no row ID) | no feed (2nd pass; club page only) | gap | gap | — |
| Colorado Eagles (edge) | AHL | no row ID (§2d) | no feed ID confirmed (2nd pass; club and theahl.com schedule pages only) | gap | gap | — |

### 7.4 Games away from the home venue

See §4. The short list:
- **Summit FC:** Mar 28, 2026 at A1. Apr 25, May 16, Jul 3 and Jul 12, 2026 at A4.
- **Rapids:** Apr 18, 2026 at A1.
- **DU hockey:** Nov 29, 2025 at A3.
- **Avalanche–Utah preseason:** Sep 21, 2025 at A10.
- **Nuggets preseason:** Oct 4, 2025 in San Diego.
- **Broncos:** Oct 12, 2025 in London (Jets home).
- **Rockies:** Jun 14, 2026 in Las Vegas (Athletics home).
- **Rapids 2 (2nd pass):** Apr 19, May 3, Jun 6, Jun 27 and Sep 20, 2026 at University of Denver Soccer Stadium (no row ID); Jul 11, 2026 venue TBD.
- **Avalanche 2026–27 (2nd pass):** Jan–Apr 2027 checked in the NHL API; no game away from A3.
- **DU NCAA tournament:** Loveland (regionals) and Las Vegas (Frozen Four), Mar–Apr 2026.

### 7.5 Postseason and past-crowd tables

See §5a–5i. The main gaps:
- Avalanche 2025–26 regular-season average (**still gap** after 2nd pass).
- ~~Mammoth regular-season crowds~~ **filled (2nd pass)**: 2023–2026 averages 9,900 / 10,380 / 9,874 / 9,599. 2023 playoffs: 2 home games totalling 18,869 (dates still unknown).
- ~~Broncos 2024 total~~ **resolved (2nd pass)**: 8 home games, 591,754 (Wikipedia 7 + ESPN Falcons game; secondary). PFR's 515,265 omits a game.
- Rapids 2026 average: **partial (2nd pass)**, computed 15,861 over 12 A4 matches to Sep 19 (secondary, not official).
- CU 2023–24.
- DU before 2025–26.
- Every Rapids 2, Eagles, Outlaws and other edge-team crowd record.
