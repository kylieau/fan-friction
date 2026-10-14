# Indianapolis follow-up on city-build gaps

**Answer date:** Oct 13, 2026 (America/Los_Angeles); **second pass Oct 14, 2026**. Facts are as of these dates unless a different date is shown. Public sources only. Each fact links to the page it came from. Facts added in the second pass are marked **(2nd pass)**; the second pass only filled cells marked gap, not verified or not checked.

**Inputs:**
- Brief: [indianapolis-gaps-followup-prompt.md](indianapolis-gaps-followup-prompt.md).
- Venue answer: [indianapolis-venue-table-answer.md](indianapolis-venue-table-answer.md). All row IDs (V01–V21) below come from it.
- **The city-type answer (`indianapolis-city-type-answer.md`) was not provided for this pass.** Nothing here relies on it, and its work (fan mode splits, car shares) is not redone.

**Limits of this pass. Read these before using the tables.**
- **Search budget.** The shared web-search budget ran out partway through. Later items rely only on pages already found or on pages fetched directly, so several cells say "gap." Each one says what was tried.
- **Rate-limited pages.** Two pages returned HTTP 429 and were not retried: [smallmarketmeetings.com "What's new Indiana"](https://smallmarketmeetings.com/articles/whats-new-indiana/) and [Visit Hamilton County arena page](https://www.visithamiltoncounty.com/sports-authority/facilities/arena-innovation-mile/). Their figures are carried over from the venue answer and marked "not re-checked."
- **Pages that failed to fetch.** These returned a client error and were not reached any other way: the Ticketmaster venue pages for Gainbridge (41417) and Old National Centre (42026), [Butler's brand page](https://www.butler.edu/marketing-communications/brand/), [IU's brand color page](https://brand.iu.edu/visual-identity/color/index.html), and the TeamColorCodes pages for the Indianapolis Indians and Indy Eleven.
- **(2nd pass) More fetch failures, not retried another way:**
  - Client errors: the Ticketmaster pages for venue 41099, venue 42394, the DMB `venueId=41099` artist page and a Ruoff event page, plus the [IFL schedule page](https://goifl.com/sports/fball/2026/schedule).
  - Robots-blocked: a Stereoboard event page.
  - Truncated: the ESPN schedule API responses stop after about 81,000 characters. The 2023 Colts game vs TB and the 2026 game vs HOU (whose cached feed predates kickoff) therefore stay **gap**.
  - Searches used: about 50 of the 60 allowed. The limit was not hit.
- **ESPN attendance pages.** The [ESPN NFL/NBA attendance pages](https://www.espn.com/nfl/attendance/_/year/2025) came back empty (rendered by script), so they were not used.

**Source labels:**
- **Official:** from a team, league, venue or university.
- **Secondary:** from a reference site (Wikipedia, Basketball-Reference, StatsCrew, TeamColorCodes) or from ESPN's public API color fields, which are ESPN data, not a team brand guide.

---

## Build-rule notes (for whoever turns this into app data)

1. **Unique IDs.** Every venue ID and team ID must be unique across all cities. `giants`, `jets`, `rangers`, `kings` and `cardinals` are already taken, so add a city prefix. Indianapolis has two clashes to watch:
   - **Colts:** the Baltimore-era Colts history and other cities' "colts" teams.
   - **"Indiana":** the Pacers and Fever brand as "Indiana," not "Indianapolis."

   A city prefix such as `ind` on every Indianapolis ID avoids both.
2. **No per-city opponents file.** Opponent draws go into `expectedDrawIndex`, as in every other city.
3. **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list (see section 6).
4. **Car shares.**
   - Wire measured car shares.
   - Wire sourced estimates, marked "estimated."
   - Leave everything else on the city default.

   The city-type answer, which holds these, was not provided here.
5. **Ticketing setup is not all Ticketmaster.** Several Indianapolis concert rooms sell through AXS or their own box office (section 2). If a room has no verified Ticketmaster ID, it ships with no concerts until another source is added.

---

## 1. Name, short form, code and covered area

| Field | Value | Source |
|---|---|---|
| Display name | **Indianapolis** | City name ([Wikipedia](https://en.wikipedia.org/wiki/Indianapolis)) |
| Short form | **Indy** | Listed first among the city's nicknames ([Wikipedia infobox](https://en.wikipedia.org/wiki/Indianapolis)). Used in local team names: Indy Eleven ([ESPN](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)), Indy Fuel ([Wikipedia](https://en.wikipedia.org/wiki/Indy_Fuel)), Indy Ignite ([Wikipedia](https://en.wikipedia.org/wiki/Indy_Ignite)). |
| Three-letter code | **IND** | ESPN abbreviation for the Colts ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/ind)), Pacers ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/ind)) and Fever ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams/ind)). The airport's IATA code is IND ([Wikipedia](https://en.wikipedia.org/wiki/Indianapolis_International_Airport)). Indy Eleven uses "INDY" on ESPN ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)). |

**How this compares with Tampa Bay:**
- The Tampa Bay precedent does not apply here. No local team or media brand was found that uses a regional name in place of the city name.
- The Pacers and Fever use **"Indiana,"** which is the state, not a metro label. A state-wide display name would break the rule against including distant destinations just because they share a state.
- **Recommendation:** keep the display name "Indianapolis" and the code IND. Record "Indiana" as a team-name alias only.

### Covered area

**Core covered area** (the boundary recommended in the venue answer):

