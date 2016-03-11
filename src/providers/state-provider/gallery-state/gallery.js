'use strict';
import template from './gallery.html';


export default {
  url: '/gallery',
  data: {
    authReq: true
  },
  template,
  controller: 'galleryCtrl'
};
