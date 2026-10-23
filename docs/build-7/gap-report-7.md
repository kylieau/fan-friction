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
| 7. Log an event sheet | done | `2e41d4e9`; review fixes `b205527e` | |
| 8. Your stubs page | done | `b3f400c7` | |
| 9. You rebuild | done | (step 9 commit) | |
| 10. Ranks, Recap | next | | |
| 11. Your year, Spend details | | | |
| 12. Profile & Settings, city switcher | | | Codex review 4 after this |

**Codex reviews:** stage 1 was tried twice at about 4:30 and 4:45 PM Pacific and failed before any analysis ("out of credits"); Kylie said credits returned at 5:20 PM, and stages 1, 2 and 3 ran then, in parallel (read-only, each on its stage's diff), all three completing. Findings and what was done are under **Codex reviews** below. Stage 4 runs after step 12. **Skipped reviews for Kylie to run afterward:** none.

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

### Step 8. The Your stubs page
- `StubsScreen.tsx` rebuilt as the pushed page at `/you/stubs` (mocks 38–43): "‹ You", the title with its stub count (Lean; the mock shows one and the no-counts rule was about "See all"), filter and search on the title row (measured 36 × 36 px each), a List / Grid / Calendar switcher (`segmented`, remembered per device). No year chip, no plans, no floating button.
- **Filter sheet** (mock 40): Dates (From / To, All time / This year / Last year / Last 30 days), Type (All / Attended / Watched), Kind (All / Game / Concert / Other, the notes' words), **Team or sport** (the chips You's row had: teams and sports logged more than once), Tags (the existing tag picker rows). Picks live in sessionStorage; `?filter=` (a Fave's "My Stubs ›") and `?tag=` (ready for Ranks' Tags tab) pre-set them. Count badge and removable chips with Clear; "No stubs match" with Clear when the filter empties the list.
- Rough dates in the Dates filter (lean from the notes): a month, year or span stub counts when its stretch overlaps the range; an unknown date always does.
- **Grid** (mock 41): light cards three across, newest first: date and the read tile on the top line, the ticket / TV and sport icons, the title, the venue.
- **Calendar** (mock 42): a year strip (each month shaded by how many stubs, the shown month outlined, ‹ › for years) over a **Sunday-first** month grid (the app's `monthCells`, as Explore's calendar; `WeekCalendar`'s Monday-first is a pre-existing mismatch, noted, not changed). A dot for attended, a ring for a day with only watched stubs; a tapped day lists its stubs; **"No exact date"** lists the rough-dated stubs. The month floor is the oldest dated stub, not Explore's 2016 clamp.
- **Seen N credits both teams** (`entryMatches` reads `opponents`), so Faves counts, the team page's "N games in My Stubs" and the Faves row agree with Ranks (Locked). `favoritesFromLog` still reads `tags` only, so a new person's first Faves never include opponents.
- Screenshots: `.playwright-mcp/b7-stubs-list.png`, `b7-stubs-grid.png`, `b7-stubs-calendar.png`, `b7-stubs-filter.png`.

### Step 9. The You rebuild
- `YouScreen.tsx` rebuilt to the seven pieces (mocks 27–37): compact header (avatar → Profile & Settings, name, home city with the house icon, "Private profile" / "Friends only" / "Public profile" from the profile's switch; search stays top right; no gear; the people count link is gone, it lives in People in Settings), the **Upcoming** row ("Upcoming · N plans ›" or the one plan's title and weekday; hidden with no plans), the **year card** (a year picker on the head, "Your year ›" beside it; the fixed big number "N events attended · N watched"; four auto-picked stats; Recap › and Ranks › as the footer), the **Your stubs** preview (four newest, "See all ›", hidden until the first stub), the **Faves** row (badges with the city-shortcut name and "Seen N", most seen first, "Edit ›"; the mock-37 empty state "Follow teams and artists to see them here · Find faves ›").
- `src/data/yearStats.ts` holds the computations Your year and Ranks reuse: `entriesInYear`, `yearsOf`, `yearStatPool` (venues or new venues against last year, hours at games, cities, teams seen, most-seen team, top tag, longest streak of days, biggest crowd; each with a weight, the top four show; a stat with too little to say stays out), `teamCounts` (every team credited, both sides), `cityCounts`, `longestStreak`.
- Brand-new user (Locked): the card reads 0 with "Nothing logged yet. Tap + to log your first event."; no stubs preview; the Faves empty state.
- Signed out (Locked): the sign-in card (`AccountBlock`) under the header.
- Gone from You: the Stats block, the By type / team / sport / venue lists and the chip row (their content is Your year, Ranks and Recap; the chip row's logic is the Your stubs filter's Team or sport). The Settings panel and its `?panel=` deep links stay until step 12.
- The three card links (`/you/year`, `/you/recap`, `/you/ranks`) go live in steps 10 and 11, committed right after.
- Screenshot: `.playwright-mcp/b7-you.png`.

## Advisor calls
1. **Before any code (stage plan).** Asked: is §9's order and my slicing right; anything to settle first. Said: keep §9; open the gap report in commit 1; decide team attribution in groundwork (one home-team tag today, so steps 9–11 can't credit both teams without data); verify the card views don't pass `data` through wholesale before trusting the "cost is private" claim; carry seats and cost in both settle branches; grep the routes rather than trust the a92cf29 list; measure the 36 px filter button and 48 px "+"; the earlier cue is a delete, not a prop; probe Codex at stage 1; pick one currency rule and log it. Did: all of it. Privacy verified in `0026_stub_visibility.sql:116–157`: `entry_cards` and `plan_cards` select named keys (`when`, `venue`, `stamp`, `review`, flags), never `data` itself, so `cost`, `seats` and `opponents` stay owner-only. No SQL needed.

## Codex reviews
Each stage ran as a read-only review of that stage's diff, with the design rules stated up front (cost's three states, `opponents`, seat and cost on plans, the card views' named keys). Fixes landed in one commit after step 7 ("review fixes, stages 1–3").

### Stage 1 (steps 1–3; diff adb14948..7a3a3b19), run 5:20 PM
1. **Accepted** (bug): `settlePassedPlans` dedupe could discard a prepared stub, losing the plan's seat and cost when a twin stub appeared meanwhile. Now the surviving stub takes the plan's seat and cost when it has none.
2. **Accepted** (bug): `linkSuggestion` rebuilt a confirmed hand-added plan without its seat and cost. Both carried now.
3. **Rejected** (bug claimed): `opponentTags` skips an away team that is not in `TEAMS` (name-only visitors from a school feed). Crediting a team the app has no record of would make Ranks rows out of nothing; opponents credit catalog teams only. Noted as a backlog item: resolve name-based visitors once the feeds carry ids.
4. **Rejected** (bug claimed): two teams sharing a short name ("Stars") collide in one tag. Tags are the app's existing filter vocabulary (`tagFor`), and the stub's own home tag already works this way; changing attribution to ids is a wider change than build 7. Noted in backlog.
5. **Accepted** (bug): `entryTeams` ignored a hand-added game's `sides` and let "Event"/sport words count as teams. Now: games only; system words excluded; a hand-added game's sides count.
6. **Accepted** (bug): typing 100001 saved 100000 while the box showed 100001. The box now caps what it shows.
7. **Accepted** (risk): a quantity on a non-ticket line counted in totals. The normalizer keeps `qty` on the ticket line only.
8. **Accepted** (risk): string amounts like "" or "abc" became 0. A string is accepted only when it is a plain number.
9. **Accepted** (risk): saved `lines` not an array, or a kind like `toString`, could throw. Shape guarded, kinds checked by membership.
- Checked fine by Codex: both settle branches carry seat and cost; "." stays not entered, "0" becomes Free, "00.5" saves; `tsc` passes.

### Stage 2 (step 4; diff 7a3a3b19..2c007029), run 5:20 PM
1. **Accepted** (bug): the Log sheet closed only on a pathname change, so saving while already on that page left it open. Closes on every navigation (`location.key`).
2. **Accepted** (bug): plan saves (New stub, the Add card) and Home's "Your next event" went to `/you/stubs`, which no longer lists plans. They go to `/upcoming`.
3. **Accepted** (bug): `/calendar`, `/nights`, `/favorites` dropped their query strings. Kept now (`ExploreRedirect`, `KeepQuery`).
4. **Accepted** (risk): Escape closed the Log sheet and a sheet above it together. Only the top sheet takes Escape.
5. **Rejected** (risk): no focus trap / inert background on the Log sheet. None of the app's sheets trap focus (Stub it, Search, the filters); the search box takes focus on open. Adding a trap to one sheet would be inconsistent; a shared sheet focus rule is a backlog item.
6. **Accepted** (nit): the new `.page` bottom padding overrode the timeline pages' zero padding. Timeline pages excluded; their clearance stays inside the scroller.
- Checked fine by Codex: no redirect loops, no leftover `/stubs` or `/following` links, `backFrom` order, the You tab lit on `/you/stubs`.

### Stage 3 (steps 5–6; diff 2c007029..f4687f8a), run 5:20 PM
- **Privacy verdict (the stage's main question):** no path writes your own stubs, plans, cost, seats or the `You` pseudo-profile to any store, to Supabase, or to anyone else's feed; the link `state` carries no private fields; friends' private stubs stay filtered. Nothing to fix.
1. **Rejected** (risk): rating lookups for your own rows reach the catalog cache and so Supabase, revealing which cities and dates were looked up. The Stubs tab has looked up verdicts for your own stubs this way since build 3; a catalog read names a city and a date, never a stub. Noted.
2. **Accepted** (bug): your own hand-added rows linked to the date page. They open their own page (`entryPath`).
3. **Accepted** (bug): a plan for a game outside the covered cities could show the home city's verdict. The row carries `noRead` and shows none.
4. **Accepted** (bug): Your stubs (past only, nothing under the line) opened on an empty Today with padding. A past-only list now opens at its end, newest rows in view.
5. **Accepted** (bug): the "↓ Today" pill landed on the plans band, not the line. It goes to the line; only the opening scroll uses the band.
6. **Accepted** (bug): you were identified by the display name "You", so a friend called You would be merged. Identity is by id now.
7. **Accepted** (risk): the stored Upcoming filter JSON was cast unchecked. Each piece is validated; one of the two Show rows always stays on.

## Judgment calls
- **Team or sport filter reads both teams.** The notes say the filter moves "as is" (home-team tags), but Ranks and Seen N credit both teams of every game (Locked), so a "Padres" filter that hid a Dodgers home game against them would contradict the counts next to it. The filter now reads `entryTeams` (both teams) plus the sport word. Easy to narrow back if Kylie prefers "what you went for".
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
