# Coverage check: the Los Angeles room-first census against the app's catalog

Written Oct 22, 2026 (evening) by Claude Code (Opus 5.5, with Fable as advisor). Input: the room-first census of 116 Los Angeles rooms, Oct 26 to Nov 22, 2026, in `docs/research/topics/artist-coverage-audit-census-answer.md` (rooms 1–50) and `artist-coverage-audit-census-answer-2.md` (rooms 51–116). Measured against the shared catalog as of the Oct 22 nightly run (Supabase `events`, read with the public key, by `data->place->>venueId` and date), then re-measured against a live Ticketmaster pull with today's fixes in (`loadTicketmasterEvents('la')` headless). A census row is listed when the app has an event in the same room on the same date whose title shares a word with the room's billing; every same-room, same-date row that shared none was read by hand. The full join, one line per census row, is `artist-coverage-la-census-2026-10-22.csv` beside this file. The Oct 21 check (`artist-coverage-la-2026-10-21.md`) is the model.

## The numbers

| Measure | Count |
|---|---|
| Dated rows in the census's main tables | 565 |
| Not events the app lists, by design (building tours 57, the Rose Bowl flea market, a 5K, a pumpkin patch ×2, a fiber fair ×2, a simulcast day, Santa Anita's two Ticketmaster racing days) | 66 |
| **Events the app would list under its own rules** | **499** |
| Listed on Oct 22 (same room and date, the act named; one at the wrong room, below) | 364 (73%) |
| Listed after today's fixes (NHRA Finals ×4, Fox Theater Pomona ×6) | 374 (75%) |
| Listed once Acrisure Arena is fixed (question 1) | 395 (79%) |
| Not listed: the room's own box office (opera, symphony, performing arts centers, a cinema, a show-jumping portal) | 82 |
| Not listed: AXS (Empire Polo's Magic of Lights ×3, Peacock Theater, Oxnard ×3, Fox Pomona ×2) | 9 |
| Not listed: small platforms (Eventbrite, Humanitix, Universe, Posh, Show Impulse, TicketSpice, Fever) | 9 |
| Not listed: Etix (Fantasy Springs ×4) | 4 |
| Rows in the census's "unresolved" tables (admission or room not established), for reference | 56, of which the app lists 20 |
| Listed rows whose start differs from the room's (of 324 where both have one) | 40 |

**At rooms of 5,000+ (the ones that feed friction):** 246 rows, 66 by design, 180 in scope. Listed 141 after today's fixes (78%); 21 more once Acrisure is fixed (90%). What is left there: Santa Anita's show jumping (10, its own portal), Fairplex's Cali Cup (3, the organizer's own sales), Empire Polo's drive-through lights (3, AXS), one Peacock Theater show (AXS) and the Dial Up festival at Great Park Live (TicketSpice).

**Under 5,000 (listed only):** 319 rows; 233 listed after today's fixes (73%). The 86 left are box offices (69), AXS (5), small platforms (8) and Etix (4).

## What it says

- **Fixed today, in two commits** (`0495b770`, `2a55d43d`):
  - **The NHRA Finals** (Nov 12–15, the 40,000-seat Pomona dragstrip) were on Ticketmaster under a second id for the room's current name. The pull asks by id and never saw them. Both ids are on the room now.
  - **Two seller spellings matched no room in any city:** "Segerstrom Center for the Arts-Segerstrom Hall" (51 listings, Costa Mesa) and "The Fox Theater-Pomona" (10). Each now gets a retry that must still equal a room name on file. The Fox listings are AXS shows Ticketmaster also lists, so six of the census's eight Fox rows are now listed. Segerstrom Hall was unread in the census; it gains 20 dates in the window.
  - **Soccer read as football** when a club is named "Football Club", so the one-game rule kept both copies. LAFC vs. Minnesota (BMO Stadium, Nov 1) and Sounders vs. LAFC (Lumen Field, Nov 7) were each listed twice, a doubled crowd in each city's friction.
  - **Season passes** ("TMU Bold Women's Basketball - 2026-27 Season Pass") passed the add-on filter.
  - The id script also gave five rooms matched by name only an id of their own.
- **Acrisure Arena (11,007) lists nothing:** 21 Ticketmaster events in the window, including the Firebirds, the Coachella Valley Lakers, Jonas Brothers, Los Tigres del Norte, the B-52s with DEVO, and a seven-game college tournament. The room has no Ticketmaster id, and its map point is about 6 km from the building (Thousand Palms; the arena is at 75702 Varner Rd, Palm Desert). The name search looks 3 miles from the point and finds nothing. It is already on the list of rooms whose sports come from Ticketmaster, so someone meant it to list. The fix is easy, but it raises question 1.
- **The Coachella Valley sits inside Los Angeles's verdict, past the further-out line.** Six rooms are filed under Los Angeles with no further-out tag. Routed from the city's map center: Empire Polo Club 164 min, Fantasy Springs 160, Indian Wells Stadium 2 155, McCallum 150, the Show 144, Acrisure 143. Toyota Arena in Ontario, 63 minutes out, is further out and never counts. Empire Polo's festival weekends (125,000) therefore count toward Los Angeles dates while Ontario's arena does not. The rooms came in with the Oct 16 small-rooms scope ("plus the Coachella Valley", a note in `venues.ts`), three days before Further out existed.
- **The sellers we do not read are mostly small rooms.** 82 of the 104 rows still missing sell through the room's own box office: LA Opera (8), LA Phil (5), Pacific Symphony (5), Musical Theatre West (13), McCallum (12), the Soraya, Haugh, Zipper Hall, Soka, Ambassador, the Alex, Mission Playhouse. Only Santa Anita's show jumping (10) and Fairplex's Cali Cup (3) are at 5,000+ rooms. AXS is the accepted limitation (Kylie, Oct 19); with Fox Pomona on Ticketmaster too, nine AXS rows are left.
- **The school feeds held.** Every Sidearm and ESPN room the census read is listed row for row (Pauley, Galen, the Pyramid, Gersten, Titan Gym, Bren, Felix, University Gym, Firestone, Gilbert). The catalog also has games the census could not read: the Cal State LA and Azusa Pacific women's schedules.
- **One event is in the wrong room.** Ticketmaster files the Pacheco vs. Fulghum boxing card (Nov 14) under "Dignity Health Sports Park", so the app gives it the stadium's 30,510. The room's own calendar puts it in the 8,000-seat tennis stadium.
- **One game is still listed twice, three hours apart.** USC vs. Arkansas–Pine Bluff (Galen Center, Nov 15) is on ESPN at 16:00 (the room says 16:00) and on Ticketmaster at 19:00. The one-game rule needs starts within two hours. Elsewhere, Cal vs. Charleston at Haas Pavilion (11:00 and 18:00) may be the same game or a men's and women's pair. See question 5.
- **Start times: 40 of 324 differ.** 27 are the same one hour at three rooms (the Wiltern 16, the Observatory OC 7, the Palladium 4): Ticketmaster's time is the doors, the room's is the show. The rest are matinees standing in for evening shows under one-show-per-day (Pantages ×6, McCallum ×2, Cerritos, La Mirada), as the Oct 21 check found, plus two school games (UCLA volleyball, the Galen game above) and El Fantasma at 20:01.

## What this does not say

- **The census undercounts several rooms.** Many rooms are Partial or Unread (Angel Stadium, Weingart, the Shrine, the Terrace Theater, Segerstrom Hall, the House of Blues). At rooms the census read, the catalog holds 111 events it does not list: the Fonda 22, the Novo 19, the Show 8, La Mirada 8. That is census undercount, not the app over-listing. An unread room is unknown, never zero.
- **"By design" follows the app's add-on rules**, mostly a note in `addOns.ts` (Oct 14, Kylie's; Oct 22's tram tours and "Live Racing" days are an assistant's). They are not misses unless she says otherwise.
- **The re-measure used a live pull, not tonight's catalog.** The Oct 23 nightly run is what puts today's fixes in the app.

