# Ottawa–Gatineau: follow-up on city-build gaps

**Answer date:** Tuesday, October 13, 2026 (America/Los_Angeles); **second pass Oct 14, 2026** (gap cells only; earlier sourced cells were not re-verified). Statements about "current" status are as of the first-pass date unless a cell says "second pass".
**Inputs:** the brief (`ottawa-gatineau-gaps-followup-prompt.md`) and the venue answer (`ottawa-gatineau-venue-table-answer.md`, dated Oct 12, 2026). Room IDs (A1–A14) are taken from the venue answer.
**City-type answer not provided:** the brief refers to `ottawa-gatineau-city-type-answer.md`, but that file was not supplied for this pass. This answer does not redo the city-type, fan-mode or car-share work, and does not check against it.

**Method and limits (read first)**
- Public sources only. No access controls or paywalls were bypassed, and no page that failed was retrieved by another route.
- **Web search budget ran out partway through** (a shared per-turn limit). After that, only pages already seen in search results, pages linked from fetched pages, or obvious official endpoints were fetched. Several Ticketmaster IDs therefore rest on the **venue page URL and page title shown in search results**, not on a loaded page. The verification column says which.
- **Pages refused or unreadable in this pass:** the fetch proxy refused three pages with HTTP 429 (rate limited) and they were not retried: the Wikipedia page for Ottawa Macdonald–Cartier International Airport, the [Ottawa Rapid FC](https://en.wikipedia.org/wiki/Ottawa_Rapid_FC) Wikipedia page, and the [TD Place rentals page](https://www.tdplace.ca/?p=33887). Other failures are listed in section 9.
- **Secondary sources:** most per-game crowds come from Wikipedia season pages (CC BY-SA). They are labelled *secondary*. API figures (NHL, ESPN) are labelled with the feed they came from.
- Nothing here is app code, a personal rating or a cost commitment.

---

## 1. Name, short form, code and covered area (brief item 1)

| Field | Finding | Source / status |
|---|---|---|
| Display name | **Ottawa–Gatineau** | Statistics Canada's metro is the [Ottawa–Gatineau CMA](https://ottawa.ca/en/living-ottawa/statistics-and-demographics/2021-census). Event operators use the same pairing: the NLL described the Black Bears' market as the ["Ottawa-Gatineau region"](https://www.oursportscentral.com/services/releases/nll-issues-statement-on-the-ottawa-black-bears/n-6379764), and the Senators' arena partner refers to ["our Ottawa-Gatineau community"](https://ncc-ccn.gc.ca/news/joint-statement-from-the-national-capital-commission-and-capital-sports-development-inc). The federal events program uses ["Canada's Capital Region"](https://www.canada.ca/en/canadian-heritage/news/2026/05/in-the-mood-to-celebrateunveiling-the-program-for-canada-day-2026.html) for cross-river events. |
| Short form | **Ottawa** | Every pro team except one carries "Ottawa" in its name: [Senators](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/ott), [Redblacks](https://en.wikipedia.org/wiki/2026_Ottawa_Redblacks_season), [Charge](https://www.thepwhl.com/en/teams/ottawa-charge), [Atlético Ottawa](https://www.cplsoccer.com/schedule), [67's](https://chl.ca/ohl/), [BlackJacks](https://www.cebl.ca/schedule). The exception is the [Gatineau Olympiques](https://chl.ca/lhjmq/), the only Quebec-side team. This is unlike Tampa Bay, where locals and teams use a regional name. Here the teams use the core-city name, and "Ottawa–Gatineau" appears only in regional or official contexts. |
| Three-letter code | **YOW** is the lead from the brief (the airport code). It is also used as a local brand, e.g. a "YOW Stage" at the EY/Cohere Centre ([OBJ, cited in the venue answer](https://obj.ca/company/ey-centre)). | **Verified in the second pass (Oct 14, 2026):** the airport's IATA code is **YOW** (ICAO **CYOW**) ([Wikipedia, secondary](https://www.wikipedia.org/wiki/CYOW): "(IATA: YOW, ICAO: CYOW)"; [613today](https://www.613today.ca/places/ottawa-airport): "Ottawa's airport code is YOW"). Local brand use: the airport authority's site is **yow.ca** and its X account is **@FlyYOW** (per [613today](https://www.613today.ca/places/ottawa-airport)); yow.ca itself was not opened (fetch permission timed out, not retried). *(First-pass note: the airport page was rate-limited (429) on Oct 13.)* Team feeds do **not** use YOW. The NHL and ESPN use **OTT** for the Senators ([NHL API](https://api-web.nhle.com/v1/club-schedule-season/OTT/now), [ESPN](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/ott)), and ESPN uses **ORB** for the Redblacks ([ESPN CFL teams](https://site.api.espn.com/apis/site/v2/sports/football/cfl/teams)). As with Tampa Bay (code TPA), a city code that differs from team codes is not a conflict. Team codes stay in team records. |
| Covered area | **City of Ottawa** (including Kanata, Orléans, Nepean and rural wards such as Carp) **plus Ville de Gatineau** (Hull, Aylmer, Gatineau sector, Buckingham, Masson-Angers) | Boundary and reasons are in the [venue answer, sections 1 and 5](ottawa-gatineau-venue-table-answer.md). The cross-river link is backed by [Statistics Canada commuting data](https://www.statcan.gc.ca/o1/en/plus/7803-tale-two-cities-one-national-capital-region-ottawa-gatineau-glance). |
| How the Quebec side is handled | Gatineau is in the **core** area, not an add-on. Rooms there (A8 Centre Slush Puppie, A13 Théâtre du Casino du Lac-Leamy) carry the municipality "Gatineau" and province QC. Quebec-side CMA municipalities outside Gatineau (Chelsea, Cantley, Val-des-Monts, La Pêche, Pontiac) are **excluded** from fixed rooms. Luskville Dragway (Pontiac) is a hand-logged edge case. Both sides are on Eastern Time. | [Venue answer, section 5](ottawa-gatineau-venue-table-answer.md). Many Gatineau sources are French-only, and bilingual names (e.g. *Centre Canadian Tire*, *Stade Place TD*) must be matched as aliases. |

---

## 2. Build-rule notes (for whoever turns this into app data)

- **IDs must be unique across all cities.** `giants`, `jets`, `rangers`, `kings` and `cardinals` are already taken, so prefix this city's team and venue IDs with the city (e.g. an `ottawa-` or `yow-` prefix; the build team picks the form). Watch for these collisions in this city:
  - "Senators", "Titans", "Charge" and "Olympiques" are generic.
  - "Rogers Centre" collides with Toronto's Rogers Centre, the venue answer's A7.
  - "Slush Puppie" collides with Kingston's Slush Puppie Place, the venue answer's A8.
- **No separate per-city opponents file.** Opponent draws go into `expectedDrawIndex`, as in every other city.
- **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list. This applies to The Arena at TD Place (section 7).
- **Car shares:** wire measured ones, wire sourced estimates marked *estimated*, and leave the rest on the city default. The city-type answer was not supplied for this pass, so no car-share values are given or changed here.
- **Ticketmaster duplicates:** some rooms have more than one Ticketmaster venue ID, or IDs under old names (section 3). Map all known IDs for a room to that one room ID, so that one event is not counted twice.
- **Neutral-site and relocated games** (section 5) must be attached to the actual site, not to the home room.

---

## 3. Ticketmaster venue IDs by room (brief item 2; "End with" item 2)

**What each verification label means**
- **Verified (page loaded):** the Ticketmaster venue page was fetched and showed the room's name, address or events.
- **Verified (search URL + title):** a Ticketmaster venue URL containing the numeric ID came back from a search, with a page title naming the room and city. The page itself did not load in this pass, because the fetch returned a client error.
- **Not verified:** no Ticketmaster venue URL was found for the room.

No Discovery API key was used, so these are Ticketmaster's numeric web venue IDs, not Discovery API venue IDs.

| Room ID | Room | Ticketmaster venue ID | Verification link | Status and notes |
|---|---|---|---|---|
| A1 | TD Place Stadium | **402506** | [The Stadium at TD Place – Ottawa, ON](https://www.ticketmaster.ca/the-stadium-at-td-place-tickets-ottawa/venue/402506) | **Verified (page loaded).** The page shows "The Stadium at TD Place, 1015 Bank Street, Ottawa, ON K1S 3W7" and 6 results. |
| A2 | Canadian Tire Centre | **131188** | [Canadian Tire Centre – Kanata, ON](https://www.ticketmaster.ca/canadian-tire-centre-tickets-kanata/venue/131188) | **Verified (page loaded).** The page lists current touring acts (e.g. Bruce Springsteen, Avril Lavigne, WWE, PBR). |
| A2 | Canadian Tire Centre (second ID) | **401524** | [Canadian Tire Centre – Kanata, ON (.com)](https://www.ticketmaster.com/canadian-tire-centre-billets-ottawa/venue/401524); legacy slug [Scotiabank-Place-formerly-the-Corel-Centre/venue/401524](https://www.ticketmaster.com/Scotiabank-Place-formerly-the-Corel-Centre-tickets-Kanata/venue/401524/) | **Verified (search URL + title).** Ticketmaster's Senators page carries filter links for both IDs ([venueId=401524](https://www.ticketmaster.ca/ottawa-senators-tickets/artist/805997?venueId=401524), [venueId=131188](https://www.ticketmaster.com/ottawa-senators-tickets/artist/805997?venueId=131188)). Map both to A2. |
| A3 | Ottawa Stadium | **401543** | [RCGT Park – Ottawa, ON](https://www.ticketmaster.ca/rcgt-park-tickets-ottawa/venue/401543) | **Verified (search URL + title)**, under the **old name** RCGT Park. |
| A4 | Cohere Centre (formerly EY Centre) | **402612** and **402378** | [EY Centre – Ottawa, ON (.com)](https://www.ticketmaster.com/ey-centre-tickets-ottawa/venue/402612); [Ernst & Young Centre – Ottawa, ON (.ca)](https://www.ticketmaster.ca/Ernst-Young-Centre-tickets-Ottawa/venue/402378) | **Verified (search URL + title)**, both under **old names**. No "Cohere Centre" listing was found before the search budget ran out. Which ID carries current events is unknown. Both are building-level, not hall-level. |
| A5 | The Arena at TD Place | **401513** | [The Arena at TD Place – Ottawa](https://www.ticketmaster.ca/the-arena-at-td-place-billets-ottawa/venue/401513) | **Verified (search URL + title).** The venue answer also loaded this page and found 67's and Charge events. |
| A6 | Lansdowne Event Centre | — | — | **Not applicable.** Under construction, and no listing exists. |
| A7 | Rogers Centre Ottawa (hall) | **402591** | [Shaw Centre – Ottawa, ON](https://www.ticketmaster.ca/shaw-centre-tickets-ottawa/venue/402591) | **Verified (search URL + title)**, under the **old name** Shaw Centre, and building-level only. **Do not use** [401514 "Ottawa Congress Centre"](https://www.ticketmaster.ca/ottawa-congress-centre-tickets-ottawa/venue/401514): that is the predecessor building's name, and mapping it to A7 is not verified. |
| A8 | Centre Slush Puppie | **403003** | [Centre Slush Puppie – Gatineau, QC](https://www.ticketmaster.ca/centre-slush-puppie-tickets-gatineau/venue/403003) | **Verified (search URL + title).** |
| A9 | TAAG Park | — | — | **Not verified.** No Ticketmaster venue URL was found. **Second pass:** Carleton Ravens tickets are sold on **Showpass** (app, online and box office) per the [Ravens ticket FAQ](https://goravens.ca/ravens-tickets/FAQ); a Ticketmaster search found no TAAG Park venue. Likely no Ticketmaster ID exists; concerts at A9 need another ticket source. |
| A10 | Southam Hall (NAC) | **401520** | [National Arts Centre Southam Hall – Ottawa, ON](https://www.ticketmaster.com/national-arts-centre-southam-hall-tickets-ottawa/venue/401520) | **Verified (search URL + title).** The NAC's own box office may sell most shows, but that was not checked. |
| A11 | Hard Rock Live Ottawa | **Room ID not verified.** Property-level candidates: **403063** and **403088** | [Hard Rock Hotel and Casino Ottawa – Ottawa, ON (403063)](https://www.ticketmaster.ca/hard-rock-hotel-and-casino-ottawa-tickets-ottawa/venue/403063); [The Joint at Hard Rock Hotel and Casino Ottawa – Gloucester, ON (403088)](https://www.ticketmaster.ca/the-joint-at-hard-rock-hotel-tickets-gloucester/venue/403088) | **Not verified for the room.** [Hard Rock Live's own page](https://casino.hardrock.com/ottawa/entertainment/hard-rock-live) links each show to a Ticketmaster *event* page (e.g. [Barenaked Ladies, Nov 14](https://www.ticketmaster.ca/event/310064F0DC119585)), but no venue ID is shown, and the event page did not load. 403063 appears under three slugs, all at the property level. It is not known whether 403088 ("The Joint") is the same room under an earlier name. **Second pass:** Hard Rock's page (re-read Oct 14) still links only `/event/` pages (e.g. [3100643DE40AA3AD](https://www.ticketmaster.ca/event/3100643DE40AA3AD)) and gives the address **4837 Albion Road, Ottawa, ON K1X 1A3**; the event page and venue page 403063 both failed to load again (client error), and a Ticketmaster-domain search for "Hard Rock Live" Ottawa returned only other cities' Hard Rock Live venues. Room-level ID still **not verified**. |
| A12 | Ravens' Nest | — | — | **Not verified.** No Ticketmaster venue URL was found. **Second pass:** same as A9 — Ravens basketball tickets are on **Showpass** ([Ravens ticket FAQ](https://goravens.ca/ravens-tickets/FAQ)). uOttawa Gee-Gees games also use Showpass ([example](https://www.showpass.com/gee-gees-football/)). |
| A13 | Théâtre du Casino du Lac-Leamy | **336671** | [Theatre du Casino Lac Leamy – Gatineau, QC](https://www.ticketmaster.com/theatre-du-casino-lac-leamy-tickets-gatineau/venue/336671?page=2) | **Verified (search URL + title).** |
| A14 | LeBreton Flats arena | — | — | **Not applicable.** This is a proposal with no building. |

**Count:**
- **Verified, page loaded:** 2 IDs (A1 402506; A2 131188).
- **Verified by search URL and title:** 9 IDs (A2 401524; A3 401543; A4 402612 and 402378; A5 401513; A7 402591; A8 403003; A10 401520; A13 336671).
- **Rooms not verified:** A9, A11 (room-level), A12.
- **Not applicable:** A6, A14.

**Second pass (Oct 14, 2026):** no "search URL + title" ID could be upgraded to "page loaded". Every Ticketmaster page tried (venue 403063, event 3100643DE40AA3AD) failed again with a client error, so Ticketmaster pages appear unfetchable from this tool; no other route was used. No non-Ticketmaster page linking to a Ticketmaster *venue* URL was found for the nine search-only IDs. Other ticketers noted: **Showpass** for Carleton (A9, A12) and uOttawa games; TD Place's own [ticket information page](https://www.tdplace.ca/?p=11) exists but was not opened.

Under the brief's rule ("if a room has no ID, the city ships with no concerts there"), **A9, A11 and A12 have no concert listings** until an ID is confirmed. A11 is the one that matters most, because it is an active concert room of about 1,900–2,200.

---

## 4. Teams: league, home room, free schedule feed, colors (brief items 3 and 6; "End with" item 3)

**Feed classes used below**
- **Free feed (verified):** a machine-readable schedule was fetched and returned current games, or the league publishes a public calendar file.
- **League site only:** a public schedule web page exists, and team IDs appear in its page data, but no documented free feed was confirmed.
- **No feed:** nothing usable was found, or the feed that exists is stale.

**Colors:** no official team or league brand page with **hex codes** was found for any team in this pass. Where a hex value appears, it is labelled with its source. Color *names* from official pages are given where found. The hex columns otherwise read **gap**, because no hex has been invented.

**Second pass (Oct 14, 2026) on colors:** official hex codes were found for the two universities only: the [Carleton Ravens Brand Guide (PDF, goravens.ca)](https://goravens.ca/wp-content/uploads/Ravens-Brand-Guide.pdf) and the [uOttawa brand page](https://www.uottawa.ca/about-us/administration-services/brand). Team and league pages checked without hex codes: [Atlético Ottawa emblem page](https://www.cplsoccer.com/atleticoottawa/emblem-inspiration) (names only), [PWHL Charge identity release](https://www.thepwhl.com/en/news/2024/september/09/pwhl-unveils-ottawa-charge-in-league-wide-team-identity-launch) (names only), [Rapid FC launch release](https://www.rapidfc.ca/news/introducing-ottawa-rapid-fc) (no colour detail), [carleton.ca/brand](https://carleton.ca/brand/) (palette shown as an image only). ESPN's CFL team endpoints ([teams](https://site.api.espn.com/apis/site/v2/sports/football/cfl/teams), [teams/87](https://site.api.espn.com/apis/site/v2/sports/football/cfl/teams/87)) carry no colour fields for the Redblacks. Other hex values below are from colour-aggregator sites and are labelled **secondary**; aggregators that state no source (teamcolorcodes.com, logotyp.us) say they are not affiliated with any team.

| Team | League | Home room ID (dated) | Free feed and ID | Primary hex | Secondary hex | Color source and notes |
|---|---|---|---|---|---|---|
| Ottawa Senators | NHL | A2 (1996–present) | **Free feed (verified).** [NHL web API, team code `OTT`](https://api-web.nhle.com/v1/club-schedule-season/OTT/now), which returned the 2026-27 season. [ESPN team ID `14`, abbreviation `OTT`](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/ott), with schedule and attendance returned by [ESPN's team schedule](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/14/schedule?season=2026&seasontype=3). | `#DD1A32` (**secondary**: ESPN API `color` field, not a team brand source) | `#000000` black (**secondary**, second pass: [teamcolorcodes.com](https://teamcolorcodes.com/ottawa-senators-color-codes/)) | Color names black, red, white with gold trim ([Wikipedia, secondary](https://en.wikipedia.org/wiki/Ottawa_Senators)). No official brand page was found. Second pass: teamcolorcodes lists Black `#000000`, Red `#DA1A32`, Gold `#B79257`, White `#FFFFFF`. **Conflict:** its red `#DA1A32` differs from ESPN's `#DD1A32`; keep both. |
| Ottawa Redblacks | CFL | A1 (2014–present) | **No feed.** ESPN has a CFL team ID **`87`** (abbreviation `ORB`) in its [CFL teams endpoint](https://site.api.espn.com/apis/site/v2/sports/football/cfl/teams), but the feed is **stale**: the [team schedule](https://site.api.espn.com/apis/site/v2/sports/football/cfl/teams/87/schedule) returned the 2023 off-season with no events, and the [scoreboard](https://site.api.espn.com/apis/site/v2/sports/football/cfl/scoreboard) returned Nov 2022. The [CFL.ca schedule page](https://www.cfl.ca/schedule/) loaded with no games in its text and no feed link. Second pass: still **no feed**. A search for a Redblacks calendar-sync or feed found only ticket resellers and schedule aggregators (e.g. [fbschedules.com](https://fbschedules.com/cfl/ottawa-redblacks/), [Pro Football Archives](https://profootballarchives.com/2026cflott.html)), none of them a feed. | `#AC1F2D` red (**secondary**, second pass: [logotyp.us](https://logotyp.us/logo/ottawa-redblacks/), no source cited) | **gap** (logotyp.us lists only red and white `#FFFFFF`; no hex for black found) | Red, black, white ([Wikipedia, secondary](https://en.wikipedia.org/wiki/Ottawa_Redblacks)). No official brand page found; ESPN CFL endpoints carry no colour fields. Note: logotyp.us's red is the same value teamcolorcodes gives the 67's, so treat it as low-confidence. |
| Atlético Ottawa | CPL | A1 (2021–present) | **League site only.** The [CPL schedule page](https://www.cplsoccer.com/schedule) (2026) has a "2026 CPL Schedule Calendar Sync" link ([ql.e-c.al/3O7rg1g](https://ql.e-c.al/3O7rg1g)) whose format was not confirmed. The team's URL slug is [`atleticoottawa`](https://www.cplsoccer.com/atleticoottawa/), and no numeric team ID was seen. The ESPN Canadian Premier League endpoint (`soccer/can.1`) failed to load, so it is not verified. Second pass: the calendar-sync link redirects (HTTP 302) to an **ECAL** subscription widget at `sync.ecal.com` (widget ID `63f55cd8523d25000e84ff87`), not to a plain `.ics` file; ECAL widgets are a sign-up flow, so this is not counted as a free feed. The ESPN `can.1/teams` endpoint failed again. Status stays **league site only**. | `#E61D2F` Federal Red (**secondary**, second pass: [brandcolorcode.com](https://www.brandcolorcode.com/atletico-ottawa), which cites the club's brand guidelines as its source; the guidelines themselves were not seen) | `#102F4F` Rideau Blue (same source); Blanc `#FFFFFF` | The club names its colors "federal red", "blanc d'Ottawa" and "Rideau blue" ([Wikipedia, secondary](https://en.wikipedia.org/wiki/Atl%C3%A9tico_Ottawa)). Second pass: the club's [emblem page](https://www.cplsoccer.com/atleticoottawa/emblem-inspiration) (official) confirms Federal Red is the primary colour, but gives no hex. |
| Ottawa 67's | OHL | A5 (current); occasional games at A2; planned A6 (proposal) | **League site only.** The [CHL/OHL site](https://chl.ca/ohl/) has team page `chl.ca/ohl-67s`, and **team ID `5`** appears as HomeID/VisitorID in the league's scoreboard data. That data is page-embedded and needs a site API key, so it is not a documented free feed. Second pass: OurSports Central has a public [OHL schedule page](https://www.oursportscentral.com/services/schedule/ontario-hockey-league/l-111) and a [67's team page, ID `t-1311`](https://www.oursportscentral.com/sports/ottawa-67s/t-1311), but no iCal or team feed (only a site-wide RSS index). Status stays **league site only**. | `#AC1F2D` red (**secondary**, second pass: [teamcolorcodes.com](https://teamcolorcodes.com/ottawa-67s-color-codes/)) | `#000000` black (same); white `#FFFFFF` | Red, white, black ([Wikipedia, secondary](https://en.wikipedia.org/wiki/Ottawa_67%27s)). No official brand page found. |
| Gatineau Olympiques | QMJHL / LHJMQ | A8 (2021-22–present) | **League site only.** The [CHL/LHJMQ site](https://chl.ca/lhjmq/) has its schedule at `chl.ca/lhjmq/schedule` and team page `chl.ca/lhjmq-olympiques`; **team ID `12`** appears in the scoreboard data and logo path. As with the OHL, this is not a documented free feed. | `#717073` gray (**secondary**, second pass: [teamcolorcodes.com](https://teamcolorcodes.com/gatineau-olympiques-color-codes/), listed first) | `#000000` black (same); also white `#FFFFFF`, light gray `#A7B1B7` | Black, white, silver ([Wikipedia, secondary](https://en.wikipedia.org/wiki/Gatineau_Olympiques)). Team site: olympiquesdegatineau.ca, which was not fetched. No official hex found. The build team may prefer black as primary; the aggregator's order is kept here as published. |
| Ottawa BlackJacks | CEBL | A5 (current) | **Free feed (verified, league-wide).** The [CEBL 2026 schedule page](https://www.cebl.ca/schedule) links a public Google Calendar iCal feed covering all teams: `https://calendar.google.com/calendar/ical/cebl.ca_kcit876jdf791sora73e69jbfs%40group.calendar.google.com/public/basic.ics`. Team stats page slug: `/stats/ottawa`. No numeric team ID was seen. Filter the feed by team name. | **gap** | **gap** | Black, grey, red ([Wikipedia, secondary](https://en.wikipedia.org/wiki/Ottawa_BlackJacks)). Second pass: no official or aggregator hex found (search for BlackJacks colour codes returned only other Ottawa teams). |
| Ottawa Charge | PWHL | A5 Jan 2, 2024 – 2025-26 regular season; **A2 from 2026-27** | **League site only.** [Charge schedule page](https://www.thepwhl.com/en/teams/ottawa-charge/schedule). The [2026-27 schedule release](https://www.thepwhl.com/en/teams/ottawa-charge/news/2026/october/01/ottawa-charge-announce-2026-27-regular-season-schedule) links `thepwhl.com/en/stats/schedule/5/11/...`, which suggests **team ID `5`**, but that page returned no schedule data when fetched, so the ID is **not confirmed**. The ESPN PWHL endpoint failed to load. | **gap** | **gap** | **Official names, no hex:** the PWHL identity release describes a "bold, bright red", "a trio of grays, ranging from deep charcoal to lighter steel", "an arctic white" and "a dynamic pop of yellow" ([PWHL, Sep 9, 2024](https://www.thepwhl.com/en/teams/ottawa-charge/news/2024/september/09/high-voltage-hockey-powers-forward)). Second pass: the league-wide [identity release](https://www.thepwhl.com/en/news/2024/september/09/pwhl-unveils-ottawa-charge-in-league-wide-team-identity-launch) also has no hex; no aggregator hex found. Still **gap**. |
| Ottawa Titans (added; listed in the venue answer) | Frontier League | A3 (2022–present) | **No feed found.** Team site [ottawatitans.com](https://ottawatitans.com/ottawa-stadium) and the [Frontier League team page](https://www.frontierleague.com/home2e67cc5a) exist, but no machine-readable schedule was checked. The MLB Stats API was not checked for Frontier League coverage. Second pass: the [2026 schedule release](https://www.ottawatitans.com/frontier-league-ottawa-titans-announce-2026-schedule-season-begins-may-8-at-home) links a [schedule page](https://www.ottawatitans.com/schedule/month) (no `.ics` or subscribe link; the grid did not render in the fetch), a printable PDF, and the league stats provider **iScore Central**, where the Titans' team ID is **`2b9f7f27-3609-446c-bfa1-4eaef4001840`** ([team page](https://pro.iscorecentral.com/FL/teams/2b9f7f27-3609-446c-bfa1-4eaef4001840); league [scoreboard](https://pro.iscorecentral.com/FL/scoreboard)). iScore Central is a web stats site, not a documented feed. Status: **league site only** (upgraded from "no feed"). | **gap** | **gap** | Red, black, white, gray ([Wikipedia, secondary](https://en.wikipedia.org/wiki/Ottawa_Titans)). Second pass: the 2020 identity launch names red, white and black, no hex ([SportsLogos.net](https://news.sportslogos.net/?p=50808), secondary). |
| Ottawa Rapid FC (added) | Northern Super League (women's pro soccer, per the venue answer) | A1 | **Free feed (verified, second pass).** ESPN soccer league code **`can.w.nsl`**, team ID **`131261`**, abbreviation `OTT`: the [ESPN team schedule endpoint](https://site.api.espn.com/apis/site/v2/sports/soccer/can.w.nsl/teams/131261/schedule) returned the 2026 season (10+ events, e.g. Aug 9, 2026 vs AFC Toronto at home; Oct 2, 2026 at Montreal Roses, Stade Boréale). Attendance fields came back as 0, so the feed gives **no crowd counts**. ESPN web pages: [team](https://www.espn.com/soccer/team/_/id/131261), [league table](https://global.espn.com/football/league/_/name/can.w.nsl). League confirmed as the Northern Super League ([NSL 2026 schedule release](https://www.nsl.ca/news/from-breakout-debut-to-season-two-northern-super-league-releases-2026-schedule)). | `#54CFE7` (**secondary**, second pass: ESPN API `color` field) | **gap** (ESPN returned no `alternateColor`) | Second pass: shades of blue (light blue in the crest) with a neon-orange accent, no hex ([SportsLogos.net on the Aug 15, 2024 launch](https://news.sportslogos.net/2024/08/15/think-fast-ottawa-nsl-franchise-rolls-out-rapid-fc-name-logo/soccer/), secondary). The club's [launch release](https://www.rapidfc.ca/news/introducing-ottawa-rapid-fc) gives no colour detail. |
| Carleton Ravens (added) | U SPORTS / OUA | A9 (football, soccer, rugby); A12 (basketball) | **No feed found** (second pass). Team site [goravens.ca](https://goravens.ca/sports/fball/2026-27/releases/20260408kh72go) runs on PrestoSports URL patterns (`/sports/fball/2026-27/...`); the 2026 football schedule is published as a [news release](https://goravens.ca/sports/fball/2026-27/releases/20260408kh72go) with no calendar link, and the schedule page `goravens.ca/sports/fball/2026-27/schedule` failed to load. OUA's schedule is reported by press ([3DownNation, Mar 26, 2026](https://3downnation.com/2026/03/26/ontario-university-athletics-unveils-2026-football-schedule)); no OUA or U SPORTS feed was found. | `#00000D` Raven Black (**official**, second pass: [Ravens Brand Guide PDF](https://goravens.ca/wp-content/uploads/Ravens-Brand-Guide.pdf), which states "This is the primary brand color") | `#E31936` Raven Red (**official**, same guide; PMS 186 C). White `#FFFFFF` also listed. | Official athletics brand guide. [brandcolorcode.com](https://www.brandcolorcode.com/carleton-ravens) gives the same values (secondary). |
| uOttawa Gee-Gees (added) | U SPORTS / OUA | Not a listed room ID (Gee-Gees Field, Montpetit Hall, Minto Sports Complex; no capacities in the venue answer) | **No feed found** (second pass). Gee-Gees athletics pages sit on [ottawa.prestosports.com](https://ottawa.prestosports.com/tradition/pandagame); home games are also posted as [uOttawa event pages](https://www.uottawa.ca/campus-life/events-all/gee-gees-football-home-opener-0) (e.g. football vs Toronto, Sep 5, 2026, Gee-Gees Field, 200 Lees) with tickets on [Showpass](https://www.showpass.com/gee-gees-football/). No calendar export or feed was seen. | `#8F001A` Primary Garnet (**official university brand**, second pass: [uOttawa brand page](https://www.uottawa.ca/about-us/administration-services/brand)) | `#80746C` Primary Warm Grey (same page). The page also lists Charcoal Grey `#2D2D2C` and Secondary Garnet `#9C1C30`. | University-wide brand, not a Gee-Gees athletics guide (none found). Choice of grey for the secondary slot is from the university's primary palette; the [unicol R package](https://search.r-project.org/CRAN/refmans/unicol/html/uottawa.html) (secondary) gives the same garnet and greys. |
| Ottawa Black Bears | NLL | A2, 2024-25 and 2025-26 only | **Exclude.** The team was discontinued on Sep 10, 2026 ([CTV](https://www.ctvnews.ca/ottawa/article/ottawa-black-bears-lacrosse-team-to-be-discontinued-national-lacrosse-league-says/)). | — | — | — |

**Teams with a verified free feed:** Senators (NHL API and ESPN), BlackJacks (CEBL public iCal) and, from the second pass, **Rapid FC (ESPN `can.w.nsl`, team 131261)**.
**Teams on a league site only:** Atlético Ottawa (ECAL sync widget only), 67's, Olympiques, Charge and, from the second pass, **Titans (iScore Central team ID)**.
**Teams with no feed:** Redblacks (the ESPN CFL feed is stale; no CFL feed found), Carleton Ravens and uOttawa Gee-Gees.

*Second-pass note on the PWHL and QMJHL rows:* no new feed or ID evidence was found for the Charge (team ID `5` still unconfirmed) or the Olympiques beyond what the first pass recorded.

---

## 5. Games away from the home room, 2025 on (brief item 4; "End with" item 4)

"Home" means the team was the designated home side. **Attach each game to the actual site, not the home room.** Sites outside the Ottawa–Gatineau area should not create friction in this city.

| Team | Date | Game | Designated home | Actual site | Attendance | Source |
|---|---|---|---|---|---|---|
| Senators | Sep 28, 2025 | Preseason vs New Jersey Devils | Ottawa | **Centre Vidéotron, Quebec City** (`neutralSite: true`) | — | [NHL API 2025-26](https://api-web.nhle.com/v1/club-schedule-season/OTT/20252026) |
| Senators | Sep 30, 2025 | Preseason vs Montréal Canadiens | Ottawa | **Centre Vidéotron, Quebec City** (`neutralSite: true`) | — | [NHL API 2025-26](https://api-web.nhle.com/v1/club-schedule-season/OTT/20252026) |
| Senators | "Sep 21, 2025" (conflict) | Preseason opener | Not stated | Videotron Centre, Quebec City | — | [Wikipedia 2025-26 season, secondary](https://en.wikipedia.org/wiki/2025%E2%80%9326_Ottawa_Senators_season). **Conflict:** the NHL API shows the Quebec City games on Sep 28 and Sep 30, 2025. A Sep 21 Quebec City game appears in the **2026-27** API (row below). Trust the API. |
| Senators | Sep 21, 2026 | Preseason at Montréal Canadiens | Montréal | **Colisée Vidéotron, Quebec City** (neutral) | — | [NHL API 2026-27](https://api-web.nhle.com/v1/club-schedule-season/OTT/now). Ottawa is the away side, so nothing attaches to A2. |
| Senators | No date published | Kraft Hockeyville game vs Montréal | Not stated | Trois-Rivières (planned) | — | [Wikipedia 2025-26 season, secondary](https://en.wikipedia.org/wiki/2025%E2%80%9326_Ottawa_Senators_season). Not on the 2025-26 schedule. Re-check. |
| Senators | 2026-27 regular season | — | — | The API listed 16 Ottawa home games, **all at Canadian Tire Centre**. The feed was truncated after 35 games, so later games were not checked. | — | [NHL API 2026-27](https://api-web.nhle.com/v1/club-schedule-season/OTT/now) |
| Atlético Ottawa | **Feb 17, 2026** | CONCACAF Champions Cup R1, 1st leg vs Nashville SC (lost 0–2) | Atlético Ottawa | **Hamilton Stadium** (Hamilton, ON). TD Place was unavailable during renovation, and a cited CBC headline describes Ottawa being "frozen out" of TD Place | **290** (as published; unusually low, so verify against a CONCACAF match report) | [Wikipedia 2026 CONCACAF Champions Cup, secondary](https://en.wikipedia.org/wiki/2026_CONCACAF_Champions_Cup); [2026 Atlético Ottawa season](https://en.wikipedia.org/wiki/2026_Atl%C3%A9tico_Ottawa_season) |
| Charge | Feb 16, 2025 | vs Toronto | Ottawa | **Rogers Place, Edmonton** (neutral-site game) | 17,518 | [Wikipedia 2024-25 Charge season, secondary](https://en.wikipedia.org/wiki/2024%E2%80%9325_Ottawa_Charge_season) |
| Charge | Mar 22, 2026 | vs Montréal | Ottawa | **Canada Life Centre, Winnipeg** | 15,225 | [Wikipedia 2025-26 Charge season, secondary](https://en.wikipedia.org/wiki/2025%E2%80%9326_Ottawa_Charge_season) |
| Charge | Apr 1, 2026 | vs Toronto | Ottawa | **Scotiabank Saddledome, Calgary** | 16,150 | same |
| Charge | Apr 3, 2026 | vs Montréal | Ottawa | **A2 Canadian Tire Centre** (in the metro, but not the then-home A5) | 17,114 | same; also [PWHL](https://www.thepwhl.com/en/teams/ottawa-charge/news/2026/july/09/ottawa-charge-to-play-at-canadian-tire-centre-beginning-2026-27) |
| Charge | May 8, 10, 18 and 20, 2026 | 2026 playoff home games | Ottawa | **A2 Canadian Tire Centre** (not A5) | see section 6 | [Wikipedia 2025-26 Charge season, secondary](https://en.wikipedia.org/wiki/2025%E2%80%9326_Ottawa_Charge_season) |
| Charge | Jan 2, Feb 3, Feb 15, Mar 12, 2027 | "Takeover Tour" games | **Not stated** (the PWHL lists them as TBD) | **TBD** | — | [PWHL 2026-27 schedule release](https://www.thepwhl.com/en/teams/ottawa-charge/news/2026/october/01/ottawa-charge-announce-2026-27-regular-season-schedule). The release counts **13** home games at A2. Hold these four dates until venues are announced. |
| BlackJacks | May 2025 (May 23 or 25; sources differ) | Outdoor game vs Montreal Alliance (no contest, suspended at halftime) | Montreal | **IGA Stadium, Montréal** | — | [Wikipedia BlackJacks](https://en.wikipedia.org/wiki/Ottawa_BlackJacks) / [2025 CEBL season](https://en.wikipedia.org/wiki/2025_CEBL_season), secondary. This was an away game, so nothing attaches to A5. |
| Redblacks | 2025 and 2026 seasons | — | — | **All home games at A1 TD Place.** No neutral-site home game is listed. | — | [2025 season](https://en.wikipedia.org/wiki/2025_Ottawa_Redblacks_season), [2026 season](https://en.wikipedia.org/wiki/2026_Ottawa_Redblacks_season) (secondary) |
| Redblacks / A1 tenants | From late 2027 or Nov 2028 | The north-stand rebuild reduces A1 capacity. **No relocated Redblacks home games have been announced in the sources read.** | — | — | — | Timing per the [venue answer](ottawa-gatineau-venue-table-answer.md) (Link2Build vs 3DownNation conflict). Re-check before the 2028 schedule. |

**Added in the second pass (Oct 14, 2026):**

| Team | Date | Game | Designated home | Actual site | Attendance | Source |
|---|---|---|---|---|---|---|
| Carleton Ravens / uOttawa Gee-Gees | 2025 (exact date not on the pages read; a [CTV video](https://www.ctvnews.ca/ottawa/video/2025/10/05/ravens-beat-gee-gees-in-2025-panda-game/) is dated Oct 5, 2025) | **Panda Game** football (Carleton won 20–14) | Not stated | **A1 TD Place Stadium** (not A9 TAAG Park or Gee-Gees Field) | **Conflict:** 24,372 "sell out" ([Wikipedia, secondary](https://en.wikipedia.org/wiki/Panda_Game)) vs **23,030** ([Gee-Gees Panda Game page, official](https://ottawa.prestosports.com/tradition/pandagame)) | as listed |
| Carleton Ravens / uOttawa Gee-Gees | **Oct 4, 2026** | **Panda Game** football | **Conflict:** Carleton's release lists it among Ravens games as "vs Ottawa … at TD Place" ([goravens.ca](https://goravens.ca/sports/fball/2026-27/releases/20260408kh72go)); 3DownNation's OUA list shows "Carleton at Ottawa" ([3DownNation](https://3downnation.com/2026/03/26/ontario-university-athletics-unveils-2026-football-schedule)) | **A1 TD Place Stadium** ([goravens.ca](https://goravens.ca/sports/fball/2026-27/releases/20260408kh72go); [Wikipedia, secondary](https://en.wikipedia.org/wiki/Panda_Game)) | gap (Wikipedia's 2026 score row duplicates the 2024 score, so its 2026 row is unreliable) | as listed |

The Panda Game is a yearly university game at A1 with crowds above 20,000, so it should be logged at A1 (friction class), not at either university's home room. Earlier editions at A1 (both secondary/official conflicts kept): 2023 — 23,467 (Wikipedia) vs 24,000 (Gee-Gees page); 2024 — 23,499 (Wikipedia) vs 22,981 (Gee-Gees page).

**Pre-2025 context** (outside the requested window; listed so older history is not misplaced):
- Senators played two "home" Global Series games at **Avicii Arena, Stockholm**, on Nov 16 and 18, 2023, with attendance 12,487 and 13,213 ([Wikipedia 2023-24 season, secondary](https://en.wikipedia.org/wiki/2023%E2%80%9324_Ottawa_Senators_season)).
- A 2024 preseason game was played at **Sudbury Community Arena** ([Wikipedia 2024-25, secondary](https://en.wikipedia.org/wiki/2024%E2%80%9325_Ottawa_Senators_season)); the date was not given.
- 67's school-day game at **A2 Canadian Tire Centre**, article dated Nov 13, 2024: "nearly 15,000" students; opponent and exact game date not stated ([CTV, second pass](https://guelph.ctvnews.ca/ottawa/article/nearly-15000-students-attend-ottawa-67s-school-game-at-canadian-tire-centre)). This shows the 67's use A2 for one-off games; no 2025-on instance was found.
- Charge played Dec 6, 2024 vs Montréal at **A2** (11,065) ([Wikipedia 2024-25 Charge, secondary](https://en.wikipedia.org/wiki/2024%E2%80%9325_Ottawa_Charge_season)).

**Not covered:**
- 67's and Olympiques games outside A5/A8 since 2025. The 67's play "occasional home games" at A2 per [Wikipedia](https://en.wikipedia.org/wiki/Ottawa_67%27s), but no dated list was found.
- Titans and Rapid FC relocations (university Panda Games at A1 were added in the second pass, above).

---

## 6. Postseason and past crowds per team (brief item 5; "End with" item 5)

**Range covered:** the 2023 season or 2023-24 through Oct 13, 2026, where sources were reached. Postseason and regular-season figures are kept in separate tables. All figures are **announced attendance**, never capacity. Averages are given as published. Where a figure was calculated here from per-game rows, it says so.

### 6.1 Ottawa Senators (NHL), room A2

**Postseason home games**

| Season | Date | Round / game | Opponent | Room | Attendance | Source |
|---|---|---|---|---|---|---|
| 2023-24 | — | **Did not qualify** (second pass): "The Senators failed to return to the Stanley Cup playoffs for the seventh straight season" | — | — | — | [Wikipedia 2023-24 season, secondary](https://en.wikipedia.org/wiki/2023%E2%80%9324_Ottawa_Senators_season) |
| 2024-25 | Apr 24, 2025 | R1 Game 3 | Toronto | A2 | **19,073** | [ESPN feed](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/14/schedule?season=2025&seasontype=3) (event 401768126) |
| 2024-25 | Apr 26, 2025 | R1 Game 4 | Toronto | A2 | **19,094** | same (event 401768127) |
| 2024-25 | May 1, 2025 | R1 Game 6 | Toronto | A2 | **19,007** (second pass; official) | [NHL official game summary](https://www.nhl.com/scores/htmlreports/20242025/FS030116.HTM): "Attendance 19,007 at Canadian Tire Centre". ESPN game ID 401768129 ([ESPN matchup](https://www.espn.com/nhl/matchup/_/gameId/401768129)). |
| 2025-26 | Apr 23, 2026 | R1 Game 3 | Carolina | A2 | **18,753** | [ESPN feed](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/14/schedule?season=2026&seasontype=3) (event 401869783) |
| 2025-26 | Apr 25, 2026 | R1 Game 4 (series lost 0–4) | Carolina | A2 | **18,793** | same (event 401869786) |

**Regular-season home crowds**

| Season | Average | Total | Source |
|---|---|---|---|
| 2023-24 | **17,822** | gap | [Wikipedia, secondary](https://en.wikipedia.org/wiki/2023%E2%80%9324_Ottawa_Senators_season). It was not stated whether the Stockholm games are included. |
| 2024-25 | **17,306** | gap | [Wikipedia, secondary](https://en.wikipedia.org/wiki/2024%E2%80%9325_Ottawa_Senators_season) |
| 2025-26 | **17,123** | gap | [Wikipedia, secondary](https://en.wikipedia.org/wiki/2025%E2%80%9326_Ottawa_Senators_season) |

Per-game counts are in ESPN's feed: e.g. [Oct 13, 2025 vs Nashville: 18,500](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/14/schedule?season=2026&seasontype=2). The fetch was truncated, so per-game totals were not compiled here. ESPN's attendance pages (`espn.com/nhl/attendance`) returned no readable content, and [Hockey-Reference](https://www.hockey-reference.com/teams/OTT/) showed only the current season.

### 6.2 Ottawa Redblacks (CFL), room A1

**Postseason:** **no home playoff games from 2024 to 2026.**
- 2024: lost the East Semi-Final **away** at Toronto (BMO Field) on Nov 2, 2024, attendance 18,060 ([Wikipedia 2024, secondary](https://en.wikipedia.org/wiki/2024_Ottawa_Redblacks_season)).
- 2025: did not qualify ([Wikipedia 2025](https://en.wikipedia.org/wiki/2025_Ottawa_Redblacks_season)).
- 2026: 0–16 with two games left ([Wikipedia 2026](https://en.wikipedia.org/wiki/2026_Ottawa_Redblacks_season)).
- 2023: not covered in this pass.

**Regular-season home crowds (per game, secondary: Wikipedia season pages)**

| Season | Per-game attendance at A1 | Season average | Source |
|---|---|---|---|
| 2024 | Jun 13: 16,310 · Jun 30: 20,315 · Jul 19: 18,437 · Jul 26: 17,267 · Aug 8: 17,180 · Aug 24: 19,761 · Sep 7: 17,834 · Sep 21: 23,530 · Oct 25: 19,689 | **18,813** (stated without a citation; the listed games average about 18,925, so the page is internally inconsistent) | [2024 season](https://en.wikipedia.org/wiki/2024_Ottawa_Redblacks_season) |
| 2025 | Jun 13: 21,441 · Jun 29: 17,700 · Jul 20: 15,054 · Jul 31: 16,115 · Aug 22: 17,469 · Sep 5: 16,267 · Sep 20: 20,033 · Oct 3: 18,250 · Oct 18: 20,897 | **18,136** (cites 3DownNation, Oct 26, 2025) | [2025 season](https://en.wikipedia.org/wiki/2025_Ottawa_Redblacks_season) |
| 2026 (to Oct 2) | Jun 6: 15,038 · Jun 20: 13,943 · Jul 3: 15,154 · Jul 19: 14,148 · Jul 31: 17,336 · Aug 30: 13,727 · Sep 26: 15,480 · Oct 2: 15,308. Oct 16 vs Toronto still to play. | No published average. The 8 listed games total 120,134, about 15,017 per game (*calculated here*). | [2026 season](https://en.wikipedia.org/wiki/2026_Ottawa_Redblacks_season) |

Preseason home games are left out of the table above. 2025 preseason (May 30, 2025): 17,820 ([2025 page](https://en.wikipedia.org/wiki/2025_Ottawa_Redblacks_season)).

### 6.3 Atlético Ottawa (CPL), room A1

**Postseason home matches**

| Season | Date | Round | Opponent | Room | Attendance | Source |
|---|---|---|---|---|---|---|
| 2023 | — | Did not qualify | — | — | — | [Wikipedia club page, secondary](https://en.wikipedia.org/wiki/Atl%C3%A9tico_Ottawa) |
| 2024 | Oct 27, 2024 | Quarterfinal (2–2, won 5–4 on penalties) | Not named in source | A1 (the club's listed stadium; per-match venue not stated) | **4,630** | [2024 season page, secondary](https://en.wikipedia.org/wiki/2024_Atl%C3%A9tico_Ottawa_season). The page labels the round inconsistently (quarterfinal vs semi-final). A Nov 2, 2024 semi-final had 6,315, but home/away was not stated. |
| 2025 | Oct 26 and Nov 9, 2025 | Semifinal; **Final (won 2–1 aet vs Cavalry)** | — | **gap**: venue and attendance not in the pages reached | gap | [2025 season page](https://en.wikipedia.org/wiki/2025_Atl%C3%A9tico_Ottawa_season); [2025 CPL season](https://en.wikipedia.org/wiki/2025_Canadian_Premier_League_season). The playoff bracket was garbled, and the 2025 CPL Final page returned not-found. |
| 2026 | Playoffs Oct 31 – Nov 22, 2026 | Qualification not confirmed (3rd as of Sep 20) | — | — | — | [2026 CPL season, secondary](https://en.wikipedia.org/wiki/2026_Canadian_Premier_League_season) |

Cup home matches are not league postseason, so they are listed separately. 2025 Canadian Championship at home: Apr 29: 2,229 · Jun 11: 2,084 · Sep 18 (semifinal): 2,860 ([2025 season page](https://en.wikipedia.org/wiki/2025_Atl%C3%A9tico_Ottawa_season)). 2026 Champions Cup: see section 5 (Hamilton).

**Regular-season (league) home crowds**

| Season | Average | Conflicting figure | Source |
|---|---|---|---|
| 2023 | **4,959** | — | [Club page, secondary](https://en.wikipedia.org/wiki/Atl%C3%A9tico_Ottawa) |
| 2024 | **5,478** | **5,485** | [Club page](https://en.wikipedia.org/wiki/Atl%C3%A9tico_Ottawa) vs [2024 season page](https://en.wikipedia.org/wiki/2024_Atl%C3%A9tico_Ottawa_season) (both secondary) |
| 2025 | **4,961** | **4,706** (total 65,899; high 6,087; low 3,337) | [Club page](https://en.wikipedia.org/wiki/Atl%C3%A9tico_Ottawa) vs [2025 CPL season page](https://en.wikipedia.org/wiki/2025_Canadian_Premier_League_season). The 4,961 matches the 11 listed home games (54,573 total); 4,706 likely counts 14 games including two with no published count. Keep both. |
| 2026 (through matchweek 21) | **4,318** over 11 home matches (high 5,259; low 3,219) | — | [2026 CPL season page, secondary](https://en.wikipedia.org/wiki/2026_Canadian_Premier_League_season) |

### 6.4 Ottawa Charge (PWHL): room A5 to spring 2026, A2 from 2026-27

**Postseason home games**

| Season | Date | Round / game | Opponent | Room | Attendance | Source |
|---|---|---|---|---|---|---|
| 2023-24 | — | Did not qualify | — | — | — | [Wikipedia, secondary](https://en.wikipedia.org/wiki/Ottawa_Charge) |
| 2024-25 | May 13, 2025 | Semifinal | Montréal | A5 | **7,282** | [2024-25 season, secondary](https://en.wikipedia.org/wiki/2024%E2%80%9325_Ottawa_Charge_season) |
| 2024-25 | May 16, 2025 | Semifinal | Montréal | A5 | **8,011** | same |
| 2024-25 | May 20, 2025 | Walter Cup Final | Minnesota | A5 | **6,184** | same |
| 2024-25 | May 22, 2025 | Walter Cup Final (series lost 1–3) | Minnesota | A5 | **8,206** | same |
| 2025-26 | May 8, 2026 | R1 Game 3 | Boston | **A2** | **13,112** | [2025-26 season, secondary](https://en.wikipedia.org/wiki/2025%E2%80%9326_Ottawa_Charge_season) |
| 2025-26 | May 10, 2026 | R1 Game 4 (2OT) | Boston | **A2** | **11,297** | same |
| 2025-26 | May 18, 2026 | Final Game 3 | Montréal | **A2** | **16,894** | same; also [OBJ, cited in the venue answer](https://obj.ca/?p=694870) |
| 2025-26 | May 20, 2026 | Final Game 4 (series lost 1–3) | Montréal | **A2** | **12,362** | same |

**Regular-season home crowds**

| Season | Published average | Per-game notes | Source |
|---|---|---|---|
| 2023-24 | gap | The 2023-24 season page returned not-found. | — |
| 2024-25 | **6,888** | 15 home-designated games. At A5: 5,005 to 8,576 (Apr 26, 2025). Dec 6, 2024 at A2: 11,065. Feb 16, 2025 at Edmonton: 17,518. | [2024-25 season, secondary](https://en.wikipedia.org/wiki/2024%E2%80%9325_Ottawa_Charge_season) |
| 2025-26 | **8,131** | 15 home-designated games. At A5: 5,174 to **8,605** (Apr 18, 2026). Apr 3 at A2: 17,114. Winnipeg: 15,225. Calgary: 16,150. All 15 listed games total 137,073, about 9,138 per game (*calculated here*, including neutral sites). The gap from 8,131 is not explained. | [2025-26 season, secondary](https://en.wikipedia.org/wiki/2025%E2%80%9326_Ottawa_Charge_season) |

### 6.5 Ottawa 67's (OHL), room A5

| Season | Postseason | Home playoff attendance | Regular-season attendance |
|---|---|---|---|
| 2022-23 | Won conference QF vs Oshawa 4–1; lost conference SF vs Peterborough 2–4 | gap | gap |
| 2023-24 | Won conference QF vs Brantford 4–2; lost conference SF vs Oshawa 0–4 | gap | gap |
| 2024-25 | Did not qualify | — | Average **3,885** (second pass; [The Hockey News, Oct 22, 2025](https://thehockeynews.com/womens/pwhl/ottawa-mayor-downplays-charge-attendance-as-arena-debate-hits-crucial-stage), secondary: "averaged only 3,885 fans during the regular season last year, missing the playoffs"). Total: gap |
| 2025-26 | Won conference QF vs Kingston 4–0; lost conference SF vs Barrie 1–4 | gap | gap |

Series results come from [Wikipedia, secondary](https://en.wikipedia.org/wiki/Ottawa_67%27s). **Attendance gap:** the pages reached give no crowds. The [CHL/OHL site](https://chl.ca/ohl/) was read for IDs only, and HockeyDB's attendance page failed to load. **Second pass:** HockeyDB's [2025-26 OHL standings](https://www.hockeydb.com/ihdb/stats/leagues/seasons/ohl19892026.html) and [67's team page](https://www.hockeydb.com/stte/ottawa-67%27s-7314.html) both failed to load (client error) and were not retrieved another way. Searches for per-season 67's crowds found only the 2024-25 average above. Other seasons stay **gap**.

### 6.6 Gatineau Olympiques (QMJHL), room A8

| Season | Regular-season finish | Postseason | Attendance |
|---|---|---|---|
| 2022-23 | 2nd West | gap | gap |
| 2023-24 | 7th West | gap | gap |
| 2024-25 | 7th West | gap | gap |
| 2025-26 | 8th West | gap | gap |

Standings come from [Wikipedia, secondary](https://en.wikipedia.org/wiki/Gatineau_Olympiques); playoff series are not listed there after 2010-11. **Postseason and attendance are a full gap.** The team site (olympiquesdegatineau.ca) and the LHJMQ pages were not reached for crowds. **Second pass:** English and French searches for Olympiques average attendance (*assistance moyenne*) returned only roster and stats pages (Elite Prospects) and the team's [CHL site](https://chl.ca/lhjmq-olympiques/en/article/new-game-day-policy), with no crowd figures. HockeyDB could not be fetched (see 6.5). Still a full **gap**.

### 6.7 Ottawa BlackJacks (CEBL), room A5

| Season | Regular-season average | Total | Postseason | Source |
|---|---|---|---|---|
| 2023 | gap | gap | Lost in the first playoff round (the source is internally inconsistent about which round). Home game status unknown. | [Wikipedia, secondary](https://en.wikipedia.org/wiki/Ottawa_BlackJacks) |
| 2024 | **2,052** (as of Jul 29, 2024; about 10 games; high 2,510, low 1,631) | 20,523 | Aug 2 play-in win vs Scarborough; Aug 4 QF loss at or vs Niagara. Venues and per-game attendance cannot be matched (gap). | [2024 CEBL season, secondary](https://en.wikipedia.org/wiki/2024_CEBL_season) |
| 2025 | **1,988** (high 3,270, low 1,443) | 23,859 | QF loss to Niagara (E1) on Aug 16. Ottawa was the lower seed, so likely away, but not confirmed. | [2025 CEBL season, secondary](https://en.wikipedia.org/wiki/2025_CEBL_season) |
| 2026 | **1,619** | 19,429 | Conference SF vs Brampton (E2). Ottawa was E3; venue and attendance gap. | [2026 CEBL season](https://en.wikipedia.org/wiki/2026_CEBL_season), citing the CEBL's [fixture page](https://www.cebl.ca/fixture) as of Aug 3, 2026 |

A 2025 school-day game of **over 6,000** is recorded in the [venue answer](ottawa-gatineau-venue-table-answer.md) ([team release](https://www.oursportscentral.com/services/releases/ottawa-blackjacks-announce-2026-school-day-game/n-6323316)).

### 6.8 Ottawa Titans (Frontier League), room A3 (added)

| Season | Regular-season crowds | Postseason | Source |
|---|---|---|---|
| 2023 | Average **1,540**; total **78,495** over 51 home games; record crowd "more than 4,600" on Aug 31, 2023 | Did not qualify | [Wikipedia citing Capital Current, Oct 12, 2023 (secondary)](https://en.wikipedia.org/wiki/Ottawa_Titans) |
| 2024 | Average "over 1,900" (not an exact count) | Won the Wild Card Game vs Tri-City; lost the Divisional Round to Québec 1–2. Home games and crowds: gap | same, citing Radio-Canada |
| 2025 | Home opener **7,152** (the citation looks mismatched, so treat as unverified); no average | Did not qualify | same |
| 2026 | Home opener **10,278** (May 8, 2026, per the [venue answer](ottawa-gatineau-venue-table-answer.md)); no average | A playoff berth is listed in the infobox; games and crowds: gap | same |

### 6.9 Teams with no crowd history in this pass

Ottawa Rapid FC (page rate-limited), Carleton Ravens and uOttawa Gee-Gees: **gap** for both postseason and regular-season crowds.

**Second pass:**
- **Rapid FC:** the ESPN feed (section 4) returns attendance as 0 for 2026 matches, so it supplies no crowd history. Still **gap**.
- **Carleton Ravens / uOttawa Gee-Gees:** the only crowds found are the yearly **Panda Game at A1** (not either team's home room): 2023 — 23,467 ([Wikipedia, secondary](https://en.wikipedia.org/wiki/Panda_Game)) vs 24,000 ([Gee-Gees Panda Game page](https://ottawa.prestosports.com/tradition/pandagame)); 2024 — 23,499 vs 22,981; 2025 — 24,372 "sell out" vs 23,030 (same two sources respectively). Conflicts kept, not averaged. Home-room (A9, A12, Gee-Gees Field) crowds and university postseason crowds stay **gap**.

---

## 7. Open capacities: The Arena at TD Place, A5 (brief item 7; "End with" item 6)

**Result:** no setup has a single sourced figure that meets the brief's standard, except one floor setup, and that one was carried over from the venue answer. **The full-bowl setups stay blank and go on the city gaps list.** The official rentals page ([tdplace.ca/?p=33887](https://www.tdplace.ca/?p=33887)), the most likely source, was **refused by the fetch proxy (HTTP 429)** in this pass and was not retried.

| Setup | Sourced figure | Source(s), side by side | Status |
|---|---|---|---|
| Hockey (full bowl) | **None** | The only sources are a range, **5,500–8,585** ([Wikipedia, secondary](https://en.wikipedia.org/wiki/TD_Place_Arena)), and **"nearly 9,000"** ([OBJ](https://obj.ca/ottawa-charge-canadian-tire-centre-2026-27-season/)). Neither gives a hockey-specific figure. | **Gap.** Leave blank. |
| Basketball (BlackJacks) | **None** | No setup-specific source found. | **Gap.** Leave blank. |
| Concert (end-stage or centre-stage) | **None** | No setup-specific source found. | **Gap.** Leave blank. |
| Floor-only, theatre-style | **1,850** | TD Place rentals, official, as cited in the [venue answer](ottawa-gatineau-venue-table-answer.md) ([tdplace.ca/?p=33887](https://www.tdplace.ca/?p=33887)). It could not be re-opened today (429). **Second pass:** confirmed on TD Place's events-and-meetings page ([tdplace.ca/?p=34398](https://www.tdplace.ca/?p=34398), official): "Arena Floor … a capacity of 1,850 theatre style". (The ?p=33887 page now loads but shows no capacities.) | **Sourced (official, re-checked Oct 14, 2026).** Below 5,000, so muted. |
| Floor-only, second setup | **2,000** | **Second pass:** the same official page lists "Arena Floor … Capacity: 2,000" as the space's headline capacity, without naming a setup ([tdplace.ca/?p=34398](https://www.tdplace.ca/?p=34398)). The page also lists "Arena Ice … Capacity: 250" for skating parties (not an event setup). | **Sourced (official); setup name not stated** by the venue. Below 5,000, so muted. |

**Second pass on the full-bowl setups:** still **gap**. Checked without finding a full-bowl figure: [tdplace.ca/?p=33887](https://www.tdplace.ca/?p=33887) (loads, no capacities; it points capacity questions to the box office), [tdplace.ca/?p=34398](https://www.tdplace.ca/?p=34398) (floor only), [CTV, Jan 18, 2024](https://guelph.ctvnews.ca/ottawa/article/lansdowne-20-to-reduce-number-of-arena-seats-despite-record-crowds) and [CTV, Jun 18, 2024](https://www.ctvnews.ca/ottawa/article/were-not-just-building-the-arena-for-one-tenant-mayor-defends-proposed-5500-seat-arena-at-lansdowne/) (new-arena figures only), and [The Hockey News, Oct 22, 2025](https://thehockeynews.com/womens/pwhl/ottawa-mayor-downplays-charge-attendance-as-arena-debate-hits-crucial-stage) (quotes "5,500 seated, and 6,500 total" from Lansdowne documents but does not tie it clearly to the current arena — not used).

**Conflict to record:** announced Charge crowds at A5 reached **8,605** on Apr 18, 2026 ([Wikipedia 2025-26 Charge season, secondary](https://en.wikipedia.org/wiki/2025%E2%80%9326_Ottawa_Charge_season)). That is above the top of the 5,500–8,585 range, so the 8,585 figure is not a hard maximum for hockey. This is attendance, not capacity, and must not be used to fill the hockey capacity.

**5,000-line note:** A5's full-bowl setups are listed as 5,000+ only by range in the [venue answer](ottawa-gatineau-venue-table-answer.md). Under the brief's rule ("each room near 5,000 counts on its sourced figure alone"), **A5 has no sourced full-bowl figure, so its friction classification has no sourced capacity behind it.** That follows the build rule; this answer does not recommend a classification.

**Side note (A1, outside item 7):** Wikipedia gives TD Place a capacity of **6,419** in the Atlético Ottawa infobox ([secondary](https://en.wikipedia.org/wiki/Atl%C3%A9tico_Ottawa)). This looks like a reduced soccer setup and differs from the 24,000 football figure in the venue answer. Verify against the club or OSEG before use.

---

## 8. Gaps list (carry to the city gaps file)

**Second-pass status (Oct 14, 2026)** is added in brackets to each row. Closed: #1 (YOW), #7 Game 6 crowd. Partly closed: #3, #5, #6, #9, #12.

| # | Gap | What was tried |
|---|---|---|
| 1 | ~~YOW airport code was not confirmed from a source~~ **[Closed: IATA YOW / ICAO CYOW, section 1]** | Airport Wikipedia page refused (429); search budget exhausted |
| 2 | Ticketmaster ID for **A11 Hard Rock Live** (room level) | Hard Rock's own page links event pages only; the event page did not load; property-level IDs 403063 and 403088 found. **[Second pass: still open; TM pages unfetchable; address 4837 Albion Road captured]** |
| 3 | Ticketmaster IDs for **A9 TAAG Park** and **A12 Ravens' Nest** | Not found before the search budget ran out. **[Second pass: both sell through Showpass, not Ticketmaster; no TM ID found]** |
| 4 | Current-name Ticketmaster listings for **A4 Cohere Centre** and **A7 Rogers Centre Ottawa** | Only old-name IDs found (EY Centre / Ernst & Young Centre; Shaw Centre). **[Second pass: not re-searched; Ticketmaster pages unfetchable]** |
| 5 | Official hex colors for **every team** | No team or league brand page with hex codes was reached. The only hex is ESPN's Senators `#DD1A32` (secondary). **[Second pass: official for Carleton Ravens and uOttawa; secondary for Senators (2nd colour), Redblacks (primary only), Atlético, 67's, Olympiques, Rapid FC (primary only). Still gap: Charge, BlackJacks, Titans; secondary colour for Redblacks and Rapid FC]** |
| 6 | Free feeds for Redblacks, Titans, Rapid FC, Ravens and Gee-Gees; confirmation of the PWHL team ID (5?) and the CPL calendar-sync format | ESPN CFL feed stale (2022–23); CFL.ca page has no feed; PWHL stats page returned no data. **[Second pass: Rapid FC feed verified (ESPN can.w.nsl / 131261); Titans upgraded to league site (iScore Central ID); CPL sync is an ECAL widget. Still open: Redblacks, Ravens, Gee-Gees feeds; PWHL ID 5]** |
| 7 | ~~Senators 2025 R1 Game 6 (May 1, 2025) attendance~~ **[Closed: 19,007, NHL game summary]**; Senators regular-season totals (still gap) | ESPN feed truncated; ESPN attendance pages unreadable |
| 8 | Atlético Ottawa 2025 playoff venues and crowds (including the Nov 9, 2025 Final) | Season and league pages lacked venue and attendance; the Final page was not found |
| 9 | 67's, Olympiques, Rapid FC, Ravens and Gee-Gees crowd history; Olympiques playoff results | No crowd source reached; HockeyDB fetch failed. **[Second pass: 67's 2024-25 average 3,885 (THN, secondary); Panda Game crowds at A1 2023–25. HockeyDB failed again. Rest still gap]** |
| 10 | Charge 2023-24 crowds | Season page not found |
| 11 | BlackJacks playoff home or away status and crowds | CEBL season pages do not map attendance to games |
| 12 | A5 hockey, basketball and concert capacities | Rentals page refused (429); only a range and "nearly 9,000" available. **[Second pass: floor figures 1,850 theatre / 2,000 re-confirmed on an official TD Place page; full-bowl figures still gap]** |
| 14 | **[New, second pass]** 2026 Panda Game (Oct 4, 2026, A1) designated home team and attendance | Carleton and 3DownNation disagree on home side; no 2026 crowd found |
| 13 | Charge 2026-27 Takeover Tour venues (Jan 2, Feb 3, Feb 15, Mar 12, 2027) | The PWHL lists them as TBD |

---

## 9. Sources that could not be read (flagged, not bypassed)

- **Rate-limited by the fetch proxy (HTTP 429):**
  - Wikipedia "Ottawa Macdonald–Cartier International Airport"
  - [Wikipedia Ottawa Rapid FC](https://en.wikipedia.org/wiki/Ottawa_Rapid_FC)
  - [TD Place rentals](https://www.tdplace.ca/?p=33887)

  None of these was retried.
- **Fetch failed (client error):**
  - Ticketmaster venue pages 401524, 403003, 403063, 402612, 402591, 401520, 336671, 403088, 401543 and 402378
  - The Ticketmaster event page for Hard Rock Live
  - ESPN `soccer/can.1` and `hockey/pwhl` endpoints
  - The HockeyDB OHL attendance page
- **Loaded but without the needed data:**
  - ESPN NHL attendance pages (empty, script-rendered)
  - [Hockey-Reference OTT](https://www.hockey-reference.com/teams/OTT/) (current season only)
  - [CFL.ca schedule](https://www.cfl.ca/schedule/) (no games in the page text)
  - The [PWHL stats schedule URL](https://www.thepwhl.com/en/stats/schedule/5/11/all-months/homeaway?league=1) (navigation only)
- **Not found (404):** the Wikipedia pages for the 2023-24 Ottawa Charge season and the 2025 Canadian Premier League Final.
- **Search budget:** WebSearch reached its shared per-turn limit early in this pass. A follow-up pass with fresh search capacity should start on gaps 2–6 and 12 above.
- **Second pass (Oct 14, 2026), not read and not retried by any other route:**
  - Ticketmaster venue page 403063 and event page 3100643DE40AA3AD (client error again)
  - HockeyDB [2025-26 OHL standings](https://www.hockeydb.com/ihdb/stats/leagues/seasons/ohl19892026.html) and [67's team page](https://www.hockeydb.com/stte/ottawa-67%27s-7314.html) (client error)
  - ESPN `soccer/can.1/teams` (client error again)
  - `goravens.ca/sports/fball/2026-27/schedule` (client error)
  - yow.ca (fetch permission not answered in time)
  - The CPL calendar-sync link redirects to `sync.ecal.com`; the redirect target was not opened.
  - ESPN's 2025 NHL postseason feed for the Senators was read in chunks but never showed the May 1, 2025 game; the NHL game summary was used instead.
- **Second-pass search use:** about 47 WebSearch calls; the search limit was **not** reached.

*End of answer. Researched and dated October 13, 2026; second pass on gap cells October 14, 2026.*
