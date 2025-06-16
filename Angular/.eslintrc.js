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
      'createDefaultProgram': true,
      'ecmaVersion': 6,
    },
  }]
};
