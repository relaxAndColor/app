'use strict';
import template from './admin.html';

export default {
  url: '/admin',
  data: {
    authReq: true
  },
  template,
  controller: ['$scope', 'Gallery', function($scope, Gallery) {
    $scope.image = {};
    $scope.image.categories = ['Animal', 'Abstract', 'Floral'];
    $scope.image.submit = function(image) {
      Gallery.save(image).$promise.then(res => {
        $scope.success = true;
      });
    };
  }]
};
