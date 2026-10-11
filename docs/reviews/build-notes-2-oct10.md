# Fan/Friction build notes 2 (updated Oct 10, 2026)

_Saved verbatim from Kylie's Oct 10 bundle (`build-notes-2-oct10.md`, `claude-prompt-oct10.md`, `ticketmaster-price-research.md` and twenty mocks; Claude Code, Oct 10, 2026). The mocks are in `docs/design/` (index: its README) and the research in `docs/research/ticketmaster-price-research.md`. Paths in the text such as `/workspace/ff-gap-review/mosaic/...` are where the mocks sat on her machine; each one is listed by file name in `docs/design/README.md`. Her prompt is appended at the end._

This replaces build-notes-2-oct9.md. Build 2 has not been built yet: `origin/main` is at `5a4f0a0` (Oct 9, 4:20 PM PT), and every commit after `377ce75` is docs or the nightly-job fix. So this file contains all of build 2 plus Oct 10 (review fixes, Mosaic approvals, ticket line, "I watched it").
Code references are to `377ce75` and still hold on `5a4f0a0` (no `src/` changes in between). The first build (`build-notes-oct9.md`) is done.

**Order of work: Section 0 (privacy and data-loss fixes) first, then the rest. One commit per step, straight to main, no PRs.**
Mockups: every image named here is in the bundle under `mocks/`. Commit each one to `docs/design/<filename>` and point the docs there. Where this file says "Overrides", it replaces that file.

House rules for every screen: reads always show tenths (7.4), never "x/10". Crowds as 60k / 9.5k / .6k. Use "night" only for a city's date after 5 PM. Say "Log an event" and "My Stubs". No confirmation prompts except the one confirm named below for Remove / Unfollow / Block. Users are capable; say less.

## 1. Settled read box

Overrides build-notes-oct9 3.15 (keep the "Stamped" label; "Rescored <date>" line) and 3.16 (no mark on pre-archive nights).

Mockups: `/workspace/ff-gap-review/mosaic/settled/settled-preferred.png` (options D/E, the lean), `/workspace/ff-gap-review/mosaic/settled/settled-read-states.png` (A/B/C, reference only).

What the box shows:
- The read number (tenths) and its word. No "STAMPED" label. No "Formula v4". No "Updated" line.
- A small ⓘ. Tapping it opens "About this read":
  - Always: "Settled the day after the games."
  - Only after a redo: "Revised {date} when we improved the method. It was {old}."
- Nights before the schedule archive began keep one quiet line: "Rebuilt from past schedules."

Current code:
- `src/screens/DateScreen.tsx:191` sets the label to 'Stamped' or 'Forecast'; it renders at `src/screens/DateScreen.tsx:236` (`read-lab`). Remove 'Stamped' for settled reads. Keep 'Forecast' before the lock.
- `src/screens/DateScreen.tsx:243` adds " · Updated {date}" from `saved.rescoredOn`. Remove it from the box; move the date and old score into the ⓘ text. The old score is not stored today: `SavedNightRead` (`src/data/types.ts:399-408`, `src/data/read.ts:302`) has `lastUpdated` and `rescoredOn` but no previous value. Needs a field for the old read.
- `src/screens/EventScreen.tsx:177` shows 'Stamped' / 'Forecast' on the event page. Same change.
- Pre-archive flag already exists: coverage `'reconstructed'` in `src/data/read.ts:212-234` and `reconstructed` on the saved read (`src/data/types.ts:408`). Use it for the "Rebuilt from past schedules" line. Also update `docs/tester-brief.md:30`, which the first build is changing for 3.16.
- "Formula v4": not found in `src/` on origin/main. It appears in the mockups only. Nothing to remove in code.

## 2. Favorites

Mockups: `fav-layouts.png`, `fav-page.png`, `fav-switch.png` (from `/workspace/ff-gap-review/mosaic/favorites/`). Note: `fav-switch.png` uses old labels "By team / By schedule" and shows a week strip. Use the new labels below and no strip.

Layout (L1 status cards):
- Switch at the top: "By favorite | By date". It replaces "Home | Everywhere" (`src/screens/FavoritesScreen.tsx:236-243`).
- No week strip.
- By favorite: cards grouped under Teams / Artists / Venues.
- Each card:
  - Header: name, record, last 5 as W/L.
  - ONE next line: date, time, opponent or venue, read box, friction pill.
  - Away game at a building we don't cover: a small "Away" tag instead of "—".
  - Team cards: a quiet "ESPN ›" outbound text link. Link only; no ESPN data shown.
