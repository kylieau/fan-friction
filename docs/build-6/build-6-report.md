# Build 6: report

Claude Code (Fable 5.1), Oct 17, 2026. Built from `build-notes-6.md` at main `75816216`; the task was frozen first in `scope-frozen.md`. Every commit went straight to `main` (one item or fix per commit, staged by name) and was pushed after `npm run build`, `scripts/titles-check.mjs` and `scripts/event-types-check.mjs` passed. No feature branch, no PR, no force-push, nothing under `private/` read or touched, no new migration.

## What was done, per item

| Item | Commit | Built |
|---|---|---|
| Docs in | `75816216` | The four files at their paths (notes, ladder research, constraints, `assets/badge-r1.png`). |
| Frozen scope | `68981d1d` | `scope-frozen.md`. |
| Health | `5feff2a6` | `event-types-check.mjs` expects 37 types (it failed on main before this build). |
| 1, 2, 5 | `6e1310fe` | One commit, because the three share one component (`EventTags.tsx`) and one row layout (`DayRow.tsx`). **1:** `listedFriction` / `pageFriction` (one predicate), `FrictionRing` (dot in a thin ring, r 3.2 / 2.0 / 0.9 on a 12-unit canvas; 14 px on rows, 16 px on the page), `FrictionMark` on line 1 after the crowd figure (Squeezed up), one pill tint for every level (`fightContainer` + new `fightInk`), `FrictionVerdict` (ring + pill) in the Crowd card's label row and in Up against, the tag row keeps the occasion tag only, Unopposed shows in both cards, share card unchanged (it inherits the tint), Favorite page rows take the ring after the figure, the Why card takes pill + ring, Stubs rows and Following cards lose the pill, `spokenRow` ends with "Swamped: other events split this crowd" or "rival events or weather" on open-air events, the map key introduces the ladder with each word's ring ("Unopposed · Squeezed · Swamped · Steamrolled by that day's lineup"). Dark mode: nothing. **2:** `topOccasion` / `showsOccasionTag` / `DayOccasionTag`; every list passes the city's whole day (`day` prop on `RowBody` and `DayRow`); the tag is right-justified on the venue line; the event page and chip card always show their own. **5:** the chip card renders `ByLine` only when the pill renders. |
| 3 | `fc53e757` | All bars `crowdBar`; the four `bar-*` classes gone; "No other big events that day." is `DayTimeline`'s own empty state; two or more untimed big events render the Time TBA band alone. |
| 4 | `ad3272c4` | `estimateMark` and `entryEstimateMark` deleted with their call sites; `crowdShort` drops "~"; `crowdFull` keeps it; the map key says "Numbers on upcoming events may be estimates." |
| 6 | `30c29933` | `Timeline.tsx` (shared): month bands, a today line (the shared band in blue), opened scrolled to the line, empty notes per side. Stubs: past oldest-first down to the line, then plans; the chips and tag picker stay; rows carry no crowd, ring or tag; the floating "+ Stub it" hides only when there are no stubs and no plans; B5-05: the stub's stored level on every row (signed in). |
| 7 | `609284d0`, `ad3e5661` | Following is the same timeline: Faves' next 60 days (`useFavoriteRows`, shared with the Faves schedule) plus followed people's Attending / Watching / Interested, past rows only from followed people in the last 60 days, own plans excluded; one row per event with its own last line; "You can edit them in Settings." links to the Faves dropdown; the segments, the sentence feed, the Faves strip and Find people leave the tab; `feedSentence` says "is attending" / "attended" (Home's strip is its last user); the Faves picker's Done returns to the Settings dropdown. |
| 8 | `c926afa5` | `SettingsPanel`: a side panel from the You avatar (`?panel=<section>`), profile card with Edit profile and Share profile, dropdowns Profile · Account · Home & cities · Crowd size · Privacy · Blocked · Faves · People · Your events · App; `/you/settings`, its three sub-pages, `/profile/edit` and `/you/people` redirect into the matching dropdown with their own parameters; B5-02: `setPastStubsVisibility` awaits every shared-place update and the dropdown says "N couldn't update, try again"; signed out, only sign-in, cities, crowd size, Faves, export and credits. `SettingsCitiesScreen.tsx` deleted; the Privacy, Crowd size and People screens became dropdown bodies. |
| 9 | `21481c23` | **9a:** `teamCode`, `isCollegeTeam`, `sportLetters`, `badgesCollide` (same code and same sport), `teamBadge(team, shown)`, `favoriteMark(fav, shown)`, the `FavoriteBadge` component (icon top-left, painted the tile's text color; a lettered tile grows, about 74–79 px) at every call site with the set it shows (strip: favorites; schedule rows: favorites; picker lists: that section; search: favorites plus the group; Home: favorites; a team page: the viewer's favorites plus that team); the icon beside a team's name on the edit and search lists removed; every badge aria-hidden with the full name on its link or row. Pros: plain code plus icon, nothing else. **9b/9c:** 53 codes changed by a checked script (current code verified against the research table for each row), `red-bulls` and `angel-city` skipped, the 22 Low rows untouched. **9d:** `dedupe.ts` keys sides by team id, maps written names to ids, and leaves a name two teams share unmatched. |
| 10 | `209df2cf`, `2c9e45ac` | Doubleheader label: own "Doubleheader Game 1", page "Doubleheader, Game 1", chip "DH1"; older saved "(Game 1)" titles read as doubleheaders; `rank?: { home?, away? }` on the event, rendered only in the full title ("#17 USC at #4 UCLA"); the titles check asserts all of it. |
| 11 | `5c41c9bd` | Nothing for run labels. The story heading reads "The evening" / "The day". |
| 12 | `38da36c9` | The ticket line and its lookup removed from the event page; `api/ticket-price.ts`, `src/data/tickets.ts`, the stored ids and the `.ticket-line` style stay. |
| 13 | `05ff7cf2` (+ 6, 8, 9) | B5-02 (item 8), B5-04 (item 9d), B5-05 (item 6), B5-07: `planCards` throws instead of falling back to the dead `plans` read, and Following shows "Couldn't load the people you follow." B5-08: see below. |
| 14 | none | No change, as the notes say (DC hub, B6-12, RDU, Merriweather, Dorton, Edgefield). |
| 15 | none | Nothing to build. The notes' wording for "More dates" and Favorites where home is set is as relayed; please confirm it against your Oct 16 message. |
| 16 | `aaf9b0c5` | build-notes-5 item 10 marked superseded; formula-v4's pull cell reads 1 / 1.2 / 1.6 / 2.5; the occasion shield marked gone; RULES.md's "Night" line superseded; `src/lib/chips.ts` and `frictionClass` removed; the DayTimeline, styles and theme comments were corrected inside items 1 and 3; `docs/design/colors.md` updated (new `fight.ink`, `fight.deep` and `unopposed` retired, bars noted). |
| Decisions log | in each item's commit | `docs/product/product-decisions.md`, section "Oct 16–17, 2026 (build 6)", one entry per item with why and rejected options; provenance per line (Kylie / lean / default / builder's call). |
| Follow-ups found | `70dcbc05`, `e412843c` | Faves suggestions skip rooms closed for good and dedupe one name (a pre-existing duplicate-key warning on the edit page); the Map sheet's rows gained a spoken name so the ring's words reach VoiceOver there. |
| Handoff | `a4a09e63` | `MEMORY_HANDOFF.md` rewritten; BACKLOG gained "Build 6 follow-ups". |

