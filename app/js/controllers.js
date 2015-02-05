'use strict';

/* Controllers */

var tvtsControllers = angular.module('tvtsControllers', []);

tvtsControllers.controller('ModelListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('cars/cars.json').success(function(data) {
      $scope.models = data;
    });

    $scope.orderProp = 'age';
  }]);

tvtsControllers.controller('ModelDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.modelId = $routeParams.modelId;
  }]);
