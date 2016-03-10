'use strict';
import template from './category.html';
import './category.scss';

export default {
  url: '/:categoryName',
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
  controller: ['$scope','$stateParams','svg', function($scope,$stateParams, svg) {
    $scope.category = {};
    $scope.category.name = $stateParams.categoryName;
    $scope.category.svgImages = svg;
  }]
};
