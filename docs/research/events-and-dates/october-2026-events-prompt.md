# Research prompt: every big event in October 2026, four cities

Copy everything below the line into a research model. Paste the answer back to Claude to check and fold in. Drafted Oct 6, 2026. Research only: nothing here seeds, scores or turns on a city by itself.

Tip: the answer will be long (four cities × 31 days). If the tool cuts off, run it once per city by changing the "Cities for this run" line.

---

# Research brief: big live events in October 2026, Los Angeles, San Diego, Seattle, New York

## What this is for
Fan/Friction is a personal log of the live sports and concerts people go to, with a "friction" read stamped on each night. Friction is computed from public schedules: how many big events share a date, how close their start times are, whether they draw the same fans, and whether their crowds hit the same roads, rail and parking. To compute it, the app needs a complete, verified list of every big event in each city on each date. That list is what I'm asking you for.

**Cities for this run:** Los Angeles, San Diego, Seattle, New York.
**Dates:** Thursday, October 1 through Saturday, October 31, 2026, local time in each city. Today is October 6, 2026, so October 1–5 are already past and the rest are upcoming.

Completeness matters more than polish. A missing event makes a busy night look quiet, and that's the worst error this list can have.

## What counts
Include an event when **all** of these are true:
- It happens **in the metro** (boundaries under City notes). Road games and touring shows elsewhere don't count.
- The venue holds **about 5,000 or more** in that setup, or the event is expected to draw 5,000+ (a festival, a parade).
- It's **public**: ticketed, free, or open to anyone. Invite-only events (awards shows, conventions with closed badges) are included but marked invited.

Kinds to cover, all equally:
- **Pro sports:** MLB (including postseason), NFL, NBA (preseason and regular season), NHL (preseason and regular season), MLS, NWSL, WNBA (if any games fall in October), and lower leagues in 5,000+ buildings (AHL, major-junior hockey, USL and the like).
- **College sports** in 5,000+ buildings: football first, and any other sport that actually draws there.
- **Concerts** at stadiums, arenas and amphitheaters of 5,000+.
- **Festivals** of 5,000+ (music, food, cultural, Halloween, Día de los Muertos).
- **Other big ticketed events:** wrestling, combat sports, motorsport, monster trucks, family shows, big esports, comedy in an arena.
- **No-venue crowd events:** parades, marathons, street festivals, big street closures (separate table).

**Mid-size theaters (about 5,000–8,000 seats)** go in only when they share a campus or sit within about a 5-minute drive of a headline sports or stadium event **that same night** (for example a theater on the same block as an arena with a game). Skip them on other nights.

**Watch parties count when they're big** (5,000+), like any event: an official team watch party outside the arena, a stadium opened for an away game, a big Cosm-style screening. Use `kind` live-broadcast for one in a venue; put a street or plaza one in the no-venue table. Give a crowd figure only if a source has one.

**Skip:** rooms under 5,000, Broadway and theater runs, clubs and bars, private events, small watch parties and bar screenings, and away games.

## How to verify
- Every row needs at least one source URL. Prefer the team's, league's or venue's own schedule, or the official ticketing page. A news article is fine as a second source.
- **Confirmed bills only.** "They usually play here in October" doesn't count. If you can't confirm a date, leave the event out and list it under "Couldn't confirm."
- Postseason games that may not be needed are listed with status `if-necessary`, never as confirmed.
- Don't guess start times. If no start time is announced (a TV slot still pending, for example), leave it blank and say so in the note. If a page gives both doors and show times, record the scheduled start (first pitch, kickoff, puck drop, the headliner's set if published, otherwise the posted show time) and put the doors time in the note.
- If two sources disagree (time, venue, date), keep the one you trust more and record the other in the note.
- Note postponements, cancellations and venue moves, with the date announced.
- **If a page won't load normally, don't work around it.** List it under "Pages that wouldn't load" with the URL and what you needed from it. I'll paste it myself.
- Earlier research for this project got a player's retirement status wrong. Check current facts, not memory.

## Facts to record, and the ones to leave out
The app rates events only on facts **known before the event**. Record those facts plainly, using the words below where they fit:

