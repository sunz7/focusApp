angular.module('starter.controllers')

.controller('ReflectionCtrl', function($scope) {
  $scope.reflection = {
  	image: 'http://upload.wikimedia.org/wikipedia/commons/e/ef/Mount_Hood_reflected_in_Mirror_Lake,_Oregon.jpg',
  	question: '',
  	myAnswser: ''

  };
  $scope.reflecting = false;
  $scope.reflected = false;
});
