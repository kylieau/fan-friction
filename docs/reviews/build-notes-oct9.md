# Fan/Friction build notes (Oct 9, 2026)

_Saved verbatim from Kylie's `fan-friction-build-oct9.zip` (Claude Code, Oct 9, 2026). The mockups it refers to are in `docs/reviews/assets/build-notes-oct9/` (`centered-search-down.png`, `home-claude.png`, `home-v2.png`, `settled-read.png`; `switcher-left-vs-center.png`, `home-header-options.png` and `home-layouts.png` were not attached). Claude's conflict check against the repo is recorded in the PR that saved this file, not here._

## 1. What this is

These are build instructions for the Fan/Friction app (`kylieau/fan-friction`). They turn the Oct 8 issue triage (`issue-triage-oct8.md`, Buckets 1–5) plus Kylie's answers into work items. Kylie answered in two forms (70 answers, then 33 follow-ups), and then made more decisions in chat on Oct 9. Where her notes differ from an option's wording, her notes win. Her words are quoted where they add a requirement.

- **Commit checked:** `origin/main` at `101311fb0b89716d686aea8100c1f8dc5716824c` ("Save the schedule for 2026-10-08", Oct 9, 2026, 7:29 AM PT).
- **The triage was written against** `340133cb`. Since then the only changes to non-generated files are `data/venue-access.tsv` (commit `7bab8ac`) and `MEMORY_HANDOFF.md`. Everything under `src/` is the same apart from the generated `*Index.ts` files. All file:line references below were checked on `101311f`.
- **One triage item has gone stale:** `7bab8ac` (Oct 8) added all 23 Chicago rows to `data/venue-access.tsv`, and none of them is flagged. That covers the Chicago part of C016 and changes C100 (see Sections 3 and 9).
- **Words used here:** an *event* is one game or show. In these notes a *night* is one city on one date, and the 1–10 *read* belongs to it. On-screen copy follows a stricter rule (Section 4, "Wording"): "night" only for a city-date after 5 PM. An *entry* is one line in your log. *Friction* is one event's level. The *stamp* is the read once it locks, 24 hours after the night's last start.
- **Kylie's Oct 9 answers** (follow approval, tightening, today/future empty dates, wording, the C024 label, the Following feed) are folded into the sections below.
- **Copy rule (Kylie):** users are capable. On-screen text should say less and skip the fine print. Every piece of copy proposed here is short on purpose.

---

## 2. Fix first: data loss and privacy

Do these before anything else. Test them with two signed-in devices (or two browser profiles) on one account, and with a second account for the follow items.

### 2.1 C054: one tap on a pressed "Attended" deletes the entry
- `src/data/personalLog.ts:445-450`: `toggleWasThere` removes the entry, and its stamp, on the second tap. There's no confirm and no undo. It's called from the date page (`src/screens/DateScreen.tsx:114-117`) and from the event page.
- Fix: add the same one-step confirm that "Remove from log" already has, or an Undo. The entry proposal planned it that way: "Remove from log, one confirm. Same as un-tapping Attended" (`docs/archive/proposals/entry-proposal-oct6.md:31`).

### 2.2 C111–C114: saving to the account loses or brings back entries
- **C111** `src/data/personalLog.ts:495-511`: when a past plan is settled, `settledIds` is built from every passed plan (`:506`). So a plan whose lookup threw an error, or whose event wasn't found (`continue` at `:498`), gets deleted anyway. Fix: clear only the plans that actually became entries. Treat "event not found" the same as a failed lookup, because public listings drop past events (`docs/product-review-decisions.md:133`). A hand-added plan has no `eventId` (see C059 in Section 4), so it needs its own path to become an entry.
- **C112** `src/data/storage/supabaseStore.ts:133-170`: `save()` upserts the whole list, then deletes every row on the server that isn't in this device's list. It does this for entries (`:141-144`), notes (`:158`) and plans (`:166-169`). An older tab therefore overwrites a newer account copy. Fix: save one change at a time (add, change, delete).
- **C113** `src/data/storage/index.ts:61-63`: at sign-in the merge keeps the account's copy whenever both copies have the entry, so an offline edit reverts. Fix: keep the newer copy, comparing a per-entry edit time set on the device.
- **C114** `src/data/storage/index.ts:63` and `src/data/personalLog.ts:121-132`: an entry deleted on one device comes back from another device. Fix: keep a small "deleted" marker so a merge can't add the entry back. The code's stated goal, "nothing is lost" (`storage/index.ts:58-59`), still holds.
- Related decision 3.21 (Section 4): sign-out keeps wiping the phone copy, but it must warn or block while there are changes the account doesn't have yet.

### 2.3 C116: private rows stay in the offline cache after sign-out
- `vite.config.ts:62-66`: the `catalog` runtime cache matches every `GET` to `*.supabase.co/rest/v1/` and keeps it for 7 days. That pattern also catches `entries`, `entry_notes` (the private note and With), `plans`, `settings`, `profiles`, and followed people's entries.
- Fix: limit the pattern to the shared catalog tables. Also delete the cache at sign-out, because installed copies already hold private rows.

### 2.4 Follow-approval bypass (no triage id; found in the privacy pass)
- `supabase/migrations/0001_accounts.sql:208-210`: the follows insert policy is `with check (auth.uid() = follower_id)`. It doesn't check `status`, so any signed-in user can insert their own row with `status = 'approved'`.
- `can_view` (`0001_accounts.sql:78-103`, the approved branch at `:92-98`) then lets that person read the log of anyone set to "People I approve". The update policy (`:211-213`) is correctly followee-only. The bypass is the insert.
- `src/data/profiles.ts:141-148` writes `approved` on purpose when the target is set to Anyone (`:145`).
- **Decision (Kylie, Oct 9): every follow needs approval, including follows of Anyone profiles. No auto-approve.**
  - Remove the auto-approve path in `profiles.ts:145`. `follow()` always inserts `pending`.
  - Make the database enforce it: the insert policy only accepts `status = 'pending'` (`with check (auth.uid() = follower_id and status = 'pending')`). Only the followee can move a row to `approved` (the existing update policy, `:211-213`).
  - Add a new migration; don't edit `0001` in place.
  - Check it: inserting an `approved` row from the client must fail, and following an Anyone profile must show "Requested".
- Anyone still means the *log* is readable without following (Section 7). Following, which is what shows plans and puts you in the Following feed, always takes approval.
- When someone tightens from Anyone to People I approve, earlier auto-approved followers go back to pending (Section 7, Access controls).

---

## 3. Bucket 1: just fix (Kylie: Go on all 30)

The six data-loss and privacy items (C054, C111–C114, C116) are in Section 2. The other 24 are below, with the triage's fix in short.

