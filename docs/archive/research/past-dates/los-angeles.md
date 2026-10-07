# Los Angeles, 15 past dates in 2026: research answer

Run Oct 6, 2026 on `docs/archive/research/past-nights-research-prompt.md` (LA County + Orange County). Kept as returned (sources condensed). Public event listings only. The gap follow-up and Claude's checks are in `docs/archive/research/past-dates/gap-followup.md`; Claude's MLB start times are at the bottom.

Model's summary: 49 events and 1 crowd event across the 15 dates. Team sports complete; concerts solid at the Inglewood and Anaheim venues, with known gaps elsewhere. Busiest nights Apr 4 and Apr 26.

### 1. Venues
```csv
city,venue,former_names,area,lat,lng,capacity_by_setup,roof,access_note,how_people_arrive,source_url
Los Angeles,Dodger Stadium,,Elysian Park (LA),34.0739,-118.2400,"baseball ~56,000 (2026 high 54,081 on Jul 2)",open,hilltop site with few road gates; also the LA Marathon start,car; Dodger Stadium Express bus from Union Station,https://www.baseball-reference.com/teams/LAD/2026-schedule-scores.shtml
Los Angeles,Angel Stadium,Angel Stadium of Anaheim,Anaheim (OC),33.8003,-117.8827,"baseball ~45,000 (2026 high 44,931)",open,shares the Katella/57 corridor with Honda Center,car; ARTIC rail station nearby,https://www.baseball-reference.com/teams/LAA/2026-schedule-scores.shtml
Los Angeles,Honda Center,Arrowhead Pond,Anaheim (OC),33.8078,-117.8765,"hockey 17,174 (sellout figure)",indoor,about 0.5 mi from Angel Stadium,car; ARTIC rail station nearby,https://www.hockey-reference.com/teams/ANA/2026_games.html
Los Angeles,Crypto.com Arena,Staples Center,Downtown LA,34.0430,-118.2673,"basketball 18,997; hockey 18,145 (sellout figures)",indoor,next to Peacock Theater and the LA Convention Center,Metro A/E Pico station; car,https://www.basketball-reference.com/teams/LAL/2026_games.html
Los Angeles,Intuit Dome,,Inglewood,33.9447,-118.3417,"basketball 17,927 (sellout figure)",indoor,across Century Blvd from the Hollywood Park/SoFi campus,car; shuttles from Metro K Line,https://www.basketball-reference.com/teams/LAC/2026_games.html
Los Angeles,SoFi Stadium,Los Angeles Stadium (FIFA name),Inglewood,33.9535,-118.3390,"NFL/soccer ~70,240",translucent canopy roof with open sides,shares the Hollywood Park campus with YouTube Theater; Kia Forum and Intuit Dome nearby,car/rideshare; shuttles from Metro K Line,https://www.thestatsapi.com/world-cup/matches/united-states-vs-paraguay-2026-06-12
Los Angeles,Kia Forum,The Forum,Inglewood,33.9583,-118.3419,"concerts ~17,500 (not re-verified)",indoor,about 0.5 mi north of SoFi Stadium,car/rideshare,https://www.jambase.com/show/bruce-springsteen-kia-forum-20260409
Los Angeles,BMO Stadium,Banc of California Stadium,Exposition Park (LA),34.0129,-118.2848,"soccer 22,000",open (canopy over seats),shares Exposition Park with the Coliseum,Metro E Line Expo Park/USC; car,https://www.ticketmaster.ca/los-angeles-football-club-billets/artist/2451856
Los Angeles,LA Memorial Coliseum,,Exposition Park (LA),34.0141,-118.2879,"~77,500 (not re-verified)",open,next to BMO Stadium,Metro E Line Expo Park/USC; car,https://www.lacoliseum.com/?p=14522
Los Angeles,Dignity Health Sports Park,StubHub Center; Home Depot Center,Carson,33.8644,-118.2611,"soccer ~27,000",open,on the CSU Dominguez Hills campus,car,https://www.ticketmaster.ca/la-galaxy-tickets/artist/805960?page=1
Los Angeles,Pauley Pavilion,,Westwood (UCLA),34.0704,-118.4468,"basketball ~13,800 (not re-verified)",indoor,on the UCLA campus,car; bus,https://uclabruins.com/sports/mens-basketball/schedule/2025-26
Los Angeles,Santa Anita Park,,Arcadia (LA County),34.1398,-118.0439,"large grandstand; figure not verified",open,racetrack,car; Metro A Line Arcadia station,https://www.americasbestracing.net/races/2026-santa-anita-derby
```

