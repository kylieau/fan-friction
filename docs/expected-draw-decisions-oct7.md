# Expected draw: Kylie's decisions (Oct 7, 2026)

On the two research answers: `docs/archive/research/expected-draw-sports-research-answer.md` and `docs/archive/research/expected-draw-concerts-research-answer.md`. Every line below marked "Kylie, Oct 7" is her answer in the Oct 7 Claude Code session. A line without her name is Claude's proposal.

## Order
- **Expected draw goes before Montreal** (Kylie, Oct 7).

## Sports locks (Kylie, Oct 7; she took each recommendation)
| # | Question | Locked answer |
|---|---|---|
| S1 | Does an estimate decide whether a game feeds friction? | **Yes, by the low end of its range** (≥ 5,000). Today capacity decides. |
| S2 | College and NFL count tickets distributed, not bodies | **A footnote only.** No invented discount. |
| S3 | History window | **3 seasons for every league in v1.** Shorten for women's leagues only if the check shows them reading low. |
| S4 | Show the range? | **The number on cards, the range in the detail view.** |
| S5 | After the announced crowd lands, keep the estimate? | **Yes, in the detail view only.** |

## Concert locks (Kylie, Oct 7; she took each recommendation)
| # | Question | Locked answer |
|---|---|---|
| C1 | Does the 5,000 gate read the estimate or the capacity? | **The estimate, as for sports**, but not switched until venue averages (rung 4) exist for the covered rooms. |
| C2 | An unknown show: the global default ratio, or blank? | **The default, labeled.** |
| C3 | Per-day averaging | **Only for totals known to be person-days.** A total of unclear type is a cap or not sized. Recheck NY Comic Con's 250,000+ (it may be unique attendees, which would make ~62,500 a day too low). |
| C4 | Boxscore tickets as a reported crowd | **Yes, labeled "reported tickets".** |
| C5 | Run-of-nights bump | **Out of v1.** |

## Kylie's comments on the sports rule (Oct 7) — answered, awaiting her OK
She disagreed with leaving out **promotions, standings, star players and resale prices**, and with limiting the opponent effect to "deep history": recent tension (bad blood over the last couple of seasons) matters, and is not deep history.

Claude's proposal in reply (not locked):
- **Every factor she named becomes a candidate, measured from each team's own announced crowds and kept only if it beats the version without it on held-out games**, per league. Same gate for all of them (her Oct 6 rule: attendance on held-out dates is the only accuracy target).
- **Promotions:** MLB's free schedule feed carries each game's promotions, past games included (checked Oct 7: Dodgers, Jun 2, 2025, "Tommy Edman Bobblehead"). Measured per team, weekday and weekend apart. Other leagues publish promotions only on team sites; parked.
- **Standings:** allowed by her results rule (standings going in count). MLB serves standings by date (checked Oct 7); other leagues' records going in can be computed from past schedules. Candidates: home win share going in, and "in the race" late in the season.
- **Star players:** an objective definition only: a visiting player named an All-Star (WNBA/NBA/NHL/MLB) the season before. No hand-picked stars.
- **Opponent:** "deep history" meant a minimum count of past games, not a long span. Proposed instead: last 2–3 seasons only, newest weighted most, at least 2 past home games; plus objective tension flags that need no history (same division, met in the playoffs within 2 seasons, same metro). Sellout teams get the effect and then the building cap, rather than skipping it.
- **Resale prices:** the strongest forward signal and the hardest to use. No free history, so it can't be tested yet. SeatGeek's API needs a free key and its terms must be checked first. Proposed: record prices a day ahead in the nightly job for a season, then test. Not in the number until it passes.

## Kylie's second round (Oct 7)
- **Promotions: yes, every league, not MLB only** (Kylie, Oct 7). They are all public; MLB is first only because its feed already carries them.
- **Standings: yes, weighted toward the end of the season**; last season matters sometimes (a reigning champion, "something happened") (Kylie, Oct 7). She suggests social media attention as a way to see it.
- **Stars: "All-Star last season" is not enough** (Kylie, Oct 7). Look at published lists: fantasy rankings, max contracts, notable players.
- **Resale prices: agreed** (Kylie, Oct 7). Capture a week before and on the day.
- **Opponent: recent tension and deep history both matter** (Kylie, Oct 7), e.g. Dodgers–Yankees: storied, but rarely in Los Angeles.
- She asked whether this deserves a deeper research prompt. Drafted: `docs/archive/research/expected-draw-demand-signals-prompt.md`.

