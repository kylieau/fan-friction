# Build 6: audit against the notes and the mockup pack

Started Oct 17, 2026 (Claude Code, Fable 5.1), after Kylie attached the Oct 17 notes (`build-notes-6.md`, Q15 and Q16 added) and the mockup pack (`mockups/MANIFEST.md` plus 30 boards). This is a record, not a stop point: one row per item, updated as the correction run goes. "Built now" cites `file:line` on the commit named in the row.

**Rules applied.** The notes text wins over any board. Two points are DECIDED (Kylie, Oct 17): the ring sits after the crowd figure on line 1 (M1-02 panel C), and the occasion tag is right-justified at the venue line's right edge. Boards marked "partly outdated" in the MANIFEST are read only for what the MANIFEST says still applies.

**The pack on disk.** `docs/build-6/mockups/` was not on disk when the run started. The 30 boards came in as attachments in the conversation, in the MANIFEST's alphabetical order; each was viewed and matched to its row before being saved under the pack name. The notes copy on disk was the Oct 16 version and was replaced by the attached Oct 17 one (diff: the Q15/Q16 rows, the DECIDED placement paragraphs in items 1 and 2, the item 1 mockup paths).

| Item | Notes ask | Mockups | Built before this run | Gap found | Fix | Remaining |
|---|---|---|---|---|---|---|
| 1 Friction ring and pill | Ring on rows after the number, line 1 (Q15); 12 px ring, one violet, dot 3.2 / 2.0 / 0.9; Unopposed no ring on lists; event page Crowd card and Up against: pill plus 16 px ring at its left; tag row drops the pill; one violet tint; VoiceOver sentence in the row's name; helper tip "<word> by that day's lineup" | compact-r4 panel 1, pill-r1 B, M1-02 C, M5-04, M5-06 A, M5-03 (Crowd card only), M5-08 | pending | pending | pending | pending |
| 2 Occasion tag | Outlined word, day's top event(s) only, right-justified on the venue line (Q16); event page and chip card always show their own | M1-04, M3-R (tag rule only), occasion-r1 O0 style | pending | pending | pending | pending |
| 3 Local Competition | Gold bars, no ring or outline; quiet line "No other big events that day."; TBA band alone | localcomp-r1 B, M5-02 (bars: gold now) | pending | pending | pending | pending |
| 4 No "~" | Only the event page's full number and the map-key line | M5-05 | pending | pending | pending | pending |
| 5 Chip card | Pill, tag and by-line; by-line iff pill; the map dot carries nothing | none (M5-02, M3-R show the dot only) | pending | pending | pending | no mockup, needs Mosaic board |
| 6 Stubs | One timeline, month bands only, a today line, rows with no crowd/ring/tag, empty past "No stubbed events" + "Browse today in Explore ›" with no button, floating button hidden only when nothing on either side; header at the top and the past above by scrolling up (Kylie, Oct 17) | M2-01 panel C, M2-02 (pill and empty ends) | pending | pending | pending | pending |
| 7 Following | Same timeline for Friends; Faves \| Friends sub-tabs stay (Kylie, Oct 17, overriding the notes' "lists move to Settings"); Attending / Attended wording; no friction mark | none for the timeline | pending | pending | pending | no mockup, needs Mosaic board |
| 8 Settings | Avatar on You only opens a side panel of dropdowns; profile card; old addresses redirect | none (M4-01 is the "today" reference) | pending | pending | pending | no mockup, needs Mosaic board |
| 9 Badges and codes | Sport icon top-left; college sport letters on a clash; no W; set-aware badge; codes 9b/9c; id-keyed dedupe 9d | badge-r1 (evidence only) | pending | pending | pending | no mockup, needs Mosaic board |
| 10 Doubleheader, rank, size unknown | "Doubleheader Game 1" / "Doubleheader, Game 1", chip DH1; rank in the title only from a source; "Size unknown" stays | M3-04 B, M3-08 B, M5-07 A | pending | pending | pending | pending |
| 11 Run labels | HOLD; "The evening" heading | none | pending | pending | pending | pending |
| 12 Ticket links | Hidden; code and ids kept | none | pending | pending | pending | pending |
| 13 Build 5 fixes | B5-02, B5-04, B5-05, B5-07, B5-08 | none | pending | pending | pending | pending |
| 14 City data | No change | none | pending | pending | pending | pending |
| 15 More dates, Faves home | Confirm wording; nothing built (Kylie, Oct 17: ignore) | none | pending | pending | pending | pending |
| 16 Docs | Stale docs corrected | none | pending | pending | pending | pending |
