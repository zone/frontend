# @zonedigital/eslint-config-vue

[![Part of Zone Frontend][zone-fe-image]][zone-fe-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][npm-url]

[zone-fe-image]: https://img.shields.io/badge/-frontend-lightgrey.svg?logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjYuMjc3NjY4NzEgMTAuNzU0MjMzMSAxMi45OTU5NTA5IDAgMi43MzMwMDYxMyAwIDAuNzMwMDYxMzUgMy4xOTc2Njg3MSA2LjcxOTE0MTEgMy4xOTc2Njg3MSAwIDEzLjk1MTA0MjkgMTAuMjU5NTA5MiAxMy45NTEwNDI5IDEyLjI2MzMxMjkgMTAuNzUxNjU2NCI+PC9wb2x5Z29uPjwvc3ZnPg==&longCache=true&style=flat-square&colorA=2C2B39&colorB=1010E5
[zone-fe-url]: https://github.com/zone/frontend
[npm-image]: https://img.shields.io/npm/v/@zonedigital/eslint-config-vue.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@zonedigital/eslint-config-vue
[downloads-image]: https://img.shields.io/npm/dm/@zonedigital/eslint-config-vue.svg?style=flat-square

This package provides Zone's JavaScript style guide for Vue as an extensible shared config. It extends [Zones base config](https://github.com/zone/frontend/tree/master/packages/eslint-config-zone).

## Requirements

As this package is a config, you'll need to ensure you've installed any peer dependencies.

### Yarn

`yarn add eslint eslint-plugin-import eslint-plugin-vue`

### NPM

`npm i eslint eslint-plugin-import eslint-plugin-vue`

## Installation

### Yarn

`yarn add @zonedigital/eslint-config-vue`

### NPM

`npm i @zonedigital/eslint-config-vue`

## Usage

Add the Zone rules to your eslint config. Be sure to add as the last item.

```javascript
{
  "extends": [..., "@zonedigital/eslint-config-vue"],
  // ... project config here, if any ...
}
```

**Optional but recommended:** Remove duplicated rules from your eslint config.
