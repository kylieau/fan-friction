# Capturing the events the feeds miss: answer

Saved by Claude Code on Oct 21, 2026 (evening), as the research agent returned it (answer to `event-capture-alternatives-prompt.md`). One claim re-checked by hand the same evening: Cal Baptist's public calendar feed (`cbulancers.com/calendar.ashx/calendar.ics`, 267 entries, `text/calendar`) carries the Oct 21 game at Pauley Pavilion at 02:00Z Oct 22 (7 pm Pacific), and USC's carries its three 2026 exhibitions. Nothing here is a decision; Kylie decides what, if anything, is built from it.


Method: every claim below was checked against a live page or endpoint tonight with plain fetches (curl with a browser user agent, the WebFetch tool) and, where a plain fetch failed, one load in the headless Playwright browser. Nothing was signed up for, logged into, bought or paid for. Where a page returned 403 or a bot wall in every tool, that is stated and was not worked around. Labels: **official** = the operator or seller says it on its own page or feed; **reported** = a third party (press, a search-engine snippet, a catalog) says it; **unverified** = could not be checked.

The two test events:
- (1) UCLA men's basketball vs California Baptist, exhibition, Pauley Pavilion, Wed Oct 21, 2026, 7:00 pm, sold at ucla.evenue.net (Paciolan).
- (2) Chappell Roan, "The Super Graphic Spectacular", Shrine Auditorium, Oct 21–22, 2026, sold on AXS (axs.com/series/34064).

## Headline findings

1. **uclabruins.com is not a Sidearm site.** Its footer says "Powered by WMT Digital" and links wmt.digital/terms (official). WMT pages embed schema.org JSON-LD for every scheduled game, and that block carries the Cal Baptist exhibition with date, 7:00 pm local time and time zone (official). There is no ICS, RSS or JSON endpoint on a WMT site (every guessed URL 404s; no Subscribe link on the page).
2. **Sidearm (Learfield) sites do publish an ICS feed** at `/calendar.ashx/calendar.ics` (all sports) and `?sport_id=N` (one sport; the id differs per school). Verified tonight on six LA-metro schools. **Cal Baptist's own Sidearm feed carries the exhibition as its away game**: `SUMMARY: California Baptist University Men's Basketball at UCLA - Exhibition`, `LOCATION: Los Angeles, CA, Pauley Pavilion`, start 2026-10-22T02:00Z (= Oct 21, 7 pm Pacific) (official). So event (1) was capturable tonight from the opponent's feed even though the home side is on WMT.
3. **ESPN and NCAA.com carry no exhibitions** (official absence, verified on last year's exhibition dates and on this week's). ESPN's team-schedule JSON also has no 2026-27 games for any team yet, although its scoreboard JSON already has the Nov 2–3 openers (Arizona at UCLA on 2026-11-03T03:00Z).
4. **Paciolan's evenue event page is public and carries JSON-LD** for the exhibition (official), but there is no public listing or index page to discover events from, and Paciolan's terms say "Use of data mining, robots and similar data gathering and extraction tools is expressly prohibited."
5. **JamBase is the one free API that carries both Chappell Roan nights with the AXS ticket link** (official: its public show pages; its sources page names AXS, DICE, See Tickets, Eventbrite, eTix, TicketWeb). Free Developer plan: 1,000 calls/month, non-commercial, attribution required. Music only, no sports. Overage is billed at $0.05/call 🚩.
6. **SeatGeek, Bandsintown, Songkick public pages** list some or all of the two events, but seatgeek.com is unreadable tonight (403 to curl, WebFetch and the browser), Bandsintown's API is for artists only by its terms, and Songkick's API is paid-license only 🚩.
7. **AEG venue sites (Shrine, Goldenvoice) are walled**: /events returns 403 in every tool, including the headless browser. The "public events JSON" an earlier note mentioned could not be reproduced tonight (goldenvoice.com/api/events and /events.json return the HTML shell).

## A. College and school sports sold through a school's own box office

### A1. School athletics sites: Sidearm (Learfield) and WMT Digital

**Which provider runs which site (official, from each site's footer tonight):**
- WMT Digital: uclabruins.com, nusports.com (Northwestern). Reported (WMT press releases, not re-verified): Notre Dame, Georgia Tech, Clemson, Florida State, Arkansas. Ohio State was reported as WMT but ohiostatebuckeyes.com had no WMT footer and no JSON-LD tonight, so that list is partly stale. WMT describes itself as boutique, 21 staff (reported, SBJ 2018).
- Sidearm: cbulancers.com (Cal Baptist), usctrojans.com, lmulions.com, longbeachstate.com, pepperdinewaves.com, gomatadors.com (CSUN), and bigten.org, theacc.com, bigwest.org (conference sites). Scale, reported (a school's June 2024 release): 357 NCAA D-I sites plus 350+ D-III; 57 of 65 Power-5 sites in 2020 (SBJ).

**What each carries for event (1):**
- uclabruins.com/sports/mens-basketball/schedule (WMT): HTML text "California Baptist (Exhibition) ... Los Angeles, CA / Pauley Pavilion presented by Wescom Financial ... 7:00 PM PDT". One `application/ld+json` block with 41 schema.org events, including:
  `"name": "UCLA vs. California Baptist (Exhibition)", "startDate": "2026-10-22T02:00:00.000000Z", "eventSchedule": {"startDate": "2026-10-21", "startTime": "19:00:00", "scheduleTimezone": "America/Los_Angeles"}, "location": {"name": "Los Angeles, CA", "address": {}}` (official). The venue name is only in the HTML text, not in the JSON-LD. Northwestern's WMT page has the same structure (36 events, two exhibitions, with city in `location.name`).
- cbulancers.com (Sidearm) all-sports ICS: the exhibition entry quoted in headline 2 (official), with DTSTAMP tonight (fresh). The sport-specific feed is `?sport_id=4` at Cal Baptist; `?sport_id=5` is men's golf at USC, so ids are per school and the all-sports feed is the safe URL.
- usctrojans.com all-sports ICS: 266 entries including USC's three 2026 exhibitions, each with venue in LOCATION (official).

**Access on Sidearm sites (official, tested):**
- `GET https://<school>/calendar.ashx/calendar.ics` → `text/calendar`, 90–125 KB, no key, no login. All six LA schools returned 200.
- `GET .../calendar.ashx/calendar.ics?sport_id=N` → one sport.
- `/rss.aspx?path=mbball` → XML at LMU (31 KB), empty at the other five. `/services/schedule_xml_2.aspx` → 500 everywhere (dead).
- No schema.org JSON-LD on Sidearm schedule pages (USC: 0 blocks). A "Print Schedule" view exists and robots.txt explicitly allows `/*print=true*`.
- robots.txt (usctrojans.com, lmulions.com): disallows only named bots (BLP_bbot, Slurp, Spinn3r); no rule against calendar.ashx.

