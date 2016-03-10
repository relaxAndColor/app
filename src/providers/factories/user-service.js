export default function( ngModule ) {

  ngModule.factory( 'UserService', function( $http ) {

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

    return service;

  });

}
