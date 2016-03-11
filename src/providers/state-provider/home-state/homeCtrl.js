'use strict';
export default function(ngModule) {
  ngModule.controller('homeCtrl',['$scope', '$auth', '$window', 'UserService', 'AdminService','jwtHelper', '$rootScope', function($scope, $auth, $window, User, Admin,jwtHelper, $rootScope) {
    $scope.user = {};
    $scope.user.authenticate = function(provider){
      $auth.authenticate(provider)
        .then(function(response){
          Admin.checkUser();
          var token = $window.localStorage.getItem('satellizer_token');
          $rootScope.userPayload = jwtHelper.decodeToken(token);
        })
        .catch(function(error){
          console.log(error);
        });
    };
    $scope.user.logOut = function() {
      $window.localStorage.removeItem('satellizer_token');
      Admin.checkUser();
      $rootScope.userPayload = undefined;
    };
    $scope.register = function(user) {
      User.signup(user).then( data => {
        $window.localStorage.setItem('satellizer_token', data.token);
        $rootScope.userPayload = jwtHelper.decodeToken(data.token);
      });
    };
    $scope.logIn = function(user) {
      User.login(user).then( data => {
        $window.localStorage.setItem('satellizer_token', data.token);
        $rootScope.userPayload = jwtHelper.decodeToken(data.token);
      });
    };
  }]
);
}
