# Research prompt: how Atlanta fans get to the game

Copy everything below the line into a research model. Save the answer in full as `docs/atlanta-city-type-answer.md` and paste it to Claude. Drafted Oct 7, 2026, from the New York prompt, under Kylie's rule that a city's type is researched, not assumed. The app has three city types (driving, hub, transit); the type sets only two things: the default share of fans who drive when a venue has no figure of its own (0.85 driving and hub, 0.4 transit), and how much one crowd spills onto a neighbor's roads. A venue's own measured share overrides the default.

The next-cities research guessed Atlanta as **driving with a transit core**: Mercedes-Benz Stadium and State Farm Arena sit on MARTA, Truist Park does not. Confirm or correct that with figures.

**This answer may be used months after it is written.** Date every figure, and note anything scheduled to change (new rail, closed stations, new parking) with dates.

---

## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`atlanta-city-type-answer.md`**. Do not make it a PDF, a Word file or a rendered page that can only be saved as a PDF. Inside the file use Markdown headings, pipe tables (`| a | b |`) and inline links. If you cannot create a file, reply in plain Markdown text in the chat instead, and if that is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: arrival mode for Atlanta's large venues

## What this is for
Fan/Friction rates how hard it is to get out of a venue after a game or show. The read scales with the share of the crowd that drives. I need, for each large venue in the Atlanta region, the best public figure for **how people arrive**: car (drive, carpool, rideshare together), transit (MARTA rail and bus, CobbLinc, Xpress, shuttles), and walk or bike. Then a one-line verdict on the region as a whole.

## Venues (5,000 or more)
Mercedes-Benz Stadium, State Farm Arena, Truist Park and the Battery, Bobby Dodd Stadium, Center Parc Stadium, Gas South Arena, Gateway Center Arena at College Park, Lakewood Amphitheatre, Ameris Bank Amphitheatre (Alpharetta), McCamish Pavilion, GSU Convocation Center, Fifth Third Stadium (Kennesaw State), Coolray Field, Atlanta Motor Speedway, the Georgia World Congress Center, Piedmont Park and Centennial Olympic Park as festival grounds. Add any 5,000+ venue the venue-table research turns up.

## For each venue
| Field | What I need |
|---|---|
| Car share | Share of attendees arriving by private car, carpool or rideshare. One number, or a range with the midpoint you'd use. |
| Transit share | Share by MARTA rail or bus, CobbLinc, Xpress, or event shuttles, with the stations or routes that serve the building and the walk time |
| Walk, bike, other | The rest |
| Basis | Where the figure comes from: an environmental review, a transportation management plan, MARTA event-day ridership, a team or venue report, a city or ARC study, a survey. Say if it is a before-opening projection rather than an observed count. |
| Parking | On-site spaces, and whether most fans park in private lots or garages nearby instead |
| Event-day setup | Extra trains, shuttles (the Battery's, Alpharetta's), closed streets, transit included with the ticket |
| Label | Official, reported, or estimated. Never a bare number. |
| Link | One per figure |

## The region
One line each: is Atlanta, for a night out at these venues, a **driving region** (most crowds 80%+ by car, like Los Angeles), a **transit region** (most big crowds under half by car, like New York), or **in between** (like Seattle), and why.

Then **say where the answer breaks by venue**. My expectation, to confirm or correct: Mercedes-Benz Stadium and State Farm Arena take a real MARTA share (GWCC/CNN Center and Vine City stations), Truist Park is near-total car with the Battery's garages and Cobb shuttles, and everything in Gwinnett, Alpharetta, Kennesaw and Hampton is car. Give a number per venue rather than one for the region.

## Known leads (verify, don't trust)
- **MARTA publishes ridership by station**; the GWCC/CNN Center and Vine City stations on Falcons, United and Hawks nights against the announced crowd come close to an observed mode share. MARTA also reports event-day ridership for big dates (the SEC Championship, the Peach Bowl, Super Bowl LIII in 2019).
- **Mercedes-Benz Stadium's transportation plan** and the stadium's own sustainability reporting carry a mode split; Atlanta United's larger crowds may differ from the Falcons'.
- **Truist Park and the Battery:** Cobb County's traffic studies for the stadium (2014–2017) carry projections; the Braves publish parking and shuttle information; look for anything observed since 2017.
- **The Peachtree Road Race** and Dragon Con have MARTA ridership coverage every year.
- **Atlanta Regional Commission** studies on event traffic and the Downtown Connector.

## Rules
- Prefer observed counts over projections, and official plans over news or blogs. Where two sources disagree, give both and say which you'd use.
- Say which venues you could not find a figure for rather than guessing. For those, give the nearest comparable and say so.
- Tables beat prose. Links for every figure.
