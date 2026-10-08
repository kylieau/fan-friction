# HockeyTech / league schedule feeds: the permission email (draft, Oct 8, 2026)

Kylie asked for a draft and the process (Oct 8). Nothing is sent and nothing is wired until a yes is on file.

## Why ask first
The AHL, ECHL, PWHL and WHL all publish their schedules and announced crowds through one stats platform (HockeyTech's LeagueStat, `lscluster.hockeytech.com`). The platform has no public developer program: the league websites call it with a client key embedded in their own pages, and open-source projects reuse those keys. Reading it would mean borrowing a key that was never issued to us, and no published terms say whether that is allowed. The app's rule is free data only and nothing a site's terms forbid; where the terms are silent, the honest move is to ask. A written yes also protects the app later: it is the kind of thing a launch review asks for.

## The process
1. **Read the footer terms first** on theahl.com, echl.com, thepwhl.com and whl.ca (the research could not reach them). If one plainly allows non-commercial reuse of its published schedule, note it and skip the email for that league. If one plainly forbids automated access, the email goes to the league, not to HockeyTech.
2. **Send one email per league**, to the communications or media relations office (the addresses are on each league's "Contact" page), with HockeyTech copied once we know the right contact. Leagues answer schedule questions routinely; HockeyTech sells to leagues, so the league's yes is the one that matters.
3. **Keep the reply on file** in `private/` (never pushed), and record the date and the gist in `docs/data-sources.md` beside the feed.
4. **Wire the feed only after a yes**, with the terms the reply sets (caching, refresh rate, attribution). If a league says no, its teams stay on the Ticketmaster sweep where the building sells there, and on a hand-entered season otherwise.
5. **Re-ask if the use changes** (a public launch is a different use from a personal app; say so in the email so the yes is not wider than it reads).

## The email

**Subject:** Permission to read the [League]'s published schedule into a personal, non-commercial app

Hello,

I'm building a small personal app called Fan/Friction. It is a private log of live events a person attended (games and concerts), with a note on how crowded the city was that night, worked out from public schedules. It is not a ticketing, betting or stats product, it has no advertising, and it is not for sale; today it is used by me and a handful of friends.

To show nights at [Place Bell / Allstate Arena / …], I'd like to read the [League]'s published schedule (date, local start time, home team and arena) and, after each game, the announced attendance, the same figures your website and game reports show. The schedule data on your site is served by HockeyTech's LeagueStat platform, and I would rather ask than assume: may I read that feed, once a day, for this purpose? I would store only the schedule and announced attendance, refresh no more than once a day, and credit the [League] as the source wherever a figure appears.

If there is a preferred way to get the same data (a calendar export, a season CSV, a different endpoint or a developer agreement), I'm glad to use that instead. And if the answer is no, I'll leave the league out and say so in the app.

Thank you for considering it. I'm happy to answer any question about how the data would be used.

[Name]
[Email]

## Who to send it to
| League | Teams in the app's cities | Where to find the contact |
|---|---|---|
| AHL | Laval Rocket, Chicago Wolves, San Jose Barracuda, Ontario Reign, San Diego Gulls, Coachella Valley Firebirds | theahl.com → Contact |
| ECHL | Allen Americans, Atlanta Gladiators | echl.com → Contact |
| PWHL | Montréal Victoire, Seattle Torrent, New York Sirens | thepwhl.com → Contact / media |
| WHL | Seattle Thunderbirds, Everett Silvertips | whl.ca → Contact |
