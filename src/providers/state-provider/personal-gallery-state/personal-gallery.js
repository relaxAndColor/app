'use strict';
import template from './personal-gallery.html';

export default {
  url: '/personal-gallery',
  data: {
    authReq: true
  },
  template,
  resolve: {
    loadPersonal: function(SVG, $sce) {
      return SVG.query().$promise.then( images => {
        images.forEach( obj => {
          obj.svg = $sce.trustAsHtml(obj.svg);
        });
        return images;
      });
    }
  },
  controller: 'personalGalleryCtrl'
};
