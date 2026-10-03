# Fan/Friction backlog

Deferred work and open questions that outlive one session. Remove an item only after checking it against the code. The current snapshot is in `MEMORY_HANDOFF.md`.

## Prompt Kylie first thing when a session resumes
Ask whether she has UX/UI thoughts to share before starting Step 4. Her approach (agreed Oct 3): send notes whenever; Claude sorts them into structural (raise before the next step) and polish (batch after Step 5 or 6). The running list is `docs/ux-notes.md`. She is also hunting down the remaining seed data gaps (crowd counts for Gilmour, ELO, Imagine Dragons, Beyoncé, and the open items under Research leftovers); ask whether she has anything to paste.

## First slice: remaining build steps
- **Step 3 done (Oct 3), with these left over:** the Event screen has no "I was there" button (it needs saving, so it waits for the You tab in step 5); the share card is shown on screen and sharing sends text plus the link (an image version is later); the gold "See what beat it" button from the mockup is replaced by tapping an event in the list; dot size and heat still use capacity and the known crowd (the predicted-attendance rule comes later). The Event screen does not show a result block yet ("The game" / "The show": score, setlist), because the seed has no results.
- **Step 4:** Nights tab (search, calendar shaded by date rating with legend). Famous nights already lists the 13 seeded dates (step 2); rows don't open a date yet.
- **Step 5:** You tab (Up next, Your nights from `docs/kylie-logs.md`, team + sport filters, rough dates, plain stats, order setting).
- **Step 6:** Traffic mode (blue corridors, "Drag to your leave time," "Estimate · not live," no red).
- **Step 7:** Live MLB schedules and results, so Today shows real October games marked "Unrated." Then other sports: NHL has a free public feed; NFL, NBA, college and others probably come through an unofficial scoreboard feed. Concerts come from Ticketmaster first; SeatGeek or others are added later.
- **Step 8:** Rating formula from the six-factor recipe. Hold back 2–3 of the 13 nights to test it, so it isn't just tuned to fit.

## Waiting on Kylie
- **First-run tips are on hold** (Kylie, Oct 1): rewrite all three once the bigger product questions settle, since the tips will explain them. Tip 2 still describes the rating model in draft form.
- **Second opinion folded in (Oct 2); one piece still open.** Structure, shield (light, Crowd fight only), both-reasons date rating, invited events and the map rule are recorded in `docs/overlap-and-date-rating-v3.md`. Second report came back: proposed Crowd fight scoring is in the v3 doc, agreed by Kylie except the Medium weight, which waits on Gridlock; standings count and tuning on past attendance is allowed with held-out dates. Next: a Gridlock design (bottleneck list, scale, transit modifier); second-opinion prompt for another model: `docs/gridlock-prompt.md`. The ratings for night 5 (11/19/22) and night 11 (9/17/17) wait on both. The 2017 Emmys (Microsoft Theater, now Peacock Theater) enter night 11 only if a headline event shared the L.A. Live corridor that night (Kylie's theater rule; check the Crypto.com Arena calendar for 9/17/17); otherwise they stay out. A site admin for map exceptions is parked for v2. Then trim `rating-model-draft.md` to match.
- **Quiet vs. Unrated on the Map:** today's Map still says "Unrated · No big events found for today yet." The draft's three states say a date with no events is **Quiet**. The data layer already returns quiet/unrated/rated; asked Kylie (Oct 1) whether to switch the screen.
- The occasion/friction table for all 13 nights is still a draft (stored as `status: 'draft'` in the seed).
- Whether "Pick a night," "Next big night" and "On this night" keep the word "night" (she's fine for now but reserves judgment).
- Her ongoing doubt about the word "friction" for the event verdict.
- Whether to keep the 2013–2015 concerts in her log (rough dates, no rating). Ask at step 5.

## Research leftovers
- Seed data gaps (updated Oct 2): **filled** the three 9/17/17 start times, most start times and several counts for nights 1–4 (checked against box scores and club or venue pages). **Still open:** World Series G2 attendance (two readings, 52,275 and 52,725; check the Baseball-Reference box score); East LA Classic count (one source claimed 18,000; not confirmed, typical draw is 20,000–25,000); counts for Kings vs. Jets and Dodgers vs. Braves on night 4 (one search returned 15,012 for the Kings, which looks low; unconfirmed); Elton John 11/19/22 seeded at 8:00 (one source said 8:15; close enough) and The Weeknd 9/3/22 at 9:20 pm, his stage time (6:30 pm is likely doors; recheck if it matters); counts still open for Gilmour, ELO, Imagine Dragons and Beyoncé (night 3 has no single-night figure; the tour total is not a night count). Scheduled times seeded Oct 2 (checked): BLACKPINK 8:00 (it actually started 8:30, which is a day-of fact and not used), Beyoncé 9/1/23 8:00 (actual 8:50), Dodgers vs. Padres 4/13/24 6:10 (rain delayed it 2h15, a day-of fact and not used); the Rose Bowl reading on 9/3/22 (only "100°F+ that day" is recorded); Rose Bowl capacity (sources say 89,702 or 92,542); the month Banc of California Stadium became BMO Stadium; Kia Forum's earlier name and rename date. The Galaxy count (24,537) comes from the club's own match report via a search summary; recheck. Each is marked in `src/data/`.
- Audience overlap: the rule's "same fans' must-see" case (Lakers vs. World Series = High) isn't automatic yet; the code rates different sports Medium.
- Night 7: concerts and other events at Crypto.com and Honda Center not checked.
- Night 9: pick a new comparison Friday (7/21/23 was an Ohtani start).
- Concert crowd counts not found: Gilmour, ELO, Imagine Dragons, Rauw Alejandro, Taylor Swift (per night).
- The review page (artifact WaSZurptyrcUs74KUjBE6F) still says "Local Load" in option C; update before sharing.
- The mockups in `design/wireframes/` predate the rating model ("Squeeze 8/10" tags, "NIGHT · BRUTAL"). Follow `product-decisions.md`, not the mockups.

## Saving and accounts
- **Supabase:** Kylie creates a free project and provides its URL and public key before step 5. 🚩 The free plan allows 2 active projects per account and she already uses one. It also pauses after about a week idle.
- "Export my nights" backup button.
- Simple accounts, right after the baseline build.

## Open product questions (from the build brief)
- Rating weights, and when dot size switches from capacity to predicted attendance.
- What the basic traffic cues show. Whether to keep "Should I brave the roads?"
- Streak and badge definitions (plain and factual), and the Compare-with-friends format.
- Cameo default rules for "Who you've seen."
- Whether Plans appear on the Map.
- Notification timing.
- Name clearance before any public launch (two podcasts are named Fan Friction).

## Tech housekeeping
- The main JavaScript file is about 1.3 MB, mostly the map library. Split the map out so other tabs load faster.
- An offline-ready service worker for the installed app.
- **Screenshot checks:** `playwright-core` driving `/usr/bin/chromium` with `--use-angle=swiftshader --enable-unsafe-swiftshader` works in this container. Keep the helper script in the session scratchpad, not the repo.
- Confirm the Vercel plugin's account connection works (Kylie ran `/mcp`, but it hasn't been used yet).
