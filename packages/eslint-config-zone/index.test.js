const { CLIEngine } = require('eslint')

describe('Validate config', () => {
  it('should not error', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: require.resolve('./index.js'),
    })

    const code = 'const foo = true;\nconst bar = function () {};\nbar(foo);\n'

    expect(cli.executeOnText(code).errorCount).toBe(0)
  })
})
