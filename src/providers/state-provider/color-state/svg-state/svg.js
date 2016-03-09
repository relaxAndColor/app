'use strict';
import template from './svg.html';
import goatSvg from './animals-svg/goat.html';
import bullSvg from './animals-svg/bull.html';
import peacockSvg from './animals-svg/peacock.html';
var svgImages = {};
svgImages['Goat'] = { personal: goatSvg, original: goatSvg };
svgImages['Bull'] = { personal: bullSvg, original: bullSvg };
svgImages['Peacock'] = { personal: peacockSvg, original: peacockSvg };

export default {
  url: '/:svgName',
  template,
  resolve: {
    loadSVG: function($stateParams) {
      return svgImages[$stateParams.svgName];
    }
  },
  controller: ['$scope', '$stateParams', 'loadSVG', '$sce', function($scope, $stateParams, loadSVG, $sce) {
    $scope.svg = {};
    $scope.svg.name = $stateParams.svgName;
    $scope.svg.lastSavedImage = angular.copy(loadSVG.personal);
    $scope.svg.image = $sce.trustAsHtml(loadSVG.personal);
    $scope.svg.assignColor = function(color) {
      $scope.color = color;
    };
    $scope.svg.color = function($event) {
      $scope.clickedElement = angular.element($event.target);
      console.log($event.target.css);
      $scope.clickedElement.css('fill', $scope.color);
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
