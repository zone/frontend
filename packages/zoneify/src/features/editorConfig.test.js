const { addFile } = require('../install')
const { name, questions, run } = require('./editorConfig')

jest.mock('../install')

describe('features/editorConfig', () => {
  it('should have a name', () => {
    expect(name).toMatchSnapshot()
  })

  it('should have no questions', () => {
    expect(questions).toMatchSnapshot()
  })

  describe('run', () => {
    run()

    it('should have a run function', () => {
      expect(typeof run).toBe('function')
    })

    it('should add a file', () => {
      expect(addFile).toMatchSnapshot()
    })
  })
})
