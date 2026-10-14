# Build 5 notes

Three items: concerts that Ticketmaster misses, regional events, and Add to calendar. Each item gives what we do, why, and the options we turned down.

## 1. Concerts Ticketmaster misses

Scope: shows of 5,000 or more people, any genre, that are not on Ticketmaster.

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
- **Nothing to go on:** mark it **"unsized"**. It is shown in the app but not counted toward scores.

Why: stated capacity is the only firm number we usually have, and pop-ups rarely fill completely, so we scale it down unless there is evidence the show sold out.

Rejected:

- **Area ÷ 7 sq ft per person:** a guess, not a sourced figure.
- **Assuming every pop-up sells out:** overstates most shows.
- **My earlier flat 90%:** doesn't separate sold-out shows from the rest.

## 2. Regional events

**Rule:** an event within **60 miles** of the metro's existing center point counts as local. 60 miles is a starting value, not a sourced figure, and can be changed.

**Farther big events** go in a simple **"Regional" list**: name, date and distance only, with no score.

Why: this keeps scores honest (only events whose crowds plausibly affect the metro) while still showing big nearby events.

### Rejected for now

- **Corridor tier:** would need routing, travel-window timing and counting unique attendees, and attendance for most of these events is unknown anyway.
- **CSA boundaries:** make Coachella local to LA and drop Sonoma.
- **DMA boundaries:** drop Palm Springs.
- **City hall as the center point:** we keep the existing metro center.
- **Drive time:** circular, since traffic depends on the events we're measuring.

### Venues newly in range

These need sourced capacities, or they stay unsized:

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

Let the user export an event to their own phone or computer calendar. This is not an in-app calendar.

Feasible with two pieces:

- An **.ics file download**, which works with Apple Calendar, Outlook and most others.
- A **Google Calendar link** that opens a prefilled event.

## Review form answers (Kylie, Oct 14)

Source: her exported city round 2 review form (87 of 87 answered, exported 2026-10-14T07:29:35.776Z UTC = Oct 14, 12:29 AM PT). Leans she left in place count as her decisions. Card context: `/workspace/ff-claims/city-round2-review-form.md` on the box. "My lean" in the option text means the form's suggested option.

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

Changes the answers make to city data (capacities, codes, names, ids). File hints are from a search of this branch; rows marked "not found" belong to round-2 city data that hasn't merged here yet.

