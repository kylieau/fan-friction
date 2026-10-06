# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`. The build order is `docs/big-picture-plan-oct6.md`.

_Last synced: Oct 6, 2026, end of the fourth session. Everything below is committed and pushed to `main` (Vercel builds from it); the working tree is clean. **First thing next session: settle the three New York questions below, then build the city.**_

## Current state
**Three covered cities** (`COVERED_METRO_IDS = ['la','san-diego','seattle']`). **New York is next, then Montreal.** Both New York research answers are in and saved; the city is **not built**, and three things must be settled first (see Next steps). Of the big-picture plan, everything through Seattle is done and live.

**This session did three things, all verified and pushed:**

**1. Split the famous-nights list from the score a logged night shows.** One curated list had been doing two jobs: "Famous nights" on the calendar *and* the only place a logged night could find its score. So a hand-typed night showed a blank read unless it landed on one of the 15 curated dates — a live hole since "Add an event" shipped. Famous nights is unchanged. Scores now come from the formula for whatever nights a log contains (`scoresForNights`, `nightsOf` in `src/data/index.ts`). **Scores are also keyed by city AND date now**, not date alone; every screen previously looked up against Los Angeles regardless of where the night happened, and only the away-night flag (`inMetro: false`) hid it. That flag can now be cleared for a covered city.

**2. Reconstructed reads for 16 past dates** (`src/data/seed/past2026.ts`, 54 events from `docs/research-past-dates/`). 15 LA dates plus San Diego's Aug 22, 2026. The spread reads right: Mar 18 (one Ducks game) 1.0, Apr 30 1.0, Apr 26 7.6, Apr 4 8.4, Sep 20 8.5, San Diego 6.1. Weather came from the Open-Meteo archive for all 16. No hand-written date ratings were needed — that is what the split bought. No results seeded (evidence beside a read, never an input). **In the browser the numbers read 8.4 and 5.9 until the nightly job pushes the new weather files to Supabase**; the app reads weather from Supabase, not from the repo files.

**3. `docs/unsized-events.md`**, a running list of events that are listed but feed nobody's friction (Kylie, Oct 6: record them so the gap can be attacked later). Three today: the LA Marathon, the FIFA Fan Festival, the Union Station fan zone.

**New York research (saved, not yet applied):** `docs/new-york-venue-table-answer.md` (33 buildings with capacities, plus a second table of open grounds) and `docs/new-york-city-type-answer.md` (28 car-share rows). The arrival-mode original was delivered as a PDF that is **not in the repo** — what is saved is a transcription; add `new-york-city-type-answer.pdf` beside it when Kylie can supply the file, as Seattle's is saved.

## Changes made (this session, all pushed)
Ours: `src/data/{index,personalLog,read,teams,sources/seedSource}.ts`, `src/data/seed/past2026.ts` (new), `src/screens/{You,Profile,Home,Compare,ManualEntry}Screen.tsx`, `src/screens/FavoritePage.tsx`, `data/weather/{la,san-diego}/` (16 new files), `src/data/weatherIndex.ts` (generated), `docs/{new-york-venue-table-prompt,new-york-city-type-prompt,new-york-venue-table-answer,new-york-city-type-answer,unsized-events}.md`, `BACKLOG.md`.

From the parallel research session (`fan-friction-f8`), already on `main`: `docs/research-past-dates/`, `docs/build-reconstructed-reads.md`, `docs/tester-brief.md`, `docs/tester-interview-guide.md`, `.gitignore`.

