#!/bin/bash

# Pre-commit hook to prevent committing secrets
# Place this file in .git/hooks/pre-commit and make it executable

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo "Running pre-commit security checks..."

# Check for .env files
if git diff --cached --name-only | grep -E '\.(env|env\.local|env\.prod)$'; then
  echo -e "${RED}❌ ERROR: Attempting to commit .env files!${NC}"
  echo "These files contain secrets and should never be committed."
  echo ""
  echo "Fix: Run 'git reset HEAD .env*' to unstage"
  exit 1
fi

# Check for AWS/API keys in code
if git diff --cached -U0 | grep -E '(AKIA|sk_live|sk_test|BEGIN RSA|BEGIN PRIVATE|password.*=.*[\'\"]\w)'; then
  echo -e "${RED}⚠️  WARNING: Possible credentials found in diff${NC}"
  echo "Review your changes before committing"
  exit 1
fi

# Check for hardcoded secrets patterns
if git diff --cached | grep -i 'supabase_key\|firebase_key\|api_key.*=' | grep -v 'NEXT_PUBLIC'; then
  echo -e "${RED}❌ ERROR: Hardcoded credentials found!${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Pre-commit checks passed!${NC}"
exit 0
