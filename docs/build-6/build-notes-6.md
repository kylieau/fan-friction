# Build 6 notes

Grounded against main **67c91d27** (Oct 16, 2026, 6:29 PM PT; fetched 6:58 PM PT). Written as instructions to the builder: each item gives what to change, what the code does today (file:line on that commit), why, and the options turned down.

**Sources.** Mock Mosaic's handoff (`/workspace/ff-claims/mosaic-build6/HANDOFF-build6-push-pilot.md`, Oct 16, 6:50 PM PT, plus two steering updates at 6:52 and 6:55 PM PT); Kylie's 25 form answers (`/workspace/ff-claims/build6-form-answers-oct15.json`, exported Oct 15, 11:18 AM PT); `build6-outstanding.md` (Oct 15 decisions); `build6-buckets.md`; Kylie's Oct 16 instructions to Push Pilot. Conflicts between these decisions and the live code are in `/workspace/ff-claims/build6-eng-constraints-for-mosaic.md`. The research behind the two ladders is in [`research/friction-and-occasion-ladders.md`](research/friction-and-occasion-ladders.md).

**Tags.** **DECIDED** = Kylie said so in her own words or form answers. **DEFAULT** = Mock Mosaic's best shot where she left it loose: build it, do not let it stop the build, she can change it later. **PENDING** = waiting on Kylie or a render: do not build yet.

**House rules this build keeps (from the handoff).** Letterboxd density; 11 pt minimum text; 44 pt tap targets. No "going" anywhere: Attending / Watching / Interested. Unknown crowd = blank, never "unsized". Away-at-Home naming stays. Violet = friction, gold = crowd, blue = action; no gold text on white. "Night" stays out of app copy except run labels (item 11).

**Principle (Mosaic's reading of Kylie's answers).** Conclusion marks (friction ring, occasion tag) live on Explore, date and list rows and on the event page only. Chips, Local Competition bars, Stubs rows, Following cards and the share card show information, not conclusions. Kylie's words: chips are "pure information rather than extracted/conclusory info"; bars let users "come to the conclusion on their own without the app telling them".

## Decisions and defaults from the Oct 16 evening (Q1-Q14)

Kylie wants unknowns not to stall the build. Between 7:08 and 7:27 PM PT on Oct 16 she answered Q1-Q10 (her own picks, relayed by Mock Mosaic). Q11-Q14 are Mosaic's leans, not asked of Kylie (labeled **Lean (Mosaic), not approved by Kylie**); S1-S5 are smaller defaults (labeled **Default, NOT approved by Kylie (Mosaic taking to her; may change)**). Each is a buildable instruction. Nothing in this list blocks the build.

**Counts: 10 decided, 4 Mosaic leans (Q11-Q14), 5 smaller defaults (S1-S5), 1 open question (pro badge disambiguation, options A-D, none chosen; nothing built for pros), 1 to-confirm (college letters only on a clash vs always), 0 pending, 0 blocking.** Pending work outside this list is unchanged and does not block: official-rankings sourcing, the 22 Low team codes (HOLD), SeatGeek (HOLD), add-on research, migration 0027, and the run-label data fields (item 11).

### Decided (Kylie, 2026-10-16)

| # | Question | Her pick | Item |
|---|---|---|---|
| Q1 | Does the chip card keep the pill, tag and by-line? | Yes. The card keeps pill, occasion tag and "by {rival}" (by-line iff pill). | 5 |
| Q2 | Where do the event page's pill and ring live? | Pill + 16 px ring (ring left) in the Crowd card; "Up against" keeps its pill with a ring beside it; the tag row drops the pill. | 1 |
| Q3 | Floating "+ Stub it" | Hide it only when there are no stubs and no plans. | 6 |
| Q4 | What fills the Following timeline | Upcoming Faves events within 60 days plus followed people's Attending / Watching / Interested; past rows only from followed people; own plans excluded. | 7 |
| Q5 | Avatar and Settings | Avatar stays on the You tab ONLY; Settings opens from it; no avatar on other tabs; search unchanged. (Changed from the earlier default "avatar on every tab / top-left".) | 8 |
| Q6 | Share card | Keeps the friction pill, in the unified violet tint. | 1 |
| Q7 | Team badges | **We want:** sport icon top-LEFT; college programs carry sport letters in the code (UCLA MBB); no W anywhere (DECIDED, Kylie 2026-10-16, later). **We want clashing same-sport pro pairs (Pacers/Fever, Bruins/Fleet) told apart: HOW IS NOT DECIDED.** Options A league mark on clashing pairs only, B colors on all, C colors on clashing only, D accept identical; none chosen; build nothing for pros (plain code + icon) until she picks. **To confirm: letters only on a clash vs always.** (Changes M2-05.) | 9a |
| Q8 | Run labels | HOLD all run labels until the data fields exist. No first phase, no "Night 3" / "Show 3" fallback. | 11 |
| Q9 | Quiet-day line | "No other big events that day." | 3 |
| Q10 | "~" on rival rows | Removed. "~" stays only on the event page's full number next to "Estimated" and in the map-key line. | 4 |

### Leans (build them; they do not block)

| # | What | Lean | Item |
|---|---|---|---|
| Q11 | "The night" heading vs the no-"night" rule | Sweep to **"The evening"** ("The day" stays for daytime starts). | 11 |
| Q12 | Badge-board surfaces (Faves strip, Faves day rows) leave Following with the lists | They move with the lists to Settings; the badge work applies to the Settings lists, team page header, edit list, Home and search. | 7 |
| Q13 | Time TBA band when no event is timed | It renders alone (no axis, no hourly strip). | 3 |
| Q14 | Favorite page rows and the Home "Why tonight" card | Favorite rows get the ring like Explore rows; the Why card behaves like the event page (pill with a ring left of it). | 1 |

### Smaller defaults (**Default, NOT approved by Kylie (Mosaic taking to her; may change)**)

| # | What | Default | Item |
|---|---|---|---|
| S1 | Row layout, top-of-day tag rule, VoiceOver name (C-02, C-07, C-08) | As built in items 1 and 2. | 1, 2 |
| S2 | Stubs details | Keep the tag row; open scrolled to the today line; always show the line with a one-line empty note. | 6 |
| S3 | Settings panel details | Old sub-routes redirect to open the panel with that dropdown expanded; "Share profile"; "Change past stubs" works inside its dropdown; signed-out shows only what a signed-out user can use. | 8 |
| S4 | Handoff defaults | Helper tip wording, Following sentences ("<Name> is attending ..."), people search grouped Events / Teams / People, Settings dropdown order, rank in the title only when a source exists, map chip keeps "DH1". | 1, 7, 8, 10 |
| S5 | Dark mode | Spec for later; **not in build 6**. | 1 |

**Builder's calls inside a decided item** (not Mosaic's, not Kylie's; flagged where they appear): which set each badge call site passes (item 9a).

**Open flags that do not block** (details in the items): Q1 reads "chip" as the map dot/label (item 5); Q7's pro disambiguation is an open question with options A-D and none chosen, and the wider college badge ("UCLA MBB") needs a width call from Mosaic (item 9a); Rice and Washington Huskies are duplicate records (item 9a); Q4 and Q12 remove two of M2-05's four badge surfaces from Following (item 7).

---

## Approved so far (build 6)

1. Friction as a ghost ring on rows, one violet pill tint on the event page (item 1).
2. Occasion tag: top level per day only, right-justified on the venue line (item 2).
3. Local Competition: no read tile, quiet-day line, bars in gold with no violet and no ring (item 3).
4. No "~" except the event page's full number and one map-key line (item 4).
5. "by {rival}" only beside a friction pill (item 5).
6. Stubs as one timeline with a today line (item 6).
7. Following as the same timeline; Faves, Friends, People move to Settings (item 7).
8. Avatar opens a Settings side panel, one page of dropdowns (item 8).
9. Team badges: disambiguate every team; team codes (item 9).
10. Doubleheader wording, rank in the title, "Size unknown" stays (item 10).
11. Run labels: HOLD until the data fields exist (item 11).
12. Ticket links removed for now (item 12).
13. Build 5 review fixes (item 13).
14. City and data answers (item 14).
15. "More dates" and Favorites where home is set (item 15).
16. Stale docs to correct (item 16).

---

## 1. Friction indicator: ghost ring on rows, one violet pill (DECIDED)

