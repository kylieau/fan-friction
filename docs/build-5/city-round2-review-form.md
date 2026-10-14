# Fan/Friction · review: build 4, backlog and city round 2

Form: `city-round2-review-form.html` (built by `_form_city_r2/build.py`; answers under localStorage `ff-city-r2-review-answers`).
One form: build 4 and backlog questions (N1–N16, added Oct 13), then city round 2 open questions (X1–X2 cross-city, then 69 city questions), reviewer leans, Oct 13, 2026.

## Build 4 and backlog (added Oct 13) (16)

### N1 · High · When do B1, B3, B5, B8 and C3–C8 get done?

Your order-of-work answer (F) placed names, codes, colors, Tier A, the cap and car-share defaults, but not these ten. My proposal: B1 (explain sprawl/hub/transit in plain words) → build 5, with names and codes. B3 (keep repo types for the 7 researched cities, log the second opinion) → build 4 as a docs note. B5 (drive-share band check) and B8 (round-2 cities keep their own type) → build 4, in the new-city checklist, since round-2 cities are being wired now. C3 (split festival totals per day, "estimated", line in How estimates work), C4 (marathons unsized), C5 (finishers are Announced), C6 (density waits for Tier B), C7 (the listed events) → next formula pass, with Tier A. C8 (round-2 builders tag each open-site event with its tier) → whenever each round-2 city answer is wired.

- Where: `build-notes-4-oct12.md · Research answers decided · Open points`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md Research answers, F): "Names/codes + team colors in build 5; Tier A, the scoring cap and car-share defaults in the next formula pass." — Sets the groups, not these items.
  - **PARTLY COVERS** (build-notes-4-oct12.md Open points): "F doesn't place B1, B3, B5, B8, C3–C8; they're tagged by group above."
- Options:
  - Use my proposal as written **(my lean)**: Checklist and docs items now; display and math items with the work they belong to.
  - Put all ten in the next formula pass: Simplest, but round-2 cities get wired without the band check or tiers.
  - Put all ten in build 5: Keeps build 4 smaller.
  - Something else (write in)
- My lean: Each item goes with the work it changes. The checklist and docs items cost little and help the round-2 cities being built now.

### N2 · Medium · Favorite cities on the city switcher

Favorites are settled as separate from home (one home city, with its house icon). Still open: where they show, how you add one, any limit, and where they're stored.

- Where: `build-notes-4-oct12.md · P1`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (BACKLOG.md (main 8faff10) (Parked, now build 4)): "favorite cities on the metro switcher (one home city is separate, and it is stored on this device)" — Settles "separate from home".
  - **PARTLY COVERS** (AGENTS.md (Home)): "Home is one city on this device. … The city switcher shows a house icon on that city."
  - **PARTLY COVERS** (build-notes-4-oct12.md P2): "Accounts hold home city, favorite teams and favorite artists." — Favorite cities aren't named, so where they live is open.
- Options:
  - Pinned group at the top under home; star on each row; no limit; stored on this device for now, moved into the account when you write the account spec **(my lean)**: Same pattern as home today, so nothing waits on accounts.
  - Same, but stored in the account from the start: Needs the account spec first, so it waits.
  - Same as my lean, but capped at 5: Keeps the switcher short.
  - Something else (write in)
- My lean: Starring a row is the quickest way to add one. Keeping it on the device matches how home works and avoids building into an account spec that isn't written yet.

### N3 · Low · "Change home…": switcher row or Settings only?

The Oct 7 gap review added a "Change home…" row at the bottom of the switcher. The Oct 9 notes replaced it: no row, change home in Settings. The app does the Oct 9 version now (SettingsScreen).

- Where: `build-notes-4-oct12.md · P6 Queued notes`
- Suggested: Pick an option.
- Related decisions:
  - **CONFLICTS** (gap-review-grokbot-cursor-2026-10-07 (K3)): "Add one "Change home…" item at the bottom, under a divider. It reopens the first-run "Where's home?" picker" — Older; replaced Oct 9.
  - **COVERS** (docs/reviews/build-notes-oct9.md 3.20): "Superseded Oct 9 (Kylie lean): no "Change home…" item in the switcher; changing home moves to Settings"
  - **COVERS** (docs/product/product-decisions.md): "Change home lives in Settings, behind the avatar on You."
- Options:
  - Settings only, as built **(my lean)**: No change.
  - Bring the row back too, alongside Settings: Two ways in.
  - Something else (write in)
- My lean: Oct 9 is the newer decision and it's what ships. Home is a set-once choice.

### N4 · High · Supabase: use the project that's already connected?

I checked the repo (main 8faff10). Supabase is already connected: accounts went live Oct 5, there are 25 migrations including 0007_catalog.sql and 0008_catalog_grants.sql, and signed-in saving already syncs to the account (supabaseStore). So the "waiting for a URL and key" note in P2 is out of date. Two things to confirm, plus who writes the account spec.

- Where: `build-notes-4-oct12.md · P2; supabase/migrations/`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (BACKLOG.md (main 8faff10) (Saving and accounts), Kylie Oct 4): "catalog and seed events should live in Supabase as shared truth, not only repo JSON"
  - **CONFLICTS** (build-notes-4-oct12.md P2, Kylie Oct 13): "this is blocked until she sends the Supabase project URL and the anon key" — The repo shows it's already connected.
  - **COVERS** (BACKLOG.md (main 8faff10) (Prompt Kylie first)): "Accounts are built and connected (Oct 5); do not ask for the Supabase URL or key again."
  - **COVERS** (AGENTS.md / BACKLOG.md (main 8faff10)): "Accounts will also hold home city, favorite teams, and artists. The spec comes from Kylie." — You write the spec.
- Options:
  - Build 4 uses the existing project; catalog and seed events move into its catalog table as shared truth; you write the account spec **(my lean)**: Matches your Oct 4 rule, uses what's built, and nothing about accounts is invented.
  - Use the existing project, but leave catalog and seed events in repo files for now: Less work in build 4.
  - Start a new project: The free plan allows 2 active projects and you already use one.
  - Something else (write in)
- My lean: It's already live, and you decided in Oct 4 that the catalog is shared truth. The account contents (home city, favorite teams, artists) still wait for your spec.

### N5 · Medium · What "Nights" per city means now

