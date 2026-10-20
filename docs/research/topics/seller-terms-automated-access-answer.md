# Automated-access terms of AXS, DICE, Goldenvoice, Insomniac and Framework: answer

**Author:** Claude Code (Fable 5.1), run inside the dev container. **Saved:** Oct 19, 2026, about 9 PM Pacific (Oct 20 UTC). **Answer to:** `seller-terms-automated-access-prompt.md` (Kylie, Oct 17: an agent fetches the clauses). **Status:** open; Kylie decides what, if anything, lists from these sellers.

**How it was done.** Plain requests only: a fetch tool and `curl` with no login, no key, no header spoofing, no cached or archived copies, no third-party summaries of the terms. Where a page answered 403, that is recorded and the site was left alone. Quotes are copied from the fetched page text. One caveat on method: the fetch tool and `curl` sometimes got different answers from the same address (the fetch tool opened Insomniac's events page where `curl` got a 403), so "could not read" below means neither route opened it.

## Summary table

| Seller | Verdict | Deciding clause | Official channel | On Ticketmaster or SeatGeek |
|---|---|---|---|---|
| AXS | **Could not read the terms** (every terms address answered 403) | none readable | No public listings API; a partner route by request only. Public sitemaps of event, venue and performer page addresses exist, but the pages themselves answer 403 to a plain request. | Partly on Ticketmaster: the app's own Ticketmaster capture already lists shows whose tickets the AXS-hosted Goldenvoice file sells on AXS (Cuco, Fonda Theatre, Oct 21). SeatGeek not checked. |
| DICE | **Could not read the terms** (fan-facing terms 403 at every address tried; only the UK ticketing terms and the US vendor terms are open, and neither covers automated reading of listings). The robots file carries a Cloudflare content signal that allows search indexing and forbids AI training; it says nothing about an app reading listings. | none readable | A partner-only GraphQL API and an embeddable widget, both needing a DICE partner account (the promoter's "MIO" dashboard). No public API. | Not found on Ticketmaster for the DICE-sold examples (Reframe Studios is not a room the app's feed covers). SeatGeek not checked. |
| Goldenvoice | **Could not read the terms** (the AEG Worldwide terms page, where Goldenvoice's footer sends you, loads with an empty body to a plain request). **Found instead:** Goldenvoice's own site reads a public JSON file of its 478 events, with venue, date, headliner, support, tour and ticket link. No terms were read that allow or forbid using it. | none readable | No published API. The JSON file the site itself loads is public but undocumented and unlicensed to outsiders as far as could be read. | Yes, in part: 61 of the 478 events in Goldenvoice's file sell on ticketmaster.com (Chelsea Wolfe, Orpheum Theatre, Oct 23), and the app's Ticketmaster capture also carries AXS-sold Fonda shows. |
| Insomniac | **Forbidden without written consent.** The terms bar "any robot, spider, offline reader, site search/retrieval application or other manual or automatic device, tool, or process to retrieve, index, data mine or in any way reproduce" the site, with a search-engine exception only, and set liquidated damages above 1,000 page requests a day. | Terms of Use, "Ownership of Content and Grant of Conditional License" | None. Tickets sell through Front Gate Tickets (a Ticketmaster company) and, for some shows, ticketmaster.com. | Yes for arena shows: Insomniac's Worship North America 2026 at the Kia Forum (Oct 23) links to ticketmaster.com and is already in the app's Ticketmaster capture. Festivals at NOS Events Center (Escape Halloween) were found only on resale sites in one search; Front Gate and Ticketmaster listings were not confirmed. |
| Framework | **No terms exist to read.** Framework's site (thisisframework.com, not frameworkla.com, which is an unrelated studio) has no terms page (404) and no terms link; its privacy policy is the only legal page. Its robots file allows everything but WordPress internals and lists a sitemap. | none (no terms published) | **Yes, a public iCal feed** (`/eventslist/?ical=1`, 30 events with name, start, venue address and event page). Tickets sell on DICE for its own rooms and on AXS for Goldenvoice co-presented shows at the Shrine Expo Hall. | The Shrine Expo Hall shows (Afrojack, Nov 27; Riordan, Jan 22) sell on AXS, and Goldenvoice's file lists them; the app's 14-day Ticketmaster capture does not reach those dates, so Ticketmaster presence is unknown. Reframe Studios shows: not on Ticketmaster. SeatGeek not checked. |

**What this means for the app, in one paragraph.** Only Insomniac's terms could be read, and they forbid reading the site by machine. AXS and DICE block a plain reader before it reaches the terms, which is itself the answer for a feed: nothing lists from them without a partner arrangement. Goldenvoice and Framework are the open ends: each publishes a machine-readable file its own site uses (Goldenvoice a JSON file, Framework an iCal feed), neither publishes terms that could be read, and most of their 5,000+ shows (Shrine Expo Hall, Greek Theatre, the Novo) sell on AXS. Nothing is reconsidered here; Kylie decides.

## 1. AXS (axs.com)

**Terms.** `https://www.axs.com/terms`: HTTP 403 (a 152 KB block page with no readable text). `https://axs.com/latest-terms-of-use` (the address a search names as the current North America terms): redirects to `https://www.axs.com/legal/terms_of_use.html`, HTTP 403. Regional AXS terms exist at open addresses (`axs.com/uk/about-terms-of-use_UK_v5.html`, `/au/`, `/nz/`), but they are other jurisdictions' terms and were not used as a stand-in. **Verdict: could not read the terms.**

**robots.txt** (`https://www.axs.com/robots.txt`, HTTP 200), in full:

```
Sitemap: https://www.static.discovery-prod.axs.com/uploads/sitemaps/sitemap_index.xml
  User-agent: *
  Disallow:
  Disallow: /users
  Disallow: /me
  Disallow: /search
  Disallow: /contributor
  Disallow: /*referrer=*
  Crawl-delay: 2
  User-agent: OAI-AdsBot
  Allow: /
  User-agent: OAI-SearchBot
  Allow: /
  User-agent: Twitterbot
  Allow: /
```

Event, venue and city pages are not disallowed; account, search and contributor paths are; a two-second crawl delay. The sitemap index (HTTP 200) lists event, venue, performer, series and category sitemaps per country, including `sitemap_event_us` (four files). The event pages those sitemaps name answered 403 to a plain request (the home page too).

**Official channel.** None found for listings. A partner integration page from a marketing vendor says AXS "does not currently offer a public events discovery API", that its developer tools are "scoped to venue operator use cases", and that bespoke access is by request to AXS's partnerships team (`solutions.axs.com`). A third-party aggregator (TicketsData) lists AXS as "coming soon" on paid plans. 🚩 Both the partner route and the aggregator would be a cost or a contract. Structured data on event pages could not be checked (403).

**On Ticketmaster or SeatGeek.** The app's Los Angeles Ticketmaster capture of Oct 19 lists Cuco at the Fonda Theatre on Oct 21; Goldenvoice's own events file sells that show on `shop.axs.com`. So some AXS-ticketed shows do reach the Ticketmaster Discovery feed the app reads. SeatGeek was not checked (the app has no SeatGeek access yet).

## 2. DICE (dice.fm)

**Terms.** `https://dice.fm/terms`, `/terms-and-conditions`, `/legal/terms`, `/legal` and `/sitemap.xml`: all HTTP 403 (Cloudflare). DICE's help centre (`support.dice.fm`, HTTP 200) has a "Terms of Use" category with one article, the **DICE UK Standard Ticketing Terms and Conditions** (ticket purchase terms, not website use). The **DICE Self Sign-Up Terms and Conditions USA** (`support.dice.fm/article/764`, "Last Updated: April 28 2026") are the promoter's contract; they incorporate "DICE's User Guidelines, MIO User Guidelines, and Website Terms & Conditions" without linking them, and the only clause near this topic is 5.7: "The Vendor shall obtain DICE's prior written consent if the Vendor wishes to publish or otherwise make available" a description of the DICE services outside DICE. Nothing in the readable documents addresses an outsider reading listings. **Verdict: could not read the terms.**

**robots.txt** (`https://dice.fm/robots.txt`, HTTP 200). The file opens with a Cloudflare "content signals" preamble (comment lines) and then:

```
User-agent: *
Content-Signal: search=yes,ai-train=no,use=reference
Allow: /
```

followed by `Disallow: /` for about forty named training crawlers (Amazonbot, Applebot-Extended, Bytespider, CCBot, ClaudeBot, Diffbot, Google-Extended, GPTBot, omgili, anthropic-ai, Claude-Web, cohere-ai, MistralAI-Training, meta-externalagent, GoogleOther, Baiduspider, PetalBot and others), `Disallow: /api/` for all crawlers (per the fetch tool's reading of the full file), and three sitemaps (main, artists, venues) under dice.fm. The preamble states that the signals are "express reservations of rights under Article 4 of the European Union Directive 2019/790". Event, venue and city pages are allowed to crawlers in general; the sitemaps themselves answered 403 to a plain request.

**Official channel.** Partner-only. Public directories describe a GraphQL API at `partners-endpoint.dice.fm/graphql` whose tokens come from the promoter's MIO dashboard, and an embeddable events widget (`widgets.dice.fm`) that needs a Partner ID from the same dashboard. No public developer programme was found. The promoter page (`dice.fm/promoters/framework-y7q2`) opened to `curl` (HTTP 200) but is a JavaScript app: no event links or event data in the HTML, and the fetch tool got a 403 on it. Structured event data could not be confirmed.

**On Ticketmaster or SeatGeek.** The DICE-sold examples (Framework at Reframe Studios Outdoors, Hugel Oct 24, Adriatique Nov 7) are at a room the app's feed does not cover, so no Ticketmaster row exists. SeatGeek not checked.

## 3. Goldenvoice (goldenvoice.com)

**Terms.** `https://www.goldenvoice.com/terms-of-use/` serves the Goldenvoice home page (the site answers every path with the home page, HTTP 200). Its footer "Terms of Use" link goes to `https://www.aegpresents.com/terms/`, a 131-byte page that refreshes to `https://aegworldwide.com/terms-of-use` (HTTP 200, 34 KB). That page's body field (`field--name-body`) is empty in the served HTML: navigation, cookie banner and footer only, no terms text and no date. **Verdict: could not read the terms.** (No robots.txt exists at goldenvoice.com or aegpresents.com either; both addresses return the home page.)

**What the site actually does.** The shows page loads its listings from a public JSON file, `https://aegwebprod.blob.core.windows.net/json/events/19/events.json` (HTTP 200, `application/json`, 5.8 MB, 478 events). Each row carries the event id, created and modified times, title parts (presenter, headliners, supporting act, tour name), event and door times with time zone, announce, presale and on-sale times, prices, a venue block (name, address, city, state, time zone, AXS venue id), media and a ticketing block (status, ticket URL, event URL). In the next four weeks it holds 175 events; the busiest rooms are the Roxy and the Fonda Theatre (22 each), the Regency Ballroom and El Rey (18), the Novo (17), with the Shrine Expo Hall, Shrine LA Outdoors, Greek Theatre and Orpheum among the 5,000+ rooms. Ticket links point to AXS for most rows (`www.axs.com` 898 fields, `shop.axs.com` 303, `tix.axs.com` 109), and otherwise to ticketmaster.com (61), ticketweb.com (30), eventim.us (21), eventbrite (13), dice.fm (9), tixr (7) and seated (6). No terms governing this file could be read, so it is recorded as what exists, not as permission.

**Official channel.** None published. No structured event data (JSON-LD) in the shows page HTML.

**On Ticketmaster or SeatGeek.** Yes in part: Chelsea Wolfe at the Orpheum Theatre, Oct 23, sells on ticketmaster.com per Goldenvoice's file, and the app's Ticketmaster capture also lists AXS-sold Fonda shows (Cuco, Oct 21). A web search named SeatGeek among resellers for a past Fonda show (Finn Wolfhard, Oct 13, 2026); SeatGeek was not checked directly.

## 4. Insomniac (insomniac.com)

**Terms** (`https://www.insomniac.com/terms-of-use/`, HTTP 200 by `curl` and by the fetch tool). The page says "The 'Last Updated' date above will tell you when these Terms were last revised", but no such date is printed anywhere in the served text; the only date is June 3, 2026, a cutoff inside the arbitration section. Quoted from the section **"Ownership of Content and Grant of Conditional License"** (a bulleted list of things you agree not to do):

> Use any robot, spider, offline reader, site search/retrieval application or other manual or automatic device, tool, or process to retrieve, index, data mine or in any way reproduce or circumvent the navigational structure or presentation of the Content or the Site, including with respect to any CAPTCHA displayed on the Site. Operators of public search engines may use spiders to copy materials from the Site for the sole purpose of and solely to the extent necessary for creating publicly available searchable indices of the materials, but not caches or archives of such materials. We may revoke this exception at any time and require removal of archived materials gathered in the past;

> Take any action that imposes or may impose (in our sole discretion) an unreasonable or disproportionately large load on our infrastructure;

> Request more than 1,000 pages of the Site in any 24-hour period, whether alone or with a group of individuals;

> Make more than 800 reserve requests on the Site in any 24-hour period, whether alone or with a group of individuals;

> Reproduce, modify, display, publicly perform, distribute or create derivative works of the Site or the Content;

> "Frame" or "mirror" any part of the Site;

> This license is expressly conditioned on your preexisting agreement to comply with, and your actual compliance with, each of the provisions described in this Ownership of Content and Grant of Conditional License section. This license exists only so long as you strictly comply with each of the provisions described in this section. Any use of the Site or Content by you or anyone acting on your behalf that does not strictly comply with each and every provision in this section exceeds the scope of the license granted to you herein, constitutes unauthorized reproduction, display, or creation of unauthorized derivative versions of the Site and Content, and infringes our copyrights, trademarks, [the sentence continues]

From **"Code of Conduct"**:

> Harvest or collect information about Site users;

From **"Violation of these Terms"**:

> You agree that your abusive use of the Site may cause damage and harm to us, including impaired goodwill, lost sales and increased expenses. You also agree that monetary damages for your abusive use of the Site are difficult to determine and that if you, or others acting with you, request more than 1,000 pages of the Site or make more than 800 reserve requests on the Site in any 24-hour period, you, and those acting with you, will be jointly and severally liable for liquidated damages in the amount of twenty-five cents ($0.25) for each page request or reserve request made during that 24-hour period which exceeds those limits.

**Verdict: forbidden without written consent.** The robot clause covers any "manual or automatic device, tool, or process to retrieve, index, data mine or in any way reproduce" the site; the only exception is public search engines.

**robots.txt** (`https://www.insomniac.com/robots.txt`, HTTP 200), in full:

```
User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /*?s=*
Disallow: /?s=*
```

Event pages are allowed; no sitemap is listed. (The events page answered 403 to `curl` but opened through the fetch tool; the terms, not the robots file, are what forbid reading it.)

**Official channel.** None. The FAQ (`insomniac.com/faqs/`, "Ticketing") says: "The majority of tickets to our shows are sold through Front Gate Tickets." and "To inquire about our your ticket order, please visit support.frontgatetickets.com." Front Gate Tickets is a Ticketmaster company (bought in 2015). No API, feed or structured data was found; the FAQ does not mention Ticketmaster by name.

**On Ticketmaster or SeatGeek.** Yes for at least the arena shows: the events page lists "Worship North America Tour 2026: Sub Focus, Dimension, Culture Shock, 1991", Los Angeles, Fri Oct 23, with its ticket link on ticketmaster.com, and the app's Oct 19 Ticketmaster capture holds "WORSHIP NORTH AMERICA 2026" at the Kia Forum that day. For the festivals, one search for Escape Halloween 2026 (NOS Events Center, Oct 30–31) found only resale listings (TickPick, Gametime, Vivid Seats); Front Gate and Ticketmaster listings were not confirmed. No Insomniac festival appears in any of the app's captures (NOS Events Center is not a room on file).

## 5. Framework (thisisframework.com)

**Which site.** `frameworkla.com` is Framework Studio, a creative agency, with no events; it is not the promoter. The promoter's site is **`https://thisisframework.com`** ("Framework Los Angeles"), found through its DICE promoter page and press.

**Terms.** `https://thisisframework.com/terms` and `/terms-of-use`: HTTP 404. The footer has no terms link ("© 2026 Framework Los Angeles. All Rights Reserved." only). The privacy policy (`/privacy-policy/`, HTTP 200) is the only legal page. **Verdict: no terms published to read**; the DICE and AXS terms govern the ticket pages its events link to.

**robots.txt** (`https://thisisframework.com/robots.txt`, HTTP 200), in full:

```
# This virtual robots.txt file was created by the Virtual Robots.txt WordPress plugin: https://www.wordpress.org/plugins/pc-robotstxt/
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Disallow: /wp-includes/
Allow: /wp-includes/js/
Allow: /wp-includes/images/
Disallow: /trackback/
Disallow: /wp-login.php
Disallow: /wp-register.php
Sitemap: https://thisisframework.com/sitemap_index.xml
```

**Official channel.** The events page links a public iCal feed, `https://thisisframework.com/eventslist/?ical=1` (HTTP 200, `text/calendar`, 30 events). Each entry carries SUMMARY (the act), DTSTART with the Los Angeles time zone, LOCATION (the room and street address) and URL (the event page on thisisframework.com); the ticket seller is on the event page, not in the feed. Eight of the thirty entries are a recurring daylight-saving placeholder, not shows. The events page HTML also carries one JSON-LD block (a WordPress site block, not schema.org Event data).

**Where its tickets sell.** Hugel (Oct 24, Reframe Studios Outdoors, "Framework & Goldenvoice") → `link.dice.fm`. Afrojack Presents: CONTROL (Nov 27, Shrine Expo Hall, "Goldenvoice & Framework") → `axs.com/events/1468576`. Goldenvoice's events file carries the same shows under "Framework x Goldenvoice Present" and "Goldenvoice & Framework Present", DICE for Reframe Studios and the Sears Building, AXS for the Shrine Expo Hall.

**On Ticketmaster or SeatGeek.** The Shrine Expo Hall shows sell on AXS; the app's Ticketmaster capture reaches only 14 days ahead (through Nov 2), so whether they also appear there is unknown. The Reframe Studios shows do not. SeatGeek not checked.

## What this answer did not do
It did not open any page that answered 403, did not use cached copies or archive sites, and did not check SeatGeek directly (the app has no SeatGeek access yet). The AEG terms body may render in a browser; a plain request got an empty field. The two public files found (Goldenvoice's JSON, Framework's iCal) are recorded as what the sites publish, with no reading of permission into them.
