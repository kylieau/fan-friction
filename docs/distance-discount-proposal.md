# Distance discount in Crowd fight: a proposal

Written Oct 7, 2026, right after the Bay Area build, as Kylie asked (Oct 7: "distance discount as a proposal: yes… after Bay Area, as long as we don't forget it"). Nothing here is built. Approved in direction Oct 6 (BACKLOG, "Distance discount in Crowd fight"); the numbers below are placeholders for her to react to.

## The flaw, in one night

Crowd fight today treats every big event in a metro as a competitor for the same fans, however far apart they are. Gridlock already knows distance (zones of venues within 2 km, with a little spill between nearby zones); Crowd fight does not.

Saturday **Oct 10, 2026 in the Bay Area** (the night the venue research picked to show this): Cal vs. Virginia Tech in Berkeley at 12:30, Sharks vs. Oilers in San Jose at 1:00, Warriors vs. Kings in San Francisco at 5:30. Berkeley to San Francisco is 10 miles; San Jose is 40 miles from both. Today the night reads **4.2, Spicy**, with the Sharks game at 4.1 "pulled on" by crowds it never meets.

## The rule proposed

Each competitor's pull is multiplied by a distance weight: **1 up to a near distance, fading in a straight line to 0 at a far distance.** Straight-line miles between the two venues, nothing else, for v1 (travel times would need a routing service; the free public ones forbid production use, so that would be a 🚩 or a self-hosted piece later).

| Candidate | Full weight up to | No weight beyond | Weight at 27 miles (Anaheim to downtown LA) | Weight at 40 miles (San Jose to SF) |
|---|---|---|---|---|
| **A** | 10 mi | 30 mi | 0.15 | 0 |
| **B (recommended)** | 15 mi | 45 mi | 0.60 | 0.17 |

B keeps Los Angeles and Orange County mostly one pool, which Kylie said they are (Oct 3) and chose to partly reopen (Oct 6). A splits them. Both make the Bay Area's three centers read as separate.

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

The rule that every factor is tested on held-out announced crowds applies here too. The check: for every home game in the attendance files (five cities, 2022–2026), count the same-night big events within 15 miles and those 30+ miles away, and compare the crowd against its expected draw. If near competitors depress crowds and far ones do not, the fade is real and its distances can be set from the data instead of guessed. If neither depresses crowds, Crowd fight's whole premise needs a look, and this doc says so.

Per-city calibration later, from work others have done (Kylie, Oct 6): Nielsen TV markets, Census commuting zones, promoters' concert radius clauses. New York's rail would argue for a longer "near" there; the Bay Area's bridges for a shorter one. v1 uses one pair of distances everywhere.

## What I need from Kylie

1. Candidate B, A, or other distances.
2. Straight-line miles for v1 (yes/no).
3. Run the attendance check first, or build B now and check after.
