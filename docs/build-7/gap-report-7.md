# Build 7 · gap report

Written as the build goes (Kylie's instruction, Oct 22, 2026: a running progress log at the top; a later session resumes from it). The spec is [`build-notes-7.md`](build-notes-7.md); step numbers are its §9. Built by Claude Code (Fable 5.1, advisor on) straight on `main`, one commit per step, `npm run build` before each.

## Progress log
| Step | State | Commit | Notes |
|---|---|---|---|
| 1. Groundwork | done | `92b2a35f` | StatCards, FrictionLadder, favoriteOfficialName, Cost type + setters, cost/seats on Plan and carried at settle, opponents on game stubs |
| 2. Naming | done | `75184b41` | official names in search results, the Faves picker rows, New stub's team list |
| 3. Cost row, blue rows, 44 pt seat line, Edit stub | done | `e1f56f3d`, `7a3a3b19` | Codex review 1 after this |
| 4. Routes and tab bar | done | `2c007029` | Codex review 2 after this |
| 5. Upcoming | done | `fe90842f` | own screen, plans band, filter sheet, no earlier cue anywhere |
| 6. Activity | done | `f4687f8a` | Codex review 3 after this |
| 7. Log an event sheet | done | (step 7 commit) | |
| 8. Your stubs page | next | | |
| 9. You rebuild | | | |
| 10. Ranks, Recap | | | |
| 11. Your year, Spend details | | | |
| 12. Profile & Settings, city switcher | | | Codex review 4 after this |

**Codex reviews:** stage 1 (steps 1–3) was tried twice at about 4:30 and 4:45 PM Pacific and failed both times before any analysis ("Your workspace is out of credits"). Kylie said credits return at 5:20 PM; stage 1 is run then, alongside stage 2. If it fails again it is listed here for her to run afterward.

## What shipped per step

### Step 1. Groundwork (no visible change)
- `HeaviestStat`, `Stat`, `heaviestEntry` moved from `YouScreen.tsx` to `src/components/StatCards.tsx`; ProfileScreen imports from there.
- `YourYear.tsx` → `FrictionLadder.tsx` (component `FrictionLadder`). The "Your year" name is free for the page.
- `favoriteOfficialName(fav)` in `src/data/favorites.ts`: the team page header's expression (`isCollegeTeam ? teamLongName : team.name`).
- Cost: `Cost`, `CostLine`, `CostKind` in `types.ts`; `cost?: Cost` on `Entry` and `Plan`; `seats?: Seats` on `Plan`. Helpers in `src/data/costs.ts` (`normalizeCost`, `costTotal`, `formatMoney`, `costLine`, the chip orders and labels). Absent = not entered, `free: true` = $0, lines = paid; clearing deletes the key, never writes 0.
- Setters beside `setEntrySeats`: `setEntryCost`, `setPlanCost` (never on Interested), `setPlanSeats` (never on Watching or Interested).
- `settlePassedPlans` carries `seats` and `cost` from the plan in **both** branches (catalog and hand-added) through `carryPlanExtras`. A Watching plan's seat is dropped (watched is not in person).
- Team attribution groundwork: `Entry.opponents` (the away team's filter tag) is written by `entryFromEvent` for catalog games, and `entryTeams(entry)` returns both teams. Existing stubs get their opponent through `retitleStubs` (it already loads every linked stub's event; `TITLE_VERSION` bumped to `opponents-b7`, so it runs once more per log).

### Step 2. Naming
- `favoriteOfficialName` now renders in: global search's team/artist/venue rows (`SearchSheet.tsx`), the Faves picker's rows (`FavRow` in `FavoritesScreen.tsx`, so Your faves, Suggested and Browse by league), the Following sheet's list (retired in step 12, kept consistent until then), and New stub's "Which team?" list (`AddEntryScreen.tsx`; the notes' lean: it counts as search results).
- Team page header verified: `FavoritePage.tsx` already renders `isCollegeTeam ? teamLongName : team.name`; no change.
- Long names wrap: `.log-title` and `.add-record-name` set no `white-space` or ellipsis, so nothing truncates.
- Everything else (Upcoming/Following rows, Home strip, stub rows, FollowRow leads) still uses the shortcut helpers; untouched.

### Step 3. Cost row, blue optional rows, seat-line tap size, Edit stub
- `src/components/CostRow.tsx`: the collapsed "+ Add cost" row under Seat (same markup as Seat, so no divider); opened on Attended it presets one Ticket line with the cursor in the amount, "You paid · optional", `× qty` on the ticket line only, a plain Free chip, chips for the other categories in the locked order (Parking & Transit, Food & Drink, Merch, Other; Watched: Stream / PPV, Food & Drink, Other, no preset), one × per line, a running Total once there are two lines or a quantity. Saves as you type through `setEntryCost` / `setPlanCost`; a blank amount is dropped, so closing an untouched editor leaves "not entered".
- StubSheet gates: Seat on Attended stubs **and Attending plans** (`setPlanSeats`), never on live broadcasts; Cost on Attended, Watched, Attending and Watching; never on Interested.
- `.stub-tags-add` is action blue (`--fight` → `--action`): "+ Add tag", "+ Add seat" and "+ Add cost" match. Tag chips untouched (builder's call, left violet for now; revisited at step 8 if it clashes next to the friction tiles).
- `.stub-seats-line` (the filled seat or cost line) gets the shared `::after` extension: measured 32 px tall with a −7 px/+7 px extension, so 46 px of tap area.
- Event page: "Edit stub" shows whenever you have an Attended or Watched stub (was: only with tags); a plan while the date is ahead reads "Edit". Both render paths (catalog event, schedule game). A quiet "You paid $151" / "Free ticket" line sits under the seat line when a cost is entered (owner-only data on your own page).
- Phone-size check: `.playwright-mcp/b7-cost-collapsed.png`, `b7-cost-open.png`, `b7-cost-lines.png` match mocks 21–23.

### Step 4. Routes and the tab bar
- Routes: `/upcoming` and `/activity` render the two sides of the Following screen (a bridge until steps 5–6 split it; the title reads Upcoming or Activity, the old Faves/Friends switch navigates between the two tabs); `/you/stubs` and `/you/stubs/tag/:tag` are the Your stubs page and TagScreen. Redirects keep the query string: `/stubs?filter=x` → `/you/stubs?filter=x`, `/stubs/tag/x` → `/you/stubs/tag/x`, `/following` → `/upcoming`, `/following?tab=friends` → `/activity`, `/favorites` → `/upcoming`. `/favorites/edit` still opens the picker page (the sheet comes in step 12). `?panel=` deep links unchanged (step 12).
- Links moved (grepped, not taken from the a92cf29 list): ManualEntryScreen ×5, TagScreen ×2, CompareScreen, AddEntryScreen ×2, QuickAddSheet, EventScreen, HomeScreen ×4, FavoritePage ×2, FavoritesScreen ×2; `tagPath` in `view.ts`; `backFrom` reads `/you/stubs` before `/you`, and knows Upcoming and Activity.
- Tab bar: Explore · Upcoming · (+) · Activity · You. The "+" is a button (`aria-label="Log an event"`, `aria-haspopup`), never selected; measured **48 × 48 px, top 6 px above the bar's top edge** (mock 02 says about 7). Thin chrome-coloured ring and soft shadow.
- `LogSheet` shell: the bar's "+" opens a sheet titled "Log an event" with today's New stub content embedded (`AddEntryScreen embedded`); it closes on tap outside, Escape, or any navigation (a save navigates). Step 7 adds Happening now and Recent above it.
- The floating "+ Stub it" on Stubs is gone, with its CSS; `/you/add` stays as an alias (Home's link).
- Bottom padding: `.page` and `.timeline-scroll` get 32 px so the last row clears the raised part.
- Checked in the browser: all seven old addresses land where listed above; Upcoming lights the Upcoming tab; `/you/stubs` lights You; no FAB on the page.

### Step 5. Upcoming
- `src/screens/UpcomingScreen.tsx`: its own screen. Header: title, then filter and search together (`.header-actions`). A **Your plans** band (Attending / Watching / Interested, status word leading each row, `FollowRow`, no log button) sits above the today line inside the timeline (`Timeline`'s new `aboveLine` slot, so the list opens on the band and the line together); below, the Faves rows by month as before, the past above by scrolling up. Helper line under the band shows once per device (a lean; it is a one-time explanation, not a permanent caption). No plans: the slim prompt card (mock 09, Locked); plans filtered away: "No plans match the filter."
- **Filter sheet** (`FilterSheet`, shared frame with Reset / Done): Dates (From / To date inputs, All upcoming / Next 7 days / Next 30 days / This month), Show (Your plans, Faves, one always on; plan chips All / Attending / Watching / Interested), Faves (All Faves, then the checklist by kind, most-seen sorting comes with step 12's comparator), "Manage faves ›" (opens the picker page until step 12 turns it into the Edit favorites sheet). Picks live in sessionStorage like Following's did; the filter button turns solid with a count and a chip row with Clear appears only while filtering.
- **Measured:** filter button 36 × 36 px, search button 36 × 36 px, both with the −7 px / +7 px `::after` extension (46 px tap). The 44 px `.following-filter` override is gone.
- **"↑ N earlier" cue deleted** from `Timeline.tsx` (Locked; reverses 435d817). The list anchors on the band or the line; the "↓ Today" pill is unchanged. Its CSS is gone too.
- **Your stubs** passes no plans and shows nothing under the line (plans are on Upcoming; reverses build 6's rule on purpose, as the notes say).
- `FollowingScreen` now renders only the Friends side (Activity) until step 6 replaces it. The shared pieces it used (`Picked`, `Check`, `toggleIn`, `subOf`) now live in `FilterSheet.tsx`.
- Screenshots: `.playwright-mcp/b7-upcoming.png`, `b7-upcoming-filter.png`, `b7-upcoming-filtered.png`.

### Step 6. Activity
- `src/screens/ActivityScreen.tsx` replaces the Friends side of the old Following screen (`FollowingScreen.tsx` is removed; `FeedRow`, which Home's strip uses, moved to `src/components/FeedRow.tsx`).
- **Your own entries mixed in** (Locked): built locally from your log (`ownLines`: stubs from the last 60 days, every plan ahead including Interested) under a `You` pseudo-profile that is never saved or sent; merged by event in `mergeFeed` with You first; the people line reads "You attended", "You're attending", "You, Sam R. +1 attending". Your own stub's read wins the row's tile. Nothing new is read from or written to the account for this.
- **Filter sheet:** Hide mine (a switch; sticky, `prefs` key `activity-hide-mine`, per device, Locked), People (All people, then the approved people you follow with "N in your feed"), Activity chips All / Attended / Attending / Watching / Watched / Interested (Watching added, Locked). People and kind picks live in sessionStorage; Hide mine survives a reload (checked).
- **Signed out** (Locked): the sign-in card (`AccountBlock`, the same card You will use) above your own local entries.
- No Earlier line or cue (shared `Timeline`, step 5). Filter button measured 36 × 36 px against search 36 × 36 px.
- Managing people (requests, find, following / followers) is no longer in a sheet here; the "Find people" empty state still deep-links to the People section, which step 12 turns into a page section.
- Screenshots: `.playwright-mcp/b7-activity.png`, `b7-activity-filter.png`, `b7-activity-hidemine.png`.

### Step 7. The Log an event sheet proper
- `LogSheet.tsx` rebuilt (mock 04): compact search on top; "Today · <date> · <city>" context line; **Happening now · Today** (today's events in the home city from the catalog cache, ranked your plan first, then your Faves' events, then the rest, start order); **Recent** (events you opened on this device in the last week, "Yesterday · You opened it" / "You logged it"); "Not here? Add it yourself" opens the existing New stub content inside the sheet. Nothing today: the band is skipped, as the notes say.
- `LogRow.tsx`, the one shared row (mock 06, Locked): type icon + lead (the Fave it belongs to, else the city), title, meta with your status word first, and one outlined "+" that opens `StubSheet` on top, or a filled ticket / TV / bookmark mark once logged or planned (no add action). Words open the event page and close the sheet.
- Search in the sheet (mock 05): `searchEvents` (new, `src/data/index.ts`; every covered city, further-out rooms included, nearest dates first) as `LogRow`s, then teams / artists / venues from `searchFavoriteRecords` with › to their page and the official name.
- The "opened" store: `src/lib/openedEvents.ts` (`prefs` key `opened-events`, capped at 20, per device); the event page records each open.
- Global search (`SearchSheet`, Locked §6): an **Events** group of `LogRow`s now sits above the old date hits (renamed **Dates**), the crowd-size range still applied.
- Shell warms today's home-city listings at open (Lean) and closes the sheet on any navigation (`location.key`, from Codex stage 2).
- Escape: the Log sheet ignores it while a sheet sits above it (Stub it, the Add card), so only the top sheet closes (checked).
- Screenshots: `.playwright-mcp/b7-log-sheet.png`, `b7-log-stub.png`, `b7-log-marked.png`, `b7-log-search.png`, `b7-global-search.png`.

## Advisor calls
1. **Before any code (stage plan).** Asked: is §9's order and my slicing right; anything to settle first. Said: keep §9; open the gap report in commit 1; decide team attribution in groundwork (one home-team tag today, so steps 9–11 can't credit both teams without data); verify the card views don't pass `data` through wholesale before trusting the "cost is private" claim; carry seats and cost in both settle branches; grep the routes rather than trust the a92cf29 list; measure the 36 px filter button and 48 px "+"; the earlier cue is a delete, not a prop; probe Codex at stage 1; pick one currency rule and log it. Did: all of it. Privacy verified in `0026_stub_visibility.sql:116–157`: `entry_cards` and `plan_cards` select named keys (`when`, `venue`, `stamp`, `review`, flags), never `data` itself, so `cost`, `seats` and `opponents` stay owner-only. No SQL needed.

## Codex reviews
(none yet)

## Judgment calls
- **Global search event rows (step 7).** The lock says search's event rows get the shared row, but live search had no event rows: its Events group was one row per *date* opening the map. The safest reading that fits: add an Events group of real event rows (the shared `LogRow`) above the date hits, and keep the date hits as a "Dates" group, so nothing that worked is lost. Kylie can ask for the Dates group to go.
- **"Change city" on the Log sheet (Lean) is deferred to backlog.** The notes' `openedMetroId()` returns home, not the city Explore is looking at, so there was nothing to reuse; the sheet uses home (the notes' fallback). A picker would be new UI.
- **Seat and Cost on any Attending plan, not only same-day.** The notes name same-day logging as the use case, not as a gate; knowing your seat at purchase is a fair reason. Easy to narrow later.
- **Opponents as their own field, not a second `tags` entry.** `entry.tags` also seeds a new person's first favorites (`favoritesFromLog`, `favorites.ts:93`) and drives the "Team or sport" filter; putting the away team there would make opponents into Faves. `opponents` keeps `tags` and `sides` meaning what they did and lets stats read `entryTeams`. "Seen N" (`entryMatches`) will read opponents too in step 9, since the notes say it is the same all-teams count.
- **Currency (Lean):** the device region's currency, USD when unknown (`deviceCurrency`), stored on the cost so a later locale change cannot alter past amounts. Multi-currency is backlog, as the notes say.
- **A 0 on one line is allowed** ("parking was free" beside a paid ticket); a cost with no lines and no Free is "not entered".

## Skipped
- Own Interested plans are on Activity even though friends' Interested answers never reach the feed (the `plan_cards` reader keeps them off). The chip row the notes lock has Interested on it, so your own show; a friend's Interested would need a server-side change, which is out of scope. Logged as a lean.
- Plan band rows read "Attending" without the Fave's name after it (mock 08 shows "Attending · UCLA FB"). A plan does not point at a Fave; matching by title would be a guess. Lean: the status word alone.

## SQL for Kylie
None. Build 7 needs no migration; the card views already keep `data` private.
