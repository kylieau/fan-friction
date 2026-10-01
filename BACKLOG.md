# Fan/Friction backlog

Deferred work and open questions that outlive one session. Remove an item only after checking it against the code. The current snapshot is in `MEMORY_HANDOFF.md`.

## First slice: remaining build steps
- **Step 3:** Map in Crowds mode (gold heat map, friction tags, ★ biggest crowd, SOLD OUT tags, night score) plus the Event screen ("Here's what beat it," The game/show block, "I was there," share card at the end). Match `design/wireframes/Main` and `Event`. Put the brand wordmark (`design/brand/wordmark.html`) on the share card, and give World Series G1 a SOLD OUT tag (the mockup is missing it).
- **Step 4:** Nights tab (search, calendar shaded by night rating with legend, Famous nights).
- **Step 5:** You tab (Up next, Your nights from `docs/kylie-logs.md`, team + sport filters, rough dates, plain stats, order setting).
- **Step 6:** Traffic mode (blue corridors, "Drag to your leave time," "Estimate · not live," no red).
- **Step 7:** Live MLB schedules and results, so Tonight shows real October games marked "Not rated yet." Then other sports: NHL has a free public feed; NFL, NBA, college and others probably come through an unofficial scoreboard feed. Concerts come from Ticketmaster first; SeatGeek or others are added later.
- **Step 8:** Rating formula from the six-factor recipe. Hold back 2–3 of the 13 nights to test it, so it isn't just tuned to fit.

## Waiting on Kylie
- Her OK on the redrafted tip 2 (Night + friction wording).
- Per-event occasion and friction for all 13 nights (night 1 drafted on the review page), plus: raise night 5 to 5 and night 6 to 4? ELO start time 7:00 or 8:00?
- Whether to keep the 2013–2015 concerts in her log (rough dates, no rating). Ask at step 5.

## Saving and accounts
- **Supabase:** Kylie creates a free project and provides its URL and public key before step 5. 🚩 The free plan allows 2 active projects per account and she already uses one. It also pauses after about a week idle.
- "Export my nights" backup button.
- Simple accounts, right after the baseline build.

## Open product questions (from the build brief)
- Rating weights, and when dot size switches from capacity to predicted attendance.
- What the basic traffic cues show. Whether to keep "Should I brave the roads?"
- Streak and badge definitions (plain and factual), and the Compare-with-friends format.
- Cameo default rules for "Who you've seen."
- Whether Plans appear on the Map.
- Notification timing.
- Name clearance before any public launch (two podcasts are named Fan Friction).

## Tech housekeeping
- The main JavaScript file is about 1.3 MB, mostly the map library. Split the map out so other tabs load faster.
- An offline-ready service worker for the installed app.
- **Screenshot checks:** `playwright-core` driving `/usr/bin/chromium` with `--use-angle=swiftshader --enable-unsafe-swiftshader` works in this container. Keep the helper script in the session scratchpad, not the repo.
- Confirm the Vercel plugin's account connection works (Kylie ran `/mcp`, but it hasn't been used yet).
