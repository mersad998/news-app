import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import wc from 'eslint-plugin-wc';
import importPlugin from 'eslint-plugin-import';

export default [
  // Ignoring directories like dist
  {
    ignores: ['dist', 'node_modules'],
  },

  // Base configuration for JavaScript
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      prettier: prettierPlugin,
      'no-only-tests': noOnlyTests,
      wc,
    },
    settings: {
      wc: {
        elementBaseClasses: ['BaseElement', 'LitElement', 'FormElement'],
      },
    },
    rules: {
      'prettier/prettier': 'warn', // Prettier issues highlighted as warnings
      'no-prototype-builtins': 'off',
      'object-curly-spacing': 'off',
      'no-only-tests/no-only-tests': 'warn',
    },
  },

  // TypeScript-specific configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parser: tsParser,
    },
    settings: {
      'importPlugin/internal-regex': '^(?:pages|components|globalTypes)',
      'importPlugin/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
        },
        typescript: {
          project: '.',
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
      importPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],
      'importPlugin/newline-after-import': 'error',
      'importPlugin/namespace': 'error',
      'importPlugin/order': [
        'warn',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index'], 'type'],
          pathGroups: [
            {
              pattern: '@pages',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@components',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@globalTypes',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: [],
          'newlines-between': 'always',
          alphabetize: {
            order: 'ignore',
            caseInsensitive: false,
          },
          warnOnUnassignedImports: true,
        },
      ],
    },
  },

  // React-specific configuration
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
      'react-hooks/exhaustive-deps': 'off', // Disable exhaustive-deps rule
    },
  },
];
