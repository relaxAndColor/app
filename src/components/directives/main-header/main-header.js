'use strict';
import template from './main-header.html';


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

			}]
		};
	});
}
