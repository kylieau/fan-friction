# Fan/Friction tester readiness review by Codex October 7, 2026 at 8:39 PM Pacific

**Author:** Codex  
**Saved:** October 7, 2026 at 8:39:39 PM PDT (UTC−07:00)  
**Reviewed:** October 7, 2026  
**Status:** Open review; recommendations are not approved build instructions.

The basic logging flow is ready for a moderated interview. Correction of identifying details is unavailable, and account reliability still needs a separate check. This review assesses the tester's main tasks against the current app and the existing interview guide. It preserves the task walkthrough reported to Kylie; saving it does not authorize app changes.

## Scope and verification

Phone-sized Chromium emulation at 390 × 844, using the existing local development server while Claude was actively building. An isolated, signed-out browser held disposable local entries; Supabase writes were blocked. No repo or app changes were made during the walkthrough. These captures show that session, not a guarantee about the eventual build or deployed site.

The tested manual entry was a Show on October 3, 2026 in Los Angeles, with a disposable title and venue. A second, catalog-linked entry on October 4 provided the other date for comparison. Review and With survived a reload; removal was confirmed. No browser page errors were recorded in the completed walkthrough. An initial attempt to compare two entries on the same date correctly excluded that date; the completed check used different dates.

The tester's actual account, imported nights, sign-in, cross-device sync, physical-phone keyboard and gestures remain unverified. Signed-out local persistence does not demonstrate account reliability. Nearby reads were checked on a seeded date, not across all feed-covered dates. The original gap review's findings are not all retested here.

## Task results

| Task | Result | Evidence and practical limit |
|---|---|---|
| Open an empty log and find Add | Worked in the walkthrough | Add is a plus in the header; the empty-state text points toward sign-in or the map. Whether a tester discovers Add without help remains an interview question. |
| Recognize imported personal nights | Untested | Requires the tester's actual account and phone. |
| Find and log a listed event through search | Not fully tested here | The catalog event was opened directly and marked Attended. Code scopes Add search to home, with no city selector in that step. |
| Add an unlisted night | Worked | The disposable Show saved and opened its own entry page. A nearby read appeared for the tested seeded date. A full manual Game task was not completed in this pass. |
| Add Review and With, then reload | Worked locally | Both fields remained on the reopened entry. No signed-in persistence claim is made. |
| Correct title, date or venue | Blocked in Edit | The editing form only offers Review and With. Correction requires removal and recreation. |
| Compare two different dates | Worked | From a catalog event's Compare with… link, the manual entry appeared in Your nights and opened the side-by-side view. |
| Start comparison from a manual entry | No direct entry point | Its page contains no Compare with… control. It can still be selected as the second night from another night's picker. |
| Remove an entry | Worked | Remove from log opened Keep / Remove confirmation. Confirming removal returned to You and the disposable manual entry was absent. |
| Understand event versus date reads | Requires tester observation | The app presenting both readings does not prove users understand their different scopes. |
| Inspect an upcoming date | Not retested here | Keep this task in the existing interview; no new readiness claim is made. |

Source references: [Add search and manual form](../../src/screens/AddEntryScreen.tsx), [editing and removal](../../src/components/EntryLayer.tsx), [manual entry page](../../src/screens/ManualEntryScreen.tsx), [comparison picker and screen](../../src/screens/CompareScreen.tsx).

## Checks before the interview

1. Verify the tester can sign in on their phone and sees the intended imported nights. The [tester brief](../tester-brief.md) explicitly warns that an open copy can overwrite an import; follow the existing close, import, reopen sequence. This workaround does not establish that the broader sync issues are resolved.
2. Open the tester's covered-city nights and check that reads appear where expected, especially manual entries. Keep private account details and attended lists in the ignored private folder.
3. Pick two or three remembered dates, preferably one busy and one quiet. Check that the comparison path works with those actual entries; begin from a catalog-linked event or date page when the manual entry lacks a direct control.
4. Check the Add form on the physical phone with its keyboard visible. Browser emulation does not establish usable scrolling, date entry or touch behavior.

