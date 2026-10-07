# Postseason crowd estimate: a proposal

Written Oct 7, 2026 from Kylie's research (`docs/postseason-attendance-answer.md`). Nothing here is built. Propose, then wait.

## The gap today

A playoff game gets no estimate: the rule skips any game with a round label, so the page shows "No count yet" and the read sizes it by the building. Only MLB playoff crowds are on file (78 games, six clubs); the ESPN pull takes the regular season only.

## What I checked

ESPN's team schedules carry announced attendance and the round name for playoff games in every league the app covers (NBA, WNBA, NHL, NFL via `seasontype=3`; MLS in the plain schedule with its own round names). Same feed, same terms as today; no new source and no cost. MLB's feed already supplies its own. The research's licensing notes are real and apply to the feeds the app already uses; they belong to the public-launch conversation, which stays out of this one unless Kylie raises it.

## The rule proposed (the research's, fitted to the app)

Separate from the regular-season rule, as the research recommends. Occupancy, not people, is what is learned, because a playoff crowd is mostly a question of how full the building gets.

1. **Comparables:** the team's own home playoff games, last three completed postseasons plus this one, same building. Rounds kept apart in four bands: first round / wild card, second round / division series, conference or league final, the final. Preseason-style day classes are not used (the sample is too small).
2. **Occupancy** = announced ÷ the building's capacity for that sport on that date. A count above capacity is kept and flagged, not rewritten.
3. **Starting point:**
   - 8+ team games in that round band across 2+ postseasons: the team's median occupancy.
   - 3–7: blend with the league-round median, team weight n ÷ 8.
   - 0–2: the league-round median, pooled across the covered cities' teams, only if that pool has 20+ games, 4+ teams, 2+ postseasons. Otherwise **no estimate** (today's behaviour), never an invented percentage.
4. **People** = min(capacity, capacity × occupancy). Season factor 1.00 and no opponent factor, until a check shows either helps. No game-number or clinch factor (the research found none).
5. **Range:** 10th–90th percentile of the comparables with 20+, else min–max, widened by ±5% of capacity, capped at the building. Shown as today's "Middle half" line? No: this is a wider band, so the page says **"Likely 15,000–18,000"** for playoff games, and the ⓘ card gets one sentence on it.
6. **Friction gate:** the low end, as for every game (S1). A range straddling 5,000 shows as uncertain; no estimate never reads as quiet.
7. **Edge cases in v1:** a neutral or moved game takes the venue the feed names and no estimate if that venue is another team's (as the Rams' 2025 wild card at Arizona would); a WNBA team learns its own occupancy against the arena's full capacity, so a curtained upper bowl shows up as low occupancy rather than a false full house; a shared building's other tenant is never a comparable.

## How it would be checked before locking

As every factor: predict each team's **last postseason** from its earlier ones, and score against the building (today's fallback) and against the regular-season rule applied blindly. Pass only if the error falls and the range covers most games. Written down before the run; constants above not re-tuned.

## What to build, in order

1. Extend the attendance pull to playoff games in every league (one flag per row: round band, game number, home or neutral). Cost: a few minutes of feed calls; no code on screen changes.
2. The check script and its result in `docs/postseason-check.md`.
3. Only if it passes: the rule in `expectedDrawBuild.ts`, the "Likely" range on the event page, the ⓘ sentence.

## What I need from Kylie

1. OK to pull playoff crowds from the feeds (same feeds as today).
2. The four round bands as named above, or the research's finer split (which the covered cities' sample cannot fill).
3. "Likely X–Y" as the wording for a playoff range, or keep "Middle half" and say nothing about the difference.
