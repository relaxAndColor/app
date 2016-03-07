'use strict';
import template from './nav-link.html';

export default function( ngModule ) {
	ngModule.directive( 'navLink', function(){
		return {
			replace: true,
			restrict: 'E',
			template,
      scope: {
        state: '@',
        pageName: '@'
      }
		};
	});
}
