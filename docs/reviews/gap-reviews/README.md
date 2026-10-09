# Gap reviews

Independent reviews of the live app and the repo. Each one is a list of issues with *possible* fixes. **None is a decision.** Propose an approach to Kylie and wait for her OK before building from any of them.

**Naming:** `gap-review-<author>-<yyyy-mm-dd>-<hhmm>-pt.md`, where the time is when it was saved (Pacific). Its screenshots and mockups go in `assets/<author>-<yyyy-mm-dd>-<hhmm>-pt/`. Each review starts with an author / saved / status block. Issue IDs are only unique within one review (Codex uses D01…, GrokBot/Cursor uses A1…), so cite them with the review's author.

| Saved | Author | Review | Status |
|---|---|---|---|
| Oct 7, 2026, 8:02 PM PT | Codex | [gap-review-codex-2026-10-07-2002-pt.md](gap-review-codex-2026-10-07-2002-pt.md) | Open |
| Oct 7, 2026, 8:13 PM PT | GrokBot/Cursor | [gap-review-grokbot-cursor-2026-10-07-2013-pt.md](gap-review-grokbot-cursor-2026-10-07-2013-pt.md) (58 issues; includes Kylie's own four notes K1–K4 and six mockups) | Open |

When a review's items have all been decided or built, add a `Status: closed, <where it went>, <date>` line to it. The next commit moves it, with its screenshots, to `docs/archive/reviews/gap-reviews/` and fixes the links (`npm run docs:tidy` previews).
