# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`: open questions are at its top (the K-list), build follow-ups under **Next** ("Past dates" is newest, then "Build 5 follow-ups"). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest sections at the bottom). Build 5's snapshot is still `docs/build-5/handoff-5.md`.

_Last synced: Oct 16, 2026, Claude Code (Opus 5.5), at `main`'s head, with everything pushed and the tree clean. Kylie's standing instruction: one commit per step, straight to `main` (Kylie, Oct 9)._

## Current state
All committed, pushed and checked with `npm run build`. UI changes were checked with Playwright screenshots at phone size.

- **Past dates are in the catalog** (`docs/product/past-seasons-proposal.md`):
  - Loaders: `scripts/past-dates-load.mjs` (the MLB and ESPN feeds by date, team or season) and `scripts/research-events-load.mjs` (a research answer's CSV, several answers merged, with grounds placed as points through `--places`).
  - A rebuilt date's read says "Estimated from past schedules."
  - Feeds were added for the Sparks, the Storm and the Tigers. Catalog reads page past Supabase's 1,000-row cap (`allRows`).
  - The output SQL is private (`private/kylie-log/records/`). Kylie has run everything through **0038**; nothing is waiting to be pasted.
- **Listing vs. friction (Kylie, Oct 16):** the app lists from about 1,000; the 5,000 floor decides only what feeds friction. The theater rule is retired.
- **Sport labels and college rounds (Kylie, Oct 15; product-decisions):**
  - The sport goes in the label slot. Alone it's spelled out ("Men's Basketball"); paired it's the code ("WBB · Round of 64").
  - MBB/WBB, so men's is labeled whenever women's is.
  - NCAA rounds read Round of 64 / Round of 32 / Sweet 16; hockey reads Regional semifinal / Regional final.
  - Neutral sites follow ESPN's flag.
- **Multi-day events (Kylie, Oct 16, decided and built):** one day is sized by the kind of figure published.
  - A per-day figure, or a sold-out daily cap, is the day's crowd.
  - Cumulative admissions are averaged over the days open.
  - Multi-day passes are never divided.
  - A figure of unclear kind gives an "at least" floor, used only when it clears 5,000.
  - Held: unique-attendee multipliers, day-of-week weights, borrowing from a nearby year.
  - Record: `docs/archive/proposals/multiday-sizing-proposal.md`. Code: `crowdOf` in the research loader. The flag is `atLeast` on a crowd figure (`crowdAtLeast` on a stub).
- **"At least" display (Kylie, Oct 16):**
  - "6.7k+" wherever a crowd is shortened, with no "~". Shown on map chips, cards, timeline, lineup, friction rows, stubs and Your Year.
  - On the event page: "At least" in the small text face beside the big number, on one line. Compare and the share line read "at least 6,667".
  - One helper set: `atLeastMark`, `entryAtLeastMark`, `crowdFull`.
- **Events placed at a point or route open their page.** Festival grounds, race cards and the FIFA Fan Festival used to say "Event not found". `crowdPoints(..., withPlaces)` is used only by the event page; the map is unchanged. Those events no longer get a "theater" size tag.
- **Seller venue names (`venueMatch.ts`):**
  - Matching now ignores case, dashes, curly quotes and Theatre/Theater/Centre spelling. It drops a city or state tag, a parent building ("-Adrienne Arsht PAC", "at the Broward Center") or the city's name ("Royale Boston").
  - When two rooms share a name, the show's date picks the one using it (Raleigh's Red Hat moves in 2027).
  - All 15 rooms the feed couldn't place on Oct 15 match in a direct test. The first real confirmation is the **Oct 17 nightly run**: the catalog step's log line "rooms the table lacks".