Also this session, before the build: the nightly catalog's stale-row delete (`22b24593`, `406a06c3`, `633f0994`) now works by this pass's timestamp; the Oct 16 run had failed on Los Angeles with "Bad Request" after listing every kept id in one request, so no city's catalog was written that night.

## Builder's calls (not Kylie's, not Mosaic's)
- The doubleheader's **inline** form on bars is "DH1" (the notes decided own-line, page and chip only).
- The Map sheet's "whole day" for the tag rule is every event at a known venue (the sheet's own unfiltered list).
- The stub's level shows on every Stubs row **only when signed in**; signed out keeps the old Private / Friends word on a watch only.
- Stubs' today line uses the default metro's today (as the old Upcoming tab did); Following's uses home. The same date for a Los Angeles home; an inconsistency for others.
- Following's 60-day window caps the past and the Faves horizon; followed people's plans ahead are not capped (the notes name 60 days only for Faves and the past).
- A Following row's last line is the people on it, else a star and the Fave it belongs to (the notes did not specify it).
- "No stubbed events" is rendered in sentence case; the notes wrote it lowercase.
- The key line's wording and its placement: the map key is the only place the friction concept is introduced on main.
- The Why card's visibility stayed Squeezed-up (the lean says "like the event page" for the pill with ring, not for Unopposed).
- Items 1, 2 and 5 share one commit (one component, one row layout); styles for item 3's bars rode in it.