## Proposal (multiple choice; the builder's lean is marked)

1. **The Coachella Valley rooms and Acrisure Arena.**
   - **(a) Lean:** fix Acrisure (its Ticketmaster id and the arena's point) and make the six Coachella Valley rooms further out. They would be listed with their drive and never count toward a Los Angeles verdict. That is about 2½ hours, so "about a 2-hour drive" stretches for this one band of rooms, or the helper line changes.
   - (b) Fix Acrisure and keep the valley in the Los Angeles verdict, as today.
   - (c) Fix Acrisure's point and id only, and leave the valley question for later. Acrisure then starts counting toward Los Angeles dates from the next nightly run.
2. **Box-office rooms (82 rows, 69 under 5,000).**
   - **(a) Lean:** accept them, like AXS: they are logged by hand (the Add a show card), and the report names them.
   - (b) A research prompt asking which of these rooms publish a free public calendar feed (iCal or RSS, no sign-up), and build a reader only where one exists.
3. **Santa Anita's racing days (26,000).** Ticketmaster sells them as "Live Racing at Santa Anita Park", which the add-on rule drops as daily admission (an assistant's call, Oct 22). Named race days still list.
   - **(a) Lean:** leave as is.
   - (b) List every racing day at a track's capacity.
4. **Seller ids that move.** A room's seller can open a second id (the dragstrip's was 3.4 km from its first). The id script takes an exact name only within 1.5 km, and only on demand.
   - **(a) Lean:** run the id script for every city once now. It lists, for a hand look, any exact-name match farther than 1.5 km, and writes nothing on its own.
   - (b) Leave as is; the next coverage check finds them.
5. **A game sold at a different time.**
   - **(a) Lean:** the one-game rule also treats a seller's game as the feed's when the same room, date and sport name the same opponent and the seller's title does not say men's or women's differently, whatever the start.
   - (b) Leave the two-hour rule as is.
6. **The boxing card in the stadium's place.**
   - **(a) Lean:** leave it. One card, and the seller gives no room inside the park.
   - (b) A rule for parks with several rooms: a seller listing that names only the park takes the smallest room that fits the sport.

Doors versus show times (27 rows) are recorded, not proposed: a fixed offset per room would be a hand-tuned number for Los Angeles.

## Rooms (census order)

"Fixed today" rows are listed in the live re-measure, not yet in the catalog. "Not listed" names the cause and count. A blank row count means the census established no dated rows there; that is not zero.

