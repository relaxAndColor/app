'use strict';
import template from './admin.html';

export default {
  url: '/admin',
  data: {
    authReq: true
  },
  template,
  controller: ['$scope','$sce', function($scope,  $sce) {
    $scope.image = {};
    $scope.image.submit = function(image) {
      // save to database
    };
  }]
};