Oct 4 said the Nights tab is per city, same scope as the map switcher. Since Oct 5 the tabs are Home · Explore · Favorites · You, so there's no Nights tab.

- Where: `build-notes-4-oct12.md · P3`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (BACKLOG.md (main 8faff10), Kylie Oct 4): "Nights tab is per city/area. Same metro scope as the Map switcher." — Written before the tabs changed.
  - **PARTLY COVERS** (BACKLOG.md (main 8faff10) (Oct 5)): "Tabs: Home · Explore · Favorites · You."
- Options:
  - Explore's Calendar and List follow the city switcher; Your nights on You stays all cities **(my lean)**: The per-city view already lives in Explore.
  - Also filter Your nights on You by city, with an "All cities" option: Adds a control to You.
  - Close it: the old tab is gone: Nothing to build.
  - Something else (write in)
- My lean: Explore is where the old Nights tab went, and it already uses the switcher. Your own log is more useful across all cities.

### N6 · Medium · "The night" story: build it now, even though Traffic is parked?

The layout and copy are settled. It was meant to come after Traffic and the Step 7 leftovers; Traffic is still parked. Also: who writes the hand-seeded stories?

- Where: `build-notes-4-oct12.md · P4`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (BACKLOG.md (main 8faff10) Step 7, Kylie Oct 4): "event page only, under Crowds/Traffic … section label 'The night' … omit the whole block when there is no story … hand-seed early nights first" — Settles layout and copy.
  - **CONFLICTS** (BACKLOG.md (main 8faff10) Step 7): "Still to do, after Traffic: … and Night story." — Traffic is parked; moving it to build 4 breaks this order.
  - **PARTLY COVERS** (BACKLOG.md (main 8faff10) Step 6): "Traffic is parked ("Do not start it")."
- Options:
  - Build the block now without Traffic; you seed the first few nights, I draft them for you to approve **(my lean)**: Empty nights show nothing, so it's safe to ship with few stories.
  - Wait until Traffic is built: Keeps the old order.
  - Build it now, but seed nothing yet: The code is ready; no stories show.
  - Something else (write in)
- My lean: The block hides when there's no story, so it doesn't depend on Traffic. Drafts save you time; you approve every word.

### N7 · Medium · Lock the rich outdoor event-page Forecast?

Mock Mosaic recommended a rich Forecast on outdoor event pages, and it was parked Oct 4. I couldn't find its detailed spec in the repo or notes; the open questions are what it shows (hourly, rain, wind, roof note) and whether it's outdoor venues only. The metro chip and per-event degrees are already locked.

- Where: `build-notes-4-oct12.md · P5`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (docs/product/product-decisions.md, Kylie Oct 4): "A rich outdoor Forecast is parked."
  - **PARTLY COVERS** (build-notes-4-oct12.md P5): "It needs Kylie's lock before anyone builds it."
  - **PARTLY COVERS** (BACKLOG.md (main 8faff10) (Weather, Oct 5)): "the event page also shows the feels-like range across the event." — Already built; the rich version would add to it.
- Options:
  - Not yet: ask Mosaic for a mockup first, then lock it **(my lean)**: Nothing is built without a design.
  - Lock it now: outdoor venues only, hourly feels-like, rain chance and wind for the event's hours: Builders can start in build 4.
  - Keep it parked: 
  - Something else (write in)
- My lean: There's no written spec to lock yet, so a mockup comes first.

### N8 · Low · Playoff estimates: run the research before picking a rule?

College postseason has no estimate; WNBA, NFL and NWSL fall back to building size. A research prompt asks for sellout rates by round and a simple rule. "If necessary" games are open too.

- Where: `build-notes-4-oct12.md · P6 Queued notes`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (Gap review K2/A6 (lock, Oct 7)): "a playoff with no history falls back to building size"
  - **PARTLY COVERS** (build-notes-4-oct12.md P6): "Open: run the research, then decide the rule. This is research, not a build step."
- Options:
  - Yes, run the research, then pick the rule **(my lean)**: Building size stays the fallback until then.
  - Pick a rule now without research: 
  - Something else (write in)
- My lean: The fallback is already locked, so nothing breaks while we wait.

### N9 · Medium · Ryan Field 58% concert car share: wire it?

Kimley-Horn projected 58% of concertgoers would drive to Ryan Field. Your C15 answer said to use it; your newer B7 rule says only wire venue figures that have a real source. A pre-opening projection isn't a count.

- Where: `chicago-implementation-register.md (PR #54, cursor/build-4-composer) · Open question 1`
- Suggested: Pick an option.
- Related decisions:
  - **CONFLICTS** (build-notes-4-oct12.md Open questions resolved (C15)): "Use the Wrigley 36.7% and Ryan Field 58% figures." — Older.
  - **COVERS** (build-notes-4-oct12.md B7): "wire a venue car share only where a figure exists and the venue has none yet; skip ones with no source" — Newer.
  - **PARTLY COVERS** (chicago-implementation-register.md (PR #54, cursor/build-4-composer)): "Ryan Field concerts: Kimley-Horn projects 58% car for concerts — wire when concerts are listed, or never without post-opening counts?"
- Options:
  - Don't wire it; log it as a note until real counts exist **(my lean)**: Follows B7 and "never invent".
  - Wire 58% when concerts are listed, marked estimated: Follows C15.
  - Something else (write in)
- My lean: B7 is newer and stricter, and the stadium only opened Oct 2.

### N10 · Medium · Chicago (Composer, PR #54): Impact Field capacity

The branch stores 6,300. Sources: 6,300 including 5,526 fixed seats (ballpark site), 8,300 (Wikipedia). None is official.

- Where: `chicago-implementation-register.md (PR #54, cursor/build-4-composer) · Open question 2`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Blanks plus a backlog note.
  - **PARTLY COVERS** (city round 2 card X1): "Keep a reported figure when sources are within about 2%" — 8,300 vs 6,300 is far outside 2%.
- Options:
  - Leave it blank and log the conflict **(my lean)**: Nothing is guessed.
  - Keep 6,300 (reported): 
  - Store 5,526 fixed seats: 
  - Something else (write in)
- My lean: The sources are far apart and none is official.

### N11 · Low · Chicago (Composer, PR #54): Wintrust Field and NOW Arena hockey capacities

Wintrust Field stores 7,365; NOW Arena stores 11,218 with an 8,700 setup. No official hockey figure for NOW Arena.

- Where: `chicago-implementation-register.md (PR #54, cursor/build-4-composer) · Open question 2`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C07): "C07 Rooms at 5,000: "Count each on its sourced figure" (lean)."
- Options:
  - Keep the stored figures; leave NOW Arena hockey blank until an official one turns up **(my lean)**: Uses what's sourced.
  - Blank both: 
  - Something else (write in)
- My lean: Each room is counted on its own sourced figure; hockey has none yet.

### N12 · Low · Chicago (Composer, PR #54): Missing Ticketmaster IDs (Impact Field, Pritzker Pavilion, Gately) and the Windy City Bulls check

Three Chicago rooms have no Ticketmaster ID, and Windy City Bulls at NOW Arena needs a check.

- Where: `chicago-implementation-register.md (PR #54, cursor/build-4-composer) · Open question 3`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md Open questions resolved (C12)): "C12: Add the Ticketmaster ID lookup to the new-city checklist, plus one lookup pass at the end for cities that missed it."
- Options:
  - Add them to the catch-up lookup pass at the end of this round **(my lean)**: Uses the pass you already approved.
  - Skip them: Pritzker is mostly free shows anyway.
  - Something else (write in)
