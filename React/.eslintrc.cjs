module.exports = {
  root: true,
  extends: ['devextreme/spell-check'],
  overrides: [{
    files: ['*.ts', '*.tsx'],
    extends: ['devextreme/react'],
    env: {
      browser: true,
      es6: true
    },
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
      'createDefaultProgram': true,
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/no-extraneous-dependencies": ["error", {
        "devDependencies": [
          "**/vitest.config.ts", // allow vitest in config file
          "**/vite.config.ts", // allow vite in config file
          "**/*.test.tsx",      // allow test files if needed
          "**/setupTests.ts", // allow setup tests file
        ]
      }]
    },
    globals: {
      System: false,
      AzureGateway: false,
      AzureFileSystem: false,
    },
    settings: {
      react: {
        createClass: 'createReactClass',
        'pragma': 'React',
        version: '18.2',
      },
      propWrapperFunctions: [
        'forbidExtraProps',
      ],
    },
  }]
};