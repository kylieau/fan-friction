## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/research/topics/ticket-addon-filter-answer.md`**. Not a PDF, a Word file or a page that can only be saved as a PDF. Use Markdown headings, pipe tables and inline links. If you cannot create a file, reply in plain Markdown in the chat; if it is too long for one message, stop at a clean break, say "continued", and carry on.

# Research brief: telling a real event from a ticket add-on, in every ticket feed

Status: open. Written Oct 14, 2026 (Kylie asked for "a thorough research prompt to help us with the filter"). For any research model.

## What this is for
Fan/Friction is a personal log of live events people attended, with a nightly list of what's on in each city (40 metros across the US, Canada and Mexico today, more later). Listings come from ticket feeds: mainly the **Ticketmaster Discovery API**, with **SeatGeek** being added, and others possible later. Each listing becomes one event on the map and in lists, with a type (Concert, Comedy, Hockey…) and a crowd size.

Ticket feeds also list things that are **not a night out on their own**: parking, venue tours, dinner reservations, pre-game experiences, seat upgrades, "must have a ticket to the game" extras. These show up as fake events. We want a filter rule that drops them in every city and every feed, without dropping real events whose names happen to share a word (a band's "World Tour", a club night, a show called "Lounge Act").

## What the app does today
- Ticketmaster events are read with `classifications[0].segment`, `.genre` and `.subGenre` names only. The segment decides the kind: Music → show, Sports → game, Arts & Theatre or Miscellaneous → other.
- Two name filters (regular expressions on the listing name):
  - **Games and other events:** drop if the name contains parking, tour(s) (except "tour de/of"), no field access, camping, VIP package/upgrade/add-on, meet & greet, upgrade, repas, restaurant, salon des, lounge, hospitality, suite(s); or a premium shape ("Premium:" / "Club:" / "VIP:" prefix, "club seats", "premium package", "parking/lot/fast/early entry/pre-show/pre-game/tailgate pass", "not an event ticket").
  - **Shows (music):** only the add-on shapes (parking, camping, VIP package, meet & greet, hospitality, suite, venue/stadium/arena/behind-the-scenes tour, the premium shapes), because band and tour names use the bare words.
- Nothing reads Ticketmaster's classification `type` / `subType` fields or any "this is an add-on" flag, if one exists.

## What still gets through (one nightly sample, Oct 14, 2026)
Of 97 listings that ended up with the catch-all type "Event", **58 are add-ons**, across 8 cities:

| Pattern (exact listing names) | City | Count |
|---|---|---|
| "Rod Wave BetMGM Dinner Reservation", "Journey BetMGM Dinner Reservation" … | Nashville | 9 |
| "High 5 Tunnel - MUST HAVE TICKET TO GAME", "Post Game Slap Shot - …", "Blue Line Buddies - …", "Primepoint Social Pass - …" | Philadelphia | 16 |
| "San Antonio Spurs vs. Phoenix Suns Post-Game Free Throw", "… Courtside Experience", "… Frost Club Level Access" | San Antonio | 11 |
| "Brooklyn Nets v. Charlotte Hornets Post-Game Free Throw Opportunity", "…: Pre-Game (Watch Warm-Ups)" | New York | 4 |
| "Guided Tours of Scotiabank Arena", "Leafs Fan Access Plus Ups: Fanboni", "Raptors Fan Access Plus Ups - Courtside Access for Team Warmups", "mike. Pre-Show VIP Upsell - DOES NOT INCLUDE A TICKET" | Toronto | 14 |
| "VIP Tailgate: Broncos v Seahawks", "Bullseye Tailgate-Colts v Titans", "Pepsi Tailgate: Tampa Bay Buccaneers Vs. Pittsburgh Steelers" | Denver, Indianapolis, Tampa | 3 |
| "Bottomless Soda&Popcorn Rewind Ultimate 2000s Rave 18+Not Event Ticket" | Detroit | 1 |

The other **39** are real events that arrive with genre "Undefined" or "Miscellaneous" (comedy: "Kill Tony", "Leanne Morgan"; talks: "A Live Conversation with David Arquette"; small concerts: "Paris Paloma", "Knox w/ Emi Grace"; a team: "Oceanside Shock vs. Stockton Thunder"). They must **stay**; a better type for them is a bonus (section 4).

## What I need, in this order

### 1. What the feeds themselves say
- **Ticketmaster Discovery API:** every field that can mark a listing as an add-on, upsell, parking, tour or non-event: `classifications[].type`, `subType`, `primary`, `family`; the `segment`/`genre`/`subGenre` values used for these (e.g. "Undefined", "Miscellaneous", "Upsell", "Parking", "Hospitality"); `ticketing`/`accessibility`/`products` fields; whether an add-on links to a parent event (e.g. a `products` list on the game). Give the field path, the exact values, and a real API example or a documentation link for each. Say which values are reliable across countries (US, Canada, Mexico).
- **SeatGeek API:** its event `type` taxonomy and how parking or add-on listings appear (if they appear at all).
- **AXS, Eventbrite, DICE** (briefly): whether their public data marks add-ons, if public data exists.

### 2. Naming patterns across leagues, teams and venues
The phrases teams, venues and promoters use for add-ons, collected from real listings across leagues (NFL, NBA, NHL, MLB, MLS, NWSL, WNBA, CFL, Liga MX, NCAA) and venue types (arenas, stadiums, amphitheatres, casinos, theatres), in English, French (Québec) and Spanish (Mexico). Group them: "requires a ticket" disclaimers, dinner/food reservations, pre-/post-game experiences, tours, tailgates, club/level access, parking, upsells, merchandise bundles. Give 2–3 real examples per group with a link.

### 3. The traps (real events that look like add-ons)
Real events whose names contain the same words: concert tours, club nights, "experience" shows, dinner theatre, comedy "tours", festivals with camping, a stadium tour that **is** the event (e.g. a ticketed behind-the-scenes day), a "watch party" that is its own ticket. Real examples with links.

### 4. A recommended rule
- A layered rule, most reliable first: feed fields → disclaimer phrases → add-on shapes tied to a parent game ("{Team} vs. {Team} {Add-on}") → name words, each with the examples it catches and the traps it must not catch.
- Whether an add-on whose parent event is also listed (same venue, same date, same teams) should be dropped by matching it to that parent.
- For the 39 real "Event" listings: a rule that types them better (comedy, talk, concert, sport) from the feed's fields or the name, if one exists.
- Anything that should be **kept but hidden** rather than dropped (e.g. a ticketed tour someone might log).

### 5. Output table
Columns: signal (field or phrase), feed, exact value or pattern, catches (examples), must not catch (examples), reliability (high / medium / low), source.

### Self-audit
List every claim on thin evidence, anything from memory rather than a source, and what Kylie should check by hand, with a link for each.

## Rules
- Use sources a person could check (API docs, a real API response, a live listing). Mark anything from memory as such.
- Do not invent field names, values or listings. If a field can't be confirmed, say so.
- Cover every city, not one: examples from at least five metros and all three countries.
- Plain words; tables where a table is clearer.
- Save the answer beside this prompt as `ticket-addon-filter-answer.md` (a second model's answer takes a `-claude` or `-codex` suffix).
