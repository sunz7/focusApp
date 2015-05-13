angular.module('starter.controllers')

.controller('ActCtrl', function($scope, Acts) {
	$scope.acts = Acts.all();
  	$scope.remove = function(act) {
    	Acts.remove(act);
  	}
});