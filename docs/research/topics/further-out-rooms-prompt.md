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

### Continuation 3 (Oct 22, 2026): from the Bay Area

Status: delivery 3 (Atlanta, Miami, Phoenix, Boston) is saved as `further-out-rooms-answer-3.md`. Next: Bay Area, Seattle, Toronto, Mexico City.

```
Continue the Further out research from the Bay Area, in the brief's order: Bay Area, Seattle, Toronto, Mexico City. Same rules, same table, same labels (official / reported / estimated), same "near the line", "shared with another covered city" and "could not confirm" sections per city, and the same downtown drive ranges with their planner sources. Deliver this as Delivery 4, a new file with only these four city sections, its own delivery status and the continuation point; do not repeat earlier deliveries.

The app already has these rooms in the next four cities. Their towns are inside the city's own area; do not list these rooms or any other room in those towns as Further out. A room in another town is yours to judge by the metro rule you have been using; say which counties you treated as outside.

Bay Area (the app's Bay Area covers San Francisco, Alameda, Contra Costa, San Mateo and Santa Clara counties; Sacramento is its own covered city). Rooms on file; town; largest setup on file:
- Levi's Stadium; Santa Clara; 68,827
- California Memorial Stadium; Berkeley; 62,467
- Oakland Coliseum; Oakland; 53,200
- Stanford Stadium; Stanford; 50,424
- Oracle Park; San Francisco; 41,265
- CEFCU Stadium; San Jose; 30,456
- Shoreline Amphitheatre; Mountain View; 22,500
- Edwards Stadium; Berkeley; 22,000
- Oakland Arena; Oakland; 19,596
- Chase Center; San Francisco; 19,500
- SAP Center; San Jose; 18,543
- PayPal Park; San Jose; 18,000
- Cow Palace; Daly City; 16,500
- Toyota Pavilion at Concord; Concord; 12,500
- Haas Pavilion; Berkeley; 11,858
- Kezar Stadium; San Francisco; 10,000
- Greek Theatre; Berkeley; 8,500
- Bill Graham Civic Auditorium; San Francisco; 8,500
- Frost Amphitheater; Stanford; 8,000
- Maples Pavilion; Stanford; 7,233
- Stevens Stadium; Santa Clara; 6,800
- Provident Credit Union Event Center; San Jose; 6,000
- Saint Mary's Stadium; Moraga; 5,500
- Leavey Center (Santa Clara), University Credit Union Pavilion (Moraga), War Memorial at the Sobrato Center and Negoesco Stadium (San Francisco); all under 5,000

Seattle (the app's Seattle covers King, Pierce and Snohomish counties, plus the Gorge, which is on file as a Seattle room). Rooms on file; town; largest setup on file:
- Husky Stadium; Seattle; 72,132
- Lumen Field; Seattle; 68,740
- T-Mobile Park; Seattle; 47,943
- Pacific Raceways; Kent; 30,000
- The Gorge; George (Grant County); 27,500
- Seattle Center grounds; Seattle; 26,000
- Tacoma Dome; Tacoma; 21,000
- Climate Pledge Arena; Seattle; 18,300
- White River Amphitheatre; Auburn; 16,000
- Everett Memorial Stadium; Everett; 12,000
- Memorial Stadium; Seattle; 12,000
- Umpqua Bank Grandstand (Washington State Fair); Puyallup; 10,200
- Alaska Airlines Arena; Seattle; 10,000
- Angel of the Winds Arena; Everett; 10,000
- Emerald Downs; Auburn; 9,100
- Evergreen Speedway; Monroe; 7,500
- accesso ShoWare Center; Kent; 7,300
- WaMu Theater; Seattle; 7,000
- Marymoor Live; Redmond; 6,500
- Cheney Stadium; Tacoma; 6,500
- Remlinger Farms; Carnation; 6,000
- Husky Soccer Stadium; Seattle; under 5,000
(Vancouver and Portland are covered cities: a room within reach of Seattle and one of them goes under "shared with another covered city".)

Toronto (the app's Toronto covers the City of Toronto plus Peel, York, Halton and Durham through Oshawa; Hamilton is a separate city, not covered). Rooms on file; town; largest setup on file:
- Rogers Stadium; Toronto (Downsview); 50,000
- Rogers Centre; Toronto; 50,000
- BMO Field; Toronto; 28,180
- Scotiabank Arena; Toronto; 19,800
- RBC Amphitheatre; Toronto; 16,000
- Sobeys Stadium; Toronto (York University); 12,500
- CNE Bandshell; Toronto; 10,000
- Coca-Cola Coliseum; Toronto; 9,250
- Tribute Communities Centre; Oshawa; 7,600
- Mississauga Sports and Entertainment Centre; Mississauga; 5,420
- The Theatre at Great Canadian Casino Resort Toronto; Toronto (Etobicoke); 5,000
- CAA Centre; Brampton; 5,000
- Varsity Stadium; Toronto; 5,000
- Pickering Casino Resort theatre; Pickering; 2,500
- 25 more rooms under 5,000, all in Toronto (theatres, halls, Varsity Arena, the York and TMU campus rooms)
(Ottawa–Gatineau and Montreal are covered cities.)

Mexico City (the app's Mexico City covers CDMX's 16 alcaldías plus the State of Mexico municipalities of the long-standing ZMVM; Toluca, Puebla and Querétaro are separate cities, not covered). Rooms on file; alcaldía; largest setup on file:
- Estadio Banorte; Coyoacán; 87,000
- Estadio GNP Seguros; Iztacalco; 65,000
- Estadio Olímpico Universitario; Coyoacán; 58,445
- Plaza de Toros México; Benito Juárez; 50,000
- Estadio Ciudad de los Deportes; Benito Juárez; 34,253
- Arena Ciudad de México; Azcapotzalco; 22,300
- Palacio de los Deportes; Iztacalco; 21,000
- Estadio Alfredo Harp Helú; Iztacalco; 20,576
- Arena México; Cuauhtémoc; 16,500
- Estadio Wilfrido Massieu; Gustavo A. Madero; 13,000
- Auditorio Nacional; Miguel Hidalgo; 9,366
- Pepsi Center WTC; Benito Juárez; 8,000
- Gimnasio Olímpico Juan de la Barrera; Benito Juárez; 5,242

Stop at a clean break and say where you stopped.
```

