import spellCheck from 'eslint-config-devextreme/spellCheck';
import vueConfig from 'eslint-config-devextreme/vue';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'eslint.config.js', 'stylelint.config.mjs'],
  },
  ...spellCheck,
  ...vueConfig,
];
