'use strict';
import template from './gallery.html';


export default {
  url: '/gallery',
  data: {
    authReq: false
  },
  template,
  controller: ['$scope', function($scope) {
    $scope.gallery = {};
    $scope.gallery.categories = ['Animals', 'Design'];
  }]
};
