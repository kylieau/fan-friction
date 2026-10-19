# Team naming: a proposal from the Oct 19 research

Claude Code (Fable 5.1), Oct 19, 2026. For Kylie to decide; nothing here is built except the one bug fix in section 4. The research it answers is `docs/research/topics/team-naming-levels-answer.md` (her prompt: `team-naming-levels-prompt.md`). Where this proposal says "the research recommends", that is the research model's view, not hers.

The research was written without the catalog, so its examples are hypothetical. This proposal runs today's naming rules over the 579 teams on file and shows what they actually produce, so each call is made on real rows.

## 1. What already matches the research (nothing to decide)

Built Oct 19 and agreed by the research: the badge is the school or scoreboard code alone; written labels are school plus sport in words ("UCLA Football", "UCLA Men's Basketball"); pros are a city shortcut plus nickname in compact spots and the full public name on the page header; Football, Baseball and Softball carry no side word, Basketball, Ice Hockey, Soccer and Volleyball always do; the mascot stays out of dense labels (search and screen readers only); two programs of one school are told apart by the words, never by a "W" on the women's side; league captions only on a clashing pro pair.

## 2. What the rules produce today, and where they go wrong

### Pro shortcuts (the list in `src/data/teams.ts`, `CITY_SHORTCUTS`)

