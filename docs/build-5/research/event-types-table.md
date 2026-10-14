# Event types: what the app has now, and a proposed taxonomy
> **Icon sizes (r3, measured Oct 14 at 390pt wide against untouched live rows):** map chip 12pt; Explore row, date page lineup, event title, Following and search 18pt; Local Competition timeline 17pt; Stubs rows 16pt. Each is the largest size (up to 18) that keeps the live row height. Vertical align −4px (Stubs −3px).

> **Taxonomy: PROPOSAL, NOT DECIDED.** Approved by Kylie (Oct 14): Phosphor set; custom Lacrosse/Rugby; keyword sort for Undefined/Miscellaneous; Children's Theatre → Kids & family; icons sized per surface (see below; was 20pt in r2); icon at the very start of the title.
> Icon swaps (r2): Concert → `music-note`; Comedy, Film, Circus, Fair → custom (✱).
> Sources: `research/event-types-635a164.md` (main @ 635a164), `src/map/typeIcons.ts` and `src/data/competitions.ts`. Counts are **Oct 13 / All loaded** from that report. "—" means none or not counted.
> Icon set used in the proposal: **Phosphor Icons v2.1.1 (MIT)**, regular weight. One open set, one style. Tabler had no hockey, lacrosse, circus or ferris-wheel icon; Phosphor has 34 of the 36 icons needed (no lacrosse or rugby).
> Note: the comment in `typeIcons.ts` says the current icons were hand-drawn "so every icon on screen matches". Adopting a set means inlining its SVG paths the same way, not adding an icon font. **Open question 1.**

## 1. Every raw type found today (85 raw strings, about 70 once letter case is ignored)

### 1a. Event kind (`event.kind`): 5
| Internal key | Current label | Current icon | Oct 13 / All |
|---|---|---|---|
| game | (sport name) | per sport, below | 427 / 1,444 |
| show | "Concert" (the add form says "Show") | music note | 745 / 2,261 |
| festival | "Festival" | flag | 0 / 1 |
| live-broadcast | "Live broadcast" (casing drifts) | ticket (fallback) | 0 / 0 |
| special | "Special" | ticket | 303 / 738 |

### 1b. Sport keys (`audience.sport`, from feeds and seed data): 13
| Key | Current label | Current icon | Oct 13 / All |
|---|---|---|---|
| hockey | Hockey | crossed sticks | 151 / 512 |
| football | Football | football | 86 / 313 |
| soccer | Soccer | pentagon ball | 80 / 255 |
| basketball | Basketball | ball | 74 / 253 |
| baseball | Baseball | ball with seams | 11 / 52 |
| other | "other" (raw key shown) | ticket | 10 / 28 |
| boxing | boxing (raw) | ticket | 7 / 13 |
| motorsports | motorsports (raw) | ticket | 5 / 12 |
| rodeo | rodeo (raw) | ticket | 3 / 6 |
| lacrosse | lacrosse (NLL feed exists) | ticket | 0 / 0 (ESPN nll 2) |
| tennis | tennis | racket (unused) | 0 / 0 |
| cricket | cricket | ticket | 0 / 0 |
| wrestling | wrestling | ticket | 0 / 0 |

### 1c. Sports offered only on the add form (`SPORTS_SHOWN` + `SPORTS_MORE`): 9 not listed above
Volleyball, Softball, Golf, **Motorsport** (feed key is `motorsports`), MMA, Rugby union, Rugby league, Aussie rules, Track & field. These are stored as the typed label in Title Case, so they don't match the lowercase feed keys (gap 5). Lacrosse, Tennis, Boxing, Wrestling, Cricket and Other also appear on the form in Title Case. Counts: 0 seen.

### 1d. Music genres (`audience.genre`): 30 strings
| Raw (Ticketmaster) | Oct 13 | | Raw (Ticketmaster) | Oct 13 |
|---|---|---|---|---|
| Rock | 233 | | Folk | 10 |
| Pop | 91 | | Religious | 9 |
| Hip-Hop/Rap | 67 | | Blues | 9 |
| Country | 66 | | Classical | 8 |
| Other | 61 | | Reggae | 6 |
| Dance/Electronic | 46 | | Ballads/Romantic | 4 |
| Latin | 44 | | Undefined | 3 |
| Metal | 34 | | Jazz | 3 |
| R&B | 24 | | | |
| Alternative | 14 | | | |
| World | 13 | | | |

