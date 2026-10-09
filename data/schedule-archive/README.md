# Schedule archive

Nightly copies of the listings the app already knows, one folder per city and one file per day: `<city>/YYYY-MM-DD.json`. Written at 08:23 UTC (about 1:23am Pacific in summer, 12:23am in winter). Nine cities since Oct 7, 2026; the first file per city: Los Angeles Oct 4; New York, San Diego and Seattle Oct 6; Atlanta, the Bay Area, Chicago, Dallas–Fort Worth and Montreal Oct 7. Each file records which sources ran (`sources`); the app reads that to say whether a date was checked (Quiet) or not (No data).

Not shown in the app. A night from before the first file is reconstructed. The stamp uses the latest daily file saved before an event's start. How that works: `docs/schedule-archive.md`. The app's list of these windows is `src/data/scheduleArchiveIndex.ts`. The forecast list the stamp reads is `src/data/startForecastIndex.ts`. The archive script rewrites both.
