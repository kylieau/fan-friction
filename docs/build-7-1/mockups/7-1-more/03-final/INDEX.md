# Item 3 Weather: Final Builder Markup (Locked)

Fri Oct 23 day page. Every frame is 390x844 (frame 03 is a 3x close-up, 1400px wide), EXAMPLE data badge on the app frames. Built on the live shell at 127.0.0.1:3011 with the 03-round2, 03-round3, and 03-order source. No repo edits, no commits, server left running. Callout markers sit in the gutters beside the screen, never over it. Spec text is beside each frame and repeated below.

## Files

| File | What it is |
|---|---|
| `board.png` | All five frames on one board. Open the individual files to read the spec text. |
| `01-collapsed-day-page.png` | Day page with the collapsed strip and the lineup with row markers. Six numbered callouts. |
| `02-expanded-card.png` | Strip expanded into the inline card: hourly view first, then Outdoor Venues. Six callouts. |
| `03-row-closeup-spec.png` | Lineup row at 3x with measured dimensions, the three icon types, an indoor row, and a spec table. |
| `04-settings-pointer.png` | Pointer for the Settings mock: Temperature Units °F / °C, with a °C preview. Not a Settings redesign. |
| `05-local-competition-no-weather.png` | Local Competition with no weather. Two callouts. |
| `raw/` | The plain 390x844 screenshots behind 01, 02, 04, and 05, plus the 3x row crops behind 03. |
| `src/` | `flows.cjs` (frames 01, 02, 04, 05), `closeup.cjs` (frame 03), `compose.cjs` (callouts), `build-board.cjs`, plus the shared lib and CSS. |

## Locked Spec, Line By Line

1. **Flow X.** The slim strip is collapsed by default and reads exactly "Los Angeles 74° / 59° · Outdoor 66° to 92° ›". It expands into the inline card: Today's Weather, hourly view first, then the Outdoor Venues list. "Outdoor" everywhere. The city temp is always labeled as the city's ("Los Angeles 74° / 59°" in the strip, "Los Angeles (city)" and "Los Angeles by the hour" in the card, and a footnote). Weather is not in Local Competition (frame 05).
   - The decorative sun at the left of the strip is not part of its text.
   - Strip and Hide are both 44pt tall (measured 44). Hide is blue, 51.8pt wide. Outdoor Venues rows are 44.25pt.
2. **Lineup rows.** Outdoor rows only: a plain neutral-grey weather icon (sun, cloud, or rain) plus the peak temp, right-aligned on the venue line. No pill, no gauge icon. Indoor rows show nothing. Sample spread: Rose Bowl 92° sun, Hollywood Bowl 75° cloud, Greek Theatre 73° sun, Dignity Health Sports Park 66° rain. On Major rows the tag stays beside the venue and the temp stays rightmost.
3. **No temperature color scale.** Every temp is the same ink and every icon the same grey. Heat is never shown with color.
4. **Units.** All temps follow a new Temperature Units setting, °F by default, to go into the Settings redesign. Frame 04 is a labeled pointer only. At °C the strip reads "Los Angeles 23° / 15° · Outdoor 19° to 33° ›" and Rose Bowl reads 33°.
5. **Order.** The lineup stays in start-time order with no area label on rows.

## Row Spec (frame 03, measured live)

| Item | Value |
|---|---|
| Icon | 16 x 16pt, 1.75pt round stroke, no fill, #5B6778 |
| Icon-to-text gap | 4pt |
| Temp text | 12pt, weight 700, Manrope, #3F4B5C, about 20pt wide for two digits |
| Right edge | Same edge as the friction ring (364pt in the 390 frame); 10pt in from the card edge |
| Vertical | Icon, temp, and venue text share one center line (118pt in the measured row) |
| Clearance | Icon starts 14pt after the longest venue name here; the venue name ellipsizes before it can touch the icon |
| Row height | The marker shares the venue line, so no row gets taller |
| Tap height | Link is 38pt on two-line rows and 55.6pt on three-line rows. The row item with its 6pt spacing is 50pt. |

**Flag, existing app, not changed:** two-line lineup rows are 38pt tall as links, under 44pt. Three-line rows (with a sport or tour label) are 55.6pt. The row heights are unchanged by this work.

## Contrast (WCAG)

| Pair | Ratio | Needs | Used for |
|---|---|---|---|
| Icon #5B6778 on white | 5.74:1 | 3:1 (non-text) | Row and venue-list icons |
| Temp text #3F4B5C on white | 8.85:1 | 4.5:1 | Row temps, strip secondary text |
| Venue text #4A5568 on white | 7.53:1 | 4.5:1 | Existing venue line, card captions |
| #4A5568 on #EEF5FD | 6.85:1 | 4.5:1 | Card stat labels, hour labels, footnote |
| Ink #0F1B2D on white | 17.28:1 | 4.5:1 | Venue-list temps, city temp |
| Blue #005A9C on white | 7.14:1 | 4.5:1 | Hide, selected °F |
| Blue #005A9C on #EEF5FD | 6.50:1 | 4.5:1 | °C segment track |

Fixed in this pass: the earlier card used the app's muted grey (#7B8798, 3.65:1 on white) at 11pt for the footnote, stat labels, hour labels, and the Outdoor Venues label. Those now use #4A5568.

## Checks

- Automated checker on every frame: no horizontal overflow, no clipped text, nothing new under 11pt, no dark bars. Existing-app items it still lists, not part of this work: the 9px "Brutal" verdict word, the back link (21pt), two-line lineup rows (38pt), Show (15pt), chart bars (29pt), and the share button (36pt).
- Text scan of all on-screen text and accessibility labels in frames 01, 02, 04, and 05: none of "Open-air", "thermometer", "chip", the banned words from the brief, or the tilde appear. The spec text beside the frames avoids them too.
- Colors: blue is only the strip chevron, Hide, and the selected °F; gold only crowd figures; violet only friction rings; no money. Heading Title Case; Oxford commas; "Away at Home" is not needed on this page.
- Not mine to decide, noted: the card still uses the colored sun and moon emoji for the city's sky in the hourly view and the card header, as in the approved round 2. They are city-level, not temperature colors. Say if they should also go grey.
- Rain sample: the card says Rain 20% and "a passing shower near the coast" so the rain icon at Dignity Health Sports Park is consistent with it (round 2 said 0%).
