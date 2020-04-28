#!/usr/bin/env bash -eux

PROJECT=${1:-ui}
PROJECT_SOURCE_DIR=projects/$PROJECT
PROJECT_DIST_DIR=dist/$PROJECT

cd "$PROJECT_SOURCE_DIR"
VERSION=$(npm version patch)
cd -

npm run ng -- build ui

git commit "$PROJECT_SOURCE_DIR/package.json" -m "Release $VERSION"
git tag -fa "$VERSION" -m "Release $VERSION"
git push --follow-tags

cd $PROJECT_DIST_DIR

npm publish --access public
cd -
