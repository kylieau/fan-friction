# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`: open questions are at its top (the K-list), build follow-ups under **Next** ("Build 5 follow-ups" is newest). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (newest sections at the bottom). **Build 5's source of truth is `docs/build-5/build-notes-5.md`; its full snapshot is `docs/build-5/handoff-5.md`. Read that first.**

_Last synced: Oct 15, 2026, Claude Code (Opus 5.5), at `main`'s head, with everything pushed and the tree clean. Kylie's standing instruction: one commit per step, straight to `main` (Kylie, Oct 9)._

## Current state
- **Build 5 is built, pushed and verified by the checks.** `npm run build` and all five check scripts pass: `titles-check`, `event-types-check`, `crowd-range-check`, `city-build-check` and `addon-filter-check`. Status by notes item, judgment calls and the advisor log are in `docs/build-5/handoff-5.md`.
- **Follow-up rounds after the build (Kylie, Oct 14), all committed:**
  - **Row names:** "Game 3" shortens to "G3" past 32 characters, and the round and number never split across lines.
  - **Hourly weather:** shows a moon after dark (`formula/sun.ts`).
  - **Stub titles:** stubs made from a catalog event are retitled once per log (`retitleStubs`).
  - **Venue figures:** Wrigley car share 0.421. Hollywood Casino Amphitheatre 20,000 (estimated, with lawn). Greene Stadium 7,086 (reported).
  - **Date page:** says "Verdict", not "Forecast", and has no lock time. Settings states that Home always shows today's three biggest events.
  - **How a city's fans travel, in plain words:** `src/data/cityTravel.ts`. Shown in the map key and in How estimates work.
  - **New York** stays hub, with its own sentence and four sourced car shares.
  - **Live screening:** a new type and icon for a watch party in a dome or cinema. A screening never counts toward friction.
  - **Add-on filter:** four bugs fixed (`sources/addOns.ts`, with a check script).
  - **docs-tidy:** skips a doc that was deleted but is still tracked.
  - **Personal log:** moved out of the repo into the git-ignored `private/kylie-log/`.
- **Oct 15 round (Kylie's notes after build 5; all committed, checks pass):**
  - **Every game can be stubbed** (`src/data/gameStub.ts`): every Schedule/Results row on a team page and every team row in Faves opens a page with "+ Stub it". A game held under another id (a hand seed) is matched by date and teams; a game held nowhere gets a page built from the schedule (no read, no crowd), which its stub, a friend's line and a cold link (via the team's schedule) all reopen. Past team-page rows now open the event page; upcoming covered ones still open the date.
  - **Preseason and spring training are an aside:** "Nuggets at Clippers (Preseason)", smaller and lighter, through one shared piece (`TitleText`). Kylie wants the same for exhibitions, scrimmages, qualifiers, tournaments, maybe playoffs: **her rules and mockups are coming; build nothing until then.**
  - **No comma before the game number** ("NLCS Game 3"). **Badges use the team's own code**, the TV scorebug's (the 407 stored codes were not audited against broadcasts).
  - **Rows:** the type icon hangs left so title text, its second line and the venue share one edge (measured, 209 rows). **Date page:** Attending and the lineup carry their titles inside their cards. **Faves:** a badges strip (builder's call, no mock: Kylie to look), one-line titles, the divider by the read. **Friends:** a "Find people" bar (not screenshotted signed in). **Favorites** pick the right team when two share a name (LA Clippers, not Columbus's).
  - **Test data:** the test-account seed and the Example rows use real events on real dates; the seed was re-run on the test accounts.
  - **Build fix:** the nightly forecast index outgrew TypeScript (TS2590) and stopped deploys; `scripts/forecast-index.mjs` now writes it as parsed JSON (same rows).
- **Migration 0026 (stub privacy) has been run (Kylie, Oct 14).** Do not list it as a task again. Only the build and the advisor review have checked live enforcement, and neither proves it works (see O2 below).
- **Cosm can't be listed.** Its terms forbid automated collection without written consent, and it has no feed. This is recorded in `docs/reference/data-sources.md` under "Checked and not usable".

## Changes made this session
Oct 15: the files named in the Oct 15 round (see `git log` from `ccbaedc`). Oct 14: every file named above, plus the research prompts and answers under `docs/research/topics/` and `docs/research/city-builds/new-york/`, the handoff-5, BACKLOG, product-decisions and data-sources docs, and the other session's private-log cleanup (`3f64fd3`, committed here at Kylie's request). Nothing is uncommitted.

