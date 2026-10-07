# Research prompt: how New York fans get to the game

Copy everything below the line into a research model. Paste the answer back to Claude. Drafted Oct 6, 2026, from the Seattle prompt, after Kylie's rule that a city's type is researched, not assumed. The app has three city types (driving, hub, transit); the type only sets two things: the default share of fans who drive when a venue has no figure of its own (0.85 driving and hub, 0.4 transit), and how much one crowd spills onto a neighbor's roads. A venue's own measured share overrides the default.

**New York is the app's first transit city**, so the default matters least here and the per-venue figures matter most — and the spread between venues is the widest we have met. The Garden sits on top of Penn Station; Jones Beach has a parking lot and no train. Both are in this list.

---

## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`new-york-city-type-answer.md`**. Do not make it a PDF, a Word file or a rendered page that can only be saved as a PDF. Inside the file use Markdown headings, pipe tables (`| a | b |`) and inline links. If you cannot create a file, reply in plain Markdown text in the chat instead, and if that is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: arrival mode for New York's large venues

## What this is for
Fan/Friction rates how hard it is to get out of a venue after a game or show. The read scales with the share of the crowd that drives. I need, for each large venue in the New York region, the best public figure for **how people arrive**: car (drive, carpool, rideshare together), transit (subway, LIRR, Metro-North, NJ Transit, PATH, ferry, bus), and walk or bike. Then a one-line verdict on the region as a whole.

## Venues (5,000 or more)
Madison Square Garden, Yankee Stadium, Citi Field, Barclays Center, MetLife Stadium, Prudential Center, UBS Arena at Belmont Park, Sports Illustrated Stadium in Harrison (Red Bull Arena until December 2024), Arthur Ashe Stadium and the USTA National Tennis Center grounds, Radio City Music Hall, the Theater at Madison Square Garden, Forest Hills Stadium, Northwell at Jones Beach Theater, PNC Bank Arts Center in Holmdel, Nassau Coliseum, Icahn Stadium and the Randall's Island festival grounds, the Javits Center, Belmont Park racetrack, Meadowlands Racetrack, Westchester County Center, Hofstra, Columbia's Wien Stadium, St. John's Carnesecca Arena, Maimonides Park and the Ford Amphitheater on Coney Island, the Staten Island ballpark, Liberty State Park.

## For each venue
| Field | What I need |
|---|---|
| Car share | Share of attendees arriving by private car, carpool or rideshare. One number, or a range with the midpoint you'd use. |
| Transit share | Share by subway, LIRR, Metro-North, NJ Transit, PATH, ferry or bus, with the stations or routes that serve the building and the walk time. |
| Walk, bike, other | The rest. In Manhattan and brownstone Brooklyn this is a real share, not a rounding error. |
| Basis | Where the figure comes from: an environmental impact statement, a transportation management plan, MTA or NJ Transit event-day ridership, a team or venue report, a city study, a survey. Say if it is a before-opening projection rather than an observed count. |
| Parking | On-site spaces, and whether most fans park in private lots or garages nearby instead. Barclays Center and the Garden were built with almost none by design; say so where that is true. |
| Event-day setup | Extra trains, special stations that open only for events, closed streets, shuttles, transit included with the ticket. |
| Label | Official, reported, or estimated. Never a bare number. |
| Link | One per figure. |

## The region
One line each: is New York, for a night out at these venues, a **driving region** (most crowds 80%+ by car, like Los Angeles or San Diego), a **transit region** (most big crowds under half by car), or **in between** (like Seattle), and why.

Then — and this is the part I most need — **say where the answer breaks by venue**. My expectation, which you should confirm or correct: the Manhattan and Brooklyn buildings are overwhelmingly transit and walking; the Bronx and Queens ballparks are strongly transit but not as strongly; Harrison and Newark lean on PATH and NJ Transit; and MetLife, UBS Arena, Nassau Coliseum, Jones Beach, PNC and the racetracks are near-total car. If that is wrong, say so with figures. Give me a number per venue rather than one number for the region.

## Known leads (verify, don't trust)
- **MTA publishes subway ridership by station and day.** Mets–Willets Point on the 7, and 161st Street–Yankee Stadium on the 4, B and D, show a clear game-day spike against a known paid attendance. That is close to an observed mode share and is the strongest source available for those two ballparks. Metro-North's Yankees–East 153rd Street station publishes game-day counts too.
- **NJ Transit publishes Meadowlands Rail Line ridership per event.** Against MetLife's announced crowd that gives a direct transit share for Giants, Jets and stadium concerts, and the answer differs sharply between an NFL Sunday and a summer show.
- **The Belmont Park Redevelopment FEIS** (the UBS Arena environmental review) carries detailed mode-split projections, and the Elmont–UBS Arena LIRR station opened with the building. Compare the projection against whatever has been observed since.
- **The Atlantic Yards FEIS** carries Barclays Center's projected mode split, and Atlantic Terminal is nine subway lines plus the LIRR. Look for anything observed after 2012 rather than relying on the projection.
- **Congestion pricing began in Manhattan in January 2025.** Prefer figures from after that date for the Garden, Radio City, the Theater at MSG and Javits, and say explicitly where a figure predates it. This is the single most likely way an older source is now wrong.
- The **US Open's transportation plan** (the 7 train and LIRR special service) should carry a mode split, and the grounds crowd is far larger than Arthur Ashe's capacity.
- **Forest Hills Stadium** has been in a running dispute with its neighbors over traffic and noise; the filings and community board material may carry counts.
- **Jones Beach and PNC Bank Arts Center** have no rail at all. Confirm that and give the parking capacity, because they are the contrast case that sets the top of the range.

## Rules
- Prefer observed counts over projections, and official plans over news or blogs. Where two sources disagree, give both and say which you'd use.
- Say which venues you could not find a figure for rather than guessing. For those, give the nearest comparable (another venue on the same line with data) and say so.
- Tables beat prose. Links for every figure.
