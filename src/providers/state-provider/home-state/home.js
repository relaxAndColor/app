'use strict';
import template from './home.html';
import './home.scss';

export default {
  url: '/home',
  data: {
    authReq: false
  },
  template,
  controller: 'homeCtrl'
};
