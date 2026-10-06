# Los Angeles, October 2026: research output (raw)

Pasted by Kylie on Oct 6, 2026, from the research model run on `docs/october-2026-events-prompt.md` (the model checked on Oct 5 by its own clock). Kept as returned. Not seeded. Claude's check notes, including a comparison with the app's own data, are at the bottom.

### 1. Venues
```csv
city,venue,former_names,area,lat,lng,capacity_by_setup,roof,access_note,neighbors_within_2km,how_people_arrive,nearest_rail_and_walk,source_url
LA,Dodger Stadium,,"Elysian Park (Chavez Ravine), Los Angeles",34.0739,-118.2400,"baseball about 56,000 (estimate; not verified this run)",open,"hillside site; few access roads and gates",,"mostly car; free Dodger Stadium Express buses from Union Station (Dodgers, earlier season)","Union Station (A/B/D lines, Metrolink): about 30+ min uphill walk (estimate); most riders use the Express bus",https://thinkbluela.com/?p=95517
LA,Los Angeles Memorial Coliseum,,"Exposition Park, Los Angeles",34.0141,-118.2879,"football about 77,500 (estimate; not verified this run)",open,,"BMO Stadium (adjacent); Galen Center (about 1 km)","car (Exposition Park lots) and Metro E Line (estimate)","Expo Park/USC (E Line): about 5-10 min walk (estimate)",https://expositionpark.ca.gov/calendar/category/rideshare/2026-10/?ical=1
LA,BMO Stadium,"Banc of California Stadium to 2023","Exposition Park, Los Angeles",34.0128,-118.2841,"soccer 22,000 (listed: Exposition Park, Ticketmaster)",open,"S. Coliseum Dr closed 5 h before LAFC kickoffs (Exposition Park calendar)","LA Memorial Coliseum (adjacent); Galen Center (about 1 km)","car (Exposition Park lots) and Metro E Line (estimate)","Expo Park/USC (E Line): about 5-10 min walk (estimate)",https://expositionpark.ca.gov/calendar/category/rideshare/2026-10/?ical=1
LA,SoFi Stadium,"Los Angeles Stadium (temporary name during 2026 FIFA World Cup)","Hollywood Park, Inglewood",33.9535,-118.3392,"football 70,240 (listed); concert maximum not verified",covered,,"YouTube Theater (same canopy); Kia Forum (about 1.5 km)","mostly car and rideshare (estimate)","Downtown Inglewood (K Line): about 25-30 min walk (estimate)",https://www.sofistadium.com/events/category/concerts
LA,YouTube Theater,,"Hollywood Park, Inglewood",33.9520,-118.3380,"6,000 maximum; configurable to 3,400 or 4,400 (listed)",indoor,,"SoFi Stadium (same canopy); Kia Forum (about 1.5 km)","mostly car (estimate)","Downtown Inglewood (K Line): about 25 min walk (estimate)",https://www.netflixisajokefest.com/venues/youtube-theater
LA,Intuit Dome,"Inglewood Basketball and Entertainment Center (planning name)",Inglewood,33.9451,-118.3431,"basketball 18,000 (KTVU) or 18,300 (Wikipedia)",indoor,,"Kia Forum (about 1.7 km)","mostly car; Metro Local 212 bus from Hawthorne/Lennox (Wikipedia)","Hawthorne/Lennox (C Line): about 30 min walk (estimate)",https://en.wikipedia.org/wiki/Intuit_Dome
LA,Kia Forum,"The Great Western Forum 1988-2003; The Forum to 2020",Inglewood,33.9583,-118.3419,"concert about 17,500 (estimate; not verified this run)",indoor,,"SoFi Stadium and YouTube Theater (about 1.5 km); Intuit Dome (about 1.7 km)","mostly car (estimate)","Downtown Inglewood (K Line): about 20 min walk (estimate)",https://www.bandsintown.com/v/10279446-kia-forum
LA,Crypto.com Arena,"Staples Center to 2021","South Park, Downtown Los Angeles",34.0430,-118.2673,"hockey 18,145 (listed); basketball and concert about 19,000-20,000 (estimate)",indoor,,"Peacock Theater (same L.A. Live campus); LA Convention Center","car (garages) and Metro rail (estimate)","Pico (A/E lines): about 5 min walk (estimate)",https://www.cryptoarena.com/
LA,Peacock Theater,"Microsoft Theater to 2021; Nokia Theatre L.A. Live to 2015","South Park, Downtown Los Angeles",34.0446,-118.2668,"7,100 (listed by Bandsintown)",indoor,,"Crypto.com Arena (same campus)","car (garages) and Metro rail (estimate)","Pico (A/E lines): about 5 min walk (estimate)",https://www.bandsintown.com/v/10003426
LA,Honda Center,"Arrowhead Pond of Anaheim 1993-2006",Anaheim,33.8078,-117.8765,"hockey 17,174; basketball 18,336; concert 13,793-18,900 (Wikipedia)",indoor,,"Angel Stadium (about 1 km)","mostly car; OC Bus 50/53/553 (Wikipedia)","Anaheim ARTIC (Metrolink/Amtrak): about 10 min walk (estimate)",https://en.wikipedia.org/wiki/Honda_Center
LA,Hollywood Bowl,,"Hollywood Hills, Los Angeles",34.1122,-118.3391,"about 17,500 (estimate; not verified this run)",open,"hillside site; stacked parking; Bowl shuttles and park-and-ride",,"car (stacked lots) and shuttles (estimate)","Hollywood/Highland (B Line): about 20 min uphill walk (estimate)",https://www.livenation.com/venue/KovZpZAFFvJA/hollywood-bowl-events
LA,Greek Theatre,,"Griffith Park, Los Feliz, Los Angeles",34.1197,-118.2965,"about 5,900 (estimate; not verified this run)",open,"inside Griffith Park on a hillside; stacked parking; shuttles",,"car and shuttles (estimate)","Vertmont/Sunset (B Line): about 2.5 km away; not a practical walk (estimate)",https://dolosangeles.com/venues/greek-theatre
LA,Rose Bowl Stadium,,"Arroyo Seco, Pasadena",34.1613,-118.1676,"92,542 (listed by Songkick)",open,"in the Arroyo Seco; few access roads; golf-course parking and shuttles",,"mostly car and shuttles (estimate)","Memorial Park (A Line): about 4 km away (estimate)",https://songkick.com/venues/5902-rose-bowl-stadium
LA,Dignity Health Sports Park,"The Home Depot Center to 2013; StubHub Center to 2019","Carson (CSU Dominguez Hills campus)",33.8644,-118.2611,"soccer about 27,000 (estimate); one listing says 30,510",open,,,"mostly car ($30 parking); free Galaxy Express shuttle",none,https://www.dignityhealthsportspark.com/teams/detail/sample-team
LA,Hollywood Forever Cemetery,,"Hollywood, Los Angeles",34.0890,-118.3196,"festival grounds; capacity not published",open,,"Paramount Studios (adjacent)","car and transit (estimate)","Hollywood/Vine (B Line): about 20 min walk (estimate)",https://www.ladayofthedead.com/faq/
```