## The held-out check, first runs (Oct 7)
`scripts/expected-draw-check.mjs` writes `docs/expected-draw-check.md`: each team's last two seasons predicted from earlier seasons only, against the announced crowds. Constants set before the first run.
- **Expected draws beat the building:** half of all games within 5.2% (full rule) against 9.2% sizing by capacity.
- **Decided from the first run (structural switches the research proposed, not constants):** the conference-move reset is **off** (it left UCLA/USC/UW's first Big Ten season with no history and made college worse); the **2-season window applies to the WNBA and women's college basketball**, per S3, because both read ~30% low on three seasons. The NWSL and MLS also scored better on two seasons but were not reading low, so they keep three (Kylie to say if she wants them shortened).
- **Season level** beats the baseline in MLB, MLS, NWSL, WNBA, NBA and NHL. **Opponent ratio** beats it in MLB, MLS, NFL, WNBA and men's college basketball; it is worse in the NBA, NHL, NWSL and women's college basketball (crowds near capacity, or too few meetings). Both are in the check only; the app uses them only in the leagues where they win.
- **The 5,000 line by the low end (S1)** is right more often overall (96.3% vs 94.9%), much better for women's college basketball (70% vs 30%), and worse for the NWSL (78% vs 99%) — Gotham's crowds doubled from 2022 to 2024, so a backtest from the earlier seasons reads low. Today's Gotham range (2023–2025) has a low end of ~6,000.
- **The same seasons were used to decide and to score,** so these numbers flatter the rule a little. The honest test is the forward log: estimates saved before each game, scored when the crowd is announced.
- **MLB promotions and standings, first run (Oct 7): neither beats the rule without them.** Promotions (per team, giveaway / fireworks / ticket offer, weekday and weekend apart): 6.6% → 6.8% median off. Standings (home record going in, slopes fit on earlier seasons, before Aug 1 and after): → 7.3%. Likely why: the day-and-month baseline already carries when teams schedule giveaways, and the season level already carries how good the team is this year. Both stay off. They are not re-tuned to pass; a different shape (e.g. bobbleheads only, the playoff race by games back) comes from `docs/archive/research/expected-draw-demand-signals-prompt.md`, set before it is run. The data is on file: every MLB home game since 2022 carries its promotions and the record going in.
- **Not wired into the app yet: the season level and the opponent ratio.** They win in the check, but the app would need this season's crowds and each opponent's history at read time, which means the nightly job recomputing the draws. That touches the shared nightly pipeline, so it is a proposal first.

## Kylie's answers on the follow-ups (Oct 7)
- **Season level and opponent ratio go into the app**, in the leagues where the check showed them winning (Kylie, Oct 7).
- **The NWSL and MLS also use a 2-season window** (Kylie, Oct 7), alongside the WNBA and women's college basketball.
- **Map cards show the expected draw** (Kylie, Oct 7), approved as a Map change.
- **A team's estimate may sit above the listed seats when its announced crowds do** (Kylie, Oct 7; the Lakers announce 18,997 against 18,910 seats).
- She ran `supabase/migrations/0009_expected_draws_by_venue.sql` (Oct 7).

## Round 2: promotions by kind and top teams (pre-registered Oct 7, before the run)
Kylie, Oct 7: specific promos spike crowds (Hello Kitty, anime, Ohtani bobbleheads, World Series items, franchise players, crossovers), and standings matter for top teams, home and visiting, over longer stretches, not across the board. She approved this round. A quick look (not the test) agreed: Mariners Hello Kitty Night +30%, Judge MVP bobblehead +21%, Ohtani bobbleheads +14–15%, Naruto Night +13%. The first run missed it because it lumped every giveaway together, scored only across all games (two dozen big nights can't move a median of 977), and full buildings cap the lift.

Written down before the run. MLB only (its feed lists promotions); every source is MLB's free feed.

**Promotions, by kind** (matched on MLB's promotion name; a game takes every kind it matches):
- *crossover*: hello kitty, sanrio, anime, naruto, one piece, dragon ball, pokémon, star wars, marvel, disney, peanuts/snoopy, sesame, mario/nintendo, jujutsu, demon slayer, my hero, attack on titan, gundam, sailor moon, squishmallow, care bears, barbie, transformers, harry potter, lego.
- *star*: a giveaway naming, in full, a player who was an All-Star or MVP the season before (MLB's award lists).
- *special ticket*: "special event ticket", "ticket required", "theme ticket", "ticket package".
- *championship*: world series, champion, ring, trophy.
- *fireworks*, *other giveaway*, *discount* (a ticket offer).
- Each kind's lift is pooled across the six MLB teams on file, from earlier seasons only: median log(announced ÷ baseline) on its games minus the same on games with no promotion, shrunk n ÷ (n + 3).
- **A repeat of the same promotion** (same name once numbers like "#2", "Part 2" and years are removed) at the same team uses its own earlier lift instead, shrunk n ÷ (n + 1).

**Top teams:**
- *Home top team* / *visiting top team*: in the top 3 of its league (AL or NL) by record going in, once 30 games are played; before that, top 3 of its league at the end of last season.
- *Reigning champion*, home or visiting: won last season's World Series.
- Each flag's lift is pooled across MLB teams from earlier seasons, the same way as promotions (shrunk n ÷ (n + 3)).

**Scored** against the app's current rule (baseline + season level + opponent ratio): overall, and on the games each flag touches. A kind or flag stays only if it improves the games it touches without making MLB worse overall.

### Round 2 results (Oct 7)
- **A data gap found first:** MLB's feed lists promotions only from 2025 (2022–2024 games show none). Those seasons were being counted as "no promotion", which washed every lift out. Fixed by treating them as unknown; the definitions were not changed. It also means promotion lifts for 2026 are learned from 2025 alone, and 2025 can't be tested at all.
- **Each kind on its own, as pre-registered:** only **special-ticket nights** pass (their games 15.6% → 14.3% median off; all MLB 6.6% → 6.5%). Crossover, star, championship, fireworks, discount, other giveaways, repeat promotions and all four top-team flags do not.
- **A correction to the quick look shown to Kylie:** that table listed the top promo nights sorted by lift, so it showed the spikes and not the typical night. Its own summary lines said so: Hello Kitty / anime nights had a median lift of +5% (13 games), Ohtani items +0% (7), bobbleheads +1% (59). The big nights are real (Mariners Hello Kitty +30%), but a promotion's kind doesn't predict which nights spike, and many top nights (Dodgers, Padres) are already near full.
- **Top teams:** no flag passes. The season level (the home team's crowds this season) and the opponent ratio (how a visitor has drawn here) already carry most of it.
- **Next:** special-ticket nights go into the app when MLB listings carry promotions (the season starts in March, so nothing changes before then). Rerun the rest after the 2026 promotions are a full training season, i.e. when 2027 can be predicted.

## Kylie's answers, third round (Oct 7)
- **Season level and opponent ratio apply in every league** (Kylie, Oct 7): no league-wide gain in the last two or three seasons does not rule out an effect for one team or one visitor. The check's "app" column now equals the full rule. Cost the check shows: NBA 0.6% → 1.0% median off, NHL 1.6% → 2.1%, NWSL 15.1% → 19.5%; MLB, MLS, NFL, WNBA and men's college basketball gain.
- **No "Adjusted for this opponent" on the event page** (Kylie, Oct 7). How estimates are made is explained once, behind an (i) beside the figure, for all estimates, not per event. The per-event basis sentence comes off the page too; the range stays (S4).
- **Nightly job load:** she asked whether it is overloaded. Measured Oct 7: the whole run takes about 3 minutes; the new calibration step takes half a second. The calibration step is now allowed to fail without losing the night's snapshot.
- **Promotion history:** she will research past promotional schedules herself. Prompt: `docs/archive/research/promo-history-research-prompt.md`.
- **Concerts: the 57% default is approved** (Kylie, Oct 7), and the (i) should say so. **Every estimated number gets the same (i)** (Kylie, Oct 7).
- **City order after this work** (Kylie, Oct 7): **Atlanta, Bay Area, Chicago, Dallas–Fort Worth, Montreal.** Montreal moves from next to fifth.

## Atlanta build (Kylie, Oct 7): recommendations approved
- Boundary: the 11-county core, as researched. City type **driving**. Neutral-site football at Mercedes-Benz Stadium is hand-listed (`listings2026.ts`); festival parks and the Georgia World Congress Center are not venue rows (events sized by their own crowds); Dragon Con is not sized (passes, not person-days); Dream games at Gateway Center (3,500) are under the floor.
- The tester's Canadiens night (May 25, 2026) is hand-seeded when Montreal is built, not before (Kylie, Oct 7).
- Concert-sizing gaps and the distance discount: both approved to proceed; the discount as a proposal first.

### Round 2, rerun with Kylie's promotion research (Oct 7)
`docs/promo-history-rows.csv` (971 rows, her research) is folded into the six MLB teams' attendance files for 2021–2024 by `scripts/promo-history-fold.mjs`, so the check now learns promotion lifts from four seasons instead of one. Same pre-registered definitions, same scoring. **The result flipped:**
- **Crossover nights pass** (Hello Kitty, Star Wars, anime, Peanuts…): their games 7.0% → 6.5% median off, all MLB 6.6% → 6.5%.
- **Star-player giveaways pass** (an item naming an All-Star or MVP of the season before): 4.9% → 4.2% on their games, MLB unchanged.
- **Special-ticket nights no longer pass** (15.6% → 16.4%); with one season they had, which was the small-sample flattery the first run warned about.
- Championship items, fireworks, discounts, other giveaways, repeat promotions and all four top-team flags still do not pass.
- Caveat the research itself gives: several team-seasons are partial (Angels 2022, Padres 2021, the 2021 seasons generally), so some real promo nights sit in the "no promotion" pile and dilute every lift. The 2021 rows have no attendance file to land on (the files start at 2022).
- **Next:** crossover and star-player lifts go into the app's MLB estimate when the 2027 listings carry promotions (MLB's feed names them); special-ticket nights do not, pending another season.

## Kylie's answers, fourth round (Oct 7)
- **Shows:** a venue with **no sports setup** in the table is a performance room and reads at **full capacity**; arenas and stadiums with a sports setup keep **57%** for concerts. A **published average per show** beats both, wherever one exists. (Kylie, Oct 7.)
- **Small non-concert listings** (Arts & Theatre / Miscellaneous in rooms under ~6,000) sit **under the floor unless a source says sold out** or otherwise signals a big crowd. (Kylie, Oct 7.)
- **A team's full schedule, home and away:** one schedule record per team from the feeds we already use; where a game is a home game in a covered city it points at the existing event, never a second copy. Team pages show **results for past games and the upcoming schedule**. A favorite with no feed (an artist; a program not yet wired) shows "No schedule yet" for now; the intent is to cover every city and feed eventually. UCLA men's and women's basketball and football are already in the feeds and should get schedules first (the season is on). (Kylie, Oct 7.)
- **Distance discount** after the Bay Area build (Kylie, Oct 7).

### Fourth round, built (Oct 7)
- **Shows** (`showDraw` in `src/data/expectedDraw.ts`): published average first; then a room with no sports setup reads full; an arena or stadium reads 57% of its concert setup (or of its listed size when no concert figure is on file). The (i) card says so.
- **Small non-concert listings** (`knownSize` in `src/data/read.ts`): a Ticketmaster `special` listing in a room under 6,000 (`SMALL_SPECIAL_ROOM`) sits under the floor unless a figure says sold out.
- **Festivals listed twice:** the Ticketmaster dedupe also keys on venue + date + title.
- **Team schedules** (`src/data/teamSchedule.ts`): one record per covered team, home and away, with scores once final, built from the team's own feed (MLB Stats API; ESPN team schedule). The nightly job writes them to the `team_schedules` table (`supabase/migrations/0010_team_schedules.sql`, **Kylie to run**), because ESPN refuses calls made from a phone's browser; an MLB club is also read live as a fallback. A row for a home game in a covered city points at the app's existing event (no second copy), and so does an away game at a covered team's building (Dodgers at Padres opens the San Diego night). Times are shown in the team's home city. The team page (`FavoritePage.tsx`) shows **Schedule** (next 10 to come, Save on games the catalog lists) and **Results** (last 10 played, "W 5–3"); a team with no feed says "No schedule yet." UCLA football, men's and women's basketball were already in the ESPN list and get schedules as soon as the table exists.

## Bay Area build (Oct 7): choices made, confirmed by Kylie (Oct 7)
Both answers are saved in full (`docs/bay-area-venue-table-answer.md`, `docs/bay-area-city-type-answer.md`). Choices I made without a lock:
- **City type: driving** (the research's "driving or hub, 0.85 default"; it could not judge spillover). Oracle Park and Chase Center carry their own 0.50 car shares, so the type only reaches venues with no figure.
- **Boundary as briefed** (SF, Alameda, Contra Costa, San Mateo, Santa Clara). Sacramento, Napa, Sonoma out; the research would not move the line.
- **17 teams**, including the **Oakland Roots** for their last Coliseum match (Oct 10, 2026); their 2027 home is undecided. **Not venue rows:** the Golden Gate Park festival meadows, the Alameda County Fairgrounds, Moscone, the San Jose convention center and the open sites (as New York's Table B and Atlanta's parks). Their events would be placed as points and sized by their own crowd; **none is hand-listed yet** (the research gives no confirmed per-day figure for the Fleet Week air show, Oct 9–11, so no number was invented).
- **Car shares for Kezar and the SJSU event center are mine** (the research has none): 0.55 and 0.85, from the nearest comparables, marked as such in the venue notes.
- **Oracle Park reads 41,265** (Ticketmaster) over 41,915; the Giants publish neither.
- **Levi's lists 68,500**, but the 49ers announce about 71,500, so a 49ers estimate sits above Seats on the page. That is the data, not an error; a confirmed 49ers capacity would close it.
- **Re-check every Bay Area car share after Nov 3, 2026** (the Prop RTM transit vote; if it fails, BART ends service at 9 p.m. from January 2027 and the core's evening shares move sharply toward car).

## Distance discount: Kylie's read (Oct 7)
Kylie accepted the check's result ("that's fine… not something I felt was that big a weight anyway, I'm glad we checked it out"). Crowd fight stays as it is; the discount is not built; revisit when a season of concert listings is on file.

## Research source change (Kylie, Oct 7)
Chicago's two prompts will be run on OpenAI's Astra model. When both answers arrive, compare them against the earlier cities' answers on the same checklist (venues found, figures sourced and labeled, coordinates, scheduled changes, gaps admitted) and tell Kylie whether Astra's is meaningfully better; if so, she may rerun or spot-check the other cities there. A postseason-attendance research answer (closing the gap on playoff "People" estimates) is coming from her next.

## Chicago build (Oct 7): choices made, for Kylie to confirm
Both answers are saved in full (`docs/chicago-venue-table-answer.md`, `docs/chicago-city-type-answer.md`). Choices I made without a lock:
- **City type: hub** (the research: "in between, leaning driving"; the United Center is 87% car, the suburban ring near-total, Wrigley 37%). The code had 'transit' from the away-market stub, which the research contradicts. Hub keeps the 0.85 default for venues with no figure; Wrigley, Soldier Field, the United Center and the rest carry their own.
- **Boundary as briefed plus Chicagoland Speedway** (Joliet, Will County; one NASCAR weekend a year, 47,000, sold out in 2026), the research's one addition. Its car share is mine.
- **15 teams.** Loyola is out (Gentile Arena is under 5,000). Chicago State is in because its building qualifies; its games sit under the floor. The Chicago Wolves (AHL, Allstate Arena) have no free feed and are not listed.
- **Not venue rows:** Grant, Douglass, Union and Humboldt parks; McCormick Place and the Stephens Convention Center (sized per event-day, as the research recommends); Hawthorne and Arlington Park (closed). None of the big open-site dates (Lollapalooza, Riot Fest, the Marathon, the Air and Water Show) is hand-listed yet; the research gives per-day figures for Lollapalooza (115,000 cap) and Riot Fest (50,000) that could be, when their 2027 dates are set.
- **Car shares that are mine, not the research's** (nearest comparable, noted in each row): Martin Stadium, Pritzker Pavilion, Impact Field, Wintrust Field, the Jones Convocation Center, the Salt Shed, the Aragon, Gately Stadium, the speedway.
- **Ryan Field** opened Oct 2, 2026, so Northwestern games there have no estimate until crowds land (the building, 35,000, is the fallback). **Martin Stadium** stays a row at 12,000 until Northwestern says what happens to the temporary stands; the Stars' 2027 home is unresolved.
- **The Bears:** Soldier Field through 2028 at least; if Hammond is chosen, the boundary moves. **The Fire** leave Soldier Field for their own 22,000-seat stadium before the 2028 season (a row to add then).

## Postseason: Kylie's locks and the any-round pool (Oct 7)
- Kylie locked (Oct 7): pull playoff crowds from the same feeds; the four round bands; "Likely X–Y" as the range wording, with the **low end on the map and in lists**. Built the same day; the pre-registered check passed (`docs/postseason-check.md`).
- Kylie (Oct 7): **allow an "any round" league pool for the WNBA and MLS.** Pre-registered as `ANY_ROUND_POOL` and the check rerun. **MLS passes** (9 games: 4.4% median error against 7.7% by the building; the range covered 8 of 9) and is built. **The WNBA fails** (6 games: 25.1% against 0.4% by the building, all six sellouts) and is **held back; Kylie agreed (Oct 7: "WNBA makes sense, the last few years have changed so much. fine for now")**. A this-season WNBA rule is parked until she asks. The reason is in the data, not the rule: WNBA playoff crowds roughly doubled between 2023 and 2025 (the Liberty's first-round games went 8,789 → 12,115 → 17,017 → 17,593 as the curtain came off), so any pool of earlier seasons sits far under a 2026 full house. A rule that would fit the WNBA is this season's own crowds (the regular-season level, or a one-season window), which is a design change to propose, not a threshold to loosen.
- **Astra** (Kylie, Oct 7): not the new go-to for research; its usage cost is too high. Chicago's Astra answers, if they still arrive, are a one-off comparison only.
