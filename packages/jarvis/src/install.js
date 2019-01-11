const chalk = require('chalk')

const { log } = require('./util/console')
const prompt = require('./util/prompt')
const resolveSerial = require('./util/resolveSerial')

const filesTask = require('./tasks/files')
const dependenciesTask = require('./tasks/dependencies')
const configChangesTask = require('./tasks/configChanges')

// Export the addItem functions from the tasks
exports.addConfigChange = configChangesTask.addItem
exports.addDependency = dependenciesTask.addItem
exports.addFile = filesTask.addItem

exports.install = async (...plugins) => {
  const choices = plugins.map(({ id, name }) => ({ name, value: id }))

  log(`\n${chalk.white.bgBlue.bold(' Zone ')}${chalk.white.bgBlack.bold(' Frontend ')}\n`)

  // Ask the user what plugins they need
  const { selectedPlugins } = await prompt({
    name: 'selectedPlugins',
    type: 'checkbox',
    message: 'What Zone packages do you need?',
    choices,
    default: choices.map(({ value }) => value),
  })

  // Get the init functions from the plugins the user selected
  const pluginsToInitalise = plugins
    .filter(({ id }) => selectedPlugins.includes(id))
    .map(({ init }) => init)

  try {
    // init function return a promise
    // as each plugin may need the get user input
    // we need to execute these in serial
    const pluginQueue = await resolveSerial(pluginsToInitalise)

    // Plugins return a new function after initialisation, execute these in parallel
    await Promise.all(pluginQueue.map(plugin => plugin()))

    // Run each of the tasks in serial to avoid clashes
    await resolveSerial([dependenciesTask.run, filesTask.run, configChangesTask.run])

    log(`\n${process.platform === 'win32' ? '' : '✨ '}Done`)
  } catch (error) {
    log('Sorry something went wrong')
    log(error)
  }
}