## Key decisions in force (newest; older ones are in product-decisions and BACKLOG)
- **Mockups illustrate the notes, nothing more (Kylie, Oct 14).** They are never the goal and never fill a gap the notes leave open. Raise any difference between a mockup and the notes.
- **Live screening (Kylie, Oct 14):** a Cosm or cinema showing has its own type and never feeds friction. Being ticketed and/or gated by security (more than a bar's door staff) is a strong consideration, not a threshold. How that consideration combines with the type is still open.
- **City travel line (Kylie, Oct 14):** describe how fans travel rather than name the city type, with one sentence pattern per type. Atlanta, Ottawa–Gatineau, Las Vegas and New York have their own sentence and keep their type. The shares behind the patterns:

  | Type | Car share | Spill |
  |---|---|---|
  | sprawl | 85% | 15% |
  | hub | 85% | 15% |
  | transit | 40% | 10% |

  A venue's own `carShare` overrides its city's type. Taxis and rideshare count as cars.
- **Tag filter:** picking two tags shows stubs with either one (Kylie, Oct 14).
- **Chip punctuation:** " · " goes before a playoff round ("Dodgers · NLCS G3").
- **Crowd size range:** applies to Explore, date pages and search. Home keeps today's three biggest events, and a favorite's page shows all of its events.
- **Imported log:** retitling it is on hold until Kylie adds her research. Do not reopen those four questions; they are in `private/kylie-log/`.
- **Build 4 rules still apply** (tags in `userTags`, a game belongs to its venue's city, °C in Canada and Mexico, the Stub it sheet, the words, the read-box border). They are in product-decisions under "Oct 13, 2026 — build 4".
- **Testing notes:**
  - **Install:** never use `npm i --no-save`, because it removed `playwright-core` once. For a one-off package, `npm pack` it into the scratchpad.
  - **Browser:** use Chromium at `/usr/bin/chromium` with the swiftshader flags.
  - **Skip the city picker:** set `localStorage['fan-friction:home-metro'] = JSON.stringify('la')`.
  - **Local log:** goes in `localStorage['fan-friction:your-nights']`.
  - **Event pages outside the home city:** add `?metro=<id>` to the URL.
  - **Scrolling:** the page scrolls inside `.screen.page`.
  - **Layout:** measure element edges with a Playwright script before saying something is fixed everywhere.
  - **Scripts:** keep helper scripts in the session scratchpad.
  - **Game pages carry router state:** test a schedule row by tapping it, not by opening its URL (a cold URL now resolves through the team's schedule, so both work, but the tap is the user's path).
  - **No Prettier config:** never run `prettier --write` on a file; it reformats the whole thing.
  - **Stopping vite:** use `kill $(lsof -ti:3001)`, never `pkill`.

## Kylie's manual steps
1. **Cosm:** email support@cosm.com to ask for written consent or a schedule feed. Building-figure choices per venue are in BACKLOG.
2. 🚩 **SeatGeek:** Kylie is handling the free client id separately. It goes in the `SEATGEEK_CLIENT_ID` Actions secret.
3. **Paste terms:** the automated-access clauses for AXS, DICE and Goldenvoice.
4. **Phone checks:**
   - Add to calendar on an upcoming event.
   - The level pill on the Stub it sheet and on the event page.
   - The build 4 round trip: add a tag, star a city, enter seats, then sign out and back in.
5. **Ticketmaster id catch-up:** `node scripts/ticketmaster-venues.mjs --all` needs the nightly job's key.
6. **One reading to confirm:** "Okay, cause them" was read as changing the wording only for Atlanta, Ottawa–Gatineau and Las Vegas, not their types.
7. **Codex (its Oct 13 note):**
   - Before the first container rebuild, run `python3 .devcontainer/backup-codex.py`, then **Dev Containers: Rebuild Container**.
   - After the rebuild, check the desktop SSH and iPhone chats. If mobile is unavailable, run `python3 .devcontainer/codex-remote-control.py status`.
   - The private backup is in `private/devcontainer-state/latest`.
   - Whether chats survive a stop/start or a rebuild stays unverified until that first rebuild.

## Open (details in `docs/build-5/handoff-5.md` and BACKLOG)
0. **Kylie's next messages:** the aside rules for exhibitions and the rest; notes on Stubs, the Friends page and You; the date page's crowding and lineup social toggle (with Mock Mosaic). At the start of a resumed session, ask for these.
1. **O1–O4** (handoff-5, "Open"):
   - O1: what the privacy default actually changes.
   - O2: a live test matrix for privacy enforcement and sync.
   - O3: re-measure naming and layout.
   - O4: reconcile the handoffs.
2. **Read tile in Local Competition:** the notes said keep it, but both mockups dropped it, and I followed the mockups. Under the mockups rule, this needs Kylie's call.
3. **Waiting on SeatGeek and the Ticketmaster API checks:** the layered add-on rule.
4. **BACKLOG items:**
   - Rankings and seeds per team (next build).
   - Capacity rows per configuration.
   - Per-venue spillover.
   - Citi Field recheck.
   - UBS Arena's definition of driving.
   - The city-line wording for a venue with its own figure.
   - The Atlanta and Ottawa type flips.
   - The city follow-ups.

**Next command to run:**
```bash
git pull --rebase && npm run dev   # localhost:3001
```
