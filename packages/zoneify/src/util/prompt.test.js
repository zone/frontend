const prompt = require('./prompt')

describe('prompt', () => {
  it('should return a prompt', () => {
    expect(typeof prompt).toBe('function')
  })
})
