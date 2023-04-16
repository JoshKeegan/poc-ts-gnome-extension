#!/bin/bash
# Modifies the JS files produced by tsc and makes them GJS compatible.

set -euo pipefail
IFS=$'\n\t'

for src in $(find build -name '*.js'); do
    sed -i \
        -e 's/export function/function/g' \
        -e 's/export var/var/g' \
        -e 's/export const/var/g' \
        -e 's/Object.defineProperty(exports, "__esModule", { value: true });/var exports = {};/g' \
        "$src"
    sed -i -E \
        -e "s/import \* as (\w+) from '@gi-types\/\w+'/const { \1 } = imports.gi/g" \
        -e 's/export class (\w+)/var \1 = class \1/g' \
        -e "s/import \* as (\w+) from '(\w+)'/const \1 = Me.imports.\2/g" \
        "$src"
done
