angular.module('starter.controllers')

.controller('ReflectionCtrl', function($scope) {
  $scope.reflection = {
  	image: '',
  	question: '',
  	myAnswser: ''

  };
  $scope.reflecting = false;
  $scope.reflected = false;
});
