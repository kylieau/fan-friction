# Season tickets: research brief

For Fan/Friction. Written Oct 22, 2026 (PT). About an hour of web research plus a read-only look at the repo. Not exhaustive.

## Verdict

- **The decided feature works for its core user**: someone with a full-season plan, the same seat every game, who goes to most games and sells or gives away the rest. Teams in every league sell this plan, and fixed-seat partial plans keep the same "same seat, list of games" shape.
- **"Add every home game" fits full-season holders only.** Every league also sells half, quarter, 20-game, 10-game, weekend/weekday, and pick-your-games plans, and MLB teams also sell credit ("flex") plans. A partial holder who turns on the toggle and then deletes 40 or more games will find it tiring. The cheapest fix that keeps the decided feature as it is: after the toggle adds all home games, show the list with checkboxes. This is a design detail, not a new feature.
- **Preseason and playoffs should not be added automatically.** Preseason is part of the package in the NFL and NBA but often not in MLS. Playoffs are always charged separately, and the dates aren't known until late.
- **Price per game is hard for holders too.** Some teams print one price per game; others have games at different prices, and the NFL charges about half for preseason. "One default price, editable per game" matches how people actually think about it.
- **Repo:** the whole season for a team is already stored (`team_schedules`), but the event list that plans attach to only goes about **120 days** ahead. So "add every home game" can't create a normal plan for games past that window yet. This is the main build constraint (details below).

---

## 1. Plan types

