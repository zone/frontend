const availableFeatures = require('./availableFeatures');

describe('availableFeatures', () => {
  it('returns all available features', () => {
    expect(availableFeatures).toMatchSnapshot();
  });
});
