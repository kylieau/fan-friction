# Fan/Friction event labels, round 3 (hand-off note)

Saved Oct 15, 2026 as pasted by Kylie, with the board beside it (`labels-r3.png`). Paths in the note refer to Mock Mosaic's workspace; the board is this folder's `labels-r3.png`.

Board: `/workspace/ff-gap-review/mosaic/labels/labels-r3.png` (1600 px wide). Built by swapping text in the live app (main 635a164f, port 3101). Nothing in the app code changed. All numbers, times and dates on the board are EXAMPLE data.

## 1. The system in one paragraph

The matchup is always the bold title, written Away at Home ("vs." only at neutral sites; never the word "night", never "going"). Every designation lives in a quiet slot next to the title: on its own line in lists (Explore list, date page lineup, team page) and after the title on Local Competition bars and map chips. Regular-season games have no label. One label per event, priority stage > competition > game type > occasion. Playoff and stage labels are dark text, weight 500. Low-stakes labels (Preseason, Exhibition, Friendly, Scrimmage, Qualifier) and occasion labels (Home opener, Season finale, regular season only) are grey #5F6670, regular weight, 12 px. "if necessary" is the locked wording for a game that may not happen. Rivalry and derby are not shown. Placement rule: **inline designation = parentheses; own-line designation = no parentheses** (exception: "if necessary" is always inside parentheses; inline it joins the stage in one set, "(NLCS G6, if necessary)"). No dot separators in any label.

## 2. Kylie's explicit tweaks (intentional)

These are Kylie's decisions, made 2026-10-15. They are deliberate. Please do not "fix" them back to the r2 behavior.

1. **"If necessary" is the locked wording (not "if needed"), in parentheses, lowercase inside.**
   - Changed vs r2: r2 said "NLCS Game 6 · if needed". Now: title "Brewers at Dodgers", line below "NLCS Game 6 (if necessary)", quiet grey regular like other low-stakes parts. The r2 proposal "no chip until confirmed" is **removed**. Per the earlier locked rule (2026-10-09) if-necessary map chips are not faded and stay unchanged: the chip shows the usual playoff chip text and "if necessary" is the first part dropped when there is no room.
   - Why: the wording is hers, and the 2026-10-09 chip rule stands.
2. **Own-line low-stakes labels have no parentheses (she picked A: decided).**
   - Changed vs r2: "(Preseason)" on its own line is now "Preseason", small grey regular (Explore list, team page). Parentheses stay where the label is inline after a name (bars, chips). The board's A/B (no parentheses vs parentheses) is marked decided: A.
   - Why: on its own line, small grey text already reads as a note. Inline, without parentheses it would read as part of the name ("Nuggets at Clippers Preseason").
3. **Hanging indent: venue and designation start at the same left edge as the title text.**
   - Changed vs r2: r2 indented the designation but the venue started under the icon. Now both get a 23 px left indent (18 px icon + 5 px margin) on the Explore list and on the date page lineup ("This day in Los Angeles"), which uses the same row. Board shows before/after.
   - Why: title text, designation and venue should share one vertical edge.
4. **Local Competition bars: name, designation and crowd are one tight group.**
   - Changed vs r2: 6 px gaps, left-aligned over the bar, no stretching.
   - Cause in the live CSS: `.bar-name` is `display:inline-flex; gap:8px`, so every child (icon, title, designation, crowd) sits 8 px from the next, and my r2 mock added a 6 px margin on the designation (about 14 px total). `.bar-label` is `display:flex; justify-content:space-between` with `.bar-name` as its only child, so it does not spread today but would if a second child were added. Changed only through the mock injection (`.bar-name{gap:6px}`, no margins).
   - If a long designation cannot fit on the line (for example a long stage plus "if necessary"), the mock drops it under the title, indented under the title text, with the crowd staying beside the title.
5. **Bars show the full event title; designation in parentheses; no dot separators.**
   - Changed vs r2: bars read "Brewers at Dodgers (NLCS G3)", "Nuggets at Clippers (Preseason)", "Timbers at Galaxy" (not the team-only form). Chips drop the dot: "Dodgers (NLCS G3)", not "LAD · NLCS G3". Playoff designations on their own line stay dark medium without parentheses, as in r2.
   - Chips (accepted as drawn; she said everything looks good): a chip is a fixed ~112 px box, so the full title does not go on it. (a) is primary and (b) is the one-line fallback. (a) nickname + parenthesized designation, wrapping before the "(" if needed (never mid-word), for example "Dodgers (NLCS G3)" on one line and "Timberwolves" / "(Finals G7)" on two. (b) one-line fallback "LAD (NLCS G3)", used when (a) cannot fit.
6. **Kept from r2:** Game 7 row ("Thunder at Timberwolves" / "Finals Game 7", dark medium), regular games unlabeled, 12 px list suffix, grey #5F6670 (5.80:1).
7. **Inline stage + "if necessary" share ONE set of parentheses, with a comma.**
   - Changed vs the earlier r3 draft: on Local Competition bars, when both apply, the form is "(NLCS G6, if necessary)", never two separate parentheses (the draft had "(NLCS G6) (if necessary)"). Own-line forms are unchanged: "NLCS Game 6 (if necessary)" on the Explore list, date page lineup and team page, because the stage text is outside the parentheses there. Only inline forms merge. On chips the same merged form is the full text, and ", if necessary" drops first, leaving the usual "Dodgers (NLCS G6)".
   - Why: two adjacent parentheses read as clutter. It also fits on one bar line now (317 of 326 px in the mock), so the drop-under-the-title fallback is no longer needed there.
