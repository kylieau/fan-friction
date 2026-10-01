# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work lives in `BACKLOG.md`. Product rules live in `CLAUDE.md` and `docs/`.

_Last synced: Oct 1, 2026 (evening of Sep 30 in LA)._

## Current state
- **In focus:** Step 1 of the first slice (app shell). **Committed, pushed and verified.** Live at https://fan-friction.vercel.app/, checked with headless-browser screenshots of the live site: the map draws LA streets, the tips show on first open, and all four tabs work.
- **Working tree:** clean. No uncommitted or outside changes.
- **Step 2 (the 13 seeded test nights):** not started. The agreed first move is to research the nights and show Kylie a table to react to before any code.

## Changes made (this session, all committed on `main`)
- **App scaffold:** React 19 + Vite 8 + TypeScript (`package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `vercel.json`).
- **One-place settings:**
  - `src/config/app.ts`: name and slug. The Vite plugin also fills them into the page title and home-screen settings.
  - `src/config/theme.ts`: colors, turned into CSS variables.
  - `src/config/metros.ts`: LA metro record.
  - `src/map/provider.ts`: map tiles from OpenFreeMap "positron".
- **Screens:**
  - `src/screens/MapScreen.tsx`: Tonight, with an unrated night score, the Crowds/Traffic toggle and the quiet-night sheet.
  - `NightsScreen`, `CompareScreen` ("Coming soon") and `YouScreen` (with "Show the three tips again"): placeholders.
- **Components:** `TabBar`, `NightScore` (never a bare number; "NOT RATED YET" when unrated), `FirstRunTips` (3 tips, skippable, Map tab only), and `BaseMap` (MapLibre).
- **Brand kit:** Kylie's kit is in `design/brand/` and its icons are in `public/`. The kit's README notes that her naming rule overrides it.
- **Dev container:** Node 24 on Debian 12, with Chromium and the GitHub CLI. `~/.claude` and `~/.config/gh` are on volumes, so memory, history and the gh login survive rebuilds.
- **Skill:** `.claude/skills/sync-handoff/` (`/sync-handoff`) rewrites this file and `BACKLOG.md`, then commits and pushes.
- **Docs:** `CLAUDE.md` and `docs/build-brief.md` gained the naming rule, the "explicit instructions win" rule, cost milestones 🚩, the tech setup and the log + share vibe.

## Key decisions still in force
- **Kylie's explicit instructions beat** mockups, docs, the brand kit and anything generated. Follow her, and flag the conflict.
- **Name:** "Fan/Friction" everywhere a slash fits. Use `fan-friction` or `FanFriction` only where it can't (code, URLs, file names).
- **Free until forced:** flag any cost with 🚩 and get her OK. The table is in `docs/build-brief.md`. If Supabase's free plan runs out, switch to Firebase rather than pay.
- **Swappable pieces:** map provider, each data source, storage and the name each sit behind one small file.
- **Stack:** MapLibre + OpenFreeMap (Google Maps rejected because of the card on file and its retiring heat-map layer), Supabase for her log and later accounts, plus an "Export my nights" backup, Vercel free plan. Build on Node 24 (`engines` in `package.json`), since Vercel dropped Node 20 on Oct 1, 2026.
- **Map gotcha:** MapLibre's worker must be packaged by Vite (`?worker&url` + `setWorkerUrl` in `BaseMap.tsx`, `worker.format: 'es'`). Without it the map is blank.
- **Top bar color:** the phone's top bar (`theme_color`) is light `#F7F8FA`, not the kit's Dodger blue. Kylie hasn't weighed in.
- **Product:** it's a live-event app (sports + concerts), log + share like Flighty, Beli and Letterboxd, and not a game. MLB is first only because it's October and the feed is easiest.

## Next steps
1. **Step 2 research:** for each of the 13 nights in `docs/test-nights-and-ratings.md`, verify against sources the events, venues (with coordinates and capacity), start times, and attendance labeled announced, reported or estimated. Then propose per-event Squeeze scores. Show Kylie the table and wait for her reaction.
2. **Then build step 2:** the data layer, with the nights hardcoded behind a plug-in source interface so live feeds slot in later.

Everything after that (steps 3–8, open questions, small fixes) is in `BACKLOG.md`.

**Next command to run:**
```bash
npm run dev   # local preview at http://localhost:3001, then start the step 2 research
```
