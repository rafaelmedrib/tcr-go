# tcr-go

## Objective
This repository is intended to be used as a practical guide to the TCR approach using a rebase workflow.

## Rationale

##### Test && Commit || Revert

##### Rebase Workflow

## Workflow

#### Creating a new trunk:
* create a new repo from the template

`git hub`

This opens your default browser on the boilerplate repo, so you can use it to create the new repo.

#### Starting to work from the working account

* fork the newly created repo to your working account
* clone the forked repo

`git start <repo_name>`

This clones the forked repo.

* access the cloned repository (`cd <repo_name>`) and set everything up

`git i`
This adds the upstream (trunk) repository to your remotes and install the dependencies.

* sync with upstream

`git sync`

This fetches the upstream remote, checkout to master and merge the upstream master into it

* start your feature passing the branch name as argument

`git feature <feature_name>`

This creates a new branch from master and creates the first commit

* do your work commiting tcr-style

`git tcr <kebab-case-commit-name>`

* * checks if there are compiling issues
* * run the tests from the 'test' directory and check the test coverage
* * in case the tests pass successfully, changes are commit
* * in case the tests fail, changes are reverted

* prepare for upstream (squash all but the first commit)

`git prepare`

This fetches the upstream and start the interactive rebase process.
Ideally you would pick the first commit and squash all the subsequent ones.
Be meaningful here by following the best practices described in the support material provided in the references.

* * in case of conflict use `git status` to find the conflicting files and resolve them;
* * then proceed to `git add` the resolved files again and use `git rebase --continue`

* publish to origin passing the name of feature (same as branch name)

`git pub <feature_name>`

This pushes all the changes to the origin remote

* open the PR to the upstream repo
* once merged, delete local and origin feature branch and update you origin remote

## References
