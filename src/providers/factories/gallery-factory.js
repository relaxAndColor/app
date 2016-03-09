'use strict';
export default function( ngModule ) {

  ngModule.factory( 'Gallery', function( $resource) {

   return $resource( API_URL + '/api/gallery/:image_id', {
    image_id: '@_image_id'
   }, {
     update: { method: 'PATCH' }
   });

  });

}
