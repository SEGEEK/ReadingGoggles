'use strict';

describe('Service: feedParser', function () {

  // load the service's module
  beforeEach(module('ReadingGooglesApp'));

  // instantiate service
  var feedParser;
  var $httpBackend;
  beforeEach(inject(function (_feedParser_, _$httpBackend_) {
    feedParser = _feedParser_;
    $httpBackend = _$httpBackend_;
  }));

  it('should request data from server', function () {
    $httpBackend.expectGET('/feedData/url/').respond(
        {posts: [ {name:'postName', data: 'postData'}]});;
    
    feedParser.getFeedData('url');
    
    $httpBackend.verifyNoOutstandingExpectation();
  });

});
