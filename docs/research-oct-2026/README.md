# October 2026 event research (four cities)

Research only. Nothing here is seeded into the app yet.

- Prompt: `../october-2026-events-prompt.md` (run once per city). Theme-park follow-up: `../theme-park-nights-prompt.md`.
- Results, each with Claude's check against sources and Kylie's calls: `san-diego.md`, `seattle.md`, `los-angeles.md`, `new-york.md`, `theme-park-nights.md`.

## Kylie's calls (Oct 6, 2026)
- **Size floor:** 5,000+ only. Borderline rooms (small college football, junior hockey, NWSL in a big stadium) stay in; check past attendance before seeding.
- **Metro reach:** LA = LA County + Orange County. San Diego = the county. Seattle keeps Tacoma, Everett, Kent and Auburn. New York = the five boroughs plus northern New Jersey and Long Island (not upstate, not Westchester; Rutgers out for now). How far-off venues compete is handled by a distance discount in the formula later (see `BACKLOG.md`, Formula tuning), not by hand-drawn borders.
- **Theater rule:** an arena concert counts as a headline event; YouTube Theater with Intuit Dome counts as one zone (recorded in `../overlap-and-date-rating-v3.md`).
- **Theme parks:** ordinary park days and continuous Fright Fest-style nights stay out. Separately ticketed close-and-reopen nights (Halloween Horror Nights, Knott's Scary Farm, Oogie Boogie Bash, Howl-O-Scream) are loggable but don't feed friction until a real crowd figure exists.

## Found along the way
- Two ESPN feed bugs (games without a kickoff time on the wrong day; Galaxy fixtures missing). Plan in `../fix-plan-espn-feed.md`; fixed in commit `fce6191`.
- The LA research missed one-off events the hand-checked Oct 3 and 4 lists had (Galaxy friendly, Slayer, ComplexCon). Expect gaps at the Kia Forum and Crypto.com Arena in every city's equivalent: one-off shows, friendlies, conventions.
