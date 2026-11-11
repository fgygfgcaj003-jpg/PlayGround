#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
cd "$PROJECT_DIR"

/usr/bin/time -p test -n "${CAPTURE_URL:-}" 
/usr/bin/time -p test -n "${CAPTURE_DIR:-}"
/usr/bin/time -p node --check capture-runner.mjs
exec /usr/bin/time -p node capture-runner.mjs
