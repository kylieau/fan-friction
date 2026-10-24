# Final Extra Mocks: Verdict Word Pills And Temperature Row

All frames are 390x844 CSS px (dsf 2), live app at 127.0.0.1:3011 from main-clone, EXAMPLE data badge on every frame. No repo edits, no commits (`git status` clean).
Board: `board.png`. Source: `src/` (reuses 29-calendar and settings-redesign src).

## Files
| File | What |
|---|---|
| `board.png` | Both mocks on one board |
| `1-a-current-wrong.png` / `-annotated` | Today: Cooked lumped with Brutal |
| `1-b-fixed.png` / `-annotated` | Fixed: five distinct pills (lean) |
| `1-c-zero-plain-white.png` / `-annotated` | No reads: plain white pills (proposed) |
| `1-d-where-the-fix-applies.png` / `-annotated` | Scope: every surface with a verdict pill or tile |
| `1-e-pill-closeup-three-states.png` | Close-up strips: Today, Fixed, No Reads |
| `1-f-pill-contrast.png` | Contrast table, pills |
| `2-a-temperature-f-default.png` / `-annotated` | Settings D hybrid, Temperature row, °F selected (lean placement) |
| `2-b-temperature-c-selected.png` / `-annotated` | Same, °C selected |
| `2-c-alt-placement-settings-group.png` / `2-c-alt-placement-annotated.png` | Alternative: in Settings group above Crowd Size |
| `2-d-closeups.png` / `-annotated` | Both states stacked, plus grouped Preferences summary row |
| `2-e-temperature-contrast.png` | Contrast table, Temperature control |

## Mock 1: Verdict Word Pills (Your Year, "Events by Verdict")

### The Bug (read from main-clone)
- `styles.css:3360-3370` `.word-pill`: white (`var(--card)`) fill, 13px/600, padding 6px 12px, radius 999px. `.word-pill strong` is Big Shoulders 18px.
- `styles.css:3378-3382`:
  ```
  .word-pill.brutal,
  .word-pill.cooked { background: var(--dodger); color: var(--card); }
  ```
  Cooked gets Brutal's fill. Chill, Mild, and Spicy have no rule, so they stay plain white.
- Only user: `FrictionLadder.tsx:76`, `<span className={`word-pill ${word.toLowerCase()}`}>`, inside `div.word-row` (aria-label "Events by verdict", line 74), used by `YourYearScreen.tsx:89`, route `/you/year`.
- Dead CSS: `.word-pill.watched` (`styles.css:6969`), no TSX user.

### The Fix (CSS only, no markup change)
Replace the `.brutal, .cooked` group at 3378-3382 with:
```
.word-pill { box-shadow: inset 0 0 0 1px #76869b; }
.word-pill.chill  { background: #e4eef6;       color: var(--ink); }
.word-pill.mild   { background: var(--water);  color: var(--ink); }
.word-pill.spicy  { background: var(--paleBlue); color: var(--ink); }
.word-pill.brutal { background: var(--dodger); color: var(--card); }
.word-pill.cooked { background: var(--ink);    color: var(--gold); }
```
Tokens (theme.ts): ink #0F1B2D, card #FFFFFF, dodger #005A9C, water #D5E5F3, paleBlue #9CC3E4, gold #FFD100. Cooked's whole pill (count and word) is gold on ink, like `.log-score.cooked`.

### Callouts
1-a: (1) three plain-white pills, (2) Brutal correct, (3) Cooked shares Brutal blue, (4) Heaviest tile is already ink and gold.
1-b: (1) Light three plus ring, (2) Brutal unchanged, (3) Cooked own fill, (4) pill and tile agree.
1-c: (1) today only the text line (FrictionLadder.tsx:67, null at line 38), (2) five plain white pills with ring, (3) Cooked stays white at 0.
1-d: (1) pills, fix here, (2) read box `.log-score`, (3) day band `.log-score.inline`, (4) big read `.read-big`, (5) calendar tab `.cal-day`, (6) list mini calendar `.week-calendar-day` (fix is in mock 29).
1-e: markers 1-5 per pill, 6 zero pill.

### Where The Fix Applies
| Surface | File:line | Selector | State |
|---|---|---|---|
| Your Year pills | FrictionLadder.tsx:76, styles.css:3360-3382 | `.word-pill.{band}` | **Fix here** (only user) |
| Read box (Home, Event, FeedRow, StubRows, DayStrip, FollowRow, SearchSheet, and 19 `<ReadTile>` files) | ReadTile.tsx:18,31; ProfileScreen.tsx:282; styles.css:3587-3610; `.none` 4124 | `.log-score.{band}` | Already correct (ink and gold Cooked) |
| Day band pill | ExploreListScreen.tsx:516; styles.css:8350 | `.log-score.inline` | Already correct |
| Big read | DateScreen.tsx:234, WhyCard, DateScore, ManualEntry; styles.css:4269-4273 | `.read-big.{band}` | Already correct |
| Calendar tab | CalendarScreen.tsx:148; styles.css:1363-1386 | `.cal-day.{band}` | Already correct |
| List mini calendar | WeekCalendar.tsx:155 (comment at 35); styles.css:7260-7290, groups at 7275-7276 and 7286-7287 | `.week-calendar-day.band-cooked` | Same bug, fix is in mock 29 |
| `.badge-chill` | styles.css:1733 | n/a | No TSX user, not a verdict pill |

