#!/usr/bin/env bash
# Runs after every start; keep desktop SSH and paired mobile access available.
set -euo pipefail
repo_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)
cd "$repo_dir"
umask 077
codex_state_dir="${CODEX_HOME:-/home/node/.codex}"
mkdir -p "$codex_state_dir"
# Start before SSH clients attach, so desktop and mobile can use the saved daemon.
# An existing desktop-created server may be unmanaged; enable it in place instead.
mobile_ready=true
if ! codex remote-control start --json > "$codex_state_dir/connection-startup.json" 2> "$codex_state_dir/connection-startup.log"; then
  if ! python3 .devcontainer/codex-remote-control.py enable > "$codex_state_dir/connection-startup.json"; then
    mobile_ready=false
  fi
fi
bash .devcontainer/start-ssh.sh

if [ "$mobile_ready" = false ]; then
  echo "Desktop SSH is running; mobile startup failed. Check the private Codex connection-startup.log." >&2
  exit 1
fi
