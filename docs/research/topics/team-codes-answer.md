# Team codes: answer to the research brief

Status: partly applied, Oct 15, 2026: the 29 High-confidence changes with no open call and the 5 fills are in `src/data/teams.ts`; the Medium, Low and judgment-call rows wait for Kylie (BACKLOG, "Team codes").

Answered Oct 15, 2026, against `team-codes-current.md` (578 rows). Researched with web search; several league sites render scores with JavaScript and could not be read directly, so some big-league codes come from memory and are marked as such (see the Self-audit).

## Summary

- **111 rows change or fill** (listed one by one in Part 2a; 5 of them are the blank rows). The rest are keeps, grouped by league.
- **Fill all 5 blank rows:** Winnipeg Jets `WPG`, Rice `RICE`, Rutgers `RUTG`, Washington Huskies `WASH`, Bowling Green `BGSU`.
- The biggest single pattern: the app often used a **nickname code** (RAP, JAY, TIM, THO, FEV, MER, ARG, REB, SCE, MAR) where every league and broadcaster uses the **city code** (TOR, POR, IND, PHO, OTT). Fans see city codes.
- Second pattern: **Washington** is not one code. MLB and NHL use `WSH`; NFL, NBA, WNBA and NWSL use `WAS`; MLS uses `DC`.
- Third: **college codes should be ESPN's**, one per school across all sports. Ambiguous codes like `GSU`, `KSU`, `TSU`, `CSU`, `PSU`, `UM`, `UD`, `UW` collide with other schools on any national scoreboard.
- Nothing recommended here is longer than 4 characters. The only row over 4 today is `UINDY`.

Confidence scale used throughout: **High** = checked this session on a league or ESPN page, or a long-stable league code; **Medium** = consistent across sources I know but not re-checked this session; **Low** = memory only, or the league publishes no code I could find.

---

## Part 1. The rule, by league

