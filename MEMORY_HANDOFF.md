# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`. The build order is `docs/big-picture-plan-oct6.md`.

_Last synced: Oct 7, 2026 (early), end of the fifth session. Everything below is committed and pushed to `main`; the working tree is clean. A hand-triggered nightly job (run 37550620001) was still in progress at sync time and will add its own data commit — `git pull --ff-only` first. **Kylie's standing instruction: her Fable usage is limited; commit and push after every step so the thread is never lost.**_

## Current state
**Four covered cities** (`COVERED_METRO_IDS = ['la','san-diego','seattle','new-york']`). **New York was built this session, end to end, via `docs/new-city-checklist.md`** — the third run of the list, about two and a half hours from research to live, one commit per step. **Montreal is next.** Nothing is half-built.

**New York, what landed:** city type `hub` (corrected from an assumed `transit`); 18 team records with every feed id verified live (three of the ids written down in advance were wrong — details in the checklist); 33 venues from `docs/new-york-venue-table-answer.md`, each with a car share from `docs/new-york-city-type-answer.md`, every coordinate checked against OpenStreetMap (five moved); attendance pulled and calibrated for three seasons (Mets median 34,944; FCS football has no counts and sizes by capacity); one hand archive run answered with 30 events, 16 days of weather, 5 finals; hard access measured for all 33. On screen: Explore, the date page (Thu Oct 8 reads 6.9 Brutal — Yankees postseason, Knicks, Nets, Islanders) and the Add form all show New York. Screenshots were sent to Kylie.

**Also this session, earlier (all pushed):** the famous-nights list was split from a logged night's score (scores now come from the formula for any date, keyed by city and date — `scoresForNights` in `src/data/index.ts`); reconstructed reads for 16 past dates in LA and San Diego (`src/data/seed/past2026.ts`, 54 events, weather backfilled); `docs/unsized-events.md`, the running list of events listed but unsized; both New York research prompts drafted, sent, answered and saved in full.

## Changes made (this session, all pushed)
New York build: `src/config/metros.ts`, `src/data/formula/{gridlock,overlap}.ts`, `src/data/{teams,venues,venueAccessIndex,expectedDrawIndex}.ts`, `src/data/sources/{mlbSource,espnSource}.ts`, `scripts/attendance-collect.mjs`, `data/attendance/new-york/` (18 files), `data/venue-access.tsv`, the hand archive run's files under `data/{schedule-archive,weather,results}/`, `docs/{new-city-checklist,data-sources}.md`. Earlier in the session: `src/data/{index,personalLog,read}.ts`, six screens, `src/data/seed/past2026.ts`, `data/weather/{la,san-diego}/`, `docs/{new-york-venue-table-prompt,new-york-city-type-prompt,new-york-venue-table-answer,new-york-city-type-answer,unsized-events}.md`, `BACKLOG.md`.

From the parallel research session (`fan-friction-f8`), already on `main`: `docs/research-past-dates/`, `docs/build-reconstructed-reads.md`, `docs/tester-brief.md`, `docs/tester-interview-guide.md`, `.gitignore` (`private/`).

## Key decisions in force (new this session; earlier ones in BACKLOG.md)
- **Research a city's type before touching `CITY_TYPE`.** New York proved why: the code said transit, the measurement says hub (~60% by car; Citi Field ~60%, Yankee Stadium ~50%). Chicago and Boston are still assumptions.
- **One car share per venue, record the error, revisit at tuning** (Kylie, Oct 6). MetLife 0.85, UBS 0.90. The free way to hone it is MTA turnstile data per event; on the backlog.
- **No schema change for closed or unopened venues.** Aqueduct's post-racing figure rides a `fromYear: 2026` capacity; Etihad Park is left out until Jul 2027.
- **Table B grounds are not venue rows.** The US Open grounds, Javits, the Great Lawn, Bethpage, Liberty State Park and the Randall's Island fields have no fixed capacity; events there are placed as points and sized only by their own crowd figure (`docs/unsized-events.md`). A US Open day is sized by the grounds crowd (~73,201), never by Arthur Ashe (23,771).
- **A plain team id may already belong to an away team.** `giants`, `jets`, `rangers` are San Francisco, Winnipeg and Texas; New York's are `ny-giants`, `ny-jets`, `ny-rangers`.
- **The hard-access rule wins over the research, and it measures hillsides.** It flags one New York venue (PNC). Jones Beach, Belmont/UBS, the Meadowlands and Icahn pass because they are flat islands and causeways. No hand flags; the gap is the test case for the parked cars-per-exit rule.
- **Famous nights stays curated. A logged night's score comes from the formula, for any date.** Don't reintroduce hand-written rating rows.
- **Distance discount: after New York, with real time spent** (Kylie, Oct 6). It cannot be one rule for every city — rail changes what "far" means. Until then some New York nights read too heavy; known, accepted.
- **Testing notes:** `playwright-core` is not installed in a fresh container (`npm i --no-save playwright-core`; never add it to package.json). Scripts that import from the repo must run from the repo root. Headless Chromium at `/usr/bin/chromium` with swiftshader flags and a phone user agent; set `fan-friction:home-metro` and `fan-friction:tipsDone` in localStorage. `?metro=new-york&date=…` on `/explore` opens the city. The Add form is `/you/add`. `gh` is authenticated as kylieau; `gh workflow run schedule-archive.yml --ref main` triggers the nightly job. Don't `pkill` vite.

## Next steps
1. **Three New York follow-ons need Kylie** (all in BACKLOG.md): (a) she runs part 1 of the tester's later-cities SQL (`private/testers/becca/`), since New York is covered; (b) the tester's Oct 1, 3 and 6 nights show nothing until seeded — the research is saved in `docs/research-oct-2026/new-york.md`; seed those dates the way `past2026.ts` did LA's, then `node scripts/weather-fetch.mjs --backfill` (about an hour, on her word); (c) NY Comic Con, Oct 8–11, ~62,500 a day at Javits, is this week and is the first real Table B event — add as a point with its reported crowd, or leave it off and note it. Her call.
2. **Montreal**, via the checklist. First city outside the US: `America/Toronto`, metro id **`montreal`** (not yet in `metros.ts`), Canadiens via ESPN (`nhl` 10 — verify), plus CFL (Alouettes), MLS (CF Montréal), PWHL (Victoire) and college ids to look up. Needs its own venue-table and arrival-mode prompts (copy New York's; boundary: the island, Laval, Longueuil, the South Shore). A tester's Canadiens night (May 25, 2026) waits on it; its watch party has no crowd figure and lands on `docs/unsized-events.md`. Kylie runs part 2 of the tester SQL when it's covered.
3. **Tester interview, in person, about Oct 13.** A day before: a data-side check that her LA and San Diego nights show reads (and New York's, once seeded).
4. **Then the distance discount**, as its own proposal, calibrated per city from the DMA / commuting-zone / concert-radius sources in BACKLOG.md.
5. **Awaiting Kylie's reads:** Compare, a concert page, the entry layer and Add form, the sport list. **On hold for her decisions:** image share card, notifications, tips rewrite, Night story, Traffic, and whether a labelled footprint estimate is acceptable for unsized crowd events.

**Rules to carry (Kylie, Oct 6):** never report a gap from anyone's ratings as progress, never tune a constant to close one; attendance on held-out dates is the only accuracy target (`docs/formula-v4.md`). Big watch parties count as events of their size. Save every research source in full — a paste in the chat is not a saved source (New York's arrival research exists only as a transcription, by necessity; the note at its top says so). Research a city's type, don't assume it. Keep sessions lean.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
