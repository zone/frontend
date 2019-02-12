const { addDependency, addPackageJsonChange } = require('../install')

exports.name = 'ESLint'

exports.questions = [
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
]

exports.run = ({ framework }) => {
  const packageName = `@zonedigital/eslint-config-${framework}`

  addDependency({ name: packageName, includePeerDependencies: true })
  addPackageJsonChange(current => ({
    ...current,
    eslintConfig: {
      extends: packageName,
    },
  }))
}
