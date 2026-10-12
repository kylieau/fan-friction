# Mexico City implementation register

Oct 12, 2026 · Cursor Cloud Agent. Research sources, unchanged: `mexico-city-city-type-answer.md` and `mexico-city-venue-table-answer.md` (both dated Oct 11, 2026). This is not a lock from Kylie. The handoff of Oct 12 says the next-twenty queue had not approved a city build. This pass follows the task that asked for the build, and it follows the Milwaukee pattern (no car-share overrides, no invented capacity, no separate opponents file).

Boundary used: CDMX’s 16 alcaldías plus the long-standing ZMVM State of Mexico municipalities and Tizayuca. The August 2026 expansion to 84 units is not applied. Toluca, Puebla and Querétaro stay separate cities. Every fixed room below sits inside CDMX.

## Active fixed rooms (13)

Coordinates are OpenStreetMap Nominatim hits for the building (Oct 12, 2026), not inferred from an address. No venue `carShare`. A setup with no sourced figure is omitted.

| App ID | Room | Selected capacities | What was done |
|---|---|---|---|
| `estadio-banorte` | Estadio Banorte | 81070 soccer, then 87000 soccer from 2026 | Reported pre-renovation 81,070 (Expansión, Mar 2025). Conflicts with 83,264 (Claro Sports), not stored. Post-renovation 87,000 is the stadium director’s figure (TUDN, 11 Jun 2025). Conflicts 87,500, 88,084 and about 90,000 stay in the note. Concert capacity unknown, so no concert row. Names: Estadio Azteca; Estadio Ciudad de México from 2026-06-11; Estadio Banorte from 2026-03-28 (reopening day used as the sponsor-name start; the research says “March 2026”). Display name after that date is Estadio Banorte, because the name list has no end date and the last matching name wins. Roof `open` (partial roof; the pitch stays open). |
| `estadio-gnp-seguros` | Estadio GNP Seguros | 65000 concert from 2024 | Official OCESA concert figure (Pollstar). The 2022 thesis split (37,500 stands + 25,000 field) is not added. Foro Sol is the name before 2024-08-08 (first public shows). Roof `covered`. |
| `estadio-olimpico-universitario` | Estadio Olímpico Universitario | 58445 soccer | Reported (Soccerway; Wikipedia stadium list). Conflicts left in the note: 63,186 (StadiumDB), and city-type figures 72,000 (CDMX tourism), 68,954 (UNAM thesis), 52,000 (StadiumGuide). Roof `open`. |
| `plaza-de-toros-mexico` | Plaza de Toros México | 41262 seated, 50000 concert | Seated 41,262 is the official history figure via Wikipedia. Concert “up to about 50,000” including the floor (N+) is stored as 50,000. Traditional corridas suspended 24 Jun 2025. Wikipedia’s point (19.3833889, -99.1782250) lands on the neighboring stadium; the bullring point is the OSM hit, about 200 m away. Roof `open`. |
| `estadio-ciudad-de-los-deportes` | Estadio Ciudad de los Deportes | 34253 soccer | Reported (Wikipedia citing Liga MX), including 92 boxes. Conflicts with 36,681 (StadiumDB; CDMX tourism). Estadio Azul is the name before 2018-01-01. The exact rename day in 2018 was not published; January 1 is the year boundary only. No regular 2026 Liga MX tenant. Roof `open`. On the Ticketmaster sports sweep. |
| `arena-cdmx` | Arena Ciudad de México | 8000 basketball, 22300 concert | Basketball is the reported G League limit of about 8,000. Concert is the official maximum. The secondary 6,000–23,000 range was not used. Names include Mexico City Arena and Arena CDMX; the official name dates from the 25 Feb 2012 opening. Roof `indoor`. Not on the sports sweep, because the Capitanes feed owns the building. |
| `palacio-de-los-deportes` | Palacio de los Deportes | 15000 concert, then 21000 concert | Official OCESA range 15,000–21,000 (Pollstar). The last concert row is the ceiling, same pattern as other rooms with a published range. Not used: 17,000 (El CEO), 22,000 (thesis), 24,500 (hotel blog), 36,709 (HireSpace). Domo de Cobre is kept as an alias. No opening day was invented. Roof `indoor`. |
| `estadio-alfredo-harp-helu` | Estadio Alfredo Harp Helú | 20576 baseball from 2019 | Official at the March 2019 opening (MLB.com). Conflicts with 20,062 (Expansión, Aug 2026). Canopy not verified; roof `open`. On the sports sweep. LMB is not the MLB feed. |
| `arena-mexico` | Arena México | 16500 (no setup) | Reported wrestling and boxing figure, including the CDMX tourism page. No separate concert figure. OSM point is within meters of the research Sygic point. Roof `indoor`. On the sports sweep. No CMLL team record. |
| `estadio-wilfrido-massieu` | Estadio Wilfrido Massieu | 13000 football | Reported (Excélsior, Sep 2015). Conflicts with 15,000 in a 2021 Wikipedia mirror. ONEFA. Roof `open`. On the sports sweep. |
| `auditorio-nacional` | Auditorio Nacional | 9366 concert | Official seated figure (CDMX tourism). The hotel-blog 10,000 was not used. Lunario is not merged. Roof `indoor`. |
| `pepsi-center-wtc` | Pepsi Center WTC | 3342 seated, 6486 concert, 8000 concert | Auditorium 3,342 (Venue Coalition). Wikipedia’s 3,478 and overall 7,505 stay in the note. Concert GA range 6,486–8,000; the last row is the ceiling. The WTC convention halls are not this room. Roof `indoor`. |
| `gimnasio-juan-de-la-barrera` | Gimnasio Olímpico Juan de la Barrera | 5242 basketball | One Mediotiempo column. The venue research asked for an official figure before treating this as a friction room. It is included because a sourced figure exists, and it sits just above 5,000, so the existing friction rule will apply. Roof `indoor`. On the sports sweep. |