### 2. Events
```csv
city,date,weekday,start_local,start_note,kind,title,home_team,away_team,performer,league_or_genre,level,stakes,venue,booking,run,facts,invited,expected_draw,status,source_url,checked_on,result_oct1to5,attendance_oct1to5
LA,2026-10-01,Thu,20:30,"time from a reseller listing; date confirmed by SeatGeek",show,Rod Wave,,,Rod Wave with Fridayy,hip-hop,pro,,Intuit Dome,arena,,,no,,confirmed,https://seatgeek.com/venues/intuit-dome/tickets,2026-10-05,,
LA,2026-10-01,Thu,,"no start time in the sources found",show,Disney Worlds Collide Tour,,,Disney Worlds Collide Tour,family,pro,,Honda Center,arena,,,no,,confirmed,https://detour.songkick.com/venues/6787-honda-center/calendar,2026-10-05,,
LA,2026-10-02,Fri,19:00,,show,Bruno Mars: The Romantic Tour,,,"Bruno Mars with RAYE and Anderson .Paak as DJ Pee.Wee",pop,pro,,SoFi Stadium,stadium,"night 1 of 4, Oct 2-7",,no,,confirmed,https://www.sofistadium.com/events/category/concerts,2026-10-05,,
LA,2026-10-02,Fri,19:30,"a Thomas Rhett date at Kia Forum is listed as canceled (date not shown)",show,Thomas Rhett: The Soundtrack to Life Tour,,,"Thomas Rhett with ERNEST and Emily Ann Roberts",country,pro,,Honda Center,arena,,,no,,confirmed,https://www.ticketmaster.com/search?q=honda+center+anaheim,2026-10-05,,
LA,2026-10-03,Sat,13:00,1 p.m. PT on Fox,game,Braves at Dodgers - NLDS Game 1,Los Angeles Dodgers,Atlanta Braves,,MLB,pro,NLDS G1,Dodger Stadium,stadium,,"playoff: NLDS G1; storyline: Dodgers are two-time defending World Series champions; storyline: Freddie Freeman faces his former team",no,,confirmed,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,"LAD 5, ATL 3 (MLB.com)",
LA,2026-10-03,Sat,16:30,7:30 p.m. ET on NBC/Peacock,game,Washington at USC,USC,Washington,,NCAA FB,college,,Los Angeles Memorial Coliseum,stadium,,"giveaway or theme night: Homecoming; storyline: USC No. 18 (AP) vs unranked Washington",no,,confirmed,https://usctrojans.com/game-center/35254,2026-10-05,"USC 25, Washington 21 (USC Athletics)",
LA,2026-10-03,Sat,19:00,,show,Bruno Mars: The Romantic Tour,,,"Bruno Mars with RAYE and Anderson .Paak as DJ Pee.Wee",pop,pro,,SoFi Stadium,stadium,"night 2 of 4, Oct 2-7",,no,,confirmed,https://www.sofistadium.com/events/category/concerts,2026-10-05,,
LA,2026-10-03,Sat,20:00,,show,aespa LIVE TOUR - SYNK : COMPLAEXITY,,,aespa,K-pop,pro,,Intuit Dome,arena,,,no,,confirmed,https://concerts.consequence.net/events/aespa-at-intuit-dome-on-2026-10-03-20-00--1,2026-10-05,,
LA,2026-10-03,Sat,19:00,,show,Klangkuenstler,,,Klangkuenstler,electronic,pro,,Kia Forum,arena,,,no,,confirmed,https://www.bandsintown.com/v/10279446-kia-forum,2026-10-05,,
LA,2026-10-03,Sat,18:00,,show,Breaking Benjamin Fall Tour 2026,,,"Breaking Benjamin with Chevelle, Starset and Kami Kehoe",rock,pro,,Honda Center,arena,,,no,,confirmed,https://www.hondacenter.com/events/breaking-benjamin/,2026-10-05,,
LA,2026-10-03,Sat,20:00,,show,KCRW Presents The Growlers,,,The Growlers,rock,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://www.ticketmaster.com/greek-theatre-tickets-los-angeles/venue/73753,2026-10-05,,
LA,2026-10-04,Sun,17:00,5 p.m. PT on FS1,game,Braves at Dodgers - NLDS Game 2,Los Angeles Dodgers,Atlanta Braves,,MLB,pro,NLDS G2,Dodger Stadium,stadium,,"playoff: NLDS G2; storyline: Dodgers are two-time defending World Series champions; storyline: Freddie Freeman faces his former team",no,,confirmed,https://www.espn.com/mlb/recap?gameId=401908014,2026-10-05,"ATL 3, LAD 2 (ESPN and MLB.com; CBS Sports shows 3-1)","50,729 announced (ESPN)"
LA,2026-10-04,Sun,17:00,Orange Carpet from 13:30,game,Panthers at Ducks,Anaheim Ducks,Florida Panthers,,NHL,pro,,Honda Center,arena,,"home opener; giveaway or theme night: kids' socks for the first 1,000 children 12 and under",no,,confirmed,https://www.nhl.com/ducks/news/ducks-to-host-home-opener-sunday,2026-10-05,,
LA,2026-10-05,Mon,19:00,,show,The Hayley Williams Show,,,"Hayley Williams with Magdalena Bay and Rico Nasty",rock,pro,,Hollywood Bowl,amphitheater,"Oct 5 confirmed; a second night on Oct 6 appears on one site only",,no,,confirmed,https://www.livenation.com/venue/KovZpZAFFvJA/hollywood-bowl-events,2026-10-05,,
LA,2026-10-05,Mon,18:30,,show,Roxette 40th Anniversary Tour 2026,,,"Roxette with Taylor Dayne, Nick Lowe and Los Straitjackets",pop,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://dolosangeles.com/venues/greek-theatre,2026-10-05,,
LA,2026-10-06,Tue,19:00,,show,Bruno Mars: The Romantic Tour,,,"Bruno Mars with RAYE and Anderson .Paak as DJ Pee.Wee",pop,pro,,SoFi Stadium,stadium,"night 3 of 4, Oct 2-7",,no,,confirmed,https://www.sofistadium.com/events/category/concerts,2026-10-05,,
LA,2026-10-06,Tue,19:30,"19:30 per Kings/NHL; Crypto.com Arena site shows 19:00",game,Panthers at Kings,Los Angeles Kings,Florida Panthers,,NHL,pro,,Crypto.com Arena,arena,,"home opener; storyline: Kings 60th-anniversary celebrations begin; storyline: first season without Anze Kopitar (per Squawka)",no,,confirmed,https://www.nhl.com/kings/news/la-kings-and-nhl-announce-2026-27-regular-season-schedule,2026-10-05,,
LA,2026-10-06,Tue,19:30,,show,Mumford & Sons - Prizefighter Tour,,,Mumford & Sons with Sierra Ferrell,rock,pro,,Kia Forum,arena,"night 1 of 2, Oct 6-7",,no,,confirmed,https://www.jambase.com/venue/kia-forum,2026-10-05,,
LA,2026-10-07,Wed,19:00,,show,Bruno Mars: The Romantic Tour,,,"Bruno Mars with RAYE and Anderson .Paak as DJ Pee.Wee",pop,pro,,SoFi Stadium,stadium,"night 4 of 4, Oct 2-7",,no,,confirmed,https://www.sofistadium.com/events/category/concerts,2026-10-05,,
LA,2026-10-07,Wed,19:30,,show,Mumford & Sons - Prizefighter Tour,,,Mumford & Sons with Sierra Ferrell,rock,pro,,Kia Forum,arena,"night 2 of 2, Oct 6-7",,no,,confirmed,https://www.jambase.com/venue/kia-forum,2026-10-05,,
LA,2026-10-07,Wed,19:00,"10 p.m. ET per Sports Brackets; subject to change",game,Oilers at Ducks,Anaheim Ducks,Edmonton Oilers,,NHL,pro,,Honda Center,arena,,,no,,confirmed,https://sportsbrackets.net/2026/05/05/2026-27-anaheim-ducks-schedule/,2026-10-05,,
LA,2026-10-08,Thu,19:30,,game,Kings at Lakers (preseason),Los Angeles Lakers,Sacramento Kings,,NBA,pro,,Crypto.com Arena,arena,,preseason,no,,confirmed,https://www.axs.com/teams/1108761/crypto-com-arena-premium-tickets,2026-10-05,,
LA,2026-10-08,Thu,20:00,,show,Chayanne - Bailemos Otra Vez Tour,,,Chayanne,Latin,pro,,Honda Center,arena,,,no,,confirmed,https://www.ticketmaster.com/honda-center-tickets-anaheim/venue/73797?page=1,2026-10-05,,
LA,2026-10-08,Thu,19:30,,show,Empire of the Sun,,,"Empire of the Sun with Polo & Pan and Midnight Generation",electronic,pro,,Hollywood Bowl,amphitheater,,,no,,confirmed,https://thescenestar.com/2026/02/18/hollywood-bowl-announce-their-2026-concert-season-schedule-buy-tickets/,2026-10-05,,
LA,2026-10-09,Fri,17:00,8 p.m. ET on Fox if needed,game,Braves at Dodgers - NLDS Game 5,Los Angeles Dodgers,Atlanta Braves,,MLB,pro,NLDS G5,Dodger Stadium,stadium,,playoff: NLDS G5,no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-09,Fri,19:00,,show,The Neighbourhood - Wourld Tour,,,The Neighbourhood,rock,pro,,Kia Forum,arena,,,no,,confirmed,https://www.jambase.com/venue/kia-forum,2026-10-05,,
LA,2026-10-09,Fri,19:30,,show,sombr - You Are The Reason Tour,,,"sombr with Tom Odell and The Hellp",pop,pro,,Honda Center,arena,"night 1 of 2 in metro (Oct 9 Honda Center, Oct 10 Kia Forum)",,no,,confirmed,https://www.ticketmaster.com/honda-center-tickets-anaheim/venue/73797?page=1,2026-10-05,,
LA,2026-10-09,Fri,19:00,,show,Mac DeMarco,,,Mac DeMarco,rock,pro,,Hollywood Bowl,amphitheater,,,no,,confirmed,https://www.livenation.com/venue/KovZpZAFFvJA/hollywood-bowl-events,2026-10-05,,
LA,2026-10-09,Fri,19:00,,show,for KING & COUNTRY - The Most Beautiful Colours Tour,,,for KING & COUNTRY,Christian,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://www.ticketmaster.com/greek-theatre-tickets-los-angeles/venue/73753,2026-10-05,,
LA,2026-10-10,Sat,19:30,"one LAFC article places this match at BC Place; LAFC's schedule release and Exposition Park list it at BMO",game,Whitecaps at LAFC,LAFC,Vancouver Whitecaps,,MLS,pro,,BMO Stadium,stadium,,"storyline: rematch of 2025 Western Conference Semifinal; giveaway or theme night: Family Picnic",no,,confirmed,https://expositionpark.ca.gov/calendar/category/rideshare/2026-10/?ical=1,2026-10-05,,
LA,2026-10-10,Sat,19:00,"Tom Odell is also listed (support)",show,sombr - You Are The Reason Tour,,,"sombr with Tom Odell and The Hellp",pop,pro,,Kia Forum,arena,"night 2 of 2 in metro (Oct 9 Honda Center, Oct 10 Kia Forum)",,no,,confirmed,https://www.bandsintown.com/v/10279446-kia-forum,2026-10-05,,
LA,2026-10-10,Sat,19:45,"Crypto.com Arena site 19:45; Songkick 20:00",show,JUNGLE World Tour 2026,,,Jungle with Rio Kosta,electronic,pro,,Crypto.com Arena,arena,,,no,,confirmed,https://www.cryptoarena.com/,2026-10-05,,
LA,2026-10-10,Sat,19:30,,show,"TLC, Salt-N-Pepa & En Vogue",,,"TLC, Salt-N-Pepa and En Vogue",R&B,pro,,Intuit Dome,arena,,,no,,confirmed,https://intuit-dome.ticketslosangeles.org/,2026-10-05,,
LA,2026-10-10,Sat,19:30,,show,Jack Johnson: SURFILMUSIC Tour 2026,,,Jack Johnson with Hermanos Gutierrez,rock,pro,,Hollywood Bowl,amphitheater,"night 1 of 2, Oct 10-11",,no,,confirmed,https://thescenestar.com/2026/02/18/hollywood-bowl-announce-their-2026-concert-season-schedule-buy-tickets/,2026-10-05,,
LA,2026-10-10,Sat,20:00,,show,Air Supply: Greatest Hits - Under The Stars at The Greek,,,Air Supply,pop,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://dolosangeles.com/venues/greek-theatre,2026-10-05,,
LA,2026-10-11,Sun,13:05,4:05 p.m. ET on CBS,game,Broncos at Chargers,Los Angeles Chargers,Denver Broncos,,NFL,pro,,SoFi Stadium,stadium,,,no,,confirmed,https://www.chargers.com/news/2026-schedule-announced,2026-10-05,,
LA,2026-10-11,Sun,,"time TBA. Dodgers must win the NLDS. Dodger Stadium hosts G3-G5 (Oct 14-16) if the opponent is Milwaukee (higher seed); it hosts G1, G2, G6 and G7 if the opponent is San Diego",game,NLCS Game 1 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,NLCS G1,Dodger Stadium,stadium,,playoff: NLCS G1,no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-11,Sun,19:00,,show,Jack Johnson: SURFILMUSIC Tour 2026,,,Jack Johnson with Hermanos Gutierrez,rock,pro,,Hollywood Bowl,amphitheater,"night 2 of 2, Oct 10-11",,no,,confirmed,https://thescenestar.com/2026/02/18/hollywood-bowl-announce-their-2026-concert-season-schedule-buy-tickets/,2026-10-05,,
LA,2026-10-11,Sun,19:20,"Ticketmaster 19:20; DoLA 20:00",show,Palace - USA & Canada Tour 2026,,,Palace,rock,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://www.ticketmaster.com/greek-theatre-tickets-los-angeles/venue/73753,2026-10-05,,
LA,2026-10-12,Mon,17:15,8:15 p.m. ET Monday Night Football (ESPN),game,Bills at Rams,Los Angeles Rams,Buffalo Bills,,NFL,pro,,SoFi Stadium,stadium,,,no,,confirmed,https://www.therams.com/photos/stadium-photos-where-the-rams-will-play-in-2026-schedule-release,2026-10-05,,
LA,2026-10-12,Mon,,time TBA; hosting depends on opponent (see Oct 11 row),game,NLCS Game 2 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,NLCS G2,Dodger Stadium,stadium,,playoff: NLCS G2,no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-13,Tue,19:30,10:30 p.m. ET per Sports Brackets,game,Oilers at Kings,Los Angeles Kings,Edmonton Oilers,,NHL,pro,,Crypto.com Arena,arena,,,no,,confirmed,https://sportsbrackets.net/2026/05/05/2026-27-los-angeles-kings-schedule/,2026-10-05,,
LA,2026-10-13,Tue,18:45,9:45 p.m. ET per Sports Brackets,game,Flames at Ducks,Anaheim Ducks,Calgary Flames,,NHL,pro,,Honda Center,arena,,,no,,confirmed,https://sportsbrackets.net/2026/05/05/2026-27-anaheim-ducks-schedule/,2026-10-05,,
LA,2026-10-13,Tue,19:10,,show,Ella Langley,,,"Ella Langley with Kameron Marlowe and Laci Kaye Booth",country,pro,,Greek Theatre,amphitheater,"night 1 of 2, Oct 13-14",,no,,confirmed,https://dolosangeles.com/venues/greek-theatre,2026-10-05,,
LA,2026-10-14,Wed,19:30,,game,Austin FC at LAFC,LAFC,Austin FC,,MLS,pro,,BMO Stadium,stadium,,giveaway or theme night: Family Picnic,no,,confirmed,https://expositionpark.ca.gov/calendar/category/rideshare/2026-10/?ical=1,2026-10-05,,
LA,2026-10-14,Wed,19:30,,game,Timbers at Galaxy,LA Galaxy,Portland Timbers,,MLS,pro,,Dignity Health Sports Park,stadium,,,no,,confirmed,https://www.ticketmaster.ca/la-galaxy-tickets/artist/805960?page=1,2026-10-05,,
LA,2026-10-14,Wed,19:30,,game,Nuggets at Clippers (preseason),LA Clippers,Denver Nuggets,,NBA,pro,,Intuit Dome,arena,,preseason,no,,confirmed,https://sportsbrackets.net/2026/06/20/2026-27-nba-preseason-schedule-dates-matchups-tv/,2026-10-05,,
LA,2026-10-14,Wed,,time TBA; hosting depends on opponent (see Oct 11 row),game,NLCS Game 3 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,NLCS G3,Dodger Stadium,stadium,,playoff: NLCS G3,no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-14,Wed,19:10,,show,Ella Langley,,,"Ella Langley with Kameron Marlowe and Laci Kaye Booth",country,pro,,Greek Theatre,amphitheater,"night 2 of 2, Oct 13-14",,no,,confirmed,https://dolosangeles.com/venues/greek-theatre,2026-10-05,,
LA,2026-10-15,Thu,,time TBA; hosting depends on opponent (see Oct 11 row),game,NLCS Game 4 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,NLCS G4,Dodger Stadium,stadium,,playoff: NLCS G4,no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-15,Thu,19:00,,show,Song Of The Saints Tour with Phil Wickham,,,"Phil Wickham with Jamie MacDonald and Chandler Moore",Christian,pro,,Honda Center,arena,,,no,,confirmed,https://www.ticketmaster.com/honda-center-tickets-anaheim/venue/73797?page=1,2026-10-05,,
LA,2026-10-15,Thu,19:30,,show,Cynthia Erivo: Let Me Sing To You,,,Cynthia Erivo,pop,pro,,Hollywood Bowl,amphitheater,,,no,,confirmed,https://www.livenation.com/venue/KovZpZAFFvJA/hollywood-bowl-events,2026-10-05,,
LA,2026-10-15,Thu,20:00,,show,Role Model - Chuck On Tour,,,Role Model with Samia,pop,pro,,Greek Theatre,amphitheater,"night 1 of 2, Oct 15-16",,no,,confirmed,https://onestowatch.com/live/greek-theatre-los-angeles-shows/,2026-10-05,,
LA,2026-10-15,Thu,19:00,"marked postponed on Songkick; date the postponement was announced not found",show,TAEMIN - LiMiNaL,,,TAEMIN,K-pop,pro,,Crypto.com Arena,arena,,,no,,postponed,https://www.songkick.com/venues/598-cryptocom-arena/calendar/,2026-10-05,,
LA,2026-10-16,Fri,19:30,,game,Nuggets at Lakers (preseason),Los Angeles Lakers,Denver Nuggets,,NBA,pro,,Crypto.com Arena,arena,,preseason,no,,confirmed,https://www.axs.com/teams/1108761/crypto-com-arena-premium-tickets,2026-10-05,,
LA,2026-10-16,Fri,19:00,10 p.m. ET per Sports Brackets,game,Bruins at Ducks,Anaheim Ducks,Boston Bruins,,NHL,pro,,Honda Center,arena,,,no,,confirmed,https://sportsbrackets.net/2026/05/05/2026-27-anaheim-ducks-schedule/,2026-10-05,,
LA,2026-10-16,Fri,,time TBA; game also if necessary; hosting depends on opponent (see Oct 11 row),game,NLCS Game 5 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,NLCS G5,Dodger Stadium,stadium,,playoff: NLCS G5,no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-16,Fri,20:00,,show,Juanes,,,Juanes,Latin,pro,,Kia Forum,arena,,,no,,confirmed,https://www.bandsintown.com/v/10279446-kia-forum,2026-10-05,,
LA,2026-10-16,Fri,19:30,,show,Miley: Bass Persuades - Live at the Hollywood Bowl,,,Miley Cyrus,pop,pro,,Hollywood Bowl,amphitheater,"night 1 of 2, Oct 16 and 18",,no,,confirmed,https://www.ticketmaster.com/hollywood-bowl-tickets-los-angeles/venue/213030,2026-10-05,,
LA,2026-10-16,Fri,20:00,,show,Role Model - Chuck On Tour,,,Role Model with Samia,pop,pro,,Greek Theatre,amphitheater,"night 2 of 2, Oct 15-16",,no,,confirmed,https://onestowatch.com/live/greek-theatre-los-angeles-shows/,2026-10-05,,
LA,2026-10-17,Sat,18:00,9 p.m. ET per Sports Brackets,game,Bruins at Kings,Los Angeles Kings,Boston Bruins,,NHL,pro,,Crypto.com Arena,arena,,,no,,confirmed,https://sportsbrackets.net/2026/05/05/2026-27-los-angeles-kings-schedule/,2026-10-05,,
LA,2026-10-17,Sat,,kickoff TBA (TV selection pending),game,Wisconsin at UCLA,UCLA,Wisconsin,,NCAA FB,college,,Rose Bowl Stadium,stadium,,,no,,confirmed,https://www.cbssports.com/college-football/teams/UCLA/ucla-bruins/schedule/,2026-10-05,,
LA,2026-10-17,Sat,19:30,,game,San Diego FC at Galaxy,LA Galaxy,San Diego FC,,MLS,pro,,Dignity Health Sports Park,stadium,,storyline: SoCal matchup with San Diego FC,no,,confirmed,https://www.ticketmaster.ca/la-galaxy-tickets/artist/805960?page=1,2026-10-05,,
LA,2026-10-17,Sat,20:00,,show,Charli XCX,,,Charli XCX with Underscores,pop,pro,,Kia Forum,arena,"night 1 of 2, Oct 17-18",,no,,confirmed,https://www.bandsintown.com/v/10279446-kia-forum,2026-10-05,,
LA,2026-10-17,Sat,20:00,,show,Young Miko - Late Checkout Tour,,,Young Miko,Latin,pro,,Intuit Dome,arena,,,no,,confirmed,https://intuit-dome.ticketsanaheim.org/,2026-10-05,,
LA,2026-10-17,Sat,20:00,,show,Los Tigres del Norte,,,Los Tigres del Norte,Latin,pro,,Honda Center,arena,,,no,,confirmed,https://www.jambase.com/venue/honda-center,2026-10-05,,
LA,2026-10-17,Sat,20:00,"Ticketmaster/Bandsintown 20:00; DoLA 19:00",show,Vulfpeck,,,Vulfpeck with Jackie Evans,funk,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://www.bandsintown.com/v/10002819-the-greek-theatre,2026-10-05,,
LA,2026-10-18,Sun,13:05,4:05 p.m. ET on FOX,game,Cardinals at Rams,Los Angeles Rams,Arizona Cardinals,,NFL,pro,,SoFi Stadium,stadium,,,no,,confirmed,https://www.therams.com/photos/stadium-photos-where-the-rams-will-play-in-2026-schedule-release,2026-10-05,,
LA,2026-10-18,Sun,,time TBA; game also if necessary; hosting depends on opponent (see Oct 11 row),game,NLCS Game 6 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,NLCS G6,Dodger Stadium,stadium,,playoff: NLCS G6,no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-18,Sun,20:00,,show,Charli XCX,,,Charli XCX with Underscores,pop,pro,,Kia Forum,arena,"night 2 of 2, Oct 17-18",,no,,confirmed,https://www.bandsintown.com/v/10279446-kia-forum,2026-10-05,,
LA,2026-10-18,Sun,,no start time in the sources found,show,Kacey Musgraves - Middle of Nowhere Tour,,,Kacey Musgraves with Gabriella Rose,country,pro,,Crypto.com Arena,arena,"night 1 of 2, Oct 18-19",,no,,confirmed,https://www.cryptoarena.com/,2026-10-05,,
LA,2026-10-18,Sun,19:30,,show,Miley: Bass Persuades - Live at the Hollywood Bowl,,,Miley Cyrus,pop,pro,,Hollywood Bowl,amphitheater,"night 2 of 2, Oct 16 and 18",,no,,confirmed,https://www.ticketmaster.com/hollywood-bowl-tickets-los-angeles/venue/213030,2026-10-05,,
LA,2026-10-19,Mon,,time TBA; game also if necessary; hosting depends on opponent (see Oct 11 row),game,NLCS Game 7 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,NLCS G7,Dodger Stadium,stadium,,playoff: NLCS G7,no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-19,Mon,18:30,"18:30 per Songkick; may be the doors time",show,Kacey Musgraves - Middle of Nowhere Tour,,,Kacey Musgraves with Estevie,country,pro,,Crypto.com Arena,arena,"night 2 of 2, Oct 18-19",,no,,confirmed,https://www.songkick.com/venues/598-cryptocom-arena/calendar/,2026-10-05,,
LA,2026-10-19,Mon,20:00,,show,Dermot Kennedy - The Weight Of The Woods Tour,,,Dermot Kennedy with Jonah Kagen,pop,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://dolosangeles.com/venues/greek-theatre,2026-10-05,,
LA,2026-10-20,Tue,20:00,,show,MONSTA X,,,MONSTA X,K-pop,pro,,Kia Forum,arena,,,no,,confirmed,https://www.bandsintown.com/v/10279446-kia-forum,2026-10-05,,
LA,2026-10-20,Tue,20:00,,show,Jessie Ware - The Superbloom Tour,,,Jessie Ware with Dhruv,pop,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://onestowatch.com/live/greek-theatre-los-angeles-shows/,2026-10-05,,
LA,2026-10-21,Wed,19:00,,game,Warriors at Lakers,Los Angeles Lakers,Golden State Warriors,,NBA,pro,,Crypto.com Arena,arena,,"home opener; season opener; storyline: first Lakers season without LeBron James (now with the 76ers)",no,,confirmed,https://www.axs.com/teams/1108761/crypto-com-arena-premium-tickets,2026-10-05,,
LA,2026-10-21,Wed,19:30,,game,Kings at Clippers,LA Clippers,Sacramento Kings,,NBA,pro,,Intuit Dome,arena,,"home opener; season opener; storyline: visiting top-drafted rookie Darius Acuff (per ClutchPoints)",no,,confirmed,https://www.discoverlosangeles.com/event/2026/10/21/los-angeles-clippers-vs-sacramento-kings-season-opener,2026-10-05,,
LA,2026-10-21,Wed,20:00,,show,My Chemical Romance - The Black Parade 2026,,,My Chemical Romance,rock,pro,,Hollywood Bowl,amphitheater,"night 1 of 3, Oct 21-24 (two more Oct 30-31)",storyline: performs The Black Parade in full,no,,confirmed,https://www.livenation.com/venue/KovZpZAFFvJA/hollywood-bowl-events,2026-10-05,,
LA,2026-10-21,Wed,20:00,,show,beabadoobee - The Powerlines Tour,,,beabadoobee with Wisp,pop,pro,,Kia Forum,arena,,,no,,confirmed,https://concerts50.com/venues/usa/inglewood-ca/kia-forum,2026-10-05,,
LA,2026-10-21,Wed,,"no start time found; not on the DoLA list; listed by Ones To Watch and Songkick",show,Ravyn Lenae Live 2026,,,"Ravyn Lenae with Lexa Gates and Nourished By Time",R&B,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://onestowatch.com/live/greek-theatre-los-angeles-shows/,2026-10-05,,
LA,2026-10-22,Thu,19:30,,show,Doja Cat - Tour Ma Vie World Tour,,,Doja Cat with Latto,hip-hop,pro,,Kia Forum,arena,,,no,,confirmed,https://www.bandsintown.com/v/10279446-kia-forum,2026-10-05,,
LA,2026-10-22,Thu,19:30,,show,Bryson Tiller Presents: The Neo Trapsoul Tour,,,"Bryson Tiller with Majid Jordan, Ty Dolla $ign and Austin Millz",R&B,pro,,Honda Center,arena,"night 1 of 2 in metro (Oct 22 Honda Center, Oct 25 Intuit Dome)",,no,,confirmed,https://www.ticketmaster.com/search?q=honda+center+anaheim,2026-10-05,,
LA,2026-10-23,Fri,19:00,,game,Clippers at Lakers,Los Angeles Lakers,LA Clippers,,NBA,pro,,Crypto.com Arena,arena,,"rivalry; star debut or return: Rui Hachimura's first game against the Lakers since leaving (now Clippers; per ClutchPoints)",no,,confirmed,https://www.axs.com/teams/1108761/crypto-com-arena-premium-tickets,2026-10-05,,
LA,2026-10-23,Fri,20:00,,show,JAY-Z 30,,,JAY-Z,hip-hop,pro,,SoFi Stadium,stadium,"night 1 of 2, Oct 23-24",,no,,confirmed,https://www.sofistadium.com/events/category/concerts,2026-10-05,,
LA,2026-10-23,Fri,,"time TBA. Dodgers must win the NL pennant. Dodger Stadium hosts G1, G2, G6 and G7 if the Dodgers have the better 2026 record than the AL champion; otherwise it hosts G3-G5",game,World Series Game 1 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,World Series G1,Dodger Stadium,stadium,,"playoff: World Series G1; championship final",no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-23,Fri,20:00,,show,My Chemical Romance - The Black Parade 2026,,,My Chemical Romance,rock,pro,,Hollywood Bowl,amphitheater,"night 2 of 3, Oct 21-24 (two more Oct 30-31)",storyline: performs The Black Parade in full,no,,confirmed,https://www.ticketmaster.com/hollywood-bowl-tickets-los-angeles/venue/213030,2026-10-05,,
LA,2026-10-23,Fri,19:00,,show,Worship North America 2026,,,Worship North America 2026,Christian,pro,,Kia Forum,arena,,,no,,confirmed,https://www.bandsintown.com/v/10279446-kia-forum,2026-10-05,,
LA,2026-10-23,Fri,19:30,,show,Foster The People,,,Foster The People with Goth Babe,pop,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://dolosangeles.com/venues/greek-theatre,2026-10-05,,
LA,2026-10-23,Fri,19:00,"theater rule applies: Lakers-Clippers at Crypto.com Arena the same night, same campus",show,Umamusume: Pretty Derby,,,Umamusume: Pretty Derby,game music,pro,,Peacock Theater,theater,,,no,,confirmed,https://www.tickpick.com/buy-umamusume-pretty-derby-tickets-peacock-theater-los-angeles-10-23-26-7pm/8165690/,2026-10-05,,
LA,2026-10-24,Sat,,kickoff TBA,game,Michigan State at UCLA,UCLA,Michigan State,,NCAA FB,college,,Rose Bowl Stadium,stadium,,,no,,confirmed,https://www.cbssports.com/college-football/teams/UCLA/ucla-bruins/schedule/,2026-10-05,,
LA,2026-10-24,Sat,17:45,Fan Fest 13:45-17:15,game,Bay FC at Angel City,Angel City FC,Bay FC,,NWSL,pro,,BMO Stadium,stadium,,giveaway or theme night: Fan Fest,no,,confirmed,https://expositionpark.ca.gov/calendar/category/rideshare/2026-10/?ical=1,2026-10-05,,
LA,2026-10-24,Sat,20:00,,show,JAY-Z 30,,,JAY-Z,hip-hop,pro,,SoFi Stadium,stadium,"night 2 of 2, Oct 23-24",,no,,confirmed,https://resources.onestowatch.com/sofi-stadium-los-angeles-shows/,2026-10-05,,
LA,2026-10-24,Sat,,time TBA; hosting conditions as in the Oct 23 row,game,World Series Game 2 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,World Series G2,Dodger Stadium,stadium,,"playoff: World Series G2; championship final",no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-24,Sat,20:00,,show,My Chemical Romance - The Black Parade 2026,,,My Chemical Romance,rock,pro,,Hollywood Bowl,amphitheater,"night 3 of 3, Oct 21-24 (two more Oct 30-31)",storyline: performs The Black Parade in full,no,,confirmed,https://www.ticketmaster.com/hollywood-bowl-tickets-los-angeles/venue/213030,2026-10-05,,
LA,2026-10-24,Sat,19:00,,show,WEEZER: The Gathering,,,"Weezer with The Shins and Silversun Pickups",rock,pro,,Crypto.com Arena,arena,,,no,,confirmed,https://www.livenation.com/venue/KovZpZAEdntA/crypto-com-arena-events,2026-10-05,,
LA,2026-10-24,Sat,19:30,,show,Gorillaz - The Mountain Tour,,,"Gorillaz with Deltron 3030 and Little Simz",alternative,pro,,Kia Forum,arena,,,no,,confirmed,https://www.bandsintown.com/v/10279446-kia-forum,2026-10-05,,
LA,2026-10-24,Sat,19:30,"one listing also shows Three Days Grace at Intuit Dome on this date (not confirmed)",show,Pokemon Night Out: Marshmello & Alison Wonderland,,,Marshmello and Alison Wonderland,electronic,pro,,Intuit Dome,arena,,,no,,confirmed,https://intuit-dome.ticketslosangeles.org/,2026-10-05,,
LA,2026-10-24,Sat,20:00,,show,Intocable: Cultura Tour 2026,,,Intocable,Latin,pro,,Honda Center,arena,,,no,,confirmed,https://www.ticketmaster.com/honda-center-tickets-anaheim/venue/73797?page=1,2026-10-05,,
LA,2026-10-24,Sat,12:00,"runs to 23:59 (LA Dept. of Cultural Affairs)",festival,27th Annual Dia de los Muertos at Hollywood Forever,,,,cultural festival (Dia de los Muertos),pro,,Hollywood Forever Cemetery,grounds,,,no,,confirmed,https://culture.lacity.gov/event/27th-annual-dia-de-los-muertos-at-hollywood-forever,2026-10-05,,
LA,2026-10-25,Sun,18:00,Fan Fest 14:30-18:00,game,Galaxy at LAFC,LAFC,LA Galaxy,,MLS,pro,,BMO Stadium,stadium,,"rivalry; giveaway or theme night: Fan Fest",no,,confirmed,https://expositionpark.ca.gov/calendar/category/rideshare/2026-10/?ical=1,2026-10-05,,
LA,2026-10-25,Sun,,no start time in the sources found,show,Bryson Tiller,,,"Bryson Tiller with Majid Jordan, Ty Dolla $ign and Austin Millz",R&B,pro,,Intuit Dome,arena,"night 2 of 2 in metro (Oct 22 Honda Center, Oct 25 Intuit Dome)",,no,,confirmed,https://seatgeek.com/venues/intuit-dome/tickets,2026-10-05,,
LA,2026-10-25,Sun,20:00,"theater rule: Intuit Dome event the same night; distance about 2.4 km (see Open questions)",show,Jodeci,,,Jodeci,R&B,pro,,YouTube Theater,theater,,,no,,confirmed,https://www.tickpick.com/buy-jodeci-tickets-youtube-theater-at-hollywood-park-10-25-26-8pm/8167860/,2026-10-05,,
LA,2026-10-26,Mon,,time TBA; hosting conditions as in the Oct 23 row,game,World Series Game 3 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,World Series G3,Dodger Stadium,stadium,,"playoff: World Series G3; championship final",no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-26,Mon,20:00,,show,Tom Jones,,,Tom Jones,pop,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://dolosangeles.com/venues/greek-theatre,2026-10-05,,
LA,2026-10-27,Tue,20:00,,game,Trail Blazers at Lakers,Los Angeles Lakers,Portland Trail Blazers,,NBA,pro,,Crypto.com Arena,arena,,,no,,confirmed,https://www.axs.com/teams/1108761/crypto-com-arena-premium-tickets,2026-10-05,,
LA,2026-10-27,Tue,19:00,10 p.m. ET per Sports Brackets,game,Canucks at Ducks,Anaheim Ducks,Vancouver Canucks,,NHL,pro,,Honda Center,arena,,,no,,confirmed,https://sportsbrackets.net/2026/05/05/2026-27-anaheim-ducks-schedule/,2026-10-05,,
LA,2026-10-27,Tue,,time TBA; hosting conditions as in the Oct 23 row,game,World Series Game 4 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,World Series G4,Dodger Stadium,stadium,,"playoff: World Series G4; championship final",no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-27,Tue,19:30,,show,Shaboozey,,,Shaboozey with Carter Faith,country,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://www.bandsintown.com/v/10002819-the-greek-theatre,2026-10-05,,
LA,2026-10-28,Wed,19:30,,game,Lakers at Clippers,LA Clippers,Los Angeles Lakers,,NBA,pro,,Intuit Dome,arena,,rivalry,no,,confirmed,https://intuit-dome.ticketslosangeles.org/,2026-10-05,,
LA,2026-10-28,Wed,20:00,,show,YG: The Gentleman's Club Tour,,,"YG with Mozzy, Kalan.frfr, Natalie Nunn and Chef Boy",hip-hop,pro,,Crypto.com Arena,arena,,,no,,confirmed,https://www.livenation.com/venue/KovZpZAEdntA/crypto-com-arena-events,2026-10-05,,
LA,2026-10-28,Wed,,time TBA; game also if necessary; hosting conditions as in the Oct 23 row,game,World Series Game 5 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,World Series G5,Dodger Stadium,stadium,,"playoff: World Series G5; championship final",no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-28,Wed,20:00,,show,Malcolm Todd: Do That Again Tour,,,Malcolm Todd,pop,pro,,Greek Theatre,amphitheater,"night 1 of 3, Oct 28-30",,no,,confirmed,https://dolosangeles.com/venues/greek-theatre,2026-10-05,,
LA,2026-10-29,Thu,19:00,10 p.m. ET per Sports Brackets,game,Senators at Kings,Los Angeles Kings,Ottawa Senators,,NHL,pro,,Crypto.com Arena,arena,,,no,,confirmed,https://sportsbrackets.net/2026/05/05/2026-27-los-angeles-kings-schedule/,2026-10-05,,
LA,2026-10-29,Thu,19:00,10 p.m. ET per Sports Brackets,game,Sabres at Ducks,Anaheim Ducks,Buffalo Sabres,,NHL,pro,,Honda Center,arena,,,no,,confirmed,https://sportsbrackets.net/2026/05/05/2026-27-anaheim-ducks-schedule/,2026-10-05,,
LA,2026-10-29,Thu,20:00,,show,Malcolm Todd: Do That Again Tour,,,Malcolm Todd,pop,pro,,Greek Theatre,amphitheater,"night 2 of 3, Oct 28-30",,no,,confirmed,https://dolosangeles.com/venues/greek-theatre,2026-10-05,,
LA,2026-10-30,Fri,,time TBA; game also if necessary; hosting conditions as in the Oct 23 row,game,World Series Game 6 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,World Series G6,Dodger Stadium,stadium,,"playoff: World Series G6; championship final",no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-30,Fri,19:00,,show,My Chemical Romance with Special Guest The Used,,,My Chemical Romance with The Used,rock,pro,,Hollywood Bowl,amphitheater,"night 1 of 2, Oct 30-31 (three earlier nights Oct 21-24)",,no,,confirmed,https://www.livenation.com/venue/KovZpZAFFvJA/hollywood-bowl-events,2026-10-05,,
LA,2026-10-30,Fri,,no start time in the sources found,show,Phoebe Bridgers - The Lost Tour,,,Phoebe Bridgers with Alex G,rock,pro,,Intuit Dome,arena,"night 1 of 2, Oct 30-31",,no,,confirmed,https://seatgeek.com/venues/intuit-dome/tickets,2026-10-05,,
LA,2026-10-30,Fri,20:00,,show,Malcolm Todd: Do That Again Tour,,,Malcolm Todd,pop,pro,,Greek Theatre,amphitheater,"night 3 of 3, Oct 28-30",,no,,confirmed,https://dolosangeles.com/venues/greek-theatre,2026-10-05,,
LA,2026-10-31,Sat,13:00,4 p.m. ET per Sports Brackets,game,Sabres at Kings,Los Angeles Kings,Buffalo Sabres,,NHL,pro,,Crypto.com Arena,arena,,,no,,confirmed,https://sportsbrackets.net/2026/05/05/2026-27-los-angeles-kings-schedule/,2026-10-05,,
LA,2026-10-31,Sat,,kickoff TBA,game,Ohio State at USC,USC,Ohio State,,NCAA FB,college,,Los Angeles Memorial Coliseum,stadium,,,no,,confirmed,https://usctrojans.com/news/2026/1/27/big-ten-conference-reveals-2026-usc-football-schedule,2026-10-05,,
LA,2026-10-31,Sat,,kickoff TBA,game,Nevada at UCLA,UCLA,Nevada,,NCAA FB,college,,Rose Bowl Stadium,stadium,,,no,,confirmed,https://www.cbssports.com/college-football/teams/UCLA/ucla-bruins/schedule/,2026-10-05,,
LA,2026-10-31,Sat,14:00,kickoff time announced Jan. 8,game,Austin FC at Galaxy,LA Galaxy,Austin FC,,MLS,pro,,Dignity Health Sports Park,stadium,,giveaway or theme night: Fan Appreciation match (Halloween),no,,confirmed,https://www.lagalaxy.com/news/la-galaxy-announce-kickoff-time-for-oct-31-home-match-vs-austin-fc,2026-10-05,,
LA,2026-10-31,Sat,,"sources disagree: Exposition Park lists 14:00, Ticketmaster lists 19:30",game,Minnesota United at LAFC,LAFC,Minnesota United,,MLS,pro,,BMO Stadium,stadium,,"giveaway or theme night: Halloween; storyline: regular-season home finale",no,,confirmed,https://expositionpark.ca.gov/calendar/category/rideshare/2026-10/?ical=1,2026-10-05,,
LA,2026-10-31,Sat,,time TBA; game also if necessary; hosting conditions as in the Oct 23 row,game,World Series Game 7 (if Dodgers advance),Los Angeles Dodgers,,,MLB,pro,World Series G7,Dodger Stadium,stadium,,"playoff: World Series G7; championship final",no,,if-necessary,https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule,2026-10-05,,
LA,2026-10-31,Sat,19:00,,show,My Chemical Romance with Special Guest Thrice,,,My Chemical Romance with Thrice,rock,pro,,Hollywood Bowl,amphitheater,"night 2 of 2, Oct 30-31",,no,,confirmed,https://www.livenation.com/venue/KovZpZAFFvJA/hollywood-bowl-events,2026-10-05,,
LA,2026-10-31,Sat,,no start time in the sources found,show,Phoebe Bridgers - The Lost Tour,,,Phoebe Bridgers with Alex G,rock,pro,,Intuit Dome,arena,"night 2 of 2, Oct 30-31",,no,,confirmed,https://seatgeek.com/venues/intuit-dome/tickets,2026-10-05,,
LA,2026-10-31,Sat,19:00,,show,"""Weird Al"" Yankovic: UHF Live-to-Screen with Orchestra and Live Q&A",,,"""Weird Al"" Yankovic",comedy,pro,,Greek Theatre,amphitheater,,,no,,confirmed,https://dolosangeles.com/venues/greek-theatre,2026-10-05,,
```

