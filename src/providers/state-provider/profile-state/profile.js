'use strict';
import template from './profile.html';

export default {
  url: '/profile',
  data: {
    authReq: true
  },
  template,
  controller: ['$scope', function($scope) {

  }]
};
