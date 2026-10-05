# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`.

_Last synced: Oct 5, 2026 (Claude Code, night)._

## Current state
The app's structure pivoted again today, with Kylie: **tabs are Home · Explore · Favorites · You.** Home is a digest (Tonight in your city with a mini map, only when the city has events that day; Coming up; Recent; Friends grouped by event; signed out adds This week and the sign-in card). Explore is the old Map tab with a **Map / Calendar switch** that remembers the last choice per device; the city switcher lives only there. Compare is gone from the tabs (its screen stays at /compare). The **date page** (`/date/<date>`) is one page per date in a city: the read box, your entry or plan, the timeline of events with friction chips (Moderate+), friends there, Attend/Attended as the gold button with a share icon beside it. "Did you go?" and "Were you there?" were dropped: an Attending plan becomes Attended by itself once the date passes; Famous nights stay in the calendar view.

- **Pushed and live:** everything through the read box (commit `7fd7ace`). **Local, not pushed:** the Home/Explore build (`44e996a`) and this handoff. Kylie wants to look locally first and say push.
- **Words:** "Fan/Friction" unchanged. On screen: Events (entries), dates, Calendar, Home, Explore, Favorites, Attend/Attending/Attended. "Famous nights" kept. The date page says "That day in …" when everything starts before 5 pm. Code and Supabase tables renamed to match (entries, entry_notes; migration 0004 run by Kylie).
- **Read box** (number + word in the band color; Cooked = ink + gold) is one component (`ReadTile`) used everywhere a date's read shows.
- **Supabase:** migrations 0001–0004 all run. Favorites live in `settings.data`. Her 130 entries are in her account.

## Changes made (this session, late)
`src/screens/{HomeScreen,ExploreScreen,DateScreen,CalendarScreen,FavoritesScreen,FavoritePage,SettingsScreen}.tsx`, `src/components/{ReadTile,DateScore,AccountBlock}.tsx`, `src/data/{favorites,read,profiles,personalLog,types}.ts`, `src/lib/view.ts` (datePath, calendarPath → /explore?view=calendar, explore-view pref), `src/map/BaseMap.tsx` (interactive flag), styles (tighter spacing, read colors, chips), `supabase/migrations/0003_handles.sql`, `0004_entries.sql`.

## Key decisions in force
- **Home (Kylie, Oct 5):** the app opens on a digest, not the Map. Tonight shows only when the home city has events that day; its list is the biggest three by crowd first, then the rest, in a box three rows tall that scrolls. No feed of strangers, nothing ranked by friction. Friends grouped by event ("Sam and Priya · Slayer"). Coming up and Recent list everything, home and away; Recent shows the outcome when known.
- **Explore (Kylie, Oct 5):** Map / Calendar switch, remembers last choice. One search icon (Home and Explore) opens the calendar view's search.
- **No confirmation steps:** no "Did you go?", no "Were you there?" as a step. Attending → Attended when the date passes (`settlePassedPlans` at app start).
- **Friction chips:** Low never shown; Moderate pale blue, Heavy Dodger blue, Extreme ink. Same palette on the Map sheet and the date page.
- **Spacing/type:** she wants it tight ("I'm not my grandparents"); one pass done, say "tighter" for another.
- **Logos:** abbreviations until a public launch decision; logos are a licensing question she'll judge.
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
1. Kylie reviews Home and Explore locally (today, Oct 5, is quiet in LA, so Tonight won't show until a day with events; the Oct 4 seed shows it when the clock is set back). Then push.
2. Night rows / entry design (her notes first; she wants to build all pages before this). Then richer entries (outcome auto-filled, setlist link, who with, note, photo), then the rating formula (makes Coming up / Tonight reads real; today upcoming dates show "—").
3. Data widening when she asks: away games, concerts (Ticketmaster 🚩), results after games. Parked: Traffic, Night story, Compare-with on the date page, Friends feed beyond You's tab.

**Next command to run:**
```bash
git status -sb && npm run dev   # localhost:3001; Home at /, Explore at /explore
```
