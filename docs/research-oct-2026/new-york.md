# New York, October 2026: research output (raw)

Pasted by Kylie on Oct 6, 2026, from the research model run on `docs/october-2026-events-prompt.md` (the model checked on Oct 5 by its own clock). Kept as returned. Not seeded. Claude's check notes are at the bottom.

### 1. Venues
```csv
city,venue,former_names,area,lat,lng,capacity_by_setup,roof,access_note,neighbors_within_2km,how_people_arrive,nearest_rail_and_walk,source_url
New York City,Madison Square Garden,,"Midtown, Manhattan",40.7505,-73.9934,"hockey 18,006 (listed); basketball about 19,800 and concert about 20,000 (estimate)",indoor,,Infosys Theater at MSG (same building); Javits Center (about 1.2 km),"mostly subway, LIRR, NJ Transit, Amtrak (Penn Station is beneath the arena)",34 St–Penn Station (1/2/3/A/C/E) and Penn Station rail; 0–2 min,https://www.squawka.com/ca/nhl/teams/new-york-rangers/
New York City,Infosys Theater at Madison Square Garden,Theater at Madison Square Garden (rename year not verified),"Midtown, Manhattan",40.7505,-73.9934,"about 5,600 (estimate)",indoor,,Madison Square Garden (same building); Javits Center,mostly subway and Penn Station rail,34 St–Penn Station; 0–2 min,https://www.msg.com/madison-square-garden
New York City,Barclays Center,,"Prospect Heights, Brooklyn",40.6827,-73.9752,"basketball 17,732; concerts 20,000; boxing/wrestling 16,000; Tidal Theater about 6,000 (listed)",indoor,,,mostly subway and LIRR,Atlantic Av–Barclays Ctr (2/3/4/5/B/D/N/Q/R) and LIRR Atlantic Terminal; 0–2 min,https://en.wikipedia.org/wiki/Barclays_Center
New York City,Yankee Stadium,,"Concourse, Bronx",40.8296,-73.9262,"baseball about 46,500 (estimate)",open,,,mostly subway and Metro-North,161 St–Yankee Stadium (4/B/D) 2 min; Metro-North Yankees–E 153 St about 5 min,https://www.mlb.com/yankees/tickets/postseason
New York City,Citi Field,,"Flushing, Queens",40.7571,-73.8458,"baseball about 41,900 (estimate); MLS setup smaller (not published)",open,,USTA Billie Jean King Tennis Center (no events found),mostly subway (7) and LIRR; large lots,Mets–Willets Point (7) and LIRR Mets–Willets Point; about 3 min,https://www.frontrowsoccer.com/2026/09/16/city-to-citi-field-nycfc-to-play-final-3-regular-season-games-in-queens/
New York City,UBS Arena,Belmont Park Arena (planning name),"Elmont, NY (Nassau County, Long Island)",40.7118,-73.7260,"hockey 17,255; concerts 19,000 (listed)",indoor,,,mostly car (on-site Belmont Park lots) and LIRR,LIRR Elmont–UBS Arena (event service); about 5 min,https://en.wikipedia.org/wiki/UBS_Arena
New York City,Prudential Center,,"Newark, NJ",40.7336,-74.1711,"hockey 16,514; basketball 18,711; concerts 17,000 (listed)",indoor,,Sports Illustrated Stadium (about 2 km),"mix of NJ Transit/PATH and car; about 3,500 parking spaces within two blocks (Wikipedia)",Newark Penn Station (NJ Transit/PATH/Amtrak); about 5 min,https://en.wikipedia.org/wiki/Prudential_Center
New York City,MetLife Stadium,,"East Rutherford, NJ",40.8135,-74.0745,"82,500 (listed)",open,"Meadowlands Rail station runs on event days only; otherwise car or bus",,"mostly car, large lots; NJ Transit Meadowlands rail and bus",Meadowlands station (event days only); about 5 min,https://premierleague.com/summerseries/venues/metlifestadium
New York City,Sports Illustrated Stadium,Red Bull Arena (to 2025),"Harrison, NJ",40.7368,-74.1503,"25,000 (listed)",open,,Prudential Center (about 2 km),mostly PATH and NJ Transit from Manhattan; some car,Harrison PATH; about 5–10 min,https://en.wikipedia.org/wiki/2026_Gotham_FC_season
New York City,Forest Hills Stadium,,"Forest Hills, Queens",40.7198,-73.8478,"about 13,000 outdoor (EDMTunes)",open,Residential streets; little parking,,mostly subway and LIRR,Forest Hills–71 Av (E/F/M/R) about 10 min; LIRR Forest Hills about 7 min,https://www.edmtunes.com/2026/06/fisher-announces-2-headline-shows-at-forest-hills-stadium-nyc/amp/
New York City,Robert K. Kraft Field at Lawrence A. Wien Stadium,,"Inwood, Manhattan",40.8721,-73.9145,"about 17,000 (estimate)",open,,,mostly subway,215 St (1); about 5 min,https://seatgeek.com/columbia-lions-football-tickets/schedule
New York City,Jack Coffey Field,"listed as Moglia Stadium at Coffey Field by sportsbrackets.net (date not verified)","Fordham, Bronx",40.8617,-73.8855,"about 7,000 (estimate)",open,,,mostly subway/Metro-North and walk-in campus crowd,Metro-North Fordham; about 10 min,https://seatgeek.com/fordham-rams-football-tickets/schedule
New York City,Javits Center,,"Hudson Yards, Manhattan",40.7578,-74.0021,"convention floor; NYCC about 50,000 expected attendees (Tradefest)",indoor,,Madison Square Garden (about 1.2 km),mostly subway (7) and bus (M34-SBS),34 St–Hudson Yards (7); about 5–10 min,https://www.thepopverse.com/live-nycc-2026-dates-guests-tickets-badges-new-york-comic-con
```

