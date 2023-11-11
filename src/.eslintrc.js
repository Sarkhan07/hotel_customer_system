module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:redux-saga/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021, // Updated to the specific version
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jsx-a11y', 'react-hooks', 'redux-saga',],
  rules: {
    // Additional rules and configurations
  },
};
