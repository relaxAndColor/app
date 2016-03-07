'use strict';
import template from './main-header.html';
import styles from './main-header.scss';

export default function( ngModule ) {
	ngModule.directive( 'mainHeader', function(){
		return {
			replace: true,
			restrict: 'E',
			template,
      scope: {
        mainTitle: '@'
      },
			controller: ['$scope', function($scope){
				$scope.styles = styles;
			}]
		};
	});
}
