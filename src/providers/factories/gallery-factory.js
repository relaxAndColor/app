'use strict';
export default function( ngModule ) {

  ngModule.factory( 'Gallery', function( $resource) {

   return $resource( API_URL + '/api/image', {}, {
     update: { method: 'PATCH' }
   });

  });

}
