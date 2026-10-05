# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`.

_Last synced: Oct 5, 2026 (Claude Code, late)._

## Current state
Accounts, profiles and the Friends tab are built and deployed. Kylie is mid-review of the You screen; her last reactions are folded in. Nothing uncommitted. `main` is pushed and live.

- **You (signed in):** letter avatar, display name, `@handle` under it, gear top-right (blue count badge when follow requests wait). Three tabs: **Nights** (every night newest first, month separators, year for rough dates, no filter), **Stats** (filter chips + Nights/Venues/Heaviest night + count lists), **Friends** (recent nights of approved followees, newest first, name + night + stamp; three rows marked **Example** until anyone is followed, never saved anywhere). Signed out: the sign-in card (Google, centered email field, "Email me a link" as text) then the tabs.
- **Settings** (`/you/settings`): Account (name, @handle, Sign out, **Share profile** via share sheet or copy), Profile form inline (display name, @handle, visibility Only me / People I approve / Anyone, Save), Export my nights, Show the tips again. `/profile/edit` still exists as a route but nothing links to it.
- **Visitor page** `/p/<handle>`: name, Nights/Venues/Heaviest, nights list, gold Follow (Follow / Requested / Following). Opening your own shows exactly the visitor view, no banner, no Edit. Letter avatar only; the Google picture is stored but unused.
- **Supabase:** migrations 0001 (tables + RLS), 0002 (her 130 nights), 0003 (handles, profile cards readable by anyone) all run by Kylie. Project `fhfqhcbnzmmkhsselayb`; keys in Vercel (by hand) and `.env.local`.
- **City switcher:** house icon before the home city's name.

## Changes made (this session)
Docs (`direction.md`, `product-review-decisions.md`, `accounts-proposal.md`, `AGENTS.md` incl. the UI copy rule), `supabase/migrations/0001–0003`, `src/data/{account,profiles}.ts`, `src/data/storage/{supabaseClient,supabaseStore,index}.ts`, `src/components/AccountBlock.tsx`, `src/screens/{ProfileScreen,ProfileEditScreen,SettingsScreen,YouScreen}.tsx`, `src/lib/dates.ts` (`timelineGroup`), `src/components/Icons.tsx` (GearIcon), `HomePicker.tsx` (no location), `MapScreen.tsx` (house first), styles.

## Key decisions in force
- **Pushing (Kylie, Oct 5):** don't push every change at once. Commit, leave it on the local site (`npm run dev`, localhost:3001) for her to look at, push when she says. She OK'd the last pushes because she was stepping out.
- **UI copy rule (Kylie, Oct 5):** users are not dumb; no explanatory banners, no "this is how others see you", utilities behind the gear. In `AGENTS.md`.
- **You vs profile (settled Oct 5 after consulting Letterboxd/Strava/Flighty patterns):** one page; You holds the controls, `/p/<handle>` is the same page as a visitor sees. No separate profile page, no "Your page" row; the link is only for sharing.
- **Friends is a tab on You** (she corrected a section I built). Feed = friends only, never strangers; no comments or likes.
- **Stats:** Nights, Venues, Heaviest night (not Cities). Filters live on the Stats tab only.
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
1. Kylie reviews You/Settings/Friends on the live site signed in (I could only screenshot signed-out states). Open question she left: should the sign-in card's two lines of copy go.
2. **Night rows need design work** (Kylie): "work out the kinks of each entry". Bring her two or three row variants to pick from. Needs her notes first.
3. Then richer entries (score auto-filled, setlist link, who you went with, note, optional photo), then the rating formula. Parked: Traffic, Night story, Famous nights → "Were you there?", You "Did you go?", Ticketmaster, photos (only if free).

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001; see the Direction pivot and Accounts sections of BACKLOG.md
```
