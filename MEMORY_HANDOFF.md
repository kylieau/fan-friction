# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work lives in `BACKLOG.md`. Product rules live in `CLAUDE.md` and `docs/`.

_Last synced: Oct 3, 2026._

## Current state
- **Step 5 is on branch `cursor/you-tab-local-log-684c` (not merged).** The You tab lists her seeded log plus nights she marks, with filters, Events and Venues, a By type list, Plans-first order, and Export. Saving is on this phone. Phone-width stills: the closed Map (`18-map-closed-baseline.png`) and the city list floating on top without moving the score (`19-map-city-menu-overlay.png`). The When menu is `17-map-when-menu.png`. Earlier stills: a Dodgers row (`12-you-row-baseball-starter.png`), You stats (`11-you-events-venues-by-type.png`). Live site https://fan-friction.vercel.app/ still deploys from `main`.
- **What Kylie can open:** You shows Up next (empty until she taps Plan this night), Your nights, team and sport filters, and counts. The two big numbers are Events (each log entry, not each evening) and Venues. Under them, By type lists game, show, festival, and the rest. On a night row, each known fact is its own line: Outcome, Type, Starter, Promo, Notable. A game's type is the sport (Baseball, Women's basketball, Football). A concert's type is Show, or Festival or Live broadcast. Empty lines stay hidden. Her private notes stay off the row, the share card, and the map. Up next can show Starter and Promo only. The Event screen has the same fact lines, plus "I was there" and, for today or later, "Plan this night." The Map header shows the city as a closed chip. The list opens under it and stays short. The date control is a pill on the map. A date rating shows to one decimal, word first, with /10 smaller and softer than the number. Next 7 days shows that average when any day in the span is rated, and hides the score when none are. A single day keeps its own rating. The pill reads Today, Next 7 days, or the picked date. Nights calendar is unchanged: date in the corner, rating in the center.
- **Working tree:** branch `cursor/you-tab-local-log-684c`, not merged.
- **Live data:** MLB schedule (Dodgers, Angels) and ESPN team schedules (Lakers, Clippers, Kings, Galaxy, Rams, Chargers, USC, UCLA), home games only, today onward. Past dates come from the 13 hand-seeded nights. Her personal log is separate, from `docs/kylie-logs.md`.
- **Sat Oct 3, 2026 (LA) is seeded from Kylie's verified list only:** NLDS Game 1 at 1:08, USC vs. Washington at 4:30, Bruno Mars, Klangkuenstler, aespa, and ComplexCon. Provisional date rating **7.5** (draft). No Hollywood Bowl, BMO, Angel Stadium, Rose Bowl, or convention-center pin. That date uses the seed list instead of the live feed.
- **The rating model is still draft in code.** `src/data/audience.ts` has the Oct 1 rules; v3 is Step 8. A logged night shows a rating only when that exact day is in the metro, is not under the 5k floor, and already has a hand rating.

## Changes made (this session, on the Step 5 branch)
- **You:** Up next, Your nights, filters, Events and Venues, a By type list (game, show, and the rest; concerts included), order setting, Export. Each known fact is its own line. A game's type is the sport. Starter shows when her log named the pitcher. Outcome, Promo, and Notable stay hidden until a real one is known. Private notes are not on the row.
- **Event:** "I was there" and "Plan this night."
- **Saving:** `src/data/storage/` with a phone implementation and an uncalled cloud stub. No Supabase project, no keys.
- **Log:** `src/data/seed/kylieLog.ts` from her log doc, including rough concert dates.
- **Map:** the header city control is a closed chip (Los Angeles, plus a chevron). The list floats under that chip, about five rows tall, and does not push the score down. It lists real metros only: Los Angeles first, then Boston, Chicago, Columbus, New York, Phoenix, Sacramento, San Diego, Seattle, and Tampa. Ventura is part of Los Angeles. Indio is one festival site, not a metro. New York is Citi Field only. The When control is the pill on the map and starts closed. Opening one menu closes the other. A date rating shows to one decimal (Cooked · 9.0/10). The /10 is smaller and softer than the number. Next 7 days shows the average of the rated days in that span, to one decimal, and hides the score when none are rated. A single day still shows that day's own rating. The pill says Today, Next 7 days, or the picked date. The line under the score is a plain count ("2 events", "1 event", "No events"). The sheet title is the When label, then On the map ("Today · On the map", "Next 7 days · On the map", or "Fri, Oct 25 · On the map"). Open, the sheet is only as tall as its rows, and the list scrolls once it reaches the old max height. It lists the events inside the view after the map stops moving (moveend, then a short wait). There is no All upcoming view. An empty day widens to the next 7 days.
- **Parked:** `docs/nyc-filler-collection-prompt.md` is research only. New York is not seeded.

