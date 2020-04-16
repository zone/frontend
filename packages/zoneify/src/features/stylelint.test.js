const { addDependency, addPackageJsonChange } = require('../install');
const { name, questions, run } = require('./stylelint');

jest.mock('../install');

describe('features/stylelint', () => {
  it('has a name', () => {
    expect(name).toMatchSnapshot();
  });

  it('has no questions', () => {
    expect(questions).toMatchSnapshot();
  });

  describe('run', () => {
    const testPackageJson = { name: 'test package' };

    run();

    it('has a run function', () => {
      expect(typeof run).toBe('function');
    });

    it('adds a dependency', () => {
      expect(addDependency).toBeCalledWith({
        name: '@zonedigital/stylelint-config-zone',
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
});
