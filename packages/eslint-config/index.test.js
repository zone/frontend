const { ESLint } = require('eslint');
const { name: NPM_PACKAGE } = require('./package.json');

describe.each([
  ['', './index.js'],
  ['/react', './react.js'],
  ['/vue', './vue.js'],
])(`${NPM_PACKAGE}%s`, (config, configPath) => {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: require.resolve(configPath),
  });

  test.each([
    ['JavaScript', './test.js'],
    ['TypeScript', './test.ts'],
  ])('%s', async (sourceType, exampleFilePath) => {
    expect(
      await eslint.calculateConfigForFile(exampleFilePath)
    ).toMatchSnapshot();
  });
});
