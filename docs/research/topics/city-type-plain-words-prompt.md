## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/research/topics/city-type-plain-words-answer.md`**. Not a PDF, a Word file or a page that can only be saved as a PDF. Use Markdown headings, pipe tables and inline links. If you cannot create a file, reply in plain Markdown in the chat; if it is too long for one message, stop at a clean break, say "continued", and carry on.

# Research brief: city type in plain words, and the copy for it

Status: open. Written Oct 14, 2026. Kylie placed this in build 5 (review item N1/B1: "explain sprawl/hub/transit in plain words … with names and codes") and asked for a research prompt that includes copy help. For any research model, ideally one strong at UX writing as well as transport facts.

## What this is for
Fan/Friction is a personal log of live events people attended, with a 1–10 "read" for each date in a city, built from three reasons: **crowd fight** (big events competing for the same fans), **gridlock** (crowds hitting the same roads and exits at the same time) and **conditions** (weather). It covers 40 metros in the US, Canada and Mexico, more later.

Each city has an internal **type** that feeds the gridlock reason when a venue has no measured travel data of its own:

| Type (internal) | Meaning (build 4 notes, Oct 12) | What it does in the read today |
|---|---|---|
| sprawl | most fans drive | a venue with no measured figure is assumed 85% by car; a crowd within ~4 miles adds 15% of its load to a neighbour |
| hub | in between: some transit, mostly driving | the same 85% and 15% as sprawl today (the type is kept because the research found a real difference, and a later formula pass may split them) |
| transit | most fans take trains or buses | 40% by car; a near crowd adds 10% |

Venues with a measured or sourced figure use their own (Wrigley Field 42.1% by car, United Center 86.9%, Husky Stadium 37%…), whatever the city type.

Current assignments:
- **sprawl (17):** Los Angeles, San Diego, Atlanta, Bay Area, Dallas–Fort Worth, Detroit, Milwaukee, Tampa Bay, Miami, Columbus, Nashville, Phoenix, Kansas City, Houston, Indianapolis, San Antonio, Raleigh–Durham
- **hub (19):** Seattle, New York, Chicago, Boston, Philadelphia, Pittsburgh, Cleveland, Austin, Sacramento, Las Vegas, Minneapolis–St. Paul, New Orleans, Ottawa–Gatineau, Salt Lake City, Edmonton, Washington DC, Portland, St. Louis, Denver
- **transit (4):** Montreal, Vancouver, Mexico City, Toronto

The words "sprawl", "hub" and "transit" never appear in the app today, and they are jargon: a person reading "Chicago is a hub" would not know it means "in between". Earlier research read "hub" as transit-heavy, the opposite of what we mean. Each city already has a display name and a short code ("Los Angeles", "LA"; "Milwaukee", "MIL").

## Where it would show (mock: `city-type-plain-words-mock.png`, beside this prompt)
The lean is **one line in the map key** (the "?" on the Explore map), right under "The date's read, 1–10, from three reasons: crowd fight, gridlock, conditions." The line names the city on screen and says how its fans get to big events, e.g. the placeholder "**Los Angeles:** most fans drive, so big crowds share the freeways." Other places it could also appear, if the answer argues for them: the "How estimates work" sheet on an event page, the city list in Settings, or the Compare screen's Gridlock row.

## House copy rules (Kylie, Oct 5 and Oct 9, 2026)
- Users are not dumb. They use Letterboxd, Strava and Flighty daily. Say less; no reassurance, no "this is how…", no hint text.
- One line, about 70 characters or fewer at phone width, so it fits the map key without wrapping more than twice.
- "Night" only for a city-date after 5 pm; otherwise events, dates, days.
- No traffic-app language: no "jam", no live-traffic claims. Gridlock here is an estimate from schedules, never measured traffic.
- Plain words a fan would use, consistent across all 40 cities, and true for the city it names.

## What I need, in this order

### 1. Plain names for the three types
Three short names a fan would understand at a glance (e.g. "Drive city", "Mixed", "Transit city"), plus two alternative sets, with the reason for the lean. Say whether the type should be **named** at all on screen or only **described** ("most fans drive").

### 2. Copy templates
- One template line per type, with a slot for the city name and, if useful, one city-specific detail (a road, a rail line). Show each template filled for three real cities.
- Whether a city-specific detail is worth it (it reads better, but every new city then needs its own line). If yes, give the detail for **every one of the 40 cities**, each with a source; if a city has no clear detail, say so and fall back to the template.
- French (Montreal, Ottawa–Gatineau) and Spanish (Mexico City) versions, in case the app is localised later.

### 3. Fact check of the current assignments, in plain words
For each of the 40 cities, one plain sentence on how fans get to big events, with a source (mode-split survey, transit agency event ridership, stadium study). Flag any city whose current type the sentence contradicts, especially the hub vs. transit line (Chicago, New York, Boston, Washington DC, Toronto, Montreal) and the sprawl vs. hub line (Austin, Denver, Las Vegas, Sacramento, Portland). Don't re-research figures already measured; say where the type rests on thin evidence.

### 4. Placement
Agree or disagree with the map key line, and say which of the other places (How estimates work, Settings › cities, Compare) should carry the same words, if any. One reason each.

### 5. Output table
Columns: city, current type, plain sentence (≤70 characters), city-specific detail (or "template"), source, confidence, change the type? (yes / no / check).

### Self-audit
List every claim on thin evidence, anything from memory rather than a source, and what Kylie should check by hand, with a link for each.

## Rules
- Do not invent figures, URLs or survey results. Leave a cell blank with a note when you can't verify it.
- Mark every figure as measured, announced or estimated.
- Plain words; tables where a table is clearer.
- Save the answer beside this prompt as `city-type-plain-words-answer.md` (a second model's answer takes a `-claude` or `-codex` suffix).
