# Research prompt: how a team is named at each level of the app

Written Oct 19, 2026 for a research model. Save the answer beside this file as `team-naming-levels-answer.md`. Kylie decides; nothing here is a decision.

## What Fan/Friction is
A personal log of live events (sports and concerts) with a friction read on each night, built city by city (Los Angeles first, about 40 metros listed, Canada and Mexico included). Every team is one record: a full name, a short name, a scoreboard code, a league and a sport. College programs are one record per sport (UCLA football, UCLA men's basketball, UCLA women's basketball), the way ESPN lists them. About 580 teams are on file today across pro leagues (MLB, NBA, WNBA, NFL, NHL, PWHL, MLS, NWSL, Liga MX, minor and indoor leagues) and college programs (NCAA, U Sports).

## The problem
The app writes a team's name in six places with six amounts of room, and the stored fields do not map cleanly onto them. Pro teams are "city + nickname" (Los Angeles Dodgers) and the sport is in the league. College teams are "school + mascot" (UCLA Bruins) and the sport is NOT in the name, so "UCLA Bruins" alone is ambiguous between six programs. Kylie's instinct: the badge says only the school ("UCLA"), and the words beside it carry the sport ("UCLA Football", "UCLA Men's Basketball"). USC and UCLA are easy because the school name is already an abbreviation; she wants to know how this holds for longer names (Georgia Tech, Kennesaw State, San José State, Marquette, Villanova, Boston College, Université de Montréal).

## The six places (today's rule in each)
1. **The badge**: a blue tile, 44 px wide at least, 11 px bold capitals, one line. Today the scoreboard code: "LAD", "UCLA", "GT", "MARQ". A pro team that shares a code and sport with another in the same list carries its league under the tile ("NBA" / "WNBA" for the Pacers and the Fever).
2. **The map chip**: a 112 × 44 box over the venue, the home team's short name, "Dodgers", "UCLA", with a squad tag only when two chips that night would otherwise match.
3. **A row's lead line** (the Following tab): 12.5 px, about 220 px of room, blue. Today "LA Dodgers", "UCLA Football".
4. **A row's title**: "Brewers at Dodgers", "Wisconsin at UCLA", with a squad tag on college games in Explore ("Arizona vs. UCLA (MBB)") but not on Following rows, where the lead line already says the program.
5. **A list row with the badge beside it** (the picker, search, the Following sheet): the full written name, about 200 px. Today "LA Dodgers", "UCLA Football".
6. **The team's own page header**: the biggest, "Los Angeles Dodgers", and for colleges today "UCLA Football".

Plus the spoken name for screen readers, which must be unambiguous: "UCLA Bruins men's basketball".

## What to work out
1. **A naming table with one row per level** and, for each, the rule for pro teams, for college teams, and for clubs whose name does not fit "city + nickname" (Angel City FC, Inter Miami CF, Real Salt Lake, Pumas UNAM, Diablos Rojos del México). Say which stored fields each level needs. If a level needs a field the records lack (a display city, a mascot separate from the school, a sport in words, a "common name" like "Cal" for California), name the field and say how it would be filled for 580 teams without hand work where possible.
2. **City shortcuts for pros.** Kylie's list: LA, NY, SF, SD, SJ, KC, LV, STL, TB, NO; keep New England, San Antonio, Salt Lake City, Golden State and every other city spelled out. Check it against what fans and league sites actually write, flag any that read wrong ("NO Saints", "TB Rays"), and say what to do with two-city or region names (Minnesota, Golden State, Carolina, Vegas) and non-US cities (Montréal, Ciudad de México).
3. **Colleges.** The school part: when is the common short form right ("UCLA", "Cal", "Georgia Tech", "Ole Miss") and when must it be longer? Does the mascot ever belong in the app (fans say "Bruins", "Trojans"), and at which level? The sport part: "Football", "Men's Basketball", "Women's Basketball", "Men's Ice Hockey", "Softball", "Baseball", "Men's Soccer", "Women's Volleyball"; say whether "Men's" should be dropped when the school has no women's program in that sport (most football), and what the NCAA, the schools' own sites and ESPN write. Kylie does not like the NCAA's letter codes on screen (FB, MBB, WBB) and wants words wherever there is room.
4. **The squad tag on a row title** ("(MBB)"): keep it where the lead line is absent (Explore, date page, chips when two match), drop it where the lead line says the program? Say what else could carry it.
5. **Collisions**: two programs of one school in one sport (men's and women's basketball), two schools sharing a code (Houston and the Rockets both HOU; Cleveland State and the Cavaliers both CLE), two clubs of one city in one sport (Pacers and Fever). Say per level how each is told apart with the fewest marks.
6. **Edge cases to check by name**: Texas (Longhorns, also the Rangers' state), Miami (Hurricanes, Heat, Dolphins), Washington (Huskies, Commanders, Wizards, Nationals, Capitals, Mystics, Spirit), Minnesota (five pro teams and the Gophers), the Toronto Varsity Blues and York Lions (U Sports), Marquette and Villanova (no city in the name), Sacramento City College, and the Mexican clubs.

## House rules the answer must respect
- Women's teams are never marked when men's teams are not (no "W" alone; "Men's" and "Women's" both written or both dropped).
- 11 pt minimum text; 44 pt tap targets; Letterboxd density; say less rather than more.
- Every rule must work for any city, not just Los Angeles: phrase rules in terms of fields and leagues, and give examples from at least three countries' leagues.
- Mark every example "EXAMPLE" where the data is invented; team names may be real.

## What to hand back
- The naming table (levels × team kinds), with a worked example for the Dodgers, the Pacers and the Fever, UCLA's three big programs, Georgia Tech football, Marquette women's basketball, Angel City FC and Pumas UNAM.
- The list of fields to add to the team record, with a source for each.
- A short list of the cases the table cannot settle, for Kylie.
