# Fan/Friction tester-readiness review by GrokBot: October 7, 2026

**Author:** GrokBot (as Kylie identified it when she pasted it into Claude Code). The text says it was formed before opening either gap review, and that it reviewed `main` at `79ef441` (8:35 PM PT).
**Review produced:** October 7, 2026, after 8:35 PM PT (per the text below).
**Saved to the repo:** October 7, 2026 at 8:50 PM PDT (UTC−07:00), by Claude Code (Sonnet 5.5), from the text Kylie pasted into the session.
**Status:** Open. Findings and possible solutions are review input, not approved build instructions.
**What was changed on saving:** nothing in the text below the line. This review had no screenshots in the paste.

---

# Fan/Friction tester-readiness review (Oct 7, 2026)

**Scope.** This is an independent, read-only review of the seven tester tasks. I didn't edit the repo, install anything, commit, write to an account, or build fixes. I formed these findings before opening either gap review.

**Code reviewed.** `main` at `79ef441` ("docs: sync memory handoff state", 8:35 PM PT).

**Browser run.** A signed-out, isolated incognito profile on the live site, https://fan-friction.vercel.app. The window was a narrow column of about 390 px, not a true 390×844 device. I used throwaway local entries and cleared them afterward.

**Evidence labels.**
- **[Observed]** means I saw it in the browser.
- **[Code]** means I read it in the source (file:line).
- **[Untested]** means it's an assumption or I couldn't reach it.

> Signed-out local tests prove only that this one browser kept the data. They do not show that account sync works. Sync, sign-in, Friends, Stats with an account, Share, Export, and real-device touch were not tested.

Tester ratings are evidence, not something to tune the formula toward. This file contains no personal tester information.

---

## Biggest risks for the interview

1. **Imported nights may show a bare number.** [Code, Untested]
   - Imported rows aren't linked to event records (`build-reconstructed-reads.md`), so tapping one opens `/entry/<id>` (`YouScreen.tsx:405-408`).
   - That page shows only the number and "Nearby read…" (`ManualEntryScreen.tsx:67-71`). There's no reason line, crowd, weather, competing events, Compare link, or link to the date page.
   - The interview's main question ("your read vs the app's") depends on this screen. The import script is private, so I couldn't confirm what the import actually produced.
2. **The Attended button deletes an entry without asking.** [Code]
   - Tapping the pressed Attended button on an event or date page removes the entry, including its Review and With, with no confirmation and no undo (`EventScreen.tsx:151`, `DateScreen.tsx:284-285`, `personalLog.ts:445-449`).
3. **Mistakes can't really be corrected.** [Observed, Code]
   - Edit only reopens Review and With (`EntryLayer.tsx:18-75`).
   - A wrong date, title, or venue means removing the entry and adding it again.
4. **The reads use words testers haven't been taught.** [Observed]
   - Examples: "STAMPED", "FORECAST", "Formula v4 · locks…", "pulls on three other crowds", "seats in a fight".
   - Badges like "4.3 SPICY" and "— QUIET" have no key.
5. **Imported nights may duplicate.** [Code]
   - An unlinked imported night doesn't show as Attended on its event page (`personalLog.ts:161-163`), so tapping Attended creates a second entry.

---

## Task table

