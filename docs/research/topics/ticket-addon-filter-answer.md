# Answer: telling a real event from a ticket add-on, in every ticket feed

Status: answer to `ticket-addon-filter` brief. Written Oct 14, 2026 by Claude. If another model's answer already sits beside the prompt, rename this file to `ticket-addon-filter-answer-claude.md`.

Evidence labels used below: **[doc]** official documentation, **[live]** a live listing page (search snapshot, Oct 2026), **[3p]** third-party code or mirror, **[memory]** from my own knowledge, not checked against a source this session, **[tested]** checked with the test script described in section 4.6.

---

## TL;DR

1. **No single Ticketmaster field says "add-on".** The closest documented hooks are the parent event's `products[]` list (id, name, url, type) and the top-level `productType` string [doc]. A third-party client says product types include `Parking`, `Campsite` and `Upsell`, and that each product may also come back as an event of its own [3p]. Ticketmaster's own website groups these under the heading "Add-Ons" beneath the parent event [live]. Confirm with two API calls (section 6) before relying on it.
2. **`classifications[].type` / `subType` are useless as an add-on flag.** Ticketmaster's own feed example shows a real film screening and a real comedy show with type "Undefined" and subType "Undefined" [doc]. Genre "Undefined" is shared by add-ons and by your 39 real events.
3. **Add-ons usually have their own *attraction*.** "Leafs Fan Access Plus Ups", "Raptors Fan Access Plus Ups", "BetMGM Dinner Reservation", "Estaciona-T - Estacionamiento - Mexico", "Stationnement - Centre Bell - Parking", "Restaurant Canti" are all attractions in their own right [live]. Checking attraction names is cheap and strong.
4. **Disclaimer phrases should apply to every segment, including Music.** That single change catches the Toronto "Pre-Show VIP Upsell", the Detroit "Not Event Ticket" listing, and every Mexico City concert add-on ("Boleto de evento no incluido"), which today's Music filter misses.
5. **Parent matching works and is safe if anchored.** Drop a listing whose name is another same-venue, same-date listing's name plus add-on words. Watch parties survive because their parent game is in another city.
6. **Four bugs in today's regexes** explain part of the 58 leaks (section 4.1).

A test of the proposed rule against 33 real add-on names and 24 real or plausible look-alikes gave 0 misses and 0 false drops [tested] — but the segment assigned to each test name is my assumption, so treat that as a smoke test, not proof.

---

## 1. What the feeds themselves say

### 1.1 Ticketmaster Discovery API (v2) and Discovery Feed 2.0

