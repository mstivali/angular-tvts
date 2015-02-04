/*controllers*/

var tvtsApp = angular.module('tvtsApp', []);

tvtsApp.controller('ModelsListCtrl', function($scope, $http) {

	$http.get('cars/cars.json').success(function(data) {
		$scope.models = data;
	});


	$scope.orderProp = 'age';
});

// tvtsApp.controller("ModelDetailCtrl", function($scope, $routeParams) {
// 	$scope.modelId = $routeParams.modelId;
// });