## Key decisions still in force
- **Kylie's explicit instructions beat** mockups, docs, the brand kit and other models' output. Other models' opinions are input, not decisions; their facts get verified, and unverified figures may be seeded only if labeled estimated.
- **Don't delete what's built; rehome it** (Kylie, Oct 3). Tabs stay as four (Map, Nights, Compare, You). The Event screen stays.
- **Name:** "Fan/Friction" everywhere a slash fits. **Free until forced:** flag any cost with 🚩 (Ticketmaster key needs her OK first). **Swappable pieces:** each data source, the map, storage and the name sit behind small files.
- **Stack:** React + Vite + TypeScript, MapLibre + OpenFreeMap, Supabase later, Vercel free plan. MapLibre's worker must be packaged by Vite (`?worker&url` + `setWorkerUrl` in `BaseMap.tsx`). The little "i" on the map is the required map credit; keep it.
- **Data layer rules:** screens read only through `src/data/index.ts`. Dates are local `YYYY-MM-DD`, times local `HH:MM`. Every crowd figure has a kind (announced / reported / estimated) or `soldOut`. Start times are the scheduled time. Live sources serve today onward only so seeded nights never show twice.
- **Your nights** are not map dots. Rough dates stay rough. Events under 5k can be logged and get no rating. Personal notes stay off the night row, the share card, and the map. She does not set friction scores. Stats are counts only. A game is labeled by its sport, not by the word Game.
- **Saving:** the phone copy is the store for now. Supabase waits on her URL and anon key. Export is the backup because a browser clear can erase marks.
- **Area switcher:** a closed chip, Los Angeles first, then real metros from her log. Venue towns inside Los Angeles (Inglewood, Pasadena, Anaheim, Ventura) are not their own rows. Indio is not a metro. A "vs" night is her team's city. An "@" night uses the second team's city and building. Final Four and the Elite Eight are labeled Neutral site, at the real host building. The Cosm line stays a Los Angeles watch party. New York is not a full metro. The When pill stays on the map. Opening either menu closes the other.
- **NYC filler** is the research prompt in `docs/nyc-filler-collection-prompt.md` only. It asks for MLB, NBA, NHL, NFL, and at least one concert, plus one ordinary weeknight. Prefer the LA seeded dates. Goal 5, cap 10. Do not import LA rules onto New Jersey, Long Island, or the boroughs. Do not seed New York from it.
- **Results rule:** that event's own results never count; earlier results (standings) do. Crowd is evidence, never an input.
- **Score display:** word first ("Cooked · 9/10"); Quiet = no big events, Unrated = events but no rating. Friction shows Moderate+ only; where hidden, a "why" chip stands in. One gold primary button per screen; on the Map it acts on the selected event (draft). The Event screen's gold button is still Share. "I was there" is a separate toggle.
- **Structure (Kylie, Oct 3):** the night is the main object. Nights = every night you can open. You = only nights marked "I was there." A plan is an upcoming night she flagged. No user-set friction scores.
- **Rating model (v3, adopted Oct 2):** Crowd fight and Gridlock; details in the v3 doc. Not built yet.
- **Sources:** Wikipedia is blocked in cloud sessions; web search works. ESPN's feed rejects headless-Chrome user agents (use a normal one in screenshots).
- **Screenshots:** `playwright-core` in the session scratchpad, `executablePath: '/usr/bin/chromium'`, args `--use-angle=swiftshader --enable-unsafe-swiftshader --no-sandbox`, a normal iPhone user agent, set `localStorage['fan-friction:tipsDone']='true'`. `npm run dev` may land on port 3002. Don't `pkill -f vite`; use `kill $(lsof -ti:PORT)`.

## Next steps
1. Kylie looks at a Dodgers row (Type should say Baseball, and Starter when she named the pitcher), a concert row (Show), the Map area list (more than Los Angeles), and the When pill. Ask whether the 2025 UCLA WBB list is short one night (the lines show 12; her recap said 13).
2. Then Step 6 (Traffic). Supabase still waits on her URL and anon key. New York stays parked.

**Next command to run:**
```bash
npm run dev   # local preview (http://localhost:3001, or 3002 if busy); open You
```
