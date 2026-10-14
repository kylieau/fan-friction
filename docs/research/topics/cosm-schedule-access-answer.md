# Answer: can Fan/Friction list Cosm's schedule, and how?

Status: answered (with gaps flagged). Researched Oct 14, 2026. Answers `cosm-schedule-access-brief` (same folder); follows `cosm-immersive-venues-answer.md`.

**Short version.** Cosm's Terms of Use forbid automated collection of site content without Cosm's prior written consent, so a nightly read of cosm.com is out unless Cosm says yes in writing. Cosm publishes no API, feed or partner program that I could find, and its events are not on Ticketmaster or SeatGeek as an official seller. Two things the earlier note didn't know: Cosm names **Viator and GetYourGuide as authorized resellers** (Viator has a free affiliate API), and Cosm events have been sold on **Fever**. The cleanest route to complete listings, live games included, is to ask Cosm for written consent or a feed.

**How this was researched.** The JavaScript-rendering browser did not respond (timed out), so I could not render cosm.com. Direct fetches of cosm.com returned only page metadata, as the brief found. Terms text and cosm.com listings below come from **search-engine copies** of those pages, plus Cosm's help center (help.cosm.com, which is plain HTML) and third-party sites. Every place this matters is flagged in the self-audit.

---

## 1. The terms

**Which page.** `https://www.cosm.com/terms-of-use` now points (canonical) to **`https://www.cosm.com/legal/terms-of-use`**. The indexed copy is headed "Website Terms of Use", **Last Modified: September 17, 2025**. It says Cosm aims to keep a "Last Modified" date current. The Terms also pull in a Privacy Policy, a Copyright Policy (`cosm.com/legal/copyright`) and Venue Policies (`cosm.com/legal/venue-policies`). I found no separate API, developer or content-licensing terms.

**The clauses that matter.** I can't paste long verbatim passages here, so below is one short exact quote plus a close paraphrase of each clause. Kylie should open the page and copy the exact wording into this file by hand (link in the self-audit).

The relevant list opens with a consent gate: the user must not do the listed things **without Cosm's prior written consent**. The items found in the indexed copy:

| Clause | What it says (paraphrased unless in quotes) |
|---|---|
| (a) | No accessing any part of the Site, Services or Cosm Content you aren't authorized to access, or where Cosm has revoked access. |
| (b) | No robots, spiders, scripts, services, software, or any manual or automatic device, tool or process "designed to data mine or scrape the Cosm Content, data or information" from the Site or Services; and no otherwise using, accessing or collecting Cosm Content, data or information **by automated means**. |
| (c) | No using Cosm Content to develop any software program, including training an ML or AI system. |
| (d) | Not captured in the indexed copy. Left blank; check the live page. |
| (e) | No caching or archiving Cosm Content, with an exception only for a public search engine's spiders building search indices. |
| Other | A separate section begins "Except as expressly authorized by Cosm in writing or in connection with your use of the intended functionality of the Services…", then a list I could not see in full. Another line says Cosm Content may be used only for purposes the Terms and the law permit. A ticketing clause lets Cosm cancel tickets bought with bots. |

**Verdict: forbidden** (without written consent). A nightly script that reads the public schedule pages, even for dates, titles and venues only, is "collecting … data or information from the Site … using automated means" under clause (b). The search-engine exception in (e) covers only caching/archiving by public search engines, not a listings service. robots.txt allowing crawlers does not change this, as the brief already noted.

Note that clause (b) also names **manual** processes "designed to data mine or scrape". Someone copying the full schedule into the app by hand every night is arguably covered too. Don't treat hand-copying as a safe workaround.

---

## 2. Official ways to get the schedule