Sources: [Discovery API v2 docs](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/), [Discovery Feed 2.0 docs](https://developer.ticketmaster.com/products-and-docs/apis/discovery-feed/), [Go client `gitlab.com/pthllc/ticketmaster`](https://pkg.go.dev/gitlab.com/pthllc/ticketmaster) (third-party, published Jul 2026).

| Field path | Exact values seen | What it tells us | Evidence | Reliability |
|---|---|---|---|---|
| `products[]` → `{id, name, url, type}` on an event | Documented as "Related products informations". Product `type` values `Parking`, `Campsite`, `Upsell` per a third-party client comment | The parent event lists its add-ons. The same client says each product is itself ticketed and may also be returned as an event | [doc] for the field; [3p] for values | **High if confirmed**, currently unverified |
| `productType` (top-level string on event) | Documented only as "Product type"; values not documented | Might be `Event` vs. something else on add-ons. Unknown | [doc] field only | Unknown, check |
| `classifications[].type.name` / `.subType.name` | Docs describe type as "a kind or group of people" with examples Donation, Group, Individual, Merchandise, Event Style. Real events in TM's own feed example carry type `Undefined` (id `KZAyXgnZfZ7v7nI`) and subType `Undefined` (id `KZFzBErXgnZfZ7v7lJ`) | Not an add-on flag. `Merchandise` and `Donation` types could flag merch bundles and donations, if they appear on events | [doc] | Low for add-ons |
| `classifications[].segment.name` | `Music` (`KZFzniwnSyZfZ7v7nJ`), `Sports` (`…nE`), `Arts & Theatre` (`…na`), `Film` (`…nn`), `Miscellaneous` (`KZFzniwnSyZfZ7v7n1`), plus `Undefined` | Add-ons land in Undefined/Miscellaneous, but so do many real events | [doc] for the four main IDs; Miscellaneous ID from a [course handout](https://www.scribd.com/document/1000595446/CSCI571-HW2-Description) and an [Apify sample](https://apify.com/scraptivo/ticketmaster-scraper) | Low alone |
| `classifications[].genre.name` | `Undefined` on "Leafs Fan Access Plus Ups" listings vs. `Hockey` on the game, in a mirror site | Useful only as a booster (widen name rules when genre is Undefined) | [3p] [tour.guru mirror](https://tour.guru/venue/KovZpZAFFE1A) | Low/medium |
| `classifications[].primary`, `.family` | booleans | No add-on meaning | [doc] | — |
| `_embedded.attractions[].name` / `.id` | e.g. "Leafs Fan Access Plus Ups" (artist 3972313), "Raptors Fan Access Plus Ups" (4036149), "BetMGM Dinner Reservation" (`K8vZ917oKI0`), "Estaciona-T - Estacionamiento - Mexico" (3370999) | Add-ons usually have a dedicated attraction whose name says what it is | [live] (links in section 2) | **High** for parking; medium for others |
| `dates.start` / `dates.end` / `dates.spanMultipleDays` | Season packages span months, e.g. "GW Basketball Season Tickets" Nov 3 → Mar 4 | Flags season tickets and multi-day passes, which are not one night out | [3p] [Apify sample output](https://apify.com/scraptivo/ticketmaster-scraper) | Medium |
| `info`, `pleaseNote` (free text) | Not checked | Add-ons may repeat "game ticket required" here | — | Unknown, check |
| `accessibility.info`, `ticketing.safeTix`, `ticketing.allInclusivePricing` | Accessible-seating text; SafeTix and all-in pricing flags | No add-on meaning | [doc] / [3p] | — |
| `test` (boolean), query `includeTest` (default `no`) | — | Test entities are already excluded by default | [doc] | — |
| Query `classificationName` / `classificationId` with a leading `-` | Negative filters, e.g. `classificationName=-Parking` | Lets you exclude a classification server-side, once you know which one add-ons carry. The docs warn it may slow queries | [doc] | High mechanism, values unknown |
| Discovery Feed 2.0: `classificationType`, `classificationSubType`, `transactable`, per-attraction classifications | Same Undefined values as above | Same as API; feed covers US, CA and MX | [doc] | — |

**Does an add-on link to its parent?** Two pieces of evidence say yes. Ticketmaster.ca's Bell Centre page lists "RUSH: Fifty Something" with an "Add-Ons → Parking → Centre Bell - Stationnement - Rush" sub-block, and the same for other concerts ([Bell Centre venue page, p. 6](https://www.ticketmaster.ca/centre-bell-tickets-montreal/venue/401966?page=6)) [live]. Ticketmaster's help centre tells fans to find parking under the venue page's "Events & Add-Ons" tab ([help article](https://help.ticketmaster.com/hc/en-us/articles/30203989908113)) [doc]. Venue pages are headed "All Events and Add-Ons" in the US, Canada and Mexico ([Scotiabank Arena](https://www.ticketmaster.com/scotiabank-arena-tickets-toronto/venue/131157), [Estadio GNP Seguros](https://www.ticketmaster.com/estadio-gnp-seguros-tickets-ciudad-de-mexico/venue/163903)) [live]. The API docs confirm `products[]` exists on events. What I could **not** confirm: that `products[].id` equals the add-on's own event `id`, and which `type` strings come back. See section 6, check 1.

**Reliable across US, Canada, Mexico?** The schema is the same everywhere (the API covers all three countries per the docs). Names are localised: French in Québec, Spanish in Mexico. Classification names are returned per `locale` (default `en`); I did not confirm whether `locale=fr-ca` translates segment/genre names, so compare by **classification ID**, not name.

Two loose ends worth a quick look:
- Ticketmaster Mexico's website has a browse category "Estacionamiento" (`catid-103`) under "Especiales" (`rid-10005`) ([browse page](https://www.ticketmaster.com.mx/browse/estacionamiento-catid-103/especiales-rid-10005/todo-mexico-dma-801)) [live]. This is a website category; it may map to a Discovery classification. Unverified.
- A ticketmaster.ca "discover concerts" page filtered by `classificationId=KnvZfZ7v7ll` returned "Leafs Fan Access Plus Ups" listings ([page](https://www.ticketmaster.ca/discover/concerts?classificationId=KnvZfZ7v7ll)) [live]. I could not confirm what `KnvZfZ7v7ll` names; my guess is the "Undefined" genre. Look it up with `/discovery/v2/classifications/genres/KnvZfZ7v7ll`.

### 1.2 SeatGeek Platform API

- **Event fields:** `type` (string) and `taxonomies[]` (`id`, `name`, `parent_id`, plus `slug`, `display_name`, `seo_event_type`, `rank` in newer responses) [3p] [Go client](https://pkg.go.dev/gitlab.com/pthllc/seatgeek). Also `performers[]`, `venue`, `is_open`, `conditional`, `contingent`, `visible_until_utc`; I found no documentation of what `conditional`/`contingent` mean.
- **Taxonomy tree:** top-level parents are sports `1000000`, concert `2000000`, theater `3000000`, with children such as `mlb` (`1010100`) and `music_festival` (`2010000`) [3p] [seat_geek gem README](https://rubydoc.info/gems/seat_geek/0.14.2/file/README.md). This is a cleaner typing source than Ticketmaster's "Undefined".
- **Add-ons:** the same Go client has an option `WithAddonsVisible` documented as "whether to include addon events, such as parking" [3p]. That implies SeatGeek models parking as separate **addon events** and lets you include or exclude them per request. I could not read the source line to get the exact query-string name (the file is at [options.go#L384](https://gitlab.com/pthllc/seatgeek/-/blob/e05f09cd168b/options.go#L384)). SeatGeek's website also has a "Parking" tab on performer pages ([example](https://seatgeek.com/seatgeek-implementations-tickets)) [live].
- **Action:** when you add SeatGeek, request with add-ons hidden (once you know the parameter) and still run the name layers, since teams name the same products the same way.

### 1.3 AXS, Eventbrite, DICE (brief)

- **Eventbrite:** add-ons are not separate events. They are ticket classes inside the parent event, and a ticket class has `category` = `admission`, `add_on` or `donation` ([API reference mirror](https://www.withone.ai/knowledge/eventbrite/conn_mod_def%3A%3AGNxOWV4oXb0%3A%3Aa8ikf-5YSem4vsLtpmtq3g)) [3p]. Eventbrite's help page describes add-ons as merch, VIP extras and other non-ticket items ([help](https://www.eventbrite.com/help/en-us/articles/624500/[slug]/)) [doc]. So: if you ever ingest Eventbrite, skip ticket classes with `category=add_on`; event-level filtering is unnecessary. Eventbrite removed its public event *search* endpoint some years ago, so you can only read events you are given IDs for [memory].
- **AXS:** no public discovery API that I know of; access is through partner agreements [memory]. Nothing to filter on until you have one.
- **DICE:** no open public event API that I know of; partner/affiliate access only [memory].

---

## 2. Naming patterns across leagues, teams and venues

Grouped by what the product is. Every example below is a real listing name unless marked. City in brackets.

| Group | Patterns (EN / FR / ES) | Real examples | Source |
|---|---|---|---|
| **"Requires a ticket" disclaimers** | EN: `MUST HAVE TICKET TO GAME`, `DOES NOT INCLUDE A TICKET`, `Not Event Ticket`; ES: `(Boleto de evento no incluido)`, `(Boleto evento no incluido)`, `(Boleto de Evento No Incluido)`; FR: none found in a listing name | "Primepoint Social Pass - MUST HAVE TICKET TO GAME", "Flyers Pregame Tours - MUST HAVE TICKET TO GAME" (Philadelphia); "Estacionamiento Iron Maiden (Boleto de evento no incluido)" (Mexico City); "Estacionamiento Rod Stewart (Boleto de evento no incluido)" (Monterrey) | [Xfinity Mobile Arena](https://www.ticketmaster.com/xfinity-mobile-arena-tickets-philadelphia/venue/393379); [Estaciona-T attraction](https://www.ticketmaster.com.mx/estaciona-t-estacionamiento-mexico-boletos/artist/3370999); [TM MX search](https://www.ticketmaster.com.mx/search?q=estaciona) |
| **Dinner / food** | `{Artist or game} BetMGM Dinner Reservation`; FR `Repas Restaurant {name} - {Artist}`; `Bottomless Soda&Popcorn` | "Weezer BetMGM Dinner Reservation", "TENNESSEE v NC STATE & GA TECH v MURRAY ST BetMGM Dinner Reservation" (Nashville, college hoops); "Centre Bell - Repas Restaurant Canti - Olivia Dean" (Montréal) | [Live Nation, BetMGM Dinner Reservation](https://www.livenation.com/event/G5viZ_3lrQNNK/monster-jam-betmgm-dinner-reservation); [Bell Centre p. 6](https://www.ticketmaster.ca/centre-bell-tickets-montreal/venue/401966?page=6) |
| **Pre-/post-game experiences** | `Post-Game {thing}`, `Pre-Game ({thing})`, `{Team} Fan Access Plus Ups: {thing}`, `Courtside Access`, `On-Ice Flag Bearer`, `Fanboni`, `Bench Access`, `Penalty Box Experience`, `Starting Lineup Sheet`, `High 5 Tunnel` | "Leafs Fan Access Plus Ups: Post-Game Bench Access", "…: Penalty Box Experience - Warm-Up", "…: On-Ice Flag Bearer" (Toronto, NHL); "Raptors Fan Access Plus Ups: Courtside Access Warmup - Play-In Hm Gm 2" (Toronto, NBA); "Post Game Slap Shot - MUST HAVE TICKET TO GAME" (Philadelphia) | [Leafs Fan Access Plus Ups](https://www.ticketmaster.ca/leafs-fan-access-plus-ups-tickets/artist/3972313); [Raptors Fan Access Plus Ups](https://www.ticketmaster.ca/raptors-fan-access-plus-ups-tickets/artist/4036149); [Xfinity Mobile Arena](https://www.ticketmaster.com/xfinity-mobile-arena-tickets-philadelphia/venue/393379) |
| **Same products on team sites** (names to expect; not confirmed as TM listings) | `Pregame Field Pass`, `Pregame Workout Experience`, `Pregame Tunnel Club`, `Pregame 12 Flag Raising` | MLB Mariners, MLB Reds, NFL Seahawks; each says a game ticket is required separately | [Mariners](https://www.mlb.com/mariners/tickets/pre-game-field-pass); [Reds](https://www.mlb.com/reds/hall-of-fame/visit/bp-experience); [Seahawks](https://www.seahawks.com/game-day/experiences/mobile-view) |
| **Tours** | EN `Pregame Tours`, `Guided Tours of {Venue}`; FR `Visite d'avant match`, `Visites Guidées {Venue}` | "Flyers Pregame Tours - MUST HAVE TICKET TO GAME" (Philadelphia); "Montreal Canadiens Visite d'avant match / VIP pregame Tour", "Visites Guidées Centre Bell - Bell Centre" (Montréal); "Guided Tours of Scotiabank Arena" (Toronto, from brief) | [Xfinity Mobile Arena](https://www.ticketmaster.com/xfinity-mobile-arena-tickets-philadelphia/venue/393379); [Bell Centre FR](https://www.ticketmaster.ca/Centre-Bell-Centre-tickets-Montreal/venue/401966?lang=fr-ca); Twins pregame tours need a game ticket too ([MLB Twins](https://www.mlb.com/twins/ballpark/tours/pre-game)) |
| **Tailgates** | `{Sponsor} Tailgate: {Team} v {Team}`, `VIP Tailgate:` | "VIP Tailgate: Broncos v Seahawks", "Bullseye Tailgate-Colts v Titans", "Pepsi Tailgate: Tampa Bay Buccaneers Vs. Pittsburgh Steelers" (NFL, from brief) | Brief sample; not re-checked |
| **Club / level access, lounges** | `{Venue sponsor} Club Level Access`, `Social Pass`, ES `{Artist} Heineken Garden Lounge`, `{Artist} ESCALA` | "San Antonio Spurs vs. Phoenix Suns Frost Club Level Access" (brief); "Karol G Heineken Garden Lounge (Boleto de Evento no Incluido)", "Karol G ESCALA (Boleto de Evento no Incluido)" (Mexico City); "NBA EXP Lounge" at the NBA Mexico City Game, sold without admission | [Estadio GNP Seguros](https://www.ticketmaster.com/estadio-gnp-seguros-tickets-ciudad-de-mexico/venue/163903); [NBA Experiences](https://nbaexperiences.com/packages/149981/next) |
| **Parking** | EN `Parking`, `Offsite Parking at {Venue}`; FR `Stationnement`, `{Venue} - Stationnement - {Artist}`, `Stationnement – {Team} - Parking`; ES `Estacionamiento {Artist}`, `{Artist} Estacionamiento`, typo `Estacionaiento`, lot codes `ECO-A`, `General` | "Centre Bell - Stationnement - Nicki Minaj", "Centre Bell - Stationnement PWHL" (Montréal, PWHL); "Estacionamiento ECO-A Maroon 5 (Boleto evento no incluido)" (Mexico City, Estadio Alfredo Harp Helú); "Ca7riel & Paco Amoroso Estacionaiento (Boleto de Evento No Incluido)"; venue-level "Estacionamiento Estadio Azteca", "Estacionamiento estadio Akron" (Liga MX stadiums); "New York Yankees Parking", "Offsite Parking at Yankee Stadium" (MLB, 2017-era example) | [Bell Centre FR](https://www.ticketmaster.ca/Centre-Bell-Centre-tickets-Montreal/venue/401966?lang=fr-ca); [TM MX parking browse](https://www.ticketmaster.com.mx/browse/estacionamiento-catid-103/especiales-rid-10005/ciudad-de-mexico-y-area-metropolitana-dma-802); [TM MX search "parking"](https://www.ticketmaster.com.mx/search?q=parking&page=1); [TM MX search p. 4](https://www.ticketmaster.com.mx/search?q=estaciona&page=4); [ticketpy docs](https://pypi.org/project/ticketpy) |
| **Upsells / fast entry** | `Pre-Show VIP Upsell`, ES `Fastlane GRAL B`, `Pit Pass: Preshow Pit Party` | "mike. Pre-Show VIP Upsell - DOES NOT INCLUDE A TICKET" (Toronto, brief); "Bruno Mars Fastlane GRAL B (Boleto de Evento no Incluido)" (Mexico City); "Monster Jam Pit Pass: Preshow Pit Party From 10:30am-12:00pm" (Nashville) | [Estadio GNP Seguros](https://www.ticketmaster.com/estadio-gnp-seguros-tickets-ciudad-de-mexico/venue/163903); [Live Nation Bridgestone listing](https://www.livenation.com/event/G5viZ_3lrQNNK/monster-jam-betmgm-dinner-reservation) |
| **Merchandise bundles** | none found as a listing name | — | Gap. Ticketmaster's classification type list includes "Merchandise" [doc]; check if any event carries it |
| **Season / multi-day packages** (not add-ons, but not one night out) | `Season Tickets`, `Season Pass`, `Season Film Pass`, `Multiday Ticket`, `{year}-{year} Season` | "GW Basketball Season Tickets" (Washington), "Marshall Artist Series: Season Film Pass" (Huntington WV), "ChangeMaker Series - Multiday Ticket" (Charlotte), "Iowa Raptors FC 2025 - 2026 Season Tickets" | [Apify sample output](https://apify.com/scraptivo/ticketmaster-scraper) |

**Coverage achieved:** metros Philadelphia, Toronto, Montréal, Mexico City, Monterrey, Nashville, San Antonio, New York, Denver, Indianapolis, Tampa, Detroit; all three countries; leagues NHL, NBA, NFL, MLB, NCAA, PWHL, and Liga MX stadium parking. **Not found in listings:** MLS, NWSL, WNBA, CFL, and any French-language "ticket not included" disclaimer. These are gaps, not evidence of absence.

---

## 3. The traps (real events that look like add-ons)

| Real listing | Looks like an add-on because | Why it is real | Source |
|---|---|---|---|
| "Experience Hendrix" (tour) | "experience", "tour" | Multi-artist concert tour sold through Ticketmaster | [Dickies Arena](https://dickiesarena.com/event/2024-10-11-experience-hendrix-wra) |
| "Club 90s: 2000's Night", "Club 90s - OFF CAMPUS NIGHT" | Starts with "Club", has a colon; "Campus" near "camping" | Touring club night, its own ticket | [TickPick](https://www.tickpick.com/concerts/club-90s-2000s-night-tickets/); [TicketSmarter](https://www.ticketsmarter.com/e/club-90s-off-campus-night-tickets-buffalo-7-17-2026-town-ballroom/3423242) |
| "Nate Bargatze: Big Dumb Eyes World Tour" | "tour" on a non-music listing | Comedy tour | [Dickies Arena listing](https://dickiesarena.com/event/2024-10-11-experience-hendrix-wra) |
| "Leanne Morgan" (real) next to "Leanne Morgan BetMGM Dinner Reservation" (add-on) | Same artist name | The bare name is the parent show; only the suffixed one is an add-on | [Live Nation list](https://www.livenation.com/event/G5viZ_KNZOeXC/lizzy-mcalpine-betmgm-dinner-reservation) |
| "Monster Jam" (real) next to "Monster Jam Pit Pass: Preshow Pit Party" | "Pass", "Pre-show" | Same parent/child pattern | same |
| Cavaliers "Eastern Conference Finals Game 2 Watch Party" at Rocket Arena ($5); Hurricanes away-game watch parties at Lenovo Center ($10) | Team names, "vs.", "Game" | Standalone ticket; the actual game is in another city, so there is no same-venue parent | [Rocket Arena](https://www.rocketarena.com/events/detail/cavaliers-vs-knicks-eastern-conference-finals-watch-party-cleveland-oh-05-21-2026); [Hurricanes](https://www.nhl.com/de/hurricanes/fans/watch-parties) |
| "Guided Tours of Scotiabank Arena", "Visites Guidées Centre Bell - Bell Centre" | "Tour", sits among game add-ons | Does not need a game ticket; a person could go and log it. Contrast "Flyers Pregame Tours - MUST HAVE TICKET TO GAME", which does | Brief; [Bell Centre FR](https://www.ticketmaster.ca/Centre-Bell-Centre-tickets-Montreal/venue/401966?lang=fr-ca) |
| "Oceanside Shock vs. Stockton Thunder" | Genre "Undefined", sport shape | A real game, just poorly classified | Brief |
| "RUSH: Fifty Something" | Has an "Add-Ons" block on the page | It is the parent; its parking is the add-on | [Bell Centre p. 6](https://www.ticketmaster.ca/centre-bell-tickets-montreal/venue/401966?page=6) |
| Season packages ("GW Basketball Season Tickets") | Not an add-on but not one night | Hide, don't type as an event | [Apify sample](https://apify.com/scraptivo/ticketmaster-scraper) |
| Dinner theatre (e.g. Medieval Times "Dinner & Tournament") | "Dinner" | The dinner *is* the show | [memory] not checked this session |
| "…Nutcracker Suite" ballets, "Alice's Restaurant" concerts, "Tunnel of Love" tributes, the "Tailgate N' Tallboys" festival | "suite", "restaurant", "tunnel", "tailgate" | Real shows whose titles share add-on words. **Today's filter drops "suite(s)" on all non-music kinds, so a Nutcracker Suite listed under Arts & Theatre would be dropped** | [memory] titles not re-checked |

---

## 4. Recommended rule

### 4.1 Bugs in today's regexes (explain part of the 58 leaks)

1. **The "tour de/of" exception lets venue tours through.** "Guided Tours of Scotiabank Arena" matches "tours of", so it is kept. Keep the exception for "Tour de …" only, and treat "tour(s) of {venue word}" as an add-on.
2. **"not an event ticket" misses "Not Event Ticket"** (Detroit). Make the article optional: `not (an? )?event ticket`.
3. **The Music filter never sees disclaimers or Spanish/French words.** Every Mexico City concert add-on ("Heineken Garden Lounge", "ESCALA", "Fastlane GRAL B", "Estacionamiento …") and "Pre-Show VIP Upsell - DOES NOT INCLUDE A TICKET" sit in Music or similar and pass. Disclaimers must run on every segment.
4. **Shapes are too narrow:** "pre-game pass" misses "Pre-Game (Watch Warm-Ups)"; "tailgate pass" misses "VIP Tailgate: Broncos v Seahawks"; "VIP:" misses "VIP Tailgate:". And in the other direction, bare "suite(s)" and "restaurant" on Arts & Theatre risk real shows.

### 4.2 The layered rule (most reliable first)

Each listing gets one of three outcomes: **Drop**, **Hide** (stored, searchable for logging, not on the nightly map), **Keep**.

| # | Layer | Outcome | Catches | Must not catch |
|---|---|---|---|---|
| 0 | **Keep-list** first: `watch party`, `fan fest` | Keep | Cavs/Hurricanes watch parties | — |
| 1a | **Parent's `products[]`**: build a set of all `products[].id` (and product URLs) across tonight's pull. A listing whose `id` or `url` is in the set is an add-on | Drop | Any add-on Ticketmaster has linked (parking, upsells, camping) | Nothing, if ids match. **Unverified**: see section 6 |
| 1b | **Attraction name** (`_embedded.attractions[].name`) matches the add-on vocabulary (parking/stationnement/estacionamiento, dinner reservation, restaurant, fan access, plus ups, upsell…) | Drop | "Leafs Fan Access Plus Ups: Fanboni", "Rod Wave BetMGM Dinner Reservation", "Centre Bell - Stationnement - Rush", "Centre Bell - Repas Restaurant Canti - Olivia Dean" | A band named after a word in the list; keep the attraction list short and product-like |
| 1c | **Season/package**: `dates.end − dates.start > 3 days` with a name containing `season`, `pass`, `multi-?day`, `package` | Hide | "GW Basketball Season Tickets", "Season Film Pass" | Multi-day festivals (they also span days, but lack "season"; keep festivals) |
| 2 | **Disclaimer phrase**, any segment, EN/FR/ES | Drop | All Philadelphia "MUST HAVE TICKET TO GAME" items, Toronto upsell, Detroit popcorn, every "(Boleto de evento no incluido)" | None found; these phrases only appear on add-ons |
| 3 | **Parent-anchored shape**: another listing at the same venue (or within ~1 km for tailgate lots) on the same local date has a name that is a proper substring of this one, and the leftover words hit the add-on vocabulary | Drop | "San Antonio Spurs vs. Phoenix Suns Post-Game Free Throw / Courtside Experience / Frost Club Level Access", "Journey BetMGM Dinner Reservation", "Monster Jam Pit Pass: …" | "Leanne Morgan (Late Show)" (leftover words aren't add-on words); watch parties (no same-venue parent) |
| 4a | **Name words, strong** (any non-Music segment): parking, stationnement, estacionamiento, dinner reservation, fan access, plus ups, upsell, free throw, courtside access/experience, social pass, club level access, flag bearer, fanboni, bench access, on-ice/on-court, pit pass/party, meet & greet, fast lane, early entry, garden lounge, guided tours, visite(s) guidée(s), visite d'avant-match, "tours of {venue}", pregame tours, bottomless | Drop | Brooklyn Nets free throw, Raptors courtside, Canadiens "Visite d'avant match", "Guided Tours of Scotiabank Arena" (or Hide, see 4.4) | Words that are also show titles are not in this list |
| 4b | **Name words, risky** (suite(s), restaurant, tailgate, tunnel, pre-game, post-game, hospitality, upgrade, warm-ups): only when segment is Sports **or** the name has a sport shape (` v `, ` vs. `, ` at `, ` @ `) | Drop | "VIP Tailgate: Broncos v Seahawks", "Brooklyn Nets v. Charlotte Hornets: Pre-Game (Watch Warm-Ups)" | "Nutcracker Suite", "Alice's Restaurant", "Tunnel of Love", "Tailgate N' Tallboys" |
| 5 | **Genre booster**: when segment/genre is Undefined or Miscellaneous, apply 4a and 4b to Music too | Drop | Add-ons misfiled under Music with an Undefined genre | Real Undefined events have no add-on words (the 39 sample passes) |

**Should an add-on with a listed parent be dropped by matching it to that parent?** Yes — it is layer 3, and it is the layer that generalises best to teams and venues you haven't seen, because it relies on structure rather than vocabulary. Two guards keep it safe: require the leftover words to be add-on words, and compare at the same venue and local date only. Without the first guard you would drop "late show" duplicates; without the second, watch parties.

### 4.3 Regex block (JavaScript, case-insensitive)

```js
// Layer 2 — disclaimers. Run on EVERY segment.
const DISCLAIMER = new RegExp([
  String.raw`\bmust\s+have\s+(?:a\s+|valid\s+|a\s+valid\s+)?(?:game\s+|event\s+)?ticket`,
  String.raw`\b(?:game|event|show)\s+tickets?\s+(?:is\s+|are\s+)?(?:required|sold\s+separately|not\s+included)`,
  String.raw`\b(?:does\s+)?not\s+include\s+(?:a\s+|an\s+|the\s+)?(?:game\s+|event\s+|show\s+)?(?:ticket|admission)`,
  String.raw`\bnot\s+(?:an?\s+)?event\s+ticket`,
  String.raw`\bno\s+(?:game|event)\s+ticket`,
  String.raw`\badmission\s+(?:not\s+included|sold\s+separately)`,
  String.raw`\bboletos?\s+(?:de\s+|del\s+)?(?:evento\s+)?no\s+incluid[oa]s?`,   // ES (seen live)
  String.raw`\bno\s+incluye\s+(?:el\s+)?boleto`,                              // ES (guess)
  String.raw`\bbillets?\s+(?:de\s+|du\s+)?(?:match|spectacle|[ée]v[ée]nement)?\s*non\s+inclus`, // FR (guess)
  String.raw`\bne\s+comprend\s+pas\s+(?:le\s+)?billet`,                       // FR (guess)
].join('|'), 'i');

// Add-on vocabulary. Used on attraction names (1b), after a parent match (3), and as name words (4a/4b).
const ADDON = new RegExp([
  String.raw`\bparking\b`, String.raw`\bestaciona(?:mi|i)ento\b`, String.raw`\bstationnement\b`,
  String.raw`\bdinner\s+reservations?\b`, String.raw`\breservaci[oó]n\b`, String.raw`\br[ée]servation\b`,
  String.raw`\brepas\b`, String.raw`\brestaurant\b`,
  String.raw`\bfan\s+access\b`, String.raw`\bplus\s+ups?\b`, String.raw`\bupsell\b`, String.raw`\bupgrade\b`,
  String.raw`\bfree\s+throws?\b`, String.raw`\bcourtside\s+(?:access|experience)\b`, String.raw`\bwarm-?\s?ups?\b`,
  String.raw`\btunnel\b`, String.raw`\bsocial\s+pass\b`, String.raw`\btailgate\b`,
  String.raw`\bclub\s+level\s+access\b`, String.raw`\bclub\s+seats?\b`, String.raw`\bpost-?\s?game\b`, String.raw`\bpre-?\s?game\b`,
  String.raw`\bflag\s+bearer\b`, String.raw`\bfanboni\b`, String.raw`\bbench\s+(?:access|photo)\b`, String.raw`\bon-(?:ice|court|field)\b`,
  String.raw`\bpit\s+(?:pass|party)\b`, String.raw`\bmeet\s*(?:&|and|\+)\s*greet\b`, String.raw`\bhospitality\b`, String.raw`\bsuites?\b`,
  String.raw`\bfast\s*lane\b`, String.raw`\bearly\s+entry\b`, String.raw`\bgarden\s+lounge\b`,
  String.raw`\bvisites?\s+guid[ée]es?\b`, String.raw`\bvisite\s+d'avant[- ]match\b`,
  String.raw`\bguided\s+tours?\b`, String.raw`\b(?:arena|stadium|venue|ballpark|backstage|behind[- ]the[- ]scenes)\s+tours?\b`,
  String.raw`\btours?\s+of\s+(?:the\s+)?[\w'. ]*(?:arena|stadium|centre|center|field|park|garden|ballpark|coliseum|dome)\b`,
  String.raw`\bpregame\s+tours?\b`, String.raw`\bbottomless\b`,
].join('|'), 'i');

// Layer 4b — words that are also show titles; only count them on sport-shaped names.
const RISKY = /\bsuites?\b|\brestaurant\b|\btailgate\b|\btunnel\b|\bpre-?\s?game\b|\bpost-?\s?game\b|\bhospitality\b|\bupgrade\b|\bwarm-?\s?ups?\b/i;
const SPORT_SHAPE = /\b(?:vs?\.?|versus|at|@)\s/i;
const KEEP = /\bwatch\s+party\b|\bfan\s+fest\b/i;
```

### 4.4 Decision order (pseudocode)

```text
for each listing L (any feed):
  if KEEP matches L.name                         -> keep
  if L.id or L.url in productIdsSeenTonight      -> drop        (1a, after verification)
  if any attraction name of L matches ADDON      -> drop        (1b)
  if season/package shape                         -> hide        (1c)
  if DISCLAIMER matches L.name                    -> drop        (2)
  P = listings at same venue (≤1 km), same local date, P ≠ L
  if some P.name is a proper substring of L.name
     and ADDON matches (L.name minus P.name)      -> drop        (3)
  if L.segment != Music or L.genre in {Undefined, Miscellaneous}:
     if ADDON matches L.name with RISKY words removed            -> drop (4a)
     if ADDON matches and (L.segment == Sports or SPORT_SHAPE)   -> drop (4b)
  if standalone venue tour (guided tours / visites guidées, no disclaimer) -> hide
  else keep
```

Normalise names before layer 3: lowercase, collapse whitespace, unify `v.` / `v` / `vs` / `vs.` / `versus`, strip trailing punctuation.

**Keep but hide** (stored so someone can log it, not shown on the nightly map): standalone venue tours ("Guided Tours of Scotiabank Arena", "Visites Guidées Centre Bell"), season and multi-day packages. Everything that needs another ticket to use is **dropped**, not hidden. Watch parties are **kept** visible: they are a night out on their own.

### 4.5 Typing the 39 real "Event" listings

Apply in this order and stop at the first hit:

1. **Attraction classification fallback.** When the event's segment/genre is Undefined or Miscellaneous, read `_embedded.attractions[0].classifications[0]`. The feed carries classifications per attraction as well as per event [doc], and an attraction (a comedian, a team) is often classified even when the event isn't. Map Music → Concert, genre Comedy → Comedy, Sports → game (use genre for Hockey/Basketball…). Unverified for your 39; check a few (section 6, check 3).
2. **SeatGeek taxonomy** for the same night (match on venue + date + fuzzy name) once SeatGeek is live: parent `1000000` sport, `2000000` concert, `3000000` theater [3p].
3. **Name patterns:**
   - Talk: `\b(?:a\s+)?live\s+conversation\s+with\b|\bin\s+conversation\b|\ban\s+evening\s+with\b|\bbook\s+(?:tour|signing)\b|\bq\s?&\s?a\b|\bspeaker\s+series\b|\blecture\b|\bkeynote\b` → Talk ("A Live Conversation with David Arquette").
   - Comedy: `\bcomedy\b|\bstand-?up\b|\bcomedian\b|\broast\b|\bimprov\b` → Comedy.
   - Sport: two capitalised names joined by ` vs.`/` v `/` at ` → game ("Oceanside Shock vs. Stockton Thunder").
   - Concert: ` w/ `, `with special guests?`, `feat.`, `ft.`, `in concert` → Concert ("Knox w/ Emi Grace").
4. **Venue prior.** Venue names containing Comedy Club, Improv, Funny Bone, Laugh Factory, Comedy Works, Zanies → Comedy. Otherwise, if ≥70 % of the venue's typed listings over the last 90 days are one type, use it ("Paris Paloma" at a music club → Concert). This is the fallback for bare-name listings like "Kill Tony" and "Leanne Morgan" when step 1 fails.

### 4.6 How the rule was checked

A Node script ran layers 0–4 on 33 real add-on names (brief sample plus listings found in this research) and 24 keepers (the brief's real "Event" names, the traps in section 3, and a few look-alike titles). Result: 0 misses, 0 false drops. Limits: the segment for each name was assigned by me, the parent lists were hand-filled, and the look-alike titles are partly from memory. Re-run it on a full night's raw pull before shipping.

---

## 5. Output table

| Signal | Feed | Exact value or pattern | Catches (examples) | Must not catch | Reliability | Source |
|---|---|---|---|---|---|---|
| `products[].id` / `.url` of other events | Ticketmaster | Listing id/url appears in another event's `products[]` | Parking and upsells linked to a parent ("Centre Bell - Stationnement - Rush" under "RUSH: Fifty Something") | — | High if ids match (unverified) | [Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/); [Bell Centre p. 6](https://www.ticketmaster.ca/centre-bell-tickets-montreal/venue/401966?page=6) |
| `products[].type` | Ticketmaster | `Parking`, `Campsite`, `Upsell` (third-party claim) | Type a linked add-on | — | Medium (3p) | [Go client](https://pkg.go.dev/gitlab.com/pthllc/ticketmaster) |
| `productType` | Ticketmaster | Undocumented values | Unknown | — | Unknown | [Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) |
| `classifications[].type/subType` | Ticketmaster | `Undefined` on real events | Nothing on its own | Real film/comedy events | Low | [Discovery Feed](https://developer.ticketmaster.com/products-and-docs/apis/discovery-feed/) |
| Genre `Undefined` / segment `Miscellaneous` | Ticketmaster | IDs `KZFzniwnSyZfZ7v7n1` (Misc) | Booster only | The 39 real events | Low | [tour.guru](https://tour.guru/venue/KovZpZAFFE1A); [Apify](https://apify.com/scraptivo/ticketmaster-scraper) |
| Attraction name | Ticketmaster | ADDON vocabulary on `_embedded.attractions[].name` | "Leafs Fan Access Plus Ups", "BetMGM Dinner Reservation", "Estaciona-T - Estacionamiento - Mexico", "Restaurant Canti" | Bands named after a single listed word | High (parking), medium (rest) | [Leafs](https://www.ticketmaster.ca/leafs-fan-access-plus-ups-tickets/artist/3972313); [Estaciona-T](https://www.ticketmaster.com.mx/estaciona-t-estacionamiento-mexico-boletos/artist/3370999) |
| Date span + "season/pass" | Ticketmaster | end − start > 3 days and name has season/pass/multi-day | "GW Basketball Season Tickets" (hide) | Multi-day festivals | Medium | [Apify](https://apify.com/scraptivo/ticketmaster-scraper) |
| Negative classification filter | Ticketmaster | `classificationName=-{name}` / `classificationId=-{id}` | Server-side exclusion once add-on class known | — | High mechanism | [Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) |
| Add-on events toggle | SeatGeek | Client option "include addon events, such as parking"; param name unconfirmed | SeatGeek parking events | — | Medium (3p) | [Go client](https://pkg.go.dev/gitlab.com/pthllc/seatgeek) |
| `taxonomies[].parent_id` | SeatGeek | 1000000 sport, 2000000 concert, 3000000 theater | Better typing | — | Medium | [seat_geek README](https://rubydoc.info/gems/seat_geek/0.14.2/file/README.md) |
| `ticket_class.category` | Eventbrite | `add_on` | Add-on ticket classes inside an event | `admission` classes | High | [API mirror](https://www.withone.ai/knowledge/eventbrite/conn_mod_def%3A%3AGNxOWV4oXb0%3A%3Aa8ikf-5YSem4vsLtpmtq3g) |
| Disclaimer EN | all | `must have … ticket`, `does not include a ticket`, `not (an) event ticket` | Philadelphia (16), Toronto upsell, Detroit popcorn | — | High | [Xfinity Mobile Arena](https://www.ticketmaster.com/xfinity-mobile-arena-tickets-philadelphia/venue/393379) |
| Disclaimer ES | all | `boleto (de) (evento) no incluido` | All Mexico City/Monterrey parking, lounges, fast lanes | — | High | [Estaciona-T](https://www.ticketmaster.com.mx/estaciona-t-estacionamiento-mexico-boletos/artist/3370999) |
| Disclaimer FR | all | `billet … non inclus`, `ne comprend pas le billet` | Nothing seen yet | — | Low (guessed) | none found |
| Parent-anchored suffix | all | same venue + date, parent name ⊂ name, leftover hits ADDON | Spurs free throw/courtside/club level, "Journey BetMGM Dinner Reservation", Monster Jam pit pass | "Late Show" duplicates, watch parties | High | Brief; [Live Nation list](https://www.livenation.com/event/G5viZ_3lrQNNK/monster-jam-betmgm-dinner-reservation) |
| Parking words | all | parking / stationnement / estaciona(mi)ento | "Stationnement – Canadiens - Parking", "Estacionamiento Karol G …" | — | High | [Bell Centre FR](https://www.ticketmaster.ca/Centre-Bell-Centre-tickets-Montreal/venue/401966?lang=fr-ca) |
| Experience words (strong) | non-Music, or Undefined genre | fan access, plus ups, free throw, courtside access, flag bearer, fanboni, bench access, on-ice, pit pass | Toronto and New York experiences | "Experience Hendrix" (Music, and "experience" alone is not in the list) | High | [Raptors](https://www.ticketmaster.ca/raptors-fan-access-plus-ups-tickets/artist/4036149) |
| Experience words (risky) | Sports or sport-shaped names only | suite, restaurant, tailgate, tunnel, pre-/post-game, hospitality, upgrade, warm-ups | NFL tailgates, Nets warm-ups | Nutcracker Suite, Alice's Restaurant, Tailgate N' Tallboys | Medium | Brief; titles [memory] |
| Venue tours | all | guided tours, visites guidées, tours of {venue}, pregame tours | "Guided Tours of Scotiabank Arena" (hide), "Flyers Pregame Tours" (drop via disclaimer) | "Tour de …", band "World Tour" | Medium | [Bell Centre FR](https://www.ticketmaster.ca/Centre-Bell-Centre-tickets-Montreal/venue/401966?lang=fr-ca) |
| Keep-list | all | watch party, fan fest | Cavs/Hurricanes watch parties | — | High | [Rocket Arena](https://www.rocketarena.com/events/detail/cavaliers-vs-knicks-eastern-conference-finals-watch-party-cleveland-oh-05-21-2026) |

---

## 6. Self-audit

### Claims on thin evidence

| Claim | Why thin | How Kylie can check |
|---|---|---|
| `products[].id` equals the add-on's own event `id` | Only inferred from the docs plus the website's "Add-Ons" block | **Check 1:** fetch a game known to have add-ons, e.g. `GET /discovery/v2/events.json?keyword=Maple%20Leafs&venueId=…&countryCode=CA&apikey=…`, read `products[]`; then fetch each product id with `/discovery/v2/events/{id}.json`. [Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) |
| Product types `Parking`, `Campsite`, `Upsell` | One third-party code comment | Same call as check 1; list the distinct `products[].type` values over a full night. [Go client](https://pkg.go.dev/gitlab.com/pthllc/ticketmaster) |
| `productType` values | Undocumented | **Check 2:** log `productType` for every listing one night; compare add-ons vs. real events |
| Genre `KnvZfZ7v7ll` = "Undefined" | Guess from one URL | `GET /discovery/v2/classifications/genres/KnvZfZ7v7ll.json?apikey=…` |
| Attraction classifications type the 39 better | Hypothesis | **Check 3:** for 10 of the 39, read `_embedded.attractions[0].classifications` |
| SeatGeek add-on parameter | Name not seen | Read [options.go#L384](https://gitlab.com/pthllc/seatgeek/-/blob/e05f09cd168b/options.go#L384) or ask SeatGeek support |
| Segment of each add-on in the test | Assigned by me | Re-run the test on raw API output |
| French disclaimers | Not seen in any listing | Search ticketmaster.ca with `lang=fr-ca` for "non inclus" around Bell Centre and Videotron Centre events |
| Tailgate listings are at the same venue as the game | Not checked | Compare venue ids for "VIP Tailgate: Broncos v Seahawks" and the game; widen to ~1 km if they differ |
| MLB/NFL team-site product names appear as TM listings | Only seen on team sites | Search TM venue pages for Mariners, Reds, Seahawks |

### From memory (not verified this session)

- Eventbrite no longer offers public event search; AXS and DICE have no open discovery API. Check [Eventbrite platform docs](https://www.eventbrite.com/platform/api), AXS and DICE partner pages.
- Medieval Times "Dinner & Tournament", "Nutcracker Suite" ballets, "Alice's Restaurant" concerts, "Tunnel of Love" tributes and the "Tailgate N' Tallboys" festival as real-title traps.

### Gaps

- No add-on listing found for MLS, NWSL, WNBA or CFL. Spot-check one venue page per league (e.g. BMO Field, BC Place, Barclays Center for the Liberty, CPKC Stadium).
- No merchandise-bundle listing found; no event seen with classification type "Merchandise".
- "ESCALA" (Mexico City) is an add-on by its disclaimer, but I don't know what it sells.
- The 2017-era Yankees parking example ([ticketpy](https://pypi.org/project/ticketpy)) is old; naming may have changed.
