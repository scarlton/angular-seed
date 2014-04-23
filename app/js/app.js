'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/register.html', controller: 'MyCtrl1'});
  $routeProvider.when('/video', {templateUrl: 'partials/video.html', controller: 'MyCtrl1'});
  $routeProvider.when('/details', {templateUrl: 'partials/details.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
