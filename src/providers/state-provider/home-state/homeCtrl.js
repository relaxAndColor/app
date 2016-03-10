'use strict';
export default function(ngModule) {
  ngModule.controller('homeCtrl',['$scope', '$auth', function($scope, $auth) {
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
    $scope.register = function(user) {
      console.log('you tried to register');
    };
    $scope.logIn = function(user) {
      console.log('you tried to log in');
    };
  }]
);
}
