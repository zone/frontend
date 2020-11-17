const { addDependency, addPackageJsonChange } = require('../install');
const { name, questions, run } = require('./eslint');

jest.mock('../install');

describe('features/eslint', () => {
  test('exports a name', () => {
    expect(name).toMatchSnapshot();
  });

  test('exports questions', () => {
    expect(questions).toMatchSnapshot();
  });

  test('exports run function', () => {
    expect(typeof run).toBe('function');
  });

  describe.each([
    ['no framework', '', '@zonedigital/eslint-config'],
    ['React', 'react', '@zonedigital/eslint-config/react'],
    ['Vue', 'vue', '@zonedigital/eslint-config/vue'],
  ])('runs with %s selected', (option, framework, configPath) => {
    beforeAll(() => {
      addDependency.mockReset();
      addPackageJsonChange.mockReset().mockImplementation(cb => cb);

      run({ framework });
    });

    test('adds a dependency', () => {
      expect(addDependency).toBeCalledWith({
        name: '@zonedigital/eslint-config',
        includePeerDependencies: true,
      });
    });

    test('adds a config change', () => {
      expect(
        addPackageJsonChange.mock.results[0].value({ name: 'test package' })
      ).toEqual({
        name: 'test package',
        eslintConfig: {
          extends: configPath,
        },
      });
    });
  });
});