**Findings**
- **MLB**: plenty of choice. Rays: full, half-season weekday (Mon–Thu), half weekend (Fri–Sun), quarter Friday/Saturday/Sunday, plus a "Flexible" credit plan where you pick games, seats, and how many tickets ([Rays](https://www.mlb.com/rays/tickets/season-tickets/season-membership)). Red Sox: full (A), weekday (51 games), weekend (30 games), two half-season, four "Twenty Game Winner", and three "Tenth Man" plans, each a fixed list of games ([Red Sox](https://www.mlb.com/redsox/tickets/season-tickets/holders/schedules-and-pricing)). Rangers: full, half, 20-game presets, a "Fan's Choice" 20-game plan where you choose the games, and 10-game packs ([Rangers](https://www.mlb.com/rangers/tickets/season-tickets/multigame)). Marlins Flex: prepaid credit ($750 / $3,000 / $12,000) spent on any games ([Marlins](https://www.mlb.com/marlins/tickets/season-tickets/flex)).
- **NBA**: full (Heat: 3 preseason + 41 regular), half (1 preseason + 20 regular, two fixed versions called "Red" and "Black"), and 10-game mini plans ([Heat](https://www.nba.com/heat/tickets/season-ticket-memberships), [Heat partial](https://www.nba.com/heat/tickets/partial-plans)). Spurs: full, half (21 games), 10-game "Marquee" and "Weekend" plans ([Spurs](https://www.nba.com/spurs/ticketmemberships)). Pistons: full, half, quarter ([Pistons](https://www.nba.com/pistons/fans)). Timberwolves half: 20 games in "Blue" or "Green" packs ([Wolves](https://www.nba.com/timberwolves/memberships/half)).
- **NHL**: full and half memberships, for example the Wild terms mention "full and half-season members" ([Wild terms](https://www.nhl.com/wild/stm/terms-conditions)). I didn't go deeper here.
- **NFL**: essentially full season only (one package of all home games, about 10 including preseason), often with a one-time seat license on top ([Steelers](https://www.steelers.com/tickets/season-tickets-waiting-list/), [Seahawks](https://www.seahawks.com/tickets/season-tickets/blue-pride/frequently-asked-questions), [Bills](https://www.buffalobills.com/news/everything-buffalo-bills-fans-should-know-about-2025-season-tickets-at-highmark-stadium)).
- **MLS**: full-season membership is the norm; Sporting KC defines the season as the regular season only ([Sporting KC policy](https://www.sportingkc.com/tickets/season-tickets/ticket-policy/)).
- **WNBA**: full and half plans exist, e.g. Mystics partial plans and Fever half-season ([Mystics](https://mystics.wnba.com/partial-plans), [Fever](https://go.feverbasketball.com/season-tickets/half-season-plan)).
- **College**: football and basketball season tickets often require a separate yearly donation per seat ([Maryland](https://umterps.com/news/2024/7/23/terrapin-athletics-maryland-athletics-announces-new-season-ticket-and-giving-model-beginning-with-2025-26-seasons), [USC](https://trojanathleticfund.com/sports/2026/1/3/usc-season-tickets-seating-maps-football-basketball-soccer.aspx)). Many schools also sell 2–3 game football mini plans and 5-game basketball plans ([Georgia Tech FB](https://ramblinwreck.com/2026-georgia-tech-football-mini-plans-available-now/), [Boise State](https://broncosports.com/news/2026/6/16/general-boise-state-football-mini-plans-are-now-on-sale), [Georgia Tech MBB](https://ramblinwreck.com/news/2026/10/5/2026-27-mens-basketball-mini-plans-available-now)).
- I didn't find data on what share of holders are on full versus partial plans.

**What this means for the feature:** a full-season-only toggle fits the NFL and most MLS and college football holders well. For MLB, NBA, NHL, and WNBA, many holders are on partial plans. Fixed partial plans (Red Sox "D plan", Heat "Red") are still "same seat, set list of games", so the same toggle works if the holder can untick games in bulk. Flex/credit plans have no fixed games or seat. Leave them out; those holders can keep adding single plans.

## 2. Playoffs and preseason

**Findings**
- **Preseason**: included and charged in **NFL** packages (Steelers: "from preseason through the final regular season home game"; Seahawks: 1 preseason + 9 regular in 2026; Packers price preseason "roughly half" of regular season) ([Steelers](https://www.steelers.com/tickets/season-tickets-waiting-list/), [Seahawks](https://www.seahawks.com/tickets/season-tickets/blue-pride/frequently-asked-questions), [Packers](https://www.packers.com/news/packers-set-ticket-prices-for-2025-season)). Holders often resell preseason games very cheaply ([Money](https://money.com/preseason-nfl-ticket-prices/)). Included in **NBA** packages (Heat full: 3 preseason; half: 1) ([Heat](https://www.nba.com/heat/tickets/season-ticket-memberships)). **Excluded** at Sporting KC (MLS) ([policy](https://www.sportingkc.com/tickets/season-tickets/ticket-policy/)). In MLB, spring training is usually away from the home park.
- **Playoffs are always separate from the season price.** How they're handled varies:
  - *Charged up front for every possible game, with credit for games not played*: Phillies (unused money becomes a credit on next season's renewal, with no cash value) ([Phillies](https://www.mlb.com/phillies/tickets/season-tickets/holders/postseason)). Cubs holders have a postseason FAQ and can skip postseason tickets ([Cubs FAQ](https://www.mlb.com/cubs/tickets/season-tickets/holders/faq)).
  - *Pay only for games that are actually played*: Vegas Golden Knights "Cheer Now, Pay Later", paid at the end of each round ([VGK](https://www.nhl.com/goldenknights/news/vgk-announce-ticket-on-sale-information-for-first-round-playoff-home-games-x2590)). Carolina charges game by game once a game is certain ([Canes PDF](https://media.d3.nhle.com/image/private/t_document/prd/hleg3z4hoitoyd0qoycl.pdf)). Seahawks "Pay-as-we-Play" ([Seahawks](https://www.seahawks.com/tickets/season-tickets/blue-pride/frequently-asked-questions)).
  - *Seats held automatically unless you opt out, charged before each round*: Sporting KC and several other MLS clubs ([Sporting KC](https://www.sportingkc.com/tickets/season-tickets/ticket-policy/)).
  - *Guaranteed seats or first chance to buy*: NBA teams sell "playoff priority" by tier (Pistons: full = Priority 1, half = Priority 2, quarter = Priority 3; half-season holders get half the home playoff games) ([Pistons](https://www.nba.com/pistons/fans)).

**What this means for the feature:** leave playoffs out of the toggle. Their dates aren't known until late, and many holders skip them. Keep preseason off by default, but add one clear "Include preseason" option, because NFL and NBA holders pay for those games. A later "Add playoff home games" prompt fits the "seats held" model, but it isn't needed in v1.

## 3. How holders actually use their games

**Findings**
- **Selling part of the plan is normal.** A 2011 SportsBusiness Journal investigation reported that "92 percent of the baseball tickets sold on StubHub come from season accounts". The figure is old, but it's the strongest number I found ([SBJ, 2011](https://www.sportsbusinessjournal.com/Journal/Issues/2011/10/24/In-Depth/Main.aspx)). The same piece tells of a Red Sox holder who went to about 60 of 81 games and then chose to go to fewer and sell more.
- One Blue Jays holder (2026, quoted by Global News via TicketNews) says he and his wife "typically attend between 50 and 60 of the team's 81 home games and resell the remainder" ([TicketNews](https://www.ticketnews.com/2026/07/ontario-ticket-resale-cap-season-ticket-holders/)). That's one person, not a statistic.
- **Splitting with friends is common.** Reddit threads describe shared Google Sheets with one row per game, a snake draft to pick games, swaps, and settling up by price tier (r/AustinFC, r/Astros, r/stlouisblues, r/valkyries: [1](https://www.reddit.com/r/AustinFC/comments/o6m9e7/season_ticket_scheduling_spreadsheet_with_friends/), [2](https://www.reddit.com/r/Astros/comments/7tmmag/how_do_you_split_season_tickets/), [3](https://www.reddit.com/r/stlouisblues/comments/1m6tld6/methods_for_sharing_season_tickets/)). Reddit blocked my reader, so this comes from search summaries, not the full threads.
- **Attendance share**: I found no recent public figure for US leagues. An academic study looked at no-shows for about 5,900 holders of one pro team ([Journal of Sport Management](https://journals.humankinetics.com/view/journals/jsm/35/3/article-p239.xml)), but the share wasn't in the abstract. One UK club (Brentford) reports holders averaging 96% attendance after a policy that pushes resale through the club, up from 90% ([Yahoo Sports](https://sports.yahoo.com/every-seat-counts-mid-season-090000775.html)). Because of the policy and the market, this doesn't carry over to US teams.
- Some teams limit resale to their official marketplace (Timberwolves) ([Wolves](https://www.nba.com/timberwolves/memberships/half)).

**What this means for the feature:** expect a fair number of games per season to be removed, sold, or given away. "Remove a single game" is the right core action. Let the holder say why (Sold / Gave away / Skipped), and keep removed games visible and greyed out so they can be added back. Don't show "% attended" as a benchmark against other people, because no reliable data exists.

## 4. Price per game and parking

**Findings**
- Some teams price every game the same, so "plan price ÷ games" works. Others use **variable pricing**: one season price, but different printed prices per game (SBJ example: $32 weekends, $55 for the Yankees, $18 weeknights) ([SBJ](https://www.sportsbusinessjournal.com/Journal/Issues/2011/10/24/In-Depth/Main.aspx)). The Red Sox publish a "Season Ticket Schedule with Tiers" ([Red Sox](https://www.mlb.com/redsox/tickets/season-tickets/holders/schedules-and-pricing)). In the NFL, preseason costs about half ([Packers](https://www.packers.com/news/packers-set-ticket-prices-for-2025-season)). Teams also print prices per game (Timberwolves half plan: "$1,620 … $81" per seat, i.e. 20 games) ([Wolves](https://www.nba.com/timberwolves/memberships/half)).
- Holders themselves are unsure what "face value" means for a package ticket ([TicketNews](https://www.ticketnews.com/2026/07/ontario-ticket-resale-cap-season-ticket-holders/)). Extra one-off costs muddy it further: NFL seat licenses (Steelers from $1,500 per seat, one time) and college donations per seat.
- **Season parking passes are common and priced per game.** Royals: $15 / $18 / $37 per game, sold as full-season packages ($1,215 / $1,458 / $2,997, which is exactly 81 × the per-game price), plus half and partial packages ([Royals parking](https://www.mlb.com/royals/tickets/season-tickets/holders/parking)). Cubs holders can renew season parking each year ([Cubs FAQ](https://www.mlb.com/cubs/tickets/season-tickets/holders/faq)). The Giants run a member parking marketplace ([Giants](https://www.mlb.com/giants/tickets/season-tickets/holders/parking-marketplace)). Sporting KC gives free parking by account size ([policy](https://www.sportingkc.com/tickets/season-tickets/ticket-policy/)).
- Whether fees are included: I found no holder survey. The app already puts fees inside the Ticket line (`src/data/types.ts`, CostKind comment).

**What this means for the feature:** the decided "default per-game price, editable on each game" is right. A per-game parking default is worth having, since parking passes are sold per game and teams list per-game rates. Make it optional, and when a game is removed, drop that game's parking too. Optional helper: "Enter plan total, we'll divide by N games" to fill the default.

## 5. Multiple seats

**Findings (pattern only)**
- Accounts usually have several seats. Teams cap or scale by seat count (Timberwolves "Max of 4 memberships"; Sporting KC gives parking per 1–4 / 5–8 seats) ([Wolves](https://www.nba.com/timberwolves/memberships/half), [Sporting KC](https://www.sportingkc.com/tickets/season-tickets/ticket-policy/)). Split-group threads assume pairs or fours. Above Face (a tracker app) handles "sold two, went with your kid on the other two" as separate seat groups ([Above Face](https://aboveface.app/)).
- The common pattern: on one night, some seats get used and others get sold or given away.

**What this means for the feature:** keep "You paid = my own ticket only". The default price should be **one seat's** price. Label it that way ("Price per seat, per game") so nobody types the price for all 4 seats. The default seat is her own seat. Tracking friends' seats or splitting costs is out of scope; flag it as a possible later request.

## 6. Prior art

**Findings**
- **Ticketmaster Account Manager** (used by most team sites): upcoming games listed **by month**. Tap a game to Transfer, Sell, Donate, or show the barcode. Transfers show **"Waiting to accept / Sent"**, then **"Accepted by / Claimed"**, and a pending transfer can be cancelled ([TM help](https://help.ticketmaster.com/hc/en-us/articles/9760688108945-How-do-I-use-my-sports-team-or-venue-account), [TM transfer](https://help.ticketmaster.com/hc/en-us/articles/9786975926673-How-does-Ticket-Transfer-work)).
- **MLB Ballpark app**: Tickets > Wallet > pick a game > Forward. Statuses are **Forward Pending**, then **Forward Accepted**, with Cancel and Recall ([MLB support](https://support.mlb.com/s/article/Ballpark-App-Forwarding-a-Ticket-TDC-Clubs); page needs JavaScript, so this is from the search summary).
- **Seatflow** (iOS): "Import your season's schedule in seconds and select your … events", tracks attended vs sold, profits, alerts ([Seatflow](https://www.seatflowapp.com/)).
- **Above Face** (iOS, on-device): pick league, then team, and the home schedule loads. Tap Sold and type the payout. Each game's statuses are Used / Sold / Gifted. Preseason counts as half a share by default. Playoffs billed separately stay separate. Parking is tracked separately (Used / Sold / Not used). A canceled game's refund counts as money back. Seat licenses are spread over years. A nudge appears when a game is days away and still "undecided" ([Above Face](https://aboveface.app/)).
- Others: TicketRoster, Season Ticket Manager Pro (group splits, balances) ([TicketRoster](https://ticketroster.com/), [STM Pro](https://www.seasonticketmanager.app/)).

**What this means for the feature (patterns worth copying):** (a) pick team, then the home schedule appears as one list grouped by month; (b) each game gets a small status chip (Going / Sold / Gave away / Skipped) instead of being deleted; (c) preseason and playoffs kept apart from the regular season; (d) parking kept on its own line; (e) a quiet "game in 3 days, still undecided?" prompt. Fan/Friction is a log, not a money ledger, so leave out profit and break-even.

---

## Repo: how the app knows a team's home schedule today

Read-only look at `/workspace/ff-claims/main-clone` (HEAD `5a62d41`, Oct 22, 2026, 6:35 PM PT).

- **Whole-season schedule exists per team**: `src/data/teamSchedule.ts` reads the Supabase table `team_schedules` (one row per team: "its whole season, home and away", per `supabase/migrations/0010_team_schedules.sql`). The nightly `scripts/catalog-write.mjs` (around line 286) writes it using `teamScheduleFromFeeds()`, which tries MLB, then ESPN, then HockeyTech. If the table is empty, only MLB clubs can be read live from the browser.
  - `src/data/sources/mlbSource.ts` `mlbTeamSchedule`: the full season, including spring (`gameType=S`, marked `preseason`) and postseason types.
  - `src/data/sources/espnSource.ts` `espnTeamSchedule` (around line 1369): queries preseason, regular, and postseason (`seasontype=1/2/3`; soccer adds `fixture=true`). Drops postponed or cancelled games. Covers NFL, NBA, WNBA, NHL, MLS, NWSL, college football/basketball, and others for the teams listed in `ESPN_TEAMS`.
  - `src/data/sources/hockeytechSource.ts` `hockeytechTeamSchedule`: the current regular season plus playoffs (AHL/PWHL-type leagues), preseason left out.
  - **Gap:** college teams that only come from Sidearm (`sidearmSource.ts`) aren't in `teamScheduleFromFeeds`, so they have no team schedule.
- **Each game** is a `TeamGame` (`src/data/types.ts` around line 313): `id, date, start, home, neutral?, opponent, venueName?, preseason?, stakes?.round (playoffs), score?, eventId?`. `home: true` plus `!preseason` plus no `stakes` gives "regular-season home games". `eventId` is filled only when the venue maps to a building the app knows.
- **The catalog that plans attach to is a rolling ~120-day window**: `DAYS_AHEAD = 120` in `espnSource.ts`, `mlbSource.ts`, `hockeytechSource.ts`, `ticketmasterSource.ts`, `seatgeekSource.ts`. The catalog keeps games from 7 days back (`GAME_FEED_BACK_DAYS = 7` in `catalog-write.mjs`). The phone's weather and results cache loads ±21 days around a date (`catalogCache.ts`), but that's separate from events.
- **Plans attach to catalog events**: `togglePlan(event: CrowdEvent, …)` in `src/data/personalLog.ts` (around line 1050), with one plan per `eventId`. `Plan` (`types.ts` around line 692) already has `seats` and `cost` that carry over to the stub (same-day logging, build 7).
- **What this means:** a toggle turned on in, say, March can only create normal plans for games inside the next ~120 days. Games further out are in `team_schedules` but have no catalog event yet. Options for Kylie and the builder: (1) create plans from `TeamGame` using the same `eventId` format the catalog will later use (`${date}-espn-${teamId}-${gameId}` etc.), so they link up when the event arrives; (2) store the season-ticket setting and add each game as it enters the 120-day window, "topping up" nightly or on app open; or (3) raise `DAYS_AHEAD` for home teams. Each has a trade-off, especially rescheduled games, whose ids or dates change.
- Cost lines in code today: `ticket | parking | food | merch | stream | other` (`types.ts` `CostKind`). That's more than the "ticket, parking, other" in the brief. Cost has three states (not entered / Free / paid; `MEMORY_HANDOFF.md`). "Season tickets" is listed there as backlog. An earlier cost research note already suggested "enter plan price once and spread across logged games" (`docs/build-7/research/03-cost-categories-claude.md`).

---

## Design recommendations (within the decided feature)

1. **Toggle on the team page**: "Season tickets". Turning it on opens one setup sheet: seat (section/row/seat), price per seat per game, optional parking per game, and "Include preseason" (off by default).
2. **Show the game list right after setup**, grouped by month, every regular-season home game ticked and set to Attending. Add bulk "Untick weekdays / weekends" shortcuts so half-season and weekend holders aren't stuck deleting 40 games. (This keeps "add all home games" and just makes removing easier.)
3. **Removing a game keeps it visible**, greyed out with an optional reason chip: Sold, Gave away, Skipped. One tap re-adds it. The removed game doesn't settle into a stub.
4. **Per-game edits override the defaults** (price for a big game, a different seat), with a small "edited" mark. Changing the default later asks: "Apply to games not yet edited?"
5. **Labels**: "Price per seat, per game (your ticket only)". Optional helper: "Paid for the season? Enter the total and the number of games."
6. **Parking default** lands as a Parking cost line on each game and is removed with the game.
7. **Playoffs**: not added. When the team schedule shows a home game with a playoff round (`stakes.round`) and season tickets are on, show a one-tap "Add to plans?" with no price prefilled. Optional for v1.
8. **Turning the toggle off**: ask whether to remove future season games. Never touch past stubs.
9. **Schedule changes**: if a game moves date, the plan should follow it, not be duplicated. If a game is cancelled, flag the plan instead of quietly deleting it.

## Open questions for Kylie (flagged where they'd change the decided feature)

1. **(Would change the feature)** Partial plans: is bulk-untick enough, or do you want a "Partial plan: pick my games" mode? Flex/credit plans have no fixed games or seat; are they out of scope?
2. **(Would change the feature)** Preseason: offer the "Include preseason" option (it matters for NFL and NBA), or leave preseason out entirely?
3. Playoffs: leave out of v1, or add the "Add to plans?" prompt when a home playoff game appears?
4. **Build constraint**: plans currently attach to catalog events about 120 days ahead. Which approach: plans from the full team schedule now, top up as games enter the window, or a longer window for home teams?
5. Removed games: should "Sold / Gave away" capture an optional sale amount, or stay a simple tag? (Amounts edge into money tracking, which the app doesn't do today.)
6. Seat licenses (NFL) and college donations: ignore, or allow them as one "Other" cost on the first game?
7. More than one season-ticket team at once (e.g. MLB and NFL): any limit?
8. College teams that only come from Sidearm have no team schedule today, so the toggle can't work for them yet. Hide the toggle for those teams?

## Data gaps (stated honestly)
- No recent public figure for the share of games US holders attend, or the share they resell or share. The 92% StubHub figure is from 2011 and covers MLB only.
- No data on the full versus partial plan mix, or on whether holders count fees in their per-game cost.
- Reddit pages were blocked from my reader; Reddit findings come from search summaries. mlb.com pages were read with a direct fetch.
