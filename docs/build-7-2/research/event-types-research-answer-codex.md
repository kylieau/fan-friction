# Event Types Taxonomy: Research Answer (Codex)

Status: saved Nov 4, 2026 (late evening), in full as delivered. The answer to `event-types-research-prompt.md`, run read-only by Codex from Claude Code (Kylie, Nov 4: "oh then go ahead"); scratch tables and scripts stayed outside the repo (the session's scratchpad, `event-types-research/`), and nothing in the working tree changed. Status: closed, build 7.2 notes §1 (Kylie, Nov 4, late evening: "agree with your leans on all": the nine types with music festivals under Concerts & Music, the two renames, Esports added, and the six answers as the leans), Nov 4, 2026. Kylie's own run of the same prompt on ChatGPT, when pasted, goes beside this file as `event-types-research-answer-chatgpt.md`.

---

### 1. Short Report (Under 400 Words)

**Recommendation: Keep Nine Top-Level Types, With Festivals Split by Content.**

1. **Sports:** Games and competitions, with sport and level switches.
2. **Concerts & Music:** Concerts, classical performances, and music festivals.
3. **Theater & Comedy:** Theater, comedy, dance, magic, talks, and film.
4. **Family Shows:** Shows primarily billed for children and families.
5. **Festivals & Fairs:** Food festivals, community festivals, fairs, and markets.
6. **Conventions & Expos:** Fan conventions, hobby expos, vehicle shows, and animal shows.
7. **Parades & Road Events:** Reserve the keys; hide unavailable controls.
8. **Pop-Ups & Watch Parties:** Keep the keys; correct missed watch parties.
9. **Other:** Keep genuinely unclassified listings visible by default.

The main change from the proposal is moving music festivals into Concerts & Music. Also replace “Magic and Spectacle” with **Magic and Variety Shows**, replace “Olympic and Other Sports” with **Other Sports**, and add **Esports** as a sports subtype.

**Hard Cases**

- **Generic Events:** The original **207** reproduce exactly. Tested title and matching-listing rules identify **87 candidate moves**, leaving **120 unresolved**, before individual verification. The latest window has **269**, with **76 candidate moves** and **193 unresolved**. [C1–C5]
- **Missing Genres:** The original **195** also reproduce. The latest count is **209** under `eventType()`, or **213** when unmapped genre words are included. Matching performer names provides **93 candidate classifications**, not verified genres. [C1–C4]
- **Festivals:** Of the latest **20** broadly grouped listings, **6** appear to be music festivals, **6** nonmusic festivals, and **8** misfiled Markets. [C3]
- **Separate Groups:** Keep Family Shows and Conventions & Expos separate, while correcting broad seller tags.
- **Sports Levels:** Use explicit level first, then a mapped team league. This identifies **944 College**, **234 Pro**, **54 Minor League**, and **528 Unknown** sports listings. [C4]
- **Empty Types:** Preserve dormant keys. The archive contains **4 watch parties**, although none receives a watch key. [C3–C4]
- **Further Splits:** Add Esports; retain the proposed useful subtypes; avoid new top levels for themes or small activities.

**Three Biggest Risks:** Missing classification evidence, misleading seller tags, and hierarchy choices that make filters behave unexpectedly.

**Confidence:** High in reproduced counts; medium in the taxonomy; low in automatic performer-based corrections.

### 2. Final Taxonomy Table

**Scope and Interpretation**

The latest local snapshot is **November 1, 2026**, for every covered city. Its event window runs **November 1 through November 15**, inclusive. It is not a verified November 4 catalog. [C1]

The counts below describe the **unmodified app classifier**, regrouped into the original proposed nine types. They are the reproducible baseline, not invented totals after recommended corrections. Music festivals, misfiled markets, and other proposed moves are identified separately.

| Top Type | Sub-Types and Levels | Event Count (window) | Cities With Events | Data Support | Sample Events |
|---|---|---:|---:|---|---|
| Sports | Football; Basketball; Baseball and Softball; Hockey; Soccer; Volleyball; Combat Sports; Motorsports; Rodeo; Tennis and Golf; Lacrosse and Rugby; Other Sports; proposed Esports. Levels: Pro, Minor League, College, and source-gated High School | 1,760 | 40 | **Partly:** most sports are tagged; levels require derivation; generic sports still contain missed hockey, boxing, and racing listings | Sports appendix below |
| Concerts & Music | Rock and Alternative; Pop; Hip-Hop and Rap; R&B; Country and Folk; Latin; Electronic and Dance; Metal; Jazz and Blues; World and Reggae; Faith and Gospel; Classical and Opera; Genre Unknown; proposed Music Festivals | 1,460 | 39 | **Partly:** ordinary genres are usable; missing genres and festival content require care | Music appendix below |
| Theater & Comedy | Theater and Musicals; Comedy; Dance and Ballet; Magic and Variety Shows; Talks and Lectures; Film and Screenings | 1,105 | 36 | **Partly:** existing keys support these divisions, but broad tags and title precedence misfile some screenings and conversations | Arts appendix below |
| Family Shows | Ice Shows; Circus and Acrobatics; Kids and Family | 105 | 22 | **Partly:** explicit children’s and ice-show tags help; the broad Family tag is insufficient by itself | Family appendix below |
| Festivals & Fairs | Food and Drink Festivals; Cultural and Community Festivals; Fairs and Carnivals; Markets | 20 | 11 | **Partly:** festival keywords do not establish content; Community/Civic does not establish a market | Festival appendix below |
| Conventions & Expos | Fan Conventions; Trade and Hobby Expos; Auto, Boat, and Home Shows; Pet and Animal Shows | 14 | 8 | **Partly:** the existing expo tag contains speakers and performances | Expo appendix below |
| Parades & Road Events | Parades; Marathons and Road Races; Cycling Events; Holiday Events; Cultural Marches | 0 | 0 | **Needs New Source:** no qualifying archive records | Empty-bucket examples below |
| Pop-Ups & Watch Parties | Pop-Ups; Watch Parties; Live Screenings | 0 | 0 | **Partly:** keys already exist, but watch-party recognition misses actual records | Watch-party appendix below |
| Other | Unclassified Events | 269 | 28 | **Ready** as a fallback, not as a meaningful subject category | Other appendix below |

**Source:** `data/schedule-archive/<city>/2026-11-01.json`, processed by `count.mjs`; complete city tables are in `latest-city-types.csv` and `latest-city-top-types.csv`. [C1]

**Feeds by Top Type**

Sports comprises **666 ESPN**, **529 Sidearm**, **528 Ticketmaster**, **34 HockeyTech**, and **3 school-site** records. Every latest-window record in the other populated groups is from Ticketmaster. The empty groups have no recognized records. [C1]

**How Much the Data Actually Supports**

- Sports has **1,752 sports-domain records** plus **8 other-domain records** rescued by title keywords. The sports-domain records include **35** whose raw sport is merely `other`. [C1, C3]
- Concerts & Music has **1,383 concert keys** and **77 classical keys**. The classical key can come from an other-domain `Classical` or `Opera` tag, so a missing `audience.genre` does not make every classical performance Genre Unknown. [C1]
- Arts and family placement normally uses a recognized raw tag first, then title keywords. A recognized but misleading tag prevents a better title match from running. [L1]
- Festival and expo subtypes are mostly proposed interpretations of titles. They are not dedicated archive fields. [C3]
- The current keyword sequence checks sports, ice shows, circus, festivals, tribute shows, classical music, comedy, theater, dance, film, magic, talks, expos, fairs, markets, and children’s terms, in that order. It has no watch-party rule. [L1]

**Spot-Check Results**

I reviewed the selected records against their local titles, tags, existing classification, and relevant matching listings. This is a **local consistency audit**, not independent verification that every scheduled event actually takes place.

The sample is deliberately spread across existing keys. It is not random, so these rates must not be extrapolated to the whole catalog. All selected IDs, original files, and decisions are in `spot-checks.csv`. [C4, C6]

| Current Top Type | Checked | Top-Type Problems | Sub-Type Problems | Finding |
|---|---:|---:|---:|---|
| Sports | 20 | 0/20, 0% | 2/20, 10% | An Abbotsford hockey listing remains Other Sports; the Ford Veterans Day basketball title is tagged Motorsports |
| Concerts & Music | 20 | 0/20, 0% | 0/20, 0% found | This does not independently validate the seller’s genres |
| Theater & Comedy | 20 | 0/20, 0% | 2/20, 10% | A billed conversation and a screening are not consistently separated |
| Family Shows | 20 | 1/20, 5% | 0 additional | A Christmas Story screening is placed under Family by its broad tag |
| Festivals & Fairs | 20, all records | 8/20, 40% | 6/20, 30% | All Markets are suspect; food, community, and fan festivals are treated as music festivals |
| Conventions & Expos | 14, all records | 6/14, 42.9% | 0 additional | Five speaker or performance listings and one market are mixed with expos |
| Other | 20 | 11/20, 55% have candidate destinations | Not applicable | These are candidate corrections, not independently confirmed misfiles |
| Parades & Road Events | 0 | Not measurable | Not measurable | No archive records |
| Pop-Ups & Watch Parties | 0 recognized | Not measurable | Not measurable | Separately checked all four title-identified watch parties |

**Sample Appendix**

All dates below are in **2026**. These are archive listings, not freshly verified public schedules.

To keep the tables readable:

- `S[sport]`: `kind=game`, `audience.domain=sports`, and the named raw sport.
- `M[genre]`: `kind=show`, `audience.domain=music`, and the named raw genre.
- `O[tag]`: `kind=special`, `audience.domain=other`, and the named raw tag.
- `C`: raw `audience.level=college`.
- `W` or `Men`: raw `audience.division=women` or `men`.
- `TM`: Ticketmaster; `SA`: Sidearm; `HT`: HockeyTech.
- Missing level or division markers mean those fields are absent.
- Raw tags retain their source spelling. They are evidence, not proposed UI labels.

The complete samples, including event IDs and original archive file paths, are in `samples.csv`. They were selected by `samples.py`, with supplementary inspected records identified below. [C3, C6]

**Sports Samples**

| Sub-Type | Sample Events, City, Date, Feed, and Raw Values |
|---|---|
| Football | Georgia Tech vs. Louisville, Atlanta, 11-07, ESPN, `S[football]`; Kennesaw St vs. Delaware, Atlanta, 11-07, ESPN, `S[football]`; Georgia St vs. GA Southern, Atlanta, 11-14, ESPN, `S[football]`; Falcons vs. Chiefs, Atlanta, 11-15, ESPN, `S[football]`; Texas St vs. Fresno St, Austin, 11-14, ESPN, `S[football]` |
| Basketball | Georgia St vs. Bowling Green, Atlanta, 11-02, ESPN, `S[basketball]`; Georgia Tech vs. Hofstra, Atlanta, 11-02, ESPN, `S[basketball]`; Kennesaw St vs. Midway, Atlanta, 11-02, ESPN, `S[basketball]`; Kennesaw St vs. Shorter, Atlanta, 11-02, ESPN, `S[basketball]`; Georgia Bulldogs Womens Basketball vs. West Georgia Wolves Womens Basketball, Atlanta, 11-02, TM, `S[basketball]` |
| Baseball and Softball | Kennesaw State vs. Tennessee, Atlanta, 11-01, SA, `S[baseball], C`; Ohio State vs. Scarlet vs. Gray Series, Columbus, 11-02, SA, `S[softball], C`; UC Irvine vs. UCLA, Los Angeles, 11-07, SA, `S[baseball], C`; UC Irvine vs. Fresno State, Los Angeles, 11-14, SA, `S[baseball], C`; Samford Vs LSU, New Orleans, 11-01, TM, `S[baseball]` |
| Hockey | Atlanta Gladiators vs. Trois-Rivières Lions, Atlanta, 11-13, TM, `S[hockey]`; Columbus River Dragons vs. Mid-South Monarchs, Atlanta, 11-13, TM, `S[hockey]`; Stars vs. Wolves, Austin, 11-06, HT, `S[hockey]`; Stars vs. Moose, Austin, 11-10, HT, `S[hockey]`; Sharks vs. Flames, Bay Area, 11-02, ESPN, `S[hockey]` |
| Soccer | Georgia State vs. Old Dominion, Atlanta, 11-01, SA, `S[soccer], C, W`; Atlanta United FC vs. Toronto FC, Atlanta, 11-01, TM, `S[soccer]`; Georgia State vs. Kentucky, Atlanta, 11-03, SA, `S[soccer], C, Men`; Texas vs. Auburn, Austin, 11-01, SA, `S[soccer], C`; Austin FC vs. Portland Timbers, Austin, 11-07, TM, `S[soccer]` |
| Volleyball | Georgia Tech Yellow Jackets Womens Volleyball vs. North Carolina State Wolfpack Womens Volleyball, Atlanta, 11-06, TM, `S[volleyball]`; Georgia Tech Yellow Jackets Womens Volleyball vs. Wake Forest Demon Deacons Womens Volleyball, Atlanta, 11-08, TM, `S[volleyball]`; Georgia State vs. Louisiana Tech, Atlanta, 11-12, SA, `S[volleyball], C`; Georgia Bulldogs Womens Volleyball vs. Kentucky Wildcats Womens Volleyball, Atlanta, 11-15, TM, `S[volleyball]`; Texas vs. Texas A&M, Austin, 11-01, SA, `S[volleyball], C` |
| Combat Sports | Ohio State vs. Columbia University, Columbus, 11-15, SA, `S[wrestling], C`; Domingo Familiar de Lucha Libre CMLL, Mexico City, 11-01, TM, `S[wrestling]`; Martes Populares de Lucha Libre CMLL, Mexico City, 11-03, TM, `S[wrestling]`; Viernes Espectacular de Lucha Libre CMLL, Mexico City, 11-06, TM, `S[wrestling]`; Rutgers vs. Lehigh, New York, 11-15, SA, `S[wrestling], C` |
| Motorsports | Hot Wheels Monster Trucks™ Live Glow-N-Fire, Dallas–Fort Worth, 11-13, TM, `S[motorsports]`; NHRA Las Vegas Nationals, Las Vegas, 11-01, TM, `S[motorsports]`; NASCAR Craftsman Truck Series Championship, Miami, 11-06, TM, `S[motorsports]`; NASCAR O'Reilly Auto Parts Series Championship, Miami, 11-07, TM, `S[motorsports]`; NASCAR Cup Series Championship, Miami, 11-08, TM, `S[motorsports]` |
| Rodeo | Stockyards Championship Rodeo, Dallas–Fort Worth, 11-01, 11-05, 11-06, and 11-07, TM, `S[rodeo]`; PBR Teams: Outlaw Days, Kansas City, 10-23, TM, `S[rodeo]` |
| Tennis and Golf | Dragon Invitational vs. Temple, Philadelphia, 11-06, SA, `S[tennis], C, Men`. This is the only record in this bucket across the archive. No golf examples are available |
| Lacrosse and Rugby | Toronto vs. Wilfrid Laurier University, Toronto, 11-01, SA, `S[lacrosse], C, Men`; NLL Preseason: Buffalo Bandits Vs Las Vegas Desert Dogs, Toronto, 11-14, TM, `S[lacrosse]`; Oshawa FireWolves vs. Rochester Knighthawks, Toronto, 11-14, TM, `S[lacrosse]`; vs. Stanford vs. Cal, Bay Area, 10-24, SA, `S[lacrosse], C`; Boston University vs. Brown, Boston, 10-23, SA, `S[lacrosse], C, Men` |
| Other Sports | Ohio Wesleyan vs. Kenyon, Columbus, 11-04, SA, `S[field hockey], C`; UCLA vs. UC San Diego, Los Angeles, 11-07, school-site, `S[water polo], C, Men`; UCLA vs. USC, Los Angeles, 11-14, school-site, `S[water polo], C, Men`; LIU vs. Wagner, New York, 11-07, SA, `S[swimming], C, W`; Delaware vs. MPSF Semifinal, Philadelphia, 11-06, SA, `S[field hockey], C` |
| Esports, Proposed | Worlds 2026 - Quarters 1, 11-03; Quarters 2, 11-04; Quarters 3, 11-05; Quarters 4, 11-06; Semis 1, 11-07. All Dallas–Fort Worth, TM, `S[other]`. These require a reviewed competition-title mapping |
| High School, Source-Gated Level | CHSAA State Gymnastics Championships Day 1, Denver, 11-06, TM, `O[Undefined]`; Day 2, 11-07, same raw values. CHSAA State Volleyball Day 1, 11-12; Day 2, 11-13; Day 3, 11-14, Denver, TM, `O[Undefined]`. The volleyball titles receive a sports key, but none has a stored school level |

The High School examples expose a factual gap in the earlier “none” statement. They do not authorize changing the locked source gate. Whether these incidental Ticketmaster listings satisfy that gate needs an explicit interpretation.

**Music Samples**

| Sub-Type | Sample Events, City, Date, Feed, and Raw Values |
|---|---|
| Rock and Alternative | The Menzingers, Atlanta, 11-01, TM, `M[Rock]`; Emo Orchestra, Atlanta, 11-01, TM, `M[Rock]`; Dead Poet Society, Atlanta, 11-03, TM, `M[Rock]`; The Afghan Whigs, Atlanta, 11-05, TM, `M[Alternative]`; Trivium, Atlanta, 11-06, TM, `M[Rock]` |
| Pop | TEN, Atlanta, 11-03; The Army, The Navy, Atlanta, 11-04; Knox, Atlanta, 11-05; Olivia Rodrigo, Atlanta, 11-11; Paula Cole, Atlanta, 11-14. All TM, `M[Pop]` |
| Hip-Hop and Rap | Fetty Wap, Atlanta, 11-06; Moneybagg Yo, Atlanta, 11-07; honestav, Atlanta, 11-08; KenTheMan, Atlanta, 11-15; Doja Cat, Austin, 11-03. All TM, `M[Hip-Hop/Rap]` |
| R&B | Usher Raymond & Chris Brown, Atlanta, 11-05; Anthony Hamilton, Atlanta, 11-14; Steve Lacy, Austin, 11-07; Clara La San, Austin, 11-15; Ms. Lauryn Hill, Bay Area, 11-04. All TM, `M[R&B]` |
| Country and Folk | Bruce Cockburn, Atlanta, 11-04, `M[Country]`; Brantley Gilbert, Atlanta, 11-05, `M[Country]`; The Arcadian Wild, Atlanta, 11-05, `M[Folk]`; Sugarland, Atlanta, 11-07, `M[Country]`; Yaelokre, Atlanta, 11-10, `M[Folk]`. All TM |
| Latin | MANÁ, Austin, 11-08; José Madero, Austin, 11-11; El Tri, Austin, 11-13; Intocable, Austin, 11-14; DANNA, Austin, 11-14. All TM, `M[Latin]` |
| Electronic and Dance | INNA, Atlanta, 11-06; Jai Wolf, Atlanta, 11-07; Carl Cox, Atlanta, 11-13; Lenny Pearce, Atlanta, 11-14; Subtronics, Atlanta, 11-14. All TM, `M[Dance/Electronic]` |
| Metal | Whitechapel, Atlanta, 11-11; Suicide Silence, Atlanta, 11-13; Chat Pile, Atlanta, 11-15; Knocked Loose, Austin, 11-05; Ceremony, Bay Area, 11-13. All TM, `M[Metal]` |
| Jazz and Blues | Rick Braun, Atlanta, 11-06, `M[Jazz]`; Tab Benoit, Atlanta, 11-11, `M[Blues]`; Béla Fleck, Chicago, 11-04, `M[Jazz]`; The Steepwater Band, Chicago, 11-07, `M[Blues]`; Chris Mitchell, Cleveland, 11-06, `M[Jazz]`. All TM |
| World and Reggae | Rahat Fateh Ali Khan, Atlanta, 11-06, `M[World]`; UB40, Atlanta, 11-12, `M[Reggae]`; Aterciopelados, Bay Area, 11-11, `M[World]`; Klass, Boston, 11-14, `M[World]`; Pouya, Chicago, 11-05, `M[World]`. All TM. These are seller classifications, not my independent genre judgments |
| Faith and Gospel | Chris Tomlin, Boston, 11-14; Abbie Gamboa, Chicago, 11-05; TOBYMAC, Cleveland, 11-07; Elevation Rhythm, Columbus, 11-11; Bryce Crawford, Dallas–Fort Worth, 11-08. All TM, `M[Religious]` |
| Classical and Opera | Zade Dirani, Atlanta, 11-02, `M[Classical]`; Bach + Brahms, Atlanta, 11-05, `O[Classical]`; Atlanta Opera Presents Silent Night, Atlanta, 11-07, `O[Opera]`; Fauré's Requiem with ASO, Atlanta, 11-12, `O[Classical]`; Manon w/ San Francisco Opera, Bay Area, 11-01, `O[Opera]`. All TM |
| Genre Unknown | Higher Learning, Atlanta, 11-02; Mannequin Pussy, Atlanta, 11-03; Victoria Monét, Atlanta, 11-04; Madeon, Atlanta, 11-05; Julia Jacklin, Atlanta, 11-06. All TM, `M[Other]` |
| Music Festivals, Proposed Placement | Breakaway Music Festival, Houston, 11-13, TM, `O[Fairs & Festivals]`; Reggae Rise Up Festival, Miami, 11-14, TM, `M[Other]`; Dilly Dally Fest 4, Philadelphia, 11-15, TM, `O[Undefined]`; Annual Chandler Mariachi Festival, Phoenix, 11-01, TM, `M[Latin]`; Lost In Dreams Festival, Bay Area, 10-30, TM, `M[Other]` |

**Arts and Family Samples**

| Sub-Type | Sample Events, City, Date, Feed, and Raw Values |
|---|---|
| Theater and Musicals | Hocus Pocus: Live With The Atlanta Symphony Orchestra, Atlanta, 11-01, `O[Miscellaneous Theatre]`; Waiting to Exhale in Concert, Atlanta, 11-06, same tag; Los Parceritos, Atlanta, 11-09, `O[Theatre]`; The Jinkx and DeLa Holiday Show, Atlanta, 11-11, `O[Performance Art]`; A Beautiful Noise (Touring), Austin, 11-03, `O[Theatre]`. All TM. The first two illustrate potentially misleading theater tags |
| Comedy | Daniel Sloss: BITTER, Atlanta, 11-04; Dave Chappelle Karmageddon, Atlanta, 11-04; Charlie Berens: The Lost and Found Tour, Atlanta, 11-07; Little Shop Of Horrors: 40th Anniversary Screening Feat. Ellen Greene, Atlanta, 11-13; JK Live!, Atlanta, 11-13. All TM, `O[Comedy]`. The screening should be reviewed for Film and Screenings |
| Dance and Ballet | Oakland Ballet: Luna Mexicana, Bay Area, 11-01, `O[Dance]`; NUTCRACKER! Magical Christmas Ballet, Bay Area, 11-14, `O[Dance]`; Cinderella by The United European Ballet Company, Chicago, 11-03, `O[Dance]`; Cinderella by the United European Ballet Company, Detroit, 11-13, `O[Undefined]`; Step Afrika!, Detroit, 11-14, `O[Dance]`. All TM |
| Magic and Variety Shows | Justin Willman: One For The Ages Tour, Indianapolis, 11-12, `O[Magic & Illusion]`; Magic Rocks!, Los Angeles, 11-05, same tag; Penn & Teller, Los Angeles, 11-05, same tag; The Wizard of Oz at Sphere, Las Vegas, 11-01, `O[Spectacular]`; Now You See Me Live, New York, 11-11, `O[Magic & Illusion]`. All TM. Sphere’s presentation requires a content check before retaining this subtype |
| Talks and Lectures | Miel San Marcos Conference 2026, Los Angeles, 11-07, `O[Lecture/Seminar]`; Matt Fraser - America's Top Psychic, Los Angeles, 11-14, `O[Psychics/Mediums/Hypnotists]`; Matt Fraser - Americas Top Medium, Los Angeles, 11-15, same tag; Mujer Verdadera '26, Miami, 11-13, `O[Lecture/Seminar]`; Tyler Henry - The Hollywood Medium: An Evening of Hope and Healing, Toronto, 11-14, `O[Psychics/Mediums/Hypnotists]`. All TM |
| Film and Screenings | Abbott & Costello Meet Frankenstein - The 2026 Horrorthon, New York, 11-01, `O[Horror]`; Godzilla vs. Destoroyah, New York, 11-13, `O[Action/Adventure]`; The Cinegogue and Footlong Development Present POSESSION, Los Angeles, 10-18, `O[Horror]`; My Hero Academia in Concert, Milwaukee, 10-20, `O[Animation]`; The Exorcist - The 2026 Horrorthon, New York, 10-30, `O[Horror]`. All TM. “In Concert” needs a live-score versus film-only check |
| Ice Shows | Disney On Ice presents Magic of Family, Atlanta, 11-01; Find Your Hero, Denver, 11-13; Magic in the Stars, Houston, 11-12; Spotlight Magic!, New York, 11-01. All TM, `O[Ice Shows]`. Disney On Ice Presents Find Your Hero, Salt Lake City, 11-06, TM, `O[Miscellaneous]`, is rescued by its title |
| Circus and Acrobatics | Ringling Bros. and Barnum & Bailey with Special Guest Bello Nock, Chicago, 11-06; Gravity & Other Myths, Milwaukee, 11-13; Cirque Mechanics: Tilt!, Phoenix, 11-14; Ansar Shrine Circus, St. Louis, 11-06; UniverSoul Circus, Columbus, 10-29. All TM, `O[Circus & Specialty Acts]` |
| Kids and Family | Jim Henson's Labyrinth: In Concert, Atlanta, 11-08, `O[Family]`; Dog Man - The Musical, Bay Area, 11-01, `O[Children's Theatre]`; Bluey's Big Play, Bay Area, 11-01, same tag; Dr. Neil deGrasse Tyson - Astronomy Bizarre, Chicago, 11-10, `O[Family]`; Dr. Neil deGrasse Tyson - Delusions of Space Enthusiasts, Chicago, 11-12, same tag. All TM. The talks demonstrate why Family alone is weak evidence |

A supplementary family-music record is **CoComelon, New York, November 15, Ticketmaster, `M[Children's Music]`**. Recommend Kids and Family rather than Genre Unknown. [C6]

**Festival and Expo Samples**

Some buckets have fewer than the requested sample count. All available relevant examples are shown rather than padded with unrelated listings.

| Sub-Type | Sample Events, City, Date, Feed, and Raw Values |
|---|---|
| Food and Drink Festivals | Austin Food & Wine Festival, Austin, 11-06, 11-07, and 11-08, TM, `M[Other]`; The Inquirer Food Festival 2026, Philadelphia, 11-14, TM, `O[Food & Drink]`. These are all four records |
| Cultural and Community Festivals | Day of the Dead Festival, Denver, 11-01, TM, `O[Fairs & Festivals]`; Secretaries' Cup Fan Fest, Washington, 11-14, TM, `O[Undefined]`. The Denver raw title begins with damaged text, `D??a de Muertos`; its English title is intact |
| Fairs and Carnivals | State Fair of Texas, Dallas–Fort Worth, 10-08, 10-09, 10-10, 10-11, and 10-12, `listing`, `O[fair]`. These are separate daily records |
| Markets | Lafayette Nutcracker Market 2026, New Orleans, 11-07, TM, `O[Hobby/Special Interest Expos]`, is a title-supported market candidate. The current Markets key instead contains Dante Gebel, Boston, 11-06; Rachel Maddow, Boston, 11-11; Dante Gebel, Los Angeles, 11-11; Theresa Caputo, New York, 11-05; and Dean Brody & The Reklaws, Vancouver, 11-05. All five are TM, `O[Community/Civic]`, and are counterexamples, not valid market samples |
| Fan Conventions | Rhode Island Comic Con, Boston, 11-06, TM, `O[Hobby/Special Interest Expos]`; Collect-A-Con (Houston 2, TX), Houston, 11-07, same feed and tag; New York Comic Con, New York, 10-08, 10-09, and 10-10, `listing`, `O[convention]` |
| Trade and Hobby Expos | The Harvest Cup - Friday Only 12PM-6PM, Boston, 11-13; Saturday Only 10AM-6PM, Boston, 11-14. Both TM, `O[Hobby/Special Interest Expos]`. Three counterexamples carrying that same tag are An Evening with David Sedaris, Bay Area, 11-14; Andrea Gibson, Columbus, 11-07; and Iyanla Vanzant, New York, 11-06. Their tag alone does not make them expos |
| Auto, Boat, and Home Shows | New England Motorsports Classic, Boston, 10-30, 10-31, and 11-01, TM, `O[Hobby/Special Interest Expos]`. These are the available title candidates. No separate boat or home-show examples were identified |
| Pet and Animal Shows | 2026 KC Pet Fest, Kansas City, 11-07, TM, `O[Hobby/Special Interest Expos]`; Salon National des Animaux de Compagnie de Montreal 2026, Montreal, 11-07, TM, `O[Fairs & Festivals]`. The latter currently falls into Other |

Austin’s own festival page explicitly describes food and drink admission, supporting its removal from Music Festivals. [Austin Food & Wine](https://www.austinfoodandwinefestival.com/)

**Watch-Party and Other Samples**

| Bucket | Sample Events, City, Date, Feed, and Raw Values |
|---|---|
| Watch Parties | Watch Party - Valkyries V Dream- WNBA Finals Game 4, Bay Area, 10-24, TM, `S[basketball]`, currently Basketball; Brewers World Series Watch Party: Game 3, Milwaukee, 10-26, TM, `O[Undefined]`, currently Other; Game 4, Milwaukee, 10-27, same feed and tag; Worlds Finals Watch Party, Clash of Clans, Salt Lake City, 11-14, TM, `O[Multimedia]`, currently Theater |
| Unclassified Events | Buena Vista Social Club, Atlanta, 11-01; Shyne, Atlanta, 11-01; Brutalismus 3000 w/ Pluko, Atlanta, 11-07; Expedited Entry & Social Club Happy Hour - Steve Lacy, Austin, 11-07; Lucy Bedroque w/ pinponpanpon, Bay Area, 11-06. All TM, `O[Undefined]` |

**Empty Buckets and Real-World Examples**

| Bucket | Archive Finding | Opened Public Example |
|---|---|---|
| Parades | None in the archive | [Rose Parade](https://tournamentofroses.com/event/rose-parade/) |
| Marathons and Road Races | None in the archive | [Los Angeles Marathon](https://www.mccourtfoundation.org/event/los-angeles-marathon/) |
| Cycling Events | None in the archive | [TD Five Boro Bike Tour](https://www.bike.nyc/events/td-five-boro-bike-tour/) |
| Holiday Events, as Street Celebrations | None identified; holiday concerts and stage shows do exist | [Rockefeller Center Tree Lighting](https://www.rockefellercenter.com/holidays/rockefeller-center-christmas-tree/) |
| Cultural Marches | None in the archive | [NYC Pride March](https://www.nycpride.org/event/nyc-pride-march?os=v) |
| Pop-Ups | None receives a pop-up key | Roof East and Rotate by Jimmy’s are described as pop-ups by [Visit London](https://www.visitlondon.com/blog/summer-pop-ups-london) |
| Live Screenings | None receives a live-screening key | [The Met: Live in HD](https://www.fathomentertainment.com/series/the-met-live-in-hd/) provides a clear live cinema-transmission example |
| Horse Racing, Existing Dormant Key | No record receives `sports.horse_racing`; generic racing admission appears under Other Sports | Breeders’ Cup pages opened without readable event detail, so the proposed external example remains **unverified** |

### 3. Counts Appendix

**Reproduction Method**

`count.mjs` imports the installed Vite module, disables configuration and environment-file loading, keeps its cache in scratch, and loads the actual `/src/data/eventTypes.ts`. It also reads the app’s team and genre helpers. No reimplementation replaces `eventType()`. There is no exported nine-group helper, so the scratch script explicitly regroups the returned keys. [C1]

For historical counts, the deduplication key is **city plus event ID**, retaining the latest archived representation of that ID. This measures distinct archived IDs, not independently deduplicated real-world admissions.

For example, the latest files contain school-site and Sidearm records for UCLA versus USC water polo on the same date. I did not silently merge them with a new research-only rule. [C6]

**Archive Coverage**

| Measure | Reproduced Result |
|---|---:|
| City folders | 40 |
| Files captured since October 4 | 875 |
| Capture-date range | October 4 through November 1 |
| Latest file in every city | November 1 |
| Latest event window | November 1 through November 15 |
| Latest-window records | 4,733 |
| All snapshot row occurrences | 63,333 |
| Distinct archived event IDs across all days | 9,078 |
| Event-date range across those IDs | October 4 through November 15 |
| Distinct IDs through October 24 | 5,840 |
| October 24 window records | 3,966 |

**Source:** `archive-files.csv`, `summary.json`, `history.txt`, and `final-metrics.txt`, generated by C1, C2, and C6.

The archive covers a changing autumn schedule and expanding venue coverage. It cannot establish annual demand or prove that a currently empty category has no audience.

**Every Existing Type Key**

All values below come from the app’s own classifier. Zero rows are retained. [C1, C2, C5]

| Existing Key | October 24 | Latest | Change | All Days |
|---|---:|---:|---:|---:|
| `sports.baseball` | 26 | 7 | -19 | 55 |
| `sports.softball` | 12 | 5 | -7 | 19 |
| `sports.basketball` | 514 | 831 | +317 | 1,052 |
| `sports.football` | 162 | 147 | -15 | 325 |
| `sports.soccer` | 272 | 121 | -151 | 428 |
| `sports.hockey` | 342 | 342 | 0 | 698 |
| `sports.lacrosse` | 8 | 3 | -5 | 12 |
| `sports.volleyball` | 224 | 220 | -4 | 419 |
| `sports.tennis` | 1 | 1 | 0 | 1 |
| `sports.golf` | 0 | 0 | 0 | 0 |
| `sports.combat` | 13 | 18 | +5 | 40 |
| `sports.motorsports` | 5 | 14 | +9 | 24 |
| `sports.rodeo` | 2 | 8 | +6 | 14 |
| `sports.horse_racing` | 0 | 0 | 0 | 0 |
| `sports.rugby` | 1 | 0 | -1 | 2 |
| `sports.cricket` | 0 | 0 | 0 | 0 |
| `sports.track` | 0 | 0 | 0 | 0 |
| `sports.other` | 36 | 43 | +7 | 78 |
| `music.concert` | 1,420 | 1,383 | -37 | 3,113 |
| `music.festival` | 12 | 12 | 0 | 31 |
| `music.classical` | 75 | 77 | +2 | 136 |
| `arts.theatre` | 323 | 889 | +566 | 1,372 |
| `arts.comedy` | 115 | 154 | +39 | 271 |
| `arts.dance` | 24 | 19 | -5 | 40 |
| `arts.film` | 13 | 2 | -11 | 21 |
| `arts.talk` | 8 | 6 | -2 | 17 |
| `arts.spectacle` | 28 | 35 | +7 | 63 |
| `family.circus` | 15 | 24 | +9 | 61 |
| `family.ice_show` | 48 | 46 | -2 | 91 |
| `family.kids` | 39 | 35 | -4 | 65 |
| `fairs.fair` | 0 | 0 | 0 | 11 |
| `fairs.expo` | 13 | 14 | +1 | 26 |
| `fairs.market` | 8 | 8 | 0 | 17 |
| `popup` | 0 | 0 | 0 | 0 |
| `watch.broadcast` | 0 | 0 | 0 | 0 |
| `watch.screening` | 0 | 0 | 0 | 0 |
| `other` | 207 | 269 | +62 | 576 |
| **Total** | **3,966** | **4,733** | **+767** | **9,078** |

The reported **37 keys in 8 groups** are correct. The introductory comment saying “36 types” is stale. The classifier works on read; it does not store these derived keys on events. [L1]

**Compact Existing-Type-by-City Table**

These are the largest cities by latest-window volume. “Remaining Keys” combines the other existing keys only for this compact display. The full CSV retains every key separately. [C1, C6]

| City | Total | Basketball | Hockey | Soccer | Volleyball | Concert | Theater | Comedy | Event | Remaining Keys |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| New York | 1,045 | 46 | 12 | 8 | 13 | 128 | 641 | 22 | 121 | 54 |
| Los Angeles | 333 | 56 | 19 | 14 | 21 | 130 | 45 | 6 | 17 | 25 |
| Dallas–Fort Worth | 184 | 44 | 4 | 5 | 10 | 59 | 16 | 3 | 12 | 31 |
| Boston | 179 | 32 | 35 | 5 | 2 | 63 | 9 | 13 | 6 | 14 |
| Chicago | 178 | 35 | 12 | 4 | 7 | 58 | 12 | 12 | 19 | 19 |
| Washington | 173 | 33 | 4 | 8 | 9 | 55 | 24 | 8 | 7 | 25 |
| Philadelphia | 162 | 33 | 21 | 3 | 9 | 59 | 3 | 10 | 10 | 14 |
| Toronto | 149 | 13 | 36 | 1 | 6 | 57 | 9 | 7 | 1 | 19 |
| Atlanta | 146 | 34 | 3 | 3 | 5 | 69 | 4 | 6 | 4 | 18 |
| Bay Area | 146 | 36 | 4 | 5 | 11 | 51 | 4 | 6 | 16 | 13 |

**Compact City-by-Proposed-Top-Type Table**

The two empty top types are omitted from this compact display; both are zero throughout. [C1]

| City | Sports | Concerts & Music | Theater & Comedy | Family Shows | Festivals & Fairs | Conventions & Expos | Other |
|---|---:|---:|---:|---:|---:|---:|---:|
| New York | 89 | 142 | 673 | 16 | 2 | 2 | 121 |
| Los Angeles | 120 | 134 | 58 | 3 | 1 | 0 | 17 |
| Dallas–Fort Worth | 88 | 64 | 19 | 1 | 0 | 0 | 12 |
| Boston | 78 | 65 | 22 | 0 | 2 | 6 | 6 |
| Chicago | 63 | 59 | 25 | 12 | 0 | 0 | 19 |
| Washington | 65 | 63 | 35 | 0 | 3 | 0 | 7 |
| Philadelphia | 77 | 59 | 13 | 0 | 2 | 1 | 10 |
| Toronto | 65 | 65 | 18 | 0 | 0 | 0 | 1 |
| Atlanta | 50 | 79 | 10 | 3 | 0 | 0 | 4 |
| Bay Area | 58 | 56 | 12 | 3 | 0 | 1 | 16 |

**Cities With the Largest Classification Gaps**

| Rank | Most Generic Events | Count | Most Concerts Without an `eventType()` Genre | Count |
|---|---|---:|---|---:|
| 1 | New York | 121 | New York | 22 |
| 2 | Chicago | 19 | Denver | 17 |
| 3 | Los Angeles | 17 | San Antonio | 15 |
| 4 | Bay Area | 16 | Dallas–Fort Worth | 14 |
| 5 | Dallas–Fort Worth | 12 | Philadelphia | 12 |

**Source:** `inspection.txt`, produced by C3.

**All-Days Top-Type Counts**

| Proposed Group | Distinct Archived IDs | Cities |
|---|---:|---:|
| Sports | 3,167 | 40 |
| Concerts & Music | 3,249 | 40 |
| Theater & Comedy | 1,784 | 38 |
| Family Shows | 217 | 29 |
| Festivals & Fairs | 59 | 15 |
| Conventions & Expos | 26 | 10 |
| Parades & Road Events | 0 | 0 |
| Pop-Ups & Watch Parties | 0 recognized | 0 recognized |
| Other | 576 | 35 |

**Source:** C1, `summary.json`.

The all-days feeds are Ticketmaster **6,737**, ESPN **1,189**, Sidearm **1,013**, HockeyTech **79**, MLB **31**, listing **17**, seed **8**, and school-site **4**. [C1]

**Differences From the Earlier Research**

| Earlier Claim | Recheck | Explanation |
|---|---|---|
| Latest window: 3,966 | Now 4,733, an increase of 767 | Different snapshot and event window. The October 24 files reproduce 3,966 exactly |
| Mostly October 24 files | Every reconstructed old-window file is October 24; every latest file is November 1 | The file manifest establishes the dates |
| All days: 5,840 | Now 9,078, an increase of 3,238 | Through October 24, the count is exactly 5,840 |
| Sports: 1,618 | Now 1,760, +142 | Window change; old key counts reproduce |
| Concerts & Music: 1,495 | Now 1,460, -35 | Window change |
| Theater & Comedy: 511 | Now 1,105, +594 | Window change and expanded listings, especially New York theater; no classifier discrepancy is required |
| Family Shows: 102 | Now 105, +3 | Window change |
| Festivals & Fairs: 20 | Still 20 | Same total, different records; not evidence of correct placement |
| Conventions & Expos: 13 | Now 14, +1 | Window change |
| Event: 207, about 5.2% | Now 269, about 5.7% | Window change; old tag breakdown reproduces exactly |
| About 91% sorts cleanly into the largest groups | About 91.4% falls into those groups in both windows | Group membership is reproducible; “cleanly” is unsupported because misfiles remain |
| Missing concert genres: about 195, citing Other 181 and Undefined 19 | Exactly 195 concerts: Other 176 plus Undefined 19 | The cited raw show counts total 200; five Other-tagged shows are festivals, not concert keys |
| Current missing concert genres | Other 185 plus Undefined 24 gives 209, +14 | Later window |
| College: 902, supposedly from home league | 902 reproduces only when explicit college tags are also used | Home league alone identifies 501 in the old sports-key population |
| Pro 297, Minor or Junior 51 | Pro 299, Minor or Junior 49 under the recommended league map | Two old-window USL Super League games belong in Pro |
| Unknown games: 366 | Reproduces for old `kind=game` records after explicit-level fallback | Including sports rescued from specials gives 368 instead |
| High School: 0 | Zero stored school levels, but two old and five latest CHSAA title candidates | Missing metadata was mistaken for absence of events |
| One watch party | Three title-identified records in the old window; four across all days | Two Brewers performances plus the WNBA watch party; a later esports watch party adds another |
| Ticketmaster segment and subgenre are thrown away | True for stored event records, with a diagnostic exception | The loader retains them temporarily in `bigRoomSpecials`, and catalog-write logs that diagnostic |

**Sources:** C1–C6; `ticketmasterSource.ts` and `catalog-write.mjs`.

**Fields Actually Present**

Counts are filled records divided by all records from that feed, not by only the relevant domain. A blank genre on a sports feed is therefore expected. Home and away fields contain IDs; league is looked up in `TEAMS`, not stored as `teams.home.league`. [C3, C6, L2]

| Feed | Records | Kind and Domain | Sport | Level | Genre | Other Tag | Home and Away IDs | Derived Home League |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Ticketmaster | 3,501 | 100% | 520/3,501, 14.9% | 0% | 1,418/3,501, 40.5% | 1,563/3,501, 44.6% | 0% | 0% |
| ESPN | 666 | 100% | 100% | 0% | 0% | 0% | 100% | 100% |
| Sidearm | 529 | 100% | 100% | 100%, College | 0% | 0% | 256/529, 48.4% | 256/529, 48.4% |
| HockeyTech | 34 | 100% | 100% | 0% | 0% | 0% | 100% | 100% |
| School-Site | 3 | 100% | 100% | 100%, College | 0% | 0% | 100% | 100% |

Additional findings:

- Ticketmaster fills `performer` on **3,501/3,501** records, but the loader can fall back to the listing name. Filled does not mean independently identified artist.
- Ticketmaster performer IDs appear on **416/3,501**, or **11.9%**.
- Sidearm has division on **420/529**, or **79.4%**. School-site has division on every record.
- Ticketmaster has **214 raw generic music genres** across all music-domain listings, including festivals, and **322 Undefined or Miscellaneous tags** across specials.
- Segment, subgenre, and full classifications have **zero event-level fill** in both the latest and all-days datasets.
- All latest records have venue places. There are no route or point records in that window.

**Source:** `fill-rates.csv`, `inspection.txt`, and `audit.txt`, from C3, C5, and C6.

The historical feeds absent from the latest window are also covered in `fill-rates.csv`: MLB has team IDs and derived leagues throughout; listing records have sports or other tags but no team IDs; seeds have their hand-authored sports or music fields. Their presence does not create a recurring street-event feed.

### 4. Where The 207 And The Genre-Less Concerts Go

**The Generic Events**

Two distinct tests were run:

1. Narrow title rules, such as an explicit watch-party, NHRA, rodeo, documentary, or concert phrase.
2. Exact normalized title or performer matching against other archived listings that have one non-generic existing type.

Neither test independently verifies an event’s subject. Matching another seller classification can copy another error. The following are **candidate destinations**, not approved automatic corrections. [C5]

| Candidate Destination | Original 207 | Latest 269 | Evidence and Proposed Rule |
|---|---:|---:|---|
| Concerts & Music | 41 | 36 | Explicit concert, orchestra, or ensemble wording, or one matching non-generic archive classification |
| Comedy | 15 | 11 | Matching performer or title already tagged Comedy elsewhere |
| Theater and Musicals | 8 | 2 | Matching production classification, including Buena Vista Social Club |
| Dance and Ballet | 1 | 1 | Matching performer classification |
| Talks and Lectures | 3 | 6 | Conversation, speaker-series, longevity-talk, or Q&A wording |
| Film and Screenings | 6 | 1 | Documentary, a specific film title, or Rocky Horror wording; mixed live performances still need review |
| Kids and Family | 6 | 8 | Explicit children’s brands or a matching family classification |
| Rodeo | 2 | 3 | Rodeo, PBR, or bullfighter wording |
| Motorsports | 0 | 4 | NHRA wording |
| School Sports | 2 | 2 | CHSAA gymnastics titles; level gate remains unresolved |
| Watch Parties | 2 | 0 | Explicit Watch Party wording within Other |
| Pet and Animal Shows | 1 | 1 | Explicit animal-show title |
| Fan Conventions | 0 | 1 | Collect-A-Con wording |
| **Unresolved After These Tests** | **120** | **193** | No narrow title rule or unique non-generic matching classification |
| **Total** | **207** | **269** | |

With title rules alone, the remaining counts are **176** and **236**. Adding matching-listing candidates reduces them to **120** and **193**. These are conditional research results, not a claim that every proposed move is safe. [C5]

**What Remains to Review**

The unresolved rows were grouped for review using explicit title patterns. These groups are hypotheses, not reliable automatic classifications.

| Review Group | Original Window | Latest Window | Recommended Handling |
|---|---:|---:|---|
| Stage-Show Candidates | 37 | 108 | Match a verified production, not a theater venue alone |
| Music and Club-Night Candidates | 34 | 34 | Use verified performers or useful retained classifications; age restrictions do not establish music |
| Sports and School Candidates | 13 | 14 | Resolve participants and competition; do not assume every “vs.” title is a game |
| Comedy, Talk, and Variety Candidates | 8 | 12 | Use a reviewed act or production lookup |
| Add-On Candidates | 11 | 9 | Investigate admission products separately from event taxonomy |
| Truly Unclear | 17 | 16 | Remain Other until evidence arrives |
| **Total** | **120** | **193** | |

**Source:** C5, `audit.txt` and the combined-routing CSVs.

Examples requiring restraint include:

- **In the Heights, The Unbelievers, Two Strangers, Hadestown, and CATS: The Jellicle Ball:** plausible production mappings, but those mappings should carry a production source rather than an unsourced keyword exception.
- **Oceanside Shock and San Diego Clippers:** plausible sports mappings, but these teams are not established by the current local team registry.
- **Age-restricted club listings:** “18 and Over” describes admission, not a genre or event type.
- **Photo experiences, club access, earplugs, and expedited entry:** these can be products attached to another event. Reclassifying them as Family Shows or Music would not solve the underlying issue.

The broader add-on title search finds **16 old-window** and **14 latest-window** generic records, overlapping the candidate-routing groups. These are not additional events to add to the table totals. No records were removed. [C5]

**Would Retaining Ticketmaster Fields Settle Most of Them?**

**Not demonstrated.**

`ticketmasterSource.ts` reads segment to choose a kind, uses genre and subgenre in sport guessing, and stores genre as either a music genre or an other tag. It does not retain the event’s original segment and subgenre.

There is an exception: `bigRoomSpecials` temporarily carries segment, genre, and subgenre for diagnostics. `scripts/catalog-write.mjs` prints those diagnostics. The archive stores the resulting event records without them. The scoped local search found aggregate research notes, but no event-level retained classifications suitable for testing a resolution rate. [L3]

Retain these raw fields in a future approved implementation because they preserve evidence. Do not repeat the earlier claim that this “fixes most” of the generic events.

**Genre-Less Concerts**

| Measure | Original Window | Latest Window | All Days |
|---|---:|---:|---:|
| Concerts without an `eventType()` genre | 195 | 209 | 412 |
| Raw Other within that group | 176 | 185 | 373 |
| Raw Undefined within that group | 19 | 24 | 39 |
| Candidate genre from one matching archived performer category | 84 | 93 | 181 |
| Candidate share | 43.1% | 44.5% | 43.9% |
| Remaining without that candidate match | 111 | 116 | 231 |

**Source:** C1, C2, and C4, particularly `detail.txt`.

The latest Genre Unknown settings bucket should also catch **New Age 2**, **Ballads/Romantic 1**, and **Chanson Francaise 1**, because `genres.ts` does not map them. That gives **213**, rather than only the classifier’s **209**. CoComelon’s Children’s Music record should go to Kids and Family, not this fallback. [C1, C6]

`ARTISTS` is empty and its record shape has no genre field. It currently resolves **none** of these genres. `genres.ts` maps supplied genre words; it cannot infer an artist’s genre from a name. [L4]

The matching-performer test is useful for assembling a review queue. It is not ready for automatic classification: it would assign Madeon to Pop because that is the available matching category. The research did not independently validate that assignment.

**Recommended Behavior**

- Keep Genre Unknown as the locked, switchable fallback.
- Country Off or Rock Off hides classified matching concerts.
- An unclassified concert remains visible while Genre Unknown is on.
- Concerts & Music Off hides Genre Unknown too, subject to the locked personal, friend, and favorite exceptions.
- Do not classify acts from their names or infer genres from age restrictions.
- Do not use retained subgenre automatically until its event-level quality has been tested.

**Festivals**

The latest original Festivals & Fairs grouping contains these content candidates. [C3]

| Content | Records | Proposed Destination |
|---|---:|---|
| Music Festivals | 6 | Concerts & Music |
| Food and Drink Festivals | 4 | Festivals & Fairs |
| Cultural and Community Festivals | 2 | Festivals & Fairs |
| Speakers Currently Called Markets | 7 | Theater & Comedy |
| Concert Currently Called a Market | 1 | Concerts & Music |
| **Total** | **20** | |

The music candidates are Breakaway, Reggae Rise Up, Dilly Dally, and the Chandler Mariachi Festival. The nonmusic candidates are Austin Food & Wine, the Inquirer Food Festival, Day of the Dead, and Secretaries’ Cup Fan Fest.

| Choice | Effect When Concerts & Music Is Off |
|---|---|
| All Festivals Under Festivals & Fairs | The six music-festival records remain visible unless Festivals & Fairs or Music Festivals is also off |
| All Festivals Under Concerts & Music | The six nonmusic-festival records disappear with music |
| Split by Content, Recommended | Music festivals hide with music; nonmusic festivals remain available separately |

This comparison assumes the unrelated Markets are corrected. It must not use their erroneous presence as evidence for a festival policy.

**What Would Change My Mind:** A preference to browse every festival together, or a decision that music festivals must also obey individual genre switches. That latter choice requires an explicit genre-versus-format rule.

**Family Shows and Theater & Comedy**

Keep them separate. The latest family grouping has **46 ice shows**, **24 circus records**, and **35 Kids and Family records**. [C1]

Use the main billed attraction:

- A children’s musical goes to Kids and Family.
- Disney on Ice goes to Ice Shows.
- An ordinary musical stays in Theater and Musicals.
- A general-audience science talk does not become Family merely because children may attend.
- A recorded film with a guest conversation goes to Film and Screenings unless the billed main attraction is clearly a standalone talk.
- A film performed with a live orchestra needs a consistent live-score rule.

**Conventions & Expos and Festivals & Fairs**

Keep them separate. Expo browsing and fair admission are different useful choices even though both can occupy the same building.

An expo inside a fair follows the admission being listed. A separately ticketed expo can be an expo; a fair admission that includes an expo remains a fair. Do not create two top types for one admission.

The audit found **six apparent top-type problems among fourteen expo-tagged records**, so the seller’s tag is insufficient. Official pages support treating David Sedaris as a literary act and Andrea Gibson as a poet, rather than assuming their names establish trade expos. [David Sedaris](https://www.davidsedarisbooks.com/), [Andrea Gibson](https://andreagibson.org/)

**Sports Levels**

Recommended derivation:

1. Use a meaningful explicit `audience.level`.
2. Otherwise use a recognized home-team league.
3. If needed, use another unambiguous participant or competition mapping with evidence.
4. Otherwise retain Unknown.
5. Never turn an absent level into Pro.

Use the existing `isCollegeLeague()` helper, which recognizes College, Community College, U Sports, and NCAA prefixes. [L2]

| Derivation | College | Pro | Minor League | Unknown | Total |
|---|---:|---:|---:|---:|---:|
| Old Window, Home League Only, All Sports Keys | 501 | 299 | 49 | 769 | 1,618 |
| Old Window, Explicit Level Then League, All Sports Keys | 902 | 299 | 49 | 368 | 1,618 |
| Latest, Home League Only | 671 | 234 | 54 | 801 | 1,760 |
| Latest, Explicit Level Then League | 944 | 234 | 54 | 528 | 1,760 |
| All Days, Explicit Level Then League | 1,539 | 668 | 112 | 848 | 3,167 |

**Source:** C4, `detail.txt`.

For only `kind=game`, Unknown is **366** in the old window and **520** in the latest window. The larger figures include other-domain listings that receive sports keys from title keywords. [C6]

Recommended league treatment:

- **Pro:** WNBA, NWSL, and the other top professional competitions. USL Super League belongs here; the league’s own description identifies it as a first-division professional women’s competition. [USL](https://www.usl-youth.com/about-usl/)
- **Minor League:** AHL, NBA G League, WHL, and OHL as the practical lower or junior grouping. This is a filter grouping, not a claim that junior players are professional. The current CHL page could not be opened successfully, so fresh verification of its classification is **unverified**.
- **USL Championship:** Recommend Minor League within the proposed top-versus-lower distinction, while recognizing that it is a professional competition. The opened USL page describes it as Division II. [USL](https://www.usl-youth.com/about-usl/)
- **U Sports and school club competitions:** College when the institution and competition establish that level.
- **Independent club or amateur events:** Unknown unless there is meaningful level evidence.
- **Esports:** A sport subtype; do not assume Pro merely because the event is esports.

For Unknown games, my recommendation is to apply the sport and top-type switches, but **no guessed level switch**. Consequently, College Off does not guarantee a college game with missing metadata disappears. Turning Sports Off still hides it, unless an exception applies.

The CHSAA title candidates need a separate source-gate interpretation. They are not silently included as known school levels in this table.

**Further Splits**

These counts are classifier totals or explicit title/tag searches, as specified. A keyword count is not complete semantic coverage. [C1, C3–C4]

| Candidate | Latest / All Days | Recommendation |
|---|---:|---|
| Esports | 6 / 15 sports competition candidates | **Yes, Sub-Type** |
| Wrestling | 17 / 37 title/tag matches | **No Separate Top Type; Keep Combat Sports** |
| MMA | 1 / 1 title/tag match | **No Separate Switch Yet; Keep Combat Sports** |
| Motorsports | 14 / 24 existing keys | **Yes, Retain Sub-Type** |
| Rodeo | 8 / 14 existing keys | **Yes, Retain Sub-Type** |
| Comedy | 154 / 271 existing keys | **Yes, Separate From Talks** |
| Talks | 6 / 17 existing keys, before corrections | **Yes, Retain Sub-Type** |
| Dance | 19 / 40 existing keys | **Yes, Retain Sub-Type** |
| Religious or Faith Events | 14 / 28 music records with Religious genre; broader title/tag search finds 19 / 37 | **No New Top Type; Music and Talks Follow Their Main Attraction** |
| Food Events | 5 / 8 broad title/tag matches; four latest festival admissions | **Yes, Food and Drink Festivals; No New Top Type** |
| Holiday Events | 40 / 66 title matches | **No Cross-Cutting Top Type; Holiday Concerts Stay Music** |
| Fan Conventions | 5 / 9 Comic-Con or Collect-A-Con title matches | **Yes, Sub-Type** |
| Charity Runs | 0 / 0 explicit charity-run matches | **No Separate Sub-Type; Use Road Races When Sourced** |
| Open Mics | 0 / 0 explicit matches | **No Separate Sub-Type Now** |
| Karaoke | 1 / 4 explicit matches | **No Separate Sub-Type Now; Classify the Actual Music Event** |
| Trivia | 0 / 0 explicit matches | **No Separate Sub-Type Now** |
| Sports Betting Events | 0 / 0 explicit matches | **No Separate Sub-Type** |
| Watch Events | 1 / 4 explicit watch-party titles | **Yes, Existing Watch Parties Sub-Type** |

### 5. Other Platforms Comparison

“Opened” means readable material was actually retrieved. Failed pages and unreadable shells are not treated as verified taxonomy lists.

| Platform | Public Structure Verified | Comparison With the Proposed Nine | Likely User Expectation | Status and Source |
|---|---|---|---|---|
| Ticketmaster | Segment, genre, and subgenre hierarchy; examples include Music, Sports, Arts & Theatre, Film, and Miscellaneous | Family, fairs, and expos do not map neatly to independent roots in the app | Preserve raw classifications, but do not expose Miscellaneous or Undefined as useful categories | **Opened:** [Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) |
| SeatGeek | Taxonomies have IDs, names, and parent IDs; documentation demonstrates sports and concert filtering and a music-festival taxonomy query | Supports a hierarchy and music-festival discovery within concert recommendations | A music festival can reasonably sit with concerts; the full current root list was not available in the opened documentation | **Opened, Partial:** [Public API Documentation](https://seatgeek.github.io/). Current developer portal was an unreadable shell |
| Eventbrite | Full category and subcategory list could not be verified | The earlier report’s complete category list cannot be endorsed from the pages opened in this run | No verified comparison should be built from inaccessible documentation | **Unverified:** [Categories Documentation](https://www.eventbrite.com/platform/api#/reference/categories). API and help pages returned rate-limit errors |
| Songkick | Event search explicitly accepts Concert or Festival | Separates festival format within music discovery, rather than mixing all fairs into music | Supports keeping music festivals reachable with music | **Opened:** [Event Search Documentation](https://www.songkick.com/developer/event-search) |
| Google Events | Documentation describes an Event object and its required and recommended properties, not an equivalent consumer category tree | Useful for representing events, not evidence for adopting nine browse groups | Do not mistake schema fields for a finished settings taxonomy | **Opened:** [Event Structured Data](https://developers.google.com/search/docs/appearance/structured-data/event) |
| Resident Advisor | Public events page has Genre and Event Type filters, plus festival discovery | Demonstrates that genre and format can be separate dimensions | Club nights belong naturally with music, even when they lack a band name | **Opened, Partial:** [Events](https://ra.co/events). The full event-type menu was not available in retrieved text |
| Fathom Entertainment | Public navigation includes film genres, Faith, Gaming, Kids and Family, Music, and Sports; live transmissions are a series format | Shows why a screening’s content and its presentation format can overlap | A live opera transmission is a screening experience even though its subject is music | **Opened:** [The Met: Live in HD](https://www.fathomentertainment.com/series/the-met-live-in-hd/) |

These sources support separating content from format where necessary. They do not prove one universal taxonomy.

No API keys were requested, no authenticated endpoints were called, and no feeds were enabled. Retrieving a current authenticated SeatGeek taxonomy list or introducing Eventbrite, Songkick, or another feed requires a separate approved step.

### 6. Copy-Rule Findings

**Written Rules Applied**

`AGENTS.md:65` says:

> “Capitalize every word except short joining words (a, an, the, and, or, of, at, in, on, to, for, vs., per) unless first”

It also says to keep `&` where the name uses it. `AGENTS.md:66` requires an Oxford comma in every list of three or more. Body copy and buttons remain sentence case.

The research prompt adds the prohibition on em dashes. The exact required report headings have been retained even where their capitalization differs from the general small-word rule.

**Violations and Corrections**

| File and Line | Existing String or Issue | Recommended Correction |
|---|---|---|
| `src/data/eventTypes.ts:33` | Combat sports | Combat Sports |
| `src/data/eventTypes.ts:36` | Horse racing | Horse Racing |
| `src/data/eventTypes.ts:39` | Track & field | Track & Field |
| `src/data/eventTypes.ts:40` | Sports event | Sports Event |
| `src/data/eventTypes.ts:43` | Classical & opera | Classical & Opera |
| `src/data/eventTypes.ts:48` | Talk & lecture | Talk & Lecture |
| `src/data/eventTypes.ts:49` | Spectacle & magic | Magic & Variety Shows, if approved as a wording change |
| `src/data/eventTypes.ts:51` | Ice show | Ice Show |
| `src/data/eventTypes.ts:52` | Kids & family | Kids & Family |
| `src/data/eventTypes.ts:54` | Expo & convention | Expo & Convention |
| `src/data/eventTypes.ts:56` | Pop-up | Pop-Up |
| `src/data/eventTypes.ts:57` | Watch party | Watch Party |
| `src/data/eventTypes.ts:58` | Live screening | Live Screening |
| `src/data/eventTypes.ts:98–100` | Rugby union, Rugby league, Aussie rules | Rugby Union, Rugby League, Australian Rules |
| `src/data/genres.ts:15–17` | Hip-hop | Hip-Hop |
| Prompt taxonomy, Sports row | Olympic and Other Sports | Other Sports |
| Prompt taxonomy, Theater row | Magic and Spectacle | Magic and Variety Shows |
| Earlier research heading | How to Categorize Events | How to Categorize Events is already consistent with the small-word rule; do not capitalize “to” merely because the heading is Title Case |

`Undefined`, `Miscellaneous`, and raw feed tags should remain raw evidence internally. They should not become proposed user-facing category names.

**Genre Unknown** is understandable and already named in the locked setting rule. Keep it here. A rename would require a copy decision, not a new behavior decision.

The top-level labels and most subtype labels in the prompt already satisfy Title Case. “Faith and gospel” is an example in the audit instructions, not the actual proposal label.

**Em-Dash Audit**

The search found no em dashes in the requested prompt, `eventTypes.ts`, `genres.ts`, or `SettingsScreen.tsx`. The existing Crowd Size range formatter uses an en dash, a different character. No change to Crowd Size is proposed. [C7]

**Ampersand Rule**

Keep the accepted compound top-level names with ampersands:

- Concerts & Music
- Theater & Comedy
- Festivals & Fairs
- Conventions & Expos
- Parades & Road Events
- Pop-Ups & Watch Parties

Use **and** in the new descriptive subtype labels. Preserve proper names and abbreviations such as **R&B**. This makes the distinction intentional rather than a casing inconsistency.

**Oxford Comma and Plain Words**

- **Auto, Boat, and Home Shows** already has the required Oxford comma.
- **Olympic and Other Sports** implies an unsupported Olympic relationship. Use **Other Sports**.
- **Spectacle** is vague. Use **Magic and Variety Shows**.
- **Genre Unknown** should not be described as a musical style.
- Do not label every Community/Civic listing a Market.
- Existing Settings headings such as **Crowd Size**, **Temperature Units**, **Teams & Artists**, and **Review Queue** are correctly cased.
- Existing sentence-case actions such as “Export my events” should remain sentence case.

**Corrected Label List**

| Top Type | Recommended Labels |
|---|---|
| Sports | Football; Basketball; Baseball and Softball; Hockey; Soccer; Volleyball; Combat Sports; Motorsports; Rodeo; Tennis and Golf; Lacrosse and Rugby; Other Sports; Esports. Preserve the existing Horse Racing key as dormant until usable events are recognized |
| Sports Levels | Pro; Minor League; College; High School |
| Concerts & Music | Rock and Alternative; Pop; Hip-Hop and Rap; R&B; Country and Folk; Latin; Electronic and Dance; Metal; Jazz and Blues; World and Reggae; Faith and Gospel; Classical and Opera; Genre Unknown; Music Festivals |
| Theater & Comedy | Theater and Musicals; Comedy; Dance and Ballet; Magic and Variety Shows; Talks and Lectures; Film and Screenings |
| Family Shows | Ice Shows; Circus and Acrobatics; Kids and Family |
| Festivals & Fairs | Food and Drink Festivals; Cultural and Community Festivals; Fairs and Carnivals; Markets |
| Conventions & Expos | Fan Conventions; Trade and Hobby Expos; Auto, Boat, and Home Shows; Pet and Animal Shows |
| Parades & Road Events | Parades; Marathons and Road Races; Cycling Events; Holiday Events; Cultural Marches |
| Pop-Ups & Watch Parties | Pop-Ups; Watch Parties; Live Screenings |
| Other | Unclassified Events |
| Settings | Event Types; All On; N Off |

**Settings Behavior and Stable Keys**

The following preserves Section C without changing Crowd Size.

**One Top Type**

- College hockey: Sports, Hockey subtype, College level.
- Music festival: Concerts & Music, Music Festivals subtype.
- Kids’ concert: Family Shows, Kids and Family subtype when specifically billed for children.
- Separately ticketed comedy at a festival: Theater & Comedy, Comedy subtype.
- Festival admission that includes comedy: the festival’s main content determines the single top type.
- Watch party: Pop-Ups & Watch Parties, even when its subject is basketball or esports.
- Film with a live orchestra: classify the billed main attraction consistently, rather than allowing a venue or broad tag to decide.

With the proposed one-subtype limit, a Music Festivals record cannot simultaneously have Country and Folk as its subtype. My lean is to keep Music Festivals as its sole subtype for this build. This means Country Off may still leave a country festival visible. Concerts & Music Off hides it. That tradeoff needs confirmation.

**Protected Events**

A plan, stub, entry, friend attending or attended, or favorite team, artist, or venue overrides Event Types hiding.

Therefore these combinations are expected:

- Hockey Off, but a hockey plan remains visible.
- College Off, but a friend’s college game remains visible.
- Concerts & Music Off, but a favorite artist’s show remains visible.
- Other Off, but a saved unclassified event remains visible.
- A favorite venue protects events even when their type and subtype are both off.

Evaluate protection once and reuse the same result across Explore, the map, day lineups, Local Competition, Further Out, and search. A known personal event must not disappear because one surface forgets an exception.

**Counts and Reveal**

Verdicts, map day totals, and chip counts keep hidden events. Lists and Local Competition bars apply visibility. Consequently, the visible bar sum may be smaller than the full day total. That follows the locked rules.

The hidden line counts event IDs in the union of the two filters, after applicable exceptions. A row hidden by both counts once. Show reveals the same rows and their Local Competition bars for that view.

**Storage Recommendation**

Keep filter keys separate from the existing display-type keys. For example:

| Purpose | Stable Key Examples |
|---|---|
| Top Types | `sports`, `concerts`, `arts`, `family`, `festivals`, `expos`, `road`, `social`, `other` |
| Sports | `sports.hockey`, `sports.baseball_softball`, `sports.combat`, `sports.esports` |
| Levels | `level.pro`, `level.minor`, `level.college`, `level.school` |
| Music | `concerts.rock_alternative`, `concerts.country_folk`, `concerts.unknown`, `concerts.festival` |
| Other Subtypes | `arts.film`, `family.ice`, `festivals.food`, `expos.fan`, `road.cycling`, `social.watch`, `social.screening` |

These are proposed identifiers, not code changes.

Store only explicitly hidden keys. Do not create a list of enabled keys or write every child key when a parent is switched off.

A label rename keeps its existing identifier. A genuine split creates new identifiers, which default on under C8. Do not silently copy an old hidden leaf to every newly introduced subtype. An explicitly hidden parent continues to hide its descendants.

Preserve hidden keys for temporarily unavailable categories so preferences return with the data. The meaning of **N Off** for dormant controls should be settled before implementation.

### 7. Sources And Commands

**Execution and Boundaries**

Codex performed all file inspection, counting, sample review, and public-page research in this report. No subagents were used.

No repository files were edited, created, or deleted. No build, installer, migration, commit, stash, branch, push, PR, or Supabase operation was run. `private/` and `.env` were not read.

All scratch work is under:

```text
/private/tmp/claude-501/-Users-kylieau-Documents-fan-friction/1791d7c2-5e01-4eda-b0b4-8c71cf3bb1b9/scratchpad/event-types-research/
```

Call this directory **S** in the commands below.

**Reproducible Commands**

| Reference | Command | Main Outputs and Inputs |
|---|---|---|
| C1 | `node S/count.mjs` | Reads the schedule archive; runs the app’s `eventType()`; writes `summary.json`, `counts-output.json`, `archive-files.csv`, `latest.json`, `all-days.json`, both event CSVs, and both city matrix pairs |
| C2 | `node S/history.mjs` | Reconstructs the latest file per city through October 24; writes `oct24.json` and `history.txt`; reproduces the old window and historical ID count |
| C3 | `node S/inspect.mjs` | Writes `inspection.txt` and `fill-rates.json`; lists generic titles, festival records, expo records, city gaps, and topic matches |
| C4 | `python3 S/detail.py` | Writes `detail.txt` and `spot-checks.json`; tests level derivation, matching-performer genre candidates, sample selection, and explicit topic counts |
| C5 | `python3 S/resolve.py`, then `python3 S/audit.py` | Writes routing CSVs, `resolve.txt`, and `audit.txt`; tests title rules and matching archive classifications |
| C6 | `python3 S/samples.py`, then `python3 S/final-metrics.py` | Writes `samples.csv`, `samples.json`, `samples.txt`, `fill-rates.csv`, `spot-checks.csv`, and `final-metrics.txt` |
| C7 | `rg -n 'Unknown\|Undefined\|[—]'` against the named public source and research files | Checks raw fallback words and em dashes; `nl -ba` and `sed -n` establish source lines |

The Vite scripts use:

- The installed module at `/Users/kylieau/Documents/fan-friction/node_modules/vite/dist/node/index.js`.
- Repository root set explicitly.
- `configFile:false`.
- `envFile:false`.
- `middlewareMode:true`.
- A scratch cache directory.
- `ws:false` in the final runs.
- `ssrLoadModule('/src/data/eventTypes.ts')`.

The initial runs encountered a denied development WebSocket listener, but module loading and counting completed. Final reruns disabled that listener and completed without that error.

**Full Matrix Paths**

```text
S/latest-city-types.csv
S/latest-city-top-types.csv
S/all-days-city-types.csv
S/all-days-city-top-types.csv
```

Each existing-type matrix contains every city and every existing key, including zeros.

**Other Scratch Outputs**

```text
S/archive-files.csv
S/latest-events.csv
S/all-days-events.csv
S/oct24-other-routing.csv
S/latest-other-routing.csv
S/oct24-combined-routing.csv
S/latest-combined-routing.csv
S/fill-rates.csv
S/samples.csv
S/spot-checks.csv
S/commands.txt
S/urls-opened.txt
```

The JSON and text companions preserve the intermediate data and readable output. `commands.txt` records the main executable sequence.

**Local Sources Read**

- `docs/build-7-2/research/event-types-research-prompt.md`, read first.
- `MEMORY_HANDOFF.md` and `BACKLOG.md`, for current context.
- `docs/build-7-2/research/taxonomy-research.md`, checked rather than trusted.
- `docs/build-7-2/build-notes-7-2.md`, particularly Section C.
- `docs/product/direction.md`.
- `AGENTS.md`, particularly lines 59–66.
- **L1:** `src/data/eventTypes.ts`, including definitions, tag mapping, keyword order, and `eventType()`.
- **L2:** `src/data/teams.ts` and `src/data/types.ts`, including league and level definitions.
- **L3:** `src/data/sources/ticketmasterSource.ts`, especially lines 321–377, and `scripts/catalog-write.mjs`, lines 162–163.
- **L4:** `src/data/genres.ts` and `src/data/artists.ts`.
- `src/data/sources/sidearmSource.ts`.
- `src/data/scheduleArchive.ts`.
- `src/screens/SettingsScreen.tsx`.
- `src/data/crowdRange.ts`, read only for existing copy.
- `scripts/crowd-range-check.mjs` and `scripts/event-types-check.mjs`, read as methodological references, not executed.
- `docs/archive/proposals/artist-genres-proposal.md`.
- `docs/build-5/research/event-types-635a164.md`.
- The archive files enumerated individually in `S/archive-files.csv`.

The subgenre search was limited to public `docs`, `data`, `src/data`, and `scripts` paths, with explicit exclusions for `private/**` and `.env*`.

**Public Sources**

The supporting opened pages are linked beside their claims and in Section 5. `S/urls-opened.txt` records the attempted URLs.

Additional attempted pages were **unverified** where retrieval failed or yielded no useful content: Eventbrite API and help pages, the current SeatGeek developer shell, CHL’s current about page, USL’s current league overview, the direct USL Super League about URL, NYRR’s marathon page, parkrun, Cosm’s homepage, National Theatre Live, Macy’s parade shell, and Breeders’ Cup pages.

No claims in this report depend on an inaccessible page’s presumed contents.

### 8. Questions For Kylie

1. **Festival Placement:** (a) split by main content, with music festivals under Concerts & Music, or (b) keep every festival under Festivals & Fairs. **My lean: (a)**, so switching off music also hides music festivals.

2. **Festival Genre Behavior:** (a) Music Festivals is the sole subtype, so individual genre switches do not also filter festivals, or (b) festivals also obey genre switches, requiring genre and format to be separate dimensions. **My lean: (a) for this build**, to preserve the proposed one-subtype rule.

3. **Unknown Sports Levels:** (a) unknown-level games remain visible while their sport is on, or (b) add a separate Level Unknown switch. **My lean: (a)**, with no assumption that missing means Pro.

4. **High School Source Gate:** (a) the existing Ticketmaster CHSAA listings satisfy the source condition once their level is reliably derived, or (b) keep High School hidden until a dedicated school source exists. **My lean: (a)**, because this uses today’s approved feed rather than adding one.

5. **Off Count:** (a) N Off counts currently available switches explicitly turned off, retaining dormant preferences quietly, or (b) it counts dormant hidden keys too. **My lean: (a)**, so the summary does not report switches the person cannot currently see.

6. **Live Film Scores:** (a) a film with a live orchestra belongs in Concerts & Music when the live performance is the billed attraction, or (b) every film presentation belongs in Film and Screenings. **My lean: (a)**, while ordinary screenings and cast Q&As stay under Film and Screenings.
