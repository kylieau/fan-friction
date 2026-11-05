# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md` (the top sections are the Further out fold, show estimates and the Broadway houses, and former names; open questions follow, then build follow-ups under **Next**). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest at the bottom).

_Last synced: Nov 4, 2026 (evening Pacific), Claude Code (Opus 5.5 as builder, Fable as advisor, Codex as read-only reviewer), at `main`'s head after `fa89ddfa`, pushed. Kylie's standing instructions: build straight on `main`, pushed, no branches or PRs; `git fetch` first (the nightly pushes to `main` at about 6–8 AM Pacific; check `git status -sb` after the fetch, one fetch this week silently missed two commits); stage files by name; every tweak is judged for UX and for conflicts with earlier decisions, and a conflict goes back to her as a question; mock first for anything new on screen; multiple choice with the builder's lean marked; she signs up for nothing beyond a plain free API key; use the advisor before committing to an approach and before calling work done; Codex read-only reviews after each item group, and (Oct 26) the advisor and Codex check each other's findings before any tweak._

## Current state
**Ready for a large build file from Kylie** (mockups plus instructions, announced Nov 4). Earlier build files lived in `docs/build-7-1/` (build notes, gap report, `mockups/<batch>/INDEX.md`, `research-prompts/`); a new build gets its own `docs/build-<n>/` folder the same way. Before building: read the whole file, check it against the decisions below and `docs/product/product-decisions.md`, and send conflicts back as questions. Nothing in progress; the working tree is clean apart from two untracked `.agents/skills/source-command-*` folders that aren't ours (leave them unstaged). `npm run build` passes and the live site deployed `fa89ddfa`.

Still open from before: **the "Up to N" mocks** (`docs/build-7-1/mockups/followups-oct27/`, INDEX.md there): rows A "≤14k" grey (lean) or B "Up to 14k"; "Up to 10,258" on the event page; the switch renamed "No Estimate › Show events with no estimate"; a ceiling does not count against the crowd-size range (lean). Kylie was folding a Cursor/Grokbot review into a form; ask whether the new build replaces this.

Done Oct 27 – Nov 4 (details in BACKLOG and product-decisions.md):
- **UCLA's other sports** (Kylie, Oct 27: ESPN where it has them, a one-time copy of the rest, recheck in December; ticketed sports only): women's and men's volleyball from ESPN; men's and women's soccer and men's water polo copied once from UCLA's site (`src/data/seed/uclaSchedule2026.ts`, source `school-site`, 32 home games); four rooms added (Wallis Annenberg 2,145, Spieker 800, Jackie Robinson 1,838, Easton 1,328). College volleyball and other small-draw sports with no draw cap at 4,999 so Pauley's 13,800 never feeds friction; the nightly removes past copied rows. The wrong "Spieker Aquatics Complex" alias (Cal's pool in Berkeley) was removed.
- **Nightly archive fixed (Nov 4):** the schedule archive skipped every city Nov 2–4 because `src/data/weatherIndex.ts` (50 MB) stopped parsing; scripts now read `data/weather/<metro>/*.json` directly. Those three mornings can't be backfilled.
- **Deploys fixed (Nov 4):** the expected-draw chunk crossed the 3 MiB offline-cache limit; raised to 4 MiB in `vite.config.ts`. Two cleanups proposed, not built (BACKLOG): retire `weatherIndex.ts`; load the expected-draw and results tables from the catalog instead of the bundle.
- **Open small questions for Kylie:** keep or drop men's water polo (Spieker seats 800, under the ~1,000 pre-list line); approve the two cleanups.

## Key decisions in force (newest first)
- **Oct 27 (Kylie):** school data (SIDEARM calendars, a later box-score attendance reader) is read as personal use while the app stays private; a public or paid app needs SIDEARM's, WMT's and ESPN's written permission first (a limitation to commercializing). The box-score reader is approved in principle and waits until after "Up to N". A festival-wide admission listed at several stages counts once at the main room (when it happens); junior-college football at 6,000+ rooms stays as it is until a proposal from the college attendance research (Monarch Stadium's free LAVC games included).
- **Oct 26 (Kylie):** show estimates only from published figures (display and pull only; the friction gate for shows still goes by the room); racing and rodeo rooms take every sports listing; build 7.1 questions 3–7 answered (leans stand, no weather summary line, the pill on both cards).
- **Further out folds:** every row of the research's two tables comes in (holds in the capacity note); sides by `node scripts/further-out-drive.mjs <metro>` (report first, `--write` only when the differing rooms are the new ones); Ticketmaster ids with `node scripts/ticketmaster-venues.mjs --ids=<new ids>`, exact names 1.5–10 km by hand; former names that collide inside one city stay out; an arena gets its resident's sport only when sourced.
- **Working notes:** headless checks import `node_modules/vite/dist/node/index.js` and `ssrLoadModule` a source file; the date page is `/date/<date>?metro=<id>`; mocks are injected into the live app in the headless phone; port 3001 belongs to another session (this one used 3003, stopped); macOS has no `timeout`. Never `npm i --no-save` or `prettier --write`.

## Kylie's manual steps
1. **From Dec 1, 2026: the UCLA schedule recheck** (BACKLOG, "UCLA schedule recheck"): remind her, then read the spring schedules once.
2. 🚩 **SeatGeek:** still no free client id (Oct 26). **Remind her every session** until it lands; then the `SEATGEEK_CLIENT_ID` Actions secret and SeatGeek's logo attribution.
3. **Review the "Up to N" mocks** and paste back the Cursor/Grokbot review with her form.
4. **Phone checks signed in** (the 7.1 report's list), the row icons, the weather beside the venue name, **New York on the Map** (39 muted pins in Midtown) and a Broadway show's event page.
5. **The M15 seed, when she wants test account A filled:** `docs/reference/test-account-seed.md` (dry run first; agents never run its write path or open her export).

## Next
1. **The new build file:** save it under `docs/build-<n>/` (mockups in `mockups/`), read it whole, raise conflicts with locked decisions as questions, then build in item groups with advisor and Codex checks.
2. Check the Nov 5 nightly log: `archive-schedule` should save every city again, and the catalog write should report its stale school-copy removals.
3. "Up to N" as Kylie decides (unless the new build replaces it).
4. Then the school box-score attendance reader (BACKLOG, "Show estimates and the Broadway houses"): visible attendance on completed home games, at each site's crawl pace, medians per program and room.
5. Read each nightly log for the weather step, New York's page count, race and rodeo listings and any add-on that slips through.

**Next command to run:**
```bash
git fetch && git status -sb && git log --oneline -5 && gh run list --limit 2
```