### 2. Events
```csv
city,date,weekday,start_local,start_note,kind,title,home_team,away_team,performer,league_or_genre,level,stakes,venue,booking,run,facts,invited,expected_draw,status,source_url,checked_on,result_oct1to5,attendance_oct1to5
New York City,2026-10-01,Thu,19:00,,game,Rangers vs. Lightning,New York Rangers,Tampa Bay Lightning,,NHL,pro,,Madison Square Garden,arena,,home opener,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-york-rangers/,2026-10-05,"NYR 5, TBL 1",
New York City,2026-10-01,Thu,,start time not found,game,Devils vs. Flyers,New Jersey Devils,Philadelphia Flyers,,NHL,pro,,Prudential Center,arena,,season opener; home opener,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-jersey-devils/,2026-10-05,"NJD 3, PHI 2 (OT)",
New York City,2026-10-01,Thu,19:00,,show,Ringo Starr and His All Starr Band,,,Ringo Starr and His All Starr Band,rock,,,Forest Hills Stadium,stadium,,,no,,confirmed,https://www.tickpick.com/buy-ringo-starr-and-his-all-starr-band-tickets-forest-hills-stadium-10-1-26-7pm/8110474/,2026-10-05,,
New York City,2026-10-02,Fri,20:00,,show,"Harry Styles: Together, Together",,,Harry Styles,pop,,,Madison Square Garden,arena,night 17 of 30; MSG residency Aug 26–Oct 31,,no,,confirmed,https://www.bandsintown.com/v/10002026-madison-square-garden,2026-10-05,,
New York City,2026-10-02,Fri,19:00,,show,Teddy Swims: The UGLY Tour,,,Teddy Swims,pop,,,Barclays Center,arena,,,no,,confirmed,https://www.bandsintown.com/v/10000230-barclays-center,2026-10-05,,
New York City,2026-10-02,Fri,,"Headcount lists 16:30, likely doors; show time not published",show,Geese: Getting Killed Again Tour,,,Geese,rock,,,Forest Hills Stadium,stadium,"night 1 of 2, Oct 2–3",sellout announced 2026-04 (exact day not given; BrooklynVegan),no,,confirmed,https://www.brooklynvegan.com/geese-add-2nd-forest-hills-stadium-show/,2026-10-05,,
New York City,2026-10-03,Sat,20:00,,show,"Harry Styles: Together, Together",,,Harry Styles,pop,,,Madison Square Garden,arena,night 18 of 30; MSG residency Aug 26–Oct 31,,no,,confirmed,https://www.bandsintown.com/v/10002026-madison-square-garden,2026-10-05,,
New York City,2026-10-03,Sat,19:30,,game,Islanders vs. Devils,New York Islanders,New Jersey Devils,,NHL,pro,,UBS Arena,arena,,home opener,no,,confirmed,https://onestowatch.com/live/ubs-arena-shows-new-york/,2026-10-05,"NYI 6, NJD 0",
New York City,2026-10-03,Sat,12:00,,game,Columbia vs. Princeton,Columbia Lions,Princeton Tigers,,NCAA FB,college,,Robert K. Kraft Field at Lawrence A. Wien Stadium,stadium,,Ivy League opener,no,,confirmed,https://seatgeek.com/columbia-lions-football-tickets/schedule,2026-10-05,,
New York City,2026-10-03,Sat,,show time not published,show,Geese: Getting Killed Again Tour,,,Geese,rock,,,Forest Hills Stadium,stadium,"night 2 of 2, Oct 2–3",,no,,confirmed,https://www.brooklynvegan.com/geese-add-new-shows-to-fall-tour/,2026-10-05,,
New York City,2026-10-04,Sun,13:00,,game,Giants vs. Cardinals,New York Giants,Arizona Cardinals,,NFL,pro,,MetLife Stadium,stadium,,,no,,confirmed,https://fanduel.com/research/2026-new-york-giants-schedule-results-tv-channel,2026-10-05,,
New York City,2026-10-04,Sun,18:00,,game,Rangers vs. Mammoth,New York Rangers,Utah Mammoth,,NHL,pro,,Madison Square Garden,arena,,storyline: Vincent Trocheck's first MSG game with Utah,no,,confirmed,https://www.blueshirtbanter.com/new-york-rangers-release-2026-27-regular-season-schedule/,2026-10-05,"NYR 4, UTA 2",
New York City,2026-10-04,Sun,20:00,,show,The Smashing Pumpkins,,,The Smashing Pumpkins,rock,,,Barclays Center,arena,,,no,,confirmed,https://www.bandsintown.com/v/10000230-barclays-center,2026-10-05,,
New York City,2026-10-04,Sun,,"listed as 12:00 CEST by aggregator, conversion unreliable",game,Gotham FC vs. Angel City FC,Gotham FC,Angel City FC,,NWSL,pro,,Sports Illustrated Stadium,stadium,,,no,,confirmed,https://futboltotal.futbol/partido/njny-gotham-fc-w-vs-angel-city-w-nwsl-2026-10-04,2026-10-05,,
New York City,2026-10-04,Sun,16:00,,show,The Anazala Family Live Show & Concert,,,The Anazala Family,family,,,Prudential Center,arena,,,no,,confirmed,https://www.ticketmaster.com/prudential-center-tickets-newark/venue/16847,2026-10-05,,
New York City,2026-10-05,Mon,20:00,,show,beabadoobee: The Powerlines Tour,,,beabadoobee,indie pop,,,Madison Square Garden,arena,,,no,,confirmed,https://www.livenation.com/venue/KovZpZA7AAEA/madison-square-garden-events,2026-10-05,,
New York City,2026-10-06,Tue,19:30,,game,Rangers vs. Islanders,New York Rangers,New York Islanders,,NHL,pro,,Madison Square Garden,arena,,rivalry,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-york-rangers/,2026-10-05,,
New York City,2026-10-06,Tue,19:00,,game,Devils vs. Mammoth,New Jersey Devils,Utah Mammoth,,NHL,pro,,Prudential Center,arena,,,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-jersey-devils/,2026-10-05,,
New York City,2026-10-06,Tue,20:30,,show,MONSTA X World Tour [THE X : NEXUS],,,MONSTA X,K-pop,,,Infosys Theater at Madison Square Garden,theater,,,no,,confirmed,https://www.msg.com/madison-square-garden,2026-10-05,,
New York City,2026-10-07,Wed,20:00,TBS; per ESPN schedule,game,ALDS Game 3: Yankees vs. Rays,New York Yankees,Tampa Bay Rays,,MLB,pro,ALDS G3,Yankee Stadium,stadium,,playoff: ALDS G3,no,,confirmed,https://www.espn.com/mlb/team/schedule/_/name/nyy/new-york-yankees,2026-10-05,,
New York City,2026-10-07,Wed,20:00,,show,"Harry Styles: Together, Together",,,Harry Styles,pop,,,Madison Square Garden,arena,night 19 of 30; MSG residency Aug 26–Oct 31,,no,,confirmed,https://www.bandsintown.com/v/10002026-madison-square-garden,2026-10-05,,
New York City,2026-10-08,Thu,20:00,TBS; per ESPN schedule,game,ALDS Game 4: Yankees vs. Rays,New York Yankees,Tampa Bay Rays,,MLB,pro,ALDS G4,Yankee Stadium,stadium,,playoff: ALDS G4,no,,if-necessary,https://www.espn.com/mlb/team/schedule/_/name/nyy/new-york-yankees,2026-10-05,,
New York City,2026-10-08,Thu,19:30,,game,Preseason: Knicks vs. Wizards,New York Knicks,Washington Wizards,,NBA,pro,,Madison Square Garden,arena,,preseason,no,,confirmed,https://www.cbssports.com/nba/teams/NY/new-york-knicks/schedule/preseason/,2026-10-05,,
New York City,2026-10-08,Thu,19:30,fantasynerds.com lists the lone home preseason game as Oct 12 vs. Wizards; ticketing sources and Wikipedia say Oct 8 vs. 76ers,game,Preseason: Nets vs. 76ers,Brooklyn Nets,Philadelphia 76ers,,NBA,pro,,Barclays Center,arena,,preseason,no,,confirmed,https://www.tickpick.com/buy-nba-preseason-brooklyn-nets-vs-philadelphia-76ers-tickets-barclays-center-10-8-26-7pm/8165777/,2026-10-05,,
New York City,2026-10-08,Thu,19:30,,game,Islanders vs. Blackhawks,New York Islanders,Chicago Blackhawks,,NHL,pro,,UBS Arena,arena,,,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-york-islanders/,2026-10-05,,
New York City,2026-10-08,Thu,19:30,,show,LE SSERAFIM: 2026 Tour 'PUREFLOW',,,LE SSERAFIM,K-pop,,,Prudential Center,arena,,,no,,confirmed,https://www.jambase.com/venue/prudential-center,2026-10-05,,
New York City,2026-10-08,Thu,20:00,,show,Jessie Ware: The Superbloom Tour,,,Jessie Ware,pop,,,Infosys Theater at Madison Square Garden,theater,,,no,,confirmed,https://www.msg.com/madison-square-garden,2026-10-05,,
New York City,2026-10-08,Thu,,daily hours not published,special,New York Comic Con 2026 (day 1),,,,convention,,,Javits Center,grounds,day 1 of 4,20th anniversary,no,,confirmed,https://www.thepopverse.com/live-nycc-2026-dates-guests-tickets-badges-new-york-comic-con,2026-10-05,,
New York City,2026-10-09,Fri,19:30,ESPN2,game,WNBA Semifinals Game 3: Liberty vs. Dream,New York Liberty,Atlanta Dream,,WNBA,pro,Semifinals G3,Barclays Center,arena,,playoff: Semifinals G3,no,,confirmed,https://www.nbcnewyork.com/wnba/liberty-dream-where-to-watch-games-playoffs-schedule/6554638/,2026-10-05,,
New York City,2026-10-09,Fri,20:00,,show,"Harry Styles: Together, Together",,,Harry Styles,pop,,,Madison Square Garden,arena,night 20 of 30; MSG residency Aug 26–Oct 31,,no,,confirmed,https://www.bandsintown.com/v/10002026-madison-square-garden,2026-10-05,,
New York City,2026-10-09,Fri,,daily hours not published,special,New York Comic Con 2026 (day 2),,,,convention,,,Javits Center,grounds,day 2 of 4,,no,,confirmed,https://www.thepopverse.com/live-nycc-2026-dates-guests-tickets-badges-new-york-comic-con,2026-10-05,,
New York City,2026-10-10,Sat,20:00,,show,"Harry Styles: Together, Together",,,Harry Styles,pop,,,Madison Square Garden,arena,night 21 of 30; MSG residency Aug 26–Oct 31,,no,,confirmed,https://www.bandsintown.com/v/10002026-madison-square-garden,2026-10-05,,
New York City,2026-10-10,Sat,19:30,,game,Islanders vs. Lightning,New York Islanders,Tampa Bay Lightning,,NHL,pro,,UBS Arena,arena,,,no,,confirmed,https://seatgeek.com/venues/ubs-arena/tickets,2026-10-05,,
New York City,2026-10-10,Sat,15:30,,game,Devils vs. Canucks,New Jersey Devils,Vancouver Canucks,,NHL,pro,,Prudential Center,arena,,,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-jersey-devils/,2026-10-05,,
New York City,2026-10-10,Sat,19:30,converted from 23:30 UTC on aggregator; club page gives date only,game,Red Bulls vs. San Diego FC,New York Red Bulls,San Diego FC,,MLS,pro,,Sports Illustrated Stadium,stadium,,storyline: San Diego FC's first visit to Sports Illustrated Stadium,no,,confirmed,https://www.newyorkredbulls.com/news/red-bull-new-york-announce-2026-mls-schedule,2026-10-05,,
New York City,2026-10-10,Sat,15:30,,game,Fordham vs. Richmond,Fordham Rams,Richmond Spiders,,NCAA FB,college,,Jack Coffey Field,stadium,,,no,,confirmed,https://seatgeek.com/fordham-rams-football-tickets/schedule,2026-10-05,,
New York City,2026-10-10,Sat,20:00,,show,Don Omar: The Last King World Tour,,,Don Omar,Latin,,,Barclays Center,arena,night 1 of 2 in metro (Barclays Oct 10; Prudential Oct 11),,no,,confirmed,https://www.barclayscenter.com/events,2026-10-05,,
New York City,2026-10-10,Sat,19:00,,show,Foster The People,,,Foster The People,rock,,,Forest Hills Stadium,stadium,,,no,,confirmed,https://www.tickpick.com/buy-foster-the-people-tickets-forest-hills-stadium-10-10-26-7pm/7919597/,2026-10-05,,
New York City,2026-10-10,Sat,,daily hours not published,special,New York Comic Con 2026 (day 3),,,,convention,,,Javits Center,grounds,day 3 of 4,,no,,confirmed,https://www.thepopverse.com/live-nycc-2026-dates-guests-tickets-badges-new-york-comic-con,2026-10-05,,
New York City,2026-10-11,Sun,13:00,,game,Jets vs. Browns,New York Jets,Cleveland Browns,,NFL,pro,,MetLife Stadium,stadium,,,no,,confirmed,https://nflplayoffpass.com/wp-content/uploads/2026/08/printable-new-york-jets-schedule-2026.pdf,2026-10-05,,
New York City,2026-10-11,Sun,18:00,,game,Rangers vs. Canucks,New York Rangers,Vancouver Canucks,,NHL,pro,,Madison Square Garden,arena,,,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-york-rangers/,2026-10-05,,
New York City,2026-10-11,Sun,,time TBD (ABC),game,WNBA Semifinals Game 4: Liberty vs. Dream,New York Liberty,Atlanta Dream,,WNBA,pro,Semifinals G4,Barclays Center,arena,,playoff: Semifinals G4,no,,if-necessary,https://www.wsbtv.com/news/local/atlanta/atlanta-dream-start-semifinals-against-liberty/QBEFNTPUHRHYZOFGUNEDYJMZOM/,2026-10-05,,
New York City,2026-10-11,Sun,20:00,,show,Don Omar: The Last King World Tour,,,Don Omar,Latin,,,Prudential Center,arena,night 2 of 2 in metro (Barclays Oct 10; Prudential Oct 11),,no,,confirmed,https://www.jambase.com/venue/prudential-center,2026-10-05,,
New York City,2026-10-11,Sun,,daily hours not published,special,New York Comic Con 2026 (day 4),,,,convention,,,Javits Center,grounds,day 4 of 4,,no,,confirmed,https://www.thepopverse.com/live-nycc-2026-dates-guests-tickets-badges-new-york-comic-con,2026-10-05,,
New York City,2026-10-12,Mon,19:30,,game,Preseason: Knicks vs. Timberwolves,New York Knicks,Minnesota Timberwolves,,NBA,pro,,Madison Square Garden,arena,,preseason,no,,confirmed,https://www.msg.com/madison-square-garden,2026-10-05,,
New York City,2026-10-12,Mon,19:00,,game,Devils vs. Senators,New Jersey Devils,Ottawa Senators,,NHL,pro,,Prudential Center,arena,,,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-jersey-devils/,2026-10-05,,
New York City,2026-10-12,Mon,20:00,,show,Brand New: 7 Years + 13 of The Devil and God Are Raging Inside Me,,,Brand New,rock,,,Barclays Center,arena,,,no,,confirmed,https://www.barclayscenter.com/events,2026-10-05,,
New York City,2026-10-13,Tue,19:15,,game,Rangers vs. Lightning,New York Rangers,Tampa Bay Lightning,,NHL,pro,,Madison Square Garden,arena,,,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-york-rangers/,2026-10-05,,
New York City,2026-10-13,Tue,19:45,,game,Islanders vs. Canucks,New York Islanders,Vancouver Canucks,,NHL,pro,,UBS Arena,arena,,,no,,confirmed,https://onestowatch.com/live/ubs-arena-shows-new-york/,2026-10-05,,
New York City,2026-10-14,Wed,20:00,,show,"Harry Styles: Together, Together",,,Harry Styles,pop,,,Madison Square Garden,arena,night 22 of 30; MSG residency Aug 26–Oct 31,,no,,confirmed,https://www.bandsintown.com/v/10002026-madison-square-garden,2026-10-05,,
New York City,2026-10-15,Thu,19:30,,game,Preseason: Knicks vs. Raptors,New York Knicks,Toronto Raptors,,NBA,pro,,Madison Square Garden,arena,,preseason,no,,confirmed,https://www.cbssports.com/nba/teams/NY/new-york-knicks/schedule/preseason/,2026-10-05,,
New York City,2026-10-15,Thu,19:00,,game,Devils vs. Rangers,New Jersey Devils,New York Rangers,,NHL,pro,,Prudential Center,arena,,rivalry,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-jersey-devils/,2026-10-05,,
New York City,2026-10-15,Thu,,only if Yankees win ALDS; Yankees (4 seed) would be lower seed vs. CLE or HOU and host G3–G5; time TBA,game,ALCS Game 3: Yankees vs. TBD,New York Yankees,TBD,,MLB,pro,ALCS G3,Yankee Stadium,stadium,,playoff: ALCS G3,no,,if-necessary,https://www.nbcwashington.com/mlb/mlb-postseason-bracket-matchups-seeding-schedule-2026/4157552/,2026-10-05,,
New York City,2026-10-16,Fri,20:00,,show,"Harry Styles: Together, Together",,,Harry Styles,pop,,,Madison Square Garden,arena,night 23 of 30; MSG residency Aug 26–Oct 31,,no,,confirmed,https://www.bandsintown.com/v/10002026-madison-square-garden,2026-10-05,,
New York City,2026-10-16,Fri,,show time not published,show,Johnny Blue Skies & the Dark Clouds: Mutiny for the Masses 2026 Tour,,,Johnny Blue Skies (Sturgill Simpson),country,,,Barclays Center,arena,,,no,,confirmed,https://www.barclayscenter.com/events,2026-10-05,,
New York City,2026-10-16,Fri,,time TBA,special,PBR: NY Mavericks (day 1),,,,bull riding,pro,,UBS Arena,arena,day 1 of 3,,no,,confirmed,https://onestowatch.com/live/ubs-arena-shows-new-york/,2026-10-05,,
New York City,2026-10-16,Fri,,show time not published,show,FISHER,,,FISHER,electronic,,,Forest Hills Stadium,stadium,"night 1 of 2, Oct 16–17",,no,,confirmed,https://www.edmtunes.com/2026/06/fisher-announces-2-headline-shows-at-forest-hills-stadium-nyc/amp/,2026-10-05,,
New York City,2026-10-16,Fri,,only if Yankees win ALDS; time TBA,game,ALCS Game 4: Yankees vs. TBD,New York Yankees,TBD,,MLB,pro,ALCS G4,Yankee Stadium,stadium,,playoff: ALCS G4,no,,if-necessary,https://www.nbcwashington.com/mlb/mlb-postseason-bracket-matchups-seeding-schedule-2026/4157552/,2026-10-05,,
New York City,2026-10-17,Sat,20:00,,show,"Harry Styles: Together, Together",,,Harry Styles,pop,,,Madison Square Garden,arena,night 24 of 30; MSG residency Aug 26–Oct 31,,no,,confirmed,https://www.bandsintown.com/v/10002026-madison-square-garden,2026-10-05,,
New York City,2026-10-17,Sat,19:30,rescheduled from Nov 4 (announced 2026-09-16),game,NYCFC vs. LAFC,New York City FC,Los Angeles FC,,MLS,pro,,Citi Field,stadium,,,no,,confirmed,https://www.frontrowsoccer.com/2026/09/16/city-to-citi-field-nycfc-to-play-final-3-regular-season-games-in-queens/,2026-10-05,,
New York City,2026-10-17,Sat,19:30,converted from 23:30 UTC; aggregator only,game,Red Bulls vs. Toronto FC,New York Red Bulls,Toronto FC,,MLS,pro,,Sports Illustrated Stadium,stadium,,,no,,confirmed,https://mabumbe.com/allsports/football-match/1490545/match-details/,2026-10-05,,
New York City,2026-10-17,Sat,20:00,,special,BKFC 95: Herring vs. Dodson,,,,combat sports,pro,,Prudential Center,arena,,championship final (BKFC bantamweight title),no,,confirmed,https://www.tickpick.com/buy-bkfc-95-tickets-prudential-center-10-17-26-8pm/8112423/,2026-10-05,,
New York City,2026-10-17,Sat,15:30,,game,Fordham vs. Villanova,Fordham Rams,Villanova Wildcats,,NCAA FB,college,,Jack Coffey Field,stadium,,,no,,confirmed,https://seatgeek.com/fordham-rams-football-tickets/schedule,2026-10-05,,
New York City,2026-10-17,Sat,,time TBA,special,PBR: NY Mavericks (day 2),,,,bull riding,pro,,UBS Arena,arena,day 2 of 3,,no,,confirmed,https://onestowatch.com/live/ubs-arena-shows-new-york/,2026-10-05,,
New York City,2026-10-17,Sat,,show time not published,show,FISHER,,,FISHER,electronic,,,Forest Hills Stadium,stadium,"night 2 of 2, Oct 16–17",,no,,confirmed,https://www.edmtunes.com/2026/06/fisher-announces-2-headline-shows-at-forest-hills-stadium-nyc/amp/,2026-10-05,,
New York City,2026-10-17,Sat,,only if Yankees win ALDS and ALCS reaches G5; time TBA,game,ALCS Game 5: Yankees vs. TBD,New York Yankees,TBD,,MLB,pro,ALCS G5,Yankee Stadium,stadium,,playoff: ALCS G5,no,,if-necessary,https://www.nbcwashington.com/mlb/mlb-postseason-bracket-matchups-seeding-schedule-2026/4157552/,2026-10-05,,
New York City,2026-10-18,Sun,13:00,,game,Giants vs. Saints,New York Giants,New Orleans Saints,,NFL,pro,,MetLife Stadium,stadium,,,no,,confirmed,https://fanduel.com/research/2026-new-york-giants-schedule-results-tv-channel,2026-10-05,,
New York City,2026-10-18,Sun,,time TBA,special,PBR: NY Mavericks (day 3),,,,bull riding,pro,,UBS Arena,arena,day 3 of 3,,no,,confirmed,https://onestowatch.com/live/ubs-arena-shows-new-york/,2026-10-05,,
New York City,2026-10-19,Mon,19:00,,game,Rangers vs. Ducks,New York Rangers,Anaheim Ducks,,NHL,pro,,Madison Square Garden,arena,,,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-york-rangers/,2026-10-05,,
New York City,2026-10-20,Tue,19:00,NBC/Peacock,game,Knicks vs. 76ers,New York Knicks,Philadelphia 76ers,,NBA,pro,,Madison Square Garden,arena,,home opener; season opener; storyline: championship banner night (defending NBA champions),no,,confirmed,https://thekotshow.substack.com/p/knicks-vs-76ers-preseason-preview-oct-5-2026,2026-10-05,,
New York City,2026-10-20,Tue,19:00,,game,Islanders vs. Ducks,New York Islanders,Anaheim Ducks,,NHL,pro,,UBS Arena,arena,,,no,,confirmed,https://seatgeek.com/venues/ubs-arena/tickets,2026-10-05,,
New York City,2026-10-20,Tue,19:00,,game,Devils vs. Avalanche,New Jersey Devils,Colorado Avalanche,,NHL,pro,,Prudential Center,arena,,,no,,confirmed,https://www.prucenter.com/,2026-10-05,,
New York City,2026-10-20,Tue,19:00,,show,Revelation Nights (Revelation Church LA),,,Chandler Moore; Lovy Elias,Christian,,,Barclays Center,arena,,,no,,confirmed,https://www.bandsintown.com/v/10000230-barclays-center,2026-10-05,,
New York City,2026-10-21,Wed,20:00,,show,"Harry Styles: Together, Together",,,Harry Styles,pop,,,Madison Square Garden,arena,night 25 of 30; MSG residency Aug 26–Oct 31,,no,,confirmed,https://www.bandsintown.com/v/10002026-madison-square-garden,2026-10-05,,
New York City,2026-10-21,Wed,19:30,,game,Nets vs. Hornets,Brooklyn Nets,Charlotte Hornets,,NBA,pro,,Barclays Center,arena,,home opener; season opener; star debut or return: Julius Randle (Nets debut) and top pick Mikel Brown Jr.,no,,confirmed,https://yesnetwork.com/brooklyn-nets-announce-2026-27-season-schedule/,2026-10-05,,
New York City,2026-10-22,Thu,19:30,,game,Islanders vs. Kings,New York Islanders,Los Angeles Kings,,NHL,pro,,UBS Arena,arena,,,no,,confirmed,https://seatgeek.com/venues/ubs-arena/tickets,2026-10-05,,
New York City,2026-10-22,Thu,19:00,,game,Devils vs. Ducks,New Jersey Devils,Anaheim Ducks,,NHL,pro,,Prudential Center,arena,,,no,,confirmed,https://www.prucenter.com/,2026-10-05,,
New York City,2026-10-22,Thu,20:00,only if Liberty win semifinal; as 8 seed Liberty would be lower seed and host G3/G4/G6,game,WNBA Finals Game 3: Liberty vs. TBD,New York Liberty,TBD,,WNBA,pro,Finals G3,Barclays Center,arena,,championship final,no,,if-necessary,https://www.essentiallysports.com/wnba-basketball-news-wnba-playoffs-2026-full-bracket-schedule-matchups-how-to-watch-officials-more/,2026-10-05,,
New York City,2026-10-23,Fri,20:00,,show,"Harry Styles: Together, Together",,,Harry Styles,pop,,,Madison Square Garden,arena,night 26 of 30; MSG residency Aug 26–Oct 31,,no,,confirmed,https://www.bandsintown.com/v/10002026-madison-square-garden,2026-10-05,,
New York City,2026-10-23,Fri,20:00,,show,Arcángel: La 8va Maravilla World Tour,,,Arcángel,Latin,,,Barclays Center,arena,,,no,,confirmed,https://www.bandsintown.com/v/10000230-barclays-center,2026-10-05,,
New York City,2026-10-23,Fri,,show time not published,show,Sidhu Moosewala: Signed To God (hologram tribute),,,Sidhu Moosewala (hologram),Punjabi,,,UBS Arena,arena,,,no,,confirmed,https://onestowatch.com/live/ubs-arena-shows-new-york/,2026-10-05,,
New York City,2026-10-23,Fri,20:00,prucenter.com lists as POSTPONED; announcement date not shown,show,TAEMIN,,,TAEMIN,K-pop,,,Prudential Center,arena,,,no,,postponed,https://www.prucenter.com/,2026-10-05,,
New York City,2026-10-24,Sat,20:00,,show,"Harry Styles: Together, Together",,,Harry Styles,pop,,,Madison Square Garden,arena,night 27 of 30; MSG residency Aug 26–Oct 31,,no,,confirmed,https://www.bandsintown.com/v/10002026-madison-square-garden,2026-10-05,,
New York City,2026-10-24,Sat,15:30,,game,Devils vs. Kings,New Jersey Devils,Los Angeles Kings,,NHL,pro,,Prudential Center,arena,,,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-jersey-devils/,2026-10-05,,
New York City,2026-10-24,Sat,16:30,,game,Red Bulls vs. Inter Miami CF,New York Red Bulls,Inter Miami CF,,MLS,pro,,Sports Illustrated Stadium,stadium,,,no,,confirmed,https://www.newyorkredbulls.com/news/red-bull-new-york-announce-2026-mls-schedule,2026-10-05,,
New York City,2026-10-24,Sat,13:30,,game,Columbia vs. Dartmouth,Columbia Lions,Dartmouth Big Green,,NCAA FB,college,,Robert K. Kraft Field at Lawrence A. Wien Stadium,stadium,,giveaway or theme night: Homecoming,no,,confirmed,https://seatgeek.com/columbia-lions-football-tickets/schedule,2026-10-05,,
New York City,2026-10-24,Sat,13:00,,game,Fordham vs. Lafayette,Fordham Rams,Lafayette Leopards,,NCAA FB,college,,Jack Coffey Field,stadium,,,no,,confirmed,https://seatgeek.com/fordham-rams-football-tickets/schedule,2026-10-05,,
New York City,2026-10-24,Sat,20:00,,show,KATSEYE: The Wildworld Tour,,,KATSEYE,pop,,,UBS Arena,arena,"night 1 of 2, Oct 24–25",,no,,confirmed,https://seatgeek.com/venues/ubs-arena/tickets,2026-10-05,,
New York City,2026-10-24,Sat,15:30,only if Liberty win semifinal,game,WNBA Finals Game 4: Liberty vs. TBD,New York Liberty,TBD,,WNBA,pro,Finals G4,Barclays Center,arena,,championship final,no,,if-necessary,https://www.essentiallysports.com/wnba-basketball-news-wnba-playoffs-2026-full-bracket-schedule-matchups-how-to-watch-officials-more/,2026-10-05,,
New York City,2026-10-25,Sun,13:00,,game,Jets vs. Dolphins,New York Jets,Miami Dolphins,,NFL,pro,,MetLife Stadium,stadium,,,no,,confirmed,https://nflplayoffpass.com/wp-content/uploads/2026/08/printable-new-york-jets-schedule-2026.pdf,2026-10-05,,
New York City,2026-10-25,Sun,,start time not found,game,Knicks vs. Magic,New York Knicks,Orlando Magic,,NBA,pro,,Madison Square Garden,arena,,,no,,confirmed,https://en.wikipedia.org/wiki/2026%E2%80%9327_New_York_Knicks_season,2026-10-05,,
New York City,2026-10-25,Sun,18:00,,game,Nets vs. Pacers,Brooklyn Nets,Indiana Pacers,,NBA,pro,,Barclays Center,arena,,,no,,confirmed,https://sportsbrackets.net/wp-content/plugins/sportsbrackets-tools/pdfs/2026-27-brooklyn-nets-schedule.pdf,2026-10-05,,
New York City,2026-10-25,Sun,19:30,,show,Journey: Final Frontier Tour,,,Journey,rock,,,Prudential Center,arena,,,no,,confirmed,https://www.jambase.com/venue/prudential-center,2026-10-05,,
New York City,2026-10-25,Sun,20:00,,show,KATSEYE: The Wildworld Tour,,,KATSEYE,pop,,,UBS Arena,arena,"night 2 of 2, Oct 24–25",,no,,confirmed,https://seatgeek.com/venues/ubs-arena/tickets,2026-10-05,,
New York City,2026-10-26,Mon,19:00,,game,Rangers vs. Kings,New York Rangers,Los Angeles Kings,,NHL,pro,,Madison Square Garden,arena,,,no,,confirmed,https://www.squawka.com/ca/nhl/teams/new-york-rangers/,2026-10-05,,
New York City,2026-10-27,Tue,20:00,,game,Knicks vs. Pistons,New York Knicks,Detroit Pistons,,NBA,pro,,Madison Square Garden,arena,,,no,,confirmed,https://www.ticketmaster.com/new-york-knicks-tickets/artist/805988?home_away=home,2026-10-05,,
New York City,2026-10-27,Tue,20:00,,show,Rod Wave: Don't Look Down Tour,,,Rod Wave,hip-hop,,,Barclays Center,arena,"night 1 of 2, Oct 27–28",,no,,confirmed,https://www.barclayscenter.com/,2026-10-05,,
New York City,2026-10-28,Wed,20:00,,show,"Harry Styles: Together, Together",,,Harry Styles,pop,,,Madison Square Garden,arena,night 28 of 30; MSG residency Aug 26–Oct 31,,no,,confirmed,https://www.bandsintown.com/v/10002026-madison-square-garden,2026-10-05,,
New York City,2026-10-28,Wed,20:00,,show,Rod Wave: Don't Look Down Tour,,,Rod Wave,hip-hop,,,Barclays Center,arena,"night 2 of 2, Oct 27–28",,no,,confirmed,https://www.bandsintown.com/v/10000230-barclays-center,2026-10-05,,
New York City,2026-10-28,Wed,19:30,moved from Yankee Stadium to Citi Field (announced 2026-09-16),game,NYCFC vs. Atlanta United,New York City FC,Atlanta United FC,,MLS,pro,,Citi Field,stadium,,,no,,confirmed,https://www.frontrowsoccer.com/2026/09/16/city-to-citi-field-nycfc-to-play-final-3-regular-season-games-in-queens/,2026-10-05,,
New York City,2026-10-28,Wed,,show time not published,show,We Can Survive,,,Megan Moroney; Michelle Branch; Bebe Rexha; Ashe,pop,,,UBS Arena,arena,,,no,,confirmed,https://onestowatch.com/live/ubs-arena-shows-new-york/,2026-10-05,,
New York City,2026-10-28,Wed,19:00,,show,Disney On Ice: Spotlight Magic!,,,Disney On Ice,family,,,Prudential Center,arena,"Oct 28–31, 6+ shows",,no,,confirmed,https://theater.guide/venue/prudential-center/,2026-10-05,,
New York City,2026-10-29,Thu,20:00,songkick lists Oct 29; nightout/SeatGeek list Oct 30 and Oct 31,show,A Boogie Wit da Hoodie: 10 Years of Artist,,,A Boogie Wit da Hoodie,hip-hop,,,UBS Arena,arena,"night 1 of 2, Oct 29–30",,no,,confirmed,https://onestowatch.com/live/ubs-arena-shows-new-york/,2026-10-05,,
New York City,2026-10-29,Thu,19:00,,show,Disney On Ice: Spotlight Magic!,,,Disney On Ice,family,,,Prudential Center,arena,"Oct 28–31, 6+ shows",,no,,confirmed,https://theater.guide/venue/prudential-center/,2026-10-05,,
New York City,2026-10-29,Thu,20:00,only if Liberty win semifinal and Finals reach G6,game,WNBA Finals Game 6: Liberty vs. TBD,New York Liberty,TBD,,WNBA,pro,Finals G6,Barclays Center,arena,,championship final,no,,if-necessary,https://www.essentiallysports.com/wnba-basketball-news-wnba-playoffs-2026-full-bracket-schedule-matchups-how-to-watch-officials-more/,2026-10-05,,
New York City,2026-10-30,Fri,20:00,,show,"Harry Styles: Together, Together. Harryween.",,,Harry Styles,pop,,,Madison Square Garden,arena,night 29 of 30; MSG residency Aug 26–Oct 31,giveaway or theme night: Harryween,no,,confirmed,https://www.livenation.com/venue/KovZpZA7AAEA/madison-square-garden-events,2026-10-05,,
New York City,2026-10-30,Fri,19:30,,game,Nets vs. Pistons,Brooklyn Nets,Detroit Pistons,,NBA,pro,,Barclays Center,arena,,giveaway or theme night: NBA Cup group game,no,,confirmed,https://yesnetwork.com/brooklyn-nets-announce-2026-27-season-schedule/,2026-10-05,,
New York City,2026-10-30,Fri,20:00,,show,A Boogie Wit da Hoodie: 10 Years of Artist,,,A Boogie Wit da Hoodie,hip-hop,,,UBS Arena,arena,"night 2 of 2, Oct 29–30",,no,,confirmed,https://seatgeek.com/venues/ubs-arena/tickets,2026-10-05,,
New York City,2026-10-30,Fri,19:00,also 11:00 show,show,Disney On Ice: Spotlight Magic!,,,Disney On Ice,family,,,Prudential Center,arena,"Oct 28–31, 6+ shows",,no,,confirmed,https://theater.guide/venue/prudential-center/,2026-10-05,,
New York City,2026-10-31,Sat,20:00,,show,"Harry Styles: Together, Together. Harryween.",,,Harry Styles,pop,,,Madison Square Garden,arena,night 30 of 30; MSG residency Aug 26–Oct 31,giveaway or theme night: Harryween; final night of residency (last US date of 2026 tour),no,,confirmed,https://nme.com/news/music/harry-styles-jokes-about-taylor-swifts-wedding-during-msg-residency-3965679,2026-10-05,,
New York City,2026-10-31,Sat,14:00,,game,Islanders vs. Oilers,New York Islanders,Edmonton Oilers,,NHL,pro,,UBS Arena,arena,,,no,,confirmed,https://onestowatch.com/live/ubs-arena-shows-new-york/,2026-10-05,,
New York City,2026-10-31,Sat,14:00,moved from Yankee Stadium to Citi Field (announced 2026-09-16),game,NYCFC vs. CF Montréal,New York City FC,CF Montréal,,MLS,pro,,Citi Field,stadium,,,no,,confirmed,https://www.frontrowsoccer.com/2026/09/16/city-to-citi-field-nycfc-to-play-final-3-regular-season-games-in-queens/,2026-10-05,,
New York City,2026-10-31,Sat,12:00,,game,Columbia vs. Yale,Columbia Lions,Yale Bulldogs,,NCAA FB,college,,Robert K. Kraft Field at Lawrence A. Wien Stadium,stadium,,,no,,confirmed,https://seatgeek.com/columbia-lions-football-tickets/schedule,2026-10-05,,
New York City,2026-10-31,Sat,20:00,,show,Rawayana: ¿Dónde Es El After? World Tour,,,Rawayana,Latin,,,Barclays Center,arena,,,no,,confirmed,https://www.barclayscenter.com/events,2026-10-05,,
New York City,2026-10-31,Sat,10:00,also 14:00 show,show,Disney On Ice: Spotlight Magic!,,,Disney On Ice,family,,,Prudential Center,arena,"Oct 28–31, 6+ shows",,no,,confirmed,https://theater.guide/venue/prudential-center/,2026-10-05,,
```

