angular.module('starter.controllers')

.controller('ActCtrl', function($scope, Acts) {
	$scope.acts = Acts.all();
	console.log($scope.acts);
  	$scope.remove = function(act) {
    	Acts.remove(act);
  	}
});