| # | Task | Status | Evidence |
|---|---|---|---|
| 1 | Open the log and recognize their nights | **Needs help** (signed-out run); **Untested** with a real imported log | [Observed] Nothing is called "log." Nights live under You → Events. A fresh install shows "No events on this phone. Sign in to see yours, or find one on the map." There's no demo or tester path. [Code] Signing in returns to `/you` (`account.ts:91-93`). The account copy and the phone copy are merged (`personalLog.ts:121-139`), newest first by month (`YouScreen.tsx:116-129`). The brief says "Your nights" and "Add a night," but the app says "Events" (`YouScreen.tsx:190`) and "Add an event" (`YouScreen.tsx:144`). See risks 1 and 5. |
| 2 | Find and log a listed event, including one outside home | **Works, with friction** | [Observed] I got to New York through the Area dropdown. Tapping an event opens the date page, not the event page. Past and tonight's events show the button reading "Attended" before it has been tapped. Future events go Attend → Attending, and a future plan doesn't appear in You → Events, only on the Home "Next saved" card. [Code] Add-screen search covers only the home city (`AddEntryScreen.tsx:45,58`). On a date with several events, the gold button opens a picker (`DateScreen.tsx:289-292`). For today, the date page says "Attended / Stamped" while the event page says "Attend" (`DateScreen.tsx:95,143`; `EventScreen.tsx:109`). An `/event/<id>` link for a non-LA event without `?metro=` shows "Event not found" (`EventScreen.tsx:57-60,89-101`). [Untested] The catalog query has no row limit (`catalogSource.ts:24`). Supabase caps results at 1,000 rows by default, so big cities could silently drop events. |
| 3 | Add an unlisted game or show | **Works** | [Observed] The path is You → + → "Add it yourself." Save turns on once What and When are filled, but the disabled Save already looks bright yellow. [Code] Required fields are title, full date, and sport for games (`AddEntryScreen.tsx:142`). There's no duplicate check and no future-date guard. Every hand-added night is treated as a small room (`personalLog.ts:277`), so dates without hand-seeded events (anything after Oct 6) show **no read** (`read.ts:421-423`). An event in another city is labeled "Away" (`:280`). Ticking "Big event" writes to the shared `suggested_events` table (`suggestions.ts:20`). |
| 4 | Correct a mistake and remove an entry | **Correct: Blocked** for date, title, and venue. **Remove: Works.** | [Observed] Edit offers only Review and With. "Remove from log" asks Keep / Remove first. A logged event page shows both "Attend" and "Remove from log." [Code] There's no undo anywhere. See risk 2 for the deletion without a prompt. [Untested] With two signed-in devices, an entry deleted on one comes back from the other device's saved copy (`storage/index.ts:61-63`). A stale open tab overwrites newer changes (`supabaseStore.ts:136-145`). |
| 5 | Add personal details, reopen, find them | **Partly works** locally. Sync is **Untested**. | [Observed] Only Review and With exist; there are no seat, personal rating, or photo fields. Both survived a reload and reopening the tab in the same browser. [Code] Signed-out data is kept in localStorage under `fan-friction:your-nights` (`localStore.ts:93,184-186`). Signed in, Review goes to `entries`, which approved followers can read (`supabaseStore.ts:51-52`). With goes to the owner-only `entry_notes` table (`:148-154`). **Signing out wipes this browser's copy** (`personalLog.ts:141-147`). |
| 6 | Understand what the reads describe | **Needs help** | [Observed] Badges have no key, and the jargon is listed under risk 4. The "How estimates work" card is long. "Also on 5.3 SPICY" isn't explained. "Concerts" in one place doesn't match "Type: Show" in another. The map-key popover gets clipped and doesn't close. The weather emoji sometimes renders as "…". [Code] The Traffic toggle shows an empty map with no explanation (`MapScreen.tsx:93,281-288`). Reconstructed reads say "Stamped" (`DateScreen.tsx:143,185`), but the brief calls them "reconstructed." The ⓘ card's line "Never above the building" (`EventScreen.tsx:339-340`) contradicts the Oct 7 lock that an estimate may exceed seats. |
| 7 | Compare two nights; look at an upcoming date | **Works** | [Observed] The side-by-side comparison works, but "Gridlock" and "Conditions" aren't explained. Oct 14 showed "FORECAST … Formula v4 · locks Thu 7:30 PM." The day strip reaches it too. [Code] "Compare with…" appears on past rated date pages (`DateScreen.tsx:299-303`) and on logged event pages (`EventScreen.tsx:236-240`). It is **missing on hand-added and imported entry pages**. Upcoming dates go up to 120 days ahead (`CalendarScreen.tsx:85`). |

---

## Checks needed before the interview

Most of these need the tester's own signed-in account or a real phone. Get the account owner's OK before writing to that account.

