/* globals Package: false, Npm: false */

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: 'thebakery:medium-editor',
  summary: 'A clone of medium.com inline editor toolbar.',
  version: packageJson.version,
  git: 'https://github.com/thebakeryio/medium-editor.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.export('MediumEditor');
  api.addFiles([
    'dist/js/medium-editor.js',
    'dist/css/medium-editor.css',
    'dist/css/themes/default.css',
    'meteor/export.js'
  ], 'client');
});

Package.onTest(function (api) {
  api.use('thebakery:medium-editor', 'client');
  api.use('tinytest', 'client');

  api.addFiles('meteor/test.js', 'client');
});