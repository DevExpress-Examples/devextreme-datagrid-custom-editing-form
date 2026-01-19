import spellCheck from 'eslint-config-devextreme/spell-check';
import angularConfig from 'eslint-config-devextreme/angular';
import tsParser from '@typescript-eslint/parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: ['node_modules/**', 'eslint.config.js', 'dist/**', '.angular/**', 'ngcc.config.js', 'stylelint.config.mjs'],
  },
  ...spellCheck,
  ...angularConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 6,
      },
    },
  },
];
