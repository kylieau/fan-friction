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

Status: delivery 5 is saved as `further-out-rooms-answer-5.md`. Delivery 6 is saved as `further-out-rooms-answer-6.md` (Oct 23).

```
Continue the Further out research from Denver, in the brief's order: Denver, San Diego, Tampa Bay, Columbus. Deliver this as Delivery 6, a new file with only these four city sections, its own delivery status and the continuation point; do not repeat earlier deliveries. Keep everything Delivery 5 did: the city-hall drive rule (inside is a normal, non-event drive of 60 minutes or less from city hall; Further out is beyond that up to about 3 hours), the same table and labels (official / reported / estimated), a reproducible hall-to-room route for every row, the "Inside under the drive rule, not on file", "near the line", "shared with another covered city" and "could not confirm" sections per city, and region names as location only.

City halls (use these points, latitude first): Denver, City and County Building, 1437 Bannock Street (39.7392, -104.9907); San Diego, City Administration Building, 202 C Street (32.7170, -117.1628); Tampa Bay, Tampa City Hall, 315 East Kennedy Boulevard (27.9477, -82.4572), one center only; Columbus, City Hall, 90 West Broad Street (39.9626, -83.0034).

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

### Continuation 6 (Oct 23, 2026): from Cleveland

Status: delivery 6 (Denver, San Diego, Tampa Bay, Columbus) is saved as `further-out-rooms-answer-6.md`. Next: Cleveland, Nashville, Austin, Sacramento.

```
Continue the Further out research from Cleveland, in the brief's order: Cleveland, Nashville, Austin, Sacramento. Deliver this as Delivery 7, a new file with only these four city sections, its own delivery status and the continuation point; do not repeat earlier deliveries. Keep everything Delivery 6 did: the city-hall drive rule (inside is a normal, non-event drive of 60 minutes or less from city hall; Further out is beyond that up to about 3 hours), the same table and labels (official / reported / estimated), one recommended capacity per row with its label, a decimal coordinate pair for every room, a reproducible hall-to-room route for every row, the hold markers you used (INNER-BOUNDARY, OUTER-BOUNDARY, CAPACITY, DATA, PROVISIONAL INSIDE), the "Inside under the drive rule, not on file", "near the line", "shared with another covered city" and "could not confirm" sections per city, and region names as location only.

City halls (use these points, latitude first): Cleveland, City Hall, 601 Lakeside Avenue (41.5051, -81.6937); Nashville, Metro Courthouse, 1 Public Square (36.1674, -86.7783); Austin, City Hall, 301 West 2nd Street (30.2648, -97.7472); Sacramento, City Hall, 915 I Street (38.5823, -121.4933).

The app already has these rooms. Do not list them again; any other room is yours to check by its own hall drive.

Cleveland. Rooms on file; largest setup on file:
- Huntington Bank Field; 67,431
- Progressive Field; 33,530
- Rocket Arena; 19,432
- Wolstein Center; 13,610
- Public Hall; 10,000
- Classic Auto Group Park; 7,273
- Blossom Music Center; 6,051
- Already Further out: Summit Motorsports Park (Norwalk), Tom Benson Hall of Fame Stadium and Canton Memorial Civic Center (Canton), Paul Brown Tiger Stadium (Massillon), Jack Miller Stadium (Ashland)
- Jacobs Pavilion at Nautica, KeyBank State Theatre, Woodling Gymnasium, Public Auditorium (Music Hall), Connor Palace, Agora Theatre, Severance Music Center (Mandel Concert Hall), Krenzler Field, House of Blues Cleveland, Ohio Theatre, ForeFront Field; all under 5,000
(Detroit, Columbus and Pittsburgh are covered cities; Delivery 5 already lists the Toledo rooms, and Delivery 6 the Canton, Massillon, Ashland and Findlay rooms. Akron, Kent and Youngstown are yours to check by their drives.)

Nashville. Rooms on file; largest setup on file:
- Nissan Stadium; 71,000
- FirstBank Stadium; 40,350
- GEODIS Park; 30,000
- Johnny "Red" Floyd Stadium; 27,303
- Nashville Superspeedway; 25,000
- Bridgestone Arena; 20,000
- Memorial Gymnasium; 14,316
- Murphy Center; 11,802
- Gentry Center; 10,500
- Nashville Municipal Auditorium; 9,700
- First Horizon Park; 8,500
- FirstBank Amphitheater; 7,500
- Ascend Amphitheater; 6,800
- Curb Event Center; 5,500
- Allen Arena; 5,028
- The Pinnacle, The Truth, Grand Ole Opry House, Hawkins Field, Reese Smith Jr. Field, Kean Hall, Andrew Jackson Hall, Ryman Auditorium, Laura Turner Concert Hall, War Memorial Auditorium, Marathon Music Works, Lipscomb Soccer Complex, Brooklyn Bowl Nashville, James K. Polk Theater, Nashville Fairgrounds Speedway; all under 5,000

