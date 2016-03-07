'use strict';

export default {
  url: '/register',
  data: {
    authReq: false
  },
  template: '<user-form form-type="Register" user-action=register(user)> </user-form>',
  controller: ['$scope', function($scope) {
    $scope.register = function(user) {
      console.log('you tried to register');
    };
  }]
};
