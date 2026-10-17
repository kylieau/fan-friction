# Build 6: engineering constraints for Mock Mosaic

From Push Pilot, Oct 16, 2026 (checked on main **67c91d27**, 6:29 PM PT; file:line are on that commit). This lists where the handoff (`mosaic-build6/HANDOFF-build6-push-pilot.md`, with the 6:52 and 6:55 PM PT steering updates) and Kylie's form answers meet the live code or data and do not fit as written. Each entry says what was decided, what main does, and a suggested resolution or the question that needs an answer. The decisions themselves are in `ff-build6-notes/docs/build-6/build-notes-6.md` (cited as "notes N").

**Reading guide.** **BLOCKS** = build cannot finish the item without an answer. **BUILD-WITH** = build with the stated default and ask later. **FYI** = no action, here so nothing surprises you.

---

## Resolutions (Mock Mosaic, Oct 16, 2026, 7:04 PM PT; Kylie's answers folded in through the later Oct 16 night badge decision)

Status key: **DECIDED** = Kylie's own pick, 2026-10-16, relayed by Mosaic. **Lean** = Lean (Mosaic), not approved by Kylie. **Default** = Default, NOT approved by Kylie (Mosaic taking to her; may change). Nothing here blocks the build. Build instructions are in `ff-build6-notes/docs/build-6/build-notes-6.md` ("Decisions and defaults from the Oct 16 evening", Q1-Q14, S1-S5). Counts: 10 decided, 4 leans, 5 smaller defaults, 0 pending, 0 blocking.

| Entry | Status | Resolution |
|---|---|---|
| C-01 (Q1) | DECIDED | Chip card keeps pill, tag and by-line (ByLine iff pill). The map dot/label carries nothing. |
| C-03 (Q2) | DECIDED | Pill + 16 px ring (ring left) in the Crowd card; "Up against" keeps its pill with a ring beside it; the tag row drops the pill; Unopposed shows. |
| C-06, share card (Q6) | DECIDED | The share card KEEPS the friction pill, in the unified violet tint (rejected: removing it). |
| C-06, Stubs and Following | DECIDED earlier | Remove from Stubs rows and Following cards. |
| C-06, Favorite rows and Why card (Q14) | Lean | Favorite page rows get the ring like Explore rows; the Why card behaves like the event page. |
| C-12, wording (Q9) | DECIDED | "No other big events that day." (rejected: "No other events that day."). |
| C-12, TBA band (Q13) | Lean | A Time TBA band may render alone. |
| C-16 (Q10) | DECIDED | Remove "~" on rival rows; "~" stays only on the event page's full number next to "Estimated" and in the map-key line (verbatim: "Numbers on upcoming events may be estimates."). |
| C-18, floating button (Q3) | DECIDED | Hide "+ Stub it" only when there are no stubs and no plans. |
| C-18, rest | Default (S2) | Keep the tag row; open scrolled to the today line; always show the line with a one-line empty note. |
| C-19 (Q4) | DECIDED | Upcoming Faves events within 60 days plus followed people's Attending / Watching / Interested; past rows only from followed people; own plans excluded; privacy respected; Settings is where lists are edited. |
| C-19, badge-board surfaces (Q12) | Lean | The Faves strip and Faves day rows move with the lists to Settings. |
| C-22, avatar (Q5) | DECIDED | Avatar stays on the You tab ONLY; Settings opens from it; no avatar on other tabs; search unchanged. (Replaces "avatar on every tab" and the top-left default.) |
| C-22, rest | Default (S3) | Sub-routes redirect to open the panel with that dropdown expanded; "Share profile"; Change past stubs works inside the dropdown. |
| C-23 (Q7) | DECIDED in part (Kylie 2026-10-16, later): we want a sport icon top-LEFT, college programs carrying sport letters in the code (UCLA MBB), no W anywhere. **OPEN QUESTION, no option chosen: how clashing same-sport pro pairs (Pacers/Fever, Bruins/Fleet) are told apart.** **To confirm: letters only on a clash vs always.** | Build: top-left icon; college letters appended to `abbr` (letters FB, MBB, WBB, BSB, SB, VB, MH, WH, SOC, accepted 7:40 PM PT); the badge function takes the shown set (`teamBadge(team, shown): string`, `badgesCollide` = same code and same sport); no W; remove the icon beside the name on the edit list. **Pros: build nothing for disambiguation until Kylie picks (plain code plus icon).** Options in notes 9a and `pro-badge-options-for-kylie.md`: A league mark on clashing same-sport pro pairs only; B team colors on all badges; C colors only on clashing badges; D accept identical. Rejected: the one-rule corner mark for the decided parts; sport letters as a corner mark; the W; a fixed per-team suffix; MBB/WBB on pro; league in parentheses in the code text. |
| C-28, run labels (Q8) | DECIDED | HOLD all run labels until the data fields exist: no concert/comedy first phase, no "Night 3" / "Show 3" fallback. Follow-up fields: position within a run, total, residency/open-ended flag, announced-last-date flag, sports series length. |
| C-28, "The night" (Q11) | Lean | Sweep to the no-"night" rule: "The evening". |
| C-02, C-07, C-08 (S1) | Default | As suggested here. |
| C-24, C-25, C-26, C-29, C-31 (S4 and as written) | Default / as written | C-24 skips `red-bulls` and `angel-city`; C-26 the map chip keeps "DH1". |
| C-04 (S5) | Default | Dark mode is spec for later, not in build 6. |

