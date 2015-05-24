angular.module('starter.controllers')
.controller('SuccessCtrl', function($scope,$state,Acts,$stateParams) {
	$scope.mins = $stateParams.mins;
    $scope.act = Acts.get($stateParams.actId);
    console.log($scope.act);
    $scope.completedHr = ($scope.act.completed * 60) % 300;
    $scope.leftH = $scope.completedHr / 60;
    $scope.leftM = $scope.completedHr % 60;
});