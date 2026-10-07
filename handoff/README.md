# Handoff procedures (any tool)

How a session starts and ends in this repo, written for Claude Code, Cursor and Codex alike. This folder is the single source of truth; the tool-specific entries below only point here, so edit these files, not the pointers.

- **Resume** (start of a session): `handoff/resume.md`
- **Sync** (end of a session): `handoff/sync.md`
- The state they read and write lives in the repo root: `MEMORY_HANDOFF.md` (current snapshot) and `BACKLOG.md` (deferred work).

| Tool | How to run it |
|---|---|
| Claude Code | `/resume-handoff`, `/sync-handoff` (`.claude/skills/`, pointers only) |
| Cursor | `/resume-handoff`, `/sync-handoff` (`.cursor/commands/`, pointers only) |
| Codex | Say "resume the handoff" or "sync the handoff". `AGENTS.md` tells it to follow these files. |
| Anything else | Same: tell it to follow `handoff/resume.md` or `handoff/sync.md`. |
