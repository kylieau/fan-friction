# 29 · Calendar Tiles by Verdict, Faded Past, Sunday First

Explore List mini calendar (`WeekCalendar.tsx`). Live shell 127.0.0.1:3011 at 390x844 with EXAMPLE markup injected using the production class names. Nothing in the repo was edited. Board: `board.png`.

## Frames

| Frame | What it shows |
|---|---|
| `29-a-current-markup.png` | The current shot (`calendar-cooked.png`) with callouts: 1 Monday first; 2 past days fade the whole tile, so the numbers go grey and all fail AA; 3 Oct 24 is 8.3 Cooked (ink + gold pill) but the tile is Brutal `--dodger`; 4 today ring (kept); 5 rows are 43pt, 1pt under 44. |
| `29-b-proposed.png` | **Lean.** 390 wide in the live shell. S M T W T F S. Every verdict appears in both past and ahead days. Today (Fri Oct 23, Brutal) keeps the existing ring. A legend row sits under the grid: for each verdict a full swatch, then a faded one, then the label. The caption reads "Each pair: Today and Ahead · Past". Rows are 44pt. |
| `29-c-alt-uniform-tint.png` | Alt: one 50% tint for every verdict, with an ink number on all of them. |
| `29-d-closeup-lean.png` | The lean calendar close up (dsf 3), legend included. |
| `29-e-closeup-same-data-shipped-styles.png` | The same EXAMPLE days in today's shipped CSS (opacity .62, Cooked on `--dodger`), for a side-by-side comparison. |
| `29-f-contrast.png` | Every tile's day number contrast: full, lean past, alt past, shipped past. |

EXAMPLE data badge (light-blue: `#DAEBFE` fill, dashed `--dodger`) on b, c, d, e and on the board.

## Tokens (read from the code, nothing invented)

These come from `src/config/theme.ts`, which `applyTheme` turns into CSS variables, and from the matching rules `.log-score.*` (styles.css 3587–3610) and `.cal-day.*` (1363–1386).

| Verdict | Fill | Number |
|---|---|---|
| Chill | `#e4eef6` (literal in CSS) | `--ink` #0F1B2D |
| Mild | `--water` #D5E5F3 | `--ink` |
| Spicy | `--paleBlue` #9CC3E4 | `--ink` |
| Brutal | `--dodger` #005A9C | `--card` #FFFFFF |
| Cooked | `--ink` #0F1B2D | `--gold` #FFD100 |

The calendar today follows these colors for Chill to Brutal, with two exceptions:
- `.week-calendar-day.band-cooked` is grouped with Brutal (styles.css 7275–7279; the comment at WeekCalendar.tsx:35 reads "Cooked takes Brutal's darkest blue").
- Past days get `opacity: .62` on the whole number square (styles.css 8537).

Gold appears only on Cooked tiles. Everywhere else it stays the crowd color.

## Fade Method (Lean)

**The fill fades and the number does not.** Past tiles are drawn as `color-mix(in srgb, <verdict fill> 55%, var(--card))`, with the number at full strength in `--ink`. The `opacity` rule is dropped.

