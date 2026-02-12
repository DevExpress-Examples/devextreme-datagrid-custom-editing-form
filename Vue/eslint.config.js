import spellCheck from 'eslint-config-devextreme/spell-check';
import vueConfig from 'eslint-config-devextreme/vue';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'eslint.config.js', 'stylelint.config.mjs'],
  },
  ...spellCheck,
  ...vueConfig,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
  },
];