## Left out, and why

| Research item | Left out because |
|---|---|
| Autódromo Hermanos Rodríguez | No verified fixed capacity. The hotel-blog ~110,000 is an estimate and was rejected. Open grounds and festival/F1 dates are Table B, not a generic room. |
| World Trade Center convention halls / Sala Mexica (3,030) | Convention halls are not venue rows (Kylie, Oct 7). The research treats them as expos, not spectator events. |
| Lunario del Auditorio Nacional | Separate room. Capacity was not verified. |
| Cancha Centenario / Instalaciones Club América Coapa | Capacity unknown. América Femenil games there are skipped. Only her Banorte games are saved. |
| Unverified leads | Teatro Metropólitan, Frontón México, Auditorio BB, Velódromo Olímpico, Centro Citibanamex, Hipódromo de las Américas, Estadio Fray Nano, Arena Coliseo, Parque Bicentenario, Campo Marte, Estadio Jesús Martínez “Palillo”, and any State of Mexico 1,000+ rooms. No capacity was published in the research. |
| Estadio Cuauhtémoc, Nemesio Díez, Corregidora, Coruco Díaz | Outside the boundary. Cruz Azul’s Clausura 2026 home games at Cuauhtémoc are not mapped, because there is no Puebla metro. |
| Proposed rooms | Cruz Azul’s own stadium and a Diablos G League arena are not built. |
| Table B dates | F1 (30 Oct–1 Nov 2026), Vive Latino, Corona Capital (21–23 Nov 2026), the Fan Fest, the Maratón (30 Aug 2026, runners not spectators) and the Medio Maratón. Not seeded. A grounds event must not be added to the 65,000 GNP room. |
| Mexico national team | A Banorte tenant for friendlies, not a home club with a season feed. |
| Atlante Femenil | On the ESPN Liga MX Femenil list at “CAR Atlante Cancha 1”. The research team table did not include them. Not added. |
| CMLL as a team | Arena México is the room. No weekly-show adapter. |

## Teams

Home clubs, all `metroId: mexico-city`. The old visitor-only `cruz-azul` record was filled in rather than duplicated.

| App ID | League | Feed |
|---|---|---|
| `club-america`, `cruz-azul`, `atlante`, `pumas-unam` | Liga MX | ESPN `soccer/mex.1` ids 227, 218, 226, 233. Checked Oct 12, 2026. |
| `america-femenil`, `pumas-femenil`, `cruz-azul-femenil` | Liga MX Femenil | ESPN `soccer/mex.w.1` ids 22415, 133981, 133982. |
| `capitanes` | NBA G League | ESPN `basketball/nba-development` id 124612. |
| `diablos-rojos` | LMB | No feed. Harp Helú is on the sports sweep. |
| `diablos-rojos-softball` | LMS | No feed. |
| `diablos-rojos-basketball` | LNBP | No feed. Gimnasio Juan de la Barrera is on the sports sweep. |
| `aguilas-blancas`, `burros-blancos` | ONEFA | No feed. Wilfrido Massieu is on the sports sweep. |

