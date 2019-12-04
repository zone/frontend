const { add, run } = require('./files')
const { writeFile } = require('../util/fileSystem')

jest.mock('../util/fileSystem')

writeFile.mockName('writeFile')

describe('tasks/files', () => {
  it('resolves if queue is empty', async () => {
    expect(await run()).toBeUndefined()
  })

  it('enqueues a file', async () => {
    writeFile.mockResolvedValue()

    add({ payload: { fileName: 'test1.md', content: 'test' } })
    add({
      payload: {
        fileName: 'test2.md',
        filePath: './test/test',
        content: 'test',
      },
    })

    const result = await run()

    expect(writeFile).toMatchSnapshot()
    expect(result).toBeInstanceOf(Array)
    expect(result.length).toBe(2)
  })

  it('handles thrown errors', async () => {
    writeFile.mockRejectedValue()

    add({ payload: { fileName: 'test1.md', content: 'test' } })

    await run().catch(error => expect(error).toMatchSnapshot())
  })
})
