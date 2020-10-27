module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 'off',
    // Empty interfaces are being used as genrics, even if empty. Allow to enhance readablility
    '@typescript-eslint/no-empty-interface': 'off',
    // Typechecking with TS is enough for this project.
    'react/prop-types': 'off',
    // Allows to associate label to input by either nesting or using htmlFor attr.
    'jsx-a11y/label-has-associated-control': [2 ,{
      'assert': 'either',
    }],
    // Allow indentation when listing multiple generics
    '@typescript-eslint/indent': ['error', 2, {
      ignoredNodes: ['TSTypeParameterInstantiation']
    }],
    // Allow props spreading
    'react/jsx-props-no-spreading': 'off',
    // Allows to use _id from mongoDb
    'no-underscore-dangle': 'off',
    // Allow me to nest plz
    'no-nested-ternary': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // doesn't work well with typescript-eslint. Let TS compiler do it instead thru tsconfig
    '@typescript-eslint/no-unused-vars': 'off',
  },
};