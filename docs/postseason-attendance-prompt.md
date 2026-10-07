# Postseason attendance: the research prompt

Kylie ran this on Oct 7, 2026, and pasted the prompt and answer the same day. Answer: `docs/postseason-attendance-answer.md`. Saved verbatim.

---

I'm building Fan/Friction, an app that shows how crowded a city will be on a given night around big events (sports games, concerts) so people can plan around crowds and traffic. Each event gets an expected crowd size. A crowd of 5,000 or more can earn a "friction" label that warns about traffic and transit strain.
How estimates work today for regular-season home games: we take the median announced attendance for that team in that building on similar dates (weeknight, Friday, Saturday, Sunday, by month), multiply by a factor for how this season is drawing, then multiply by an opponent factor when we have at least 3 past meetings. The building's capacity is always the ceiling, and we show a low–high range. We only use real announced counts and never invent attendance.
The gap: postseason games (playoffs and finals in MLB, NBA, WNBA, NHL, NFL, MLS) get no estimate at all, so the app shows "No count yet." Example: New York Liberty vs. Atlanta Dream, WNBA Semifinals Game 3 at Barclays Center.
Please research and propose a rule for estimating postseason crowds:
1. For each league, how often do home postseason games sell out or come close to capacity? How does that change by round (first round vs. conference finals vs. finals)? Cite real sources and say how strong the evidence is.
2. Does attendance change by game number in a series, for example Game 3 vs. a possible clinching game?
3. Which public sources report postseason attendance reliably (league box scores, ESPN, Basketball-Reference, Hockey-Reference, Baseball-Reference, FBref, team releases)? Note any limits on access or on what we're allowed to use.
4. Should a team's own past home playoff counts override a league-wide rule, and how many past games are enough?
5. Propose a simple rule: a starting point, adjustments, a low–high range, and when to show no estimate. Keep it consistent with the regular-season approach above.
6. Name the edge cases: neutral sites, shared buildings, upper decks that are closed or curtained off, WNBA teams playing in NBA arenas, and games scheduled on short notice.
Then self-audit your answer: list the claims that depend on weak or thin evidence, anything you guessed, and what I should check by hand before building.
