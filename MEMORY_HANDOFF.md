# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md just points to it), `docs/direction.md` and `docs/product-review-decisions.md`.

_Last synced: Oct 4, 2026 (Cursor session, schedule archive)._

## Current state
Fan/Friction is a personal log of live events you attended, with a friction read stamped on each night. Kylie approved the pivot plan and locked the eight open questions. This session records those answers and adds the nightly schedule archive as plumbing. **No screen changed.** The Map list is untouched. Traffic, Night story, the rating formula, Ticketmaster, and Supabase were not started.

- **Repo:** PRs #1–#7 are merged. The archive work is on a branch off `main`. The live site is https://fan-friction.vercel.app (Vercel deploys from `main`). Archive-only commits are set to skip that deploy.
- **Archive:** `npm run archive-schedule` writes `data/schedule-archive/la/YYYY-MM-DD.json` for today through 14 days later, from the MLB feed, the ESPN feeds, and seeded events already in the repo. A GitHub Action runs it a little after midnight Los Angeles time and commits the file to `main`. How reconstructed nights use those files later is in `docs/schedule-archive.md`. Users see nothing.

## Changes made (this session)
- Locked answers written into `BACKLOG.md`, `docs/product-review-decisions.md`, `AGENTS.md`, and this file.
- New `docs/schedule-archive.md`, `data/schedule-archive/`, `src/data/scheduleArchive.ts`, `scripts/archive-schedule.mjs`, and `.github/workflows/schedule-archive.yml`.
- The map's live feeds still return an empty list when a feed is down. The archive treats that as a failed run and saves nothing.

## Key decisions in force
- **Locked Oct 4, after the review:** the stamp locks 24 hours after the scheduled start. On a night with several events, the 24 hours count from the latest (main) event's scheduled start. Save / "I was there" stay on the event page only. Famous nights keeps its current stamps; hand-check them before "Were you there?" The schedule archive is approved. Product risks are parked. Privacy is private by default. Tweets stay on hold until access and cost are verified.
- **Direction (Oct 4):** the log leads; friction is the stamp on a night. Nothing built is deleted. No points, leaderboards, collectible badges, open posting, public photo walls, navigation, or standalone "is tonight bad?" feed. v1 uses public data only.
- **Her six decisions (Oct 4):** open on the Map with a card for the next saved night (not built in this session); forecast until 24 hours after start, then a stamp; keep Compare; Famous nights becomes "Were you there?" only after a hand check; 1,000+ is pre-listed, 5,000+ feeds friction; saved logs in accounts answer an empty log, private by default. The logging-threshold sentence (direction vs. review) is still unresolved.
- **Still in force from before:** her explicit words beat docs and other models; "Fan/Friction" with the slash; free until forced (flag costs with 🚩); swappable pieces behind small files; screens read only through `src/data/index.ts`; every crowd figure has a kind label; only pre-event facts affect a rating; friction shows Moderate and up; one gold button per screen; Traffic is an estimate only, no red.
- **Map UI is locked** from the Oct 4 polish pass. Do not add Save or "I was there" to the Map list.
- Rating formula is not in code. Traffic, Night story, and the formula stay paused until she asks.
- Cloud notes: Wikipedia is blocked; ESPN rejects headless-Chrome user agents; screenshots use `playwright-core` with swiftshader args; don't `pkill` vite.

## Next steps
1. She reviews the archive pull request. Do not squash-merge it from an agent session unless she asks.
2. After it is on `main`, the nightly job saves each new day. Confirm the first scheduled run appears under the repo's Actions tab.
3. Do not start the data foundation, screen changes, accounts, Traffic, Night story, or the formula until she asks.

**Next command to run:**
```bash
git pull --ff-only && sed -n '/## Direction pivot/,/## Prompt Kylie/p' BACKLOG.md
```