| Today's output | What it is | Reads well? |
|---|---|---|
| LA Dodgers, NY Mets, SF Giants, SD Padres, SJ Sharks, KC Chiefs, LV Raiders | the seven the research keeps | yes |
| **STL CITY SC**, **STL CITY2**, STL Cardinals, STL Blues, STL Battlehawks | St. Louis | "STL CITY SC" reads as a code, not a name |
| **TB Sun FC**, TB Rays, TB Lightning, TB Rowdies | Tampa Bay | "TB Sun FC" is not a name anyone writes |
| **NO Pelicans**, **NO Saints**, NO Jesters | New Orleans | "NO" reads as the word no (the research's point; NFL cards do write "NO Saints") |
| **Kansas City Mavericks** beside **KC Chiefs** | the Mavericks' stored short name already starts with KC, so the rule leaves the full name | inconsistent |
| **Sporting Kansas City** | the club writes Sporting KC | the rule cannot shorten a name whose city sits in the middle |
| **Los Angeles FC** beside **LA Galaxy** | the club writes LAFC | inconsistent |
| New York City FC, San Antonio FC, Detroit City FC, Minnesota United FC | the clubs write NYCFC, SAFC, DCFC, MNUFC; the stored short names already hold those | full name today |

### College school words (the part before the sport)

The school word comes from each city build's stored short name, and the builds were not consistent. Los Angeles stored "UCLA" and "USC"; other builds stored lossy initials, mascots, or the school's words:

| Today's output | Problem |
|---|---|
| **UH Football**, **USF Football**, **UW Football**, **TSU Football**, **ASU Football**, **PVAMU Football**, **SDSU Men's Basketball** | initials that fans outside the city do not read; UH, USF, UW and TSU each name two different schools nationally |
| **Bears Ice Hockey** (Alberta), **Ravens Men's Basketball** (Carleton), **Gophers Women's Volleyball** (Minnesota), **Varsity Blues Ice Hockey** (Toronto), **TMU Bold Basketball** | the mascot stands where the school should be; "Bears" and "Ravens" are not schools |
| Ohio State Football, Texas Football, Michigan Football, Marquette Women's Basketball, Georgia Tech Football, Boston College Football | right |

This is the research's "school common name" point as a real finding, and it is a city-neutral problem: the same rule reads differently by which build stored the row. AGENTS.md says a feature that only works because one city was hand-tuned is not done.

### Codes the rows and chips use

A college game on an Explore or date row already writes its sport in words on its own line ("Men's Basketball"), so the research's worry about "(MBB)" on rows is mostly past. The code still appears in three places: inline on the Local Competition bars ("(MBB)", where there is no room for words), paired with a round on the label line ("MBB · Round of 64"), and on a map chip when two of one school's programs play the same day ("UCLA MBB", "UCLA WBB"). Those chip and row codes come from a second list in `src/lib/eventTitle.ts`, which writes hockey as **MHKY / WHKY**, not the **MIH / WIH** of her Oct 19 list. Two lists, two spellings.

## 3. The five differences, sorted by what deciding them costs

### A. Copy only (no mock needed, per her Oct 16 rule)

**A1. Drop STL, TB and NO from the shortcuts.** Recommendation: yes, adopt the research's seven (LA, NY, SF, SD, SJ, KC, LV). St. Louis City SC, Tampa Bay Sun FC and New Orleans Pelicans are written out. Costs about four more characters on those rows; the lead line has about 220 px, which fits.

**A2. A compact name for clubs whose short name already carries the brand.** Recommendation: a computed rule, no hand flags: when a stored short name already contains a city shortcut or is an initialism (Sporting KC, KC Mavericks, LAFC, NYCFC, SAFC, DCFC, MNUFC), the compact name is that short name. Everything else keeps today's rule. The research proposes a hand-filled `compact_name_override` field; the computed rule covers every row on file today, and a field can come later if a club needs one.

**A3. One spelling for the sport codes.** Recommendation: the chip and bar codes follow her list (MIH / WIH for hockey), so a chip never says "UCLA MHKY" while the sheet says "UCLA Men's Ice Hockey". One line in the second list.

**A4. The paired label line in words.** Recommendation: "Men's Basketball · Round of 64" on the row's label line (it is its own line, so it has the room); the bars keep the code (they do not). A wording change on one line.

**A5. A nickname line on college page headers** (the research's lean: "UCLA Men's Basketball" with "Bruins" quiet under it). Recommendation: not now. The header already says the program, the spoken name already says "UCLA Bruins Men's Basketball", and her copy rule is to say less. Easy to add later if a tester misses it.

### B. Structural (a mock or a screenshot proposal first)

**B1. Chips when two programs of one school play the same day.** Today: the code is added only on the clash ("UCLA MBB" / "UCLA WBB"). The research wants words on both chips or one school chip that opens the choices, and admits neither fits a 112 × 44 box. Recommendation: keep the code on a clash. It happens on few days, the code is in her own list, and a chip is a pointer the card then spells out. Anything else is a Map change, so if she wants words I bring a screenshot of both options before building.

### C. Data (propose before building; this is the real work)

**C1. One school word per program.** Recommendation: add a `school` word to each college program (the common athletics name: "Houston", "South Florida", "Washington", "Texas Southern", "Arizona State", "Prairie View A&M", "San Diego State", "Alberta", "Carleton", "Minnesota", "Toronto", "TMU") and derive every written label from it plus the sport words. 249 programs across 97 distinct school words today, so it is one reviewed word per school, filled by a script from the stored full name ("Arizona State Sun Devils Men's Hockey" → "Arizona State") with the mascot list stripped, and a short exception list checked by hand (the Canadian schools, the ones whose full name is an initialism). The badge code is untouched.

**C2. Compact forms for long schools** (the research's U of T, UdeM, Miami (FL) / Miami (OH)). Recommendation: a `compactSchool` field, filled only for the handful that need it, used on chips and the 12.5 px lead line. Not worth a field until a long school is actually on file: today's longest school words are "Kennesaw State", "San José State", "Detroit Mercy" and "Sacramento City", which fit the lead line, so this can wait for the first Canadian or Ohio build that needs it.

**C3. The side (men's / women's) as a stored value, not a guess.** See section 4. Seven programs have no side on file. Recommendation: she fills the seven rows below once, and the rule never guesses again.

**C4. The rest of the research's field model** (`entity_kind`, `brand_geography`, `club_nickname`, `badge_text_override`, `squad`, aliases with language tags, `spoken_name_override`, provenance and history). Recommendation: not now. C1 and C3 cover every visible problem on file; aliases already exist; the badge override is covered by the existing scoreboard code field. Revisit when a city build hits a case the three fields cannot express.

## 4. Found while checking, and fixed (committed locally, held unpushed)

**Four women's volleyball programs were written as men's.** Marquette, Milwaukee, Sacramento State and Minnesota women's volleyball were stored under the plain league "College volleyball", and the Oct 19 rule read the side from the league string alone, so their long names said "Men's Volleyball". Fixed: the side is read from the league or the full name, and a program whose side neither says reads its sport alone ("Texas Volleyball") rather than a guessed "Men's". Also fixed: "Community college football" (Sacramento City College) now counts as a college program, so it reads "Sac City Football" instead of its whole 41-character name.

**Seven programs now read the sport alone, because nothing on file says their side.** For Kylie, or whoever runs the next data pass, to fill (this is C3):

| Program | Today | Likely answer (unverified) |
|---|---|---|
| Texas Longhorns Soccer | Texas Soccer | women's (Texas has no men's soccer) |
| Texas Longhorns Volleyball | Texas Volleyball | women's |
| Alberta Golden Bears Hockey | Bears Ice Hockey | men's (the women's side is the Pandas) |
| UBC Thunderbirds Hockey | UBC Ice Hockey | both exist; which one is on the feed? |
| UBC Thunderbirds Soccer | UBC Soccer | both exist |
| Toronto Varsity Blues Hockey | Varsity Blues Ice Hockey | both exist |
| TMU Bold (basketball) | TMU Bold Basketball | both exist |
| Boston College Eagles Football, and every football, baseball and softball row | unchanged | no side word by rule |

The code that reads a game's side for row labels (`src/lib/eventTitle.ts`) already read league and name together; the Oct 19 name rule did not, which is how the bug got in. The two should share one reader; noted in the gap review.

## 5. The unit question (one open item, not two)

The research notes that the house rule says 11 **pt** while the app's sizes are in CSS **px**, and that a 12.5 px line does not prove an 11 pt floor. On a phone, 1 CSS px is drawn at the device's scale, and iOS treats 1 pt as 1 CSS px, so for this app the two are the same number. The still-unconfirmed 12.5 px leads (the Faves row's team line, the Following row's lead and facts lines, the Stubs row's state line) are the only lines near the floor. Recommendation: Kylie confirms the house rule means 11 CSS px, and signs off the 12.5 px lines in one go, or asks for 13 px everywhere a line sits under 13 today.

## 6. Questions for Kylie

1. A1: drop STL, TB and NO (recommended)?
2. A2: the computed compact-name rule for Sporting KC, KC Mavericks, LAFC, NYCFC, SAFC, DCFC, MNUFC (recommended), or leave those at their full names?
3. A3 and A4: one spelling of the sport codes, and words on the paired label line (both recommended, no mock)?
4. A5: no nickname line on college headers for now (recommended)?
5. B1: keep the code on a clashing chip (recommended), or see a screenshot of the two word options?
6. C1: go ahead with one reviewed school word per program (recommended; a data pass, nothing on screen changes except the wrong words above)?
7. C3: the seven sides in section 4; any she knows now?
8. Section 5: does 11 pt mean 11 CSS px, and do the 12.5 px lines stand?
