const ora = require('ora')
const path = require('path')
const fs = require('fs')
const findPeerDependencies = require('./findPeerDependencies')
const readFile = require('./readFile')
const task = require('./task')
const { exec } = require('child_process')

module.exports = class Install {
  constructor() {
    this.moduleQueue = []
    this.configQueue = []
    this.spinner = ora('Building package.json')
  }

  addPackage({ name, version = 'latest', config: { key, transform } }) {
    this.configQueue.push({ key, transform: config => transform(config, name, version) })
    this.moduleQueue.push(() =>
      new Promise(async (resolve, reject) => {
        const packageAtVerison = `${name}@${version}`
        const [error, peerDependencies] = await task(findPeerDependencies(packageAtVerison))

        if (error) {
          return reject(error)
        }

        return resolve([...peerDependencies, packageAtVerison])
      }))
  }

  async installPackages() {
    this.spinner.text = 'Fetching package dependencies'
    const [error, modules] = await task(Promise.all(this.moduleQueue.map(promise => promise())))

    return new Promise((resolve, reject) => {
      if (error) {
        return reject(error)
      }

      const dependencies = modules.reduce(
        (allDependencies, moduleDependencies) => [...allDependencies, ...moduleDependencies],
        [],
      )

      if (dependencies.length) {
        this.spinner.text = 'Installing dependencies'
        return resolve(new Promise((addResolve, addReject) => {
          exec(`yarn add ${dependencies.join(' ')}`, (installError) => {
            if (installError) {
              return addReject(new Error('Unable to install dependencies'))
            }

            return addResolve()
          })
        }))
      }

      return resolve()
    })
  }

  async buildPackageJson() {
    this.spinner.text = 'Attempting to read existing package.json'
    const packageJsonPath = path.join(process.cwd(), 'package.json')
    const [readError, initialPackageJsonRaw] = await task(readFile(packageJsonPath))

    // eslint-disable-next-line consistent-return
    return new Promise((resolve, reject) => {
      try {
        // If we had a read error, just create a basic package.json file
        // or else try and parse the found package.json file
        const initialPackageJson = readError ? { private: true } : JSON.parse(initialPackageJsonRaw)

        // Run the package.json through the config transform
        this.spinner.text = 'Applying package config transforms'
        const packageJson = this.configQueue.reduce(
          (obj, { key, transform }) => ({
            ...obj,
            [key]: transform(obj[key]),
          }),
          initialPackageJson,
        )

        fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), (writeError) => {
          if (writeError) {
            return reject(new Error('Could not write package.json'))
          }

          return resolve()
        })
      } catch (parseError) {
        return reject(new Error('Could not parse package.json'))
      }
    })
  }

  execute() {
    this.spinner.start()

    this.buildPackageJson()
      .then(() => {
        this.installPackages()
          .then(() => {
            this.spinner.succeed('Done!')
          })
          .catch(() => {
            this.spinner.fail('Failed installing packages')
          })
      })
      .catch(() => {
        this.spinner.fail('Failed buidling package.json')
      })
  }
}
