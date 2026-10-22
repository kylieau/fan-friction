# Research brief: capturing the events the feeds miss (school box-office games, AXS and DICE concerts)

Status: open. Written Oct 21, 2026 (evening) by Claude Code, from Kylie's ask the same evening, at UCLA's exhibition against Cal Baptist ("I want to make sure that we are capturing these types of events. I want you to research this really thoroughly... why did we rule out AXS?"). Run the same evening by a Claude Code research agent that can browse; the answer is `event-capture-alternatives-answer.md`. Kylie's stated fallback, not her preference: adding an event from a team's or artist's page with the defaults already filled in, selecting rather than typing.

## The two misses that prompted it (Los Angeles, Oct 21–22, 2026)
1. UCLA men's basketball vs Cal Baptist, exhibition, Pauley Pavilion, Oct 21, 7 pm: sold only through UCLA's own box office (ucla.evenue.net, Paciolan); ESPN's schedule JSON carries no college exhibitions; Ticketmaster has UCLA's Oct 27 exhibition but not this one.
2. Chappell Roan, "The Super Graphic Spectacular", Shrine Auditorium (6,300), Oct 21 and 22: sold on AXS; absent from Ticketmaster.

## What to research
For each candidate source: what it covers (does it carry the two events above, checked on its public pages), how it is accessed (public page, documented API, key, ICS or RSS), what its terms say about automated reading (the clause, quoted, with its URL), cost (🚩 anything paid or needing a card), freshness, and how it would plug in. No signups, logins, purchases or paid services; a page that returns 403 or a bot wall is reported, not worked around.

A. School sports sold through a school's own box office: Sidearm Sports sites (ICS calendar export, RSS, schedule JSON), WMT Digital sites, NCAA.com, conference calendars, Big Ten+, Paciolan/evenue storefronts, schema.org JSON-LD on team pages.
B. Concerts sold on AXS, DICE or a venue's own site: SeatGeek's API (does it list AXS-sold primary events; terms, attribution), Bandsintown's API and terms, JamBase, Songkick, Setlist.fm, Eventbrite, Tixr, DICE, See Tickets, venue sites' own calendars and JSON (the Shrine, Goldenvoice), schema.org JSON-LD and whether reading it differs legally from scraping, Google's event search or Knowledge Graph.
C. General aggregators alive in October 2026 with a free API and permissive terms (PredictHQ, AllEvents, Eventful).

End with: a ranked recommendation of at most three sources worth adding, the single cheapest step that would have captured both events, and what no public source captures, so a hand-add from a team or artist page is the only way.

Constraints from the repo's rules: v1 uses only publicly available data; every new cost is flagged 🚩 and waits for Kylie's OK; the five sellers whose terms forbid automated reading (AXS, DICE, Insomniac, Goldenvoice, Framework) stay unlisted and unasked (Kylie, Oct 19, 2026).
