const fs = require('fs')
const { promisify } = require('util')

exports.readFile = promisify(fs.readFile)
exports.writeFile = promisify(fs.writeFile)
