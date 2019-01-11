const invariant = require('../util/invariant')
const prompt = require('./prompt')

module.exports = ({
  actions, id, name, questions,
}) => {
  invariant(id, 'Plugins require an `id` property')
  invariant(name, 'Plugins require a `name` property')
  invariant(
    actions && typeof actions === 'function',
    'Plugins require a `action` property and for it to be a function',
  )

  return {
    id,
    name,
    init: () => (questions ? prompt(questions) : Promise.resolve()).then(answers => () => {
      actions(answers)
    }),
  }
}