- My lean: Your C12 decision already covers this.

### N13 · Low · Chicago (Composer, PR #54): Chicago Stars home in 2027

The Stars play at Martin Stadium in 2026; the Ryan Field plan is on hold and 2027 isn't announced.

- Where: `chicago-implementation-register.md (PR #54, cursor/build-4-composer) · Open question 4`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md A10): "Teams moving later … BACKLOG watch list, no code."
- Options:
  - Keep 2026 as is; add 2027 to the watch list, no code **(my lean)**: Same as other future moves.
  - Assume Martin Stadium for 2027: 
  - Something else (write in)
- My lean: Nothing is announced, so nothing is wired.

### N14 · Low · Chicago (Composer, PR #54): SeatGeek Stadium tenant

No confirmed pro tenant for 2026 after the Stars left; the room stays for concerts and older Stars games.

- Where: `chicago-implementation-register.md (PR #54, cursor/build-4-composer) · Open question 5`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md A10): "Teams moving later … BACKLOG watch list, no code."
- Options:
  - Keep the room with no home team; watch list for a new tenant **(my lean)**: 
  - Remove the room: 
  - Something else (write in)
- My lean: We never delete; concerts still happen there.

### N15 · Low · Chicago (Composer, PR #54): Soldier Field: football vs concert capacity

Stored as 61,500 for football/soccer and 63,500 for concerts (official concert figure). The question is the default on nights with both.

- Where: `chicago-implementation-register.md (PR #54, cursor/build-4-composer) · Open question 6`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md §3): "Label every figure official, reported or estimated."
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean)."
- Options:
  - Keep both; each event uses its own setup **(my lean)**: Football uses 61,500, concerts 63,500.
  - Use 61,500 for everything: 
  - Something else (write in)
- My lean: Each event already has a type, so each gets its own figure, like other split rooms.

### N16 · Low · Where should we use the word 'lineup'?

Kylie liked "lineup" when describing a day's events. The question is where the word goes in the app.

- Where: `Kylie, Oct 13 · wording`
- Suggested: Pick an option.
- Options:
  - A day's event list on Explore/List ("Saturday's lineup") **(my lean)**: Used where one day's events are listed.
  - The date page title: 
  - The Regional list header: 
  - Something else (write in)
- My lean: It reads naturally as the list of one day's events.

## Across cities (2)

### X1 · High · Small capacity conflicts: keep near-agreeing figures, or blank them all?

When sources nearly agree (within about 1–2%) and none is official, the builds weren't consistent. Kept: Hard Rock (64,767 vs 65,326), Gainbridge, Enterprise hockey, Busch. Blanked: Empower football (76,125 vs 75,000, about 1.5%). Your answer sets one rule and fixes the odd ones out.

- Where: `Cross-city #2; Miami #4, Indianapolis #6, St. Louis #3, Denver #1`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Confirmed round 1 as built, but that included both kinds, so no rule was set.
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md §3): "Label every figure official, reported or estimated." — A kept figure must say "reported".
  - **PARTLY COVERS** (build-notes-4-oct12.md C05): "C05 Range-only capacities: "Keep blank" (lean)." — Ranges stay blank; this is about two close single figures.
- Options:
  - Keep a reported figure when sources are within about 2% and none is official **(my lean)**: Restore Empower football at 76,125. Keep Hard Rock, Gainbridge, Enterprise hockey and Busch. Each is labeled "reported".
  - Keep within about 1% only: Hard Rock stays; Empower (1.5%) stays blank. Check the others against 1%.
  - Blank every conflict, however small: Blank Hard Rock, Gainbridge, Enterprise hockey and Busch. Empower stays blank.
  - Something else (write in)
- My lean: Close figures are real numbers, not guesses, and a labeled reported figure beats an empty room. Empower then gets 76,125 so everything matches.

### X2 · High · Old numeric Ticketmaster ids: switch to the new kind?

A few rooms store an old number-only Ticketmaster id: Ottawa's TD Place arena 401513, plus Rogers Place 140602, Aretha 65540 and Chaifetz 50351 from research. Other cities use the newer "KovZ…" ids. The old ones probably match nothing, so those rooms may get no concerts.

- Where: `Cross-city #1; Ottawa #2; Edmonton #4`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md Open questions resolved (C12)): "C12: Add the Ticketmaster ID lookup to the new-city checklist, plus one lookup pass at the end for cities that missed it."
  - **COVERS** (docs/reference/new-city-checklist.md §3): "The cities built without IDs get one catch-up lookup pass at the end of the current build round."
- Options:
  - Swap them all for the new ids in the catch-up lookup pass **(my lean)**: Fits the pass you already approved.
  - Keep the old numbers: No work, but likely no concerts in those rooms.
  - Something else (write in)
- My lean: Your C12 decision already sets up this catch-up pass, so this just confirms it covers these ids.

## Ottawa–Gatineau (5)

### OTT1 · Medium · TD Place Arena capacity

Only a range is sourced (5,500–8,585). It's blank now.