### 3. Crowd events with no venue
```csv
city,date,start_local,end_local,name,route_or_area,expected_crowd,crowd_kind,announced_closures,source_url
New York City,2026-10-10,10:00,18:00,31st Panamanian Day Parade & Street Fair,"Franklin Ave from Bergen St, Crown Heights (parade); Classon Ave street fair 14:00–18:00",,parade and street fair,,https://panamanianparade.org/parade-gala/
New York City,2026-10-11,08:00,,NYRR Staten Island Half,"St. George area, Staten Island",8730 finishers in 2024 (halfruns.com),road race,,https://www.priceless.com/sports/product/237846/nyrr-staten-island-half-cardholder
New York City,2026-10-11,12:00,16:00,62nd Hispanic Day Parade,"Fifth Ave, 44th St to 69th St (organizer says to 77th St)",more than one million (organizer claim),parade,,https://www.newyorklatinculture.com/things-to-do-in-nyc-in-october
New York City,2026-10-12,12:00,16:00,82nd Columbus Day Parade,"Fifth Ave, 44th St to 69th St",,parade,,https://www.newyorklatinculture.com/things-to-do-in-nyc-in-october
New York City,2026-10-31,19:00,23:00,53rd Village Halloween Parade,"Sixth Ave, Canal St to 15th St; marcher lineup at Canal St 18:30–21:00",about 2 million spectators (organizer and press estimate),parade,,https://www.timeout.com/newyork/news/the-worlds-biggest-halloween-parade-returns-to-nyc-next-month-and-the-titillating-2026-theme-has-just-been-revealed-091626
```