- **C035** `src/data/personalLog.ts:589` (and `:277`): a hand-added event's nearby read is looked up only among hand-seeded events. Look it up in the full event list for that city and date (`docs/product-review-decisions.md:97`).
- **C061** `src/styles.css:105`: the Add form's Save button needs a disabled style.
- **C039** `src/screens/DateScreen.tsx:95` (`date > today`) vs `src/screens/EventScreen.tsx:109` (`e.date >= today`): use one rule on both pages, the event page's. Today counts as a plan (Attending), and a plan becomes Attended once the date passes (`docs/big-picture-plan-oct6.md:8`). This also matters for privacy (Section 7, Location visibility).
- **C041** `src/screens/DateScreen.tsx:143`: show "Forecast" until the lock (`isStampLocked`, `src/data/read.ts:182`), and "Stamped" only after it. See 3.15.
- **C031** `src/screens/EventScreen.tsx:304`, `src/data/expectedDraw.ts:77`: the ⓘ card's opening sentence should name the real basis (this team, team and league, or league), not "at [this building]".
- **C026** `src/data/formula/index.ts:43`: when two parts tie for the top score, remove only one copy of it (6, 6, 1 should give 6.75).
- **C001** `src/data/sources/ticketmasterSource.ts:64` (filter skipped for shows at `:204`): add "Premium", "Pass", "Club" and "Not an Event Ticket" to the add-on filter, and apply the filter to shows.
- **C005** `src/data/sources/espnSource.ts:294`: place a neutral-site game by its actual venue and flag it, so the home team's usual crowd isn't used.
- **C010** `src/data/expectedDrawIndex.ts:22287` (`SEASON_LEVELS = []`): extend attendance collection to 2026 and fill in the season levels.
- **C012** `src/data/expectedDrawBuild.ts:434`: normalize opponent keys to one form.
- **C013** `src/data/sources/espnSource.ts:270`: give each team its own badge and trim names.
- **C014** `src/data/sources/ticketmasterSource.ts:208`: dedupe on venue + date + title. The local time is in the key today.
- **C027** `src/data/expectedDraw.ts:95-99`: add sports-setup tags to SoFi, Dodger Stadium, the Coliseum, Angel Stadium, Nassau Coliseum and Arthur Ashe so their concerts read about 57% (`docs/expected-draw-decisions-oct7.md:113`).
- **C016** `src/data/venues.ts:2493`, `data/venue-access.tsv`: add concert setups and Ticketmaster venue IDs. The Chicago access re-run is already done (commit `7bab8ac`: 23 Chicago rows, none flagged), so check it rather than redo it.
- **C080** `src/components/ShareCard.tsx:54`: Compare's share button says "Share this event". Change it to **"Share these events"**. Use "Share these nights" only if both compared items are city-dates after 5 PM (the wording rule in Section 4).
- **C029** `src/components/ShareCard.tsx:23`: don't add a period after a reason that already ends with one.
- **C089** `src/data/personalLog.ts:192`: one entry says "Concerts" in one place and "Type: Show" in another. Use one label. The triage doesn't say which one wins (Section 10).
- **C036, C048** `src/styles.css:2029`, `src/screens/MapScreen.tsx:294`: size the map key to the screen, and close it on a city switch or an event pick. Always show the ? (today it's hidden when `points.length === 0`), and add a line for an empty map.
- **C045** `src/screens/DateScreen.tsx:61`: a link without `?metro=` falls back to LA. Work out the city from the event, plan or log entry first. The event page already tries the plan and log city (`src/screens/EventScreen.tsx:57`); the date page doesn't.
- **C046** `src/screens/EventScreen.tsx:89`, `src/screens/DateScreen.tsx:141`: add a loading state, and a "Try again" when a load fails. A failed load must not show the date as Quiet (Section 5).
- **C062** `src/styles.css:2864`: raise "Email me a link" to at least 4.5:1 contrast.
- **C064** `src/screens/DateScreen.tsx:256`: show the playoff round line ("NLDS G2") on date-page rows, as the map sheet does.
- **C065** `src/screens/DateScreen.tsx:357`, `src/screens/HomeScreen.tsx:358`: upcoming rows should show the estimate the map rows already show. Number format follows C073.
- **C079** `src/screens/MapScreen.tsx:92`: hide the Crowds/Traffic switch until Traffic exists (`docs/ux-notes.md:52`; Traffic is parked, `docs/product-review-decisions.md:209`).

Map changes (C036/C048, C079, C047, 3.4, 3.18, 3.19, 3.20): the repo asks that Map changes be proposed first (`docs/product-review-decisions.md:205`). Kylie has now picked these options. Show her screenshots of the result.

---

## 4. Decisions (Buckets 2 and 3)

The format is: id, the decision, then any requirements from her notes.

### Bucket 2 (21 items)

- **C053** Hand-added event page (`src/screens/ManualEntryScreen.tsx:1`): (a) everything a listed event's page shows, where the data exists: the date-page link, the night's read, weather, and Compare with…. Her note: "only long term solutions… make hand-added events just like any other event that's already in the system."
- **C058** Add-an-event search (`src/screens/AddEntryScreen.tsx:58`): (a) search every covered city at once, home city first. There is no city picker for search. Her note: "why can't it automatically search all existing cities/nights/events at the same time?"
- **C059** Hand-entry guardrails (`src/screens/AddEntryScreen.tsx:338`): allow future dates and save them as plans. Warn about a duplicate on the same date with the same or a similar title. Her note: "it should flag even if the title is a little different, rather than an exact copy." It warns, it doesn't block. A future hand-added plan needs to turn into an entry once the date passes (see C111).
- **C060** Add-form field order (`src/screens/AddEntryScreen.tsx:189-306`): (a) essentials first: What, When, City, Where, then the details. Her note: make the essentials required ("and any other you deem"). Classification fields (Type, Sport, Level, Division, Competition) are optional and "may be event- or user-dependent". Add one short line encouraging details, because they help match the event later. Suggested line: "More details help match this to listings later."
- **C024** "If necessary" playoff games (`src/data/sources/roundLabel.ts:166`, which strips the phrase today): (a) tag the game and leave it out of the read until it's confirmed. Once confirmed, count it and remove the tag. Label it **"If necessary"**. Her note: "we should use the language 'if necessary' since that's what most leagues use." Keep it a compact label beside the round or matchup, with no extra explanation. Confirmed Oct 9: the label is "If necessary", not "If needed".
- **C022** City read vs one event's friction (`src/screens/EventScreen.tsx:168`): her own answer. In event lists (the date page and the map's sheet list), use two separate labeled columns so it's obvious there are two scales. A calm event shows its factual reason (for example "biggest crowd tonight") instead of a "Low" pill. Put an ⓘ or legend under the event list. This is the same as 3.5.
- **C030** "No count yet" vs "No read yet": her own answer, which sets the empty-date box. Full spec in Section 5. Same as 3.9.
- **C028** Reason lines like "28 mi away, same hours" (`src/data/formulaRead.ts:21`): **don't change the reason logic.** Her note: "i don't want this project to be the source for the reason WHY… lay out all the information and the users can make inferences." So show the hard facts about the competing events, or a summary of them, rather than an explanation.
- **C070** "Seats in a fight" (`src/data/formula/index.ts:69`; type doc `src/data/types.ts:301`): remove it from the date page. Replace it with a line like "LA activity across 6 events" ({city} activity across {n} events). Keep the venue-capacity math only on Compare, labeled as a separate measure of competing-event pressure.
- **C004, C018** No data for past dates (`src/data/sources/catalogSource.ts:46`): (c) both: label the gap (Section 5) and backfill, but backfill isn't a priority. Her note: "if there are data capacity limits, i'd rather only highlight specific dates in the past rather than work to fill dates that people are unlikely to go back and look at." Which dates count is open (Section 10).
- **C011** Games with no start time (`src/data/sources/espnSource.ts:302`): (b) re-pull times nightly and show "time TBA" until a time exists.
- **C015** All-day events (`src/data/formula/crowdFight.ts:24`): (a) use the listing's length, or a length by type.
- **C017** Teams with no coverage (`src/data/teams.ts:1`): (b) add only the teams that have free feeds.
- **C069** Jargon (`src/data/formula/index.ts:58`, `src/screens/DateScreen.tsx:189`, `src/screens/EventScreen.tsx:168`): (c) hide internal terms. "Formula v4" goes from the date page (`DateScreen.tsx:189`) and the event page (`EventScreen.tsx:168`). Key the rest (Crowd fight, Gridlock, Conditions, the badges) behind the ?.
- **C073** Crowd number formats (`src/config/scoreLabels.ts:20`): (c) choose per surface. Her note: compact ("20k") on small, glanceable surfaces like map chips; full numbers where there's room and precision helps. Write the rule down once so new screens follow it.
- **C086** "vs" vs "vs." (`src/lib/eventTitle.ts:38`): (a) "vs." everywhere.
- **C047** Chips that collide (`src/map/chipPlacement.ts:221`): (a) the biggest crowd keeps the chip, with a "+2" badge that fans out on tap (GR mockup 06). Map change: show screenshots.
- **C071** Estimate ⓘ card (`src/screens/EventScreen.tsx:333`): (a) short headed sections. Her note: the event page's "People (Estimated)" (`EventScreen.tsx:191`) becomes "People (Est.)".
- **C076, C077** Favorites picker (`src/screens/FavoritesScreen.tsx:207`): (a) sections (Teams / Venues / Artists) with a sticky Done.
- **C078** Famous nights order (`src/screens/CalendarScreen.tsx:176`): (a) label the order ("Newest first"). Her note: "I wonder if we should move this entire section, it's kind of out of place here." Whether to move it, and where, is open (Section 10).
- **C085** Gold outside its job (`src/styles.css:793`): (c) leave it.

