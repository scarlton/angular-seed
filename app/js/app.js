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
  $routeProvider.when('/', {templateUrl: 'partials/register.html', controller: 'RegistrationController'});
  $routeProvider.when('/video', {templateUrl: 'partials/video.html', controller: 'RegistrationController'});
  $routeProvider.when('/details', {templateUrl: 'partials/details.html', controller: 'RegistrationController'});
  $routeProvider.when('/review', {templateUrl: 'partials/review.html', controller: 'RegistrationController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