- Where: `city-round2-open-questions.md · Ottawa–Gatineau #1`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md C05): "C05 Range-only capacities: "Keep blank" (lean)."
- Options:
  - Leave it blank until one bowl figure turns up **(my lean)**: 
  - Store 8,585 as the full bowl: 
  - Store 5,500 as the usual setup: 
  - Something else (write in)
- My lean: Your C05 decision keeps range-only rooms blank.

### OTT2 · Medium · Ticketmaster id at TD Place (401513)

The arena stores the old number-only id. Same question as X2; your X2 answer applies.

- Where: `city-round2-open-questions.md · Ottawa–Gatineau #2`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md Open questions resolved (C12)): "C12: Add the Ticketmaster ID lookup to the new-city checklist, plus one lookup pass at the end for cities that missed it."
  - **COVERS** (docs/reference/new-city-checklist.md §3): "The cities built without IDs get one catch-up lookup pass at the end of the current build round."
- Options:
  - Swap it for the new id in the catch-up pass **(my lean)**: 
  - Keep the number: 
  - Something else (write in)
- My lean: Covered by C12 and X2.

### OTT3 · Low · City code

OTT was a judgment call.

- Where: `city-round2-open-questions.md · Ottawa–Gatineau #3`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C08): "C08 City names/codes: Something else: "give me a research prompt for this" → research prompt to write; no build." — Codes are waiting on that research; this is a holding pick.
- Options:
  - OTT **(my lean)**: 
  - YOW (airport): 
  - OTG: 
  - Something else (write in)
- My lean: Reads as Ottawa. Your codes research prompt (C08) may revisit it.

### OTT4 · Low · Canadian Tire Centre hockey

19,153 official seats vs 20,500 with standing room.

- Where: `city-round2-open-questions.md · Ottawa–Gatineau #4`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md §3): "Label every figure official, reported or estimated." — 19,153 is the official one.
- Options:
  - Keep 19,153 (official seats) **(my lean)**: 
  - Use 20,500 with standing room: 
  - Something else (write in)
- My lean: The official figure wins.

### OTT5 · Low · Charge moving to Canadian Tire Centre in 2026–27

Keep TD Place as a second home venue?

- Where: `city-round2-open-questions.md · Ottawa–Gatineau #5`
- Suggested: Pick an option.
- Related decisions:
  - No related decisions found.
- Options:
  - Yes, keep it until the PWHL feed confirms the move **(my lean)**: 
  - No, move them fully now: 
  - Something else (write in)
- My lean: Nothing is lost while we wait for the feed.

## Indianapolis (6)

### IND1 · Medium · Indianapolis Motor Speedway capacity

275,000 (AP estimate) vs 250,000 vs 257,325. It's blank now.

- Where: `city-round2-open-questions.md · Indianapolis #1`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (docs/reference/new-city-checklist.md New York run): "the research's "Table B" grounds with no fixed capacity … are not venue rows — events there are placed as points and sized by their own crowd"
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog""
- Options:
  - Leave it blank; log race days as point events sized by their own crowd **(my lean)**: 
  - Store 257,325: 
  - Store 275,000: 
  - Something else (write in)
- My lean: Your checklist already treats grounds like this as points, not venue rows.

### IND2 · Medium · Corteva Coliseum capacity

Sources say 6,800 / 6,200 / 8,200 / 6,500. It's blank now.

- Where: `city-round2-open-questions.md · Indianapolis #2`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 6,800 for basketball: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### IND3 · Medium · Lucas Oil concert capacity

The only figure was worked out from the 70k basketball number, so I removed it.

- Where: `city-round2-open-questions.md · Indianapolis #3`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md §3): "Label every figure official, reported or estimated." — A figure needs a label it can honestly carry; this one has none.
  - **PARTLY COVERS** (docs/product/product-decisions.md (crowd is evidence)): "don't invent a percentage of capacity."
- Options:
  - Keep it removed **(my lean)**: 
  - Use 70,000 for concerts: 
  - Something else (write in)
- My lean: A worked-out number isn't a sourced one.

### IND4 · Medium · Lawn totals (Everwise, Ruoff, Victory Field)

Everwise 6,000 and Ruoff 24,790 include lawn; Victory Field is seats only. Pick one rule.

- Where: `city-round2-open-questions.md · Indianapolis #4`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C07): "C07 Rooms at 5,000: "Count each on its sourced figure" (lean)." — Count each room on its sourced figure; the rule decides which figure.
- Options:
  - One rule for all: total including lawn **(my lean)**: 
  - One rule for all: seats only: 
  - Something else (write in)
- My lean: Lawn people are real crowd.

### IND5 · Low · City type

Sprawl vs hub. The fallback car share is 0.85 either way.

- Where: `city-round2-open-questions.md · Indianapolis #5`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md C09): "C09 City types: "Confirm all as built (provisional)" (lean). Note: "give me a research prompt for this also (to assess across all cities logged)""
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md §1): "CITY_TYPE: sprawl (everyone drives), hub, or transit. … Research it, don't assume it (Kylie, Oct 6)"
- Options:
  - Sprawl **(my lean)**: 
  - Hub: 
  - Something else (write in)
- My lean: Matches how people get around; no number changes.

### IND6 · Medium · Gainbridge basketball

17,274 (Ticketmaster) vs 17,923 vs a claimed 20,000. Kept 17,274.

- Where: `city-round2-open-questions.md · Indianapolis #6`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Depends on X1.
- Options:
  - Keep 17,274 **(my lean)**: 
  - Leave it blank: 
  - Something else (write in)
- My lean: Follows the X1 lean (close sources keep a figure). If you blank all conflicts in X1, this goes blank.

## Salt Lake City (5)

### SLC1 · Medium · NHL team id

I folded the old visitor id utah-hc into utah-mammoth.

- Where: `city-round2-open-questions.md · Salt Lake City #1`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (docs/reference/new-city-checklist.md New York run): "a plain team id may already belong to an away team (giants, jets, rangers were San Francisco, Winnipeg and Texas), so prefix it"
- Options:
  - Keep utah-mammoth **(my lean)**: 
  - Use utah-hockey-club: 
  - Something else (write in)
- My lean: It's the current name and city-prefixed, so it won't clash with Colorado Mammoth (colorado-mammoth).

### SLC2 · Medium · Delta Center concert capacity

Only the pre-renovation 20,000 is sourced. It's blank now.

