# Fan/Friction: Product Review and Decisions

Oct 4, 2026 · Kylie Au

_Saved from the PDF "Fan Friction Product Review and Decisions." Text kept as written (tables condensed). It settles six questions raised in `docs/direction.md`, combining three AI reviews with Kylie's decisions. Where it differs from `direction.md`, this document is newer._

Fan/Friction stays a personal log of live sports and concerts, with a friction read stamped on each night. Friction is still computed from public schedules, never voted on, and there are still no leaderboards, open posting or public photo walls.

| Question | Decision |
|---|---|
| First screen | Open on the Map, with a card for your next saved night |
| Forecast to record | Live forecast until 24 hours after start, then a stamp; tap time doesn't matter |
| Compare tab | Keep the tab; compare nights and personal stats, never fanbases |
| Famous nights | Retitle "Were you there?" and use it to backfill the log |
| Size thresholds | 1,000+ starts the searchable list; 5,000+ feeds friction; smaller shows logged by hand |
| Biggest risk | The map becomes the whole product; answer it with accounts and saved logs |

## 1. First screen

New users land on the Map, with one personal card on top showing their next saved night and its current forecast. Someone who goes out a handful of times a year would otherwise open to an empty diary most of the year.

None of the comparable apps open on your own log. The social ones open on other people's activity, which Fan/Friction doesn't have. Flighty is the closest match: low-frequency, opens on what's coming up, with history one tab away.

| App | Opens on | Where your own log lives |
|---|---|---|
| Flighty | My Flights, upcoming first | Past flights and Passport stats, separate tab |
| Letterboxd | Popular films this week and friends' activity | Diary, a tab away |
| Beli | Friends' recent rankings and curated local lists | Your lists |
| Untappd | Discover, a map of what's nearby (one 2026 device, per the second review) | Profile |
| Setlist.fm | Mostly a website; the front page is the shared setlist wiki | Attended concerts on your profile |

Two details make the Map serve the log:

- **Every night on the map must look claimable**, with Save and "I was there" visible on each event. Otherwise new users will read it as a traffic app.
- **A saved night should turn into a "Did you go?" item in You once it passes.** The card no longer prompts "log last night," so this is how plans still become entries.

## 2. Forecast to record

The read stays a live forecast until 24 hours after the event's scheduled start, local time, then becomes the night's stamp. When someone taps "I was there" has no effect on the stamp.

**Why not freeze at the tap.** The read is a fact about the night; the tap only says it was your night. Freezing at the tap fails three ways:

- Two people at the same show could get different stamps, depending on when each tapped.
- A plan saved weeks early would miss events announced later, such as a playoff game or an added tour date.
- A night logged months later would be rebuilt from whatever the schedule shows then.

**Why 24 hours after start.** It works the same in every time zone and gives postponements and same-day cancellations time to settle. 4 AM local the next morning was the other option considered; either works.

**Two fields on every entry:**

1. **Forecast when you planned.** What the app showed when the night was saved, kept as it was. It is a record of what you saw, so it is never recalculated.
2. **The stamp.** What the night turned out to be. Together they give lines like "Planned for Moderate, turned out Heavy."

**One formula for every night.** When the formula improves, every stamp is recalculated so all nights stay comparable: your nights against each other, against someone else's, game against concert. The trade-off is that an entry's stamp can change after it was logged, so show when a stamp was last updated.

**Past nights.** A night logged after the fact is stamped from the saved schedule for that date. Nights from before the app began saving schedules are marked "reconstructed." Recalculating old stamps also depends on those saved schedules (see Open items).

## 3. Compare tab

Compare stays its own tab, rebuilt around comparing nights rather than fanbases. Comparison will need its own screen wherever it lives, so a tab is a natural home.

What it holds:

- **Your stats.** Cumulative counts and history, such as "You braved 4 Heavy nights this year," your most-visited venue, and your heaviest and quietest nights.
- **Your nights against each other.** This one versus your usual.
- **Any two nights side by side.** Including someone else's night or a famous night.
- **Dates for the same tour or homestand.** The forward-looking use: which of three nights will be calmest.

What goes: the "Which fanbase really shows up?" placeholder. It advertises the debate product even while it says "coming soon," so replace the copy now.