1. **Imported nights open with a read and a reason.** On the tester's device, open one LA, one NY, and one Montreal night from You. Check whether each opens an event page or the bare `/entry/…` page, and whether it shows both a number and a reason.
2. **NY nights after Oct 5 have a number.** If imported rows are marked as small rooms, the read only checks hand-seeded events (`personalLog.ts:589-593`, `read.ts:418-423`), so archive-only dates would show nothing.
3. **No duplicates.** Open the event page for an imported night and confirm it already says Attended.
4. **Tabs closed during import.** Any app tab left open during the import can delete account rows it doesn't know about on its next save. The brief warns about this; confirm the tester did it.
5. **Two-device sync.** Add Review and With on device A. Sign in to the same account on device B, open the same night, and confirm both appear. Don't sign out on A in between, because that wipes A's copy. Then delete an entry on A, reload B, and reload A to see whether the entry comes back.
6. **Catalog completeness in New York.** Compare an NY date's event count in the app with the source, to rule out the 1,000-row cap.
7. **Links include the city.** Any `/event/` or `/date/` link sent to the tester must carry `?metro=`, or non-LA events show "Event not found" (event pages) or LA (date pages, `DateScreen.tsx:61`).
8. **Real phone pass.** Check the clipped map-key popover, the weather emoji showing "…", the disabled Save that looks enabled, and touch targets.
9. **Brief wording matches the app.** The brief says "Add a night," "Your nights," and "reconstructed." The app says "Add an event," "Events," and "Stamped."
10. **Privacy in the repo.** The tester's first name appears in `BACKLOG.md:109-112` and `MEMORY_HANDOFF.md:36`. That goes against `AGENTS.md:32`, which says tester names stay in `private/`.

Useful data-only checks (no account needed):
- `/date/2026-04-26`
- `/date/2026-08-22?metro=san-diego`
- `/date/2026-05-25?metro=montreal`
- `/date/2026-10-08?metro=new-york`
- `/event/2026-05-25-canadiens?metro=montreal`
- `/compare?a=la%7C2026-04-26%7C2026-04-26-dodgers&b=la%7C2026-03-18`

---

## Neutral interview tasks

These are worded to show where people get stuck without teaching the interface. Ask the tester to rate nights from memory *before* opening them. Their ratings are evidence, not a target.

1. "Show me a night from this year you remember well."
2. "In your own words, what is this screen telling you about that night?"
3. "Before you look, how rough was getting in and out that night? Now compare that with what the app says."
4. "You went to something that isn't in here. Get it in."
5. "Say one of these has the wrong date. Make it right."
6. "Write yourself a note about a night, then find it again later."
7. "You're going to something next week in another city. Find it and keep track of it."
8. "Pick two nights and tell me which was harder. Does the app agree?"
9. "Is there anything here you'd want gone or changed?"

The current brief and guide cover tasks 1–3 and the upcoming date. They don't ask testers to edit or delete an entry, add personal details, compare two nights, or log in another city.

---

## Possible solutions (proposals only, none approved)

These respect the rule that users are capable: say less, and add no explanatory fine print.

