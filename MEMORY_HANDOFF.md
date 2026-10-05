# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md just points to it), `docs/direction.md` and `docs/product-review-decisions.md`.

_Last synced: Oct 5, 2026 (Cursor session, Map saved-night card and Compare copy)._

## Current state
Fan/Friction is a personal log of live events you attended, with a friction read stamped on each night. The schedule archive (PR #8) and the night record (PR #9) are on `main`. This session puts two locked screen pieces on, and nothing else. The Map shows one card for the soonest saved upcoming night in the city you are looking at. When that save stored a forecast, the card shows it and labels it Frozen. Compare no longer asks which fanbase shows up. The Map list, chips, glow, sheet, and legend are unchanged. Save and "I was there" stay on the event page. Traffic, Night story, the rating formula, Ticketmaster, and Supabase were not started.

- **Repo:** PRs #1–#9 are merged. This slice is on a branch off `main`. The live site is https://fan-friction.vercel.app (Vercel deploys from `main`).
- **Card:** It appears only after Save this night, for a night still ahead, in the current city. No saved night means no card, so an empty map looks as it did. The card opens that event. It does not add a gold button.
- **Compare:** The tab and the Coming soon chip stay. The heading is "Your nights, side by side." The rebuild is later.

## Changes made (this session)
- Map card for the next saved upcoming night, reading the plan through `src/data/index.ts`. The forecast on the card is the one frozen at save. Low stays hidden. A score always has its word.
- Compare placeholder copy only. No feature added or removed.
- Docs: `BACKLOG.md`, this file, `docs/product-review-decisions.md`, and the "where this stands" note in `AGENTS.md`.

## Key decisions in force
- **Locked Oct 4, after the review:** the stamp locks 24 hours after the scheduled start. On a night with several events, the 24 hours count from the last scheduled start time that night, whichever event is scheduled last. Save / "I was there" stay on the event page only. Famous nights keeps its current stamps; hand-check them before "Were you there?" The schedule archive is on `main`. Product risks are parked. Privacy is private by default. Tweets stay on hold until access and cost are verified.
- **Direction (Oct 4):** the log leads; friction is the stamp on a night. Nothing built is deleted. No points, leaderboards, collectible badges, open posting, public photo walls, navigation, or standalone "is tonight bad?" feed. v1 uses public data only.
- **Her six decisions (Oct 4):** open on the Map with a card for the next saved night (this session, for the city on the map); forecast until 24 hours after start, then a stamp; keep Compare; Famous nights becomes "Were you there?" only after a hand check; 1,000+ is pre-listed, 5,000+ feeds friction; saved logs in accounts answer an empty log, private by default. The logging-threshold sentence (direction vs. review) is still unresolved.
- **This slice:** the card follows the city switcher. A saved night in another city does not show until you switch there, because the event page still opens Los Angeles events. Same-day plans are ordered by title, because a plan does not store a start time. The forecast is the frozen one, not a live recompute.
- **Still in force from before:** her explicit words beat docs and other models; "Fan/Friction" with the slash; free until forced (flag costs with 🚩); swappable pieces behind small files; screens read only through `src/data/index.ts`; every crowd figure has a kind label; only pre-event facts affect a rating; friction shows Moderate and up; one gold button per screen; Traffic is an estimate only, no red.
- **Map UI:** chips, glow, sheet list, legend, and the gold "See this event" button stay. The card is extra, and only when a night is saved.
- Rating formula is not in code. "Nearby" means the same city and the same date, using seeded events. A distance, and adding smaller rooms together, wait for the formula. Traffic, Night story, and the formula stay paused until she asks.
- Cloud notes: Wikipedia is blocked; ESPN rejects headless-Chrome user agents; screenshots use `playwright-core` with swiftshader args; don't `pkill` vite.

## Next steps
1. She reviews this pull request. Do not squash-merge it from an agent session unless she asks.
2. Do not start You "Did you go?", the Famous nights rename, accounts, Traffic, Night story, or the formula until she asks.
3. Still open for her: the logging-threshold sentence. Direction and `AGENTS.md` say about 1,000+ can be logged. The review says anything can be logged and 1,000 only decides what is pre-listed.
4. If she wants the card to follow her next night in any city, say so. Today it follows the city on the map.

**Next command to run:**
```bash
git pull --ff-only && sed -n '/## Direction pivot/,/## Prompt Kylie/p' BACKLOG.md
```
