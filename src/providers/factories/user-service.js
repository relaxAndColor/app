export default function( ngModule ) {

  ngModule.factory( 'UserService', function( $http, $window, $rootScope, jwtHelper ) {

    var service = {};

    service.login = function(user) {
      return $http({
        url: API_URL + '/auth/email/login',
        method: 'POST',
        data: user
      }).then(function(res) {
        return res.data;
      });
    };

    service.signup = function(user) {
      return $http({
        url: API_URL + '/auth/email/signup',
        method: 'POST',
        data: user
      }).then(function(res) {
        return res.data;
      });
    };

    service.setUser = function(token) {
      token = token || $window.localStorage.getItem('satellizer_token');
      if (token) {
        $rootScope.userPayload = jwtHelper.decodeToken(token);
      }
    };

    service.removeUser = function() {
      window.localStorage.removeItem('satellizer_token');
      $rootScope.userPayload = undefined;
    };

    return service;

  });

}
