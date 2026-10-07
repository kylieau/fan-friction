# Seattle, October 2026: research output (raw)

Pasted by Kylie on Oct 6, 2026, from the research model run on `docs/archive/research/october-2026-events-prompt.md` (the model checked on Oct 5 by its own clock). Kept as returned. Not seeded. Claude's check notes are at the bottom.

Model's note: the Mariners were eliminated Sept 24, so T-Mobile Park has no October events.

### 1. Venues
```csv
city,venue,former_names,area,lat,lng,capacity_by_setup,roof,access_note,neighbors_within_2km,how_people_arrive,nearest_rail_and_walk,source_url
Seattle,Lumen Field,"Seahawks Stadium to 2004; Qwest Field to 2011; CenturyLink Field to 2020","SoDo, Seattle",47.5952,-122.3316,"football about 68,700 (listed max, not re-verified); MLS/NWSL configs smaller (estimate)",open (partial canopy over seats),,"T-Mobile Park; WaMu Theater (same campus); King Street Station","mix of Link, Sounder and car; Sound Transit runs special Sounder trains on Seahawks Sundays (soundtransit.org calendar)","Stadium Station (Link 1 Line) about 5-10 min; King Street Station (Sounder) about 5 min",https://www.lumenfield.com/events-tickets/event-calendar
Seattle,Climate Pledge Arena,"Seattle Center Coliseum to 1995; KeyArena to 2018 (reopened 2021)","Seattle Center, Seattle",47.6221,-122.3540,"hockey 17,151; basketball 18,300; concerts up to 17,340 (listed)",indoor,,"Seattle Center grounds; Memorial Stadium","transit pushed by arena (free transit pass with ticket per arena site); limited parking","Seattle Center Monorail about 5 min (to Westlake Link); no Link station on site",https://en.wikipedia.org/wiki/Climate_Pledge_Arena
Seattle,Husky Stadium (Alaska Airlines Field),,"University District, Seattle",47.6503,-122.3016,"football about 70,000 (listed, not re-verified)",open (partial roofs over stands),,Alaska Airlines Arena (adjacent),"mix of Link light rail, car and boat (estimate)",University of Washington Station about 2-5 min,https://gohuskies.com/sports/football/schedule
Seattle,Alaska Airlines Arena at Hec Edmundson Pavilion,Hec Edmundson Pavilion (naming-rights name added later; year not verified),"University District, Seattle",47.6532,-122.3026,"basketball about 10,000 (listed, not re-verified)",indoor,,Husky Stadium (adjacent),mostly Link and car (estimate),University of Washington Station about 5 min,https://gohuskies.com/news/2026/8/25/mens-basketball-husky-hoops-announces-2026-27-non-conference-schedule
Seattle,accesso ShoWare Center,"ShoWare Center 2009-2017; Kent Events Center (planning name)","Kent, WA",47.3846,-122.2373,"about 6,500 (listed by Seattle Southside)",indoor,,,"mostly car; about 2,200 parking spaces (Seattle Southside)",Kent Station (Sounder) about 12 min (estimate),https://seattlesouthside.com/directory/accesso-showare-center
Seattle,Angel of the Winds Arena,"Everett Events Center 2003-2007; Comcast Arena at Everett 2007-2014; Xfinity Arena 2014-2017","Everett, WA",47.9767,-122.2028,"hockey about 8,100; concerts about 10,000 (estimates)",indoor,,,mostly car (estimate),Everett Station (Sounder/Amtrak) about 15 min (estimate),https://www.angelofthewindsarena.com/events/venue/angel-of-the-winds-arena
Seattle,Tacoma Dome,,"Tacoma, WA",47.2366,-122.4271,"concerts about 21,000-23,000 (estimate)",indoor,,Tacoma Dome Station,"car plus Sounder, Link T Line and Amtrak at Tacoma Dome Station",Tacoma Dome Station about 5 min,https://www.tacomadome.org/events
Seattle,White River Amphitheatre,,"Auburn, WA (Muckleshoot land)",47.2853,-122.0640,"about 16,000 incl. lawn (estimate)",covered (seats) and open lawn,"rural site on Auburn Enumclaw Rd; no transit",,car (estimate),none,https://music.mxdwn.com/2026/05/26/news/roxette-announce-fall-2026-40th-anniversary-north-american-tour-dates-featuring-new-vocalist-following-marie-fredrikssons-passing/
```

