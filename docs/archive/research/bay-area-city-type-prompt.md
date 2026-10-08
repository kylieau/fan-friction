# Research prompt: how Bay Area fans get to the game

Copy everything below the line into a research model. Save the answer in full as `docs/archive/research/bay-area-city-type-answer.md` and paste it to Claude. Drafted Oct 7, 2026, from the New York prompt, under Kylie's rule that a city's type is researched, not assumed. The app has three city types (driving, hub, transit); the type sets only two things: the default share of fans who drive when a venue has no figure of its own (0.85 driving and hub, 0.4 transit), and how much one crowd spills onto a neighbor's roads. A venue's own measured share overrides the default.

The next-cities research said **one type can't describe the Bay Area**: a transit-and-walking core (Oracle Park, Chase Center) and a car-led South Bay (Levi's, Shoreline, SAP). The app has one type per metro today. So this brief has one extra question at the end: if the metro had to carry one type, which, and how wrong would that be at each end?

**This answer may be used months after it is written.** Date every figure, and note anything scheduled to change (Caltrain electrification's effects, BART schedules, the Coliseum station's future) with dates.

---

## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/archive/research/bay-area-city-type-answer.md`**. Do not make it a PDF, a Word file or a rendered page that can only be saved as a PDF. Inside the file use Markdown headings, pipe tables (`| a | b |`) and inline links. If you cannot create a file, reply in plain Markdown text in the chat instead, and if that is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: arrival mode for the Bay Area's large venues

## What this is for
Fan/Friction rates how hard it is to get out of a venue after a game or show. The read scales with the share of the crowd that drives. I need, for each large venue in the Bay Area, the best public figure for **how people arrive**: car (drive, carpool, rideshare together), transit (BART, Muni, Caltrain, VTA, AC Transit, SamTrans, ferries, event shuttles), and walk or bike. Then a verdict on the region, and on its two halves.

## Venues (5,000 or more)
Oracle Park, Chase Center, Levi's Stadium, SAP Center, PayPal Park, the Oakland Coliseum and Oakland Arena, Shoreline Amphitheatre, Concord Pavilion, the Greek Theatre (Berkeley), Frost Amphitheater, Bill Graham Civic Auditorium, the Cow Palace, California Memorial Stadium, Stanford Stadium, CEFCU Stadium, Haas Pavilion, Maples Pavilion, Golden Gate Park's Polo Field (Outside Lands), Moscone Center. Add any 5,000+ venue the venue-table research turns up.

## For each venue
| Field | What I need |
|---|---|
| Car share | Share of attendees arriving by private car, carpool or rideshare. One number, or a range with the midpoint you'd use. |
| Transit share | Share by BART, Muni, Caltrain, VTA, AC Transit, ferry or shuttle, with the stations or routes that serve the building and the walk time |
| Walk, bike, other | The rest. At Oracle Park and Chase Center this is a real share. |
| Basis | Where the figure comes from: an environmental impact report, a transportation management plan, BART or Caltrain event-day ridership, a team or venue report, an MTC or city study, a survey. Say if it is a before-opening projection rather than an observed count. |
| Parking | On-site spaces, and whether most fans park in private lots or garages nearby. Chase Center was built with little parking by design; Oracle Park's lots have shrunk as Mission Bay built out. Say so where true. |
| Event-day setup | Extra trains (Caltrain's post-game specials, VTA light rail to Levi's), ferries, closed streets, shuttles (Shoreline's, the Coliseum–BART walkway), transit included with the ticket |
| Label | Official, reported, or estimated. Never a bare number. |
| Link | One per figure |

## The region, and its halves
One line each: is the Bay Area, for a night out at these venues, a **driving region** (most crowds 80%+ by car), a **transit region** (most big crowds under half by car), or **in between**, and why. Then the same for **San Francisco and the inner East Bay** on their own, and for **the Peninsula and South Bay** on their own.

Then **say where the answer breaks by venue**. My expectation, to confirm or correct: Oracle Park and Chase Center are majority transit and walking; the Coliseum has a real BART share; Levi's is mostly car with a VTA and Caltrain-shuttle minority; SAP Center is mostly car despite Diridon; Shoreline, Concord and the Cow Palace are near-total car; Cal and Stanford football are mixed (BART to Downtown Berkeley; Stanford's lots and the Marguerite). Give a number per venue.

**The extra question:** if the metro had to carry one type, which would you pick, and by how many points would it be wrong at Oracle Park and at Shoreline? That tells us how much a per-metro type costs here.

## Known leads (verify, don't trust)
- **BART publishes ridership by station by day** (and hourly). Coliseum station on A's and Raiders dates (through 2024 and 2019), Embarcadero and Montgomery on Giants and Warriors nights, Downtown Berkeley on Cal Saturdays, against announced crowds: close to an observed share.
- **Caltrain's game-day service** to Oracle Park and Chase Center, and its Mountain View shuttle to Levi's, have published ridership.
- **The Chase Center EIR and transportation management plan** (2017–2019) carry a mode-split projection and a parking cap; the Warriors and the city's Mission Bay Ballpark Transportation Coordinating Committee report observed figures. Prefer observed.
- **Levi's Stadium's transportation management and operations plan** (Santa Clara, 2013–2014) and the 49ers' post-opening reports, plus VTA's event ridership.
- **Oracle Park:** the Giants' long-running mode surveys (the ballpark has reported transit-and-walk shares above half for years); the 2000 Pac Bell Park EIR for history.
- **Outside Lands'** transportation plan and Golden Gate Park road closures; Muni's event service.
- **Treasure Island's** festival history, for how an island site behaves.

## Rules
- Prefer observed counts over projections, and official plans over news or blogs. Where two sources disagree, give both and say which you'd use.
- Say which venues you could not find a figure for rather than guessing. For those, give the nearest comparable and say so.
- Tables beat prose. Links for every figure.
