# Fan/Friction — Direction Update: The Log Leads

Oct 4, 2026 · Kylie Au

_Saved from the PDF "Fan Friction — Direction Update The Log Leads." Text kept as written. Read this before making any product decision._

## Summary

Fan/Friction's purpose has changed. The product is now a personal log of the live sports and concerts you actually went to, and friction is the read that makes each night distinct.

This is not a v2. We are early enough that the change belongs in the foundation, so treat it as the ground floor from here on. Every later decision should trace back to the reasoning in this document.

Nothing already built is being removed. Existing friction features stay, repositioned to serve the log rather than stand on their own. Some structural changes will follow, and we will work those out together before building them.

## What Fan/Friction is now

**Fan/Friction is a personal record of the live events you attended, games and shows in one place, with a friction read stamped on each night.** Friction (the crowd fight and gridlock around a date) is what makes one night different from another. It is why a night is worth logging.

The closest reference is Letterboxd, not a rewards card. Letterboxd is a diary of films you watched. Fan/Friction is a diary of nights you showed up.

What it is not, at least not primarily:

- **Not a game.** No points race, no scoreboard. Personal stats on your own nights are fine.
- **Not a social network.** The core works for one person alone. Small, fixed touches tied to a night are allowed (see Small nods).
- **Not a traffic app.** It does not route, park, or navigate anyone. A crowd read before deciding to go is fine; that is friction.
- **Not a rewards program.** Attendance is not currency.

## Small nods we allow

The "nots" can show up in small ways. Each nod has to pass one test: it adds to a logged night and never needs a home of its own.

- **On-the-night facts.** The conditions of the night, like "it is in fact 103 degrees," shown on the entry. People at the event can confirm a fact with a tap. No free text and no posting: confirming what is true, not commenting on it. Because nothing is earned, there is no need to verify who was there.
- **Your own photos on your entry.** Photos live on your night, for you. No public photo wall or open feed; that turns into Yik Yak.
- **Tweets from the night.** A few posts from the event attached to the entry as part of the memory, not a feed to scroll. Access needs checking first (see Open questions).
- **Personal stats.** Your own counts and patterns, like nights this year or venues visited. Never ranked against anyone.
- **A crowd read before going.** The forward-looking friction read, for deciding whether to go.

## Why the log leads

There were two possible centers: the friction debate (arguing over how bad a night was) and the personal log. They pull toward different products, so one has to lead. The log leads, for four reasons.

**The log compounds; the debate resets.** A log gets more valuable with every entry. Ten nights in, it is a record of someone's year that nobody else has. A debate is only as good as tonight's argument, and it starts over tomorrow.

**V1's data rule makes the choice for us.** V1 uses only publicly available data, so friction is computed from schedules and event overlaps, not reported or argued by users. A debate product needs people arguing to have anything in it, so at launch it would be empty. A computed friction read attached to a night someone went to works from day one.

**The gap in the market is the record.** What exists today is narrow. UCLA's app gives points for attending games, redeemable for gear. MLB's Ballpark app lets you mark that you were at a game, for MLB only. Nothing widespread covers sports and shows in one personal record. That is the opening.

**A log is a habit; a debate is an argument engine.** People come back to a record to add to it and look back on it. An argument engine needs a steady supply of new conflict to bring people back.

## The role of friction

Friction is the stamp on the night, not a second product. Every logged entry carries its friction read, the way a ticket stub carries the date and the seat.

**It works before and after the night.** Friction is not only historical. Before a night, it is a read that shows what a date or a week looks like and helps someone decide whether to go. After the night, the same read is stamped onto the entry. One read, two moments: a forecast, then a record.

**It gives people a reason to open the app between events.** Many people may log only a handful of nights a year. Looking ahead at upcoming dates fills the gaps between entries.

**It is the badge of honor.** A night is memorable partly because getting there was hard. "I made it through the night the Bowl and Crypto.com both let out" is a story people retell. Friction turns an attended game into that story. Keep this as a quality of the entry itself, never as collectible badges.

## What stays

Nothing already built is removed. The pivot changes what existing features are for, not whether they exist.

