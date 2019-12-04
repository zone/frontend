const {
  addPackageJsonChange,
  addDependency,
  addFile,
  run,
} = require('./install')
const files = require('./tasks/files')
const { spinner } = require('./util/logger')
const prompt = require('./util/prompt')

jest.mock('./tasks/files')
jest.mock('./util/logger')
jest.mock('./util/prompt')

describe('install', () => {
  it('exports addPackageJsonChange as a function', () => {
    expect(typeof addPackageJsonChange).toBe('function')
  })

  it('exports addDependency as a function', () => {
    expect(typeof addDependency).toBe('function')
  })

  it('exports addFile as a function', () => {
    expect(typeof addFile).toBe('function')
  })

  describe('run', () => {
    const mockFeature = ({ name, questions, run: featureRun }) => ({
      name,
      questions,
      run: featureRun || jest.fn().mockName('featureRun'),
    })
    const featureNoQuestions = mockFeature({
      name: 'feature without questions',
    })
    const featureWithQuestions = mockFeature({
      name: 'feature with questions',
      questions: [
        {
          name: 'test',
          type: 'list',
          message: 'Test?',
          choices: ['a', 'b', 'c'],
        },
      ],
    })

    it('logs a success', async () => {
      files.run.mockImplementation(() => Promise.resolve('resolve'))

      await run([featureNoQuestions])

      expect(spinner.succeed).toBeCalledWith('Done')
    })

    it('logs a failure', async () => {
      /* eslint-disable-next-line prefer-promise-reject-errors */
      files.run.mockImplementation(() => Promise.reject('reject'))

      await run([featureNoQuestions])

      expect(spinner.fail).toBeCalledWith('reject')
    })

    it('calls each feature', async () => {
      await run([featureNoQuestions, featureWithQuestions])

      expect(featureNoQuestions.run).toBeCalled()
      expect(featureWithQuestions.run).toBeCalled()
    })

    it('prompts the user if the feature has questions', () => {
      expect(prompt).toBeCalledWith(featureWithQuestions.questions)
    })
  })
})
