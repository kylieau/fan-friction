# Build note: friction reads for past nights (reconstructed)

From the research session, Oct 6, 2026. For a fresh session: read this after `/resume-handoff`. **Propose the approach to Kylie before building** (AGENTS.md), then build in small steps.

## Goal
Past dates in LA and San Diego (and later New York and Montreal) should each show a friction read, rebuilt from public listings of everything else on that date plus the archived weather. These dates are before the nightly schedule archive began, so every read is labeled **reconstructed** (the label already exists in `src/data/read.ts`). New York and Montreal come after, once those cities are set up (`docs/new-city-checklist.md`; New York first, then Montreal, per Kylie).

The event lists below are public facts (who played where, when) and say nothing about who attended. Keep it that way: no personal log, name or import script goes in the repo, and nothing here marks which events anyone went to. The research answers behind these lists are in `docs/research-past-dates/`.

## What to add
Every event below goes into the catalog the way the hand-seeded nights do, so the date pages and the formula see them. One source label for the batch (for example `reconstructed`), and the read labeled reconstructed. Weather for each date comes from the Open-Meteo archive, as for the 13 test nights (`scripts/weather-fetch.mjs --backfill`).

Rules that apply (all in `docs/overlap-and-date-rating-v3.md` and `docs/formula-v4.md`):
- 5,000+ feeds friction; smaller rooms are listed and can take a nearby read but move nobody's.
- **Listed but not counted until a real crowd or capacity figure exists:** the fan zones and watch parties, Seven Lions, the theme-park special nights. Never invent a size.
- **Theater rule (Oct 6):** a 5,000–8,000 theater counts when a big event, including an arena concert, is on in the same building, campus or zone that night. YouTube Theater with Intuit Dome is one zone.
- **Big watch parties count** like any event of their size (kind `live-broadcast`), but only with a figure.
- Scheduled starts, never actual. Results and announced attendance are evidence beside the read, never inputs.
- The no-target rule (Oct 6): don't tune to anyone's ratings.

## Los Angeles (LA County + Orange County), 2026
Start times are local, scheduled. Sources: Hockey-, Basketball- and Baseball-Reference, ESPN, MLB Stats API, setlist.fm, club pages. The full research answers, and the checks against them, are in `docs/research-past-dates/`.

