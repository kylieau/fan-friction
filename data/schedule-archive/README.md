# Schedule archive

Nightly copies of the Los Angeles listings the app already knows. One file per day: `la/YYYY-MM-DD.json`. Written at 12:15am Pacific.

Not shown in the app. A night from before the first file is reconstructed. The stamp uses the latest daily file saved before an event's start. How that works: `docs/schedule-archive.md`. The app's list of these windows is `src/data/scheduleArchiveIndex.ts`. The forecast list the stamp reads is `src/data/startForecastIndex.ts`. The archive script rewrites both.
