'use strict';
export default function(ngModule) {
  ngModule.controller('homeCtrl',['$scope', '$auth', '$window', 'UserService', 'AdminService', function($scope, $auth, $window, User, Admin) {
    $scope.user = {};
    $scope.user.authenticate = function(provider){
      $auth.authenticate(provider)
        .then(function(response){
          console.log('you logged in');
          Admin.checkUser();
        })
        .catch(function(error){
          console.log(error);
        });
    };
    $scope.user.logOut = function() {
      $window.localStorage.removeItem('satellizer_token');
      Admin.checkUser();
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
