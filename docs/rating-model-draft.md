# Rating model: open drafts (Oct 1, 2026)

Proposals still waiting on Kylie's reaction. Locked decisions live in `product-decisions.md` (Rating model) and `test-nights-and-ratings.md`. Nothing here is built yet.

## Already locked (Oct 1)
Night 5 stays at 5 · Mid, night 6 is 4 · Light, ELO starts at 8:00, Low friction is never shown, weather is local to each venue and only a small bump, and Kylie is still weighing the word "friction." The empty state says **Unrated** (changing it back is one word).

Later on Oct 1, Kylie accepted: the audience-overlap tiers and rule (overlap acts only on event friction), the friction weights below as the working draft, the Lakers on night 1 as Heavy friction even though they nearly sold out, the Chargers on night 11 as Notable for now, and rain as light friction. She may get a second opinion on the overlap rule, the weights and the Chargers call; the prompt is in `second-opinion-prompt.md`.

## What "Unrated" is tied to
Right now, nothing: the app has no event data yet, so the map just hard-codes "no rating." Once the data is in, a date can be in one of three states. Proposed display for each:

| What's true | What it shows |
|---|---|
| No big events that date | **Quiet** (no score). A date with nothing on isn't "Chill," it's just empty |
| Events exist, no rating yet (live MLB games before step 8) | **Unrated** |
| Rated | **Cooked · 9/10** |

There is no "being calculated" state. Ratings are either hand-entered or calculated instantly from known facts, so nothing ever runs in the background. That's why "Pending" was misleading.

## How audience overlap works today, and how much it should count
**Today it's judgment.** "Different crowds" on night 5 was a call, not a rule. Proposed rule: tag each event with the audiences it draws, then score each pair of events by how much their tags overlap.

| Pair | Overlap | Example |
|---|---|---|
| Same sport, or the same fans' must-see | High | Lakers vs. World Series (LA sports fans) |
| Different sports, same city's sports fans | Medium | Kings vs. Dodgers |
| Sports vs. concert, or concerts of different genres | Low | UCLA–USC vs. BLACKPINK |
| Concerts of the same genre or era | Medium | Gilmour vs. ELO (classic rock) |

**How much it should count:** overlap acts **only on each event's friction**, never directly on the date's rating. The date's rating then summarizes how much friction its events faced, so overlap counts exactly once, in the right place.

On night 5, each event's friction stays low because the crowds barely overlap, so the date's rating sits around Mid even with four events. A 6 would only be justified if different-crowd events still compete through traffic and parking, and that's the travel input below, not overlap. Night 5 stays at 5 until this rule is settled.

## Friction weights, first draft
These are separate from the events' size. Significance acts as a **shield**: a bigger occasion feels less of the same pressure.

**What pushes friction up (each column adds to 100%)**

| Input | Pro regular season | Playoffs / Marquee | College football | Arena concert | Stadium concert |
|---|---|---|---|---|---|
| **Competing events** (size × same hours × distance × audience overlap) | 40% | 35% | 35% | 35% | 30% |
| **Getting there and home** (shared freeway corridors, transit, parking, leaving at the same time) | 25% | 35% | 20% | 30% | 35% |
| **Timing** (weekday, start time, day game, school in session) | 25% | 20% | 30% | 25% | 25% |
| **Weather** (venue-local °F and rain; small bump) | 10% | 10% | 15% | 10% | 10% |

**What softens it (significance, as it stood that day):** standings or rankings, playoff stakes, rivalry, opener or farewell, a sellout. Draft amounts:

| Occasion | Effect on friction |
|---|---|
| Marquee | down 2 levels |
| Major | down 1 level |
| Notable | down about ½ a level |
| Routine | no change |

Reasoning behind the numbers:
- Playoffs and stadium concerts weight travel more, because their crowds come from farther away.
- College football weights timing and weather more, because of day games in open stadiums and whether school is in session.
- Weather tops out at 10–15% and can only ever nudge the result.

**Inputs vs. shown reasons.** Every input is computed, but the event screen shows only the **one or two biggest reasons** in plain words, for example "World Series 1.5 mi away, same hours" or "Midday kickoff, 101°F at the Rose Bowl." Weather can be a shown reason only when it's the biggest input.

The full formula comes later and doesn't hold up step 2. Step 2 stores the facts these weights will use (venues, times, distances, occasions), not the formula itself.

**Status:** Kylie accepted both as the working version (Oct 1), pending an optional second opinion.

## Occasion and friction draft, all 13 nights
Drafted Oct 1 for Kylie to react to. Occasion and friction use only facts known before each event. **Bold** marks events the original doc missed. Low friction is stored but not shown in the app.

