'use strict';
export default function( ngModule ) {


  ngModule.factory( 'Gallery',function( API_URL, $resource, $cacheFactory ) {

   return $resource( API_URL + '/images', {
     update: { method: 'PATCH' }
   });

  });

}
