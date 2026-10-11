# Build 2 judgment calls: decisions

_Saved verbatim from Kylie's Oct 11, 2026 bundle (Claude Code, Oct 11, 2026). The mocks it names are in `docs/design/` as `call1-feed-row.png`, `call2-where-watched.png`, `call5-ticket-line.png` and `call6-overlap.png`. Her prompt is appended at the end._

Kylie, Oct 11, 2026. All decisions are final. Checked against origin/main @ 850beba (read-only). Mocks are in `mocks/`.

How to work: each step is one commit straight to main. No PRs, no branches. Privacy and data-loss fixes go first. Log every decision in `docs/product/product-decisions.md` with the reason and the rejected options. New migrations start at **0020** (the last one is `0019_private_entries.sql`) and must be safe to rerun. Users are capable, so say less and skip fine print. If something is ambiguous or conflicts with the code, flag it. Don't guess.

Sources: `docs/research/topics/build2-judgment-calls-prompt.md` and `-answer.md` (Model 1, Model 2), `BACKLOG.md:88`, `MEMORY_HANDOFF.md`, Mock Mosaic's A–D options. Fill in "Kylie's calls: Pending" in `-answer.md` with these decisions.

---

## 0. Build 2 review fixes (do these first)

Kylie's answers to the build 2 review form (18 items). Her choices and notes are quoted exactly.

### Approved: build these

Privacy and data loss:
- **R01** Someone you blocked can still send you a follow request (`supabase/migrations/0015_follow_rules.sql:18-19`). Choice: **"Fix: refuse requests from people you blocked"**. Add "not blocked by this person" to the insert rule, using `is_blocked` from 0018. New migration.
- **R02** A removed follower can unfollow and request again (`0016_follow_states.sql:72-73`). Choice: **"Fix: a removed row stays; Unfollow just hides it for them"**.
- **R03** When a decline errors, the request gets deleted instead (`src/data/profiles.ts:396-403`). Choice: **"Fix: show "Couldn't decline, try again" instead of deleting"**. Only fall back to deleting when the database has the old shape.
- **R04** A signed-out visitor can list every handle and name (`0017_cards.sql:39-44`, `profiles.ts:600-611`). Choice: **"Fix: server-side search with a 3-letter minimum and a result cap"**. Also strip commas and brackets from the search text.
- **R05** A declined requester can still open a profile whose link is off (`0017_cards.sql:~29`). Choice: **"Fix: count only approved follows"**.
- **R06** An older offline edit can overwrite a newer one (`0014_sync_rows.sql`, `src/lib/supabaseStore.ts`). Choice: **"Fix: newest edit wins by when you made it"**.

Other:
- **R08** The `/api` rewrite (`vercel.json:6`, `"/(.*)"`). Choice: **"Fix: change the rewrite to skip /api"**.
- **R09** The nightly run worked but started 6½ hours late (`.github/workflows/schedule-archive.yml:16`, `cron: '23 8 * * *'` = 1:23 AM PT). Choice: Something else: *"since it keeps running late, let's pick an earlier time to run its so that the actual executed time happens before 9am ET"*. 9 AM ET is 13:00 UTC. With a delay of about 6½ h, the cron has to fire at about 06:30 UTC (11:30 PM PT) or earlier. ⚑ Check which date the job archives when it starts before local midnight. If moving it earlier would archive the wrong day, flag it and don't guess.
- **R12** No "Official site ›" on artist pages. Choice: Something else: *"let's put a placeholder for now, i'm not sure ticketmaster is the move tbh, i used ESPN for sports cause stats live there but that's not the same for ticketmaster, so we need the artist/concert equivalent"*. Build a placeholder slot only and don't pull from Ticketmaster. Log the open question "the artist/concert equivalent of ESPN" in the backlog.
- **R16** "· tonight" shows on day games (`src/screens/FavoritePage.tsx:322`). Choice: **"Fix: today before 5 PM, tonight after"**.
- **R18** "Offsale" shows as sold out (`api/ticket-price.ts:72`). Choice: **"Fix: don't call offsale "sold out""**. Hide the price line for offsale. Say sold out only for cancelled or no tickets left.

Keep as is (no code change, log it):
- **R13** Gold ring on stub cards (`src/styles.css:~3633`). Choice: **"Keep gold"**. Note: *"note as future potential mockup to consider wrt neutral gray and dodger blue"*. Add this to the backlog as a future mock.
- **R15** Gold slash in the logo (`styles.css:~2012`). Choice: **"Keep gold"**.

### Deferred, skipped, or needs Kylie (don't build)
- **R07** Rerunning an older migration can undo a newer one. Choice: Something else: *"i've already run them all.."*. No action. New migrations still must be safe to rerun.
- **R10** "It was 9.1" never shows on revised reads. Choice: **"Leave for later; "Revised" alone is fine"**.
- **R11** Favorites standings, tours, alerts and live state. Choice: **"Leave all for a later build"**.
- **R14** Gold on your own bar in charts (`styles.css:~1962`, `.bar-self`). Choice: Something else: *"i'm not sure what this is referring to tbh"*. Don't change it. In your summary, explain in one line where `.bar-self` shows up.
- **R17** "Nothing bigger was on." (`src/data/formulaRead.ts:35, 99`). Choice: Something else: *"i actually have never liked this copy language, we need to frame the idea differently"*. Don't patch the tense. Leave it for Kylie's new framing and log it as open.

