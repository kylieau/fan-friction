# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`. The build order is `docs/big-picture-plan-oct6.md`.

_Last synced: Oct 7, 2026, end of the sixth session. Everything below is committed and pushed to `main`; the working tree is clean. **Kylie's standing instruction: her usage is limited; commit and push after every step so the thread is never lost.**_

## Current state
**Four covered cities** (`COVERED_METRO_IDS = ['la','san-diego','seattle','new-york']`). **The expected-draw work is built, tested, live and verified on screen.** Nothing is half-built. Kylie's city order (Oct 7): **Atlanta, Bay Area, Chicago, Dallas–Fort Worth, Montreal.** Atlanta is next, via `docs/new-city-checklist.md`.

**What the expected draw is now** (`src/data/expectedDrawBuild.ts` holds the one rule; `expectedDraw.ts` applies it on read; `scripts/attendance-calibrate.mjs` writes `expectedDrawIndex.ts`; `scripts/expected-draw-check.mjs` tests it and writes `docs/expected-draw-check.md`; every decision with Kylie's name and date is in `docs/expected-draw-decisions-oct7.md`):
- **A game:** the median announced crowd for this team *in this building* on this kind of date (home opener, preseason, weeknight/Fri/Sat/Sun, holiday = Saturday, by month when 3+ games), over the last three normal seasons (two for the WNBA, NWSL, MLS and women's college basketball), times this season's level once enough home games are in, times the opponent's past draw here (recent seasons weighted, shrunk toward 1). **Both adjustments apply in every league** (Kylie, Oct 7). Capped at the building, with the middle half as the range. Playoff games keep the building.
- **A show:** the room's own Billboard average per reported show for MSG, Kia Forum, Barclays, Prudential and Intuit Dome; else **57% of the concert setup** (`CONCERT_FILL`), never above the room. Arts & Theatre and Miscellaneous listings are not sized (they fall back to the room).
- **Friction gate:** a game feeds friction by the **low end** of its estimate (S1); a show by its room (C1, until venue averages cover most rooms). A counted crowd always wins.
- **On screen:** the event page shows "~24,000 People (Estimated) ⓘ", Seats, and "Middle half 21,000–25,000"; the ⓘ opens "How estimates work", one card for every estimate, games and shows. After the game, "Estimated ahead: ~X" from the nightly capture. List rows and map cards show "24.0k est". No per-event basis sentence and no "adjusted for this opponent" (Kylie, Oct 7).
- **Held-out check** (`docs/expected-draw-check.md`): each team's last two seasons predicted from earlier ones. Half of all games within **5.1%** against 9.2% sizing by the building. Round 2 (promotions by kind, top teams, MLB) found only special-ticket nights pass; MLB's feed lists promotions only from 2025, so that test has one training season. The forward log ("Saved ahead") starts scoring as announced crowds land for games listed from Oct 7 on.
- **Nightly job** (`schedule-archive.yml`): archive → recompute expected draws (0.5 s, may fail without losing the night) → write the catalog → commit. Each saved listing carries the estimate the app showed. Kylie ran `supabase/migrations/0009_expected_draws_by_venue.sql` Oct 7; the `expected_draws` table is keyed by building now. The whole run takes ~3 minutes.

**Bugs fixed this session:** 16 of New York's 18 teams had saved no past crowds (the collector's venue-name map had no New York buildings), so New York games were sized by their buildings; the collector read every city's starts on Los Angeles time; WNBA, MLS and NWSL playoff games read as regular season; the nightly saved reads sized every game by its building.

**Research in, saved in full** (Oct 7): `docs/concert-venue-figures-answer.md`, `docs/expected-draw-demand-signals-answer.md`, `docs/next-cities-research-answer.md` (+ `docs/next-cities-overlap.py`). Out to Kylie: `docs/promo-history-research-prompt.md` (MLB 2021–2024 promotions game by game, other leagues where published).

## Changes made (this session, all pushed)
`src/data/{expectedDrawBuild,expectedDraw,expectedDrawIndex,read,index,types,venues,scheduleArchive,forecastCapture,startForecastIndex}.ts`, `src/data/sources/{espnSource,roundLabel}.ts`, `src/screens/EventScreen.tsx`, `src/map/{crowdPoints,CrowdLayer}.tsx`, `src/styles.css`, `scripts/{attendance-collect,attendance-calibrate,expected-draw-check,mlb-context-collect,catalog-write,forecast-index}.mjs`, `.github/workflows/schedule-archive.yml`, `supabase/migrations/0009_expected_draws_by_venue.sql`, `data/attendance/**` (every team, 2022–2026, with MLB promotions and records going in), `data/mlb-context.json`, 11 docs under `docs/`, `BACKLOG.md`. The nightly job's own commits ("Save the schedule for …") are not ours.

## Key decisions in force (new this session; earlier ones in BACKLOG.md)
- **Every factor is a candidate, kept only if it beats the rule without it on held-out announced crowds, with its definition written down before the run** (`docs/expected-draw-decisions-oct7.md`). Constants are not re-tuned to pass. Score a factor on the games it touches as well as overall; the first promotions test missed real spikes by scoring only overall.
- **Resale prices are off:** SeatGeek's and Ticketmaster's terms forbid storing them (demand-signals answer). Kylie had approved a capture; it is not built.
- **Weather and same-night competition stay out of the crowd estimate** (the read already counts them).
- **No "Kylie's rule" without her name and a date beside it** (Oct 7, carried forward).
- **Show a table's typical case, not only its spikes**: the quick promo-night table shown to Kylie listed the biggest lifts first and misled; corrected in the decisions doc.
- **Testing notes:** `npm i --no-save playwright-core` in a fresh container; headless Chromium at `/usr/bin/chromium` with swiftshader flags; `waitUntil: 'commit'` then wait, since `networkidle` never settles on the map. The home picker covers the Explore map in a fresh browser; open an event page directly (`/event/<id>?metro=<id>`). Scripts that import from the repo run from the repo root. `gh workflow run schedule-archive.yml --ref main` triggers the nightly job. No Ticketmaster key locally. Don't `pkill` vite; `kill $(lsof -ti:3001)`.

## Next steps
1. **Atlanta**, via the checklist (then Bay Area, Chicago, Dallas–Fort Worth, Montreal). **Both research prompts per city are drafted** (`docs/<city>-venue-table-prompt.md`, `docs/<city>-city-type-prompt.md`); Kylie is running them in the background. Save each answer in full when it arrives; start a city's build only when both its answers are in. Research its city type before touching `CITY_TYPE`; copy New York's venue-table and arrival-mode prompts; check every ESPN id against the feed. The next-cities answer has its boundary, venues and gaps.
2. **Tester interview, in person, about Oct 13.** A day before: a data-side check that her LA, San Diego and New York nights show reads. **Her Canadiens night (May 25, 2026) has no read until Montreal**, now fifth; Kylie has not yet said whether to seed that one date by hand from `docs/research-past-dates/san-diego-montreal.md`.
3. **When the promo-history answer arrives:** fold it into `data/attendance/<team>.json` promotions and rerun `scripts/expected-draw-check.mjs`; add special-ticket nights to the app before MLB returns in March.
4. **Show-sizing gaps** (BACKLOG "Show sizing follow-ups"): Petco park-stage shows, a volleyball listing at full room, a festival listed twice, Arts & Theatre at full room.
5. **Then the distance discount**, as its own proposal, calibrated per city; the Bay Area is its natural test.

**Rules to carry (Kylie, Oct 6–7):** never report a gap from anyone's ratings as progress, never tune a constant to close one; attendance on held-out dates is the only accuracy target. Save every research source in full. Keep sessions lean.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