### Where these resolutions meet other decided items (Push Pilot, updated Oct 16, 7:29 PM PT)

1. **C-01 vs the chip principle.** Kylie's words were that chips are "pure information rather than extracted/conclusory info". Her pick keeps the pill and tag on the chip card, so the principle is read as applying to the map dot/label only.
2. **C-03.** The pill now shows in two cards on one page (Crowd and Up against), and leaves the tag row, where the build 2 decision put it.
3. **C-19 vs M2-05 (Q12, a lean).** Faves leave Following, so the Faves badge strip and Faves day rows (two of the four M2-05 surfaces) leave with them; the D18 "Find people" bar and badge strip (built Oct 15, `69844ed`) move to Settings.
4. **C-23 changes M2-05 and needs set-aware badges (DECIDED, later version: sport letters in the college code, icon top-left, no second mark; pro question OPEN).** The W is removed and so is any corner or league mark. `teamBadge` (`src/data/teams.ts:36-39`) and `favoriteMark` (`src/data/favorites.ts:157-165`; lines 156-164 on main 0c79c92) know only one team today and return a string; `teamBadge` gains the shown set and still returns a string, now possibly with the sport letters ("UCLA MBB"). Call sites `FavoritesScreen.tsx:331-334` (strip), `:394` (day rows), `:463` (lists), `HomeScreen.tsx:279`, `SearchSheet.tsx:185`, `FavoritePage.tsx:212`. Following, Friends / People lists and profiles draw no badge today. **Colleges (same code and same sport; about 64 groups):** nearly all a school's men's/women's pair (`MBB` / `WBB` about 62, `MH` / `WH` 2); 2 groups are duplicate records (Rice, Washington Huskies; merge them or they read "X FB" twice); **12 mixed college/pro groups** (CLE, HOU x3, MIA x2, SAC, TEX x2, UTA, VAN, BC) where the college team takes letters and the pro team stays plain. **OPEN QUESTION, options A-D, none chosen (notes 9a): about 34 pro groups (Pacers/Fever `IND`, Bruins/Fleet `BOS`, Hawks/Dream, Cowboys/Renegades ...) have the same code, sport and icon. A league mark on clashing pairs only; B colors on all; C colors on clashing only; D accept identical. Build nothing for pros until picked.** Fact check (`team-colors-check-for-mosaic.md`): main has no team colors, every team badge is the same blue tile, ESPN's navies for the Pacers and Fever are 1.17:1 apart. **For Mosaic: badge width.** "UCLA MBB"-style codes are 8-9 characters; `.fav-tag` grows to about 75 px and `.fav-mark` (fixed 40 px, `styles.css:3956`) cannot hold them; the top-left icon needs the code kept clear. **To confirm with Kylie:** letters only on a clash, and which clash reading (same code and sport, or any same code). The six kept college codes stay in the data.
5. **C-06 share card.** Keeping the pill contradicts the principle that the share card shows information, not conclusions; Kylie chose to keep it. It takes the new unified tint automatically.
6. **C-28.** Run labels are on hold, so the earlier 7-day `occasionFacts.run` count stays internal. The "night" sweep touches only the evening-story heading; "Tonight" as a search input and "date night" user tags are left; `RULES.md:8` ("Night" after 5 PM) is superseded.

