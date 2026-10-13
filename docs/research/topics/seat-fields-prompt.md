# Seat fields: does section, row and seat (plus GA, floor, pit) fit every room?

Status: open. Written Oct 13, 2026, advisor-approved. For any research model.

## Context
Fan/Friction is a personal log of live events people attended: sports and concerts, in any city, in the US and abroad. On a stub for an event you attended, you can optionally record where you were. Today that is one of **GA, Floor, Pit** and three free-text fields **Section, Row, Seat**, all optional. We want to be sure this does not restrict how people describe where they sat or stood, in any kind of room, in any country.

## What to research
1. **Room types.** For each, how fans and the venue actually name a location: stadium and arena levels and sections; theatres (orchestra, mezzanine, balcony, boxes); amphitheatres (pavilion, lawn, pool, boxes); suites and boxes with no seat number; standing room; bleachers and general-admission benches; courtside and rinkside; club and loge seating; festival areas, fan zones and VIP decks; racetrack grandstands and infield; ski-jump, golf and other open-site events.
2. **Countries and languages.** United States; Canada (including French labels such as section, rangée, siège, and Québec venues); Mexico (sección, fila, asiento, palco); United Kingdom and Europe (block, row, seat; stand, tier, gate, entrance); Japan; Australia.
3. **Ticketing apps.** How Ticketmaster, AXS, SeatGeek, StubHub and the main non-US ticketers (for example Eventim, Ticketek, Ticketmaster Mexico) structure a seat location in the ticket and in the order. Which fields they expose, with real examples.
4. **Edge cases.** A range of seats ("101–102", "A1-A4"), several rows, a seat that is a table or a booth ("Table 7, seat 3"), accessible or companion seating, standing "GA Floor B", a seat that changed on the day, a ticket with only a gate or entrance.
5. **Observed lengths.** The longest realistic value for a section, a row and a seat, so any cap is a sanity limit and never a fit to a form.

## What the answer must give us
- A **recommended field set**: names and labels (in plain words a fan would use), which are required (none, we think) and which are free text versus a short pick list, and whether a single free-text fallback ("Other: ...") is needed so nothing is ever forced into the wrong box.
- A recommendation for **GA, Floor and Pit**: keep, extend (for example Lawn, Standing, Suite, Box, Balcony), or replace, with the reason.
- **Observed maximum lengths** per field, with the example that sets each.
- A **one-line display format** for the result (today: "Floor · Sec 112 · Row 8 · Seat 4"), including how a name such as "Lawn" or "Suite 42" should read without a "Sec" prefix.
- Which locations are **really a place, not a seat** (a lawn, a pit) and how to say them.
- A short list of **rooms or event types where the current set breaks**, each with a concrete example from a real venue.

## Rules
- Use sources a person could check (venue seating charts, ticketing help pages, a screenshot description). Mark anything from memory as such.
- Do not invent venue facts. Where a source conflicts, say so.
- Keep the answer in plain words, with tables where a table is clearer. Save it beside this prompt as `seat-fields-answer.md` (a second model's answer takes a `-claude` or `-codex` suffix).
