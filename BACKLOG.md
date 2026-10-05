# Fan/Friction backlog

Deferred work and open questions that outlive one session. Remove an item only after checking it against the code. The current snapshot is in `MEMORY_HANDOFF.md`.

## Next
The structure pivot (Oct 4, 2026) is approved. The slice in progress is the nightly schedule archive (`docs/schedule-archive.md`): plumbing only, nothing new on screen. Do not start Traffic, Night story, the rating formula, Ticketmaster, or Supabase until she asks. PR #7 is merged (Oct 4 LA seed and map chips); the live site is https://fan-friction.vercel.app.

The old order, now behind the pivot plan: **Step 6 Traffic** (blue corridors, "Drag to your leave time," "Estimate · not live," no red; keep it a crowd read, not a route); **Step 7 leftovers** (post-game results and attendance; BMO/LAFC and Angel City; UCLA basketball; concerts via Ticketmaster, 🚩 ask before any key; **Night story**: event page only, label "The night," a short paragraph plus text links, no embeds, omit when empty, Save/I was there stay above it, hand-seed first); **Step 8 rating formula** (Crowd fight plus Gridlock via OpenStreetMap drive times; hold out 2–3 of the 13 nights; Medium same-sport weight stays the 0.35 draft until fitting).

Parked: favorite cities on the metro switcher, nights-per-city, a rich outdoor Forecast, NYC filler research only (do not seed), the first-run tips rewrite (now "log your first night"), team/artist pages.

- **Nights tab is per city/area** (Kylie, 2026-10-04). Same metro scope as the Map switcher. Needs a backend/data mechanism (nights filtered by metro) and visual chrome later. Do not build now.

## Direction pivot (Oct 4, 2026): approved, with locked answers
Reasoning: `docs/direction.md` (the log leads) and `docs/product-review-decisions.md` (her six decisions, newer where they differ). Kylie approved the plan and locked the questions below. **This slice is the schedule archive only.** Do not start the later slices until she asks. Her earlier answers still hold: the app ships with her own nights pre-filled; Compare stays; Famous nights stays but needs work; Supabase saving moves up in the plan and stays unconnected until she pastes keys.

### Locked answers (Oct 4, 2026)
| Question | Answer |
|---|---|
| Stamp lock | 24 hours after the scheduled start. Not 4 AM the next morning. |
| A night with several events | The 24 hours count from the last scheduled start time that night, whichever event is scheduled last. |
| Save / I was there | Event page only. The Map list stays as it is, including the gold button "See this event." |
| Famous nights | Keep the current stamps. Hand-check every stamp before it becomes "Were you there?" |
| Schedule archive | Yes. Plumbing only; nothing new on screen. See `docs/schedule-archive.md`. |
| Product risks (will people log, how often, the name, gridlock outside LA, backfilling past nights) | Parked. Not a build step. |
| Privacy | Private by default. A log is shared only by choice, later. No public profile or feed. |
| Tweets from the night | Hold. Do not build until access and cost are verified. |

### Plan (approved, in order)
1. **Nightly schedule archive.** Built as plumbing. A daily job saves the Los Angeles listings for the coming 14 days under `data/schedule-archive/`. A night from before the first file is reconstructed. Users see nothing. Supabase can take over later; it is not connected.
2. **Data foundation.** Not started. The night becomes the core unit (today the date is: ratings, calendar and Map all key off it). Each entry holds **forecast when you planned** (kept as shown, never recalculated; today a plan stores no rating) and **the stamp** (recalculated when the formula improves, with a "last updated" time; "reconstructed" for nights before archiving began). Tiers: pre-listed 1,000+; feeds friction 5,000+ (one event or a cluster of close rooms); manual entry for anything else, which gets a read from nearby big events and moves no one else's. Today `belowFloor` returns no rating at all (`ratingForNight` in `src/data/personalLog.ts`), which is backwards for the new rule. Games and shows are already one data shape; check wording and chips for sports-only assumptions.
3. **Screens.** Not started. Map: a card for the next saved night with its current forecast. Save / "I was there" stay on the event page only; the Map list does not gain them. You: "Did you go?" item once a saved night passes. Compare: replace the "Which fanbase really shows up?" copy now (copy only, no feature removed), rebuild later around your stats, your nights against each other, any two nights side by side, tour dates. Nights: Famous nights stays as it is until every stamp is hand-checked, then it can be retitled "Were you there?" with "I was there" as the main action, filters not hard rules, personalized once there is data, never framed as "worst night."
4. **Saved logs in accounts** (Supabase), private by default; link sharing and comparing against someone else's night come later. Not started. 🚩 Needs her project URL and public key; free plan has 2 active projects and she uses one; pauses when idle.
5. **Richer entries.** Not started. Final score (automatic for sports), setlist link, who you went with, private one-line note, optional private photo.
6. **Rating formula** (Step 8), not started, with the same formula for every night, the cluster rule, and capacity-based sizes (`venues.ts` already has capacity by setup; extend it, starting with LA).

