'use strict';
import mainHeader from './main-header/main-header';
import mainNav from './main-nav/main-nav';
import navLink from './main-nav/nav-link/nav-link';
import userForm from './user-form/user-form';

const directives = angular.module( 'directives', [] );

mainHeader(directives);
mainNav(directives);
navLink(directives);
userForm(directives);

export default directives.name;
