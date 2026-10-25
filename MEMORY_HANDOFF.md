# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md` (the top sections are the Oct 23 Further out fold and former names; open questions follow, then build follow-ups under **Next**, including "Build 7.1 follow-ups"). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest at the bottom).

_Last synced: Oct 24, 2026, evening Pacific, Claude Code (Opus 5.5 as builder, Fable as advisor), at `main`'s head, pushed. Kylie's standing instructions: build straight on `main`, pushed, no branches or PRs; `git fetch` first (the nightly pushes to `main` at about 6 AM Pacific, 13:00 UTC); stage files by name; every tweak is judged for UX and for conflicts with earlier decisions, and a conflict goes back to her as a question; mock first for anything new on screen; multiple choice with the builder's lean marked; she signs up for nothing beyond a plain free API key; use the advisor before committing to an approach and before calling work done; Codex read-only reviews after each item group._

## Current state
**Build 7.1 is finished: steps 1–14 are done, committed and pushed** (the spec is `docs/build-7-1/build-notes-7-1.md`; the report is `docs/build-7-1/gap-report-7-1.md`, header "Finished"). `npm run build`, `node scripts/storage-check.mjs` (42 checks) and `node scripts/titles-check.mjs` pass.
- **Reviews:** Codex stages 4 and 5 ran in the evening once credits returned; all 12 findings are fixed (`4257e7ea`; 45 storage checks). Earlier, fresh Claude agents had covered both stages' focus lists while Codex was out.
- **After the build (Kylie, Oct 24):** the Explore List calendar's legend and "Each pair" line are gone and the tiles stay as they are (`59ec513f`); your answer on event rows is now its icon alone at the right end of the venue line, no word (`663da922`; product-decisions.md, last line).
- **Open questions for Kylie** (report, "Questions for Kylie"): 3 (Compare's "Side by side" in Title Case?), 4 (the nightly's stored `why` wording), 5 (the weather card's summary sentence needs a text forecast the app doesn't store), 6 (keep the friction pill on Up Against, against the M33 mock?), 7 (a flagged past season game now clears on its own once the schedule lists it again; built as a builder's call).
- The working tree is clean apart from two untracked `.agents/skills/source-command-*` folders that aren't this session's (likely Codex's); leave them unstaged.

## Key decisions in force (newest first)
- **Oct 24 (builder's calls, all in the report's table and "Builder's-call decisions"):** a flagged (`gone`) season plan never settles, clears when its game is listed again, and goes when the season is stopped; the date page skips flagged plans; the weekday-night title rule covers wrestling promotions only (WWE, AEW, TNA, ROH, NWA, NJPW; `TITLE_VERSION 'weekday-night-b71'`); the event header strips the year only for named titles and games; buttons and links stay sentence case ("Edit stub", "Share this event"), labels and headings Title Case; M26's "Seen N" is dropped from the Faves tiles; the M39 kept exceptions (read-box words, the Away tag, the date box weekday, Map chips and strip, the 36pt switcher rows, timeline bars) and invisible tap extensions; season tickets ride in the settings JSON and ordinary plan rows (no migration).
- **Oct 24 (Kylie):** `M16_KEYS_FROM` is `2026-10-01` (every archived day's saved verdict files at the Oct 25 nightly); bare sport labels ("Volleyball") stay.
- **Working notes:** season plans carry the catalog's own event id; `reconcileSeasonPlans` runs on every schedule load through `onTeamSchedule` and at app start via `refreshSeasonTickets()`; Profile & Settings sub-pages live on `?page=` (old `#section` / `?panel=` addresses fold into it); headless checks import `node_modules/vite/dist/node/index.js` and `ssrLoadModule` a source file; the date page's address is `/date/<date>?metro=<id>`; the Playwright browser sometimes captures a blank frame before data lands (wait for a text, then capture); port 3001 belongs to another session, this one used 3002 (stopped at the end). Never `npm i --no-save` or `prettier --write`.

## Kylie's manual steps
1. 🚩 **SeatGeek:** still waiting on the free client id. **Remind her every session** until it lands; then the `SEATGEEK_CLIENT_ID` Actions secret and SeatGeek's logo attribution.
2. **Answer questions 3–7** in the gap report.
3. **Phone checks signed in** (the report's "For Kylie to check on a phone"): the event page's status chip and Your Stub card, the Profile & Settings profile card and Followers row, friends' rows on Upcoming, Oct 21's saved verdict after the Oct 25 nightly, the Hollywood Bowl or Greek Theatre weather card.
4. **The M15 seed, when she wants test account A filled:** `docs/reference/test-account-seed.md` (dry run first; agents never run its write path or open her export).
5. **Research to run:** the two M35 prompts (`docs/research/topics/arts-fill-rates-prompt.md`, `ncaa-attendance-sources-prompt.md`) and Further out continuation 9, Portland onward (`docs/research/topics/further-out-rooms-prompt.md`, saved as `further-out-rooms-answer-10.md`; delivery 9 was saved and folded Oct 25).

## Next
1. **Ask Kylie for new UX notes and her answers to questions 3–7**, then fold any answer that changes code.
2. **Read the Oct 25 nightly log** for M16's proof (Wed, Oct 21 reads its saved 5.3) and any "possible copies kept" lines.
3. **Hard access** for the new 5,000+ rooms: `node scripts/venue-access.mjs --new` (the elevation services answered 429 on Oct 23).

**Next command to run:**
```bash
git pull && sed -n 1,60p docs/build-7-1/gap-report-7-1.md
```
