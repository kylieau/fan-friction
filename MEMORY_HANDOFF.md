# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`: open questions are at its top (the K-list), build follow-ups under **Next** ("Build 6 follow-ups" is newest, then "Past dates", then "Build 5 follow-ups"). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest sections at the bottom; the Oct 20 entries end the file). Reviews run from `docs/reviews/review-prompt.md` (shared, two modes).

_Last synced: Oct 20, 2026, about 2 PM Pacific, Claude Code (Opus 5.5 after a model switch; the session began on Fable 5.1 the evening of Oct 19), at `main`'s head, pushed. Kylie's standing instructions: one commit per step, straight to `main`, pushed; every tweak she sends is first judged for UX and for conflicts with earlier decisions, and an obvious conflict goes back to her as a question (advisor first). A tap check is part of "measured". She likes multiple choice with the builder's lean marked._

## Current state
**Everything is committed, built and pushed; the working tree is clean** apart from an untracked `.agents/` folder that is not this session's (left alone). `npm run build` passes at the head; `scripts/titles-check.mjs` and `scripts/addon-filter-check.mjs` pass.

**Built and measured this session (Oct 19 evening to Oct 20 afternoon), newest first:**
- **Further out** (`docs/product/further-out-proposal.md`, "Built", with screenshots). A room marked `furtherOut` (drive, town) keeps its city's `metroId` so the feeds read it; `isFurtherOut` keeps its events out of the day, the calendar, stamps, the stamp clock and gridlock zones; `CityDate.furtherOut` carries the day's 5,000+ ones. Shown on the date page (card), the Explore List (end of day), search and the map (muted chips on the drawing layer only, never grouped over a city event), behind two switches in Settings › Crowd size (both on; helper line under the heading); always on favorites' pages, Following, Home's strip. A further-out event's page has no This day card; its stub settles like any other. **Data:** Los Angeles only, four Inland Empire rooms (Toyota Arena, San Manuel Stadium, Morongo Field, Fowler Events Center; 63–83 min via `scripts/further-out-drive.mjs`, OSRM demo server). **Proof:** on a live LA pull they would have moved 13 of 19 verdicts; with the exclusion none. **Not on the live site until the Oct 21 nightly run** reads the new rooms.
- **Crowd size by surface:** one range, "Apply on the map" / "Apply on date pages and lists" (`rangeOn`), both on.
- **Fixes:** performers' "Arena Tour" / "Park Tour" no longer dropped as building tours; ALL-CAPS casing after an apostrophe and a colon ("YG · The Gentlemen's Club Tour"); a further-out stub settles.
- **Earlier (Oct 19 evening):** rankings in the event title from ESPN's `curatedRank`; the add-on filter's layered rule (act names, disclaimers everywhere, same-room parent, keep-list; SeatGeek too; the nightly log lists every drop); one spelling per league; the two Oct 19 reviews closed (reviews never move); seller-terms research answered twice and closed (none of AXS, DICE, Insomniac, Goldenvoice, Framework lists; none asked).

**The Oct 20 nightly run checked** (BACKLOG, "The Oct 20 nightly run"): Lakers preseason games back, `act` on every LA Ticketmaster row, `performerIds` and ranks present. Not checked: Miami's re-upsert, "open house" in search.

## Key decisions in force (newest first; full text in product-decisions)
- **Oct 20 (Kylie):** Further out shown by two switches (map; date pages and lists, search included), both on, favorites always; crowd size gets the same map / lists split with one range; the Further out mock approved with a helper line. Her answers this day were first logged as Oct 19 and are corrected.
- **Oct 19 evening (Kylie):** rankings from ESPN; regional events as "Further out", never in a verdict; build the add-on layered rule; the multi-day sizing yes rows (already decided Oct 16; asked again from a stale BACKLOG line); the five sellers stay unlisted and unasked; Homestead 46,000 confirmed; "Artist" placeholder and the four league calls as built.
- **Oct 19 (Kylie):** Verdict / friction words; the artist-genres answers; the strip and List reach back a year; Gridlock's blank-capacity fallback; 11 pt means 11 CSS px.
- **Held by Kylie (Oct 16):** the stamp's end-of-day fallback on a date with no start time. Do not change the stamp.
- **Elevation (Oct 17):** stored access numbers stay on Open-Elevation; Open-Meteo is the outage fallback only.
- **Codex (Oct 20):** Claude Code may run the Codex tool here without a prompt (`.claude/settings.json`); use it for second opinions when she asks.
- **Working notes:** Chromium at `/usr/bin/chromium` with `--no-sandbox` through `playwright-core`; scratch scripts need `NODE_PATH=/workspaces/fan-friction/node_modules`; `lib.cjs` (`launch()`, `phone(browser, { log })`) is in this session's scratchpad. To show catalog rows the nightly hasn't written yet, intercept `**/rest/v1/events?*` in Playwright and append rows (nothing is written to the shared table); the map page never goes network-idle, so wait a fixed 8–9 s. The settings panel opens at `/you?panel=crowd`. Vite SSR scripts need about 2 GB free: one at a time. `TICKETMASTER_API_KEY` is in `.env.local`. **The nightly job pushes to `main`: `git fetch` and `git merge origin/main` before pushing, and never hide `git push` errors** (11 commits sat unpushed on Oct 20). Rebase fails in this editor. Never `npm i --no-save` or `prettier --write`. The pre-commit hook moves a closed `docs/product/` doc but not its same-folder images: `git mv` them first (the Further out proposal has five).

## Kylie's manual steps
1. 🚩 **SeatGeek:** still waiting on the free client id. **Remind her at the start of every session until it lands**; then the `SEATGEEK_CLIENT_ID` Actions secret, with SeatGeek's linked logo attribution wherever its data shows.
2. **Research to run** (she said she'll attach answers): the artist coverage audit (`docs/research/topics/artist-coverage-audit-prompt.md`), the small-rooms third installment (`docs/research/city-builds/small-rooms-big-cities-prompt.md`, answer `-answer-3.md`), and every city's further-out rooms (`docs/research/topics/further-out-rooms-prompt.md`). Save each answer beside its prompt.
3. **Phone checks (deferred; still worth doing):** the Friends timeline and the sheet's Friends side signed in; the "↑ N earlier" line on Stubs; the "No verdict" tag on a Faves row; the genre word with her own artist favorites; the Stubs filter-row fade; Near home today; new: the two Crowd size and two Further out switches, and Further out on Los Angeles after the Oct 21 run (Toyota Arena shows on the date page, the List and the map).

## Open (details in BACKLOG)
1. **After the Oct 21 nightly run:** check the log's dropped add-ons again and that LA's catalog holds Toyota Arena rows; confirm nothing at the four rooms appears in an LA lineup or verdict.
2. **Further out follow-ups:** other cities' rooms (research above); a room within 2 hours of two covered cities shows for one; Escape Halloween and Nocturnal Wonderland need their grounds on file and the festival list wired.
3. **Leans she may change:** the Further out helper line's wording; no This day card on a further-out event's page; a further-out stub or Following row shows its city's verdict tile.
4. **At the start of a resumed session:** remind her of SeatGeek and ask for new UX notes.

**Next command to run:**
```bash
git pull && npm run dev   # localhost:3001 (or reuse the server already there)
```
