'use strict';
describe('Adding a Svg File to the Database', function(){
  beforeEach(angular.mock.module('rcApp'));
  var $scope;
  var $httpBackend;
  var $controller;
    // 'use strict';
    // import template from './admin.html';
    //
    // export default {
    //   url: '/admin',
    //   data: {
    //     authReq: true
    //   },
    //   template,
    //   controller: ['$scope', 'Gallery', function($scope, Gallery) {
    //     $scope.image = {};
    //     $scope.image.categories = ['Animal', 'Abstract', 'Floral'];
    //     $scope.image.submit = function(image) {
    //       Gallery.save(image).$promise.then(res => {
    //         $scope.success = true;
    //       });
    //     };
    //   }]
    // };

  beforeEach(angular.mock.inject(function(_$rootScope_, _$httpBackend_, _$controller_) {
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;
    $controller = _$controller_;
    $httpBackend.whenPOST('/api/gallery').respond(function(method,url,data,headers){
      return [200, 'success'];
    });
  }));

  it( 'should have categories "Animal", "Abstract", "Floral"', function()  {
    $controller('adminCtrl', { $scope, $httpBackend} );
    expect($scope.image.categories).to.deep.equal(['Animal', 'Abstract', 'Floral']);
  });

  it( 'should have categories "Animal", "Abstract", "Floral"', function()  {
    $controller('adminCtrl', { $scope, $httpBackend} );
    $scope.image.title = 'Circle';
    $scope.image.category = 'Abstract';
    $scope.image.svg = 'test';
    $scope.image.submit($scope.image);
    $httpBackend.flush();
    expect($scope.success);
  });
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
});
