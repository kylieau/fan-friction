# Postseason attendance: the research answer

Kylie's research, pasted Oct 7, 2026. Prompt: `docs/postseason-attendance-prompt.md`. Saved verbatim. What the app does with it: `docs/postseason-estimate-proposal.md`.

---

**I recommend a separate postseason estimate based on real playoff counts, with team-and-venue history taking priority once there is enough comparable data. Don't use "playoffs = capacity," and don't add a Game 3 or clinching-game bonus by default.**

The most important change is to store **capacity for that event's seating configuration**, not just one capacity per building.

There is an evidence limit: I found reliable individual counts and sellout reports, but not a consistent, audited league-by-round sellout census across all six leagues. Below, I distinguish documented examples from broader inferences. The examples—mostly from completed 2023–2025 postseasons—are evidence for the proposed rule, not measured 2026 probabilities.

**1. What the evidence supports by league**

For Fan/Friction, define "near capacity" as **announced attendance ≥95% of verified event capacity**. That 95% cutoff is a proposed product definition. Keep an independently reported "sellout" flag: sellout and occupancy percentage are not interchangeable.

- **MLB — strong late-round demand, meaningful early-round exceptions.** Tampa Bay announced only **19,704** for its October 3, 2023 Wild Card opener. Baltimore's 2024 Wild Card crowds were **41,506 and 38,698**, falling for the elimination game. These are clear reasons to avoid automatically filling every postseason ballpark. [AP/WUSF](https://www.wusf.org/sports/2023-10-03/rangers-beat-rays-4-0-al-wild-card-series-opener), [Baseball America](https://www.baseballamerica.com/stories/the-orioles-are-still-on-the-rise-after-latest-playoff-disappointment-but-have-questions-to-answer/)

  Later rounds provide strong sellout examples: Philadelphia's 2024 NLDS opener drew a reported sellout of **45,751**, and the Dodgers' NLCS clincher a sellout of **52,674**. The 2024 World Series averaged **50,621** across five games. [Philadelphia Inquirer](https://www.inquirer.com/phillies/phillies-score-nlds-mets-playoffs-wheeler-highlights-20241005.html), [AP](https://apnews.com/article/15a89ce97829e1bf83e861764f19a34c), [MLB](https://www.mlb.com/amp/press-release/press-release-2024-world-series-drives-big-results-across-global-viewership-merchandise-sales-attendance-and-social-media.html)

  **Assessment:** moderate evidence for a high-occupancy late-round starting point; weak evidence for any particular league-wide percentage. Keep Wild Card, Division Series, LCS and World Series separate.

- **NBA — strong support for near-full crowds, especially late rounds.** All **five 2024 Finals games were explicitly marked "Sellout"** in official scorer reports: Boston's three games announced 19,156 each; Dallas announced 20,311 and 20,277. That is a verified **5/5 for that Finals**, not a universal postseason rate. [Game 1](https://statsdmz.nba.com/pdfs/20240606/20240606_DALBOS_book.pdf), [Game 2](https://statsdmz.nba.com/pdfs/20240609/20240609_DALBOS_book.pdf), [Game 3](https://statsdmz.nba.com/pdfs/20240612/20240612_BOSDAL_book.pdf), [Game 4](https://statsdmz.nba.com/pdfs/20240614/20240614_BOSDAL_book.pdf), [Game 5](https://statsdmz.nba.com/pdfs/20240617/20240617_DALBOS_book.pdf)

  Indiana's 2024 conference-final Game 3 was also reported as a sellout. [NBA recap](https://www.nba.com/game/bos-vs-ind-0042300303/box-scoreundefined)

  **Assessment:** strong evidence for the cited Finals; moderate support for near-capacity defaults generally. I did not establish first-round or conference-final sellout frequencies. There is little justification for a large round multiplier where crowds already reach the ceiling.

- **WNBA — team, round and seating configuration matter substantially.** New York's seven 2024 home playoff games drew **12,115 and 11,003 in Round 1; 14,015 and 14,321 in the semifinals; and 17,732, 18,046 and 18,090 in the Finals**. [Liberty attendance summary, final page](https://cdn.wnba.com/sites/1611661313/2025/05/liberty_may_9_2025_vs_connecticut-sun_game_notes-1.pdf)

  Crucially, a **9,442** Liberty semifinal crowd in 2023 was officially called a sellout. Minnesota opened its upper bowl for the first time that postseason for 2024 Finals Game 3. A smaller crowd therefore does not necessarily mean weak demand or unsold available seats. [Official 2023 gamebook](https://statsdmz.nba.com/pdfs/20230924/20230924_CONNYL_Book.pdf), [Star Tribune](https://www.startribune.com/minnesota-lynx-new-york-liberty-wnba-finals-la-velle-e-neal-iii/601163472)

  **Assessment:** strong evidence against using NBA-arena capacity automatically. Strong evidence for different crowd sizes by round in this Liberty season; weak evidence for a league-wide round effect or sellout rate.

- **NHL — near-full crowds are a reasonable expectation, but not a guarantee.** Dallas's 2024 first-round home Games 1, 2, 5 and 7 were described as sellouts in team notes: **4/4 for that home series**. Florida's 2024 Final opener drew a reported sellout of **19,543**. [Stars postseason notes, printed pages 65–66](https://media.d3.nhle.com/image/private/t_document/prd/qwuknsyz29icueeonwar.pdf), [NHL](https://www.nhl.com/news/nhl-morning-skate-for-june-9)

  An older counterexample: Ottawa's 2017 conference-final Game 6 drew **18,111**, short of a sellout despite being an elimination game. [Official event summary](https://media.d3.nhle.com/image/private/t_q-best/prd/zt47zn8hevhckflqs65b.pdf), [Arena Digest](https://arenadigest.com/2017/09/08/ottawa-senators-reduce-seating-capacity/)

  **Assessment:** moderate support for high occupancy from the first round onward; insufficient evidence to price in a meaningful conference-final or Final attendance uplift.

- **NFL — high occupancy is supported across home rounds; the Super Bowl needs a separate rule.** Detroit announced **66,367** in its January 2024 Wild Card game, **66,001** in the divisional round, and **64,774** in its January 2025 divisional game. All three exceeded 95% of Ford Field's published 65,000 seats, although the counts above that seating figure also expose the denominator problem. [Lions media guide](https://static.www.nfl.com/league/apps/league-site/media-guides/2025/DET.pdf), [Ford Field](https://www.fordfield.com/stadium-info/about-ford-field)

  Philadelphia's January 2025 NFC Championship announced **69,879**. [NFL Fact & Record Book](https://static.clubs.nfl.com/image/upload/patriots/fvc6qgwyqlztq1muztpi.pdf)

  **Assessment:** moderate support for near-capacity expectations in Wild Card, divisional and conference championships; these selected examples do not establish a league-wide rate. NFL games are single elimination, so series-game adjustments do not apply. Treat the Super Bowl as a destination event, even when a participant happens to play in its own stadium.

- **MLS — avoid a universal capacity rule, especially early.** Orlando's October 27, 2024 first-round home match drew **17,787**; its subsequent conference final was officially sold out. The 2024 MLS Cup was a sellout of **26,812**. [Sky Sports match record](https://www.skysports.com/football/orlando-city-sc-vs-charlotte-fc/stats/522988), [Orlando announcement](https://www.orlandocitysc.com/news/inter-co-stadium-sold-out-ahead-of-orlando-city-sc-s-first-ever-eastern-conference-finals-match), [Galaxy match report](https://www.lagalaxy.com/news/match-report-la-galaxy-claim-sixth-mls-cup-with-2-1-win-over-new-york-red-bulls-at-dignity-health-sports-park-on-saturday-night)

  **Assessment:** moderate evidence of early-round variability and stronger late-round demand; weak evidence for a precise league-wide frequency. Separate Wild Card, first round, conference semifinals, conference finals and MLS Cup. Large shared football stadiums need their own configuration handling.

**2. Game number should not change the estimate by itself**

The evidence does not support a universal positive "clinch bonus":

- New York's potential first-round clincher in 2024 drew **11,003**, below Game 1's **12,115**.
- Dallas's 2024 Finals Game 4, when Boston could clinch, drew **20,277**, slightly below Game 3's **20,311**.
- Baltimore's 2024 elimination game also drew fewer than its opener.

Those comparisons come from the sources above. They disprove an automatic increase; they do **not** establish that clinchers reduce attendance.

Game number also mixes together different effects: home opener, weekday, ticket-selling time, elimination risk and venue changes. "Game 3" may be a team's first home game.

**Launch with game-number and clincher factors of 1.00.** Record those attributes for later testing. Any future adjustment should compare similar games within the same team, venue configuration and round, and distinguish a home-team clincher from a visiting-team clincher.

**3. Public attendance sources and their limits**

My preferred evidence order is **final official gamebook → official box score → team statistical release → reputable secondary box score**. Resolve disagreements rather than averaging them.

- **NBA/WNBA:** official scorer PDFs are particularly useful because they contain attendance and sometimes an explicit sellout designation. League game pages also expose attendance, but some pages returned incomplete text during this research. Team media guides help backfill historical series.
- **NHL:** official game summaries/event summaries provide attendance. Team notes are useful cross-checks. The league's [historical attendance page](https://records.nhl.com/history/attendance) provides postseason totals, but totals alone cannot establish sellout frequencies.
- **NFL:** official gamebooks explicitly report **paid attendance**. Fact books and team guides provide historical playoff records. [Example gamebook](https://static.www.nfl.com/gamecenter/bcd3e695-cbd8-11ef-88ab-663bf7d456c2.pdf)
- **MLB:** official box scores and team postseason notes are preferred. Baseball-Reference is useful for checking historical game attendance, rather than relying on regular-season attendance tables.
- **MLS:** club match reports and league statistical releases are useful. FBref's [2024 fixture table](https://fbref.com/en/comps/22/2024/schedule/2024-Major-League-Soccer-Scores-and-Fixtures) includes playoff rounds, attendance and venues.
- **ESPN:** useful cross-league secondary coverage, but attendance can be missing or disagree with another record. Its displayed capacity percentage should not become your venue-capacity authority.
- **Basketball-Reference, Hockey-Reference, Baseball-Reference, FBref and Pro-Football-Reference:** useful historical checks where fields exist; coverage is not proof of unrestricted reuse.

**For production, public visibility is not a data license.** The relevant restrictions I found include:

- Sports Reference's policy says not to build websites/tools from scraped data without permission, and notes that some underlying licenses prevent redistribution. Its terms distinguish limited attributed reuse from restricted database and other uses. [Data-use policy](https://www.sport-reference.com/data_use.html), [terms](https://www.sports-reference.com/termsofuse.html)
- NBA/WNBA terms restrict commercial use of the statistics they define and comprehensive regularly updated statistical databases. Confirm how attendance and derived forecasts are covered. [NBA terms](https://www.nba.com/termsofuse), [WNBA terms §9](https://www.wnba.com/terms-of-use)
- MLB prohibits automated scripts collecting information from its digital properties; NHL prohibits unauthorized scraping. [MLB terms](https://www.mlb.com/official-information/terms-of-use?bpexternal=true), [NHL terms](https://www.nhl.com/info/terms-of-service)
- MLS terms prohibit harvesting information for commercial purposes. [MLS terms](https://www.mlssoccer.com/legal/)
- NFL gamebooks contain a notice restricting use beyond media coverage without written permission. [Example notice](https://static.www.nfl.com/gamecenter/bcd3e695-cbd8-11ef-88ab-663bf7d456c2.pdf)
- ESPN directs users to Disney's terms; that is not an affirmative commercial-feed permission. [ESPN terms guidance](https://support.espn.com/hc/en-us/articles/360035445091-Terms-of-Use)

Before selecting an ingestion source, obtain permission or a license covering **historical storage, automated updates and displayed derived estimates**. An accessible endpoint or a Stathead subscription should not be assumed to supply those rights.

**4. The rule I would implement**

These are proposed launch settings, **not empirically validated thresholds**.

1. **Identify the actual event.** Require league, season, round, actual venue, date and home/neutral status. Keep "if necessary" games explicitly conditional.

2. **Resolve event capacity, \(C\).** Use the expected saleable configuration for that game, including authorized standing room where relevant. A building's generic maximum is only an outer bound.

3. **Select real historical comparables.** Start with the previous three completed postseasons plus completed games in the current postseason. Exclude attendance-restricted games, relocations and incompatible configurations. Keep rounds separate initially; don't fragment the already-small sample by month and weekday.

4. **Calculate historical occupancy:** announced attendance divided by that historical game's verified capacity. Flag counts exceeding capacity for investigation; do not silently rewrite the announced count.

5. **Choose the starting point:**
   - **Eight or more comparable team home games across at least two postseasons:** use the team's median occupancy.
   - **Three to seven:** blend team median with the league-round median, with team weight \(n/8\).
   - **Zero to two:** use the league-round median.
   
   Require the league comparison pool to contain at least **20 games, four teams and two postseasons**, with comparable configurations. If that pool is unavailable, don't substitute an invented percentage.

6. **Convert occupancy to people:**  
   **Estimate = min(event capacity, event capacity × starting occupancy × season factor).**

   Start the postseason **season factor at 1.00**. Reuse your existing season-drawing adjustment only after checking it against historical postseason forecasts. Apply it once, and don't interpret regular-season growth at an already-full venue as additional available seats.

7. **Use no opponent adjustment initially.** Three regular-season meetings do not establish a postseason opponent effect; three playoff games can all belong to one series. Add this only if independent series provide repeatable evidence and it improves held-out predictions.

This preserves your existing principles: real attendance inputs, medians, a season adjustment when justified, a hard capacity ceiling and an explicit estimate. **Never write the prediction into the announced-attendance field.**

**Yes, team history should override a league rule—but configuration and recency outrank sample size.** Eight old games under a curtain should not override a newly opened upper bowl. Conversely, a documented sellout for the upcoming event can supersede historical demand assumptions when the relevant capacity is verified; it still is not a final announced count.

**5. Range, fallback and friction behavior**

Use the distribution of comparable historical occupancies:

- With **20+ comparable games**, start with the **10th–90th percentiles**.
- With fewer, use the **observed minimum–maximum**.
- For the three-to-seven-game blended estimate, use the combined team and league comparison pool for the range.
- Apply any validated season factor consistently, include the point estimate inside the interval, and cap both ends at \(C\).
- Add a provisional minimum uncertainty allowance of **±5% of \(C\)** before clipping, so repeated sellout counts do not imply certainty. This allowance needs backtesting.

Call this a **planning range**, not an "80% confidence interval," until actual forecast coverage has been measured.

Show **"Estimate unavailable"** when the venue/configuration is materially uncertain, the fixture cannot be verified, neither team nor league history qualifies, or a relocation/restriction makes the model inapplicable. Unknown must remain distinct from zero. "No count yet" can be reserved for the missing final announced count.

For friction, retain your existing **5,000-person eligibility threshold**:

- Low end ≥5,000: stronger evidence that the event clears the threshold.
- Range straddles 5,000: clearly mark the estimate as uncertain.
- No estimate: don't silently classify the event as low friction.

Attendance is a demand proxy; it does not by itself establish the amount of traffic or transit strain.

**For the Liberty–Dream example:** verify the season, round and actual host venue first. The 2024 Liberty semifinal median was **14,168**, calculated from 14,015 and 14,321—not 18,000. But two games are insufficient for an independent team override, and their configuration must match. They are useful historical evidence, **not a proposed final estimate for an undated fixture**.

**6. Edge cases to handle explicitly**

- **Neutral or relocated games:** use actual venue geography and a separate model. The January 2025 Vikings–Rams playoff moved from California to Arizona. [Team announcement](https://www.vikings.com/news/rams-wild-card-location-arizona-state-farm-stadium-la-wildfires)
- **Shared buildings:** key capacity by sport, tenant, configuration and effective date. Another tenant's attendance is not a comparable.
- **Curtains and closed upper decks:** model available inventory; opening more seats changes the capacity assumption.
- **WNBA in NBA arenas:** never inherit the NBA tenant's full-house expectation. The Liberty's officially sold-out 9,442 semifinal illustrates why.
- **MLS in football stadiums:** distinguish a reduced soccer configuration from a fully opened stadium.
- **Short notice or late start-time announcements:** flag uncertainty and re-evaluate when details settle. There is not enough evidence here for a standard percentage deduction.
- **Conditional games:** a crowd estimate is conditional on the game occurring. Don't multiply it by the probability that the series reaches that game.
- **Pandemic restrictions, renovations, standing room and temporary seating:** maintain dated capacities; exclude incompatible history.
- **Watch parties, tailgates and nearby celebrations:** represent them separately when supported by evidence. They can create friction beyond the ticketed crowd without belonging inside its attendance estimate.

**Self-audit**

- **Not established:** league-wide sellout or ≥95%-occupancy rates by round for all six leagues. The NBA 5/5 and NHL 4/4 examples have explicit, narrow denominators. They should not be generalized into "100% of playoffs sell out."
- **Thin evidence:** the size of a round effect, clincher effect, short-notice penalty or transferable regular-season season factor. Later-round crowds also reflect which teams advance and which sections open.
- **My design choices:** 95% for "near capacity"; three seasons of history; the 3/8/20-game thresholds; four teams; \(n/8\) weighting; percentile endpoints; and the 5% uncertainty allowance. None is a fitted result.
- **Source-quality finding:** the Stars notes describe Game 5 as 18,532 but give 18,333 in its summary line. Even official notes require checks against final game reports. [Conflicting fields](https://media.d3.nhle.com/image/private/t_document/prd/qwuknsyz29icueeonwar.pdf)
- **Check by hand before building:** actual playoff seating configurations; the Liberty fixture's identity; source licensing; announced versus paid versus turnstile definitions; and recent changes in team demand.
- **Validate before launch:** backtest chronologically using only information available before each game. Measure crowd-count error, range coverage and mistakes around 5,000, separately by league and round. Compare against both your existing regular-season estimate and a simple capacity baseline.
