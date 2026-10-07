# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`. The build order is `docs/big-picture-plan-oct6.md`.

_Last synced: Oct 7, 2026, end of the fifth session. Everything below is committed and pushed to `main`; the working tree is clean. **Kylie's standing instruction: her usage is limited; commit and push after every step so the thread is never lost.**_

## Current state
**Four covered cities** (`COVERED_METRO_IDS = ['la','san-diego','seattle','new-york']`). New York was built this session end to end via `docs/new-city-checklist.md` (the third run of the list; its lessons are recorded there). **Montreal is next.** Nothing is half-built.

**Nothing is open.** Two Ticketmaster fixes landed Oct 7 and were confirmed by the nightly job (run 37554068580, passed): (1) the same performer in the same building at the same date and start is one show — Foster the People at Forest Hills on Oct 10 now appears once, and LA lost a duplicate too (51 → 50 listings); (2) every Ticketmaster request is spaced 250 ms apart and a per-second refusal is retried. Before (2), an earlier hand run failed with a misleading "over the daily quota" and saved nothing for any city: the pause ran only between pages of one date window, so each window's first request went out in a burst. A run makes ~90 calls against 5,000 a day.

**This session, all pushed:**
- **New York built:** city type `hub` (measured, was assumed `transit`); 18 teams with every feed id verified live; 33 venues with car shares, coordinates checked against OpenStreetMap; attendance calibrated; hard access measured (the rule flags PNC only — it measures hills, and New York's hard sites are islands and causeways; see BACKLOG).
- **The tester's New York nights read:** Oct 1 3.5 and Oct 3 2.9 (seeded in `src/data/seed/past2026.ts` from `docs/research-oct-2026/new-york.md`), Oct 6 3.2 and Oct 8 7.7 (live; the archive starts Oct 6). Kylie ran part 1 of the tester SQL.
- **Per-day estimates count** (Kylie, Oct 7): NY Comic Con (Oct 8–11) at ~62,500 a day and LA's FIFA Fan Festival (Jun 12) at ~25,000 a day, both labeled estimated. Both feed friction and barely move their nights: they open hours before the evening games, and a point event never reaches Gridlock.
- **Hand-entered upcoming events live in `src/data/seed/listings2026.ts`** with `sourceId: 'listing'`. A `'seed'` event makes its date's hand list the whole list and drops the feeds — right for a checked past date, wrong for a live one (Oct 8 would have lost every game).
- **One copy per event id** on the date page, Upcoming and Between (`uniqueById` in `src/data/index.ts`), since the nightly job copies repo events into the shared catalog too.
- Earlier this session: the famous-nights list split from a logged night's score (`scoresForNights`); 16 past LA and San Diego dates reconstructed; `docs/unsized-events.md`; both New York research answers saved in full.

## Changes made (this session, all pushed)
`src/config/metros.ts`, `src/data/formula/{gridlock,overlap}.ts`, `src/data/{index,personalLog,read,teams,venues,venueAccessIndex,expectedDrawIndex,weatherIndex}.ts`, `src/data/sources/{mlbSource,espnSource,ticketmasterSource,seedSource}.ts`, `src/data/seed/{past2026,listings2026}.ts`, six screens, `scripts/attendance-collect.mjs`, `data/{attendance,weather,schedule-archive,results}/new-york/`, `data/weather/{la,san-diego}/`, `data/venue-access.tsv`, `docs/{new-city-checklist,data-sources,unsized-events,new-york-venue-table-prompt,new-york-city-type-prompt,new-york-venue-table-answer,new-york-city-type-answer}.md`, a dated note in `docs/research-past-dates/gap-followup.md`, `BACKLOG.md`.

From the parallel research session (`fan-friction-f8`), already on `main`: `docs/research-past-dates/`, `docs/build-reconstructed-reads.md`, `docs/tester-brief.md`, `docs/tester-interview-guide.md`, `.gitignore` (`private/`).

## Key decisions in force (new this session; earlier ones in BACKLOG.md)
- **Never call a line "Kylie's rule" without her name and a date beside it.** On Oct 7 a Claude-written check note ("don't divide a multi-day total") was promoted to a rule and attributed to her; she never made it and decided the opposite. Corrected in `docs/unsized-events.md`.
- **A per-day average of a multi-day total is fine when labeled estimated** (Kylie, Oct 7).
- **Research a city's type before touching `CITY_TYPE`.** Chicago and Boston are still assumed `transit`.
- **One car share per venue, record the error, revisit at tuning** (Kylie, Oct 6). MetLife 0.85, UBS 0.90. MTA turnstile data is the free way to hone it.
- **No schema change for closed or unopened venues** (Aqueduct via `fromYear: 2026`; Etihad Park left out until Jul 2027).
- **Table B grounds are not venue rows.** Events at the US Open grounds, Javits, the Great Lawn, Bethpage, Liberty State Park and the Randall's Island fields are points sized by their own crowd. A US Open day is sized by the grounds (~73,201), never by Arthur Ashe.
- **Famous nights stays curated; a logged night's score comes from the formula for any date.**
- **Distance discount: after New York, with real time spent** (Kylie, Oct 6). It cannot be one rule for every city.
- **Testing notes:** `npm i --no-save playwright-core` in a fresh container (never add it to package.json). Scripts that import from the repo run from the repo root. Headless Chromium at `/usr/bin/chromium` with swiftshader flags and a phone user agent; set `fan-friction:home-metro` and `fan-friction:tipsDone` in localStorage. `/explore?metro=new-york&date=…` opens a city; the Add form is `/you/add`. `gh` is authenticated as kylieau; `gh workflow run schedule-archive.yml --ref main` triggers the nightly job. No Ticketmaster key locally (`.env.local` has none). Don't `pkill` vite.

## Next steps
1. **Montreal**, via the checklist. First city outside the US: `America/Toronto`, metro id **`montreal`** (not yet in `metros.ts`). Canadiens via ESPN (`nhl` 10 — verify, as three of New York's ids were wrong), plus CFL (Alouettes), MLS (CF Montréal), PWHL (Victoire) and college ids to look up. Needs its own venue-table and arrival-mode prompts (copy New York's; boundary: the island, Laval, Longueuil, the South Shore). The tester's Canadiens night (May 25, 2026) is a past date and will need seeding from `docs/research-past-dates/san-diego-montreal.md`; its watch party has no crowd figure and lands on `docs/unsized-events.md`. Kylie runs part 2 of the tester SQL when it's covered.
2. **Tester interview, in person, about Oct 13.** A day before: a data-side check that her LA, San Diego and New York nights all show reads.
3. **Then the distance discount**, as its own proposal, calibrated per city (sources in BACKLOG.md).
4. **Awaiting Kylie's reads:** Compare, a concert page, the entry layer and Add form, the sport list. **On hold for her decisions:** image share card, notifications, tips rewrite, Night story, Traffic, and whether a labelled footprint estimate is acceptable for events with no published figure at all.

**Rules to carry (Kylie, Oct 6):** never report a gap from anyone's ratings as progress, never tune a constant to close one; attendance on held-out dates is the only accuracy target (`docs/formula-v4.md`). Big watch parties count as events of their size. Save every research source in full — a paste in the chat is not a saved source (New York's arrival research exists only as a transcription, by necessity; the note at its top says so). Keep sessions lean.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
