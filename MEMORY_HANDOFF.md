# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`.

_Last synced: Oct 5, 2026 (Claude Code, evening)._

## Current state
Fan/Friction is a personal log of live events you attended, with a friction read stamped on each night. **Accounts are live.** Steps 1–4 of the accounts plan (`docs/accounts-proposal.md`) are on `main` and deployed; Kylie signed in with Google and her 130 nights now come from her account. Next is **step 5, the profile page**: mockup first, then build after she approves.

- **Repo:** `main` clean, pushed. Live: https://fan-friction.vercel.app. Vercel env has `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (Config, all environments; Kylie added them by hand). Local copy in `.env.local` (git-ignored); template in `.env.example`.
- **Supabase project** `fhfqhcbnzmmkhsselayb`. Migrations run by Kylie in the SQL Editor: `supabase/migrations/0001_accounts.sql` (tables + privacy rules) and `0002_kylie_log.sql` (her 130 nights, 12 private notes; generated from `src/data/seed/kylieLog.ts`). Google provider and email link are on; redirect URLs include the live site, `*-kylie8.vercel.app` previews and localhost:3001.
- **The Vercel MCP connection is scoped to her personal account, not the `kylie8` team**, so env changes from here fail with 403; she does them in the dashboard.

## Changes made (this session)
- Docs: `docs/direction.md`, `docs/product-review-decisions.md`, `docs/accounts-proposal.md`, `docs/second-opinion-direction-prompt.md`, `AGENTS.md` (CLAUDE.md is `@AGENTS.md`).
- Accounts: `src/data/storage/supabaseClient.ts` (client only when env exists), `supabaseStore.ts` (real cloud store), `storage/index.ts` (phone always, account when signed in; merge on first sign-in; clear phone copy on sign-out), `src/data/account.ts` (session, Google, email link, sign out), `src/components/AccountBlock.tsx` (You's sign-in card), `personalLog.ts` (sync status; seed no longer merged), `HomePicker.tsx` ("Use my location" removed), `YouScreen.tsx` (empty state says sign in).
- `@supabase/supabase-js` added.

## Key decisions in force
- **Accounts (Kylie, Oct 5):** account = login + saved data; profile = public face (display name, avatar, visible nights). She wants profiles **early** so they can be corrected, and people following each other someday. Visibility switch on the account: Only me (default) / People I approve / Anyone. **No feed of strangers' nights. No location, ever.** Private note lives in `night_notes`, never on a shared page. Photos: later, only if free. Sign-in: Google + email link; Apple waits for the native app (🚩 $99/yr).
- **Profile entry point (approved):** tap your name at the top of You → your profile as others see it, with Edit (display name, visibility). Link form `/p/<handle>`.
- **Her nights live in her account**, not in the app. New people start empty. `hiddenSeedIds` stays only for old phone copies.
- **Working rules.** Propose a structural change, then wait for approval. Never delete a feature. Flag a new cost with 🚩 and wait. Kylie locks decisions. Do not reopen a locked answer unless she does.
- **Stamp clock.** On a night with several events, the clock is the last scheduled start that night, whichever event is scheduled last. The stamp locks 24 hours after that start. Tapping does not move the clock.
- **Forecast.** Save stores the night only, with no forecast. The every-30-minute start-time capture is parked. Until it returns, the stamp uses the latest daily Los Angeles snapshot saved before the event's start that includes the event, and is labeled as such. A snapshot at the start, or after it, is not used. If that file has no number, no number is added. Los Angeles only.
- **Map card (Oct 5).** Any city. The lines are "Next saved night", the chip name, then the date and city ("Fri, Oct 9 · Boston"). No gold button. A tap opens the event in its own city and leaves the map where it is. Back restores it.
- **Home (Oct 5).** One city, stored on the device. First open: "Where's home?" House icon in the switcher. "Set as home" only on cities with events. The map always opens on home and never follows a saved night.
- **Map UI.** No longer locked. The Oct 4 freeze on chips, the sheet, the glow, and the legend is lifted. Still propose, then wait. Save and "I was there" stay on the event page.
- **Under 5,000.** Those rooms stay off the map. They do not feed friction. They can still be logged, and they can take a nearby read.
- **Direction (Oct 4).** The log leads. Nothing built is deleted. No points, leaderboards, collectible badges, open posting, public photo walls, navigation, or a standalone "is tonight bad?" feed. v1 uses public data only. Logs are private by default. Tweets stay on hold until access and cost are verified. Product risks are parked.
- **Still in force.** Her words beat docs and other models. Write Fan/Friction with the slash. Free until forced. Screens read only through `src/data/index.ts`. Every crowd figure has a kind label. Only pre-event facts affect a rating. One gold button per screen. Traffic is an estimate only, and it is never red.
- **Logging-threshold wording.** Still open, and parked. Direction and `AGENTS.md` say about 1,000+ can be logged. The review says 1,000 only decides what is pre-listed.
- Cloud notes: Wikipedia is blocked; ESPN rejects headless-Chrome user agents; screenshots use `playwright-core` with swiftshader args; don't `pkill` vite.

## Next steps
1. **Step 5, profile page:** mockup for Kylie, then build after approval. Needs a `handle` column on `profiles` (migration 0003), a `/p/:handle` route, display-name edit, the visibility switch, Follow button writing to `follows`.
2. Then richer entries (score auto-filled, setlist link, who you went with, note, optional photo) and the rating formula. Parked: Traffic, Night story, Famous nights → "Were you there?", You "Did you go?", Ticketmaster.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # step 5 starts with a profile mockup; see docs/accounts-proposal.md
```