### Bucket 3 (25 items)

- **3.1** Playoff games with no history (`src/data/expectedDraw.ts:72-74`): (2) keep the building's capacity, labeled "up to N" as a ceiling. College postseason wasn't answered (Section 10).
- **3.2** Estimates above seats (`src/screens/EventScreen.tsx:308`, `:337-339`): (2) drop "Never above the building". Use the standing-room sentence only where a standing figure is stored (`src/data/types.ts:31`); otherwise say "Announced crowds here have topped the listed seats."
- **3.3** Unsized big-room shows (`src/data/read.ts:100-103`, `src/data/expectedDraw.ts:80-87`): (2) show the room's capacity labeled "up to N", so the page matches what the read counts.
- **3.4** Events under 5,000 on the map (`src/map/crowdPoints.ts:26`): (2) keep them on the map but muted, with no friction label. Today the map checks only the hand-set `belowFloor` flag, which Ticketmaster rows never get. Use the size tier in `src/data/read.ts:112-123` instead.
- **3.5** Low friction hidden; occasion in the pill row (`src/lib/chips.ts:12-24`): confirmed, same as C022. Two labeled columns in event lists (date page and map sheet list); a calm event shows its factual reason instead of "Low"; an ⓘ or legend under the list.
- **3.6** Read above its parts (`src/data/formula/index.ts:39-45`, Compare): (1) keep the rule and add one line: "The read is the strongest reason, plus a bump for each other strong one."
- **3.7** Weather as a third reason (`src/screens/CompareScreen.tsx:219`): (1) keep it. Update `docs/direction.md` (`:17`) and the ? key to say three reasons.
- **3.8** Rating words and decimals (`src/config/scoreLabels.ts:1-22`): (1) keep both (Chill/Mild/Spicy/Brutal/Cooked, one decimal). Fix `docs/ux-notes.md` (`:30`, `:41`).
- **3.9** Quiet vs missing data (`src/components/ReadTile.tsx:12-16`, `src/data/index.ts:54`): confirmed, same as C030. Section 5.
- **3.10** Log button words (`src/screens/EventScreen.tsx:148`, `src/screens/DateScreen.tsx:213`, `:265`): (1) keep Attend / Attending / Attended on both the event page and the date page, and update the docs. The C054 confirm still applies.
- **3.11** Plans on You (`src/screens/YouScreen.tsx:188`): (2) a small "Coming up" strip at the top of You.
- **3.12** "Events" vs "nights" (`src/screens/YouScreen.tsx:189-191`, `src/screens/CompareScreen.tsx:92-93`): (2) "Events" for the things, everywhere, including Compare's "Your nights" (→ "Your events"). The action uses "log" ("Log an event"). Oct 9: You's tab is named **"My Stubs"** (replaces "Events"). Update the brief. Full wording rule:
  - **Wording rule (Kylie, Oct 9):**
    - Keep "night" only where it means one city on one date after 5 PM.
    - Everywhere else use "day", "date" or "events".
    - This is wording only. The read still covers the whole date.
    - Examples: You's tab "Events" → "My Stubs"; the "Log an event" button stays; Compare's "Your nights" → "Your events"; C080 → "Share these events".
  - **Reconcile with the existing 5 PM rule.** Kylie thought she may have set a 5 PM rule before. There's none in the docs, but it's in the code:
    - `dayWord` (`src/screens/DateScreen.tsx:42-50`): a date is "day" when every event starts before 5 PM, otherwise "night". Used in "That {word} in {city}" (`:240`) and "Share this {word}" (`:294`).
    - `dayWordFor` (`src/screens/MapScreen.tsx:485-488`): an event is "day" if it starts before 5 PM. Used in "See this {word}" (`:348`).
    - Both are marked "Kylie, Oct 5" and came in with commit `bfffdd1`.
    - They agree with the new rule, with two differences. A date or event with no known start time defaults to "night" today, and the `dayWord` comment says "The unit is still called a night everywhere else", which the new rule replaces.
    - Make one shared helper, apply it to all copy, and ask Kylie only if the no-start-time case still seems to need "night".
  - Apply the rule to every remaining "night(s)" in app copy: Famous nights, YourYear lines, empty states and share text.
- **3.13** Empty You (`src/screens/YouScreen.tsx:107-111`): (1) the sentence plus two buttons. Oct 9: the add button says **"Log an event"**, and the second says "Find one on the map". The + in the header (`YouScreen.tsx:144`, aria-label "Add an event") and the Add screen title (`src/screens/AddEntryScreen.tsx:69`) should match: "Log an event". Keep the empty sentence short, e.g. "No events yet." The tab this sits under is "My Stubs" (3.12).
- **3.14** Editing hand-typed entries (`src/components/EntryLayer.tsx:5-8`): (1) on a hand-added entry, Edit also opens date, title, venue and city. Catalog entries stay locked. After an edit, the nearby read follows the new date and city (C035).
- **3.15** Saved stamp vs recompute (`src/data/index.ts:44-54`). Decision (form plus Oct 9):
  - A past night settles 24 hours after its last start. Its read is redone **only** when the formula changes, and then against the saved schedule, never today's listings. Her note: "why are we redoing reads for anything other than formula updates?"
  - Keep the **"Stamped"** label; Kylie wants people to know the read was frozen in time. Before the lock it says "Forecast" (C041).
  - Drop "Formula v4" from the box (`src/screens/DateScreen.tsx:189`).
  - When a read has been redone, show one muted line: **"Rescored <date>"**. *This is a reviewer suggestion, not locked* (Section 10).
  - Nights from before the archive began look like any normal settled night, with no mark (matches 3.16).
  - Code notes: today every date view re-runs the formula on current listings (`index.ts:49-54`). A stamp is written only into a log entry, at tap time (`src/data/personalLog.ts:434-456`), and `forecastBeforeStart` handles LA only (`src/data/read.ts:287-288`). The date page needs a night-level saved read, built from the saved schedule.
