const browserslist = require('browserslist')
const { name: NPM_PACKAGE } = require('./package.json')
const config = require('./')

describe(NPM_PACKAGE, () => {
  it('exports an array', () => {
    expect(Array.isArray(config)).toBe(true)
  })

  it('does not throw an error when extended', () => {
    // eslint-disable-next-line global-require
    jest.doMock(NPM_PACKAGE, () => require('./'), { virtual: true })

    expect(() => browserslist([`extends ${NPM_PACKAGE}`])).not.toThrow()
  })
})
