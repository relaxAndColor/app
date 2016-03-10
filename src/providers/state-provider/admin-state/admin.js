'use strict';
import template from './admin.html';

export default {
  url: '/admin',
  data: {
    authReq: true
  },
  template,
  controller: 'adminCtrl'
};
