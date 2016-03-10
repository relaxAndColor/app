'use strict';
import template from './gallery.html';


export default {
  url: '/gallery',
  data: {
    authReq: false
  },
  template,
  controller: 'galleryCtrl'
};
