# Activity Card, Round 3 (Nov 5, 2026): The Sheet's Review and With Rows, and the Pill's Words

Drawn in the headless phone (390 × 844) on the built R2a ticket (Chargers at Rams, Nov 1, a real stub on the test phone; friends from the dev-only pasted feed). The sheet rows and the pills are injected into the live page; no code changed. Kylie's asks, Nov 5: "1/ i want to see the mock of adding review and with to the sheet"; "3/ let's make the pill show the icon, one word that the dropdown has? or does that look like i am attending with friends.."

| Frame | What it shows |
|---|---|
| `01-sheet-with-review-filled.png` | The Stub it sheet with two rows added after Cost: **With** ("Sam R.") and **Review** (the note, as a tappable line that opens a text box). Same row shape as Seat and Cost. The sheet grows from 334 to 485pt. |
| `02-sheet-with-review-empty.png` | The same rows before anything is written: "+ Add who you went with", "+ Add a review". |
| `03-ticket-without-edit-link.png` | The ticket once the sheet owns those fields: the quiet "Edit" link under the note is gone, so "Edit stub" is the one place to edit. |
| `04-pill-a-eye-one-word.png` | Pill A: the eye and the dropdown's own word, "Friends" (111pt wide). The lock and "Private" for a private stub, the eye and "Anyone" for Anyone. |
| `05-pill-b-visible-to-friends.png` | Pill B, as built: the eye and "Visible to Friends" (175pt). |

## Lean (not confirmed)
- **Sheet:** add the two rows (frames 01 and 02) and drop the ticket's quiet link (frame 03). One place to edit, as the R2a frames drew it. Cost: the sheet grows about 150pt and gains two taps; a plan's sheet does not get them (a plan has no review or With).
- **Pill: A, the eye and one word.** The eye is what fixes her H11a misread: the old pill's people icon said "with friends"; an eye says "seen by". "Friends" alone beside "Attended" still reads as company for a moment, which is why B spelled it out. Lean A because the word matches the dropdown, it is 64pt narrower, and the eye carries the meaning; if she still reads "attended with friends" in frame 04, B is the safe pick.

## Round 3b (Nov 5, later): The Level Mark On Event Rows
Kylie, Nov 5: the ticket's pill is "fine for now" as the eye and one word; her lean is the levels' own icons (globe, people, lock) **if another visual solution blocks the false "attended with friends" read, and her main worry is the event rows on other pages**. The rows that carry the mark: Your Stubs (every stub and plan row, `StubRows.tsx`, through the status line "Attended · [icon] Friends"). Drawn on a real Your Stubs row (Chargers at Rams, Nov 1) with the mark injected, since the test phone is signed out.

| Frame | What it shows |
|---|---|
| `06-row-0-as-built-signed-in.png` | As built when signed in: "Attended · [people] Friends" inline on the status line. The misread lives here. |
| `07-row-a-eye-one-word-inline.png` | A: the eye and one word, inline, matching the ticket. Same slot, the eye instead of the people. |
| `08-row-b-own-icon-venue-line.png` | B: the level's own icon alone, grey, at the end of the venue line ("SoFi Stadium · [people]"). Off the status line, no word. |
| `09-row-c-own-icon-tag-venue-line.png` | C: the level's own icon and word as a small grey outlined tag on the venue line ("[people] Friends"), the Away tag's shape. Off the status line. |
| `10-built-sheet-personal-experience.png` | Built, for reference: the sheet's Personal Experience group (With, Review) after Cost. |

Not drawn: a mark in the row's top-right corner (it collides with the verdict tile on every row).

### Lean (not confirmed)
**C.** It keeps the levels' own icons, which she leans to, and moves the mark off the "Attended" line onto the venue line as a grey outlined tag, the same shape the Away tag already uses, so it reads as a label about the stub, not company. B is quieter but an icon alone needs learning; A is consistent with the ticket but keeps the mark beside "Attended". If she picks C, the ticket's pill can take the same icons (people, globe, lock) with its word, since the ticket has no "Attended · " in front of the pill.
