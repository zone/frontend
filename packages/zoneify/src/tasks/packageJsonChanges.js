const { bold } = require('kleur')
const path = require('path')
const { log } = require('../util/logger')
const createQueue = require('../util/createQueue')
const { readFile, writeFile } = require('../util/fileSystem')

const queue = createQueue()

exports.add = ({ payload }) => {
  log.debug('Queued package.json change')

  queue.enqueue(payload)
}

exports.run = async () => {
  if (queue.size === 0) {
    return Promise.resolve()
  }

  log.debug('Modifying package.json...')

  const fileName = 'package.json'
  const destinationPath = process.cwd()
  const destination = path.join(destinationPath, fileName)
  const initialPackageJson = await readFile(destination)
    .catch(error => {
      log.error(error)
      throw new Error(
        `Could not read ${bold(fileName)}.\nCheck it exists and is readable.`
      )
    })
    .then(content => JSON.parse(content))
    .catch(error => {
      log.error(error)
      throw new Error(
        `Could not parse ${bold(
          fileName
        )}.\nCheck it has been initalised via 'npm init'.`
      )
    })
  const workInProgress = queue.items.reduce(
    (previous, reducer) => reducer(previous),
    initialPackageJson
  )
  const newContent = await Promise.resolve(workInProgress)

  return writeFile(destination, JSON.stringify(newContent, null, 2)).catch(
    () => {
      throw new Error(
        `Could not write ${fileName}, check ${destinationPath} exists and writable.`
      )
    }
  )
}
