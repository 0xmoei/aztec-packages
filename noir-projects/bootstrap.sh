#!/usr/bin/env bash
source $(git rev-parse --show-toplevel)/ci3/source_bootstrap

cmd=${1:-}

github_group "noir-projects build"

# Use fmt as a trick to download dependencies.
# Otherwise parallel runs of nargo will trip over each other trying to download dependencies.
# Also doubles up as our formatting check.
function prep {
  (cd noir-protocol-circuits && yarn && node ./scripts/generate_variants.js)
  for dir in noir-contracts noir-protocol-circuits mock-protocol-circuits aztec-nr; do
    (cd $dir && ../../noir/noir-repo/target/release/nargo fmt --check)
  done
}
export -f prep

denoise prep

parallel -v --tag --line-buffered --joblog joblog.txt --halt now,fail=1 ::: \
  "denoise ./mock-protocol-circuits/bootstrap.sh $cmd" \
  "denoise ./noir-protocol-circuits/bootstrap.sh $cmd" \
  "denoise ./noir-contracts/bootstrap.sh $cmd"

github_endgroup

# TODO: Testing aztec.nr/contracts requires TXE, so must be pushed to after the final yarn project build.