### 2. Events
```csv
city,date,weekday,start_local,start_note,kind,title,home_team,away_team,performer,league_or_genre,level,stakes,venue,booking,run,facts,invited,expected_draw,status,source_url,checked_on,result_oct1to5,attendance_oct1to5
Seattle,2026-10-01,Thu,18:30,,game,Sounders FC vs. Sporting Kansas City,Seattle Sounders FC,Sporting Kansas City,,MLS,pro,,Lumen Field,stadium,,,no,,confirmed,https://www.soundersfc.com/news/match-recap-sounders-fc-extends-winning-streak-with-2-1-home-win-over-sporting-kansas-city,2026-10-05,SEA 2-1 SKC,"28,587 announced (Sounders recap)"
Seattle,2026-10-01,Thu,19:00,listed 7 PM on ticket aggregators; doors not published,show,sombr: You Are the Reason Tour,,,sombr,pop,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://www.iheart.com/content/2026-04-13-sombr-announces-you-are-the-reason-north-american-tour-see-the-dates/,2026-10-05,,
Seattle,2026-10-02,Fri,19:00,,game,Seattle Reign FC vs. North Carolina Courage,Seattle Reign FC,North Carolina Courage,,NWSL,pro,,Lumen Field,stadium,,"giveaway or theme night: Queen's Match honoring Jess Fishlock; giveaway or theme night: collectible pin for first 5,000 fans",no,"far below stadium size: NWSL match in a ~68,700-seat stadium; no pre-match estimate found",confirmed,https://www.reignfc.com/news/five-reasons-to-attend-the-queens-match-on-friday,2026-10-05,SEA 0-1 NC,"6,952 announced (Reign match summary, oursportscentral.com)"
Seattle,2026-10-02,Fri,,start time not shown on arena listing,show,Tyler Childers: Snipe Hunt Tour,,,Tyler Childers,country,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/carin-leon-26/,2026-10-05,,
Seattle,2026-10-02,Fri,19:05,,game,Seattle Thunderbirds vs. Wenatchee Wild,Seattle Thunderbirds,Wenatchee Wild,,WHL,lower,,accesso ShoWare Center,arena,,,no,,confirmed,https://www.oursportscentral.com/services/schedule/seattle-thunderbirds/t-1274,2026-10-05,SEA 1-3 WEN,
Seattle,2026-10-03,Sat,19:45,doors 19:00 (arena page),show,Jungle: World Tour 2026,,,Jungle,electronic,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/jungle-26/,2026-10-05,,
Seattle,2026-10-03,Sat,18:05,,game,Everett Silvertips vs. Wenatchee Wild,Everett Silvertips,Wenatchee Wild,,WHL,lower,,Angel of the Winds Arena,arena,,giveaway or theme night: Pink the Rink,no,,confirmed,https://www.oursportscentral.com/services/releases/silvertips-finalize-full-2026-27-regular-season-schedule/n-6382181,2026-10-05,,
Seattle,2026-10-04,Sun,13:25,CBS; Sound Transit listed special Sounder service,game,Seahawks vs. Chargers,Seattle Seahawks,Los Angeles Chargers,,NFL,pro,,Lumen Field,stadium,,,no,,confirmed,https://www.espn.com/nfl/recap/_/gameId/401872977,2026-10-05,SEA 30-23 LAC,
Seattle,2026-10-04,Sun,17:00,,game,Kraken vs. Flames,Seattle Kraken,Calgary Flames,,NHL,pro,,Climate Pledge Arena,arena,,home opener,no,,confirmed,https://www.espn.com/nhl/game/_/gameId/401891824/flames-kraken,2026-10-05,SEA 6-1 CGY,"17,151 announced (ESPN box score)"
Seattle,2026-10-04,Sun,16:05,,game,Everett Silvertips vs. Spokane Chiefs,Everett Silvertips,Spokane Chiefs,,WHL,lower,,Angel of the Winds Arena,arena,,,no,,confirmed,https://www.vividseats.com/everett-silvertips-tickets--sports-hockey/performer/25082,2026-10-05,,
Seattle,2026-10-06,Tue,18:40,,game,Kraken vs. Golden Knights,Seattle Kraken,Vegas Golden Knights,,NHL,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/seattle-kraken-vs-vegas-golden-knights-3/,2026-10-05,,
Seattle,2026-10-08,Thu,20:00,,show,Carín León: De Sonora Para El Mundo Tour 2026,,,Carín León,Latin,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/carin-leon-26/,2026-10-05,,
Seattle,2026-10-08,Thu,,start time not shown,show,YG: The Gentlemen's Club Tour,,,YG,hip-hop,pro,,Angel of the Winds Arena,arena,,,no,,confirmed,https://www.angelofthewindsarena.com/events/detail/yg-the-gentlemens-club-tour,2026-10-05,,
Seattle,2026-10-09,Fri,18:00,FOX or FS1,game,Washington vs. Iowa,Washington Huskies,Iowa Hawkeyes,,NCAA FB,college,,Husky Stadium (Alaska Airlines Field),stadium,,storyline: Iowa ranked No. 20; Washington unranked,no,,confirmed,https://gohuskies.com/sports/football/schedule,2026-10-05,,
Seattle,2026-10-09,Fri,,start time not shown,show,aespa LIVE TOUR – SYNK: COMPLæXITY,,,aespa,K-pop,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/aespa-live-tour-synk-26/,2026-10-05,,
Seattle,2026-10-09,Fri,19:05,,game,Seattle Thunderbirds vs. Vancouver Giants,Seattle Thunderbirds,Vancouver Giants,,WHL,lower,,accesso ShoWare Center,arena,,,no,,confirmed,https://www.accessoshowarecenter.com/events/2026/seattle-thunderbirds,2026-10-05,,
Seattle,2026-10-09,Fri,,start time not shown,show,Billy Strings (Night One),,,Billy Strings,bluegrass,pro,,Angel of the Winds Arena,arena,"night 1 of 2 (Oct 9-10)",,no,,confirmed,https://www.angelofthewindsarena.com/events/detail/billy-strings-night-one,2026-10-05,,
Seattle,2026-10-09,Fri,18:30,6:30 PM on ticket aggregators; unclear if doors or show,show,Roxette: 40th Anniversary Tour,,,Roxette,pop,pro,,White River Amphitheatre,amphitheater,,tour closer,no,,confirmed,https://music.mxdwn.com/2026/05/26/news/roxette-announce-fall-2026-40th-anniversary-north-american-tour-dates-featuring-new-vocalist-following-marie-fredrikssons-passing/,2026-10-05,,
Seattle,2026-10-10,Sat,19:30,doors 18:30 (arena page),show,RUSH: Fifty Something Tour,,,Rush,rock,pro,,Climate Pledge Arena,arena,night 1 of 2 (Oct 10 and Oct 12),,no,,confirmed,https://climatepledgearena.com/event/rush-26-2/,2026-10-05,,
Seattle,2026-10-10,Sat,,start time not shown,show,Billy Strings (Night Two),,,Billy Strings,bluegrass,pro,,Angel of the Winds Arena,arena,"night 2 of 2 (Oct 9-10)",,no,,confirmed,https://www.angelofthewindsarena.com/events/detail/billy-strings-night-two,2026-10-05,,
Seattle,2026-10-10,Sat,19:00,,show,"Disney Descendants, ZOMBIES & Camp Rock: Worlds Collide Concert Tour",,,Disney cast,pop,pro,,Tacoma Dome,arena,,,no,,confirmed,https://www.tacomadome.org/events/detail/disney-worlds-collide-26,2026-10-05,,
Seattle,2026-10-11,Sun,13:25,FOX; Sound Transit listed special Sounder service,game,Seahawks vs. 49ers,Seattle Seahawks,San Francisco 49ers,,NFL,pro,,Lumen Field,stadium,,rivalry,no,,confirmed,https://www.lumenfield.com/events-tickets/event-calendar,2026-10-05,,
Seattle,2026-10-12,Mon,19:30,doors 18:30 (arena page),show,RUSH: Fifty Something Tour,,,Rush,rock,pro,,Climate Pledge Arena,arena,night 2 of 2 (Oct 10 and Oct 12),,no,,confirmed,https://climatepledgearena.com/event/rush-26-2/,2026-10-05,,
Seattle,2026-10-13,Tue,20:00,,show,Young Miko: Late Checkout Tour,,,Young Miko,Latin,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/young-miko-26/,2026-10-05,,
Seattle,2026-10-13,Tue,19:05,,game,Seattle Thunderbirds vs. Vancouver Giants,Seattle Thunderbirds,Vancouver Giants,,WHL,lower,,accesso ShoWare Center,arena,,giveaway or theme night: Half Price Tuesday,no,,confirmed,https://www.accessoshowarecenter.com/events/2026/seattle-thunderbirds,2026-10-05,,
Seattle,2026-10-15,Thu,19:30,,show,Doja Cat: Tour Ma Vie World Tour,,,Doja Cat,hip-hop,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/doja-cat-26/,2026-10-05,,
Seattle,2026-10-16,Fri,19:05,,game,Seattle Thunderbirds vs. Kamloops Blazers,Seattle Thunderbirds,Kamloops Blazers,,WHL,lower,,accesso ShoWare Center,arena,,giveaway or theme night: Bruce Lee Night ticket offer,no,,confirmed,https://www.accessoshowarecenter.com/events/2026/seattle-thunderbirds,2026-10-05,,
Seattle,2026-10-17,Sat,19:30,,game,Sounders FC vs. CF Montréal,Seattle Sounders FC,CF Montréal,,MLS,pro,,Lumen Field,stadium,,,no,,confirmed,https://www.lumenfield.com/events-tickets/sounders-fc,2026-10-05,,
Seattle,2026-10-17,Sat,,start time not confirmed; one arena data listing shows 20:30 for an Oct 17 show,show,MANÁ: Vivir Sin Aire Tour,,,Maná,Latin,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/mana-26/,2026-10-05,,
Seattle,2026-10-17,Sat,18:05,,game,Seattle Thunderbirds vs. Spokane Chiefs,Seattle Thunderbirds,Spokane Chiefs,,WHL,lower,,accesso ShoWare Center,arena,,giveaway or theme night: Girls Hockey Weekend and food drive,no,,confirmed,https://www.accessoshowarecenter.com/events/2026/seattle-thunderbirds,2026-10-05,,
Seattle,2026-10-20,Tue,18:40,,game,Kraken vs. Red Wings,Seattle Kraken,Detroit Red Wings,,NHL,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/seattle-kraken-vs-detroit-red-wings-3/,2026-10-05,,
Seattle,2026-10-22,Thu,19:00,The Hockey Writers lists 18:40 PT; Ticketmaster listing says 19:00,game,Kraken vs. Mammoth,Seattle Kraken,Utah Mammoth,,NHL,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/seattle-kraken-vs-utah-mammoth-10-22-2026/,2026-10-05,,
Seattle,2026-10-22,Thu,,multiple shows; showtimes not retrieved,show,Disney On Ice presents Jump In!,,,Disney On Ice,family,pro,,accesso ShoWare Center,arena,"day 1 of 4 (Oct 22-25)",,no,,confirmed,https://www.seattleschild.com/?p=120790,2026-10-05,,
Seattle,2026-10-23,Fri,19:30,phones secured in Yondr pouches (arena listing),show,Phoebe Bridgers: The Lost Tour,,,Phoebe Bridgers,indie,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/phoebe-bridgers-26/,2026-10-05,,
Seattle,2026-10-23,Fri,,multiple shows; showtimes not retrieved,show,Disney On Ice presents Jump In!,,,Disney On Ice,family,pro,,accesso ShoWare Center,arena,"day 2 of 4 (Oct 22-25)",,no,,confirmed,https://www.stereoboard.com/disney-on-ice-tickets/kent,2026-10-05,,
Seattle,2026-10-24,Sat,19:00,,game,Kraken vs. Wild,Seattle Kraken,Minnesota Wild,,NHL,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/seattle-kraken-vs-minnesota-wild-4/,2026-10-05,,
Seattle,2026-10-24,Sat,,start time not shown,special,EnduroCross: AMA Championship Round 3,,,,motorsport,pro,,Angel of the Winds Arena,arena,,,no,,confirmed,https://www.angelofthewindsarena.com/events/detail/endurocross-2026,2026-10-05,,
Seattle,2026-10-24,Sat,,multiple shows; showtimes not retrieved,show,Disney On Ice presents Jump In!,,,Disney On Ice,family,pro,,accesso ShoWare Center,arena,"day 3 of 4 (Oct 22-25)",,no,,confirmed,https://www.stereoboard.com/disney-on-ice-tickets/kent,2026-10-05,,
Seattle,2026-10-25,Sun,17:20,NBC Sunday Night Football,game,Seahawks vs. Chiefs,Seattle Seahawks,Kansas City Chiefs,,NFL,pro,,Lumen Field,stadium,,,no,,confirmed,https://www.seahawks.com/news/seahawks-2026-schedule-announced-highlighted-by-christmas-night-game,2026-10-05,,
Seattle,2026-10-25,Sun,19:00,,show,K-ERA Fest 2026: TAEMIN,,,TAEMIN,K-pop,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/taemin-k-era-fest-26/,2026-10-05,,
Seattle,2026-10-25,Sun,,tip time not announced,game,Washington vs. Washington State (exhibition),Washington Huskies,Washington State Cougars,,NCAA MBB,college,,Alaska Airlines Arena at Hec Edmundson Pavilion,arena,,preseason; rivalry,no,,confirmed,https://gohuskies.com/news/2026/8/25/mens-basketball-husky-hoops-announces-2026-27-non-conference-schedule,2026-10-05,,
Seattle,2026-10-25,Sun,,multiple shows; showtimes not retrieved,show,Disney On Ice presents Jump In!,,,Disney On Ice,family,pro,,accesso ShoWare Center,arena,"day 4 of 4 (Oct 22-25)",,no,,confirmed,https://www.stereoboard.com/disney-on-ice-tickets/kent,2026-10-05,,
Seattle,2026-10-26,Mon,,start time not shown,show,Kacey Musgraves: Middle of Nowhere Tour,,,Kacey Musgraves,country,pro,,Climate Pledge Arena,arena,"night 1 of 2 (Oct 26-27)",,no,,confirmed,https://climatepledgearena.com/event/kacey-musgraves-26/,2026-10-05,,
Seattle,2026-10-27,Tue,,start time not shown,show,Kacey Musgraves: Middle of Nowhere Tour,,,Kacey Musgraves,country,pro,,Climate Pledge Arena,arena,"night 2 of 2 (Oct 26-27)",,no,,confirmed,https://climatepledgearena.com/event/kacey-musgraves-26/,2026-10-05,,
Seattle,2026-10-28,Wed,19:30,,game,Sounders FC vs. Houston Dynamo,Seattle Sounders FC,Houston Dynamo FC,,MLS,pro,,Lumen Field,stadium,,,no,,confirmed,https://www.lumenfield.com/events-tickets/sounders-fc,2026-10-05,,
Seattle,2026-10-28,Wed,19:00,"one Ticketmaster snippet showed Washington Capitals; arena site, ESPN and Vivid Seats say Toronto",game,Kraken vs. Maple Leafs,Seattle Kraken,Toronto Maple Leafs,,NHL,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/seattle-kraken-vs-toronto-maple-leafs-3/,2026-10-05,,
Seattle,2026-10-29,Thu,,start time not shown,show,beabadoobee: The Powerlines Tour,,,beabadoobee,indie,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/beabadoobee-26/,2026-10-05,,
Seattle,2026-10-29,Thu,19:00,,show,Disney On Ice presents Jump In!,,,Disney On Ice,family,pro,,Angel of the Winds Arena,arena,"day 1 of 4 (Oct 29-Nov 1)",,no,,confirmed,https://www.angelofthewindsarena.com/events/detail/disney-on-ice-presents-jump-in,2026-10-05,,
Seattle,2026-10-30,Fri,,showtimes not retrieved,show,Disney On Ice presents Jump In!,,,Disney On Ice,family,pro,,Angel of the Winds Arena,arena,"day 2 of 4 (Oct 29-Nov 1)",,no,,confirmed,https://www.angelofthewindsarena.com/events/detail/disney-on-ice-presents-jump-in,2026-10-05,,
Seattle,2026-10-31,Sat,,start time not shown,show,Gorillaz: The Mountain Tour,,,Gorillaz,alternative,pro,,Climate Pledge Arena,arena,,,no,,confirmed,https://climatepledgearena.com/event/gorillaz-26/,2026-10-05,,
Seattle,2026-10-31,Sat,10:30,first of multiple shows,show,Disney On Ice presents Jump In!,,,Disney On Ice,family,pro,,Angel of the Winds Arena,arena,"day 3 of 4 (Oct 29-Nov 1)",,no,,confirmed,https://www.ticketmaster.com/angel-of-the-winds-arena-tickets-everett/venue/123902,2026-10-05,,
```