- Where: `city-round2-open-questions.md · Salt Lake City #2`
- Suggested: Pick an option.
- Related decisions:
  - No related decisions found.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 20,000: Old figure; the room is being rebuilt.
  - Something else (write in)
- My lean: Leave blank until the renovation's phase 3 gives a new figure.

### SLC3 · Low · Abravanel Hall

2,811 vs 2,766/2,768.

- Where: `city-round2-open-questions.md · Salt Lake City #3`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (docs/product/product-decisions.md (thesis)): "Floor for map dots is 5k capacity."
- Options:
  - Keep 2,811 **(my lean)**: 
  - Leave it blank: 
  - Something else (write in)
- My lean: It's under 5,000, so it never shows on the map anyway.

### SLC4 · Medium · Rice-Eccles "strained" access flag

The access rule flags it. TRAX light rail stops there.

- Where: `city-round2-open-questions.md · Salt Lake City #4`
- Suggested: Pick an option.
- Related decisions:
  - No related decisions found.
- Options:
  - Keep the flag **(my lean)**: 
  - Override it because of TRAX: 
  - Something else (write in)
- My lean: Keep the rule's answer until there's data.

### SLC5 · Low · West Desert, Zions Bank, UFL Utah 2028, Power District

No schedules yet, or not built.

- Where: `city-round2-open-questions.md · Salt Lake City #5`
- Suggested: Pick an option.
- Related decisions:
  - No related decisions found.
- Options:
  - Leave them out for now **(my lean)**: 
  - Add them now: 
  - Something else (write in)
- My lean: Nothing to show until they have events.

## Edmonton (4)

### EDM1 · Medium · Commonwealth Stadium

56,302 / 56,400 / 55,000, none official. Blanked.

- Where: `city-round2-open-questions.md · Edmonton #1`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 56,302: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### EDM2 · Medium · Clarke Stadium

City lists 5,000 official seats; Wikipedia says 6,000 after the 2026 retrofit.

- Where: `city-round2-open-questions.md · Edmonton #2`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md C07): "C07 Rooms at 5,000: "Count each on its sourced figure" (lean)."
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md §3): "Label every figure official, reported or estimated."
- Options:
  - Keep 5,000 (official) **(my lean)**: 
  - Use 6,000: 
  - Something else (write in)
- My lean: Official figure, and your C07 rule counts it as sourced.

### EDM3 · Medium · Convention Centre (5,254 movable chairs)

The build counts the chairs as a capacity, so the room causes friction.

- Where: `city-round2-open-questions.md · Edmonton #3`
- Suggested: Pick an option.
- Related decisions:
  - **CONFLICTS** (docs/reference/new-city-checklist.md Atlanta run): "festival parks and convention halls are not venue rows (Kylie, Oct 7)" — Keeping it would go against this; muting resolves it.
- Options:
  - Keep it as a room: 
  - Mute the room **(my lean)**: 
  - Something else (write in)
- My lean: Your checklist says convention halls aren't venue rows.

### EDM4 · Medium · Rogers Place Ticketmaster id (140602)

Old number-only id. Same question as X2; your X2 answer applies.

- Where: `city-round2-open-questions.md · Edmonton #4`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md Open questions resolved (C12)): "C12: Add the Ticketmaster ID lookup to the new-city checklist, plus one lookup pass at the end for cities that missed it."
  - **COVERS** (docs/reference/new-city-checklist.md §3): "The cities built without IDs get one catch-up lookup pass at the end of the current build round."
- Options:
  - Look up the new id in the catch-up pass **(my lean)**: 
  - Keep the number: 
  - Something else (write in)
- My lean: Covered by C12 and X2.

## Miami (4)

### MIA1 · Medium · Homestead-Miami Speedway

46,000 (the build's "middle" pick) vs 45,000 vs 65,000. It's blank now.

- Where: `city-round2-open-questions.md · Miami #1`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog""
  - **PARTLY COVERS** (docs/product/product-decisions.md (crowd is evidence)): "don't invent a percentage of capacity." — Picking a middle number is guessing.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 46,000: 
  - Store 65,000: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### MIA2 · Medium · FPL Solar Amphitheater

8,500 (city/CVB, includes lawn) vs 5,000 vs 1,646. It's blank now.

- Where: `city-round2-open-questions.md · Miami #2`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 8,500 as official: 
  - Something else (write in)
- My lean: Wait for the operator to publish a figure.

### MIA3 · Medium · Pitbull Stadium

20,000 vs 22,682. It's blank now.

- Where: `city-round2-open-questions.md · Miami #3`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 20,000: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### MIA4 · Medium · Hard Rock Stadium

64,767 vs 65,326 permanent seats (within 1%). Kept 64,767.

- Where: `city-round2-open-questions.md · Miami #4`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Depends on X1.
- Options:
  - Keep 64,767 **(my lean)**: 
  - Leave it blank: 
  - Something else (write in)
- My lean: Follows the X1 lean. If X1 blanks all conflicts, this goes blank.

## Washington, DC (5)

### DC1 · Low · City code

DC is what locals say; WAS matches the airport/team-style codes used elsewhere.

- Where: `city-round2-open-questions.md · Washington, DC #1`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C08): "C08 City names/codes: Something else: "give me a research prompt for this" → research prompt to write; no build."
- Options:
  - DC **(my lean)**: 
  - WAS: 
  - Something else (write in)
- My lean: How locals say it. Your codes research (C08) may revisit.

### DC2 · Medium · Northwest Stadium

64,000 vs 62,000 vs 65,000. It's blank now.

- Where: `city-round2-open-questions.md · Washington, DC #2`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 64,000: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### DC3 · Medium · Greene Stadium

7,086 seats vs 10,000 football, from the same source. It's blank now.

- Where: `city-round2-open-questions.md · Washington, DC #3`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md §3): "Label every figure official, reported or estimated."
- Options:
  - Leave it blank: 
  - Store 7,086 as seats, once confirmed **(my lean)**: 
  - Store 10,000: 
  - Something else (write in)
- My lean: Seats are the firm number; store it once it's confirmed.

### DC4 · Low · Merriweather Post Pavilion

Belongs to DC, or a future Baltimore build?

- Where: `city-round2-open-questions.md · Washington, DC #4`
- Suggested: Pick an option.
- Related decisions:
  - No related decisions found.
- Options:
  - DC **(my lean)**: 
  - Future Baltimore build: 
  - Something else (write in)