Lowercase seed genres (11, count not reported): hip-hop, metal, rock, pop, classical, classic rock, k-pop, pop rock, latin, electronic, various.
Current icon: music note for every `show`. The genre never changes the icon.

### 1e. Other / Special tags (`special` subtype or classification): 28 strings, all shown with the ticket icon
| Raw | Oct 13 | | Raw | Oct 13 |
|---|---|---|---|---|
| Undefined | 107 | | Performance Art | 2 |
| Theatre | 51 | | Community/Civic | 2 |
| Comedy | 28 | | Hobby/Special Interest Expos | 1 |
| Children's Theatre | family.kids | approved Oct 14 |
| Circus & Specialty Acts | 25 | | Animation | 1 |
| Ice Shows | 16 | | Horror | 1 |
| Spectacular | 15 | | Children's Theatre | 1 |
| Miscellaneous | 12 | | Psychics/Mediums/Hypnotists | 1 |
| Arts & Theatre | 7 | | Magic & Illusion | 1 |
| fair | 6 | | Multimedia | 1 |
| Classical | 5 | | convention | — (All 18) |
| Family | 5 | | Lecture/Seminar | — (All 4) |
| Dance | 4 | | horse-racing | seed only |
| Opera | 3 | | | |
| Miscellaneous Theatre | 3 | | | |
| Drama | 3 | | | |
| Action/Adventure | 2 | | | |

Total: 5 + 13 + 9 + 30 + 28 = **85 raw strings**. Only 9 icons exist today, and every special, or sport without its own icon, falls back to the ticket.

## 2. Proposed controlled taxonomy: 8 categories, 36 types (PROPOSAL, NOT DECIDED)
Key format proposal: `category.type`, lowercase, stored on the event (e.g. `sports.baseball`). The label is shown to fans. The icon is a Phosphor regular icon.

