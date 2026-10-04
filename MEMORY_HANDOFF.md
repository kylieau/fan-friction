# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md just points to it), `docs/direction.md` and `docs/product-review-decisions.md`.

_Last synced: Oct 4, 2026 (Claude Code session)._

## Current state
Fan/Friction pivoted today to **a personal log of live events you attended, with a friction read stamped on each night** (`docs/direction.md`). Kylie then got a second opinion and made six decisions (`docs/product-review-decisions.md`). **No app code changed this session.** Docs only, all committed and pushed to `main`. The structural plan is "directionally approved, pending her answers" in `BACKLOG.md`: **build nothing from it until she answers the open questions.**

- **Repo:** PRs #1–#7 are merged. `main` is clean. The Cursor session is finished (no areas to avoid). The live site is https://fan-friction.vercel.app (Vercel deploys from `main`; docs-only pushes don't change it).
- **Working in Cursor / Grok next:** read `AGENTS.md`, then `docs/direction.md`, `docs/product-review-decisions.md`, then the "Direction pivot" section of `BACKLOG.md` (plan, conflicts, questions).

## Changes made (this session, all docs)
- New `docs/direction.md` (the pivot, saved from her PDF), `docs/product-review-decisions.md` (the second-opinion decisions, saved from her PDF), `docs/second-opinion-direction-prompt.md` (the prompt she used).
- New `AGENTS.md` (her starter plus the old CLAUDE.md rules, with direction.md winning on conflicts); `CLAUDE.md` is now one line, `@AGENTS.md`.
- `BACKLOG.md` now holds the pivot plan, the conflicts and the open questions. `MEMORY_HANDOFF.md` is this snapshot.

## Key decisions in force
- **Direction (Oct 4):** the log leads; friction is the stamp on a night, not a second product. Nothing built is deleted; features move to serve the log and get flagged if they don't fit. No points, leaderboards, collectible badges, open posting, public photo walls, navigation, or standalone "is tonight bad?" feed. v1 uses public data only. Structural changes are proposed first and built only after she approves.
- **Her six decisions (Oct 4):** open on the **Map** with a card for the next saved night; the read is a **live forecast until 24 hours after the event's scheduled start, then a stamp** (tap time doesn't matter; lock time not yet confirmed, see backlog); **keep the Compare tab**, rebuilt around nights and personal stats, never fanbases; **Famous nights becomes "Were you there?"**, a backfill tool; **1,000+ is pre-listed, 5,000+ feeds friction, anything else is logged by hand**; the biggest risk is an empty log, answered by **saved logs in accounts** (private by default).
- **Her answers to my audit:** the app ships with her own nights pre-filled; Famous nights stays as a concept but needs reworking; Supabase saving moves up from parked.
- **Still in force from before:** her explicit words beat docs and other models; "Fan/Friction" with the slash; free until forced (flag costs with 🚩); swappable pieces behind small files; screens read only through `src/data/index.ts`; every crowd figure has a kind label; only pre-event facts affect a rating; friction shows Moderate and up; one gold button per screen; Traffic is an estimate only, no red.
- **Map UI is locked** from the Oct 4 polish pass (chips about 112×44, sheet button "See this event"). Changing it needs her OK.
- Rating formula is not in code; `src/data/audience.ts` is still the Oct 1 draft. Traffic, Night story and the formula stay paused until she asks.
- Cloud notes: Wikipedia is blocked; ESPN rejects headless-Chrome user agents; screenshots use `playwright-core` with swiftshader args; don't `pkill` vite.

## Next steps
1. Get her answers to the open questions at the top of the "Direction pivot" section in `BACKLOG.md` (lock time, which event's start, Map actions and the gold button, Famous nights stamps, archive go-ahead).
2. Then build in the order in that section: schedule archive, data foundation, screens, accounts, richer entries, formula.

**Next command to run:**
```bash
git pull --ff-only && sed -n '/## Direction pivot/,/## Prompt Kylie/p' BACKLOG.md   # the plan, conflicts and questions
```
