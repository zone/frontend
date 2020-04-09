# @zonedigital/eslint-config-zone

[![Part of Zone Frontend][zone-fe-image]][zone-fe-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][npm-url]

[zone-fe-image]: https://img.shields.io/badge/-frontend-lightgrey.svg?logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjYuMjc3NjY4NzEgMTAuNzU0MjMzMSAxMi45OTU5NTA5IDAgMi43MzMwMDYxMyAwIDAuNzMwMDYxMzUgMy4xOTc2Njg3MSA2LjcxOTE0MTEgMy4xOTc2Njg3MSAwIDEzLjk1MTA0MjkgMTAuMjU5NTA5MiAxMy45NTEwNDI5IDEyLjI2MzMxMjkgMTAuNzUxNjU2NCI+PC9wb2x5Z29uPjwvc3ZnPg==&longCache=true&style=flat-square&colorA=2C2B39&colorB=1010E5
[zone-fe-url]: https://github.com/zone/frontend
[npm-image]: https://img.shields.io/npm/v/@zonedigital/eslint-config-zone.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@zonedigital/eslint-config-zone
[downloads-image]: https://img.shields.io/npm/dm/@zonedigital/eslint-config-zone.svg?style=flat-square

This package provides Zone's JavaScript style guide as an extensible shared config.

## Installation

`npm i @zonedigital/eslint-config-zone`

## Usage

Add the Zone rules to your eslint config. Be sure to add as the last item.

```javascript
{
  "extends": [..., "@zonedigital/eslint-config-zone"],
  // ... project config here, if any ...
}
```

### Compat

This config uses [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat). It lints the browser compatibility of your code via [Browserslist](https://github.com/browserslist/browserslist) (see Zone's [browserslist package](https://github.com/zone/frontend/tree/master/packages/browserslist-config)). Potential browser compatibility issues will be shown as warnings. If you're using [babel-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env#usebuiltins-usage) and it is using the same browserslist config to automatically add these polyfills, you can silence the warnings - see [Adding polyfills section](#adding-polyfills) below.

#### Adding polyfills

If for example you are using `fetch` and it is not supported by all the browsers in your support matrix then you can add a polyfill. To tell the linter you have done this, [add a reference to the polyfill](https://github.com/amilajack/eslint-plugin-compat/wiki/Adding-polyfills).