### Continuation 4 (Oct 22, 2026): from Montreal

**The line is drive time since Oct 23, 2026 (Kylie):** a room is inside a city when it is within a normal, non-event 60-minute drive of the city hall (each city hall, for the Bay Area, Dallas–Fort Worth, Minneapolis–St. Paul, Raleigh–Durham and Ottawa–Gatineau); Further out is beyond that and up to about 3 hours. Rooms the old region names left out but the hour puts inside (Montreal's Saint-Jean-sur-Richelieu and Saint-Hyacinthe, about 40 and 50 minutes) go in a separate section, "Inside under the drive rule, not on file," with the drive and its source, never in the Further out table.

Status: delivery 4 (Bay Area, Seattle, Toronto, Mexico City) is saved as `further-out-rooms-answer-4.md`. Delivery 5 (Montreal, Vancouver, Detroit, Minneapolis–St. Paul) is saved as `further-out-rooms-answer-5.md` (Oct 23).

```
Continue the Further out research from Montreal, in the brief's order: Montreal, Vancouver, Detroit, Minneapolis–St. Paul. Same rules, same table, same labels (official / reported / estimated), same "near the line", "shared with another covered city" and "could not confirm" sections per city, and the same downtown drive ranges with their planner sources. Deliver this as Delivery 5, a new file with only these four city sections, its own delivery status and the continuation point; do not repeat earlier deliveries.

The app already has these rooms in the next four cities. Their towns are inside the city's own area; do not list these rooms or any other room in those towns as Further out. A room in another town is yours to judge by the metro rule you have been using; say which counties or regions you treated as outside.

Montreal (the app's Montreal covers the island, Laval, Longueuil and the South Shore; Ottawa–Gatineau and Toronto are covered cities). Rooms on file; town; largest setup on file:
- Olympic Stadium; Montreal; 56,000 (closed to events since December 2023)
- Molson Stadium; Montreal; 25,012
- Bell Centre; Montreal; 22,114
- Saputo Stadium; Montreal; 20,801
- IGA Stadium; Montreal; 11,991
- Place Bell; Laval; 10,172
- Claude-Robillard Sports Complex; Montreal; 6,375
- CEPSUM Stadium; Montreal; 5,000

Vancouver (the app's Vancouver covers Metro Vancouver, the regional district; Abbotsford and Victoria are outside; Seattle is a covered city across the border). Rooms on file; town; largest setup on file:
- BC Place; Vancouver; 54,500
- Rogers Arena; Vancouver; 19,700
- Pacific Coliseum; Vancouver; 17,000
- Thunderbird Arena; Vancouver (UBC); 7,000
- Rogers Field at Nat Bailey Stadium; Vancouver; 6,500
- Willoughby Stadium; Langley; 6,042
- Freedom Mobile Arch; Vancouver; 6,000
- Langley Events Centre; Langley; 5,276
- Swangard Stadium (Burnaby), Thunderbird Stadium (UBC), PNE Agrodome, Queen Elizabeth Theatre, Orpheum, War Memorial Gym, Vogue Theatre, Chan Shun Concert Hall, Commodore Ballroom (Vancouver), Langley Events Centre Gymnasium (Langley), Massey Theatre (New Westminster), Bell Performing Arts Centre (Surrey); all under 5,000

Detroit (the app's Detroit covers the six-county Detroit–Warren–Dearborn area plus Ann Arbor and Windsor, Ontario, as edge towns; Toronto, Cleveland and Columbus are covered cities). Rooms on file; town; largest setup on file:
- Michigan Stadium; Ann Arbor; 107,601
- Ford Field; Detroit; 65,000
- Comerica Park; Detroit; 41,083
- Little Caesars Arena; Detroit; 20,332
- Crisler Center; Ann Arbor; 12,707
- Calihan Hall; Detroit; 8,295
- Meadow Brook Amphitheatre; Rochester Hills; 7,700
- Yost Ice Arena; Ann Arbor; 6,637
- Windsor Family Credit Union Centre; Windsor, Ontario; 6,450
- Fox Theatre; Detroit; 5,048
- The Colosseum at Caesars Windsor; Windsor, Ontario; 5,000
- Pine Knob Music Theatre; Clarkston (Independence Township); no figure on file
- Michigan Lottery Amphitheatre; Sterling Heights; no figure on file
- Keyworth Stadium; Hamtramck; no figure on file
- The Aretha; Detroit; no figure on file
- Rooms under 5,000: Detroit Masonic Temple, Wayne State Fieldhouse, The Fillmore, Detroit Opera House, Sound Board, Fisher Theatre, Max M. Fisher Music Center, Harpos, Music Hall, Majestic Theatre, Saint Andrew's Hall, Titan Field (Detroit); Royal Oak Music Theatre (Royal Oak); Macomb Center for the Performing Arts (Clinton Township); Crofoot Ballroom (Pontiac)

Minneapolis–St. Paul (the app's Minneapolis covers the seven-county Met Council core). Rooms on file; town; largest setup on file:
- U.S. Bank Stadium; Minneapolis; 66,860
- Huntington Bank Stadium; Minneapolis; 50,805
- Target Field; Minneapolis; 39,504
- Grand Casino Arena; Saint Paul; 20,554
- Target Center; Minneapolis; 20,500
- Allianz Field; Saint Paul; 19,400
- Mystic Lake Amphitheater; Prior Lake (Shakopee Mdewakanton Sioux Community); 19,000
- Williams Arena; Minneapolis; 14,625
- Minnesota State Fair Grandstand; Falcon Heights; 13,000
- 3M Arena at Mariucci; Minneapolis; 10,257
- The Armory; Minneapolis; 8,400
- CHS Field; Saint Paul; 7,210
- Lee and Penny Anderson Arena; Saint Paul; 6,000
- Legendary Roy Wilkins Auditorium; Saint Paul; 5,800
- Maturi Pavilion; Minneapolis; 5,700
- Twin Cities Orthopedics Performance Center; Eagan; 5,500
- O'Shaughnessy Stadium; Saint Paul; 5,025
- NSC Stadium; Blaine; no figure on file
- Rooms under 5,000 in Minneapolis and Saint Paul (Ridder Arena, Northrop, Palace Theatre, Orpheum, State Theatre, Fillmore, First Avenue, Pantages, and the university's ballparks and soccer stadium)

Stop at a clean break and say where you stopped.
```

### Continuation 5 (Oct 23, 2026): from Denver

Status: delivery 5 is saved as `further-out-rooms-answer-5.md`. Next: Denver, San Diego, Tampa Bay, Columbus.

```
Continue the Further out research from Denver, in the brief's order: Denver, San Diego, Tampa Bay, Columbus. Deliver this as Delivery 6, a new file with only these four city sections, its own delivery status and the continuation point; do not repeat earlier deliveries. Keep everything Delivery 5 did: the city-hall drive rule (inside is a normal, non-event drive of 60 minutes or less from city hall; Further out is beyond that up to about 3 hours), the same table and labels (official / reported / estimated), a reproducible hall-to-room route for every row, the "Inside under the drive rule, not on file", "near the line", "shared with another covered city" and "could not confirm" sections per city, and region names as location only.

City halls (longitude-free summary; use these points): Denver, City and County Building, 1437 Bannock Street (39.7392, -104.9907); San Diego, City Administration Building, 202 C Street (32.7170, -117.1628); Tampa Bay, Tampa City Hall, 315 East Kennedy Boulevard (27.9477, -82.4572), one center only; Columbus, City Hall, 90 West Broad Street (39.9626, -83.0034).

Two things to add to each row, because the app now files rooms from them directly: a recommended capacity as one number with its label (as you have been doing), and a decimal coordinate pair for every room you list, inside or Further out (say what the point represents). Rooms without a usable point slow the import.

The app already has these rooms. Do not list them again; any other room is yours to check by its own hall drive.

Denver. Rooms on file; largest setup on file:
- Empower Field at Mile High; 85,000
- Coors Field; 46,891
- Ball Arena; 21,000
- Fiddler's Green Amphitheatre; 18,000
- Centennial Stadium; 12,000
- Red Rocks Amphitheatre; 9,525
- Levitt Pavilion Denver; 7,500
- Magness Arena at the Ritchie Center; 7,200
- Bellco Theatre; 5,000
- Fillmore Auditorium, Buell Theatre, Boettcher Concert Hall, Ellie Caulkins Opera House, Hamilton Gymnasium at the Ritchie Center, Peter Barton Stadium, University of Denver Soccer Stadium, Paramount Theatre, Ogden Theatre, Gothic Theatre, DSG Park, Denver Coliseum, Colorado Convention Center (Mile High Ballroom), Mission Ballroom; all under 5,000

San Diego. Rooms on file; largest setup on file:
- San Diego Stadium (closed, demolished); 70,561
- Del Mar Fairgrounds; 40,000
- Petco Park; 39,860
- Snapdragon Stadium; 35,000
- Embarcadero Marina Park North; 30,000
- North Island Credit Union Amphitheatre; 20,500
- Pechanga Arena; 16,100
- Waterfront Park; 15,000
- Viejas Arena; 12,414
- The Rady Shell at Jacobs Park; 10,000
- Frontwave Arena; 7,500
- San Diego Convention Center; 6,500
- Torero Stadium; 6,000
- Jenny Craig Pavilion; 5,100
- LionTree Arena; under 5,000
(Los Angeles is a covered city: a room within 60 minutes of Los Angeles City Hall belongs to Los Angeles, and Temecula and the Inland Empire rooms already on file are Los Angeles's.)

Tampa Bay. Rooms on file; largest setup on file:
- Raymond James Stadium; 69,218
- Tropicana Field; 25,025
- Benchmark International Arena; 21,500
- MIDFLORIDA Credit Union Amphitheatre; 20,000
- George M. Steinbrenner Field; 11,026
- Yuengling Center; 10,411
- Florida Strawberry Festival Grandstands; 9,200
- The BayCare Sound; 9,000
- BayCare Ballpark; 8,500
- TD Ballpark; 8,500
- Al Lang Stadium; 7,227
- Suncoast Credit Union Field; 5,248
- Corbett Stadium, Morsani Hall, Ruth Eckerd Hall, The Mahaffey Theater, Jannus Live, USF Softball Stadium, Hard Rock Event Center, Tampa Theatre, Ferguson Hall, The Corral, Tampa Bay Downs; all under 5,000

Columbus. Rooms on file; largest setup on file:
- Ohio Stadium; 102,780
- ScottsMiracle-Gro Field; 20,371
- Nationwide Arena; 20,000
- Value City Arena at the Jerome Schottenstein Center; 20,000
- Historic Crew Stadium; 19,968
- St. John Arena; 13,276
- Mid-Ohio Sports Car Course (Lexington; already Further out); 12,000
- WCOL Celeste Center; 10,200
- Huntington Park; 10,100
- Jesse Owens Memorial Stadium; 10,000
- Selby Stadium; 9,100
- Fortress Obetz; 6,500
- Battelle Grand; 5,411
- KEMBA Live!; 5,200
- Covelli Center, Ohio Theatre, Palace Theatre, Mershon Auditorium, KEMBA Live! Indoor Music Hall, Newport Music Hall, Buckeye Field, Branch Rickey Arena, Midland Theatre, Ohio State Ice Rink, Bill Davis Stadium, Ohio State Lacrosse Stadium; all under 5,000
(Detroit, Cleveland, Indianapolis and Pittsburgh are covered cities; Delivery 5 already lists the Toledo rooms, so do not repeat them.)

Stop at a clean break and say where you stopped.
```
