'use strict';

export default function( ngModule ) {

  ngModule.factory( 'SVG', function( $resource ) {

   return $resource( API_URL + '/api/personal/:image_id', {
      image_id: '@_image_id'
    }, {
     update: { method: 'PATCH' }
   });

  });

}
