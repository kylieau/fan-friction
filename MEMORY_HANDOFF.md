# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`. The build order is `docs/big-picture-plan-oct6.md`.

_Last synced: Oct 7, 2026, end of the sixth session. Everything below is committed and pushed to `main`; the working tree is clean. **Kylie's standing instruction: her usage is limited; commit and push after every step so the thread is never lost.**_

## Current state
**Seven covered cities** (`COVERED_METRO_IDS = ['la','san-diego','seattle','new-york','atlanta','bay-area','chicago']`). Chicago was built Oct 7 from Kylie's Claude answers (15 teams, 23 venues, hub city type, no hard-access flags); its choices are listed for Kylie in `docs/expected-draw-decisions-oct7.md` ("Chicago build"). The Bay Area was built Oct 7 (17 teams incl. the Oakland Roots, 20 venues, hard access measured, nightly run passed: 27 events, 13 Ticketmaster; the Oct 10 night reads 4.2 Spicy across Cal, Sharks, Warriors). Its build choices, made without a lock, are listed for Kylie in `docs/expected-draw-decisions-oct7.md` ("Bay Area build"). Kylie's city order next: **Chicago, Dallas–Fort Worth, Montreal**; both prompts per city sit in `docs/research-queue/`; save each answer in `docs/` next to its prompt's name, in full, and start a city only when both are in. Docs were tidied this session by another session: finished research is in `docs/archive/research/`, the index is `docs/README.md`, and a pre-commit hook moves closed answers.

**Distance discount: checked, not built.** Kylie locked B / straight-line / check-first (Oct 7); `scripts/distance-check.mjs` → `docs/distance-check.md` found no competitor effect in announced crowds (sports vs sports, 6,318 games), so nothing was built; the result and its limits are at the end of `docs/distance-discount-proposal.md`. Revisit when a season of archived concert listings is on file.

