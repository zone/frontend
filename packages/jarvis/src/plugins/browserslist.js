const { addDependency, addConfigChange } = require('../install')
const createPlugin = require('../util/createPlugin')

module.exports = createPlugin({
  id: 'browserslist',
  name: 'Browser matrix',
  actions: () => {
    const packageName = '@zonedigital/browserslist-config'

    addDependency(packageName)
    addConfigChange({
      message: 'Added browserslist',
      reducer: current => ({
        ...current,
        browserslist: `extends ${packageName}`,
      }),
    })
  },
})
