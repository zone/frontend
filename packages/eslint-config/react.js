module.exports = {
  extends: [
    './',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
