# @zonedigital/stylelint-config-zone

[![npm][npm-image]][npm-url] [![downloads][downloads-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@zonedigital/stylelint-config-zone.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@zonedigital/stylelint-config-zone
[downloads-image]: https://img.shields.io/npm/dm/@zonedigital/stylelint-config-zone.svg?style=flat-square

This package provides Zone's CSS style guide as an extensible shared config.

It is part of [Zone Frontend](https://github.com/zone/frontend).

## Installation

### Yarn

`yarn add @zonedigital/stylelint-config-zone`

### NPM

`npm i @zonedigital/stylelint-config-zone`

## Usage

Add the Zone config to your stylelint config. Be sure to add as the last item.

```javascript
{
  "extends": [..., "@zonedigital/stylelint-config-zone"],
  // ... project config here, if any ...
}
```

**Optional but recommended:** Remove duplicated rules from your stylelint config.
