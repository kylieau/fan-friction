# Distance discount in Crowd fight: a proposal

Written Oct 7, 2026, right after the Bay Area build, as Kylie asked (Oct 7: "distance discount as a proposal: yes… after Bay Area, as long as we don't forget it"). Nothing here is built. Approved in direction Oct 6 (BACKLOG, "Distance discount in Crowd fight"); the numbers below are placeholders for her to react to. Revised the same day after a second opinion (`docs/archive/second-opinions/distance-discount-second-opinion-oct7.md`): **B is a testable default, not a validated rule.** The example nights show how the rule moves scores; only the attendance check can show whether the moves are more accurate.

## The flaw, in one night

Crowd fight today treats every big event in a metro as a competitor for the same fans, however far apart they are. Gridlock already knows distance (zones of venues within 2 km, with a little spill between nearby zones); Crowd fight does not.

Saturday **Oct 10, 2026 in the Bay Area** (the night the venue research picked to show this): Cal vs. Virginia Tech in Berkeley at 12:30, Sharks vs. Oilers in San Jose at 1:00, Warriors vs. Kings in San Francisco at 5:30. Berkeley to San Francisco is 10 miles; San Jose is 40 miles from both. Today the night reads **4.2, Spicy**, with the Sharks game at 4.1 "pulled on" by the two crowds 40 miles north.

**Fans competing is not traffic overlapping.** Gridlock is about shared roads; Crowd fight is about shared ticket buyers, who do not have to meet to compete. Distance is a plausible proxy for how much two audiences overlap (a San Jose season-ticket holder rarely weighs a Berkeley kickoff), but it is a proxy, and that is what the check below has to test.

## The rule proposed

Each competitor's pull is multiplied by a distance weight: **1 up to a near distance, fading in a straight line to 0 at a far distance.** Straight-line miles between the two venues, nothing else, for v1 (travel times would need a routing service; the free public ones forbid production use, so that would be a 🚩 or a self-hosted piece later).

| Candidate | Full weight up to | No weight beyond | Weight at 27 miles (Anaheim to downtown LA) | Weight at 40 miles (San Jose to SF) |
|---|---|---|---|---|
| **A** | 10 mi | 30 mi | 0.15 | 0 |
| **B (recommended)** | 15 mi | 45 mi | 0.60 | 0.17 |

B keeps Los Angeles and Orange County mostly one pool, which Kylie said they are (Oct 3) and chose to partly reopen (Oct 6). A splits them. Under B, Berkeley and San Francisco (10 miles) still count on each other in full, and San Jose keeps about a sixth of its weight on both: the rule reduces San Jose's influence on the other two, it does not cut it off.

## What the example nights would read

From the Oct 7 archived listings, computed with the live formula and each candidate:

| Night | Big events | Today | A | B |
|---|---|---|---|---|
| Bay Area, Sat Oct 10 | Cal, Sharks, Warriors (10 / 40 / 42 mi apart) | **4.2 Spicy** | 2.9 Mild | **3.1 Mild** |
| Bay Area, Sat Oct 17 | Stanford, Cal, Earthquakes, Disney On Ice (9–40 mi) | 4.0 Mild | 2.5 Mild | 3.3 Mild |
| New York, Sat Oct 10 | ten events, all within 23 mi | 7.4 Hot | 7.1 | 7.3 |
| New York, Sat Oct 17 | Stony Brook, NYCFC, Red Bull NY (16 / 39 / 55 mi) | 3.5 Mild | 2.6 | 3.1 |
| Los Angeles, Sat Oct 10 | seven events, all within 12 mi | 6.0 | 6.0 | 6.0 |
| Los Angeles, Sat Oct 17 | eight events, one 28–34 mi out (Los Tigres del Norte) | 6.9 | 6.0 | 6.6 |
| Seattle, Sat Oct 10 | five shows, Tacoma and the Gorge among them (25–52 mi) | 3.5 | 2.4 | 3.0 |
| Atlanta, Sat Oct 10 | five events, all within 12 mi | 5.7 | 5.7 | 5.7 |

Per event, the sharpest changes are the far ones: the Sharks' read falls from 4.1 to 1.5 under B; Stony Brook's from 3.5 to 1.2; Los Tigres del Norte (out past Ontario) from 7.6 to 5.0 under B and 1.9 under A. Dense nights in New York, Los Angeles and Atlanta barely move, which is the point: the discount only bites where the metro is wide.

## How it would be checked before it is locked

The rule that every factor is tested on held-out announced crowds applies here too, and the check has to be hard to fool:
- **The baseline is the expected draw**, not the building: the question is whether a game drew less than its own estimate when a big event competed that night.
- **Time overlap counts.** A competitor is one whose window overlaps (the existing time factor), not merely one on the same date.
- **Sellouts are set aside.** A sold-out game cannot show lost demand, so games at or above 97% of the building are excluded, and the share of sellouts is reported separately for near and far nights.
- **Distances are chosen on one half of the games and scored on the other.** Even seasons choose the near and far distances; odd seasons score them. A fade that only helps the half it was fit on does not pass.
- The outcome is one of three: near competitors depress crowds and far ones do not (the fade is real; take its distances from the data); both depress crowds about equally (distance is the wrong proxy; keep Crowd fight as it is); neither does (Crowd fight's premise needs a look, and this doc says so).

Per-city calibration later, from work others have done (Kylie, Oct 6): Nielsen TV markets, Census commuting zones, promoters' concert radius clauses. New York's rail would argue for a longer "near" there; the Bay Area's bridges for a shorter one. v1 uses one pair of distances everywhere.

## What I need from Kylie

1. Candidate B, A, or other distances, as the default to test.
2. Straight-line miles for v1 (yes/no).
3. Run the attendance check first (the second opinion's recommendation, and mine), or build B now and check after.

## Result of the check (Oct 7, 2026)

Kylie locked all three answers (Oct 7: "agree with all"), so the check ran first: `scripts/distance-check.mjs` → `docs/distance-check.md`. **It did not pass.** On 6,318 home games across six cities (2023–2026, sellouts set aside), games with a competing big game the same night drew the same against their expected draw as games with none: median −1.5% with a competitor within 15 miles, +0.4% with none, +1.0% with the nearest 15–45 miles out. On untouched (odd) seasons, ignoring competitors predicts crowds as well as counting them at full weight, and no fade (A, B, or the pair the even seasons chose) does better than either. The fitted slopes are slightly positive: nights with company draw a touch *more*, not less.

What that means, and what it does not:
- **Nothing is built.** The distance discount has no effect to discount.
- **This is sports against sports, measured in announced crowds.** Announced counts are tickets distributed, mostly sold weeks ahead, so a same-night choice shows up as no-shows, which announced counts never record. Concerts, the largest same-night competitors in most cities, are not on file for past dates. The check can only say that *ticket sales* for a game do not fall when another game is on across town.
- **Crowd fight's premise is therefore untested, not disproved.** It claims fans choose between events; the data the app has cannot see that choice. A season of archived Ticketmaster listings would let the test include shows; a turnstile count (which few teams publish) would let it see no-shows.
- **Open for Kylie:** keep Crowd fight as it is (its read is still a plain statement of how many seats are in play at once, which is what she asked for on Oct 5), and revisit the discount when a season of concert listings is on file. Not reopened: the formula's constants stay as they are; no tuning to close this.


Status: closed, checked Oct 7, 2026 (docs/distance-check.md); no effect found, so not built, and Kylie accepted that (per MEMORY_HANDOFF.md); archived in the Oct 8, 2026 docs tidy.
