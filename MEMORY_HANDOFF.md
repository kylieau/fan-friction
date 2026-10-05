# Fan/Friction: handoff snapshot

Overwritten each session. Deferred work, open questions and the full plan live in `BACKLOG.md`. Product rules live in `AGENTS.md` (CLAUDE.md points at it), `docs/direction.md` and `docs/product-review-decisions.md`.

_Last synced: Oct 5, 2026. Docs only, so local Claude Code can resume from current `main`._

## Current state
Fan/Friction is a personal log of live events you attended, with a friction read stamped on each night. PRs #1–#12 are merged on `main`. This session changes docs only. The app is unchanged. The live site is https://fan-friction.vercel.app (Vercel deploys from `main`).

What landed in PRs #8–#12:

- **PR #8.** Nightly Los Angeles schedule archive. One free job, at 12:15am Pacific, saves the coming 14 days. Nothing new on screen.
- **PR #9.** Data foundation. A night can hold a stamp. A room under about 5,000 does not feed friction. It can take a nearby score from a bigger event the same night. The stamp is not on screen.
- **PR #10.** One Map card for the next saved upcoming night, in any city. Compare's heading is "Your nights, side by side."
- **PR #11.** The forecast freezes at the scheduled start, not at Save. Save stores no forecast. The every-30-minute capture is parked. Until it returns, the stamp uses the latest daily snapshot taken before the start.
- **PR #12.** Home city, stored on the device. The map opens there and never follows a saved night.

- **Card.** It shows only after Save this night, for the soonest night still ahead, in any city. The three lines are "Next saved night", the chip name, and the date and city, as in "Fri, Oct 9 · Boston". There is no gold button. A tap opens that event in its own city. The map stays where it is. Back restores the same city, zoom, and selection. No saved night means no card. The card does not draw a forecast.
- **Compare.** The heading is "Your nights, side by side." The tab and the Coming soon chip stay. The rebuild is later.
- **Home.** The first open asks "Where's home?" The city switcher shows a house icon on the home city. "Set as home" appears only on cities that have events. Today that is Los Angeles. The map always opens on home. Looking at another city does not change home. Home is stored on this device. "Use my location" sits in the first picker and runs only if she taps it. 🚩 Another phone needs accounts.
- **Map.** Rooms under about 5,000 stay off the map. The Map's look is no longer locked.

## Changes made (this session)
Docs only. No app code.

- `MEMORY_HANDOFF.md`, `BACKLOG.md`, `AGENTS.md`, `CLAUDE.md`, `docs/product-review-decisions.md`, and `docs/direction.md`.
- The snapshot now matches merged PRs #8–#12. The Map UI lock is lifted. Under-5,000 rooms stay off the map. The next build is Supabase accounts, waiting on Kylie.

## Key decisions in force
- **Working rules.** Propose a structural change, then wait for approval. Never delete a feature. Flag a new cost with 🚩 and wait. Kylie locks decisions. Do not reopen a locked answer unless she does.
- **Stamp clock.** On a night with several events, the clock is the last scheduled start that night, whichever event is scheduled last. The stamp locks 24 hours after that start. Tapping does not move the clock.
- **Forecast.** Save stores the night only, with no forecast. The every-30-minute start-time capture is parked. Until it returns, the stamp uses the latest daily Los Angeles snapshot saved before the event's start that includes the event, and is labeled as such. A snapshot at the start, or after it, is not used. If that file has no number, no number is added. Los Angeles only.
- **Map card (Oct 5).** Any city. The lines are "Next saved night", the chip name, then the date and city ("Fri, Oct 9 · Boston"). No gold button. A tap opens the event in its own city and leaves the map where it is. Back restores it.
- **Home (Oct 5).** One city, stored on the device. First open: "Where's home?" House icon in the switcher. "Set as home" only on cities with events. The map always opens on home and never follows a saved night.
- **Map UI.** No longer locked. The Oct 4 freeze on chips, the sheet, the glow, and the legend is lifted. Still propose, then wait. Save and "I was there" stay on the event page.
- **Under 5,000.** Those rooms stay off the map. They do not feed friction. They can still be logged, and they can take a nearby read.
- **Direction (Oct 4).** The log leads. Nothing built is deleted. No points, leaderboards, collectible badges, open posting, public photo walls, navigation, or a standalone "is tonight bad?" feed. v1 uses public data only. Logs are private by default. Tweets stay on hold until access and cost are verified. Product risks are parked.
- **Still in force.** Her words beat docs and other models. Write Fan/Friction with the slash. Free until forced. Screens read only through `src/data/index.ts`. Every crowd figure has a kind label. Only pre-event facts affect a rating. One gold button per screen. Traffic is an estimate only, and it is never red.
- **Logging-threshold wording.** Still open, and parked. Direction and `AGENTS.md` say about 1,000+ can be logged. The review says 1,000 only decides what is pre-listed.
- Cloud notes: Wikipedia is blocked; ESPN rejects headless-Chrome user agents; screenshots use `playwright-core` with swiftshader args; don't `pkill` vite.

## Next steps
1. Next build is Supabase accounts. Do not connect anything until Kylie pastes a project URL and the public anon key. 🚩 The free plan allows 2 active projects and she already uses one. It pauses when a project sits idle.
2. Accounts will hold the log, and also home city, favorite teams, and artists. The spec comes from Kylie. Do not invent it, and do not build it before she writes it.
3. Parked until she asks: You "Did you go?"; Famous nights hand-check and the "Were you there?" title; the logging-threshold wording; Traffic; Night story; the rating formula; Ticketmaster; weather UI; favorite cities; Nights per city. The every-30-minute forecast capture stays parked too.

**Next command to run:**
```bash
git pull --ff-only && sed -n '/## Next/,/## Direction pivot/p' BACKLOG.md
```
