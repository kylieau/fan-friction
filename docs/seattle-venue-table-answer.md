# Research answer: Seattle venues of 5,000 or more (Oct 6, 2026)

Kylie ran `docs/seattle-venue-table-prompt.md` and pasted the answer as a PDF on Oct 6, 2026. The PDF itself was not saved to the repo; this page is the condensed table Claude folded into `src/data/venues.ts`, one row per venue, with the labels the research gave. Links per figure are in the PDF. If you want the full source kept, drop the PDF into `docs/` as `seattle-venue-table-answer.pdf`.

Scope: King, Pierce and Snohomish counties, plus the Gorge Amphitheatre in George as a satellite.

| Venue (names since 2016) | Where | Capacity by setup | Roof | Hard access | Tenants |
|---|---|---|---|---|---|
| Husky Stadium | University District | football 72,132 official | open (sideline roofs) | no | Washington Huskies football |
| Lumen Field (CenturyLink Field until Nov 19, 2020) | SoDo | NFL 68,740 official, expandable to 72,000; MLS 37,722; NWSL about 10,000 reported | open (partial canopy) | no | Seahawks, Sounders, Reign |
| T-Mobile Park (Safeco Field until the end of 2018) | SoDo | baseball 47,943 official (the app had 47,929); football 30,144 reported | retractable | no | Mariners |
| Pacific Raceways | Kent | 30,000 reported | open | yes, one road in | race series |
| The Gorge Amphitheatre | George (satellite) | concert 27,500 reported; festival 25,000 official | open | yes | festivals |
| Seattle Center grounds | Uptown | festival about 26,000 estimated | open | no | Bumbershoot |
| Tacoma Dome | Tacoma | 21,000 maximum official; basketball 20,722; concert about 17,000 estimated | indoor | no | touring shows |
| Climate Pledge Arena (KeyArena until Oct 5, 2018; reopened Oct 2021) | Seattle Center | basketball 18,300; hockey 17,100; concert 17,200 official; 18,600 in the round | indoor | no | Kraken, Storm, Seattle U (some games) |
| White River Amphitheatre | Auburn | 16,000 official (20,000 before 2015) | seats roofed, lawn open | yes | touring shows |
| Everett Memorial Stadium | Everett | 12,000 reported | open | no | high school football |
| Umpqua Bank Grandstand, Washington State Fair | Puyallup | 10,200 official | open | no | fair concerts |
| Alaska Airlines Arena at Hec Edmundson Pavilion | University District | basketball 10,000 official | indoor | no | Washington Huskies basketball |
| Angel of the Winds Arena (Xfinity Arena until Dec 13, 2017) | Everett | up to 10,000; hockey 8,149; concert 9,000–10,000 | indoor | no | Everett Silvertips |
| Emerald Downs | Auburn | no published capacity; peak crowd about 9,100 | open | no | horse racing |
| Memorial Stadium | Seattle Center | closed for the rebuild; 8,000 seats on reopening in 2027 | open | no | (was Reign, Seattle U soccer) |
| accesso ShoWare Center (ShoWare Center until fall 2017) | Kent | 7,300 maximum official; hockey 5,887 | indoor | no | Seattle Thunderbirds |
| WaMu Theater (in the Lumen Field Event Center; CenturyLink Field Event Center until Nov 19, 2020) | SoDo | 7,000+ general admission official | indoor | no | touring shows |
| Evergreen Speedway | Monroe | 6,000–7,500 reported | open | no | racing |
| Marymoor Live (Marymoor Park concerts) | Redmond | 6,500 official (5,000 before 2023) | open | no | summer concerts |
| Cheney Stadium | Tacoma | baseball 6,500 official | open | no | Tacoma Rainiers |
| Remlinger Farms | Carnation | up to 6,000 reported | open | yes | summer concerts |

## Near the line, left out
Funko Field (Everett), Starfire Sports (Tukwila), Sparks Stadium (Puyallup), Chateau Ste. Michelle (Woodinville), Woodland Park Zoo's ZooTunes, the Paramount Theatre and Baker Stadium (Puget Sound) all sit under about 5,000 in every setup.

## How it was folded in
- Coordinates: OpenStreetMap where it knows the building; the research's figure, marked approximate in a comment, for the Gorge, the fair grandstand and Memorial Stadium.
- T-Mobile Park's retractable roof is stored as `covered` (the closest of the three roof kinds the app has) with a comment.
- KeyArena's pre-2018 figures come from the Wikipedia infobox, labeled reported, so nights there before the rebuild still size.
- Hard access is the measured rule (`scripts/venue-access.mjs`); the research's yes/no is kept as the fallback flag on the four sites it named.
