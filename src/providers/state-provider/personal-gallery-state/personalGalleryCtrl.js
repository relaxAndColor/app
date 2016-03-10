'use strict';
export default function(ngModule) {
  ngModule.controller('personalGalleryCtrl',['$scope','loadPersonal', function($scope, loadPersonal) {
    $scope.personal = {};
    $scope.personal.user = 'Batman';
    $scope.personal.svgImages = loadPersonal.svgImages;
  }]
);
}
