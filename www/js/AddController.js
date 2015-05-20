angular.module('starter.controllers')

.controller('AddCtrl', function($scope, Acts, $state) {
	//Acts.all().then(function(data){
		//$scope.newAct.id = data.length + 1;
	//});
	$scope.act = {};
	$scope.act.id = Acts.all().length + 1;
	$scope.done = function(newAct) {
		Acts.add(newAct);
		$state.go('tab.activities');
	}
});