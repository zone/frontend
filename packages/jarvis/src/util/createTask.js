const invariant = require('invariant')
const ora = require('ora')

const { logHeader } = require('./console')

module.exports = ({ name, run }) => {
  invariant(name, 'Tasks require a `name` property')

  const items = []

  return {
    addItem(payload) {
      items.push(payload)
    },
    run() {
      if (!items.length) {
        return Promise.resolve()
      }

      const spinner = ora()

      logHeader(name)

      return run({ items, spinner })
        .then((message) => {
          if (message) {
            spinner.succeed(message)
          }
        })
        .catch((message) => {
          if (message) {
            spinner.fail(message)
          }
        })
    },
  }
}
