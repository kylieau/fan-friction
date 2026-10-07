# The postseason-estimate check

_Written by `scripts/postseason-check.mjs` on 2026-10-07. Pre-registered at the top of that script; constants in `expectedDrawBuild.ts` not re-tuned. Companion to `docs/postseason-estimate-proposal.md`._

**What was tested.** 44 playoff home games with an announced crowd, each predicted from the postseasons before its own (2023, 2024, 2025, 2026), across 13 teams in 3 leagues. 40 games had no round band or capacity; 193 had no comparable (neither the team nor the league pool qualified), which is where the app shows no estimate.

**Pass.** The rule's median error is 0.5% against 0.5% for the building (today's fallback) and 0.8% for the regular-season rule applied blindly; no league with 10+ games is worse than the building.

## Overall

| | Games | Rule | Building | Regular rule (n) | Range covers | Wrong side of 5,000 |
|---|---|---|---|---|---|---|
| all | 44 | 0.5% | 0.5% | 0.8% (41) | 65.9% | 0 |

## By league

| | Games | Rule | Building | Regular rule (n) | Range covers | Wrong side of 5,000 |
|---|---|---|---|---|---|---|
| MLB | 11 | 2.7% | 3.1% | 16.8% (11) | 63.6% | 0 |
| NBA | 23 | 0.4% | 0.4% | 0.0% (20) | 60.9% | 0 |
| NHL | 10 | 0.5% | 0.5% | 0.5% (10) | 80.0% | 0 |

## By round band

| | Games | Rule | Building | Regular rule (n) | Range covers | Wrong side of 5,000 |
|---|---|---|---|---|---|---|
| first | 31 | 0.4% | 0.4% | 0.2% (28) | 64.5% | 0 |
| second | 13 | 2.0% | 2.7% | 16.5% (13) | 69.2% | 0 |

## By basis (team alone, blended, league pool)

| | Games | Rule | Building | Regular rule (n) | Range covers | Wrong side of 5,000 |
|---|---|---|---|---|---|---|
| team | 12 | 0.0% | 0.0% | 0.0% (12) | 75.0% | 0 |
| blend | 23 | 0.5% | 0.5% | 0.5% (23) | 47.8% | 0 |
| league | 9 | 1.4% | 1.4% | 14.5% (6) | 100.0% | 0 |

Errors are the median absolute error against the announced crowd. "Range covers" is the share of games whose crowd fell inside the planning range (10th–90th percentile or min–max, widened by 5% of capacity). "Wrong side of 5,000" counts games where the range's low end and the crowd disagree about the friction floor.

## Caveats
- Capacity is the building's setup for the sport on that date, not the playoff configuration; a curtained or opened upper bowl shows up as occupancy, not as capacity.
- The league pool is the covered cities' teams only, not the whole league.
- Announced crowds are tickets distributed, as everywhere in the app.
