angular.module('starter.controllers')

.controller('EditCtrl', function($scope, Acts, $state, $rootScope, $stateParams) {
	//Acts.all().then(function(data){
		//$scope.newAct.id = data.length + 1;
	//});
	$scope.act = Acts.get($stateParams.actId);
	$scope.act.starts = new Date($scope.act.starts);
	$scope.act.ends = new Date($scope.act.ends);

	$scope.act.defaultCat = {name: "work", image: "https://raw.githubusercontent.com/sunz7/focusApp/master/www/img/work.png"};
	$scope.act.category = $scope.act.defaultCat.name;
	$scope.categories = [
		{name: "work", image: "https://raw.githubusercontent.com/sunz7/focusApp/master/www/img/work.png"},
		{name: "study", image: "https://raw.githubusercontent.com/sunz7/focusApp/master/www/img/study.png"},
		{name: "recreate", image: "https://raw.githubusercontent.com/sunz7/focusApp/master/www/img/recreate.png"}
	];

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
		$scope.$watch("act.category", function(nv, ov){
			for(var key in $scope.categories){
				if(nv === $scope.categories[key].name){
					$scope.act.image = $scope.categories[key].image;
				}
			}
	}, true);
});