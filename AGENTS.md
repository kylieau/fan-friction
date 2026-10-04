# AGENTS.md — Fan/Friction

## What this app is
A personal log of live events people attended (sports and concerts), with a
friction read (crowd fight and gridlock) stamped on each night. Not a game,
social network, traffic app, or rewards program. Full reasoning:
docs/direction.md. Read it before making any product decision.

## Firm rules
- Never delete existing features. Reposition them to serve the log, and flag
  anything that doesn't fit.
- Propose structural changes before building them. Wait for approval.
- v1 uses only publicly available data.
- Events of ~1,000+ attendees can be logged; only 5,000+ affect friction.
- No points, leaderboards, open posting, public photo walls, or navigation.
  See the Guardrails section of docs/direction.md.

## Working in this repo
- Run: `npm run dev` (phone-sized web app on http://localhost:3001; Vite may pick 3002 if busy). Don't `pkill -f vite`; use `kill $(lsof -ti:PORT)`.
- Test: there is no test suite yet. `npm run build` (type-check plus production build) is the check that must pass. Visual checks use phone-size screenshots (see MEMORY_HANDOFF.md).
- Key folders:
  - `src/screens/` the five screens (Map, Nights, Compare, You, Event)
  - `src/data/` events, venues, teams, seeded nights, live sources (`sources/`), and the save layer (`storage/`). Screens read only through `src/data/index.ts`.
  - `src/map/` MapLibre map, pins, chips
  - `src/lib/` small helpers (dates, titles, sheet drag, view)
  - `src/config/` app name, metros, score labels, theme
  - `docs/` product decisions and research; `design/wireframes/` older mockups
  - `MEMORY_HANDOFF.md` and `BACKLOG.md` in the root: current state and deferred work

## Multiple agents
This repo is worked on in both Claude Code and Cursor. Before changing shared
or foundational code, check for in-progress work and flag possible conflicts.
(`git fetch` and look at `origin/cursor/*` branches and open PRs first.)

## How to explain changes
Keep explanations high-level and conceptual, not code-level. End with
questions when anything is unclear.

---

# Project background and working rules (carried over from the earlier CLAUDE.md)

Where anything below conflicts with docs/direction.md, **direction.md wins**.
Known stale spots: the intro below describes the purpose as answering the
"fake fans" claim, and says "5k+ events" (now: log at ~1,000+, friction at 5,000+).


A personal app that makes it visible how much competition (other 5k+ events the same night, traffic, weather, stakes) shapes attendance, to answer the claim that big-city fans are "fake." Seeded in LA. Formerly called "Crowd Clash" (older docs and wireframes may use that name).

It's a live-event app, not a sports-only app: sports are the reason it exists, but concerts and other big ticketed events are first-class. The vibe is log + share, like Flighty, Beli and Letterboxd. It is not a game.

- Repo: https://github.com/kylieau/fan-friction
- Live site: https://fan-friction.vercel.app/ (Vercel, deploys automatically from `main`)

## Where this stands (Oct 4, 2026)
Kylie is leaving the map-chip polish and moving to a larger structure and purpose build. That work continues in Claude Code. This file, `MEMORY_HANDOFF.md`, and `BACKLOG.md` are the UI lock as of this date. They are not a commitment to keep polishing chips first.

PRs #1–#7 are squash-merged to `main` (#7 was the Oct 4 Los Angeles seed plus the map chip pack; this paragraph was written before it merged). Do not start Traffic, Night story, or the rating formula until she asks. The order that was next after PR #7 merges is paused: Traffic, then Step 7 leftovers and Night story, then the rating formula. Supabase, favorite cities, nights-per-city, and a rich outdoor Forecast stay parked.

## The name
Write it **Fan/Friction**, with the slash, everywhere a slash is possible: screens, share cards, the app title, docs and conversation. Use `fan-friction` or `FanFriction` only where a slash can't go (repo, package and file names, code, web addresses). Keep the display name in one setting so it can change later.

## Who you're working with
Kylie is a lawyer, not an engineer. She is the product owner and has made the product decisions in `docs/`. Explain things in plain language, avoid jargon, and don't assume she reads code. When a technical choice would change what she sees or what it costs, explain it in a sentence and recommend one option. She likes to react to a concrete proposal (a table, a mockup) rather than invent numbers herself.

## Read these first
- `docs/direction.md`: the Oct 4, 2026 direction (the log leads). Read it before any product decision; it outranks the docs below where they conflict.
- `docs/build-brief.md`: what to build, decisions already made, open questions.
- `docs/product-decisions.md`: the product rules behind each screen.
- `docs/test-nights-and-ratings.md`: the 13 seeded nights, the rating recipe and the ratings to hardcode.
- `docs/kylie-logs.md` and `docs/researched-events.md`: real sample data for Your nights and event screens.
- `design/wireframes/`: the current mockups (HTML boards, example night Fri Oct 25, 2024). Match their layout and feel; the palette and fonts are in the brief.

## Working rules
- **Kylie's explicit instructions win.** If what she tells you conflicts with a mockup, a doc, the brand kit or anything another tool generated, follow her and point out the conflict so the source can be fixed.
- Don't rebuild what is already decided. If something in the docs is unclear or seems wrong, ask Kylie before changing it.
- Build in small steps and commit often, with plain-English commit messages. After each step, tell Kylie what she can now open and look at.
- Build room for later features from day one: every map item is a generic "crowd event," layers are separate, teams and metros are their own records, and a personal layer attaches to any event. Don't hardcode for baseball only or for LA only.
- Data comes through a plug-in layer so live sources (MLB first) can be added without reshaping the app. Start with the hand-seeded nights.
- Label every attendance number by kind: announced, reported, or estimated. Never show a bare score; always a label.
- Traffic is an estimate only. No live traffic data and no red "jam" color.
- Only facts known before an event can affect its rating. Results and what happened at that event never do. Earlier results are fair game (for example, standings going into the game).
- One gold primary button per screen, with a plain verb. Light theme. No orange.
- Verify facts (attendance, dates, who played) against current sources before seeding them; earlier research had at least one wrong claim. If a web page can't be fetched normally, don't work around it. Ask Kylie to paste it.
- Keep M2/M3 topics (public launch, licensing, revenue) out of the conversation unless Kylie raises them.

## Cost and flexibility
- **Keep it free until paying is unavoidable.** Any step that would start a cost (a paid plan, a developer fee, a credit card on file, a domain) is a milestone: flag it clearly with 🚩 and get Kylie's OK first. The running list is under "Cost milestones" in `docs/build-brief.md`.
- **Decisions are not set in stone.** Kylie gets second opinions from other AI models and wants pushback. If a decision in these docs (a vendor, a tool, a product rule) looks wrong, say so and recommend something better.
- **Build so things can be swapped.** Keep each outside service (map, each data source, where data is saved) and the app name behind its own small, replaceable piece, so changing one doesn't mean rebuilding.

## Tech setup (chosen Sep 30, 2026; open to change)
- Phone-sized web app: React + Vite, installable to the home screen. It can be wrapped as a native app later (Capacitor).
- Map: MapLibre with OpenFreeMap maps (free, no account). Google Maps was considered and passed on: it needs a credit card on file, and its heat map layer is being retired.
- Saving today is this phone, plus an "Export my nights" backup, because iPhone Safari can erase a site's saved data. Supabase is the planned store, not connected yet.
- **Supabase (parked, Oct 4, 2026):** shared event truth later, You-tab logs after that, and only after she pastes a project URL and public anon key. The adapter must not call the network until those keys exist. She does not need to do anything in Supabase right now. It does not block Traffic when Traffic is unpaused. 🚩 The free plan allows 2 active projects (she already uses one) and pauses a project when it sits idle.
- Hosting: Vercel free plan.
