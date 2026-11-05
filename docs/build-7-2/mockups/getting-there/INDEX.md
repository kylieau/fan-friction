# Item 4: Getting There (form items E1 and E2)

**One line:** Getting There would say when crowds around a venue make the nearby roads Light, Busy, or Heavy. It is an estimate from schedules and crowd sizes, never live traffic. This folder mocks every place it could live, both E2 versions, and the case for not building it.

All frames use EXAMPLE road data. The road windows, strips, and road names are made up. The Nov 8 schedule and crowd sizes are the live 7.1 catalog (Texans at Chargers 1:05 pm SoFi about 70k, Penguins at Ducks 5:00 pm Honda Center 17k, Utah State at USC Women's Basketball 5:00 pm Galen Center 6.0k, Pelicans at Clippers 6:00 pm Intuit Dome 17k). Every frame has an EXAMPLE badge and a frame tag. Frames are 390 wide full-page captures of the built 7.1 clone (http://127.0.0.1:3071) with injected markup that uses the app's own classes. Numbered callouts sit in the gutters, with a spec list beside each frame.

**Board:** `board.png`. It covers the explainer, your E1 and E2 notes, why Nov 8, then map mode, day card, event words, shared pieces, E2 both versions, Don't Build It vs. Smallest, All Three, the tradeoff table, and the lean.

## What you said (quoted from the form export)

- **E1 "Map Mode, Day Card, Event Words, Or All"**: choice *something else*.
  - otherText: "I'm gonna need a serious mockup before i approve anything. maybe mock up each option?"
  - notes: "NOTE THAT I AM NOT CONVINCED WE NEED THIS ON THE APP AT ALL, SO WILL TAKE SOME SERIOUS FLESHING OUT AND CONVINCING TO ADD THIS TO OUR SLATE"
  - (The form's lean had been option 1: all three, meaning day card, event line, and map.)
- **E2 "A Crowd Read, Not A Route"**: choice *something else*.
  - otherText: "mock up both pls"
  - notes: none.
  - Options were (1) "Yes, firmly: area names only" and (2) "Allow named roads like the 110 and 405."
- Confirmed elsewhere on the form, and used here as given: E3 "Getting There" on day and event pages, "Traffic" on the map switch. E4 Light, Busy, Heavy. E5 blobs first, corridors later. E6 its own three blues. E7 a plain sentence on quiet dates. E11 roads in the verdict reason, yes. E12 street events left out, and the app says so. E13 offline PeMS check, yes. E14 no live data ever.

## Frames

| File | Option | What it shows |
|---|---|---|
| `01-map-traffic-mode.png` | Map mode, E2 A | Crowds and Traffic switch (44pt), shaded areas for Inglewood Heavy, Anaheim Busy, and Exposition Park Light. Sheet: "Sun, Nov 8 at 5:00 pm," "Estimate · not live," why each area is shaded, a leave-time slider (12 pm to 9 pm, 44pt thumb), and See the whole day. |
| `02-map-traffic-route.png` | Map mode, E2 B | Named corridors (405, 105, 57, 5, 110) with ink shields, and corridor cards with time windows and a timing tip. |
| `03-map-quiet-date.png` | Map mode, empty | Mon, Nov 9: "Nothing big enough to strain the roads in Los Angeles." Nothing shaded. |
| `04-day-card-strip.png` | Day card | Getting There card after Local Competition. Summary line, one strip per area on the same axis, key, and two 44pt links. About 445pt. |
| `05-day-card-leave-time.png` | Day card, fuller | Same, plus a leave-time slider with a one-line read. About 620pt. |
| `06-day-card-route.png` | Day card, E2 B | Shields per row, a "405 north" leaving tip, and Directions in Maps (hand-off). |
| `07-event-line-under-crowd.png` | Event words | One Getting There row under Crowd. About 115pt. |
| `08-event-line-in-up-against.png` | Event words, alt | The same row inside the violet Up Against card. |
| `09-event-section.png` | Event section | Arriving and Leaving rows, why, one strip, and See the whole day. About 265pt. |
| `10-event-section-route.png` | Event section, E2 B | Shields, timing tip, and Directions in Maps. About 415pt. |
| `11-about-sheet.png` | Shared | "How Getting There Works": what it counts and what it leaves out. Pale-blue scrim. |
| `12-you-link-upcoming.png` | Optional plan link | "Check the roads for Sunday" under an Attending plan on Upcoming. |
| `13-smallest-verdict-line.png` | Smallest version | One roads sentence inside the verdict tile, area name only. About 50pt. |
| `14-dont-build-it.png` | Don't build it | The date page as it is today, with callouts on what users lose and what stays simpler. |
| `15-all-flow.png` | All | Event row, then day card, then map, as one tap path. |
| `16-tradeoffs.png` | Table | Every option scored on value, data and freshness, risk of being wrong, screen cost, overlap with Maps apps, and build effort. |
| `raw/` | | Bare 390 captures and anchor and check JSON. |
| `src/` | | `gt.css` (all classes `gt-` prefixed), `parts.mjs` (markup), `lib.mjs` (boot, checks, capture), `frames.mjs` (captures), `compose.mjs` and `calls.mjs` (callouts), `extra.mjs` (15, 16), `board.mjs`. |

## The honest case

**Why build anything:** on Sun, Nov 8 the verdict reads 4.3 Spicy, "No other big crowd overlaps it." That is true for crowds. But the Chargers crowd leaving SoFi (game ends about 4:15 pm) and the Clippers crowd arriving at Intuit Dome next door (6:00 pm) share the same Inglewood roads from about 4:30 to 6:00 pm. Right now nothing in the app says so. Getting There's only real addition is that warning.

**Don't build it (frame 14):**
- *What users lose:* the overlap warning on the few dates where crowds meet on the same roads. They find out from their maps app on the day.
- *What stays simpler:* no second blue scale next to the verdict blues, no estimate model to tune, no risk of a wrong road call, and nothing new on three surfaces. The verdict and the Local Competition bars already show when each crowd is there.

**Against map mode in particular:** it is the biggest build. It hides behind a switch. A shaded map reads as a live traffic layer, which is the exact thing E14 rules out. And Google Maps, Apple Maps, and Waze already do it live.

**Against E2 B (named roads):** "405 north, Heavy" is the most useful line for a driver and the most likely to be wrong on the day (a crash, roadwork, or a game that runs long). It also needs a hand-built road list per venue and the PeMS tuning from E13. It is the Maps apps' job.

## Tradeoff table

| Option | Frames | Value to user | Data sources and freshness | Risk of being wrong | Screen cost | Overlap with Maps apps | Build effort |
|---|---|---|---|---|---|---|---|
| Don't build it | 14 | None new | None | None | 0 | n/a | None |
| **Smallest: roads line in verdict** | 13 | Low to medium | Catalog schedules and crowd sizes, fresh when the catalog refreshes, no road data | Low (area and about-time only) | About 50pt in the existing tile | None | Small |
| Event words: one row | 07 | Medium for people Attending | Same, plus start and end times | Low to medium | About 115pt | Low | Small to medium |
| Event row inside Up Against | 08 | Same as 07 | Same | Low to medium, plus blue cues inside a violet card | About 80pt added | Low | Small to medium |
| Event section | 09 | Medium | Same, with half-hour windows | Medium (half-hour cells overpromise) | About 265pt | Low to medium | Medium |
| Day card: strips | 04 | Medium to high for planners | Same, every area on the date | Medium | About 445pt | Low | Medium |
| Day card: plus slider | 05 | High for planners, but needs a drag | Same | Medium | About 620pt | Low to medium | Medium to large |
| Map mode | 01, 03 | Medium, low discoverability | Same, plus an area shape per venue cluster | Medium to high (reads as live) | New mode, sheet, and quiet state | High | Large |
| All three, plus plan link | 15, 12 | Highest coverage | Same model in four places | Compounds | All of the above | Medium to high | Largest |
| **E2 A: area names only** | 01, 04, 07, 09, 13 | Which area, not which road | Schedules and crowd sizes | Lower | Base | Lower | Base |
| E2 B: named roads | 02, 06, 10 | More useful to drivers | Plus a road list per venue and the PeMS check (E13) | High | Shields add about 30pt per row | High | Adds medium |

## Not confirmed — lean

**Build the smallest version only.** That means one roads sentence inside the verdict, only on dates where crowds meet on the same roads (frame 13), with area names only (E2 version A) and a link to the about sheet (frame 11).
- Don't build map mode.
- Hold the day card (04) until the offline PeMS check (E13) shows the estimate is right often enough.
- Skip named roads (E2 B).

If you would rather add nothing, frame 14 is a fair answer. The only loss is the overlap warning on a few busy dates. If the smallest version does earn more room, the next step is the day card (04). Map mode should never come first.

## Open questions

1. **Blue meanings:** the three road blues sit beside the blue action color and the verdict blue ladder. Heavy (#1D5A93) is close to the action dodger blue (#005A9C). Keep them, or use a different hue family?
2. **Light swatch:** Light (#C9DDF1) almost disappears on the light-blue sheet, so the mock adds a thin ink edge. Is that acceptable?
3. **Event placement:** under Crowd (07) or inside the violet Up Against card (08)? Violet means friction, and blue road cues inside it mix two meanings.
4. **Precision:** do half-hour strips (04, 09) promise more than a schedule-based estimate can deliver? Whole-hour cells or plain words only are options.
5. **E2 B hand-off:** if named roads ever ship, is Directions in Maps (hand-off only, no drawn route) the right line?
6. **Past dates:** E7 says "How the roads were estimated" on past dates. That is not drawn here. Do past dates show Getting There at all?
7. **Cut points:** the Light, Busy, and Heavy windows here are placeholders. Thresholds wait for the E13 check.
8. **Plan link (12):** keep it, or is it one surface too many?

## Checks (every frame, automated, plus each PNG viewed)

All 14 raw frames pass for new elements:
- no overflow, clipping, or ellipsis
- nothing under 11px
- all new taps at least 44pt (the map switch buttons are 38pt boxes with the app's own `::after` extension to 52pt)
- no dark fills (the scrim is pale blue)
- no banned words ("going," "night," "tonight," "~") and no em dashes in new copy
- no "Estimated" on verdicts
- no gold in new elements

Frames 15 and 16 are composites of those captures plus an HTML table, and both carry the EXAMPLE badge.

**Existing app elements under minimum, left unchanged and flagged:**
- Date page: `read-word` 9px, `bar-link` (share) 29pt.
- Map: `day-name` and `day-num` 10px, `log-score-word` 7px, `map-header-date-link` 30pt, `map-feels` 36pt, `legend-button` 36pt.
- Event page: `log-score-word` 8px, `text-link` 37pt.
- Upcoming: `stub-date-wd` 9px.
- The map page's DOM carries about 252 "—" characters from existing app placeholders, mostly the day strip's quiet-day dashes. They are not new copy.

Nothing was edited in the repo, nothing was committed, no dev server was stopped, 3011 was not touched, and no messages were sent.
