#!/bin/bash

## Need to install webp tool by:
## brew install webp
## or
## sudo apt install webp

# nsure that we are in the scripts folder
cd "$(dirname "$(realpath "$0")")" || exit 1

## Convert all png images to webp
find ../static/assets/images/ -type f -iname '*.png' -exec sh -c '
  for f; do
    out="${f%.png}.webp"
    if cwebp -q 100 "$f" -o "$out"; then
      rm "$f"
    fi
  done
' sh {} +