Austin. Rooms on file; largest setup on file:
- Darrell K Royal-Texas Memorial Stadium; 100,119
- UFCU Stadium (San Marcos; also counts for San Antonio); 28,388
- Q2 Stadium; 20,738
- Mike A. Myers Stadium; 20,000
- Moody Center; 16,223
- Germania Insurance Amphitheater; 14,000
- Dell Diamond; 11,631
- Strahan Arena (San Marcos); 10,000
- H-E-B Center at Cedar Park; 8,700
- Travis County Exposition Center; 8,400
- UFCU Disch-Falk Field; 7,211
- House Park; 6,500
- Moody Amphitheater at Waterloo Park; 5,000
- Gregory Gym, Bass Concert Hall, ACL Live at the Moody Theater, Irvine-Rasmussen Ballpark, Michael & Susan Dell Hall, Stubb's Waller Creek Amphitheater, Emo's, Red and Charline McCombs Field, Bobcat Soccer Complex, Bobcat Softball Stadium; all under 5,000
(San Antonio, Houston and Dallas–Fort Worth are covered cities; Delivery 1 already lists the Waco, College Station and Bryan rooms, so do not repeat them.)

Sacramento. Rooms on file; largest setup on file:
- Charles C. Hughes Stadium; 25,000
- Hornet Stadium; 21,195
- Golden 1 Center; 19,000
- Toyota Amphitheatre; 18,500
- Heart Health Park; 14,000
- Sutter Health Park; 13,416
- Adventist Health Arena (Stockton); 11,300
- UC Davis Health Stadium; 10,743
- Alex G. Spanos Center (Stockton); 6,150
- University Credit Union Center; 6,003
- Stockton 99 Speedway; 6,000
- The Venue at Thunder Valley, All American Speedway, Memorial Auditorium, Dobbins Stadium, Hornet Pavilion, Hard Rock Live, SAFE Credit Union Performing Arts Center, Hornet Field, The Nest, Ace of Spades, Quarry Park Amphitheater, Aggie Soccer Field, Dan Russell Rodeo Arena; all under 5,000
(The Bay Area is a covered city, measured from the San Francisco, Oakland and San Jose city halls; its Napa, Sonoma and Marin rooms are on file. Stockton's Banner Island Ballpark is also on file for Sacramento.)

Stop at a clean break and say where you stopped.
```

### Continuation 7 (Oct 23, 2026): from Las Vegas

Status: delivery 7 (Cleveland, Nashville, Austin, Sacramento) is saved as `further-out-rooms-answer-7.md`. Next: Las Vegas, Kansas City, Indianapolis, New Orleans. Save the answer as `further-out-rooms-answer-8.md`.

```
Continue the Further out research from Las Vegas, in the brief's order: Las Vegas, Kansas City, Indianapolis, New Orleans. Deliver this as Delivery 8, a new file with only these four city sections, its own delivery status and the continuation point; do not repeat earlier deliveries. Keep everything Delivery 7 did: the city-hall drive rule (inside is a normal, non-event drive of 60 minutes or less from city hall; Further out is beyond that up to about 3 hours), the same table and labels (official / reported / estimated), one recommended capacity per row with its label, a decimal coordinate pair for every room, a reproducible hall-to-room route for every row, the hold markers you used (INNER-BOUNDARY, OUTER-BOUNDARY, CAPACITY, DATA, PROVISIONAL INSIDE), the "Inside under the drive rule, not on file", "near the line", "shared with another covered city" and "could not confirm" sections per city, and region names as location only. One request: before calling a room new, check the on-file list below under other spellings and former names (Delivery 7 listed a stadium already on file under a hyphenated spelling).

City halls (use these points, latitude first): Las Vegas, City Hall, 495 South Main Street (36.1673, -115.1485); Kansas City, City Hall, 414 East 12th Street (39.1006, -94.5779); Indianapolis, City-County Building, 200 East Washington Street (39.7680, -86.1535); New Orleans, City Hall, 1300 Perdido Street (29.9521, -90.0773).

The app already has these rooms. Do not list them again; any other room is yours to check by its own hall drive.

Las Vegas. Rooms on file; largest setup on file:
- Las Vegas Motor Speedway; 80,000
- Allegiant Stadium; 65,000
- T-Mobile Arena; 18,000
- Thomas & Mack Center; 18,000
- Sphere; 17,600
- MGM Grand Garden Arena; 16,800
- Michelob ULTRA Arena; 12,000
- Downtown Las Vegas Events Center; 11,000
- Cashman Field; 10,000
- Las Vegas Ballpark; 10,000
- Orleans Arena; 9,500
- LVMS Dirt Track; 8,200
- PH Live; 7,000
- Lee's Family Forum; 5,567
- LVMS Bullring; 5,400
- Resorts World Theatre; 5,000
- Dolby Live, Amphitheater at Craig Ranch Regional Park; no capacity on file
- South Point Arena, BleauLive Theater, The Pavilion, Peter Johann Memorial Field; all under 5,000
(Los Angeles is a covered city; its Coachella Valley rooms are on file as Further out: Indian Wells Tennis Garden's Stadiums 1 and 2, Acrisure Arena, McCallum Theatre, Fantasy Springs, Empire Polo Club, The Show. Primm, Laughlin, Mesquite, St. George and Lake Havasu are yours to check by their drives.)

Kansas City. Rooms on file; largest setup on file:
- Arrowhead Stadium; 76,416
- Kansas Speedway; 48,000
- Kauffman Stadium; 37,903
- Sporting Park; 25,000
- T-Mobile Center; 19,252
- Azura Amphitheater; 18,000
- CPKC Stadium; 11,500
- Starlight Theatre; 7,739
- Municipal Auditorium Arena; 7,316
- Legends Field; 6,537
- Cable Dahmer Arena; 5,800
- Hale Arena; 5,000
- Arvest Bank Theatre at The Midland; no capacity on file
- Hy-Vee Arena, The Theatre in the Park, Grinders, Uptown Theater, Kansas City Music Hall, Muriel Kauffman Theatre, Helzberg Hall, Swinney Recreation Center, Cohen Community Stage, The Truman, Folly Theater; all under 5,000
(St. Louis is a covered city. Lawrence, Columbia, Manhattan, Topeka, St. Joseph and Warrensburg are yours to check by their drives.)

Indianapolis. Rooms on file; largest setup on file:
- Lucas Oil Stadium; 70,000
- Lucas Oil Raceway at Indianapolis; 30,000
- Ruoff Music Center; 24,790
- Gainbridge Fieldhouse; 18,274
- Victory Field; 14,230
- Carroll Stadium; 12,111
- Hinkle Fieldhouse; 9,100
- Fishers Event Center; 7,500
- Everwise Amphitheater at White River State Park; 6,000
- Sellick Bowl; 5,647
- Key Stadium; 5,500
- Already Further out: TQL Stadium (Cincinnati); Fred C. Yager Stadium and Millett Hall (Oxford)
- Indianapolis Motor Speedway, Indiana Farmers Coliseum; no capacity on file
- James T. Morris Arena, Nicoson Hall, The Arena at Innovation Mile, Old National Centre, Clowes Memorial Hall, Egyptian Room at Old National Centre, Hilbert Circle Theatre, The Palladium, IU Indy Gymnasium; all under 5,000
(Chicago, Columbus, Detroit, Nashville and St. Louis are covered cities. Already on file as Further out for them: the Cincinnati rooms (Paycor Stadium, Great American Ball Park, Nippert Stadium, Heritage Bank Center, Fifth Third Arena, Cintas Center, Riverbend Music Center, Truist Arena, MegaCorp Pavilion, Lindner Family Tennis Center), the Dayton rooms (UD Arena, Welcome Stadium, Day Air Ballpark, Nutter Center), Eldora Speedway, Hobart Arena, Donnell Stadium (Findlay), Notre Dame Stadium, Compton Family Ice Arena, Four Winds Field, Valparaiso's two, La Porte's grandstand, the Stardust Event Center (Michigan City), Evansville's Ford Center and Bosse Field, and the Owensboro Sportscenter. Bloomington, West Lafayette, Muncie, Terre Haute, Fort Wayne, Louisville and Lexington are yours to check by their drives.)

New Orleans. Rooms on file; largest setup on file:
- Caesars Superdome; 83,000
- Benson Field at Yulman Stadium; 30,000
- Tad Gormley Stadium; 26,500
- Smoothie King Center; 17,791
- Fair Grounds Race Course; 10,000
- Lakefront Arena; 8,785
- Greer Field at Turchin Stadium; 5,000
- Orpheum Theater; no capacity on file
- Pan American Stadium, Fogelman Arena in Devlin Fieldhouse, New Orleans Theater, Pontchartrain Center, Maestri Field at Privateer Park, Saenger Theatre, Alario Sr. Event Center, Mahalia Jackson Theater for the Performing Arts, The Fillmore New Orleans, Human Performance Center, Joy Theater, Civic Theatre, House of Blues New Orleans; all under 5,000
(Houston is a covered city. Baton Rouge, Hammond, Thibodaux, Lafayette, Biloxi, Gulfport, Hattiesburg and Mobile are yours to check by their drives.)

Stop at a clean break and say where you stopped.
```

### Continuation 8 (Oct 23, 2026): from Salt Lake City

Status: delivery 8 (Las Vegas, Kansas City, Indianapolis, New Orleans) is saved as `further-out-rooms-answer-8.md`. Next: Salt Lake City, Ottawa–Gatineau, Edmonton, San Antonio. Save the answer as `further-out-rooms-answer-9.md`.

```
Continue the Further out research from Salt Lake City, in the brief's order: Salt Lake City, Ottawa–Gatineau, Edmonton, San Antonio. Deliver this as Delivery 9, a new file with only these four city sections, its own delivery status and the continuation point; do not repeat earlier deliveries. Keep everything Delivery 8 did: the city-hall drive rule (inside is a normal, non-event drive of 60 minutes or less from city hall; Further out is beyond that up to about 3 hours), the same table and labels (official / reported / estimated), one recommended capacity per row with its label, a decimal coordinate pair for every room, a reproducible hall-to-room route for every row, the hold markers you used (INNER-BOUNDARY, OUTER-BOUNDARY, CAPACITY, DATA, PROVISIONAL INSIDE), the alias check against the on-file list before calling a room new, the "Inside under the drive rule, not on file", "near the line", "shared with another covered city" and "could not confirm" sections per city, and region names as location only. For the two Canadian cities, give capacities as published (no unit change needed) and drives in minutes as before; a crossing to the United States is not expected for these two.

City halls (use these points, latitude first): Salt Lake City, City and County Building, 451 South State Street (40.7595, -111.8868); Ottawa–Gatineau has two halls, and a room is inside when it is within the hour of either: Ottawa City Hall, 110 Laurier Avenue West (45.4208, -75.6903), and Gatineau, Maison du citoyen, 25 rue Laurier (45.4280, -75.7120); Edmonton, City Hall, 1 Sir Winston Churchill Square (53.5455, -113.4902); San Antonio, City Hall, 100 Military Plaza (29.4246, -98.4951).

The app already has these rooms. Do not list them again; any other room is yours to check by its own hall drive.

Salt Lake City. Rooms on file; largest setup on file:
- Rice-Eccles Stadium; 51,444
- America First Field; 25,000
- Conference Center; 21,000
- Delta Center; 17,867
- Jon M. Huntsman Center; 15,000
- Smith's Ballpark; 14,511
- Maverik Center; 12,000
- Days of '47 Arena; 10,000
- Utah First Credit Union Amphitheatre; 7,000
- The Ballpark at America First Square; 6,500
- Salt Lake Tabernacle, Abravanel Hall, George S. and Dolores Doré Eccles Theater, Kingsbury Hall, Capitol Theatre, Charlie Monfort Field at America First Ballpark; all under 5,000
(No other covered city is within reach. Provo, Orem, Ogden, Logan, Park City, Heber and Tooele are yours to check by their drives.)

Ottawa–Gatineau. Rooms on file; largest setup on file:
- TD Place Stadium; 24,000
- Canadian Tire Centre; 19,153
- RCGT Park; 10,278
- The Arena at TD Place; 8,585
- Already Further out: Cornwall Civic Complex (Cornwall)
- Slush Puppie Centre, TAAG Park, NAC Southam Hall, Hard Rock LIVE Ottawa, Ravens' Nest, Théâtre de l'Hôtel-Casino Lac-Leamy; all under 5,000
(Montreal and Toronto are covered cities. Already on file for them: Montreal's own rooms, and as Further out the Trois-Rivières rooms (FestiVoix, Parc portuaire, Amphithéâtre Cogeco), Saint-Tite's Grandes Estrades, Autodrome Drummond, Autodrome Granby and Toronto's Peterborough Memorial Centre. Kingston, Brockville, Pembroke, Smiths Falls, Mont-Tremblant and the Montreal-side rooms past the Ottawa River are yours to check by their drives.)

Edmonton. Rooms on file; largest setup on file:
- Rogers Place; 20,030
- RE/MAX Field; 9,200
- RAD Torque Raceway; 8,500
- Clarke Stadium; 5,000
- The Brick Field at Commonwealth Stadium, Edmonton Convention Centre, Century Mile Racetrack and Casino, The Venue; no capacity on file
- Flair Airlines Hangar, Foote Field, Clare Drake Arena, Northern Alberta Jubilee Auditorium, Saville Community Sports Centre, Servus Place, Silent Ice Center, Winspear Centre, Randy Rosen Rink, Midway Music Hall, Thompson Family Arena at Heavy Metal Place, Edmonton Downtown Community Arena; all under 5,000
(No other covered city is within reach; Calgary is not a covered city, so its rooms count as Further out for Edmonton if they fall within about three hours. Red Deer, Camrose, Lloydminster, Calgary and the Calgary-area rooms are yours to check by their drives.)

San Antonio. Rooms on file; largest setup on file:
- Alamodome; 65,427
- Frost Bank Center; 19,000
- Toyota Field; 13,000
- Freeman Coliseum; 11,700
- Wolff Stadium; 9,200
- Benson Stadium; 6,000
- Cowboys Dancehall; 5,772
- Whitewater Amphitheater; 5,600
- R&J Music Pavilion; 5,000
- Real Life Amphitheater, Retama Park; no capacity on file
- Sunken Garden Theater, The Convo, Floore's Country Store, The Espee, Boeing Center at Tech Port, Laurie Auditorium, Lila Cockrell Theatre, Majestic Theatre, Tobin Center, Alice P. McDermott Convocation Center, Aztec Theatre; all under 5,000
(Austin, Houston and Dallas–Fort Worth are covered cities. Already on file for them: Austin's own rooms, including San Marcos's UFCU Stadium (which also counts for San Antonio) and Strahan Arena; and as Further out the Waco rooms (McLane Stadium, Ferrell Center, Waco ISD Stadium, Extraco Coliseum, Foster Pavilion, Baylor Ballpark), the College Station and Bryan rooms (Kyle Field, Reed Arena, Olsen Field, Tiger Stadium, Merrill Green Stadium), Brenham's Cub Stadium, and the Bell County and Hill Country rooms from Delivery 7 (Wildcat Stadium, Bulldawg Stadium, Crusader Stadium, Cadence Bank Center, Leo Buckley Stadium, Mustang Stadium). New Braunfels, Seguin, Kerrville, Fredericksburg, Victoria, Corpus Christi, Laredo and Del Rio are yours to check by their drives.)

Stop at a clean break and say where you stopped.
```

### Continuation 9 (Oct 25, 2026): from Portland

Status: delivery 9 (Salt Lake City, Ottawa–Gatineau, Edmonton, San Antonio) is saved as `further-out-rooms-answer-9.md` and folded. Next: Portland, Raleigh–Durham, St. Louis, Pittsburgh; after them, Milwaukee and the Los Angeles extras. Save the answer as `further-out-rooms-answer-10.md`.

```
Continue the Further out research from Portland, in the brief's order: Portland, Raleigh–Durham, St. Louis, Pittsburgh. Deliver this as Delivery 10, a new file with only these four city sections, its own delivery status and the continuation point; do not repeat earlier deliveries. Keep everything Delivery 9 did: the city-hall drive rule (inside is a normal, non-event drive of 60 minutes or less from city hall; Further out is beyond that up to about 3 hours), the same table and labels (official / reported / estimated), one recommended capacity per row with its label, a decimal coordinate pair for every room, a reproducible hall-to-room route for every row, the hold markers you used (INNER-BOUNDARY, OUTER-BOUNDARY, CAPACITY, DATA, PROVISIONAL INSIDE), the alias check against the on-file list before calling a room new, the separate "complete outer-boundary records" table for rooms past the three-hour screen, the "Inside under the drive rule, not on file", "near the line", "shared with another covered city" and "could not confirm" sections per city, and region and state names as location only. A room within another covered city's hour belongs to that city, not to these four.

City halls (use these points, latitude first): Portland, City Hall, 1221 SW 4th Avenue (45.5150, -122.6791); Raleigh–Durham has two halls, and a room is inside when it is within the hour of either: Raleigh Municipal Building, 222 West Hargett Street (35.7787, -78.6430), and Durham City Hall, 101 City Hall Plaza (35.9962, -78.8988); St. Louis, City Hall, 1200 Market Street (38.6268, -90.1994); Pittsburgh, City-County Building, 414 Grant Street (40.4381, -79.9969).

The app already has these rooms. Do not list them again; any other room is yours to check by its own hall drive.

Portland. Rooms on file; largest setup on file:
- Providence Park; 25,218
- Moda Center; 20,500
- Veterans Memorial Coliseum; 8,600
- Cascades Amphitheater; 7,810
- Hillsboro Stadium; 7,600
- McMenamins Historic Edgefield Manor; 7,000
- Hillsboro Hops Ballpark; no capacity on file
- Hillsboro Ballpark, Merlo Field at the Clive Charles Soccer Complex, Earle A. & Virginia H. Chiles Center, Viking Pavilion, Keller Auditorium, Arlene Schnitzer Hall, Roseland Theatre, Crystal Ballroom, Concerts in the Grove; all under 5,000
(Seattle is a covered city. Its own rooms, the Tacoma rooms among them (Tacoma Dome, Cheney Stadium), belong to Seattle; already Further out for Seattle: Grays Harbor Raceway (Elma), the Kitsap County Fairgrounds rooms (Bremerton), the Ellensburg rooms and The Gorge (George). Salem, Eugene, Corvallis, Bend, Hood River, the Oregon coast, Longview–Kelso, Centralia–Chehalis, Yakima and the Tri-Cities are yours to check by their drives.)

Raleigh–Durham. Rooms on file; largest setup on file:
- Kenan Stadium; 62,980
- Carter-Finley Stadium; 56,919
- Wallace Wade Stadium; 40,004
- Dean E. Smith Center; 21,750
- Coastal Credit Union Music Park at Walnut Creek; 20,601
- Lenovo Center; 20,450
- O'Kelly-Riddick Stadium; 10,000
- Durham Bulls Athletic Park; 10,000
- First Horizon Stadium; 10,000
- Cameron Indoor Stadium; 9,314
- Durham County Memorial Stadium; 8,500
- J.S. Dorton Arena; 7,000
- Koka Booth Amphitheatre; 7,000
- Carmichael Arena; 6,822
- Red Hat Amphitheater; 6,000 (its replacement, one block south and opening in 2027, is on file too, with no capacity yet)
- Reynolds Coliseum; 5,500
- Dorrance Field, Nomaco Park; no capacity on file
- Freeman Field at Koskinen Stadium, McDougald-McLendon Arena, Durham Performing Arts Center, Raleigh Memorial Auditorium, Meymandi Concert Hall, North Main Athletic Complex Stadium, Dail Soccer Field; all under 5,000
(Washington DC is a covered city. Already Further out for it: the Richmond rooms (Richmond Raceway and its Virginia Credit Union LIVE!, CarMax Park, E. Claiborne Robins Stadium, Stuart C. Siegel Center, Allianz Amphitheater at Riverfront, City Stadium, Innsbrook Pavilion in Glen Allen) and Fredericksburg's Virginia Credit Union Stadium. Charlotte is not a covered city, so its rooms count as Further out for Raleigh–Durham if they fall within about three hours. Greensboro, Winston-Salem, Fayetteville, Greenville, Wilmington, Rocky Mount, Charlotte and southern Virginia are yours to check by their drives.)

St. Louis. Rooms on file; largest setup on file:
- The Dome at America's Center; 67,277
- Busch Stadium; 43,769
- Energizer Park; 22,423
- Hollywood Casino Amphitheatre; 20,000
- Enterprise Center; 18,096
- Family Arena; 11,522
- The Muny; 10,700
- Chaifetz Arena; 10,600
- Hermann Stadium; 6,050
- Harlen C. Hunter Stadium; 6,000
- Arsenal BG Ballpark; 6,000
- World Wide Technology Raceway, St. Louis Music Park; no capacity on file
- CarShield Field, Fabulous Fox Theatre, First Community Arena at the Vadalabene Center, Ralph Korte Stadium, Stifel Theatre, Hyland Performance Arena, The Factory, America's Center Ferrara Theatre, Centene Community Ice Center; all under 5,000
(Kansas City, Indianapolis and Nashville are covered cities. Already Further out for them: Kansas City's Columbia rooms (Faurot Field, Mizzou Arena, Hearnes Center) and Sedalia's (Missouri State Fair Grandstand, Mathewson Exhibition Center); Indianapolis's Terre Haute rooms (Indiana State Memorial Stadium, Hulman Center); Nashville's Evansville rooms (Ford Center, Bosse Field), Murray's Roy Stewart Stadium and the Owensboro Sportscenter. Jefferson City, Rolla, Cape Girardeau, Carbondale, Springfield (Illinois), Champaign–Urbana, Bloomington–Normal, Quincy and the Lake of the Ozarks are yours to check by their drives.)

Pittsburgh. Rooms on file; largest setup on file:
- Acrisure Stadium; 68,400
- PNC Park; 38,747
- The Pavilion at Star Lake; 23,000
- PPG Paints Arena; 19,000
- Petersen Events Center; 12,508
- Hepner–Bailey Field at Adamson Stadium; 6,500
- PennWest California Convocation Center; 6,000
- Stage AE Outdoor Amphitheater; 5,500
- F.N.B. Stadium; 5,000
- EQT Park; 5,000
- Already Further out: N. Kerr Thompson Stadium and Morrow Field House (Slippery Rock), Fayette County Fairgrounds grandstand arena (Dunbar), Scottish Rite Cathedral (New Castle), Stambaugh Stadium and Covelli Centre (Youngstown), Canfield Fair Grandstand (Canfield Twp.), Al Jacks Field at Memorial Stadium (Clarion)
- Lernerville Speedway, Reeves Field, Westmoreland Fairgrounds grandstand arena; no capacity on file
- Citizens Live at The Wylie, Fitzgerald Field House, UPMC Events Center, UPMC Cooper Fieldhouse, Joe Walton Stadium, Benedum Center, Heinz Hall, Stage AE Indoor Music Hall, Rooney Field, Carnegie Music Hall, Roxian Theatre, Byham Theater, Clearview Arena, Victory Heights Arena, Ambrose Urbanic Field; all under 5,000
(Cleveland, Columbus, Washington DC, Philadelphia and Toronto are covered cities. Cleveland's own rooms, the Akron rooms among them (InfoCision Stadium, James A. Rhodes Arena, Canal Park), Blossom Music Center and Kent's M.A.C. Center, belong to Cleveland. Already Further out for them: Cleveland's Canton rooms (Tom Benson Hall of Fame Stadium, Canton Memorial Civic Center), Massillon's Paul Brown Tiger Stadium, Kent's Dix Stadium, Alliance's Kehres Stadium, Niles's 717 Credit Union Field at Eastwood, Ashland's Jack Miller Stadium, Summit Motorsports Park, Edinboro's Sox Harrison Stadium and the Erie rooms (Erie Veterans Memorial Stadium, Erie Insurance Arena, UPMC Park); Columbus's Athens rooms (Peden Stadium, Ohio University Convocation Center), Mid-Ohio and Mansfield's Arlin Field; Washington DC's Hagerstown Speedway, Frederick's Nymeo Field and York's WellSpan Park; Philadelphia's Hershey and Harrisburg rooms (Hersheypark Stadium, GIANT Center, New Holland Arena, FNB Field); Toronto's Buffalo rooms (Highmark Stadium, KeyBank Center, Sahlen Field). Morgantown, State College, Altoona, Johnstown, Wheeling, Indiana (Pennsylvania), Latrobe, Washington (Pennsylvania) and Steubenville are yours to check by their drives.)

Stop at a clean break and say where you stopped.
```

### Continuation 10 (Oct 26, 2026): Milwaukee, then the Los Angeles extras

Status: delivery 10 (Portland, Raleigh–Durham, St. Louis, Pittsburgh) is saved as `further-out-rooms-answer-10.md` and folded. Next: Milwaukee, then the Los Angeles extras, the last of the brief. Save the answer as `further-out-rooms-answer-11.md`.

```
Continue the Further out research with Milwaukee, then Los Angeles (the brief's last two). Deliver this as Delivery 11, a new file with only these two city sections, its own delivery status and the continuation point (or say the brief is finished); do not repeat earlier deliveries. Keep everything Delivery 10 did: the city-hall drive rule (inside is a normal, non-event drive of 60 minutes or less from city hall; Further out is beyond that up to about 3 hours), the same table and labels (official / reported / estimated), one recommended capacity per row with its label, a decimal coordinate pair for every room, a reproducible hall-to-room route for every row, the hold markers you used (INNER-BOUNDARY, OUTER-BOUNDARY, CAPACITY, DATA, PROVISIONAL INSIDE), the alias check against the on-file list before calling a room new, the separate "complete outer-boundary records" table for rooms past the three-hour screen, the "Inside under the drive rule, not on file", "near the line", "shared with another covered city" and "could not confirm" sections per city, and region and state names as location only. A room within another covered city's hour belongs to that city, not to these two.

City halls (use these points, latitude first): Milwaukee, City Hall, 200 East Wells Street (43.0417, -87.9098); Los Angeles, City Hall, 200 North Spring Street (34.0537, -118.2429).

The app already has these rooms. Do not list them again; any other room is yours to check by its own hall drive.

Milwaukee. Rooms on file; largest setup on file:
- American Family Field; 41,900
- Alpine Valley Music Theatre; 35,300
- Milwaukee Mile; 34,855
- American Family Insurance Amphitheater; 23,000
- Fiserv Forum; 18,000
- UW-Milwaukee Panther Arena; 10,705
- Slinger Super Speedway; 10,000
- BMO Pavilion; 10,000
- Historic Horlick Athletic Field; 5,000
- Already Further out: Country Thunder Wisconsin grounds at Shadow Hill Ranch (Twin Lakes)
- Hart Park Stadium, Landmark Credit Union Live, Miller High Life Theatre, Eagles Ballroom, Franklin Field, Al McGuire Center, DockHounds Ballpark, Klotsche Center, Kapco Park, Southeast Sales Powersports Stadium, Time of Grace Center, Riverside Theater, Uihlein Hall, Wilson Ice Arena, Schneider Stadium, Engelmann Stadium, Pettit National Ice Center, R. John Buuck Field House, The Rave, Cooley Auditorium, Valley Fields, Bradley Symphony Center, Van Male Field House, Raabe Stadium, Ozaukee Ice Center, Pabst Theater, Shattuck Auditorium, Varsity Theatre, Jerry Huennekens Gymnasium, Whitnall High School Main Gym, Catholic Memorial Main Gym, Oak Creek Performing Arts & Education Center, The Rave II, Turner Hall Ballroom; all under 5,000
(Chicago is a covered city. Its own rooms belong to Chicago; already Further out for it: Rockford's BMO Center, the McHenry County Fairgrounds grandstand (Woodstock), the DeKalb rooms (Huskie Stadium, NIU Convocation Center), Chicagoland Speedway, Grundy County Speedway and the northwest Indiana and South Bend rooms. Madison, Green Bay, Appleton, Oshkosh, Fond du Lac, Sheboygan, Elkhart Lake, Janesville, Beloit, Kenosha, Racine's outskirts and Wisconsin Dells are yours to check by their drives.)

Los Angeles. Only rooms not on file; festival grounds especially (the brief's original note). Rooms on file; largest setup on file:
- LA Memorial Coliseum; 93,607
- Rose Bowl; 89,702
- SoFi Stadium; 70,240
- Dodger Stadium; 56,000
- Angel Stadium; 45,517
- In-N-Out Burger Pomona Dragstrip; 40,000
- Dignity Health Sports Park; 30,510
- Santa Anita Park; 26,000
- BMO Stadium; 24,000
- Weingart Stadium; 22,355
- Crypto.com Arena; 18,910
- Honda Center; 18,900
- Intuit Dome; 18,000
- Kia Forum; 17,505
- Hollywood Bowl; 17,500
- Irvine Meadows Amphitheatre; 16,085 (closed)
- Fairplex; 15,000
- Long Beach Arena; 14,500
- Pauley Pavilion; 13,800
- FivePoint Amphitheatre; 12,000
- Drake Stadium; 11,700
- Veterans Memorial Stadium; 11,600
- Toyota Arena; 11,089
- Galen Center; 10,258
- Titan Stadium; 10,000
- Great Park Live; 10,000
- Dignity Health Sports Park Tennis Stadium; 8,000
- Pacific Amphitheatre; 7,800
- Anaheim Convention Center; 7,500
- Peacock Theater; 7,100
- Irwindale Speedway; 6,500
- Shrine Auditorium; 6,300
- Gibson Amphitheatre; 6,251 (closed)
- Los Alamitos Race Course; 6,000
- YouTube Theater; 6,000
- Morongo Field; 6,000
- Greek Theatre; 5,900
- Los Angeles Tennis Center; 5,800
- Championship Soccer Stadium; 5,500
- Bren Events Center; 5,430
- Shrine Expo Hall; 5,000
- LBS Financial Credit Union Pyramid; 5,000
- Already Further out: The Hangar (Lancaster); Stadium 1 and Stadium 2, Indian Wells Tennis Garden (Indian Wells); Acrisure Arena and McCallum Theatre (Palm Desert); San Manuel Stadium (San Bernardino); Dale E. and Sarah Ann Fowler Events Center (Riverside); Fantasy Springs Resort Casino (Indio); Empire Polo Club (Indio); The Show (Rancho Mirage); Oxnard Performing Arts Center (Oxnard); Libbey Bowl (Ojai); Majestic Ventura Theater (Ventura)
- Hollywood Palladium, The Bellwether, House of Blues Anaheim, The Belasco, The Wiltern, Zipper Concert Hall, Kellogg Arena, Starlight Bowl, Gersten Pavilion, Titan Gym, Felix Event Center, University Gym, Goodwin Field, Cicerone Field at Anteater Ballpark, Dolby Theatre, Dorothy Chandler Pavilion, Firestone Fieldhouse, Terrace Theater, Pasadena Civic Auditorium, Segerstrom Hall, Torodome, Pantages Theatre, Mabel Shaw Bridges Music Auditorium, The Novo by Microsoft, Premier America Credit Union Arena, Walt Disney Concert Hall, Segerstrom Concert Hall, Eddy D. Field Stadium, Tari Frahm Rokus Field, Fox Theater Pomona, Orpheum Theatre, Cerritos Center for the Performing Arts, Saban Theatre, OC Fair Action Sports Arena, Royce Hall, Fred Kavli Theatre, The Soraya, The Grove of Anaheim, The United Theater on Broadway, Warner Grand Theatre, Gilbert Arena, Mayan Theatre, Redondo Beach Performing Arts Center, Haugh Performing Arts Center, Alex Theatre, San Gabriel Mission Playhouse, Wilshire Ebell Theatre, La Mirada Theatre for the Performing Arts, Ambassador Auditorium, Fonda Theatre, The Vermont, The Ford, Exchange LA, OC Fair Hangar, Avalon, Regent Theater, Palace Theatre, Carpenter Performing Arts Center, Musco Center for the Arts, Soka Performing Arts Center, George C. Page Stadium, Kellogg Stadium, The Observatory Orange County, Yost Theatre, The Mountain at Mullin Park, William Rolland Stadium, Anteater Stadium, Sullivan Field, George Allen Field; all under 5,000
(San Diego and Las Vegas are covered cities. San Diego's own rooms (Del Mar Fairgrounds, Frontwave Arena in Oceanside among them) belong to San Diego; Las Vegas's Further out rooms are Laughlin Event Center and St. George's Greater Zion Stadium. Festival and fair grounds (the Coachella Valley beyond Empire Polo Club, Glen Helen, the Inland Empire fairgrounds, Lake Perris, Antelope Valley, Ventura County Fairgrounds, Santa Barbara and Bakersfield), racetracks, college and school stadiums and arenas, and rooms in Temecula, Riverside, San Bernardino, Ontario, Lancaster–Palmdale, Santa Clarita, Ventura, Santa Barbara and Bakersfield are yours to check by their drives. Toyota Arena, San Manuel Stadium, Morongo Field and the Fowler Events Center are on file already.)

Stop at a clean break and say where you stopped.
```
