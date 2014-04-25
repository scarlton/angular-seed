'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('restricted', ['$location', function($location) {
    function link(scope, element, attrs) {
      function displayElement(show) {
        if (show) {
          element.show();
        } else {
          element.hide();
        }
      }

      scope.$watch(function() {
        return $location.path();
      }, function (path) {
        displayElement(path != '/');
      });
    }

    return {
      link: link
    };
  }]);