### 2. Events
```csv
city,date,weekday,start_local,start_note,kind,title,home_team,away_team,performer,league_or_genre,level,stakes,venue,booking,run,facts,invited,expected_draw,status,source_url,result,attendance
Los Angeles,2026-02-25,Wed,19:00,10:00 PM ET listed,game,Golden Knights at Kings,Los Angeles Kings,Vegas Golden Knights,,NHL,pro,,Crypto.com Arena,arena,,storyline: first Kings game since Feb 5 (league break),,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,VGK 6-4,18145 announced
Los Angeles,2026-02-25,Wed,19:30,10:30 PM ET listed,game,Oilers at Ducks,Anaheim Ducks,Edmonton Oilers,,NHL,pro,,Honda Center,arena,,storyline: first Ducks game since Feb 3 (league break),,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,ANA 6-5,16214 announced
Los Angeles,2026-02-25,Wed,20:30,club preview time (earlier announcement said 8 PM),game,Sporting San Miguelito at LA Galaxy,LA Galaxy,Sporting San Miguelito,,Concacaf Champions Cup Round One leg 2,pro,Round One leg 2,Dignity Health Sports Park,stadium,,storyline: first leg 1-1 in Panama,,,played,https://espndeportes.espn.com/futbol/partido/_/juegoId/762631,0-0 (LA advanced on away goals),11603 announced
Los Angeles,2026-03-03,Tue,19:00,10:00 PM ET listed,game,Avalanche at Ducks,Anaheim Ducks,Colorado Avalanche,,NHL,pro,,Honda Center,arena,,,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,COL 5-1,14369 announced
Los Angeles,2026-03-03,Tue,19:30,10:30 PM ET listed,game,Pelicans at Lakers,Los Angeles Lakers,New Orleans Pelicans,,NBA,pro,,Crypto.com Arena,arena,,,,,played,https://www.basketball-reference.com/teams/LAL/2026_games.html,LAL 110-101,18248 announced
Los Angeles,2026-03-03,Tue,20:00,,game,No. 9 Nebraska at UCLA,UCLA,Nebraska,,NCAA men's basketball (Big Ten),college,,Pauley Pavilion,arena,,storyline: opponent ranked No. 9,,,played,https://uclabruins.com/sports/mens-basketball/schedule/2025-26,UCLA 72-52,
Los Angeles,2026-03-08,Sun,12:30,3:30 PM ET listed; daylight saving time began this day,game,Knicks at Lakers,Los Angeles Lakers,New York Knicks,,NBA,pro,,Crypto.com Arena,arena,,,,,played,https://www.basketball-reference.com/teams/LAL/2026_games.html,LAL 110-97,18997 announced
Los Angeles,2026-03-08,Sun,18:00,9:00 PM ET listed,game,Blues at Ducks,Anaheim Ducks,St. Louis Blues,,NHL,pro,,Honda Center,arena,,,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,STL 4-0,16214 announced
Los Angeles,2026-03-18,Wed,19:00,10:00 PM ET listed,game,Flyers at Ducks,Anaheim Ducks,Philadelphia Flyers,,NHL,pro,,Honda Center,arena,,,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,PHI 3-2 OT,16214 announced
Los Angeles,2026-03-30,Mon,,scheduled time not verified; night game per box score,game,Guardians at Dodgers,Los Angeles Dodgers,Cleveland Guardians,,MLB,pro,,Dodger Stadium,stadium,,storyline: 4th game of season-opening homestand,,,played,https://www.baseball-reference.com/boxes/LAN/LAN202603300.shtml,CLE 4-2,52173 announced
Los Angeles,2026-03-30,Mon,19:00,10:00 PM ET listed,game,Wizards at Lakers,Los Angeles Lakers,Washington Wizards,,NBA,pro,,Crypto.com Arena,arena,,,,,played,https://www.basketball-reference.com/teams/LAL/2026_games.html,LAL 120-101,18997 announced
Los Angeles,2026-03-30,Mon,19:00,10:00 PM ET listed,game,Maple Leafs at Ducks,Anaheim Ducks,Toronto Maple Leafs,,NHL,pro,,Honda Center,arena,,,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,TOR 5-4 OT,15375 announced
Los Angeles,2026-04-04,Sat,,scheduled time not verified; night game per box score,game,Mariners at Angels,Los Angeles Angels,Seattle Mariners,,MLB,pro,,Angel Stadium,stadium,,storyline: 2nd game of home-opening series (opener Apr 3),,,played,https://www.baseball-reference.com/boxes/ANA/ANA202604040.shtml,LAA 1-0,44084 announced
Los Angeles,2026-04-04,Sat,16:00,7:00 PM ET listed,game,Maple Leafs at Kings,Los Angeles Kings,Toronto Maple Leafs,,NHL,pro,,Crypto.com Arena,arena,,storyline: Kopitar farewell season (retirement announced Sept 2025),,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,LAK 7-6 OT,18145 announced
Los Angeles,2026-04-04,Sat,19:00,10:00 PM ET listed,game,Flames at Ducks,Anaheim Ducks,Calgary Flames,,NHL,pro,,Honda Center,arena,,,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,CGY 5-3,14104 announced
Los Angeles,2026-04-04,Sat,18:30,Ticketmaster listing,game,Orlando City at LAFC,LAFC,Orlando City SC,,MLS,pro,,BMO Stadium,stadium,,storyline: Orlando's first visit since 2018,,,played,https://www.lafc.com/news/lafc-announces-2026-mls-regular-season-schedule,LAFC 6-0,
Los Angeles,2026-04-04,Sat,19:30,10:30 PM ET listed,game,Minnesota United at LA Galaxy,LA Galaxy,Minnesota United FC,,MLS,pro,,Dignity Health Sports Park,stadium,,,,,played,https://www.espn.com/soccer/match/_/gameId/761527,MIN 2-1,22447 announced
Los Angeles,2026-04-04,Sat,16:30,Derby post time; race card starts earlier,special,Santa Anita Derby (G1) day,,,,horse racing,pro,Kentucky Derby prep (points race),Santa Anita Park,grounds,,storyline: Road to the Kentucky Derby points race,,,played,https://www.fanduel.com/research/2026-santa-anita-derby-betting-odds-and-contenders-preview,So Happy won by 2 3/4 lengths,
Los Angeles,2026-04-06,Mon,,scheduled time not verified; night game per box score,game,Braves at Angels,Los Angeles Angels,Atlanta Braves,,MLB,pro,,Angel Stadium,stadium,,,,,played,https://www.baseball-reference.com/boxes/ANA/ANA202604060.shtml,LAA 6-2,25471 announced
Los Angeles,2026-04-06,Mon,19:30,10:30 PM ET listed,game,Predators at Kings,Los Angeles Kings,Nashville Predators,,NHL,pro,,Crypto.com Arena,arena,,storyline: Kopitar farewell season,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,LAK 3-2 SO,17540 announced
Los Angeles,2026-04-09,Thu,19:30,10:30 PM ET listed,game,Canucks at Kings,Los Angeles Kings,Vancouver Canucks,,NHL,pro,,Crypto.com Arena,arena,,storyline: Kopitar farewell season,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,LAK 4-1,18145 announced
Los Angeles,2026-04-09,Thu,19:00,10:00 PM ET listed,game,Sharks at Ducks,Anaheim Ducks,San Jose Sharks,,NHL,pro,,Honda Center,arena,,,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,ANA 6-1,16628 announced
Los Angeles,2026-04-09,Thu,19:30,listed show time,show,Bruce Springsteen & The E Street Band – Land of Hope and Dreams American Tour,,,Bruce Springsteen & The E Street Band,rock,,,Kia Forum,arena,2 nights in LA within a week (Apr 7 and Apr 9),,,,played,https://www.jambase.com/show/bruce-springsteen-kia-forum-20260409,,
Los Angeles,2026-04-12,Sun,,scheduled time not verified; day game per box score,game,Rangers at Dodgers,Los Angeles Dodgers,Texas Rangers,,MLB,pro,,Dodger Stadium,stadium,,,,,played,https://www.baseball-reference.com/boxes/LAN/LAN202604120.shtml,TEX 5-2,48530 announced
Los Angeles,2026-04-12,Sun,17:30,8:30 PM ET listed,game,Jazz at Lakers,Los Angeles Lakers,Utah Jazz,,NBA,pro,,Crypto.com Arena,arena,,season finale (game 82),,,played,https://www.basketball-reference.com/teams/LAL/2026_games.html,LAL 131-107,18791 announced
Los Angeles,2026-04-12,Sun,17:30,8:30 PM ET listed,game,Warriors at Clippers,LA Clippers,Golden State Warriors,,NBA,pro,,Intuit Dome,arena,,season finale (game 82),,,played,https://www.basketball-reference.com/teams/LAC/2026_games.html,LAC 115-110,17927 announced
Los Angeles,2026-04-12,Sun,17:00,8:00 PM ET listed,game,Canucks at Ducks,Anaheim Ducks,Vancouver Canucks,,NHL,pro,,Honda Center,arena,,final regular-season home game,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,VAN 4-3 OT,16731 announced
Los Angeles,2026-04-24,Fri,,scheduled time not verified; night game per box score,game,Cubs at Dodgers,Los Angeles Dodgers,Chicago Cubs,,MLB,pro,,Dodger Stadium,stadium,,,,,played,https://www.baseball-reference.com/boxes/LAN/LAN202604240.shtml,CHC 6-4,53733 announced
Los Angeles,2026-04-24,Fri,19:00,10:00 PM ET listed,game,Oilers at Ducks – Western R1 Game 3,Anaheim Ducks,Edmonton Oilers,,NHL playoffs,pro,playoff: R1 G3,Honda Center,arena,,storyline: series tied 1-1,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,ANA 7-4,16735 announced
Los Angeles,2026-04-24,Fri,19:00,listed show time,show,Third Day 30th-anniversary reunion tour with Zach Williams,,,Third Day; Zach Williams,Christian rock,,,Kia Forum,arena,1,storyline: 30th-anniversary reunion tour,,,played,https://www.jambase.com/show/third-day-kia-forum-20260424,,
Los Angeles,2026-04-26,Sun,,scheduled time not verified; day game per box score,game,Cubs at Dodgers,Los Angeles Dodgers,Chicago Cubs,,MLB,pro,,Dodger Stadium,stadium,,,,,played,https://www.baseball-reference.com/boxes/LAN/LAN202604260.shtml,LAD 6-0,52060 announced
Los Angeles,2026-04-26,Sun,13:30,4:30 PM ET listed,game,Avalanche at Kings – Western R1 Game 4,Los Angeles Kings,Colorado Avalanche,,NHL playoffs,pro,playoff: R1 G4,Crypto.com Arena,arena,,farewell; storyline: Kings down 0-3 (elimination game) in Kopitar's announced final season,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,COL 5-1 (COL wins series 4-0),18145 announced
Los Angeles,2026-04-26,Sun,18:30,9:30 PM ET listed,game,Oilers at Ducks – Western R1 Game 4,Anaheim Ducks,Edmonton Oilers,,NHL playoffs,pro,playoff: R1 G4,Honda Center,arena,,storyline: Ducks lead series 2-1,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,ANA 4-3 OT,16816 announced
Los Angeles,2026-04-26,Sun,16:00,club time; an ESPN listing shows 5 PM,game,Real Salt Lake at LA Galaxy,LA Galaxy,Real Salt Lake,,MLS,pro,,Dignity Health Sports Park,stadium,,giveaway or theme night: unveiling of the Galaxy's third statue (after Beckham and Donovan),,,played,https://www.lagalaxy.com/news/match-preview-presented-by-digalert-la-galaxy-vs-real-salt-lake-april-26-2026,LA 2-1,
Los Angeles,2026-04-26,Sun,15:00,6:00 PM ET listed,game,Portland Thorns at Angel City FC,Angel City FC,Portland Thorns FC,,NWSL,pro,,BMO Stadium,stadium,,giveaway or theme night: Kids' Day,,,played,https://www.espn.com/soccer/team/fixtures/_/id/21422,ACFC lost (score not verified),
Los Angeles,2026-04-30,Thu,19:00,10:00 PM ET listed,game,Oilers at Ducks – Western R1 Game 6,Anaheim Ducks,Edmonton Oilers,,NHL playoffs,pro,playoff: R1 G6,Honda Center,arena,,storyline: Ducks lead series 3-2 and can clinch,,,played,https://www.hockey-reference.com/leagues/NHL_2026_games.html,ANA 5-2 (ANA wins series 4-2),16820 announced
Los Angeles,2026-06-12,Fri,18:00,kickoff; opening ceremony beforehand,game,FIFA World Cup Match 4: USA vs Paraguay (Group D),USA,Paraguay,Katy Perry; Future; Tyla; REMA; Anitta; LiSA (opening ceremony),FIFA World Cup,pro,group stage,SoFi Stadium,stadium,,season opener (USA's first home World Cup match since 1994); storyline: pre-match opening ceremony,,,played,https://www.oldpasadena.org/visit/events/2026/june/2026-fifa-world-cup/,USA 4-1,70492 reported
Los Angeles,2026-06-12,Fri,11:00,gates/hours 11 AM–9 PM; screens USA–PAR at 6 PM,festival,FIFA Fan Festival Los Angeles (day 2 of 4),,,,soccer fan festival (ticketed $10),,,LA Memorial Coliseum,stadium,4 days (Jun 11–14),,,,played,https://www.lacoliseum.com/?p=14522,,
Los Angeles,2026-06-12,Fri,,scheduled time not verified; night game per box score,game,Rays at Angels,Los Angeles Angels,Tampa Bay Rays,,MLB,pro,,Angel Stadium,stadium,,,,,played,https://www.baseball-reference.com/boxes/ANA/ANA202606120.shtml,LAA 4-3,37023 announced
Los Angeles,2026-06-26,Fri,,scheduled time not verified; night game per box score,game,Athletics at Angels,Los Angeles Angels,Athletics,,MLB,pro,,Angel Stadium,stadium,,,,,played,https://www.baseball-reference.com/boxes/ANA/ANA202606260.shtml,ATH 9-3,29089 announced
Los Angeles,2026-09-20,Sun,13:10,derived from ESPN listing,game,Giants at Dodgers,Los Angeles Dodgers,San Francisco Giants,,MLB,pro,,Dodger Stadium,stadium,,rivalry,,,played,https://africa.espn.com/mlb/video/_/gameId/401817026,LAD 3-1,48085 announced
Los Angeles,2026-09-20,Sun,,scheduled time not verified,game,Twins at Angels,Los Angeles Angels,Minnesota Twins,,MLB,pro,,Angel Stadium,stadium,,final home game of 2026 season,,,played,https://www.baseball-reference.com/teams/LAA/2026-schedule-scores.shtml,MIN 8-0,
Los Angeles,2026-09-20,Sun,13:05,,game,Raiders at Chargers (Week 2),Los Angeles Chargers,Las Vegas Raiders,,NFL,pro,,SoFi Stadium,stadium,,rivalry (AFC West),,,played,https://www.chargers.com/schedule/2026,LV 26-14,
Los Angeles,2026-09-20,Sun,16:00,7:00 PM ET listed,game,Portland Fire at Sparks,Los Angeles Sparks,Portland Fire,,WNBA,pro,,Crypto.com Arena,arena,,,,,played,https://www.espn.com/wnba/team/schedule/_/name/la/los,,
```

