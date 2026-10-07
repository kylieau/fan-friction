# Events the read can't size yet

Started Oct 6, 2026, at Kylie's request, when the reconstructed past-night reads
landed. A running list of real events that are **listed in the app but feed
nobody's friction**, why each one can't be counted, and what would have to exist
before it could be. Add to it whenever a new city turns one up; don't delete a
row until the gap is actually closed.

This is not a list of bugs. Every row below is the app behaving correctly under
a rule Kylie set: **never invent a crowd number.** An event with no published
count and no building capacity has no size, and something with no size cannot
move anyone's night. The cost is that a few genuinely enormous crowds currently
read as nothing at all.

## Not on this list: rooms under the floor

Three shows on Oct 4, 2026 (Chat Pile, Sammy Rae & The Friends, a Candlelight
tribute) sit in rooms between about 1,000 and 5,000. They are pre-listed and
logged but do not feed friction, and that is the locked rule, not a gap:
anything can be logged by hand, about 1,000+ is pre-listed, 5,000+ feeds
friction. They are mentioned here only so nobody mistakes them for the problem.

## The actual gap

| Event | Date | Why it can't be sized | What would close it |
|---|---|---|---|
| **Los Angeles Marathon** | Mar 8, 2026 | A route, not a building, so no capacity. ~27,000 *registered runners* is not a crowd figure, and spectators along the course were never counted. | Both a size rule and a formula change — see below. This is the hard one. |
| **Union Station World Cup Fan Zone** | Jun 26, 2026 | Free, registration-based. Reuters reported "thousands" and nothing more precise was published. | A figure from the organiser, the city's permit, or a transit count for the day. |

Resolved, kept as precedent:

- **FIFA Fan Festival**, LA, Jun 12, 2026. Sized at ~25,000 a day, estimated:
  LA Magazine's 100,000+ over the Jun 11–14 opening weekend, averaged over the
  four days. Kylie, Oct 7, 2026: a per-day average of a multi-day total is fine
  when it is labeled estimated.
- **NY Comic Con**, Javits, Oct 8–11, 2026. ~62,500 a day, estimated: RX's
  250,000+ for 2025 over four days. Listed beside the feeds, not as a seeded date
  (a seeded date replaces the feeds for that day).

**What sizing them showed:** both now feed friction, and both barely move their
nights. They open hours before the evening games, and an event with no building
reaches Crowd fight but not Gridlock. Comic Con loads the 7 train and the West
Side exactly as an MSG night does, and Gridlock can't see it. That is the same
gap as the marathon below, in a milder form.

- **Seven Lions at Waterfront Park**, San Diego, Aug 22, 2026. The research found
  no count and no setup capacity, so it was first marked not-counted. But our own
  venue table already had Waterfront Park at 15,000 for a standing concert
  (CRSSD uses the same single-stage setup), which is a real published figure.
  It counts. **The lesson: check the venue table before giving up on a size.**
- **Canadiens outdoor watch party**, Montreal, May 25, 2026. Big watch parties
  count as events of their size; this one has no figure, so it will land on this
  list when Montreal is built, not be excluded by rule.

## Why the marathon is the hard one

The marathon has two separate problems, and fixing only the first makes the app
*worse*, which is why it hasn't been touched.

1. **No size.** As above.
2. **The formula would use it backwards.** Gridlock only reads events that sit
   in a venue (`src/data/formula/gridlock.ts`, the `place.type === 'venue'`
   filter). A route event cannot contribute to Gridlock at all — and closing
   roads for a morning is the one and only thing a marathon does to a city.
   Meanwhile Crowd fight has no such filter, so the moment someone gives the
   marathon a crowd number it would start competing for *fans* against a Lakers
   game, which is not what a road race does to anybody's evening.

So a crowd figure alone would make the marathon register in exactly the wrong
reason. It needs a route-aware Gridlock rule first: which corridors a closure
takes out, for how long, and which venues sit inside or beyond it.

## Why this matters more in New York

New York is the next city, and its biggest crowd days have no buildings at all:
the marathon, the Thanksgiving parade, the Pride march, New Year's Eve in Times
Square. The venue-table research prompt (`docs/new-york-venue-table-prompt.md`)
already asks for these as dates rather than venues, so they will arrive with the
city. Unless something changes, every one of them will read as a quiet night.

A related New York question is the Javits Center: Comic Con puts six figures on
the West Side over a weekend, but a convention hall is not a seated room. The
venue prompt asks the researcher to report its per-day attendance and say
whether they'd treat it as a venue. That answer belongs here when it comes back.

## Possible approaches, none decided

- **Festival grounds in the venue table.** Rooms get a capacity by setup; open
  grounds could too, where a published figure exists (Randall's Island, Liberty
  State Park, the Coliseum lawn, Grand Park). This closes the fan-zone rows
  without inventing anything, and it is the smallest change.
- **A footprint-and-density estimate.** Standard practice for crowd science, and
  it would cover almost everything here — but it manufactures a number, which is
  against the rule as written. It would need Kylie to decide that a labeled
  estimate is acceptable for this class of event, the way labeled estimates are
  already acceptable for venue capacities.
- **Transit counts as a proxy.** Already used for car share per venue. A fan
  zone at Union Station is the clearest possible case.
- **A route-aware Gridlock rule.** The real fix for marathons and parades, and
  the largest piece of work. Needs the closure map, not just the crowd.

## Rules that constrain any fix

- Never invent a crowd number (AGENTS.md).
- Label every number announced, reported or estimated. Never a bare count.
- **A multi-day total may be averaged into a per-day figure, labeled estimated** (Kylie, Oct 7, 2026). An earlier version of this page said the opposite and called it a rule; it was a Claude-written check note (`docs/research-past-dates/gap-followup.md`), never Kylie's decision.
- Scheduled starts, never actual.
- Big official watch parties count as events of their size
  (`docs/overlap-and-date-rating-v3.md`), when a size exists.
