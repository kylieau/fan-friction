# Event types and naming — every combination

- Checked against fan-friction main at commit 635a164 (main has not moved; verified Oct 14, 2026, 1:23 AM PT).
- Counts = the 40 city archive files for Oct 13, 2026 (1,475 events). "0" means none that day (the type still exists).
- Chip and row text in Table 2 were produced by running the app's own mapTitle/listTitle code on the archived events and hand seeds. Rows marked "simulated" used a made-up event because the data had no example.
- Jargon: **kind** = the top-level type (game, show, festival, live-broadcast, special). **tag/genre** = the finer word from Ticketmaster. **chip** = the label on the map pin. **row** = the line in lists and the event page title. **stakes** = playoff round + game number. **neutral site** = neither team's home building.

## Table 1 — Every event type


### A. Kind (the top-level type)

| Where it comes from | Internal key | Event page "Type" | Icon | Oct 13 count | Plain-English note | Ref |
|---|---|---|---|---|---|---|
| ESPN, MLB, HockeyTech, TM Sports (listed venues only), hand list | kind = game | the sport word (see section B) | the sport icon, else ticket | 427 | A game never shows "Game"; the Type line names the sport instead. | pL:214-221, 493-497; tI:30-35 |
| Ticketmaster segment "Music" | kind = show | Concert | music note | 745 | The Add form calls this "Show"; the event page calls it "Concert". | tm:157-158; pL:218; AE:34-40 |
| hand seed only (no feed makes it) | kind = festival | Festival | flag | 0 | Only hand seeds (ComplexCon, FIFA Fan Festival, Union Station Fan Zone). TM festivals arrive as show or special. | pL:215; tI:33 |
| hand log entry only | kind = live-broadcast | Live Broadcast | ticket (fallback) | 0 | No icon of its own. Stub rows spell it "Live broadcast" (lowercase b). | pL:216, 558; kL:288 |
| TM Arts & Theatre, Miscellaneous, Film, any unknown segment; hand list | kind = special | Special | ticket | 303 | The catch-all. What lands in it is broken out in section D. | tm:159-166; pL:217 |

### B. Sports (kind = game, domain = sports)

| Where it comes from | Internal key | Event page "Type" | Icon | Oct 13 count | Plain-English note | Ref |
|---|---|---|---|---|---|---|
| ESPN (nhl, mens-college-hockey) | sport = hockey | Hockey | hockey (sticks + puck) | 110 | Proper label. | pL:199-208; tI:11-19 |
| HockeyTech (AHL/ECHL/OHL etc.) | sport = hockey | Hockey | hockey (sticks + puck) | 30 | Proper label. | pL:199-208; tI:11-19 |
| Ticketmaster (listed venues) | sport = hockey | Hockey | hockey (sticks + puck) | 11 | Proper label. | pL:199-208; tI:11-19 |
| hand seed | sport = hockey | Hockey | hockey (sticks + puck) | 0 | Proper label. | pL:199-208; tI:11-19 |
| ESPN (nba, wnba, nba-development, college M/W) | sport = basketball | Basketball | basketball | 72 | Proper label. On a hand log entry with sport "WNBA" the Type reads "Women's basketball". | pL:199-208; tI:11-19 |
| Ticketmaster | sport = basketball | Basketball | basketball | 2 | Proper label. | pL:199-208; tI:11-19 |
| ESPN (nfl, college-football, cfl, ufl) | sport = football | Football | football | 82 | Proper label. | pL:199-208; tI:11-19 |
| Ticketmaster | sport = football | Football | football | 4 | Proper label. | pL:199-208; tI:11-19 |
| hand list (neutral-site games) | sport = football | Football | football | 0 | Proper label. | pL:199-208; tI:11-19 |
| ESPN (MLS, NWSL, USL, Liga MX) | sport = soccer | Soccer | soccer ball | 74 | Proper label. | pL:199-208; tI:11-19 |
| Ticketmaster | sport = soccer | Soccer | soccer ball | 6 | Proper label. | pL:199-208; tI:11-19 |
| hand seed | sport = soccer | Soccer | soccer ball | 0 | Proper label. | pL:199-208; tI:11-19 |
| MLB Stats API | sport = baseball | Baseball | baseball | 11 | Proper label. | pL:199-208; tI:11-19 |
| ESPN college-baseball | sport = baseball | Baseball | baseball | 0 | Proper label. | pL:199-208; tI:11-19 |
| hand seed | sport = baseball | Baseball | baseball | 0 | Proper label. | pL:199-208; tI:11-19 |
| Ticketmaster (sportOf text match) | sport = boxing | boxing (raw) | ticket | 7 | Shows raw lowercase word "boxing", no label. Example is actually lucha libre (wrestling), matched as boxing from TM text. Example: "Martes Populares de Lucha Libre CMLL". | tm:171-175; pL:207; tI:31 |
| Ticketmaster (sportOf text match) | sport = motorsports | motorsports (raw) | ticket | 5 | Shows raw word "motorsports", no label. Example: "EnduroCross; Monster Jam". | tm:171-175; pL:207; tI:31 |
| Ticketmaster (sportOf text match) | sport = rodeo | rodeo (raw) | ticket | 3 | Shows raw word "rodeo", no label. Example: "PBR Teams: Outlaw Days". | tm:171-175; pL:207; tI:31 |
| Ticketmaster (sportOf text match) | sport = other | other (raw) | ticket | 10 | Shows raw lowercase "other". Volleyball and esports land here. Example: "Texas Longhorns Womens Volleyball vs. Auburn…; Worlds 2026 - Swiss 1". | tm:171-175; pL:207; tI:31 |
| Ticketmaster; ESPN lacrosse/nll | sport = lacrosse | lacrosse (raw) | ticket | 0 | Possible from TM or ESPN lacrosse/nll; would show raw "lacrosse". No icon. | tm:171-175; pL:207; tI:31 |
| Ticketmaster (sportOf text match) | sport = tennis | tennis (raw) | tennis racket | 0 | Has an icon but no events; would show raw "tennis". | tm:171-175; pL:207; tI:31 |
| Ticketmaster (sportOf text match) | sport = cricket | cricket (raw) | ticket | 0 | Possible from TM text match only; raw "cricket". | tm:171-175; pL:207; tI:31 |
| Ticketmaster (sportOf text match) | sport = wrestling | wrestling (raw) | ticket | 0 | Possible from TM text match only; raw "wrestling". | tm:171-175; pL:207; tI:31 |
| Add form (hand-typed entries only) | sport = Volleyball, Softball, … Other (Title Case) | the word as typed | n/a (logs have no map chip) | n/a | Hand entries store Title Case words; feeds store lowercase keys. Two vocabularies. | cp:16-31 |
| Stub row with empty sport | sport = "" → "Sports" | — | — | n/a | Stub fallback word. | pL:550 |

