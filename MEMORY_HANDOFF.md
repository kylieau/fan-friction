# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work lives in `BACKLOG.md`. Product rules live in `CLAUDE.md` and `docs/`.

_Last synced: Oct 1, 2026._

## Current state
- **In focus:** Step 2 (the 13 seeded test nights). **Research is done and the rating model is redesigned; no data code yet.** Everything is committed and pushed to `main` (live at https://fan-friction.vercel.app/).
- **Working tree:** clean after this sync. No outside changes.
- **Waiting on Kylie** for reactions to `docs/rating-model-draft.md` (audience-overlap rule, friction weights, occasion/friction table for all 13 nights). Step 2 can start without them.
- **Review page** (private artifact): https://claude.ai/artifact/WaSZurptyrcUs74KUjBE6F. Options A/B/C mockups plus the full research table. It is out of date: option C still says "Local Load." Update it before Kylie shares it.

## Changes made (this session, all on `main`)
- **Rating model** (`docs/product-decisions.md`, "Rating model" section): per-event Squeeze scores are gone. A date gets one 1–10 rating shown word first ("Cooked · 9/10"); events get an occasion chip, fact chips and a Low/Moderate/Heavy/Extreme friction verdict, with no number.
- `src/config/scoreLabels.ts`: all word ladders (Chill → Cooked, Routine → Marquee, friction levels) plus `showFriction()` (Low is never shown).
- `src/components/NightScore.tsx` + `src/styles.css`: word-first score line, optional date with a calendar icon (for share cards), "Unrated" when there's no rating.
- `src/screens/MapScreen.tsx`: "Tonight" → "Today"; the score line has no date there.
- `src/components/FirstRunTips.tsx`: tip 2 redrafted, but **all tips are on hold** (see backlog).
- `design/brand/README.md`: notes Kylie's light top bar overrides the kit's Dodger blue.
- **Research fixes** in `docs/test-nights-and-ratings.md`: night 5 adds the Clippers (rating 4 → 5); night 6 adds the Lakers (2 → 4); ELO 8:00; night 10 was 90°F, not 96°F; the 2017 Coliseum held 93,607; Banc of California Stadium name; night 9's comparison Friday was an Ohtani start.
- `docs/rating-model-draft.md`: open drafts (Unrated states, overlap rule, friction weights, 13-night occasion/friction table).

## Key decisions still in force
- **Kylie's explicit instructions beat** mockups, docs, the brand kit and other models' output. Second opinions from other models are input, not decisions; flag where they break her rules.
- **Name:** "Fan/Friction" everywhere a slash fits.
- **Free until forced:** flag any cost with 🚩. **Swappable pieces:** map, each data source, storage and the name each sit behind one small file.
- **Stack:** React + Vite + TypeScript, MapLibre + OpenFreeMap, Supabase later, Vercel free plan, Node 24. MapLibre's worker must be packaged by Vite (`?worker&url` + `setWorkerUrl` in `BaseMap.tsx`) or the map is blank.
- **Score display:** every score has a word, never a bare number. Map: "Cooked · 9/10" (the header has the date). Share cards: "FRI, OCT 25 · Cooked · 9/10." Don't label it "Night" (many events are day games); "nights" stays in the log voice (Nights tab, Famous nights, Your nights, "Pick a night"). Kylie reserves judgment on that last one.
- **Friction:** from pre-event facts only (including standings/rankings that day); covers competing events, travel/corridors, timing and weather. Weights differ by event type. Show Moderate+ only. Kylie is still unsure about the word "friction" but it stays for now.
- **Weather:** venue-local raw numbers (°F, rain), never a citywide LA figure, never words like "heat." Small bump only.
- **Crowd is evidence, never an input.** Always labeled announced/reported/estimated; say "sold out" when a source does; no invented % of capacity.
- **Night 5 stays at 5** until there is an explicit audience-overlap rule.
- **Light top bar** (`#F7F8FA`), confirmed by Kylie.
- **Sources:** pro-football-reference blocks automated reads (403); use team-season pages on Wikipedia. Basketball- and hockey-reference show start times in Eastern time.

## Next steps
1. **Build step 2:** the data layer. Generic "crowd event" records, venues (coordinates and capacity by year), teams and metros as records, the 13 nights hardcoded behind a plug-in source interface. Use the verified data in `docs/test-nights-and-ratings.md` and the draft occasion/friction in `docs/rating-model-draft.md`, marked as draft.
2. When Kylie reacts to the drafts, fold her answers into `product-decisions.md` and delete what's settled from `rating-model-draft.md`.

**Next command to run:**
```bash
npm run dev   # local preview at http://localhost:3001, then start the step 2 data layer
```
