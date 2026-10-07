# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`. The build order is `docs/big-picture-plan-oct6.md`.

_Last synced: Oct 7, 2026, late in the sixth session. Everything below is committed and pushed to `main`; the working tree is clean. **Kylie's standing instruction: her usage is limited; commit and push after every step so the thread is never lost.**_

## Current state
**Five covered cities** (`COVERED_METRO_IDS = ['la','san-diego','seattle','new-york','atlanta']`). Atlanta was built Oct 7 (14 teams, 20 venues, neutral-site football hand-listed in `listings2026.ts`, hard access measured, nightly run passed: 32 events, 27 with an estimate). Kylie's city order: **Bay Area next, then Chicago, Dallas–Fort Worth, Montreal.** Both research prompts per city are drafted (`docs/<city>-venue-table-prompt.md`, `docs/<city>-city-type-prompt.md`, each asking for a downloadable `.md` named `<city>-…-answer.md`); start a city only when both answers are saved in full.

**Expected draw** (`src/data/expectedDrawBuild.ts` is the one rule; `expectedDraw.ts` applies it; `scripts/attendance-calibrate.mjs` writes `expectedDrawIndex.ts`; `scripts/expected-draw-check.mjs` writes `docs/expected-draw-check.md`; every decision with Kylie's name and date is in `docs/expected-draw-decisions-oct7.md`):
- **A game:** median announced crowd for this team in this building on this kind of date, last three normal seasons (two for WNBA, NWSL, MLS, women's college basketball), times this season's level, times the opponent's past draw here; **both in every league** (Kylie, Oct 7). Capped at the building; the middle half is the range; the low end feeds friction.
- **A show:** the room's published average per show where one exists (MSG, Kia Forum, Barclays, Prudential, Intuit Dome); else a **room with no sports setup reads full**; an **arena or stadium reads 57%** of its concert setup (Kylie, Oct 7, fourth round). The room feeds friction (C1). A `special` listing (Arts & Theatre, Miscellaneous) in a room under 6,000 sits under the floor unless sold out.
- **On screen:** "~24,000 People (Estimated) ⓘ", Seats, "Middle half"; the ⓘ opens one "How estimates work" card for every estimate. List rows and map cards show "24.0k est". No per-event basis sentence.
- **Held-out check:** half of all games within 5.1% (9.2% by building). Round 2 with Kylie's promotion research (`docs/promo-history-rows.csv`, 971 rows, folded by `scripts/promo-history-fold.mjs`): **crossover nights and star-player giveaways pass**; special-ticket, championship, fireworks, discounts, top-team flags do not. They go into the MLB estimate when 2027 listings carry promotions.

**Team pages show the full schedule, home and away, with results** (built Oct 7, `src/data/teamSchedule.ts`, `FavoritePage.tsx`): Schedule (next 10, Save on games the catalog lists) and Results (last 10, "W 5–3"). A home game in a covered city, or an away game at a covered team's building, opens that night; others are listed only. Rows come from the `team_schedules` table the nightly job writes (ESPN refuses browser calls), with MLB read live as a fallback. **Kylie has not yet run `supabase/migrations/0010_team_schedules.sql`**; until she does, ESPN teams (incl. UCLA football, MBB, WBB) say "No schedule yet" and only MLB clubs show one. A favorite with no feed says "No schedule yet" (acceptable for now, Kylie, Oct 7).

**Nightly job** (`schedule-archive.yml`): archive → recompute expected draws → write the catalog (events, results, weather, snapshots, attendance, expected draws, team schedules) → commit. ~3 minutes. `gh workflow run schedule-archive.yml --ref main` triggers it.

## Changes made (this session, all pushed)
Expected draw v1 and round 2; the ⓘ card; Atlanta end to end (`metros.ts`, `gridlock.ts`, `overlap.ts`, `teams.ts`, `venues.ts`, `espnSource.ts`, `mlbSource.ts`, `attendance-collect.mjs`, `listings2026.ts`, `venue-access.tsv`); show sizing (fourth round); Ticketmaster festival dedupe; team schedules (`teamSchedule.ts`, `types.ts` `TeamGame`, `espnSource.ts` `espnTeamSchedule`, `mlbSource.ts` `mlbTeamSchedule`, `catalog-write.mjs` step 6, migration 0010, `FavoritePage.tsx`); docs: `expected-draw-decisions-oct7.md`, `expected-draw-check.md`, five cities' prompts, Atlanta's two answers, promo-history prompt/answer/CSV, `new-city-checklist.md` (Atlanta lessons), `data-sources.md`, `BACKLOG.md`.

## Key decisions in force (new this session; earlier ones in BACKLOG.md)
- **Every factor is a candidate, kept only if it beats the rule without it on held-out announced crowds, with its definition written before the run.** Constants are never re-tuned to pass. Score a factor on the games it touches as well as overall.
- **Resale prices are off** (SeatGeek's and Ticketmaster's terms forbid storing them). Google Trends and X are off.
- **No "Kylie's rule" without her name and a date beside it.** Save every research source in full. Research prompts ask for a downloadable `.md`.
- **Testing notes:** `npm i --no-save playwright-core` in a fresh container; headless Chromium at `/usr/bin/chromium` with swiftshader flags; `waitUntil: 'commit'` then wait. Scripts that import from the repo run from the repo root (`scripts/.tmp-*.mjs`, deleted after). The home picker covers Explore in a fresh browser; open `/event/<id>?metro=<id>` or `/favorites/team/<id>` directly. Open-Elevation rate-limits: wait five minutes. GitHub push sometimes answers 500: retry. Don't `pkill` vite; `kill $(lsof -ti:3001)`.

## Next steps
1. **Ask Kylie to run `supabase/migrations/0010_team_schedules.sql`**, then trigger the nightly job and check a UCLA page shows its schedule.
2. **Bay Area**, when both answers are in, via `docs/new-city-checklist.md` (then Chicago, Dallas–Fort Worth, Montreal). The tester's Canadiens night (May 25, 2026) is hand-seeded at Montreal time.
3. **Distance discount** as its own proposal right after the Bay Area (Kylie: "as long as we don't forget it").
4. **Tester interview about Oct 13:** a day before, a data-side check that her LA, San Diego and New York nights show reads.
5. Crossover and star-player promo lifts into the MLB estimate when 2027 listings carry promotions; Petco Gallagher Square venue row (BACKLOG "Show sizing follow-ups").

**Rules to carry (Kylie, Oct 6–7):** never report a gap from anyone's ratings as progress, never tune a constant to close one; attendance on held-out dates is the only accuracy target. Keep sessions lean.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
