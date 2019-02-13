module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  rules: {
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'compat/compat': 'warn',
    complexity: ['error', 10],
    curly: ['error', 'all'],
    'operator-linebreak': ['error', 'after'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
    ],
  },
  plugins: ['compat'],
}
