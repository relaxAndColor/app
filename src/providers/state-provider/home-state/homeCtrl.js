'use strict';
export default function(ngModule) {
  ngModule.controller('homeCtrl',['$scope', '$auth', '$window', 'UserService', function($scope, $auth, $window, User) {
    $scope.user = {};
    $scope.user.authenticate = function(provider){
      $auth.authenticate(provider)
        .then(function(response){
          console.log('you logged in');
        })
        .catch(function(error){
          console.log(error);
        });
    };
    $scope.user.logOut = function() {
      $window.localStorage.removeItem('satellizer_token');
    };
    $scope.register = function(user) {
      User.signup(user).then( data => {
        $window.localStorage.setItem('satellizer_token', data.token);
      });
    };
    $scope.logIn = function(user) {
      User.login(user).then( data => {
        $window.localStorage.setItem('satellizer_token', data.token);
      });
    };
  }]
);
}
