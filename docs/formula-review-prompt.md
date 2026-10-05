# Review prompt: the Fan/Friction rating formula

Copy everything below the line into a model with strong research and reasoning. Paste its answer back to Claude to fold in. Claude's own analysis, written before this prompt, is in `formula-analysis.md`; the prompt repeats the facts it needs so the reviewer sees nothing else.

Reminder for Kylie: the prompt asks for a verdict on the structure, a fix for each gap, worked numbers on all thirteen nights, and a calibration plan. It is long because the reviewer has no access to the repo. Everything marked placeholder is a number to test, not a decision.

---

I'm building Fan/Friction, a personal log of live sports and concerts people attended, with a "friction" read stamped on each night: how hard that night was for fans, from crowd competition and getting around. I'm a lawyer, not an engineer; the app is built with an AI coding assistant. I'd like a serious, critical review of the rating formula before it's built: is the structure sound, where are the gaps, what should change, and what should stay. Push back hard where you disagree, and propose concrete replacements with formulas and worked numbers. Where a suggestion only fits Los Angeles or only the US, say so. The app starts in LA but must work in any city.

## 1. What the formula must do

One rating per **date in a city**, 1–10 with a word (1–2 Chill, 3–4 Light, 5–6 Mid, 7–8 Brutal, 9–10 Cooked). It is shown before the night as a **forecast** (it can move until 24 hours after the last scheduled start) and after as a **stamp** on each person's entry. The same formula applies to every night, past and future; when the formula improves, every stamp is recalculated. Each **event** on that date also gets a verdict (Low, Moderate, Heavy, Extreme; Low is never shown) and a one-line reason ("World Series 1.5 mi away, same hours").

Firm rules:
- Only facts known before the event count. Results, actual attendance and what happened on the day never feed a score. Earlier results (standings going into a game) may.
- Size is **venue capacity**, never expected attendance. "Sold out" is shown beside a verdict, never subtracted.
- v1 uses **only free, public data**. No billed traffic data (Google/Waze/Placer/StreetLight), no paid ticketing data. Past attendance may be used to tune the formula's numbers across many dates, with some dates held out as a test, but never feeds a single date's score.
- Every number shown is labeled by kind (announced, reported, estimated).
- Events of about 5,000+ attendees feed friction for everyone nearby; smaller events can be logged and get a read from the big events around them but move no one else's read. A cluster of mid-size rooms a few blocks apart may count as one big event (not designed).
- No live traffic, no routing. Friction informs whether to go, not how to get there.

## 2. The current design (v3, Oct 2–3, 2026)

