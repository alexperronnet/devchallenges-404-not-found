#!/bin/bash

# Default values
build_command="docs"
build_dir="docs"
documentation_branch="documentation"
commit_message="Automatic docs build commit"

# Build the project
pnpm run $build_command

# Navigate to the build directory
cd $build_dir

# Initialize a new git repository if doesn't exist
if [ ! -d ".git" ]; then
    git init
fi

# Check if branch exists
if ! git rev-parse --verify $documentation_branch > /dev/null 2>&1; then
    git checkout --orphan $documentation_branch
    git rm -rf .
else
    git checkout $documentation_branch
fi

# Add all files
git add -A

# Commit changes
git commit -m "$commit_message"

# Push to the remote branch
git push -f git@github.com:alexperronnet/openclassrooms-p12-sportsee.git $documentation_branch

# Navigate back to the project root
cd -

# Delete the build directory
rm -rf $build_dir
