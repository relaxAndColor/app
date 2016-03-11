'use strict';
import mainNav from './main-nav/main-nav';
import userForm from './user-form/user-form';
import loader from './loader/loader';

const directives = angular.module( 'directives', [] );

mainNav(directives);
userForm(directives);
loader(directives);

export default directives.name;
