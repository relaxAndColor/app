'use strict';

/* Angular Vendors */
import angular from 'angular' ;
import angularRouter from 'angular-ui-router';
import angularMessages from 'angular-messages';

const app = angular.module('rcApp', [
  angularRouter,
  angularMessages
]);


angular.element(document).ready(function() {
  angular.bootstrap(document, ['rcApp']);
});
