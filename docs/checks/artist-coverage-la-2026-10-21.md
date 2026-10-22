# Coverage check: the audit's 100 Los Angeles events against the app's catalog

Written Oct 21, 2026 (evening) by Claude Code. Input: the 100-event Los Angeles worksheet in `docs/research/topics/artist-coverage-audit-answer.md` (Oct 26 to Nov 22, 2026, 22 rooms). The researcher could not reach the feeds, so this check joins its rows to what the app lists (`getCityDate('la', date)` headless, the shared catalog as of the Oct 21 nightly run), by room and date, then by the act's name against the app's title. The audit is the reference list; the app's feed is what is measured. A scratch script did the join; the per-row result is below so it can be redone by hand.

## The numbers

| Measure | Count |
|---|---|
| Events in the worksheet | 100 |
| Listed by the app (same room, same date, the act named) | 82 |
| Of those, the app's title names the act differently from the room (XG, Moenia without Maria Jose, Tusk, the Adicts without support, the Chicks, Pimpinela, Bonobo, E-40 for "How The West Was Won") | 10 |
| Not listed | 18 |
| Not listed, sold on AXS | 9 |
| Not listed, sold on LA Phil's own box office | 3 |
| Not listed, sold on Ticketmaster | 2 |
| Not listed, sold on LA Opera's own box office | 2 |
| Not listed, sold on TicketSpice | 1 |
| Not listed, sold on NHRA's own ticketing | 1 |
| Listed rows where the app's start time matches the room's | 76 of 82 (the misses: Sesame Street's 18:00 second show collapsed onto the 14:00 one by the one-show-per-day rule; El Fantasma's 20:01; Maryland at USC, kickoff TBA) |
| Genres on the Ticketmaster rows listed | Rock 16, other 9, Pop 8, Hip-Hop/Rap 5, Latin 5, Dance/Electronic 5, R&B 4, Country 4, Metal 3, Other 3, Undefined 2, Alternative 1 |

## What it says

- **Ticketmaster and the league feeds see 82 of the 100.** Every sports row (ESPN) and every Ticketmaster-sold row is listed, bar two, and those two were a bug: Ticketmaster marks a show that moved date as "rescheduled" and the capture dropped that status along with cancelled and postponed. A rescheduled listing carries its new date and is on sale. Eleven live Los Angeles listings in the next two months were being dropped this way (Gerardo Ortiz, Marisela and Grupo Duelo at the YouTube Theater among them, a 6,000-seat room that feeds friction). Fixed the same evening: only cancelled and postponed drop now; the next nightly run picks them up.
- **The 16 real misses are sellers the app does not read:** AXS (the Fox Theater Pomona's whole month, the Peacock Theater's Armenian show, the boxing card), the LA Opera and LA Phil box offices, one festival on TicketSpice and the NHRA Finals. AXS is a known accepted limitation (Kylie, Oct 19, 2026); the Phil and the Opera are the two biggest own-box-office rooms in the city and were not in any earlier count.
- **Names:** the app's title is the act's name, not the tour's, in every listed Ticketmaster row but one (Gianmarco Soresi keeps "The Misery Loves Tour"). Where a bill has two acts the title keeps the first (Moenia, the Adicts, E-40 for a branded night). Lyle Lovett's listing names a different ensemble from the room's ("Acoustic Group" vs "Small Large Band").
- **Genres:** the feed's word is usable for rock, pop, metal, country, R&B and dance, and poor for the rest: Don Omar and Arcángel read Hip-Hop/Rap (reggaeton), Karan Aujla Hip-Hop/Rap (Punjabi pop), El Fantasma "Other" (regional Mexican), two tribute nights "Undefined", Straight No Chaser (a cappella) Rock. This is the Latin-detail problem the audit was written for, visible in Los Angeles before Mexico City.
- **One show per day:** the capture keeps one row per performer per room per date (a note in the code, C014), so Sesame Street's two Nov 21 performances are one row at 14:00. Expected, and worth knowing when a room runs matinees.

## What this does not say

The worksheet is a purposive extract, not a census: the researcher read 34 of the city's 116 rooms and chose 100 events across 22 of them. So 82 of 100 is coverage of what the researcher found, weighted toward Ticketmaster rooms, not the city's coverage. A room-first census (every ticketed event in every room over the window) is what would turn this into a city number; that is the trimmed brief for the next research run.

## Per row

