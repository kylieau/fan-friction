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

## Sorted (Oct 3)
**Structural, before Step 4** (the Nights calendar reuses the sheet, rows and tab bar):
- Map fills the screen with header and sheet on top; two-height swipe sheet; mode switch beside the rating; question line only with a glow; yellow button no longer a second date picker; pin and row share one selection; "i" becomes the tip entry or goes.
- Keep the tab list in one config so tabs can move later. Nights becomes the log ("I was there"); You = claimed attendance.
- Tips: add Back and spotlight, or hold the tip.

**Later**
- Step 6 (Traffic): three cues and the shared-map approach.
- Step 8 (formula): plain-why on shares, OC/LA one pool, freeways in Gridlock only, billed-only cameos, mid-theater pin rule (matches the v3 narrow-theater rule).
- Plans and notifications: when each exists.
- Tip copy: stays on hold.

**Already true, no change:** friction hidden at Low, word-first score, tiers internal, no badges/streaks/compare.

**Conflicts to settle** (your words win; flagging so the sources can be fixed):
1. _(Withdrawn Oct 3: the "no event page" note and the "trim the tab bar" note were scratched by Kylie.)_
2. The brief puts "Your nights" and the log in the You tab (Step 5), and Nights holds the calendar. Your note makes Nights the log and You only claimed attendance. Is that a swap, or is the log shown in both places?
3. Step 6 planned blue corridors; your note has three cues (Light / Heavy / Skip) on the same map.
