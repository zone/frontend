#! /usr/bin/env node

const { install } = require('./src/install')

install(
  require('./src/plugins/browserslist'),
  require('./src/plugins/editorConfig'),
  require('./src/plugins/eslint'),
  require('./src/plugins/stylelint'),
)
