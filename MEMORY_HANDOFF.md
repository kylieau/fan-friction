# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`. The build order is `docs/big-picture-plan-oct6.md`.

_Last synced: Oct 8, 2026, Claude Code, end of the sixth session (Oct 7–8). Everything below is committed and pushed to `main`; the working tree is clean. **Kylie's standing instruction: her usage is limited; commit and push after every step so the thread is never lost.**_

## Current state
**Eight covered cities** (`COVERED_METRO_IDS` in `src/config/metros.ts`: LA, San Diego, Seattle, New York, Atlanta, Bay Area, Chicago, Dallas–Fort Worth). Atlanta, the Bay Area, Chicago and Dallas–Fort Worth were built this session via `docs/new-city-checklist.md` (each run and its lessons are recorded there). Each city's build choices that Kylie has not locked are listed under its own heading in `docs/expected-draw-decisions-oct7.md`; she confirmed the Bay Area's (Oct 7) and Chicago's and Dallas–Fort Worth's ("everything else ok", Oct 8). **Montreal is next** when both of its answers arrive (`docs/research-queue/montreal-*-prompt.md`); the tester's Canadiens night (May 25, 2026) is hand-seeded with it. Research answers are saved verbatim in `docs/` next to the prompt's name; a pre-commit hook moves closed ones to `docs/archive/research/` (index: `docs/README.md`).

**Expected draw** (`src/data/expectedDrawBuild.ts` is the one rule; `expectedDraw.ts` applies it on read; `scripts/attendance-calibrate.mjs` writes `expectedDrawIndex.ts` nightly; `scripts/expected-draw-check.mjs` → `docs/expected-draw-check.md`):
- **A game:** median announced crowd for this team in this building on this kind of date, last three normal seasons (two for WNBA, NWSL, MLS, women's college basketball), times this season's level, times the opponent's past draw here, in every league. The middle half is the range; the low end feeds friction. The estimate is the median announced, so it can sit above "Seats" where a team sells standing room (Cowboys 93,000 vs 80,000 seats; 49ers 71,600 vs 68,500); see the open question below.
- **A playoff game** (built and checked Oct 7, `docs/postseason-estimate-proposal.md`, `docs/postseason-check.md`): occupancy learned per team, building and round band (first / second / conference / final), league pool as fallback, "any round" pool for MLS (`ANY_ROUND_POOL`). WNBA held back (its crowds doubled 2023–25; Kylie agreed). **A playoff game with no comparables shows the building as its estimate** (Kylie, Oct 8), so WNBA, NFL and NWSL playoff games read 17,000–18,000 rather than "No count yet". The page says "Likely X–Y"; map and list rows show the low end with a plus ("47.4k+ est").
- **A show:** the room's published average where one exists; else a room with no sports setup reads full, an arena or stadium 57% of its concert setup. A `special` Ticketmaster listing in a room under 6,000 sits under the floor unless sold out.
- **Distance discount: checked, not built** (`docs/distance-discount-proposal.md`, `docs/distance-check.md`): no competitor effect in announced crowds across 6,318 games; Kylie accepted. Revisit with a season of concert listings.

**Team pages** show the full schedule, home and away, with results, from the `team_schedules` table the nightly job writes (migration 0010, run by Kylie Oct 7); MLB read live as fallback; "No schedule yet" for favorites without a feed.

**Nightly job** (`schedule-archive.yml`): archive → calibrate (regular and playoff rows) → catalog write (events, results, weather, snapshots, attendance, expected draws, team schedules) → commit. About three minutes; `gh workflow run schedule-archive.yml --ref main` triggers it.

## Changes made (this session, all pushed)
Expected draw v1, round 2 and the playoff rule; the ⓘ card; show sizing; Ticketmaster festival dedupe; team schedules (migration 0010); four cities end to end (`metros.ts`, `gridlock.ts`, `overlap.ts`, `teams.ts`, `venues.ts`, `espnSource.ts`, `mlbSource.ts`, `ticketmasterSource.ts`, `attendance-collect.mjs`, `listings2026.ts` incl. the State Fair's days and the Red River Showdown, `venue-access.tsv`, `data/attendance/**` incl. every league's playoffs); `scripts/{distance-check,postseason-check,promo-history-fold}.mjs`; docs: `expected-draw-decisions-oct7.md`, `postseason-*`, `distance-*`, eight research answers saved verbatim, `new-city-checklist.md`, `data-sources.md`, `BACKLOG.md`, `docs/research-queue/no-feed-teams-prompt.md`. The nightly job's own "Save the schedule" commits and another session's docs tidy are not ours.

## Key decisions in force (new this session; earlier ones in BACKLOG.md)
- **Every factor is a candidate, kept only if it beats the rule without it on held-out announced crowds, with its definition written before the run.** Constants are never re-tuned to pass; a failed check is recorded and nothing is built (the distance discount, the WNBA any-round pool).
- **Resale prices, Google Trends and X are off.** Astra is not the research go-to (usage too high).
- **No "Kylie's rule" without her name and a date beside it.** Save every research source in full. Research prompts ask for a downloadable `.md`.
- **New-city lessons:** check every feed id against the feed first (DePaul 305, Bay FC 22187 were wrong guesses); add a team's past buildings' feed names too; a city type set before research is a guess; the hard-access rule and the research disagree in both directions and neither is tuned; the attendance collector takes a team id, not a city; a "fetch failed" from every feed at once is this machine's DNS, so `curl` a known site before blaming a feed.
- **Testing notes:** `npm i --no-save playwright-core` in a fresh container; headless Chromium at `/usr/bin/chromium` with swiftshader flags; `waitUntil: 'commit'` then wait; scripts that import from the repo run from the repo root as `scripts/.tmp-*.mjs`, deleted after; set `localStorage['home-metro']` to skip the home picker; open `/event/<id>?metro=<id>`, `/date/<date>?metro=<id>` or `/favorites/team/<id>` directly. Open-Elevation rate-limits: wait five minutes. Don't `pkill` vite; `kill $(lsof -ti:3001)`.

## Next steps
1. **Kylie's answer on standing room** (`docs/expected-draw-decisions-oct7.md`, last section): keep "Seats" and add an optional standing-room figure per capacity row ("80,000 seats · 100,000 with standing room"), with the estimate's cap on the higher figure. Not built.
2. **The no-feed-teams research** (`docs/research-queue/no-feed-teams-prompt.md`) when Kylie runs it: save the answer, then propose which sources to wire first.
3. **Montreal** when both answers are in; hand-seed the Canadiens night with it.
4. **Tester interview about Oct 13:** a day before, a data-side check that Becca's LA, San Diego and New York nights show reads.
5. Dated re-checks in BACKLOG: Nov 3 (Bay Area transit vote), each September (State Fair, Red River), each January (Stock Show), early 2027 (Martin Stadium, Toyota Stadium, Dallas Memorial Arena).

**Rules to carry (Kylie, Oct 6–8):** never report a gap from anyone's ratings as progress, never tune a constant to close one; attendance on held-out dates is the only accuracy target. Keep sessions lean.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
