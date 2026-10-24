# Season tickets mockups (build 7.1): index

## r3 (2026-10-23)

Round 3 after Kylie's feedback on the r2 Your plans window, plus two steering notes (swipe outside the box is the primary path; 3.5 rows). Same rules: EXAMPLE data, live app shell at 390×844, light-blue bands, no dark bars. Every r3 frame uses the 3.5-row window, the 44pt band strip and the spaced Today divider. Banned-copy, clipping, small-font and dark-bar checks were run, and every PNG was opened. Generators: `../src/s-r3.cjs`, `../src/build-r3.cjs` (phones, 30, 32), `../src/build-r3z.cjs` (34), `../src/build-r3b-29.cjs` / `-31` / `-33` (boards).

| # | File | Caption |
|---|---|---|
| 29 | 29-plans-window-3-5-rows-board.png | **Board, Secondary path:** the 3.5-row window (240pt here, since rows are about 69pt) at rest, scrolled inside, and handing off to the page through normal scroll chaining. Includes the 3.5-row reasoning. |
| 30 | 30-faves-sticky-end-state.png | End state: Your plans has scrolled fully off. YOUR FAVES is pinned at the top of the content area with JULY 2027 pinned under it. The search/filter header is static in the live app, so the band pins at the top of the scroll area. |
| 31 | 31-faves-overlap-A-vs-B.png | **Board:** the same pinned YOUR FAVES data with (A) a small filled blue plan mark beside the title (Not confirmed — lean) vs (B) no mark. 7 of the 11 rows in view are also in Your plans. |
| 32 | 32-faves-overlap-closeup.png | 3x close-up of A: ticket marks on Angels at Dodgers (Sun 18, Mon 19), TV on Angel City at Wave, bookmark on Galaxy at LAFC, and plain rows for the faves with no plan. |
| 33 | 33-swipe-outside-box-primary-path.png | **Board, Primary path:** (1) touch on the Today divider with a down arrow and the caption "Swipe outside the box moves the page", (2) the page partway scrolled with the box sliding off and its list still at the first row, (3) the box gone and YOUR FAVES pinned. |
| 34 | 34-touch-zones-closeup.png | 3x close-up of the at-rest screen with a legend. Green hatching marks where a swipe moves the page (header, 44pt band strip, Today divider, YOUR FAVES and below); grey with a dashed edge marks where a swipe scrolls the box (the window only). |

### Leans (all Not confirmed — lean)
1. **Window height: 3.5 rows.** That is 3 full rows plus the top half of the 4th under the fade, 240pt at our ~69pt rows. The cut-off row is the clearest "this scrolls" cue. Compared with 5 rows it frees about 90–100pt of page, so the first YOUR FAVES rows sit above the fold as an obvious swipe target outside the box. A fade on the 4th row is the minimum change if she wants it slightly taller.
2. **Faves overlap: A.** Reuse the existing ticket/TV/bookmark toggle icons, filled, small (13pt) and blue, beside the title. It explains the duplicate and lets her scan which faves she has committed to at almost no added noise. B reads as a bug once Your plans has scrolled off. The overlap stays either way.
3. **Touch area around the full-width box:**
   - A band strip at least 44pt tall, holding the "Your plans" title and count.
   - A visible Today divider under the box with about 22pt of padding above and below.
   - **No side gutter**, because it would narrow rows and the inner-vs-page targets would be hard to tell apart at the edges.
4. **Scroll paths.**
   - Primary (33): a swipe that starts outside the box scrolls the page, so she never has to scroll through all her plans to get past it.
   - Secondary (29): a swipe inside the box scrolls the box, then hands off to the page once the list ends. This uses normal scroll chaining, not overscroll-behavior: contain.

### Superseded r2 files
- ~~23~~ → 29. ~~24, 25, 26~~ (5-row states) → 29 (frames a–c). ~~27~~ (5-row cue close-up) → 29 + 34.
- 28 (few plans: the box fits with no scroll) still stands. r3 band and Today spacing apply.
- 20-r2 card stands. Its window height now follows r3 (3.5 rows).

### Remaining open items
- None for Kylie beyond confirming the four leans above.

## r2 (2026-10-23)

Round 2 after Kylie's review (relayed via Push Pilot). r1 files are kept; superseded ones are marked below. Same rules: EXAMPLE data, live app shell at 390×844, light-blue bands, no dark bars. Banned-copy, clipping, small-font and dark-bar checks were run, and every PNG was opened. Generators: `../src/build-r2.cjs` (phones) and `../src/build-r2b.cjs` (boards).

