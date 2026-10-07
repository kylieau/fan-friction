# Retune analysis (Oct 6, 2026): what three seasons of attendance say about the constants

Kylie approved the review's §11 test on Oct 6. This is the result and a recommendation. Nothing in the formula was changed. The script is `scripts/retune-analysis.mjs` (read-only; `node scripts/retune-analysis.mjs`).

## The test
For every regular-season home game of the 16 Los Angeles teams in the collected seasons (1,405 games, 2023 through the 2025-26 winter seasons):
- **Expected attendance** = the median of that team's *other* games that season in the same bucket (day class and month, falling back to day class, then the season). Leave-one-out, so a game never predicts itself.
- **Shortfall %** = (expected − announced) / expected. Positive means the game drew less than its norm.
- **D** = the formula's crowd-fight share for that game, computed against the other LA home games that day, sized by the calibrated expected draws. Concerts are not in this data, so D is a floor: a night with a stadium show reads as quieter than it was.
- Fit shortfall on D, overall and by league; hold out 20% of dates and the whole 2025 season; repeat with the Medium tier weight at 0.15, 0.2, 0.35, 0.5 and 0.7.

## What came out
- 59% of games had another LA home game the same day.
- Games with no competition drew **1.6% above** their norm on average; games with 0.1 < D ≤ 0.25 drew **4.5% below**; 0.25 < D ≤ 0.5 drew **6.0% below**. The direction the formula assumes is there, and the size matches the German studies the review cited (a few percent of attendance).
- **Within leagues the sign is right almost everywhere** but the effect is small and noisy: NFL r = 0.32 (50 games), college football 0.13, college women's basketball 0.13, college men's 0.10, NBA 0.08, MLB 0.06, NHL 0.05. MLS (−0.07) and NWSL (−0.05) go the other way, slightly.
- **Pooled across leagues the correlation is about zero**, and the held-out fits predict nothing (correlation of predicted and actual ≈ 0). Each league's baseline and crowd mix swamp the few-percent effect.
- **The Medium tier weight is not identifiable from this data.** The correlation barely moves between 0.15 and 0.7, exactly as the review predicted ("only the ratios between tiers are identifiable, and not from 13 nights").

## What this means
The attendance series confirms the shape of the model (more crowd fight, bigger shortfall, by a few percent) and confirms the review's warning that announced attendance is a muted signal: MLB and NFL count tickets distributed, season tickets dominate, and the biggest clubs sell out regardless. It does not give a number to replace any placeholder constant with. A retune on this data would be fitting noise.

## Recommendation
1. **Keep the placeholders** (tier weights 0.7 / 0.35 / 0.15, event scale 14, S₀ 10,000, pull 1 / 1.2 / 1.6 / 2.5). Label them as placeholders, as the event page already does.
2. **Keep the calibrated expected draws.** That part of the calibration is solid and already changed what mattered (UCLA football at 42,000, not 89,702).
3. **Revisit in a season**, once the nightly schedule archive holds a year of LA nights *with concerts*, and the results pass has a season of crowds for the same nights. Then D is no longer a floor, and the test can be run on the real nights rather than a sports-only rebuild. The script is ready for that; it only needs to read `data/schedule-archive` and `data/results` instead of rebuilding dates from `data/attendance`.
4. **Two cheaper signals to try in the meantime** (not built): secondary-market prices on the day (a cleaner read of demand than tickets distributed, but 🚩 the data costs money or has restrictive terms), and turnstile counts where a team publishes them (rare).

## Data notes
- Soccer: ESPN marks a finished match `STATUS_FULL_TIME`, not `STATUS_FINAL`. Both the collector and the nightly results pass skipped every Galaxy, LAFC and Angel City match until this was fixed on Oct 6; 149 matches were added and the medians recomputed (Galaxy 21,707; LAFC 22,127; Angel City 18,102).
- UCLA and USC basketball times are often placeholders in ESPN's past seasons too, so their time factor is estimated more often than other sports'.
