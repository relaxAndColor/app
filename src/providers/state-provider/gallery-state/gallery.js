'use strict';
import template from './gallery.html';

export default {
  url: '/gallery',
  data: {
    authReq: false
  },
  template,
  controller: ['$scope', function($scope) {
    $scope.click = function($event) {
      $scope.clickedElement = angular.element($event.target);
      $scope.clickedElement.css('fill', 'white');
    };
  }]
};
