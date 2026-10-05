# Schedule archive

A nightly copy of the Los Angeles events Fan/Friction already knows about, kept so a night can be stamped later. Nothing in the app shows this yet. No Ticketmaster. No Supabase. No new paid account.

## What is saved

Each run writes the day's listing:

`data/schedule-archive/la/YYYY-MM-DD.json`

The date is the Los Angeles calendar day the file was written. The file lists events from that day through 14 days later.

Three sources, the same ones the app already uses:

- **MLB schedule**, the free official feed, for Dodgers and Angels home games.
- **ESPN schedules**, the free unofficial feed, for Lakers, Clippers, Kings, Galaxy, Rams, Chargers, USC football, and UCLA football home games.
- **Seeded events** already in the repo whose dates fall in that window, including concerts on a seeded night.

Road games are not included. The app's feeds already skip them, because they do not crowd Los Angeles. A seeded date can list the same game twice: once from the hand-checked seed and once from the live feed. The app still shows only the hand-checked list for that date. The archive keeps both.

If a live feed cannot be read, the run stops and does not write a file. An empty file would look like a quiet city. A same-day rerun replaces the file only when the listings changed. Git keeps the earlier copy.

## What the stamp uses

Save does not copy a forecast. Tapping Save stores the night only.

The stamp is still the one Kylie locked: it is written when someone marks "I was there," and only once **24 hours** have passed since the scheduled start. On a night with several events, those 24 hours count from the **last scheduled start time that night**, whichever event is scheduled last. Tapping does not change the clock.

Until a closer capture exists, the stamp lines up against the **latest daily file saved before that event's start** that includes the event. The stamp is labeled as coming from that file. A file saved at the start, or after it, is not used. If that latest file has no number, no number is added. If the event has no start time, no file can be placed before the start, so no number is added.

Los Angeles only. Other cities are not captured.

A daily file from before these reads were stored (the October 4, 2026 file) did not save a score. A stamp from that file can use a friction word already written on the event. It does not add a score that was never saved there. A room under the friction floor does not lend its own word.

A capture taken every half hour, just before each start, is parked. See the backlog. The job does not run it.

## Reconstructed nights

A night logged later is meant to be stamped from the saved schedule for that date. This job is that saved schedule.

- The stamp uses the latest daily file saved before the event's start that includes the event, and is labeled as such.
- A file saved at or after the start is left out. If no earlier file includes the event, no number is added.
- If the night is from before this archive began, there is no saved schedule. That night is **reconstructed**: built afterwards from whatever public listings and seeded nights can still be found. Reconstructed is a label for later. It is not on screen yet. No score is filled in just to have one.
- This job does not lock a stamp, and it does not run the rating formula. The formula stays paused.

## How it runs

`npm run archive-schedule` writes today's listing. It needs the network. If a live feed cannot be read, it writes nothing.

GitHub runs that command once a day, at **12:15am Pacific**, and commits to `main`. (This used to drift between 12:15am and 1:15am because the old clock was set in UTC. It is now 12:15am year-round.) If `main` will not take the commit, the job opens a pull request instead, and that request needs a merge or the night stays missing.

A commit that only adds schedule files does not redeploy the website. A commit that updates the forecast list the app reads does build the site. That is still the free Vercel plan. One build a night is inside the free cap of 100 a day.

No new key, no credit card, no Ticketmaster.

### Limits of the free schedule

- The job runs once a day. GitHub's closest allowed schedule is every 5 minutes. This does not use that.
- The time is Pacific. On the morning the clocks spring forward, a 2:30am job would skip ahead. This job runs at 12:15am, so that skip does not apply.
- A run can start late. One late night does not invent a number. The next night's file is a new day.
- If GitHub is very busy, it can drop a scheduled run. The missed night has no new file.
- The schedule runs only from `main`, after this is merged. It does not run from a pull request.
- On a public repo that sits untouched for 60 days, GitHub turns scheduled jobs off until someone turns them back on.

This uses the free GitHub-hosted runners. One run a night stays inside the free allowance. No new account is required.

## What this does not do

- It does not change the Map, the event page, or any other screen.
- It does not add Save or "I was there" anywhere. Those stay on the event page.
- It does not start Traffic, Night story, accounts, or the rating formula.
- It does not archive concerts from a ticket feed. Ticketmaster stays a later decision, and it needs a yes before any key.

## How a later stamp knows

The app keeps a short list of these windows in `src/data/scheduleArchiveIndex.ts`, and the saved forecasts in `src/data/startForecastIndex.ts`. The archive script refreshes both from the files in this folder. It does not invent a rating.

- The stamp uses the latest daily file saved before the event's start that includes the event. The stamp is labeled that way. A file from the start itself, or later, is not used. No number is invented.
- A date before the first file, or a past date no window covers, is reconstructed. That flag can be stored on a stamp. It is not shown. It is not a made-up score.
- A date that is still ahead, and not inside a window yet, is simply not saved yet. It is not called reconstructed.
