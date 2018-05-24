const task = require('./task')

describe('Task helper', () => {
  const success = 'success'
  const failure = 'failure'

  it('should resolve and return data with no error', async () => {
    const [error, data] = await task(Promise.resolve(success))

    expect(error).toEqual(null)
    expect(data).toEqual(success)
  })

  it('should reject and return error', async () => {
    const [error, data] = await task(Promise.reject(failure))

    expect(error).toEqual(failure)
    expect(data).toBeUndefined()
  })
})