---

## 1. Following feed lines (mock: `call1-feed-row.png`)
- Lines are plain sentences with no dot: "Sam is going to {event}" before the event and "Sam went to {event}" after. For watched: "Sam is watching {event}" / "Sam watched {event}".
- Never show "· you too". Reason (Kylie): people already know they're going.
- Each line links to the event page and ends with a short date, like "Oct 12".
- The feed is one section of the Following tab, next to the by-event list.
- Live today: `YouScreen.tsx:400` and `:434` say "is planning to attend" / "attended" and add "· you too". `profiles.ts:415` has the same wording in its doc comment.
- Decided against: mock A "planning/attended · …", which was also Model 1's pick. Mock B "is planning to attend / was there", which was Model 2's pick and the analysis lean. Kylie rejected that wording by name. Mock C "· going to / · was at" (dot-led). Model 1 kept "· you too" for matching statuses and Model 2 kept it outright. Both are rejected for the reason above.
- ⚑ Watched lines need friends' watched entries to be visible in the feed. Check that the feed query includes them.

## 2. Event page and date page states (mock: `call2-where-watched.png`)
- Before the event: **Attending / Watching**. After: **Attended / Watched**. The same on both pages.
- "I watched it" stays an action on the event page only. Reason (Kylie): the date page is the busiest list, so it gets no row menu.
- The date page's "Attend" is the shared wording.
- Live today: DateScreen uses Attend/Attending/Attended/"Attended?" (`DateScreen.tsx:289, 330, 355, 374, 378`). EventScreen has "Attend"/"Attending" (`EventScreen.tsx:203`), "I was there", and "I watched it" (`EventScreen.tsx:~208-231`).
- Decided against: Model 1's "I was there → ✓ You were there" on both pages plus a date-row action menu. Model 2's "I was there / ✓ You were there". The analysis lean, "I was there" on both pages.
- ⚑ The date page has no "Watched" state yet. Show "Watched" on date-page rows (as a state, not an action) for consistency. ⚑ Does "I was there" stay as the event-page button label after the event, with "Attended" as its done state? Flag it.

## 3. Stats, Your year, and where watched (mock: `call2-where-watched.png`)
- Watched never counts toward venues or crowd stats.
- Stats label: **"N attended · N venues · N watched"**. Attended, not Events. Fix `YouScreen.tsx:477`: `<Stat n={stats.events} label="Events" />` currently counts watched entries.
- Your year (`src/components/YourYear.tsx`): show attended and watched separately. A watched game can't be Heaviest or Quietest (`YourYear.tsx:92-93`). The read chips either split watched out or exclude it, since the live build counts watched there.
- Decided against: Model 2's "N events · …" with events meaning attended only. Rejected because "Events" is ambiguous.
- **New: where watched.** A watched entry gets a "where watched" field: **Home** or **Public**.
  - Home covers watching alone or at a watch party in someone's home.
  - Public is a free-text place, like a bar name.
  - The user can keep it private.
  - If Public, they can also pick from places other people publicly added for **that same event only**. This is not an app-wide list.
  - Public places show only to people who also set themselves Public for that event. They never show to everyone viewing the event. Show the place name only, never who added it.
  - Kylie will flesh this out more. Build only what's above.
  - ⚑ Open questions:
    - Is "Home / Public / Private" one choice, or is private a separate toggle?
    - How are duplicate or misspelled place names merged?
    - Can a place be edited or removed after others pick it?
    - Is the field optional?
    - Does where-watched show on the user's own stub?
    - Where does the picker live (event page after "I watched it")?
  - The visibility rule has to be enforced in the database (RLS or a server function), not in the UI. This is a privacy rule, so it needs a migration from 0020 that is safe to rerun.

## 4. Crowd figures
- Drop the **"Fans with you"** stat entirely (`YouScreen.tsx:478-485`).
- Each entry's crowd locks to the **final announced attendance** after the event, or the best estimate if none was announced. It is no longer the figure on file at the tap. Live today: `freshEntry` saves `drawSize(event)` at the tap (`src/data/personalLog.ts:~601-602`).
- Lock it when the stamp locks (`STAMP_LOCK_HOURS`, `read.ts:38`).
- One-time backfill: fill empty crowds only, never overwrite, safe to rerun. Run it on Kylie's log first. Pre-archive nights stay blank.
- No "· N stubs" suffix. It's fine print.
- Decided against: freezing at the tap (the current build). Model 1's "Fans with you · {N} stubs" and "Biggest recorded crowd". Model 2's version that kept Fans with you.
- ⚑ Where does "final announced attendance" come from? Is it in the archive or catalog today? If there's no source, use the best estimate and flag it. ⚑ Entries marked before the lock need a write at the lock (a job or a lazy fill). Say which one you chose.

