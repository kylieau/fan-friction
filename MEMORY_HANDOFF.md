# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`: open questions are at its top (the K-list), build follow-ups under **Next** ("Build 6 follow-ups" is newest, then "Past dates", then "Build 5 follow-ups"; Further out is the "Regional events" item under Build 5 follow-ups). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest sections at the bottom; the Oct 20 afternoon entries end the file). Reviews run from `docs/reviews/review-prompt.md` (shared, two modes).

_Last synced: Oct 20, 2026, about 4:40 PM Pacific, Claude Code (Opus 5.5), at `main`'s head, pushed. Kylie's standing instructions: one commit per step, straight to `main`, pushed; every tweak she sends is first judged for UX and for conflicts with earlier decisions, and an obvious conflict goes back to her as a question (advisor first). A tap check is part of "measured". She likes multiple choice with the builder's lean marked._

## Current state
**Everything is committed, built and pushed; the working tree is clean** apart from an untracked `.agents/` folder (copies of the handoff skills, made by another tool; not ours, left alone). `npm run build` passes at the head; `scripts/titles-check.mjs` and `scripts/addon-filter-check.mjs` pass.

**This session (Oct 20 afternoon), all measured at phone size with Toyota Arena test rows injected in the browser only:**
- **Fix: one passed plan makes one stub.** Settling runs at app start and again after the account loads; overlapping runs both added the stub (city arenas too). Now skipped at save time, and a phone's stored repeats collapse to one on read (`personalLog.ts` `settlePassedPlans`, `localStore.ts` `firstById`). Measured: one stub per plan; a seeded repeat shows one row (two before).
- **Fix: a quoted tour after the act reads "Act · Tour"** ("Ramon Ayala · Historia De Un Final", "Don Omar · The Last King World Tour"); other quotes lose the spaces inside them (`eventTitle.ts` `showParts`; three new cases in `titles-check.mjs`).
- **Further out, Kylie's three leans, built:** the shorter Settings line ("2-hour" never breaks); the event page header names the town plus a quiet "Further out" line, no drive, no This day card; a further-out event's tile is plain "—" with no tap on every row with a tile (one rule: `isFurtherOut` for a catalog event, `isFurtherOutRoom(metroId, venue)` for a stored row; wired through `ratingForEntry`, `PlanRow`, Following's Faves and Friends rows, Home's next rows, a favorite's page, More dates, search hits). Measured: "—" with no tap on Stubs plan and stub, Home next and recent, the Faves row and the favorite's page; a Crypto.com Arena control plan keeps 4.7 Spicy and its tap. Re-measured: Nov 7 LA verdict 4.7 with 25 lineup events with or without the Toyota Arena rows; one muted map chip with the switch on, none off.
- **Closed as already decided:** "Verdict" as the date read's name (Kylie, Oct 19) and the 12.5 px question (11 pt = 11 CSS px); BACKLOG lines fixed. **Faves row's blue lead line confirmed** (Kylie, Oct 20 afternoon).

## Key decisions in force (newest first; full text in product-decisions)
- **Oct 20 afternoon (Kylie):** the three Further out leans as above ("1/ lean 2/ lean minus drive time 3/ lean"); the Faves row's lead line stays a blue link.
- **Oct 20 (Kylie):** Further out shown by two switches (map; date pages and lists, search included), both on, favorites always; crowd size gets the same map / lists split with one range.
- **Oct 19 evening (Kylie):** rankings from ESPN; regional events as "Further out", never in a verdict; the add-on layered rule; the five sellers stay unlisted and unasked.
- **Oct 19 (Kylie):** Verdict / friction words; 11 pt means 11 CSS px.
- **Held by Kylie (Oct 16):** the stamp's end-of-day fallback on a date with no start time. Do not change the stamp.
- **Elevation (Oct 17):** stored access numbers stay on Open-Elevation; Open-Meteo is the outage fallback only.
- **Codex (Oct 20):** Claude Code may run the Codex tool here without a prompt (`.claude/settings.json`); use it for second opinions when she asks.
- **Working notes:** Chromium at `/usr/bin/chromium` with `--no-sandbox` through `playwright-core`; scratch scripts need `NODE_PATH=/workspaces/fan-friction/node_modules`; `lib.cjs` (`launch()`, `phone(browser, { log })`) and `further-rows.json` (LA's live Toyota Arena rows) are in the Oct 20 sessions' scratchpads under `/tmp/claude-1000/-workspaces-fan-friction/*/scratchpad/`. `phone()` re-seeds the log on every navigation, so a reload test must seed its final state up front. To show catalog rows the nightly hasn't written yet, intercept `**/rest/v1/events?*` and append rows (nothing written to the shared table); the map page never goes network-idle, so wait 8–9 s. Home is at `/home` (`/` opens Explore); the settings panel at `/you?panel=crowd`; Log an event's search at `/you/add`. Low memory can stop the dev server (restart with `npm run dev`). Vite SSR scripts need about 2 GB free: one at a time. `TICKETMASTER_API_KEY` is in `.env.local`. **The nightly job pushes to `main`: `git fetch` and `git merge origin/main` before pushing, and never hide `git push` errors.** Rebase fails in this editor. Never `npm i --no-save` or `prettier --write`. The pre-commit hook moves a closed `docs/product/` doc but not its same-folder images: `git mv` them first (the Further out proposal now has nine).

## Kylie's manual steps
1. 🚩 **SeatGeek:** still waiting on the free client id (none as of Oct 20 afternoon). **Remind her at the start of every session until it lands**; then the `SEATGEEK_CLIENT_ID` Actions secret, with SeatGeek's linked logo attribution wherever its data shows.
2. **Research to run** (no answers yet): the artist coverage audit (`docs/research/topics/artist-coverage-audit-prompt.md`), the small-rooms third installment (`docs/research/city-builds/small-rooms-big-cities-prompt.md`, answer `-answer-3.md`), and every city's further-out rooms (`docs/research/topics/further-out-rooms-prompt.md`). Save each answer beside its prompt.
3. **Phone checks (deferred; still worth doing):** the Friends timeline and the sheet's Friends side signed in; the "↑ N earlier" line on Stubs; the "No verdict" tag on a Faves row; the genre word with her own artist favorites; the Stubs filter-row fade; Near home today; the two Crowd size and two Further out switches; Further out on Los Angeles after the Oct 21 run (Toyota Arena on the date page, the List, the map, and its event page's "Ontario" header).

## Open (details in BACKLOG)
1. **After the Oct 21 nightly run** (BACKLOG, the Regional events item): LA's catalog holds Toyota Arena rows; nothing at the four rooms in an LA lineup or verdict; date page, List and map show them; re-read the run's dropped add-ons; Miami's re-upsert and "open house" in search are still unchecked from Oct 20.
2. **Further out follow-ups:** other cities' rooms (research above); a room within 2 hours of two covered cities shows for one; Escape Halloween and Nocturnal Wonderland need their grounds on file and the festival list wired.
3. **At the start of a resumed session:** remind her of SeatGeek and ask for new UX notes (none Oct 20 afternoon).

**Next command to run:**
```bash
git pull && npm run dev   # localhost:3001 (or reuse the server already there)
```
