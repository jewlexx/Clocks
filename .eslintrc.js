/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:import/typescript', 'next', 'prettier'],
  globals: {
    JSX: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.d.ts'],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: require('path').resolve(__dirname, './tsconfig.json'),
  },
  root: true,
  ignorePatterns: ['.eslintrc.js', '*.config.js', 'scripts/*'],
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'no-control-regex': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-uses-react': 'off',
    // Fixes issues with new JSX transform
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    // TODO: Improve these rules to be more strict
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'implicit-arrow-linebreak': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'consistent-return': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/no-array-index-key': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'require-await': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    '@next/next/no-img-element': 'off',
  },
};

module.exports = config;