| # | Room | Census capacity | App record | Census status | Rows | Listed | Fixed today | By design | Not listed (cause) |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Empire Polo Club | 125,000 | `empire-polo-club` | Read | 4 | 0 |  | 1 | AXS 3 |
| 2 | LA Memorial Coliseum | 93,607 | `coliseum` | Read; kickoff TBA for one game | 18 | 2 |  | 16 |  |
| 3 | Rose Bowl | 89,702 | `rose-bowl` | Partial | 9 | 2 |  | 7 |  |
| 4 | SoFi Stadium | 70,240 | `sofi-stadium` | Partial | 8 | 5 |  | 3 |  |
| 5 | Dodger Stadium | 56,000 | `dodger-stadium` | Partial | 7 | 0 |  | 7 |  |
| 6 | Angel Stadium | 45,517 | `angel-stadium` | Unread dated public-event calendar | — |  |  |  |  |
| 7 | In-N-Out Burger Pomona Dragstrip | 40,000 | `pomona-dragstrip` | Partial | 4 | 0 | 4 |  |  |
| 8 | Dignity Health Sports Park | 30,510 | `dignity-health-sports-park` | Partial | 2 | 2 |  |  |  |
| 9 | Santa Anita Park | 26,000 | `santa-anita-park` | Partial | 14 | 0 |  | 4 | Box office 10 |
| 10 | BMO Stadium | 24,000 | `bmo-stadium` | Read with linked resident schedule | 1 | 1 |  |  |  |
| 11 | Weingart Stadium | 22,355 | `weingart-stadium` | Unread | — |  |  |  |  |
| 12 | Crypto.com Arena | 18,910 | `crypto-com-arena` | Partial | 26 | 19 |  | 7 |  |
| 13 | Honda Center | 18,900 | `honda-center` | Read | 10 | 10 |  |  |  |
| 14 | Intuit Dome | 18,000 | `intuit-dome` | Partial | 32 | 14 |  | 18 |  |
| 15 | Kia Forum | 17,505 | `kia-forum` | Read | 9 | 9 |  |  |  |
| 16 | Hollywood Bowl | 17,500 | `hollywood-bowl` | Read | 9 | 9 |  |  |  |
| 17 | Stadium 1, Indian Wells Tennis Garden | 16,100 | `indian-wells-stadium-1` | Unread room-specific calendar; campus event assignment unresolved | — |  |  |  |  |
| 18 | Irvine Meadows Amphitheatre | 16,085 | `irvine-meadows-amphitheatre` | Reported closed | — |  |  |  |  |
| 19 | Fairplex | 15,000 | `fairplex-grandstand` | Partial | 5 | 0 |  | 2 | Box office 3 |
| 20 | Long Beach Arena | 14,500 | `long-beach-arena` | Read | — |  |  |  |  |
| 21 | Pauley Pavilion | 13,800 | `pauley-pavilion` | Partial | 16 | 16 |  |  |  |
| 22 | FivePoint Amphitheatre | 12,000 | `fivepoint-amphitheatre` | Reported closed | — |  |  |  |  |
| 23 | Drake Stadium | 11,700 | `drake-stadium` | Unread room-wide calendar | — |  |  |  |  |
| 24 | Veterans Memorial Stadium | 11,600 | `veterans-memorial-stadium` | Unread | — |  |  |  |  |
| 25 | Acrisure Arena | 11,007 | `acrisure-arena` | Read | 23 | 2 |  |  | no seller id 21 |
| 26 | Galen Center | 10,258 | `galen-center` | Partial | 10 | 10 |  |  |  |
| 27 | Titan Stadium | 10,000 | `titan-stadium` | Partial | 1 | 1 |  |  |  |
| 28 | Great Park Live | 10,000 | `great-park-live` | Read | 1 | 0 |  |  | Small platform 1 |
| 29 | Dignity Health Sports Park Tennis Stadium | 8,000 | `dhsp-tennis-stadium` | Partial | 1 | 1 |  |  |  |
| 30 | Stadium 2, Indian Wells Tennis Garden | 8,000 | `indian-wells-stadium-2` | Unread room-specific calendar; campus assignment unresolved | — |  |  |  |  |
| 31 | Pacific Amphitheatre | 7,800 | `pacific-amphitheatre` | Read | — |  |  |  |  |
| 32 | Anaheim Convention Center | 7,500 | `anaheim-convention-center` | Unread dated room calendar | — |  |  |  |  |
| 33 | Peacock Theater | 7,100 | `peacock-theater` | Read | 4 | 3 |  |  | AXS 1 |
| 34 | Irwindale Speedway | 6,500 | `irwindale-speedway` | Official closure notice read | — |  |  |  |  |
| 35 | Shrine Auditorium | 6,300 | `shrine-auditorium` | Unread | — |  |  |  |  |
| 36 | Gibson Amphitheatre | 6,251 | `gibson-amphitheatre` | Reported closed | — |  |  |  |  |
| 37 | Los Alamitos Race Course | 6,000 | `los-alamitos-race-course` | Partial | 1 | 0 |  | 1 |  |
| 38 | YouTube Theater | 6,000 | `youtube-theater` | Read | 11 | 11 |  |  |  |
| 39 | Greek Theatre | 5,900 | `greek-theatre` | Partial | 4 | 4 |  |  |  |
| 40 | Los Angeles Tennis Center | 5,800 | `la-tennis-center` | Unread room-wide calendar; resident tennis schedules read | — |  |  |  |  |
| 41 | Championship Soccer Stadium | 5,500 | `championship-soccer-stadium` | Partial | — |  |  |  |  |
| 42 | Bren Events Center | 5,430 | `bren-events-center` | Partial | 8 | 8 |  |  |  |
| 43 | Shrine Expo Hall | 5,000 | `shrine-expo-hall` | Unread | — |  |  |  |  |
| 44 | LBS Financial Credit Union Pyramid | 5,000 | `walter-pyramid` | Partial | 8 | 8 |  |  |  |
| 45 | Kellogg Arena | 4,765 | `kellogg-arena` | Partial | 3 | 3 |  |  |  |
| 46 | The Hangar | 4,500 | `the-hangar-lancaster` | Partial | — |  |  |  |  |
| 47 | Starlight Bowl | 4,200 | `starlight-bowl` | Read | — |  |  |  |  |
| 48 | Gersten Pavilion | 4,156 | `gersten-pavilion` | Partial | 8 | 8 |  |  |  |
| 49 | Hollywood Palladium | 4,000 | `hollywood-palladium` | Partial | 7 | 7 |  |  |  |
| 50 | Titan Gym | 4,000 | `titan-gym` | Partial | 11 | 11 |  |  |  |
| 51 | Fantasy Springs Resort Casino | 3,700 | `fantasy-springs-special-events-center` | Partial | 4 | 0 |  |  | Etix 4 |
| 52 | University Gym | 3,540 | `cal-state-la-university-gym` | Partial | 4 | 4 |  |  |  |
| 53 | Goodwin Field | 3,500 | `goodwin-field` | Partial | — |  |  |  |  |
| 54 | Dolby Theatre | 3,400 | `dolby-theatre` | Read | 9 | 9 |  |  |  |
| 55 | Felix Event Center | 3,344 | `felix-event-center` | Partial | 3 | 3 |  |  |  |
| 56 | Dorothy Chandler Pavilion | 3,200 | `dorothy-chandler-pavilion` | Partial | 6 | 0 |  |  | Box office 6 |
| 57 | Firestone Fieldhouse | 3,104 | `firestone-fieldhouse` | Partial | 9 | 9 |  |  |  |
| 58 | Terrace Theater | 3,052 | `terrace-theater-long-beach` | Unread | — |  |  |  |  |
| 59 | Pasadena Civic Auditorium | 2,997 | `pasadena-civic-auditorium` | Unread | — |  |  |  |  |
| 60 | Segerstrom Hall | 2,994 | `segerstrom-hall` | Unread | — |  |  |  |  |
| 61 | Torodome | 2,802 | `torodome` | Partial | — |  |  |  |  |
| 62 | Pantages Theatre | 2,703 | `hollywood-pantages-theatre` | Read | 27 | 27 |  |  |  |
| 63 | Mabel Shaw Bridges Music Auditorium | 2,494 | `bridges-auditorium` | Unread | — |  |  |  |  |
| 64 | The Novo by Microsoft | 2,300 | `the-novo` | Unread | — |  |  |  |  |
| 65 | Premier America Credit Union Arena | 2,300 | `premier-america-credit-union-arena` | Partial | 4 | 4 |  |  |  |
| 66 | Walt Disney Concert Hall | 2,265 | `walt-disney-concert-hall` | Partial | 5 | 0 |  |  | Box office 5 |
| 67 | The Show | 2,057 | `the-show-agua-caliente` | Unread | — |  |  |  |  |
| 68 | Segerstrom Concert Hall | 2,000 | `segerstrom-concert-hall` | Partial | 5 | 0 |  |  | Box office 5 |
| 69 | Eddy D. Field Stadium | 2,000 | `eddy-d-field-stadium` | Partial | — |  |  |  |  |
| 70 | Tari Frahm Rokus Field | 2,000 | `tari-frahm-rokus-field` | Partial | — |  |  |  |  |
| 71 | Fox Theater Pomona | 2,000 | `fox-theater-pomona` | Read | 8 | 0 | 6 |  | AXS 2 |
| 72 | Orpheum Theatre | 1,976 | `orpheum-theatre-los-angeles` | Read | 7 | 7 |  |  |  |
| 73 | Saban Theatre | 1,897 | `saban-theatre` | Unread | — |  |  |  |  |
| 74 | OC Fair Action Sports Arena | 1,888 | `oc-fair-action-sports-arena` | Partial | — |  |  |  |  |
| 75 | The Wiltern | 1,850 | `wiltern` | Partial | 21 | 21 |  |  |  |
| 76 | Royce Hall | 1,825 | `royce-hall` | Unread | — |  |  |  |  |
| 77 | Thousand Oaks Civic Arts Plaza | 1,800 | `fred-kavli-theatre` | Read | 14 | 14 |  |  |  |
| 78 | Cerritos Center for the Performing Arts | 1,721 | `cerritos-center` | Read | 13 | 13 |  |  |  |
| 79 | The Soraya | 1,700 | `the-soraya` | Read | 6 | 1 |  |  | Box office 5 |
| 80 | The Grove of Anaheim | 1,700 | `city-national-grove-of-anaheim` | Read | 5 | 5 |  |  |  |
| 81 | House of Blues Anaheim | 1,700 | `house-of-blues-anaheim` | Unread | — |  |  |  |  |
| 82 | The United Theater on Broadway | 1,647 | `united-theater-on-broadway` | Read | 6 | 4 |  |  | Box office 2 |
| 83 | Oxnard Performing Arts Center | 1,604 | `oxnard-performing-arts-center` | Read | 3 | 0 |  |  | AXS 3 |
| 84 | Warner Grand Theatre | 1,525 | `warner-grand-theatre` | Reported closed | — |  |  |  |  |
| 85 | The Bellwether | 1,500 | `the-bellwether` | Read | 10 | 10 |  |  |  |
| 86 | The Belasco | 1,500 | `belasco` | Partial | 10 | 9 |  |  | Small platform 1 |
| 87 | Gilbert Arena | 1,500 | `gilbert-arena` | Partial | — |  |  |  |  |
| 88 | Mayan Theatre | 1,492 | `the-mayan` | Unread | — |  |  |  |  |
| 89 | Redondo Beach Performing Arts Center | 1,453 | `redondo-beach-performing-arts-center` | Unread | — |  |  |  |  |
| 90 | Haugh Performing Arts Center | 1,440 | `haugh-performing-arts-center` | Partial | 6 | 0 |  |  | Box office 6 |
| 91 | Alex Theatre | 1,413 | `alex-theatre` | Partial | 3 | 0 |  |  | Box office 3 |
| 92 | San Gabriel Mission Playhouse | 1,387 | `san-gabriel-mission-playhouse` | Partial | 1 | 0 |  |  | Box office 1 |
| 93 | Wilshire Ebell Theatre | 1,266 | `wilshire-ebell-theatre` | Partial | 4 | 1 |  |  | Small platform 3 |
| 94 | La Mirada Theatre for the Performing Arts | 1,261 | `la-mirada-theatre` | Partial | 2 | 2 |  |  |  |
| 95 | Ambassador Auditorium | 1,232 | `ambassador-auditorium` | Partial | 2 | 0 |  |  | Box office 2 |
| 96 | Fonda Theatre | 1,200 | `fonda-theatre` | Unread | — |  |  |  |  |
| 97 | The Vermont | 1,200 | `the-vermont-hollywood` | Partial | 1 | 0 |  |  | Box office 1 |
| 98 | The Ford | 1,200 | `the-ford` | Unread | — |  |  |  |  |
| 99 | Exchange LA | 1,150 | `exchange-la` | Partial | 9 | 8 |  |  | Small platform 1 |
| 100 | OC Fair Hangar | 1,150 | `oc-fair-hangar` | Partial | — |  |  |  |  |
| 101 | McCallum Theatre | 1,127 | `mccallum-theatre` | Read | 21 | 9 |  |  | Box office 12 |
| 102 | House of Blues Anaheim, Downtown Disney | 1,100 | `house-of-blues-anaheim-downtown-disney` | Reported closed | — |  |  |  |  |
| 103 | Avalon | 1,100 | `avalon-hollywood` | Read | 7 | 6 |  |  | Small platform 1 |
| 104 | Regent Theater | 1,100 | `regent-theater` | Read | 19 | 19 |  |  |  |
| 105 | Palace Theatre | 1,068 | `palace-theatre-los-angeles` | Unread | — |  |  |  |  |
| 106 | Carpenter Performing Arts Center | 1,054 | `carpenter-performing-arts-center` | Partial | 13 | 0 |  |  | Box office 13 |
| 107 | Musco Center for the Arts | 1,044 | `musco-center` | Unread | — |  |  |  |  |
| 108 | Soka Performing Arts Center | 1,032 | `soka-performing-arts-center` | Read | 4 | 0 |  |  | Box office 4 |
| 109 | George C. Page Stadium | 1,000 | `george-c-page-stadium` | Partial | — |  |  |  |  |
| 110 | Kellogg Stadium | 1,000 | `kellogg-stadium` | Partial | — |  |  |  |  |
| 111 | The Observatory Orange County | 1,000 | `observatory-orange-county` | Partial | 7 | 7 |  |  |  |
| 112 | Yost Theatre | 1,000 | `yost-theater` | Unread | — |  |  |  |  |
| 113 | Majestic Ventura Theater | 1,000 | `ventura-theater` | Read | 4 | 4 |  |  |  |
| 114 | Libbey Bowl | 973 | `libbey-bowl` | Partial | 2 | 2 |  |  |  |
| 115 | Cicerone Field at Anteater Ballpark | 908 | `anteater-ballpark` | Partial | — |  |  |  |  |
| 116 | Zipper Concert Hall | 415 | `zipper-hall` | Read | 6 | 0 |  |  | Box office 4, Small platform 2 |

