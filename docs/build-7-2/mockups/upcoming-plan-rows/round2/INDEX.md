# Item 5 · Upcoming Plan Titles (A4, A6) · Round 2, Oct 30

EXAMPLE data only. These are Your Plans rows rebuilt in the live 7.1 clone (3071) with the real classes (`follow-row`, `follow-lead`, `follow-title`, `title-label-line label-sport`, `follow-facts`, `log-score`). They're shown at 390×844, 2x. The plans window is always 3.5 rows, measured (item 16). Nothing in the repo changed.

## Your Notes (Quoted)
- **A4**: "this actually feels repetitive to me under Your Plans when it lists the favorite team/artist next to \"attending\" .. i wonder if the solution is actually to keep the abbreviated name/sport (for colleges) in the title and remove from the blue line..? what are your thoughts. also i dont think we need the today line above \"your faves\"???"
- **A6** (shorter leads, "Attending · Women's Basketball"): "agree in a vacuum, but will have to align with answers in other questions"
- **B3**: you changed the plan lead to "UCLA FB".
- **H11c**: "i need you to be more ambitious in letting the UX/UI drive these types of mockup optionality/decisions"

## Rules Checked
- `SPORT_CODES` in `src/lib/eventTitle.ts` include FB, MBB, WBB, BB, VB, and SOC.
- M9/M38: titles never carry WBB, and every college game gets a sport label line on every surface, Upcoming included.
- Titles use "Away at Home", with "vs." only at neutral sites.
- Item 11: the lead is "Attending · {fave short name}" when the plan is linked to a fave.

## Before
`01-before-built.png` shows the build as it is.
- **The repeat.** "Attending · UCLA Football" sits over "Nevada at UCLA" and the "Football" label line, so UCLA and Football each show twice.
- **Row height.** College rows are 4 lines (90 pt). Pro rows are 72 pt.
- **Today line.** "Today · Fri, Oct 30" sits between the plans box and Your Faves.

## Options
| # | File | Shape | Rows | Tradeoff |
|---|---|---|---|---|
| A | `02-option-a-verb-only.png` | Lead is just "Attending", and the label line stays | 90 / 72 pt | Fully within the rules and the smallest change. Rows stay tall and a lone blue word floats. |
| B (your idea) | `03-option-b-short-name-in-title.png` | "Arizona at UCLA MBB", verb-only lead, no label line | 72 pt | Very compact. Overrides M9/M38 (no WBB in titles, sport on a label line), and Upcoming titles would differ from Explore and the event page. Codes like WBB and VB aren't obvious to everyone. |
| C | `04-option-c-sport-in-lead.png` | "Attending · Men's Basketball" for colleges, "Watching" for pros. Titles as in Explore, no label line | 72 pt | Matches the A6 shape you agreed with. No codes, and titles stay consistent (M9 holds). It does move the sport off the grey label line, which bends M38 for plan rows only. |
| D (ambitious) | `05-option-d-status-on-date-tile.png` | No lead line. A 13 pt status mark rides on the date tile, and the sport joins the facts line | 54 pt | Densest. About 5 plans fit in today's 311 pt window. Status is icon only (VoiceOver still reads it), and the plain word "Attending" leaves the list. |
| E (ambitious) | `06-option-e-team-groups.png` | A header per fave, with opponent-only titles ("Nevada", "at USC") | 72 pt + 31 pt headers | No repeat at all, since the team is said once. It breaks date order (the next plan isn't always on top), bends Away at Home, and needs an "Other Plans" group. |

Today line:
- `07-lean-today-line-removed.png` is lean C with the Today line removed.
- `08-today-before-after.png` puts the seam side by side. Your Faves moves up 62 pt.

`board.png` has everything on one sheet.

## Lean (Not confirmed)
**C, Sport In The Lead, plus removing the Today line.**
- It answers the repeat and lines up with your A6 answer.
- It keeps titles identical to Explore.
- It doesn't introduce codes.
- It evens every row at 72 pt.

I'd pick it over your B idea. B gets the same compactness but makes Upcoming the only place titles carry codes, and M9 was locked to keep WBB out of titles. If you want the boldest version, D is the one worth a second look.

On the Today line, I agree it can go. The date tiles already carry the when, and Your Faves gets 62 pt back.

## Flags
- **Existing text under 11 px.** The date tile weekday is 9 px and the verdict word (Spicy) is 8 px. Flagged only.
- **Item 16 swipe zone.** Item 16 made the 22 pt Today divider part of the swipe-outside-the-box zone. Removing it hands that zone to the Your Faves band (40 pt).
- **B3 "UCLA FB" vs. A6 "Attending · Women's Basketball".** These conflict. C follows A6 (spelled out), and B follows B3 (codes). Pick one so the lead reads the same everywhere.

## Open Questions
1. C (spelled-out sport in the lead) or B (code in the title)? This also settles B3 vs. A6.
2. Should the Your Faves rows below get the same rule? Today they lead with the fave name and keep the label line, so they'd still differ from the plan rows.
3. Is it OK for plan rows to drop the grey label line (C and D bend M38)?
4. With the Today line gone, does the Your Faves band carry the item 16 swipe zone, or should a small gap stay?
5. For D, should the date tile mark also show on Your Faves rows, replacing the mark after the title?

## Checks (Every Frame)
EXAMPLE badge present. No banned words or em dashes (except the "Not confirmed — lean" tag). No new text under 11 px. No new targets under 44 pt. No clipped text, no overflow, no dark fills.
