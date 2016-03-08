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
categoryImages['All'] = categoryImages['Designs'].concat(categoryImages['Animals']);

export default {
  url: '/gallery/:categoryName',
  data: {
    authReq: false
  },
  template,
  resolve: {
    loadCategory: function($stateParams) {
      return categoryImages[$stateParams.categoryName];
    }
  },
  controller: ['$scope','loadCategory','$stateParams', function($scope, loadCategory, $stateParams) {
    $scope.category = {};
    $scope.category.name = $stateParams.categoryName;
    $scope.category.svgImages = loadCategory;
  }]
};
