import stylelintrc from 'eslint-config-devextreme/stylelintrc';

export default {
  extends: ['stylelint-config-standard-scss'],
  ...stylelintrc,
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
};
