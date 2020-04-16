const { /* add, */ run } = require('./packageJsonChanges');
const { readFile } = require('../util/fileSystem');

jest.mock('../util/fileSystem');

readFile.mockName('readFile');

describe('tasks/packageJsonChanges', () => {
  it('resolves if queue is empty', async () => {
    expect(await run()).toBeUndefined();
  });

  // it('should enqueue a change', async () => {
  //   add({ payload: { fileName: 'test1.md', content: 'test' } })
  //   add({ payload: { fileName: 'test2.md', filePath: './test/test', content: 'test' } })

  //   const result = await run()

  //   expect(result).toBeInstanceOf(Array)
  //   expect(result.length).toBe(2)
  // })

  describe('reads package.json', () => {
    it('errors if the file cannot be read', async () => {
      readFile.mockRejectedValueOnce('rejected');

      await readFile().catch(error => expect(error).toBe('rejected'));
    });

    it.todo('errors if file contents cannot be parsed as JSON');

    it.todo('returns parsed JSON contents');
  });

  // read file
  // - error
  // - json not parsable error
  // - success json matches

  // call reducers
  // - matches snapshot

  // write file
  // - success
  // - error
});
