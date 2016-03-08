'use strict';
import angular from 'angular';
import galleryFactory from './gallery-factory';
import svgFactory from './svg-factory';

const factories = angular.module( 'factories', [] );

galleryFactory(factories);
svgFactory(factories);


export default factories.name;
