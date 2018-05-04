const { CLIEngine } = require('eslint')
const { name: NPM_PACKAGE } = require('./package.json')

describe(NPM_PACKAGE, () => {
  it('should provide a config', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: require.resolve('./index.js'),
    })

    expect(cli.getConfigForFile()).toMatchSnapshot()
  })
})
