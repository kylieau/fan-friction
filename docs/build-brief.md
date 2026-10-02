# Fan/Friction: M1 build brief

Updated Sep 30, 2026. This is the hand-off for the first build. It says what people should see and do, not how to code it. The mockups are in `design/wireframes/`, the ratings and test nights are in `docs/test-nights-and-ratings.md`, and the product rules are in `docs/product-decisions.md`.

## Why / what we're building
Big-city sports fans, especially LA's, get called "fake." The better explanation is competition: other 5k+ events the same night, traffic, weather and stakes. Fan/Friction makes that competition visible for any night, so a fan can make the argument and a local can decide whether to go. This first build is a personal prototype for Kylie and friends, seeded in LA.

Sports are the reason it exists, but it's a live-event app: concerts and other big ticketed events count just as much. The feel is log + share, in the spirit of Flighty, Beli and Letterboxd. It is not a game.

## Decisions locked (Sep 30, 2026)
- **Name:** Fan/Friction, with the slash, everywhere a slash is possible. Use `fan-friction` or `FanFriction` only where a slash can't go (repo, code, web addresses). The name lives in one place so it can change later. Repo: `fan-friction`. Live site: https://fan-friction.vercel.app/.
- **Kind of app:** a phone-sized web app now, built so it can be installed or wrapped as a native app later.
- **Data:** hand-seeded to start, but built so live schedules and results can plug in quickly. MLB goes first, only because it's October baseball and its free feed is the easiest. Other sports (NFL, NBA, NHL, WNBA, MLS, college) and concerts follow right behind it. Upcoming concerts and shows start with Ticketmaster; SeatGeek or other sources get added later.
- **Ratings:** hardcoded for the seeded nights first, then the real formula, checked against the 13-night table.
- **People:** just Kylie to start. Her log is saved in Supabase (which she already uses), not only on her phone, because iPhone Safari can erase a website's saved data. Also an "Export my nights" backup. Simple accounts come right after the baseline build, also on Supabase.
- **Screens in the first slice:** Map (Crowds) with the Event screen, Nights, You (Plans and Your nights), and Traffic. Compare comes in the second slice.
- **World Series games get a SOLD OUT tag** like any other sold-out event. Nothing special or bigger about it.
- **Event types:** Game, Show, Festival, Live Broadcast (watch parties at places like Cosm), and Special event. "Live Broadcast" is Kylie's name for the Cosm-style category.
- **How far back logging goes:** 10 years (to about 2016). Kylie's own concert log has a few older shows (2013 to 2015). Keep those as rough-dated entries with no rating, and ask Kylie if she wants them kept.

## What should be built
1. **The shell.** Four tabs along the bottom: Map, Nights, Compare, You. Compare is visible but shows a simple "coming soon" page for now. The app opens on Today, even when it's quiet. A skippable three-tip first-run guide.
2. **Map, Crowds mode.** A heat map of where crowds went for the chosen night (default: today). Gold glow and dot size show where the most people were. Each event shows its friction verdict in words (for example "Extreme friction"); see the rating model in `product-decisions.md`. A ★ marks the biggest crowd in the city that night. A "SOLD OUT" tag marks a full venue. The night has an overall difficulty score with a label, never a bare number.
3. **Crowds | Traffic toggle.** Traffic mode shades the corridors near overlapping events and events letting out together, in blues (gold only ever means crowds). It is always labeled "Estimate · not live." No live data and no red "jam" color. Includes "Drag to your leave time."
4. **Event screen.** Tap any event to see:
   - its rating and what else was on nearby that night ("Here's what beat it")
   - a short "The game" or "The show" block (the result for sports; pitchers, giveaways and notable moments)
   - an "I was there" button
   - a shareable card at the very end of the screen
   - one gold primary button per screen, with a plain verb
5. **Nights tab.** A search box and a calendar shaded by each day's night rating, with each day's number and a legend. Below it, a "Famous nights" list with rating badges. Tapping a day opens that night.
6. **You tab.** Two parts, with the order switchable in settings (Plans first by default):
   - **Plans ("Up next"):** your next planned night, the other events that night, its rating and an estimated traffic line.
   - **Your nights:** a log with team + sport filters. Each row shows the date, event, rating (when there is one), plain facts and an optional one-line result. Plain stats (counts by team and sport, venues) are welcome. No loaded labels, and no "brutal nights" stat.
   - Logging: search and add, "I was there" on the event screen, and a live check-in. Ticket import comes later.
   - Logging rules: events below 5k can be logged (no rating, no dot). Rough dates are allowed alongside real ones. A festival is one entry with the sets inside. A partial night is a personal note. Away games are logged now, with context later. Old venue names match current ones (Staples Center = Crypto.com Arena, Banc of California Stadium = BMO Stadium).
   - Personal notes stay private and show only in Your nights.