### 3. Crowd events with no venue
```csv
city,date,start_local,end_local,name,route_or_area,expected_crowd,crowd_kind,announced_closures,source_url
LA,2026-10-10,,,Long Beach Marathon weekend: Aquarium of the Pacific 5K,"Downtown Long Beach waterfront",,road race,,https://www.runlongbeach.com/community-relations
LA,2026-10-11,,,Long Beach Marathon and Half Marathon,"Downtown Long Beach, waterfront, Belmont Shore and east Long Beach",,road race,"Most closures and detours 05:00-14:00 per the organizer; the city's 2026 closure list was not found",https://www.runlongbeach.com/community-relations
LA,2026-10-11,09:00,16:00,CicLAvia - Heart of LA,"6.5 miles: Echo Park, Chinatown, Downtown, Little Tokyo, Arts District, Boyle Heights",,open streets,"Route closed to cars 09:00-16:00 per CicLAvia (organizer, via CurationsLA); no city notice found",https://www.curationsla.com/vibes/2026-09-02-ciclavia-heart-of-la-returns-october-11-car-free-echo-park-to-boyle-heights
LA,2026-10-31,18:00,23:00,West Hollywood Halloween Carnaval,"Santa Monica Blvd from N. Doheny Dr to N. La Cienega Blvd, West Hollywood","the city described the 2025 event as drawing many thousands",street festival,,https://outxout.com/blog/west-hollywood-halloween-carnaval-2026
```

