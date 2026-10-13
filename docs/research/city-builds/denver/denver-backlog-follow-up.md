# Denver city build — follow-up

Oct 13, 2026. Not in root `BACKLOG.md` (parallel city builds).

## Ticketmaster

- No Ticketmaster venue id was verified for any Denver concert room in this pass (`node scripts/ticketmaster-venues.mjs --metro=denver` when a key is available).
- Rooms needing ids first: Red Rocks, Fiddler's Green (AXS-primary), Mission Ballroom, Fillmore, Paramount, Ogden, Gothic, Bellco, Levitt, DPAC theatres, Denver Coliseum rodeos.
- Sports sweep allowlist: `ball-arena`, `denver-coliseum`, `hamilton-gymnasium`, `peter-barton-lacrosse-stadium` (no verified TM ids).

## Feed gaps

- **Colorado Mammoth (NLL):** ESPN schedule lists home games with no `venue.fullName`. Confirm Ball Arena as default home or add a hand rule when TM is wired.
- **Denver Summit FC:** three home venues in 2026; watch Santa Fe Yards (~14,500) for 2028.
- **DU women's basketball:** confirm Hamilton vs Magness on the feed for every season.

## Research re-checks (from venue / city-type answers)

- Denver Coliseum capacity conflict (10,200 vs 8,140).
- DSG Park permanent 17,305 vs listed 18,061.
- Magness hockey 6,315 (DU) vs 6,026 (reported).
- Centennial Stadium downsizing to ~4,000 after 2028.
- Broncos Burnham Yard stadium (2031), Ball Arena lot redevelopment, RTD BroncosRide pilot (2027).

## Coordinates

- Mission Ballroom: RiNo address geocode not in the prompt; room point should be confirmed on OpenStreetMap.
- Peter Barton Lacrosse Stadium: approximate per prompt.
- DPAC cluster: shared approximate downtown point.