| Date | Events (5,000+) |
|---|---|
| Wed Feb 25 | Ducks–Oilers 7:30 (Honda Center); Kings–Golden Knights 7:00 (Crypto.com); Galaxy–Sporting San Miguelito, CONCACAF Champions Cup R1 leg 2, 8:30 (Dignity Health, 11,603) |
| Tue Mar 3 | Ducks–Avalanche 7:00; Lakers–Pelicans 7:30; UCLA MBB–No. 9 Nebraska 8:00 (Pauley) |
| Sun Mar 8 | Ducks–Blues 6:00; Lakers–Knicks 12:30; **LA Marathon** 7:00 am (route crowd event, ~27,000 runners, announced closures; Dodger Stadium to Century City) |
| Wed Mar 18 | Ducks–Flyers 7:00 (only event; arena archives checked) |
| Mon Mar 30 | Ducks–Maple Leafs 7:00; Dodgers–Guardians 7:10; Lakers–Wizards 7:00 |
| Sat Apr 4 | Ducks–Flames 7:00; Angels–Mariners 6:38; Kings–Maple Leafs 4:00; LAFC–Orlando 6:30 (BMO); Galaxy–Minnesota 7:30; Santa Anita Derby day (Derby post 4:30; grounds, no capacity figure); LANY 7:30 (Intuit Dome, confirmed by setlist.fm); Lamb of God 6:30 (YouTube Theater; counts under the theater rule) |
| Mon Apr 6 | Kings–Predators 7:30; Angels–Braves 6:38 |
| Thu Apr 9 | Ducks–Sharks 7:00; Kings–Canucks 7:30; Bruce Springsteen 7:30 (Kia Forum; 2 nights that week) |
| Sun Apr 12 | Ducks–Canucks 5:00; Dodgers–Rangers 1:10; Lakers–Jazz 5:30; Clippers–Warriors 5:30 |
| Fri Apr 24 | Ducks–Oilers, West R1 G3, 7:00; Dodgers–Cubs 7:15; Third Day 7:00 (Kia Forum) |
| Sun Apr 26 | Ducks–Oilers, West R1 G4, 6:30; Kings–Avalanche, West R1 G4, 1:30 (Kopitar's farewell season, Kings down 0–3); Dodgers–Cubs 1:10; Galaxy–Real Salt Lake 4:00; Angel City–Portland 3:00 (BMO) |
| Thu Apr 30 | Ducks–Oilers, West R1 G6, 7:00 (only event; arena archives checked) |
| Fri Jun 12 | USA–Paraguay, FIFA World Cup group stage, 6:00 (SoFi, 70,492); Angels–Rays 6:38; FIFA Fan Festival at the Coliseum, 11:00–9:00 (no daily figure: listed, not counted) |
| Fri Jun 26 | Angels–Athletics 6:38; Kid Cudi with Big Boi, "Rebel Ragers" tour, 6:30 (Crypto.com Arena's own page); Union Station World Cup Fan Zone (no figure: listed, not counted) |
| Sun Sep 20 | Ducks–Sharks (preseason) 1:00; Chargers–Raiders 1:05 (SoFi); Dodgers–Giants 1:10; Angels–Twins 1:07 (Angels' last home game); Sparks–Portland Fire 4:00 (Crypto.com); Gregory Alan Isakov with the Hollywood Bowl Orchestra 7:30; Haruomi Hosono with Toro y Moi supporting, 8:00 (Greek Theatre); **Carín León at BMO Stadium 8:00** (22,000; scheduled across Ticketmaster, AXS, Songkick and Bandsintown, no cancellation found: include. Corrected Oct 6 by the build session; the research had it as unconfirmed) |

Notes:
- Small events under the floor on these dates (gym-size) don't go in the catalog. A logged one takes a nearby read from the events above.
- Venues that may be missing from `src/data/venues.ts`: Santa Anita Park, Pauley Pavilion, YouTube Theater, Greek Theatre, Hollywood Bowl, LA Memorial Coliseum (check each; add with capacity by setup, labeled).
- Still unchecked (minor): Greek Theatre on the spring dates; Galen Center, Long Beach Arena, Rose Bowl, Great Park Live (Irvine), non-baseball nights at Dodger and Angel stadiums.

## San Diego, Sat Aug 22, 2026
- Padres–Twins 5:40 (Petco Park; 41,484 announced)
- San Diego FC–Colorado 7:30 (Snapdragon Stadium)
- Pacific Classic day at Del Mar, first post 2:00 (15,187 reported; Del Mar is ~20 miles up the coast, which the future distance discount handles)
- Seven Lions 5:00 at Waterfront Park (happened; no crowd or capacity figure: listed, not counted)

## Montreal, Mon May 25, 2026 (after Montreal is set up)
- Canadiens–Hurricanes, East Final G3, 8:00 pm ET (Bell Centre; 20,962 announced). The only 5,000+ event in town (eight other venues checked). The official outdoor watch party on Ave des Canadiens-de-Montréal from 5:00 pm has no crowd figure: listed, not counted.

## New York (after New York is set up)
Early-October New York dates are covered by the October research already in the repo (`docs/research-oct-2026/new-york.md`). Use that.

## Connecting logged nights to the reads
Logged nights that come in by hand (a SQL import Kylie runs, kept outside the repo) carry a date, metro, title and venue, with `event_id` null. **Answered Oct 6 by the build session:** a logged night picks up its read by date + metro; `event_id` isn't needed. What matters is `metroId` set correctly and `inMetro` not false for a covered city (`inMetro: false` is the away-night escape and returns no read). Nights in a city not yet covered stay `inMetro: false` until it is. Kylie holds a small follow-up script for those; tell her when each city lands (Montreal's id will be `montreal`; `new-york` already exists). **Don't write to anyone's account yourself.**

## Check
`npm run build` passes. On the local site, the date pages for Apr 4, Apr 26 and Jun 12 show their events and a read labeled reconstructed. A logged night on Mar 18 reads quieter than one on Apr 26. Screenshot those for Kylie. Commit; push when she says.
