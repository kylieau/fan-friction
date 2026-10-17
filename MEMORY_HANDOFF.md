# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`: open questions are at its top (the K-list), build follow-ups under **Next** ("Past dates" is newest, then "Build 5 follow-ups"). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest sections at the bottom). Build 5's snapshot is still `docs/build-5/handoff-5.md`.

_Last synced: Oct 17, 2026 (about 02:00 UTC; the evening of Oct 16 Pacific), Claude Code (Fable 5.1), at `main`'s head, with everything pushed and the tree clean. Commits this session: `f6948926` through `70bafb17`. Kylie's standing instruction: one commit per step, straight to `main` (Kylie, Oct 9)._

## Current state
All committed, pushed and checked with `npm run build`; UI changes checked with Playwright screenshots at phone size. Twenty-one commits this session (`f6948926` through `70bafb17`).

- **Small-rooms research, second installment** is saved (`docs/research/city-builds/small-rooms-big-cities-answer-2.md`; the first installment is marked superseded) and **imported** (Kylie's OK on the scope, Oct 16): New York's other 28 rooms and 68 Los Angeles-region rooms (LA, Orange and Ventura Counties plus the Coachella Valley; ten Inland Empire rows held: Toyota Arena, San Manuel Stadium, Morongo Field, Fowler Events Center, Lake Elsinore Diamond, Pechanga Summit and Theater, Yaamava', Fox Riverside, Riverside Municipal Auditorium). Pacific Amphitheatre reads the OC Fair's official 7,800+; the GardenWalk House of Blues Anaheim is its own room. Locations are reference points, never entrances (the research's, or OpenStreetMap's by address or building name, noted per room; a campus address on a few). Hard access is measured for every 5,000+ room; none of the open ones is strained.
- **Rutgers is a New York home team** on the ESPN feed (football at SHI Stadium, MBB and WBB at Jersey Mike's Arena; both feed spellings map, the arena with a curly apostrophe). The football id stays `rutgers` (the expected-draw index names it as an opponent).
- **Closed rooms (Kylie's OK, Oct 16):** a room may carry `closed: { from?, until?, note }`; Ticketmaster and SeatGeek drop listings dated inside the window, past dates still resolve, hand entries still work. Set on nine rooms (the Apollo, Loew's Jersey until Nov 13, 2026, Asbury's Convention Hall and Paramount, the Warner Grand, FivePoint, Irvine Meadows, the Gibson, the Downtown Disney House of Blues).
- **Local Competition "Time TBA" band** (Kylie approved the mock, Oct 16): big events with no start time sit under the timed bars as a blank light-grey bar across the axis, no friction color. Matters for upcoming games with no kickoff set (Chargers–Chiefs, Jan 3, 2027) as well as research-loaded past dates.
- **Stub relock** (`lockCrowds`): a one-time pass per log per device asks again for every locked entry with no figure at all, loading by date with no cap, marked done after a pass where every date loaded. Found with it: a past date with no start time on file never counted as locked, so its stubs never took a crowd; crowds on such a date now lock 24 hours after the end of the day. The stamp itself is unchanged.
- **Headline short names everywhere:** the date headline's puller, the event page's Up against fallback and share line, the pulled-by note and the weather line all use the lineup's short name ("Braves at Dodgers (NLDS G2) pulls on seven other crowds").
- **Nightly run, first tested tonight (Oct 17, 12:15am Pacific):** seller names placed loosely get their own log line; every miscellaneous listing at a 5,000+ room logs with the feed's segment, genre and sub-genre and whether the word filter dropped it (Kylie, Oct 16: the next add-on rule comes from feed facts); "Los Angeles Coliseum Historic Tours" (listed as a 77,500-person event) now drops; a listing name loses a glued-on venue or "City, ST" ("Jurassic Quest – Anaheim, CA | Anaheim Convention Center" → "Jurassic Quest"); the research loader names each sport's leagues (a bare "League" is no longer baseball).
- **Two-day review (Oct 15–16, Opus building, Fable advising), delivered in chat:** no decision reversed. Raised and answered: the catalog's past LA concert dates are exactly Kylie's logged nights (Kylie, Oct 16: fine with that consequence); the loader's `/League/` rule and the silent loose matches (both fixed).

## Changes made this session
`src/data/venues.ts` (+96 rooms, closed fields, Pacific Amphitheatre), `teams.ts`, `types.ts` (`closed`), `personalLog.ts` (relock), `formula/index.ts`, `formulaRead.ts`, `components/DayTimeline.tsx`, `styles.css`, `sources/` (espn, ticketmaster, seatgeek, venueMatch, addOns), `scripts/` (research-events-load, catalog-write, venue-access), `data/venue-access.tsv`, `venueAccessIndex.ts`, BACKLOG, the two research answers. Nothing uncommitted; no parallel session touched the tree.

## Key decisions in force (newest first; older ones are in product-decisions and BACKLOG)
- **Elevation service (Kylie, Oct 17):** stored access numbers stay on Open-Elevation; Open-Meteo is the outage fallback only, never a re-measure (the two differ by up to ~20 m of relief; the Rose Bowl sits at 42 m against a 40 m line).
- **Closed rooms, the TBA band, the Coliseum tour drop, feed-category logging, the import scope: Kylie, Oct 16** (above).
- **Held by Kylie (Oct 16):** whether the friction stamp should use the same end-of-day fallback as the crowd lock on a date with no start time (she is working on related items for the next GrokBot build). Do not change the stamp.
- **Logged dates only** stays (Kylie, Oct 15; consequence accepted Oct 16).
- **Copy-only changes need no mock; big figures never wrap; listing floor ~1,000, friction floor 5,000; multi-day sizing by kind of figure; sport labels and MBB/WBB** (Oct 15–16, as before).
- **Testing notes:** Chromium at `/usr/bin/chromium` with `--no-sandbox` through `playwright-core` (import the CommonJS default: `import pw from '.../playwright-core/index.js'`); skip the city picker with `localStorage['fan-friction:home-metro'] = JSON.stringify('la')`; event pages outside home need `?metro=<id>`; a vite dev server may already be on 3001 from another session (check `lsof -ti:3001` before starting one); scratch scripts that load app modules import vite from `node_modules/vite/dist/node/index.js` and use `createServer` + `ssrLoadModule`; keep them in the session scratchpad. Never `npm i --no-save` or `prettier --write`.

## Kylie's manual steps
1. **Small-rooms research, next installment:** paste into the research tool: "Continue from the stopping point: Chicago, then Dallas–Fort Worth, Houston, Washington DC, Philadelphia, Atlanta, Miami and Phoenix; Boston and the San Francisco Bay Area if time permits. Reconcile the feed-visible venues listed at the end of the second installment before adding duplicates." Save the answer as `small-rooms-big-cities-answer-3.md` beside the prompt.
2. **Her own log items:** the open items under "Still open" in `private/kylie-log/open-questions.md`.
3. 🚩 **SeatGeek:** Kylie applied for the free client id and is waiting on SeatGeek (Oct 17). **Remind her at the start of every session until it lands**; then it goes in the `SEATGEEK_CLIENT_ID` Actions secret.
4. **Seller terms:** hand an agent the prompt in `docs/research/topics/seller-terms-automated-access-prompt.md` (AXS, DICE, Goldenvoice, Insomniac, Framework) and save the answer beside it.
5. **Phone checks (deferred by Kylie to a later batch, Oct 17; none urgent):** Add to calendar; the level pill; the build 4 round trip (tag, star a city, seats, sign out and back in); open Stubs signed in and check that research-loaded past dates now show a crowd (the relock runs on open).
6. **Build 6 (GrokBot):** her UX notes are in progress; the stamp question above belongs with them.

Closed Oct 17: Cosm is an accepted limitation (no consent request; `docs/product/build-brief.md`). The Ticketmaster id pass ran here (the key is in `.env.local` on the dev machine): 605 rooms in 33 cities got ids, 22 spot-checked; `scripts/ticketmaster-venues.mjs` now skips rooms closed for good.

## Open (details in BACKLOG under "Past dates" and in `docs/build-5/handoff-5.md`)
1. **Check the Oct 17 nightly log:** "rooms the table lacks" (only Broward's two sub-1,000 rooms should remain), the new "placed loosely" line (any wrong room), the "miscellaneous listings at 5,000+ rooms" line (the material for a feed-based add-on rule; bring Kylie a proposal once a few nights are in), Rutgers basketball games landing at Jersey Mike's Arena, and the Coliseum tour gone.
2. **Building names on the largest room:** move them when a second 1,000+ room in the same building is added (the research keeps Manhattan Center's Grand Ballroom and Newark's Terrace Ballroom out for now).
3. **Starlight Bowl's operating status** is unresolved (closed after 2025 wind damage per the city; an Aug 2026 show was cancelled for fire): no `closed` field set.
4. **O1–O4 from build 5:** the privacy default, the live privacy test matrix, re-measuring naming and layout, reconciling the handoffs. Also open: the Read tile in Local Competition (Kylie's call).
5. **At the start of a resumed session:** ask Kylie for new UX notes (she said none yet on Oct 16; build 6 notes are coming), and whether she has more thoughts on the tournament labels.

**Next command to run:**
```bash
git pull --rebase && npm run dev   # localhost:3001 (or reuse the server already there)
```
