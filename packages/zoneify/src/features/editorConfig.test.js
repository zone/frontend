const { addFile } = require('../install');
const { name, questions, run } = require('./editorConfig');

jest.mock('../install');

describe('features/editorConfig', () => {
  it('has a name', () => {
    expect(name).toMatchSnapshot();
  });

  it('has no questions', () => {
    expect(questions).toMatchSnapshot();
  });

  describe('run', () => {
    run();

    it('has a run function', () => {
      expect(typeof run).toBe('function');
    });

    it('adds a file', () => {
      expect(addFile).toMatchSnapshot();
    });
  });
});
