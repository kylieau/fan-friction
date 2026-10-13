# Build 5 notes

Three items: concerts that Ticketmaster misses, regional events, and Add to calendar. Each item gives what we do, why, and the options we turned down.

## 1. Concerts Ticketmaster misses

Scope: shows of 5,000 or more people, any genre, that are not on Ticketmaster.

### Sources, in order

**(a) AXS public venue pages, first.** We start with the AXS pages for the big rooms we already track. Crypto.com Arena, T-Mobile Arena and MGM Grand sell on AXS, so this is the biggest gap and the best return for the work.

**(b) SeatGeek official API, as the catch-all.** It needs only a free client ID. It picks up shows at rooms that are not on AXS or Ticketmaster.

- Required test event: **Pawsa** at the Rio Vista lot in LA. It is sold only on DICE, so it is a good test of whether SeatGeek finds DICE-only shows. Sources disagree on the address (1951 vs 1485 Rio Vista Ave); this must be resolved before the event is stored.
- If SeatGeek misses Pawsa, we fall back to **DICE public event pages** for shows like it.

**(c) A hand-kept festival and promoter list.** Big festivals and promoters are few and stable, so a short list we keep by hand covers them reliably:

- Festivals: HARD, Nocturnal, Escape, Ocean Way, Lollapalooza, Riot Fest.
- Promoter sources: Framework's WordPress feed; Goldenvoice and Insomniac pages. Insomniac tickets are sold through Front Gate.

**Dedupe:** every show from these sources is checked against Ticketmaster so the same show is never counted twice.

### Rejected

- **Eventbrite:** its public search API is gone.
- **Resident Advisor scraping:** against their terms.
- **DICE API:** partner-only, so we can't get access.
- **Resale-only sources:** they miss free shows and shows with non-transferable tickets.

### Undecided

- **JamBase:** possible paid trial. Not decided either way.

### Pop-up sizing

For one-off venues (lots, fields, temporary sites):

- **80% of stated capacity** by default.
- **95%** when the show is sold out or has a waitlist.
- **Festivals are sized per day**, not as a whole weekend.
- **No stated capacity:** use the best past edition's attendance.
- **Nothing to go on:** mark it **"unsized"**. It is shown in the app but not counted toward scores.

Why: stated capacity is the only firm number we usually have, and pop-ups rarely fill completely, so we scale it down unless there is evidence the show sold out.

Rejected:

- **Area ÷ 7 sq ft per person:** a guess, not a sourced figure.
- **Assuming every pop-up sells out:** overstates most shows.
- **My earlier flat 90%:** doesn't separate sold-out shows from the rest.

## 2. Regional events

**Rule:** an event within **60 miles** of the metro's existing center point counts as local. 60 miles is a starting value, not a sourced figure, and can be changed.

**Farther big events** go in a simple **"Regional" list**: name, date and distance only, with no score.

Why: this keeps scores honest (only events whose crowds plausibly affect the metro) while still showing big nearby events.

### Rejected for now

- **Corridor tier:** would need routing, travel-window timing and counting unique attendees, and attendance for most of these events is unknown anyway.
- **CSA boundaries:** make Coachella local to LA and drop Sonoma.
- **DMA boundaries:** drop Palm Springs.
- **City hall as the center point:** we keep the existing metro center.
- **Drive time:** circular, since traffic depends on the events we're measuring.

### Venues newly in range

These need sourced capacities, or they stay unsized:

- NOS Events Center
- Glen Helen
- Sonoma Raceway
- BottleRock
- Texas Renaissance Festival
- Country Thunder (Wisconsin and Arizona)
- Dover
- Atlantic City

Gillette Stadium is probably already in as the Patriots' venue. Check before adding it again.

## 3. Add to calendar

Let the user export an event to their own phone or computer calendar. This is not an in-app calendar.

Feasible with two pieces:

- An **.ics file download**, which works with Apple Calendar, Outlook and most others.
- A **Google Calendar link** that opens a prefilled event.
