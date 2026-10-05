# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md just points to it), `docs/direction.md` and `docs/product-review-decisions.md`.

_Last synced: Oct 5, 2026 (Cursor session, daily forecast only)._

## Current state
Fan/Friction is a personal log of live events you attended, with a friction read stamped on each night. The schedule archive (PR #8), the night record (PR #9), and the Map card (PR #10) are on `main`. Save stores the night only. Kylie parked the every-30-minute start-time capture. Until it returns, the stamp, after the 24-hour lock, uses the latest Los Angeles daily schedule saved before the event's start, and is labeled as such. No number is invented. The schedule job runs once a day, at 12:15am Pacific. **No screen changed in this slice.** The Map card, Compare words, chips, glow, sheet, and legend stay as they are. Save and "I was there" stay on the event page. Traffic, Night story, the rating formula, Ticketmaster, and Supabase were not started.

- **Repo:** PRs #1–#10 are merged. This slice is on a branch off `main`. The live site is https://fan-friction.vercel.app (Vercel deploys from `main`).
- **Card:** It appears only after Save this night, for the soonest night still ahead in any city. Switching the map does not swap the night. No saved night means no card, so an empty map looks as it did. The whole card opens that night's event in that night's city. The map stays where it is. Back returns to the same city, zoom, and selection. The card does not add a gold button. It does not draw a forecast.
- **Compare:** The tab and the Coming soon chip stay. The heading is "Your nights, side by side." The rebuild is later.
- **Archive:** One free job writes the 14-day Los Angeles listing at 12:15am Pacific. The half-hour start-time capture is parked.

## Changes made (this session)
- Save no longer copies a forecast. An older copy on the phone is dropped the next time the log is read. The Map card is unchanged and still does not draw a forecast.
- "I was there," after the 24-hour lock, stamps the latest daily schedule saved before that event's start, and labels it as such. No number is invented.
- The every-30-minute start-time capture is parked. The GitHub Action runs once a day.
- Docs: `BACKLOG.md`, this file, `docs/product-review-decisions.md`, `docs/schedule-archive.md`, and the "where this stands" note in `AGENTS.md`.

## Key decisions in force
- **Locked Oct 4, after the review:** the stamp locks 24 hours after the scheduled start. On a night with several events, the 24 hours count from the last scheduled start time that night, whichever event is scheduled last. Save / "I was there" stay on the event page only. Famous nights keeps its current stamps; hand-check them before "Were you there?" The schedule archive is on `main`. Product risks are parked. Privacy is private by default. Tweets stay on hold until access and cost are verified.
- **Direction (Oct 4):** the log leads; friction is the stamp on a night. Nothing built is deleted. No points, leaderboards, collectible badges, open posting, public photo walls, navigation, or standalone "is tonight bad?" feed. v1 uses public data only.
- **Her six decisions (Oct 4):** open on the Map with a card for the next saved night; forecast until 24 hours after start, then a stamp; keep Compare; Famous nights becomes "Were you there?" only after a hand check; 1,000+ is pre-listed, 5,000+ feeds friction; saved logs in accounts answer an empty log, private by default. The logging-threshold sentence (direction vs. review) is still unresolved.
- **Locked Oct 5, then narrowed the same day:** Save stores the night only. The every-30-minute start-time capture is parked until more is built. The stamp uses the latest daily snapshot taken before the event's start, labeled as such. Never invent a number. Los Angeles only.
- **Map card (Oct 5):** the card is her next saved night in any city. She decided that after the first version followed the city switcher. The card says "Next saved night," then the chip name, then the date and city. A night is still ahead in that night's own time zone. Same-day plans are ordered by title, because a plan does not store a start time. The card does not show a forecast. Tapping the card opens that night in its own city and leaves the map where it is. Back returns to the same city, zoom, and selection.
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