| # | File | Caption |
|---|---|---|
| 01-r2 | 01-partial-plans-A-vs-B-r2.png | A vs B board with B marked "Picked · LOCKED". A is dimmed as not picked. Footer: Full season adds every home game; Partial starts empty; no tick chips in v1. |
| ~~23~~ | ~~23-upcoming-plans-window-board.png~~ | *Superseded by 29 (r3).* **Board:** the Your plans window (a) at rest, (b) scrolled inside, (c) hand-off to the page, side by side, with the scroll-chaining and tradeoff notes. |
| ~~24~~ | ~~24-upcoming-plans-window-rest.png~~ | *Superseded by 29 (a) (r3).* (a) Top of Upcoming: a light-blue "Your plans · 41" band and a window about 5 rows tall. The 5th row fades out and a thin inner scroll indicator sits at the top. |
| ~~25~~ | ~~25-upcoming-plans-window-scrolled.png~~ | *Superseded by 29 (b) (r3).* (b) Partway through her plans (early August): a top fade appears too, the indicator has moved, and the band stays fixed at the top of the box. |
| ~~26~~ | ~~26-upcoming-plans-window-handoff.png~~ | *Superseded by 29 (c) (r3).* (c) The inner list reaches "End of your plans" and the page takes over: the box scrolls off, and Today, YOUR FAVES and July 2027 move up. Annotated with the scroll-chaining line and the tradeoff/mitigation line. |
| ~~27~~ | ~~27-plans-window-cue-closeup.png~~ | *Superseded by 29 + 34 (r3).* (d) 3x close-up of the cues: "Your plans · 41" count, inner scroll indicator, bottom fade on the 5th row. |
| 28 | 28-plans-window-few-plans.png | (e) 4 plans: the box shrinks to fit, with no inner scroll, fade, indicator or count. |
| 20-r2 | 20-playoff-prompt-and-two-teams-r2.png | Playoff card (locked into 7.1, as in 20) above the Your plans window: Dodgers and Rams season games mixed in date order, "Your plans · 15", no "N more" rows. Set on Mon, Sep 13, 2027. |
| 12-r2 | 12-remove-game-sheet-r2.png | Remove sheet: choosing the Sold tag (other options Gave away / Skipped) reveals an optional "Sold for $" field (85 entered) and the line "Sale amounts never count in Spend." |
| 13-r2 | 13-removed-game-greyed-r2.png | Greyed game reads "Sold · $85" in neutral ink, "Not in your plans", with Re-add. Note: "Sale amounts never count in Spend." |
| 14-r2 | 14-removed-and-edited-closeup-r2.png | 3x close-up of the "Sold · $85" greyed row with Re-add, plus the Edited row. |

### Locked picks
1. **Partial plans: B.** **LOCKED (Kylie, 2026-10-23)**. The switch asks Full season or Partial plan. Full season adds every home game as Attending; Partial starts with an empty list. No "Tick weekends / weekdays" chips in v1.
2. **Upcoming: none of options 1–3.** **LOCKED (Kylie, 2026-10-23)**. Your plans is a fixed-height window about 5 rows tall that scrolls inside itself, season games included. When the page scrolls, the whole box scrolls off like any other section. No group row, no "N more" row, no show/hide switch. When the inner list ends, further swipes scroll the page (scroll chaining).
3. **Playoff "Add to plans?" card** is in 7.1 as drawn in 20 / 20-r2. **LOCKED (Kylie, 2026-10-23)**.
4. **Removed games:** an optional Sold / Gave away / Skipped tag. Choosing Sold reveals an optional "Sold for" amount, shown ONLY on the greyed game ("Sold · $85") and never counted in Spend. **LOCKED (Kylie, 2026-10-23)**.
5. **Builder's calls stand as in r1:** default-change prompt, turn-off confirmation, PSLs and donations, multiple teams, and Sidearm-only teams (decisions 5–9 below).

### Remaining open items
- **None need Kylie.**
- Small leans for the builder, drawn in r2: the subtle count in the band ("Your plans · 41"), the "End of your plans" footer, slim month labels inside the window when the month changes, and hiding the count when the box fits (5 or fewer plans).
- Engineering: building the whole season beyond the ~120-day catalog window (see the end of this file).

