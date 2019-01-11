const { exec } = require('child_process')

const createTask = require('../util/createTask')
const task = require('../util/task')
const pluralise = require('../util/pluralise')
const { version } = require('../../package.json')

const dependencyOrDependencies = pluralise('dependency', 'dependencies')
const packageOrPackages = pluralise('package', 'packages')

const findPeerDependencies = (packageName) => {
  const formatPackageName = ([key, value]) => `${key}@${value}`

  return new Promise((resolve, reject) => {
    // Execute the `npm view` command to get a JSON formatted list of the package's
    // peer dependencies, this requires NPM to trigger a network request so use
    // a Promise to control the flow
    exec(`npm view "${packageName}" peerDependencies --json`, (err, stdout) => {
      // If we have an error reject the promise
      if (err) {
        // node couldn't execute the command
        return reject(new Error('Could not connect to NPM, try again.'))
      }

      // If we have no output from NPM its safe to assume that there are no
      // peer dependencies, return an empty array
      if (!stdout) {
        return resolve([])
      }

      // Attempt to parse and extract peer dependencies from stdout
      try {
        // Parse JSON and map the packages+versions to strings
        const peerDependencies = JSON.parse(stdout)
        const dependencies = Object.entries(peerDependencies).map(formatPackageName)

        // Resolve with an array of the dependencies
        return resolve(dependencies)
      } catch (error) {
        // Reject and pass error
        return reject(new Error(error))
      }
    })
  })
}

module.exports = createTask({
  name: 'Dependencies',
  run: ({ items, spinner }) => new Promise(async (resolve, reject) => {
    const totalDeps = items.length

    spinner.info(`${totalDeps} ${dependencyOrDependencies(totalDeps)} found`)
    spinner.start(
      `Checking ${totalDeps} ${packageOrPackages(totalDeps)} for peer dependencies...`,
    )

    const [peerDependencyLookups, error] = await task(
      Promise.all(items.map(name => findPeerDependencies(`${name}@${version}`))),
    )

    if (error) {
      return reject(error)
    }

    const peerDependencies = peerDependencyLookups.reduce(
      (uniquePackages, packages) => [
        ...uniquePackages,
        ...packages.filter(item => !uniquePackages.includes(item)),
      ],
      [],
    )

    const totalPeerDependencies = peerDependencies.length

    spinner.info(
      `${totalPeerDependencies} peer ${dependencyOrDependencies(totalPeerDependencies)} found`,
    )
    const allPackages = [...items, ...peerDependencies]
    const totalPackages = `${allPackages.length} ${packageOrPackages(allPackages.length)}`

    spinner.start(`Installing ${totalPackages}...`)

    return exec(`yarn add ${allPackages.join(' ')}`, (installError) => {
      if (installError) {
        return reject(new Error('Unable to install dependencies, check your connection'))
      }

      return resolve(`${totalPackages} installed`)
    })
  }),
})
