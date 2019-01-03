#!/bin/sh

set -e

git --global config user.name $GIT_USER
git --global config user.email $GIT_EMAIL

sh -c "yarn ember $*"
