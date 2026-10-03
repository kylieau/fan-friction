# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work lives in `BACKLOG.md`. Product rules live in `CLAUDE.md` and `docs/`.

_Last synced: Oct 3, 2026._

## Current state
- **Step 4 is built on branch `cursor/nights-calendar-when-0a4d` (not merged).** Nights has a shaded calendar and search. The Map's date button and range dropdown are one When control. `npm run build` passes. Phone-width screenshots are in the PR. Live site https://fan-friction.vercel.app/ still deploys from `main`, so this is on the branch until it merges.
- **What Kylie can open:** Nights shows a month calendar (the number on a shaded day is its rating; Quiet and Unrated stay readable), search by team, artist, or venue, and Famous nights when the search box is empty. The Map header's When menu is Today, Next 7 days, All upcoming, or Pick a date. A range does not get its own score; the header score is still for the base date. Today, when quiet, still widens to the next 7 days until someone picks When. There is no city switcher yet, because Los Angeles is the only metro. On this night and the Nights tab name are unchanged.
- **Working tree:** branch `cursor/nights-calendar-when-0a4d`, not merged. `main` is unchanged.
- **Live data:** MLB schedule (Dodgers, Angels) and ESPN team schedules (Lakers, Clippers, Kings, Galaxy, Rams, Chargers, USC, UCLA), home games only, today onward. Past dates come from the 13 hand-seeded nights.
- **The rating model is still draft in code.** `src/data/audience.ts` has the Oct 1 rules; v3 (`docs/overlap-and-date-rating-v3.md`) is built at Step 8. Upcoming events show "Unrated."

## Changes made (this session, on the Step 4 branch)
- **Nights:** calendar shaded by rating, legend, search by team, artist, or venue. Famous nights stays the empty-search list. On this night stays.
- **Map:** one When control replaced the date button and the range dropdown. The area switcher renders only if a second metro exists.
- **Data:** `getCalendarMonth` and `searchNights` in `src/data/index.ts`. Screens still read only through that file.
- **Also fixed while checking:** the search box was being squashed, and the Mid rating number was hard to read on its pale blue.

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
1. Kylie looks at the Nights calendar, search, and the Map's When control (phone width). Ask whether she has more UX/UI notes and anything for the remaining seed gaps (`BACKLOG.md`).
2. Then Step 5 (You tab, saving with Supabase), Step 6 (Traffic), rest of Step 7 (results, concerts via Ticketmaster), Step 8 (rating formula).

**Next command to run:**
```bash
npm run dev   # local preview (http://localhost:3001, or 3002 if busy); open Nights, or the Map and tap When
```