- **Brutal past** switches its number from white to ink, because white on the 55% tint is only 2.66:1. The ink number gets 6.50:1.
- **Cooked past** fades less, to 75% ink (#4B5462), so that its own gold number still passes at 5.24:1. Cooked keeps its ink + gold identity in the past.
- **Today and ahead** stay at full token strength. Today keeps the existing ring: `0 0 0 2px var(--card), 0 0 0 4px var(--dodger)` on dark tiles and an inset `--dodger` ring on light ones.
- Rendered pixels in 29-d match the computed hexes exactly. For example, past Brutal is #73A4C9 and past Cooked is #4B5462.

**Sunday first:** `WEEKDAYS` becomes `['S','M','T','W','T','F','S']`, and the rows are built from Sundays. In the code, `mondays` / `weekOf` (data/cityList) and `leadIndex` would need a Sunday version. That is a data-layer change, not just CSS. The list's "This Week's Lineup" week should move with it, so the two agree on where a week starts.

**Tap targets:** the button is the full column, 49 x 43pt in the live shell (61 x 43pt in the current shot). `--cal-row: 43px` (styles.css 8435) is 1pt under 44, so the lean sets it to 44px. The viewport grows from 150.5 to 154pt.

## Contrast (day number vs. tile, WCAG AA 4.5:1)

| Verdict | Full (fill / number) | Full | Past, lean (fill / number) | Past, lean | Past, alt 50% all-ink | Past, shipped (opacity .62) |
|---|---|---|---|---|---|---|
| Chill | #E4EEF6 / #0F1B2D | 14.70:1 pass | #F0F6FA / #0F1B2D | 15.83:1 pass | #F2F6FB / #0F1B2D 15.96:1 pass | #EEF4F9 / #6A727D 4.42:1 **FAIL** |
| Mild | #D5E5F3 / #0F1B2D | 13.44:1 pass | #E8F1F8 / #0F1B2D | 15.09:1 pass | #EAF2F9 / #0F1B2D 15.28:1 pass | #E5EFF8 / #6A727D 4.19:1 **FAIL** |
| Spicy | #9CC3E4 / #0F1B2D | 9.33:1 pass | #C9DEF0 / #0F1B2D | 12.49:1 pass | #CEE1F2 / #0F1B2D 12.89:1 pass | #C2DAEE / #6A727D 3.38:1 **FAIL** |
| Brutal | #005A9C / #FFFFFF | 7.14:1 pass | #73A4C9 / #0F1B2D | 6.50:1 pass | #80ACCE / #0F1B2D 7.19:1 pass | #6199C2 / #FFFFFF 3.08:1 **FAIL** |
| Cooked | #0F1B2D / #FFD100 | 11.83:1 pass | #4B5462 / #FFD100 | 5.24:1 pass | #878D96 / #0F1B2D 5.17:1 pass | #6199C2 / #FFFFFF 3.08:1 **FAIL** |

**Lows.** The lean's lowest is Cooked past at **5.24:1**, then Brutal past at 6.50:1. No full or lean tile fails. The alt passes everywhere too; its low is Cooked past at 5.17:1, but with an ink number.

**Fails.** All five past tiles in the shipped styles fail, from 3.08 to 4.42:1.

## Tradeoffs

- **The ramp collapses a step when faded.** The tokens are close at the light end: Chill and Mild are only ΔE 5 apart at full strength. So past Mild looks like full Chill, and past Brutal sits near full Spicy (ΔE 12). Position tells past from future (everything before the ring is past), but reading a past day's exact level leans on the legend. A milder fade (65%) separates the steps more but weakens the past cue. 65% is also the most Brutal can take: above it, neither white nor ink passes on the tint.
- **Past Chill is almost white.** Chill is the palest token (1.18:1 against the card at full), and its 55% tint is #F0F6FA. It is still tinted, not grey, but only just.
- **Cooked fades by a different amount (75% vs 55%).** This is the only way to keep gold-on-ink at AA. A uniform 50% (frame c) turns past Cooked into slate #878D96 with an ink number. It loses its gold and reads as plain grey, which is what Kylie asked us not to do.
- **Brutal's number changes color in the past** (white to ink). That doubles as a past cue but breaks "same tile, just faded" for that one verdict.
- **Legend cost.** The legend adds about 57pt of height under the calendar. It could hide after first use or move to the info sheet.
- **Sunday first touches the data layer** (`mondays`, `weekOf`, the week band) and not just this component.

## Lean

**Not confirmed — lean:** b / d. The fill fades to 55% with a full-ink number. Cooked past is 75% ink with its gold number. Every tile uses the real verdict tokens, with Cooked moved onto ink + gold. Weeks start on Sunday and rows are 44pt.

## Scripts (`src/`)

- `contrast.py`, `sweep.py`, `table.py` → contrast.md / contrast.json
- `ann_a.py` → frame a
- `cal.cjs` (EXAMPLE weeks + CSS variants), `legend.cjs`, `run-b.cjs` (b, c), `run-d.cjs` (d, e)
- `chart.py` → f
- `board.cjs`, `run-board.cjs` → board.png
- Reused from part B: `eng.cjs` (OUT pointed here, light-blue badge), `mk.cjs`, `list.cjs`, `data.cjs`.
