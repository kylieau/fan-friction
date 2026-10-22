## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/research/topics/further-out-rooms-answer.md`**. Not a PDF or a Word file. Use Markdown headings, pipe tables and inline links. If you cannot create a file, reply in plain Markdown in the chat; if it is too long for one message, stop at a clean break, say "continued", and carry on. If the work is too big for one pass, deliver it a few cities at a time, in the order below, and say where you stopped.

# Research brief: the big rooms just outside each covered city ("Further out")

Status: open. Written Oct 20, 2026 by Claude Code, from Kylie's Oct 19–20, 2026 decision: big events within about a 2-hour drive of a covered city show in a "Further out" group, listed for reference and never counted in the city's verdict. For any research model that can browse.

## What this is for
Fan/Friction is a personal log of live events (sports and concerts), with a "friction" verdict for each date in a city. Each covered city has a table of its own rooms. Big events just outside a city (an arena in a neighbouring county, a festival ground an hour out, a racetrack) were invisible. The app now lists them in their own group, but it needs the rooms. Los Angeles has its first four (Toyota Arena in Ontario, San Manuel Stadium in San Bernardino, Morongo Field in Rancho Cucamonga, Fowler Events Center in Riverside); every other city has none.

## Cities, in this order
New York, Chicago, Dallas–Fort Worth, Houston, Washington DC, Philadelphia, Atlanta, Miami, Phoenix, Boston, Bay Area, Seattle, Toronto, Mexico City, Montreal, Vancouver, Detroit, Minneapolis–St. Paul, Denver, then the rest: San Diego, Tampa Bay, Columbus, Cleveland, Nashville, Austin, Sacramento, Las Vegas, Kansas City, Indianapolis, New Orleans, Salt Lake City, Ottawa–Gatineau, Edmonton, San Antonio, Portland, Raleigh–Durham, St. Louis, Pittsburgh, Milwaukee. Los Angeles: only rooms not named above (festival grounds especially).

## What counts
A room or regular event site that:
- is **outside** the city's own area (the city's metro as the app covers it; when unsure, say which county or region you treated as outside, and why);
- is within **about 2 hours' ordinary driving** of the city's core (downtown), without traffic;
- **holds 5,000 or more** for at least one ticketed setup it actually uses (arena, stadium, amphitheater, racetrack grandstand, fairground or festival ground with a published daily figure);
- hosts **public ticketed events** at least a few times a year.

Leave out: rooms under 5,000; private or members-only sites; rooms inside another covered city (they already belong to that city: say which city instead); sites that closed before 2024.

## For each room
| Field | What I need |
|---|---|
| Name today | Official name in 2026, and the name Ticketmaster lists it under if different |
| Earlier names | Every name since 2016, each with the date it changed (say "unconfirmed" rather than guess) |
| Town | Town and county or region |
| Which city it is near | The covered city it is further out from; if within 2 hours of two covered cities, name both |
| Drive | About how long from that city's downtown, ordinary traffic, with your source (a route planner is fine) |
| Coordinates | Decimal latitude and longitude of the building or grounds; say whether it is a door, a building outline or an address point |
| Capacity by setup | Each setup it uses (concert, basketball, hockey, football, racing, festival day), with old and new figures if they changed |
| Roof | Open-air, covered, or indoor |
| Kind | Arena, stadium, amphitheater, racetrack, fairground, festival ground, other |
| Regular events | The kinds of events it hosts and roughly how often (a resident team, a concert season, one festival a year) |
| Source for each capacity | A link. Prefer the room's own site, then the operator, then a reliable report |

## Rules
- **Label every number:** official, reported or estimated. Never a bare number.
- Where sources disagree, give both and say which you would use and why.
- Say which rooms you **could not confirm** rather than guessing. If a page will not load, list it and move on; do not use a cached or archived copy.
- Public sources only. No costs, sign-ups or contacting anyone. 🚩 Flag anything that would cost money.

## Output
One table per city, largest first. Then, per city: rooms you left out near the line (4,000–5,000, or about 2 hours 15 minutes out) and why; rooms within 2 hours of two covered cities; anything you could not confirm.

## Continuation pastes

The research delivers a few cities per pass. Each continuation paste says where to pick up and lists the rooms the app already has in the next cities, with their towns, so those towns read as inside the city and the research never lists a room we own. The rooms come from `src/data/venues.ts` (the current name on the date of the paste, the largest setup on file, latitude and longitude); the towns are added by hand from the room's address.

### Continuation 2 (Oct 22, 2026): from Atlanta

Status: the answer through Philadelphia is saved as `further-out-rooms-answer.md`. Next: Atlanta, Miami, Phoenix, Boston.

