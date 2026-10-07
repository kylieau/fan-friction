# Research brief: filling gaps in a list of big events on past dates

## What this is for
I keep a personal log of live sports and concerts. For each night, an app works out how much competition there was: every other big event (about 5,000+ people) in the same city that day, their start times, and whether their crowds shared roads and transit. An earlier research pass built the event lists for the dates below. It was thorough on team sports, but it left specific gaps. Fill only those gaps. Don't redo what's already confirmed.

Completeness matters more than polish. A missing event makes a busy night look quiet.

## Rules (same as before)
- An event counts when it was in that city's area on that local date, was public (ticketed, free or open), and the venue holds about 5,000+ in that setup or the event drew 5,000+.
- **Big watch parties and fan zones count** when they drew about 5,000+: an official team watch party outside an arena, a stadium opened for an away game, a fan festival. Small ones (bar screenings) don't.
- **A theater of about 5,000–8,000 seats counts** only when a big event (any kind, including an arena concert) was on the same night in the same building, on the same campus, or a few minutes' drive away on the same local roads.
- **Confirmed only.** "Listed on a ticket site" isn't enough for a past date: look for a setlist (setlist.fm), a review, the venue's or tour's own past-events page, or a news report showing it happened. If you can't confirm it, say so.
- Record the **scheduled** start, not the actual one. If only doors are known, say so.
- Crowd figures: give one only if a source has one, labeled announced, reported or estimated, with the source. Don't estimate one yourself.
- A source URL on every row. If a page won't load normally, don't work around it; list it with the URL.
- Facts only: no scores, ratings or advice.

## A. Los Angeles concert nights (LA County + Orange County)
The earlier pass couldn't find concert or non-sports listings at these arenas on these dates. For each venue and date, say what was on (or that nothing was, and how you know):

| Date | Check these venues |
|---|---|
| 2026-02-25 | Crypto.com Arena, Kia Forum |
| 2026-03-18 | Crypto.com Arena (and Kia Forum, Intuit Dome, Honda Center again: the earlier pass found nothing at all that night) |
| 2026-04-24 | Intuit Dome, Crypto.com Arena |
| 2026-04-26 | Intuit Dome |
| 2026-04-30 | Intuit Dome, Crypto.com Arena (and Kia Forum again: the earlier pass found only one event that night) |
| 2026-06-12 | Kia Forum |
| 2026-06-26 | Intuit Dome, Crypto.com Arena |

## B. Los Angeles venues not checked at all
For **all 15 dates** below, check these venues the earlier pass skipped: FivePoint Amphitheatre (Irvine), Pacific Amphitheatre (Costa Mesa, OC Fair & Event Center), Long Beach Arena, Galen Center (USC), the Greek Theatre (about 5,900 seats, an amphitheater), the Rose Bowl, and non-baseball nights at Dodger Stadium and Angel Stadium (concerts, soccer). Also check for any WWE, UFC, boxing or awards show in the area on these dates.

Dates: 2026-02-25, 2026-03-03, 2026-03-08, 2026-03-18, 2026-03-30, 2026-04-04, 2026-04-06, 2026-04-09, 2026-04-12, 2026-04-24, 2026-04-26, 2026-04-30, 2026-06-12, 2026-06-26, 2026-09-20.

## C. Confirm or rule out
| Date | Event | What I need |
|---|---|---|
| 2026-04-04 | LANY at Intuit Dome, 7:30 pm | Did it happen? Scheduled start. |
| 2026-04-04 | Lamb of God at YouTube Theater (Inglewood) | Did it happen? Start time and capacity in that setup. |
| 2026-09-20 | Carín León at BMO Stadium, 8:00 pm | Did it happen? Any announced crowd. |
| 2026-09-20 | Gregory Alan Isakov with the Hollywood Bowl Orchestra, 7:30 pm | Did it happen? |

## D. Crowd figures for fan zones and watch parties
For each, find any published crowd figure (daily, or for that day), the hours that day, and whether it was free or ticketed:
- **FIFA Fan Festival Los Angeles**, LA Memorial Coliseum, 2026-06-12 (the day of USA vs. Paraguay at SoFi).
- **Union Station World Cup Fan Zone**, Los Angeles, 2026-06-26 (it ran Jun 25–28). Also: was there any other World Cup fan zone or big watch event in LA that day?
- **Montreal Canadiens' official outdoor watch party**, Avenue des Canadiens-de-Montréal, 2026-05-25 (Eastern Conference Final Game 3).
- **Seven Lions at Waterfront Park, San Diego**, 2026-08-22: a crowd figure or the capacity of that setup.

## E. October 2026 watch parties (four cities)
An earlier October search skipped watch parties by mistake. For **October 1–31, 2026**, list any watch party or fan zone of about 5,000+ in Los Angeles (LA + Orange County), San Diego (the county), Seattle (King County plus Tacoma and Everett) and New York (the five boroughs, northern New Jersey, Long Island). Examples to check: a team opening its stadium or arena to watch an away playoff game (Dodgers, Padres, Yankees, Liberty), and official outdoor watch parties. Dates already past (Oct 1–5) need confirmation that it happened; later dates need an official announcement.

## Output
CSV inside code blocks.

Parts A, B and C, one row per event found (leave a cell blank rather than writing "N/A"):
```
part,city,date,start_local,start_note,kind,title,performer_or_teams,venue,capacity_in_setup,status,proof_url,attendance,attendance_kind,attendance_source
```
`status`: happened, canceled, postponed, or not_confirmed. `kind`: game, show, festival, live-broadcast (watch party) or special.

Also, for Parts A and B, one line per venue and date checked, including the nothing-found ones:
```
city,date,venue,result,how_you_know
```
`result`: event found, nothing that night, or couldn't tell.

Part D:
```
event,city,date,hours,free_or_ticketed,crowd,crowd_kind,crowd_source,notes
```

Part E: the same columns as Part A.

Then: **Couldn't confirm** and **Pages that wouldn't load**. Tables, not essays.
