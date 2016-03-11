'use strict';
import template from './svg.html';
export default {
  url: '/:svgId?personal',
  template,
  resolve: {
    loadPersonal: function($stateParams, SVG, $sce) {
      if ($stateParams.personal) {
        return SVG.get({image_id: $stateParams.personal}).$promise.then( image => {
          image.svg = $sce.trustAsHtml(image.svg);
          return image;
        });
      } else return undefined;
    },
    loadOriginal: function($stateParams, Gallery, $sce) {
      return Gallery.get({image_id: $stateParams.svgId}).$promise.then( image => {
        image.svg = $sce.trustAsHtml(image.svg);
        return image;
      });
    }
  },
  controller: 'svgCtrl'
};
