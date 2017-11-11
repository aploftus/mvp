angular.module('donorsApp', [])

.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'components/',
    'templates/',
    'https://www.donorschoose.org/**',
    'https://api.donorschoose.org/**'
  ]);
});