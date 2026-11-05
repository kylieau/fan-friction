# Round 2 · Item 1 · Activity Rows (Oct 30, 2026)

Made Fri Oct 30, 2026, at 11:46 am PT. Built 7.1 app on 127.0.0.1:3071 (served from `review-7-1-gap/repo`). I changed the DOM in the page only: no repo edits, no commits, and no servers stopped. Everything is EXAMPLE data. All people (Sam R., Priya K., Jo L., Maya T.) are made up.

**Not confirmed — lean: Option A, Fact List.**

## What Kylie said (v3 form export, exported 11:28 am PT Oct 30)

Quoted exactly as she wrote them, so lowercase, typos, and her one em dash (in H11c) are kept.

- **H1, Which Row Layout.** Picked C, "Name header above the title" (my lean was A). Note: *"i do want the name header at the title, but i want it to be like stubs where it says "watched/attended" with the icons and after says name (rather than reading like a sentence to read)"*
- **H2.** "Attended · Name" is acceptable (confirmed).
- **H3.** No, the row stays one tap target (confirmed).
- **H4, Your Own Row: Initial Or Photo.** Picked "Photo when there is one, otherwise the initial". Note: *"for now, initial in a circle, but i would want to create the flexibility to add a photo later. however, i think irrelevant because we aren't doing avatars here?"*
- **H5, How Many Avatars Show.** Something else: *"N/A"*
- **H6, Crowd Counts On Rows.** "No, keep rows free of crowd counts" (confirmed).
- **H7, "· Friends" On Your Own Rows.** Something else: *"if other friends also attended, add their names, not just "friends". separately, is there any way (other than the avatars because i didn't like that idea) we can include the actual relevant information? i actually really like how the information is listed on the D1 mockup... i think we should aim for something like that. also default should be to only include "attended" events. do you think watched events needs the venue name listed? (similar to verdict) I actually wonder if attended even needs the verdict. other information might be more appropriate to include?"*
- **H8.** Keep the away city code tag as built.
- **H9, Verdict Tile Height.** "No, keep 40pt" (changed from my 44pt lean).
- **H10.** Sport line on every row, whenever one exists.
- **H11a (Activity card, event and date pages).** *"i think the event page activity card should be slightly tweaked to draw greater attention to the user's own attendance/editing option. i don't think it's appropriate to have the "friends" symbol next to it because the formatting as a whole make it look like friends are also attending. so that potential misunderstanding needs to be solved aesthetically / aligned with "your stub" for an event."*
- **H11c.** *"i addressed this in H11a—i want mockup options to remedy this. glad you identified this as an issue, buti'm not a fan of the two options you've presented (i need you to be more ambitious in letting the UX/UI drive these types of mockup optionality/decisions)"*
- **H11d.** Cap at 3 with a "See all" row. Note: *"question is how do we select which ones? is the priority in chronological order or by popularity/attention"*
- **D1, Story Version.** Picked A, "Short Recap" (confirmed). Her note asks whether Twitter can be scanned for the story.

The H11 notes are about the Activity **card** on the event and date pages, not the Activity tab. I did not redraw that card here. One thing carries over: the people icon she objects to in H11a is gone from every row in this set.

## Which mock is "D1"

D1 is the form card for the Night Story page's Story Version. Her answer, A (Short Recap), is frame `next-mocks/night-story/01-big-game-lean-A.png`: "Harbor Hawks at Los Angeles Comets". What she likes there is the **facts list**: a grey label on the left and an ink value on the right (Outcome, Type, Competition, Length), with plain lines and no decoration. Option A copies that layout into the row.

## Rules applied in every option

- **No avatars.** H4 and H5 no longer apply.
- **Header above the title, in Your Stubs form (H1, H2).** It shows the status icon, then **Attended** or **Watched** in the built `status-line` blue, then a dot, then the names in ink. It is not a sentence.
- **Names rule (New, H7).** The word "Friends" never appears.

  | People | Header reads |
  |---|---|
  | 1 | "Sam R." |
  | 2 | "Sam R. and Priya K." |
  | 3 | "Sam R., Priya K., and Jo L." |
  | 4 or more | "Sam R., Priya K., and 2 more" |

  "You" always comes first, for example "You and Sam R." or "You, Sam R., and 2 more". If a line ever runs out of room, the names cut with … but the status word never does.
