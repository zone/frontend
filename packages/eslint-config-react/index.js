module.exports = {
  extends: [
    '@zonedigital/eslint-config-zone',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react-hooks', 'jsx-a11y'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
};
