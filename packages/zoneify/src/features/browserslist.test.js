const { addDependency, addPackageJsonChange } = require('../install')
const { name, questions, run } = require('./browserslist')

jest.mock('../install')

describe('features/browserslist', () => {
  it('should have a name', () => {
    expect(name).toMatchSnapshot()
  })

  it('should have no questions', () => {
    expect(questions).toMatchSnapshot()
  })

  describe('run', () => {
    const testPackageJson = { name: 'test package' }

    run()

    it('should have a run function', () => {
      expect(typeof run).toBe('function')
    })

    it('should add a dependency', () => {
      expect(addDependency).toBeCalledWith({ name: '@zonedigital/browserslist-config' })
    })

    it('should add a config change', () => {
      expect(addPackageJsonChange).toMatchSnapshot()
      expect(typeof addPackageJsonChange.mock.results[0].value).toBe('function')
      expect(addPackageJsonChange.mock.results[0].value(testPackageJson)).toMatchSnapshot()
    })
  })
})
