const { addDependency, addPackageJsonChange } = require('../install');
const { name, questions, run } = require('./eslint');

jest.mock('../install');

describe('features/eslint', () => {
  it('has a name', () => {
    expect(name).toMatchSnapshot();
  });

  it('has questions', () => {
    expect(questions).toMatchSnapshot();
  });

  describe('run', () => {
    const testPackageJson = { name: 'test package' };

    it('has a run function', () => {
      expect(typeof run).toBe('function');
    });

    describe('no framework', () => {
      run({ framework: 'zone' });

      it('adds a dependency', () => {
        expect(addDependency).toBeCalledWith({
          name: '@zonedigital/eslint-config-zone',
          includePeerDependencies: true,
        });
      });

      it('adds a config change', () => {
        expect(addPackageJsonChange).toMatchSnapshot();
        expect(typeof addPackageJsonChange.mock.results[0].value).toBe(
          'function'
        );
        expect(
          addPackageJsonChange.mock.results[0].value(testPackageJson)
        ).toMatchSnapshot();
      });
    });

    describe('react', () => {
      run({ framework: 'react' });

      it('adds a dependency', () => {
        expect(addDependency).toBeCalledWith({
          name: '@zonedigital/eslint-config-zone',
          includePeerDependencies: true,
        });
      });

      it('adds a config change', () => {
        expect(addPackageJsonChange).toMatchSnapshot();
        expect(typeof addPackageJsonChange.mock.results[0].value).toBe(
          'function'
        );
        expect(
          addPackageJsonChange.mock.results[0].value(testPackageJson)
        ).toMatchSnapshot();
      });
    });

    describe('vue', () => {
      run({ framework: 'vue' });

      it('adds a dependency', () => {
        expect(addDependency).toBeCalledWith({
          name: '@zonedigital/eslint-config-zone',
          includePeerDependencies: true,
        });
      });

      it('adds a config change', () => {
        addPackageJsonChange.mockReturnValue(() => 'hello');
        expect(addPackageJsonChange).toMatchSnapshot();
        expect(typeof addPackageJsonChange.mock.results[0].value).toBe(
          'function'
        );
        expect(
          addPackageJsonChange.mock.results[0].value(testPackageJson)
        ).toMatchSnapshot();
      });
    });
  });
});
