module.exports = {
  extends: ['@zonedigital/eslint-config-zone', 'plugin:react/recommended'],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
}
