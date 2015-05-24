angular.module('starter.controllers')

.controller('FailureCtrl', function($scope, $state, $stateParams) {
	$scope.mins = $stateParams.mins;
	$scope.startOver = function() {
		$state.go('tab.activities');
	}
});