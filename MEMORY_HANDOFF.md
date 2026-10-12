# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`; **the open questions for Kylie are at the top of `BACKLOG.md` (K-list, most closed by build 3, plus section F, "Open from build 3")**. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (its "Oct 12, 2026 decisions" section is the newest, then "Oct 11" and "Oct 9–10"). The build plans are Kylie's `docs/reviews/build-notes-3-oct11.md` (build 3, verbatim, with her answers in §8.1), `docs/reviews/build-notes-2-oct10.md` and `docs/reviews/build2-judgment-call-decisions.md`; the build 3 decisions pack is `docs/design/build3/DECISIONS.md` with its mocks beside it (`docs/design/README.md` indexes them).

_Last synced: Oct 12, 2026, Claude Code, after commit `7c0ba89` (build 3 built; migrations 0023–0025 run by Kylie; every step on `origin/main`). `npm run build` green, `git diff --check` clean, `npm run docs:tidy` reports nothing. Kylie's standing instruction: commit and push after every step; no PRs, work goes to `main` (Kylie, Oct 9). Ask before anything uncertain._

## Docs were reorganized (Oct 11, 2026): old `docs/` paths no longer exist
Every doc lives in a sub-folder: `docs/product/`, `docs/reference/`, `docs/checks/`, `docs/research/` (`city-builds/<city>/`, `topics/`, `events-and-dates/`, `second-opinions/`), `docs/reviews/`, `docs/design/`, `docs/archive/` (map: `docs/README.md`). Research and reviews do not move when closed; only closed `docs/product/` docs archive. New research prompts go in `docs/research/`.

## Current state
**Build 3 is built on `main` (Oct 12, 2026, Claude Code), one commit per step, from `docs/reviews/build-notes-3-oct11.md`.** Kylie confirmed the nav from the mocks (Explore · Stubs · Following · You) on Oct 12. Everything ⚑ or "not in build 3" was left alone and is listed in BACKLOG section F.

- **Privacy (Section 0):** migrations **0023** (the where-watched read rule no longer reads its own table, so places save; "Couldn't save, try again" on a refused save), **0024** (the open view is dropped; a server function lists an event's places and counts from approved people you follow, only while you share one yourself; duplicate spellings merge) and **0025** (Kylie's mid-build fix: a shared place also hides when the owner is "Only me" or that stub is private; the app shows no list at all until 0024 runs, never the old view). **All three run by Kylie, Oct 12; `scripts/account-check.mjs` and the seed script ran clean.**
- **Data (Section 1):** a stub keeps three crowd figures, Estimated / Announced / Final, none overwriting another; highlighted Final > Announced > Estimated; the fill runs on open (≤40 lookups) and retries a past stub's missing Announced for a month. Older stubs keep their single untagged `crowd` (⚑3). Final has no source (⚑4). The nightly commit's label is the schedule file's date.
- **Copy and names:** never "night" (day, today, date; "Famous dates", "Pick a date", "On this date"); games are "{Away} at {Home}" with the label first ("NLCS G2 · Brewers at Dodgers"), "vs." only at a neutral site; the team-relative "vs Padres" / "@ Brewers" only on a team's own page.
- **Screens:** Explore's date is plain text to the date page, the Why card ends in "See the whole day ›", the sheet's collapsed bar is "4 events · 94k ›" with the day's rows by time and one activity line each, and an icon-only activity chip. The event page has one "+ Stub it" opening one sheet (Attending / Watching / Interested; Attended / Watched; Private or Friends with a Home preset and an optional Where), a This day card, Up against with distance (the old timeline is gone), the hybrid crowd block, "Tickets ›" without a price, and grouped friend lines. The date page's rows are by crowd with a small "+ Stub it" each and grouped Following lines (Interested included). Stubs: Recent then Upcoming, month bands, date-box rows, a floating "+ Stub it". Following: Faves as a schedule by date with two tap zones and a city code over away reads; Friends grouped by event with a Feed switch and an Earlier band. You keeps profile, account and Stats ("N attended · N watched"). Home stays at `/home`, off the bar. An artist page's "Official site ›" comes live from Ticketmaster's attraction links (`api/artist-site.ts`).
- **Milwaukee** (Oct 11) is unchanged: 41 rooms, follow-ups under BACKLOG › Next. The next-ten city prompts are drafted (`docs/research/city-builds/next-cities/`); Boston, Philadelphia and Tampa answers were saved by another session (commit `42ebe8b`); no city build is approved.