**Access on WMT sites (official, tested):**
- The schedule page HTML (730 KB) with the JSON-LD block; `?print=true` also 200. No ICS: `/calendar.ashx/calendar.ics`, `/sports/mens-basketball/schedule.ics`, `/calendar.ics`, `/website-api/schedule`, `/website-api/events` all 404. `/website-api/sitemap` exists (XML sitemap of articles, hosted at api.uclabruins.com).
- robots.txt: `User-agent: * Allow: /`, and it explicitly allows GPTBot, ClaudeBot, PerplexityBot and others.

**Terms (quoted from the live pages):**
- Sidearm, https://sidearmsports.com/terms-of-service (last updated April 11, 2023; between SIDEARM Sports, "a subsidiary of LEARFIELD Sports", and the user): §2.1 the Services are "intended for your personal, noncommercial use"; §2.3 "Copying or storing of any Content for other than personal use is expressly prohibited"; §2.2 you may not "reproduce, distribute, or in any way exploit, any of the Content or the Services"; §1.1 lists "RSS, API, software and other downloads" as part of the Services. No clause names bots, scrapers or automated access. Reading: the ICS is an offered download; a personal, no-revenue app reading it nightly is inside "personal use" on its face, but §2.3 (storing content) is the clause to be aware of. Not legal advice; Kylie's call.
- WMT, https://wmt.digital/terms (official): §5 you may not "Use any data mining, robots or similar data gathering or extraction methods designed to scrape or extract data", "Bypass or ignore instructions contained in our robots.txt file", "Develop or use any applications that interact with our Site without our prior written consent", "Sell, resell or commercially use our Site". The terms define "Site" as the wmt.digital website and platforms; whether they govern a school site such as uclabruins.com is not stated, but the school site's footer links them. robots.txt on uclabruins.com allows everything.

**Cost:** $0. **Freshness:** live (Sidearm DTSTAMP was the current minute; the WMT page is server-rendered). **Plug-in:** one nightly fetch per school site in the metro, parse ICS (Sidearm) or JSON-LD (WMT); map school → provider → home venue; opponent feeds fill in exhibitions at WMT schools when the opponent is on Sidearm. City-neutral: the new-city checklist would list each metro's D-I schools and which provider runs each site.

