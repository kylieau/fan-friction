# Seat fields: answer (Claude)

Summary as pasted by Kylie, Oct 13, 2026. The full answer (display rules, the 12-venue list, source conflicts, the numbered source list) is in her other session and is still to add.

Status: closed, folded into a "Where" dropdown (Seat, GA, Floor, Pit, Lawn, Standing room) with Section · Row · Seat as free text under Seat (Kylie, Oct 13: incredibly simple), Oct 13, 2026. The six-field recommendation below was not built.

**Section, Row and Seat hold up. The GA / Floor / Pit choice is what breaks.** It mixes two separate questions: whether there was an assigned seat, and which part of the venue you were in. Real venues answer those independently:

- **A lawn isn't always GA.** Moonlight Amphitheatre has two types of seating, lawn and reserved, with several different sections in both, and for the lawn in the main amphitheatre area, they offer reserved lawn seating.
- **GA isn't always standing.** Bluestem sells general admission benches located along the back of the amphitheater.
- **A GA ticket can still have a section and rows.** At the MCG, the GA Seating heading on each event page lists the seating sections, for example Q1, and rows available to GA ticketholders.

**Recommendation**
- Replace the three-way pick with a "No assigned seat" toggle.
- Add a free-text **Area** field with suggestion chips: Floor, Pit, Lawn, Standing room, Suite, Box and so on.
- Keep Section (relabelled "Section or block"), Row and Seat as free text.
- Add one **"Anything else"** line for gates, aisles and tables.
- Keep every field optional.

Existing stubs migrate cleanly: GA becomes the toggle, and Floor and Pit become Area text.

**Why free text everywhere:** some tickets have more parts than any form expects. For example, FC Barcelona's tickets show Access (entrance to the ground) / Porta (gate into the facilities) / Boca (zone) / Fila (row) / Seient (seat). Japanese dome tickets also carry level, side, gate and aisle. Every ticketing schema checked stores section, row and seat as text, and allows several seats on one record.

**Observed longest values**

| Field | Longest observed | Characters | Suggested cap |
|---|---|---|---|
| Area | "Budweiser Right Field Roof Deck Standing Room" (Fenway) | 45 | 80 |
| Row (range) | "15−20列" | 6 | 24 |
| Seat (list) | "GA1, GA2, GA3, GA4" | 18 | 40 |
| Details | — | — | 140 |

The file also covers the display rules (including when to add "Sec" so that "Suite 42" and "Loggia Box 23" read naturally), a 12-item list of real venues where the current set breaks, source conflicts (such as the Phoenix Open's 16th-hole GA policy) and a numbered source list. AXS and SeatGeek field names, Eventim's printed labels and Ticketmaster Mexico's wording are marked as from memory because they could not be verified.