- My lean: DC exists now; a move later is easy.

### DC5 · Low · City type

Transit vs hub.

- Where: `city-round2-open-questions.md · Washington, DC #5`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md C09): "C09 City types: "Confirm all as built (provisional)" (lean). Note: "give me a research prompt for this also (to assess across all cities logged)""
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md §1): "CITY_TYPE: sprawl (everyone drives), hub, or transit. … Research it, don't assume it (Kylie, Oct 6)"
- Options:
  - Hub **(my lean)**: 
  - Transit: 
  - Something else (write in)
- My lean: Landover and the amphitheatres pull people out to the suburbs by car.

## Cleveland (4)

### CLE1 · Medium · Jacobs Pavilion

4,100 permanent seats vs 5,000 with a temporary floor (both sourced).

- Where: `city-round2-open-questions.md · Cleveland #1`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C07): "C07 Rooms at 5,000: "Count each on its sourced figure" (lean)." — Both figures are sourced, so C07 alone doesn't pick one.
  - **PARTLY COVERS** (docs/product/product-decisions.md (thesis)): "Floor for map dots is 5k capacity."
- Options:
  - Use 4,100 here (room stays muted): 
  - Use 5,000 here: 
  - One rule for every standing-floor room: seated by default (4,100 here) **(my lean)**: 
  - Something else (write in)
- My lean: One rule beats case-by-case calls; seated keeps it under the 5,000 floor.

### CLE2 · Medium · ForeFront Field

Only a 2009 plan figure (3,500 + 1,500 berm). It's blank now.

- Where: `city-round2-open-questions.md · Cleveland #2`
- Suggested: Pick an option.
- Related decisions:
  - No related decisions found.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 5,000: 
  - Something else (write in)
- My lean: A 2009 plan isn't the built room.

### CLE3 · Low · Blossom Music Center

Keep in Cleveland or move to a future Akron build?

- Where: `city-round2-open-questions.md · Cleveland #3`
- Suggested: Pick an option.
- Related decisions:
  - No related decisions found.
- Options:
  - Keep in Cleveland **(my lean)**: 
  - Future Akron build: 
  - Something else (write in)
- My lean: Cleveland exists now.

### CLE4 · Medium · Public Hall

5,100 for Charge games vs ~10,000 full hall.

- Where: `city-round2-open-questions.md · Cleveland #4`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C07): "C07 Rooms at 5,000: "Count each on its sourced figure" (lean)."
- Options:
  - Match by tenant: Charge games at 5,100 **(my lean)**: 
  - Use ~10,000 for everything: 
  - Something else (write in)
- My lean: Each event gets the setup it actually uses.

## San Antonio (3)

### SA1 · Medium · Retama Park

15,000 from one undated Stadium Journey page. It's blank now.

- Where: `city-round2-open-questions.md · San Antonio #1`
- Suggested: Pick an option.
- Related decisions:
  - No related decisions found.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 15,000: 
  - Something else (write in)
- My lean: One undated page is too thin.

### SA2 · Medium · Real Life Amphitheater

6,000 seated vs 8,000 covered (KSAT 2021). It's blank now, and no concerts since 2022.

- Where: `city-round2-open-questions.md · San Antonio #2`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 6,000 seated: 
  - Something else (write in)
- My lean: No concerts since 2022, so blank costs nothing.

### SA3 · Medium · Car shares on 11 rooms

I removed the build's 0.95/0.87 values from 11 rooms the city-type answer never estimated, so they use the city default.

- Where: `city-round2-open-questions.md · San Antonio #3`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md Open questions resolved (C04)): "C04: Wire sourced car-share estimates, marked as estimated. Rejected: city default everywhere; named-study only." — Covers sourced values only; these 11 had none.
- Options:
  - Keep them removed (city default) **(my lean)**: 
  - Carry over the nearest estimated room's value: 
  - Something else (write in)
- My lean: Your C04 decision wires sourced estimates; these weren't sourced.

## Portland (5)

### PDX1 · Medium · Hillsboro Hops ballpark

7,000 (MiLB) vs 4,700 fixed vs 6,000 (city/Mortenson). It's blank now.

- Where: `city-round2-open-questions.md · Portland #1`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 4,700 seats: 
  - Store 7,000 total: 
  - Something else (write in)
- My lean: Wait for the team to publish an official figure.

### PDX2 · Medium · McMenamins Edgefield

7,000 vs ~5,000. It's blank now.

- Where: `city-round2-open-questions.md · Portland #2`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 7,000: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### PDX3 · Medium · Cascades Amphitheater

The build stored 18,000, which wasn't sourced. Official: 7,810 covered + lawn for "nearly 10,000". It's blank now.

- Where: `city-round2-open-questions.md · Portland #3`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md §3): "Label every figure official, reported or estimated."
  - **PARTLY COVERS** (build-notes-4-oct12.md C07): "C07 Rooms at 5,000: "Count each on its sourced figure" (lean)." — Seated vs with-lawn should follow your IND4 lawn rule.
- Options:
  - Leave it blank: 
  - Store 7,810 seated **(my lean)**: 
  - Store ~10,000 total: 
  - Something else (write in)
- My lean: 7,810 is the official seated figure.

### PDX4 · Medium · Postseason pool

Portland's calibrator recomputed 128 other-city postseason rows; I kept main's.

- Where: `city-round2-open-questions.md · Portland #4`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md C10): "C10 Postseason pool rows: "Keep the added rows" (lean). Note: "add future plan of all-city pool rebuild to the city gap backlog""
- Options:
  - Keep main's; recalibrate everything later in one pass **(my lean)**: 
  - Take Portland's numbers: 
  - Something else (write in)
- My lean: Your C10 decision already plans one all-city rebuild.

### PDX5 · Low · VMC (Veterans Memorial Coliseum)

8,600 post-renovation hockey vs 10,000 bowl.

- Where: `city-round2-open-questions.md · Portland #5`
- Suggested: Pick an option.
- Related decisions:
  - No related decisions found.
- Options:
  - Keep 8,600 **(my lean)**: 
  - Use 10,000: 
  - Something else (write in)
- My lean: Matches the room as it is now.

## Detroit (7)

### DET1 · Medium · Pine Knob

15,000 / 15,040 / 15,300. It's blank now.

