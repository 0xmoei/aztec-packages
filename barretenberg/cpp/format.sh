#!/usr/bin/env bash
set -e

if [ "$1" == "staged" ]; then
  echo Formatting barretenberg staged files...
  for FILE in $(git diff-index --diff-filter=d --relative --cached --name-only HEAD | grep -e '\.\(cpp\|hpp\|tcc\)$'); do
    clang-format-16 -i $FILE
    sed -i.bak 's/\r$//' $FILE && rm ${FILE}.bak
    git add $FILE
  done
elif [ "$1" == "changed" ]; then
  echo Formatting barretenberg changed files...
  for FILE in $(git diff-index --diff-filter=d --relative --name-only HEAD | grep -e '\.\(cpp\|hpp\|tcc\)$'); do
    clang-format-16 -i $FILE
    sed -i.bak 's/\r$//' $FILE && rm ${FILE}.bak
  done
elif [ "$1" == "check" ]; then
  find ./src -iname *.hpp -o -iname *.cpp -o -iname *.tcc | grep -v src/msgpack-c | grep -v bb/deps  | \
    parallel -N10 clang-format-16 --dry-run --Werror
elif [ -n "$1" ]; then
  for FILE in $(git diff-index --relative --name-only $1 | grep -e '\.\(cpp\|hpp\|tcc\)$'); do
    clang-format-16 -i $FILE
    sed -i.bak 's/\r$//' $FILE && rm ${FILE}.bak
  done
else
  for FILE in $(find ./src -iname *.hpp -o -iname *.cpp -o -iname *.tcc | grep -v src/msgpack-c); do
    clang-format-16 -i $FILE
    sed -i.bak 's/\r$//' $FILE && rm ${FILE}.bak
  done
fi
