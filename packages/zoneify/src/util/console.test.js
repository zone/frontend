const { divide, header } = require('./console')

describe('console', () => {
  it('should log a divide', () => {
    expect(divide(5)).toMatchSnapshot()
  })

  it('should log a header', () => {
    expect(header('Header')).toMatchSnapshot()
  })
})
