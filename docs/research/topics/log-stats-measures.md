# Stats a personal event log could show: measures and counting rules

Extracted Oct 15, 2026 from section 6 of the private log research answer (prompt: `docs/research/events-and-dates/kylie-log-research-prompt.md`; the answer stays in `private/kylie-log/`). Only the general measures are kept here; every example from the log was left out. Research only: nothing here is an approved Stats screen, field or badge. For the Stats pass (Mock Mosaic), mock first.

## Rules every stat follows

- Name the unit (event, outing, festival day, set) and the eligible group it is counted out of. Show `known n / eligible N` next to the number when coverage is partial.
- Unknown never becomes zero. A missing setlist is not "no songs"; "no promotion found" is not "no promotion."
- A rough date (month, year, unknown) is left out of any date-based stat; never use a Jan 1 placeholder as a real date.
- "First visit" means "first documented visit."
- A largest or smallest crowd is "the largest published crowd among the n verified," until coverage is complete.
- Never add up crowds. Never put different measures in one distribution (arena attendance, festival weekend totals, TV audiences).
- Results describe a past event. They never feed a friction read (the no-results rule).

## Counting units

| Stat | Counts | Watch for |
|---|---|---|
| Events logged | distinct event identities | Two raw entries can be one event (a re-logged memory); keep raw entries separate from the cleaned count. |
| Outings | distinct continuous visits | Two games in one session, or a doubleheader, is one outing with two games. Keep games and outings as separate totals. |
| Festival days and sets | confirmed days attended; sets seen | One festival entry is not every day of the festival. A billed act is not a set seen. |
| How you were there | in person / shared viewing (e.g. a Cosm screening) / remote | Shared viewing is its own crowd; it doesn't count as attending the game in person. |
| Sport, level, league | entries per competition and level | Pro, D-I and D-III are different groups. Say whether the categories overlap. |
| Home / away / neutral | games where the side you were rooting for is known | A neutral tournament site isn't anyone's home game. Title order doesn't tell you which side you were rooting for. |
| Cities and venues | entries per metro and per venue room | A renamed field or stadium is the same building. A rebuilt or relocated room is a new one. |
| Artists | distinct artists vs. performances (artist, set, date) | Headliner, support and guest are separate roles. |
| Repeat and first visits | per venue, team, artist | A rough date gives a range, not an exact first. |
| Busy dates and streaks | dates with 2+ events; longest run of consecutive dates | Only exact local dates count. |

## Results and timing (games)

| Stat | Formula | Watch for |
|---|---|---|
| Win rate for the side you were rooting for | wins / (wins + losses + draws), games with a named side you rooted for and a final | State how draws count. Shared viewing and exhibitions are shown separately. |
| Close-game rate | games within a set margin / games with a final | Set the margin per sport before looking (e.g. basketball ≤5, baseball ≤1 run, soccer ≤1 goal). |
| Margin | median and range, within one sport and level | Don't mix runs and points. |
| Overtime / extra innings | games that went long / games where it's known | A shortened game is not an extra-inning one. |
| Comebacks, lead changes, runs | from play-by-play only | A recap's highlight is not a full count; gamebooks count lead changes differently. |
| Walk-offs, shutouts, sweeps | per type / eligible games | Each type is its own count. |
| Pitchers and players seen | games a player actually played / games with a verified roster | Being on the roster doesn't mean they played. Innings pitched like 6.1 means 6⅓, not 6.1. |
| Game length | finish minus actual start, or the box's elapsed time; median by sport | Elapsed time isn't active play time. Don't fill gaps with a tour or league average. |
| Time there | the times you were actually there, overlapping visits counted once | Two games at once is not double the hours. |
| Start-time and weekday spread | entries per local hour and weekday | Scheduled and actual start times are labeled separately. |
| Delays, cut-short shows | documented cases / events researched | No report doesn't mean there was no delay. |

## Music

| Stat | Formula | Watch for |
|---|---|---|
| Setlist overlap between two nights | shared songs / all distinct songs across both (Jaccard) | Normalize covers and medleys. Skip nights whose setlist is missing. |
| New songs | songs not heard at an earlier confirmed night / songs in this set | A public setlist is what was played, not what you heard. |
| Most-heard song | confirmed performances of a song you were there for | Needs full setlists and knowing you stayed. |
| Tour-relative rarity | percentile of a night's value among the same tour leg | Needs the whole leg as a reference. Not computable from one log. |

## Crowds, cost, conditions

| Stat | Formula | Watch for |
|---|---|---|
| Crowd spread | median and range of one published measure, by sport, venue and setup | Label the measure (announced, reported). |
| How full | published crowd / that event's saleable inventory | Only when the two figures match the same setup. A building's capacity is not the denominator for every setup. Over 100% means re-check the figures first. |
| Sellouts | sourced sellouts / events with a known ticket status | A crowd near capacity doesn't make it a sellout. |
| Cost | amount you paid / admissions, optional | Advertised price is not what you paid. GA, VIP and upgrades aren't one price. |
| Weather | reliable observations near the event time | An indoor court still has outdoor arrival weather. A forecast isn't an observation. |
| Same-night competition | events nearby in a set window / dates fully surveyed | This is what friction already does; same timing doesn't prove a shared audience. |
| TV audience | average vs. average, peak vs. peak | Don't add alternate feeds together without knowing their scope. |

## Fits the "inputs must be incredibly simple" rule?

Most of these need nothing typed: they come from the event (result, length, crowd, setlist) once it's linked. The few that need the person are optional and short: which side you rooted for when it's ambiguous, festival days, whether you stayed for both games, and what you paid. Everything else is public.
