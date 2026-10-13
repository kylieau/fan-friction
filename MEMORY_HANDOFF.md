# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`: **open questions for Kylie are at its top** (the K-list, most closed by build 3; K23 Home's place and K24 the Faves cards; section F, build 3's flags; section G, build 4 coordination). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (its "Oct 12, 2026 decisions" section is the newest). **The next build's source of truth is `docs/build-4/build-notes-4-oct12.md`** (index: `docs/build-4/README.md`; the reasons behind each decision: `build3-review-form-decisions-oct12.md`; who builds what: `model-hierarchy-chart.md`).

_Last synced: Oct 13, 2026, Claude Code, at `ebeaa52` (Composer's build 4 slice, PR #54, merged by another session). This session built build 3 (Oct 12) and wrote no code since; the commits after its last sync came from other sessions and the nightly job. Kylie's standing instruction: one commit per step, straight to `main` (Kylie, Oct 9), but see BACKLOG G on PRs. Ask before anything uncertain._

## Docs were reorganized (Oct 11, 2026): old `docs/` paths no longer exist
Every doc lives in a sub-folder: `docs/product/`, `docs/reference/`, `docs/checks/`, `docs/research/` (`city-builds/<city>/`, `topics/`, `events-and-dates/`, `second-opinions/`), `docs/reviews/`, `docs/design/`, `docs/archive/`, and now `docs/build-4/` (map: `docs/README.md`). Research and reviews do not move when closed; only closed `docs/product/` docs archive.

## Current state
- **Build 3 is live on `main`** (Oct 12, Claude Code; plan `docs/reviews/build-notes-3-oct11.md`, decisions pack `docs/design/build3/DECISIONS.md`). Nav: Explore · Stubs · Following (Faves · Friends) · You; one "+ Stub it" sheet; the three crowd figures; "{Away} at {Home}"; never "night". Migrations 0023–0025 (where-watched privacy) were run by Kylie Oct 12 and the account check passed. The tester brief, interview guide and private kit follow build 3.
- **40 covered metros** (`COVERED_METRO_IDS` in `src/config/metros.ts`): the Oct 12–13 sessions added about thirty city builds through PRs #17–#50 (Boston, Philadelphia, Tampa Bay, Columbus, Nashville, Austin, Phoenix, Vancouver, Sacramento, Mexico City, Las Vegas, Kansas City, Houston, Toronto, Minneapolis, New Orleans, Indianapolis, Salt Lake City, Edmonton, Miami, Washington DC, Cleveland, San Antonio, Portland, Detroit, Pittsburgh, Raleigh–Durham, St. Louis, Denver, Ottawa–Gatineau). Each has a follow-up under BACKLOG › Next marked "not yet approved like K14".
- **Build 4 is decided; Composer's slice is merged (PR #54, `ebeaa52`), Claude Code's is not started.** Kylie's notes (Oct 12, with the Oct 13 additions): §0 one crowd number per event (Final > Announced > Estimated for the chip, card and header); §1 the Explore city view (Map and List, the shared 24 pt title row, the K1 calendar, back-scroll and Today pill, the date popup gone, tighter sheet, chip activity line); R04 older stubs' crowd (⚑3), the R10 polish batch, the "+ Stub it" page title; city items C01, C03, C11, C15 (Chicago rebuild), C16; stub tags T01–T13 (except how the T13 filters combine); research answers A–F (city names and codes, city types, open-site crowds, team colors; several marked build 5); the parked backlog moved in as P1–P6 (P2 Supabase blocked on Kylie's keys and spec; P5's rich Forecast not locked).
- **Who builds build 4** (Kylie, Oct 13, "Model split final"): **Claude Code plans and builds the design parts**: the city view redesign (Map/List, calendar, friend chips), stub tags, the New stub sheet, and the design and Supabase items of P1–P6. Its plan must follow the checklist in `model-hierarchy-chart.md`. **Cursor Composer** built the patterned parts in **PR #54, merged Oct 13** (crowd number via `displayedCrowdCount`, the R04 stub backfill, R10, C01, C03, C11, C16, the Chicago rebuild). **Codex Sol** runs only the final check (`docs/build-4/SOL-CHECK-PROMPT.md`). K23 (Home) has a decided lean (R02): open a second-opinion prompt before changing anything; no build.
- **Nightly job:** the labels now match their schedule files (D06 verified on the Oct 12 and 13 saves). A manual run at 07:59 UTC Oct 13 failed on "fetch failed" (transient); the 15:33 UTC scheduled run succeeded (`a3babf2` and `3e91d12`, both labeled 2026-10-13).

## Changes made this session
This sync only: rewrote this file, and added BACKLOG section G (PRs vs straight to main; approving the Oct 12–13 city builds). Earlier the same session (Oct 12): built build 3 (`4903ec0` … `1ea0889`, the mid-build fix `f702fdf`), logged its decisions, closed the K-list, updated the tester docs (`a87c889`). Nothing uncommitted; other sessions' files were not touched.

## Key decisions in force (newest; earlier ones in BACKLOG.md and the decisions doc)
- **Nav:** Explore · Stubs · Following (Faves · Friends) · You. "+ Stub it" is the logging copy everywhere. Home is off the bar at `/home` (K23).
- **The sheet:** the same tap takes an answer back; another answer switches it; un-tapping Attended asks once. Watching's Private / Friends choice has nothing preselected; a private watch never names a place; a Friends place reaches approved followers only, never when the owner is "Only me" or the stub is private (0023–0025).
- **Words:** Attending / Watching / Interested before, Attended / Watched after, activity lines included (Kylie, Oct 12: "attending", not the mock's "going"). Never "night". "The biggest event around." on an Unopposed event.
- **Crowd:** three figures on a stub, never overwritten; the highlighted one everywhere but the event page. Build 4 §0 extends the same order to event figures on the map, display only (⚑A: never the read math).
- **Read boxes** wear a 1 px #76869B border at every level and keep their word.
- **Testing notes:** `npm i --no-save playwright-core`; Chromium at `/usr/bin/chromium` with swiftshader flags; `localStorage['fan-friction:home-metro'] = JSON.stringify('la')` skips the picker; a local log goes in `localStorage['fan-friction:your-nights']` (plans carry `watch`, `watchShare`, `watchedPlace`; entries `crowdEstimated` / `crowdAnnounced` / `crowdFinal`); a signed-in screenshot writes `private/test-session-b.json`'s `.session` into `localStorage[<its .key>]`; the page scrolls inside `.screen.page`; temporary `scripts/.tmp-*.mjs` run from the repo root and are deleted after; stop vite with `kill $(lsof -ti:3001)`, never `pkill`.

## Kylie's manual steps (this week)
1. **Done:** migrations 0023–0025, the account check, the seed script (Oct 12); the nightly label (verified Oct 13).
2. **Today, Oct 13, the tester interview (K16):** the GrokBot tester-readiness checks and the tester's LA, San Diego, New York and Montreal reads beforehand; resend the updated brief if she has the old one; afterwards, C034 (her descriptions beside the reads, as evidence, never a target).
3. **Where-watched privacy check:** as A, stub a watched event with Friends and a place; as B (approved follower) see it on the feed and the event page; a non-follower or blocked account sees nothing; A on "Only me" or that stub private, B sees nothing; offline, "Couldn't save, try again".
4. **Your log's crowd figures:** open the app signed in, then check Stubs and event pages; PR #54's R04 now moves older stubs' single figure into Announced or Estimated on open.
5. **Phone checklist (K17):** C118, C075, C083, C087, sign out with an unsaved change, the Attended un-tap (inside the sheet), step (d).
6. **Answer BACKLOG G:** PRs or straight to main for Claude Code's build 4 parts; approve the Oct 12–13 city builds' scope. P2 needs the Supabase URL and anon key, and whether they are for the project already in use.

## Open (details in BACKLOG)
1. **Build 4 for Claude Code:** write the plan for its parts first (per `model-hierarchy-chart.md`), then build; stop and ask on anything not settled in the notes. Read what PR #54 changed (`src/data/crowdFigures.ts`, the map chip and card, city data) before touching shared files.
2. **Section G** (above). **K23** Home (second-opinion prompt first), **K24** the Faves cards (deferred).
3. **Build 3 flags (section F):** ⚑4 the Final source, ⚑6 the neutral-site field, DH labels, the user's-team emphasis, team colors (build 4 research D, build 5), the assistant's calls, polish.
4. **Later passes (K10), feeds or cost calls (K11), older questions (K18, K19, K21, K22).** City follow-ups under BACKLOG › Next.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
