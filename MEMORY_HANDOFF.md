# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-decisions.md` (its "Oct 9–10, 2026 decisions" section is the newest). The current build plan is Kylie's `docs/reviews/build-notes-2-oct10.md` (saved verbatim); the mocks are in `docs/design/` (index: its README) and the Ticketmaster research in `docs/research/`.

_Last synced: Oct 11, 2026 (about 2:30 UTC, Oct 10 evening Pacific), Claude Code, ninth session (end). Everything below is committed and pushed to `main`; the working tree is clean. **Kylie's standing instruction: her usage is limited; commit and push after every step so the thread is never lost. No PRs: work goes to `main` (Kylie, Oct 9). Ask before anything uncertain.**_

## Current state
**Build 2 (Kylie's Oct 10 notes) is built end to end and live on `main`**: Section 0's 18 review fixes (R15 deferred by her), the settled read box, Favorites, Following and People, privacy (search, block, keep-private, plans on profiles, link-off), one search on every tab, event naming, Home section links, the map chip L1b, friction words and the two tags, the chip card and the Why card, the color roles, the ticket line, "I watched it", and the decision logging. About twenty commits, each one step, each `npm run build` green. Screens were checked with phone-size screenshots against the mocks.

**Not yet run by Kylie:** migrations 0014–0019 (the app falls back to the older shape until then) and the Ticketmaster key on Vercel (the ticket line stays hidden until then). Her list is below.

**Checks:** `npm run build` passes. `node scripts/storage-check.mjs` passes (offline). `node scripts/account-check.mjs` (live, two test accounts) passes everything except 15 checks that say "needs migration 00xx" in their name; they turn green as she runs each one. That script also wipes and reseeds the test accounts: Test A has two entries and one plan again, and B follows A (approved), redone Oct 10 after an earlier run had cleared them.

**The nightly job:** the Oct 10 scheduled run failed (one Open-Meteo text error killed the whole night); R12 made weather, schedule and results separate steps that skip a bad city and carry on, and a hand run on Oct 10 recovered that night (venue-id pull works; the "AIR SUPPLY" duplicate is gone). The cron is plain UTC `23 8 * * *` (about 1:23am Pacific) since Oct 9; the Oct 10 run still fired at the old 7:29am slot, so the first proof that the new time took is the run due 08:23 UTC on Oct 11. If it fires near 7am Pacific again, the cause is not the `timezone:` line.

## Key decisions in force (new this session; earlier ones in BACKLOG.md)
- **Every read falls back until a migration runs:** `src/data/storage/dbErrors.ts` tells "not there yet" apart from a real error; the profiles layer, the account store and the screens try the new view, column or function first and the older shape second. Keep that pattern for any new migration.
- **Views, not tables, for other people's data:** `profile_cards` (id, handle, name) and `entry_cards` (title, date, venue, city, kind, stamp, review) are what anyone but the owner reads; the tables are owner-only. The follower's side of a follow comes through `my_follows`, which never says declined or removed.
- **Friction words on screen, levels in the data:** `src/config/scoreLabels.ts` maps Low / Moderate / Heavy / Extreme to Unopposed · Squeezed · Swamped · Steamrolled. Unopposed shows only on the event page; nothing under the floor gets a pill.
- **Color roles are tokens** (`src/config/theme.ts`, `docs/design/colors.md`): blue = action, gold = crowd, violet = friction. Every gold button is action blue now; the Cooked read keeps gold on ink.
- **One tags component** (`src/components/EventTags.tsx`) draws the occasion tag, the friction pill, the by line and the crowd mark everywhere.
- **Names on screen** (`src/config/names.ts`): a feed's ALL CAPS is title-cased except the official-styling list and acronyms of four letters or fewer. Add to the list by hand; never guess.
- **"I watched it"** is an entry with `watched: true`; `crowd` on an entry is the draw on file when it was marked (evidence for "Fans with you" and "Biggest crowd"; entries marked before Oct 10 carry none).
- **The ticket price never touches the phone's key or the log:** `api/ticket-price.ts` runs on Vercel with `TICKETMASTER_API_KEY`; the app asks `/api/ticket-price?id=`; resale ranges are left out.
- **Testing notes:** `npm i --no-save playwright-core`; Chromium at `/usr/bin/chromium` with swiftshader flags; `localStorage['fan-friction:home-metro'] = JSON.stringify('la')` skips the picker; a seeded local log goes in `localStorage['fan-friction:your-nights']`; a signed-in screenshot works by writing a password session into `localStorage[sb-<ref>-auth-token]` (see `private/test-session-b.json`); `scripts/.tmp-*.mjs` run from the repo root and are deleted after; don't `pkill` vite, `kill $(lsof -ti:3001)`. Wait for `domcontentloaded` plus a few seconds, not `networkidle`, on the heavier pages.

## Kylie's manual steps (in order)
1. Paste and run in the Supabase SQL editor, in this order, each safe to rerun: `supabase/migrations/0014_sync_rows.sql` (deletions as rows, server clock), `0015_follow_rules.sql` (R01, R02; it re-asks followers the app approved on its own, so approve Test A again if asked), `0016_follow_states.sql` (quiet declines and removals), `0017_cards.sql` (cards instead of rows; the link-off switch), `0018_blocks.sql` (Block), `0019_private_entries.sql` (keep this one private). Then `node scripts/account-check.mjs` should say "all passed".
2. On Vercel, add `TICKETMASTER_API_KEY` as an environment variable on the project (Settings → Environment Variables; the same key the GitHub secret holds). The ticket line appears on upcoming event pages after the next deploy.
3. Watch the nightly run due 08:23 UTC Oct 11 (1:23am Pacific) in GitHub Actions.

## Open (everything, Oct 10 end of day; details in BACKLOG)
1. The manual steps above.
2. **Build 2 judgment calls to confirm** (BACKLOG, "Open from the Oct 10 build"): feed line wording with the event named once; the date page keeps Attend / Attended while the event page says I was there; watched events out of the venue count; "+fees" dropped when the feed's range includes fees; Local competition kept under Up against.
3. **Build 2 flags** (BACKLOG): standings beyond the schedule table, tours outside covered cities, alerts, live state, Official site links for artists, the re-score job, Weekend 1/2 on festival chips.
4. **Kylie's phone checklist** (BACKLOG) on the live site.
5. **R15, Famous nights wording** (deferred by Kylie).
6. **The tester's first name in git history** (BACKLOG, Waiting on Kylie): leave or rewrite.
7. **Tester interview about Oct 13:** a day before, check the tester's LA, San Diego, New York and Montreal nights show reads; after it, C034.
8. Dated re-checks in BACKLOG (Nov 3 Bay Area transit vote; seasonal ones).

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
