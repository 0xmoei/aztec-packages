#!/usr/bin/env bash
source $(git rev-parse --show-toplevel)/ci3/source_bootstrap

cmd=${1:-}

# We search the docs/*.md files to find included code, and use those as our rebuild dependencies.
# We prefix the results with ^ to make them "not a file", otherwise they'd be interpreted as pattern files.
hash=$(cache_content_hash \
  .rebuild_patterns \
  $(find docs -type f -name "*.md" -exec grep '^#include_code' {} \; | \
    awk '{ gsub("^/", "", $3); print "^" $3 }' | sort -u)
)

function build {
  echo_header "build docs"
  if cache_download docs-$hash.tar.gz; then
    return
  fi
  rm -rf \
    processed-docs \
    processed-docs-cache \
    docs/reference/developer_references/aztecjs \
    docs/reference/developer_references/smart_contract_reference/aztec-nr
  denoise "yarn install && yarn docusaurus clear && yarn preprocess && yarn typedoc && scripts/move_processed.sh && yarn docusaurus build"
  cache_upload docs-$hash.tar.gz build
}

case "$cmd" in
  ""|"full")
    build
    ;;
  "hash")
    echo "$hash"
    ;;
  "deploy-prod")
    ./deploy_prod.sh
    ;;
  "deploy-preview")
    PR_NUMBER=$1
    AZTEC_BOT_COMMENTER_GITHUB_TOKEN="$2"
    ./deploy_preview.sh "$PR_NUMBER" "$AZTEC_BOT_COMMENTER_GITHUB_TOKEN"
    ;;
  *)
    echo "Unknown command: $cmd"
    exit 1
esac
