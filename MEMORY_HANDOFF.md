# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md` (the top sections are the Further out fold and former names; open questions follow, then build follow-ups under **Next**, including "Build 7.1 follow-ups"). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest at the bottom).

_Last synced: Oct 25, 2026, Claude Code (Opus 5.5 as builder, Fable as advisor), at `main`'s head `97aa1bfb`, pushed. Kylie's standing instructions: build straight on `main`, pushed, no branches or PRs; `git fetch` first (the nightly pushes to `main` at about 6 AM Pacific, 13:00 UTC); stage files by name; every tweak is judged for UX and for conflicts with earlier decisions, and a conflict goes back to her as a question; mock first for anything new on screen; multiple choice with the builder's lean marked; she signs up for nothing beyond a plain free API key; use the advisor before committing to an approach and before calling work done; Codex read-only reviews after each item group._

## Current state
**Nothing in progress; everything committed, pushed and verified** (`npm run build`, `node scripts/storage-check.mjs` 45 checks, `node scripts/titles-check.mjs`, `node scripts/city-build-check.mjs` pass).
- **Build 7.1 is finished** (spec `docs/build-7-1/build-notes-7-1.md`; report `docs/build-7-1/gap-report-7-1.md`, header "Finished"). Codex stages 4 and 5 ran once credits returned; all 12 findings fixed (`4257e7ea`).
- **Event rows after the build (Kylie, Oct 24; product-decisions.md, last three lines; mocks and shots in `docs/build-7-1/mockups/followups-oct24/`):** your answer is its icon alone (ticket, TV, bookmark), no word, no line of its own; the outdoor weather sits right after the venue name, no separator; the right edge holds your icon then the occasion tag, which always comes last, 6px apart. All in the shared `RowBody` (`src/components/DayRow.tsx`), so the Explore List, Map sheet and date page match; measured at 390pt. The Explore List calendar lost its legend; the tiles stay as they are (`59ec513f`).
- **Further out delivery 9 is saved and folded** (`docs/research/topics/further-out-rooms-answer-9.md`; the delivery 9 block in `src/data/venues.ts`, `97aa1bfb`): 41 rooms, 19 inside a city (Provo's LaVell Edwards Stadium and Marriott Center now count for Salt Lake City's verdict from the next nightly; ten school stadiums for San Antonio), 14 with Ticketmaster ids. **Continuation 9 (Portland, Raleigh–Durham, St. Louis, Pittsburgh)** is at the end of `further-out-rooms-prompt.md`; Kylie has the paste.
- The working tree is clean apart from two untracked `.agents/skills/source-command-*` folders that aren't ours (likely Codex's); leave them unstaged.

## Key decisions in force (newest first)
- **Oct 24–25 (Kylie):** the row layout above; the calendar legend removed ("that was not explicitly locked"; tiles unchanged); M3's right-edge weather is superseded by the weather beside the venue name.
- **Oct 24 (builder's calls, in the report's "Builder's-call decisions"; question 7 asks her to confirm the first):** a flagged (`gone`) season plan never settles, clears when the schedule lists its game again, and goes when the season is stopped; any unsettled plan is checked against the schedule whatever its date, and an empty schedule (a failed read) changes nothing; the weekday-night title rule covers wrestling promotions only; buttons and links stay sentence case, labels and headings Title Case; the M39 kept exceptions and invisible tap extensions (the (i) buttons get an explicit 44 × 44).
- **Oct 24 (Kylie):** `M16_KEYS_FROM` is `2026-10-01` (every archived day's saved verdict files at the Oct 25 nightly); bare sport labels ("Volleyball") stay.
- **Further out folds:** every row of the research's two tables comes in (holds noted in the room's capacity note); held outer-boundary records and leads outside the tables stay out; new rooms get Ticketmaster ids with `node scripts/ticketmaster-venues.mjs --ids=<new ids>`, exact names 1.5–10 km away added by hand after a look.
- **Working notes:** headless checks import `node_modules/vite/dist/node/index.js` and `ssrLoadModule` a source file; the date page is `/date/<date>?metro=<id>`; the Playwright browser can capture a blank frame before data lands (wait for text); a fresh headless browser asks "Where's home?" first; port 3001 belongs to another session, this one used 3002 (stopped). Never `npm i --no-save` or `prettier --write`.

## Kylie's manual steps
1. 🚩 **SeatGeek:** still waiting on the free client id. **Remind her every session** until it lands; then the `SEATGEEK_CLIENT_ID` Actions secret and SeatGeek's logo attribution.
2. **Answer questions 3–7** in the gap report: 3 Compare's "Side by side" in Title Case; 4 the nightly's stored `why` wording; 5 the weather card's summary sentence (no text forecast stored); 6 the friction pill on Up Against against the M33 mock; 7 a flagged past season game clearing on its own.
3. **Phone checks signed in** (the report's "For Kylie to check on a phone"), plus the new row icons and the weather beside the venue name.
4. **Research to run:** Further out continuation 9 (save as `further-out-rooms-answer-10.md`); the two M35 prompts (`docs/research/topics/arts-fill-rates-prompt.md`, `ncaa-attendance-sources-prompt.md`).
5. **The M15 seed, when she wants test account A filled:** `docs/reference/test-account-seed.md` (dry run first; agents never run its write path or open her export).

## Next
1. **Ask Kylie for new UX notes and her answers to questions 3–7**, then fold any answer that changes code.
2. **Read the Oct 25 nightly log** (not yet pushed at this sync) for M16's proof (Wed, Oct 21 reads its saved 5.3), any "possible copies kept" lines, and the first Salt Lake City and San Antonio verdicts with the delivery 9 inside rooms.
3. **When delivery 10 arrives:** save it condensed, fold it like delivery 9, write Continuation 10 (Milwaukee and the Los Angeles extras).
4. **Hard access** for the new 5,000+ rooms: `node scripts/venue-access.mjs --new` (the elevation services answered 429 on Oct 23).

**Next command to run:**
```bash
git pull && git log --oneline -5 && sed -n 1,40p MEMORY_HANDOFF.md
```
