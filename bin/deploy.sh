#!/bin/bash

# Default values
build_command="build:staging"
build_dir="dist"
deploy_branch="deploy"
commit_message="Automatic build commit"

# Check if an argument was passed
if [ $# -eq 1 ]; then
    if [ $1 = "--docs" ]; then
        build_command="docs"
        build_dir="docs"
        deploy_branch="deploy-docs"
        commit_message="Automatic docs build commit"
    fi
fi

# Build the project
pnpm run $build_command

# Navigate to the build directory
cd $build_dir

# Initialize a new git repository if doesn't exist
if [ ! -d ".git" ]; then
    git init
fi

# Check if branch exists
if ! git rev-parse --verify $deploy_branch > /dev/null 2>&1; then
    git checkout --orphan $deploy_branch
    git rm -rf .
else
    git checkout $deploy_branch
fi

# Add all files
git add -A

# Commit changes
git commit -m "$commit_message"

# Push to the remote branch
git push -f git@github.com:alexperronnet/openclassrooms-p12-sportsee.git $deploy_branch

# Navigate back to the project root
cd -

# Delete the build directory
rm -rf $build_dir
