const { readFile, writeFile } = require('./fileSystem')

jest.mock('fs')

describe('fileSystem', () => {
  it('should have a promisified readFile function', () => {
    expect(typeof readFile).toBe('function')
    expect(typeof readFile().then).toBe('function')
  })

  it('should have a promisified writeFile function', () => {
    expect(typeof writeFile).toBe('function')
    expect(typeof writeFile().then).toBe('function')
  })
})
