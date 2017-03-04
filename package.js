Package.describe({
  name: 'uikit',
  version: '3.0.16',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for UIkit 3.0',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/james-geiger/uikit-3.0.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});
Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('jquery', ['client']);
  api.addFiles([
    'js/uikit.min.js',
    'css/uikit.min.css',
  ],['client']);
  api.addAssets([
    'images/icons.svg'
  ], ['client']);
});
