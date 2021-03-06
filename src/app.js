'use strict';
/* Styling */
import './style/colorpicker.css';
import './style/main.scss';
import 'purecss';

/* Vendors */
import angular from 'angular' ;
import angularRouter from 'angular-ui-router';
import angularMessages from 'angular-messages';
import ngResource from 'angular-resource';
import jwt from 'angular-jwt';
import 'angular-color-picker';

/* Authorization */
import satellizer from 'satellizer';

/* UI-Router State Provider Config */
import configStateProvider from './providers/state-provider';

/* Factories */
import factories from './providers/factories';

/* Directives */
import directives from './components/directives';

/*Validators */
import validators from './components/form-validations';

/*State Controllers */
import stateControllers from './providers/state-provider/state-controllers';

const app = angular.module('rcApp', [
  angularRouter,
  angularMessages,
  ngResource,
  jwt,
  stateControllers,
  'mp.colorPicker',
  satellizer,
  directives,
  factories,
  validators
]);

app.config(['$authProvider', function($authProvider) {
  $authProvider.facebook({
    url: (API_URL || '') + '/auth/facebook',
    clientId: CLIENT_ID
  });
}]);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  configStateProvider($stateProvider);
}])
.run( function($rootScope, $auth, $state, UserService) {
    $rootScope.root = {};
    $rootScope.root.wating=false;
    UserService.setUser();
    $rootScope.$on('$stateChangeStart', function (event,toState, toParms) {
      if (toState.data && toState.data.authReq && !$auth.isAuthenticated() ) {
        event.preventDefault();
        $state.transitionTo('home', {}, {reload: true});
        $rootScope.notAuthorizedError = true;
      } else if (toState.data && toState.data.adminReq && !$rootScope.userPayload.admin) {
        event.preventDefault();
        $state.transitionTo('home', {}, {reload: true});
        $rootScope.notAdminError = true;
      } else {
        $rootScope.root.waiting = true;
        $rootScope.notAdminError = false;
        $rootScope.notAuthorizedError = false;
      }
    });
    $rootScope.$on('$stateChangeSuccess', function() {
      $rootScope.root.waiting = false;
    });
});

angular.element(document).ready(function() {
  angular.bootstrap(document, ['rcApp']);
});
