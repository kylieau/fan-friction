# Build 4: check-only pass (Codex GPT-6.1 Sol, medium effort)

Claude's build 4 went straight to main with no PR; review ebeaa52..3e91839.

Run this once, at the end of build 4, after Composer's and Claude Code's PRs have merged. **Check only: do not plan, do not rebuild, do not add features.** Kylie dropped Sol's planning step on Oct 13.

## Read
1. Pull the latest `main`. Read `docs/build-4/build-notes-4-oct12.md` (source of truth), especially "Model split final" and "Parked backlog moved into build 4".
2. `docs/build-4-plan.md`, if present, is an optional reference only.

## Check
- Every decided build 4 item is built as the notes say: §0 crowd number (Final, else Announced, else Estimated), §1 city view, R10 "New stub", C01, C03, C11, C16, C15 Chicago, stub tags, and the P1–P6 parts marked settled.
- Nothing was built that the notes mark open or blocked (T13 filter combining, P5 rich Forecast).
- P2 is no longer blocked: Supabase has been live since Oct 5. Use the existing project; never create a new one.
- Chicago against its research and the Milwaukee pattern.
- Tests and build pass.

## Output
A short list: passed, gaps (file and line, quoting the note), and small fixes. Fix only small, clear gaps in one PR; list anything bigger as a question for Kylie. Then stop.