---

*Entries A to J below are as originally written (Oct 16, 6:58 PM PT); the Resolutions table above supersedes them wherever they differ, including every item marked BLOCKS.*

## A. Friction ring, pill, occasion tag

**C-01 BLOCKS. The card that opens from a map chip still shows the pill, the occasion tag and the by-line.**
- Decided: chips are "pure information"; no friction on map chips (handoff 1). Decided Oct 15: "by {rival}" shows only with a pill (notes 5).
- Main: `src/components/ChipCard.tsx:30` (OccasionTag), `:35` (`EventFrictionPill`), `:36` (`ByLine`), `:54-56` crowd with "~". The map chip itself (`src/map/CrowdLayer.tsx`) carries no friction mark; the card is a separate component.
- Conflict: it is unclear whether "chip" in the handoff means the map dot/label only, or the card too. If the card loses its pill, the by-line rule has nothing to attach to and "by {rival}" disappears from the map entirely.
- Suggested: **keep the pill on the card** (it is a card with a title and a verdict, closer to a row than a chip) and apply the by-line rule there; remove only what is on the chip itself. Ask: does the chip card keep the pill, the occasion tag and the by-line? Until answered, build the by-line rule only (`ChipCard`: render `ByLine` iff the pill renders).

**C-02 BUILD-WITH. Ring placement changes the row layout.**
- Decided: the ring sits on line 1 after the crowd number; the occasion tag moves to the right edge of the venue line (notes 1, 2).
- Main: `DayRow.tsx:47-57`: line 1 is icon + title + `CrowdFigure` (`:52`); line 2 is venue + `EventTags` (`:55-57`), which prints the occasion tag and the pill together.
- Constraint: `EventTags` is shared, and the pill/tag split must happen there. Line 1 gets crowded at 390 px for long titles ("title" has a two-line clamp). Row heights change on Explore, date lineup, Home, map sheet and Faves together (B5-08 re-measure applies).
- Suggested: split `EventTags` into a `FrictionRing` (line 1) and `OccasionTag` (line 2, `margin-left: auto`, venue `min-width: 0` with ellipsis); measure at 390 px.

**C-03 BLOCKS (resolved, see Resolutions). The pill is not in the event page's Crowd card today.**
- Decided: the event page's Crowd card shows the pill with a 16 px ring to its left (handoff 1; `pill-r1` board).
- Main: there IS a Crowd card (`crowd-block`, `EventScreen.tsx:403-`; correction: an earlier draft of this file said there was none), but it holds only the number. The pill appears in the tag row under the facts (`:285`, `EventTags ... withUnopposed`) and in the "Up against" card (`:354-360`).
- Ask (answered): where do the pill and ring live?

**C-04 FYI. No dark mode exists.** The handoff specs the ring in `#B39DE6` for dark mode. `src` has no `prefers-color-scheme` or theme switch. Treat it as a spec for later; no work now.

**C-05 FYI. New color token.** Pill text `#3F2A78` (8.86:1 on `#E6DDF8`) is not in `src/config/theme.ts`. Add it (e.g. `fightInk`) next to `fightContainer`. The ring color is the existing `fight #6A3FBF`.

