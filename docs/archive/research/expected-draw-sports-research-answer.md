# Research answer: sports expected-draw estimates (v1)

Answer to `docs/archive/research/expected-draw-sports-research-prompt.md`. Pasted by Kylie from Claude chat, Oct 6, 2026. Not a product lock — propose → her OK before build.

## 1. Addenda (self-audit)

**What the literature says.** These findings shape most of the rule below:

- **Home quality matters more than the visitor.** In one game-level MLB study, a 1% rise in home winning went with about a 1% rise in attendance, against about 0.3% for the visitor's winning. Only 7 of 30 clubs lifted crowds significantly as visitors.
- **Opponent effects are muted for high-draw teams.** High-attendance MLB teams responded less to who was visiting. Lower-attendance teams reacted more to visitor quality, stars, and game uncertainty.
- **Promotions work, but unevenly.** Bobbleheads raised weekday crowds about 25% and weekend crowds about 9% in 2012 data. As many as 13 teams saw no clear effect, and one drew fewer fans. Weekend promotions moved attendance far less than weekday ones, and several giveaway types had no effect.
- **Weather is mostly seasonal.** Attendance measurably falls on hot and cold days. But one analysis attributed one-half to three-quarters of April's shortfall to weather, so month medians already absorb most of it.
- **"Announced" is not bodies.** Since 2000, all MLB clubs report tickets sold. The NFL and MLS use tickets distributed. In 2017, FBS college football scanned about 71% of announced attendance on average.
- **Postseason counts differently.** MLB postseason figures count all tickets, so a sold-out playoff game usually lists more than a sold-out regular-season game.
- **New buildings help, then fade.** New NHL arenas lifted demand 15–20% in early years, and the effect was gone by about year eight. Dutch football found the lift persisting.
- **Star effects are real but weakening.** Fans' response to star MLB pitchers has declined considerably over time. In the NBA, even one visiting superstar raises attendance, more so for weaker home teams.

**Expanded signal list**