## Rows not listed (by design rows left out; the CSV has every row)

| # | Room | Date | Room's start | Act (room) | Seller | Cause |
|---|---|---|---|---|---|---|
| 1 | Empire Polo Club | 2026-11-20 | 17:30 | MAGIC OF LIGHTS | AXS | AXS |
| 1 | Empire Polo Club | 2026-11-21 | 17:30 | MAGIC OF LIGHTS | AXS | AXS |
| 1 | Empire Polo Club | 2026-11-22 | 17:30 | MAGIC OF LIGHTS | AXS | AXS |
| 7 | In-N-Out Burger Pomona Dragstrip | 2026-11-12 | 08:30 | In-N-Out Burger NHRA Finals | NHRA Ticket Office / eVenue | Fixed today (In-N-Out Burger NHRA Finals) |
| 7 | In-N-Out Burger Pomona Dragstrip | 2026-11-13 | 08:30 | In-N-Out Burger NHRA Finals | NHRA Ticket Office / eVenue | Fixed today (In-N-Out Burger NHRA Finals) |
| 7 | In-N-Out Burger Pomona Dragstrip | 2026-11-14 | 08:30 | In-N-Out Burger NHRA Finals | NHRA Ticket Office / eVenue | Fixed today (In-N-Out Burger NHRA Finals) |
| 7 | In-N-Out Burger Pomona Dragstrip | 2026-11-15 | 10:00 | In-N-Out Burger NHRA Finals | NHRA Ticket Office / eVenue | Fixed today (In-N-Out Burger NHRA Finals) |
| 9 | Santa Anita Park | 2026-11-11 | Unknown — daily start unread | Split Rock Jumping Tour | Santa Anita Show Jumping ticket portal | Box office |
| 9 | Santa Anita Park | 2026-11-12 | Unknown — daily start unread | Split Rock Jumping Tour | Santa Anita Show Jumping ticket portal | Box office |
| 9 | Santa Anita Park | 2026-11-13 | Unknown — daily start unread | Split Rock Jumping Tour | Santa Anita Show Jumping ticket portal | Box office |
| 9 | Santa Anita Park | 2026-11-14 | Unknown — daily start unread | Split Rock Jumping Tour | Santa Anita Show Jumping ticket portal | Box office |
| 9 | Santa Anita Park | 2026-11-15 | Unknown — daily start unread | Split Rock Jumping Tour | Santa Anita Show Jumping ticket portal | Box office |
| 9 | Santa Anita Park | 2026-11-18 | Unknown — daily start unread | Split Rock Jumping Tour | Santa Anita Show Jumping ticket portal | Box office |
| 9 | Santa Anita Park | 2026-11-19 | Unknown — daily start unread | Split Rock Jumping Tour | Santa Anita Show Jumping ticket portal | Box office |
| 9 | Santa Anita Park | 2026-11-20 | Unknown — daily start unread | Split Rock Jumping Tour | Santa Anita Show Jumping ticket portal | Box office |
| 9 | Santa Anita Park | 2026-11-21 | Unknown — daily start unread | Split Rock Jumping Tour | Santa Anita Show Jumping ticket portal | Box office |
| 9 | Santa Anita Park | 2026-11-22 | Unknown — daily start unread | Split Rock Jumping Tour | Santa Anita Show Jumping ticket portal | Box office |
| 19 | Fairplex | 2026-11-06 | TBA (organizer) | Cali Cup | Green Banner Event Co. direct | Box office |
| 19 | Fairplex | 2026-11-07 | TBA (organizer) | Cali Cup | Green Banner Event Co. direct | Box office |
| 19 | Fairplex | 2026-11-08 | TBA (organizer) | Cali Cup | Green Banner Event Co. direct | Box office |
| 25 | Acrisure Arena | 2026-10-28 | 19:00 | Coachella Valley Firebirds vs. Tucson Roadrunners | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-10-30 | 19:00 | CV Firebirds vs. Henderson Silver Knights: Dia De Los Muertos | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-10-31 | 19:00 | The B-52s * DEVO | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-04 | 19:00 | Coachella Valley Firebirds vs. Colorado Eagles | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-06 | 19:00 | Coachella Valley Lakers vs Salt Lake City Stars | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-09 | 19:00 | Coachella Valley Lakers vs San Diego Clippers | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-10 | 19:00 | Coachella Valley Lakers vs San Diego Clippers | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-12 | 19:00 | Coachella Valley Firebirds vs. San Jose Barracuda | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-13 | 20:00 | Los Tigres del Norte | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-14 | 19:00 | 90's Corridos Tour | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-15 | 15:00 | Coachella Valley Firebirds vs. Abbotsford Canucks: Cancer Awareness | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-17 | 19:30 | Jonas Brothers | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-19 | 19:00 | Coachella Valley Lakers vs Stockton Kings | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-20 | 19:00 | Coachella Valley Lakers vs Stockton Kings | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-21 | 11:00 | Fordham vs. Portland | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-21 | 13:30 | UC Irvine vs. San Diego | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-21 | 20:00 | Acrisure Series Duke vs WSU | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-22 | 11:00 | San Diego vs. Fordham | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-22 | 13:30 | UC Irvine vs. Loyola Marymount | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-22 | 18:30 | Seattle vs. UC San Diego | Ticketmaster | Acrisure |
| 25 | Acrisure Arena | 2026-11-22 | 21:00 | San José State vs. Loyola Chicago | Ticketmaster | Acrisure |
| 28 | Great Park Live | 2026-11-07 | 14:00 (admission) | Dial Up Festvial | TicketSpice / Coda Entertainment | Small platform |
| 33 | Peacock Theater | 2026-11-22 | 19:00 | Sing Yerevan Sing | AXS | AXS |
| 51 | Fantasy Springs Resort Casino | 2026-11-07 | 20:00 | FELIPE ESPARZA: LAUGHTER WILL SAVE US | Etix | Etix |
| 51 | Fantasy Springs Resort Casino | 2026-11-14 | 20:00 | ALICE COOPER – ALICE’S ATTIC TOUR | Etix | Etix |
| 51 | Fantasy Springs Resort Casino | 2026-11-20 | Unknown | Golden Boy Boxing | Etix | Etix |
| 51 | Fantasy Springs Resort Casino | 2026-11-22 | 20:00 | LOS DOS DE TAMAULIPAS | Etix | Etix |
| 56 | Dorothy Chandler Pavilion | 2026-10-27 | 19:30 | Carmen | LA Opera | Box office |
| 56 | Dorothy Chandler Pavilion | 2026-10-29 | 19:30 | Carmen | LA Opera | Box office |
| 56 | Dorothy Chandler Pavilion | 2026-11-01 | 14:00 | Carmen | LA Opera | Box office |
| 56 | Dorothy Chandler Pavilion | 2026-11-04 | 19:30 | Carmen | LA Opera | Box office |
| 56 | Dorothy Chandler Pavilion | 2026-11-07 | 19:30 | Carmen | LA Opera | Box office |
| 56 | Dorothy Chandler Pavilion | 2026-11-21 | 19:30 | Candide | LA Opera | Box office |
| 66 | Walt Disney Concert Hall | 2026-10-27 | 20:00 | Orchestre Symphonique de Montréal with Rafael Payare | LA Phil | Box office |
| 66 | Walt Disney Concert Hall | 2026-10-29 | 20:00 | Seasons of America with Teddy Abrams & Ray Chen | LA Phil | Box office |
| 66 | Walt Disney Concert Hall | 2026-10-30 | 20:00 | Lila Downs | LA Phil | Box office |
| 66 | Walt Disney Concert Hall | 2026-11-01 | Unknown | Seasons of America with Teddy Abrams & Ray Chen | LA Phil | Box office |
| 66 | Walt Disney Concert Hall | 2026-11-21 | 20:00 | Symphonic Euphoria: Prokofiev, Messiaen, and Scriabin | LA Phil | Box office |
| 68 | Segerstrom Concert Hall | 2026-11-06 | 20:00 | Idina Menzel | Pacific Symphony | Box office |
| 68 | Segerstrom Concert Hall | 2026-11-07 | 20:00 | Idina Menzel | Pacific Symphony | Box office |
| 68 | Segerstrom Concert Hall | 2026-11-19 | 20:00 | Nobu Plays Rachmaninoff’s Mighty Third | Pacific Symphony | Box office |
| 68 | Segerstrom Concert Hall | 2026-11-20 | 20:00 | Nobu Plays Rachmaninoff’s Mighty Third | Pacific Symphony | Box office |
| 68 | Segerstrom Concert Hall | 2026-11-21 | 20:00 | Nobu Plays Rachmaninoff’s Mighty Third | Pacific Symphony | Box office |
| 71 | Fox Theater Pomona | 2026-10-26 | 20:00 | Animal Collective | AXS | Fixed today (Animal Collective) |
| 71 | Fox Theater Pomona | 2026-10-28 | 20:00 | Fastball | AXS | Fixed today (Fastball) |
| 71 | Fox Theater Pomona | 2026-10-29 | 18:30 | It’s The Great Pumpkin Charlie Brown Jazz & Movie | AXS | Fixed today (Its The Great Pumpkin Charlie Brown) |
| 71 | Fox Theater Pomona | 2026-11-06 | 20:00 | Cumbia en el Cielo | AXS | AXS |
| 71 | Fox Theater Pomona | 2026-11-08 | 20:00 | The Story So Far | AXS | Fixed today (The Story So Far) |
| 71 | Fox Theater Pomona | 2026-11-14 | 19:00 | Just Love Me Right | AXS | Fixed today (Just Love Me Right) |
| 71 | Fox Theater Pomona | 2026-11-21 | 19:00 | Wish You Were Here | AXS | AXS |
| 71 | Fox Theater Pomona | 2026-11-22 | 17:00 | SugaKane The Homecoming | AXS | Fixed today (SugaKane) |
| 79 | The Soraya | 2026-11-01 | 15:00 | Duck Pond by Circa | The Soraya Ticket Office | Box office |
| 79 | The Soraya | 2026-11-05 | 20:00 | Nemanja Radulović & Double Sens — Onstage Classical | The Soraya Ticket Office | Box office |
| 79 | The Soraya | 2026-11-14 | 20:00 | Dance Theatre of Harlem — Higher Ground | The Soraya Ticket Office | Box office |
| 79 | The Soraya | 2026-11-21 | 20:00 | DIAVOLO — Escape | The Soraya Ticket Office | Box office |
| 79 | The Soraya | 2026-11-22 | 15:00 | DIAVOLO — Escape | The Soraya Ticket Office | Box office |
| 82 | The United Theater on Broadway | 2026-10-30 | 20:00 | Hercules vs. Vampires | LA Opera | Box office |
| 82 | The United Theater on Broadway | 2026-10-31 | 20:00 | Hercules VS. Vampires | LA Opera | Box office |
| 83 | Oxnard Performing Arts Center | 2026-11-12 | 20:00 | The Psychedelic Furs | AXS | AXS |
| 83 | Oxnard Performing Arts Center | 2026-11-14 | 20:00 | MicroMania Presents Midget Wrestling | AXS | AXS |
| 83 | Oxnard Performing Arts Center | 2026-11-21 | Unknown | Mariachi Sol De Mexico presents “Jose Hernandez’ Merry-Achi Christmas” | AXS | AXS |
| 86 | The Belasco | 2026-10-28 | Unknown | Janky Smooth presents Half Way Crooks w/ DJ Murd3rbunny | Universe | Small platform |
| 90 | Haugh Performing Arts Center | 2026-10-30 | 19:00 | Sweeney Todd | Haugh Performing Arts Center Box Office | Box office |
| 90 | Haugh Performing Arts Center | 2026-10-31 | Unknown | Sweeney Todd | Haugh Performing Arts Center Box Office | Box office |
| 90 | Haugh Performing Arts Center | 2026-11-01 | Unknown | Sweeney Todd | Haugh Performing Arts Center Box Office | Box office |
| 90 | Haugh Performing Arts Center | 2026-11-06 | 19:00 | An Evening of Music From Film: The Music of Action Heroes | Haugh Performing Arts Center Box Office | Box office |
| 90 | Haugh Performing Arts Center | 2026-11-10 | 19:00 | Blue Note Jazz Orchestra | Haugh Performing Arts Center Box Office | Box office |
| 90 | Haugh Performing Arts Center | 2026-11-14 | 19:00 | REZA: Edge of Illusion | Haugh Performing Arts Center Box Office | Box office |
| 91 | Alex Theatre | 2026-11-05 | 18:30 | Wild Horse Nine | The Alex Cinema | Box office |
| 91 | Alex Theatre | 2026-11-05 | 21:00 | Wild Horse Nine | The Alex Cinema | Box office |
| 91 | Alex Theatre | 2026-11-12 | 19:20 | Wild Horse Nine | The Alex Cinema | Box office |
| 92 | San Gabriel Mission Playhouse | 2026-11-01 | 16:00 | Mariachi Los Camperos | Mission Playhouse Box Office | Box office |
| 93 | Wilshire Ebell Theatre | 2026-10-29 | 18:00 | Young Storytellers: The Biggest Show | Eventbrite | Small platform |
| 93 | Wilshire Ebell Theatre | 2026-11-06 | 19:00 | Freestyle: A Love Story | Humanitix | Small platform |
| 93 | Wilshire Ebell Theatre | 2026-11-14 | 19:00 | El Sentido | Eventbrite | Small platform |
| 95 | Ambassador Auditorium | 2026-11-14 | 14:00 | Beethoven Symphony No. 7 | Pasadena Symphony & Pops | Box office |
| 95 | Ambassador Auditorium | 2026-11-14 | 20:00 | Beethoven Symphony No. 7 | Pasadena Symphony & Pops | Box office |
| 97 | The Vermont | 2026-11-12 | 19:30 | Sina Bathaie — White Lotus World Tour: Back Together \ | Los Angeles | Box office |
| 99 | Exchange LA | 2026-10-29 | Unknown | Hanami Halloween | Posh | Small platform |
| 101 | McCallum Theatre | 2026-11-04 | 19:00 | Tom Papa — Grateful Bread Tour | McCallum Theatre Box Office | Box office |
| 101 | McCallum Theatre | 2026-11-05 | 20:00 | In Conversation With... RITA MORENO — Joined by CBS Sunday Morning’s MO ROCCA | McCallum Theatre Box Office | Box office |
| 101 | McCallum Theatre | 2026-11-06 | 20:00 | Hercules vs. Vampires | McCallum Theatre Box Office | Box office |
| 101 | McCallum Theatre | 2026-11-08 | 18:00 | Cheyenne Jackson — That Guy from That Thing | McCallum Theatre Box Office | Box office |
| 101 | McCallum Theatre | 2026-11-10 | 19:00 | THE HIT MEN — The Ultimate Rock Concert | McCallum Theatre Box Office | Box office |
| 101 | McCallum Theatre | 2026-11-14 | 19:00 | Palm Desert Choreography Festival | McCallum Theatre Box Office | Box office |
| 101 | McCallum Theatre | 2026-11-15 | 16:00 | Palm Desert Choreography Festival | McCallum Theatre Box Office | Box office |
| 101 | McCallum Theatre | 2026-11-17 | 19:00 | McCallum Cabaret — Debby Boone | McCallum Theatre Box Office | Box office |
| 101 | McCallum Theatre | 2026-11-19 | 19:00 | The Carpenters Songbook — A Live Celebration | McCallum Theatre Box Office | Box office |
| 101 | McCallum Theatre | 2026-11-20 | 14:00 | The Carpenters Songbook — A Live Celebration | McCallum Theatre Box Office | Box office |
| 101 | McCallum Theatre | 2026-11-20 | 20:00 | The Carpenters Songbook — A Live Celebration | McCallum Theatre Box Office | Box office |
| 101 | McCallum Theatre | 2026-11-22 | Unknown | Palm Springs Desert Winds Presents — Stronger Together - Music of Hope & Resilience | McCallum Theatre Box Office | Box office |
| 103 | Avalon | 2026-11-15 | Unknown | INNA | Show Impulse | Small platform |
| 106 | Carpenter Performing Arts Center | 2026-11-06 | 19:00 | Little Women | Musical Theatre West | Box office |
| 106 | Carpenter Performing Arts Center | 2026-11-07 | 19:00 | Little Women | Musical Theatre West | Box office |
| 106 | Carpenter Performing Arts Center | 2026-11-08 | 13:00 | Little Women | Musical Theatre West | Box office |
| 106 | Carpenter Performing Arts Center | 2026-11-12 | 19:00 | Little Women | Musical Theatre West | Box office |
| 106 | Carpenter Performing Arts Center | 2026-11-13 | 19:00 | Little Women | Musical Theatre West | Box office |
| 106 | Carpenter Performing Arts Center | 2026-11-14 | 14:00 | Little Women | Musical Theatre West | Box office |
| 106 | Carpenter Performing Arts Center | 2026-11-14 | 19:00 | Little Women | Musical Theatre West | Box office |
| 106 | Carpenter Performing Arts Center | 2026-11-15 | 13:00 | Little Women | Musical Theatre West | Box office |
| 106 | Carpenter Performing Arts Center | 2026-11-15 | 18:00 | Little Women | Musical Theatre West | Box office |
| 106 | Carpenter Performing Arts Center | 2026-11-20 | 19:00 | Little Women | Musical Theatre West | Box office |
| 106 | Carpenter Performing Arts Center | 2026-11-21 | 14:00 | Little Women | Musical Theatre West | Box office |
| 106 | Carpenter Performing Arts Center | 2026-11-21 | 19:00 | Little Women | Musical Theatre West | Box office |
| 106 | Carpenter Performing Arts Center | 2026-11-22 | 13:00 | Little Women | Musical Theatre West | Box office |
| 108 | Soka Performing Arts Center | 2026-11-12 | Unknown | National Philanthropy Day 2026 \ | Presented by AFP Orange County | Box office |
| 108 | Soka Performing Arts Center | 2026-11-15 | 15:00 | Orange County Youth Symphony & String Ensemble Fall Concert | Soka Performing Arts Center / Tickets.com | Box office |
| 108 | Soka Performing Arts Center | 2026-11-21 | 20:00 | Emi Ferguson & Ruckus “Fly the Coop”: Bach Sonatas and Preludes | Soka Performing Arts Center / Tickets.com | Box office |
| 108 | Soka Performing Arts Center | 2026-11-22 | 15:00 | Pacific Symphony: Bach & Beethoven with Alexander Shelley, cond. | Soka Performing Arts Center / Tickets.com | Box office |
| 116 | Zipper Concert Hall | 2026-11-01 | 17:00 | See the Music, Hear the Dance | Colburn Tickets | Box office |
| 116 | Zipper Concert Hall | 2026-11-07 | 17:30 | Candlelight Presents: Tribute to Whitney Houston | Fever | Small platform |
| 116 | Zipper Concert Hall | 2026-11-07 | 19:45 | Candlelight Presents: Tribute to Taylor Swift | Fever | Small platform |
| 116 | Zipper Concert Hall | 2026-11-12 | 20:00 | Camerata Pacifica Presents Mozart Quintet & World Premiere | Camerata Pacifica | Box office |
| 116 | Zipper Concert Hall | 2026-11-14 | 19:00 | The Sound of Swing: Gary Greene, Esq. and His Big Band of Barristers | Colburn Tickets | Box office |
| 116 | Zipper Concert Hall | 2026-11-19 | 19:30 | LACO Presents: East Meets West | Los Angeles Chamber Orchestra | Box office |

