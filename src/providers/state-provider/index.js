'use strict';
import homeState from './home-state/home';
import loginState from './home-state/log-in-state/log-in';
import registerState from './home-state/register-state/register';
import galleryState from './gallery-state/gallery';
import categoryState from './category-state/category';
import personalGalleryState from './personal-gallery-state/personal-gallery';
import profileState from './profile-state/profile';
import adminState from './admin-state/admin';
import colorState from './color-state/color';
import svgState from './color-state/svg-state/svg';


export default function($stateProvider) {
  $stateProvider
    .state('home', homeState )
    .state('home.login', loginState)
    .state('home.register', registerState)
    .state('gallery', galleryState)
    .state('category', categoryState)
    .state('personalGallery', personalGalleryState)
    .state('color', colorState)
    .state('color.svg', svgState)
    .state('profile', profileState)
    .state('admin', adminState );
}
