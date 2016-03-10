'use strict';
import template from './svg.html';
import './svg.scss';


export default {
  url: '/:svgName',
  template,
  resolve: {
    loadSVG: function($stateParams, Gallery, $sce) {
      return Gallery.get({image_id: $stateParams.svgName}).$promise.then( image => {
        image.svg = $sce.trustAsHtml(image.svg);
        return image;
      });
    }
  },
  controller: ['$scope', '$stateParams', 'loadSVG', '$sce', function($scope, $stateParams, loadSVG, $sce) {
    $scope.svg = {};
    $scope.svg.name = loadSVG.title;
    $scope.svg.lastSavedImage = angular.copy(loadSVG.personal);
    $scope.svg.image = loadSVG.svg;
    $scope.svg.assignColor = function(color) {
      $scope.color = color;
    };
    $scope.svg.color = function($event) {
      $event.target.style['fill'] = $scope.color;
      $event.target.style['fill-opacity'] = 1;
    };
    $scope.svg.reset = function() {
      angular.element(document).find('svg').html(loadSVG.original);
    };
    $scope.svg.save = function() {
      $scope.svg.lastSavedImage = angular.copy(angular.element(document).find('svg').html());
      // post to database saved image
    };
    $scope.svg.lastSaved = function() {
      angular.element(document).find('svg').html($scope.svg.lastSavedImage);
      // get new data from database of saved value;
    };
    $scope.svg.delete= function() {
      console.log('image deleted');
    };


  }]
};