These are readiness checks, not a newly approved implementation order.

## Suggested interview tasks

Keep the existing [interview guide](../tester-interview-guide.md). Add these short tasks without describing where the controls are:

- “Add a night, then imagine you entered the wrong date. Correct it.” Observe whether they find a path, abandon the attempt, or remove and recreate the entry.
- “Compare this night with another one you remember.” Observe where they start and whether the missing manual-entry control stops them.
- “Close and reopen the app. Find what you just added.” Check retrieval as well as saving.

Before explaining a read, ask **“What do you think this number describes?”** Capture their interpretation of the event and the date. Collect their remembered experience before revealing the app's reading, as the guide already directs. Their ratings are evidence about perception, never a formula-tuning target.

## Potential solutions for discussion

- Allow corrections to manually entered title, date and venue while keeping sourced event facts controlled by their sources.
- Consider a Compare with… entry point on a manual entry that has a usable date and city read.
- Check whether the plus is discoverable before proposing a more prominent Add action in the empty state.
- Verify the existing account-sync findings separately before relying on local task success as evidence that an imported log is safe across devices.

These proposals preserve existing features and require Kylie's approval before building. Related findings and verification limits are in the [Codex gap review](../gap-reviews/gap-review-codex-2026-10-07-2002-pt.md), particularly D01–D03, D06, D08–D09, UX01–UX02 and UX06.

## Screenshot evidence

- [Empty log](assets/codex-2026-10-07-2039-pt/empty-log.png)
- [Filled manual form](assets/codex-2026-10-07-2039-pt/filled-form.png)
- [Created manual night with nearby read](assets/codex-2026-10-07-2039-pt/created-night.png)
- [Review and With after reload](assets/codex-2026-10-07-2039-pt/review-survives-reload.png)
- [Available correction fields](assets/codex-2026-10-07-2039-pt/available-corrections.png)
- [Comparison picker](assets/codex-2026-10-07-2039-pt/compare-picker.png)
- [Two dates side by side](assets/codex-2026-10-07-2039-pt/comparison.png)
- [Removal confirmation](assets/codex-2026-10-07-2039-pt/remove-confirmation.png)
- [Log after removal](assets/codex-2026-10-07-2039-pt/after-removal.png)

## Prompt for an independent GrokBot/Cursor pass

```text
Please conduct an independent tester-readiness review of Fan/Friction while Claude is actively building.

Keep this read-only: no repository edits, installs, commits, account writes, or interference with Claude's server. Use an isolated browser and disposable local entries if possible. Do not open either existing gap review or the Codex tester-readiness review before forming your findings.

Start with AGENTS.md, MEMORY_HANDOFF.md, BACKLOG.md, docs/direction.md, the later product decisions, and the tester interview guide and brief. Distinguish current decisions from stale descriptions and unapproved proposals.

Assess whether a tester can, without Kylie's help:
1. Open their log and recognize their nights.
2. Find and log a listed event, including one outside home.
3. Add an unlisted game or show.
4. Correct a mistake and remove an entry.
5. Add personal details, reopen the app, and find them again.
6. Understand what the event and date reads describe.
7. Compare two nights and inspect an upcoming date.

Inspect actual phone-sized presentation where possible. Separate observed browser behavior, code findings, and untested assumptions. Do not imply that signed-out local tests prove account sync works.

Return:
- A task table: works / needs help / blocked / untested, with evidence.
- Checks needed before the interview.
- A few neutral interview tasks that reveal confusion without teaching the interface.
- Potential solutions for identified problems, clearly marked as proposals.

Respect locked decisions and parked work. Tester ratings are evidence, never a formula-tuning target. Keep personal tester information out of public artifacts. Report in chat; do not build fixes.
```
