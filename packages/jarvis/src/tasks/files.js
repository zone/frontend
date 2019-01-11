const path = require('path')

const createTask = require('../util/createTask')
const { writeFile } = require('../util/fileSystem')
const resolveSerial = require('../util/resolveSerial')

module.exports = createTask({
  name: 'Files',
  run: ({ items, spinner }) => new Promise(async (resolve, reject) => {
    await resolveSerial(
      items.map(({ fileName, filePath = './', content }) => {
        const destinationPath = path.join(process.cwd(), filePath)
        const destination = path.join(destinationPath, fileName)

        return () => {
          spinner.start(`Adding ${fileName} file`)

          return writeFile(destination, content)
            .then(() => {
              spinner.succeed(`Added ${fileName} file`)
            })
            .catch(() => {
              reject(
                new Error(
                  `Could not write ${fileName}, check ${destinationPath} exists and writable.`,
                ),
              )
            })
        }
      }),
    )

    resolve()
  }),
})
