# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work and history live in `BACKLOG.md`; **every open question and judgment call for Kylie is gathered at the top of `BACKLOG.md` as K1–K22** (she plans to work through them with another model and return with the next build). Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/product/direction.md` and `docs/product/product-decisions.md` (its "Oct 11, 2026 decisions" and "Oct 9–10, 2026 decisions" sections are the newest). The build plans are Kylie's `docs/reviews/build-notes-2-oct10.md` and `docs/reviews/build2-judgment-call-decisions.md` (both verbatim); the mocks are in `docs/design/` (index: its README).

_Last synced: Oct 11, 2026, 19:51 UTC (midday Pacific), Claude Code (tenth session, end; Opus 5.5 for the sync). Everything is committed and pushed to `main`; the working tree was clean. **Kylie's standing instruction: her usage is limited; commit and push after every step so the thread is never lost. No PRs: work goes to `main` (Kylie, Oct 9). Ask before anything uncertain.**_

## Docs were reorganized (Oct 11, 2026, another session): old `docs/` paths no longer exist
Every doc moved into sub-folders: `docs/product/`, `docs/reference/`, `docs/checks/`, `docs/research/` (`city-builds/<city>/`, `topics/`, `events-and-dates/`, `second-opinions/`), `docs/reviews/`, `docs/design/`, `docs/archive/` (map: `docs/README.md`). Branches or unpushed work that touch old paths such as `docs/product-decisions.md` will conflict: rebase, then find the file with `git log --follow` or `docs/README.md`. Research and reviews no longer move when closed; only closed `docs/product/` docs archive. New research prompts go in `docs/research/`.

## Current state
**Waiting on Kylie's next decision round.** Nothing is in progress. She will bring answers to K1–K22 (BACKLOG) and likely a new build.

**Built and verified on Oct 11 (Claude Code):**
- Her Oct 11 judgment-call decisions: review fixes R01–R06, R08, R12, R16, R18, then calls 1–9 (feed sentences, Attended / Watched, the Attended stat, where watched, the crowd lock, the ticket line with "+fees", Local competition on the date page, the crowd icon, My Stubs chips). Each step one commit, build green, screens checked at phone size.
- After her answers the same day: **"Attending?", "Watching?" and "Interested?"** as questions before an event (a plan can be a plan to watch, `Plan.watch`, which settles into a Watched stub, or `Plan.interested`, which lapses and never makes a stub); the event page has a **Following** section for that event; the event page's **date line opens its date page** unless the map sent you there; the summary line uses the app's clock ("7:30 pm"); the **nightly job asks for 08:01 UTC** (R09).
- **A bug found and fixed:** the follower's Unfollow and Cancel request had silently done nothing since migration 0016. Migration 0022 adds `unfollow(target)`.
- **Migrations 0014–0022 are all run by Kylie.** `node scripts/account-check.mjs` says "all passed"; it wipes the test accounts, and `node scripts/seed-test-accounts.mjs` restores them (B follows A; A has three entries, one watched, a plan, and an Interested answer on the Oct 12 Rams game). Reseeded Oct 11.

**Milwaukee (Codex, Oct 11):** four research answers and a comparison with a five-point build proposal are in `docs/research/city-builds/milwaukee/`. Waiting on Kylie (K14). No Milwaukee app code or jobs changed.

## Changes made this session (all pushed)
Migrations `0020_review_fixes.sql`, `0021_watch_places.sql`, `0022_unfollow.sql`; the screens Event, Date, You, Home, Profile, People, Settings, Favorites and a favorite's page, Map; `src/data/` (personalLog, profiles, watchPlaces, types, index); components (EventTags, DayTimeline, WatchedWhere, WhyCard, ChipCard, SearchSheet); `src/styles.css`; `.github/workflows/schedule-archive.yml`; `scripts/account-check.mjs`, `scripts/seed-test-accounts.mjs`; docs (decisions, BACKLOG, schedule-archive notes, design mocks). The docs move and the Milwaukee files are other sessions' work.

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
4. Work through K1–K22 at the top of `BACKLOG.md`. K1–K10 are about screens built Oct 11 and matter most for the next build.

## Open (summary; details and options in BACKLOG K1–K22)
1. **Oct 11 screens (K1–K10):** what the event page keeps; Interested on the date page; the event-page friend lines; where the three questions appear; where watched's six questions; R17 copy; R12 source; R15 wording; the assistant's calls inside her decisions; later passes (R10, R11, R13, badges).
2. **Left from build notes 2 (K11–K13):** feeds or jobs not built, two left-out items, one polish note.
3. **Milwaukee (K14).**
4. **Tester and interview about Oct 13 (K15–K17):** the name in git history, the pre-interview checks, her phone checklist.
5. **Older questions (K18–K22):** rating model v3, words, her log, Oct 3 notes, the build brief.
6. Dated re-checks in BACKLOG (Nov 3 Bay Area transit vote; seasonal ones).

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
