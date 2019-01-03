#!/bin/sh

set -e

git config user.name $GIT_USER
git config user.email $GIT_EMAIL

sh -c "yarn ember $*"
