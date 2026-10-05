# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md just points to it), `docs/direction.md` and `docs/product-review-decisions.md`.

_Last synced: Oct 5, 2026 (Cursor session, night data foundation)._

## Current state
Fan/Friction is a personal log of live events you attended, with a friction read stamped on each night. The nightly schedule archive is on `main` (PR #8). This session adds the data-foundation slice underneath the screens: a plan can store the forecast it showed, a logged night can store a stamp after the lock, and a below-floor night can take a nearby score when bigger events that night already have one. **No screen changed.** The Map list is untouched. Traffic, Night story, the rating formula, Ticketmaster, and Supabase were not started.

- **Repo:** PRs #1–#8 are merged. This slice is on a branch off `main`. The live site is https://fan-friction.vercel.app (Vercel deploys from `main`).
- **Archive:** `npm run archive-schedule` still writes `data/schedule-archive/la/YYYY-MM-DD.json` and now refreshes `src/data/scheduleArchiveIndex.ts`, the list of windows a stamp uses to decide reconstructed. Users see nothing.

## Changes made (this session)
- A night can hold a frozen forecast and a stamp (`lastUpdated`, and `reconstructed` when no snapshot covers the date). Saving a plan writes the forecast. "I was there" writes a stamp only after the 24-hour lock. Her shipped nights were not backfilled.
- `ratingForNight` no longer drops every below-floor night. It returns the date's existing score when another seeded event that night feeds friction. Away nights still do not borrow Los Angeles.
- About 1,000 is the pre-list size and about 5,000 is what feeds friction. The wording conflict (direction versus the review) is still open. `AGENTS.md` was not changed to override her sentence.
- Docs: `BACKLOG.md`, this file, `docs/product-review-decisions.md`, `docs/schedule-archive.md`.

## Key decisions in force
- **Locked Oct 4, after the review:** the stamp locks 24 hours after the scheduled start. On a night with several events, the 24 hours count from the last scheduled start time that night, whichever event is scheduled last. Save / "I was there" stay on the event page only. Famous nights keeps its current stamps; hand-check them before "Were you there?" The schedule archive is on `main`. Product risks are parked. Privacy is private by default. Tweets stay on hold until access and cost are verified.
- **Direction (Oct 4):** the log leads; friction is the stamp on a night. Nothing built is deleted. No points, leaderboards, collectible badges, open posting, public photo walls, navigation, or standalone "is tonight bad?" feed. v1 uses public data only.
- **Her six decisions (Oct 4):** open on the Map with a card for the next saved night (not built); forecast until 24 hours after start, then a stamp; keep Compare; Famous nights becomes "Were you there?" only after a hand check; 1,000+ is pre-listed, 5,000+ feeds friction; saved logs in accounts answer an empty log, private by default. The logging-threshold sentence (direction vs. review) is still unresolved. The data layer did not close it.
- **Still in force from before:** her explicit words beat docs and other models; "Fan/Friction" with the slash; free until forced (flag costs with 🚩); swappable pieces behind small files; screens read only through `src/data/index.ts`; every crowd figure has a kind label; only pre-event facts affect a rating; friction shows Moderate and up; one gold button per screen; Traffic is an estimate only, no red.
- **Map UI is locked** from the Oct 4 polish pass. Do not add Save or "I was there" to the Map list.
- Rating formula is not in code. "Nearby" in this slice means the same city and the same date, using seeded events. A distance, and adding smaller rooms together, wait for the formula. Traffic, Night story, and the formula stay paused until she asks.
- Cloud notes: Wikipedia is blocked; ESPN rejects headless-Chrome user agents; screenshots use `playwright-core` with swiftshader args; don't `pkill` vite.

## Next steps
1. She reviews this pull request. Do not squash-merge it from an agent session unless she asks.
2. Do not start screen changes (Map next-saved-night card, Compare copy, Famous nights rename, You tab), accounts, Traffic, Night story, or the formula until she asks.
3. Still open for her: the logging-threshold sentence. Direction and `AGENTS.md` say about 1,000+ can be logged. The review says anything can be logged and 1,000 only decides what is pre-listed.

**Next command to run:**
```bash
git pull --ff-only && sed -n '/## Direction pivot/,/## Prompt Kylie/p' BACKLOG.md
```
