# Research prompt: every Montreal venue of 5,000 or more, with capacity by setup

Copy everything below the line into a research model. Save the answer in full as `docs/archive/research/montreal-venue-table-answer.md` and paste it to Claude to check and fold into `src/data/venues.ts`. Drafted Oct 7, 2026, from the New York prompt; Montreal is fifth on `docs/new-city-checklist.md` by Kylie's Oct 7 order (Atlanta, Bay Area, Chicago, Dallas–Fort Worth, Montreal). It is the app's first city outside the United States. Scope, as before: 5,000+ only.

Boundary set earlier (Oct 6): the island of Montreal, Laval, Longueuil and the South Shore. Say so if a building just outside belongs in.

**This answer may be used months after it is written.** Date every figure ("as of Oct 2026"), and list anything scheduled to open, close, rename or change capacity through 2028, with dates. Live ones: the Olympic Stadium's roof replacement and closure, and the Victoire's home arena.

---

## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/archive/research/montreal-venue-table-answer.md`**. Do not make it a PDF, a Word file or a rendered page that can only be saved as a PDF. Inside the file use Markdown headings, pipe tables (`| a | b |`) and inline links. If you cannot create a file, reply in plain Markdown text in the chat instead, and if that is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: Montreal venues that hold 5,000 or more

## What this is for
Fan/Friction is a personal log of live sports and concerts, with a "friction" read computed for each night from public schedules: how many big events share a date, how close their start times are, and whether their crowds hit the same roads. The read sizes each event by its building, so the app keeps its own capacity table. Only rooms of about **5,000 or more** feed the read, so that is the list I need for Montreal: complete, with capacity **by setup**, and with sources.

A missing building makes a busy night look quiet. A wrong capacity makes an event look bigger or smaller than it was. Completeness first, then accuracy, then polish.

## Boundaries
**The island of Montreal, Laval, and Longueuil with the South Shore** (Brossard, Saint-Lambert, Boucherville). Leave out Quebec City (the Centre Vidéotron), Trois-Rivières, Sherbrooke, Ottawa–Gatineau and Mont-Tremblant. Say so if you'd move the line.

**Names:** give the official French name and the English name in use (Centre Bell / Bell Centre, Stade olympique / Olympic Stadium, Parc Jean-Drapeau). The app will store both; say which one the venue itself uses on tickets.

## What counts
Every venue that holds **about 5,000 or more people in at least one setup** and hosts public ticketed or free events. Categories, with examples — **the examples are not the list; enumerate the boundary and add what they miss**:

- **Stadiums:** the Olympic Stadium (**its status: the roof replacement, when it closed to events, when it is due to reopen, and its figures for baseball, football, soccer and concerts**), Stade Saputo (CF Montréal; the post-2012 expansion figure), Percival Molson Memorial Stadium (McGill and the Alouettes; the pre- and post-2010 figures), Stade Hébert and the Claude-Robillard sports complex (around the bar; say which side), CEPSUM (Université de Montréal; around the bar), Concordia Stadium (under; say so).
- **Arenas:** the Bell Centre (Canadiens; hockey, concert end-stage and in-the-round figures), Place Bell in Laval (Rocket; hockey and concert figures), the Verdun Auditorium (the Victoire's main home; under 5,000, but say so and say which Victoire games move to Place Bell or the Bell Centre, with their dates), the Centre Pierre-Charbonneau (under; say so), the Maurice Richard Arena (under; say so), Colisée Jean-Béliveau (Longueuil; under).
- **Tennis:** IGA Stadium at Jarry Park (the National Bank Open's centre court; give the grounds' daily attendance separately, as with the US Open, and the tournament's dates in Montreal versus Toronto by year).
- **Festival grounds and open sites:** Parc Jean-Drapeau (Osheaga, îLESONIQ, Lasso, Piknic Électronik; per-day caps, and the Circuit Gilles Villeneuve's Grand Prix weekend figures), the Quartier des Spectacles and Place des Festivals (the Jazz Festival, Just for Laughs, Francos, Montréal en lumière; free outdoor shows with police crowd estimates), the Old Port (fireworks, the Cirque du Soleil big top), Mount Royal's Tam-Tams (under; say so).
- **Convention centers:** the Palais des congrès (Comiccon, the auto show). **Give per-day attendance for its biggest events and say whether you would treat it as a venue for a crowd read.**
- **Theaters of 5,000+:** none expected; put Place des Arts' Salle Wilfrid-Pelletier, the MTelus and the Théâtre St-Denis in the near-the-line section with their figures.
- **Racetracks:** the Hippodrome de Montréal closed in 2009; history only.

Leave out: rooms under 5,000 in every setup; private spaces; buildings demolished or closed before 2016 except as history inside a current row (the Forum is history).

**Not venues, but tell us the dates:** the Grand Prix weekend (and the Crescent Street and Peel Street closures), the Montreal Marathon, Fête nationale (June 24) and Canada Day, Pride, Fête des neiges, the Santa Claus parade, the Canadiens' outdoor watch parties on Avenue des Canadiens-de-Montréal during playoff runs (the tester's night, May 25, 2026, had one; give its crowd estimate if any was published). List them separately with dates and crowd estimates.

## For each venue
| Field | What I need |
|---|---|
| Name today | Official French name and English name in use, 2026 |
| Earlier names | Every name since 2016, each with the date it changed |
| City or neighborhood | Borough (arrondissement), or city and region |
| Coordinates | Decimal latitude and longitude of the building |
| Capacity by setup | A number for each setup the venue actually uses: hockey, football (CFL), soccer, baseball, tennis, concert (end-stage), in-the-round, festival, and anything else. If a figure changed since 2016, give old and new with the year. |
| Roof | Open-air, covered, retractable (the Olympic Stadium's history), or indoor. Note **winter**: which open-air venues go dark from November to April. |
| Site access | Whether it is an island, bridge-dependent or single-road site. Parc Jean-Drapeau (an island reached by one bridge and one Métro station) and the South Shore crossings are the ones to think hardest about. A yes/no and one sentence. |
| Home teams or regular tenants | Including shared tenancies (McGill and the Alouettes) |
| As of | The date the figure was true, and anything scheduled to change it through 2028 |
| Source for each capacity | A link. Prefer the venue's own site, the team's media guide, or the league. |

## Rules
- **Label every number.** Official, reported, or estimated. Never a bare number.
- **Where sources disagree, give both** and say which you'd use and why. Known traps: Bell Centre 21,105 vs 21,273 vs 21,302 (hockey, and the concert figures); Olympic Stadium 56,040 vs 61,004 vs the 66,308 historic figure, and whether any figure applies while the roof is replaced; Stade Saputo 19,619 vs 20,801; Molson Stadium 23,420 vs 25,012; Place Bell 10,062 vs 10,500 concert; IGA Stadium 11,815 vs 12,500.
- Note **standing-room or festival** figures separately from seated ones. Place des Festivals has no seats at all.
- Say which venues you **could not confirm** rather than guessing.

## What the app already has (check it)
Nothing. Montreal is not in the app today. The research for one past date is saved (`docs/archive/research/past-dates/san-diego-montreal.md`: Canadiens vs. Hurricanes, May 25, 2026, the only 5,000+ event in town that night); confirm the Bell Centre figure it used.

## Output
In the .md file: one table, one row per venue, sorted by capacity, largest first, with the columns above. Then:
1. Near-the-line venues you left out and why (4,000–5,000 rooms).
2. Anything you could not confirm.
3. The big crowd dates with no building.
4. Your answer on the Palais des congrès.
5. Everything scheduled to open, close, rename or change through 2028 (the Olympic Stadium first).

Tables beat prose. Links for every capacity.