- Where: `city-round2-open-questions.md · Detroit #1`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — 15,040 vs 15,000 is within 1%; X1 may change this.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 15,040: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### DET2 · Medium · Freedom Hill (Michigan Lottery Amphitheatre)

7,200 vs 7,300. It's blank now.

- Where: `city-round2-open-questions.md · Detroit #2`
- Suggested: Pick an option.
- Related decisions:
  - **CONFLICTS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — About 1.4% apart. If X1 keeps near-agreeing figures, this should get one too.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 7,200: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### DET3 · Medium · Keyworth Stadium

7,933 vs ~7,000. It's blank now.

- Where: `city-round2-open-questions.md · Detroit #3`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 7,933: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### DET4 · Low · Calihan Hall

Official 8,295 vs 7,917 (Sports Commission). Kept 8,295.

- Where: `city-round2-open-questions.md · Detroit #4`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (docs/reference/new-city-checklist.md §3): "Label every figure official, reported or estimated."
- Options:
  - Keep 8,295 (official) **(my lean)**: 
  - Leave it blank: 
  - Something else (write in)
- My lean: The official figure wins.

### DET5 · Low · Fox Theatre

5,048 fixed vs 5,174 with pit. Kept 5,048.

- Where: `city-round2-open-questions.md · Detroit #5`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md C07): "C07 Rooms at 5,000: "Count each on its sourced figure" (lean)."
- Options:
  - Keep 5,048 **(my lean)**: 
  - Use 5,174 with pit: 
  - Something else (write in)
- My lean: Count it on its sourced figure.

### DET6 · Medium · Little Caesars Arena concert

Only a 15,000–22,000 range. It's blank now.

- Where: `city-round2-open-questions.md · Detroit #6`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md C05): "C05 Range-only capacities: "Keep blank" (lean)."
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 22,000: 
  - Something else (write in)
- My lean: Your C05 decision keeps ranges blank.

### DET7 · Medium · Aretha Franklin Amphitheatre

Sourced only as "over 6,000". It's blank now.

- Where: `city-round2-open-questions.md · Detroit #7`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md C05): "C05 Range-only capacities: "Keep blank" (lean)."
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 6,000: 
  - Something else (write in)
- My lean: "Over 6,000" is open-ended, like a range.

## Pittsburgh (5)

### PIT1 · Low · PNC Park

38,747 (MLB guide) vs 38,362 (Pirates facts page). Kept 38,747.

- Where: `city-round2-open-questions.md · Pittsburgh #1`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Depends on X1.
- Options:
  - Keep 38,747 **(my lean)**: 
  - Leave it blank: 
  - Something else (write in)
- My lean: About 1% apart; follows the X1 lean.

### PIT2 · Medium · PennWest Convocation Center

Official 6,000 vs wiki 4,000 for sport setups.

- Where: `city-round2-open-questions.md · Pittsburgh #2`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (docs/reference/new-city-checklist.md §3): "Label every figure official, reported or estimated."
- Options:
  - Keep 6,000 **(my lean)**: 
  - Store 4,000 for basketball: 
  - Something else (write in)
- My lean: Keep the official figure until a sport-specific official one turns up.

### PIT3 · Medium · Westmoreland Fair grandstand

5,600 expandable vs 5,000. It's blank now.

- Where: `city-round2-open-questions.md · Pittsburgh #3`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 5,600: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### PIT4 · Medium · Reeves Field and Lernerville

Reeves "over 6,000" vs 5,500; Lernerville 12,000 vs 10,000. Both blank now.

- Where: `city-round2-open-questions.md · Pittsburgh #4`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store the higher figures: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### PIT5 · Medium · Acrisure car share for Pitt football

Research gives Pitt games 0.76; the Steelers' 0.86 is used for the room.

- Where: `city-round2-open-questions.md · Pittsburgh #5`
- Suggested: Pick an option.
- Related decisions:
  - **CONFLICTS** (build-notes-4-oct12.md Open questions resolved (C04)): "C04: Wire sourced car-share estimates, marked as estimated. Rejected: city default everywhere; named-study only." — C04 says use sourced estimates; leaving out a sourced 0.76 goes against that. The second option resolves it.
- Options:
  - Keep 0.86 (one value per room) **(my lean)**: 
  - Add a separate Pitt value (0.76): Needs per-tenant car shares, a small data change.
  - Something else (write in)
- My lean: Simpler for now; pick the second option if you want every sourced estimate used.

## Raleigh–Durham (5)

### RDU1 · Low · New Red Hat Amphitheater

6,500 is a planned figure for a room opening in 2027. It's blank now.

- Where: `city-round2-open-questions.md · Raleigh–Durham #1`
- Suggested: Pick an option.
- Related decisions:
  - No related decisions found.
- Options:
  - Leave it blank until it opens **(my lean)**: 
  - Store 6,500 now: 
  - Something else (write in)
- My lean: A plan isn't a built room.

### RDU2 · Medium · Dorton Arena concert setup

7,000 / 6,500 / 7,610 / 9,150. Kept the official 5,000 permanent seats.

- Where: `city-round2-open-questions.md · Raleigh–Durham #2`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog""
  - **COVERS** (build-notes-4-oct12.md C07): "C07 Rooms at 5,000: "Count each on its sourced figure" (lean)." — 5,000 seats counted on its sourced figure.
- Options:
  - Leave concert blank; keep 5,000 seats **(my lean)**: 
  - Store 7,000 for concerts: 
  - Something else (write in)
- My lean: Four figures, no official one.

### RDU3 · Medium · Lenovo Center after 2026 renovation

Concert "more than 21,000" removed; hockey/basketball are board figures relayed by media.

- Where: `city-round2-open-questions.md · Raleigh–Durham #3`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md §3): "Label every figure official, reported or estimated." — Label them reported.
- Options:
  - Keep the board figures until official numbers come out **(my lean)**: 
  - Blank them too: 
  - Something else (write in)
- My lean: Best available; swap when official numbers are published.

### RDU4 · Low · City code

RDU vs RAL.

- Where: `city-round2-open-questions.md · Raleigh–Durham #4`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C08): "C08 City names/codes: Something else: "give me a research prompt for this" → research prompt to write; no build."
- Options:
  - RDU **(my lean)**: 
  - RAL: 
  - Something else (write in)
- My lean: The name everyone uses for the area.

### RDU5 · Low · Hurricanes/Duke postseason rows

