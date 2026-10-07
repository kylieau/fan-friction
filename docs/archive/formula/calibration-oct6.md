# Attendance calibration, first pass (Oct 6, 2026)

The review's §11 asked for announced attendance per team so the formula can size events by what they actually draw, not by the building. This is the first pass: the data is collected, and expected draws are computed from it. The retune of the formula's placeholder constants is the next pass (below).

## What was built
- `scripts/attendance-collect.mjs` pulls announced attendance for every home game of the 16 Los Angeles teams the app knows, from MLB's box scores (Dodgers and Angels, 2023–2025) and ESPN's past-season schedules (Lakers, Clippers, Kings, Ducks 2023-24 through 2025-26; Galaxy, LAFC, Angel City 2023–2025; Rams, Chargers, USC and UCLA football 2023–2025; USC and UCLA basketball, men's and women's, 2023-24 through 2025-26). One file per team under `data/attendance/la/`. Every number is the league's announced count, labeled so; MLB and the NFL report tickets distributed, not turnstiles, as the review warned.
- `scripts/attendance-calibrate.mjs` computes, per team, the median announced crowd overall, by day class (weeknight, Friday, Saturday, Sunday), and by day class and month when there were at least three games. Regular season only: a playoff crowd is the occasion rule's job. The nightly results pass adds this season's games as they finish. Output: `src/data/expectedDrawIndex.ts`.
- `src/data/expectedDraw.ts` attaches the most specific median to an event on read when the event carries no seeded expected draw and is not a playoff game. The building stays the ceiling. The note on the event says what it is: "Median announced crowd for a Friday in April, 9 past games (2023, 2024, 2025). An estimate."

## What the data says (medians, all regular-season home games)
| Team | Median announced | Games | Building |
|---|---|---|---|
| Rams | 73,051 | 25 | SoFi 70,240 listed; the Rams announce above it |
| Chargers | 70,240 | 25 | SoFi |
| USC football | 67,414 | 20 | Coliseum 77,500 |
| Dodgers | 49,432 | 245 | Dodger Stadium 56,000 |
| UCLA football | 42,226 | 18 | Rose Bowl 89,702 |
| Angels | 31,242 | 244 | Angel Stadium 45,517 |
| Lakers | 18,997 | 123 | Crypto.com 18,910 listed |
| Kings | 18,145 | 123 | Crypto.com hockey 18,145 |
| Clippers | 17,927 | 123 | Intuit Dome 18,000 (and Crypto.com before) |
| Ducks | 16,098 | 123 | Honda Center 17,174 |
| UCLA men's basketball | 6,951 | 52 | Pauley 13,800 |
| USC men's basketball | 5,337 | 51 | Galen 10,258 |
| USC women's basketball | 4,303 | 47 | Galen |
| UCLA women's basketball | 3,894 | 40 | Pauley |

Galaxy, LAFC and Angel City were collected too; their medians are in the index.

Two things worth seeing. The Rose Bowl and Angel Stadium were the biggest overstatements: sizing UCLA football by the building made it a 90,000-seat pull when it draws 42,000. And the college programs vary a lot by month: UCLA men's basketball draws about 5,050 at a November–December buy game and about 8,575 in Big Ten play (weekend conference games 9,000–12,000), which is why the buckets key on month and day; the women's programs draw 3,900–4,300 on a typical night and 10,000–13,659 for the biggest games. All stay on the map (the buildings are over the floor) and now pull with their real weight. (Kylie, Oct 6, caught an earlier overstatement here that said the men drew under 5,000 on a typical night.)

## Effect on the 13 hand-rated nights
Mean gap from the hand ratings (comparison only, never the target): **0.74 → 0.70**. The nights that moved: 2022-09-03 from 9.3 to 8.5 (UCLA and USC sized by their draws, not their stadiums; hand 7), 2017-09-17 from 6.0 to 5.6 (hand 7), 2022-11-19 from 6.0 to 5.5 (hand 5), 2023-08-04 from 4.6 to 3.6 (the Angels at 37,000, not 45,517; hand 5), 2024-07-22 from 1.6 to 1.0 (hand 1). Nights before 2023 are sized by 2023–2025 medians, the only seasons collected, and say so in the note.

## Next pass: the retune (proposal)
The review's success test needs, for each past game, the formula's crowd-fight share D and the shortfall (expected minus announced). D needs the other events that night. For 2023–2025 the app has no saved schedules, but the collected files together list every home game of the 16 teams by date, which is the sports side of each night (concerts are missing). Plan:
1. Rebuild each 2023–2025 date's sports events from the attendance files, compute D for every game, and regress shortfall % on D, holding out 20% of dates and one whole season.
2. Report whether D predicts shortfall with the right sign, and what Medium weight and event scale the data implies, against today's placeholders (0.7 / 0.35 / 0.15, scale 14, S₀ 10,000).
3. Propose the retuned constants to Kylie before changing them. College and MLS are the cleanest series; the Dodgers' season tickets mute the signal.
🚩 No cost: both feeds are free.