| Category | Type (label) | Key | Proposed icon (Phosphor) |
|---|---|---|---|
| Sports | Baseball | sports.baseball | `baseball` |
| Sports | Softball | sports.softball | `baseball` (same ball; label disambiguates) |
| Sports | Basketball | sports.basketball | `basketball` |
| Sports | Football | sports.football | `football` |
| Sports | Soccer | sports.soccer | `soccer-ball` |
| Sports | Hockey | sports.hockey | `hockey` |
| Sports | Lacrosse | sports.lacrosse | ✱ custom stick (`x-lacrosse`) |
| Sports | Volleyball | sports.volleyball | `volleyball` |
| Sports | Tennis | sports.tennis | `tennis-ball` |
| Sports | Golf | sports.golf | `golf` |
| Sports | Combat sports (boxing, MMA, wrestling) | sports.combat | `boxing-glove` |
| Sports | Motorsports | sports.motorsports | `flag-checkered` |
| Sports | Rodeo | sports.rodeo | `cowboy-hat` |
| Sports | Horse racing | sports.horse_racing | `horse` |
| Sports | Rugby (union, league, Aussie rules) | sports.rugby | ✱ custom rugby ball (`x-rugby`) |
| Sports | Cricket | sports.cricket | `cricket` |
| Sports | Track & field | sports.track | `person-simple-run` |
| Sports | Other sport | sports.other | `trophy` |
| Music | Concert | music.concert | `music-note` |
| Music | Festival | music.festival | `flag-banner` (stays a flag, like today) |
| Music | Classical & opera | music.classical | `piano-keys` |
| Arts | Theatre | arts.theatre | `mask-happy` |
| Arts | Comedy | arts.comedy | ✱ custom laughing face (`x-laugh`) |
| Arts | Dance | arts.dance | `sneaker-move` |
| Arts | Film | arts.film | ✱ custom movie camera with reels (`x-movie-camera`) |
| Arts | Talk & lecture | arts.talk | `presentation` |
| Arts | Spectacle & magic | arts.spectacle | `magic-wand` |
| Family | Circus | family.circus | ✱ custom big-top tent (`x-big-top`) |
| Family | Ice show | family.ice_show | `snowflake` |
| Family | Kids & family show | family.kids | `balloon` |
| Fairs & Markets | Fair | fairs.fair | ✱ custom Ferris wheel (`x-ferris-wheel`) |
| Fairs & Markets | Expo & convention | fairs.expo | `users-three` |
| Fairs & Markets | Market | fairs.market | `storefront` |
| Pop-up | Pop-up | popup | `lightning` |
| Watch party | Live broadcast / watch party | watch.broadcast | `television` |
| Other | Other event | other | `ticket` (today's fallback) |

Alternative (not the lean): flatten to about 14 types (one per sport we carry, plus Concert, Festival, Stage, Family, Fair, Pop-up, Other) and use the genre or subtype only as text. Rejected as the lean because Theatre (51) and Comedy (28) already outnumber Baseball on Oct 13.
Also rejected: per-genre music icons (19+ icons for one kind is too much visual noise), and keeping "Special" as a type (it is the gap-3 catch-all).

## 3. Mapping from every raw key to a proposed type (PROPOSAL, NOT DECIDED)
Match after lowercasing and trimming (this fixes the case drift in gap 5).

| Raw key(s) | → Proposed type | Note |
|---|---|---|
| game + sport below | the sport's type | |
| show | music.concert (genre kept as text) | "Concert" label everywhere; drop "Show" on the add form |
| festival | music.festival | |
| live-broadcast | watch.broadcast | |
| special | resolved by tag (below); no tag → other | |
| hockey | sports.hockey | |
| football | sports.football | |
| soccer | sports.soccer | |
| basketball | sports.basketball | |
| baseball | sports.baseball | |
| softball | sports.softball | |
| lacrosse | sports.lacrosse | |
| volleyball | sports.volleyball | |
| tennis | sports.tennis | |
| golf | sports.golf | |
| boxing, mma, wrestling | sports.combat | the original string kept as a subtype |
| motorsports, motorsport | sports.motorsports | |
| rodeo | sports.rodeo | |
| horse-racing | sports.horse_racing | |
| rugby union, rugby league, aussie rules | sports.rugby | subtype kept |
| cricket | sports.cricket | |
| track & field | sports.track | |
| other (sport) | sports.other | label "Other sport", never the raw "other" |
| Rock, Pop, Hip-Hop/Rap, Country, Dance/Electronic, Latin, Metal, R&B, Alternative, World, Folk, Religious, Blues, Reggae, Ballads/Romantic, Jazz, Other, Undefined; seed hip-hop, metal, rock, pop, classic rock, k-pop, pop rock, latin, electronic, various | music.concert | genre normalized to TM casing as secondary text (e.g. "hip-hop" → "Hip-Hop/Rap") |
| Classical (genre or tag), seed classical, Opera | music.classical | |
| Theatre, Arts & Theatre, Miscellaneous Theatre, Drama, Performance Art, Multimedia | arts.theatre |  |
| Comedy | arts.comedy | |
| Dance | arts.dance | |
| Animation, Horror, Action/Adventure | arts.film | these TM tags appear on screenings |
| Lecture/Seminar, Psychics/Mediums/Hypnotists | arts.talk | |
| Spectacular, Magic & Illusion | arts.spectacle | |
| Children's Theatre | family.kids | approved Oct 14 |
| Circus & Specialty Acts | family.circus | |
| Ice Shows | family.ice_show | |
| Family | family.kids | |
| fair | fairs.fair | |
| convention, Hobby/Special Interest Expos | fairs.expo | |
| Community/Civic | fairs.market | weak fit; or other |
| (pop-up flag on the event) | popup | there's no raw key today; pop-ups currently come in as special |
| Undefined, Miscellaneous (tags) | other | 119 events on Oct 13 → needs a title-keyword pass (open question) |

Level (pro/lower/college/school/amateur), division (men/women/mixed), occasion tier and favorite kinds are **separate axes**, not types, and are left unchanged.
