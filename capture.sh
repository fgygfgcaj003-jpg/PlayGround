#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

: "${CAPTURE_URL:?Set CAPTURE_URL to the exact preview URL}"
: "${CAPTURE_DIR:?Set CAPTURE_DIR outside the source tree for capture evidence}"
: "${RUNTIME_DIR:?RUNTIME_DIR must point to the worker runtime}"

exec /usr/bin/time -p node "$RUNTIME_DIR/scripts/default-capture.mjs"
