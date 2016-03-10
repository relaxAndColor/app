'use strict';
export default function(ngModule) {
  ngModule.controller('categoryCtrl',['$scope', 'svg', function($scope, svg) {
    $scope.svgImages = svg.images;
    $scope.pages = new Array( Math.ceil(svg.count / 10) );
  }]
);
}
