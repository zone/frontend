const stylelint = require('stylelint')

describe('Validate config', () => {
  it('should not error', () => {
    expect.assertions(1)

    const results = stylelint.lint({
      code: 'body { color: #000; }\n',
      config: require('./index.js'),
    })

    return results.then(data => expect(data.errored).toBeFalsy())
  })
})
