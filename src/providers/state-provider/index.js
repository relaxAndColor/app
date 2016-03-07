'use strict';
import homeState from './home-state/home';


export default function($stateProvider) {
  $stateProvider
    .state('home', homeState )
}
