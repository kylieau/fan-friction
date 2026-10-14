# Detroit follow-up on city-build gaps

**Answer date:** Tuesday, October 13, 2026; **second pass Oct 14, 2026** (prepared in America/Los_Angeles; Detroit is Eastern Time). Facts added in the second pass are marked "(2nd pass)".
**Brief:** [detroit-gaps-followup-prompt.md](detroit-gaps-followup-prompt.md) · **Joins to:** [detroit-venue-table-answer.md](detroit-venue-table-answer.md). Row IDs A1–A18 below are the IDs from that answer.

> **City-type answer not provided.** The brief refers to `detroit-city-type-answer.md`, but it was not supplied for this pass. Nothing here redoes city-type work: fan mode splits and car shares are not covered.

**Scope and method.** Public sources only. Every fact links to the page it came from. "Secondary" means a reputable reference or partner source, such as Sports Reference or ESPN's public site API, rather than the team or league itself. "Gap" means no source was found, and the entry says what was tried. No number, ID, hex code or date has been inferred.

**Limits this pass (read before using the tables):**
- The shared web-search budget ran out partway through this pass. After that, I could only fetch pages and APIs already reached. Several items below are gaps for that reason, and each gap says so.
- The fetch proxy began rate-limiting (HTTP 429) near the end of the pass. Pages refused this way are listed in [Inaccessible sources](#inaccessible-sources).
- Several Ticketmaster venue pages returned a fetch error. For those, the venue ID comes from the Ticketmaster URL and page title in search results. The table labels which confirmation method each row used.
- No Ticketmaster Discovery API key was used.

---

## Research notes by brief item

### 1. Name and code
- **Every major pro team uses "Detroit" with the code DET.** ESPN lists DET as the abbreviation and "Detroit …" as the display name for the [Lions](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/det), [Pistons](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/det), [Red Wings](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/det), [Tigers](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/det) and [Detroit City FC](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams). MLB's own Stats API also gives the Tigers the abbreviation DET ([MLB Stats API, team 116](https://statsapi.mlb.com/api/v1/teams/116)).
- **Exceptions are minor brands:** Motor City Cruise uses MCC ([ESPN G League teams](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams)), Detroit Mercy uses DETM ([ESPN](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2174)) and Michigan uses MICH ([ESPN](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/130)). None of these is a regional rename.
- **No Tampa Bay–style rename is needed.** In Tampa Bay, local usage changed the city's display name. Here, the teams use "Detroit" for the whole metro (sources above). The only regional brand found, the Michigan Panthers, left after 2025 (per the venue answer).
- **Regional names in use:** "Metro Detroit", "Detroit Tri-County Area" (Wayne, Oakland and Macomb), "Detroit–Windsor area" and "Southeast Michigan" ([Wikipedia: Metro Detroit](https://en.wikipedia.org/wiki/Metro_Detroit)).
- **Ann Arbor's status:** Washtenaw County (Ann Arbor) is in the nine-county CSA but not the six-county MSA. It "is not often included in definitions of Metro Detroit" ([Wikipedia: Metro Detroit](https://en.wikipedia.org/wiki/Metro_Detroit)). This matches the venue answer's "edge: Ann Arbor" tier.

### 2. Ticketmaster venue IDs
- **How each row was confirmed:**
  - **Fetched:** I opened the Ticketmaster venue page and it showed the venue's name.
  - **Official link:** the venue operator's own site links to the Ticketmaster venue page.
  - **Search:** the Ticketmaster venue URL and page title appeared in search results, but the page could not be opened, or I did not open it.
- **Duplicate or extra IDs need a matching decision:**
  - Crisler: 65577 "Crisler Arena" and 66060 "Chrisler Arena" (misspelled).
  - Masonic Temple: 65557 "Masonic Temple"; 65794 "Cathedral Theatre at the Masonic Temple Detroit", a different room in the building; and 341083 "Detroit Masonic Temple".
  - Ford Field: one ID, 65869, under three URL forms.
- **Some rooms sell through other ticketers,** so no Ticketmaster ID may exist:
  - Keyworth Stadium is listed on [AXS (venue 130515)](https://www.axs.com/venues/130515/keyworth-stadium-hamtramck-tickets).
  - The Colosseum at Caesars Windsor is listed on [AXS (venue 101902)](https://www.axs.com/venues/101902/the-colosseum-at-caesars-windsor-windsor-tickets).
  - Wayne State's own site links Fieldhouse events to [Etix](https://www.etix.com/ticket/v/19179/wayne-state-fieldhouse) ([WSU Athletics](https://wsuathletics.com/facilities/wayne-state-fieldhouse/469)), although a Ticketmaster venue page also exists.

### 3. Free schedule feeds
- **ESPN's public site API** (`site.api.espn.com`, no key needed) returned team records for the Lions, Pistons, Red Wings, Tigers, DCFC, Michigan, Detroit Mercy and Motor City Cruise. Links are in the team table. The API is undocumented, and its terms were not reviewed.
- **League APIs:**
  - **MLB Stats API:** Tigers team 116, venue 2394 (Comerica Park) ([statsapi](https://statsapi.mlb.com/api/v1/teams/116)).
  - **NHL web API:** Red Wings club code DET ([api-web.nhle.com](https://api-web.nhle.com/v1/club-schedule-season/DET/now)).
- **No free feed confirmed:**
  - **PWHL Detroit:** the team name is pending, and the league's release has no schedule link ([PWHL](https://www.thepwhl.com/en/news/2026/may/06/professional-womens-hockey-league-expands-to-detroit)).
  - **Wayne State:** NCAA D-II; there are official HTML schedule pages, but the site lists no iCal or RSS feed ([WSU Athletics](https://wsuathletics.com/facilities/wayne-state-fieldhouse/469)).
  - **Windsor Spitfires (OHL):** not checked in the first pass. **(2nd pass):** no machine feed found; official HTML schedule on the CHL site under team ID 17, season 88 ([chl.ca](https://chl.ca/ohl-spitfires/schedule/17/88/)). Tickets sell through Paciolan/evenue at [wfcucentre.evenue.net](https://wfcucentre.evenue.net/), not Ticketmaster ([chl.ca/ohl-spitfires](https://chl.ca/ohl-spitfires/)).
  - **PWHL Detroit (2nd pass):** still no feed; the 2026–27 schedule is published as HTML and press releases only (see §4).

### 4. Games away from the home venue
Summary (first pass): no Detroit pro team has a relocated, neutral-site or international home game from 2025 on in the schedules checked. **(2nd pass) Corrected:** the Pistons played a listed home game in Mexico City on Nov 1, 2025, and PWHL Detroit has two 2026–27 home games with venue TBD. The neutral-site events found are college and PWHL games at Detroit venues, plus one Michigan basketball game in Detroit. Details are in [End with §4](#4-games-away-from-the-home-venue-2025-on).

### 5. Postseason and past crowds
- **Covered:** recent seasons from 2023 on for the Lions, Tigers and Pistons, with regular season and postseason kept separate. DCFC has a partial sample.
- **Gaps:** Red Wings regular-season attendance, Michigan, Detroit Mercy, Wayne State, Cruise season totals, and Windsor Spitfires. Details are in [End with §5](#5-postseason-and-past-crowd-tables-per-team).
- **(2nd pass):** Red Wings (3 seasons), DCFC (2023–2025), Michigan football (3 seasons), Detroit Mercy (2 seasons) and Wayne State (2 seasons) now filled, mostly from secondary sources (Hockey-Reference, Wikipedia) labeled as such. Still gaps: Cruise totals, Michigan basketball/hockey, Spitfires.

### 6. Team colors
- **Official source found:** Michigan only ([U-M brand](https://brand.umich.edu/design-resources/colors/)). (2nd pass: Detroit Mercy and Wayne State added, see below.)
- **Partial official source:** Wayne State's site sets one theme color in its page code ([WSU Athletics](https://wsuathletics.com/facilities/wayne-state-fieldhouse/469)). That is not a style guide.
- **All other teams:** the hex values come from ESPN's API `color` and `alternateColor` fields and are labeled **secondary**. I could not search for team brand pages because the search budget ran out.
- **(2nd pass) Official sources added:**
  - **Detroit Mercy:** the university's color sheet lists primary UDM Red **#A6093D** (PMS 1945) and UDM Blue **#002D72** (PMS 288); the Titan Athletics logo uses the same red and blue plus Warm Gray 1 ([Detroit Mercy Colors PDF](https://www.udmercy.edu/faculty-staff/marcom/_files/Detroit_Mercy_Colors.pdf)). These differ from ESPN's #165B9E / #D31733.
  - **Wayne State:** school colors green **#0C5449** (PMS 561) and gold **#FFCC33** (PMS 1225) ([WSU Marketing & Communications identity guidelines](https://mac.wayne.edu/identity-guidelines)). The guide does not rank them; green is listed first. The athletics site's `theme-color` (#115E56) differs from the university green.
  - **Windsor Spitfires:** partial official only. The team's page on the CHL site sets `theme-color` **#e4252f** ([chl.ca/ohl-spitfires](https://chl.ca/ohl-spitfires/)); no style guide or secondary color found.
  - **PWHL Detroit:** colour scheme announced May 6, 2026: black and silver primary, white secondary, red accent, with a placeholder logo; **no hex codes** published ([SportsLogos.net](https://news.sportslogos.net/pwhl-revs-up-as-detroit-expansion-team-unveils-black-and-silver-colour-scheme), secondary, quoting a PWHL release). The team name was still unannounced as of Oct 6, 2026 ([The Hockey News](https://thehockeynews.com/womens/pwhl/pwhl-team-names-decisions-are-done-and-jerseys-designed-fans-now-will-wait-for-market-identities)).
  - **Lions, Tigers, Pistons, Red Wings, DCFC: no official hex found.** Tried: Wikipedia infoboxes (color names only, no hex, no official citation: [Lions](https://en.wikipedia.org/wiki/Detroit_Lions), [Pistons](https://en.wikipedia.org/wiki/Detroit_Pistons), [Red Wings](https://en.wikipedia.org/wiki/Detroit_Red_Wings), [Tigers](https://en.wikipedia.org/wiki/Detroit_Tigers)); team home pages for a `theme-color` tag ([detroitlions.com](https://www.detroitlions.com/), [mlb.com/tigers](https://www.mlb.com/tigers), [nba.com/pistons](https://www.nba.com/pistons/) and [detcityfc.com](https://www.detcityfc.com/) had none; [nhl.com/redwings](https://www.nhl.com/redwings/) sets #ffffff, which is not a team color); web searches for brand guides returned only unofficial color-code sites (not used). DCFC's own 2026 kit article names "rouge and gold" but gives no codes ([DCFC](https://www.detcityfc.com/?p=16733)). ESPN values stay as the secondary source.

---

## Build-rule notes (for whoever turns this into app data)

- **Every venue ID and team ID must be unique across all cities.** `giants`, `jets`, `rangers`, `kings` and `cardinals` are already taken, so add a city prefix. For Detroit, prefix every team and venue ID (for example `det-…`) so that later cities cannot collide, rather than prefixing only names already known to be taken.
- **Don't make a separate per-city opponents file.** Opponent draws go into `expectedDrawIndex`, as for every other city.
- **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list. Examples from the venue answer:
  - Ford Field has no published concert or basketball capacity.
  - Little Caesars Arena's concert capacity is only a range.
  - The Colosseum at Caesars Windsor is listed as "up to 5,000".
- **Car shares:** wire the measured ones, wire sourced estimates and mark them estimated, and leave the rest on the city default. Car shares were not provided this pass, because the city-type answer was not supplied.
- **More notes from this pass:**
  - **Ticketmaster duplicates.** Map duplicate Ticketmaster IDs (Crisler 65577/66060; the Masonic Temple's three IDs) to one row ID. Only map an ID to A17 after confirming which Masonic room it sells.
  - **Venue moves.** Match DCFC home games by date: Keyworth (A9) through 2027, then AlumniFi Field (A6) from the 2028 season.
  - **Attendance is not capacity.** Several announced crowds exceed listed capacity, for example 44,923 at Comerica Park against a listed baseball capacity of 41,083. Store attendance separately, and never feed it back into capacity.
  - **Repeated announced figures.** Every Pistons home playoff game in 2025 and 2026 was announced at exactly 20,062. Treat this as the announced figure, not a scanned count.

---

## End with

### 1. Name, short form, code and covered area

| Field | Value | Source |
|---|---|---|
| Display name | **Detroit** | Pro teams use "Detroit …" display names ([ESPN Lions](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/det), [Pistons](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/det), [Red Wings](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/det), [Tigers](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/det)) |
| Short form | **Detroit** (regional form in reference use: "Metro Detroit") | [Wikipedia: Metro Detroit](https://en.wikipedia.org/wiki/Metro_Detroit) |
| Three-letter code | **DET** (the lead code is confirmed) | ESPN abbreviations for the Lions, Pistons, Red Wings, Tigers and DCFC (links above; [DCFC](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)); MLB Stats API abbreviation ([team 116](https://statsapi.mlb.com/api/v1/teams/116)) |
| Core covered area | Wayne, Oakland and Macomb counties (the "Detroit Tri-County Area"). The venue answer's MSA tier also includes Livingston, St. Clair and Lapeer. | [Wikipedia: Metro Detroit](https://en.wikipedia.org/wiki/Metro_Detroit); [venue answer §1](detroit-venue-table-answer.md) |
| Cities and suburbs with listed rooms | Detroit (A2–A4, A8, A14, A15, A17, A18; A6 planned); Hamtramck (A9); Independence Twp./Clarkston, Oakland County (A5); Rochester Hills, Oakland County (A10); Sterling Heights, Macomb County (A11). Wikipedia also names Dearborn, Southfield, Warren, Troy, Farmington Hills, Auburn Hills and Pontiac within the metro. | [venue answer Table A](detroit-venue-table-answer.md); [Wikipedia: Metro Detroit](https://en.wikipedia.org/wiki/Metro_Detroit) |
| Ann Arbor | **In, as a labeled edge** (proposal). Washtenaw is in the CSA only, not the MSA. Its three large rooms (A1, A7, A12) and the Michigan Wolverines are kept and tagged "edge: Ann Arbor". | [Wikipedia: Metro Detroit](https://en.wikipedia.org/wiki/Metro_Detroit); [venue answer §1](detroit-venue-table-answer.md) |
| Windsor, ON | Labeled cross-border edge (A13, A16), as in the venue answer. These rooms use Canadian storefronts and price in CAD. | [venue answer §1](detroit-venue-table-answer.md) |

### 2. Ticketmaster venue IDs

The venue answer has 18 room rows. Below, 14 have a Ticketmaster venue ID confirmed from a Ticketmaster venue URL, and 4 are **not verified**. A6 is not built yet.

| Row ID | Room | Ticketmaster venue ID | Verification link | How confirmed / notes |
|---|---|---|---|---|
| A1 | Michigan Stadium (*edge: Ann Arbor*) | **66090** | [ticketmaster.com/…/venue/66090](https://www.ticketmaster.com/michigan-stadium-tickets-ann-arbor/venue/66090) | Search (title "Michigan Stadium - Ann Arbor, MI"); page not opened. Michigan football events are sold on Ticketmaster ([example event](https://www.ticketmaster.com/michigan-wolverines-football-vs-indiana-hoosiers-ann-arbor-10-24-2026/event/Z7r9jZ1A7qIaK)). |
| A2 | Ford Field | **65869** | [ticketmaster.com/…/venue/65869](https://www.ticketmaster.com/ford-field-tickets-detroit/venue/65869) | Fetched: page shows "Ford Field". The same ID appears under [/billets/](https://www.ticketmaster.com/ford-field-billets-detroit/venue/65869) and [/search/venue/](https://www.ticketmaster.com/search/venue/65869) URLs. Do not confuse it with venue 338722, a "Ford Field" in Portola Valley ([TM](https://www.ticketmaster.com/Ford-Field-tickets-Portola-Valley/venue/338722)). |
| A3 | Comerica Park | **65604** | [ticketmaster.com/…/venue/65604](https://www.ticketmaster.com/comerica-park-boletos-detroit/venue/65604?page=4) | Fetched: page shows "Comerica Park, 2100 Woodward Ave, Detroit, MI 48201". |
| A4 | Little Caesars Arena | **66238** | [ticketmaster.com/…/venue/66238](https://www.ticketmaster.com/little-caesars-arena-tickets-detroit/venue/66238) | Search (title "Little Caesars Arena - Detroit, MI"); fetch returned an error. Ticketmaster's Red Wings artist page filters on `venueId=66238` ([TM](https://www.ticketmaster.com/detroit-red-wings-tickets/artist/805938?venueId=66238)), and so does a BIG3 link with a 313 Presents campaign code ([TM](https://www.ticketmaster.com/artist/2352794?venueId=66238&list_view=1%3Fcamefrom%3DCFC_313PRE_313web_big3_2026)). |
| A5 | Pine Knob Music Theatre | **65563** | [ticketmaster.com/…/venue/65563](https://www.ticketmaster.com/pine-knob-music-theatre-boletos-clarkston/venue/65563) | Fetched: page shows "Pine Knob Music Theatre, 33 Bob Seger Drive, Clarkston, MI 48348". Also an official link: [313 Presents' Pine Knob page](https://www.313presents.com/pine-knob-music-theatre) links its parking and express-lane add-ons to venue 65563. |
| A6 | AlumniFi Field (under construction) | — | not verified | The stadium is not built; it targets the 2028 season (per the venue answer). Re-check before 2028. |
| A7 | Crisler Center (*edge: Ann Arbor*) | **65577** | [ticketmaster.com/…/venue/65577](https://www.ticketmaster.com/crisler-arena-tickets-ann-arbor/venue/65577) | Search (title "Crisler Arena - Ann Arbor, MI"); fetch returned an error. A **duplicate** page exists as 66060 "Chrisler Arena" ([TM](https://www.ticketmaster.com/chrisler-arena-tickets-ann-arbor/venue/66060)), so map both IDs to A7. **(2nd pass) Still unresolved:** both venue pages returned a fetch error again. Ticketmaster's own Michigan basketball listings now name the room "Crisler Center" ([women's](https://www.ticketmaster.com/university-of-michigan-womens-basketball-tickets/artist/2551036), [men's](https://www.ticketmaster.ca/university-of-michigan-wolverines-mens-basketball-billets/artist/847128)) but show no venue ID, so which ID current events use is unconfirmed. Keep both mapped to A7 and match on the Discovery API's venue name when a key is available. |
| A8 | Calihan Hall | **66081** | [ticketmaster.com/…/venue/66081](https://www.ticketmaster.com/calihan-hall-at-university-of-detroit-tickets-detroit/venue/66081) | Search (title "Calihan Hall at University of Detroit Mercy - Detroit, MI"); page not opened. |
| A9 | Keyworth Stadium | — | not verified | Ticketmaster search found the DCFC artist page ([TM](https://www.ticketmaster.com/detroit-city-fc-tickets/artist/2612732)), but no Keyworth venue page; that artist page returned a fetch error. Keyworth appears on [AXS (130515)](https://www.axs.com/venues/130515/keyworth-stadium-hamtramck-tickets) and [SeatGeek (467484)](https://www.seatgeek.com/venues/467484). |
| A10 | Meadow Brook Amphitheatre | **65584** | [ticketmaster.com/…/venue/65584](https://www.ticketmaster.com/meadow-brook-amphitheatre-tickets-rochester-hills/venue/65584?tab=addOns&daterange=all&addOnType=all) | Official link: [313 Presents' Meadow Brook page](https://www.313presents.com/meadow-brook-amphitheatre) links its parking add-on to venue 65584. |
| A11 | Michigan Lottery Amphitheatre at Freedom Hill | **65757** | [ticketmaster.com/…/venue/65757](https://www.ticketmaster.com/michigan-lottery-amphitheatre-at-freedom-hill-tickets-sterling-heights/venue/65757) | Search (title "Michigan Lottery Amphitheatre at Freedom Hill - Sterling Heights, MI"); page not opened. Parking is sold as separate Ticketmaster "events" (e.g. [O.A.R. parking](https://www.ticketmaster.com/parking-michigan-lottery-amphitheatre-oar-sterling-heights-michigan-09-05-2026/event/08006363E52A70A3)); filter these out as concerts. |
| A12 | Yost Ice Arena (*edge: Ann Arbor*) | **66225** | [ticketmaster.com/…/venue/66225](https://www.ticketmaster.com/yost-arena-tickets-ann-arbor/venue/66225) | Search (title "Yost Arena - Ann Arbor, MI"); page not opened. |
| A13 | WFCU Centre (*edge: Windsor*) | — (leads: 338882 on .com; **131950 on .ca**, 2nd pass) | not verified | Search found "W.F.C.U Centre - Windsor, ON" at [venue/338882](https://www.ticketmaster.com/WFCU-Centre-tickets-Windsor/venue/338882), but the page returned a fetch error, so no events or primary storefront could be confirmed. **(2nd pass):** a ticketmaster.ca venue-artist URL for "Arcade Fire – WFCU Centre, Windsor, ON" carries venue **131950** ([TM.ca](https://www.ticketmaster.ca/arcade-fire-wfcu-centre-windsor-on/venueartist/131950/946978)), but that page also returned a fetch error. **The venue's own site sells through Paciolan/evenue, not Ticketmaster** ([wfcu-centre.com](http://www.wfcu-centre.com/) → [wfcucentre.evenue.net](https://wfcucentre.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=WFCU&linkID=global-windsor)), and the Spitfires also sell via evenue ([chl.ca](https://chl.ca/ohl-spitfires/)). Treat as **no primary Ticketmaster storefront**; 131950 may carry only occasional promoter shows. || A14 | Aretha Franklin Amphitheatre | **65540** | [ticketmaster.com/…/venue/65540](https://www.ticketmaster.com/the-aretha-franklin-amphitheatre-tickets-detroit/venue/65540) | Search (title "The Aretha Franklin Amphitheatre - Detroit, MI"); the venue answer had already cited the same page. |
| A15 | Fox Theatre | **65547** | [ticketmaster.com/…/venue/65547](https://www.ticketmaster.com/fox-theatre-detroit-tickets-detroit/venue/65547) | Search (title "Fox Theatre Detroit - Detroit, MI"); page not opened. |
| A16 | The Colosseum at Caesars Windsor (*edge: Windsor*) | **131710** (ticketmaster.ca) (2nd pass) | [ticketmaster.ca/…/venue/131710](https://www.ticketmaster.ca/the-colosseum-at-caesars-windsor-tickets-windsor/venue/131710) | **(2nd pass) Search:** title "The Colosseum at Caesars Windsor - Windsor, ON" on the ticketmaster.ca venue URL; the page itself returned a fetch error. Ticketmaster.ca also runs a Colosseum promotion page ([TM.ca flash deal](https://www.ticketmaster.ca/explore/colosseum-flashdeal25-windsorsept)), so Ticketmaster.ca does sell this room. This confirms the first-pass `vid=131710` lead. First-pass note follows: | No Ticketmaster venue page found; only search-result pages turned up ([TM.ca search](https://www.ticketmaster.ca/search?q=The+Colosseum+at+Caesars+Windsor)). One search URL carries `vid=131710` ([TM.ca](https://ticketmaster.ca/search?amp=&amp=&amp=&q=The+Colosseum+at+Caesars+Windsor&tm_link=tm_homeA_header_search&user_input=+caesa&vid=131710)), but [venueinfo/131710](https://www.ticketmaster.com/venueinfo/131710/) returned a fetch error, so it is unconfirmed. The venue is listed on [AXS (101902)](https://www.axs.com/venues/101902/the-colosseum-at-caesars-windsor-windsor-tickets). |
| A17 | Masonic Temple Theatre | **65557** (room match unconfirmed) | [ticketmaster.com/…/venue/65557](https://www.ticketmaster.com/masonic-temple-tickets-detroit/venue/65557) | Fetched: page shows "Masonic Temple" with concert listings (Bad Religion, Khruangbin, Mitski and others) but no room name. Separate IDs exist for the Cathedral Theatre (a different room) at [65794](https://www.ticketmaster.com/cathedral-theatre-at-the-masonic-temple-tickets-detroit/venue/65794) and for "Detroit Masonic Temple" at [341083](https://www.ticketmaster.com/Detroit-Masonic-Temple-tickets-Detroit/venue/341083). Do not map 65794 to A17. **(2nd pass):** 65557 was re-fetched and still names no room; 341083 returned a fetch error. The Masonic's own ticket page says "AXS is the only authorized seller of tickets for AEG Presents events at the Masonic" and links **AXS venue 126098 "Masonic Temple Theatre"** ([themasonic.com/ticket-info](https://themasonic.com/ticket-info); [AXS 126098](https://www.axs.com/venues/126098/masonic-temple-theatre-detroit-tickets?q=the+masonic&cat=7)). So the room-named ID for A17 is on AXS; Ticketmaster 65557 carries other promoters' shows with no room named. Recommendation: map 65557 to A17 only with a "room unconfirmed" flag; leave 341083 unmapped until it can be opened. |
| A18 | Wayne State Fieldhouse | **66308** | [ticketmaster.com/…/venue/66308](https://www.ticketmaster.com/wayne-state-fieldhouse-tickets-detroit/venue/66308) | Search (title "Wayne State Fieldhouse - Detroit, MI"); page not opened. WSU's own site sends Fieldhouse events to [Etix](https://www.etix.com/ticket/v/19179/wayne-state-fieldhouse) ([WSU](https://wsuathletics.com/facilities/wayne-state-fieldhouse/469)), so Ticketmaster may carry only some events. |

**Rooms not verified:** A6 (not built), A9 Keyworth, A13 WFCU Centre and A16 Colosseum at Caesars Windsor. Under the brief's rule, the city ships with no Ticketmaster concerts in these rooms unless an ID is confirmed. A9 and A16 appear to sell through AXS (links above).

**(2nd pass) Update:** A16 now has a ticketmaster.ca ID (131710, search-confirmed), so 15 of 18 rows have an ID. Still not verified: A6 (not built), A9 (AXS/SeatGeek) and A13 (venue sells via evenue; TM.ca lead 131950 unopened). Masonic (A17): AEG shows sell only on AXS 126098, so Ticketmaster 65557 will miss those shows. Crisler (A7): 65577 vs 66060 still unresolved.

### 3. Teams: league, home venue, free feed, colors

**Feed notes:**
- ESPN IDs are numeric team IDs in ESPN's public site API.
- "Secondary" colors are the `color` and `alternateColor` values from ESPN's API, not from a team style guide. Official team brand pages could not be searched this pass because the search budget ran out.

| Team | League | Home venue row ID | Free feed and ID | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| Detroit Lions | NFL | A2 | ESPN NFL team **8** (abbr DET; ESPN venue 3727) ([API](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/det)) | #0076B6 | #BBBBBB | Secondary: [ESPN API](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/det) |
| Detroit Tigers | MLB | A3 | MLB Stats API team **116** (venue 2394) ([API](https://statsapi.mlb.com/api/v1/teams/116)); ESPN MLB team **6** ([API](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/det)) | #0A2240 | #FF4713 | Secondary: [ESPN API](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/det) |
| Detroit Pistons | NBA | A4 | ESPN NBA team **8** ([API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/det)) | #1D428A | #C8102E | Secondary: [ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/det) |
| Detroit Red Wings | NHL | A4 | NHL web API club **DET** ([schedule](https://api-web.nhle.com/v1/club-schedule-season/DET/now)); ESPN NHL team **5** ([API](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/det)) | #E30526 | #FFFFFF | Secondary: [ESPN NHL teams list](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams) |
| PWHL Detroit (name pending) | PWHL | A4 (from 2026–27; 2 home games venue TBD) | **No feed** confirmed; the league's release has no schedule link ([PWHL](https://www.thepwhl.com/en/news/2026/may/06/professional-womens-hockey-league-expands-to-detroit)). (2nd pass) Official HTML team page only, slug `detroit` ([thepwhl.com/en/teams/detroit](https://www.thepwhl.com/en/teams/detroit)); no team ID or machine feed found; an ESPN `hockey/pwhl` API path returned an error. Use the published 15-game list (§4) | gap (black/silver named, no hex) (2nd pass) | gap (white secondary, red accent, no hex) (2nd pass) | Colour names only: [SportsLogos.net](https://news.sportslogos.net/pwhl-revs-up-as-detroit-expansion-team-unveils-black-and-silver-colour-scheme) (secondary, quoting a PWHL release) (2nd pass) |
| Detroit City FC | USL Championship | A9 through 2027; A6 from the 2028 season | ESPN `usa.usl.1` team **19179** (abbr DET) ([API](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)) | #643335 | #D69A2D | Secondary: [ESPN API](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams) |
| Motor City Cruise | NBA G League | A18 | ESPN `nba-development` team **15** (abbr MCC) ([API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams)) | #FA002C | #006BB6 | Secondary: [ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams) |
| Michigan Wolverines (*edge: Ann Arbor*) | NCAA D-I (Big Ten) | A1 (football), A7 (basketball), A12 (hockey) | ESPN team **130** (abbr MICH) for football ([API](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/130)) and men's basketball ([schedule](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/130/schedule?season=2026)). The hockey feed was not checked. | #00274C (Blue) | #FFCB05 (Maize) | **Official:** [U-M brand colors](https://brand.umich.edu/design-resources/colors/). U-M lists Maize and Blue as its two signature colors without ranking them; the primary/secondary order here follows ESPN's API. |
| Detroit Mercy Titans | NCAA D-I (Horizon) | A8 | ESPN men's basketball team **2174** (abbr DETM) ([API](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2174)) | **#A6093D** (UDM Red) (2nd pass) | **#002D72** (UDM Blue) (2nd pass) | **Official:** [Detroit Mercy Colors PDF](https://www.udmercy.edu/faculty-staff/marcom/_files/Detroit_Mercy_Colors.pdf) lists both as primary, red first (2nd pass). ESPN's #165B9E / #D31733 ([API](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2174)) is kept as secondary only |
| Wayne State Warriors | NCAA D-II | A18 (basketball) | **No feed** confirmed: the site has HTML schedule pages (e.g. `wsuathletics.com/sports/mens-basketball/schedule`) but lists no iCal or RSS feed ([WSU](https://wsuathletics.com/facilities/wayne-state-fieldhouse/469)). ESPN coverage not checked. | **#0C5449** (green, PMS 561) (2nd pass) | **#FFCC33** (gold, PMS 1225) (2nd pass) | **Official:** [WSU identity guidelines](https://mac.wayne.edu/identity-guidelines) (school colors, unranked; green listed first) (2nd pass). The athletics site's `theme-color` #115E56 ([WSU](https://wsuathletics.com/facilities/wayne-state-fieldhouse/469)) differs |
| Windsor Spitfires (*edge: Windsor*) | OHL | A13 | (2nd pass) **No machine feed** found: the league's official CHL site has HTML schedule pages under HockeyTech-style team ID **17**, season **88** = 2026–27 ([schedule 17/88](https://chl.ca/ohl-spitfires/schedule/17/88/); [printable](https://chl.ca/ohl-spitfires/printable-schedule/)); no iCal or API link on the page ([chl.ca/ohl-spitfires](https://chl.ca/ohl-spitfires/)) | #e4252f (2nd pass) | gap | Partial official: `theme-color` on the team's CHL page ([chl.ca/ohl-spitfires](https://chl.ca/ohl-spitfires/)) (2nd pass); not a style guide |

**Teams with no confirmed free feed:** PWHL Detroit, Wayne State and the Windsor Spitfires (all three re-checked in the 2nd pass: official HTML schedules only).

**Not added to the table:**
- **Michigan Panthers (UFL):** left Detroit after 2025.
- **Detroit WNBA team:** begins in 2029.

Both are covered in the venue answer and fall outside the current build. The DCFC women's team is still a gap from the venue answer and was not checked here.

### 4. Games away from the home venue (2025 on)

**Neutral-site and away-from-home games found:**

| Date | Team / event | Site (row ID if in the city) | Type | Source |
|---|---|---|---|---|
| Nov 11, 2025 | Michigan men's basketball vs Wake Forest | Little Caesars Arena, Detroit (**A4**) | Neutral site, in the city; not at Crisler (A7) | [ESPN schedule](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/130/schedule?season=2026) |
| Nov 24, 2025 (Nov 25 UTC) | Michigan men's basketball vs San Diego State (Players Era Festival) | Michelob ULTRA Arena, Las Vegas, NV | Neutral site, out of town | [ESPN schedule](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/130/schedule?season=2026) |
| Mar 16, 2025 | PWHL neutral-site game (attendance 14,288) | Little Caesars Arena (**A4**) | Neutral site, before PWHL Detroit existed | [PWHL](https://www.thepwhl.com/en/news/2026/may/06/professional-womens-hockey-league-expands-to-detroit) |
| Mar 28, 2026 | PWHL Takeover Tour game (attendance 15,938) | Little Caesars Arena (**A4**) | Neutral site | [PWHL](https://www.thepwhl.com/en/news/2026/may/06/professional-womens-hockey-league-expands-to-detroit) |
| Dec 5, 2026 | MAC Championship (college football) | Ford Field (**A2**) | Neutral site; not a Lions game | [fordfield.com](https://www.fordfield.com/) (via the venue answer) |
| Apr 3 and Apr 5, 2027 | NCAA Men's Final Four | Ford Field (**A2**) | Neutral site; the basketball setup capacity is unpublished | [fordfield.com](https://www.fordfield.com/) (via the venue answer) |
| **Nov 1, 2025** (8 p.m. local; Nov 2 02:00 UTC) | **Pistons "home" game vs Dallas** (NBA Mexico City Game), attendance 20,385 | **Arena CDMX, Mexico City** | **International, Pistons listed as home team** (`neutralSite: true`); must not be placed at A4 (2nd pass) | [ESPN scoreboard](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20251101); [Sportcal](https://www.sportcal.com/news/nba-lays-out-europe-schedule-with-london-manchester-berlin-paris-to-host/) |
| Feb 28, 2027 (2 p.m. ET) | **PWHL Detroit home game vs San Jose** | **Venue TBD** (not LCA per the 13-game LCA count) | Relocated home game, site unannounced (2nd pass) | [The Hockey News schedule](https://thehockeynews.com/womens/pwhl/pwhl-announces-full-2026-27-schedule-heres-how-the-season-looks); [FOX 2](https://www.fox2detroit.com/news/pwhl-detroit-2026-27-regular-season-schedule-released) |
| Mar 10, 2027 (7 p.m. ET) | **PWHL Detroit home game vs Las Vegas** | **Venue TBD** | Relocated home game, site unannounced (2nd pass) | same |
| Nov 17, 2023 (pre-2025, reference) | Red Wings "home" game vs Toronto (NHL Global Series), 13,510 | Ericsson Globe/Avicii Arena, Stockholm | International home game (2nd pass) | [Hockey-Reference](https://www.hockey-reference.com/teams/DET/2024_games.html) |

**Checked and none found, by team:**
- **Lions:** no neutral or international games in 2024, 2025 or 2026. All 2026 home games are at Ford Field, including Nov 26 vs Chicago ([PFR 2026](https://www.pro-football-reference.com/teams/det/2026.htm); [PFR 2025](https://www.pro-football-reference.com/teams/det/2025.htm); [PFR 2024](https://www.pro-football-reference.com/teams/det/2024.htm); [ESPN 2026](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/det/schedule?season=2026)).
- **Tigers:** every home game in 2025 (83 schedule entries), 2026 (81) and the published 2027 schedule is at Comerica Park ([2025](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=116&season=2025&gameType=R&fields=dates,date,games,venue,name,teams,home,team,id), [2026](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=116&season=2026&gameType=R&fields=dates,date,games,venue,name,teams,home,team,id), [2027](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=116&season=2027&gameType=R&fields=dates,date,games,venue,name,teams,home,team,id)). Away series at temporary parks are road games and need no placement: Steinbrenner Field, Jun 20–22, 2025; Sutter Health Park, Aug 25–27, 2025, Jul 31–Aug 2, 2026, and Aug 10–12, 2027.
- **Red Wings:**
  - 2025–26: the game log shows no outdoor or international games ([Hockey-Reference](https://www.hockey-reference.com/teams/DET/2026.html)). The NHL API shows every game through Dec 20, 2025 as `neutralSite: false` ([NHL API](https://api-web.nhle.com/v1/club-schedule-season/DET/20252026)).
  - 2026–27: the NHL API shows no neutral or non-LCA home games through Dec 20, 2026 ([NHL API](https://api-web.nhle.com/v1/club-schedule-season/DET/now)). **(2nd pass) Rest of season checked:** all 22 Detroit home games from Dec 21, 2026 to the Apr 10, 2027 finale are at Little Caesars Arena with `neutralSite: false` (Dec 2, Jan 9, Feb 2, Mar 7, Apr 2) ([Dec](https://api-web.nhle.com/v1/club-schedule/DET/month/2026-12), [Jan](https://api-web.nhle.com/v1/club-schedule/DET/month/2027-01), [Feb](https://api-web.nhle.com/v1/club-schedule/DET/month/2027-02), [Mar](https://api-web.nhle.com/v1/club-schedule/DET/month/2027-03), [Apr](https://api-web.nhle.com/v1/club-schedule/DET/month/2027-04)). The NHL's 2026–27 special events (Heritage Classic, Global Series in Helsinki and Düsseldorf, Winter Classic in Salt Lake City, Stadium Series in Arlington) do not include Detroit ([NHL schedule release PDF](https://media.nhl.com/site/vasset/public/attachments/2026/07/19975/2026-27%20Regular-Season%20Schedule%20News%20Release_FINAL.pdf)).
- **Pistons:** no neutral-site games in the part of the 2025–26 schedule that loaded ([ESPN](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/det/schedule?season=2026)). **(2nd pass) Correction:** the 2025–26 schedule does include one: the Pistons were the listed home team vs Dallas at **Arena CDMX, Mexico City, Nov 1, 2025** (20,385; see table above). For **2026–27**, the NBA's announced international games are Nuggets–Pacers in Mexico City (Nov 7, 2026) and Spurs–Pelicans in Paris (Jan 14, 2027) and Manchester (Jan 17, 2027); the Pistons are not involved ([AP via Galveston County Daily News](https://www.galvnews.com/news_ap/nation/victor-wembanyama-spurs-headline-nba-international-games-in-2026-27/article_e510092a-d42f-5857-b485-fd404384e8f0.html)). The 2026–27 Pistons schedule itself was not checked game by game.
- **PWHL Detroit (2nd pass):** 15 home games in 2026–27; 13 at Little Caesars Arena (Dec 12, 19, 28; Jan 20, 30; Feb 4, 19, 24, 26; Mar 17, 28; Apr 8, 11) ([WXYZ](https://www.wxyz.com/sports/pwhl-detroit/pwhl-detroit-reveals-full-2026-27-schedule-with-13-games-at-little-caesars-arena); [FOX 2](https://www.fox2detroit.com/news/pwhl-detroit-2026-27-regular-season-schedule-released)). The other two (Feb 28 vs San Jose, Mar 10 vs Las Vegas) have venue **TBD** ([The Hockey News](https://thehockeynews.com/womens/pwhl/pwhl-announces-full-2026-27-schedule-heres-how-the-season-looks)). Home opener Dec 12 at LCA is also on the [team page](https://www.thepwhl.com/en/teams/detroit).
- **DCFC:** all 2025 home games in the part of the schedule that loaded were at Keyworth ([ESPN](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams/19179/schedule?season=2025)).
- **Michigan football:** no neutral-site games in the part of the 2025 schedule that loaded ([ESPN](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/130/schedule?season=2025)). **Gap:** ESPN returned an empty 2026 schedule ([ESPN](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/130/schedule?season=2026)), and bowl or CFP sites were not checked.
- **Not checked** (search budget ran out): Detroit Mercy, Wayne State, Cruise, and the Windsor Spitfires. (PWHL Detroit 2026–27 home dates: filled in 2nd pass, above. Detroit Mercy 2024–25 and 2025–26 home games were all at Calihan Hall per the season pages in §5; Horizon League semis and final 2026 were at Corteva Coliseum, Indianapolis.) A specific lead also remains unchecked: the CMU–EMU "Motor City MACtion" game at Ford Field, which the venue answer mentions without a date.

### 5. Postseason and past-crowd tables per team

**Coverage:**
- **Seasons:** 2023 to 2026 (the 2023–24 to 2025–26 NBA and NHL seasons).
- **Separation:** regular season and postseason are kept apart.
- **Sources:** Sports Reference sites (Pro-Football-, Baseball- and Basketball-Reference) are **secondary** reputable references. ESPN and MLB Stats API figures are game box-score data.

#### Detroit Lions (A2)

**Regular season (home), from Pro-Football-Reference attendance tables:**

| Season | Home games | Home total | Home average | Source |
|---|---|---|---|---|
| 2023 | 8 | 518,741 | ~64,843 | [PFR 2023](https://www.pro-football-reference.com/years/2023/attendance.htm) |
| 2024 | 9 | 584,300 | ~64,922 | [PFR 2024](https://www.pro-football-reference.com/years/2024/attendance.htm) |
| 2025 | 8 | 516,719 | ~64,590 | [PFR 2025](https://www.pro-football-reference.com/years/2025/attendance.htm) |
| 2026 (in progress) | — | — | Game sample from 2025: Sep 14 vs CHI 64,201; Sep 28 vs CLE 64,494 | [ESPN 2025 schedule](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/det/schedule?season=2025) |

**Postseason home games:**

| Season | Date | Round | Opponent | Announced attendance | Source |
|---|---|---|---|---|---|
| 2023 | Jan 14, 2024 | Wild Card | LA Rams | 66,367 | [ESPN](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/det/schedule?season=2023&seasontype=3) |
| 2023 | Jan 21, 2024 | Divisional | Tampa Bay | 66,201 | [ESPN](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/det/schedule?season=2023&seasontype=3) |
| 2024 | Jan 18, 2025 | Divisional | Washington | 64,774 | [ESPN](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/det/schedule?season=2024&seasontype=3) |
| 2025 | — | — | Pro-Football-Reference lists a 9-8 record, 3rd in the NFC North, and no postseason games | — | [PFR 2025](https://www.pro-football-reference.com/teams/det/2025.htm) |

The NFC Championship on Jan 28, 2024 was an away game at Levi's Stadium.

#### Detroit Tigers (A3)

**Regular season, from Baseball-Reference:**

| Season | Total | Per game | Source |
|---|---|---|---|
| 2023 | 1,612,876 | 19,912 | [Baseball-Reference](https://www.baseball-reference.com/teams/DET/attend.shtml) |
| 2024 | 1,858,295 | 22,942 | same |
| 2025 | 2,413,442 | 29,796 | same |
| 2026 | 2,322,853 | 28,677 | same |

**Postseason home games, from MLB Stats API game feeds:**

| Season | Date | Round | Opponent | Attendance | Source |
|---|---|---|---|---|---|
| 2024 | Oct 9, 2024 | ALDS Game 3 | Cleveland | 44,885 | [MLB API](https://statsapi.mlb.com/api/v1.1/game/775328/feed/live?fields=gameData,gameInfo,attendance,firstPitch,venue,name,datetime,officialDate) |
| 2024 | Oct 10, 2024 | ALDS Game 4 | Cleveland | 44,923 | [MLB API](https://statsapi.mlb.com/api/v1.1/game/775327/feed/live?fields=gameData,gameInfo,attendance,venue,name,datetime,officialDate) |
| 2025 | Oct 7, 2025 | ALDS Game 3 | Seattle | 41,525 | [MLB API](https://statsapi.mlb.com/api/v1.1/game/813056/feed/live?fields=gameData,gameInfo,attendance,venue,name,datetime,officialDate) |
| 2025 | Oct 8, 2025 | ALDS Game 4 | Seattle | 37,069 | [MLB API](https://statsapi.mlb.com/api/v1.1/game/813055/feed/live?fields=gameData,gameInfo,attendance,venue,name,datetime,officialDate) |
| 2026 | — | — | The MLB API returns no Tigers postseason games for 2026 (as of Oct 13, 2026) | — | [MLB API](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=116&season=2026&gameType=F,D,L,W) |
| 2023 | — | — | **gap:** the 2023 postseason query was refused (HTTP 429) | — | — |

Both Wild Card series were played on the road: at Houston in 2024 and at Cleveland in 2025 ([2024](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=116&season=2024&gameType=F,D,L,W), [2025](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=116&season=2025&gameType=F,D,L,W)).

#### Detroit Pistons (A4)

**Regular season (home total), from Basketball-Reference:**

| Season | Home total | League rank | Source |
|---|---|---|---|
| 2023–24 | 726,378 | 20th of 30 | [BBRef 2024](https://www.basketball-reference.com/teams/DET/2024.html) |
| 2024–25 | 781,929 | 9th of 30 | [BBRef 2025](https://www.basketball-reference.com/teams/DET/2025.html) |
| 2025–26 | 806,422 | 4th of 30 | [BBRef 2026](https://www.basketball-reference.com/teams/DET/2026.html) |

**Postseason home games.** Every game below was announced at 20,062.

| Season | Date | Round / game | Opponent | Attendance | Source |
|---|---|---|---|---|---|
| 2023–24 | — | No playoffs (14-68, 15th in the East) | — | — | [BBRef 2024](https://www.basketball-reference.com/teams/DET/2024.html) |
| 2024–25 | Apr 24, 2025 | East R1 G3 | New York | 20,062 | [ESPN](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/det/schedule?season=2025&seasontype=3) |
| 2024–25 | Apr 27, 2025 | East R1 G4 | New York | 20,062 | same |
| 2024–25 | May 1, 2025 | East R1 G6 | New York | 20,062 | [ESPN summary](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401768045) |
| 2025–26 | Apr 19, 2026 | East R1 G1 | Orlando | 20,062 | [ESPN](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/det/schedule?season=2026&seasontype=3) |
| 2025–26 | Apr 22, 2026 | East R1 G2 | Orlando | 20,062 | same |
| 2025–26 | Apr 29, 2026 | East R1 G5 | Orlando | 20,062 | same |
| 2025–26 | May 3, 2026 | East R1 G7 | Orlando | 20,062 | [ESPN summary](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401869418) |
| 2025–26 | May 5, 2026 | East SF G1 | Cleveland | 20,062 | [ESPN scoreboard](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20260505) |
| 2025–26 | May 7, 2026 | East SF G2 | Cleveland | 20,062 | [ESPN scoreboard](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20260507) |
| 2025–26 | May 13, 2026 | East SF G5 | Cleveland | 20,062 | [ESPN scoreboard](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20260513) |
| 2025–26 | May 17, 2026 | East SF G7 | Cleveland | 20,062 | [ESPN scoreboard](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20260517); local date from [BBRef](https://www.basketball-reference.com/playoffs/NBA_2026.html) (ESPN shows May 18 in UTC) |

**Series results:** the Pistons lost 2–4 to New York in 2025 ([BBRef](https://www.basketball-reference.com/teams/DET/2025.html)). In 2026 they beat Orlando 4–3, then lost 3–4 to Cleveland ([BBRef](https://www.basketball-reference.com/teams/DET/2026.html); [series](https://www.basketball-reference.com/playoffs/NBA_2026.html)).

#### Detroit Red Wings (A4)

| Season | Regular-season attendance | Postseason home games | Source |
|---|---|---|---|
| 2023–24 | (2nd pass) **41 "home" games, 778,167 total, ~18,980 avg**, including one home game played in Stockholm (see note). **At LCA only: 40 games, 764,657, ~19,116 avg.** Range 16,894–19,515 at LCA | (2nd pass) **None:** "eliminated from playoff contention for the eighth consecutive season" | Attendance: [Hockey-Reference 2023–24 game log](https://www.hockey-reference.com/teams/DET/2024_games.html) (secondary); playoffs: [Wikipedia 2023–24 season](https://en.wikipedia.org/wiki/2023%E2%80%9324_Detroit_Red_Wings_season) (secondary) |
| 2024–25 | (2nd pass) **41 home games, 793,162 total, ~19,345 avg** (range 17,450–19,515) | None listed: 39-35-8, 6th in the Atlantic, no playoff result | Attendance: [Hockey-Reference 2024–25 game log](https://www.hockey-reference.com/teams/DET/2025_games.html) (secondary); standings: [Hockey-Reference](https://www.hockey-reference.com/teams/DET/2025.html) |
| 2025–26 | (2nd pass) **41 home games, 792,087 total, ~19,319 avg** (range 17,687–19,515) | **None:** ESPN's postseason list is empty; 41-31-10, 6th in the Atlantic | Attendance: [Hockey-Reference 2025–26 game log](https://www.hockey-reference.com/teams/DET/2026_games.html) (secondary); [ESPN](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/det/schedule?season=2026&seasontype=3); [Hockey-Reference](https://www.hockey-reference.com/teams/DET/2026.html) |

**(2nd pass) How the totals were made:** Hockey-Reference's per-game logs carry an attendance column. I read every game listed without "@" and summed them; the site prints no season total. 19,515 (the listed hockey capacity) is the most common figure in all three seasons, so most games were announced at capacity.

**(2nd pass) Relocated home game, 2023–24:** Hockey-Reference lists Nov 17, 2023 vs Toronto as a Detroit home game (13,510) played at the Ericsson Globe/Avicii Arena in Stockholm ([HR game log](https://www.hockey-reference.com/teams/DET/2024_games.html)); Wikipedia confirms the NHL Global Series games in Stockholm on Nov 16–17, 2023 but does not name the home team ([Wikipedia](https://en.wikipedia.org/wiki/2023%E2%80%9324_Detroit_Red_Wings_season)). This predates the brief's 2025 cutoff but shows the pattern: never place a Global Series "home" game at A4.

**What was tried for attendance (first pass):**
- Hockey-Reference team and league pages: no attendance column ([2025 league page](https://www.hockey-reference.com/leagues/NHL_2025.html)).
- ESPN NHL attendance page: rendered empty to the fetcher ([ESPN](https://www.espn.com/nhl/attendance/_/year/2025)).
- ESPN Red Wings postseason schedules for 2024 and 2025: refused (HTTP 429).

#### PWHL Detroit (A4)

- **Own crowd history:** none. The team's first season is 2026–27.
- **Neutral-site PWHL crowds at LCA (event history, not team history):** 13,736 in 2024 (date not given), 14,288 on Mar 16, 2025, and 15,938 on Mar 28, 2026 ([PWHL](https://www.thepwhl.com/en/news/2026/may/06/professional-womens-hockey-league-expands-to-detroit)).

#### Detroit City FC (A9)

- **Season totals and averages:** first pass **gap** (the club's tickets page was refused, HTTP 429). **(2nd pass) filled from Wikipedia season pages (secondary; Wikipedia cites match reports):**

| Season | Home league matches | Regular-season home total | Average | Postseason home games | Source |
|---|---|---|---|---|---|
| 2023 | 17 (home record 7-4-6) | not stated (17 × 6,032 would be ~102,544; not a published figure) | **6,032** (high 7,181 vs Las Vegas, Aug 19; low 4,293 vs Rio Grande Valley, Apr 1) | Playoff R16 Oct 21 (6,123) and QF Oct 28 (7,959): **venue not stated** on the page, so home status unconfirmed | [2023 DCFC season](https://en.wikipedia.org/wiki/2023_Detroit_City_FC_season) |
| 2024 | not stated | not stated | **6,261** (high 7,172 vs Charleston, Jun 15; low 5,155 vs North Carolina FC, Apr 6) | **Nov 2, 2024, Eastern QF vs Tampa Bay: 7,183** (lost on penalties); described as the club's first home USL playoff game | [2024 DCFC season](https://en.wikipedia.org/wiki/2024_Detroit_City_FC_season) |
| 2025 | 15 | **93,440** (my sum of the 15 listed figures) | **6,229** (stated) | None (QF and SF away, see below). Non-league home cup games: U.S. Open Cup Apr 16 (2,079); USL Cup Apr 26 (5,716), Jul 26 (6,954) | [2025 DCFC season](https://en.wikipedia.org/wiki/2025_Detroit_City_FC_season) |
| 2026 (in progress) | 11 played (per the page) | **gap:** attendance listed for only 5 home matches: Mar 14 5,559; Mar 28 5,419; Apr 11 5,379; May 2 6,110; May 20 5,053 | partial only | None listed. USL Cup home games Jun 6 (6,356), Jun 20 (7,051); Open Cup Mar 17 (675), Apr 14 (6,229) | [2026 DCFC season](https://en.wikipedia.org/wiki/2026_Detroit_City_FC_season) (page is internally inconsistent; treat as low confidence) |

The 2025 Wikipedia figures for Sep 6–Oct 11 match the ESPN figures below, which corroborates both.
- **Late-2025 home crowds** at Keyworth, from ESPN box-score data ([ESPN](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams/19179/schedule?season=2025)). Dates are in UTC.

| Date (UTC) | Opponent | Attendance |
|---|---|---|
| Sep 6, 2025 | Orange County SC | 5,671 |
| Sep 20, 2025 | Lexington | 6,123 |
| Sep 27, 2025 | Louisville City | 6,269 |
| Oct 4, 2025 | North Carolina FC | 6,127 |
| Oct 11, 2025 | Loudoun United | 6,285 |

- **2025 postseason:** no home games. DCFC played the quarterfinal away at Louisville on Nov 1, 2025 (8,210, won 1–0) and the semifinal away at Pittsburgh on Nov 9, 2025 (6,220, lost on penalties) ([ESPN](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams/19179/schedule?season=2025)).
- **2023, 2024 and 2026:** **gap**.

#### Motor City Cruise (A18)

- **Single observed crowd:** 1,641 on Mar 16, 2025 ([Cleveland Charge](https://cleveland.gleague.nba.com/news/charge-lose-in-motor-city), via the venue answer).
- **Season totals and postseason:** **gap** (first pass not checked; **2nd pass** still a gap). ESPN's G League schedule for 2025–26 was cut off by the fetch length limit after three home games: UTC dates Nov 8, 2025 vs Sioux Falls 1,321; Nov 9 vs Sioux Falls 1,013; Nov 13 vs Cleveland 581, all at Wayne State Fieldhouse (evening tip-offs fall on the previous local date) ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams/15/schedule?season=2026)). One search found no published season total. Lead: per-game NBA stats PDFs (e.g. [Mar 16, 2025 book](https://statsdmz.nba.com/pdfs/20250316/20250316_CLCMCC_book.pdf)).

#### Michigan Wolverines (A1, A7, A12; *edge: Ann Arbor*)

- **Football:** 110,648 on Aug 30, 2025 vs New Mexico ([ESPN](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/130/schedule?season=2025)). **(2nd pass)** Home totals from Wikipedia team-season pages (secondary), summed by me:

| Season | Home games at A1 | Home total | Average | Range | Source |
|---|---|---|---|---|---|
| 2023 | 7 | 769,797 | ~109,971 | 109,480–110,615 | [2023 team page](https://en.wikipedia.org/wiki/2023_Michigan_Wolverines_football_team) |
| 2024 | 8 | 884,382 | ~110,548 | 109,830–111,170 | [2024 team page](https://en.wikipedia.org/wiki/2024_Michigan_Wolverines_football_team) |
| 2025 | 6 | 665,049 | ~110,842 | 110,517–111,373 | [2025 team page](https://en.wikipedia.org/wiki/2025_Michigan_Wolverines_football_team) |

- **Postseason (2nd pass):** none at A1; all neutral sites. 2023: Big Ten Championship, Lucas Oil Stadium, Dec 2, 2023 (67,842); Rose Bowl (CFP semifinal), Pasadena, Jan 1, 2024 (96,371); CFP final, NRG Stadium, Houston, Jan 8, 2024 (72,808) ([2023](https://en.wikipedia.org/wiki/2023_Michigan_Wolverines_football_team)). 2024: ReliaQuest Bowl, Raymond James Stadium, Tampa, Dec 31, 2024 (51,439) ([2024](https://en.wikipedia.org/wiki/2024_Michigan_Wolverines_football_team)). 2025: Citrus Bowl vs Texas, Camping World Stadium, Orlando, Dec 31, 2025 (47,316) ([2025](https://en.wikipedia.org/wiki/2025_Michigan_Wolverines_football_team)). Also a 2025 road game at Wrigley Field vs Northwestern, Nov 15 (38,223), which is Northwestern's home game, not Michigan's.
- **Basketball and hockey:** **gap** (2nd pass: still a gap). The [2025–26 men's basketball Wikipedia page](https://en.wikipedia.org/wiki/2025%E2%80%9326_Michigan_Wolverines_men%27s_basketball_team) has no attendance column; ESPN's schedule was cut off after four games (Crisler, UTC dates: Nov 4, 2025 vs Oakland 11,801; Nov 19 vs Middle Tennessee 11,188; plus the LCA neutral game, 7,362) ([ESPN API](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/130/schedule?season=2026)). Postseason 2026 sites (no attendance): Big Ten tournament at the United Center, Chicago, Mar 10–15; NCAA first round at KeyBank Center, Buffalo, Mar 19 ([Wikipedia](https://en.wikipedia.org/wiki/2025%E2%80%9326_Michigan_Wolverines_men%27s_basketball_team)). Hockey not checked.

#### Detroit Mercy (A8) (2nd pass)

Men's basketball, home games at Calihan Hall as listed on Wikipedia season pages (secondary; exhibitions excluded; totals are my sums):

| Season | Home games listed | Home total | Average | Range | Postseason home games | Source |
|---|---|---|---|---|---|---|
| 2024–25 | 13 | 14,727 | ~1,133 | 807–2,047 (Oakland, Jan 18, 2025) | None. Horizon first round was away at Northern Kentucky, Mar 4, 2025 (1,879) | [2024–25 team page](https://en.wikipedia.org/wiki/2024%E2%80%9325_Detroit_Mercy_Titans_men%27s_basketball_team) |
| 2025–26 | 13 | 17,547 | ~1,350 | 787–2,833 (Oakland, Jan 24, 2026) | **Mar 4, 2026, Horizon first round vs Milwaukee at Calihan Hall: 3,131.** Semifinal (Mar 9) and final (Mar 10) at Corteva Coliseum, Indianapolis (no attendance listed) | [2025–26 team page](https://en.wikipedia.org/wiki/2025%E2%80%9326_Detroit_Mercy_Titans_men%27s_basketball_team) |

ESPN box scores agree for the games that loaded (e.g. 977, 807 and 1,098 in Nov 2024; 1,001 and 1,839 in Nov 2025) ([ESPN 2025](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2174/schedule?season=2025), [ESPN 2026](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2174/schedule?season=2026)). 2023–24: **gap** (not checked).

#### Wayne State (A18) (2nd pass)

Men's basketball, from the official cumulative stats pages (Sidearm "Attendance" row). The page does not label the columns home/away; in this stat format the team column is normally home games and the opponent column road games, so treat the home reading as **likely, not confirmed**:

| Season | Team column (likely home): games, total, avg | Opponent column (likely away) | Source |
|---|---|---|---|
| 2024–25 | 14 games, 3,924, avg 280 | 15 games, 8,499, avg 567 | [WSU stats 2024–25](https://wsuathletics.com/sports/mens-basketball/stats/2024-25) |
| 2025–26 | 15 games, 3,725, avg 248 | 12 games, 6,506, avg 542 | [WSU stats 2025–26](https://wsuathletics.com/sports/mens-basketball/stats/2025-26) |

Postseason home games: **gap** (not checked). 2023–24: **gap**.

#### Windsor Spitfires (A13)

- **Regular-season and postseason attendance:** **gap** (not searched in either pass).
- **Lead:** the CHL site's schedule pages under team ID 17 ([2026–27](https://chl.ca/ohl-spitfires/schedule/17/88/)) link game sheets, which usually carry attendance.

---

## Inaccessible sources

| Source | What happened | Effect |
|---|---|---|
| [detcityfc.com/tickets](https://www.detcityfc.com/tickets/) | The fetch proxy refused it (HTTP 429, rate-limited) and said not to retry | DCFC ticketer and attendance claims not checked |
| [MLB Stats API, 2023 Tigers postseason](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=116&season=2023&gameType=F,D,L,W) | HTTP 429 | 2023 Tigers postseason is a gap |
| ESPN Red Wings postseason schedules for 2024 and 2025 (`…/hockey/nhl/teams/det/schedule?season=2024&seasontype=3`, `season=2025`) | HTTP 429 | Red Wings 2023–24 and 2024–25 postseason status rests on Hockey-Reference standings only |
| Ticketmaster venue pages [66238](https://www.ticketmaster.com/little-caesars-arena-tickets-detroit/venue/66238), [65577](https://www.ticketmaster.com/crisler-arena-tickets-ann-arbor/venue/65577), [338882](https://www.ticketmaster.com/WFCU-Centre-tickets-Windsor/venue/338882), [venueinfo/131710](https://www.ticketmaster.com/venueinfo/131710/) and the [DCFC artist page](https://www.ticketmaster.com/detroit-city-fc-tickets/artist/2612732) | Fetch returned a client error | IDs taken from search URLs where available; WFCU and the Colosseum are marked not verified |
| ESPN attendance pages ([NFL 2024](https://www.espn.com/nfl/attendance/_/year/2024), [NHL 2025](https://www.espn.com/nhl/attendance/_/year/2025)) | The page rendered empty to the fetcher | Pro-Football-Reference used for the Lions; Red Wings attendance is a gap |
| Web search | The shared search budget (200 searches) was used up partway through the pass | Official team brand pages, Spitfires, Wayne State, Detroit Mercy, Cruise and Michigan attendance were not searched |
| Long API pages (ESPN team schedules, NHL club schedule, MLB box scores) | Truncated by the fetch length limit (about 80,000 characters) | Partial coverage, noted where it applies. MLB attendance was read through a field-filtered game feed instead. |

## Second-pass status (Oct 14, 2026)

- **Filled:** official colors for Detroit Mercy and Wayne State; partial official color for the Spitfires; PWHL Detroit colour names (no hex); Red Wings attendance 2023–24 to 2025–26 and 2023–24 playoff status; DCFC 2023–2025 averages and 2024 home playoff crowd; Michigan football 2023–2025 home totals and postseason sites; Detroit Mercy 2024–25 and 2025–26 home totals; Wayne State 2024–25 and 2025–26 attendance rows; Red Wings home games after Dec 20, 2026; the Pistons' Nov 1, 2025 Mexico City home game (a correction); PWHL Detroit 2026–27 home dates (2 venues TBD); Spitfires feed status; Colosseum ticketmaster.ca ID; Masonic AXS room ID.
- **Still gaps:** official hex for Lions, Tigers, Pistons, Red Wings and DCFC (ESPN stays secondary); PWHL Detroit hex; Spitfires secondary color and attendance; Cruise season totals; Michigan basketball and hockey attendance; DCFC 2026 full season; Crisler duplicate ID; WFCU Ticketmaster ID; Keyworth; Pistons 2026–27 schedule game by game; the "Motor City MACtion" date.
- **Inaccessible this pass:** Ticketmaster venue pages 65577, 66060, 341083, ticketmaster.ca 131710 and 131950, and Ticketmaster event/search pages (fetch errors); the NCAA attendance PDF on fs.ncaa.org (fetch error); ESPN `hockey/pwhl` API path (error). None were retrieved another way.

## Biggest remaining gaps (for the city gaps list, first pass; see second-pass status above)

1. **Ticketmaster IDs for A9, A13 and A16.** These rooms appear to sell through AXS or a Canadian storefront.
2. **Masonic Temple room match (A17).** Confirm which room venue 65557 sells.
3. **Official team hex colors.** All pro teams, DCFC, the Cruise and Detroit Mercy currently rely on ESPN values labeled secondary. PWHL Detroit has no colors yet, and the Spitfires and Wayne State's secondary color are blank.
4. **Red Wings regular-season attendance (2023–26).** No figures found for any season.
5. **College and minor-team attendance.** Michigan, Detroit Mercy, Wayne State, Cruise and DCFC season totals are missing.
6. **Neutral-site games.** The Red Wings after Dec 20, 2026, Pistons NBA international games and the date of the CMU–EMU "Motor City MACtion" game at Ford Field are unchecked.
7. **Free feeds** for PWHL Detroit, Wayne State and the Windsor Spitfires.
