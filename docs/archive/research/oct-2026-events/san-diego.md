# San Diego, October 2026: research output (raw)

Pasted by Kylie on Oct 6, 2026, from the research model run on `docs/archive/research/october-2026-events-prompt.md`. Kept as returned. Not seeded. Claude's check notes are at the bottom.

### 1. Venues
```csv
city,venue,former_names,area,lat,lng,capacity_by_setup,roof,access_note,neighbors_within_2km,how_people_arrive,nearest_rail_and_walk,source_url
San Diego,Petco Park,,"East Village, San Diego",32.7073,-117.1566,"baseball 39,860 fixed seats (MLB.com; Ticketmaster lists 42,445); full-stadium concerts 40,000+ (Petco Park Insider)",open,,Gallagher Square at Petco Park (same campus); The Rady Shell at Jacobs Park (~1 km),"trolley to 12th & Imperial plus downtown garages; Old Town park-and-ride on Green Line (Petco Park Insider)","12th & Imperial Transit Center (Blue/Orange/Green), about 2–5 min walk",https://www.mlb.com/news/featured/petco-park-guide-capacity-seating-chart-parking-and-more
San Diego,Gallagher Square at Petco Park,Park at the Park (renamed about 2020),"East Village, San Diego",32.7064,-117.1557,"lawn concerts estimated 6,000 (Times of San Diego); Padres say 2,000–10,000 depending on setup (VenuesNow)",open,,Petco Park (same campus); The Rady Shell at Jacobs Park (~1 km),trolley and downtown garages; music ends 11 pm under the noise ordinance (Petco Park Insider),"12th & Imperial Transit Center, about 2 min walk",https://timesofsandiego.com/?p=399547
San Diego,Snapdragon Stadium,,"Mission Valley, San Diego",32.7834,-117.1193,"football/soccer about 35,000 (listed); festival setup not published",open,,,trolley plus stadium lots (estimate),"SDSU Mission Valley/Stadium trolley stop (Green Line), about 2–5 min walk (estimate)",https://www.ticketmaster.ca/san-diego-fc-tickets/artist/3149423
San Diego,Pechanga Arena San Diego,San Diego Sports Arena; Valley View Casino Center (per venue site),"Midway District, San Diego",32.7553,-117.2120,"hockey about 12,000; concerts about 14,000–16,000 (estimate, not verified this run)",indoor,,,mostly car; on-site lot (estimate),"Old Town Transit Center, about 30 min walk (estimate)",https://pechangaarenasd.com/
San Diego,Viejas Arena,Cox Arena (opening name 1997),"SDSU campus, College Area, San Diego",32.7735,-117.0727,"basketball about 12,000 (Petco Park Insider); concerts similar (estimate)",indoor,,,trolley (A.S. sells trolley passes) plus campus garages,"SDSU Transit Center (Green Line), about 5 min walk (estimate)",https://as.sdsu.edu/events/viejas
San Diego,North Island Credit Union Amphitheatre,Coors Amphitheatre; Cricket Wireless Amphitheatre; Sleep Train Amphitheatre; Mattress Firm Amphitheatre (to 2018),"Otay Ranch area, Chula Vista",32.5883,-117.0061,"concerts 19,500 listed (Songkick); about 20,000 (Petco Park Insider)",covered seating; open lawn,,,mostly car; GA parking included with ticket (Ticketmaster venue text),none within walking distance (estimate),https://www.songkick.com/venues/69998-north-island-credit-union-amphitheatre
San Diego,The Rady Shell at Jacobs Park,,"Embarcadero Marina Park South, San Diego",32.7036,-117.1649,"up to about 10,000 (VenuesNow, '10,000-seat'); seated setups smaller (estimate)",open (shell over stage),,Petco Park (~1 km); Gallagher Square at Petco Park (~1 km),walk from downtown; trolley and garages (estimate),"Convention Center or Gaslamp Quarter trolley station, about 10–15 min walk (estimate)",https://venuesnow.com/?p=87984
San Diego,Frontwave Arena,,"Oceanside (North County)",33.21,-117.30,"7,500 listed (Songkick)",indoor,,,mostly car (estimate),none within walking distance (estimate),https://detour.songkick.com/venues/4572894-frontwave-arena
San Diego,Torero Stadium,,"USD campus, Linda Vista, San Diego",32.7718,-117.1883,"football about 6,000 (estimate, not verified this run)",open,,,mostly car (estimate),"Linda Vista station (Green Line), about 20 min uphill walk (estimate)",https://seatgeek.com/san-diego-toreros-football-tickets/schedule
```

