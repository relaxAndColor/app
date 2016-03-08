'use strict';
export default function( ngModule ) {
	ngModule.factory( 'Gallery', [ '$http','$cacheFactory','API_URL', function( $http,$cacheFactory, API_URL ) {
    var galleryCache = $cacheFactory('gallery');
    return {
      getAll(){
        return $http({
          url: API_URL + '/images',
          method: 'GET',
          cache: galleryCache
        });
      },
      getCategory(category) {
        return $http({
          url: API_URL+'/images/'+category,
          method: 'GET'
        });
      },
      check() {
        console.log('works');
      },
      removeCache() {
        return galleryCache.removeAll();
      }
    };
}]);

}
