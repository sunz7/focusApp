angular.module('starter.controllers')

.controller('ActCtrl', function($scope, Acts, $rootScope) {
	$scope.acts = Acts.all();
	console.log($scope.acts);
	$scope.goDetail = function(act){
		$rootScope.$broadcast('goDetail');
	};
  	$scope.remove = function(act) {
    	Acts.remove(act);
  	};
  	$rootScope.$on('addNewActSuccess', function(event, toState, toParams, fromState, fromParams) {
		$scope.acts = Acts.all();
	});
});