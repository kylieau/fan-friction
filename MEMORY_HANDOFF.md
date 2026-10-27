# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md` (the top sections are the Further out fold, show estimates and the Broadway houses, and former names; open questions follow, then build follow-ups under **Next**). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest at the bottom).

_Last synced: Oct 27, 2026 (afternoon Pacific), Claude Code (Opus 5.5 as builder, Fable as advisor, Codex as read-only reviewer), at `main`'s head after `13b146f4`, pushed. Kylie's standing instructions: build straight on `main`, pushed, no branches or PRs; `git fetch` first (the nightly pushes to `main` at about 6–8 AM Pacific; check `git status -sb` after the fetch, one fetch this week silently missed two commits); stage files by name; every tweak is judged for UX and for conflicts with earlier decisions, and a conflict goes back to her as a question; mock first for anything new on screen; multiple choice with the builder's lean marked; she signs up for nothing beyond a plain free API key; use the advisor before committing to an approach and before calling work done; Codex read-only reviews after each item group, and (Oct 26) the advisor and Codex check each other's findings before any tweak._

## Current state
**Waiting on Kylie's review of the "Up to N" mocks** (`docs/build-7-1/mockups/followups-oct27/`, INDEX.md there): rows A "≤14k" grey (lean) or B "Up to 14k"; "Up to 10,258" on the event page; the switch renamed "No Estimate › Show events with no estimate"; a ceiling does not count against the crowd-size range (lean). She is folding a Cursor/Grokbot review of them (the prompt was given to her) into a review form and will paste it back; go through it with the advisor (and Codex) before building. Nothing else in progress; everything committed, pushed and verified (`npm run build`; `city-build-check`, `venue-match-check`, `shared-ids-check`, `addon-filter-check`, `storage-check`, `titles-check` all pass).

Done Oct 26–27 (details in BACKLOG and product-decisions.md):
- **Further out research finished.** Deliveries 10 (Portland, Raleigh–Durham, St. Louis, Pittsburgh; 83 rooms) and 11 (Milwaukee and the Los Angeles extras; 64 rooms) folded; delivery 12 resolved the holds on the 29 inside-city rooms (8 cleared, 21 held, each status in the room's capacity note). Brookside at the Rose Bowl now 35,000; Roto-Rooter Park 4,254 seated (under the floor; it also nudges Salem's gridlock baseline, documented); four points moved and re-measured. No continuation: the brief is done.
- **Show estimates** (Kylie, Oct 26, option B): the 41 Broadway houses (39 added), the Met, the Christmas Spectacular, indoor Québec show rooms; the (i) card names the source.
- **Racetracks and rodeo grounds take every Ticketmaster sports listing** (Kylie, Oct 26); race-weekend camping, VIP and multi-day passes drop as add-ons. Homestead's Nov 6–8 NASCAR weekend came through as exactly three race days.
- **Matching and data fixes from two Codex rounds:** same-named rooms go to the nearer one; arenas carry their resident's sport; Brookside's Ticketmaster id moved off the Rose Bowl, with a shared-id check; a by-id Ticketmaster window over 1,000 results splits; `venue-access.mjs --new` keeps earlier rows.
- **Research saved:** `arts-fill-rates-answer-codex.md`, `ncaa-attendance-sources-answer-codex.md` with its fixture JSON.
- **Oct 27 nightly:** New York 971 events over two weeks with Broadway (no Ticketmaster overflow warning); the run is red because one city's weather fetch fails each night after three retries (Austin on Oct 27; Tampa, Kansas City, San Antonio on Oct 26); that city keeps yesterday's weather. Left as is unless Kylie wants it quieter.
- The working tree is clean apart from two untracked `.agents/skills/source-command-*` folders that aren't ours; leave them unstaged.

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
1. Take Kylie's review form and the Cursor/Grokbot mock review; reconcile with the advisor and Codex; build "Up to N" and the switch rename as she decides.
2. Then the school box-score attendance reader (BACKLOG, "Show estimates and the Broadway houses"): visible attendance on completed home games, at each site's crawl pace, medians per program and room.
3. Read each nightly log for the weather step, New York's page count, race and rodeo listings and any add-on that slips through.

**Next command to run:**
```bash
git fetch && git status -sb && git log --oneline -5 && gh run list --limit 2
```
