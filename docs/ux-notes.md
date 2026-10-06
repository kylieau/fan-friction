# UX/UI notes (running list)

Kylie adds thoughts whenever they come; Claude sorts them. Nothing here is a decision until Kylie confirms it.

## How we handle them (agreed Oct 3, 2026)
- **Don't wait for all the steps, and don't stop for every note.** Sort each note by what kind of change it is.
- **Structural** (what a screen shows, how screens connect, tab layout, naming, where a button sits): raise before building the next step that reuses the same pieces. The map sheet, chips, event rows and share card are reused by the calendar (Step 4) and the You tab (Step 5), so fixing them early means changing one place.
- **Polish** (colors, spacing, font sizes, label wording, animation): batch into one pass after Step 5 or 6, once all four tabs exist and can be judged together.
- When Kylie sends a batch, Claude sorts it into "before the next step" and "later," says which and why, and flags anything that conflicts with the mockups, the docs or the brand kit.
- Screenshots or rough phone-size sketches beat descriptions.

## Notes from Kylie

### Oct 3, 2026: consider-list only (nothing here is built or decided)
**Map**
- Keep a map page for now; it may fold into Nights later. Don't decide yet.
- The map should be the screen; header and sheet sit on top of it.
- Crowds / Traffic shrinks and sits next to the rating.
- "Where did the crowds go?" only shows when a glow is on the map.
- Sheet swipes down, two heights: collapsed = grabber + the night line; expanded = event list.
- "Pick a night" shouldn't be a second date control. The yellow button stays but doesn't duplicate the header.
- A pin and its row are one selection; tapping either selects both.
- The "i" on the map is the tip entry, or it's cut.
- Mid theaters (Peacock etc.) only get a pin when they share a campus with a headline night.
- Traffic, if kept: same map, different read. Three cues (Light / Heavy / Skip), always "Estimate · not live." "Should I brave the roads?" is the mode's title. No second map, no minute ETAs.
- Plans, if kept: pins on this map, your saves only, no shared who's-going list.

**Rating and words**
- Friction hidden at Low; Heavy chip is the pattern; no friction paragraph on the map.
- Word first, then number (`Light · 4/10`). Share cards keep the date; the map's score line doesn't.
- Overlap tiers stay internal. A share shows a plain why ("Same crowd as X", "different fans, same roads").
- Nearby regions don't lower overlap by default (OC and LA are one pool); silos only if a metro declares them. Freeways hit Gridlock, not the overlap tier.

**Nights, Compare, You**
- Nights is the log: a past night, its rating, "I was there."
- You is attendance you've claimed, not a profile. No badges in v1.
- Streaks, badges and compare-with-friends stay out until Kylie says otherwise.

**Tips**
- Add Back. Spotlight the control a tip is about, or don't ship it (tip 3 points at things not on the map).
- Copy stays on hold. Leans: "Glows brighter where the crowds are bigger." / "Each night is Chill, Light, Mid, Brutal, or Cooked. Each big event shows its friction, Low to Extreme, from nearby events, similar crowds, and getting there." / "Attended an event?" instead of "Went to something?"

**Cameos and notifications**
- A surprise guest or one-song set doesn't move the night unless billed.
- One ping: the morning of a saved night, or when that night's estimate flips. No traffic stream; she still picks which.

