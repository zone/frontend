const { exec } = require('child_process')

module.exports = packageName =>
  // Execute the `npm view` command to get a JSON formatted list of the package's
  // peer dependencies, this requires NPM to trigger a network request so use
  // a Promise to control the flow
  new Promise((resolve, reject) =>
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
        const dependencies = Object.entries(peerDependencies).map(([key, value]) => `${key}@${value}`)

        // Resolve with an array of the dependencies
        return resolve(dependencies)
      } catch (error) {
        // Reject and pass error
        return reject(new Error(error))
      }
    }))