### Public or partner API, calendar feed, affiliate program, press schedule
- **API / developer program:** none found.
- **iCal / RSS feed:** none found. Cosm's help article on finding events points only to the app and each venue's Events tab ([help article](https://help.cosm.com/en/articles/8850757-how-do-i-find-new-events), dated Mar 4, 2026).
- **Affiliate / partner program for listings:** none found from Cosm itself. Cosm does name **authorized resellers**: "GetYourGuide and Viator" ([Where do I buy tickets?](https://help.cosm.com/en/articles/8850745-where-do-i-buy-tickets), dated Aug 26, 2026). See below.
- **Press/media schedule:** none found. Cosm posts announcements at `cosm.com/news/...` (e.g. the WWE and Los Angeles on-sale posts), but no schedule feed for media.
- **Newsletter:** `cosm.com/newsletter` (human-readable only; not a feed).

### Which ticketing platform runs cosm.com checkout
**Blank: not verified.** Checking this needs the rendered checkout flow and its network requests, and the browser was unavailable. The public record only says tickets are sold on Cosm.com and in Cosm's "fully integrated" app, and that tickets live in a Cosm account (transfers, Cosm Credits). No third-party ticketing vendor is named in anything I read. I did not guess one.

### Do Cosm events appear in channels we read or plan to?

| Channel | Found? | Notes |
|---|---|---|
| Ticketmaster | No | No Cosm venue or event found, under Cosm or another seller name. |
| SeatGeek | No (official) | A SeatGeek venue page "COSM" exists, placed in New York, NY, with no events. It does not match any Cosm venue; treat as unrelated or a stub. |
| Google event listings | Not checked | Needs a rendered Google results page. See self-audit. |
| Bandsintown | No | Nothing found. |
| Songkick | No | Nothing found. |
| Eventbrite | No | Nothing found. |
| **Fever (feverup.com)** | **Yes, at least historically** | Cosm's help center has an article on finding Cosm tickets bought on Fever ([link](https://help.cosm.com/en/articles/11473496-where-can-i-find-my-tickets-for-a-cosm-event-after-purchase-on-feverup)). Fever pages exist for [Cosm Los Angeles](https://feverup.com/m/364552) and [Cosm Dallas](https://feverup.com/m/365292), built around The Matrix run in 2025; both showed no tickets available when indexed. Fever is **not** in Cosm's current authorized-reseller list (Aug 26, 2026). |
| **Viator** | **Yes** | Example: "Cosm LA: Harry Potter and the Sorcerer's Stone in Shared Reality", operated by Cosm Los Angeles, mobile ticket, reserved Dome seating ([Tripadvisor/Viator page](https://www.tripadvisor.com/AttractionProductReview-g32525-d34405700-Cosm_LA_Harry_Potter_and_the_Sorcerer_s_Stone_in_Shared_Reality-Inglewood_Californi.html)). Only film products seen; no live games. |
| **GetYourGuide** | Named by Cosm; no listing confirmed | No specific GetYourGuide Cosm page found in this pass. |
| Resale marketplaces (Vivid Seats, RateYourSeats, nightout.com) | Yes | Listed under the performer name "Shared Reality at Cosm", for all four venues. These are **secondary resale**, which our rules exclude, and Cosm warns buyers about resellers outside its approved channels. Not a source. |
| City listings sites (Do214 in Dallas; LittleGuide Detroit; Consequence Live) | Yes | Do214's Cosm page lists every Dallas showing with a "Buy" link to cosm.com. Useful as evidence (see section 3), but these are third parties, not official sources, and I did not check their terms. |

### Viator's API (the only official-adjacent API found)
Viator's Partner API has an affiliate tier: **free to sign up, Basic Access immediately with no prior approval**, giving product content and availability; Full and Full+Booking access need Viator's approval ([Viator partner resources](https://partnerresources.viator.com/travel-commerce/affiliate/)). Caveats: the program is built for merchandising Viator products and earning commission on referred bookings, so whether a listings-only use fits Viator's API terms needs checking; and Viator seems to carry Cosm's **film** products as single "experiences" with an availability calendar, not individual live games.

GetYourGuide also runs a partner program, but I did not verify its API terms in this pass (memory only; see self-audit).

### Structured data (schema.org `Event` JSON-LD) on Cosm's pages
**Blank: not verified.** The pages render client-side, my fetch returned only `<meta>` tags, and the browser was unavailable. The JSON-LD seen in search results came from **resale and listings sites** (Vivid Seats, nightout.com, Consequence Live), not from cosm.com, so I have not pasted it as Cosm's.

### Who to ask
No dedicated partnerships or press email was found. Published contacts:
- **support@cosm.com**, shown on the Cosm Los Angeles venue page.
- Venue group-sales inboxes (e.g. `dallas.groups@cosm.com`); not the right team, but a human route in.
- Cosm on LinkedIn (`linkedin.com/company/experiencecosm`) for finding a partnerships or marketing lead.

---

## 3. What a listing looks like

### URL patterns (from real URLs)

| Kind | Pattern | Example |
|---|---|---|
| City schedule | `https://www.cosm.com/{city}/events` | `/dallas/events`; filters like `?category=nfl` |
| One showing | `https://www.cosm.com/{city}/events/{slug}-{venue}-{YYYY-MM-DD}-{HHMM}` | `/dallas/events/ncaaf-texas-oklahoma-gsc-2026-10-10-1430` |
| Film series page | `https://www.cosm.com/{city}/series-events/{slug}-{venue}` | `/atlanta/series-events/it-in-shared-reality-atl` |

Venue codes seen: **`hwp`** Los Angeles (Hollywood Park), **`gsc`** Dallas (Grandscape), **`atl`** Atlanta, **`det`** Detroit. Older 2024–25 URLs used underscores (e.g. `nfl_divisional_commanders_lions_gsc_2025_01_18_1900`).

**Don't parse titles or times from the URL.** The slug is fixed when the showing is created and isn't updated:
- `mlb-nlcs-game-3-matchup-tbd-gsc-2026-10-14-1400` is sold as "MLB: NLCS: Brewers @ Dodgers (Game 3)" at **7:00 PM**.
- LA's "Fast Follow - NFL: Broncos @ Chargers" was shown at **1:00 PM** on Oct 11, but its URL ends `-2026-10-11-1600`.
- One Dallas NFL URL drops the venue code entirely (`nfl-matchup-tbd-2026-10-18-1200`).

### Rooms
A live game is usually sold in **several rooms at once** (Dome, Hall and GA price tiers on one event). Films are sold **Dome only**. So "room" is a property of the ticket, not the event; for the app, one listing per showing with rooms as a list.

### Dallas, Oct 14–20, 2026 (most complete; times Central)
Source: [Do214's Cosm page](https://do214.com/venues/cosm), fetched Oct 14, which links each row to its cosm.com page. Cross-checked against cosm.com/dallas snippets for Oct 14–15.

| Date | Start | Title as sold | Rooms | Type | App type |
|---|---|---|---|---|---|
| Wed Oct 14 | 10:00 AM | Harry Potter and the Sorcerer's Stone in Shared Reality | Dome | Film | Film |
| Wed Oct 14 | 2:00 PM | Champions League: Manchester City vs. PSG | Dome/Hall/GA | Live game | Live screening |
| Wed Oct 14 | 5:00 PM | IT in Shared Reality | Dome | Film | Film |
| Wed Oct 14 | 7:00 PM | MLB: NLCS: Brewers @ Dodgers (Game 3) | Dome/Hall/GA | Live game | Live screening |
| Wed Oct 14 | 8:30 PM | Harry Potter and the Sorcerer's Stone in Shared Reality | Dome | Film | Film |
| Thu Oct 15 | 7:00 PM | NFL: Seahawks @ Broncos | Dome/Hall/GA | Live game | Live screening |
| Fri Oct 16 | 9:30 AM, 12:45 PM, 1:00 PM, 4:00 PM | Harry Potter and the Sorcerer's Stone in Shared Reality (4 showings) | Dome | Film | Film |
| Fri Oct 16 | 8:00 PM | MLB: NLCS: Brewers @ Dodgers (Game 5, if nec.) | Dome/Hall/GA | Live game (conditional) | Live screening |
| Fri Oct 16 | 8:00 PM, 11:00 PM | IT in Shared Reality (2 showings) | Dome | Film | Film |
| Sat Oct 17 | 11:00 AM | NCAAF: #4 Ohio State @ #5 Indiana | Dome/Hall/GA | Live game | Live screening |
| Sat Oct 17 | 2:00 PM | NCAAF: Matchup TBD | Dome/Hall/GA | Live game | Live screening |
| Sat Oct 17 | 3:30 PM | Willy Wonka & the Chocolate Factory – Dessert Included | Dome | Film | Film |
| Sat Oct 17 | 6:30 PM | NCAAF: #2 Notre Dame @ #8 BYU | Dome/Hall/GA | Live game | Live screening |
| Sat Oct 17 | 11:00 PM | IT in Shared Reality | Dome | Film | Film |
| Sun Oct 18 | 8:30 AM | Harry Potter and the Sorcerer's Stone in Shared Reality | Dome | Film | Film |
| Sun Oct 18 | 12:00 PM | NFL: Bears @ Falcons | Dome/Hall/GA | Live game | Live screening |
| Sun Oct 18 | 3:00 PM | Fast Follow - NFL: Bills @ Raiders | Dome/Hall/GA | Live game | Live screening |
| Sun Oct 18 | 7:00 PM | NFL: Cowboys @ Packers | Dome/Hall/GA | Live game | Live screening |
| Mon Oct 19 | 11:30 AM, 3:00 PM | Harry Potter and the Sorcerer's Stone in Shared Reality (2 showings) | Dome | Film | Film |
| Tue Oct 20 | 10:00 AM | Harry Potter and the Sorcerer's Stone in Shared Reality | Dome | Film | Film |

Rooms for sports are inferred from the Dome/GA/Hall price tiers on cosm.com Dallas snippets; I did not see room tiers for each row.

### Los Angeles, Oct 14–22 (partial; times Pacific)
Source: search-engine copy of [cosm.com/los-angeles/events](https://www.cosm.com/los-angeles/events). Titles and times often appear separated in the snippet; I only paired them where unambiguous.

| Date | Start | Title as sold | Rooms | App type |
|---|---|---|---|---|
| Wed Oct 14 | 12:00 PM | Champions League: Manchester City vs. PSG | Dome/Hall/GA | Live screening |
| Wed Oct 14 | (blank) | MLB: NLCS: Brewers @ Dodgers (Game 3) | Dome/Hall/GA | Live screening |
| Sun Oct 18 | 1:00 PM | (title not in snippet) | Dome/Hall/GA | (blank) |
| Wed Oct 21 | 11:00 PM | IT in Shared Reality | Dome | Film |
| Thu Oct 22 | 1:00 PM | Harry Potter and the Sorcerer's Stone in Shared Reality | Dome/Hall/GA | Film |

Also running "Multiple Showtimes": Willy Wonka and the Chocolate Factory in Shared Reality, IT in Shared Reality.

### Atlanta, Oct 14–18 (partial; times Eastern)
Source: search-engine copy of [cosm.com/atlanta/events](https://cosm.com/atlanta/events) and one event page.

| Date | Start | Title as sold | App type |
|---|---|---|---|
| Wed Oct 14 | 9:00 AM | Harry Potter and the Sorcerer's Stone in Shared Reality | Film |
| Wed Oct 14 | (blank) | Champions League: Manchester City vs. PSG | Live screening |
| Wed Oct 14 | 8:00 PM | MLB: NLCS: Brewers @ Dodgers (Game 3) | Live screening |
| Thu Oct 15 | 9:00 AM | Harry Potter and the Sorcerer's Stone in Shared Reality | Film |
| Thu Oct 15 | (blank; a 4:00 PM time appears but can't be tied to one title) | IT in Shared Reality; a second Harry Potter showing | Film |
| Thu Oct 15 | 8:00 PM | NFL: Seahawks @ Broncos | Live screening |
| Fri Oct 16 | 9:30 AM, 1:00 PM | Harry Potter and the Sorcerer's Stone in Shared Reality | Film |
| Sun Oct 18 | 1:00 PM | NFL: Bears @ Falcons ([event page](https://www.cosm.com/atlanta/events/nfl-bears-falcons-atl-2026-10-18-1300)) | Live screening |

### Detroit (thin)
Source: search-engine copies of [cosm.com/detroit](https://www.cosm.com/detroit) and [cosm.com/detroit/events](https://www.cosm.com/detroit/events). Not enough for a reliable week.

| Date | Start | Title as sold | App type |
|---|---|---|---|
| Mon Oct 12 | 8:00 PM | NFL: Bills @ Rams | Live screening |
| Thu Oct 15 | (blank) | NFL: Seahawks @ Broncos | Live screening |
| Sun Oct 25 | (blank) | NFL: Matchup TBD | Live screening |

Running "Multiple Showtimes": The Matrix in Shared Reality, IT in Shared Reality.

### Telling live from recorded
Cosm's help center confirms sporting events are shown live, in real time ([Will events be live?](https://help.cosm.com/en/articles/8984837-will-events-be-live), Aug 26, 2026). Signals that separate the two in listings:

| Signal | Live screening | Film / recorded |
|---|---|---|
| Title | League prefix: `NFL:`, `MLB:`, `NCAAF:`, `Champions League:`, `UFC`, `Premier League:`; or `Fast Follow -` | Ends "in Shared Reality" (Harry Potter, IT, The Matrix, Willy Wonka) |
| Description | Names the broadcast ("on the NFL on FOX", "Thursday Night Football on Amazon Prime"); "[Time subject to change*]" | Run time stated (e.g. 2 h 45 min) |
| Rooms | Dome + Hall + GA tiers | Dome only |
| Page type | Individual `/events/` page | Also has a `/series-events/` page |

Edge cases: **"Fast Follow"** does **not** mean delayed or replayed. It's a live game scheduled right after another, so seating may start late if the first game overruns ([help article](https://help.cosm.com/en/articles/10134911-what-is-a-fast-follow-game)). Treat as Live screening. **Captured performances** such as Cirque du Soleil's "O" and NYC Ballet's "The Nutcracker" are recorded, so they map to **Film** even though they aren't movies. **"Matchup TBD"** rows are live games whose teams aren't set yet; titles change later while URLs don't.

---

## 4. Ticketed or gated?

**Yes for ticketed events: ticket scan plus security bag inspection.** ID checks at the door are **not confirmed**.

| Check | Finding | Source |
|---|---|---|
| Ticketed | Tickets are required for certain events; at other times walk-ins are allowed with limited access to areas. | [Do I need to purchase a ticket?](https://help.cosm.com/en/articles/8850741-do-i-need-to-purchase-a-ticket-to-visit-cosm) (Aug 26, 2026) |
| Ticket scan | Tickets are scanned at entry, with a no-re-entry policy for ticketed events. In Atlanta, the Security team scans tickets at the door. | [Re-entry article](https://help.cosm.com/en/articles/8850772-once-my-ticket-is-scanned-can-i-exit-the-venue-and-re-enter); [Where do guests enter Cosm ATL?](https://help.cosm.com/en/articles/15861847-where-do-guests-enter-cosm-atl) |
| Bag check | All bags are subject to security inspection; most bags are banned (small clutches and wallets under 5" x 9" x 1", and medical/parental bags under 14" x 14" x 6", allowed). Weapons and many other items prohibited. | [Bag article](https://help.cosm.com/en/articles/8850705-what-type-of-bag-or-purse-may-i-bring); [Prohibited items](https://help.cosm.com/en/articles/8850707-what-items-are-prohibited-at-cosm); [Venue Policies](https://www.cosm.com/legal/venue-policies) |
| ID | Some events are 21+ (stated in the event description); under-18s need an adult. Venue Policies cover alcohol and refusing service, but I found no statement that ID is checked at entry for every guest. | [Family article](https://help.cosm.com/en/articles/11879981-whats-the-best-way-to-optimize-my-time-at-cosm-with-a-family); Venue Policies |

This meets Kylie's consideration well: entry is by scanned ticket, gated by a dedicated security team doing bag inspection, which is well beyond a bar's door staff. Walk-in sessions are the exception and probably shouldn't be listed.

---

## 5. Recommendation (ranked)

| Rank | Route | Status | What it would take | Cost |
|---|---|---|---|---|
| 1 | **Ask Cosm for written consent or a feed** | Only route to complete listings including live games | Email support@cosm.com (and find a partnerships or marketing contact on LinkedIn). Ask for either (a) written consent to read the four `/{city}/events` pages once a night for date, time, title and venue only, or (b) a schedule feed. Describe the use: free listings that link back to cosm.com, no prices, images or resale. Clause (b) of the Terms is explicitly lifted by "prior written consent". | Free |
| 2 | **Viator affiliate API**, films only, in parallel | Available; partial | Sign up as a Viator affiliate (Basic Access immediate). Confirm Viator's API terms allow a listings app, then search for Cosm products per city. Expect film showtimes as availability, not live games. | Free (commission model) |
| 3 | Channels we already read (Ticketmaster, SeatGeek) | **Not available** | Cosm isn't sold there. Resale listings (Vivid Seats etc.) exist but break our official-sources rule. | — |
| 4 | Official API or feed from Cosm | **Not available** | None published. Revisit if Cosm answers route 1 with a feed. | — |
| 5 | Reading the public pages ourselves | **Forbidden** without written consent | Stop here unless route 1 succeeds. | — |

Nothing in any route is paid.

Until Cosm replies, the honest option is to list nothing from Cosm automatically.

---

## Self-audit

**Thin evidence or not from the live page**

| Claim | Why it's thin | Check by hand |
|---|---|---|
| Terms clauses (a), (b), (c), (e) and their wording | From a search engine's copy, not the rendered page; clause (d) missing; my wording is a paraphrase except the short quote | Open [cosm.com/legal/terms-of-use](https://www.cosm.com/legal/terms-of-use), search for "scrape", "automated", "prior written consent", "spiders"; paste verbatim text here |
| "Last Modified: September 17, 2025" | Same indexed copy | Same page, top of document |
| LA, Atlanta, Detroit listings | Search-engine snippets of JS pages; times and titles sometimes separated | [LA](https://www.cosm.com/los-angeles/events), [Atlanta](https://cosm.com/atlanta/events), [Detroit](https://www.cosm.com/detroit/events) |
| Dallas listings | Third-party copy (Do214), though each row links to cosm.com | [Dallas](https://www.cosm.com/dallas/events) |
| Rooms per Dallas sports row | Inferred from price tiers on cosm.com snippets, not seen row by row | Open any Dallas game page |
| Fever still sells Cosm | Fever pages showed no tickets; Fever isn't in the Aug 2026 reseller list | [Fever LA](https://feverup.com/m/364552) |
| Viator carries only films | One product seen | Search "Cosm" on viator.com |
| SeatGeek "COSM" stub is unrelated | Placed in New York, no events | [SeatGeek page](https://seatgeek.com/venues/cosm-1/tickets) |
| No Ticketmaster, Bandsintown, Songkick, Eventbrite presence | Absence in search results, not a direct check | Search each site for "Cosm" |
| Venue opening dates (Atlanta June 2026, Detroit Sept 2026) | Wikipedia, plus a DBusiness article for Detroit's Sept 10 opening | [Wikipedia](https://en.wikipedia.org/wiki/Cosm_(company)) |

**Not verified at all (left blank)**
- Which ticketing vendor runs cosm.com checkout: needs the rendered checkout in a browser.
- Whether cosm.com event pages carry schema.org `Event` JSON-LD: open an event page, View Source / DevTools, search for `application/ld+json`.
- Whether Cosm events show in Google's event listings: search "Cosm Dallas events" on Google and look for the events panel.
- Whether ID is checked at entry for all guests: ask Cosm, or check the full [Venue Policies](https://www.cosm.com/legal/venue-policies).

**From memory, not checked this pass**
- GetYourGuide has a partner/affiliate program with an API that requires approval. Check at getyourguide.com's partner pages before relying on it.

**Correction to the earlier note.** `cosm-immersive-venues-answer.md` says Cosm sells only on cosm.com and its app. That's out of date: Cosm also sells in person at the venue, names GetYourGuide and Viator as authorized resellers, and has sold through Fever.
