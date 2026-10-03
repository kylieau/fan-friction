# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work lives in `BACKLOG.md`. Product rules live in `CLAUDE.md` and `docs/`.

_Last synced: Oct 3, 2026._

## Current state
- **Step 5 is on branch `cursor/you-tab-local-log-684c` (not merged).** The You tab lists her seeded log plus nights she marks, with filters, plain counts, Plans-first order, and Export. Saving is on this phone. `npm run build` passed. Phone-width stills are in the PR. Live site https://fan-friction.vercel.app/ still deploys from `main`.
- **What Kylie can open:** You shows Up next (empty until she taps Plan this night), Your nights, team and sport filters, and counts by team and sport, sport, and venue. The Event screen has "I was there" and, for today or later, "Plan this night." Export my nights downloads a JSON file. The Map's top bar shows Los Angeles even though it is the only area. Nights calendar is unchanged: date in the corner, rating in the center.
- **Working tree:** branch `cursor/you-tab-local-log-684c`, not merged.
- **Live data:** MLB schedule (Dodgers, Angels) and ESPN team schedules (Lakers, Clippers, Kings, Galaxy, Rams, Chargers, USC, UCLA), home games only, today onward. Past dates come from the 13 hand-seeded nights. Her personal log is separate, from `docs/kylie-logs.md`.
- **The rating model is still draft in code.** `src/data/audience.ts` has the Oct 1 rules; v3 is Step 8. A logged night shows a rating only when that exact day is in the metro, is not under the 5k floor, and already has a hand rating.

## Changes made (this session, on the Step 5 branch)
- **You:** Up next, Your nights, filters, plain stats, order setting, Export.
- **Event:** "I was there" and "Plan this night."
- **Saving:** `src/data/storage/` with a phone implementation and an uncalled cloud stub. No Supabase project, no keys.
- **Log:** `src/data/seed/kylieLog.ts` from her log doc, including rough concert dates.
- **Map:** the area switcher stays visible with Los Angeles as the only choice.
- **Parked:** `docs/nyc-filler-collection-prompt.md` is research only. New York is not seeded.

## Key decisions still in force
- **Kylie's explicit instructions beat** mockups, docs, the brand kit and other models' output. Other models' opinions are input, not decisions; their facts get verified, and unverified figures may be seeded only if labeled estimated.
- **Don't delete what's built; rehome it** (Kylie, Oct 3). Tabs stay as four (Map, Nights, Compare, You). The Event screen stays.
- **Name:** "Fan/Friction" everywhere a slash fits. **Free until forced:** flag any cost with 🚩 (Ticketmaster key needs her OK first). **Swappable pieces:** each data source, the map, storage and the name sit behind small files.
- **Stack:** React + Vite + TypeScript, MapLibre + OpenFreeMap, Supabase later, Vercel free plan. MapLibre's worker must be packaged by Vite (`?worker&url` + `setWorkerUrl` in `BaseMap.tsx`). The little "i" on the map is the required map credit; keep it.
- **Data layer rules:** screens read only through `src/data/index.ts`. Dates are local `YYYY-MM-DD`, times local `HH:MM`. Every crowd figure has a kind (announced / reported / estimated) or `soldOut`. Start times are the scheduled time. Live sources serve today onward only so seeded nights never show twice.
- **Your nights** are not map dots. Rough dates stay rough. Events under 5k can be logged and get no rating. Personal notes show only in Your nights. She does not set friction scores. Stats are counts only.
- **Saving:** the phone copy is the store for now. Supabase waits on her URL and anon key. Export is the backup because a browser clear can erase marks.
- **Area switcher:** visible with Los Angeles alone. Do not add a second metro in this work.
- **NYC filler** is a research prompt only. NFL is required with MLB, NBA, NHL, and at least one concert, plus one ordinary weeknight. Prefer the LA seeded dates. Goal 5, cap 10. Do not import LA rules onto New Jersey, Long Island, or the boroughs.
- **Results rule:** that event's own results never count; earlier results (standings) do. Crowd is evidence, never an input.
- **Score display:** word first ("Cooked · 9/10"); Quiet = no big events, Unrated = events but no rating. Friction shows Moderate+ only; where hidden, a "why" chip stands in. One gold primary button per screen; on the Map it acts on the selected event (draft). The Event screen's gold button is still Share. "I was there" is a separate toggle.
- **Structure (Kylie, Oct 3):** the night is the main object. Nights = every night you can open. You = only nights marked "I was there." A plan is an upcoming night she flagged. No user-set friction scores.
- **Rating model (v3, adopted Oct 2):** Crowd fight and Gridlock; details in the v3 doc. Not built yet.
- **Sources:** Wikipedia is blocked in cloud sessions; web search works. ESPN's feed rejects headless-Chrome user agents (use a normal one in screenshots).
- **Screenshots:** `playwright-core` in the session scratchpad, `executablePath: '/usr/bin/chromium'`, args `--use-angle=swiftshader --enable-unsafe-swiftshader --no-sandbox`, a normal iPhone user agent, set `localStorage['fan-friction:tipsDone']='true'`. `npm run dev` may land on port 3002. Don't `pkill -f vite`; use `kill $(lsof -ti:PORT)`.

## Next steps
1. Kylie looks at You (filters, a rough concert date, Export) and the Map area name. Ask whether the 2025 UCLA WBB list is short one night (the lines show 12; her recap said 13).
2. Then Step 6 (Traffic). Supabase still waits on her URL and anon key. New York stays parked.

**Next command to run:**
```bash
npm run dev   # local preview (http://localhost:3001, or 3002 if busy); open You
```