### 3. Crowd events with no venue
```csv
city,date,start_local,end_local,name,route_or_area,expected_crowd,crowd_kind,announced_closures,source_url
Los Angeles,2026-03-08,07:00,,41st ASICS Los Angeles Marathon (Stadium to the Stars),Dodger Stadium → Downtown → Echo Park → Sunset/Hollywood/Santa Monica Blvds → Beverly Hills → Brentwood → Century City finish,"~27,000 registered participants",road race,rolling closures along the route; West Hollywood closures from 4 AM; Century City largely closed to cars from Saturday morning to 8 PM Sunday,https://www.foxla.com/news/la-marathon-2026-guide-map-schedule-closures
```

### 4. Date check
| Date | Found | Calendars checked (model) |
|---|---|---|
| Feb 25 | 3 | Dodgers/Angels (preseason, away); Lakers; Clippers; Kings; Ducks; UCLA & USC basketball; Galaxy; LAFC; Intuit Dome and Honda Center listings; Kia Forum and Crypto.com concert listings not found |
| Mar 3 | 4 | Lakers; Clippers; Kings; Ducks; UCLA & USC; LAFC; Galaxy; Kia Forum/Intuit Dome/Honda Center |
| Mar 8 | 3 (incl. marathon) | Lakers; Clippers; Kings; Ducks; UCLA & USC; LAFC (played Mar 7); Galaxy (away); Angel City (season starts Mar 15); arena listings; LA Marathon |
| Mar 18 | 1 | Lakers and Clippers (away); Kings (none); Ducks; LAFC/Galaxy (CCC legs on other dates); UCLA/USC (none); Kia Forum, Intuit Dome, Honda Center (none); Crypto.com concert listing not found |
| Mar 30 | 3 | Dodgers; Angels (away); Lakers; Clippers; Kings; Ducks; Kia Forum/Intuit Dome/Honda Center/SoFi; LAFC/Galaxy |
| Apr 4 | 7 | Dodgers (away); Angels; Lakers/Clippers (none); Kings; Ducks; LAFC; Galaxy; Angel City (away); SoFi (Ye Apr 1 and 3, none Apr 4); Kia Forum; Intuit Dome (LANY unconfirmed); YouTube Theater; Honda Center; Hollywood Bowl (Apr 3 only); Santa Anita |
| Apr 6 | 2 | Dodgers (away); Angels; Lakers; Clippers; Kings; Ducks; arena and SoFi listings |
| Apr 9 | 3 | Dodgers/Angels (off); Lakers (away); Clippers (none); Kings; Ducks; Galaxy/LAFC (CCC Apr 7–8); Kia Forum; Intuit Dome; Honda Center; SoFi |
| Apr 12 | 4 | Dodgers; Angels (away); Lakers; Clippers; Kings (none); Ducks; LAFC/Galaxy/Angel City; arena and SoFi listings |
| Apr 24 | 3 | Dodgers; Angels (away); Lakers (away, playoffs); Kings (none); Ducks; LAFC/Galaxy (away); Kia Forum; Honda Center; SoFi; Intuit Dome and Crypto.com listings not found |
| Apr 26 | 5 | Dodgers; Angels (away); Lakers (away); Kings; Ducks; Galaxy; Angel City; LAFC (away); Kia Forum; Honda Center; SoFi; Intuit Dome listing not found |
| Apr 30 | 1 | Dodgers/Angels (off); Lakers (Apr 29); Kings (eliminated); Ducks; LAFC (CCC semi Apr 29); Galaxy; Angel City; Kia Forum (Charlie Puth Apr 29); Honda Center; SoFi; Hollywood Bowl; Intuit Dome and Crypto.com listings not found |
| Jun 12 | 3 | SoFi (World Cup); Coliseum (FIFA Fan Festival); Angels; Dodgers (away); Sparks (away); MLS (World Cup pause); Angel City (no June home match); Hollywood Bowl (season starts Jun 13); Crypto.com (Ariana Grande from Jun 13); Intuit Dome (Shakira from Jun 13); Honda Center; Kia Forum listing not found |
| Jun 26 | 1 | Angels; Dodgers (away); Sparks (away); SoFi (World Cup Jun 25 and 28, none Jun 26); MLS/NWSL (none); Hollywood Bowl (none); Honda Center (5SOS Jun 27); Kia Forum (A$AP Rocky Jun 27); Intuit Dome and Crypto.com listings not found |
| Sep 20 | 4 | Dodgers; Angels; Chargers; Rams (Mon Sep 21); Sparks; Galaxy and LAFC (away); Angel City (away); Hollywood Bowl and BMO (unconfirmed); Honda Center (Weird Al Sep 19); Rose Bowl; SoFi |

