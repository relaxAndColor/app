'use strict';
import angular from 'angular';
import galleryFactory from './gallery-factory';
import svgFactory from './svg-factory';
import UserService from './user-service';
import AdminService from './admin-factory';

const factories = angular.module( 'factories', [] );

galleryFactory(factories);
svgFactory(factories);
UserService(factories);
AdminService(factories);


export default factories.name;