- **Friction scoring of dates stays.** It becomes the read attached to every night, before and after.
- **Traffic prediction and the look at someone's week stay.** They are the forward-looking side of the log: the nights ahead, read for friction, some of which become entries. They inform the decision to go, not the trip there.
- **Anything else already in the build stays.** If a feature does not clearly serve the log, flag it so we can decide where it fits. Do not delete it.

When an existing feature and the log seem to compete for attention, the log wins and the feature moves to support it.

## Guardrails: what we refuse

These keep Fan/Friction from drifting into a product it is not. Each one names the trap it avoids.

- **Points and rewards for attendance as the core (the UCLA trap).** Once check-ins earn rewards, they have to be verified, and the product becomes a loyalty program with a fraud problem. Points, sponsors, and redemptions can be a side door later, possibly a side project. Never the business.
- **Leaderboards and "most nights" status.** They turn a personal record into a competition, which pulls straight back toward points.
- **Collectible badges.** The badge of honor is a feeling attached to an entry, not an item to collect.
- **Friction talk detached from an entry (the Reddit trap).** No voting, rating, or arguing about a night someone did not log. Friction lives on entries.
- **Open posting and public photo walls (the Yik Yak trap).** On-the-night facts are confirmed with a tap, not posted. Photos stay on the person's own entry.
- **Navigation (the traffic-app trap).** No live routing, parking, or transit directions. Friction informs whether to go, not how to get there.
- **A standalone "is tonight bad?" feed.** A ranked list of upcoming nights by friction, cut off from the log, is the traffic app again.

## Which events count

There are now two thresholds, one for logging and one for friction. Events of about 1,000 attendees or more can be logged. Only events of 5,000 or more feed the friction read.

**Why the logging bar moves.** The 5,000 threshold made sense when the product scored dates: an event had to be big enough to cause friction on its own. A log has a different job. A show at the Wiltern, a theater with under 2,000 seats, is a night someone went to, and it belongs in their record.

**Small events count for the log, not for friction.** A Wiltern show adds almost nothing to the crowd fight or gridlock around it, so it does not move anyone's friction read. It still gets a read of its own, taken from the big events around it: the same show on a night a big event nearby lets out has real friction.

**Why not go smaller.** Below roughly 1,000, public listings are likely to get thin and inconsistent, and v1 relies on public data. Events in the hundreds also start to look like ordinary nights out rather than live events.

## Structural implications to work through

These are directions to discuss, not build instructions. We will go back and forth on them before anything changes.

1. **The logged night becomes the core unit.** Everything else should point toward, attach to, or come from a night someone attended. If the current core unit is the date being scored, that relationship likely flips.
2. **One friction read, two states.** A night has a forecast before it happens and a stamped record after. How does a forecast become a record when someone logs the night?
3. **Games and shows in one record.** The log treats a game and a concert as the same kind of thing: a night out. Anything currently built around only one type should be checked.
4. **Can an entry exist without a strong friction read?** Friction is why a night is worth logging, but some nights will have little of it. Decide whether those nights still belong in the log and how they look.
5. **Nothing removed, some things moved.** Existing features may need to sit in different places relative to the log. Flag any that do not clearly serve it.

## Open questions and known risks

- **Will people log nights out?** Letterboxd works because people already wanted to rate films. We are betting people want a record of nights out. Setlist.fm's "I was there" feature and people keeping ticket stubs suggest they do. This is the assumption to test first.
- **How often will people log?** It may be only a handful of nights a year for many people, though we are not certain of that. Either way, the forward-looking friction read is what keeps the app useful between entries.
- **Does the name still fit?** "Fan/Friction" puts friction first, and the product now leads with the log. A name change is under consideration.
- **What is the final event threshold?** About 1,000 attendees is the working number. Check how well public listings cover events at that size before settling it.
- **Can we show tweets on v1's public-data rule?** The X API is paid and restricted. Embedding a few specific posts may work differently from pulling feeds; check before building.
- **How relevant is gridlock outside LA?** The goal is nationwide and eventually global. LA's event overlaps and traffic may make friction unusually vivid there. Other cities may need friction to lean more on crowd fight than on gridlock.
- **Logging past nights.** Can someone add nights from before they had the app, with friction computed from public data for those dates?