- **3.16** Reconstructed nights (`src/screens/DateScreen.tsx:143`, `src/data/read.ts:212-234`): (2) don't show "reconstructed". Change the tester brief (`docs/tester-brief.md:30`).
- **3.17** First-run tips (`src/components/FirstRunTips.tsx`): (1) remove the tips; the ? and the empty states carry it. Also remove "Show the tips again" (`src/screens/SettingsScreen.tsx:105-106`) and the `tipsDone` wiring (`src/App.tsx:34-43`, `:68`).
- **3.18** Map chip contents (`src/lib/chips.ts:18`): confirmed. Put a one-color Material Symbols Rounded type icon in #005A9C at the start of chip line 2, before the time. Round the crowd ("20k") so line 2 fits. The name line keeps its full width. Whether the list row should also use the headliner name wasn't answered; leave names as they are (Section 10).
- **3.19** Map key position and selected ring: (1) keep both (the ? on the right, the pale `#ffe56b` ring).
- **3.20** "Set as home" (`src/components/AreaSwitcher.tsx:85-89`): confirmed. Remove it from the city rows. The house icon stays on the home city. **Superseded Oct 9 (Kylie lean):** no "Change home…" item in the switcher; changing home moves to Settings (gear on the You tab) and reopens the "Where's home?" picker there.
- **3.21** Sign-out wipes the phone copy (`src/data/personalLog.ts:139-145`, `src/data/storage/index.ts:48-51`): (1) keep the wipe, but warn or block while changes haven't reached the account.
- **3.22** "Your usual" (`src/components/YourYear.tsx:67`, `:97-100`): (1) show "Your usual" only after about 3 entries. Before that, show the first entry's read, worded per the 3.12 rule (e.g. "Your first event was Spicy"; "night" only if it was a city-date after 5 PM). "Your usual night is …" (`YourYear.tsx:67`) follows the same rule. Also fix the repeated heaviest reading and the unexplained "· 1" on Hours.
- **3.23** Sign-in block after logging (`src/components/AccountBlock.tsx:12-16`): (1) after the first entry, shrink it to one line. With the Oct 9 log wording: "Sign in to keep your log safe."
- **3.24** "Friends" (`src/screens/YouScreen.tsx:193`; also Home's "Friends" heading, `src/screens/HomeScreen.tsx:306`): (2) rename the tab "Following". Use **"Followers"** wherever you see who follows you. Her note: "'Following' for who you see and 'Followers' for who sees you." Oct 9:
  - Followers **do** see your plans ("could plan meeting up").
  - The privacy decision moves to the moment of approval. The approve screen and the Follow button must say plainly that an approved follower sees your logged events **and** plans.
  - Every follow needs approval, Anyone profiles included (Section 2.4).
  - **Following is an activity feed (Kylie, Oct 9),** not just a list of followed people's logged events. Lines read like "{name} is planning to attend {event}" (from plans) and "{name} attended {event}" (from entries). Today the tab only lists entries (`FriendsTab`, `src/screens/YouScreen.tsx:231-250`; data from `friendsEntries`, `src/data/profiles.ts:195-205`), and Home's section (`src/screens/HomeScreen.tsx:302-327`) does the same.
  - The feed must not suggest someone is at a venue right now:
    - No present-tense "is at" lines.
    - No post times or "just now" stamps that would reveal live location.
    - A plan line is future tense and shows the event's date, not when it was saved.
    - An "attended" line appears only after the event's date has passed. With C039 (today = plan) and auto-Attended, nothing becomes an entry on the day itself.
  - Plans need a database change: a follower-readable policy on `plans`, gated on an approved follow (Section 7, Access controls).
- **3.25** Header and date formats: (1) keep as is.

---

## 5. The empty-date box, and Home's dash bug

**Kylie's words (C030 / 3.9, verbatim):**

> An empty date should look the same on every screen: the map header, the day strip, and the date page. Same box, same words. Today the same date says "Quiet" on the map and "No read yet" on the date page, and that has to go.
>
> The box should also be honest about why it's empty. "Quiet" should only mean we actually checked that city on that date and nothing big was on. Then the box shows "— Quiet", and the date page adds "Nothing big in {city}." If we never checked, as with the past weeks before the nightly saves started, the box shows "— No data". The date page adds "Events have not been collected for this date." That tile is paler than Quiet, so a run of them doesn't read as a calm week. If we only partly checked (games but not concerts, like LA on Oct 4–5), it's treated as No data too, with "Events have not all been collected for this date." That way it never claims a date was quiet when concerts went unchecked. Both kinds of empty date stay tappable, and opening a never-checked date shows that line plus whatever is in your own log for it.
>
> This shouldn't grow into a big build. The app already saves what it checked each night; the screens just don't read it. So the work is to wire that record into the box and apply these labels. Home's empty dashes are a separate bug to fix on their own.

### 5.1 One empty-date box everywhere (C030, 3.9)

Use Kylie's text from her C030 answer.

- **One box, the same words, on every screen:** the map header (`src/components/DateScore.tsx`, used at `src/screens/MapScreen.tsx:243-245`), the day strip (`src/components/DayStrip.tsx`, which uses `ReadTile`), and the date page (`src/screens/DateScreen.tsx:177-207`). Today the same date says "Quiet" on the map (`ReadTile.tsx:12-14`) and "No read yet / Nothing big on file in {city}." on the date page. That mismatch goes.
- **Checked, nothing big on:** the box shows "— Quiet". The date page adds "Nothing big in {city}."
- **Never checked:** the box shows "— No data". The date page adds "Events have not been collected for this date." This tile is paler than Quiet, so a run of them doesn't read as a calm week.
- **Partly checked** (for example games but no concerts): treat it as No data, and the date page says "Events have not all been collected for this date." It must never claim a date was quiet when concerts weren't checked.
- **Both kinds stay tappable.** A never-checked date shows its line plus whatever is in your own log for that date.
- Keep the build small. Her words: "The app already saves what it checked each night; the screens just don't read it."
- A date with events but no read keeps its own state ("Unrated"/dash).
- **Today and future dates (Kylie, Oct 9):**
  - The live load succeeded and found nothing big: "— Quiet" (the date page adds "Nothing big in {city}.").
  - The live load failed: "— No data", plus C046's Try again.
  - Never show Quiet for a failed load.

**Implementation pointers (checked in the repo):**
- Archive files exist at `data/schedule-archive/<city>/<date>.json`. The first files are LA Oct 4; New York, San Diego and Seattle Oct 6; Atlanta, Bay Area, Chicago, Dallas–Fort Worth and Montreal Oct 7.
- Each file has `window {from, through}` (14 days ahead, `horizonDays: 14`) and a `sources` list with `inWindow` counts.
- LA Oct 4 and Oct 5 have no `ticketmaster` source (Oct 4 has mlb, espn and seed; Oct 5 has mlb and espn). LA Oct 6 is the first LA file with Ticketmaster. So LA Oct 4–5 are partial.
- `scripts/schedule-index.mjs` already writes each file's window into `src/data/scheduleArchiveIndex.ts` (`SCHEDULE_SNAPSHOTS`). Extend it to carry each snapshot's source ids too.
- `src/data/read.ts:215-225` already has `scheduleCoverage(metroId, date)` (saved / reconstructed / not-yet). Add `checkedFor(metro, date) -> 'checked' | 'partial' | 'never'` next to it.
- A date is checked when a snapshot window covering it includes every source the city uses now. It's partial when the only covering snapshots lack one. It's never when nothing covers it.
- Today, status is `'quiet'` whenever no events load (`src/data/index.ts:54`), even if a source failed.
- For past dates, use Quiet only when `checkedFor` says checked.
- For today and future dates, the live load decides: Quiet only if every source answered. Track per-source failure in `getCityDate` (`src/data/index.ts:49-55`, where `EVENT_SOURCES` are loaded) instead of folding failures into an empty list.
- How a live load where some sources answered and others failed should read isn't stated. By the past-date rule (partial = No data), treat it as No data.

### 5.2 Home's read boxes always show a dash (separate bug)
- `src/screens/HomeScreen.tsx:232` (Coming up), `:263` (This week) and `:316` (Friends) call `ratings.get(row.date)` by date alone. The map is keyed `metro|date` (`nightKey`, `src/data/read.ts:395-397`; built in `scoresForNights`, `src/data/index.ts:123-137`). So those rows always show a dash.
- A second cause: `ratings` is filled only for the nights of `recent` entries (`HomeScreen.tsx:113-121`). The other sections' nights are never requested.
- Fix: request scores for every night Home shows, and look them up with `nightKey(metroId, date)`. "Recent" already does this correctly through `ratingForEntry` (`:289`).
- After the fix, Home's empty boxes use the Section 5.1 box.
- The Home hub (Section 6) will reuse these rows (Coming up, This week, Following, Recent), so fix the lookup in one shared place. Every row that shows a read should go through `nightKey(metroId, date)`, not a per-section `ratings.get(date)`.

---

## 6. Explore header and Home

**Status: Kylie's lean (Oct 9). She may still adjust it.** Before building it out, Claude should propose it as a mock or a PR for her review.

Reference mockups are in `mockups/`, on the box. They aren't in the repo, so copy them over or attach them:
- `centered-search-down.png` (option K3)
- `switcher-left-vs-center.png`
- `home-header-options.png`
- `home-layouts.png`

### 6.1 Explore (map) header
Today (`src/screens/MapScreen.tsx:225-249`) the top row holds the city switcher and a search button. Under it sit the date (a button with a chevron), the event count, the read, and then the day strip.

- **City switcher:** centered, alone on the top row (house icon + city name + chevron). Mock Mosaic's caution: the name's length shifts it, and the house icon only shows for the home city, so the row changes width between cities. Keep it visually centered either way.
- **The big date becomes a plain label.** No chevron, no tap.
  - Today the search button (`MapScreen.tsx:229`, aria-label "Find a date", `onClick={() => setMonthOpen(true)}`) and the date button (`:235`, aria-label "Pick a date", toggles `setMonthOpen`) open the same month picker. Removing the date's tap loses nothing.
  - The "Pick a date" shortcut below keeps the picker one tap away.
- **Search sits pinned at the right end of the week day strip** (`src/components/DayStrip.tsx`). It may overlap the last day; the strip scrolls, so that's acceptable.
- **The Today pill keeps its directional behavior.** It appears on the side where today sits relative to the scroll. On the right, it sits just inside search as a smaller pill, so search stays last.
- **Search becomes a real search. This is a new feature;** today it only opens the month picker.
  - Placeholder: "Team, artist, venue, or date".
  - Shortcuts under the field: Tonight, This weekend, Pick a date. "Tonight" follows the wording rule in 3.12: say "Today" when nothing that date starts after 5 PM.
  - Typed dates like "Oct 17" or "Saturday" work.
  - Scope across cities follows C058: search every covered city, home first.
- **Live facts Mock surfaced (checked):**
  - The switcher is only on the map. It's also on the old calendar view (`src/screens/CalendarScreen.tsx:37`), but that view is unlinked (`src/screens/ExploreScreen.tsx:12-16`). Home and the date page have none.
  - The date page shows the city only in its header line, next to the weather (`src/screens/DateScreen.tsx:154-160`).
  - The map's event count sits under the date (`MapScreen.tsx:240`, `map-header-count`). Mock reports that an earlier lock put it under the rating. **Claude: find that lock in the docs and reconcile it** before placing the count. Don't move it on Mock's word alone.
  - "Past" (`pastLabel`, `MapScreen.tsx:238`) shows on the map header but not on the live date page. 3.25 keeps formats as they are, so don't add it unless Kylie asks.

### 6.2 Rating display (Kylie, Oct 9, applies everywhere)
- Never show a whole number out of ten ("5/10", "Light · 4/10"). Always show the read to one decimal (4.7, 9.6) in the small score box, on every screen. This replaces the earlier word-first "Light · 4/10" format and matches 3.8 (keep words and one decimal).

### 6.3 Crowd number format (Kylie, Oct 9, applies everywhere a crowd is shortened)
- 10,000 and up: whole thousands with "k", no decimal (60,000 = 60k; 65,000 = 65k; 16,000 = 16k). Never "16.0k".
- Under 10,000: one decimal with "k" (9,500 = 9.5k; 5,200 = 5.2k).
- Under 1,000: ".6k" style, one decimal with no leading zero (600 = .6k; 850 = .9k) (Kylie, Oct 9). Rule: the short format is always in thousands with "k"; never a plain number. Today nothing under 5,000 reaches the short format (map hides below-floor events, `src/map/crowdPoints.ts:26`), but 3.4 puts small events on the map muted, so this case becomes real. The current formatter is `crowdThousands` (`src/map/crowdPoints.ts:71`), which always prints one decimal.
- Round to the nearest; if rounding reaches 10.0k, show 10k. Where there's room (C073), full numbers still apply.

### 6.4 Home
- **Home is about the home city. No switcher on Home.** Kylie's pick (Oct 9 lean): the "Tonight in {home city}" row (header option 3) replaces the big city title, so the city is named once. House icon optional, no chevron; the city word follows her home city.
  - Today the city repeats three times: the title (`src/screens/HomeScreen.tsx:150`), the quiet line (`:157`) and the mini-map caption (`:223`). Home also has its own search button that opens the month picker (`:151`); decide its fate along with Explore's search.
  - Changing home lives in Settings (gear on the You tab), not on Home or Explore's switcher (3.20, updated Oct 9).
- **Hub layout, Kylie Oct 9 lean: Claude's version** (`mockups/home-claude.png`). Home answers "what matters to me right now", ordered by time of day (Friday evening: Tonight leads). Compare stays off Home until it ships. No repeated content (an event appears once). Favorites row stays, with the last chip cut in half so sideways scroll is obvious. One see-more label, "See all ›", with 44 pt tap targets. Text at least ~11 pt. Gray secondary text #4B5A70 (passes contrast on white and chrome). "Saved" is a status label, not a pill. Hero says "5 other big events tonight" instead of "pulls on five other crowds". Chrome #DAEBFE kept. Overrides: drop the mock's "You were at … last night. How was it?" prompt; ratings always one decimal in the box; new-user Home is V3 (below). Hero label: "Tonight's read" (Kylie, Oct 9), not "Night friction".
- **New user (nothing saved or logged), Kylie Oct 9:** Mock's V3 (`mockups/home-v2.png`, third phone). Tonight leads, then one line, "Been to a game or show? Log your first night.", with a Log button. Wording conflict to settle: her Oct 9 decisions say the button is "Log an event" and "night" means one city on one date after 5 PM, so this line may need to read "Log your first event." Ask Kylie. Ignore that mock's "Mid · 5/10" rating.
- **No confirmation prompts, Kylie Oct 9:** never ask "Were you at X last night?" on Home or anywhere. Logging is always started by the user, before or after the event.
- **The next-saved card stays on Home, even when that event is in another city.**
- **Home is a hub:** shortcuts to most other tabs and features, like Kylie's Mirrorball Madness app. The layout is still open (Section 10). Mock's three options (`home-layouts.png`):
  1. Stacked modules.
  2. Shortcut grid first.
  3. My Stubs first (Mock and Push Pilot lean 3).
- **Following on Home follows Kylie's decision,** not Mock's: it's the activity feed, plans included (3.24), under the same privacy rules (Section 7, Location visibility). Mock suggested limiting it to logged nights; that is not the plan.
- The hub reuses Home's existing rows, so the dash-bug fix (5.2) lands first.

---

## 7. Privacy gaps

C116 and the approval bypass (Section 2) come first. Everything here was checked against the code.

### Requirements (Kylie's baseline)
1. Private by default. Today `profiles.visibility` defaults to `only_me` (`0001_accounts.sql:26`). Keep that.
2. Before someone sends a follow request, it's clear what approval gives. A request can be declined without pressure.
3. Selective sharing, and access is easy to take back.
4. Per-detail visibility, with extra care for With. With and the private note already live in owner-only `entry_notes` (`0005_entry_private.sql`; `src/data/storage/supabaseStore.ts:51-55`).
5. No public discovery and no public follow lists, unless the person opts in.
6. Share links the owner can turn off.
7. Unfollow, remove follower and block, with no notifications that leak.
8. The feed must not imply someone is at a venue right now.
9. Protections for people hiding from someone they know.
10. A brief audience cue wherever someone shares.

### Access controls
- **Whole-log-only visibility; no per-event sharing.** There's one switch on the profile (`0001_accounts.sql:26`; choices at `src/screens/ProfileEditScreen.tsx:14-26`), and entries have no visibility column (`0001_accounts.sql:106-119`).
- **Approval isn't enforced.** See 2.4 (`0001_accounts.sql:208-210`, `src/data/profiles.ts:145`).
- **Auto-approved followers keep access after tightening.** A follow made while you were on Anyone is stored as `approved` (`profiles.ts:145`). If you switch to People I approve, `can_view` (`0001_accounts.sql:92-98`) still lets them in, and you never approved them.
  - **Decision (Kylie, Oct 9):** when someone tightens from Anyone to People I approve, earlier auto-approved followers go back to pending.
  - The auto-approve path itself goes (Section 2.4), so no new auto-approved rows will appear.
  - Existing rows don't record how they were approved. In the migration, add a marker (for example `auto_approved boolean`). Backfill it as true for approved rows whose followee is on Anyone now. That's a best guess: a person who approved someone by hand and later switched to Anyone can't be told apart.
  - On a change from Anyone to People I approve (a trigger on `profiles.visibility`), set those rows to `pending`. They then show up in the owner's request list.
- **No remove-follower screen, and no block.** The only follower UI is the pending list (`src/screens/YouScreen.tsx:165-185`). Nothing lists approved followers. The database already allows the followee to delete a row (`0001_accounts.sql:214-216`); there's just no screen. Build a Followers list (3.24) with Remove, plus Block.
- **Plans become visible to followers (3.24).** Today plans are owner-only in the database (`0001_accounts.sql:197-199`, comment at `:8` "Always private"; `supabaseStore.ts:7`). Changing this takes a new select policy on `plans` gated on an approved follow (`follows.status = 'approved'` for `follower_id = auth.uid()`); don't edit `0001` in place. Suggested: also respect the owner's switch the way `can_view` does, so Only me hides plans too. Plans feed the Following activity feed (3.24). The Follow button, the approve screen and the visibility choices (`ProfileEditScreen.tsx:17-24`) must all say an approved follower sees your logged events and plans.

### Exposed profile and event data
- **Followers (and Anyone) can read the whole entry record, not just what's shown.**
  - `entriesOf` (`src/data/profiles.ts:114-124`, select at `:117-123`) and `friendsEntries` (`:195-205`) select `data`, the whole entry (`supabaseStore.ts:51-66`): review, setlist link, tags, sides, result, starter, promo, notable, TV, stamp.
  - The profile page shows only title, date, venue, city and rating (`src/screens/ProfileScreen.tsx:175-200`).
  - Decide what a follower may read, then select only those fields, or expose them through a view.
- **Profile cards are readable by anyone, signed out included.**
  - `0003_handles.sql:66-68` (`for select using (true)`) and the `anon` grant (`0001_accounts.sql:220`) expose display name, handle, avatar URL, visibility and home city (`home_metro_id`) to anyone.
  - So every handle can be listed through the REST API. Suggested: allow lookup by exact handle only (for example a security-definer function returning one card), and stop exposing home city.
- **"Anyone" says "Anyone with your link"** (`ProfileEditScreen.tsx:24`), but no link is needed. `can_view` returns true for `anyone` with no sign-in check (`0001_accounts.sql:90`), and `anon` can select entries (`0001_accounts.sql:220`, carried over by the rename in `0004_entries.sql`). The words and the behavior must match.
- **The share-profile link is permanent, with no off switch.** Settings shares `/p/<handle>` (`src/screens/SettingsScreen.tsx:17-29`, `:72-74`). The only way to kill it is to change the handle, and a handle-less link has no off switch either. Requirement 6 needs an owner off switch.
- **Not a gap:** follow lists aren't public. RLS on `follows` lets only the two people involved see a row (`0001_accounts.sql:205-207`, RLS on at `:169`), even though `anon` has a grant (`0003_handles.sql:72`). Keep it that way.

### Location visibility
- **"Attended" on today can reveal where you are now.** On the date page, today isn't "ahead" (`src/screens/DateScreen.tsx:95`), so tapping logs an entry at once (`:114-117`). Followers then see it with today's date and venue, on Home (`src/screens/HomeScreen.tsx:302-327`) and on the date page's followed-people list (`DateScreen.tsx:86-87`). The C039 fix (today = plan) moves this case to plans.
- **Plans and the Following feed (3.24) must not imply someone is at a venue now.** Requirements, from 3.24:
  - No "is at" lines.
  - No post times or live timestamps.
  - Plan lines are future tense and dated by the event.
  - "Attended" lines appear only after the date has passed.
  - Check the date page's followed-people list (`DateScreen.tsx:86-87`) and Home (`HomeScreen.tsx:302-327`) against the same rules.

### Request feedback
- **A decline reads as a decline.** `declineFollow` deletes the row (`src/data/profiles.ts:180-185`). `followStatus` then returns `'none'` (`:136`), so the requester's button goes from "Requested" back to "Follow" (`src/screens/ProfileScreen.tsx:136`) and they can infer the decline. That conflicts with "decline without pressure" and "no leaky notifications". What the requester should see is open (Section 10).
- **The Follow button doesn't say what approval means.** `ProfileScreen.tsx:130-138` is a bare Follow. The "Wants to follow you" list (`YouScreen.tsx:165-185`) is a bare Approve / Decline with no audience cue. Both need one plain line saying an approved follower sees your logged events and plans (draft in Section 10). Every follow is now a request, Anyone profiles included (Section 2.4).

---

## 8. Tests to run (Bucket 4: all 14, Kylie: run)

- **C055** (`src/data/personalLog.ts:161`, `:446`): in a test account, import one entry and tap Attend on its event. Does a second entry appear? (Matching is by event link only.) Use a test account, not the tester's private data.
- **C057** (`src/screens/EventScreen.tsx:140`): log a past event, reopen it, and note whether both "Attend" and "Remove" show.
- **C118** (`src/screens/AddEntryScreen.tsx:284`): add an event by hand on a real iPhone and a real Android phone. Does the keyboard hide fields or Save?
- **C002** (`src/data/sources/ticketmasterSource.ts:25`): check the last nightly run. A window that returned exactly 1,000 listings (200 × 5 pages) was cut off. Her note: run it, then "figure out alternative paths so we don't have a significant lag", and consider how far ahead events are shown. Report the options (smaller windows, more pages, a shorter horizon).
- **C003** (`src/data/sources/catalogSource.ts:24`): on a busy window, compare the rows the app receives with the count in the table. Supabase's server default caps a response at 1,000 rows, and that setting isn't in the repo. Her note: "determine where our caps are so that we can determine best paths forward to stay consistent and not lose stored information." List every cap you find (server max rows, page sizes, cache `maxEntries: 300` in `vite.config.ts:65`).
- **C034** (`docs/distance-check.md:1`): after the Oct 13 interview, set the tester's descriptions beside the reads as perception evidence, never as a target (`docs/formula-v4.md:45-46`).
- **C066** (`src/components/ReadTile.tsx:12`): open an upcoming date that has events on Home and on a team page, and check whether a forecast appears. Re-check after the Section 5.2 fix.
- **C072** (`src/screens/EventScreen.tsx:213`): take a fresh phone-width screenshot of the event page and judge whether it's crowded. Keep the share card and the weather and competition cards.
- **C074** (`src/styles.css:1520`): take screenshots of the map sheet, date page and event page for one event, and compare how occasion is styled.
- **C075** (`src/screens/HomeScreen.tsx:41`): scroll Home on a real phone. Does "Tonight" scroll inside the page?
- **C081** (`src/map/glowRadius.ts:24`): measure the glow sizes for a 5k, 20k and 70k event at default zoom.
- **C082** (`src/screens/DateScreen.tsx:259`): open a date with both open-air and indoor events. Only indoor rows should lack weather.
- **C083** (`src/lib/eventTitle.ts:38`): check the weather emoji on a real iPhone and Android phone (does it show as "…"?).
- **C087** (`src/styles.css:1484`): measure text sizes (some are 10.5 px) and touch targets against 44 points on a phone.

---

## 9. Docs cleanup (Bucket 5: all 13, Kylie: Go)

Do the docs that depend on answers after the matching app change lands.

- **C096** `docs/build-brief.md:22`: describe today's opening screen (Home at `/`). *Depends on 3.17:* the tips are removed, so drop the three-tip guide.
- **C098** `BACKLOG.md:193`: restate the Oct 7 57% rule as the code applies it (and as fixed by C027).
- **C099** `data/schedule-archive/README.md:3`, `docs/schedule-archive.md`: list all nine archived cities and their first dates (Section 5.1).
- **C100** `docs/new-city-checklist.md:39`: *repo changed.* Chicago now has 23 rows in `data/venue-access.tsv`, none flagged (commit `7bab8ac`), so "no venue flagged" is now true. Add a note that the rows were saved Oct 8, not Oct 7.
- **C101** `BACKLOG.md:6`: refresh the opening. Compare and Ticketmaster are both live.
- **C102** `docs/data-sources.md:52`: mark Ticketmaster as used.
- **C104** `AGENTS.md:38`, `:135`: update the screens and files (no `night.ts`; accounts are connected). *Depends on 3.10:* `AGENTS.md:87` "event page only" becomes both pages. Also update the 3.24 and 3.12 words.
- **C105** `docs/product-review-decisions.md:189` (remove "Use my location", gone since `8811570`); `src/lib/homeCity.ts:5` (home does sync, since `a338db8`).
- **C106** `MEMORY_HANDOFF.md:34`: correct the storage-key tip.
- **C107** `docs/product-decisions.md:11`, `:36`: add a "superseded" note, or update the tabs and Compare. *Depends on 3.10, 3.11, 3.12:* `:48-49` still say "I was there / Save this night" and "You lists attended nights only".
- **C108** `docs/expected-draw-decisions-oct7.md:41`, `MEMORY_HANDOFF.md:30`: resale prices are off until tested. Make both say so.
- **C109** `BACKLOG.md:234`: says Kylie still has to run migration 0010. The triage's fix was "confirm with you, then align", so this needs her answer (Section 10).
- **C110** `docs/tester-brief.md:17` ("Add a night"): *depends on 3.12 and the Oct 9 log wording.* Use "Log an event", "events" and the "My Stubs" tab name, and fill the interview-guide gaps. Also update `docs/tester-brief.md:30` for 3.16 (no "reconstructed").

Also update for decisions:
- 3.7: `docs/direction.md:17` should say three reasons.
- 3.8: `docs/ux-notes.md:30`, `:41`.
- 3.10: `docs/build-brief.md:28-35`, `docs/accounts-proposal.md:12-13`, `BACKLOG.md:32`, `:52`, `:69`.
- 3.17: `BACKLOG.md:78`, `docs/product-decisions.md:30`, `CLAUDE_CODE_FIRST_PROMPT.md:16`.

---

## 10. Open questions for Kylie

1. **3.15:** is the muted line "Rescored <date>" OK? It was a reviewer suggestion. Your form option said "updated <date>".
2. **Follow copy (3.24).** Drafts:
   - Follow button: "Follow" → sheet: "If {name} approves, you'll see their logged events and plans." [Send request]
   - Approve row: "{name} wants to follow you. They'll see your logged events and plans." [Approve] [Decline]
   OK as written?
3. **Following feed (3.24):** which activity types appear besides "is planning to attend" and "attended"? For example, reviews, or new follows.
4. **Declines:** what should a declined requester see? "Requested" indefinitely, or a neutral reset after some time?
5. **3.1:** should college postseason games get any estimate? (Unanswered.)
6. **3.18:** should the list row also use the headliner name, or keep the full title? (Unanswered; left as is.)
7. **C004/C018:** if backfilling, which past dates count as "specific dates" (Famous nights, dates in people's logs, something else)?
8. **C078:** move the Famous nights section? If so, where?
9. **C109:** have you run `supabase/migrations/0010_team_schedules.sql`?
10. **C089:** one label for concert entries: "Concerts" or "Show"?
11. **Privacy scope:** approval enforcement and re-pending on tightening are now in. Of the rest, which go in this build (Followers list with Remove, follower field limits, handle-only profile lookup) and which later (per-event sharing, per-detail visibility, block, link off switch)?

## Appendix: Kylie's notes, verbatim
These are copied exactly from her two exported forms (Oct 8 and Oct 9). Where a decision line above paraphrases, her words here win. Later chat decisions (Oct 9) noted in the sections above override where they differ.

### 2.C053 — The page for an event you added yourself (a hand-added event, opened from your log on You) is bare: no crowd, weather, date-page link or "Compare with…". It does show the "Nearby read" tile when the city has one. Whether imported entries are linked to their events is unknown (see C055). (note; choice: (a) Everything a listed event's page shows, where the data exists (date-page link, the night's read, weather, Compare with…))
> i'm not worried about the october 13 interview, only long term solutions, so i don't see why we shouldn't do our best to make hand-added events just like any other event that's already in the system.

### 2.C058 — Search in "Add an event" covers only your home city. The type-it-in form does have a city picker. (note; choice: (a) All covered cities, home first)
> does the user have to select a city, why can't it automatically search all existing cities/nights/events at the same time?

### 2.C059 — Hand entry has no duplicate check and allows future dates. (her own answer; choice: (+) Something else)
> i don't understand why we would block future dates (unless i'm misunderstanding what that means). definitely want to warn on the same title/date, but it should flag even if the title is a little different, rather than an exact copy

### 2.C060 — The form asks What, Type, Sport, Level, Division and Competition before When and Where. (note; choice: (a) Essentials first: What, When, City, Where, then the details (R2a's sketch))
> make certain fields mandatory (the essentials and any other you deem), classification fields are less important and may be event- or user-dependent (at least as far as whether the user wants them logged). presumably the more information will make it easier to determine for future event-adding-scanning reasons, so could have a note in there that encourages doing it for that and/or other reasons.

### 2.C024 — "If necessary" playoff games are shown and counted as if they'll happen. (note; choice: (a) Tag it "If needed" and leave it out of the read until confirmed)
> However, i think we should use the language "if necessary" since that's what most leagues use...?
> This keeps the date page complete while making the uncertainty visible. Counting it—even at reduced weight—still makes the read depend on a game that may never happen. Hiding it avoids that error but could make the schedule feel incomplete. Once the game is confirmed, include it in the read and remove the tag.
> A compact “If needed” label beside the round or matchup should be enough; no extra explanation seems necessary.

### 2.C022 — Nothing on screen says that the header's read is for the whole city while friction is about one event. Code shows no label; the on-screen pair wasn't re-checked. (her own answer; choice: (+) Something else)
> I want something in between all of the above. i want the explanation in an info or ? circle (i think???—or maybe its a legend rather than an explanation), maybe underneath the event list table. i also like Mockup 03's option 2, but also want the two separate columns on the list of events that make it obvious there are two scales (this should also be on the sheet list on the map page) and instead of the soft-lock flag of showing "low" so the cell isn't blank, putting the why its calm reason ("biggest crowd tonight"—from the same mockup but option 1).

### 2.C030 — "No count yet" (one event's crowd size, on the map's chips and list) and "No read yet" (the date's 1–10 read, on the date page) sound like the same thing. (her own answer; choice: (+) Something else)
> An empty date should look the same on every screen: the map header, the day strip, and the date page. Same box, same words. Today the same date says "Quiet" on the map and "No read yet" on the date page, and that has to go.
>
> The box should also be honest about why it's empty. "Quiet" should only mean we actually checked that city on that date and nothing big was on. Then the box shows "— Quiet", and the date page adds "Nothing big in {city}." If we never checked, as with the past weeks before the nightly saves started, the box shows "— No data". The date page adds "Events have not been collected for this date." That tile is paler than Quiet, so a run of them doesn't read as a calm week. If we only partly checked (games but not concerts, like LA on Oct 4–5), it's treated as No data too, with "Events have not all been collected for this date." That way it never claims a date was quiet when concerts went unchecked. Both kinds of empty date stay tappable, and opening a never-checked date shows that line plus whatever is in your own log for it.
>
> This shouldn't grow into a big build. The app already saves what it checked each night; the screens just don't read it. So the work is to wire that record into the box and apply these labels. Home's empty dashes are a separate bug to fix on their own.

### 2.C028 — A reason line like "28 mi away, same hours" reads as unrelated to the event. The sentence's shape is confirmed in code; the example wasn't re-run. (her own answer; choice: (+) Something else)
> I actually don't think this needs to change. i don't want this project to be the source for the reason WHY an event was event was competing with another, i just want to lay out all the information and the users can make inferences based on the information we offer. so that means offering all the hard facts of potentially conflicting events (or at least a summary of such events).

### 2.C070 — "Seats in a fight" doesn't match the crowds shown beside it. (her own answer; choice: (+) Something else)
> I’d remove “117,566 seats in a fight” from the main date page because the seat total doesn’t match the event crowd estimates shown below and could read like another crowd count. Instead, use a short line such as “LA activity across 6 events” to summarize what the rows support (and avoid implying that the app knows how attendees are distributed). Keep venue-capacity math for Compare, where it can be labeled and explained as a separate measure of competing-event pressure.

### 2.C004-C018 — There's no data for past dates, and the saved schedules start Oct 4. (note; choice: (c) Both)
> not a priority to backfill, if there are data capacity limits, i'd rather only highlight specific dates in the past rather than work to to fill dates that people are unlikely to go back and look at

### 2.C073 — Crowd numbers use mixed formats (20k, 20.0k, 20,000). Several formatting paths are confirmed in code; not screenshotted. (note; choice: (c) Pick per surface)
> Use a compact crowd format on small, glanceable surfaces like map chips, and full numbers on surfaces with more room where precision helps. Choosing by surface gives each format a clear purpose and keeps the experience consistent as new screens are added.

### 2.C071 — The estimate ⓘ card is hard to scan, and Done comes last. (note; choice: (a) Short headed sections)
> On the event page whose crowd reads "People (Estimated)" it should be "People (Est.)" instead

### 2.C078 — Famous nights' order isn't labeled. Not checked in a browser. (note; choice: (a) Label the order ("Newest first"))
> I wonder if we should move this entire section, it's kind of out of place here...

### 4.C002 — The Ticketmaster pull stops at 200 × 5 pages = 1,000 listings per 30-day window, so concerts late in a busy window may be cut. (note; choice: Run this test)
> let's run this test and figure out alternative paths so we don't have a significant lage (and we might also might consider how far out we show events)

### 4.C003 — The app's catalog reads set no row limit, and Supabase's server default caps a response at 1,000 rows. That setting isn't in the repo. (note; choice: Run this test)
> let's run this and determine where our caps are so that we can determine best paths forward to stay consistent and not lose stored information..

### 3.13 — The empty You tab (note; choice: (1) The sentence plus two buttons: Add (worded per 3.12; the app says "Add an event" today, the old docs "Add a night") and "Find one on the map")
> I wonder if "Add an event" is the move or "Log an event" (do we use this "log/logging" copy at all?

### 3.15 — Screens recompute instead of showing the saved stamp (note; choice: (1) The saved stamp, recalculated against the saved schedule only when the formula changes, with "updated <date>")
> with the exception of the formula improving (which makes sense for consistency purposes), past nights ARE settled 24 hours after—no?? why are we redoing reads for anything other than formula updates?

### 3.24 — "Friends" (note; choice: (2) "Following")
> yes i like that, i have a few questions (and further decisions to make) here, including 1/ do friends see planned events? i want yes (could plan meeting up), but i have privacy concerns 2/ related to privacy concerns: Follows are one-way and need approval. Show who can see your log wherever you share, and see the Privacy gaps for the real protections. "Friends" suggests a mutual, safe circle that the app doesn't actually enforce. "Following" says what really happens: you asked to see someone's nights and they approved. I'd also put "Followers" next to it, wherever you see people who follow you, so people know who can see their log. That gives "Following" for who you see and "Followers" for who sees you.
