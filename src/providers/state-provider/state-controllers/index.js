import angular from 'angular';
import adminCtrl from '../admin-state/adminCtrl';
import svgCtrl from '../color-state/svg-state/svgCtrl';
import galleryCtrl from '../gallery-state/galleryCtrl';
import categoryCtrl from '../gallery-state/category-state/categoryCtrl';
import homeCtrl from '../home-state/homeCtrl';
import personalGalleryCtrl from '../personal-gallery-state/personalGalleryCtrl';

const stateCtrls = angular.module( 'statecontrollers', [] );

adminCtrl(stateCtrls);
galleryCtrl(stateCtrls);
svgCtrl(stateCtrls);
categoryCtrl(stateCtrls);
homeCtrl(stateCtrls);
personalGalleryCtrl(stateCtrls);

export default stateCtrls.name;
