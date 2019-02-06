[![Zone][img-zone]][url-zone]

# Zone: Frontend

[![Part of Zone Frontend][zone-fe-image]][zone-fe-url] [![Travis][img-travis]][url-travis] [![lerna][img-lerna]][url-lerna] [![License][img-license]][url-license] [![Greenkeeper][img-greenkeeper]][url-greenkeeper]

Mono repo for Zone's frontend setup and tooling.

## Packages

See `./packages/*` for individual package installation details.

| Package                 | Description                       |
| ----------------------- | --------------------------------- |
| [browserslist-config]   | Browserslist browser matrix       |
| [eslint-config-react]   | Base+React JavaScript style guide |
| [eslint-config-vue]     | Base+Vue JavaScript style guide   |
| [eslint-config-zone]    | Base JavaScript style guide       |
| [jarvis]                | Config CLI tool                   |
| [stylelint-config-zone] | Base CSS style guide              |

## Install (BETA)

If you're looking for a easier way to get these configs in your project, be sure to check out [Jarvis](jarvis).

Using NPM's NPX tool, you can use it without install, just run: `npx @zonedigital/jarvis`

## Maintenance

This repo is managed with [Lerna][url-lerna] and [Yarn workspaces][url-yarn-workspaces]. Be sure to read up before editing.

This repo has been setup with fixed verisoning, in other words, all packages have the same version number. Bump a major release on one package will cause a major bump on all other packages.

Be sure to check that all the [Travis CI][url-travis] build jobs have passed.

[browserslist-config]: https://github.com/zone/frontend/tree/master/packages/browserslist-config
[eslint-config-react]: https://github.com/zone/frontend/tree/master/packages/eslint-config-react
[eslint-config-vue]: https://github.com/zone/frontend/tree/master/packages/eslint-config-vue
[eslint-config-zone]: https://github.com/zone/frontend/tree/master/packages/eslint-config-zone
[jarvis]: https://github.com/zone/frontend/tree/master/packages/jarvis
[stylelint-config-zone]: https://github.com/zone/frontend/tree/master/packages/stylelint-config-zone
[img-greenkeeper]: https://badges.greenkeeper.io/zone/frontend.svg?style=flat-square
[img-lerna]: https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square
[img-license]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[img-travis]: https://img.shields.io/travis/zone/frontend.svg?style=flat-square
[img-zone]: .github/logo.svg
[url-greenkeeper]: https://greenkeeper.io/
[url-lerna]: https://lernajs.io/
[url-license]: https://github.com/zonedigital/frontend/blob/master/LICENSE
[url-travis]: https://travis-ci.org/zone/frontend
[url-yarn-workspaces]: https://yarnpkg.com/lang/en/docs/workspaces/
[url-zone]: https://zonedigital.com
[zone-fe-image]: https://img.shields.io/badge/-frontend-lightgrey.svg?logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjYuMjc3NjY4NzEgMTAuNzU0MjMzMSAxMi45OTU5NTA5IDAgMi43MzMwMDYxMyAwIDAuNzMwMDYxMzUgMy4xOTc2Njg3MSA2LjcxOTE0MTEgMy4xOTc2Njg3MSAwIDEzLjk1MTA0MjkgMTAuMjU5NTA5MiAxMy45NTEwNDI5IDEyLjI2MzMxMjkgMTAuNzUxNjU2NCI+PC9wb2x5Z29uPjwvc3ZnPg==&longCache=true&style=flat-square&colorA=2C2B39&colorB=1010E5
[zone-fe-url]: https://github.com/zone/frontend
