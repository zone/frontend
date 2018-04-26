# stylelint-config-zone

[![npm][npm-image]][npm-url] [![downloads][downloads-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@zonedigital/stylelint-config-zone.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@zonedigital/stylelint-config-zone
[downloads-image]: https://img.shields.io/npm/dm/@zonedigital/stylelint-config-zone.svg?style=flat-square

This package provides Zone's `.stylelintrc` as an extensible shared config.

## Installation

### Yarn

`yarn add @zonedigital/stylelint-config-zone`

### NPM

`npm i @zonedigital/stylelint-config-zone`

## Usage

**.stylelintrc**

Add the Zone config to your `.stylelintrc` file.

```javascript
{
  "extends": "@zonedigital/stylelint-config-zone",
  // ... existing config here ...
}
```

**Optional but recommended:** Remove duplicated rules from your `.stylelintrc` file. See the `index.js` file in this repo for the default Zone config.
