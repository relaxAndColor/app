'use strict';
import template from './gallery.html';

export default {
  url: '/gallery',
  data: {
    authReq: false
  },
  template,
  resolve: {
    load: function() {
      var date = new Date();
      return {svgImages: [
        {
          name: 'Goat',
          category: 'Animals',
          fileName: 'goat.svg',
          dateAdded: date
        },
        {
          name: 'Peacock',
          category: 'Animals',
          fileName: 'peacock.svg',
          dateAdded: date
        },
        {
          name: 'Bull',
          category: 'Animals',
          fileName: 'bull.svg',
          dateAdded: date
        }
      ]};
    }
  },
  controller: ['$scope','load', function($scope, load) {
    $scope.gallery = {};
    $scope.gallery.svgImages = load.svgImages;
  }]
};