### 4. Day-by-day check
Same 12 calendars every day: MSG/Infosys, Barclays, Yankee Stadium, Citi Field, UBS, Prudential, MetLife, SI Stadium, Forest Hills, Wien, Coffey, Javits.

| Date | Found | Note |
|---|---|---|
| Oct 1 | 3 | |
| Oct 2 | 3 | |
| Oct 3 | 4 | |
| Oct 4 | 5 | |
| Oct 5 | 1 | Yankees ALDS G2 is in Tampa |
| Oct 6 | 3 | |
| Oct 7 | 2 | |
| Oct 8 | 7 | |
| Oct 9 | 3 | |
| Oct 10 | 8 | Yankees ALDS G5 would be in Tampa |
| Oct 11 | 5 | |
| Oct 12 | 3 | |
| Oct 13 | 2 | |
| Oct 14 | 1 | |
| Oct 15 | 3 | |
| Oct 16 | 5 | |
| Oct 17 | 8 | |
| Oct 18 | 2 | |
| Oct 19 | 1 | |
| Oct 20 | 4 | |
| Oct 21 | 2 | |
| Oct 22 | 3 | |
| Oct 23 | 4 | 1 postponed |
| Oct 24 | 7 | |
| Oct 25 | 5 | |
| Oct 26 | 1 | |
| Oct 27 | 2 | |
| Oct 28 | 5 | |
| Oct 29 | 3 | |
| Oct 30 | 4 | |
| Oct 31 | 6 | |

