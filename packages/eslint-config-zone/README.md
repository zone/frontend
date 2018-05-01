# @zonedigital/eslint-config-zone

[![npm][npm-image]][npm-url] [![downloads][downloads-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@zonedigital/eslint-config-zone.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@zonedigital/eslint-config-zone
[downloads-image]: https://img.shields.io/npm/dm/@zonedigital/eslint-config-zone.svg?style=flat-square

This package provides Zone's JavaScript style guide as an extensible shared config.

It is part of [Zone Frontend](https://github.com/zone/frontend).

## Installation

### Yarn

`yarn add @zonedigital/eslint-config-zone`

### NPM

`npm i @zonedigital/eslint-config-zone`

## Usage

Add the Zone rules to your eslint config. Be sure to add as the last item.

```javascript
{
  "extends": [..., "@zonedigital/eslint-config-zone"],
  // ... project config here, if any ...
}
```

**Optional but recommended:** Remove duplicated rules from your eslint config.