| ID | Room | Date | Room's time | Act (room) | App | App title | App start | App genre or sport | Source |
|---|---|---|---|---|---|---|---|---|---|
| LA001 | C | 2026-10-27 | U/20:00 | Portland Trail Blazers vs Los Angeles Lakers | listed | Lakers vs. Blazers | 20:00 | basketball | espn |
| LA002 | C | 2026-10-28 | 19:00/20:00 | YG | listed | YG | 20:00 | Hip-Hop/Rap | ticketmaster |
| LA003 | C | 2026-10-29 | 18:30/19:00 | Ottawa Senators vs Los Angeles Kings | listed | Kings vs. Senators | 19:00 | hockey | espn |
| LA004 | C | 2026-10-31 | 11:30/13:00 | Buffalo Sabres vs Los Angeles Kings | listed | Kings vs. Sabres | 13:00 | hockey | espn |
| LA005 | C | 2026-11-01 | U/18:00 | Toronto Raptors vs Los Angeles Lakers | listed | Lakers vs. Raptors | 18:00 | basketball | espn |
| LA006 | C | 2026-11-02 | U/19:00 | Miami Heat vs Los Angeles Lakers | listed | Lakers vs. Heat | 19:00 | basketball | espn |
| LA007 | C | 2026-11-04 | U/19:00 | San Jose Sharks vs Los Angeles Kings | listed | Kings vs. Sharks | 19:00 | hockey | espn |
| LA008 | C | 2026-11-05 | 18:30/20:00 | XG WORLD TOUR: THE CORE IN LOS ANGELES | listed | XG | 20:00 | Pop | ticketmaster |
| LA009 | C | 2026-11-06 | U/19:00 | Portland Trail Blazers vs Los Angeles Lakers | listed | Lakers vs. Blazers | 19:00 | basketball | espn |
| LA010 | C | 2026-11-07 | 16:30/18:00 | Pittsburgh Penguins vs Los Angeles Kings | listed | Kings vs. Penguins | 18:00 | hockey | espn |
| LA011 | C | 2026-11-09 | 19:00/20:00 | Karan Aujla | listed | Karan Aujla | 20:00 | Hip-Hop/Rap | ticketmaster |
| LA012 | C | 2026-11-10 | 17:30/19:00 | Nashville Predators vs Los Angeles Kings | listed | Kings vs. Predators | 19:00 | hockey | espn |
| LA013 | C | 2026-11-12 | 17:30/19:00 | New York Islanders vs Los Angeles Kings | listed | Kings vs. Islanders | 19:00 | hockey | espn |
| LA014 | C | 2026-11-21 | 18:30/20:00 | KATSEYE | listed | KATSEYE | 20:00 | Pop | ticketmaster |
| LA015 | C | 2026-11-22 | 18:30/20:00 | KATSEYE | listed | KATSEYE | 20:00 | Pop | ticketmaster |
| LA016 | K | 2026-11-06 | U/U | DON OMAR | listed | Don Omar | 20:00 | Hip-Hop/Rap | ticketmaster |
| LA017 | K | 2026-11-07 | U/20:00 | MON LAFERTE | listed | Mon Laferte | 20:00 | Pop | ticketmaster |
| LA018 | K | 2026-11-09 | U/20:00 | JESSIE REYEZ | listed | Jessie Reyez | 20:00 | R&B | ticketmaster |
| LA019 | K | 2026-11-12 | U/20:00 | THE SMASHING PUMPKINS | listed | The Smashing Pumpkins | 20:00 | Rock | ticketmaster |
| LA020 | K | 2026-11-13 | U/18:00 | SLAYER | listed | Slayer | 18:00 | Metal | ticketmaster |
| LA021 | K | 2026-11-15 | U/20:00 | RAWAYANA | listed | Rawayana | 20:00 | Pop | ticketmaster |
| LA022 | K | 2026-11-18 | U/19:00 | TEDDY SWIMS | listed | Teddy Swims | 19:00 | Pop | ticketmaster |
| LA023 | Y | 2026-10-29 | 19:00/20:00 | Maria Jose + Moenia | listed | Moenia | 20:00 | Latin | ticketmaster |
| LA024 | Y | 2026-10-30 | 19:00/20:00 | Bronco | listed | Bronco | 20:00 | Latin | ticketmaster |
| LA025 | Y | 2026-10-31 | 18:00/19:00 | Skillet | listed | Skillet | 19:00 | Rock | ticketmaster |
| LA026 | Y | 2026-11-05 | 19:00/20:00 | Alanis Morissette: Butterfly with a Machete, The LA Residency | listed | Alanis Morissette | 20:00 | Rock | ticketmaster |
| LA027 | Y | 2026-11-06 | 19:00/20:00 | Alanis Morissette: Butterfly with a Machete, The LA Residency | listed | Alanis Morissette | 20:00 | Rock | ticketmaster |
| LA028 | Y | 2026-11-07 | 19:00/20:00 | Grupo Cañaveral & Los Hermanos Flores | listed | Grupo Cañaveral | 20:00 | Latin | ticketmaster |
| LA029 | Y | 2026-11-10 | 19:00/20:00 | Alanis Morissette: Butterfly with a Machete, The LA Residency | listed | Alanis Morissette | 20:00 | Rock | ticketmaster |
| LA030 | Y | 2026-11-11 | 19:00/20:00 | Alanis Morissette: Butterfly with a Machete, The LA Residency | listed | Alanis Morissette | 20:00 | Rock | ticketmaster |
| LA031 | Y | 2026-11-13 | 18:30/19:30 | How The West Was Won | listed | E-40 | 19:30 | Hip-Hop/Rap | ticketmaster |
| LA032 | Y | 2026-11-20 | 19:00/20:00 | Arcángel | listed | Arcángel | 20:00 | Hip-Hop/Rap | ticketmaster |
| LA033 | Y | 2026-11-21 | 19:00/20:00 | Enrique Bunbury | listed | Bunbury | 20:00 | Latin | ticketmaster |
| LA034 | P | 2026-11-14 | 18:00/19:00 | Rock & Roll Hall Of Fame Induction 2026 | listed | 2026 Rock and Roll Hall of Fame | 19:00 | other | ticketmaster |
| LA035 | P | 2026-11-20 | 18:30/19:30 | BOYNEXTDOOR | listed | BOYNEXTDOOR | 19:30 | Pop | ticketmaster |
| LA036 | P | 2026-11-21 | 19:00/20:00 | El Fantasma | listed | El Fantasma | 20:01 | Other | ticketmaster |
| LA037 | P | 2026-11-22 | 18:00/19:00 | Sing Yerevan Sing | not listed: AXS |  |  |  |  |
| LA038 | S | 2026-11-01 | U/13:05 | Rams vs. Chargers | listed | Rams vs. Chargers | 13:05 | football | espn |
| LA039 | S | 2026-11-08 | U/13:05 | Chargers vs. Texans | listed | Chargers vs. Texans | 13:05 | football | espn |
| LA040 | S | 2026-11-15 | U/19:30 | The R&B Tour - Starring Usher Raymond & Chris Brown | listed | Usher Raymond & Chris Brown | 19:30 | R&B | ticketmaster |
| LA041 | S | 2026-11-16 | U/19:30 | The R&B Tour - Starring Usher Raymond & Chris Brown | listed | Usher Raymond & Chris Brown | 19:30 | R&B | ticketmaster |
| LA042 | S | 2026-11-22 | U/13:05 | Chargers vs. Jets | listed | Chargers vs. Jets | 13:05 | football | espn |
| LA043 | D | 2026-10-31 | 12:30/14:00 | LA Galaxy vs Austin FC | listed | Galaxy vs. Austin FC | 14:00 | soccer | espn |
| LA044 | D | 2026-11-01 | U/14:00 | Angel City FC vs Boston Legacy FC | listed | Angel City vs. Legacy FC | 14:00 | soccer | espn |
| LA045 | DT | 2026-11-14 | 14:00/14:50 | Matchroom Boxing Presents: Diego Pacheco vs Darius Fulghum | not listed: AXS |  |  |  |  |
| LA046 | L | 2026-10-31 | U/16:30 | Ohio State vs USC | listed | USC vs. Ohio State Buckeyes | 16:30 | football | espn |
| LA047 | L | 2026-11-21 | U/TBA | Maryland vs USC | listed | USC vs. Maryland |  | football | espn |
| LA048 | K | 2026-11-14 | U/18:00 | SLAYER | listed | Slayer | 18:00 | Metal | ticketmaster |
| LA049 | G | 2026-11-07 | 12:00/14:00 | Dial Up Festvial | not listed: TicketSpice |  |  |  |  |
| LA050 | N | 2026-11-15 | U/U | In-N-Out Burger NHRA Finals | not listed: NHRA's own ticketing |  |  |  |  |
| LA051 | CC | 2026-10-27 | U/19:30 | Jim Henson's Labyrinth In Concert | listed | Jim Henson's Labyrinth | 19:30 | other | ticketmaster |
| LA052 | CC | 2026-10-29 | U/19:30 | Femmes of Rock | listed | Femmes Of Rock | 19:30 | Undefined | ticketmaster |
| LA053 | CC | 2026-10-31 | U/19:00 | TUSK - The Classic Fleetwood Mac Tribute | listed | Tusk | 19:00 | Undefined | ticketmaster |
| LA054 | CC | 2026-11-01 | U/19:30 | Direct from Sweden: The Music of ABBA | not listed: Ticketmaster, status "rescheduled" (dropped by the capture; fixed Oct 21) |  |  |  |  |
| LA055 | CC | 2026-11-03 | U/20:00 | Lyle Lovett and his Small Large Band | listed | Lyle Lovett and his Acoustic Group | 20:00 | Country | ticketmaster |
| LA056 | CC | 2026-11-05 | U/20:00 | Penn & Teller | not listed: Ticketmaster, status "rescheduled" (dropped by the capture; fixed Oct 21) |  |  |  |  |
| LA057 | CC | 2026-11-07 | U/20:00 | Revisiting Creedence: The Legacy Continues | listed | Revisiting Creedence | 20:00 | Rock | ticketmaster |
| LA058 | CC | 2026-11-08 | U/19:00 | The Billy Joel Legacy | listed | The Billy Joel Legacy | 19:00 | Pop | ticketmaster |
| LA059 | CC | 2026-11-13 | U/20:00 | Straight No Chaser - Making Spirits Bright Tour | listed | Straight No Chaser | 20:00 | Rock | ticketmaster |
| LA060 | CC | 2026-11-14 | U/20:00 | Derek Hough Dance for the Holidays | listed | Derek Hough | 20:00 | other | ticketmaster |
| LA061 | CC | 2026-11-20 | U/20:00 | An Evening of Alton Brown | listed | An Evening of Alton Brown | 20:00 | other | ticketmaster |
| LA062 | CC | 2026-11-21 | U/14:00 | Sesame Street Live: Elmo’s Got the Moves! | listed | Elmo's Got the Moves | 14:00 | other | ticketmaster |
| LA063 | CC | 2026-11-21 | U/18:00 | Sesame Street Live: Elmo’s Got the Moves! | listed | Elmo's Got the Moves | 14:00 | other | ticketmaster |
| LA064 | F | 2026-10-26 | U/20:00 | Animal Collective | not listed: AXS |  |  |  |  |
| LA065 | F | 2026-10-28 | U/20:00 | Fastball | not listed: AXS |  |  |  |  |
| LA066 | F | 2026-10-29 | U/18:30 | It's The Great Pumpkin Charlie Brown Jazz & Movie | not listed: AXS |  |  |  |  |
| LA067 | F | 2026-11-06 | U/20:00 | Cumbia en el Cielo | not listed: AXS |  |  |  |  |
| LA068 | F | 2026-11-08 | U/20:00 | The Story So Far | not listed: AXS |  |  |  |  |
| LA069 | F | 2026-11-14 | U/19:00 | Just Love Me Right | not listed: AXS |  |  |  |  |
| LA070 | F | 2026-11-22 | U/17:00 | SugaKane The Homecoming | not listed: AXS |  |  |  |  |
| LA071 | B | 2026-10-27 | 19:00/20:00 | Ax and the Hatchetmen | listed | Ax and the Hatchetmen | 20:00 | Rock | ticketmaster |
| LA072 | B | 2026-10-31 | 19:00/20:00 | Parra For Cuva | listed | Parra for Cuva | 20:00 | Dance/Electronic | ticketmaster |
| LA073 | B | 2026-11-05 | 19:00/20:00 | Medium Build | listed | Medium Build | 20:00 | Rock | ticketmaster |
| LA074 | B | 2026-11-06 | 19:00/20:00 | Wuki | listed | Wuki | 20:00 | Dance/Electronic | ticketmaster |
| LA075 | B | 2026-11-07 | 19:00/20:00 | SYML | listed | SYML | 20:00 | Rock | ticketmaster |
| LA076 | B | 2026-11-13 | 19:00/20:00 | DJ Meredith Marks | listed | DJ Meredith Marks | 20:00 | Dance/Electronic | ticketmaster |
| LA077 | B | 2026-11-14 | 19:00/20:00 | Jai Wolf | listed | Jai Wolf | 20:00 | Dance/Electronic | ticketmaster |
| LA078 | B | 2026-11-19 | 19:00/20:00 | BERTHA: Grateful Drag | listed | BERTHA: Grateful Drag | 20:00 | Rock | ticketmaster |
| LA079 | O | 2026-10-27 | U/19:30 | Carmen | not listed: LA Opera's own box office |  |  |  |  |
| LA080 | MV | 2026-10-30 | 20:00/20:00 | It's A 2000's Party – 18+ | listed | It's A 2000's Party - 18+ | 20:00 | Other | ticketmaster |
| LA081 | MV | 2026-11-04 | 19:00/20:00 | The Adicts, The Mainliners, Dr Know | listed | The Adicts | 20:00 | Alternative | ticketmaster |
| LA082 | MV | 2026-11-07 | 18:00/19:00 | Fred Armisen: Comedy for Musicians But Everyone is Welcome | listed | Fred Armisen: Comedy for Musicians But Everyone is Welcome | 19:00 | Other | ticketmaster |
| LA083 | GA | 2026-10-31 | U/20:00 | W.A.S.P. | listed | W.A.S.P. | 20:00 | Metal | ticketmaster |
| LA084 | O | 2026-11-21 | U/19:30 | Candide | not listed: LA Opera's own box office |  |  |  |  |
| LA085 | H | 2026-10-27 | U/19:30 | THE WHO'S TOMMY | listed | The Who's Tommy (Touring) | 19:30 | other | ticketmaster |
| LA086 | GA | 2026-11-10 | U/19:00 | Daughtry | listed | Daughtry | 19:00 | Rock | ticketmaster |
| LA087 | OC | 2026-10-28 | 19:00/20:00 | Montell Fish - The Nest Tour | listed | Montell Fish | 19:00 | R&B | ticketmaster |
| LA088 | H | 2026-11-19 | U/20:00 | Jackson Browne | listed | Jackson Browne | 20:00 | Rock | ticketmaster |
| LA089 | H | 2026-11-20 | U/20:00 | Jackson Browne | listed | Jackson Browne | 20:00 | Rock | ticketmaster |
| LA090 | H | 2026-11-22 | U/20:00 | Jackson Browne | listed | Jackson Browne | 20:00 | Rock | ticketmaster |
| LA091 | T | 2026-11-01 | U/20:30 | The Chicks Taking The Long Way 20th Anniversary Tour | listed | The Chicks | 20:30 | Country | ticketmaster |
| LA092 | T | 2026-11-02 | U/20:30 | The Chicks Taking The Long Way 20th Anniversary Tour | listed | The Chicks | 20:30 | Country | ticketmaster |
| LA093 | T | 2026-11-03 | U/20:30 | The Chicks Taking The Long Way 20th Anniversary Tour | listed | The Chicks | 20:30 | Country | ticketmaster |
| LA094 | T | 2026-11-13 | 19:00/20:00 | Pimpinela USA Tour Leyendas | listed | Pimpinela | 20:00 | Latin | ticketmaster |
| LA095 | T | 2026-11-14 | U/20:00 | Outlander in Concert | listed | Outlander in Concert | 20:00 | other | ticketmaster |
| LA096 | W | 2026-10-27 | U/20:00 | Orchestre Symphonique de Montréal with Rafael Payare | not listed: LA Phil's own box office |  |  |  |  |
| LA097 | W | 2026-10-29 | U/20:00 | Seasons of America with Teddy Abrams & Ray Chen | not listed: LA Phil's own box office |  |  |  |  |
| LA098 | W | 2026-10-30 | U/20:00 | Lila Downs | not listed: LA Phil's own box office |  |  |  |  |
| LA099 | V | 2026-11-11 | 19:00/20:00 | KCRW Presents Bonobo: Distance in Static Live North American Tour | listed | Bonobo | 19:00 | Dance/Electronic | ticketmaster |
| LA100 | R | 2026-11-13 | U/19:00 | Gianmarco Soresi | listed | Gianmarco Soresi: The Misery Loves Tour | 19:00 | other | ticketmaster |
