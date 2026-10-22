# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`: open questions at its top (the K-list), build follow-ups under **Next** (newest: "Small rooms answer 5" with today's alias lookups, Carroll merge and room-name answers inside it; "The Los Angeles census report, done Oct 22"; "Small rooms answer 6"; "The Oct 22 nightly run"). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest at the bottom).

_Last synced: Oct 22, 2026, about 4:25 PM Pacific, Claude Code (Opus 5.5, with Fable as advisor), at `main`'s head, pushed. Kylie's standing instructions: one commit per step, straight to `main`, pushed; `git fetch` first (the nightly pushes to `main`); every tweak is judged for UX and for conflicts with earlier decisions, and a conflict goes back to her as a question; mock first for anything new on screen; multiple choice with the builder's lean marked; she signs up for nothing beyond a plain free API key; "use advisor liberally" (Oct 22): a second opinion before committing to an approach and before calling work done._

## Current state
**Everything is committed and pushed; the working tree is clean** apart from Codex's two untracked `.agents/skills/source-command-*` folders (not ours; leave them). `npm run build` and the titles and city-build checks pass. **Build 7 is next:** Kylie pushed its notes and mockups at 4:20 PM (`docs/build-7/`: `build-notes-7.md`, `flow/`, `mockups/`, `research/`; commit `a6cd3b7d`, "Kylie approved 2026-10-22") and will give the instructions in a fresh session. Read `build-notes-7.md` first and propose before building (structural changes wait for her yes).

**This session (Oct 22, late afternoon), in order:**
- **Alias lookups** (`83d75709`): stubs, plans, favorites, search, results, quick add and the further-out check find a room by its `aliases` too, through one shared `venueByName` / `venueGoesBy` in `venues.ts` (a room's own name beats another room's alias). Measured over 3,902 spellings in four lookups: no name moved; 276 alias spellings now find their room.
- **Carroll Stadium merged** (`4f81b7a4`): Indianapolis had it twice (`carroll-stadium` from Ticketmaster, `michael-a-carroll-stadium` from the Oct 22 college-rooms pass). Merged into `carroll-stadium`, school-feed spellings as aliases, 12,111 kept; no double counting. `MERGED_VENUE_IDS` in `venues.ts` remaps the old id at the catalog read (`catalogSource.ts`) until the nightly rewrites the rows (Sidearm ids carry no venue id, and the stale-row delete clears the rest). The city-build check now fails when an alias is another room's name in the same city.
- **Room names** (`55071e1e`, `48c950ee`): 345 names on file never show on any date (`docs/checks/room-names-never-shown-2026-10-22.csv`). Kylie took both leans: spellings stay in `names` (the title cleaner `untagName` reads only `names`), and the new-city checklist has the names-vs-aliases rule; about 150 are undated former names on 139 rooms, so a research prompt asks for every name's start date (`docs/research/topics/room-former-names-prompt.md`). **Kylie is running it now.**
- Earlier today (see BACKLOG): the Los Angeles census report and its fixes, the valley further out, small rooms answer 6's corrections, the city-boundary prompt.

## Key decisions in force (newest first; full text in product-decisions and BACKLOG)
- **Oct 22 late afternoon (Kylie):** room names as above ("yes, your lean for both!"). Wolstein Center stays Cleveland's shown name.
- **Oct 22 afternoon (Kylie):** the census report's answers. **Provenance correction:** the Los Angeles, Orange and Ventura line was the Oct 16 small-rooms brief's ask, not a boundary Kylie chose; not locked, the boundary research decides. The valley's rooms under 5,000 stay off lists.
- **Oct 22 earlier (Kylie):** high-school football waits until a user attends it; the DC/Philadelphia capacity calls; college rooms as built. **Builder's lean, not confirmed:** answer 5's 74 and answer 6's 99 small-room additions come in as one pass when the series ends.
- **Sellers (Kylie, Oct 19 and Oct 21):** AXS, DICE, Insomniac, Goldenvoice and Framework stay unread; **she signs up for nothing beyond a plain free API key**. No proposal may offer an AXS integration, partner deal or seller sign-up.
- **Oct 19–21 (Kylie):** Further out never counts toward a verdict, two switches, favorites always show; the add-on layered rule; Verdict / friction words; Add a game / Add a show and the review queue.
- **Held by Kylie (Oct 16):** the stamp's end-of-day fallback. Do not change the stamp.
- **Working notes:** new seller or feed spellings go in `aliases` (every lookup reads them now); do not move existing ones out of `names` without teaching `untagName` the aliases first. In `venues.ts` keep comments above `location`, never between `location` and `ticketmasterIds` (the id script's write regex). A merged room's old id goes in `MERGED_VENUE_IDS`; the event page and favorite page index `VENUES[venueId]` unguarded, so never delete a room id that catalog rows still carry without it. The Ticketmaster key's allowance is 5,000 a day, reset about 12:24 PM Pacific, and the nightly at 12:15 AM draws on it. Headless checks import `node_modules/vite/dist/node/index.js` by absolute path and `ssrLoadModule` a source file. The browser (`.mcp.json`) is set up for phone-size screenshots. Never `npm i --no-save` or `prettier --write`.

## Kylie's manual steps
1. 🚩 **SeatGeek:** still waiting on the free client id. **Remind her every session** until it lands; then the `SEATGEEK_CLIENT_ID` Actions secret and SeatGeek's logo attribution.
2. **Research to run:** room former names (running now; save as `docs/research/topics/room-former-names-answer.md`); the city-boundary prompt (about 5:20 PM today); small rooms continuation 7 (Boston, Bay Area); further out continuation 4 (Montreal, Vancouver, Detroit, Minneapolis).
3. **Phone checks (deferred):** the Friends timeline and the sheet's Friends side signed in; the Add a game card and pending label; the Review queue with a real row; the earlier list in BACKLOG.

## Next
1. **Build 7** from Kylie's instructions and `docs/build-7/` (mock first for anything new on screen; propose structure before building).
2. **Read the Oct 23 nightly log:** no "fan-added rows skipped" line (migration 0033); Free Throw and The Lion King listed; no MVP Court Pass or season passes at 5,000+ rooms; NHRA Finals ×4 at `pomona-dragstrip`; Segerstrom Hall and Fox Pomona rows; Acrisure rows (further out); one LAFC row at BMO on Nov 1; "seller games dropped as copies" in Mexico City and San Antonio; Pantages and Disney On Ice pairs or trios; **Indianapolis: no `michael-a-carroll-stadium` rows, the Oct 30 and Nov 3 IU Indy soccer games at `carroll-stadium`.**
3. **After 12:24 PM Pacific on Oct 23:** the room-id check for every city, then the hard-access measure (steps in BACKLOG, "The Los Angeles census report, done Oct 22").
4. **When research lands:** the boundary answer (compare its rule against each city's boundary, bring Kylie the differences as multiple choice with the lean, Ontario and the Inland Empire first); the former-names answer (add each `from` date, rerun the never-shown scan).
5. Later, in BACKLOG: DC Armory's access measurement; the Sidearm box-score collector; the one small-rooms import pass when the series ends.

**Next command to run:**
```bash
git pull && sed -n 1,80p docs/build-7/build-notes-7.md
```
