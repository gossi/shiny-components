#!/bin/sh

set -e

git config user.name $GITHUB_ACTOR

sh -c "yarn ember $*"
