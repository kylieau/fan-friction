# Research prompt: how Montreal fans get to the game

Copy everything below the line into a research model. Save the answer in full as `docs/archive/research/montreal-city-type-answer.md` and paste it to Claude. Drafted Oct 7, 2026, from the New York prompt, under Kylie's rule that a city's type is researched, not assumed. The app has three city types (driving, hub, transit); the type sets only two things: the default share of fans who drive when a venue has no figure of its own (0.85 driving and hub, 0.4 transit), and how much one crowd spills onto a neighbor's roads. A venue's own measured share overrides the default.

The next-cities research expects Montreal to be **the first strongly transit-led city after New York**. New York itself measured as a hub (~60% car, weighted by seats), so do not assume; measure. The Bell Centre sits on two Métro stations and a commuter-rail terminal; Parc Jean-Drapeau bans cars on Grand Prix days; Place Bell is at the end of the Orange Line in Laval.

**This answer may be used months after it is written.** Date every figure, and note anything scheduled to change (the REM's remaining branches, the Olympic Stadium's reopening, bridge works) with dates.

---

## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`docs/archive/research/montreal-city-type-answer.md`**. Do not make it a PDF, a Word file or a rendered page that can only be saved as a PDF. Inside the file use Markdown headings, pipe tables (`| a | b |`) and inline links. If you cannot create a file, reply in plain Markdown text in the chat instead, and if that is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: arrival mode for Montreal's large venues

## What this is for
Fan/Friction rates how hard it is to get out of a venue after a game or show. The read scales with the share of the crowd that drives. I need, for each large venue in the Montreal region, the best public figure for **how people arrive**: car (drive, carpool, rideshare together), transit (the Métro, the REM, exo commuter rail, STM, STL and RTL buses, shuttles), and walk or bike. Then a one-line verdict on the region as a whole.

## Venues (5,000 or more)
The Bell Centre, the Olympic Stadium (when open), Stade Saputo, Percival Molson Memorial Stadium, Place Bell (Laval), IGA Stadium and the Jarry Park grounds, Parc Jean-Drapeau (Osheaga, the Grand Prix), the Quartier des Spectacles and Place des Festivals, the Old Port, the Palais des congrès. Add any 5,000+ venue the venue-table research turns up, and the Victoire's arenas by season.

## For each venue
| Field | What I need |
|---|---|
| Car share | Share of attendees arriving by private car, carpool or rideshare. One number, or a range with the midpoint you'd use. |
| Transit share | Share by Métro, REM, exo, bus or shuttle, with the stations or routes that serve the building and the walk time (Lucien-L'Allier and Bonaventure for the Bell Centre; Pie-IX and Viau for the Olympic Park and Stade Saputo; Jean-Drapeau for the island; Montmorency for Place Bell; De Castelnau and Jarry for the tennis) |
| Walk, bike, other | The rest. Downtown and the Plateau have real walking and BIXI shares; say so. |
| Basis | Where the figure comes from: a BAPE or city environmental review, a transportation plan, STM event-day ridership, a team or venue report, an ARTM or city study, a survey. Say if it is a before-opening projection rather than an observed count. |
| Parking | On-site spaces, and whether most fans park in private garages nearby. The Bell Centre's and the Olympic Park's figures; Parc Jean-Drapeau's lots and when they close. |
| Event-day setup | Extra Métro service, exo specials, closed streets (the Grand Prix, Fête nationale), shuttles, transit included with the ticket (Osheaga's and the Grand Prix's STM arrangements) |
| Winter | For open-air venues, which months they are dark; for the Bell Centre and Place Bell, whether snow days measurably shift the share toward the Métro |
| Label | Official, reported, or estimated. Never a bare number. |
| Link | One per figure |

## The region
One line each: is Montreal, for a night out at these venues, a **driving region** (most crowds 80%+ by car), a **transit region** (most big crowds under half by car, like New York's Manhattan buildings), or **in between** (like Seattle and the New York region), and why.

Then **say where the answer breaks by venue**. My expectation, to confirm or correct: the Bell Centre, the Quartier des Spectacles and the Old Port are majority Métro and walking; the Olympic Park and Stade Saputo take a strong Métro share with real parking; Parc Jean-Drapeau is Métro and bridge-walk on festival days and car-free on Grand Prix days; Place Bell and Molson Stadium are mixed; the South Shore's crowds come over the bridges by car and by the REM. Give a number per venue.

**One extra question:** the Canadiens' playoff watch parties on Avenue des Canadiens-de-Montréal put a second crowd outside the Bell Centre on the same night. Is there a published estimate of their size and how they arrive? The tester's night (May 25, 2026, East Final Game 3) had one.

## Known leads (verify, don't trust)
- **The STM publishes ridership by station** (and has released event-day figures for the Grand Prix, Osheaga and Canadiens playoff nights). Lucien-L'Allier and Bonaventure against the Bell Centre's announced 21,105 come close to an observed share.
- **The ARTM's origin–destination survey** (2018, and the 2023 edition) gives mode shares by district; the downtown and Hochelaga figures bound what the venues can be.
- **Parc Jean-Drapeau's** master plan and the Grand Prix's transportation plan (the island is closed to cars on race days; the Jacques-Cartier Bridge's bike and pedestrian counts are published).
- **The Olympic Park's** redevelopment and roof-replacement reviews carry parking counts and mode projections.
- **The Bell Centre** opened in 1996 with a transit-first design (it sits on the old Windsor Station); the Canadiens and evenko have published transit shares for concerts and games.
- **Place Bell's** 2017 opening and Laval's transportation plan; the Orange Line's Montmorency terminus.
- **The REM** opened its first branch in 2023 and others since; say which branches serve which venues as of the answer's date.

## Rules
- Prefer observed counts over projections, and official plans over news or blogs. Where two sources disagree, give both and say which you'd use.
- Say which venues you could not find a figure for rather than guessing. For those, give the nearest comparable and say so.
- Tables beat prose. Links for every figure. Sources in French are fine; quote the French and translate the figure's label.
