#!/usr/bin/env bash
# Runs once each time the dev container is built.
set -euo pipefail
cd "$(dirname "$0")/.."

# The saved-folder volumes start out owned by root.
sudo chown -R node:node /home/node/.claude /home/node/.config/gh

# First build with volumes: restore the backup taken from the old container.
BACKUP=.devcontainer/.home-backup
if [ -d "$BACKUP/claude" ] && [ ! -d /home/node/.claude/projects ]; then
  cp -a "$BACKUP/claude/." /home/node/.claude/
  [ -f /home/node/.claude.json ] || cp -a "$BACKUP/claude.json" /home/node/.claude.json
  echo "Restored Claude Code settings and history from backup."
fi

git config --global --add safe.directory "$PWD"

npm install -g @anthropic-ai/claude-code vercel

# A headless browser so Claude can screenshot the app while building it.
sudo apt-get update -qq
sudo apt-get install -y -qq --no-install-recommends chromium fonts-noto-color-emoji

npm ci
