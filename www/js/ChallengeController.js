angular.module('starter.controllers')

.controller('ChallengeCtrl', function($scope, Challenges) {
  $scope.settings = {
    enableFriends: false
  };
  $scope.chas = Challenges.getAll();
  $scope.addOne = function(cha){
  	cha.completed += 1;
  	Challenges.update(cha);
  };
});