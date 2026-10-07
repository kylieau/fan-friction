# Research brief: what makes one game draw more than another like it?

Drafted Oct 7, 2026 by Claude Code, after Kylie's comments on the sports estimate (`docs/expected-draw-decisions-oct7.md`). A follow-up to `docs/archive/research/expected-draw-sports-research-answer.md`, which she found too narrow on promotions, standings, stars, attention and rivalry. Save the answer in full beside this file as `docs/archive/research/expected-draw-demand-signals-answer.md`. Answers go to Claude Code for a proposal, then Kylie's OK. Do not build from this file alone.

You are an outside researcher. You do **not** have the app's code. Work from the context below. Prefer "no free source" over a workaround. Every source needs a link, whether it is free, whether its terms allow a small personal app to read it, and **how far back its history goes**. Tables beat prose.

## Context
Fan/Friction is a personal log of live events. Each night carries a friction read built partly from how big each event's crowd will be. For upcoming home games the app estimates the crowd from the team's own past announced attendance: the typical crowd for that day of the week and month in that building, over the last three seasons, capped at capacity, rounded and labeled *estimated*.

**Every extra factor must be testable:** the app hides past games, predicts them from earlier data only, and keeps a factor only if it makes those predictions closer to the announced crowds, league by league. So a factor needs **history** (values for past games, 2022 onward at least), not just today's value. A factor with no history can be recorded from now on and tested after a season.

Leagues: MLB, NBA, WNBA, NHL, NFL, MLS, NWSL, college football and basketball (men's and women's). Cities: Los Angeles, San Diego, Seattle, New York, Montreal next. Free sources only; flag anything paid. **A game's own result never counts**; standings and results from before the game do (owner's rule).

Already confirmed free: MLB's official schedule feed lists each game's promotions, past games included; MLB serves standings by date; Wikipedia publishes daily page views per article back to 2015.

## Questions

**1. Promotions in every league, not only MLB.** For the NBA, WNBA, NHL, NFL, MLS, NWSL and big college programs: where are a team's promotional nights published (giveaways, theme nights, fireworks, discount nights)? Is there any central or league-wide listing? Can past seasons' promotions be recovered, e.g. from archived snapshots of team promo pages? Which promotion types move attendance in the research, and in which leagues?

**2. Standings and storylines.** How does a team's position affect attendance across the season: early, mid, late, and in a playoff race? Does last season matter: a reigning champion, a run to the final, a long drought ended, a new star signed, a coach or owner change? Give definitions that can be set from public facts, not judgment.

**3. Star players: a better definition than "All-Star last season."** Compare candidate lists, each by season, with history: All-Star and All-League selections; MVP voting; the leagues' published jersey-sales rankings; max or supermax contracts (where reported free); fantasy rankings; Wikipedia page views. Which tracks fan draw best (not on-field value)? Should the visiting star, the home star, or both count? How should injuries or rest be handled, given that they're often announced on the day?

**4. Attention.** The owner thinks social media attention would show what the calendar can't. Which attention signals are free, allowed, and have history: Wikipedia page views (team, player, the matchup's rivalry article), Google Trends (no official API; say whether reading it is allowed), Reddit, YouTube, others. X, Instagram and TikTok APIs are paid or closed; confirm, and say if any free route is legitimate. Is there research tying attention to attendance?

**5. Rivalry and history.** Recent bad blood and deep history both matter (owner's examples: a heated division rival lately; Dodgers–Yankees, rare in Los Angeles but storied). Find public, non-judgment sources for rivalries: league-designated rivalry games, named trophy and cup games (college trophies, MLS cups), same-city pairs, past World Series / Finals / playoff meetings (and how long their effect lasts), and curated lists of rivalries that cite sources. Also: does a **rare visit** itself draw (an interleague team that comes to town once every few years), separate from rivalry? How long a history window is needed to see it?

**6. Resale prices.** The plan is to record prices twice per upcoming game: a week before and on the day. Which free sources allow that (SeatGeek's API and its terms; Ticketmaster Discovery's price ranges, which are face value; others)? Is face value any use? Does any free source have past prices so this could be tested now rather than after a season? Note any terms that forbid storing prices.

**7. Anything else** the research shows moves a game's crowd and that the list above misses. Give its evidence and its free source.

## Output
1. **One table:** signal · league(s) · evidence (direction, size, study) · free source · terms OK? · history from · recommended: test now / record now and test later / reject.
2. **A short rule per signal**, in plain language, as it would be tested (e.g. "visiting team won last season's title: yes or no").
3. **Rejected**, with the reason (paid, against terms, no history and can't be recorded, or it's really the calendar again).
4. **Order:** which three to test first, and why.

Do not invent attendance figures or effect sizes. Mark anything illustrative.