### Superseded r1 files
- ~~01~~ → 01-r2. ~~07, 08, 09, 10, 11~~ (Upcoming options 1–3) → 23–28. ~~12, 13, 14~~ → 12-r2, 13-r2, 14-r2. ~~20~~ → 20-r2. ~~21~~ retired, merged into 12-r2 / 13-r2. ~~19~~ is partly superseded: its playoff and sale-amount panels are now decided; its Sidearm and PSL panels still stand.

---

## r1 (2026-10-22)

Every image uses **EXAMPLE data**: a made-up LA Dodgers 2027 home schedule (84 games incl. 3 preseason), Sec 48 · Row K · Seat 7, $62 per seat per game, $30 parking. Numbers don't have to match real schedules. Phone screens are drawn on the live app shell (main-clone at http://127.0.0.1:3011, HEAD 5a62d41): the tab bar, team header, Back link and Upcoming title row are real; the season-ticket UI is injected for the screenshot. App source is untouched. "Your plans" / "YOUR FAVES" are drawn as the 7.1 light-blue bands. Generators: `../src/` (`build-a.cjs` phones, `build-b1.cjs` / `build-b2.cjs` boards).

Locked by Kylie and drawn as given: per-team toggle adds every home game as Attending; preseason included by default; playoffs not added automatically; whole season added at once (including games past the 120-day catalog window); one default seat + price per seat per game (+ optional parking) prefill every game and carry to the stub; single games can be removed.

