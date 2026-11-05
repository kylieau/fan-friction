# Build 7.2 Notes

## Start Here (Builder Prompt)

You are Claude Fable building Fan/Friction build 7.2 on `main`. Read this whole file before coding. Work straight on `main`, one commit per item group, stage files by name, run `npm run build` before every commit and push. No Supabase migration or SQL without putting the SQL in a report for Kylie. Never read `private/` or `.env`. Her stubs, plans, costs, and seats never leave the device.

**This file is the source of truth for 7.2.** Where it changes a 7.1 lock (`docs/build-7-1/build-notes-7-1.md`), this file wins. Mockups are in `docs/build-7-2/mockups/`; start from `mockups/INDEX.md` and build only frames marked FINAL.

**Build in this spirit (Kylie, Nov 4):** for every item, use the locked decision and the full discussion under it (contemplations, rejected alternatives, open questions, builder calls, mock paths). Do not ship from the one-line pick alone.

**Priority build targets locked Nov 4 (details in "Nov 4 Locked Mock Picks" below):**
1. **R1a** Activity rows: Fact List behind a dropdown chevron. FINAL mocks: `mockups/activity-rows/r2-final/` (13pt glyph, invisible 44pt tap target). Second tap target per row is accepted.
2. **R2a** Event page Activity card: Your Stub Is The Hero. Build exactly the mock (`mockups/activity-card/round2/eA-*.png`). Her note: "really do love this".
3. **R2b** Date page Activity card: by event, capped at 3 (`mockups/activity-card/round2/dA-*.png`).
4. **R3a** Crowd ceilings: option C wording with **"cap"** (capacity), not "max". Apply wherever a crowd ceiling shows. FINAL: `mockups/crowd-ceilings/round3/`.
5. **R4a / R4b / R4h** Getting There: all three surfaces as one path (frame 15), area names only, hidden on past dates (one-line traffic note in the event overview if that night was bad). Whole feature behind a Traffic/Roads Settings switch. Quote under R4a; build so it makes sense, not mock-copy only.
6. **R5a** Your Plans rows: FINAL direction is r3 match Activity (`mockups/upcoming-plan-rows/r3-final/`). Detail line placement C (`mockups/upcoming-plan-rows/r5-detail/column-C.png`). Read the full evolution; do not build superseded r1/r2 plan-row frames.
7. **R6a** Add Seat for plans stays deferred.
8. **R7d** Map day totals include events Crowd Size hides (same as Event Types).
9. **Stub From Your Faves:** long-press (C) if buildable, else swipe (B). Toggles (A) rejected. Optional Stub It button is a builder call.
10. **Watching Season:** sibling of Season Tickets; quiet one-line rows; postseason auto-added; season watch record card (sample numbers in mocks).

Also ship the already-locked Oct 30 sections (A to I) that are not gated, the Builder Tasks (weather plan, I6 ceilings research check), and the Builder Decides picks (record each choice in this file). Known small 7.1 fixes Mosaic spotted: team page "no verdict" score uses an em dash, and the sheet close button is 36pt. Consider fixing them.

**Copy rules:** Oxford comma always, no em dashes, Title Case headings and labels, "Outdoor" never "Open-air", no "going" or "night" copy, no "Estimated" on verdicts.

---

Status: **Locked for building (Nov 4, 2026), with research and builder-decide items still open.** Items collected from the Oct 26 to 27, 2026 review form Kylie answered v3 (`ff-review-oct26-v3`, exported Oct 30, 2026 at 11:28 AM PT): 108 answered, 81 confirmed, 12 changed, 15 something else. On Nov 4 she answered the open mock picks (slim form `ff-review-nov4-open10`, exported Nov 4, 2026 at 5:46 PM PT / `2026-11-05T01:46:17.920Z`) and the round 3 redraws with Mock Mosaic. Items marked Locked below are hers. "Open, Not For Building" and "Builder Decides" still list what waits on research or a builder call. Where an item changes an earlier locked decision in the build 7.1 notes (`docs/build-7-1/build-notes-7-1.md`), this file wins once the item is Locked. Mockups live in `docs/build-7-2/mockups/` (see its INDEX for FINAL vs superseded).

How to read an entry: the id in each heading (A1, B1a, R1a, and so on) is the form card id. "Shot" is the built screen or crop the card showed. "Mockup" is the drawn frame. Mock paths in this file are relative to `docs/build-7-2/` (for example `mockups/crops/a1-slab.png`). A few research scratch paths still start `/workspace/ff-claims/`. Ask Kylie for a copy if your checkout cannot see them. Standing rule (Kylie, Nov 4): give the builder (Claude Fable) as much context as possible. Every item records the locked decision plus what was discussed: her latest contemplations and leanings, open questions, alternatives she rejected and why, things left to the builder, and the mock file paths.

## 1. Event Types: Research Before the Taxonomy Locks (Exploring)
Shot: none. Mockup: none yet. The settings screen waits for the locked taxonomy.
- **Exploring, not locked (Kylie, Oct 27).** Event Types is a standing setting in Settings, a sibling of Crowd Size. Like Crowd Size, it shapes Explore, the map, day page lineups, and Local Competition. It never shapes Upcoming or Activity. Her plans, stubs, and her friends' activity always show, even when their type is off. Verdicts and crowd counts still include hidden events, so a day reads the same either way.
- **Kylie tentatively accepts the nine proposed top-level types** (Sports, Concerts & Music, Theater & Comedy, Family Shows, Festivals & Fairs, Conventions & Expos, Parades & Road Events, Pop-Ups & Watch Parties, Other) as a working list. Sports also carries the levels Pro, Minor League, College, and High School.
- **Festivals and any further splits are deferred to the research below.** Do not move festivals or split any type until the research reports.
- **Do not build the setting, its screen, its storage, or any filter until Kylie locks the taxonomy.** This item is research only.
- **Builder task, in this order:**
  1. **Write the research prompt you would want to run, and show it to Kylie before you run anything.** `docs/build-7-2/research/builder-research-prompt.md` is an optional draft: use it, change it, or replace it. You may have Codex run the work (follow the Codex stage rules in Builder prompt additions › 6, and give Codex the read-only rules below word for word).
  2. **Run it read-only.** No commits, no Supabase, never read `private/`. Scratch scripts and output go outside the repo.
  3. **Check the nine types and the levels Pro, Minor League, College, and High School against what the app's data already tags** (`src/data/eventTypes.ts` and the nightly schedule archive). Start from `docs/build-7-2/research/taxonomy-research.md` and re-check its numbers instead of trusting them.
  4. **Compare how Ticketmaster, SeatGeek, and Eventbrite categorize events.** Cite only pages you opened, and mark the rest unverified.
  5. **Decide where the 207 "Event" rows go**, and where the concerts with no genre go (about 195 in the starting data).
  6. **End with a final taxonomy table and up to 10 choice questions for Kylie.** Each question is a choice, with your lean beside it.
- Settled in the starting data (verify, do not reopen): the type is worked out when an event is read, and nothing is stored. The setting would store only hidden keys, so new types appear switched on. Untagged events default to Other, shown.
- Conflicts: none locked. Crowd Size today does not filter Local Competition (the "answer B" note in `DateScreen.tsx`), and Event Types will, so the research must note what that does to the Crowd Size rule. The starting data also shows Crowd Size does not protect favorites, which is a separate question for Kylie.

---

# Kylie's Answers, Oct 30, 2026 (Review Form v3)

Short paths used below (all under `docs/build-7-2/mockups/` unless noted): `mockups/crops/`, `gap-shots/` (was `mockups/gap-shots/`), `favorite-cities/`, `event-types/` (was `mockups/event-types/`), `night-story/`, `onboarding/`, `activity-rows/`, `activity-card/`, `crowd-ceilings/`, `getting-there/`, `upcoming-plan-rows/`, `stub-from-faves/`, `watching-season/`, and `plans-add-seat/`. See `mockups/INDEX.md` for FINAL vs superseded. Older absolute `/workspace/ff-claims/` paths in this file mean the same frames, now copied into `mockups/`.

## Section A: Upcoming Screen Fixes

### A1. Two-Level Faves Band (Locked)
Shot: `mockups/crops/a1-slab.png` (built left). Mockup: `docs/build-7-1/mockups/season-tickets/28-plans-window-few-plans.png`, `30-faves-sticky-end-state.png`, and `32-faves-overlap-closeup.png`.
- **Locked (Kylie, Oct 30 form A1):** YOUR FAVES is the darker band (33pt, `#C9DAEE`) over a paler month strip (28 to 29pt, `#E3EDF8`), about 61pt together while pinned, instead of the built flat 80pt slab of two same-color 40pt bands.
- Conflicts: **overrides** the "same light band" wording in 7.1 note item 10 (the mocks win here, by her pick). The Your Plans band stays 44pt (A8).

### A2. Faves Rows Full Width, No Card (Locked)
Shot: `mockups/crops/a2-faves.png` (built left). Mockup: `docs/build-7-1/mockups/season-tickets/29-plans-window-3-5-rows-board.png`.
- **Locked (Kylie, Oct 30 form A2):** Faves rows run full width like the Plans rows: no inset card, no 16pt side margins, no radius, no shadow.
- Conflicts: none. This applies 7.1 note item 16 (no side gutter).

### A3. Chevron and Verdict Tile Spacing (Locked)
Shot: `mockups/crops/a3-edge.png` (built left, mock 28 right). Mockup: `docs/build-7-1/mockups/season-tickets/28-plans-window-few-plans.png`.
- **Locked (Kylie, Oct 30 form A3):** widen to the mock spacing: the chevron about 8pt after the verdict tile and about 19pt from the screen edge (built: 1.9pt and 4pt). Suggested build: a 72px tap area with the chevron 10px in from the edge.
- Conflicts: none. H9 keeps the verdict tile at 40pt, so the tile itself does not grow.

### A4. Plan Lead Matches the Game, Not the School (Locked)
Shot: `mockups/crops/a4-rows.png` (callout 5, the faded row). Mockup: mock 28 rows.
- **Locked (Kylie, Oct 30 form A4):** fix the favorite-match bug. A plan's lead names the favorite that matches the game itself, never another team from the same school (the built row reads "Attending · UCLA Men's Basketball" over "North Florida at UCLA WBB").
- **Not locked:** whether "WBB" leaves the title. Her note asks for the opposite shape. See Open, A4. Leave plan titles as built until she answers.
- Conflicts: M9 and M38 (sport never in the title) stay the rule for now, and her A4 question may ask for an Upcoming exception.

### A5. Plan Rows About 69pt, Window About 240pt (Locked)
Shot: `mockups/crops/a5-row.png` (built 73pt left, mock 66pt right). Mockup: `docs/build-7-1/mockups/season-tickets/29-plans-window-3-5-rows-board.png`.
- **Locked (Kylie, Oct 30 form A5):** trim plan rows to about 69pt plus the 1pt rule, so the plans window is about 240pt (3.5 rows, with the fade). The window follows the row height, with no separate window fix.
- Conflicts: none. This applies her 7.1 note (about 69pt, 240pt).

### A7. Plan Marks Stay Outlines (Lean)
Shot: `mockups/crops/a7-mark.png` (built outline left, mock filled right). Mockup: mocks 31 and 32 draw a filled mark. Do **not** follow that part.
- **Lean, pending Kylie (form A7):** one plan mark style across the app, and it is the outline. Keep the ticket, TV, and bookmark plan marks as outlines everywhere (as built in `UpcomingScreen.tsx:489-491`, and matching the Activity and Your Stubs icons). Show plan state with the `#005A9C` action blue and the lead word (Attending, Watching, Interested), never with fill. The TV icon's hard-coded 16pt still gets the 13pt size fix.
- Why: fill already carries meaning. Filled means Attended and outline means Watched on the Your Stubs calendar (`StubsScreen.tsx:507,516`) and Your Year (`YourYearScreen.tsx:98-108`). Filled means on, selected, or following on the favorite star, the Map activity chip, the Following filter, the Follow button, and the Map | List switch. A filled ticket on a plan would read as Attended.
- If she agrees: fix the `LogRow.tsx:17-18` comment (it says a "filled" mark means logged, but the icons render as outlines), and drop "filled" from 7.1 item 16 (build-notes-7-1.md line 140).
- Conflicts: **would change** 7.1 item 16 ("a small filled plan mark") and mocks 31 and 32.

