# 7.1 review mocks: INDEX

All data is EXAMPLE data. Every lean is Not confirmed unless it's marked Picked. Section headings use Title Case.

# Review 7.1 mocks, part A (items 1, 3, 5, 6, 7, 22/24, 23)

All frames are 390x844 (shown at 2x), drawn by injecting markup that uses the app's real class names into the live app shell on 127.0.0.1:3011, so styles.css draws them. All data is EXAMPLE and tagged on each frame. Tall frames are full page; popup and Activity frames are the first screen. Scripts: `src-a/` (run `node src-a/itemNN.cjs`, then `node src-a/boards.cjs`). On the boards, a solid blue outline marks PP's lean (or Kylie's pick) and a dashed green outline marks my lean where it differs.

## Kylie's update (Oct 23, 3:41 PM PT)
- **Item 2, Title Case headings:** applied in every frame ("Wednesday's Lineup", "Friday's Lineup", "Local Competition", "Today's Weather", "Open-Air Today", "About This Verdict", "Your Stubs", "Past Results"). All frames with headings were redrawn. Month bands (OCTOBER) stay uppercase through the app's CSS.
- **Item 1: Picked**, not a lean. Lineup first, with Local Competition under it (01-b).
- **Item 7: Picked**, the Attended card moves to the bottom (07-b). I also drew one alternative (07-c). My lean stays with the pick; reason below.
- **Item 3:** the weather card mocks are done as briefed (03-b, 03-c, 03-d).

## 1 · Day page: Lineup first, Local Competition under it (PICKED)
Board: `01-board.png`
- `01-a.png`: Current order, Oct 21: verdict, Attended, Local Competition (with the hourly strip), then lineup.
- `01-b.png`: **PICKED.** Lineup first, Local Competition under it. The hourly strip moves down with Local Competition.
- `01-c.png`: Lineup first, with the hourly weather folded into the verdict card and the strip removed from Local Competition.
- PP's lean was option 0, which Kylie has now locked.

## 3 · Day page "Today's Weather" card (parked N7 forecast)
Board: `03-board.png`. Fri Oct 23 (today). The directions are drawn in item 1's locked order, with the card under the verdict.
- `03-a.png`: Current. Header high/low, plus the hourly strip inside Local Competition.
- `03-b.png`: Direction A, a compact strip. One 44pt line under the verdict (☀️ 74° / 59° · Rain 0% · 66° at 7 pm ›).
- `03-c.png`: Direction B, a card. High/low, a one-line summary, rain, wind, sunset and an hourly row, with feels-like noted. The hourly strip leaves Local Competition so it isn't shown twice.
- `03-d.png`: Direction C, which is B plus an "Open-Air Today" list of the Hollywood Bowl and Greek Theatre rows. It depends on the bug B fix.
- **PP's lean:** option 0 (fix bug B now and mock the card). I agree.
- **My pick of direction: B (03-c).** Once item 1 moves Local Competition below the lineup, the hourly weather drops out of view; B brings it back to the top in one card. C is a good follow-up after bug B, because it repeats per-venue numbers that are stale today.

## 5 · Verdict (i) popup
Board: `05-board.png`. The Oct 21 page behind each popup shows the saved verdict, 5.3. The "Revised Oct 24 … It was 5.1." line is EXAMPLE and appears only on revised verdicts.
- `05-a.png`: Current. "Settled the day after the games."
- `05-b.png`: The draft rewrite as two short paragraphs, with the Revised line kept.
- `05-c.png`: The same facts with one small icon per line: clock (settled the morning after), list (11 events from 3 sources, frozen), people (crowd against overlap), cloud (outdoor weather).
- `05-d.png`: Minimal. "Settled the day after the events."
- **PP's lean:** option 0 (05-b).
- **My lean: 05-c (differs).** Kylie asked for "maybe an icon". The words are the same as the draft, so it costs nothing extra, and four short rows scan faster than a paragraph. I left out a traffic icon because traffic is not part of the verdict.

## 6 · Verdict lines, plainer
Board: `06-board.png`. With bug A fixed, the page shows the saved 5.3 Spicy, which was built from 11 events (the recomputed page says 15). "4 big crowds" is EXAMPLE until the real-rivals count exists.
- `06-a.png`: Current. Recomputed 6.4, "pulls on 14 other crowds", "Estimated from past schedules."
- `06-b.png`: Reword, copy 1 (PP's example). "Warriors at Lakers is the biggest pull among 11 events." / "4 other big crowds overlap it." / "3 sources"
- `06-c.png`: Reword, copy 2. "Biggest draw: Warriors at Lakers, [crowd] 19k." / "4 other big crowds overlap it, 7 to 10 pm." / "11 events in Los Angeles · 3 sources"
- `06-d.png`: Reword, copy 3. "4 big crowds overlap Warriors at Lakers, the biggest draw."
- `06-e.png`: Option 1. The current wording with an honest count ("pulls on 4 other crowds").
- `06-f.png`: Option 2. The headline is dropped, leaving the number, the word and "11 events in Los Angeles, 5 big ones at the same time."
- **PP's lean:** option 0. **My lean:** option 0 too, but with copy 2 (06-c) instead of PP's example wording. It leads with a label, shows the gold crowd figure, and drops the vague "pull". Same option, different wording.
- **Heads-up:** PP's example line says "among 15 events", but the frozen verdict counts 11. Fixed copy should use the saved count.

## 7 · Attended card: moved to the bottom (PICKED)
Board: `07-board.png`. 07-b to 07-d use item 1's locked order.
- `07-a.png`: Current. The gold-edged Attended card sits under the verdict.
- `07-b.png`: **PICKED.** The Attended card sits at the bottom, below the lineup and Local Competition and above Share and Compare. I removed the gold edge because gold is reserved for crowd figures.
- `07-c.png`: Alternative. The same bottom card, plus a slim 44pt row under the verdict ("🎟 You attended Cal Baptist at UCLA · Your stub ›") that jumps to the card.
- `07-d.png`: Dropped (PP's earlier lean), for reference.
- **My lean: the pick (07-b). The alternative does not beat it.** The lineup row already shows "🎟 Attended" near the top, so a slim row would say the same thing twice and push the lineup down again, which is what item 1 just fixed. Keep it simple.

## 22 / 24 · Upcoming looks ahead, Activity looks back
Board: `22-24-board.png`. Fri Oct 23.
- `22-24-a.png`: Upcoming now. Faves' past results (Dodgers, Rams, Lakers Oct 21) sit right above the "No plans yet" prompt and read as plans.
- `22-24-b.png`: Activity now (the Oct 21 lock). Oldest first, then the Today line, then "Nothing coming up from you or the people you follow."
- `22-24-c.png`: **Item 22, PP lean (A).** Upcoming is future-only, soonest first, with no Today line, no ↓ Today pill and no empty card. Friends' plans move here from Activity as rows with a "Friends · Sam R. attending" lead line.
- `22-24-d.png`: **Item 24, PP lean.** Activity is backward-only, newest first, with no Today line and no empty card. Watched-only rows carry no verdict (item 23). A footer reads "Friends' activity from the last 60 days. All of your own stubs show." (that is the sub-question: your stubs uncapped, friends 60 days).
- `22-24-e.png`: Item 22 Alt B. Only your own stubs appear above Today.
- `22-24-f.png`: Item 22 Alt C. Faves' past results are kept under a "Past Results" band at the bottom.
- Item 24's "friends' plans dropped" option looks the same as 22-24-d inside Activity; the only difference is that 22-24-c loses its Friends rows.
- **PP's leans:** 22 option 0 and 24 option 0. I agree with both, and I'd use the Friends line rather than a filter: it keeps friends' plans visible without an extra tap.

## 23 · Watched-only rows show no verdict
Board: `23-board.png`
- `23-a.png`: Current. Watched rows show MIL 1.0, 2.7 and PHI "—".
- `23-b.png`: **PP lean.** No verdict unless someone attended, everywhere: no chip, no "—" and no away-city code. "Sam R. attended" keeps its chip; "You, Sam R. watched" loses it.
- `23-c.png`: Alt. Verdicts on watched rows are dimmed. The "Activity only" option looks like 23-b inside Activity.
- **PP's lean:** option 0. I agree; it matches the "watched-only shows no day verdict" rule.

## Where my lean differs from PP's
- **Item 5:** 05-c (same draft words, one icon per line) instead of 05-b (plain paragraphs).
- **Item 6:** same option 0, but copy 2 ("Biggest draw: … 19k") instead of PP's "biggest pull among 15 events". Use the frozen count (11), not 15.
- **Item 3:** no disagreement on the option. My pick among the drawn directions is B (03-c).

## Checks
- Ran automatically on every frame:
  - no "going", "night", "tonight" or "~";
  - no horizontal overflow;
  - no clipped text;
  - no dark bars.
- 44pt and 11–13px text:
  - All new pieces meet them: the weather strip and card, the venue rows, the slim stub row and the popup close button (44px).
  - Some existing app elements are below them and were drawn as the app has them today:
    - text: verdict word 9px, date-box weekday 9px, chip word 8px, Away tag 8px, hourly glyph 10.5px;
    - targets: Back 21px, (i) 22px, lineup rows 38px, timeline bars 29px, "Show" 15px.
  - The popup text uses the app's 15–16px.
- Every PNG was viewed.

---

# Review 7.1 mocks, part B (items 14, 27, 28, 29, 34, 35, 36, 37, 38)

These are drawn into the live 3011 shell (main-clone at ad4b943) at 390x844 and marked EXAMPLE data. Local has no catalog, so the List rows are EXAMPLE markup that uses the production class names. Section headings are drawn in Title Case per Kylie (Oct 23, 3:42 PM PT): "This Week's Lineup", "Further Out", "Unknown Size", "Your Events". Scripts are in `src-b/`. Pink brackets, dashed outlines and labels are annotations, not UI.

**Where my lean differs from PP's:** I don't differ on any item. Item 28 has one addition: the up pill moves to 48px, shown in 28-d.

## 14 · City Switcher Rows, Slimmer
- `14-a.png`: current. 15px/700 names, 8px padding, 44pt rows, 42px search.
- `14-b.png`: **PP lean (A).** Regular names with the current city bold, 6px padding in 44pt rows, 36px search, lighter divider, Edit link at 14px/700.
- `14-c.png`: option B. 36pt rows, which breaks the 44pt rule.
- `14-board.png`. Option C keeps 14-a. My lean is A.
- Note: one map tile failed to paint under the 14-a menu, so `src-b/fix14.py` reuses 14-b's identical map below the menu.

## 27 · Explore List: Drop the Week Band?
- `27-a.png`: current, with the band.
- `27-b.png`: **PP lean (A).** The band is dropped.
- `27-c.png`: option B. The band shows only when you're off this week ("Next Week's Lineup · 47 Events").
- `27-board.png`. My lean is A.

## 28 · Explore List: Sticky Day Rows
- `28-a.png`: **PP lean.** Friday's band is pinned mid-day, with a solid band color (8% ink mixed into --bg).
- `28-b.png`: **PP lean.** Saturday's band pushes Friday's off.
- `28-c.png`: the problem case. "↑ Today" at top: 8px covers the pinned band.
- `28-d.png`: the fix. The up pill moves to top: 48px.
- `28-board.png`. Option B keeps the bands scrolling. My lean is A plus 28-d.

## 29 · Explore Calendar: Cooked in Ink and Gold
- `29-a.png`: current. Cooked uses Brutal's blue.
- `29-b.png`: **PP lean (A).** Cooked is an ink square with a gold number, and Brutal stays blue.
- `29-c.png`: the lean when today is Cooked. The today ring stays.
- `29-board.png`, with calendar close-ups. My lean is A.

## 34 · Further Out Rows Without the Drive Time
- `34-a.png`: current, with the drive.
- `34-b.png`: **PP lean (A).** "Acrisure Arena · Palm Desert".
- `34-b2.png`: Toyota Arena is now inside Los Angeles, so WWE SmackDown joins Friday's list. This applies under either option.
- `34-c.png`: option B, keeping the drive.
- `34-board.png`. My lean is A.

## 35 · A Crowd Number on Every Row (35, 35b, 35c)
- `35-a.png`: current. Rows are blank.
- `35-b.png`: **PP lean (A, and B for rows).** An estimate where one exists (Cal State Fullerton 1.2k, EXAMPLE), otherwise "Up to 7.1k" (Peacock Theater) or "Up to 14.5k" (Long Beach Arena). For 35b, "UC Riverside at Cal State Fullerton" gets a Men's Soccer label line.
- `35-c.png`: option C, ceilings only. The soccer row reads "Up to 10k".
- `35-d.png`: **PP lean (A) for 35c.** The switch is renamed "Show events with no estimate", and "Up to" rows count as known.
- `35-e.png`: option B for 35c. "Up to" rows count as unknown.
- `35-board.png`. Option D (research first) leaves 35-a. My lean is A.

## 36 · Even Gaps Around the Hidden Line and Further Out
- `36-a.png`: current, measured at 6px above the line and 14px below it.
- `36-b.png`: **PP lean (A).** The head's padding-top is 0, giving 6px and 6px.
- `36-c.png`: option B, 10px and 10px.
- `36-board.png`. My lean is A.

## 37 · Explore List: A Smaller Today Pill
- `37-a.png`: current. A 44px pill with a 58pt tap area.
- `37-b.png`: **PP lean (A).** A 30px pill with radius 15, 13px text, padding 0 12px and a lighter shadow. **The tap area stays 44pt** through the existing ::after inset of −7px.
- `37-c.png`: option B. A 34px pill with a 48pt tap area.
- `37-map-today.png`: the Map's 30px Today button, for comparison.
- `37-board.png`. This also applies to Your Stubs. My lean is A.

## 38 · College Games: One Label Line, Every Time
- `38-a.png`: current, a mix.
- `38-b.png`: **PP lean (A).** Every college game gets a line, including "Football". Titles read "{Opponent} at UC Irvine" and "{Opponent} at Cal State Fullerton".
- `38-c.png`: option B. The Oct 15 exemption stays, so there's no Football line. The Sidearm titles are still fixed.
- `38-board.png`. My lean is A.
