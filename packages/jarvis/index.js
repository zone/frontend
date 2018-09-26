#! /usr/bin/env node

const chalk = require('chalk')
const inquirer = require('inquirer')
const choices = require('./src/choices')
const Install = require('./src/install')
const toArray = require('./src/toArray')

// eslint-disable-next-line no-console
console.log(`\n${chalk.white.bgBlue.bold(' Zone ')}${chalk.white.bgBlack.bold(' Frontend ')}\n`)

inquirer
  .prompt([
    {
      name: 'modules',
      type: 'checkbox',
      message: 'What do you need?',
      choices: Object.values(choices.modules),
      default: Object.values(choices.modules),
    },
    {
      name: 'framework',
      type: 'list',
      message: 'What type of JS framework are you using?',
      choices: [choices.NONE, ...Object.values(choices.frameworks)],
      when: ({ modules, project }) =>
        project === choices.projectTypes.NEW || modules.includes(choices.modules.ESLINT),
    },
  ])
  .then(({ framework, modules }) => {
    const install = new Install()

    // Add eslint to the queue if selected
    if (modules.includes(choices.modules.ESLINT)) {
      const { [framework]: packageSuffix } = {
        [choices.NONE]: 'zone',
        [choices.frameworks.REACT]: 'react',
        [choices.frameworks.VUE]: 'vue',
      }

      install.addPackage({
        name: `@zonedigital/eslint-config-${packageSuffix}`,
        version: 'latest',
        config: {
          key: 'eslintConfig',
          transform: (config = {}, packageName) => {
            const currentExtends = toArray(config.extends)

            // If the package is already in the config,
            // do nothing, or else extend with ours
            return currentExtends.includes(packageName) ?
              config :
              {
                ...config,
                extends: [...currentExtends, packageName],
              }
          },
        },
      })
    }

    // Add stylelint to the queue if selected
    if (modules.includes(choices.modules.STYLELINT)) {
      install.addPackage({
        name: '@zonedigital/stylelint-config-zone',
        version: 'latest',
        config: {
          key: 'stylelint',
          transform: (config = {}, packageName) => {
            const currentExtends = toArray(config.extends)

            // If the package is already in the config,
            // do nothing, or else extend with ours
            return currentExtends.includes(packageName) ?
              config :
              {
                ...config,
                extends: [...currentExtends, packageName],
              }
          },
        },
      })
    }

    // Add browserslist to the queue if selected
    if (modules.includes(choices.modules.BROWSERSLIST)) {
      install.addPackage({
        name: '@zonedigital/browserslist-config',
        version: 'latest',
        config: {
          key: 'browserslist',
          transform: (config = [], packageName) => {
            const newExtend = `extends ${packageName}`

            // If the package is already in the config,
            // do nothing, or else extend with ours
            return config.includes(newExtend) ? config : [newExtend, ...config]
          },
        },
      })
    }

    install.execute()
  })
