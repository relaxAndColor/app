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
    svg (Gallery, $sce, $stateParams,$timeout) {
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
  controller: 'categoryCtrl'
};
