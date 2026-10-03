# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work lives in `BACKLOG.md`. Product rules live in `CLAUDE.md` and `docs/`.

_Last synced: Oct 3, 2026._

## Current state
- **Step 3 (Map in Crowds mode + Event screen) is done, committed, pushed to `main` and verified** with phone-size screenshots. `npm run build` passes. Live at https://fan-friction.vercel.app/ (Vercel deploys from `main`).
- **What Kylie can open:** Nights tab → tap a Famous night → the Map opens on that date (`/?date=2024-10-25`) with the rating on top, a gold glow per venue, name labels with ★ and SOLD OUT, a "?" legend, and an event list. Tap an event → Event screen (`/event/:id`): occasion chip, friction verdict (draft), labeled crowd, "Here's what beat it" bars, and a Dodger-blue share card with the wordmark.
- **Working tree:** clean and in sync with `origin/main`. No outside changes.
- **Seed data:** all 13 nights now have scheduled start times; counts filled for most of nights 1–4 (checked). Gaps are listed in `BACKLOG.md`. Kylie is hunting for them.
- **The rating model moved a lot (Oct 2)**, all recorded in `docs/overlap-and-date-rating-v3.md`. The code (`src/data/audience.ts`, the seed's draft friction) still has the Oct 1 rules; the formula is built at Step 8.

## Changes made (this session, all committed on `main`)
- **Code (Step 3):** `src/map/BaseMap.tsx` (shares the map through `MapContext`), `src/map/CrowdLayer.tsx` (glow, labels, placement that avoids overlaps), `src/map/crowdPoints.ts`, `src/lib/windows.ts` (run times, miles), `src/lib/dates.ts` (new date helpers), `src/screens/MapScreen.tsx` (reads `?date=`), `src/screens/EventScreen.tsx`, `src/screens/NightsScreen.tsx` (rows are links), `src/components/Wordmark.tsx`, `src/components/ShareCard.tsx`, `src/App.tsx` (route), `src/styles.css`, `index.html` (Barlow Condensed font).
- **Seed:** `src/data/seed/testNights.ts` now holds scheduled start times for all events, checked counts for nights 1–4 and the Galaxy, and the Imagine Dragons "doors moved up" fact.
- **Docs:** new `overlap-and-date-rating-v3.md`, `pressure-mapping-prompt.md`, `gridlock-prompt.md`, `ux-notes.md`; `CLAUDE.md` (results rule clarified), `product-decisions.md` (old overlap rule marked superseded), `build-brief.md` (two new 🚩 rows: billed traffic data, paid crowd-origin data), `test-nights-and-ratings.md` (date rating now counts getting around).

## Key decisions still in force
- **Kylie's explicit instructions beat** mockups, docs, the brand kit and other models' output. Other models' opinions are input, not decisions. Their facts get verified; unverified figures are marked.
- **Name:** "Fan/Friction" everywhere a slash fits. **Free until forced:** flag any cost with 🚩 (Kylie declined billed traffic data). **Swappable pieces:** map, each data source, storage and the name each sit behind one small file.
- **Stack:** React + Vite + TypeScript, MapLibre + OpenFreeMap, Supabase later, Vercel free plan. MapLibre's worker must be packaged by Vite (`?worker&url` + `setWorkerUrl` in `BaseMap.tsx`) or the map is blank.
- **Data layer rules:** screens read only through `src/data/index.ts`. Dates are local `YYYY-MM-DD`, times local `HH:MM`. Every crowd figure has a kind (announced / reported / estimated) or `soldOut`. Start times are the **scheduled** time, never a delayed or late actual start. Where sources differ slightly or measure different things (doors vs. stage time), pick the sensible reading and note it; leave blank only when there is no source or the conflict matters.
- **Results rule (clarified Oct 2):** that event's own results never count; earlier results (standings) do. Past attendance may tune placeholder numbers across many dates, with held-out dates, never feeding one date's score. Crowd is evidence, never an input.
- **Score display:** every score has a word ("Cooked · 9/10"); share cards add the date. Friction shows Moderate+ only.
- **Rating model (v3, adopted Oct 2):** Crowd fight (share-of-seats formula, score = 1 + 14 × share) and Gridlock (zones from drive times, scored against a normal night). The date takes the louder plus a small bump. Overlap tiers: same-sport rivals Medium; two Broad teams in different sports High; Broad is about 20% of the metro (stamped by year); light occasion shield on Crowd fight only (Marquee −2, Major −1); invite-only events count in Gridlock only; theaters of 5–8k enter only in the same zone as a headline event. Every number is a placeholder. Medium weight (0.3–0.4 vs. 0.5) is held until the formula is fitted at Step 8. Night 5 and 11 ratings stay as hand-set until then.
- **UX feedback:** structural notes before the next step, polish batched after Step 5 or 6; running list in `docs/ux-notes.md`.
- **Sources:** Wikipedia is blocked in cloud sessions; web search works. pro-football-reference blocks automated reads. Basketball- and hockey-reference show Eastern times.
- **Screenshots:** `playwright-core` in the session scratchpad (`npm i playwright-core` there), `executablePath: '/usr/bin/chromium'`, args `--use-angle=swiftshader --enable-unsafe-swiftshader --no-sandbox`; set `localStorage['fan-friction:tipsDone']='true'` to skip the tips. `npm run dev` may land on port 3002 if 3001 is busy. Don't `pkill -f vite`; use `kill $(lsof -ti:PORT)`.

## Next steps
1. **First, ask Kylie for her UX/UI notes** and whether she found any seed data gaps (top of `BACKLOG.md`, `docs/ux-notes.md`). Sort her notes: structural before Step 4, polish after Step 5 or 6.
2. **Step 4:** Nights tab calendar shaded by each date's rating, with a legend, plus search. Famous nights rows already open a date.
3. Pending Kylie: Quiet vs. Unrated on today's Map (the data returns `quiet`; the screen still says "Unrated").

**Next command to run:**
```bash
npm run dev   # local preview (http://localhost:3001, or 3002 if busy); start Step 4 in src/screens/NightsScreen.tsx
```
