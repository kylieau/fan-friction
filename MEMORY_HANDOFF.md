# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md` (the top sections are the Oct 23 Further out fold and former names; open questions follow, then build follow-ups under **Next**). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest at the bottom).

_Last synced: Oct 24, 2026, early morning Pacific, Claude Code (Fable 5.1), at `main`'s head, pushed. Kylie's standing instructions: one commit per step, straight to `main`, pushed; `git fetch` first (the nightly pushes to `main` at about 6 AM Pacific, 13:00 UTC); every tweak is judged for UX and for conflicts with earlier decisions, and a conflict goes back to her as a question; mock first for anything new on screen; multiple choice with the builder's lean marked; she signs up for nothing beyond a plain free API key; use the advisor before committing to an approach and before calling work done._

## Current state
**Build 7.1 is in progress; steps 1–3 of its build order are done and pushed, and the session stopped there on purpose** (Kylie, Oct 24: "defer to your lean with stop timing"; the lean was to stop after Codex stage 1 because steps 2–3 change stored data). The spec is `docs/build-7-1/build-notes-7-1.md` (items 1–16 and M1–M40; §7 is the build order, §12 the report format). The running report is `docs/build-7-1/gap-report-7-1.md`: read its progress log, "Not exactly as decided", "Questions for Kylie" and "Codex findings" first.
- **Done:** M17 (`1a17d7c6`, the weather step's keys), M16 (`6e5e1a56`, saved verdicts filed where the app looks, then held to captures from Oct 24 in `6ae4e5c5`; "Estimated" gone from verdicts), M9 / M35b / M38 / M20 (`f3f1d776`), the archive title backfill (`ff70d71b`, 1,212 rows), M21 / M32 (`a3185759`), the Codex stage 1 fixes and the named-game drop-order guard (`6ae4e5c5`), and a docs commit after it.
- **The Oct 24 nightly ran with the fixes** (`cb6b3be8`, 5:26 AM Pacific): every city's weather step fetched with the key; the M9 write-back retitled 6 Los Angeles rows, 6 New York and a few per city (it prints nothing once done). **M16's proof lands with the Oct 25 nightly:** Wed, Oct 21 should then read its saved 5.3 with no "Estimated" line. New kind of "possible copies kept" in that log: ESPN and Sidearm copies of a game with different opponents in one room on one day (Boston College, Dec 5), and an ESPN game beside a Ticketmaster suite listing (SMU, Nov 13); worth a look when the copies rule is next touched.
- **Kylie answered both gap-report questions on Oct 24** ("I want whatever is truer"; "keep"): `M16_KEYS_FROM` is `2026-10-01`, so the Oct 25 nightly files every archived day's saved verdict; bare sport labels stay. Both are in product-decisions.md (Build 7.1, Oct 24). Open: whether Compare's "Side by side" title takes Title Case (question 3).
- The working tree is clean apart from Codex's two untracked `.agents/skills/source-command-*` folders (not ours; leave them unstaged).

## Key decisions in force (newest first)
- **Oct 24 (builder's calls, recorded in the gap report):** the JamBase key rides on the weather step too; a bare matchup over 32 characters wraps rather than dropping the opponent (named games keep build 5's order); a bare feed program gives a bare sport label; the M9 backfill runs on read, in the nightly, and over the archive files.
- **Oct 23 (Kylie), build 7.1 locks:** no verdict ever says "Estimated" (M16); every college and school game carries a sport label, Football included (M38); Title Case on every heading (M2); weather Flow X (M3); the Attended card at the bottom without gold (M7); Upcoming future-only (M22) and Activity backward-only (M24); city switcher rows 36pt (M14); Settings D with the Temperature Units row second in "App & Account" (M19, M40); the calendar in verdict colors, Sunday first (M29); the test-account seed spec (M15); the small-text pass with its exceptions (M39). Full list in the notes.
- **Oct 23 (Kylie), data:** FC/CF means soccer; a school's own site wins on the room; the drive-time rule (64 minutes inside, Further out to 180, several downtowns where a region has them); one room can count for two cities; convention halls store no capacity.
- **Build 7 locks (Oct 22)** and **sellers / stamp holds (Oct 16)**: unchanged; see the previous handoff in git history (`1e4f1bbb`) if needed.
- **Working notes:** school-feed titles are stored "Home vs. Away" like every feed and rendered "Away at Home"; `repairSidearmRow` in `sidearmSource.ts` is the one function for rows saved the old way; sideless sport codes are FB, BSB, SB, FH; new seller or feed spellings go in `aliases`; in `venues.ts` keep comments above `location`; the Ticketmaster key allows 5,000 calls a day, reset about 12:24 PM Pacific; headless checks import `node_modules/vite/dist/node/index.js` and `ssrLoadModule` a source file; the Playwright browser here sometimes captures a blank frame before data lands (wait for a text, then capture `#root`); port 3001 was taken by another session, so this one ran on 3002. Never `npm i --no-save` or `prettier --write`.

## Kylie's manual steps
1. 🚩 **SeatGeek:** still waiting on the free client id. **Remind her every session** until it lands; then the `SEATGEEK_CLIENT_ID` Actions secret and SeatGeek's logo attribution.
2. **Answer the two gap-report questions** (M16 reach; bare sport labels) when she looks at steps 2–3.
3. **Research to run:** Further out continuation 8 (Salt Lake City, Ottawa–Gatineau, Edmonton, San Antonio), in `docs/research/topics/further-out-rooms-prompt.md`; save as `further-out-rooms-answer-9.md`.

## Next
1. **Build 7.1, step 4 onward** (`build-notes-7-1.md` §7): the copy sweep (M2, M8, item 14b, the AGENTS.md copy rules), then the day page (M1, M7, M5, M6, M3 with the M40 unit read), Explore (M27, M28, M36, M37, M34, M29), the Sunday week start, Codex stage 2, and so on. Keep the gap report's freeze-build-check loop per step.
2. **Read the Oct 24 nightly log** for the three proofs above, each city's Ticketmaster call count, and "possible copies kept" lines.
3. **Hard access** for the new 5,000+ rooms: `node scripts/venue-access.mjs --new` (the elevation services answered 429 on Oct 23).
4. **When delivery 9 lands:** fold it the same way as 1–8, then write continuation 9 (Portland onward).

**Next command to run:**
```bash
git pull && sed -n 1,30p docs/build-7-1/gap-report-7-1.md
```
