module.exports = {
  root: true,
  extends: ['devextreme/spell-check'],
  overrides: [{
    files: ['*.ts', '*.vue'],
    extends: [
      '@vue/eslint-config-typescript',
      'devextreme/vue'
    ],
    env: { es6: true },
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
      'createDefaultProgram': true,
      'ecmaVersion': 2020,
    },
    globals: {
      System: false,
      AzureGateway: false,
      AzureFileSystem: false,
    },
  }]
};
