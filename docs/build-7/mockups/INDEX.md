# Build 7 mockups: index

Per-image detail for the build 7 notes ([`../build-notes-7.md`](../build-notes-7.md)).

Every image uses **EXAMPLE data**, including names, counts, scores, prices and dates. The numbers are not real and do not have to match across images. The mockups are a guide and North Star, not pixel locks. "Status" says how firm the **behavior** is: **Locked** means Kylie decided it; **Lean** means it's the design suggestion and the builder decides; **Reference** means context only; **Rejected** is kept to show what not to build.

Many images include an annotation box that says "Mosaic lean · Not confirmed" or "Alternative" (the design tool's labels). Those boxes were written when the mock was made. Where this index or the build notes say Locked, that wins over the box; if this index and the notes ever differ, the notes win. The last column lists text inside the image that is out of date.

Global stale labels (they appear in many images; ignore them everywhere):
- Tab "Friends" → **Activity**. This affects every r3b/r3c image (01–17, 55–60).
- You row "Next up" → **Upcoming** (27, 28, 30, 33, 34, 35, 37).
- College team line "UCLA FB" → live already says **UCLA Football** (commit 5fa4114, Oct 19). Keep the live naming.
- "Food & drink" → **Food & Drink**; "Parking" → **Parking & Transit** (21–26).
- In any search-result row, a team in a city-shortcut form ("LA Lakers") → that row uses the **full official name** ("Los Angeles Lakers"), under the Oct 22 naming rule.

| # | File | What it shows | Status | Stale labels to ignore |
|---|---|---|---|---|
| 01 | 01-tabbar-explore.png | Explore with the new 5-slot bar: Explore · Upcoming · (+) · Friends→Activity · You. The raised unlabeled "+" is in place of the floating Stub it button. Explore itself is unchanged. | Locked (bar). Explore: no change | Friends |
| 02 | 02-tabbar-raised-plus-closeup.png | Close-up of the 48 px raised "+" (rises about 7 px, no label) | **Locked** | Badge says "Alternative"; Kylie picked it, so it is Locked. Friends |
| 03 | 03-tabbar-inline-plus-REJECTED.png | 44 px in-line "+" (the design lean) | Rejected | – |
| 04 | 04-log-sheet.png | "Log an event" sheet: search, Today line with Change city, "Happening now · Today" (your plan pinned first), Recent, "Not here? Add it yourself". One outlined "+" per row; logged or planned rows show a filled ticket/TV mark. | Locked (row style, structure). Ranking and location details: Lean | Friends |
| 05 | 05-log-search.png | Log sheet with a search typed: event results with a single "+", a logged result with a filled mark, team result with › | Locked (row style). Lean (rest) | Friends; "LA Lakers" team result → "Los Angeles Lakers" |
| 06 | 06-log-rows-closeup-chosen.png | Close-up of the calmer single-"+" rows Kylie chose ("oh i actually like this calmer alternative!", Oct 21 11:06 PM PT) | **Locked** | – |
| 07 | 07-log-search-rows-closeup.png | Close-up of search rows in the same style | Locked | – |
| 08 | 08-upcoming.png | Upcoming tab: "Your plans" band on top, Today line, followed teams/artists by month. Filter button on the title row, the same size as search. | Locked (name, plans band, filter size). Lean (helper caption text) | Friends; "UCLA FB"; drawn without row dividers: keep the live horizontal row dividers (Locked, Kylie 2026-10-22; notes §4) |
| 09 | 09-upcoming-noplans.png | No plans yet: one slim prompt line instead of the band | **Locked** (Kylie, 2026-10-22) | Friends |
| 10 | 10-upcoming-noplans-alt.png | No plans yet, alternative: band dropped entirely | Rejected | Friends |
| 11 | 11-upcoming-filtered.png | Filter on: solid sliders button with count, chip + Clear row | Lean | Friends |
| 12 | 12-upcoming-filter-sheet.png | Filter upcoming sheet: Dates first, Show (Your plans / Faves + plan chips), Faves checklist, Manage faves › | Lean (Kylie asked for this mock; details not individually confirmed) | Note says "Manage faves opens Favorite teams & artists in Profile & Settings". Final: it opens the **Edit favorites sheet** directly |
| 13 | 13-upcoming-filter-sheet-closeup.png | Close-up of 12 | Lean | Same as 12 |
| 14 | 14-header-filter-button-closeup.png | Title row: filter button matched to the search button size | **Locked** ("Don't make it bigger than the search icon") | Friends |
| 15 | 15-header-filter-vs-explore.png | The same row compared with Explore's view toggle | Locked (sizing reference) | – |
| 16 | 16-activity.png | Activity (shown as "Friends"): past months above Today, no "earlier" line, "↓ Today" pill | **Locked** (no line) | Friends → Activity. The mock has no own entries; those are added (see doc) |
| 17 | 17-activity-earlier-line-on-scroll-REJECTED.png | Variant where an "earlier" line appears on scroll | Rejected | Friends |
| 18 | 18-activity-filter-sheet.png | Filter activity sheet: Hide mine (sticky), People checklist, activity chips, Reset/Done | Lean (Hide mine itself is Locked) | No Watching chip yet: add **Watching** (Locked, Kylie 2026-10-22) |
| 19 | 19-activity-filter-sheet-closeup.png | Close-up of 18 | Lean | – |
| 20 | 20-activity-filtered-hide-mine.png | Hide mine on: chip + Clear, you drop out of people lines, rows that were only you disappear | Lean | – |
| 21 | 21-cost-collapsed.png | Stub it sheet: Tags, Seat, Cost rows, all blue, no divider; "+ Add cost" collapsed | **Locked** | – |
| 22 | 22-cost-open-ticket.png | "+ Add cost" opened: one Ticket line preset, other chips below | Locked (behavior) | "Parking" → Parking & Transit; "Food & drink" → Food & Drink |
| 23 | 23-cost-multiple-lines.png | Ticket ×2 seats, Parking, Food & drink lines, running Total | Locked (line + total pattern; amount labeled "You paid", Locked, Kylie 2026-10-22) | Parking, Food & drink, "Your share" header → **You paid** |
| 24 | 24-cost-free.png | Free chip on: Ticket reads Free ($0), no reason prompt | **Locked** | Parking, Food & drink |
| 25 | 25-cost-watched.png | Watched: no preset line; chips Stream / PPV, Food & Drink, Other (no Merch) | **Locked** | Food & drink |
| 26 | 26-cost-watched-filled.png | Watched with lines filled | Locked | Food & drink |
| 27 | 27-you-full-page.png | Whole You tab: compact header, Upcoming row, year card (big number + 4 auto stats + Recap/Ranks footer), Your stubs preview, Faves row | Locked (all seven pieces) | Annotation says Edit › "opens Favorite teams & artists in Profile & Settings". Final: it opens the **Edit favorites sheet** |
| 28 | 28-you-header.png | Spotlight: compact header (avatar opens Profile & Settings, home city, "Private profile") | **Locked** | Next up |
| 29 | 29-you-header-centered-REJECTED.png | Letterboxd-style centered header with counts | Rejected | Next up |
| 30 | 30-you-year-card.png | Spotlight: Flighty-style year card | **Locked** | Next up |
| 31 | 31-you-year-card-autostats-example-A.png | Auto-picked stats, stadium-hopper example | Locked (auto-pick idea). Lean (pool/ranking specifics) | – |
| 32 | 32-you-year-card-autostats-example-B.png | Auto-picked stats, second example user | Same as 31 | – |
| 33 | 33-you-stubs-preview.png | Spotlight: 4 newest stubs, plain "See all ›" | **Locked** | Next up; "Faves row comes later" placeholder |
| 34 | 34-you-recap-ranks-footer.png | Spotlight: Recap › and Ranks › as a two-cell footer inside the year card | **Locked** | Next up; placeholder |
| 35 | 35-you-faves-row.png | Spotlight: Faves row (hand-picked, "Seen N", Edit ›) | **Locked** | Edit › destination (see 27) |
| 36 | 36-you-faves-row-closeup.png | Close-up of 35 | Locked | Same |
| 37 | 37-you-faves-row-empty.png | Faves empty state: one line + "Find faves ›" | Locked for brand-new users (Kylie, 2026-10-22); wording Lean | Next up; "Find faves ›" should open the Edit favorites sheet |
| 38 | 38-stubs-page-list.png | "Your stubs" full page (from See all ›): ‹ You, filter, search, List/Grid/Calendar pills, month bands with year | **Locked** | – |
| 39 | 39-stubs-page-filtered-badge.png | Filter active: badge count + removable "This year ✕" chip | Locked | – |
| 40 | 40-stubs-filter-sheet.png | Filter your stubs: Dates first (From–To + All time / This year / Last year / Last 30 days), Type, Kind, Team or sport, Tags, "Show N stubs" | **Locked** | Tag chip colour shown violet: builder's call |
| 41 | 41-stubs-page-grid.png | Grid view: light cards, 3 across, about 12 per screen, rearranged info | **Locked** | – |
| 42 | 42-stubs-page-calendar.png | Calendar view: 12-month strip + month grid, dot = attended, ring = watched | Locked | – |
| 43 | 43-stubs-page-header-closeup.png | Header close-up (no year chip) | Locked | – |
| 44 | 44-recap.png | Recap: scrolling page of moments | **Locked** (scrolling page). Lean (exact moments). Share button: leave out (sharing deferred, Locked, Kylie 2026-10-22) | Share icon in header: sharing is deferred (see doc) |
| 45 | 45-ranks.png | Ranks: count only, pill tabs Teams / Venues / Cities / Artists / Tags | **Locked** | – |
| 46 | 46-ranks-tags.png | Ranks · Tags pill | **Locked** | Tag colour: builder's call |
| 47 | 47-tags-on-year-card.png | Tag stat as one of the auto-picked year-card stats | Locked | Next up |
| 48 | 48-tags-in-recap.png | "Top tag" moment in Recap | Locked | – |
| 49 | 49-tags-in-stubs-filter.png | Tags section in the Stubs filter | Locked | – |
| 50 | 50-your-year.png | Your year r3 (scoreboard): stats card, By month, Most seen top-3 tables, compact Spend card | **Locked** (approved Oct 22) | – |
| 51 | 51-your-year-most-seen-closeup.png | Close-up: Most seen tables | Locked | – |
| 52 | 52-your-year-spend-closeup.png | Close-up: compact Spend card | Locked | – |
| 53 | 53-spend-details.png | Spend details page: by category, avg ticket per seat, free events, by venue per visit, by team | Locked (part of r3) | – |
| 54 | 54-your-year-spend-empty-OLDER.png | Older r2 page, used only for the "No costs logged yet" spend empty state | Lean (empty state only) | Page layout is r2 (no Most seen). Use 50 for layout |
| 55 | 55-profile-settings.png | Merged Profile & Settings page (avatar opens it) | **Locked** (one page, no gear) | Friends; the "Home city" and "Edit favorites" rows are replaced by the Favorite cities section (60) and the Favorite teams & artists section (61) |
| 56 | 56-city-switcher.png | City switcher: Home + favorite cities only, no stars, search on top | **Locked** | Bottom link "Add favorite cities ›" → **"Edit favorite cities ›"**; Friends |
| 57 | 57-city-switcher-search.png | Switcher search for any city | Lean | Same |
| 58 | 58-city-switcher-no-favorites.png | No favorite cities yet | Lean | "Add favorite cities ›" → "Edit favorite cities ›" |
| 59 | 59-city-switcher-LIVE-reference.png | The live switcher today (all cities, stars) | Reference | – |
| 60 | 60-settings-favorite-cities.png | Favorite cities section in Profile & Settings: home with Change, favorites with minus, + Add city with search | Locked (destination). Lean (exact UI) | Annotation quotes "Add favorite cities ›"; the "Edit favorites" row below is replaced by section 61 |
| 61 | 61-favorites-section.png | Favorite teams & artists section, all groups collapsed, small Edit in header. **Full official names.** | **Locked** (signed off Oct 22) | Annotation says "Mosaic lean · Not confirmed"; it is Locked |
| 62 | 62-favorites-section-open.png | Same with Teams opened (read-only rows) | **Locked** | Same |
| 63 | 63-favorites-section-closeup.png | Close-up of the section header and groups | **Locked** | Same |
| 64 | 64-favorites-edit-sheet.png | Edit favorites sheet: search, Your faves with minus, Suggested with Follow, Done | **Locked** | Same |
| 65 | 65-favorites-edit-sheet-search.png | Sheet with "Lak" typed: only teams/artists/venues come back | **Locked** | Same |
| 66 | 66-favorites-edit-sheet-closeup.png | Close-up of search, faves and suggestions | **Locked** | Same |
