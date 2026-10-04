# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work lives in `BACKLOG.md`. Product rules live in `CLAUDE.md` and `docs/`.

_Last synced: Oct 4, 2026._

## Current state
- **Do not merge** branch `cursor/map-chip-offset-e5fb` (PR https://github.com/kylieau/fan-friction/pull/6) until Kylie asks. Product UI is pushed through `9b416c1`. This file is the later docs sync on the same branch. The live site https://fan-friction.vercel.app deploys from `main` only, so this PR is not live.
- **Already on `main`:** Step 5 is merged (You tab, her seeded log, phone storage, Export). Also on `main`: Nights, the Map sheet, MLB and ESPN home games from today on, and the Sat Oct 3, 2026 LA seed (NLDS Game 1 at 1:08, USC vs Washington at 4:30, Bruno Mars, Klangkuenstler, aespa, ComplexCon; provisional date rating 7.8). The old branch name `cursor/you-tab-local-log-684c` is stale.
- **Only on PR #6:** map cards sit off the gold glow (outward from that night’s pins, about 8px; if no side fits, drop the card and keep the mark); one pale yellow ring on the selected chip; other cards stay white with faded ink; a 1px tab-bar hairline; app shell `#DAEBFE` (the map canvas stays the basemap); sheet button **See this event**; upcoming **Save this night** (a plan only) and past **I was there** / **You were there**; You lists attended nights only; a relative word beside a past date (Yesterday, Last week, Last month, Last year, or the year); sheet order is nearest venue, then earlier start; college tags `(FB)`, `(MBB)`, and `(WBB)` after the first name; venue only on the raised sheet card; sheet badges (friction from Moderate up is Dodger `#005A9C` with white type; Marquee, Major, Notable, and Sold Out are green `#ECF3EC` / `#216E1F`).
- **Not built:** an Oct 4, 2026 LA seed (Today / Next 7 still needs upcoming nights), Step 6 Traffic, Step 7 leftovers, Step 8, and Supabase. Night story builds with the Step 7 leftovers, after Traffic, not sooner (placement in `BACKLOG.md`). **Nights tab is per city/area** is parked later, not Step 6: same metro scope as the Map switcher; needs nights filtered by metro, plus visual chrome. Kylie, 2026-10-04. Do not build now. On `main`, You still has Up next and **Plan this night**. This PR removes that screen and stores the plan without adding it to Your nights.

## Changes made
This sync is docs only (`MEMORY_HANDOFF.md`, `BACKLOG.md`, `CLAUDE.md`, `docs/build-brief.md`). The product commits on this branch, not on `main`, are `0c27144` through `9b416c1`.

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
- Area switcher and NYC filler rules are unchanged. The rating formula is not in code; `src/data/audience.ts` is still the Oct 1 overlap rule until Step 8.
- Screenshots in cloud sessions: `playwright-core`, `/usr/bin/google-chrome`, swiftshader args, an iPhone user agent, and `localStorage['fan-friction:tipsDone']='true'`. Don’t `pkill` vite.

## Next steps
Do not merge PR #6 until Kylie asks. After that, and after an Oct 4, 2026 LA seed on the local files, follow the build order in `BACKLOG.md`.

**Next command to run:**
```bash
npm run dev   # this branch; open /?date=2026-10-03&when=day
```
