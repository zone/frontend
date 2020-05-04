module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@zonedigital/eslint-config-zone',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
};
