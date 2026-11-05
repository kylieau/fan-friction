# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md` (the top sections are the Further out fold, show estimates and the Broadway houses, and former names; open questions follow, then build follow-ups under **Next**). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest at the bottom).

_Last synced: Nov 4, 2026 (evening Pacific), after the build 7.2 notes and mockups landed on `main`. Kylie's standing instructions: build straight on `main`, pushed, no branches or PRs; `git fetch` first; stage files by name; every tweak is judged for UX and for conflicts with earlier decisions, and a conflict goes back to her as a question; mock first for anything new on screen; multiple choice with the builder's lean marked; she signs up for nothing beyond a plain free API key; use the advisor before committing to an approach and before calling work done; Codex read-only reviews after each item group, and the advisor and Codex check each other's findings before any tweak. Nov 4 add: give the builder (Claude Fable) full discussion context in the 7.2 notes, not only the locked pick._

## Current state
**Build 7.2 notes are on `main` and locked for building (Kylie, Nov 4).** Source of truth: `docs/build-7-2/build-notes-7-2.md` (Start Here at the top for Claude Fable). Mockups: `docs/build-7-2/mockups/` (`INDEX.md` marks FINAL vs superseded). Covers the Oct 30 review answers and the Nov 4 mock picks (R1a Fact List + small chevron, R2a/R2b Activity cards, R3a ceilings as "cap", Getting There behind a Traffic/Roads setting, R5a plan rows match Activity, Stub From Faves, Watching Season). Builder Decides picks and research tasks (Event Types taxonomy, weather plan, I6) still open. The older "Up to N" mock wait is superseded by R3a ("cap"); ship row ceilings after I6. Before building: read the whole 7.2 notes file, check conflicts against `docs/product/product-decisions.md` and build 7.1 notes, and send real conflicts back as questions.

Done Oct 27 – Nov 4 (details in BACKLOG and product-decisions.md):
- **UCLA's other sports** (Kylie, Oct 27: ESPN where it has them, a one-time copy of the rest, recheck in December; ticketed sports only): women's and men's volleyball from ESPN; men's and women's soccer and men's water polo copied once from UCLA's site (`src/data/seed/uclaSchedule2026.ts`, source `school-site`, 32 home games); four rooms added (Wallis Annenberg 2,145, Spieker 800, Jackie Robinson 1,838, Easton 1,328). College volleyball and other small-draw sports with no draw cap at 4,999 so Pauley's 13,800 never feeds friction; the nightly removes past copied rows. The wrong "Spieker Aquatics Complex" alias (Cal's pool in Berkeley) was removed.
- **Nightly archive fixed (Nov 4):** the schedule archive skipped every city Nov 2–4 because `src/data/weatherIndex.ts` (50 MB) stopped parsing; scripts now read `data/weather/<metro>/*.json` directly. Those three mornings can't be backfilled.
- **Deploys fixed (Nov 4):** the expected-draw chunk crossed the 3 MiB offline-cache limit; raised to 4 MiB in `vite.config.ts`. Two cleanups proposed, not built (BACKLOG): retire `weatherIndex.ts`; load the expected-draw and results tables from the catalog instead of the bundle.
- **Open small questions for Kylie:** keep or drop men's water polo (Spieker seats 800, under the ~1,000 pre-list line); approve the two cleanups.

## Key decisions in force (newest first)
- **Nov 4 (Kylie):** build 7.2 notes locked; Activity Fact List behind a small chevron; Activity cards A/A; crowd ceilings use "cap"; Getting There (all three) behind a Settings switch, area names only, hidden on past dates; Your Plans rows match Activity (r3); Stub From Faves long-press else swipe; Watching Season with quiet rows and auto postseason; Map totals include Crowd Size-hidden events. Full detail in `docs/build-7-2/build-notes-7-2.md`.
- **Oct 27 (Kylie):** school data (SIDEARM calendars, a later box-score attendance reader) is read as personal use while the app stays private; a public or paid app needs SIDEARM's, WMT's and ESPN's written permission first (a limitation to commercializing). The box-score reader is approved in principle and waits until after "Up to N". A festival-wide admission listed at several stages counts once at the main room (when it happens); junior-college football at 6,000+ rooms stays as it is until a proposal from the college attendance research (Monarch Stadium's free LAVC games included).
- **Oct 26 (Kylie):** show estimates only from published figures (display and pull only; the friction gate for shows still goes by the room); racing and rodeo rooms take every sports listing; build 7.1 questions 3–7 answered (leans stand, no weather summary line, the pill on both cards).
- **Further out folds:** every row of the research's two tables comes in (holds in the capacity note); sides by `node scripts/further-out-drive.mjs <metro>` (report first, `--write` only when the differing rooms are the new ones); Ticketmaster ids with `node scripts/ticketmaster-venues.mjs --ids=<new ids>`, exact names 1.5–10 km by hand; former names that collide inside one city stay out; an arena gets its resident's sport only when sourced.
- **Working notes:** headless checks import `node_modules/vite/dist/node/index.js` and `ssrLoadModule` a source file; the date page is `/date/<date>?metro=<id>`; mocks are injected into the live app in the headless phone; port 3001 belongs to another session (this one used 3003, stopped); macOS has no `timeout`. Never `npm i --no-save` or `prettier --write`.

## Kylie's manual steps
1. **From Dec 1, 2026: the UCLA schedule recheck** (BACKLOG, "UCLA schedule recheck"): remind her, then read the spring schedules once.
2. 🚩 **SeatGeek:** still no free client id (Oct 26). **Remind her every session** until it lands; then the `SEATGEEK_CLIENT_ID` Actions secret and SeatGeek's logo attribution.
3. ~~Review the "Up to N" mocks~~ **done Nov 4** (R3a: C with "cap"); build after I6.
4. **Phone checks signed in** (the 7.1 report's list), the row icons, the weather beside the venue name, **New York on the Map** (39 muted pins in Midtown) and a Broadway show's event page.
5. **The M15 seed, when she wants test account A filled:** `docs/reference/test-account-seed.md` (dry run first; agents never run its write path or open her export).

## Next
1. **Build 7.2** from `docs/build-7-2/build-notes-7-2.md` (Start Here). Run I6, then ship ceilings with "cap"; build the Nov 4 locked mock picks; record each Builder Decides choice in the notes.
2. Check the Nov 5 nightly log: `archive-schedule` should save every city again, and the catalog write should report its stale school-copy removals.
3. Then the school box-score attendance reader (BACKLOG, "Show estimates and the Broadway houses"): visible attendance on completed home games, at each site's crawl pace, medians per program and room.
4. Read each nightly log for the weather step, New York's page count, race and rodeo listings and any add-on that slips through.

**Next command to run:**
```bash
git fetch && git status -sb && git log --oneline -5 && gh run list --limit 2
```
