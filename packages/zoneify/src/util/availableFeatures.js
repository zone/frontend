const path = require('path')
const invariant = require('invariant')

const requireDirectory = require('./requireDirectory')

module.exports = requireDirectory('../features/!(*.test).js', {
  cwd: __dirname,
}).map(({ filename, content: { questions, name, run } }) => {
  const id = path.basename(filename, path.extname(filename))

  invariant(run, '')

  return {
    id,
    name,
    questions,
    run,
  }
})
