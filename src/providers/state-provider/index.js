'use strict';
import homeState from './home-state/home';
import galleryState from './gallery-state/gallery';
import personalGalleryState from './personal-gallery-state/personal-gallery';
import profileState from './profile-state/profile';


export default function($stateProvider) {
  $stateProvider
    .state('home', homeState )
    .state('gallery', galleryState)
    .state('personalGallery', personalGalleryState)
    .state('profile', profileState);
}
