'use strict';
import template from './main-nav.html';
import './main-nav.scss';

export default function( ngModule ) {
	ngModule.directive( 'mainNav', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
      controller: function mainNavCtr ($scope, $rootScope, $state, $window, jwtHelper) {

        var token = $window.localStorage.getItem('satellizer_token');
        if (token) {
          $rootScope.userPayload = jwtHelper.decodeToken(token);
        }

        $scope.logout = function() {
          $rootScope.userPayload = undefined;
          $window.localStorage.removeItem('satellizer_token');
          $state.go('home');
        };
      }
		};
	});
}
