const {
  addPackageJsonChange, addDependency, addFile, run,
} = require('./install')
const files = require('./tasks/files')
const { spinner } = require('./util/logger')
const prompt = require('./util/prompt')

jest.mock('./tasks/files')
jest.mock('./util/logger')
jest.mock('./util/prompt')

describe('install', () => {
  it('should export addPackageJsonChange as a function', () => {
    expect(typeof addPackageJsonChange).toBe('function')
  })

  it('should export addDependency as a function', () => {
    expect(typeof addDependency).toBe('function')
  })

  it('should export addFile as a function', () => {
    expect(typeof addFile).toBe('function')
  })

  describe('run', () => {
    const mockFeature = ({ name, questions, run: featureRun }) => ({
      name,
      questions,
      run: featureRun || jest.fn().mockName('featureRun'),
    })
    const featureNoQuestions = mockFeature({ name: 'feature without questions' })
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

    it('should log a success', async () => {
      files.run.mockImplementation(() => Promise.resolve('resolve'))

      await run([featureNoQuestions])

      expect(spinner.succeed).toBeCalledWith('Done')
    })

    it('should log a failure', async () => {
      /* eslint-disable-next-line prefer-promise-reject-errors */
      files.run.mockImplementation(() => Promise.reject('reject'))

      await run([featureNoQuestions])

      expect(spinner.fail).toBeCalledWith('reject')
    })

    it('should call each feature', async () => {
      await run([featureNoQuestions, featureWithQuestions])

      expect(featureNoQuestions.run).toBeCalled()
      expect(featureWithQuestions.run).toBeCalled()
    })

    it('should prompt the user if the feature has questions', () => {
      expect(prompt).toBeCalledWith(featureWithQuestions.questions)
    })
  })
})
