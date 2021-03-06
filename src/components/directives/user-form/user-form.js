'use strict';
import template from './user-form.html';

export default function( ngModule ) {
	ngModule.directive( 'userForm', function(){
		return {
			replace: true,
			restrict: 'E',
			template,
    	scope: {
				formType: '@',
        userAction: '&'
			},
			controller: ['$scope',function($scope) {
        $scope.userInfo = {};
        $scope.signin = function() {
          $scope.userAction()($scope.userInfo);
          $scope.userInfo = {};
          $scope.userForm.$setUntouched();
        };
		  }]
		};
	});
}
