'use strict';
import template from './category.html';
var categoryImages = {};
var date = new Date();
categoryImages['Animals'] =  [
  {
    name: 'Goat',
    category: 'Animals',
    fileName: 'goat.svg',
    views: 10,
    dateAdded: date
  },
  {
    name: 'Peacock',
    category: 'Animals',
    fileName: 'peacock.svg',
    views: 100,
    dateAdded: date
  },
  {
    name: 'Bull',
    category: 'Animals',
    fileName: 'bull.svg',
    views: 2,
    dateAdded: date
  }
];
categoryImages['Designs'] = [
  {
    name: 'Leaves',
    category: 'Designs',
    fileName: 'leaves.svg',
    views: 12,
    dateAdded: date
  },
  {
    name: 'Circles',
    category: 'Designs',
    fileName: 'circle.svg',
    views: 19,
    dateAdded: date
  },
  {
    name: 'Squares',
    category: 'Designs',
    fileName: 'squares.svg',
    views: 19,
    dateAdded: date
  }
];


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
    },
    loadCategory: function($stateParams) {
      // load on category here
    }
  },
  controller: ['$scope','loadCategory','$stateParams','svg', function($scope, loadCategory, $stateParams, svg) {
    $scope.category = {};
    $scope.category.name = $stateParams.categoryName;
    console.log($stateParams.categoryName);
    $scope.category.svgImages = svg;
  }]
};