| County | Places covered | Note | Source |
|---|---|---|---|
| Marion | Consolidated Indianapolis | City and county governments merged under Unigov in 1970 | [Wikipedia](https://en.wikipedia.org/wiki/Indianapolis) |
| Marion | Beech Grove, Lawrence, Southport, Speedway | Independent towns inside the county, outside the consolidated city. They must still be in scope. Speedway holds V01. | [Wikipedia](https://en.wikipedia.org/wiki/Indianapolis) |
| Hamilton | Noblesville, Fishers, Carmel, Westfield | Holds V04, V09, V14 and V20 | Venue answer section 1 |
| Hendricks | Brownsburg | Holds V03 | Venue answer section 1 |

**Wider search area:** the 11-county Indianapolis–Carmel–Greenwood MSA ([Wikipedia](https://en.wikipedia.org/wiki/Indianapolis_metropolitan_area)):
- **Counties:** Marion, Hamilton, Hendricks, Johnson, Madison, Hancock, Boone, Morgan, Shelby, Brown and Tipton.
- **Principal cities:** Indianapolis, Carmel, Greenwood and Anderson.

**"Donut counties": gap.**
- **What was checked:** the metro-area page does not use the term.
- **Still missing:** a public source listing which counties locals mean by it. The search budget ran out before one could be found.
- **Effect on the boundary:** none. The boundary rests on where qualifying venues are, not on that label.

---

## 2. Ticketmaster venue IDs for concert rooms

**Method:** an ID counts as verified only if one of these was seen:
- a `ticketmaster.com/.../venue/NNNNN` page, fetched and showing the right venue, or
- such a URL linked from a Ticketmaster-owned page.

No Discovery API key was used.

| Venue row ID | Room | Ticketmaster venue ID | Verification link (or "not verified") |
|---|---|---|---|
| V02 | Lucas Oil Stadium | **41855** | [Ticketmaster venue page](https://www.ticketmaster.com/lucas-oil-stadium-tickets-indianapolis/venue/41855?page=1). Fetched. It shows "Lucas Oil Stadium, 500 S. Capitol Ave." and lists Morgan Wallen (May 8–9, 2026) and Ed Sheeran (Oct 10, 2026). |
| V04 | Ruoff Music Center | **(2nd pass) 41099, provisional** | **(2nd pass)** A ticketmaster.com search result titled "Ruoff Music Center - Noblesville, IN" points to [ticketmaster.com/ruoff-music-center-tickets-noblesville/venue/41099](https://www.ticketmaster.com/ruoff-music-center-tickets-noblesville/venue/41099). A second ticketmaster.com result, titled "Dave Matthews Band Noblesville Tickets, Ruoff Music Center 2026 Tour Dates," is the [artist page filtered by `venueId=41099`](https://www.ticketmaster.com/dave-matthews-band-tickets/artist/746531?venueId=41099). Both agree, but **both pages failed to fetch (client error)**, so this rests on search-result titles, not a fetched page. Wire it only after a Discovery API or page check. Pass 1 notes: Ticketmaster's own [Ruoff venue guide](https://blog.ticketmaster.com/venue-faq-ruoff-music-center-noblesville-in/) links only to a [Live Nation venue page](https://www.livenation.com/venue/KovZpvEk7A/ruoff-music-center-events) (Live Nation ID `KovZpvEk7A`). That Live Nation page has no ticketmaster.com venue link. A [Consequence listing](https://concerts.consequence.net/venues/ruoff-music-center-tickets) shows a Ticketmaster image file `26374v.jpg`. That is a lead only, not a verified venue ID. |
| V05 | Gainbridge Fieldhouse | **41417** | Linked from Ticketmaster's own [Gainbridge venue guide](https://blog.ticketmaster.com/venue-faq-gainbridge-fieldhouse-indianapolis-in/) as [ticketmaster.com/gainbridge-fieldhouse-tickets-indianapolis/venue/41417](https://www.ticketmaster.com/gainbridge-fieldhouse-tickets-indianapolis/venue/41417). Fetching the venue page itself failed, so this rests on the linking page. One ID covers all setups (concert, basketball, hockey). |
| V09 | Fishers Event Center | **42344** | [Ticketmaster venue page](https://www.ticketmaster.com/fishers-event-center-billets-fishers/venue/42344). Fetched. It shows "Fishers Event Center, 11000 Stockdale Street" with Indy Fuel, Indy Ignite and concert events. |
| V10 | Corteva Coliseum | **(2nd pass) 41103** | **(2nd pass)** [Ticketmaster venue page](https://www.ticketmaster.com/corteva-coliseum-tickets-indianapolis/venue/41103). Fetched. It shows "Corteva Coliseum, Indiana State Fairgrounds & Event Center, 1202 E. 38th St., Indianapolis, IN 46205," lists 5 events and names Fantasia. A [Horizon League championships artist page](https://www.ticketmaster.com/horizon-league-basketball-championships-tickets/artist/1700107?venueId=41103) uses the same `venueId=41103`. Pass 1 note: the [fairgrounds box office page](https://fairgrounds.indianastatefair.com/p/corteva-coliseum/box-office) lists Ticketmaster as a contact but links only to the Ticketmaster homepage. No venue page was found. |
| V11 | Everwise Amphitheater at White River State Park | **41695** | [Ticketmaster venue page](https://www.ticketmaster.com/amphitheater-at-white-river-state-park-tickets-indianapolis/venue/41695). Fetched. The URL slug still uses an old name, but the page shows "Everwise Amphitheater at White River State Park, 801 W. Washington St." **Rename trap:** the slug and the display name differ. |
| V14 | Riverview Health Arena at Innovation Mile | **(2nd pass) 42394, provisional** | **(2nd pass)** A ticketmaster.com search result titled "Riverview Health Arena at Innovation Mile - Noblesville, IN" points to [ticketmaster.com/riverview-health-arena-at-innovation-mile-tickets-noblesville/venue/42394](https://www.ticketmaster.com/riverview-health-arena-at-innovation-mile-tickets-noblesville/venue/42394). The page itself **failed to fetch (client error)**, so this rests on the search-result title. Ticketmaster also has a [Noblesville Boom artist page](https://www.ticketmaster.com/noblesville-boom-tickets/artist/3907209), so the arena does sell through Ticketmaster. Pass 1: no Ticketmaster page was found in search. The [Riverview naming press release](https://riverview.org/press-release/riverview-health-announced-naming-sponsor-new-arena-innovation-mile-noblesville) and the [Current opening article](https://youarecurrent.com/2025/07/31/a-boom-for-noblesville-the-arena-at-innovation-mile-to-open-aug-8/) name no ticketing provider. |
| V16 | Murat Theatre at Old National Centre | **42026 (building-level only; room not verified)** | Ticketmaster's own [Old National Centre guide](https://blog.ticketmaster.com/venue-faq-old-national-centre-indianapolis-in/) links to [ticketmaster.com/old-national-centre-tickets-indianapolis/venue/42026](https://www.ticketmaster.com/old-national-centre-tickets-indianapolis/venue/42026). That ID is for the whole building, not a room, and fetching the page itself failed. |
| V18 | Egyptian Room at Old National Centre | **42026 (building-level only; room not verified)** | Same ID as V16. Do not attach the whole 42026 feed to both V16 and V18, or every event will be counted twice. Room-level split: **not verified**. |
| V17 | Clowes Memorial Hall | **not verified** | Search found no Ticketmaster venue page. The hall is listed on AXS as [venue 100846](https://www.axs.com/venues/100846/clowes-memorial-hall-indianapolis-tickets), so concerts here need an AXS source. |
| V19 | Hilbert Circle Theatre | **not verified** | Search found no Ticketmaster venue page. It is listed on AXS as [venue 102419](https://www.axs.com/de/venues/102419/hilbert-circle-theatre-indianapolis-tickets), and the [ISO sells tickets itself](https://www.indianapolissymphony.org/?p=2848). |
| V20 | The Palladium (Carmel) | **not verified** | Search found no Ticketmaster venue page. The Center for the Performing Arts sells through its own [Fifth Third Bank Box Office](https://thecenterpresents.org/tickets-events/fifth-third-bank-box-office-information/). |
| V15 | James T. Morris Arena | not verified (not yet open) | No listing expected yet. The [IU Indy facility page](https://iuindyjags.com/facilities/james-t-morris-arena/1036) names no ticketing provider. |

**Totals (updated in 2nd pass):**
- **Verified at room level:** 5 (V02, V05, V09, V11, and **V10 Corteva 41103, 2nd pass**).
- **Provisional (2nd pass):** 2. These are V04 Ruoff 41099 and V14 Riverview 42394, found in ticketmaster.com search results but with page fetches failing.
- **Building-level only:** 1 ID, 42026, covering V16 and V18. Not room-verified.
- **Not verified:** 3 (V17, V19, V20; AXS or own box office), plus V15, which has not opened.

**Not checked:** rooms the venue answer lists as sports-only or campus rooms. These are V01, V03, V06, V07, V08, V12, V13 and V21. V06 and V01 do host some events, such as [Gen Con at Victory Field](https://www.wfyi.org/wfyi-news/2026-07-30/a-sold-out-gen-con-returns-to-indianapolis-after-record-breaking-year) and the Snake Pit concert at IMS. Those are carried as event records (venue answer Table B), not concert rooms.

**Biggest concert-coverage gap:** Ruoff Music Center (V04), the region's largest amphitheater, has no verified Ticketmaster ID. **(2nd pass)** It now has a provisional ID, 41099; confirm it with a page fetch or the Discovery API before wiring.

---

## 3. Teams: league, home venue, free schedule feed and colors

**Feed IDs:**
- **ESPN feeds** were checked by fetching ESPN's public site API team record, which returns the team ID, name and abbreviation. The link in each row is that record.
- **Indianapolis Indians:** checked against the MLB Stats API team record.

**Colors:** no official team or league brand page with hex codes could be opened in this pass (see the failed fetches above). The table therefore gives:
- the hex codes in ESPN's public API (**secondary**: ESPN data, not a brand guide), and
- TeamColorCodes hex codes where its page cites an official-looking source (**secondary**).

Where they disagree, both are shown. **No row has an official brand-guide hex verified at first hand.** **(2nd pass update):** Butler now has official university hex codes, and IU Indy has official IU university hex codes (not an athletics palette). The Indians and Boom have official color *names* without hex. The Fuel, Boom and UIndy now have secondary hex codes. Official team brand pages for the Colts, Pacers, Fever, Indy Eleven, Ignite and Freight were not found.

| Team | League | Home venue row ID | Free schedule feed and ID | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| Indianapolis Colts | NFL | V02 | ESPN NFL, team ID **11** ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/ind)) | `#003B75` (ESPN) vs `#002C5F` "Speed Blue" (TCC) | `#FFFFFF` (ESPN) vs `#A2AAAD` gray (TCC) | **Secondary only, sources conflict.** [ESPN API](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/ind). [TeamColorCodes](https://teamcolorcodes.com/indianapolis-colts-color-codes/) cites no named source and is itself inconsistent about whether the secondary color is gray or white. **(2nd pass)** A third secondary source, [SportsBrackets (May 8, 2026)](https://sportsbrackets.net/2026/05/08/2026-indianapolis-colts-team-identity/), gives Speed Blue `#002C5F`, gray `#A5ACAF` and white `#FFFFFF`, and cites no external source. Official Colts brand source: still **gap** (no colts.com brand page found in search). |
| Indiana Pacers | NBA | V05 | ESPN NBA, team ID **11** ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/ind)). ESPN reuses ID 11 in a different sport, so key by sport and ID. | `#002D62` (TCC) vs `#0C2340` (ESPN) | `#FDBB30` (TCC) vs `#FFD520` (ESPN) | **Secondary.** [TeamColorCodes](https://teamcolorcodes.com/indiana-pacers-color-codes/) cites the NBA Media Central Pacers logo sheet, which was not opened. Compare [ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/ind). |
| Indiana Fever | WNBA | V05 | ESPN WNBA, team ID **5** ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams/ind)) | `#041E42` blue (TCC) vs `#002D62` (ESPN) | `#C8102E` red (TCC) vs `#E03A3E` (ESPN). TCC also lists yellow `#FFCD00`. | **Secondary.** [TeamColorCodes](https://teamcolorcodes.com/indiana-fever-color-codes/) cites the NBA Media Central Fever logo sheet, which was not opened. Compare [ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams/ind). |
| Indianapolis Indians | Triple-A International League (MiLB) | V06 | MLB Stats API, team ID **484**; venue ID **2858** for Victory Field ([MLB Stats API](https://statsapi.mlb.com/api/v1/teams/484)) | **gap** (hex). **(2nd pass)** Official name: **Wrought Iron Blue** (navy), "our foundation as a primary color" | **gap** (hex). **(2nd pass)** Official names: **Scarlet** (red) accent, plus **Gold** | **(2nd pass) Official names, no hex:** [MiLB.com, Sept 26, 2025, Indians unveil new logos](https://www.milb.com/app-firstpitch/bradenton/news/new-look-same-team-indianapolis-indians-unveil-new-team-logos). No hex or Pantone given. [logotyp.us](https://logotyp.us/logo/indianapolis-indians/) also has no hex. The TeamColorCodes page failed to fetch in pass 1, and the MLB Stats API team record has no colors. |
| Indy Eleven | USL Championship | V07 | ESPN `usa.usl.1`, team ID **17360** ([ESPN API teams list](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)) | `#13018C` (ESPN) vs **(2nd pass)** `#14213A` blue (BrandColorCode) | `#C60000` (ESPN) vs **(2nd pass)** `#CF1C2B` red (BrandColorCode); BCC also lists light blue `#75A8DE` and dark red `#87192E` | **Secondary, sources conflict.** ESPN; **(2nd pass)** [BrandColorCode](https://www.brandcolorcode.com/indy-eleven), which names the club site as its logo source and says its CMYK/Pantone values "have not been given explicitly in the Indy Eleven brand guidelines." Official club brand source: **gap**. |
| Indy Fuel | ECHL | V09 (2024–) | **No free feed (2nd pass confirmed: no ESPN or MLB-style API found).** **(2nd pass)** Official schedule is a PDF only: the [team's 2026–27 schedule release](https://indyfuelhockey.com/news/2026/05/fuel-announce-2026-27-regular-season-schedule) (36 home games at Fishers Event Center; home opener Fri Oct 16, 2026 vs Wheeling) links a [full-season calendar PDF](https://echl.s3.us-east-2.amazonaws.com/production/ind/uploads/files/IND_Schedule_Calendar_8.5x11.pdf); no ICS or data feed was linked. | **(2nd pass)** `#B92A30` red (secondary) | **(2nd pass)** `#FFC557` gold (secondary); black `#0B0D0C` | **(2nd pass) Secondary:** [logotyp.us](https://logotyp.us/logo/indy-fuel) (logo-derived; no team source cited). Wikipedia lists red, gold, black and white, with no hex codes ([Wikipedia](https://en.wikipedia.org/wiki/Indy_Fuel)). Official: **gap**. |
| Butler Bulldogs | NCAA D-I (conference not re-checked in this pass) | V08 (basketball, volleyball); V12 (football, soccer) | ESPN college, team ID **2086**. Verified for men's basketball ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2086), venue Hinkle Fieldhouse) and football ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2086), venue Sellick Bowl). | **(2nd pass) `#13294B` Butler Blue (official)**. Pass 1: `#13294B` (TCC) vs `#0D1361` (ESPN) | **(2nd pass) `#00A3E0` Bright Blue (official)**. Pass 1: `#747678` gray (TCC) vs `#00A3E0` (ESPN) | **(2nd pass) Official:** [Butler University color palette](https://www.butler.edu/marketing/color-palette/) lists "Primary Brand Colors": Butler Blue `13294B`, Bright Blue `00A3E0`, Medium Blue `3178A4`, Cool Gray `D1E0D7`. This is the university palette, not an athletics-only guide. It agrees with TCC's primary and ESPN's secondary. |
| IU Indianapolis Jaguars | NCAA D-I (Horizon League) | V21 → V15 (basketball, from 2026–27); V07 (soccer) | ESPN college, team ID **85**. ESPN already lists the venue as James T. Morris Arena ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/85)). | `#A81F30` (ESPN) vs **(2nd pass)** `#990000` IU Crimson (official, university) | `#D59F0F` gold (ESPN) vs **(2nd pass)** `#512A44` Dark Majestic (official, university) | ESPN is **secondary** (athletics gold). **(2nd pass) Official university palette:** the [IU Indianapolis promotional toolkit](https://plus.indianapolis.iu.edu/faculty-staff-resources/promotional-toolkit/index.html) says "The Profiles use IU branding" and lists Crimson `#990000` (primary) and Dark Majestic `#512A44` (secondary). The [IU retail style guide](https://licensing.iu.edu/doc/iu-retail-style-guide.pdf) also gives crimson `#990000`. Neither is a Jaguars athletics guide and neither lists the gold ESPN uses. [TeamColorCodes](https://teamcolorcodes.com/iupui-jaguars-color-codes/) (secondary, still under the old IUPUI name) gives `#9D2235` / `#DFD1A7`. Official **athletics** palette: **gap**. |
| Noblesville Boom *(added; in the venue answer but not in the brief's list)* | NBA G League | V05 (2023–2025); V14 (2025–) ([Wikipedia](https://en.wikipedia.org/wiki/Noblesville_Boom)) | **(2nd pass) ESPN `nba-development`, team ID 7**, abbreviation NOB ([ESPN API teams list](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams); [team record](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams/7)). The record lists a next event, NOB @ Windy City, Nov 6, 2026 (8:00 p.m. EST). **Venue mismatch:** ESPN's team record lists the venue as "Now Arena, Hoffman Estates, IL," not V14, so do not take the home venue from ESPN. | **(2nd pass)** `#002D62` (ESPN, secondary). Official name: navy | **(2nd pass)** `#FDBB30` (ESPN, secondary). Official names: gold and "supercharged cyan" (no hex) | Wikipedia lists navy, gold, cyan and white, with no hex codes ([Wikipedia](https://en.wikipedia.org/wiki/Noblesville_Boom)). **(2nd pass) Official names, no hex:** the [G League rebrand release, Apr 16, 2025](https://gleague.nba.com/news/indiana-mad-ants-rebrand-as-noblesville-boom) names the Pacers' "classic navy and gold" plus a "supercharged cyan" from the Pacers' 2023–24 City Edition. [SportsLogos.net](https://www.sportslogos.net/logos/view/694560602026/Noblesville-Boom-Logo/2026/Primary-Logo) names navy, cyan, white and yellow, with no hex. |
| Indy Ignite *(added)* | Major League Volleyball (PVF in 2025; merged into MLV from 2026) ([Wikipedia](https://en.wikipedia.org/wiki/Indy_Ignite)) | V09 | **No free feed verified.** Ticketmaster's [Fishers Event Center page](https://www.ticketmaster.com/fishers-event-center-billets-fishers/venue/42344) lists Ignite home matches, but that is a ticketing feed, not a free schedule feed. **(2nd pass) Confirmed no feed:** the league's [Indy Ignite schedule page](https://provolleyball.com/teams/indy-ignite/schedule) (linked from the [2026 schedule release, Oct 31, 2025](https://provolleyball.com/news/2025/10/2026-tickets-on-sale-now)) fetched as "No events to display," and no ICS or API link was exposed. | **gap** | **gap** | Wikipedia lists navy, light blue, orange, yellow and white, with no hex codes ([Wikipedia](https://en.wikipedia.org/wiki/Indy_Ignite)). **(2nd pass)** The league's [name-and-logo reveal, Jan 26, 2024](https://provolleyball.com/news/2024/01/indy-pro-volleyball-team-reveals-name-and-logo) describes a torch logo but names no colors or codes. Still **gap**. |
| Fishers Freight *(added)* | Indoor Football League ([Wikipedia](https://en.wikipedia.org/wiki/Fishers_Freight)) | V09 | **No free feed verified.** **(2nd pass)** The IFL league site publishes game releases under `goifl.com/sports/fball/2026/` ([example: 2026 opener in Fishers, "sold-out crowd"](https://goifl.com/sports/fball/2026/releases/20260315n7317e)), but its schedule page could not be fetched (client error), so no schedule feed is confirmed. No ESPN coverage found. | **gap** | **gap** | Wikipedia lists High Visibility Yellow, Steel Blue and Black, with no hex codes ([Wikipedia](https://en.wikipedia.org/wiki/Fishers_Freight)). **(2nd pass)** The team's [naming announcement](https://fishersfreightfootball.com/news/2023/12/15/general-your-new-professional-football-team-fishers-freight.aspx) names only yellow and says the colors match the Nickel Plate Road train; no codes. Still **gap**. |
| UIndy Greyhounds *(added)* | NCAA D-II (G-MAC from July 1, 2027) | V13 | **(2nd pass) ESPN college football, team ID 2292** ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2292)): "Indianapolis Greyhounds," venue Key Stadium, latest event Missouri S&T at Indianapolis, Oct 10, 2026 (Final, 48–14). Football only; other UIndy sports not checked. **Code clash:** ESPN abbreviates UIndy as "IND," the same as the Colts; key by sport and ID. | **(2nd pass)** `#A80C30` crimson (secondary) | **(2nd pass)** `#BDBCBC` grey (secondary) | **(2nd pass) Secondary:** [U.S. Team Colors](https://usteamcolors.com/university-of-indianapolis-colors/), which says the hex codes "are confirmed by the SVG logo on the Greyhounds' website." No official UIndy brand page was found in search. Official: **gap**. |

**Teams with a verified free feed (7):**
- Colts (ESPN 11)
- Pacers (ESPN 11)
- Fever (ESPN 5)
- Indians (MLB Stats API 484)
- Indy Eleven (ESPN 17360)
- Butler (ESPN 2086)
- IU Indy (ESPN 85)
- **(2nd pass)** Noblesville Boom (ESPN `nba-development` 7). Its venue field is wrong and its attendance is 0.
- **(2nd pass)** UIndy Greyhounds football (ESPN college football 2292). Its attendance is 0.

**Teams with no verified free feed (3, after the 2nd pass):**
- Indy Fuel: schedule PDF only
- Indy Ignite: the league schedule page is empty when fetched
- Fishers Freight: the IFL schedule page could not be fetched

**ESPN venue name mismatch:** ESPN's Pacers record lists the venue as Gainbridge Fieldhouse but still carries the short name "Bankers Life Fieldhouse" ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/ind)). When matching feed venue names to V05, accept both names.

---

## 4. Games away from the home venue (2025 on)

**Scope:** neutral-site, international and relocated games, so that none is placed at the team's usual home room.

**Not repeated here:** college events at V02 that are not any local team's home game. The venue answer already covers them: the 2026 Men's Final Four on Apr 4 and 6, 2026, the Big Ten Championship each December through 2028, and the 2028 Women's Final Four. Treat them as V02 event records with no Indianapolis home team.

| Team | Date | Game | Actual site | Home designation | Source |
|---|---|---|---|---|---|
| Indianapolis Colts | Nov 9, 2025 | vs Atlanta Falcons (W 31–25 OT), attendance 72,203 | Olympiastadion, Berlin, Germany | **Colts were the designated home team** ("Atlanta Falcons at Indianapolis Colts"). This was one of the Colts' nine 2025 home games, played away from V02. | [2025 Colts season (Wikipedia)](https://en.wikipedia.org/wiki/2025_Indianapolis_Colts_season); [2025 Falcons season (Wikipedia)](https://en.wikipedia.org/wiki/2025_Atlanta_Falcons_season) |
| Indianapolis Colts | Oct 4, 2026, 9:30 a.m. EDT | at Washington Commanders | Tottenham Hotspur Stadium, London | Listed as "Colts at Commanders," so Washington appears to be home. The page does not say so explicitly. In any case this is not a V02 game. | [2026 Colts season (Wikipedia)](https://en.wikipedia.org/wiki/2026_Indianapolis_Colts_season) |
| Indy Eleven | Feb 12, 2025 (preseason) | vs Pittsburgh Riverhounds, a friendly listed as a home match | Grand Park Sports Campus, Westfield. The page says only "scheduled to take place" there. | Home | [2025 Indy Eleven season (Wikipedia)](https://en.wikipedia.org/wiki/2025_Indy_Eleven_season) |
| Indy Eleven *(pre-2025 precedent)* | May 8, 2024 | U.S. Open Cup Round of 32 vs San Antonio FC, attendance 4,086 | Moved to Bud and Jackie Sellick Bowl (V12) | Home | [2024 Indy Eleven season (Wikipedia)](https://en.wikipedia.org/wiki/2024_Indy_Eleven_season) |
| Indiana Fever | May 4, 2025 (preseason) | Preseason game | Carver-Hawkeye Arena, Iowa City | Designation not stated | [2025 Fever season (Wikipedia)](https://en.wikipedia.org/wiki/2025_Indiana_Fever_season) |
| Indiana Fever | Apr 25, 2026 (preseason) | at New York | Barclays Center | Away | [2026 Fever season (Wikipedia)](https://en.wikipedia.org/wiki/2026_Indiana_Fever_season) |
| Indy Ignite | 2025 PVF playoffs (dates not captured) | Semifinal vs Omaha (W 3–2); final vs Orlando (L 1–3) | Lee's Family Forum, Las Vegas, a neutral playoff host | Neutral | [Indy Ignite (Wikipedia)](https://en.wikipedia.org/wiki/Indy_Ignite) |
| Indy Ignite *(2nd pass)* | May 7, 2026 | MLV semifinal vs Omaha (L 2–3) | Comerica Center, Frisco, Texas (MLV Championship site) | Neutral | [Larry in Fishers, May 4, 2026](https://www.larryinfishers.com/2026/05/04/ignite-close-regular-season-with-win-top-seed-heading-into-mlv-playoffs/); [May 7, 2026](https://www.larryinfishers.com/2026/05/07/ignite-season-ends-with-five-set-playoff-loss-to-omaha/) |
| Butler *(2nd pass)* | Dec 20, 2025 | Indy Classic vs Northwestern, attendance 16,912 | Gainbridge Fieldhouse (V05) | Neutral (event) | [Wikipedia 2025–26 Butler](https://en.wikipedia.org/wiki/2025–26_Butler_Bulldogs_men%27s_basketball_team) |
| Butler *(2nd pass, pre-2025 precedent)* | Dec 14, 2024 | Indy Classic vs Wisconsin, attendance 15,045 | Gainbridge Fieldhouse (V05) | Neutral (event) | [Wikipedia 2024–25 Butler](https://en.wikipedia.org/wiki/2024–25_Butler_Bulldogs_men%27s_basketball_team) |
| Butler *(2nd pass)* | Nov 21 and 23, 2025 | Greenbrier Tip-Off vs South Carolina and Virginia (1,209 each, as listed) | Colonial Hall, White Sulphur Springs, WV | Neutral | [Wikipedia 2025–26 Butler](https://en.wikipedia.org/wiki/2025–26_Butler_Bulldogs_men%27s_basketball_team) |
| IU Indy *(2nd pass)* | Nov 11, 2025 | Home vs IU Columbus, attendance 5,568 | **Corteva Coliseum (V10)**, not V21 | Home, relocated | [Wikipedia 2025–26 IU Indy](https://en.wikipedia.org/wiki/2025–26_IU_Indy_Jaguars_men%27s_basketball_team) |
| IU Indy *(2nd pass)* | Jan 1 and Mar 1, 2025 (also Nov 4, 2024) | Home vs Youngstown State (562), Wright State (1,448), IU Columbus (3,716) | **Corteva Coliseum (V10)**, not V21 | Home, relocated | [Wikipedia 2024–25 IU Indy](https://en.wikipedia.org/wiki/2024–25_IU_Indy_Jaguars_men%27s_basketball_team) |

**Gaps (no search budget left to check):**

| Team or event | What is missing |
|---|---|
| Pacers | NBA international or neutral games |
| Butler and IU Indy | **(2nd pass) Partly filled** for men's basketball (rows above). Women's basketball and other sports: still gap. |
| IU baseball at Victory Field | Dates for 2025 and 2026. The venue answer says it is one game a year. |
| Indy Fuel and Fishers Freight | Neutral-site games |
| 2025 Big Ten Championship | Exact date (December 2025, at V02) not re-fetched |

None was found in the pages that were read. That does not prove none exist.

---

## 5. Postseason and past crowds per team

**Range covered:** the 2023 season (or 2022–23) through the latest available, Oct 2026.

**What the counts are:** announced attendance from box-score data as carried by reference sites. All of it is **secondary** (Wikipedia, Basketball-Reference, StatsCrew), except two Colts games that ESPN's API also confirms.

**Regular season and postseason are kept apart.**

### 5a. Indianapolis Colts (V02)

**Postseason:** no home playoff games. The Colts did not make the playoffs in 2023, 2024 or 2025:
- 2023: 9–8 ([Wikipedia](https://en.wikipedia.org/wiki/2023_Indianapolis_Colts_season))
- 2024: 8–9 ([Wikipedia](https://en.wikipedia.org/wiki/2024_Indianapolis_Colts_season))
- 2025: 8–9 ([Wikipedia](https://en.wikipedia.org/wiki/2025_Indianapolis_Colts_season))

**Regular-season home crowds, per game (secondary):**

| Season | Home games at V02, announced attendance | Away-from-V02 home game | Source |
|---|---|---|---|
| 2023 | Sept 10 JAX 65,749. Oct 1 LAR 65,337. Oct 8 TEN 65,287. Oct 22 CLE 65,552. Oct 29 NO 65,427. Nov 26 TB **not listed (gap)**. Dec 16 PIT 64,171. Dec 31 LV 65,538. Jan 6 HOU 65,925. | — | [Wikipedia](https://en.wikipedia.org/wiki/2023_Indianapolis_Colts_season) |
| 2024 | Sept 8 HOU 65,306. Sept 22 CHI 66,624. Sept 29 PIT 66,376. Oct 20 MIA 66,299. Nov 10 BUF 66,474. Nov 24 DET 66,696. Dec 22 TEN 65,322. Jan 5 JAX 63,041. | — | [Wikipedia](https://en.wikipedia.org/wiki/2024_Indianapolis_Colts_season) (from the game summaries) |
| 2025 | Sept 7 MIA 64,065. Sept 14 DEN 63,910. Oct 5 LV 64,955. Oct 12 ARI 65,523. Oct 26 TEN 65,816. Nov 30 HOU 65,977. Dec 22 SF 66,265. Dec 28 JAX 66,080. | Nov 9 ATL in Berlin, 72,203. **Not a V02 crowd.** | [Wikipedia](https://en.wikipedia.org/wiki/2025_Indianapolis_Colts_season). The first two games match the [ESPN schedule API](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/11/schedule?season=2025). |
| 2026 (in progress) | Sept 13 BAL 65,045. Sept 27 HOU **not listed (gap)**. | — | [Wikipedia](https://en.wikipedia.org/wiki/2026_Indianapolis_Colts_season) |

### 5b. Indiana Pacers (V05)

**Regular-season home attendance totals (secondary, Basketball-Reference):**

| Season | Total (league rank) | Source |
|---|---|---|
| 2022–23 | 641,562 (29th of 30) | [BBRef](https://www.basketball-reference.com/teams/IND/2023.html) |
| 2023–24 | 677,554 (29th of 30) | [BBRef](https://www.basketball-reference.com/teams/IND/2024.html) |
| 2024–25 | 685,434 (26th of 30) | [BBRef](https://www.basketball-reference.com/teams/IND/2025.html) |
| 2025–26 | 682,287 (25th of 30). Record 19–63, no playoffs. | [BBRef](https://www.basketball-reference.com/teams/IND/2026.html) |

**Postseason home games (secondary, Basketball-Reference box-score attendance):**

| Season | Home playoff games (date, opponent) | Announced attendance | Source |
|---|---|---|---|
| 2023 | None. Missed the playoffs (35–47). | — | [BBRef](https://www.basketball-reference.com/teams/IND/2023.html) |
| 2024 | Apr 26, Apr 28, May 2 vs MIL. May 10, May 12, May 17 vs NYK. May 25, May 27 vs BOS. (8 games) | 17,274 each game | [BBRef 2024 games](https://www.basketball-reference.com/teams/IND/2024_games.html) |
| 2025 | Apr 19, Apr 22, Apr 29 vs MIL. May 9, May 11 vs CLE. May 25, May 27, May 31 vs NYK. Jun 11, Jun 13, Jun 19 vs OKC (NBA Finals). (11 games) | 17,274 each game | [BBRef 2025 games](https://www.basketball-reference.com/teams/IND/2025_games.html) |
| 2026 | None (19–63) | — | [BBRef](https://www.basketball-reference.com/teams/IND/2026.html) |

**Note on the 17,274 figure:** every playoff game shows exactly 17,274. That is the basketball capacity [Ticketmaster gives](https://blog.ticketmaster.com/step-inside-gainbridge-fieldhouse-in-indianapolis/) for V05, so these are sellout figures as announced, not turnstile counts.

### 5c. Indiana Fever (V05)

| Season | Regular-season home crowds | Postseason home games and attendance | Source |
|---|---|---|---|
| 2024 | Season total home attendance **340,715**, described as a WNBA single-season record. Average not given. | No home playoff game confirmed. Game 1 was at Mohegan Sun (8,910). The Game 2 row is incomplete. | [2024 Fever season (Wikipedia)](https://en.wikipedia.org/wiki/2024_Indiana_Fever_season) |
| 2025 | Per-game figures only. Season total: still **gap** (2nd pass: the Wikipedia page states no home total; [Front Office Sports, Sept 9, 2025](https://frontofficesports.com/article/wnba-breaks-3m-attendance-milestone-in-seasons-final-week/) gives only "nearly 700,000" home and road combined, which is not a home figure). | Sept 16 vs ATL (first round, G2): 16,682. Sept 26 vs LV (semis, G3): 16,507. Sept 28 vs LV (semis, G4): 16,022. | [2025 Fever season (Wikipedia)](https://en.wikipedia.org/wiki/2025_Indiana_Fever_season). The dates match the [BBRef schedule](https://www.basketball-reference.com/wnba/teams/IND/2025_games.html), which has no attendance column. |
| 2026 | Examples only, from the venue answer: 17,002 on June 4 and 14,505 on May 17. Season total: still **gap** (the Wikipedia page gives per-game figures only). | **(2nd pass)** Clinched a playoff berth ([Wikipedia](https://en.wikipedia.org/wiki/2026_Indiana_Fever_season)). Lost a three-game series to Las Vegas, 1–2. **One home playoff game: Sept 29, 2026 vs Las Vegas at V05 (W 99–89), attendance 16,298.** Away games: Sept 27 (10,207) and Oct 1 local time (10,388), both at Michelob ULTRA Arena. Source: [ESPN schedule API, postseason](https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams/5/schedule?season=2026&seasontype=3) (ESPN data, secondary). The round name is not stated in the feed. | [2026 Fever season (Wikipedia)](https://en.wikipedia.org/wiki/2026_Indiana_Fever_season); [ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams/ind) |

### 5d. Indianapolis Indians (V06)

**Regular season (secondary, StatsCrew):**

| Season | Total | Average | Source |
|---|---|---|---|
| 2022 | 534,610 | 7,425 | [StatsCrew](https://www.statscrew.com/venues/v-1219) |
| 2023 | 556,775 | 7,842 | [StatsCrew](https://www.statscrew.com/venues/v-1219) |
| 2024 | 588,363 | 8,405 | [StatsCrew](https://www.statscrew.com/venues/v-1219) |
| 2025 | 570,677 | 7,817 | [StatsCrew](https://www.statscrew.com/venues/v-1219) |
| 2026 | **(2nd pass) 555,657 (official)**, "the second-highest attendance in all of Triple-A" | **gap** (not stated) | **(2nd pass)** [MiLB.com / Indians, Sept 30, 2026](https://www.milb.com/indianapolis/news/for-the-circle-city-a-winning-season-on-and-off-the-field) |

**Postseason:** **gap.** No source was checked for Triple-A postseason home games.

### 5e. Indy Eleven (V07)

| Season | Average home league attendance | Postseason home games | Source |
|---|---|---|---|
| 2023 | Not stated (**gap**) | None. The one playoff match was away at Charleston, Oct 22, 2023 (L 0–5, 2,972). | [Wikipedia](https://en.wikipedia.org/wiki/2023_Indy_Eleven_season) |
| 2024 | 9,795 | **Nov 3, 2024, Conference Quarterfinal vs Rhode Island FC (L 2–3): 7,623** | [Wikipedia](https://en.wikipedia.org/wiki/2024_Indy_Eleven_season) |
| 2025 | 9,465 | None (did not qualify). The Aug 20 USL Cup quarterfinal vs Greenville drew 4,043. That is a cup match, not a playoff game. | [Wikipedia](https://en.wikipedia.org/wiki/2025_Indy_Eleven_season) |
| 2026 (in progress) | 8,608 (infobox; its standing is "as of July 7, 2026") | TBD. The page's standings conflict (5th vs 7th, dated Aug 15). | [Wikipedia](https://en.wikipedia.org/wiki/2026_Indy_Eleven_season) |

### 5f. Indy Fuel (V10 through 2024; V09 from 2024)

| Season | Postseason | Home playoff attendance | Regular-season attendance | Source |
|---|---|---|---|---|
| 2022–23 | Lost 0–4 to Toledo, first round | **gap** | **(2nd pass)** 4,570 per game (secondary) at V10 | [Wikipedia](https://en.wikipedia.org/wiki/Indy_Fuel); attendance [HockeyDB](https://www.hockeydb.com/stte/indy-fuel-11547.html) |
| 2023–24 | Lost 1–4 to Wheeling, first round | **gap** | **(2nd pass)** 4,853 per game (secondary) at V10 | [Wikipedia](https://en.wikipedia.org/wiki/Indy_Fuel); [HockeyDB](https://www.hockeydb.com/stte/indy-fuel-11547.html) |
| 2024–25 | Lost 0–4 to Toledo, first round | **gap** | **(2nd pass)** 5,648 per game, 15 sellouts (a franchise record, previous 12); final home game Apr 11 vs Kalamazoo drew 6,720. First season at V09. | [Wikipedia](https://en.wikipedia.org/wiki/Indy_Fuel); [Current, "Sellout season"](https://www.youarecurrent.com/2025/05/05/sellout-season-indy-fuel-drew-capacity-home-crowds-at-new-fishers-event-center/) (reported; article undated on the page, URL dated May 5, 2025); HockeyDB also shows 5,648 |
| 2025–26 | Lost 1–4 to Fort Wayne, first round | **gap** | **(2nd pass)** 5,152 per game (secondary) at V09 | [Wikipedia](https://en.wikipedia.org/wiki/Indy_Fuel); [HockeyDB](https://www.hockeydb.com/stte/indy-fuel-11547.html) |

**(2nd pass) Note on HockeyDB:** its "Atten." column is not labeled total or average. It is treated as a per-game average because the 2024–25 value (5,648) matches the average reported by Current. Season totals: **gap**. Home playoff game counts: still **gap** (ECHL box scores not checked). The [ECHL's April 2026 attendance release](https://echl.com/news/2026/04/echl-attendance-surpasses-5000-fans-per-game) names only the top five teams; the Fuel are not among them.

### 5g. Noblesville Boom (V05 for 2023–25; V14 from 2025)

| Season | Postseason | Attendance | Source |
|---|---|---|---|
| 2023–24 | Lost the quarterfinal to Delaware, 101–123. Site not stated. | **gap** | [Wikipedia](https://en.wikipedia.org/wiki/Noblesville_Boom) |
| 2024–25 | Beat Greensboro 120–110 in the quarterfinal, then lost the semifinal to Osceola 114–129. Sites not stated. | **gap** | [Wikipedia](https://en.wikipedia.org/wiki/Noblesville_Boom) |
| 2025–26 | Did not qualify | Regular season: **gap**. The venue answer notes only that opening night [sold out](https://www.stadiumjourney.com/stadiums/the-arena-at-innovation-mile-noblesville-boom). **(2nd pass)** ESPN's feed returns attendance **0** for Boom home games (example: Nov 8/9, 2025 vs Grand Rapids, listed at "The Arena at Innovation Mile"), so the feed gives no crowd history, as in Tampa Bay ([ESPN schedule API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams/7/schedule?season=2026)). The [season-finale recap, Mar 26, 2026](https://noblesville.gleague.nba.com/news/boom-tops-charge-in-season-finale) gives no attendance. | [Wikipedia](https://en.wikipedia.org/wiki/Noblesville_Boom) |

### 5h. Indy Ignite (V09)

| Season | Postseason | Attendance | Source |
|---|---|---|---|
| 2025 (PVF) | Finalist. Playoffs were at a neutral site in Las Vegas, so there were **no home playoff games**. | Season figures: **gap**. The venue answer gives only a [reported first-match sellout of 7,000](https://stadiumjourney.com/stadiums/fishers-event-center-indy-ignite). | [Wikipedia](https://en.wikipedia.org/wiki/Indy_Ignite) |
| 2026 (MLV) | The Wikipedia page is stale. **(2nd pass)** Finished 23–5 (13–1 at home in Fishers) as the No. 1 seed. Lost the semifinal to Omaha in five sets on May 7, 2026 in **Frisco, Texas** (Comerica Center, the neutral MLV Championship site), so **no home playoff games**. | Season and per-match figures: still **gap**. No 2026 crowd counts were found in [Larry in Fishers](https://www.larryinfishers.com/2026/05/07/ignite-season-ends-with-five-set-playoff-loss-to-omaha/), [Hoodline](https://hoodline.com/2026/05/indy-ignite-torch-mlv-record-books-with-23-5-thrill-ride/) or [Towne Post](https://townepost.com/indiana/fishers/indy-ignite-matches-are-the-place-to-be/). | (2nd pass) [Larry in Fishers, May 4, 2026](https://www.larryinfishers.com/2026/05/04/ignite-close-regular-season-with-win-top-seed-heading-into-mlv-playoffs/) (reported); [Larry in Fishers, May 7, 2026](https://www.larryinfishers.com/2026/05/07/ignite-season-ends-with-five-set-playoff-loss-to-omaha/) |

### 5i. Fishers Freight, Butler, IU Indy and UIndy

**Gap.** For each of these, the brief asked for seasonal postseason and regular-season crowd history; none was collected:
- **Fishers Freight:** its [Wikipedia page](https://en.wikipedia.org/wiki/Fishers_Freight) has no records or attendance. **(2nd pass)** Postseason: none. The team went 7–9 in 2025 and 8–8 in 2026 and missed the playoffs both years ([Larry in Fishers, Aug 16, 2026](https://www.larryinfishers.com/2026/08/16/fishers-freight-ifl-championship-expansion/), reported). Crowds: the league described the [Mar 2026 opener in Fishers as "a sold-out crowd"](https://goifl.com/sports/fball/2026/releases/20260315n7317e) with no number. Numeric attendance: still **gap**.
- **Butler, IU Indy and UIndy:** not researched in pass 1. **(2nd pass)** Filled below for men's basketball (Butler, IU Indy) and football (UIndy). Other sports: still **gap**.

#### (2nd pass) Butler men's basketball (V08), announced per-game attendance (secondary, Wikipedia box-score tables)

| Season | Regular-season home games at V08 | Postseason home games | Source |
|---|---|---|---|
| 2023–24 (18–15) | 17 games, from 6,262 (Dec 5, Buffalo) to 9,237 (Jan 27, Villanova). Full list: Nov 6 EMU 6,792; Nov 10 SEMO 7,072; Nov 13 ETSU 6,511; Nov 30 Texas Tech 7,893; Dec 5 Buffalo 6,262; Dec 9 Cal 8,032; Dec 15 Saginaw Valley 6,431; Dec 19 Georgetown 6,915; Jan 5 UConn 9,163; Jan 13 Seton Hall 7,777; Jan 20 DePaul 8,553; Jan 27 Villanova 9,237; Feb 10 Providence 8,934; Feb 13 Marquette 8,344; Feb 17 Creighton 9,176; Feb 28 St. John's 7,279; Mar 6 Xavier 8,976. | **Mar 19, 2024, NIT first round vs Minnesota at V08: 3,478** (L 72–73) | [Wikipedia 2023–24](https://en.wikipedia.org/wiki/2023–24_Butler_Bulldogs_men%27s_basketball_team) |
| 2024–25 | 17 regular-season games plus an exhibition (Oct 30, Illinois Wesleyan, 5,844). Nov 4 Missouri State 7,887; Nov 8 Austin Peay 7,193; Nov 11 W. Michigan 6,855; Nov 15 SMU 7,798; Nov 22 Merrimack 6,823; Dec 3 E. Illinois 6,886; Dec 10 NDSU 6,980; Dec 21 UConn 9,100; Jan 1 Villanova 8,284; Jan 11 Creighton 8,134; Jan 15 Seton Hall 6,607; Jan 25 DePaul 8,704; Jan 28 Marquette 7,423; Feb 8 Providence 8,312; Feb 15 Georgetown 8,844; Feb 26 St. John's 7,086; Mar 5 Xavier 8,225. The first five match the [ESPN schedule API](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2086/schedule?season=2025). | None. Postseason games were at MSG (Big East) and MGM Grand Garden Arena (College Basketball Crown: Mar 31, 2,119; Apr 2, 2,512). | [Wikipedia 2024–25](https://en.wikipedia.org/wiki/2024–25_Butler_Bulldogs_men%27s_basketball_team) |
| 2025–26 (16–16) | 17 games: Nov 5 S. Indiana 6,855; Nov 8 IU Indy 7,132; Nov 11 Chicago St 6,159; Nov 28 Wright St 7,277; Dec 2 E. Michigan 6,423; Dec 6 Boise St 7,422; Dec 13 Providence 7,321; Dec 22 NJIT 6,304; Jan 3 Villanova 8,034; Jan 6 St. John's 6,523; Jan 20 DePaul 6,336; Jan 23 Marquette 8,033; Jan 31 Georgetown 7,755; Feb 11 UConn 8,644; Feb 15 Seton Hall 6,773; Feb 21 Xavier 9,100; Mar 4 Creighton 6,895. Exhibitions: Oct 17 Notre Dame 7,887; Oct 29 Indiana State 6,994. | None (Big East first round at MSG, attendance not listed) | [Wikipedia 2025–26](https://en.wikipedia.org/wiki/2025–26_Butler_Bulldogs_men%27s_basketball_team) |

Season totals and averages are not stated on these pages. A capacity of 9,100 (V08) is reached in two listed games (Dec 21, 2024 and Feb 21, 2026). Butler women's basketball, football (V12), volleyball and soccer: **gap**.

#### (2nd pass) IU Indy men's basketball (V21, with some games at V10), announced per-game attendance (secondary)

| Season | Home games | Postseason | Source |
|---|---|---|---|
| 2024–25 (10–22) | **V21 The Jungle:** Nov 12 Goshen 765; Nov 14 EMU 752; Nov 30 Trinity Christian 676; Dec 4 Green Bay 615; Dec 7 NKU 536; Jan 9 Detroit Mercy 667; Jan 19 Cleveland St 868; Jan 25 PFW 1,102 (the page misprints the year as 2024); Feb 5 Milwaukee 657; Feb 12 Oakland 709; Feb 27 Robert Morris 1,280. **V10 Corteva Coliseum:** Nov 4 IU Columbus 3,716; Jan 1 Youngstown St 562; Mar 1 Wright St 1,448. | No home postseason game. Lost the Horizon first round at Wright State, Mar 4, 2025 (2,488). | [Wikipedia 2024–25](https://en.wikipedia.org/wiki/2024–25_IU_Indy_Jaguars_men%27s_basketball_team) |
| 2025–26 (7–25) | **V21:** Nov 6 LIU 768; Nov 29 Morehead St 564; Dec 6 Youngstown St 629; Dec 11 Green Bay 676; Dec 16 Miami Middletown 529; Jan 4 Wright St 525; Jan 15 Robert Morris 732; Jan 17 Detroit Mercy 742; Feb 7 Cleveland St 1,017; Feb 10 Milwaukee 631; Feb 12 NKU 712; Feb 25 Oakland 617; Feb 28 PFW 1,117 (rescheduled from Jan 25). **V10:** Nov 11 IU Columbus 5,568. | No home postseason game. Lost the Horizon play-in at Cleveland State, Mar 2, 2026 (1,684). | [Wikipedia 2025–26](https://en.wikipedia.org/wiki/2025–26_IU_Indy_Jaguars_men%27s_basketball_team) |

2023–24 (the last IUPUI season, at V10): **gap**, not fetched. IU Indy women's basketball and volleyball: **gap**.

#### (2nd pass) UIndy football (V13)

| Season | Regular-season home crowds | Postseason home games (NCAA D-II) | Source |
|---|---|---|---|
| 2025 | Home games at V13: Sept 13 Ashland, Sept 20 McKendree, Oct 4 William Jewell, Oct 18 Lincoln, Nov 15 Upper Iowa. Attendance: **gap**, except the venue answer's [estimated 5,445 at homecoming](https://reflector.uindy.edu/?p=50237). ESPN's feed returns attendance **0** for every 2025 game ([ESPN schedule API](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2292/schedule?season=2025)), and the [UIndy 2025 schedule page](https://athletics.uindy.edu/sports/football/schedule/2025) shows no attendance. | **Nov 22, 2025, first round vs Truman (W 57–14): attendance gap.** **Nov 29, 2025, second round vs Minnesota State (L 27–35): 1,541 (official box score)** ([UIndy box score](https://athletics.uindy.edu/sports/football/stats/2025/minnesota-state/boxscore/13582)). | [UIndy schedule](https://athletics.uindy.edu/sports/football/schedule/2025) (official) |
| 2023, 2024, 2026 | **gap** | **gap** | Not fetched |

**Tampa Bay-style warning (updated, 2nd pass):** the Fuel now have per-season averages (secondary) and Butler and IU Indy men's basketball have per-game counts. The **Boom, Ignite and Freight still have no numeric crowd history**, and ESPN returns 0 for both the Boom and UIndy football, so feeds will not fill these.

---

## 6. Capacities still open (item 7)

**One sourced figure per setup. Conflicting sources are shown side by side. Nothing is invented.**

### V14 — Riverview Health Arena at Innovation Mile

| Setup | Sourced figure | Source | Note |
|---|---|---|---|
| Basketball (Noblesville Boom games) | **3,500** | [The Reporter, Jul 31, 2025](https://readthereporter.com/the-arena-is-ready-for-its-close-up/): "will seat 3,500 fans for Boom games" | Sourced |
| Standard fixed seating | **3,400 fixed + 100 suite seats** | [Current](https://youarecurrent.com/2025/07/31/a-boom-for-noblesville-the-arena-at-innovation-mile-to-open-aug-8/) | Sourced. Wikipedia gives [3,400](https://en.wikipedia.org/wiki/Riverview_Health_Arena_at_Innovation_Mile) with no setup and no direct citation. |
| Other events / floor seating | **4,200** | [The Reporter](https://readthereporter.com/the-arena-is-ready-for-its-close-up/) ("expanding to 4,200 for other events") and [Current](https://youarecurrent.com/2025/07/31/a-boom-for-noblesville-the-arena-at-innovation-mile-to-open-aug-8/) ("up to 4,200" with floor seating) | Two sources agree |
| Concerts | **4,500** (**re-checked, 2nd pass**) | [Small Market Meetings, May 1, 2025](https://smallmarketmeetings.com/articles/whats-new-indiana/): "can hold up to 4,500 people for a concert." | Single source, written before the arena opened. **(2nd pass)** The same article says "3,500 fixed seats, most of which are retractable," against Current's 3,400 fixed plus 100 suite seats. |
| Unspecified setup | 4,000, **not re-checked** | [Visit Hamilton County](https://www.visithamiltoncounty.com/sports-authority/facilities/arena-innovation-mile/), carried from the venue answer. This pass got HTTP 429. | Not tied to a setup, so do not wire it |

Every sourced setup is under 5,000, so the room stays in the pre-list and muted. **Concert setup (2nd pass):** 4,500 has now been re-read on its source page (May 1, 2025, pre-opening). It is a single pre-opening source, so wire it marked as one source.

### V15 — James T. Morris Arena (IU Indianapolis; not yet open)

| Setup | Sourced figure(s), side by side | Source | Note |
|---|---|---|---|
| Basketball / volleyball | **About 4,500** (official) vs **4,200 seats** (reported) vs 4,000 (reported, not re-checked) | About 4,500: [IU Indy Athletics facility page](https://iuindyjags.com/facilities/james-t-morris-arena/1036) ("a basketball/volleyball court with seats for 4,500 patrons") and [IU Capital Projects](https://cpf.iu.edu/capital-projects/projects/athletics/james-t-morris-arena.html) ("approximately 4,500 patrons"). 4,200: [WRTV, Aug 10, 2026, updated Sept 3, 2026](https://www.wrtv.com/sports/college/take-a-look-at-iu-indys-new-arena-set-to-open-this-fall). 4,000: [Stadium Journey](https://www.stadiumjourney.com/stadiums/the-jungle-iu-indy-jaguars), carried from the venue answer. | The official figures are approximate and planning-stage, and the newer press figure is lower. Sources disagree, so list both. **Recommend leaving it blank until IU publishes an as-built figure after opening** (completion: [Sept 2026](https://cpf.iu.edu/capital-projects/projects/athletics/james-t-morris-arena.html) or ["late in 2026"](https://iuindyjags.com/facilities/james-t-morris-arena/1036)). |
| Concerts / other | **gap** | No source gives a concert or end-stage setup. Searched: the IU Indy facility page, IU Capital Projects and WRTV. | Blank, on the gaps list |

Every figure is under 5,000. The room counts as pre-list and muted on any of them.

---

## End-of-answer summary

### 1. Name, short form, code and covered area

| Item | Value |
|---|---|
| Name | Indianapolis |
| Short form | Indy |
| Code | IND |
| Covered area (core) | Marion County, including Beech Grove, Lawrence, Southport and Speedway; Hamilton County (Noblesville, Fishers, Carmel, Westfield); Hendricks County (Brownsburg) |
| Search area | The 11-county MSA |
| Alias | "Indiana" (Pacers, Fever) is a team-name alias, not a city name |

The sources are in section 1.

### 2. Ticketmaster venue IDs

| Venue row ID | Room | TM venue ID | Verification |
|---|---|---|---|
| V02 | Lucas Oil Stadium | 41855 | [venue page](https://www.ticketmaster.com/lucas-oil-stadium-tickets-indianapolis/venue/41855?page=1) |
| V04 | Ruoff Music Center | 41099 (2nd pass, provisional) | [TM search result](https://www.ticketmaster.com/ruoff-music-center-tickets-noblesville/venue/41099); page fetch failed |
| V05 | Gainbridge Fieldhouse | 41417 | [linked from TM guide](https://blog.ticketmaster.com/venue-faq-gainbridge-fieldhouse-indianapolis-in/) |
| V09 | Fishers Event Center | 42344 | [venue page](https://www.ticketmaster.com/fishers-event-center-billets-fishers/venue/42344) |
| V10 | Corteva Coliseum | 41103 (2nd pass) | [venue page](https://www.ticketmaster.com/corteva-coliseum-tickets-indianapolis/venue/41103) |
| V11 | Everwise Amphitheater | 41695 | [venue page](https://www.ticketmaster.com/amphitheater-at-white-river-state-park-tickets-indianapolis/venue/41695) |
| V14 | Riverview Health Arena | 42394 (2nd pass, provisional) | [TM search result](https://www.ticketmaster.com/riverview-health-arena-at-innovation-mile-tickets-noblesville/venue/42394); page fetch failed |
| V16 | Murat Theatre | 42026 (building) | [linked from TM guide](https://blog.ticketmaster.com/venue-faq-old-national-centre-indianapolis-in/); room-level not verified |
| V18 | Egyptian Room | 42026 (building) | same; room-level not verified |
| V17 | Clowes Memorial Hall | — | not verified (AXS seller) |
| V19 | Hilbert Circle Theatre | — | not verified (AXS / ISO) |
| V20 | The Palladium | — | not verified (own box office) |
| V15 | James T. Morris Arena | — | not verified (not open) |

### 3. Team table

| Team | League | Home row | Free feed and ID | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| Colts | NFL | V02 | ESPN 11 | #003B75 / #002C5F (conflict) | #FFFFFF / #A2AAAD / #A5ACAF (conflict) | Secondary (ESPN; TCC; SportsBrackets, 2nd pass) |
| Pacers | NBA | V05 | ESPN 11 | #002D62 / #0C2340 | #FDBB30 / #FFD520 | Secondary (TCC citing NBA logo sheet; ESPN) |
| Fever | WNBA | V05 | ESPN 5 | #041E42 / #002D62 | #C8102E / #E03A3E | Secondary (TCC citing NBA logo sheet; ESPN) |
| Indians | Triple-A IL | V06 | MLB Stats API 484 | gap (official name: Wrought Iron Blue, 2nd pass) | gap (official names: Scarlet, Gold, 2nd pass) | Official names only (MiLB.com) |
| Indy Eleven | USL Championship | V07 | ESPN 17360 | #13018C / #14213A (2nd pass) | #C60000 / #CF1C2B (2nd pass) | Secondary (ESPN; BrandColorCode) |
| Indy Fuel | ECHL | V09 | no feed (schedule PDF only, 2nd pass) | #B92A30 (2nd pass) | #FFC557 (2nd pass) | Secondary (logotyp.us) |
| Butler | NCAA D-I | V08 / V12 | ESPN 2086 | **#13294B (official, 2nd pass)** | **#00A3E0 (official, 2nd pass)** | Official (butler.edu color palette) |
| IU Indy | NCAA D-I Horizon | V21→V15 / V07 | ESPN 85 | #A81F30 (ESPN) / #990000 (IU official, 2nd pass) | #D59F0F (ESPN) / #512A44 (IU official, 2nd pass) | Secondary athletics (ESPN); official university (IU) |
| Noblesville Boom | G League | V14 | **ESPN nba-development 7 (2nd pass)**; ESPN venue field is wrong | #002D62 (ESPN, 2nd pass) | #FDBB30 (ESPN, 2nd pass) | Secondary (ESPN); official names navy, gold, cyan (G League) |
| Indy Ignite | MLV | V09 | no feed (2nd pass confirmed) | gap | gap | — |
| Fishers Freight | IFL | V09 | no feed (league schedule page not fetchable) | gap | gap | — |
| UIndy | NCAA D-II | V13 | **ESPN college football 2292 (2nd pass)**; ESPN abbreviation "IND" | #A80C30 (2nd pass) | #BDBCBC (2nd pass) | Secondary (U.S. Team Colors) |

### 4. Games away from the home venue

| Date | Game | Site | Note |
|---|---|---|---|
| Nov 9, 2025 | Colts home vs Falcons | Berlin, Olympiastadion | Colts were the designated home team |
| Oct 4, 2026 | Colts at Commanders | London, Tottenham Hotspur Stadium | Colts away |
| Feb 12, 2025 | Indy Eleven preseason friendly | Grand Park, Westfield | Listed as a home match |
| May 4, 2025 | Fever preseason | Carver-Hawkeye Arena, Iowa City | Home designation not stated |
| 2025 (dates gap) | Ignite PVF playoffs | Neutral site, Las Vegas | — |
| May 7, 2026 (2nd pass) | Ignite MLV semifinal | Comerica Center, Frisco, TX | Neutral |
| Dec 20, 2025 (2nd pass) | Butler vs Northwestern, Indy Classic | Gainbridge Fieldhouse (V05), 16,912 | Neutral event, not V08 |
| Nov 11, 2025 (2nd pass) | IU Indy home vs IU Columbus | Corteva Coliseum (V10), 5,568 | Relocated home game, not V21 |

College neutral-site events at V02 are already in the venue answer. Details and remaining gaps are in section 4.

### 5. Postseason and past crowds

**Home postseason games found:**
- **Pacers 2024:** 8 home games, 17,274 each.
- **Pacers 2025:** 11 home games, 17,274 each.
- **Fever 2025:** 3 home games: 16,682, 16,507 and 16,022.
- **Indy Eleven 2024:** 1 home game: 7,623.
- **Colts 2023–2025:** none.
- **(2nd pass) Fever 2026:** 1 home game, Sept 29, 2026: 16,298 (ESPN).
- **(2nd pass) Butler 2024:** NIT first round at V08, Mar 19, 2024: 3,478.
- **(2nd pass) UIndy 2025:** 2 NCAA D-II home games. Nov 29 drew 1,541 (official box score). Nov 22: gap.
- **(2nd pass) Ignite 2025 and 2026, IU Indy 2025 and 2026, Freight 2025 and 2026:** no home postseason games.

**Regular-season figures found:**

| Team | Measure | Seasons covered |
|---|---|---|
| Colts | Per game | 2023–2026 |
| Pacers | Season totals | 2022–23 to 2025–26 |
| Indians | Totals and averages; 2026 total only (2nd pass, official) | 2022–2026 |
| Indy Eleven | Averages | 2024–2026 |
| Fever | 2024 season total | 2024 only |
| Indy Fuel (2nd pass) | Per-game averages (secondary) | 2022–23 to 2025–26 |
| Butler men's basketball (2nd pass) | Per game (secondary) | 2023–24 to 2025–26 |
| IU Indy men's basketball (2nd pass) | Per game (secondary) | 2024–25 to 2025–26 |

**Gaps (after the 2nd pass):**
- Numeric crowds for the Boom, Ignite and Freight, and for UIndy's regular season.
- Fuel season totals and home playoff crowds.
- Other Butler, IU Indy and UIndy sports.
- The Fever 2025 and 2026 home season totals.

### 6. Capacities

**V14 Riverview Health Arena:**

| Setup | Figure | Status |
|---|---|---|
| Basketball | 3,500 | Sourced |
| Fixed seating | 3,400 + 100 suite seats | Sourced |
| Other events / floor | 4,200 | Sourced by two articles |
| Concerts | 4,500 | Re-checked in the 2nd pass (single pre-opening source, May 1, 2025) |

**V15 James T. Morris Arena:**
- **Basketball/volleyball:** about 4,500 (official) vs 4,200 (WRTV). Sources conflict; leave blank until an as-built figure is published.
- **Concerts:** gap.

### Gaps list to carry into the city build

1. **Ticketmaster IDs (updated in the 2nd pass):**
   - Still none for V17, V19 or V20, which sell through AXS or their own box office.
   - V04 (41099) and V14 (42394) are provisional; confirm them.
   - V16 and V18 have only the building-level ID 42026.
   - V10 is now verified (41103).
2. **Official brand-guide hex codes (updated in the 2nd pass):**
   - Official: Butler (university palette) and IU Indy (IU university palette, not athletics).
   - The Indians and Boom have official color names but no official hex.
   - The Ignite and Freight have no hex at all.
   - Everyone else has secondary hex only.
3. **Free schedule feeds (updated in the 2nd pass):**
   - Still none for the Fuel (ECHL), Ignite (MLV) or Freight (IFL).
   - The Boom and UIndy football now have ESPN IDs, but ESPN returns attendance 0 for both.
4. **Crowd history:** see the updated gaps under section 5 above.
5. **Capacities:** the V14 concert figure of 4,500 has been re-checked (2nd pass). V15 still has conflicting basketball figures and no concert figure.
6. **"Donut counties":** no public source found that defines the term.
7. **Neutral-site games not checked:**
   - The Pacers.
   - Dates for IU baseball at Victory Field.
   - Butler and IU Indy sports other than men's basketball. Men's basketball was filled in the 2nd pass.
