angular.module('starter.controllers')

.controller('EditCtrl', function($scope, Acts, $state, $rootScope, $stateParams) {
	//Acts.all().then(function(data){
		//$scope.newAct.id = data.length + 1;
	//});
	$scope.act = Acts.get($stateParams.actId);
	$scope.act.starts = new Date($scope.act.starts);
	$scope.act.ends = new Date($scope.act.ends);


	//$scope.act.id = Acts.all().length + 1;
	$scope.doneEdit = function(newAct) {
		//Acts.add(newAct);
		var acts = Acts.all();
		for(var key in acts){
			if(acts[key].id === newAct.id){
				acts[key] = newAct;
			}
		}
		Acts.setAll(acts);
		$rootScope.$broadcast('addNewActSuccess');
		$state.go('tab.activities');

	};

});