# Research brief: which cities should Fan/Friction cover next?

Drafted Oct 7, 2026 by Claude Code, for Kylie to run in a research chat. Save the answer in full beside this file as `docs/next-cities-research-answer.md` (a paste in the chat is not a saved source). The answer feeds a proposal; Kylie picks the cities. Do not build from this file alone.

You are an outside reviewer. You do **not** have the app's code. Work from the context below. Be skeptical of convenience: the city that is easiest to add is not automatically the one that teaches the most. Label every number **announced**, **reported** or **estimated**, with a link. Tables beat prose.

## Product context
Fan/Friction is a personal log of live sports and concerts. Each night carries a **friction read**: how hard the city's big events (5,000+ people) fight each other for fans that night (**Crowd fight**), and how much their crowds share the roads and trains at the same hours (**Gridlock**). Weather feeds a third part, **Conditions**.

- **Covered today:** Los Angeles (built by hand), San Diego, Seattle, New York. **Montreal is committed next** (a tester's night). Three of the four are on the West Coast.
- **What "covered" means:** the nightly job pulls the city's schedules (MLB's official feed, ESPN's team schedules, Ticketmaster's free Discovery feed for concerts), weather and results, and past announced attendance per team. One research run builds the city's table of 5,000+ venues (capacity by setup, roof, how people arrive), and another measures the city's **type**: *sprawl* (nearly everyone drives), *hub* (a mix), or *transit* (most arrive by train). Adding a city takes about 1.5–3 hours plus those two research runs. Every team id has to be checked; the venue table is the slow part and grows with the number of 5,000+ rooms.
- **Cities already in the owner's own log, not covered:** Boston, Chicago, Columbus (Ohio Stadium), Phoenix, Sacramento, Tampa.
- **The purpose of a new city is to test the formula, not to reach more people.** A city earns its place by stressing something the covered cities don't, or by being somewhere the owner will actually log nights.
- **The owner is in San Francisco right now** and wants to see its events. She also suspects the coverage over-indexes on the West Coast and is curious about Atlanta, Philadelphia, Chicago, and a Texas city.
- **Free only.** No paid data. Flag anything that would cost money.

## Known weak spots a new city could test
- **Distance:** today any two events in a metro compete for fans as if next door. A spread-out metro with far-flung big rooms (two or three hours apart) exposes this.
- **Transit cities:** Chicago and Boston are assumed *transit* but unmeasured. No covered city is truly transit-led.
- **Heat:** the heat penalty uses an 85°F floor; no per-city normal exists yet. A hot-summer city tests it.
- **Cold and snow:** no covered city has a winter that keeps people home.
- **Shared buildings and two-team towns:** New York has these; no other covered city has two teams in one league.
- **College towns inside a metro:** big college football crowds on the same Saturdays as pro events.
- **Hard access that isn't a hill:** the access rule measures hillsides; New York's hard sites are islands and causeways.

## What to research, per candidate
Candidates at minimum: **San Francisco Bay Area, Atlanta, Philadelphia, Chicago, Dallas–Fort Worth, Houston, Austin, Boston, Phoenix**, plus any city you think beats them (say why).

For each:
1. **Boundary.** What one metro should cover, and whether it should be split. The Bay Area is the hard case: the 49ers play in Santa Clara, the Sharks in San Jose, the Warriors and Giants in San Francisco, and Oakland has lost its MLB, NBA and NFL teams. Dallas–Fort Worth (Arlington between them) is another. Recommend a boundary and say what it puts inside the same metro.
2. **Volume:** the number of pro and major-college home dates per year at 5,000+ (estimated from 2025 schedules), and the number of 5,000+ concert rooms.
3. **Overlap:** roughly how many nights a year have two or more 5,000+ events (estimated; show the method). A city with lots of overlap tests Crowd fight; one with almost none tests little.
4. **City type:** your best guess at sprawl / hub / transit, with a source if one exists. Say how confident you are.
5. **What it would test** from the weak-spot list above.
6. **Research load:** about how many 5,000+ venues the venue table would need, and anything awkward (a team between buildings, a venue opening or closing, a big event with no building such as a parade or a marathon).
7. **Data gaps:** any team or league whose schedule or announced attendance isn't in MLB's or ESPN's free feeds.

## Output
1. **One comparison table:** city · boundary · home dates · concert rooms · overlap nights (estimated) · city type · what it tests · research load · gaps.
2. **A ranked list of the next three after Montreal**, with one line each on why, and one line on what the order would miss.
3. **The Bay Area on its own:** recommended boundary, and whether it is worth covering now on test value alone or mainly because the owner is there. Say plainly which.
4. **Not recommended**, with the reason (e.g. "teaches nothing Seattle doesn't").

Do not invent attendance or overlap figures. An estimate shows its arithmetic. If a figure can't be found, leave it blank and say where you looked.
