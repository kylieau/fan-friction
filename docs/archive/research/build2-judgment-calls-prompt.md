# Prompt: six judgment calls from build 2 (Oct 10, 2026)

_Kylie runs this on an outside model, then records her calls. Save the answer as `docs/archive/research/build2-judgment-calls-answer.md` beside this file._

Status: closed, decided in docs/reviews/build2-judgment-call-decisions.md, Oct 11, 2026

---

I'm the product owner of Fan/Friction, a personal log of live events people attended (sports and concerts), with a "friction" read stamped on each night: how much that night's crowd was fighting other crowds and gridlock in the same city. Think Letterboxd or Strava for games and shows. It is not a game, a social network, a traffic app or a ticket seller. Users are capable; the app says less rather than more, and never shows explanatory banners or fine print.

Some vocabulary. An **event** is one game or show. A **night** is one city on one date (the word "night" is used only when the date's events start after 5 pm; otherwise "today", "day"). The **read** is the night's 1–10 score, always shown with tenths (7.4) and a word (Chill, Mild, Spicy, Brutal, Cooked). An event's **friction** is its own fight for a crowd, shown as one word on a ladder: Unopposed, Squeezed, Swamped, Steamrolled. The log is called **My Stubs**. **Following** is who you see; **Followers** is who sees you. A friend's feed line is dated by the event, never by when it was posted, and never says where someone is right now.

A developer just built a large batch of approved changes and made six judgment calls where my notes didn't settle the point. I want to decide each one. For each call, help me think it through: what a Letterboxd- or Strava-level user would expect, what keeps the app's voice (a quiet personal log), and whether the alternative is worth the extra screen space or wording. Push back if you think the built version is wrong. Then give me a recommendation per call.

## Call 1: the wording of friends' feed lines
The Following tab groups friends' activity per event: the event and its read sit on top as a header, and the friends who are planning to attend or who attended are listed under it.

- **Built:** each line keeps the earlier approved sentences, with the event named once in the header, so the lines read "Test A is planning to attend" and "Priya attended". When the same event is also in my own plans or log, the line adds "· you too".
- **Alternative (the mock I approved showed this):** compressed lines with small avatars, like "Jordan + 2 going", "Maya + 2 were there", "Sam R. going · you too".
- **Tension:** my written rule says the lines are "{name} is planning to attend {event}" and "{name} attended {event}", unchanged. The mock compresses them. "Going" is shorter and friendlier; "is planning to attend" is the exact wording I locked earlier and avoids implying someone is somewhere right now.

## Call 2: "I was there" on the event page, "Attended" on the date page
On Oct 9 I locked the words Attend / Attending / Attended for the event page and the date page (the page listing every event that night, where you can mark the one you went to). On Oct 10 I approved a new event page design: the hero button is "I was there" (full width, blue), with a quieter "I watched it" text action under it, and the logged states read "✓ You were there" or "✓ You watched it".

- **Built:** the event page follows the Oct 10 design. The date page still says Attend / Attended, because the Oct 10 note only described the event page.
- **Alternative:** change the date page to match ("I was there" / "You were there"), or change the event page back to "Attended" and put "I watched it" beside it.
- **Tension:** two words for the same act on two screens one tap apart. Which pair should win, and should "I watched it" exist on the date page too?

## Call 3: do watched events count toward your venue count?
"I watched it" logs a game or show you followed on TV without attending. My Stubs stays a diary of nights out, and watched entries sit in the same list with a small TV icon and the word "Watched". The Stats tab shows "N events · N venues · N watched".

- **Built:** watched events count as events and keep their friction stamp, but do not count toward "venues" (you weren't in the building).
- **Alternative:** count them toward venues too, or exclude them from the events count as well and show "watched" only as its own number.
- **Tension:** my note said "watched entries likely shouldn't count toward venues; flag if unclear". Also: should "Fans with you" (see call 4) include watched events? Built: no.

## Call 4: where "Fans with you" and "Biggest crowd" get their numbers
The Stats tab has a "Fans with you" figure (the crowds in the buildings you were in, added up, shown as "67k") and a gold "Biggest crowd" badge naming the event with the largest crowd. Entries didn't store a crowd before.

- **Built:** when you mark an event from now on, the crowd on file at that moment (the announced or estimated figure) is saved onto the entry and never changed. Entries marked before Oct 10 carry no crowd and are left out of both numbers. The stat is hidden until at least one entry has a crowd.
- **Alternative:** look the crowd up live from the catalog each time (the number could move as estimates update, and hand-added entries would still have none), or backfill old entries once from the catalog.
- **Tension:** a frozen number matches the app's stamp idea (what was known at the time) but means my own older stubs show nothing until something backfills them. A live lookup is more complete but less like a stub.

## Call 5: "+fees" on the ticket price line
On an upcoming event page there is a quiet link row to the event's Ticketmaster page. Where Ticketmaster publishes a starting price it reads "Prices from $48+fees ›"; where it doesn't, "See tickets on Ticketmaster ›". US law (the FTC's fees rule, California SB 478) requires all-in prices wherever ticket prices are shown; a free, unmonetized app is arguably outside those rules, and we have a standing blocker to revisit this before any monetization. Ticketmaster's data sometimes labels a price range as already including fees.

- **Built:** when Ticketmaster says the range already includes fees, the line drops "+fees" and reads "Prices from $48 ›". Otherwise "+fees" stays.
- **Alternative:** always write "+fees" (simpler and never under-claims), or always write "from $48" with no suffix, or show no number at all and only "See tickets on Ticketmaster ›" until the all-in question is settled.
- **Tension:** honesty versus consistency, and whether showing any number is worth the compliance exposure now.

## Call 6: keep "Local competition" under "Up against"?
The event page's friction section is now "Up against": a violet label, the friction pill starting a sentence ("Swamped by Mac DeMarco +3"), one reason line, and a short list of the rival events starting within the hour, each with its venue and crowd figure. Below it, the older "Local competition" card still exists: a timeline of bars showing when each event that night runs, with distances in miles.

- **Built:** both stay, Up against first, Local competition under it. The app has a rule never to delete existing features without my say.
- **Alternative:** remove Local competition (Up against covers the same question in fewer pixels), or fold its one unique fact (how long each event runs and whether the hours overlap) into Up against, or keep both.
- **Tension:** two cards answer "what was this night fighting?" back to back. The timeline is the only place that shows duration overlap and distance; the rival list is the one I approved.

## How to answer
For each call, one or two paragraphs of reasoning, then a one-line recommendation. Finish with a summary table I can paste back to the developer: call number, my decision, and any exact wording. Where you recommend new wording, keep it short and plain; the app never explains itself.
