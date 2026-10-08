# docs/

What's here is what's still in play. Finished research lives in `archive/`.

| Folder | What it holds |
|---|---|
| `docs/` | Product direction and decisions, the build plan, the current formula (`formula-v4.md`), the new-city checklist, data sources, UX notes, test nights, the tester kit. Plus two prompts the new-city checklist uses as templates (`la-venue-table-prompt.md`, `seattle-city-type-prompt.md`). |
| `gap-reviews/` | Independent reviews of the app (Codex, GrokBot/Cursor), each with its screenshots under `assets/`. Open until their items are decided. See its README. |
| `tester-readiness-reviews/` | Independent reviews of whether a tester can use the main flows unaided (Codex, GrokBot), with screenshots under `assets/`. Open until their findings are decided. See its README. |
| `research-queue/` | Prompts that have gone out and are waiting for an answer. |
| `archive/research/` | Answered prompts and their answers, by city and topic. Still cited by the code as sources. |
| `archive/second-opinions/` | Second-opinion prompts and answers. |
| `archive/formula/` | Formula analysis, tuning, review and calibration history. The live formula is `formula-v4.md`. |
| `archive/proposals/` | Proposals and plans that were built or decided. |

Some files stay put because scripts write or read them at these exact paths: `expected-draw-check.md`, `postseason-check.md`, `distance-check.md` and `promo-history-rows.csv`.

## How things move

New research prompts go in `research-queue/`. Save the answer next to its prompt's name (`bay-area-venue-table-answer.md` for `bay-area-venue-table-prompt.md`), in `docs/`.

When an answer has been folded into the decisions, add one line to it:

```
Status: closed, folded into product-decisions.md, Oct 8, 2026
```

On the next commit, the pre-commit hook moves the prompt and its answer to `archive/research/` and updates every link to them. Any other doc with that line (a proposal, a plan) moves to `archive/proposals/`. Nothing is archived without that line.

- Preview: `npm run docs:tidy`
- Do it now: `npm run docs:tidy -- --apply`
- Script: `scripts/docs-tidy.mjs`. The hook is `.githooks/pre-commit` and switches on after `npm install`.
