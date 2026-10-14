# Washington, D.C. — Gaps Follow-up Research Answer

**Answer date:** Tuesday, 13 October 2026 (America/Los_Angeles); **second pass Oct 14, 2026** (gap cells only; additions marked *(2nd pass)*); **third pass Oct 14, 2026** (gap cells only; additions marked *(3rd pass)*). Event times are US Eastern unless stated.
**Inputs used:** the brief ([washington-dc-gaps-followup-prompt.md](washington-dc-gaps-followup-prompt.md)) and the venue answer ([washington-dc-venue-table-answer.md](washington-dc-venue-table-answer.md)). Venue row IDs below (1–27, plus 9a) are the `#` numbers from that venue answer, so the two files join cleanly.

> **Missing input.** The brief also refers to a city-type answer (`washington-dc-city-type-answer.md`). That file was **not provided** for this pass, so nothing here checks against it and the city-type work was not redone.

**Scope and limits of this pass (read first):**
- Sources were fetched on 13 Oct 2026. Every figure links to the page it came from. Labels: **official** (team, league, venue, university), **reference** (Sports Reference sites, Wikipedia; secondary), **feed** (a public data endpoint, read directly).
- **Web search ran out early.** The shared web-search budget for this session was used up after the first five searches. The rest of the work used direct page fetches of official sites and reference pages. Where a search would have been needed, the item is marked **gap** with what was tried.
- **Rate limits.** Partway through, the fetch proxy returned HTTP 429 (rate limited) for these pages, and they were **not retried or reached another way**: the ESPN schedule endpoint for D.C. United 2026 (`site.api.espn.com/.../soccer/usa.1/teams/193/schedule?season=2026`), Wikipedia's *Northwest Stadium*, *2025 Washington Spirit season* and *2024 Washington Spirit season* pages, the NHL schedule endpoint `api-web.nhle.com/v1/club-schedule-season/WSH/now`, and the MLB Stats API Double-A team list. Items that depended on them are marked as gaps.
- **Second pass (14 Oct 2026):** filled gap cells only (feeds, colors, Ticketmaster IDs, the D.C. United 7 Mar 2026 site, Spirit/Baysox/college crowds). About 30 web searches ran before the **shared web-search budget was exhausted** mid-pass (during the Ticketmaster step); the rest used direct fetches of URLs already found. Not reached because of that: local media's market name, The Anthem's per-setup capacities, and Ticketmaster checks for rows 4, 9, 9a, 11, 12, 15, 16. Fetch errors (not retried another way): ESPN HTML team pages for DC Power FC (empty), a guessed ESPN `usa.usl.w.1` endpoint, Ticketmaster pages for venue 336573, 172098 and 172054.
- **Third pass (14 Oct 2026):** filled gap cells only. About 45 web searches were used, and the shared budget was **not** exhausted. Most Ticketmaster IDs came from searches restricted to `ticketmaster.com`. College crowds came from Wikipedia team-season pages, the Anthem figures from the official rentals page, and the DC Power FC API path from ESPN. Fetches that failed and were **not** retried another way:
  - Ticketmaster venue pages 172570, 172349, 172105, 172076, 246351, 172079 and 336573 (again).
  - `am.ticketmaster.com/segrafield/` (refused by robots.txt).
  - Wikipedia's *Echostage* page.
- **Blocked:** the MGM National Harbor theater page (`mgmnationalharbor.mgmresorts.com`) returned "Access to this website has been blocked". It was not reached another way.
- A Ticketmaster venue page fetched directly (`ticketmaster.com/capital-one-arena-tickets-washington/venue/172453`) returned a fetch error. Ticketmaster IDs are therefore verified from **pages that link to the Ticketmaster venue page** (team, venue or Ticketmaster blog pages), as the task allowed. No Discovery API key was used.

---

## Build-rule notes (for whoever turns this into app data)

- **Unique IDs across all cities.** Every venue ID and team ID must be unique across all cities. `giants`, `jets`, `rangers`, `kings` and `cardinals` are already taken, so add a city prefix. For this city, prefix every ID (for example `wsh-` or the chosen city code; see §1). Generic names here that would collide without a prefix include `capitals`, `nationals`, `wizards`, `mystics`, `spirit`, `united` and `freedom`.
- **No per-city opponents file.** Opponent draws go into `expectedDrawIndex`, as in every other city.
- **Never guess a capacity.** A missing or range-only figure stays blank and goes on the city gaps list (see §6).
- **Car shares.** Wire measured car shares; wire sourced estimates marked *estimated*; leave the rest on the city default. (The car-share figures are in the city-type answer, which was not provided here.)
- **Feed attendance is not the same as capacity.** Several feeds report a fixed "sell-out" number for every sold-out game (for example 4,200 at CareFirst Arena, 18,573 then 18,347 at Capital One Arena for hockey). Treat these as announced attendance, not as a capacity source.
- **Neutral-site and relocated games** (§4) must be matched to the actual site by date, never placed at the team's usual home.

---

## 1. Name, short form, code and covered area

### What the feeds and teams use

