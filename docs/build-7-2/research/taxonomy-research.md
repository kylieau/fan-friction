# Event Types Setting: How to Categorize Events (Research)

Read-only research for Kylie's Fan/Friction app. Nothing in the repo, Supabase, or `private/` was changed or read. Written Oct 25, 2026 (Pacific).

## The Short Version

1. **A type system already exists.** `src/data/eventTypes.ts` (build 5, item 11, Kylie's answers IN03 and IN04, Oct 14) sorts every event into one of 37 types in 8 groups, worked out when the app reads an event. Nothing is stored. Icons, labels and stats already use it. The new "Event Types" setting should sit on top of it, not replace it.
2. **The data is good for sports and music and weak at the edges.** In the current catalog window (3,966 events, 40 cities), 91% of events are sports, concerts, or theater and comedy that sort cleanly. 207 events (5.2%) have no usable tag and land in "Event". There are zero parades, road races, street fairs, or fan conventions held outside a listed venue, because the feeds never bring them in.
3. **The hiding machinery exists, but three of Kylie's rules differ from how Crowd Size works today.** Crowd Size already hides events from the map, lists and search, and always shows stubs, plans, and friends' attending. But it does not protect favorites, it does not touch Local Competition (a deliberate "answer B"), and its map totals use only what passes the filter. Event Types needs a decision on each (see Part 4).

## Part 1: What Tags Exist Today

### Where the counts come from

- Source: the repo's nightly schedule archive (`data/schedule-archive/<city>/`), the latest file in each of 40 city folders (mostly Oct 24, a 14-day window each). Total **3,966 events**. This is the closest local copy of the catalog. The live Supabase catalog was not touched, so it may be somewhat larger. Across all archive days since Oct 4 there are 5,840 unique events; the shape is the same.
- Method: I ran the app's own `eventType()` on a scratch copy outside the repo (`/workspace/ff-claims/event-types/scratch/`). Counts below are reproducible with `scripts/event-types-check.mjs`.
- Sources of events in this window: Ticketmaster 2,715, school calendars (Sidearm) 643, ESPN 560, HockeyTech 41, MLB 6, hand-added listing 1. All 3,966 sit at a venue (`place.type = venue`). No point or route events are in the catalog.

### The tag fields on an event

| Field | What it holds | Set by |
|---|---|---|
| `kind` | `game`, `show`, `special` (also `festival`, `live-broadcast` in the type, but 0 and 0 here) | Feed code. Ticketmaster: Sports segment becomes game, Music becomes show, everything else becomes special |
| `audience.domain` | `sports`, `music`, or `other`. Always matches `kind` (game to sports, show to music, special to other) | Feed code |
| `audience.sport` | Sport word for games | Feeds. Ticketmaster guesses it from words in the genre and title |
| `audience.level` | `pro`, `lower`, `college`, `school`, `amateur`. Left off means top pro | Only Sidearm sets `college`. Everything else is blank |
| `audience.division` | men, women, mixed | Sidearm only; separate axis |
| `audience.genre` | Ticketmaster genre for shows | Ticketmaster |
| `audience.tag` | Ticketmaster genre for specials (a theater tag, "Undefined", and so on) | Ticketmaster |
| `teams.home`, `teams.away` | Team ids, which carry a `league` ("NHL", "College football", "AHL") | ESPN, MLB, HockeyTech, Sidearm. Only 849 of 1,616 games have them |
| `sourceId`, `ticketmasterId`, `performer`, `act` | Provenance and the act name | Feeds |
| `occasionFacts`, `stakes`, `homeOpener`, `preseason` | Occasion facts for the score, not types | Feeds |

What is **not** kept: Ticketmaster's `segment` (Music, Sports, Arts & Theatre, Film, Miscellaneous) and `subGenre`. The ingest code reads them, uses them once, and throws them away (`ticketmasterSource.ts`, around lines 299 to 355). That is the single biggest data loss for this feature.

### Counts per value (3,966 events)

**kind and domain:** game / sports 1,616. show / music 1,457. special / other 893.

**Sport (1,616 games):** basketball 514, hockey 342, soccer 272, volleyball 224, football 162, baseball 26, other 22, softball 12, wrestling 10, lacrosse 8, field hockey 7, motorsports 4, swimming 3, rodeo 2, cross country 2, boxing 2, and one each of water polo, fencing, tennis, rugby.

**Level on the event itself:** blank 973 (reads as top pro), college 643. No `lower`, `school` or `amateur` anywhere. Working level out from the home team's league (when a team is on file) gives a truer picture:

| Level (derived) | Games |
|---|---|
| College (includes U Sports) | 902 |
| Top pro (NFL, NBA, NHL, MLB, MLS, NWSL, WNBA, Liga MX, CFL, and so on) | 297 |
| Minor, junior, or lower league (AHL, WHL, G League, USL, and so on) | 51 |
| Unknown (no team on file, nearly all Ticketmaster) | 366 |
| High school | 0 |

College is 56% of all games, mostly Sidearm volleyball (194), soccer (171) and basketball (148).

**Music genre (1,457 shows):** Rock 385, Other 181, Hip-Hop/Rap 139, Pop 139, Dance/Electronic 134, Country 115, Latin 76, R&B 63, Metal 50, Alternative 44, Classical 31, World 28, Folk 20, Undefined 19, Religious 10, Jazz 8, Reggae 8, Blues 7.

**Special tag (893 specials):** Theatre 250, Undefined 185, Comedy 114, Miscellaneous 52, Ice Shows 44, Arts & Theatre 31, Classical 26, Spectacular 24, Children's Theatre 23, Dance 22, Opera 15, Circus & Specialty Acts 15, Hobby/Special Interest Expos 13, Family 13, Horror 11, Miscellaneous Theatre 10, Community/Civic 8, Drama 7, Performance Art 5, Lecture/Seminar 5, Music 4, Magic & Illusion 4, Fairs & Festivals 3, Psychics/Mediums/Hypnotists 3, Multimedia 2, Variety 2, Documentary 1, Animation 1.

### What the existing type map makes of them

Types per the current `eventType()` (key, count): music.concert 1,420; sports.basketball 514; sports.hockey 342; arts.theatre 323; sports.soccer 272; sports.volleyball 224; **other 207**; sports.football 162; arts.comedy 115; music.classical 75; family.ice_show 48; family.kids 39; sports.other 36; arts.spectacle 28; sports.baseball 26; arts.dance 24; family.circus 15; fairs.expo 13; sports.combat 13; arts.film 13; sports.softball 12; music.festival 12; sports.lacrosse 8; arts.talk 8; fairs.market 8; sports.motorsports 5; sports.rodeo 2; sports.tennis 1; sports.rugby 1. Types with zero events right now: golf, cricket, track, horse racing, fair, pop-up, watch party, live screening.

### Events with no usable tag

| Gap | Count | What they are | Fix |
|---|---|---|---|
| Specials tagged Undefined or Miscellaneous that the title keywords cannot place, so they read "Event" | **207** (152 Undefined, 46 Miscellaneous, 4 "Music", 2 Variety, 2 Fairs & Festivals, 1 Documentary). The keyword pass already rescued 33 of 185 Undefined and 6 of 52 Miscellaneous | Mostly club nights ("21 and Over"), touring comedians and speakers, a Rocky Horror tour, "In the Heights" (a stage show), watch parties (Brewers World Series), a high school gymnastics championship, minor-league hockey tagged Undefined | Keep Ticketmaster's segment and subGenre; add keywords; Other stays visible by default |
| Music with no real genre ("Other" 181, "Undefined" 19) | about 195 concerts | Real acts the seller left unclassified (The Damned, Julia Jacklin, Madeon) | Kept in Concerts with a "Genre Unknown" sub-type. Keep subGenre. The existing genre note says the seller's second level is mostly defaults, so check before trusting it |
| Sport "other" | 22 | 12 are one esports tournament (Worlds 2026, Dallas); **9 are junior or minor-league hockey** (Windsor Spitfires, Guelph Storm, Abbotsford Canucks) that the sport guesser missed because the word "hockey" was not in the genre or title; 1 rugby | Fix the guesser with the team name and league. These 9 are hockey |
| Sports that are real but have no sub-type | 14 college games (field hockey 7, swimming 3, cross country 2, water polo 1, fencing 1) | Currently pooled under "Sports event" | Group as "Olympic and Other Sports" |
| Games with no team record, so no level | 366 | Ticketmaster games at rooms with no league feed, plus 1 listing | Derive level from the Ticketmaster attraction or title, else "Unknown" |

### What the catalog has none of

Parades, marathons and road races, street festivals, holiday events (tree lightings, fireworks), open-site festivals and fan conventions at non-listed venues: **0 events.** Ticketmaster only brings in events at venues the app has (2,038 rooms). The hand-kept festival list (`festivalRegistry.ts`) is "not read by the app yet" and no edition is listed. One seeded past event, the LA Marathon on Mar 8, used a `route` place with the tag `road-race`, and its own note says Gridlock only reads events in a venue. So any road-event type needs a source before it is useful (see Part 3).

## Part 2: Proposed Taxonomy

Design rules:
- **Every event has exactly one top type and at most one sub-type**, so each toggle means one thing.
- **9 top types**, small enough for a settings screen. Each expands to its sub-types.
- Reuse the 37 existing keys. The new top types are a regrouping of them, so icons, labels and stats do not change.
- Sports gets an extra row of **level chips** (Pro, Minor League, College, High School) inside its expansion, since level cuts across sport and Kylie named it. The sport list stays the sub-types.
- Title Case on every label (repo rule), Oxford comma.

Counts are from the 3,966-event window above. "Support" says whether today's data can place the event.

| # | Top type | Sub-types | Now | Support |
|---|---|---|---|---|
| 1 | **Sports** | Football, Basketball, Baseball and Softball, Hockey, Soccer, Volleyball, Combat Sports (boxing, MMA, wrestling), Motorsports, Rodeo, Tennis and Golf, Lacrosse and Rugby, Olympic and Other Sports. Level chips: Pro, Minor League, College, High School | 1,618 (Basketball 514, Hockey 342, Soccer 272, Volleyball 224, Football 162) | **Sport: ready** (existing keys). **Level: needs a new derived field** (see Part 3). **High School: needs a source**, 0 events |
| 2 | **Concerts & Music** | By genre: Rock and Alternative, Pop, Hip-Hop and Rap, R&B, Country and Folk, Latin, Electronic and Dance, Metal, Jazz and Blues, World and Reggae, Faith and Gospel, Classical and Opera, Genre Unknown | 1,495 (Rock/Alt 429, Genre Unknown 195, Hip-Hop 139, Pop 139, Electronic 134, Country 115, Classical and Opera 75, Latin 75) | **Ready** for genre (the existing genre-to-category table in `genres.ts` already maps them). Genre Unknown is a real bucket (13%) |
| 3 | **Theater & Comedy** | Theater and Musicals, Comedy, Dance and Ballet, Magic and Spectacle, Talks and Lectures, Film and Screenings | 511 (Theater 323, Comedy 115, Spectacle 28, Dance 24, Film 13, Talks 8) | **Ready** (existing arts keys). Film and Talks are small and odd; could merge into one "Film and Talks" |
| 4 | **Family Shows** | Ice Shows, Circus and Acrobatics, Kids and Family | 102 (Ice 48, Kids 39, Circus 15) | **Ready** (existing family keys) |
| 5 | **Festivals & Fairs** | Music Festivals, Food and Drink Festivals, Cultural Festivals, Fairs and Carnivals, Markets | 20 (Music Festivals 12, Markets 8). Fairs 11 seen over the whole archive but 0 in this window | **Partly.** Music festival, fair and market exist. Food and Cultural need new tags (today "Austin Food & Wine Festival" is filed as a music festival) |
| 6 | **Conventions & Expos** | Fan Conventions, Trade and Hobby Expos, Auto, Boat, and Home Shows, Pet and Animal Shows | 13 | **Partly.** One bucket exists (Expo and Convention). Sub-types need title keywords or a new tag |
| 7 | **Parades & Road Events** | Parades, Marathons and Road Races, Cycling Events, Holiday Events (tree lighting, fireworks, New Year's), Cultural Marches | 0 | **Needs a new source and a new tag.** Also needs a place that is not a building (route or point, which the data type already allows) |
| 8 | **Pop-Ups & Watch Parties** | Pop-Ups, Watch Parties, Live Screenings (Cosm, cinemas) | 0 in this window (1 Brewers watch party sits in "Event") | **Ready in the type list**, but few events carry it. Watch parties need a title keyword |
| 9 | **Other** | Everything the keywords cannot place | 207 | Always the safety net |

### Sub-type notes

- **Sports level** is the strongest add. College is 56% of games, and a fan who only cares about pro would want one switch for 902 games. Pro vs Minor vs College is cleanly derived from the home team's league. High School has no feed, so show the chip only if a source arrives, or hide it until then.
- **Genre sub-types** use the 16 categories already in `genres.ts` (Kylie's answers of Oct 19), merged down to about 12 for the screen: Rock and Alternative together, Folk with Country, Jazz with Blues, World with Reggae.
- **Festivals:** Kylie's wording was "concerts and music (festivals)". I split Festivals into its own top type for two reasons. Festivals and fairs behave differently on the ground (multi-day, open sites, huge crowds, road closures) and a fan who wants no county fairs may still want every concert. A music festival still reads "Music Festival" under Festivals and Fairs. If Kylie wants it under Music, move it; the rest does not change (Open Question 1).
- **Level chips and sport toggles combine with AND.** Turning off College hides all college games; turning off Hockey hides all hockey; a college hockey game is hidden if either is off.

### How others categorize (for sub-type lists)

- **Ticketmaster** (the app's main feed) uses three levels: **segment** (Music, Sports, Arts & Theatre, Film, Miscellaneous), **genre**, and **sub-genre** ([Discovery API docs](https://developer.ticketmaster.com/products-and-docs/apis/discovery-manual/v2/); [segment explainer](https://www.educative.io/courses/event-ticketmaster-api-python/segments-genres-and-subgenres)). The app keeps only the genre. Ticketmaster's own feed docs call genre the "secondary" level and sub-genre the "tertiary" one ([Discovery Feed](https://developer.ticketmaster.com/products-and-docs/apis/dc-dataFeeds/)). Its top level is thin: no parades, races, or conventions segment, which is why those fall into Miscellaneous.
- **SeatGeek** has a taxonomy tree (id, name, parent_id) whose roots include sports, concert, and theater, with comedy, family and festival named as categories in search summaries ([taxonomies endpoint spec](https://raw.githubusercontent.com/api-evangelist/seatgeek/refs/heads/main/openapi/seatgeek-taxonomies-api-openapi.yml); [SeatGeek API docs](https://seatgeek.github.io/)). I could not open the live list without a client id, so the exact sub-names are unverified.
- **Eventbrite** has about 21 flat categories, with subcategories nested: Music, Business and Professional, Food and Drink, Community and Culture, Performing and Visual Arts, Film Media and Entertainment, Sports and Fitness, Health and Wellness, Science and Technology, Travel and Outdoor, Charity and Causes, Religion and Spirituality, Family and Education, Seasonal and Holiday, Government and Politics, Fashion and Beauty, Home and Lifestyle, Auto Boat and Air, Hobbies and Special Interest, School Activities, Other ([category list](https://displayevents.app/docs/display-eventbrite-events-in-wordpress/developer/eventbrite-categories-by-id/); [categories endpoint](https://www.withone.ai/knowledge/eventbrite/conn_mod_def%3A%3AGNxOWGKKdq8%3A%3ArbJKHRsfRRKZNa35LZpLtw)). Useful as a source for Seasonal and Holiday, Community and Culture, and Hobbies, which the ticket feeds lack. Eventbrite is the likely source for the types that have zero events today. Its categories are too many for a settings screen; the 9 above fold most of them in.

## Part 3: Recommended Data Change

**Lean: keep the type derived when read, add three small things.** This matches the build 5 decision ("nothing stored changes, no migration") and the AGENTS rule to prefer a computed rule over a hand flag.

1. **Add a top-type map in `eventTypes.ts`.** One table from each existing key to a top type and sub-type (for example `sports.baseball` and `sports.softball` both give Sports, Baseball and Softball). New function such as `eventGroup(event) returns { top, sub, level }`. No stored field, no migration, and every old event, stub and archive file works at once.
2. **Add a derived `level` for games.** From the home team's league (College, U Sports, minor, top pro) when `teams` is on file; otherwise from `audience.level`; otherwise "Unknown". Today only Sidearm sets it.
3. **Keep what Ticketmaster already tells us.** In `ticketmasterSource.ts`, store the raw `segment`, `genre`, and `subGenre` on the event (for example `class: { segment, genre, subGenre }`). It is a few bytes a row, no schema change (events sit in a JSON `data` column), and it lets the type rules improve later without a new pull. It also fixes most of the 207: "Undefined" with segment Sports, Film, or Arts and Theatre can finally be told apart.

Backfill: none for the app, since it computes on read. Rows in the catalog table pick up the new `class` field at the next nightly write. Old archive files stay as they are and still work through the derived rule. For hand-added and fan events, the Add form's sport or type word already feeds `entryType()`.

**New sources are separate work** (Parades & Road Events, fairs, conventions at non-venue sites). Candidates: Eventbrite's category feed, city permit and street-closure calendars, race calendars, the existing festival registry, and fan-added events. These need their own approval (new feed, possible cost, and the "public data only" rule), so I only flag them. They also need a `route` or `point` place (already in the data type) and a decision on how Gridlock reads a place that is not a building.

**Default for untagged events:** type "Other", **shown**. Hiding is opt-in per type. Store the setting as a list of **hidden** keys, never shown keys, so new types and new sub-types appear switched on without a migration.

**Saved setting (mirrors Crowd Size):** in `PersonalLog`, a field like `eventTypesOff: string[]` (keys such as `sports`, `sports.hockey`, `level.college`, `concerts.country`) plus `eventTypesOffAt` so the newer copy wins across devices. Rules for the keys: a top key off hides everything under it; a sub key off hides only that sub-type. The top row shows on, partly on, or off. A `setEventTypes()` function copies `setCrowdRange()`.

**Code shape:** a sibling of `crowdRange.ts` with a `passesEventTypes(event, off, keep)`, joined with the Crowd Size check into one "hidden by your settings" test so a row hidden by both shows once. Surfaces to wire (the same list Crowd Size uses today): Map (`MapScreen`), date page lineup (`DateScreen`), Explore List, search (`SearchSheet`), the event page's This Day card (`EventScreen`), Further Out, plus the one new place Kylie named, **Local Competition** (`DayTimeline`, today unfiltered).

### How it should work with Kylie's rules

| Rule | Today with Crowd Size | Event Types plan |
|---|---|---|
| Her own plans, stubs, entries | Always shown (`alwaysShownIds`: plans, added entries) | Same. Reuse the same keep set |
| Friends' activity | Always shown when a friend is attending or attended (Watching and Interested do not count) | Same |
| **Faves** | **Not in the keep set today.** A favorited team's or artist's event can be hidden by Crowd Size | **New.** Add events whose team, artist, or venue is a favorite to the keep set. This also changes Crowd Size, so ask Kylie (Open Question 4) |
| Verdict and crowd counts | The read never sees the filter (`rateDate`, the crowd fight, the day strip, the 5,000 floor). Map totals, though, show only what passes | Verdict and the read: always count hidden events. Totals on screen: see Open Question 5 |
| Local Competition | Deliberately **not** filtered ("answer B" in `DateScreen.tsx`) | Kylie wants types hidden there too. Hide the row from the timeline, keep it in the verdict. Needs a visible "hidden" cue so a Cooked verdict never looks unexplained |
| "N events hidden · Show" line | "N events outside your crowd size · Show" | Reword to cover both settings, for example "N events hidden by your settings · Show". Show reveals for this view only |
| Event page opened by link | Opens normally | Same: hiding never blocks a direct link or a stub's own page |

## Part 4: Open Questions for Kylie

1. **Where do festivals live?** Their own top type with fairs (my lean), or a sub-type of Concerts & Music as you described?
2. **Is 9 top types about right?** Specifically, do you want Family Shows (Disney on Ice, circus, kids) kept separate from Theater & Comedy, and Conventions & Expos separate from Festivals & Fairs?
3. **Level chips for Sports:** Pro, Minor League, College, High School as a row inside Sports, or only sport sub-types? Should minor and junior leagues count as Pro or stay separate? (High School has no data feed today.)
4. **Faves:** should events of a favorited team, artist, or venue always show, even when their type is off? That does not happen with Crowd Size today. Should it start?
5. **Totals and counts:** you said verdicts and crowd counts still include hidden events. Today the map's day totals and chip counts drop events the Crowd Size range hides. Which do you want for Event Types: totals that include hidden events, or only the verdict?
6. **Local Competition** was left unfiltered on purpose (answer B). Confirm you want types hidden there now, and whether the hidden count should show on that card too.
7. **One setting or two?** Crowd Size has separate map and lists switches (and Further Out switches). Should Event Types get the same switches, or one switch for everything?
8. **New event kinds:** do you want parades, marathons, street fairs, holiday events and conventions at non-listed sites pulled in as a real project? They are the types the data cannot see at all, and a new feed may cost money (a flag for your OK).
9. **Defaults:** all types on for a new user (my lean), or should a new user start with something hidden, like College Sports or Genre Unknown concerts?
10. **Unknown genre and Other:** keep these as visible sub-types you can switch off, or never let a person hide "unknown" because it could hide something real?
11. **Should "Event Types" also filter Further Out and search results?** (My lean: yes, same as Crowd Size.)

## Files

- This report: `/workspace/ff-claims/event-types/taxonomy-research.md`
- Counting scripts and raw output (scratch, not in the repo): `/workspace/ff-claims/event-types/scratch/`
