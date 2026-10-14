# Event naming: current formulas and proposed conventions
> **Icon sizes (r3, measured Oct 14 at 390pt wide against untouched live rows):** map chip 12pt; Explore row, date page lineup, event title, Following and search 18pt; Local Competition timeline 17pt; Stubs rows 16pt. Each is the largest size (up to 18) that keeps the live row height. Vertical align −4px (Stubs −3px).

> **Approved leans (Kylie, Oct 14):** DH1/DH2 labels; years on finals ("Super Bowl 2027"); "Preseason ·" prefix; no openers in short; designated visitor first at neutral sites; short names in Favorites; title icon (18pt, see below; was 20pt in r2). Everything else is still a **PROPOSAL, NOT DECIDED**.
> Source: `research/event-naming-635a164.md` (main @ 635a164, `src/lib/eventTitle.ts`). The real examples come from that report. Made-up examples are marked **EXAMPLE**.

## 1. Current formulas (what ships at 635a164)
The code has two lengths. `mapTitle` is the short one and `listTitle` the full one, plus `teamRelativeTitle` and `scheduleGameTitle` on team pages. No character limits exist; truncation is CSS only.

| Surface | Function | Truncation today | Sports (pro) | Sports (college) | Postseason | Neutral site | Concert | Festival | Special |
|---|---|---|---|---|---|---|---|---|---|
| Map chip | mapTitle | 112px box, nowrap ellipsis, Barlow SC 11/700 (about 17 chars) | home shortName: "Braves" | home + tag on collision | "Braves (NLDS G4)" | home shortName | performer: "Phoebe Bridgers" | title: "2026 ComplexCon Concert" (ellipsized) | raw title: "Sweetest Day Comedy Jam" |
| Local Competition timeline | mapTitle | **no rule** (can overlap) | same | same | same | same | same | same | same |
| Why card / Up against / This day "Biggest:" / Home rows / favorite-page rows | mapTitle | 1 line | same | same | same | same | same | same | same |
| Explore list + sheet rows | listTitle | 2-line clamp | "Thunder at Hawks" | "Duke at Georgia Tech (FB)" | "NLDS G4 · Dodgers at Braves" | "Lakers vs. Warriors" | officialTitle: "Phoebe Bridgers: The Lost Tour" | title | raw title |
| Event page h1 | listTitle | none, 24/800, wraps | same | same | same | same | same | same | same |
| Selected chip card, Stub sheet, Stubs/log, Compare | listTitle | 1–2 lines | same | same | same | same | same | same | same |
| Favorites (Following) | listTitle | 2 lines | full name, though docs say short | | | | | | |
| Team page schedule | teamRelativeTitle / scheduleGameTitle | 1 line | "vs Hawks" / "at Hawks" | | | | | | |

Other current behavior:
- The same headliner twice in one night becomes "headliner · venue".
- Tour names appear only when Ticketmaster puts them in the title ("Fuerza Regida - This Is Our Dream Tour 2026").
- There is no openers or co-bill field. Special events ignore the performer field (Cedric The Entertainer goes unused).
- Preseason gets no label. Doubleheaders get identical chips.
- WNBA, MLS and NWSL rounds use the headline text, else "Postseason". HockeyTech leagues show "{league} Playoffs".

### Contradictions flagged
1. Docs say "Home vs. Away" in one stale line, but code uses "{Away} at {Home}".
2. Neutral site: docs put the designated visitor first; code puts home first ("Lakers vs. Warriors").
3. Docs specify a city-after neutral form ("A vs. B · Las Vegas") and the neutral city on the venue line. Neither is built.
4. Round names: docs use "WC G1 / World Series G7 / Super Bowl 2027"; code uses "NLWC / WS" with no year.
5. Docs specify DH1/DH2 doubleheaders and festival "Weekend 1/2". Neither is built.
6. Docs say Favorites uses the short name; code uses listTitle.
7. The chip keeps the name and loses the round first: "Golden Knights (Conf Final G7)" ellipsizes the suffix, which is the most newsworthy part.
8. The "Show" kind is labelled "Concert" on the add form and elsewhere.
9. College tags exist only for FB, MBB and WBB. College hockey, baseball and soccer collide with the pro team names.

## 2. Proposed three lengths (PROPOSAL, NOT DECIDED)
| Length | Used on | Limit (lean) | Hard rule |
|---|---|---|---|
| **Chip** | map chip, timeline labels, "Biggest:", Up against | **16 characters** of name, plus a short designation | one line; the designation is never the part that gets cut |
| **Short** | list/sheet rows, date page lineup, Stubs rows, Following, search results, chip card | **32 characters**, at most 2 lines | the venue always follows on its own line, as today |
| **Full** | event page h1, Stub sheet, share text | 64 characters soft; wraps | everything we know, no abbreviations except G1 and the like |

Alternative: use two lengths only (chip and full, as the code has today) and add character limits. Rejected as the lean because rows need the designation and the matchup but not the tour name.

### Truncation order (what gets dropped first; lean)
1. Year and edition ("2026", "Weekend 1" is kept until step 4)
2. Tour name, then the opener list (full → short)
3. Away/visitor team, then the city (chip only: home or headliner name stays)
4. Festival weekend / college tag
5. Nickname shortened to the shortName ("Golden Knights" → "Vegas")
6. Last resort: ellipsize the **name**. The designation (G7, DH2, Preseason, All-Star) is kept to the end.

Alternative: keep today's CSS ellipsis on the end of the string and move the designation first ("G7 · Golden Knights"). Rejected: it reads badly in the chip and breaks alphabetical scanning in lists.