| Source | Team | Abbreviation shown | Link |
|---|---|---|---|
| ESPN public API (NFL) | Washington Commanders | `WSH` | [feed](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/wsh) |
| ESPN public API (NHL) | Washington Capitals | `WSH` | [feed](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/wsh) |
| ESPN public API (NBA) | Washington Wizards | `WSH` | [feed](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/wsh) |
| ESPN public API (WNBA) | Washington Mystics | `WSH` | [feed](https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams) |
| ESPN public API (MLB) | Washington Nationals | `WSH` | [feed](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/wsh) |
| MLB Stats API (official MLB data) | Washington Nationals | `WSH` | [feed](https://statsapi.mlb.com/api/v1/teams/120) |
| ESPN public API (NWSL) | Washington Spirit | `WAS` | [feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams) |
| ESPN public API (MLS) | D.C. United | `DC` | [feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams) |

Team display names in those feeds use "Washington" (Commanders, Capitals, Wizards, Mystics, Nationals, Spirit), with D.C. United the exception.

**Not established in this pass (gap):** what local media call the market (for example "DMV" or "D.C. area"). That needed web search, which had run out. *Still a gap after the 2nd pass* (the search budget ran out again before this item). Also not sourced: the airport or IATA metro code for the area. No such code is claimed here.

**Local market name (3rd pass):** local media and residents widely use **"the DMV"** (District, Maryland, Virginia):
- NBC Washington: "District + Maryland + Virginia = DMV" ([NBC4, 30 Jul 2010](https://www.nbcwashington.com/news/local/welcome-to-the-dmv/1891521/)).
- WTOP runs a podcast called ["DMV Download"](https://dmvdownload.wtop.com/episode/confronting-dc-food-deserts-and-hunger-plus-the-dmvs-bid-for-2026-world-cup).
- Washingtonian traces the term to local go-go and hip-hop use around 2003 and notes sportscasters and weather announcers now say "a nice day in the DMV". It also notes that people disagree on where it ends: the Beltway, the I-95 corridor, or the whole of Maryland and Virginia ([Washingtonian, 6 Jul 2015](https://washingtonian.com/?p=139952)).
- Wikipedia (reference) says the area is "locally called the DMV" and that federal agencies call it the **"National Capital Region"**. It also says the Washington MSA is part of the Washington–Baltimore combined statistical area and that Baltimore is not in the Washington MSA ([Wikipedia: Washington metropolitan area](https://en.wikipedia.org/wiki/Washington_metropolitan_area)). This is a secondary read of the OMB delineation, not the OMB file itself.

**Build note:** "DMV" is the locals' name, but it is informal and its edges are disputed, so it is a poor display name. It could serve as an alias or search term. Unlike Tampa Bay, no Washington team uses "DMV" in its name.

### Recommended name and code

| Field | Value | Basis |
|---|---|---|
| Display name | **Washington, D.C.** | The brief's city name; teams use "Washington" in their names (table above). |
| Short form | **D.C.** | The brief's lead; D.C. United's own name and ESPN abbreviation `DC` ([feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams)). |
| Three-letter code | **WSH** (recommended), with `DC` as the brief's lead | `WSH` is the three-letter form used for five of the seven pro teams in ESPN's feeds and in the MLB Stats API (table above). `DC` is only two letters; if the app requires three letters, `WSH` matches the feeds. `WAS` appears only for the Spirit in ESPN's NWSL feed. The final choice is a build decision, not a sourced fact. |

**Tampa Bay comparison.** As with Tampa Bay (name "Tampa Bay", code `TPA`), the name can describe the wider market ("Washington, D.C." covering Northern Virginia and suburban Maryland) while the code stays short.

### Covered area (taken from the venue answer's boundary, not re-researched)

| Area | In or out | Basis (venue answer §1) |
|---|---|---|
| District of Columbia | **In** | Core |
| Prince George's County, MD (Landover, College Park, Bowie, Oxon Hill) | **In** | Core: holds rows 1, 2, 9, 9a, 11, 20 |
| Montgomery County, MD (Silver Spring, North Bethesda) | **In** | Core: rows 23, 24 |
| Arlington County and City of Alexandria, VA | **In** | Core |
| Fairfax County / City of Fairfax, VA (Fairfax, Vienna) | **In** | Core: rows 10, 13 |
| Loudoun County, VA (Leesburg) | **In, edge** | Row 16 |
| Prince William County, VA (Bristow) | **In, edge** | Row 5 (recommended addition) |
| Howard County, MD (Columbia) | **Edge, assign once** | Row 8 (Merriweather) sits in a shared DC/Baltimore catchment; assign it to exactly one city. |
| Anne Arundel County / **Annapolis**, MD | **Out** (edge record only) | Row 4 (Navy–Marine Corps Memorial Stadium) kept as an edge record, not core. |
| **Baltimore** City / County | **Out** | Separate market; Mystics games at CFG Bank Arena go under Baltimore if that city exists (see §4). |

The venue answer itself flags that the federal (OMB) metro delineation was not checked. That is still not checked here (needed search).

---

## 2. Ticketmaster venue IDs (every room in the venue answer)

**Method.** An ID counts as verified only if a page links to a Ticketmaster venue URL of the form `ticketmaster.com/<slug>/venue/NNNNN` and the slug names the same room. Ticketmaster's own pages could not be fetched (fetch error), so each ID rests on the linking page shown. Pages that link only to Ticketmaster *event* pages (`/event/…`) do not reveal a venue ID, so those rooms stay **not verified**.

| Venue row ID | Room | Ticketmaster venue ID | Verification link | Notes |
|---|---|---|---|---|
| 1 | Northwest Stadium | **172178** | [Ticketmaster blog links to `ticketmaster.com/northwest-stadium-tickets-landover/venue/172178`](https://blog.ticketmaster.com/step-inside-northwest-stadium-landover-md) | Verified (via linking page). |
| 2 | SECU Stadium | **172123** *(3rd pass)* | [Ticketmaster venue page `.../secu-stadium-tickets-college-park/venue/172123`](https://www.ticketmaster.com/secu-stadium-tickets-college-park/venue/172123) (fetched: "SECU Stadium, Campus Drive, College Park, MD 20742"; "No Upcoming Events" when read) | Verified (Ticketmaster page itself). UMD's own page links to umterps.evenue.net and SeatGeek ([UMD](https://umterps.com/sports/2018/6/14/secu-stadium.aspx)), so Maryland football is sold on evenue; Ticketmaster also lists Maryland football events at College Park ([e.g.](https://www.ticketmaster.com/event/Z7r9jZ1A7oS89)). |
| 3 | Nationals Park | **172526** *(2nd pass)* | [Ticketmaster blog "Step Inside: Nationals Park" links to `ticketmaster.com/nationals-park-tickets-washington/venue/172526`](https://blog.ticketmaster.com/step-inside-nationals-park-washington-dc) | Verified (via linking page). Baseball tickets themselves are sold via mlb.com/SeatGeek ([Nationals](https://www.mlb.com/nationals/ballpark)); the TM venue covers non-baseball events. |
| 4 | Navy–Marine Corps Memorial Stadium (edge) | **172223** *(3rd pass)* | [Ticketmaster venue page `.../navy-marine-corps-memorial-stadium-tickets-annapolis/venue/172223`](https://www.ticketmaster.com/navy-marine-corps-memorial-stadium-tickets-annapolis/venue/172223) (fetched: "Navy Marine Corps Memorial Stadium", venue guide and seating chart; no events listed when read) | Verified (Ticketmaster page itself). Navy's own ticket office links to navysports.evenue.net and SeatGeek, not Ticketmaster ([Navy ticket office](https://navysports.com/sports/2026/7/22/The-Navy-ticket-office.aspx?path=me)). |
| 5 | Jiffy Lube Live | **172099** | [Ticketmaster blog links to `ticketmaster.com/jiffy-lube-live-tickets-bristow/venue/172099`](https://blog.ticketmaster.com/venue-faq-jiffy-lube-live-barstow-va/) | Verified (via linking page). |
| 6 | Capital One Arena | **172453** | [Capitals arena page (NHL.com) links to `ticketmaster.com/capital-one-arena-tickets-washington/venue/172453`](https://www.nhl.com/capitals/arena) | Verified (via linking page). A direct fetch of the Ticketmaster page failed. |
| 7 | Audi Field | **172622** | [audifield.com links to `ticketmaster.com/audi-field-tickets-washington/venue/172622`](https://www.audifield.com/) | Verified (official venue site). |
| 8 | Merriweather Post Pavilion (edge) | **172218** *(2nd pass)* | [Merriweather FAQ links to `ticketmaster.com/merriweather-post-pavilion-tickets-columbia/venue/172218`](https://merriweathermusic.com/faq/); also [Box Office page](https://merriweathermusic.com/box-office/) | Verified (official venue site). I.M.P. venue; I.M.P. sells advance tickets through Ticketmaster plus its own no-fee box offices (not a separate online system). |
| 9 | Xfinity Center | **172349** *(3rd pass)* | [Ticketmaster search result "Xfinity Center - College Park, MD" → `.../xfinity-center-tickets-college-park/venue/172349`](https://www.ticketmaster.com/xfinity-center-tickets-college-park/venue/172349) | Verified from Ticketmaster's own URL and page title in search results; a direct fetch of the page failed. **Do not confuse** with Xfinity Center, Mansfield, MA ([venue 8213](https://www.ticketmaster.com/xfinity-center-tickets-mansfield/venue/8213)). UMD's [Xfinity Center page](https://umterps.com/facilities/?id=8) links only to umterps.evenue.net and SeatGeek. |
| 9a | Xfinity Center Pavilion | not verified *(3rd pass: no separate Ticketmaster venue found)* | [UMD Pavilion page](https://umterps.com/facilities/?id=17) | A Ticketmaster-restricted search for the Pavilion returned only venue 172349 (main arena). UMD sells Pavilion events via umterps.evenue.net ([UMD](https://umterps.com/facilities/?id=17)). Treat as **no Ticketmaster venue**; do not map 172349 to this child room. |
| 10 | EagleBank Arena | **172065** | [eaglebankarena.com links to `ticketmaster.com/eaglebank-arena-tickets-fairfax/venue/172065`](https://www.eaglebankarena.com/arena-info/about-eaglebank-arena) | Verified (official venue site). |
| 11 | Prince George's Stadium | **172105** *(3rd pass)* | [Ticketmaster search result "Prince Georges Stadium - Bowie, MD" → `.../prince-georges-stadium-tickets-bowie/venue/172105`](https://www.ticketmaster.com/prince-georges-stadium-tickets-bowie/venue/172105); Ticketmaster also lists Baysox games there ([e.g. 2 Sep 2025](https://www.ticketmaster.com/event/Z7r9jZ1A7fxuf)) | Verified from Ticketmaster's URL and title in search results; a direct fetch failed. The team's own page sells via milb.com ([MiLB](https://www.milb.com/chesapeake/community/stadium-info/)). |
| 12 | William H. Greene Stadium | **172076** *(3rd pass)* | [Ticketmaster search result "Greene Stadium - Washington, DC" → `.../greene-stadium-tickets-washington/venue/172076`](https://www.ticketmaster.com/greene-stadium-tickets-washington/venue/172076); Ticketmaster lists Howard vs Morgan State there ([25 Oct 2025](https://www.ticketmaster.com/howard-university-bison-football-vs-morgan-washington-10-25-2025/event/Z7r9jZ1A7b87U)) | Verified from Ticketmaster's URL and title in search results; a direct fetch failed. Howard's own ticketing is [howard.universitytickets.com / vivenu](https://hubison.com/news/2022/8/3/football-season-tickets-on-sale-now) (2022 article), not Ticketmaster. Do not confuse with the Howard **Theatre** ([venue 172555](https://www.ticketmaster.com/howard-theatre-tickets-washington/venue/172555)). |
| 13 | Filene Center at Wolf Trap | **246351** *(3rd pass)* | [Ticketmaster search result "Wolf Trap Filene Center - Vienna, VA" → `.../Wolf-Trap-Filene-Center-tickets-Vienna/venue/246351`](https://www.ticketmaster.com/Wolf-Trap-Filene-Center-tickets-Vienna/venue/246351?page=5); Ticketmaster lists 2026 Filene shows in Vienna, VA ([e.g. Sting, 21 May 2026](https://www.ticketmaster.com/sting-vienna-05-21-2026/event/Z7r9jZ1A7OzG9)) | Verified from Ticketmaster's URL and title in search results; a direct fetch failed. Primary seller is still the Wolf Trap Foundation via tickets.com ([wolftrap.org](https://www.wolftrap.org/); [NPS](https://home.nps.gov/wotr/faqs.htm)); the Ticketmaster events here may be partner listings, so check the Discovery API returns them before relying on this ID. |
| 14 | The Anthem | **172624** | [theanthemdc.com FAQ links to `ticketmaster.com/the-anthem-tickets-washington/venue/172624`](https://theanthemdc.com/faq) | Verified (official venue site). |
| 15 | Charles E. Smith Center | **172643** *(3rd pass)* | [Ticketmaster venue page `.../charles-e-smith-center-billets-washington/venue/172643`](https://www.ticketmaster.com/charles-e-smith-center-billets-washington/venue/172643) (fetched: "Charles E. Smith Center, 600 22nd St. NW, Washington, DC 20052"; 29 results, GW basketball Nov 2025–Jan 2026) | Verified (Ticketmaster page itself). GW Athletics [partnered with Ticketmaster on 4 Nov 2022](https://gwsports.com/news/2022/11/4/general-george-washington-university-partners-with-ticketmaster-on-ticketing-technologies) for all athletics at the Smith Center. |
| 16 | Segra Field (edge) | not verified *(3rd pass)* | [Ticketmaster Account Manager "Segra Field Events" (`am.ticketmaster.com/segrafield/`)](https://am.ticketmaster.com/segrafield/) | Segra Field uses Ticketmaster Account Manager, and Loudoun United has a Ticketmaster artist page ([2584363](https://www.ticketmaster.com/loudoun-united-fc-tickets/artist/2584363)), but no `/venue/NNNNN` page was found in two Ticketmaster-restricted searches; the Account Manager page refused fetching (robots). **Gap.** |
| 17 | CareFirst Arena | **172633** *(3rd pass)*; also **AXS venue 129150** *(2nd pass)* | [Ticketmaster venue page `.../carefirst-arena-tickets-washington/venue/172633`](https://www.ticketmaster.com/carefirst-arena-tickets-washington/venue/172633) (fetched: "CareFirst Arena", 23 results, first two Go-Go vs Westchester 22 Nov 2025 and an HBCU event 26 Nov 2025). The same ID is also reached through the old slug [`entertainment-sports-arena-tickets-washington/venue/172633`](https://www.ticketmaster.com/entertainment-sports-arena-tickets-washington/venue/172633). Also [AXS venue page](https://www.axs.com/de/venues/129150/carefirst-arena-washington-tickets) (1100 Oak Dr SE; 31 events listed, e.g. Go-Go games from 14 Nov 2026) | Verified (Ticketmaster page itself) *(3rd pass)*. Mystics tickets run through Monumental's [Ticketmaster Account Manager](https://mystics.wnba.com/mystics-gamedays/), and Ticketmaster lists Mystics home games ([artist 806040](https://www.ticketmaster.com/washington-mystics-tickets/artist/806040?home_away=home)). **AXS also lists the room**; caution: the AXS Go-Go entries read in the 2nd pass were labelled "…Parking" products. Use 172633 for Ticketmaster matching. |
| 18 | DAR Constitution Hall | **172054** *(2nd pass)* | [dar.org tickets page links to `ticketmaster.com/venue/172054`](https://dar.org/constitution-hall/tickets) and states promoters "must contract with Ticketmaster" | Verified (official venue site). A direct fetch of the Ticketmaster page failed. |
| 19 | Echostage | **172570** *(3rd pass)*; also **AXS venue 125391** *(2nd pass)* | [Ticketmaster search result "Echostage - Washington, DC" → `.../echostage-tickets-washington/venue/172570`](https://www.ticketmaster.com/echostage-tickets-washington/venue/172570); [echostage.com](https://www.echostage.com/) (show links go to Ticketmaster event pages, e.g. [Reggaeton Rave, 9 Oct 2026](https://www.ticketmaster.com/event/1500652919C568A0)); [AXS venue page](https://www.axs.com/en/venues/125391/echostage-washington-tickets) | Verified from Ticketmaster's URL and title in search results; a direct fetch of the venue page failed. The official site sells through Ticketmaster; AXS also lists the room (usable as an AXS feed match). |
| 20 | The Theater at MGM National Harbor | **172613** *(2nd pass)* | [Ticketmaster venue page `.../the-theater-at-mgm-national-harbor-boletos-national-harbor/venue/172613`](https://www.ticketmaster.com/the-theater-at-mgm-national-harbor-boletos-national-harbor/venue/172613) (fetched: "The Theater at MGM National Harbor, 101 MGM National Ave", events listed) | Verified (Ticketmaster page itself). Official MGM page still blocked. |
| 21 | Kennedy Center — Concert Hall | not verified *(3rd pass: no room-level ID found)* | [Kennedy Center rentals page](https://www.kennedy-center.org/rentals/theater-rentals/); Ticketmaster has only a building-level ["The Kennedy Center - Washington, DC" venue 172079](https://www.ticketmaster.com/Kennedy-Center-tickets-Washington/venue/172079) (from search result; fetch failed) | The Kennedy Center sells its own tickets (cart on kennedy-center.org). Ticketmaster lists NSO Concert Hall events as event pages only ([e.g.](https://www.ticketmaster.com/national-symphony-orchestra-tchaikovskys-fifth-ferrandez-washington-11-22-2025/event/Z7r9jZ1A7jvu4)). Do **not** map building venue 172079 to this room. The building is closed (venue answer). |
| 22 | Kennedy Center — Opera House | **172082** *(3rd pass)* | [Ticketmaster search results "Kennedy Center Opera House - Washington, DC" → `.../Kennedy-Center-Opera-House-tickets-WASHINGTON/venue/172082`](https://www.ticketmaster.com/Kennedy-Center-Opera-House-tickets-WASHINGTON/venue/172082); same ID under the slug ["trump-kennedy-center-opera-house"](https://www.ticketmaster.com/trump-kennedy-center-opera-house-tickets-washington/venue/172082) | Verified from Ticketmaster's URLs and titles in search results (not fetched). Room-level ID; building closed (venue answer), so expect no events until reopening. |
| 23 | Fillmore Silver Spring | **conflict: 172548 vs 336573** *(2nd pass)* | [Ticketmaster venue page 172548](https://ticketmaster.com/the-fillmore-silver-spring-tickets-silver-spring/venue/172548) (fetched: "The Fillmore Silver Spring, 8656 Colesville Rd", events listed, earliest shown 2025); the [Ticketmaster blog venue guide](https://blog.ticketmaster.com/venue-faq-the-fillmore-sliver-spring-md) links instead to `.../venue/336573` (that page failed to fetch) | *(3rd pass)* **Resolved in favour of 172548.** The 336573 link comes from the older blog guide (dated [23 Sep 2020](https://blog.ticketmaster.com/venue-faq-the-fillmore-sliver-spring-md/)); a re-fetch of the 336573 page failed again. The newer Ticketmaster blog list "Best Concert Venues in Washington, D.C." ([23 May 2023](https://blog.ticketmaster.com/?p=40671)) links the Fillmore to `.../venue/172548`, Ticketmaster's own search uses [`vid=172548`](https://ticketmaster.com/search?q=The+Fillmore+Silver+Spring&user_input=spring&vid=172548) (search result URL), and 172548 is the page that showed live events. Wire **172548**; treat 336573 as a likely retired ID (inference, not confirmed by Ticketmaster). The blog also gives capacity 2,000. |
| 24 | Music Center at Strathmore | **172434** *(3rd pass)* | [Ticketmaster venue page `.../music-center-at-strathmore-tickets-n-bethesda/venue/172434`](https://www.ticketmaster.com/music-center-at-strathmore-tickets-n-bethesda/venue/172434) (fetched: "Music Center at Strathmore", parking at Grosvenor-Strathmore Metro garage; 5 events, first two Baltimore Symphony Orchestra and Boston Symphony Orchestra) | Verified (Ticketmaster page itself). Primary seller is still Strathmore's own system with True Tickets ([INTIX, 18 Nov 2025](https://intix.org/news/1537840)) *(2nd pass)*; the Ticketmaster listings may be partial. |
| 25 | Lincoln Theatre | **172087** *(2nd pass)* | [thelincolndc.com ticket info links to `ticketmaster.com/venue/172087`](https://thelincolndc.com/?p=300) | Verified (official venue site; I.M.P. venue, Ticketmaster online + I.M.P. box offices). |
| 26 | 9:30 Club | **172098** *(2nd pass)* | [930.com FAQ links to `ticketmaster.com/930-club-tickets-washington/venue/172098`](https://www.930.com/faq/) | Verified (official venue site); a direct fetch of the Ticketmaster page failed. **Do not** use 172706 (the [9:30 Club/Atlantis **parking** product](https://www.930.com/faq/)). AXS also shows a 9:30 Club page ([AXS 101517](https://www.axs.com/sg/venues/101517)) with events, but the official FAQ names only Ticketmaster. |
| 27 | Kennedy Center — Eisenhower Theater | not verified *(3rd pass)* | same as row 21 | Two Ticketmaster-restricted searches found no Eisenhower Theater venue page. Same as row 21; do not map 172079. |

**Count (after 2nd pass):** 12 rooms verified (first pass: 1, 5, 6, 7, 10, 14; second pass: 3, 8, 18, 20, 25, 26); 1 room with two conflicting IDs (23, Fillmore); 15 rows still not verified (2, 4, 9, 9a, 11, 12, 13, 15, 16, 17, 19, 21, 22, 24, 27).

**Count (after 3rd pass, 14 Oct 2026):** **24 of 28 rows** now have a Ticketmaster venue ID. Third pass added 11: 2 (172123), 4 (172223), 9 (172349), 11 (172105), 12 (172076), 13 (246351), 15 (172643), 17 (172633), 19 (172570), 22 (172082), 24 (172434); and resolved 23 (Fillmore → 172548). Of these, rows 2, 4, 15, 17 and 24 were confirmed on the fetched Ticketmaster page; rows 9, 11, 12, 13, 19 and 22 rest on Ticketmaster's own URL and page title in search results because the page fetch failed (check them with the Discovery API before wiring). **Still not verified (4):** 9a (Xfinity Pavilion, no separate venue), 16 (Segra Field, Account Manager only), 21 (Kennedy Center Concert Hall) and 27 (Eisenhower Theater); Ticketmaster has only a building-level Kennedy Center venue (172079) that should not be mapped to a room.

**Method note (3rd pass):** IDs were found with web searches restricted to `ticketmaster.com`, whose results return Ticketmaster's venue URLs with titles of the form "Room - City, ST". Ticketmaster event pages for several non-Ticketmaster-sold rooms (Strathmore, Wolf Trap, Kennedy Center, Greene Stadium, SECU) use event IDs beginning `Z7r9jZ…`, unlike the `1500…`/`0100…` IDs of events Ticketmaster sells directly; this suggests partner-sourced listings (an observation, not confirmed by Ticketmaster).

**Other ticketers found (2nd pass):** AXS for CareFirst Arena (17, AXS 129150) and Echostage (19, AXS 125391); Wolf Trap Foundation via tickets.com (13); Strathmore's own system with True Tickets (24); Kennedy Center's own system (21/22/27); UMD's evenue for UMD Athletics (2). I.M.P. rooms (The Anthem, 9:30 Club, Lincoln Theatre, Merriweather) sell online **through Ticketmaster** plus I.M.P.'s own no-fee box offices ([Merriweather FAQ](https://merriweathermusic.com/faq/), [930.com FAQ](https://www.930.com/faq/)); they do not use a separate online ticketing system. No Etix use was found. Rows 4, 9, 9a, 11, 12, 15 and 16 were not checked in this pass (the shared web-search budget ran out; see summary).

**Other ticketers (3rd pass additions):** Navy uses navysports.evenue.net ([Navy ticket office](https://navysports.com/sports/2026/7/22/The-Navy-ticket-office.aspx?path=me)) (4); UMD's evenue also covers Xfinity Center and the Pavilion ([UMD](https://umterps.com/facilities/?id=8), [UMD Pavilion](https://umterps.com/facilities/?id=17)) (9, 9a); Howard uses howard.universitytickets.com / vivenu ([Howard, 2022](https://hubison.com/news/2022/8/3/football-season-tickets-on-sale-now)) (12); GW Athletics uses Ticketmaster ([GW, 4 Nov 2022](https://gwsports.com/news/2022/11/4/general-george-washington-university-partners-with-ticketmaster-on-ticketing-technologies)) (15); Segra Field uses Ticketmaster Account Manager ([am.ticketmaster.com/segrafield](https://am.ticketmaster.com/segrafield/)) (16). Still no Etix use found.

**Consequence (per brief), updated 3rd pass:** without a verified ID, a room ships with no Ticketmaster concerts. After the 3rd pass, only **Xfinity Pavilion (9a)**, **Segra Field (16)**, and the closed **Kennedy Center Concert Hall (21)** and **Eisenhower Theater (27)** lack one. Rows 9, 11, 12, 13, 19 and 22 should get one Discovery API check because their Ticketmaster pages could not be fetched.

---

## 3. Teams: league, home row, free schedule feed and colors

### About the feeds

- **ESPN public API** (`site.api.espn.com/apis/site/v2/sports/...`): free and needs no key, but it is **undocumented and unofficial**. Each team endpoint returns the team ID, abbreviation, colors and home venue, and the `/schedule` endpoint returns games with venue, a `neutralSite` flag and attendance (for example the [Mystics 2026 postseason schedule](https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams/16/schedule?season=2026&seasontype=3)). The fetch tool cut off long schedule responses, so full-season reads need paging.
- **ESPN returned attendance `0` for the Commanders' 2026 games**, including the [27 Sept home game that had already been played](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/28/schedule?season=2026). The [2025 schedule](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/28/schedule?season=2025) did carry crowds (for example 64,544 on 7 Sept 2025). This is the Tampa Bay problem again: current-season counts may arrive late or not at all. Use the reference sites in §5 for history.
- **MLB Stats API** (`statsapi.mlb.com`): MLB's own public data feed; [team 120](https://statsapi.mlb.com/api/v1/teams/120) is the Nationals, home venue ID 3309 "Nationals Park".
- **NHL official API** (`api-web.nhle.com`): the WSH schedule endpoint was **rate-limited (HTTP 429)** in this pass and was not read. ESPN covers the Capitals instead.

### Team table

Colors: **no official team or league brand page was reached in this pass** (web search had run out, and no team brand page URL was available to fetch). The hex values below are from ESPN's team feed and are labelled **secondary (ESPN API)**. They are ESPN's values, not the team's published brand standard. Replace them with official values when a team or league brand source is found.

**Second pass (14 Oct 2026):** official sources found for the Commanders (NFL Properties logo slick) and for five universities (Georgetown, Maryland ×2 rows, George Mason, GW, Howard). The university values are the **university's** brand palette; athletics departments may use different shades, and ESPN's values differ for four of the five schools (both are shown). Still secondary-only: Nationals, Capitals, Wizards, Mystics, D.C. United, Spirit, Go-Go, Defenders, Loudoun United, Navy. Still no colors: DC Power FC, Baysox, Old Glory DC, Washington Freedom. Searches for official Capitals, Spirit and Naval Academy brand pages returned only fan or aggregator sites.

| Team | League | Home venue row ID | Free feed and ID | Primary hex | Secondary hex | Color source |
|---|---|---|---|---|---|---|
| Washington Commanders | NFL | 1 | ESPN NFL team **28** (`WSH`); ESPN venue ID 3719 "Northwest Stadium" ([feed](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/wsh)) | `#5A1414` | `#FFB612` | **official** *(2nd pass)*: [NFL Properties 2026 Commanders logo slick](https://media.washington.1rmg.com/wp-content/uploads/2026/04/29105311/Commanders-Logo-Slick-2026.pdf) gives Burgundy `5A1414` (PMS 7421 C) and Gold `FFB612` (PMS 1235 C), matching ESPN ([link](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/wsh)) |
| Washington Nationals | MLB | 3 | MLB Stats API team **120**, venue **3309** ([feed](https://statsapi.mlb.com/api/v1/teams/120)); also ESPN MLB team **20** ([feed](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/wsh)) | `#AB0003` | `#11225B` | secondary (ESPN API, [link](https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/wsh)) |
| Washington Capitals | NHL | 6 | ESPN NHL team **23** (`WSH`); ESPN venue ID 1823 "Capital One Arena" ([feed](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/wsh)). NHL API not verified (429). | `#D71830` (ESPN); conflict: `#C8102E` ([Team Color Codes](https://teamcolorcodes.com/washington-capitals-color-codes/)) | `#041E42` Navy *(2nd pass)* ([Team Color Codes](https://teamcolorcodes.com/washington-capitals-color-codes/), which states it is not affiliated with any team) | secondary only (ESPN API, [link](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/wsh); Team Color Codes). No official Capitals/NHL brand page found. |
| Washington Wizards | NBA | 6 | ESPN NBA team **27** (`WSH`); venue 1823 ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/wsh)) | `#E31837` | `#002B5C` | secondary (ESPN API, [link](https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/wsh)) |
| Washington Mystics | WNBA | 17 (some games at 6 and 10; see §4) | ESPN WNBA team **16** (`WSH`) ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams)) | `#E03A3E` | `#002B5C` | secondary (ESPN API, [link](https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams)) |
| D.C. United | MLS | 7 | ESPN MLS (`usa.1`) team **193** (`DC`) ([feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams)) | `#000000` | `#D61018` | secondary (ESPN API, [link](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/teams)) |
| Washington Spirit | NWSL | 7 | ESPN NWSL (`usa.nwsl`) team **15365** (`WAS`) ([feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams)) | `#000000` | `#EDE939` | secondary (ESPN API, [link](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/teams)) |
| Georgetown men's basketball | NCAA D-I (Big East) | 6 | ESPN men's college basketball team **46** (`GTWN`) ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/gtown)) *(2nd pass)* | `#041E42` (Georgetown Blue) | `#63666A` (Georgetown Gray) | **official** university brand: [georgetown.edu color guide](https://www.georgetown.edu/color-guide/). ESPN differs (`#110E42` / `#001C58`, secondary, [link](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/gtown)). |
| Maryland football (and men's lacrosse) | NCAA D-I (Big Ten) | 2 | ESPN college football team **120** (`MD`) ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/maryland)) *(2nd pass)*. Lacrosse not checked. | `#E21833` (Maryland Red) | `#FFD200` (Maryland Gold) | **official** university brand: [brand.umd.edu/colors](https://brand.umd.edu/colors) (also lists White and Black). ESPN differs (`#CE1126` / `#FFFFFF`, secondary, [link](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/maryland)). |
| Maryland basketball | NCAA D-I (Big Ten) | 9 | ESPN men's college basketball team **120** (`MD`) ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/maryland)) *(2nd pass)* | `#E21833` (Maryland Red) | `#FFD200` (Maryland Gold) | **official** university brand: [brand.umd.edu/colors](https://brand.umd.edu/colors). ESPN differs (`#CE1126` / `#FFFFFF`, secondary, [link](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/maryland)). |
| George Mason basketball | NCAA D-I (A-10) | 10 | ESPN men's college basketball team **2244** (`GMU`) ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2244); [ESPN page](https://africa.espn.com/mens-college-basketball/team/_/id/2244/george-mason-patriots)) *(2nd pass)* | `#005239` (George Mason Green) | `#FFC733` (George Mason Gold) | **official** university brand: [brand.gmu.edu brand colors](https://brand.gmu.edu/brand-guide/brand-colors). ESPN differs (`#016600` / `#ECB010`, secondary, [link](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/2244)). |
| *Added:* Capital City Go-Go | NBA G League | 17 | ESPN G League (`nba-development`) team **4** (`CAP`) ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams)) *(2nd pass)* | `#002B5C` | `#E31837` | secondary (ESPN API, [link](https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/teams)) |
| *Added:* DC Defenders | UFL | 7 (partial bowl) | ESPN UFL (`football/ufl`) team **112646** (`DC`) ([feed](https://site.api.espn.com/apis/site/v2/sports/football/ufl/teams)) *(2nd pass)* | `#C8102E` | `#FFFFFF` | secondary (ESPN API, [link](https://site.api.espn.com/apis/site/v2/sports/football/ufl/teams)) |
| *Added:* DC Power FC | USL Super League | 7 | ESPN soccer team **131450** ([ESPN team page](https://www.espn.com/soccer/team/_/id/131450); [fixtures page](https://www.espn.com/soccer/team/fixtures/_/id/131450)) *(2nd pass)*. **API path confirmed** *(3rd pass)*: league slug **`usa.w.usl.1`** (seen on [ESPN's USL Super League stats page](https://africa.espn.com/soccer/stats/_/league/usa.w.usl.1)). [`/soccer/usa.w.usl.1/teams`](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.w.usl.1/teams) lists "DC Power FC", id 131450, abbreviation `DC` (league id 23633, 2026 season). [`/teams/131450/schedule`](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.w.usl.1/teams/131450/schedule) returns the 2026 fall-season games with venue and attendance (e.g. Audi Field, 758 on 22 Sep 2026 and 1,399 on 18 Sep 2026). | `#000000` *(3rd pass)* | `#FFFFFF` *(3rd pass)* | secondary (ESPN API, [link](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.w.usl.1/teams)). **Conflict:** SportsLogos.net describes the June 2024 crest as **royal blue**, white and black ([SportsLogos, 29 Jun 2024](https://news.sportslogos.net/2024/06/29/usl-super-leagues-dc-power-fc-revamp-crest-before-season-kickoff/soccer/); no hex). No official club hex found. |
| *Added:* GW basketball (Revolutionaries) | NCAA D-I (A-10) | 15 | ESPN men's college basketball team **45** (`GW`) ([feed](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/45); [ESPN page](https://africa.espn.com/mens-college-basketball/team/_/id/45)) *(2nd pass)* | `#033C5A` (GW Blue) | `#D6BF91` (GW Buff) | **official** university brand: [GWU Communications color palette](https://communications.gwu.edu/node/1251). ESPN differs (`#002843` / `#E8D2A1`, secondary, [link](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/45)). |
| *Added:* Howard football | NCAA FCS | 12 | ESPN college football team **47** (`HOW`) ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/howard)) *(2nd pass)* | `#003A63` (Dark Midnight Blue) | `#E51937` (Crimson) | **official** university brand: [Howard OUC colors & typography](https://ouc.howard.edu/our-services/creative-branding/colors-typography); matches ESPN ([link](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/howard)). |
| *Added:* Chesapeake Baysox | MiLB Double-A (Eastern League; Orioles affiliate) | 11 | MLB Stats API team **418** (`CHE`), venue **2832** "Prince George's Stadium" ([feed, sportId=12](https://statsapi.mlb.com/api/v1/teams?sportId=12)) *(2nd pass)* | gap | gap | MLB Stats API carries no colors. *3rd pass:* the official rebrand article ([MiLB, 22 Nov 2024](https://www.milb.com/news/baltimore-orioles-affiliate-changes-name-to-chesapeake-baysox)) gives no colour codes. Still a gap. |
| *Added:* Loudoun United FC | USL Championship | 16 (edge) | ESPN USL Championship (`usa.usl.1`) team **19410** (`LOU`) ([feed](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)) *(2nd pass)* | `#000000` | `#C60000` | secondary (ESPN API, [link](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/teams)) |
| *Added (edge):* Navy football | NCAA FBS | 4 (edge, out of core) | ESPN college football team **2426** (`NAVY`) ([feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/navy)) *(2nd pass)* | `#00225B` | `#B5A67C` | secondary (ESPN API, [link](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/navy)) |
| *Added:* Old Glory DC | Major League Rugby | 2026: George Mason Stadium, Fairfax (**no venue row**; [4,500 fixed seats per GMU, announced 10 Nov 2025](https://gomason.com/news/2025/11/10/athletics-old-glory-dc-to-play-2026-matches-at-george-mason-stadium.aspx)) *(2nd pass)* | **no feed** found (see note below) | `#0A2F57` (Dark Blue) *(3rd pass)* | `#BF302E` (Red) *(3rd pass)* | secondary only: [Team Color Codes](https://teamcolorcodes.com/old-glory-dc-color-codes/) (aggregator, states it is not affiliated with any team; also lists White `#FFFFFF`). The [club page](https://oldglorydc.com/club) gives no colors. |
| *Added:* Washington Freedom | Major League Cricket | **no DC-area home ground in 2026**: all 2026 matches were at Grand Prairie (TX), Oakland and Pomona (CA) per [Wikipedia: 2026 MLC season](https://en.wikipedia.org/wiki/2026_Major_League_Cricket_season) *(2nd pass)* | ESPN cricket series **21266** fixtures page ([ESPN](https://www.espn.com/cricket/scores/series/21266/utils)); no team-level ID verified. No DC games to place, so no feed is needed for the city. | gap | gap | — |

**Teams with a verified free feed (19, after 2nd pass):** Commanders, Nationals, Capitals, Wizards, Mystics, D.C. United, Spirit (first pass); Georgetown, Maryland football, Maryland basketball, George Mason, GW, Howard, Navy (edge), Capital City Go-Go, DC Defenders, Loudoun United, Chesapeake Baysox (MLB Stats API) and DC Power FC (second pass; *3rd pass:* ESPN API path `soccer/usa.w.usl.1`, team 131450, confirmed).

**Colors, 3rd pass:** official brand hex values were searched for the Spirit (the [2024 rebrand release](https://washingtonspirit.com/blog/2024/02/27/washington-spirit-unveil-groundbreaking-new-look-for-2024-season/) names black, grey and "vibrant yellow" but gives no codes), the Naval Academy, the Baysox, DC Power FC, Old Glory DC and the Monumental teams (Capitals, Wizards, Mystics). Every search returned only aggregator sites, which state they are not affiliated with the teams. **No new official hex was found.** DC Power FC (ESPN) and Old Glory DC (aggregator) now have secondary values.
**Teams with no verified feed (2):** Old Glory DC (no free schedule feed found; only the team/league websites were seen, and no ESPN rugby endpoint was checked) and Washington Freedom (series-level ESPN page only, and no DC-area matches in 2026).

**Second-pass note on feeds:** the Georgetown endpoint failed with the slug `georgetown` and worked with `gtown`. ESPN college endpoints sometimes return the *next event's* venue rather than the home venue (Maryland basketball returned "United Center" for an away game), so do not read the home venue from these team endpoints.

---

## 4. Games away from the home venue (2025 on)

| Team | Date | Designated home team | Actual site | Venue row ID | Attendance | Source |
|---|---|---|---|---|---|---|
| Commanders | 16 Nov 2025 | **Miami Dolphins** (Commanders were the visitors) | Santiago Bernabéu, Madrid, Spain | none (outside city) | 78,610 | [Wikipedia: NFL International Series](https://en.wikipedia.org/wiki/NFL_International_Series) (reference). Not a Commanders home game; listed so it is not mistaken for one. [Pro Football Reference](https://www.pro-football-reference.com/teams/was/2025.htm) shows it simply as "@ MIA". |
| Commanders | 4 Oct 2026, 9:30 a.m. ET | **Washington Commanders** vs Indianapolis Colts | Tottenham Hotspur Stadium, London, England | none (outside city) | not reported (ESPN shows `0`) | [ESPN schedule feed: "NFL International Series – Indianapolis Colts at Washington Commanders", `neutralSite: true`](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/28/schedule?season=2026); [Wikipedia](https://en.wikipedia.org/wiki/NFL_International_Series). [Pro Football Reference](https://www.pro-football-reference.com/teams/was/2026.htm) lists it as a plain home game with no site, so **do not place it at row 1**. |
| Commanders | 2026 season, other home games | Commanders | Northwest Stadium (row 1) | 1 | — | ESPN feed above lists 27 Sept and 11 Oct 2026 at Northwest Stadium. No game at an RFK-site stadium is possible before its [2030 target opening](https://en.wikipedia.org/wiki/New_Stadium_at_RFK_Campus) (venue answer). |
| Mystics | 28 May 2025 (vs Indiana) | Mystics | CFG Bank Arena, Baltimore | none (Baltimore) | 11,183 | [Wikipedia: 2025 Mystics season](https://en.wikipedia.org/wiki/2025_Washington_Mystics_season) (reference) |
| Mystics | 8 Jul 2025 (vs Chicago) | Mystics | EagleBank Arena, Fairfax | 10 | 9,350 | same |
| Mystics | 10 Jul 2025 (vs Las Vegas) | Mystics | EagleBank Arena, Fairfax | 10 | 9,350 | same |
| Mystics | 7 Sep 2025 (vs Indiana) | Mystics | CFG Bank Arena, Baltimore | none (Baltimore) | 11,183 | same |
| Mystics | 24 Sep 2026 (vs Chicago) | Mystics | Capital One Arena | 6 | not found | [Wikipedia: 2026 Mystics season](https://en.wikipedia.org/wiki/2026_Washington_Mystics_season) lists it as scheduled at Capital One Arena; whether it was played there and its crowd were not confirmed. |
| D.C. United | 7 Mar 2026, 21:30 UTC (4:30 p.m. ET) (vs Inter Miami CF; Miami won 2–1) | D.C. United | **M&T Bank Stadium, Baltimore, Maryland** *(2nd pass)* | none (Baltimore; outside city) | 72,026 | [ESPN MLS scoreboard feed for 7 Mar 2026](https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard?dates=20260307) names venue "M&T Bank Stadium", Baltimore, D.C. United as home team, attendance 72026; same crowd on [Wikipedia: 2026 D.C. United season](https://en.wikipedia.org/wiki/2026_D.C._United_season) (whose infobox lists only Audi Field, so do not rely on it for the site). **Do not place this match at row 7.** If a Baltimore city exists, record it there. |
| Capitals | — | — | No outdoor or international Capitals game from 2025 on was listed | — | — | [Wikipedia: NHL outdoor games](https://en.wikipedia.org/wiki/NHL_outdoor_games) (Capitals' last outdoor game: 18 Feb 2023, Raleigh, as visitor); [Wikipedia: NHL Global Series](https://en.wikipedia.org/wiki/NHL_Global_Series) (2025–26 games do not involve Washington) |
| Wizards | — | — | No neutral-site game in 2025–26 | — | — | [Basketball Reference 2025–26 schedule](https://www.basketball-reference.com/teams/WAS/2026_games.html) has no "N" game; [Wikipedia: NBA Global Games](https://en.wikipedia.org/wiki/NBA_Global_Games) lists no Wizards games from 2024 on. *Before the window:* 2 Nov 2024 vs Miami is marked neutral ("N") on [Basketball Reference 2024–25](https://www.basketball-reference.com/teams/WAS/2025_games.html) (20,328); the site is not named there. |
| Howard football *(2nd pass)* | 30 Aug 2025 | neutral (vs Florida A&M) | Hard Rock Stadium, Miami Gardens, FL | none (outside city) | 22,455 | [ESPN feed, `neutralSite: true`](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/47/schedule?season=2025) |
| Howard football *(3rd pass)* | 21 Sep 2024 (vs Hampton); 20 Sep 2025 (vs Hampton) | neutral | **Audi Field** (in city) | **7** (not 12) | 16,813 (2024); 18,672 (2025) | [Wikipedia: 2024 Howard Bison football](https://en.wikipedia.org/wiki/2024_Howard_Bison_football_team); [2025](https://en.wikipedia.org/wiki/2025_Howard_Bison_football_team) (reference). Also 16 Sep 2023 vs Hampton at Audi Field, 16,630 ([2023](https://en.wikipedia.org/wiki/2023_Howard_Bison_football_team)). Annual game; match to row 7, never row 12. |
| Howard football *(3rd pass)* | 22 Nov 2025 (vs Norfolk State) | neutral as listed | Audi Field | 7 | 1,968 (as printed; unusually low, check box score) | [Wikipedia: 2025 Howard Bison football](https://en.wikipedia.org/wiki/2025_Howard_Bison_football_team) |
| Howard football *(3rd pass)* | 14 Sep 2024; 13 Sep 2025 (vs Morehouse) | neutral | MetLife Stadium, East Rutherford, NJ | none (outside city) | 31,174; 16,248 | [2024](https://en.wikipedia.org/wiki/2024_Howard_Bison_football_team); [2025](https://en.wikipedia.org/wiki/2025_Howard_Bison_football_team) |
| Maryland football *(3rd pass)* | 29 Nov 2025 (vs Michigan State) | neutral ("vs.") | Ford Field, Detroit, MI | none (outside city) | 30,317 | [Wikipedia: 2025 Maryland football](https://en.wikipedia.org/wiki/2025_Maryland_Terrapins_football_team) (reference). Do not place at row 2. |
| Maryland men's basketball *(3rd pass)* | 3 Nov 2025 (vs Coppin State) | neutral as listed | CFG Bank Arena, Baltimore | none (Baltimore) | 7,863 | [Wikipedia: 2025–26 Maryland MBB](https://en.wikipedia.org/wiki/2025%E2%80%9326_Maryland_Terrapins_men%27s_basketball_team) |
| Georgetown men's basketball *(3rd pass)* | 6 Nov 2024 (Lehigh), 26 Nov 2024 (Wagner); 13 Dec 2025 (Saint Peter's), 22 Dec 2025 (Coppin State) | Georgetown (home) | **McDonough Gymnasium**, Georgetown campus | **no venue row** (named but not capacity-verified in the venue answer) | 2,008; 1,477; 1,622; 1,463 | [Wikipedia: 2024–25](https://en.wikipedia.org/wiki/2024%E2%80%9325_Georgetown_Hoyas_men%27s_basketball_team); [2025–26](https://en.wikipedia.org/wiki/2025%E2%80%9326_Georgetown_Hoyas_men%27s_basketball_team). Home games **not** at Capital One Arena; do not place at row 6. |
| GW and George Mason MBB (A-10 tournament) *(3rd pass)* | 13–16 Mar 2025 | neutral (Atlantic 10 tournament) | Capital One Arena | 6 | e.g. 9,355 (15 Mar, GMU semifinal); 12,516 (16 Mar, final) | [Wikipedia: 2024–25 George Mason MBB](https://en.wikipedia.org/wiki/2024%E2%80%9325_George_Mason_Patriots_men%27s_basketball_team); [2024–25 GW MBB](https://en.wikipedia.org/wiki/2024%E2%80%9325_George_Washington_Revolutionaries_men%27s_basketball_team). In-city neutral event; not a GW (row 15) or Mason (row 10) home game. |
| Navy football (edge) *(3rd pass)* | 14 Dec 2024 (Army–Navy) | neutral | **Northwest Stadium**, Landover | **1** | 60,726 | [Wikipedia: 2024 Navy football](https://en.wikipedia.org/wiki/2024_Navy_Midshipmen_football_team). Just before the 2025 window, but an in-city neutral game at row 1. 2025 Army–Navy was at M&T Bank Stadium, Baltimore (70,936) ([2025](https://en.wikipedia.org/wiki/2025_Navy_Midshipmen_football_team)). |

**Not checked (gap):** Nationals (MLB special-site games such as the Little League Classic), Spirit (2nd pass: the [2023](https://en.wikipedia.org/wiki/2023_Washington_Spirit_season)–[2026](https://en.wikipedia.org/wiki/2026_Washington_Spirit_season) season pages name no home match away from Audi Field, but they give no per-match venue, so this is not confirmed), D.C. United 2025 (no other venue was named on its [season page](https://en.wikipedia.org/wiki/2025_D.C._United_season)), and all college teams (neutral-site and relocated games). These needed web search. *3rd pass:* the college teams are now covered for 2023 to 2025–26 from Wikipedia schedule tables (rows above). Nationals special-site games and Spirit per-match venues are still unchecked.

---

## 5. Postseason and past crowds, per team

**Range covered:** pro teams, seasons 2023 (or 2023–24) through the latest completed season (2025–26 for NHL/NBA; 2025 for NFL; 2026 for MLB, WNBA). D.C. United 2026 is partial (season still running). **Not covered in the first pass:** the Spirit and all college and minor-league teams. *2nd pass added:* Spirit 2023–2026, Baysox 2023–2025, and sample college crowds from the ESPN feed (see those subsections). All sources here are **reference (secondary)** sites that reproduce box-score attendance (Sports Reference sites, Wikipedia) or the ESPN feed, unless stated. Averages marked "calc" are this answer's arithmetic on the listed per-game figures, not a published average.

### Washington Capitals (NHL) — home row 6

**Postseason home games**

| Season | Round / game | Date | Opponent | Announced attendance | Source |
|---|---|---|---|---|---|
| 2023–24 | R1 G3 | 26 Apr 2024 | NY Rangers | 18,573 | [Hockey Reference 2023–24](https://www.hockey-reference.com/teams/WSH/2024_games.html) |
| 2023–24 | R1 G4 | 28 Apr 2024 | NY Rangers | 18,573 | same |
| 2024–25 | R1 G1 | 21 Apr 2025 | Montreal | 18,573 | [Hockey Reference 2024–25](https://www.hockey-reference.com/teams/WSH/2025_games.html); same figure in [ESPN feed](https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/23/schedule?season=2025&seasontype=3) |
| 2024–25 | R1 G2 | 23 Apr 2025 | Montreal | 18,573 | same |
| 2024–25 | R1 G5 | 30 Apr 2025 | Montreal | 18,573 | [Hockey Reference 2024–25](https://www.hockey-reference.com/teams/WSH/2025_games.html) |
| 2024–25 | R2 G1 | 6 May 2025 | Carolina | 18,573 | same |
| 2024–25 | R2 G2 | 8 May 2025 | Carolina | 18,573 | same |
| 2024–25 | R2 G5 | 15 May 2025 | Carolina | 18,573 | same |
| 2025–26 | — | — | No playoffs (no playoff table) | — | [Hockey Reference 2025–26](https://www.hockey-reference.com/teams/WSH/2026_games.html) |

**Regular season**

| Season | Home games | Total (calc) | Average (calc) | Range | Source |
|---|---|---|---|---|---|
| 2023–24 | 41 | 731,483 | 17,841 | 15,850–18,573 | [Hockey Reference](https://www.hockey-reference.com/teams/WSH/2024_games.html) |
| 2024–25 | 41 | 748,014 | 18,244 | 15,789–18,573 | [Hockey Reference](https://www.hockey-reference.com/teams/WSH/2025_games.html) |
| 2025–26 | 41 | 737,584 | 17,990 | 16,471–18,347 | [Hockey Reference](https://www.hockey-reference.com/teams/WSH/2026_games.html) |

Note: the top (sell-out) figure fell from 18,573 to **18,347** in 2025–26, which fits the arena renovation in the venue answer. This is announced attendance, not a new capacity.

### Washington Wizards (NBA) — home row 6

**Postseason:** none in 2023–24, 2024–25 or 2025–26 (no playoff table on [2023–24](https://www.basketball-reference.com/teams/WAS/2024_games.html), [2024–25](https://www.basketball-reference.com/teams/WAS/2025_games.html), [2025–26](https://www.basketball-reference.com/teams/WAS/2026_games.html)).

| Season | Home games | Total (calc) | Average (calc) | Range | Source |
|---|---|---|---|---|---|
| 2023–24 | 41 | 692,851 | 16,899 | 14,027–20,333 | [Basketball Reference](https://www.basketball-reference.com/teams/WAS/2024_games.html) |
| 2024–25 | 40 at home (+1 neutral, excluded) | 643,363 | 16,084 | 11,457–20,385 | [Basketball Reference](https://www.basketball-reference.com/teams/WAS/2025_games.html) |
| 2025–26 | 41 | 660,376 | 16,107 | 13,102–20,028 | [Basketball Reference](https://www.basketball-reference.com/teams/WAS/2026_games.html) |

### Washington Nationals (MLB) — home row 3

**Postseason:** none in 2023–2025 (records 71-91, 71-91, 66-96). 2026: 77-85, 4th in NL East; the page does not state a postseason result, so it is treated as no home postseason games (confirm).

| Season | Home attendance (total, as published) | Rank as shown (league of 15 teams, i.e. NL) | Source |
|---|---|---|---|
| 2023 | 1,865,832 | 13th of 15 | [Baseball Reference 2023](https://www.baseball-reference.com/teams/WSN/2023.shtml) |
| 2024 | 1,967,302 | 13th of 15 | [Baseball Reference 2024](https://www.baseball-reference.com/teams/WSN/2024.shtml) |
| 2025 | 1,916,768 | 13th of 15 | [Baseball Reference 2025](https://www.baseball-reference.com/teams/WSN/2025.shtml) |
| 2026 | 1,839,116 | 13th of 15 | [Baseball Reference 2026](https://www.baseball-reference.com/teams/WSN/2026.shtml) |

Per-game averages: **gap** (the number of home dates was not captured, so no average is computed).

### Washington Commanders (NFL) — home row 1

**Postseason home games:** none. 2023: no playoffs (4-13) ([PFR](https://www.pro-football-reference.com/teams/was/2023.htm)). 2024 season: three playoff games, **all away** (at Tampa Bay 12 Jan 2025, at Detroit 18 Jan 2025, at Philadelphia 26 Jan 2025) ([PFR](https://www.pro-football-reference.com/teams/was/2024.htm)). 2025: no playoffs (5-12) ([PFR](https://www.pro-football-reference.com/teams/was/2025.htm)).

| Season | Home games | Home total (published) | Average (calc) | Source |
|---|---|---|---|---|
| 2023 | 8 | 511,606 | 63,951 | [PFR attendance 2023](https://www.pro-football-reference.com/years/2023/attendance.htm); home count from [PFR team page](https://www.pro-football-reference.com/teams/was/2023.htm) |
| 2024 | 9 | 570,854 | 63,428 | [PFR attendance 2024](https://www.pro-football-reference.com/years/2024/attendance.htm); [team page](https://www.pro-football-reference.com/teams/was/2024.htm) |
| 2025 | 8 (Madrid game was a Dolphins home game) | 514,362 | 64,295 | [PFR attendance 2025](https://www.pro-football-reference.com/years/2025/attendance.htm); [team page](https://www.pro-football-reference.com/teams/was/2025.htm) |
| 2026 (in progress) | — | not collected; ESPN shows `0` for played games | — | [ESPN feed](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/28/schedule?season=2026) |

Single-game examples (ESPN feed): 64,544 on 7 Sep 2025 and 64,546 on 21 Sep 2025 ([ESPN 2025 schedule](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/28/schedule?season=2025)).

### Washington Mystics (WNBA) — home row 17 (games also at rows 6 and 10, and in Baltimore)

**Postseason home games**

| Season | Round / game | Date | Opponent | Venue (row) | Announced attendance | Source |
|---|---|---|---|---|---|---|
| 2023 | R1 G1, G2 | 15 and 19 Sep 2023 | NY Liberty | **both away** (Barclays Center) | — | [Wikipedia: 2023 season](https://en.wikipedia.org/wiki/2023_Washington_Mystics_season) |
| 2024 | — | — | did not qualify | — | — | [Wikipedia: 2024 season](https://en.wikipedia.org/wiki/2024_Washington_Mystics_season) |
| 2025 | — | — | did not qualify (16-28) | — | — | [Wikipedia: 2025 season](https://en.wikipedia.org/wiki/2025_Washington_Mystics_season) |
| 2026 | R1 G2 | 30 Sep 2026 | Atlanta Dream | CareFirst Arena (17) | 4,200 | [ESPN feed](https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams/16/schedule?season=2026&seasontype=3) (Atlanta won G1 and G2) |

**Regular season**

| Season | Home games with figures | Total (calc) | Average (calc) | Notes | Source |
|---|---|---|---|---|---|
| 2023 | 20 | 87,813 | 4,391 | 19 at CareFirst (then "Entertainment and Sports Arena", 3,058–4,210) + 1 at Capital One Arena (14,406, 19 Jul 2023) | [Wikipedia: 2023 season](https://en.wikipedia.org/wiki/2023_Washington_Mystics_season) |
| 2024 | 16 of 20 (4 rows have no figure) | not computed | — | CareFirst games 4,200 each; Capital One Arena: 10,000 (6 Jun), 20,333 (7 Jun), 12,586 (16 Jul), 20,711 (19 Sep) | [Wikipedia: 2024 season](https://en.wikipedia.org/wiki/2024_Washington_Mystics_season) |
| 2025 | 22 | 116,666 | 5,303 (blended across three rooms) | 18 at CareFirst, all 4,200; 2 at EagleBank (9,350 each); 2 in Baltimore (11,183 each) | [Wikipedia: 2025 season](https://en.wikipedia.org/wiki/2025_Washington_Mystics_season) |
| 2026 | 20 of 22 | 84,000 | 4,200 | All 20 listed games at CareFirst at 4,200; 22 Sep (CareFirst) and 24 Sep (Capital One Arena) had no figure when read | [Wikipedia: 2026 season](https://en.wikipedia.org/wiki/2026_Washington_Mystics_season) (the page's infobox and game log disagree on the record) |

### D.C. United (MLS) — home row 7

**Postseason:** did not qualify in 2023, 2024 or 2025 (season pages: [2023](https://en.wikipedia.org/wiki/2023_D.C._United_season), [2024](https://en.wikipedia.org/wiki/2024_D.C._United_season), [2025](https://en.wikipedia.org/wiki/2025_D.C._United_season)). 2026 is still in progress.

| Season | MLS home matches with figures | Total (calc) | Average (calc) | Notes | Source |
|---|---|---|---|---|---|
| 2023 | 16 (of 17; one home match could not be identified) | 275,000 | 17,188 | Range 8,621–19,215 | [Wikipedia: 2023 season](https://en.wikipedia.org/wiki/2023_D.C._United_season) |
| 2024 | 13 (of 15 home rows; 2 had no figure) | 240,202 | 18,477 | Range 16,716–19,365 | [Wikipedia: 2024 season](https://en.wikipedia.org/wiki/2024_D.C._United_season) |
| 2025 | 15 | 242,600 | 16,173 | Range 10,645–19,365. The page conflicts with itself (infobox puts 19,365 on 22 Feb, the table on 23 Aug; 29 Mar shows two figures). | [Wikipedia: 2025 season](https://en.wikipedia.org/wiki/2025_D.C._United_season) |
| 2026 (partial) | 9 | not computed | — | 72,026 (7 Mar, at M&T Bank Stadium, Baltimore; see §4; exclude from Audi Field crowds), 19,215, 14,040 (possibly misplaced), 11,243, 16,888, 19,215, 19,250, 19,215, 19,365 | [Wikipedia: 2026 season](https://en.wikipedia.org/wiki/2026_D.C._United_season) |

U.S. Open Cup home matches (2025): 6,781 (6 May) and 5,179 (21 May) ([Wikipedia](https://en.wikipedia.org/wiki/2025_D.C._United_season)). 2026: 6,508 (15 Apr) ([Wikipedia](https://en.wikipedia.org/wiki/2026_D.C._United_season)).

### Washington Spirit (NWSL) — home row 7

*(2nd pass; all **reference (secondary)**: Wikipedia season pages. These pages have garbled match tables, so opponents are often missing and home/away was read from table layout; check against NWSL box scores before wiring. No page names a per-match venue other than Audi Field.)*

**Postseason home games**

| Season | Round | Date | Announced attendance | Source |
|---|---|---|---|---|
| 2023 | — (did not qualify, 8th) | — | — | [Wikipedia: 2023 season](https://en.wikipedia.org/wiki/2023_Washington_Spirit_season) |
| 2024 | Quarterfinal | 10 Nov 2024 | 19,215 | [Wikipedia: 2024 season](https://en.wikipedia.org/wiki/2024_Washington_Spirit_season) |
| 2024 | Semifinal | 16 Nov 2024 | 19,365 | same |
| 2024 | Championship (23 Nov 2024; runners-up) | — | 11,500; **not a home match** (page gives no site; do not place at row 7) | same |
| 2025 | Quarterfinal | 8 Nov 2025 | 19,215 | [Wikipedia: 2025 season](https://en.wikipedia.org/wiki/2025_Washington_Spirit_season) |
| 2025 | Semifinal (vs Portland) | 15 Nov 2025 | 19,365 | same |
| 2025 | Championship (runners-up) | — | 18,000; **not a home match** (page gives no site) | same |

**Regular season (home league matches)**

| Season | Home matches with figures | Published average (infobox) | Range | Notes | Source |
|---|---|---|---|---|---|
| 2023 | 10 printed | 9,940 | 7,073–13,048 | Page conflicts with itself: infobox "highest" is 12,232 but a 27 Aug match shows 13,048; the 10 printed figures average about 10,427 (calc) | [Wikipedia: 2023 season](https://en.wikipedia.org/wiki/2023_Washington_Spirit_season) |
| 2024 | 13 | 13,934 (matches calc) | 8,182–19,897 | — | [Wikipedia: 2024 season](https://en.wikipedia.org/wiki/2024_Washington_Spirit_season) |
| 2025 | 11 of 13 | 15,796 | 11,691–19,254 | 2 home rows have no figure | [Wikipedia: 2025 season](https://en.wikipedia.org/wiki/2025_Washington_Spirit_season) |
| 2026 (in progress) | 11 of 12 | none published; ~15,506 (calc) | 9,349–19,365 | 13 Sep 2026 had no figure | [Wikipedia: 2026 season](https://en.wikipedia.org/wiki/2026_Washington_Spirit_season) |

Other competitions: CONCACAF W Champions Cup match on 3 Sep 2025 drew 1,191 ([Wikipedia 2025](https://en.wikipedia.org/wiki/2025_Washington_Spirit_season)); 2024 NWSL x Liga MX Femenil Summer Cup crowds of 1,101 (21 Jul) and 3,523 (28 Jul) are printed, but the page doesn't say which, if either, was a Spirit home match ([Wikipedia 2024](https://en.wikipedia.org/wiki/2024_Washington_Spirit_season)).

### College and other teams

*(2nd pass.)*

**Chesapeake Baysox (row 11), reference (secondary):** [Stats Crew venue page](https://www.statscrew.com/venues/v-301). Postseason home games not checked.

| Season | Total | Average (as published) |
|---|---|---|
| 2023 (Bowie Baysox) | 234,527 | 3,500 |
| 2024 (Bowie Baysox) | 234,807 | 3,505 |
| 2025 (Chesapeake Baysox) | 202,741 | 3,218 |
| 2026 | blank on the page | blank |

**College teams: the ESPN schedule feed carries per-game crowds.** Sample reads (feed responses were cut off by the fetch tool, so these are **examples, not season totals**):

| Team | Date | Opponent | Site (row) | neutralSite | Attendance | Source |
|---|---|---|---|---|---|---|
| Maryland football | 30 Aug 2025 | Florida Atlantic | SECU Stadium (2) | false | 35,067 | [ESPN feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/120/schedule?season=2025) |
| Maryland football | 5 Sep 2025 (UTC 23:30) | Northern Illinois | SECU Stadium (2) | false | 35,331 | same |
| Georgetown MBB | 3 Nov 2025 | Morgan State | Capital One Arena (6) | false | 4,208 | [ESPN feed](https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/46/schedule?season=2026) |
| Georgetown MBB | 12 Nov 2025 | Binghamton | Capital One Arena (6) | false | 3,391 | same |
| Georgetown MBB | 15 Nov 2025 | Clemson | Capital One Arena (6) | false | 8,562 | same |
| Georgetown MBB | 22 Nov 2025 | Wagner | Capital One Arena (6) | false | 4,184 | same |
| Navy football (edge) | 30 Aug 2025 | VMI | Navy–Marine Corps Memorial Stadium (4) | false | 30,014 | [ESPN feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/2426/schedule?season=2025) |
| Navy football (edge) | 6 Sep 2025 | UAB | Navy–Marine Corps Memorial Stadium (4) | false | 28,325 | same |
| Howard football | 30 Aug 2025 | Florida A&M | Hard Rock Stadium, Miami Gardens (outside city) | **true** | 22,455 | [ESPN feed](https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/47/schedule?season=2025) |

**Still gap:** full season totals and postseason home games for all college teams (paging through the full ESPN responses or NCAA attendance reports is needed), and all crowd history for George Mason, GW, Maryland basketball, the Go-Go, Defenders, DC Power FC and Loudoun United (not fetched; the shared web-search budget ran out mid-pass).

#### College full-season home crowds *(3rd pass)*

All figures are **reference (secondary)**: per-game attendance printed in Wikipedia team-season schedule tables (each linked). Totals and averages are this answer's arithmetic ("calc") on those figures. Only true home games are counted; neutral-site, exhibition and away games are excluded. For neutral-site games, see §4. The ESPN feed matches where sampled (e.g. Maryland FB 35,067 on 30 Aug 2025; Georgetown 4,208 on 3 Nov 2025). An NCAA official attendance report was not found in one search, so these have **not** been checked against NCAA figures.

**Maryland football (row 2).** No home postseason game in any season (2023 Music City Bowl was at neutral Nissan Stadium).

| Season | Home games | Total (calc) | Average (calc) | Range | Source |
|---|---|---|---|---|---|
| 2023 | 7 | 282,195 | 40,314 | 32,804–51,802 | [Wikipedia 2023](https://en.wikipedia.org/wiki/2023_Maryland_Terrapins_football_team) |
| 2024 | 7 | 252,277 | 36,040 | 30,214–43,013 | [Wikipedia 2024](https://en.wikipedia.org/wiki/2024_Maryland_Terrapins_football_team) |
| 2025 | 7 | 285,356 | 40,765 | 35,067–46,185 | [Wikipedia 2025](https://en.wikipedia.org/wiki/2025_Maryland_Terrapins_football_team) |

Note: three 2025 sell-outs printed at exactly **46,185**, the new official capacity (venue answer row 2), and 2023's top figure, 51,802, is the old capacity. These are announced figures, not capacity sources.

**Maryland men's basketball (row 9).** No home postseason games (Big Ten and NCAA tournament games were at neutral sites).

| Season | Home games | Total (calc) | Average (calc) | Range | Source |
|---|---|---|---|---|---|
| 2023–24 | 17 | 225,805 | 13,283 | 10,008–17,950 | [Wikipedia 2023–24](https://en.wikipedia.org/wiki/2023%E2%80%9324_Maryland_Terrapins_men%27s_basketball_team) |
| 2024–25 | 19 | 253,972 | 13,367 | 9,485–17,950 | [Wikipedia 2024–25](https://en.wikipedia.org/wiki/2024%E2%80%9325_Maryland_Terrapins_men%27s_basketball_team) |
| 2025–26 | 15 | 193,326 | 12,888 | 10,155–16,675 | [Wikipedia 2025–26](https://en.wikipedia.org/wiki/2025%E2%80%9326_Maryland_Terrapins_men%27s_basketball_team) (excludes 27 Oct 2025 exhibition, 11,410, and 3 Nov 2025 at CFG Bank Arena) |

**Georgetown men's basketball (row 6; some games at McDonough Gymnasium, no row).** No home postseason games (Big East tournament at Madison Square Garden).

| Season | Capital One Arena games | Total (calc) | Average (calc) | McDonough games (total) | Source |
|---|---|---|---|---|---|
| 2023–24 | 19 | 129,166 | 6,798 | 0 | [Wikipedia 2023–24](https://en.wikipedia.org/wiki/2023%E2%80%9324_Georgetown_Hoyas_men%27s_basketball_team) |
| 2024–25 | 17 | 104,044 | 6,120 | 2 (3,485) | [Wikipedia 2024–25](https://en.wikipedia.org/wiki/2024%E2%80%9325_Georgetown_Hoyas_men%27s_basketball_team) |
| 2025–26 | 15 | 96,569 | 6,438 | 2 (3,085) | [Wikipedia 2025–26](https://en.wikipedia.org/wiki/2025%E2%80%9326_Georgetown_Hoyas_men%27s_basketball_team) |

**GW men's basketball (row 15).** No home postseason games (2025–26 NIT games were away; A-10 tournaments neutral).

| Season | Home games | Total (calc) | Average (calc) | Range | Source |
|---|---|---|---|---|---|
| 2023–24 | 18 | 29,312 | 1,628 | 1,009–2,585 | [Wikipedia 2023–24](https://en.wikipedia.org/wiki/2023%E2%80%9324_George_Washington_Revolutionaries_men%27s_basketball_team) |
| 2024–25 | 17 | 33,592 | 1,976 | 1,011–3,035 | [Wikipedia 2024–25](https://en.wikipedia.org/wiki/2024%E2%80%9325_George_Washington_Revolutionaries_men%27s_basketball_team) |
| 2025–26 | 16 | 36,345 | 2,272 | 1,703–3,703 | [Wikipedia 2025–26](https://en.wikipedia.org/wiki/2025%E2%80%9326_George_Washington_Revolutionaries_men%27s_basketball_team) (excludes 18 Oct 2025 exhibition vs Georgetown, 4,287) |

**George Mason men's basketball (row 10).**

| Season | Regular-season home games | Total (calc) | Average (calc) | Range | Home postseason (NIT) | Source |
|---|---|---|---|---|---|---|
| 2023–24 | 17 | 67,119 | 3,948 | 2,427–6,756 | none | [Wikipedia 2023–24](https://en.wikipedia.org/wiki/2023%E2%80%9324_George_Mason_Patriots_men%27s_basketball_team) |
| 2024–25 | 18 | 60,355 | 3,353 | 2,248–6,861 | 19 Mar 2025 vs Samford 2,021; 22 Mar 2025 vs Bradley 2,180 | [Wikipedia 2024–25](https://en.wikipedia.org/wiki/2024%E2%80%9325_George_Mason_Patriots_men%27s_basketball_team) |
| 2025–26 | 19 | 79,625 | 4,191 | 2,481–7,335 | 17 Mar 2026 vs Liberty 1,485 | [Wikipedia 2025–26](https://en.wikipedia.org/wiki/2025%E2%80%9326_George_Mason_Patriots_men%27s_basketball_team) |

**Howard football (row 12).** No home postseason games (2023 Celebration Bowl at neutral Mercedes-Benz Stadium, Atlanta). Many "home-branded" games are at neutral sites (§4).

| Season | Greene Stadium games | Total (calc) | Average (calc) | Range | Source |
|---|---|---|---|---|---|
| 2023 | 4 | 21,730 | 5,433 | 3,098–7,684 | [Wikipedia 2023](https://en.wikipedia.org/wiki/2023_Howard_Bison_football_team) |
| 2024 | 5 | 27,624 | 5,525 | 3,309–9,995 | [Wikipedia 2024](https://en.wikipedia.org/wiki/2024_Howard_Bison_football_team) |
| 2025 | 2 | 17,646 | 8,823 | 7,651–9,995 | [Wikipedia 2025](https://en.wikipedia.org/wiki/2025_Howard_Bison_football_team) |

**Navy football (row 4, edge).** No home postseason games (bowls and Army–Navy at neutral sites).

| Season | Home games | Total (calc) | Average (calc) | Range | Source |
|---|---|---|---|---|---|
| 2023 | 6 | 184,824 | 30,804 | 28,648–38,803 | [Wikipedia 2023](https://en.wikipedia.org/wiki/2023_Navy_Midshipmen_football_team) |
| 2024 | 5 | 162,928 | 32,586 | 28,763–38,914 | [Wikipedia 2024](https://en.wikipedia.org/wiki/2024_Navy_Midshipmen_football_team) |
| 2025 | 6 | 191,760 | 31,960 | 28,325–37,517 | [Wikipedia 2025](https://en.wikipedia.org/wiki/2025_Navy_Midshipmen_football_team) |

**Still gap after 3rd pass:** Maryland football 2026 and Howard/Navy 2026 (in progress, not read); women's programs; Go-Go, Defenders, DC Power FC and Loudoun United crowd history; cross-check against NCAA official attendance reports.

---

## 6. Capacities still open (item 7)

| Venue row ID | Room / setup | Figure | Source(s), side by side | Status |
|---|---|---|---|---|
| 14 | The Anthem — full general-admission standing | 6,000 | [Songkick listing: "Capacity: 6,000"](https://www.songkick.com/concerts/43221663-wave-to-earth-at-anthem) (listing site, secondary); upper end of ["2,500 to 6,000" in the 2017 operator release as reported by Parklife DC](https://parklifedc.com/2017/01/25/around-town-grand-opening-the-anthem-101217/) (secondary) | **Sourced, secondary only.** The official [FAQ](https://theanthemdc.com/faq) gives no numbers. Treat 6,000 as the GA maximum; no official figure. |
| 14 | The Anthem — smallest (2,500) configuration | 2,500 appears only as the low end of a range | [Parklife DC (range only)](https://parklifedc.com/2017/01/25/around-town-grand-opening-the-anthem-101217/) | **Gap** (range only, per brief). |
| 14 | The Anthem — any seated or reserved setup | none found | Official [FAQ](https://theanthemdc.com/faq) describes seating types but gives no counts | **Gap.** |
| 14 | The Anthem — intermediate stage positions | none found | — | **Gap.** *2nd pass: not reached (web search budget exhausted); still a gap for all Anthem setups except the secondary 6,000 GA figure.* |
| 14 | *(3rd pass)* The Anthem — **standing / general admission** | **6,000** | **Official:** [theanthemdc.com/rentals](https://theanthemdc.com/rentals/): "standing room for 6,000". Agrees with [Lighting&Sound America, Mar 2018](https://wsdg.com/wp-content/uploads/Anthem-LSA-March-2018.pdf) (trade; Rockwell Group: "a capacity of 6,000 for a general-admission show") | **Sourced (official).** Supersedes the secondary-only status above. |
| 14 | *(3rd pass)* The Anthem — **seated (concert/theatre)** | **2,500–3,200** (official range); 3,200 theatre | **Official:** [rentals page](https://theanthemdc.com/rentals/): "ability to seat 2,500 – 3,200". Destination DC listing: Theatre **3,200** ([washington.org](https://www.washington.org/index.php/find-dc-listings/anthem), tourism bureau) | The official page gives a range only. **3,200** is the maximum seated figure, with the official range and Destination DC agreeing on it. The low end (2,500) is not tied to a named layout, so a seated setup below 3,200 is a **gap**. |
| 14 | *(3rd pass)* The Anthem — **smallest ("cap") setup** | 2,500 | [Lighting&Sound America, Mar 2018](https://wsdg.com/wp-content/uploads/Anthem-LSA-March-2018.pdf), quoting the *Washington Post*: "can put the cap as low as 2,500" (trade, secondary) | Sourced, secondary only. The official page gives 2,500 only as the low end of the seated range. |
| 14 | *(3rd pass)* The Anthem — **seated dinner / banquet** | 1,200 | **Official:** [rentals page](https://theanthemdc.com/rentals/) ("a seated dinner for 1,200"); Destination DC Banquet 1,200 ([washington.org](https://www.washington.org/index.php/find-dc-listings/anthem)) | Sourced (official); sources agree. Not a concert setup. |
| 14 | *(3rd pass)* The Anthem — **cocktail / reception** | **conflict:** 3,000 vs 5,000 | **Official:** [rentals page](https://theanthemdc.com/rentals/) "a cocktail party for 3,000" vs Destination DC "Reception 5,000" ([washington.org](https://www.washington.org/index.php/find-dc-listings/anthem)) | Prefer the official 3,000; listed side by side. Not a concert setup. |
| 14 | *(3rd pass)* The Anthem — classroom | 1,800 | Destination DC ([washington.org](https://www.washington.org/index.php/find-dc-listings/anthem)) only | Secondary; not a concert setup. |
| 14 | *(3rd pass)* The Anthem — intermediate GA stage positions (between 2,500 and 6,000) | none found | The official page says the room can "remove 90% of the seating" but gives no figure for that layout ([rentals](https://theanthemdc.com/rentals/)); L&SA describes the stage moving forward without a figure | **Still a gap.** **Threshold read:** only the 6,000 standing setup crosses 5,000; every seated setup is below it. |
| 23 | Fillmore Silver Spring *(2nd pass, incidental)* | 2,000 | [Ticketmaster blog venue guide](https://blog.ticketmaster.com/venue-faq-the-fillmore-sliver-spring-md) (ticketer blog, secondary); venue answer's [GGWash "about 2,000"](https://ggwash.org/view/73841/how-to-get-to-the-regions-concert-venues) | Two secondary sources agree; no official figure. |
| 17 | CareFirst Arena (Mystics) — the venue answer cites Vivid Seats only for **game listings**, not for any capacity | 4,200 | [Stadium Journey: "Capacity: 4,200"](https://www.stadiumjourney.com/stadiums/carefirst-arena-capital-city-go-go) (reference); [Wikipedia](https://en.wikipedia.org/wiki/CareFirst_Arena) 4,200 nominal / 4,111 basketball (venue answer); Mystics sell-out crowds announced at 4,200 ([ESPN feed](https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams/16/schedule?season=2026&seasontype=3)) | No capacity in the venue answer came from a resale page. The 4,200 figure has non-resale sources. Basketball setup **conflict**: 4,200 (Stadium Journey, announced sell-outs) vs 4,111 (Wikipedia). Below 5,000 either way. |
| 6 | Mystics at Capital One Arena, 24 Sep 2026 (the venue answer's Vivid Seats listing) | — (a listing, not a capacity) | Now corroborated as a scheduled home game at Capital One Arena by [Wikipedia: 2026 season](https://en.wikipedia.org/wiki/2026_Washington_Mystics_season) | Listing confirmed by a non-resale source; crowd not found. |
| 15 | Charles E. Smith Center (near 5,000) | up to 5,000 | [GWU official: "can accommodate up to 5,000 people"](https://venues.gwu.edu/node/296) (re-read today) | Sourced (official). Counts at 5,000 on this figure alone. |
| 19 | Echostage (near 5,000) | ~3,000 vs ~6,000 (venue answer) | [echostage.com](https://www.echostage.com/) gives no capacity | **Still a gap** (conflict unresolved). |
| 19 | *(3rd pass)* Echostage | **3,000** | [DJ Mag Top 100 Clubs 2026 entry: "Capacity: 3,000"](https://djmag.com/top100clubs/2026/6/echostage) (trade, published 25 Mar 2026), alongside GGWash ~3,000 (venue answer) vs Parklife DC ~6,000 (2017, venue answer) | Two sources, including a 2026 trade source, give 3,000; only the 2017 blog says 6,000. **Below 5,000 on the best available figure**, but no official venue figure exists, so it is still labelled secondary. |
| 16 | Segra Field (near 5,000) | 5,000 (reported, venue answer) | — | Not re-checked (search unavailable). |
| 16 | *(3rd pass)* Segra Field | **5,034** | **Official (team):** [Loudoun United partnership deck 2025](https://loudoununitedfc.com/wp-content/uploads/sites/21/2025/01/Loudoun-United-Overview-Deck-2025-1.pdf): "5,034 Capacity", with 168 premium seats and 8 suites; vs Wikipedia 5,000 (venue answer) | **Sourced (official), and above 5,000** on the team figure. The same deck gives average crowds of 1,600 (2022), 2,700 / 2,690 (2023, inconsistent within the deck) and 2,929 (2024) per match. |
| 9 | *(3rd pass, incidental)* Xfinity Center — basketball | **conflict:** 17,300 vs 17,950 | **Official:** [UMD Xfinity Center page](https://umterps.com/facilities/?id=8) gives 17,300 for basketball; the venue answer cites [Stadium Journey](https://stadiumjourney.com/stadiums/xfinity-center-s721) 17,950; three 2024–25 Maryland games were announced at exactly 17,950 ([Wikipedia](https://en.wikipedia.org/wiki/2024%E2%80%9325_Maryland_Terrapins_men%27s_basketball_team)) | Listed side by side. Above 5,000 either way. |

---

## Biggest remaining gaps (updated after 2nd pass, 14 Oct 2026)

*Closed in the 2nd pass:* college/minor-league feed IDs (12 teams), official colors for the Commanders and five universities, 6 more Ticketmaster IDs, the D.C. United 7 Mar 2026 site (M&T Bank Stadium, Baltimore), Spirit 2023–2026 crowds, Baysox 2023–2025 crowds.

1. **Ticketmaster IDs** still missing for SECU (2), Echostage (19, AXS 125391 found), CareFirst Arena (17, AXS 129150 found), Strathmore (24, own system), and unchecked rows 4, 9, 9a, 11, 12, 15, 16; **Fillmore (23)** has two conflicting IDs (172548 vs 336573).
2. **Official colors** for the pro teams other than the Commanders (Nationals, Capitals, Wizards, Mystics, D.C. United, Spirit, Go-Go, Defenders, Loudoun United) and any colors for DC Power FC, Baysox, Old Glory DC, Washington Freedom; Navy official colors.
3. **Feeds:** ESPN API league slug for DC Power FC; any free feed for Old Glory DC.
4. **College crowds:** full-season totals and postseason home games (ESPN feed needs paging); Go-Go, Defenders, DC Power FC, Loudoun United crowd history.
5. **Local media name for the market** and an official metro boundary check (OMB delineation). Not reached: web search budget ran out.
6. **The Anthem** per-setup capacities from an official source. Not reached: same reason.

### Updated after 3rd pass (14 Oct 2026)

*Closed in the 3rd pass:*
- **Ticketmaster IDs:** 11 more, plus the Fillmore conflict resolved to 172548. 24 of 28 rows now have an ID.
- **The Anthem:** official per-setup figures (6,000 standing; 2,500–3,200 seated; 1,200 dinner; 3,000 reception).
- **Market name:** "the DMV".
- **College crowds:** full-season home crowds for 2023 to 2025–26 (Maryland FB/MBB, Georgetown, GW, George Mason, Howard, Navy).
- **New neutral-site and off-row games:** Howard–Hampton at Audi Field; Georgetown at McDonough Gymnasium; Maryland at Ford Field and CFG Bank Arena; the 2025 A-10 tournament at Capital One Arena; Army–Navy 2024 at Northwest Stadium.
- **DC Power FC:** ESPN API path `usa.w.usl.1` confirmed.
- **Capacities:** Segra Field 5,034 (official, team); Echostage 3,000 (2026 trade source).

1. **Ticketmaster:**
   - Still no venue ID for 9a (Xfinity Pavilion), 16 (Segra Field: Account Manager only), and 21/27 (Kennedy Center Concert Hall and Eisenhower Theater; only building venue 172079 and Opera House 172082 exist).
   - Rows 9, 11, 12, 13, 19 and 22 rest on Ticketmaster search-result URLs and titles (page fetch failed). Check them once with the Discovery API.
2. **Official colors:**
   - Still none for the Nationals, Capitals, Wizards, Mystics, D.C. United, Spirit, Go-Go, Defenders, Loudoun United, Navy, DC Power FC or Old Glory DC (all secondary only).
   - No colors at all for the Baysox or Washington Freedom.
3. **Feeds:** none found for Old Glory DC.
4. **Crowds:**
   - College 2026 seasons in progress; women's programs.
   - Go-Go, Defenders, DC Power FC and Loudoun United history. Loudoun averages are partly covered by the team deck in §6.
   - College figures not cross-checked against NCAA official reports.
5. **Metro boundary:** the OMB delineation file itself was not read. Only Wikipedia's secondary summary is used (Baltimore is outside the Washington MSA and inside the combined area).
6. **Anthem:** intermediate GA stage positions, and a seated setup below 3,200 tied to a named layout.

*Public data only. No app code, personal ratings or cost commitments. No access controls were bypassed; blocked and rate-limited pages are listed under "Scope and limits".*
