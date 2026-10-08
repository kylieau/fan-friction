## How to deliver this (read first)
**Deliver the answer as a downloadable Markdown file (`.md`)**, named **`no-feed-teams-answer.md`**. Do not make it a PDF, a Word file or a rendered page that can only be saved as a PDF. Inside the file use Markdown headings, pipe tables (`| a | b |`) and inline links. If you cannot create a file, reply in plain Markdown text in the chat instead, and if that is too long for one message, stop at a clean break, say "continued", and carry on in the next message.

# Research brief: free schedule feeds for the teams the app can't see

## What this is for
Fan/Friction is a personal log of live sports and concerts, with a "friction" read computed for each night from public schedules: how many big events share a date, how close their start times are, and whether their crowds hit the same roads. Every event has to be *listed* before it can be read. Today the app lists games from two free feeds: MLB's official Stats API (baseball) and ESPN's public site API (NBA, WNBA, NHL, NFL, MLS, NWSL, USL Championship, and NCAA football and basketball). Concerts come from Ticketmaster's Discovery API.

That leaves a gap: teams whose buildings hold 5,000 or more, whose games fill those buildings on real nights, but whose league is not on either feed. Their buildings are in the app's venue table; their games are invisible. The known cases so far, across eight cities (Los Angeles, San Diego, Seattle, New York, Atlanta, the Bay Area, Chicago, Dallas–Fort Worth):

| League | Teams the app covers but can't list | Building |
|---|---|---|
| USL Super League (women's soccer) | Dallas Trinity FC | Cotton Bowl, Dallas |
| UFL (spring football) | Dallas Renegades | Toyota Stadium, Frisco |
| Major League Cricket | Texas Super Kings | Grand Prairie Stadium |
| AHL (hockey) | Chicago Wolves, San Jose Barracuda, Ontario Reign, San Diego Gulls, Coachella Valley Firebirds | Allstate Arena, SAP Center, Toyota Arena, Pechanga Arena, Acrisure Arena |
| ECHL (hockey) | Allen Americans | Credit Union of Texas Event Center |
| NBA G League | Texas Legends, Windy City Bulls, Santa Cruz Warriors, South Bay Lakers | Comerica Center, NOW Arena, and smaller rooms |
| MLS Next Pro | North Texas SC, Golden City FC (from 2026–27) | Mansfield Stadium, Kezar Stadium |
| USL Championship (partly on ESPN) | Oakland Roots (listed), Atlético Dallas (from 2027), Loudoun-style second teams | Cotton Bowl and others |
| MASL (indoor soccer) | Dallas Sidekicks | Credit Union of Texas Event Center |
| Minor-league baseball (Double-A, Triple-A, independent) | Frisco RoughRiders, Chicago Dogs, Schaumburg Boomers, Rancho Cucamonga, Lake Elsinore, Tacoma, Everett, Brooklyn, Staten Island, Gwinnett | Riders Field, Impact Field, Wintrust Field and others |
| NASCAR and IndyCar | Texas Motor Speedway, Chicagoland Speedway, EchoPark Speedway | the speedways |
| NCAA sports beyond football and basketball | baseball, volleyball, soccer, hockey where a room holds 5,000+ | campus venues |
| Rodeo and stock shows | Fort Worth Stock Show & Rodeo, PBR | Dickies Arena, Will Rogers |

Rules I work under: **free data only** (no paid API, no credit card, no scraping that a site's terms forbid), the schedule must be machine-readable (JSON, XML, iCal/ICS, RSS or a stable HTML table), and it must give **date, local start time, home team and building** for games at least two weeks ahead. Announced attendance after the game is a bonus, not a requirement.

## What I need, in this order

### 1. A source per league
For each league in the table (and any other league you know of with 5,000+ buildings in US and Canadian metros), find the best free, machine-readable schedule source. For each, give:
- the URL pattern (an example request for one team), what it returns, and how far ahead it lists;
- whether it carries the building name and local start time;
- whether it carries announced attendance after the game;
- the terms of use that apply (link them; quote the clause on automated access or reuse), and whether an API key is needed and how it is obtained;
- how stable it looks (an official league API, a third-party stats site, a team's own calendar export).

Check in particular: league-level APIs (the AHL's and ECHL's stats providers, MiLB's share of MLB's Stats API, the USL's, UFL's and MLC's own sites), **iCal / ICS "add to calendar" exports** on team sites (these are often the cleanest free feed), ESPN's site API for leagues it carries quietly (it lists USL Championship; does it list USL Super League, the AHL, MLC, the UFL, MLS Next Pro?), and SportRadar-style free tiers (say if they are free in name only).

### 2. A ranking
Rank the leagues by how much they matter to the read: buildings of 5,000+, typical crowds (a Frisco RoughRiders game draws 7,000–10,000; a Chicago Dogs game 3,000), and nights per year. Say which three sources I should wire first and why.

### 3. Attendance
For each league, where are announced crowds published after the game (box scores, league releases, team notes), and are they machine-readable? The app sizes future games from past announced crowds, so a league with no public attendance can only be sized by its building.

### 4. What does not exist
Say plainly which leagues have **no** free machine-readable schedule, and what the fallback would be (a hand-entered season at the start of the year, a team's PDF schedule, a league calendar page scraped once a season with permission).

### 5. Self-audit
List every claim that rests on thin evidence, anything you guessed, and what I should check by hand before wiring a source: an example request I can paste into a browser, and the terms-of-use page for each.

## What I don't need
Paid feeds, betting-odds APIs, or anything that needs a contract. Do not propose scraping a site whose terms forbid it. Do not invent a URL: if you can't verify a request works, say so.
