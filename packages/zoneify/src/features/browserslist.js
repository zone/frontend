const { addDependency, addPackageJsonChange } = require('../install')

exports.name = 'Browserslist'

exports.run = () => {
  const packageName = '@zonedigital/browserslist-config'

  addDependency({ name: packageName })
  addPackageJsonChange(current => ({
    ...current,
    browserslist: [`extends ${packageName}`],
  }))
}
