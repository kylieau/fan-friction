# Second-opinion prompt: audience overlap and friction weights

Copy everything below the line into another AI model. Paste its answer back to Claude to fold in.

Reminder for Kylie: the prompt also asks whether the Chargers on night 11 are Major or Notable. You lean Notable.

---

I'm building a personal app called Fan/Friction. It shows how much competition shapes attendance at live events in Los Angeles (sports and concerts), to answer the claim that big-city fans are "fake." I'd like a critical second opinion on two parts of the rating model, plus one call. Push back where you disagree, and suggest something better if you have it.

**How the model works.** Each date gets one 1–10 rating (Chill, Light, Mid, Brutal, Cooked). Each event that date gets an occasion level (Routine, Notable, Major, Marquee) and a friction verdict (Low, Moderate, Heavy, Extreme) describing the pressure it faced from everything else going on. Rules: only facts known before the event can count (results and what happened on the day never do); the crowd size is shown as evidence, never used as an input; weather uses the venue's own temperature and rain and is only a small bump; rain counts, but only as light friction.

**1. Audience overlap.** Proposed rule: tag each event with the audiences it draws, then score each pair of events:

| Pair | Overlap | Example |
|---|---|---|
| Same sport, or the same fans' must-see | High | Lakers vs. World Series (LA sports fans) |
| Different sports, same city's sports fans | Medium | Kings (NHL) vs. Dodgers |
| Sports vs. concert, or concerts of different genres | Low | UCLA–USC football vs. BLACKPINK |
| Concerts of the same genre or era | Medium | David Gilmour vs. ELO (classic rock) |

Overlap acts only on each event's friction, never directly on the date's rating; the date's rating then summarizes the friction its events faced, so overlap counts once. Example: on Sat 11/19/22, UCLA–USC, BLACKPINK, Elton John and a Clippers game all ran the same evening. Because the crowds barely overlap, the date rates 5/10 (Mid) rather than higher.

Questions: Are these tiers right? Is anything missing (for example college vs. pro fans, family events, or fans who travel in from out of town)? Is "overlap only touches event friction" the right place for it, or should crowded dates with different audiences still raise the date's rating through traffic and parking?

**2. Friction weights.** What pushes friction up (each column adds to 100%):

| Input | Pro regular season | Playoffs / Marquee | College football | Arena concert | Stadium concert |
|---|---|---|---|---|---|
| Competing events (size × same hours × distance × audience overlap) | 40% | 35% | 35% | 35% | 30% |
| Getting there and home (shared freeway corridors, transit, parking, leaving at the same time) | 25% | 35% | 20% | 30% | 35% |
| Timing (weekday, start time, day game, school in session) | 25% | 20% | 30% | 25% | 25% |
| Weather (venue-local °F and rain; small bump) | 10% | 10% | 15% | 10% | 10% |

What softens it: the event's significance as it stood that day (standings or rankings, playoff stakes, rivalry, opener or farewell, a sellout). Marquee lowers friction 2 levels, Major 1 level, Notable about half a level, Routine not at all.

Reasoning: playoffs and stadium concerts draw from farther away, so travel weighs more; college football has day games in open stadiums and depends on whether school is in session; weather can only nudge the result. The app shows only the one or two biggest reasons in plain words (for example "World Series 1.5 mi away, same hours").

Questions: Do any weights look wrong for an event type? Is "significance as a shield" sound, and are the amounts reasonable? Should any event type be split out or added (NBA/NHL, MLS, other college sports, festivals)?

**3. One call.** Sun 9/17/17: the Chargers' first home game in LA (at a ~27,000-seat soccer stadium), the same afternoon as the Rams and Angels, all starting within about 45 minutes. I currently rate the Chargers game Notable. Should it be Major? Going by facts known beforehand only.

Please keep the answer short and concrete: what you'd change, and why.
