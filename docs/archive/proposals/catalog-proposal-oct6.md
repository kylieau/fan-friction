# Proposal: the catalog as shared truth (the write path)

Oct 6, 2026. Item 4 of the reordered plan (`docs/big-picture-plan-oct6.md`). Nothing here is built. Kylie approves, then it is built in slices, each shown on the local site.

## The problem, in plain terms
Today the app's events come from three places, none of them a store:
1. **The phone fetches the leagues' feeds itself.** When you open Explore, your browser calls MLB and ESPN directly for upcoming games. It works, but ESPN's feed is unofficial, it blocks some browsers, every person's phone does the same work, and two people can see different lists if a feed hiccups.
2. **Hand-seeded nights** live in code files.
3. **Everything the nightly job saves** (the schedule archive for stamps, weather, results, past attendance, expected draws) is written as files into the repo, committed to `main` every night, and then **compiled into the app itself**. The app's main download already carries all of it. Every night it grows, and every night's commit rebuilds the site.

That is fine for one city with sports only. It stops being fine with concerts (hundreds of listings a week), a second city, or a year of weather and results. And it means a wrong listing can only be fixed with a code change.

## The proposal
**Supabase becomes the catalog's home**, the same project accounts already use. The nightly job writes to it; the app reads from it. The repo keeps the code and the hand-rated nights, not the data.

### What moves where
| Data | Today | Proposed |
|---|---|---|
| Upcoming games (MLB, ESPN) | fetched by each phone | fetched once a night by the job, written to an `events` table; the app reads the table |
| Hand-seeded nights (the 13, Oct 3–4) | code files, bundled | stay in the repo as the source, imported into `events` by a script; the app reads the table |
| Results, game length, crowds | `data/results/`, bundled index | `event_results` table |
| Weather rows and daily ranges | `data/weather/`, bundled index | `weather_hours`, `weather_days` tables |
| Schedule snapshots for stamps | `data/schedule-archive/`, bundled index | `schedule_snapshots` table (one row per event per capture) |
| Past attendance and expected draws | `data/attendance/`, bundled index | `attendance` table; expected draws computed by the job into `expected_draws` |
| Venues, teams, competitions | code | **stay in code** for now (small, hand-checked, change rarely) |

### Rules
- **Public data, public read.** The catalog is built from public schedules, so anyone can read it; only the nightly job can write. The job gets a key that can write (a Supabase "service role" key) stored as a GitHub Actions secret. 🚩 Not a cost, but a key with power: it never goes in the app or the repo.
- **The feeds stay as the job's source and as the app's fallback.** If Supabase can't be reached, the app does what it does today.
- **One formula for every night still holds.** Reads are computed on the phone from the table's events, exactly as now. Nothing about the formula changes.
- **The repo files stay for a while** as a backup and an audit trail, but the app stops compiling them in. They can be retired once the tables have a few weeks of history.
- **Free plan check:** a year of LA sports and concerts is a few thousand event rows; weather is the biggest table at roughly a quarter million small rows a year; both are far under the 500 MB free limit, and reads are a few kilobytes per date. 🚩 The free plan pauses a project after a week idle; the nightly write keeps it awake, which is a side benefit.

### What you'd notice
- Explore and Home open faster and show the same list to everyone; no more "No events" when ESPN is grumpy.
- The main download shrinks again (the weather and results indexes leave it).
- Fixing a listing becomes a row edit, not a code change.
- A second city's data arrives by running the job for it, with no new code paths.

### Slices
1. **Tables and the job's write.** Create the tables; the nightly job writes everything it already saves to them as well as to the files. The app is untouched. Check the rows against the files for a few nights.
2. **The app reads the catalog.** Explore, Home, the date and event pages read events, results and weather from the tables, with the feeds as fallback. Same screens, same reads.
3. **Stop bundling.** Remove the compiled indexes from the app. Keep the files until the tables have history.
4. **Seeds imported.** The hand-rated nights go in through a script; the code stays their source of truth.

### Not in this proposal
Concerts (Ticketmaster is step 7). Editing events from inside the app. Any change to the formula, venues or teams.

## Questions for Kylie
1. Yes to Supabase as the catalog's home, written by the nightly job, read by everyone?
2. OK to put the job's write key in GitHub's secrets (🚩 power, not cost)?
3. Any objection to the catalog being publicly readable (it is public data)?
