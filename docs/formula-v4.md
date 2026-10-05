# Rating formula v4 (Oct 5, 2026): what the review changes, and what's proposed to build

Source: `formula-review-prompt.md` → the outside review in `formula-review-response.md`, then Claude's re-check. **Nothing here is decided until Kylie says so.** Every number is a placeholder to be tuned on attendance data later (section 11 of the review).

## Claude's re-check of the arithmetic
I re-ran the review's Crowd fight (single-buffer decaying `t`, asymmetric pull, contested-seats date rule) and its Conditions rule on the 13 nights, using the seeded temperatures (no feels-like data, so heat nights land a little lower than the review's). No Gridlock in this run.

| Night | Hand | v3 CF | v4 CF | v4 Cond | v4 rating (CF + Cond) | Review's figure |
|---|---|---|---|---|---|---|
| 1 Fri 10/25/24 | 9 | 10.0 | 10.0 | 1 | 10.0 | 10.0 |
| 2 Sat 10/26/24 | 7 | 8.4 | 6.4 | 1 | 6.4 | 7.0 |
| 3 Mon 4/28/25 | 6 | 6.0 | 3.6 | 1 | 3.6 (needs Gridlock) | 6.85 with Gridlock |
| 4 Tue 4/1/25 | 4 | 5.5 | 4.4 | 1 | 4.4 | 4.4 |
| 5 Sat 11/19/22 | 5 | 5.0 | 6.1 | 1 | 6.1 | 6.1 |
| 6 Mon 10/27/25 | 4 | 8.3 | 4.7 | 1 | 4.7 | 5.1 |
| 7 Mon 7/22/24 | 1 | 1.0 | 1.0 | 1 | 1.0 | 1.0 |
| 8 Fri 9/1/23 | 4 | 2.2 | 3.3 | 1 | 3.3 (needs Gridlock) | 4.7 |
| 9 Fri 8/4/23 | 5 | 2.3 | 3.1 | 1 | 3.1 (needs Gridlock) | 4.6 |
| 10 Sun 9/10/17 | 8 | 4.1 | 5.4 | 4.7 | 5.9 (feels-like would lift it) | 7.5 |
| 11 Sun 9/17/17 | 7 | 5.8 | 5.8 | 1 | 5.8 | 5.8 |
| 12 Sat 9/3/22 | 7 | 5.9 | 8.5 | 3.8 | 8.7 | 9.5 |
| 13 Sat 4/13/24 | 3 | 1.0 | 1.0 | 3.3 | 3.3 | 3.3 |

Mean error against the hand ratings: about 1.6 for v3's Crowd fight; about 1.1 for v4 before Gridlock and before feels-like temperatures. The review's shape holds. Its two pushbacks on the hand ratings (12 reads a 9, 11 reads a 6) are for Kylie.

## Proposed to adopt (the review's recommendations, with Claude's view)

