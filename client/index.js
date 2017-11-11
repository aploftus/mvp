angular.module('donorsApp', [])

.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.donorschoose.org/**',
    'https://api.donorschoose.org/**'
  ]);
});