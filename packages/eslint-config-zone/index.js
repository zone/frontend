module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'compat/compat': 'warn',
    complexity: ['error', 10],
    curly: ['error', 'all'],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'operator-linebreak': ['error', 'after'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
    ],
  },
  plugins: ['compat'],
};
