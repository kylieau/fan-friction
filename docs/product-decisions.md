# Product decisions (condensed, Sep 30, 2026)

The thesis: big-city fans get called "fake." Attendance is shaped by competition (other 5k+ events, traffic, weather, stakes), not just loyalty. The app makes that competition visible. US-general, seeded in LA, Canada later. Sports-heavy, with concerts and other big ticketed events. Floor for map dots is 5k capacity. M2/M3 (public launch, revenue, licensing) are out of scope and should not be raised unless Kylie asks.

## Map and modes
- Modes: Crowds | Traffic. Traffic is estimates only ("Estimate · not live"). No live data, no red "jam" color.
- Heat map: gold glow and dot size show where crowds went. Each event's tag shows its friction verdict in words (for example "Extreme friction"), not a number. ★ = biggest crowd in that city that night. SOLD OUT tag = venue full (World Series games get it too, nothing special).
- Tabs: Map, Nights, Compare, You. Opens on Today, even when quiet. Quiet state offers: next big night, "On this night" (a famous past night from this date), your teams' next game.
- Nights tab: search, a calendar shaded by night rating with each day's number and a legend, and "Famous nights." No "Jump to" chips.
- "Brutal nights" is dropped as a stat or designation. "Immune" is not a word to use.
- **Rating model (Oct 1, 2026, replaces per-event Squeeze scores):**
  - **The date's rating:** one 1–10 rating per city date (day games count too). Shown word first: "Cooked · 9/10." Share cards add the date with a calendar line icon ("FRI, OCT 25 · Cooked · 9/10"); the map screen leaves it off because its header already shows the date. Dates with events but no rating yet say "Unrated." Not labeled "Night," since many events are day games (Opening Day, Sunday NFL). Words: 1–2 Chill, 3–4 Light, 5–6 Mid, 7–8 Brutal, 9–10 Cooked.
  - **Event:** no number. An occasion chip (Routine → Notable → Major → Marquee), fact chips (Game 1, tour opener, rivalry, farewell, ordinary opponent) and a friction verdict: Low, Moderate, Heavy or Extreme friction. Both come only from facts known before the event. Significance includes standings and rankings as they stood that day.
  - **Show friction only at Moderate or above.** Low friction is stored but never shown as a chip or tag, so a World Series never reads "Low friction."
  - **Friction is more than competing events:** it also covers travel to and from (shared freeway corridors, getting home), timing (weekday, start time, day game) and weather. Inputs are weighted, and the weights differ by event type. A full breakdown of every score comes later and doesn't block step 2.
  - **Weather** is venue-local (that venue's °F and rain, not a citywide LA number) and is only a small bump. Rain counts as friction, but only lightly.
  - **Audience overlap (Oct 1, 2026):** each event is tagged with the audiences it draws, and each pair of events is scored High, Medium or Low overlap. Same sport or the same fans' must-see is High; different sports in the same city is Medium; sports vs. concerts, or concerts of different genres, is Low (the crowds can overlap, just less); concerts of the same genre or era is Medium. Overlap acts only on each event's friction, never directly on the date's rating, so it counts once. Under this rule night 5 stays at 5. Kylie may get a second opinion on the rule and the friction weights (prompt in `docs/second-opinion-prompt.md`).
  - **Friction weights:** the first draft in `rating-model-draft.md` is the working version until a second opinion comes back.
  - The word "friction" for the event verdict is kept for now, but Kylie is still weighing it (Oct 1, 2026).
  - **Crowd is evidence, not an input.** Show it next to the verdict, always labeled ("Extreme friction · 63,404 announced"). Say "sold out" when a source says so; don't invent a percentage of capacity.
  - **Why:** a single per-event Squeeze score gave a sold-out World Series "2/10," which read as a weak event, and a per-event "Pull" number would grade fanbases, which the app exists to defend.
  - "Today" replaces "Tonight" in the app. "Nights" stays in the log voice: the Nights tab, Famous nights, Your nights.
  - Weather shows as raw numbers only (°F, humidity), never as words like "heat."
  - The mockups predate this: they show "Squeeze 8/10" tags and "NIGHT · BRUTAL" for a 9/10 night (now "Cooked · 9/10").

## Product psychology rules
One gold primary button per screen with a plain verb. Default to Today. Skippable three-tip first-run guide. Always label scores (no bare numbers). End the event screen on a shareable card. Curiosity-gap copy. Don't make the user think.

## Share cards (four)
Night card, Event card, Compare card (two fanbases), Your stats card.

## Compare tab (second slice)
For competitors and rivals: same-city rivals, league rivals across the country (adjusted for how crowded each city is), artists/fandoms. Opens on a leaderboard (e.g. "Best-drawing fanbases, adjusted"). No single headline number: show several stats side by side (adjusted attendance, % of seats filled, record on tough nights).

## Event details
Three official layers plus personal notes:
- **Before** (known ahead): giveaway or theme night, opener/finale, rivalry, playoff stakes, pitching matchup; tour name, tour opener/closer, opening act, farewell.
- **Result** (sports only): score, winner, extra innings/overtime.
- **Notable** (what happened): walk-off, no-hitter, milestone, a player's last home game; surprise guest, rare song.
- **Personal notes:** private, only in Your nights.
- Shown on the event screen ("The game" / "The show" block) and as one line per row in Your nights ("W 6-3 · Freeman walk-off slam"). Not on share cards or the map for now.
- Only pre-game facts may nudge an event's "own pull" rating factor. Outcomes never affect the rating.

## You tab
- Plans ("Up next") and Your nights, order configurable (Plans first by default). Plain stats (counts by team + sport, venues), Receipts (saved past nights and cards).
- Logging ways: search and add, live check-in, "I was there" on the event screen, ticket import (later).
- Honor system for proof. Separate from Compare. Friends-only privacy.
- Filters are team + sport (e.g. UCLA MBB, UCLA WBB, UCLA FB, Dodgers).
- Streaks, badges and compare-with-friends are wanted, plain and factual; definitions TBD.
- Rough dates allowed alongside suggested real dates. Festival = one entry with the sets inside. Partial night = personal note. Away games logged now, context later.
- Events below 5k can be logged (no rating, no dot). Logging goes back 10 years.
- Event types: Game, Show, Festival, Live Broadcast (Cosm-style watch parties), Special event. Venue aliases for renamed venues. Co-bills and openers allowed.

## "Who you've seen"
Built in, not the main purpose. Lives in the You tab next to Your nights. Format: an artist list with times seen ("One Republic · 2×"), tap to see each time. Includes teams and athletes for sports.
- Automatic: pro-game participants (everyone in the box score) and concert headliners.
- Opt-in: openers, festival sets (you pick the ones you caught), multi-game events (e.g. NBA Summer League, tournament sessions).
- Cameo: a secondary tier for surprise guests and one-song sets (e.g. Dua Lipa at Elton John, Jingle Ball). Logged but not counted as fully seeing the artist. Default rule still to be defined.
- Surprise guests are also recorded as "Notable" on the event.

## Other parked ideas
- Theater/Broadway: the 5k floor stays; theater shows only as part of a cluster or label on the map, and is logged normally in Your nights. Kylie's friend could advise later.
- Second traffic mechanism for small or non-ticketed events that cause traffic notices (city permits, SoCal 511, Waze for Cities, PredictHQ). Just a note for now.
- Marathons, parades and festivals on the map, same-sport cannibalization, ticket price as a rating factor: later, but built in.

## Data and sources
- Upcoming events: Ticketmaster Discovery API and SeatGeek (later). Past nights: league box scores, venue histories, public lists, Kylie's spreadsheet (not ticketing feeds).
- MLB Stats API for live schedules and results (non-commercial use is fine at this stage).
- Announced attendance is not actual attendance. Label every number: announced / reported / estimated.
- Traffic is a rule-based estimate of our own. Weather comes from free government data.
- Do not scrape sites that block it. If a page can't be fetched normally, ask Kylie to paste it.

## Lessons from research
Check claims against current sources. An agent wrongly said Aaron Donald was retired; he came out of retirement for 2026.
