'use strict';
import template from './personal-gallery.html';

export default {
  url: '/personal-gallery',
  data: {
    auth: true
  },
  template,
  resolve: {
    loadPersonal: function() {
      var date = new Date();
      return {svgImages: [
        {
          name: 'Goat',
          user: 'Batman',
          category: 'Animals',
          fileName: 'personal-goat.svg',
          dateAdded: date
        },
        {
          name: 'Peacock',
          user: 'Batman',
          category: 'Animals',
          fileName: 'personal-peacock.svg',
          dateAdded: date
        },
        {
          name: 'Bull',
          user: 'Batman',
          category: 'Animals',
          fileName: 'personal-bull.svg',
          dateAdded: date
        }
      ]};
    }
  },
  controller: ['$scope','loadPersonal', function($scope, loadPersonal) {
    $scope.personal = {};
    $scope.personal.user = 'Batman';
    $scope.personal.svgImages = loadPersonal.svgImages;
  }]
};
