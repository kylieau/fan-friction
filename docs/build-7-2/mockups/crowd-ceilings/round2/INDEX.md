# Item 3 · "Up To" Ceilings (I1) · Round 2, Oct 30

EXAMPLE data only. Rendered in the live 7.1 clone (http://127.0.0.1:3071) at 390×844, 2x, using the app's real row classes (`day-row`, `crowd-figure`, `crowd-mark`, `day-row-venue`). Nothing in the repo was changed.

## Your Notes (Quoted)
- **I1** (you picked A, "≤14k", confirmed): "i like the idea, but it looks bulky. do you have any other formatting options or ceiling symbols?"
- **I2** (confirmed): keep the ceiling grey, with a 4.5:1 check.
- **H11c**: "i need you to be more ambitious in letting the UX/UI drive these types of mockup optionality/decisions"

## Before
`01-before-baseline.png`: the Oct 27 "≤14k" treatment. The sign is set at the number's full 13 pt and weight 800, so it's as heavy as the digits. The figure is 48 pt wide, and ≤2.5k and ≤4.2k are 52 pt, which is wider than an 18k estimate (38 pt).
Contrast: the Oct 27 mock used #7B8798, which is about 3.65:1 and fails I2's 4.5:1. Every option here uses **#5F6B7D (about 5.4:1)**.

## Options
| # | File | What changes | Width | Tradeoff |
|---|---|---|---|---|
| A | `02-option-a-light-sign.png` | ≤ drops to weight 400 and sits tight to the number | 46 pt | Same idea you liked, at half the visual weight. Still a math sign to learn. |
| B | `03-option-b-small-raised-sign.png` | ≤ at 11 pt, raised like a footnote | 45 pt | Quietest sign, but at 1x it's nearly a speck. |
| C | `04-option-c-max-word.png` | "14k max" (max at 11 pt) | 64 pt | Plainest English, but it's the bulkiest and wraps "Cal State Fullerton at UCLA". |
| D | `05-option-d-cap-glyph.png` | People icon under a grey lid, no sign | 38 pt | No width cost. The roughly 1.5 pt lid disappears at 1x. |
| E | `06-option-e-outline-icon.png` | Hollow people icon = ceiling, solid = estimate | 38 pt | Cleanest row. Solid vs. hollow at 12 pt is subtle and needs a key. |
| F | `07-option-f-cap-tick.png` | Thin overline on the number, like a bar hitting its cap | 38 pt | Least self-explaining. Can read as an overline or a typo. |
| G (ambitious) | `08-option-g-holds-on-venue-line.png` | Crowd slot stays empty. The venue line reads "Pauley Pavilion · Holds 14k" in ink2, no gold | 0 pt | Most honest (a room size isn't a crowd, see I5), and titles gain about 56 pt. You lose the scan of how big a game could get. |

Supporting frames:
- `09-compare-all.png`: one Women's Basketball row in all eight treatments, plus the 18k estimate for reference. The calendar is hidden for this compare only.
- `10-lean-day-page.png`: the lean in Saturday's Lineup. The verdict's biggest draw stays the 18k estimate.
- `11-actual-size.png`: a 1 px = 1 pt crop of every option, plus a 3x zoom. View it at 100% to judge bulk honestly. The 1x side is downsampled from the 2x render.
- `board.png`: everything on one sheet. Annotated frames have the numbered specs.

## Lean (Not confirmed)
**A, Light Sign.** It keeps the ≤ you liked and cuts its weight in half. It stays legible at 1x (B and D don't), and it doesn't add the width that C does.
Runner-up is **G**, if you'd rather ceilings stop looking like crowd figures altogether. It pairs well with I5's "a room size is not a crowd".

## Where Ceilings Show (And Don't)
- They show in Explore list rows, day page lineup rows, and the event page "Up to".
- They never show in the verdict, Up Against, or Local Competition, because ceilings never count as a crowd.
- Activity rows and Upcoming faves rows show no crowd figure today, so nothing is drawn there. That's an open question below.

## Flags
- The existing Map/List toggle (32×32 pt) and Search (36×36 pt) are under 44 pt. Flagged only, not changed.
- Times like "11:00 am" wrap to two lines in the existing time column. I used shorter example times so the wrap doesn't distract.
- Ceilings aren't built yet (M35). This is a format decision only.

## Open Questions
1. A (sign kept) or G (moved to the venue line)? G changes the meaning of the right column, so it needs your call.
2. Should past Activity rows ever show a ceiling? Today they show no crowd at all. I'd say no, since an attended game has a real crowd or nothing.
3. Should the event page "Up to 14k" line use the same light sign, or stay as words?
4. If you pick E or D, should the first appearance get a one-time key ("Hollow = room size")?

## Checks (Every Frame)
EXAMPLE badge present. No banned words or em dashes (except the "Not confirmed — lean" tag). No new text under 11 px. No new targets under 44 pt. No clipped text, no overflow, no dark fills.