**Build instruction.**
- **Rows only (compact):** a "ghost ring" in ONE violet, `#6A3FBF` (the existing `fight` token, `src/config/theme.ts:47`). Shape alone carries the ladder: a dot inside a ring. **Squeezed** = dot nearly fills the ring (r 3.2); **Swamped** = about half (r 2.0); **Steamrolled** = pinpoint (r 0.9). Outer ring "a tiny bit thinner" than the first draft (Kylie, M5-06). Shown from Squeezed up; **Unopposed shows no ring on lists.**
- **Placement on rows:** first line, beside the crowd figure, after the number (M1-02). Today the pill sits on the second line with the occasion tag (`src/components/DayRow.tsx:55-57`, `<EventTags event={e} />` in `day-row-line2`); the crowd figure is on line 1 (`DayRow.tsx:52`). Move the friction mark to line 1; leave the occasion tag on line 2 (item 2).
- **Not on:** map chips, Local Competition bars, Following cards, Stubs rows, the share card (principle above).
- **Event page:** the word pill stays. The Crowd card shows the pill with a 16 px ring to the LEFT of the pill; the ring has no tap target. **Unopposed shows on the event page** (the existing `withUnopposed`, `src/screens/EventScreen.tsx:285`, and `:360`).
- **Pill colors, option B:** all four pills (Unopposed, Squeezed, Swamped, Steamrolled) use the SAME violet tint: fill `#E6DDF8`, text `#3F2A78` (8.86:1, checked). Only the word and the ring change by level. Kylie's correction: Unopposed gets the same tint, NOT pale grey (the `pill-r1` board still shows grey; ignore that detail).
- **Accessibility:** the ring is part of the row's accessible name, with no separate tap target. VoiceOver: "Swamped: other events split this crowd"; for open-air events, "rival events or weather". A "Swamped" event can be weather-driven with no rival (`src/data/formulaRead.ts`: friction = `verdictFromScore(max(crowd-fight score, conditions score))`), so the open-air wording is required, not optional.
- **Helper tip (DECIDED to add; wording DEFAULT):** the tip that introduces the concept carries the association "[Unopposed / Squeezed / Swamped / Steamrolled] by that day's lineup". Write it so each word reads as "<word> by that day's lineup".
- **Dark mode (spec only, NOT in build 6):** lift violet to `#B39DE6` (white tile on the `#B39DE6` bar). The app has no dark theme today (no `prefers-color-scheme` or theme switch in `src`), so this is a spec for when one exists. Do not build it now; do not add a theme switch for it.

**Event page and the other surfaces.**
- **DECIDED (Kylie, 2026-10-16, via Mock Mosaic)** (Q2) **Crowd card** (`crowd-block`, `src/screens/EventScreen.tsx:403-`; it has no pill today): add the friction pill with a 16 px ring to its LEFT, following the `pill-r1` board. The pill shows only when the event feeds friction (5,000 or more). Unopposed shows. One shared component draws ring + pill.
- **DECIDED (Kylie, 2026-10-16, via Mock Mosaic)** (Q2) **"Up against" card** (`EventScreen.tsx:354-360`): keeps its own pill, with a ring beside it (same component).
- **DECIDED (Kylie, 2026-10-16, via Mock Mosaic)** (Q2) **Tag row under the facts** (`EventScreen.tsx:285`): drops the pill and keeps the occasion tag only (`<EventTags>` loses `withUnopposed`; Unopposed now shows in the two cards above).
- **DECIDED (Kylie, 2026-10-16, via Mock Mosaic)** (Q6) **Share card (`ShareCard.tsx:57`) KEEPS the friction pill**, in the unified violet tint (it reuses `FrictionPill`, so it picks the tint up automatically; its white outline, `styles.css:6227`, stays). Rejected: removing the pill from the share card.
- **Lean (Mosaic), not approved by Kylie** (Q14) **Favorite page rows** (`FavoritePage.tsx:267,347,410`): replace the pill with the ring, like Explore rows (Squeezed up; no Unopposed).
- **Lean (Mosaic), not approved by Kylie** (Q14) **Home "Why tonight" card** (`WhyCard.tsx:93`): behaves like the event page: pill with a ring left of it.
- **Stubs rows and Following cards:** nothing (decided, items 6 and 7). Remove `StubRows.tsx:52` and `FollowingScreen.tsx:231`; the stored `entry.stamp.friction` stays (year stats use it).
- The same pill now appears twice on the event page (Crowd and Up against); the `a.why` line stays in "Up against".

**Rationale and rejected options for the decided Q2 and Q6 picks.** Kylie's picks were relayed without further rationale. Mosaic's reading: the verdict belongs where the crowd is read (the Crowd card) and where the rivals are listed (Up against), and the tag row is left for the occasion tag alone; the share card is what people post, and the verdict is part of what they share. Rejected for Q2: keeping the pill in the tag row; a pill in only one of the two cards. Rejected for Q6: removing the pill from the share card (the "information, not conclusions" principle would have argued for it; Kylie chose to keep it).
**What the code does today.**
- Ladder words: `FRICTION_LEVELS = Low, Moderate, Heavy, Extreme` mapped to Unopposed, Squeezed, Swamped, Steamrolled (`src/config/scoreLabels.ts:40,48`). Low hides (`showFriction`, `scoreLabels.ts:59`).
- Bands: score < 3, < 5.5, < 8, >= 8 (`src/data/formula/crowdFight.ts:88`, "placeholder bands").
- Live pills are four different fills: Unopposed pale grey, Squeezed pale violet with dark text, Swamped solid `#6A3FBF` white text, Steamrolled `#2C1A57` white text (`src/styles.css:5784-5810`). That is the rejected option A.
- Only events of 5,000 or more feed friction (`FRICTION_ATTENDEES`, `src/data/read.ts`; `sizeTier(e) === 'feeds-friction'`).

**Why (Mosaic's reasoning from Kylie's answers).** Friction should be something the eye reads without a new vocabulary and without competing with the date read. A ring whose inner dot shrinks reads as "less of the crowd left" without borrowing a power or capacity metaphor, and a single violet means the pill and ring never run in opposite directions.

