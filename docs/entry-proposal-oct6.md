# Proposal: the entry you can edit, and nights you type in yourself

Oct 6, 2026. Step 1 of `docs/big-picture-plan-oct6.md`. Nothing here is built. Kylie approves, then it is built in small commits.

## The problem
The log is the product, but an entry today is one tap. Your own migrated nights carry an outcome, a starter, a promo and a note; nobody else can write any of those, and nothing can be changed or removed. And only a listed event can be logged: a club show, an away game or a festival the catalog never heard of has no way in.

## 1. An entry gets its own page
Today a You row opens the date page with that event selected. Proposed: a You row opens **the entry**, a page about your night.

Top to bottom:
- Back to You.
- The title, the date, the venue, the city. Away or Neutral site when it applies.
- The read: the stamped score and word, with the same tile the date page uses. "Nearby read" when the room is under the floor and the score comes from the big events that night. No tile when there is no read (a 2014 show, a night in a city with no data).
- **Your fields**, one line each, the same `FactList` look. Empty fields are not shown; an "Add" row at the end opens the form. Tap any line to edit.
- "See the night ›" to the date page, "See the event ›" to the event page (linked entries only).
- At the bottom, plain and small: **Remove from log**. One confirm sheet. Linked entries: this is the same as un-tapping Attended.

The event page keeps its Attended button. When Attended is on, the facts under the title become a tap target that opens the entry page, and a small "Your entry ›" sits under the button.

## 2. The fields
Per kind, so a concert isn't asked for a starting pitcher.

| Field | Game | Show, festival, broadcast, special | Who sees it |
|---|---|---|---|
| Outcome (the score) | yes; filled automatically once step 2 lands | no | people who can see your log |
| Starter | yes | no | same |
| Promo (giveaway) | yes | no | same |
| Notable (a moment worth naming) | yes | yes | same |
| Setlist (a link) | no | yes | same, shown as a "Setlist" link |
| With (who you went with) | yes | yes | **only you** |
| Note | yes | yes | **only you** |

Outcome, Starter, Promo, Notable and Note exist in storage today. **With** and **Setlist** are new. Entries are stored as a free-form record, so the account needs no database change. A photo stays out until storage is settled 🚩.

The form is one sheet: labels and inputs, one gold **Save**, no hint text. Editing never changes the stamp or the read; the no-results rule holds because the read never looks at these fields.

## 3. Typing in a night the catalog doesn't list
A **+** in the You header, beside the gear. It opens search first (the same team, artist, venue search Explore has, old venue names included). A listed night is one tap: Attended, then its entry page. Below the results, when nothing fits: **Add it yourself**.

That form:
- **What**: the title, as you'd say it ("Kings vs. Oilers", "David Gilmour").
- **Type**: Game · Show · Festival · Live broadcast · Special event.
- **When**: a date. Or, if you don't remember, a month or just a year (the storage already keeps rough dates; the row says "2014" or "Nov 2022").
- **Where**: the venue. Suggestions come from the venue table as you type; anything else is kept as written. Then the city, from the metro list, or **Somewhere else**.
- The per-kind fields from section 2, all optional.
- One gold **Save**.

What the app does with it:
- It is your entry and nothing more. It is **not** a catalog event: it does not appear on the map, does not move anyone's read, and is not pre-listed for anyone else. (Rooms under about 5,000 stay off the map; a hand-typed night has no verified size, so it is treated as under the floor.)
- If the date and city have a read, the entry takes that night's nearby read and says so. Otherwise it has no score, like the 2013–2015 concerts.
- Away games work the same way: a Game in another city, marked Away.
- A hand-typed night can be re-linked later if the catalog gains that event (a small "Is this it?" when a match appears). Not in this step; the field is left for it.

## 4. What this settles, if Kylie agrees
Building this adopts the review's reading of the logging bar: **anything can be logged by hand; about 1,000+ is what the app pre-lists; 5,000+ feeds friction.** `AGENTS.md` and `docs/direction.md` say "about 1,000+ can be logged." If she locks the review's wording, those two lines change to match. This is the open "logging-threshold sentence" in `BACKLOG.md`.

## Not in this step
Photos 🚩. Automatic scores (step 2). "Is this it?" re-linking. Editing from the map or the date page. Anything on the share card or the profile beyond what the facts already show. No notes or "With" ever leave your own screen.

## Questions for Kylie
1. A You row opens the entry page instead of the date page. Yes?
2. The field list: anything to add or cut? "With" and "Note" private, the rest visible to approved followers?
3. "+" in the You header for adding a night, search first, then "Add it yourself"?
4. Lock the logging bar as the review words it (anything by hand; 1,000+ pre-listed; 5,000+ feeds friction)?