### A1b. Conference calendars (Sidearm)
- bigten.org `calendar.ashx/calendar.ics?sport_id=5` = Big Ten men's basketball, 607 entries, 24 marked exhibition (USC, Indiana, Ohio State, Maryland...), but **UCLA's 52 entries start Nov 3 (Arizona)**: the Cal Baptist exhibition is not there (official). theacc.com: 567 entries, 0 exhibitions. bigwest.org: 230, 0. big12sports.com, pac-12.com, wccsports.com, themw.com returned empty feeds for sport_id=5 (ids differ; not pursued). bigeast.com and secsports.com redirect (not Sidearm). Conclusion: a conference feed lists what each school submits; it is not a reliable exhibition source.

### A2. NCAA.com (official absence)
- https://www.ncaa.com/schools/ucla/basketball-men/schedule → 404; /schools/ucla/basketball-men redirects to /schools/ucla with no schedule.
- Scoreboard pages for last year's exhibition dates (2025-10-21, 2025-10-24) → 404; 2025-11-03 (opening night) → 200 with no "exhibition" text. data.ncaa.com/casablanca scoreboard JSON → 404 (NoSuchKey) for every date tried, including regular-season dates; that endpoint appears gone.
- Verdict: NCAA.com does not list exhibitions and has no usable schedule JSON today.

