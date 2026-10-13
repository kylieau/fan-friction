# Team colors for the Faves tab: research answer

*Prepared Monday, October 12, 2026. Covers the 26 Fan/Friction metros.*

## Read this first

In this pass I found no team or league brand guide that publishes hex codes publicly, so almost every hex value below comes from third-party aggregators. Treat them as good working defaults, not official values. The one officially sourced block is the NWSL color *names*, taken from the league's own media kit (no hex there).

Coverage in this pass:

| League | Teams in your metros | Hex values | Main source |
|---|---|---|---|
| NFL | 19 | all 19 | [teamcolorcodes.com league table](https://teamcolorcodes.com/nfl-team-color-codes/) |
| NBA | 17 | all 17 | [teamcolorcodes.com league table](https://teamcolorcodes.com/nba-team-color-codes/) |
| MLB | 21 | all 21 | [teamcolorcodes.com league table](https://teamcolorcodes.com/mlb-color-codes/) |
| NHL | 19 | all 19 | [designyourway.net 2025-26 table](https://www.designyourway.net/blog/nhl-team-color-codes/) |
| MLS | 21 | 20 of 21 | teamcolorcodes.com team pages, plus an older [GitHub dataset](https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json) |
| WNBA | 11 | 9 of 11 | teamcolorcodes.com team pages; press reports for the two newest teams |
| NWSL | 9 | none | [NWSL media kit](https://www.nwslsoccer.com/news/nwsl-media-kit-club-information) (official names only) |
| PWHL | 7 | none | AP report on the two expansion teams |
| UFL | 3 | none | [fbschedules.com 2026 list](https://fbschedules.com/ufl-schedule/) (team list only) |

Not covered at all: minor-league baseball, AHL/ECHL, USL (Championship, League One, Super League), NBA G League, NLL, MLS Next Pro, plus the CFL (Toronto, Montreal, Vancouver) and Liga MX and other Mexican leagues (Mexico City has no team in the seven core leagues). See the self-audit for what to check.

**Figure labels used throughout.** *Third-party (estimated)*: a hex value published by an aggregator, not by the team or league. *Announced*: a color name stated by a team or league, directly or via a press report. *Measured*: a number I computed here (contrast ratios and color distances).

**Primary/secondary rule.** Unless a note says otherwise, *primary* is the first color the source lists and *secondary* the second. Sources do not always list colors in order of importance; notes call out the cases where this looks wrong.

## 1. Colors per team

Full source URLs and notes for every row are in the CSV in section 5. All hex values here are third-party (estimated) unless a row is blank.

### NFL

| Team | Metro | Primary | Secondary | Color names (from source) |
|---|---|---|---|---|
| Atlanta Falcons | Atlanta | `#A71930` | `#000000` | Red; Black; Silver |
| San Francisco 49ers | Bay Area | `#AA0000` | `#B3995D` | 49ers Red; Gold |
| New England Patriots | Boston | `#002244` | `#C60C30` | Nautical Blue; Red; New Century Silver |
| Chicago Bears | Chicago | `#0B162A` | `#C83803` | Dark Navy; Orange |
| Dallas Cowboys | Dallas–Fort Worth | `#003594` | `#041E42` | Royal Blue; Blue; Silver; Silver-Green |
| Houston Texans | Houston | `#03202F` | `#A71930` | Deep Steel Blue; Battle Red |
| Kansas City Chiefs | Kansas City | `#E31837` | `#FFB81C` | Red; Gold |
| Las Vegas Raiders | Las Vegas | `#000000` | `#A5ACAF` | Raiders Black; Raiders Silver |
| Los Angeles Chargers | Los Angeles | `#0080C6` | `#FFC20E` | Powder Blue; Sunshine Gold |
| Los Angeles Rams | Los Angeles | `#003594` | `#FFA300` | Blue; Gold; Dark Gold; Yellow |
| Minnesota Vikings | Minneapolis–St. Paul | `#4F2683` | `#FFC62F` | Purple; Gold |
| Tennessee Titans | Nashville | `#0C2340` | `#4B92DB` | Titans Navy; Titans Blue; Titans Red; Titans Silver |
| New Orleans Saints | New Orleans | `#D3BC8D` | `#101820` | Old Gold; Black |
| New York Giants | New York | `#0B2265` | `#A71930` | Dark Blue; Red; Gray |
| New York Jets | New York | `#125740` | `#000000` | Gotham Green; Stealth Black; Spotlight White |
| Philadelphia Eagles | Philadelphia | `#004C54` | `#A5ACAF` | Midnight Green; Silver; Black; Charcoal |
| Arizona Cardinals | Phoenix | `#97233F` | `#000000` | Red; Black; Yellow |
| Seattle Seahawks | Seattle | `#002244` | `#69BE28` | College Navy; Action Green; Wolf Gray |
| Tampa Bay Buccaneers | Tampa Bay (TPA) | `#D50A0A` | `#FF7900` | Red; Bay Orange; Black; Grey; Pewter |

### NBA

| Team | Metro | Primary | Secondary | Color names (from source) |
|---|---|---|---|---|
| Atlanta Hawks | Atlanta | `#E03A3E` | `#C1D32F` | Hawks Red; Volt Green; Hawks Charcoal |
| Golden State Warriors | Bay Area | `#1D428A` | `#FFC72C` | Warriors Blue; Golden Yellow |
| Boston Celtics | Boston | `#007A33` | `#BA9653` | Celtics Green; Celtics Gold; Celtics Brown |
| Chicago Bulls | Chicago | `#CE1141` | `#000000` | Bulls Red; Black |
| Dallas Mavericks | Dallas–Fort Worth | `#00538C` | `#002B5E` | Royal Blue; Navy Blue; Silver; Black |
| Houston Rockets | Houston | `#CE1141` | `#000000` | Red; Black; Silver |
| Los Angeles Clippers | Los Angeles | `#C8102E` | `#1D428A` | Red; Blue; Silver; Black |
| Los Angeles Lakers | Los Angeles | `#552583` | `#FDB927` | Lakers Purple; Gold; Black |
| Milwaukee Bucks | Milwaukee | `#00471B` | `#EEE1C6` | Good Land Green; Cream City Cream; Great Lakes Blue |
| Minnesota Timberwolves | Minneapolis–St. Paul | `#0C2340` | `#236192` | Midnight Blue; Lake Blue; Moonlight Grey; Aurora Green |
| New Orleans Pelicans | New Orleans | `#0C2340` | `#C8102E` | Pelicans Navy; Pelicans Red; Pelicans Gold |
| Brooklyn Nets | New York | `#000000` | `#FFFFFF` | Black; White |
| New York Knicks | New York | `#006BB6` | `#F58426` | Knicks Blue; Knicks Orange; Knicks Silver |
| Philadelphia 76ers | Philadelphia | `#006BB6` | `#ED174C` | Blue; Red; Navy; Silver |
| Phoenix Suns | Phoenix | `#1D1160` | `#E56020` | Purple; Orange; Black; Gray; Yellow |
| Sacramento Kings | Sacramento | `#5A2D81` | `#63727A` | Purple; Gray; Black |
| Toronto Raptors | Toronto | `#CE1141` | `#000000` | Red; Black; Silver; Gold |

### MLB

| Team | Metro | Primary | Secondary | Color names (from source) |
|---|---|---|---|---|
| Atlanta Braves | Atlanta | `#CE1141` | `#13274F` | Scarlet; Navy Blue; Yellow |
| San Francisco Giants | Bay Area | `#FD5A1E` | `#27251F` | Orange; Black; Beige; Gold |
| Boston Red Sox | Boston | `#BD3039` | `#0C2340` | Red; Blue |
| Chicago Cubs | Chicago | `#0E3386` | `#CC3433` | Blue; Red |
| Chicago White Sox | Chicago | `#27251F` | `#C4CED4` | Black; Silver |
| Texas Rangers | Dallas–Fort Worth | `#003278` | `#C0111F` | Blue; Red |
| Houston Astros | Houston | `#002D62` | `#EB6E1F` | Navy Blue; Orange; Light Orange |
| Kansas City Royals | Kansas City | `#004687` | `#BD9B60` | Royal Blue; Gold |
| Los Angeles Angels | Los Angeles | `#003263` | `#BA0021` | Blue; Red; Maroon; Silver |
| Los Angeles Dodgers | Los Angeles | `#005A9C` | `#EF3E42` | Dodger Blue; Red; Silver |
| Milwaukee Brewers | Milwaukee | `#12284B` | `#FFC52F` | Navy Blue; Yellow |
| Minnesota Twins | Minneapolis–St. Paul | `#002B5C` | `#D31145` | Twins Navy Blue; Scarlet Red; Kasota Gold |
| New York Mets | New York | `#002D72` | `#FF5910` | Blue; Orange |
| New York Yankees | New York | `#003087` | `#E4002C` | Blue; Red; Navy Blue; Gray |
| Philadelphia Phillies | Philadelphia | `#E81828` | `#002D72` | Red; Blue |
| Arizona Diamondbacks | Phoenix | `#A71930` | `#E3D4AD` | Sedona Red; Sonoran Sand; Black; Teal |
| Athletics | Sacramento | `#003831` | `#EFB21E` | Green; Gold; Gray |
| San Diego Padres | San Diego | `#2F241D` | `#FFC425` | Brown; Gold |
| Seattle Mariners | Seattle | `#0C2C56` | `#005C5C` | Navy Blue; Northwest Green; Silver; Red |
| Tampa Bay Rays | Tampa Bay (TPA) | `#092C5C` | `#8FBCE6` | Navy Blue; Columbia Blue; Yellow |
| Toronto Blue Jays | Toronto | `#134A8E` | `#1D2D5C` | Blue; Navy Blue; Red |

### NHL

| Team | Metro | Primary | Secondary | Color names (from source) |
|---|---|---|---|---|
| San Jose Sharks | Bay Area | `#006272` | `#000000` | Deep Pacific Teal (PMS 3155 C); Black; Burnt Orange |
| Boston Bruins | Boston | `#FFB81C` | `#000000` | Gold (PMS 1235 C); Black |
| Chicago Blackhawks | Chicago | `#C8102E` | `#000000` | Red (PMS 186 C); Black |
| Columbus Blue Jackets | Columbus | `#041E42` | `#C8102E` | Union Blue; Goal Red; Capital Silver |
| Dallas Stars | Dallas–Fort Worth | `#00843D` | `#000000` | Victory Green (PMS 348 C); Black; Silver |
| Vegas Golden Knights | Las Vegas | `#C69214` | `#333F48` | Metallic Gold (PMS 1245 C); Steel Grey (PMS 432 C); Red |
| Anaheim Ducks | Los Angeles | `#CF4520` | `#000000` | Orange (PMS 173 C); Black; Gold (PMS 872 C) |
| Los Angeles Kings | Los Angeles | `#000000` | `#A2AAAD` | Black; Silver (PMS 429 C) |
| Minnesota Wild | Minneapolis–St. Paul | `#154734` | `#A6192E` | Forest Green; Iron Range Red; Harvest Gold; Minnesota Wheat |
| Montreal Canadiens | Montreal | `#A6192E` | `#001E62` | Rouge (PMS 187 C); Bleu (PMS 2758 C); Blanc |
| Nashville Predators | Nashville | `#FFB81C` | `#041E42` | Gold (PMS 1235 C); Navy (PMS 282 C) |
| New Jersey Devils | New York | `#C8102E` | `#000000` | Red (PMS 186 C); Black |
| New York Islanders | New York | `#003087` | `#FC4C02` | Royal Blue (PMS 287 C); Orange (PMS 1655 C) |
| New York Rangers | New York | `#0033A0` | `#C8102E` | Blue (PMS 286 C); Red (PMS 186 C) |
| Philadelphia Flyers | Philadelphia | `#CF4520` | `#000000` | Burnt Orange (PMS 173 C); Black |
| Seattle Kraken | Seattle | `#051C2C` | `#9CDBD9` | Deep Sea Blue (PMS 296 C); Ice Blue (PMS 324 C); Shadow Blue; Red Alert |
| Tampa Bay Lightning | Tampa Bay (TPA) | `#00205B` | `#FFFFFF` | Blue (PMS 281 C); White; Black (auxiliary) |
| Toronto Maple Leafs | Toronto | `#00205B` | `#FFFFFF` | Blue (PMS 281 C); White |
| Vancouver Canucks | Vancouver | `#00205B` | `#00843D` | Blue (PMS 281 C); Green (PMS 348 C); Navy; Silver |

### MLS

| Team | Metro | Primary | Secondary | Color names (from source) |
|---|---|---|---|---|
| Atlanta United | Atlanta | `#A29061` | `#80000B` | — |
| Austin FC | Austin | `#00B140` | `#000000` | Bright Verde; Black |
| San Jose Earthquakes | Bay Area | `#0051BA` | `#000000` | — |
| New England Revolution | Boston | `#0A2141` | `#D80016` | — |
| Chicago Fire FC | Chicago | `#AF2626` | `#0A174A` | — |
| Columbus Crew | Columbus | `#000000` | `#FFDB00` | — |
| FC Dallas | Dallas–Fort Worth | `#CF0032` | `#07175C` | — |
| Houston Dynamo FC | Houston | `#F36600` | `#2E2926` | — |
| Sporting Kansas City | Kansas City | `#91B0D5` | `#002B5C` | — |
| LA Galaxy | Los Angeles | `#00245D` | `#004689` | — |
| Los Angeles FC | Los Angeles | `#000000` | `#C39E6D` | Black; California Gold; Asphalt; Gray |
| Minnesota United FC | Minneapolis–St. Paul | `#CFD4D8` | `#6CADDF` | — |
| CF Montréal | Montreal | `#000000` | `#9EA1A2` | Impact Black; Ice Gray; Sacré Bleu (#0033A1) |
| Nashville SC | Nashville | `#ECE83A` | `#1F1646` | Electric Gold; Acoustic Blue |
| New York City FC | New York | `#6CADDF` | `#00285E` | — |
| New York Red Bulls | New York | `#D50031` | `#012055` | — |
| Philadelphia Union | Philadelphia | `#002D55` | `#5090CD` | — |
| San Diego FC | San Diego | — | — | Chrome; Azul |
| Seattle Sounders FC | Seattle | `#4F8A10` | `#11568C` | — |
| Toronto FC | Toronto | `#D80016` | `#313F49` | — |
| Vancouver Whitecaps FC | Vancouver | `#12264C` | `#85B7EA` | — |

### WNBA

| Team | Metro | Primary | Secondary | Color names (from source) |
|---|---|---|---|---|
| Atlanta Dream | Atlanta | `#C8102E` | `#418FDE` | Red; Blue; Light Blue; Navy |
| Golden State Valkyries | Bay Area | — | — | Valkyries Violet; Black (gold added in secondary logos) |
| Chicago Sky | Chicago | `#FFCD00` | `#418FDE` | Yellow (PMS 116); Blue (PMS 279) |
| Dallas Wings | Dallas–Fort Worth | `#0C2340` | `#C4D600` | Navy; Lime; Cyan; Blue; Red |
| Las Vegas Aces | Las Vegas | `#BA0C2F` | `#000000` | Red (PMS 200); Black; Gold (PMS 872); Silver (PMS 877) |
| Los Angeles Sparks | Los Angeles | `#FFC72C` | `#702F8A` | Yellow; Purple; Green |
| Minnesota Lynx | Minneapolis–St. Paul | `#0C2340` | `#236192` | Navy (PMS 289); Blue (PMS 647); Green (PMS 368); Gray (PMS 422) |
| New York Liberty | New York | `#6ECEB2` | `#000000` | Green (PMS 338); Black; Orange (PMS 165); Blue (PMS 293) |
| Phoenix Mercury | Phoenix | `#201747` | `#CB6015` | Purple; Orange; Gray; Black |
| Seattle Storm | Seattle | `#FBE122` | `#2C5234` | Yellow; Green; Gray |
| Toronto Tempo | Toronto | — | — | Light blue; maroon (or red: reports differ) |

### NWSL

| Team | Metro | Primary | Secondary | Color names (from source) |
|---|---|---|---|---|
| Bay FC | Bay Area | — | — | Bay; Steel; Fog; Poppy |
| Boston Legacy FC | Boston | — | — | Relentless Raspberry; Loyal Charcoal; Daring Pink; Rise Yellow; Orange Press |
| Chicago Stars FC | Chicago | — | — | Red; Blue; Black; White |
| Houston Dash | Houston | — | — | Electric Orange; Space City Blue; Black; White |
| Kansas City Current | Kansas City | — | — | Heartland; Teal; Storm; White; Pantone Black |
| Angel City FC | Los Angeles | — | — | Sol Rosa; Asphalt; Armour; Line White; Pitch Black |
| Gotham FC | New York | — | — | Sky Blue; Cloud White; Gotham Black |
| San Diego Wave FC | San Diego | — | — | — |
| Seattle Reign FC | Seattle | — | — | Reign Blackened Blue; Reign Blue; Reign Diffused Light Blue; Reign Gold; Reign Sesame; Reign Summit White |

### PWHL

| Team | Metro | Primary | Secondary | Color names (from source) |
|---|---|---|---|---|
| Boston Fleet | Boston | — | — | — |
| Minnesota Frost | Minneapolis–St. Paul | — | — | — |
| Montréal Victoire | Montreal | — | — | — |
| New York Sirens | New York | — | — | — |
| Seattle Torrent | Seattle | — | — | Slate green; cream |
| Toronto Sceptres | Toronto | — | — | — |
| Vancouver Goldeneyes | Vancouver | — | — | Pacific blue; cream |

### UFL

| Team | Metro | Primary | Secondary | Color names (from source) |
|---|---|---|---|---|
| Columbus Aviators | Columbus | — | — | — |
| Dallas Renegades | Dallas–Fort Worth | — | — | — |
| Houston Gamblers | Houston | — | — | — |

Metro assignments are mine: Devils and Gotham FC are in New York; Ducks, Angel City and LAFC are in Los Angeles; the Packers are not counted for Milwaukee; the Athletics are counted for Sacramento.

## 2. Flags

### Recent rebrands, new teams and stale source data

| Team | What changed |
|---|---|
| Anaheim Ducks (NHL) | Orange-led rebrand. The designyourway value `#CF4520` reflects it; the teamcolorcodes page (last modified 2022) still shows the older `#F47A38` set. |
| Athletics (MLB) | Relocated to Sacramento and dropped 'Oakland'. Colors carried over; the aggregator page still says Oakland. |
| CF Montréal (MLS) | Renamed from Montreal Impact, later a new crest. Values from the current teamcolorcodes page. |
| New England Revolution (MLS) | New crest took effect for the 2022 season ([MLSsoccer.com](https://www.mlssoccer.com/news/new-england-revolution-unveil-new-crest)). My hex values come from an older dataset. |
| Chicago Fire, Columbus Crew, Houston Dynamo (MLS) | All changed crests or names after the GitHub dataset I used was compiled. Verify their hex values. |
| San Diego FC (MLS) | New club from 2025. Colors announced as Chrome and Azul; no hex found. |
| Golden State Valkyries (WNBA) | New from 2025. Violet and black at launch; gold added through secondary logos; 2026 uniforms lean on violet. |
| Toronto Tempo (WNBA) | New for 2026. Reports conflict on maroon vs red alongside light blue. |
| Boston Legacy FC (NWSL) | Began play in 2026. |
| Chicago Stars FC and Seattle Reign FC (NWSL) | Renamed from Chicago Red Stars and OL Reign. |
| Seattle Torrent and Vancouver Goldeneyes (PWHL) | Expansion teams for 2025-26. AP corrected Seattle's color from emerald green to slate green. |
| Columbus Aviators, Dallas Renegades, Houston Gamblers (UFL) | New or renamed for 2026, and the league said all eight teams would get new uniforms. |
| Seattle Kraken (NHL) | Not a rebrand, but two sources disagree on the exact navy, ice blue and red. |

### Same-metro teams whose primaries are hard to tell apart

Measured with CIEDE2000 color difference (ΔE) between primary hex values. Roughly: below 2 is barely distinguishable, 2–5 is close, 5–10 is noticeable side by side but easy to confuse on a small swatch. I list every same-metro pair under 10.

| Metro | Team A | Team B | ΔE (measured) |
|---|---|---|---|
| Atlanta | Atlanta Braves `#CE1141` | Atlanta Dream `#C8102E` | 5.0 |
| Atlanta | Atlanta Falcons `#A71930` | Atlanta Dream `#C8102E` | 6.9 |
| Atlanta | Atlanta Falcons `#A71930` | Atlanta Braves `#CE1141` | 7.8 |
| Atlanta | Atlanta Hawks `#E03A3E` | Atlanta Dream `#C8102E` | 8.3 |
| Atlanta | Atlanta Hawks `#E03A3E` | Atlanta Braves `#CE1141` | 9.1 |
| Bay Area | Golden State Warriors `#1D428A` | San Jose Earthquakes `#0051BA` | 7.5 |
| Boston | New England Patriots `#002244` | New England Revolution `#0A2141` | 1.8 |
| Chicago | Chicago Bulls `#CE1141` | Chicago Blackhawks `#C8102E` | 5.0 |
| Chicago | Chicago Blackhawks `#C8102E` | Chicago Fire FC `#AF2626` | 5.1 |
| Chicago | Chicago Bulls `#CE1141` | Chicago Fire FC `#AF2626` | 9.1 |
| Dallas–Fort Worth | Dallas Cowboys `#003594` | Texas Rangers `#003278` | 4.3 |
| Dallas–Fort Worth | Texas Rangers `#003278` | Dallas Wings `#0C2340` | 9.2 |
| Los Angeles | Los Angeles Kings `#000000` | Los Angeles FC `#000000` | 0.0 |
| Los Angeles | Los Angeles Angels `#003263` | LA Galaxy `#00245D` | 5.2 |
| Los Angeles | Los Angeles Rams `#003594` | Los Angeles Angels `#003263` | 7.5 |
| Los Angeles | Los Angeles Rams `#003594` | LA Galaxy `#00245D` | 8.9 |
| Minneapolis–St. Paul | Minnesota Timberwolves `#0C2340` | Minnesota Lynx `#0C2340` | 0.0 |
| Minneapolis–St. Paul | Minnesota Timberwolves `#0C2340` | Minnesota Twins `#002B5C` | 5.3 |
| Minneapolis–St. Paul | Minnesota Twins `#002B5C` | Minnesota Lynx `#0C2340` | 5.3 |
| New York | New York Yankees `#003087` | New York Islanders `#003087` | 0.0 |
| New York | New Jersey Devils `#C8102E` | New York Red Bulls `#D50031` | 2.4 |
| New York | New York Yankees `#003087` | New York Mets `#002D72` | 3.3 |
| New York | New York Mets `#002D72` | New York Islanders `#003087` | 3.3 |
| New York | New York Yankees `#003087` | New York Rangers `#0033A0` | 3.7 |
| New York | New York Rangers `#0033A0` | New York Islanders `#003087` | 3.7 |
| New York | New York Giants `#0B2265` | New York Mets `#002D72` | 4.1 |
| New York | New York Giants `#0B2265` | New York Yankees `#003087` | 6.1 |
| New York | New York Giants `#0B2265` | New York Islanders `#003087` | 6.1 |
| New York | New York Mets `#002D72` | New York Rangers `#0033A0` | 7.0 |
| New York | New York Giants `#0B2265` | New York Rangers `#0033A0` | 9.4 |
| Philadelphia | Philadelphia Phillies `#E81828` | Philadelphia Flyers `#CF4520` | 8.0 |
| Phoenix | Arizona Cardinals `#97233F` | Arizona Diamondbacks `#A71930` | 6.4 |
| Phoenix | Phoenix Suns `#1D1160` | Phoenix Mercury `#201747` | 6.5 |
| Seattle | Seattle Seahawks `#002244` | Seattle Mariners `#0C2C56` | 3.7 |
| Seattle | Seattle Seahawks `#002244` | Seattle Kraken `#051C2C` | 7.5 |
| Tampa Bay (TPA) | Tampa Bay Rays `#092C5C` | Tampa Bay Lightning `#00205B` | 4.3 |
| Vancouver | Vancouver Canucks `#00205B` | Vancouver Whitecaps FC `#12264C` | 4.5 |

The worst cases are identical hex values: Timberwolves and Lynx (`#0C2340`), Yankees and Islanders (`#003087`), and Kings and LAFC (`#000000`). For these, show the secondary color alongside the primary (a split or two-dot swatch) so the cards differ.

## 3. Contrast

Method: WCAG 2.x contrast ratio against a white card (`#FFFFFF`) and a dark card. I assumed `#121212` for the dark card; swap in your real value and rerun if it differs. A small swatch or accent bar is a non-text UI element, so the WCAG threshold is **3:1**. All ratios are measured.

Rule: use the primary if it clears 3:1; otherwise the secondary; otherwise a third color from the same source's palette; otherwise keep the primary and add a 1px outline in a neutral gray. The table lists only teams whose primary fails on at least one background, which covers every dark or very light primary.

| Team | Primary | vs white | vs dark | Accent on white card | Accent on dark card |
|---|---|---|---|---|---|
| Atlanta Falcons (NFL) | `#A71930` | 7.4 | 2.5 | primary `#A71930` (7.4:1) | Silver `#A5ACAF` (8.1:1, third color) |
| San Francisco 49ers (NFL) | `#AA0000` | 7.8 | 2.4 | primary `#AA0000` (7.8:1) | secondary `#B3995D` (6.8:1) |
| New England Patriots (NFL) | `#002244` | 16.0 | 1.2 | primary `#002244` (16.0:1) | secondary `#C60C30` (3.1:1) |
| Chicago Bears (NFL) | `#0B162A` | 18.1 | 1.0 | primary `#0B162A` (18.1:1) | secondary `#C83803` (3.6:1) |
| Dallas Cowboys (NFL) | `#003594` | 10.8 | 1.7 | primary `#003594` (10.8:1) | Silver `#869397` (5.9:1, third color) |
| Houston Texans (NFL) | `#03202F` | 16.8 | 1.1 | primary `#03202F` (16.8:1) | primary `#03202F` + 1px gray outline (no palette color clears 3:1) |
| Las Vegas Raiders (NFL) | `#000000` | 21.0 | 1.1 | primary `#000000` (21.0:1) | secondary `#A5ACAF` (8.1:1) |
| Los Angeles Rams (NFL) | `#003594` | 10.8 | 1.7 | primary `#003594` (10.8:1) | secondary `#FFA300` (9.4:1) |
| Minnesota Vikings (NFL) | `#4F2683` | 10.8 | 1.7 | primary `#4F2683` (10.8:1) | secondary `#FFC62F` (11.9:1) |
| Tennessee Titans (NFL) | `#0C2340` | 15.8 | 1.2 | primary `#0C2340` (15.8:1) | secondary `#4B92DB` (5.7:1) |
| New Orleans Saints (NFL) | `#D3BC8D` | 1.9 | 10.1 | secondary `#101820` (17.9:1) | primary `#D3BC8D` (10.1:1) |
| New York Giants (NFL) | `#0B2265` | 14.7 | 1.3 | primary `#0B2265` (14.7:1) | Gray `#A5ACAF` (8.1:1, third color) |
| New York Jets (NFL) | `#125740` | 8.5 | 2.2 | primary `#125740` (8.5:1) | Spotlight White `#FFFFFF` (18.7:1, third color) |
| Philadelphia Eagles (NFL) | `#004C54` | 9.7 | 1.9 | primary `#004C54` (9.7:1) | secondary `#A5ACAF` (8.1:1) |
| Arizona Cardinals (NFL) | `#97233F` | 8.0 | 2.3 | primary `#97233F` (8.0:1) | Yellow `#FFB612` (10.7:1, third color) |
| Seattle Seahawks (NFL) | `#002244` | 16.0 | 1.2 | primary `#002244` (16.0:1) | secondary `#69BE28` (8.0:1) |
| Golden State Warriors (NBA) | `#1D428A` | 9.6 | 2.0 | primary `#1D428A` (9.6:1) | secondary `#FFC72C` (12.0:1) |
| Dallas Mavericks (NBA) | `#00538C` | 8.0 | 2.3 | primary `#00538C` (8.0:1) | Silver `#B8C4CA` (10.5:1, third color) |
| Los Angeles Lakers (NBA) | `#552583` | 10.6 | 1.8 | primary `#552583` (10.6:1) | secondary `#FDB927` (10.8:1) |
| Milwaukee Bucks (NBA) | `#00471B` | 11.0 | 1.7 | primary `#00471B` (11.0:1) | secondary `#EEE1C6` (14.5:1) |
| Minnesota Timberwolves (NBA) | `#0C2340` | 15.8 | 1.2 | primary `#0C2340` (15.8:1) | Aurora Green `#78BE20` (8.2:1, third color) |
| New Orleans Pelicans (NBA) | `#0C2340` | 15.8 | 1.2 | primary `#0C2340` (15.8:1) | secondary `#C8102E` (3.2:1) |
| Brooklyn Nets (NBA) | `#000000` | 21.0 | 1.1 | primary `#000000` (21.0:1) | secondary `#FFFFFF` (18.7:1) |
| Phoenix Suns (NBA) | `#1D1160` | 16.1 | 1.2 | primary `#1D1160` (16.1:1) | secondary `#E56020` (5.4:1) |
| Sacramento Kings (NBA) | `#5A2D81` | 9.9 | 1.9 | primary `#5A2D81` (9.9:1) | secondary `#63727A` (3.8:1) |
| Chicago Cubs (MLB) | `#0E3386` | 11.4 | 1.6 | primary `#0E3386` (11.4:1) | secondary `#CC3433` (3.7:1) |
| Chicago White Sox (MLB) | `#27251F` | 15.3 | 1.2 | primary `#27251F` (15.3:1) | secondary `#C4CED4` (11.7:1) |
| Texas Rangers (MLB) | `#003278` | 12.2 | 1.5 | primary `#003278` (12.2:1) | White `#FFFFFF` (18.7:1, third color) |
| Houston Astros (MLB) | `#002D62` | 13.5 | 1.4 | primary `#002D62` (13.5:1) | secondary `#EB6E1F` (6.1:1) |
| Kansas City Royals (MLB) | `#004687` | 9.4 | 2.0 | primary `#004687` (9.4:1) | secondary `#BD9B60` (7.2:1) |
| Los Angeles Dodgers (MLB) | `#005A9C` | 7.1 | 2.6 | primary `#005A9C` (7.1:1) | secondary `#EF3E42` (4.9:1) |
| Los Angeles Angels (MLB) | `#003263` | 12.8 | 1.5 | primary `#003263` (12.8:1) | Silver `#C4CED4` (11.7:1, third color) |
| Milwaukee Brewers (MLB) | `#12284B` | 14.7 | 1.3 | primary `#12284B` (14.7:1) | secondary `#FFC52F` (11.8:1) |
| Minnesota Twins (MLB) | `#002B5C` | 14.0 | 1.3 | primary `#002B5C` (14.0:1) | secondary `#D31145` (3.5:1) |
| New York Yankees (MLB) | `#003087` | 11.8 | 1.6 | primary `#003087` (11.8:1) | secondary `#E4002C` (3.9:1) |
| New York Mets (MLB) | `#002D72` | 13.0 | 1.4 | primary `#002D72` (13.0:1) | secondary `#FF5910` (6.0:1) |
| Arizona Diamondbacks (MLB) | `#A71930` | 7.4 | 2.5 | primary `#A71930` (7.4:1) | secondary `#E3D4AD` (12.7:1) |
| Athletics (MLB) | `#003831` | 13.0 | 1.4 | primary `#003831` (13.0:1) | secondary `#EFB21E` (9.9:1) |
| San Diego Padres (MLB) | `#2F241D` | 15.1 | 1.2 | primary `#2F241D` (15.1:1) | secondary `#FFC425` (11.8:1) |
| Seattle Mariners (MLB) | `#0C2C56` | 13.9 | 1.3 | primary `#0C2C56` (13.9:1) | Silver `#C4CED4` (11.7:1, third color) |
| Tampa Bay Rays (MLB) | `#092C5C` | 13.8 | 1.4 | primary `#092C5C` (13.8:1) | secondary `#8FBCE6` (9.4:1) |
| Toronto Blue Jays (MLB) | `#134A8E` | 8.8 | 2.1 | primary `#134A8E` (8.8:1) | Red `#E8291C` (4.3:1, third color) |
| Chicago Sky (WNBA) | `#FFCD00` | 1.5 | 12.5 | secondary `#418FDE` (3.4:1) | primary `#FFCD00` (12.5:1) |
| Dallas Wings (WNBA) | `#0C2340` | 15.8 | 1.2 | primary `#0C2340` (15.8:1) | secondary `#C4D600` (11.6:1) |
| Las Vegas Aces (WNBA) | `#BA0C2F` | 6.6 | 2.8 | primary `#BA0C2F` (6.6:1) | Silver `#8A8D8F` (5.6:1, third color) |
| Los Angeles Sparks (WNBA) | `#FFC72C` | 1.6 | 12.0 | secondary `#702F8A` (8.5:1) | primary `#FFC72C` (12.0:1) |
| Minnesota Lynx (WNBA) | `#0C2340` | 15.8 | 1.2 | primary `#0C2340` (15.8:1) | Green `#78BE20` (8.2:1, third color) |
| New York Liberty (WNBA) | `#6ECEB2` | 1.9 | 9.9 | secondary `#000000` (21.0:1) | primary `#6ECEB2` (9.9:1) |
| Phoenix Mercury (WNBA) | `#201747` | 16.5 | 1.1 | primary `#201747` (16.5:1) | secondary `#CB6015` (4.7:1) |
| Seattle Storm (WNBA) | `#FBE122` | 1.3 | 14.2 | secondary `#2C5234` (8.9:1) | primary `#FBE122` (14.2:1) |
| Boston Bruins (NHL) | `#FFB81C` | 1.7 | 10.8 | secondary `#000000` (21.0:1) | primary `#FFB81C` (10.8:1) |
| Columbus Blue Jackets (NHL) | `#041E42` | 16.5 | 1.1 | primary `#041E42` (16.5:1) | secondary `#C8102E` (3.2:1) |
| Vegas Golden Knights (NHL) | `#C69214` | 2.8 | 6.7 | secondary `#333F48` (10.8:1) | primary `#C69214` (6.7:1) |
| Los Angeles Kings (NHL) | `#000000` | 21.0 | 1.1 | primary `#000000` (21.0:1) | secondary `#A2AAAD` (7.9:1) |
| Minnesota Wild (NHL) | `#154734` | 10.6 | 1.8 | primary `#154734` (10.6:1) | Harvest Gold `#EAAA00` (9.1:1, third color) |
| Montreal Canadiens (NHL) | `#A6192E` | 7.5 | 2.5 | primary `#A6192E` (7.5:1) | Blanc `#FFFFFF` (18.7:1, third color) |
| Nashville Predators (NHL) | `#FFB81C` | 1.7 | 10.8 | secondary `#041E42` (16.5:1) | primary `#FFB81C` (10.8:1) |
| New York Rangers (NHL) | `#0033A0` | 10.6 | 1.8 | primary `#0033A0` (10.6:1) | secondary `#C8102E` (3.2:1) |
| New York Islanders (NHL) | `#003087` | 11.8 | 1.6 | primary `#003087` (11.8:1) | secondary `#FC4C02` (5.5:1) |
| San Jose Sharks (NHL) | `#006272` | 7.0 | 2.7 | primary `#006272` (7.0:1) | Burnt Orange `#E57200` (6.0:1, third color) |
| Seattle Kraken (NHL) | `#051C2C` | 17.4 | 1.1 | primary `#051C2C` (17.4:1) | secondary `#9CDBD9` (12.1:1) |
| Tampa Bay Lightning (NHL) | `#00205B` | 15.5 | 1.2 | primary `#00205B` (15.5:1) | secondary `#FFFFFF` (18.7:1) |
| Toronto Maple Leafs (NHL) | `#00205B` | 15.5 | 1.2 | primary `#00205B` (15.5:1) | secondary `#FFFFFF` (18.7:1) |
| Vancouver Canucks (NHL) | `#00205B` | 15.5 | 1.2 | primary `#00205B` (15.5:1) | secondary `#00843D` (3.9:1) |
| Austin FC (MLS) | `#00B140` | 2.9 | 6.6 | secondary `#000000` (21.0:1) | primary `#00B140` (6.6:1) |
| San Jose Earthquakes (MLS) | `#0051BA` | 7.3 | 2.6 | primary `#0051BA` (7.3:1) | gray (dataset) `#B1B4B2` (9.0:1, third color) |
| New England Revolution (MLS) | `#0A2141` | 16.1 | 1.2 | primary `#0A2141` (16.1:1) | secondary `#D80016` (3.5:1) |
| Chicago Fire FC (MLS) | `#AF2626` | 6.7 | 2.8 | primary `#AF2626` (6.7:1) | gray (dataset) `#8A8D8F` (5.6:1, third color) |
| Columbus Crew (MLS) | `#000000` | 21.0 | 1.1 | primary `#000000` (21.0:1) | secondary `#FFDB00` (13.7:1) |
| Sporting Kansas City (MLS) | `#91B0D5` | 2.2 | 8.4 | secondary `#002B5C` (14.0:1) | primary `#91B0D5` (8.4:1) |
| LA Galaxy (MLS) | `#00245D` | 14.9 | 1.3 | primary `#00245D` (14.9:1) | gold (dataset) `#F1AA00` (9.4:1, third color) |
| Los Angeles FC (MLS) | `#000000` | 21.0 | 1.1 | primary `#000000` (21.0:1) | secondary `#C39E6D` (7.5:1) |
| Minnesota United FC (MLS) | `#CFD4D8` | 1.5 | 12.5 | black (dataset) `#000000` (21.0:1, third color) | primary `#CFD4D8` (12.5:1) |
| CF Montréal (MLS) | `#000000` | 21.0 | 1.1 | primary `#000000` (21.0:1) | secondary `#9EA1A2` (7.2:1) |
| Nashville SC (MLS) | `#ECE83A` | 1.3 | 14.4 | secondary `#1F1646` (16.6:1) | primary `#ECE83A` (14.4:1) |
| New York City FC (MLS) | `#6CADDF` | 2.4 | 7.7 | secondary `#00285E` (14.3:1) | primary `#6CADDF` (7.7:1) |
| Philadelphia Union (MLS) | `#002D55` | 13.9 | 1.3 | primary `#002D55` (13.9:1) | secondary `#5090CD` (5.5:1) |
| Vancouver Whitecaps FC (MLS) | `#12264C` | 14.9 | 1.3 | primary `#12264C` (14.9:1) | secondary `#85B7EA` (8.9:1) |

Two practical notes. Pure black primaries (Raiders, Nets, Kings, LAFC, Columbus Crew, CF Montréal) vanish on a dark card, so their secondary is the better dark-mode accent. Very light primaries (Saints old gold, Sky and Storm yellow, Liberty mint, Minnesota United gray, Nashville SC gold, NYCFC sky blue) work on dark cards but not white ones.

## 4. Brand limits

I am not a lawyer, and I did not research this section live; it comes from general background knowledge, so have counsel check it before launch.

Team names, logos, wordmarks and uniform designs are trademarks owned by the clubs and licensed through the leagues' properties arms. Showing a logo in a commercial app generally needs a license. Using a team's *name* in plain text to identify it is usually treated as nominative fair use in the US, provided you use no more than needed and don't imply endorsement.

Color alone is weaker as a trademark. In the US a single color can be protected only once it has acquired distinctiveness (the Supreme Court's 1995 *Qualitex* decision is the usual reference). Color *combinations* tied to a team can still count as trade dress: in *Board of Supervisors of LSU v. Smack Apparel* (5th Cir. 2008), unlicensed shirts using school color schemes plus other references to the schools were found to infringe. The question in such cases is likelihood of confusion about sponsorship or affiliation.

What that suggests for the Faves tab (risk-reduction ideas, not legal advice):

- Keep colors as a small accent next to the plain-text team name, and use no logos, crests, mascots or team fonts.
- Avoid styling whole screens in a team's palette in a way that could look official.
- Add a line such as "Not affiliated with or endorsed by any team or league" in the app and store listing.
- Expect app review to ask about rights if the app looks official (Apple's App Review Guidelines have an intellectual-property section, and Google Play has a similar policy).
- Toronto, Montreal and Vancouver fall under Canadian trademark law, and Mexico City under Mexican law, so check those separately.

## 5. Output

### CSV

```csv
league,team,city,primary_hex,secondary_hex,official_names,source_url,official,notes
NFL,Atlanta Falcons,Atlanta,#A71930,#000000,Red; Black; Silver,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,San Francisco 49ers,Bay Area,#AA0000,#B3995D,49ers Red; Gold,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,New England Patriots,Boston,#002244,#C60C30,Nautical Blue; Red; New Century Silver,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,Chicago Bears,Chicago,#0B162A,#C83803,Dark Navy; Orange,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,Dallas Cowboys,Dallas–Fort Worth,#003594,#041E42,Royal Blue; Blue; Silver; Silver-Green,https://teamcolorcodes.com/nfl-team-color-codes/,n,"hex: third-party (estimated). Source RGB for 'Blue' (0,34,68) does not match its hex #041E42."
NFL,Houston Texans,Houston,#03202F,#A71930,Deep Steel Blue; Battle Red,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,Kansas City Chiefs,Kansas City,#E31837,#FFB81C,Red; Gold,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,Las Vegas Raiders,Las Vegas,#000000,#A5ACAF,Raiders Black; Raiders Silver,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,Los Angeles Chargers,Los Angeles,#0080C6,#FFC20E,Powder Blue; Sunshine Gold,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,Los Angeles Rams,Los Angeles,#003594,#FFA300,Blue; Gold; Dark Gold; Yellow,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,Minnesota Vikings,Minneapolis–St. Paul,#4F2683,#FFC62F,Purple; Gold,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,Tennessee Titans,Nashville,#0C2340,#4B92DB,Titans Navy; Titans Blue; Titans Red; Titans Silver,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,New Orleans Saints,New Orleans,#D3BC8D,#101820,Old Gold; Black,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,New York Giants,New York,#0B2265,#A71930,Dark Blue; Red; Gray,https://teamcolorcodes.com/nfl-team-color-codes/,n,"hex: third-party (estimated). Source RGB for Dark Blue (1,35,82) does not match its hex #0B2265."
NFL,New York Jets,New York,#125740,#000000,Gotham Green; Stealth Black; Spotlight White,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,Philadelphia Eagles,Philadelphia,#004C54,#A5ACAF,Midnight Green; Silver; Black; Charcoal,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,Arizona Cardinals,Phoenix,#97233F,#000000,Red; Black; Yellow,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,Seattle Seahawks,Seattle,#002244,#69BE28,College Navy; Action Green; Wolf Gray,https://teamcolorcodes.com/nfl-team-color-codes/,n,hex: third-party (estimated).
NFL,Tampa Bay Buccaneers,Tampa Bay (TPA),#D50A0A,#FF7900,Red; Bay Orange; Black; Grey; Pewter,https://teamcolorcodes.com/nfl-team-color-codes/,n,"hex: third-party (estimated). Source lists Black as #FF7900 (a copy of the orange): an error. Its RGB (10,10,8) implies #0A0A08."
NBA,Atlanta Hawks,Atlanta,#E03A3E,#C1D32F,Hawks Red; Volt Green; Hawks Charcoal,https://teamcolorcodes.com/nba-team-color-codes/,n,"hex: third-party (estimated). Source RGB for Volt Green (196,214,0) implies #C4D600, not #C1D32F."
NBA,Golden State Warriors,Bay Area,#1D428A,#FFC72C,Warriors Blue; Golden Yellow,https://teamcolorcodes.com/nba-team-color-codes/,n,hex: third-party (estimated).
NBA,Boston Celtics,Boston,#007A33,#BA9653,Celtics Green; Celtics Gold; Celtics Brown,https://teamcolorcodes.com/nba-team-color-codes/,n,"hex: third-party (estimated). Source RGB for Celtics Gold (139,111,78) implies #8B6F4E, not #BA9653."
NBA,Chicago Bulls,Chicago,#CE1141,#000000,Bulls Red; Black,https://teamcolorcodes.com/nba-team-color-codes/,n,hex: third-party (estimated).
NBA,Dallas Mavericks,Dallas–Fort Worth,#00538C,#002B5E,Royal Blue; Navy Blue; Silver; Black,https://teamcolorcodes.com/nba-team-color-codes/,n,"hex: third-party (estimated). Source RGB for Royal Blue (0,83,188) implies #0053BC, not #00538C."
NBA,Houston Rockets,Houston,#CE1141,#000000,Red; Black; Silver,https://teamcolorcodes.com/nba-team-color-codes/,n,hex: third-party (estimated).
NBA,Los Angeles Clippers,Los Angeles,#C8102E,#1D428A,Red; Blue; Silver; Black,https://teamcolorcodes.com/nba-team-color-codes/,n,hex: third-party (estimated).
NBA,Los Angeles Lakers,Los Angeles,#552583,#FDB927,Lakers Purple; Gold; Black,https://teamcolorcodes.com/nba-team-color-codes/,n,hex: third-party (estimated).
NBA,Milwaukee Bucks,Milwaukee,#00471B,#EEE1C6,Good Land Green; Cream City Cream; Great Lakes Blue,https://teamcolorcodes.com/nba-team-color-codes/,n,"hex: third-party (estimated). Source RGB for Cream City Cream (240,235,210) implies #F0EBD2, not #EEE1C6."
NBA,Minnesota Timberwolves,Minneapolis–St. Paul,#0C2340,#236192,Midnight Blue; Lake Blue; Moonlight Grey; Aurora Green,https://teamcolorcodes.com/nba-team-color-codes/,n,hex: third-party (estimated).
NBA,New Orleans Pelicans,New Orleans,#0C2340,#C8102E,Pelicans Navy; Pelicans Red; Pelicans Gold,https://teamcolorcodes.com/nba-team-color-codes/,n,"hex: third-party (estimated). Source RGB for Pelicans Navy (0,22,65) implies #001641, not #0C2340."
NBA,Brooklyn Nets,New York,#000000,#FFFFFF,Black; White,https://teamcolorcodes.com/nba-team-color-codes/,n,hex: third-party (estimated).
NBA,New York Knicks,New York,#006BB6,#F58426,Knicks Blue; Knicks Orange; Knicks Silver,https://teamcolorcodes.com/nba-team-color-codes/,n,hex: third-party (estimated).
NBA,Philadelphia 76ers,Philadelphia,#006BB6,#ED174C,Blue; Red; Navy; Silver,https://teamcolorcodes.com/nba-team-color-codes/,n,hex: third-party (estimated).
NBA,Phoenix Suns,Phoenix,#1D1160,#E56020,Purple; Orange; Black; Gray; Yellow,https://teamcolorcodes.com/nba-team-color-codes/,n,hex: third-party (estimated).
NBA,Sacramento Kings,Sacramento,#5A2D81,#63727A,Purple; Gray; Black,https://teamcolorcodes.com/nba-team-color-codes/,n,hex: third-party (estimated).
NBA,Toronto Raptors,Toronto,#CE1141,#000000,Red; Black; Silver; Gold,https://teamcolorcodes.com/nba-team-color-codes/,n,hex: third-party (estimated).
MLB,Atlanta Braves,Atlanta,#CE1141,#13274F,Scarlet; Navy Blue; Yellow,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,San Francisco Giants,Bay Area,#FD5A1E,#27251F,Orange; Black; Beige; Gold,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Boston Red Sox,Boston,#BD3039,#0C2340,Red; Blue,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Chicago Cubs,Chicago,#0E3386,#CC3433,Blue; Red,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Chicago White Sox,Chicago,#27251F,#C4CED4,Black; Silver,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Texas Rangers,Dallas–Fort Worth,#003278,#C0111F,Blue; Red,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Houston Astros,Houston,#002D62,#EB6E1F,Navy Blue; Orange; Light Orange,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Kansas City Royals,Kansas City,#004687,#BD9B60,Royal Blue; Gold,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Los Angeles Angels,Los Angeles,#003263,#BA0021,Blue; Red; Maroon; Silver,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Los Angeles Dodgers,Los Angeles,#005A9C,#EF3E42,Dodger Blue; Red; Silver,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Milwaukee Brewers,Milwaukee,#12284B,#FFC52F,Navy Blue; Yellow,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Minnesota Twins,Minneapolis–St. Paul,#002B5C,#D31145,Twins Navy Blue; Scarlet Red; Kasota Gold,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,New York Mets,New York,#002D72,#FF5910,Blue; Orange,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,New York Yankees,New York,#003087,#E4002C,Blue; Red; Navy Blue; Gray,https://teamcolorcodes.com/mlb-color-codes/,n,"hex: third-party (estimated). Source lists Blue #003087 first; the same source also gives Navy Blue #0C2340, which is closer to the cap/jersey navy. Consider #0C2340 as primary."
MLB,Philadelphia Phillies,Philadelphia,#E81828,#002D72,Red; Blue,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Arizona Diamondbacks,Phoenix,#A71930,#E3D4AD,Sedona Red; Sonoran Sand; Black; Teal,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Athletics,Sacramento,#003831,#EFB21E,Green; Gold; Gray,https://teamcolorcodes.com/mlb-color-codes/,n,"hex: third-party (estimated). Source page still says Oakland Athletics. Club plays in West Sacramento as 'Athletics' (relocation; my background knowledge, verify dates)."
MLB,San Diego Padres,San Diego,#2F241D,#FFC425,Brown; Gold,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Seattle Mariners,Seattle,#0C2C56,#005C5C,Navy Blue; Northwest Green; Silver; Red,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Tampa Bay Rays,Tampa Bay (TPA),#092C5C,#8FBCE6,Navy Blue; Columbia Blue; Yellow,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
MLB,Toronto Blue Jays,Toronto,#134A8E,#1D2D5C,Blue; Navy Blue; Red,https://teamcolorcodes.com/mlb-color-codes/,n,hex: third-party (estimated).
NHL,San Jose Sharks,Bay Area,#006272,#000000,Deep Pacific Teal (PMS 3155 C); Black; Burnt Orange,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,Boston Bruins,Boston,#FFB81C,#000000,Gold (PMS 1235 C); Black,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,Chicago Blackhawks,Chicago,#C8102E,#000000,Red (PMS 186 C); Black,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26). Crest also carries green, yellow, orange and two blues."
NHL,Columbus Blue Jackets,Columbus,#041E42,#C8102E,Union Blue; Goal Red; Capital Silver,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,Dallas Stars,Dallas–Fort Worth,#00843D,#000000,Victory Green (PMS 348 C); Black; Silver,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26). Older aggregator values use #006341 / #006847 for the green."
NHL,Vegas Golden Knights,Las Vegas,#C69214,#333F48,Metallic Gold (PMS 1245 C); Steel Grey (PMS 432 C); Red,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,Anaheim Ducks,Los Angeles,#CF4520,#000000,Orange (PMS 173 C); Black; Gold (PMS 872 C),https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26). Rebrand: orange-led identity. teamcolorcodes page (last modified 2022) still shows the older #F47A38 orange set."
NHL,Los Angeles Kings,Los Angeles,#000000,#A2AAAD,Black; Silver (PMS 429 C),https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,Minnesota Wild,Minneapolis–St. Paul,#154734,#A6192E,Forest Green; Iron Range Red; Harvest Gold; Minnesota Wheat,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,Montreal Canadiens,Montreal,#A6192E,#001E62,Rouge (PMS 187 C); Bleu (PMS 2758 C); Blanc,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,Nashville Predators,Nashville,#FFB81C,#041E42,Gold (PMS 1235 C); Navy (PMS 282 C),https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,New Jersey Devils,New York,#C8102E,#000000,Red (PMS 186 C); Black,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,New York Islanders,New York,#003087,#FC4C02,Royal Blue (PMS 287 C); Orange (PMS 1655 C),https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,New York Rangers,New York,#0033A0,#C8102E,Blue (PMS 286 C); Red (PMS 186 C),https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,Philadelphia Flyers,Philadelphia,#CF4520,#000000,Burnt Orange (PMS 173 C); Black,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26). Older aggregator value: #FA4616."
NHL,Seattle Kraken,Seattle,#051C2C,#9CDBD9,Deep Sea Blue (PMS 296 C); Ice Blue (PMS 324 C); Shadow Blue; Red Alert,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26). Sources disagree: teamcolorcodes gives #001628 / #99D9D9 and Red Alert #E9072B; this source gives Red Alert #C8102E."
NHL,Tampa Bay Lightning,Tampa Bay (TPA),#00205B,#FFFFFF,Blue (PMS 281 C); White; Black (auxiliary),https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,Toronto Maple Leafs,Toronto,#00205B,#FFFFFF,Blue (PMS 281 C); White,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
NHL,Vancouver Canucks,Vancouver,#00205B,#00843D,Blue (PMS 281 C); Green (PMS 348 C); Navy; Silver,https://www.designyourway.net/blog/nhl-team-color-codes/,n,"hex: third-party (estimated) (source says values come from official vector logos, 2025-26)."
MLS,Atlanta United,Atlanta,#A29061,#80000B,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary. Dataset lists gold first; red #80000B / black is the more common lead. Verify."
MLS,Austin FC,Austin,#00B140,#000000,Bright Verde; Black,https://teamcolorcodes.com/austin-f-c-color-codes/,n,hex: third-party (estimated).
MLS,San Jose Earthquakes,Bay Area,#0051BA,#000000,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary."
MLS,New England Revolution,Boston,#0A2141,#D80016,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary. Values predate the crest change that took effect for 2022 (mlssoccer.com). Verify."
MLS,Chicago Fire FC,Chicago,#AF2626,#0A174A,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary. Club has changed crest since this dataset. Verify."
MLS,Columbus Crew,Columbus,#000000,#FFDB00,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary. Club rebranded (name/crest) after this dataset; black-and-gold scheme retained. Verify exact gold."
MLS,FC Dallas,Dallas–Fort Worth,#CF0032,#07175C,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary."
MLS,Houston Dynamo FC,Houston,#F36600,#2E2926,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary. Club rebranded after this dataset. Verify."
MLS,Sporting Kansas City,Kansas City,#91B0D5,#002B5C,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary."
MLS,LA Galaxy,Los Angeles,#00245D,#004689,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary. Gold (#F1AA00/#FFD200) is the usual accent."
MLS,Los Angeles FC,Los Angeles,#000000,#C39E6D,Black; California Gold; Asphalt; Gray,https://teamcolorcodes.com/los-angeles-fc-color-codes/,n,hex: third-party (estimated). brandcolorcode.com gives LAFC 2 gold as #C29E6C.
MLS,Minnesota United FC,Minneapolis–St. Paul,#CFD4D8,#6CADDF,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary. Dataset lists light gray first. Verify."
MLS,CF Montréal,Montreal,#000000,#9EA1A2,Impact Black; Ice Gray; Sacré Bleu (#0033A1),https://teamcolorcodes.com/montreal-impact-color-codes,n,"hex: third-party (estimated). Rebrand (Impact to CF Montréal, then a new crest)."
MLS,Nashville SC,Nashville,#ECE83A,#1F1646,Electric Gold; Acoustic Blue,https://teamcolorcodes.com/nashville-sc-color-codes/,n,hex: third-party (estimated).
MLS,New York City FC,New York,#6CADDF,#00285E,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary."
MLS,New York Red Bulls,New York,#D50031,#012055,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary."
MLS,Philadelphia Union,Philadelphia,#002D55,#5090CD,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary."
MLS,San Diego FC,San Diego,,,Chrome; Azul,https://digital-release.fox5sandiego.com/?p=1499642,n,announced (press report). New club (2025). No hex found.
MLS,Seattle Sounders FC,Seattle,#4F8A10,#11568C,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary."
MLS,Toronto FC,Toronto,#D80016,#313F49,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary."
MLS,Vancouver Whitecaps FC,Vancouver,#12264C,#85B7EA,,https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json,n,"hex: third-party (estimated); dataset roughly 2017-era (it has 22 MLS clubs and no LAFC, which joined in 2018), color order is the dataset's and is not a stated primary."
WNBA,Atlanta Dream,Atlanta,#C8102E,#418FDE,Red; Blue; Light Blue; Navy,https://teamcolorcodes.com/atlanta-dreams-color-codes/,n,hex: third-party (estimated). 
WNBA,Golden State Valkyries,Bay Area,,,Valkyries Violet; Black (gold added in secondary logos),https://www.nbcnews.com/news/sports/golden-state-valkyries-wnba-rcna152165,n,announced (press report). No hex found. Names announced at 2024 launch; gold added later via secondary logos (sportslogos.net). 2026 uniforms lean on violet.
WNBA,Chicago Sky,Chicago,#FFCD00,#418FDE,Yellow (PMS 116); Blue (PMS 279),https://teamcolorcodes.com/category/wnba-team-color-codes/,n,"hex: third-party (estimated). Aggregator cites the NBA media-central logo sheet as its source (not opened by me). Its prose text wrongly says 'red, blue, navy'."
WNBA,Dallas Wings,Dallas–Fort Worth,#0C2340,#C4D600,Navy; Lime; Cyan; Blue; Red,https://teamcolorcodes.com/dallas-wings-color-codes/,n,hex: third-party (estimated). 
WNBA,Las Vegas Aces,Las Vegas,#BA0C2F,#000000,Red (PMS 200); Black; Gold (PMS 872); Silver (PMS 877),https://teamcolorcodes.com/category/wnba-team-color-codes/,n,"hex: third-party (estimated). Aggregator cites an NBA media-central logo sheet (not opened by me). RGB listed for red (206,17,65) implies #CE1141, not #BA0C2F."
WNBA,Los Angeles Sparks,Los Angeles,#FFC72C,#702F8A,Yellow; Purple; Green,https://teamcolorcodes.com/los-angeles-sparks-color-codes/,n,hex: third-party (estimated). Order is the source's. Many fans read purple as the lead color; consider #702F8A as primary.
WNBA,Minnesota Lynx,Minneapolis–St. Paul,#0C2340,#236192,Navy (PMS 289); Blue (PMS 647); Green (PMS 368); Gray (PMS 422),https://teamcolorcodes.com/category/wnba-team-color-codes/,n,hex: third-party (estimated). 
WNBA,New York Liberty,New York,#6ECEB2,#000000,Green (PMS 338); Black; Orange (PMS 165); Blue (PMS 293),https://teamcolorcodes.com/category/wnba-team-color-codes/,n,"hex: third-party (estimated). RGB listed for green (134,206,188) implies #86CEBC, not #6ECEB2."
WNBA,Phoenix Mercury,Phoenix,#201747,#CB6015,Purple; Orange; Gray; Black,https://teamcolorcodes.com/phoenix-mercury-color-codes/,n,hex: third-party (estimated). 
WNBA,Seattle Storm,Seattle,#FBE122,#2C5234,Yellow; Green; Gray,https://teamcolorcodes.com/seattle-storm-color-codes/,n,hex: third-party (estimated). 
WNBA,Toronto Tempo,Toronto,,,Light blue; maroon (or red: reports differ),https://news.sportslogos.net/toronto-tempo-wnba-team-officially-unveils-name-logos-colours-for-2026-inaugural-season,n,announced (press report). New for 2026. No hex found. Sportslogos says light blue and maroon; a Canadian Press report says blue and red.
NWSL,Bay FC,Bay Area,,,Bay; Steel; Fog; Poppy,https://www.nwslsoccer.com/news/nwsl-media-kit-club-information,y,"names: announced (league media kit, Mar 2025). No hex published there."
NWSL,Boston Legacy FC,Boston,,,Relentless Raspberry; Loyal Charcoal; Daring Pink; Rise Yellow; Orange Press,https://www.nwslsoccer.com/news/nwsl-media-kit-club-information,y,"names: announced (league media kit, Mar 2025). No hex published there. Began play 2026."
NWSL,Chicago Stars FC,Chicago,,,Red; Blue; Black; White,https://www.nwslsoccer.com/news/nwsl-media-kit-club-information,y,"names: announced (league media kit, Mar 2025). No hex published there. Renamed from Chicago Red Stars."
NWSL,Houston Dash,Houston,,,Electric Orange; Space City Blue; Black; White,https://www.nwslsoccer.com/news/nwsl-media-kit-club-information,y,"names: announced (league media kit, Mar 2025). No hex published there."
NWSL,Kansas City Current,Kansas City,,,Heartland; Teal; Storm; White; Pantone Black,https://www.nwslsoccer.com/news/nwsl-media-kit-club-information,y,"names: announced (league media kit, Mar 2025). No hex published there."
NWSL,Angel City FC,Los Angeles,,,Sol Rosa; Asphalt; Armour; Line White; Pitch Black,https://www.nwslsoccer.com/news/nwsl-media-kit-club-information,y,"names: announced (league media kit, Mar 2025). No hex published there."
NWSL,Gotham FC,New York,,,Sky Blue; Cloud White; Gotham Black,https://www.nwslsoccer.com/news/nwsl-media-kit-club-information,y,"names: announced (league media kit, Mar 2025). No hex published there."
NWSL,San Diego Wave FC,San Diego,,,,https://www.nwslsoccer.com/news/nwsl-media-kit-club-information,n,"names: announced (league media kit, Mar 2025). No hex published there. Names not captured from the media kit."
NWSL,Seattle Reign FC,Seattle,,,Reign Blackened Blue; Reign Blue; Reign Diffused Light Blue; Reign Gold; Reign Sesame; Reign Summit White,https://www.nwslsoccer.com/news/nwsl-media-kit-club-information,y,"names: announced (league media kit, Mar 2025). No hex published there. Renamed from OL Reign."
PWHL,Boston Fleet,Boston,,,,,n,Not researched in this pass.
PWHL,Minnesota Frost,Minneapolis–St. Paul,,,,,n,Not researched in this pass.
PWHL,Montréal Victoire,Montreal,,,,,n,Not researched in this pass.
PWHL,New York Sirens,New York,,,,,n,Not researched in this pass.
PWHL,Seattle Torrent,Seattle,,,Slate green; cream,https://www.news4jax.com/sports/2025/11/06/pwhl-unveils-expansion-team-nicknames-and-logos-seattle-torrent-and-vancouver-goldeneyes/,n,announced (press report). Expansion 2025-26. AP corrected 'emerald green' to 'slate green'.
PWHL,Toronto Sceptres,Toronto,,,,,n,Not researched in this pass.
PWHL,Vancouver Goldeneyes,Vancouver,,,Pacific blue; cream,https://www.news4jax.com/sports/2025/11/06/pwhl-unveils-expansion-team-nicknames-and-logos-seattle-torrent-and-vancouver-goldeneyes/,n,announced (press report). Expansion 2025-26.
UFL,Columbus Aviators,Columbus,,,,https://fbschedules.com/ufl-schedule/,n,New/renamed for 2026; league said all eight teams get new uniforms. Colors not researched.
UFL,Dallas Renegades,Dallas–Fort Worth,,,,https://fbschedules.com/ufl-schedule/,n,New/renamed for 2026; league said all eight teams get new uniforms. Colors not researched.
UFL,Houston Gamblers,Houston,,,,https://fbschedules.com/ufl-schedule/,n,New/renamed for 2026; league said all eight teams get new uniforms. Colors not researched.
```

Column notes: `official` is `y` only where the value came from a team or league source (here, NWSL color names). `official_names` holds the names as the source gives them; aggregator names are labels, not necessarily the team's official names. Empty hex cells mean I found no value and did not guess.

### Flagged teams

- Tampa Bay Buccaneers: source lists black as `#FF7900` (typo).
- Anaheim Ducks: rebrand; sources differ (`#CF4520` vs older `#F47A38`).
- Seattle Kraken: two sources disagree on all three main colors.
- New England Revolution, Chicago Fire, Columbus Crew, Houston Dynamo: hex from an older dataset; clubs have rebranded since.
- Atlanta United, Minnesota United: dataset color order likely not primary-first.
- Los Angeles Sparks, New York Yankees: source order may not match the lead color.
- Hawks, Celtics, Mavericks, Bucks, Pelicans, Cowboys, Giants, Aces, Liberty: source's RGB and hex disagree.
- Timberwolves/Lynx, Yankees/Islanders, Kings/LAFC: identical primaries in the same metro.
- New England Patriots/Revolution, Devils/Red Bulls: near-identical primaries (ΔE under 2.5).
- San Diego FC, Valkyries, Tempo, all NWSL, all PWHL, all UFL: no hex found.
- Athletics: relocation; aggregator still labels them Oakland.

## Self-audit

### Claims resting on thin evidence

| Claim | Why it's thin | Check here |
|---|---|---|
| Every NFL, NBA, MLB, WNBA and MLS hex value | Aggregator, not a brand guide. Its league tables were last modified in 2022. | [NFL table](https://teamcolorcodes.com/nfl-team-color-codes/), [NBA table](https://teamcolorcodes.com/nba-team-color-codes/), [MLB table](https://teamcolorcodes.com/mlb-color-codes/) |
| NHL hex values | Blog post says it took values from official vector logos for 2025-26, but it's still third-party. It also gives the Red Wings two different reds on the same page, so it isn't fully consistent. | [designyourway NHL](https://www.designyourway.net/blog/nhl-team-color-codes/) |
| 16 MLS teams' hex values | From a GitHub dataset that looks roughly 2017-era (22 MLS clubs, no LAFC). It doesn't mark primaries, and several clubs have rebranded since. | [teams.json](https://raw.githubusercontent.com/jimniels/teamcolors/master/src/teams.json) |
| Sky and Aces hex values | The aggregator cites NBA media-central logo sheets as its 'Verified Source'. I didn't open them, so I can't confirm they match. | [Sky logo sheet](https://mediacentral.nba.com/wp-content/uploads/logos/wnba/chi/Chicago-Sky_logosheet.jpg), [Aces logo sheet](https://mediacentral.nba.com/wp-content/uploads/logos/wnba/lva/Las_Vegas_Aces_Logosheet.jpg) |
| NWSL color names | Official, but the media kit is dated March 2025 (updated April 2025), so 2026 changes may be missing. San Diego Wave's names weren't captured. The page body loads with JavaScript, so I read the names from a search snippet. | [NWSL media kit](https://www.nwslsoccer.com/news/nwsl-media-kit-club-information) |
| Toronto Tempo colors | Press reports conflict (maroon vs red). | [sportslogos.net](https://news.sportslogos.net/toronto-tempo-wnba-team-officially-unveils-name-logos-colours-for-2026-inaugural-season), [Canadian Press via rdnewsnow](https://rdnewsnow.com/?p=651257) |
| Seattle Torrent color | AP first said emerald green, then corrected to slate green. | [AP via News4JAX](https://www.news4jax.com/sports/2025/11/06/pwhl-unveils-expansion-team-nicknames-and-logos-seattle-torrent-and-vancouver-goldeneyes/) |
| Metro membership (Athletics in Sacramento, Packers excluded, Devils/Gotham in NY) | My own assignment; the Athletics' Sacramento stay is from background knowledge, not verified this session. | Your own metro definitions |
| Brand-limits section | Background knowledge, not researched live; case names and holdings should be confirmed. | Counsel; search *Qualitex Co. v. Jacobson Products* and *Board of Supervisors v. Smack Apparel* |
| Dark-card contrast numbers | Assume a `#121212` card. | Rerun with your real dark color |

### Things I guessed or decided myself

- Which color counts as primary when the source's order looks wrong (I kept source order and flagged instead of reordering).
- The ΔE under 10 cut-off for "hard to tell apart" and the 3:1 accent threshold.
- Third-color fallbacks in the contrast table, picked from the same source palette.

### What to check by hand first

1. The identical and near-identical pairs in section 2, since these affect the UI design most.
2. The four rebranded MLS clubs plus Atlanta and Minnesota United. Open each club's official site and sample the crest colors, or find its media/press kit.
3. Hex for the 12 teams with names only (NWSL, PWHL, UFL, Valkyries, Tempo, San Diego FC). Team press kits or the league media portals are the best bets.
4. The coverage gap: decide which minor leagues you actually need before researching them, since that list could run to 100+ teams across your metros.

Example to open in a browser: the Buccaneers row in the [NFL table](https://teamcolorcodes.com/nfl-team-color-codes/) shows the black-is-orange typo, a quick illustration of why the aggregator values need spot checks.