### Couldn't confirm (model's list)
- World Series at Yankee Stadium (Oct 23–31): depends on the Yankees advancing and on record; no dates listed.
- Oct 1–5 results not found: Giants–Cardinals, Columbia–Princeton, Gotham–Angel City. No announced attendance found for any Oct 1–5 event.
- Pulaski Day Parade: no 2026 source.
- Queens Dominican Parade (Oct 4, 37th Ave) and Jackson Heights Halloween Parade (Oct 31): dates sourced, no crowd size.
- Gotham FC Oct 17 and Oct 25: home or away unclear (likely away).
- 2026 Columbus and Hispanic Day closures not yet published.
- John Pizzarelli at Prudential Center (Oct 3) and MarissaAnn at MSG (Oct 8): room and setup unclear; MSG listing clashes with the Knicks that night.
- Barclays shows unnamed second items on Oct 11, 16, 20 and 28; a WWE listing turned out to be Nov 2.
- Knicks Oct 25 start time.
- Event-night subway, LIRR and NJ Transit service changes: none found; not searched in depth.
- Several venue coordinates from general reference, not verified.

### Pages that wouldn't load (model's list)
- legionreport.com (Rangers schedule, blocked to automated access); used squawka.com instead.

### Open questions (model's list)
- Do northern New Jersey (MetLife, Prudential, SI Stadium) and Long Island (UBS Arena) count as the same market as the five boroughs?
- Rutgers' SHI Stadium (Piscataway, central NJ) left out: Oct 3 vs. Indiana (8:00 pm, Homecoming; Indiana the defending national champions) and Oct 31 vs. Michigan (time TBA).
- Stony Brook's LaValle Stadium (Suffolk County) not checked.
- Radio City is about 2 km from MSG; theater rule unclear, calendar not compiled.
- Infosys Theater has The Format on Oct 9 at 7:30, same night as Harry Styles next door. Does an arena concert count as a "headline sports or stadium event" for the theater rule?
- Tidal Theater at Barclays (about 6,000) shares the arena's building; calendar not compiled.
- Forest Hills Stadium's season end unclear (NYC Tourism says through Oct 10; FISHER Oct 16–17 announced in June).

