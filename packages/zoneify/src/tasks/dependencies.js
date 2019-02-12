const { exec } = require('child_process')
const { promisify } = require('util')
const { log, spinner } = require('../util/logger')
const createQueue = require('../util/createQueue')

const queue = createQueue()
const execAsync = promisify(exec)

const nameWithVersion = ({ name, version = 'latest' }) => `${name}@${version}`

const findPeerDependencies = async (packageName) => {
  spinner.start('Looking up peer dependencies...')
  // Execute the `npm view` command to get a JSON formatted list of the package's
  // peer dependencies, this requires NPM to trigger a network request so use
  // a Promise to control the flow
  const { stdout: data } = await execAsync(
    `npm view "${packageName}" peerDependencies --json`,
  ).catch((error) => {
    log.error(error)

    // node couldn't execute the command
    throw new Error('Could not connect to NPM, try again.')
  })

  // If we have no output from NPM its safe to assume that there are no
  // peer dependencies, return an empty array
  if (!data) {
    return []
  }

  // Attempt to parse and extract peer dependencies from stdout
  try {
    // Parse JSON and map the packages+versions to strings
    const mapToPackage = ([name, version]) => nameWithVersion({ name, version })
    const dependencies = Object.entries(JSON.parse(data)).map(mapToPackage)

    // Resolve with an array of the dependencies
    return dependencies
  } catch (parseError) {
    log.error(parseError)

    // Reject and pass error
    throw new Error('Unable to parse response from NPM')
  }
}

exports.add = ({ payload }) => {
  log.debug(`Queued dependency: ${nameWithVersion(payload)}`)

  queue.enqueue(payload)
}

exports.run = async () => {
  if (queue.size === 0) {
    return Promise.resolve()
  }

  log.debug('Adding dependencies...')

  const workInProgress = queue.items.map(
    async ({ name, version = 'latest', includePeerDependencies = false }) => {
      log.debug(`Adding dependency ${name}`)

      const packageName = nameWithVersion({ name, version })

      if (!includePeerDependencies) {
        return [packageName]
      }

      log.debug('Looking for peer dependencies...')

      const peerDependencies = await findPeerDependencies(packageName)

      return [packageName, ...peerDependencies]
    },
  )
  const result = await Promise.all(workInProgress)
  const allDependencies = result.reduce((all, item) => all.concat(item), []).join(' ')

  log.debug('Installing dependencies')

  spinner.start('Installing dependencies...')

  return execAsync(`yarn add ${allDependencies}`)
    .then(() => spinner.stop())
    .catch((error) => {
      log.error(error)
      throw new Error('Unable to install dependencies, check your connection')
    })
}
