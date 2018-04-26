# @zonedigital/stylelint-config-zone

[![npm][npm-image]][npm-url] [![downloads][downloads-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@zonedigital/stylelint-config-zone.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@zonedigital/stylelint-config-zone
[downloads-image]: https://img.shields.io/npm/dm/@zonedigital/stylelint-config-zone.svg?style=flat-square

This package provides Zone's CSS style guide as an extensible shared config.

## Installation

### Yarn

`yarn add @zonedigital/stylelint-config-zone`

### NPM

`npm i @zonedigital/stylelint-config-zone`

## Usage

**.stylelintrc**

Add the Zone config to your stylelint config.

```javascript
{
  "extends": ["@zonedigital/stylelint-config-zone"],
  // ... config here ...
}
```

**Optional but recommended:** Remove duplicated rules from your stylelint config.
