# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-decisions.md` (its "Oct 11, 2026 decisions" and "Oct 9–10, 2026 decisions" sections are the newest). The build plans are Kylie's `docs/reviews/build-notes-2-oct10.md` and `docs/reviews/build2-judgment-call-decisions.md` (both verbatim); the mocks are in `docs/design/` (index: its README).

_Last synced: Oct 11, 2026 (about 21:00 UTC, early afternoon Pacific), Claude Code, tenth session (end). Everything below is committed and pushed to `main`; the working tree is clean. **Kylie's standing instruction: her usage is limited; commit and push after every step so the thread is never lost. No PRs: work goes to `main` (Kylie, Oct 9). Ask before anything uncertain.**_

## Current state
**Kylie's Oct 11 judgment-call decisions are built and live on `main`:** the build 2 review fixes she approved (R01–R06, R08, R12, R16, R18; R09 flagged, not changed; R07, R10, R11, R14, R17 left as she said), then calls 1–9: feed sentences, Attended / Watched states, the Attended stat and where-watched, the crowd lock, the ticket line with "+fees", Local competition on the date page, the crowd icon everywhere, My Stubs chips, the Stats tab left alone. Each step one commit, each build green, the new screens checked with phone-size screenshots. Decisions, reasons and rejected options are in `docs/product-decisions.md`; the parked and open items in `BACKLOG.md` ("Open from the Oct 11 decisions").

**Later on Oct 11 (Kylie's answers):** migrations 0020 and 0021 ran. Built after them: "Attending?" and "Watching?" as questions before an event (a plan may now be a plan to watch, `Plan.watch`, settling into a Watched stub; feed line "is going to watch"); the date page's summary line uses the app's clock form ("7:30 pm"). Found and fixed: the follower's Unfollow and Cancel request never worked since 0016 (a delete needs the select rule); migration **0022** adds a server function `unfollow(target)`, **not yet run by Kylie**; two checks in `scripts/account-check.mjs` say "needs migration 0022" until then.

**Checks:** `npm run build` passes. `node scripts/storage-check.mjs` passes. `node scripts/account-check.mjs` (live) passes everything except the two 0022 checks. That script wipes the test accounts at the end; `node scripts/seed-test-accounts.mjs` puts them back (B follows A, A has three entries, one watched, and a plan). Reseeded Oct 11 after the last run.

**The nightly job:** runs fine on the new step layout (Oct 11's scheduled run succeeded), but fires about six and a half hours after its cron whatever the cron is: cron 08:23 UTC, started 14:56 UTC. Kylie wants it done before 9 AM Eastern (R09); an earlier cron would date the Pacific cities' files with the previous day. Flagged in BACKLOG with three options; not changed.

## Key decisions in force (new this session; earlier ones in BACKLOG.md)
- **Follows:** a request from a blocked person is refused by the insert rule; a removed row stays and the follower's Unfollow only hides it (`hide_follow`); a decline that fails says so and never deletes; the follower's side still reads through `my_follows`.
- **People search is a server function** (`search_people`, three letters, punctuation stripped, twenty results); a profile link resolves one exact handle (`profile_card`); visitors cannot list `profile_cards`.
- **The newest edit wins by when you made it:** the database skips an update whose `data.updatedAt` is older than the row's (`keep_newest_edit`); the app reads that field first.
- **Crowds lock with the stamp** (`lockCrowds`, a lazy fill on open after plans settle): the box-score attendance, else the estimate; `crowdLocked` stops a second lookup. Nothing is taken at the tap.
- **Where watched** is on the entry (`watchedWhere`, `watchedPlace`, `watchedPlacePrivate`) and, when shared, in `watch_places`; the database shares a name only with people public for the same event.
- **Words:** feed lines "is going to / is going to watch / went to / watched {event}", future or past only, no "· you too"; before an event the questions "Attending?" and "Watching?", after it the states Attended / Watched; Stats "Attended", never "Events"; "Local competition", not "Up against", on the date page and the map key; the clock is always "7:30 pm".
- **Testing notes:** `npm i --no-save playwright-core`; Chromium at `/usr/bin/chromium` with swiftshader flags; `localStorage['fan-friction:home-metro'] = JSON.stringify('la')` skips the picker; a seeded local log goes in `localStorage['fan-friction:your-nights']`; a signed-in screenshot works by writing a password session into `localStorage[sb-<ref>-auth-token]` (see `private/test-session-b.json`); the page scrolls inside `.screen.page`, so scroll that element, not the window, for the bottom of a page; `scripts/.tmp-*.mjs` run from the repo root and are deleted after; don't `pkill` vite, `kill $(lsof -ti:3001)`.

## Kylie's manual steps (in order)
1. Paste and run in the Supabase SQL editor: `supabase/migrations/0022_unfollow.sql` (safe to rerun). Then `node scripts/account-check.mjs` should say "all passed", and `node scripts/seed-test-accounts.mjs` after it.
2. The crowd fill on your log: open the app signed in (it runs on open, at most forty lookups a run; open again if your log is long), then check My Stubs and Stats. Entries from nights before the schedule archive stay blank.
3. The nightly run: decide R09 from the three options in BACKLOG. Until then it lands around 7–8 AM Pacific.
4. Answer the ⚑ items in BACKLOG ("Open from the Oct 11 decisions"): what the event page keeps (and whether an event page should link to its date page), whether "Interested" becomes a third answer (recommendation: no), where-watched's open questions, R12 and R17.

## Open (everything, Oct 11 midday; details in BACKLOG)
1. The manual steps above.
2. **R09**, the nightly job's time (flagged, her call).
3. **Call 6:** what the event page keeps; nothing was removed from it. Also: a way from the event page to its date page (proposal in BACKLOG).
4. **"Interested" as a third answer** (Kylie's question; recommendation in BACKLOG: no). **Where watched:** six open questions, her words.
5. **R12:** the artist/concert equivalent of ESPN. **R17:** new framing for "Nothing bigger was on."
6. **Kylie's phone checklist** (BACKLOG) on the live site.
7. **The tester's first name in git history** (BACKLOG, Waiting on Kylie): leave or rewrite.
8. **Tester interview about Oct 13:** a day before, check the tester's LA, San Diego, New York and Montreal nights show reads; after it, C034.
9. Dated re-checks in BACKLOG (Nov 3 Bay Area transit vote; seasonal ones).

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
