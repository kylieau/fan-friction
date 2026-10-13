# Fan/Friction Build 4 notes (Oct 12, 2026)

Base: `origin/main` at `35d34f3` (checked Oct 12, ~7:30 PM PT; read-only checkout). File refs checked against that commit.

## How to build
- One commit per step, straight to main. No PRs, no branches.
- Bug fix first (Section 0), then Section 1 in order.
- Log every decision with its reason and rejected options in `docs/product/product-decisions.md` (the repo's log; add an "Oct 12, build 4" section).
- Commit the boards to `docs/design/build4/` (`city-r5.png`, `city-r3.png`, `calendar-calm.png`, `map-activity.png`) and link them from the log. All board data (events, reads, friends Sam/Priya, your stubs) is EXAMPLE.
- Users are capable: say less, no fine print.
- ⚑ marks something open or ambiguous. Don't build it; flag it in your summary. ✋V0x points to a card (now all DECIDED, Oct 12; see `build3-review-form-decisions-oct12.md`) in the review form's "City view gaps (Explore Map/List)" section (open questions, Mosaic's lean pre-selected) (Kylie answers before you build that piece).
- "from board" = a detail read off the boards that the decision text doesn't say.

Boards: `/workspace/ff-gap-review/mosaic/nav/city/` — `city-r5.png` (latest: map chips + Today pill), `city-r3.png` (List B + back-scroll), `calendar-calm.png` K1 (calendar + header strip), `map-activity.png` (tighter sheet top). Where boards disagree, the decision text wins, then the newest board (r5).

Kylie's approval (verbatim): "please send to push pilot to include in the next build".

---

## 0. Bug: one crowd number per event (fix)
- Bug: Milwaukee, NLCS G2, Oct 12. The map chip shows **38k**; the compact card and the header show **42k**.
- Cause: the chip uses `chipDetail()` (`src/map/CrowdLayer.tsx:472-477`) → `crowdShort()` (`src/map/crowdPoints.ts:102-117`), which takes the **first** `event.crowd` figure that has a count. The card (`src/components/ChipCard.tsx:33-35`) and the header/sheet total (`src/screens/MapScreen.tsx:163`, shown `:287-291`, `:414-418`) use `drawSize()` (`src/data/read.ts:78-83`: expected draw capped by capacity).
- Build: one helper that picks the shown figure as **Final > Announced > Estimated**, used by the chip, the card and the sheet/header total.
- Why: the same game can't show two numbers.
- Past decisions: **extends** D04 (build-notes-3 §1: "Highlighted figure: Final > Announced > Estimated … Everywhere else: only the highlighted figure."; `product-decisions.md:77`). D04 was written for stub figures; this applies the same order to event figures on the map.
- ⚑A Don't change the read math. `read.ts:85-88` sizes friction by "a counted crowd; else an expected draw by the low end of its range (Kylie, Oct 7, S1)". Unify the **displayed** number only; flag if the header total and the read now visibly disagree.
- ⚑B Event feeds carry "announced"/"estimated" kinds, not a "Final" kind (BACKLOG ⚑4: "nothing writes it"). Final will usually be empty; fall back cleanly.

---

## 1. Explore city view: Map + List (Kylie via Mock Mosaic, Oct 12)

### 1.1 Two views, Map and List
- Decision: Explore has two views, **Map** and **List**, with an icon switch next to search. Map is the default; the app remembers the last view.
- Why: one Explore tab covers browsing by place and by date.
- Rejected: none recorded.
- From board (`calendar-calm.png`, r3/r5): the switch is a two-segment pill (map icon | list icon) left of the 40pt search circle; the selected segment is a filled Dodger-blue circle.
- Remember the view per device, like the activity chip ("remembered on the device", `product-decisions.md:89`).
- Past decisions: `ExploreScreen.tsx:12` "The old stand-alone calendar page stays reachable at ?view=calendar, unlinked." → **extends**. List is the new date view; leave `?view=calendar` as is (see 1.5 / ✋V10).

### 1.2 Header: shared page title
- **DECIDED (V03, Kylie, review form Oct 12):** Agree: city name left at 24pt, Map/List switch and search right; read box + date + ‹ Today › row and day strip underneath, unchanged Why: Mosaic's lean; smallest change to the live Map — only the top row changes. Rejected: Fold the read box and date into the title row (saves height; busier; not drawn). Build: Map view top row = the shared 24pt title row (§1.2) with the Map/List switch and search; everything below stays as live.
- Decision: city name **left-aligned** at the shared **24pt bold** page-title size, matching Stubs / Following / You: one **56pt** row, actions in **40pt circles** on the right. Explore adds only the Map/List switch.
- Why: consistency across bottom-nav tabs.
- Rejected: the centered 15pt city switcher.
- From board (`calendar-calm.png` right column): Explore title is "⌂ Los Angeles ⌄" (home icon when it's your home city, chevron opens the city list); Stubs "Stubs"; Following "Following"; You has a 40pt avatar circle ("K") before "You". Each other tab shows a 40pt search circle on the right.
- From board: the r3/r5 **Map** frames still draw the old centered "Milwaukee ⌄" with search only. Those are live screenshots under the new chips. The decision text wins: build the same left-aligned header with the Map/List switch on the Map view too. (Question for Mock Mosaic Q1.)
- Past decisions: **supersedes** "the city switcher is centered on the top row and its list opens centered under the chip, sized to the longest name; 'Bay Area' stays" (`product-decisions.md:37`, Oct 9) and build-notes-2 "City switcher: make sure the chip is truly centered on the top row" (`build-notes-2-oct10.md:128`). The list should now open under the left-aligned title. **Agrees** with "One search on every tab … top right" (`product-decisions.md:36`).

### 1.3 List view = "List B"
- **DECIDED (V04, Kylie, review form Oct 12):** Change: keep it Why: Gives the week's count at a glance. (Differs from Mosaic's lean.) Rejected: Agree (Mosaic's lean): drop it; the calendar covers it. Build: Keep the "THIS WEEK · OCT 12–18 · 36 events" line under the calendar (as drawn in r3 / K1). ⚑ The boards only draw it for the current week; what it says when you scroll to another week isn't specified — flag, don't invent.
- **DECIDED (V08, Kylie, review form Oct 12):** Agree: hidden in the list, still shown in the calendar Why: Mosaic's lean; tighter list. Tapping such a day jumps to the next day with events. Rejected: Show the day header with "No events". Build: As chosen.
- Decision: header, then the K1 calm calendar, then the day list. No extra big date heading in List.
- Why: the read would show twice.
- Rejected: List A (repeated date heading).
- From board (r3 frame 1): under the calendar sits a thin band "THIS WEEK · OCT 12–18 · 36 events". Day headers are grey bands: "TODAY · MON, OCT 12", "TOMORROW · TUE, OCT 13", then "WED, OCT 14", each with a read box (number over word, e.g. "2.8 MILD") on the right. Rows: time left; title over venue; crowd icon + figure right with tags under; one activity line ("Sam is watching at Barney's Beanery", "Priya is interested", "You're attending" in blue). The r5 board drops the "THIS WEEK" band; ⚑ ask (Q2).
- Rows follow the decided Explore sheet layout (`product-decisions.md:89`: "rows by time, time left, title over venue, crowd and tags right, one small activity line") → **agrees**.

### 1.4 K1 calendar
- **DECIDED (V05, Kylie, review form Oct 12):** Agree: rows follow the list week by week; no-read day is a plain grey number; label spans months ("Oct – Nov 2026") Why: Mosaic's lean; never fakes a read. Rejected: Rows stay on the current three weeks (simpler; calendar stops tracking the list). Build: As chosen.
- **DECIDED (V09, Kylie, review form Oct 12):** Forward as far as the catalog has events; back to the start of last month Note: "do we have a limitation that would prohibit us from scrolling as far back as the catalog has events? what are they" Why: Shows every real event; uses what exists. Rejected: Limit to the three calendar weeks (hides later games); Ask Mock Mosaic to draw it first (slower). Build: Build as chosen (forward: as far as the catalog has events; back: start of last month). Answer to her question is in Open questions (Q-V09) — the range may widen if she wants.
- Decision: three week rows of plain day numbers on soft tinted circles using the read-box blue ramp (chill / mild / spicy / brutal). No scores or words in the calendar. Today has a ring. The exact score and word appear only in the list's day headers. Past days are muted. The calendar is pinned while the list scrolls; tapping a day jumps the list to it.
- Why: the score-box calendar was too tight and overwhelming.
- Rejected: K2 (two weeks of score boxes) and a compact three-week score-box calendar.
- From board: white card, "October 2026" top-left, Monday-first (M T W T F S S); weeks start on the current week's Monday (Oct 12 → Nov 1). Brutal days are the darkest blue with white numbers. Past days in the scrolled-up frames are plain grey numbers with no circle. When scrolled up into the past (r3/r5 frame 2) the calendar shows the earlier week first (Sep 28 – Oct 18), so the three rows move with the list.
- Past decisions: **supersedes in spirit** the Oct 3/Nights-tab calendar "shaded by night rating with each day's number" (`product-decisions.md:12`; BACKLOG:152 "date in the corner, rating in the center"). That screen is still the `?view=calendar` page; don't change it.
- ⚑ (✋V09 — DECIDED, see above) Data horizon: the on-repo archive keeps 14 days (`horizonDays: 14`); the live catalog fetches 120 days ahead (`/workspace/ff-gap-review/live/notes.md`). The third calendar row reaches ~20 days out, so some days may have no read. The boards don't show a no-data day, how far the list scrolls forward, or how the three rows move.

### 1.5 Upcoming / Famous dates tabs removed
- **DECIDED (V10, Kylie, review form Oct 12):** Hide it until it lands in Stats Note: "make sure this goes on the next build (or the backlog) though" Why: Cleaner now. (Differs from my lean, "keep".) Rejected: Leave it where it lives today until the Stats pass. Build: Hide Famous dates (`CalendarScreen.tsx:186`) wherever it shows (the month sheet and `?view=calendar`). Don't delete the code or data. Add a BACKLOG item: "Famous dates → Stats tab (Mock Mosaic Stats pass)".
- Decision: remove the Upcoming / Famous dates tabs. Famous dates moves to Stats later (not this build).
- Why (from board r3 note): "one fewer row above the content, and the calendar already does the date jumping."
- Rejected: none recorded.
- Past decisions: **agrees** with "The Stats tab stays as it is for now; a separate Mock Mosaic pass comes later" (`product-decisions.md:70`; BACKLOG:175 "the Stats tab stays as it is"), because the move is later. **Extends** BACKLOG:307 (Kylie, Oct 5: Famous nights under Explore's month sheet is "funky"; "Decide and rehome; nothing deleted"). This names Stats as the new home.
- ⚑ (✋V10 — DECIDED, see above) The tabs exist only on the K1 mock. Live, Famous dates is in `CalendarScreen.tsx:186` (the `?view=calendar` page and Explore's month sheet via search's "Pick a date"). Not settled: does Famous dates stay reachable there until the Stats pass?

### 1.6 Back-scroll and the Today pill
- **DECIDED (V07, Kylie, review form Oct 12):** Agree: match styles Note: "i want it to look as consistent/same as possible, but idk if it can look exactly the same as the map's "today" since the background would be different.." Why: One look for "Today". Visual only; placement differs by view (pill floats in List, button sits in the Map header). Rejected: Keep them different. Build: Make the List Today pill and the Map's Today button as visually alike as possible (shape, type, color treatment). Where the pill floats over list content, adjust only what's needed for contrast (e.g. shadow/fill) and note it in your summary.
- **DECIDED (V09, Kylie, review form Oct 12):** Forward as far as the catalog has events; back to the start of last month Note: "do we have a limitation that would prohibit us from scrolling as far back as the catalog has events? what are they" Why: Shows every real event; uses what exists. Rejected: Limit to the three calendar weeks (hides later games); Ask Mock Mosaic to draw it first (slower). Build: Build as chosen (forward: as far as the catalog has events; back: start of last month). Answer to her question is in Open questions (Q-V09) — the range may widen if she wants.
- Decision: the list opens on today; earlier days are hidden above. Scrolling up reveals past days with read boxes and Attended markers. A floating **44pt "Today" pill** shows whenever today is off screen: "↓ Today" at the bottom when you're scrolled into the past, "↑ Today" at the top (below the calendar) when you're scrolled into the future.
- Why: no extra tap to see the past.
- Rejected: a "Show earlier" button (adds a tap).
- From board: past rows show "🎟 Attended" in blue and "📺 Sam watched" (grey); the past section starts with a small line under the calendar, "EARLIER · tap ↓ Today to jump back" (r3/r5). In r5 the "↑ Today" pill is centered over the first visible day header, just below the calendar. Pills are filled Dodger blue with white text. Day headers for today read "TODAY · MON, OCT 12".
- Past decisions: **agrees** with the Friends "Earlier" band decision ("Rejected: (B) a 'Show earlier' pill", build-notes-3 §4.6). "EARLIER" matches that vocabulary.
- ⚑ How far back the list goes isn't stated (✋V09 — DECIDED, see above).

### 1.7 The date popup is gone; date and read box open the date page
- **DECIDED (V02, Kylie, review form Oct 12):** Change: remove the Why card; keep the month sheet for search's "Pick a date" Why: Read box and date both go straight to the date page, matching decision 7's wording. (Differs from Mosaic's lean.) Rejected: Agree (Mosaic's lean): remove the month/date sheet; keep the Why card — kept build 3 §4.3, but contradicted decision 7's "read box opens the date page"; Remove both (search's "Pick a date" loses its picker). Build: On Explore Map, the read box and the date open that day's date page; remove the `WhyCard` there (`MapScreen.tsx:273, 467`). Keep `MonthSheet` for search's "Pick a date" (`MapScreen.tsx:211, 470`). Supersedes build-notes-3 §4.3 and `product-decisions.md:88` (read box → Why popup). `WhyCard` is used only on MapScreen, so it leaves the app.
- Decision: remove the date popup sheet entirely. Tapping the date or the read box in the Map date heading opens that day's **date page**. In List, tapping a day header's date or read box opens that day's date page.
- Why: none recorded beyond the decision; it matches "the read box is already an entry point".
- Rejected: none recorded.
- Past decisions: **supersedes** build-notes-3 §4.3 "The read box opens a popup with 'See the whole day ›' attached to the bottom of the same card" and `product-decisions.md:88` "the read box opens the Why popup, which ends in 'See the whole day ›'". Live: read box → `WhyCard` (`MapScreen.tsx:273, 467`). **Agrees** with §4.1 "Tapping the date or the read box opens the date page" and P3/Oct 9–10 "Why 4.7 tonight" card is retired on Explore (`product-decisions.md:46`, build-notes-2-oct10 :173).
- ⚑ (✋V02 — DECIDED, see above) "Date popup sheet" could mean the Why card, or the month sheet (`MonthSheet`, `MapScreen.tsx:211, 470`, opened by search's "Pick a date"), or both. Also: does the Why card go everywhere (the date page / event page "This day" card), or only on Explore?

### 1.8 Map sheet top: tighter
- Decision: tighten the Explore sheet top on Map (~75pt → ~56pt). Keep the grabber; keep 44pt taps. Move the map's ? / locate buttons up so the sheet doesn't cover them.
- Why (from board `map-activity.png`): "the grabber had about 14pt above and the row about 16pt of dead space around it; trimming that gives the map back ~19pt and reads as one tight bar."
- Rejected: removing the grabber (it's the only cue that the sheet drags up).
- From board: grabber ~4pt above the row; r3 note says the ? and locate buttons move up 29pt. Bar content stays "2 events · 59k ›" left and the activity chip right.
- Past decisions: **agrees/extends** §4.2 "Minimal gap under the grabber" (build-notes-3) and the collapsed bar "4 events · 94k ›" (✅20).

### 1.9 Map chips: activity line, no restyle
- **DECIDED (V01, Kylie, review form Oct 12):** Agree: only chips with activity grow, to about 58pt (same width and style) Why: Mosaic's lean. Chips without activity stay exactly as live; matches the approved r5 board ("a chip grows upward so it stays anchored above its pin"). Rejected: Keep 44pt and squeeze three lines with smaller type (breaks the 11pt minimum); Keep 44pt; the activity line replaces time · crowd when Activity is on (loses time and crowd on the map). Build: Supersedes the Oct 4 "The box does not grow" and the fixed 112×44 of L1b for chips with an activity line only. Width (112), padding and style unchanged; the chip grows upward from its pin.
- **DECIDED (V06, Kylie, review form Oct 12):** Something else (her words): "Name friends only, never me. Order friends Attending, then Watching, then Interested. +N counts the other friends with a status at that event. Long friend names end in "…", but +N is never cut. On overlap, the chip for the soonest event sits on top." Note: the text above (form) — matches her chat answer Why: Space: the user's own status shows elsewhere (chat: "i dont think need to name the user, just social"). Rejected: Mosaic's lean + my "You first"; Friends before You (moot). Build: Chip line names one friend only, never the user; order Attending > Watching > Interested; +N = other friends with a status; truncate the name with "…", never the +N; overlap: soonest event's chip on top. Form text matches the chat answer already in these notes.
- Decision: **do not restyle** the chips. Keep the existing rounded-square chips at the same size and style. With the Activity toggle **ON**, add one short line inside the chip: `[icon] [name] [+N if applicable]`, e.g. ticket "You", ticket "Sam +1", bookmark "Priya", TV "Sam". 11pt, bold blue. Icons match the "+ Stub it" sheet: ticket = Attending, TV = Watching, bookmark = Interested. One person per chip; everyone is listed in the card. Activity **OFF**: chips exactly as live.
- Why: keep the live map look; the activity is visible without new chip shapes.
- Rejected: icon-only pin badges (the r3 version), pill-shaped chips, coloring whole pins (it conflicts with the read colors).
- From board (r5 note): "With the third line, a chip grows upward so it stays anchored above its pin." The chip sits on its pin; only chips with activity get the line.
- Past decisions:
  - **Conflicts (resolved by V01: grow to ~58pt)** with "one fixed box about 112×44 … The box does not grow" (`product-decisions.md:7`, Oct 4) and "Map chip L1b … line 2 is time · crowd; 112×44, 6 px side padding" (`product-decisions.md:40`; build-notes-2-oct10:159 "Box: fixed 112×44, unchanged"). A third 11pt line doesn't fit in 44pt (`styles.css:1629-1630` `width:112px; height:44px`). The board grows the chip; the text says "same size".
  - **Extends** "No Friction, Sold Out, or star on the chip" (`:7`, `:40`). Chips were kept to name/time/crowd; this adds a social line only when Activity is ON.
  - **Agrees** with the icon set (build-notes-3 §4.4: "ticket = attending, TV = watching, bookmark = interested") and the toggle (§4.2 "Off hides all activity lines, including your own").
  - Live chip text is e.g. "Brewers (NLCS G2)" / "4:00 pm · 38k" (r5). Don't touch the name/time lines here.
- ⚑ (✋V06 — DECIDED, see above) Which one person shows when several have statuses (you vs. friends; Attending vs. Watching vs. Interested), and what +N counts.
- ⚑ Long names in 112pt (e.g. "Alexandra +3"): truncate the name, never the +N (Mock Mosaic Q4).

### 1.10 Chip tap
- Decision: tapping a chip keeps the **live** behavior: blue outline; the summary bar becomes a compact card that opens the event page. Activity ON: the card also shows the social line, e.g. "ticket Sam +1 attending · bookmark Priya interested". Activity OFF: the card hides it, consistent with the toggle hiding all activity including yours.
- Why: consistency with the toggle.
- Rejected: none recorded (r3's callout-over-pin was replaced).
- From board (r5 frame 5): card "Pistons at Bucks" / "Fiserv Forum · 7:00 pm", crowd "17k" right, then the social line in 11pt blue with icons. The card has a grabber on top.
- Past decisions: **agrees** with T1 (`product-decisions.md:45`: "a compact card rises … the whole card opens the event"). Note T1 says "pale ring" and the decision says "blue outline (live)": build what's live. **Agrees** with "Activity lines say 'attending'" (`:96`) and the Friends short form "Sam +1 attending" (§4.6).
- From board, superseded: `map-activity.png` shows "Sam +1 going". Use "attending" (Kylie, Oct 12, BACKLOG:53 "ignore the mock's 'going'").

### 1.11 Copy rules
- Attending / Watching / Interested; never "going" or "night". Venue on line 1B. 11pt minimum for new text.
- Past decisions: **agrees** with §3.1 never "night", §4.0 line 1A/1B and 11pt minimum, ✅25 and `product-decisions.md:96`. The one carve-out stays: feed sentences keep "is going to / went to" (MEMORY_HANDOFF:29). Don't sweep those.

---

## 2. Cross-check summary
| # | Touches | Verdict |
|---|---|---|
| 0 bug | D04 precedence | Extends (event figures) |
| 1.1 | `?view=calendar` unlinked page | Extends |
| 1.2 | Oct 9 centered switcher (`PD:37`, bn2 :128) | Supersedes |
| 1.3 | Explore sheet rows (`PD:89`) | Agrees |
| 1.4 | Nights calendar (`PD:12`) | Supersedes in Explore; old page untouched. Horizon ✋V09 |
| 1.5 | Stats as is (`PD:70`), Famous rehome (BL:307) | Agrees / extends; interim home ✋V10 |
| 1.6 | Friends "Earlier" band (bn3 §4.6) | Agrees |
| 1.7 | Read box → Why popup (bn3 §4.3, `PD:88`, P3 `PD:46`) | Supersedes; scope ✋V02 |
| 1.8 | §4.2 minimal gap, ✅20 bar | Agrees |
| 1.9 | Fixed 112×44, box doesn't grow (`PD:7,40`) | **Conflicts** ✋V01; who shows ✋V06 |
| 1.10 | T1 card (`PD:45`), toggle hides all (§4.2) | Agrees (live blue outline wins over "pale ring") |
| 1.11 | §3.1, §4.0, ✅25, `PD:96` | Agrees |

## 3. Questions for Mock Mosaic (design gaps) — answered on the review form as V03–V08 (DECIDED)
- Q1 The Map view header with the new left-aligned title + Map/List switch isn't drawn (r3/r5 map frames show the old centered "Milwaukee"). Where do the read box, date, `< Today >` and day strip sit under it?
- Q2 Keep the "THIS WEEK · OCT 12–18 · 36 events" band (r3, K1) or drop it (r5)?
- Q3 How the three calendar rows move as you scroll past them, how a no-data day looks, and the month label when rows span two months.
- Q4 Chip with a long name or "+N": truncation rule; and the chip's new height and placement when neighbors overlap.
- Q5 Today pill and the map's own "Today" button: same style?
- Q6 List with zero events on a day: show the header with "No events" or skip the day?

## 4. Open (RESOLVED Oct 12; history kept)
Now the only open items: how the T13 filters combine (see "Stub tags rules T01–T13" and the T13 follow-up) and Kylie's manual steps M02–M06.

History: All V01–V10 are DECIDED (above). Was open: ⚑A read math unchanged · ⚑B Final empty · V04 "THIS WEEK" line on other weeks · V09 back-range follow-up (see §7). → V04 and V09 resolved in "Open questions resolved (Kylie in chat, Oct 12 10:46 PM PT)". ⚑A and ⚑B are build rules in §0, not open questions.

### V06 DECIDED (Kylie in chat, Oct 12 10:14pm PT)
Chip activity line names friends only, never the user ("i dont think need to name the user, just social"). Order among friends: Attending > Watching > Interested. "+N" counts the other friends with a status at that event (Kylie: "+N is fine"). Long friend names end in "…"; +N is never cut. Overlap: the chip for the soonest event sits on top ("overlap is fine"). Rejected: naming "You" first; friends-before-You ordering (moot).


## 5. Other decided items to build in build 4 (review form, Oct 12)

### R04 Older stubs' single crowd number (⚑3)
- Choice: **"Label it Announced if the box score has a count, else Estimated"** (lean). Notes: none.
- Rationale: it is the suggested rule, uses real data, and keeps every number. Old stubs then match new ones; nothing is lost.
- Rejected: "Label them all Estimated" (undersells real counts); "Leave them unlabeled" (old and new stubs look different).
- Build: a rerunnable migration/backfill (`src/data/crowdFigures.ts`) that moves each pre-Oct-12 untagged `crowd` into Announced when the event's box score has attendance, else Estimated. Never overwrite a filled field. Closes BACKLOG ⚑3.

### R10 Small polish batch
- Choice: **Something else**: *"I'm fine with the 8-9 px (across the board). Fix others."*
- Rationale: two of the three broke rules she set; she accepts the 8–9 px read-box words.
- Rejected: "Fix all three in the next build"; "Leave for a later polish pass".
- Build: (1) retitle the page "+ Stub it" opens (`src/screens/AddEntryScreen.tsx:74`; also `HomeScreen.tsx:220`) from "Log an event" to match "+ Stub it" (RESOLVED: title is "New stub"; see "'+ Stub it' page title" below. Was: ⚑ exact title not given, use "Stub it" and flag); (3) give the empty Faves picker a page title like the other tabs. (2) Keep the 8–9 px read-box words everywhere; record the exception to the 11pt minimum in the decisions log.

### C01 Tampa or Tampa Bay
- Choice: **"Tampa Bay"** (lean). Notes: none.
- Rationale: what locals and every team use, and the area covers St. Pete and Clearwater. Code stays TPA.
- Rejected: "Tampa (as built)".
- Build: `src/config/metros.ts:146-148` name → "Tampa Bay"; code TPA unchanged.

### C03 Boston's separate opponent file
- Choice: **"Fold it into expectedDrawIndex.ts"** (lean).
- Rationale: one pattern for every city; numbers don't change.
- Rejected: "Keep the separate file".
- Build: merge `src/data/expectedDrawIndexBostonOpponents.ts` into `src/data/expectedDrawIndex.ts`; drop the import at `src/data/expectedDraw.ts:7`. No value changes (diff the computed draws before/after).

### C11 Phoenix: Cardinals road games
- Choice: **"Add the fix to the next build"** (lean).
- Rationale: a real bug with a small fix; makes Faves and away games right.
- Rejected: "Leave it".
- Build: road games where Arizona is the visitor store `arizona-cardinals`, not `cardinals` (St. Louis keeps `cardinals`).

### C15 Second Chicago city-type answer (Astra)
- Choice: **Something else**: *"rebuild chicago based on incorporating the astra notes"*.
- Rationale: her call; Astra's answer adds Wrigley 2013 (36.7% driving) and a Ryan Field concert projection (58%) and says the car share isn't established region-wide.
- Rejected: "Keep hub; record Astra as agreeing; fix the stale BACKLOG line"; "Also fold Astra's Ryan Field / Wrigley figures into the notes"; "Reopen Chicago's type".
- Build: RESOLVED: full rebuild of the Chicago entry; see C15 in "Open questions resolved (Kylie in chat, Oct 12 10:46 PM PT)". (Was: ⚑ scope open; until answered, only the safe part: fold Astra's figures into the Chicago notes and fix the stale BACKLOG line ("Chicago and Boston are still assumed transit in CITY_TYPE").)

### C16 Other city leftovers (batch)
- Choice: **"Confirm all; check the Saints feed next build"** (lean). Note: *"as long as this has been double checked/verified"*.
- Rationale: each follows the feed or a sourced point; only the Saints check needs action.
- Rejected: "Change some".
- Build: check the Saints Oct 25, 2026 Paris game isn't placed at the Superdome; re-verify items (2)–(7) against their sources and list which were re-checked in your summary.

## 6. Decided: no build work
- **R02** Home's place (K23): "Open a second-opinion prompt before changing anything" (lean). No build; the prompt is a separate task.
- **R03** Neutral-site flag: "Leave ⚑6 open; no change" (lean).
- **R05** Final crowd: "Leave Final empty until a real source exists" (lean). Her note (verbatim, definitions to log): *"Announced is the official figure published by the team, league, promoter, or organizer. For sports and concerts it's released during or after the event and usually counts tickets sold or distributed. Keep the name, because it matches the term fans already see in box scores and reports, and add a source label like "from the team" or "per organizers." Don't call it Predicted or Expected, because both suggest a forecast. Estimated is an independent figure from police, media, researchers, or your app. It's most useful for free public events, where it often disagrees with the organizer's claim. Final is a counted headcount from scans or turnstiles. It's rarely made public for any event type, so leave it empty until a real source exists. The display rule (Final, else Announced, else Estimated) falls back to Announced cleanly, which supports your R05 lean."* ⚑ The "add a source label like 'from the team'" is new UI copy → Open questions.
- **R06** DH labels: "Leave off until a feed has it" (lean).
- **R07** Your-team emphasis: "Defer to a later mock pass" (not the lean, "bold names"). Her question, answered: the line comes from the event-naming research (`docs/research/topics/event-naming-at-vs.md:9,21`: "Solve that with emphasis and team-relative views, not by reordering"; "6. Emphasis, not reordering, for the user's team (e.g. bold/tint)"), carried into build-notes-3 §3.2 ("Emphasize the user's team; don't reorder"). It was Mock Mosaic's research rule, not a comment on a specific page.
- **R09** Five Claude calls: "Confirm all five" (lean).
- **R11** "Friction": "Keep it; decide after the Oct 13 tester interview" (lean). Note: *"keep friction for that scale ladder, but i think i want to name date read as "date verdict" (maybe this is internal only)"* → Open questions.
- **C02** Tampa past crowds: "Wait and batch" (lean). Note: *"make sure to put this in the backlog"* → BACKLOG city-gaps item.
- **C04** Car shares: "Keep the city default everywhere" (lean). Note: *"why else do we gather this information? why would we exclude it?"* → Open questions.
- **C05** Range-only capacities: "Keep blank" (lean). Note: *"add this information to the list of city gaps on the backlog that i might want to fix"* → BACKLOG city gaps (room list from the card).
- **C06** Capacity conflicts: "Confirm all as built" (lean). Note: *"also note in the city gap on backlog"* → BACKLOG city gaps.
- **C07** Rooms at 5,000: "Count each on its sourced figure" (lean).
- **C08** City names/codes: Something else: *"give me a research prompt for this"* → research prompt to write; no build.
- **C09** City types: "Confirm all as built (provisional)" (lean). Note: *"give me a research prompt for this also (to assess across all cities logged)"* → research prompt.
- **C10** Postseason pool rows: "Keep the added rows" (lean). Note: *"add future plan of all-city pool rebuild to the city gap backlog"* → BACKLOG.
- **C12** Ticketmaster ids: "Batch the id lookup as one later task" (lean). Note: *"let me know if this is an issue with future cities being built—we are building more cities as we speak / i might need to instruct cursor to do better"* → Open questions.
- **C13** Missing feeds: "Wait and batch" (lean).
- **C14** Open-site crowds: "Leave off the map; add to the unsized list" (lean). Note: *"give me a research prompt to find a solution for this"* → research prompt; add to `docs/reference/unsized-events.md`.
- **M01** Migrations 0023–0025: **Done**.

Kylie's manual steps still **Not yet** (keep in §7 of the notes): M02 where-watched privacy spot-check, M03 log crowd figures (now after R04's backfill), M04 nightly date label, M05 tester readiness (K16), M06 phone checklist (K17).

BACKLOG docs work in build 4 (text only): C02, C05, C06, C10 city-gap entries; V10 Famous dates → Stats; R05 definitions in the decisions log.

## 7. Open questions for the next review form (RESOLVED Oct 12; history kept)
All items below are resolved; see "Open questions resolved (Kylie in chat, Oct 12 10:46 PM PT)". Research prompts went out in fan-friction-research-prompts-oct12.zip. Still open: Kylie's manual steps M02–M06 (§6) and how the T13 filters combine.

- RESOLVED (see Open questions resolved) · **R01** Private watch Where? picker. She picked "Leave Private with the full Where? picker" (not the lean) with: *"I'm confused. Home should be able to be public or private, since public can be an invitation, but private is just for own logging."* Her note matches what's decided (build 3: Home preset for both Private and Friends); the card was only about whether Private also shows recent places / Search places. Re-ask plainly with a picture; don't change StubSheet until then.
- RESOLVED (see Open questions resolved) · **R08** Team colors on Faves: picked "Add team colors (data work per team, every city)" (not the lean) with *"if this is just research, nbd, give me the prompt"*. Unclear whether to build. Next step: a research prompt for team colors; build only after.
- RESOLVED (see Open questions resolved) · **R05 follow-up** New copy: a source label on Announced ("from the team", "per organizers") — where it shows, and the words per source.
- RESOLVED (see Open questions resolved) · **R11 follow-up** "Date verdict" for the date read: user-facing rename or internal term only?
- RESOLVED (see Open questions resolved) · **C04** Why gather car shares and not use them? Explain: estimates aren't measured; the rule wires only measured splits. Ask whether to wire research estimates after all.
- RESOLVED (see Open questions resolved) · **C12** Is the missing Ticketmaster key an issue for cities being built now? (Yes: agents without the key can't verify room ids, so new cities ship with no concerts.) Ask whether to add the lookup to the new-city checklist / give agents a key path.
- RESOLVED (see Open questions resolved) · **C15** "Rebuild Chicago with the Astra notes": what changes — city type stays hub per both answers; rewire car shares from Astra's figures; or a full rebuild? Ask.
- RESOLVED (see Open questions resolved) · **C16** Which items need re-verification by whom before closing.
- RESOLVED (see Open questions resolved) · **V09** Her question: limits on scrolling back to the catalog's start. Facts (origin/main `35d34f3`): the nightly catalog keeps past dates (`scripts/catalog-write.mjs:111-123` only deletes stale rows from today on), so past events exist back to each city's first capture — LA from Oct 4, 2026 (`data/schedule-archive/la/2026-10-04.json`), New York Oct 6, Milwaukee Oct 11, many cities Oct 12. Before that there's nothing except hand seeds. When Supabase is unreachable the app falls back to live feeds, which serve from today on (no past). Reads exist only for dates with a snapshot. So "as far back as the catalog" is possible; ask if she wants that instead of "start of last month".
- RESOLVED (see Open questions resolved) · **V04 scope** What the "THIS WEEK" line says when the list is on another week.
- RESOLVED (prompts written) · **Research prompts she asked for:** C08 (city names and codes), C09 (city types across all cities), C14 (open-site crowds), R08 (team colors).

## Stub tags (approved by Kylie via Mock Mosaic, Oct 12; visual DECIDED; rules now DECIDED below in T01–T13, except how the T13 filters combine)
Kylie: "yes please, although i want to work out the mechanism/rules". (Was: don't build the tag logic until Mosaic sends the rules. The rules are now in "Stub tags rules T01–T13".)
Boards: /workspace/ff-gap-review/mosaic/nav/tags/ (tags-r1.png screens, tags-luggage.png final chip).
1. Free-form personal tags (Letterboxd pattern). Rejected: fixed taxonomy.
2. '+ Stub it' sheet: optional Tags row below Attended/Watching with '+ Add tag'; Done always works without tags.
3. Entry: text field autocompleting from the user's own tags, RECENT chips row, STARTER IDEAS for new users (first game, birthday, with dad, rain delay, floor seats).
4. Tags show on the existing Stubs row status line (rows don't grow) and on the event page stub line with Edit. Tapping a tag opens its page: title, count summary ('5 stubs · 4 attended · 1 watched'), stubs grouped by year.
5. SUPERSEDED by T13: Stubs filter row: All / Attended / Watched / Tag ⌄. (Build the Oct 11 chips plus Tag instead.)
6. Chip: luggage-tag shape (pointed left end), open-circle hole (thin violet ring), thin violet outline, violet text, no fill, 11pt, lowercase, no '#'. Why: friction pills are filled capsules and MAJOR occasion tags are rounded squares; luggage shape is distinct and fits the stub theme. Rejected: light violet fill (too close to friction pills), capsule, rounded square, plain text, dashed capsule, ticket-notch T1–T3.
RESOLVED by T13 (was open for the review form): item 5's filter row vs the decided My Stubs chips (Recent · Sports · Concerts · Watched · Attended) — check for conflict.

## Open questions resolved (Kylie in chat, Oct 12 10:46 PM PT): leans accepted except C15
- R01: Private gets the same Where? picker as Shared (Home, recent places, search). Rejected: Private shows only Home.
  - Why: B is simpler, and the place is still useful in your own history. Her note agrees: Home works for both public and private.
- R08: Research team colors first (prompt sent in fan-friction-research-prompts-oct12.zip); build after it lands. Rejected: build now; skip.
  - Why: research first; she said "if this is just research, nbd, give me the prompt". Team colors are data work for every team in every city.
- R05: Source label ("from the team", "per organizers") only on the event page's small Announced row. Rejected: also on cards; no label yet.
  - Why: the detail lives on the event page and chips stay short. The label comes from her R05 note ("add a source label like 'from the team' or 'per organizers'").
- R11: "Date verdict" is an internal term only (docs/code); the user-facing name stays until after the Oct 13 tester interview. Rejected: rename for users now.
  - Why: wait for the Oct 13 tester interview before renaming anything users see. Her note: "maybe this is internal only".
- C04: Wire sourced car-share estimates, marked as estimated. Rejected: city default everywhere; named-study only.
  - Why: the research was paid for, and a sourced estimate beats a city-wide default; mark it estimated. Her note: "why else do we gather this information? why would we exclude it?"
- C12: Add the Ticketmaster ID lookup to the new-city checklist, plus one lookup pass at the end for cities that missed it. Rejected: give agents a key; one later batch.
  - Why: agents without a Ticketmaster key can't verify venue ids, so new cities ship with no concerts. Her note: "we are building more cities as we speak".
- C15: REBUILD the whole Chicago entry from scratch with the Astra notes (Kylie's choice, not the lean). Both answers support hub. Use the Wrigley 36.7% and Ryan Field 58% figures. Rejected: keep the entry plus Astra figures (lean); notes only.
  - Why: Kylie chose a full rebuild from scratch over the lean (keep the entry plus Astra's figures). Both research answers keep Chicago a hub.
- C16: Push Pilot re-checks items 2–7 against their sources during the build and lists what was checked. Rejected: Codex Sol pass.
  - Why: the re-checks happen during the build. Her note: "as long as this has been double checked/verified".
- V09: The list scrolls back as far as the catalog has events (LA from Oct 4; others from their first capture). Rejected: start of last month.
  - Why: the catalog keeps past days back to each city's first capture (LA Oct 4), so there's real data at no cost. The live-feed fallback has no past.
- V04: Other weeks show "OCT 19–25 · 41 events"; "THIS WEEK" only on the current week. Rejected: hide on other weeks.
  - Why: the line works on any week, and "THIS WEEK" stays accurate.

### Stub tags: suggestions (Kylie via Mock Mosaic, Oct 12, DECIDED)
Kylie: "i agree with all of this, please include in build notes (except the no-'night' rule—this is personal logs, not app guidelines)". Source: starter-tags-research-answer.md.
1. Suggestions use event data. If the event has a promo (giveaway, bobblehead, fireworks, theme night), offer it as a tag first. Tap to add; never auto-applied. Promo tags sit in the normal suggestions, not a separate row. They depend on the promo data we have.
2. Starters split by type: concerts (surprise guest, live debut, barricade) vs sports (giveaway, rivalry, comeback). Sport-specific tags (walk-off, hat trick) only when the sport is known. Upcoming events get no after-the-fact tags.
3. Blend, don't cut over: the user's own tags first (frequency + recency), with starters filling the remaining slots. A starter retires after about 10 views without a tap. Replaces the T08 lean ("hide after 5 tags").
4. "first game" becomes "first time".
5. The no-"night" copy rule does not apply to tags (personal logs, not app copy), so "date night" and "theme night" are fine.
6. "Going" in the research = our Attending; no change.
7. Seats are a separate optional structured field on the stub (section/row/seat, or GA/floor/pit), not a tag. A "with" people-picker (the parked "Went with") is later, not this build.
Rejected:
- A separate promo row (folded into the normal suggestions).
- One shared starter list for all types (concerts and sports need different ideas).
- A hard cutover after 5 tags (blend instead; replaces the T08 lean).
- "first game" wording (now "first time"; works for any event).
- Applying the no-"night" rule to tags (tags are personal logs, not app copy).
- Seats as a tag (a structured field instead).

Docs: add /workspace/ff-gap-review/research/starter-tags-research-prompt.md and starter-tags-research-answer.md next to the other research prompts and answers (docs/research/topics/). Research only; no starter-set decision is implied.

### Stub tags rules T01–T13 (Kylie's build 4 form answers, Oct 12, ~11:37 PM PT). Her notes override the choice label.
- T01: Tags follow the same privacy setting as the stub or log they're on. (Her note overrides the lean "private by default".)
  - Why: Tags follow the stub's privacy, per Kylie's note. Tags are personal logs, so they share the setting of the stub they're on.
  - Rejected: Mosaic's lean, private by default regardless of stub privacy (overridden by her note).
- T02: Tags are optional on Attending and Watching stubs before the event, not on Interested, and carry over to Recent. One tag style before and after the event. Tag pages show upcoming stubs in a small "Coming up" band above past ones. "with [person]" stays a free-form tag; a "Went with" field is a later idea.
  - Why: Kylie's form answer. Tags are personal logs, so they go on stubs you log (Attending, Watching), before or after the event.
  - Rejected: none named on the card (only "Change").
- T03: Watched stubs can be tagged (see T02).
  - Why: Watching is a stub you log, same as Attending (see T02).
  - Rejected: none named on the card (only "Change").
- T04: 24 characters (soft pick; 32 is an acceptable alternative). Long tags end in "…" on rows and show in full on the tag page.
  - Why: 24 characters fits one chip plus a second tag or +N at 11pt.
  - Rejected: 32 characters (kept as an acceptable alternative; longer than one chip plus +N); no cap (long tags would break the row).
- T05: No hard cap; rows show 2 tags, then "+N".
  - Why: Rows don't grow; 2 tags plus +N fits, and the rest show on the event page and tag page.
  - Rejected: a hard cap (not needed; rows already show only 2).
- T06: Letters, numbers, spaces, ' and &, stored lowercase.
  - Why: Lowercase storage avoids duplicates ("Rain delay" vs "rain delay") and matches the lowercase chip.
  - Rejected: none named on the card (only "Change").
- T07: Rename, merge and delete from the tag page's "…" menu; deleting a tag never deletes stubs.
  - Why: Fixes typos and duplicates in one place; deleting never loses stubs.
  - Rejected: none named on the card (only "Change").
- T08: Blended suggestions, as in "Stub tags: suggestions" above. Rejected: hide starters after 5 tags.
  - Why: Kylie agreed with the starter-tags research: blend your own tags with starters (see "Stub tags: suggestions").
  - Rejected: hide starters after 5 tags (a hard cutover; new users lose ideas too early).
- T09: Most-used first, then most recent; at most 8.
  - Why: Your most-used tags are the ones you're most likely to reuse (Letterboxd pattern); 8 fits the chip row.
  - Rejected: recency-only order (buries tags you use often).
- T10: Multi-tag filter OK (changed from the lean "one at a time").
  - Why: Kylie changed the lean; matches T13's multi-filter.
  - Rejected: one tag at a time (the lean).
- T11: "Top tags" goes in the Stats pass, not this build.
  - Why: The Stats tab gets its own Mock Mosaic pass later (`product-decisions.md:70`).
  - Rejected: Top tags in this build.
- T12: Tags are searchable only inside your own Stubs.
  - Why: Tags are personal logs, not public labels.
  - Rejected: global event search by tag.
- T13: "include them all, multi-filter. i'll flesh this out later." Keep the Oct 11 chips (Recent · Sports · Concerts · Watched · Attended) plus Tag, and allow several filters at once. How the filters combine is OPEN until Kylie fleshes it out; don't invent it.
  - Why: Kylie: "include them all, multi-filter". Keeps the decided Oct 11 chips and adds Tag.
  - Rejected: Mosaic's board row All / Attended / Watched / Tag (would replace the Oct 11 chips); a single filter at a time.

### "+ Stub it" page title (Kylie, Oct 12, 11:42 PM PT, DECIDED; replaces the R10 placeholder)
- Title: "New stub" (`AddEntryScreen.tsx:74`, `HomeScreen.tsx:220`); "Edit stub" when reopening an entry.
- Under the title: the event name and date, following the naming rule (e.g. "Braves at Mets · Sat").
- On the first visit only: a one-line helper, "Saved to your Stubs".
- Why: follows the platform pattern for creation sheets ("New Event"), keeps the stub vocabulary, and works for both past and upcoming events. Rejected: "Stub it" (repeats the button and reads like a second button), "Log an event" (generic, and implies the past), "Add a stub" (fallback; a bit wordier).
- T13 follow-up (Kylie, Oct 12, 11:43 PM PT): how the filters combine stays OPEN on purpose, because event types and different sports still need work first. Lean on record for later: different groups narrow, the same group widens, Recent resets. Build 4: the filters stay as they are, adding only the Tag filter.

---

## Research answers decided (Kylie's form, Oct 13, ~8:25 AM PT)

Kylie's answers to the 35 questions on the four research answers (`docs/research/topics/{city-names-codes,city-types,open-site-crowds,team-colors}-answer.md`). Her notes are quoted as written; where a note disagrees with the option she ticked, the note wins.

**Where each item goes (F):** names/codes and team colors go to **build 5**. Open-site Tier A, the scoring cap and the car-share defaults go to the **next formula pass**. F names nothing for build 4; the only build-4 tie is B2, because the Chicago rebuild (C15) is already in build 4. **BACKLOG:** A10, B6, C4 (her note), D5's gap list. Items F doesn't name are tagged with the group they travel with, marked "(not named in F)".

Words used below: **sprawl** = most fans drive; **hub** = in between (some transit, mostly driving); **transit** = most fans take trains or buses. **Tier A / B / C** = the three levels for putting open-site events (festivals, parades) on the map; see C1.

### A. City names and codes (build 5)

**A1. Codes are a short fan label, 2–4 letters.**
- Why: what's built already reads well ("LA", "NOLA", "CBUS") and the slot is tiny.
- Rejected: exactly 3 letters everywhere (would break LA, SD, KC, CBUS, NOLA for no gain); airport codes (LAX is the airport, not what fans say).

**A2. Keep all current codes; only Milwaukee was in question (A3).**
- Kylie's note: "that research prompt should not have limited to 3 letter codes—why would we have such a restriction when LA is my home city. also, i don't want airport codes? so lmk if you think we will need to rerun this"
- Resolution: she's right; our prompt was wrong. It asked for "a three-letter code" and said to prefer the main airport code. Codes are a 2–4 letter fan label, **not** airport codes. The prompt (`docs/research/topics/city-names-codes-prompt.md`) is fixed on main, with a note at the top saying it was corrected Oct 13.
- No rerun needed: A2 keeps every current code (LA, CBUS, BAY, MIL, PHI, SAC, SD, ATX, VAN, KC, NOLA), so the wrong code advice in the answer isn't used. The answer's names, cities covered and confusion notes are still usable.
- Rejected: taking the answer's codes wholesale (they're airport codes from a wrong prompt; it never saw ours); going row by row (not needed once all are kept).

**A3. Keep MIL for Milwaukee.**
- Why: already in decided boards and copy; the MKE evidence was "from memory".
- Rejected: MKE.

**A4. Bay Area stays "Bay Area"; code stays BAY.** (She picked Something else.)
- Kylie's words: "wtf man idk this is why i put it up for research. closest would be SF/OAK/Berkeley or something but idk idk idk what other areas. i'm annoyed, is there not an easy shorthand? Bay Area is ideal, esp if we're doing twin cities"
- Resolution: display name stays "Bay Area" (already the repo name), and the switcher shows just "Bay Area", with no second line. Code stays BAY; Tampa Bay's code is TPA, so the codes don't collide. (Kylie's correction, Oct 13, 8:27 AM PT.)
- Why: "Bay Area" is what locals and teams say for the whole region; no single city name covers SF, Oakland and San Jose.
- Rejected: SFO (airport code, and leaves out Oakland and San Jose); SF (only one city of several); a switcher second line "SF · Oakland · San Jose" like Twin Cities' (Kylie wants Bay Area to stay Bay Area).

**A5. "Twin Cities" in the title; "Minneapolis–St. Paul" as the switcher second line and a search alias.**
- Why: fits the 24pt title row and is what locals say.
- Rejected: keeping "Minneapolis–St. Paul" and letting it shrink or cut off; "Minneapolis" alone (drops St. Paul).

**A6. Dallas–Fort Worth: full name; switch to "DFW" only when it doesn't fit, by measured width.**
- Why: no loss when it fits; measuring the real width beats a fixed character count.
- Rejected: always "DFW" in the title; always the full name, cut off.

**A7. "Montréal" with the accent; city search ignores accents.**
- Why: the correct local spelling at no layout cost. The metro id stays `montreal` (no data move).
- Rejected: keep "Montreal".

**A9. Do both now: venue renames and search nicknames.** (Changed from the lean.)
- Kylie's note: "i also want to include former names stored in venues (eg Staples Center for Crypto.com Arena)"
- Resolution: check the venue renames against the repo (Daikin Park, Benchmark International Arena, Estadio Banorte, Sports Illustrated Stadium), add the city nicknames from the answer (CDMX, Foxboro/Foxborough, Saint/St. Paul, Minnesota, Arizona, the Metroplex, New Jersey towns, "BC"), **and** store each venue's former names as search aliases (e.g. "Staples Center" finds Crypto.com Arena).
- Rejected: venue names now, nicknames later (the lean; she wants both now); both later.

**A10. Teams moving later (A's to Las Vegas 2028, Chiefs to KCK 2031, Rays 2029, Bears site open): BACKLOG watch list, no code.**
- Why: all future and only announced.
- Rejected: adding end dates to venue data now.

**A11. New research prompt for the 14 round-2 cities' names and codes.** (Changed from the lean.)
- Why: she wants these researched, not picked by builders.
- Note: the 14 city gaps follow-up prompts (Oct 13) already ask for name, short form and code (item 1), but they say "a three-letter code". That should be read as A1's 2–4 letter fan label, not an airport code (see open points).
- Rejected: builders apply the A1/A2 rule and list picks for approval (the lean); Kylie picks each now.

### B. City types

**B1. Read the answer with our meaning of the type words; keep our three words.** (not named in F)
- The answer read "hub" as transit-heavy. Ours means "in between". Mapping: car-first = sprawl, mixed = hub, transit hub = transit.
- Kylie's note: "just make sure if we use those terms externally, we explain (or even internally)"
- Resolution: wherever sprawl / hub / transit shows up in user-facing text or in docs, explain it in plain words (as at the top of this section).
- Rejected: renaming to car-first / mixed / transit (touches code, notes and 40 cities for no gain).

**B2. Chicago stays hub; before wiring Wrigley 36.7%, the builder must find its source, or leave it out and say so.** (build 4: the Chicago rebuild, C15)
- Why: 36.7% matches a UW Husky Stadium figure exactly, so it may be crossed; wiring a possibly-wrong number breaks "never invent".
- Rejected: wire 36.7% anyway; drop it now without checking.

**B3. Keep repo types where the city has its own research; log the answer's view as a second opinion.** (not named in F)
- The 7: Atlanta, Austin, Bay Area, New York, Sacramento, San Diego, Vancouver.
- Why: per-city research goes venue by venue; the general answer is one paragraph per city.
- Rejected: taking the answer's types for all 7; deciding each one.

**B4. Per-city default car share = midpoint of the answer's range, only where the city has no value of its own; venue figures still win; marked estimated.** (next formula pass)
- Why: fits C04 and is more precise than one number per type. Midpoint, not low end (low end is the crowd rule, not the car rule).
- Rejected: keep per-type defaults and use the ranges only in notes; per-city defaults for all 26, overriding per-city research.

**B5. Tie types to drive-share bands (under 40% / 40–74% / 75%+) as a check for new cities in the checklist, not a recode.** (not named in F)
- Why: makes "research it, don't assume it" testable.
- Rejected: no band check.

**B6. New parking-pattern field: BACKLOG for the next formula pass; no field now.**
- Why: nothing uses it yet, and it would change the spill model.
- Rejected: add the field now, use later; skip it.

**B7. Venue exceptions: wire a venue car share only where a figure exists and the venue has none yet; skip ones with no source (e.g. Gillette, Truist).** (travels with the car-share work, next formula pass)
- Why: matches C04 and "never invent".
- Rejected: wire all, including ones with no source; notes only.

**B8. Round-2 cities: no change; builders keep using each city's own type answer, plus the B5 band check.** (not named in F)
- Why: nothing new to apply.
- Rejected: a general second-opinion run for the 14.

### C. Open-site and free events (next formula pass)

**C1. Tier A on the map now; Tier B later; Tier C = today's rule.**
- Tier A = fenced, ticketed, with an announced daily cap. Tier B = unfenced, needs a footprint and an estimate. Tier C = no cap or footprint, stays off the map.
- Why: Tier A uses figures we already accept; Tier B is new math. Partly replaces C14's "leave off the map".
- Rejected: A and B now; keep everything off the map.

**C2. Keep the display order everywhere; for unfenced events only, score on the capped figure and show why on the event page.**
- Why: one display rule stays; friction isn't driven by inflated claims.
- Rejected: show Estimated above Announced for unfenced events; no cap.

**C3. Per-day figures only; divide published totals by days and label it "estimated".**
- Kylie's note: "instead of "estimated (app)" i think "estimated" is fine—but don't we have a helper/info that provides more information? if yes, brief explanation there."
- Resolution: the label is just "estimated". Yes, the helper exists: the (i) next to an estimated crowd on the event page opens **"How estimates work"** (`HowEstimatesWork` in `src/screens/EventScreen.tsx`). Add a short line there: a festival's published total is split evenly across its days.
- Rejected: only use figures published per day (would skip events that only publish totals).

**C4. Marathons stay unsized; finisher count logged as info only.**
- Kylie's note: "add to backlog that i might want to spend more time on this later"
- BACKLOG: she may spend more time on marathons later.
- Rejected: size by runners (runners aren't a traffic crowd); size by spectators capped by route (spectator counts are guesses).

**C5. A finisher count is not "Final"; finishers are participants, stored as Announced.**
- Why: keeps "Final" for real headcounts (R05).
- Rejected: Final for participant counts.

**C6. Crowd density numbers: only needed for Tier B; decide with Tier B.**
- Rejected: adopt 2.4 / 4.3 people per m² now.

**C7. The events in the answer, as listed.**
- Hardly Strictly Bluegrass → Tier C, add to `unsized-events.md`. Outside Lands, ACL, Lollapalooza, Summerfest → Tier A (check each isn't already a venue row). Eagles parade, NYC Pride, Shakira Zócalo → off the map until Tier B.
- Rejected: a different list.

**C8. Round-2 open-site events: builders apply the C1 tiers and list each event with its tier; unsized ones go to the unsized list.**
- Kylie's note: "i think this is included in follow up research prompt, given to me by push pilot, no?"
- Resolution: partly. The 14 gaps follow-up prompts don't re-ask it; they point to each city's venue answer, which already lists open-site events with unknown sizes left blank. Neither asks for the C1 tiers. So builders apply the C1 tiers when wiring those answers.
- Rejected: a new research prompt for round 2.

### D. Team colors (Faves; build 5)

**D1. Build with aggregator colors, labeled third-party, after a spot-check of the flagged rows.**
- Why: good enough for a small accent; the spot-check fixes the known bad ones (Bucs, Ducks, Kraken, the rebranded MLS clubs, Atlanta/Minnesota United order, Sparks, Yankees, the 9 mismatches).
- Rejected: wait for official values (none were found); only the 4 big leagues now.

**D2. Fill the existing team tile with the team color; nothing else changes.**
- Why: fits the decided layout and keeps color a small accent.
- Rejected: tint rows or cards; a small dot only.

**D3. Use the answer's contrast rule against our real card color; ignore dark mode.**
- Why: the app is light-only. If text sits on the tile, it needs stronger contrast (4.5:1).
- Rejected: always primary plus an outline.

**D4. Two-color tile (primary + secondary) for every team.**
- Why: one rule fixes every same-city look-alike (Timberwolves/Lynx, Yankees/Islanders, Kings/LAFC).
- Rejected: two colors only for clashing pairs; ignore it.

**D5. Gray tile until a color exists; BACKLOG the gap list.**
- Why: never invent a color.
- Rejected: builder picks a color from logos; hide those tiles.

**D6. Lead with the color fans expect (Yankees navy, Sparks purple, Atlanta United red/black).**
- Why: matches what fans see, and separates Yankees from Islanders.
- Rejected: keep the source order.

**D7. Round-2 teams: colors come from the 14 follow-up research answers; aggregators only as a fallback.**
- Kylie's note: "this might be included in follow up research"
- Resolution: it is. Each of the 14 gaps follow-up prompts asks for primary and secondary colors for every team from an official team or league source (item 6). So the 14 get colors from those answers; fall back to the aggregators (same third-party label, spot-check) only where a color is missing.
- Rejected: aggregators first with no new research (her ticked option, overridden by her note since the research is already asked for); a separate new prompt.

**D8. One "Not affiliated with or endorsed by any team or league" line on the You/About screen; store listing later.**
- Why: cheap risk reduction, kept off the main screens.
- Rejected: skip for now.

### F. Order of work
**Names/codes + team colors in build 5; Tier A, the scoring cap and car-share defaults in the next formula pass.**
- Why: the first two are data and screens; the rest change the read math, which §0 ⚑A says not to touch casually.
- Rejected: everything in one build (mixes math changes with screen work); names/codes only now (holds back colors, which are ready).

### Open points
- A11 vs the follow-up prompts: the 14 follow-up prompts already ask for name and code, but say "three-letter code". Either treat those answers as the A11 research (reading codes as A1's 2–4 letter fan label), or write a separate prompt. Not settled.
- F doesn't place B1, B3, B5, B8, C3–C8; they're tagged by group above.