**Expected draw** (`src/data/expectedDrawBuild.ts` is the one rule; `expectedDraw.ts` applies it; `scripts/attendance-calibrate.mjs` writes `expectedDrawIndex.ts`; `scripts/expected-draw-check.mjs` writes `docs/expected-draw-check.md`; every decision with Kylie's name and date is in `docs/expected-draw-decisions-oct7.md`):
- **A game:** median announced crowd for this team in this building on this kind of date, last three normal seasons (two for WNBA, NWSL, MLS, women's college basketball), times this season's level, times the opponent's past draw here; **both in every league** (Kylie, Oct 7). Capped at the building; the middle half is the range; the low end feeds friction.
- **A show:** the room's published average per show where one exists (MSG, Kia Forum, Barclays, Prudential, Intuit Dome); else a **room with no sports setup reads full**; an **arena or stadium reads 57%** of its concert setup (Kylie, Oct 7, fourth round). The room feeds friction (C1). A `special` listing (Arts & Theatre, Miscellaneous) in a room under 6,000 sits under the floor unless sold out.
- **On screen:** "~24,000 People (Estimated) ⓘ", Seats, "Middle half"; the ⓘ opens one "How estimates work" card for every estimate. List rows and map cards show "24.0k est". No per-event basis sentence.
- **Held-out check:** half of all games within 5.1% (9.2% by building). Round 2 with Kylie's promotion research (`docs/promo-history-rows.csv`, 971 rows, folded by `scripts/promo-history-fold.mjs`): **crossover nights and star-player giveaways pass**; special-ticket, championship, fireworks, discounts, top-team flags do not. They go into the MLB estimate when 2027 listings carry promotions.

**Team pages show the full schedule, home and away, with results** (built Oct 7, table live since Kylie ran migration 0010 the same day; 62 then 79 team schedules written; `src/data/teamSchedule.ts`, `FavoritePage.tsx`): Schedule (next 10, Save on games the catalog lists) and Results (last 10, "W 5–3"). A home game in a covered city, or an away game at a covered team's building, opens that night; others are listed only. Rows come from the `team_schedules` table the nightly job writes (ESPN refuses browser calls), with MLB read live as a fallback. UCLA football and women's basketball verified on screen. A favorite with no feed says "No schedule yet" (acceptable for now, Kylie, Oct 7).

**Nightly job** (`schedule-archive.yml`): archive → recompute expected draws → write the catalog (events, results, weather, snapshots, attendance, expected draws, team schedules) → commit. ~3 minutes. `gh workflow run schedule-archive.yml --ref main` triggers it.

## Changes made (this session, all pushed)
Expected draw v1 and round 2; the ⓘ card; Atlanta and the Bay Area end to end (`metros.ts`, `gridlock.ts`, `overlap.ts`, `teams.ts`, `venues.ts`, `espnSource.ts`, `mlbSource.ts`, `attendance-collect.mjs`, `listings2026.ts`, `venue-access.tsv`); show sizing (fourth round); Ticketmaster festival dedupe; team schedules (`teamSchedule.ts`, `types.ts` `TeamGame`, `espnSource.ts` `espnTeamSchedule`, `mlbSource.ts` `mlbTeamSchedule`, `catalog-write.mjs` step 6, migration 0010, `FavoritePage.tsx`); docs: `expected-draw-decisions-oct7.md`, `expected-draw-check.md`, five cities' prompts, Atlanta's two answers, promo-history prompt/answer/CSV, `new-city-checklist.md` (Atlanta lessons), `data-sources.md`, `BACKLOG.md`.

## Key decisions in force (new this session; earlier ones in BACKLOG.md)
- **Every factor is a candidate, kept only if it beats the rule without it on held-out announced crowds, with its definition written before the run.** Constants are never re-tuned to pass. Score a factor on the games it touches as well as overall.
- **Resale prices are off** (SeatGeek's and Ticketmaster's terms forbid storing them). Google Trends and X are off.
- **No "Kylie's rule" without her name and a date beside it.** Save every research source in full. Research prompts ask for a downloadable `.md`.
- **Testing notes:** `npm i --no-save playwright-core` in a fresh container; headless Chromium at `/usr/bin/chromium` with swiftshader flags; `waitUntil: 'commit'` then wait. Scripts that import from the repo run from the repo root (`scripts/.tmp-*.mjs`, deleted after). The home picker covers Explore in a fresh browser; open `/event/<id>?metro=<id>` or `/favorites/team/<id>` directly. Open-Elevation rate-limits: wait five minutes. GitHub push sometimes answers 500: retry. Don't `pkill` vite; `kill $(lsof -ti:3001)`.

## Next steps
1. **Postseason estimate: built and checked** (`docs/postseason-estimate-proposal.md`, last section; `docs/postseason-check.md`). Covers NBA/NHL/MLB early rounds; WNBA, MLS, NFL, NWSL playoffs still show no estimate under the pre-registered pool minimum. Kylie allowed an "any round" league pool for the WNBA and MLS (Oct 7); it passed the check for MLS (built) and failed for the WNBA (held back: playoff crowds doubled 2023–25, so old seasons mislead; a this-season rule would be a new proposal). Map and list rows show a playoff estimate's low end with a plus ("47.4k+ est").
2. **Astra is not the go-to** (Kylie, Oct 7: usage too high). If its Chicago answers arrive, a one-off comparison only.
3. **Dallas–Fort Worth** next, then Montreal, when both answers are in.
2. **Chicago** answers will come from OpenAI's Astra; compare their quality with the earlier cities' answers and say whether Astra is meaningfully better (she may rerun or spot-check the other cities). Distance check accepted and Bay Area choices confirmed (Oct 7).
3. **Chicago**, when both answers are in, via `docs/new-city-checklist.md` (then Dallas–Fort Worth, Montreal). The tester's Canadiens night (May 25, 2026) is hand-seeded at Montreal time.
4. **Tester interview about Oct 13:** a day before, a data-side check that her LA, San Diego and New York nights show reads.
5. **Nov 3, 2026:** re-check every Bay Area car share after the Prop RTM vote (BACKLOG "Bay Area is covered").
6. Crossover and star-player promo lifts into the MLB estimate when 2027 listings carry promotions; Petco Gallagher Square venue row.

**Rules to carry (Kylie, Oct 6–7):** never report a gap from anyone's ratings as progress, never tune a constant to close one; attendance on held-out dates is the only accuracy target. Keep sessions lean.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
