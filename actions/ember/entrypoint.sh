#!/bin/sh

set -e

git config --global user.name $GIT_USER
git config --global user.email $GIT_EMAIL

sh -c "yarn ember $*"
