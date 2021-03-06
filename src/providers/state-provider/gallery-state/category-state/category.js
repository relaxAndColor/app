'use strict';
import template from './category.html';

export default {
  url: '/:categoryName?page',
  data: {
    authReq: true
  },
  template,
  resolve: {
    svg (Gallery, $sce, $stateParams,$timeout) {
      window.scrollTo(0, 0);
      var query = { sort: '-views' };
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
  controller: 'categoryCtrl'
};
