# @zonedigital/stylelint-config-zone

[![Part of Zone Frontend][zone-fe-image]][zone-fe-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][npm-url]

[zone-fe-image]: https://img.shields.io/badge/-frontend-lightgrey.svg?logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjYuMjc3NjY4NzEgMTAuNzU0MjMzMSAxMi45OTU5NTA5IDAgMi43MzMwMDYxMyAwIDAuNzMwMDYxMzUgMy4xOTc2Njg3MSA2LjcxOTE0MTEgMy4xOTc2Njg3MSAwIDEzLjk1MTA0MjkgMTAuMjU5NTA5MiAxMy45NTEwNDI5IDEyLjI2MzMxMjkgMTAuNzUxNjU2NCI+PC9wb2x5Z29uPjwvc3ZnPg==&longCache=true&style=flat-square&colorA=2C2B39&colorB=1010E5
[zone-fe-url]: https://github.com/zone/frontend
[npm-image]: https://img.shields.io/npm/v/@zonedigital/stylelint-config-zone.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@zonedigital/stylelint-config-zone
[downloads-image]: https://img.shields.io/npm/dm/@zonedigital/stylelint-config-zone.svg?style=flat-square

This package provides Zone's CSS style guide as an extensible shared config.

## Installation

`npm i @zonedigital/stylelint-config-zone`

## Usage

Add the Zone config to your stylelint config. Be sure to add as the last item.

```javascript
{
  "extends": [..., "@zonedigital/stylelint-config-zone"],
  // ... project config here, if any ...
}
```