### 4. Day-by-day check
Same calendars every day: Dodger Stadium (MLB.com), SoFi, Coliseum + BMO (Exposition Park calendar), Crypto.com Arena, Intuit Dome, Kia Forum, Honda Center, Hollywood Bowl, Greek Theatre, Rose Bowl, Dignity Health Sports Park, Angel Stadium, Peacock + YouTube Theater (partial).

| Date | Found | Note |
|---|---|---|
| Oct 1 | 2 | |
| Oct 2 | 2 | |
| Oct 3 | 7 | |
| Oct 4 | 2 | |
| Oct 5 | 2 | |
| Oct 6 | 3 | |
| Oct 7 | 3 | |
| Oct 8 | 3 | |
| Oct 9 | 5 | 1 if-necessary |
| Oct 10 | 6 | plus Long Beach 5K |
| Oct 11 | 4 | 1 if-necessary; plus Long Beach Marathon, CicLAvia |
| Oct 12 | 2 | 1 if-necessary |
| Oct 13 | 3 | |
| Oct 14 | 5 | 1 if-necessary |
| Oct 15 | 5 | 1 if-necessary, 1 postponed |
| Oct 16 | 6 | 1 if-necessary |
| Oct 17 | 7 | |
| Oct 18 | 5 | 1 if-necessary |
| Oct 19 | 3 | 1 if-necessary |
| Oct 20 | 2 | |
| Oct 21 | 5 | |
| Oct 22 | 2 | |
| Oct 23 | 7 | 1 if-necessary |
| Oct 24 | 10 | 1 if-necessary; plus Hollywood Forever |
| Oct 25 | 3 | |
| Oct 26 | 2 | 1 if-necessary |
| Oct 27 | 4 | 1 if-necessary |
| Oct 28 | 4 | 1 if-necessary |
| Oct 29 | 3 | |
| Oct 30 | 4 | 1 if-necessary |
| Oct 31 | 9 | 1 if-necessary; plus WeHo Carnaval |

