# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md just points to it), `docs/direction.md` and `docs/product-review-decisions.md`.

_Last synced: Oct 5, 2026 (Cursor session, home city)._

## Current state
Fan/Friction is a personal log of live events you attended, with a friction read stamped on each night. The schedule archive (PR #8), the night record (PR #9), and the global next-saved-night card (PR #10) are on `main`. This session adds a home city. The first open asks "Where's home?" and lists only cities with event data (Los Angeles today). The map opens there. The city switcher carries a house icon for home. "Set as home" shows only on cities that have events. The next-saved-night card stays global, still names its city, and stays hidden when nothing is saved. Chips, glow, and the sheet are unchanged. Traffic, Night story, the rating formula, Ticketmaster, and Supabase were not started.

- **Repo:** PRs #1–#10 are merged. This slice is on a branch off `main`. The live site is https://fan-friction.vercel.app (Vercel deploys from `main`).
- **Home:** One city, on this phone only. The picker does not guess. "Use my location" is inside the picker and runs only when tapped. Looking at another city does not change home. The map does not follow a saved night. 🚩 Another phone needs accounts, which are not started.
- **Card:** It appears only after Save this night, for the soonest night still ahead in any city. Home does not swap the night. No saved night means no card. The whole card opens that night's event in that night's city. The map stays where it is. Back returns to the same city, zoom, and selection.

## Changes made (this session)
- A first-run picker, "Where's home?", then the cities that have event data. Optional "Use my location" in that picker only.
- A house icon for the home city, with the accessible name Home. "Set as home" only on cities that have events. Not on You.
- The map opens on home. Browsing another city leaves home alone.
- Empty You copy, when the log really is empty: "No nights yet. Find one on the map."
- Docs: `BACKLOG.md`, this file, `docs/product-review-decisions.md`, and the "where this stands" note in `AGENTS.md`.

## Key decisions in force
- **Locked Oct 4, after the review:** the stamp locks 24 hours after the scheduled start. On a night with several events, the 24 hours count from the last scheduled start time that night, whichever event is scheduled last. Save / "I was there" stay on the event page only. Famous nights keeps its current stamps; hand-check them before "Were you there?" The schedule archive is on `main`. Product risks are parked. Privacy is private by default. Tweets stay on hold until access and cost are verified.
- **Direction (Oct 4):** the log leads; friction is the stamp on a night. Nothing built is deleted. No points, leaderboards, collectible badges, open posting, public photo walls, navigation, or standalone "is tonight bad?" feed. v1 uses public data only.
- **Her six decisions (Oct 4):** open on the Map with a card for the next saved night; forecast until 24 hours after start, then a stamp; keep Compare; Famous nights becomes "Were you there?" only after a hand check; 1,000+ is pre-listed, 5,000+ feeds friction; saved logs in accounts answer an empty log, private by default. The logging-threshold sentence (direction vs. review) is still unresolved.
- **Next saved night (Oct 5):** the card is her next saved night in any city, not the city on the map. The card says "Next saved night," then the chip name, then the date and city. It is hidden when nothing is saved. Tapping it opens that night in its own city and leaves the map where it is. Back returns to the same city, zoom, and selection.
- **Home (Oct 5):** one city on this phone. First open asks "Where's home?" and lists only cities with event data. "Use my location" is optional and only in that picker. The switcher shows a house icon. "Set as home" is only on cities that have events. More set-home behavior waits for her spec with accounts. Accounts should also hold favorite teams and artists; she will spec that. The map opens on home and does not follow a saved night. 🚩 Sync waits for accounts.
- **Still in force from before:** her explicit words beat docs and other models; "Fan/Friction" with the slash; free until forced (flag costs with 🚩); swappable pieces behind small files; screens read only through `src/data/index.ts`; every crowd figure has a kind label; only pre-event facts affect a rating; friction shows Moderate and up; one gold button per screen; Traffic is an estimate only, no red.
- **Map UI:** chips, glow, sheet list, legend, and the gold "See this event" button stay. The card is extra, and only when a night is saved.
- Rating formula is not in code. "Nearby" means the same city and the same date, using seeded events. A distance, and adding smaller rooms together, wait for the formula. Traffic, Night story, and the formula stay paused until she asks.
- Cloud notes: Wikipedia is blocked; ESPN rejects headless-Chrome user agents; screenshots use `playwright-core` with swiftshader args; don't `pkill` vite.

## Next steps
1. She reviews this pull request. Do not squash-merge it from an agent session unless she asks.
2. Do not start You "Did you go?", the Famous nights rename, accounts, Traffic, Night story, or the formula until she asks.
3. Still open for her: the logging-threshold sentence. Direction and `AGENTS.md` say about 1,000+ can be logged. The review says anything can be logged and 1,000 only decides what is pre-listed.

**Next command to run:**
```bash
git pull --ff-only && sed -n '/## Direction pivot/,/## Prompt Kylie/p' BACKLOG.md
```