### Conflicts
- **Logging threshold wording.** Still open. `docs/direction.md` and the firm rule in `AGENTS.md` say events of about 1,000+ can be logged. The review says anything can be logged and 1,000 only decides what is pre-listed. Both need her wording (the AGENTS.md rule is hers, so it was left alone).
- **Map actions vs. the Oct 4 UI lock.** Settled. Save / "I was there" stay on the event page. The Map list and its gold button, "See this event," do not change.
- **Viewing other people's logs.** Settled for now. Accounts, when they are built, are private by default. Sharing is by choice later. No public profiles or feed. Not started.
- **A stamp that can change** is less like a ticket stub than the direction's metaphor; "last updated" softens it. Not built.
- **Unverified claims in the review:** Untappd's opening screen and the API coverage notes were not checked, and one Famous night "couldn't be confirmed." Verify before relying on them; ask her to paste what can't be fetched. Review each data source's terms of use before any Ticketmaster key.
- **Famous nights stamps** stay as they are. Hand-check every stamp and example before the "Were you there?" version goes live. Her own pre-filled nights overlap this list; decide how they appear to a new user before that version.

### Open questions for Kylie
The eight pivot questions are answered in **Locked answers** above. Do not re-ask them. Still open: the logging-threshold sentence, plus Waiting on Kylie and Research leftovers.

## Prompt Kylie first thing when a session resumes
The Oct 4 pivot answers are locked (see Direction pivot). Do not open by starting Traffic, and do not re-ask those eight questions. Ask whether she has more UX/UI notes (she said more are coming; the running list and sorting are in `docs/ux-notes.md`) and whether she has anything to paste for the remaining seed data gaps (see Research leftovers). Sort new notes into structural (raise before the next step) and polish (batch after Step 5 or 6).

## First slice: remaining build steps
- **Done Oct 3 (Steps 3, a Map rework, and a first slice of Step 7):** Event screen; full-screen Map with a sheet that follows the finger; tappable pins and one selection; why chips; upcoming events from MLB and ESPN on the map with a range dropdown. Left over: sharing sends text plus the link, and the share card should become a night card, not an event card (image version later); dot size and heat still use capacity and the known crowd; the Event screen shows no result block ("The game" / "The show") because the seed has no results; the gold button on the Map was a draft. PR #6 locks it as **See this event**. "I was there" is on the Event screen as of Step 5.
- **Done Oct 3 (Step 4):** Nights calendar shaded by each date's rating (date in the corner, rating in the center; no Quiet/Unrated chips, no color legend). Search by team, artist, or venue; Famous nights is what an empty search shows. One When control (Today, Next 7 days, Pick a date) sits in the on-map pill; the area switcher stays its own control in the header. Date ratings show to one decimal. Next 7 days shows the average of rated days in the span, and hides the score when none are rated. A single day keeps its own rating. The pill reads Today, Next 7 days, or the picked date. On this night stays on Nights. The tab is still named Nights.
- **Done Oct 3 (Step 5, merged on `main`):** You tab with Up next, Your nights from `docs/kylie-logs.md` (sports 2025–2026 and the concerts, including 2013–2015), team and sport filters, rough dates, and an order setting (Plans first, saved on the phone). The headline counts are Events (log entries) and Venues, with a By type list under them (game, show, and the rest). A night row and the event page keep Outcome, Type, Starter, Promo, and Notable on separate lines. A game's type is the sport (Baseball, Women's basketball, Football, and so on). A concert stays Show, or Festival or Live broadcast. Empty lines stay hidden. Personal notes stay off the row, the share card, and the map. "I was there" and "Plan this night" write through a swappable storage layer. Export downloads a JSON backup. Cloud sync is not connected. PR #6 (not merged) then makes You attended-only: Up next and the Plans-first toggle leave the screen, the event button says **Save this night**, and a plan stays in storage and in Export without becoming a Your nights row.
- **Step 6 (paused):** Traffic mode. See **Next**. Do not start it during the structure pivot.
- **Step 7 (partly done):** Upcoming home games are live: MLB (Dodgers, Angels) and ESPN team schedules (Lakers, Clippers, Kings, Galaxy, Rams, Chargers, USC, UCLA), served from today on. Still to do, after Traffic: results and attendance after games, BMO Stadium/LAFC and Angel City, UCLA basketball, concerts, and **Night story**. Concerts come from Ticketmaster first (🚩 needs a free developer key; ask Kylie before signing up); SeatGeek or others later. Night story (Kylie, Oct 4, 2026) is not sooner than these leftovers: event page only, under Crowds/Traffic, not on You; section label “The night”; a short paragraph then a few text links (source names); no screenshots or embedded posts; white content card and ink type; omit the whole block when there is no story (no empty state); **Save this night** / **I was there** stay above it; hand-seed early nights first.
- **Step 8:** Rating formula from the v3 design (Crowd fight share-of-seats, Gridlock zones with OpenStreetMap drive times computed once per venue pair, free sources only). Hold back 2–3 of the 13 nights to test it, so it isn't just tuned to fit. When the app widens beyond LA, add benchmark dates that test what LA can't (list in the v3 doc).

