'use strict';
import template from './gallery.html';


export default {
  url: '/gallery',
  data: {
    authReq: false
  },
  template,
  resolve: {
    svg (Gallery, $sce) {
      return Gallery.get({sort: '-view'}).$promise.then(function(svg){
        svg.images.forEach(function(object){
          object.svg = $sce.trustAsHtml(object.svg);
        });
        return svg.images;
      });
    }
  },
  controller: ['$scope','svg', function($scope, svg) {
    $scope.gallery = {};
    $scope.gallery.categories = ['Animals', 'Design'];
    $scope.gallery.images = svg;
  }]
};
