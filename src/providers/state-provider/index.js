'use strict';
import homeState from './home-state/home';
import loginState from './home-state/log-in-state/log-in';
import registerState from './home-state/register-state/register';
import galleryState from './gallery-state/gallery';
import personalGalleryState from './personal-gallery-state/personal-gallery';
import profileState from './profile-state/profile';
import adminState from './admin-state/admin';


export default function($stateProvider) {
  $stateProvider
    .state('home', homeState )
    .state('home.login', loginState)
    .state('home.register', registerState)
    .state('gallery', galleryState)
    .state('personalGallery', personalGalleryState)
    .state('profile', profileState)
    .state('admin', adminState );
}
