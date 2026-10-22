# Build 7 · gap report

Written as the build goes (Kylie's instruction, Oct 22, 2026: a running progress log at the top; a later session resumes from it). The spec is [`build-notes-7.md`](build-notes-7.md); step numbers are its §9. Built by Claude Code (Fable 5.1, advisor on) straight on `main`, one commit per step, `npm run build` before each.

## Progress log
| Step | State | Commit | Notes |
|---|---|---|---|
| 1. Groundwork | done | `92b2a35f` | StatCards, FrictionLadder, favoriteOfficialName, Cost type + setters, cost/seats on Plan and carried at settle, opponents on game stubs |
| 2. Naming | done | (step 2 commit) | official names in search results, the Faves picker rows, New stub's team list |
| 3. Cost row, blue rows, 44 pt seat line, Edit stub | next | | Codex review 1 after this |
| 4. Routes and tab bar | | | Codex review 2 after this |
| 5. Upcoming | | | |
| 6. Activity | | | Codex review 3 after this |
| 7. Log an event sheet | | | |
| 8. Your stubs page | | | |
| 9. You rebuild | | | |
| 10. Ranks, Recap | | | |
| 11. Your year, Spend details | | | |
| 12. Profile & Settings, city switcher | | | Codex review 4 after this |

**Skipped reviews (for Kylie to run afterward):** none so far.

## What shipped per step

### Step 1. Groundwork (no visible change)
- `HeaviestStat`, `Stat`, `heaviestEntry` moved from `YouScreen.tsx` to `src/components/StatCards.tsx`; ProfileScreen imports from there.
- `YourYear.tsx` → `FrictionLadder.tsx` (component `FrictionLadder`). The "Your year" name is free for the page.
- `favoriteOfficialName(fav)` in `src/data/favorites.ts`: the team page header's expression (`isCollegeTeam ? teamLongName : team.name`).
- Cost: `Cost`, `CostLine`, `CostKind` in `types.ts`; `cost?: Cost` on `Entry` and `Plan`; `seats?: Seats` on `Plan`. Helpers in `src/data/costs.ts` (`normalizeCost`, `costTotal`, `formatMoney`, `costLine`, the chip orders and labels). Absent = not entered, `free: true` = $0, lines = paid; clearing deletes the key, never writes 0.
- Setters beside `setEntrySeats`: `setEntryCost`, `setPlanCost` (never on Interested), `setPlanSeats` (never on Watching or Interested).
- `settlePassedPlans` carries `seats` and `cost` from the plan in **both** branches (catalog and hand-added) through `carryPlanExtras`. A Watching plan's seat is dropped (watched is not in person).
- Team attribution groundwork: `Entry.opponents` (the away team's filter tag) is written by `entryFromEvent` for catalog games, and `entryTeams(entry)` returns both teams. Existing stubs get their opponent through `retitleStubs` (it already loads every linked stub's event; `TITLE_VERSION` bumped to `opponents-b7`, so it runs once more per log).

### Step 2. Naming
- `favoriteOfficialName` now renders in: global search's team/artist/venue rows (`SearchSheet.tsx`), the Faves picker's rows (`FavRow` in `FavoritesScreen.tsx`, so Your faves, Suggested and Browse by league), the Following sheet's list (retired in step 12, kept consistent until then), and New stub's "Which team?" list (`AddEntryScreen.tsx`; the notes' lean: it counts as search results).
- Team page header verified: `FavoritePage.tsx` already renders `isCollegeTeam ? teamLongName : team.name`; no change.
- Long names wrap: `.log-title` and `.add-record-name` set no `white-space` or ellipsis, so nothing truncates.
- Everything else (Upcoming/Following rows, Home strip, stub rows, FollowRow leads) still uses the shortcut helpers; untouched.

## Advisor calls
1. **Before any code (stage plan).** Asked: is §9's order and my slicing right; anything to settle first. Said: keep §9; open the gap report in commit 1; decide team attribution in groundwork (one home-team tag today, so steps 9–11 can't credit both teams without data); verify the card views don't pass `data` through wholesale before trusting the "cost is private" claim; carry seats and cost in both settle branches; grep the routes rather than trust the a92cf29 list; measure the 36 px filter button and 48 px "+"; the earlier cue is a delete, not a prop; probe Codex at stage 1; pick one currency rule and log it. Did: all of it. Privacy verified in `0026_stub_visibility.sql:116–157`: `entry_cards` and `plan_cards` select named keys (`when`, `venue`, `stamp`, `review`, flags), never `data` itself, so `cost`, `seats` and `opponents` stay owner-only. No SQL needed.

## Codex reviews
(none yet)

## Judgment calls
- **Opponents as their own field, not a second `tags` entry.** `entry.tags` also seeds a new person's first favorites (`favoritesFromLog`, `favorites.ts:93`) and drives the "Team or sport" filter; putting the away team there would make opponents into Faves. `opponents` keeps `tags` and `sides` meaning what they did and lets stats read `entryTeams`. "Seen N" (`entryMatches`) will read opponents too in step 9, since the notes say it is the same all-teams count.
- **Currency (Lean):** the device region's currency, USD when unknown (`deviceCurrency`), stored on the cost so a later locale change cannot alter past amounts. Multi-currency is backlog, as the notes say.
- **A 0 on one line is allowed** ("parking was free" beside a paid ticket); a cost with no lines and no Free is "not entered".

## Skipped
(none yet)

## SQL for Kylie
None. Build 7 needs no migration; the card views already keep `data` private.
