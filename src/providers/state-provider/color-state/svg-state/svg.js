'use strict';
import template from './svg.html';
import './svg.scss';


export default {
  url: '/:svgName',
  template,
  resolve: {
    loadSVG: function($stateParams, Gallery, $sce) {
      return Gallery.get({image_id: $stateParams.svgName}).$promise.then( image => {
        image.svg = $sce.trustAsHtml(image.svg);
        return image;
      });
    }
  },
  controller: 'svgCtrl'
};
