# Listing the teams the app can't see: a proposal

Written Oct 8, 2026 from Kylie's research (`docs/no-feed-teams-answer.md`). Nothing here is built. Propose, then wait.

## What I checked live (the research could not)

The research said no URL was live-tested, so I ran its paste-in checks from here on Oct 8:

| Check | Result |
|---|---|
| MLB Stats API, `sportId` 11–14 (affiliated minors) | **Works.** Frisco RoughRiders (540, Riders Field), Tacoma Rainiers (529), Everett AquaSox (403), Brooklyn Cyclones (453), Gwinnett Stripers (431), Rancho Cucamonga, Lake Elsinore all listed with their buildings; a Frisco August schedule came back with game ids and the venue. Same response shape as the MLB calls the app already makes. |
| MLB Stats API, `sportId=23` (independent leagues) | **Works.** 73 clubs, including the Chicago Dogs (1882), Schaumburg Boomers (1950), Staten Island Ferry Hawks (586), Kane County Cougars (446), Long Island Ducks (1896). Two of them list their venue as "TBD", so the building would come from our table by team, not from the feed. |
| ESPN `soccer/usa.w.usl.1` (USL Super League) | **Responds** with games and venues; the attendance field is present but 0 on the game I saw. |
| ESPN `basketball/nba-development` (G League) | **Responds**, with venues and announced attendance on finished games (1,127 and 2,005 on a 2025 night: under the floor, as the research expected). |
| ESPN `football/ufl`, `lacrosse/nll` | **Respond** (league and team listings); no games in range off-season. |

## What I propose, in order

1. **Minor-league and independent baseball through the MLB feed the app already uses.** A parameter change in `mlbSource.ts` and the attendance collector (`sportId` per club), plus team records and the buildings that are not yet rows. Covers rank 1 and rank 6 of the research's list: the most nights by far, summer evenings, in every covered city. Attendance comes with it, so these games get real estimates. Same MLBAM notice the app already runs under; more volume, which the research flags against "non-bulk". Clubs to add, by city, where the building holds about 5,000 or more: Frisco (Riders Field, a row); Tacoma and Everett (buildings to check against the Seattle table); Brooklyn and Staten Island (New York); Gwinnett (Atlanta; Gwinnett Field is a row); Chicago Dogs, Schaumburg Boomers, Kane County (Chicago; Impact Field and Wintrust Field are rows). Rancho Cucamonga, Lake Elsinore and Sacramento sit outside the covered boundaries.
2. **A Ticketmaster Sports sweep, only at buildings whose events have no feed.** Today the app drops Ticketmaster's Sports segment because league feeds cover those games. The change: keep Sports listings at an allowlist of venue rows (Dickies Arena, Allstate Arena, Toyota Arena, Pechanga Arena, Acrisure Arena, the Allen event center, Grand Prairie Stadium, Mansfield Stadium, Kezar, Climate Pledge Arena for the Torrent), and drop any that match a feed game by building and date. No attendance, so these size by the building, which is the research's recommendation for them. Same key and terms as today; well inside the quota.
3. **ESPN slugs for the USL Super League, the G League, the UFL and the NLL.** The cheapest change (four lines in the team list), and verified responding. It rides on the research's point about Disney's terms, which already cover the ESPN feed the app runs on. **That is Kylie's call, not mine**: the research says decide on ESPN once, for everything. I will not extend ESPN until she says so.
4. **HockeyTech (AHL, ECHL, PWHL, WHL) after permission.** The best source for five AHL clubs, the Allen Americans, the Atlanta Gladiators and the Seattle Torrent, with official attendance; but the key is the league site's own, not ours, and no terms were found. The research's advice, which I agree with: email the league first. Not wired until a yes is on file.
5. **A hand-entered annual file** for NASCAR and IndyCar weekends, the Fort Worth Stock Show, PBR and Major League Cricket (keyed by building, since MLC's "home team" is not where it plays). About 40–60 rows a year, with a "last checked" date each; the pattern already exists in `listings2026.ts`.

Two corrections from the research to carry: the Dallas Sidekicks sat out 2025–26 (the Allen event center keeps its hockey row; no MASL team is listed), and the Seattle Torrent (PWHL, 13 dates at Climate Pledge Arena, 16,000–17,000 crowds) belongs in the Seattle table once a source exists.

## What I need from Kylie

1. OK to wire step 1 (baseball through the MLB feed) now.
2. OK to wire step 2 (the Ticketmaster sweep at the allowlisted buildings).
3. Her read on step 3: extend ESPN, or hold.
4. Whether she wants to send the HockeyTech email (I can draft it).

## Status (Oct 8, 2026)
Kylie: yes to 1 and 2 (built the same day; see `docs/expected-draw-decisions-oct7.md`, "No-feed sources: what was built"); asked for the pros and cons of 3 and for the HockeyTech email and process (4: `docs/hockeytech-permission-email.md`).

### 3. Extending ESPN: pros and cons
The question is not technical. The USL Super League, G League, UFL, NLL and CFL slugs all respond today. It is whether to widen the app's reliance on a feed whose owner's terms the research reads as barring automated access without written permission, the feed the app has run on since the first LA build for the NBA, WNBA, NHL, NFL, MLS, NWSL and college games.

| | Extend | Hold |
|---|---|---|
| Coverage | Dallas Trinity, the Alouettes and every CFL club, the G League rooms, the UFL, the NLL: about 60 more home dates a year in the covered cities, with announced crowds where ESPN fills the field | Those teams stay on the Ticketmaster sweep (no crowds, building-sized) or hand entry |
| Work | Four lines in the team list per league; the same code path | None |
| Terms exposure | Wider by the same kind, not a new kind: more calls to the same feed under the same terms | Unchanged; the exposure that exists today stays exactly as it is |
| Reversibility | Removing a slug is one line; the catalog's rows for it go away the next night | — |
| What a reviewer sees later | Reliance on ESPN across more leagues, harder to unwind if the answer is ever "stop" | Reliance on ESPN for the major leagues only, with the gap filled by sources that are plainly licensed (MLB's feed, Ticketmaster's key) |

My read: the research is right that this is one decision, not five. If ESPN is acceptable for the Lakers, it is acceptable for the G League; if it is not, the problem is the existing feed, and the fix is a licensed replacement for everything, which is a public-launch question, not a today question. Extending changes the amount, not the kind, and it is reversible in one line. Holding costs about 60 nights a year, mostly small rooms, with the CFL and the USL Super League as the ones that matter (Molson Stadium at 23,000; the Cotton Bowl). I'd extend, with the CFL and USL Super League first, and note the date and reason in `data-sources.md`. Her call.
