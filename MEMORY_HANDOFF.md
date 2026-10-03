# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work lives in `BACKLOG.md`. Product rules live in `CLAUDE.md` and `docs/`.

_Last synced: Oct 3, 2026._

## Current state
- **Map rework and upcoming events are done, committed, pushed to `main` and verified** with phone-size screenshots (touch drag checked mid-drag; real-phone smoothness untested). `npm run build` passes. Live at https://fan-friction.vercel.app/ (Vercel deploys from `main`).
- **What Kylie can open:** the Map is now the whole screen with the header and a swipeable sheet on top. Today shows "Quiet" when empty and the map widens itself to the next 7 days (then everything) with hollow pins for upcoming games; a dropdown picks Today / Next 7 days / All upcoming. Tap a pin, a name label or a list row to select it (ring, highlight, sheet row), then the gold "See what beat it" button opens the Event screen. Rows wear a friction chip, or a "why" chip (sold out, occasion, first fact) where friction is hidden at Low. Nights tab has Famous nights and an "On this night" row (only when a famous night fell on today's month and day).
- **Working tree:** clean and in sync with `origin/main`. No outside changes.
- **Live data:** MLB schedule (Dodgers, Angels) and ESPN team schedules (Lakers, Clippers, Kings, Galaxy, Rams, Chargers, USC, UCLA), home games only, today onward. Past dates come from the 13 hand-seeded nights.
- **The rating model is still draft in code.** `src/data/audience.ts` has the Oct 1 rules; v3 (`docs/overlap-and-date-rating-v3.md`) is built at Step 8. Upcoming events show "Unrated."

## Changes made (this session, all committed on `main`)
- **Data layer:** `src/data/sources/mlbSource.ts`, `espnSource.ts` (new; plug-in sources with an optional `upcoming()`), `types.ts`, `index.ts` (`getUpcoming`, `getEventsBetween`), seed fixes in `testNights.ts` (night 4 counts, labeled estimates; a misplaced Beyoncé estimate was fixed).
- **Map:** `src/screens/MapScreen.tsx` (rewritten), `src/map/CrowdLayer.tsx` (tappable, selection ring, insets, hollow upcoming dots, day tags), `src/map/crowdPoints.ts`, `src/lib/useSheetDrag.ts`, `src/lib/view.ts` (one place + date view), `src/lib/chips.ts`, `src/lib/dates.ts` (`addDays`), `src/components/NightScore.tsx` (Quiet), `src/components/FirstRunTips.tsx` (Back; old tip 3 on hold), `src/screens/NightsScreen.tsx`, `src/screens/YouScreen.tsx`, `src/styles.css`.
- **Docs:** `docs/ux-notes.md` (Kylie's Oct 3 notes, the outside models' ideas, what was built), `docs/product-decisions.md` (Quiet).

## Key decisions still in force
- **Kylie's explicit instructions beat** mockups, docs, the brand kit and other models' output. Other models' opinions are input, not decisions; their facts get verified, and unverified figures may be seeded only if labeled estimated.
- **Don't delete what's built; rehome it** (Kylie, Oct 3). Tabs stay as four (Map, Nights, Compare, You). The Event screen stays.
- **Name:** "Fan/Friction" everywhere a slash fits. **Free until forced:** flag any cost with 🚩 (Ticketmaster key needs her OK first). **Swappable pieces:** each data source, the map, storage and the name sit behind small files.
- **Stack:** React + Vite + TypeScript, MapLibre + OpenFreeMap, Supabase later, Vercel free plan. MapLibre's worker must be packaged by Vite (`?worker&url` + `setWorkerUrl` in `BaseMap.tsx`). The little "i" on the map is the required map credit; keep it.
- **Data layer rules:** screens read only through `src/data/index.ts`. Dates are local `YYYY-MM-DD`, times local `HH:MM`. Every crowd figure has a kind (announced / reported / estimated) or `soldOut`. Start times are the scheduled time. Live sources serve today onward only so seeded nights never show twice.
- **Results rule:** that event's own results never count; earlier results (standings) do. Crowd is evidence, never an input.
- **Score display:** word first ("Cooked · 9/10"); Quiet = no big events, Unrated = events but no rating. Friction shows Moderate+ only; where hidden, a "why" chip stands in. One gold primary button per screen; on the Map it acts on the selected event (draft; Kylie isn't sure she loves it, so keep it flexible).
- **Structure (Kylie, Oct 3):** the night is the main object; shares should be about the night, not one event. One view = place + date, owned by the header; one selected event id shared by pin, label and row. Nights = every night you can open (calendar, search by who played, Famous nights); You = only nights marked "I was there" (titled "Your nights"); never both. Upcoming / Tonight / Settled lifecycle ("Settled, no evidence" is a real state); a plan is an upcoming night you flagged. Own-follows ("Following") are fine; a social feed is not. No user-set friction scores. Traffic is a layer of the same map; she doesn't mind a toggle that does nothing while we build.
- **Rating model (v3, adopted Oct 2):** Crowd fight (share of seats) and Gridlock (zones from drive times); every number a placeholder; details in the v3 doc.
- **Sources:** Wikipedia is blocked in cloud sessions; web search works. ESPN's feed rejects headless-Chrome user agents (use a normal one in screenshots).
- **Screenshots:** `playwright-core` in the session scratchpad, `executablePath: '/usr/bin/chromium'`, args `--use-angle=swiftshader --enable-unsafe-swiftshader --no-sandbox`, a normal iPhone user agent, set `localStorage['fan-friction:tipsDone']='true'`. `npm run dev` may land on port 3002. Don't `pkill -f vite`; use `kill $(lsof -ti:PORT)`.

## Next steps
1. **Step 4 (Kylie said wait until she says go):** Nights calendar shaded by each date's rating, with a legend, plus search by team, artist or venue. Her latest idea to build with it: one "When" control (Today, Next 7 days, All upcoming, Pick a date) replacing the Map's dropdown and date picker, with the very top bar of the Map becoming the area (city/metro) switcher, shown only once a second metro exists.
2. First, ask Kylie for more UX/UI notes (she said more are coming) and any seed data gaps she can fill (`BACKLOG.md`).
3. Then Step 5 (You tab, saving with Supabase), Step 6 (Traffic), rest of Step 7 (results, concerts via Ticketmaster), Step 8 (rating formula).

**Next command to run:**
```bash
npm run dev   # local preview (http://localhost:3001, or 3002 if busy); Step 4 starts in src/screens/NightsScreen.tsx once Kylie says go
```