**C-06 BLOCKS. Surfaces that print the pill today but are on the "no conclusions" list.** Decided: not on Following cards, Stubs rows, the share card (handoff principle). Main: `StubRows.tsx:52`, `FollowingScreen.tsx:231`, `ShareCard.tsx:57`; also `FavoritePage.tsx:267,347,410` (team and artist pages), `WhyCard.tsx:93` (Home "Why tonight"), and the "toughest fights" and stamp data in `YourYear.tsx`.
- Not covered by the handoff: Favorite pages and the Why card. Suggested: Favorite page rows are lists, so they get the ring like Explore rows; the Why card is a list of rivals, so pill/ring as on the event page. **Remove from Stubs, Following and the share card as decided.** `entry.stamp.friction` stays in the data (it feeds the year stats). Ask Kylie about the share card only if she wants the verdict gone from the thing people post.

**C-07 BUILD-WITH. "Highest occasion per day" needs a rule for what "day" and "list" mean.**
- Decided: on any list only the day's top level shows the tag; ties show both; if the top is Routine, none; the event page always shows its own (notes 2).
- Main: the tag prints per event with no list context (`EventTags.tsx:11-22`; also `ChipCard.tsx:30`, `WhyCard.tsx`, `FavoritePage.tsx`).
- Constraint: the rule needs the full day's events in the city, not the visible slice (a filtered or search list could hide the real top event). Surfaces that have no "day": Favorite pages (a team's dates across weeks) and search results.
- Suggested: compute the top level from the city's whole day (`getCityDate` events) and pass it to `RowBody`; on lists spanning several days (Favorite pages, search) apply it per date; the chip card follows C-01. Say so if you want something else.

**C-08 BUILD-WITH. VoiceOver name for rows.** Decided: the ring is part of the row's accessible name. Main: `spokenRow()` (`DayRow.tsx:84-86`) builds title, time, venue, "about N"; used by DateScreen, HomeScreen and DayRow. Add the friction sentence there ("Swamped: other events split this crowd"; open-air events "rival events or weather", which needs `isOpenAir`). Map chips have their own spoken label (`CrowdLayer.tsx:538`) and must **not** gain it.

---

## B. Local Competition (bars now gold, Oct 16, 6:55 PM PT)

**C-09 BUILD-WITH. Live bars are colored by friction; the new rule is one gold fill.**
- Decided: every bar `crowdBar #E3A600`, no outline, no violet, no ring, no per-event color; gold is identity, not size (notes 3).
- Main: `DayTimeline.tsx:76-77` picks `bar-squeezed / swamped / steamrolled / none`; `styles.css:6578-6592` colors them `#B39DE6 / #6A3FBF / #2C1A57 / #AEB8C6`. `DayTimeline.tsx:12-15` and `styles.css:2330-2331` comments say "violet of its friction".
- Resolution: one `.bar` rule with `background: var(--crowdBar)`; delete the four `bar-*` classes, the `frictionClass` import and the `cls` logic. No outline or ring exists to remove.
- Rejected options are recorded in notes 3 (neutral grey `noFightBar #AEB8C6`, violet per-event color, ring, 44 px padding). Note the grey one equals today's no-friction bar, which is why it was not a visible change.

**C-10 FYI. Contrast.** Gold `#E3A600` is 2.16:1 on the white card and 1.82:1 on the track `#E8ECF2`. Both are below 3:1 (WCAG 1.4.11 for graphics), but the live bars are no better (violet `#B39DE6` 2.36 / 1.99, grey 2.01 / 1.69). The label and crowd number carry the information, so nothing is lost; flag only if Kylie wants a darker gold for bars (that would be a new token, not `crowdBar`).

**C-11 BUILD-WITH. "Bars show start time and running time" is position and length, not text.** Main: no time text is printed on a bar; the position on the hour axis and the width are the start and running time (`DayTimeline.tsx:99`; `runningHours`, `src/lib/windows.ts`). Running time is a rough per-type estimate, not a feed value. Built as live; say so if you wanted labels.

