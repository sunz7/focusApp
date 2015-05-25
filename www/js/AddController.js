angular.module('starter.controllers')

.controller('AddCtrl', function($scope, Acts, $state, $rootScope) {
	//Acts.all().then(function(data){
		//$scope.newAct.id = data.length + 1;
	//});
	$scope.act = {
		completed: 0,
		image: 'https://raw.githubusercontent.com/sunz7/focusApp/master/www/img/work.png'
	};
	$scope.act.id = Acts.all().length + 1;
	$scope.done = function(newAct) {
		Acts.add(newAct);
		$rootScope.$broadcast('addNewActSuccess');
		$state.go('tab.activities');
	};

});