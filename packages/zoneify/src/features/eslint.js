const { addDependency, addPackageJsonChange } = require('../install');

exports.name = 'ESLint';

exports.questions = [
  {
    name: 'framework',
    type: 'list',
    message: 'What type of JS framework are you using?',
    choices: [
      { name: 'None', value: '' },
      { name: 'React', value: 'react' },
      { name: 'Vue', value: 'vue' },
    ],
  },
];

exports.run = ({ framework }) => {
  const packageName = '@zonedigital/eslint-config';
  const config = [packageName, framework].filter(item => !!item).join('/');

  addDependency({ name: packageName, includePeerDependencies: true });
  addPackageJsonChange(current => ({
    ...current,
    eslintConfig: {
      extends: config,
    },
  }));
};
