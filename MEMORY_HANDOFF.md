# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work lives in `BACKLOG.md`. Product rules live in `CLAUDE.md` and `docs/`.

_Last synced: Oct 4, 2026._

## Current state
- **PR #6 is on `main`** (`d4b4ccb`, map cards off the gold mark). The live site https://fan-friction.vercel.app deploys from `main`.
- **Sun Oct 4, 2026 (LA) is seeded from Kylie's verified list only:** NLDS Game 2 at 5:00 (sold out, about 56,000), Ducks vs Panthers at 5:00, Galaxy vs Cruz Azul at 5:30, Slayer at 6:00 (sold out), and the ComplexCon concert (Playboi Carti) at 6:00. Draft hand rating **7.4**. The Today chip uses a draft metro feels-like of **97°F**. Chat Pile at the Belasco, Sammy Rae at the Wiltern, and Candlelight at Zipper are in the seed with `belowFloor` and do not pin. No SoFi, no Bruno Mars, no USC or UCLA.
- **Already on `main`:** Step 5 (You tab, attended nights only, phone storage, Export). Nights, the Map sheet, MLB and ESPN home games from today on, and the Sat Oct 3, 2026 LA seed (NLDS Game 1 at 1:08, USC vs Washington at 4:30, Bruno Mars, Klangkuenstler, aespa, ComplexCon; provisional date rating 7.8). From #6: cards sit off the gold glow; sheet button **See this event**; upcoming **Save this night** and past **I was there** / **You were there**.
- **Not built:** Step 6 Traffic, Step 7 leftovers, Step 8, and Supabase. Night story builds with the Step 7 leftovers, after Traffic, not sooner (placement in `BACKLOG.md`). **Nights tab is per city/area** is parked later, not Step 6. Kylie, 2026-10-04. Do not build now.

## Changes made
Sun Oct 4, 2026 LA seed: eight verified events, three of them flagged `belowFloor` so they do not pin. Draft hand rating 7.4. Metro feels-like chip 97°F (draft). New venues: Honda Center, The Belasco, The Wiltern, Zipper Concert Hall. New teams: Ducks, Panthers, Cruz Azul. Concert map chips show the headliner only (Slayer, Playboi Carti). The sheet and the event page keep the full title.

## Key decisions still in force
- Kylie’s instructions beat mockups, docs, and other models. Don’t delete what’s built; rehome it. The name is Fan/Friction. Flag any new cost with 🚩.
- Stack: React + Vite + TypeScript, MapLibre + OpenFreeMap (worker via `?worker&url` in `BaseMap.tsx`), Vercel free. The map “i” is the required credit.
- Screens read through `src/data/index.ts`. Dates are `YYYY-MM-DD`, times `HH:MM`. Every crowd figure is announced, reported, estimated, or sold out. Live sources serve today onward so a seeded night is not shown twice.
- **Saving (Kylie, Oct 4, 2026):** catalog events should become shared Supabase truth; You logs follow so a phone and a laptop stay in sync. Order, the free-plan 🚩, and “do nothing in Supabase right now” are in `BACKLOG.md`. Phone storage plus Export is the store until keys exist. The adapter must not call the network before that. Traffic does not wait on Supabase.
- You on this branch is attended nights only. A plan is not a log row. Personal notes stay off the row, the share card, and the map. A game’s type is the sport. Rough dates stay rough. Under 5k can be logged and gets no rating.
- Product decisions and the build brief match this branch: You is attended nights only. Don’t put Up next or a Plans-first toggle back.
- A college matchup tag is `(FB)`, not `(CFB)`. CFB stays a sport-type label only.
- Gold is the crowd glow and the one gold button. On the sheet, Dodger blue is the friction badge only. The event page still uses Dodger blue for its occasion chip and the big friction word.
- That event’s own results never affect its rating. Friction shows from Moderate up.
- **Concert map chips (Kylie, Oct 4, 2026):** the chip is the headliner only. A tour or anniversary stays off the chip. If the headliner itself does not fit, the chip ellipsizes. The venue is added only when two chips that night would otherwise match. The sheet and the event page keep the full official title.
- **On-the-map list (Kylie, Oct 4, 2026):** every row shows its venue. The selected card can still sit above the list. This replaces the raised-card-only venue from PR #6. Map chips are unchanged.
- **Map key (Kylie, Oct 4, 2026):** chips show friction from Moderate up in Dodger blue, then Sold Out in green. Marquee, Major, and Notable stay on the sheet. The gold glow is crowd size. A pale ring is the one you picked. The ? opens those four lines. There is no star.
- Area switcher and NYC filler rules are unchanged. The rating formula is not in code; `src/data/audience.ts` is still the Oct 1 overlap rule until Step 8.
- Screenshots in cloud sessions: `playwright-core`, `/usr/bin/google-chrome`, swiftshader args, an iPhone user agent, and `localStorage['fan-friction:tipsDone']='true'`. Don’t `pkill` vite.

## Next steps
Oct 4 is seeded. Next is Step 6 (Traffic) in `BACKLOG.md`, once this seed is on `main`.

**Next command to run:**
```bash
npm run dev   # open /?date=2026-10-04&when=day
```