## 5. Ticket line (mock: `call5-ticket-line.png`)
- The line stays **"Prices from $48+fees ›"** (approved Oct 10). Fallback: **"See tickets on Ticketmaster ›"**.
- The fee-rule blocker stays logged.
- Decided against: link only with no price (Model 1 and the analysis lean). Model 2's "Prices from $48 ›" when the feed marks the price all-in (mock B), and dropping "+fees" on `feesIncluded`. No reason was recorded for rejecting these.
- ⚑ Live `src/data/tickets.ts:41-46` drops "+fees" when `feesIncluded` (a regex /fee/, `api/ticket-price.ts:71`). Per this decision, always show "+fees" with a number. Confirm you removed that branch.

## 6. Local competition (date page) (mock: `call6-overlap.png`, option D on top, B/C timeline)
- Rename "Up against" back to **"Local competition"**. The merged section goes on the **date page**.
  - Top: the day's read box, as in mock D, with the summary line exactly as in the mock, e.g. **"4.7 Spicy · 54k across 6 events · 4 start at 7 PM"**. No explanatory helper text.
  - Below it: the event list, then the stacked timeline from mocks B/C.
- Keep the one-hour rival rule for both the list and the timeline.
- This merged section replaces the old duplicated cards: the event page's "Up against" (`EventScreen.tsx:238-240`) and the "Local competition" timeline (`EventScreen.tsx:552-578`).
- Decided against: mock A (Up against with the timeline on the event page). Model 1's "consolidate into Up against" with overlaps beyond one hour. Model 2's mileage on rival rows. Miles are dropped.
- ⚑ What does the event page keep? Is it the friction pill only, or a link to the date page's Local competition? The brief renames the section but places it on the date page, so confirm it before you remove anything from the event page. ⚑ Mock D's "Why 4.7 tonight" and "Bars assume 3h run times" are helper text. Leave them out. ⚑ The mock says "7:00 pm" but Kylie wrote "7 PM". Use her form and flag it if the time format elsewhere conflicts. ⚑ "Up against" also shows on the map legend (`MapScreen.tsx:340`) and in `theme.ts:46`. Should those be renamed?

## 7. Gold crowd icon
- Put the gold crowd icon next to **every** crowd figure everywhere, and **only** on crowd figures. Not on Attended or any other count.
- Watched rows still show the event's crowd with the icon. Watched never counts in crowd stats.

## 8. My Stubs
- Make it a plain recent-activity list with filter chips **Recent · Sports · Concerts · Watched · Attended**. Recent is the default.
- No badges on rows. Keep the existing row visuals. Watched rows keep the TV icon + "Watched" (`YouScreen.tsx:561-563`).
- Existing filter row: `YouScreen.tsx:122`. ⚑ Is "Recent" sorted newest first by event date or by when it was logged? Flag it.

## 9. Stats tab
- Leave it as is: no badges section, no redesign. Mock Mosaic will do a separate Stats pass later.
- Parked: the badge set (`call7-stub-badges.png`) is not for this build. Log it as parked in the backlog.

---

## Order
1. Section 0, privacy and data loss: R01–R06.
2. Section 0, the rest: R08, R09, R12, R16, R18, plus logging R13/R15 and the deferred items.
3. Calls 4 (data) and 3 (stats, where watched incl. its privacy migration).
4. Calls 1, 2, 6, 7, 8. Then log call 9 and the parked badges.
5. Commit mocks to `docs/design/`, link them from the docs, and log every decision in `docs/product/product-decisions.md`.

## Kylie's manual steps (Claude lists the final ones)
- Run each new migration (0020+) in order.
- Review the crowd backfill result on her log before it runs for everyone.
- Check that the nightly run lands before 9 AM ET at its new cron time.
- Answer the open ⚑ items, especially where watched and what the event page keeps.

---

## Appendix: Kylie's prompt (verbatim)

Read `build2-judgment-call-decisions.md` fully before you start. It has Kylie's final decisions on the six build 2 judgment calls, plus three more, and the build 2 review fixes.

Build it step by step. Each step is one commit straight to main. No PRs, no branches.

1. Section 0 first: privacy and data-loss fixes (R01–R06), then R08, R09, R12, R16, R18. Don't build R07, R10, R11, R14 or R17.
2. Then the decisions in the order the file gives.
3. Log every decision in `docs/product/product-decisions.md` with the reason and rejected options. Fill in "Kylie's calls" in `docs/research/topics/build2-judgment-calls-answer.md`. Put parked items (badges, R13 mock idea, R12 source) in BACKLOG.md.
4. Commit the mocks to `docs/design/` and link them from the docs.

Users are capable: say less, no fine print. Items marked ⚑ are open. If anything is ambiguous or conflicts with the code, flag it in your summary. Don't guess.

Number new migrations from 0020 and make them safe to rerun. When you finish, list Kylie's manual steps: each new migration in run order, the crowd backfill check on her log, and checking the nightly run's new time.