### 2. Events
```csv
city,date,weekday,start_local,start_note,kind,title,home_team,away_team,performer,league_or_genre,level,stakes,venue,booking,run,facts,invited,expected_draw,status,source_url,checked_on,result_oct1to5,attendance_oct1to5
San Diego,2026-10-02,Fri,20:00,Time from resale listings only,show,The Growlers,,,The Growlers,rock,,,Gallagher Square at Petco Park,grounds,1 night,,no,,confirmed,https://www.petcoparkinsider.com/concert-growlers,2026-10-06,,
San Diego,2026-10-02,Fri,20:00,SeatGeek time,show,Marco Antonio Solís,,,Marco Antonio Solís,Latin,,,North Island Credit Union Amphitheatre,amphitheater,1 night,,no,,confirmed,https://seatgeek.com/venues/north-island-credit-union-amphitheatre/tickets,2026-10-06,,
San Diego,2026-10-03,Sat,13:00,SeatGeek time,game,Davidson at San Diego,San Diego Toreros,Davidson Wildcats,,NCAA FB (FCS),college,,Torero Stadium,stadium,,,no,,confirmed,https://seatgeek.com/san-diego-toreros-football-tickets/schedule,2026-10-06,,
San Diego,2026-10-03,Sat,19:30,River Block Party 14:30; Warrior Walk 17:15,game,Texas State at San Diego State,San Diego State Aztecs,Texas State Bobcats,,NCAA FB,college,,Snapdragon Stadium,stadium,,"storyline: SDSU's first-ever Pac-12 conference game; giveaway or theme night: Hispanic Heritage Month block party and 2016 MW title team reunion",no,,confirmed,https://goaztecs.com/news/2026/10/02/promotions-announced-for-inaugural-pac-12-matchup-against-texas-state,2026-10-06,"SDSU 31, Texas State 29 (goaztecs.com)",
San Diego,2026-10-03,Sat,,No start time found,show,Social Distortion with Descendents,,,Social Distortion; Descendents,punk,,,Gallagher Square at Petco Park,grounds,1 night,tour closer,no,,confirmed,https://www.petcoparkinsider.com/concert-social-distortion,2026-10-06,,
San Diego,2026-10-03,Sat,,No start time found,show,Hayley Williams with Magdalena Bay and Rico Nasty,,,Hayley Williams,pop,,,North Island Credit Union Amphitheatre,amphitheater,1 night,,no,,confirmed,https://www.songkick.com/venues/69998-north-island-credit-union-amphitheatre/calendar,2026-10-06,,
San Diego,2026-10-03,Sat,,No start time found,show,Hudson Westbrook with Kenny Whitmire,,,Hudson Westbrook,country,,,Frontwave Arena,arena,1 night,,no,,confirmed,https://www.songkick.com/concerts/43321327-hudson-westbrook-at-frontwave-arena,2026-10-06,,
San Diego,2026-10-04,Sun,18:30,Ticketmaster listing time,show,$uicideboy$ Grey Day Tour 2026 with Shoreline Mafia and more,,,$uicideboy$,hip-hop,,,North Island Credit Union Amphitheatre,amphitheater,1 night,,no,,confirmed,https://www.ticketmaster.com/north-island-credit-union-amphitheatre-tickets-chula-vista/venue/82205,2026-10-06,,
San Diego,2026-10-06,Tue,18:30,ESPN lists 9:30 PM ET (same time),game,NLDS Game 3: Brewers at Padres,San Diego Padres,Milwaukee Brewers,,MLB,pro,NLDS G3,Petco Park,stadium,,"playoff: NLDS G3; storyline: Brewers lead series 2-0 (Padres facing elimination); giveaway or theme night: commemorative rally towel for all fans",no,,confirmed,https://fox5sandiego.com/sports/padres/padres-brewers-nlds-guide/,2026-10-06,,
San Diego,2026-10-07,Wed,19:00,Played only if Padres win G3,game,NLDS Game 4: Brewers at Padres,San Diego Padres,Milwaukee Brewers,,MLB,pro,NLDS G4,Petco Park,stadium,,"playoff: NLDS G4; giveaway or theme night: rally towel",no,,if-necessary,https://fox5sandiego.com/sports/padres/padres-brewers-nlds-guide/,2026-10-06,,
San Diego,2026-10-07,Wed,18:30,Same campus and night as possible NLDS G4; no change announced as of check,show,Empire of the Sun: Ask That God: Afterlife with Midnight Generation and Polo & Pan,,,Empire of the Sun,electronic,,,Gallagher Square at Petco Park,grounds,1 night,,no,,confirmed,https://www.petcoparkinsider.com/concert-empire-sun,2026-10-06,,
San Diego,2026-10-09,Fri,16:00,Gates/event time per stadium page,festival,Niteharts (Day 1),,,ISOxo; Knock2; Porter Robinson; DJ Snake; RL Grime and more,electronic,,,Snapdragon Stadium,stadium,"day 1 of 3, Oct 9–11",,no,,confirmed,https://www.snapdragonstadium.com/events/detail/niteharts-2026,2026-10-06,,
San Diego,2026-10-09,Fri,19:30,Ticketmaster and SeatGeek agree,show,Jack Johnson: SURFILMUSIC Tour 2026 with Hermanos Gutiérrez,,,Jack Johnson,rock,,,North Island Credit Union Amphitheatre,amphitheater,1 night,,no,,confirmed,https://seatgeek.com/venues/north-island-credit-union-amphitheatre/tickets,2026-10-06,,
San Diego,2026-10-10,Sat,15:00,Event time per stadium page,festival,Niteharts (Day 2),,,ISOxo; Knock2 and lineup,electronic,,,Snapdragon Stadium,stadium,"day 2 of 3, Oct 9–11",,no,,confirmed,https://www.snapdragonstadium.com/events/detail/niteharts-2026,2026-10-06,,
San Diego,2026-10-10,Sat,18:00,,game,Gulls vs. Henderson Silver Knights,San Diego Gulls,Henderson Silver Knights,,AHL,lower,,Pechanga Arena San Diego,arena,,home opener,no,,confirmed,https://www.sandiegogulls.com/news/detail/san-diego-gulls-announce-2026-27-home-opener-july-8-2026,2026-10-06,,
San Diego,2026-10-10,Sat,20:30,Ticketmaster 20:30; SeatGeek lists 20:00,show,MANÁ: Vivir Sin Aire Tour,,,Maná,Latin,,,North Island Credit Union Amphitheatre,amphitheater,1 night,,no,,confirmed,https://www.ticketmaster.com/north-island-credit-union-amphitheatre-tickets-chula-vista/venue/82205,2026-10-06,,
San Diego,2026-10-11,Sun,14:00,Event time per stadium page,festival,Niteharts (Day 3),,,ISOxo; Knock2 and lineup,electronic,,,Snapdragon Stadium,stadium,"day 3 of 3, Oct 9–11",,no,,confirmed,https://www.snapdragonstadium.com/events/detail/niteharts-2026,2026-10-06,,
San Diego,2026-10-11,Sun,18:30,Aggregator listing time,show,"Taking Back Sunday, Thrice & Saves the Day",,,Taking Back Sunday; Thrice; Saves the Day,rock,,,Gallagher Square at Petco Park,grounds,1 night,,no,,confirmed,https://san-diego.events/venue/gallagher-square-at-petco-park/,2026-10-06,,
San Diego,2026-10-11,Sun,19:00,DoSD listing time,show,for KING + COUNTRY: The Most Beautiful Colours Tour,,,for KING + COUNTRY,Christian pop,,,The Rady Shell at Jacobs Park,amphitheater,1 night,,no,,confirmed,https://dosd.com/venues/the-rady-shell-at-jacobs-park,2026-10-06,,
San Diego,2026-10-11,Sun,22:00,Late-night show,show,Niteharts Presents: LATENITE,,,Niteharts lineup,electronic,,,Pechanga Arena San Diego,arena,1 night,,no,,confirmed,https://www.axs.com/venues/101206/pechanga-arena-san-diego-san-diego-tickets,2026-10-06,,
San Diego,2026-10-13,Tue,19:00,,show,SOMBR: You Are The Reason Tour 2026 with The Hellp and Tom Odell,,,SOMBR,pop,,,Pechanga Arena San Diego,arena,1 night,,no,,confirmed,https://www.axs.com/events/1405888/sombr-tickets,2026-10-06,,
San Diego,2026-10-13,Tue,19:00,Aggregator listing time,show,Geese,,,Geese,rock,,,Gallagher Square at Petco Park,grounds,1 night,,no,,confirmed,https://san-diego.events/venue/gallagher-square-at-petco-park/,2026-10-06,,
San Diego,2026-10-14,Wed,19:00,,game,Gulls vs. Ontario Reign,San Diego Gulls,Ontario Reign,,AHL,lower,,Pechanga Arena San Diego,arena,,,no,,confirmed,https://www.sandiegogulls.com/news/detail/san-diego-gulls-announce-2026-27-regular-season-schedule-july-9-2026,2026-10-06,,
San Diego,2026-10-14,Wed,19:30,,game,San Diego FC vs. Houston Dynamo FC,San Diego FC,Houston Dynamo FC,,MLS,pro,,Snapdragon Stadium,stadium,,,no,,confirmed,https://www.goal.com/en-my/news/san-diego-fc-tickets/blt0e1752f459c800b6,2026-10-06,,
San Diego,2026-10-14,Wed,20:00,Gates 19:00,show,"Charli XCX: Music, Fashion, Film Tour with Underscores",,,Charli XCX,pop,,,Viejas Arena,arena,1 night,,no,,confirmed,https://as.sdsu.edu/events/viejas,2026-10-06,,
San Diego,2026-10-14,Wed,,"Time TBA; only if Padres win NLDS; as a wild card Padres would host G3–G5",game,NLCS Game 3 (Padres home),San Diego Padres,TBD (Dodgers or Braves),,MLB,pro,NLCS G3,Petco Park,stadium,,playoff: NLCS G3,no,,if-necessary,https://dodgerblue.com/2026-mlb-postseason-schedule-wild-card-round-to-world-series-dates-tv-info/2026/08/10/,2026-10-06,,
San Diego,2026-10-15,Thu,,No start time found,show,Turnpike Troubadours,,,Turnpike Troubadours,country,,,Gallagher Square at Petco Park,grounds,1 night,,no,,confirmed,https://www.petcoparkinsider.com/petco-park-events,2026-10-06,,
San Diego,2026-10-15,Thu,,"Time TBA; only if Padres win NLDS",game,NLCS Game 4 (Padres home),San Diego Padres,TBD (Dodgers or Braves),,MLB,pro,NLCS G4,Petco Park,stadium,,playoff: NLCS G4,no,,if-necessary,https://dodgerblue.com/2026-mlb-postseason-schedule-wild-card-round-to-world-series-dates-tv-info/2026/08/10/,2026-10-06,,
San Diego,2026-10-16,Fri,,No start time found,show,G-Eazy and Logic with Juicy J,,,G-Eazy; Logic,hip-hop,,,North Island Credit Union Amphitheatre,amphitheater,1 night,,no,,confirmed,https://www.songkick.com/venues/69998-north-island-credit-union-amphitheatre/calendar,2026-10-06,,
San Diego,2026-10-16,Fri,19:00,DoSD listing time,show,MUNA: Gets So Hot Tour with Hemlocke Springs,,,MUNA,pop,,,The Rady Shell at Jacobs Park,amphitheater,1 night,,no,,confirmed,https://dosd.com/venues/the-rady-shell-at-jacobs-park,2026-10-06,,
San Diego,2026-10-16,Fri,,"Time TBA; only if Padres win NLDS and NLCS reaches G5",game,NLCS Game 5 (Padres home),San Diego Padres,TBD (Dodgers or Braves),,MLB,pro,NLCS G5,Petco Park,stadium,,playoff: NLCS G5,no,,if-necessary,https://dodgerblue.com/2026-mlb-postseason-schedule-wild-card-round-to-world-series-dates-tv-info/2026/08/10/,2026-10-06,,
San Diego,2026-10-17,Sat,13:00,SeatGeek time,game,Valparaiso at San Diego,San Diego Toreros,Valparaiso Beacons,,NCAA FB (FCS),college,,Torero Stadium,stadium,,,no,,confirmed,https://seatgeek.com/san-diego-toreros-football-tickets/schedule,2026-10-06,,
San Diego,2026-10-17,Sat,17:00,Doors 17:00 per Showclix; AXS lists 16:00; 18+,show,LED Presents: Sammy Virji,,,Sammy Virji,electronic,,,Gallagher Square at Petco Park,grounds,1 night,,no,,confirmed,https://events.leapevents.com/event/led-present-sammy-virji-at-gallagher-square-petco-park,2026-10-06,,
San Diego,2026-10-17,Sat,19:30,,game,Fresno State at San Diego State,San Diego State Aztecs,Fresno State Bulldogs,,NCAA FB,college,,Snapdragon Stadium,stadium,,"rivalry; storyline: SDSU Homecoming game",no,,confirmed,https://alumni.sdsu.edu/news/11531261,2026-10-06,,
San Diego,2026-10-17,Sat,,No start time found,show,Bonnie Raitt: Live 2026,,,Bonnie Raitt,blues,,,The Rady Shell at Jacobs Park,amphitheater,1 night,,no,,confirmed,https://www.songkick.com/venues/4406603-rady-shell-jacobs-park/calendar,2026-10-06,,
San Diego,2026-10-19,Mon,16:30,AXS posted time; may be doors rather than broadcast start,special,WWE Monday Night RAW,,,WWE,wrestling,pro,,Pechanga Arena San Diego,arena,1 night,,no,,confirmed,https://www.axs.com/venues/101206/pechanga-arena-san-diego-san-diego-tickets,2026-10-06,,
San Diego,2026-10-21,Wed,19:00,,game,Gulls vs. Coachella Valley Firebirds,San Diego Gulls,Coachella Valley Firebirds,,AHL,lower,,Pechanga Arena San Diego,arena,,,no,,confirmed,https://www.axs.com/venues/101206/pechanga-arena-san-diego-san-diego-tickets,2026-10-06,,
San Diego,2026-10-21,Wed,19:00,Gates 18:00,show,"Weezer: The Gathering with The Shins and Silversun Pickups",,,Weezer,rock,,,Viejas Arena,arena,1 night,,no,,confirmed,https://as.sdsu.edu/events/viejas,2026-10-06,,
San Diego,2026-10-21,Wed,19:00,Aggregator listing time,show,Foster the People: Good Mourning Sunshine Tour,,,Foster the People,pop,,,Gallagher Square at Petco Park,grounds,1 night,,no,,confirmed,https://san-diego.events/venue/gallagher-square-at-petco-park/,2026-10-06,,
San Diego,2026-10-22,Thu,20:00,Aggregator listing time; fan site misstates weekday as Tuesday,show,Juanes,,,Juanes,Latin,,,Gallagher Square at Petco Park,grounds,1 night,tour closer (per Petco Park Insider only),no,,confirmed,https://san-diego.events/venue/gallagher-square-at-petco-park/,2026-10-06,,
San Diego,2026-10-23,Fri,,Time TBA per SeatGeek,game,USC at San Diego State (exhibition),San Diego State Aztecs,USC Trojans,,NCAA MBB,college,,Viejas Arena,arena,,preseason,no,,confirmed,https://seatgeek.com/venues/viejas-arena-at-aztec-bowl/tickets,2026-10-06,,
San Diego,2026-10-23,Fri,,No start time found,show,Madeon with Contact Sports,,,Madeon,electronic,,,The Rady Shell at Jacobs Park,amphitheater,1 night,,no,,confirmed,https://www.songkick.com/venues/4406603-rady-shell-jacobs-park/calendar,2026-10-06,,
San Diego,2026-10-24,Sat,18:00,,game,Gulls vs. San Jose Barracuda,San Diego Gulls,San Jose Barracuda,,AHL,lower,,Pechanga Arena San Diego,arena,,,no,,confirmed,https://www.axs.com/venues/101206/pechanga-arena-san-diego-san-diego-tickets,2026-10-06,,
San Diego,2026-10-24,Sat,19:30,,game,San Diego FC vs. Seattle Sounders FC,San Diego FC,Seattle Sounders FC,,MLS,pro,,Snapdragon Stadium,stadium,,,no,,confirmed,https://www.goal.com/en-my/news/san-diego-fc-tickets/blt0e1752f459c800b6,2026-10-06,,
San Diego,2026-10-24,Sat,19:30,,show,Freestyle Explosion,,,Freestyle Explosion (multi-artist bill),dance,,,Frontwave Arena,arena,1 night,,no,,confirmed,https://www.tickpick.com/buy-freestyle-explosion-tickets-frontwave-arena-10-24-26-7pm/8097823/,2026-10-06,,
San Diego,2026-10-24,Sat,20:00,Gates 19:00,show,beabadoobee: The Powerlines Tour with Wisp,,,beabadoobee,rock,,,Viejas Arena,arena,1 night,,no,,confirmed,https://as.sdsu.edu/events/viejas,2026-10-06,,
San Diego,2026-10-24,Sat,20:00,Aggregator listing time,show,Malcolm Todd: Do That Again 2026 North America Tour,,,Malcolm Todd,pop,,,Gallagher Square at Petco Park,grounds,1 night,,no,,confirmed,https://san-diego.events/venue/gallagher-square-at-petco-park/,2026-10-06,,
San Diego,2026-10-25,Sun,16:00,,game,San Diego Wave FC vs. Boston Legacy FC,San Diego Wave FC,Boston Legacy FC,,NWSL,pro,,Snapdragon Stadium,stadium,,"storyline: Wave's final regular-season home match; Wave clinched 2026 playoff berth",no,,confirmed,https://sandiegowavefc.com/san-diego-wave-fc-announces-2026-regular-season-schedule/,2026-10-06,,
San Diego,2026-10-25,Sun,19:30,,show,Gorillaz: The Mountain Tour 2026 with Little Simz and Deltron 3030,,,Gorillaz,alternative,,,Pechanga Arena San Diego,arena,1 night,,no,,confirmed,https://www.ticketmaster.com/pechanga-arena-san-diego-tickets-san-diego/venue/360477,2026-10-06,,
San Diego,2026-10-25,Sun,20:00,Gates 19:00,show,"YG: The Gentlemen's Club Tour with Mozzy, Kalan.FrFr and more",,,YG,hip-hop,,,Viejas Arena,arena,1 night,,no,,confirmed,https://as.sdsu.edu/events/viejas,2026-10-06,,
San Diego,2026-10-27,Tue,19:30,Gates 18:30,show,Doja Cat: Tour Ma Vie World Tour with Latto,,,Doja Cat,pop,,,Viejas Arena,arena,1 night,,no,,confirmed,https://as.sdsu.edu/events/viejas,2026-10-06,,
San Diego,2026-10-27,Tue,,No start time found,show,Tom Jones,,,Tom Jones,pop,,,The Rady Shell at Jacobs Park,amphitheater,1 night,,no,,confirmed,https://www.songkick.com/venues/4406603-rady-shell-jacobs-park/calendar,2026-10-06,,
San Diego,2026-10-28,Wed,,Time TBA per SeatGeek,game,Long Beach State at San Diego State (exhibition),San Diego State Aztecs,Long Beach State,,NCAA MBB,college,,Viejas Arena,arena,,preseason,no,,confirmed,https://seatgeek.com/venues/viejas-arena-at-aztec-bowl/tickets,2026-10-06,,
San Diego,2026-10-30,Fri,19:00,Ticketmaster listing time,show,The B-52s * DEVO: Cosmic De-Evolution Tour,,,The B-52s; DEVO,new wave,,,North Island Credit Union Amphitheatre,amphitheater,1 night,,no,,confirmed,https://www.ticketmaster.com/north-island-credit-union-amphitheatre-tickets-chula-vista/venue/82205,2026-10-06,,
San Diego,2026-10-30,Fri,19:00,Aggregator listing time,show,"Knocked Loose & Denzel Curry with Superheaven and boundaries",,,Knocked Loose; Denzel Curry,metal,,,Gallagher Square at Petco Park,grounds,1 night,,no,,confirmed,https://fox5sandiego.com/san-diego-guide/things-to-do/san-diego-concerts-2026/,2026-10-06,,
San Diego,2026-10-30,Fri,20:00,Gates 19:00,show,Yandel: SINFÓNICO,,,Yandel,Latin,,,Viejas Arena,arena,1 night,,no,,confirmed,https://as.sdsu.edu/events/viejas,2026-10-06,,
San Diego,2026-10-31,Sat,13:00,SeatGeek time,game,Marist at San Diego,San Diego Toreros,Marist Red Foxes,,NCAA FB (FCS),college,,Torero Stadium,stadium,,,no,,confirmed,https://seatgeek.com/san-diego-toreros-football-tickets/schedule,2026-10-06,,
San Diego,2026-10-31,Sat,16:00,,game,Washington State at San Diego State,San Diego State Aztecs,Washington State Cougars,,NCAA FB,college,,Snapdragon Stadium,stadium,,,no,,confirmed,https://en.wikipedia.org/wiki/2026_San_Diego_State_Aztecs_football_team,2026-10-06,,
San Diego,2026-10-31,Sat,17:00,Resale listing time; 3-hour Halloween set,show,LED Presents: Chris Stussy,,,Chris Stussy,electronic,,,Gallagher Square at Petco Park,grounds,1 night,,no,,confirmed,https://www.petcoparkinsider.com/concert-chris-stussy,2026-10-06,,
San Diego,2026-10-31,Sat,18:00,,game,Gulls vs. Henderson Silver Knights,San Diego Gulls,Henderson Silver Knights,,AHL,lower,,Pechanga Arena San Diego,arena,,,no,,confirmed,https://www.axs.com/venues/101206/pechanga-arena-san-diego-san-diego-tickets,2026-10-06,,
```