- **P1. Give imported and hand-added entries the full read.** Link imported rows to catalog events at import time. Or have the entry page show the date page's reason line and a Compare link.
- **P2. Ask before un-attending.** Use the same Keep / Remove prompt as "Remove from log," or show a short undo.
- **P3. Make hand-added entries fully editable.** Allow changes to date, title, venue, and city, not just Review and With.
- **P4. Align names.** Either change the brief to say "Events" and "Add an event," which is cheapest before the interview, or rename the app's segment. Pick one word for reconstructed reads.
- **P5. Show plans in You.** Add an upcoming section so Attending events appear next to past ones.
- **P6. Use one label for today.** Make the date page and event page agree (Attend vs Attended).
- **P7. Replace jargon instead of explaining it.** Swap phrases like "pulls on three other crowds," "seats in a fight," "Formula v4," and "placeholder numbers" for plain short words, and remove internal labels from tester-facing screens.
- **P8. Hide the Traffic toggle** until it draws something (it's parked work).
- **P9. Make disabled Save look disabled.**
- **P10. Work out the city from the event id** so links without `?metro=` don't fail.
- **P11. Read hand-added nights against the full catalog**, not just hand-seeded events, so dates after Oct 6 get a number.
- **P12. Let Add-screen search cover all covered cities**, or at least the city on the map.
- **P13. Fix the map-key popover** so it fits and closes.
- **P14. Update the stale ⓘ line** to match the Oct 7 lock that an estimate may exceed seats.

---

## Decisions vs stale docs vs proposals

**Current locked decisions (Kylie, dated)**
- The log leads (Oct 4).
- Anything can be logged by hand; about 1,000+ events are pre-listed; 5,000+ feeds friction (Oct 6).
- The stamp locks 24 hours after the last scheduled start (Oct 4).
- Saved nights become Attended automatically, with no "Did you go?" step (Oct 6).
- Private by default (Oct 4), plus a visibility switch: Only me / People I approve / Anyone (Oct 5).
- Only Review and With are typed fields; Note was folded into Review (Oct 6).
- Compare lives in Stats ("Your year") plus "Compare with…" on a night (Oct 6; pending Kylie's review).
- The scale is Chill / Mild / Spicy / Brutal / Cooked (Oct 1 and Oct 5).
- Map look: propose changes first (Oct 5).
- An estimate may exceed seats (Oct 7).
- A playoff game with no history falls back to the building's size.
- Fullness is shown as a word plus a bar.
- Feed terms of use are a launch blocker.

**Stale descriptions (contradicted by code or newer docs)**
- **Screens and setup.** `AGENTS.md:38-39` lists five screens and `night.ts`. The real tabs are Home / Explore / Favorites / You (`TabBar.tsx:4-10`), and `night.ts` doesn't exist. `AGENTS.md:135-136` says Supabase isn't connected, but accounts are live.
- **Button names.** "Save this night / I was there" is now Attend / Attending / Attended, and those buttons are also on the date page, not only the event page.
- **Home city.** The docs mention "Use my location" in the home picker, but there's no such button (`HomePicker.tsx:6`). "Home stays on this device" is also stale: home now syncs (`homeSync.ts`).
- **First run.** The docs say "Three-tip first run," but there are 2 tips (`FirstRunTips.tsx:8-17`). "Opens on Map with a next-saved-night card" was replaced by the Home tab.
- **Tester brief wording.** "Reconstructed," "Add a night," and "Your nights" don't match what's on screen.
- **The ⓘ card's "Never above the building" line** contradicts the Oct 7 lock.
- **Testing tip.** `MEMORY_HANDOFF.md:30` says `localStorage['home-metro']`, but the real key is `fan-friction:home-metro` (`prefs.ts:5`).
- **Old Compare plan.** `product-decisions.md` (Sep 30) still describes a fanbase leaderboard and a Nights tab.
- **Resale prices.** Listed as "agreed" in `expected-draw-decisions-oct7.md:41` but "off" in `MEMORY_HANDOFF.md:27`, with no name or date.
- **Migration 0010.** `BACKLOG.md:231` says it's still pending, while the handoff says it was run Oct 7.

**Not approved yet, or parked**
- Montreal build choices.
- Claude's estimate replies marked "awaiting her OK."
- A distance discount per city.
- Traffic mode.
- Night story, the image share card, notifications, and the tips rewrite.
- The Famous nights rehome, hand-check, and "Were you there?" title.
- Photos, tweets, and the every-30-minute capture.
- Following.
- The "planned vs turned out" line.
- Everything in `docs/ux-notes.md`.
- The HockeyTech permission email (drafted, not sent).

---

## Not tested or unconfirmed
- What the private import produced: whether rows link to events, whether they're marked as small rooms, and their city.
- Account sync, sign-in, Friends, Stats with an account, Share, Export.
- Real-device touch and a true 390×844 viewport.
- Live catalog row counts, and whether past events stay in the shared `events` table.


Status: closed, every item decided by Kylie in docs/reviews/build-notes-oct9.md and built Oct 9, 2026