General source order (Kylie's rule): **TV scorebug → league or team site → ESPN and score apps → everyday shorthand.** In practice, for the big leagues the league's official tricode is what both the league site and most national scorebugs show, so the league site is the practical anchor. ESPN keeps its own house style in a few leagues (2-letter codes like `SA`, `GS`, `NY`, `TB`), and those are where sources disagree.

| League | Where the standard comes from | Consistency | Recommended source order |
|---|---|---|---|
| NFL | NFL.com team codes (`LAR`, `LAC`, `LV`, `WAS`). CBS/FOX/NBC scorebugs follow them. | Very high. ESPN differs only on Washington (`WSH`). | [NFL.com teams](https://www.nfl.com/teams/) → ESPN |
| MLB | MLB.com Gameday codes (`CWS`, `KC`, `AZ`, `ATH`). | High. ESPN uses `CHW` for the White Sox and `ARI` for Arizona; Baseball-Reference uses `KCR`, `CHW`, which are database codes, not scorebug codes. | [MLB.com](https://www.mlb.com/) → ESPN |
| NBA | NBA.com tricodes (`GSW`, `NOP`, `NYK`, `SAS`, `UTA`, `WAS`, `BKN`). | Medium. ESPN shortens to `GS`, `NO`, `NY`, `SA`, `UTAH`, `WSH`. League tricode is what NBA-produced graphics and the NBA app show. | [NBA.com teams](https://www.nba.com/teams) → ESPN |
| NHL | NHL.com codes, always 3 letters (`LAK`, `SJS`, `NJD`, `TBL`, `VGK`, `UTA`). | Medium. ESPN shortens to `LA`, `SJ`, `NJ`, `TB` and uses `UTAH`. The app already follows NHL.com for LAK/SJS/NJD, so Tampa should be `TBL` to match. | [NHL.com](https://www.nhl.com/) → Sportsnet/TNT → ESPN |
| MLS | League tricodes used for broadcast (Apple TV). Published in club style guides. | High, checked: the [Atlanta United style guide](https://www.atlutd.com/club/atlutd-style-guide/section-2) lists the tricode "used for broadcast" for all 30 clubs: `LA` (Galaxy), `MIN`, `NSH`, `NY` (Red Bulls), `POR`, `TOR`, `DC`, `ATX`, `CLB`, `SKC`, `RSL`, `LAFC`. ESPN uses `RBNY` for the Red Bulls. | [MLS tricodes](https://www.atlutd.com/club/atlutd-style-guide/section-2) → [mlssoccer.com](https://www.mlssoccer.com/) → ESPN |
| WNBA | WNBA.com tricodes (`LVA`, `LAS`, `NYL`, `PHO`, `WAS`, `GSV`, `TOR`, `POR`). | Medium. Data feeds checked this session show `IND`, `PHO`, `WAS`, `TOR`, `POR`, `LVA`, `LAS`, `NYL` ([example table](https://www.sportschau.de/live-und-ergebnisse/basketball/wnba/ma11863579/toronto-tempo_phoenix-mercury/blitztabelle)). ESPN uses `PHX`, `LV`, `LA`, `NY`, `GS`, `WSH`. | [WNBA.com](https://www.wnba.com/) → ESPN |
| NWSL | No published broadcast list found. ESPN's codes checked this session: `GFC`, `KC`, `NC`, `BOS`, `WAS`, `LOU`, `POR`, `BAY`, `SD`, `LA`, `UTA`, `HOU`, `DEN`, `SEA`, `CHI`, `ORL` ([Gotham page](https://espn.com/soccer/team?id=15364), [Denver page](https://www.espn.com/soccer/team?id=131563)). | Medium. Clubs' own shorthands (`ACFC`, `KCC`) differ from ESPN. | ESPN → [nwslsoccer.com](https://www.nwslsoccer.com/) → club shorthand |
| PWHL | City codes on [thepwhl.com](https://www.thepwhl.com/): `BOS`, `MIN`, `MTL`, `NY`, `OTT`, `TOR`, `SEA`, `VAN`. | High for the original 8 (memory). The four 2026–27 expansion teams (Detroit, Hamilton, Las Vegas, San Jose) have no names yet; names are due before camps open Nov 18 ([The Hockey News](https://thehockeynews.com/womens/pwhl/pwhl-team-names-decisions-are-done-and-jerseys-designed-fans-now-will-wait-for-market-identities)). No codes published that I could find. | thepwhl.com → TSN/Sportsnet → ESPN |
| CFL | CFL.ca / TSN codes: `BC`, `CGY`, `EDM`, `HAM`, `MTL`, `OTT`, `SSK`, `TOR`, `WPG`. | Very high. | [CFL.ca](https://www.cfl.ca/) → TSN |
| NLL | ESPN NLL codes, checked: `COL`, `LV`, `OSH`, `PHI`, `VAN`, `TOR`, `GA`, `SD`... ([ESPN NLL standings](https://www.espn.com/nll/standings)). | High. | ESPN → [nll.com](https://www.nll.com/) |
| CPL / NSL (Canada soccer) | League sites; codes not verified this session. | Low. | [canpl.ca](https://canpl.ca/), [nsl.ca](https://www.nsl.ca/) |
| Liga MX / Liga MX Femenil | Liga MX scoreboards and TUDN/ESPN graphics use 3-letter club codes (`AME`, `CAZ`); Femenil uses the same club codes. | Medium for America/Cruz Azul; Low for Pumas (`PUM` vs `UNAM`) and Atlante. | [ligamx.net](https://ligamx.net/) → ESPN Deportes |
| AHL, ECHL, WHL, OHL, QMJHL | League HockeyTech scoreboards use city codes (AHL `TEX`, `CLE`, `TOR`; OHL `OSH`, `OTT`; WHL `POR`). | Medium-low (memory). | [theahl.com](https://theahl.com/), [echl.com](https://www.echl.com/), [chl.ca](https://chl.ca/) |
| Minor-league baseball (Triple-A to Single-A) | MiLB.com scoreboards use city codes (Las Vegas `LV`, Columbus `COL`, Sacramento `SAC`, San Antonio `SA`). | Medium-low (memory). | [milb.com](https://www.milb.com/) → team site |
| Independent baseball, UFL, IFL, MASL, MLV, LOVB, AUSL, PBR, PLL, USL leagues | Each league site; most show city or nickname codes inconsistently. | Low. No verdicts beyond "keep and check". | League sites (links in Part 2) |
| NBA G League | gleague.nba.com tricodes. | Low (not verified). | [gleague.nba.com](https://gleague.nba.com/) |
| College (NCAA D-I) | **ESPN's abbreviation**, which is also what ESPN, ACC Network, SEC Network and ESPN+ scorebugs show for most of these schools. Same code across every sport for a school. FOX/CBS/BTN scorebugs for Big Ten schools usually match (`MICH`, `MINN`, `RUTG`). Checked this session: `KENN`, `GAST` ([ESPN](https://africa.espn.com/mens-college-basketball/game/_/gameId/401700273/kennesaw-st-georgia-st)), `MILW`, `CLE` for Cleveland State ([ESPN](https://africa.espn.com/mens-college-basketball/video/_/gameId/401714400)), `STMN`, `DEN` for Denver ([ESPN](https://africa.espn.com/mens-college-basketball/playbyplay/_/gameId/401470232)). | Medium. Schools' own shorthand sometimes differs (`DU`, `UST`, `Nova`, `UDM`). | ESPN team page → school athletics site → conference site |
| College D-II/D-III, community college | No national scorebug; school's own shorthand. | Low. | School athletics site |
| U Sports | Conference sites (Canada West, OUA, RSEQ) and school shorthand. | Low. | [usports.ca](https://usports.ca/), conference sites |

How broadcasts shorten the examples in the brief: `UCLA` and `USC` stay as-is everywhere. Ole Miss is `MISS` on ESPN (not in the app).

---

## Part 2. A verdict on every row

### 2a. Rows to change or fill

| App id | Team | League | App code | Recommended code | Sources (scorebug / league site / ESPN or score site / shorthand) | Confidence | Note |
|---|---|---|---|---|---|---|---|
| `jets` | Winnipeg Jets | NHL | (blank) | **WPG** | NHL.com WPG / ESPN WPG / "WPG" | High | Fill. |
| `rice` | Rice Owls | College football | (blank) | **RICE** | ESPN RICE / matches `rice-football` | High | Fill. Looks like a duplicate of `rice-football`; merge? |
| `rutgers` | Rutgers Scarlet Knights | College football | (blank) | **RUTG** | ESPN RUTG / BTN RUTG | Medium | Fill. From memory. |
| `washington-huskies` | Washington Huskies | College football | (blank) | **WASH** | ESPN WASH | Medium | Fill. Duplicate of `uw-football`; merge? |
| `bowling-green` | Bowling Green Falcons | College football | (blank) | **BGSU** | ESPN BGSU (memory) / school "BGSU" | Medium | Fill. |
| `washington` | Washington Commanders | NFL | WSH | **WAS** | Scorebug WAS (CBS/FOX, memory) / NFL.com WAS / ESPN WSH | Medium | ESPN is the only major source with WSH. |
| `royals` | Kansas City Royals | MLB | KCR | **KC** | MLB.com KC / ESPN KC | High | KCR is Baseball-Reference's database code. |
| `blue-jays` | Toronto Blue Jays | MLB | JAY | **TOR** | Sportsnet TOR / MLB.com TOR / ESPN TOR | High | Nickname code; no one uses JAY. |
| `spurs` | San Antonio Spurs | NBA | SA | **SAS** | NBA.com SAS / ESPN SA | Medium | League tricode wins over ESPN short form. |
| `raptors` | Toronto Raptors | NBA | RAP | **TOR** | TSN/Sportsnet TOR / NBA.com TOR / ESPN TOR | High | |
| `wizards` | Washington Wizards | NBA | WSH | **WAS** | NBA.com WAS / ESPN WSH | Medium | |
| `lightning` | Tampa Bay Lightning | NHL | TB | **TBL** | NHL.com TBL / ESPN TB | Medium | Matches app's LAK/SJS/NJD choice. If you'd rather follow ESPN, change all four instead. |
| `galaxy` | LA Galaxy | MLS | LAG | **LA** | MLS broadcast tricode LA / ESPN LA | High | [MLS tricodes](https://www.atlutd.com/club/atlutd-style-guide/section-2). |
| `minnesota-united` | Minnesota United FC | MLS | MNU | **MIN** | MLS tricode MIN | High | |
| `nashville-sc` | Nashville SC | MLS | NSC | **NSH** | MLS tricode NSH | High | |
| `red-bulls` | New York Red Bulls | MLS | RBNY | **NY** | MLS tricode NY / ESPN RBNY / shorthand "RBNY" | Medium | Sources split. Club now appears as "Red Bull New York" on MLS sites and ESPN; consider renaming the team too. |
| `timbers` | Portland Timbers | MLS | TIM | **POR** | MLS tricode POR | High | |
| `toronto-fc` | Toronto FC | MLS | TFC | **TOR** | MLS tricode TOR / shorthand "TFC" | High | TFC is everyday shorthand, but the broadcast code is TOR. |
| `fever` | Indiana Fever | WNBA | FEV | **IND** | WNBA.com IND / ESPN IND / data feeds IND | High | |
| `mercury` | Phoenix Mercury | WNBA | MER | **PHO** | WNBA.com PHO / data feeds PHO / ESPN PHX | Medium | If you'd rather match the Suns, PHX is ESPN's. |
| `portland-fire` | Portland Fire | WNBA | FIRE | **POR** | Data feeds POR / WNBA.com POR | High | |
| `tempo` | Toronto Tempo | WNBA | TEM | **TOR** | Data feeds TOR / WNBA.com TOR | High | TEM also collides with Temple. |
| `mystics` | Washington Mystics | WNBA | WSH | **WAS** | WNBA.com WAS / data feeds WAS / ESPN WSH | High | |
| `boston-legacy-fc` | Boston Legacy FC | NWSL | LEG | **BOS** | ESPN BOS | High | |
| `kc-current` | Kansas City Current | NWSL | KCC | **KC** | ESPN KC / club shorthand "KCC" | Medium | |
| `angel-city` | Angel City FC | NWSL | ACFC | **LA** | ESPN LA / club shorthand "ACFC" | Medium | Sources split; ACFC is strong club shorthand. Shares LA with the Galaxy (same sport icon; colors differ). Kylie's call. |
| `thorns` | Portland Thorns FC | NWSL | THO | **POR** | ESPN POR | High | |
| `utah-royals` | Utah Royals | NWSL | UTAH | **UTA** | ESPN UTA | High | |
| `spirit` | Washington Spirit | NWSL | WSH | **WAS** | ESPN WAS | High | |
| `pwhl-detroit` | PWHL Detroit | PWHL | PWHL | **DET** (provisional) | No published code yet | Low | "PWHL" is the league, not a team. DET follows the league's city-code pattern. Recheck when names drop (before Nov 18). |
| `pwhl-las-vegas` | PWHL Las Vegas | PWHL | PWHL | **LV** (provisional) | No published code yet | Low | Same as above. Could end up LV or LVG; check thepwhl.com. |
| `ottawa-charge` | Ottawa Charge | PWHL | CHG | **OTT** | thepwhl.com OTT (memory) | Medium | |
| `sceptres` | Toronto Sceptres | PWHL | SCE | **TOR** | thepwhl.com TOR (memory) | Medium | |
| `ottawa-redblacks` | Ottawa Redblacks | CFL | REB | **OTT** | TSN OTT / CFL.ca OTT | High | |
| `argonauts` | Toronto Argonauts | CFL | ARG | **TOR** | TSN TOR / CFL.ca TOR | High | |
| `las-vegas-desert-dogs` | Las Vegas Desert Dogs | NLL | LVD | **LV** | ESPN LV | High | |
| `oshawa-firewolves` | Oshawa FireWolves | NLL | FIR | **OSH** | ESPN OSH | High | |
| `texas-stars` | Texas Stars | AHL | STA | **TEX** | theahl.com TEX (memory) | Medium | |
| `cleveland-monsters` | Cleveland Monsters | AHL | MON | **CLE** | theahl.com CLE (memory) | Medium | |
| `marlies` | Toronto Marlies | AHL | MAR | **TOR** | theahl.com TOR (memory) | Medium | |
| `kc-mavericks` | Kansas City Mavericks | ECHL | MVS | **KC** | echl.com KC (memory) | Low | |
| `indy-fuel` | Indy Fuel | ECHL | FUEL | **IND** | echl.com IND (memory) | Low | |
| `portland-winterhawks` | Portland Winterhawks | WHL | HAW | **POR** | WHL scoreboard POR (memory) | Low | |
| `oshawa-generals` | Oshawa Generals | OHL | GEN | **OSH** | OHL scoreboard OSH (memory) | Low | Shares OSH with the FireWolves (different sport). |
| `ottawa-67s` | Ottawa 67's | OHL | 67S | **OTT** | OHL scoreboard OTT (memory) / shorthand "67's" | Low | "67's" is real shorthand; keep 67S if you prefer. |
| `gatineau-olympiques` | Gatineau Olympiques | QMJHL | OLY | **GAT** | QMJHL scoreboard GAT (memory) | Low | |
| `las-vegas-aviators` | Las Vegas Aviators | Triple-A baseball | AVI | **LV** | MiLB.com LV (memory) | Medium | AVI also collides with Columbus Aviators. |
| `columbus-clippers` | Columbus Clippers | Triple-A baseball | CLP | **COL** | MiLB.com COL (memory) | Medium | Shares COL with Colorado teams (different metro). |
| `river-cats` | Sacramento River Cats | Triple-A baseball | RC | **SAC** | MiLB.com SAC (memory) | Medium | |
| `san-antonio-missions` | San Antonio Missions | Texas League | MIS | **SA** | MiLB.com SA (memory) | Low | |
| `diablos-rojos` | Diablos Rojos del México | LMB | DIA | **MEX** | LMB scoreboards MEX (memory) | Medium | |
| `diablos-rojos-softball` | Diablos Rojos Femenil | LMS | DIS | **MEX** | Same club code (memory) | Low | |
| `diablos-rojos-basketball` | Diablos Rojos de Básquetbol | LNBP | DRB | **MEX** | Same club brand | Low | Not verified on LNBP site. |
| `america-femenil` | América Femenil | Liga MX Femenil | AMF | **AME** | Femenil uses club codes | Medium | |
| `cruz-azul-femenil` | Cruz Azul Femenil | Liga MX Femenil | CAF | **CAZ** | Femenil uses club codes | Medium | |
| `pumas-femenil` | Pumas UNAM Femenil | Liga MX Femenil | PUF | **same as `pumas-unam`** | Femenil uses club codes | Medium | Use whichever of UNAM/PUM you pick for the men. |
| `gsu-football` | Georgia State Panthers Football | College football | GSU | **GAST** | ESPN GAST (checked) | High | GSU is also Georgia Southern, Grambling, etc. |
| `gsu-mbb` | Georgia State Panthers Men's Basketball | College men's basketball | GSU | **GAST** | ESPN GAST (checked) | High | |
| `gsu-wbb` | Georgia State Panthers Women's Basketball | College women's basketball | GSU | **GAST** | ESPN GAST | High | |
| `ksu-football` | Kennesaw State Owls Football | College football | KSU | **KENN** | ESPN KENN (checked) | High | KSU is Kansas State on ESPN. |
| `ksu-mbb` | Kennesaw State Owls Men's Basketball | College men's basketball | KSU | **KENN** | ESPN KENN (checked) | High | |
| `ksu-wbb` | Kennesaw State Owls Women's Basketball | College women's basketball | KSU | **KENN** | ESPN KENN | High | |
| `harvard-football` | Harvard Crimson Football | College football | HAR | **HARV** | ESPN HARV (memory) | Medium | |
| `chicago-state-mbb` | Chicago State Cougars Men's Basketball | College men's basketball | CSU | **CHIS** | ESPN CHIS (memory) | Medium | CSU is ambiguous (also Cleveland State in this list). |
| `cleveland-state-mbb` | Cleveland State Vikings Men's Basketball | College men's basketball | CSU | **CLE** | ESPN CLE (checked) / Covers CLEV | Medium | Shares CLE with Cleveland pros (allowed). CLEV is the alternative. |
| `cleveland-state-wbb` | Cleveland State Vikings Women's Basketball | College women's basketball | CSU | **CLE** | ESPN CLE | Medium | |
| `uh-baseball` | Houston Cougars Baseball | College baseball | UH | **HOU** | ESPN HOU (memory) / school "UH" | Medium | Big 12 broadcasts show HOU. UH is also Hawaii. |
| `uh-football` | Houston Cougars Football | College football | UH | **HOU** | as above | Medium | |
| `uh-mbb` | Houston Cougars Men's Basketball | College men's basketball | UH | **HOU** | as above | Medium | |
| `uh-softball` | Houston Cougars Softball | College softball | UH | **HOU** | as above | Medium | |
| `uh-wbb` | Houston Cougars Women's Basketball | College women's basketball | UH | **HOU** | as above | Medium | |
| `pvamu-football` | Prairie View A&M Panthers Football | College football | PVAM | **PV** | ESPN PV (memory) | Low | |
| `texas-southern-football` | Texas Southern Tigers Football | College football | TSU | **TXSO** | ESPN TXSO (memory) | Medium | TSU collides with Tennessee State, also in the app. |
| `tsu-football` | Tennessee State Tigers Football | College football | TSU | **TNST** | ESPN TNST (memory) | Medium | |
| `tsu-mbb` | Tennessee State Tigers Men's Basketball | College men's basketball | TSU | **TNST** | ESPN TNST (memory) | Medium | |
| `tsu-wbb` | Tennessee State Lady Tigers Women's Basketball | College women's basketball | TSU | **TNST** | ESPN TNST (memory) | Medium | |
| `iu-indy-mbb` | IU Indianapolis Jaguars Men's Basketball | College men's basketball | IUJ | **(blank: verify)** | ESPN lists "IU Indianapolis"; code not confirmed | Low | IUJ isn't used anywhere I found. Check the ESPN team page. |
| `iu-indy-wbb` | IU Indianapolis Jaguars Women's Basketball | College women's basketball | IUJ | **(blank: verify)** | as above | Low | |
| `miami-hurricanes-football` | Miami Hurricanes Football | College football | UM | **MIA** | ESPN/ACC Network MIA (memory) | Medium | UM is also Michigan, Maryland, Memphis. Shares MIA with Miami pros (allowed). |
| `miami-hurricanes-mbb` | Miami Hurricanes Men's Basketball | College men's basketball | UM | **MIA** | as above | Medium | |
| `uwm-mbb` | Milwaukee Panthers Men's Basketball | College men's basketball | UWM | **MILW** | ESPN MILW (checked) / Covers MILW | High | |
| `uwm-volleyball` | Milwaukee Panthers Women's Volleyball | College volleyball | UWM | **MILW** | ESPN MILW | High | |
| `uwm-wbb` | Milwaukee Panthers Women's Basketball | College women's basketball | UWM | **MILW** | ESPN MILW | High | |
| `tulane-baseball` | Tulane Green Wave Baseball | College baseball | TUL | **TULN** | ESPN TULN (memory) | Medium | TUL reads as Tulsa. |
| `tulane-football` | Tulane Green Wave Football | College football | TUL | **TULN** | as above | Medium | |
| `tulane-mbb` | Tulane Green Wave Men's Basketball | College men's basketball | TUL | **TULN** | as above | Medium | |
| `tulane-wbb` | Tulane Green Wave Women's Basketball | College women's basketball | TUL | **TULN** | as above | Medium | |
| `columbia-football` | Columbia Lions Football | College football | COLU | **CLMB** | ESPN CLMB (memory) | Low | |
| `delaware-football` | Delaware Fightin' Blue Hens Football | College football | UD | **DEL** | ESPN DEL (memory) / school "UD" | Medium | UD is also Dayton. |
| `delaware-mbb` | Delaware Fightin' Blue Hens Men's Basketball | College men's basketball | UD | **DEL** | as above | Medium | |
| `delaware-wbb` | Delaware Fightin' Blue Hens Women's Basketball | College women's basketball | UD | **DEL** | as above | Medium | |
| `psu-football` | Portland State Vikings Football | College football | PSU | **PRST** | ESPN PRST (memory) | Low | PSU is Penn State on every national scoreboard. |
| `psu-mbb` | Portland State Vikings Men's Basketball | College men's basketball | PSU | **PRST** | as above | Low | |
| `psu-wbb` | Portland State Vikings Women's Basketball | College women's basketball | PSU | **PRST** | as above | Low | |
| `nc-state-football` | NC State Wolfpack Football | College football | NCSU | **NCST** | ESPN/ACC Network NCST (memory) | Medium | |
| `nc-state-mbb` | NC State Wolfpack Men's Basketball | College men's basketball | NCSU | **NCST** | as above | Medium | |
| `nc-state-wbb` | NC State Wolfpack Women's Basketball | College women's basketball | NCSU | **NCST** | as above | Medium | |
| `sac-state-football` | Sacramento State Hornets Football | College football | SSFB | **SAC** | ESPN SAC (memory) | Medium | The app gave this school a different code per sport. One code per school. |
| `sac-state-mbb` | Sacramento State Hornets Men's Basketball | College men's basketball | SSMB | **SAC** | as above | Medium | |
| `sac-state-volleyball` | Sacramento State Hornets Women's Volleyball | College volleyball | SSVB | **SAC** | as above | Medium | |
| `sac-state-wbb` | Sacramento State Hornets Women's Basketball | College women's basketball | SSWB | **SAC** | as above | Medium | |
| `uc-davis-football` | UC Davis Aggies Football | College football | UCFB | **UCD** | ESPN UCD (memory) | Medium | Same per-sport problem. |
| `uc-davis-mbb` | UC Davis Aggies Men's Basketball | College men's basketball | UCMB | **UCD** | as above | Medium | |
| `uc-davis-wbb` | UC Davis Aggies Women's Basketball | College women's basketball | UCWB | **UCD** | as above | Medium | |
| `uw-football` | Washington Huskies Football | College football | UW | **WASH** | ESPN/BTN WASH (memory) / shorthand "UW" | Medium | UW is also Wisconsin. |
| `uw-mbb` | Washington Huskies Men's Basketball | College men's basketball | UW | **WASH** | as above | Medium | |
| `uw-wbb` | Washington Huskies Women's Basketball | College women's basketball | UW | **WASH** | as above | Medium | |
| `varsity-blues-mbb` | Toronto Varsity Blues Men's Basketball | U Sports basketball | VBB | **UOFT** | Shorthand "U of T"; OUA code not verified | Low | Per-sport codes; collapse to one school code. Check OUA. |
| `varsity-blues-football` | Toronto Varsity Blues Football | U Sports football | VFB | **UOFT** | as above | Low | |
| `varsity-blues-hockey` | Toronto Varsity Blues Hockey | U Sports hockey | VHK | **UOFT** | as above | Low | |
| `york-lions-football` | York Lions Football | U Sports football | YFB | **YORK** | School name; OUA code not verified | Low | |

### 2b. Rows to keep, grouped

All keeps below are the code the league site and/or ESPN show today. "Flag" means keep for now but check (see Self-audit).

**NFL (25 keep, High):** `falcons` ATL, `sf-49ers` SF, `patriots` NE, `bears` CHI, `browns` CLE, `cowboys` DAL, `broncos` DEN, `lions` DET, `texans` HOU, `colts` IND, `chiefs` KC, `raiders` LV, `chargers` LAC, `rams` LAR, `dolphins` MIA, `vikings` MIN, `titans` TEN, `saints` NO, `ny-giants` NYG, `ny-jets` NYJ, `eagles` PHI, `arizona-cardinals` ARI, `steelers` PIT, `seahawks` SEA, `buccaneers` TB.

**MLB (26 keep, High unless noted):** `braves` ATL, `giants` SF, `red-sox` BOS, `cubs` CHC, `white-sox` CWS (MLB.com; ESPN uses CHW), `guardians` CLE, `rangers` TEX, `rockies` COL, `tigers` DET, `astros` HOU, `angels` LAA, `dodgers` LAD, `marlins` MIA, `brewers` MIL, `twins` MIN, `mets` NYM, `yankees` NYY, `phillies` PHI, `diamondbacks` AZ (Medium, flag: MLB.com shows AZ, ESPN still ARI), `pirates` PIT, `athletics` ATH, `padres` SD, `mariners` SEA, `cardinals` STL, `rays` TB, `nationals` WSH.

**NBA (23 keep, High):** `hawks` ATL, `warriors` GSW, `celtics` BOS, `bulls` CHI, `cavaliers` CLE, `mavericks` DAL, `nuggets` DEN, `pistons` DET, `rockets` HOU, `pacers` IND, `clippers` LAC, `lakers` LAL, `heat` MIA, `bucks` MIL, `timberwolves` MIN, `pelicans` NOP, `nets` BKN, `knicks` NYK, `sixers` PHI, `suns` PHX, `blazers` POR, `sacramento-kings` SAC, `utah-jazz` UTA.

**NHL (28 keep, High):** `sharks` SJS, `bruins` BOS, `blackhawks` CHI, `blue-jackets` CBJ, `dallas-stars` DAL, `avalanche` COL, `red-wings` DET, `oilers` EDM, `golden-knights` VGK, `ducks` ANA, `kings` LAK, `panthers` FLA, `wild` MIN, `canadiens` MTL, `predators` NSH, `devils` NJD, `islanders` NYI, `ny-rangers` NYR, `ottawa-senators` OTT, `flyers` PHI, `penguins` PIT, `hurricanes` CAR, `utah-mammoth` UTA, `kraken` SEA, `blues` STL, `maple-leafs` TOR, `vancouver-canucks` VAN, `capitals` WSH.

**MLS (21 keep, High, all match the [broadcast tricode list](https://www.atlutd.com/club/atlutd-style-guide/section-2)):** `atlanta-united` ATL, `austin-fc` ATX, `earthquakes` SJ, `revolution` NE, `chicago-fire` CHI, `columbus-crew` CLB, `fc-dallas` DAL, `rapids` COL, `dynamo` HOU, `sporting-kc` SKC, `lafc` LAFC, `inter-miami-cf` MIA, `cf-montreal` MTL, `nycfc` NYC, `philadelphia-union` PHI, `real-salt-lake` RSL, `san-diego-fc` SD, `sounders` SEA, `st-louis-city-sc` STL, `vancouver-whitecaps` VAN, `dc-united` DC.

**WNBA (9 keep):** `dream` ATL, `valkyries` GSV (Medium; one data feed shows VAL, WNBA.com GSV), `sky` CHI, `wings` DAL, `aces` LVA, `sparks` LAS, `lynx` MIN, `liberty` NYL, `houston-comets` HOU (**provisional**: the Sun play the 2026 season in Connecticut and become the Houston Comets in 2027; no code published yet).

**NWSL (8 keep, High, ESPN):** `bay-fc` BAY, `chicago-stars` CHI, `denver-summit-fc` DEN, `dash` HOU, `gotham` GFC, `nc-courage` NC, `wave` SD, `reign` SEA.

**PWHL (7 keep):** `boston-fleet` BOS, `minnesota-frost` MIN, `victoire` MTL, `ny-sirens` NY, `seattle-torrent` SEA, `vancouver-goldeneyes` VAN (all Medium-High), `pwhl-san-jose` SJ (**provisional**, Low; shares SJ with the Barracuda, also hockey).

**CFL (3 keep, High):** `elks` EDM, `alouettes` MTL, `bc-lions` BC.

**NLL (3 keep, High):** `colorado-mammoth` COL, `philadelphia-wings` PHI, `vancouver-warriors` VAN.

**AHL (6 keep, Medium):** `san-jose-barracuda` SJ, `chicago-wolves` CHI, `henderson-silver-knights` HSK, `milwaukee-admirals` MIL, `laval-rocket` LAV, `san-diego-gulls` SD.

**Junior hockey (keep, Low, flag):** `oil-kings` EDM (WHL), `seattle-thunderbirds` SEA, `everett-silvertips` EVT, `vancouver-giants` VAN, `brampton-steelheads` BST (team moved from Mississauga; OHL code not verified), `sherwood-park-crusaders` SPC, `spruce-grove-saints` SGS (BCHL; codes not verified).

**Minor-league baseball (keep, Medium-low unless noted):** `gwinnett-stripers` GWN, `round-rock-express` RR, `space-cowboys` SUG, `indianapolis-indians` IND, `st-paul-saints` STP, `sounds` NAS, `durham-bulls` DUR, `tacoma-rainiers` TAC, `salt-lake-bees` SLC (flag: MiLB may show SL), `frisco-roughriders` FRI, `chesapeake-baysox` BAY (flag: renamed from Bowie in 2025; MiLB code not verified), `wilmington-blue-rocks` WIL, `lake-county-captains` CAP (flag: MiLB may show LC), `brooklyn-cyclones` BKN (flag: MiLB may show BRK), `hillsboro-hops` HOP (flag), `everett-aquasox` EVE, `vancouver-canadians` VAN, `clearwater-threshers` CLW (flag: MiLB may show CLR), `dunedin-blue-jays` DUN, `tampa-tarpons` TAR (flag).

**NBA G League (12 keep, Low, flag all):** `austin-spurs` AUS, `windy-city-bulls` WCB, `cleveland-charge` CHG, `texas-legends` TEX, `motor-city-cruise` MC, `laketown-squadron` LKT, `capitanes` CAP (possibly MXC on the G League site), `valley-suns` VAL, `rip-city-remix` REM, `salt-lake-city-stars` SLC, `raptors-905` 905, `capital-city-go-go` CCG. Check each on [gleague.nba.com](https://gleague.nba.com/).

**Liga MX (keep):** `club-america` AME (Medium), `cruz-azul` CAZ (Medium), `pumas-unam` UNAM (Low, flag: league graphics may show PUM), `atlante` ATL (Low, flag: Atlante returned to Liga MX for Apertura 2026 by buying Mazatlán's spot, and Atlas also plays in Liga MX, so check which club holds ATL).

**ONEFA (keep, Low):** `aguilas-blancas` AGB, `burros-blancos` BUB.

**Second-tier and other pro (keep, Low; codes not published that I could verify, check the league site):** MLS Next Pro `austin-fc-ii` ATX2, `columbus-crew-2` C2, `sporting-kc-ii` SK2, `mnufc2` MNU2, `real-monarchs` RSL (flag: shares parent's code), `st-louis-city2` STL2, `whitecaps-fc-2` WFC2; USL Championship `oakland-roots` OAK, `detroit-city-fc` DCFC, `indy-eleven` ELE (flag: likely IND), `las-vegas-lights` LVL (flag: likely LV), `miami-fc` MFC, `phoenix-rising` RIS (flag: likely PHX), `riverhounds` PIT, `sacramento-republic` REP (flag: likely SAC), `san-antonio-fc` SAFC, `rowdies` ROW (flag: likely TB), `loudoun-united` LOU (flag); USL Super League `dallas-trinity` DAL, `fort-lauderdale-united` FTL, `tampa-bay-sun` SUN; Northern Super League `vancouver-rise` RISE, `afc-toronto` AFC, `ottawa-rapid-fc` RFC; CPL `atletico-ottawa` ATO, `inter-toronto` INT, `vancouver-fc` VFC; CEBL `edmonton-stingers` EDM, `ottawa-blackjacks` OBJ, `brampton-honey-badgers` BHB, `vancouver-bandits` VAN; UFL `columbus-aviators` AVI, `dallas-renegades` DAL, `st-louis-battlehawks` STL; IFL/arena `vegas-knight-hawks` VKH, `arizona-rattlers` RAT, `fishers-freight` FR8, `las-vegas-rockers` RCK; MASL/MLIS `kc-comets` KCO, `milwaukee-wave` MIL, `st-louis-ambush` AMB, `cleveland-crunch` CRN; volleyball `lovb-austin` LOVB and `lovb-minnesota` LOVB (flag: "LOVB" is the league, both teams share it; likely city codes), `columbus-fury` FURY, `indy-ignite` IGN, `minnesota-forge` FOR; softball `texas-volts` VOL, `portland-cascade` CAS; PBR `austin-gamblers` GAM, `kc-outlaws` OUT, `arizona-ridge-riders` ARR; PLL `boston-cannons` CAN (flag: PLL may now show BOS); independent and summer baseball `kc-monarchs` KCM, `lake-country-dockhounds` LC, `milwaukee-milkmen` MIL, `chicago-dogs` CHI, `schaumburg-boomers` SCH, `lake-erie-crushers` LEC, `wild-things` WIL, `gateway-grizzlies` GRZ, `ottawa-titans` TIT, `long-island-ducks` LI, `staten-island-ferryhawks` SI, `lakeshore-chinooks` LS, `ofallon-hoots` HOO; amateur and women's soccer `austin-rise` RISE, `minnesota-aurora` AUR, `new-orleans-jesters` JES, `milwaukee-torrent-men` MIL, `milwaukee-torrent-women` MIL, `nashville-vibe` VIBE; WCL `edmonton-riverhawks` EDM.

**College (keep):**

| Metro | Rows kept | Code | Confidence / note |
|---|---|---|---|
| Atlanta | `gt-football`, `gt-mbb`, `gt-wbb` | GT | High |
| Austin | `texas-baseball`, `texas-football`, `texas-mbb`, `texas-soccer`, `texas-softball`, `texas-volleyball`, `texas-wbb` | TEX | High |
| Austin | `texas-state-football`, `texas-state-mbb`, `texas-state-wbb` | TXST | High |
| Bay Area | `cal-football`, `cal-mbb`, `cal-wbb` | CAL | High |
| Bay Area | `sjsu-football`, `sjsu-mbb`, `sjsu-wbb` | SJSU | High |
| Bay Area | `stanford-football`, `stanford-mbb`, `stanford-wbb` | STAN | High |
| Boston | `bc-football`, `bc-mbb`, `bc-wbb` | BC | High |
| Boston | `bu-mbb`, `bu-wbb` | BU | Medium |
| Boston | `northeastern-mbb` | NEU | Low, flag: ESPN may show NE |
| Boston | `uml-mbb`, `uml-wbb` | UML | Medium |
| Chicago | `northwestern-football`, `northwestern-mbb`, `northwestern-wbb` | NU | Medium |
| Chicago | `depaul-mbb`, `depaul-wbb` | DEP | High |
| Chicago | `uic-mbb` | UIC | High (checked) |
| Columbus | `osu-football`, `osu-mbb`, `osu-mhockey`, `osu-wbb` | OSU | High |
| Columbus | `owu-football`, `owu-mbb` | OWU | Low (Division III; school shorthand) |
| Dallas–Fort Worth | `unt-football`, `unt-mbb` | UNT | High |
| Dallas–Fort Worth | `smu-football`, `smu-mbb`, `smu-wbb` | SMU | High |
| Dallas–Fort Worth | `tcu-football`, `tcu-mbb`, `tcu-wbb` | TCU | High |
| Dallas–Fort Worth | `uta-mbb` | UTA | Medium |
| Denver | `du-mbb`, `du-mhockey`, `du-wbb` | DU | Medium, flag: ESPN shows DEN (checked); school and fans say DU |
| Detroit | `michigan-football`, `michigan-mbb`, `michigan-mhockey`, `michigan-wbb` | MICH | High |
| Detroit | `detroit-mercy-mbb` | UDM | Low, flag: ESPN may show DET |
| Houston | `rice-baseball`, `rice-football`, `rice-mbb`, `rice-wbb` | RICE | High |
| Indianapolis | `butler-football`, `butler-mbb`, `butler-wbb` | BUT | High |
| Indianapolis | `uindy-football` | UINDY | Low, **5 characters**; Division II, school brand "UIndy". Trim only if the badge can't fit it. |
| Las Vegas | `unlv-football`, `unlv-mbb`, `unlv-wbb` | UNLV | High |
| Los Angeles | `ucla-baseball`, `ucla-football`, `ucla-mbb`, `ucla-mvb`, `ucla-wbb`, `ucla-wvb` | UCLA | High |
| Los Angeles | `usc-baseball`, `usc-football`, `usc-mbb`, `usc-wbb`, `usc-wvb` | USC | High |
| Miami | `fiu-football`, `fiu-mbb` | FIU | High |
| Milwaukee | `marquette-mbb`, `marquette-volleyball`, `marquette-wbb` | MARQ | High |
| Minneapolis–St. Paul | `gophers-football`, `gophers-mbb`, `gophers-hockey`, `gophers-volleyball`, `gophers-wbb`, `gophers-whockey` | MINN | High |
| Minneapolis–St. Paul | `st-thomas-mbb`, `st-thomas-hockey`, `st-thomas-wbb`, `st-thomas-whockey` | UST | Low, flag: ESPN shows STMN (checked); local shorthand is UST |
| Nashville | `mtsu-football`, `mtsu-mbb`, `mtsu-wbb` | MTSU | High |
| Nashville | `vanderbilt-football`, `vanderbilt-mbb`, `vanderbilt-wbb` | VAN | Medium |
| Nashville | `belmont-mbb`, `belmont-wbb` | BEL | Medium |
| Nashville | `lipscomb-mbb`, `lipscomb-wbb` | LIP | Medium |
| New Orleans | `lsuno-baseball`, `lsuno-mbb`, `lsuno-wbb` | UNO | Medium; school renamed LSU New Orleans (not verified this session) |
| New York | `fordham-football` | FOR | Medium |
| New York | `stony-brook-football` | STBK | Medium |
| New York | `seton-hall-mbb` | HALL | High |
| New York | `stjohns-mbb` | SJU | High |
| Philadelphia | `penn-football`, `penn-mbb`, `penn-wbb` | PENN | High |
| Philadelphia | `temple-football`, `temple-mbb`, `temple-wbb` | TEM | High |
| Philadelphia | `villanova-football`, `villanova-mbb`, `villanova-wbb` | NOVA | Medium, flag: ESPN shows VILL; "Nova" is the school's own and fans' shorthand |
| Phoenix | `asu-baseball`, `asu-football`, `asu-hockey`, `asu-mbb`, `asu-wbb` | ASU | High |
| Phoenix | `gcu-mbb`, `gcu-wbb` | GCU | High |
| Pittsburgh | `duquesne-football`, `duquesne-mbb`, `duquesne-wbb` | DUQ | High |
| Pittsburgh | `pitt-football`, `pitt-mbb`, `pitt-wbb` | PITT | High |
| Pittsburgh | `robert-morris-football`, `robert-morris-mbb`, `robert-morris-wbb` | RMU | High |
| Portland | `up-pilots-mbb` | UP | Low, flag: ESPN may show PORT |
| Raleigh–Durham | `duke-football`, `duke-mbb`, `duke-wbb` | DUKE | High |
| Raleigh–Durham | `unc-football`, `unc-mbb`, `unc-wbb` | UNC | High |
| Raleigh–Durham | `nccu-football`, `nccu-mbb`, `nccu-wbb` | NCCU | Medium |
| Sacramento | `sac-city-football` | SCC | Low (community college) |
| Salt Lake City | `utah-utes-football`, `utah-mbb`, `utah-wbb` | UTAH | High |
| San Antonio | `uiw-football`, `uiw-mbb`, `uiw-wbb` | UIW | Medium |
| San Antonio | `utsa-football`, `utsa-mbb`, `utsa-wbb` | UTSA | High |
| San Diego | `sdsu-football`, `sdsu-mbb`, `sdsu-wbb` | SDSU | High |
| St. Louis | `lindenwood-football`, `lindenwood-mbb`, `lindenwood-wbb` | LIN | Medium |
| St. Louis | `slu-mbb`, `slu-wbb` | SLU | High |
| St. Louis | `siue-mbb`, `siue-wbb` | SIUE | High |
| Tampa Bay | `usf-football`, `usf-mbb`, `usf-wbb` | USF | High |
| Washington, DC | `howard-football` HOW, `maryland-football`/`maryland-mbb`/`maryland-wbb` MD, `gmu-mbb` GMU, `gw-mbb` GW, `georgetown-mbb` GTWN | as listed | High |

**U Sports (keep, Low unless noted):** `ubc-football`, `ubc-hockey`, `ubc-mbb`, `ubc-soccer`, `ubc-wbb` UBC (High); `ualberta-mbb`, `ualberta-football`, `ualberta-hockey` UAB (flag: Canada West code not verified; UAB is also Alabama-Birmingham in the US); `carleton-ravens-mbb`, `carleton-ravens-football` CAR (flag); `tmu-bold` TMU (Medium); `carabins-football` UdeM (keep; note it is mixed case, so show "UDEM" if the badge uppercases).

**Codes over 4 characters:** only `UINDY` today. No recommendation here exceeds 4.

---

## Part 3. Edge cases

**Shared nicknames, each team's own code:**

| Nickname | Team → code |
|---|---|
| Giants | San Francisco (MLB) SF · New York (NFL) NYG · Vancouver (WHL) VAN |
| Kings | Los Angeles (NHL) LAK · Sacramento (NBA) SAC |
| Rangers | Texas (MLB) TEX · New York (NHL) NYR |
| Cardinals | St. Louis (MLB) STL · Arizona (NFL) ARI · Incarnate Word (college) UIW |
| Panthers | Florida (NHL) FLA · Georgia State GAST · FIU · Pitt PITT · Milwaukee MILW · Prairie View PV · Sacramento City SCC |
| Jets | New York (NFL) NYJ · Winnipeg (NHL) WPG |
| Clippers | LA (NBA) LAC · Columbus (Triple-A) COL |
| Stars | Dallas (NHL) DAL · Texas (AHL) TEX · Chicago (NWSL) CHI · Salt Lake City (G League) SLC |
| Mammoth | Utah (NHL) UTA · Colorado (NLL) COL |
| Aviators | Las Vegas (Triple-A) LV · Columbus (UFL) AVI |

**Same code, same sport icon** (allowed by your rule, but worth knowing because only colors separate them): San Diego FC and San Diego Wave (both soccer, SD); LA Galaxy and Angel City if you take LA (both soccer); San Jose Barracuda and PWHL San Jose (both hockey, SJ); Wilmington Blue Rocks and Washington Wild Things (both baseball, WIL); Milwaukee Torrent men and women (MIL).

**College: one code per school, or per sport?** One per school. ESPN uses the same abbreviation for a school in every sport, and so do conference sites. The app breaks this only for Sacramento State, UC Davis and Toronto Varsity Blues (and York), which Part 2 fixes.

**Canada and Mexico:** French broadcasts (RDS, TVA) use the same `MTL` for the Canadiens, Alouettes, CF Montréal and Victoire, so no French code is needed. Université de Montréal's own shorthand "UdeM" is French and is what fans use. Liga MX uses 3-letter Spanish-derived club codes (`AME`, `CAZ`); Femenil teams carry the club code. Mexico City's LMB club is `MEX` (memory).

**Recent moves and renames (current code):**

- Utah's NHL team is the **Utah Mammoth**, `UTA` on NHL.com (ESPN: UTAH).
- The **Athletics** play in West Sacramento as "Athletics" with `ATH` on MLB.com.
- **Connecticut Sun → Houston Comets** in 2027; sale and move approved ([Hartford Business](https://hartfordbusiness.com/article/its-official-wnba-approves-ct-sun-relocation-to-houston/)). No code published yet; `HOU` is provisional. The 2026 games were still the Sun in Connecticut.
- **PWHL** adds Detroit, Hamilton, Las Vegas and San Jose for 2026–27; season opens Dec 5 ([The Ice Garden](https://www.theixsports.com/the-ice-garden/pwhl/pwhl-2026-27-schedule-conference-alignments-playoff-format/)). Names and codes still pending.
- **Atlante** is back in Liga MX from Apertura 2026 ([TV Azteca](https://www.tvazteca.com/aztecadeportes/atlante-fc-vuelve-a-la-primera-division-la-mano-caliente-mx-en-el-apertura-2026-la/)).
- **Boston Legacy FC** and **Denver Summit FC** joined the NWSL in 2026 (BOS, DEN on ESPN).
- **Toronto Tempo** and **Portland Fire** joined the WNBA in 2026 (TOR, POR).
- New York's MLS club now appears as **Red Bull New York** on MLS and ESPN pages.

**League-label issues spotted in the list** (not codes, but worth fixing): Ottawa Rapid FC is labeled "USL Super League" but plays in the Northern Super League; "League One Volleyball" and "LOVB Pro", "MLV" and "Major League Volleyball", "MLS Next Pro" and "MLS NEXT Pro", "PBR" and "PBR Teams", "Triple-A" and "Triple-A baseball", "MiLB" and "Texas League" are each the same league under two labels.

---

## Self-audit

**What was checked live this session:** MLS broadcast tricodes (Atlanta United style guide), NWSL codes on ESPN, NLL codes on ESPN, WNBA codes on a data feed, ESPN college codes for Kennesaw State, Georgia State, Milwaukee, Cleveland State, St. Thomas, Denver and UIC, and the news for the Houston Comets, PWHL expansion and Atlante.

**From memory (not re-fetched; league sites render with JavaScript):** every NFL, MLB, NBA, NHL, CFL and PWHL (original 8) code; most college codes in Part 2 marked "memory"; all AHL, ECHL, junior hockey and MiLB codes.

**Rows Kylie should check by hand:**

| Rows | What to check | Where |
|---|---|---|
| `washington` (NFL), `wizards` | WAS vs WSH on the league site and a game broadcast | [NFL.com](https://www.nfl.com/teams/), [NBA.com](https://www.nba.com/teams) |
| `lightning` | Whether you want NHL.com style (TBL, LAK, SJS, NJD) or ESPN style (TB, LA, SJ, NJ) | [NHL.com](https://www.nhl.com/) |
| `diamondbacks` | AZ on MLB.com vs ARI on ESPN | [MLB.com](https://www.mlb.com/dbacks) |
| `mercury`, `valkyries` | PHO/GSV on WNBA.com | [WNBA.com](https://www.wnba.com/) |
| `red-bulls`, `angel-city`, `kc-current` | Broadcast code vs club shorthand (NY vs RBNY, LA vs ACFC, KC vs KCC) | [MLS tricodes](https://www.atlutd.com/club/atlutd-style-guide/section-2), [ESPN NWSL](https://espn.com/soccer/team?id=15364) |
| `pwhl-detroit`, `pwhl-las-vegas`, `pwhl-san-jose`, `ottawa-charge`, `sceptres` | Codes once names are announced (before Nov 18) | [thepwhl.com](https://www.thepwhl.com/) |
| `houston-comets` | Code once branding is revealed later in 2026 | [WNBA.com](https://www.wnba.com/) |
| `pumas-unam`, `pumas-femenil`, `atlante` | PUM vs UNAM; whether Atlante or Atlas holds ATL | [ligamx.net](https://ligamx.net/) |
| `iu-indy-mbb`, `iu-indy-wbb` | ESPN's abbreviation (left blank) | ESPN team page (search "IU Indianapolis Jaguars ESPN") |
| `du-*`, `st-thomas-*`, `villanova-*`, `detroit-mercy-mbb`, `up-pilots-mbb`, `northeastern-mbb` | Keep school shorthand or switch to ESPN's (DEN, STMN, VILL, DET, PORT, NE) | ESPN team pages; [Denver on ESPN](https://africa.espn.com/mens-college-basketball/playbyplay/_/gameId/401470232) |
| `uh-*`, `nc-state-*`, `tulane-*`, `psu-*`, `columbia-football`, `harvard-football`, `chicago-state-mbb`, `pvamu-football`, `texas-southern-football`, `tsu-*`, `delaware-*`, `miami-hurricanes-*`, `uw-*`, `sac-state-*`, `uc-davis-*`, `rutgers`, `bowling-green` | ESPN codes taken from memory | ESPN team page for each school |
| `cleveland-state-*` | CLE (ESPN) vs CLEV (score sites) | [ESPN game](https://africa.espn.com/mens-college-basketball/video/_/gameId/401714400) |
| AHL, ECHL, WHL, OHL, QMJHL rows | City codes from memory | [theahl.com](https://theahl.com/), [echl.com](https://www.echl.com/), [chl.ca](https://chl.ca/) |
| MiLB rows (`las-vegas-aviators`, `columbus-clippers`, `river-cats`, `san-antonio-missions`, `salt-lake-bees`, `lake-county-captains`, `brooklyn-cyclones`, `clearwater-threshers`, `chesapeake-baysox`, `hillsboro-hops`, `tampa-tarpons`) | MiLB scoreboard codes | [milb.com scores](https://www.milb.com/scores) |
| All G League rows | Tricodes | [gleague.nba.com](https://gleague.nba.com/) |
| USL Championship rows marked "likely" | City codes | [uslchampionship.com](https://www.uslchampionship.com/) |
| U Sports rows (Alberta, Carleton, Varsity Blues, York) | Conference codes | [canadawest.org](https://canadawest.org/), [oua.ca](https://oua.ca/) |
| `lovb-austin`, `lovb-minnesota` | Team codes (both currently "LOVB") | [lovb.com](https://www.lovb.com/) |
| `boston-cannons` | CAN vs BOS on PLL broadcasts | [premierlacrosseleague.com](https://premierlacrosseleague.com/) |
| `brampton-steelheads`, `inter-toronto`, `lsuno-*` | Recent renames/moves I could not confirm this session | OHL, CPL and school sites |

**Thin-evidence claims:** that national NFL scorebugs show WAS; that NBA- and NHL-produced graphics follow league tricodes rather than ESPN's short forms; Liga MX club codes; every "likely" code in the second-tier list.