### C. Music genres (kind = show, domain = music)

| Where it comes from | Internal key | Event page "Type" | Icon | Oct 13 count | Plain-English note | Ref |
|---|---|---|---|---|---|---|
| Ticketmaster genre | genre = Rock | Concert | music note | 233 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "Phoebe Bridgers". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Pop | Concert | music note | 91 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "KATSEYE". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Hip-Hop/Rap | Concert | music note | 67 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "$UICIDEBOY$". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Country | Concert | music note | 66 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "Dan + Shay". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Other | Concert | music note | 61 | Either TM's own "Other" genre or the code fallback (genre → segment → "Other"); the archive can't tell which. Type = "Concert". Example: "Vulfpeck". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Dance/Electronic | Concert | music note | 46 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "DJ Meredith Marks". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Latin | Concert | music note | 44 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "Young Miko". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Metal | Concert | music note | 34 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "Five Finger Death Punch". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = R&B | Concert | music note | 24 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "Steve Lacy". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Alternative | Concert | music note | 14 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "Brand New". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = World | Concert | music note | 13 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "Rahat Fateh Ali Khan". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Folk | Concert | music note | 10 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "Jesse Welles". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Religious | Concert | music note | 9 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "CeCe Winans". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Blues | Concert | music note | 9 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "Buddy Guy". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Classical | Concert | music note | 8 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "A.R. Rahman". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Reggae | Concert | music note | 6 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "UB40". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Ballads/Romantic | Concert | music note | 4 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "Estela Nunez". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Undefined | Concert | music note | 3 | TM's own word "Undefined" (not in our code). Often festivals, e.g. "Sick New World", "Niteharts Festival". Type = "Concert". Example: "Sick New World". | tm:286, 305; pL:218 |
| Ticketmaster genre | genre = Jazz | Concert | music note | 3 | TM genre passed through unchanged; never shown. Type = "Concert" for every genre. Example: "Karen Souza". | tm:286, 305; pL:218 |
| hand seeds | genre = rock, pop, metal, classical, hip-hop, classic rock, k-pop, pop rock, latin, electronic, various, folk, hip hop, christian rock, regional mexican | Concert (Festival for ComplexCon) | music note (flag for festival) | 0 | Lowercase seed words. "Rock" vs "rock" and "Hip-Hop/Rap" vs "hip-hop" count as different genres for audience overlap. | seed/*; ov:68 |

### D. "Special" broken out by tag (kind = special, domain = other)

| Where it comes from | Internal key | Event page "Type" | Icon | Oct 13 count | Plain-English note | Ref |
|---|---|---|---|---|---|---|
| Ticketmaster genre | tag = Undefined | Special | ticket | 107 | Biggest Special bucket: TM gave no genre. Shows "Special". Example: "BVD Boston presents BEND OVA ( 21+ )". | tm:159-162, 305 |
| Ticketmaster genre | tag = Theatre | Special | ticket | 51 | Shows "Special"; the tag is never displayed. Example: "Waitress (Touring)". | tm:159-162, 305 |
| Ticketmaster genre | tag = Comedy | Special | ticket | 28 | Shows "Special"; the tag is never displayed. Example: "Sweetest Day Comedy Jam". | tm:159-162, 305 |
| Ticketmaster genre | tag = Circus & Specialty Acts | Special | ticket | 25 | Shows "Special"; the tag is never displayed. Example: "UniverSoul Circus". | tm:159-162, 305 |
| Ticketmaster genre | tag = Ice Shows | Special | ticket | 16 | Shows "Special"; the tag is never displayed. Example: "Disney On Ice presents Find Your Hero". | tm:159-162, 305 |
| Ticketmaster genre | tag = Spectacular | Special | ticket | 15 | Shows "Special"; the tag is never displayed. Example: "The Wizard of Oz at Sphere". | tm:159-162, 305 |
| Ticketmaster genre | tag = Miscellaneous | Special | ticket | 12 | TM gave only the segment name, used as the tag. Shows "Special". Example: "Creepy Cheapy XVIII: Night One". | tm:159-162, 305 |
| Ticketmaster genre | tag = Arts & Theatre | Special | ticket | 7 | TM gave only the segment name, used as the tag. Shows "Special". Example: "Kathy Griffin". | tm:159-162, 305 |
| Ticketmaster genre | tag = Classical | Special | ticket | 5 | Shows "Special"; the tag is never displayed. Example: "Long Beach Symphony POPS: The Ultimate Eagles Experience". | tm:159-162, 305 |
| Ticketmaster genre | tag = Family | Special | ticket | 5 | Shows "Special"; the tag is never displayed. Example: "Hocus Pocus Spooktacular". | tm:159-162, 305 |
| Ticketmaster genre | tag = Dance | Special | ticket | 4 | Shows "Special"; the tag is never displayed. Example: "Alberta Ballet in Peer Gynt". | tm:159-162, 305 |
| Ticketmaster genre | tag = Opera | Special | ticket | 3 | Shows "Special"; the tag is never displayed. Example: "Ópera MET Macbeth". | tm:159-162, 305 |
| Ticketmaster genre | tag = Miscellaneous Theatre | Special | ticket | 3 | Shows "Special"; the tag is never displayed. Example: "Josh Gates Haunted Expeditions Live!". | tm:159-162, 305 |
| Ticketmaster genre | tag = Drama | Special | ticket | 3 | Shows "Special"; the tag is never displayed. Example: "Outlander in Concert". | tm:159-162, 305 |
| Ticketmaster genre | tag = Action/Adventure | Special | ticket | 2 | From TM's Film segment (film-with-orchestra nights). Shows "Special". Example: "How to Train Your Dragon 2 in Concert". | tm:159-162, 305 |
| Ticketmaster genre | tag = Performance Art | Special | ticket | 2 | Shows "Special"; the tag is never displayed. Example: "Night of the Living Drag All Ages (Mature Content)". | tm:159-162, 305 |
| Ticketmaster genre | tag = Community/Civic | Special | ticket | 2 | Shows "Special"; the tag is never displayed. Example: "Adam Grant: Vibe". | tm:159-162, 305 |
| Ticketmaster genre | tag = Hobby/Special Interest Expos | Special | ticket | 1 | Shows "Special"; the tag is never displayed. Example: "Tacoma Holiday Festival". | tm:159-162, 305 |
| Ticketmaster genre | tag = Animation | Special | ticket | 1 | From TM's Film segment (film-with-orchestra nights). Shows "Special". Example: "My Hero Academia in Concert". | tm:159-162, 305 |
| Ticketmaster genre | tag = Horror | Special | ticket | 1 | From TM's Film segment (film-with-orchestra nights). Shows "Special". Example: "Silent Movie Mondays - Dr. Jekyll and Mr. Hyde". | tm:159-162, 305 |
| Ticketmaster genre | tag = Children's Theatre | Special | ticket | 1 | Shows "Special"; the tag is never displayed. Example: "Bluey's Big Play". | tm:159-162, 305 |
| Ticketmaster genre | tag = Psychics/Mediums/Hypnotists | Special | ticket | 1 | Shows "Special"; the tag is never displayed. Example: "Matt Fraser". | tm:159-162, 305 |
| Ticketmaster genre | tag = Magic & Illusion | Special | ticket | 1 | Shows "Special"; the tag is never displayed. Example: "Ked El Hombre Magia". | tm:159-162, 305 |
| Ticketmaster genre | tag = Multimedia | Special | ticket | 1 | Shows "Special"; the tag is never displayed. Example: "Bonnie Garmus: Peck & Peck". | tm:159-162, 305 |
| Ticketmaster genre | tag = Lecture/Seminar | Special | ticket | 0 | Shows "Special"; the tag is never displayed. Example: "Share the Arrows 2026". | tm:159-162, 305 |
| hand list (listings2026) | tag = fair | Special | ticket | 6 | State Fair of Texas, one event per day. Example: "State Fair of Texas". | ls:59-72 |
| hand list (listings2026) | tag = convention | Special | ticket | 0 | New York Comic Con, one per day ("day 1 of 4"). 18 rows across the archive. | ls:99-102 |
| hand seed | tag = horse-racing | Special | ticket | 0 | "Pacific Classic day". | seed/past2026 |
| hand seed (kind = festival) | tag = fan-festival | Festival | flag | 0 | "FIFA Fan Festival", "Union Station World Cup Fan Zone": festival kind with an "other" domain. | seed/past2026 |

### E. Fallbacks

| Where it comes from | Internal key | Event page "Type" | Icon | Oct 13 count | Plain-English note | Ref |
|---|---|---|---|---|---|---|
| Ticketmaster, unknown segment | kindOf default → special | Special | ticket | — | Any segment not Music/Sports/Arts & Theatre/Miscellaneous/Film becomes Special. | tm:165 |
| Ticketmaster Sports at a venue not on the list | kindOf → null (dropped) | not shown | — | — | Dropped on purpose: league feeds own sports there. | tm:163 |
| Ticketmaster, no genre | genre → segment name → "Other" | Concert / Special | — | — | See "Other" and "Arts & Theatre" rows. | tm:286 |
| Ticketmaster game, no sport word | sportOf → "other" | other (raw) | ticket | 10 | See sport = other. | tm:174 |
| Any sport with no drawn icon | iconKey → special | — | ticket | — | boxing, rodeo, motorsports, other, lacrosse… | tI:31 |
| Any sport not in the five | sportLabel → raw key | raw key | — | — | Why "rodeo" appears lowercase. | pL:207 |
| Event size unknown | sizeTier = "unknown" | — | — | — | Not a type, but a fallback word in the data. | rd:117 |

## Table 2 — Every naming combination


### 1. Sports – regular season and site

| Case | Rule in plain words | Formula (almost code) | Map chip (mapTitle) | Row / event page (listTitle) | Real example | Status | Ref |
|---|---|---|---|---|---|---|---|
| Regular season, pro (home game) | Visitor "at" home on rows; home nickname alone on the chip. | list: `{away} at {home}` · chip: `{home.shortName}` | Gulls | Reign at Gulls | 2026-10-14-ht-san-diego-gulls-1029135 "Gulls vs. Reign" | OK | eT:70-79, 112-120, 172-185 |
| Regular season, college football | School + squad tag (FB) after the home school. | list: `{away} at {home} (FB)` · chip: `{home.shortName}` | Georgia Tech FB | Duke at Georgia Tech (FB) | 2026-10-10 "Georgia Tech vs. Duke" | Differs from docs: chip always carries "FB" because the team short name itself is "Georgia Tech FB"; product-decisions.md:8 says the squad tag is added only on a collision. | eT:10-20; teams.ts:452 |
| College basketball (men / women) | Squad tag (MBB) or (WBB) after the home school. | list: `{away} at {home} (MBB\|WBB)` | {home.shortName} | e.g. "X at UCLA (WBB)" | no example in data (0 college hoops games in the archive window) | OK (code only) | eT:15-18 |
| Other college sports (baseball, hockey, soccer, volleyball) | No squad tag. | list: `{away} at {home}` | {home.shortName} | Augustana at Ohio State Buckeyes | 2026-10-23 "Ohio State Buckeyes vs. Augustana (SD)" → "(SD)" is mistaken for an event name and dropped | NO RULE YET (no tag); parsing bug drops "(SD)" | eT:19, 45-51 |
| Away-team view (favorite team's own page) | Only on that team's page: "vs" at home, "@" away. | home: `vs {opponent}` · away: `@ {opponent}` | — | vs Padres / @ Brewers | no example in archive (page-only) | OK (matches event-naming-at-vs.md rule 5) | eT:220-224 |
| Team schedule list (not the team page) | Canonical game name from the team's side. | `{away} at {home}`; neutral `{x} vs. {y}` | — | Dodgers at Brewers | no example in archive | OK | eT:227-231 |
| Neutral site, flagged | "vs." instead of "at"; first side of the source title first; event name (from "(…)") in front. | `{eventName} · {side1} vs. {side2}` | {home.shortName} | Red River Showdown · Texas vs. Oklahoma | Seed run: "Texas vs. Oklahoma (Red River Showdown)" → as shown. Archive copy lost the neutral flag and reads "Oklahoma at Texas". Lakers vs. Warriors (Oct 13) → "Lakers vs. Warriors" | Differs from docs: docs want designated visitor first (product-decisions.md:84; event-naming-at-vs.md:17); code puts source's first side (home) first | eT:74-76 |
| Neutral site, city after | Docs: "49ers vs. Rams · Melbourne". | not built | — | — | no example in data | NO RULE YET (event-naming-at-vs.md:17) | eT:76 |
| Neutral site, NOT flagged in data | Treated as a normal home game. | `{away} at {home}` | Florida | Georgia at Florida | Hand list "Florida vs. Georgia (neutral site)" (Oct 31) has no neutralSite flag; "(neutral site)" is dropped as an "event name" | Data gap (hand list missing the flag) | ls:42-54, 106 |
| Title with event name, not neutral | Text in parentheses after the visitor is silently dropped. | `{away} at {home}` | — | Oklahoma at Texas | Archive copy of Red River Showdown | NO RULE YET (name lost when not neutral) | eT:47-51, 78 |
| Title with no "vs" (bowls, title games, named events) | Left exactly as written. | `{title}` | = title | = title | "SEC Championship", "Celebration Bowl", "Peach Bowl (CFP quarterfinal)", "EnduroCross" | OK (as coded); no label rule | eT:72, 184 |
| "vs" inside parentheses | Parser splits on the first " vs " even inside brackets. | `{away} at {home}` (broken) | East LA Classic (Garfield | Roosevelt) at East LA Classic (Garfield | Seed "East LA Classic (Garfield vs. Roosevelt)" (2024-10-25) | BUG / NO RULE YET | eT:36 |
| Ticketmaster game (no team ids) | Same parse; first side assumed home; chip is the first side. | list: `{side2} at {side1}` · chip: `{side1}` | Atlanta Gladiators | Norfolk Admirals at Atlanta Gladiators | 2026-10-17 TM; bad cases: "UCLA at Nyle Maxwell's Lonestar Showcase: UTWBB", "CGY Dinos - COUNTRY NIGHT at UBC Thunderbirds Football" | Unverified: TM does not promise Home vs. Away order | eT:112-120; tm:301 |
| Same home team twice in one night (collision) | Step 1 add squad tag; step 2 add visitor short name. | `{home} ({tag})` → `{home} ({tag}) · {away}` | Dodgers · Braves (NLDS G2) | NLDS G2 · Braves at Dodgers | 2026-10-04: feed copy + hand seed of the same game both on the map | OK (product-decisions.md:8); but a duplicate of one game triggers it | eT:142-183 |

### 2. Sports – postseason (label goes first on rows, in ( ) on the chip)

| Case | Rule in plain words | Formula (almost code) | Map chip (mapTitle) | Row / event page (listTitle) | Real example | Status | Ref |
|---|---|---|---|---|---|---|---|
| MLB Wild Card | Round label first on rows, in brackets on the chip. | `NLWC\|ALWC G{n} · {away} at {home}` | Dodgers (NLWC G1) | NLWC G1 · Brewers at Dodgers | no example in data (simulated) | Differs from docs: docs say "WC G1" (event-naming-at-vs.md:18) | rL:19-47 |
| MLB Division Series | Round label first on rows, in brackets on the chip. | `NLDS\|ALDS G{n} · {away} at {home}` | Braves (NLDS G4) | NLDS G4 · Dodgers at Braves | 2026-10-07-mlb-849822; also "ALDS G3 · Rays at Yankees" | OK | rL:19-47 |
| MLB Championship Series | Round label first on rows, in brackets on the chip. | `NLCS\|ALCS G{n} · {away} at {home}` | Dodgers (NLCS G3) | NLCS G3 · Brewers at Dodgers | 2026-10-14-mlb-849811; also "ALCS G1 · Guardians at Rays" | OK (product-decisions.md:84) | rL:19-47 |
| MLB World Series | Round label first on rows, in brackets on the chip. | `WS G{n} · {away} at {home}` | Dodgers (WS G7) | WS G7 · Brewers at Dodgers | no feed example (simulated). Old hand seeds use round "World Series" + title "World Series Game 1" → "World Series G1 · World Series Game 1" | Differs from docs: docs say "World Series G7" (event-naming-at-vs.md:18); seed title doubles up | rL:26, 41 |
| "If necessary" game | Not in the name; a flag shown elsewhere. | `{round} G{n} · {away} at {home}` | Valkyries (Finals G5) | Finals G5 · Dream at Valkyries | 2026-10-26-espn-valkyries-401918309 | OK | rL:156, 168 |
| NBA playoffs | Headline words → East Finals / West Finals / Semis / 1st Round / Finals, plus game no. | `{round} G{n} · {away} at {home}` | e.g. Lakers (West Finals G3) | e.g. West Finals G3 · Nuggets at Lakers | no example in data | OK (code only) | rL:101-108 |
| WNBA playoffs | ESPN headline minus "WNBA"; else "Postseason". | `{headline} G{n} · {away} at {home}` | Liberty (Semifinals G3) | Semifinals G3 · Dream at Liberty | 2026-10-09-espn-liberty-401918299; "Finals G1 · Dream at Valkyries" | OK, but WNBA says "Semifinals" while NBA says "Semis" | rL:165-175 |
| NHL playoffs | Cup Final / Conf Final / 2nd Round / 1st Round, plus game no. | `{round} G{n} · {away} at {home}` | Golden Knights (Conf Final G7) | Conf Final G7 · Oilers at Golden Knights | no feed example (simulated); old seeds use "Western First Round G3" | OK; long chips get cut and lose the label first (docs want a step-down, event-naming-at-vs.md:22) | rL:111-117 |
| NFL playoffs | Super Bowl / Wild Card / Divisional / Championship; no game no. | `{round} · {away} at {home}` | Rams (Super Bowl) | Super Bowl · Chiefs at Rams | no example in data (simulated) | Differs from docs: docs say "NFC Championship", "Super Bowl 2027" (event-naming-at-vs.md:18) | rL:93-99 |
| MLS / NWSL playoffs | ESPN headline minus league; else "Postseason". | `{headline} G{n} · {away} at {home}` | Galaxy (Postseason) | Postseason · LAFC at Galaxy | no feed example (simulated); old seed "MLS Cup Playoffs Round One G1 · Rapids at Galaxy" | OK (code only); wording depends on ESPN | rL:165-175 |
| HockeyTech playoffs (AHL, ECHL, OHL…) | "{league} Playoffs", never a game number. | `{league} Playoffs · {away} at {home}` | Gulls (AHL Playoffs) | AHL Playoffs · Reign at Gulls | no example in data (simulated) | NO RULE YET for game number (docs: never omit G#, product-decisions.md:8) | ht:212 |
| College football CFP / title / conference title | CFP Semi / Title Game / CFP / "{Conf} Championship". | `{round} · {away} at {home}` | Georgia (CFP Semi) | CFP Semi · Georgia vs. Ohio State (neutral) | no example in data (simulated) | OK (code only) | rL:124-133 |
| College bowl game | Bowls deliberately get no label; hand-listed bowls have no "vs". | `{title}` | Celebration Bowl | Celebration Bowl | Hand list "Celebration Bowl", "Peach Bowl (CFP quarterfinal)" | NO RULE YET (docs: "Rose Bowl · Alabama vs. Indiana", event-naming-at-vs.md:17) | rL:131; ls:107-109 |
| College / conference tournament | No rule. | — | — | — | no example in data | NO RULE YET (product-decisions.md:137 mentions multi-game events) | — |

### 3. Sports – special games

| Case | Rule in plain words | Formula (almost code) | Map chip (mapTitle) | Row / event page (listTitle) | Real example | Status | Ref |
|---|---|---|---|---|---|---|---|
| NBA / NHL / NFL preseason (ESPN) | Flag is stored but nothing is added to the name. | `{away} at {home}` | Clippers | Nuggets at Clippers | 2026-10-14-espn-clippers-401918011 (preseason) | NO RULE YET (only the team page shows "Preseason", eT:212) | espn:1077; eT:211-214 |
| MLB spring training | Map feed never marks it preseason (no game-type filter); only the team schedule does. | `{away} at {home}` | {home} | {away} at {home} | no example in data (October) | NO RULE YET; note: earlier audit said spring training sets preseason; that is the team-schedule path only (mlb:213), not the map feed (mlb:138-170, 235) | mlb:138-170, 213, 235 |
| Doubleheader | DH index is read but dropped; both games get the same name. | `{away} at {home}` ×2 | Dodgers · Brewers (both) | Brewers at Dodgers (both) | no example in data (simulated: two chips read the same) | NO RULE YET (docs want DH1/DH2, event-naming-at-vs.md:18; product-decisions.md:84 admits not built) | rL:15-16 |
| All-Star game | HockeyTech skips All-Star seasons; MLB map feed has no filter; no label rule anywhere. | title as built | — | — | no example in data | NO RULE YET | ht:161 |
| Tournament / showcase / exhibition / friendly | Treated like a regular game or left as written. | `{away} at {home}` or `{title}` | Copa Las Vegas: USA | Mexico at Copa Las Vegas: USA | TM "Copa Las Vegas: USA vs Mexico"; seed "World Cup Group D · Paraguay at USA" | NO RULE YET (event name glued to home side) | eT:36-52 |
| Non-team sports (rodeo, motorsports, boxing, esports) | No "vs" → title as written. | `{title}` | PBR Teams: Outlaw Days | PBR Teams: Outlaw Days | TM 2026-10-23 | OK (as coded) | eT:72 |

### 4. Music and festivals

| Case | Rule in plain words | Formula (almost code) | Map chip (mapTitle) | Row / event page (listTitle) | Real example | Status | Ref |
|---|---|---|---|---|---|---|---|
| Concert, single headliner | Chip = performer; row = TM full name only if it says more. | chip: `{performer}` · list: `{officialTitle ?? title}` | Jesse Welles | Jesse Welles | 2026-10-06 TM "Jesse Welles" | OK (product-decisions.md:8, 38) | eT:85-92, 194; tm:284-303 |
| Concert with tour name | Tour only via TM's full name; never parsed. | list: `{officialTitle}` | Phoebe Bridgers | Phoebe Bridgers: The Lost Tour | 2026-10-13-tm-vvG1zZ_G68Ii_o; also "LP - All Is Not Lost Tour" (dash style varies) | OK, format inconsistent (":" vs " - ") | eT:194; tm:303 |
| Tour name written first | Same rule; row can start with the tour, not the act. | list: `{officialTitle}` | Phil Wickham | Song Of The Saints Tour with Phil Wickham | 2026-10-15-tm-vv170Z_7GkMfFAZu | NO RULE YET (no reordering) | eT:194 |
| Co-bill / openers | No opener field; only appears if TM's name lists them. | list: `{officialTitle}` | The Aquabats! | The Aquabats!, Manic Hispanic, sullvn | 2026-10-17-tm-rZ7HnEZ1AfaaP7 | NO RULE YET (product-decisions.md:132, 137 allow co-bills/openers) | — |
| ALL CAPS act name | Title-cased unless on the official-styling list or ≤4-letter acronym. | `displayName(name)` | Slayer | SLAYER: Reign In Blood 40th Anniversary | Seed 2026-10-04-slayer (chip title-cased; row kept in caps) | OK? row keeps caps because the full title passes through displayName as one string | names.ts |
| Same headliner twice that night | Add venue to the chip. | chip: `{performer} · {venue}` | Billy Strings · Angel of the Winds Arena | Billy Strings | 2026-10-09-tm-vvG1HZ_6RGOXwD | OK (product-decisions.md:8) | eT:174-177 |
| Show with no performer | Falls back to the title. | `{title}` | = title | = title | no example in data (simulated) | OK | eT:90-91, 184 |
| Festival (kind = festival) | Chip = festival title, not a performer. | chip & list: `{title}` | 2026 ComplexCon Concert | 2026 ComplexCon Concert | Seed 2026-10-04-complexcon (performer Playboi Carti unused) | OK (product-decisions.md:38) | eT:89 |
| Festival from Ticketmaster | Arrives as a show (Music) or Special; chip = first performer or name. | `{performer}` / `{title}` | Sick New World Festival Forth Worth | Sick New World Festival Forth Worth | TM 2026-10-24 (special, Undefined); "Niteharts Festival" (show) | NO RULE YET (not recognized as festival) | tm:157-162 |
| Multi-day festival / weekend | No day or weekend rule. | `{title}` | — | — | no example in data | NO RULE YET (product-decisions.md:38 wants "Weekend 1/2") | — |

### 5. Everything else (Special, hand-added, unknowns)

| Case | Rule in plain words | Formula (almost code) | Map chip (mapTitle) | Row / event page (listTitle) | Real example | Status | Ref |
|---|---|---|---|---|---|---|---|
| Comedy | Special: chip and row are the TM event name; performer ignored. | `{title}` | Sweetest Day Comedy Jam | Sweetest Day Comedy Jam | 2026-10-17-tm-vv17jZ_8GkmcT72q (performer Cedric The Entertainer unused) | NO RULE YET (no headliner rule for Special) | eT:184, 195 |
| Theatre | Same. | `{title}` | Waitress (Touring) | Waitress (Touring) | TM Theatre | NO RULE YET | eT:184 |
| Circus / ice shows | Same; long names on a 112px chip get cut with "…". | `{title}` | Disney On Ice presents Jump In | Disney On Ice presents Jump In | 2026-10-22-tm-Z7r9jZ1AAv7Fa | NO RULE YET | eT:184; styles.css:1630-1640 |
| Fair (daily) | Hand list, one per day, same name every day. | `{title}` | State Fair of Texas | State Fair of Texas | 2026-10-13-state-fair-texas | OK (as coded) | ls:59-72 |
| Convention (multi-day) | Day number written into the title by hand. | `{title}` = "{name} (day N of M)" | New York Comic Con (day 1 of 4) | New York Comic Con (day 1 of 4) | 2026-10-08-nycc | OK as hand-written; no general rule | ls:99-102 |
| Pop-up | No kind, tag or rule. | — | — | — | no example in data | NO RULE YET | — |
| Live broadcast / watch party | Same as Special: title as written. | `{title}` | Ohio State @ Michigan, at Cosm | Ohio State @ Michigan, at Cosm | Kylie's log entry 2025-11-29 (simulated as an event) | NO RULE YET | eT:184 |
| Hand-added log entry | Logs use listTitle for feed events; hand entries keep the typed title. | `listTitle(event)` or typed title | — | e.g. "Pomona-Pitzer WBB vs. Babson" | kylieLog.ts | Mixed: hand titles still use "vs."/"@" | pL:531, 548, 563, 844 |
| Undefined (TM genre) | Not a naming case: TM's "Undefined" only changes the type, the name is still the title. | `{title}` | BVD Boston presents BEND OVA ( 21+ ) | same | TM Special/Undefined | OK (type issue, see Table 1) | — |

## Gaps and contradictions

1. Many events show a raw lowercase computer word as their type: "rodeo", "boxing", "motorsports", "other". Only five sports have a proper label.
2. "Special" is a junk drawer: 303 events on Oct 13 (theatre, comedy, circus, ice shows, film nights, fairs and 107 "Undefined"). They all show "Special" with a ticket icon; the more useful tag is never shown.
3. The same kind has different names on different screens: "Concert" (event page) vs "Show" (Add form); "Live Broadcast" vs "Live broadcast".
4. Neutral-site order is backwards versus the docs: docs say designated visitor first; code puts the first-named (home) side first. The "· City" ending is not built.
5. Hand-listed neutral games are inconsistent: Red River Showdown is flagged neutral, "Florida vs. Georgia (neutral site)" is not, so it reads "Georgia at Florida". The archived copy of Red River also lost its flag and reads "Oklahoma at Texas".
6. Text in brackets after the visitor is thrown away when the game is not neutral: "(Red River Showdown)", "(SD)", "(neutral site)".
7. Titles with "vs" inside brackets break: "East LA Classic (Garfield vs. Roosevelt)" becomes "Roosevelt) at East LA Classic (Garfield". Ticketmaster titles like "Copa Las Vegas: USA vs Mexico" become "Mexico at Copa Las Vegas: USA".
8. Playoff words don't match the docs: code says "NLWC/ALWC", "WS", "Championship", "Super Bowl"; docs say "WC G1", "World Series G7", "NFC Championship", "Super Bowl 2027". WNBA says "Semifinals" while NBA says "Semis". Old seeds use "World Series" and "Western First Round".
9. No rule yet for: preseason, spring training, doubleheaders (DH1/DH2), All-Star games, tournaments, bowls, festival weekends/days, openers, pop-ups, comedy/theatre headliners.
10. MLB spring training: the earlier audit said it gets the preseason flag. That is only true on a team's schedule page; the map feed asks MLB for all game types and never sets the flag.
11. College football short names already contain "FB" (e.g. "Georgia Tech FB"), so the chip always shows it, though the docs say the squad tag appears only when two chips clash.
12. A hand seed and the feed carrying the same game (Oct 4, Dodgers vs Braves) count as a clash, so the chip grows to "Dodgers · Braves (NLDS G2)".
13. HockeyTech playoff games have no game number ("AHL Playoffs").
14. Genre spelling drift (Rock/rock, Hip-Hop/Rap/hip-hop/hip hop) quietly changes the audience-overlap score.
15. Nothing in the database limits kind, sport, genre or tag. Any word can get in.

<sub>File key: eT = src/lib/eventTitle.ts · rL = src/data/sources/roundLabel.ts · tm = src/data/sources/ticketmasterSource.ts · mlb = src/data/sources/mlbSource.ts · ht = src/data/sources/hockeytechSource.ts · espn = src/data/sources/espnSource.ts · pL = src/data/personalLog.ts · tI = src/map/typeIcons.ts · AE = src/screens/AddEntryScreen.tsx · cp = src/data/competitions.ts · ls = src/data/seed/listings2026.ts · kL = src/data/seed/kylieLog.ts · ov = src/data/formula/overlap.ts · rd = src/data/read.ts</sub>
