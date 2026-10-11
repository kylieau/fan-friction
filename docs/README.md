# docs/

| Folder | What it holds |
|---|---|
| `product/` | What the app is and what Kylie has decided: `direction.md`, the decision logs, the build brief, proposals and plans, her logs, UX notes, the tester kit. |
| `reference/` | How things work: `formula-v4.md` (the live formula), data sources, the new-city checklist, test nights and ratings, researched events, the schedule archive notes. |
| `checks/` | Files the scripts write or read at these exact paths: `expected-draw-check.md`, `postseason-check.md`, `distance-check.md`, `promo-history-rows.csv`. Don't rename them. |
| `research/city-builds/<city>/` | Each city's city-type and venue-table prompts and answers. Two models' answers sit side by side with `-claude` and `-codex` suffixes. `los-angeles/` and `seattle/` also hold the prompts the new-city checklist uses as templates; `next-cities/` is the cross-city scan. |
| `research/topics/` | Research that isn't one city's build: expected draws, hard access, postseason, venue egress, promo history, concert venue figures, teams with no feed, the Ticketmaster price research. |
| `research/events-and-dates/` | Event and past-date collections by city and their prompts (October 2026 events, past dates, theme-park nights). |
| `research/second-opinions/` | Second-opinion prompts and answers. |
| `reviews/` | Independent reviews of the app (`gap-reviews/`) and of tester readiness (`tester-readiness-reviews/`), each with screenshots under `assets/`, plus build notes and the judgment-call decisions. See their READMEs. None is a decision. |
| `design/` | Kylie's approved mockups from the Oct 9–10, 2026 Mock Mosaic, by file name (index: its README). |
| `screenshots/` | Phone-size screenshots from visual checks. |
| `archive/` | `proposals/` (built or decided) and `formula/` (analysis, tuning and calibration history; the live formula is `reference/formula-v4.md`). |

Research is still cited by the code as a source, so it stays in `research/` for good.

## How things move

A new research prompt goes in `research/city-builds/<city>/` or `research/topics/`. Save the answer beside it, named after the prompt (`bay-area-venue-table-answer.md` for `bay-area-venue-table-prompt.md`). A second model's answer takes a suffix (`milwaukee-venue-table-answer-codex.md`).

When an answer has been folded into the decisions, add one line to it:

```
Status: closed, folded into product-decisions.md, Oct 8, 2026
```

Research and reviews stay where they are; the line only marks them finished. A doc in `product/` with that line moves to `archive/proposals/` on the next commit, and the pre-commit hook fixes every link to it.

- Preview: `npm run docs:tidy`
- Do it now: `npm run docs:tidy -- --apply`
- One-off moves: `node scripts/docs-tidy.mjs --manifest moves.json --apply` (`{ "old/path.md": "new/path.md" }`, docs-relative; folders work too)
- Script: `scripts/docs-tidy.mjs`. The hook is `.githooks/pre-commit` and switches on after `npm install`.
