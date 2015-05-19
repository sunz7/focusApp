angular.module('starter.controllers')

.controller('ActDetailCtrl', function($scope, $stateParams, Acts, $state, $ionicPopup) {
  $scope.act = Acts.get($stateParams.actId);
  $scope.startAct = function(act){
     $state.go('tab.play');
  };
  $scope.deleteAct = function(act){

   var confirmPopup = $ionicPopup.confirm({
     title: 'Really?',
     template: 'Are you sure you want to delete this activity?'
   });
   confirmPopup.then(function(res) {
     if(res) {
        Acts.remove(act);
        $state.go("tab.activities");
     }
   });
  };
});