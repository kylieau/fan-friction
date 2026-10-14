#!/usr/bin/env bash
# Start the saved, key-only Codex connection after each container start.
set -euo pipefail
repo_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)
ssh_dir=/home/node/.ssh
sudo mkdir -p /run/sshd
sudo /usr/sbin/sshd -t -f "$repo_dir/.devcontainer/sshd_config"
# The saved PID can be stale after a restart; only reuse an actual SSH listener.
if [ -f "$ssh_dir/fan-friction-sshd.pid" ]; then
  saved_pid=$(cat "$ssh_dir/fan-friction-sshd.pid")
  if [[ "$saved_pid" =~ ^[0-9]+$ ]] && sudo kill -0 "$saved_pid" 2>/dev/null && [ "$(cat "/proc/$saved_pid/comm" 2>/dev/null)" = sshd ]; then
    exit 0
  fi
fi
sudo /usr/sbin/sshd -f "$repo_dir/.devcontainer/sshd_config" -E "$ssh_dir/fan-friction-sshd.log"
