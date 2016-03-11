'use strict';
export default function(ngModule) {
  ngModule.controller('personalGalleryCtrl', function($scope, loadPersonal, $rootScope) {
    $scope.personal = {};

    $scope.username = $rootScope.userPayload.displayName || $rootScope.userPayload.email;

    $scope.personal.svgImages = loadPersonal;
  });
}