`home opener` · `season opener` · `preseason` · `rivalry` (a standing one: Dodgers–Giants, USC–UCLA, Yankees–Red Sox) · `playoff: <round> G<n>` · `championship final` · `farewell` · `final game at this venue` · `first game in a new stadium or market` · `tour opener` · `tour closer` · `sellout announced <date>` (only if announced a day or more ahead) · `star debut or return: <who>` · `storyline: <short>` (a star facing a former team, a rematch of last season's playoff series, a banner night) · `both ranked` (college, with rankings) · `giveaway or theme night: <what>`.

For concerts, also record **the run**: how many nights the same act plays in this metro within a week ("night 2 of 3, Oct 9–11").

**Results go in their own column, for October 1–5 only:** the final score and announced attendance (labeled as announced, reported or estimated, with a source). Never mix them into the other columns.

**Leave out:** any 1–10 score, any verdict or tier ("brutal," "Marquee," "high overlap"), traffic predictions, weather, and advice on what the app should build. I only want the facts.

## Output
For **each city**, four parts, in this order. Use CSV inside code blocks with exactly these column headers, so I can import them. Leave a cell blank rather than writing "N/A."

### 1. Venues
One row for each building that has at least one event in your event table.

```
city,venue,former_names,area,lat,lng,capacity_by_setup,roof,access_note,neighbors_within_2km,how_people_arrive,nearest_rail_and_walk,source_url
```
- `former_names`: old names with the year they changed ("Staples Center to 2021"). Names change; use the current one as `venue`.
- `area`: neighborhood and city ("Inglewood", "Flushing, Queens", "East Rutherford, NJ").
- `capacity_by_setup`: for example "football 68,500; concert about 72,000". Say if it's a listed maximum or an estimate.
- `roof`: open, covered, indoor or retractable.
- `access_note`: only if the site is notably hard to reach (a single access road, a hillside, a long shuttle). Otherwise blank.
- `how_people_arrive`: plain words with a source if you have one ("mostly car, large lots"; "mostly subway and LIRR").
- `nearest_rail_and_walk`: the nearest rail or subway station and roughly how long the walk is, or "none".

### 2. Events
One row per event per date. A doubleheader is two rows. A multi-day festival is one row per day.

```
city,date,weekday,start_local,start_note,kind,title,home_team,away_team,performer,league_or_genre,level,stakes,venue,booking,run,facts,invited,expected_draw,status,source_url,checked_on,result_oct1to5,attendance_oct1to5
```
- `date`: YYYY-MM-DD. `start_local`: 24-hour HH:MM in local time, or blank.
- `kind`: game, show, festival, live-broadcast (a watch party) or special.
- `title`: the official billing ("Seahawks vs. 49ers"; "Bad Bunny: Tour Name").
- `league_or_genre`: the league for games (NFL, MLB, NCAA FB, NWSL, AHL); the main genre for shows (pop, hip-hop, metal, Latin, country, classical, comedy).
- `level`: pro, lower (minor leagues, major-junior), college or school.
- `stakes`: playoff round and game ("NLDS G3"), otherwise blank.
- `booking`: stadium, arena, amphitheater, theater or grounds.
- `facts`: semicolon-separated, using the words above.
- `invited`: yes or no.
- `expected_draw`: only when the crowd will plainly be far smaller than the building (a high-school game in an NFL stadium, a curtained-off arena), with a number, a reason and a source. Otherwise blank.
- `status`: confirmed, if-necessary, postponed, canceled or moved.
- `checked_on`: the date you checked the source.

### 3. Crowd events with no venue
Parades, marathons, street festivals, big closures.

```
city,date,start_local,end_local,name,route_or_area,expected_crowd,crowd_kind,announced_closures,source_url
```
- `announced_closures`: only closures an official source has actually announced (city, police, transit agency). Don't estimate closures.

### 4. Day-by-day check
One line per date, October 1–31: the number of events found and the calendars you checked. A day with zero events must say which venue calendars you checked. Zero is a finding, not a default.

```
city,date,events_found,calendars_checked
```

After all four cities:
- **Couldn't confirm:** events you saw mentioned but couldn't verify, with why.
- **Pages that wouldn't load:** the URL and what you needed from it.
- **Open questions:** anything about metro boundaries or venue rules you had to judge (for example whether a far suburb belongs). Flag it; don't decide it.

## City notes
Each list is a starting point to check, not a complete or verified list. Add any 5,000+ venue you find that has an event in October. Confirm every name and capacity yourself.

**Los Angeles.** Los Angeles County and Orange County are one metro here (Inglewood, Pasadena, Carson, Anaheim all count). Flag anything farther out (Inland Empire, Ventura, Indio) under Open questions. Check at least: Dodger Stadium, Angel Stadium, SoFi Stadium, the LA Memorial Coliseum, the Rose Bowl, BMO Stadium, Dignity Health Sports Park, Crypto.com Arena, Intuit Dome, the Kia Forum, Honda Center, the Hollywood Bowl, the Greek Theatre, Pauley Pavilion, the Galen Center, the Peacock Theater and YouTube Theater (theater rule), plus the Pomona Fairplex and the Queen Mary grounds for festivals. Put the most effort into concerts, festivals and special events: those are the gaps. Team schedules are easy, so still list them, but they're not where events get missed.

**San Diego.** San Diego County. Check at least: Petco Park, Snapdragon Stadium (SDSU football, San Diego FC, San Diego Wave), Pechanga Arena, Viejas Arena, the North Island Credit Union Amphitheatre in Chula Vista, the Rady Shell, and the Del Mar Fairgrounds. Most of the downtown venues are within walking distance of each other and of the trolley; record that in the venue table.

**Seattle.** King County. Put Tacoma and Everett venues in the table but name the city in `area`, and flag them under Open questions. Check at least: T-Mobile Park, Lumen Field, the WaMu Theater (on the Lumen campus, so the theater rule applies), Climate Pledge Arena, Husky Stadium, Alaska Airlines Arena (Hec Edmundson Pavilion), the Tacoma Dome, Angel of the Winds Arena in Everett and the accesso ShoWare Center in Kent. T-Mobile Park, Lumen Field and the WaMu Theater share one stadium district; same-night overlaps there matter most.

**New York.** New York City: the five boroughs, plus northern New Jersey and Long Island venues that draw New York City crowds. Not the rest of New York State: leave out Buffalo, Syracuse, Albany and anything upstate. Flag anything in Westchester or farther out on Long Island under Open questions instead of including it. Name the borough or state in `area`. Don't decide whether New Jersey and Long Island belong in the same market; flag that under Open questions. Check at least: Madison Square Garden and the Theater at MSG, Barclays Center, Yankee Stadium, Citi Field, UBS Arena, the Prudential Center, MetLife Stadium, Sports Illustrated Stadium (formerly Red Bull Arena), Radio City Music Hall (theater rule), Forest Hills Stadium, and the Javits Center for conventions (likely invited, check). New York is a transit city: fill `how_people_arrive` and `nearest_rail_and_walk` carefully, and record any announced subway or rail service changes that affect a venue on an event night in the notes. For no-venue events, check the Columbus Day Parade, the Village Halloween Parade, and any October road races or street festivals with announced closures.

## Keep it short
No essays. The tables, the three short lists, and nothing else.