7. **"Who you've seen."** Headliners and pro-game participants count automatically. Openers, festival sets and multi-game events are opt-in. "Cameo" (surprise guests, one-song sets) is a secondary tier, and its default rules are still to be defined. Built in but not the main event of the app.
8. **Ratings.** The night and each event get a 1 to 10 difficulty score (how hard it was to draw a crowd). Six factors: how much else was on, the same time window, how close, whether the same fans, the event's own pull, and conditions. Only facts known before the event can affect the rating. Outcomes never do. "Big TV night" is a label only. Live or upcoming events with no formula yet show "Not rated yet" rather than a guess.
9. **Real data.** Every attendance number is labeled by kind: announced, reported, or estimated. Past nights come from league box scores, venue histories and Kylie's spreadsheet, not from ticketing feeds. Upcoming events can use Ticketmaster or SeatGeek later. For October, the Tonight screen should show real MLB games, including playoff games in progress, as soon as the feed is plugged in.
10. **Room for later.** Every item on the map is a general "crowd event" (ticketed, non-ticketed like a parade, or a soft clash), with a place (point or route), a time window, an audience tag, and a size labeled by kind. Map layers are separate (events, traffic cues, TV labels, later parades). Teams and metros are their own records. A personal layer attaches to any event. The rating has open slots for new factors. Accounts and friends slot in without reshaping any of this.

## Look and feel (from v4)
- Light theme. Background `#F7F8FA`, white cards, ink `#0F1B2D`, secondary text `#4A5568`.
- Dodger blue `#005A9C` for scores and selected states. UCLA blue `#2774AE` as secondary. UCLA gold `#FFD100` for the primary button and the hottest heat; never gold text on white. No orange.
- Fonts: Big Shoulders Display for scores, Manrope for body text.
- Product rules: don't make the user think, always label scores, curiosity-gap copy, and end the event screen on a shareable card.

## Net effect
One app where a fan can pull up any night, see what else was on and how much friction each event faced, and share it as a card. A local can check Today and the roads. Kylie can log her own nights. Real MLB games flow in alongside the hand-seeded history.

## Tech setup (Sep 30, 2026; open to change)
- React + Vite phone-sized web app, installable to the home screen. Can be wrapped as a native app later (Capacitor).
- Map: MapLibre with OpenFreeMap (free, no account). Google Maps was passed on: it needs a credit card on file, and its heat map layer is being retired.
- Saving: Supabase. Hosting: Vercel free plan, deploying automatically from GitHub.
- Every outside service sits behind its own replaceable piece, so any of these can be swapped later.

## Checking the rating formula
Matching the 13-night table is a sanity check, not proof: six factors can be tuned to fit 13 nights and still be wrong on the next one. Hold back two or three nights, tune on the rest, and check that the formula gets the held-back ones right.

## Cost milestones 🚩
Kylie wants this free until paying is unavoidable. Each of these is a milestone to flag and get her OK on before crossing. Nothing in the first slice (M1) costs money.

| When | What starts costing | Rough cost |
|---|---|---|
| M1 | Nothing. Vercel free, Supabase free, OpenFreeMap, MLB feed, Ticketmaster key are all free | $0 |
| M1, if Supabase fills up | Supabase free plan allows 2 active projects per account (Kylie already uses one) and pauses a project after about a week with no use. A third project, or no pausing, means Supabase Pro. Kylie's plan: switch to Firebase or another free option instead of paying | $25/month (or $0 by switching) |
| Custom web address (any time) | A domain like fanfriction.app instead of fan-friction.vercel.app | ~$10–20/year |
| Native iPhone app | Apple Developer Program | $99/year |
| Native Android app | Google Play developer account | $25 once |
| Public launch or any revenue (M2/M3) | Vercel's free plan is for personal, non-commercial use; commercial use means Vercel Pro. The MLB feed is non-commercial only too | $20/month+ (Vercel); MLB data licensing unknown |
| Billed traffic history (Oct 2) | Google Maps historical traffic is billed per request; Waze goes through a partner program. Kylie said no. Gridlock uses free sources only (transit share from census data, parking counts, transit notices) | Per request (declined) |
| Paid crowd-origin data (Oct 2) | Placer.ai, StreetLight, buyer ZIP codes. Later calibration only; paid or partnership-only | Paid / partnership |
| If free data runs out | Paid sports or event data (e.g. PredictHQ, SportsDataIO) or higher Ticketmaster limits | Varies |

## Open questions (settle while building, ask Kylie when you reach them)
- Where schedules for other sports come from. NHL has a free public feed; NFL, NBA, college and others probably come through an unofficial scoreboard feed. Pick when building.
- Rating weights, and when dot size switches from capacity to predicted attendance.
- What exactly the basic traffic cues show.
- Streak and badge definitions, and the Compare-with-friends format.
- Cameo default rules.
- Whether Plans also appear on the Map.
- Whether to keep "Should I brave the roads?"
- Notification timing.
- Name clearance (trademark and app-store search) before any public launch. Two podcasts named Fan Friction exist.
