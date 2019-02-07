/* eslint-disable no-console */
const chalk = require('chalk')

const divide = length => chalk.dim(new Array(length).join('-'))

const header = (heading) => {
  const divideLength = heading.length + 1

  return `${chalk.bold(heading)}\n${divide(divideLength)}`
}

exports.divide = divide
exports.header = header
