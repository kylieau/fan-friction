# Sport list: the second opinion (Oct 6, 2026)

Kylie ran `docs/archive/second-opinions/sport-list-second-opinion-prompt.md` through another model and pasted the answer back. Kept as pasted, lightly trimmed. Claude's read and the decision are at the bottom. The answer itself notes it may not be independent of the prompt's author; a run through a non-Claude model is still worth doing.

## The answer, as pasted

**Recommendation: a fifth option, "derive first, ask second."** The first field is one search box for teams and competitions. Picking a known team fills in sport, level, division and competition, so the person taps nothing else. When neither team is known (a high-school game, a club match), fall back to structured chips: Sport, then Level, then Division only when ambiguous. Letterboxd and Flighty work this way. League-first is the right data idea but the wrong entry point: people think in teams.

| Path | What the user does | Taps after typing |
|---|---|---|
| Known team | Pick the team, pick or type the opponent | 0 |
| Unknown teams | Type both names, tap Sport, tap Level, (tap Division) | 2–3 |
| Individual or event sport | Pick or type the event, no teams | 0–2 |

**Fields** (maps onto the existing sport + level, adds two):

| Field | Stored as | Asked when |
|---|---|---|
| sport | unambiguous slug (`american_football`, `soccer`, `ice_hockey`), display name localized | not derivable |
| level | pro, lower, college, school, amateur | not derivable |
| division | men, women, mixed; its own field, derived from the competition when known | college/school, or pro with no competition |
| competition | catalog id or free text ("competition", not "league": cups, tournaments, World Cup, Leagues Cup) | optional |
| conference | free text, college only | optional |
| home, away / event | team ids, or an event name for individual sports | team sports / event sports |

**Sport list v1:** shown by default (reordered by the person's history): Football, Basketball, Baseball, Soccer, Hockey, Volleyball. Behind "More": Softball, Lacrosse, Tennis, Golf, Motorsport, Boxing, MMA, Wrestling, Rugby union, Rugby league, Cricket, Aussie rules, Track & field, Other.

**Level and division chips:** Pro · Minor league · College · High school · Club/amateur. Division asked always for College (Men's/Women's), High school (Boys/Girls, stored men/women), Club (Men's/Women's/Mixed), and for Pro only when no competition is picked.

**Competition suggestions** (picking one sets level and division): Baseball MLB / Triple-A…; Basketball NBA, WNBA / G League; Football NFL, UFL, CFL; Hockey NHL, PWHL / AHL, ECHL; Soccer MLS, NWSL, Liga MX, Premier League, Leagues Cup, World Cup / USL; College NCAA D-I, D-II, D-III, NAIA, JUCO.

**The five examples:** log rows read "Giants at Dodgers · Baseball · MLB", "Aces at Sparks · Basketball · WNBA", "USC at UCLA · Basketball · Women's college", "Rival HS vs. Home HS · Football · High school · SoFi Stadium" (never NFL), "Chelsea at Arsenal · Soccer · Premier League" (UK: "Arsenal v Chelsea · Football"). Stats compose from independent facets: "12 nights of women's basketball" = sport basketball and division women, broken out WNBA 7, College 5.

**What's wrong in the options:** "Football" and "Hockey" mean different sports abroad (use slugs); "Big Ten" is a conference, not a league; "League" misses cups and tournaments (say competition); men's/women's only under College misses high school and club; tennis, golf, motorsport and combat sports don't fit a home/away form (branch to an event name); "lower" needs a rule (paid but below the top flight); a team is a sport-specific program with a parent org (UCLA is many teams); store home/away and render "A at B" or "B v A" by locale; national teams are level pro with the competition carrying the rest.

## Claude's read
Agree with the shape: derive from a known team first, structured fallback second, division as its own field, "competition" not "league", slugs for sport. Two cautions. First, the full version (team search, parent orgs, locale-rendered team order, event sports) is a lot for a form that today is one `select`; the v1 cut below gets most of the value. Second, the data model's `level` already has `pro | lower | college | school`; adding `amateur` is cheap, and `division` is new.

**Proposed v1 cut for the Add form:** What stays a title for now. Sport chips (six shown, More for the rest). Level chips. Division chips when College, High school or Club, or Pro with no competition. A Competition typeahead with the suggestions above. The log row reads "Sport · Competition" or "Sport · Level phrase". Team-first derivation comes when the Add form gets team search (it can reuse the Favorites search). Awaiting Kylie's lock.
