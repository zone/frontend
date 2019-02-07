const { addDependency, addPackageJsonChange } = require('../install')
const { name, questions, run } = require('./eslint')

jest.mock('../install')

describe('features/eslint', () => {
  it('should have a name', () => {
    expect(name).toMatchSnapshot()
  })

  it('should have questions', () => {
    expect(questions).toMatchSnapshot()
  })

  describe('run', () => {
    const testPackageJson = { name: 'test package' }

    it('should have a run function', () => {
      expect(typeof run).toBe('function')
    })

    describe('no framework', () => {
      run({ framework: 'zone' })

      it('should add a dependency', () => {
        expect(addDependency).toBeCalledWith({
          name: '@zonedigital/eslint-config-zone',
          includePeerDependencies: true,
        })
      })

      it('should add a config change', () => {
        expect(addPackageJsonChange).toMatchSnapshot()
        expect(typeof addPackageJsonChange.mock.results[0].value).toBe('function')
        expect(addPackageJsonChange.mock.results[0].value(testPackageJson)).toMatchSnapshot()
      })
    })

    describe('react', () => {
      run({ framework: 'react' })

      it('should add a dependency', () => {
        expect(addDependency).toBeCalledWith({
          name: '@zonedigital/eslint-config-zone',
          includePeerDependencies: true,
        })
      })

      it('should add a config change', () => {
        expect(addPackageJsonChange).toMatchSnapshot()
        expect(typeof addPackageJsonChange.mock.results[0].value).toBe('function')
        expect(addPackageJsonChange.mock.results[0].value(testPackageJson)).toMatchSnapshot()
      })
    })

    describe('vue', () => {
      run({ framework: 'vue' })

      it('should add a dependency', () => {
        expect(addDependency).toBeCalledWith({
          name: '@zonedigital/eslint-config-zone',
          includePeerDependencies: true,
        })
      })

      it('should add a config change', () => {
        addPackageJsonChange.mockReturnValue(() => 'hello')
        expect(addPackageJsonChange).toMatchSnapshot()
        expect(typeof addPackageJsonChange.mock.results[0].value).toBe('function')
        expect(addPackageJsonChange.mock.results[0].value(testPackageJson)).toMatchSnapshot()
      })
    })
  })
})
