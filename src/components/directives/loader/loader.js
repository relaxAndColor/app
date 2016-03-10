'use strict';
import template from './loader.html';
import './loader.scss';

export default function( ngModule ) {
	ngModule.directive( 'loader', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
      scope: {
      },
      controller: ['$scope', function($scope){
        $scope.loader = 'Wait...';
      }]
		};
	});
}