## Conflicts and drift between the notes and the code (file:line on the final tree)
- `src/components/WhyCard.tsx` has no renderer on main: nothing imports it. Updated for items 1 and 2 anyway and marked so in its comment.
- `src/components/SearchSheet.tsx:266-300`: the People group, signed in only, already existed; item 7's search default was already built.
- `src/lib/activity.ts:105-111`: the handoff's "live copy scrubbed" claim was false on main ("is going to", "went to"); now "is attending", "attended".
- `src/data/personalLog.ts:836`: `watchShareOf` returns only private or friends; B5-05 was built with `stubLevel` (line 479) instead.
- `src/data/teams.ts:688-690`: `rice` and `washington-huskies` are visitor records beside `rice-football` and `uw-football` (RICE / WASH); not merged, because the expected-draw index names them as opponents. In a set holding both, each pair would read "RICE FB" twice.
- `src/data/teams.ts`: rows mix double and single quotes and escaped apostrophes; the first code pass misread 16 rows until the script handled both (the applied diff is exactly 53 lines).
- The notes' line numbers were one commit stale throughout; everything was found by symbol.
- `docs/build-6/build-notes-6.md` refers to `/workspace/ff-claims/...` boards that are not in this repo; only `assets/badge-r1.png` is.

## Checks run
- `npm run build` (type-check plus production build): passes after every item and at the head.
- `node scripts/titles-check.mjs`: all passed (new rows for the doubleheader forms and the rank).
- `node scripts/event-types-check.mjs`: passes (37 types; 85 "Event" listings as before).
- There is no lint script and no test suite in this repo (AGENTS.md); the three above are the checks.
- Playwright at 390 px: row-structure measurements on the Explore List, the Map sheet, the date page and Home (0 of 16 / 11 / 11 / 3 rows flagged: the ring is on the figure's centre line, the tag's right edge is the crowd's right edge within 1 px, no title overlaps the right slot); row heights on Stubs (70–88 px), Following (70–89), the Explore List (49–71), the date page (50–71), the Faves schedule (56–76) and the Faves edit list (60–78): one- and two-line titles only. **Not measured (B5-08 gap):** search result rows, the chip card and the event page title.
- Smoke test of 19 changed screens for runtime errors: none, after the favorites edit page's duplicate-key warning was fixed.
- Screenshots viewed: the date page, the Map, the Explore List, the event page, Home, Stubs (three states), Following, the Settings panel (closed, open, a deep link), the Faves strip and edit list with clashing programs and a pro pair.

## Not done, and why
- **Pro badge disambiguation** (item 9a, options A–D): open; nothing built. Pros read their plain code plus the sport icon.
- **Run labels** (item 11): held until the five data fields exist; no fallback built.
- **SeatGeek** (B5-09), **the 22 Low team codes**, **official rankings sourcing**, **rank-per-team data entry**, **the add-on research and the "Event" rows** (B5-10), **migration 0027** (B5-11): held or pending, untouched.
- **Dark mode** (S5): spec only.
- **Item 14** city and capacity rows: no change by instruction.
- **The two duplicate program pairs** (Rice, Washington Huskies): a data task the notes flagged, not decided.

## Manual steps for Kylie, in order
1. Confirm today's scheduled nightly run (GitHub has been firing it near 13:00 UTC) wrote every city: `catalog=success` and a "Wrote … to Supabase" line per metro, Los Angeles at roughly 1,221 events, a visible events-removed count on this first run. Not yet confirmed at the time of this report.
2. No migration to run; 0027 stays in `private/` for you.
3. On your phone: the Stubs and Following timelines, the Settings panel (signed in: Profile, Account, Privacy incl. "Change past stubs", People), the gold bars and the ring.

## Questions
1. Pro badges: A, B, C or D (notes 9a)? Until then Pacers and Fever read as two identical "IND" tiles.
2. College letters only on a clash (built) or always? And the clash reading: same code and sport (built) or any same code?
3. Do "DH1" inline on bars and "The evening" stand?
4. Merge `rice` into `rice-football` and `washington-huskies` into `uw-football`?
5. Item 15: is the relayed wording for "More dates" and Favorites where home is set right?
6. The Why card renders nowhere on main: keep it current, rehome it, or retire it (a "never delete" call)?
7. Should Stubs' today line follow home like Following's?
