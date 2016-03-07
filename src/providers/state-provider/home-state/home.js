'use strict';
import template from './home.html';

export default {
  url: '/home',
  data: {
    authReq: false
  },
  template,
  controller: ['$scope', '$auth', function($scope, $auth) {
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
    $scope.user.logIn = function() {
      console.log('you tried to log in');
    };
    $scope.user.register = function() {
      console.log('you tried to register');
    };
    }]

};
