const { addDependency, addConfigChange } = require('../install')
const createPlugin = require('../util/createPlugin')

module.exports = createPlugin({
  id: 'stylelint',
  name: 'stylelint',
  actions: () => {
    const packageName = '@zonedigital/stylelint-config-zone'

    addDependency(packageName)
    addConfigChange({
      message: 'Added stylelint',
      reducer: current => ({
        ...current,
        stylelint: {
          extends: packageName,
        },
      }),
    })
  },
})
