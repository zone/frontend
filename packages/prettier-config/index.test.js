const prettier = require('prettier');
const { name: NPM_PACKAGE } = require('./package.json');
const config = require('./index.json');

describe(NPM_PACKAGE, () => {
  it('provides a config', () => {
    expect(config).toMatchSnapshot();
  });

  it('config is valid', () => {
    expect(() =>
      prettier.format('', { ...config, parser: 'babel' })
    ).not.toThrow();
  });
});
