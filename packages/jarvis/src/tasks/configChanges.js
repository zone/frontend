const path = require('path')

const createTask = require('../util/createTask')
const { readFile, writeFile } = require('../util/fileSystem')

module.exports = createTask({
  name: 'package.json',
  run: ({ items, spinner }) => new Promise(async (resolve, reject) => {
    const destinationPath = process.cwd()
    const fileName = 'package.json'
    const destination = path.join(destinationPath, fileName)
    const parsedContent = await readFile(destination, 'utf8')
      .then(JSON.parse)
      .catch(() => {
        reject(
          new Error(`Could not read ${fileName}, check ${destinationPath} exists and readable.`),
        )
      })

    const newPackageJson = items.reduce((newContent, { message, reducer }) => {
      spinner.succeed(message)
      return reducer(newContent)
    }, parsedContent)

    writeFile(destination, JSON.stringify(newPackageJson, null, 2))
      .then(resolve)
      .catch(() => {
        reject(
          new Error(`Could not write ${fileName}, check ${destinationPath} exists and writable.`),
        )
      })
  }),
})
