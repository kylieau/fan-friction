# You tab, Faves: Round 4, band and tile pairings (7.1 item 26)

**EXAMPLE data only.** Every frame has the "EXAMPLE data" badge. These are mocks injected into the live shell at 127.0.0.1:3011, in 390×844 frames. No repo edits.

**Applied in every frame:**
- Tile size from round-3 (a): 60pt tiles with 6pt gaps.
- Long-name handling from round-2 06: team and sport each stay on one line, with an ellipsis at the tile edge.
- Top 6 faves plus "See all N ›".
- Title Case sports and headings: "Your Stubs" and "Faves", with the link right-aligned.

**Automated checks:** all 7 frames passed, with no banned words, no overflow, no clipping, no text under 11pt and no taps under 44pt.

## Frames
| File | Description |
|---|---|
| `d1-blue-band-light-tiles-6.png` | (d) A dark-blue #005A9C band holding light #D6E8FA tiles, with ink text, blue icons and a white "See all 7 ›". |
| `d2-blue-band-light-tiles-13-long.png` | (d) With 13 faves, long names first (Cal State Fullerton / Women's Soccer, LA Philharmonic / Classical & Opera). |
| `e1-white-card-light-tiles-6.png` | (e) A white card like the Stubs card holding light #D6E8FA tiles, built as asked with no tile border. |
| `e2-white-card-light-tiles-13-long.png` | (e) With 13 faves, long names first. |
| `e3-white-card-light-tiles-6-edge-fix.png` | (e) With the smallest fix for its failing tile edge: a 1px #5F93CC border on each tile. Extra frame. |
| `f1-blue-tiles-no-band-6.png` | (f) Round-3 (a) with no band: #005A9C tiles directly on the page, white and light-blue text. |
| `f2-blue-tiles-no-band-13-long.png` | (f) With 13 faves, long names first. |
| `board.png` | Comparison board. Round-3 a and b are the references, then d, e, e3 and f; the 13-fave frames are in the row below. Includes the contrast lows and fails. |

## WCAG AA text contrast (4.5:1 for small text)
| Option | Text | Background | Ratio | AA |
|---|---|---|---|---|
| d, e | Team / Seen number #0F1B2D | Tile #D6E8FA | 13.81 | Pass |
| d, e | Sport / "Seen" #33475E | Tile #D6E8FA | 7.62 | Pass |
| d, e | Icon #005A9C | Tile #D6E8FA | **5.70** | Pass |
| d | "See all" link, white | Band #005A9C | 7.14 | Pass |
| e | "See all" link #005A9C | White card | 7.14 | Pass |
| f | Team / Seen number / icon, white | Tile #005A9C | 7.14 | Pass |
| f | Sport / "Seen" #D6E8FA | Tile #005A9C | **5.70** | Pass |
| f | "See all" link #005A9C | Page #DAEBFE | 5.88 | Pass |
| All | Headings #0F1B2D | Page #DAEBFE | 14.24 | Pass |

**Lowest text ratio: 5.70.** All text passes.

## Non-text edges (3:1)
| Option | Edge | Ratio | 3:1 |
|---|---|---|---|
| d | Tile #D6E8FA vs band #005A9C | 5.70 | Pass |
| d | Band #005A9C vs page #DAEBFE | 5.88 | Pass |
| e | Tile #D6E8FA vs white card | **1.25** | **Fail** |
| e | White card vs page #DAEBFE | **1.21** | **Fail** (soft shadow; the same as the Stubs card today) |
| e3 | Tile border #5F93CC vs white card | 3.21 | Pass |
| e3 | Tile border #5F93CC vs tile #D6E8FA | 2.57 | Fails on its own, but the outer edge against the card (3.21) is what defines the tile |
| f | Tile #005A9C vs page #DAEBFE | 5.88 | Pass |
| Ref: round-3 a | Tile #005A9C vs band #BFDBF8 | 5.00 | Pass |
| Ref: round-3 b | Tile #D6E8FA vs page #DAEBFE | 1.03 | Fail |

**Smallest fix for (e):** add a 1px #5F93CC border inside each tile (shown in e3). Nothing else changes: same size, same colours, no layout shift. Darker options such as #5A8FC8 (3.39) or #4F86C2 (3.80) give more margin. The white card vs page failure is not a tile edge. It matches the Stubs card, so I left it alone. If it must pass too, give the card a 1px #4F86C2 border (3.13 vs the page). Lighter borders such as #5F93CC (2.65) fall short against the page.

Note: WCAG 1.4.11 strictly applies to the visual cues needed to identify a control. Here each tile's text already identifies it as a tap target, so the edge failures in e are a legibility and finish issue rather than a hard failure. The table still applies the 3:1 check as asked.

## Tradeoffs
| | Colour / change of pace | Edges | Scan speed | Height (6 faves) |
|---|---|---|---|---|
| d | Strongest. A solid dark-blue block, but it is more dark blue than round-3 a and close to the "no dark bars" rule | All pass | Fast. Ink on light tiles is easiest to read | About 251pt |
| e | Soft. A tint inside a white card, closest to the rest of the page | Fails without e3's border | Fast | About 251pt |
| f | Clear blue, with less blue overall than a or d because there is no band | All pass, with no border needed | Fast | About 243pt (shortest) |

## Lean: (f), blue tiles with no band (Not confirmed — lean; Kylie decides)
- It keeps the blue tiles she picked in round 2 and drops the band, which is the least total blue of the three without going pale.
- Every edge passes 3:1 without extra borders, and every text pair passes AA, the lowest being 5.70.
- It is the shortest option and matches round-3 (a) tile for tile, so the long-name behaviour is unchanged.
- Runner-up is (d), if she wants the strongest block. It passes every check but reads as a big dark-blue panel. (e) only works with the e3 border.

## Source (`round4/src/`)
Copied from `round3/src`:
- `frame2.cjs`: saves to `round4/` and loads `r4.css`.
- `r4.css`: the d, e, e3 and f styles, layered on round-3 `.r3a` sizing.
- `run.cjs`: renders the frames.
- `build-board4.cjs`: builds the comparison board.
- `data2.cjs`: EXAMPLE data.
