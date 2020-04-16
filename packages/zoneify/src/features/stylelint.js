const { addDependency, addPackageJsonChange } = require('../install');

exports.name = 'stylelint';

exports.run = () => {
  const packageName = '@zonedigital/stylelint-config-zone';

  addDependency({ name: packageName, includePeerDependencies: true });
  addPackageJsonChange(current => ({
    ...current,
    stylelint: {
      extends: packageName,
    },
  }));
};
