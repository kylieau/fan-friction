# Schedule archive

A nightly copy of the Los Angeles events Fan/Friction already knows about, kept so a night can be stamped later. Nothing in the app shows this yet. No Ticketmaster. No Supabase. No new paid account.

## What is saved

Each run writes one file:

`data/schedule-archive/la/YYYY-MM-DD.json`

The date is the Los Angeles calendar day the file was written. The file lists events from that day through 14 days later.

Three sources, the same ones the app already uses:

- **MLB schedule**, the free official feed, for Dodgers and Angels home games.
- **ESPN schedules**, the free unofficial feed, for Lakers, Clippers, Kings, Galaxy, Rams, Chargers, USC football, and UCLA football home games.
- **Seeded events** already in the repo whose dates fall in that window, including concerts on a seeded night.

Road games are not included. The app's feeds already skip them, because they do not crowd Los Angeles. A seeded date can list the same game twice: once from the hand-checked seed and once from the live feed. The app still shows only the hand-checked list for that date. The archive keeps both.

If a live feed cannot be read, the run stops and does not write a file. An empty file would look like a quiet city. A same-day rerun replaces the file only when the listings changed. Git keeps the earlier copy.

## Reconstructed nights

A night logged later is meant to be stamped from the saved schedule for that date. This job is that saved schedule.

- If a snapshot file exists for that date, or a snapshot taken before the night whose window covers it, the night can be stamped from what was listed then.
- If the night is from before this archive began, there is no saved schedule. That night is **reconstructed**: built afterwards from whatever public listings and seeded nights can still be found. Reconstructed is a label for later. It is not on screen yet.
- This job does not compute a rating, a stamp, or a lock. The rating formula stays paused.

The stamp rule, when it is built, is the one Kylie locked: the read stays a forecast until **24 hours after the scheduled start**, then it locks. On a night with several events, those 24 hours count from the **last scheduled start time that night**, whichever event is scheduled last. Tapping "I was there" does not change the clock.

## How it runs

`npm run archive-schedule` writes today's file. It needs the network.

GitHub runs that command on its own, a little after midnight Los Angeles time, and commits the file to `main`. That commit does not redeploy the website, because only the archive folder changed. If `main` will not take the commit, the job opens a pull request instead, and that request needs a merge or the night stays missing.

No new key, no credit card, no Ticketmaster.

## What this does not do

- It does not change the Map, the event page, or any other screen.
- It does not add Save or "I was there" anywhere. Those stay on the event page.
- It does not start Traffic, Night story, accounts, or the rating formula.
- It does not archive concerts from a ticket feed. Ticketmaster stays a later decision, and it needs a yes before any key.