## Key decisions in force (new this session; earlier ones in BACKLOG.md)
- **Famous nights stays curated and hand-checked. A logged night's score comes from the formula, for any date.** Don't reintroduce hand-written rating rows to make a night show a score.
- **New York is a `hub` city, not transit** (measured, `docs/new-york-city-type-answer.md`): ~60% of a big crowd arrives by car. The ballparks broke the assumption — Citi Field ~60% car, Yankee Stadium ~50%. The code still says `transit`; that is the first thing to change.
- **Research boundaries are set by geography, then enumerated** — don't hand the researcher a venue list, or you get back exactly the list you thought of.
- **Check the venue table before giving up on a size** (the Seven Lions precedent: the research said "no capacity figure," but Waterfront Park was already in our table at 15,000).
- **Privacy split (Kylie, Oct 6):** public event lists and research are saved in the repo; the tester's name, email, attended list and import SQL stay out. `private/` is git-ignored; verified nothing under it is tracked and the name appears nowhere in history.
- **Testing notes:** `playwright-core` is **not installed** in a fresh container — `npm i --no-save playwright-core` (don't add it to package.json). Headless Chromium at `/usr/bin/chromium` with swiftshader flags and a phone user agent (ESPN 403s "HeadlessChrome"); set `fan-friction:home-metro` = `"la"` and `fan-friction:tipsDone` = `true`. Scripts that import from the repo must run from the repo root, not the scratchpad, or node can't resolve `vite`. Don't `pkill` vite; use `kill $(lsof -ti:PORT)`.

## Next steps
1. **Settle three New York questions before building** (all in BACKLOG.md with detail):
   a. **City type** — change `'new-york': 'transit'` to `'hub'` in `src/data/formula/gridlock.ts`. One word, but every venue without its own figure depends on it.
   b. **Car share per event type** — `carShare` is one number per venue; MetLife needs three (NFL ~87%, concerts ~75%, no-parking ~60%) and UBS two (Islanders ~89%, other ~93%). Both are large and frequent. Either add an override or pick one value and record the error.
   c. **"Out of use from" on a venue** — `venues.ts` has `fromYear` on a capacity but no end date. Aqueduct stopped live racing Jun 28 2026; Etihad Park opens Jul 17 2027; Pacha was dark through 2025. *Not blocking the tester's nights* (hers are MSG, UBS ×2 and Prudential, all open), but blocking a correct venue table.
2. **Then build New York via `docs/new-city-checklist.md`.** Team ids to verify against the feeds first (Seattle's had to be): Yankees 147, Mets 121 (MLB); nba Knicks 18, Nets 17; nhl Rangers 13, Islanders 12, Devils 1; nfl Giants 19, Jets 20; usa.1 NYCFC 17606, Red Bulls 190; usa.nwsl Gotham FC 15362. `new-york` already exists as a metro id. Watch the traps the research found: use US Open **grounds** attendance (~73,201/day) not Arthur Ashe (23,771); the Belmont Stakes ran at **Saratoga** in 2024–2026; Hofstra's arena fell below 5,000; Javits carries per-event crowds, not a capacity; Red Bull Arena is Sports Illustrated Stadium (Dec 2024) and The Theater at MSG is Infosys Theater (Feb 2026).
3. **Montreal after New York.** First city outside the US, `America/Toronto`, metro id **`montreal`** (confirmed convention). A tester's Canadiens night (May 25, 2026) waits on it; its watch party has no crowd figure, so it will land on `docs/unsized-events.md`.
4. **Tester (Becca), interview in person about Oct 13:** when New York is covered, Kylie runs part 1 of `private/testers/becca/becca-later-cities.sql`; part 2 when Montreal lands. **A day before the interview, do a data-side check that her LA and San Diego nights show reads.**
5. **Awaiting Kylie's reads:** Compare, a concert page, the entry layer and Add form, the sport list. **On hold for her decisions:** image share card, notifications, tips rewrite, Night story, Traffic, and whether a labelled footprint estimate is acceptable for unsized crowd events.
6. **Later:** the distance discount in Crowd fight — New York is where its absence starts to bite (a Jones Beach show, a PNC show and a Yankees game read as heavy friction when those crowds never share a road). Rerun the retune after a season.

**Rules to carry (Kylie, Oct 6):** never report a gap from anyone's ratings as progress, never tune a constant to close one; attendance on held-out dates is the only accuracy target (`docs/formula-v4.md`). Big watch parties count as events of their size. Save every research source in full — a paste in the chat is not a saved source. Research a city's type, don't assume it (New York proved why). She is near her usage limit on this model; keep sessions lean.

**Known gap to expect on the live site:** reconstructed reads show 8.4 (Apr 4) and 5.9 (San Diego) rather than 8.5 and 6.1 until the nightly job runs `catalog-write` and the archived weather reaches Supabase. Trigger by hand with `gh workflow run schedule-archive.yml --ref main`.

**Next command to run:**
```bash
git pull --ff-only && npm run dev   # localhost:3001
```
