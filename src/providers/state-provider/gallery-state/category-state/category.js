'use strict';
import template from './category.html';
import './category.scss';
export default {
  url: '/:categoryName?page',
  data: {
    authReq: false
  },
  template,
  resolve: {
    svg (Gallery, $sce, $stateParams) {
      window.scrollTo(0, 0);
      var query = { sort: '-view' };
      if ($stateParams.categoryName !== 'Popular') {
        query.category = $stateParams.categoryName;
      }
      if ($stateParams.page) {
        query.page = $stateParams.page;
      }
      return Gallery.get(query).$promise.then(function(svg){
        svg.images.forEach(function(object){
          object.svg = $sce.trustAsHtml(object.svg);
        });
        return svg;
      });
    }
  },
  controller: function($scope, $stateParams, svg, Gallery, $sce) {
    $scope.category = {};
    $scope.category.svgImages = svg.images;
    $scope.getNumber = function(num) {
      return new Array(num);
    };
    $scope.pages = Math.ceil(svg.count / 10);
    $scope.seePage = function (page) {
      Gallery.get({
        sort: '-view',
        page
      }).$promise.then( newSvgs =>  {
        newSvgs.images.forEach( obj => {
          obj.svg = $sce.trustAsHtml(obj.svg);
        });
        $scope.category.svgImages = obj.svg;
        $scope.pages = Math.ceil(obj.count / 10);
      })
    }
    $scope.svgImages = svg.images;
    $scope.pages = new Array( Math.ceil(svg.count / 10) );
  }
};
