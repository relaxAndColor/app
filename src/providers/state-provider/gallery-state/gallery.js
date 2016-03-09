'use strict';
import template from './gallery.html';

export default {
  url: '/gallery',
  data: {
    authReq: false
  },
  template,
  resolve: {
    svg (Gallery) {
      return Gallery.get({sort: '-view'}).$promise;
    }
  },
  controller: ['$scope','svg', function($scope, svg) {
    $scope.gallery = {};
    $scope.gallery.categories = ['Animals', 'Design'];
    $scope.gallery.images = svg.images;
  }]
};
