/* eslint-disable no-console */
const chalk = require('chalk')

const { log } = console

const logHeader = header => log(chalk.dim(`\n${header}`))

const debug = message => log(chalk.dim(`DEBUG: ${message}`))

exports.log = log
exports.logHeader = logHeader
exports.debug = debug