## Section B: 7.1 Gap Review

### B1a. Favorite Cities Settings Row: Count Line (Locked)
Shot: `mockups/favorite-cities/01-before-built-5.png` and `02-before-built-0.png`. Mockup: `mockups/favorite-cities/05-option-c.png` and `07-states-bc.png`.
- **Locked (Kylie, Oct 30 forms B1a, B1, and B1p):** option C, the Count Line. A second line under "Favorite Cities" with the house icon and "Los Angeles · 5 favorites". **No pills and no separate badge**: the count in the line is the count. The line cuts a long Home name with "..." but never cuts the count. Nothing on the Favorite Cities page changes.
- B1 and B1p are closed: Kylie doesn't remember the mock she had in mind and said to take the best shot. This Count Line is that shot.
- This retires the collapsing 50% pill (the B1 bug). Add a one-city and a zero-city test shot.
- Conflicts: none. The count rule is set in B1d.

### B1b. Explore Switcher: Fixed-Height Dropdown That Scrolls (Locked)
Shot: `mockups/favorite-cities/08-before-switcher-9.png`. Mockup: closest is `mockups/favorite-cities/09-e1-capped-dropdown.png`, without its More Favorites row. Her version is not drawn yet.
- **Locked (Kylie, Oct 30 form B1b, something else):** keep the one-button dropdown. The list is a fixed height that shows Home plus 4 favorites (B1c), and the rest of the favorites scroll inside that box. **No "More Favorites" link and no sheet.** Search and "Edit favorite cities" should be reachable without scrolling through every favorite, since hiding the edit link is the built bug. Mosaic draws the exact layout first (Open, B1b).
- Conflicts: replaces Mosaic's E1 lean. The switcher rows stay 36pt (M14 exception).

### B1c. Dropdown Cap: Home Plus 4 (Locked)
Shot: as B1b. Mockup: `mockups/favorite-cities/09-e1-capped-dropdown.png` and `13-favorite-cities-page.png`.
- **Locked (Kylie, Oct 30 form B1c):** the visible height is Home plus 4 favorites. It is a fixed height, per B1b. The saved order on the Favorite Cities page decides which 4 show first ("Drag to reorder · sets the order in Explore" stays true).
- Conflicts: none.

### B1d. Which Count Includes Home (Locked)
Shot: built Settings row (badge 6 for Home plus 5). Mockup: `mockups/favorite-cities/13-favorite-cities-page.png`.
- **Locked (Kylie, Oct 30 form B1d, changed from the lean, resolved with B1p):** two counts, one rule each:
  - **The Favorite Cities page header keeps "Favorites · 6"**, counting Home plus favorites, as built and as she picked in B1d.
  - **The Settings line counts favorites only** ("Los Angeles · 5 favorites"), because it names Home first and then counts the others. It never shows a 6.
- The Settings row's built badge goes away (B1a). Write both rules in the gap report so neither gets "fixed" to match the other.
- Conflicts: none.

### B1e. Settings Row With No Favorites (Locked)
Shot: `mockups/favorite-cities/02-before-built-0.png`. Mockup: `mockups/favorite-cities/07-states-bc.png` (option C at 0).
- **Locked (Kylie, Oct 30 form B1e):** at 0 favorites the line reads "Los Angeles · Add a city", with "Add a city" in blue, like "None yet · Add teams & artists".
- Conflicts: none.

### B1f. Explore Switcher at 0 Favorites (Locked)
Shot: none. Mockup: `mockups/favorite-cities/14-explore-0-favorites.png`.
- **Locked (Kylie, Oct 30 form B1f):** with no sheet in B1b, the 0-favorite switcher is unchanged: Search, Home, and Edit.
- Conflicts: none.

### B2. Fix the Problem Tap Targets and Tiny Words (Locked)
Shot: `mockups/gap-shots/tap-targets-under-44.png` and `mockups/gap-shots/m37-map-today.png`. Mockup: none. Looks barely change.
- **Locked (Kylie, Oct 30 form B2):** fix these in the G4 sweep:
  - **Type:** raise the 7px day-strip words to the 9px floor (the Map score word and the Explore day strip verdict words).
  - **44pt invisible tap areas** (vertical only where neighbors are close, never overlapping): the year select (22 to 30), the recap chip (28), the Map day step arrows, header date link, and activity chip (30), the Explore header round buttons (32 to 36), the Upcoming and Activity header Filter and Search (36), the Hide Mine chip (36), the Map Feels and Legend buttons (36), the stub "Add a review, who you went with..." row (223 by 32), and the Favorite Cities outline minus buttons (28: a mis-tap removes a favorite).
  - **Bug:** the clipped distance text on E4 ("Dignity Health Sports Park ·") shows in full.
- Everything else on the B2, B1i, and H12 lists is an allowed exception. G4 lists them.
- Conflicts: none. This applies M39 and product-decisions.md:218 as rewritten in G4.

### B3. Plan Lead Abbreviation: "UCLA FB" (Locked)
Shot: `mockups/gap-shots/item-10-16-upcoming.png`. Mockup: none.
- **Locked (Kylie, Oct 30 form B3, changed from the lean):** the Upcoming plan lead uses the short code: "Attending · UCLA FB", per her 7.1 note item 11. Use `SPORT_CODES` (FB is already the Football code there, M38).
- Sport label lines elsewhere (Your Stubs, Activity, lineup rows, event page) keep the full words ("Football") under M38 and H10.
- Conflicts: the lead shape is still open (A4 and A6 notes), so build "FB" only into whatever lead shape she settles. Record the item 11 naming in the gap report (B6).

### B5. Weather Sentence and Roof Note: Defer to the Weather-Data Build (Locked)
Shot: `mockups/gap-shots/m03-weather-card.png` and `mockups/gap-shots/m33-event-page-future.png`. Mockup: 7.1 mock 02 (M3) and the M33 event page mock.
- **Locked (Kylie, Oct 30 form B5):** ship without the M3 forecast sentence and the M33 roof note. Both arrive with the weather-data build (also G7).
- Her note asks for a plan first: see Builder Tasks for 7.2, task (a).
- Conflicts: none. M3 and M33 stay Locked as designs, only their timing moves.

### B6. Gap Report Cleanup (Locked)
Shot: `mockups/gap-shots/process-gap-report-stale.png`. Mockup: none.
- **Locked (Kylie, Oct 30 form B6):** in its next pass the builder fixes the 7.1 gap report: the Codex stage lines that contradict each other (lines 3 and 52 to 53 against 54 to 57, and 531), the missing Oct 24 evening commits (59ec513f, 606ec1be, 663da922, 1a42c78b, and 3f803114) in the progress log and "Checks run" (lines 495 to 502), and the stale rows (the calendar legend, removed Oct 24, and the Season tag and seat reasons, about row 229). Also record the B7 calls (weather right after the venue name, approved Oct 25, and the stale comment near styles.css line 11573) and the B3 naming.
- Conflicts: none.

## Section C: Event Types

**Locked as answers, still gated by §1:** do not build the setting, its screen, its storage, or any filter until the §1 research reports and Kylie locks the taxonomy (C3 and C4 are open). These answers are the rules the build follows once she does.

### C1. Full Screen Under Crowd Size (Locked)
Shot: none. Mockup: `mockups/event-types/01-settings-row-all-on.png`, `02-settings-row-some-off.png`, and `03-event-types-screen.png`.
- **Locked (Kylie, Oct 30 form C1):** Event Types opens a full screen, not a sheet. Its Settings row sits directly under Crowd Size, so Temperature Units stays the second row. The row value reads "All On" or "N Off".
- Conflicts: none.

