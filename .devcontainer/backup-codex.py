#!/usr/bin/env python3
"""Snapshot Codex state without displaying chats or credentials."""
import datetime
import json
import os
from pathlib import Path
import shutil
import sqlite3
import time

os.umask(0o077)
repo = Path(__file__).resolve().parents[1] if Path(__file__).resolve().parent.name == '.devcontainer' else Path('/workspaces/fan-friction')
base = repo / 'private/devcontainer-state'
base.mkdir(parents=True, exist_ok=True)
backup = base / datetime.datetime.now(datetime.timezone.utc).strftime('snapshot-%Y%m%dT%H%M%S%fZ')
backup.mkdir()
source = Path('/home/node/.codex')
dest = backup / 'codex'
skipped = {'.tmp', 'tmp', 'ipc', 'app-server-control', 'thread-writer-locks', 'shell_snapshots'}
def ignore(directory, names):
    return [name for name in names if name in skipped or name.endswith(('.sqlite', '.sqlite-wal', '.sqlite-shm', '.lock'))]
shutil.copytree(source, dest, symlinks=True, ignore=ignore)
databases = []
for path in source.glob('*.sqlite'):
    deadline = time.monotonic() + 45
    def progress(status, remaining, total):
        if time.monotonic() > deadline:
            raise TimeoutError('Database backup timed out; snapshot will not be marked ready')
    with sqlite3.connect(path.as_uri() + '?mode=ro', uri=True, timeout=10) as original:
        with sqlite3.connect(dest / path.name) as saved:
            original.backup(saved, pages=256, progress=progress, sleep=0.05)
            if saved.execute('PRAGMA quick_check').fetchone()[0] != 'ok':
                raise RuntimeError('Backup integrity check failed')
    databases.append(path.name)
ssh_dest = backup / 'ssh'
ssh_dest.mkdir()
for name in ['fan-friction-host-ed25519', 'fan-friction-host-ed25519.pub', 'fan-friction-authorized-keys']:
    shutil.copy2(Path('/home/node/.ssh') / name, ssh_dest / name)
(backup / 'READY.json').write_text(json.dumps({'databases': databases, 'sessions': sum(1 for _ in (dest / 'sessions').rglob('*.jsonl'))}, indent=2) + '\n')
link = base / 'latest.next'
link.unlink(missing_ok=True)
link.symlink_to(backup.name, target_is_directory=True)
link.replace(base / 'latest')
print('Verified backup created in private/devcontainer-state/latest; ignored by Git.')
print(f'Checked {len(databases)} SQLite databases.')
