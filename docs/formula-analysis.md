# The rating formula: a fresh-eyes analysis (Oct 5, 2026)

Written before building Step 8, after reading every rating document (`test-nights-and-ratings.md`, `rating-model-draft.md`, `overlap-and-date-rating-v3.md`, the three second-opinion prompts) and the code (`src/data/read.ts`, `src/data/audience.ts`, the seed). The companion prompt for an outside review is `formula-review-prompt.md`. Plain language throughout; numbers are the docs' placeholders.

## 1. What the formula is supposed to do

One number per date in a city (1–10, with a word: Chill, Light, Mid, Brutal, Cooked) that says how hard the night was for fans, before it happens (a forecast) and after (a stamp). Two reasons feed it:

- **Crowd fight:** fans choosing between events. For each event, the competitors' share of seats, weighted by how much the two crowds overlap and whether the hours overlap. Combined across competitors so each extra one adds less. Scored 1–10. The date takes the highest event score among events of 15,000+ seats, plus 0.5 if a second, different event also scores 6+.
- **Gridlock:** everyone converging on the same roads, rail and parking, whether or not they like the same things. Venues within a 5-minute drive form a zone; each zone's load (seats × road share × peak share ÷ people per car × timing) is scored against a "normal night" reference on a log scale; nearby zones leak a little load into each other. The date takes the worst zone plus a quarter of the other zones' excess.
- **Date rating:** the louder of the two, plus a bump of 0.5 when the quieter one is above 3. Weather "applies afterward" (not specified). Each event also gets a verdict (Low / Moderate / Heavy / Extreme) from its own Crowd fight score, softened by its occasion (Marquee −2 levels, Major −1).

Rules that constrain it: only facts known before the event; capacity, never attendance; v1 uses public data only; every number labeled; the same formula for every night, recalculated when it improves (Oct 4 review).

## 2. What exists today, honestly

| Piece | State |
|---|---|
| Date ratings | 15 hand-rated LA dates (13 test nights + Oct 3–4 seeds). Nothing is computed. |
| Event verdicts (occasion, friction, why) | Hand-written on the seeded events only. Live MLB/ESPN events have none, so upcoming dates show "—". |
| Crowd fight | Designed on paper (v3). Not in code. |
| Gridlock | Designed on paper (zones). Not in code. No zones, drive times, road shares or references exist in the data. |
| Audience overlap | `src/data/audience.ts` still has the Oct 1 rule (same sport = High). v3 retired that. |
| Event data model | `audience` has domain, sport, genre. **Missing:** level (pro/college), fan identity, Broad flag by year, draw radius, Destination flag, public/invited, durations. Occasion is hand-set, not derived. |
| Venue data model | Capacity by year and setup, location, roof. **Missing:** zone, rail-station flag, parking, people-per-car defaults. |
| Weather | A venue temperature and rain flag on a few seeded events. No source for upcoming dates. |
| Stamp pipeline | Built. It stores whatever read exists at the lock; a formula read would flow through unchanged. |
| Schedule archive | Nightly LA snapshot since Oct 5. Everything earlier is "reconstructed." |

## 3. A check with the placeholders

I ran v3's Crowd fight (High 0.7, Medium 0.35, Low 0.15; Marquee lift same domain or adjacent genre; 1-hour buffer; the date rule above) on the 13 nights. Crowd fight alone, no Gridlock, no weather.

| Night | Hand | Crowd fight | What happened |
|---|---|---|---|
| Sun 9/10/17 (Rams opener + Dodgers, 90°F) | 8 | 4.1 | No heat term. Only two events, Low/Medium overlap. |
| Sun 9/17/17 (Chargers, Rams, Angels) | 7 | 5.8 | Chargers squeezed by the Rams. Matches the v3 doc's own run. |
| Sat 9/3/22 (UCLA 11:30, USC 3, Dodgers, Weeknd, 100°F) | 7 | 5.9 | Heat is the story and there is no heat term. |
| Sat 11/19/22 (UCLA–USC, BLACKPINK, Elton, Clippers) | 5 | 5.0 | Fits. Gridlock would push it up. |
| Fri 8/4/23 (Angels + Taylor Swift, 30 mi apart) | 5 | 2.3 | Sports vs. concert is Low. The 5 was about Friday traffic. |
| Fri 9/1/23 (Dodgers + Beyoncé, 13 mi) | 4 | 2.2 | Same. |
| Sat 4/13/24 (Dodgers in the rain) | 3 | 1.0 | No weather term. |
| Mon 7/22/24 (Dodgers alone) | 1 | 1.0 | Fits (the baseline). |
| Fri 10/25/24 (WS G1 + five more) | 9 | 10.0 | Fits. |
| Sat 10/26/24 (WS G2, Kings, Galaxy, two concerts) | 7 | 8.4 | Galaxy lifted to High by the Marquee rule. |
| Tue 4/1/25 (Dodgers, Kings, We ❤️ LA) | 4 | 5.5 | Kings squeezed by a Broad team. |
| Mon 4/28/25 (Beyoncé opener, Dodgers, Rauw) | 6 | 6.0 | Fits. |
| Mon 10/27/25 (WS G3 + Lakers) | 4 | 8.3 | Lakers vs. World Series: both Broad, different sports, Marquee → High. One squeezed arena sets the whole date. |

