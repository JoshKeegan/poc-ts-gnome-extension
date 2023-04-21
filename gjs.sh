#!/bin/bash
# Modifies the JS files produced by tsc and makes them GJS compatible.

set -euo pipefail
IFS=$'\n\t'

sed -i -E "s/import (\w+) from \"@girs\/.+\"/const { \1 } = imports.gi/g" build/extension.js
