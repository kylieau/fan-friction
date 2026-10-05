# Schedule archive

Nightly copies of the Los Angeles listings the app already knows. One file per day: `la/YYYY-MM-DD.json`.

Start-time forecasts, one file per event, written just before that event starts: `la/start-forecasts/`.

Not shown in the app. A night from before the first file is reconstructed. How that works: `docs/schedule-archive.md`. The app's list of these windows is `src/data/scheduleArchiveIndex.ts`. The forecast list the stamp reads is `src/data/startForecastIndex.ts`. The archive script rewrites both.