## Waiting on Kylie
- **Open from the Oct 3 notes** (`docs/ux-notes.md`): team and artist (fanbase) pages as the answer to the "fake fan" claim, and what that does to the Compare tab; logging a role (at event A / B / in the city); replacing tips with "log your first night"; "Following" (her own teams, venues, artists; filters Coming up); the renaming question for Nights (my recommendation: keep "Nights"); notification timing (one ping). Team/artist pages and the tips rewrite are parked until after Step 8 (see **Next**).
- **First-run tips are on hold** (Kylie, Oct 1): rewrite all three once the bigger product questions settle, since the tips will explain them. Tip 2 still describes the rating model in draft form.
- **Rating model v3 is recorded in `docs/overlap-and-date-rating-v3.md`; what's still open there:** the Medium same-sport weight (the lean draft is 0.35 until she confirms it at fitting in Step 8; the older band was 0.3–0.4 vs. 0.5); nights 5 and 11 stay hand-set until the date-score settings (bump, trigger) are fitted on about 10 of the 13 hand ratings and tested on the other 3. Night 5 comes out near 7.4 under the placeholders against Kylie's gut of 5, possibly 6, and night 11 about 6.4–7.9 depending on the Medium weight. Also open: a small genre-adjacency map for the Marquee lift (hand-written for LA), how pre-game standings enter (decided: they count), the fixed 15,000-seat floor (revisit with a second city), the weekday adjustment, the members-only/ballot flag, a Las Vegas concert visitor lift, college programs in one-team markets, and the Gridlock numbers (coupling weight 0.15, closure handling). The 2017 Emmys enter night 11 only if a headline event shared the L.A. Live zone that night (check the Crypto.com Arena calendar for 9/17/17). A site admin for map exceptions is parked for v2. Then trim `rating-model-draft.md` to match.
- The occasion/friction table for all 13 nights is still a draft (stored as `status: 'draft'` in the seed).
- Whether "Pick a night," "Next big night" and "On this night" keep the word "night" (she's fine for now but reserves judgment).
- Her ongoing doubt about the word "friction" for the event verdict.
- The 2013–2015 concerts are in her log (rough dates, no rating). She can still say to drop them.

## Research leftovers
- Her 2025 recap says 13 UCLA WBB nights; the line list in `docs/kylie-logs.md` has 12. The app follows the line list. Ask her if one night is missing.
- Seed data gaps (updated Oct 3): **filled and checked Oct 3:** night 4 (Dodgers vs. Braves 50,182 on Tue 4/1/25 at 7:10 pm, Kings vs. Jets 15,012 per Hockey-Reference); earlier, the 9/17/17 start times and most start times and counts for nights 1–4. **Labeled estimates seeded** (Kylie OK'd estimates if labeled): World Series G2 52,725 is announced (Baseball-Reference per Kylie's paste; ESPN may differ slightly, not rechecked), East LA Classic 18,000 (2023 game; this year unconfirmed), Beyoncé 9/1/23 about 51,855 (three-night average), Taylor Swift 8/4/23 about 67,500 (Eras Tour per-night average). **Still open:** crowd counts for Gilmour (his Oct 2024 show is at Intuit Dome; the pasted 17,292 is from his 2016 Hollywood Bowl shows, not usable), ELO, Imagine Dragons, Rauw Alejandro and Beyoncé on night 3 (4/28/25 tour opener); Elton John 11/19/22 seeded at 8:00 (one source said 8:15; close enough) and The Weeknd 9/3/22 at 9:20 pm, his stage time (6:30 pm is likely doors); the Rose Bowl reading on 9/3/22 (only "100°F+ that day" is recorded); Rose Bowl capacity (89,702 or 92,542); venue renames: BMO Stadium was announced Jan 19, 2023 (the seed says from 2023-01-01; Kylie's paste said Jan 20) and the Kia Forum rename was April 4, 2022 (confirmed; the venue record has no earlier name yet). The Galaxy count (24,537) is from the club's own match report; Kylie's paste says it's confirmed but gave no source. Scheduled times seeded Oct 2 (checked): BLACKPINK 8:00 (actual 8:30, a day-of fact, not used), Beyoncé 9/1/23 8:00 (actual 8:50), Dodgers vs. Padres 4/13/24 6:10 (rain delay, not used). Each is marked in `src/data/`.
- `src/data/audience.ts` still has the Oct 1 overlap rule (same sport = High, different sports = Medium). The v3 tiers replace it when the formula is built at Step 8.
- Night 12's draft friction text calls the Dodgers game a "night game, after the heat," but it was scheduled for 6:10 pm; reword.
- Night 7: concerts and other events at Crypto.com and Honda Center not checked.
- Night 9: pick a new comparison Friday (7/21/23 was an Ohtani start).
- Concert crowd counts not found: Gilmour, ELO, Imagine Dragons, Rauw Alejandro, Taylor Swift (per night).
- The review page (artifact WaSZurptyrcUs74KUjBE6F) still says "Local Load" in option C; update before sharing.
- The mockups in `design/wireframes/` predate the rating model ("Squeeze 8/10" tags, "NIGHT · BRUTAL"). Follow `product-decisions.md`, not the mockups.

## NYC filler (parked)
- Research prompt: `docs/nyc-filler-collection-prompt.md`. Research only. Do not seed New York, do not score it, and do not build a New York screen.
- The area switcher lists real metros from her log, with Los Angeles first. New York in that list is Citi Field only, from the Braves at the Mets night. Ventura is part of Los Angeles. Do not seed this filler pack, and do not turn that one building into a full New York metro.
- Do not import Los Angeles rules onto New Jersey, Long Island, or the boroughs.
- Collection rules in that prompt: MLB, NBA, NHL, NFL, and at least one stadium or arena concert, plus one ordinary weeknight. Prefer the same dates as the LA seeded nights. Goal is 5 if those dates can carry it. Cap is 10. Add another date only to cover a league or shape the seed dates missed. Venue table only for buildings those nights use.

## Saving and accounts
- **Step 5 saves on this phone** (`src/data/storage/`). A browser clear can erase nights she marked; Export my nights is the backup. The seeded log ships with the app. Local storage plus Export stays the store until the move below.
- **Supabase direction (Kylie, Oct 4, 2026, she agreed):** catalog and seed events should live in Supabase as shared truth, not only repo JSON. Schedules and crowd figures are shared; local JSON is a spike that gets painful once nightly updates or more cities land. You-tab personal logs (I was there, notes, plans) should also move to Supabase eventually, for phone-to-laptop sync and so a browser clear does not wipe marks.
- **Order:** moved up by the pivot (Oct 4): saved logs in accounts are the answer to an empty-log risk and to phone-only loss. Catalog events first, then You, only after she pastes keys. The plan is approved. Still do not connect Supabase until those keys exist. The schedule archive does not use it.
- She does not need to do anything in Supabase right now. Still waiting on her project URL and public anon key. 🚩 The free plan allows 2 active projects per account and she already uses one. It also pauses after about a week idle. The adapter must not call the network until those keys exist.
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
- **Schedule archive** (`docs/schedule-archive.md`): `npm run archive-schedule` writes `data/schedule-archive/la/YYYY-MM-DD.json`. GitHub Actions runs it nightly and commits to `main`. A feed failure writes nothing. Archive-only commits skip the Vercel deploy. The map still gets an empty list when a live feed is down; only the archive treats that as a failed run.
- **ESPN schedule feed (`src/data/sources/espnSource.ts`) is unofficial.** It can change without notice, and it answers 403 (no CORS headers) to "HeadlessChrome" user agents, so screenshot scripts must send a normal browser user agent. MLB's feed (`mlbSource.ts`) is the official free one. Both only serve today onward; past dates come from the seed.
- ESPN's feed fails quietly (empty list) and is cached for the session, including an empty result after a failure; consider not caching failures.
- Sheet drag (`src/lib/useSheetDrag.ts`) uses touch events on the sheet; mouse dragging isn't supported (a click on the grabber toggles). Smoothness on a real phone is untested; Kylie asked for it twice.
- The main JavaScript file is about 1.3 MB, mostly the map library. Split the map out so other tabs load faster.
- An offline-ready service worker for the installed app.
- **Screenshot checks:** `playwright-core` driving `/usr/bin/chromium` with `--use-angle=swiftshader --enable-unsafe-swiftshader` works in this container. Keep the helper script in the session scratchpad, not the repo.
- Confirm the Vercel plugin's account connection works (Kylie ran `/mcp`, but it hasn't been used yet).
