# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`. The build order is `docs/big-picture-plan-oct6.md`.

_Last synced: Oct 8, 2026, Claude Code, seventh session (short: venue-access rows only). Everything below is committed and pushed to `main`; the working tree is clean. **Kylie's standing instruction: her usage is limited; commit and push after every step so the thread is never lost.**_

## Current state
**Nine covered cities** (`COVERED_METRO_IDS` in `src/config/metros.ts`: LA, San Diego, Seattle, New York, Atlanta, Bay Area, Chicago, Dallas–Fort Worth, Montreal). Five were built this session via `docs/new-city-checklist.md` (each run and its lessons are recorded there), and Kylie confirmed every city's build choices (`docs/expected-draw-decisions-oct7.md`, one heading per city). The tester's Canadiens night (May 25, 2026) is seeded and reads 1.0 Chill with 20,962 announced. Kylie's city list is done; the next city is hers to name. Research answers are saved verbatim in `docs/` next to the prompt's name; a pre-commit hook moves closed ones to `docs/archive/` (index: `docs/README.md`), which is why the proposals now sit under `docs/archive/proposals/`.

**Sources** (`docs/data-sources.md` has every endpoint and id):
- **MLB's feed** for the majors and, since Oct 8, minor-league and independent baseball (`sportId` per club in `mlbSource.ts`; seven clubs with crowds on file; the Chicago Dogs and Schaumburg Boomers have no schedule there).
- **ESPN** for the NBA, WNBA, NHL, NFL, MLS, NWSL, USL, college, and since Oct 8 the CFL, USL Super League, UFL and G League (Kylie's call). The CFL team schedule answered empty on Oct 8.
- **HockeyTech** (AHL, PWHL, WHL; `hockeytechSource.ts`), read with the league sites' own keys without asking (Kylie's call, Oct 8; the permission email is drafted and unsent in `docs/hockeytech-permission-email.md`). Ten clubs in six cities with announced crowds; the ECHL's key was not found, so the Allen Americans and Atlanta Gladiators stay on the sweep.
- **Ticketmaster** for concerts everywhere and, since Oct 8, sports listings at an allowlist of buildings no feed covers (`SPORTS_FROM_TICKETMASTER`); a feed game at the same building and date wins, verified on the Oct 8 run (no twins left; lounge and dinner packages filtered as add-ons).
- **🚩 Launch blocker** (`docs/build-brief.md`, Cost milestones): ESPN and HockeyTech both run under terms that bar automated access without permission. Fine for a personal app; a public launch must ask or license.

**Expected draw** (`src/data/expectedDrawBuild.ts` is the one rule; `expectedDraw.ts` applies it; `scripts/attendance-calibrate.mjs` writes the index nightly; checks in `docs/expected-draw-check.md`, `docs/postseason-check.md`, `docs/distance-check.md`): a game is the median announced crowd for this team in this building on this kind of date, adjusted for the season and the opponent; a playoff game is past playoff occupancy by round band (league pool as fallback, "any round" for MLS, the WNBA held back, the building when nothing is on file); a show is the room's published average, else a full theater or 57% of an arena. The distance discount was checked and not built. **On the event page** (Kylie, Oct 8): no Seats beside an estimate; a fullness word and bar (Light / Partly full / Mostly full / Packed) under estimates that rest on announced crowds; the ⓘ card opens "Based on N announced crowds at {building}, {seasons}. Half of games land between X and Y." plus a standing-room sentence when the crowd tops the seats; the range line left the page.

**Team pages** show the full schedule, home and away, with results, from the `team_schedules` table the nightly job writes (MLB, ESPN and HockeyTech); "No schedule yet" for favorites without a feed.

**Nightly job** (`schedule-archive.yml`): archive → calibrate → catalog write → commit, about four minutes now. One run on Oct 8 failed on a transient "fetch failed" from ESPN on the runner and passed on re-run; `gh workflow run schedule-archive.yml --ref main` triggers it.

