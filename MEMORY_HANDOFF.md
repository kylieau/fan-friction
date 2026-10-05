# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`.

_Last synced: Oct 5, 2026 (Claude Code, formula session)._

## Current state
**The rating formula v4 is built and wired in** (`src/data/formula/`, `src/data/formulaRead.ts`): Crowd fight (contested seats), Conditions (real weather from Open-Meteo, forecast and archive), lightest Gridlock (zones from venue locations). Every date's rating, every event's occasion, verdict and why line are computed; the nightly job fetches weather then records formula forecasts; the calendar shades every date with events; upcoming dates no longer show dashes. Hand ratings stay in the seed as comparison only (Kylie's rule). `docs/formula-table.md` prints the formula against the 13 nights (mean gap 0.81, comparison only).

- **Local, not pushed:** ten commits (Home/Explore, formula docs, formula steps 1–4, weather). Kylie says push when she's looked.
- **Docs:** `docs/formula-analysis.md` (fresh-eyes), `formula-review-prompt.md` + `formula-review-response.md` (outside review), `formula-v4.md` (decisions, her rulings), `formula-table.md`.
- **Weather:** `data/weather/la/*.json` + `src/data/weatherIndex.ts`; `scripts/weather-fetch.mjs` (nightly, and `--backfill` once for the seeded nights). Feels-like is the headline number (Map header city point, date page per open-air venue, event page detail with the range during the event). Covered stadiums count as open air.
- **Known soft spots to tune:** the World Series G1 reads Heavy friction on 10/25/24 (five competitors overwhelm the Marquee pull of 1.6); artists have no occasion input yet (Taylor Swift reads Routine), a "headliner tier" fact is the likely fix; Famous nights show curated headlines with computed numbers; all constants are placeholders until the attendance calibration (review §11).

## Changes made (this session)
Formula: `src/data/formula/{occasion,overlap,crowdFight,weather,gridlock,index}.ts`, `src/data/{formulaRead,weather,weatherIndex}.ts`, `read.ts` (method formula), `forecastCapture.ts`, `index.ts` (getCityDate/getRatedDates/getCalendarMonth use the formula; `handRatingFor` for comparison), seed facts in `testNights.ts`, `types.ts` (OccasionFacts, SportsLevel, invited, strained, status formula), `venues.ts` (strained), scripts (`weather-fetch`, `weather-index`, `formula-table.mts`), package.json archive order, workflow adds weather files, screens (Map header, DateScreen, EventScreen weather, Settings attribution), `AGENTS.md` (no-results rule restated), `BACKLOG.md` (weather notes), `docs/build-brief.md` (Open-Meteo milestone).

## Key decisions in force
- **Formula v4 (Oct 5):** see `docs/formula-v4.md`. Hand ratings are comparison only, never the target. Chargers' first LA game is Major; Dodgers–Braves 4/1/25 Routine with a +1 storyline fact; Conditions is a third reason (open-air only, per-city heat baseline concept, start-hour headline, range on the event page). Combination = max + 0.25 × Σ(others − 3)⁺.
- **The no-results rule means only the event's own outcome** (score, who won). Observed weather may rate a past date. Crowd counts stay evidence (Oct 1). Earlier docs over-applied it.
- **Weather:** one source (Open-Meteo; free non-commercial, on the cost milestones; credit on Settings). City point = the metro's map center (revisit later). No "estimated" labels on archive weather.
- **Home (Kylie, Oct 5):** the app opens on a digest, not the Map. Tonight shows only when the home city has events that day; its list is the biggest three by crowd first, then the rest, in a box three rows tall that scrolls. No feed of strangers, nothing ranked by friction. Friends grouped by event ("Sam and Priya · Slayer"). Coming up and Recent list everything, home and away; Recent shows the outcome when known.
- **Explore (Kylie, Oct 5):** Map / Calendar switch, remembers last choice. One search icon (Home and Explore) opens the calendar view's search.
- **No confirmation steps:** no "Did you go?", no "Were you there?" as a step. Attending → Attended when the date passes (`settlePassedPlans` at app start).
- **Friction chips:** Low never shown; Moderate pale blue, Heavy Dodger blue, Extreme ink. Same palette on the Map sheet and the date page.
- **Spacing/type:** she wants it tight ("I'm not my grandparents"); one pass done, say "tighter" for another.
- **Logos:** abbreviations until a public launch decision; logos are a licensing question she'll judge.
- **Pushing (Kylie, Oct 5):** don't push every change at once. Commit, leave it on the local site (`npm run dev`, localhost:3001) for her to look at, push when she says. She OK'd the last pushes because she was stepping out.
- **UI copy rule (Kylie, Oct 5):** users are not dumb; no explanatory banners, no "this is how others see you", utilities behind the gear. In `AGENTS.md`.
- **You vs profile (settled Oct 5 after consulting Letterboxd/Strava/Flighty patterns):** one page; You holds the controls, `/p/<handle>` is the same page as a visitor sees. No separate profile page, no "Your page" row; the link is only for sharing.
- **Friends is a tab on You** (she corrected a section I built). Feed = friends only, never strangers; no comments or likes.
- **Stats:** Nights, Venues, Heaviest night (not Cities). Filters live on the Stats tab only.
- **Accounts (Kylie, Oct 5):** account = login + saved data; profile = public face (display name, avatar, visible nights). She wants profiles **early** so they can be corrected, and people following each other someday. Visibility switch on the account: Only me (default) / People I approve / Anyone. **No feed of strangers' nights. No location, ever.** Private note lives in `night_notes`, never on a shared page. Photos: later, only if free. Sign-in: Google + email link; Apple waits for the native app (🚩 $99/yr).
- **Profile entry point (approved):** tap your name at the top of You → your profile as others see it, with Edit (display name, visibility). Link form `/p/<handle>`.
- **Her nights live in her account**, not in the app. New people start empty. `hiddenSeedIds` stays only for old phone copies.
- **Working rules.** Propose a structural change, then wait for approval. Never delete a feature. Flag a new cost with 🚩 and wait. Kylie locks decisions. Do not reopen a locked answer unless she does.
- **Stamp clock.** On a night with several events, the clock is the last scheduled start that night, whichever event is scheduled last. The stamp locks 24 hours after that start. Tapping does not move the clock.
- **Forecast.** Save stores the night only, with no forecast. The every-30-minute start-time capture is parked. Until it returns, the stamp uses the latest daily Los Angeles snapshot saved before the event's start that includes the event, and is labeled as such. A snapshot at the start, or after it, is not used. If that file has no number, no number is added. Los Angeles only.
- **Map card (Oct 5).** Any city. The lines are "Next saved night", the chip name, then the date and city ("Fri, Oct 9 · Boston"). No gold button. A tap opens the event in its own city and leaves the map where it is. Back restores it.
- **Home (Oct 5).** One city, stored on the device. First open: "Where's home?" House icon in the switcher. "Set as home" only on cities with events. The map always opens on home and never follows a saved night.
- **Map UI.** No longer locked. The Oct 4 freeze on chips, the sheet, the glow, and the legend is lifted. Still propose, then wait. Save and "I was there" stay on the event page.
- **Under 5,000.** Those rooms stay off the map. They do not feed friction. They can still be logged, and they can take a nearby read.
- **Direction (Oct 4).** The log leads. Nothing built is deleted. No points, leaderboards, collectible badges, open posting, public photo walls, navigation, or a standalone "is tonight bad?" feed. v1 uses public data only. Logs are private by default. Tweets stay on hold until access and cost are verified. Product risks are parked.
- **Still in force.** Her words beat docs and other models. Write Fan/Friction with the slash. Free until forced. Screens read only through `src/data/index.ts`. Every crowd figure has a kind label. Only pre-event facts affect a rating. One gold button per screen. Traffic is an estimate only, and it is never red.
- **Logging-threshold wording.** Still open, and parked. Direction and `AGENTS.md` say about 1,000+ can be logged. The review says 1,000 only decides what is pre-listed.
- Cloud notes: Wikipedia is blocked; ESPN rejects headless-Chrome user agents; screenshots use `playwright-core` with swiftshader args; don't `pkill` vite.

## Next steps
1. Kylie looks at the formula on the local site (date pages, calendar, event pages, Map header weather), then says push.
2. Tuning session with her on the 13 nights (holdouts kept), including the WS "Heavy" soft spot and an artist headliner-tier fact. Then the attendance collection job (review §11) for real calibration.
3. Data widening when she asks (away games, concerts, results). Entry-row design when she has notes. Parked: full Gridlock zone design (after a season of stamps), Traffic, Night story, Compare-with.

**Next command to run:**
```bash
git status -sb && npm run dev   # localhost:3001; formula table: npx rolldown scripts/formula-table.mts --format esm --platform node -o /tmp/t.mjs && node /tmp/t.mjs
```
