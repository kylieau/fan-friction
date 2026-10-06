# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`. The build order is `docs/big-picture-plan-oct6.md`.

_Last synced: Oct 6, 2026, end of the second session. Everything below is committed and pushed to `main` (Vercel builds from it). Kylie said she wants to "save everything and transfer" before step 3; this is that snapshot._

## Current state
**Steps 1 and 2 of the big-picture plan are done and live.** Step 3 (Compare rebuild) **must not start until Kylie says so.**

**Step 1, the log entry (`docs/entry-proposal-oct6.md`):**
- The event page is the entry. Once Attended is on, a card under the button holds your **Review** and **With** (who you went with; private, lock icon). Edit opens one form; Remove from log sits small at the bottom with an inline confirm. Note was folded into Review (older notes become the review on load).
- Only Review and With are typed by the person. **Outcome, Starters, TV, Length and the crowd are facts from the leagues' feeds**, shown in the header. An upcoming game says "On ESPN2"; a past one "Was on".
- **Add an event**: a + beside the gear in You. Search first; a listed night is one tap away. "Add it yourself": What, Type, Sport chips (six shown, More), Level, Division (only where not implied), Competition (typing WNBA sets Basketball · Pro · Women's), exact day, City first, then that city's venues (or Another venue), Big event tick. A hand-typed night is yours only (under the floor, off the map, nearby read when the city has one), with its own page (`/entry/:id`). Big event files a suggestion to `suggested_events` (migration 0006) for Kylie to check and seed. Migrations 0005 (with_whom) and 0006 are run.
- You rows open the event page directly. Friends' rows still open the date page.

**Step 2, data (`docs/calibration-oct6.md`, `docs/retune-oct6.md`, `docs/la-venue-table-answer.md`, `docs/hard-access-oct6.md`, `docs/data-sources.md`):**
- **Nightly results pass** (`scripts/results-fetch.mjs`, in the 12:15am run): final scores, announced crowds and **game length** (MLB official from the box score's T line; other sports estimated from the first and last play's wall-clock stamps on ESPN's game page), three days back. `src/data/results.ts` attaches them on read; a result matches a seeded event by date, building and home side. The box score's announced crowd replaces a seeded estimate. **Hours at games** in You → Stats sums known lengths.
- **Feeds:** Ducks, LAFC, Angel City, UCLA and USC basketball (men's and women's) added to ESPN. Soccer finals are `STATUS_FULL_TIME` (fixed). ESPN placeholder kickoffs keep their real date (`timeValid`); Galaxy fixtures need `?fixture=true`.
- **Venue table:** every LA room of 5,000+ (37 venues), figures labeled official/reported/estimated, coordinates geocoded. Kia Forum corrected (17,500 concert; 17,505 was basketball).
- **Calibration:** `data/attendance/la/` holds three seasons of announced crowds for 16 teams; `scripts/attendance-calibrate.mjs` writes medians by team, day class and month to `src/data/expectedDrawIndex.ts`; `src/data/expectedDraw.ts` sizes an event by them when no draw is seeded. UCLA football pulls as 42,000, not 89,702.
- **Retune analysis** (`scripts/retune-analysis.mjs`): the direction holds (contested games draw a few percent below their norm) but the constants can't be pinned; **Kylie: keep the placeholders, rerun in a season.**
- **Hard access is a rule, not a hand flag** (`isStrained` in `src/data/venues.ts`, measures in `src/data/venueAccessIndex.ts` from `scripts/venue-access.mjs`): relief ≥ 40 m within 500 m and ≤ 4 named streets within 250 m. Flagged: Hollywood Bowl, Greek, Rose Bowl, **Dodger Stadium, Weingart Stadium**. Pauley off (39 m). Weight: ×1.25 at 85% driving, scaled by the venue's car share (`carShare` on the venue, else 0.85 driving city / 0.4 transit city), per the research in `docs/hard-access-weight-answer.md`; ×1.5 was tested and rejected (a lone Monday Dodgers game would read 4.6). A cars-per-exit rule is still later, and it still needs OpenStreetMap for the lanes. Egress research received Oct 6; the ×1.25 rule is not locked to a replacement.
- **Today tab** on the strip's edge (left when looking ahead, right when looking back) replaced the floating pill.

**Principle (Kylie, Oct 6):** LA is the only city built by hand. `docs/new-city-checklist.md` is how every later city gets added. Anything that can't go on that checklist isn't done.

## Changes made (this session, all pushed)
Entry: `src/components/{EntryLayer,FactList,Icons}.tsx`, `src/screens/{EventScreen,YouScreen,AddEntryScreen,ManualEntryScreen,DateScreen}.tsx`, `src/data/{personalLog,suggestions,competitions,types,index}.ts`, `src/data/storage/supabaseStore.ts`, `supabase/migrations/{0005_entry_private,0006_suggested_events}.sql`, `src/lib/view.ts`, `src/App.tsx`. Data: `src/data/sources/{mlbSource,espnSource,results}.ts`, `src/data/{results,resultsIndex,expectedDraw,expectedDrawIndex,venues,venueAccessIndex,teams}.ts`, `src/data/formula/gridlock.ts`, `scripts/{results-fetch,results-index,attendance-collect,attendance-calibrate,retune-analysis,venue-access}.mjs`, `scripts/formula-table.mts`, `data/{results,attendance}/la/`, `data/venue-access.tsv`, `.github/workflows/schedule-archive.yml`, `package.json` (devDeps `@mapbox/vector-tile`, `pbf`). Map: `src/components/DayStrip.tsx`, `src/screens/MapScreen.tsx`, `src/styles.css`. Docs: `docs/{big-picture-plan-oct6,entry-proposal-oct6,sport-list-second-opinion-prompt,sport-list-second-opinion-answer,la-venue-table-prompt,la-venue-table-answer,data-sources,calibration-oct6,retune-oct6,hard-access-oct6,hard-access-weight-prompt,new-city-checklist}.md`, `AGENTS.md` (logging bar locked), `docs/direction.md` (status note), `BACKLOG.md`.

The other session's commit fb20b3f (October research, `docs/research-oct-2026/`, the ESPN fix plan) is in history too. This session owns handoff and backlog syncs.

## Key decisions in force (new this session; earlier ones in BACKLOG.md)
- **Logging bar locked:** anything can be logged by hand; ~1,000+ is pre-listed; 5,000+ feeds friction and is on the map.
- **Only Review and With are typed**; every other fact comes from a source. No Letterboxd stars. Review follows the visibility switch (Only me by default).
- **Saved nights settle to Attended automatically**; no "Did you go?" step.
- **Results** come from the nightly run, one pass; game length is logged for every sport (official or estimated).
- **Big hand-typed events: suggest, don't publish.** Kylie checks `suggested_events` in Supabase and seeds.
- **Sport list v1** as the second opinion laid out (sport, level, division, competition). Kylie will have notes after using it.
- **Retune:** placeholders stay; rerun after a season of archived nights with concerts.
- **Hard access:** the rule above; Pauley off at 40 m; ×1.25 scaled by the venue's car share (research folded in Oct 6).
- **Free Ticketmaster key** OK at step 4 if it stays free with no later obligation; read the terms first.
- **Step 3 (Compare) waits for Kylie's go-ahead.**
- **Testing notes:** headless Chromium at `/usr/bin/chromium` with swiftshader flags and a phone user agent (ESPN 403s "HeadlessChrome"); set `fan-friction:home-metro` = `"la"` and `fan-friction:tipsDone` = `true` in localStorage. Don't `pkill` vite. Overpass (OpenStreetMap's query server) was overloaded Oct 6; the venue survey reads the map tiles instead. Open-Elevation rate-limits repeat calls (the script retries).

## Open for Kylie
- Notes on the entry layer and the Add form after using them; the sport list after a few entries.
- The known edges from step 1: the review isn't shown on the profile page yet; Big-event suggestions file only when signed in.
- The two weights, Pauley, and the Dodger Stadium property line can be revisited when the full OpenStreetMap data (parking lots) is reachable.
- Egress research received Oct 6: revised brief `docs/venue-egress-prompt.md`, narrative `docs/venue-egress-answer.md`, 43-venue table `docs/gridlock_inputs_all_43_venues.csv`. Gridlock rule is not locked. Keep ×1.25 until she approves a proposal. Cars-per-exit still needs OpenStreetMap for lanes.

## Next steps
**Plan reordered Oct 6 after Push Pilot's review (`docs/push-pilot-review-oct6.md`), Kylie approved:** map code-split (done) → catalog write path (proposal first) → San Diego via the checklist → Compare whenever she wants it → Ticketmaster in slices → the rest.
0. **Catalog write path, slices 1–2 live** (`docs/catalog-proposal-oct6.md`): migrations 0007 and 0008 run; GitHub secrets `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` set (the newer `sb_secret_…` key; the script refuses a publishable key); the nightly job's last step writes all seven tables (`scripts/catalog-write.mjs`); `src/data/sources/catalogSource.ts` reads upcoming games from `events` with the feeds as fallback. Attendance rows hold a date's games as a list (doubleheaders). **Slice 3 live:** `src/data/catalogCache.ts` loads a ±21-day window per metro on first read (shared by the strip's forty dates); weather, results, snapshots and coverage read it; the compiled indexes left the app (697 kB main download); scripts prime the cache from the index files (`scripts/prime-from-files.mjs`); `vercel-skip-archive-only.sh` skips deploys for data-only commits. All 346 weather rows, 54 day ranges and 29 snapshot rows are in the tables; the hand-rated nights read the same (9.6 / 8.5 / 6.7). **Catalog step done. San Diego half done (Oct 6):** `COVERED_METRO_IDS` in `src/config/metros.ts` is the one list the nightly jobs loop over (archive, weather, results, catalog write; collectors take a metro); Padres (MLB 135, Petco 2680) in the feed, team list and attendance pull; city facts set (driving city; Padres broad). San Diego's rows are in the tables and Explore shows Petco. **Waiting on Kylie:** the San Diego venue prompt (`docs/san-diego-venue-table-prompt.md`); then add SDSU (ESPN 21: football, mens- and womens-college-basketball), San Diego FC (usa.1 22529), Wave (usa.nwsl 21423) once Snapdragon Stadium and Viejas Arena exist, plus `VENUE_BY_NAME` entries and the attendance pull. Also fixed Oct 6: the map collapsed to zero height after the code-split (maplibre's CSS loads later now); `.basemap.maplibregl-map` wins.
1. **Compare** when Kylie says so (two nights side by side, "Compare with…" on the date page, this-year stats). Proposal first.
2. Egress research done (`docs/venue-egress-answer.md`, `docs/gridlock_inputs_all_43_venues.csv`): exit lanes are not published anywhere, so the cars-per-lane rule is **shelved**; hard access stays the measured rule at ×1.25 scaled by car share. Two follow-ups when wanted: fill `carShare` on venues from the CSV's official/reported rows (Hollywood Bowl 61% car, Petco ~80%, Golden 1 ~85–90%), and a "stack-parked lots" yes/no as a third access signal. Watch for LADOT's Dodger Stadium study (fall 2026).
3. Her event-entry notes, when she has them: backend data first, then tab by tab.
4. Step 4 later: Ticketmaster concerts 🚩 (free key; terms first) and a second city via `docs/new-city-checklist.md`.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
