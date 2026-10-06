# Hard-access sites: a definition that works in any city (Oct 6, 2026)

Kylie asked for the definition and threshold behind the venue "strained" flag, and for one that is consistent across cities before it is turned on anywhere new. This is the proposal. Nothing is changed yet.

## What the flag does
Gridlock, the lightest of the three parts of a night's read, compares the load on a venue's zone against a normal night there. A hard-access flag multiplies the load by **1.25**, the same order as a weekday rush hour (1.3) or rain (1.15). It says: a full house here is a quarter harder to get in and out of than the same house somewhere with good roads. Measured on six Dodgers nights: busy nights barely move (Oct 3, 2026 stays 9.5; Oct 25, 2024 goes 9.1 → 9.6); quiet nights move the most (a lone game on July 22, 2024 goes 1.0 → 2.6).

## The definition until today
"A single-road or hillside site, always a bit harder to reach." A hand yes/no, set on three venues: the Hollywood Bowl, the Rose Bowl and the Greek Theatre.

## The proposed definition: two measures, one rule
Both measures come from free public data the app already uses or can reach anywhere: the map tiles (OpenStreetMap, via OpenFreeMap) and a public elevation service. `scripts/venue-access.mjs` computes them for every 5,000+ venue in the table and writes `data/venue-access.tsv`; it is part of the new-city checklist.

1. **Relief within 500 m:** how much the ground rises and falls around the building (the highest minus the lowest of eight points 500 m out). A hillside or canyon site scores high.
2. **Named public roads within 250 m:** how many distinct streets come within 250 m of the building's center. Few streets at the gate means every car funnels through the same two or three.

**Rule: a venue is hard-access when relief is at least 40 m and no more than 4 named public roads come within 250 m.** Hillside *and* funnel. One alone is not enough: UCLA's campus is hilly but has plenty of streets; a flat suburban lot has few streets but many lanes and a freeway beside it.

## Every venue in the table under that rule
| Venue | City | Relief | Roads within 250 m | Roads within 500 m | Nearest freeway | Flag today | Rule |
|---|---|---|---|---|---|---|---|
| Hollywood Bowl | LA | 122 m | 2 | 27 | 300 m | yes | **yes** |
| Greek Theatre | LA | 101 m | 2 | 9 | 2,100 m | yes | **yes** |
| Dodger Stadium | LA | 56 m | 0 | 3 | 500 m | — | **yes** |
| Drake Stadium | LA | 48 m | 6 | 14 | 1,300 m | — | — |
| Los Angeles Tennis Center | LA | 47 m | 7 | 18 | 1,150 m | — | — |
| Weingart Stadium | LA | 44 m | 4 | 27 | 600 m | — | **yes** |
| Rose Bowl | LA | 42 m | 4 | 15 | 800 m | yes | **yes** |
| Pauley Pavilion | LA | 39 m | 3 | 15 | 1,300 m | — | — (just under) |
| Bren Events Center | LA | 32 m | 2 | 8 | 1,250 m | — | — |
| Mortgage Matchup Center | Phoenix | 26 m | 9 | 30 | 1,750 m | — | — |
| FivePoint Amphitheatre | LA | 25 m | 2 | 2 | 1,750 m | — | — |
| DHSP Tennis Stadium | LA | 23 m | 2 | 16 | 1,000 m | — | — |
| Long Beach Arena | LA | 22 m | 3 | 16 | 750 m | — | — |
| Titan Stadium | LA | 21 m | 3 | 23 | 400 m | — | — |
| YouTube Theater | LA | 21 m | 8 | 21 | 2,200 m | — | — |
| Dignity Health Sports Park | LA | 20 m | 2 | 19 | 1,050 m | — | — |
| SoFi Stadium | LA | 19 m | 5 | 28 | 2,300 m | — | — |
| Pomona Dragstrip | LA | 19 m | 2 | 5 | 2,050 m | — | — |
| Kia Forum | LA | 18 m | 7 | 26 | 2,700 m | — | — |
| Fairplex | LA | 18 m | 0 | 2 | 1,700 m | — | — |
| Wintrust Arena | Chicago | 17 m | 8 | 19 | 550 m | — | — |
| Intuit Dome | LA | 16 m | 4 | 13 | 1,350 m | — | — |
| Peacock Theater | LA | 15 m | 9 | 22 | 250 m | — | — |
| Petco Park | San Diego | 15 m | 13 | 28 | 800 m | — | — |
| Amalie Arena | Tampa | 15 m | 10 | 38 | 150 m | — | — |
| Crypto.com Arena | LA | 14 m | 7 | 19 | 350 m | — | — |
| Santa Anita Park | LA | 14 m | 0 | 0 | 1,050 m | — | — |
| Championship Soccer Stadium | LA | 14 m | 0 | 3 | 1,100 m | — | — |
| Ohio Stadium | Columbus | 14 m | 3 | 10 | 600 m | — | — |
| Golden 1 Center | Sacramento | 13 m | 8 | 21 | 350 m | — | — |
| Angel Stadium | LA | 10 m | 0 | 4 | 300 m | — | — |
| LA Memorial Coliseum | LA | 9 m | 3 | 17 | 600 m | — | — |
| BMO Stadium | LA | 8 m | 6 | 16 | 150 m | — | — |
| Pacific Amphitheatre | LA | 8 m | 0 | 12 | 700 m | — | — |
| T-Mobile Park | Seattle | 8 m | 7 | 14 | 200 m | — | — |
| Honda Center | LA | 6 m | 4 | 8 | 250 m | — | — |
| Anaheim Convention Center | LA | 6 m | 0 | 23 | 1,350 m | — | — |
| Veterans Memorial Stadium | LA | 5 m | 0 | 14 | 2,350 m | — | — |
| Shrine Auditorium | LA | 5 m | 7 | 14 | 350 m | — | — |
| LBS Financial Credit Union Pyramid | LA | 5 m | 6 | 15 | 1,150 m | — | — |
| Empire Polo Club | Indio | 4 m | 0 | 1 | >1,500 m | — | — |
| Galen Center | LA | 3 m | 6 | 17 | 100 m | — | — |
| Citi Field | New York | 3 m | 4 | 14 | 250 m | — | — |