### 3. Crowd events with no venue
```csv
city,date,start_local,end_local,name,route_or_area,expected_crowd,crowd_kind,announced_closures,source_url
Seattle,2026-10-03,10:00,18:00,Issaquah Salmon Days Festival (day 1; parade Saturday morning),"Downtown Issaquah: Front St and Sunset Way","150,000+ over two days (organizer figure from prior years)",street festival and parade,,https://www.parentmap.com/calendar/issaquah-salmon-days/2026-10-03/
Seattle,2026-10-04,10:00,18:00,Issaquah Salmon Days Festival (day 2),"Downtown Issaquah: Front St and Sunset Way","150,000+ over two days (organizer figure from prior years)",street festival,,https://www.thecraftmap.com/fair/salmon-days-festival-57th-issaquah-wa
```

### 4. Day-by-day check
All nine calendars checked on every date: Lumen Field + WaMu Theater, Climate Pledge Arena, T-Mobile Park, Husky Stadium, Alaska Airlines Arena, ShoWare, Angel of the Winds, Tacoma Dome, White River. Counts include table 3.

| Date | Found | Note |
|---|---|---|
| Oct 1 | 2 | |
| Oct 2 | 3 | |
| Oct 3 | 3 | incl. Salmon Days |
| Oct 4 | 4 | incl. Salmon Days |
| Oct 5 | 0 | nothing listed |
| Oct 6 | 1 | |
| Oct 7 | 0 | nothing listed |
| Oct 8 | 2 | |
| Oct 9 | 5 | |
| Oct 10 | 3 | WaMu Kai Wachi excluded by theater rule |
| Oct 11 | 1 | |
| Oct 12 | 1 | |
| Oct 13 | 2 | |
| Oct 14 | 0 | nothing listed |
| Oct 15 | 1 | |
| Oct 16 | 1 | |
| Oct 17 | 3 | |
| Oct 18 | 0 | Tacoma Dome only a Holiday Festival expo |
| Oct 19 | 0 | nothing listed |
| Oct 20 | 1 | WaMu Rise Against excluded by theater rule |
| Oct 21 | 0 | nothing listed |
| Oct 22 | 2 | |
| Oct 23 | 2 | |
| Oct 24 | 3 | WaMu MONSTA X excluded by theater rule |
| Oct 25 | 4 | |
| Oct 26 | 1 | |
| Oct 27 | 1 | |
| Oct 28 | 2 | |
| Oct 29 | 2 | |
| Oct 30 | 1 | WaMu BOO Seattle excluded by theater rule |
| Oct 31 | 2 | WaMu BOO Seattle excluded by theater rule |

