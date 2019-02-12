const availableFeatures = require('./availableFeatures')

describe('availableFeatures', () => {
  it('should return all available features', () => {
    expect(availableFeatures).toMatchSnapshot()
  })
})