**Reviews (saved Oct 7, 2026 PT; all open, none approved):** `docs/reviews/gap-reviews/` holds Codex's gap review and GrokBot/Cursor's (58 issues, Kylie's notes K1–K4, six mockups with sources in `assets/.../mockups/src/`); `docs/reviews/tester-readiness-reviews/` holds Codex's and GrokBot's reviews of the seven tester tasks. Each opens with an author / saved / status block, and each folder has a README index. Closing one: add a `Status: closed, <where it went>, <date>` line and the pre-commit hook archives it with its images (`npm run docs:tidy` previews). They are the reviewers' claims, not decisions; Kylie picks what to act on, and Claude proposes before building. **Privacy:** the tester's first name was found in this file and `BACKLOG.md` (and six commits on `origin/main`); it is scrubbed from current files, and the history question is Kylie's call (BACKLOG, "Waiting on Kylie"). Refer to "the tester"; names stay out of files, paths and commit messages.

## Changes made (sixth session, all pushed; seventh session added only the venue-access commit above)
Expected draw v1, round 2 and the playoff rule; the fullness word and bar; the ⓘ card's opening; show sizing; team schedules (migration 0010); five cities end to end; minor-league baseball, the ESPN extension, the HockeyTech source and the Ticketmaster sports sweep (`mlbSource.ts`, `espnSource.ts`, `hockeytechSource.ts`, `ticketmasterSource.ts`, `sources/types.ts`, `results.ts`, `catalogSource.ts`, `scheduleArchive.ts`, `teamSchedule.ts`, `catalog-write.mjs`, `attendance-collect.mjs`, `teams.ts`, `venues.ts`, `listings2026.ts`, `past2026.ts`, `data/attendance/**`); `scripts/{distance-check,postseason-check,promo-history-fold}.mjs`; docs: `expected-draw-decisions-oct7.md`, ten research answers saved verbatim, the no-feed proposal and email draft, `new-city-checklist.md`, `data-sources.md`, `build-brief.md`, `BACKLOG.md`. The nightly job's "Save the schedule" commits and another session's docs tidy are not ours.

## Key decisions in force (new this session; earlier ones in BACKLOG.md)
- **Every factor is a candidate, kept only if it beats the rule without it on held-out announced crowds, with its definition written before the run.** Constants are never re-tuned to pass; a failed check is recorded and nothing is built.
- **Resale prices, Google Trends and X are off.** Astra is not the research go-to.
- **No "Kylie's rule" without her name and a date beside it.** Save every research source in full. Research prompts ask for a downloadable `.md`.
- **Feeds:** read ESPN and HockeyTech as they are, record the terms as a launch blocker (Kylie, Oct 8); a feed game beats a Ticketmaster listing on the same building and date; a building with no feed is on the Ticketmaster sweep.
- **New-city lessons:** check every feed id against the feed first; add a team's past buildings' feed names; a city type set before research is a guess; the hard-access rule and the research disagree in both directions and neither is tuned; the attendance collector takes a team id; a "fetch failed" from every feed at once is DNS, so `curl` a known site first; a Canadian city needs nothing special.
- **Testing notes:** `npm i --no-save playwright-core` in a fresh container; headless Chromium at `/usr/bin/chromium` with swiftshader flags; `waitUntil: 'commit'` then wait; scripts that import from the repo run from the repo root as `scripts/.tmp-*.mjs`, deleted after; set `localStorage['home-metro']` to skip the home picker; open `/event/<id>?metro=<id>`, `/date/<date>?metro=<id>` or `/favorites/team/<id>` directly. Open-Elevation rate-limits for long stretches. Don't `pkill` vite; `kill $(lsof -ti:3001)`.

## Next steps
1. **Done Oct 8 (seventh session):** `scripts/venue-access.mjs` ran and its output is committed (7bab8ac). It ignores its city argument and measures every venue of 5,000+ seats. It added Montreal (8 venues) and the Chicago and Dallas–Fort Worth rows that the earlier runs had noted as done but never saved. No venue in those three cities is flagged, so nothing in the app changed. Open-Elevation's 429s had cleared; the full run takes over 6 minutes.
2. **Waiting on Kylie:** which review findings to act on, and whether to rewrite git history over the tester's first name (both in BACKLOG, "Waiting on Kylie"). Her next city, if any, is hers to name.
3. **Tester interview about Oct 13:** a day before, a data-side check that the tester's LA, San Diego, New York and Montreal nights show reads.
4. **Re-check the CFL slug** once the Alouettes' schedule fills; the Dogs and Boomers if MLB's partner-league feed starts carrying them.
5. Dated re-checks in BACKLOG: Nov 3 (Bay Area transit vote), each spring (Montreal's open-site dates), each September (State Fair, Red River), each January (Stock Show), early 2027 (Martin Stadium, Toyota Stadium, Dallas Memorial Arena).
6. **Before the Oct 13 tester interview:** walk through the GrokBot tester-readiness review's pre-interview checks with Kylie (`docs/reviews/tester-readiness-reviews/`), and ask which review findings she wants proposed as fixes.

**Rules to carry (Kylie, Oct 6–8):** never report a gap from anyone's ratings as progress, never tune a constant to close one; attendance on held-out dates is the only accuracy target. Keep sessions lean.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
