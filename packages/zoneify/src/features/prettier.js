const { addDependency, addPackageJsonChange } = require('../install');

exports.name = 'Prettier';

exports.run = () => {
  const packageName = '@zonedigital/prettier-config';

  addDependency({ name: packageName });
  addPackageJsonChange(current => ({
    ...current,
    prettier: packageName,
  }));
};
