# Research prompt: every San Diego venue of 5,000 or more, with capacity by setup

Copy everything below the line into a research model. Paste the answer back to Claude to check and fold into `src/data/venues.ts`. Drafted Oct 6, 2026, from the Los Angeles prompt (`docs/la-venue-table-prompt.md`); San Diego is the first city added by `docs/new-city-checklist.md`. Scope, as for LA: 5,000+ only.

---

# Research brief: San Diego venues that hold 5,000 or more

## What this is for
Fan/Friction is a personal log of live sports and concerts, with a "friction" read computed for each night from public schedules: how many big events share a date, how close their start times are, and whether their crowds hit the same roads. The read sizes each event by its building, so the app keeps its own capacity table. Only rooms of about **5,000 or more** feed the read, so that is the list I need for San Diego: complete, with capacity **by setup** (an arena holds a different number for basketball, hockey or a concert), and with sources.

A missing building makes a busy night look quiet. A wrong capacity makes an event look bigger or smaller than it was. Completeness first, then accuracy, then polish.

## Boundaries
**San Diego County**: the city of San Diego, Chula Vista, National City, Carlsbad, Oceanside, Escondido, El Cajon, La Mesa, Del Mar, Encinitas, San Marcos, Vista, Poway. Leave out Tijuana and Orange County (Orange County is in the app's Los Angeles metro).

## What counts
Every venue that holds **about 5,000 or more people in at least one setup**, and that hosts public ticketed or free events:
- Stadiums and ballparks: Petco Park, Snapdragon Stadium, and anything else at that scale. Note that SDCCU / Qualcomm / Jack Murphy Stadium was demolished in 2021: include it as a closed venue with its names and dates, because nights there can still be logged.
- Arenas: Pechanga Arena (the Sports Arena; include its earlier names), Viejas Arena, Jenny Craig Pavilion if it reaches the bar, and any other.
- Amphitheaters and outdoor concert venues: North Island Credit Union Amphitheatre (Chula Vista; include earlier names: Coors, Cricket, Sleep Train, Mattress Firm), The Rady Shell at Jacobs Park, Cal Coast Credit Union Open Air Theatre (SDSU), Humphreys if it reaches the bar (it does not; say so), the Del Mar Fairgrounds concert stages and racetrack grandstand.
- College venues of 5,000+: SDSU's and USD's, Cal State San Marcos and UCSD (RIMAC / LionTree Arena) if they reach the bar.
- Racetracks, fairgrounds and festival grounds: Del Mar Racetrack and Fairgrounds (the fair, concerts, KAABOO when it ran), Waterfront Park and Embarcadero Marina Park for festivals (CRSSD, Wonderfront), Qualcomm/SDCCU site if anything runs there now, the San Diego Convention Center for 5,000+ ticketed events (Comic-Con's halls).
- Minor-league grounds of 5,000+: the Gulls play at Pechanga Arena; the Loyal played at Torero Stadium; San Diego FC and the Wave play at Snapdragon.

Leave out: rooms under 5,000 in every setup; private spaces; buildings demolished before 2016.

## For each venue
| Field | What I need |
|---|---|
| Name today | Official name in 2026 |
| Earlier names | Every name since 2016 (and the demolished stadium's since 1967), each with the date it changed. The app matches old names to current ones. |
| City or neighborhood | |
| Coordinates | Decimal latitude and longitude of the building |
| Capacity by setup | A number for each setup the venue actually uses: baseball, football, soccer, basketball, hockey, concert (end-stage), festival or in-the-round, and anything else. If a figure changed since 2016, give old and new with the year. |
| Roof | Open-air, covered (roof but open sides), or indoor |
| Site access | Whether it is a single-road or hillside site that is always harder to get in and out of. A yes/no and one sentence. |
| Home teams or regular tenants | |
| Source for each capacity | A link. Prefer the venue's own site, the team's media guide, or the league. Wikipedia is fine as a pointer but cite where its number came from. |

## Rules
- **Label every number.** Official (the venue or team says so), reported (a reputable outlet), or estimated (your best figure when nothing official exists). Never give a bare number.
- **Where sources disagree, give both** and say which you'd use and why. Known traps: Petco Park 40,209 vs 39,860 vs 42,445 (standing room); Snapdragon 35,000 vs 32,000 (soccer configuration); Pechanga Arena's figure by setup.
- Note **standing-room or festival** figures separately from seated ones.
- Say which venues you **could not confirm** rather than guessing.

## What the app already has (check it)
Petco Park 39,860 baseball (listed). Confirm or correct, with the source.

## Output
One table, one row per venue, sorted by capacity, largest first, with the columns above. Then a short list of near-the-line venues you left out and why (4,000–5,000 rooms), and a list of anything you could not confirm. Tables beat prose. Links for every capacity.
