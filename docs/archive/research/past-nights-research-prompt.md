# Research prompt: what else was on, for specific past dates

Copy everything below the line into a research model, after filling in the "Dates for this run" block. Paste the answer back to Claude to check and fold in. Drafted Oct 6, 2026, from `docs/archive/research/october-2026-events-prompt.md`. Use it to give a logged night its friction read: the read needs every other big event in that city on that date. Weather is fetched separately (Open-Meteo), so the prompt doesn't ask for it.

Keep the filled-in date list out of the repo when the dates come from someone's private log (the repo is public). Paste it into the research tool only.

---

# Research brief: every big event on a list of past dates

## What this is for
Fan/Friction is a personal log of the live sports and concerts people go to, with a "friction" read for each night: how many big events shared that date in that city, how close their start times were, whether they drew the same fans, and whether their crowds hit the same roads and transit. A night's read can only be as good as the list of what else was on. For each date below, I need **every** big event in that city that day, verified.

Completeness matters more than polish. A missing event makes a busy night look quiet.

## Dates for this run
_(Fill in: city, then dates. One city per block. Example:)_
```
Los Angeles (LA County + Orange County): 2026-02-25, 2026-03-03, ...
```

## What counts
Include an event when **all** of these are true:
- It happened **in that city's area** on that **local date** (any start time, day or night).
- The venue holds **about 5,000 or more** in that setup, or the event drew 5,000+ (a festival, a parade).
- It was **public**: ticketed, free, or open to anyone. Invite-only events (awards shows, closed conventions) are included but marked invited.

All kinds count equally (sizes as above): pro and college sports (including preseason and playoffs), lower leagues in 5,000+ buildings, concerts at stadiums, arenas and amphitheaters, festivals, international soccer, and other big ticketed events (wrestling, combat sports, motorsport, family shows). No-venue crowd events (parades, marathons, street festivals, closures) go in their own table.

**Mid-size theaters (about 5,000–8,000 seats)** go in only when they're inside or beside a venue that had a big event that same night (a theater inside an arena building, or on a stadium campus).

**Watch parties count when they're big** (5,000+), like any event: an official team watch party outside the arena, a stadium opened for an away game, a big Cosm-style screening. Put one in a venue in the Events table with `kind` live-broadcast; put a street or plaza one in the no-venue table. Give a crowd figure only if a source has one.

Skip: rooms under 5,000, Broadway and theater runs, clubs, private events, small watch parties and bar screenings, and away games.

## How to verify
- Every row needs a source URL. Prefer box scores and league pages for games (they also give the scheduled start and announced attendance) and the venue's or tour's own pages for concerts. Setlist.fm and tour-date archives are good for confirming a concert happened that night.
- **Confirmed only.** If you can't confirm an event happened on that date, leave it out and list it under "Couldn't confirm."
- Record the **scheduled** start, not the actual one (a rain delay or a late headliner doesn't count). If only doors are known, say so.
- Note postponements, cancellations and moves.
- **If a page won't load normally, don't work around it.** List it under "Pages that wouldn't load" with the URL. I'll paste it myself.
- Check current facts, not memory: earlier research for this project got a player's status wrong.

## Facts to record
Facts **known before the event**, in plain words, using these where they fit:
`home opener` · `season opener` · `preseason` · `rivalry` (a standing one) · `playoff: <round> G<n>` · `championship final` · `farewell` · `final game at this venue` · `first game in a new stadium or market` · `tour opener` · `tour closer` · `sellout announced <date>` (a day or more ahead) · `star debut or return: <who>` · `storyline: <short>` · `both ranked` (college) · `giveaway or theme night: <what>`.
For concerts, also record **the run**: how many nights the same act played that city within a week.

After-the-fact facts go in their own columns only: **the final score** and **announced attendance** (labeled announced, reported or estimated, with a source). Never mix them into the other columns.

**Leave out:** any 1–10 score, verdict or tier word, traffic predictions, weather, and advice on what the app should do.

## Output
For each city, four parts, as CSV inside code blocks with exactly these headers. Leave a cell blank rather than writing "N/A."

### 1. Venues
One row per building with at least one event in your table.
```
city,venue,former_names,area,lat,lng,capacity_by_setup,roof,access_note,how_people_arrive,source_url
```

### 2. Events
One row per event per date.
```
city,date,weekday,start_local,start_note,kind,title,home_team,away_team,performer,league_or_genre,level,stakes,venue,booking,run,facts,invited,expected_draw,status,source_url,result,attendance
```
- `kind`: game, show, festival, live-broadcast (a watch party) or special. `level`: pro, lower, college or school. `stakes`: playoff round and game, otherwise blank. `booking`: stadium, arena, amphitheater, theater or grounds. `expected_draw`: only when the crowd was plainly far smaller than the building, known in advance, with a reason. `status`: played, postponed, canceled or moved.

### 3. Crowd events with no venue
```
city,date,start_local,end_local,name,route_or_area,expected_crowd,crowd_kind,announced_closures,source_url
```

### 4. Date-by-date check
One line per date in the list: events found and the calendars you checked. A date with only one event must still say which venues you checked. One event is a finding, not a default.
```
city,date,events_found,calendars_checked
```

Then: **Couldn't confirm**, **Pages that wouldn't load**, and **Open questions** (anything you had to judge, such as a city's edge). Tables, not essays.
