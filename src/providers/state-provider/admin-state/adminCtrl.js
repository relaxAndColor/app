'use strict';
export default function(ngModule) {
  ngModule.controller('adminCtrl',['$scope', 'Gallery', function($scope, Gallery) {
    $scope.image = {};
    $scope.image.categories = ['Animal', 'Abstract', 'Floral'];
    $scope.image.submit = function(image) {
      Gallery.save(image).$promise.then(res => {
        $scope.success = true;
      });
    };
  }]
);
}
