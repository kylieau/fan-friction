# Expected draw: Kylie's decisions (Oct 7, 2026)

On the two research answers: `docs/expected-draw-sports-research-answer.md` and `docs/expected-draw-concerts-research-answer.md`. Every line below marked "Kylie, Oct 7" is her answer in the Oct 7 Claude Code session. A line without her name is Claude's proposal.

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
