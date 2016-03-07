'use strict';
import template from './profile.html';

export default {
  url: '/home',
  data: {
    authReq: true
  },
  template,
  controller: ['$scope', function($scope) {

  }]
};