| # | File | Caption |
|---|---|---|
| ~~01~~ | ~~01-partial-plans-A-vs-B.png~~ | *Superseded by 01-r2.* **Comparison board.** A: start with all 84, remove what you don't have (bulk Untick chips). B: ask Full season / Partial plan; Partial starts with 0, add what you have. Second row: the same 20-game plan end state (A = 64 unticks, B = 20 taps). |
| 02 | 02-team-page-toggle.png | Team page with the new Season tickets switch (off) under Follow. |
| 03 | 03-team-toggle-closeup.png | Close-up (3x) of the Season tickets switch row. |
| 04 | 04-setup-sheet.png | Setup sheet: seat (section / row / seat), price per seat per game (your ticket only), optional parking per game, Include preseason (on), playoffs note, "Add 84 games as Attending". |
| 05 | 05-setup-season-total-helper.png | Setup sheet with the "Paid for the season? Enter total ÷ games" helper open: $5,208 ÷ 84 = $62.00, "Use $62". |
| 06 | 06-season-games-page.png | Season tickets page (from the team page): defaults card, past games (43 stubs), upcoming games by month with seat and price on each row. |
| ~~07~~ | ~~07-upcoming-options.png~~ | *Superseded by 23–28.* **Upcoming board, 3 options:** 1 one group row (collapsed and opened), 2 next 2 games + "34 more Dodgers season games" (lean), 3 a Season games switch on the band. |
| ~~08~~ | ~~08-upcoming-option-2-lean-next-games.png~~ | *Superseded by 23–28.* Option 2 (lean) full size: next 2 season games as normal plan rows, then one "34 more" row. |
| ~~09~~ | ~~09-upcoming-option-1-group-row.png~~ | *Superseded by 23–28.* Option 1: one collapsed "Dodgers season tickets · Next: Sun, Jul 11" group row. |
| ~~10~~ | ~~10-upcoming-option-1-expanded.png~~ | *Superseded by 23–28.* Option 1 opened: next 3 games inline + "33 more · see all games". |
| ~~11~~ | ~~11-upcoming-option-3-switch.png~~ | *Superseded by 23–28.* Option 3: Season games switch off; "36 Dodgers season games hidden · Show". |
| ~~12~~ | ~~12-remove-game-sheet.png~~ | *Superseded by 12-r2.* Remove one game: optional Sold / Gave away / Skipped tag, "Remove from plans" / "Keep this game". |
| ~~13~~ | ~~13-removed-game-greyed.png~~ | *Superseded by 13-r2.* Result: Jul 12 stays in the list, greyed, tagged Sold, "Not in your plans", one-tap Re-add. Jul 17 shows an Edited mark. |
| ~~14~~ | ~~14-removed-and-edited-closeup.png~~ | *Superseded by 14-r2.* Close-up (3x) of the greyed Sold row with Re-add and the Edited row ($85). |
| 15 | 15-edit-one-game.png | Edit one game: price $62 → $85 for this game only, Edited mark, "Reset to $62". |
| 16 | 16-default-change-apply-prompt.png | Default price changed $62 → $68: "Apply to games not yet edited?" with Apply to 34 unedited / Apply to all 36 upcoming (replaces 2 edits) / Cancel. |
| 17 | 17-team-page-toggle-on.png | Team page with the switch on: "On · 36 upcoming games · 43 stubs", defaults line, "Games & settings ›". |
| 18 | 18-turn-off-confirm.png | Turning it off: "Removes 36 upcoming games. Your 43 past stubs stay, with their seats and prices." |
| 19 | 19-open-questions.png | **Open-questions board:** playoff "Add to plans?" card, two season-ticket teams, optional sale amount (alternative), Sidearm-only fallback, PSLs. |
| ~~20~~ | ~~20-playoff-prompt-and-two-teams.png~~ | *Superseded by 20-r2.* Playoff home game card on Upcoming (Add as Attending / Not this one) above plans with two teams' "N more" rows. |
| ~~21~~ | ~~21-sold-amount-alternative.png~~ | *Retired: merged into 12-r2 / 13-r2 (the Sold-for amount is now locked).* Alternative (not the lean): Sold with an optional "Sold for $85" field. |
| 22 | 22-sidearm-team-fallback.png | Sidearm-only college team (LMU Men's Basketball): switch shown disabled with the reason; single games still addable. |

## Decisions for Kylie (r1; status updated 2026-10-23)

1. **Partial plans: A or B** (01). → **Resolved: B, no chips. LOCKED (Kylie, 2026-10-23).** A: every game pre-ticked, bulk "Untick weekdays / weekends / preseason" chips + single unticks. B: the switch first asks Full season or Partial plan; Partial starts with an empty list and she taps the games she owns. Full season in B is exactly A's list. **Lean: B**, optionally with "Tick weekends / Tick weekdays" chips in B's Partial list. A 20-game holder does 20 taps instead of 64 unticks; a full-season holder answers one extra question. *Not confirmed — lean.*
2. **Season games on Upcoming** (07–11). → **Resolved: none of 1–3; scrolling Your plans window (23–28). LOCKED (Kylie, 2026-10-23).** 1: one collapsed group row; 2: next 2 games as rows + "N more ›"; 3: a Season games switch on the band. **Lean: 2**, because the next game always shows in full. *Not confirmed — lean.*
3. **Playoff "Add to plans?" prompt** (19, 20). → **Resolved: in 7.1 as in 20. LOCKED (Kylie, 2026-10-23).** Options: leave out of v1, or show one card on Upcoming when a home playoff game is set (Add as Attending / Not this one; seat prefilled, no price). **Lean: show the card in v1 if cheap, otherwise next build.** *Not confirmed — lean.*
4. **Sale amount when she sells a game** (12, 21). → **Resolved: tag plus optional Sold-for amount, greyed game only, never in Spend. LOCKED (Kylie, 2026-10-23).** Options: tag only (Sold / Gave away / Skipped), or tag plus an optional "Sold for" amount. **Lean: tag only in v1.** The app logs what you paid, not profit. *Not confirmed — lean.*
5. **Changing a default** (16). Options: apply to unedited games only, or to all upcoming games; past stubs never change either way. **Lean: offer both, with "unedited only" as the first button.** *Not confirmed — lean.*
6. **Turning the switch off** (18). Options: remove all upcoming season games (past stubs stay), or also offer "Keep them as single plans". **Lean: remove only, with one confirmation that shows the counts.** *Not confirmed — lean.*
7. **PSLs and college donations** (19). Options: ignore, or add a one-time cost field in setup. **Lean: leave out of v1; she can add one "Other" cost on any game.** *Not confirmed — lean.*
8. **More than one season-ticket team** (19, 20). Options: no limit, or one team. **Lean: no limit; each team gets its own switch, its own season page and its own "N more" row on Upcoming.** *Not confirmed — lean.*
9. **Sidearm-only college teams** (22). Options: hide the switch, or show it disabled with the reason. **Lean: show it disabled with the reason.** *Not confirmed — lean.*

**r1 said these needed Kylie:** 1–4, all resolved 2026-10-23. 5–9 stay as builder's calls on the leans.

Also for the builder (an engineering choice, not drawn): the locked "whole season at once" means plans are needed for `team_schedules` games beyond the ~120-day catalog window. The research brief lists three approaches: (1) create plans from `TeamGame` with the future catalog `eventId` format, (2) store the setting and top up as games enter the window, (3) raise `DAYS_AHEAD` for home teams. The mocks assume the user sees all games at once, whatever approach is used. Rescheduled or cancelled games need handling either way.