## What the rule gets right, and where it is close
- It reproduces all three hand flags (Bowl, Greek, Rose Bowl) and no flat urban arena anywhere, in LA or the other seven cities.
- It flags **Dodger Stadium** clearly (56 m of relief, no public street within 250 m), matching the venue research's call.
- It flags **Weingart Stadium** (East LA College: a hillside campus, 44 m, 4 streets). Plausible; nobody has checked it on the ground.
- **Pauley Pavilion is the borderline**: 39 m against a 40 m line, 3 streets. UCLA basketball traffic on Sunset is real, but the campus has more ways in than the Bowl or the Greek. The rule says no; a 35 m line would say yes (and would also catch nothing else).
- **Flat sites with few streets are not flagged** (Angel Stadium, Santa Anita, Fairplex, the Anaheim Convention Center, Empire Polo Club). Their few streets are wide arterials with big lots, not a canyon road. Coachella's famous gridlock is a festival-scale problem, which is the Gridlock load itself, not the access flag.
- **Limits:** the roads measure is taken from the building's center, so a very large footprint (a stadium with lots) reads fewer streets than a theater does; relief at 500 m can miss a venue at the foot of a hill. Good enough to be consistent; not a traffic model.

## Recommendation
1. Adopt the rule as the definition, computed by the script, and stop setting the flag by hand. In code: store the two measures on each venue and derive `strained` from them, so a new city gets the same answer by running the script.
2. Turn the flag **on for Dodger Stadium and Weingart Stadium**; keep the Bowl, the Greek and the Rose Bowl; leave Pauley off unless Kylie wants the line at 35 m.
3. Rerun the script whenever venues are added. It is on the new-city checklist.

## Decisions for Kylie
- The rule (relief ≥ 40 m and ≤ 4 streets within 250 m)?
- The line at 40 m (Pauley off) or 35 m (Pauley on)?

## Decided and built (Oct 6, 2026)
Kylie: the rule as stated, the line at 40 m (Pauley off), and the weight bent to the city: **× 1.25 in a driving city, × 1.1 in a transit city**, both placeholders until the research in `docs/hard-access-weight-prompt.md` comes back. The flag is now derived from the measures (`isStrained` in `src/data/venues.ts`, reading `src/data/venueAccessIndex.ts`, which `scripts/venue-access.mjs` writes); a venue with no measure falls back to its hand flag. Flagged today: Hollywood Bowl, Greek Theatre, Rose Bowl, Dodger Stadium, Weingart Stadium.

**On the "zero streets" at Dodger Stadium (Kylie's question):** the count is taken from the building's center, and at 250 m out one is still in the stadium's own lots; the real approach streets (Stadium Way, Vin Scully Avenue, Academy Road, Elysian Park Avenue, Scott Avenue) are 300–500 m out and all climb the same hill to the paid gates. Measuring from the edge of the grounds instead would be fairer, but the map tiles the app uses draw the building footprint, not the parking lots, so the property line isn't available from them today (the full OpenStreetMap database has it; its query service was overloaded on Oct 6). A trial that counted streets within 250 m *beyond the footprint* left Dodger Stadium at 0 and Hollywood Bowl and the Greek at 2, but raised the Rose Bowl to 9 (the residential streets of the Arroyo, which do not help one reach the gates), so the plain 250 m measure was kept. Relief is the stronger of the two signals; the streets count is a proxy for the funnel. Revisit with the property lines when the full map data is reachable, and with the research on the weights.
