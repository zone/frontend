module.exports = {
  extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended', '@zonedigital/eslint-config-zone'],
  plugins: ['react-hooks', 'jsx-a11y'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
}
