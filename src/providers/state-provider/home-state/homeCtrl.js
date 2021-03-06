'use strict';
export default function(ngModule) {
  ngModule.controller('homeCtrl', function($scope, $auth, UserService, $anchorScroll, $rootScope, $location) {

    if ($rootScope.notAuthorizedError || $rootScope.notAdminError) {
        $location.hash('loginBox');
        $anchorScroll();
    }

    $scope.user = {};
    $scope.user.register = true;
    $scope.user.authenticate = function(provider){
      $auth.authenticate(provider)
        .then( response => {
          UserService.setUser();
        })
        .catch(function(error){
          console.log(error);
        });
    };
    $scope.user.logOut = function() {
      UserService.removeUser();
    };
    $scope.register = function(user) {
      UserService.signup(user).then( data => {
        UserService.setUser(data.token);
      });
    };
    $scope.logIn = function(user) {
      UserService.login(user).then( data => {
        UserService.setUser(data.token);
      });
    };
  }
);
}