ESPN home names mapped to rooms: Estadio Banorte / Azteca / Ciudad de México, Estadio Olímpico Universitario, Estadio Ciudad de los Deportes / Azul, Mexico City Arena / Arena CDMX / Arena Ciudad de México. Not mapped: Estadio Cuauhtémoc, Instalaciones Club América Coapa, Estadio Centenario, CAR Atlante Cancha 1, Mandalay Bay, Orange County Convention Center.

Liga MX regular season on ESPN is named “Torneo Apertura” or “Torneo Clausura”, not “Regular Season”. `scripts/attendance-collect.mjs` now treats those two names as regular season. Playoff names such as “Clausura - Quarterfinals” and “Apertura 2024 - Finals” stay postseason. MLS “Regular Season” is unchanged. Saved files for other metros were not rewritten.

## City type, zones, map

- City type `transit`. Fallback car share 0.4. No venue overrides. The research’s low-confidence figures stay in the answer: Banorte World Cup 0.35 (measured components), Liga MX with parking 0.50, Arena CDMX 0.60 (from a parking ratio; the Milwaukee pattern does not wire a share inferred from parking), F1 0.35, GNP concerts 0.50 marked “use the fallback”. Confidence in the research is low-to-moderate. Contrary evidence (ride-hail counts as car, Metro closes at midnight, Arena CDMX / Pepsi / Banorte-with-parking) is in the city-type answer.
- Zones, within the existing ~1.25 mile rule: Magdalena Mixhuca (GNP, Palacio, Harp Helú) and Nápoles (Ciudad de los Deportes, Plaza México, Pepsi Center). Banorte and Olímpico are a few miles apart and are not one zone.
- Map: code `MEX` (assistant choice; Montreal’s pattern is a short city code), name Mexico City, time zone `America/Mexico_City` (IANA; CDMX is UTC−6 year-round, no DST since 30 Oct 2022), center `[-99.14, 19.4]`, zoom `10.2`. No starter metro existed, so this is a new record, and `mexico-city` is in `COVERED_METRO_IDS`.

## Attendance and expected draws (Oct 12, 2026)

Collected into `data/attendance/mexico-city/`. Counts are announced figures the feed actually returned. 2026 Liga MX announced attendance was missing, so those games are not in the files.

| Team | Games saved | Regular / postseason | Buildings | Seasons with a crowd |
|---|---|---|---|---|
| Club América | 61 | 49 / 12 | Banorte 26, Ciudad de los Deportes 35 | 2023–2025 |
| Cruz Azul | 51 | 42 / 9 | Banorte 10, Ciudad de los Deportes 22, Olímpico 19 | 2023–2025 |
| Pumas UNAM | 55 | 51 / 4 | Olímpico 55 | 2023–2025 |
| Capitanes | 66 | 65 / 1 | Arena CDMX 66 | 2023–2026 |
| América Femenil | 2 | 2 / 0 | Banorte | 2026 |
| Pumas Femenil | 4 | 4 / 0 | Olímpico | 2026 |
| Atlante | 0 | — | 2026 counts missing; earlier homes not on this feed as saved games | — |
| Cruz Azul Femenil | 0 | — | ESPN home “Estadio Centenario” or blank; not mapped. Announced crowds on those games were not turned into a capacity. | — |

Expected draws were spliced into the four arrays in `src/data/expectedDrawIndex.ts`. The full calibrate was not run. No `expectedDrawIndexMexicoCityOpponents.ts`. Other metros’ objects are byte-identical to `main`; only Mexico City objects were inserted.

- 45 draw rows: Capitanes 14, América 11, Cruz Azul 8, Pumas 11, Pumas Femenil 1. América Femenil (2 games) and the empty files produced none. A bucket needs 3 games.
- 57 opponent ratios, inside `OPPONENT_RATIOS`.
- 0 season levels. The shared rule writes a level only while a season is still in progress. None of these clubs qualified on Oct 12.
- 0 postseason rows. Liguilla quarterfinals and semifinals do map to a round band, and finals worded “Apertura 2023 - Finals - 2nd Leg” do not (`roundBand` looks for a name that starts with “Final” or “Finals - Game”). A team row needs 8 games in that band across two seasons, or a league pool of 20 games, 4 teams and 2 seasons. This splice used only Mexico City clubs, so the Liga MX pool is three teams and the G League pool is Capitanes alone. Neither pool qualifies. Rows were not invented, and other leagues’ pools were not recalibrated.

A concert at Banorte has no concert capacity. The shared lookup then uses the first soccer row (81,070), not the 2026 soccer figure (87,000). That lookup was not changed.

## Not run in this pass