### Couldn't confirm (model)
- LANY at Intuit Dome, Apr 4 (listing only). Lamb of God at YouTube Theater, Apr 4 (listing only; mid-size theater).
- Gregory Alan Isakov with the Hollywood Bowl Orchestra, Sep 20 (on the Bowl's calendar). Carín León at BMO Stadium, Sep 20 (tour itinerary and Exposition Park calendar).
- Attendance not found: LAFC Apr 4, Galaxy Apr 26, Angel City Apr 26, Angels Sep 20, Chargers Sep 20, Sparks Sep 20 (score too), UCLA Mar 3, Santa Anita Derby day.

Pages that wouldn't load: Sports-Reference college basketball schedules for UCLA and USC (bot detection); used the school sites.

Open questions (model): MLB scheduled times verified only for Sep 20 Dodgers; city edge (Santa Anita in; Ontario's Toyota Arena out); only Derby day at Santa Anita; mid-size theaters judged out (The Rose at Peacock Theater Jun 12; Lamb of God Apr 4); known sweep gaps at Crypto.com, Kia Forum and Intuit Dome; unswept venues (FivePoint, Pacific Amphitheatre, Long Beach Arena, Galen Center, non-baseball stadium nights, WWE/UFC/awards); Union Station World Cup Fan Zone (Jun 25–28) without a figure; coordinates and capacities from standard references; World Cup attendance from an unofficial page.

Main sources: Baseball-, Basketball- and Hockey-Reference team and league pages; UCLA and USC schedules; Chargers schedule; ESPN (Sparks, Galaxy); TSN (Kopitar farewell); Hollywood Bowl Sep 20 page; Sacks & Co. (Carín León tour); concertful listings (Kia Forum, Honda Center).

## Claude's checks (Oct 6, 2026)
- USA 4, Paraguay 1, Jun 12 at SoFi, 70,492 (ESPN, Fox, NBC). Springsteen at Kia Forum Apr 9 (setlist.fm, Variety review). Ducks and Kings rows match ESPN's schedule data.
- **MLB scheduled first pitches** (statsapi.mlb.com): Mar 30 Dodgers 7:10 pm; Apr 4 Angels 6:38; Apr 6 Angels 6:38; Apr 12 Dodgers 1:10; Apr 24 Dodgers 7:15; Apr 26 Dodgers 1:10; Jun 12 Angels 6:38; Jun 26 Angels 6:38; Sep 20 Angels 1:07, Dodgers 1:10.
- Rows the theater and watch-party rules change, and the gap results: see `docs/archive/research/past-dates/gap-followup.md`.
