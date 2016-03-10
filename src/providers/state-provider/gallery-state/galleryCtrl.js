'use strict';
export default function(ngModule) {
  ngModule.controller('galleryCtrl',['$scope', function($scope) {
    $scope.gallery = {};
    $scope.gallery.categories = ['Popular','Animal', 'Abstract', 'Floral'];
    $scope.gallery.category = 'Popular';
  }]
);
}
