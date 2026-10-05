# Test nights and ratings (seed data for the first build)

Real LA nights used to calibrate the difficulty rating. Kylie reviewed the ratings and called them "fairly accurate." Attendance numbers are announced figures unless stated; label them that way in the app. Seed these 13 nights first with these ratings hardcoded, then build the formula and check that it reproduces this table.

## The recipe, v1 (weights not set yet)
Describes the competition that night:
1. **How much else was on:** the size of competing events.
2. **Same time window:** events only compete if times overlap.
3. **How close the venues are:** next door counts more than 30 miles apart.
4. **Whether the crowds overlap:** different audiences barely compete (UCLA-USC vs. BLACKPINK).

Sets how much the competition hurts a particular event:

5. **The event's own pull.** Must-see events (World Series, Beyoncé) barely get squeezed. Weaker draws do. Pre-game facts (giveaways, opener, pitching matchup, playoff stakes) can nudge this. Outcomes never do.

Adjusts the result:

6. **Conditions:** heat hits day games hardest. Rain mattered less than expected.

Label only, not scored: **Big TV night** (award shows, big national games).

Difficulty is per event and per night. A night score says how hard the night was for the events that could get squeezed (1 = easy, 10 = hardest). The night shows its word first ("Cooked · 9/10"): 1–2 Chill, 3–4 Mild, 5–6 Spicy, 7–8 Brutal, 9–10 Cooked. Events get no number: they get an occasion chip and a friction verdict (Low, Moderate, Heavy, Extreme), from pre-event facts only. See the rating model in `product-decisions.md`. (Updated Oct 2: the date rating now also counts how hard it was to get around; see `overlap-and-date-rating-v3.md`. Each event's own verdict stays about drawing a crowd.)

## Ratings table

| # | Night | What was on | Rating | Squeezed most |
|---|---|---|---|---|
| 1 | Fri 10/25/24 | WS G1 (Dodger Stadium 5:08) + Lakers vs. Suns (Crypto.com 7:00) + USC vs. Rutgers (Coliseum 8:00) + East LA Classic (SoFi 7:30) + David Gilmour (Intuit Dome 7:30) + ELO (Kia Forum 8:00) | 9 | Lakers, USC, concerts (WS sold out) |
| 2 | Sat 10/26/24 | WS G2 + Kings (Crypto.com 1pm) + Galaxy (Dignity Health) + ELO (Forum) + Imagine Dragons (Hollywood Bowl) | 7 | Galaxy, concerts |
| 3 | Mon 4/28/25 | Beyoncé (SoFi) + Dodgers vs. Marlins + Rauw Alejandro (Intuit Dome) | 6 | Rauw, Dodgers |
| 4 | Tue 4/1/25 | Dodgers vs. Braves + Kings vs. Jets + We ❤️ LA (Hollywood Bowl), all within ~5 miles | 4 | Kings |
| 5 | Sat 11/19/22 | UCLA vs. USC (Rose Bowl 5:00, 70,865) + BLACKPINK (Banc of California Stadium, renamed BMO in 2023) + Elton John (Dodger Stadium) + Clippers vs. Spurs (Crypto.com 7:30, 18,581) | 5 (was 4; stays 5 under the audience-overlap rule adopted Oct 1) | Barely (different crowds) |
| 6 | Mon 10/27/25 | WS G3 vs. Blue Jays (5:00, 52,654, 18 innings, 6h39m) + Lakers vs. Blazers (Crypto.com 7:30, 18,512) | 4 (was 2; the doc had missed the Lakers) | Lakers |
| 7 | Mon 7/22/24 | Dodgers vs. Giants (49,576), nothing else big; backup night Tue 6/13/23 (45,561) | 1 | Baseline |
| 8 | Fri 9/1/23 | Dodgers vs. Braves (52,436) + Beyoncé (SoFi). Also Thu 8/31: 47,623 alone; Sat 9/2: 51,470 with Beyoncé | 4 | Dodgers on paper (still drew 52k) |
| 9 | Fri 8/4/23 | Angels (34,479) + Taylor Swift (SoFi). Comparison Fridays: 8/18 38,297, 7/21 40,309. Anaheim is ~30 mi from SoFi; giveaways differed | 5 | Angels (maybe) |
| 10 | Sun 9/10/17, 90F at kickoff | Rams vs. Colts (Coliseum 1:05, 60,128 announced, ~48,000 actual) + Dodgers vs. Rockies (1:11, 50,161) | 8 | Rams, plus heat |
| 11 | Sun 9/17/17 | Chargers (StubHub Center, 25,381 of ~27k) + Rams (Coliseum, 56,612) + Angels (36,709), all starting within ~45 min | 7 | Both NFL teams |
| 12 | Sat 9/3/22, 100F+ | UCLA at Rose Bowl 11:30am (27,143, record low) + USC vs. Rice at Coliseum 3pm (60,113, 17k+ empty) + Dodgers at night (46,144) + The Weeknd at SoFi | 7 | UCLA, USC (mostly heat) |
| 13 | Sat 4/13/24, rain | Dodgers vs. Padres after a 2h15 rain delay, 44,582 | 3 | Dodgers, lightly |

## Sources
- Night 1-2: [ABC7](https://abc7.com/post/traffic-nightmare-expected-friday-due-world-series-other-events-la-area/15452723/), [LAist](https://laist.com/brief/news/transportation/la-traffic-dodgers-world-series-lakers-east-la-classic)
- Night 3: [CBS LA](https://www.cbsnews.com/losangeles/news/beyonce-cowboy-carter-sofi-stadium-dodgers-rauw-alejandro-intuit-dome)
- Night 4: [Fox LA](https://www.foxla.com/news/la-events-tuesday-traffic-nightmare)
- Night 5: [ESPN](https://www.espn.com/college-football/game/_/gameId/401404044/usc-ucla), [BMO Stadium](https://x.com/BMOStadium/status/1570397106262929410)
- Night 6: [LAist](https://laist.com/brief/news/los-angeles-activities/dodgers-game-3-world-series-guide)
- Night 7: [Box score](https://www.baseball-reference.com/boxes/LAN/LAN202407220.shtml)
- Night 8: [Box score](https://www.baseball-reference.com/boxes/LAN/LAN202309010.shtml), [KTLA](https://ktla.com/news/local-news/a-guide-to-attending-one-of-beyonces-shows-at-sofi-stadium/)
- Night 9: [Box score](https://www.baseball-reference.com/boxes/ANA/ANA202308040.shtml)
- Night 10: [CBS Sports](https://www.cbssports.com/nfl/news/look-stadium-is-half-empty-for-colts-rams-regular-season-opener-in-los-angeles), [Dodgers box score](https://www.baseball-reference.com/boxes/LAN/LAN201709100.shtml)
- Night 11: [SI](https://www.si.com/nfl/2017/09/17/rams-chargers-empty-stadiums-photos), [CBS Sports](https://www.cbssports.com/nfl/news/look-chargers-cant-fill-30000-seat-soccer-stadium-rams-fans-arent-any-better)
- Night 12: [CBS Sports](https://www.cbssports.com/college-football/news/rose-bowl-attendance-hits-all-time-low-in-first-game-for-ucla-since-announcing-move-to-big-ten/), [USC Annenberg](https://www.uscannenbergmedia.com/2022/09/13/how-heat-and-tv-deals-affect-usc-football-attendance/)
- Night 13: [NBC San Diego](https://www.nbcsandiego.com/news/local/dodgers-beat-padres-rain-los-angeles/3487764/)

## Lessons
- Announced attendance is not who showed up. Always label the kind of number (announced / reported / estimated).
- Teams that always sell out (Dodgers) are poor tests of the effect.
- Factors often land on the same night. The rating has to separate them.
- Checked Oct 1, 2026: night 5 had a Clippers home game (Kings and Ducks were away); night 6 had a Lakers home game; no Lakers, Clippers or Angels home game on night 7; Eras Tour played SoFi Aug 3, 4, 5, 7, 8, 9, 2023. Still unchecked: concerts and other events at Crypto.com and Honda Center on night 7.
- The 2017 Coliseum held 93,607 (77,500 after the 2018–19 renovation). Store venue capacity by year.
- Night 9's comparison Friday 7/21/23 was an Ohtani start, which inflates it. Pick another comparison Friday.

## What to record per night (columns for the data)
Events (who, venue, capacity, reported attendance); timing (start, rough end, TV-driven?); calendar (day of week, time of year, holidays); stakes and context (playoffs, rivalry, opener, farewell, contention, opponent draw); conditions (weather); competition (distances, big TV events); getting there (transit); pull factors (giveaways, momentum, star availability); venue (novelty, too big for the act); mood (protests, scandals); watching at home (local TV, blackouts). Later: ticket price, resale, tickets sold vs. through the gates, stage-blocked seats, short-notice scheduling.
