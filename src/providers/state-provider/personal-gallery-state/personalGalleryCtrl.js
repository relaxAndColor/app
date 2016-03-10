'use strict';
export default function(ngModule) {
  ngModule.controller('personalGalleryCtrl', function($scope, loadPersonal, jwtHelper, $window) {
    $scope.personal = {};

    var token = $window.localStorage.getItem('satellizer_token');
    if (token) {
      var payload = jwtHelper.decodeToken(token);
      $scope.personal.user = payload;
    }

    $scope.personal.svgImages = loadPersonal;
  });
}
