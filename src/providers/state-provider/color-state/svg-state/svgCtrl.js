'use strict';
export default function(ngModule) {
  ngModule.controller('svgCtrl', function($scope, $sce, $state, $stateParams, loadPersonal, loadOriginal, SVG, Gallery) {
    var originalId = $stateParams.svgId;
    var personalId = $stateParams.personal;
    $scope.added = false;
    if (personalId) {
      $scope.added = true;
    }
    $scope.svg = {};
    $scope.svg.name = loadOriginal.title;
    $scope.svg.image = loadPersonal ? loadPersonal.svg : loadOriginal.svg;
    $scope.svg.confirmDelete = false;
    $scope.addToPersonal = function() {
      SVG.save({}, {original: originalId}).$promise.then( savedImg => {
        $state.go('color.svg', {personal: savedImg._id}, {reload: false});
        $scope.added = true;
      });
    };
    $scope.svg.color = function($event) {
      $event.target.style.fill = $scope.svg.chosenColor;
      $event.target.style['fill-opacity'] = 1;
      $scope.svg.image = $sce.trustAsHtml(document.getElementById('svgImage').innerHTML);
      $scope.svg.confirmDelete = false;
      $scope.updated = false;
    };
    $scope.svg.reset = function() {
      $scope.updated = false;
      Gallery.get({image_id: originalId}).$promise
      .then( original => {
        return SVG.update({image_id: personalId}, {svg: original.svg}).$promise;
      })
      .then( saved => {
        $scope.updated = true;
        $scope.svg.image = $sce.trustAsHtml(saved.svg);
        $scope.svg.confirmDelete = false;
      });
    };
    $scope.svg.save = function() {
      var current = document.getElementById('svgImage').innerHTML;
      $scope.updated = false;
      SVG.update({image_id: personalId}, {svg: current}).$promise.then( saved => {
        $scope.svg.image = $sce.trustAsHtml(saved.svg);
        $scope.updated = true;
        $scope.svg.confirmDelete = false;
      });
    };
    $scope.svg.lastSaved = function() {
      SVG.get({image_id: personalId}).$promise
      .then( image => {
        $scope.svg.image = $sce.trustAsHtml(image.svg);
        $scope.svg.confirmDelete = false;
      });
    };
    $scope.svg.delete = function() {
      SVG.delete({image_id:personalId}).$promise
      .then( () => {
        $scope.svg.confirmDelete = false;
        $state.go('personalGallery');
      });
    };
  });
}
