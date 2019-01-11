const { addDependency, addConfigChange } = require('../install')
const createPlugin = require('../util/createPlugin')

module.exports = createPlugin({
  id: 'eslint',
  name: 'ESLint',
  questions: [
    {
      name: 'framework',
      type: 'list',
      message: 'What type of JS framework are you using?',
      choices: [
        { name: 'None', value: 'zone' },
        { name: 'React', value: 'react' },
        { name: 'Vue', value: 'vue' },
      ],
    },
  ],
  actions: ({ framework }) => {
    const packageName = `@zonedigital/eslint-config-${framework}`

    addDependency(packageName)
    addConfigChange({
      message: 'Added Eslint',
      reducer: current => ({
        ...current,
        eslintConfig: {
          extends: packageName,
        },
      }),
    })
  },
})
