# Research prompt: which covered rooms have a retractable roof?

**Written Nov 7, 2026 (Claude Code) for build 7.2's M33 roof note.** The app's venue table carries `roof: 'open' | 'covered' | 'indoor'`; a retractable roof was a comment on a handful of rooms. The event page now says "Retractable roof" under a game's weather card at such a room (Kylie, Nov 7, 2026, the weather plan's questions 2 and 3: retractable rooms only, state it and stop), so each one needs a `roof: 'retractable'` value with a source.

## Ask
For every room in the app's 40 covered metros (the United States, Canada and Mexico City) that seats about 5,000 or more, list the ones whose roof **opens and closes** (a retractable roof or retractable panels), not a fixed dome and not a canopy over the stands. For each: the room, the city, the leagues or events that use it, and one source that says the roof is retractable (the venue's or team's own page first; a league page or a reputable outlet otherwise).

Leave out: fixed domes (Allegiant, Ford Field, Caesars Superdome, U.S. Bank, SoFi's fixed canopy), rooms whose roof is a shade over the seats only, and rooms under 5,000.

## Shape of the answer
A table: room, metro id, used by, roof type (panels, iris, single panel), source URL, and whether the source is the venue's own.
