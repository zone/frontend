module.exports = {
  extends: ['plugin:react/recommended', '@zonedigital/eslint-config-zone'],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
}
