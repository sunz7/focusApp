angular.module('starter.controllers')

.controller('AccountCtrl', function($scope, $state) {
    openFB.api({
        path: '/me',
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

    $scope.logout = function () {
            openFB.logout();
            console.log('logout');
    };

    $scope.revokePermissions = function () {
            openFB.revokePermissions();
    };
  
});