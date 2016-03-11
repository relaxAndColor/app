'use strict';
import homeState from './home-state/home';
import galleryState from './gallery-state/gallery';
import categoryState from './gallery-state/category-state/category';
import personalGalleryState from './personal-gallery-state/personal-gallery';
import adminState from './admin-state/admin';
import colorState from './color-state/color';
import svgState from './color-state/svg-state/svg';


export default function($stateProvider) {
  $stateProvider
    .state('home', homeState )
    .state('gallery', galleryState)
    .state('gallery.category', categoryState)
    .state('personalGallery', personalGalleryState)
    .state('color', colorState)
    .state('color.svg', svgState)
    .state('admin', adminState );
}
