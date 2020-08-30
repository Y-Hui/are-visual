module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'react-app',
    // 'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    semi: ['error', 'never'],
    'semi-spacing': ['error', { before: false, after: true }],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': 0,
    'prettier/prettier': ['error'],
  },
}
