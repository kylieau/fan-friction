# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work lives in `BACKLOG.md`. Product rules live in `CLAUDE.md` and `docs/`.

_Last synced: Oct 2, 2026._

## Current state
- **Step 2 (data layer) is done, committed and pushed to `main`** (live at https://fan-friction.vercel.app/). Verified: `npm run build` passes, a one-off check found all 38 events link to real venues, teams and ratings, and a phone-size screenshot of the Nights tab looked right.
- **Visible change:** the Nights tab lists the 13 seeded dates as "Famous nights" (rating badge + "Cooked · 9/10 · Fri, Oct 25, 2024"). Rows don't open anything yet.
- **Working tree:** clean. No outside changes.
- **Waiting on Kylie:** whether today's Map should say "Quiet" instead of "Unrated" when nothing is on, and a second opinion on overlap and weights (see backlog). Neither blocks step 3.
- **Review page** (private artifact WaSZurptyrcUs74KUjBE6F) is still out of date ("Local Load" in option C).

## Changes made (this session, all on `main`)
- `src/data/`: new data layer.
  - `types.ts`: generic `CrowdEvent` (place = venue / point / route, audience, teams or performer, labeled crowd figures, venue-local weather, draft occasion/friction), `Venue` (names over time, capacity by year and setup, roof), `Team`, `DateRating`, `CityDate` with status quiet / unrated / rated.
  - `venues.ts` (11 LA venues, `venueNameOn`, `capacityOn`), `teams.ts` (LA teams + visitors), `audience.ts` (Kylie's overlap rule).
  - `seed/testNights.ts`: 38 events and 13 hand-set ratings with headlines, notes and sources. Unknown start times and counts are `null`/absent, not guessed.
  - `sources/`: the plug-in `EventSource` / `RatingSource` shape and the seed source. `index.ts` is the only entry screens use (`getCityDate`, `getRatedDates`, `todayIn`).
- `src/screens/NightsScreen.tsx` + `src/styles.css`: Famous nights list.
- Docs: `product-decisions.md` (overlap rule, rain = light friction, weights = working draft), `rating-model-draft.md` (Kylie's Oct 1 answers; night 13 no longer cites the rain delay), `test-nights-and-ratings.md` (night 5 stays 5 under the rule), new `second-opinion-prompt.md`, `BACKLOG.md`.

## Key decisions still in force
- **Kylie's explicit instructions beat** mockups, docs, the brand kit and other models' output. Other models' opinions are input, not decisions.
- **Name:** "Fan/Friction" everywhere a slash fits. **Free until forced:** flag any cost with 🚩. **Swappable pieces:** map, each data source, storage and the name each sit behind one small file.
- **Stack:** React + Vite + TypeScript, MapLibre + OpenFreeMap, Supabase later, Vercel free plan. MapLibre's worker must be packaged by Vite (`?worker&url` + `setWorkerUrl` in `BaseMap.tsx`) or the map is blank.
- **Data layer rules:** screens read only through `src/data/index.ts`; new feeds are added as sources there. Dates are local `YYYY-MM-DD` and times local `HH:MM` in the metro's zone. Every crowd figure has a kind (announced / reported / estimated) or `soldOut`. Leave unknown facts empty; never guess them.
- **Score display:** every score has a word, never a bare number ("Cooked · 9/10"; share cards add the date). Not labeled "Night"; "nights" stays in the log voice.
- **Audience overlap (adopted Oct 1):** Same sport or the same fans' must-see = High; different sports = Medium; sports vs. concerts or different genres = Low; same genre or era = Medium. Overlap acts only on event friction, never the date's rating. Night 5 stays at 5.
- **Friction:** pre-event facts only; competing events, travel/corridors, timing, weather; weights by event type (draft table is the working version). Show Moderate+ only. Rain counts, lightly. Chargers night 11 = Notable for now. Lakers night 1 = Heavy despite near-sellout.
- **Weather:** venue-local raw numbers, never a citywide figure, never words like "heat" in what users see.
- **Crowd is evidence, never an input.**
- **Sources:** Wikipedia is blocked in cloud sessions (egress proxy); web search works. pro-football-reference blocks automated reads. Basketball- and hockey-reference show Eastern times.
- **Screenshots:** `playwright-core` (installed in the scratchpad) with `executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'` and `--use-angle=swiftshader --enable-unsafe-swiftshader`. Don't `pkill -f vite`; it kills the shell.

## Next steps
1. **Step 3:** Map in Crowds mode for a chosen date (gold heat by crowd/capacity, friction chips Moderate+, ★ biggest crowd, SOLD OUT tags, the date's rating) plus the Event screen. Let Famous nights rows open their date on the map. Data comes from `getCityDate`.
2. When Kylie answers Quiet vs. Unrated, update `MapScreen.tsx` to use `getCityDate(todayIn(metro))` status.
3. When the second opinion comes back, fold it into `product-decisions.md` and trim `rating-model-draft.md`.

**Next command to run:**
```bash
npm run dev   # local preview at http://localhost:3001, then start step 3 in src/screens/MapScreen.tsx
```
