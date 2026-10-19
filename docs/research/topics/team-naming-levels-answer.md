# Fan/Friction: team naming at each level

Research prepared October 19, 2026. **Proposal for Kylie to decide; nothing in this document is an adopted product decision.**

_Saved Oct 19, 2026 from Kylie's attachment (the answer to `team-naming-levels-prompt.md`). Status: open; read by Claude Code the same day; what is already built the same way, what differs, and the decisions left to Kylie are listed in BACKLOG ("Research answers in") and in the Oct 19 message to her._

## Recommended approach

Keep one record per competitive team/program, but give the renderer three separate ingredients: **a public identity, a compact identity, and a program label**. A scoreboard code is a fourth, deliberately lossy representation. It cannot serve as a team ID or as the source of a written name.

For colleges, Kylie's school-first instinct holds: the badge identifies the school; adjacent words identify the program. Long school names need a school abbreviation in the badge, not their entire common name. In written labels, keep recognizable school names intact and make room for the sport.

For pros, use the club's established public name. Shorten an approved geographic prefix only in compact written labels. Treat names that are not cleanly separable as complete phrases. Do not manufacture a city-plus-nickname name from a venue address.

**Scope and evidence.** This is research and a proposed naming contract, not an audit or migration of the approximately 580 records. The catalog, app font, and rendered screens were not supplied. League and school sources establish naming usage; recommendations about readability are editorial judgments, not measured fan preferences. Some ESPN and NCAA pages blocked direct retrieval, so their observations below use indexed page text and accessible official pages. No fixtures or simultaneous-game scenarios below are asserted to be real.

**Example convention.** Every proposed UI specimen, hypothetical matchup, and assumed collision below is marked **EXAMPLE**. Those labels belong to this research document, not the eventual app. A verified real name quoted as source evidence is not invented data.

## 1. Naming table: six visual levels, plus speech

Field shorthand: `full_name` = established full public team name; `compact_name` = approved shorter written identity; `short_name` = shortest recognizable standalone club identity; `badge_text` = approved tile text; `school_common` = the school's common athletics name; `program_label` = sport with the appropriate squad words. Existing fields should be reused only after their meaning is normalized. Section 7 defines additions and sources.

| Level | Pro with geographic name + nickname | College / university / community college | Club with an indivisible or irregular name | Fields and context needed |
|---|---|---|---|---|
| **1. Badge** — one line; minimum 44-point tap target if interactive | Use the existing verified scoreboard code, optionally overridden by an established club abbreviation. Add the league below **both** tiles when identical tile text would otherwise be ambiguous in that list. | Use a school-only abbreviation or short school name. Reuse it across programs; program words live beside the tile. Do not append a gender letter. | Use a verified club abbreviation; never create initials by stripping words from the full name. | `scoreboard_code`, optional `badge_text_override`; school relationship; `league_id`; comparison set; adjacent visible label. |
| **2. Map chip** — default 112 × 44 | Use `short_name`, usually the nickname. If names collide, first expand to `compact_name`, then add league/sport context if still needed. | Use `school_common` or an approved smaller school form. Add program words to **every** matching-school chip when multiple programs occur in the day's result set. A lone school-only chip is an institution-level preview; its accessible name and tapped detail must identify the event/program. | Use an approved whole short phrase, retaining identifying words. Do not default to the city. | `short_name`, `compact_name`, `school_common`, optional school compact override; `program_label`; all loaded events for that day/filter; venue and event IDs. |
| **3. Following lead line** — about 220 px | Use `compact_name`; approved geographic shortcuts are allowed here. | `school_common + program_label`. If too long, break between school and program; preserve the complete gender-and-sport phrase. | Use `compact_name`, usually the full public name unless a source-backed shorter form exists. | `compact_name`; school/program fields; font measurements. League is a separate qualifier only if identity still collides. |
| **4. Event row title** | Use each side's `short_name`; expand colliding identities before adding more metadata. | Use each school's common name. Include the program once in adjacent metadata when the lead line or a persistent, explicit section label does not supply it. | Use each club's approved short phrase, not an inferred mascot. | Both participant IDs; short/compact identities; home/away/neutral designation; event sport/squad; a flag recording whether the program is visibly supplied in this row/context. |
| **5. Picker/search/Following-sheet row beside a badge** — about 200 px | Use `compact_name`. It is the complete identifying label for this compact surface, not necessarily the full formal name. | Show school and complete program, on two lines if needed. The badge does not replace the school name in text. | Use `compact_name`, retaining whatever distinguishes the club. | Same naming inputs as level 3; school full name/aliases for search and optional secondary identification. Resolve cross-catalog collisions, not only same-city collisions. |
| **6. Team-page header** | Use `full_name`, preserving the club's own geographic wording. Do not automatically expand a branded abbreviation. | Show `school_common + program_label`, with the program allowed on the second line. The institution's full name and athletics nickname may appear in restrained secondary identity text. | Use the full public club name, not its legal corporate name unless that is also its public identity. | `full_name`; `school_common`, `program_label`; optional `school_full`, `athletics_nickname`; league context for shared brands. |
| **Spoken/accessibility name** | Full public name, plus sport/league where necessary for unambiguous identification. | School identity + athletics nickname + full program words; use an expanded school identity where the common form is ambiguous. | Full public identity + sport and competition where needed; retain meaningful FC/CF/UNAM components. | Same structured fields, optional `spoken_name_override` and language tag. Event controls also need full opponent names and event context. |

The header should preserve an actual public abbreviation. For example, the NBA directory itself lists **LA Clippers**. Expanding every `LA` to `Los Angeles` is therefore not a universal full-name rule. [NBA team directory][nba]

### Worked identities

These are proposed outputs, not extracted catalog rows. `↵` indicates a permitted line break. The source scoreboard codes for Angel City and Pumas were not audited: `ACFC` and `UNAM` below are **illustrative badge overrides**, not claims about a league feed. The Pacers and Fever specimen assumes both stored codes are `IND`, as implied by the prompt's collision scenario.

