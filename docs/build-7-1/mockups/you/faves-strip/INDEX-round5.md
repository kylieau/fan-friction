# You tab, Faves: Round 5, e3 tile border options (7.1 item 26)

**EXAMPLE data only.** Every frame has the "EXAMPLE data" badge. These are mocks injected into the live shell at 127.0.0.1:3011, in 390×844 frames. No repo edits.

**Base:** e3, which Kylie picked: a white card like the Stubs card, light #D6E8FA tiles with ink text and blue icons, 60pt tiles, 6pt gaps, the long-name handling from 06, and "See all N ›". The only thing that changes is the tile border. It is drawn as an inset line, so tile size and layout stay identical.

**Automated checks:** all 6 frames passed, with no banned words, no overflow, no clipping, no text under 11pt and no taps under 44pt. Headings are "Your Stubs" and "Faves" with the link right-aligned, and sports and headings are in Title Case.

## Frames
| File | Description |
|---|---|
| `g1-5F93CC-1px-6.png` | e3 as-is: 1px #5F93CC border, 6 faves. |
| `g1-5F93CC-1px-13-long.png` | The same with 13 faves, long names first (Cal State Fullerton / Women's Soccer, LA Philharmonic / Classical & Opera, …). |
| `g1-5F93CC-1px-closeup-3x.png` | 3× close-up of the Cal State Fullerton and LA Philharmonic tiles. |
| `g2-005A9C-1px-6.png` | 1px #005A9C border, 6 faves. |
| `g2-005A9C-1px-13-long.png` | The same with 13 faves, long names first. |
| `g2-005A9C-1px-closeup-3x.png` | 3× close-up of the same two tiles. |
| `g3-005A9C-1.5px-6.png` | 1.5px #005A9C border, 6 faves. |
| `g3-005A9C-1.5px-13-long.png` | The same with 13 faves, long names first. |
| `g3-005A9C-1.5px-closeup-3x.png` | 3× close-up of the same two tiles. |
| `board.png` | One column per variant: the 6-fave frame, the 13-fave frame and the close-up. |

## Edge contrast (non-text, 3:1)
| Border | vs tile fill #D6E8FA | vs white card #FFFFFF | 3:1 |
|---|---|---|---|
| 1px #5F93CC (e3 as-is) | 2.57 | 3.21 | Passes against the card, where the tile edge sits. Passes only just, and fails against the fill |
| 1px #005A9C | 5.70 | 7.14 | Passes both |
| 1.5px #005A9C | 5.70 | 7.14 | Passes both. The ratios are the same as 1px; width does not change the ratio |

For comparison, the fill alone against the white card is 1.25, which fails. That is why a border is needed.

**Does 1.5px help?** No for contrast: the ratios are identical to 1px. It does make the edge more visible on low-quality screens and in bright light. On a 2× or 3× display it looks heavy: the tiles read as outlined buttons and the line competes with the bold team names, which is most visible in the close-up.

## Text contrast
Unchanged from round 4 (e), because the fills and text colours are the same:

| Text | Background | Ratio |
|---|---|---|
| Ink #0F1B2D | Tile #D6E8FA | 13.81 |
| Muted #33475E | Tile #D6E8FA | 7.62 |
| Blue icon #005A9C | Tile #D6E8FA | 5.70 (the low) |
| Blue "See all" link #005A9C | White card | 7.14 |

All pass AA.

## Lean
**1px #005A9C (Not confirmed — lean; Kylie decides):** it gives a crisp, clearly passing edge (5.70 vs the fill, 7.14 vs the card) in the action blue, without 1.5px's heavy outlined-button look.

## Source (`round5/src/`)
Copied from `round4/src`:
- `r5.css`: the two #005A9C border variants. e3 itself uses `r4fix` from `r4.css`.
- `run.cjs`: renders the frames.
- `build-board5.cjs`: builds the board.
- The close-ups are crops of the 13-fave frames, upscaled 1.5× from the 2× captures to 3×.
