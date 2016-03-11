'use strict';
import template from './main-nav.html';
export default function( ngModule ) {
	ngModule.directive( 'mainNav', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
      controller: function mainNavCtr ($scope, $state, UserService) {

        UserService.setUser();

        $scope.logout = function() {
          UserService.removeUser();
          $state.go('home');
        };
      }
		};
	});
}
