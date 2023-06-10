module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-mixed-spaces-and-tabs': [
      'warn',
      'smart-tabs',
    ],
    'semi': 'warn',
    'max-len': ['warn', { code: 500 }],
    'no-tabs': ['warn', { allowIndentationTabs: true }],
    'linebreak-style': ['warn', 'windows'],
    'eol-last': 'off',
    'comma-dangle': 'off',
    'no-trailing-spaces': ['warn'],
    'indent': 0,
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'warn',
    'prefer-destructuring': [
      'error', {
      'array': false,
      'object': false
      }
    ],
    'no-param-reassign': 'warn',
    'object-curly-newline': 0,
    'quote-props': 0,
    'import/no-extraneous-dependencies': [
      'error', {
        'devDependencies': false,
        'optionalDependencies': false,
        'peerDependencies': false
      }
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.vue',
        ],
      },
    },
  },

};
