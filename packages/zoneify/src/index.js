#! /usr/bin/env node

const commander = require('commander')

const { version } = require('../package.json')
const availableFeatures = require('./util/availableFeatures')
const { log } = require('./util/logger')
const prompt = require('./util/prompt')
const { run } = require('./install')

// Setup and run CLI, get options
const { silent = false, verbose = false } = commander
  .version(version, '-v, --version')
  .option('-S, --silent', 'skips console logs')
  .option('--verbose', 'output verbose messages and internal operations')
  .parse(process.argv)

// Set log level
if (silent) {
  log.level = 'error'
} else if (verbose) {
  log.level = 'debug'
}

// Closure to allow for async/await
(async () => {
  const choices = availableFeatures.map(({ id, name }) => ({ name, value: id }))

  // Wait for user to provide a list of feature IDs
  const { selectedFeatureIds } = await prompt({
    name: 'selectedFeatureIds',
    type: 'checkbox',
    message: 'What features do you need?',
    choices,
    default: choices.map(({ value }) => value),
  })

  // Filter out any unselected features
  const selectedFeatures = availableFeatures.filter(({ id }) => selectedFeatureIds.includes(id))

  // Run install
  await run(selectedFeatures)
})()