- "You at games: 4–2" opens My Stubs filtered to that favorite.
- By date: the same events in date order. Each date heading carries that date's read.
- Home and Last rows move off the card to the favorite's page.

Favorite page: follow `fav-page.png`. Current page is `src/screens/FavoritePage.tsx` (home/away line at `src/screens/FavoritePage.tsx:296`).

Data/backend needs (each is a flag, not built today):
- [ ] Reads on upcoming schedule rows (read per row in the next line and By date headings).
- [ ] Standings / series status for record and last 5. MLB's free stats API is OK. ESPN: licensing caution; link out only.
- [ ] Artist tours outside covered cities. Bandsintown / Songkick: check licensing.
- [ ] Alerts: push plus a scheduled job. On-sale alerts need a ticketing feed.
- [ ] Live state: no feed exists.
- [ ] Matching attended events to a favorite for "You at games".
- [ ] `team_schedules` (read in `src/data/teamSchedule.ts:25`) migration `0010_team_schedules.sql`: Kylie ran it Oct 10 (with 0011–0013). Done.

## 3. Following

Mockup: `/workspace/ff-gap-review/mosaic/following/f3-people.png`.

Feed (F3), grouped per event:
- Event header with its read box. Under it, stacked friends' activity lines.
- Only events you're interested in. Kylie liked that it is not a stream of everything. Proposed meaning of "interested": events you saved or logged, plus your favorites' events. *To confirm (Section 5).*
- Lines, unchanged from earlier rules:
  - "{name} is planning to attend {event}"
  - "{name} attended {event}" — only after the date passes.
  - No "is at" lines. No post times or live timestamps. Plan lines are dated by the event.
  - With and notes are never shown.
- Current feed data: `followingFeed` (`src/data/profiles.ts:280-314`) loads followed people's entries and plans (`:289-290`) with no per-event grouping or interest filter.

People list: one tappable "{N} people" in the header opens it.
- Requests row on top.
- Chips: All · Mutual · Follows you · You follow.
- Per row status: "Mutual" label / "Follow back" / "Following" / "Requested" (tap to cancel).
- ⋯ menu: Remove / Unfollow / Block, one confirm.
- "+ Find people" row.

What exists: `src/screens/PeopleScreen.tsx`, route `/you/people` (`src/App.tsx:56`).
- Two tabs, Followers / Following (`src/screens/PeopleScreen.tsx:14`, `:38-45`). Back link goes to `/you?tab=following` (`:34`).
- Follow back (`:65`), "Requested" text (`:68`, `:87`), Remove with an inline "Remove?" confirm (`:71-81`), Cancel / Unfollow button (`:89`).
- Requests live elsewhere (`followRequests`, `src/data/profiles.ts:216`).

Needed: replace the two tabs with the four chips; Requests row on top; Mutual label; tap "Requested" to cancel; ⋯ menu with Block; "+ Find people" (no search exists yet, see Section 4).

## 4. Privacy

- Before approval, a requester sees only name + handle.
- Approved followers see logged events and plans. With and notes never (they live in owner-only `entry_notes`, `supabase/migrations/0005_entry_private.sql`).

