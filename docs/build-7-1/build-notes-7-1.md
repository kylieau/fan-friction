# Build 7.1 notes: build 7 review fixes and season tickets

Kylie reviewed build 7 against `docs/build-7/build-notes-7.md` on Oct 22, 2026, and made the decisions below. Every item is **Locked** (Kylie's decision) unless it says Lean, Open, or Closed. Where an item changes an earlier locked decision in the build 7 notes, this file wins.

Screenshots referenced below are in `docs/build-7-1/shots/`; build 7 mockups are in `docs/build-7/mockups/`. The three Part 1 mocks this bundle would otherwise lack (`64-favorites-edit-sheet.png`, `08-upcoming.png`, `04-log-sheet.png`) are copied to `docs/build-7-1/mockups/build7-reference/`. Season-ticket mockups (Mock Mosaic, Oct 22–23, EXAMPLE data) are in `docs/build-7-1/mockups/season-tickets/`. Items 15 and 16 were locked by Kylie on Oct 23 after research and three mockup rounds. The Oct 23 evening fold added mocks for the weather strip (`mockups/7-1-more/03-final/`), the calendar (`mockups/7-1-more/29-calendar/`), the Faves strip (`mockups/you/faves-strip/`), and the verdict pills and Temperature Units row (`mockups/7-1-more/final-extra/`).

Ground rules (same as build 7): work on main, one commit per item group, stage files by name, `npm run build` before every commit and push. No Supabase migration or SQL; if one seems needed, put the SQL in the report for Kylie to paste. Her own stubs, plans, costs and seats never leave the device. Cost, seats and opponents stay out of `entry_cards` / `plan_cards`.

Part 2 (items M1 to M40, Kylie, Oct 23) comes after item 16, followed by the Report and the **Builder prompt additions**, which cover the whole 7.1 build. An M item wins over items 1 to 16 where they disagree.

## 1. Interested plans in Upcoming and on profiles (reverses the Oct 11 rule)
Shot: none. Mockup: none (the Upcoming row is drawn in `mockups/7-1-more/22-24-c.png`).
- Friends' Interested plans **show in Upcoming**, as M22's "Friends · {name} Interested" row, not in Activity. M24 makes Activity look backward only, so an Interested plan never appears there. The data is whatever `followingFeedWithStatus` already returns for friends' Interested plans; only where it is shown changes (M22, M24).
- Friends' Interested plans also **show on their profile** (`plansOf` stops filtering out `interested`), so the profile and Upcoming agree.
- Her own Interested plans show in Upcoming with her other plans (items 3 and 5), and never in Activity.
- Update any comments or docs that still say Interested never reaches the feed: Interested plans now reach Upcoming and profiles, never Activity.
- Conflicts: this item first said friends' Interested plans show in Activity (keep `followingFeedWithStatus` as is, make the line read "Jo is interested", and keep her own Interested plans in her Activity). M24 is later and wins, so those Activity parts are superseded. The profile part stands.

## 2. Edit favorites sheet matches mockup 64
Shot: `31-edit-favorites.png`. Target: `mockups/build7-reference/64-favorites-edit-sheet.png` (a copy of the build 7 file in `docs/build-7/mockups/`, which also holds 65-favorites-edit-sheet-search.png and 66-favorites-edit-sheet-closeup.png).
- Stale in the mock (64, 65 and 66): every "Seen N" and the footer "Seen counts every Attended and Watched stub" go, and the "Friends" tab is now "Activity"; the note wins.
- Each of Your Faves has a minus button to remove it (not a Following pill).
- Your Faves are grouped: Teams · N, Artists · N, Venues · N.
- Subtitle is the league only ("MLB"), with no seen count (Locked, Kylie, Oct 23; see M19). Mockup 64 still draws "Seen 14"; the text wins.
- Suggested is a short list (teams she has seen, most seen first), with a Follow button. Its subtitle is the league only, like Your Faves; the seen count only orders the list.
- Browse by League stays, collapsed under Suggested.
- Full team names stay in this sheet.

## 3. Upcoming empty state and copy
Shot: `06-upcoming-no-plans.png`.
- The plans band's empty line always shows, even with no favorites and no plans. Put the Add a Fave prompt below it.
- New copy: "No upcoming plans. Mark events Attending, Watching, or Interested." (replaces "No plans yet."; Watching plans also land here).

## 4. Search dates
Shot: `11-log-search.png`.
- Event rows in search (Log sheet and global) show the year when the date is not in the current year ("Mon, Oct 27, 2025").
- Upcoming events sort first, then past ones (newest past first).

## 5. Plan count on You
Shot: `17-you.png`.
- "Upcoming · 2 plans · 1 interested". Attending and Watching count as plans; the "· N interested" part shows only when N > 0. This is a count line, not a heading: only "Upcoming" is capitalized (M2).

## 6. Seat and Cost on plans
Shot: none. Mockup: none.
- Keep the build 7 behaviour: Seat and Cost on any Attending plan, Cost on any Watching plan, whatever the date. Carry-over to the stub stays as is.
- Add Seat and Cost to the page for a plan she typed in by hand (manual plan), same rules.

## 7. Global search
Shot: none. Mockup: none.
- Keep the Dates group under the Events group. No change.

## 8. Your Stubs team filter
Shots: `20-stubs-filter.png`, `21-stubs-filtered-padres.png`.
- Keep counting both teams.
- Every team from her stubs is offered from the first stub (drop the two-stub minimum).
- Because that list gets long, the team filter becomes a dropdown (pick one team, with a clear option) instead of a row of chips. The sport choices can stay as they are.

## 9. Stub counts
Shots: `19-stubs-list.png`, `26-recap.png`.
- Remove the count from the Your Stubs page title (title is just "Your Stubs").
- Recap's link loses its count ("See these stubs ›").

## 10. Upcoming layout
Shots: `02b-upcoming-after-settle.png`, `03-upcoming-helper-gone.png`. Mockup: none current for the whole screen. Layout comes from `mockups/season-tickets/33-swipe-outside-box-primary-path.png` and `mockups/7-1-more/22-24-c.png`.
- The cited build 7 mock, `mockups/build7-reference/08-upcoming.png` (a copy of `docs/build-7/mockups/08-upcoming.png`), is stale for the dark YOUR PLANS bar, the past results above Today (M22 removes them), the old "Friends" tab (now "Activity") and the raised + (item 14); it has no scroll window (item 16) and draws a "Not confirmed — lean" box. The note text wins.
- The helper line under the plans band shows until she has 3 or more plans, then hides (replaces once-per-device).
- The "YOUR PLANS" header uses the same light blue band as the month headers, not the near-black bar.
- Add a second sticky section header, "YOUR FAVES", in the same light band, above the faves' games; month headers sit under it.
- Your plans becomes a fixed-height scroll window; see item 16, which wins over anything here.
- Plan rows show the start time: "4:30 pm · SoFi Stadium".

## 11. Plan row lead
Shot: none. Mockup: none.
- When a plan's event is linked to one of her favorites by id, lead with status plus the favorite's short name ("Attending · UCLA FB"). Otherwise, status only. Never guess from the title.

## 12. City switcher search
Shot: `34-city-switcher-search.png`.
- Keep searching only cities that have events. Change the placeholder to "Search cities".

## 13. Change city on the Log sheet
Shot: `10-log-sheet.png`. Mockup: `mockups/build7-reference/04-log-sheet.png` (a copy of docs/build-7/mockups/04-log-sheet.png).
- Stale in the mock: the raised + in its tab bar (item 14 puts it flush with the other tabs); the note wins.
- Add the "Change city" link at the right of the "Today · date · city" line, reusing the existing city switcher. It changes the city for the Happening now list only. Search keeps covering every city.

## 14. Tab bar plus button
Shot: `01-explore-tabbar.png`, `01b-tabbar-closeup.png`.
- Move the + into the tab bar, flush with the other tabs, instead of raised. (Kylie: something was covering it in the raised position.) Keep it visually distinct as the main action, and keep a 44pt minimum tap target.

## 14b. Oxford commas everywhere
Shot: none. Mockup: none.
- Kylie's rule: every list of three or more in app copy uses the Oxford comma ("Attending, Watching, or Interested"). Sweep all UI strings, helpers, share cards, and empty states, and fix any that lack it. Add the rule to AGENTS.md / the copy rules doc so future builds follow it.

## 15. Season Tickets
Research: `docs/build-7-1/season-tickets-research.md`. Mockups: `docs/build-7-1/mockups/season-tickets/` (INDEX.md there; follow only files not struck through).

**Turning it on** (all in `mockups/season-tickets/`: `02-team-page-toggle.png`, `03-team-toggle-closeup.png`, `04-setup-sheet.png`, `05-setup-season-total-helper.png`, `17-team-page-toggle-on.png`)
- The team page gets a "Season Tickets" switch under Follow. Turning it on asks one question: **Full season** or **Partial plan** (`01-partial-plans-A-vs-B-r2.png`, option B).
  - Full season adds every home game, including preseason home games, as a plan set to **Attending**.
  - Partial plan opens the same game list with nothing checked; she checks the games she owns. No "tick weekends/weekdays" shortcuts in v1.
- Setup sheet (`04-setup-sheet.png`): default seat (section / row / seat), price per seat, per game (label it as her own ticket only), optional parking per game. Optional helper (`05-setup-season-total-helper.png`): "Paid for the season? Enter the total and number of games" fills the per-game price.
- Preseason home games are included by default. Playoff games are never added automatically (see Playoffs).
- Flex or credit plans with no fixed games are out of scope; she adds those games one at a time as today.

**Whole season at once**
- Turning it on adds the **whole season** from `team_schedules` (`src/data/teamSchedule.ts`), including games beyond the 120-day catalog window (`DAYS_AHEAD = 120`). Today plans attach to catalog events via `togglePlan(CrowdEvent)` in `personalLog.ts`, so this needs a way to hold plans for games the catalog doesn't have yet. The builder picks the approach (for example, create plans from `TeamGame` using the same `eventId` format the catalog will later produce, so they link up when the event arrives). It must:
  - show every season game in her plans right away;
  - link to the real catalog event once it exists, without a duplicate;
  - follow a game that moves date rather than duplicating it, and flag (not silently delete) a cancelled game.
  Explain the approach and its trade-offs in the report.
- Everything stays on the device, like other plans. No migration or SQL.

**Defaults and single games** (`06-season-games-page.png`, `15-edit-one-game.png`, `16-default-change-apply-prompt.png`)
- Each season game gets the default seat, price and parking as its Seat and Cost, which carry to the stub as plans do today. Parking lands as a Parking cost line.
- Editing one game's seat or price overrides the default for that game and shows an "Edited" mark, with "Reset to default".
- Changing a default asks "Apply to games not yet edited?" with "Apply to N unedited" first, "Apply to all upcoming" second, and Cancel. Past stubs never change.
- A Season Tickets page (from the team page, `06-season-games-page.png`) shows the defaults, past games, and upcoming games by month.

**Removing a game** (`12-remove-game-sheet-r2.png`, `13-removed-game-greyed-r2.png`, `14-removed-and-edited-closeup-r2.png`)
- Removing a season game keeps it in the season list, greyed, "Not in your plans", with one-tap Re-add. It doesn't become a stub, and its ticket and parking come off.
- Optional reason tag: Sold / Gave away / Skipped. Choosing Sold reveals an optional "Sold for $" amount. The amount shows only on the greyed game ("Sold · $85") and **never counts in Spend** or any cost total.

**Playoffs** (`20-playoff-prompt-and-two-teams-r2.png`)
- When the team schedule shows a home playoff game for a season-ticket team, Upcoming shows a card above Your plans: "Add as Attending" / "Not this one", seat prefilled from the default, no price.

**Turning it off** (`18-turn-off-confirm.png`)
- One confirmation with counts: "Removes N upcoming games. Your M past stubs stay, with their seats and prices." Past stubs are never touched.

**Builder's calls (Lean; default as written, record any change)**
- No limit on season-ticket teams; each team has its own switch and season page.
- Seat licenses and college donations are out of v1; she can add an "Other" cost on any game.
- Teams with no team schedule (Sidearm-only college teams) show the switch disabled with the reason (`22-sidearm-team-fallback.png`); single games can still be added.

## 16. Your plans scroll window on Upcoming
Mockups: `mockups/season-tickets/33-swipe-outside-box-primary-path.png` (main behaviour), `mockups/season-tickets/29-plans-window-3-5-rows-board.png`, `mockups/season-tickets/30-faves-sticky-end-state.png`, `mockups/season-tickets/34-touch-zones-closeup.png`, `mockups/season-tickets/28-plans-window-few-plans.png`, `mockups/season-tickets/31-faves-overlap-A-vs-B.png` (option A), `mockups/season-tickets/32-faves-overlap-closeup.png`.
- Your plans is a fixed-height window: **240pt tall, which is 3.5 rows at the drawn ~69pt** (three full rows, half the fourth under a bottom fade). It scrolls inside itself to show all her plans, season games included. No group row, no "N more" row, no show/hide switch. With 3 or fewer plans, or any list shorter than 240pt, the box is exactly as tall as its rows, with no inner scroll, fade, indicator or count (`mockups/season-tickets/28-plans-window-few-plans.png`).
- **A swipe that starts outside the box scrolls the page** (the 44pt "Your Plans · N" band strip, drawn uppercase; the Today divider with 22pt padding above and below, which the builder may adjust and records; YOUR FAVES and anything below). The box scrolls off the page right away, wherever its inner list is; she never has to scroll through her plans to get past it. No side gutter.
- A swipe inside the box scrolls the box; at the end of its list ("End of your plans"), further swipes move the page (normal scroll chaining; don't use `overscroll-behavior: contain`).
- Once the box is gone, YOUR FAVES pins at the top of the scroll area with the month header under it.
- Cues: bottom fade on the cut-off row, a top fade once scrolled, a thin inner scroll indicator, and the count in the band (all hidden when the list fits the box, as in the first bullet). Slim month labels inside the window when the month changes.
- Games already in Your plans also stay in YOUR FAVES. On those repeated rows, show a small filled plan mark (13pt, #005A9C action blue) beside the title using the existing toggle icons: ticket = Attending, TV = Watching, bookmark = Interested. Faves rows with no plan stay plain.
- **Locked:** 3.5 rows, a swipe that starts outside the box moves the page, and option A (the plan mark). **Builder's call (Lean; record it):** the 22pt divider padding and the 13pt mark size.
- Ignore the row count drawn in `mockups/season-tickets/20-playoff-prompt-and-two-teams-r2.png`: its INDEX says it now follows r3, so the 3.5 rows here win.
- **Builder's call (Kylie, Oct 23: leave to the builder):** whether season plan rows keep the small grey "Season" tag after the lead ("Attending · Dodgers · Season") and the seat ("· Sec 48") on the venue line, as drawn in `mockups/season-tickets/33-swipe-outside-box-primary-path.png` and the r2 playoff frame. The builder decides and records the choice and why in the gap report.
---

**History: what changed in the Oct 23 evening fold (context only; the items below win if anything here differs).** M3 Weather is now Locked as Flow X: weather is out of Local Competition, a slim strip expands inline into a card with Outdoor Venues, and outdoor lineup rows show a plain icon plus peak temp, which supersedes the early-Oct rule that limited per-venue degrees. M1's order follows, with the strip above the lineup instead of inside Local Competition. M26 Faves strip is Locked as build e3 with a #005A9C 1px tile border. M29 Calendar is Locked: every day uses its verdict color, past days show the faded color, weeks start on Sunday, and a legend row sits under the grid; the Your Year word pills get one color per verdict, with Cooked in ink and gold (M29 and §9 Verdict Colours), and their zero state stays Open. M7 is Locked with the Attended card at the bottom, and the slim row is recorded as considered, not chosen. M19 drops the seen counts on Teams & Artists and on the Edit favorites sheet (item 2) and keeps "App & Account". M15 is Locked (Kylie, Oct 23): the seed copies only a sample of her real events and dates, and everything else (stubs and stub details, costs, seats, plans, friends, reviews, notes, tags, Activity) is made-up random EXAMPLE data, clearly marked as example. M16 means no verdict ever shows "Estimated", and M5 loses its matching sentence. M39 carries her note and Locked exceptions (the 8px Away tag and the small weekday). M2 is widened to every heading, including "Your Stubs" and the sport names. M38 puts a sport line on every college game, football included. M14 and M11 are confirmed. M40 is new: a Temperature Units setting, with its placement Locked later the same night (Kylie, Oct 23): the second row of the "App & Account" group (below Account, directly above Crowd Size), not the profile card. The Builder prompt additions below are updated to match.

# Part 2: More Review Fixes (Kylie, Oct 23, Items M1 to M40)

Kylie answered the "7.1 more" review form on Oct 23, 2026 (39 items). Items here are numbered **M1 to M39** (the form's numbers) so they don't clash with items 1 to 16 above, and **M40** was added in the Oct 23 evening fold. **Where an M item and an item above disagree, the M item wins** (each case is named under "Conflicts").

- **Shot:** today's app, under `docs/build-7-1/shots/` (`shots/7-1-more/`, plus `shots/event-page/` for M33).
- **Mockup:** the chosen frame, under `docs/build-7-1/mockups/` (`mockups/7-1-more/`, `mockups/settings/`, `mockups/you/` including `faves-strip/`, `mockups/event-page/`). Each folder has Mock Mosaic's `INDEX-mosaic.md` or `INDEX.md` with captions. The Oct 23 evening folders `7-1-more/03-final/`, `7-1-more/29-calendar/`, `7-1-more/final-extra/` and `you/faves-strip/` have an `INDEX.md`. Frames filed under `7-1-more/03-rejected/` are the record of options considered, not chosen.
- `mockups/7-1-more/INDEX-mosaic.md` sections 1, 3 and 5 are superseded by M1, M3 and M5 here (its "Open-Air Today" caption for 03-d, the hourly strip moving down with Local Competition, the "Estimated from past schedules" lines and the 05-c icon recommendation). Read it for captions only.
- **Every item lists both.** The builder looks at the current shot next to the chosen mock before building and again when checking (see "Builder prompt additions").
- Mock numbers and names are EXAMPLE data. "Lean" in the mocks' own captions is Mosaic's label from when it drew them; the tag here wins.
- Every item is **Locked** unless it says Lean, Open, or Closed. Lean = a detail Kylie didn't settle; the builder decides and records the call. Open = a detail still waiting for her; build nothing for it. Where an item changed in the Oct 23 evening fold it reads "Locked (Kylie, Oct 23)".
- Each item ends with **Conflicts:** whether the decision changes a prior one (`docs/product/product-decisions.md` lines at main 4ea045ec, or earlier build notes). Where it supersedes a rule, update that doc in the same commit.

## Day page

## M1. Lineup First, Local Competition Under It
Shot: `shots/7-1-more/m01-day-oct21-top.jpg`, `m02-day-oct21-lineup.jpg`. Mockup: `mockups/7-1-more/01-b.png` (current drawn as `01-a.png`), for section order only. With the weather strip in place: `mockups/7-1-more/03-final/01-collapsed-day-page.png`.
- Order on the date page: header, verdict card, the weather strip (M3), the lineup ("Wednesday's Lineup"), then Local Competition, then Further Out, then the rest. The hourly weather strip no longer lives in Local Competition (M3, Locked Oct 23). No cited mock draws Further Out after Local Competition, so that placement comes from this text (the live shot `m03-day-oct23-today-full.png` shows it after the lineup).
- Stale in the mock: `01-b.png` still draws the Attended card above the lineup (M7 moves it to the bottom), the hourly strip inside Local Competition (M3 removes it), "pulls on 14 other crowds" (M6) and "Estimated from past schedules." (M16); the note wins.
- Why: people open a day to see what's on; the verdict card already gives the situation in one glance.
- Conflicts: reverses the build 5 date-page order (build-notes-5.md:919, :931) where Local Competition came first. No product-decisions line covers the order.

## M2. Title Case on Every Heading, Including Labels, Sub-Pages, and Sport Names (Locked)
Shot: `shots/7-1-more/m02-day-oct21-lineup.jpg` ("Wednesday's lineup"), `you-headers-faves.png` ("Your stubs"). Mockup: `mockups/7-1-more/01-b.png` shows "Wednesday's Lineup"; `mockups/7-1-more/03-final/02-expanded-card.png` shows "Today's Weather" and "Outdoor Venues".
- **Locked (Kylie, Oct 23):** Title Case on every heading, including "Your Stubs", the sport names ("Men's Basketball", "Women's Basketball") and every sub-page title. New headings from the Oct 23 mocks follow it ("Today's Weather", "Outdoor Venues", "Local Competition").
- Kylie chose the wider option: Title Case on **every section heading**, not just the lineup. Her notes on M25, M26 and M30 extend it to: "Your Stubs" and every similar heading, sport names ("Men's Basketball", "Women's Basketball", in every place they appear, including the lowercase "Men's basketball" forms), **sub-page titles**, and "Profile & Settings" with the ampersand (not "and"). M8 adds labels.
- Rule: capitalize every word except short joining words (a, an, the, and, or, of, at, in, on, to, for, vs.) unless first. Keep "&" where the name already uses it.
- Scope: headings, section and band titles, sub-page titles, back-link labels that name a page, labels (M8), sport names. Body copy, helper lines, buttons and empty-state sentences stay sentence case. Uppercase band styling (YOUR PLANS) keeps its CSS; fix the source string.
- **Heading list (every on-screen heading, title and label the notes name; the source string is Title Case):**
  - Day page: Wednesday's Lineup (and "{Weekday}'s Lineup"), Local Competition, Further Out, Today's Weather (and "{Weekday}'s Weather"), Outdoor Venues, About This Verdict (the ⓘ popup title).
  - Upcoming and Activity: Upcoming, Activity, Your Plans (band, drawn uppercase by CSS as YOUR PLANS), Your Faves (YOUR FAVES), Season Tickets (the page title and the team-page switch).
  - You: Faves, Your Stubs, Your Year, Recap, Events by Verdict, Edit Favorites, Teams · N, Artists · N, Venues · N (the groups on that sheet), Suggested, Browse by League.
  - Profile & Settings: Profile & Settings, People & Faves, Teams & Artists, Favorite Cities, App & Account, Account, Temperature Units, Crowd Size, Blocked, Your Events, Review Queue, Home City, Privacy.
  - Event page: Up Against, This Day, Your Stub (the line's lead), More Dates.
  - Statuses stay capitalized words (Attending, Watching, Interested), including in "Friends · {name} Attending". "Upcoming · 2 plans · 1 interested" (item 5) is a count line, not a heading.
  - Placeholders, buttons, links and helper lines stay sentence case ("Search cities", "Change city", "See all ›").
  - Stale in the mocks: sentence-case headings and row labels in `mockups/settings/05-dir-D-hybrid-previews.png`, `18-D-scrolled-pinned-header.png`, `10-faves-summary-row-closeup.png`, `20-B-cities-page-at-rest.png` and `mockups/you/07-headers-fix-closeup.png`; the note wins.
- Add the rule next to the Oxford comma rule (item 14b) in AGENTS.md / the copy rules doc.
- Conflicts: changes build-notes-5.md:923 ("'s lineup", sentence case) and sentence-case headings used across builds 5 to 7 (e.g. build 7's "Your stubs", "Your year", "Favorite cities", "Teams & artists"). Item 9 above ("title is just Your Stubs") reads "Your Stubs". No product-decisions line sets heading case.

## M3. Weather Report: Flow X (Locked, Kylie, Oct 23)
Shot: `shots/7-1-more/m03-day-oct23-today-full.png`, `m03-hollywood-bowl-stale-weather.png`. Mockup: `mockups/7-1-more/03-final/01-collapsed-day-page.png` (strip and row markers), `mockups/7-1-more/03-final/02-expanded-card.png` (the inline card), `mockups/7-1-more/03-final/03-row-closeup-spec.png` (row spec), `mockups/7-1-more/03-final/05-local-competition-no-weather.png`, board `mockups/7-1-more/03-final/board.png`, captions `mockups/7-1-more/03-final/INDEX.md`. Considered, not chosen: `mockups/7-1-more/03-rejected/03-round3-board.png` (marker forms) and `mockups/7-1-more/03-rejected/03-order-board.png` (lineup order options). The older directions `mockups/7-1-more/03-board.png` and `03-c.png` are superseded.
- **Flow X.** Weather is OUT of Local Competition. A slim 44pt strip sits under the day header block (between the verdict card and the lineup, as drawn) and reads "Los Angeles 74° / 59° · Outdoor 66° to 92° ›", with the city temp labeled as the city's ("Los Angeles" is the current metro's display name). It expands inline into a card ("Today's Weather") with the hourly view first, then "Outdoor Venues". The label is "Outdoor"; the early "Open-air" wording is rejected. The strip is collapsed on every visit.
- **Outdoor lineup rows** show a plain weather icon (sun, cloud, or rain, neutral grey) plus the peak temp, right-aligned on the venue line. Icon 16 x 16pt in #5B6778, 4pt gap to the temp, temp 12pt bold in #3F4B5C, 10pt in from the card edge, everything on one center line, and the temp's right edge matches the friction ring's. Indoor rows show nothing. No temperature color scale: every temp is the same ink and every icon the same grey. The thermometer chip form in the round 3 frames is rejected.
- **Per-venue weather for outdoor venues is required** because venues differ (the Rose Bowl can run about 20 degrees hotter than Inglewood). This SUPERSEDES the early-Oct rule that limited per-venue degrees to the selected venue and the event page.
- Sample spread (EXAMPLE data): Rose Bowl 92 sun, Hollywood Bowl 75 cloud, Greek Theatre 73 sun, Dignity Health Sports Park 66 rain. The "Rain 20%" wording in the card is example data too.
- The card's city-level sun and moon emoji stay in color (Kylie: do not grey them).
- **The card, as drawn in `mockups/7-1-more/03-final/02-expanded-card.png`:** the "Today's Weather" header with a blue "Hide ⌃" control (44pt, collapses back to the strip); city stats (Rain, Wind and Sunset tiles); "Los Angeles by the hour"; then "Outdoor Venues" rows (44pt, with venue, event and time, the icon plus peak temp, a chevron that opens the event, and the MAJOR tag beside the temp where it applies); and the footnote about city figures, peak venue temps and feels-like. Frames 02 and 03 and `mockups/7-1-more/03-final/INDEX.md` hold the rest of the spec.
- Stale in the mock: `mockups/7-1-more/03-final/02-expanded-card.png` draws "OUTDOOR VENUES" in capitals (the label CSS); the source string is Title Case, "Outdoor Venues". The note wins.
- **Peak temp** means the highest forecast temperature during the event's own start-to-end window at that venue (the feels-like figure the app already uses for weather, as the footnote in that frame says). If the end time is unknown, use the start time plus 3 hours. It is never the city's day high. The strip's "Outdoor 66° to 92°" runs from the lowest to the highest peak among that day's outdoor events.
- **Edge cases:**
  - No outdoor events that day: the strip shows only the city temp ("Los Angeles 74° / 59° ›"), with no "Outdoor" part, and the card has no Outdoor Venues list.
  - One outdoor venue (or every outdoor peak is the same): show "Outdoor 92°" with no range. When several events share that venue, use the highest of their peaks.
  - Past dates: show the saved temp under the existing weather rule (`src/data/weather.ts`, Oct 5: after the lock, the last forecast saved before it, never observed weather). If nothing is saved, hide the strip and the row markers.
  - Dates beyond the forecast range: hide the strip and the row markers.
  - An outdoor event whose venue has no forecast gets no row marker and no list row.
  - On dates other than today the card heading is "{Weekday}'s Weather".
  - Pre-app dates have only the reanalysis archive, which that Oct 5 rule labels estimated. **Builder's call (Kylie, Oct 23: leave to the builder):** lean, hide the strip for those days; record the choice and why in the gap report. (This is weather, not a verdict, so the verdict rule in M16 does not apply to it.)
- The day header's high and low ("Los Angeles · H:74° L:59°" above the verdict card) is not changed by this item. **Builder's call (Kylie, Oct 23: leave to the builder):** lean, it stays as it is today and follows the Temperature Units setting (M40); record the choice and why in the gap report.
- The lineup stays in start-time order with no area label. The area, band, sort, and filter options (A to E) were considered, not chosen (`mockups/7-1-more/03-rejected/03-order-board.png`).
- Units follow the Temperature Units setting (M40). At °C the strip reads "Los Angeles 23° / 15° · Outdoor 19° to 33° ›" and the Rose Bowl reads 33°.
- Bug B (M17, weather step access) stays as the data fix; the strip and markers need it.
- Conflicts: supersedes the early-Oct per-venue degrees rule (selected venue and event page only). product-decisions.md:10 parked a rich forecast; this Locked decision unparks it, so update that line in the same commit.

## M4. Other things that disappeared
Shot: `shots/7-1-more/m04-event-warriors-at-lakers.png`, `m03-hollywood-bowl-stale-weather.png`. Mockup: none.
- It was the weather: M17 fixes it. Nothing else to build.
- Regression check for the builder: after M17, open today's Greek Theatre and Hollywood Bowl pages and confirm the event page's weather card shows with today's forecast. The day-page strip and row markers are M3.
- Conflicts: none.

## M5. Verdict (i) Popup Rewrite, No Icons
Shot: `shots/7-1-more/m05-verdict-info-popup.png`. Mockup: `mockups/7-1-more/05-b.png` (**not** 05-c, which adds icons).
- Rewrite the "About This Verdict" popup (the code's title is "About this verdict" today; Title Case per M2, as `05-b.png` and the shot draw it) along the EXAMPLE draft, as two short paragraphs, no icons. Paragraph 1: "Settled the morning after. This verdict is frozen from the last schedule we saved before the day: 11 events from 3 sources." Paragraph 2: "It weighs each event's expected crowd against the others that overlap it, plus outdoor weather." Break the paragraphs as in 05-b. The counts come from the saved verdict, never from the mock.
- Stale in the mock: `05-b.png`'s backdrop draws "Warriors at Lakers is the biggest pull among 11 events." (06-b copy); ignore the backdrop, M6 sets that wording.
- Keep the "Revised {date} when we improved the method. It was {old}." line for redone verdicts.
- Nights with no saved verdict (see M16) never say "Estimated" (Locked, Kylie, Oct 23). The builder writes one sentence in the same voice, for example "It weighs each event's expected crowd against the others that overlap it, plus outdoor weather." It must not say "frozen", "saved" or "Estimated" (the quoted paragraph 1 would be false for those nights). Record the final text in the gap report.
- Conflicts: replaces the "Settled the day after the games." line in product-decisions.md:32 (the rule for the Revised line stays; its "Estimated from past schedules." rule is removed by M16).

## M6. Verdict lines: fix bug A, count only real rivals, reword the headline
Shot: `shots/7-1-more/m06-day-oct21-full.png`, `m01-day-oct21-top.jpg`. Mockup: wording Lean `mockups/7-1-more/06-c.png` (also `06-b.png`).
- Show the headline and detail from the **saved** verdict when the number shown is the saved one (needs M16).
- Count only real rivals: events with a 5,000+ crowd whose time window overlaps the headline event. Today N counts every event with any 5k+ rival anywhere in the day. Builder sets the overlap rule from the formula's existing overlap logic and records it.
- Reword: "pulls on 14 other crowds" goes. Lean wording (06-c, Mosaic's copy 2): "Biggest draw: Warriors at Lakers, 19k" / "4 other big crowds overlap it, 7 to 10 pm" / "11 events in Los Angeles · 3 sources". The event count must match the saved verdict (11 in the mock, not 15).
- Conflicts: none locked. "pulls on" was never Kylie's wording.

## M7. Attended Card Moves to the Bottom (Locked)
Shot: `shots/7-1-more/m01-day-oct21-top.jpg`. Mockup: `mockups/7-1-more/07-b.png` (current: `07-a.png`). Considered, not chosen: `mockups/7-1-more/07-c.png`.
- **Locked (Kylie, Oct 23):** the Attended card moves to the bottom of the date page (07-b), above Share and Compare, and **loses its gold edge** (gold is for crowd figures, and the Cooked verdict's number and word).
- Stale in the mock: `07-b.png` is for the Attended card's position and missing gold edge only. It still draws "Estimated from past schedules.", "pulls on 14 other crowds" and the hourly strip inside Local Competition, with no weather strip; the note wins.
- Kylie: "unless you have a better idea (if you do, mock it pls)". Mosaic's alternative is a slim "You Attended · Your stub ›" row under the verdict (`mockups/7-1-more/07-c.png`, drawn there as "You attended Cal Baptist at UCLA · Your stub ›"). **Considered, not chosen:** she picked B. Don't build 07-c. Mosaic's earlier lean (07-d) was dropped.
- Conflicts: none; the card's top position came from build 5 and wasn't a Kylie lock.

## M8. "Home Opener" and Title Case for every label
Shot: `shots/7-1-more/m02-day-oct21-lineup.jpg`. Mockup: none.
- Every event label is Title Case: "Home Opener", "Spring Training", "First Round", "Second Round", "Season Finale", and so on. One rule for all labels (it matches "Wild Card", "Final Four" and "Men's Basketball").
- Conflicts: changes the "Home opener" casing from labels round 3 (product-decisions.md:239). Same family as M2.

## M9. College games: "Cal Baptist at UCLA"
Shot: `shots/7-1-more/m09-event-ucla-mbb.png`, `m02-day-oct21-lineup.jpg`. Mockup: `mockups/7-1-more/38-b.png` (the same fix for other sports).
- Sidearm (school calendar) rows are titled with school names only, Away at Home: "Cal Baptist at UCLA". The sport goes on the label line ("Men's Basketball · Preseason"), never twice.
- Backfill the stored rows' **titles and team records** so past days read right. Titles only: don't recompute or re-save any verdict (M16 is forward-only).
- `38-b.png` draws the pattern for other games (Michigan St at UCLA with "Football", Cal Poly at Cal State Fullerton with "Women's Soccer"); the Cal Baptist example comes from this text and the shot `m09-event-ucla-mbb.png`.
- Conflicts: none; it applies product-decisions.md:243 (title is the matchup only). Also fixes the "vs." that broke the Away at Home rule.

## Upcoming and Activity

## M22. Upcoming is future-only
Shot: `shots/7-1-more/upcoming-past-above-today.png`. Mockup: `mockups/7-1-more/22-24-c.png` (current: `22-24-a.png`, board `22-24-board.png`).
- Upcoming shows nothing before today: no faves' past results above Today and no "↓ Today" pill. Soonest first. Her history stays in You, Your Stubs and Activity.
- Friends' upcoming plans move here from Activity (M24): faves-style rows in the same date-ordered list as YOUR FAVES, under the month headers, each with a "Friends · {name} Attending" line (Watching, Interested the same; the status words are Title Case). Respect each plan's privacy level, exactly as Activity does today.
- The "Today · {date}" divider stays between the Your plans window and YOUR FAVES (item 16). Only the "↓ Today" pill and the past rows go.
- Stale in the mock: `22-24-c.png` draws "Friends · Sam R. attending" in lowercase, and has no Your plans band, no YOUR FAVES header and no Today divider (the layouts of items 10 and 16 apply on top). It also draws the raised + (item 14). The note wins.
- 22-24-c still shows the old "No plans yet…" line; item 3 above sets the copy.
- Lean (Kylie didn't answer the sub-question): Activity shows all of her own stubs (no date limit) and friends' activity from the last 60 days (22-24-d footer: "Friends' activity from the last 60 days. All of your own stubs show.").
- Conflicts: build-notes-7.md:227 and :268 kept past results above Today as a Lean only; product-decisions.md:257 and :268 (timelines open the Explore List's way, with upcoming friends' answers ahead of the line) are superseded for Upcoming. Fits items 10 and 16 above (Your plans window stays).

## M23. No verdict unless someone attended, everywhere
Shot: `shots/7-1-more/activity-watched-verdicts.png`. Mockup: `mockups/7-1-more/23-b.png`.
- A row where nobody attended (only Watched) shows **no verdict pill**: no number, no "—", no away-city code. A row with at least one Attended (her or a friend) keeps its pill.
- Same rule in Activity, Your Stubs and the event page's stub lines.
- Conflicts: none. Applies build2-judgment-call-decisions.md:65 ("Watched never counts").

## M24. Activity looks backward only
Shot: `shots/7-1-more/activity-empty-today.png`. Mockup: `mockups/7-1-more/22-24-d.png` (current: `22-24-b.png`).
- Activity is a plain list, **newest first**, scrolling down into older. No Today line, no "Nothing coming up…" card, no future rows, no Today pill.
- Past Activity shows only Attended and Watched (already true); an Interested plan never appears in the past.
- Friends' upcoming Attending / Watching / Interested move to Upcoming (M22); nothing is lost.
- Conflicts: **reverses** build-notes-7.md:298 (Locked Oct 21: Activity opens on Today with the past above) and product-decisions.md:268 for Activity. Also changes **item 1 above**, which has been rewritten to match: friends' Interested plans show in **Upcoming**, not Activity; item 1's profile part stands.

## You page and Settings

## M11. Change Home: Revisit Inside the Settings Redesign (Locked)
Shot: `shots/7-1-more/favorite-cities-add.png`. Mockup: `mockups/settings/05-dir-D-hybrid-previews.png` (Home city row with Change in the profile card), `mockups/settings/20-B-cities-page-at-rest.png` (Home pinned first on the cities page).
- Stale in the mock: `20-B-cities-page-at-rest.png` draws the title "Favorite cities" and the back label "‹ Profile and settings"; build "Favorite Cities" and "‹ Profile & Settings". The note wins.
- No separate build. **Locked (Kylie, Oct 23):** revisited, keep as is. In the M19 redesign, Home City + Change sits where D draws it (the profile card), and the Favorite Cities page keeps Home pinned first with Change. Never in the city switcher. The new Temperature Units row (M40) is **not** in this card: it is the second row of the "App & Account" group, below Account and directly above Crowd Size (placement Locked, Kylie, Oct 23).
- Conflicts: none; keeps product-decisions.md:51 and :187 (Settings only).

## M13. Favorite cities on the city switcher: Closed
- Built Oct 22. Nothing to build. Reordering is M31; tighter rows are M14. Mark it done in BACKLOG.md.
- Conflicts: none.

## M14. City Switcher Rows: Shorter, 36pt (Locked)
Shot: `shots/7-1-more/city-switcher-kylie.png`. Mockup: `mockups/7-1-more/14-c.png`.
- **Locked (Kylie, Oct 23):** rows 36pt tall, regular-weight names (the current city bold), a slimmer search field, a lighter divider.
- **This is Kylie's explicit size choice. It wins over the 44pt tap rule here:** stacked rows can't take an invisible extension without overlapping. Don't "fix" it in M39.
- Conflicts: an explicit exception to product-decisions.md:218 (44pt tap area). Record it there.

## M18. Favorite teams & artists runs off the screen
Shot: `shots/7-1-more/settings-faves-overflow.png`, `m18-settings-current-overflow.png`. Mockup: `mockups/settings/10-faves-summary-row-closeup.png`, and the D row in `05-dir-D-hybrid-previews.png`.
- Stale in the mock: `10-faves-summary-row-closeup.png` draws sentence-case labels; build Title Case (M2, M19).
- Summary row: first two names + "+N more" and a count, two lines at most. "+N more" and the count are never cut; names cut with "…". Nothing on the page is wider than the screen (the page pans sideways today).
- Conflicts: none.

## M19. Profile & Settings Redesign: D, Hybrid With Previews
Shot: `shots/7-1-more/m19-settings-current-full-page.png`. Mockup: `mockups/settings/05-dir-D-hybrid-previews.png`, Temperature Units row `mockups/7-1-more/final-extra/2-c-alt-placement-settings-group.png` (annotated: `2-c-alt-placement-annotated.png`; Locked placement), `mockups/settings/18-D-scrolled-pinned-header.png`; boards `12-board-directions-compared.png`, `14-board-details.png`; sub-pages `07-B-drill-teams-and-artists.png`, `16b-B-teams-drill-pinned-header.png` (drawn in B; same page in D).
- Build D: profile card on top (avatar, name, handle · N people, Edit, Share, Home City + Change, Privacy row ›; no Temperature Units row in the card, see M40). Then a **People & Faves** group with previews: Followers (avatars + "+N", requests badge, ›), Teams & Artists (two pills + "+N more", count, ›), Favorite Cities (pills, home icon, count; opens its own page per M31, so it uses › and not the ⌄ that D draws on that row). Then the last group, "App & Account", in this row order: Account, **Temperature Units** (the second row, directly below Account and directly above Crowd Size; M40, Locked placement), Crowd Size.
- **The last group's label is "App & Account", not "Settings"** as the mock shows (Locked, Kylie, Oct 23). Rows, in order: Account, Temperature Units (M40; °F | °C segmented control), Crowd Size ›, Blocked, Your Events, Review Queue (admin only) ›, App. Row labels are Title Case (M2, M8), whatever case the mocks draw.
- **Locked (Kylie, Oct 23): Teams & Artists page: drop "N seen"** on every row and the "Seen counts every attended and watched stub." line. Kylie: it's the wrong place for that. Also drop "Seen N" from the Edit favorites sheet (item 2 above, mockup 64; EditFavoritesSheet.tsx:56 and :81). Sub-page titles are Title Case, and the page is "Profile & Settings" with the ampersand.
- Stale in the mocks (the notes win):
  - `07-B-drill-teams-and-artists.png` and `16b-B-teams-drill-pinned-header.png` still draw "12 seen", "3 seen" and "2 seen" on rows, and 07-B draws the "Seen counts every attended and watched stub." line.
  - `05-dir-D-hybrid-previews.png` draws ⌄ on Favorite Cities and "Settings" as the last group's label.
  - `18-D-scrolled-pinned-header.png`, `16b-B-teams-drill-pinned-header.png` and `19-board-pinned-header.png` draw "Profile and settings" without the ampersand, and sentence-case titles ("Teams & artists", "Favorite cities").
  - `05-dir-D-hybrid-previews.png`, `18-D-scrolled-pinned-header.png` and `10-faves-summary-row-closeup.png` draw sentence-case row labels ("Crowd size", "Your events", "Review queue", "Home city").
- Empty states and the summary-row rules from Mosaic's INDEX (`mockups/settings/INDEX-mosaic.md`, "Summary-row rules") apply. ⌄ opens in place for short sections (Account and Blocked keep the ⌄ as drawn), › opens a page for long ones.
- Conflicts: replaces build 7's one-page Profile & Settings with anchors (build-notes-7.md §9 step 12, product-decisions.md:258 side panel lineage). Mosaic's lean was B; Kylie chose D.

## M25. You page: section links on the right, in accent blue
Shot: `shots/7-1-more/you-headers-faves.png`. Mockup: `mockups/you/07-headers-fix-closeup.png`.
- "See all ›" and "Edit ›" sit at the right of their heading, smaller, regular weight, accent blue. Check every heading-link row (Your Year, Your Stubs, Faves).
- Stale in the mock: `mockups/you/07-headers-fix-closeup.png` draws "Your stubs" and "Faves" in sentence case (build Title Case; "Your Year" is not drawn there), and its fixed link looks heavier than regular; the note wins on case and weight. The mock is right for right alignment, 14px accent blue and the 44pt tap height.
- Headings in Title Case (M2): "Your Stubs".
- Conflicts: product-decisions.md:39 (Home headings as links, "No See all ›") was already superseded by build 7's "See all ›" rule; none new.

## M26. You Page Faves Strip: Build E3 (Locked, Kylie, Oct 23)
Shot: `shots/7-1-more/you-headers-faves.png`, `m26-faves-strip-current.png`. Mockup: `mockups/you/faves-strip/e3-white-card-light-tiles-6-edge-fix.png` (build this), long-name test `mockups/you/faves-strip/e2-white-card-light-tiles-13-long.png` (drawn without a tile border; add the #005A9C one), border comparison `mockups/you/faves-strip/round5-border-comparison-board.png`; captions in `mockups/you/faves-strip/INDEX.md` and `mockups/you/faves-strip/INDEX-round5.md`.
- Build e3: a white card like the Stubs card, holding light #D6E8FA tiles. Tiles are 60pt with 6pt gaps, one line per label with an ellipsis, as drawn (top 6 faves plus "See all N ›"). Each tile draws the name, the sport and a "Seen N" line.
- **Builder's call (Kylie, Oct 23: leave to the builder):** whether the tiles keep the "Seen N" line drawn in e2 and e3. The Edit favorites sheet drops it (M19). Default to the lean: drop it on the tiles too, since it is the same rule, unless the e3 mock clearly needs it. Record the choice and why in the gap report.
- Each tile has a 1px border in dark blue #005A9C (contrast 5.7 against the tile, 7.1 against the card). The e3 file draws a lighter #5F93CC border; the decision is #005A9C, shown as the "1px #005A9C" column on `round5-border-comparison-board.png` (the standalone g2 files, g2-005A9C-1px-6 and g2-005A9C-1px-13-long, are not in this bundle), and the decision wins over the file.
- Must be tested with long names (frame e2: Cal State Fullerton, LA Philharmonic and similar).
- M25's header-link fix and M2's Title Case still apply to this section.
- Conflicts: none locked; she picked e3 and the border. No product-decisions line covers the strip.

## M30. Pinned header on every sub-page
Shot: `shots/7-1-more/m30-settings-current-header.png`. Mockup: `mockups/settings/18-D-scrolled-pinned-header.png`, `19-board-pinned-header.png`.
- "‹ You" + the page title stay pinned at the top on Profile & Settings and every sub-page (Your Stubs, Your Year, Recap, the Settings sub-pages). Page-color background, no divider at rest, a thin divider and soft shadow once scrolled. Left-aligned, back link and title on one row.
- Titles are Title Case, "Profile & Settings" with the ampersand. The Settings sub-pages (Teams & Artists, Favorite Cities and the like) read "‹ Profile & Settings"; Your Stubs, Your Year and Recap read "‹ You".
- Stale in the mock: `18-D-scrolled-pinned-header.png` and `19-board-pinned-header.png` draw "Profile and settings" without the ampersand, sentence-case "Favorite cities" and "Teams & artists", and "Settings" as a group label; build Title Case and "App & Account". The note wins.
- Conflicts: none; product-decisions.md:240 (Back returns where you came from) still applies.

## M31. Favorite cities editor: compact rows, "+", drag to reorder
Shot: `shots/7-1-more/favorite-cities-add.png`. Mockup: `mockups/settings/20-B-cities-page-at-rest.png`, `20b-B-cities-page-scrolled.png`, `21-B-cities-mid-drag.png`, board `23-board-favorite-cities.png`.
- Favorite Cities opens its own page. Home pinned first (no handle, Change). Each favorite has ≡ on the left (drag to reorder) and a grey outline − on the right. Helper line: "Drag to reorder · sets the order in Explore". Then Search cities, then the add list: compact rows in regular weight with a blue + on the right.
- Stale in the mock: `20-B-cities-page-at-rest.png`, `20b-B-cities-page-scrolled.png`, `21-B-cities-mid-drag.png` and `23-board-favorite-cities.png` draw sentence-case "Favorite cities" and the back link "‹ Profile and settings"; build Title Case and "‹ Profile & Settings" (M30). The note wins.
- The saved order drives the Explore city switcher. Lean: offer VoiceOver Move up / Move down actions on the handle.
- Conflicts: none (product-decisions.md:187's "starred in the order starred" becomes "in her saved order").

## M40. Temperature Units Setting (Locked, Placement Included)
Shot: `shots/7-1-more/m19-settings-current-full-page.png`. Mockup (chosen placement): `mockups/7-1-more/final-extra/2-c-alt-placement-settings-group.png` and its annotated version `mockups/7-1-more/final-extra/2-c-alt-placement-annotated.png` (the annotated file on disk has no "-settings-group" in its name). Considered, not chosen (kept only as the control spec): `mockups/7-1-more/final-extra/2-a-temperature-f-default.png` (°F selected) and `2-b-temperature-c-selected.png` (°C selected). Also: close-ups `mockups/7-1-more/final-extra/2-d-closeups.png`, captions `mockups/7-1-more/final-extra/INDEX.md`; `mockups/7-1-more/03-final/04-settings-pointer.png` is cited for the labels, copy and the °C preview only (it draws a standalone card with a white selected half), never for placement or control look.
- **Locked (Kylie, Oct 23):** a "Temperature Units" row with a °F | °C segmented control in the Profile & Settings redesign (D hybrid), as the **second** row of the "App & Account" group (Account, Temperature Units, Crowd Size), directly below Account and directly above Crowd Size, as drawn in 2-c. Every degree value in the app follows it: the weather strip, the lineup row markers, Outdoor Venues, the card's hourly and city temps, the day header's high and low, and the event page (M3, M33).
- Default: °F for a US home. Until she taps the control, the default follows the home metro's rule (`usesCelsius(metroId)` and `degreesFor` in `src/config/metros.ts`:27-53 already show °C for Canada and Mexico); after she taps, her choice is stored. The builder picks where to store it, following the existing settings pattern.
- **Placement: Locked (Kylie, Oct 23).** The Temperature Units row is the second row of the "App & Account" group, directly below Account and directly above Crowd Size (mock frame `2-c-alt-placement-settings-group.png` and its annotated version `2-c-alt-placement-annotated.png`). It is **not** in the profile card: the profile-card frames (2-a, 2-b) are considered and not chosen, so build nothing from their placement. The grouped Preferences row in 2-d is also not chosen. Keep 2-a and 2-b only as the control spec: the control is 112 x 44pt, two 56 x 44pt segments with radius 22, the selected segment dodger blue with white text. A preview line "Example: Rose Bowl 92°F" flips to "Example: Rose Bowl 33°C", labeled Example because it is not her data. The profile card keeps Home City + Change and Privacy only.
- **Superseded captions:** the title and footer of `2-c-alt-placement-annotated.png` ("Alternative … Not the lean") and `mockups/7-1-more/final-extra/INDEX.md` ("Not confirmed, lean: inline row in the top profile card", and its "first row of the Settings group") are superseded. The Locked placement is 2-c, and the INDEX does not recommend the profile card. `mockups/7-1-more/03-final/04-settings-pointer.png` is for the labels, copy and °C preview only; its row subtitle "Applies to every temperature in the app." is not used (the subtitle is the Example line above).
- The mock reads "Temperature" and shows "Settings" as the group label (the 2-c frame and its annotated version); that label is stale and superseded, and the text wins: the row is "Temperature Units" and the group is "App & Account", and group and row labels are Title Case whatever case a mock draws. The control is 44pt with a blue selected fill on purpose; the existing `.segmented` (styles.css:554-590) is 38px.
- Conflicts: none. It adds a setting; the weather rule it serves is M3.

## Explore

## M27. Drop the week band
Shot: `shots/7-1-more/lineup-band.png`, `explore-list-full.png`. Mockup: `mockups/7-1-more/27-b.png`.
- Remove "This Week's Lineup · N Events" from the Explore List.
- Conflicts: drops the band added by build-notes-5.md:13 and :940-942.

## M28. Sticky day rows; the Today pill moves below them
Shot: `shots/7-1-more/explore-list-full.png`, `today-pill.png`. Mockup: `mockups/7-1-more/28-a.png`, `28-b.png`, `28-d.png` (the collision: `28-c.png`).
- Stale in the mock: `28-a.png`, `28-b.png` and `28-d.png` still draw the "This Week's Lineup · 39 Events" band that M27 removes, a Monday-first calendar (M29: Sunday first), and the Oct 24 Cooked cell in dodger blue (M29: ink and gold); the note wins.
- Each day row sticks to the top of the list until the next day row pushes it off, on a solid background so rows don't show through; its verdict pill sticks with it.
- The "↑ Today" pill moves down so it sits **below** the pinned day row instead of covering it (Mosaic's 28-d puts it 48px from the top of the list, so it sits below the pinned day row).
- Conflicts: none.

## M29. Calendar: Every Day in Its Verdict Color, Faded Past, Sunday First (Locked, Kylie, Oct 23)
Shot: `shots/7-1-more/calendar-cooked.png`. Mockup: `mockups/7-1-more/29-calendar/29-b-proposed.png` (the whole calendar), `mockups/7-1-more/29-calendar/29-d-closeup-lean.png` (close-up with the legend). Also in that folder: `29-a-current-markup.png` (the current shot with callouts), `29-e-closeup-same-data-shipped-styles.png` (today's styles on the same days), `29-f-contrast.png`, `board.png`, `INDEX.md`. The earlier frames `mockups/7-1-more/29-b.png` and `29-c.png` (today ring when today is Cooked) stay as the ring reference only. Word pills: `mockups/7-1-more/final-extra/1-b-fixed.png`, `mockups/7-1-more/final-extra/1-e-pill-closeup-three-states.png`, scope `mockups/7-1-more/final-extra/1-d-where-the-fix-applies.png`.
- This is the Explore List's week calendar (`WeekCalendar.tsx`, `.week-calendar-day`). The Calendar tab (`CalendarScreen.tsx`, `.cal-day`) already matches and gets no legend or fade change.
- Stale in the mock: `mockups/7-1-more/29-calendar/29-b-proposed.png` still draws the "This Week's Lineup · 39 Events" band under the calendar, which M27 removes; ignore it, and ignore the INDEX line about moving the week band.
- Every calendar day uses its verdict color: Chill #e4eef6 + ink number, Mild water + ink, Spicy paleBlue + ink, Brutal dodger + white number, Cooked ink + gold number. Cooked no longer sits on Brutal's dodger blue.
- Past days show the same verdict color faded: the fill is a color-mix of the verdict fill at 55% with the card, and the number stays at full ink. The opacity .62 rule is dropped. Exceptions: past Brutal switches its number to ink (instead of white), and past Cooked's fill is ink mixed 75% with the card (about #4B5462) so its gold number passes. Today and future days stay at full strength, and the today ring stays.
- **Weeks start on Sunday** (S M T W T F S), in one isolated commit that renames the Monday helpers: `src/data/cityList.ts` `mondayOf` and `weekOf`, the day letters in WeekCalendar.tsx, ExploreListScreen.tsx, and `getListWeek(metroId, monday)` in `data/index.ts`. CalendarScreen.tsx and StubsScreen.tsx are already Sunday-first, so this also makes the app consistent.
- A legend row sits under the grid (about 57pt): five swatch pairs (full, faded) labeled Chill, Mild, Spicy, Brutal, Cooked, with the caption "Each pair: Today and Ahead · Past" as in `mockups/7-1-more/29-calendar/29-d-closeup-lean.png`. Calendar day rows (`--cal-row`, styles.css about 8435) go from 43px to 44px.
- **Word pills.** Each verdict word pill (Chill, Mild, Spicy, Brutal, Cooked) gets its own color, the same as the tiles. Cooked is ink with a gold count and word and no longer shares Brutal's dark blue. Fix the "Events by Verdict" word pill on You (styles.css about 3378-3382, FrictionLadder.tsx:76) and the week calendar grouping (styles.css about 7275-7279, today state 7286-7290, and the comment at WeekCalendar.tsx:35). The reference is the big read tile colors, `.read-big.*`, at styles.css 4269-4273 (not a verdict pill). For the pills it is CSS only: replace `.word-pill.brutal, .word-pill.cooked` with five rules and add a 1px #76869b ring to every pill; `.word-pill` is used only at FrictionLadder.tsx:76. See §9 Verdict Colours.
- **Open:** the pill zero state. Mosaic proposes five plain white pills when there are no reads (`mockups/7-1-more/final-extra/1-c-zero-plain-white.png`); that would need `byWord` to keep count 0. Kylie hasn't decided, so build nothing for it.
- Known tradeoff: faded Mild looks like full Chill. Position tells past from future (everything before the today ring is past), and the legend carries the exact level.
- Kylie asked whether the other levels match their colors. The audit (Builder prompt additions, §9 Verdict Colours) found the week calendar's tiles and today state and the Your Year word pills lumping Cooked in with Brutal; fix all of them so every verdict surface uses one scheme.
- Conflicts: supersedes build-notes-4 (Oct 12) 1.4, "Monday-first (M T W T F S S)", and claude-build-plan-oct13.md:57. It also supersedes the build 4 note that kept past days plain grey, and the earlier line in §9 that kept the Chill, Mild and Spicy word pills plain white.

## M34. Further Out rows: drop the drive time
Shot: `shots/7-1-more/further-out-drive.png`. Mockup: `mockups/7-1-more/34-b.png`, `34-b2.png`.
- Stale in the mock: `34-b.png` and `34-b2.png` still draw the "This Week's Lineup · 39 Events" band that M27 removes (34-b2 otherwise matches this note); the note wins.
- Rows read "Venue · Town" ("Acrisure Arena · Palm Desert"), no drive.
- Toyota Arena is now inside Los Angeles (product-decisions.md:312, built in 105f2dfa), so WWE SmackDown belongs in the day's main list (34-b2). Confirm the live catalog shows that after a refresh; no new build expected.
- Conflicts: changes product-decisions.md:294 ("List rows keep their drive").

## M36. Same small gap above and below the hidden line
Shot: `shots/7-1-more/hidden-line-gap.png`. Mockup: `mockups/7-1-more/36-b.png`.
- Stale in the mock: `36-b.png` still draws drive times and WWE SmackDown in the Further Out rows (M34 removes them); use it for the 6px markers and spacing only.
- Both gaps around "N events outside your crowd size · Show" are 6px: drop the Further Out heading's top padding. Check every day with a Further Out block.
- Conflicts: none.

## M37. Today pill: same size as the Map's Today button
Shot: `shots/7-1-more/today-pill.png`. Mockup: `mockups/7-1-more/37-b.png`, `37-map-today.png`.
- Stale in the mock: `37-b.png` (the pill itself matches) still draws the "This Week's Lineup · 39 Events" band that M27 removes and a Monday-first calendar (M29); the note wins.
- Visible pill 30px tall, like the Map's Today button (13px type, lighter shadow), on Explore List and Your Stubs. Keep the 44pt tap area with the invisible extension.
- Why this happened: build 7 kept a 44px visible pill from the generic tap rule, although build-notes-4 V07 asked it to look like the Map's button. **The tap rule is about the tap area, never the visible size.**
- Conflicts: none; restores build-notes-4 V07.

## Data and naming

## M10. Hide add-on listings: Closed
- Add-ons are hidden (addOns.ts, wired into the Ticketmaster source). Nothing to build; mark it done in BACKLOG.md.
- Conflicts: none (product-decisions.md:289).

## M12. Type icons option C + 20k rounding: Closed
- Nothing to build; mark it done in BACKLOG.md.
- Conflicts: none (product-decisions.md:186).

## M16. Bug A: Freeze Past Verdicts, Going Forward Only (Locked)
Shot: `shots/7-1-more/m06-day-oct21-full.png` (shows a recomputed 6.4 with an extra note instead of the saved 5.3). Mockup: none.
- Fix the nightly writer so each saved snapshot carries its city, capture date and capture time where the reader looks for them. From the next run on, past days show their saved verdict.
- **Forward only.** Don't backfill or re-run history. Nights saved before the fix keep the recomputed verdict.
- **Locked (Kylie, Oct 23): no verdict ever shows "Estimated".** Remove the "Estimated from past schedules" wording everywhere (the popup in M5, the headline detail in M6, and the DateScreen.tsx condition in §8 Code pointers). **Scope:** this rule covers verdicts and verdict surfaces only. Crowd figures keep Estimated / Announced / Final per decision D04, so the "Estimated" in M33's "19,000 Estimated" and in M35 and §13 stays.
- Past verdicts may be recomputed (for example if the formula changes), but they must look final and locked to her. Once she says the formula is locked, truly freeze them; that is a later step, not part of 7.1.
- Conflicts: product-decisions.md:32 and build-notes-oct9 3.15 (past verdicts are frozen) are restored going forward; pre-fix nights still miss the saved verdict and show a recomputed one that must look final (list the pre-fix verdict question under "Questions for Kylie" in the report). The "Estimated from past schedules." rule in product-decisions.md:32 is superseded; update that line in the same commit.

## M17. Bug B: give the weather step its access
Shot: `shots/7-1-more/m03-hollywood-bowl-stale-weather.png`. Mockup: none.
- The nightly "Fetch weather" step gets the same Ticketmaster key the next step already has, so outdoor Ticketmaster shows (Hollywood Bowl, Greek Theatre) get a current forecast. This is the data fix behind the M3 strip and row markers.
- Conflicts: none.

## M20. No venue in a favorite's title at neutral sites
Shot: `shots/7-1-more/neutral-venue-in-title.png`. Mockup: none.
- "L 89–101 vs. Warriors" (keep "vs." at neutral sites); the row's venue line and city tag already name the place.
- Conflicts: none; applies product-decisions.md:38 (a neutral site names its city on the venue line).

## M21. One venue name per building: "Dodger Stadium"
Shot: `shots/7-1-more/uniqlo-field.png`, `dodger-stadium.png`. Mockup: none.
- Rows and pages show the app's own venue name (the matched venue record) instead of the feed's string, for every feed. Add a naming-rights alias list for strings that don't match ("UNIQLO Field at Dodger Stadium" → Dodger Stadium, "United Airlines Field at the Los Angeles Memorial Coliseum" → the Coliseum's record name).
- Conflicts: none; the LA events research already said "venue keeps the stadium names".

## M32. "New York City"
Shot: `shots/7-1-more/new-york-switcher.png`, `new-york-explore.png`. Mockup: none.
- The metro displays as "New York City" everywhere its name shows. The metro still covers NJ and Long Island venues. "NYC" and "New York" become search aliases.
- Conflicts: goes against the research recommendation (city-names-codes-answer.md:353, "keep New York"), which was never locked.

## M35. Crowd numbers on every event: research first, ship later (35b ships)
Shot: `shots/7-1-more/explore-unsized-rows.png`, `settings-crowd-unknown-size.png`. Mockup: for 35b only, the title and label line in `mockups/7-1-more/38-b.png`.
- **Don't build** the estimates, the "Up to N" ceilings or the 35c switch rename (35b is the Cal State Fullerton opponent fix below; 35c is renaming the unknown-size switch) yet. Kylie runs two research prompts first. The builder's only job here is to **strengthen those prompts** (Builder prompt additions › 13), not run them or build from them.
- **35b ships:** "Cal State Fullerton Men's Soccer" gets its opponent back: "{Opponent} at Cal State Fullerton", with "Men's Soccer" on the label line. Same fix as M9 and M38.
- Conflicts: none; product-decisions.md:291 (one unknown-size switch) stays as is.

## M38. Label Every College Game, Including Football (Locked)
Shot: `shots/7-1-more/sport-label-inconsistent.png`. Mockup: `mockups/7-1-more/38-b.png`.
- **Locked (Kylie, Oct 23):** every college and school game gets a sport label line under its title on every surface that shows the title with a label line (lineup rows, event page, Activity, Your Stubs, Upcoming and faves rows), no exceptions, Football included: "Football", "Baseball", "Softball", "Field Hockey" alone; gendered sports keep "Men's / Women's …". The short code for Football is FB (`SPORT_CODES`). Pro games unchanged (a label only for twin clubs).
- Fix the school-calendar titles that keep the sport in the title ("UC Irvine Women's Volleyball vs. …"): "{Opponent} at UC Irvine", sport on the label line, even when no team record matches.
- Conflicts: **overrides** the Oct 15 exemption in product-decisions.md:243 ("Football, baseball, softball and field hockey carry none"). Update that line.

## Event page

## M33. Event page redesign: event card first + a Your stub line (Lean)
Shot: `shots/event-page/100-current-reference-board.png` and `101`–`115` (each state today). Mockup: `mockups/event-page/93-lean-board.png`, `501`–`515` (the 13 frames), `516`–`529` (extra states), `91-comparison-board-first-screen.png`; captions in `mockups/event-page/INDEX-mosaic.md`.
- Lean (the default; record any change): Mosaic's A order (header, action, crowd, Up Against, weather, This Day, Your Stub, More Dates, footer), plus one compact "Your Stub" line under the status chip once Attended or Watched, on full catalog pages only ("Your Stub · Sec 101 · $166 · With {name} · Review · See ›", linking to the full card). Short pages (manual, GameOnly, further out) skip the line. Plans get no line.
- Copy rewrites the mocks made: crowd reads "19,000 Estimated" (no "~"), "WWE SmackDown" (no "Friday Night"), years, "Neutral site" and venues out of titles. Date and time line in every header; retractable-roof games note the roof.
- Watched pages show no This Day verdict (M23).
- Temperatures on the event page follow the Temperature Units setting (M40).
- The INDEX's "Day tiles avoid the near-black Cooked tile" is stale: Cooked is ink and gold (M29).
- Stale in the mocks (the notes win): `501-L-f01-pro-future-none.png`, `504-L-f03-pro-past-attended-rich.png`, `505-L-f04-pro-past-watched.png`, `506-L-f05-postseason-today-none.png`, `507-L-f06-neutral-future-none.png` and `511-L-f10-further-out-attending.png` draw "Home opener" in sentence case (build "Home Opener", M8); 504's This Day tile reads 6.4 with 15 events, a different set from M6 (the tile follows M6); and the near-black Cooked day tile in the INDEX-mosaic is replaced by ink and gold.
- Seats, cost and who-with show only to her, on her own page; they never reach any shared table (ground rules above).
- Conflicts: none locked; tabs (C) stay rejected, as the redesign notes already said.

## Test account

## M15. A Test Account Agents Can Sign Into (Locked)
Shot: none. Mockup: none.
- **Locked (Kylie, Oct 23): the spec is locked.** The builder **does** write the opt-in seed script and its docs, but never runs it against her data and never commits private data. Reuse the existing test account A. Opt-in seed only. The seed copies **only a sample of her real event history: the events and their dates, nothing more.** Each sampled event becomes an Attended or Watched stub for account A, keeping only the event and its date, with random EXAMPLE seat, cost, notes and tags. Everything else is made-up random EXAMPLE data, clearly marked as example. Never copy her real stubs, costs, seats, sale amounts, reviews or notes.
- **Made-up random EXAMPLE data for everything else.** The seed generates random example stubs and stub details, costs, seats, plans, friends, reviews, notes, tags and Activity, each clearly marked as example, on real catalog dates (LA plus a few other cities). It has enough variety to fill every view: friends, Activity, tags and the other views. None of it comes from her real data.
- What the builder builds: a seed script (extend `scripts/seed-test-accounts.mjs` or add a sibling) and short docs on how to run it, flags and what it writes. **Kylie runs the script herself.** It reads her real events from a local file she names when she runs it (for example her "Export my events" JSON, kept under the git-ignored `private/`), takes a sample, keeps only the event and its date, mixes in the generated random EXAMPLE rows, and writes only to test account A. Private data stays off the repo.
- The builder never opens her real data, never commits it, and never runs the script against her history. It tests with the dry-run and a made-up EXAMPLE export file only, never runs the write path, and never reads `private/`. No credentials in the repo or notes: the login stays in `private/test-accounts.json` for the script (Kylie's run reads it, not the builder) and in the vault for agents. If a step needs database changes, write it up in the gap report for Kylie to paste.
- Conflicts: makes an opt-in exception to "her own stubs never leave the device" (ground rules above; product-decisions.md:35) for this one test account, at her request, and only for the sampled event history (events and dates). Her real stubs, costs, seats, sale amounts, reviews and notes are never copied.

## Anything else

## M39. One Pass on Small Text and Tap Targets, With Exceptions (Locked)
Shot: the current frames, e.g. `mockups/7-1-more/01-a.png` (drawn as live) and `shots/7-1-more/m02-day-oct21-lineup.jpg`. Mockup: none.
- **Locked (Kylie, Oct 23):** one builder pass bringing text under 11pt and tap targets under 44pt up to the rules. Her note: "as long as it doesn't conflict with prior decisions; the rules are a bit strict for specific areas, so fine as long as it makes sense". The exceptions are **Locked** too: the Away tag at 8px and the small date-box weekday, plus the others in Builder prompt additions §10. List every exception in the gap report.
- Keep the look: grow tap areas with invisible extensions, not bigger visuals. The exception is the stacked lineup rows (§10): raise their real height with padding, because extensions would overlap.
- Conflicts: applies product-decisions.md:218; keeps the read-box exception (product-decisions.md:168) and M14's 36pt rows.

---

## Report
Create `docs/build-7-1/gap-report-7-1.md` at the start of step 1, update it after every step, and finish it at the end, in the format under "Builder prompt additions › Report" below. Besides that format, it covers: what shipped per item (1 to 16 and M1 to M40), the approach for season games beyond the catalog window, judgment calls, anything skipped, and any SQL for Kylie. Update MEMORY_HANDOFF.md (season tickets moves from backlog to shipped; M10, M12 and M13 close) and BACKLOG.md.

---

# Builder prompt additions (whole 7.1 build)

Build 7.1 for Fan/Friction. These instructions cover Part 1 (items 1 to 16) and Part 2 (M1 to M40). They carry everything from the build 6 prompt and build 7 §1, §9 and §10, plus fixes from the build 7 retro (next section).

## What build 7 taught (why some rules below are new)
- **A generic rule beat a decision.** The Today pill drew 44px because "44pt taps" was read as a visible size, although V07 said to match the Map's 30px button (M37). The Monday-first week calendar was flagged by the Push Pilot review and the repo check ("pick one"), then logged as "pre-existing, noted" instead of becoming a question for Kylie (M29).
- **Prior decisions weren't checked.** Step 6 gave her own Watched stubs a verdict tile ("Your own stub's read wins"), against "Watched never counts" (build 2) (M23).
- **The mock was read over its purpose.** The stub count stayed in the Your Stubs title because "the mock shows one" (item 9 above).
- **Nothing checked that things stayed visible.** The weather card disappeared from outdoor shows (M3, M4, M17). Settings shipped with a row 1,176pt wide that panned the page sideways (M18), and "See all" was jammed against its heading (M25), although step 12 and step 9 both took screenshots. Only step 3 compared its screenshots with a mock.
- **A Codex finding was rejected on precedent and came back.** Stage 1 #3 flagged name-only away teams from school feeds and was rejected. School-feed games without full team records are also behind the Fullerton and UC Irvine titles and the missing sport label lines (M9, M35b, M38).
- **Review stages ran late and aimed only at code bugs.** Stages 1 to 3 ran together after step 6, so fixes landed after later steps were built on them. No stage asked "does this match the decision and the mock?". Signed-in states were never seen (the test browser was signed out), and the phone checks went to Kylie instead.
- **The gap report listed what shipped, but not where it differed** from the mock or the decision. The differences surfaced in Kylie's review instead.

## 1. Setup
1. Read AGENTS.md first (UI copy rule, multiple-agents rule). Then read this file **fully** before touching code: it is the source of truth.
2. Put the 7.1 files in the repo at `docs/build-7-1/`:
   - `build-notes-7-1.md`
   - `shots/`
   - `mockups/`
   - `research-prompts/` (drafts; strengthen them per section 13, don't run them)
   - `season-tickets-research.md`

   `docs/build-7/mockups/` must already be in the repo (items 2, 10 and 13 cite it; three of its files are also copied to `mockups/build7-reference/`). If it is not there, ask.

   Before committing them, check they hold no private log data (costs, seats, other people's names), then commit them first. If a file the notes name is missing, stop and ask.
3. `git fetch origin`, and check that local main matches origin/main. Look at origin/cursor/* branches and open PRs for overlapping work. If you find any, tell Kylie before continuing.
4. Work directly on main: no branch and no PR. Stage files by name; never `git add -A` or `git add .`.
5. File:line references were taken at main **4ea045ec**. Find code by symbol and report any drift.

## 2. Rules
- **Git:**
  - Never force-push. Push to origin/main with a normal push, and only after `npm run build` passes for the commits being pushed.
  - No destructive git (reset --hard, branch deletes) without asking. Leave git history alone.
- **Private data:** don't read, copy or commit anything under `private/`. Keep people's names out of files, paths and commit messages.
- **No database work:** no Supabase migration, RLS change or SQL run. If a step seems to need one, put the SQL in the gap report for Kylie to paste.
- **Don't guess data:** no guessed capacities, opponents, venue names or crowd figures. M35 estimates are not built.
- **No exl-eng-framework files** in this repo.
- **Gate:** `npm run build` (type-check plus production build) before every commit. Also run the scripts that cover what you touched, e.g.:
  - `scripts/titles-check.mjs` for M8, M9, M20, M38 and M35b;
  - `scripts/event-types-check.mjs`;
  - `scripts/crowd-range-check.mjs`.

  Report anything that was already failing.
- **Commits:** one item or item group per commit, with a plain message naming the item numbers.

## 3. Labels and precedence
**Labels:**
- **Locked:** build as written. If something blocks it, flag it instead of changing it.
- **Lean:** your call; the lean is the default. Record what you chose.
- **Closed (M10, M12, M13) and research-first (M35 except 35b):** build nothing beyond what the item says.
- **Open (M29's pill zero state):** an Open detail gets no build. The "Seen N" line on the tiles (M26), the "Season" tag and seat on plan rows (item 16), pre-app weather days and the day header's high and low (M3) are the builder's call (Kylie, Oct 23), recorded in the gap report. M40's placement is Locked (the "App & Account" group, second row, above Crowd Size), not Lean.
- **Considered, not chosen** (M3's rejected weather options in `mockups/7-1-more/03-rejected/`, M3's `03-board.png` and `03-c.png` (superseded), M7's slim row in 07-c, M40's profile-card placement in 2-a and 2-b and its grouped Preferences row in 2-d): build nothing from them.

**When sources disagree, the higher one wins:**
1. The item's text in this file. A Part 2 item wins over a Part 1 item where it says so.
2. Kylie's earlier decisions (`docs/product/product-decisions.md`, earlier build notes), unless an item here supersedes them. When one does, update that doc in the same commit.
3. The chosen mock, for layout, order and hierarchy.
4. The code's established pattern, components and tokens.
5. Generic standards (11pt text, 44pt taps, platform conventions).

**What that means in practice:**
- **A generic rule never overrides a decided size or look.** The 44pt rule is about the **tap area**: grow it invisibly and never enlarge what's drawn because of it. Decided sizes that stay:
  - M14's 36pt rows;
  - M37's 30px pill;
  - the read-box words at 8–9px (product-decisions.md:168).
- **Before building an item, check the earlier decisions it touches** (search product-decisions.md for its subject). If an item, a mock or the existing code breaks a decision not named under the item's "Conflicts", follow the decision, build the rest, and record the case with file:line. Don't guess.
- **A mock is evidence of intent, not a spec.** Where a mock detail contradicts an item's text or a decision (counts in titles, "Settings" as a group label, "Profile and settings", the old "No plans yet" line), the text wins.
- **Notice a mismatch? Ask, don't park it.** If you notice an inconsistency the notes don't settle (like build 7's Monday-first calendar), list it under "Questions for Kylie" in the gap report. Don't let it sit only in the backlog.

## 4. Framing (from build 7 §1, still in force)
- **The mocks are a guide and North Star, not pixel locks.** Take type sizes and spacing from the app's tokens unless the item names a size. You see the whole codebase: reuse existing components, tokens and patterns (Timeline, FollowRow, ListBand, StubSheet, the filter-sheet frame, the settings building blocks, the `::after` tap extension).
- **The notes give the purpose and reasoning** for each item, so you can make good calls on what they don't cover.
- **Numbers in mocks are EXAMPLE data.** Never use one as a spec or test value. Names in mocks are EXAMPLE too.
- **Stale labels in mocks:** Mosaic's "lean · Not confirmed" boxes date from drawing; the tag here wins. Known stale bits:
  - "Settings" as the last group label in D (it's "App & Account");
  - "Profile and settings" (it's "Profile & Settings");
  - sentence-case headings and row labels (Title Case, M2);
  - "No plans yet…" (item 3 sets the copy);
  - the dark YOUR PLANS bar, the past results above Today and the old "Friends" tab in the build 7 `08-upcoming.png` (the bar is light, Upcoming is future-only, the tab is "Activity");
  - the raised + in the tab bar (item 14 puts it flush);
  - "Seen N" and the Seen footer in `64-favorites-edit-sheet.png` and on the Teams & Artists rows (both go; the tiles' "Seen N" is the builder's call, M26);
  - the "This Week's Lineup · 39 Events" band in 28-a, 28-b, 28-d, 29-b-proposed, 34-b, 34-b2 and 37-b (M27 removes it);
  - "Open-Air Today" and "Estimated from past schedules" in `mockups/7-1-more/INDEX-mosaic.md`;
  - "Alternative … Not the lean" on `2-c-alt-placement-annotated.png` and the profile-card lean in `mockups/7-1-more/final-extra/INDEX.md` (the Locked placement is 2-c);
  - "Day tiles avoid the near-black Cooked tile" (Cooked is ink and gold now);
  - "Temperature" as the row label in the final-extra frames (it is "Temperature Units"), and "Settings" as the group label there (it is "App & Account"; 2-c is the chosen placement frame, so the mismatch shows in 2-c itself);
  - the "Open-air" wording and the thermometer chip beside venue names in the early weather frames (`mockups/7-1-more/03-board.png`, `03-c.png` and the `03-rejected/` folder): rejected, the label is "Outdoor" and rows show a plain icon;
  - the e3 file's #5F93CC tile border (the decision is #005A9C, 1px).
- **Copy rules:**
  - App copy never uses "going", "~", "night" or "tonight"; say "Today". (This rule is for text on screen; these notes use "~" and "tonight's" freely.)
  - Weather uses the label "Outdoor" (the early "Open-air" wording is rejected). No verdict ever says "Estimated" (M16).
  - Titles are Away at Home ("vs." only at neutral sites).
  - Verdict words come from `src/config/scoreLabels.ts`.
  - Oxford comma in every list of three or more (item 14b).
  - **Title Case** for headings, sub-page titles, labels and sport names (M2, M8); the heading list is in M2.
  - Team naming as build 7 §4.
- **Colour:**
  - Blue is for action, gold for crowd figures and the Cooked verdict's number and word, violet for friction.
  - Verdicts follow one scheme everywhere (§9 below).
  - Money is ink.

## 5. Process for every item
Follow the standing loop: **freeze, build, argue against it, review against the freeze, judge, then push.**
1. **Freeze.** Before the step, write in the gap report:
   - the items in scope, each with its Shot and Mockup paths;
   - the decisions it touches (with doc lines);
   - what must **not** change.
2. **Build.**
3. **Visual check (required, every item with a Shot or Mockup).**
   - At 390 × 844, capture the changed screen. Put it beside the item's **current shot** and **chosen mock** and look at all three.
   - Write one line per item: "matches" or "differs: how, and why". Any difference goes in the "Not exactly as decided" table.
   - Check that no element is wider than the screen, no text is clipped, and nothing overlaps (sticky rows, the Today pill).
4. **Regression check (required).** On each screen the step touched, list what the current shot shows. Everything still shows unless an item removes it, and anything removed is named in "Removed or moved".
   - Always recheck: the weather card on an outdoor event page; the day-page weather strip and outdoor row markers; the verdict card and its (i); Further Out; label lines on a college game; the hidden-line "Show".
5. **Signed-in states.** If a state needs sign-in and you have no test login available to you, don't go looking for one. List the state under "For Kylie to check on a phone".
6. **Argue against it, review it against the freeze, judge, then commit.** Push only after `npm run build` passes.

## 6. Advisor and Codex (from build 7 §10, tightened)
Use both throughout, without stopping for Kylie. Call the advisor yourself. Reach Codex through the codex-rescue agent; don't use or wait for /codex:review or /codex:adversarial-review.

**Consult the advisor:**
- before writing code, on your stage plan and build order;
- before each Codex stage, on your approach;
- whenever you're stuck, about to make a call the notes don't settle, or tempted to change scope.

Record each call in the gap report: what you asked, what it said, and what you did.

**At each stage point:**
1. Commit.
2. Get a Codex read-only review of the stage's diff.
3. Fix what you accept and rerun `npm run build`.
4. Record every finding as accepted or rejected, with one line why.

**Rules for stages and findings:**
- **Finish a stage's review before building the next stage.** If Codex fails outright (unavailable, auth error, out of usage), keep building without it and list the skipped reviews at the top of the gap report so Kylie can run them later.
- **Don't reject a finding only because the code already worked that way.** Reject it only when it's out of scope or wrong, and say which. If a finding matches one build 7 rejected (name-only teams from school feeds; sheet focus), mark it **recurring**. Fix it if the item's scope covers it (school-feed team records are in scope for M9 and M38).
- **If the advisor and Codex disagree,** follow the notes and locked decisions first, then the safer option for privacy and data, and record the disagreement.

**Tell Codex:** "Review and diagnose only. Do not edit, create or delete files, run git commands, or touch Supabase. Report concrete bugs, privacy leaks, broken routes, type risks, and any place the diff departs from the item text, a prior decision named in the notes, or the chosen mock, with file:line." Also give it the stage's focus list (§7).

## 7. Suggested build order, with Codex stage points
This is a suggestion; re-slice if the code says otherwise. ⚠️ marks a risky step: keep it in its own commit.

1. **Docs.** Commit `docs/build-7-1/`.
2. ⚠️ **Pipeline, one commit each.**
   - M17: the weather step gets the Ticketmaster key (then M4's regression check).
   - M16: the snapshot writer, forward only.
3. ⚠️ **Naming data.**
   - M9, M35b and M38: school-calendar titles and label lines; backfill the stored archive's titles and team records only, with no verdict recompute.
   - M20, M21 (venue names + alias list) and M32.
   - Add titles-check cases for each.

   **Codex stage 1** (steps 2–3). Focus:
   - the backfill touches titles and team records only;
   - no saved verdict changes;
   - every college game gets a label line and the opponent survives the title length limit;
   - Away at Home everywhere;
   - the M16 writer's keys match what the reader looks up;
   - the workflow key is scoped to the one step.
4. **Copy sweep** (strings only): M2 and M8 Title Case, item 14b Oxford commas, the AGENTS.md copy rules.
5. **Day page:** M1, M7, M5 and M6, plus M3's weather strip, inline card and outdoor row markers (they follow the unit rule from M40: this step adds the stored setting and the `degreesFor` read, and until the Settings row lands in step 11 every degree uses the metro rule).
6. **Explore:**
   - M27, M28, M36, M37 and M34;
   - M29 verdict colours, faded past days, the legend, 44pt rows, and the Your Year word pills (§9).
7. ⚠️ **Week starts Sunday** (M29), its own commit.

   **Codex stage 2** (steps 4–7). Focus:
   - week maths (the week a Sunday falls in, month edges, time zones, the Explore list's week loading);
   - Cooked colours on every verdict surface, and past-day fade contrast;
   - the popup and headline counts come from the saved verdict;
   - sticky row and pill overlap;
   - no heading left in sentence case;
   - the weather strip and row markers: grey icon, one ink, "Outdoor" label, peak temp and the edge cases in M3, units follow M40, day-page order (strip, then lineup in start-time order, then Local Competition).
8. ⚠️ **Upcoming and Activity:** M22, M24 and M23, with items 1, 3, 5, 10, 11 and 16 from Part 1.

   **Codex stage 3.** Focus:
   - friends' plans in Upcoming respect each plan's privacy level, exactly as Activity did;
   - nothing friends planned is lost;
   - no verdict on Watched-only rows anywhere (Activity, Your Stubs, the event page);
   - Activity has no future rows;
   - Upcoming is future-only (M22), and the Today divider stays;
   - the Your plans window still behaves as item 16 says.
9. **Log sheet, search and Your Stubs:** items 4, 6, 7, 8, 9, 12 and 13 from Part 1, and item 14 (tab bar).
10. **Season Tickets** (item 15), sliced as its section suggests.
11. **Profile & Settings D and the You page:** M19 with M18, M30, M31, M11 and M40 (M40 adds the Settings row as the second row of the "App & Account" group, below Account and directly above Crowd Size, not in the profile card); then M25 and M26 (YouScreen.tsx:201-204 and :219 `heading-link-row`; `FavesStrip` at YouScreen.tsx:244), M14 and item 2 from Part 1.
12. **Event page:** M33.

    **Codex stage 4** (steps 9–12). Focus:
    - no element wider than 390pt;
    - summary rows never cut "+N more";
    - pinned headers on every sub-page;
    - drag reorder saves and drives the switcher;
    - the event page's stub line shows seats and cost only on her own page and never reaches a shared table;
    - old Settings links still land;
    - season games link to the catalog event without a duplicate, a moved game follows, a cancelled game is flagged, and Spend never counts a sale amount (item 15);
    - the M40 row sits second in "App & Account", above Crowd Size;
    - M26: long names ellipsize, the tiles carry the 1px #005A9C border, and the headings are Title Case.
13. **Cleanup:**
    - M39's size pass (§10);
    - M15's seed script and docs (§11), written but never run against her data;
    - doc sync: product-decisions.md lines superseded by M items, BACKLOG closes for M10, M12 and M13, MEMORY_HANDOFF.

    **Codex stage 5** (final). Focus:
    - M39 changes respect the exceptions;
    - tap extensions don't overlap neighbours;
    - the seed script never reads or commits real data on its own, copies only events and dates from a sample, marks all other rows as random EXAMPLE data, holds no credentials, and writes only to test account A;
    - docs match what shipped.
14. **Research prompts (M35, §13):** docs only, its own commit, and `npm run build` still passes.

## 8. Code pointers (main 4ea045ec; find by symbol)
**Day page and verdict**
- **M1:** DateScreen.tsx:320 (the Local Competition section), :335 ("{weekdayLong(date)}'s lineup"), :358-366 (Further Out).
- **M3:** the hourly weather strip now inside the Local Competition section moves out into its own strip above the lineup (find by symbol); the inline card and the outdoor row markers are new.
- **M40:** SettingsScreen.tsx (the "App & Account" group, a new second row below Account and directly above Crowd Size, not the profile card); the unit helpers `usesCelsius(metroId)` and `degreesFor` in `src/config/metros.ts`:27-53.
- **M5:** DateScreen.tsx:431 `AboutRead`.
- **M6:**
  - `src/data/formula/index.ts` ~62-69 (the headline's N);
  - DateScreen.tsx:244 (the "Estimated from past schedules." condition: remove the wording, per M16).
- **M7:** DateScreen.tsx:284-292 (the entry card and its title).
- **M8:** eventTitle.ts:382 `'Home opener'` (and its titles-check.mjs:30 case) plus the other label strings in eventTitle.ts.
- **M2 sport words:** competitions.ts:107 `levelPhrase` (used at personalLog.ts:229), quickAdd.ts, and the Edit favorites sheet (EditFavoritesSheet.tsx).

**School titles and venue names**
- **M9, M35b, M38:**
  - sidearmSource.ts:198 (the title; drop the program, Away at Home);
  - sidearmSource.ts:211 (the team record is set only when `homeId` is found: add the label's sport and gender even without a team record);
  - eventTitle.ts:29 `SPORT_CODES` (add the missing sports, e.g. football, baseball, softball, field hockey);
  - eventTitle.ts:103 `sportLabelOf` (returns null without a team record);
  - eventTitle.ts:334 `eventLabel`.
  - Stored rows are under `data/schedule-archive/`.
- **M20:** eventTitle.ts `teamRelativeTitle` (the neutral-site suffix); titles-check.mjs:94-123 has its cases.
- **M21:** `src/data/sources/mlbSource.ts`:221 (the feed's raw `venueName`); apply the same in every source.
- **M32:** `src/config/metros.ts`:119 (`name: 'New York'`); keep "New York" and "NYC" as search aliases.

**Pipeline**
- **M16:**
  - `scripts/catalog-write.mjs`:255-264: each snapshot is written with `metro_id` and `captured_on` columns, but `data: row` has no `metroId`.
  - `src/data/catalogCache.ts`:87 reads only `data`, and :110 keys on `${s.metroId}|${s.eventId}`.
  - Fix: put `metroId`, `capturedOn` and `capturedAt` into `data`.
- **M17:** `.github/workflows/schedule-archive.yml`:57-63 (Fetch weather has no `TICKETMASTER_API_KEY`; the next step has it at :69).

**Upcoming and Activity**
- **M22:** UpcomingScreen.tsx:36 `SPAN_DAYS` and :110 (rows), :213 (the past-side empty line).
- **M24:** ActivityScreen.tsx:124 (own lines), :278 `ownLines`, and its Timeline's future side; the friends' feed in profiles.ts.
- **M23:**
  - ActivityScreen.tsx:164 and :341-345 `ratingFor`;
  - personalLog.ts:1250 `ratingForEntry`;
  - read.ts:504 `ratingFromEntry`;
  - the stub tile on Your Stubs and the event page.

**You and Settings**
- **M25:** YouScreen.tsx:201-204 and :219 (`heading-link-row`); the same class on HomeScreen.tsx:189-272.
- **M26:** YouScreen.tsx:244 `FavesStrip` (`.faves-strip`, `.faves-strip-item`, `.faves-strip-name`; the "Seen N" span `.faves-strip-seen` at :254, styles.css about 10632), rendered at YouScreen.tsx:237 (symbols checked in the main clone).
- **M18, M19, M30, M11:**
  - SettingsScreen.tsx:143-158 (every section renders open; the header scrolls away), :199-201 (the faves section);
  - the "Seen N" rows (EditFavoritesSheet.tsx:56 and :81): drop them (M19, item 2).
- **M31:** personalLog.ts:1277-1299 (`favoriteCitiesOf`, `cityOrder`, `toggleFavoriteCity`; add a reorder setter); FavoriteCities.tsx (the list); AreaSwitcher.tsx:37 (reads the same order).
- **M14:** AreaSwitcher.tsx (rows, search field, divider).

**Explore**
- **M27:** ExploreListScreen.tsx:486 (the week band), :92 `weekWord`.
- **M28:**
  - styles.css:7378 `.explore-list-dayhead` (no sticky);
  - the pill at ExploreListScreen.tsx:492;
  - styles.css:7419 `.today-pill`.
- **M37:**
  - styles.css:7419 `.today-pill`, :8200 its `::after`;
  - the Map's `.day-nav-today` (styles.css:329, used at MapScreen.tsx:365);
  - used by ExploreListScreen.tsx:492 and Timeline.tsx:115.
- **M36:** styles.css:8786 `.hidden-line` (margin 6px 12px), :9786 `.further-out-head` (padding 8px 16px 0).
- **M34:** FurtherOut.tsx:21 (the intro line) and :73 (the drive text).

**Event page**
- **M33:** EventScreen.tsx block order; `mockups/event-page/INDEX-mosaic.md` lists each block per state.

**Week start (M29)**
- `src/data/cityList.ts`:18-23: `mondayOf`, with "Weeks run Monday to Sunday" and `addDays(date, -((weekday + 6) % 7))`.
- cityList.ts:25-28: `weekOf`.
- WeekCalendar.tsx:12: `WEEKDAYS = ['M','T','W','T','F','S','S']`; :46-47: "Monday first".
- ExploreListScreen.tsx:23, :222-223 and :242: the monday-named week loading.
- data/index.ts:155: `getListWeek(metroId, monday)`.
- Already Sunday-first: CalendarScreen.tsx:132 and StubsScreen.tsx:470.
- Rename the helper (e.g. `weekStartOf`) rather than leaving `mondayOf` returning a Sunday. This is one isolated commit.

## 9. Verdict Colours (Audit for M29)
The reference is the big read tile colors (`.read-big.*`, styles.css:4269-4273, theme values in `src/config/theme.ts`):

| Band | Background | Text |
|---|---|---|
| Chill | #e4eef6 | ink |
| Mild | water #D5E5F3 | ink |
| Spicy | paleBlue #9CC3E4 | ink |
| Brutal | dodger #005A9C | card #FFFFFF |
| Cooked | ink #0F1B2D | gold #FFD100 |

**Already match:**
- `.cal-day.*` (styles.css:1363-1386);
- `.log-score.*` (3587-3610, the read tile on rows, stubs, compare, recap, the event page and profiles);
- `.read-big.*`.

**Fix:**
1. **Week calendar (styles.css:7275-7279):** `.band-brutal, .band-cooked` share dodger and white. Give Cooked ink and gold. Drop the "Cooked takes Brutal's darkest blue" comment at WeekCalendar.tsx:35.
2. **Week calendar today (styles.css:7286-7290):** the is-today rule groups Cooked with Brutal (white number, dodger ring). Add a Cooked variant: gold number, today ring kept (29-c).
3. **Word pills (styles.css:3378-3382, `.word-pill.cooked`; Locked, Kylie, Oct 23):** `.word-pill.brutal, .word-pill.cooked` share dodger and white on You's "Events by Verdict" pills (FrictionLadder.tsx:76, the only user of `.word-pill`). Replace the pair with five rules, one per verdict, using the colours in the table above: Cooked is ink with a gold count and word. Add a 1px #76869b ring to every pill (the ring the read boxes already wear). CSS only. Mock: `mockups/7-1-more/final-extra/1-b-fixed.png`, `mockups/7-1-more/final-extra/1-e-pill-closeup-three-states.png`, scope `mockups/7-1-more/final-extra/1-d-where-the-fix-applies.png`, contrast `mockups/7-1-more/final-extra/1-f-pill-contrast.png`.
   - This replaces the earlier line that left the Chill, Mild and Spicy word pills plain white, and its question for Kylie.
   - **Open:** the zero state. Mosaic proposes five plain white pills when nothing is read (`mockups/7-1-more/final-extra/1-c-zero-plain-white.png`); that needs `byWord` to keep count 0. Build nothing for it until Kylie decides.
4. **Small:**
   - The week calendar's Brutal number uses `#fff` instead of `var(--card)`; use the token.
   - `.chip-friction` (2003-2006, plus the sheet variant at 1091-1095) and `.tag-friction` (1919-1926) are blue friction styles with no TSX users. Delete them (friction is violet, product-decisions.md:251).

**Past days (decided, M29):** WeekCalendar.tsx:146-148 tints past rated days with an opacity rule (styles.css about 8537). Replace it with the faded verdict color: fill at 55% with the card, full-ink number, except past Brutal (number in ink) and past Cooked (fill is ink mixed 75% with the card, number gold). This supersedes build-notes-4 1.4 (past days plain grey). Mock: `mockups/7-1-more/29-calendar/29-d-closeup-lean.png`.

## 10. M39: The Small-Text and Tap-Target Pass, With Exceptions
Kylie's note: "as long as it doesn't conflict with prior decisions; the rules are a bit strict for specific areas, so fine as long as it makes sense".
**Mosaic's list:**
- Text under 11pt: verdict word 9, date-box weekday 9, chip word 8, Away tag 8.
- Taps under 44pt: Back 21, (i) 22, lineup rows 38, "Show" 15.

A grep finds 16 font sizes of 8–10.5px in styles.css (e.g. `.cal-score` 1329, `.cal-word` 1355, `.stub-date-wd` 3180, `.log-score-word` 3581, `.read-word` 4282, `.follow-read .away-tag` 9428). Check each against the exceptions below.

**Keep (exceptions; the Away tag and the small weekday are Locked, Kylie, Oct 23):**
- **The read-box words at 8–9px** (verdict word, chip and read-tile word): product-decisions.md:168 and build 7 §4.
- **The Away tag at 8px (Locked):** it sits in the read tile's 40px slot, so treat it as a read-box word. Say so in the report.
- **The date-box weekday, kept small (Locked):** it stays at 9px inside the 44 x 44 tile. List it in the report.
- **The hourly weather glyph at 10.5px:** an icon, not text.
- **Timeline bars at 29px:** chart marks placed by time would overlap if extended. The lineup row is the tap path; the bars stay 29px.
- **City switcher rows at 36pt:** M14.

**Fix:**
- **Back and (i):** invisible 44pt extensions; the visuals stay.
- **Lineup rows:** raise the real row height to at least 44pt with padding (invisible extensions would overlap on stacked rows). Rows with the M3 temp marker stay on one center line; the marker adds no height.
- **"Show" on the hidden line:**
  - widen the tap area to the whole line;
  - extend it vertically only up to the neighbouring rows, never over them;
  - keep M36's 6px gaps.

  If that's under 44pt, list it as an exception.
- **Anything else under 11pt that isn't an exception:** fix it, or list it with the reason.

List every exception you keep in the gap report.

## 11. M15: The Test-Account Seed (Locked, Kylie Oct 23)
- **Build the script and its docs; Kylie runs the script herself.** Extend `scripts/seed-test-accounts.mjs` or add a sibling. It reads her events from a file path she passes on the command line (e.g. her "Export my events" JSON, kept in the git-ignored `private/`).
- **What it writes, to test account A only (Locked, Kylie Oct 23):**
  - a sample of her real Attended and Watched events, as **events and dates only** (a flag sets the size); each sampled event becomes an Attended or Watched stub for account A, keeping only the event and its date, with random EXAMPLE seat, cost, notes and tags;
  - **never** her real stubs, costs, seats, sale amounts, stub details, plans, friends, reviews or notes;
  - everything else is made-up random EXAMPLE data, clearly marked as example: stubs and stub details, costs, seats, plans, friends, reviews, notes, tags and Activity, on real catalog dates (LA plus a few other cities), with enough variety to fill every view (friends, Activity, tags and the other views). Test account A is reused; the seed is opt-in only.
- **Idempotent:** it replaces only its own rows, like the current script.
- **Prints a dry-run summary first,** and writes only after a confirm flag.
- **You never run it against her data, never open her export, and never commit any of it.** Test it with the dry-run and a made-up EXAMPLE export file you write yourself; never run the write path and never read `private/`.
- **No credentials** in code, notes or commits. The script keeps reading the login from `private/test-accounts.json`; agents get it from the vault. Database changes, if any, go in the gap report as SQL for Kylie.

## 12. Report (`docs/build-7-1/gap-report-7-1.md`)
Keep a running progress log at the top so a later session can resume. Then:

1. **Skipped reviews** (Codex or advisor that failed), if any.
2. **What you did, per item** (1 to 16 including 14b, M1 to M40), with commit hashes.
3. **Not exactly as decided:** one table row for every place the build differs from an item's text, a prior decision, or the chosen mock, however small. Columns:
   - item;
   - what was decided or drawn;
   - what shipped;
   - why;
   - easy to change? (yes/no).

   An empty table means you checked and found none. Say so.
4. **Visual checks:** per item, the after-shot path and "matches" or "differs" (differences also go in 3). For M40, compare against `2-c-alt-placement-settings-group.png` (the second row of "App & Account", directly above Crowd Size), and list the stale "Settings" and "Temperature" labels there as differences.
5. **Removed or moved:** everything visible that is gone or moved, each tied to its item.
6. **What you didn't do, and why** (pending, closed, research-first, not chosen, conflicts).
7. **Conflicts between the notes and the code,** with file:line.
8. **Advisor calls:** what you asked, what it said, what you did.
9. **Codex findings:** per stage, accepted or rejected, one line why; mark recurring ones.
10. **Checks run,** with results; anything already failing.
11. **Superseded rules updated:** each doc and line changed (e.g. product-decisions.md:243, :294, :32, :10, :239, :218, :257 and :268; build-notes-4 1.4; the early-Oct per-venue degrees rule, whose line you find in product-decisions.md).
12. **For Kylie to check on a phone:** signed-in states you couldn't see.
13. **Research prompts (M35):** paths of the two strengthened prompts and a short list of what you changed in each and why.
14. **Manual steps for Kylie, in order:** SQL to paste; the M15 seed run.
15. **Questions for Kylie.** Don't stop to ask during the build unless something is destructive or unsafe. Include the pre-fix verdict question (M16), and anything else the notes leave unsettled.
15a. **Builder's-call decisions.** List each builder's-call decision and why: the "Seen N" line on the Faves strip tiles (M26), the "Season" tag and seat on season plan rows (item 16), weather for dates before the app has data (M3), and the day header's high and low (M3).
16. **Season games beyond the catalog window:** the approach and its trade-offs (item 15).

## 13. M35 research prompts: strengthen them, don't run them
Two drafts sit in `docs/build-7-1/research-prompts/`: `01-arts-theater-classical-fill-rates.md` and `02-ncaa-per-school-attendance-sources.md`. Kylie wants you to return stronger versions, written the way this repo does research.
- First read AGENTS.md "Research docs" and the other rules about research (city-neutral, verify facts against current sources, inputs must be simple), then read several existing prompt and answer pairs in `docs/research/topics/` and `docs/research/second-opinions/` (e.g. `concert-venue-figures-research-prompt.md` and its answer, and the expected-draw prompts) to match their structure and what made the good answers good.
- Then rewrite each prompt so it is grounded in the live code that will use the answer (`expectedDraw.ts` `showDraw` / `calibratedDraw`, `read.ts` `knownSize`, how venue capacities are stored) and in the decisions: estimates must stay honest ("Estimated", "Up to N" for a room's ceiling), friction floor rules stay unchanged, no guessed capacities, and it must cover every city, not just LA. Each prompt should ask for sourced figures with links and dates, ranges, how confident the answer is, and a clear output format (a table the build can use), and should say what not to return.
- Save them in the repo's research layout, under `docs/research/topics/`: `arts-fill-rates-prompt.md` and `ncaa-attendance-sources-prompt.md` (each answer will go beside its prompt later). Delete nothing; the drafts stay in `docs/build-7-1/research-prompts/`.
- If your advisor or Codex is available, have one of them critique each rewrite once before you commit it. Note the main changes in the gap report (section 12, item 13).
- **Don't run the research, don't fetch sources, and build nothing from it.** Kylie runs the prompts and the answers come back in a later build.
- Commit them as their own step (docs only, `npm run build` still passes).