The line that holds: compare nights, never rank people. A light game feel in personal stats is fine; leaderboards and points still aren't. Watch that stats stay milestones to enjoy rather than a number to push up. Comparing against someone else's night needs accounts (section 6).

## 4. Famous nights

Famous nights becomes a backfill tool titled "Were you there?", with "I was there" as the main action on each night. As a list to read for its own sake, it would be friction talk detached from anyone's log.

It does two real jobs:

- **Backfill.** For someone who logs a few nights a year, filling in last year is what makes the log feel worth keeping. Letterboxd onboards people the same way: log films you've already seen.
- **A demo.** Before someone has entries, it shows what a stamp looks like.

How it should work:

- **Filters, not a hard rule.** The default view shows nights you could have attended. A filter brings back the rest, such as major street closures that can't be logged.
- **Personalize once there's data.** Show nights at venues, teams and artists you've logged, plus "on this day" from your own entries.
- **Hand-check every stamp.** These are showcase reads built on the least complete historical data, so a wrong one costs the most here. Verify every example before it goes in; one from another review couldn't be confirmed.
- **Stay off "worst night ever."** Framing the list as a contest invites the arguments the app avoids.

## 5. Size thresholds

The split holds: logging is about you, friction is about the crowd. A small show can be yours and feel the big nights around it without moving anyone else's read. The 1,000 floor now decides only what's pre-listed, not what can be logged, because a diary that refuses a favorite 500-capacity club show feels broken.

| Tier | Rule | What it does |
|---|---|---|
| Pre-listed | Venues of about 1,000+ capacity, plus venues added to the list by hand | Searchable and on the map |
| Feeds friction | 5,000+, one event or several close together that add up | Moves the read for everyone nearby |
| Manual entry | Anything else | Gets a read from nearby big events; moves no one else's |

**Clusters count.** Two mid-size rooms a few blocks apart can together equal one big event, so total the crowd within a short radius.

**Capacity, not attendance.** Listings rarely publish attendance, so the app keeps its own capacity table. Many figures will be estimates, and arenas differ between concert and sports setups.

**Coverage, roughly:**

| Event type | Coverage in public listings |
|---|---|
| Major pro and college sports | Close to complete |
| Arena and stadium concerts | Good; Ticketmaster and AXS cover most big rooms |
| Rooms of 1,000 to 3,000 | Patchy; split across DICE, Eventbrite, smaller ticketers and venue sites |
| Parades, marathons, street festivals, conventions | Missing from ticket listings; look to city permits and road-closure notices |
| Outside the US | Uneven |

The second review adds: Ticketmaster's feed is large but not complete; Bandsintown lists an artist's shows, not every event in a city; Songkick data comes through a paid partnership. So the app shouldn't promise that every 1,000+ show is listed.

**Public isn't the same as licensed.** Ticketing and setlist APIs have terms of use; Setlist.fm has been owned by Live Nation since 2011.

## 6. Biggest risk

The biggest risk is that the map quietly becomes the whole product and the log stays empty. Friction matters most before a night, while a diary is about after, and a handful of nights a year rarely becomes a habit.

Outside user testing isn't planned for now. The answer instead is accounts:

- **Saved logs in an account.** This also fixes a second risk: logs kept only on the phone are lost with the phone.
- **Viewing other people's logs.** This is what makes comparing your night with someone else's possible.
- **A built-in measure.** Once logs live in accounts, you can see whether people actually log, without running a separate test.

**Guardrail check.** Viewing other people's logs brings back part of the social network the app ruled out. A log is also a dated record of where someone was. Recommended defaults for v1: logs private, shared only by choice (by link or with approved friends, the way Flighty Friends works), and no public profiles or feed.

**Make entries worth making.** Give each entry private personal content alongside the stamp: final score (filled in automatically for sports), a setlist link, who you went with, a one-line note, an optional private photo.

## Open items

- [ ] **Look into archiving the schedule.** Each night, save a copy of every event your data sources list for the coming days. Public listings often drop events once they've passed, so without your own copy the app can't stamp a night logged months later or recalculate old stamps when the formula changes. It's a small nightly job; every day before it starts is a day that can only be "reconstructed."
- [ ] Confirm the lock time: 24 hours after start (current) or 4 AM local the next morning.
- [ ] Build the venue capacity table, starting with LA.
- [ ] Decide privacy defaults for accounts and shared logs.
- [x] Replace the Compare tab's "Which fanbase really shows up?" copy. Done Oct 5, 2026. The tab still says Coming soon. The words are now about your nights side by side. The rebuild is later.
- [ ] Hand-check every Famous night's stamp and example before publishing.
- [ ] Review the terms of use for each data source.