## 3. Proposed formulas by type (lean | alternative)
All examples below are **EXAMPLE** unless a real one exists. "·" separates parts.

### Sports
| Case | Chip | Short | Full | Alternative |
|---|---|---|---|---|
| Regular game | "Braves" (home) | "Dodgers at Braves" | "Los Angeles Dodgers at Atlanta Braves" | chip shows "LAD @ ATL" abbreviations |
| College | "Georgia Tech FB" | "Duke at Georgia Tech (FB)" | "Duke at Georgia Tech · College Football" | keep parentheses on the chip |
| Playoff / series game | "Braves NLDS G4" | "NLDS G4 · Dodgers at Braves" (today's form, kept) | "NL Division Series Game 4 · Dodgers at Braves" | the chip keeps today's "Braves (NLDS G4)" but the suffix is protected |
| Final / title game | "Super Bowl" | "Super Bowl · Chiefs vs. Eagles" | "Super Bowl LXI · Chiefs vs. Eagles · New Orleans" | add the year "Super Bowl 2027" (as the docs say) |
| Preseason | "Rams Preseason" | "Preseason · Raiders at Rams" | "NFL Preseason · Raiders at Rams" | a small "Preseason" tag in `.event-tags` instead of the title |
| Spring training | "Dodgers ST" | "Spring Training · Giants at Dodgers" | "Cactus League Spring Training · Giants at Dodgers" | "Spring" |
| All-Star | "MLB All-Star" | "MLB All-Star Game" | "2026 MLB All-Star Game · Dodger Stadium" | "All-Star · AL vs. NL" |
| Exhibition / friendly | "LAFC Friendly" | "Friendly · Club América vs. LAFC" | "International Friendly · Club América vs. LAFC" | "Exhibition" for every sport |
| Doubleheader | "Angels DH1" / "Angels DH2" | "Game 1 · A's at Angels" | "Doubleheader Game 1 of 2 · A's at Angels" | "G1/G2" (it collides with series "G1") |
| Neutral site | first team's shortName | "Lakers vs. Warriors" (designated visitor first, as the docs say) | "Lakers vs. Warriors · Las Vegas" | the city only on the venue line |
| Tournament game | "Pac-12 Tourney" | "Pac-12 Tournament · UCLA vs. USC" | "Pac-12 Tournament Semifinal · UCLA vs. USC" | the round on the chip ("Pac-12 Semi") |
| Bowl | "Rose Bowl" | "Rose Bowl · Oregon vs. Ohio State" | "Rose Bowl Game (CFP Quarterfinal) · Oregon vs. Ohio State" | the sponsor name as in the feed |
| Non-team (boxing, motorsports, rodeo, golf) | the headline fighter or event: "Canelo" / "LA Grand Prix" | the feed title cleaned (promoter and year removed) | the feed title | always the raw feed title |

### Music and other events
| Case | Chip | Short | Full | Alternative |
|---|---|---|---|---|
| Concert, single headliner | "Phoebe Bridgers" | "Phoebe Bridgers" | "Phoebe Bridgers: The Lost Tour" (real) | short = officialTitle, as today |
| Concert with openers | headliner | "Phoebe Bridgers + Muna" | "Phoebe Bridgers: The Lost Tour · with Muna, Sloppy Jane" | openers only on the event page |
| Co-bill | "Weezer & Pixies" if it fits ≤16 chars, else the first act | "Weezer & Pixies" | "Weezer & Pixies: Co-Headline Tour" | always the first act only on the chip |
| Tour parsing | — | tour dropped | "{Headliner}: {Tour}" from TM "A - B Tour 2026" → "Fuerza Regida: This Is Our Dream Tour" | keep the TM string verbatim |
| Same headliner twice a night | "Phoebe Bridgers 7pm" | "Phoebe Bridgers · Early show" | "… · 7:00 PM show" | today's "headliner · venue" |
| Festival | the festival's brand name: "ComplexCon" | "ComplexCon · Day 2" | "ComplexCon 2026 · Day 2 · Long Beach" | keep the full title, as today ("2026 ComplexCon Concert") |
| Festival weekend | "Coachella W1" | "Coachella · Weekend 1" | "Coachella 2026 · Weekend 1" | "Wknd 1" |
| Comedy | the performer: "Cedric" or "Cedric the Ent." when it fits | "Cedric The Entertainer" | "Sweetest Day Comedy Jam · Cedric The Entertainer" (real) | the raw title, as today |
| Theatre / family show | show name: "Hamilton" | "Hamilton" | "Hamilton (Touring)" plus venue | |
| Pop-up | a short name: "Taco Pop-up" | "{Name} Pop-up" | "{Name} Pop-up · {Host}" | no "Pop-up" word (the icon says it) |
| Watch party | "Watch: Super Bowl" | "Super Bowl Watch Party" | "Super Bowl Watch Party · {Host}" | "Live:" prefix |

### Character limits (lean)
| Length | Lean | Alternative |
|---|---|---|
| Chip | 16 chars of name + up to 8 chars of designation (fits a 112px box at 11px semi condensed) | allow the chip to grow to 140px and use 20 chars |
| Short | 32 chars per line, 2 lines | 40 chars, 1 line |
| Full | 64 chars soft, never truncated | none |

## 4. Questions answered by Kylie, Oct 14 (all leans approved)
1. Doubleheaders: "DH1/DH2" (docs) or "Game 1/Game 2"?
2. Years: "Super Bowl 2027" (docs), Roman numerals, or no year?
3. Preseason: in the title, or as a tag?
4. Openers: in short rows, or only on the event page?
5. Neutral sites: the designated visitor first (docs) or home first (code)?
6. Favorites: switch to the short name, as the docs say?
