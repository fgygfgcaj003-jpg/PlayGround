#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
BUILD_DIR="$PROJECT_DIR/dist"
PORT="${PORT:-3000}"
OPENCODE_WEB_DIR="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}"

cd "$PROJECT_DIR"

# This is a dependency-free static project: Three.js is loaded by the page from
# its declared CDN URL, so there is no package manifest to install from.
if [[ -f package.json ]]; then
  if [[ -f package-lock.json ]]; then
    /usr/bin/time -p npm ci --no-audit --no-fund
  else
    /usr/bin/time -p npm install --no-audit --no-fund
  fi
fi

/usr/bin/time -p mkdir -p "$BUILD_DIR" "$OPENCODE_WEB_DIR"
/usr/bin/time -p cp index.html game.js "$BUILD_DIR/"
/usr/bin/time -p /usr/bin/printf '{"project":"%s","directory":"%s"}\n' "$PROJECT_DIR" "$BUILD_DIR" > "$OPENCODE_WEB_DIR/deployment-output.json"

# Keep the server in the foreground for the controller-owned app-server session.
exec /usr/bin/time -p python3 -m http.server "$PORT" --bind 0.0.0.0 --directory "$BUILD_DIR"
