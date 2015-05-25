angular.module('starter.controllers')

.controller('ReflectionCtrl', function($scope) {
  $scope.reflection = {
  	image: 'https://raw.githubusercontent.com/sunz7/focusApp/master/www/img/Reflection1.png',
  	question: '',
  	myAnswser: ''

  };
  $scope.reflecting = false;
  $scope.reflected = false;
});