8. **Preseason on its own line: no parentheses (A).** Kylie picked A, so the board's Preseason A/B is closed, not open. Parentheses stay only inline (bars, chips).
9. **"Cup Final" is approved** as the chip form of "Leagues Cup Final". It is no longer proposed or open.

## 3. Final rules table

| Label type | Full (own line: lists, team page) | Short (inline: bars) | Chip | Style |
|---|---|---|---|---|
| Playoff / stage | NLCS Game 3 | Brewers at Dodgers (NLCS G3) | (a) Dodgers (NLCS G3); (b) LAD (NLCS G3) | Own line: dark, 500, no parentheses. Inline: dark 500 in parentheses. 12 px (11 px chips). Sticky on chips. |
| Finals | Finals Game 7 | Thunder at Timberwolves (Finals G7) | (a) Timberwolves (Finals G7), 2 lines; (b) MIN (Finals G7) | Same as playoff |
| Semifinal rounds | West Semis Game 7 | (West Semis G7) | (a) Nuggets (WS G7); (b) DEN (WS G7) | Same as playoff. Avoid obscure forms like WCSF. |
| Competition + stage | Leagues Cup Final | (Leagues Cup Final) | (Cup Final) (approved) | Same as playoff, one combined label |
| Low-stakes (Preseason, Exhibition, Friendly, Scrimmage, Qualifier) | Preseason (decided: no parentheses) | (Preseason) | dropped first; chip shows the name only | Grey #5F6670, regular 400, 12 px. Parentheses only inline. |
| Occasion (regular season only) | Home opener | (Home opener) | dropped | Same as low-stakes. Season finale works the same way. |
| Regular season | none | none | none | Matchup in the bold title only |
| If necessary (locked wording) | NLCS Game 6 (if necessary) | (NLCS G6, if necessary) | usual playoff chip, not faded; ", if necessary" drops first | Grey, regular 400, lowercase. Own line: "(if necessary)" after the stage text. Inline: one set of parentheses with a comma, never two. |
| Team page schedule | vs. Nuggets (home) / at Nuggets (away), then the label on its own line | n/a | n/a | Same styles, no parentheses; team-page exception to Away at Home |

Chip fit rule: rule of thumb 16 characters including the label. Playoff label is sticky; the team name shortens first by authored forms (full name, nickname, 3-letter code), never mid-word. The low-stakes label drops first (the name is not abbreviated for it), so a preseason chip shows just "Clippers". The "if necessary" part drops before anything else. "Dodgers (NLCS G3)" is 17 characters but fits one line because the chip font is condensed. Sizes: list suffix 12 px (reviewer alternative: 13 px, not mocked), chips 11 px.

## 4. Open questions

None are open from Kylie's side. Resolved on 2026-10-15: "Cup Final" chip form (approved, item 9), Preseason own-line parentheses (A, item 8), chip design (accepted as drawn: (a) primary, (b) one-line fallback). Mock Mosaic leans on the remaining small choices, in case Claude wants to flag them:

- **If-necessary text color:** all grey on its own line and on bars (kept from r2); the chip stays the normal playoff chip.
- **Inline playoff designation style:** dark medium inside parentheses, so a Game 7 still reads as high stakes.

## 5. Font note

The app ships bold only. The regular (400) and medium (500) weights on the board are previewed with locally installed Manrope and Barlow Semi Condensed through a local @font-face, so the app needs real 400 and 500 weight files loaded to match. Sizes are CSS px in the app's 390 px layout (the spec said pt): list suffix 12 px, chips 11 px.

## 6. Accessibility notes

- Grey #5F6670 on white is 5.80:1 (needs 4.5:1). Dark text #0F1B2D on white is 17.28:1.
- Parentheses are visual only. Give each row and chip one composed VoiceOver label instead of reading the pieces, for example: "Brewers at Dodgers, NLCS Game 3, 7 PM, Dodger Stadium, about 55,000". For a game that may not happen: "Brewers at Dodgers, NLCS Game 6, if necessary, 7 PM, Dodger Stadium, about 55,000". Use full forms in the spoken label (no "G3", no "WS").
- Do not rely on color alone: the dark vs grey split is backed by the wording (parentheses, "if necessary").

## 7. Edge cases not yet designed

- A mapping layer for "night" wording in source data (for example "Opening Night" to "Home opener"), so the word "night" never reaches a label.
- Multi-show runs (several dates of one show or series) and how they get a label.
- Doubleheaders (two games, one date and venue): how the two rows and chips are told apart.
- Team page "vs." / "at" for neutral-site games and for the other team's perspective.
- The date page lineup also shows "+ Stub it" and, in the live app, a MAJOR badge on some rows. The board leaves the button as is and shows no badge on any row; the badge needs a rule across all rows or none.
- Chips with three name lines (a very long nickname that wraps twice) are not handled; use (b).
- Bars where a stage plus "if necessary" is too long for one line: the mock drops the designation under the title, indented under the title text, but no real case needs it yet.

## Files

- Board: `labels-r3.png`; r2 is untouched (`labels-r2.png`).
- Sources: `src/shoot-labels-r3.cjs` (captures), `src/board-r3.cjs` and `src/board-r3.html` (board), crops in `caps/r3-*.png`.
