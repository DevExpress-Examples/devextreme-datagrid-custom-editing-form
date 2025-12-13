import spellCheck from 'eslint-config-devextreme/spellCheck';
import jqueryConfig from 'eslint-config-devextreme/jquery';

export default [
  {
    ignores: ['node_modules/**', 'eslint.config.js', 'stylelint.config.mjs'],
  },
  ...spellCheck,
  ...jqueryConfig,
];
