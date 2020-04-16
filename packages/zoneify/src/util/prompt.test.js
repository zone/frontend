const prompt = require('./prompt');

describe('prompt', () => {
  it('returns a prompt', () => {
    expect(typeof prompt).toBe('function');
  });
});