**Rejected, with why.**
- Fill bar and bracket ticks: read as capacity or progress.
- Bitten disc, moons, eroded disc, shrinking disc: Kylie: looks like moons; also mimics power.
- Iris and pinched waist: shortlisted, lost to the ghost ring.
- "Sinking" sunset/weather metaphor: dismissed.
- Coloring the crowd figure (F5).
- Rising-bar meters (F3): would look like the date read.
- Changing shape AND color together: confusing.
- Pill option A (live colors): the pill darkens while the ring's ink lightens, so they run opposite.
- Pill option C (reversed): the palest pill is 1.1:1 on white and reads backwards.
- Unopposed as pale grey (Kylie's correction).
- Any resemblance to the date read: the date read (Chill / Mild / Spicy / Brutal / Cooked, `scoreLabels.ts:7-12`) is a different five-level ladder and includes gridlock; friction is an event's own crowd fight plus conditions.

**Mockups.** `batch5/compact-r4.png` (ring spec: greyscale, deuteranopia, dark mode, VoiceOver); `batch5/pill-r1.png` (pill B and the event-page ring; ignore its grey Unopposed and its "55,000" without the "~" the live page shows next to "Estimated"); `batch5/v2/M5-02`, `M5-03`; `combined-v3/final/M1-02`. Not applicable: `batch5/compact-r1..r3`.

---

## 2. Occasion tag (DECIDED)

**Build instruction.**
- Keep the existing outlined uppercase word: 1 px `#4B5A70` (`tagInk`, `theme.ts:57`), 11 px / 700, 18 px tall. **NOTABLE / MAJOR / MARQUEE**; Routine shows none. **Marquee has no special style.** No flags, no symbols (Kylie: self-explanatory word; "don't want to give users another symbol to keep track of").
- **On any list of events** (Explore and date lists, Home today list, map sheet): only the event(s) with the highest occasion level that day show the tag. Ties show both. If the top level is Routine, none. **Event pages always show their own tag.**
- **Position:** on the venue line, right-justified at the right edge (replaces "next to the venue"). Long venues shorten with an ellipsis. The `occasion-r1` board still shows the old "next to venue" placement; superseded.
- **Excluded:** the grey "Home opener" and "Season finale" labels are a separate mechanism (Kylie excluded them). Season finale has no source field; Kylie says no need to include it.

**Rule details (S1; C-07).** **Default, NOT approved by Kylie (Mosaic taking to her; may change)**.
- Compute the day's top level from the city's WHOLE day (the full event list for that city and date), not from the visible, filtered or searched slice, and pass it to the row. Show the tag only on events at that level; ties show both; a Routine top shows none.
- Lists that span several days (Favorite pages, search results): apply the rule per date.
- **DECIDED (Kylie, 2026-10-16, via Mock Mosaic)** (Q1) The chip card (item 5) keeps its own occasion tag: it is a single event, like the event page. Event pages always show their own.

**What the code does today.** `OccasionTag` returns `null` for Routine and draws the outline word (`src/components/EventTags.tsx`); `EventTags` prints it on every row that has one, followed by the friction pill (`EventTags.tsx:11-22`). `ChipCard.tsx:30` also prints it. The map key shows the three words as an example (`src/screens/MapScreen.tsx:396`). Levels come from points: `occasionFromPoints` gives Marquee at 4 or more, Major at 3, Notable at 2, else Routine (`src/data/formula/occasion.ts`); the same level feeds the pull weights `PULL = 1 / 1.2 / 1.6 / 2.5` (`occasion.ts:81`), so the tag is the formula's own input, not a separate label.

**Why.** Showing the tag on every row dilutes it; showing it on the day's top event(s) says "this is the one". A word needs no key.

**Rejected.** Flags-only (O4); grey word (O1); chip (P-b); a special Marquee style; an icon or symbol.

---

## 3. Local Competition (DECIDED; bar color updated Oct 16, 6:55 PM PT)

**Build instruction.**
- **No read tile** (the date read lives in the card above; already so, `DateScreen.tsx:313-314`).
- **Quiet day:** show one explanation line so an empty card does not look like a glitch. **DECIDED (Kylie, 2026-10-16, via Mock Mosaic)** (Q9): **"No other big events that day."** It replaces the Oct 16 DEFAULT wording "No other events that day.", which is rejected (see below).
- **Bars:** every bar uses the **gold crowd fill, `crowdBar #E3A600`** (`theme.ts:41`). **No outline, no violet, no ring, no per-event friction color.** Gold here is a neutral identity color, **not a size encoding** (Kylie, via Mosaic, 6:55 PM PT; this replaces the 6:37 PM "gold carries size" wording and the 6:52 PM "pending fill color" lean).
- Bars show **start time and running time**, as position and length on the hour axis (as live: `DayTimeline.tsx:99`, left = start, width = running hours). They do **not** show crowd size by length. The crowd figure with its gold icon stays beside the title (`DayTimeline.tsx:87-94`).
- **Row height stays as live: 29 px** (17 px label line + 4 px margin + 8 px track, `styles.css:2301-2321`). Kylie said fine; do not pad.
- Board: `/workspace/ff-claims/mosaic-build6/batch5/localcomp-r1.png`, panel B.

**Quiet-day line and Time TBA (C-12).**
- **DECIDED (Kylie, 2026-10-16, via Mock Mosaic)** (Q9) Wording: **"No other big events that day."** It matches the map key ("Nothing big on this date.", `MapScreen.tsx:386`) and is accurate: the card only counts events of 5,000 or more. **Rejected: "No other events that day."** (inaccurate when smaller events exist). Show it in `DateScreen.tsx` (or as `DayTimeline`'s empty state) whenever the card would otherwise be empty: fewer than two big events. With zero big events the same line shows (builder's call: "other" reads slightly off there; Kylie can drop the word).
- **Lean (Mosaic), not approved by Kylie** (Q13) **A Time TBA band may render alone.** Change `DayTimeline.tsx:25` so that two or more big events that are all untimed still render the "Time TBA" band, with no axis and no hourly strip (the `lo`/`hi` math at `:30-31` needs at least one timed event, so guard it). Timed bars keep their axis.

**What the code does today.**
- `src/components/DayTimeline.tsx:12-15` (doc) and `:76-77`: the class is the event's friction (`bar-squeezed`, `bar-swamped`, `bar-steamrolled`, else `bar-none`).
- `src/styles.css:6578-6592`: Squeezed `var(--fightBar)` `#B39DE6`, Swamped `var(--fight)` `#6A3FBF`, Steamrolled `var(--fightDeep)` `#2C1A57`, none `var(--noFightBar)` `#AEB8C6`.
- No outline or ring exists on the live bars, so there is nothing to remove there; the only border is the dashed `bar-tba` edge (`styles.css:2348-2355`).
- `DayTimeline` returns `null` with fewer than two feeds-friction events or none timed (`:25`), while `DateScreen.tsx:311-317` still renders the "Local Competition" card with its heading. That empty card is the glitch the quiet-day line fixes; the line belongs in `DateScreen.tsx` (or in `DayTimeline` as its empty state), not inside the bars.
- Contrast, for the record: gold on the white card is 2.16:1 and on the track `#E8ECF2` 1.82:1. The live violet bar `#B39DE6` is 2.36:1 and 1.99:1, and the grey `#AEB8C6` is 2.01:1 and 1.69:1, so gold is no worse than what ships.

**Why.** Kylie: bars let users "come to the conclusion on their own without the app telling them". Violet per bar was the app telling them. (Mosaic's reading:) gold is already the crowd color, and one color means no bar looks more important than another.

**Rejected, with why.**
- Neutral grey `noFightBar #AEB8C6` (Mosaic's own lean at 6:52 PM): flat and lower contrast than gold; it is also exactly what a no-friction bar shows today, so it would not look like a change.
- Violet per-event friction color (live): conclusion mark on a surface that shows information.
- A ring or outline: same reason; also unnecessary once color is uniform.
- 44 px row padding for tap height: Kylie, "fine, do not pad"; 29 px stays.
- Gold carrying size by length or shade: Kylie, gold is identity, not a size encoding.
- A read tile on the card (earlier decision, still gone).

---

## 4. No "~" on compact surfaces (DECIDED, Oct 15)

**Build instruction.** No "~" on chips, rows, cards or lists. It stays **only** on the event page's full number, next to the "Estimated" label (`EventScreen.tsx:419`, `crowdFull`, `crowdFigures.ts:81-83`), **and** in one new map-key line. **Exact copy: "Numbers on upcoming events may be estimates."** Make `estimateMark` and `entryEstimateMark` return `""`, delete the two `~` marks in `crowdShort`, and clean the imports.

**Rival rows and the map key (C-16).** **DECIDED (Kylie, 2026-10-16, via Mock Mosaic)** (Q10).
- Remove "~" from the crowd on each rival row inside the event page's "Up against" card (`EventScreen.tsx:383`, `estimateMark(r)`); it is a list row. "~" stays **only** on the event page's full number next to "Estimated" (the Crowd card, `crowdFull`) and in the map-key line.
- Add the map-key line verbatim: **"Numbers on upcoming events may be estimates."** (`MapScreen.tsx:385-397`).
- Rejected: keeping "~" on the rival rows (they are list rows, and the rule is no "~" on lists).

**What the code does today.** Still emits "~": `estimateMark` (`src/data/crowdFigures.ts:59-61`) and `entryEstimateMark` (`:70-72`); `crowdShort` at `src/map/crowdPoints.ts:126` and `:136`. Call sites: `ChipCard.tsx:54`, `DayTimeline.tsx:90`, `StubRows.tsx:65`, `YourYear.tsx:91`, `EventScreen.tsx:383` (the Up against rows; see constraints). `CrowdFigure` reaches `DayRow`, `DateScreen`, `HomeScreen`, `FavoritePage` through `crowdShort`. The "6.7k+" floor mark already takes no "~" (Kylie, Oct 16; `crowdFigures.ts:64`, `crowdPoints.ts:125`) and stays. The map key lives at `MapScreen.tsx:385-397`; add the line there.

**Why.** Kylie first wanted "~" for transparency, but it "isn't visually appealing", and users who want detail can see it on the event page. This reverses build notes 5 item 10 ("~ on every estimated crowd") and the Mosaic v4 board.

**Rejected.** "~" everywhere (the build 5 call); an "est." suffix, a color change, a label word, "Up to 400" (rejected in build 5, still rejected); hollow vs filled gold icon (icon is absent on map chips, hard to see at 12 px, not color-blind safe); nothing at all (chips would be indistinguishable); the longer map-key copy "...counts replace them after the game"; a tick on confirmed counts (parked, needs a mock if mixed days bother her).

---

## 5. "by {rival}" only beside a friction pill (DECIDED, Oct 15)

**Build instruction.** The "by {rival} +N" line shows only when the friction pill shows. Today `ChipCard.tsx:35-36` renders `ByLine` even when the verdict is Low and the pill is hidden (`EventFrictionPill` returns `null` when `!showFriction`, `EventTags.tsx:37-40`), so a bare "by Phil Wickham" appeared with nothing next to it. The rival there was a 7:00 pm Honda Center concert inside 60 minutes of a 6:00 pm Game 4 placeholder time (`formulaRead.ts:130-138`).

**Why.** A "by" with no verdict beside it has nothing to explain.

**Rejected.** Requiring rivals to be a meaningful fraction of the event's size (changes the read's logic); keeping the line and adding "vs."; leaving it as is.

**Chip card (C-01, C-17).** **DECIDED (Kylie, 2026-10-16, via Mock Mosaic)** (Q1).
- The card that opens from a map chip (`ChipCard.tsx`) **keeps** the friction pill, the occasion tag and the by-line. Build the by-line as `ByLine` renders **iff** the pill renders (`EventFrictionPill` non-null: feeds friction and `showFriction`).
- **The map dot / label itself carries nothing:** no friction mark, no tag, no by-line (as live in `CrowdLayer.tsx`).
- The card also loses its "~" (item 4).
- **Rationale:** Kylie's pick was relayed without further rationale. Mosaic's reading is that the "pure information" principle (item 1) is about the map dot/label, and the card that opens from it is closer to a row with a verdict. **Rejected:** the card drops its pill and tag (and `ByLine`, which has no other user, is deleted); showing any verdict on the map dot/label itself.

---

## 6. Stubs (DECIDED)

**Build instruction.** One timeline with **month bands only** and a **"today" line** between past and future (no day bands). Rows show NO crowd, ring or occasion tag; state sits on its own last line ("Attending", "Attended", and so on). Empty past copy: **"no stubbed events"**; no "Stub it" button there; only **"Browse today in Explore ›"**.

**Timeline details (C-18).**
- **DECIDED (Kylie, 2026-10-16, via Mock Mosaic)** (Q3) **The floating "+ Stub it"** (the button that shrinks to "+" as the list scrolls, `StubsScreen.tsx:37-40`) **is hidden only when there are no stubs and no plans.** The empty-state card itself carries no button (the decided empty-past copy). Rejected: always showing the floating button (it would sit on the empty screen the decided copy keeps clear of a "Stub it" button); hiding it whenever the past is empty; a button inside the empty card.
- **Default, NOT approved by Kylie (Mosaic taking to her; may change)** (S2) **Keep the tag filter row** (past stubs only; shown when past stubs carry tags). **Open scrolled to the today line. Always show the line**, with a one-line empty note on the side with nothing (past empty: "no stubbed events" and "Browse today in Explore ›", as decided; future empty: a one-line note such as "Nothing upcoming yet"). Upcoming plans (`plansAhead`) and stubs merge into the one list by date and time.

**What the code does today.** Two tabs, Recent and Upcoming (`src/screens/StubsScreen.tsx:120-123`), month bands via `ListBand` (`:200`). Rows (`src/components/StubRows.tsx`) print `FrictionPill` (`:52`), the crowd mark and "~" (`:65`), and the Stubs empty state has "+ Stub it" (`:189`) beside "Browse today in Explore ›" (`:192`). Nothing draws a today line.

**Why (Mosaic's reasoning).** Stubs is the diary (`StubsScreen.tsx:37`); past and future sit on one line of time, and conclusion marks (ring, tag) are for deciding what to attend, not for remembering.

**Rejected.** Day bands; the Recent / Upcoming split; a "Stub it" button on the empty past; crowd, ring or tag on the row. (The older M2-01 board is superseded only where it conflicts with this.)

---

## 7. Following tab (DECIDED unless noted)

**Build instruction.**
- Same timeline as Stubs: month headers, a today line, each row shows its own date and time; the event timeline IS the tab. No per-day headers.
- **Faves, Friends and People lists move to Settings.** Following carries a quiet link or note: **"You can edit them in Settings."**
- **The old sentence feed ("X is going to / went to") is removed.** Live copy is scrubbed to Attending / Attended wording; the sentences are DEFAULT: "<Name> is attending ..." and "<Name> attended ...".
- Following cards carry no friction mark.
- **Search (DEFAULT, not confirmed):** the omnipresent top-right search also finds people, one search with results grouped Events / Teams / People.

**What fills the timeline (C-19).**
- **DECIDED (Kylie, 2026-10-16, via Mock Mosaic)** (Q4) Rows are (a) **upcoming events at your Faves** (teams, artists, venues you follow) in covered cities **within the next 60 days**, plus (b) what the people you follow answered: **Attending, Watching, Interested**. **Past rows come only from followed people** (their Attended / Watched answers in the last 60 days). **Privacy respected** (each friend's stub levels and block lists apply, as the feed does today via `followingFeed`). **Your own plans are excluded** (they live in Stubs). Rejected: a team's whole schedule (it floods the line); past Faves games; including your own plans; Faves only or friends only.
- **Settings is where the lists are edited:** Faves, Friends and People live there (handoff), with the quiet "You can edit them in Settings" note on Following.
- **Lean (Mosaic), not approved by Kylie** (Q12) **Flag (M2-05):** the Faves badge strip and Faves day rows leave Following with the Faves segment. Two of the four surfaces on the M2-05 badge board go with them. The badge work (item 9a) then applies to the Settings lists, the team page header, the edit list, Home and search. The Friends "Find people" bar and the Faves badge strip (built Oct 15, `69844ed`) move to Settings.

**What the code does today.** Two segments, Faves and Friends (`src/screens/FollowingScreen.tsx:58-66`). The feed is grouped Today / Coming up / Earlier (`:344-346`, Earlier band at `:273`). `FrictionPill` prints on feed items (`:231`). The sentence builder says "is going to" for attending (`src/lib/activity.ts:108`), "went to", "is watching", "is interested in"; the comment at `FollowingScreen.tsx:351` repeats them; the doc comment at `src/data/profiles.ts:447` says "is going to". So the handoff's "live copy scrubbed" is not true on main.

**Why (Mosaic's reasoning).** One mental model (a timeline of events) for Stubs and Following; the lists you edit belong with settings, not on a tab you read.

**Rejected.** Per-day headers; the sentence feed; separate Faves / Friends segments on the tab; keeping the friction pill on cards.

---

## 8. Settings and You (DECIDED; supersedes B5-06)

**Build instruction.** The **avatar is the only door to Settings** and opens a **side panel** (not a bottom sheet). Top: a profile card with **Edit profile** and **Share profile**. Sections are **dropdowns (chevrons) on ONE page**; Privacy, Blocked and the rest become dropdown contents, not separate pages. No extra "Profile & settings ›" line on You. This overrides M4-02 C, M4-05 B and M4-06 page rows. Faves, Friends and People lists live here (item 7). Dropdown order and grouping: **DEFAULT** (build sensibly, grouped by the existing settings).

**Panel details (C-22).**
- **DECIDED (Kylie, 2026-10-16, via Mock Mosaic)** (Q5) **The avatar stays on the You tab ONLY.** Settings opens from it. **No avatar on other tabs; search is unchanged** (top-right, as live). Rejected: the avatar on every tab; the top-left avatar placement that was the earlier default.
- **Default, NOT approved by Kylie (Mosaic taking to her; may change)** (S3) The old sub-routes (`/you/settings/cities`, `/crowd`, `/privacy`; `App.tsx:94-97`) **redirect to open the panel with that dropdown expanded** (for example `?panel=privacy`), so bookmarks and links keep working. `/you/settings` itself opens the panel.
- **Default, NOT approved by Kylie (Mosaic taking to her; may change)** (S3) Rename "Share my handle" to **"Share profile"** (`YouScreen.tsx:165`).
- **Default, NOT approved by Kylie (Mosaic taking to her; may change)** (S3) **"Change past stubs" works inside its dropdown**, including the "N couldn't update, try again" result (B5-02).
- **Default, NOT approved by Kylie (Mosaic taking to her; may change)** (S3) Signed-out: the avatar still opens the panel; account-only sections (profile card, Privacy, Blocked, lists) are hidden or point to sign-in (today the avatar sends signed-out users to sign-in, `YouScreen.tsx:116`).

**Where this came from.** Form B5-06 ("Profile and Blocked in Settings"): Kylie chose "Something else": "I actually want to reorganize the entire You > Edit profile / settings / share my handle and everything in settings. It doesn't seem intuitive, please have mock mosaic mock up a new wireframe for these items/settings according to the best UX/UI principles and practices please". Mosaic's wireframe is this item. **No small Profile / Blocked change** ships on its own.

**What the code does today.** The avatar button (`src/screens/YouScreen.tsx:116`, label "Profile and settings") opens a bottom sheet with Edit profile, Settings and Share my handle (`:151-165`). Settings is a page (`SettingsScreen.tsx`, 223 lines) that links out to sub-pages: `/you/settings/cities`, `/crowd`, `/privacy` (`SettingsScreen.tsx:131,139,149,153`; routes `src/App.tsx:94-97`).

**Rejected.** The small Profile / Blocked move (B5-06's lean A); separate pages per settings area; a "Profile & settings ›" line on You; a bottom sheet.

---

## 9. Team badges and team codes (DECIDED)

### 9a. Team badges: what we want (M2-05; Kylie, Oct 16 night)

**What we want.** Four things, stated as the outcome:
1. **We want a sport icon at the top-LEFT of team badges** (option A of the M2-05 board, moved from the top-right). DECIDED (Kylie 2026-10-16, later).
2. **We want college programs to carry their sport letters in the code**: "UCLA MBB", "UCLA WBB", "UCLA FB". DECIDED (Kylie 2026-10-16, later). Letters (proposed by me, accepted by Kylie 7:40 PM PT): football `FB`, men's basketball `MBB`, women's basketball `WBB`, baseball `BSB`, softball `SB`, volleyball `VB`, men's hockey `MH`, women's hockey `WH`, soccer `SOC`.
3. **We want no W mark anywhere**, and never a mark on only the women's team. DECIDED (Kylie: "why are we being sexist").
4. **We want clashing same-sport pro pairs told apart** (Pacers/Fever `IND`, Bruins/Fleet `BOS`; about 34 groups, table below). **WANTED, but HOW is NOT DECIDED.** Options A to D are in "Open question" below, with the reasoning, for Kylie or Claude to pick later. **No option is chosen.** It does not block the rest of the build.

This supersedes the earlier same-night versions of 9a (the one-rule corner mark at 7:42 PM PT, the college sport abbreviation plus pro league mark at 7:35 PM PT, the W mark). Those are in "Rejected" below.

**Build instruction.**
1. Sport icon: top-left corner of the badge, drawn so it never covers the code. Nothing else is added to a badge by the decided items: no corner mark, no league mark, no W.
2. College code: the sport letters are appended to the stored `abbr` at display (`abbr` stays "UCLA", "DU", "NOVA", "UST"; B6-10 keeps those six).
3. **When the letters appear: TO CONFIRM, suffix only on a clash vs always.** The 7:32 PM PT decision stands unless Kylie says otherwise: the default badge is the plain code ("UCLA"), and the letters are added **only when two or more badges in the same person's strip or list would otherwise collide.** Her later wording ("UCLA MBB in the badge") could be read as always-on. A clash is **same code AND same sport** within the shown set (her 7:42 PM wording; the sport icon already separates different sports, as she said for the Clippers and Chargers on Oct 15). The other reading, any same code (so UCLA football beside UCLA basketball also takes letters), is a one-line change in the single predicate `badgesCollide(a, b)`. When a college team clashes with a pro team (Houston Cougars basketball with the Rockets), the college badge takes its letters and the pro badge stays plain.
4. **Pros: until Kylie picks an option, BUILD NOTHING for pro disambiguation.** A pro badge is its plain code plus the sport icon, as today (`IND`, `BOS`). Do not build a league mark, colors or any pro rule.
5. **The badge function takes the set of badges being shown as input**, so the same team's badge can differ by viewer or profile (Kylie accepted this). It applies to the favorite strip, Following, Friends / People lists and profiles.
6. Apply to **ALL sports teams, with no default to men's sports.** Remove the icon next to the full team name on the edit list, since the badge now carries it.
7. VoiceOver: the badge is aria-hidden at every call site, so the surrounding link or row carries the accessible label: the team's full name ("UCLA men's basketball", "Indiana Fever").
8. The map-chip text (`eventTitle.ts:854`, a second use of `abbr`) is unchanged.

**Buildable now, without the pro decision.** `badgesCollide(a, b)` (same code and same sport); the set-aware `teamBadge`; the college letters on a clash; the top-left sport icon; the badge component; removal of the W and of the icon on the edit list. The pro question changes none of these.

**Structure `teamBadge` returns.** A string, as today: the code, which may include the sport letters ("UCLA", or "UCLA MBB" on a clash). It gains the shown set as input: `teamBadge(team, shown: readonly Team[]): string`. The component gets the icon from `favoriteTypeKey(fav)` (`src/map/typeIcons.ts:32-36`), which already keys the icon off `team.sport`. Whichever pro option is picked later may add to this structure; nothing is added now.

**Where the badge function needs the set (file:line, commit 67c91d2; on main 0c79c92 only `favorites.ts` moves, to 156-164).**
- `src/data/teams.ts:36-39` `teamBadge(team)`: add the shown set (above).
- `src/data/favorites.ts:157-165` `favoriteMark(fav)`: add the shown favorites, `favoriteMark(fav, shown: readonly Favorite[])`. Artists, venues and festivals keep their two-letter marks; only team badges get letters.
- Call sites, and the set to pass at each:
  - `src/screens/FavoritesScreen.tsx:331-334`, the strip: `favorites`.
  - `FavoritesScreen.tsx:394`, `ScheduleRowView` (day rows): `favorites` (pass it down; the function has only `row`).
  - `FavoritesScreen.tsx:463`, `FavRow` (lists, and the Settings lists after item 7): the favorites of that list.
  - `src/screens/HomeScreen.tsx:279`, Home "Favorites this week": the user's full `favorites`, so a team looks the same on Home and in the strip (builder's call).
  - `src/components/SearchSheet.tsx:185`, search results: the user's favorites plus the rows in that group (builder's call).
  - `src/screens/FavoritePage.tsx:212`, a team page header: the viewer's favorites plus this team.
  - **Following, Friends / People lists and profiles:** no badge is drawn there today (`favoriteMark` has no call site in them). When they draw one, pass **that person's** favorites (the strip being shown), not the viewer's.
- One new component (code, sport icon top-left) replaces the seven inline `<span>{favoriteMark(...)}</span>`s.

**Which colleges clash (same code and same sport; a school is lettered only in a set that holds two or more of its programs).** About 64 college groups in `teams.ts` after the decided code changes: almost all are a school's men's and women's pair in one sport, lettered `MBB` / `WBB` (about 62 basketball groups, for example UCLA, Villanova `NOVA`, Denver `DU`, St. Thomas `UST`, Houston `HOU`) or `MH` / `WH` (Minnesota `MINN` hockey, St. Thomas hockey). Two groups are duplicate records of one program (Rice `rice` and `rice-football`; Washington Huskies `washington-huskies` and `uw-football`, both `WASH`); both would read `X FB`, which separates nothing (flag 2). Same school, different sports (UCLA football beside UCLA basketball) do not clash under the same-code-and-sport reading: icon only. So `FB`, `BSB`, `SB`, `VB` and `SOC` almost never appear; they exist for the duplicate and future cases.

**Mixed college / pro groups (12), created or widened by the Medium rows:** Cleveland State (`CLE`, basketball) with the Cavaliers; Houston `HOU` basketball (Cougars men's and women's with the Rockets and Comets), baseball (Astros) and football (Texans); Miami `MIA` basketball (Hurricanes with the Heat) and football (Dolphins); Sac State `SAC` basketball with the Kings; Texas `TEX` basketball (Longhorns with the Texas Legends) and baseball (Rangers); UT Arlington `UTA` basketball with the Jazz; Vanderbilt `VAN` basketball with the Vancouver Bandits; Boston College `BC` football with the BC Lions. The college team is lettered ("HOU MBB"); the pro team stays plain. The letters alone separate these.

**Pro groups that clash (the scope of the open question).** About 34 groups, same metro unless noted. Pro pairs share a code, a sport and therefore the same sport icon; only the league (and the team) differs.

| Sport | Code | Teams |
|---|---|---|
| Basketball | ATL | Hawks NBA, Dream WNBA |
| Basketball | CHI | Bulls NBA, Sky WNBA |
| Basketball | DAL | Mavericks NBA, Wings WNBA |
| Basketball | HOU | Rockets NBA, Comets WNBA |
| Basketball | IND | Pacers NBA, Fever WNBA |
| Basketball | MIN | Timberwolves NBA, Lynx WNBA |
| Basketball | POR | Blazers NBA, Fire WNBA |
| Basketball | TOR | Raptors NBA, Tempo WNBA |
| Basketball | WAS | Wizards NBA, Mystics WNBA (WAS after B6-02) |
| Hockey | BOS | Bruins NHL, Fleet PWHL |
| Hockey | CHI | Blackhawks NHL, Wolves AHL |
| Hockey | EDM | Oilers NHL, Oil Kings WHL |
| Hockey | MIN | Wild NHL, Frost PWHL |
| Hockey | MTL | Canadiens NHL, Victoire PWHL |
| Hockey | OTT | Senators NHL, Charge PWHL (Charge becomes OTT, 9c) |
| Hockey | SEA | Kraken NHL, Torrent PWHL, Thunderbirds WHL (three) |
| Hockey | SJ | Barracuda AHL, San Jose PWHL |
| Hockey | TOR | Maple Leafs NHL, Marlies AHL (TOR, 9c), Sceptres PWHL (TOR, 9c) (three) |
| Hockey | VAN | Canucks NHL, Goldeneyes PWHL, Giants WHL (three) |
| Soccer | CHI | Fire MLS, Stars NWSL |
| Soccer | DAL | FC Dallas MLS, Trinity USL Super League |
| Soccer | HOU | Dynamo MLS, Dash NWSL |
| Soccer | POR | Timbers MLS, Thorns NWSL |
| Soccer | SEA | Sounders MLS, Reign NWSL |
| Soccer | SD | San Diego FC MLS, Wave NWSL |
| Soccer | RSL | Real Salt Lake MLS, Monarchs MLS NEXT Pro |
| Soccer | MIL | Wave MASL, Torrent Men NPSL, Torrent Women WPSL (three) |
| Soccer | AME / CAZ / UNAM | Club América, Cruz Azul and Pumas UNAM: Liga MX vs the Femenil club of the same name (the Femenil codes become AME, CAZ and the Pumas code UNAM under 9c) |
| Football | DAL | Cowboys NFL, Renegades UFL |
| Baseball | MIL | Brewers MLB, Milkmen American Association |
| Cross-metro, same sport | COL | Columbus Clippers Triple-A, Rockies MLB |
| Cross-metro, same sport | ATL | Atlanta United MLS, Atlante Liga MX |

Different-sport pairs that share a code (Clippers/Chargers `LAC`, Brewers/Bucks `MIL`, Braves/Hawks `ATL`) are separated by the sport icon, as Kylie said on Oct 15.

#### OPEN QUESTION (not decided; no option chosen): how are clashing same-sport pro pairs told apart?

**What we want:** Pacers and Fever (both `IND`, both basketball) and Bruins and Fleet (both `BOS`, both hockey), and the other pairs in the table, must not look identical. **How is open.** Four options follow, with the reasoning. Kylie (or Claude with her go-ahead) picks one later. Until then: plain code plus sport icon, nothing built for pros.

**Facts that apply to every option** (checked on main 0c79c92, `/workspace/ff-claims/team-colors-check-for-mosaic.md`):
- **Today the pairs are indistinguishable.** Pacers (`teams.ts:136`) and Fever (`:137`) are both "IND"; Bruins (`:62`) and Fleet (`:66`) are both "BOS". Each renders as the same blue tile, `var(--dodger)` `#005A9C`, white text (`styles.css:4980` `.fav-tag`, `:3956` `.fav-mark`). There is no icon in the badge today.
- **The sport icon cannot separate them**: both pairs are the same sport, so `favoriteTypeKey` (`typeIcons.ts:32-36`) gives the same icon. Only the league, a color, or a word can.
- **There is no team color or brand color data on main**: no field on `Team` (`types.ts:69-81`), no hex in `teams.ts`, no logo assets. The `teamBadge` comment "the sport icon and colors tell them apart" (`teams.ts:31-35`) is not true of the code.
- Kylie's Oct 15 line ("the sport icon and colors tell them apart") and her later view that a second mark is not needed both assumed team colors would exist. They do not.
- About 580 teams are in `teams.ts`. About 34 groups clash.

**Option A: a small league mark (NBA, WNBA, NHL, PWHL, MLS, NWSL, ...) only on clashing same-sport pro pairs.** One mark, on both (all) teams of the clash, only when they clash in the shown set; the code text does not change; no W, never only the women's team. *Attribution: Mock Mosaic's suggestion; not approved by Kylie.*
- For: separates Pacers/Fever and Bruins/Fleet using data we already have (the `league` field on every team); the identity is text, so it does not rely on color alone; nothing changes on badges that do not clash; also separates the three-team groups with three leagues (SEA: NHL, PWHL, WHL).
- Against: it is a second mark, which Kylie earlier said was not needed (on the assumption colors would tell teams apart); where it goes is unresolved (the board's placements below each carry a cost); marks run to five letters (`USLSL`); a few leagues have no short form (Triple-A, American Association, MLS NEXT Pro), so the abbreviation would be a builder's pick; **it cannot separate two teams of one league and sport** (see below).

**Option B: team primary colors on ALL badges.** Each team's tile takes its primary color (replacing the single blue); text color chosen per tile.
- For: it is what the Oct 15 line ("the sport icon and colors tell them apart") assumed; no second mark and no new text; every badge becomes more recognisable, not only clashing ones.
- Against:
  - **The data does not exist.** The ESPN team endpoint the app already reads (`espnSource.ts:29`, 383 teams) returns `color` and `alternateColor`; observed Pacers `0c2340`, Fever `002d62`, Bruins `231f20`. It does not cover MLB (28), PWHL (the endpoint answers "League not found", so the Fleet has none), or the minor, indoor, Canadian, Mexican and other college rows: about 200 teams need a hex **sourced individually; brand colors must not be guessed.** Licensing for reusing ESPN's values is **not checked**.
  - **The Pacers/Fever example is not solved by color alone:** their ESPN navies are 1.17:1 apart, essentially the same navy.
  - **Contrast:** the badge text is 11-12 px bold and needs 4.5:1. Light team colors fail white text (illustrative, unsourced values: gold `#FDB927` 1.73, yellow `#FFD100` 1.46, light blue `#7BAFD4` 2.35, orange `#F58426` 2.56, silver `#A2AAAD` 2.36, teal `#00A3AD` 3.07), so each tile needs a per-color text choice (dark ink on light colors). Today's white on `#005A9C` is 7.14:1. Method: WCAG 2.x relative luminance, checked per team.
  - **Role-color collisions:** gold means crowd (`crowdBar #E3A600`), blue means action, violet means friction (`theme.ts`, `docs/design/colors.md`); gold or blue team tiles read as signals.
  - **Color alone cannot carry identity** ("do not rely on color alone"), so the code text and icon would still have to carry it; color-blind users see the Pacers and Fever as one color.
  - It restyles every team badge in the app, including the college and the unclashing ones.

**Option C: colors only on clashing badges.** The default badge stays blue; when two teams clash in the shown set, each takes its team color.
- For: needs color data only for the teams in the clash table, not all 580; badges that do not clash look as today.
- Against: all the data, contrast, role-color and color-alone problems of B apply to the clashing teams (the Fleet, for one, has no ESPN color, and the Pacers/Fever navies are 1.17:1 apart); **a team's badge would change color depending on the strip it appears in**, so a team is blue in one person's list and colored in another's, which weakens recognition (a form of the accepted "set-dependent badge" trade-off, now with a visible color change); adding one favorite can recolor an existing badge.

**Option D: accept identical badges.** Pacers and Fever are both an "IND" tile with the basketball icon; Bruins and Fleet both "BOS" with the hockey icon.
- For: nothing to build or source; no new mark, color or width; keeps the badge simple.
- Against: in the Favorites strip (badges only, no subtitle) the pairs are two identical tiles with no other cue (the board found exactly this); the Oct 15 principle was that they must be told apart. List rows, search rows and team pages show the full team name beside the badge, so those separate them by name; the strip link carries the full name only as its VoiceOver label.

**Same-league clashes no league mark fixes (any option that is a league mark).** Two teams of one league and sport with one code, for example PWHL Detroit and PWHL Las Vegas (both "PWHL" until the held Low code rows land). The city already differs on their rows. Colors could separate them only if their colors differ. This is part of the open question.

**Earlier placements tried for a mark.** The board showing the placement options is copied into this folder: [`assets/badge-r1.png`](assets/badge-r1.png) (original `/workspace/ff-claims/mosaic-build6/batch5/badge-r1.png`, source `/workspace/ff-claims/mosaic-build6/src/badge-r1.html`; Mock Mosaic, Oct 16). It shows strip, list-row and search renders for each placement at 390 px, plus greyscale and a legibility ruler. **They belong to the corner-mark version (icon top-right) that was rejected, and none was chosen.** They are the evidence if Option A is picked later. The board's own letters A to D are its placements, not the options above.
- **Board A, a wider badge:** the mark in a white 11 px pill over the bottom-right corner; the badge widens 44 to 58 px, list rows 40 to 56 px. Findings: the mark covers 62-66% of the badge's bottom edge on WNBA, PWHL and USLSL badges; the strip shows 5 of 8 badges (today 6); in rows the badge pushes the name 16 px right and leaves 5 px between the mark and the name.
- **Board B, a caption under the badge:** the mark as an 11 pt caption under the badge, inside the same link. Findings: no collisions or clipping; the strip keeps 6 of 8; only clashing badges grow, so strip height goes 36 to 67 px and the tallest row 61 to 76 px; the link reaches 47 px, the only badge link to reach 44 pt. **This was Mock Mosaic's placement lean on that board ("Not confirmed - lean").**
- **Board C, a 9 px mark (badge exempted from the minimum):** the same corner pill at 9 px (8 px in its legibility ruler). Findings: the 9 px mark **breaks the 11 pt minimum rule** on every badge (every mark flagged); it still covers 55-78% of the bottom edge on USLSL, WNBA and PWHL; at true size 8-9 px bold capitals run together in USLSL, PWHL and NWSL; only 6-7 px between mark and name in rows. The board's verdict: "C breaks the house rule."
- **Board D, a subtitle word instead of a mark:** no mark on the badge; the league or sport word goes in the subtitle line ("NBA · Team · 1 event"; colleges "Men's basketball · Team"). Findings: clean on rows, but search rows gain a subtitle they do not have today and long words wrap it (row 61 to 76 px for "Women's basketball"); **the strip has no subtitle, so Pacers and Fever remain two identical "IND" badges (same icon)**.
- Also true in every placement: the live strip clips the icon and needs 4 px more room above (M2-05's padding fix; the icon is now top-left, so re-check); strip badges are 32 px tall, under 44 pt (live today); the icon disc sits 5 px from the team name in a row.

**What each pick would add later** (so Claude can proceed now): A needs a mark slot on the badge and a placement call from Mosaic. B and C need a sourced `teamColors` map and a per-tile text-color check (the badge component already exists from the work above). D adds nothing. The decided items build the same under all four.

**What the code does today.** `teamBadge(team)` returns the team's `abbr`, else three letters of the nickname (`src/data/teams.ts:36-39`); `favoriteMark(fav)` calls it with no knowledge of the other badges (`src/data/favorites.ts:157-165`). The badge text is drawn at seven places (above), all aria-hidden. No sport icon, no letters, no colors exist in the badge. Every UCLA program reads "UCLA".

**Why (the decided parts).** The plain code is what people say ("IND", "UCLA") and what the rest of the app shows. A school has several programs under one code, so the sport letters in the code say which program in the one place people read. The sport icon moves to the top-left so it does not sit over the end of a wider code.

**Trade-off Kylie accepted.** The same team's badge can differ between two people's strips (and between a strip and a search result). A badge is a property of the set, not of the team.

**Rejected.**
- **The corner-mark version (the "one rule" of 7:42 PM PT):** one small corner mark on every clashing badge, sport letters for colleges and league abbreviation for pros, with a held placement. Rejected by Kylie's later decision (no second mark of any kind on the decided parts). A league mark for clashing pros comes back only as **Option A** of the open question.
- The **league mark for pros as decided in the 7:35 PM version** (both teams of a clash). Superseded; now Option A, undecided.
- The **"W" mark** (Kylie: "why are we being sexist"); marking only the women's team in any way.
- A **fixed per-team suffix** (a team always carries its suffix whatever else is shown).
- **"MBB" / "WBB" on pro teams** (college-only shorthand).
- The **league in parentheses in the code text** ("IND (NBA)").
- Mosaic's earlier neutral MBB / WBB suffix default; option A of the old board alone for colliding programs; B, a second line "FB / MBB / WBB"; the as-built identical badges; defaulting men's teams to no mark; nickname letters such as "CLI". Board: `batch2-v2-M2-05-board.png` (its W, its top-right icon and its "third no longer fits" note are superseded where they conflict).

**Flags (do not block).**
1. **For Mosaic: badge width.** College codes with letters run to eight or nine characters ("UCLA MBB", "MARQ WBB", "GAST MBB"). At 11 px / 800 weight the tile `.fav-tag` (`min-width: 44px`, `styles.css:4980-4994`) grows (about 75 px by my estimate), and `.fav-mark` is a fixed 40 x 40 px tile (`styles.css:3956-3969`) with 12 px text that cannot hold it. Options: let the tile grow (the strip already scrolls), drop the type size on lettered badges, or stack the code over the letters. The top-left icon also needs the code kept clear of it.
2. **Duplicate program records.** Rice and Washington Huskies each exist twice in `teams.ts`; merge them (the team-codes research already asks "merge?") or the pair reads "X FB" twice.
3. **To confirm with Kylie:** letters only on a clash vs always, and which clash reading (same code and sport, or any same code).
4. **The pro question** also touches Friends / Following: a person's strip holding both Pacers and Fever cannot tell them apart until it is answered.

### 9b. Kylie's team-code answers (form, Oct 15)

| # | Answer | Today (`src/data/teams.ts`) | Change |
|---|---|---|---|
| B6-02 | **WAS** for the Commanders and Wizards; Nationals and Capitals stay WSH | Commanders `:670` WSH; Wizards `:656` WSH; Nationals `:654`, Capitals `:655` WSH; Mystics `:657`, Spirit `:659` already WAS | Commanders, Wizards to WAS |
| B6-03 | **Lightning TBL** only | `:100` TB (Rays `:98`, Buccaneers `:99` also TB) | Lightning to TBL |
| B6-04 | **Keep ACFC** | `:410` | none |
| B6-05 | **Keep RBNY** | `:439` | none |
| B6-06 | **KC Current to KC** | `:239` KCC | to KC |
| B6-07 | **Spurs to SAS** | `:627` SA | to SAS |
| B6-08 | **Mercury PHO** | `:195` MER | to PHO |
| B6-09 | **Keep AZ** (Diamondbacks) | `:192` | none |
| B6-10 | **Keep all six college codes** (DU, NOVA, UP, UST, UDM, NEU) | `:597-599`, `:87-89`, `:625`, `:282-285`, `:359`, `:76` | none |
| B6-11 | **Apply the Medium rows now; hold the 22 Low rows** until each is checked on a league or ESPN page | `docs/research/topics/team-codes-answer.md` Part 2a | see 9c |

Why each: WAS because the NFL, NBA, WNBA and NWSL all show WAS (only MLB and NHL show WSH); TBL so every NHL team uses NHL.com's code and Tampa stops sharing TB with the Rays and Buccaneers; ACFC is the club's own shorthand and stays different from the Galaxy on a badge; RBNY is what ESPN and fans use and is clearly not NYC (NYCFC); KC matches ESPN and the city-code pattern, and the sport icon separates it from the Chiefs and Royals; SAS is the league's code like every other NBA team; PHO is the WNBA's own code; AZ is MLB.com's and stays different from the Cardinals' ARI; the college codes are the schools' and fans' shorthand.

Rejected per row: Washington all WSH, or all WAS including the Nationals and Capitals; Lightning following ESPN (changing all four NHL codes instead); Angel City LA; Red Bulls NY; KCC; SA; MER and PHX; ARI; switching the six college codes to ESPN's.

### 9c. Applying the Medium rows (B6-11)

The research's Part 2a has 111 rows: 31 High, 58 Medium, 22 Low. The 29 High rows with no open call and 5 blank fills are already in `teams.ts`. Of the 58 Medium rows, **3 are the fills already applied** (Rutgers RUTG, Washington Huskies WASH, Bowling Green BGSU), **2 contradict Kylie's own answers** (`red-bulls` NY against B6-05, `angel-city` LA against B6-04) and must be **skipped**, and **6 are the codes she just decided** (Commanders, Wizards, Spurs, Lightning, Mercury, KC Current, matching table 9b). That leaves **53 changes to make**: the six codes she just decided (the table above) and **47 others** from Part 2a with Medium confidence (Ottawa Charge OTT, Sceptres TOR, Texas Stars TEX, Cleveland Monsters CLE, Marlies TOR, Las Vegas Aviators LV, Columbus Clippers COL, River Cats SAC, Diablos Rojos MEX, the three Liga MX Femenil clubs, and the college rows: UH HOU, TSU TNST and TXSO, Tulane TULN, Delaware DEL, NC State NCST, Sac State SAC, UC Davis UCD, UW WASH, Miami MIA, Chicago State CHIS, Cleveland State CLE, Harvard HARV). The row-by-row list with current and new codes is in `docs/research/topics/team-codes-answer.md` Part 2a (Confidence = Medium). **Hold all 22 Low rows** (PWHL Detroit and Las Vegas, KC Mavericks, Indy Fuel, Winterhawks, Generals, 67s, Olympiques, Missions, the two Diablos, PVAMU, IU Indy, Columbia, Penn State, the Varsity Blues, York).

Why: Kylie took the lean, "fixes the collisions quickly; a few codes could need a later correction". Rejected: applying Low rows too (memory only); applying none until every row is verified; applying the Medium rows without skipping her two overrides.

### 9d. "Mammoth" matches two teams (B5-04, fix in build 6)

Both clubs carry the short name "Mammoth" (`teams.ts:376` Utah NHL, `:595` Colorado NLL), and `dedupe.ts:33` keys a game by `TEAMS[id].shortName` when a feed gives ids. Key by team **id** there. The no-bare-"Mammoth"-alias decision (DEN5) stays (`teams.ts:594`). The id key must also cover feeds that give names only: `teamName()` (`dedupe.ts:22-29`) maps every name, short name and alias to `norm(shortName)`, so "Utah Mammoth" and "Colorado Mammoth" both become "mammoth" (`:34-35`). Map names to team **ids** (full names are unique), key both branches by id, and leave a bare ambiguous "Mammoth" unmatched rather than guessing. Skip `red-bulls` and `angel-city` when applying the Medium rows (item 9c).

---

## 10. Doubleheaders, rankings, naming

- **M3-04 (DECIDED).** Never plain "Game N". **"Doubleheader Game 1"** on its own line on rows; **"Doubleheader, Game 1"** on the event page. Today: `src/lib/eventTitle.ts:293` and `:358-361` give "Game 1", chip "DH1", with the comment "Doubleheaders are not designed yet" (`:357`). Replace both. **The map chip keeps "DH1"** (Mosaic's lean on C-26): only the row label and the event page change; `scripts/titles-check.mjs:35` asserts the old string and must be updated.
- **M3-08 (DECIDED).** Rank in the title on the event page (option B). Rankings matter mainly for AP-style weekly college rankings and should be auto-sourced from official rankings. **Sourcing is PENDING research**; build the display and treat the data source as a follow-up. **DEFAULT:** show a rank only when a source value exists, otherwise show nothing. Today no rank field exists in the data model (`src/data/types.ts`).
- **M5-07 (DECIDED).** "Size unknown" is live as is on the event page.
- **Away at Home naming** (from the earlier build) stays.
- **D14 comma before the game number** ("NLCS Game 3", never "NLCS, Game 3", `eventTitle.ts:344`) is still waiting on Kylie's one word; the doubleheader line above ("Doubleheader, Game 1" with a comma) follows her explicit M3-04 answer for the event page only.

**Why.** "Game N" alone reads as a series game; a doubleheader is its own thing. Rankings change the story of a game and belong in the title where it is read in full.

**Rejected.** Plain "Game N"; rank on rows or chips; hand-entered ranks.

---

## 11. Run labels for multi-show runs at one venue (**DECIDED (Kylie, 2026-10-16, via Mock Mosaic)**: HOLD)

**Build instruction (Q8).** **Hold ALL run labels until the data fields exist. Build nothing for them in build 6**: no concert/comedy first phase, no "Night 3" / "Show 3" fallback, no "Night 2 of 5" from stored dates, no sports "Game 2 of 3". Rows and titles stay as they are (the existing `Game N` / "Doubleheader" wording in item 10 is a separate item).

**The rules stay decided for when the fields exist** (Kylie, after research):
- Concert / comedy runs with one show per date: "Night 2 of 5". "Show 2 of 5" for the WHOLE run if any date has a daytime start, a matinee, or more than one show on a date; the noun is chosen per run, never per show.
- Sports: "Game 2 of 3". Unknown or growing total: "Night 3" / "Show 3" with no "of N". Compute "of N" live, never store it.
- Open-ended residency: no number, show the date; "Final night" once the last date is announced.
- Theater: no sequence labels. "N2" is not used. Do not use "Run N". Count shows in this run at this venue only, never tour or lifetime counts.
- "Night" is allowed here only; the rest of the app keeps the no-"night" rule. Kylie: "It's my rule, I can change it".

**Follow-up list: data fields needed before run labels can ship.**
1. **Position within a run** (which night or show this is), computed per performer and venue over contiguous dates.
2. **Total** shows in the run, computed live (never stored), with a "certain / not yet certain" signal.
3. **Residency / open-ended flag.**
4. **Announced-last-date flag** (for "Final night").
5. **Sports series length** (the feeds carry the game number but no length).
The label's place (the grey label line, like "Doubleheader Game 1") is a later default.

**What the code does today.** Ticketmaster's marker (`src/data/sources/ticketmasterSource.ts:170-183`) sets `occasionFacts.run` to the count of the performer's events at that venue within 7 days of this date, only when it is 2 or more. That number is a run size for the occasion points, not a position and not a series total, so it cannot be shown as "2 of 5" as is. Sports series: the feeds carry the game number (`stakes.game`, `types.ts:177-180`; MLB `seriesGameNumber`, `mlbSource.ts:104`; ESPN `gameNumberOfSeries`) but no series length.

**Why.** A reader's question is "which night of the run is this", and the answer must stay true when dates are added; without the fields a partial label would be wrong or change under the reader. **Rejected:** a concert/comedy first phase from stored dates with a "Night 3" / "Show 3" fallback (Mosaic's lean); "Run N"; "N2"; storing "of N"; per-show nouns; theater labels; tour-wide or lifetime counts.

### The "night" sweep (**Lean (Mosaic), not approved by Kylie**; Q11)
The evening-story heading `EventScreen.tsx:512-513` changes from "The night" to **"The evening"** (DEFAULT wording; "The day" stays for daytime starts). The CSS class `night-story` can keep its name. Other occurrences are not user-facing headings: the `/night` and `/nights` redirects (`App.tsx:33,98-99`), user tag suggestions ("date night", "theme night", `starterTags.ts`), the search keyword "tonight" (input, `searchDate.ts:21`), and code comments. Home already says "Today in {city}" (`HomeScreen.tsx:135`). Open for Kylie: whether "Tonight" and "Famous nights" (a comment name; `MonthSheet.tsx:6`) count.

---

## 12. Ticket links: remove for now (DECIDED, B6-01 option C)

**Build instruction.** Hide the ticket line and stop the live lookup. **Keep the stored `ticketmasterId`s and the code** (the page gets quieter, nothing is lost, it can come back).

**What the code does today.** The lookup is `EventScreen.tsx:169-205` (`ticketPrice(tmId)`), the line is `:275-281` (`<a className="ticket-line">`), the server function is `api/ticket-price.ts`, the client is `src/data/tickets.ts`. **Do not delete `ticketmasterId`** (`src/data/types.ts:264`, set at `ticketmasterSource.ts:304`): `artistSite()` also uses it for the "official site" link on Favorites (`src/data/artistSite.ts:7`, `FavoritePage.tsx:150`).

**Why.** Kylie (Oct 15): it "seems complicated and hasn't been helpful so far".

**Rejected.** Keep as is; simplify; remove fully; decide later.

---

## 13. Build 5 review answers (Kylie, Oct 15)

| ID | Answer | Build instruction |
|---|---|---|
| B5-02 | Fix in build 6 | "Change past stubs" waits for every update and shows **"N couldn't update, try again"**. Today `setPastStubsVisibility` fires `void setWatchDetails(...)` (`src/data/personalLog.ts:522-526`) and the page reports before the account save finishes (`SettingsPrivacyScreen.tsx:117`). |
| B5-04 | Fix in build 6 | Match teams by id in the duplicate check (item 9d). |
| B5-05 | Fix in build 6 | Show the stub's stored level on Stubs rows and the pill. `watchShareOf` can only return private or friends (`personalLog.ts:836`); used at `StubRows.tsx:36,82`. |
| B5-07 | Fix in build 6 | Remove the dead `plans` fallback and let the error show (`src/data/profiles.ts:477-484`; fix the comment at `:473-475`). |
| B5-08 | Fix in build 6 | Re-run the row-height check at 390 px after the naming changes: Explore list, date page, Stubs rows (and, with this build, Following, search, chip card, event title). There is no script for it; it is a measurement pass. |
| B5-03 | Accept | The stub-level conversion in migration 0026 stays; anyone can widen later with "Change past stubs". |
| B5-06 | Something else | See item 8. |
| B5-09 | Something else: **HOLD** | "I've requested deployer access to seatgeek, but they take awhile to sift through requests, so I won't have API access for a bit." Do **nothing** on SeatGeek in build 6 (`seatgeekSource.ts`). |
| B5-10 | Wait | Wait for the add-on research, then fix the 98 "Event" rows and the lucha libre guess together. |
| B5-11 | Read first | Read the before-and-after table, answer the four questions, then run migration 0027. It is no longer in `supabase/migrations/`; it moved to `private/kylie-log/`. |
| B6-15 | Leave history | Leave git history alone. From here on keep names out of files, paths and commit messages. |

---

**Build health (C-31).** `scripts/event-types-check.mjs:18` still expects 36 types and main has 37 ("Live screening"); update it. The earlier `startForecastIndex.ts` TS2590 break was fixed (`c4d7607`); re-run `npm run build` after the build 6 changes. B5-08 has no script: measure every list that changes in items 1, 2, 6 and 7 at 390 px. **Ticket links (C-29):** hide the line (`EventScreen.tsx:275-281`), stop the lookup (`:169-205`), keep `api/ticket-price.ts`, `src/data/tickets.ts` and the stored `ticketmasterId`, which `artistSite()` also uses (item 12).

---


## 14. City and data answers

- **Washington, DC is a Hub city (DC5, settled):** `src/data/formula/gridlock.ts:119` has `'washington-dc': 'hub'`. No change.
- **B6-12 City types (Atlanta hub, Ottawa-Gatineau sprawl): make NO change.** Kylie: "i have no idea what i meant by that, i can only assume it was a misunderstanding or misspeak." Today Atlanta is sprawl and Ottawa-Gatineau is hub (`gridlock.ts:119`); drop the item.
- **B6-13 Raleigh-Durham:** lock the code **RDU** and the display name "Raleigh-Durham" as they are (`src/config/metros.ts:344-346`). No change.
- **B6-14 Merriweather Post Pavilion stays in Washington, DC** (`src/data/venues.ts:10506`, `metroId: 'washington-dc'`; its shows are listed and count toward DC's crowds). No change.
- **Dorton Arena and McMenamins Edgefield capacities:** both are already stored: Dorton 5,000 official plus **7,000 concert setup** (`venues.ts:13085-13095`, Kylie Oct 14, RDU2); Edgefield **7,000 reported** (Travel Portland, Kylie Oct 14, PDX2; `venues.ts:12167` onward). No data change. Edgefield (7,000) and Cascades (7,810 seated) stay on the list awaiting sourced figures.

---

## 15. "More dates" and Favorites where home is set

These two come from Kylie's Oct 16 message to Push Pilot; neither is in the handoff or the form files, so the wording below is as relayed and should be confirmed against her message (see the final report).

- **"More dates"** is the event-page section for a tour or homestand (`src/components/SameTour.tsx:36-38`, heading from build 5 answer C2; "Same homestand" and "Also on" were retired). It lists the performer's or home team's other dates in the same city within 30 days, each with the day's read tile (`SameTour.tsx:10-12, 34-52`). Note that the read tile here is separate from Local Competition's "no read tile".
- **Favorites where home is set:** the home city is set in the home picker (`src/components/HomePicker.tsx`, `src/lib/homeCity.ts`); the Favorites list shows the home city's items in their own section (`src/screens/FavoritesScreen.tsx:273`).

---

## 16. Docs to correct

- `docs/build-5/build-notes-5.md` item 10 (line 1086): still says "~" on every estimated crowd on compact surfaces. Mark superseded by item 4 here.
- `docs/reference/formula-v4.md:32`: the table cell still reads m = 1 / 1.1 / 1.3 / 1.6; the cell's own note says Oct 6 steepened it. The live values are `PULL = 1 / 1.2 / 1.6 / 2.5` (`src/data/formula/occasion.ts:81`), used at `crowdFight.ts:111,121`. Replace the numbers in the cell.
- `docs/reference/overlap-and-date-rating-v3.md:20`: describes an "Occasion shield" that is gone from the code (replaced by the asymmetric pull). Mark it superseded.
- `src/components/DayTimeline.tsx:12-15` and `styles.css:2330-2331`: their comments say bars are "in the violet of its friction"; update with item 3.
- `src/config/theme.ts:46-52`: the `fight` comment names "the Local competition label and rule"; `noFightBar` says "A crowd bar with no friction". Both go stale with item 3 (see constraints).
- `docs/build-4/live-screens/current/RULES.md:8` says "Night" is used for a city's date after 5 PM: mark superseded by the no-"night" rule (item 11).
- `src/lib/chips.ts` (`sheetBadges`) still describes a "Moderate" ladder and nothing imports it; delete or fold into item 1.

---

## DEFAULT and PENDING register

| Item | State | What to build now |
|---|---|---|
| Helper tip wording ("<word> by that day's lineup") | DEFAULT | Build it |
| Quiet-day line "No other big events that day." | DECIDED (Kylie, 2026-10-16; Q9) | Build it |
| Following sentences ("<Name> is attending ..." / "attended ...") | DEFAULT | Build it |
| People search, grouped Events / Teams / People | DEFAULT | Build it |
| Settings dropdown order and grouping | DEFAULT | Group by existing sections |
| Rank in the title: only when a source value exists | DEFAULT | Build the display, empty until sourced |
| Official rankings sourcing (M3-08) | PENDING | Research first |
| Rank / seeds per team data (D16) | PENDING | Needs a mock |
| Local Competition render for visual confirmation | PENDING (confirmation only) | Build from item 3; the board panel B is the reference |
| SeatGeek (B5-09) | HOLD | Nothing |
| 22 Low team codes | HOLD | Nothing until each is checked |
| Add-on research, lucha libre (B5-10) | PENDING | Nothing |
| Migration 0027 (B5-11) | PENDING | After the table is read |
| Ticket links | DECIDED removed | Hide, keep code and ids |
| Q1-Q10 (the first table at the top) | DECIDED (Kylie, 2026-10-16) | Build as written |
| Q11-Q14 (the leans table) | Lean (Mosaic), not approved by Kylie | Build as written |
| S1-S5 (the smaller-defaults table) | Default, NOT approved by Kylie (Mosaic taking to her; may change) | Build as written |
| Run labels | DECIDED: HOLD | Nothing in build 6; follow-up fields in item 11 |
| Badge disambiguation (colleges) | DECIDED (Kylie, 2026-10-16, later): sport letters in the badge code (UCLA MBB), icon top-left, no second mark; suffix only on clash is to confirm | Item 9a |
| Pro same-code, same-sport pairs (Pacers/Fever, Bruins/Fleet) | OPEN QUESTION: options A league mark, B colors on all, C colors on clashing only, D accept identical; none chosen | Item 9a: plain code plus icon; build nothing for pros until picked |
| Dark mode | Spec for later (S5) | Not in build 6 |
