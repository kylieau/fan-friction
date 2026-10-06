# Research prompt: how many lanes carry cars out of each venue?

Copy everything below the line into a research model. Paste the answer back to Claude to fold in. Drafted Oct 6, 2026. The point: replace the flat hard-access multiplier with the rule the egress research supports, **cars per outbound exit lane** (`docs/hard-access-weight-answer.md`).

---

# Research brief: exit capacity at 43 stadiums, arenas and amphitheaters

## What this is for
Fan/Friction is a personal log of live sports and concerts with a "friction" read on each night, computed from public data. One part of the read, Gridlock, estimates how hard it was to get in and out. Traffic engineers size event egress as **cars divided by outbound lane throughput**, so I want, for each venue below, the numbers that rule needs. No judgment calls about whether a venue "feels" hard to leave; the counts.

## For each venue
| Field | What I need |
|---|---|
| **Parking spaces on site** | Official count of spaces in the venue's own lots and garages (not neighborhood or satellite lots unless the venue runs shuttles from them; list those separately). |
| **Outbound exit lanes** | How many lanes carry cars from the venue's lots and garages onto public streets at the end of an event, counting every gate. One lane each way at a two-way gate counts as one outbound lane. If police convert streets to one-way outbound for events (the Rose Bowl does), count the event configuration and say so. |
| **Public streets at the gates** | The names of the streets those gates open onto, and how many distinct streets that is. |
| **Freeway ramps within about 1.5 km** | Which ramps, and roughly how far. |
| **Share of fans who drive** | Any measured mode-share figure (the share arriving by car vs. rail, bus, rideshare drop-off, walking). Yankee Stadium (~37% subway, ~45% all transit), Nationals Park (~34% rail) and Dodger Stadium (shuttle and bus share) are known to have figures; most venues won't. Mark estimates. |
| **Published clearance time** | Any stated time to empty the lots after a sellout (venue, team, city traffic plan, EIR, newspaper). Mark anecdotal reports as such. |
| **Source for each number** | A link. Prefer the venue's own parking page, the team, the city's event traffic plan, or an environmental impact report. Aerial imagery counts for lane counts if you say that's how you counted. |

## The venues
**Los Angeles:** Dodger Stadium, Crypto.com Arena, LA Memorial Coliseum, BMO Stadium, SoFi Stadium, Intuit Dome, Kia Forum, Hollywood Bowl, Rose Bowl, Dignity Health Sports Park (and its tennis stadium), Angel Stadium, Honda Center, Pauley Pavilion, Galen Center, Santa Anita Park, In-N-Out Burger Pomona Dragstrip, Fairplex, Weingart Stadium (East LA College), Long Beach Arena, Drake Stadium (UCLA), Los Angeles Tennis Center (UCLA), Veterans Memorial Stadium (Long Beach), Titan Stadium (Cal State Fullerton), Pacific Amphitheatre, Anaheim Convention Center, Peacock Theater, Shrine Auditorium, YouTube Theater, Greek Theatre, Championship Soccer Stadium (Irvine), Bren Events Center (UC Irvine), LBS Financial Credit Union Pyramid (Long Beach State), Empire Polo Club (Indio), FivePoint Amphitheatre (closed 2023; as it operated).
**Other cities (for the rule to be tested outside LA):** Citi Field, Petco Park, T-Mobile Park, Wintrust Arena, Amalie Arena, Mortgage Matchup Center (Phoenix), Golden 1 Center, Ohio Stadium.

## Rules
- Label every number official, reported, or estimated (your count from imagery is "estimated, counted from imagery").
- Where a venue shares lots with its neighbors (the Coliseum and BMO Stadium in Exposition Park; Crypto.com Arena and Peacock Theater at L.A. Live; SoFi, Intuit Dome, YouTube Theater and the Forum in Inglewood), say which lots and gates serve which building, or that they are shared.
- Say what you could not find rather than guessing.
- The result will be used the same way in every city, so keep the definitions identical across venues.

## Output
One table, one row per venue, with the columns above and a link per figure. Then a short list of venues where the lane count is uncertain and why. Tables beat prose.