## Listed rows whose start differs from the room's

| # | Room | Date | Room's start | App start | Act (room) | App title |
|---|---|---|---|---|---|---|
| 21 | Pauley Pavilion | 2026-11-14 | 14:00 | 17:00 | Oregon | UCLA Bruins Womens Volleyball vs. Oregon Ducks Womens Volleyball |
| 26 | Galen Center | 2026-11-15 | 16:00 | 19:00 | Arkansas-Pine Bluff | USC Trojans Mens Basketball vs. Arkansas Pine Bluff Golden Lions Mens Basketball |
| 33 | Peacock Theater | 2026-11-21 | 20:00 | 20:01 | El Fantasma | El Fantasma |
| 49 | Hollywood Palladium | 2026-11-11 | 19:30 | 18:30 | Turnover - Down On Earth Tour | Turnover |
| 49 | Hollywood Palladium | 2026-11-12 | 19:00 | 18:00 | Sabaton: Legends on Tour | Sabaton |
| 49 | Hollywood Palladium | 2026-11-13 | 18:30 | 17:30 | Underoath - Define the Great Line 20th Anniversary Tour | Underoath |
| 49 | Hollywood Palladium | 2026-11-20 | 20:00 | 19:00 | Rhye | Rhye |
| 62 | Pantages Theatre | 2026-10-31 | 20:00 | 14:00 | THE WHO’S TOMMY | The Who's Tommy (Touring) |
| 62 | Pantages Theatre | 2026-11-01 | 18:30 | 13:00 | THE WHO’S TOMMY | The Who's Tommy (Touring) |
| 62 | Pantages Theatre | 2026-11-07 | 20:00 | 14:00 | THE WHO’S TOMMY | The Who's Tommy (Touring) |
| 62 | Pantages Theatre | 2026-11-08 | 18:30 | 13:00 | THE WHO’S TOMMY | The Who's Tommy (Touring) |
| 62 | Pantages Theatre | 2026-11-14 | 20:00 | 14:00 | THE WHO’S TOMMY | The Who's Tommy (Touring) |
| 62 | Pantages Theatre | 2026-11-15 | 18:30 | 13:00 | THE WHO’S TOMMY | The Who's Tommy (Touring) |
| 75 | The Wiltern | 2026-10-26 | 20:00 | 19:00 | The Rocky Horror Picture Show Spooktacular Tour with Barry Bostwick | The Rocky Horror Picture Show Spooktacular Tour with Barry Bostwick |
| 75 | The Wiltern | 2026-10-27 | 20:00 | 19:00 | CHIEF KEEF | Chief Keef |
| 75 | The Wiltern | 2026-10-28 | 18:00 | 17:00 | Lenny Pearce - Toddler Rave World Tour | Lenny Pearce |
| 75 | The Wiltern | 2026-10-29 | 20:00 | 19:00 | Slow Pulp | Slow Pulp |
| 75 | The Wiltern | 2026-10-30 | 20:00 | 19:00 | Daði Freyr | Daði Freyr |
| 75 | The Wiltern | 2026-11-02 | 20:00 | 19:00 | Todd Rundgren | Todd Rundgren |
| 75 | The Wiltern | 2026-11-03 | 20:00 | 19:00 | Jose Madero - USA Tour 2026 | José Madero |
| 75 | The Wiltern | 2026-11-05 | 20:00 | 19:00 | ALVARO DIAZ - OMAKASE TOUR | Alvaro Diaz |
| 75 | The Wiltern | 2026-11-06 | 20:00 | 19:00 | Bad Gyal - Más Cara World Tour 2026 | Bad Gyal |
| 75 | The Wiltern | 2026-11-08 | 20:00 | 19:00 | Buena Vista Orchestra | Buena Vista Orchestra |
| 75 | The Wiltern | 2026-11-11 | 20:00 | 19:00 | KCRW Presents Bonobo: Distance in Static Live North American Tour | Bonobo |
| 75 | The Wiltern | 2026-11-12 | 20:00 | 19:00 | KCRW Presents Bonobo: Distance in Static Live North American Tour | Bonobo |
| 75 | The Wiltern | 2026-11-13 | 20:00 | 19:00 | Ólafur Arnalds | Ólafur Arnalds |
| 75 | The Wiltern | 2026-11-14 | 20:00 | 19:00 | L7: The Last Hurrah Tour 2026 | L7 |
| 75 | The Wiltern | 2026-11-15 | 20:00 | 19:00 | Leonid & Friends | Leonid & Friends |
| 75 | The Wiltern | 2026-11-17 | 20:00 | 19:00 | THE DAMNED - FINAL DAMNATION 50 | The Damned |
| 78 | Cerritos Center for the Performing Arts | 2026-11-21 | 18:00 | 14:00 | Sesame Street Live: Elmo’s Got the Moves! | Elmo's Got the Moves |
| 94 | La Mirada Theatre for the Performing Arts | 2026-11-08 | 18:30 | 13:30 | Dear Evan Hansen | La Mirada Theatre presents: Dear Evan Hansen |
| 101 | McCallum Theatre | 2026-10-30 | 20:00 | 14:00 | & Juliet | & Juliet (Touring) |
| 101 | McCallum Theatre | 2026-10-31 | 20:00 | 14:00 | & Juliet | & Juliet (Touring) |
| 111 | The Observatory Orange County | 2026-10-28 | 20:00 | 19:00 | Montell Fish - The Nest Tour | Montell Fish |
| 111 | The Observatory Orange County | 2026-10-29 | 20:00 | 19:00 | Xavier Wulf Presents: The Cool World Tour | Xavier Wulf |
| 111 | The Observatory Orange County | 2026-10-30 | 20:00 | 19:00 | The Black Angels: Passover 2026 Tour | The Black Angels |
| 111 | The Observatory Orange County | 2026-10-31 | 19:00 | 18:00 | Catch Your Breath - Not Broken Enough Tour | Catch Your Breath |
| 111 | The Observatory Orange County | 2026-11-06 | 20:00 | 19:00 | SOB X RBE | SOB X RBE |
| 111 | The Observatory Orange County | 2026-11-07 | 20:30 | 19:30 | Paul Cauthen | Paul Cauthen |
| 111 | The Observatory Orange County | 2026-11-12 | 20:00 | 19:00 | Aterciopelados: La Pipa De La Paz 30 Años Tour | Aterciopelados |
