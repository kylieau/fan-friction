#!/usr/bin/env bash
# Initialize new saved volumes from the private pre-rebuild snapshot once.
set -euo pipefail
repo_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)
saved_state="$repo_dir/private/devcontainer-state/latest"
sudo chown -R node:node /home/node/.codex /home/node/.ssh
chmod 700 /home/node/.codex /home/node/.ssh
if [ -f "$saved_state/READY.json" ]; then
  if [ ! -d /home/node/.codex/sessions ] && [ ! -f /home/node/.codex/thread_history_1.sqlite ]; then
    cp -a "$saved_state/codex/." /home/node/.codex/
    echo "Restored Codex history and settings into saved storage."
  fi
  for name in fan-friction-host-ed25519 fan-friction-host-ed25519.pub fan-friction-authorized-keys; do
    if [ ! -e "/home/node/.ssh/$name" ]; then
      cp -a "$saved_state/ssh/$name" "/home/node/.ssh/$name"
    fi
  done
fi
if [ ! -f /home/node/.ssh/fan-friction-host-ed25519 ]; then
  ssh-keygen -q -t ed25519 -N '' -f /home/node/.ssh/fan-friction-host-ed25519
fi
if [ ! -f /home/node/.ssh/fan-friction-authorized-keys ]; then
  echo "No saved SSH public key found; add your key before starting the connection." >&2
  exit 1
fi
chmod 600 /home/node/.ssh/fan-friction-host-ed25519 /home/node/.ssh/fan-friction-authorized-keys