Handle search:
- Partial match on name and handle (Kylie's choice). Tradeoff: partial match makes accounts easier to browse. Suggested mitigation for Kylie to OK: minimum query length of 3 characters.
- Results show only name, handle, Follow.
- Today `profiles` is readable by anyone, all columns: policy "profiles: anyone reads the card" `using (true)` in `supabase/migrations/0003_handles.sql`. Narrow it to the fields search results need. The app also selects `*` from profiles (`src/data/profiles.ts:77`, `:162`, `:174`, `:288`, `:324`).
- No search function exists in `src/data/profiles.ts` today.
- "Copy my handle".
- No contacts matching.

Block (⋯ menu in People list and on a profile):
- Removes the follow both directions, hides you from their search, no notice to them.
- Needs a `blocks` table + RLS. Not built.

Other:
- Link-off switch in Settings.
- Per-event / per-detail sharing: later. v1 = a "keep this one private" toggle per stub. Needs an `entries` visibility column + RLS. Not built.

Profile page (`src/screens/ProfileScreen.tsx`):
- Trim the fetch to title, date, venue, city, read. Today `entriesOf` selects full `data` (`src/data/profiles.ts:122-132`, select at `:127`), called at `src/screens/ProfileScreen.tsx:52`.
- Add plans (readable by approved followers per `supabase/migrations/0012_plans_for_followers.sql`).
- Add Remove / Block on the profile.
- Back link currently says "You" (`src/screens/ProfileScreen.tsx:78`, `:112`). Fixed by R08 (Section 0).

## 5. Open questions

1. F3 filter: is "interested" = events you saved or logged, plus your favorites' events?
2. Handle search: OK with a 3-character minimum?
3. Removing "Stamped": intended, given the earlier wish that people know a read was frozen? The ⓘ text "Settled the day after the games" now carries that.

## Answers to open questions (Kylie, Oct 9)
- Following "interested" events: events you saved or logged, plus your favorites' events.
- Partial-match name search starts at 3 characters.
- Revised reads: store the old score and show "It was {old}." in the ⓘ card (needs a new field next to `rescoredOn`).

## Explore header follow-ups (Kylie, Oct 9, after fe6324a)
- Search must stay. On main the strip search button exists (`src/components/DayStrip.tsx:69-71`), but Kylie's live view showed the old right-edge "› Today" tab and no search. Check the deployed build matches main, and that nothing covers the search button.
- Read box: stays left of the date for now (fe6324a). Kylie wondered about the right side; Kylie confirmed Oct 9: keep it left.
- City switcher: make sure the chip is truly centered on the top row. The dropdown is fixed at 280px and pinned left (`src/styles.css:432-445`, `.area-menu` left: 0; width: 280px). Size it to the longest city name plus padding, and center it under the chip.
- City name: keep "Bay Area" (`src/config/metros.ts:77`), confirmed by Kylie Oct 9.
- Search placement (Kylie lean, Oct 9): one search button at the top right on every tab, the same spot and the same search everywhere. On Explore it shares the top row with the centered city switcher and replaces the button on the day strip, so the strip runs edge to edge. Home's existing top-right search becomes the same shared search.
- You tab (Kylie lean, Oct 9): search takes the top-right spot where the settings gear sits today. Settings moves behind the avatar/profile button on You (tap the avatar to open your profile and Settings). Change home lives in Settings, so it moves with it.
- Favorites (Kylie lean, Oct 9): remove the Favorites tab's own search bar; the shared top-right search covers it. Adding favorites still works from the picker (Edit) and from search results.

## Global search (approved by Kylie, Oct 9)
Mockup: /workspace/ff-gap-review/mosaic/header/global-search.png
- One search button top right on every tab. Explore: centered switcher + search on the top row, date without a chevron, day strip full width, Today control unchanged. Home: search right of "Tonight in {city}".
- You: search top right only. The gear moves behind the avatar (small chevron badge on the avatar as the cue). Tapping the avatar opens a sheet: Edit profile / Settings (subline "Home city, privacy, notifications") / Share my handle. The + moves into My Stubs as a full-width outline "+ Log an event" row.
- Search sheet: placeholder "Teams, artists, venues, dates, people"; chips Tonight · This weekend · Pick a date; typed dates work. Results grouped Events, Teams, Artists, Venues, People (People: partial match from 3 characters, name + handle only).
- Favorites: its own search bar is removed only if every team/artist/venue search result has an inline Follow and Edit still opens the picker (search + suggestions + Follow + Done).

## Event naming (Kylie leans, Oct 9; fills gaps in current rules)
Current rules with file:line: /workspace/ff-claims/naming-rules-current.md (chip name is `mapTitle`, `src/lib/eventTitle.ts:141`; `listTitle` :157).
- Casing: title-case names a feed sends in ALL CAPS, except (a) a hand-kept official-styling list (e.g. for KING & COUNTRY, deadmau5, MØ) and (b) acronyms of 4 letters or fewer (AJR, BTS, MGMT). SLAYER shows as Slayer unless it's on the list.
- Official title: store Ticketmaster's event name as a separate `officialTitle` (`src/data/sources/ticketmasterSource.ts:256` keeps only the performer today). The sheet and event page show it (e.g. "Bruno Mars: The Romantic Tour").
- Festival chip: the festival's short name (Coachella), not a performer. Add "Weekend 1/2" only if both weekends are on the map.
- Squad tags: keep them on college list titles (matches code); pro teams get none. Update the docs to match.
- Away/neutral: event titles stay "Home vs. Away". Only a favorite's own page and card use "at Brewers" / "vs. Oilers". Neutral sites show the city on the venue line.
- Game number: show it when the feed has it, never guess. Update `docs/product-decisions.md:8` to match.
- If necessary: "If necessary" everywhere. Don't fade or mark the map chip (muted gray already means a small event); the flag shows on the sheet only.
- List rows: Home and Favorites rows use the short name (`mapTitle`); only the sheet and event page use the official title.
- Open: chip type icon on line 1 or line 2 (with Kylie).

## Home section links (approved by Kylie, Oct 9)
- Drop every "See all ›". Each section heading becomes the link, with a small › after it: "Tonight ›", "Your next event ›", "Following ›", "Favorites this week ›". Give the heading row a 44 pt tap target.
- Remove the extra "See all ›" under the Tonight card. Link destinations stay the same as today. (Overrides the "See all ›" line in build-notes-oct9 6.4.)

## Map chip redo (approved by Kylie, Oct 9): L1b
Mockup: /workspace/ff-gap-review/mosaic/chip-icon-line1.png (row L1b). Overrides build-notes-oct9 3.18 (icon was on line 2).
- Box: fixed 112×44, unchanged. White, 1px stroke ~35% #0F1B2D, shadow 0 2px 6px rgba(15,27,45,0.28).
- Line 1: type icon (dodger #005A9C, ~10 pt, glyph padding cropped, 2 pt gap), then the name in Barlow Semi Condensed 700 at ~11 px, one line, ellipsis. Side padding ~6 pt (live CSS is 2px 4px; keep whichever gives the name the most room).
- Line 2: time · crowd (60k / 9.5k / .6k), muted.
- Icons: music note, hockey, baseball, football, etc. Live set is hand-drawn line SVGs (`src/map/typeIcons.ts`); keep it if it reads at 10 pt, otherwise Material Symbols Rounded as in the mock.
- No friction, Sold Out, or If necessary on the chip.
- Expected fit: "Foster the People" and "Dodgers (NLCS G3)" fit in full; long names like "for KING & COUN…" and "The Neighbourho…" still ellipsize.

## Friction words, two tags, chip tap card, "Why tonight" card (approved by Kylie, Oct 9–10)
Mockups: /workspace/ff-gap-review/mosaic/sheet/two-tags-everywhere.png (layout; drawn in blue, build in violet), friction-colors.png, chip-card-read.png, fight-ladder-final.png, p3-final.png.
- Friction words replace Low/Moderate/Heavy/Extreme in order: Unopposed · Squeezed · Swamped · Steamrolled. "Unopposed" appears only on the event page. Under-5k events get no friction pill and no "Small room" label. No swords icon.
- Two tags under each event title wherever events are listed (Explore lists, date page list, Home Tonight rows, event page, share card, chip card, map key): occasion as a quiet outline tag (1px #4B5A70, 11 pt small caps: NOTABLE / MAJOR / MARQUEE; Routine shows nothing), then friction as a small filled pill, word only. Drop the OCCASION/FRICTION column headers. Home rows put the time on the right under the crowd, matching Explore.
- Friction colors (violet): Squeezed #E6DDF8 with ink text, Swamped #6A3FBF white, Steamrolled #2C1A57 white, Unopposed #EEF2F7 with #4B5A70 text. Squeezed crowd bar uses a deeper tint (#B39DE6). No-friction bars #AEB8C6.
- "by [top rival] +N" (e.g. "Swamped by Mac DeMarco +2") appears only on the chip card, event page and share card, never in lists. Rival = another 5k+ event starting within 1 hour. Needs new data output (top rival name + count); today only a reason sentence is stored.
- Chip tap (T1): the tapped chip gets a pale ring, others dim, and a compact card rises at the bottom: occasion tag + title, "Venue · time", friction pill + "by" line, crowd figure (e.g. 11k) and ›. The whole card opens the event page. No read box on the card. Remove the gold "See this night" button. Drag up for "Fighting tonight" (tappable rival events).
- "Why 4.7 tonight" (P3, V2): Explore drops the "On the map" list sheet. Tapping the read box opens a card over the map: header with read box, "Why {read} tonight", "{crowd} across {N} events · {N} start at {time}", ✕. 64 pt rows on an 8 pt grid with hairlines, ordered by crowd (ties: higher friction, then earlier start); whole row opens the event. Line 1: title, time on the right. Line 2: crowd bar + crowd figure + occasion tag + friction pill. No "by" line here. No highlighted row (it opens from the read box, not a chip). The date page stays sorted by time.
- Artist pages get an official-site link (team pages: "ESPN ›").

---

# Oct 10 additions

## 0. Review fixes (Kylie's form, Oct 10). BUILD THESE FIRST

18 fixes, 1 deferred, 0 skipped, plus R21 (Kylie's step) done. Privacy and data-loss groups go first, one commit per card (or per closely tied pair). Her choice is quoted exactly.

Kylie's step R21 is done: she ran migrations 0010, 0011, 0012 and 0013 in Supabase on Oct 10. Do not ask again. New migrations from this file are numbered 0014 and up, safe to run more than once, and listed in Section 9 for her.

### Data loss & sync (first)
- **R09 (High). A stale tab can bring back an entry you deleted.** `src/data/storage/supabaseStore.ts:163-170`. Choice: "Fix: save each deletion as its own row". Needs a migration (deletions table + RLS).
- **R10. A device with the wrong clock wins sync conflicts.** `src/data/storage/index.ts:165-170`. Choice: "Fix: stamp changes with the server's time and compare those".
- **R11. A hand-added plan can turn into two entries.** `src/data/personalLog.ts:625-628`. Choice: "Fix: check for an existing entry with the same id first".
- **R12. The nightly archive did not run at 1:23 AM.** `.github/workflows/schedule-archive.yml:14`; failed run 38059809807 (Oct 10, 7:29 AM PT). Choice: "Fix: read the failed run's log, fix it, watch the next 1:23 AM run". Note: commit `28a8e67` already moved the cron to plain UTC `23 8 * * *`. Read the log first to see if the failure is something else.

### Privacy & follows
- **R01. A follower can mark their own request "auto-approved".** `0011_follow_approval.sql:19-20`. Choice: "Fix: add auto_approved = false to the insert rule".
- **R02. Followers the app approved on its own keep access while you stay on Anyone.** `0011_follow_approval.sql:39-62`. Choice: "Fix: move app-approved followers back to Requested now". One-time migration.
- **R03. Declining a request is not fully quiet.** `src/data/profiles.ts:156, :220`; `0001_accounts.sql:206-207`. Choice: "Fix all three parts (declined list, hide status, block re-request)".
- **R04. Removing a follower tells them, and they can ask again.** `src/data/profiles.ts:189`. Choice: "Fix: keep the row as 'removed' so nothing changes on their side".
- **R05. Followers and visitors get your whole entry.** `src/data/profiles.ts:127, :289, :325`. Choice: "Fix: fetch only the shown fields (narrow column list or a view)". Kylie's note, verbatim: "i have a lot of work to do later with this entry page, but i want to make sure that there IS a review field that people can fill out that their followers can see". So: the narrowed fetch must include a follower-visible review field. If no such field exists, add one (separate from the owner-only notes in `entry_notes`) and include it. Flag if unsure where it lives. Same task as build 2's "trim the fetch" in Section 4.
- **R06. Your share link has no off switch.** `src/screens/SettingsScreen.tsx:22-33`. Choice: "Fix: add a setting to turn the public link off". Same as build 2's "link-off switch". Build it once.
- **R07. Following feed: old plans crowd out upcoming ones.** `src/data/profiles.ts:290-294`. Choice: "Fix: filter to today-on in the query, before the 30 limit".
- **R08. Profile page back link says "You".** `src/screens/ProfileScreen.tsx:77-78, :111-112`. Choice: "Fix: go back to where you came from, with a matching label".

### Reads & labels
- **R13. A past date whose load failed can still say "Quiet".** `src/data/index.ts:61-62`. Choice: "Fix: show 'no data' for past dates when any source failed".
- **R14. Home's "N other big events tonight" counts small events.** `src/screens/HomeScreen.tsx:89, :137`; `src/map/crowdPoints.ts:28-30`. Choice: "Fix: count and list only events above 5,000 in that line".

### Logging
- **R16. "Remove from log?" doesn't say the stamped read goes too.** `src/components/EntryLayer.tsx:114-117`; `src/data/personalLog.ts:449-451`. Choice: "Fix: say the stamp goes too in the confirm (one line)".
- **R17. Editing a hand-added entry allows a future date.** `src/components/EntryLayer.tsx:66-67`. Choice: "Fix: block future dates when editing".
- **R18. Duplicate warning says "already in your log" for a plan.** `src/screens/AddEntryScreen.tsx:159-165, :269`. Choice: "Fix: say 'already in your plans' when it's a plan".

### Wording & docs
- **R19. BACKLOG says (d), (e), (f) still "follow".** `BACKLOG.md:6`. Choice: "Fix: update the BACKLOG line".
- **R20. Build notes say the mockups aren't in the repo.** `docs/reviews/build-notes-oct9.md:221`. Choice: "Fix: point line 221 at the assets folder" (`docs/reviews/assets/build-notes-oct9/`).

### Deferred (do not build)
- **R15. "Famous nights" heading clashes with the night rule** (`CalendarScreen.tsx:186`, `CompareScreen.tsx:112`). Choice: "Defer until the wording is picked". Log it as open in BACKLOG.

### Skipped
- None.

## 7. Color and accents (Mock Mosaic, approved by Kylie Oct 10)

### 7.1 Crowd mark: filled gold crowd icon
Mockups: `crowd-icon-filled.png`, `crowd-mark.png`.
- A filled two-person crowd icon (solid, same silhouette as the app's line icons) sits right before the crowd number. Icon #B98500 (`crowd.icon`); the number stays ink. Contrast 3.3:1 on white, 3.0:1 on the pale selected tint.
- Everywhere a crowd figure appears in text: Explore rows, T1 chip card (the large 11k), "Why tonight" (P3) rows, Home rows, You stats ("186k fans with you"), Favorites next-game lines.
- Map dots and glow: unchanged.
- **Why:** the gold glow-dot looked like a map pin in text and blurred at row size. The icon says "crowd" and stays quieter than NOTABLE and the violet pill.
- **Decided against:** keeping the glow dot; a gold pill with ink number (loudest, a third pill, competed with violet, looked like a badge); an outline icon (busier, less gold); #C08C00 (fails 3:1 on the selected tint).

### 7.2 P3 crowd bars are gold
Mockup: `p3-gold.png` (supersedes the bar colors in `p3-final.png`; layout of p3-final still holds).
- Crowd bars #E3A600 (`crowd.bar`), never violet. Violet is only for friction.
- P3 V2 stays sorted by crowd, with no tapped state.
- **Why:** violet means friction only. #E3A600 is 1.9:1 on the track, which is fine because the number is printed beside it.
- **Decided against:** violet bars (mixed up crowd and friction); #FFD100 (vanishes on the pale track).

### 7.3 Color role tokens
Define these as named tokens; components use the token, never a raw hex.

| Token | Value | Use | Never |
|---|---|---|---|
| `action` | #005A9C | buttons, links, chevrons, selected tab, "Why 4.7 ›" | crowd or friction |
| `crowd.mark` | #FFD100 | map dots/glow, badge fill with ink text | text on light, buttons, tab bar, links |
| `crowd.icon` | #B98500 | crowd icon in text rows | |
| `crowd.bar` | #E3A600 | crowd bars | |
| `crowd.onInk` | #FFD100 | crowd number and date on the dark share card | |
| `fight.container` | #E6DDF8 + ink text | Squeezed pill, "Toughest fight" badge | |
| `fight` | #6A3FBF | Swamped pill, "Up against" label and left rule, rival dots | links, buttons, the day read |
| `fight.deep` | #2C1A57 | Steamrolled pill | |
| `fight.bar` | #B39DE6 | non-text graphics only | text |

- **Why:** follows Material 3 color roles and on-colors; components point to named tokens; 60-30-10 keeps accents around 10%. Gold and violet are woven through the app so they don't appear out of the blue, but each keeps one meaning (gold = crowd, violet = friction, blue = action).

### 7.4 Accent placements
Mockup: `accents-everywhere.png` (some data is EXAMPLE).
- Home: crowd icon by "54k fans across town" and on row crowds. "Why 4.7 ›" stays action blue.
- Explore: crowd icon on "6 events · 54k" and the chip card's 11k.
- Event page: keeps the gold crowd fill bar. New "Up against" section: violet label and left rule, violet rival dots, gold crowd marks on each rival.
- My Stubs: crowd icon on the total-fans stat; gold "Biggest crowd" badge (`crowd.mark` fill, ink text); pale violet "Toughest fight" badge (`fight.container`).
- Favorites next game: the Explore pattern (violet friction pill + gold crowd icon).
- Share card: gold date and crowd on ink (`crowd.onInk`); violet pill with a thin white outline.

### 7.5 Gold buttons become action blue
- Move every gold button to `action` #005A9C so gold only means crowd. About 10 places: Favorites Done, Profile Follow, FavoritePage Follow, You Log, Home Log, share button, MapScreen, EntryLayer, ProfileEdit. Grep for the gold token/hex to catch the rest and list what you changed in the commit.
- Approved exception: the Cooked day read keeps gold text on ink.

### 7.6 Decided against (color)
- Gold tab-bar dot or decoration: makes the crowd signal into branding.
- Violet shading on the Nights calendar: the calendar already shades by read.
- Violet on "Why 4.7 ›" or any link.
- Gold text on light backgrounds (1.3–2.2:1).
- Blue friction ramp: blended with the read box and action blue, looked tappable.
- Warm orange-maroon friction ramp: read as an error; the middle step looked mustard, like crowd gold, for red-green colorblind users.

### 7.7 Earlier decisions to log with reasons (already specced above)
Log each in the docs with why and what was rejected:
- **Friction words** Unopposed · Squeezed · Swamped · Steamrolled replace Low/Moderate/Heavy/Extreme. Why: they say what the night does to you, as a ladder from least to most. Rejected: the old severity scale (sounded like weather alerts), a swords icon. Mockups `fight-ladder-final.png`, `friction-text-everywhere.png` if useful.
- **Two tags** (outline occasion tag + filled friction pill, no column headers). Why: two different questions, two different shapes; headers were clutter. Rejected: labeled OCCASION/FRICTION columns. Mockup `two-tags-everywhere.png` (drawn in blue; build violet).
- **Violet ramp** (`friction-colors.png`). Why: violet doesn't collide with action blue, crowd gold, or error red. Rejected: blue ramp and warm orange-maroon ramp (7.6).
- **T1 chip card without the read.** Why: the read belongs to the whole night, not one event; the card is about the tapped event. Rejected: read box on the card (`chip-card-read.png` shows the rejected version), the gold "See this night" button.
- **Change home moves to Settings** (behind the avatar on You). Why: frees the top-right for the shared search; home city is a set-once setting. Rejected: keeping the gear top right.

If a reason here is not what Kylie said, write the decision and mark the reason "(reason not recorded)" rather than inventing one.

## 8. Event page: ticket line, outbound links, "I watched it"

### 8.1 Ticket line (approved Oct 10)
Mockup: `links-tickets.png` (prices are EXAMPLE).
- Upcoming events only. Never on past or logged events.
- A quiet action-blue text link row (44 pt) under the event facts, above "Up against": "Prices from $48+fees ›", opening the Ticketmaster event page.
- Price = Discovery API `priceRanges` min, fetched server-side when the page opens (API key stays off the device), cached for minutes only, NEVER written to a log entry.
- No `priceRanges`: "See tickets on Ticketmaster ›". Sold out and no price: hide the row.
- No resale prices: exclude the TMR source, or show no price.
- League-feed games (Dodgers, Rams, Kings, Lakers) have no ticket feed, so no line.
- Not on the T1 chip card (it would be a fourth line and a second tap target).
- Team pages: a quiet "ESPN ›" header link from stored ESPN ids. Artist pages: "Official site ›" (needs artist homepage storage; TM attraction `externalLinks` sometimes has it). Only on team/artist pages, never on event pages.
- **Why:** Kylie wants a path to tickets and accepts a slightly stale price. TM developer terms don't ban showing a price; caching is limited to "reasonable periods" and content must be removed within 24h on request. "+fees" keeps it honest.
- **Decided against:** joining the TM affiliate program for now (commission makes the app look like a ticket business under the fee rules); a price on the chip card; resale prices.
- Commit `ticketmaster-price-research.md` (in the bundle) to `docs/research/ticketmaster-price-research.md`.

**BLOCKER (add to the decisions/blockers doc, link to the research file):** The FTC Unfair or Deceptive Fees rule and California SB 478 require all-in prices wherever live-event ticket prices are shown, and `priceRanges` may not include fees. A free, unmonetized app is arguably outside these rules, but revisit before any monetization, affiliate deal, or scaled launch: go all-in or drop the number. Unverified: the TM branding guide (design.ticketmaster.com returned 401) and whether `priceRanges` includes fees. The earlier "never a buy button" note traces to no public clause.

### 8.2 "I watched it" (approved Oct 10)
Mockup: `log-watched.png`.
- Event page hero stays the full-width action-blue "I was there". Below it, a quieter text action with a small TV line icon: "I watched it" (one label for games and concerts). No prompt, no toggle, no watch-party option.
- Logged states: "✓ You were there" (existing one-confirm undo; the watched action hides) or "✓ You watched it" (a smaller outline "I was there" stays so you can switch).
- My Stubs rows: watched gets a small TV icon + "Watched"; in person has no marker; all keep the friction stamp.
- Stats: "12 events · 7 venues · 3 watched". In person stays the headline.
- Data: new log field, in person vs watched (only a TV station field exists today). Existing entries = in person. Watched entries likely shouldn't count toward venues; flag if unclear.
- **Why:** log games you followed but didn't attend, while My Stubs stays a diary of nights out.
- **Decided against:** a "How were you there?" prompt (corny), a 3-way toggle, a watch-party option.

## 9. Log decisions, commit mocks and research
- Log every Oct 9–10 decision in the repo docs (`docs/product-decisions.md`, a design doc such as `docs/design/colors.md` for the tokens, `docs/ux-notes.md`, wherever fits) with the reason and rejected options, as written here.
- Commit every mock in the bundle's `mocks/` folder to `docs/design/` and link them from the docs.
- Commit the research file to `docs/research/` and link the blocker to it.

## 10. Kylie's manual steps
- Done: migrations 0010–0013 (R21).
- To do after this build: run each new migration (0014 and up) in order in the Supabase SQL Editor. Expected ones: deletion rows (R09), server timestamps (R10), auto_approved insert rule + one-time reset (R01, R02), declined/removed follow states and hiding (R03, R04), narrowed entry/profile reads + review field (R05, build 2 Section 4), link-off setting (R06), blocks table, per-stub private flag, old-read field, in-person/watched field if stored server-side. Claude lists the exact files in the final message.
- Server-side TM price lookup: Kylie sets the TM API key as a server secret if it isn't already one.
- Watch the next nightly archive run around 1:23 AM PT (R12).

## 11. Open or ambiguous (flag, don't guess)
- R05 review field: is there already a follower-visible review field? If not, add one; Kylie will design the entry page later.
- "Cooked" day read exception: confirm which component renders it.
- Gold-button list is ~10 places; there may be more.
- "Interested" events, 3-char search: answered (above).

---

## Appendix: Kylie's prompt (`claude-prompt-oct10.md`, verbatim)

Read `build-notes-2-oct10.md` fully before you start. It replaces build-notes-2-oct9 and covers all of build 2 plus the Oct 10 additions. Mocks are in `mocks/`; the Ticketmaster research is `ticketmaster-price-research.md`.

Build it step by step. Each step is one commit straight to main. No PRs, no branches.

1. Section 0 first: privacy and data-loss fixes (R09, R10, R11, R12, then R01–R08), then the other review fixes. R15 is deferred; don't build it.
2. Then build 2 and the rest of the Oct 10 sections in the order the file gives.
3. Log every Oct 9–10 decision in the repo docs (decisions doc, design docs, wherever fits) with the reason and rejected options. Add the fee-rule blocker to the decisions/blockers doc.
4. Commit every mock to `docs/design/` and the research file to `docs/research/`, and link them from the docs.

Users are capable: say less, no fine print. If anything is ambiguous or conflicts with the code, flag it in your summary. Don't guess.

Kylie already ran migrations 0010–0013. Number new ones from 0014 and make them safe to rerun. When you finish, list her manual steps: each new migration file in run order, any server secret (TM API key), and checking the next 1:23 AM PT nightly run.