Read as a pattern, not as individual misses:

1. **The date rule makes one squeezed event the whole night.** A World Series game plus a Lakers game is an 8.3 because the Lakers (18,910 seats) are heavily squeezed, even though the night as a whole was easy for most of the city. Kylie's hand ratings weigh how much of the city's crowd was affected. The rule needs a notion of how big the squeezed share is (seats affected ÷ seats that night), or the date should be driven by pair volume rather than the worst victim.
2. **Heat, timing and rain have no place yet.** Three of the thirteen nights (9/10/17, 9/3/22, 4/13/24) are mostly about conditions. v3 says weather "applies afterward" and the Oct 1 draft gave it 10–15%, but nothing defines the term, the source, or whether a day game in 100°F counts as friction at all (it is not competition). Decide whether conditions are a third reason, a modifier, or out.
3. **Half the nights are really Gridlock nights** (8/4/23, 9/1/23, 11/19/22, the heat nights' exits). Gridlock is undesigned in code and depends on zone data that does not exist yet. The prompt should press on the lightest viable Gridlock, because the zone design as written needs drive times, road shares, rail flags, peak shares and references per venue.
4. **The Marquee lift is a strong knob.** It turns Galaxy vs. the World Series into High and moves 10/26/24 from about 7 to 8.4. v3 limited it to the same domain; the question is whether "same domain" is still too wide (soccer fans vs. a baseball final).
5. **The Broad flag does a lot of work and has thin data.** One poll a year (LMU), LA only, starting 2014. Every other city needs a source or a rule. The threshold (20%) and the borderline band are guesses.
6. **Occasion is hand-set, so forecasts are impossible today.** For a live upcoming game, nothing decides Routine / Notable / Major / Marquee. The stakes (playoff round) and standings are known before the game and could drive it, but the rule is unwritten. Without it, no upcoming date can be rated.
7. **The fitting data is thirteen LA nights, two of them result-shaped.** Night 11's 7 may come from photos of empty stadiums; night 10's 8 includes "~48,000 actual." Holding back 2–3 nights leaves about ten to fit six or more free numbers. That is not enough to tune; it is enough to catch a formula that is clearly wrong. Attendance across many dates (allowed as tuning, with holdouts) is the real calibration set, and it is not collected yet.
8. **Two floors are in tension.** v3 has a fixed 15,000-seat floor for the date rule; the Oct 4 review wants 5,000+ to feed friction, with clusters of smaller rooms adding up. The code has 5,000 (`FRICTION_ATTENDEES`) and no clustering.
9. **The "why" line.** Every read the app shows carries a one-line reason ("World Series 1.5 mi away, same hours"). The formula has to produce that sentence, not just a number: the biggest competitor, the shared hours, the zone. That is a design task nobody has written down.

## 4. What I would want the outside review to settle

- Is the two-reason structure (Crowd fight, Gridlock, louder-wins-plus-bump) right, or should the date be one pressure index with components? Does "louder wins" throw away information on nights where both are moderate?
- A date rule that reflects breadth (how much of the night's crowd is in a fight), not just the worst victim.
- Whether conditions (heat on an open-air day game, rain) belong in the rating at all, and if so how, with a free data source for forecasts (NWS for the US; Open-Meteo globally).
- The lightest Gridlock that still separates 11/19/22 from 7/22/24 without a hand-built road table per city.
- A written rule for occasion (Routine → Marquee) from pre-game facts: playoff round, game number, standings, rivalry flags, opener/farewell, tour opener/closer, sellout status.
- What the Broad flag should fall back to outside LA, and whether it is worth the data cost at all versus a simpler "top-level pro team in the metro" rule.
- A calibration plan: which public attendance series to collect, how to define the "expected" attendance to compare against, and what counts as success (rank order against hand ratings? mean error on held-out nights?).
- How the formula degrades when inputs are missing (no start time, no capacity, no weather), so a forecast is still produced with a labeled confidence rather than a dash.

## 5. Build plan I would follow after the review

1. Extend the event and venue records with the fields the formula needs (level, identity, Broad-by-year table, invited flag, durations by type; venue zone and rail flag). Derive occasion from stakes/standings with a written rule.
2. Crowd fight in code, run against the seeded nights, table printed next to the hand ratings.
3. Gridlock in the lightest form the review supports, with LA zones hand-entered.
4. Conditions, if adopted, with a free weather source for the next 7–10 days.
5. The "why" sentence generator.
6. Wire into the stamp and forecast pipeline; upcoming dates stop showing "—".
7. Tuning session with Kylie on the 13 nights (holdouts kept), then start collecting attendance for real calibration.
