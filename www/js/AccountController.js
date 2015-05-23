angular.module('starter.controllers')

.controller('AccountCtrl', function($scope,$state) {
    $scope.logout = true;
    // $scope.act = Acts.get($stateParams.actId);
    openFB.api({
        path: '/me',
        params: {fields: 'id,name'},
        success: function(user) {
            $scope.$apply(function() {
            	console.log(user);
                $scope.user = user;
                $scope.logout = true;
            });
        },
        error: function(error) {
            console.log(error);
            $scope.logout = false;
        }
    });

    $scope.logout = function () {
        openFB.logout();
        $state.go('login');
    };
    
    // removePermission
    // $scope.revokePermissions = function () {
    //     openFB.revokePermissions();
    // };
});