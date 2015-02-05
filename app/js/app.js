'use strict';

/* App Module */

var tvtsApp = angular.module('phonecatApp', [
  'ngRoute',
  'tvtsControllers'
]);

tvtsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/models', {
        templateUrl: 'partials/model-list.html',
        controller: 'ModelListCtrl'
      }).
      when('/models/:modelId', {
        templateUrl: 'partials/model-detail.html',
        controller: 'ModelDetailCtrl'
      }).
      otherwise({
        redirectTo: '/models'
      });
  }]);