### Couldn't confirm (model's list)
- Kia Forum: an unreadable Oct 1 listing, Sin Bandera's date, the date of a canceled Thomas Rhett show.
- Hollywood Bowl: a second Hayley Williams night Oct 6 (one site only), SmartLess Live date, Mark Meadows Oct 15.
- Intuit Dome: Three Days Grace Oct 24, conflicts with Pokémon Night Out.
- Crypto.com Arena: a "Los Angeles Sparks, Oct 28, 8 PM" line, likely a page artifact.
- Greek Theatre: "Lorien Testard Oct 6–7," weekdays don't match 2026.
- Off-Road Expo Oct 3–4: Fairplex or OC Fair & Event Center.
- Size unknown: Neverender Festival Oct 3–4 (Santa Ana), Gryffin on the Exposition Park South Lawn Oct 24, Pomona Swap Meet at Fairplex Oct 18.
- Attendance not found: NLDS G1, USC–Washington, the Ducks' Oct 4 opener (result too).
- Not checked: full YouTube Theater and Peacock Theater calendars; Queen Mary grounds, Pauley Pavilion, Galen Center, Pacific Amphitheatre, FivePoint Amphitheatre; no wrestling or combat sports found.

### Pages that wouldn't load (model's list)
- None. Kia Forum, Intuit Dome and Hollywood Bowl were seen only through ticketing or listing sites, not their own calendars.