- **Mixed rows** get two header lines: Attended, then Watched, each with its own names.
- **Default filter is Attended (New).** This uses the built filter sheet's Activity chips, with Attended selected when the tab opens (frame 12). The chip row shows "Attended ×", and clearing it brings Watched rows back.
- **Watched rows never show the venue.** Each option says what replaces it.
- **The verdict tile stays 40pt (H9)** wherever an option keeps it, and still opens the date page. Its colors are the built ones (Brutal is dodger with white, Spicy is paleBlue with ink, Cooked is ink with a gold number).
- **Sport line on every row (H10).** Row content is result-free and shows no crowd counts (H6).
- **The whole row is one target (H3).** The away city code is unchanged (H8). None of the example rows is an away row.

## The four options

All four are full 390×844 Activity screens. Each has a friend's Attended row (Michigan St at UCLA), a multi-friend row (Wisconsin at UCLA, 4 people), your own row (Cal Baptist at UCLA), a mixed row (Rangers at Dodgers), month bands, and a frame with the filter set to All so Watched rows show.

| | Idea | Verdict on the row | Watched row instead of venue | Row height | Frames |
|---|---|---|---|---|---|
| **A · Fact List** (lean) | Rows read like the D1 facts list. Up to 3 label and value lines: Where, Your Seat, Notes, then Review if there is room. | **None.** The verdict lives on the event and date pages. | Length (from the D1 facts) | 150 to 175pt | 02, 03 |
| **B · Their Words** | The people lead. The friend's own review note (name, then quote, 2 lines) is the row's main content. With no review, it shows one line of The Day recap. | 40pt tile kept | The first note | about 120pt | 04, 05 |
| **C · Ledger With Tags** | Your Stubs density. The venue line (plus your seat), then result-free note tags (Sold Out, Rain Delay, Extra Innings). | 40pt tile kept | Tags only | about 100pt | 06, 07 |
| **D · Day Cards** | The verdict is a day score, so it moves to the day. Each date gets a card with a header (40pt tile, "Brutal day in Los Angeles"), then event rows with no date tile and no row tile. | Once per day, in the header | Notes only. A watched-only day shows the date number, "No verdict, watched only" | 60pt header plus about 90pt per event | 08, 09 |

Hardest row (frames 10 and 11): Blue Jays at Dodgers, World Series Game 3. Four people attended (including you), one watched, plus your seat, 2 notes, a long review, and a Cooked tile. Results:

- **A** holds at 3 facts and drops the review.
- **B** cuts the quote at 2 lines but keeps "Priya K.".
- **C** shows two tags on one line.
- **D** wraps its facts line to 2 lines.

### Why A (Not confirmed — lean)

- It is the most direct answer to H7. She asked for "the actual relevant information" listed "like the D1 mockup", and A uses the D1 layout itself.
- It also tests her doubt that Attended rows need the verdict, by taking the verdict off.
- It scans like a stub: where you were, where you sat, what happened.

Costs:

- It is the tallest option: about 4 rows per screen, against 6 in C.
- It puts the most weight on data we may not have, such as seats and notes.
- If she wants the verdict kept, **D** is the most different way to keep it: once per day, where it belongs. **C** is the conservative pick.

### Tradeoffs at a glance

- **A:** richest facts and closest to D1, but tallest and has no verdict. Decision: is she happy losing the verdict from the list?
- **B:** most social and most "Activity", but depends on people writing reviews. The Day fallback needs a recap per event.
- **C:** densest and closest to Your Stubs, so the least change. Tags are a new chip shape that is not tappable.
- **D:** honest about what the verdict measures (the day), and one tile covers several events. It is a bigger structural change and has two targets per card (day header and event row).

## New items (all marked New on the frames)