- **New York: 66 rooms from about 1,000 to 5,000** (`small-rooms-big-cities-answer.md`, first installment; Kylie's OK, Oct 16).
  - Locations are reference points, not entrances. Brooklyn Storehouse sits at the Navy Yard's main address and Purchase's arts center at the campus point.
  - The three 5,000+ rooms were measured for hard access; none is strained.
  - `scripts/venue-access.mjs --metro=` no longer drops the 27 index rows that other city builds wrote without a table row.
- **Research answers saved in the repo:** multi-day attendance (closed), small rooms (NY installment), sport labels, concert nights (private).

## Changes made this session (Oct 15–16)
Commits `8657eb59` through `3fc59cb3` on `main`, all from this session; the nightly "Save the schedule" commits in between are the scheduled job's. Main areas:
- Data and sources: `src/data/sources/` (espn, mlb, catalog, venueMatch, roundLabel, ticketmaster, seatgeek), `src/data/venues.ts`, `teams.ts`, `crowdFigures.ts`, `personalLog.ts`, `formulaRead.ts`, `types.ts`.
- Screens and pieces: `src/lib/eventTitle.ts`, `src/map/crowdPoints.ts`, the event, date and Compare screens, `src/components/`.
- Scripts: `scripts/past-dates-load.mjs`, `research-events-load.mjs`, `venue-access.mjs`.
- Docs: `docs/product/`, `docs/research/`, BACKLOG.

Private files changed only under `private/`. Nothing is uncommitted.

## Key decisions in force (newest first; older ones are in product-decisions and BACKLOG)
- **Copy-only changes need no mock (Kylie, Oct 16):** "if the only change is the copy, that's fine, no need for a mock." This applies on the Map too. Layout, size and new pieces still get a mock first.
- **Big figures never wrap (Kylie, Oct 16):** "I dislike the wrapped line." A qualifier goes in the small text face beside the number. Flagging a wrap is welcome.
- **Listing floor about 1,000, friction floor 5,000** (Oct 16), and the theater rule is retired. **Multi-day sizing** as above (Oct 16). **Sport labels, MBB/WBB, Round of 64** (Oct 15).
- **Event facts are public; personal attendance is private.** Event facts loaded for past dates go in the shared catalog like any other event. Nothing in the repo may tie a date to a person's attendance: no date lists, no "her nights". Lists, SQL and research briefs naming dates stay in `private/kylie-log/`.
- **Mockups illustrate the notes, nothing more (Kylie, Oct 14).** Raise any difference between a mockup and the notes.
- **Live screening (Kylie, Oct 14):** a Cosm or cinema showing has its own type and never feeds friction.
- **City travel line (Kylie, Oct 14):** describe how fans travel, one sentence per type. Car shares: sprawl 85% (spill 15%), hub 85% (15%), transit 40% (10%). A venue's own `carShare` overrides its type.
- **Earlier rules still in force:**
  - The tag filter matches either tag.
  - " · " goes before a playoff round.
  - The crowd size range applies to Explore, date pages and search.
  - Build 4's rules are in product-decisions under "Oct 13, 2026 — build 4".
- **Testing notes:**
  - Chromium is at `/usr/bin/chromium` with `--no-sandbox`, driven through `playwright-core`.
  - Skip the city picker with `localStorage['fan-friction:home-metro'] = JSON.stringify('la')`.
  - The page scrolls inside `.screen.page`; use `scrollIntoView` on an element.
  - Event pages outside the home city need `?metro=<id>`.
  - Keep helper scripts in the session scratchpad. A temporary script under `scripts/` must be deleted after use.
  - Never `npm i --no-save` or `prettier --write`. Stop vite with `kill $(lsof -ti:3001)`.
  - Measure edges and heights before saying a layout is fixed everywhere.

## Kylie's manual steps
1. **Small-rooms research, next installment:** paste into the research tool: "Continue from the stopping point: finish New York (entrance coordinates, the name-history check, the candidate list), then Los Angeles including Orange and Ventura Counties." Save the answer beside its prompt.
2. **Her own log items:** the open items under "Still open" in `private/kylie-log/open-questions.md`.
3. **Cosm:** email support@cosm.com for written consent or a schedule feed.
4. 🚩 **SeatGeek:** the free client id goes in the `SEATGEEK_CLIENT_ID` Actions secret (she's handling it).
5. **Paste terms:** the automated-access clauses for AXS, DICE and Goldenvoice.
6. **Phone checks:** Add to calendar; the level pill; the build 4 round trip (tag, star a city, seats, sign out and back in).
7. **Ticketmaster ids:** `node scripts/ticketmaster-venues.mjs --all` needs the nightly job's key. This also picks up New York's new rooms.
8. **Codex (its Oct 13 note):** before the first container rebuild, run `python3 .devcontainer/backup-codex.py`; afterwards check that chats survived (`python3 .devcontainer/codex-remote-control.py status`).

## Open (details in BACKLOG under "Past dates" and in `docs/build-5/handoff-5.md`)
1. **Check the Oct 17 nightly log** for "rooms the table lacks". Only Broward's Amaturo Theater and Abdo New River Room (rooms under 1,000) should remain.
2. **Stubs that locked before their date was loaded never get its crowd** (30-day retry only). The planned fix is a one-time relock on the phone, in BACKLOG.
3. **Building names on the largest room** (Carnegie Hall, Newark Symphony Hall): move them when a second 1,000+ room in the same building is added.
4. **Headline uses the feed's title**, and **Local Competition bars skip events with no start time**.
5. **O1–O4 from build 5:** the privacy default, the live privacy test matrix, re-measuring naming and layout, reconciling the handoffs. Also open: the Read tile in Local Competition (Kylie's call).
6. **At the start of a resumed session:** ask Kylie for new UX notes, and ask whether she has more thoughts on the tournament labels.

**Next command to run:**
```bash
git pull --rebase && npm run dev   # localhost:3001
```