### C2. Favorites Always Show (Locked)
Shot: none. Mockup: `mockups/event-types/05-day-page-hidden-line-collapsed.png`.
- **Locked (Kylie, Oct 30 form C2):** events of a favorite team, artist, or venue always show, even when their type is off (as plans, stubs, and friends' activity already do).
- She did not say whether Crowd Size should start protecting favorites too. **Do not change Crowd Size** ask her.
- Conflicts: new behavior. Crowd Size today can hide a favorite (§1 Conflicts).

### C5a, C5b, and C5c. Sports Levels (Locked)
Shot: none. Mockup: `mockups/event-types/03-event-types-screen.png`.
- **Locked (Kylie, Oct 30 forms C5a, C5b, and C5c):** the level switches apply to every sport (one College switch hides every college game a game shows only when both its level and its sport are on). Minor League stays its own switch, separate from Pro. High School is hidden until a data source exists.
- Conflicts: the mock draws High School as a switch hide it.

### C6. Types With No Events Are Hidden (Locked)
Shot: none. Mockup: `mockups/event-types/04-event-types-screen-end.png`.
- **Locked (Kylie, Oct 30 form C6):** a type with no events (today Parades & Road Events, and Pop-Ups & Watch Parties) is hidden until events exist, not shown greyed.
- Conflicts: the mock draws both rows as normal hide them.

### C7. Genre Unknown Can Be Switched Off (Locked)
Shot: none. Mockup: `mockups/event-types/04-event-types-screen-end.png`.
- **Locked (Kylie, Oct 30 form C7):** Genre Unknown (about 195 concerts) is a genre switch like the others, so it can be turned off.
- Conflicts: none §1 step 5 still decides where those concerts sit.

### C8. New Users See Everything (Locked)
Shot: none. Mockup: none.
- **Locked (Kylie, Oct 30 form C8):** every type, level, and genre starts on. Only hidden keys are stored, so new types appear switched on.
- Conflicts: none.

### C9a and C9b. The Hidden Line (Locked)
Shot: none. Mockup: `mockups/event-types/09-hidden-line-closeup.png`.
- **Locked (Kylie, Oct 30 forms C9a and C9b):** Event Types alone reads "N events hidden by Event Types · Show". When Crowd Size and Event Types both hide events, show one combined line ("23 events hidden by your settings · Show") a row hidden by both counts once, and one Show reveals everything.
- Conflicts: none the Crowd Size wording ("N events outside your crowd size") stays for Crowd Size alone.

### C10. New Event Sources Later: A Recorded Limitation (Locked)
Shot: none. Mockup: none.
- **Locked (Kylie, Oct 30 form C10):** no new feeds now. Event Types ships on today's data.
- **Record as a limitation** (her note): parades, road races, street fairs, high school sports, and conventions at non-venue sites have no events, because the feeds only bring events at known venues. Put that line in the gap report and in the product notes. Each new source (Eventbrite's category feed, permit and closure calendars, race calendars, the festival list, fan-added events) needs its own approval later (cost and the public-data-only rule).
- Conflicts: none ties to C5c and C6 (those types stay hidden).

### C11a and C11b. Local Competition and Totals (Locked)
Shot: none. Mockup: `mockups/event-types/08-day-page-local-competition.png` and `07-day-page-hidden-revealed-end.png`.
- **Locked (Kylie, Oct 30 forms C11a and C11b):** Local Competition hides the bars of events hidden by Event Types too, and the lineup's Show reveals them there as well. Map day totals and chip counts **include** hidden events, like the verdict, so every number on a day agrees.
- Conflicts: **changes** the "answer B" rule in `DateScreen.tsx` (Local Competition deliberately unfiltered) for Event Types §1 asks the research to say what that means for Crowd Size. The Map totals today drop events Crowd Size hides C11b settles Event Types only. **Nov 4 (R7d):** Map day totals include events Crowd Size hides too, same as Event Types. An earlier flag that R7d conflicted with R4h was wrong they do not conflict.

### C12 and C13. One Setting, Everywhere (Locked)
Shot: none. Mockup: `mockups/event-types/03-event-types-screen.png`.
- **Locked (Kylie, Oct 30 forms C12 and C13):** one Event Types setting covers Explore, the map, day lineups, Local Competition, Further Out, and search (search is filtered the same way Crowd Size filters it). There are no separate map, list, or Further Out switches.
- Conflicts: none.

## Section D: The Story Section (Night Story)

The section title is open (D2). Until Kylie names it, call it "the story" in code and notes, and keep the built title as it is.

### D1. Short Recap (Locked)
Shot: none (built but empty). Mockup: `mockups/night-story/01-big-game-lean-A.png`.
- **Locked (Kylie, Oct 30 form D1):** version A, a short recap: about three sentences, one paragraph.
- **Builder: consider X (Twitter) and other social posts as a source** (her note: she finds X the most accurate account of what happened, more than articles). Say what is possible and what it costs in the plan for D4a. Nothing is built from X until she approves.
- Conflicts: the Oct 4 lock says no screenshots or embedded posts. A post can still be a cited text link. Ask her before showing post text in the app.

### D3. Placement: Under Up Against, Above This Day (Locked)
Shot: none. Mockup: `mockups/night-story/01-big-game-lean-A.png`.
- **Locked (Kylie, Oct 30 form D3):** the story sits under Up Against and above This Day, so the reason comes before the verdict. If Getting There is ever built, it goes under whichever of Crowd, Up Against, and Getting There exist.
- Conflicts: none. This matches the Oct 4 lock.

### D4a. A Tool Drafts, a Person Approves (Locked)
Shot: none. Mockup: none.
- **Locked (Kylie, Oct 30 form D4a, changed from the lean):** a tool drafts each story from its sources, and a person edits and approves every one before it goes live. Voice: plain, factual, no hype, in the app's own words. Every claim is backed by one of its source links.
- Her note: the biggest "writer" (source) should be X and other social media. See Open, D1 and D4a.
- Conflicts: **overrides** "hand-seed the early ones" in the Oct 4 lock.

### D4b. Biggest Verdicts and Sold-Out Events First (Locked)
- **Locked (Kylie, Oct 30 form D4b):** the first stories go to the biggest verdicts and sold-out events. Shot and mockup: none. Conflicts: none.

### D4c. After the Event Only (Locked)
- **Locked (Kylie, Oct 30 form D4c):** a story is a recap written after the event, with no previews. Shot and mockup: none. Conflicts: none. The preview job would belong to Getting There, which is not approved (E1).

### D4d. Cap: About 60 Words and 3 Source Rows (Locked)
Shot: none. Mockup: `mockups/night-story/01-big-game-lean-A.png` (about 58 words).
- **Locked (Kylie, Oct 30 form D4d):** about 60 words and up to 3 sources. Her note: keep it succinct, and lead with the most notable facts.
- Conflicts: none.

### D4e. No Story, No Block (Locked)
Shot: none. Mockup: `mockups/night-story/05-no-story.png`.
- **Locked (Kylie, Oct 30 form D4e):** with no story the whole block is left out: no card, no empty line, no "add one" prompt, even on a big verdict.
- Conflicts: none. This matches the Oct 4 lock.

### D4f. Spot-Check After Live, Ideally Automated Multi-Model Checks (Locked)
- **Locked (Kylie, Oct 30 form D4f, changed from the lean):** stories go live after the D4a approval and are spot-checked afterwards. Her note: the checks should be done by several models, ideally automated. How that runs is open (Open, D4f). Shot and mockup: none.
- Conflicts: none locked. The risk the form named (a wrong story seen first) is hers to accept.

### D4g. Phone Browser, Plus a Weekly Broken-Link Check (Locked)
- **Locked (Kylie, Oct 30 form D4g, changed from the lean):** source links open in the phone's browser. An automatic weekly check finds broken links and hides the broken row (the story stays). Shot and mockup: none.
- Conflicts: none. Keep the check out of the app. It runs where the stories are stored, never against Supabase without Kylie's OK.

### D5. Keep the Inline 14pt Source Line (Locked)
Shot: the built story styling. Mockup: `mockups/night-story/01-big-game-lean-A.png` draws 44pt rows. Do **not** follow that part.
- **Locked (Kylie, Oct 30 form D5, changed from the lean):** keep the built single inline line of 14pt source links, with no 44pt rows.
- Conflicts: an exception to the 44pt tap rule (product-decisions.md:218). List it with the G4 exceptions. Give each link the largest invisible tap area that does not overlap its neighbors.

## Section E: Getting There

**Approved to build (Kylie, Nov 4; R4a), behind a Settings switch.** The Oct 30 answers below stay as the rules the build must follow. On Nov 4 she picked all three surfaces as one path (round 2 frame 15), area names only (R4b), and she wants the whole feature gated by a "Traffic/Roads" style setting on the Settings page. See **Nov 4 Locked Mock Picks › R4a** for her note (quoted), past-date behavior (R4h), and the builder attention she asked for. The earlier "not approved" line is superseded by R4a.

### E3 to E14. Getting There Rules (Locked, Feature Not Approved)
Shot: `mockups/crops/e-traffic-wireframe.png` (the Sept 30 wireframe), and `docs/build-4/live-screens/k-traffic.png` for E7. Mockup: none. Mosaic draws after E1 and E2.
- **Locked (Kylie, Oct 30 forms E3 to E14):**
  - E3: "Getting There" on the day and event pages, and "Traffic" on the map switch.
  - E4: the cue words are Light, Busy, and Heavy (no "Skip"). Cut points (Light below 3, Busy 3 to 6, Heavy above 6) are placeholders for the mock.
  - E5: soft areas (blobs) first, and road corridors later.
  - E6: their own three blues, no verdict colors, and no red, orange, or yellow in the layer.
  - E7: a quiet date shows one plain sentence, never an empty map. A past date is labeled "How the roads were estimated" and never re-scores.
  - E8: no longer exit window in the first version, and a one-line venue note where sourced (Hollywood Bowl, Greek Theatre, Rose Bowl, Dodger Stadium, and Weingart Stadium are flagged).
  - E9: every covered city at once, with a one-line note where data is thin.
  - E10: **release the story (Section D) now, as its own small piece.** It no longer waits for Traffic.
  - E11: the "About this verdict" popup says plainly that roads are one of the reasons ("how many people are arriving or leaving the same area at the same hours").
  - E12: marathons, parades, and street events are left out, and the About sheet says "Not counted: street events".
  - E13: an offline check against Caltrans PeMS freeway speeds before any launch (Kylie applies for the free account).
  - E14: no live traffic data, ever. The label stays "Estimate · not live".
- E10 and E11 do not depend on the feature: E10 releases Section D, and E11 is a wording fix to the verdict popup that is true today.
- Conflicts: E10 **reverses** her Oct 14 call (N6). E11 **corrects** Mosaic's Oct 24 note "traffic is not part of the verdict". E4 **replaces** her Oct 3 list (Light, Heavy, Skip). E14 keeps product-decisions.md:6 and her Oct 2 no-billed-data rule.

## Section F: First-Run Onboarding

### F1. Four Steps Plus Done (Locked)
Shot: today's "Where's home?" modal. Mockup: `mockups/onboarding/01-welcome.png`, `02-home.png`, `04-what-to-show.png`, `05-favorites.png`, and `06-done.png`.
- **Locked (Kylie, Oct 30 form F1):** Welcome, Where's Home, What To See (Crowd Size and the top four Event Types), Favorites, then Done. Temperature Units sits under the city list on Where's Home.
- Conflicts: What To See shows Event Types, which waits for §1. Until the taxonomy locks, the step shows Crowd Size only, or the flow waits. Ask Kylie which.

### F2. Every Screen Skippable, With Defaults (Locked)
Shot: none. Mockup: `mockups/onboarding/07-explore-after-skip.png`, `08-upcoming-after-skip.png`, and `09-settings-resume.png`.
- **Locked (Kylie, Oct 30 form F2):** every screen can be skipped. Skipping gives: Home Los Angeles, shown as "Los Angeles (Default)" in Settings, F (C for a Canada or Mexico home), Crowd Size No min and No max, every Event Type on, no favorites, and Guest. Skipping never blocks Explore.
- Conflicts: with F12, Los Angeles is the skip fallback only, never a preselected pick.

### F3. Resume Setup Nudge (Locked)
Shot: none. Mockup: `mockups/onboarding/08-upcoming-after-skip.png` and `09-settings-resume.png`.
- **Locked (Kylie, Oct 30 form F3):** after a skip, one compact "Resume Setup" row ("You skipped 4 steps. Defaults are on.") sits in the empty Upcoming screen, with the foot of Settings as the alternate. Tapping it opens the first skipped step, and its x (44pt tap area) hides it for good. No tab badge.
- Conflicts: none.

### F5. No Notifications Ask (Locked)
- **Locked (Kylie, Oct 30 form F5):** onboarding does not ask about notifications. Shot: none. Mockup: `mockups/onboarding/05-favorites.png`. Conflicts: none. G5 keeps notifications for later.

### F6. Never Ask for Location (Locked)
- **Locked (Kylie, Oct 30 form F6):** drop the "Use My Location" row. The user picks a city by hand. Shot: none. Mockup: `mockups/onboarding/03-home-variant.png` (do not build its location row). Conflicts: none. This is her Oct 5 decision.

### F8. Set Up Again (Locked)
- **Locked (Kylie, Oct 30 form F8):** a "Set Up Again" row in Settings, plus the Resume Setup nudge for skipped steps. Shot: none. Mockup: `mockups/onboarding/09-settings-resume.png`. Conflicts: none.

### F9. English Only for Now (Locked)
- **Locked (Kylie, Oct 30 form F9):** no language step. Shot: none. Mockup: `mockups/onboarding/03-home-variant.png`. Conflicts: none.

### F10. Keep Welcome as Its Own Step (Locked)
Shot: none. Mockup: `mockups/onboarding/01-welcome.png`.
- **Locked (Kylie, Oct 30 form F10):** Welcome stays as step 1.
- Its content is open: she wants a fuller explanation of the verdict, and of the tags and marks (Open, F10). Do not build the Welcome copy until she approves it.
- Conflicts: none.

### F11. The Flow Replaces the First-Open Modal (Locked)
- **Locked (Kylie, Oct 30 form F11):** the flow replaces today's blocking "Where's home?" modal. There is one first-run path, and it can be skipped. Shot: today's modal. Mockup: `mockups/onboarding/02-home.png`. Conflicts: none.

### F12. Nothing Preselected on Where's Home (Locked)
Shot: none. Mockup: `mockups/onboarding/02-home.png` draws Los Angeles preselected. Do **not** follow that part.
- **Locked (Kylie, Oct 30 form F12, changed from the lean):** the city list opens with nothing selected, and Continue waits for a pick. Skip still gives Los Angeles (Default), per F2.
- Conflicts: the mock. Redraw the frame with nothing selected.

### F13. "Skip Setup" Ends Everything (Locked)
- **Locked (Kylie, Oct 30 form F13):** "Skip Setup" on Welcome ends the whole flow with the F2 defaults, and the later steps have a plain Skip and Back. Shot: none. Mockup: `mockups/onboarding/01-welcome.png`. Conflicts: none.

## Section G: Bigger Questions

### G1. Plan Real Accounts and Shared Data Now (Locked)
- **Locked (Kylie, Oct 30 form G1, changed from the lean):** write the plan for real accounts and shared data (events and accounts on Supabase) now, alongside the 7.x polish. This is a plan, not a build: it touches nothing in Supabase, and the builder never reads `private/`. Shot and mockup: none.
- Conflicts: none. The build brief says Supabase does not block Traffic and the free plan is enough for now. Her F4 note (save personal data such as Faves behind an account) belongs in this plan as a question for her.

### G2. Verdict Formula Review Before Real Users (Locked)
- **Locked (Kylie, Oct 30 form G2):** review the verdict formula, and the rule that freezes past verdicts, before real users, not now. Shot and mockup: none. Conflicts: none. Settled verdicts and past dates never re-score.

### G3. Mosaic Draws the Top 8 Empty and Error States (Locked)
- **Locked (Kylie, Oct 30 form G3):** Mosaic draws the 8 most common empty and error states first (offline, no data for a city, past the forecast, no plans yet, a failed sync, and so on), and the builder writes plain-words copy for the rest. Shot and mockup: none. Conflicts: none.

### G4. One Sweep, With a Rewritten Rule (Locked)
- **Locked (Kylie, Oct 30 form G4):** one builder pass over the whole app for tap targets and type size, checked against one written rule.
- **Rewrite the hard rule to allow listed exceptions** (her note: exceptions already exist). Replace the flat rule in product-decisions.md:218 with: every tap area is at least 44pt (an invisible extension counts) and text is at least 11pt, **except the items on this list**. Anything not on the list follows the rule. Adding to the list takes Kylie's OK.
- **The exception list (Locked, Kylie, Oct 30 G4 and B2):**
  - **Small words inside tiles:** the verdict word (8px), the read word and chip word (8 to 9px), the date tile weekday (9px), and the Away tag (8px). Source: M39, Builder prompt additions §10, product-decisions.md:168. The tile is the target, not the word.
  - **The day-strip words at 9px** after the B2 fix (the Map score word and the Explore verdict words).
  - **Small labels at 10px or more:** the Explore day strip weekday (10px), the map pin captions (10.5px), and the hourly weather glyph (10.5px, an icon). Source: B2, §10.
  - **Kylie's size calls:** the city switcher rows at 36pt with no extension (M14), the Local Competition timeline bars at 29pt, unpadded (§10), the verdict tile at 40pt on Your Stubs and Activity (H9), and the Night Story's inline 14pt source line (D5). Give the source links and the tile the largest extension that does not overlap.
  - **Secondary links and buttons at 36 to 40pt that may stay visually as built** (extend vertically where it overlaps nothing): the Explore day band links (40), "See the whole day ›" (37), the stub read links (40), segmented buttons (40), the avatar button (40), the Compare link (37), and the share round button (36).
  - **Visual sizes that already have 44pt extensions** (M39): the Back link (55 by 21), the info dot (18), and the read info dot (22).
  - **"Show" on the hidden line**, if it can't reach 44pt without covering the next row (§10).
- Show Kylie the rewritten rule text before the sweep runs.
- Shot and mockup: none.
- Conflicts: **changes** product-decisions.md:218 (update its M14 note into this list).

### G5. Notifications Later, Share Cards Maybe Never (Locked)
- **Locked (Kylie, Oct 30 form G5):** no notifications now. Keep them for later. Do not draw or build a share card now. Her note: she is not sure the app will ever need share cards. Shot and mockup: none.
- Conflicts: the product brief says the event screen ends on a shareable card, and product-decisions.md "Share cards (four)" is on file. Treat both as on hold, not removed, until she decides (Open, G5).

### G6. Tester Readiness Pass After the Fixes (Locked)
- **Locked (Kylie, Oct 30 form G6):** once the fixes land, one person on a real phone with a signed-in account checks the 10 items the headless review could not verify (B8). Shot and mockup: none. Conflicts: none.

### G7. Richer Weather Later (Locked)
- **Locked (Kylie, Oct 30 form G7):** the fuller forecast for Outdoor venues, the M3 sentence, and the M33 roof note wait until the weather data is solid. Shot and mockup: none. Conflicts: none. See B5 and Builder Tasks, task (a).

## Section H: Activity Rows and the Activity Card

The row layout is locked Nov 4 as R1a Fact List behind a chevron (see Nov 4 Locked Mock Picks). H7's information goals feed that pick. The answers below still hold inside that layout.

### H2. Status Word First: "Attended · Name" (Locked)
Shot: `mockups/crops/h-your-stubs-reference.png`. Mockup: `mockups/activity-rows/03-option-a.png`.
- **Locked (Kylie, Oct 30 form H2):** the status reads word first, like Your Stubs ("Attended · Sam R."), not as a sentence ("Sam R. attended"). This matches her H1 note.
- Conflicts: changes the built sentence order. The words Attended and Watched stay (M24).

### H3. No Profile Links on Rows (Locked)
- **Locked (Kylie, Oct 30 form H3):** names and avatars do not link. The whole row stays one tap target that opens the event page. Shot: none. Mockup: `mockups/activity-rows/03-option-a.png`. Conflicts: none.

### H6. No Crowd Counts on Rows (Locked)
- **Locked (Kylie, Oct 30 form H6):** Activity rows carry no crowd counts, like Your Stubs. Shot: none. Mockup: `mockups/activity-rows/06-lean-anatomy.png`. Conflicts: none.

### H8. City Code for Away Rows (Locked)
- **Locked (Kylie, Oct 30 form H8):** keep the built city code on rows outside the home city. Shot: built rows. Mockup: none. Conflicts: none.

### H9. Verdict Tile Stays 40pt (Locked)
Shot: built Your Stubs and Activity rows. Mockup: `mockups/activity-rows/06-lean-anatomy.png`.
- **Locked (Kylie, Oct 30 form H9, changed from the lean):** the verdict tile stays 40pt tall on Your Stubs and Activity.
- Conflicts: an exception to the 44pt rule. Add it to the G4 list. An invisible vertical extension to 44pt is fine if it does not overlap the next row.

### H10. Sport Line on Every Row (Locked)
- **Locked (Kylie, Oct 30 form H10):** every row with a sport line shows it, in full words ("Football", "Men's Basketball · Preseason"). Shot: `mockups/crops/h-your-stubs-reference.png`. Mockup: `mockups/activity-rows/06-lean-anatomy.png`. Conflicts: none. This is M38. The "FB" short code (B3) is for the Upcoming plan lead only.

### H11a and H11b. One "Activity" Card on Both Pages (Locked)
Shot: `mockups/activity-card/e0-before-attended.png` and `d0-before-date.png`. Mockup: `mockups/activity-card/d1-past.png` and `e1-Y-attended.png`.
- **Locked (Kylie, Oct 30 forms H11a and H11b):** one card titled "Activity" on both the date page and the event page. Each row carries its own verb (Attended, Watched, Attending, Watching, Interested), so the title never flips. On the date page it replaces the Attended card (M7).
- Her note asks for an event page version that puts her own attendance and Edit first and does not look like friends are attending (Open, H11a and H11c). **Build the date page card first. The event page card waits for the new mocks.**
- This answers B4 (her "Activity card" idea) and carries the crowd-line wrap fix (one line of CSS).
- Conflicts: **replaces** the 7.1 M7 Attended card and its flipping title.

### H11d. Cap at 3 Events, Plus "See All" (Locked)
- **Locked (Kylie, Oct 30 form H11d):** on a big day the date page card shows 3 events, then a 44pt "See all" row. Which 3 come first is open (Open, H11d). Shot: none. Mockup: `mockups/activity-card/d1-past.png`. Conflicts: none.

### H11e. The Card Replaces Following (Locked)
- **Locked (Kylie, Oct 30 form H11e):** the card carries friends' rows, so the separate Following block goes away on these pages. A day with only friends' activity still shows the card. Shot: none. Mockup: `mockups/activity-card/d1-past.png`, `d2-future.png`, and `d3-friends-only.png`. Conflicts: removes the date page Following block.

### H11f. Keep the Yellow Review Note (Locked)
- **Locked (Kylie, Oct 30 form H11f):** keep the built yellow review note. Shot: built card. Mockup: `mockups/activity-card/d1-past.png` draws grey. Do not follow that part. Conflicts: an exception to the gold-for-crowd-figures-only rule. Record it there.

### H11g. The Your Stub Line Wraps (Locked)
- **Locked (Kylie, Oct 30 form H11g):** the Your Stub line wraps to a second line instead of cutting "Review" to "Revi...". "See ›" stays at the end. Shot: `mockups/activity-card/e0-before-attended.png`. Mockup: `mockups/activity-card/e1-Y-attended.png`. Conflicts: none.

### H11h. Level Pill Stays in Your Row (Locked)
- **Locked (Kylie, Oct 30 form H11h):** your row keeps the Private, Friends, or Anyone pill beside Edit. Shot: none. Mockup: `mockups/activity-card/e1-Y-attended.png`. Conflicts: her H11a note says a "Friends" mark next to her own row reads as if friends are attending. The new mocks must solve that while keeping the pill visible.

### H11i. Add Seat for Plans: Deferred (Locked)
- **Locked (Kylie, Oct 30 form H11i):** no Add Seat for plans now. Her note asks what "plans" means (Open, H11i). Shot and mockup: none. Conflicts: none.

### H11j. Hide Mine Stays on the Activity Tab (Locked)
- **Locked (Kylie, Oct 30 form H11j):** Hide Mine does not come to the date or event pages. Shot and mockup: none. Conflicts: none.

## Section I: "Up To" Crowd Ceilings

**Locked, approved to build after the I6 check (Kylie, Oct 30 form I6):** she agrees the M35 research exists: the two Codex answers. The builder confirms them, runs I1 to I5 through them, and tweaks as needed (Builder Tasks, task (b)). Then Section I is approved to build. This **overrides** M35's "do not build" for the ceilings and the switch rename. **Nov 4 (R3a):** the I1 row format is locked as C with "cap", and it no longer waits on mocks.

### I1. Rows Read "≤14k", Pending a Lighter Format (Locked)
Shot: rows with no crowd number. Mockup: `docs/build-7-1/mockups/followups-oct27/upto-a-rows.png`.
- **Locked (Kylie, Oct 30 form I1), format updated Nov 4 (R3a):** option A was "≤14k" pending a less bulky format. **Nov 4 locks the format as option C with the word "cap"** (capacity), not "max" and not "≤14k". See Nov 4 › R3a and `mockups/crowd-ceilings/round3/`.
- Conflicts: none locked Oct 30. Nov 4 supersedes the pending "≤" wording.


### I2. Grey Ceiling With a Contrast Check (Locked)
- **Locked (Kylie, Oct 30 form I2):** keep the grey as drawn and check the text contrast is at least 4.5 to 1, and step to a darker grey if it fails. Shot: none. Mockup: `docs/build-7-1/mockups/followups-oct27/upto-a-rows.png`. Conflicts: none.

### I3. Event Page: "Up To" and "Room Size" (Locked)
Shot: `docs/build-7-1/mockups/followups-oct27/upto-0-event-now.png`. Mockup: `docs/build-7-1/mockups/followups-oct27/upto-event-mock.png` (with the label line changed as below).
- **Locked (Kylie, Oct 30 form I3):** the event page reads "Up to 10,258", the label line becomes "Room size · no estimate yet", a small-draw sport gets one plain sentence ("Volleyball here draws far fewer than the room holds") and the footnote adds room size as a fourth kind of count.
- Conflicts: none. This applies the AGENTS.md rule to label every attendance number by kind.

### I4. Title Case on Every Settings Row (Locked)
Shot: `docs/build-7-1/mockups/followups-oct27/upto-0-settings-now.png`. Mockup: `docs/build-7-1/mockups/followups-oct27/upto-settings-mock.png`.
- **Locked (Kylie, Oct 30 form I4):** every Settings row label is Title Case ("Apply On The Map" style, with short joining words lowercase, per AGENTS.md line 65). The switch rename ("No Estimate", "Show Events With No Estimate") waits for I6. The Title Case pass on the other rows does not.
- Conflicts: none. This applies AGENTS.md line 65 everywhere in Settings.

### I5. Ceilings Follow the Renamed Switch (Locked)
- **Locked (Kylie, Oct 30 form I5):** an event with only a ceiling shows or hides with the renamed "No Estimate" switch. It is never compared to the Min and Max range. Shot: none. Mockup: `docs/build-7-1/mockups/followups-oct27/upto-settings-mock.png`. Conflicts: none. product-decisions.md:291 stays (one switch, same behavior, new name).

---

## Open, Not For Building
Kylie's questions and remock requests, in her words paraphrased. Answer or mock each before building it.

- **A4:** Mostly answered Nov 4 by R5a final (fave blue lead + at/vs title, sport icon leads, no sport repeat on fave titles). Today line still under Builder Decides R5b. Revisit only if the built r3 rows leave a repeat she dislikes.
- **A6:** Superseded in spirit by R5a final row shape (Nov 4). Builder Decides R5c should record how B3's "UCLA FB" code relates now that fave leads are the team name in blue.
- **A7:** Wants one plan mark style across the app, but is unsure about filled, since she thinks filled vs outline already means something elsewhere. It does, and the lean is to keep outlines (A7 entry). Waiting for her OK.
- **B1b:** Her fixed-height scrolling dropdown is not drawn. Mosaic draws it (Home plus 4 visible, the rest scrolling, where Search and Edit sit) before the build.
- **B4:** She wants an Activity card instead of the Attended card. This is answered by H11. The event page version still needs a remock (H11a).
- **B5 (note):** Sketch the weather-data plan, or have the builder write it. Builder Tasks, task (a).
- **C3:** Tentatively accepts the nine types. The builder (or Codex) researches before the taxonomy is final. §1.
- **C4:** Where festivals live is deferred to the same research. §1.
- **D1 and D4a (X note):** Can we scan X (Twitter)? She finds it the most accurate storytelling, and thinks X and social media should be the biggest "writer". The builder should say what is possible, at what cost, and within the no-embedded-posts rule.
- **D2:** A new title for the story section, not tied to a time of day ("The Day", "The Evening", and "The Night" are all out). Offer options.
- **D4f:** The spot-check should use several models and ideally run automatically. Propose how.
- **E1:** Closed Nov 4 by R4a (all three as one path, behind a Traffic/Roads setting). Her earlier "not convinced" note is superseded; she still wants Fable to build it so it makes sense, not mock-copy only.
- **E2:** Closed Nov 4 by R4b (area names only).
- **F4 (note):** Sign-in only in Settings, but she asks whether saved personal data (Faves, anything tedious to re-enter, as opposed to view settings like temperature, Crowd Size, and Event Types) should require an account. Fold into the G1 plan.
- **F7:** Popular near the home city works for teams, but artists aren't tied to cities. Where would artist suggestions come from?
- **F10:** Keep Welcome, but she wants a better, more informative explanation of the verdict (and asks whether to call it the "Fan/Friction verdict"), plus the tags and marks people will see (occasion, crowd squeeze, and everything in the old tips).
- **G4 (note):** The exception list is locked (G4 entry). Show her the rewritten rule text before the sweep.
- **G5 (note):** She may never want share cards. Notifications later. Decide what happens to the share card decisions on file.
- **H1:** Largely answered by R1a Fact List (Nov 4) and the r2-final chevron mocks. Confirm the name-header shape still matches when building. Remock only if the FINAL frames leave a gap.
- **H4:** Initials for now, built so a photo can be added later, but she thinks avatars may not apply here at all. Confirm whether rows have avatars.
- **H5:** N/A (follows from H1 and H4).
- **H7:** Name the friends who also attended, not just "Friends". She asks for a way (not avatars) to show the relevant information, likes the information layout of the D1 mock (the Night Story frame 01), and wants the default to be attended events only. She asks whether watched rows need the venue, and whether attended rows need the verdict or something more useful instead.
- **H11a:** The event page card should put her own attendance and Edit first, and the "Friends" mark next to her row reads as if friends are attending. Solve it visually and align it with Your Stub.
- **H11c:** Neither Y nor X. She wants more ambitious mock options for the event page card, led by the UX.
- **H11d:** With a cap of 3, which events come first: by time, or by popularity and attention?
- **H11i:** Add Seat stays deferred (R6a, Nov 4). Still explain "plans" in-product if needed (R6c builder decide): Attending, Watching, or Interested on an event that has not happened yet.
- **I1:** Closed Nov 4 by R3a (C format with the word "cap"). Row ceilings are approved to build after I6. Use "cap", not "≤" or "max".

## Builder Tasks for 7.2

**(a) B5: Plan the weather-data build, for Kylie's review before anything is built.** A written plan only: no code, no new paid service, no Supabase.
1. **Sources:** what the app uses today (`scripts/weather-fetch.mjs`, Open-Meteo, flagged free for non-commercial use in docs/product/build-brief.md) and what a text forecast would need. List each candidate with its license, cost, and coverage of the covered cities (including Canada and Mexico).
2. **The M3 weather sentence:** what data it needs (a text forecast, or a sentence built from the day's numbers), and a few sample sentences.
3. **The M33 roof note:** what roof data exists (`roof: 'open' | 'covered' | 'indoor'` in `src/data/types.ts` already), what is missing (retractable roofs, partial cover, how sure each value is), and how it would be sourced and checked.
4. **Archive vs forecast:** what past dates show (stored observations, never re-scored) vs future dates (forecast, the 16-day horizon), and what is stored where.
5. **Cost and effort:** money, requests per night, and builder effort. Note what changes if the app goes commercial.
6. End with up to 5 choice questions for Kylie, each with your lean.

**(b) I6: Confirm the M35 research, run Section I through it, then build.**
1. Confirm that `docs/research/topics/arts-fill-rates-answer-codex.md` (saved Oct 26, partly folded into `src/data/expectedDrawBuild.ts`) and `docs/research/topics/ncaa-attendance-sources-answer-codex.md` (saved Oct 27) are the M35 research, answering the prompts in `docs/build-7-1/research-prompts/` (01 arts and theater fill rates, 02 NCAA per-school attendance). Kylie agrees they are. Say so in the gap report, or flag it if either does not match its prompt.
2. Run the I1 to I5 decisions through them: which events would show a ceiling, whether a room-size ceiling is honest for each category (for example small-draw college sports in big rooms), and whether the I3 copy, the I2 grey, and the I5 switch rule hold.
3. Tweak as needed and write each tweak and its reason here, under Section I.
4. Then build Section I: the ceilings on rows and the event page, the I3 copy, the I2 contrast check, the I4 rename ("No Estimate"), and the I5 switch rule. Verdicts never change. **Nov 4:** ship row ceilings with R3a's C format and the word "cap" (see `mockups/crowd-ceilings/round3/`).

---

## Builder Decides

**Kylie's instruction (Oct 30):** for every open question that does not need her to judge a mockup, the builder decides. Each entry below gives the question, every option, the assistant's lean (the preselected lean on the round 2 form, `Fan-Friction-review-oct30-v4.html`), and what Kylie has already said. **The builder picks one option, then records the choice and the reason in this file**, under the entry (write "Decided: ..., because ..."). The Nov 4 mock picks are locked above. Several entries marked "Follows R1a" / "Follows R5a" should be decided against those locks (R1a = A, R5a final = r3 match Activity, R3a = C with "cap", R4a = all three, R4b = area names only, R6a = deferred).

Rules that hold for every pick here: Title Case headings and labels, no em dashes, Oxford comma always, "Outdoor" never "Open-air", no "going" or "night" copy, and no "Estimated" on verdicts.

Standing things Kylie has said that bear on these calls:
- She wants ambitious options driven by the UX, not timid ones (H11c: "i need you to be more ambitious in letting the UX/UI drive these types of mockup optionality/decisions").
- B2: fix only real problems. She is "fine with exceptions, unless you feel any of the specific ones are problematic."
- I6: "confirm with builder whether or not there is research. if yes, run these decisions through that research, tweak as necessary, and approve the build." (Builder Tasks, task (b).)
- E1: she is not convinced Getting There belongs in the app at all ("NOTE THAT I AM NOT CONVINCED WE NEED THIS ON THE APP AT ALL, SO WILL TAKE SOME SERIOUS FLESHING OUT AND CONVINCING TO ADD THIS TO OUR SLATE").
- H11d: cap at 3 with "See all" her question was "how do we select which ones? is the priority in chronological order or by popularity/attention". The lean answer: her events first, then friends' by start time.
- I1: she likes the "≤" ceiling but finds it bulky ("i like the idea, but it looks bulky").

Where an entry depends on a mock pick (marked "Follows R1a" and so on), decide it for the lean option now and revisit only if Kylie picks differently.

**Builder note: seed2's plans step crashes.** `docs/build-7-2/research/seed2.mjs` line 7 calls `pl.togglePlan(by['2026-11-01-espn-lafc-761921'], 'watch')`, and LAFC event 761921 is no longer in the catalog, so the lookup is undefined. The round 2 mocks swapped in the Ducks 11-01 game as the Watching plan (`mockups/activity-card/round2/INDEX.md`). Fix or swap the event before reusing the seed.

### R1. Activity Rows

#### R1b. "Sold Out" On Rows
- Question: H6 keeps crowd counts off Activity rows. Is "Sold Out" (a note, not a number) allowed?
- Options: (1) Allow "Sold Out" as a note, still no numbers. (2) Leave "Sold Out" off rows too.
- Lean: (1). H6 was about numbers cluttering rows. "Sold Out" is a short fact, like Rain Delay.
- Kylie said: H6, "No, keep rows free of crowd counts."
- Builder decides: record the pick and the reason here.

#### R1c. Score On Rows
- Question: should rows (option A) show the Outcome (score) as a fact, like the D1 facts list?
- Options: (1) Stay result-free. (2) Show Outcome as a fact, like D1.
- Lean: (1). Fact lines cap at 3, and the score is one tap away on the event page.
- Kylie said: H7, she likes "how the information is listed on the D1 mockup" and asked for "the actual relevant information."
- Builder decides: record the pick and the reason here.

#### R1d. Where The Facts Come From
- Question: seats, per-event notes, and per-event recaps may not exist in the data. How does the build handle missing facts?
- Options: (1) Show only facts that exist, and leave a missing fact line out. (2) Hold the row redesign until the facts have a source. (3) Builder reports what exists first, then Kylie picks.
- Lean: (1). Rows already vary in height, and the header and names fixes can ship now. (Under her new instruction, option 3 means the builder reports and decides, not a round trip.)
- Kylie said: H7, aim for the D1 facts layout. D1 note: X (Twitter) may be the best story source.
- Builder decides: confirm whether stubs store a seat today, then record the pick and the reason here.

#### R1e. The Verdict In The List (Follows R1a)
- Question: does the verdict belong anywhere in the Activity list?
- Options: (1) No verdict in the list (as in A). (2) A 40pt tile on every row (as in B and C). (3) Once per day, in a day header (as in D).
- Lean: (1), matching the R1a lean. Pick (3) only if R1a is D.
- Kylie said: H7, "I actually wonder if attended even needs the verdict. other information might be more appropriate to include?" H9 keeps the tile 40pt wherever it shows.
- Builder decides: record the pick and the reason here.

#### R1f. Fact Order In Option A (Follows R1a)
- Question: with 3 fact lines max, is Where, Your Seat, Notes, then Review the right priority?
- Options: (1) Where, Your Seat, Notes, then Review. (2) Where, Notes, Review, then Your Seat. (3) Where, Review, Your Seat, then Notes.
- Lean: (1). Where and the seat are what people scan for, like a stub. The review stays one tap away. Watched rows show Length instead of Where.
- Kylie said: H7, wants "the actual relevant information," like D1.
- Builder decides: record the pick and the reason here.

#### R1g. Friends' Seats
- Question: should a friend's seat ever show on rows?
- Options: (1) Only your own seat, for now. (2) Show a friend's seat when they choose to share it (needs a new sharing setting).
- Lean: (1). Sharing settings belong in the G1 accounts plan.
- Kylie said: nothing specific. G1: plan real accounts and shared data now.
- Builder decides: record the pick and the reason here.

#### R1h. Day Cards: Cap At 3 (Only If R1a Is D)
- Question: if Day Cards ship, does a day card cap at 3 events with "See all"?
- Options: (1) Cap at 3 with "See all", like H11d. (2) No cap on the Activity tab.
- Lean: (1). One cap rule across the app.
- Kylie said: H11d, cap at 3 with a "See all" row.
- Builder decides: record the pick and the reason here (moot unless R1a is D).

#### R1i. Attended Default: Chip Or Quiet
- Question: the tab opens on Attended. Show an "Attended ×" chip, or a quiet default?
- Options: (1) Show the "Attended ×" chip, as drawn. (2) Quiet default, no chip.
- Lean: (1). Without the chip, a logged watch seems to vanish.
- Kylie said: H7, "default should be to only include "attended" events."
- Builder decides: record the pick and the reason here.

### R2. Activity Card

#### R2c. Which 3 Events Show First
- Question: with the H11d cap of 3, which events show?
- Options: (1) Yours first, then by time (a tie goes to the bigger crowd), shown in time order. (2) By time only. (3) By popularity and attention.
- Lean: (1). Matches the Lineup above it, never hides her own stub, and popularity repeats what the Verdict says.
- Kylie said: H11d, "is the priority in chronological order or by popularity/attention." Earlier 7.2 notes: cap 3, her events first, then friends by start time.
- Builder decides: record the pick and the reason here.

#### R2d. Privacy Pill Label
- Question: is "Visible to Friends" the right pill label? (The sheet still says Anyone, Friends, and Private.)
- Options: (1) "Visible to Friends". (2) "Friends Can See". (3) Keep "Friends", with the new eye icon.
- Lean: (1). It says who can see the stub, not who came.
- Kylie said: H11a, the "friends" symbol next to her row "make it look like friends are also attending". Fix it "aesthetically / aligned with "your stub"". H11h keeps the pill visible.
- Builder decides: record the pick and the reason here.

#### R2e. Status Word Color In Friends' Rows
- Question: one rule for the status word color on the Activity tab and on the card?
- Options: (1) Blue status word, ink names, in both places. (2) All ink in both places. (3) Blue on the Activity tab, ink on the card.
- Lean: (1). She asked for rows "like stubs," and Your Stubs puts the status word in blue.
- Kylie said: H1, "like stubs where it says "watched/attended" with the icons and after says name."
- Builder decides: record the pick and the reason here.

#### R2f. Friends' Watched And Interested Rows On The Cards
- Question: should the date and event cards hide friends' Watched and Interested rows by default, like the tab?
- Options: (1) Show them on the cards. (2) Attended only, like the tab.
- Lean: (1). On a future day nobody has attended yet, so an Attended-only card is empty.
- Kylie said: H7, the Activity tab defaults to Attended.
- Builder decides: record the pick and the reason here.

#### R2g. Where A Friend Watched
- Question: should a friend's watch name the place ("Jo T. at Tom's Bar")?
- Options: (1) Keep the place on the card, as built. (2) Drop it, like the tab drops the venue.
- Lean: (1). It is the friend's own news, and it is built.
- Kylie said: H7, "do you think watched events needs the venue name listed?"
- Builder decides: record the pick and the reason here.

#### R2h. Date C Drops The Review (Only If R2b Is C)
- Question: if date option C ships, is dropping the review note OK?
- Options: (1) No, keep a review line under C. (2) Yes, reviews on the event page only.
- Lean: (1). She chose to keep the review note (H11f).
- Kylie said: H11f, keep the yellow review note.
- Builder decides: record the pick and the reason here (moot unless R2b is C).

#### R2i. Remove From Log Link
- Question: in event option A, should Remove From Log move into the ticket?
- Options: (1) Keep it at the bottom, as built. (2) Move it into the ticket.
- Lean: (1). A rare, hard-to-undo action should not sit beside Edit Stub.
- Kylie said: nothing specific.
- Builder decides: record the pick and the reason here.

#### R2j. "Sold Out" Or "Sold out"
- Question: which casing everywhere? The mocks say "Sold Out", and `crowdShort` writes "Sold out".
- Options: (1) "Sold Out" everywhere (Title Case). (2) "Sold out" everywhere (as coded).
- Lean: (1). The copy rule is Title Case, and every mock draws it that way.
- Kylie said: her standing Title Case rule.
- Builder decides: record the pick and the reason here.

### R3. Crowd Ceilings

#### R3b. Ceiling Grey: #5F6B7D
- Question: use #5F6B7D (about 5.4 to 1) for every ceiling, since the Oct 27 grey (#7B8798, about 3.65 to 1) fails I2?
- Options: (1) Use #5F6B7D for every ceiling. (2) Find a lighter grey that just passes 4.5 to 1.
- Lean: (1). It passes with margin and is what every frame was drawn and checked with.
- Kylie said: I2, keep the grey and step darker if it fails 4.5 to 1.
- Builder decides: record the pick and the reason here.

#### R3c. Ceilings On Past Activity Rows
- Question: should past Activity rows ever show a ceiling?
- Options: (1) No. (2) Yes, when there is no estimate.
- Lean: (1). An attended game has a real crowd or none, and H6 keeps crowd figures off Activity rows.
- Kylie said: H6, no crowd counts on rows.
- Builder decides: record the pick and the reason here.

#### R3d. Event Page "Up To": Sign Or Words
- Question: should the event page "Up to 10,258" line use the row sign?
- Options: (1) Stay as words ("Up to 10,258"). (2) Use the sign there too.
- Lean: (1). The event page has room, and I3 locked the wording.
- Kylie said: I3, "Up to 10,258" with "Room size · no estimate yet".
- Builder decides: record the pick and the reason here.

#### R3e. A One-Time Key For D Or E (Only If R3a Is D Or E)
- Question: if the ceiling is an icon (D or E), show a one-time key ("Hollow = room size")?
- Options: (1) Yes, a one-time key. (2) No key.
- Lean: (1). Hollow against solid at 12pt is too subtle to learn untold.
- Kylie said: I1, she found the sign bulky and asked for other formats or ceiling symbols.
- Builder decides: record the pick and the reason here (moot unless R3a is D or E).

Also for Section I: the I6 task stands. Confirm the M35 research, run I1 to I5 and these R3 picks through it, and record tweaks under Section I.

### R4. Getting There (All Moot If Kylie Picks "Don't Build It" In R4a)

Kylie said for all of R4: E1, not convinced it belongs in the app. She wants serious fleshing out and convincing. Her locked rules E3 to E14 apply to any version.

#### R4c. Road Blues Next To The Action Blue
- Question: Heavy (#1D5A93) sits close to the action blue (#005A9C). Keep, shift, or change hue?
- Options: (1) Keep the three blues, and darken or shift Heavy away from #005A9C. (2) Keep the blues exactly as drawn. (3) Use a different hue family.
- Lean: (1). E6 locked three blues, so move the one swatch that clashes.
- Kylie said: E6, their own three blues, no verdict colors, no red, orange, or yellow.
- Builder decides: record the pick and the reason here.

#### R4d. Light Swatch Ink Edge
- Question: Light (#C9DDF1) nearly vanishes on the light-blue sheet. Keep the thin ink edge?
- Options: (1) Yes, keep the thin ink edge. (2) No, darken Light instead.
- Lean: (1). Light stays visible and the three steps stay apart.
- Kylie said: E6, as above.
- Builder decides: record the pick and the reason here.

#### R4e. Event Row: Under Crowd Or Inside Up Against (Only If R4a Includes The Event Page)
- Question: does the event page row sit under Crowd (07) or inside the violet Up Against card (08)?
- Options: (1) Under Crowd. (2) Inside Up Against.
- Lean: (1). Violet means friction, and blue road cues inside it blur both colors.
- Kylie said: D3, if Getting There is ever built, the story goes under whichever of Crowd, Up Against, and Getting There exist.
- Builder decides: record the pick and the reason here.

#### R4f. Half-Hour Strips: Too Precise?
- Question: do half-hour strips promise more than a schedule-based estimate can deliver?
- Options: (1) Use whole-hour cells. (2) Plain words only ("about 4:30 to 6:00 pm"). (3) Keep half-hour cells.
- Lean: (1). The data is start times and crowd sizes, so half-hour cells look more exact than they are.
- Kylie said: E14, no live data ever, and "Estimate · not live".
- Builder decides: record the pick and the reason here.

#### R4g. "Directions In Maps" Hand-Off (Only If R4b Allows Named Roads)
- Question: if named roads ship, is a Directions in Maps link (hand-off only) right?
- Options: (1) Yes, a hand-off only. (2) No link.
- Lean: (1). Maps gives the live answer the estimate cannot.
- Kylie said: E14, no live traffic data in the app.
- Builder decides: record the pick and the reason here.

#### R4h. Past Dates
- **Decided by Kylie, Nov 4 (not a builder pick):** hide Getting There on past dates if traffic was bad that night, one line in the event overview. She considered and rejected locking a snapshot of that night's UI (needs stored data nobody plans around). Changes E7. Full write-up under Nov 4 Locked Mock Picks › R4h.

#### R4i. Light, Busy, And Heavy Cut Points
- Question: should the thresholds wait for the E13 PeMS check?
- Options: (1) Placeholders until the E13 PeMS check sets them. (2) Ship with the placeholder windows.
- Lean: (1). She approved the offline PeMS check before any launch, and the cut points are what it tests.
- Kylie said: E4, the cut points are placeholders. E13: PeMS check before launch (she applies for the free account).
- Builder decides: record the pick and the reason here.

#### R4j. Plan Link On Upcoming
- Question: keep "Check the roads for Sunday" under an Attending plan (12)?
- Options: (1) Leave it out for now. (2) Keep it.
- Lean: (1). With the smallest version, the warning already sits in the verdict tile.
- Kylie said: E1, as above.
- Builder decides: record the pick and the reason here.

### R5. Upcoming Plan Titles

Kylie said for all of R5: A4, "this actually feels repetitive to me under Your Plans when it lists the favorite team/artist next to "attending" .. i wonder if the solution is actually to keep the abbreviated name/sport (for colleges) in the title and remove from the blue line..? what are your thoughts." A6, "agree in a vacuum, but will have to align with answers in other questions." B3, picked "Attending · UCLA FB".

#### R5b. The Today Line
- Question: remove the Today line above Your Faves?
- Options: (1) Remove the Today line (Your Faves moves up 62pt). (2) Keep it.
- Lean: (1). The date tiles already say when.
- Kylie said: A4, "i dont think we need the today line above "your faves"???"
- Builder decides: record the pick and the reason here.

#### R5c. Lead Wording: Code Or Spelled Out (Follows R5a)
- Question: B3 ("Attending · UCLA FB") and A6 ("Attending · Women's Basketball") conflict. Which way does the lead read?
- Options: (1) Spelled out, no school: "Attending · Men's Basketball" (A6). (2) Code with the school: "Attending · UCLA FB" (B3). (3) Code without the school: "Attending · FB".
- Lean: (1), paired with the R5a lean C. If Kylie picks B in R5a, use the code.
- Kylie said: B3 picked the code, A6 agreed with spelled out "in a vacuum", and A4 wants the repeat gone.
- Builder decides: record the pick and the reason here. Sport label lines elsewhere keep full words either way (M38, H10).

#### R5d. Your Faves Rows: Same Rule
- Question: should Your Faves rows follow the plan row rule?
- Options: (1) Keep Your Faves rows as built. (2) Use the same rule.
- Lean: (1). In Your Faves, the fave name is the information, not a repeat.
- Kylie said: A4, as above.
- Builder decides: record the pick and the reason here.

#### R5e. Plan Rows Without The Grey Label Line (Follows R5a)
- Question: is it OK for C or D to move the sport off the label line (bending M38 for plan rows only)?
- Options: (1) Yes, for plan rows only. (2) No, keep the label line on every row (C then becomes A).
- Lean: (1). The sport still shows, in the lead, and M38 was about never losing it.
- Kylie said: A4, as above.
- Builder decides: record the pick and the reason here.

#### R5f. The Swipe Zone Without The Today Line
- Question: with the Today line gone, does the Your Faves band carry the swipe-outside-the-box zone (7.1 item 16)?
- Options: (1) The Your Faves band carries the zone. (2) Keep a small gap.
- Lean: (1). The band is 40pt, bigger than the 22pt line it replaces.
- Kylie said: nothing specific.
- Builder decides: record the pick and the reason here.

#### R5g. Option D: Mark On Faves Date Tiles (Only If R5a Is D)
- Question: if D ships, does the date tile mark also show on Your Faves rows?
- Options: (1) Yes, the same mark on faves date tiles. (2) No, faves keep the mark after the title.
- Lean: (1). One place for status on the screen.
- Kylie said: nothing specific.
- Builder decides: record the pick and the reason here (moot unless R5a is D).

### R6. What A Plan Is

Kylie said: H11i, "i'm not even sure what "plans" means?? fine to defer/but also tell me what you mean (or mockup if its the only way to demonstrate)". Answer on file: a plan is an upcoming event marked Attending, Watching, or Interested.

#### R6b. A Full Row, Or The Sheet (Follows R6a)
- Question: if Add Seat ever comes back, a full event page row or the two-tap sheet?
- Options: (1) The sheet is enough. (2) A full row when it comes back.
- Lean: (1), following the R6a lean.
- Builder decides: record the pick and the reason here.

#### R6c. "Plan" As A Word In The App
- Question: should "plan" appear as a word beyond "Your Plans"?
- Options: (1) Only "Your Plans", as today. (2) Add a short definition somewhere, like the Welcome step.
- Lean: (1). The statuses already say what each plan is.
- Kylie said: H11i, as above. She did not know what "plans" meant.
- Builder decides: record the pick and the reason here.

#### R6d. Add Seat On The Activity Stub (Follows R6a)
- Question: should Add Seat also appear on the Activity stub after the event?
- Options: (1) Not now. Decide with R6a. (2) Yes, on the stub after the event.
- Lean: (1).
- Builder decides: record the pick and the reason here.

### R7. Leftover Decisions

#### R7a (A7). Plan Marks: Outlines Everywhere
- Question: one plan mark style across the app: outlines, or filled as mocks 31 and 32 draw?
- Options: (1) Outlines everywhere, with state shown with #005A9C plus the word (Attending, Watching, Interested). (2) Filled plan marks everywhere, as mocks 31 and 32 draw.
- Lean: (1). Fill already means Attended (Your Stubs calendar, Your Year) and favorite or on (the star, Map activity chip, Following filter, Follow button, Map | List switch) in the code, so a filled ticket on a plan reads as Attended.
- Kylie said: A7, "agree it should be consistent across the app, but i'm not sure whether i want filled or not. i thought filled or not was an indicator somewhere else..?" (dash shown as a period).
- Builder decides: record the pick and the reason here. If (1): fix the `LogRow.tsx:17-18` comment, drop "filled" from 7.1 item 16, and keep the TV icon 13pt fix (A7 entry above).

#### R7b (C2). Should Crowd Size Protect Favorites
- Question: favorites always show under Event Types (C2). Should Crowd Size also always show favorites?
- Options: (1) No change: keep Crowd Size as built. (2) Yes: favorites always show under Crowd Size too.
- Lean: (1). Crowd Size is a promise about crowds. The hidden line, Your Faves, plans, and stubs keep a favorite reachable.
- Kylie said: C2, favorites always show when their type is off, and she said nothing about Crowd Size. The notes said ask her before changing Crowd Size, and the lean changes nothing.
- Builder decides: record the pick and the reason here.

#### R7c (F1). What To See Step Before Event Types Locks
- Question: until Event Types locks, does What To See show Crowd Size only, or does onboarding wait?
- Options: (1) Crowd Size only for now, and add Event Types when it locks. (2) Wait to ship onboarding until Event Types locks. (3) Drop the step until Event Types locks.
- Lean: (1). The new flow replaces the blocking "Where's home?" modal now (F11).
- Kylie said: F1, Welcome, Where's Home, What To See (Crowd Size and the top four Event Types), Favorites, then Done.
- Builder decides: record the pick and the reason here.

#### R7d (C11b). Map Totals And Crowd Size
- **Decided by Kylie, Nov 4:** (1) Yes, Map day totals include events Crowd Size hides. Does not conflict with R4h. Full write-up under Nov 4 Locked Mock Picks › R7d. Changes built Map totals.

#### R7e (C11a). Local Competition And Crowd Size
- Question: Local Competition will hide Event Types hidden bars (C11a). Should Crowd Size do the same (today the "answer B" rule leaves it unfiltered)?
- Options: (1) Wait for the Event Types research. (2) Yes, Crowd Size hides those bars too. (3) No, keep "answer B" for Crowd Size.
- Lean: (1). The §1 research is already asked to answer this.
- Kylie said: C11a, Local Competition hides bars hidden by Event Types, and Show reveals them.
- Builder decides: record the pick and the reason here (after the §1 research if (1)).

#### R7f (D2). Story Section Title
- Question: a new title for the story section, not tied to a time of day?
- Options: (1) "The Recap". (2) "What Happened". (3) "The Story". (4) "Behind The Verdict".
- Lean: (1). It names the D1 Short Recap she picked and works for a game, a concert, or a show.
- Kylie said: D2, "let's come up with something else entirely? maybe that doesn't correspond to a time of day lol". "The Day", "The Evening", and the time-of-day title are out.
- Builder decides: record the pick and the reason here.

#### R7g (D1). Post Text From X In The App
- Question: may the app show a short quote of an X post, or only cite it as a text link (the Oct 4 lock: no screenshots or embedded posts)?
- Options: (1) Cite posts as text links only. (2) Allow a short quoted line with the link. (3) Decide after the builder's X plan.
- Lean: (1). Keeps the lock and still lets X drive the story.
- Kylie said: D1, "is it possible to scan twitter? while articles are good, i actually think twitter is the most accurate story-telling wise (have the builder consider this)". D4a, X and social media should be the biggest source.
- Builder decides: record the pick and the reason here. Nothing is built from X until the builder's X plan (cost and terms) is written.

#### R7h (G5). Share Card Decisions On File
- Question: what happens to the share card decisions still on file?
- Options: (1) On hold: keep the decisions, build nothing. (2) Remove them from the brief and decisions.
- Lean: (1). Nothing is built either way, and keeping them costs nothing.
- Kylie said: G5, "i'm not sure we'll need share cards ever tbh, but we do maybe want to save notifications for later".
- Builder decides: record the pick and the reason here.

#### R7i (F7). Where Artist Suggestions Come From
- Question: where do onboarding's artist suggestions come from?
- Options: (1) Artists with upcoming shows at venues near the home city. (2) A national popular list. (3) No artist suggestions: search only.
- Lean: (1). It is the one link between artists and cities the app already has.
- Kylie said: F7, "unlike sports, artists aren't really connected to cities though, so i'm not sure where you would draw this information from".
- Builder decides: record the pick and the reason here.

#### R7j (F10). "Fan/Friction Verdict" On Welcome
- Question: what is the verdict called on Welcome and elsewhere?
- Options: (1) "Fan/Friction verdict" on Welcome, "verdict" everywhere else. (2) "Fan/Friction verdict" everywhere. (3) Just "verdict".
- Lean: (1). Names it once, with short labels elsewhere.
- Kylie said: F10, "i want a better/more informative explanation for the Fan/Friction verdict (i think we should call it that?)", plus the tags and marks (occasion, crowd squeeze, and everything in the old tips) on Welcome.
- Builder decides: record the pick and the reason here, and write the fuller Welcome copy to match.

#### R7k (F4). Saved Personal Data And Accounts
- Question: should saved personal data (Faves) require an account, unlike view settings?
- Options: (1) Fold it into the G1 plan, and guests keep Faves on the device until then. (2) Require an account for Faves now.
- Lean: (1). There are no real accounts yet, so requiring one would block Faves for everyone.
- Kylie said: F4, she asked whether Faves and anything tedious to re-enter (as opposed to view settings like temperature, Crowd Size, and Event Types) should sit behind account creation.
- Builder decides: record the pick and the reason here, and put the question in the G1 plan.

#### R7l (G4). The Rewritten Size Rule
- Question: approve the rewritten rule text: "Every tap area is at least 44pt (an invisible extension counts) and text is at least 11pt, except the items on this list. Anything not on the list follows the rule. Adding to the list takes Kylie's OK."
- Options: (1) Approve the rule text as written. (2) Change it.
- Lean: (1). It says exactly what she asked for.
- Kylie said: G4, "change the hard rule then, because we already have exceptions". B2, fine with exceptions unless one is a real problem.
- Builder decides: record the pick and the reason here, then run the sweep. Adding to the exception list still takes Kylie's OK.

## Nov 4 Locked Mock Picks (Kylie, Review Form Open10 + Round 3 Mocks)

Exported answers: slim form storage key `ff-review-nov4-open10` (parent form `ff-review-oct30-v4`), exported Nov 4, 2026 at 5:46 PM PT (`2026-11-05T01:46:17.920Z`): 9 of 10 answered, 4 changed from the lean. Round 3 mocks: `mockups/` folders below (source board `mockups/round3-board.png`). Standing rule the same day: record the locked pick and everything discussed so the builder has full context.

### R1a. Activity Row Direction: A, Fact List Behind A Chevron (Locked)

- **Locked (Kylie, Nov 4 form R1a):** A, Fact List. The facts sit behind a dropdown chevron (her note, verbatim: "but i want the fact list subsection to be hidden behind a dropdown chevron; mock this up for confirmation/so we can give the builder a visual guide"). She accepted the second tap target per row (chevron beside the row link), even though H3 said one target per row.
- **Lean she kept:** A (agreed with lean). Lean reason from the form: most direct answer to her H7 note ("the actual relevant information" listed like the D1 mock), and it tests her doubt that Attended rows need the verdict.
- **Chevron size (FINAL):** the smaller chevron from r2: 13pt glyph, no ring, invisible 44pt tap target. She preferred it over the first round 3 chevron (44pt round glyph with pale ring).
- **Mocks:**
  - FINAL: `mockups/activity-rows/r2-final/01-collapsed.png`, `02-expanded.png`, `03-mixed.png` (and `raw/`).
  - Superseded size: `mockups/activity-rows/round3-r1/` (larger chevron).
  - Option set that led here: `mockups/activity-rows/round2/` (A Fact List was the lean).
- **Builder also decides** the R1b to R1i items under Builder Decides (Sold Out, score, missing facts, verdict in list, fact order, friends' seats, attended default), now that R1a is A. R1e lean is (1), no verdict in the list, and R1h (day-card cap) is moot without D.
- **Conflicts flagged:** second tap target vs H3 one-target rule (she accepted the exception). Em dash in her note text above is hers. Do not copy em dashes into new app copy.

### R2a. Event Page Activity Card: A, Your Stub Is The Hero (Locked)

- **Locked (Kylie, Nov 4 form R2a):** A, Your Stub Is The Hero. Build exactly what the mock shows.
- **Her note, verbatim:** "really do love this, i need to builder to build exactly what the mockup shows for this"
- **Lean she kept:** A. Lean reason: only option where her stub lives in one place answers "greater attention to the user's own attendance/editing option", and two cards stop friends from reading as part of her answer.
- **Mocks FINAL:** `mockups/activity-card/round2/eA-attended.png`, `eA-attending.png`, `eA-empty.png`, `eA-friends.png`, `eA-watched.png` (and the round2 INDEX). Earlier H11 event-page remock request is answered by this pick. Still align privacy pill / "Friends" mark per H11a and R2d (builder decides).
- **Open around it:** R2c to R2j under Builder Decides.

### R2b. Date Page Activity Card: A, By Event, Capped At 3 (Locked)

- **Locked (Kylie, Nov 4 form R2b):** A, by event, capped at 3 (H11d). No note. Agreed with lean.
- **Lean reason:** blue-edged strip is a mini version of the event page ticket and keeps the H11d cap.
- **Mocks FINAL:** `mockups/activity-card/round2/dA-lean.png`, `dA-future.png`, `dA-friends-only.png`, `dA-popular.png`, `dA-time.png`.
- R2h (date C drops review) is moot.

### R3a. Ceiling Format: C, Max Word, But Label It "Cap" (Locked)

- **Locked (Kylie, Nov 4 form R3a, changed from lean A):** C, Max Word, with the word **"cap"** (capacity) instead of "max".
- **Her note, verbatim:** "thoughts on cap (for capacity) instead of max?"
- **Lean she overrode:** A, Light Sign. Lean reason had been: keeps the ≤ she liked, halves its weight, readable at actual size, and runner-up G.
- **Why "cap" won in the redraw:** the actual-size mock showed "cap" keeps "Cal State Fullerton at UCLA" on one line ("cap" about 3pt narrower than "max"). Apply "cap" wherever a crowd ceiling shows (rows, and any other ceiling slot that used the C format).
- **Mocks:**
  - FINAL wording check: `mockups/crowd-ceilings/round3/01-max-vs-cap-phone.png`, `02-max-vs-cap-actual-size.png` (and `raw/`).
  - Option set: `mockups/crowd-ceilings/round2/` (C is `04-option-c-max-word.png`. Build C's format with the word "cap").
- **Conflicts flagged:** this locks the I1 row format that was waiting on "less bulky" options. I1's "≤14k" pending line is superseded by C+"cap". Grey contrast (I2 / R3b) and the rest of Section I still run through Builder Tasks (b) / I6.
- R3e (one-time key for D or E) is moot.

### R4a. Getting There: All Three As One Path, Behind A Settings Switch (Locked)

- **Locked (Kylie, Nov 4 form R4a, changed from lean "Smallest version"):** all three as one path (round 2 frame 15): day card, event page, and map mode together.
- **Her note, verbatim:** "i do want this, but i want this all to sit behind a "traffic/roads" type of setting on the settings page; does that make sense? i also want the builder (fable) to pay extra attention to building this out in a way that actually makes sense, not just what is on the mockup (although the mockup is indeed pretty and clean)"
- **Lean she overrode:** Smallest version (roads line in the verdict tile). Lean reason had been least screen, build, and risk.
- **Settings gate:** the whole Getting There feature sits behind a "Traffic/Roads" style setting on the Settings page (exact label Title Case; builder proposes if needed). Off means none of the three surfaces show.
- **Mocks FINAL path:** `mockups/getting-there/15-all-flow.png` (and the supporting frames 01 to 13 for each surface). Tradeoffs board: `16-tradeoffs.png`. Do not build "Don't build it" (`14-dont-build-it.png`) or stop at the smallest verdict line alone (`13-smallest-verdict-line.png`).
- **Conflicts flagged:** supersedes the Oct 30 Section E header ("Not approved for building") and her E1 capitals note that she was unconvinced. Locked rules E3 to E14 still apply inside the build. E10 (release the story now) and E11 (About wording) stay independent.

### R4b. Area Names Only (Locked)

- **Locked (Kylie, Nov 4 form R4b):** area names only, no named roads. Agreed with lean.
- **Lean reason:** an estimate from schedules can say an area will be busy, but naming a road promises more than it knows.
- **Mocks:** area-name frames in `mockups/getting-there/` (day card, event, map). Named-road variants stay in the folder as rejected alternatives.
- R4g (Directions in Maps hand-off) is moot while named roads are out. The builder may still note Maps as future if she reopens roads.

### R4h. Past Dates: Hide Getting There, One Line In The Event Overview If Traffic Was Bad (Locked)

- **Locked (Kylie, Nov 4 form R4h, something else):** hide Getting There on past dates. If traffic was bad that night, mention it in one line in the event overview.
- **Her note, verbatim:** "just lock what was shown/concluded for that night..? but maybe don't need if bad traffic was summarized in the "overview of an event"..?"
- **Discussion / rejected alternative:** she considered locking a snapshot of what was shown that night, then leaned away from it because it needs stored data nobody plans around. The overview one-liner is the path.
- **Lean she overrode:** (1) No, future dates only (form lean). Lean reason: warning is for planning, and afterwards it can only look wrong. Her something-else lands near "future only" for the feature UI, plus the overview line for bad nights.
- **Conflicts flagged:** changes E7 ("a past date is labeled How the roads were estimated and never re-scores"). Past dates no longer show the Getting There block at all. Does **not** conflict with R7d (map totals). An earlier conflict flag was wrong.

### R5a. Your Plans Row Shape: Final Direction Is R3 Match Activity (Locked)

Record the evolution, but build only the final.

1. **Form pick (Nov 4 open10):** D, Status On The Date Tile (changed from lean C, Sport In The Lead). Lean reason for C: answers the repeat, lines up with A6, keeps titles like Explore. She overrode to D.
2. **Her form note, verbatim:** "in addition: the sport/event type icon should lead the title, and i think if the event is one of the user's "faves" then it shows up like it does in that section where the "fave" team is in blue on the top row and the title becomes the opponent (at or vs [opponent]) or event title meaning the sport is not necessary in the title because it would become redundant. also the venue is only listed if the event is marked as attending, otherwise it should have the location the user is watching it (if they've marked where)."
3. **Round 3 r1 mocks** drew D with status on the date tile: `mockups/upcoming-plan-rows/round3-r1/` (**superseded**).
4. **She then asked to move the status to the upper left of the tile (r2):** `mockups/upcoming-plan-rows/r2/` (**superseded**). Looking at r2 she found the tile too busy and said it "just needs to look like activity."
5. **FINAL (r3):** status off the date tile, icon with no word, in the same spot Activity uses. Icons: ticket Attending, TV Watching, bookmark Interested (same as Activity). Sport or event icon leads the title. Verdict stays at the right edge on plan rows (no facts to expand), and Activity keeps its chevron. Mocks: `mockups/upcoming-plan-rows/r3-final/01-your-plans-vs-activity.png`, `02-your-plans-window-vs-activity.png`, and `raw/`.

**Row rules locked with the final:**
- **Fave rows:** team in blue on the top row, and the title is "at Opponent" (away) or "vs Opponent" (home or neutral), or the event title. The sport is not repeated in the title.
- **Venue:** only when Attending. Otherwise show the watch place if she marked one.
- **Non-fave rows:** grey top line with the status icon and category ("Concert", "Men's Soccer") to match Activity. This **replaces** the earlier no-top-line rule from the first D pass.
- **at / vs:** from the fave's side, with no period after vs.

**Detail line (r5, Locked placement C):**
- **Locked (Kylie, Nov 4):** placement C (`mockups/upcoming-plan-rows/r5-detail/column-C.png`): time, then place, then a grey sport tag, for example "5:00 pm · Rose Bowl · Football". Watch spots show just the place name ("Barney's Beanery", "Home"), formatted like a venue. Board and alternates A/B/D: same folder (**A/B/D superseded** for placement).
- **Contemplation (not locked as app-wide yet):** she is open to the last token being a **league tag** (NFL, NBA, MLB, NHL, NCAAM, NCAAW, NCAAF, and so on) instead of the gender and sport, possibly as an app-wide rule.
- **Data facts for the builder (read-only check of main at `6f961f62`, Nov 4):** there is no league-code column, and there are no NCAAM or NCAAW codes. `Team.league` is free text in `src/data/teams.ts`, and college leagues are written out ("College men's basketball" and so on). Display codes come from `SPORT_CODES` in `src/lib/eventTitle.ts` (FB, BSB, SB, VB, WP, BB, SOC, and others, plus an M, W, B, or G side letter). The M38 college label rule lives in `eventTitle.ts` (`sportLabelOf`, `teamSportLabel`, `scheduleLabelOf`, `chipCode`), with tests in `scripts/titles-check.mjs` and its rationale in `docs/build-7-1/gap-report-7-1.md` around lines 38 to 48. Pro leagues (NFL, NBA, MLB, NHL, MLS, NWSL, and WNBA) exist as strings. Kylie's log stores Lakers games as "Men's basketball". Non-sport events have no league: music has a genre, and other events have a tag. So a league tag needs a new mapping for college, or it reuses the existing codes.
- **Builder chooses** the exact codes from the data. Any college sport without a clean league code must be raised with Kylie, not invented. This relates to the 7.1 M38 college sport label rule (see the data facts above). Until she locks league tags app-wide, ship placement C with the sport token as drawn unless the builder's chosen codes are clearly better and recorded here.
- **r4 approaches** (`mockups/upcoming-plan-rows/r4/`): sport-in-title / icon-only / sport-on-detail / sport-when-ambiguous. Approach 3 (sport on detail) led to r5. Superseded as the placement question, useful as context.

**Conflicts flagged:** final r3 departs from the form's D pick and from lean C. A4 / A6 / B3 lead-shape opens are largely answered by this row redesign (blue fave lead + at/vs title), but Builder Decides R5b to R5g may still need a recorded pick where they do not conflict. M38 / H10 (full words on sport lines elsewhere) stay for non-plan surfaces unless league tags become app-wide.

### R6a. Add Seat For Plans: Stays Deferred (Locked)

- **Locked (Kylie, Nov 4 form R6a):** keep deferred. Agreed with lean. No note.
- **Mocks (not building):** `mockups/plans-add-seat/02-event-page-add-seat.png`. What-a-plan explainer: `01-what-a-plan-is.png`.
- H11i and R6b to R6d stay under Builder Decides / open explainers as written.

### R7d. Map Day Totals Include Events Crowd Size Hides (Locked)

- **Locked (Kylie, Nov 4 form R7d):** yes, totals include events Crowd Size hides. Agreed with lean.
- **Lean reason:** two settings that hide events should count the same way.
- **Does not conflict with R4h.** An earlier conflict flag was wrong.
- **Conflicts flagged:** changes built Map totals that today drop Crowd Size-hidden events, and aligns them with C11b for Event Types. Record the change in the gap report when touching totals.

### New. Stub From Your Faves (Locked Direction)

From her anything-else note on the Nov 4 export: she wants an easier way to stub an event from the Your Faves list.

- **Locked gesture:** use long-press (mock C) if it is buildable, otherwise swipe (B). **Toggles (A) rejected.**
- **Mocks:** `mockups/stub-from-faves/round3/05-c-long-press.png` (FINAL path), `03-b-swipe-open.png` and `04-b-after-swipe.png` (fallback), `01-a-toggles.png` and `02-a-after-tap.png` (rejected). Raw frames in `round3/raw/`.
- **Builder call (not locked):** she also wonders whether to drop the date verdict on Upcoming or Faves rows and put a "Stub It" button there instead. Left to the builder. Optional mock: `mockups/stub-from-faves/r2-optional/01-faves-stub-it-button.png`. The pill is wider and wraps long venue names, and it raises whether the verdict and away code should live only on the game page. Builder's call. Record the choice here.
- Round 3 judgment notes: A grows rows about 39pt (about 5 fave rows instead of 7), and B needs a first-run hint because a swipe has no visible cue.

### New. Watching Season (Locked Direction)

From the same anything-else note: a watching version of season ticketholders.

- **Locked:** a "Watching Season" option on the team page next to the 7.1 Season Tickets switch (sibling row, same card pattern).
- **Behavior:** adds every game, home and away, as Watching with a default watch spot she can change per game. Games with tickets stay Attending.
- **Your Plans presentation:** option 1, quiet one-line rows (**FINAL**). Option 2, collapsed to the next game plus "N more", was **rejected** because it breaks her Oct 23 no-"N more" rule for Your Plans.
- **Postseason:** added **automatically**. Mosaic's first round 3 frames assumed they were not. That note is superseded (see r2 INDEX).
- **Season watch record card:** included. Numbers in the mocks are sample data only.
- **Broadcast line:** include only if the schedule data already has it.
- **Research rationale to keep in mind:** reuses the Season Tickets setup, differs from a fave (which marks no games), fills a gap ESPN and team apps leave, and the main risk is clutter from about 162 MLB games (quiet rows mitigate, and option 2 was the clutter escape and was rejected).
- **Mocks FINAL:** `mockups/watching-season/01-team-page-switch.png`, `02-setup-sheet.png`, `03-team-page-on.png`, `04-plans-quiet-rows.png`, `06-season-watch-record.png` (and `raw/`). Rejected: `05-plans-one-next-game-row.png`.

### Known 7.1 Issues Mosaic Spotted And Left Alone

Small fixes for the builder to consider (not full 7.2 features):
- The team page uses an em dash as the "no verdict" score glyph (visible behind the Watching Season setup sheet).
- The sheet close button is 36pt (below the 44pt rule. Extend or resize unless it is already on the G4 exception list).

### Waiting On Kylie (Mock Picks)

None pending from the Oct 30 round 2 set. The former pending list (R1a, R2a, R2b, R3a, R4a, R4b, R5a, R6a) is locked above. New contemplations that still need her only if the builder cannot decide: league-tag codes without a clean mapping, the optional Stub It button if the builder wants her eyes before shipping, and Watching Season copy polish if quiet rows still feel too heavy in a real 162-game season.

