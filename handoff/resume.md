# Resume: pick up where the last session left off

Read `MEMORY_HANDOFF.md` and `BACKLOG.md` in the repo root before anything else.

1. Run `git fetch`, then `git status -sb` and `git log -5 --oneline`. Confirm the repo matches what the handoff describes, and flag any discrepancy. The handoff can be stale, and other sessions (Claude Code, Cursor, Codex) push to `main` and to `origin/cursor/*` branches.
2. The working tree usually holds files from parallel sessions. Work out which dirty files the handoff claims as ours; never stage or revert the rest.
3. Restate Current State and Next Steps in 2-3 sentences, corrected for whatever you just found.
4. Read Key Decisions so we don't repeat a failed approach. Before treating any backlog item as open, verify it against the code, not the file.
5. Tell Kylie what you plan to do first, then wait. Don't start editing.
