#!/usr/bin/env bash -eux

PROJECT=${1:-ui}
PROJECT_SOURCE_DIR=projects/$PROJECT
PROJECT_DIST_DIR=dist/$PROJECT

cd "$PROJECT_SOURCE_DIR"
VERSION=$(npm version patch)
cd -

npm run ng -- build ui

cd $PROJECT_DIST_DIR

npm publish --access public
cd -
