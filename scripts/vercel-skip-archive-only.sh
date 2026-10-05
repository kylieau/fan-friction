#!/bin/bash
# Vercel: exit 0 skips the deploy, exit 1 builds.
# A nightly schedule file by itself does not change the app, so it should not redeploy.
# A commit that also updates the forecast list in src does build, because the stamp reads that list.
set -euo pipefail

if ! git rev-parse --verify HEAD^ >/dev/null 2>&1; then
  exit 1
fi

names=$(git diff --name-only HEAD^ HEAD)
if [ -z "$names" ]; then
  exit 1
fi

other=$(echo "$names" | grep -v '^data/schedule-archive/' || true)
if [ -z "$other" ]; then
  echo "Only schedule archive files changed. Skipping this deploy."
  exit 0
fi

exit 1