| Proposed specimen | Badge | Map chip, no collision | Following lead / picker label | Team-page header |
|---|---|---|---|---|
| **EXAMPLE — Dodgers** | LAD | Dodgers | LA Dodgers | Los Angeles Dodgers |
| **EXAMPLE — Pacers** | IND; NBA below when paired with Fever | Pacers | Indiana Pacers | Indiana Pacers |
| **EXAMPLE — Fever** | IND; WNBA below when paired with Pacers | Fever | Indiana Fever | Indiana Fever |
| **EXAMPLE — UCLA football** | UCLA | UCLA | UCLA Football | UCLA Football |
| **EXAMPLE — UCLA men's basketball** | UCLA | UCLA | UCLA Men's Basketball | UCLA Men's Basketball |
| **EXAMPLE — UCLA women's basketball** | UCLA | UCLA | UCLA Women's Basketball | UCLA Women's Basketball |
| **EXAMPLE — Georgia Tech football** | GT | Georgia Tech | Georgia Tech Football | Georgia Tech Football |
| **EXAMPLE — Marquette women's basketball** | MARQ | Marquette | Marquette ↵ Women's Basketball | Marquette Women's Basketball |
| **EXAMPLE — Angel City FC** | ACFC | Angel City | Angel City FC | Angel City FC |
| **EXAMPLE — Pumas UNAM, Liga MX** | UNAM | Pumas | Pumas UNAM | Pumas UNAM |

