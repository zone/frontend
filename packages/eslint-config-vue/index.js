module.exports = {
  extends: ['@zonedigital/eslint-config-zone', 'plugin:vue/recommended'],
  rules: {
    'vue/attribute-hyphenation': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-indent': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 4,
          allowFirstLine: true,
        },
      },
    ],
    'vue/multiline-html-element-content-newline': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-template-shadow': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
  },
}