### 2a. Event traits
Each event carries: domain (sports, music, family), sport or genre, level (top pro, lower pro, college, school), fan identity (the team, school or artist), a **Broad** flag (teams named as "their team" by about 20% of the metro's residents in the most recent poll before the date; LA 2016: Lakers 37%, Dodgers 35%; LA 2026: Dodgers 43%, Lakers 28%), draw radius (local, regional, national, plus a Destination flag), public or invited, and an **occasion** (Routine, Notable, Major, Marquee) from pre-event facts (playoff round, rivalry, opener, farewell, sellout).

### 2b. Audience overlap tiers (weights are placeholders)
- **High (0.7):** same fan identity (a school's football vs. its basketball); two Broad teams in different sports; any pair lifted by a Marquee competitor.
- **Medium (0.35; the alternative is 0.5):** same-sport rival clubs; same sport at different levels; different sports where one team is Broad; same-genre or same-era concerts.
- **Low (0.15):** different sports where neither is Broad; sports vs. concert; different genres; anything vs. a family show.
- A Marquee competitor lifts a pair one tier, only within the same domain (sports–sports) or an adjacent genre. A Destination event (Super Bowl, F1) moves one tier down against local events. Invited events (awards shows, conventions) carry no Crowd fight and count only in Gridlock.

### 2c. Crowd fight (fans choosing between events)
For event E and each competitor c:
- `t` (time factor) = 1 if the two attendance windows overlap once a 1-hour travel buffer is added; 0.5 if the same day and the gap beyond the buffer is under 3 hours; else 0. Default lengths: NFL 3h15, college football 3h30, MLB 2h45, NBA/NHL 2h30, soccer 2h, concert 3h.
- `d = overlap × t × cap(c) / (cap(E) + cap(c))` (the competitor's share of the two venues' seats; never above the overlap weight).
- `D = 1 − Π(1 − d)` across competitors.
- `Crowd fight(E) = min(10, 1 + 14 × D)`. The 14 is anchored so two equal-size events with fully overlapping buyers read about 8.
- **Event verdict:** from the score, then softened by occasion (Marquee −2 levels, Major −1, Notable and Routine 0).
- **Date Crowd fight:** the highest event score among events of 15,000+ seats, plus 0.5 if a second, different event also scores 6 or more.

### 2d. Gridlock (everyone converging on roads, rail, parking)
- Venues within about 5 minutes' free-flow drive form a **zone** (Exposition Park, L.A. Live). Nearby zones share load by drive time: 5–12 min = 0.15 (sprawl cities) or 0.10 (transit cities); 12–30 min = 0.05. Drive times from free OpenStreetMap routing; fallback 2 km straight line. Rail is its own unit per zone. Up to 3 named choke points per city.
- **Load in vehicles** = capacity × road share × peak share ÷ people per car × timing factor. Road share by city type: sprawl 0.90, destination hub 0.75, transit-dominant 0.35, minus 0.10 for a rail station within 800 m with 8+ departures an hour. Arrival/exit peak shares by type (football 0.40/0.75, baseball 0.50/0.55, NBA/NHL/soccer 0.55/0.80, concert 0.50/0.85, awards 0.35/0.60 at 1.5 per car). Exits count. A time-of-day background factor (weekday 3–7 pm 1.2, Sunday before 2 pm 0.9).
- **Zone score** `s = clamp(1, 10, 5 + 5 × log2(background × load / reference))`, where reference = 1.25 × the largest normal-night flow of any venue in the zone (a Dodger Stadium zone's reference is a Dodgers game). A normal night lands near 3.4; 25% above normal = 6.6; double = 10.
- Strikes and closures cut a unit's reference by the capacity lost; losing half the main mode, or a police/licensing refusal, sets the unit to 10. Street closures count only when announced.
- **Date Gridlock** `G = min(10, worst zone + 0.25 × Σ(other zones' score − 5))`, only for zones with different events and only above 5.
- Each event's own "getting there" score = the highest among its own units at its own arrival and exit hours.

### 2e. The date rating
`rating = max(CF, G) + 0.5 if min(CF, G) > 3`, capped at 10. Weather "applies afterward" (not specified). An earlier draft gave weather 10–15% of an event's friction, venue-local, rain counting lightly.

### 2f. What is actually built
Nothing of the above is in code. The app has 15 hand-rated LA dates, hand-written event verdicts on seeded events, a stamp/forecast pipeline waiting for a formula, a nightly schedule archive (LA, since Oct 5, 2026), and live home-game schedules (MLB, ESPN) with no occasion or verdict on them. The event record has domain, sport and genre only: no level, identity, Broad flag, radius, invited flag or durations. Venues have capacity by year and setup, location and roof: no zones, rail flags or parking. There is no weather source for upcoming dates.

## 3. The thirteen hand-rated nights (the only fitting data)

Capacities are for that date and setup. Starts are scheduled local times. Counts are shown as evidence only. "Hand" is my own 1–10 judgment; two of them (nights 10 and 11) may have been shaped by reports of empty stadiums, which is a result and can't be a target. Occasion and verdict are my hand calls.

| # | Night | Hand | Events (start · venue · capacity · tags · occasion / verdict) |
|---|---|---|---|
| 1 | Fri 10/25/24 | 9 | 5:08 World Series G1 · Dodger Stadium · 56,000 · MLB, Dodgers (Broad) · Marquee / Low; 7:00 Lakers vs. Suns · Crypto.com Arena · 18,910 · NBA, Lakers (Broad) · Routine / Heavy; 7:30 East LA Classic (high school football) · SoFi · 70,240 · Notable / Heavy; 7:30 David Gilmour · Intuit Dome · 18,000 · classic rock · Major / Moderate; 8:00 USC vs. Rutgers · Coliseum · 77,500 · college football · Routine / Extreme; 8:00 Jeff Lynne's ELO · Kia Forum · 17,505 · classic rock · Major / Moderate |
| 2 | Sat 10/26/24 | 7 | 1:00 Kings vs. Utah · Crypto.com · 18,145 · NHL · Routine / Moderate; 5:08 World Series G2 · Dodger Stadium · 56,000 · Marquee / Low; 7:00 Imagine Dragons · Hollywood Bowl · 17,500 · pop rock · Major / Moderate; 8:00 Galaxy vs. Rapids (MLS playoff opener) · Dignity Health Sports Park · 27,167 · Notable / Heavy; 8:00 ELO · Kia Forum · 17,505 · Major / Moderate |
| 3 | Mon 4/28/25 | 6 | Beyoncé (tour opener, start unknown) · SoFi · 70,240 · pop · Marquee / Low; 7:10 Dodgers vs. Marlins · 56,000 · Routine / Moderate; 8:00 Rauw Alejandro · Intuit Dome (next door to SoFi) · 18,000 · latin · Major / Heavy |
| 4 | Tue 4/1/25 | 4 | 7:10 Dodgers vs. Braves · 56,000 · Notable / Low; 7:30 Kings vs. Jets · Crypto.com · 18,145 · Routine / Moderate; 8:00 We ❤️ LA (free benefit, tickets claimed) · Hollywood Bowl · 17,500 · Notable / Low |
| 5 | Sat 11/19/22 | 5 (gut: 5, maybe 6) | 5:00 UCLA vs. USC · Rose Bowl (Pasadena, ~12 mi from downtown) · 89,702 · college football rivalry · Major / Moderate; 7:30 Clippers vs. Spurs · Crypto.com · 18,910 · Routine / Moderate; 8:00 BLACKPINK · BMO Stadium · 24,000 · k-pop, sold out · Marquee / Low; 8:00 Elton John farewell · Dodger Stadium · 56,000 · classic rock · Marquee / Low |
| 6 | Mon 10/27/25 | 4 | 5:00 World Series G3 · Dodger Stadium · 56,000 · Marquee / Low; 7:30 Lakers vs. Blazers · Crypto.com · 18,910 · Routine / Heavy |
| 7 | Mon 7/22/24 | 1 | 7:10 Dodgers vs. Giants · 56,000 · Notable / Low. Nothing else big (the baseline). |
| 8 | Fri 9/1/23 | 4 | 7:10 Dodgers vs. Braves · 56,000 · Notable / Moderate; 8:00 Beyoncé · SoFi (13 mi away) · 70,240 · Marquee / Low |
| 9 | Fri 8/4/23 | 5 | 6:30 Taylor Swift · SoFi · 70,240 · pop, sold out · Marquee / Low; 6:38 Angels vs. Mariners · Angel Stadium (Anaheim, ~30 mi) · 45,517 · Routine / Moderate |
| 10 | Sun 9/10/17 | 8 | 1:05 Rams vs. Colts (home opener) · Coliseum · 93,607 · NFL · 90°F open bowl · Notable / Extreme; 1:11 Dodgers vs. Rockies · 56,000 · Routine / Heavy |
| 11 | Sun 9/17/17 | 7 | 12:38 Angels vs. Rangers · Anaheim · 45,517 · Routine / Moderate; 1:05 Chargers vs. Dolphins (first LA home game) · StubHub Center, Carson · 27,167 · Notable / Extreme; 1:25 Rams vs. Washington · Coliseum · 93,607 · Routine / Heavy. That evening the Emmys (invited, ~7,100, L.A. Live) |
| 12 | Sat 9/3/22 | 7 | 11:30 am UCLA vs. Bowling Green · Rose Bowl · 89,702 · 100°F+ · Routine / Extreme; 3:00 USC vs. Rice · Coliseum · 77,500 · Notable / Heavy; 6:10 Dodgers vs. Padres · 56,000 · Notable / Moderate; 9:20 The Weeknd · SoFi · 70,240 · pop · Major / Low |
| 13 | Sat 4/13/24 | 3 | 6:10 Dodgers vs. Padres · 56,000 · rain · Notable / Moderate |

Broad teams in LA: Lakers and Dodgers throughout these years. Zones that matter: downtown (Crypto.com Arena, L.A. Live) and Dodger Stadium are about 5–8 minutes apart; Exposition Park (Coliseum, BMO Stadium) is about 10 minutes from downtown; Inglewood (SoFi, Intuit Dome, Kia Forum) is one zone about 20 minutes from downtown; the Rose Bowl, Carson (Dignity Health/StubHub) and Anaheim are their own zones 25–40 minutes out.

## 4. A check I ran with the placeholders

Crowd fight only (no Gridlock, no weather), v3 as written, Medium 0.35:

| Night | Hand | Crowd fight | Note |
|---|---|---|---|
| 1 | 9 | 10.0 | fits |
| 2 | 7 | 8.4 | Galaxy lifted to High by the Marquee rule |
| 3 | 6 | 6.0 | fits |
| 4 | 4 | 5.5 | Kings squeezed by a Broad team |
| 5 | 5 | 5.0 | fits before Gridlock; Gridlock would add |
| 6 | 4 | 8.3 | Lakers vs. World Series → High; one squeezed arena sets the whole date |
| 7 | 1 | 1.0 | fits |
| 8 | 4 | 2.2 | the 4 was about traffic |
| 9 | 5 | 2.3 | the 5 was about Friday traffic |
| 10 | 8 | 4.1 | heat is the story; no heat term |
| 11 | 7 | 5.8 | matches the v3 doc's run |
| 12 | 7 | 5.9 | heat again |
| 13 | 3 | 1.0 | rain; no weather term |

## 5. Gaps I see (please confirm, dismiss or add)

1. **The date rule takes the worst victim.** A World Series plus a Lakers game reads 8.3 because the 18,910-seat arena is squeezed, though most of the city had an easy night. My hand ratings weigh breadth: how much of the night's crowd is in a fight.
2. **Conditions have no place.** Three nights are mostly about heat on open-air day games or rain. Is that friction at all (it isn't competition), and if so, is it a third reason, a modifier, or out?
3. **Half the nights are Gridlock nights,** and the zone design needs drive times, road shares, rail flags, peak shares and a reference per venue that nobody has collected. What is the lightest Gridlock that still separates night 5 from night 7?
4. **The Marquee lift is a strong knob** (same-domain lift turns MLS vs. the World Series into High).
5. **The Broad flag rests on one annual LA poll.** Other cities have no source. Is it worth the data cost against a simpler rule ("top-level pro team in the metro")?
6. **Occasion is hand-set.** Nothing turns pre-game facts (playoff round, game number, standings, rivalry flag, opener/farewell, sellout) into Routine / Notable / Major / Marquee, so no upcoming date can be rated.
7. **Thirteen nights, two result-shaped, in one city, fit six or more free numbers.** Not enough to tune, enough to reject a wrong formula.
8. **Two floors conflict:** a fixed 15,000-seat floor for the date rule vs. 5,000+ feeding friction with clusters.
9. **The "why" sentence** every read needs is undesigned.
10. **Missing-input behavior** (no start time, no capacity, no weather) is undefined; today the app shows a dash.

## 6. What I'm asking you for

1. **Structure.** Is two reasons (Crowd fight, Gridlock) combined by louder-wins-plus-bump the right shape, or should the date be one pressure index with components? What does louder-wins lose on nights where both are moderate? Give the combination rule you'd use, with the worked effect on nights 5, 6 and 11.
2. **Date Crowd fight.** Propose a rule that reflects breadth (seats in a fight ÷ seats that night, pair volume, or something better). Show it on nights 1, 2, 4 and 6.
3. **Conditions.** Decide whether heat, rain and day-game timing enter, and how (a third reason? a modifier on the date? on the event only?). Give a formula and a free forecast source that works worldwide (Open-Meteo? NWS for the US?). Show nights 10, 12 and 13.
4. **Gridlock, lightest viable.** Given only venue locations, capacities, start times and a city type, what is the simplest Gridlock that gets night 5 above night 7 and nights 8–9 to about 4–5? Specify exactly what each city must hand-enter (I'm one person). Then say what the full zone design buys over it, and whether it's worth building first.
5. **Overlap tiers.** Keep, merge or re-weight High/Medium/Low. Settle the Medium weight (0.35 vs. 0.5) with a reason. Narrow or keep the Marquee lift. Cite research on cross-event substitution (there is a 2019 Journal of Sports Economics paper on top-division games cutting fourth-division attendance and a 2022 Review of Industrial Organization paper on German handball/basketball/hockey vs. soccer; a "0.3–0.5 points per day" figure from the latter is unverified).
6. **Broad flag.** Keep with fallbacks per city, replace with a simpler rule, or drop. If kept, name free sources outside LA.
7. **Occasion from facts.** Write the rule: inputs (playoff round and game number, pre-game standings and win%, rivalry flag, opener/finale, farewell/tour opener, sellout status, star player availability if public) → Routine / Notable / Major / Marquee. Show it on the Chargers' first LA home game (night 11), UCLA–USC (night 5) and a mid-season Dodgers game.
8. **Floors and clusters.** One rule for what feeds friction (5,000? 15,000? relative to the city?) and how small rooms cluster, if at all.
9. **The "why" line.** A rule for the one sentence under each verdict and each date rating: which fact leads (biggest competitor, shared hours, zone, heat), with examples from the thirteen nights.
10. **Missing inputs.** What to output when a start time, capacity or weather is unknown, and how to label the confidence.
11. **Calibration plan.** Which public attendance series to collect (MLB, NBA, NHL, MLS and college publish announced attendance; concerts mostly don't), how to define "expected attendance" for a game so the shortfall can be attributed, how to hold out dates, and what "success" means for a formula like this (rank order against hand ratings? mean error on held-out nights? attendance shortfall explained?).
12. **Other cities.** Where does the design break in a transit city (New York, London), a one-team city (Kansas City), a destination hub (Las Vegas), and a city with a public-capacity limit (Kolkata's Ram Navami policing, London's Tube strike that moved Coldplay)? What one or two extra inputs would fix each?
13. **Verdict.** Rank the changes by how much they'd move the thirteen nights toward sensible answers per hour of work, and say which of my placeholders you'd keep untouched.

Please be concrete: formulas, tables, worked numbers on the nights, the data each needs, and where it breaks. Where you'd rather see data before deciding, say which data and how to get it for free.
