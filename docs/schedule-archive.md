# Schedule archive

A nightly copy of the Los Angeles events Fan/Friction already knows about, kept so a night can be stamped later. Nothing in the app shows this yet. No Ticketmaster. No Supabase. No new paid account.

## What is saved

Each run writes the day's listing:

`data/schedule-archive/la/YYYY-MM-DD.json`

A run during the day can also write start-time forecasts, described below.

The date is the Los Angeles calendar day the file was written. The file lists events from that day through 14 days later.

Three sources, the same ones the app already uses:

- **MLB schedule**, the free official feed, for Dodgers and Angels home games.
- **ESPN schedules**, the free unofficial feed, for Lakers, Clippers, Kings, Galaxy, Rams, Chargers, USC football, and UCLA football home games.
- **Seeded events** already in the repo whose dates fall in that window, including concerts on a seeded night.

Road games are not included. The app's feeds already skip them, because they do not crowd Los Angeles. A seeded date can list the same game twice: once from the hand-checked seed and once from the live feed. The app still shows only the hand-checked list for that date. The archive keeps both.

If a live feed cannot be read, the run stops and does not write a file. An empty file would look like a quiet city. A same-day rerun replaces the file only when the listings changed. Git keeps the earlier copy.

## Start-time forecasts

The same job also saves a forecast for each Los Angeles event shortly before that event starts. One file per event:

`data/schedule-archive/la/start-forecasts/{event id}.json`

The forecast is the score and the friction word already on file at that moment. If neither is on file, the file still records that the job looked, and it does not make up a number.

Save does not copy a forecast. Tapping Save stores the night only.

The stamp is still the one Kylie locked: it is written when someone marks "I was there," and only once **24 hours** have passed since the scheduled start. On a night with several events, those 24 hours count from the **last scheduled start time that night**, whichever event is scheduled last. Tapping does not change the clock.

When that stamp is written, its numbers are the start-time forecast. If no start-time file exists, the stamp uses the nearest daily schedule that includes that event, and it is marked as coming from that schedule rather than from a start-time capture. If that schedule has no number either, the stamp does not get one.

Los Angeles only. Other cities are not captured.

A daily file saved before start-time forecasts existed (the October 4, 2026 file) did not store a score. A fallback from that file can use a friction word that was already written on the event. It does not add a score that was never saved there. A room under the friction floor does not lend its own word.

## Reconstructed nights

A night logged later is meant to be stamped from the saved schedule for that date. This job is that saved schedule.

- If a start-time forecast exists, the stamp uses that.
- If it does not, and a daily snapshot includes the event, the stamp uses the snapshot taken closest to the start and is marked as such.
- If the night is from before this archive began, there is no saved schedule. That night is **reconstructed**: built afterwards from whatever public listings and seeded nights can still be found. Reconstructed is a label for later. It is not on screen yet. No score is filled in just to have one.
- This job does not lock a stamp, and it does not run the rating formula. The formula stays paused.

## How it runs

`npm run archive-schedule` writes today's listing and any start-time forecasts that are due. It needs the network. If a live feed cannot be read, it writes nothing.

GitHub runs that command on its own and commits to `main`. If `main` will not take the commit, the job opens a pull request instead, and that request needs a merge or the night stays missing.

Two clocks, both Pacific time:

- **12:15am** every night saves the coming 14 days. (This used to be 1:15am during daylight time and 12:15am during standard time, because the old clock was set in UTC. It is now 12:15am year-round.)
- **Every 30 minutes from 9:17am through 11:47pm**, at :17 and :47. Each of those runs saves a forecast for events that start within the next 45 minutes, and only while the run is still before the start. A later run that is still before the start replaces an earlier one, so the file ends up as close to the start as the job managed. A run that lands after the start leaves the earlier file alone.

An event that starts before 9:17am Pacific is outside that window. Its stamp uses the nearest daily schedule.

A commit that only adds schedule files does not redeploy the website. A commit that updates the forecast list the app reads does build the site. That is still the free Vercel plan. A busy day is a handful of those builds, under the free cap of 100 a day.

No new key, no credit card, no Ticketmaster.

### Limits of the free schedule

- GitHub's closest schedule is every 5 minutes. This job uses 30, which is inside that rule.
- The times are set in Pacific time. On the morning the clocks spring forward, a 2:30am job would skip ahead to 3:00am. This job does not run at that hour.
- A run can start late, especially near the top of the hour. These runs sit at :17 and :47 to stay off that minute. If a run is late enough to miss the start, that event has no start-time file, and the stamp uses the nearest daily schedule.
- If GitHub is very busy, it can drop a scheduled run. The next run does not go back and invent the missed forecast.
- The schedule runs only from `main`, after this is merged. It does not run from a pull request.
- On a public repo that sits untouched for 60 days, GitHub turns scheduled jobs off until someone turns them back on.

This uses the free GitHub-hosted runners. The repo is public, so those minutes are free. 🚩 If the repo is made private, about 30 runs a day can use up the free monthly minutes and start to cost. No new account is required while it stays public.

## What this does not do

- It does not change the Map, the event page, or any other screen.
- It does not add Save or "I was there" anywhere. Those stay on the event page.
- It does not start Traffic, Night story, accounts, or the rating formula.
- It does not archive concerts from a ticket feed. Ticketmaster stays a later decision, and it needs a yes before any key.

## How a later stamp knows

The app keeps a short list of these windows in `src/data/scheduleArchiveIndex.ts`, and the saved forecasts in `src/data/startForecastIndex.ts`. The archive script refreshes both from the files in this folder. It does not invent a rating.

- A start-time file is the forecast the stamp lines up against.
- A daily file is the fallback. The stamp uses the one captured closest to the event's start, and is marked as taken from that schedule, so it is not mistaken for a start-time capture.
- A date before the first file, or a past date no window covers, is reconstructed. That flag can be stored on a stamp. It is not shown. It is not a made-up score.
- A date that is still ahead, and not inside a window yet, is simply not saved yet. It is not called reconstructed.