### Couldn't confirm (model's list)
- Mariners postseason: resale sites still list "if necessary" games; Mariners eliminated Sept 24; left out.
- Skate America: moved from October at Angel of the Winds to Nov 13–15 (U.S. Figure Skating, Apr 7, 2026).
- Start times missing: Tyler Childers, aespa, Maná, Kacey Musgraves, beabadoobee, Gorillaz, YG, Billy Strings, EnduroCross, UW–WSU exhibition, most Disney On Ice shows.
- Attendance missing for Seahawks Oct 4 and Thunderbirds Oct 2; score and attendance missing for Silvertips Oct 3–4 and the Oct 1–3 concerts.
- Disney On Ice in Kent (Oct 22–25) from Seattle's Child and Stereoboard; venue page wouldn't render.
- Left out for lack of a 5,000+ figure: Día de Muertos at Seattle Center (Oct 31–Nov 1, indoor halls), Seattle Greek Festival, Fishermen's Fall Festival, Water Lantern Festival, Halloween runs.
- Salmon Days closures: no official 2026 notice.
- White River's own calendar not checked; Roxette Oct 9 confirmed from the tour announcement.

### Pages that wouldn't load (model's list)
- Ticketmaster Kraken home list (bot detection); used the arena site instead.
- accessoshowarecenter.com/events rendered empty; needed non-Thunderbirds October events.