## Changes made this session
Saved the pack (`docs/design/build3/`, `docs/research/topics/event-naming-at-vs.md`, `docs/reviews/build-notes-3-oct11.md`). Built Sections 0–4 and every ✅ item from §8.1 as separate commits (`4903ec0` … `1ea0889`), then Kylie's mid-build fix (`f702fdf`). Logged every decision with reasons and rejected options in `docs/product/product-decisions.md` ("Oct 12, 2026 decisions"); closed the K-list in `BACKLOG.md` per §8 and added section F for what was flagged. Screens were checked at phone size (390×844) with the scratchpad screenshot helper (deleted after).

## Key decisions in force (newest; earlier ones in BACKLOG.md and the decisions doc)
- **Nav:** Explore · Stubs · Following (Faves · Friends) · You. "+ Stub it" is the logging copy everywhere.
- **The sheet:** the same tap takes an answer back; another answer switches it; un-tapping Attended asks once. Watching's Private / Friends choice is nothing-preselected; a private watch never names a place; a Friends place is shared with approved followers through the database (0023–0025).
- **Words:** Attending / Watching / Interested before, Attended / Watched after, everywhere (feed sentences keep "is going to / went to / is watching … at …"). Never "night". "The biggest event around." on an Unopposed event.
- **Crowd:** three figures, never overwritten; the highlighted one everywhere but the event page, which lists them.
- **Read boxes** wear a 1 px #76869B border at every level and keep their word.
- **Testing notes:** `npm i --no-save playwright-core`; Chromium at `/usr/bin/chromium` with swiftshader flags; `localStorage['fan-friction:home-metro'] = JSON.stringify('la')` skips the picker; a local log goes in `localStorage['fan-friction:your-nights']` (plans carry `watch`, `watchShare`, `watchedPlace`; entries `crowdEstimated` / `crowdAnnounced` / `crowdFinal`); a signed-in screenshot writes `private/test-session-b.json`'s `.session` into `localStorage[<its .key>]`; the page scrolls inside `.screen.page`; temporary `scripts/.tmp-*.mjs` run from the repo root and are deleted after; stop vite with `kill $(lsof -ti:3001)`, never `pkill`.

## Kylie's manual steps
1. **Done Oct 12:** 0023, 0024 and 0025 run in order; the account check and the seed script ran clean. Kylie checks steps 2–6 over the week of Oct 12.
2. **Where-watched privacy check:** as A, stub a watched event with Friends and a place; as B (approved follower) see it on the feed and the event page; as a non-follower or a blocked account see nothing; set A to "Only me" or keep that stub private and confirm B sees nothing; go offline and confirm "Couldn't save, try again".
3. **Your log's crowd figures:** open the app signed in so the fill runs, then check Stubs and the event pages. Older stubs keep one untagged figure until ⚑3 is answered.
4. **The nightly run's date label:** after the next run, the commit should say "Save the schedule for <that day's date>".
5. **Before the Oct 13 interview (K16):** the GrokBot tester-readiness checks and the tester's LA, San Diego, New York and Montreal reads; after it, C034.
6. **Phone checklist (K17):** C118, C075, C083, C087, sign out with an unsaved change, the Attended un-tap (now inside the sheet), step (d) on her phone.

## Open (summary; details in BACKLOG K10, K11, K16–K19, K21, K22 and section F)
1. **Raised Oct 12, waiting on Kylie (section F):** the tester brief names the old tabs and friction words the day before the interview; Home is reachable only at `/home` (the mini map and Favorites this week live only there); the Faves status cards and the going/attending wording.
2. **Build 3 flags (section F):** ⚑3 tagging older stubs' crowd, ⚑4 the Final source, DH labels (no field), the user's-team emphasis, team colors on Faves tags (no data), the assistant's calls (activity-line wording, the Stubs chips kept as All · Sports · …, the status cards leaving Faves, metro codes).
3. **Later passes she named (K10):** R13 gold ring mock, the Stats badge set, R10, R11. **Feeds or cost calls (K11).**
4. **Tester and interview (K16, K17).** **Older questions (K18, K19, K21, K22).**
5. Milwaukee follow-ups and the scale checkpoint under BACKLOG › Next.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
