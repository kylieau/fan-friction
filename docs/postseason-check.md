# The postseason-estimate check

_Written by `scripts/postseason-check.mjs` on 2026-10-07. Pre-registered at the top of that script; constants in `expectedDrawBuild.ts` not re-tuned. Companion to `docs/archive/proposals/postseason-estimate-proposal.md`._

**What was tested.** 56 playoff home games with an announced crowd, each predicted from the postseasons before its own (2023, 2024, 2025, 2026), across 20 teams in 4 leagues. 40 games had no round band or capacity; 191 had no comparable (neither the team nor the league pool qualified), which is where the app shows no estimate.

**Pass.** The rule's median error is 0.5% against 0.8% for the building (today's fallback) and 0.8% for the regular-season rule applied blindly; no league with 10+ games is worse than the building.

## Overall

| | Games | Rule | Building | Regular rule (n) | Range covers | Wrong side of 5,000 |
|---|---|---|---|---|---|---|
| all | 56 | 0.5% | 0.8% | 0.8% (47) | 69.6% | 0 |

## By league

| | Games | Rule | Building | Regular rule (n) | Range covers | Wrong side of 5,000 |
|---|---|---|---|---|---|---|
| MLB | 14 | 2.1% | 2.5% | 18.6% (14) | 64.3% | 0 |
| MLS | 9 | 4.4% | 7.7% | 0.6% (3) | 88.9% | 0 |
| NBA | 23 | 0.4% | 0.4% | 0.0% (20) | 60.9% | 0 |
| NHL | 10 | 0.5% | 0.5% | 0.5% (10) | 80.0% | 0 |

## By round band

| | Games | Rule | Building | Regular rule (n) | Range covers | Wrong side of 5,000 |
|---|---|---|---|---|---|---|
| first | 38 | 0.5% | 0.5% | 0.5% (31) | 68.4% | 0 |
| second | 17 | 1.8% | 2.2% | 17.5% (16) | 70.6% | 0 |
| conference | 1 | 0.5% | 7.7% | — (0) | 100.0% | 0 |

## By basis (team alone, blended, league pool)

| | Games | Rule | Building | Regular rule (n) | Range covers | Wrong side of 5,000 |
|---|---|---|---|---|---|---|
| team | 12 | 0.0% | 0.0% | 0.0% (12) | 75.0% | 0 |
| blend | 25 | 0.5% | 0.5% | 0.5% (25) | 48.0% | 0 |
| league | 19 | 1.2% | 2.1% | 20.3% (10) | 94.7% | 0 |

Errors are the median absolute error against the announced crowd. "Range covers" is the share of games whose crowd fell inside the planning range (10th–90th percentile or min–max, widened by 5% of capacity). "Wrong side of 5,000" counts games where the range's low end and the crowd disagree about the friction floor.

## Caveats
- Capacity is the building's setup for the sport on that date, not the playoff configuration; a curtained or opened upper bowl shows up as occupancy, not as capacity.
- The league pool is the covered cities' teams only, not the whole league.
- Announced crowds are tickets distributed, as everywhere in the app.