Not added because the pool was held the same.

- Where: `city-round2-open-questions.md · Raleigh–Durham #5`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md C10): "C10 Postseason pool rows: "Keep the added rows" (lean). Note: "add future plan of all-city pool rebuild to the city gap backlog""
- Options:
  - Add them in the next full recalibration **(my lean)**: 
  - Add them now: 
  - Something else (write in)
- My lean: Your C10 decision plans one all-city rebuild.

## St. Louis (5)

### STL1 · Medium · World Wide Technology Raceway

58,000 / 57,000 / ~80,000. It's blank now.

- Where: `city-round2-open-questions.md · St. Louis #1`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 58,000: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### STL2 · Medium · Hollywood Casino Amphitheatre

20,000 (estimated, includes lawn) vs 6,805 pavilion. It's blank now.

- Where: `city-round2-open-questions.md · St. Louis #2`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md §3): "Label every figure official, reported or estimated."
- Options:
  - Leave it blank: 
  - Store 6,805 seated, if the operator confirms **(my lean)**: 
  - Something else (write in)
- My lean: Firm seated figure once confirmed. Follow your IND4 lawn rule if it says totals.

### STL3 · Medium · Enterprise Center

Concert 22,000 vs 21,000 (blank now). Hockey 18,096 vs 19,022 (kept 18,096).

- Where: `city-round2-open-questions.md · St. Louis #3`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Depends on X1. Note 18,096 vs 19,022 is about 5% apart, wider than X1's 2%.
- Options:
  - Keep hockey at 18,096; concert blank **(my lean)**: 
  - Blank hockey too: 
  - Something else (write in)
- My lean: Follows the X1 lean.

### STL4 · Medium · Saint Louis Music Park

Only a low-confidence 4,500 estimate. It's blank now.

- Where: `city-round2-open-questions.md · St. Louis #4`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (docs/product/product-decisions.md (thesis)): "Floor for map dots is 5k capacity."
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 4,500 as estimated: 
  - Something else (write in)
- My lean: Low-confidence, and under 5,000 anyway.

### STL5 · Low · Away-game slug "cardinals"

Road games use cardinals for the St. Louis baseball club; Arizona football is arizona-cardinals.

- Where: `city-round2-open-questions.md · St. Louis #5`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md C11): "road games where Arizona is the visitor store `arizona-cardinals`, not `cardinals` (St. Louis keeps `cardinals`)."
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md New York run): "a plain team id may already belong to an away team (giants, jets, rangers were San Francisco, Winnipeg and Texas), so prefix it" — The general advice is to prefix; C11 made the exception.
- Options:
  - Keep as is **(my lean)**: 
  - Rename to st-louis-cardinals: 
  - Something else (write in)
- My lean: Your C11 decision already says St. Louis keeps cardinals.

## Denver (6)

### DEN1 · Medium · Empower Field football

76,125 vs 75,000 (about 1.5%). It's blank now; the 85,000 concert row is kept.

- Where: `city-round2-open-questions.md · Denver #1`
- Suggested: Pick an option.
- Related decisions:
  - **CONFLICTS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Blanked while similar gaps elsewhere were kept. X1 resolves it either way.
- Options:
  - Leave it blank: 
  - Store 76,125 **(my lean)**: 
  - Something else (write in)
- My lean: Follows the X1 lean so it matches Hard Rock and the others.

### DEN2 · Medium · Denver Coliseum

10,200 vs 8,140. It's blank now.

- Where: `city-round2-open-questions.md · Denver #2`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 10,200: 
  - Something else (write in)
- My lean: The sources disagree and none is official.

### DEN3 · Medium · Dick's Sporting Goods Park

18,061 / 17,305 permanent / 18,581 expanded. It's blank now.

- Where: `city-round2-open-questions.md · Denver #3`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (build-notes-4-oct12.md C06): "C06 Capacity conflicts: "Confirm all as built" (lean). Note: "also note in the city gap on backlog"" — Round 1 conflicts were confirmed as built (mostly blanks). Whether this one stays blank also depends on X1.
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store 18,061: 
  - Something else (write in)
- My lean: Wait for the club to publish a figure.

### DEN4 · Low · Centennial Stadium

The club's official 12,000 is stored instead of the reported 12,372.

- Where: `city-round2-open-questions.md · Denver #4`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (docs/reference/new-city-checklist.md §3): "Label every figure official, reported or estimated."
- Options:
  - Keep 12,000 **(my lean)**: 
  - Use 12,372: 
  - Something else (write in)
- My lean: The official figure wins.

### DEN5 · Medium · Colorado Mammoth alias "Mammoth"

Utah's NHL club is also "Mammoth", so names could cross-match.

- Where: `city-round2-open-questions.md · Denver #5`
- Suggested: Pick an option.
- Related decisions:
  - **PARTLY COVERS** (docs/reference/new-city-checklist.md New York run): "a plain team id may already belong to an away team (giants, jets, rangers were San Francisco, Winnipeg and Texas), so prefix it" — Same idea for names: don't let a bare name belong to two teams.
- Options:
  - Drop the bare "Mammoth" alias **(my lean)**: 
  - Keep it: 
  - Something else (write in)
- My lean: Avoids games landing on the wrong team.

### DEN6 · Medium · Magness concert and Mission Ballroom

Ranges only: Magness 6,500–7,200; Mission 2,200–3,950. Both blank now.

- Where: `city-round2-open-questions.md · Denver #6`
- Suggested: Pick an option.
- Related decisions:
  - **COVERS** (build-notes-4-oct12.md C05): "C05 Range-only capacities: "Keep blank" (lean)."
- Options:
  - Leave it blank **(my lean)**: Nothing is guessed. The room just shows no capacity.
  - Store the top of each range: 
  - Something else (write in)
- My lean: Your C05 decision keeps ranges blank.

## FYI and already decided (no answer needed)

- **Main docs checked:** fan-friction-readonly at origin/main 23ea914 (docs/product/product-decisions.md, docs/reference/new-city-checklist.md). (Oct 13)
- **Past decisions quoted:** build-notes-4-oct12.md and build3-review-form-decisions-oct12.md (round 1 city cards C04–C12 and the Oct 12 10:46 PM PT resolutions). (Oct 12)
- **Nothing is decided yet:** every lean is the PR reviewer's. Blank rooms stay blank until you answer. (Oct 13)

