# San Antonio — follow-up on city-build gaps (name/code, Ticketmaster IDs, free feeds, off-site games, crowd history, colors)

**Answer date:** Tuesday, October 13, 2026; **second pass Oct 14, 2026** (gap cells only; earlier sourced cells were not re-verified). Prepared in America/Los_Angeles; all game dates below are local Central Time. Research only — this does not approve a city build.

**Inputs used:** the brief ([san-antonio-gaps-followup-prompt.md](san-antonio-gaps-followup-prompt.md)) and the venue answer ([san-antonio-venue-table-answer.md](san-antonio-venue-table-answer.md)), whose row IDs (A1–A23, P1–P6, B1–B13) are used in every table here.

> **Note:** The brief also points to a **city-type answer** (`san-antonio-city-type-answer.md`). That file was **not provided** for this pass, so nothing here checks against it, and the city-type work (fan mode splits, car shares) was not redone.

**Labels:** **O** = official (team, league, venue, ticketer, government). **R** = reported/secondary (news, Wikipedia, directories). Every fact links to the page it came from. **gap** = no public source found in this pass; the searches tried are listed.

### How this pass was limited (read first)

- The shared **web-search budget ran out after 9 searches** in this pass. The rest of the work used direct fetches of pages already found (venue sites, Ticketmaster's blog, Wikipedia season pages, news).
- Partway through, the fetch proxy began returning **HTTP 429 (rate limited)**. The pages it refused are listed in §7 and were **not retried or reached by any other route**.
- Most of the gaps below come from these two limits, not from confirmed absence of data. A short follow-up pass (more searches allowed) should close many of them; §8 lists what to search.
- **Second pass (Oct 14, 2026):** filled gap cells only, using about 30 web searches plus direct fetches of free feeds (ESPN site API, MLB Stats API), brand pages and season pages. The search limit was **not** hit. Cells filled in this pass say "second pass"; earlier sourced cells were not re-verified.

---

## 1. Name, short form, code and covered area

| Item | Finding | Source / status |
|---|---|---|
| **Display name** | **San Antonio** | Every current pro team in the venue answer uses "San Antonio" as its place name: San Antonio Spurs ([O, Ticketmaster team page](https://www.ticketmaster.ca/san-antonio-spurs-billets/artist/806012?page=1)), San Antonio FC ([R](https://en.wikipedia.org/wiki/2026_San_Antonio_FC_season)), San Antonio Missions ([R, KENS 5](https://www.kens5.com/article/news/local/san-antonio-missions-baseball-stadium-design-firm/273-27067cb1-eb8f-4847-b907-f33f23344e7f)). No regional brand (a "Tampa Bay"-style name such as "Alamo City" or "South Texas") was found as a team name — but only these team pages were checked, so treat "no regional name in use" as **not fully verified**. |
| **Short form** | **SA** (lead) | Used in local media names, e.g. *SA Current* ([sacurrent.com](https://www.sacurrent.com/news/san-antonio-news/opening-of-san-antonio-missions-downtown-baseball-park-pushed-back-by-a-year/)). Second pass: the free feeds abbreviate both the Spurs and the Missions as **SA** ([O, ESPN](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/sa); [O, MLB Stats API](https://statsapi.mlb.com/api/v1/teams?sportId=12)), which supports SA as the short form. |
| **Three-letter code** | **SAT** (brief's lead — confirmed second pass) | **Verified (second pass):** the airport's own brand standards (City of San Antonio airport marketing division) call **SAT** "the airport identifier" and the anchor of the San Antonio International Airport logo, said letter by letter as "S-A-T" ([O, flysanantonio.com brand standards PDF](https://flysanantonio.com/wp-content/uploads/2024/03/SAT-BRAND-STANDARDS.pdf)). Team feeds use **SA**, not SAT: ESPN abbreviates the Spurs `SA` ([O, ESPN feed](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/sa)) and the MLB Stats API abbreviates the Missions `SA` ([O](https://statsapi.mlb.com/api/v1/teams?sportId=12)); SAFC is `SAFC` ([O, ESPN feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)). No conflicting three-letter code found; keep **SAT**. |
| **Statistical area** | San Antonio–New Braunfels MSA: Atascosa, Bandera, **Bexar**, **Comal**, Guadalupe, Kendall, Medina, Wilson counties | [O, BLS](https://www.bls.gov/regions/southwest/data/employmentandunemploymentandwages_sanantonio_table.htm) |
| **Covered area (recommended)** | **Bexar County** (San Antonio, Helotes and the other Bexar cities) **plus Selma** (I-35 north) **plus Comal County venues — New Braunfels is IN** (Whitewater Amphitheater, Canyon Lake; Wurstfest grounds, Landa Park) | Carried from the venue answer §1 (Whitewater: [O](https://www.whitewaterrocks.com/venue-info/); Real Life Amphitheater, Selma: [R](https://en.wikipedia.org/wiki/Real_Life_Amphitheater)). New Braunfels is named in the MSA title itself ([O, BLS](https://www.bls.gov/regions/southwest/data/employmentandunemploymentandwages_sanantonio_table.htm)). |
| **Searched, no rows** | Guadalupe (Seguin), Kendall (Boerne) | From the venue answer; no 1,000+ rooms found there. |
| **Not covered** | Hays County / San Marcos and Austin (Moody Center) — **leave to Austin** | Hays is in the Austin MSA ([O, City of Austin map](https://www.austintexas.gov/sites/default/files/files/Planning/Demographics/Austin_SA_MSA_2017.pdf)). Spurs games at Moody Center go to Austin's room (see §4). |

**Tampa Bay comparison:** unlike Tampa Bay, nothing found suggests San Antonio needs a regional display name — every team found says "San Antonio," and the code stays SAT. The one shared-edge risk is **New Braunfels / Canyon Lake (Comal)**, which is marketed as between Austin and San Antonio ([R](https://savingcountrymusic.com/beloved-whitewater-amphitheater-files-for-chapter-11-sale-pending/)). Assign Comal rooms to San Antonio only, so Austin does not list them too. A further candidate room found this pass, **Gruene Hall (New Braunfels)**, is in §2.

---

## 2. Ticketmaster venue IDs for every room in the venue answer

**Method:** an ID counts as **verified** only when a `ticketmaster.com/.../venue/NNNNNN` URL was seen in a search result or a fetched page, either on Ticketmaster's own site or blog, or linked from the venue's own site. No Discovery API key was used. A room whose own site shows a different ticketer is marked so: it may still have a Ticketmaster venue page for resale or other events, but none was found.

**Shipping rule (from the brief):** a room with no ID ships with **no concerts**. That currently means 17 of 23 rows (18 before the second pass).

| Venue row ID | Room | Ticketmaster venue ID | Verification link (or "not verified") | Notes |
|---|---|---|---|---|
| A1 | Alamodome | **475247** | Verified: linked as "AlamoDome" from Ticketmaster's own blog, [blog.ticketmaster.com — Step Inside: Frost Bank Center](https://blog.ticketmaster.com/step-inside-frost-bank-center-san-antonio-tx/) → `https://www.ticketmaster.com/alamodome-tickets-san-antonio/venue/475247` | A direct fetch of the Ticketmaster venue page returned a client error, so the page itself was not read. Ticketmaster is the city's contracted ticketer for the Alamodome (Sept 19, 2019 council vote) ([R, San Antonio Report](https://sanantonioreport.org/san-antonio-city-council-awards-contract-to-ticketmaster-over-tobin-center/)). The Alamodome's own box-office page links to Ticketmaster events but no venue URL ([O](https://www.alamodome.com/events/tickets-box-office)). Child room A23 and Lots B/C may list under the same ID; match by event name. |
| A2 | Frost Bank Center | **475590** | Verified: [ticketmaster.com/frost-bank-center-billets-san-antonio/venue/475590](https://www.ticketmaster.com/frost-bank-center-billets-san-antonio/venue/475590) (fetched; page shows Frost Bank Center, 1 Frost Bank Center Dr, San Antonio 78219). Also linked from the [Ticketmaster blog](https://blog.ticketmaster.com/step-inside-frost-bank-center-san-antonio-tx/) | Older slug `att-center-tickets-san-antonio/venue/475590` resolves to the same ID ([Ticketmaster blog, SA concert venues](https://blog.ticketmaster.com/concert-venues-san-antonio/)) — the ID survived the 2023 rename. **Parking add-ons** sit on the same ID (`/venue/475590?tab=addOns&addOnType=PARKING`), so filter them out. |
| A3 | Freeman Coliseum | **475253** | Verified: linked from the venue's own box-office page, [freemancoliseum.com/ticket-box-office](https://freemancoliseum.com/ticket-box-office/), and from the [Ticketmaster blog](https://blog.ticketmaster.com/concert-venues-san-antonio/) → `https://www.ticketmaster.com/freeman-coliseum-tickets-san-antonio/venue/475253` | Separate ID from A2 even though the grounds are shared. |
| A4 | Real Life Amphitheater | — | **not verified** | Second-pass search found only Wikipedia, news and resale pages (e.g., [Gametime](https://gametime.co/real-life-amphitheater-tickets/venues/real_life_amphitheater)), no Ticketmaster venue URL. 2022 tickets went through the Tobin Center (venue answer). |
| A5 | Retama Park | — | **not verified** | Racing uses the track's own ticketing (venue answer). Not a regular concert room. |
| A6 | Nelson W. Wolff Municipal Stadium | — | **not verified** (second pass) | Ticketmaster sells Missions games at "Nelson Wolff Stadium" under **artist** ID 806707 ([O, Ticketmaster](https://www.ticketmaster.com/San-Antonio-Missions-tickets/artist/806707)), but the fetched page showed no `/venue/NNNNNN` URL. The club also sells at its own box office ([O, MiLB](https://media.milb.com/san-antonio/ballpark/wolff-stadium/a-z-guide)). MLB Stats API venue ID is 2818 (§3) — a feed ID, not a Ticketmaster ID. |
| A7 | Toyota Field | **476060** | Verified (second pass): [ticketmaster.com/toyota-field-tickets-san-antonio/venue/476060](https://www.ticketmaster.com/toyota-field-tickets-san-antonio/venue/476060) (fetched; page shows Toyota Field, 5106 David Edwards Drive, San Antonio, TX 78233) | AXS also has a Toyota Field venue page ([AXS](https://axs.com/venues/129479/toyota-field-san-antonio-tickets)) — some events may sell there instead. |
| A8 | Gayle and Tom Benson Stadium | — (uses **UIW's own ticket site**) | **not verified** — UIW football single-game tickets link to tickets.uiwcardinals.com, with no Ticketmaster link ([O, UIW Athletics, July 13, 2026](https://uiwcardinals.com/news/2026/7/13/single-game-tickets-now-available-for-2026-uiw-football-season.aspx)) | College football; concerts not documented. |
| A9 | Cowboys Dancehall | — | **not verified** | Venue site lists the San Antonio club at **3030 NE Loop 410 @ I-35, San Antonio, TX 78218** ([O](https://cowboysdancehall.com/)). Neither its home page nor its San Antonio page names a ticketer or links to Ticketmaster ([O](https://cowboysdancehall.com/san-antonio/)). Second-pass search found resale pages only (e.g., [StubHub](https://stubhub.com/cowboys-dancehall-san-antonio-tickets/venue/78582)). |
| A10 | Whitewater Amphitheater | — (uses **Tixr**) | **not verified** — venue's own ticketing page says tickets are sold only through the Whitewater site or Tixr ([O](https://www.whitewaterrocks.com/ticketing-info)) | No Ticketmaster link on the venue-info or ticketing pages ([O](https://www.whitewaterrocks.com/venue-info/)). Needs a non-Ticketmaster source to get concerts. |
| A11 | R&J Music Pavilion | — | **not verified** | Second-pass search (with Retama Park) found no Ticketmaster venue URL; status unverified (venue answer). |
| A12 | Sunken Garden Theater | — | **not verified** | City parks page names no ticketer, only a reservations line, and confirms the **4,800** maximum capacity ([O, sa.gov](https://www.sa.gov/Directory/Departments/Parks/Parks-Facilities/Buildings-Centers/Sunken-Garden-Theater)). Shows are promoter-ticketed; no venue page found (second-pass search found Songkick/resale listings only). |
| A13 | UTSA Convocation Center | — | **not verified** (second pass) | UTSA athletics sells through **Ticketmaster Account Manager** (`am.ticketmaster.com/utxsanant`) ([O, UTSA Athletics, June 23, 2026](https://goutsa.com/news/2026/06/23/2026-utsa-volleyball-single-game-tickets-on-sale-now)) — a team account, not a venue page. No `/venue/NNNNNN` URL found in search. |
| A14 | Floore's Country Store (outdoor stage) | — (uses **Prekindle**) | **not verified** — every "Buy Tickets" link on the venue site goes to prekindle.com ([O, liveatfloores.com](https://www.liveatfloores.com/)) | Same ticketer for the indoor room (800, hand-log only). |
| A15 | The Espee | **476296** | Verified: linked from the [Ticketmaster blog, SA concert venues](https://blog.ticketmaster.com/concert-venues-san-antonio/) → `https://www.ticketmaster.com/the-espee-tickets-san-antonio/venue/476296` | Also hosts the Alamo Bowl Fan Zone (B10); that is not a ticketed concert. |
| A16 | Boeing Center at Tech Port | — (uses **Etix**) | **not verified** — venue site's "Buy Tickets" links all point to etix.com, with no Ticketmaster link ([O, boeingcentertechport.com](https://boeingcentertechport.com/)) | Ticketmaster ID **not expected**; needs a non-Ticketmaster source. |
| A17 | Laurie Auditorium (Trinity) | — | **not verified** (second pass) | Trinity's venue page names no ticketer; it gives only a phone contact for ticket information ([O, trinity.edu](https://trinity.edu/laurie-auditorium)). Search found resale listings only. |
| A18 | Lila Cockrell Theatre | — | **not verified** (second pass) | Ticketmaster is the city's contracted provider ([R, San Antonio Report, Sept 19, 2019](https://sanantonioreport.org/san-antonio-city-council-awards-contract-to-ticketmaster-over-tobin-center/)), and Live Nation's venue page (Discovery-style ID `KovZpZAE6kFA`, 200 E. Market) links to a Ticketmaster **event** for Dec 5, 2026 ([O, Live Nation](https://www.livenation.com/venue/KovZpZAE6kFA/lila-cockrell-theatre-events)) — but no numeric `/venue/NNNNNN` URL was found. `KovZpZAE6kFA` may work as a Discovery API venue key; untested. |
| A19 | Majestic Theatre | — (uses **ATG Tickets**) | **not verified** | ATG Tickets is the venue's channel ([O, ATG](https://us.atgtickets.com/venues/majestic-theatre/join-us/)); no Ticketmaster venue page found. |
| A20 | H-E-B Performance Hall, Tobin Center | — (uses **Tobin's own system**) | **not verified** — the Tobin Center's "Buy Tickets" links go to its own system at tobi.tobincenter.org, with no Ticketmaster link ([O, tobincenter.org](https://www.tobincenter.org/)) | The 2019 city contract went to Ticketmaster over the Tobin Center's ticketing arm ([R](https://sanantonioreport.org/san-antonio-city-council-awards-contract-to-ticketmaster-over-tobin-center/)); the Tobin itself stays on its own system. |
| A21 | McDermott Convocation Center (UIW) | — | **not verified** | Not searched. |
| A22 | Aztec Theatre | **476096** | Verified: linked from the [Ticketmaster blog, SA concert venues](https://blog.ticketmaster.com/concert-venues-san-antonio/) → `https://www.ticketmaster.com/aztec-theatre-tickets-san-antonio/venue/476096` | Live Nation-operated (venue answer). Note: `aztectheater.com` is a **different venue in Albany** ([fetched page](https://www.aztectheater.com/)); don't use it for A22. |
| A23 | Illusions Theater (inside Alamodome) | — | **not verified** | May list under A1's ID 475247; unconfirmed. |

**Counts (after second pass):** **6 verified** (A1, A2, A3, A7, A15, A22) and **17 not verified**. Of the 17, **6 sell mainly through another channel** (A8 UIW's own site, A10 Tixr, A14 Prekindle, A16 Etix, A19 ATG Tickets, A20 Tobin); **3 sell on Ticketmaster without a venue page found** (A6 via artist 806707, A13 via Account Manager, A18 via event links); and **8 remain unresolved** (A4, A5, A9, A11, A12, A17, A21, A23). Second-pass searches for A4, A5/A11, A9 and A12 found only resale listings (StubHub, SeatGeek, Vivid Seats, Gametime), no Ticketmaster venue URL.

**Candidate room missed by the venue answer:** **Gruene Hall, New Braunfels** has Ticketmaster venue ID **476101**, linked from the [Ticketmaster blog](https://blog.ticketmaster.com/concert-venues-san-antonio/) (`https://www.ticketmaster.com/gruene-hall-tickets-new-braunfels/venue/476101`). It is in Comal County, inside the recommended scope. Its capacity was **not found (gap)**, so don't add it as a row until a capacity source exists; if it is under 1,000 it is hand-log only.

---
## 3. Free schedule feeds per team, and team colors

**Method and outcome (second pass, Oct 14, 2026):** every feed ID below was read directly from the free feed's own JSON response — ESPN's public site API for NBA, college and USL teams, and the MLB Stats API (Double-A is `sportId=12`) for the Missions. All seven teams/programs now have a verified free feed. (First pass: both feed fetches were rate-limited, see §7.)

| Team | Feed | Team ID (as returned) | Feed link | Notes |
|---|---|---|---|---|
| San Antonio Spurs | ESPN site API, NBA | **24** (abbr. `SA`, uid `s:40~l:46~t:24`) | [site.api.espn.com/…/basketball/nba/teams/sa](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/sa); schedule page [espn.com/nba/team/schedule/_/name/sa](https://www.espn.com/nba/team/schedule/_/name/sa) | — |
| San Antonio FC | ESPN site API, league code `usa.usl.1` (USL Championship) | **18265** (abbr. `SAFC`) | [site.api.espn.com/…/soccer/usa.usl.1/teams](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams); fixtures [espn.com/soccer/team/fixtures/_/id/18265](https://www.espn.com/soccer/team/fixtures/_/id/18265/san-antonio-fc) | — |
| San Antonio Missions | MLB Stats API, `sportId=12` (Double-A), Texas League (league id 109) | **510** (abbr. `SA`, teamCode `san`); venue id **2818** "Nelson Wolff Stadium"; parent org San Diego Padres | [statsapi.mlb.com/api/v1/teams?sportId=12](https://statsapi.mlb.com/api/v1/teams?sportId=12) | Venue id 2818 is the feed's ID for row A6 |
| UTSA football | ESPN site API, college-football | **2636** (abbr. `UTSA`; conference group id 151) | [site.api.espn.com/…/college-football/teams/utsa](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/utsa); [schedule](https://www.espn.com/college-football/team/schedule/_/id/2636) | — |
| UTSA basketball (M) | ESPN site API, mens-college-basketball | **2636** (same school ID) | [site.api.espn.com/…/mens-college-basketball/teams/2636](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2636); [schedule](https://www.espn.com/mens-college-basketball/team/schedule/_/id/2636) | Women's basketball and volleyball endpoints not fetched; ESPN reuses the school ID across sports, but **not verified** for those two |
| UIW football | ESPN site API, college-football | **2916** (abbr. `UIW`; conference group id 30) | [site.api.espn.com/…/college-football/teams/2916](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2916); [schedule](https://www.espn.com/college-football/team/schedule/_/id/2916) | The slug `…/teams/iw` returned an empty object; use the numeric ID |
| UIW basketball (M) | ESPN site API, mens-college-basketball | **2916** | [site.api.espn.com/…/mens-college-basketball/teams/2916](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2916); [schedule](https://www.espn.com/mens-college-basketball/team/schedule/_/id/2916) | Women's basketball and volleyball: **not verified** |

No team or feed ID has been filled in by memory.

**Colors (second pass):** official university brand pages give UTSA and UIW colors (UIW as official RGB, converted to hex). No official Spurs or SAFC hex page was found, so their values come from ESPN's feed and are labeled **secondary**. The Missions have no hex source (gap). No hex code has been filled in by memory.

The "Team" column covers every team in the venue answer §3. **Missed-team check:** no indoor football, arena soccer, hockey or women's pro club with a San Antonio home venue was found in the venue answer, and this pass could not search further. That makes "no other teams" **unconfirmed (gap)**.

| Team | League | Home venue row ID | Free feed and ID (or "no feed") | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| San Antonio Spurs | NBA ([R](https://en.wikipedia.org/wiki/Frost_Bank_Center)) | A2 (off-site games in §4) | **ESPN NBA, ID 24** ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/sa)). (Ticketmaster artist ID 806012 is a ticketing ID, not a free schedule feed: [O](https://www.ticketmaster.ca/san-antonio-spurs-billets/artist/806012?page=1).) | `#000000` (black) | `#C4CED4` (silver) | **secondary** — ESPN feed `color`/`alternateColor` ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/sa)); same values on [teamcolorcodes.com](https://teamcolorcodes.com/san-antonio-spurs-color-codes/) (unaffiliated). No official Spurs/NBA hex page found |
| San Antonio FC | USL Championship ([R](https://en.wikipedia.org/wiki/2026_San_Antonio_FC_season)) | A7 | **ESPN `usa.usl.1`, ID 18265** ([feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)) | `#878787` (gray) | `#000000` (black) | **secondary** — ESPN feed ([feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)). The USL's 2016 crest-reveal article names no colors ([O](https://www.uslchampionship.com/news_article/show/610111-san-antonio-fc-reveals-crest-colors)); no club brand page found |
| San Antonio Missions | Double-A Texas League, Padres affiliate ([R](https://www.kens5.com/article/news/local/san-antonio-missions-baseball-stadium-design-firm/273-27067cb1-eb8f-4847-b907-f33f23344e7f)) | A6 (then P2 from the 2029 season) | **MLB Stats API, sportId 12, team ID 510** (venue ID 2818) ([feed](https://statsapi.mlb.com/api/v1/teams?sportId=12)) | gap | gap | gap for hex. Named colors only: navy blue, gold, red, white on the 2021–present primary logo ([R, sportslogos.net](https://sportslogos.net/logos/view/689868472021)). MLB Stats API carries no colors; ESPN doesn't cover MiLB; no official Missions brand page found |
| UTSA Roadrunners football | FBS, American Athletic Conference ([R](https://ksat.com/sports/2024/02/28/ut-system-approves-funding-plan-for-proposed-utsa-basketball-volleyball-training-facility)) | A1 (UTSA setup, about 34,984 — not full stadium) | **ESPN college-football, ID 2636** ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/utsa)) | `#F15A22` (UT San Antonio Orange) | `#032044` (Midnight) | **official** — university brand guidelines list both as primary colors ([O, UTSA MarCom](https://www.utsa.edu/marcomstudio/resources/style-guides/brand-guidelines/color.html)). ESPN uses `#0C2340` navy / `#F15A22` ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/utsa)) — navy differs slightly; an athletics-specific guide was not found |
| UTSA basketball (M/W) and volleyball | AAC | A13 | **ESPN mens-college-basketball, ID 2636** ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2636)); women's/volleyball not verified | `#F15A22` | `#032044` | **official** — same school palette ([O](https://www.utsa.edu/marcomstudio/resources/style-guides/brand-guidelines/color.html)) |
| UIW Cardinals football | FCS, Southland ([R](https://en.wikipedia.org/wiki/Incarnate_Word_Cardinals_football)) | A8 | **ESPN college-football, ID 2916** ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2916)) | `#CB333B` (Red, PMS 1797 C) | `#000000` (Black) | **official RGB, hex converted** — UIW artsheet prints Red as RGB 203, 51, 59 and Black as RGB 0, 0, 0 (no hex printed); hex here is the direct conversion ([O, UIW artsheet PDF](https://www.uiw.edu/marcom/_docs/uiw-artsheet-120523.pdf); colors also named on [O, UIW logo colors](https://my.uiw.edu/styleguide/graphic-standards/logo-colors.html)). ESPN's `#000000`/`#080808` ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2916)) is not usable as a two-color pair |
| UIW basketball and volleyball | Southland | A21 | **ESPN mens-college-basketball, ID 2916** ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2916)); women's/volleyball not verified | `#CB333B` | `#000000` | **official RGB, hex converted** ([O](https://www.uiw.edu/marcom/_docs/uiw-artsheet-120523.pdf)) |
| Valero Alamo Bowl (annual event, not a team) | FBS bowl ([O](https://www.alamobowl.com/?p=42551)) | A1 | Covered as a neutral-site college game in ESPN college football — **not verified**; teams change yearly, so no colors apply | n/a | n/a | n/a |
| San Antonio Stock Show & Rodeo (event) | PRCA/WPRA ([R](https://foxsanantonio.com/newsletter-daily/2026-san-antonio-stock-show-rodeo-live-music-entertainment-food-drinks-and-more)) | A2 + Freeman grounds (B1) | **no feed** found (ticketing only: Ticketmaster artist 804262, linked from the [Ticketmaster blog](https://blog.ticketmaster.com/step-inside-frost-bank-center-san-antonio-tx/)) | n/a | n/a | n/a |
| Retama Park racing | Pari-mutuel ([O](https://www2.retamapark.com/racing-news/7-21-26-press-release-retama-doubleheader)) | A5 | **no feed** found | n/a | n/a | n/a |
| San Antonio Brahmas (former) | UFL, left before 2026 ([R](https://sanantonioreport.org/?p=5417240)) | A1 (historical) | n/a — inactive | n/a | n/a | n/a |

**Teams with no confirmed free feed (second pass):** none among the seven teams/programs — all have a verified ESPN or MLB Stats API ID. Only the UTSA/UIW **women's basketball and volleyball** endpoints remain unchecked. **Events with no feed:** Stock Show & Rodeo and Retama racing.

---

## 4. Games away from the home venue (2025 on, plus 2024 for context)

Assign each game below to the **actual site**, never the home venue. Moody Center is Austin's room: use Austin's venue ID.

### 4.1 San Antonio Spurs (home venue A2, Frost Bank Center)

| Season | Date | Game (designated home team) | Actual site | Announced attendance | Source |
|---|---|---|---|---|---|
| 2023–24 (context) | Mar 15, 2024 | Spurs vs Denver (Spurs home) | Moody Center, Austin | 16,223 | [R, Wikipedia season page](https://en.wikipedia.org/wiki/2023%E2%80%9324_San_Antonio_Spurs_season) |
| 2023–24 (context) | Mar 17, 2024 | Spurs vs Brooklyn (Spurs home) | Moody Center, Austin | 16,057 | [R](https://en.wikipedia.org/wiki/2023%E2%80%9324_San_Antonio_Spurs_season) |
| 2024–25 | Jan 23, 2025 | Spurs @ Indiana (Pacers home) | Accor Arena (international game; the season page names the arena, not the city) | 15,935 | [R](https://en.wikipedia.org/wiki/2024%E2%80%9325_San_Antonio_Spurs_season) |
| 2024–25 | Jan 25, 2025 | Spurs vs Indiana (**Spurs home**) | Accor Arena | 15,979 | [R](https://en.wikipedia.org/wiki/2024%E2%80%9325_San_Antonio_Spurs_season) |
| 2024–25 | Feb 20, 2025 | Spurs vs Phoenix (Spurs home) | Moody Center, Austin | 16,246 | [R](https://en.wikipedia.org/wiki/2024%E2%80%9325_San_Antonio_Spurs_season) |
| 2024–25 | Feb 21, 2025 | Spurs vs Detroit (Spurs home) | Moody Center, Austin | 16,143 | [R](https://en.wikipedia.org/wiki/2024%E2%80%9325_San_Antonio_Spurs_season) |
| 2025–26 | Dec 13, 2025 | Spurs vs Oklahoma City (NBA Cup; listed as a road/neutral game) | T-Mobile Arena, Las Vegas | not captured | [R](https://en.wikipedia.org/wiki/2025%E2%80%9326_San_Antonio_Spurs_season) |
| 2025–26 | Dec 16, 2025 | Spurs vs New York (NBA Cup; listed as a road/neutral game) | T-Mobile Arena, Las Vegas | not captured | [R](https://en.wikipedia.org/wiki/2025%E2%80%9326_San_Antonio_Spurs_season) |
| 2025–26 | Feb 19, 2026 | Spurs vs Phoenix (Spurs home) | Moody Center, Austin | 16,258 | [R](https://en.wikipedia.org/wiki/2025%E2%80%9326_San_Antonio_Spurs_season); listing [O, Ticketmaster](https://www.ticketmaster.ca/san-antonio-spurs-billets/artist/806012?page=1) |
| 2025–26 | Feb 21, 2026 | Spurs vs Sacramento (Spurs home) | Moody Center, Austin | 16,168 | [R](https://en.wikipedia.org/wiki/2025%E2%80%9326_San_Antonio_Spurs_season); listing [O, Ticketmaster](https://www.ticketmaster.ca/san-antonio-spurs-billets/artist/806012?page=1) |
| 2026–27 | **Oct 23, 2026** | Spurs vs Houston (Spurs home; F1 weekend) | Moody Center, Austin | (upcoming) | [R, Tribeza, Aug 19, 2026](https://tribeza.com/culture/san-antonio-spurs-austin-series-moody-center/) |
| 2026–27 | **Feb 26, 2027** | Spurs vs Memphis (Spurs home; Rodeo Road Trip) | Moody Center, Austin | (upcoming) | [R, Tribeza](https://tribeza.com/culture/san-antonio-spurs-austin-series-moody-center/) |
| 2026–27 | **Feb 28, 2027** | Spurs vs Denver (Spurs home; Rodeo Road Trip) | Moody Center, Austin | (upcoming) | [R, Tribeza](https://tribeza.com/culture/san-antonio-spurs-austin-series-moody-center/) |
| 2026–27 | **Thu Jan 14, 2027** | Spurs vs New Orleans (designated home team **not stated**) | **Accor Arena, Paris, France** | (upcoming) | [O, NBA Communications, May 20, 2026](https://pr.nba.com/pelicans-spurs-paris-manchester/); [R, TPR, July 7, 2026](https://www.tpr.org/government-politics/2026-07-07/spurs-get-permission-for-more-international-games-plus-up-to-2-austin-home-games-per-season) |
| 2026–27 | **Sun Jan 17, 2027** | Spurs vs New Orleans (designated home team **not stated**) | **Co-op Live, Manchester, England** | (upcoming) | [O, NBA Communications](https://pr.nba.com/pelicans-spurs-paris-manchester/); [O, Co-op Live](https://www.cooplive.com/new-orleans-pelicans-and-san-antonio-spurs-to-play-regular-season-game-at-co-op-live-hn5z). KSAT says only one of the two is likely to count as a Spurs home game ([R](https://www.ksat.com/news/local/2026/07/07/spurs-can-play-an-additional-home-game-outside-of-frost-bank-center-in-26-27-27-28-seasons/)); which one is still a **gap** |

**Notes:**
- The county allows up to **four** regular-season home games away from Frost Bank Center in each of 2026–27 and 2027–28 ([R, KSAT](https://www.ksat.com/news/local/2026/07/07/spurs-can-play-an-additional-home-game-outside-of-frost-bank-center-in-26-27-27-28-seasons/)). Three Austin games plus one Europe home game would fill that.
- **2027–28 off-site games: gap** (not announced in the sources found).
- **Mexico City:** the only Spurs game found there is Dec 17, 2022 vs Miami at Mexico City Arena ([R, NBA Global Games](https://en.wikipedia.org/wiki/NBA_Global_Games)), before the 2025 cutoff. **None found from 2025 on.**
- **Alamodome:** the last Spurs game there was in 2022–23 (venue answer; [R](https://sanantonioreport.org/spurs-san-antonio-bexar-county-international-home-games/)). **None from 2025 on.**
- The NBA Global Games page's **Jan 14 and Jan 17, 2027** dates ([R](https://en.wikipedia.org/wiki/NBA_Global_Games)) are now **confirmed** as Paris and Manchester by the NBA's own release (second pass; [O](https://pr.nba.com/pelicans-spurs-paris-manchester/)).

### 4.2 Neutral-site and non-tenant games at San Antonio rooms

These are hosted **in** San Antonio, but none is a home game of a local tenant. Don't attach them to a local team's home schedule.

| Date | Event | Site (row ID) | Announced attendance | Source |
|---|---|---|---|---|
| Dec 28, 2024 | Valero Alamo Bowl | Alamodome (A1) | 64,261 | [O, Alamo Bowl](https://www.alamobowl.com/?p=42551) (carried from venue answer) |
| Dec 30, 2025 | Valero Alamo Bowl | Alamodome (A1) | 54,751 | [R](https://en.wikipedia.org/wiki/2025_Alamo_Bowl) (carried from venue answer) |
| **Tue Dec 29, 2026, 8:00 pm CT** (second pass) | Valero Alamo Bowl 2026 | Alamodome (A1) | (upcoming) | [O, Visit San Antonio release](https://www.visitsanantonio.com/media-news-releases/post/2026-valero-alamo-bowl-set-for-tuesday-december-29-at-800-pm-ct/) (date from release title) |
| Dec 17 and Dec 20, 2026 (conflict: Dec 17–19 on another NCAA page) | NCAA DI Women's Volleyball Championship | Alamodome (A1) | (upcoming) | [O, NCAA.com](https://www.ncaa.com/championships/volleyball-women/d1/future-info); [O, NCAA.org](https://www.ncaa.org/?p=9108) |
| 2027 — **date gap** | NCAA DI men's basketball regional | venue gap | — | [R, KSAT](https://www.ksat.com/topic/Women%27s_Final_Four) |

### 4.3 Other teams

| Team | Off-site home games from 2025 | Status |
|---|---|---|
| San Antonio FC | None. The 2026 season page shows every home match at Toyota Field ([R](https://en.wikipedia.org/wiki/2026_San_Antonio_FC_season)) | 2025: **gap** (season page rate-limited) |
| San Antonio Missions | **gap** — off-site regular-season games not checked. 2023 home playoff games were at Wolff Stadium per the MLB Stats API (§5.4) | Wolff Stadium is the home through 2028 (venue answer) |
| UTSA football | **None, 2023–2025** — every home game was at the Alamodome; bowl games were neutral-site (Frisco Bowl, Toyota Stadium, Dec 19, 2023; Myrtle Beach Bowl, Brooks Stadium, Conway SC, Dec 23, 2024; First Responder Bowl, Gerald J. Ford Stadium, Dallas, Dec 26, 2025) ([R, 2023](https://en.wikipedia.org/wiki/2023_UTSA_Roadrunners_football_team); [R, 2024](https://en.wikipedia.org/wiki/2024_UTSA_Roadrunners_football_team); [R, 2025](https://en.wikipedia.org/wiki/2025_UTSA_Roadrunners_football_team)) | 2026: not checked |
| UIW football | **None, 2023–2025** — all home games at Benson Stadium. Note **Sep 13, 2025, UIW at UTSA, Alamodome** ("Hometown Showdown"), a UIW road game in San Antonio — assign to A1 as a UTSA home game (20,421) ([R](https://en.wikipedia.org/wiki/2025_Incarnate_Word_Cardinals_football_team); [R](https://en.wikipedia.org/wiki/2025_UTSA_Roadrunners_football_team)) | 2026: not checked |
| UTSA and UIW basketball | **gap** | — |

---

## 5. Postseason and past-crowd tables per team

**Coverage range:** the target was the 2023 season onward. What was actually reached: the Spurs for 2023–24 through 2025–26, and SAFC for 2026 only. Everything else is a **gap** (see §7 for why). Postseason and regular season are kept apart. Capacity is never used as attendance.

### 5.1 San Antonio Spurs — regular season (home, Frost Bank Center unless noted)

| Season | Home games | Announced average | Total | Source | Note |
|---|---|---|---|---|---|
| 2023–24 | 41 | 18,110 | not stated | [R, Wikipedia](https://en.wikipedia.org/wiki/2023%E2%80%9324_San_Antonio_Spurs_season) | Whether the 41 games and the average include the 2 Moody Center games is **unclear**; the page does not say |
| 2024–25 | not stated | 17,837 (17th in NBA) | not stated | [R, Wikipedia](https://en.wikipedia.org/wiki/2024%E2%80%9325_San_Antonio_Spurs_season) | Whether Paris/Austin games are in the average is **unclear** |
| 2025–26 | not stated | **not stated** (per-game average not published on the page found) | **743,129** (16th of 30) | [R, Basketball-Reference](https://www.basketball-reference.com/teams/SAS/2026.html) (second pass) | Whether the total includes the two Moody Center games is **unclear**. Per-game crowds are on the [Wikipedia season page](https://en.wikipedia.org/wiki/2025%E2%80%9326_San_Antonio_Spurs_season); every 2025–26 regular-season home game was at Frost Bank Center except Moody Center Feb 19 and 21 |
| 2026–27 | — | season not started (opens October 2026) | — | — | — |

Single-game reference crowds (not averages): NBA single-game record **68,323** at the Alamodome, Jan 13, 2023 ([R](https://blog.iavm.org/?p=30462)), from the venue answer. Off-site crowds (Moody Center, Accor Arena) are in §4.1. Keep them out of Frost Bank Center history.

### 5.2 San Antonio Spurs — postseason home games

| Season | Result | Home playoff games (Frost Bank Center, A2) |
|---|---|---|
| 2022–23, 2023–24, 2024–25 | Did not qualify ([R, 2023–24](https://en.wikipedia.org/wiki/2023%E2%80%9324_San_Antonio_Spurs_season); [R, 2024–25](https://en.wikipedia.org/wiki/2024%E2%80%9325_San_Antonio_Spurs_season)) | None. (2022–23: 22–60, "did not qualify" — [R](https://en.wikipedia.org/wiki/2022%E2%80%9323_San_Antonio_Spurs_season), second pass) |
| 2025–26 | Won West; lost NBA Finals 1–4 to New York ([R](https://en.wikipedia.org/wiki/2025%E2%80%9326_San_Antonio_Spurs_season)) | 12 home games, below |

All rows: [R, Wikipedia 2025–26 season page](https://en.wikipedia.org/wiki/2025%E2%80%9326_San_Antonio_Spurs_season). Confirm against NBA.com box scores before wiring.

| Round | Game | Date (2026) | Opponent | Announced attendance |
|---|---|---|---|---|
| First round | 1 | Apr 19 | Portland | 19,372 |
| First round | 2 | Apr 21 | Portland | 19,338 |
| First round | 5 | Apr 28 | Portland | 19,063 |
| West semifinals | 1 | May 4 | Minnesota | 18,827 |
| West semifinals | 2 | May 6 | Minnesota | 19,185 |
| West semifinals | 5 | May 12 | Minnesota | 19,345 |
| West finals | 3 | May 22 | Oklahoma City | 19,034 |
| West finals | 4 | May 24 | Oklahoma City | 19,405 |
| West finals | 6 | May 28 | Oklahoma City | 19,066 |
| NBA Finals | 1 | Jun 3 | New York | 18,835 |
| NBA Finals | 2 | Jun 5 | New York | 19,014 |
| NBA Finals | 5 | Jun 13 | New York | 18,984 |

Several of these crowds are above the 18,418 basketball capacity (venue answer). That is normal for announced crowds (standing room and suites). **Don't** change the capacity because of it.

### 5.3 San Antonio FC (Toyota Field, A7)

| Season | Regular-season home crowds | Postseason home games | Source |
|---|---|---|---|
| 2026 (in progress; 11 home league matches listed as of fetch) | Infobox average **6,071**, high 6,512 (Mar 7), low 5,797 (Mar 21). **Conflict:** listed match crowds include 7,074 (Jul 4) and 7,742 (Aug 15), above the stated high, and average about 6,206 | Season not finished; none listed | [R, Wikipedia](https://en.wikipedia.org/wiki/2026_San_Antonio_FC_season) |
| 2026 per match | Mar 7 6,512; Mar 21 5,797; Mar 29 5,905; Apr 11 5,758; May 2 5,570; May 23 5,676; Jul 4 7,074; Jul 18 5,983; Jul 31 6,145; Aug 15 7,742; Aug 22 6,101 | — | [R](https://en.wikipedia.org/wiki/2026_San_Antonio_FC_season) |
| 2026 cup matches (keep apart from league) | U.S. Open Cup: Mar 18 1,766; Apr 1 2,434. USL Cup: Apr 25 5,850; Jul 11 5,255; Aug 12 6,092 | — | [R](https://en.wikipedia.org/wiki/2026_San_Antonio_FC_season) |
| 2025 (second pass) | No average stated on the page. Highest home crowd 8,164 (Mar 8 vs Monterey Bay, matched Oct 25); lowest 3,735 (Apr 23 vs Colorado Springs — whether this was a league match is **not confirmed**) | **None.** Lost 2–0 away at New Mexico United, Nov 1, 2025 (8,287 in Albuquerque) | [R, Wikipedia](https://en.wikipedia.org/wiki/2025_San_Antonio_FC_season) |
| 2024 (second pass) | Average home league attendance **6,613**; high 7,546 (Mar 30 vs Monterey Bay); low 5,535 (Aug 3 vs FC Tulsa) | **None** — finished 9th in the West, no playoffs | [R, Wikipedia](https://en.wikipedia.org/wiki/2024_San_Antonio_FC_season) |
| 2023 (second pass) | Average home league attendance **7,190**; league high 8,266 (Jul 1); league low 4,706 (Jun 10). (Infobox high 8,328 vs Sunderland and low 3,204 vs Club de Lyon are a friendly and a U.S. Open Cup match — keep out of league history) | **1 home playoff game: Oct 21, 2023, 7,304** (opponent not captured). Lost conference semifinal 3–1 at Sacramento, Oct 27, 2023 | [R, Wikipedia](https://en.wikipedia.org/wiki/2023_San_Antonio_FC_season) |

### 5.4 Other teams

| Team | Regular-season crowds | Postseason home games | Status |
|---|---|---|---|
| San Antonio Missions (A6) | **2023:** 284,419 total, 4,183 average; **2024:** 265,011 / 3,897; **2025:** 269,383 / 3,962 ([R, Stats Crew](https://www.statscrew.com/minorbaseball/t-sm14322)). **2026:** not shown (gap). Per-game crowds are also in the MLB Stats API game feed (`gameData.gameInfo.attendance`), so the free feed can supply crowd history | **2023 Texas League South Division series vs Amarillo (lost 2–1):** home games **Sep 21, 2023 — 3,668** ([O, MLB Stats API](https://statsapi.mlb.com/api/v1.1/game/744416/feed/live)) and **Sep 22, 2023 — 2,080** ([O, MLB Stats API](https://statsapi.mlb.com/api/v1.1/game/744417/feed/live)); series listing ([O](https://statsapi.mlb.com/api/v1/schedule?sportId=12&teamId=510&startDate=2023-09-19&endDate=2023-09-23&gameType=F,D,L,W)); [R, JB Replay](https://thejbreplay.com/sod-poodles-beat-the-missions-6-3-advance-to-the-tl-title-series). **2024–2026:** the feed returns no postseason games for the Missions ([O, 2024–25 query](https://statsapi.mlb.com/api/v1/schedule?sportId=12&teamId=510&startDate=2024-09-01&endDate=2025-09-30&gameType=F,D,L,W); [O, 2026 query](https://statsapi.mlb.com/api/v1/schedule?sportId=12&teamId=510&startDate=2026-09-01&endDate=2026-10-14&gameType=F,D,L,W)) | Second pass |
| UTSA football (A1) | **2023** (6 home games): Sep 9 Texas State 49,342; Sep 15 Army 27,138; Oct 14 UAB 23,808; Oct 28 East Carolina 22,629; Nov 11 Rice 28,245; Nov 17 South Florida 22,096 ([R](https://en.wikipedia.org/wiki/2023_UTSA_Roadrunners_football_team)). **2024** (6): Aug 31 Kennesaw State 25,911; Sep 21 Houston Christian 20,973; Oct 19 Florida Atlantic 20,802; Nov 2 Memphis 17,198; Nov 15 North Texas 21,350; Nov 22 Temple 20,121 ([R](https://en.wikipedia.org/wiki/2024_UTSA_Roadrunners_football_team)). **2025** (6): Sep 6 Texas State 45,778; Sep 13 UIW 20,421; Oct 11 Rice 22,058; Oct 30 Tulane 16,715; Nov 22 East Carolina 18,573; Nov 29 Army 22,620 ([R](https://en.wikipedia.org/wiki/2025_UTSA_Roadrunners_football_team)). **2026** opener about 33,000 ([R](https://sanantonioreport.org/alamodome-130k-san-antonio-stadium-september-2026/), from venue answer). No season averages stated; UTSA's own Jan 2025 release gives only all-time attendance (2,114,786) and 10,035 season tickets — not per-season crowds ([O](https://goutsa.com/news/2025/01/21/roadrunners-on-the-rise-utsa-once-again-sets-fall-attendance-records)) | Bowl games are at neutral sites outside San Antonio (§4.3); home playoff: n/a (FBS) | Second pass |
| UTSA basketball/volleyball (A13) | **Women's basketball 2024–25:** 15,372 total, school-record average **1,152**; single-game record 2,250 (Mar 1, 2025 vs Florida Atlantic). **Volleyball 2024:** 13,794 total; largest home crowd 1,246 vs Texas State; spring 2025 exhibition vs Texas 2,482. **Men's basketball 2024–25:** no total or average published ([O, UTSA Athletics, June 26, 2025](https://goutsa.com/news/2025/06/26/runners-on-the-rise-2024-25-year-in-review)). Older: "just under 1,000 per game," undated ([R](https://www.stadiumjourney.com/stadiums/convocation-center-s584)). Other seasons: **gap** | **gap** (not checked) | Second pass (partial) |
| UIW football (A8) | **2023:** Sep 23 North American 2,482; Oct 7 SE Louisiana 1,622; Oct 14 Texas A&M–Commerce 2,278; Nov 4 Nicholls 3,158; Nov 11 Northwestern State cancelled (forfeit) ([R](https://en.wikipedia.org/wiki/2023_Incarnate_Word_Cardinals_football_team)). **2024:** Aug 31 Northern Colorado 2,257; Sep 21 Northern Arizona 1,413; Oct 5 Prairie View A&M 2,003; Oct 12 Nicholls 1,801; Oct 19 McNeese 1,634; Nov 2 Houston Christian 2,189; Nov 9 Lamar 2,055 ([R](https://en.wikipedia.org/wiki/2024_Incarnate_Word_Cardinals_football_team)). **2025:** Aug 30 Eastern Washington 2,263; Sep 27 Abilene Christian 3,006; Oct 4 Stephen F. Austin 2,098; Oct 18 East Texas A&M 2,016; Nov 1 Lamar 2,680; Nov 15 SE Louisiana 2,165 ([R](https://en.wikipedia.org/wiki/2025_Incarnate_Word_Cardinals_football_team)). Earlier: typical just under 2,500 (undated) ([R](https://stadiumjourney.com/stadiums/gayle-and-tom-benson-stadium-s2472)); record 6,498, Nov 17, 2016 ([R](https://en.wikipedia.org/wiki/Gayle_and_Tom_Benson_Stadium)) | **2024: 1 home FCS playoff game — Dec 7, 2024, second round vs Villanova, W 13–6, 1,926** ([R](https://en.wikipedia.org/wiki/2024_Incarnate_Word_Cardinals_football_team)); quarterfinal was away at South Dakota State. **2023, 2025:** no playoff games listed | Second pass |
| UIW basketball/volleyball (A21) | **gap** | **gap** | — |
| Valero Alamo Bowl (A1, event) | 2023: **55,853** (Dec 28, 2023, Arizona vs Oklahoma) ([R](https://en.wikipedia.org/wiki/2023_Alamo_Bowl), second pass); 2024: 64,261 ([O](https://www.alamobowl.com/?p=42551)); 2025: 54,751 ([R](https://en.wikipedia.org/wiki/2025_Alamo_Bowl)) | n/a | — |

**Tampa Bay comparison (updated second pass):** unlike Tampa Bay, San Antonio now has crowd history for every main team: Spurs (per-game, incl. 2026 playoffs), SAFC (2023–2026), Missions (2023–2025 season totals, plus per-game counts available from the MLB Stats API feed itself), UTSA and UIW football (per-game 2023–2025). Remaining holes: UTSA men's basketball, UIW basketball/volleyball, and Missions 2026.

---

## 6. Notes for whoever turns this into app data (build rules from the brief)

- **Unique IDs across all cities.** Every venue ID and team ID must be unique across all cities; `giants`, `jets`, `rangers`, `kings` and `cardinals` were already taken. Add a city prefix. In San Antonio this matters most for **UIW Cardinals** (`cardinals` is taken) and for the generic **Missions** and **Roadrunners**. Prefix every San Antonio team and venue ID, including **Spurs**. The venue answer's row IDs (A1…) are local labels only and need the same prefix.
- **Spurs games at Moody Center** go to **Austin's existing Moody Center venue ID**. Don't create a San Antonio copy. Paris/Manchester/Las Vegas games go to no San Antonio room.
- **No separate opponents file.** Opponent draws (e.g., the 2026 Finals vs New York, or Paris/Manchester vs New Orleans) go into `expectedDrawIndex`, as in every other city.
- **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list. That applies to the new candidate **Gruene Hall** (capacity gap), **Illusions Theater (A23)** and the Freeman rodeo setup. Announced crowds above listed capacity (e.g., Spurs playoff crowds over 18,418) don't change capacity.
- **Car shares:** wire measured ones; wire sourced estimates marked estimated; leave the rest on the city default. This pass added no car-share data, and the city-type answer was not provided.
- **Ticketmaster matching:** A2's ID 475590 also carries parking add-ons, so filter them. A1's ID 475247 may also carry Illusions Theater (A23) and lot events (Fiesta Carnival, Tailgate Town), so match by event name. Rooms without a verified ID ship with no concerts (§2).
- **Hex colors (second pass):** UTSA and UIW are official; Spurs and SAFC are **secondary** (ESPN feed) — upgrade if an official source appears; Missions stay blank (gap). Don't fill blanks from memory or third-party color sites without labeling them secondary.
- **Feed IDs collide across feeds:** the Spurs (ESPN 24) and Missions (MLB 510) both use abbreviation `SA` in their feeds, so key on feed + numeric ID, never the abbreviation.

---

## 7. Inaccessible or limited sources (flagged, not bypassed)

| Source | What happened | Effect |
|---|---|---|
| Web search | The shared search budget ran out after 9 searches in this pass | Most Ticketmaster IDs, all feed IDs, all colors and the code check could not be searched |
| `en.wikipedia.org/wiki/2025_San_Antonio_FC_season`, `…/2024_…`, `…/2023_…` | HTTP 429 rate limit from the fetch proxy; not retried | SAFC 2023–2025 crowds and playoffs: gap |
| `statsapi.mlb.com/api/v1/teams?sportId=12` | HTTP 429; not retried | Missions feed ID: not verified |
| `site.api.espn.com/.../nba/teams/sa` | HTTP 429; not retried | Spurs ESPN ID and ESPN color values: not verified |
| `alamobowl.com/?p=42551` | HTTP 429 on re-fetch; not retried. The 2024 figure is carried from the venue answer | Alamo Bowl history before 2024: gap |
| `sanantonioreport.org/alamodome-130k-…` | HTTP 429; not retried. Figure carried from venue answer | UTSA per-game crowds: gap |
| `ticketmaster.com/alamodome-tickets-san-antonio/venue/475247` | Fetch returned a client error | ID verified only via link on Ticketmaster's blog |
| `ticketmaster.com/discover/san-antonio` | Fetch returned a client error | Couldn't list more Ticketmaster venue IDs |
| `espn.com/nba/attendance/_/year/2026` | Returned empty content | Spurs 2025–26 season average: gap |

**Second pass (Oct 14, 2026):** the MLB Stats API and ESPN site API both answered normally this time, so the first-pass 429 rows above for those feeds are resolved. New limits hit:

| Source | What happened | Effect |
|---|---|---|
| `site.api.espn.com/…/college-football/teams/iw` | Returned an empty object | Used numeric ID 2916 instead (works) |
| `basketball-reference.com/leagues/NBA_2026.html` | Page text cut off before the attendance table | Used the Spurs team page instead (total only) |
| `statsapi.mlb.com/api/v1/game/{pk}/boxscore` | Response cut off before the attendance line | Used `/api/v1.1/game/{pk}/feed/live` (`gameInfo.attendance`) instead |
| UIW brand pages | Print Pantone/RGB only, no hex | Hex converted from official RGB and labeled so |
| UIW logo-colors page on `www.uiw.edu` | 302 redirect to `my.uiw.edu` | Followed the redirect (same university domain) |

No paywall, login or access control was bypassed, and no archive, mirror or alternate client was used.

---

## 8. Follow-up searches to close the gaps (in priority order)

1. Ticketmaster venue pages for **Lila Cockrell Theatre (A18)** (Ticketmaster is the city's ticketer), **Toyota Field (A7)**, **Real Life Amphitheater (A4)**, **Laurie Auditorium (A17)**, **UTSA Convocation Center (A13)**, **Sunken Garden (A12)** and **Cowboys Dancehall (A9)**.
2. Free-feed IDs: ESPN team IDs for the Spurs, UTSA and UIW; the MLB Stats API team ID for the Missions; and the USL Championship team page for SAFC.
3. Official brand/style pages for hex colors: Spurs (NBA), SAFC (USL), Missions (MiLB), UTSA and UIW.
4. The **SAT** code (airport/IATA source) and the NBA/ESPN team abbreviation.
5. SAFC 2023–2025 attendance and playoffs; Missions 2023–2026 attendance and playoffs; UTSA and UIW football per-season attendance; Spurs 2025–26 regular-season average.
6. Exact dates of the January 2027 **Paris and Manchester** Spurs–Pelicans games, and which one is the Spurs home game.
7. Gruene Hall capacity, and whether any indoor or women's pro team plays in San Antonio.

**Status after second pass (Oct 14, 2026):** items 2, 4 and 6 (dates) are **done**; item 3 is done except an official Spurs/SAFC hex source (secondary ESPN values in use) and any Missions hex; item 1 added Toyota Field (476060) only — Lila Cockrell, Real Life, Laurie, UTSA Convo, Sunken Garden and Cowboys still have no Ticketmaster venue URL; item 5 is done except UTSA men's basketball, UIW basketball/volleyball and Missions 2026. Still open: which Europe game is the Spurs home game, ESPN women's basketball/volleyball IDs for UTSA and UIW, and item 7 (not attempted).

---

## End-of-answer summary

### 1. Name, short form, code, covered area
- **Name:** San Antonio (all current pro teams use it; no regional name found — partly verified).
- **Short form:** SA (local media naming; also the ESPN and MLB Stats API abbreviation for the Spurs and Missions).
- **Code:** **SAT** — verified as the airport identifier in the airport's own brand standards ([O](https://flysanantonio.com/wp-content/uploads/2024/03/SAT-BRAND-STANDARDS.pdf)).
- **Covered area:** Bexar County core, plus Selma (I-35 north), plus Comal County venues (**New Braunfels and Canyon Lake are in**). Guadalupe and Kendall were searched with no rows. Hays/San Marcos and Austin's Moody Center are left to Austin.

### 2. Ticketmaster venue IDs
| Venue row ID | Room | Ticketmaster venue ID | Verification link (or "not verified") |
|---|---|---|---|
| A1 | Alamodome | 475247 | [Ticketmaster blog link](https://blog.ticketmaster.com/step-inside-frost-bank-center-san-antonio-tx/) |
| A2 | Frost Bank Center | 475590 | [ticketmaster.com venue page](https://www.ticketmaster.com/frost-bank-center-billets-san-antonio/venue/475590) |
| A3 | Freeman Coliseum | 475253 | [freemancoliseum.com box office](https://freemancoliseum.com/ticket-box-office/) |
| A4 | Real Life Amphitheater | — | not verified |
| A5 | Retama Park | — | not verified |
| A6 | Wolff Stadium | — | not verified (Missions sell on Ticketmaster artist 806707: [O](https://www.ticketmaster.com/San-Antonio-Missions-tickets/artist/806707); own box office) |
| A7 | Toyota Field | 476060 | [ticketmaster.com venue page](https://www.ticketmaster.com/toyota-field-tickets-san-antonio/venue/476060) |
| A8 | Benson Stadium | — | not verified (UIW's own ticket site: [O](https://uiwcardinals.com/news/2026/7/13/single-game-tickets-now-available-for-2026-uiw-football-season.aspx)) |
| A9 | Cowboys Dancehall | — | not verified |
| A10 | Whitewater Amphitheater | — | not verified (Tixr: [O](https://www.whitewaterrocks.com/ticketing-info)) |
| A11 | R&J Music Pavilion | — | not verified |
| A12 | Sunken Garden Theater | — | not verified |
| A13 | UTSA Convocation Center | — | not verified (Ticketmaster Account Manager, no venue page: [O](https://goutsa.com/news/2026/06/23/2026-utsa-volleyball-single-game-tickets-on-sale-now)) |
| A14 | Floore's (outdoor) | — | not verified (Prekindle: [O](https://www.liveatfloores.com/)) |
| A15 | The Espee | 476296 | [Ticketmaster blog link](https://blog.ticketmaster.com/concert-venues-san-antonio/) |
| A16 | Boeing Center at Tech Port | — | not verified (Etix: [O](https://boeingcentertechport.com/)) |
| A17 | Laurie Auditorium | — | not verified |
| A18 | Lila Cockrell Theatre | — | not verified (Ticketmaster is the city's contracted ticketer: [R](https://sanantonioreport.org/san-antonio-city-council-awards-contract-to-ticketmaster-over-tobin-center/); Live Nation venue key `KovZpZAE6kFA`: [O](https://www.livenation.com/venue/KovZpZAE6kFA/lila-cockrell-theatre-events)) |
| A19 | Majestic Theatre | — | not verified (ATG: [O](https://us.atgtickets.com/venues/majestic-theatre/join-us/)) |
| A20 | Tobin H-E-B Performance Hall | — | not verified (Tobin's own system: [O](https://www.tobincenter.org/)) |
| A21 | McDermott Convocation Center | — | not verified |
| A22 | Aztec Theatre | 476096 | [Ticketmaster blog link](https://blog.ticketmaster.com/concert-venues-san-antonio/) |
| A23 | Illusions Theater | — | not verified |
| (candidate) | Gruene Hall, New Braunfels | 476101 | [Ticketmaster blog link](https://blog.ticketmaster.com/concert-venues-san-antonio/) — capacity gap, not yet a row |

### 3. Teams, feeds and colors
| Team | League | Home venue row ID | Free feed and ID | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| Spurs | NBA | A2 | ESPN NBA, ID 24 ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/sa)) | #000000 | #C4CED4 | secondary (ESPN feed) |
| San Antonio FC | USL Championship | A7 | ESPN `usa.usl.1`, ID 18265 ([feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)) | #878787 | #000000 | secondary (ESPN feed) |
| Missions | Double-A Texas League | A6 (P2 from 2029) | MLB Stats API sportId 12, ID 510 ([feed](https://statsapi.mlb.com/api/v1/teams?sportId=12)) | gap | gap | gap (navy/gold/red named only, [R](https://sportslogos.net/logos/view/689868472021)) |
| UTSA football | FBS, AAC | A1 | ESPN CFB, ID 2636 ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/utsa)) | #F15A22 | #032044 | official ([UTSA brand](https://www.utsa.edu/marcomstudio/resources/style-guides/brand-guidelines/color.html)) |
| UTSA basketball/volleyball | AAC | A13 | ESPN MBB, ID 2636 ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2636)); WBB/VB not verified | #F15A22 | #032044 | official |
| UIW football | FCS, Southland | A8 | ESPN CFB, ID 2916 ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2916)) | #CB333B | #000000 | official RGB → hex ([UIW artsheet](https://www.uiw.edu/marcom/_docs/uiw-artsheet-120523.pdf)) |
| UIW basketball/volleyball | Southland | A21 | ESPN MBB, ID 2916 ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2916)); WBB/VB not verified | #CB333B | #000000 | official RGB → hex |
| Stock Show & Rodeo (event) | PRCA/WPRA | A2 + B1 | no feed | n/a | n/a | n/a |
| Retama racing (event) | Pari-mutuel | A5 | no feed | n/a | n/a | n/a |

### 4. Games away from the home venue
- **Spurs at Moody Center, Austin:** Feb 20 and 21, 2025; Feb 19 and 21, 2026; **Oct 23, 2026**; **Feb 26 and Feb 28, 2027**.
- **Spurs international:** Accor Arena, Jan 23, 2025 (Pacers home) and Jan 25, 2025 (Spurs home). vs New Orleans at Accor Arena, Paris, **Jan 14, 2027**, and Co-op Live, Manchester, **Jan 17, 2027** ([O, NBA](https://pr.nba.com/pelicans-spurs-paris-manchester/)); only one is expected to be a Spurs home game, and which one is a gap.
- **Spurs NBA Cup in Las Vegas** (T-Mobile Arena): Dec 13 and 16, 2025, listed as road/neutral games.
- **No Spurs games in Mexico City or at the Alamodome from 2025 on.**
- **Neutral-site games at the Alamodome:** Alamo Bowl Dec 28, 2024 and Dec 30, 2025; NCAA women's volleyball December 2026.
- **Alamo Bowl 2026:** Tue Dec 29, 2026, 8:00 pm CT, Alamodome.
- **Other teams:** UTSA and UIW football had no relocated home games 2023–2025 (bowls were neutral-site outside San Antonio); UIW's Sep 13, 2025 game at the Alamodome was a UTSA home game. Missions, SAFC 2025 and college basketball: gap.

### 5. Postseason and past crowds
- **Spurs:** regular-season averages 18,110 (2023–24) and 17,837 (2024–25); 2025–26 total 743,129 (16th; Basketball-Reference, no per-game average stated). No playoffs in 2022–23, 2023–24 or 2024–25. In 2026, 12 home playoff games drew 18,827–19,405 each (table §5.2).
- **SAFC:** averages 7,190 (2023) and 6,613 (2024); 2025 no stated average; 2026 average 6,071, which conflicts with the per-match list. One home playoff game: Oct 21, 2023 (7,304).
- **Missions:** 4,183 (2023), 3,897 (2024), 3,962 (2025) average; 2023 home playoff games Sep 21 (3,668) and Sep 22 (2,080); none 2024–2026.
- **UTSA football:** per-game 2023–2025 (16,715–49,342); no home playoffs (FBS). **UTSA women's basketball** 2024–25 average 1,152; volleyball 2024 total 13,794.
- **UIW football:** per-game 2023–2025 (1,413–3,158); home FCS playoff Dec 7, 2024 (1,926).
- **Still gaps:** UTSA men's basketball, UIW basketball/volleyball, Missions 2026.
- **Alamo Bowl:** 64,261 (2024) and 54,751 (2025).
