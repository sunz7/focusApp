angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $state) {
    $scope.fbLogin = function() {
        openFB.login(
            function(response) {
                if (response.status === 'connected') {
                    console.log('Facebook login succeeded');
                    $scope.closeLogin();
                } else {
                    alert('Facebook login failed');
                }
            },
            {scope: 'email,publish_actions'});
    };
    $scope.closeLogin = function() {
        $state.go('tab.activities');
    };
});