### Contrast, Pills (AA 4.5:1 text, 3:1 non-text edge)
| Pill | Text vs fill | Result | Fill vs page #DAEBFE | Ring #76869B vs page |
|---|---|---|---|---|
| Chill #E4EEF6 + ink | 14.70:1 | Pass | 1.03:1 | 3.06:1 |
| Mild #D5E5F3 + ink | 13.44:1 | Pass | 1.06:1 | 3.06:1 |
| Spicy #9CC3E4 + ink | 9.33:1 | Pass | 1.53:1 | 3.06:1 |
| Brutal #005A9C + white | 7.14:1 | Pass (lowest) | 5.88:1 | 3.06:1 |
| Cooked #0F1B2D + gold | 11.83:1 | Pass | 14.24:1 | 3.06:1 |
| Zero, white + ink | 17.28:1 | Pass | 1.21:1 | 3.06:1 |

No text failures. The three light fills (and white zero) fail the 3:1 edge check alone; smallest fix is the 1px #76869b inset ring, which is the same ring the read boxes already wear (`styles.css:3562, 4256`).

## Mock 2: Temperature Row In Settings

### Placement (Not confirmed, lean)
**Lean:** inline row in the top profile card, directly under Home City (above Privacy). One line why: the unit follows the home city's weather, and it sits on the first screen with no scroll.
**Alternative (2-c):** first row of the Settings group, directly above Crowd Size. The D hybrid has no "Preferences" group, so the suggested spot "Preferences near Home City" is the profile card.
**Grouped variant (2-d):** one Preferences row that reads "°F · No min – No max" (or "°C · ..."). It hides the control one tap deeper, so I did not lean on it.

### Control Spec
- Row 64pt tall, label 13px bold ink, preview line 12px #4A5568.
- Segmented control 112 x 44pt: two segments of 56 x 44pt, radius 22, track #E8ECF2, 1px #76869b ring, 15px/800 text.
- Selected = var(--dodger) #005A9C fill with white text. Unselected = #4A5568 on the track. Default °F.
- Preview: "Example: Rose Bowl 92°F" flips to "Example: Rose Bowl 33°C" (92°F = 33.3°C, rounded). Labeled Example, not her data.
- Group labels forced to Title Case in the mock ("People & Faves").

### Callouts
2-a: (1) row in top card, (2) segmented control, (3) example preview line, (4) why here (Home City).
2-b: (1) same row height, (2) °C selected, (3) preview flips to 33°C.
2-c: (1) row above Crowd Size, (2) top card unchanged, (3) neighbor Crowd Size.
2-d: (1) °F default, (2) °C selected, (3) grouped Preferences row.

### Contrast, Temperature Control
| Pair | Ratio | Needs | Result |
|---|---|---|---|
| Selected text white on dodger | 7.14:1 | 4.5 | Pass (lowest text) |
| Unselected #4A5568 on #E8ECF2 | 6.35:1 | 4.5 | Pass |
| Preview #4A5568 on white | 7.53:1 | 4.5 | Pass |
| Preview value, ink on white | 17.28:1 | 4.5 | Pass |
| Ring #76869B vs track | 3.13:1 | 3 | Pass |
| Selected dodger vs track | 6.02:1 | 3 | Pass |
| Track vs white card, no ring | 1.19:1 | 3 | Needs the ring |

## Automated Checks
- Overflow: scrollWidth 390 = clientWidth 390 on all Mock 1 states (wrong, fixed, zero) and all Mock 2 frames. Zero elements past 391px.
- Text under 11px in new elements: 0 (pills 13px/18px, Temperature row 12px to 15px).
- Tap size, new elements: segments 56 x 44, control 112 x 44, row 64. Pills are non-interactive 32pt spans (not taps).
- Banned words: none found in any frame or board (checked the page text of every render).
- Pre-existing small text, not new: `log-score-word` 8px, `cal-word` 8px, `read-word` 9px, `cal-num` 10px.

## Notes For The Builder
- "Events by Verdict" is only an aria-label (`FrictionLadder.tsx:74`); the visible heading is "Your reads" in the app. The mock shows Title Case ("Your Reads").
- The zero state is a proposal. Today no pills render with zero reads; it needs `byWord` to keep count 0 (line 40).
- Existing `.segmented` (styles.css:554-590) is 38px tall with a white selected pill. The mock deviates on purpose: 44px, blue selected fill.
- Default °F vs metros: `usesCelsius(metroId)` and `degreesFor` (config/metros.ts:27-53) already show °C for Canada and Mexico homes. The setting should default to the metro rule until she taps, then store her choice.
- Mock 1 uses the real tokens above; no new colors except #e4eef6 (as specified) and #76869b (existing ring).
