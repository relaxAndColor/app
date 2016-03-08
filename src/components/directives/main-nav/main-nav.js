'use strict';
import template from './main-nav.html';
import styles from './main-nav.scss';

export default function( ngModule ) {
	ngModule.directive( 'mainNav', function(){
		return {
			replace: true,
			restrict: 'E',
			template
		};
	});
}