### Oct 3, 2026: additions from a product-engineer pass (Kylie pasted these; input, not decisions)
- One date state: the header changes it, the sheet reads it, the button goes away or becomes "another night" inside the same control.
- Selection is one: pin, callout and sheet row share one event id.
- Don't draw tabs for unbuilt routes; ship Map only. **(Conflicts with Kylie's own Oct 3 call to keep all four tabs.)**
- The sheet is a bottom sheet with three heights (peek, half, full); the event screen is a later route; a deep link opens the map with the sheet on that event. **(Conflicts with Kylie's two heights and with keeping the Event screen.)**
- Crowds and Traffic are layers of one map, not modes; if Traffic isn't ready, hide the control.
- Copy can't name a control that isn't mounted (tip 3; any "step N" empty-state line).
- No "why this score" breakdown until Crowd fight and Gridlock exist as real fields.
- One store for nights: Nights reads all, You reads only attended; browsing never writes.
- No new chrome beyond the bigger map and the small toggle.

## Sorted (Oct 3)
**Structural, before Step 4** (the Nights calendar reuses the sheet, rows and tab bar):
- Map fills the screen with header and sheet on top; two-height swipe sheet; mode switch beside the rating; question line only with a glow; yellow button no longer a second date picker; pin and row share one selection; "i" becomes the tip entry or goes.
- Keep the tab list in one config so tabs can move later. Nights = every night you can open, where "I was there" gets marked; You = only the nights marked "I was there" (titled "Your nights").
- Tips: add Back and spotlight, or hold the tip.

**Later**
- Step 6 (Traffic): three cues and the shared-map approach.
- Step 8 (formula): plain-why on shares, OC/LA one pool, freeways in Gridlock only, billed-only cameos, mid-theater pin rule (matches the v3 narrow-theater rule).
- Plans and notifications: when each exists.
- Tip copy: stays on hold.

**Already true, no change:** friction hidden at Low, word-first score, tiers internal, no badges/streaks/compare.

**Conflicts to settle** (your words win; flagging so the sources can be fixed):
1. _(Withdrawn Oct 3: the "no event page" note and the "trim the tab bar" note were scratched by Kylie.)_
2. **Settled Oct 3 (Kylie):** Nights is every night you can open (Famous nights, the full calendar, search). You is only the nights you marked "I was there." "Your nights" is the voice of that You list, not a second copy of the log. Nothing is shown in both places.
3. Step 6 planned blue corridors; your note has three cues (Light / Heavy / Skip) on the same map.

### Sorted: Oct 3 additions
**Structural, before Step 4:** one date state (the header owns it; the sheet and button read it); one selected event id shared by pin, callout and row; Crowds/Traffic as layers on one map (and hide Traffic until Step 6 if it does nothing, since today it only changes the heading); one store for nights (Nights = all, You = attended).
**Same fix, small:** no screen copy names an unbuilt step. Two lines do today: the Nights calendar card ("arrives in step 4") and the You tab ("in step 5"). Both go away once those screens are built.
**Later:** the "why this score" breakdown waits for Step 8, once its fields exist. (The Event screen's draft friction text and "what beat it" bars are the nearest thing today; flagging so we don't extend them.)
**Not adopted, because Kylie said otherwise earlier:** "ship Map only" (she kept all four tabs), "event screen later" (she kept it), and three sheet heights (she asked for two). Say the word if the engineer's version should win on any of these.

### Oct 3, 2026: two outside models' structural ideas, sorted with Kylie
**Principle (Kylie):** don't delete anything we've built. When an idea changes where something lives, the job is to rehome it, not remove it.
**Adopted now (no new screens):**
- The night is the main object; shares are about the night (word, date, what beat it), not a single event. The Event screen stays; the share card is rehomed toward the night. A "Friction Receipt" with the competing event and a map crop is the later, image version.
- Date lifecycle: Upcoming, Tonight, Settled. "Settled, no evidence" is a real state (today's "No count yet"). A plan is an upcoming night you flagged, not a separate list.
- Search finds nights by who played (team, artist, venue); Famous nights is what an empty search shows. Logging is search, tap a night, "I was there."
- **Area switcher (Kylie's idea):** works like the date control, to peek in on other areas. Not needed with LA only. Rules: the view has one place state and one date state (the header owns both); a second area is read-only peeking, while a log stays tied to where the night happened; don't show the control until a second metro exists.
**Open, decide after Step 5:** team and artist (fanbase) pages as the answer to the "fake fan" claim, and what that means for the Compare tab.
**Parked:** logging a role (at event A / B / in the city); replacing the tips with "log your first night."
**Not adopted:** past/future split, renaming tabs, dropping the map as a destination, user-set friction scores, a friends feed, venue pages as the main page.
- **Following (Kylie, Oct 3):** a personal list of teams, venues and artists you follow, which filters "Coming up" to them and can drive the one ping. Not a social feed: no other users' content. Lives in You; needs saving (Step 5). Team/artist pages, if built, are where Follow sits.

### Built Oct 3 (map rework)
Full-screen map with header and two-height sheet on top; one view (place + date, `src/lib/view.ts`); one selected event shared by dot, label and row; pins and labels are tappable and the gold button ("See this event") opens that event, replacing "Pick a night"; Crowds/Traffic is a small switch beside the rating; the question line shows only with a glow; the Low-friction chip is replaced by a "why" chip (sold out, then occasion, then first fact); tips got Back and tip 3 is on hold; "On this night" moved from the Map to the Nights tab (shows only when a famous night fell on today's month and day). The little "i" on the map is the map's required credit line, so it stays. Gold button on the Map is still a draft Kylie isn't sure about; the code keeps it a single small piece.
**Open:** whether to rename the Nights tab (Calendar). Recommendation: keep "Nights" (it holds calendar, search, Famous nights and logging); the tab label is one line in `TabBar.tsx` if that changes.

### Built Oct 3 (upcoming events on the map)
Every listed event gets a pin: hollow dot for events still to come, gold for past nights. A dropdown (Today / Next 7 days / All upcoming) chooses how far ahead the map shows; on an empty day it widens by itself (next 7 days, then everything). One label per venue on the map (the next event there); the sheet list holds all of them, and picking one rings its venue. The sheet follows your finger and settles at the nearer height (a quick flick works too).
**Kylie, Oct 3:** yes to one When control, and the very top bar of the Map could become the area (city or metro) switcher once a second metro exists.

### Built Oct 3 (Nights calendar and the When control)
Nights has a month calendar shaded by the date's rating (Chill through Cooked), with the number on the day and a legend. Days with events but no rating say Unrated. Days with nothing big on file say Quiet, and the day number stays readable. Tapping a day opens that date on the Map. Search finds nights by team, artist, or venue (old venue names too, such as Staples Center). An empty search still shows Famous nights, and On this night still appears only when a famous night fell on today's month and day. The tab stays Nights.
The Map's date button and range dropdown are now one When control: Today, Next 7 days, All upcoming, Pick a date. Pick a date opens the calendar. A range has no rating of its own; the header score still describes the base date. An empty today still widens on its own until someone picks When. The top bar becomes an area switcher only when a second metro exists. With Los Angeles alone, it stays the When control.

### Oct 5 (evening): Explore weather and the When control (Kylie's notes, not yet decided)
- **Date temperature: show the high and low**, not just the start-hour feels-like. She wonders if the range only matters in LA (dry days swing 30°); the range itself is universal, its usefulness varies by city. **Structural-light.** Correction (Oct 6): the weather store keeps only event hours plus 7 pm for the city point, and only on days with events, so the range needs the nightly job to fetch the day's high and low, every day. No new cost. Open: whether the date page and the strip show the range, or only the date page, and whether an event row keeps the start-hour number (the formula's input).
- **She doesn't see the temperature on the map.** Verified cause: the Map header shows feels-like only in single-day view, and on a day with no LA events the map widens itself to Next 7 days, which hides it. Second cause: the city point has no weather row on days without events. Both covered by `docs/explore-proposal-oct6.md`.
- **Drop "Next 7 days" as a When option.** Today's view already forecasts the days ahead (the strip). **Structural.** Touches the When pill, the auto-widen on an empty day, Home's mini map link ("Open the map for the next 7 days"), the averaged week rating, and `?when=week` deep links. Propose before building.
- **Week strip as a day-by-day carousel**, like an airline booking date picker: swipe moves one day at a time, the map follows. **Structural.** Today the strip is seven fixed slots (two back, viewed day in slot 3, four ahead) and only taps move it. Propose before building.
- Handling (Kylie, Oct 5): event-entry notes come later, backend data first, then tab by tab. These three are Explore notes, not entry notes.