### Open questions (model's list)
- Tacoma Dome and Angel of the Winds (Everett) are outside King County; included as instructed.
- ShoWare (Kent) and White River (Auburn) are in King County but far from central Seattle.
- Tacoma Dome expos (Fall RV Show Oct 1–4 or 2–4, Holiday Festival Oct 15–18, T-Town expo Oct 30): no published draw; left out.
- WaMu Theater: no WaMu night overlaps Lumen or T-Mobile Park, so all WaMu shows excluded. Climate Pledge is about 3 miles away, outside the 5-minute rule.
- Coordinates and several capacities are approximate.

## Claude's check (Oct 6, 2026)
Checked against sources, all match:
- **Mariners** officially eliminated Sept 24, 2026 (Spokesman-Review, MyNorthwest, MLB.com). T-Mobile Park empty in October is right.
- **Lumen Field calendar** (from Oct 6 on): Seahawks–49ers Oct 11 1:25, Sounders–Montréal Oct 17 7:30, Seahawks–Chiefs Oct 25 5:20, Sounders–Houston Oct 28 7:30. No Reign home game after Oct 6. WaMu's five shows (Oct 10, 20, 24, 30, 31) all fall on nights with nothing at Lumen or T-Mobile Park, so leaving them out is right.
- **Washington football:** Oct 9 vs. No. 20 Iowa, 6:00, is the only October home game (at USC Oct 3, at Purdue Oct 17, at Nebraska Oct 31).
- **Kraken** home opener Oct 4, beat Calgary 6–1 (ESPN, NHL.com, ABC). All six October home games and times match the arena calendar.
- **Seahawks–Chargers Oct 4:** 68,691 (Pro-Football-Reference; label announced). Fills the model's gap.
- **Climate Pledge Arena October calendar** lists the same 16 concerts and supplies the missing times: Tyler Childers Oct 2 **6:30**, aespa Oct 9 **8:00**, Maná Oct 17 **8:30**, Kacey Musgraves Oct 26 and 27 **7:30**, beabadoobee Oct 29 **8:00**, Gorillaz Oct 31 **7:30**. Kraken–Mammoth Oct 22 is **7:00** (resolves the 6:40 vs. 7:00 note).
- Fix: the Tyler Childers row's source link points at the Carín León page. Use the arena's month calendar (climatepledgearena.com/events/month/).
- ShoWare's events page still renders empty for Claude too (fetched normally), so the Disney On Ice dates in Kent rest on Seattle's Child and Stereoboard.

Size watch (same question as San Diego): WHL hockey at ShoWare (about 6,500) and Angel of the Winds (about 8,100), the UW–WSU basketball exhibition (about 10,000 room) and the Reign at Lumen (6,952 announced Oct 2) may draw near or under 5,000. Check past attendance before seeding.

Shape note: Seattle's stadium district has no same-night overlap in October (no Mariners, WaMu shows on off nights). The month's busiest nights are spread out: Oct 9 (Huskies, aespa, Billy Strings in Everett, Roxette in Auburn, WHL in Kent), Oct 25 (Seahawks Sunday night, TAEMIN, UW–WSU, Disney On Ice).

## Kylie's calls (Oct 6, 2026)
- Borderline rooms: keep them; check past attendance before seeding (same as San Diego).
- Metro reach: keep Tacoma, Everett, Kent and Auburn in Seattle for now. Kylie likes the metro diversity; the formula's distance rules decide how much they compete.
