# Contributing

This repo is managed with [Lerna][url-lerna] and [NPM workspaces][url-npm-workspaces]. Be sure to read up before editing.

This repo has been setup with fixed versioning, in other words, all packages have the same version number. Bump a major release on one package will cause a major bump on all other packages.

Be sure to check that all the [Travis CI][url-travis] build jobs have passed.

## Setup

- Pull down repo
- Create a `feature/{name}` branch from `master`
- Run `npm i` in the root of the project
- Run `npx lerna bootstrap`
- Run `npm test --watch`
- Write some code
- Push code
- Open a PR from your branch > `master`, adding labels, milestone and assigning to Zone FE Team for review

[url-npm-workspaces]: https://docs.npmjs.com/cli/v7/using-npm/workspaces
[url-lerna]: https://lernajs.io/
[url-travis]: https://travis-ci.com/zone/frontend
