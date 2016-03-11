export default function( ngModule ) {

  ngModule.factory( 'UserService', function( $http, $window, $rootScope, jwtHelper ) {

    var service = {};

    service.login = function(user) {
      return $http({
        url: API_URL + '/auth/email/login',
        method: 'POST',
        data: user
      }).then(function(res) {
        $rootScope.notAdminError = false;
        $rootScope.notAuthorizedError = false;
        return res.data;
      });
    };

    service.signup = function(user) {
      return $http({
        url: API_URL + '/auth/email/signup',
        method: 'POST',
        data: user
      }).then(function(res) {
        $rootScope.notAdminError = false;
        $rootScope.notAuthorizedError = false;
        return res.data;
      });
    };

    service.setUser = function(token) {
      token = token || $window.localStorage.getItem('satellizer_token');
      if (token) {
        $rootScope.userPayload = jwtHelper.decodeToken(token);
      }
      $rootScope.notAdminError = false;
      $rootScope.notAuthorizedError = false;
    };

    service.removeUser = function() {
      window.localStorage.removeItem('satellizer_token');
      $rootScope.userPayload = undefined;
      $rootScope.notAdminError = false;
      $rootScope.notAuthorizedError = false;
    };

    return service;

  });

}
