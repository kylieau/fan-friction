# Build 7 research: logging entry point (center "+" vs search-first) — Claude's answer
Source: Kylie pasted Claude's research reply in chat, 2026-10-21. Saved verbatim-in-substance for build 7.

Short version: the field splits cleanly by *when* people log. Apps where you log in the moment (Strava, Swarm, Untappd, Beli) put a dedicated action in or over the tab bar; catalog apps where you log later (StoryGraph, Goodreads, setlist trackers) are search-first with the action on the item page. Letterboxd does both, and its recent complaints show why the item-page path is the one that can't be missing.

## 1. Comparison

| App | Primary add entry | What it opens | Also on item page? |
|---|---|---|---|
| Letterboxd | Raised green + center tab | Search ("Add a Film") → log form | Yes (eye/rate/log) |
| Goodreads | Scan tab in tab bar + search | Barcode → book page | Yes (shelf/rate) |
| StoryGraph | Search bar (scan icon inside it) | Book page | Yes, status set on page |
| Beli | + center tab (3-tab bar) | Search → rank flow | Yes |
| Untappd | Floating check-in button (toggleable) + Discover search | Search → beer check-in | Yes |
| Strava | Record center tab | Live record screen | n/a (live) |
| Swarm | Check in center tab + iOS widget | Nearby places list | Yes |
| Instagram / TikTok | Center create tab | Camera/composer | n/a |
| Serializd | Search → show page | Log episode/season | Yes (primary) |
| Rail / SetListr / setlist.fm | Search artist → "I was there" | Item page | Yes (only path) |

Sources (as cited by Claude, links not preserved in paste): Letterboxd FAQ ("+" logs to Diary); Pratt critique (three paths: green plus, search page, any poster; plus opens search). Beli nav = Your List, +, profile. Untappd floating check-in button added in 3.4.9, can be turned off in Advanced settings; its update notes say search is the starting point for most check-ins. Strava Record bottom center. Swarm 5.0 three tabs (Me, Check-in, My Friends) + Notification Center widget. StoryGraph scanner inside search bar. Rail: search artist → setlists → "I Was There"; SetListr marks shows from artist/venue history.

## 2. What UX sources say about center "create" tabs
- Apple HIG: tab bars are for navigation, not actions (actions belong in toolbars); Android uses a FAB. Apple tolerates it in practice. iOS 26 offers a sanctioned "separated" slot (search-role tab visually detached; becomes a search field). A dev note warns a large raised button obscuring content isn't very iOS 26-like.
- Discoverability: one study found a FAB slightly hurt first-use usability but users were faster after first completion; Google found people lean on it on unfamiliar screens. Another experiment rejected that a FAB improves usability over a toolbar; critics say it distracts and fits iOS poorly.
- Accidental taps: costly mainly for destructive actions; a dismissible log sheet is cheap. Untappd making its button toggleable signals some users find it intrusive.
- Accessibility: labeled tab is fine for VoiceOver; a custom raised control needs an explicit label, ≥44pt target, and a selected state that doesn't lie (it's modal, not a destination).

## 3. How people actually log in Letterboxd
2025 redesign backlash: reviewer called the green plus "just another search button" that makes you search for the film whose page you're already on. The item-page path is the habitual one; + is the fallback. Serializd reviews: users want logging as seamless as Letterboxd's; complaints are about the log form, not entry. Swarm: launching the app just to check in felt like extra work → moved to a widget.

## 4. Fastest path for on-site, low-signal logging
Event logging is closer to Swarm/Strava than Goodreads. Ranked by taps and network dependence:
1. "Now near you" shortcut: open, pick event, save. Needs only a cached list of today's nearby events (prefetch on launch / when Upcoming is viewed).
2. Upcoming tab with an "I'm here / Stub it" row for today's events.
3. Event page "Stub it".
4. Global search → results → log: slowest, needs live network.
A "happening now near you" shortcut makes a dedicated entry worth the tab slot: the + becomes a context-aware list, not a search button.

## 5. Recommendation: both, with a clear split of duties
Keep the raised center + (or, on iOS 26, a separated trailing action tab) AND put "Stub it" on every event page and search result row.
- Center + only: fast when it guesses right, frustrating when it doesn't; violates HIG letter.
- Even tabs + page button only: cleanest, most native, cheapest; every log costs a search/browse, which breaks on stadium networks.
- Both: each path covers the other's weakness. Make + modal and quick to dismiss; accessibility label "Log an event".

What the + sheet shows, in order:
1. Happening now / today near you (cached), each row with Attended / Watched and one-tap save; pin a matching Upcoming item on top.
2. Your upcoming events this week.
3. Recent / backfill: yesterday's and last week's events the user looked at.
4. Search as the fallback, not the headline.

Extras: Lock Screen/Home Screen "Stub it now" widget; post-event push ("Were you at X last night?" — note: Fan/Friction copy rule bans "night"; reword) deep-linking into step 1.