| # | Change | Claude's view |
|---|---|---|
| 1 | **Date Crowd fight = contested seats:** `C = Σ cap(E) × D_E` over events ≥ 5,000 seats; `CF = 1 + 2.5 × log2(1 + C / S₀)`, `S₀` = 10,000 for LA (0.2 × median capacity of the city's 15k+ venues). | Adopt. The single biggest fix; it ends "one squeezed arena sets the night." |
| 2 | **Time factor decays, buffered once:** `t = clamp(0, 1, 1 − gap/4h)`, gap = later start − (earlier end + 1h). | Adopt. Fixes the Kings-before-the-World-Series bug. |
| 3 | **Asymmetric pull** replaces the Marquee lift and the verdict shield: `d = w × t × (m_c × cap_c) / (m_E × cap_E + m_c × cap_c)`, m = 1 / 1.1 / 1.3 / 1.6 for Routine / Notable / Major / Marquee. | Adopt. One mechanism instead of two, and it explains itself. |
| 4 | **Tiers stay** 0.7 / 0.35 / 0.15; Medium settled at 0.35; "same sport, same level, not rivals" (Chargers–Rams) is Medium. | Adopt. |
| 5 | **Conditions is a third reason:** per open-air event, heat `h = clamp(0,1,(T_eff − 85)/20)` with `T_eff` = feels-like at start, +8°F for 10:00–17:00 starts in strong sun; rain 0.25 / 0.5; cold `k = clamp(0,1,(20 − wind chill)/20)`; `w = max(h, r, k)`; event Conditions = 1 + 9w; date Conditions seat-weighted. Roofed venues 0. Source: Open-Meteo (forecast 16 days, archive to 1940). Frozen at the lock using the last forecast, never observed weather. | Adopt, with one flag: Open-Meteo is free for non-commercial use only. 🚩 A public launch would need their paid plan or another source. Fine for now. |
| 6 | **Combination:** `rating = max(R) + 0.25 × Σ (other R − 3)⁺`, capped at 10. | Adopt. Replaces louder-wins-plus-fixed-bump. |
| 7 | **Lightest Gridlock:** zones = venues within 2 km (or 5 min); load = seats whose arrival or exit windows coincide, plus 0.15 spill from zones within 12 min and 0.05 within 30; normal = largest venue in the zone plus the same spill from neighbours' largest venues; background by day and hour (weekday 4–7:30 pm 1.3, Friday 1.4, Sunday before 2 pm 0.9, rain 1.15); `s = clamp(1, 10, 1 + 7.5 × log2(background × load / normal))`. Strike/closure rule kept. One hand flag per venue: "strained." | Adopt. Needs only venue locations and a city type. The full zone design waits for a season of stamps. |
| 8 | **Occasion from facts** by points (final 4; later round 3; first round/play-in 2; opener 2; new market/stadium 3; farewell or Marquee tour opener/closer 3; rivalry 2; both ≥ .600 after game 40 or both ranked +1; sellout announced a day ahead +1; star debut/return +1); ≤1 Routine, 2 Notable, 3 Major, ≥4 Marquee. | Adopt the rule; the inputs we have today are playoff round, game number and (for college) nothing. Rivalry flags, standings and sellouts need data work. Start with what's known; label the rest. |
| 9 | **Floor:** 5,000 seats feeds everything; no 15k floor; no clustering in v1. | Adopt. Matches the Oct 4 review. |
| 10 | **Broad flag via Google Trends** (≥ 60% of the metro's top team's 12-month interest). | Keep the LA poll table for now; Trends is a manual lookup when a second city arrives. |
| 11 | **"Why" line templates** (lead with the reason that set the max, then its largest term; second clause only within 20%). | Adopt. |
| 12 | **Missing inputs:** default starts by type, capacity = listed max, weather absent → Conditions 1 with "weather not in yet"; a confidence label on each date: Firm / Likely / Early. | Adopt. Ends the dash. |
| 13 | **Calibration plan:** collect announced attendance (MLB, NBA, NHL, MLS, college; NFL), expected = median of the same team's same-season home games in the same bucket; hold out 20% plus one season. | Adopt as the next data job after the formula is in. |

## Kylie's rulings (Oct 5)
- **Hand ratings are not the target.** They stay in the data for comparison only. The formula is tuned to be accurate (attendance data, held-out dates), not to her feel. Her role: naming the considerations that belong in it.
- Open-Meteo's non-commercial limit is logged in `build-brief.md` under Cost milestones.
- Chargers Major vs. Notable, Dodgers–Braves Routine vs. Notable, and Conditions: arguments requested before ruling. **Build is on hold until she rules.**

## Pushbacks for Kylie to rule on
1. **Hand ratings.** The review says night 12 (9/3/22, 100°F day, four big events) reads a 9, not 7; night 11 (9/17/17) a 6, not 7; and night 1's USC "Extreme" looks result-shaped. If the hand ratings move, the fit improves; if they stand, they're the target.
2. **Chargers' first LA home game:** Major, not Notable, under the points rule.
3. **Dodgers–Braves, April 1, 2025:** Routine, not Notable (standings aren't live at game 5).
4. **Conditions in the rating at all.** The review says yes, by the definition "how hard the night was for fans." Kylie's own ratings already say yes.

## Build order (once approved)
1. Data fields the formula needs: occasion inputs on events (round, game, rivalry flag, opener/farewell, sellout-announced), `m` by occasion, durations and default starts by type, venue `strained` flag, LA zones from locations, the Broad-by-year table.
2. Crowd fight v4 in `src/data/formula/` with a printed table against the 13 nights.
3. Conditions with Open-Meteo (forecast for the next 16 days, archive for past dates, both cached in the schedule archive so stamps don't re-fetch).
4. Lightest Gridlock.
5. Combination, the "why" lines, the confidence label; replace the hand reads in the stamp/forecast pipeline; upcoming dates stop showing "—".
6. Tuning session on the 13 nights with the holdouts kept. Then the attendance collection job.