| Date (rating) | Event | Occasion · facts | Friction | Why |
|---|---|---|---|---|
| **1** Fri 10/25/24 (Cooked 9) | World Series G1 | Marquee · Game 1 | Low | Nothing bigger was on |
| | Lakers vs. Suns | Routine · 2nd home game | Heavy | World Series 1.5 mi away, same hours |
| | USC vs. Rutgers | Routine · ordinary opponent | Extreme | World Series + Lakers, same hours |
| | East LA Classic | Notable · rivalry, first game at SoFi | Heavy | Same hours, same city |
| | David Gilmour | Major · rare LA run | Moderate | Different crowd |
| | Jeff Lynne's ELO (8:00) | Major · farewell tour | Moderate | Different crowd |
| **2** Sat 10/26/24 (Brutal 7) | World Series G2 | Marquee · Game 2 | Low | Nothing bigger was on |
| | Kings vs. Utah (1pm) | Routine | Moderate | Done before first pitch, but in World Series traffic |
| | Galaxy vs. Rapids | Notable · playoff opener | Heavy | Same hours as the World Series, same sports crowd |
| | Jeff Lynne's ELO | Major · farewell tour | Moderate | Different crowd |
| | Imagine Dragons | Major | Moderate | Different crowd |
| **3** Mon 4/28/25 (Mid 6) | Beyoncé | Marquee · tour opener | Low | Nothing bigger was on |
| | Dodgers vs. Marlins | Routine · Monday | Moderate | Beyoncé 13 mi away, mostly different crowd |
| | Rauw Alejandro | Major · moved on short notice | Heavy | Next door to Beyoncé, same hours |
| **4** Tue 4/1/25 (Light 4) | Dodgers vs. Braves | Notable · early season, champs | Low | Biggest event of the night |
| | Kings vs. Jets | Routine | Moderate | Dodgers 1.5 mi away, same hours |
| | We ❤️ LA | Notable · free fire-relief benefit | Low | Tickets all claimed in advance |
| **5** Sat 11/19/22 (Mid 5) | UCLA vs. USC | Major · rivalry | Moderate | Three big events same evening, different crowds |
| | BLACKPINK | Marquee · sold out | Low | Different crowd |
| | Elton John | Marquee · farewell tour | Low | Different crowd |
| | **Clippers vs. Spurs** | Routine | Moderate | Elton 1.5 mi away, same hours |
| **6** Mon 10/27/25 (Light 4) | World Series G3 | Marquee · first LA game of the Series | Low | Nothing bigger was on |
| | **Lakers vs. Blazers** | Routine | Heavy | World Series 1.5 mi away, same hours, same crowd |
| **7** Mon 7/22/24 (Chill 1) | Dodgers vs. Giants | Notable · rivalry | Low | Nothing else big (the baseline) |
| **8** Fri 9/1/23 (Light 4) | Dodgers vs. Braves | Notable · NL's top two teams | Moderate | Beyoncé 13 mi away, same hours |
| | Beyoncé | Marquee · sold out | Low | Nothing bigger was on |
| **9** Fri 8/4/23 (Mid 5) | Angels vs. Mariners | Routine | Moderate | Taylor Swift 30 mi away, Friday traffic |
| | Taylor Swift | Marquee · sold out | Low | Nothing bigger was on |
| **10** Sun 9/10/17, 90°F (Brutal 8) | Rams vs. Colts | Notable · home opener | Extreme | Same start as the Dodgers, day game in an open bowl, 90°F |
| | Dodgers vs. Rockies | Routine | Heavy | Day game in heat, Rams same hours |
| **11** Sun 9/17/17 (Brutal 7) | Chargers vs. Dolphins | Notable · first LA home game | Extreme | Rams and Angels within 47 minutes |
| | Rams vs. Washington | Routine | Heavy | Chargers and Angels same hours |
| | Angels vs. Rangers | Routine | Moderate | Anaheim, farther away |
| **12** Sat 9/3/22, 100°F+ (Brutal 7) | UCLA vs. Bowling Green | Routine · ordinary opponent, 11:30am, before classes start | Extreme | Midday game in 100°F+ heat |
| | USC vs. Rice | Notable · new coach's debut | Heavy | 3pm in the heat |
| | Dodgers vs. Padres | Notable · rivalry | Moderate | Night game, after the heat |
| | The Weeknd | Major | Low | Different crowd, evening |
| **13** Sat 4/13/24, rain (Light 3) | Dodgers vs. Padres | Notable · rivalry | Moderate | Rain (light friction) |

Settled Oct 1: the Lakers on night 1 stay Heavy even though they nearly sold out (friction is what they faced, the crowd is how they did); the Chargers on night 11 stay Notable for now (Kylie may ask a second opinion on Major); rain counts as light friction. Night 13 no longer cites the rain delay, since a delay is something that happened on the day.

The "101°F at the Rose Bowl" wording in the shown-reasons example is illustrative only, not data.
