angular.module('starter.controllers')

.controller('ActDetailCtrl', function($scope, $stateParams, Acts, $state, $ionicPopup, $rootScope) {

  // $scope.startAct = function(act){
  //    $state.go('tab.play');
  // };
  $scope.setTime = function(mins){
    $scope.mins = mins;
  };

  $scope.start = function(selected){
    $state.go("play", {actId: $stateParams.actId, mins: $scope.mins});
  };
  $scope.act = Acts.get($stateParams.actId);
  $rootScope.$on('goDetail', function(event, toState, toParams, fromState, fromParams) {
    $scope.act = Acts.get($stateParams.actId);
    //$scope.acts = Acts.get($scope.act.id);
  });
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