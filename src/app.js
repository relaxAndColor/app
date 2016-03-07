'use strict';

/* Angular Vendors */
import angular from 'angular' ;
import angularRouter from 'angular-ui-router';
import angularMessages from 'angular-messages';

/* Authorization */
import satellizer from 'satellizer';

/* UI-Router State Provider Config */
import configStateProvider from './providers/state-provider';

/* Directives */
import directives from './components/directives';

/* HIDDEN CONFIGS */
const config = process.env;

const app = angular.module('rcApp', [
  angularRouter,
  angularMessages,
  satellizer,
  directives
]);


app.constant('baseUrl', 'http://localhost:8080');

app.config(['$authProvider','baseUrl', function($authProvider, baseUrl){
  $authProvider.facebook({
    clientId: config.FACEBOOK_APP_ID,
    url: baseUrl+'/auth/facebook',
  });
}]);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  configStateProvider($stateProvider);
}]);
// .run(['$rootScope', '$auth','$state', function($rootScope, $auth, $state) {
//     $rootScope.$on('$stateChangeStart', function(event,toState, toParms){
//       if(toState.data && toState.data.auth && !$auth.isAuthenticated()) {
//         event.preventDefault();
//         $state.transitionTo('home');
//       }
//     });
// }]);



angular.element(document).ready(function() {
  angular.bootstrap(document, ['rcApp']);
});
