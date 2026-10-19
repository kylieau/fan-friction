# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`: open questions are at its top (the K-list), build follow-ups under **Next** ("Build 6 follow-ups" is newest, then "Past dates", then "Build 5 follow-ups"). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest sections at the bottom; the Oct 19 entries end the file). Build 6's notes are `docs/build-6/build-notes-6.md`; the Oct 19 reviews are `docs/reviews/gap-reviews/gap-review-claude-code-2026-10-19-0903-pt.md` and `docs/reviews/tester-readiness-reviews/tester-readiness-review-claude-code-2026-10-19-0918-pt.md`.

_Last synced: Oct 19, 2026 (evening), Claude Code (Fable 5.1), at `main`'s head, pushed. Kylie's standing instructions: one commit per step, straight to `main`; post-build tweaks are committed locally and pushed when she says (she said push on Oct 19); every tweak she sends is first judged for UX and for conflicts with earlier decisions, and an obvious conflict goes back to her as a question (advisor first). A tap check is part of "measured": the Oct 19 build had recorded the Stubs two-tap as built from screenshots, and the tile could not be tapped._

## Current state
**Everything below is committed, built and pushed.** `npm run build`, `scripts/titles-check.mjs` and `scripts/event-types-check.mjs` pass at the head. One other session's uncommitted note sits at the top of `BACKLOG.md` ("Review-process update, requested by Kylie, Oct 19"): left unstaged, not acted on; it is a note in a file until she confirms it.

