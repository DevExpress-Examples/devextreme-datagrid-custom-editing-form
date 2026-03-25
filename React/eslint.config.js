import path from 'path';
import { fileURLToPath } from 'url';
import tsParser from '@typescript-eslint/parser';
import spellCheck from 'eslint-config-devextreme/spell-check';
import reactConfig from 'eslint-config-devextreme/react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: ['node_modules/**', 'build/**', 'dist/**', 'eslint.config.js', '*.config.ts', 'stylelint.config.mjs'],
  },
  ...spellCheck,
  ...reactConfig,
  {
    rules: {
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      react: {
        version: '18.2',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: [
          '**/vitest.config.ts',
          '**/vite.config.ts',
          '**/*.test.tsx',
          '**/setupTests.ts',
        ],
      }],
    },
  },
];
