angular.module('starter.controllers')
.controller('SuccessCtrl', function($scope,$state,Acts,$stateParams) {
	$scope.mins = $stateParams.mins;
    $scope.act = Acts.get($stateParams.actId);
    $scope.completedHr = ($scope.act.completed * 100) % 500 / 100;
    console.log($scope.completedHr);
    $scope.remain = 5 - $scope.completedHr;
    $scope.goProfile = function() {
    	$state.go('tab.account');
    }
});