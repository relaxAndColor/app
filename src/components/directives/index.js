'use strict';
import mainHeader from './main-header/main-header';
import mainNav from './main-nav/main-nav';
import navLink from './main-nav/nav-link/nav-link';

const directives = angular.module( 'directives', [] );

mainHeader(directives);
mainNav(directives);
navLink(directives);

export default directives.name;