### 3. Crowd events with no venue
```csv
city,date,start_local,end_local,name,route_or_area,expected_crowd,crowd_kind,announced_closures,source_url
San Diego,2026-10-02,16:00,22:00,La Mesa Oktoberfest (Day 1),"La Mesa Village, along La Mesa Blvd (La Mesa Blvd trolley station)","100,000+ over 3 days (organizer estimate, Times of San Diego; Axios ~100,000)",street festival,,https://www.kpbs.org/events/ongoing/la-mesa-oktoberfest-2026
San Diego,2026-10-03,10:00,22:00,La Mesa Oktoberfest (Day 2),"La Mesa Village, along La Mesa Blvd","100,000+ over 3 days (organizer estimate)",street festival,,https://www.axios.com/local/san-diego/2026/10/02/la-mesa-oktoberfest-pumpkin-patch-hop-house-dog-races
San Diego,2026-10-04,12:00,20:00,La Mesa Oktoberfest (Day 3),"La Mesa Village, along La Mesa Blvd","100,000+ over 3 days (organizer estimate)",street festival,,https://www.axios.com/local/san-diego/2026/10/02/la-mesa-oktoberfest-pumpkin-patch-hop-house-dog-races
```

### 4. Day-by-day check
All rows checked: Padres/MLB postseason; Petco and Gallagher Square; Snapdragon (SDSU FB, SDFC, Wave, stadium events page); Pechanga (AXS); Viejas (A.S. SDSU); NICUA (Songkick and Ticketmaster); Rady Shell (Songkick and DoSD); Frontwave (Songkick); Torero (USD FB). Counts include the no-venue table.

