angular.module('starter.controllers')

.controller('ChallengeCtrl', function($scope, Challenges, $ionicPopup) {
  $scope.settings = {
    enableFriends: false
  };
  var today = false;
  $scope.chas = Challenges.getAll();

    $scope.addOne = function(cha){
    if(today){
     var confirmPopup = $ionicPopup.confirm({
       title: 'Try Tomorrow',
       template: 'You already completed this challenge today'
    });
    confirmPopup.then(function(res) {
     if(res) {
        $state.go("tab.challenges");
     }
   });

    }else{
      today = true;
      cha.completed += 1;
      Challenges.update(cha);
    }

  };
  $scope.remove = function(cha){
  	$scope.chas.splice($scope.chas.indexOf(cha), 1);
  	Challenges.remove(cha);
  }
});