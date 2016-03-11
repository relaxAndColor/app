export default function( ngModule ) {

  ngModule.factory( 'AdminService', function( $rootScope, $window, jwtHelper ) {

    var service = {};

    service.checkUser = function() {
      var token = $window.localStorage.getItem('satellizer_token');
      if (token) {
        var payload = jwtHelper.decodeToken(token);
        $rootScope.root.admin = payload.admin;
      } else {
        $rootScope.root.admin = false;
      }
    };

    return service;

  });

}
