# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`.

_Last synced: Oct 6, 2026 (second session, mid-day). Everything below is committed and pushed. Current state and Changes made describe the morning's Explore work; the afternoon's work is under Next steps._

## Current state
**Explore is "one day at a time"** (`docs/explore-proposal-oct6.md`, rounds 1–5, all built and pushed). Kylie reviewed each round on the local site.
- The header date is the picker: a chevron, tap opens the month sheet. No date pill, no Next 7 days, no auto-widen. Old `?when=week` links open the day.
- The strip is a carousel: eight cells to the width (half, seven, half), swipe browses, tap selects, viewed day in the third full slot with a blue border, today's number in a filled Dodger-blue circle. Anchored on today (two weeks back, a month ahead) unless the viewed day is far away.
- A "Today" pill shows only when the map is on another day.
- The month sheet drops from under the header (no Done). A grab bar on its bottom edge: drag or flick up, tap, Escape, or tap the header date again to close.
- Weather: map header and date page show the city point's feels-like **"H:76° L:52°"** every day, quiet days included. Tap or hover the map chip for a small light note, "Feels-like, not air temp", that fades after 3 s. Event rows keep the start-hour venue number (the formula's input).
- Map chrome: credit "i" bottom-left; the "?" key (only on days with events) and the recenter button (only after a hand move or a remembered view) are one column on the right. All three ride the sheet's real top edge (`--sheet-peek`), so a selected event or a home bar can't hide them.
- The sheet title is "On the map" (the date is said once, in the header). No "Next up" line.

**Formula tuning (Oct 6, pushed):** events are sized by an optional **expected draw** (known ahead, always an estimate, capped by the building; seeded only on the East LA Classic at 18,000). Pull table 1 / 1.2 / 1.6 / 2.5. Gilmour has a storyline point (Major). Date why line: "World Series Game 1 pulls on five other crowds"; the seat figure is a detail line on the date page. WS G1 reads Moderate; 10/25/24 is 9.2 Cooked; mean gap from hand ratings 0.75 (comparison only). Artifact for Kylie: https://claude.ai/artifact/F1oujANJrwodjs39D1pd7F

**Weather data:** the nightly job now also fetches the city point's daily feels-like high and low for today through 15 days ahead (one extra Open-Meteo call), stored under `days` in each `data/weather/la/*.json` and indexed as `WEATHER_DAYS`. The 13 seeded nights were backfilled.

**Not verified on a real phone:** the strip's swipe/snap feel, the month sheet's drag-to-dismiss, the recenter after a pinch. Checked only in headless Chromium.

## Changes made (this session)
Formula: `src/data/{types,read,formulaRead}.ts`, `src/data/formula/{crowdFight,gridlock,occasion,index,weather}.ts`, `src/data/seed/testNights.ts`, `docs/{formula-table,formula-tuning-oct5,formula-v4}.md`. Weather: `scripts/{weather-fetch,weather-index}.mjs`, `src/data/{weather,weatherIndex,index}.ts`, `data/weather/la/*.json`. Explore: `src/components/{DayStrip,MonthSheet,Icons}.tsx`, `src/components/WhenControl.tsx` (deleted), `src/lib/{view,dates,useSheetDrag}.ts`, `src/map/{BaseMap,MapCamera}.tsx`, `src/screens/{MapScreen,DateScreen,HomeScreen,ExploreScreen}.tsx`, `src/styles.css`. Docs: `docs/explore-proposal-oct6.md`, `docs/ux-notes.md`, `BACKLOG.md`, `CLAUDE.md` (stale "through PR #12" fixed).

**Not ours, left untracked:** `docs/october-2026-events-prompt.md` (a research brief for October 2026 events in LA, San Diego, Seattle and New York, from a parallel session). It was swept into a local commit by mistake and taken back out before pushing.

