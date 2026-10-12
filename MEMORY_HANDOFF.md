# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`; **every open question and judgment call for Kylie is gathered at the top of `BACKLOG.md` as K1–K22** (she plans to work through them with another model and return with the next build). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (its "Oct 11, 2026 decisions" and "Oct 9–10, 2026 decisions" sections are the newest). The build plans are Kylie's `docs/reviews/build-notes-2-oct10.md` and `docs/reviews/build2-judgment-call-decisions.md` (both verbatim); the mocks are in `docs/design/` (index: its README).

_Last synced: Oct 12, 2026, Codex, 01:49 UTC (first Milwaukee coverage-gap answer reviewed; awaiting its model attribution and the second answer). Kylie's standing instruction: commit and push after every step; no PRs, work goes to `main` (Kylie, Oct 9). Ask before anything uncertain._

## Docs were reorganized (Oct 11, 2026, another session): old `docs/` paths no longer exist
Every doc moved into sub-folders: `docs/product/`, `docs/reference/`, `docs/checks/`, `docs/research/` (`city-builds/<city>/`, `topics/`, `events-and-dates/`, `second-opinions/`), `docs/reviews/`, `docs/design/`, `docs/archive/` (map: `docs/README.md`). Branches or unpushed work that touch old paths such as `docs/product-decisions.md` will conflict: rebase, then find the file with `git log --follow` or `docs/README.md`. Research and reviews no longer move when closed; only closed `docs/product/` docs archive. New research prompts go in `docs/research/`.

## Current state
**Milwaukee is built and verified on main.** K14 is approved (Kylie, Oct 11: "alright time to execute!"). K1–K13 and K15–K22 remain open in BACKLOG; none was reopened or resolved by this city build.

**Built and verified on Oct 11 (Claude Code):**
- Her Oct 11 judgment-call decisions: review fixes R01–R06, R08, R12, R16, R18, then calls 1–9 (feed sentences, Attended / Watched, the Attended stat, where watched, the crowd lock, the ticket line with "+fees", Local competition on the date page, the crowd icon, My Stubs chips). Each step one commit, build green, screens checked at phone size.
- After her answers the same day: **"Attending?", "Watching?" and "Interested?"** as questions before an event (a plan can be a plan to watch, `Plan.watch`, which settles into a Watched stub, or `Plan.interested`, which lapses and never makes a stub); the event page has a **Following** section for that event; the event page's **date line opens its date page** unless the map sent you there; the summary line uses the app's clock ("7:30 pm"); the **nightly job asks for 08:01 UTC** (R09).
- **A bug found and fixed:** the follower's Unfollow and Cancel request had silently done nothing since migration 0016. Migration 0022 adds `unfollow(target)`.
- **Migrations 0014–0022 are all run by Kylie.** `node scripts/account-check.mjs` says "all passed"; it wipes the test accounts, and `node scripts/seed-test-accounts.mjs` restores them (B follows A; A has three entries, one watched, a plan, and an Interested answer on the Oct 12 Rams game). Reseeded Oct 11.

**Milwaukee (Codex, Oct 11):** 38 active rooms, 15 team records, covered city configuration and provisional `sprawl`. Verified MLB Brewers/Milkmen/DockHounds ids, ESPN Bucks and four college basketball programs, HockeyTech Admirals. Room-matched Ticketmaster concerts; ambiguous Rave-complex shows excluded. Collected 987 historical games, final two-week snapshot of 46 listings, weather/results and generated attendance/forecast indexes. Production build, temporary integrity/matching/deduplication checks and phone checks passed (Home, Map, date, sports/concert events, manual logging). Final scoped nightly run `38183103237` passed: 247 catalog events, 987 attendance rows, 111 expected-draw rows, seven team schedules. Three ordinary Open-Elevation attempts returned HTTP 429; access measurement remains pending, with no manual flags. Both models’ four original research reports remain unchanged; selected rows, source conflicts and deferred coverage are in `docs/research/city-builds/milwaukee/milwaukee-implementation-register.md`.

