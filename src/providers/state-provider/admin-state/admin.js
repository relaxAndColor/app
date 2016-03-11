'use strict';
import template from './admin.html';
import './admin.scss';

export default {
  url: '/admin',
  data: {
    authReq: true,
    adminReq: true
  },
  template,
  controller: 'adminCtrl'
};