## Key decisions in force
- **Explore (Kylie, Oct 6):** one day only; the header date is the picker; Today pill only off today; swipe browses, tap selects; today = filled circle on the number, not the word (calendar convention; NN/g's "label it Today" is for full pickers); no arrows on the strip, the half cells are the scroll hint; month sheet drops from the header and lifts away; "H: L:" like Apple Weather; feels-like note small and light, not a dark box; recenter only after a hand move; credit bottom-left, controls on the right.
- **Week view stays on Home only** ("This week" mini map). Kylie asked for it on Explore, then reconsidered; Claude agreed. Revisit only if she misses it in use.
- **Formula (Oct 6):** option C (expected draw + steeper pull); storyline for Gilmour; plainer why lines. Hand ratings are comparison only, never the target.
- **Words (Oct 5):** Chill · Mild · Spicy · Brutal · Cooked. Event verdict title "Fighting heavy friction". Friction chips: Low never shown; Moderate pale blue, Heavy Dodger blue, Extreme ink.
- **Pushing:** commit, leave it on the local site for her, push when she says.
- **UI copy rule:** users are not dumb; no explanatory banners; utilities behind the gear. She will ask for a helper when one is needed (the feels-like note).
- **Event-entry notes (Kylie, Oct 6):** she has many; attack them systematically, backend data first, then tab by tab. Do not drip-fix.
- **No-results rule:** only the event's own outcome is excluded. Observed weather may rate a past date. Crowd counts stay evidence.
- **Weather:** one source (Open-Meteo, free non-commercial, on the cost milestones). City point = the metro's map center (near Inglewood for LA); fine for now.
- **Accounts, Home, You, Friends, Stats, profiles, sign-in:** as locked Oct 5 (see `BACKLOG.md` → Accounts and Home and Explore). Private by default; no strangers' feed; no location, ever.
- **Working rules:** propose structural changes, then wait. Never delete a feature. 🚩 any new cost. Kylie locks decisions. Fan/Friction with the slash. Screens read only through `src/data/index.ts`. One gold button per screen. Traffic is an estimate, never red.
- **Testing notes:** headless Chromium at `/usr/bin/chromium` with swiftshader flags; a scratch DevTools-protocol script can drag the map. Set `fan-friction:home-metro` = `"la"` and `fan-friction:tipsDone` = `true` in localStorage first, or the home picker and tips cover the map. Don't `pkill` vite.

## Next steps
**Oct 6 (later session): the build order is `docs/big-picture-plan-oct6.md`.** Follow it step by step, proposal first. Everything below is pushed to `main`.
1. **Step 1 done and reviewed by Kylie:** the event page is the entry (Review and With are the only typed fields; Outcome, Starter, Promo, TV, Setlist are event facts from sources), a + in You with search then Add it yourself (sport, level, division, competition chips per `docs/sport-list-second-opinion-answer.md`; city first; exact day only), a hand-typed night's page, Big event files a suggestion. Migrations 0005 and 0006 are run. Kylie will have more notes after using it.
2. **Step 2 in progress:** the nightly run saves finals and announced crowds (`scripts/results-fetch.mjs`, `data/results/la/`, `src/data/results.ts`); Outcome, Starters and the box-score count show on the event page. Ducks, LAFC, Angel City and UCLA/USC basketball (men's and women's) are on the map (Pauley Pavilion and Galen Center added). **Venue table (Kylie, Oct 6): 5,000+ rooms only, by research prompt:** `docs/la-venue-table-prompt.md`. When she pastes the answer, check each figure against its source and fold it into `src/data/venues.ts`. Calibration first pass done (`docs/calibration-oct6.md`; `npm run attendance-collect` then `npm run attendance-calibrate`; `src/data/expectedDraw.ts` applies the medians on read). Next: the retune proposal in that doc, after the venue table.
3. Also done Oct 6: the ESPN placeholder-kickoff and Galaxy-fixture fix; the Today tab on the strip's edge (left when looking ahead, right when looking back); Note folded into Review.
4. Her event-entry notes, when she has them: backend data first, then tab by tab.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001 → Explore
```
