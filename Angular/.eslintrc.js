module.exports = {
  root: true,
  extends: ['devextreme/spell-check'],
  overrides: [{
    files: ['*.ts', '*.html'],
    extends: ['devextreme/angular'],
    env: {
      browser: true,
      es6: true
    },
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
      'createDefaultProgram': true,
      'ecmaVersion': 6,
    },
  }]
};
