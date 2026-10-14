## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/research/topics/cosm-schedule-access-answer.md`**. Not a PDF, a Word file or a page that can only be saved as a PDF. Use Markdown headings, pipe tables and inline links. If you cannot create a file, reply in plain Markdown in the chat; if it is too long for one message, stop at a clean break, say "continued", and carry on.

# Research brief: can Fan/Friction list Cosm's schedule, and how?

Status: open. Written Oct 14, 2026. Follows `cosm-immersive-venues-answer.md` (same folder). For any research model that can render JavaScript pages.

## What this is for
Fan/Friction is a personal log of live events, with a nightly list of what's on in each city (40 metros in the US, Canada and Mexico). Kylie wants Cosm showings listed ahead ("a growing entertainment and alternative to the actual event. It's cheaper"). They're a new type in the app, **Live screening**. Listings come from official sources only: public APIs (Ticketmaster, SeatGeek, league feeds) or a venue's own pages where its terms allow reading them. We never work around a block.

What we know: Cosm sells only on cosm.com and its app (no Ticketmaster listing found). A normal fetch of `https://www.cosm.com/terms-of-use` and of `https://www.cosm.com/detroit` on Oct 14 returned only the page titles: the pages render with JavaScript. Cosm's `robots.txt` allows crawlers on its event, venue and city pages and points to `https://cosm.com/sitemap.xml`. robots.txt is not permission; the terms decide.

## What I need, in this order

### 1. The terms
Quote, verbatim, every clause in Cosm's Terms of Use (and any separate API, developer or content terms) about automated access, scraping, crawling, robots, data mining, reproducing listings, or using the site's content in another service. Give the page's date or version. Say plainly whether reading the public schedule pages once a night, for listing dates, titles and venues only (no images, no prices, no resale), would be allowed, forbidden or unclear.

### 2. Official ways to get the schedule
- Does Cosm publish a public or partner API, a calendar feed (iCal/RSS), an affiliate or partner program, or a press/media schedule? Links.
- Which ticketing platform runs cosm.com checkout (look at the checkout flow, network requests or vendor mentions)? Does that vendor offer a public or partner events API, and on what terms?
- Do Cosm events appear in any channel we already read or plan to: SeatGeek, Ticketmaster (including as a different seller name), Google's event listings, Bandsintown, Songkick, Eventbrite? Show an example if so.
- Do Cosm's event pages carry structured data (schema.org `Event` JSON-LD) that lists date, title and venue? Paste one example.
- Who to ask: Cosm's partnerships or media contact, if published.

### 3. What a listing looks like
For each open Cosm venue (Los Angeles, Dallas, Atlanta, Detroit), a week of real listings as sold: date, start time, title, room (Dome / Hall / GA), whether it's a live game, a film or other, and the URL pattern. Note anything that tells a live showing from a recorded one (the app types live ones as Live screening and recorded ones as Film).

### 4. Ticketed or gated?
Kylie's strong consideration (not a threshold) for treating a screening or watch party as an event: whether it is ticketed and/or gated by security beyond a bar's door staff. Say how Cosm admits people (ticket scan, bag check, ID) with a source.

### 5. Recommendation
The cleanest allowed route, ranked: an official feed or API; a channel we already read; reading the public pages if the terms allow it; asking Cosm. For each, what it would take and any cost (flag anything paid).

### Self-audit
List every claim on thin evidence, anything from memory, and what Kylie should check by hand, with a link she can open for each.

## Rules
- Do not invent terms text, endpoints, URLs or listings. If you can't verify something, leave it blank and say why.
- Don't describe ways around a block; if something is blocked or forbidden, say so and stop there.
- Plain words; tables where a table is clearer.
- Save the answer beside this prompt as `cosm-schedule-access-answer.md` (a second model's answer takes a `-claude` or `-codex` suffix).