| Date | Found | Note |
|---|---|---|
| Oct 1 | 0 | Padres swept the Wild Card Sept 30, so no G3; Viejas past dates not visible |
| Oct 2 | 3 | |
| Oct 3 | 6 | |
| Oct 4 | 2 | |
| Oct 5 | 0 | NLDS G2 was in Milwaukee Oct 4 |
| Oct 6 | 1 | |
| Oct 7 | 2 | |
| Oct 8 | 0 | |
| Oct 9 | 2 | |
| Oct 10 | 3 | |
| Oct 11 | 4 | |
| Oct 12 | 0 | |
| Oct 13 | 2 | |
| Oct 14 | 4 | 1 if-necessary |
| Oct 15 | 2 | 1 if-necessary |
| Oct 16 | 3 | 1 if-necessary |
| Oct 17 | 4 | |
| Oct 18 | 0 | NLCS G6 would be away |
| Oct 19 | 1 | |
| Oct 20 | 0 | |
| Oct 21 | 3 | |
| Oct 22 | 1 | |
| Oct 23 | 2 | |
| Oct 24 | 5 | |
| Oct 25 | 3 | |
| Oct 26 | 0 | |
| Oct 27 | 2 | |
| Oct 28 | 1 | |
| Oct 29 | 0 | |
| Oct 30 | 3 | |
| Oct 31 | 4 | |

