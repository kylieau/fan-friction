# Item 6 · What A Plan Is (H11i) · Round 2, Oct 30

EXAMPLE data only. Rendered in the live 7.1 clone (3071) at 390×844, 2x, with the real classes. Nothing in the repo changed.

## Your Note (Quoted)
- **H11i** (you picked "Defer it"): "i'm not even sure what \"plans\" means?? fine to defer/but also tell me what you mean (or mockup if its the only way to demonstrate)"

## The Short Answer
**A plan is an upcoming event you marked Attending, Watching, or Interested.**

When the date passes:
- **Attending** becomes an Attended stub in Activity.
- **Watching** becomes a Watched stub.
- **Interested** just lapses. It never becomes a stub (your Oct 11 call).

You can see all of this in `personalLog.ts`, where past plans are settled.

## Where Plans Show
- **Upcoming, in Your Plans.** `01-what-a-plan-is.png`: rows in date order, each led by its status (ticket, TV, or bookmark mark), in a 3.5-row window. The definition card at the top exists only to answer your question. I'm not proposing it as a feature.
- **The event page.** `02-event-page-add-seat.png`: the "Attending · Edit" status chip is the plan.
- **Your Faves rows.** Events you've planned carry the small status mark after the title.

## Where Add Seat Would Go
- **Today.** `03-existing-edit-sheet-seat.png`: an Attending plan can already hold a seat. Tap Edit, then "+ Add seat" in the sheet, and the seat carries into the stub after the date.
  - The H11i card said no Add Seat exists for plans. That's only partly right, so I'm correcting it here.
- **New.** `02-event-page-add-seat.png`: a 48 pt dashed-outline "+ Add Seat" row sits right under the status chip, on Attending plans only.
  - It would open the same seat picker.
  - Once a seat is saved, the row would read like "Sec 104 · Row 12 · Seat 7 · Edit".
  - Alternative spot: the same row on the Activity stub card after the event. Not drawn.

`board.png` has all three frames.

## Lean (Not confirmed)
Keep H11i deferred, as you chose. If it comes back, the event page row in frame 02 is the place for it, because the seat is the one detail people add before they go. Watching and Interested plans never show the row.

## Flags (Existing, Not Changed)
- In the Edit sheet, the "+ Add seat", "+ Add tag", and "+ Add cost" pills are 32 pt tall, and the Attending, Watching, and Interested buttons are 40 pt. All are under 44.
- The sheet's scrim and its blue Done button are existing dark fills. They tripped the automated dark-fill check in frame 03 and are left as built.

## Open Questions
1. Is a seat worth a full row on the event page, or is the two-tap sheet enough?
2. Should "plan" ever appear as a word in the UI? Today it shows only as "Your Plans". The statuses carry the meaning everywhere else.
3. Should Add Seat also appear on the Activity stub after the event, for people who log the seat late?

## Checks (Every Frame)
EXAMPLE badge present. No banned words or em dashes. No new text under 11 px. No new targets under 44 pt. No clipped text or overflow. One dark-fill hit, the existing sheet scrim and Done button in frame 03.
