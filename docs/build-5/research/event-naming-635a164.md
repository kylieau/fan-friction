# Event naming formulas — main 635a164

Read-only audit of `kylieau/fan-friction` at `origin/main` **635a164** (main's last commit Oct 14, 2026, 12:23 AM PT). Line refs are at that commit; examples are from `data/schedule-archive`.

## 1. There are two lengths in code, not three

All naming is in `src/lib/eventTitle.ts`. There's no function called `chipTitle` and no separate "short name".

| Length | Function | Used on |
|---|---|---|
| **Short / chip** | `mapTitle(event, sameNight)` `eventTitle.ts:172-185` | Map chips (`src/map/CrowdLayer.tsx:149`); timeline bar labels (`src/components/DayTimeline.tsx:50`); Why card rows (`WhyCard.tsx:77`); Up against rivals (`EventScreen.tsx:296`); This day "Biggest:" (`EventScreen.tsx:258`); "by [rival]" (`src/data/formulaRead.ts:136`); Home Tonight rows (`HomeScreen.tsx:108, 195`); favorite page rows (`FavoritePage.tsx:403`) |
| **Full** | `listTitle(event)` `eventTitle.ts:193-198` | Event page `<h1>` (`EventScreen.tsx:200`); sheet and List rows via `DayRow` (`src/components/DayRow.tsx:36`); chip card (`ChipCard.tsx:30`); Stub it sheet (`StubSheet.tsx:140`); stubs and log titles (`personalLog.ts:531, 548, 563, 844`); Compare; Favorites |
| Team-relative | `teamRelativeTitle` `:220-224` | A favorite team's own page only |
| Schedule canonical | `scheduleGameTitle` `:227-231` | Team schedule lists |

"Short name in rows" means different things in different places: Home rows use `mapTitle`, while sheet and List rows use `listTitle`.

Every name passes through `displayName` (`src/config/names.ts`): ALL CAPS becomes Title Case, except the `OFFICIAL_STYLING` list and single-word acronyms of 4 letters or fewer.

## 2. Truncation and character limits

**There are no character limits in code**, no `slice` or "…" in the naming functions. Truncation is CSS only:

| Surface | Rule |
|---|---|
| Map chip | Fixed 112px box (`src/styles.css:1630-1640`); name on one line, `nowrap` + `ellipsis`. The L1b override sets Barlow Semi Condensed 11px/700 (`styles.css:5628-5650`); base 10.5px/800 (`:1697-1704`) |
| Sheet and List row title | At most 2 lines, `-webkit-line-clamp: 2` (`styles.css:8015-8022`) |
| Why card row | One line, ellipsis (`styles.css:5936-5942`) |
| Timeline / bar labels | **No truncation rule** (`.bar-name`, `styles.css:6466-6470`) |
| Event page title | No truncation (24px/800, `styles.css:1115-1119`) |

## 3. Sports

**Source titles are always "Home vs. Away".** ESPN (`espnSource.ts:1075`), MLB (`mlbSource.ts:164`) and HockeyTech (`hockeytechSource.ts:211`) all build `${home} vs. ${away}`. Ticketmaster keeps its own event name (`ticketmasterSource.ts:301`). The naming code re-parses that string; `sidesOf` (`eventTitle.ts:28-53`) treats the first side as home.

### Full name (`listTitle` → `gameName`, `:70-79`; label from `stakesLabel`, `:56-61`)

| Case | Formula | Example (archive) |
|---|---|---|
| Regular game | `{Away} at {Home}` | `2026-10-10-espn-gt-football-401858255` "Georgia Tech vs. Duke" → **"Duke at Georgia Tech (FB)"** |
| College | squad tag after the home school: (FB), (MBB), (WBB) from `collegeAbbrev` `:10-20` (other college sports: none) | same as above; WBB when the team id ends `-wbb` |
| Postseason | `{Round} G{n} · {Away} at {Home}`; round alone if no game number | `2026-10-07-mlb-849822` "Braves vs. Dodgers", NLDS 4 → **"NLDS G4 · Dodgers at Braves"** |
| If necessary | not in the name (flag only; shown elsewhere on the sheet) | `2026-10-26-espn-valkyries-401918309` → "Finals G5 · Dream at Valkyries" |
| Neutral site | `{first side} vs. {second side}`; event name first if the source had "(Name)": `{Name} · A vs. B` | `2026-10-13-espn-lakers-401898718` (neutral) → **"Lakers vs. Warriors"** |
| Preseason / spring training | **no label**; plain game name | `2026-10-12-espn-hawks-401898402` (preseason) → "Thunder at Hawks" |
| Title with no "vs" | left as written | — |
| Ticketmaster game (no team ids) | parsed the same way; first side assumed home | `2026-10-17-tm-vvG1zZ_G2Q5wKA` → "Norfolk Admirals at Atlanta Gladiators" |

Round words by source (`src/data/sources/roundLabel.ts`):
- **MLB:** NLDS/ALDS/NLCS/ALCS/NLWC/ALWC/WS (`:20-26, 30-45`).
- **NFL:** Super Bowl / Wild Card / Divisional / Championship (`:93-99`).
- **NBA:** East Finals / West Finals / Semis / 1st Round / Finals (`:101-108`).
- **NHL:** Cup Final / Conf Final / 2nd Round / 1st Round (`:111-117`).
- **College:** CFP Semi / Title Game / CFP / "<Conf> Championship" (`:124-133`).
- **WNBA/MLS/NWSL:** headline text, else "Postseason" (`:160-175`).
- **HockeyTech:** "{league} Playoffs" with no game number (`hockeytechSource.ts:212`).

### Short / chip (`mapTitle` → `sportsChip`, `:142-185`)

| Case | Formula | Example |
|---|---|---|
| Default | home team `shortName` only | "Braves" |
| Postseason | `{home} ({Round} G{n})`: parentheses on the chip, a dot prefix in full | **"Braves (NLDS G4)"**; NLCS G3 on Oct 14 → "Dodgers (NLCS G3)" |
| Collision step 1 | add the squad tag: `Georgia Tech (FB)` | — |
| Collision step 2 | add the visitor: `{home} (FB) · {away short}` | — |
| No team id | first side of the title (`spokenHome` `:112-120`) | "Atlanta Gladiators" |
| Neutral / preseason / doubleheader | no special handling | "Lakers" |

## 4. Concerts, festivals, other

| Case | Short / chip (`headliner` `:85-92`) | Full (`listTitle` `:194`) | Example |
|---|---|---|---|
| Show | `performer` (TM's first attraction, `ticketmasterSource.ts:284-285`) | `officialTitle` (TM's full name, only when it differs, `:301-303`), else the title | `2026-10-13-tm-vvG1zZ_G68Ii_o`: chip **"Phoebe Bridgers"**, full **"Phoebe Bridgers: The Lost Tour"** |
| Same headliner twice that night | `{headliner} · {venue}` (`:175-177`) | unchanged | — |
| Festival | the festival's title, not a performer (`:89`) | title | `2026-10-04-complexcon`: "2026 ComplexCon Concert" on both |
| Special (comedy, theatre, fairs, …) | **falls through to `gameName`**: the title as written | title as written | `2026-10-17-tm-vv17jZ_8GkmcT72q`: "Sweetest Day Comedy Jam" (performer Cedric The Entertainer is unused) |
| Live broadcast | same as special | same | — |
| Openers / support | **no field, no rule**: 0 archive events carry openers | — | — |
| Tour name | only through TM's `officialTitle` string, never parsed | — | "Fuerza Regida - This Is Our Dream Tour 2026" |

## 5. Docs vs code

| Rule | Doc | Code | Status |
|---|---|---|---|
| Games "{Away} at {Home}" | `product-decisions.md:84`; `docs/research/topics/event-naming-at-vs.md` | `gameName` `:78` | Match |
| Old "event titles stay Home vs. Away" | `product-decisions.md:38` (Oct 9) | — | **Stale doc line.** Superseded by `:84` but not marked superseded |
| Neutral site: **designated visitor first** | `product-decisions.md:84`; naming doc rule 2 | `${sides.home} vs. ${sides.away}` (`:75`): the source's first side, which is the **home** team since feeds write Home vs. Away | **Conflict**. Lakers/Warriors shows the designated home first |
| Neutral site: "49ers vs. Rams · Melbourne" (city after) | naming doc rule 2 | event name only ever goes **before** (`:76`); no city added | **Conflict / not built** |
| Label vocab "WC G1", "World Series G7", "Super Bowl 2027" | naming doc rule 3 | MLB uses feed abbreviations "NLWC", "ALWC", "WS" (`roundLabel.ts:20-45`); Super Bowl has no year | **Conflict** |
| Doubleheaders "DH1/DH2" | naming doc rule 3 | not built (`product-decisions.md:84` admits it); `roundLabel.ts:15` notes the DH index but drops it | Gap (documented) |
| Chip "Dodgers (NLDS G2)", collisions add squad then visitor | `product-decisions.md:8` | `sportsChip`, `mapTitle` | Match |
| Festival "Weekend 1/2" when both are on the map | `product-decisions.md:38` | no such rule | **Not built** |
| Home and Favorites rows use the short name | `product-decisions.md:38` | Home uses `mapTitle`; **Favorites uses `listTitle`** (`FavoritesScreen.tsx:149`) | **Partial conflict** |
| Neutral site names its city on the venue line | `product-decisions.md:38` | not found in naming code | Unverified / likely not built |
| Concert chip = headliner, full = official title | `product-decisions.md:8, 38` | `headliner`, `listTitle` | Match |
| Co-bills and openers allowed; openers opt-in for logging | `product-decisions.md:132, 137` | no opener field on events | Gap |

## 6. Gaps (no rule exists yet)

1. **Preseason, spring training and exhibitions are unlabelled** in both chip and full names, although `CrowdEvent.preseason` exists (`types.ts:232`). Only the team page shows "Preseason" (`eventTitle.ts:212`).
2. **Doubleheaders:** two identical names. On the chip, the collision steps can't separate them (same home and visitor), so two chips read the same.
3. **All-Star games, tournaments and multi-game sessions** (Summer League, conference tournaments, bowl games): no rule. Bowls are deliberately not labelled (`roundLabel.ts:131`). HockeyTech playoffs get "AHL Playoffs" with no game number.
4. **Comedy, theatre and other `special` events** use the raw TM name, so there's no headliner rule (the chip may be a long event name) and the `performer` is ignored.
5. **No openers, co-bills or tour-name parsing.** Tour text only appears if TM's name includes it, in whatever format TM uses (" - " vs ": ").
6. **Ticketmaster games** depend on TM writing "Home vs. Away", which isn't guaranteed. The away/home flip is unverified for TM-sourced games.
7. **No character limits.** Chip names that ellipsize at 112px lose the postseason suffix first, e.g. "Golden Knights (Conf Final G7)". There's no short-round fallback.
8. **College squad tags** exist only for FB/MBB/WBB. College baseball, hockey, soccer and volleyball get no tag, so the same school can collide.
9. **Neutral sites:** the order (visitor first) and the city-after form from the docs aren't implemented.
