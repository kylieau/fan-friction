# Build 5 notes

Grounded against main 635a164, Oct 14, 2026 (fetched again 2:05 AM PT, unchanged; main's last commit 12:23 AM PT). Written as instructions to the builder: each item leads with what to change, starting from the code as it is, followed by short context on what exists today (file:line refs at that commit).

Each item gives what we do, why, and the options we turned down.

## Approved so far

- Concerts Ticketmaster misses: sources, dedupe and pop-up sizing (item 1).
- Add to calendar, option B: an icon button beside "+ Stub it" opens a chooser (item 3; Mosaic, Oct 13).
- Stub privacy, Venmo-style: Anyone / Friends / Private, new users Private (Mosaic Oct 13; levels updated Oct 14).
- Date page r3 (Mosaic, Oct 14).
- Lineup wording on every Explore List week: THIS / NEXT / LAST WEEK'S LINEUP, and "WEEK OF OCT 26 · LINEUP" further out (Mosaic Oct 14; answers D, D2).
- "More dates" replaces "Same homestand" / "Also on" on the event page (answer C2, Oct 14).
- Unknown crowd size shows blank on rows, chips and the selected card, and "— Size unknown" on the event page (Mosaic, Oct 14).
- Crowd size range setting in You › Settings › Events (Mosaic, Oct 14).
- Kylie's city round 2 review form answers (Oct 14).
- Starred cities in the home picker, reused as Settings › Home & cities (item 8; Mosaic v4, Oct 14).
- Settings as one list: Account, Location, Events, Privacy, then Favorites, Your events, App (item 9; Mosaic v4, Oct 14).
- "~" on every estimated crowd, and a POP-UPS section in About this estimate (item 10; Mosaic v4, Oct 14).
- Event types: 8 categories, 36 types, "Special" retired (item 11; Mosaic, Oct 14).
- Type icons: Phosphor plus six custom, at the start of every title, sized per surface (item 12; Mosaic, Oct 14).
- Event names: chip / short / full lengths and the parsing fixes (item 13; Mosaic, Oct 14; adjusted Oct 14 by the naming review answers: Preseason is now a suffix, teams lead every title, "vs." with a period).
- Naming review: all 30 answers (N01–N30, Kylie, Oct 14) recorded as change instructions (item 15). Copy of the answers: `docs/build-5/research/naming-review-answers-oct14.json`.
- Commit the naming review and the types-and-naming table to docs/research/topics (item 14).

Kylie answered A–E on Oct 14 (under item 6; E: Anyone kept, new users default to Private). C2 ("More dates") and D2 ("WEEK OF OCT 26 · LINEUP") were also accepted on Oct 14. No open questions remain from this round.

The naming review is closed (item 15): Cosm is a Watch party, the Add form says Concert, full playoff words on the event page (N03 follows her note, not her form choice; see item 15), artist before tour, co-bills and multi-day passes all decided. Three answers differ from the lean: N03 (note overrides choice), N08 (Preseason moves to a suffix) and N29 (note overrides choice: "vs." with a period). N16 adds a note: codes stay on chips. Item 13's "still open" list is mostly settled; what's left is listed there.

Not decided: regional events "further out" (now a research to-do, item 2). Open flag: "~55,000 Estimated" on NLCS G3. The "~" question is closed (item 10).

## 1. Concerts Ticketmaster misses

Scope: shows of 5,000 or more people, any genre, that are not on Ticketmaster.

**Build instruction:** Add sources (a)–(c) below as new files in `src/data/sources/`, next to the existing `ticketmasterSource.ts`, `espnSource.ts`, `mlbSource.ts`, `hockeytechSource.ts`, `seedSource.ts` and `catalogSource.ts`. Follow their shape and dedupe each new show against Ticketmaster, extending the existing one-show key (date + venue + performer, `ticketmasterSource.ts:287-294`) rather than writing a second dedupe. Apply the pop-up sizing rules below. Hand-seeded pop-ups with no size already use the internal `unsized` helper (`src/data/seed/past2026.ts:90`); reuse it. None of the new sources exist yet.

### Sources, in order

**(a) AXS public venue pages, first.** We start with the AXS pages for the big rooms we already track. Crypto.com Arena, T-Mobile Arena and MGM Grand sell on AXS, so this is the biggest gap and the best return for the work.

**(b) SeatGeek official API, as the catch-all.** It needs only a free client ID. It picks up shows at rooms that are not on AXS or Ticketmaster.

- Required test event: **Pawsa** at the Rio Vista lot in LA. It is sold only on DICE, so it is a good test of whether SeatGeek finds DICE-only shows. Sources disagree on the address (1951 vs 1485 Rio Vista Ave); this must be resolved before the event is stored.
- If SeatGeek misses Pawsa, we fall back to **DICE public event pages** for shows like it.

**(c) A hand-kept festival and promoter list.** Big festivals and promoters are few and stable, so a short list we keep by hand covers them reliably:

- Festivals: HARD, Nocturnal, Escape, Ocean Way, Lollapalooza, Riot Fest.
- Promoter sources: Framework's WordPress feed; Goldenvoice and Insomniac pages. Insomniac tickets are sold through Front Gate.

**Dedupe:** every show from these sources is checked against Ticketmaster so the same show is never counted twice.

### Rejected

- **Eventbrite:** its public search API is gone.
- **Resident Advisor scraping:** against their terms.
- **DICE API:** partner-only, so we can't get access.
- **Resale-only sources:** they miss free shows and shows with non-transferable tickets.

### Undecided

- **JamBase:** possible paid trial. Not decided either way.

### Pop-up sizing

For one-off venues (lots, fields, temporary sites):

- **80% of stated capacity** by default.
- **95%** when the show is sold out or has a waitlist.
- **Festivals are sized per day**, not as a whole weekend.
- **No stated capacity:** use the best past edition's attendance.
- **Nothing to go on:** mark it **"unsized"** (internal term only). It is shown in the app but not counted toward scores. In the app: blank on rows, chips and the selected card; "— Size unknown" on the event page. The word "unsized" never appears in UI copy.

Why: stated capacity is the only firm number we usually have, and pop-ups rarely fill completely, so we scale it down unless there is evidence the show sold out.

Rejected:

- **Area ÷ 7 sq ft per person:** a guess, not a sourced figure.
- **Assuming every pop-up sells out:** overstates most shows.
- **My earlier flat 90%:** doesn't separate sold-out shows from the rest.

## 2. Regional events: UNDECIDED (to-do)

**TO-DO: Research prompt: should apps like this show regional events further out?**

**Build instruction:** none. Don't build anything here until the research comes back and Kylie decides. Context: no regional list or distance rule exists on main.

Not a build item. Nothing here should be built until the research comes back and Kylie decides. Board for reference: `/workspace/ff-gap-review/mosaic/b5/v3/regional.png` (on the box).

### Background: the earlier 60-mile discussion (not decided)

Proposed rule: an event within **60 miles** of the metro's existing center point counts as local. 60 miles is a starting value, not a sourced figure, and can be changed.

Farther big events would go in a simple **"Regional" list**: name, date and distance only, with no score.

Proposed reasoning: this would keep scores honest (only events whose crowds plausibly affect the metro) while still showing big nearby events.

#### Options set aside in that discussion

- **Corridor tier:** would need routing, travel-window timing and counting unique attendees, and attendance for most of these events is unknown anyway.
- **CSA boundaries:** make Coachella local to LA and drop Sonoma.
- **DMA boundaries:** drop Palm Springs.
- **City hall as the center point:** we keep the existing metro center.
- **Drive time:** circular, since traffic depends on the events we're measuring.

#### Venues that would come into range

These would need sourced capacities, or they stay unsized:

- NOS Events Center
- Glen Helen
- Sonoma Raceway
- BottleRock
- Texas Renaissance Festival
- Country Thunder (Wisconsin and Arizona)
- Dover
- Atlantic City

Gillette Stadium is probably already in as the Patriots' venue. Check before adding it again.

## 3. Add to calendar

**Build instruction:** build option B (Mosaic item 2 below): an icon button beside "+ Stub it" that opens a chooser sheet. Context: nothing exists on main to extend (no .ics, Google Calendar or Add to calendar code).

Let the user export an event to their own phone or computer calendar. This is not an in-app calendar.

Feasible with two pieces:

- An **.ics file download**, which works with Apple Calendar, Outlook and most others.
- A **Google Calendar link** that opens a prefilled event.

## Review form answers (Kylie, Oct 14)

Source: her exported city round 2 review form (87 of 87 answered, exported 2026-10-14T07:29:35.776Z UTC = Oct 14, 12:29 AM PT). Leans she left in place count as her decisions. Card context: `/workspace/ff-claims/city-round2-review-form.md` on the box. "My lean" in the option text means the form's suggested option.

**Build instruction:** Apply the "City data changes to apply" checklist at the end of this section. Skip rows marked [x] (already on main) and fix DC5, which contradicts main. Apply the call-outs below as written. The round-2 cities already exist: `src/config/metros.ts:17` (COVERED_METRO_IDS), codes in `metros.ts`, city types in `src/data/formula/gridlock.ts:116` (`CITY_TYPE`). Edit those entries; don't add new ones. N2 (favorites, added where home is set) and N5 (drop the "Nights" label) aren't built yet.

Non-lean picks: N6, N9, N10, OTT1. Notes: N2, N5. All other cards take the lean.

### Build 4 and backlog (added Oct 13)

#### N1 · When do B1, B3, B5, B8 and C3–C8 get done?

- **Decision:** Use my proposal as written
- **Context:** Your order-of-work answer (F) placed names, codes, colors, Tier A, the cap and car-share defaults, but not these ten. My proposal: B1 (explain sprawl/hub/transit in plain words) → build 5, with names and codes. B3 (keep repo types for the 7 researched cities, log the second opinion) → build 4 as a docs note. B5 (drive-share band check) and B8 (round-2 cities keep their own type) → build 4, in the new-city checklist, since round-2 cities are being wired now. C3 (split festival totals per day, "estimated", line in How estimates work), C4 (marathons unsized), C5 (finishers are Announced), C6 (density waits for Tier B), C7 (the listed events) → next formula pass, with Tier A. C8 (round-2 builders tag each open-site event with its tier) → whenever each round-2 city answer is wired.
- **Why:** Checklist and docs items now; display and math items with the work they belong to. Each item goes with the work it changes. The checklist and docs items cost little and help the round-2 cities being built now.
- **Rejected:** Put all ten in the next formula pass: Simplest, but round-2 cities get wired without the band check or tiers; Put all ten in build 5: Keeps build 4 smaller

#### N2 · Favorite cities on the city switcher

> **Call-out:** Her note: favorites are added in the same place you set home: on first open, and in Settings.

- **Decision:** Pinned group at the top under home; star on each row; no limit; stored on this device for now, moved into the account when you write the account spec
- **Context:** Favorites are settled as separate from home (one home city, with its house icon). Still open: where they show, how you add one, any limit, and where they're stored.
- **Why:** Same pattern as home today, so nothing waits on accounts. Starring a row is the quickest way to add one. Keeping it on the device matches how home works and avoids building into an account spec that isn't written yet.
- **Rejected:** Same, but stored in the account from the start: Needs the account spec first, so it waits; Same as my lean, but capped at 5: Keeps the switcher short
- **Adjusted (Oct 14, item 8):** you star cities in the home picker, on first open and in Settings › Home & cities. The switcher order and stars are already built (`AreaSwitcher.tsx:35-41`). UI copy says "starred".
- **Her notes (verbatim):** "i want the setting/where you add a favorite to be in the same place you mark home (upon open and then in settings)"

#### N3 · "Change home…": switcher row or Settings only?

- **Decision:** Settings only, as built
- **Context:** The Oct 7 gap review added a "Change home…" row at the bottom of the switcher. The Oct 9 notes replaced it: no row, change home in Settings. The app does the Oct 9 version now (SettingsScreen).
- **Why:** No change. Oct 9 is the newer decision and it's what ships. Home is a set-once choice.
- **Rejected:** Bring the row back too, alongside Settings: Two ways in

#### N4 · Supabase: use the project that's already connected?

- **Decision:** Build 4 uses the existing project; catalog and seed events move into its catalog table as shared truth; you write the account spec
- **Context:** I checked the repo (main 8faff10). Supabase is already connected: accounts went live Oct 5, there are 25 migrations including 0007_catalog.sql and 0008_catalog_grants.sql, and signed-in saving already syncs to the account (supabaseStore). So the "waiting for a URL and key" note in P2 is out of date. Two things to confirm, plus who writes the account spec.
- **Why:** Matches your Oct 4 rule, uses what's built, and nothing about accounts is invented. It's already live, and you decided in Oct 4 that the catalog is shared truth. The account contents (home city, favorite teams, artists) still wait for your spec.
- **Rejected:** Use the existing project, but leave catalog and seed events in repo files for now: Less work in build 4; Start a new project: The free plan allows 2 active projects and you already use one

#### N5 · What "Nights" per city means now

> **Call-out:** Her note: "Nights" / "Your nights" is no longer a label anywhere.

- **Decision:** Explore's Calendar and List follow the city switcher; Your nights on You stays all cities
- **Context:** Oct 4 said the Nights tab is per city, same scope as the map switcher. Since Oct 5 the tabs are Home · Explore · Favorites · You, so there's no Nights tab.
- **Why:** The per-city view already lives in Explore. Explore is where the old Nights tab went, and it already uses the switcher. Your own log is more useful across all cities.
- **Rejected:** Also filter Your nights on You by city, with an "All cities" option: Adds a control to You; Close it: the old tab is gone: Nothing to build
- **Her notes (verbatim):** "Conceptually, "nights" or "your nights" is not a label anymore"

#### N6 · "The night" story: build it now, even though Traffic is parked?

> **Call-out:** Not her lean. The night story waits until Traffic is built. Claude's empty hidden slot can stay.

- **Decision:** Wait until Traffic is built **(not the lean)**
- **Context:** The layout and copy are settled. It was meant to come after Traffic and the Step 7 leftovers; Traffic is still parked. Also: who writes the hand-seeded stories?
- **Why:** Keeps the old order. (The lean had been: The block hides when there's no story, so it doesn't depend on Traffic. Drafts save you time; you approve every word.)
- **Rejected:** Build the block now without Traffic; you seed the first few nights, I draft them for you to approve: Empty nights show nothing, so it's safe to ship with few stories; Build it now, but seed nothing yet: The code is ready; no stories show

#### N7 · Lock the rich outdoor event-page Forecast?

- **Decision:** Not yet: ask Mosaic for a mockup first, then lock it
- **Context:** Mock Mosaic recommended a rich Forecast on outdoor event pages, and it was parked Oct 4. I couldn't find its detailed spec in the repo or notes; the open questions are what it shows (hourly, rain, wind, roof note) and whether it's outdoor venues only. The metro chip and per-event degrees are already locked.
- **Why:** ask Mosaic for a mockup first, then lock it **(my lean)**: Nothing is built without a design. There's no written spec to lock yet, so a mockup comes first.
- **Rejected:** Lock it now: outdoor venues only, hourly feels-like, rain chance and wind for the event's hours: Builders can start in build 4; Keep it parked

#### N8 · Playoff estimates: run the research before picking a rule?

- **Decision:** Yes, run the research, then pick the rule
- **Context:** College postseason has no estimate; WNBA, NFL and NWSL fall back to building size. A research prompt asks for sellout rates by round and a simple rule. "If necessary" games are open too.
- **Why:** Building size stays the fallback until then. The fallback is already locked, so nothing breaks while we wait.
- **Rejected:** Pick a rule now without research

#### N9 · Ryan Field 58% concert car share: wire it?

> **Call-out:** Not her lean. Wire the Ryan Field 58% concert car share when concerts are listed, marked estimated.

- **Decision:** Wire 58% when concerts are listed, marked estimated **(not the lean)**
- **Context:** Kimley-Horn projected 58% of concertgoers would drive to Ryan Field. Your C15 answer said to use it; your newer B7 rule says only wire venue figures that have a real source. A pre-opening projection isn't a count.
- **Why:** Follows C15. (The lean had been: B7 is newer and stricter, and the stadium only opened Oct 2.)
- **Rejected:** Don't wire it; log it as a note until real counts exist: Follows B7 and "never invent"

#### N10 · Chicago (Composer, PR #54): Impact Field capacity

> **Call-out:** Not her lean. Keep Impact Field at 6,300 (reported). **This reverses PR #54, which blanked it. Builder: restore 6,300.**

- **Decision:** Keep 6,300 (reported) **(not the lean)**
- **Context:** The branch stores 6,300. Sources: 6,300 including 5,526 fixed seats (ballpark site), 8,300 (Wikipedia). None is official.
- **Why:** Her pick over the lean; see context. (The lean had been: The sources are far apart and none is official.)
- **Rejected:** Leave it blank and log the conflict: Nothing is guessed; Store 5,526 fixed seats

#### N11 · Chicago (Composer, PR #54): Wintrust Field and NOW Arena hockey capacities

- **Decision:** Keep the stored figures; leave NOW Arena hockey blank until an official one turns up
- **Context:** Wintrust Field stores 7,365; NOW Arena stores 11,218 with an 8,700 setup. No official hockey figure for NOW Arena.
- **Why:** Uses what's sourced. Each room is counted on its own sourced figure; hockey has none yet.
- **Rejected:** Blank both

#### N12 · Chicago (Composer, PR #54): Missing Ticketmaster IDs (Impact Field, Pritzker Pavilion, Gately) and the Windy City Bulls check

- **Decision:** Add them to the catch-up lookup pass at the end of this round
- **Context:** Three Chicago rooms have no Ticketmaster ID, and Windy City Bulls at NOW Arena needs a check.
- **Why:** Uses the pass you already approved. Your C12 decision already covers this.
- **Rejected:** Skip them: Pritzker is mostly free shows anyway

#### N13 · Chicago (Composer, PR #54): Chicago Stars home in 2027

- **Decision:** Keep 2026 as is; add 2027 to the watch list, no code
- **Context:** The Stars play at Martin Stadium in 2026; the Ryan Field plan is on hold and 2027 isn't announced.
- **Why:** Same as other future moves. Nothing is announced, so nothing is wired.
- **Rejected:** Assume Martin Stadium for 2027

#### N14 · Chicago (Composer, PR #54): SeatGeek Stadium tenant

- **Decision:** Keep the room with no home team; watch list for a new tenant
- **Context:** No confirmed pro tenant for 2026 after the Stars left; the room stays for concerts and older Stars games.
- **Why:** We never delete; concerts still happen there.
- **Rejected:** Remove the room

#### N15 · Chicago (Composer, PR #54): Soldier Field: football vs concert capacity

- **Decision:** Keep both; each event uses its own setup
- **Context:** Stored as 61,500 for football/soccer and 63,500 for concerts (official concert figure). The question is the default on nights with both.
- **Why:** Football uses 61,500, concerts 63,500. Each event already has a type, so each gets its own figure, like other split rooms.
- **Rejected:** Use 61,500 for everything

#### N16 · Where should we use the word 'lineup'?

> **Call-out:** Her pick (her lean, accepted).

- **Decision:** A day's event list on Explore/List ("Saturday's lineup")
- **Context:** Kylie liked "lineup" when describing a day's events. The question is where the word goes in the app.
- **Why:** Used where one day's events are listed. It reads naturally as the list of one day's events.
- **Rejected:** The date page title; The Regional list header

### Across cities

#### X1 · Small capacity conflicts: keep near-agreeing figures, or blank them all?

- **Decision:** Keep a reported figure when sources are within about 2% and none is official
- **Context:** When sources nearly agree (within about 1–2%) and none is official, the builds weren't consistent. Kept: Hard Rock (64,767 vs 65,326), Gainbridge, Enterprise hockey, Busch. Blanked: Empower football (76,125 vs 75,000, about 1.5%). Your answer sets one rule and fixes the odd ones out.
- **Why:** Restore Empower football at 76,125. Keep Hard Rock, Gainbridge, Enterprise hockey and Busch. Each is labeled "reported". Close figures are real numbers, not guesses, and a labeled reported figure beats an empty room. Empower then gets 76,125 so everything matches.
- **Rejected:** Keep within about 1% only: Hard Rock stays; Empower (1.5%) stays blank. Check the others against 1%; Blank every conflict, however small: Blank Hard Rock, Gainbridge, Enterprise hockey and Busch. Empower stays blank

#### X2 · Old numeric Ticketmaster ids: switch to the new kind?

- **Decision:** Swap them all for the new ids in the catch-up lookup pass
- **Context:** A few rooms store an old number-only Ticketmaster id: Ottawa's TD Place arena 401513, plus Rogers Place 140602, Aretha 65540 and Chaifetz 50351 from research. Other cities use the newer "KovZ…" ids. The old ones probably match nothing, so those rooms may get no concerts.
- **Why:** Fits the pass you already approved. Your C12 decision already sets up this catch-up pass, so this just confirms it covers these ids.
- **Rejected:** Keep the old numbers: No work, but likely no concerts in those rooms

### Ottawa–Gatineau

#### OTT1 · TD Place Arena capacity

> **Call-out:** Not her lean. Store 8,585 as the full TD Place Arena bowl.

- **Decision:** Store 8,585 as the full bowl **(not the lean)**
- **Context:** Only a range is sourced (5,500–8,585). It's blank now.
- **Why:** Her pick over the lean; see context. (The lean had been: Your C05 decision keeps range-only rooms blank.)
- **Rejected:** Leave it blank until one bowl figure turns up; Store 5,500 as the usual setup

#### OTT2 · Ticketmaster id at TD Place (401513)

- **Decision:** Swap it for the new id in the catch-up pass
- **Context:** The arena stores the old number-only id. Same question as X2; your X2 answer applies.
- **Why:** Covered by C12 and X2.
- **Rejected:** Keep the number

#### OTT3 · City code

- **Decision:** OTT
- **Context:** OTT was a judgment call.
- **Why:** Reads as Ottawa. Your codes research prompt (C08) may revisit it.
- **Rejected:** YOW (airport); OTG

#### OTT4 · Canadian Tire Centre hockey

- **Decision:** Keep 19,153 (official seats)
- **Context:** 19,153 official seats vs 20,500 with standing room.
- **Why:** The official figure wins.
- **Rejected:** Use 20,500 with standing room

#### OTT5 · Charge moving to Canadian Tire Centre in 2026–27

- **Decision:** Yes, keep it until the PWHL feed confirms the move
- **Context:** Keep TD Place as a second home venue?
- **Why:** Nothing is lost while we wait for the feed.
- **Rejected:** No, move them fully now

### Indianapolis

#### IND1 · Indianapolis Motor Speedway capacity

- **Decision:** Leave it blank; log race days as point events sized by their own crowd
- **Context:** 275,000 (AP estimate) vs 250,000 vs 257,325. It's blank now.
- **Why:** Your checklist already treats grounds like this as points, not venue rows.
- **Rejected:** Store 257,325; Store 275,000

#### IND2 · Corteva Coliseum capacity

- **Decision:** Leave it blank
- **Context:** Sources say 6,800 / 6,200 / 8,200 / 6,500. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store 6,800 for basketball

#### IND3 · Lucas Oil concert capacity

- **Decision:** Keep it removed
- **Context:** The only figure was worked out from the 70k basketball number, so I removed it.
- **Why:** A worked-out number isn't a sourced one.
- **Rejected:** Use 70,000 for concerts

#### IND4 · Lawn totals (Everwise, Ruoff, Victory Field)

- **Decision:** One rule for all: total including lawn
- **Context:** Everwise 6,000 and Ruoff 24,790 include lawn; Victory Field is seats only. Pick one rule.
- **Why:** total including lawn **(my lean)**: Lawn people are real crowd.
- **Rejected:** One rule for all: seats only

#### IND5 · City type

- **Decision:** Sprawl
- **Context:** Sprawl vs hub. The fallback car share is 0.85 either way.
- **Why:** Matches how people get around; no number changes.
- **Rejected:** Hub

#### IND6 · Gainbridge basketball

- **Decision:** Keep 17,274
- **Context:** 17,274 (Ticketmaster) vs 17,923 vs a claimed 20,000. Kept 17,274.
- **Why:** Follows the X1 lean (close sources keep a figure). If you blank all conflicts in X1, this goes blank.
- **Rejected:** Leave it blank

### Salt Lake City

#### SLC1 · NHL team id

- **Decision:** Keep utah-mammoth
- **Context:** I folded the old visitor id utah-hc into utah-mammoth.
- **Why:** It's the current name and city-prefixed, so it won't clash with Colorado Mammoth (colorado-mammoth).
- **Rejected:** Use utah-hockey-club

#### SLC2 · Delta Center concert capacity

- **Decision:** Leave it blank
- **Context:** Only the pre-renovation 20,000 is sourced. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. Leave blank until the renovation's phase 3 gives a new figure.
- **Rejected:** Store 20,000: Old figure; the room is being rebuilt

#### SLC3 · Abravanel Hall

- **Decision:** Keep 2,811
- **Context:** 2,811 vs 2,766/2,768.
- **Why:** It's under 5,000, so it never shows on the map anyway.
- **Rejected:** Leave it blank

#### SLC4 · Rice-Eccles "strained" access flag

- **Decision:** Keep the flag
- **Context:** The access rule flags it. TRAX light rail stops there.
- **Why:** Keep the rule's answer until there's data.
- **Rejected:** Override it because of TRAX

#### SLC5 · West Desert, Zions Bank, UFL Utah 2028, Power District

- **Decision:** Leave them out for now
- **Context:** No schedules yet, or not built.
- **Why:** Nothing to show until they have events.
- **Rejected:** Add them now

### Edmonton

#### EDM1 · Commonwealth Stadium

- **Decision:** Leave it blank
- **Context:** 56,302 / 56,400 / 55,000, none official. Blanked.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store 56,302

#### EDM2 · Clarke Stadium

- **Decision:** Keep 5,000 (official)
- **Context:** City lists 5,000 official seats; Wikipedia says 6,000 after the 2026 retrofit.
- **Why:** Official figure, and your C07 rule counts it as sourced.
- **Rejected:** Use 6,000

#### EDM3 · Convention Centre (5,254 movable chairs)

- **Decision:** Mute the room
- **Context:** The build counts the chairs as a capacity, so the room causes friction.
- **Why:** Your checklist says convention halls aren't venue rows.
- **Rejected:** Keep it as a room

#### EDM4 · Rogers Place Ticketmaster id (140602)

- **Decision:** Look up the new id in the catch-up pass
- **Context:** Old number-only id. Same question as X2; your X2 answer applies.
- **Why:** Covered by C12 and X2.
- **Rejected:** Keep the number

### Miami

#### MIA1 · Homestead-Miami Speedway

- **Decision:** Leave it blank
- **Context:** 46,000 (the build's "middle" pick) vs 45,000 vs 65,000. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store 46,000; Store 65,000

#### MIA2 · FPL Solar Amphitheater

- **Decision:** Leave it blank
- **Context:** 8,500 (city/CVB, includes lawn) vs 5,000 vs 1,646. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. Wait for the operator to publish a figure.
- **Rejected:** Store 8,500 as official

#### MIA3 · Pitbull Stadium

- **Decision:** Leave it blank
- **Context:** 20,000 vs 22,682. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store 20,000

#### MIA4 · Hard Rock Stadium

- **Decision:** Keep 64,767
- **Context:** 64,767 vs 65,326 permanent seats (within 1%). Kept 64,767.
- **Why:** Follows the X1 lean. If X1 blanks all conflicts, this goes blank.
- **Rejected:** Leave it blank

### Washington, DC

#### DC1 · City code

- **Decision:** DC
- **Context:** DC is what locals say; WAS matches the airport/team-style codes used elsewhere.
- **Why:** How locals say it. Your codes research (C08) may revisit.
- **Rejected:** WAS

#### DC2 · Northwest Stadium

- **Decision:** Leave it blank
- **Context:** 64,000 vs 62,000 vs 65,000. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store 64,000

#### DC3 · Greene Stadium

- **Decision:** Store 7,086 as seats, once confirmed
- **Context:** 7,086 seats vs 10,000 football, from the same source. It's blank now.
- **Why:** Seats are the firm number; store it once it's confirmed.
- **Rejected:** Leave it blank; Store 10,000

#### DC4 · Merriweather Post Pavilion

- **Decision:** DC
- **Context:** Belongs to DC, or a future Baltimore build?
- **Why:** DC exists now; a move later is easy.
- **Rejected:** Future Baltimore build

#### DC5 · City type

- **Decision:** Hub
- **Context:** Transit vs hub.
- **Why:** Landover and the amphitheatres pull people out to the suburbs by car.
- **Rejected:** Transit

### Cleveland

#### CLE1 · Jacobs Pavilion

- **Decision:** One rule for every standing-floor room: seated by default (4,100 here)
- **Context:** 4,100 permanent seats vs 5,000 with a temporary floor (both sourced).
- **Why:** seated by default (4,100 here) **(my lean)**: One rule beats case-by-case calls; seated keeps it under the 5,000 floor.
- **Rejected:** Use 4,100 here (room stays muted); Use 5,000 here

#### CLE2 · ForeFront Field

- **Decision:** Leave it blank
- **Context:** Only a 2009 plan figure (3,500 + 1,500 berm). It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. A 2009 plan isn't the built room.
- **Rejected:** Store 5,000

#### CLE3 · Blossom Music Center

- **Decision:** Keep in Cleveland
- **Context:** Keep in Cleveland or move to a future Akron build?
- **Why:** Cleveland exists now.
- **Rejected:** Future Akron build

#### CLE4 · Public Hall

- **Decision:** Match by tenant: Charge games at 5,100
- **Context:** 5,100 for Charge games vs ~10,000 full hall.
- **Why:** Charge games at 5,100 **(my lean)**: Each event gets the setup it actually uses.
- **Rejected:** Use ~10,000 for everything

### San Antonio

#### SA1 · Retama Park

- **Decision:** Leave it blank
- **Context:** 15,000 from one undated Stadium Journey page. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. One undated page is too thin.
- **Rejected:** Store 15,000

#### SA2 · Real Life Amphitheater

- **Decision:** Leave it blank
- **Context:** 6,000 seated vs 8,000 covered (KSAT 2021). It's blank now, and no concerts since 2022.
- **Why:** Nothing is guessed. The room just shows no capacity. No concerts since 2022, so blank costs nothing.
- **Rejected:** Store 6,000 seated

#### SA3 · Car shares on 11 rooms

- **Decision:** Keep them removed (city default)
- **Context:** I removed the build's 0.95/0.87 values from 11 rooms the city-type answer never estimated, so they use the city default.
- **Why:** Your C04 decision wires sourced estimates; these weren't sourced.
- **Rejected:** Carry over the nearest estimated room's value

### Portland

#### PDX1 · Hillsboro Hops ballpark

- **Decision:** Leave it blank
- **Context:** 7,000 (MiLB) vs 4,700 fixed vs 6,000 (city/Mortenson). It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. Wait for the team to publish an official figure.
- **Rejected:** Store 4,700 seats; Store 7,000 total

#### PDX2 · McMenamins Edgefield

- **Decision:** Leave it blank
- **Context:** 7,000 vs ~5,000. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store 7,000

#### PDX3 · Cascades Amphitheater

- **Decision:** Store 7,810 seated
- **Context:** The build stored 18,000, which wasn't sourced. Official: 7,810 covered + lawn for "nearly 10,000". It's blank now.
- **Why:** 7,810 is the official seated figure.
- **Rejected:** Leave it blank; Store ~10,000 total

#### PDX4 · Postseason pool

- **Decision:** Keep main's; recalibrate everything later in one pass
- **Context:** Portland's calibrator recomputed 128 other-city postseason rows; I kept main's.
- **Why:** Your C10 decision already plans one all-city rebuild.
- **Rejected:** Take Portland's numbers

#### PDX5 · VMC (Veterans Memorial Coliseum)

- **Decision:** Keep 8,600
- **Context:** 8,600 post-renovation hockey vs 10,000 bowl.
- **Why:** Matches the room as it is now.
- **Rejected:** Use 10,000

### Detroit

#### DET1 · Pine Knob

- **Decision:** Leave it blank
- **Context:** 15,000 / 15,040 / 15,300. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store 15,040

#### DET2 · Freedom Hill (Michigan Lottery Amphitheatre)

- **Decision:** Leave it blank
- **Context:** 7,200 vs 7,300. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store 7,200

#### DET3 · Keyworth Stadium

- **Decision:** Leave it blank
- **Context:** 7,933 vs ~7,000. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store 7,933

#### DET4 · Calihan Hall

- **Decision:** Keep 8,295 (official)
- **Context:** Official 8,295 vs 7,917 (Sports Commission). Kept 8,295.
- **Why:** The official figure wins.
- **Rejected:** Leave it blank

#### DET5 · Fox Theatre

- **Decision:** Keep 5,048
- **Context:** 5,048 fixed vs 5,174 with pit. Kept 5,048.
- **Why:** Count it on its sourced figure.
- **Rejected:** Use 5,174 with pit

#### DET6 · Little Caesars Arena concert

- **Decision:** Leave it blank
- **Context:** Only a 15,000–22,000 range. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. Your C05 decision keeps ranges blank.
- **Rejected:** Store 22,000

#### DET7 · Aretha Franklin Amphitheatre

- **Decision:** Leave it blank
- **Context:** Sourced only as "over 6,000". It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. "Over 6,000" is open-ended, like a range.
- **Rejected:** Store 6,000

### Pittsburgh

#### PIT1 · PNC Park

- **Decision:** Keep 38,747
- **Context:** 38,747 (MLB guide) vs 38,362 (Pirates facts page). Kept 38,747.
- **Why:** About 1% apart; follows the X1 lean.
- **Rejected:** Leave it blank

#### PIT2 · PennWest Convocation Center

- **Decision:** Keep 6,000
- **Context:** Official 6,000 vs wiki 4,000 for sport setups.
- **Why:** Keep the official figure until a sport-specific official one turns up.
- **Rejected:** Store 4,000 for basketball

#### PIT3 · Westmoreland Fair grandstand

- **Decision:** Leave it blank
- **Context:** 5,600 expandable vs 5,000. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store 5,600

#### PIT4 · Reeves Field and Lernerville

- **Decision:** Leave it blank
- **Context:** Reeves "over 6,000" vs 5,500; Lernerville 12,000 vs 10,000. Both blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store the higher figures

#### PIT5 · Acrisure car share for Pitt football

- **Decision:** Keep 0.86 (one value per room)
- **Context:** Research gives Pitt games 0.76; the Steelers' 0.86 is used for the room.
- **Why:** Simpler for now; pick the second option if you want every sourced estimate used.
- **Rejected:** Add a separate Pitt value (0.76): Needs per-tenant car shares, a small data change

### Raleigh–Durham

#### RDU1 · New Red Hat Amphitheater

- **Decision:** Leave it blank until it opens
- **Context:** 6,500 is a planned figure for a room opening in 2027. It's blank now.
- **Why:** A plan isn't a built room.
- **Rejected:** Store 6,500 now

#### RDU2 · Dorton Arena concert setup

- **Decision:** Leave concert blank; keep 5,000 seats
- **Context:** 7,000 / 6,500 / 7,610 / 9,150. Kept the official 5,000 permanent seats.
- **Why:** Four figures, no official one.
- **Rejected:** Store 7,000 for concerts

#### RDU3 · Lenovo Center after 2026 renovation

- **Decision:** Keep the board figures until official numbers come out
- **Context:** Concert "more than 21,000" removed; hockey/basketball are board figures relayed by media.
- **Why:** Best available; swap when official numbers are published.
- **Rejected:** Blank them too

#### RDU4 · City code

- **Decision:** RDU
- **Context:** RDU vs RAL.
- **Why:** The name everyone uses for the area.
- **Rejected:** RAL

#### RDU5 · Hurricanes/Duke postseason rows

- **Decision:** Add them in the next full recalibration
- **Context:** Not added because the pool was held the same.
- **Why:** Your C10 decision plans one all-city rebuild.
- **Rejected:** Add them now

### St. Louis

#### STL1 · World Wide Technology Raceway

- **Decision:** Leave it blank
- **Context:** 58,000 / 57,000 / ~80,000. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store 58,000

#### STL2 · Hollywood Casino Amphitheatre

- **Decision:** Store 6,805 seated, if the operator confirms
- **Context:** 20,000 (estimated, includes lawn) vs 6,805 pavilion. It's blank now.
- **Why:** Firm seated figure once confirmed. Follow your IND4 lawn rule if it says totals.
- **Rejected:** Leave it blank

#### STL3 · Enterprise Center

- **Decision:** Keep hockey at 18,096; concert blank
- **Context:** Concert 22,000 vs 21,000 (blank now). Hockey 18,096 vs 19,022 (kept 18,096).
- **Why:** Follows the X1 lean.
- **Rejected:** Blank hockey too

#### STL4 · Saint Louis Music Park

- **Decision:** Leave it blank
- **Context:** Only a low-confidence 4,500 estimate. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. Low-confidence, and under 5,000 anyway.
- **Rejected:** Store 4,500 as estimated

#### STL5 · Away-game slug "cardinals"

- **Decision:** Keep as is
- **Context:** Road games use cardinals for the St. Louis baseball club; Arizona football is arizona-cardinals.
- **Why:** Your C11 decision already says St. Louis keeps cardinals.
- **Rejected:** Rename to st-louis-cardinals

### Denver

#### DEN1 · Empower Field football

- **Decision:** Store 76,125
- **Context:** 76,125 vs 75,000 (about 1.5%). It's blank now; the 85,000 concert row is kept.
- **Why:** Follows the X1 lean so it matches Hard Rock and the others.
- **Rejected:** Leave it blank

#### DEN2 · Denver Coliseum

- **Decision:** Leave it blank
- **Context:** 10,200 vs 8,140. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. The sources disagree and none is official.
- **Rejected:** Store 10,200

#### DEN3 · Dick's Sporting Goods Park

- **Decision:** Leave it blank
- **Context:** 18,061 / 17,305 permanent / 18,581 expanded. It's blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. Wait for the club to publish a figure.
- **Rejected:** Store 18,061

#### DEN4 · Centennial Stadium

- **Decision:** Keep 12,000
- **Context:** The club's official 12,000 is stored instead of the reported 12,372.
- **Why:** The official figure wins.
- **Rejected:** Use 12,372

#### DEN5 · Colorado Mammoth alias "Mammoth"

- **Decision:** Drop the bare "Mammoth" alias
- **Context:** Utah's NHL club is also "Mammoth", so names could cross-match.
- **Why:** Avoids games landing on the wrong team.
- **Rejected:** Keep it

#### DEN6 · Magness concert and Mission Ballroom

- **Decision:** Leave it blank
- **Context:** Ranges only: Magness 6,500–7,200; Mission 2,200–3,950. Both blank now.
- **Why:** Nothing is guessed. The room just shows no capacity. Your C05 decision keeps ranges blank.
- **Rejected:** Store the top of each range

### City data changes to apply

Checked against main 635a164: items marked [x] are already on main; one contradicts main (DC5). Rows not annotated weren't checked line by line.

Changes the answers make to city data (capacities, codes, names, ids). File hints are from a search of this branch; rows marked "not found" belong to round-2 city data that hasn't merged here yet.

- [ ] **N9** Ryan Field 58% concert car share: wire it?: Wire 58% when concerts are listed, marked estimated. File: not found in repo yet (new round-2 city data) — Today on main: Ryan Field (`venues.ts:3266`) has a 35,000 football capacity and no concert car share. Not done.
- [ ] **N10** Chicago (Composer, PR #54): Impact Field capacity: Keep 6,300 (reported). File: `src/data/venues.ts` — Today on main: Impact Field (`venues.ts:3398`) has no capacity (blanked). Change: add 6,300 concert, reported.
- [ ] **X2** Old numeric Ticketmaster ids: switch to the new kind?: Swap them all for the new ids in the catch-up lookup pass. File: not found in repo yet (new round-2 city data)
- [ ] **OTT1** TD Place Arena capacity: Store 8,585 as the full bowl. File: `src/data/venues.ts` — Today on main: TD Place Arena (`venues.ts:9111`) has no capacity. Change: add 8,585.
- [ ] **OTT2** Ticketmaster id at TD Place (401513): Swap it for the new id in the catch-up pass. File: not found in repo yet (new round-2 city data)
- [x] **OTT3** City code: OTT. File: `src/config/metros.ts` **Done on main** (`metros.ts:403`, code OTT).
- [ ] **IND4** Lawn totals (Everwise, Ruoff, Victory Field): One rule for all: total including lawn. File: not found in repo yet (new round-2 city data)
- [x] **IND5** City type: Sprawl. File: `src/data/venues.ts` **Done on main**, but the file is `src/data/formula/gridlock.ts:116` (`CITY_TYPE`), not venues.ts.
- [ ] **EDM3** Convention Centre (5,254 movable chairs): Mute the room. File: `src/data/venues.ts` — Today on main: Edmonton Convention Centre (`venues.ts:9808`) is not muted. Not done.
- [ ] **EDM4** Rogers Place Ticketmaster id (140602): Look up the new id in the catch-up pass. File: not found in repo yet (new round-2 city data)
- [x] **DC1** City code: DC. File: `src/config/metros.ts` **Done on main** (`metros.ts:384`, code DC).
- [ ] **DC3** Greene Stadium: Store 7,086 as seats, once confirmed. File: `src/data/venues.ts` — Today on main: Greene Stadium (`venues.ts:8983`) has no capacity. Not done.
- [x] **DC4** Merriweather Post Pavilion: DC. File: `src/data/venues.ts` **Done on main** (Merriweather is in `washington-dc`, `venues.ts:8935`).
- [ ] **DC5** City type: Hub. File: `src/data/venues.ts` **Contradicts main:** `src/data/formula/gridlock.ts:116` has `washington-dc: transit`. The answer says Hub. Builder: change to hub (and the note at gridlock.ts:110-ish), or check with Kylie if the transit call came from newer research.
- [ ] **CLE1** Jacobs Pavilion: One rule for every standing-floor room: seated by default (4,100 here). File: `src/data/venues.ts` **Adjusted:** Jacobs Pavilion (`venues.ts:10082`) already has 4,100 concert, plus a second 5,000 concert row. Change: drop or demote the 5,000 row so 4,100 seated is the default.
- [x] **CLE4** Public Hall: Match by tenant: Charge games at 5,100. File: `src/data/venues.ts` **Done on main** (Public Hall has 5,100 basketball, `venues.ts:10032`).
- [ ] **PDX3** Cascades Amphitheater: Store 7,810 seated. File: `src/data/venues.ts` — Today on main: Cascades Amphitheater (`venues.ts:10568`) has no capacity. Not done.
- [x] **RDU4** City code: RDU. File: `src/config/metros.ts` **Done on main** (`metros.ts:345`, code RDU).
- [ ] **RDU5** Hurricanes/Duke postseason rows: Add them in the next full recalibration. File: not found in repo yet (new round-2 city data)
- [ ] **STL2** Hollywood Casino Amphitheatre: Store 6,805 seated, if the operator confirms. File: `src/data/venues.ts` — Today on main: `hollywood-casino-amphitheatre-stl` (`venues.ts:9290`) has no capacity. Not done (and not to be confused with the Chicago-area venue at `:3286`).
- [ ] **DEN1** Empower Field football: Store 76,125. File: `src/data/venues.ts` — Today on main: Empower Field (`venues.ts:11666`) only has 85,000 concert. Change: add 76,125 football.
- [ ] **DEN5** Colorado Mammoth alias "Mammoth": Drop the bare "Mammoth" alias. File: not found in repo yet (new round-2 city data)

## Approved with Mock Mosaic (Kylie, Oct 13)

### 1. Stub privacy, Venmo-style (updated Oct 14: three levels)

**Build instruction:** Stubs get three Venmo-style levels, **Anyone / Friends / Private**. The default for new stubs is set in Settings › Privacy and can be overridden per stub with the pill. **The default for new users is Private** (Kylie, Oct 14: "the default should definitely be private though"), which matches today's profile default `only_me` (`src/screens/ProfileEditScreen.tsx:15`).

Start from what exists:
- Stub privacy already works for **Watching** only: `src/components/StubSheet.tsx:171-180` has two `stub-choice` buttons (Private / Friends), saved as `watchShare` by `setWatchDetails` (`src/data/personalLog.ts:712-720`).
- A profile-wide switch already exists: `ProfileEditScreen.tsx:14-26` offers `only_me` "Only me" (default), `approved` "People I approve" and `anyone` "Anyone". It's enforced in the database by `can_view` / `can_view_plans` (below).

Changes, in order:
1. **Reuse the profile switch as "Default for new stubs"** (proposal to the builder). Don't add a second, competing setting. Move or relabel it under Settings › Privacy with the same three words: `anyone` → **Anyone**, `approved` → **Friends** (renamed from "People I approve" to match the stub wording), `only_me` → **Private**. Keep the enum values; change only the labels and the helper copy. A helper line says it applies to new stubs.
2. **Stub it sheet:** remove the Watching-only Private/Friends buttons (`StubSheet.tsx:171-180`). Add the "Who sees this [Friends ⌄]" pill for **Attending, Watching and Interested**, labelled **"Your default"**. Its menu offers **Anyone / Friends / Private**. When the pick differs from the default, the label becomes a gold **"Not your default"**.
3. **Data:** store a per-stub visibility (anyone / friends / private) on every plan and entry. Generalize `watchShare` (or add a field next to it) and migrate existing values unchanged: `friends` → Friends, `private` → Private. Stubs with no value inherit the profile default at the time of migration.
4. **"Change past stubs…" (new row under the default):** a bulk sheet that makes all past stubs **Anyone, Friends or Private**, in any direction (Venmo only goes more private; we allow all directions).
5. **Event page status line:** editable before and after the event, with the same three levels ("Watching · 🔒 Private ⌄", "Attended · 55k · Anyone ⌄").
6. **Tags follow the stub's privacy** (T01).

Why: one default set once, a quiet override where you stub, and a way to fix it later from the event page or in bulk. Anyone is kept because, in Kylie's words: "anyone would enable people who you don't follow to view this, which is fine. that's why there's a default setting. again, similar to venmo." New users start Private so nothing is shared until they choose.

Rejected: big buttons on the sheet; editing privacy only inside the sheet; a segmented row; a separate stub default next to the profile switch (two settings for one idea); a non-Private default for new users.

**Superseded:** the Oct 13 rejection of a Public option. Kylie reversed it on Oct 14 (answer E): Anyone stays as a level, because the default protects people who don't want it and per-stub control covers the rest, as in Venmo.

> **Open builder check: database rules for per-stub visibility.** Today visibility is **per profile**, not per stub:
> - `profiles.visibility` (`only_me` / `approved` / `anyone`, migration 0001) is read by `can_view(owner)` (0001; latest in `supabase/migrations/0018_blocks.sql:62-80`, which adds blocks). Visible = owner, or (not blocked and (`anyone`, or `approved` and an approved follower)).
> - Plans use `can_view_plans` (0012; updated in 0016): visible only to approved followers when the profile isn't `only_me`, even for `anyone` profiles.
> - Follow approval and its rules are in 0011 and 0015. Shared cards are views `profile_cards` / `entry_cards` filtered by `can_view` (0017).
> - Signed-out access: `entry_cards` and `profile_cards` are granted to `anon` (`0017_cards.sql:44, 72`), and 0001 grants `profiles` and `nights` to `anon` (`:220`).
>
> The builder must:
> - (a) add a per-stub visibility column on entries and plans;
> - (b) change the read policies and views to check the stub's level (Anyone = everyone not blocked, signed out included; Friends = approved followers; Private = owner only) instead of, or narrowed by, the profile value;
> - (c) decide plans: today `can_view_plans` never shows plans beyond approved followers, so an "Anyone" Interested/Attending plan needs that function changed;
> - (d) confirm signed-out visitors can see Anyone stubs through the `anon` grants, and nothing else;
> - (e) keep blocks (0018) overriding every level.
>
> Write a migration; don't edit old ones.

Board: `/workspace/ff-gap-review/mosaic/privacy/privacy-r1.png` (on the box; drawn with two levels, so add Anyone to the menu and the bulk sheet).

Board r2: `/workspace/ff-gap-review/mosaic/privacy/privacy-r2.png` (three levels). The live Stub it sheet's "Who sees it" control is two big buttons and only shows for Watching (`StubSheet.tsx:168-187`). Replace it with the pill for Attending, Watching and Interested. The Settings screen on the board isn't from a live capture: match the live styles and don't restyle existing components.

### 2. Add to calendar: option B

**Build instruction:** Add a new icon button beside "+ Stub it" on the event page that opens a chooser sheet: **Apple / device calendar** (download an .ics file) or **Google Calendar** (open a prefilled link). Nothing exists on main to reuse or remove: there's no .ics, Google Calendar or Add to calendar code. The "+ Stub it" button itself (`src/components/StubSheet.tsx`, opened from the event page) stays as is. This updates item 3 above.

Board: `/workspace/ff-gap-review/mosaic/b5/v2/` (on the box).

### 3. Crowds with no size (updated Oct 14)

**Build instruction:** Unknown sizes are already blank on most rows and chips, because `crowdThousands` is only drawn when a size exists (e.g. `src/components/ChipCard.tsx:53`, `src/components/DayTimeline.tsx:54`). Change the one place that shows a dash, `src/components/WhyCard.tsx:86` (`'—'` when the size is 0), to show nothing. Add "— Size unknown" to the event page's crowd area, which doesn't exist yet. Keep unknown-size events muted on the map: `isMuted` (`src/map/crowdPoints.ts:33`) already mutes them, because `sizeTier` returns `unknown` (`src/data/read.ts:117`); don't change that. Never show the word "unsized" in UI copy.

- **Event page:** "— Size unknown".
- **Rows, chips and the selected card:** nothing (blank). This replaces the Oct 13 bare "—" rule; ignore the dashes on the v3 boards.

Why: a dash in every row reads as noise; blank is quieter, and the event page is where the explanation belongs.

Rejected: the bare "—" on rows and chips (Oct 13 version); the word "unsized" anywhere in UI copy.

The pop-up sizing item (item 1) matches this: "unsized" stays an internal term in notes and code only (e.g. `src/data/seed/past2026.ts:90`).

## Approved with Mock Mosaic (Kylie, Oct 14)

### 4. Date page r3

**Build instruction:** Rework the existing date page (`src/screens/DateScreen.tsx`); don't build a new one. In order:
1. **Move** the Local competition card (`:346-364`) **above** the day list ("This day in …", `:311`).
2. **Rename** its heading from "Local competition" (`:348`) to **"Local Competition"**.
3. **Remove** its summary line (`:351-364`: "6.2 Busy · 108k across 5 events · 4 start at 7:00 pm"). Keep the read tile.
4. **Add** an hourly weather strip above its timeline (`DayTimeline`, `src/components/DayTimeline.tsx`). Use the existing hourly forecast data (Open-Meteo, `src/data/formula/weather.ts:180-207`); the board's temperatures are only examples.
5. **Rename** the day list to **"<Dayname>'s lineup"** (e.g. "Wednesday's lineup", following the date).
6. **Change the sort** from crowd size then time (`:112`) to **start time**.
7. **Replace** the custom rows with the shared Explore row, `DayRow` / `RowBody` (`src/components/DayRow.tsx:16, 53`): time leading and top-aligned, title, venue underneath, crowd and badges on the right.
8. **Remove** the per-row "+ Stub it" button (`:314, 336`) and the per-row StubSheet trigger (`:75`). The event page keeps its own "+ Stub it".
9. Show **Attending** as plain link-blue text with the ticket icon, no fill. Use the icons everywhere: ticket = Attending, TV = Watching, bookmark = Interested. These icons already exist (`TicketIcon`, `TvIcon`, `BookmarkIcon` in `src/components/Icons.tsx:61, 177, 83`).

The header and forecast card stay on top as now.

Why: the day's situation (forecast, competition, weather by hour) comes first, then the events in the order you'd live them. Reusing the Explore row keeps one row design across the app.

Rejected: sorting by crowd size; weather on every row; "+ Stub it" on rows; a filled Attending pill (filled navy is reserved for actions or selection); a "You're attending" text line.

Boards: `/workspace/ff-gap-review/mosaic/datepage/datepage-r3.png` and the lean phone `datepage-r3-lean.png` (on the box).

### 5. Lineup label (updated Oct 14: every week)

**Build instruction:** Change `weekWord` in `src/screens/ExploreListScreen.tsx:81-88`, which renders the Explore List header at `:481` (`{weekWord} · {N} events`, shown uppercase), so that every week carries "lineup":
- This week → **"THIS WEEK'S LINEUP · N EVENTS"** (today "This week").
- Next week → **"NEXT WEEK'S LINEUP · N EVENTS"** (today "Next week").
- Last week → **"LAST WEEK'S LINEUP · N EVENTS"** (today "Last week").
- Weeks further out → **"WEEK OF OCT 26 · LINEUP · N EVENTS"** (decided D2, Oct 14). Today `weekWord` falls back to `weekSpan` (`ExploreListScreen.tsx:87`, defined at `:91`), which gives "OCT 26–NOV 1". Change `weekWord`'s fallback to "Week of {Mon date}" + " · lineup", and keep `weekSpan` only if something else still uses it. Why: the same lineup wording as the near weeks, and a single start date is shorter than a range. Rejected: keeping "OCT 26–NOV 1" with no lineup word; "OCT 26–NOV 1 · LINEUP" (long, and the range is redundant with the day bands).

Why: one clear use of the word on Explore, at the top of the list. Kylie wants it on every week, not only this one (Oct 14, answer D).

Rejected: "lineup" in every day band; using it as the Map sheet label; "lineup" on this week only (the earlier lean, D).

Reconciling N16 ("Saturday's lineup" on a day's list): the day-name form is the **date page** heading (item 4). The Explore List uses the week forms above. Explore day bands don't use the word.

Board: `/workspace/ff-gap-review/mosaic/b5/v3/lineup.png` (on the box).

### 6. Crowd size range setting

**Build instruction:** Add a new **Events** section to You › Settings (`src/screens/SettingsScreen.tsx`; today it has Account and other groups at `:79-128`, and no crowd setting), with the row "Crowd size · 3,000 – No max ›" (example value). Apply the range as **one shared display filter** across the existing lists (Explore map and list, date pages, search), applied **after** scoring. Do **not** change the existing 5,000 friction floor (`FRICTION_ATTENDEES`, `src/data/read.ts:33`) or the existing small-room muting (`isMuted`, `src/map/crowdPoints.ts:33-35`). They stay as is, and the new filter sits on top of them. The surface-by-surface changes are in the table below.

**Picker:**
- A two-handle slider from 0 to 80,000+ (0 = no min, 80,000+ = no max). It snaps in steps of 5,000 (17 stops).
- Labels 0 / 20,000 / 40,000 / 60,000 / 80,000+, with light ticks at every 5,000.
- Min and Max number-pad fields accept any whole thousand. Typed values snap to the nearest 1,000 and can sit between slider stops.
- Full numbers with commas, never "k".
- Helper: "Slider moves in steps of 5,000. Type any thousand for exact values. 80,000+ means no max."

**Hidden events:** a quiet link-blue 11pt line, "N events outside your crowd size · Show", in Explore day bands and at the bottom of the date page lineup. Counts on the boards are examples.

**Rules:**
- Stubbed events and events friends are attending always show, even outside the range. They're muted if under 5,000.
- Events with no listed size show by default (blank size). A toggle, "Show events with unknown size", controls them.
- Show reveals the hidden events for the current view only. It doesn't change the setting.
- New users start with no min and no max, so nothing changes from today.

Why: one setting the user controls everywhere, with exact values possible but coarse dragging, and nothing silently lost (the Show line).

Rejected: min only; fixed-tier dropdowns; a stepper; free typing of any number; "k" abbreviations; a 50,000 cap; dragging in 1,000 steps; per-tab filters; a hard hide with no Show link.

Caveats: the Settings screen isn't from a live capture (match live styles, don't restyle existing components), and the counts are examples.

Boards: `/workspace/ff-gap-review/mosaic/minsize/minsize-r6.png` and phones `minsize-r6-1-settings.png` to `minsize-r6-5-datepage-filtered.png` (on the box).

#### What the crowd size range touches

**The setting is a display filter only.** Scores, the read box, the day strip and the friction math never change with it. Events under 5,000 stay out of scoring whatever the setting says.

**Muting vs hiding, in one sentence:** muted gray means "shown, but too small (or unsized) to count toward the score"; hidden means "outside the size range you chose, and tucked behind the 'N events outside your crowd size · Show' line".

Context, what the code does today:
- `sizeTier` (`read.ts:113-118`) returns `feeds-friction` only at 5,000+ (never for `belowFloor`). It uses `knownSize` (`read.ts:89-106`): a counted crowd, else the low end of a sports expected draw, else room capacity. Ticketmaster "special" listings in rooms under 6,000 are held under the floor (`read.ts:95-99`).
- `showsOnMap` (`crowdPoints.ts:28-30`) is true for every event at a known venue. `isMuted` mutes small and unknown-size events. That's why Patrick Droney (~1.5k room) is gray (Q1: small rooms included, muted; Oct 9, 3.4).
- Muted styling: gray `#7B8798`, smaller, no glow (`src/map/CrowdLayer.tsx:21, 113-115`), muted labels (`:147`), cards last (`:412`).

Instructions by surface. Implement one shared predicate, e.g. `passesCrowdRange(event, setting, log, friends)`.

| Surface | Instruction | Code to change (today) |
|---|---|---|
| Map chips and pins | Filter for display. Events in range keep today's muting. | `MapScreen.tsx:111` (`dayEvents = events.filter(showsOnMap)`), `CrowdLayer.tsx` |
| Map sheet rows | Same filtered list as the chips; hidden-events line at the bottom of the list. | `MapScreen.tsx:111`, rows via `DayRow` |
| Header and sheet totals ("5 events · 108k") | **Count only visible events, for both numbers** (decided, A). The event count changes from all venue events to visible ones; the crowd total stays "5,000+ only", but of visible events. | count = `caption` (all `showsOnMap`); crowd = `crowdTotal` (`MapScreen.tsx:164-166, 283-291, 418`) |
| Explore List rows and day bands | Filter rows; "N events outside your crowd size · Show" in each affected band. | `ExploreListScreen.tsx:264` |
| Explore week count ("…'S LINEUP · N EVENTS") | Count only visible events (A). | `ExploreListScreen.tsx:447, 481` |
| Event page This day card | Count only visible events (A). The "Biggest" line follows the visible set. | `EventScreen.tsx:188-191, 250-258` |
| Day strip scores, has-events dot | No change: scores never change, and the dot stays based on all events. | `DayStrip.tsx:38, 88`; `ExploreListScreen.tsx:427` |
| Day score / read box, crowdFight, read math | No change. A min below 5,000 never makes small rooms count; a max never drops big events from the score. | `formulaRead.ts`; `crowdFight.ts:109-145` (`eventFeedsFriction` at `:117`) |
| Home "Today" big-event count | No change (it describes the day's friction, not a list). | `HomeScreen.tsx:136-137` |
| Date page lineup | Filter rows; hidden-events line at the bottom. | `DateScreen.tsx:112, 311-340` |
| Date page Local Competition (timeline) | **Not filtered** (decided, B): hidden events still appear if they're 5,000+, because the read uses them. The summary line is removed by item 4. | `DayTimeline.tsx:16` (already 5,000+ only) |
| Event page Up against | **Not filtered** (B): hidden 5,000+ rivals still appear. | `EventScreen.tsx:182, 276-305` (already 5,000+ only) |
| Event page Same homestand / Also on | **Not filtered** (decided, C). The heading becomes "More dates" (C2, item 7). | `src/components/SameTour.tsx:17, 37` |
| Event page itself | Always opens (link, search, stub). | `EventScreen.tsx` |
| Selected chip card | A hidden event can't be selected unless Show was tapped. | `ChipCard.tsx` |
| Friends Activity layer | Events friends are attending always show, muted if under 5,000. | `chipActivity.ts:23`; `ExploreListScreen.tsx:133, 465`; `DateScreen.tsx:127` |
| Stubs (log, You, Your year) | Never filtered. Stubbed events always show everywhere, muted if under 5,000. | `StubRows.tsx`, `YourYear.tsx` |
| Search | Apply the filter, with a Show line (Kylie's "everywhere" rule). Search returns dates with matched titles, so filter which titles match; a date whose only matches are hidden shows under the Show line. | `SearchSheet.tsx`; `DateSearchHit` (`types.ts:354`) |
| Unknown-size events | Shown by default with a blank size (muted on the map); the toggle hides them. | `sizeTier` → `unknown` (`read.ts:117`) |
| Hidden-events line (new) | Link-blue, 11pt. Show reveals for the current view only and resets on leaving. | new |
| New users | Default no min, no max: no behavior change. | new |

Builder checks:
- Never pass the filter into `rateDate`, `dateCrowdFight`, `eventCrowdFight` or the day strip read. Add a test that changing the setting leaves the day's score identical.
- Compare the range against the number the row shows (highlighted crowd, else `drawSize`). Flag events where `knownSize` (which decides muting) and the displayed number fall on different sides of 5,000.

### Answers to the open questions (Kylie, Oct 14)

- **A. Day totals: count only visible events, for both the event count and the crowd total.** Why: the numbers should match the rows you see, and the hidden-events line accounts for the rest. Rejected: counting all events (numbers wouldn't match the list); a mixed rule (count all, total visible).
- **B. Up against and Local Competition: hidden events still appear if they're 5,000+** (lean accepted). Why: they're real crowd competitors and the read uses them; hiding them would make the explanation disagree with the score. Rejected: filtering them like the lists.
- **C. Same homestand / Also on: not filtered by the crowd range** (lean accepted). Why: it's a schedule of the same team's or performer's dates, not a crowd list. Rejected: filtering it.
- **D. Lineup on every week, not just this week** (not the lean): "THIS WEEK'S LINEUP", "NEXT WEEK'S LINEUP", "LAST WEEK'S LINEUP". Rejected: this week only (the lean).
- **C2. "More dates"** for every kind of event (lean accepted, "your leans are fine"). See item 7.
- **D2. "WEEK OF OCT 26 · LINEUP"** for weeks further out (lean accepted). See item 5.
- **E. Keep "Anyone"** as a stub level: Anyone / Friends / Private, with the profile switch reused as the default for new stubs ("People I approve" renamed Friends). New users default to **Private**. Kylie: "anyone would enable people who you don't follow to view this, which is fine. that's why there's a default setting. again, similar to venmo." This supersedes the Oct 13 rejection of a Public option. Rejected: dropping Anyone; Friends-only stubs under an Anyone profile; a non-Private default.

### 7. "More dates" heading on the event page (Oct 14, C2)

**Build instruction:** In `src/components/SameTour.tsx:37`, replace `{event.performer ? 'Also on' : 'Same homestand'}` with the single heading **"More dates"** for every kind of event. Leave the matching logic (`:17-19`: same performer, else same home team, same city, within 30 days) and the crowd range rule (not filtered, C) unchanged. Update the section's `aria-label` ("Other dates") to match if it should read the same.

Context: today concerts and other events with a performer, residencies included, show "Also on". Games show "Same homestand". Events with neither performer nor teams (theatre, comedy specials, fairs) match nothing, so the section hides; that's unchanged.

Why: "homestand" is sports language and doesn't fit concerts, residencies or every team (Kylie). One plain heading works for every kind of event.

Rejected: keeping "Same homestand" for sports and "Also on" for shows; "Other nights"; "Also on" for everything.

### 8. Starred cities in the home picker (v4)

**Build instruction:** Rework the existing home picker (`src/components/HomePicker.tsx`); don't build a new one.

What it does today (main 635a164): `HomePicker.tsx:9-37` shows "Where's home?" (`:20`) and a plain list of every city with events (`metrosWithEvents()`, `:10`). Tapping a city sets home and closes (`choose`, `:12-15`). There's no search and no star. It opens on first launch (`src/App.tsx:80`) and, unchanged, from Settings › Home city (`src/screens/SettingsScreen.tsx:169-176`). Stars already exist on the city switcher: `src/components/AreaSwitcher.tsx:35-41` orders home, then starred cities, then the rest, with a star button on each non-home row (`:86-100`), stored on the device by `favoriteCitiesOf` / `toggleFavoriteCity` (`src/data/personalLog.ts:1031-1040`). **Done:** the switcher order and its stars; don't rebuild them.

Changes:
1. Add a **search field** at the top of the picker that filters the city list as you type.
2. Add a **star on every row**, with a **44pt** tap target, using the existing `toggleFavoriteCity`. Tapping the star stars or unstars the city; it doesn't set home.
3. **Tapping the row** (not the star) sets Home, as `choose` does today.
4. **Order:** Home on top (house mark), starred cities pinned under it, then the rest. Same order as the switcher.
5. **Reuse the same list as Settings › Home & cities** (item 9). There, it opens as a sub-page instead of the first-open dialog, and setting home doesn't close it.
6. **Wording:** say **"starred"** in UI copy, never "favorites" for cities (the Favorites tab and section are about teams and artists).

Why: Kylie's N2 note asks for cities to be starred in the same place you set home, on first open and in Settings. One list does both jobs, and its order matches the switcher, so nothing new has to be learned.

Rejected: a separate "Any other cities?" step after picking home (`favorite-cities-d-alt-separate-step.png`). It adds a screen to first open for something a star on the same row already does.

**Adjusts N2** (Review form answers): N2's "pinned group under home, star on each row, no limit, on the device" stands, and the switcher part is built. This item adds the part N2 left open: where you add stars (the home picker, on first open and in Settings).

Boards: `/workspace/ff-gap-review/mosaic/b5/v4/favorite-cities.png`, `favorite-cities-a-first-open-lean.png`, `favorite-cities-b-home-set.png`, `favorite-cities-c-settings-home-cities.png`; live reference `favorite-cities-live-switcher.png`; rejected `favorite-cities-d-alt-separate-step.png` (on the box).

### 9. Settings as one list (v4)

**Build instruction:** Restructure `src/screens/SettingsScreen.tsx` into one list in the live row style (`.settings-row`, `src/styles.css:1394`). Don't restyle existing rows.

What it does today: separate blocks, each with a `settings-heading` (13px / 800 uppercase, `src/styles.css:1386-1390`): Account (`SettingsScreen.tsx:80`), Profile (`:129`), Blocked (`:136`), Favorites (`:154`), Your events (`:161`), Home city (`:170-176`, opens `HomePicker`), App (`:179`). There's no Location, Events or Privacy section yet; the privacy default lives on the profile edit screen (`src/screens/ProfileEditScreen.tsx:14-26`).

The list, in order:
1. **Account** (the existing rows).
2. **Location:** one row, **"Home & cities"**, showing the home city and the count starred (e.g. "Los Angeles · 3 starred ›"). It opens the item 8 list as a sub-page. Replaces the Home city block (`:169-176`).
3. **Events:** **"Crowd size"** row (item 6), opening its sub-page.
4. **Privacy:** the default for new stubs and **"Change past stubs…"**, using **Anyone / Friends / Private** as on `/workspace/ff-gap-review/mosaic/privacy/privacy-r2.png` (stub privacy item 1).
5. Then the existing **Favorites**, **Your events** and **App** sections, unchanged.

Detail controls (the city list, the crowd slider, the privacy pickers) go on **sub-pages**, which use the live 13px / 800 section headers.

**Adjusts** item 6 (Events section) and stub privacy item 1 (Settings › Privacy): both now sit in this one list, and their controls move to sub-pages.

Why: one scannable list matches the live screen, each row shows its current value, and the detail stays one tap away.

Rejected: grouped cards (`settings-full-alt-grouped-cards.png`). They restyle the live screen and add visual weight for no gain.

Boards: `/workspace/ff-gap-review/mosaic/b5/v4/settings-full.png`, `settings-full-lean-one-list.png`, `settings-full-privacy-subpage.png`; live reference `settings-full-live.png`; rejected `settings-full-alt-grouped-cards.png` (on the box).

### 10. "~" on every estimated crowd (v4)

**Build instruction:** Put **"~"** in front of every estimated crowd on compact surfaces, e.g. **"~55k"**.

What it does today: compact surfaces show estimates with no marker. `crowdShort` (`src/map/crowdPoints.ts:102-120`) adds " est" only when `withEst` is true, and the row figure (`CrowdFigure`, `src/components/EventTags.tsx:68-77`) and map chip label (`src/map/CrowdLayer.tsx:506`) both pass `false`. The selected card prints `crowdThousands(size)` bare (`src/components/ChipCard.tsx:53`). The event page already shows "~" for estimates, but "Up to N" for playoff building estimates (`src/screens/EventScreen.tsx:337`). The "About this estimate" sheet (`EventScreen.tsx:536-560`) has Games, Playoff games, Shows and Counts sections; there's no pop-up section.

Changes:
1. **Compact surfaces** (map chips, list rows, the selected card): prefix **"~"** whenever the highlighted crowd is an estimate. Do it once in `crowdShort` (replace the " est" suffix with a "~" prefix) and in `ChipCard.tsx:53`. Announced and Final figures stay bare.
2. **Event page:** **"~380 Estimated"**, plus an explainer line under it, e.g. **"Sold out · 95% of 400 capacity"**. Replace the "Up to" form at `EventScreen.tsx:337` with "~".
3. **About this estimate sheet:** add a **POP-UPS** section: 80% of capacity, or 95% if sold out or waitlisted. Same rule as [Pop-up sizing](#pop-up-sizing) in item 1.

Why: one short mark, the same everywhere, tells you a number is an estimate without crowding small rows. The event page has room to say how the number was made.

Rejected: an "est." suffix (`estimated-crowds-alt-est-suffix-rows.png`); a separate label word; a different color; "Up to 400".

This closes the open "~" question. It doesn't change the NLCS G3 flag below, which is about which figure is highlighted.

Boards: `/workspace/ff-gap-review/mosaic/b5/v4/estimated-crowds.png`, `estimated-crowds-lean-map-chip.png`, `estimated-crowds-lean-list-row.png`, `estimated-crowds-lean-selected-card.png`, `estimated-crowds-lean-event-crowd.png`, `estimated-crowds-lean-about-estimate.png`; live references `estimated-crowds-live-map.png`, `estimated-crowds-live-event-crowd.png`; rejected `estimated-crowds-alt-est-suffix-rows.png` (on the box).

### On hold (Kylie working with Claude)

- **ON HOLD:** Where crowds with no size show in Explore (beyond the blank rule above).
- Regional events are no longer a placement question; they're undecided (item 2).

### Open flag: "~55,000 Estimated" on NLCS G3

**Build instruction:** no code change. After the game, check that the nightly results pass writes LA's Oct 14 result and the page switches to Announced. Context: `src/data/crowdFigures.ts` and `src/data/results.ts` are unchanged at 635a164.

The live event page shows "~55,000 Estimated" for NLCS G3 (Dodgers vs. Brewers, Dodger Stadium). Checked against Final > Announced > Estimated (D04). **Finding: the code is behaving correctly; no Announced or Final figure exists.**

- The game is Wed Oct 14 at 5:00 PM PT, so it hasn't been played yet (checked Oct 14, 12:30 AM PT). Event `2026-10-14-mlb-849811` in `data/schedule-archive/la/2026-10-13.json` has `crowd: []` and an `expectedDraw` of 54,656 (planning blend), which rounds to ~55,000.
- There is no `data/results/la/2026-10-14.json`, so `withResults` (`src/data/results.ts`) has no box-score attendance to put in the Announced slot.
- Final has no source at all yet: `src/data/crowdFigures.ts` says the field exists but nothing writes it (build notes 3, ⚑4).
- `highlightedCrowd` already picks Final > Announced > Estimated. Once the nightly results pass saves the box score, Announced will take over by itself.
- Worth checking after the game: that the results pass runs for LA on Oct 14 and the page switches to Announced. G1 and G2 in Milwaukee did get box-score attendance (for example 42,516 on Oct 12). No code change made.

### 11. Event types: one controlled list (Oct 14, answers IN03, IN04)

Sources: Mosaic's `research/event-types-table.md` (decisions at the top) and `docs/build-5/research/event-types-and-naming-table.md` (code refs and bugs, checked at main 635a164).

**Today:** there is no controlled type. `event.kind` is game / show / festival / live-broadcast / special, and the type word comes from `eventTypeLabel` (`src/data/personalLog.ts:214-221`). Only five sports get a proper label (`sportLabel`, `personalLog.ts:199-208`); everything else shows the raw key ("boxing", "rodeo", "other"). Every special shows "Special". Ticketmaster sports come from a text match (`sportOf`, `src/data/sources/ticketmasterSource.ts:171-175`), so lucha libre lands as boxing and volleyball as other. The Add form stores Title Case words (`src/data/competitions.ts:16-31`) and calls a concert "Show" (`src/screens/AddEntryScreen.tsx:36`). Nothing in the database limits these values. 85 raw strings in all.

**Change:**
1. Add a type key on every event: `category.type`, lowercase (e.g. `sports.baseball`). 8 categories, 36 types, exactly as in section 2 of `event-types-table.md`: Sports (18: baseball, softball, basketball, football, soccer, hockey, lacrosse, volleyball, tennis, golf, combat, motorsports, rodeo, horse_racing, rugby, cricket, track, other), Music (concert, festival, classical), Arts (theatre, comedy, dance, film, talk, spectacle), Family (circus, ice_show, kids), Fairs & Markets (fair, expo, market), Pop-up (`popup`), Watch party (`watch.broadcast`), Other (`other`).
2. Map every raw key with the table in section 3 of `event-types-table.md`, after lowercasing and trimming. Feeds and the Add form go through the same map. Keep the original string as a subtype where the table says so (boxing / MMA / wrestling under `sports.combat`; union / league / Aussie rules under `sports.rugby`).
3. **Retire "Special" as a type.** A special resolves by its tag; no tag goes to `other`.
4. **Genre stays text.** Music genres map to `music.concert` and the genre is kept as secondary text, normalized to Ticketmaster casing ("hip-hop" → "Hip-Hop/Rap").
5. **Children's Theatre → `family.kids`** (Kids & family), not Theatre.
6. **Undefined / Miscellaneous (about 119 events on Oct 13):** sort by title keywords ("Tribute" → concert, "Comedy" → comedy, "Festival" → festival, and so on). Anything unmatched falls back to `other`.
7. The type label replaces `eventTypeLabel`. "Other sport" is the label for `sports.other`, never the raw "other".
8. Level, division, occasion tier and favorite kinds stay separate fields. Don't fold them into the type.

**Why:** Theatre (51) and Comedy (28) already outnumber Baseball (11) on Oct 13, so they need their own types. "Special" hides the useful tag behind a ticket icon. One list fixes the case drift that quietly changes the audience-overlap score. Families look for kids' shows by audience, not art form. Most Undefined titles name their type, so a keyword pass fixes most of them with no hand work.

**Rejected:**
- A flat list of about 14 types (one per sport, plus Concert, Festival, Stage, Family, Fair, Pop-up, Other), with genre and subtype as text only. Too coarse for theatre and comedy.
- A music icon per genre (19+ icons for one kind is visual noise).
- Keeping "Special" as a type (it is the catch-all that caused the problem).
- Children's Theatre under Arts › Theatre.
- Leaving Undefined events as Other with no keyword pass, or sorting them by hand.

### 12. Type icons (Oct 14, answers IN01, IN02, IN11, IN12, IN13)

Boards: Mosaic's `mosaic/icons/icons-r3.png`, `sheet-r3.png` and `phones-r3/` (map chip, Explore list, date page lineup, timeline, event title, Stubs, Following, search). Custom icon paths: `mosaic/icons/src/icons.cjs`.

**Today:** `src/map/typeIcons.ts` (40 lines) has nine hand-drawn 10px icons in Dodger blue (`#005A9C`, `:7`). They show only on map chips (`src/map/CrowdLayer.tsx:153`). Everything without its own icon gets the ticket.

**Change:**
1. Replace the hand-drawn icons with **Phosphor Icons v2.1.1 (MIT), regular weight**: one line style, link blue. Inline the SVG paths as `typeIcons.ts` does now; don't add an icon font. Keep the MIT notice in the repo.
2. The icon per type is the "Proposed icon" column in `event-types-table.md` section 2. Concert uses Phosphor `music-note`.
3. Add six **custom icons** drawn on the same 256 grid and stroke: Comedy (`x-laugh`, laughing face), Film (`x-movie-camera`), Circus (`x-big-top`, big-top tent), Fair (`x-ferris-wheel`), Lacrosse (`x-lacrosse`) and Rugby (`x-rugby`). Copy the paths from `icons.cjs`. Lacrosse and the movie camera are **first drafts**; ship them, but expect a redraw.
4. **Placement:** the icon sits at the very start of the event title on every surface: map chips, Explore rows, the date page lineup, the Local Competition timeline, the event page title, Stubs, Following and search.
5. **Size: aim for 20pt on every surface.** If 20pt makes a row taller than its live height, step down to the largest size that keeps the row height. Expected results (measured at 390pt wide against live rows): 18pt on Explore rows, the date page lineup, the event title, Following and search; 17pt on the timeline; 16pt on Stubs (baseline offset 3pt); 12pt on map chips. Vertical align −4px (Stubs −3px). **Do not change any row height.**
   - IN11 resolved (Kylie, Oct 14): 20pt is the target, not a rejected option. The form's lean (20pt everywhere) and the measured step-downs no longer conflict: 20pt wherever it fits, the measured sizes where it doesn't.
6. Caveats to check on device: a long one-line title may now wrap because the icon takes width; the Stubs size was measured on a stand-in row, so confirm it on the real Stubs list.

**Why:** Phosphor covers 34 of the 36 types in one free, open style, so nothing is a placeholder. Lacrosse and rugby are real sports on the Add form, and a generic ball reads as soccer. At the start of the title the icon reads as part of the name and keeps the time column clean. 20pt is the target size; where Kylie found it made rows taller, the surface steps down to the largest size that doesn't.

**Rejected:**
- Keeping and extending the hand-drawn set (would take 30+ new drawings).
- Tabler icons (no hockey, lacrosse, circus or Ferris wheel).
- An icon font.
- A generic ball for lacrosse and rugby.
- 20pt forced everywhere even where it makes rows taller, and 16pt everywhere (looked goofy). (20pt itself is the target, step 5.)
- The icon on line 2, or in the time column.
- Swapping any other approved icon (IN13: none).

### 13. Event names: three lengths (Oct 14, answers IN05–IN10, IN14; adjusted Oct 14 by naming review N04, N06, N08, N16, N17, N18, N29)

Source: Mosaic's `research/event-naming-table.md`; current behavior and real examples in `docs/build-5/research/event-types-and-naming-table.md`.

**Today:** `src/lib/eventTitle.ts` has two lengths. `mapTitle` (`:172-185`) is the short one, used on chips, the timeline, "Biggest:" (`src/screens/EventScreen.tsx:258`), Home rows (`src/screens/HomeScreen.tsx:195`) and favorite-page rows (`src/screens/FavoritePage.tsx:403`). `listTitle` (`:193-198`) is the full one, used on Explore rows, the event title (`EventScreen.tsx:200`), Stubs, Compare and Following (`src/screens/FavoritesScreen.tsx:149`). There are no character limits; cutting is CSS ellipsis, so the chip loses the round first ("Golden Knights (Conf Final G7)"). Doubleheaders get identical names. Preseason is stored (`:206, 212`) but only the team page shows it. Finals have no year. No opener field exists.

**Change:**
1. Three lengths:
   - **Chip** (map chip, timeline labels, "Biggest:", Up against): 16 characters of name plus the designation (up to 8), one line.
   - **Short** (Explore and sheet rows, date page lineup, Stubs rows, Following, search, chip card): 32 characters, at most 2 lines.
   - **Full** (event page title, Stub sheet, share text): about 64 characters, wraps, **never cut**.
2. **The designation (G7, DH1, Preseason, All-Star) is never cut first.** Drop order when a name is too long: year → tour, then openers → away team (then city, chip only) → tag (festival weekend, college tag) → nickname shortened to the shortName ("Golden Knights" → "Vegas") → truncate the name as a last resort.
3. **Doubleheaders (kept, N09):** "Game 1" / "Game 2" in short and full names, after the teams ("A's at Angels · Game 1", per N04); "DH1" / "DH2" on chips ("Angels DH1"). The game index is read but dropped today (`src/data/sources/roundLabel.ts:15-16`).
4. **Finals get the year (kept, N07):** "Chiefs vs. Rams · Super Bowl 2027" (teams first, N04; "vs." at the neutral site, N06). Add the year only when the feed gives the season. The year is dropped on chips ("Super Bowl").
5. **Preseason is a title suffix (ADJUSTED Oct 14, N08):** "Nuggets at Clippers · Preseason" (chip "Clippers Preseason"). Not a tag. This replaces the earlier approved prefix ("Preseason · Raiders at Rams"); Kylie switched to the reviewer's version. The designation is still never cut (step 2), so the suffix can't be dropped.
6. **No openers in short rows.** Openers go in the full name only, once there is an opener field.
7. **Neutral sites: designated visitor first, teams before the event name (N17).** `gameName` (`eventTitle.ts:74-77`) puts the first-named side first ("Lakers vs. Warriors" comes out home-first) and puts the event name ahead ("Red River Showdown · Texas vs. Oklahoma", `:76`); the comment at `:66-67` already says visitor first. Fix the code to: "{Visitor} vs. {Home} · {Event name}", or "· Neutral site" when there is no event name ("Texas vs. Oklahoma · Red River Showdown", "Florida vs. Georgia · Neutral site"). Also fix `docs/product/product-decisions.md:38`, which still says titles stay "Home vs. Away"; it should say "{Away} at {Home}", with "{Visitor} vs. {Home}" at a neutral site.
8. **Favorites rows use the short name:** switch `FavoritesScreen.tsx:149` off `listTitle`.

**Parsing bugs to fix with this item** (from the research table, Gaps 5–11):
- **Bracket text dropped:** `sidesOf` (`eventTitle.ts:47-50`) keeps a bracket after the visitor only as an event name, and `gameName` uses it only at neutral sites, so "(Red River Showdown)", "(SD)" and "(neutral site)" vanish. Keep it (as the event name, after the matchup, N17/N18) on every game.
- **East LA Classic:** "East LA Classic (Garfield vs. Roosevelt)" becomes "Roosevelt) at East LA Classic (Garfield" because the vs match (`:36`) runs inside brackets. Don't split on a "vs" inside brackets; treat the outer name as the event name: "Garfield vs. Roosevelt · East LA Classic" (N18).
- **Ticketmaster event names glued to a team:** the feed text "Copa Las Vegas: USA vs Mexico" becomes "Mexico at Copa Las Vegas: USA". Split off text before a colon as the event name and put it after the teams: "USA vs. Mexico · Copa Las Vegas" (N18). When the split is unclear, show the original title.
- **Lost neutral flags:** "Florida vs. Georgia (neutral site)" (`src/data/seed/listings2026.ts:106`) has no `neutralSite` flag, so it reads "Georgia at Florida". Set the flag (the `neutralFootball` helper at `:42` should set it for every game it builds). The archived copy of the Red River game also lost its flag and reads "Oklahoma at Texas"; restore it in the archive.
- **Spring training:** the MLB map feed (`src/data/sources/mlbSource.ts:228-240`, `toEvent` at `:138`) never sets `preseason`; only the team schedule does (`:213`). Set it when `gameType === 'S'` so the "· Preseason" rule applies. (The spring training wording itself is open, below.)
- **World Series doubling:** old seeds with round "World Series" and title "World Series Game 1" read "World Series G1 · World Series Game 1". Strip the round text from the title when it repeats the label.
- **College "FB" always shown:** college football short names already contain "FB", so the chip always shows it, though the docs show the tag only on a clash. Show the squad code on chips only when two chips clash. **Reconciled with N16:** short and full names drop the code for a readable sport label ("Duke at Georgia Tech · Football", "X at UCLA · Women's basketball"); the code (FB / MBB / WBB) stays on chips and wherever space is tight, and on chips still only on a clash ("Georgia Tech FB" only when another Georgia Tech chip that night would match).
- **Lucha libre stored as boxing:** `sportOf` (`ticketmasterSource.ts:171-175`) checks "boxing" text before wrestling words. Map lucha libre to wrestling (`sports.combat`, subtype wrestling), per item 11.

**Why:** chips and rows have fixed widths, so names need real limits, and the designation is what tells games apart. "DH1" fits a chip and doesn't clash with series "G1". Years read instantly; chips have no room and show the date anyway. A suffix in the title still travels into shares and notifications, where tags don't render, and reads team-first like every other title (N08). Short rows are for scanning the headliner. Leagues list neutral-site games visitor first, as the spec does. Favorites rows are narrow.

**Rejected:**
- Two lengths with character limits added (rows need the designation but not the tour).
- Today's CSS ellipsis, or moving the designation to the front ("G7 · Golden Knights" on chips).
- "G1/G2" for doubleheaders (clashes with series games).
- Roman numerals or no year on finals.
- Preseason as a small tag in `.event-tags`.
- Preseason as a prefix ("Preseason · Nuggets at Clippers"; approved earlier, replaced by N08).
- Event name ahead of the matchup at neutral sites ("Red River Showdown · Texas vs. Oklahoma").
- Openers in short rows ("Phoebe Bridgers + Muna").
- Home team first at neutral sites (what the code does now).
- Keeping the full name in Favorites.
- A 140px / 20-character chip; 40 characters on one line for short names.

**Settled by the naming review (item 15):** bowl names (N20), festival weekends and days (N12), watch party names (N01), round wording (N03, N05: "Semifinals", full words on the page), the "· City" ending at neutral sites (N06, N17: venue and city on the page, not in the title), tour-first titles (N10).

**Still open:** spring training wording ("Spring Training" or "Spring", now as a suffix), All-Star and tournament names, pop-up names, comedy and theatre headliners, HockeyTech playoff games with no game number, and a hand seed and feed copy of the same game counting as a clash.

### 14. Commit the naming research docs

**Change:** commit two research docs to `docs/research/topics/` (where `event-naming-at-vs.md` and the other topic research live on main):
1. Kylie's UX writing review, "Fan/Friction naming review" (Oct 14, 29 issues): copy `docs/build-5/research/naming-review-oct14.html`.
2. The table it reviewed: copy `docs/build-5/research/event-types-and-naming-table.html` and `event-types-and-naming-table.md`.

Copies of all three are in this PR under `docs/build-5/research/`. Items 11–13 cover the review's decided points.

3. Kylie's answers to the 30-card form (Oct 14): copy `docs/build-5/research/naming-review-answers-oct14.json`.

**Closed (Kylie, Oct 14; item 15):**
- Cosm-style screenings: **Watch party** (N01).
- **Concert** on the Add form and the event page (N02).
- Full playoff wording: **full words on the event page**, short forms on chips and rows (N03, read from her note).
- **Artist before tour**, middle dot (N10, N28).
- Co-bills: full row title until billing is known (N11). Multi-day: "Day 1 of 4", "Weekend 1 / 2", a date for fairs (N12).

### 15. Naming review answers (Kylie, Oct 14, N01–N30)

Sources: the review `docs/build-5/research/naming-review-oct14.html` (29 issues; "review #" below), the 30-card form, and Kylie's answers, copied to `docs/build-5/research/naming-review-answers-oct14.json`. Refs are at main 635a164 (fetched 2:05 AM PT, unchanged). 26 answers are the lean. Three differ (N03, N08, N29) and one adds a note (N16); those are marked. Separator rule for every example: "vs." with a period (N29), middle dot between parts (N28).

**Where titles are built today:** `listTitle` (`src/lib/eventTitle.ts:193-198`) puts the round first ("NLCS G2 · Dodgers at Brewers") and passes shows and festivals through as the feed's title (`:194`, via `displayName`, `src/config/names.ts:31`). `stakesLabel` (`:56-61`) and `postseasonChip` (`:133-139`) write "{round} G{n}". Rounds come from `src/data/sources/roundLabel.ts` as codes. The type word comes from `eventTypeLabel` (`src/data/personalLog.ts:214-221`).

#### Types (item 11)

**N01 · Cosm is a Watch party (review #05; lean).**
- Today: `eventTypeLabel` returns "Live Broadcast" (`personalLog.ts:216`), other screens say "Live broadcast" (`personalLog.ts:558, 976`; Add form `src/screens/AddEntryScreen.tsx:38`). The seed title is "Ohio State @ Michigan, at Cosm" (`src/data/seed/kylieLog.ts:286`).
- Change: type `watch.broadcast`, label **Watch party** on every screen and the Add form. Title "Ohio State at Michigan · Watch party", venue Cosm on the page. Fix the seed title. Check one Cosm listing first; if it's sold as a screening, raise it before shipping.
- Why: fans go to Cosm to watch together; "broadcast" is the wrong word, and ", at Cosm" reads as a second location.
- Rejected: Live screening; keeping "Live broadcast" with fixed casing.

**N02 · Concert on the Add form (review #04; lean).**
- Today: the Add form says "Show" (`AddEntryScreen.tsx:36`); the event page says "Concert" (`personalLog.ts:218`).
- Change: "Concert" on both.
- Why: one word everywhere; "Show" could be comedy, theatre or an ice show.
- Rejected: "Live music" on both; keeping as is.

**N13 · Volleyball and Esports (review #03; lean).**
- Today: `sportOf` has no volleyball or esports and falls back to "other" (`src/data/sources/ticketmasterSource.ts:171-175`); `sportLabel` shows the raw key (`personalLog.ts:199-208`).
- Change: map volleyball to `sports.volleyball` (already in item 11) and label it Volleyball. Label esports **Esports**, kept as a subtype under `sports.other` so item 11 stays at 36 types (flag: promote it to its own type if esports shows up often). An unknown sport reads **"Sports event"**; this replaces item 11's "Other sport" label.
- Why: name what people are going to, with an honest fallback.
- Rejected: "Volleyball match" / "Esports tournament" / "Sport not specified"; keeping "other".

**N14 · Capitalize raw sport keys (review #02; lean).**
- Today: `sportLabel` capitalizes five sports and returns the raw key for the rest (`personalLog.ts:207`), so "boxing", "rodeo", "motorsports" show lowercase. Lucha libre lands as boxing (`ticketmasterSource.ts:173`).
- Change: one label list for every type (Boxing, Motorsports, Rodeo, Lacrosse, Tennis, Cricket, Wrestling…), used by feeds and the Add form alike. Move the CMLL lucha libre event to Wrestling (item 13 parsing bug).
- Why: small, consistent fix.
- Rejected: a format word ("Boxing event", "Tennis match"); keeping as is.

**N15 · WNBA is Basketball plus a Competition (review #06; lean).**
- Today: feed WNBA games read "Basketball"; manual ones read "Women's basketball" (`personalLog.ts:219`).
- Change: Type Basketball for all; the league goes in a Competition field (from the feed). Men's / Women's only where two games would otherwise read the same. Remove the `sport === 'WNBA'` branch.
- Why: one sport label; the feed already gives the league.
- Rejected: "Men's / Women's basketball" everywhere; keeping as is.

**N24 · Festival classification (review #24; lean).**
- Today: `kindOf` falls back to `special` (`ticketmasterSource.ts:165-166`), so festivals land as Concert or Special by feed. "Sick New World Festival Forth Worth" is the feed's title (seen in `src/data/startForecastIndex.ts:18611`).
- Change: Type Festival for real festivals whatever the feed. Title "Sick New World · Fort Worth"; fix the "Forth" typo in the title cleanup.
- Why: same event, same type.
- Rejected: full festival name with the city in the venue line; keeping as is.

**N30 · Replace "Special" (review #01; lean).**
- Today: every special shows "Special" (`personalLog.ts:217, 558`; Add form "Special event", `AddEntryScreen.tsx:39`); 303 events on Oct 13.
- Change: specific types where known (Theatre, Comedy, Ice show, Film, Talk, Fair…, per item 11's keyword pass). When unsure, the label is **"Event"** (type `other`). Remove "Special event" from the Add form.
- Why: "Special" tells people nothing; this works with item 11's keyword sort and Kids & family.
- Rejected: a smaller list (Live performance, Convention…); keeping "Special".

#### Sports titles (item 13)

**N03 · Full playoff words on the event page (review #11). DIFFERS FROM THE FORM CHOICE.**
- Flag: Kylie picked **C, "Keep as is"**, but wrote "full words on the page though!!". The choice and the note disagree. **This reading follows her note.**
- Today: rounds are codes everywhere: "NLWC", "WS" (`roundLabel.ts:19-27, 36-42`), "Conf Final" (`:113`), "CFP Semi" (`:126`), written as "{round} G{n}" on the page too (`eventTitle.ts:60, 196-197`; event title `src/screens/EventScreen.tsx:200`).
- Change: the event page title spells it out: "Dodgers at Mets · NL Championship Series, Game 3", "World Series, Game 7", "National League Wild Card Series, Game 1", "Conference Final, Game 7", "College Football Playoff Semifinal". Chips and rows keep the short forms ("Mets · NLCS G3" on chips, "Dodgers at Mets · NLCS, Game 3" on rows). Add a full-name map beside `MLB_BY_SERIES` and the ESPN round functions.
- Why: casual fans can't decode NLWC, WS or CFP, and the page has room.
- Rejected: a generic "Playoffs · G7" chip; codes on the page too (the literal form choice; her note overrides it).

**N04 · Teams first (review #10; lean).**
- Today: `listTitle` puts the round first (`eventTitle.ts:197`); so does `scheduleGameTitle` (`:230`).
- Change: "{teams} · {round}, Game {n}": "Dodgers at Braves · NLDS, Game 4". Applies to rows, the page and share text. The team page keeps its own form (N29).
- Why: people scan for the team; it matches artist-first concerts (N10).
- Rejected: round and game on a second line; round first (today).

**N05 · Same words for the same round (review #12; lean).**
- Today: "Semis" (`roundLabel.ts:104`), "1st Round" / "2nd Round" (`:105, 114-115`), "Postseason" fallback (`:173`), plus "Semifinals" from WNBA feeds.
- Change: "Semifinals", "First round", "Second round"; "Playoffs" when the round is unknown (replaces "Postseason"); keep official names (Stanley Cup Final, World Series, Super Bowl). Chips may abbreviate as N03 allows.
- Why: removes drift, keeps real round names.
- Rejected: "Round 1 / Round 2" badges; keeping as is.

**N06 · Super Bowl uses "vs." (review #13; lean).**
- Today: neutral finals with no flag read "Chiefs at Rams" (`eventTitle.ts:78`); round first ("Super Bowl · Chiefs at Rams").
- Change: "Chiefs vs. Rams · Super Bowl 2027" (with N07), venue and city on the page, not in the title. Set the neutral flag on every final at a neutral site.
- Why: "at" implies a home game.
- Rejected: "Super Bowl · Chiefs vs. Rams · [city]"; keeping as is.

**N07 · Year on finals: kept (review #13; conflict, kept approved).** Item 13 step 4 stands: the year shows on full and short names when the feed gives the season ("Chiefs vs. Rams · Super Bowl 2027"), dropped on chips. Rejected: the reviewer's "no year unless verified" (we only use the feed's season, so nothing is guessed).

**N08 · Preseason is a suffix (review #15; conflict). CHANGED FROM THE APPROVED DECISION.**
- Today: preseason shows only on the team page as a label first (`eventTitle.ts:210-213, 222-223`).
- Change: "Nuggets at Clippers · Preseason"; chip "Clippers Preseason". Item 13 step 5 is updated and marked adjusted. Applies to spring training too (item 13 MLB fix).
- Why: Kylie chose the reviewer's version; it matches teams-first (N04). Step 2 still protects the designation from cuts.
- Rejected: the earlier approved prefix "Preseason · Nuggets at Clippers" (the lean).

**N09 · DH1 / DH2: kept (review #16; conflict, kept approved).** Item 13 step 3 stands: "DH1" / "DH2" on chips, "Game 1" / "Game 2" after the teams in rows and on the page. Today the index is dropped (`roundLabel.ts:15-16`). Rejected: "Doubleheader, Game 1" everywhere; DH on chips with spelled-out words on the page.

**N16 · College squad codes (review #07; lean, with a note).**
- Note: "I think codes for chips though / where space is tight".
- Today: `collegeAbbrev` writes (FB) / (MBB) / (WBB) into every name (`eventTitle.ts:10-20, 73`).
- Change: short and full names use a readable sport label after the teams: "Duke at Georgia Tech · Football", "X at UCLA · Women's basketball". Chips, and anywhere else width is tight, keep the code; on chips only on a clash, per item 13 ("Georgia Tech FB").
- Why: plain words where there's room; codes where there isn't.
- Rejected: a separate sport label beside the title; codes everywhere (today).

**N17 · Neutral sites read "vs." (review #08; lean).**
- Today: "Georgia at Florida" (missing flag, `src/data/seed/listings2026.ts:106`), "Oklahoma at Texas" in the archive; when flagged, the event name leads (`eventTitle.ts:76`).
- Change: "Florida vs. Georgia · Neutral site", "Texas vs. Oklahoma · Red River Showdown", visitor first when known (item 13 step 7).
- Rejected: event name first; keeping as is.

**N18 · Event names parsed as teams (review #09; lean).**
- Today: "Roosevelt) at East LA Classic (Garfield" and "Mexico at Copa Las Vegas: USA" (`sidesOf`, `eventTitle.ts:36`).
- Change: rebuild the clear ones ("USA vs. Mexico · Copa Las Vegas", "Garfield vs. Roosevelt · East LA Classic"); show the original title when unsure (item 13 parsing bugs).
- Rejected: event name first; keeping as is.

**N19 · World Series said once (review #14; lean).** Today: "World Series G1 · World Series Game 1" from old seeds. Change: "World Series · Game 1", and "{teams} · World Series, Game 1" once teams are known. Rejected: "World Series — Game 1" with the matchup on its own line; keeping as is.

**N20 · Named games (review #17; lean).** Today: bowl names alone, matchups dropped (`collegeRound`, `roundLabel.ts:124-133` returns no round for bowls). Change: "Georgia vs. Texas · Peach Bowl" once teams are known; bowl name alone until then. Rejected: bowl name first; keeping as is.

#### Concert and event titles

**N10 · Artist before tour (review #18; lean).** Today: feed titles pass through (`eventTitle.ts:194`): "Song Of The Saints Tour with Phil Wickham". Change: "Phil Wickham · Song Of The Saints Tour" when the performer is known and the title has "{tour} with {artist}". Rejected: colon form; keeping as is.

**N11 · Co-bills (review #20; lean).** Today: chip is the first performer (`headliner`, `eventTitle.ts:85-92`), row is the comma list. Change: keep the full row title until billing is known; then "A + B" (equal bill) or "Headliner with Support"; full lineup on the page. Fits item 13's "no openers in short". Rejected: official title first with a Lineup field; keeping as is.

**N12 · Multi-day (review #25; lean).** Today: "New York Comic Con (day 1 of 4)" (`listings2026.ts:23`); fair days share one name. Change: "New York Comic Con · Day 1 of 4", "Weekend 1" / "Weekend 2" for official weekends, a visible date for fairs ("State Fair of Texas · Sat, Oct 17"). No pass labels until pass type is stored. Rejected: date for every daily entry plus "Weekend pass" labels; keeping as is.

**N21 · One styling per artist (review #21; lean).** Today: `displayName` turns all caps into title case (`src/config/names.ts:27-37`) on the chip but the row shows "SLAYER: Reign In Blood…" (`src/data/seed/la20261004.ts:76`). Change: one styling per artist from an artist list, used everywhere ("Slayer · Reign In Blood 40th Anniversary"); protect KATSEYE, $UICIDEBOY$, UB40. Rejected: official all caps everywhere; keeping as is.

**N22 · Same artist twice (review #22; lean).** Today: `mapTitle` adds the full venue on a clash (`eventTitle.ts:175-177`), "Billy Strings · Angel of the Winds Arena". Change: short venue name when the venues differ, start time when the venue is the same ("Billy Strings · 7:00 PM"). The duplicate Dodgers game is a data fix. Rejected: artist only on the chip; keeping as is.

**N23 · ComplexCon (review #23; lean).** Today: "2026 ComplexCon Concert" typed Festival (`la20261004.ts:90`). Change: if it's the concert, "ComplexCon concert", Type Concert, Playboi Carti in the lineup; confirm on the listing first. Rejected: "ComplexCon" as Festival; keeping as is.

**N25 · "Touring" (review #26; lean).** Today: "Waitress (Touring)" from the feed (`eventTitle.ts:194`). Change: "Waitress", with "Touring production" on the page. Rejected: "· Touring production" only on overlap; keeping as is.

**N26 · Production names on chips (review #27; lean).** Today: "Disney On Ice presents Jump In" cut by CSS. Change: drop "presents"; the distinguishing part stays visible as its own label (chip "Disney On Ice", row "Disney On Ice · Jump In"; "G7" protected per item 13 step 2). Rejected: "Disney On Ice: Jump In"; keeping as is.

**N27 · Promoter boilerplate (review #28; lean).** Today: "BVD Boston presents BEND OVA ( 21+ )". Change: "BEND OVA · 21+", promoter on the page. Rejected: "BEND OVA (21+)"; keeping as is.

#### Separators

**N28 · Middle dot between artist and tour (review #19; lean).** Today: colons and hyphens from feeds ("Phoebe Bridgers: The Lost Tour", "LP - All Is Not Lost Tour"). Change: "Phoebe Bridgers · The Lost Tour" in titles we generate; official names untouched. Rejected: colon; keeping as is.

**N29 · "vs." with a period everywhere; @ on team pages (review #29). NOTE OVERRIDES THE CHOICE LABEL.**
- Flag: the choice label reads "vs with no period", but her note says "vs. with a period everywhere; keep @ on team pages". This follows the note.
- Today: `teamRelativeTitle` writes "vs Padres" / "@ Brewers" (`eventTitle.ts:216-221`); `gameName` and `scheduleGameTitle` write "vs." (`:75, 228`).
- Change: "vs." with a period on every surface, including the team page ("vs. Padres", "vs. 49ers · Melbourne"); keep "@ Brewers" on team pages. All examples in these notes use "vs.".
- Rejected: "vs" without a period; spelling out "at" on team pages.