## Changes made this session
Reviewed the preserved first coverage-gap answer against its prompt and the local reports. Flagged its missing Claude venue-answer input and the distinction between adding a room record and being able to pre-list its games. Confirmed the PrideFest June 6 figure is publicly reported as an organizer count; it is daily attendance, not peak concurrency. Answer author remains unknown pending Kylie’s attribution; no venue or app changes. Updated BACKLOG and this handoff. Prompt commit `01c27e4`; answer was already committed by Kylie in `101e726`; earlier four Milwaukee research answers remain unchanged.

## Key decisions in force (newest; earlier ones in BACKLOG.md and the decisions doc)
- **Before an event:** "Attending?" (main button), "Watching?", and on the event page only "Interested?". The same tap takes an answer back; another answer switches it. After the event: "I was there" and "I watched it"; done states Attended / Watched.
- **Interested** (Kylie, Oct 11) shows only on the event page's Following section and the Following tab's Coming up list ("is interested in"); never the feed, Home, Coming up strips or profiles.
- **Feed lines** are future or past only: "is going to / is going to watch / went to / watched {event}", no "· you too".
- **Follows:** a blocked person's request is refused by the insert rule; a removed row stays and the follower's Unfollow only hides it; a failed decline says so; the follower reads through `my_follows`; Unfollow and Cancel go through `unfollow(target)`.
- **People search** is a server function (three letters, punctuation stripped, twenty results); a profile link resolves one exact handle; visitors cannot list `profile_cards`.
- **The newest edit wins by when you made it** (`keep_newest_edit` compares `data.updatedAt`).
- **Crowds lock with the stamp** (a lazy fill on open, forty lookups at most): box-score attendance, else the estimate. Nothing is taken at the tap.
- **Where watched** sits on the entry and, when shared, in `watch_places`; the database shares a place name only with people public for the same event.
- **Words:** "Local competition" on the date page and the map key; Stats say "Attended", never "Events"; the clock is always "7:30 pm".
- **Nightly job:** asked for at 08:01 UTC; whenever GitHub starts it (lately about six and a half hours later) is accepted (Kylie, Oct 11).
- **Testing notes:** `npm i --no-save playwright-core`; Chromium at `/usr/bin/chromium` with swiftshader flags; `localStorage['fan-friction:home-metro'] = JSON.stringify('la')` skips the picker; a local log goes in `localStorage['fan-friction:your-nights']`; a signed-in screenshot writes `private/test-session-b.json`'s session into `localStorage[<its key>]`; the page scrolls inside `.screen.page`; temporary `scripts/.tmp-*.mjs` run from the repo root and are deleted after; stop vite with `kill $(lsof -ti:3001)`, never `pkill`.

## Kylie's manual steps
1. Nothing to run in Supabase.
2. Open the app signed in so the crowd fill runs on your log, then look at My Stubs and Stats (pre-archive nights stay blank).
3. In a day or two, check the Actions tab: the 08:01 UTC nightly runs should be green.
4. Work through K1–K13 and K15–K22 at the top of `BACKLOG.md`. K1–K10 concern the Oct 11 screens and matter most for the next build. K14 is approved and built.

## Open (summary; details and options in BACKLOG K1–K22)
1. **Oct 11 screens (K1–K10):** what the event page keeps; Interested on the date page; the event-page friend lines; where the three questions appear; where watched's six questions; R17 copy; R12 source; R15 wording; the assistant's calls inside her decisions; later passes (R10, R11, R13, badges).
2. **Left from build notes 2 (K11–K13):** feeds or jobs not built, two left-out items, one polish note.
3. **Milwaukee follow-up:** Open-Elevation retry and research/schedule gaps in BACKLOG; K14 needs no renewed approval.
4. **Tester and interview about Oct 13 (K15–K17):** the name in git history, the pre-interview checks, her phone checklist.
5. **Older questions (K18–K22):** rating model v3, words, her log, Oct 3 notes, the build brief.
6. Dated re-checks in BACKLOG (Nov 3 Bay Area transit vote; seasonal ones).

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