## Claude's check (Oct 6, 2026)
Checked against sources, all match:
- **Yankees–Rays ALDS:** Game 3 Wed Oct 7, 8:00 pm, Yankee Stadium (TBS); Game 4 Oct 8 if necessary; Tampa holds home field (Yahoo, NBC Sports).
- **Harry Styles at MSG:** 30 shows, Aug 26–Oct 31, every Wed, Fri and Sat, all at 8:00 pm, Jamie xx opening (MSG Entertainment, CBS New York). The 14 October dates (2, 3, 7, 9, 10, 14, 16, 17, 21, 23, 24, 28, 30, 31) all appear, and the night numbers are right. Wednesday Oct 7 puts Harry Styles at MSG and Yankees Game 3 in the Bronx on the same night.
- **Knicks opener Tue Oct 20, 7:00, vs. the 76ers:** the Knicks raise their first championship banner since 1973 (beat the Spurs in five). Add a fact the research missed: **LeBron James's 76ers debut** that night (Yahoo, Yardbarker). Facts: home opener, championship banner night (storyline), star debut (LeBron James).
- **NYCFC at Citi Field:** Oct 17 vs. LAFC 7:30, Oct 28 vs. Atlanta 7:30, Oct 31 vs. Montréal 2:00, moved because the Yankees made the playoffs (Front Row Soccer).

Weak spots: Red Bulls and Gotham times come from aggregator sites; the Knicks' Oct 25 time is missing; Theater at MSG / Infosys Theater name not verified.

New York shape: it's the transit city in the set. Most venues sit on top of a subway or rail stop (MSG over Penn Station, Barclays over Atlantic Terminal), while MetLife and UBS Arena lean on cars. The month's busiest nights are Oct 10 and Oct 17 (eight events each), and Oct 31 has Harry Styles's last night plus the Village Halloween Parade (about 2 million spectators, organizer estimate).
