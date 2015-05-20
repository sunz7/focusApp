angular.module('starter.controllers')

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: false
  };
    openFB.api({
        path: '/tab/account',
        params: {fields: 'id,name'},
        success: function(user) {
            $scope.$apply(function() {
                $scope.user = user;
            });
        },
        error: function(error) {
            alert('Facebook error: ' + error.error_description);
        }
    });
  
});