### Couldn't confirm (model's list)
- World Series at Petco (Oct 23–31): home field unknown.
- Little Italy Festa: "mid-October" in a guide; no official 2026 date; typically ~100,000.
- Rady Shell Mariachi Festival 2026: listed, no date.
- Frontwave Arena Oct 31: an event shows, act unknown.
- Pacific Festival/Beachfest (Oct 3), OB Oktoberfest (Oct 9–10), Mission Bayfest (Oct 16–18), Del Mar Wine + Food Grand Tasting (Oct 3–4): listings only, no crowd figures.
- La Mesa Oktoberfest closures: Times of San Diego reports Village closures from 2 pm Thu Oct 1; no official notice found.
- Fleet Week: listings show Nov 6–15; left out.
- Oct 1–5 results and attendance: USD–Davidson score, SDSU–Texas State attendance, concerts.

### Pages that wouldn't load (model's list)
- Ticketmaster, NICUA venue page (bot detection): full October list and times for G-Eazy/Logic and Hayley Williams.
- delmarfairgrounds.com/events (empty without JavaScript).
- Gulls printable schedule PDF (garbled; resolved via AXS).
- as.sdsu.edu/events/viejas shows upcoming only, so Oct 1–5 not visible.

### Open questions (model's list)
- Gallagher Square as its own venue on the Petco campus; capacity about 6,000 (Padres: 2,000–10,000).
- Rady Shell "10,000-seat"; seated shows may be under 5,000.
- Torero Stadium about 6,000 and FCS crowds may be far below; SDSU basketball exhibitions may be under 5,000.
- Frontwave (Oceanside) and NICUA (Chula Vista) are in the county, so included.
- Pechanga capacities and most coordinates and walk times are estimates.
- Padres would host NLCS G3–G5 as a wild card.