### Open questions (model's list)
- Checked on Oct 5, so Oct 5 results may not be final.
- Jodeci at YouTube Theater Oct 25: Intuit Dome is about 2.4 km away; does it count as "about a 5-minute drive"?
- Hollywood Forever Día de los Muertos: no 2026 crowd figure; included as one of Southern California's largest.
- Field naming rights ("UNIQLO Field at Dodger Stadium", "United Airlines Field at L.A. Memorial Coliseum"); venue keeps the stadium names.
- Left out, not checked: Inland Empire and desert venues (Toyota Arena and the Ontario Reign, Acrisure Arena).
- Theme-park Halloween nights (Universal Halloween Horror Nights, Knott's Scary Farm) draw 5,000+ nightly; include?
- Coordinates and some capacities approximate.

## Claude's check (Oct 6, 2026)

### Against the app's own data
**Hand-checked Oct 4 list (`src/data/seed/la20261004.ts`), Kylie's verified list:** the research has only two of its five big events. **Missing:** Galaxy vs. Cruz Azul (friendly, 5:30, Dignity Health Sports Park), SLAYER: Reign in Blood 40th Anniversary (6:00, Kia Forum, sold out), and the 2026 ComplexCon Concert with Playboi Carti (6:00, Crypto.com Arena).
**Hand-checked Oct 3 list (`la20261003.ts`):** the research misses **ComplexCon** at Crypto.com Arena (7:00). It adds two the seed does not have: Breaking Benjamin at Honda Center (6:00) and The Growlers at the Greek (8:00). Dodgers NLDS G1: research 1:00, seed 1:08.
Lesson: the research misses one-off events (friendlies, conventions, special concerts), and the Kia Forum list came only through listing sites. Kia Forum and Crypto.com Arena are the likeliest gaps for the rest of the month.

**Nightly schedule file (`data/schedule-archive/la/2026-10-05.json`, Oct 5–19):** every game in it is in the research. Two differences:
- **Kings home opener Oct 6:** the feed and the arena both say **7:00**; the research used 7:30 from the summer schedule release. Use 7:00.
- **UCLA vs. Wisconsin:** the feed files it on **Fri Oct 16 at 9:00 pm**. Wrong. The game is **Sat Oct 17**, time not set yet (Rose Bowl, NCAA.com, UCLA). See the app bug below.

### Two app bugs this turned up (not fixed; Kylie to OK)
1. **ESPN's "time not set yet" games land on the wrong day.** ESPN marks an unset kickoff as midnight Eastern with a "time not valid" flag. The app ignores the flag and converts it, so the game shows at 9:00 pm Pacific the night before. Affects UCLA Oct 17, 24 and 31 (shown as Oct 16, 23 and 30) and USC–Ohio State Oct 31 (shown as Oct 30). Fix: when the flag says the time isn't set, keep the date as the local date of that placeholder in Eastern time and leave the start time blank.
2. **The Galaxy's home games never reach the app.** ESPN's soccer schedule only lists matches already played unless the request asks for upcoming ones (`fixture=true`). So the Galaxy's Oct 14, 17 and 31 home games are missing from the map and the nightly file. The same request returns them correctly. LAFC and Angel City aren't in the app's feed list at all.

### Facts checked
- Galaxy home games (ESPN, upcoming list): Oct 14 vs. Portland 7:30, Oct 17 vs. San Diego FC 7:30, Oct 31 vs. Austin 2:00. LAFC home: Oct 10 vs. Vancouver 7:30, Oct 14 vs. Austin 7:30, Oct 25 vs. Galaxy 6:00. Matches the research.
- **LAFC vs. Minnesota, Oct 31:** not in ESPN's LAFC list (its October ends with the Galaxy on Oct 25), and the two sources the research found disagree on the time (2:00 vs. 7:30). Treat as unconfirmed until LAFC's own schedule says so.
- USC home: Oct 3 vs. Washington (4:30) and Oct 31 vs. Ohio State (time not set). UCLA home: Oct 17, 24, 31 (times not set). Matches.
- LeBron James signed with the 76ers in 2026 (Sixers, Yahoo, NBC Sports Philadelphia), so the Lakers storyline holds.

### Calls for Kylie
- Theme-park Halloween nights (Universal Horror Nights, Knott's Scary Farm): nightly, 5,000+, but not a single ticketed event. Claude's lean: leave out (they run every night for weeks, so they're background, not competition on a given date).
- Jodeci at YouTube Theater, Oct 25: the theater rule is the same zone, about a 5-minute drive. YouTube Theater sits under SoFi's roof, about 2.4 km from Intuit Dome. Claude's lean: include (same Inglewood roads).
- Inland Empire and desert venues stay out (Kylie's LA + Orange County line).

## Kylie's calls (Oct 6, 2026)
- Theme-park nights: **reopened.** Ordinary park days stay out (near-daily background traffic). Separately ticketed evening events (Halloween Horror Nights, Knott's Scary Farm and the like) decided Oct 6: loggable, not in friction until a real crowd figure exists (see `theme-park-nights.md`).
- Jodeci at YouTube Theater, Oct 25: include (same Inglewood roads as Intuit Dome that night).
- The two ESPN feed bugs: written up as `docs/fix-plan-espn-feed.md`, to run in another session. Not fixed here.
