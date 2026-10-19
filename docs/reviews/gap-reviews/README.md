# Gap reviews

Independent reviews of the live app and the repo. Each one is a list of issues with *possible* fixes. **None is a decision.** Propose an approach to Kylie and wait for her OK before building from any of them.

**How to run one:** [docs/reviews/review-prompt.md](../review-prompt.md), the shared prompt (Oct 19, 2026), in its **gap review** mode. It asks for the scope as a commit range, journeys mapped to the six interview topics, coverage chosen by risk, severity and confidence as separate columns, reproducible evidence with paths and screenshots, shared causes grouped once, a "checked and found as decided" section, a "not covered" section, and a retest criterion per finding. Lessons from the Oct 19 reviews are in it: a tap check is part of "measured", signed-in flows are named as untested when the walk is headless, and browser or code checks are kept apart from phone, live-account and cross-device checks.

**Naming:** `gap-review-<author>-<yyyy-mm-dd>-<hhmm>-pt.md`, where the time is when it was saved (Pacific). Its screenshots and mockups go in `assets/<author>-<yyyy-mm-dd>-<hhmm>-pt/`. Each review starts with an author / saved / status block. Issue IDs are only unique within one review (Codex uses D01…, GrokBot/Cursor uses A1…), so cite them with the review's author.

| Saved | Author | Review | Status |
|---|---|---|---|
| Oct 7, 2026, 8:02 PM PT | Codex | [docs/reviews/gap-reviews/gap-review-codex-2026-10-07-2002-pt.md](./gap-review-codex-2026-10-07-2002-pt.md) | Closed Oct 9, 2026 |
| Oct 7, 2026, 8:13 PM PT | GrokBot/Cursor | [docs/reviews/gap-reviews/gap-review-grokbot-cursor-2026-10-07-2013-pt.md](./gap-review-grokbot-cursor-2026-10-07-2013-pt.md) (58 issues; includes Kylie's own four notes K1–K4 and six mockups) | Closed Oct 9, 2026 |
| Oct 19, 2026, 9:03 AM PT | Claude Code | [docs/reviews/gap-reviews/gap-review-claude-code-2026-10-19-0903-pt.md](./gap-review-claude-code-2026-10-19-0903-pt.md) (build 6 and its Oct 17–19 correction rounds; 13 findings G1–G13, 11 judgment calls, 2 fixed in session; its later screenshots sit at `assets/` root, not in a dated folder) | Open: G1–G13 and calls 1 and 5 built Oct 19; the pre-existing Near-home item fixed Oct 19 (afternoon); the other judgment calls stand as built; Kylie's word closes it |

When a review's items have all been decided or built, add a `Status: closed, <where it went>, <date>` line to it. The next commit moves it, with its screenshots, to `docs/archive/reviews/gap-reviews/` and fixes the links (`npm run docs:tidy` previews).