- [ ] **N9** Ryan Field 58% concert car share: wire it?: Wire 58% when concerts are listed, marked estimated. File: not found in repo yet (new round-2 city data)
- [ ] **N10** Chicago (Composer, PR #54): Impact Field capacity: Keep 6,300 (reported). File: `src/data/venues.ts`
- [ ] **X2** Old numeric Ticketmaster ids: switch to the new kind?: Swap them all for the new ids in the catch-up lookup pass. File: not found in repo yet (new round-2 city data)
- [ ] **OTT1** TD Place Arena capacity: Store 8,585 as the full bowl. File: `src/data/venues.ts`
- [ ] **OTT2** Ticketmaster id at TD Place (401513): Swap it for the new id in the catch-up pass. File: not found in repo yet (new round-2 city data)
- [ ] **OTT3** City code: OTT. File: `src/config/metros.ts`
- [ ] **IND4** Lawn totals (Everwise, Ruoff, Victory Field): One rule for all: total including lawn. File: not found in repo yet (new round-2 city data)
- [ ] **IND5** City type: Sprawl. File: `src/data/venues.ts`
- [ ] **EDM3** Convention Centre (5,254 movable chairs): Mute the room. File: `src/data/venues.ts`
- [ ] **EDM4** Rogers Place Ticketmaster id (140602): Look up the new id in the catch-up pass. File: not found in repo yet (new round-2 city data)
- [ ] **DC1** City code: DC. File: `src/config/metros.ts`
- [ ] **DC3** Greene Stadium: Store 7,086 as seats, once confirmed. File: `src/data/venues.ts`
- [ ] **DC4** Merriweather Post Pavilion: DC. File: `src/data/venues.ts`
- [ ] **DC5** City type: Hub. File: `src/data/venues.ts`
- [ ] **CLE1** Jacobs Pavilion: One rule for every standing-floor room: seated by default (4,100 here). File: `src/data/venues.ts`
- [ ] **CLE4** Public Hall: Match by tenant: Charge games at 5,100. File: `src/data/venues.ts`
- [ ] **PDX3** Cascades Amphitheater: Store 7,810 seated. File: `src/data/venues.ts`
- [ ] **RDU4** City code: RDU. File: `src/config/metros.ts`
- [ ] **RDU5** Hurricanes/Duke postseason rows: Add them in the next full recalibration. File: not found in repo yet (new round-2 city data)
- [ ] **STL2** Hollywood Casino Amphitheatre: Store 6,805 seated, if the operator confirms. File: `src/data/venues.ts`
- [ ] **DEN1** Empower Field football: Store 76,125. File: `src/data/venues.ts`
- [ ] **DEN5** Colorado Mammoth alias "Mammoth": Drop the bare "Mammoth" alias. File: not found in repo yet (new round-2 city data)

## Approved with Mock Mosaic (Kylie, Oct 13)

### 1. Stub privacy, Venmo-style

Applies to all three stub kinds: **Attending, Watching and Interested**.

- **Settings › Privacy** sets the default for new stubs: **Friends** or **Private**. A helper line under it explains that this is for new stubs. Below that is a **"Change past stubs…"** row.
- **Change past stubs…** opens a bulk sheet: make all past stubs **Private**, or make all past stubs **Friends**. Both directions are offered. (Venmo only lets you go more private; we allow both.)
- **Stub it sheet:** a small pill, "Who sees this [Friends ⌄]", labelled **"Your default"**. Tapping it opens a menu. When you pick something other than your default, the label changes to a gold **"Not your default"**.
- **Event page status line** stays editable before and after the event, for example "Watching · 🔒 Private ⌄" and "Attended · 55k · Friends ⌄".
- **Tags follow the stub's privacy** (T01).

Why: one default set once, a quiet override where you stub, and a way to fix it later from the event page or in bulk.

Rejected: a Public option; big buttons on the sheet; editing privacy only inside the sheet; a segmented row.

Board: `/workspace/ff-gap-review/mosaic/privacy/privacy-r1.png` (on the box, not in the repo).

Caveat for the builder: the Settings screen on the board isn't from a live capture. Match the live app's styles and don't restyle existing components.

### 2. Add to calendar: option B

An **icon button beside "+ Stub it"** opens a chooser sheet with two choices: **Apple / device calendar (.ics file)** or **Google Calendar (prefilled link)**. This updates item 3 above (Add to calendar).

Board: `/workspace/ff-gap-review/mosaic/b5/v2/` (on the box).

### 3. Crowds with no size

Never show the word "unsized" in the app.

- **Event page:** "— Size unknown".
- **Rows and chips:** a bare "—".
- **Tight spaces:** nothing.

This updates the pop-up sizing wording in item 1: "unsized" stays as the internal term in notes and code, but never in UI copy.

### On hold (Kylie working with Claude)

- **ON HOLD:** Regional list placement in Explore.
- **ON HOLD:** Where "lineup" goes in Explore (see N16 for the word itself).
- **ON HOLD:** Where crowds with no size show in Explore.

### Flagged: "~55,000 Estimated" on NLCS G3

The live event page shows "~55,000 Estimated" for NLCS G3 (Dodgers vs. Brewers, Dodger Stadium). Checked against Final > Announced > Estimated (D04). **Finding: the code is behaving correctly; no Announced or Final figure exists.**

- The game is Wed Oct 14 at 5:00 PM PT, so it hasn't been played yet (checked Oct 14, 12:30 AM PT). Event `2026-10-14-mlb-849811` in `data/schedule-archive/la/2026-10-13.json` has `crowd: []` and an `expectedDraw` of 54,656 (planning blend), which rounds to ~55,000.
- There is no `data/results/la/2026-10-14.json`, so `withResults` (`src/data/results.ts`) has no box-score attendance to put in the Announced slot.
- Final has no source at all yet: `src/data/crowdFigures.ts` says the field exists but nothing writes it (build notes 3, ⚑4).
- `highlightedCrowd` already picks Final > Announced > Estimated. Once the nightly results pass saves the box score, Announced will take over by itself.
- Worth checking after the game: that the results pass runs for LA on Oct 14 and the page switches to Announced. G1 and G2 in Milwaukee did get box-score attendance (for example 42,516 on Oct 12). No code change made.
