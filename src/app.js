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

const app = angular.module('rcApp', [
  angularRouter,
  angularMessages,
  satellizer,
  directives
]);


app.config(['$authProvider', function($authProvider){
  $authProvider.facebook({
    clientId: '932535226864625'
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
