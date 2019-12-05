const { exec } = require('child_process')
const { promisify } = require('util')
const { name: NPM_PACKAGE } = require('./package.json')

const execAsync = promisify(exec)

describe(NPM_PACKAGE, () => {
  it('config does not error', async () => {
    const { stdout } = await execAsync(
      `./node_modules/.bin/stylelint index.scss --printConfig --config=${require.resolve(
        './index.js'
      )}`
    )

    expect(JSON.parse(stdout)).toMatchSnapshot()
  })
})