Name anchors: [Dodgers via MLB][mlb], [Pacers][pacers], [Fever][fever], [UCLA's sport labels][ucla], [Georgia Tech football][gt], [Marquette women's basketball][marquette], [Angel City][angel], and [Pumas' own identity/history][pumas]. Pumas' site uses Club Universidad Nacional and Pumas; **Pumas UNAM is the proposed familiar public display form**, not a claim that it is the club's legal name.

| Proposed specimen | Following title, with the program already in the lead | Explore/date title | Adjacent Explore/date metadata | Spoken team name |
|---|---|---|---|---|
| **EXAMPLE — Dodgers** | Brewers at Dodgers | Brewers at Dodgers | MLB if the surrounding view does not establish the competition | Los Angeles Dodgers, baseball |
| **EXAMPLE — Pacers** | Bulls at Pacers | Bulls at Pacers | NBA if needed | Indiana Pacers, NBA basketball |
| **EXAMPLE — Fever** | Sky at Fever | Sky at Fever | WNBA if needed | Indiana Fever, WNBA basketball |
| **EXAMPLE — UCLA football** | Wisconsin at UCLA | Wisconsin at UCLA | Football | UCLA Bruins football |
| **EXAMPLE — UCLA men's basketball** | Arizona at UCLA | Arizona at UCLA | Men's Basketball | UCLA Bruins men's basketball |
| **EXAMPLE — UCLA women's basketball** | Arizona at UCLA | Arizona at UCLA | Women's Basketball | UCLA Bruins women's basketball |
| **EXAMPLE — Georgia Tech football** | Georgia at Georgia Tech | Georgia at Georgia Tech | Football | Georgia Tech Yellow Jackets football |
| **EXAMPLE — Marquette women's basketball** | Villanova at Marquette | Villanova at Marquette | Women's Basketball | Marquette Golden Eagles women's basketball |
| **EXAMPLE — Angel City** | Gotham at Angel City | Gotham at Angel City | NWSL if needed | Angel City FC, NWSL soccer |
| **EXAMPLE — Pumas** | América at Pumas | América at Pumas | Liga MX if needed | Pumas UNAM, Liga MX soccer |

All pairings are hypothetical. Use `at` only for a known away/home relation. Use `vs.` for a neutral site or when home designation is unknown; a map location alone does not establish home status.

**EXAMPLE — three UCLA programs on one date:** show `UCLA / Football`, `UCLA / Men's Basketball`, and `UCLA / Women's Basketball`. These require expanded chips or a grouped school chip opening three fully named event choices; they are not a promise that all three strings fit the existing 112 × 44 box.

**EXAMPLE — Canada, PWHL:** Montréal Victoire uses its verified provider code on the badge, `Victoire` on a clear map chip, `Montréal Victoire` in the lead/picker/header, and `Montréal Victoire, PWHL ice hockey` in speech. **EXAMPLE — Mexico, LMB:** Diablos Rojos del México uses its verified provider code, `Diablos Rojos` as a proposed short phrase where it fits, the full name in the header, and `Diablos Rojos del México, baseball` in speech. These follow the same fields as the US specimens; neither requires an English translation of the brand. [PWHL club usage][pwhl], [Diablos baseball club][diablos]

## 2. Pro city shortcuts: useful allowlist, not universal substitution

Recommendation: **allow LA, NY, SF, SD, SJ, KC, and LV in compact written names; default to St. Louis, Tampa Bay, and New Orleans in words.** Keep the complete public name in headers and spoken labels. These are proposed editorial choices; none is a declaration that the rejected short form is factually wrong.

The evidence distinguishes prose from scoreboards. MLB navigation uses **LA Dodgers / NY Yankees**, but **Tampa Bay / St. Louis**. [MLB navigation][mlbnav] NFL compact cards explicitly use **NO Saints**, so it would be inaccurate to say that form is never used. [NFL Saints page][nosaints] Sporting Kansas City's site uses **Sporting KC** and **SJ Earthquakes** in compact comparisons. [Club comparison][sporting] NFL and NHL tables also use compact codes; that establishes code usage, not a universal written-name style. [NFL standings sheet][nflcodes], [NHL statistical example][nhlcodes]

| Proposed shortcut | Recommendation for compact name fields | Reason / qualification |
|---|---|---|
| **LA** | Allow. **EXAMPLE:** LA Dodgers. | Strong editorial precedent. Keep distinct club identities and each club's actual full public name. |
| **NY** | Allow when the rest identifies the club. **EXAMPLE:** NY Yankees, NY Mets. | Do not collapse a borough or a branded phrase into NY. **EXAMPLE:** retain Brooklyn Nets. |
| **SF** | Allow. **EXAMPLE:** SF Giants. | Recognizable compact geography; keep San Francisco in the full name. |
| **SD** | Allow. **EXAMPLE:** SD Padres. | Acceptable compact geography; a school must not inherit this pro rule. |
| **SJ** | Allow only for a pro name with the relevant geographic component. **EXAMPLE:** SJ Earthquakes. | League/club compact usage exists. Do not turn San José State into SJ State. |
| **KC** | Allow for a separable prefix; use an explicit override for other word orders. **EXAMPLE:** KC Royals; Sporting KC. | A prefix rule cannot produce Sporting KC from Sporting Kansas City. |
| **LV** | Allow for teams actually branded Las Vegas. **EXAMPLE:** LV Raiders, LV Aces. | Do not apply it to the distinct brand word Vegas. |
| **STL** | Keep as a code/search alias; default to **St. Louis** in written labels. **EXAMPLE:** St. Louis Cardinals. | STL is recognizable but reads more like a scoreboard. This is an editorial preference, not a ban on a real abbreviation. |
| **TB** | Keep as a code/search alias; default to **Tampa Bay**. **EXAMPLE:** Tampa Bay Rays. | TB Rays is intelligible, but offers little benefit over a readable geographic name at this level. On chips, Rays is shorter still. |
| **NO** | Keep as a code/search alias; default to **New Orleans**. **EXAMPLE:** New Orleans Saints. | NO Saints has official compact precedent but can be read as the word "no." Avoid that ambiguity in a name-led app. |

Fan-facing evidence is uneven: an [Outsports account of a fan's switch][fanusage] uses SF Giants and SD Padres, while [Sports Illustrated's Giants coverage][si-no] uses NY Giants and NO Saints. These are examples of real usage, not a representative fan survey. There is no evidence here that fans demand one uniform abbreviation scheme across leagues.

Keep New England, San Antonio, Salt Lake City, Golden State, and all geography outside the approved allowlist as written. Never shorten a school's name with the pro-city rule.

### Regions, two-place brands, and non-US names

- **Use brand geography, not municipal geography.** **EXAMPLE:** Minnesota Twins, Golden State Warriors, Carolina Panthers, Texas Rangers, and Indiana Fever retain their region/state wording. Do not derive their names from the arena's or stadium's municipality. The league directories preserve these regional identities. [MLB teams][mlb], [NBA teams][nba], [NFL teams][nfl], [WNBA teams][wnba]
- **Vegas is not a misspelling of Las Vegas.** **EXAMPLE:** keep Vegas Golden Knights; do not generate LV Golden Knights. The club uses Vegas in its name. [Golden Knights][vegas]
- **Preserve a multi-place brand as a unit.** If the verified source name contains a slash or two places, retain it in `full_name`; use a separately sourced `compact_name` if available. Do not choose one place from a venue or metro record. **EXAMPLE:** if an imported record uses `NJ/NY Gotham FC`, an approved `Gotham` short form is preferable to an invented `NY Gotham`; check the effective-date source before changing the stored full brand. [Gotham's public site][gotham]
- **Protect non-geographic words and word order.** **EXAMPLE:** Real Salt Lake stays Real Salt Lake, not Salt Lake City Real; Inter Miami CF stays Inter Miami CF, not Miami Inter. The MLS directory preserves these identities. [MLS clubs][mls]
- **Preserve source spelling and accents.** **EXAMPLE:** CF Montréal and Montréal Victoire; no blanket MTL prefix in written names. CF Montréal and the PWHL both use the accent. Do not impose that spelling on a different club whose English public brand uses Montreal without it. [CF Montréal][cfm], [PWHL][pwhl]
- **Keep venue city separate from team identity in Mexico.** **EXAMPLE:** Ciudad de México is location metadata; Pumas UNAM and Diablos Rojos del México are team identities. Do not create CDMX Pumas or Mexico City Red Devils. The Diablos' site distinguishes the club's name from its Ciudad de México address. [Diablos][diablos], [club address][diablos-address]

## 3. Colleges: school first, program in words

### Which school form belongs where?

Choose a nationally usable **athletics common name**, not the shortest possible initialism and not necessarily the institution's legal name. Expand it when it would identify the wrong school, erase a meaningful campus/State/City/College distinction, or be unfamiliar outside a local context. Keep the choice stable across cities; a user traveling should not see the same program renamed.

| School | Proposed school words for written labels | Proposed badge / compact exceptions | Evidence and rationale |
|---|---|---|---|
| UCLA / USC | **EXAMPLE:** UCLA Football; USC Football | **EXAMPLE:** UCLA; USC | Keep established abbreviations. USC needs an institution-specific identity and aliases; South Carolina must not silently share that identity. UCLA explicitly uses program words in its all-sports schedule. [UCLA][ucla] |
| California | **EXAMPLE:** Cal Football | **EXAMPLE:** CAL | Cal is an athletics name, not a city abbreviation. Retain California, UC Berkeley, and the full institution name as search aliases. The school's own football coverage uses Cal. [Cal Athletics][cal] |
| Mississippi | **EXAMPLE:** Ole Miss Football | Use the verified existing code; no newly invented initials. | Ole Miss is a public athletics identity, not a nickname to derive from Mississippi. [Ole Miss football][olemiss] |
| Georgia Tech | **EXAMPLE:** Georgia Tech Football | **EXAMPLE:** GT | Keep Tech. Neither Georgia nor GT Football is the proposed main written label. [Georgia Tech][gt] |
| Kennesaw State | **EXAMPLE:** Kennesaw State Football | **EXAMPLE:** KENN if it is the catalog's verified provider code | Keep State. KSU is used by the university but is a weak universal school identifier; its own brand guide treats KSU as secondary. [Kennesaw athletics][kennesaw], [brand guide][ksu-brand], [ESPN listing][espn-kenn] |
| San José State | **EXAMPLE:** San José State Football | **EXAMPLE:** SJSU if verified for the badge | Keep State and the accent. The university style guide explicitly supports the accented athletics name. [SJSU style guide][sjsu] |
| Marquette | **EXAMPLE:** Marquette Women's Basketball | **EXAMPLE:** MARQ | No city is needed or added. Keep the school name in the words beside the tile. [Marquette][marquette] |
| Villanova | **EXAMPLE:** Villanova Men's Basketball | **EXAMPLE:** VILL if that is the verified provider code | No Philadelphia prefix; no automatic shortening to Nova in a cross-city catalog. The school's schedule uses Villanova and program words. [Villanova][villanova] |
| Boston College | **EXAMPLE:** Boston College Men's Ice Hockey | **EXAMPLE:** BC | Keep College to distinguish Boston University and other Boston teams. The school's own communications use both Boston College and BC; BC is better reserved for the tile here. [Boston College][bc] |
| Université de Montréal | **EXAMPLE:** Université de Montréal Football | **EXAMPLE:** UdeM as a compact written form; UDEM in an all-caps tile, subject to review | Prefer the full school name in search and the page header; propose UdeM for constrained leads/chips. Do not reduce every Montreal institution to Montréal. The Carabins' materials use UdeM; their sports labels are in French. [Carabins institutional material][udem], [current Carabins labels][carabins] |
| University of Toronto | **EXAMPLE:** University of Toronto Men's Ice Hockey | **EXAMPLE:** U of T Men's Ice Hockey in a constrained lead; U of T on a chip | Toronto alone is appropriate in a college-only matchup, but a mixed picker needs the institution cue. Toronto's own coverage uses the full institution, Varsity Blues, and gendered ice-hockey labels. [Toronto][toronto], [Toronto identity][toronto-identity] |
| York University | **EXAMPLE:** York Men's Basketball; York University Men's Basketball if a broader catalog contains another York | **EXAMPLE:** YORK | School-first still works. Lions is secondary identity, not a replacement for York. [York Athletics][york] |
| Sacramento City College | **EXAMPLE:** Sacramento City College Football | **EXAMPLE:** Sacramento City on a college matchup/chip if it fits; SCC on the badge | Preserve City; do not confuse it with Sacramento State. Its official athletics site identifies the college and Panthers. Do not assign NCAA merely because it is a college. [SCC athletics][scc], [SCC catalog][scc-catalog] |

Badge examples not directly verified against a provider are proposals, not imported values. In particular, do not substitute a different code merely because this table shows an attractive specimen.

### Does the mascot belong?

Yes, but mostly outside the dense primary labels. Store the **athletics nickname**, not the costumed mascot's character name. The nickname can contain multiple words and may have a program-specific exception; do not assume the last word of `full_name` is the mascot.

- Keep it in the canonical full athletics identity, aliases/search, spoken team label, and optional page-header secondary line.
- Omit it from the default badge, map chip, Following lead, picker title, and college event-title participant names. It adds length without distinguishing the school's programs.
- Use it in editorial prose or a nickname-led presentation only when the school identity is already explicit. Do not switch between school and mascot arbitrarily across equal rows.

**EXAMPLE:** primary header `UCLA Women's Basketball`; optional secondary identity `UCLA Bruins`; spoken name `UCLA Bruins women's basketball`. **EXAMPLE:** searching `Bruins` should find UCLA programs and the Boston Bruins as separately labeled results, not silently choose one. The same principle applies to Trojans, Wildcats, Panthers, and Lions.

### Sport and squad words

School interfaces often put Basketball under separate Men's Sports and Women's Sports headings. That heading carries meaning; a detached app row must restore it. UCLA's all-sports schedule uses Football, Men's Basketball, Women's Volleyball, and Men's Soccer. NCAA navigation pairs men's/women's basketball and ice hockey while using Baseball and Softball as sport names. [UCLA schedule][ucla], [NCAA navigation][ncaa-sports]

ESPN's men's and women's basketball sections both use UCLA Bruins as the team identity; section context supplies the program. This supports separating school identity from program, rather than copying the bare team heading into a mixed-sport list. [ESPN men][espn-men], [ESPN women][espn-women]

| Proposed label policy | Display wording | Rule |
|---|---|---|
| Conventional distinct sport names | Football; Baseball; Softball | Use these words without a routine gender prefix in the present college catalog. Baseball and softball are separate sports, not the male/female versions of one sport. |
| Basketball | Men's Basketball; Women's Basketball | Always paired gender wording in a mixed-program surface, even if a school currently offers only one. |
| Ice hockey | Men's Ice Hockey; Women's Ice Hockey | Keep Ice to distinguish field hockey. A hockey-specific view may use Men's Hockey / Women's Hockey consistently. |
| Soccer | Men's Soccer; Women's Soccer | Apply the same wording policy to every school. |
| Volleyball | Men's Volleyball; Women's Volleyball | Do not leave Volleyball unmarked just because one school has only a women's program. Distinguish beach volleyball as a separate discipline. |

**Do not compute gender visibility from whether the opposite squad exists at that school.** It would make identical sports inconsistently labeled and would change labels when coverage expands. Store squad separately even when it is not displayed.

The proposed Football/Baseball/Softball convention is a sport-wide display policy, not "men are the default." If Fan/Friction adds parallel men's and women's competitions within the same discipline, mark **both** with full squad words in the relevant mixed scope. Do not label one Football and the other Women's Football. Also keep tackle football, flag football, and soccer distinct; the word football is not a safe cross-country sport key.

U Sports follows the same school/program separation. Toronto explicitly uses Men's Ice Hockey and Women's Ice Hockey; York's articles distinguish men's and women's basketball. French-language source labels such as hockey féminin can map to Women's Ice Hockey in an English interface while the school's proper name stays French. [Toronto][toronto], [York][york], [Carabins][carabins]

## 4. The row-title squad tag

**Keep the information where the lead line is absent; replace the `(MBB)` presentation with words.**

- In Following, omit duplicate sport metadata only when the visible lead identifies the exact program. The existence of a hidden or offscreen label does not count.
- In Explore and date pages, use one adjacent metadata line or text pill with the full program. A persistent section heading/filter can carry it only if it names both sport and squad and remains clear while scrolling.
- If a title is exported, shared, read in isolation, or shown without its metadata, append the full words to that title. Do not rely on the user's previous screen.
- A ball icon can reinforce the sport but cannot distinguish men's and women's basketball. Color alone cannot carry the distinction either.

**EXAMPLE:** `Arizona at UCLA` with adjacent `Men's Basketball`, rather than `Arizona at UCLA (MBB)`. **EXAMPLE — isolated title:** `Arizona at UCLA — Women's Basketball`. If Kylie elects to retain codes in a truly constrained presentation, pair MBB/WBB symmetrically and expand them for speech; that is a fallback choice, not this proposal's default.

## 5. Collisions: qualify the smallest ambiguous component

Compare displayed text after case/spacing normalization, but retain the source spelling in display. Resolve against the actual selection scope: the complete loaded day/filter for map chips, the entire result group for a list, and the two sides plus explicit competition context for a title. Avoid labels changing merely because the user pans a map or a row scrolls out of view.

Do not restrict detection to `same code + same sport`. A mixed-sport list can contain identical badges across different sports too. League labels solve cross-league code collisions; they cannot solve two schools sharing a code within the NCAA, or men's and women's programs within one school.

| Collision scenario | Badge | Chip | Lead / picker | Event title | Page header / speech |
|---|---|---|---|---|---|
| **EXAMPLE — UCLA men's and women's basketball** | Same UCLA school badge; the adjacent complete program distinguishes rows. A standalone program selector must carry words beside/below the tile. | Label both with full programs; expand/group when necessary. | UCLA + Men's Basketball / Women's Basketball, equally explicit. | One program metadata label per event; neither gets an unmarked Basketball default. | Complete program in header and spoken name. |
| **EXAMPLE — Houston college and Rockets both stored as HOU** | If needed, place NCAA / NBA below both badges. If the college itself has multiple programs, adjacent program words still matter. | Houston vs Rockets usually already differs; expand the college chip to University of Houston if still ambiguous. | Houston Men's Basketball vs Houston Rockets. | Houston for the college; Rockets for the pro. Add program/league metadata if the context lacks it. | Full college program vs Houston Rockets; include school nickname in college speech. |
| **EXAMPLE — Cleveland State and Cavaliers both stored as CLE** | NCAA / NBA below both, if the tiles need disambiguation. Treat CLE as a supplied-data assumption, not a verified universal Cleveland State code. | Cleveland State vs Cavaliers. | Cleveland State Men's Basketball vs Cleveland Cavaliers. | Cleveland State vs Cavaliers as participant identities; event metadata carries program/league. | Preserve State in college header and speech. |
| **EXAMPLE — Pacers and Fever both stored as IND** | IND + NBA / IND + WNBA, with equal treatment. | Pacers / Fever already distinguish them. | Indiana Pacers / Indiana Fever already distinguish them. | Pacers / Fever; league metadata only if context requires it. | Full public names; league in speech as needed. |
| **EXAMPLE — unrelated schools share a code and league** | Keep the verified codes with clearly written schools beside them; if tile-only selection is unavoidable, change that component to show a school label or use a verified alternate abbreviation. | Expand both to distinct school forms. | Preserve necessary campus/state qualifiers in both school labels. | Expand colliding school names, not the sport code. | Full distinguishing institution identity and program. |
| **EXAMPLE — two Pumas soccer squads** | Same club abbreviation; Liga MX / Liga MX Femenil labels on both where needed. | Pumas + Men's Soccer / Pumas + Women's Soccer, or full league labels on both. | Pumas UNAM with each league on a second line. | Pumas as participant; visible league/program metadata on each event. | Same base public brand with each competition explicit; expand squad words in speech if needed. |
| **EXAMPLE — identical pro nicknames across leagues** | League label if the codes also collide. | Expand both nicknames to compact club names before adding tags. | Use distinct compact names. | Expand ambiguous participant names. | Full public names, then sport/league if still ambiguous. |

The Pumas distinction is real: the club publishes separate Liga MX and Liga MX Femenil coverage. The symmetric display above is a proposed app treatment, not a rewrite of the club's official titles. [Pumas Liga MX][pumas-mx], [Pumas Liga MX Femenil][pumas-women]

If two entries are actually two games of the **same** program, neither school nor sport resolves them. Use event identity: start time, venue, or an official doubleheader game number. **EXAMPLE:** `UCLA Baseball · 1:00 PM` and `UCLA Baseball · 6:00 PM`. Do not create two team records to distinguish two events.

## 6. Named edge-case checks

| Case | Proposed treatment |
|---|---|
| **EXAMPLE — Texas** | College lead `Texas Football`; pro lead `Texas Rangers`. In a college matchup, Texas means the school; on a mixed map, Texas and Rangers differ. Search also matches Longhorns and the full institution. Do not turn the college into Austin or the Rangers into Arlington. Texas Athletics uses the Texas/Longhorns identity. [Texas][texas] |
| **EXAMPLE — Miami** | `Miami (FL) Football` is the safer catalog-wide college label when Miami University of Ohio is covered; use `Miami (OH)` for that school. Heat and Dolphins retain their pro names. Include Hurricanes in search/speech. The Florida school's own public identity is Miami Hurricanes; the location qualifier is a proposed disambiguator. [Miami Athletics][miami] |
| **EXAMPLE — Washington** | `Washington Football` identifies the college program when the school context is clear; `University of Washington Football` is the expansion if needed. Commanders, Wizards, Nationals, Capitals, Mystics, and Spirit keep their distinct club names. Never replace the Huskies' identity with DC, or all Washington pro names with the city alone. Include Huskies in college speech and aliases. [Washington Athletics][washington] |
| **EXAMPLE — Minnesota** | Keep the region in pro leads: Vikings, Twins, Timberwolves, Wild, and Lynx remain distinct via their club identities; the college uses `Minnesota + program`. Do not hard-code a "five pro teams" rule: Minnesota United and Minnesota Frost also demonstrate why the catalog's actual records must define the scope. [MLS][mls], [PWHL][pwhl], [Minnesota NCAA identity][minnesota] |
| **EXAMPLE — Toronto Varsity Blues / York Lions** | Use school + program as elsewhere. Toronto's mixed picker expands to University of Toronto; constrained surfaces can use U of T. York remains York unless another York institution requires expansion. Keep Varsity Blues and Lions for secondary identity, search, and speech. [Toronto][toronto], [York][york] |
| **EXAMPLE — Marquette / Villanova** | Use the school names exactly; do not prepend Milwaukee or Philadelphia. Keep the program in words and allow wrapping. Neither needs a city field to render a name. [Marquette][marquette], [Villanova][villanova] |
| **EXAMPLE — Sacramento City College** | Full institution in picker/header; Sacramento City is a possible shorter opponent form. Preserve City everywhere it matters. SCC can be a badge with the written school beside it. League membership must come from its source, not an NCAA default. [SCC][scc] |
| **EXAMPLE — Angel City / Inter Miami / Real Salt Lake** | Whole club phrases or approved short phrases. Keep FC/CF in full names where used; omit only via explicit short-name policy. Never derive the team identity from the city. [Angel City][angel], [MLS][mls] |
| **EXAMPLE — Pumas UNAM** | Treat the Liga MX club as a professional club, despite its university association. UNAM is meaningful identity, not a sport suffix. Keep its men's/women's squads separate by competition and record ID. Do not apply the NCAA school-plus-program rule merely because its owner/history is university-related. [Pumas history][pumas], [Pumas women][pumas-women] |
| **EXAMPLE — Diablos Rojos del México** | Header retains the whole name; compact written form may be Diablos Rojos, with Diablos reserved for the tightest context if clear. Preserve del México and accents in the full name. The name is also used by a basketball club, so league/sport qualification may be required even after full-name expansion. [Baseball club][diablos], [basketball club][diablos-basketball] |

## 7. Fields to add or normalize, with sources

Do not store six independently edited display strings. Store the identity components and a few deliberate overrides; derive the surface labels in one renderer. Shared school fields can live on a referenced school entity, preserving one competitive-team record per program. If the storage model is flat, fill those shared values by the same `school_id` join.

| Field / small group | Purpose | Source and scalable filling method |
|---|---|---|
| `team_id` and namespaced `source_ids` if absent | Stable identity across name/code changes. A provider's school ID can repeat across sports. | Existing catalog/feed identifiers. Match by provider + competition + team/program ID; store school IDs separately. Never merge on abbreviation alone. |
| `entity_kind` | Distinguish professional club, college program, and other team types. | Existing league metadata, verified membership directories and official team pages. Pumas requires club classification despite UNAM; community colleges require their actual association. [NCAA directory][ncaa-dir], [SCC][scc], [Pumas][pumas] |
| `school_id`, `school_full`, `school_common` | Shared school identity, legal/institutional expansion, public athletics form. | Join provider institution identifiers to official school/association records. Seed common names from structured feed names when available, then resolve source-backed exceptions once per school. [NCAA directory][ncaa-dir], [Cal][cal], [Kennesaw][kennesaw], [Toronto][toronto-identity] |
| `school_compact_override` (nullable) | A recognized smaller school form for chips/leads; never a character-count truncation. | Explicit school usage or a reviewed app alias. Fill only when the common name needs it. **EXAMPLE:** U of T; UdeM. [Toronto usage][toronto-usage], [Carabins material][udem] |
| `athletics_nickname` (nullable; program override allowed) | Keep Bruins / Golden Eagles / Varsity Blues available without parsing them out of every display name. | Structured provider nickname when available; NCAA directory or school athletics identity otherwise. The NCAA Minnesota record explicitly provides nickname information. [NCAA Minnesota][minnesota], [Marquette][marquette], [Toronto][toronto-identity] |
| `brand_geography` and `club_nickname` (nullable) | Support approved prefix shortening only for truly separable names. Geography may be a city, state, region, or multi-place brand. | Source-provided components first. If absent, exact prefix matching against verified brand geography may propose a split; accept only unambiguous matches. Do not populate for indivisible names. Team/league pages are authoritative; venue city is not. [MLS][mls], [WNBA][wnba] |
| `compact_name_override` (nullable) | Preserve idiomatic written identities that cannot be generated safely. | Official club short usage or an explicit editorial exception. **EXAMPLE:** Sporting KC. [Sporting KC][sporting] |
| `badge_text_override` (nullable) | Decouple a useful public abbreviation from a provider's scoreboard code without destroying the source value. | Existing verified code by default; official athletics/club abbreviation if needed. **EXAMPLE:** ACFC. Keep provenance on any override. [Angel City][angel] |
| `squad` and normalized `sport_id` / discipline | Generate complete program words and distinguish same-school programs. | Existing competition/program metadata; official school sports lists and schedules. Use explicit men's/women's/mixed/open/unknown values as appropriate; do not infer from a name or absence of a counterpart. [UCLA][ucla], [Toronto][toronto], [Carabins][carabins] |
| Shared sport-label dictionary: `program_label`, optional internal code | Words for each sport/discipline + squad, localized independently of proper names. | One application dictionary informed by official category names. Map FB/MBB/WBB upstream to structured values; do not use those strings as default visible labels. [NCAA navigation][ncaa-sports], [UCLA][ucla] |
| `competition_id` / `league_id`, with `league_label` | Resolve professional shared brands and badge collisions; avoid treating NCAA as a single sport. | Existing feed, competition directory, official schedule. Preserve existing league/sport fields if already adequate. Conference and governing body may need separate fields rather than being conflated. [MLS][mls], [Pumas coverage][pumas-mx], [Pumas women's coverage][pumas-women] |
| `aliases[]`, optionally language-tagged | Find full school names, common forms, nicknames, source codes, and historical identities. | Generate safe variants from stored fields; add attested aliases from official sources. Accent-insensitive matching is generated for search, not saved back over the proper name. [SJSU style][sjsu], [Cal][cal], [CF Montréal][cfm] |
| `spoken_name_override` and `name_language` (nullable) | Correct unusual pronunciation or ambiguity while retaining the visible label's recognizable words. | Derived full identity/program by default; only exceptional cases need an override, verified with the relevant language/club usage and screen-reader testing. It is application presentation data, not a field assumed to exist in a league feed. |
| `name_provenance` and effective-date/history fields | Record source URL/provider, retrieval date, review state, and the period a name applied to a logged event. | Generated during import and review; authoritative source supplies the name, the importer supplies timestamps. Preserve old names as historical values rather than destructively renaming old event logs. |

Existing `full_name`, `short_name`, `scoreboard_code`, `league`, and `sport` remain valuable. Audit their semantics before reusing them: a current college `short_name` might already be a school common name, while a pro `short_name` might be a nickname or a city. That inconsistency is exactly why the same field cannot be rendered blindly at all six levels.

The derivation order should be explicit:

- **College written identity:** use the school common name plus the dictionary's program label; apply a reviewed school compact override only on designated constrained surfaces. Derive speech from the same fields plus the athletics nickname.
- **Pro compact identity:** use an explicit compact override first. Otherwise, shorten only a validated geographic prefix in a verified geography-plus-nickname name. If that structure is absent or uncertain, return the full public name unchanged.
- **Pro short identity:** use a validated existing short name first, then a separately sourced nickname where appropriate, otherwise the compact identity. Never generate it by taking the last word or deleting FC, CF, Real, United, or a place name indiscriminately.
- **Badge:** use a reviewed override, otherwise the source code. If neither exists, flag the record and show its written identity rather than inventing a three-letter code.

The city-shortcut allowlist and sport-label dictionary are shared application policy, not hundreds of per-team edits. A separate `display_city` is unnecessary for this naming proposal: `brand_geography` describes the name, while venue/metro geography describes where the event is.

### Filling approximately 580 records without 580 hand edits

1. **Export and classify once.** Preserve IDs and existing fields. Partition by competition/entity kind; flag missing or contradictory metadata. No live record changes are part of this research deliverable.
2. **Use the current structured provider first.** Bulk-map fields it actually supplies. A source may expose a nickname, display name, short display name, and abbreviation, but this report does not assume a particular API or promise those fields across all leagues. ESPN's public display conventions are evidence, not an endorsed dependency on an undocumented endpoint.
3. **Join schools once.** Populate full/common school identity and nickname at school level, then propagate to each program. Match by reliable IDs; use names only to propose uncertain matches. Never merge different schools or campuses because they share a code.
4. **Generate the ordinary cases.** Apply the small geographic allowlist to validated components; build program words from sport + squad; generate search variants, accessible labels, and default short/compact names. Keep all unavailable values null/unknown until resolved; missing women's data must not imply men's.
5. **Review exceptions only.** Queue irregular club names, uncertain splits, shared abbreviations, missing squads, cross-school ambiguity, and brand-spelling conflicts. Official club/school sites settle identity; public league directories help cross-check coverage. There is no reliable promise of zero manual review, and the exception count cannot be estimated without the export.
6. **Run a generated naming preview.** Render all team records at all six levels, plus mixed-sport and same-school collision scenarios. Review every overflow, duplicate destination label, loss of State/City/campus wording, and asymmetric squad marking. Use real font measurement; character counts cannot certify fit.
7. **Preserve reviewed overrides on refresh.** New imports may propose changes with provenance; they must not silently replace an approved common name or alter the name shown for a historical visit.

This approach concentrates judgment in shared school mappings, a small global vocabulary, and a source-backed exception list. It avoids six strings times 580 teams while acknowledging the cases a parser cannot settle safely.

## 8. Space, taps, and screen readers

The prompt describes current text in **pixels** but the house rule in **points**. Treat the 11-point minimum and 44-point interaction target as requirements; confirm the actual platform units before implementation. An 11-pixel font is not evidence that the 11-point minimum has been met. Similarly, a 44-pixel box does not by itself establish a 44-point tap target.

- A badge is **at least** 44 wide, not necessarily exactly 44. Allow it to widen for an approved school abbreviation, or retain a shorter verified badge with the full school beside it. Do not put GEORGIA TECH or UNIVERSITÉ DE MONTRÉAL into a fixed narrow tile by reducing text size.
- For 200–220-pixel rows, prefer a second line with the complete program over shrinking text or truncating the gender distinction. **EXAMPLE:** `Marquette` above `Women's Basketball`. The same structure must be available for men's programs.
- The default map chip can remain compact for short identities. When a required qualifier does not fit, **grow/wrap the chip, or group it into a school/venue control opening distinct event rows**. If the product insists that every chip remain exactly 112 × 44, full program words cannot be guaranteed. Neither an invisible accessibility label nor a hover tooltip repairs that visible collision.
- Maintain at least a 44-point target for every interactive chip/row and sufficient separation between adjacent map targets. Noninteractive badges can be decorative within the larger row target.
- League qualifiers beneath badges and program metadata must also meet the 11-point text minimum; they cannot become tiny exception labels.
- Keep one coherent accessible name per actionable row. Hide a redundant badge from the accessibility tree when the row already names the team. Include full program words even if the visible title relies on nearby context. **EXAMPLE:** `Arizona Wildcats at UCLA Bruins, women's basketball`.
- Preserve visible-name words in the accessible name so speech input and screen-reader users can recognize the same control. Use language metadata and targeted pronunciation overrides; do not expand every familiar abbreviation into a cumbersome legal institution name by default.

These are layout requirements to verify in the actual app, including larger text settings. This report has not tested pixel fit or screen-reader output against an implementation.

## 9. Decisions and unresolved cases for Kylie

1. **City-shortcut breadth.** Adopt the seven-item compact allowlist above, keep all ten proposed shortcuts, or use only LA/NY and spell out the rest? Evidence supports multiple conventions; readability and brand tone decide. NO Saints is attested, not an error.
2. **College page identity.** Is the preferred header school + program, with the athletics nickname in a secondary line, or should the mascot appear in the main header? The table recommends the former.
3. **Long school names.** Approve specific compact forms such as U of T and UdeM, and decide whether Miami (FL) should be stable everywhere or expanded only in broader selection contexts. These cannot be derived from string length alone.
4. **Chip semantics and fixed dimensions.** Is a lone school-only chip an acceptable preview in a mixed-sport map? If not, show program words for all college chips. For collisions and long labels, choose expanding chips or grouped event selection; exact fixed dimensions and full words cannot always coexist.
5. **Program placement.** Prefer words in adjacent metadata, or retain paired codes as a last-resort compact fallback? The table recommends words and dropping repetition when the same row already identifies the program.
6. **Catalog/source exceptions.** Confirm existing provider codes, the current public form and effective dates of two-place/renamed brands, and ambiguous shared nicknames. Decide what historical name a past event should show. Those choices require the actual records and source history, not a naming formula.

No choice above has been implemented. The proposed defaults are intended to make the tradeoffs concrete for review.

## Source links

Sources were consulted October 19, 2026. Older guides are used only as evidence of naming/code usage, not current rosters or schedules. Links near the relevant claims indicate what each source supports.

[mlb]: https://www.mlb.com/team
[mlbnav]: https://www.mlb.com/schedule/team-by-team
[nba]: https://www.nba.com/teams
[nfl]: https://www.nfl.com/teams/
[wnba]: https://www.wnba.com/teams
[mls]: https://www.mlssoccer.com/clubs/
[pacers]: https://www.nba.com/pacers/
[fever]: https://fever.wnba.com/
[ucla]: https://uclabruins.com/all-sports-schedule?type=home
[gt]: https://ramblinwreck.com/sports/m-footbl
[marquette]: https://gomarquette.com/sports/womens-basketball
[angel]: https://angelcity.com/fans/fan-hub
[pumas]: https://pumas.mx/historia
[pumas-mx]: https://pumas.mx/noticias/3385
[pumas-women]: https://pumas.mx/noticias/3370
[nosaints]: https://www.nfl.com/teams/new-orleans-saints/
[sporting]: https://www.sportingkc.com/news/numbers-sporting-kc-san-jose-earthquakes
[nflcodes]: https://static.clubs.nfl.com/image/upload/bills/ead06w4bskebakjtgppa
[nhlcodes]: https://media.d3.nhle.com/image/private/t_document/prd/leti2mm0xjmvvel9cz0b.pdf
[fanusage]: https://www.outsports.com/2026/7/9/24138880/dear-giants-sf-san-francisco-mom-gay-sons-pride-night-san-diego-padres-fan/
[si-no]: https://www.si.com/nfl/giants/onsi/game-day/ny-giants-no-saints-game-day-who-s-in-who-s-out-for-week-5-clash
[vegas]: https://www.nhl.com/goldenknights/
[gotham]: https://www.gothamfc.com/
[cfm]: https://www.cfmontreal.com/
[pwhl]: https://www.thepwhl.com/en/news/2026/may/07/montreal-puts-minnesota-on-brink-of-elimination-with-2-1-win
[diablos]: https://www.diablos.com.mx/
[diablos-address]: https://diablos.com.mx/contacto
[diablos-basketball]: https://www.diablosrojosbasquetbol.com.mx/
[cal]: https://calbears.com/news/2026/7/9/cal-announces-2026-football-game-themes
[olemiss]: https://olemisssports.com/sports/football
[kennesaw]: https://www.kennesaw.edu/athletics/
[ksu-brand]: https://www.kennesaw.edu/stratcomm/branding/index.php
[espn-kenn]: https://www.espn.com/college-football/standings
[sjsu]: https://www.sjsu.edu/communications/brand/editorial/sjsu-stylebook.php
[villanova]: https://villanova.com/news/2025/9/11/complete-2025-26-mens-basketball-slate-is-now-set.aspx
[bc]: https://www.bc.edu/bc-web/campus-life/sports-and-recreation.html
[udem]: https://www.carabins.umontreal.ca/wp-content/uploads/doc/Doc_recrut_WEB.pdf
[carabins]: https://carabins.umontreal.ca/nouvelles/page/19/
[toronto]: https://varsityblues.ca/coverage
[toronto-identity]: https://varsityblues.ca/news/2018/2/5/womens-ice-hockey-womens-hockey-playoff-push-friday-night-at-varsity-arena.aspx
[toronto-usage]: https://varsityblues.ca/clippings.aspx?page=4
[york]: https://yorkulions.ca/news/2025/1/16/varsity-athletics-lions-lookahead-volleyball-hosts-next-gen-night-mens-hockey-hosts-colts-crusade-as-winter-term-enters-full-swing.aspx
[scc]: https://sccpanthers.prestosports.com/landing/index
[scc-catalog]: https://scc.losrios.edu/2026-2027-official-catalog/programs-of-study/list-of-programs/kinesiology
[ncaa-sports]: https://www.ncaa.com/?elinkdata=26960
[espn-men]: https://www.espn.com/mens-college-basketball/team/_/id/26/ucla-bruins/
[espn-women]: https://www.espn.co.uk/womens-college-basketball/teams
[texas]: https://texaslonghorns.com/sports/football
[miami]: https://miamihurricanes.com/
[washington]: https://app.gohuskies.com/FB26TicketSpecials
[minnesota]: https://web3.ncaa.org/directory/orgDetail?id=428
[ncaa-dir]: https://www.ncaa.org/about-us/membership-directory/
