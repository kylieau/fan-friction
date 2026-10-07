# Fix plan: two ESPN feed bugs (Oct 6, 2026)

**Done Oct 6, 2026 (commit fce6191, run in another session).** Found while checking the October research against the app (`docs/archive/research/oct-2026-events/los-angeles.md`). Approved as a plan by Kylie; to be run in another session. Both fixes are inside `src/data/sources/espnSource.ts` only. Nothing on screen changes except that the wrong rows become right.

Before starting: `git pull --ff-only`, then check `origin/cursor/*` branches and open PRs for changes to `espnSource.ts` (per `AGENTS.md`).

## Bug 1: games with no kickoff time yet land on the wrong day

**What Kylie sees:** UCLA's home games on Sat Oct 17, 24 and 31 show as Fri Oct 16, 23 and 30 at 9:00 pm. USC vs. Ohio State (Sat Oct 31) shows as Fri Oct 30 at 9:00 pm.

**Cause:** when a kickoff isn't set, ESPN sends a placeholder time of midnight Eastern (`2026-10-17T04:00Z`) and marks the game `timeValid: false` on both the event and the competition. `toEvent` ignores that flag and converts the placeholder to Pacific, giving 9:00 pm the day before.

Checked live on Oct 6:
```
2026-10-17T04:00Z Wisconsin Badgers at UCLA Bruins   timeValid=false  Rose Bowl
2026-10-24T04:00Z Michigan State Spartans at UCLA     timeValid=false  Rose Bowl
2026-10-31T04:00Z Nevada Wolf Pack at UCLA Bruins     timeValid=false  Rose Bowl
2026-10-31T04:00Z Ohio State Buckeyes at USC Trojans  timeValid=false  Los Angeles Memorial Coliseum
```

**Fix:**
1. Add `timeValid?: boolean` to `EspnGame` and to its competition type.
2. In `toEvent`, treat the time as unset when either flag is `false`.
3. When unset: take the **date** from the placeholder read in `America/New_York` (ESPN's placeholder is midnight Eastern, so that is the real calendar date in any US metro), and set `start: null`. Don't invent a time. `CrowdEvent.start` already allows `null`, and every screen already shows a missing time ("—" / "Time n/a").
4. When set: unchanged (local date and time in the metro's zone).
5. In `upcomingFor`'s sort, use `(a.start ?? '99:99')` so a null start doesn't sort as the text "null".

**Side effect to check:** the event id starts with the date (`2026-10-16-espn-ucla-football-401858494` becomes `2026-10-17-espn-…`). The old ids live in `data/schedule-archive/la/2026-10-04.json` and `2026-10-05.json`; leave those files as they are (they're a record of what was saved). Check whether anything matches a saved night or a stamp to an event by that id across files (`src/data/scheduleArchive.ts`, `startForecastIndex.ts`, `forecastCapture.ts`). If so, say so before changing anything. A saved plan on the old Friday date is very unlikely, but look.

## Bug 2: the Galaxy's upcoming home games never reach the app

**What Kylie sees:** no Galaxy dots on the map for Oct 14 (Portland), Oct 17 (San Diego FC) or Oct 31 (Austin), and none in the nightly schedule file.

**Cause:** for soccer, ESPN's team schedule returns only matches already played. The `?seasontype=2` and `?seasontype=3` requests come back empty. Upcoming matches come only with `?fixture=true`.

Checked live on Oct 6 for the Galaxy (ESPN id 187):
```
(no query)       28 events, latest 2026-09-27 (past results only)
?seasontype=2     0
?seasontype=3     0
?fixture=true     6 events: Oct 11 at St. Louis, Oct 15 02:30Z vs Portland,
                  Oct 18 02:30Z vs San Diego FC, Oct 26 at LAFC,
                  Oct 31 21:00Z vs Austin, Nov 8 at Real Salt Lake
```

**Fix:** in `scheduleFor`, when `t.path` starts with `soccer/`, also request `?fixture=true` (keep the existing requests; the dedupe by id already handles overlap). In a strict read, a failed `fixture=true` request must throw like the others, so the nightly job never saves a soccer-less file.

**Not part of this fix (Kylie decides separately):** LAFC (ESPN id 18966) and Angel City aren't in `ESPN_TEAMS` at all. `?fixture=true` returns LAFC's October home matches correctly (Oct 10, 14, 25), so adding LAFC later is one line plus its team record. Ask before adding.

## Check before committing
1. `npm run build` passes.
2. Run the feed once and list LA events Oct 6–31. Expect UCLA on Oct 17, 24 and 31 with no start time, USC–Ohio State on Oct 31 with no start time, and the Galaxy on Oct 14 (7:30 pm), Oct 17 (7:30 pm) and Oct 31 (2:00 pm).
3. The Kings opener Oct 6 still reads 7:00 pm, the Chargers Oct 11 1:05 pm, the Rams Oct 12 5:15 pm (no regressions).
4. Open the app locally (`npm run dev`) and look at Explore on Oct 16, 17 and 31. Screenshot for Kylie.
5. Commit with a plain-English message. Don't push until Kylie says (her Oct 5 rule).

## Then tell Kylie
Which dates moved, which games appeared, and whether the event-id change touched anything saved.
