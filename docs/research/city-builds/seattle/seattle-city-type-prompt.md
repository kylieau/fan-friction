# Research prompt: how Seattle fans get to the game

Copy everything below the line into a research model. Paste the answer back to Claude. Drafted Oct 6, 2026, after Kylie asked that Seattle's city type be researched, not assumed. The app has three city types (driving, hub, transit); the type only sets two things: the default share of fans who drive when a venue has no figure of its own (0.85 driving and hub, 0.4 transit), and how much one crowd spills onto a neighbor's roads. A venue's own measured share overrides the default, so the per-venue figures matter most.

---

## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/research/city-builds/seattle/seattle-city-type-answer.md`**. Do not make it a PDF, a Word file or a rendered page that can only be saved as a PDF. Inside the file use Markdown headings, pipe tables (`| a | b |`) and inline links. If you cannot create a file, reply in plain Markdown text in the chat instead, and if that is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: arrival mode for Seattle's large venues

## What this is for
Fan/Friction rates how hard it is to get out of a venue after a game or show. The read scales with the share of the crowd that drives. I need, for each large venue in the Seattle region, the best public figure for **how people arrive**: car (drive, carpool, rideshare together), transit (Link, Sounder, bus, Monorail, ferry, streetcar), and walk or bike. Then a one-line verdict on the region as a whole.

## Venues (5,000 or more)
Lumen Field (Seahawks, Sounders, Reign), T-Mobile Park (Mariners), Climate Pledge Arena (Kraken, Storm, concerts), Husky Stadium and Alaska Airlines Arena (UW), Tacoma Dome, WaMu Theater, Seattle Center grounds, Angel of the Winds Arena (Everett), accesso ShoWare Center (Kent), White River Amphitheatre (Auburn), the Gorge Amphitheatre (George), Pacific Raceways (Kent), Emerald Downs (Auburn), Washington State Fair grandstand (Puyallup), Cheney Stadium (Tacoma), Evergreen Speedway (Monroe), Marymoor Live (Redmond), Remlinger Farms (Carnation), Everett Memorial Stadium.

## For each venue
| Field | What I need |
|---|---|
| Car share | Share of attendees arriving by private car, carpool or rideshare. One number, or a range with the midpoint you'd use. |
| Transit share | Share by Link, Sounder, bus, Monorail, ferry or streetcar, with the stations or routes that serve the building and the walk time. |
| Walk, bike, other | The rest. |
| Basis | Where the figure comes from: a transportation management plan, an EIR or SEPA review, Sound Transit or King County Metro ridership on event days (special Sounder trains, Link counts), a team or venue sustainability report, a city study, a survey. Say if it is a before-opening projection (Climate Pledge Arena's 2018 plan) rather than an observed count. |
| Parking | On-site spaces, and whether most fans park in private lots nearby instead. |
| Event-day setup | Free transit with the ticket (Climate Pledge Arena's Transit GO program), extra Sounder trains, closed streets, shuttles. |
| Label | Official, reported, or estimated. Never a bare number. |
| Link | One per figure. |

## The region
One line each: is Seattle, for a night out at these venues, a **driving region** (most crowds 80%+ by car, like Los Angeles or San Diego), a **transit region** (most big crowds under half by car, like New York or Boston), or **in between**, and why. Note where the answer differs by venue: the stadium district and Seattle Center may be one thing and Tacoma, Kent, Everett and Auburn another.

## Known leads (verify, don't trust)
- Sound Transit runs extra Sounder trains for Seahawks and some Sounders and Mariners games; ridership per game is sometimes published.
- Climate Pledge Arena's transportation plan projected a transit share before opening and offers transit fare with tickets; Seattle's SDOT reviewed its traffic in 2022–2023.
- Lumen Field's and T-Mobile Park's transportation management plans (Public Facilities District, First & Goal) may carry mode splits.
- UW's Husky Stadium renovation (2013) had a SEPA review with game-day mode assumptions; the UW Link station opened in 2016, so re-check for post-2016 counts.
- The Tacoma Dome sits on Tacoma Dome Station (Sounder, Link T Line, Amtrak); the City of Tacoma may have event mode data.

## Gaps from the first 26 city builds (answer every item)

These came out of the first 26 city builds (Oct 2026). Each one cost a city something when the research skipped it. Give a source link for every fact. If you can't find a source, write "gap" and say what you searched. Never make up a number.

Fill in the city-specific leads in brackets when you copy this prompt for a new city.

1. **Name and code.** The display name for [city], a short form, and a three-letter code. List which cities and suburbs it covers. Tampa Bay is the precedent: locals and every team say "Tampa Bay" and it covers St. Pete and Clearwater, so the name changed while the code stayed TPA.
2. **City type.** Transit hub, mixed, or car-first, based on measured fan mode splits at each major venue. For every split give the year, venue, event type and source.
3. **Car share per venue.** Measured if possible. If not, give a sourced estimate and label it **estimated**. Estimates now go into the app marked as estimated. Never give a number without a source.
4. **Hand-off.** Key every car share to the venue rows in the companion venue answer, so a builder can wire them without guessing which room you meant.

**Build rules (for whoever turns this answer into app data; put these in the answer as notes):**
- Every venue ID and team ID must be unique across all cities. Check for collisions: `giants`, `jets`, `rangers`, `kings` and `cardinals` were already taken, so add a city prefix.
- Don't make a separate per-city opponents file. Opponent draws go into `expectedDrawIndex` like every other city.
- Never guess a capacity. A missing or range-only figure stays blank and goes on the city gaps list.
- Car shares: wire measured ones; wire sourced estimates marked estimated; leave the rest on the city default.

## Rules
- Prefer observed counts over projections, and official plans over news or blogs. Where two sources disagree, give both and say which you'd use.
- Say which venues you could not find a figure for rather than guessing. For those, give the nearest comparable (another venue in the same area with data) and say so.
- Tables beat prose. Links for every figure.
