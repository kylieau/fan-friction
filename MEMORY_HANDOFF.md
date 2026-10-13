# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`: **open questions for Kylie are at its top** (the K-list) and in **"Build 4 follow-ups (Claude Code slice, Oct 13)"** under Next. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (its **"Oct 13, 2026 — build 4 (Claude Code slice)"** section is the newest, with the builder's calls). **Build 4's source of truth is `docs/build-4/build-notes-4-oct12.md`; Claude Code's plan and what shipped is `docs/build-4/claude-build-plan-oct13.md`.**

_Last synced: Oct 13, 2026, Claude Code (Sonnet, Opus advisor), at `main`'s head after the Oct 13 follow-up commits. Everything below is pushed. Kylie's standing instruction: one commit per step, straight to `main` (Kylie, Oct 9)._

## Docs were reorganized (Oct 11, 2026): old `docs/` paths no longer exist
Every doc lives in a sub-folder: `docs/product/`, `docs/reference/`, `docs/checks/`, `docs/research/` (`city-builds/<city>/`, `topics/`, `events-and-dates/`, `second-opinions/`), `docs/reviews/`, `docs/design/`, `docs/archive/`, and `docs/build-4/` (map: `docs/README.md`).

## Current state
- **Build 4 is complete and live on `main`** (Composer's slice PR #54; Claude Code's slice Oct 13, 40 commits). Claude Code's slice:
  - **Explore:** Map and List behind an icon switch that remembers the view; the city is the 24 pt page title (shared `ExploreHeader`); the read box and date open the date page (WhyCard unmounted, file kept); sheet top 56 px; friend lines on chips (friends only, never you) and on the tapped card; the List with the calm calendar, day bands, EARLIER, the Today pill, back to the first captured day and forward to the last event; Back restores the day at the top.
  - **Stub tags:** `userTags` on entries and plans (not `tags`, which is the system labels); luggage chip; Tags row and panel in the sheet; tags on Stubs rows (measured, +N), the event page and a hand-added plan or entry; tag page with rename / merge / delete; the Tag filter (several tags = any of them; Tag plus a chip narrows; All resets).
  - **New stub** page title, event · date line, first-visit "Saved to your Stubs", "Edit stub".
  - **Favorite cities** (star in the switcher, pinned under home, newer-wins sync in `settings.data`); **weather** on the Map's tapped card (open-air only); **seats** (Attended only; one row of three free-text boxes, Section · Row · Seat; Section takes "Lawn", "GA", "Suite 42"); the **story slot** (empty seed file).
  - **Fixes from the flags:** a game played in another covered city belongs to that city (`src/data/sources/venueMetro.ts`; the nightly writer files rows under the fetching pass and `data.metroId` carries the venue's city); °C in Canada and Mexico (`usesCelsius`, `degreesFor`); hand-added plans have a page; Home says "Stub your first event".
- **40 covered metros** (`COVERED_METRO_IDS`); each city build has a follow-up under BACKLOG › Next. Kylie approved the Oct 12–13 city builds' scope (Oct 13).
- **Nightly job:** the next run re-files the Lakers (Las Vegas) and Spurs (Austin) rows under their venue's city.

## Changes made this session
All of `src/` named under Current state, `scripts/catalog-write.mjs` (rows filed under the pass; `data.metroId` carries the venue's city), the docs (plan, decisions log, UX notes, BACKLOG, `docs/research/topics/seat-fields-prompt.md`), and the Baltimore, Calgary, Charlotte and Cincinnati research answers (another session wrote them; Kylie asked for them to be committed). Nothing uncommitted. The tester's private session file was never read (blocked; not worked around).

## Key decisions in force (newest; earlier ones in BACKLOG.md and the decisions doc)
- **Tags (Kylie, Oct 12–13):** your own words live in `userTags` on the stub or plan row (privacy follows the stub); `tags` stays the system labels. Never on Interested. Tags show on your own screens only (followers' view is a later step). A Stubs row is a div with one overlay link so a tag is its own button.
- **A game in another city** belongs to that city's day (venue's metro), at the source and at read time; a city's read counts only its own events.
- **Temperatures** read in °C in Canada and Mexico (`degreesFor`); data and formula stay °F.
- **Explore views:** an explicit `?view=map|list` wins; `?pick=1` opens the Map; the shown view is remembered; the old calendar page is `?view=calendar` (unlinked), Famous dates hidden behind `SHOW_FAMOUS_DATES`.
- **Nav:** Explore · Stubs · Following (Faves · Friends) · You. "+ Stub it" is the logging copy everywhere. Home is off the bar at `/home` (K23).
- **The sheet:** the same tap takes an answer back; another answer switches it; un-tapping Attended asks once. Watching's Private / Friends choice has nothing preselected; a private watch never names a place; a Friends place reaches approved followers only, never when the owner is "Only me" or the stub is private (0023–0025).
- **Words:** Attending / Watching / Interested before, Attended / Watched after, activity lines included (Kylie, Oct 12: "attending", not the mock's "going"). Never "night". "The biggest event around." on an Unopposed event.
- **Crowd:** three figures on a stub, never overwritten; the highlighted one everywhere but the event page. Build 4 §0 extends the same order to event figures on the map, display only (⚑A: never the read math).
- **Read boxes** wear a 1 px #76869B border at every level and keep their word.
- **Testing notes:** `npm i --no-save playwright-core`; Chromium at `/usr/bin/chromium` with swiftshader flags; `localStorage['fan-friction:home-metro'] = JSON.stringify('la')` skips the picker; a local log goes in `localStorage['fan-friction:your-nights']` (plans carry `watch`, `watchShare`, `watchedPlace`; entries `crowdEstimated` / `crowdAnnounced` / `crowdFinal`); a signed-in screenshot writes `private/test-session-b.json`'s `.session` into `localStorage[<its .key>]`; the page scrolls inside `.screen.page`; temporary `scripts/.tmp-*.mjs` run from the repo root and are deleted after; stop vite with `kill $(lsof -ti:3001)`, never `pkill`.

## Kylie's manual steps
1. **Phone check after the deploy (one minute):** add a tag, star a city, enter seats on an Attended stub, then sign out and back in; confirm each is still there (the signed-in round-trip was never run; the private test session was blocked).
2. ~~Pick the "+N" option~~ Closed (Kylie, Oct 13): keep today's look.
3. **Add the full seat-fields answer file** to `docs/research/topics/` (only her pasted summary is saved; it is in her other session).
4. Where-watched privacy check, the tester interview follow-ups (C034), the phone checklist (K17): as listed in BACKLOG.

## Open (details in BACKLOG)
1. **Sol's check-only pass** (`docs/build-4/SOL-CHECK-PROMPT.md`) can run now that both slices are merged.
2. **Kylie's open items:** the full seat-fields file; a setting (not just a filter) to keep small rooms out of the List (BACKLOG); K23 Home's place and K24 Faves cards (deferred); build 5 (city names and codes, team colors) and the next formula pass (open-site Tier A, scoring cap, car-share defaults).
3. **Build 3 flags (section F)** and the city follow-ups under BACKLOG › Next.

**Next command to run:**
```bash
git pull --rebase && npm run dev   # localhost:3001
```
