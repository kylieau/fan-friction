# Deep-research prompt: audience overlap

Copy everything below the line into a deep-research tool. Paste the answer back to Claude to fold in. This goes deeper on overlap than `second-opinion-prompt.md` and replaces nothing there.

---

# Research brief: Fan/Friction audience overlap

## Product
Fan/Friction is a personal app showing how much competition shapes attendance at live events (sports and concerts), to answer the claim that big-city fans are "fake." It starts in Los Angeles, but every rule must work for any metro in the US or abroad. Each **date** gets one 1–10 rating shown word first (Chill, Light, Mid, Brutal, Cooked). Each **event** gets an occasion level (Routine → Marquee) and a friction verdict (Low, Moderate, Heavy, Extreme; only Moderate+ is shown). Event friction comes from four weighted inputs: competing events, getting there and home, timing, and venue-local weather.

## Locked (don't reopen)
- Only facts known before an event count. Results never do.
- Crowd size is evidence, never an input.
- Weather is venue-local and only a small bump. Rain counts, lightly.
- The date's rating summarizes its events' friction, so overlap counts once.
- Rules, not statistics: this is a personal app and calibration, not a published paper.

## Current rule (confirm, refine or beat it)
Each event is tagged with the audiences it draws. Each pair is scored:

| Pair | Overlap |
|---|---|
| Same sport, or the same fans' must-see (Lakers vs. World Series) | High |
| Different sports, same city's sports fans | Medium |
| Sports vs. concert, or concerts of different genres | Low |
| Concerts of the same genre or era | Medium |

Overlap acts **only on each event's friction**, never directly on the date's rating. Under this rule Sat 11/19/22 (UCLA–USC, BLACKPINK, Elton John, Clippers) stays at 5 (Mid).

## Research question
How should we model audience overlap between concurrent events, so that "different fans, same freeways" isn't confused with "same fans choosing"? The answer must hold in any metro, not only Los Angeles.

## Deliver
1. Evidence-based overlap tiers (or a better taxonomy) for: same sport; a city's must-see vs. anything; college vs. pro; different pro sports; sports vs. concert; same-genre concerts; festivals. Define tiers by audience traits (sport, genre, fan base, draw radius), not by LA teams or freeways.
2. How to treat transplant and away fans and national-draw acts (Raiders weekend, BLACKPINK): overlap, draw radius or travel?
3. Whether family events matter at this scale.
4. Empirical or industry proxies (ticket-market data, catchment areas, fan-affinity and genre studies, traffic studies). Prefer ones available outside LA, and say where they aren't.
5. Failure cases for the current rule:
   - Fri 10/25/24: World Series G1, Lakers (nearly sold out), USC, East LA Classic and two concerts.
   - Sat 11/19/22: the four events above.
   - Sun 9/17/17: Chargers, Rams and Angels, all starting within about 45 minutes.
   - Two or three non-LA cases for comparison, for example a Premier League match on a big concert night, or an NFL Sunday in a one-team city.
6. One call: the rule calls Lakers vs. World Series High because both are "LA sports fans' must-see," but a plain "different sports" test would say Medium. Is a must-see tier real? How could it be defined without judging each case by hand?
7. Recommendation: which overlap inputs belong in event friction, and what should not be in overlap at all (for example, loyalty, ticket price or results).
8. Pushback on whether "overlap touches only event friction" is right, or whether crowded dates with different audiences should still raise the date's rating through traffic and parking.
9. Which parts of the tiers hold anywhere and which are LA-specific. Cover soccer-, cricket- and rugby-first markets; cities where fans arrive by transit, not freeways; one-team vs. many-team cities; and cities where college sports barely exist.

## Constraints
Short, sourced, and push back where you disagree. No monetization. State the recommendation in city-neutral terms; treat LA nights as test cases, not the definition.
