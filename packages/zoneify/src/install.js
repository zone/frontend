// const spinner = require('./util/spinner')
const { log, spinner } = require('./util/logger')
const prompt = require('./util/prompt')
const resolveSerial = require('./util/resolveSerial')
const dependencies = require('./tasks/dependencies')
const files = require('./tasks/files')
const packageJsonChanges = require('./tasks/packageJsonChanges')

const tasks = [dependencies, files, packageJsonChanges]

let featureContext

const runFeature = ({ name, questions, run }) => async () => {
  log.debug(`Running ${name}`)

  const answers = await (questions ? prompt(questions) : Promise.resolve())

  featureContext = name

  run(answers)
}

const runTask = ({ run }) => async () => run()

const withContext = func => payload =>
  func({ payload, context: featureContext })

exports.addDependency = withContext(dependencies.add)

exports.addFile = withContext(files.add)

exports.addPackageJsonChange = withContext(packageJsonChanges.add)

exports.run = async features => {
  log.debug('Running features')

  // Wait for each feature to run
  await resolveSerial(features.map(runFeature))

  log.debug('Running tasks')

  return resolveSerial(tasks.map(runTask))
    .then(() => spinner.succeed('Done'))
    .catch(error => spinner.fail(error))
}
