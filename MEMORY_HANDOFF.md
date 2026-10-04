# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work lives in `BACKLOG.md`. Product rules live in `CLAUDE.md` and `docs/`.

_Last synced: Oct 4, 2026._

## Current state
Kylie is leaving this polish pass. She is moving to a larger structure and purpose build in Claude Code. This snapshot is the UI lock as of Oct 4, 2026. It is not a commitment to keep polishing chips first. Do not start Traffic, Night story, or the rating formula until she asks.

- **PR #6 is squash-merged to `main`.** The live site https://fan-friction.vercel.app deploys from `main`.
- **PR #7 is open and not merged.** It is the Oct 4 Los Angeles seed plus the map chip pack, on `cursor/oct-4-la-seed-fcf7`. Do not squash-merge it. Preview: https://fan-friction-git-cursor-oct-4-la-seed-fcf7-kylie8.vercel.app
- **Oct 4 seed (LA):** five events on the map. Dodgers NLDS Game 2 at 5:00 (sold out, about 56,000), Ducks at 5:00, Galaxy friendly at 5:30, Slayer at 6:00 (sold out), Playboi Carti / ComplexCon at 6:00. Draft hand score **7.4 Brutal**. Today metro feels-like is a draft **97°**. Chat Pile (Belasco), Sammy Rae (Wiltern), and Candlelight (Zipper) are in the catalog with `belowFloor` and do not pin. No SoFi, no Bruno Mars, no USC or UCLA that Sunday.
- **Already on `main`:** You tab (attended nights only, phone storage, Export), Nights, the Map sheet, MLB and ESPN home games from today on, and the Sat Oct 3 LA seed (provisional 7.8). Sheet button **See this event**. Upcoming **Save this night**. Past **I was there** / **You were there**.

## Changes made
Oct 4 seed, venues, and teams. Map chips are a fixed box. Concert chips are the headliner. Sports chips are the home short name, with a postseason round and game number in parentheses. Friction and Sold Out stay on the sheet. The ? key is the gold glow and the pale ring.

## Key decisions still in force
- Kylie’s instructions beat mockups, docs, and other models. Don’t delete what’s built; rehome it. The name is Fan/Friction. Flag any new cost with 🚩.
- Stack: React + Vite + TypeScript, MapLibre + OpenFreeMap (worker via `?worker&url` in `BaseMap.tsx`), Vercel free. The map “i” is the required credit.
- Screens read through `src/data/index.ts`. Dates are `YYYY-MM-DD`, times `HH:MM`. Every crowd figure is announced, reported, estimated, or sold out. Live sources serve today onward so a seeded night is not shown twice.
- **Map floor:** venues under about 5,000 stay off the map. Belasco, Wiltern, and Zipper are catalog only.
- **Map chips:** one box, about 112×44. The line is the name, the time, and the crowd. No Friction, Sold Out, or star on the chip. Those stay on the sheet. The type is a little smaller (about 10.5px) so a postseason name fits on one line. A longer name still ellipsizes. The box does not grow.
- **Concert chip:** headliner only (Slayer). The sheet keeps the full official title. The venue is added on the chip only when two chips that night would otherwise match.
- **Sports chip:** home short name (Dodgers, Ducks, Galaxy). Not the visitor matchup, and not ATL @ LAD. Postseason appends the short round and the game number in parentheses: **Dodgers (NLDS G2)**. Do not drop the round. Do not omit G1 or G2. Regular season and friendlies are the name only. A squad tag (MBB, WBB, FB) or the visitor short name is added only when two chips that night would otherwise match. The punctuation lives in `postseasonChip` in `src/lib/eventTitle.ts`.
- **Placement:** a chip stays a short step from its own venue. It may cover the gold crowd glow. It does not sit on another venue’s dot.
- **? key:** gold glow is the size of the crowd. Pale ring is the one you picked. No star.
- **Sheet:** the title says On the map. Every list row shows its venue. The list follows the viewport after a pan or zoom settles. The selected card can still sit above the list. Quiet stakes stay on the sheet (`NLDS · Game 2`).
- **Weather:** Today shows one metro feels-like when When is Today. Oct 4 is the draft 97°. The chip is the number. It does not say “LA”, and that number is not copied onto venue lines. A per-event degree on the selected venue line and the event page is not built. Rich outdoor Forecast is parked.
- **Saving:** Supabase as shared event truth is parked. You stays on this phone, plus Export, until she pastes keys. The adapter must not call the network before that. 🚩 Free plan: 2 active projects, and a project pauses when idle.
- You is attended nights only. A plan is not a log row. Personal notes stay off the row, the share card, and the map. A college matchup tag on the sheet is `(FB)`, not `(CFB)`.
- Gold is the crowd glow and the one gold button. On the sheet, Dodger blue is the friction badge only. That event’s own results never affect its rating. Friction shows from Moderate up.
- The rating formula is not in code. `src/data/audience.ts` is still the Oct 1 overlap rule.
- Screenshots in cloud sessions: `playwright-core`, `/usr/bin/google-chrome`, swiftshader args, an iPhone user agent, and `localStorage['fan-friction:tipsDone']='true'`. Don’t `pkill` vite.

## Next steps
Paused for the structure and purpose pivot. Do not build from the old order.

When she unpauses, the order that was next after PR #7 merges is in `BACKLOG.md`: 1 Traffic mode, 2 Step 7 leftovers and Night story, 3 the rating formula. Parked past that: Supabase, favorite cities, nights-per-city, rich Forecast.

**Next command to run:**
```bash
npm run dev   # open /?date=2026-10-04&when=day
```
