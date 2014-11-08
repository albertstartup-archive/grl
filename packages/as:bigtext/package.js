Package.describe({
  name: 'as:bigtext',
  summary: 'MIT Licence',
  version: '1.0.0',
  git: 'https://github.com/zachleat/BigText'
});

Package.onUse(function(api) {
    api.use('jquery', 'client');
  api.versionsFrom('1.0');
  api.addFiles('as:bigtext.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('as:bigtext');
  api.addFiles('as:bigtext-tests.js');
});
