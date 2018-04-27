# @zonedigital/eslint-config-vue

[![npm][npm-image]][npm-url] [![downloads][downloads-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@zonedigital/eslint-config-vue.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@zonedigital/eslint-config-vue
[downloads-image]: https://img.shields.io/npm/dm/@zonedigital/eslint-config-vue.svg?style=flat-square

This package provides Zone's JavaScript style guide for Vue as an extensible shared config.

It is part of [Zone Frontend](https://github.com/zone/frontend).

## Installation

### Yarn

`yarn add @zonedigital/eslint-config-vue`

### NPM

`npm i @zonedigital/eslint-config-vue`

## Usage

Add the Zone rules to your Eslint config.

```javascript
{
  "extends": ["@zonedigital/eslint-config-vue"],
  // ... config here ...
}
```

**Optional but recommended:** Remove duplicated rules from your Eslint config.
