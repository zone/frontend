# eslint-config-zone

[![npm][npm-image]][npm-url] [![downloads][downloads-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@zonedigital/eslint-config-zone.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@zonedigital/eslint-config-zone
[downloads-image]: https://img.shields.io/npm/dm/@zonedigital/eslint-config-zone.svg?style=flat-square

This package provides Zone's `.eslintrc` as an extensible shared config.

## Installation

### Yarn

`yarn add @zonedigital/eslint-config-zone`

### NPM

`npm i @zonedigital/eslint-config-zone`

## Usage

**.eslintrc**

Add the Zone config to your `.eslintrc` file.

```javascript
{
  "extends": "@zonedigital/eslint-config-zone",
  // ... existing config here ...
}
```

**Optional but recommended:** Remove duplicated rules from your `.eslintrc` file. See the `index.js` file in this repo for the default Zone config.
