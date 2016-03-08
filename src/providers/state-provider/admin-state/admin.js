'use strict';
import template from './admin.html';

export default {
  url: '/admin',
  data: {
    authReq: true
  },
  template,
  controller: ['$scope','$sce', function($scope,  $sce) {
    $scope.image = {};
    $scope.color = 'white';
    $scope.image.submit = function(image) {
      $scope.actualImage = $sce.trustAsHtml(image.svg);
    };
    $scope.assignColor = function(color) {
      $scope.color = color;
    };
    $scope.image.color = function($event) {
      $scope.clickedElement = angular.element($event.target);
      $scope.clickedElement.css('fill', $scope.color);
    };

  }]
};
