angular.module('donorsApp', [])

.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'img-src',
    'components/',
    'templates/',
    'https://www.donorschoose.org/**',
    'https://api.donorschoose.org/**'
  ]);
});