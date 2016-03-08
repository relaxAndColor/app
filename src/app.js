'use strict';
/* Styling */
import './style/colorpicker.css';

/* Vendors */
import angular from 'angular' ;
import angularRouter from 'angular-ui-router';
import angularMessages from 'angular-messages';
import 'angular-color-picker';

/* Authorization */
import satellizer from 'satellizer';

/* UI-Router State Provider Config */
import configStateProvider from './providers/state-provider';

/* Factories */
import factories from './providers/factories';

/* Directives */
import directives from './components/directives';

const app = angular.module('rcApp', [
  angularRouter,
  angularMessages,
  'mp.colorPicker',
  satellizer,
  directives,
  factories
]);

app.constant('API_URL', process.env.API_URL);
app.constant('CLIENT_ID', process.env.CLIENT_ID);


app.config(['$authProvider', 'API_URL','CLIENT_ID', function($authProvider, API_URL, CLIENT_ID){
  $authProvider.facebook({
    url: (API_URL || '') + '/auth/facebook',
    clientId: CLIENT_ID
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
