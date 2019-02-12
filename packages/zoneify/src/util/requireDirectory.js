const glob = require('glob')
const path = require('path')

module.exports = (pattern, { cwd }) => glob.sync(pattern, { cwd }).map(filename => ({
  filename,
  // eslint-disable-next-line global-require, import/no-dynamic-require
  content: require(path.join(cwd, filename)),
}))
