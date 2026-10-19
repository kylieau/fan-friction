# Tester readiness reviews

Dated reviews of whether a tester can use Fan/Friction's main flows without help. Findings and possible fixes are review input, not approved build instructions. The interview procedure remains in [docs/product/tester-interview-guide.md](../../product/tester-interview-guide.md).

Each review records its author, save time in Pacific time, task results, verification limits and evidence. Save future reviews as separate dated files rather than replacing earlier snapshots. Private tester material stays in the ignored private folder.

**How to run one:** [docs/reviews/review-prompt.md](../review-prompt.md), the shared prompt (Oct 19, 2026), in its **tester-readiness** mode. It is readiness for one named test and its learning questions, not launch readiness: a task table per journey (completed / completed with workaround / blocked / untested, with the evidence class), one verdict (ready / ready with explicit conditions / not ready / insufficient evidence), explicit readiness conditions, and the remaining checks with who can run them. Signed-in, physical-phone and cross-device checks are named as untested when a headless walk cannot do them; they never pass by implication. A short proposed test script follows the guide's six topics with goals, not control names, and the tester's own rating is collected before the app's verdict is shown.

**Naming:** `tester-readiness-review-<author>-<yyyy-mm-dd>-<hhmm>-pt.md`. Screenshots live in `assets/<author>-<yyyy-mm-dd>-<hhmm>-pt/`.

| Saved | Author | Review | Status |
|---|---|---|---|
| Oct 7, 2026, 8:39 PM PT | Codex | [docs/reviews/tester-readiness-reviews/tester-readiness-review-codex-2026-10-07-2039-pt.md](./tester-readiness-review-codex-2026-10-07-2039-pt.md) | Closed Oct 9, 2026 |
| Oct 7, 2026, 8:50 PM PT | GrokBot | [docs/reviews/tester-readiness-reviews/tester-readiness-review-grokbot-2026-10-07-2050-pt.md](./tester-readiness-review-grokbot-2026-10-07-2050-pt.md) (code and live-site pass; no screenshots) | Closed Oct 9, 2026 |
| Oct 19, 2026, 9:18 AM PT | Claude Code | [docs/reviews/tester-readiness-reviews/tester-readiness-review-claude-code-2026-10-19-0918-pt.md](./tester-readiness-review-claude-code-2026-10-19-0918-pt.md) (headless phone-size walk of ten signed-out flows after build 6; 18 issues R1–R18, one fixed; tap-target and text-size tables; 15 screenshots; the R4 and R8 mocks and built screenshots sit at `assets/` root) | Open: R1–R10 settled Oct 19; polish R11–R17 left |

These reviews are separate from the broader [gap reviews](../gap-reviews/README.md).