**Oct 19 (this session), in order:**
- **Two reviews of build 6** (gap and tester-readiness), each a dated file plus a README row; Kylie: "fix the clear ones". Fixed: the Stubs read tile could not be tapped (a CSS overlay swallowed it); the picker's search matched stored labels, not the words on its rows; today's finished game vanished from the Faves timeline until midnight; an "elsewhere" stub's tile and a friend's cityless row opened the default city; a plan row opened the date page instead of the event; the sheet's All row nested a button; the Today pill was 34 px and Show / Hide had no tap area; a search hit opens the Map with that event's card; a card with no count no longer says "No c…". Open for her: G2, G7, G8, G10, G13, R4, R8, R10, polish (BACKLOG, "The Oct 19 reviews").
- **Team naming, her answers to the proposal, built** (`docs/archive/proposals/team-naming-proposal.md`; product-decisions "Team naming: Kylie's Oct 19 answers"): NO never a shortcut, STL / TB before a one-word nickname only, brand short names as compact names (LAFC, Sporting KC), MHKY / WHKY, words on the paired label line, one reviewed school word per college program (`SCHOOL_WORDS` in `src/data/teams.ts`, guarded by the full name), the four women's volleyball programs read Women's, Texas and Alberta sides filled; 11 pt = 11 CSS px. **To check with her:** the one-word rule also gives "TB Rowdies", "STL Battlehawks", "STL Ambush".
- **ESPN preseason:** the feed asks for `seasontype=1`, so played preseason games stay listed; the Oct 19 week-back cleanup had dropped the Lakers' Oct 13 and 16 games (the Oct 20 nightly run re-adds them from the pushed code).
- **Early October diagnosed:** nothing pruned; the strip's 14 days was design; Oct 5 is an honest No data (no Ticketmaster before Oct 6); the List started at the first capture. **Built:** the strip and the List reach back to the earliest day with events within the last year (LA: Oct 27, 2025), reads loading around the day in view.
- **Miami Oct 20 (10.0 Cooked) fixed and re-stamped:** the Gridlock fallback for rooms with no capacity (flagged in the why line), Pitbull Stadium 20,000, Homestead-Miami Speedway 46,000 (builder's fill from the register; **confirm**), Miami Oct 18–20 recomputed in seven archive captures (Oct 20 now 1.5); the nightly job re-upserts the shared snapshots from the files.

## Changes made this session (all committed and pushed)
`src/data/` (teams, favorites, venues, index, types, formula/gridlock, sources/espnSource, startForecastIndex), `src/components/` (DayStrip, FollowRow, FollowingSheet, StubRows, useFavoriteRows, SearchSheet, SearchButton), `src/screens/` (FavoritesScreen, FollowingScreen, MapScreen), `src/lib/` (eventTitle, view), `src/map/CrowdLayer.tsx`, `src/styles.css`, `data/schedule-archive/miami/2026-10-13..19.json`, `docs/product/product-decisions.md`, `docs/reviews/` (two reviews, two READMEs, 15 screenshots), `docs/archive/proposals/team-naming-proposal.md`, `docs/research/topics/team-naming-levels-answer.md` (closed), BACKLOG (this session's hunks only).

## Key decisions in force (newest first; older ones are in product-decisions and BACKLOG)
- **Oct 19 (Kylie):** the strip and List reach back a year; Gridlock's blank-capacity fallback; the naming answers; "fix the clear ones" from the reviews; 11 pt means 11 CSS px and the 12.5 px lines stand. Leans not confirmed: "Show and manage" as the sheet title, "All N on timeline", filters kept per session, a search hit forcing the Map view, Homestead's 46,000.
- **Elevation service (Kylie, Oct 17):** stored access numbers stay on Open-Elevation; Open-Meteo is the outage fallback only.
- **Held by Kylie (Oct 16):** whether the friction stamp should use the end-of-day fallback on a date with no start time. Do not change the stamp.
- **Testing notes:** Chromium at `/usr/bin/chromium` with `--no-sandbox` through `playwright-core` (scripts in the scratch dir; `lib.cjs` there has the launch and context helpers); skip the city picker with `localStorage['fan-friction:home-metro'] = JSON.stringify('la')`; the page scrolls inside `.page`, the Explore List inside `.explore-list-scroll`, the timelines inside `.timeline-scroll`; `?view=map|list` wins over the remembered view; event pages outside home need `?metro=<id>`; headless cannot sign in (no test account exists; a Supabase email-and-password user would be the cheap path); a vite dev server may already be on 3001 (`lsof -ti:3001`); **vite SSR scripts (the formula, the archive, titles-check) need about 2 GB free: run them one at a time, and stop the dev server first if they are killed (exit 137)**; Node 24 imports `src/data/teams.ts` directly (type-only imports). Rebase fails in this editor (autosave); `git fetch` and `git merge origin/main` instead. Never `npm i --no-save` or `prettier --write`.

## Kylie's manual steps
1. 🚩 **SeatGeek:** still waiting on the free client id (applied Oct 17). **Remind her at the start of every session until it lands**; then it goes in the `SEATGEEK_CLIENT_ID` Actions secret.
2. **Confirm or change:** Homestead-Miami Speedway 46,000; the three minor clubs under the STL / TB rule; the review items left open (BACKLOG, "The Oct 19 reviews").
3. **Phone checks:** the Friends timeline and the sheet's Friends side signed in; the Stubs timeline's two taps; the strip scrolled a year back; Miami Oct 20 on the live site after the deploy.
4. **The artist-genres proposal** (the second research answer, `docs/research/topics/artist-genres-answer.md`) has not been brought to her yet; next session, one proposal before building anything from it.
5. **Small-rooms research, next installment** (Chicago onward) and the **seller-terms prompt** (BACKLOG, "Past dates", "Build 5 follow-ups").

## Open (details in BACKLOG)
1. **Confirm the Oct 20 nightly run** re-added the two Lakers games and re-upserted Miami's snapshots (its log: Los Angeles and Miami lines).
2. **The List's "Earlier" step** walks week by week; a skip-to-the-next-event step would be quicker (BACKLOG, "Early-October days").
3. **At the start of a resumed session:** remind her of SeatGeek, ask for new UX notes, then bring the artist-genres proposal.

**Next command to run:**
```bash
git pull && npm run dev   # localhost:3001 (or reuse the server already there)
```
