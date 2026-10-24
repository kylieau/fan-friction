# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`: the top two sections ("The Further out fold and the drive-time rule, left after Oct 23" and "Room former names, left after the Oct 23 fold") are today's; open questions follow (the K-list), then build follow-ups under **Next** (newest: "Build 7 follow-ups"). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest at the bottom).

_Last synced: Oct 23, 2026, about 10:40 PM Pacific, Claude Code (Opus 5.5), at `main`'s head, pushed. Kylie's standing instructions: one commit per step, straight to `main`, pushed; `git fetch` first (the nightly pushes to `main`); every tweak is judged for UX and for conflicts with earlier decisions, and a conflict goes back to her as a question; mock first for anything new on screen; multiple choice with the builder's lean marked; she signs up for nothing beyond a plain free API key; use the advisor before committing to an approach and before calling work done._

## Current state
**Next up: build 7.1.** Kylie is clearing the session to start it. She ran a build 7 gap review with Cursor (UX and UI notes); her notes for 7.1 have not landed in the repo yet. Ask her for them (AGENTS.md: ask for new UX notes at the start of a resumed session). Build 7 itself shipped Oct 22 (`docs/build-7/gap-report-7.md`: what shipped, the judgment calls she can reverse, the phone checks); its follow-ups are in BACKLOG, "Build 7 follow-ups".

**Oct 23 was data work, all committed and pushed** (`npm run build` and the titles, city-build and copies checks pass at the head, `4a362b80`). The working tree is clean apart from Codex's two untracked `.agents/skills/source-command-*` folders (not ours; leave them unstaged).
- **Duplicate events (Kylie's Galaxy at LAFC, Oct 25):** fixed Oct 22 evening (`06f319e5`, `de2dc370`, `5a62d41f`). "Football Club" and FC/CF read as soccer; a merged game keeps none of a seller's act facts; `possibleCopies` and `scripts/copies-check.mjs` flag pairs (the nightly prints "possible copies kept"; the Oct 23 run's were room conflicts, and OneCourt became an add-on, `ede47c78`). A school's own feed wins on the room (`208a25d4`).
- **The drive-time rule** (`105f2dfa`, `ad4b9439`): a room is inside a city when the normal drive from the nearest of its downtowns (`downtowns` in `src/config/metros.ts`, city halls) is 64 minutes or less; Further out up to 180; `alsoIn` lets one room count for two cities. `scripts/further-out-drive.mjs` routes every room (OSRM) and writes `furtherOut` / `alsoIn`.
- **Rooms added today:** the Further out deliveries 1–8 (202 + 52 + 71 + 70 + 65), the small rooms (272 in one pass, then 129 from the map-point research, including 10 rooms the first pass had wrongly matched to a neighbour), the former-names fold (62 rooms dated), corrections, convention halls with no capacity. 437 rooms got Ticketmaster ids (`fc34304e`), and each fold since ran `node scripts/ticketmaster-venues.mjs --ids=…` (new flag) on its own rooms.

## Key decisions in force (newest first)
- **Oct 23 (Kylie):** FC/CF means soccer; a school's own site wins on the room; the drive-time rule for every city, several downtowns where a region has them, Los Angeles keeps one, ceiling three hours, The Gorge Further out; one room can count for two cities; former-name leans; Further out folds first, then small rooms; convention halls store no capacity, festival grounds keep theirs, the Hynes auditorium keeps 6,000; the builder's leans on every research fold ("i'm happy with your lean", "fine with your leans").
- **Judgment calls from today's folds she can reverse** (BACKLOG, Further out section): Zilker Park at ACL's 75,000 and Auditorium Shores at 15,000 inside Austin; COTA's circuit at 120,000; Churchill Downs at about 170,000; the Las Vegas Festival Grounds held.
- **Build 7 locks (Oct 22):** a stub's cost has three states; same-day logging carries seat and cost from the plan; team stats credit both teams; no "↑ N earlier" cue; filter button the search button's size; one Settings page, no gear; Hide mine per device. Judgment calls listed in the gap report.
- **Sellers:** AXS, DICE, Insomniac, Goldenvoice and Framework stay unread. **Held by Kylie (Oct 16):** the stamp's end-of-day fallback; do not change the stamp.
- **Working notes:** new seller or feed spellings go in `aliases`; in `venues.ts` keep comments above `location`, never between `location` and `ticketmasterIds`; `venueNameOn` shows the last undated or already-started name, so spellings go first and real names in date order; a merged room's old id goes in `MERGED_VENUE_IDS`. Check for a room already on file by name and within about 1.5 km, not only 350 m (today's misses: Mihalik–Thompson, the Stephenville "Memorial Stadium"). The Ticketmaster key allows 5,000 calls a day, reset about 12:24 PM Pacific; the nightly prints each city's call count. OSRM: at most 90 points a request, about 1.2 s apart; Nominatim one a second. Headless checks import `node_modules/vite/dist/node/index.js` and `ssrLoadModule` a source file. Never `npm i --no-save` or `prettier --write`.

## Kylie's manual steps
1. 🚩 **SeatGeek:** still waiting on the free client id. **Remind her every session** until it lands; then the `SEATGEEK_CLIENT_ID` Actions secret and SeatGeek's logo attribution.
2. **Build 7.1 notes:** her Cursor gap review; bring them in at the start.
3. **Research to run:** Further out continuation 8 (Salt Lake City, Ottawa–Gatineau, Edmonton, San Antonio), in `docs/research/topics/further-out-rooms-prompt.md`; save as `further-out-rooms-answer-9.md`.

## Next
1. **Build 7.1** from Kylie's notes: sort each note structural or polish (AGENTS.md), mock first for anything new on screen, fix a UI issue everywhere it appears and measure it.
2. **Read the Oct 24 nightly log:** each city's Ticketmaster call count (hundreds of rooms were added today; the ones without an id are name-searched, so check the total stays well under 5,000); "possible copies kept" lines for a new kind; verdicts in the cities that gained inside rooms (Washington from Baltimore, Austin, Cleveland's Akron rooms, Kansas City's Lawrence rooms).
3. **Hard access** for the new 5,000+ rooms: `node scripts/venue-access.mjs --new` (Open-Elevation and Open-Meteo both answered 429 all evening; list in BACKLOG).
4. **When delivery 9 lands:** fold it the same way (save condensed with a status line, route with the app's downtowns, check for rooms on file by name and 1.5 km, ids with `--ids=`), then write continuation 9 (Portland onward).

**Next command to run:**
```bash
git pull && sed -n 1,40p MEMORY_HANDOFF.md
```
