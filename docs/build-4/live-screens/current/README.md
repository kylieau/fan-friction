# Fan/Friction live capture, current (Sun Oct 11, 2026, ~1:15–1:30 PM PT)

Source: https://fan-friction.vercel.app (production), 390×844 viewport, deviceScaleFactor 3 (1170×2532 PNGs), isMobile + touch.
Method: `/workspace/ff-pw/seed-stats-example.mjs` base (copied to `scripts/cur-base.mjs`), plus `scripts/cap.mjs` and `scripts/p5.mjs`. Throwaway signed-out Playwright context, **never signed in**, every non-GET/HEAD/OPTIONS request aborted (log: 0 blocked across all runs), context closed and discarded after each run. Home city LA, first-run tips off.

## Deployed commit
**b1c3478** ("Add Milwaukee venues and verified sports feeds", 2026-10-11 1:07 PM PT) = `origin/main` HEAD after `git fetch` in `/workspace/fan-friction-readonly`.
Evidence (circumstantial, no build SHA is exposed): the live chunk `assets/crowdPoints-CSH4Y7n8.js` contains Fiserv Forum, UW-Milwaukee Panther Arena, Marcus Amphitheater, Milwaukee Mile, which that commit added in `src/data/venues.ts`. Since it's the HEAD, the deploy is at least b1c3478 and nothing newer exists. An exact SHA match can't be proven without Vercel access. Main bundle: `index-CbxO84nV.js`.

## Seeded-data caveat
My Stubs, Stats, Home "Recent" and "Favorites this week" use **12 EXAMPLE entries** seeded into `localStorage['fan-friction:your-nights']` (Kings, UCLA MBB, Lakers watched, Dodgers ×2, Angels, Springsteen, Canadiens watched (Montreal), Kid Cudi, Chargers watched, Isakov, Hosono). These aren't Kylie's real log. Favorites come from the app's signed-out defaults. Events, reads and crowds are live data for Oct 11, 2026. Reads on Sep 20 entries all show 8.4 because they share one LA date.
**Friends' plans and the Following feed can't be captured.** They need sign-in plus server-side follows, and can't be seeded locally. Following shows only the signed-out "Sign in to follow people." state.

## Files
| File | Shows |
|---|---|
| 01-home-top.png | Home top: "Today in Los Angeles" (before 5 PM, so not "Tonight"), read 2.7 Mild, "Today ›" section with rows, sign-in nudge |
| 02-home-scroll-01/02.png | Home's inner scroller (`.home-page`) scrolled: Your next event ›, Favorites this week ›, Recent › |
| 10-explore-map-default.png | Explore map, sheet collapsed (default `sheet-none`; tapping the handle didn't change it, so that duplicate was dropped). Centered city switcher, search top right, read box, day strip, L1b chips |
| 12-explore-chip-card-tapped.png | Tapped chip "Jack Johnson": pale ring, others dim, compact T1 card (NOTABLE tag, title, Hollywood Bowl · 7:00 pm, by Palace, 18k ›) |
| 13-explore-why-read-box.png | Read box tapped: "Why 2.7 today" P3 card, gold crowd bars, rows by crowd with tags/pills |
| 20-date-page-top.png | Date page for Fri Oct 16 (reached from a Lakers link): read 5.3 Spicy, forecast line, "That night in Los Angeles" list |
| 21-date-page-scroll-01/02.png | Date page scrolled (`.date-page`) |
| 23-date-page-local-competition.png | Date page **Local competition**: read box + "N Spicy · Xk across N events · N start at…" + stacked timeline; Attending? / Watching? buttons |
| 22-event-detail-top.png | Event page, upcoming: Charli xcx – Music, Fashion, Film Tour, Kia Forum, Sat Oct 17 8:00 pm |
| 24-event-ticket-line.png | Ticket line: shows the **fallback "See tickets on Ticketmaster ›"**. No "Prices from $48+fees ›" was found on any event tried (league-feed games have no line by design) |
| 25-event-up-against.png | Event page still shows **"UP AGAINST"** (Swamped by SmartLess… +4, rival rows with miles) |
| 26-event-local-competition-timeline.png | Event page still also has a "Local competition" timeline with miles |
| 27-event-detail-scroll-01..03.png | Event page scrolled (`.event-page`) to the end |
| 30-favorites.png, 31-favorites-scroll-01..06.png | Favorites (default favorites): By favorite / By date, Teams cards with record, last 5, next line, "You at games" and "ESPN ›", scrolled |
| 40-you-my-stubs.png, 41-you-my-stubs-scroll-01..03.png | You › My Stubs: "+ Log an event", chips Recent/Sports/Concerts/Watched/Attended, month-grouped list |
| 42-you-my-stubs-filter-watched.png | My Stubs with the Watched chip on |
| 50-you-following.png | You › Following: signed-out "Sign in to follow people." |
| 60-you-stats-top.png, 61-you-stats-scroll-01..03.png | You › Stats: read chips, usual read, Biggest crowd/Heaviest/Quietest, "9 Attended · 7 Venues · 3 Watched" (no Fans with you), By type/team/sport/venue |
| 90-tabbar-closeup.png | Tab bar element screenshot (Home / Explore / Favorites / You) |
| 91-tabbar-bottom-crop.png | Bottom 100 pt of Home with the tab bar in context |

## Things the capture noticed (for the gap review)
- The event page still has both "Up against" and its own "Local competition" timeline with miles. The build2 call 6 moved Local competition to the date page (that part is built), but what the event page keeps is still an open ⚑.
- Date page and event page actions read "Attending?" / "Watching?" (event page adds "Interested?"). The CSS class is still `gold-button`, but it renders action blue.
- "Prices from…" was not observed, so the priced variant couldn't be screenshotted.