## Claude's check (Oct 6, 2026)
Spot-checked against sources, all match: NLDS G3 Tue Oct 6, 6:30 pm PT at Petco, Brewers lead 2–0 (Fox, MLB.com, ESPN); the 2026 NLCS and World Series calendar (Dodger Blue); SDSU–Texas State Oct 3, 7:30, the first Pac-12 game for both (goaztecs.com); SDSU–Fresno State Oct 17, 7:30, Homecoming, and SDSU–Washington State Oct 31, 4:00 (SDSU alumni and goaztecs.com, so the Wikipedia-only row now has an official source); San Diego FC Oct 14 and Oct 24, 7:30 (Goal); all six Viejas concerts and their times (A.S. SDSU); twelve Gallagher Square concerts in October, the same count Times of San Diego reports. Capacities: Rady Shell up to 10,000 (flexible), Gallagher Square about 6,000, Torero Stadium 6,000, Frontwave Arena 7,500 (6,000 for basketball).

Ticketmaster pages Kylie sent (fetched normally, Oct 6):
- **North Island Credit Union Amphitheatre** lists five October shows still ahead: Jack Johnson Oct 9 7:30, Maná Oct 10 8:30, Logic & G-Eazy (The Endless Summer Tour Part II, with Juicy J) Oct 16 **7:00**, **Bryson Tiller Presents: The Neo Trapsoul Tour (with Ty Dolla $ign, Majid Jordan, Austin Millz) Sat Oct 24, 7:30, missing from the model's list; add it**, and The B-52s and Devo Oct 30 7:00. Past shows (Oct 2–4) are no longer listed, so Hayley Williams on Oct 3 still has no start time.
- **Del Mar Fairgrounds** (Ticketmaster venue 81980): no October 2026 events; the next listing is Jurassic Quest, Jan 15–18, 2027. Ticketmaster may not carry every fairgrounds event, so this is likely but not certain.

Watch: a residents' noise lawsuit over Gallagher Square concerts goes to trial Oct 16, 2026 (Times of San Diego, Sept 4). No injunction as of that report; recheck Oct 17–31 Gallagher shows before seeding.

## Kylie's calls (Oct 6, 2026)
- Borderline rooms (Torero, SDSU exhibitions, Rady Shell seated shows, Gallagher Square): keep them; check past attendance before seeding.
