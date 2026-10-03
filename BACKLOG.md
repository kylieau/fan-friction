# Fan/Friction backlog

Deferred work and open questions that outlive one session. Remove an item only after checking it against the code. The current snapshot is in `MEMORY_HANDOFF.md`.

## Prompt Kylie first thing when a session resumes
Ask whether she has more UX/UI notes (she said more are coming; the running list and sorting are in `docs/ux-notes.md`) and whether she has anything to paste for the remaining seed data gaps (see Research leftovers). Sort new notes into structural (raise before the next step) and polish (batch after Step 5 or 6).

## First slice: remaining build steps
- **Done Oct 3 (Steps 3, a Map rework, and a first slice of Step 7):** Event screen; full-screen Map with a sheet that follows the finger; tappable pins and one selection; why chips; upcoming events from MLB and ESPN on the map with a range dropdown. Left over: sharing sends text plus the link, and the share card should become a night card, not an event card (image version later); dot size and heat still use capacity and the known crowd; the Event screen shows no result block ("The game" / "The show") because the seed has no results; the gold button on the Map is a draft Kylie isn't sure about (kept in one small piece). "I was there" is on the Event screen as of Step 5.
- **Done Oct 3 (Step 4):** Nights calendar shaded by each date's rating (date in the corner, rating in the center; no Quiet/Unrated chips, no color legend). Search by team, artist, or venue; Famous nights is what an empty search shows. One When control (Today, Next 7 days, All upcoming, Pick a date) sits in the on-map pill; the area switcher stays its own control in the header. The header rating still describes the base date when the map is showing a range. On this night stays on Nights. The tab is still named Nights.
- **Done Oct 3 (Step 5, on this phone):** You tab with Up next, Your nights from `docs/kylie-logs.md` (sports 2025–2026 and the concerts, including 2013–2015), team and sport filters, rough dates, and an order setting (Plans first, saved on the phone). The headline counts are Events (log entries) and Venues, with a By type list under them (game, show, and the rest). A night row and the event page keep Outcome, Type, Starter, Promo, and Notable on separate lines. A game's type is the sport (Baseball, Women's basketball, Football, and so on). A concert stays Show, or Festival or Live broadcast. Empty lines stay hidden. Personal notes stay off the row, the share card, and the map. Up next can show Starter and Promo only. "I was there" and "Plan this night" write through a swappable storage layer. Export downloads a JSON backup. Cloud sync is not connected.
- **Step 6 (next):** Traffic mode (blue corridors, "Drag to your leave time," "Estimate · not live," no red).
- **Step 7 (partly done):** Upcoming home games are live: MLB (Dodgers, Angels) and ESPN team schedules (Lakers, Clippers, Kings, Galaxy, Rams, Chargers, USC, UCLA), served from today on. Still to do: results and attendance after games, BMO Stadium/LAFC and Angel City, UCLA basketball, and concerts. Concerts come from Ticketmaster first (🚩 needs a free developer key; ask Kylie before signing up); SeatGeek or others later.
- **Step 8:** Rating formula from the v3 design (Crowd fight share-of-seats, Gridlock zones with OpenStreetMap drive times computed once per venue pair, free sources only). Hold back 2–3 of the 13 nights to test it, so it isn't just tuned to fit. When the app widens beyond LA, add benchmark dates that test what LA can't (list in the v3 doc).

## Waiting on Kylie
- **Open from the Oct 3 notes** (`docs/ux-notes.md`): team and artist (fanbase) pages as the answer to the "fake fan" claim, and what that does to the Compare tab (decide after Step 5); logging a role (at event A / B / in the city); replacing tips with "log your first night"; "Following" (her own teams, venues, artists; filters Coming up; needs Step 5 saving); the renaming question for Nights (my recommendation: keep "Nights"); notification timing (one ping).
- **First-run tips are on hold** (Kylie, Oct 1): rewrite all three once the bigger product questions settle, since the tips will explain them. Tip 2 still describes the rating model in draft form.
- **Rating model v3 is recorded in `docs/overlap-and-date-rating-v3.md`; what's still open there:** the Medium same-sport weight (0.3–0.4 vs. 0.5, held until fitting at Step 8); nights 5 and 11 stay hand-set until the date-score settings (bump, trigger) are fitted on about 10 of the 13 hand ratings and tested on the other 3. Night 5 comes out near 7.4 under the placeholders against Kylie's gut of 5, possibly 6, and night 11 about 6.4–7.9 depending on the Medium weight. Also open: a small genre-adjacency map for the Marquee lift (hand-written for LA), how pre-game standings enter (decided: they count), the fixed 15,000-seat floor (revisit with a second city), the weekday adjustment, the members-only/ballot flag, a Las Vegas concert visitor lift, college programs in one-team markets, and the Gridlock numbers (coupling weight 0.15, closure handling). The 2017 Emmys enter night 11 only if a headline event shared the L.A. Live zone that night (check the Crypto.com Arena calendar for 9/17/17). A site admin for map exceptions is parked for v2. Then trim `rating-model-draft.md` to match.
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
- The area switcher lists the cities that appear in her log. New York in that list is Citi Field only, from the Braves at the Mets night. Do not seed this filler pack, and do not turn that one building into a full New York metro.
- Do not import Los Angeles rules onto New Jersey, Long Island, or the boroughs.
- Collection rules in that prompt: MLB, NBA, NHL, NFL, and at least one stadium or arena concert, plus one ordinary weeknight. Prefer the same dates as the LA seeded nights. Goal is 5 if those dates can carry it. Cap is 10. Add another date only to cover a league or shape the seed dates missed. Venue table only for buildings those nights use.

## Saving and accounts
- **Step 5 saves on this phone** (`src/data/storage/`). A browser clear can erase nights she marked; Export my nights is the backup. The seeded log ships with the app.
- **Supabase is still waiting** on Kylie's project URL and public anon key. 🚩 The free plan allows 2 active projects per account and she already uses one. It also pauses after about a week idle. The adapter stub does not call the network and does not need those keys.
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
- **ESPN schedule feed (`src/data/sources/espnSource.ts`) is unofficial.** It can change without notice, and it answers 403 (no CORS headers) to "HeadlessChrome" user agents, so screenshot scripts must send a normal browser user agent. MLB's feed (`mlbSource.ts`) is the official free one. Both only serve today onward; past dates come from the seed.
- ESPN's feed fails quietly (empty list) and is cached for the session, including an empty result after a failure; consider not caching failures.
- Sheet drag (`src/lib/useSheetDrag.ts`) uses touch events on the sheet; mouse dragging isn't supported (a click on the grabber toggles). Smoothness on a real phone is untested; Kylie asked for it twice.
- The main JavaScript file is about 1.3 MB, mostly the map library. Split the map out so other tabs load faster.
- An offline-ready service worker for the installed app.
- **Screenshot checks:** `playwright-core` driving `/usr/bin/chromium` with `--use-angle=swiftshader --enable-unsafe-swiftshader` works in this container. Keep the helper script in the session scratchpad, not the repo.
- Confirm the Vercel plugin's account connection works (Kylie ran `/mcp`, but it hasn't been used yet).
