'use strict';
export default function( ngModule ) {
	ngModule.factory( 'SVG', [ '$http','API_URL', function( $http, API_URL ) {
    return {
      save(image){
        return $http({
          url: API_URL + '/user/images',
          method: 'POST',
          data: image
        });
      },
      update(image) {
        return $http({
          url: API_URL+'/user/images/'+image.name,
          method: 'PUT'
        });
      }
    };
}]);

}