- Weather, the 14-day schedule archive, and results. Their index scripts rewrite every metro. Other city builds are in progress, so those shared indexes were left alone.
- `venue-access.mjs` (Open-Elevation has been returning 429 on other cities). No access flag was set by hand.
- Ticketmaster venue ids. Discovery was not queried. Matching is by name, and by proximity only when exactly one room is within 300 m. Plaza México and Ciudad de los Deportes are about 200 m apart, so a listing near both will not proximity-match.
- Phone screenshots of a populated night. The home list does include Mexico City, and choosing it opens the map on that metro (`center [-99.14, 19.4]`, zoom 10.2). A server-side read of the ESPN schedules on Oct 12 returned 31 upcoming home games: 9 at Banorte, 5 at Olímpico, 17 at Arena CDMX. Examples: Atlante vs. Pumas on Oct 16 at 21:00, América vs. Pachuca on Oct 25 at 17:00, Pumas vs. América on Nov 7 at 21:00, Capitanes vs. Legends on Nov 8 at 18:30. The phone itself still shows no events for those dates, because ESPN sends no CORS header and the browser cannot read the feed. That is the existing path (the nightly catalog is what a phone reads), not a missing venue match.
- `npm run build`, `npm run city-build-check` and `node scripts/storage-check.mjs` are the checks for this pass. All three passed on Oct 12.

## Open questions for the next review

These were not resolved by guessing.

1. Wire any car share, or keep the transit fallback 0.4 on every room? The research recommends overrides only as low-confidence estimates. Arena CDMX 0.60 is a parking-ratio estimate.
2. Olímpico capacity: 58,445 is stored. Also published: 63,186, 72,000, 68,954, 52,000.
3. Ciudad de los Deportes: 34,253 stored vs 36,681.
4. Banorte: 81,070 vs 83,264 before the renovation; 87,000 vs 87,500 / 88,084 / about 90,000 after. Concert capacity is unknown.
5. Should the screen say Estadio Ciudad de México during the World Cup window, then return to Estadio Banorte? The name list cannot end a name, so Banorte stays on screen from 28 Mar 2026.
6. Is 28 Mar 2026 the right start for the Banorte name, or only “March 2026”?
7. Palacio: store the 15,000–21,000 range with 21,000 as the concert ceiling, or one figure?
8. Pepsi Center: seated 3,342 vs 3,478; concert ceiling 8,000 vs the unused overall 7,505.
9. Harp Helú: 20,576 vs 20,062.
10. Wilfrido Massieu: 13,000 (2015) vs 15,000 (2021 mirror).
11. Plaza concert “up to about 50,000” stored as 50,000. Leave the concert setup unknown instead?
12. Gimnasio Juan de la Barrera at 5,242 will count toward friction. Confirm officially, or hold it under the friction line until then?
13. Exact day Estadio Azul became Estadio Ciudad de los Deportes in 2018. January 1 is only the year boundary.
14. Display code `MEX`, English name “Mexico City”, and the map center and zoom.
15. Zone labels “Magdalena Mixhuca” and “Nápoles”.
16. Cruz Azul Femenil’s home. ESPN says Estadio Centenario, with announced crowds roughly 2,600–4,000. That is not a capacity. The research said the home was unknown.
17. Add Atlante Femenil? They were not in the research team table.
18. Atlante men’s crowds were not in the feed for the seasons collected.
19. 2026 Liga MX announced attendance was not in the feed yet.
20. No schedule adapter for LMB, LNBP, LMS, ONEFA or CMLL. Those pages say there is no schedule until a Ticketmaster sports listing matches.
21. MLB Mexico City Series at Harp Helú is not a Diablos season and was not seeded.
22. NBA Mexico City Game, 7 Nov 2026 (Nuggets–Pacers) at Arena CDMX. The building is not on the sports sweep, and the game is not on the Capitanes schedule, so a Sports-segment listing is dropped.
23. When a Puebla metro exists, attach Cruz Azul’s Clausura 2026 Cuauhtémoc games to it.
24. Four clubs share Banorte (América, Cruz Azul, Atlante, América Femenil). The app already keeps one event per fixture. Worth a look on a real Banorte date.
25. No monthly heat baseline was added.
26. No broad-team flag. América is culturally large; the research has no audience poll.
27. Live liguilla names (“Quarterfinals”, “Finals”) are not marked as playoffs on the upcoming schedule. `roundLabel.ts` was not changed, so a shared rule was not rewritten for one league.
28. Data rights for Liga MX, LMB and local ticketing were not reviewed. ESPN is the same unofficial free feed already used. No new paid source.