- Header line (icon, status word, dot, names), the names rule, and two-line mixed rows.
- Attended as the default filter.
- A: the fact list (labels Where, Your Seat, Length, Notes, Review).
- B: the quote block (3pt pale blue left rule, name first, 2-line clamp) and The Day fallback line.
- C: note tags (12pt ink on #F2F7FC with a #9CC3E4 outline, not tappable).
- D: the day card, the day header (60pt, whole header opens the date page), event rows with a grey chevron, and the watched-only day header.
- New text sizes are all 12 to 15pt. Nothing new is under 11pt, and every new target is at least 44pt.

## Existing elements under the minimum (flagged, not changed)

- Verdict tile word under the number: 8pt.
- Date tile weekday: 9pt.
- Header Filter and Search buttons: 36 by 36.
- Filter chip row "Attended ×": 36pt tall.
- Sheet chips (All, Attended, Watched): 30pt tall.
- Hide Mine switch: 28pt tall.
- Reset and Done: 40pt tall.
- "Clear" link: 40pt wide.

## Copy and rule notes

- **Conflict:** the brief suggested a crowd figure on rows, but **H6 locks rows free of crowd counts**. No option shows a number. "Sold Out" appears as a note and is not a count, but it is still crowd information: Open Question 1.
- The D1 facts include **Outcome** (the score). Rows here stay result-free, as the brief asked: Open Question 2.
- "Night Story" (folder `night-story`) is the existing page name and contains the banned word "night". It appears only in this file, never on a frame.
- My checks found no em dashes in any frame or callout. The exceptions are the required "Not confirmed — lean" label and her verbatim H11c quote in this file.

## Open questions

1. Does "Sold Out" count as a crowd figure under H6?
2. Should A show the Outcome (score) as a fact, like D1, or stay result-free?
3. Where do the facts come from?
   - Seats: do stubs store a seat today? H11i deferred "seat for plans".
   - Notes (Sold Out, Rain Delay, Extra Innings, Overtime, Homecoming, Season Opener): this needs a per-event notes source.
   - The Day recaps: these are per date today, but B needs one per event.
   - Twitter as a story source (her D1 note) would feed B.
4. Seats are shown only on your own rows. Should friends' seats ever show, for example if they choose to share them?
5. Does she want the verdict anywhere in the list? A says no, B and C keep a tile per row, and D puts one per day.
6. A caps at 3 fact lines. Is the priority order (Where, Your Seat, Notes, Review) right?
7. D: when two events share a date, the card holds both. Should a day card cap at 3 with "See all", the same as H11d?
8. Should the default Attended filter show as a chip (as drawn), or should Attended be the quiet default with no chip?

## Files

- Annotated frames are numbered `01` to `12` in this folder:

  | Frames | Content |
  |---|---|
  | 01 | Before (built 7.1) |
  | 02, 03 | Option A |
  | 04, 05 | Option B |
  | 06, 07 | Option C |
  | 08, 09 | Option D |
  | 10, 11 | Hardest row |
  | 12 | Filter sheet |

- `board.png` puts every screen on one board.
- `raw/` holds the unannotated 390×844 screenshots (at 2x).
- `src/` contains:
  - the renderers: `render.cjs`, `a2.css` (the `a2-` prefix avoids the `.bar` class), `data.cjs`
  - the capture scripts: `frames.mjs`, `lib.mjs`
  - the callouts and their composer: `calls.cjs`, `compose.cjs`, `compose-all.cjs`
  - the checks: `audit.cjs`, `check.cjs`
  - `board.py`
  - `tmp/`, which holds the box and audit JSON

## Automated checks (`node src/check.cjs`)

Results for all 12 screens:

- **Banned words** (going, night, tonight, ~, Estimated, Open-air, "vs.", the em dash, "Friends"): none on any screen or in the callouts.
- **EXAMPLE badge:** present on every frame.
- **Dark full-width fills:** none.
- **Text under 11px:** only the existing date weekday (9) and the existing tile word (8).
- **Targets under 44:** only the existing ones listed above.
- **Clipping:** none, except:
  - the built frame 01, where the lead is cut ("watch…") and is called out
  - frame 10, where B's quote clamp is intentional and called out
- **Off-screen overflow:** none.
- **Known artifact:** the grey block that headless capture sometimes draws under scrolling menus does not appear in these frames.
