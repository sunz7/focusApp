angular.module('starter.controllers')

.controller('AccountCtrl', function($scope, $state) {
    openFB.api({
        path: '/me',
        params: {fields: 'id,name'},
        success: function(user) {
            $scope.$apply(function() {
            	console.log(user);
                $scope.user = user;
            });
        },
        error: function(error) {
            alert('Facebook error: ' + error.error_description);
        }
    });

    $scope.logout = function () {
        openFB.logout();
        $state.go('login');
        console.log('logout');
    };
    
    // removePermission
    // $scope.revokePermissions = function () {
    //     openFB.revokePermissions();
    // };
});