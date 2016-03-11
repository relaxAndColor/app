'use strict';
export default function(ngModule) {
  ngModule.controller('categoryCtrl',['$scope', 'svg', '$stateParams', function($scope, svg, $stateParams) {
    $scope.selectedCategory = $stateParams.categoryName;
    $scope.svgImages = svg.images;
    $scope.pages = new Array( Math.ceil(svg.count / 10) );
  }]
);
}
