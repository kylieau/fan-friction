# Research prompt: every Los Angeles venue of 5,000 or more, with capacity by setup

Copy everything below the line into a research model. Paste the answer back to Claude to check and fold into `src/data/venues.ts`. Drafted Oct 6, 2026. Kylie's scope: 5,000+ only (the rooms that feed the friction read), not every 1,000+ room.

---

# Research brief: Los Angeles venues that hold 5,000 or more

## What this is for
Fan/Friction is a personal log of live sports and concerts, with a "friction" read computed for each night from public schedules: how many big events share a date, how close their start times are, and whether their crowds hit the same roads. The read sizes each event by its building, so the app keeps its own capacity table. Only rooms of about **5,000 or more** feed the read, so that is the list I need: complete, with capacity **by setup** (a basketball arena holds a different number for hockey or a concert), and with sources.

A missing building makes a busy night look quiet. A wrong capacity makes an event look bigger or smaller than it was. Completeness first, then accuracy, then polish.

## Boundaries
The Los Angeles metro as this app draws it: **Los Angeles County and Orange County**, plus the **Coachella Valley** festival grounds (Empire Polo Club) and **Ventura**. Include Anaheim, Inglewood, Carson, Pasadena, Long Beach, Irvine, Costa Mesa, the San Fernando Valley, the San Gabriel Valley and the South Bay. Leave out San Diego and the Inland Empire except Coachella.

## What counts
Every venue that holds **about 5,000 or more people in at least one setup**, and that hosts public ticketed or free events:
- Stadiums and ballparks (MLB, NFL, MLS, NWSL, college football, Rose Bowl, Coliseum).
- Arenas (NBA, NHL, WNBA, college basketball, concerts).
- Amphitheaters and outdoor concert venues (Hollywood Bowl, Greek Theatre, Kia Forum's neighbors, YouTube Theater, the Pacific Amphitheatre at the OC Fair, FivePoint/Great Park Live, Honda Center's outdoor stage if any).
- Theaters of 5,000+ (Shrine Auditorium, Microsoft Theater / Peacock Theater, Dolby Theatre only if it reaches the bar).
- College arenas and stadiums of 5,000+ (Pauley Pavilion, Galen Center, Walter Pyramid, Titan Gym, Bren Events Center, Matadome, Jack Kent Cooke / LMU if 5,000+, Cal State LA, Drake Stadium, and so on). Check each; several are near the line.
- Racetracks and speedways (Santa Anita, Los Alamitos, Irwindale if still open), fairgrounds and festival grounds (Pomona Fairplex, OC Fair, Empire Polo Club, Brookside at the Rose Bowl, Grand Park, Exposition Park for festivals), convention centers used for 5,000+ ticketed events (LA Convention Center, Anaheim Convention Center arena), and the Long Beach Convention Center / Arena.
- Minor-league and lower-league grounds of 5,000+ (Dignity Health Sports Park's tennis stadium and track, the Rancho Cucamonga ballpark is Inland Empire so leave it out; LA Galaxy II, Orange County SC at Championship Soccer Stadium).

Leave out: rooms under 5,000 in every setup; private or members-only spaces; buildings demolished before 2016.

## For each venue
| Field | What I need |
|---|---|
| Name today | Official name in 2026 |
| Earlier names | Every name since 2016, each with the date (or at least the month and year) it changed. The app matches old names to current ones (Staples Center = Crypto.com Arena, StubHub Center = Dignity Health Sports Park, Banc of California Stadium = BMO Stadium). |
| City or neighborhood | |
| Coordinates | Decimal latitude and longitude of the building |
| Capacity by setup | A number for each setup the venue actually uses: baseball, football, soccer, basketball, hockey, concert (end-stage), concert (in-the-round or festival), and anything else. If a figure changed since 2016 (a renovation, seats removed), give the old and new numbers with the year. |
| Roof | Open-air, covered (roof but open sides, like SoFi), or indoor |
| Site access | Whether it is a single-road or hillside site that is always harder to get in and out of (the Hollywood Bowl, the Rose Bowl, the Greek). A yes/no and one sentence. |
| Home teams or regular tenants | |
| Source for each capacity | A link. Prefer the venue's own site, the team's media guide, or the league. Wikipedia is fine as a pointer but cite where its number came from. |

## Rules
- **Label every number.** Official (the venue or team says so), reported (a reputable outlet), or estimated (your best figure when nothing official exists). Never give a bare number.
- **Where sources disagree, give both** and say which you'd use and why. Common traps: Dodger Stadium 56,000 vs. 56,500; Rose Bowl 89,702 vs. 92,542; Coliseum 77,500 since 2019 vs. 93,607 before; SoFi 70,240 standard vs. 100,240 expanded; Crypto.com Arena 18,997 basketball vs. 18,910 vs. 18,145 hockey.
- Note capacities that are **standing-room or festival** figures (Empire Polo Club, Brookside) separately from seated ones.
- Say which venues you **could not confirm** rather than guessing.

## What the app already has (check these too)
Dodger Stadium 56,000 · Crypto.com Arena 18,910 basketball / 18,145 hockey · LA Memorial Coliseum 93,607 then 77,500 · BMO Stadium 22,000 soccer / 24,000 concert · SoFi Stadium 70,240 · Intuit Dome 18,000 · Kia Forum 17,505 concert · Hollywood Bowl 17,500 · Rose Bowl 89,702 · Dignity Health Sports Park 27,167 · Angel Stadium 45,517 · Pauley Pavilion 13,800 · Galen Center 10,258 · Honda Center 17,174 hockey · Empire Polo Club 125,000 festival. Confirm or correct each, with the source.

## Output
One table, one row per venue, sorted by capacity, largest first, with the columns above. Then a short list of near-the-line venues you left out and why (4,000–5,000 rooms), and a list of anything you could not confirm. Tables beat prose. Links for every capacity.
