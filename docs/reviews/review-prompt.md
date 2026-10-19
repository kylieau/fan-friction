# Fan/Friction shared review prompt

Use the shared core below with one mode: **gap review** or **tester-readiness review**. Specify the release/diff, environment and intended test if known; otherwise establish them from the current project. This prompt is usable in Claude Code, Cursor and Codex without a particular tool or browser runner. It is the shared procedure the two review READMEs point at (since Oct 19, 2026, evening, at Kylie's word); the tester brief and interview guide stay the interview's own documents and this prompt does not replace them. It does not change reviews already underway.

## Shared core

Conduct the selected review, rather than stopping at a plan. Assess Fan/Friction against its purpose and approved decisions. Reviews are **evidence and proposals, never build authorization**. Keep application code, dependencies, configuration, schemas and existing documents unchanged. Do not fix even an obvious defect under this review-only instruction. Report in chat unless saving a new dated review and its evidence is explicitly requested; do not commit, push or deploy as part of a review.

### Establish purpose, authority and scope

Start with `AGENTS.md`, `MEMORY_HANDOFF.md` and `BACKLOG.md`. Read:

- `docs/product/direction.md`, then the later applicable decisions in `docs/product/product-review-decisions.md` and `docs/product/product-decisions.md`.
- `docs/reviews/gap-reviews/README.md` and `docs/reviews/tester-readiness-reviews/README.md`.
- `docs/product/tester-brief.md` and `docs/product/tester-interview-guide.md`, including its six interview topics.

Distinguish dated owner decisions from proposals, assistant notes and historical descriptions. Cite the named, dated decision before calling it locked. Resolve older descriptions against later decisions; flag genuine ambiguity without inventing requirements. For example, reviews and notes from before Oct 19, 2026 say “read”; the Oct 19 decision calls the date's number and word the **Verdict**, while **friction** means the event's competition (the brief and guide were updated that evening). Do not edit those historical descriptions during a review or use this wording difference to teach participants the answer.

Fan/Friction is a personal record of live events attended, games and shows together. The log leads; the date's verdict and the event's competition help distinguish an entry and inform a future decision to go. It must work for one person alone and across cities. Do not turn a review into proposals for points, rankings, open posting, public photo walls or navigation. Preserve existing features and respect parked work. Anything can be logged by hand; roughly 1,000+ is pre-listed, and only 5,000+ feeds friction. A small or uncovered event still belongs in the log without an invented verdict.

Record author, review/save time with time zone, mode, revision or diff range, local modifications, environment/deployment version, browser/device/viewport, account state and scope. Reuse an existing development server without disrupting other sessions. If the build changes during the review, identify which checks apply to which revision. Ask only materially blocking questions and continue independent checks.

### Map critical journeys to the six interview topics

Define a coverage matrix from these topics, adding risk-driven branches rather than a generic feature checklist:

| Interview topic | Journey and question to preserve |
|---|---|
| Their events | Open My Stubs, recognize and retrieve entries; inspect title, date, city, venue and missing-data behavior. Can someone recognize their record? |
| Logging | Find a listed game or show and add an unlisted event, including outside home or covered cities; correct, remove, reopen and retrieve it. Is logging simple enough to do at an event, and would someone bother? |
| Their verdict versus the app's | Open a remembered event, its date and explanation; distinguish event competition, date verdict, nearby verdict, forecast and settled/estimated evidence. Obtain the tester's recollection before revealing the app's verdict. |
| Looking ahead | Find an upcoming date through Explore and the relevant event/favorite; check date/event/back navigation. Would the information affect a decision to go? |
| Confusing or missing | Observe discovery, recovery from mistakes, absent information and unexpected destinations without teaching the interface. |
| Overall | Assess whether the record delivers its core value; ask whether the tester would return and what would change that answer. Reviewer opinion cannot answer this for them. |

### Select coverage by risk

Explain each selected risk and its link to a journey. Trace the UI through shared components and callers into `src/data/index.ts`, the relevant data/storage/source modules and scripts where needed. Include games and shows, past and upcoming dates, another metro, and missing/partial data where material; avoid LA-only assumptions.

Prioritize log integrity and account isolation; Private/Friends visibility and permissions; local versus Supabase persistence and sync; imported versus manually entered facts; source failures, duplicates, renamed venues and cancelled/dropped events; local dates/time zones, missing times and verdict/stamp provenance. Inspect formula explanations against current rules without tuning constants to match a person's recollection: tester ratings are evidence, never an accuracy target; attendance on held-out dates is the accuracy target. Final results must not affect an event's rating, and attendance remains evidence rather than a friction input.

For relevant screens cover empty/loading/populated/error states, retries, large lists, keyboard/focus, labels, touch scrolling and small viewports. Following and its Friends permissions support the log; inspect them without making a social network the product's center. State exclusions and why they are acceptable or leave readiness unresolved.

Use an isolated browser and disposable synthetic local data. Do not access `private/`, real accounts or backend writes without explicit authorization. Do not trigger messages, paid services or destructive actions. Use public event facts without associating them with a person's attendance. Public reports, screenshots, URLs, logs and filenames must contain no tester names, emails or event lists; refer only to **the tester**. Leave identifying evidence uncaptured and name the verification limit.

### Execute and distinguish evidence

Keep these evidence classes separate: **code inspection; browser interaction/emulation; real-user observation; physical-device checks; live-account checks; cross-device checks**. For each record performed / failed / untested, the environment and what it proves. Synthetic fixtures and mocked responses must be labeled. Local persistence does not prove account sync; emulation does not prove physical-phone usability; a reviewer completing a task does not prove user discoverability or understanding.

Run appropriate existing checks when feasible and record commands/results. A passing build is not a passing journey. Use phone-size screenshots with reproducible states and numerical measurements for visual claims; state units and distinguish visible bounds from the effective hit area. Cite the source of any threshold, and flag unresolved px/pt assumptions rather than silently equating them.

**A tap check is part of “measured.”** Actually activate each reviewed interactive feature, including any feature previously recorded as built from screenshots. Check the resulting URL/city/date or state, not just its appearance. For a row, lead link and verdict tile with different destinations, tap each independently; test hit-area edges and overlapping controls where relevant, plus Back, reload or persistence as the claim requires. Record expected versus actual outcomes and before/after screenshots. The Oct 19 Stubs tile looked built but its tap opened the event instead of the date: screenshots alone cannot establish interaction correctness. If a feature cannot be tapped, mark it untested rather than built/verified.

When headless access cannot sign in, explicitly name signed-in flows as **untested**: sign-in, Friends timeline, requests, Friends sheet/menu, visibility controls, friends' lines, account/privacy/blocked/people controls, sharing and sync as applicable. Turn each into a concrete authorized phone/live-account check; do not imply signed-out success covers it. Separately name physical-phone keyboard, gestures, sheet drag, deployed performance and cross-device tests still needed. Never treat inability to test as a pass.

### Report findings, evidence and closure

Form initial findings independently before reconciling prior reviews where feasible. Read both Oct 19 snapshots for lessons and reconciliation:

- `docs/reviews/gap-reviews/gap-review-claude-code-2026-10-19-0903-pt.md`
- `docs/reviews/tester-readiness-reviews/tester-readiness-review-claude-code-2026-10-19-0918-pt.md`

Recheck current behavior; classify old findings as confirmed, resolved, changed or unverified. Preserve every past review as a dated snapshot. Cite an issue with its review/author because IDs are not globally unique.

Use this findings table, with **severity and confidence as separate columns**:

| ID | Class | Journey / user consequence | Severity | Confidence | Evidence / affected paths | Proposed remedy | Retest / closure criterion |
|---|---|---|---|---|---|---|---|

Use stable IDs within the review. Classify confirmed defects, requirement deviations, product questions, usability hypotheses, optional enhancements and maintenance risks separately. Rank severity by user impact, likelihood, reach and recoverability; explain uncertainty independently as confidence. Keep structural UX proposals distinct from polish and do not present ambiguous product choices as bugs.

For each finding provide preconditions, synthetic fixture/setup, exact steps, expected behavior and its decision/source, actual behavior, revision-specific `file:line` references, screenshot paths and measured/tap results where applicable. For code-only findings say no browser reproduction was performed; for unavailable screenshots say why. Link evidence, not private material. Group shared causes once, list every affected caller/screen and representative variants, and avoid duplicate issue counts. A visual fix is not “everywhere” until each affected pattern has been checked and measured.

Propose the smallest useful remedy or investigation, rough effort and dependencies. State the exact retest and expected result, including adjacent shared-component regressions. Distinguish implemented from verified, and fixed from accepted/deferred. Close a finding only with retest evidence or an explicit owner disposition; a changed file, screenshot or passing build alone is insufficient. Report remaining uncertainty. Do not alter old reviews or mark a review closed yourself; follow existing closure procedures only when separately authorized.

If saving is requested, follow the selected mode's existing README naming, author/saved/status block and screenshot asset paths. Return a self-contained report with purpose/scope, coverage and verification limits, findings, proposed priority order and closure checks. Use plain words; prefer defensible findings over speculative checklist volume.

## Mode: gap review

Assess the intended product against the current implementation across the selected journeys and risk areas. Trace shared causes through interface, data and failure/recovery paths; separate changed-code findings from pre-existing issues. Include what was checked and worked, not just defects. Return the shared report and findings table, plus owner decisions needed and proposed next steps ordered by user risk. Distinguish test blockers, worthwhile later fixes and optional improvements. Do not implement any proposal.

## Mode: tester-readiness review

Assess readiness for a specified moderated or unmoderated test and its learning questions, not general launch readiness. Attempt the six-topic journeys via realistic entry points. Add a task table with setup, expected success, outcome (**completed / completed with workaround / blocked / untested**), evidence class, screenshot paths, verification limits and effect on the test's validity.

Give one verdict: **ready / ready with explicit conditions / not ready / insufficient evidence**. Name the audience, environment and learning goals it covers. Required critical tasks must work, the tester's authorized account/data must be safe and available, and unresolved failures must not prevent or distort those goals. If a necessary signed-in, phone or cross-device check is untested, make readiness conditional on its exact passing result or use insufficient evidence; signed-out success alone cannot establish account readiness. Split must-resolve-before-test issues, tolerable documented limitations, questions for observation and deferred work. List concrete remaining checks, who can perform them, expected results and when to reassess the verdict.

Append a short proposed test script aligned to all six existing interview topics; do not replace the current guide. Give goals rather than control names: “Add an event you attended that is missing,” “Correct its date,” “Reopen and find it,” “Find an upcoming date and tell me what would affect your decision.” Define observable success and failure signals. Ask one question at a time; wait; ask what the tester expected; record help and workarounds. Collect remembered experience and rating before showing the app's verdict; ask what each was counting without declaring either correct. Do not explain, defend or suggest features. Separate observed behavior, verbatim statements and reviewer inference. The real interview and its private notes require separate authorization and handling; the review itself does not simulate participant evidence.
