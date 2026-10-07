# Sync: update the handoff, then commit and push

Sync `MEMORY_HANDOFF.md` with the latest progress.

Act as a strict editor. Read the existing file and rewrite it as a single concise snapshot. Never append logs to the bottom. Never drop content just to save space: if it still matters, move it to `BACKLOG.md` instead.

1. **Current State**: the exact feature or fix in focus, and whether it is committed, uncommitted, or verified.
2. **Changes Made**: from `git diff --stat`, but attribute only files this session touched. Parallel sessions dirty this working tree, so call out anything that isn't ours and leave it unstaged.
3. **Key Decisions**: add new constraints; keep older ones only if they still affect upcoming work.
4. **Backlog & Next Steps**: anything deferred belongs in `BACKLOG.md`, not here, because this file gets overwritten every session. Before deleting a task as done, verify it against the code, not against this file. End with the exact next command to run.
5. Say which tool wrote it and when (for example "Last synced: Oct 8, 2026, Codex"), so the next session knows who to check with.

Then stage and commit as "docs: sync memory handoff state" (add your tool's usual attribution line) and push. Do not ask for confirmation.