## Sources

- Flighty review, Going: home screen is My Flights, upcoming first
- Flighty Passport: flight history and stats
- Beli overview, UChicago Bite: home screen shows friends' rankings and local lists
- Setlist.fm and Live Nation, Ara: attended-concert profiles; Live Nation ownership since 2011

Untappd's opening screen and the API coverage notes in section 5 come from the second review and were not checked separately.

## Locked answers (Oct 4, 2026, after this review)

Kylie locked these after the review above. The review text is unchanged. The same answers are in `BACKLOG.md`.

| Question | Locked answer |
|---|---|
| Stamp lock | 24 hours after the scheduled start. Not 4 AM the next morning. |
| A night with several events | The 24 hours count from the last scheduled start time that night, whichever event is scheduled last. |
| Save / I was there | Event page only. The Map list stays as it is. |
| Famous nights | Keep the current stamps. Hand-check every stamp before any "Were you there?" version. |
| Schedule archive | Yes. Plumbing only. See `docs/schedule-archive.md`. |
| Product risks | Parked. Not a build step. |
| Privacy | Private by default. A log is shared only by choice, later. |
| Tweets from the night | Hold. Do not build until access and cost are verified. |

The archive does not show anything in the app. A night from before the first saved schedule is reconstructed, as section 2 describes. That word is not on screen yet. The open items above for the archive, the lock time, and privacy defaults are decided by this table. The Compare copy is done (see below). The venue capacity table, the Famous-night hand check, and the terms-of-use review are still open.

## Data foundation (Oct 5, 2026)

The data layer now keeps the two fields from section 2. A saved plan stores the forecast it showed, and that forecast is not recalculated. "I was there," after the lock, stores a stamp with the time it was last updated. The lock is the one in the table above: 24 hours after the last scheduled start that night. A stamp is marked reconstructed when no schedule snapshot covers the date. The stamp is still not on screen.

A room under about 5,000 does not change the read for everyone else. It can still take the night's existing score when a bigger event that night already has one. No new crowd number is made up. The logging-threshold sentence (about 1,000 in `docs/direction.md` and `AGENTS.md`, versus anything can be logged in section 5) is still open. This note does not close it.

## Map card and Compare copy (Oct 5, 2026)

The Map shows one card for the soonest saved upcoming night, in any city. Kylie decided this on Oct 5: the card does not follow the city switcher. The card says "Next saved night," then the same short name a map chip uses, then the date and the city, as in "Fri, Oct 9 · Boston." The whole card opens that night. The map stays on the city, zoom, and selection she had, and Back returns there. The event page looks the night up in its own city, so a saved night outside Los Angeles is not "Event not found." A forecast frozen at save stays on the plan and is not drawn on the card. Save and "I was there" stay on the event page. The Map list is unchanged.

Compare keeps the Coming soon card. The heading now points at your nights side by side. The Coming soon chip stays. Nothing else on that tab was added or removed.

## Home city (Oct 5, 2026)

Kylie locked this after the global next-saved-night card. Home is one city, kept on this phone only.

The first time the app opens, a picker asks "Where's home?" The line under the title is "Your map opens here. Change it anytime." Then the city list. The list is only cities that have event data. Today that is Los Angeles. The app does not guess. "Use my location" is a button inside that picker, and it runs only when tapped. If that spot is not near a listed city, home stays unset and they pick from the list.

After that, home lives in the city switcher. The home city has a small house icon. The accessible name is Home. "Set as home" shows only on a city that has events. Nothing about home is on the You tab. Looking at another city does not change home. The Map tab opens on home. The map does not move itself to a saved night.

The next-saved-night card stays the one from the section above: any city, the city is named, and the card is absent when nothing is saved. Home does not change which night it shows.

An empty You log can say "No nights yet. Find one on the map." The nights that shipped with the app still fill that tab, so the sentence shows only when the log is actually empty.

🚩 Copying home to another phone needs accounts. That stays out until accounts are built.