**C-12 BUILD-WITH. The quiet-day line is inaccurate as worded for two cases.**
- Decided (DEFAULT): "No other events that day."
- Main: `DayTimeline` returns `null` when fewer than two events are 5,000 or more, or none has a start time (`:25`). The card still renders its "Local Competition" heading (`DateScreen.tsx:311-317`), which is the "looks like a glitch" case. But (a) the day can hold smaller events, so "no other events" is not literally true, and (b) the day can have two big events that are all "Time TBA" (the TBA band only shows when at least one is timed).
- Suggested: show the line in `DateScreen` when `DayTimeline` would return null: "No other events that day." for DEFAULT; if you prefer accuracy, "No other big events that day." (matches the map key's "Nothing big on this date."). Handle (b) by letting the TBA band render alone (needs your OK, it changes `:25`).

**C-13 FYI. 29 px rows against the 44 pt tap rule.** The row is a link (`.bar-link`), 17 px label + 4 px margin + 8 px track (`styles.css:2301-2321`). Kylie accepted 29 px, "do not pad". This is a deliberate exception to the 44 pt house rule; no action.

**C-14 FYI. The TBA bar.** `.bar-tba` (`styles.css:2348-2355`) is a blank dashed track, "not a read", whatever the friction (Kylie, Oct 16). It stays as is; with gold timed bars above it, the dashed grey reads as "no time". Its comment (`:2330-2331`) still says "in the event's friction color" and should be corrected.

**C-15 FYI. Stale theme comments.** `src/config/theme.ts:46` says `fight` is for "the Local competition label and rule"; `:52` calls `noFightBar` "A crowd bar with no friction". After C-09, `noFightBar` has no user (`styles.css:6068` may keep one; check before deleting).

---

## C. "~" and crowd figures

**C-16 BUILD-WITH. "~" is still in eight places.** Decided (notes 4). Main: `estimateMark` (`src/data/crowdFigures.ts:59-61`), `entryEstimateMark` (`:70-72`), `crowdShort` (`src/map/crowdPoints.ts:126`, `:136`), at call sites `ChipCard.tsx:54`, `DayTimeline.tsx:90`, `StubRows.tsx:65`, `YourYear.tsx:91`, `EventScreen.tsx:383`. The "6.7k+" floor mark already carries no "~" and stays.
- **Decision for you:** `EventScreen.tsx:383` is the crowd on each **rival row inside the event page's "Up against" card**, a list. The handoff says "~" stays only on the event page's full number. Suggested: remove it there too (it is a list row).
- Add the map-key line, exact copy: "Numbers on upcoming events may be estimates." (`MapScreen.tsx:385-397`).

---

## D. By-line

**C-17 BUILD-WITH.** `ByLine` has one user, `ChipCard.tsx:36`. The rule "only with a pill" is `ChipCard: show ByLine iff EventFrictionPill returns non-null` (`EventTags.tsx:37-40`: needs `feeds-friction` and `showFriction`). If C-01 removes the card's pill, delete `ByLine` instead.

---

## E. Stubs and Following

**C-18 BLOCKS. A single timeline with a "today" line needs a list model, and the tag chips and "+ Stub it" button have no home.**
- Decided: Stubs is one timeline with month bands and a today line, no day bands; empty past copy "no stubbed events", no "Stub it" button, only "Browse today in Explore ›" (notes 6).
- Main: two tabs (`StubsScreen.tsx:120-123`); past rows grouped by month (`:200`); the tag filter chips under Recent (`:51-57, 146`); a floating "+ Stub it" that shrinks to "+" (`:37-40`); upcoming plans are separate data (`plansAhead`).
- Questions: (1) Does the floating "+ Stub it" stay when the list is not empty (the empty state is the only place Kylie named)? (2) Does the tag filter row stay (it filters past stubs only)? (3) Where does the screen open: scrolled to the today line (handoff Following says "opens on Today")? (4) When there is nothing in the future (or nothing past) is the today line shown with a one-line empty note?
- Suggested defaults: keep the floating button and the tag row; open scrolled to the today line; show the line always.

**C-19 BLOCKS. Following as "the event timeline IS the tab" has no event source defined.**
- Decided: the same timeline as Stubs; each row shows its own date and time; Faves, Friends and People lists move to Settings; no friction on cards (notes 7).
- Main: Following is two segments (`FollowingScreen.tsx:58-66`): Faves (`FavoritesScreen embedded`) and Friends, whose feed comes from the people you follow (`profiles.ts`, `followingFeed`), grouped Today / Coming up / Earlier (`:344-346`). The Faves segment shows next dates for teams, artists and venues you follow.
- Question: **which events fill the timeline?** The union of (a) events at your Faves and (b) what your followed people answered (Attending / Watching / Interested), each respecting stub privacy levels? Is the user's own plan included? With the lists gone from the tab, how does a user add a Fave (the Faves edit strip is the entry point today)?
- Suggested: the union of (a) and (b), own plans excluded (they are in Stubs); keep the Settings lists as the only place to add or remove; show friend rows with the friend's name and state on the last line.

**C-20 BUILD-WITH. "Going" copy is still live.** The handoff says the live copy was scrubbed; it was not. `src/lib/activity.ts:108` ("is going to"), `src/screens/FollowingScreen.tsx:351` (comment repeating it), `src/data/profiles.ts:447` and `:545` (comments). Build: "<Name> is attending ..." and "<Name> attended ..." (DEFAULT); keep "is watching" and "is interested in". The sentence feed is removed with the timeline anyway, so check that no other surface calls `feedSentence`.

**C-21 BUILD-WITH. People in search.** `SearchSheet.tsx` has favorites and events; people search needs a profiles lookup (`profiles.ts`) that respects blocks and privacy. DEFAULT grouped Events / Teams / People; no confirmation needed to start, but a signed-out user should not see a People group.

---

## F. Settings

**C-22 BLOCKS. Side panel, one page of dropdowns: deep links and signed-out state.**
- Decided: avatar is the only door, opens a side panel, sections are dropdowns on one page, Privacy and Blocked become dropdown contents (notes 8).
- Main: the avatar opens a bottom sheet (`YouScreen.tsx:116, 151-165`) with Edit profile, Settings, "Share my handle"; Settings is a page of links to `/you/settings/cities`, `/crowd`, `/privacy` (`SettingsScreen.tsx:131-153`, routes `App.tsx:94-97`), each with `BackLink to="/you/settings"`; `ProfileEditScreen.tsx:110-112` returns to `/you/settings`. Signed out, the avatar goes to sign-in (`YouScreen.tsx:116`).
- Questions: (1) Keep the three sub-routes as redirects that open the panel with that dropdown expanded (existing links and bookmarks)? Suggested yes. (2) The panel has "Share profile" where main says "Share my handle": rename? (3) Is the panel available on every tab (the avatar is on You)? Handoff says "the avatar is the only door", which suggests the avatar must exist on every tab; today it is on You only. (4) The "Change past stubs" action and its "N couldn't update" result (B5-02) live in Privacy; they must work inside a dropdown.

---

## G. Team badges and codes

**C-23 (RESOLVED in part: DECIDED by Kylie 2026-10-16, later version: sport letters in the college code, icon top-left, no second mark. Pro disambiguation is an OPEN QUESTION depending on the color answer.) Original question below, kept for history.**
- Decided: M2-05 option A for all sports teams (as first written: sport icon top-right, "W" bottom-right for women's, code text unchanged), no default to men's sports; remove the icon beside the full name on the edit list (notes 9a). Kylie also answered B6-10 "keep all six college codes" (DU, NOVA, UP, UST, UDM, NEU) and B6-11 "apply the Medium rows". **Superseded by the later decision: no W, no corner or league mark, sport icon top-LEFT, sport letters in the college code ("UCLA MBB").**
- Main: `favoriteMark` / `teamBadge` return text only (`favorites.ts:157-165`, `teams.ts:36-39`); seven call sites, all aria-hidden (`SearchSheet.tsx:185`, `FavoritePage.tsx:212`, `FavoritesScreen.tsx:332,394,463`, `HomeScreen.tsx:279`).
- Question (answered): "would rather change the code" does mean the college code changes: sport letters in the badge code ("UCLA MBB"), only on a clash (to confirm). Option C is back for colleges; B (second line) and every corner/league mark are rejected.
- Also needed: the badge's accessible label. The badge is aria-hidden, so the "Reads aloud" line on the board needs a label on the surrounding row or link; check each call site.

**C-24 FYI / BUILD-WITH. Team code application (B6-02 to B6-11).**
- B6-11 "apply the Medium rows" would, applied literally, overwrite two of Kylie's own answers: `red-bulls` (NY, against B6-05 keep RBNY) and `angel-city` (LA, against B6-04 keep ACFC). **Skip those two.** The 58 Medium rows also include the three fills already applied (RUTG, WASH, BGSU) and the six codes she decided; that leaves **53** changes, six of them from her form (Commanders, Wizards WAS; Lightning TBL; KC Current KC; Spurs SAS; Mercury PHO) plus 47 more (notes 9c). The 22 Low rows are held.
- Line numbers in the form's `ref` fields are one or two lines stale (Spurs `:627` not `:626`, Sharks `:466`, Angel City `:410`, Red Bulls `:439`, Commanders `:670`, Wizards `:656`).
- After applying, many cities have several teams on one code (CLE: Guardians, Cavaliers, Browns, Monsters, Cleveland State; SAC: Kings, River Cats, four Sac State teams; HOU, MIA, TOR, COL; WAS: Commanders, Wizards, Mystics, Spirit). That is expected and is why M2-05's sport icon matters. Nothing else reads `abbr` (`eventTitle.ts:854` for chip text), so the change is data only.
- Colorado Mammoth is `COL`, the same code as the Columbus Clippers' new `COL`. Different metros, no collision in a list.

**C-25 BLOCKS (small). The Mammoth fix by id does not cover feeds that give names only.** Decided: match by team id in the duplicate check (B5-04). Main: `dedupe.ts:33` keys by `TEAMS[id].shortName` when the feed gives ids (both clubs are "Mammoth"), but when it does not, `teamName()` (`:22-29`) maps every name, short name and alias to `norm(shortName)`, so "Utah Mammoth" and "Colorado Mammoth" both map to "mammoth" (`:34-35`). Suggested: map names to **ids** (full names are unique), and key both branches by id; leave a bare ambiguous "Mammoth" unmatched rather than guessing.

---

## H. Titles and labels

**C-26 BUILD-WITH. Doubleheader wording.** Decided: "Doubleheader Game 1" on its own line on rows, "Doubleheader, Game 1" on the event page, never plain "Game N". Main: `eventTitle.ts:293` (`short: 'Game 1'`, chip `DH1`) and `:358-361` ("Doubleheaders are not designed yet"). `scripts/titles-check.mjs:35` asserts the old string; update it. Open: the map chip keeps "DH1" (11 pt-limited)? Suggested yes.

**C-27 FYI. Rank in the title has no data.** No rank or seed field exists in `src/data/types.ts`. The event page shows a rank only when a source value exists (DEFAULT); with no source, nothing changes. The sourcing research is PENDING.

**C-28 BLOCKS (data). Run labels cannot be rendered from what is stored.**
- Decided: "Night 2 of 5" / "Show 2 of 5" per run / "Game 2 of 3" / unknown total "Night 3" / open-ended residency shows the date, "Final night" at the last date; "of N" computed live, never stored (notes 11).
- Main: `ticketmasterSource.ts:170-183` sets `occasionFacts.run` = the count of that performer's events at that venue within 7 days, only when 2 or more. That is a run **size** (and a 7-day window around each date, so two runs a week apart blur), not a position, and it feeds the occasion points (`occasion.ts`). Sports: the game number is stored (`stakes.game`, `types.ts:177-180`; MLB `seriesGameNumber`, `mlbSource.ts:104`; ESPN `gameNumberOfSeries`), the series length is not.
- Needed: (a) position and total computed at render from the venue's events for the performer (sort by date; contiguous dates; the noun rule needs each date's start time and the number of shows per date; dedupe may merge two shows on a day, check `sameOccurrence`); (b) "unknown or growing total" needs a rule, e.g. the last stored date is within N days of the feed's horizon; (c) "open-ended residency" and "Final night" have no field: a `residency` flag or an announced-last-date flag is needed; (d) "Game 2 of 3" needs series length from the feed or a series count from stored games; (e) where the label sits: DEFAULT is the grey label line used for "Doubleheader Game 1".
- Suggested: ship the concert/comedy case first from stored dates with the "Night 3" / "Show 3" fallback when the total is not certain; leave residency and sports "of N" until the fields exist. Ask whether that phasing is acceptable.
- **"Night" rule.** The handoff says "night" is out of app copy except run labels. Main still says "The night" for the evening story heading (`EventScreen.tsx:512-513`: "The night" / "The day") and comments reference "Famous nights". Decide whether to sweep those labels now.

---

## I. Ticket links, SeatGeek, build health

**C-29 BUILD-WITH. Removing ticket links.** Hide the line (`EventScreen.tsx:275-281`), stop the lookup (`:169-205`, `wantsPrice` false), keep `api/ticket-price.ts`, `src/data/tickets.ts` and the stored `ticketmasterId` (set at `ticketmasterSource.ts:304`). **Do not strip `ticketmasterId`**: `artistSite()` reads it for Favorites' official-site link (`artistSite.ts:7`, `FavoritePage.tsx:150`). Dead CSS (`.ticket-line`) can stay.

**C-30 FYI. SeatGeek HOLD.** No work (B5-09).

**C-31 BLOCKS (small). Checks.** `scripts/event-types-check.mjs:18` expects 36 types, main has 37 ("Live screening"), so the check fails (S1). The earlier `startForecastIndex.ts` TS2590 build break is fixed (commit `c4d7607`, parsed JSON); re-run `npm run build` after the build 6 changes. B5-08 (re-measure rows at 390 px) has no script; it is a measured pass over every list that changes in C-02, C-18 and C-19.

---

## J. Docs

**C-32 FYI.** Fix: `docs/build-5/build-notes-5.md` item 10 (line 1086, "~" on compact surfaces); `docs/reference/formula-v4.md:32` (pull weights 1/1.1/1.3/1.6; code is 1/1.2/1.6/2.5, `occasion.ts:81`); `docs/reference/overlap-and-date-rating-v3.md:20` (Occasion shield, gone from code); `DayTimeline.tsx:12-15` and `styles.css:2330-2331` and `theme.ts:46,52` comments (C-09, C-14, C-15); `src/lib/chips.ts` (`sheetBadges`, imported nowhere, still describes a "Moderate" ladder).

---

## Questions that block, in the order they matter

1. **C-01** Does the chip card keep the pill, the occasion tag and the by-line?
2. **C-03** Where does the event page's pill and ring live (tag row, Up against card, or a Crowd card)?
3. **C-18, C-19** Stubs timeline details (floating button, tag row, opening position) and what fills the Following timeline.
4. **C-22** Settings: sub-route redirects, avatar on every tab, the three names.
5. **C-23** Answered in part (Kylie, later Oct 16): sport icon top-left, college sport letters in the code (UCLA MBB), no W. Open, none chosen: how clashing same-sport pro pairs are told apart (options A-D in notes 9a). To confirm: letters only on a clash vs always.
6. **C-28** Run labels: ship the concert/comedy case first?
7. **C-06 / C-16** The share card's verdict, and "~" on the event page's rival rows.
