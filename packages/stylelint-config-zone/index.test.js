const stylelint = require('stylelint')
const { name: NPM_PACKAGE } = require('./package.json')

describe(NPM_PACKAGE, () => {
  it('config does not error', () => {
    expect.assertions(1)

    const results = stylelint.lint({
      code: 'body { color: #000; }\n',
      configFile: require.resolve('./index.js'),
    })

    return results.then(data => expect(data.errored).toBeFalsy())
  })
})
