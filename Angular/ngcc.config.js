module.exports = {
    packages: {
      'devextreme-angular':  {
        ignorableDeepImportMatchers: [
          /devextreme\//,
          /jszip\//
        ]
      },
      'devextreme' : {
        ignorableDeepImportMatchers: [
          /devextreme-quill\//
        ]
      }
    }
  };
