# Proposal: past seasons in the catalog (Oct 15, 2026)

**Decided (Kylie, Oct 15, 2026), replacing the plan below where they differ:**
- Store only **logged dates**, not whole past seasons. Pull a season from the feeds when needed, keep only the dates asked for. Past dates nobody logged stay unloaded; their events can still have pages.
- Steps 1–3 approved, LA first. Start small; more past dates will come later as she remembers them.
- Exception, also Oct 15: load the last five seasons of every home date for UCLA men's and women's basketball, UCLA football and the Dodgers, "since I know I'm going to" log more of them. Loaded with `--teams=ucla-mbb,ucla-wbb,ucla-football,dodgers --seasons=2022-2026`. ESPN numbers winter seasons by the year they end, so basketball is 2021–22 through 2025–26.
- A rebuilt read says "Estimated from past schedules."
- The unused database copy of `data/attendance/` is dropped (migration 0029).
- Concerts: setlist.fm is fine (terms read first; free key).

**Built (Oct 15):** `scripts/past-dates-load.mjs --metro=<id> --dates-file=<path> --out=<file.sql>`. It reads the MLB and ESPN feeds for those dates (`loadEspnPastDates`, `loadMlbSchedule` with a start date). It keeps only the city's own games and skips hand-seeded dates' events while keeping their results. It writes a SQL file to paste into Supabase, plus a JSON copy. No date list goes in the repo: the input and output live outside it. Windowed catalog reads (old step 2) are dropped for now, because a few hundred rows don't need them. Known gaps: no Sparks feed (WNBA LA isn't in `ESPN_TEAMS`); no past concerts until setlist.fm; dates outside app cities get no read.

The original proposal follows.

## What she asked for (Kylie, Oct 15, 2026)
- Every past date should have its events loaded, and a date read verdict where one can be made.
- Facts about a past event (score, crowd, start, round, length and the like) belong to the event and are public, the way every other event's facts are. A person's attendance stays in their account. Friends see it in the app. Nobody reading the repo should be able to connect a set of events to a person.

## The rule that makes the second point work: whole seasons, never single events
The repo only ever gains past events in complete sets: every home game of a team-season, every show at a venue over a period, every 5,000+ event on a date. A single event, or a field filled for some games but not the rest of the season, is never added on its own. That way no file, commit or field marks one person's nights. Hand-researched extras (dated rankings with the poll named, broadcast, storylines) wait until a season-wide pass fills them for every game in that team-season.

## Today (measured Oct 15)
- A date before the nightly archive (Oct 4–6, 2026) has events only if it was seeded by hand: the 13 test nights and about 19 dates in 2026. Anything else says "Events have not been collected for this date."
- The read only needs events and building sizes. Weather is optional (it adds the Conditions reason for open-air rooms).
- `data/attendance/` already holds 2022–2026 home games for every built city, but only games with an announced crowd, so it has holes. It feeds expected draws, not the catalog.
- Step 0, done: Supabase stopped every read at 1,000 rows without saying so (LA weather around a date was 1,000 of 1,912 rows). Reads now page.

## Plan
1. **A city-neutral `past-seasons` script.** It pulls each team's full past-season schedule from the MLB, ESPN and HockeyTech feeds (the fetch code already exists in `attendance-collect.mjs`), keeps home games in the metro's rooms, and writes them to the catalog as source `past-season`. Scheduled starts only. ESPN's placeholder midnight times become "time unknown", never a real start. Final scores, announced crowds and game length go into results as evidence, never into the read.
2. **Read the catalog by date window.** The app now pulls a city's whole catalog at once. With past seasons in it, that's thousands of rows per open. The date page and strip will ask for a window around the date, like weather does. Calendar and search keep upcoming dates plus whatever window is open.
3. **First slice: Los Angeles, 2024–25 and 2025–26 seasons.** Check three past date pages (events listed, "Estimated from past schedules", a verdict), with screenshots. Logged nights on those dates pick up the read by city and date. No log edits are needed.
4. **Widen:** LA back to 2013, then every built city from 2022. Same script, more seasons.
5. **Concerts.** No feed has past concerts. Until a venue-wide source exists, no past concert is added (a handful of shows on their own would mark someone's nights). Two routes:
   - setlist.fm's free API, venue by venue. Its terms need a read first; it costs nothing.
   - The existing research pattern, "every 5,000+ event on these dates", run for a whole month or season at the big rooms.
6. **Season-wide research pass** for what the feeds don't carry (rankings with the poll named, broadcast, occasion), written after step 3 shows what the feeds filled.

## What a past date will and won't get
- A verdict and the events, labeled "Estimated from past schedules" (Kylie, Oct 15). Expected draws use today's season levels for old dates. That's acceptable for a rebuilt read, so it's labeled, not tuned.
- No stamp. Stamps need the archived forecast before the start, which doesn't exist before Oct 2026. A "rebuilt stamp" would be a separate proposal.
- Places that aren't app cities (desert festivals, Ventura County) get no read until someone decides to add them.
- Rooms with no feed and under 5,000 (small-college volleyball, Division III) aren't added. A logged one still takes the nearby read from the big events that night.

## Cost
🚩 None expected. About 50 MB of the free Supabase plan's 500 MB covers every built city's 2022–2026 sports; LA back to 2013 adds a few MB. Check the project's current database size in the Supabase dashboard before step 4. setlist.fm needs a free key under Kylie's account, if she picks that route.
