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
      return {categories: [
        'Animals', 'Designs', 'All'
      ]};
    }
  },
  controller: ['$scope','load', function($scope, load) {
    $scope.gallery = {};
    $scope.gallery.categories = load.categories;
  }]
};
