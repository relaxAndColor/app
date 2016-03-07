'use strict';

export default {
  url: '/login',
  data: {
    authReq: false
  },
  template: '<user-form form-type="Log In" user-action=logIn(user)> </user-form>',
  controller: ['$scope', function($scope) {
    $scope.logIn = function(user) {
      console.log('you tried to log in');
    };
  }]
};
