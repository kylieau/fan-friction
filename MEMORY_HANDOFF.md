# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`. The current build plan is Kylie's `docs/reviews/build-notes-oct9.md` (her decisions on all 103 review items, saved verbatim).

_Last synced: Oct 9, 2026, Claude Code, eighth session (end). Everything below is committed and pushed to `main`; the working tree holds only two untracked helper scripts (`scripts/.tmp-follow-kylie.mjs`, `scripts/.tmp-b-follows-a.mjs`, test-account chores; safe to delete). **Kylie's standing instruction: her usage is limited; commit and push after every step so the thread is never lost. No PRs: work goes to `main` (Kylie, Oct 9). Ask before anything uncertain.**_

## Current state
**Every step of the Oct 9 build notes, (a) through (f), is built and live on `main`**, plus the Ticketmaster pull by venue id (C002). Step (d) merged after Kylie's OK with her header change (read box left, `< Today >` right) and the saved-date card off the map. Migrations 0010–0013 are all applied. Kylie and Test A follow each other. The Section 8 tests that can run from here are run (BACKLOG, "Section 8 test results"); her phone checklist is in BACKLOG.

**Built Oct 9 (nine commits, all pushed):**
- Fix first: un-tapping Attended asks once; change-based account sync (only what changed is written, in order, failed writes resent, newer entry wins, removed ids remembered half a year in `settings.data.removed`); sign-out asks while a change hasn't reached the account; an involuntary sign-out keeps the phone copy; the offline cache holds only catalog tables (`catalog-public`); every follow is a request, enforced by migration `0011` (applied).
- Bucket 1, all 24 (plus the Ticketmaster venue ids for 188 of 213 venues and the 300 m fallback; the 2026 attendance seasons collected, 16 season levels).
- Decisions: the empty-date box (Quiet vs No data from the snapshot index's per-capture sources), Home's and Favorites' read lookups by `nightKey`, the wording pass (My Stubs, Following, events, Log an event), tips removed, home city in Settings, the Add form (every city searched, essentials first, future dates as plans, duplicate warning), editing hand-added entries, hand-added pages with weather and links, chips with type icons and a +N badge that fans out, small events muted on the map, two labeled columns (Occasion, Friction) in both lists, If necessary games out of the read, the 6.3 crowd format, the favorites picker in sections, the Following activity feed (plans and attended; migration `0012` written, **Kylie's to paste**), the Coming up strip, the settled read from the saved capture (the "Updated <date>" line exists but nothing re-scores yet).
- Docs cleanup (Bucket 5).

**Test accounts:** two (`private/test-accounts.json`, git-ignored; emails at example.com, password sign-in, made Oct 9). Test A follows Kylie (she approved); B follows A (approved). Kylie has not followed A back yet; `scripts/.tmp-follow-kylie.mjs` approves it as A when run. `scripts/account-check.mjs` (live, two sessions) and `scripts/storage-check.mjs` (no network) both pass.

## Key decisions in force (new this session; earlier ones in BACKLOG.md)
- **Night-or-day word (Kylie, Oct 9):** "night" only when every known start that date is at or after 5 pm; any earlier start makes it "day"; no known time reads as night. One helper, `src/lib/dayWord.ts`.
- **Settled read:** a past night keeps the read saved before its last start; "Updated <date>" (her word) only when a formula change re-scores it. No re-score job exists.
- **Concert, not Show**, for the type label (theatre is a different thing; it lands under Special today).
- **Chip icons** are drawn in the app's line style, not an icon font (Kylie: consistency over library). She wanted actual-size chips before settling: screenshots were taken Oct 9 (game, concert, long postseason name, the +2 fan-out) and are in the Oct 9 chat; she has not said yes or no.
- **Famous nights stays where it is** until search (6.1) exists; labeled Newest first. No backfill of past dates. The feed carries plans and attended lines only.
- **Migrations are pasted by Kylie** into the SQL editor; the CLI is not linked. Check a table over REST before assuming one ran.
- **Testing notes:** `npm i --no-save playwright-core`; Chromium at `/usr/bin/chromium` with swiftshader flags; `localStorage['fan-friction:home-metro'] = JSON.stringify('la')` skips the picker; a signed-in screenshot works by writing a password session into `localStorage[sb-<ref>-auth-token]` (see `private/test-session-b.json`); `scripts/.tmp-*.mjs` run from the repo root and are deleted after; don't `pkill` vite, `kill $(lsof -ti:3001)`.

## Next steps
1. **Kylie's phone checklist** (BACKLOG) on the live site once Vercel has `main`.
2. The rest of Q11 (privacy) when she decides: follower field limits, handle-only lookup, block, link off switch, per-event / per-detail sharing.
3. Close the four Oct 7 reviews (`Status: closed` lines); the hook archives them. Her build notes stay as the record of the decisions.
4. Tester interview about Oct 13: a day before, check the tester's LA, San Diego, New York and Montreal nights show reads.
5. Watch tonight's nightly run: the first catalog write with the venue-id Ticketmaster pull, the add-on filter and the dedupe.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