### A3. ESPN (official absence), Big Ten+, Paciolan/evenue
- ESPN scoreboard JSON: 2025-10-21 and 2025-10-24 → 0 events; 2025-11-03 → 169. 2026-11-02 → 181 games including "Arizona Wildcats at UCLA Bruins" at 2026-11-03T03:00Z. Team schedule JSON for UCLA (team 26) with `season=2027` → 0 events (Duke also 0), so per-team 2026-27 schedules are not yet published on that endpoint; the scoreboard by date has them. No exhibition anywhere.
- Big Ten+: the UCLA schedule links the exhibition to bigtenplus.com/en-int/page/home (the streaming home page), nothing structured. Not pursued further.
- Paciolan / ucla.evenue.net (official):
  - Event page https://ucla.evenue.net/event/MBB26/201 (found by web search; the site itself has no index): 200, title "Men's Basketball vs Cal Baptist (Exhibition) | UCLA", og:description "Get your tickets to watch the Bruins take on Cal Baptist on Wednesday, October 21 in Pauley Pavilion presented by Wescom", and JSON-LD: `"@type":"Event","name":"UCLA Men's Basketball vs Cal Baptist (Exhibition)","startDate":"Wed Oct 21 2026 19:00:00 GMT+0000 (Coordinated Universal Time)","location":{"@type":"Place","name":"Pauley Pavilion presented by Wescom Financial | Los Angeles, CA"}`. Note the startDate is local time mislabelled as UTC.
  - No listing page: /list/MB, /list/MBB26, /list, /events, /event/MBB26 → 404; the legacy cgi-bin group list → 403. The root page is a Next.js shell with no event names in its HTML. The page references `https://api.seatgeek.com/events/paciolan/` (SeatGeek is Paciolan's official resale partner since July 2023; 90 programs by Aug 2023: reported, Learfield/Business Wire).
  - robots.txt: `User-agent: * / Disallow:` (allows all).
  - Terms: the footer links https://www.ucla.edu/terms-of-use/ (UCLA's), and Paciolan's own https://www.paciolan.com/terms-of-use says: "Use of data mining, robots and similar data gathering and extraction tools is expressly prohibited." That clause is on paciolan.com; whether it binds a school's evenue storefront is not stated.
  - Verdict: the seller's page is public and structured, but without an index it can only confirm an event you already know the id of. Not a discovery source.

### A4. Other structured sources for college exhibitions
- schema.org JSON-LD: present on WMT school pages and Paciolan event pages (above); absent on Sidearm pages. Nothing else found. The resale sites (Vivid Seats, StubHub, SeatGeek) list the exhibition (reported via search snippets; StubHub's snippet even shows a wrong 1:00 pm time) but are resale, bot-walled, and not primary.

## B. Concerts sold on AXS, DICE or a venue's own site

### B1. SeatGeek
- seatgeek.com: 403 to curl, to WebFetch, and in the headless browser ("HTTP status: 403") for the Chappell Roan page. Not fetchable normally; not worked around.
- API without a key: `api.seatgeek.com/2/events?...` → `{"status":403,"message":"Client is required - visit \"https://seatgeek.com/account/develop\""}` (official). developer.seatgeek.com renders only "Loading" in the browser. The API terms pages (seatgeek.com/api-terms, seatgeek.ca/api-terms) → 403 in every tool; a search snippet says the API/SDK Terms were "last updated March 17, 2025" and bind anyone who accesses the API (reported). Attribution and caching rules: **unverified** tonight.
- Does it carry the two events? Reported, from search-engine snippets of seatgeek.com pages (not the live site): "UCLA vs California Baptist, exhibition, Wed Oct 21 2026 7:00pm, Pauley Pavilion", tickets from about $9–14 (a resale listing). Chappell Roan at the Shrine: not found; SeatGeek's Shrine venue page snippet shows only a Nov 21 NieR concert and its Chappell Roan page is labelled "2023-2024". So SeatGeek would likely have caught (1) (as resale inventory) and not (2).
- Cost: free client id (pending). Freshness: live. Plug-in: already built in the app.

### B2. Bandsintown
- Public pages load in the browser (curl gets 403). Event page https://www.bandsintown.com/e/108751513-chappell-roan-at-shrine-expo-hall: "Chappell Roan ... Thu, Oct 22, 2026, 7:00 PM, Los Angeles, CA" with a "Get tickets" button (target not read). Venue page /v/10008332: "OCT 21 WED Tinashe 8:00 PM" and "OCT 22 THU MUNA 8:00 PM" (the support acts' entries for the same two nights). Both nights are on Bandsintown (official to Bandsintown; times disagree with AXS's 8:00 PM on the event page vs 7:00 on the artist page).
- API (official docs, help.artists.bandsintown.com/en/articles/9186477): `https://rest.bandsintown.com/artists/{artist_name}/events/?app_id=...`, artist-by-name only (no venue or city query). app_id: "API access is available only to artists and to teams authorized to act on an artist's behalf"; "Each API Key is linked to a single artist unless authorized otherwise by Bandsintown"; "The data is not meant to be used in any other circumstances unless specifically approved by Bandsintown." Cost: not stated. Rate limits: not stated.
- Data Applications Terms, https://corp.bandsintown.com/data-applications-terms (dated February 25, 2019): "meant to be used solely by artists, or people working in connection with or on behalf of artists"; §3(l) "Unless you receive Bandsintown's written approval, commercial uses are not permitted"; §3(d) "You shall not use any automated means (e.g., scraping, robots, etc.) other than the Bandsintown Data Applications"; session caching only, with notice to Bandsintown.
- Verdict: usable only with Bandsintown's written approval, which the owner has decided not to seek. Not a v1 source.

### B3. JamBase, Songkick, Setlist.fm, Eventbrite, Tixr/DICE/See Tickets
**JamBase Data (official, data.jambase.com):**
- Public show pages exist for both nights: jambase.com/show/chappell-roan-shrine-auditorium-expo-hall-20261021 ("Wednesday, October 21, 2026, 7:00 pm, Shrine Auditorium & Expo Hall, 665 W Jefferson Blvd"; ticket link AXS as primary, StubHub and Viagogo as resale) and ...-20261022.
- Sources page (data.jambase.com/compare/ticketmaster): "JamBase Data combines Ticketmaster with 60+ other ticketing and venue sources", "Other partners include AXS, DICE, See Tickets, Eventbrite, eTix, TicketWeb", plus "venue-direct feeds". 2.8M+ shows, 91K+ venues. Music only; no sports statement.
- API: base `https://api.data.jambase.com/v3`, `Authorization: Bearer jbd_...`; `GET /v3/events` filtered by `geoMetroId`/`geoCityId`, date range, venue, artist; `perPage` max 100; `GET /v3/quota` is free.
- Pricing (data.jambase.com/pricing): Developer $0/mo, 1,000 calls/mo, 3,600/hr, "Non-commercial use", future events 6 months ahead, "Date, time, venue & ticket links", attribution required; overage "$0.05/call over monthly quota, billed monthly" and "Developer and paid plans keep working and bill each extra call" 🚩 (so a payment method is presumably required at some point; unverified whether at signup). Startup $500–600/mo, Pro $1,500–1,800/mo 🚩. Trial: 14 days, 1,000 calls, 10/min, "No commercial use permitted", key deactivated at the end.
- Developer terms (data.jambase.com/legal/developer-terms, v1.3.1, effective October 18, 2026): permits "hobbyist sites with no revenue model", personal projects and prototypes; prohibits "Production deployments serving end users in a commercial product or service", reselling, and "competing data products or services"; "You must provide attribution to JamBase when displaying data obtained from the API"; a "synced local copy" is allowed while the account is active; delete "all cached or stored API data within 30 days" after termination. Attribution guide (agents.md): a visible credit linked to jambase.com and ticket links "exactly as the API returns them".
- Fit: a personal, no-revenue log is a hobbyist site on the face of §3; the tester-facing build is a gray spot Kylie should read herself. One nightly LA pull by metro and date range is a handful of calls (pages of 100), well inside 1,000/month even for several metros.

**Songkick (official):** developer page: "We are currently not approving API requests for student projects, educational purposes or hobbyist purposes"; access means "sign our partnership agreement and pay the standard license fee" 🚩 (fee not stated). API terms: non-commercial, link plus "Concerts by Songkick" logo, cache at most 24 hours. Site terms (songkick.com/info/terms, "Last Updated: July 9, 2026") §3.3.6: do not "Use any robots, botnets, scrapers or spiders, site search/retrieval application or other manual or automatic device to retrieve, index, scrape, data mine ... without our express prior written consent". Public venue page lists both Chappell Roan nights (Oct 21 with Amanda Lepore; Oct 22 with Caroline Polachek/MUNA). Not usable.

**Setlist.fm (official):** past setlists only; API free "only for non-commercial projects", key after free registration. Not relevant to upcoming nights.

**Eventbrite (reported, consistent across sources):** the public `GET /v3/events/search/` was removed in February 2020; the API now returns your own organization's events, a venue's events, or an event by id. Not a discovery source.

**Tixr:** terms page 403 in every tool (not readable). **See Tickets:** seetickets.us/terms returns a bot wall ("Our system uses automated checks ... we couldn't verify that the activity on this page is human"). **DICE:** dice.fm terms 403 tonight; the Oct 19 research already recorded its prohibition on automated reading.

### B4. Venue sites (AEG: Shrine, Goldenvoice)
- shrineauditorium.com: root 200 (230 KB) with 0 JSON-LD blocks and no "Chappell" text; its calendar is fed from AXS (link to axs.com/venues/123568/...). /events → 403 to curl, WebFetch and the browser.
- goldenvoice.com: root 200; /events → 403 in all three tools; /api/events and /events.json return the site's HTML shell (154 KB, `text/html`), not JSON. The earlier note that a public events JSON loads could not be reproduced tonight.
- Terms: both footers link https://www.aegpresents.com/terms/, which returned a 131-byte empty shell to a plain fetch tonight (unreadable). AXS's own page for the series loaded in the browser and lists "Wed Oct 21, 2026 - 8:00 PM" and "Thu Oct 22, 2026 - 8:00 PM, The Super Graphic Spectacular, Shrine Auditorium" (official), but AXS's terms forbid automated reading (Oct 19 research), so this is confirmation only, not a feed.
- Verdict: not feasible as a nightly source.

### B5. schema.org JSON-LD: is reading it legally different from scraping?
Practically yes (stable, typed fields, no HTML parsing); legally no difference is written anywhere I read tonight. The terms that cover these pages speak of "robots", "data mining" and "automatic means" without carving out structured data published for search engines (WMT §5, Paciolan, Songkick §3.3.6). The only pages that give a plain signal are robots.txt files, which allow everything on uclabruins.com and ucla.evenue.net. Not legal advice; Kylie decides.

### B6. Google
- Knowledge Graph Search API (developers.google.com/knowledge-graph): an entity lookup returning schema.org types (Event is among the listed types) by name; it has no date, venue or city query and is not a local-events feed. A warning on the page steers enterprise users to the Enterprise Knowledge Graph. No official Google Events API exists.
- The events panel in Google Search is only reachable through third-party SERP scrapers: SerpApi (reported, via a reseller: $0.05 per search plus $0.005 per event) and DataForSEO ($0.0006–0.002 per 10-result page) 🚩, both of which scrape Google themselves. Not for v1.

## C. General aggregators alive in October 2026
- **PredictHQ** 🚩: "Free Trial - No Credit Card Needed" on the pricing page (official); 14-day trial; after it, a free plan with (reported, from PredictHQ support pages that have since moved) no API access and a 2–3 location cap; paid prices not published. Covers sports and concerts. Not free in the way the app needs.
- **AllEvents** (allevents.in/pages/events-api, official): "Request access" / "Request Trial Access" form, "Flexible plans for evaluation to enterprise", no self-serve key, no prices 🚩. Claims "200M+ events". Coverage of (1) and (2): unverified.
- **Eventful**: dead. eventful.com and api.eventful.com did not resolve tonight; Wikipedia (reported) says the site was replaced by a radio.com link in February 2021.
- **JamBase** is the only self-serve free tier found (above). **Songkick** alternatives with open free APIs: none found.

## Does each source carry the two events today?

| Source | (1) UCLA vs Cal Baptist, Oct 21 | (2) Chappell Roan, Shrine, Oct 21–22 | Readable as a feed? |
|---|---|---|---|
| uclabruins.com (WMT) JSON-LD | Yes, official | n/a | Page read; terms gray |
| cbulancers.com (Sidearm) ICS | Yes, official (as away game, with venue) | n/a | Yes, ICS, no key |
| Big Ten conference ICS | No (UCLA entries start Nov 3) | n/a | Yes |
| ucla.evenue.net event page | Yes, official (JSON-LD) | n/a | No index; terms forbid robots |
| ESPN JSON | No (official absence) | n/a | Yes (already used) |
| NCAA.com | No (official absence) | n/a | No |
| SeatGeek | Yes, reported (resale, search snippet) | No (reported) | API with pending free id; site 403 |
| JamBase | No (music only) | Yes, both nights, AXS link (official) | Free Developer plan |
| Bandsintown | No | Yes, both nights (official) | API artists-only by terms |
| Songkick | No | Yes, both nights (official) | Paid license 🚩; no scraping |
| Shrine / Goldenvoice sites | No | Walled (403) | No |
| AXS | No | Yes (official) | Forbidden (Oct 19) |

## Ranked recommendation (at most three)

1. **School sites' own structured output: Sidearm ICS plus WMT JSON-LD.** $0, no key, live, city-neutral (the new-city checklist adds "which provider runs each D-I school's site"). Sidearm's all-sports ICS is a download the site offers and includes exhibitions with venue; WMT's JSON-LD is the schedule the site publishes for search engines. Catches (1) twice (home side's page and the opponent's feed). Read the Sidearm §2.3 "storing ... for other than personal use" line and WMT §5 before building; a nightly read of ~10 school pages per metro is light.
2. **JamBase Developer plan.** The only free, self-serve API that ingests AXS, DICE, See Tickets, Eventbrite and eTix. Catches (2) with the AXS link. Music only. 1,000 calls/month, non-commercial, visible "JamBase" credit with the ticket link as returned. 🚩 Overage is billed at $0.05/call, so the capture must stop at the quota, and whether a card is required at signup is unverified: ask before signing up.
3. **SeatGeek API** (already built, waiting on the free client id). Likely catches (1) as a resale listing (reported) but not (2). Its API terms could not be read tonight (403); re-check attribution and caching rules once the id arrives.

**Single cheapest step that would have captured both:** none exists as one source. The cheapest pair is (a) Cal Baptist's Sidearm ICS or UCLA's WMT JSON-LD for (1) and (b) JamBase's free plan for (2). If only one is built first, build (1): it is free of any signup and the terms question is lighter.

**What no public source captures (hand-add from the team or artist page is the only way):**
- Exhibitions and other box-office-only games at a school whose site is neither Sidearm nor WMT, when the opponent is not on Sidearm either, and at schools that do not submit exhibitions to their conference feed (UCLA tonight).
- Any Paciolan/evenue event you do not already know the id of (no public index).
- Non-music events sold only on AXS, DICE, Tixr or See Tickets (comedy, podcasts, e-sports, wrestling, boxing at AXS arenas such as Crypto.com Arena): JamBase is music-only and SeatGeek carries them only when resale inventory exists.
- Anything at AEG-run venue sites (Shrine, Goldenvoice rooms) that is not on JamBase.
- Correct door and stage times where sellers disagree (AXS 8:00 PM vs JamBase/Bandsintown artist page 7:00 PM for the Shrine nights): record which kind the stored time is.

## Not done, on purpose
No signups (SeatGeek, JamBase, PredictHQ, AllEvents, Bandsintown, Setlist.fm), no emails to sellers, no bypass of the 403s on seatgeek.com, goldenvoice.com/events, shrineauditorium.com/events, tixr.com/terms, seetickets.us/terms, dice.fm, or the SeatGeek API terms pages. The Bandsintown "Get tickets" button was not clicked. Nothing in the repo was edited.