| Signal | Effect / evidence | Live or churny? Free? | Verdict |
|---|---|---|---|
| Day class, month | Strong, consistent | Static schedule; free | **v1** (exists) |
| Holidays (Memorial Day, July 4, Labor Day) | Weekend-like lift | Static; free | **v1**, treated as Sat/Sun |
| Home opener | Strong spike | Static; free | **v1**, its own class |
| Current-season level (this season's crowds vs baseline) | Proxy for home quality, novelty, league growth | Own announced data | **v1** |
| Same opponent | Real but modest, concentrated in a few visitors | Own announced data | **v1**, as a limited multiplier |
| Sellout / capacity censoring | Required for correct method | Own data + capacity | **v1** rule |
| Competition type (preseason, cups, playoffs, if-necessary games) | Required | Schedule | **v1** classes |
| Venue keying (shared, temporary, moved games) | Required | Schedule | **v1** |
| Structural breaks (2020, capacity-limited 2021, strikes, 2024 college realignment) | Required | Calendar | **v1** exclusions |
| Doubleheaders, makeups | Required | Schedule | **v1** |
| Day vs night (MLB weekdays) | Moderate | Static | v1.1 if N allows |
| Home standings / form | Strong, but redundant with season level | Daily churn | Park |
| Visitor stars / quality | Weak to moderate (stronger in NBA) | Churns with trades | Park |
| Promotions | Strong in MLB weekdays; team-specific | Per-team scraping | Park |
| Weather | Real at the turnstile, weak on tickets sold | Daily churn; double-counts Conditions | **Reject** for crowd size |
| Ticket prices, secondary market | Strong forward signal | Paid or against terms of service | Park |
| Starting pitcher | Small and declining | Day-of churn | Reject |
| Betting odds / outcome uncertainty | Weak, mixed | Churn | Reject |
| Competing events the same night | — | — | **Reject**: circular with friction |
| Hand-made rivalry flags | Covered by opponent history | Curated | Reject |
| TV blackouts, macro economy, market size | Negligible game-to-game, or already in the team's median | — | Reject |

**What the starter list missed:** competition classes, home openers, holidays, venue keying, structural breaks, sellout censoring, doubleheaders, conditional playoff games, differences in how leagues define "announced," and the risk that same-night competing events make the model circular with friction.

## 2. Recommended v1 rule

**In plain language:** start from the team's typical announced crowd for that kind of date at that venue. Adjust for how this season is going once there's enough of it. Nudge for the opponent only when history is deep and consistent. Cap at the building, round it, and label it.

**Step 0: decide whether to estimate at all.** Show "no estimate" (with a reason) for:
- neutral-site or international games
- new franchises or venues with too little history
- preseason or exhibition games with fewer than 3 past comparable games
- competitions with no history
- "if necessary" playoff games until they're confirmed
- away games hosted outside covered cities

**Step 1: baseline.** Take the median announced crowd keyed by team × venue × competition × day class × month.
- Use the last 3 complete normal seasons. Exclude 2020, capacity-limited 2021, strike seasons, and pre-realignment college seasons.
- Holidays count as Sat/Sun. The home opener uses the median of past openers (N≥3).
- If there isn't enough data, fall back in order: drop month, then use the team-venue season median, then show no estimate.

**Step 2: season level.** Once this season has enough home games, multiply by the median ratio of this season's announced crowds to their baselines.
- Starting minimums, set once: MLB 15, NBA/NHL 10, WNBA/MLS 6, NWSL 5. None for NFL or college, which have too few home games.
- This is how home-team quality, new stars, honeymoons, and league growth enter the estimate, using announced data rather than a standings feed.

**Step 3: opponent ratio (Kylie's question).** Yes, include it, but as a multiplier and never as an override.
- For each past home game against that franchise, compute its announced crowd divided by that game's own baseline. Take the median of those ratios.
- Apply it only with **at least 3 games across at least 2 seasons** within the last 5 seasons. For MLB, require at least 2 different series, since games in one series share a weekend, weather, and promos.
- Shrink the ratio toward 1 by n/(n+3), using one fixed constant.
- Skip this step entirely for near-sellout teams. Their crowds are capped, so the ratios are just noise.

**Step 4: ceiling.** The ceiling is the larger of listed capacity and the highest past regular-season announced crowd at that venue (standing room can exceed capacity). For teams that usually sell out, use their typical near-capacity figure.

**Step 5: round and show a range.** Round to the nearest 1,000 (nearest 500 under 10,000). The range is the middle half of the comparable past games.

**Step 6: friction threshold.** An estimate feeds friction only if the **low end of its range** is at least 5,000. This keeps borderline games from making quiet nights look busy.

**Why a multiplier instead of an override:** A raw same-opponent median inherits the dates those games happened to fall on. If the Yankees always visit on summer weekends, an override counts the weekend and summer twice. N is tiny, so overrides swing wildly and jump abruptly when N crosses the threshold. They also go stale across team cycles. The ratio isolates the opponent effect and drifts gracefully back to 1.0 when history is thin.

**Failure modes**

| Case | Behavior |
|---|---|
| Expansion opponent | No ratio; baseline only; the label doesn't mention the opponent |
| Rare visitor (interleague, NFL cross-conference) | No ratio |
| Ratio built around a star who has since left | Recency window and the 2-season minimum limit the damage; this is a known residual risk |
| College buy games, rotating opponents | No ratio |
| Conference realignment | Reset opponent history at the realignment date |
| Teams schedule promos on weak dates | Promo effects leak into the opponent ratio; accept for v1 and watch bias by opponent |
| Renamed or relocated franchise | Key history by franchise ID |

**Sport differences**

| League | Opponent ratio? | Season level? | Notes |
|---|---|---|---|
| MLB | Yes; count series, not games | Yes | Weekday day games; a traditional doubleheader is one crowd, a split doubleheader is two; tickets sold |
| NBA, NHL | Only non-sellout teams | Yes | Many crowds at capacity; NBA Cup group games count as regular season |
| NFL | No | No | Key by team × venue (shared buildings like SoFi and MetLife); preseason is its own class; tickets distributed |
| MLS, NWSL | Rarely (one home meeting per year) | Yes | Key by venue (big-stadium moves); cups are separate competitions; expansion teams have no history (e.g., San Diego FC) |
| Women's pro leagues | Rarely | Yes, essential | Rapid growth means a shorter window; games moved to bigger arenas need venue keying |
| College football | No | No | Use recent-seasons home median since realignment; tickets distributed include comps |
| College basketball | No | Optional | Many games under 5,000, so the threshold rule matters most; winter break shows up in month |

**Playoffs, rivalries, promotions**
- **Playoffs:** special-case them. Use the median of past home playoff crowds at that venue (N≥3), or else size by building with a sizing label.
- **Rivalries:** no flag. The opponent ratio captures them when history exists.
- **Promotions:** keep them out of the number. A later "promo night" note that doesn't change the number is fine.

**Away games:** leave them blank for v1, but resolve to the host. Dodgers at Padres is a Padres home game, so estimate it there and dedupe so it appears once. Away games in uncovered cities show "Away game, not estimated."

**Labeling principles**
- "Estimated" travels with the number everywhere: cards, the friction breakdown, exports.
- Show the basis, e.g. "About ~X · est. from N home games, Fridays in April, 2023–25." Add "adjusted for this season" or "vs this opponent" only when those steps actually ran.
- Use a tilde, round numbers, and a muted style, distinct from announced figures.
- When the announced crowd arrives, it replaces the estimate. Keep "we estimated ~X" in the detail view.
- Capacity sizing reads: "Sized by building, not a crowd count."
- The friction read discloses the mix, e.g. "2 of 3 crowds estimated."
- Add a one-line footnote: teams announce tickets sold or distributed, not people through the gates.
- Avoid certainty words like "projected," "expected," or "will draw." Prefer "typical" and "estimated."

**Bias risks and guards**
1. **Big-brand visitors overstated.** Opponent ratios built in star seasons can inflate road games. Guard with shrinkage, recency, the 2-season minimum, and an error report by opponent.
2. **League definition gaps.** College, NFL, and MLS figures count distributed tickets, so college Saturdays look busier than the actual bodies. Label this; don't invent a discount.
3. **Coverage bias.** LA has deep history, while thin cities fall back to capacity, which overstates crowds. Report coverage per city and league.
4. **Growing leagues understated.** Women's leagues and expansion teams get dragged down by older medians. The season-level step and a shorter window help; watch signed error by league.
5. **Threshold noise.** Low-draw leagues near 5,000 can flip in or out of friction. The low-end rule handles this.
6. **Censoring.** Sellout medians hide true demand. That's fine for crowd size, but it's why opponent ratios are skipped for those teams.

## 3. Parked list

| Signal | Why parked | What would unpark it |
|---|---|---|
| Promotions | Team-specific, sometimes null, needs per-team scraping | A stable free feed plus a per-team backtest gain |
| Weather | Already in Conditions; tickets are mostly bought ahead; daily churn | A future "people in seats" estimate |
| Standings / form | Covered by season level; daily churn | Season level failing the backtest in some league |
| Visitor stars | Trades and injuries churn; partly in the opponent ratio | NBA/WNBA residuals that track star visitors |
| Day/night split | Splits already thin samples | An MLB backtest gain |
| Secondary market | Paid or against terms of service | A free source |
| Away games in uncovered cities, concerts, route events | Out of scope | City expansion or a separate brief |

## 4. Evaluation plan

- **Target:** the announced crowd for the same game, published later. Never friction ratings.
- **Rolling backtest:** hold out the last 2 normal seasons. Each prediction uses only data from before that game's date.
- **Build up in steps:** capacity (today's fallback), then baseline, then season level, then opponent ratio. A step stays, per league, only if it beats the one before it.
- **Metrics per league, team, day class, and top opponents:**
  - median absolute percent error (fair across leagues of different sizes)
  - mean absolute error in fans
  - mean signed error, to catch bias
  - range coverage (about half of announced crowds should land inside the middle-half range)
  - accuracy at the 5,000 threshold
  - share of games that get an estimate
- **Pre-register:** set the minimums, shrink constant, and window before running. Run once. If constants change, the next season becomes the new holdout.
- **Prospective log:** snapshot each estimate about a day before the game and score it when the announced figure lands. This is free and the most honest check.
- **Report separately:**
  - Sellout teams, so their easy accuracy doesn't flatter the averages.
  - How often a night's friction tier changes, purely as a diagnostic and never as a target.

## 5. Open questions for Kylie

1. Should estimates feed friction once the backtest passes, or be display-only at first?
2. Is a caveat enough for college "tickets distributed" inflation? I'd recommend the caveat and no invented discount.
3. Baseline window: 3 seasons, or 2 for fast-growing women's leagues?
4. Should users see the range, or only the rounded number?
5. Should superseded estimates stay visible after the announced crowd arrives?