```
Continue the Further out research from Atlanta, in the brief's order: Atlanta, Miami, Phoenix, Boston. Keep New York, Chicago, Dallas–Fort Worth, Houston, Washington DC and Philadelphia exactly as delivered; append the new city sections and update the delivery status and the continuation point. Same rules, same table, same labels (official / reported / estimated), same "near the line", "shared with another covered city" and "could not confirm" sections per city. Deliver the whole file again as docs/research/topics/further-out-rooms-answer.md.

The app already has these rooms in the next four cities. Their towns are inside the city's own area; do not list these rooms or any other room in those towns as Further out. A room in another town is yours to judge by the metro rule you have been using, and say which counties you treated as outside.

Atlanta (rooms on file; town; largest setup on file):
- Mercedes-Benz Stadium; Atlanta; 71,000
- EchoPark Speedway; Hampton (Henry County); 71,000
- Bobby Dodd Stadium at Hyundai Field; Atlanta; 55,000
- Truist Park; Cumberland (Cobb County); 41,084
- Center Parc Stadium; Atlanta; 24,333
- State Farm Arena; Atlanta; 21,000
- Lakewood Amphitheatre; Atlanta; 18,920
- Fifth Third Stadium; Kennesaw; 16,316
- Gas South Arena; Duluth (Gwinnett County); 13,000
- Ameris Bank Amphitheatre; Alpharetta; 12,000
- Gwinnett Field; Lawrenceville; 10,427
- B.T. Harvey Stadium; Atlanta; 9,000
- McCamish Pavilion; Atlanta; 8,600
- GSU Convocation Center; Atlanta; 8,000
- Synovus Bank Amphitheater at Chastain Park; Atlanta; 6,900
- Forbes Arena; Atlanta; 6,000
- Wolf Creek Amphitheater; South Fulton; 5,420
- VyStar Arena (the Kennesaw State convocation center); Kennesaw; 5,000
- Panther Stadium; Atlanta; 5,000
- Gateway Center Arena; College Park; 5,000

Miami (the app's Miami covers Miami-Dade and Broward):
- Miami Stadium (the NFL stadium); Miami Gardens; 64,767
- Homestead-Miami Speedway; Homestead; 46,000
- loanDepot park; Miami; 36,742
- Nu Stadium at Miami Freedom Park; Miami; 26,700
- Amerant Bank Arena; Sunrise; 23,000
- Chase Stadium; Fort Lauderdale; 21,550
- Pitbull Stadium; Miami (FIU); 20,000
- Kaseya Center; Miami; 19,600
- Watsco Center; Coral Gables; 7,972
- Hard Rock Live; Hollywood; 7,000
- Beyond Bancard Field at NSU; Davie; 7,000
- FIU Arena; Miami; 5,000
- The Fillmore Miami Beach; Miami Beach; 2,700
- Broward Center for the Performing Arts; Fort Lauderdale; 2,658
- Adrienne Arsht Center; Miami; 2,400
- FPL Solar Amphitheater at Bayfront Park; Miami; no figure on file
(Palm Beach County has no room on file. Treat it as outside unless your metro rule says otherwise, and say which.)

Phoenix (the app's Phoenix covers Maricopa County):
- State Farm Stadium; Glendale; 63,400
- Mountain America Stadium; Tempe; 53,599
- Chase Field; Phoenix; 48,633
- Phoenix Raceway; Avondale; 42,000
- Talking Stick Resort Amphitheatre; Phoenix; 20,106
- Desert Diamond Arena; Glendale; 19,000
- Mortgage Matchup Center; Phoenix; 17,071
- Sloan Park; Mesa; 15,000
- Desert Financial Arena; Tempe; 14,198
- Camelback Ranch–Glendale; Glendale; 13,500
- Peoria Sports Complex; Peoria; 12,339
- Scottsdale Stadium; Scottsdale; 12,000
- Salt River Fields at Talking Stick; Salt River Pima-Maricopa Indian Community (Scottsdale address); 11,000
- Surprise Stadium; Surprise; 10,714
- Hohokam Stadium; Mesa; 10,500
- American Family Fields of Phoenix; Phoenix; 10,000
- Phoenix Rising Soccer Stadium; Phoenix; 10,000
- Tempe Diablo Stadium; Tempe; 9,558
- Goodyear Ballpark; Goodyear; 9,500
- Phoenix Municipal Stadium; Phoenix; 7,800
- Global Credit Union Arena; Phoenix; 7,000
- Mullett Arena; Tempe; 5,000
- Arizona Financial Theatre; Phoenix; 5,000
- Arizona Veterans Memorial Coliseum; Phoenix; no figure on file
- Firebird Motorsports Park; Chandler; no figure on file
(Tucson and Prescott have no room on file; Tucson is about 1h45 from downtown Phoenix.)

Boston (the app's Boston covers the Boston metro, including Foxborough, Mansfield and Lowell):
- Boston Stadium (the NFL stadium); Foxborough; 64,628
- Alumni Stadium; Chestnut Hill; 44,500
- Fenway Park; Boston; 37,755
- Harvard Stadium; Boston (Allston); 25,000
- Comcast Center; Mansfield; 19,900
- TD Garden; Boston; 19,156
- Nickerson Field; Boston; 9,871
- Conte Forum; Chestnut Hill; 8,606
- Tsongas Center; Lowell; 7,800
- Agganis Arena; Boston; 7,200
- MGM Music Hall at Fenway; Boston; 5,009
- Rockland Trust Bank Pavilion; Boston; 5,000
- The TRACK at New Balance; Boston (Brighton); 5,000
- Wang Theatre, Roadrunner, Jordan Field, Orpheum Theatre, House of Blues Boston, Big Night Live, Royale; Boston; all under 5,000
(Providence, Worcester, Manchester NH, Hartford and Portland ME are not covered cities. Your New York section already noted the Hartford rooms as Boston leads.)

Stop at a clean break and say where you stopped.
```
